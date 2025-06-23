import {
  __spreadProps,
  __spreadValues
} from "./chunk-CU5I7XXF.mjs";

// src/overrides/FramerPlugin.tsx
import { jsx } from "react/jsx-runtime";
function HideBanner(Component) {
  return (props) => {
    return /* @__PURE__ */ jsx(Component, __spreadProps(__spreadValues({}, props), { style: { zIndex: 1e10 } }));
  };
}

export {
  HideBanner
};
