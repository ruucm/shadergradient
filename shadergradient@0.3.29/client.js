// src/Gradient/Axis.tsx
import { GizmoHelper, GizmoViewport } from "@react-three/drei";
import { Fragment, jsx } from "react/jsx-runtime";
function Axis({ isFigmaPlugin }) {
  return /* @__PURE__ */ jsx(Fragment, {
    children: /* @__PURE__ */ jsx(GizmoHelper, {
      alignment: "bottom-right",
      margin: isFigmaPlugin ? [25, 25] : [65, 110],
      children: /* @__PURE__ */ jsx(GizmoViewport, {
        axisColors: ["#FF430A", "#FF430A", "#FF430A"],
        labelColor: "white",
        hideNegativeAxes: true,
        axisHeadScale: 0.8
      })
    })
  });
}
export {
  Axis
};
