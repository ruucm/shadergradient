import { useEffect, useState } from 'react'
import { useSupabaseStore } from '../../store'

export function useDBTable(table, channelName = 'any') {
  const supabase = useSupabaseStore((state) => state.supabase)
    const [rows, setRows] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        // get initial rows
        setLoading(true)
        supabase
            ?.from(table)
            .select("*")
            .order("id", { ascending: false })
            .then(({ data, error }) => {
                if (!error) {
                    setRows(data)
                    setLoading(false)
                }
            })
    }, [supabase])

    useEffect(() => {
        const sub = supabase
            ?.channel(channelName)
            .on(
                "postgres_changes",
                { event: "*", schema: "public", table },
                (payload) => {
                    // console.log("Change received!", payload)
                    const eventType = payload.eventType
                    switch (eventType) {
                        case "INSERT":
                            setRows((prev) => [payload.new, ...prev])
                            break
                        case "UPDATE":
                            setRows((prev) =>
                                prev.map((row) =>
                                    row.id === payload.new.id
                                        ? payload.new
                                        : row
                                )
                            )
                            break
                        case "DELETE":
                            setRows((prev) =>
                                prev.filter((row) => row.id !== payload.old.id)
                            )
                            break
                    }
                }
            )
            .subscribe()

        return () => {
            supabase?.removeChannel(sub)
        }
    }, [supabase])

    async function updateRow(updates) {
        const { id, ...data } = updates
        const { error, ...result } = await supabase
            .from(table)
            .update(data)
            .eq("id", id)

        if (error) {
            console.log("error", error)
        } else {
            console.log("result", result)
        }
    }

    function deleteTodo(id) {
        supabase
            .from(table)
            .delete()
            .match({ id })
            .then(({ data, error }) => {
                if (error) {
                    console.log("error", error)
                } else {
                    console.log("data", data)
                }
            })
    }

    function insertRow(item) {
        supabase
            .from(table)
            .insert(item)
            .then(({ data, error }) => {
                if (error) {
                    console.log("error", error)
                } else {
                    console.log("data", data)
                }
            })
    }

    async function deleteRow(id) {
        const { error, ...data } = await supabase
            .from(table)
            .delete()
            .eq("id", id)

        if (error) {
            console.log("error", error)
        } else {
            console.log("data", data)
        }
    }
    return [rows, loading, insertRow, updateRow, deleteRow] as any
}
