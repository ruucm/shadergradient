import {
  useSupabaseStore
} from "./chunk-UISFNSH4.mjs";
import {
  __async,
  __objRest
} from "./chunk-HXGKXP63.mjs";

// src/overrides/FigmaPlugin/useDBTable.ts
import { useEffect, useState, useCallback } from "react";
function useDBTable(table, channelName = "any", options = {}) {
  const { filter, select = "*", limit, enabled = true } = options;
  const supabase = useSupabaseStore((state) => state.supabase);
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const shouldFetch = enabled && (!filter || filter.value !== void 0 && filter.value !== null);
  useEffect(() => {
    if (!supabase) {
      console.log("[useDBTable] supabase client not initialized yet");
      return;
    }
    if (!shouldFetch) {
      console.log(
        `[useDBTable] Skipping fetch for ${table} - filter value not ready:`,
        filter == null ? void 0 : filter.value
      );
      return;
    }
    const fetchData = () => __async(this, null, function* () {
      console.log(
        `[useDBTable] Fetching data for table: ${table}`,
        filter ? `with filter: ${filter.column}=${filter.value}` : ""
      );
      setLoading(true);
      setError(null);
      try {
        let query = supabase.from(table).select(select).order("id", { ascending: false });
        if (filter) {
          query = query.eq(filter.column, filter.value);
        }
        if (limit) {
          query = query.limit(limit);
        }
        const { data, error: fetchError } = yield query;
        if (fetchError) {
          console.error(`[useDBTable] Error fetching ${table}:`, fetchError);
          setError(fetchError);
          setRows([]);
        } else {
          console.log(
            `[useDBTable] Fetched ${(data == null ? void 0 : data.length) || 0} rows from ${table}`
          );
          setRows(data || []);
        }
      } catch (err) {
        console.error(`[useDBTable] Unexpected error fetching ${table}:`, err);
        setError(err);
      } finally {
        setLoading(false);
      }
    });
    fetchData();
  }, [
    supabase,
    table,
    filter == null ? void 0 : filter.column,
    filter == null ? void 0 : filter.value,
    select,
    limit,
    shouldFetch
  ]);
  useEffect(() => {
    if (!supabase || !shouldFetch) return;
    const realtimeFilter = filter ? `${filter.column}=eq.${filter.value}` : void 0;
    console.log(
      `[useDBTable] Subscribing to channel: ${channelName} for table: ${table}`,
      realtimeFilter ? `with filter: ${realtimeFilter}` : ""
    );
    const channel = supabase.channel(channelName).on(
      "postgres_changes",
      {
        event: "*",
        schema: "public",
        table,
        filter: realtimeFilter
        // Apply filter to Realtime
      },
      (payload) => {
        var _a;
        console.log(
          `[useDBTable] Realtime change received on ${table}:`,
          payload.eventType
        );
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
            console.log(
              `[useDBTable] DELETE on ${table}, id:`,
              (_a = payload.old) == null ? void 0 : _a.id
            );
            setRows((prev) => prev.filter((row) => row.id !== payload.old.id));
            break;
        }
      }
    ).subscribe((status) => {
      console.log(
        `[useDBTable] Subscription status for ${channelName}:`,
        status
      );
    });
    return () => {
      console.log(`[useDBTable] Unsubscribing from channel: ${channelName}`);
      supabase.removeChannel(channel);
    };
  }, [supabase, table, channelName, filter == null ? void 0 : filter.column, filter == null ? void 0 : filter.value, shouldFetch]);
  const updateRow = useCallback(
    (updates) => __async(this, null, function* () {
      if (!supabase) {
        console.error("[useDBTable] Cannot update: supabase not initialized");
        return { error: new Error("Supabase not initialized") };
      }
      console.log(`[useDBTable] Updating row in ${table}:`, updates);
      const _a = updates, { id } = _a, data = __objRest(_a, ["id"]);
      const { error: updateError, data: result } = yield supabase.from(table).update(data).eq("id", id).select();
      if (updateError) {
        console.error(
          `[useDBTable] Error updating row in ${table}:`,
          updateError
        );
        return { error: updateError };
      } else {
        console.log(`[useDBTable] Row updated in ${table}:`, result);
        return { data: result };
      }
    }),
    [supabase, table]
  );
  const insertRow = useCallback(
    (item) => __async(this, null, function* () {
      if (!supabase) {
        console.error("[useDBTable] Cannot insert: supabase not initialized");
        return { error: new Error("Supabase not initialized") };
      }
      console.log(`[useDBTable] Inserting row into ${table}:`, item);
      const { error: insertError, data: result } = yield supabase.from(table).insert(item).select();
      if (insertError) {
        console.error(
          `[useDBTable] Error inserting row into ${table}:`,
          insertError
        );
        return { error: insertError };
      } else {
        console.log(`[useDBTable] Row inserted into ${table}:`, result);
        return { data: result };
      }
    }),
    [supabase, table]
  );
  const deleteRow = useCallback(
    (id) => __async(this, null, function* () {
      if (!supabase) {
        console.error("[useDBTable] Cannot delete: supabase not initialized");
        return { error: new Error("Supabase not initialized") };
      }
      console.log(`[useDBTable] Deleting row from ${table}, id:`, id);
      const { error: deleteError } = yield supabase.from(table).delete().eq("id", id);
      if (deleteError) {
        console.error(
          `[useDBTable] Error deleting row from ${table}:`,
          deleteError
        );
        return { error: deleteError };
      } else {
        console.log(`[useDBTable] Row deleted from ${table}`);
        return { success: true };
      }
    }),
    [supabase, table]
  );
  return { rows, loading, error, insertRow, updateRow, deleteRow };
}
function useDBTableLegacy(table, channelName = "any", options = {}) {
  const { rows, loading, insertRow, updateRow, deleteRow } = useDBTable(
    table,
    channelName,
    options
  );
  return [rows, loading, insertRow, updateRow, deleteRow];
}

export {
  useDBTable,
  useDBTableLegacy
};
