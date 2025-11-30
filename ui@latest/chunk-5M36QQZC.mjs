import {
  useSupabaseStore
} from "./chunk-EWNMU5YT.mjs";

// src/components/FigmaPlugin/SupabaseClient.tsx
import { useEffect } from "react";
import { addPropertyControls, ControlType } from "framer";
function SupabaseClient(props) {
  const { databaseURL, anonKey } = props;
  const initSupabase = useSupabaseStore((state) => state.initSupabase);
  useEffect(() => {
    if (databaseURL && anonKey) {
      initSupabase(databaseURL, anonKey);
    }
  }, [databaseURL, anonKey]);
  return null;
}
addPropertyControls(SupabaseClient, {
  databaseURL: {
    title: "DB URL",
    type: ControlType.String,
    defaultValue: ""
  },
  anonKey: {
    title: "Anon Key",
    type: ControlType.String,
    defaultValue: ""
  }
});

export {
  SupabaseClient
};
