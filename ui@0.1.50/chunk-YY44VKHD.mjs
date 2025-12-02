import {
  useSupabaseStore
} from "./chunk-UISFNSH4.mjs";
import {
  __async,
  __objRest
} from "./chunk-HXGKXP63.mjs";

// src/overrides/FigmaPlugin/useDBTable.ts
import { useEffect, useState } from "react";
function useDBTable(table, channelName = "any") {
  const supabase = useSupabaseStore((state) => state.supabase);
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (!supabase) {
      console.log("[useDBTable] supabase client not initialized yet");
      return;
    }
    console.log(`[useDBTable] Fetching initial data for table: ${table}`);
    setLoading(true);
    supabase == null ? void 0 : supabase.from(table).select("*").order("id", { ascending: false }).then(({ data, error }) => {
      if (!error) {
        console.log(`[useDBTable] Fetched ${(data == null ? void 0 : data.length) || 0} rows from ${table}`);
        setRows(data);
        setLoading(false);
      } else {
        console.error(`[useDBTable] Error fetching ${table}:`, error);
        setLoading(false);
      }
    });
  }, [supabase, table]);
  useEffect(() => {
    if (!supabase) return;
    console.log(`[useDBTable] Subscribing to channel: ${channelName} for table: ${table}`);
    const sub = supabase == null ? void 0 : supabase.channel(channelName).on(
      "postgres_changes",
      { event: "*", schema: "public", table },
      (payload) => {
        var _a;
        console.log(`[useDBTable] Realtime change received on ${table}:`, payload.eventType, payload);
        const eventType = payload.eventType;
        switch (eventType) {
          case "INSERT":
            console.log(`[useDBTable] INSERT on ${table}:`, payload.new);
            setRows((prev) => [payload.new, ...prev]);
            break;
          case "UPDATE":
            console.log(`[useDBTable] UPDATE on ${table}:`, payload.new);
            setRows(
              (prev) => prev.map(
                (row) => row.id === payload.new.id ? payload.new : row
              )
            );
            break;
          case "DELETE":
            console.log(`[useDBTable] DELETE on ${table}, id:`, (_a = payload.old) == null ? void 0 : _a.id);
            setRows((prev) => prev.filter((row) => row.id !== payload.old.id));
            break;
        }
      }
    ).subscribe((status) => {
      console.log(`[useDBTable] Subscription status for ${channelName}:`, status);
    });
    return () => {
      console.log(`[useDBTable] Unsubscribing from channel: ${channelName}`);
      supabase == null ? void 0 : supabase.removeChannel(sub);
    };
  }, [supabase, table, channelName]);
  function updateRow(updates) {
    return __async(this, null, function* () {
      console.log(`[useDBTable] Updating row in ${table}:`, updates);
      const _a = updates, { id } = _a, data = __objRest(_a, ["id"]);
      const _b = yield supabase.from(table).update(data).eq("id", id), { error } = _b, result = __objRest(_b, ["error"]);
      if (error) {
        console.error(`[useDBTable] Error updating row in ${table}:`, error);
      } else {
        console.log(`[useDBTable] Row updated in ${table}:`, result);
      }
    });
  }
  function deleteTodo(id) {
    console.log(`[useDBTable] Deleting todo in ${table}, id:`, id);
    supabase.from(table).delete().match({ id }).then(({ data, error }) => {
      if (error) {
        console.error(`[useDBTable] Error deleting todo in ${table}:`, error);
      } else {
        console.log(`[useDBTable] Todo deleted in ${table}:`, data);
      }
    });
  }
  function insertRow(item) {
    console.log(`[useDBTable] Inserting row into ${table}:`, item);
    supabase.from(table).insert(item).then(({ data, error }) => {
      if (error) {
        console.error(`[useDBTable] Error inserting row into ${table}:`, error);
      } else {
        console.log(`[useDBTable] Row inserted into ${table}:`, data);
      }
    });
  }
  function deleteRow(id) {
    return __async(this, null, function* () {
      console.log(`[useDBTable] Deleting row from ${table}, id:`, id);
      const _a = yield supabase.from(table).delete().eq("id", id), { error } = _a, data = __objRest(_a, ["error"]);
      if (error) {
        console.error(`[useDBTable] Error deleting row from ${table}:`, error);
      } else {
        console.log(`[useDBTable] Row deleted from ${table}:`, data);
      }
    });
  }
  return [rows, loading, insertRow, updateRow, deleteRow];
}

export {
  useDBTable
};
