// src/Gradient/Gradient.tsx
import React, { Suspense, useEffect } from "react";
import { brightnessDiff, hdrBase } from "../consts.js";
import { usePostProcessing, useQueryState } from "../hooks/index.js";
import { usePropertyStore } from "../store.js";
import { Environment } from "./comps/Environment/index.js";
import { CameraControl, GradientMesh } from "./index.js";
function Gradient({ zoomOut = false }) {
  useEffect(() => usePropertyStore.setState({ zoomOut }), [zoomOut]);
  const [lightType] = useQueryState("lightType");
  const [brightness] = useQueryState("brightness");
  const [envPreset] = useQueryState("envPreset");
  const [grain] = useQueryState("grain");
  const [reflection] = useQueryState("reflection");
  usePostProcessing({ on: true, grain: grain === "on" });
  return /* @__PURE__ */ React.createElement(React.Fragment, null, lightType === "env" && /* @__PURE__ */ React.createElement(Suspense, {
    fallback: "Load Failed"
  }, /* @__PURE__ */ React.createElement(Environment, {
    files: `${hdrBase}/hdr/${envPreset}.hdr`,
    background: true
  })), lightType === "3d" && /* @__PURE__ */ React.createElement("ambientLight", {
    intensity: brightness - brightnessDiff || 1
  }), /* @__PURE__ */ React.createElement(CameraControl, null), /* @__PURE__ */ React.createElement(GradientMesh, null));
}
export {
  Gradient
};
