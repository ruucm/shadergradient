// src/Gradient/Gradient.tsx
import * as React from "react";
import { CameraControl, GradientMesh } from "./index.js";
function Gradient() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("ambientLight", {
    intensity: 1
  }), /* @__PURE__ */ React.createElement(CameraControl, null), /* @__PURE__ */ React.createElement(GradientMesh, null));
}
export {
  Gradient
};
