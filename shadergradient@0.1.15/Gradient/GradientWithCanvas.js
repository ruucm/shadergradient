// src/Gradient/GradientWithCanvas.tsx
import * as React from "react";
import { FiberCanvas, useFiber } from "../utils/index.js";
import { Gradient } from "./Gradient.js";
function GradientWithCanvas() {
  const fiber = useFiber();
  return /* @__PURE__ */ React.createElement(FiberCanvas, {
    fiber
  }, /* @__PURE__ */ React.createElement(Gradient, null));
}
export {
  GradientWithCanvas
};
