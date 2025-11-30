import {
  supabase
} from "./chunk-4HTTLOY7.mjs";
import {
  __async,
  __objRest
} from "./chunk-HXGKXP63.mjs";

// src/overrides/FigmaPlugin/useDBTable.ts
import { useEffect, useState } from "react";
function useDBTable(table, channelName = "any", filter) {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (filter && (filter.value === void 0 || filter.value === null)) {
      return;
    }
    console.log(`[useDBTable] Fetching initial data for table: ${table}`, filter ? `with filter: ${filter.column}=${filter.value}` : "");
    setLoading(true);
    let query = supabase.from(table).select("*").order("id", { ascending: false });
    if (filter) {
      query = query.eq(filter.column, filter.value);
    }
    query.then(({ data, error }) => {
      if (!error && data) {
        console.log(`[useDBTable] Fetched ${data.length} rows for ${table}`);
        setRows(data);
        setLoading(false);
      } else if (error) {
        console.error(`[useDBTable] Error fetching data for ${table}:`, error);
        setLoading(false);
      }
    });
  }, [table, filter == null ? void 0 : filter.column, filter == null ? void 0 : filter.value]);
  useEffect(() => {
    if (filter && (filter.value === void 0 || filter.value === null)) {
      return;
    }
    console.log(`[useDBTable] Subscribing to channel: ${channelName} for table: ${table}`);
    let channelFilter = void 0;
    if (filter) {
      channelFilter = `${filter.column}=eq.${filter.value}`;
    }
    const channel = supabase.channel(channelName).on(
      "postgres_changes",
      {
        event: "*",
        schema: "public",
        table,
        filter: channelFilter
      },
      (payload) => {
        console.log(`[useDBTable] Change received on ${table}:`, payload);
        const eventType = payload.eventType;
        switch (eventType) {
          case "INSERT":
            setRows((prev) => [payload.new, ...prev]);
            break;
          case "UPDATE":
            setRows(
              (prev) => prev.map(
                (row) => row.id === payload.new.id ? payload.new : row
              )
            );
            break;
          case "DELETE":
            setRows(
              (prev) => prev.filter((row) => row.id !== payload.old.id)
            );
            break;
        }
      }
    ).subscribe((status) => {
      console.log(`[useDBTable] Subscription status for ${channelName}:`, status);
    });
    return () => {
      console.log(`[useDBTable] Unsubscribing from channel: ${channelName}`);
      supabase.removeChannel(channel);
    };
  }, [table, channelName, filter == null ? void 0 : filter.column, filter == null ? void 0 : filter.value]);
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
      console.log(`[useDBTable] Deleting row from ${table} with id:`, id);
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
