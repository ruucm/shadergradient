// src/Gradient/Gradient.tsx
import React, { useEffect } from "react";
import { usePropertyStore } from "../store.js";
import { CameraControl, GradientMesh } from "./index.js";
function Gradient({ zoomOut = false }) {
  useEffect(() => usePropertyStore.setState({ zoomOut }), [zoomOut]);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("ambientLight", {
    intensity: 1
  }), /* @__PURE__ */ React.createElement(CameraControl, null), /* @__PURE__ */ React.createElement(GradientMesh, null));
}
export {
  Gradient
};
