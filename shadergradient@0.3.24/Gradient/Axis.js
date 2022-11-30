// src/Gradient/Axis.tsx
import * as React from "react";
import { useFiber } from "../utils/index.js";
function Axis({ isFigmaPlugin }) {
  const { CubicBezierLine, GizmoHelper, GizmoViewport } = useFiber();
  console.log("GizmoHelper!");
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(GizmoHelper, {
    alignment: "bottom-right",
    margin: isFigmaPlugin ? [25, 25] : [65, 110],
    renderPriority: 2
  }, /* @__PURE__ */ React.createElement(GizmoViewport, {
    axisColors: ["#FF430A", "#FF430A", "#FF430A"],
    labelColor: "white",
    hideNegativeAxes: true,
    axisHeadScale: 0.8
  })));
}
export {
  Axis
};
