import {
  getSupabaseClient
} from "./chunk-RFB7S5YK.mjs";
import {
  __async,
  __spreadValues
} from "./chunk-HXGKXP63.mjs";

// src/overrides/FigmaPlugin/supabaseHooks.ts
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
function useSupabaseTable(table, channel = "default") {
  const supabase = useMemo(() => getSupabaseClient(), []);
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const isMounted = useRef(true);
  const fetchRows = useCallback(() => __async(this, null, function* () {
    var _a;
    setLoading(true);
    const { data, error } = yield supabase.from(table).select("*");
    if (error) {
      console.error(`[supabase] Failed to fetch ${table}:`, error);
      setLoading(false);
      return null;
    }
    if (isMounted.current) {
      console.debug(`[supabase] Loaded ${(_a = data == null ? void 0 : data.length) != null ? _a : 0} rows from ${table}`);
      setRows(data != null ? data : []);
      setLoading(false);
    }
    return data;
  }), [supabase, table]);
  useEffect(() => {
    isMounted.current = true;
    fetchRows();
    const channelName = `realtime-${table}-${channel}`;
    const realtimeChannel = supabase.channel(channelName).on("postgres_changes", { event: "*", schema: "public", table }, () => {
      if (!isMounted.current) return;
      console.debug(`[supabase] Change detected on ${table}; refetching`);
      fetchRows();
    }).subscribe(
      (status) => console.debug(`[supabase] Channel ${channelName} status: ${status}`)
    );
    return () => {
      isMounted.current = false;
      supabase.removeChannel(realtimeChannel);
    };
  }, [channel, fetchRows, supabase, table]);
  const insertRow = useCallback(
    (payload) => __async(this, null, function* () {
      const { data, error } = yield supabase.from(table).insert(payload).select();
      if (error) {
        console.error(`[supabase] Insert failed for ${table}:`, error);
        throw error;
      }
      if (isMounted.current && data) {
        setRows((prev) => [...prev, ...data]);
      }
      return data;
    }),
    [supabase, table]
  );
  const updateRow = useCallback(
    (match, payload) => __async(this, null, function* () {
      const { data, error } = yield supabase.from(table).update(payload).match(match).select();
      if (error) {
        console.error(`[supabase] Update failed for ${table}:`, error);
        throw error;
      }
      if (isMounted.current && data) {
        setRows((prev) => {
          const matcher = (row) => Object.keys(match).every((key) => row[key] === match[key]);
          return prev.map((row) => {
            const updated = matcher(row) ? data.find((d) => matcher(d)) : null;
            return updated ? __spreadValues(__spreadValues({}, row), updated) : row;
          });
        });
      }
      return data;
    }),
    [supabase, table]
  );
  return [rows, loading, insertRow, updateRow];
}

export {
  useSupabaseTable
};
