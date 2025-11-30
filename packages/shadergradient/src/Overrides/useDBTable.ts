import { useEffect, useState } from 'react'
import { supabase } from './supabaseClient'

export function useDBTable(table: string, channelName: string = 'any'): [any[], boolean, (item: any) => void, (updates: any) => Promise<void>, (id: any) => Promise<void>] {
  const [rows, setRows] = useState<any[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    // get initial rows
    console.log(`[useDBTable] Fetching initial data for table: ${table}`)
    setLoading(true)
    supabase
      .from(table)
      .select('*')
      .order('id', { ascending: false })
      .then(({ data, error }) => {
        if (!error && data) {
          console.log(`[useDBTable] Fetched ${data.length} rows for ${table}`)
          setRows(data)
          setLoading(false)
        } else if (error) {
          console.error(`[useDBTable] Error fetching data for ${table}:`, error)
          setLoading(false)
        }
      })
  }, [table])

  useEffect(() => {
    console.log(`[useDBTable] Subscribing to channel: ${channelName} for table: ${table}`)
    const channel = supabase
      .channel(channelName)
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table },
        (payload: any) => {
          console.log(`[useDBTable] Change received on ${table}:`, payload)
          const eventType = payload.eventType
          switch (eventType) {
            case 'INSERT':
              setRows((prev) => [payload.new, ...prev])
              break
            case 'UPDATE':
              setRows((prev) =>
                prev.map((row) =>
                  row.id === payload.new.id ? payload.new : row
                )
              )
              break
            case 'DELETE':
              setRows((prev) =>
                prev.filter((row) => row.id !== payload.old.id)
              )
              break
          }
        }
      )
      .subscribe((status) => {
        console.log(`[useDBTable] Subscription status for ${channelName}:`, status)
      })

    return () => {
      console.log(`[useDBTable] Unsubscribing from channel: ${channelName}`)
      supabase.removeChannel(channel)
    }
  }, [table, channelName])

  async function updateRow(updates: any) {
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

  function insertRow(item: any) {
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

  async function deleteRow(id: any) {
    console.log(`[useDBTable] Deleting row from ${table} with id:`, id)
    const { error, ...data } = await supabase
      .from(table)
      .delete()
      .eq('id', id)
    if (error) {
      console.error(`[useDBTable] Error deleting row from ${table}:`, error)
    } else {
      console.log(`[useDBTable] Row deleted from ${table}:`, data)
    }
  }

  return [rows, loading, insertRow, updateRow, deleteRow]
}
