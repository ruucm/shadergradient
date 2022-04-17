// src/Controls/TestControl.tsx
import * as React from "react";
import { useQueryState } from "../hooks/index.js";
function TestControl() {
  const [, setUStrength] = useQueryState("uStrength");
  return /* @__PURE__ */ React.createElement("input", {
    type: "number",
    onChange: (e) => {
      setUStrength(e.target.value);
    },
    style: { border: "1px solid black", fontSize: 24 }
  });
}
export {
  TestControl
};
