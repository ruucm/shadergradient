import {
  GizmoViewport
} from "./chunk-RDU4SA2T.mjs";
import {
  GizmoHelper
} from "./chunk-ZNOFOFJJ.mjs";

// src/ShaderGradient/Axis/Axis.tsx
import { Fragment, jsx } from "react/jsx-runtime";
function Axis({ margin = [65, 110] }) {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(
    GizmoHelper,
    {
      alignment: "bottom-right",
      margin,
      renderPriority: 2,
      children: /* @__PURE__ */ jsx(
        GizmoViewport,
        {
          axisColors: ["#FF430A", "#FF430A", "#FF430A"],
          labelColor: "white",
          hideNegativeAxes: true,
          axisHeadScale: 0.8
        }
      )
    }
  ) });
}

export {
  Axis
};
