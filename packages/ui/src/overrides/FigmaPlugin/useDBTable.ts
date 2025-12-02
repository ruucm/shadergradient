import { useEffect, useState, useCallback } from 'react'
import { useSupabaseStore } from '../../store'

type Filter = {
  column: string
  value: any
}

type UseDBTableOptions = {
  filter?: Filter
  select?: string // Select specific columns (default: '*')
  limit?: number // Limit results
  enabled?: boolean // Enable/disable query (wait until filter value is ready)
}

export function useDBTable(
  table: string,
  channelName = 'any',
  options: UseDBTableOptions = {}
) {
  const { filter, select = '*', limit, enabled = true } = options
  const supabase = useSupabaseStore((state) => state.supabase)
  const [rows, setRows] = useState<any[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  // Disable query when filter value is undefined or null
  const shouldFetch =
    enabled &&
    (!filter || (filter.value !== undefined && filter.value !== null))

  useEffect(() => {
    if (!supabase) {
      console.log('[useDBTable] supabase client not initialized yet')
      return
    }

    if (!shouldFetch) {
      console.log(
        `[useDBTable] Skipping fetch for ${table} - filter value not ready:`,
        filter?.value
      )
      return
    }

    const fetchData = async () => {
      console.log(
        `[useDBTable] Fetching data for table: ${table}`,
        filter ? `with filter: ${filter.column}=${filter.value}` : ''
      )
      setLoading(true)
      setError(null)

      try {
        let query = supabase
          .from(table)
          .select(select)
          .order('id', { ascending: false })

        // Apply filter at DB level (filtering)
        if (filter) {
          query = query.eq(filter.column, filter.value)
        }

        // 결과 제한
        if (limit) {
          query = query.limit(limit)
        }

        const { data, error: fetchError } = await query

        if (fetchError) {
          console.error(`[useDBTable] Error fetching ${table}:`, fetchError)
          setError(fetchError)
          setRows([])
        } else {
          console.log(
            `[useDBTable] Fetched ${data?.length || 0} rows from ${table}`
          )
          setRows(data || [])
        }
      } catch (err) {
        console.error(`[useDBTable] Unexpected error fetching ${table}:`, err)
        setError(err as Error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [
    supabase,
    table,
    filter?.column,
    filter?.value,
    select,
    limit,
    shouldFetch,
  ])

  useEffect(() => {
    if (!supabase || !shouldFetch) return

    // Apply filter to Realtime subscription
    const realtimeFilter = filter
      ? `${filter.column}=eq.${filter.value}`
      : undefined

    console.log(
      `[useDBTable] Subscribing to channel: ${channelName} for table: ${table}`,
      realtimeFilter ? `with filter: ${realtimeFilter}` : ''
    )

    const channel = supabase
      .channel(channelName)
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table,
          filter: realtimeFilter, // Apply filter to Realtime
        },
        (payload) => {
          console.log(
            `[useDBTable] Realtime change received on ${table}:`,
            payload.eventType
          )
          const eventType = payload.eventType
          switch (eventType) {
            case 'INSERT':
              console.log(`[useDBTable] INSERT on ${table}:`, payload.new)
              setRows((prev) => [payload.new, ...prev])
              break
            case 'UPDATE':
              console.log(`[useDBTable] UPDATE on ${table}:`, payload.new)
              setRows((prev) =>
                prev.map((row) =>
                  row.id === payload.new.id ? payload.new : row
                )
              )
              break
            case 'DELETE':
              console.log(
                `[useDBTable] DELETE on ${table}, id:`,
                payload.old?.id
              )
              setRows((prev) => prev.filter((row) => row.id !== payload.old.id))
              break
          }
        }
      )
      .subscribe((status) => {
        console.log(
          `[useDBTable] Subscription status for ${channelName}:`,
          status
        )
      })

    return () => {
      console.log(`[useDBTable] Unsubscribing from channel: ${channelName}`)
      supabase.removeChannel(channel)
    }
  }, [supabase, table, channelName, filter?.column, filter?.value, shouldFetch])

  const updateRow = useCallback(
    async (updates: any) => {
      if (!supabase) {
        console.error('[useDBTable] Cannot update: supabase not initialized')
        return { error: new Error('Supabase not initialized') }
      }

      console.log(`[useDBTable] Updating row in ${table}:`, updates)
      const { id, ...data } = updates

      const { error: updateError, data: result } = await supabase
        .from(table)
        .update(data)
        .eq('id', id)
        .select()

      if (updateError) {
        console.error(
          `[useDBTable] Error updating row in ${table}:`,
          updateError
        )
        return { error: updateError }
      } else {
        console.log(`[useDBTable] Row updated in ${table}:`, result)
        return { data: result }
      }
    },
    [supabase, table]
  )

  const insertRow = useCallback(
    async (item: any) => {
      if (!supabase) {
        console.error('[useDBTable] Cannot insert: supabase not initialized')
        return { error: new Error('Supabase not initialized') }
      }

      console.log(`[useDBTable] Inserting row into ${table}:`, item)

      const { error: insertError, data: result } = await supabase
        .from(table)
        .insert(item)
        .select()

      if (insertError) {
        console.error(
          `[useDBTable] Error inserting row into ${table}:`,
          insertError
        )
        return { error: insertError }
      } else {
        console.log(`[useDBTable] Row inserted into ${table}:`, result)
        return { data: result }
      }
    },
    [supabase, table]
  )

  const deleteRow = useCallback(
    async (id: any) => {
      if (!supabase) {
        console.error('[useDBTable] Cannot delete: supabase not initialized')
        return { error: new Error('Supabase not initialized') }
      }

      console.log(`[useDBTable] Deleting row from ${table}, id:`, id)

      const { error: deleteError } = await supabase
        .from(table)
        .delete()
        .eq('id', id)

      if (deleteError) {
        console.error(
          `[useDBTable] Error deleting row from ${table}:`,
          deleteError
        )
        return { error: deleteError }
      } else {
        console.log(`[useDBTable] Row deleted from ${table}`)
        return { success: true }
      }
    },
    [supabase, table]
  )

  return { rows, loading, error, insertRow, updateRow, deleteRow }
}

// Legacy version that returns array for backward compatibility
export function useDBTableLegacy(
  table: string,
  channelName = 'any',
  options: UseDBTableOptions = {}
) {
  const { rows, loading, insertRow, updateRow, deleteRow } = useDBTable(
    table,
    channelName,
    options
  )
  return [rows, loading, insertRow, updateRow, deleteRow] as const
}
