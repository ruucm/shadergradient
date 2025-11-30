import {
  supabase
} from "./chunk-MTU7SWV7.mjs";
import {
  __async,
  __objRest
} from "./chunk-HXGKXP63.mjs";

// src/overrides/FigmaPlugin/useDBTable.ts
import { useEffect, useState } from "react";
function useDBTable(table, channelName = "any") {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    supabase.from(table).select("*").order("id", { ascending: false }).then(({ data, error }) => {
      if (!error && data) {
        setRows(data);
        setLoading(false);
      } else if (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    });
  }, [table]);
  useEffect(() => {
    const channel = supabase.channel(channelName).on(
      "postgres_changes",
      { event: "*", schema: "public", table },
      (payload) => {
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
    ).subscribe();
    return () => {
      supabase.removeChannel(channel);
    };
  }, [table, channelName]);
  function updateRow(updates) {
    return __async(this, null, function* () {
      const _a = updates, { id } = _a, data = __objRest(_a, ["id"]);
      const _b = yield supabase.from(table).update(data).eq("id", id), { error } = _b, result = __objRest(_b, ["error"]);
      if (error) {
        console.log("error", error);
      } else {
        console.log("result", result);
      }
    });
  }
  function insertRow(item) {
    supabase.from(table).insert(item).then(({ data, error }) => {
      if (error) {
        console.log("error", error);
      } else {
        console.log("data", data);
      }
    });
  }
  function deleteRow(id) {
    return __async(this, null, function* () {
      const _a = yield supabase.from(table).delete().eq("id", id), { error } = _a, data = __objRest(_a, ["error"]);
      if (error) {
        console.log("error", error);
      } else {
        console.log("data", data);
      }
    });
  }
  return [rows, loading, insertRow, updateRow, deleteRow];
}

export {
  useDBTable
};
