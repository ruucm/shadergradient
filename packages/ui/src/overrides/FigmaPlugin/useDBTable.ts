import { useEffect, useState } from 'react'
import { useSupabaseStore } from '../../store'

export function useDBTable(table, channelName = 'any') {
  const supabase = useSupabaseStore((state) => state.supabase)
  const [rows, setRows] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!supabase) {
      console.log('[useDBTable] supabase client not initialized yet')
      return
    }

    console.log(`[useDBTable] Fetching initial data for table: ${table}`)
    setLoading(true)
    supabase
      ?.from(table)
      .select('*')
      .order('id', { ascending: false })
      .then(({ data, error }) => {
        if (!error) {
          console.log(`[useDBTable] Fetched ${data?.length || 0} rows from ${table}`)
          setRows(data)
          setLoading(false)
        } else {
          console.error(`[useDBTable] Error fetching ${table}:`, error)
          setLoading(false)
        }
      })
  }, [supabase, table])

  useEffect(() => {
    if (!supabase) return

    console.log(`[useDBTable] Subscribing to channel: ${channelName} for table: ${table}`)
    const sub = supabase
      ?.channel(channelName)
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table },
        (payload) => {
          console.log(`[useDBTable] Realtime change received on ${table}:`, payload.eventType, payload)
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
              console.log(`[useDBTable] DELETE on ${table}, id:`, payload.old?.id)
              setRows((prev) => prev.filter((row) => row.id !== payload.old.id))
              break
          }
        }
      )
      .subscribe((status) => {
        console.log(`[useDBTable] Subscription status for ${channelName}:`, status)
      })

    return () => {
      console.log(`[useDBTable] Unsubscribing from channel: ${channelName}`)
      supabase?.removeChannel(sub)
    }
  }, [supabase, table, channelName])

  async function updateRow(updates) {
    console.log(`[useDBTable] Updating row in ${table}:`, updates)
    const { id, ...data } = updates
    const { error, ...result } = await supabase
      .from(table)
      .update(data)
      .eq('id', id)

    if (error) {
      console.error(`[useDBTable] Error updating row in ${table}:`, error)
    } else {
      console.log(`[useDBTable] Row updated in ${table}:`, result)
    }
  }

  function deleteTodo(id) {
    console.log(`[useDBTable] Deleting todo in ${table}, id:`, id)
    supabase
      .from(table)
      .delete()
      .match({ id })
      .then(({ data, error }) => {
        if (error) {
          console.error(`[useDBTable] Error deleting todo in ${table}:`, error)
        } else {
          console.log(`[useDBTable] Todo deleted in ${table}:`, data)
        }
      })
  }

  function insertRow(item) {
    console.log(`[useDBTable] Inserting row into ${table}:`, item)
    supabase
      .from(table)
      .insert(item)
      .then(({ data, error }) => {
        if (error) {
          console.error(`[useDBTable] Error inserting row into ${table}:`, error)
        } else {
          console.log(`[useDBTable] Row inserted into ${table}:`, data)
        }
      })
  }

  async function deleteRow(id) {
    console.log(`[useDBTable] Deleting row from ${table}, id:`, id)
    const { error, ...data } = await supabase.from(table).delete().eq('id', id)

    if (error) {
      console.error(`[useDBTable] Error deleting row from ${table}:`, error)
    } else {
      console.log(`[useDBTable] Row deleted from ${table}:`, data)
    }
  }
  return [rows, loading, insertRow, updateRow, deleteRow] as any
}
