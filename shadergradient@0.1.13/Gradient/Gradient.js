// src/Gradient/Gradient.tsx
import * as React from "react";
import { FiberCanvas, useFiber } from "../useFiber.js";
import { CameraControl, GradientMesh } from "./index.js";
function Gradient() {
  const fiber = useFiber();
  return /* @__PURE__ */ React.createElement(FiberCanvas, {
    fiber
  }, /* @__PURE__ */ React.createElement("ambientLight", {
    intensity: 1
  }), /* @__PURE__ */ React.createElement(CameraControl, null), /* @__PURE__ */ React.createElement(GradientMesh, null));
}
export {
  Gradient
};
