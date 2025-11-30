import { useEffect, useState } from 'react'
import { supabase } from './supabaseClient'

export function useDBTable(table: string, channelName: string = 'any'): [any[], boolean, (item: any) => void, (updates: any) => Promise<void>, (id: any) => Promise<void>] {
  const [rows, setRows] = useState<any[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    // get initial rows
    setLoading(true)
    supabase
      .from(table)
      .select('*')
      .order('id', { ascending: false })
      .then(({ data, error }) => {
        if (!error && data) {
          setRows(data)
          setLoading(false)
        } else if (error) {
          console.error('Error fetching data:', error)
          setLoading(false)
        }
      })
  }, [table])

  useEffect(() => {
    const channel = supabase
      .channel(channelName)
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table },
        (payload: any) => {
          // console.log("Change received!", payload)
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
      .subscribe()

    return () => {
      supabase.removeChannel(channel)
    }
  }, [table, channelName])

  async function updateRow(updates: any) {
    const { id, ...data } = updates
    const { error, ...result } = await supabase
      .from(table)
      .update(data)
      .eq('id', id)
    if (error) {
      console.log('error', error)
    } else {
      console.log('result', result)
    }
  }

  function insertRow(item: any) {
    supabase
      .from(table)
      .insert(item)
      .then(({ data, error }) => {
        if (error) {
          console.log('error', error)
        } else {
          console.log('data', data)
        }
      })
  }

  async function deleteRow(id: any) {
    const { error, ...data } = await supabase
      .from(table)
      .delete()
      .eq('id', id)
    if (error) {
      console.log('error', error)
    } else {
      console.log('data', data)
    }
  }

  return [rows, loading, insertRow, updateRow, deleteRow]
}
