import {
  useSupabaseStore
} from "./chunk-EWNMU5YT.mjs";

// src/components/FigmaPlugin/SupabaseClient.tsx
import { useEffect } from "react";
import { ControlType } from "framer";
import { jsx } from "react/jsx-runtime";
function SupabaseClient(props) {
  const { databaseURL, anonKey } = props;
  const initSupabase = useSupabaseStore((state) => state.initSupabase);
  useEffect(() => {
    if (databaseURL && anonKey) {
      initSupabase(databaseURL, anonKey);
    }
  }, [databaseURL, anonKey]);
  return /* @__PURE__ */ jsx("div", { style: { width: 50, height: 50, background: "blue" } });
}
SupabaseClient.propertyControls = {
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
};

export {
  SupabaseClient
};
