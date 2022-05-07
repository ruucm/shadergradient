var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};

// src/Gradient/Gradient.tsx
import React, { Suspense, useEffect } from "react";
import { hdrBase, initialActivePreset } from "../consts.js";
import { usePostProcessing, useQueryState } from "../hooks/index.js";
import { PRESETS } from "../presets.js";
import {
  updateGradientState,
  usePropertyStore,
  useQueryStore,
  useUIStore
} from "../store.js";
import { Environment } from "./comps/Environment/index.js";
import { CameraControl, GradientMesh } from "./index.js";
function Gradient(props) {
  usePropsToStore(props);
  usePresetToStore();
  const [lightType] = useQueryState("lightType");
  const [brightness] = useQueryState("brightness");
  const [envPreset] = useQueryState("envPreset");
  const [grain] = useQueryState("grain");
  const [reflection] = useQueryState("reflection");
  usePostProcessing(grain === "off");
  return /* @__PURE__ */ React.createElement(React.Fragment, null, lightType === "env" && /* @__PURE__ */ React.createElement(Suspense, {
    fallback: "Load Failed"
  }, /* @__PURE__ */ React.createElement(Environment, {
    files: `${hdrBase}/hdr/${envPreset}.hdr`,
    background: true
  })), lightType === "3d" && /* @__PURE__ */ React.createElement("ambientLight", {
    intensity: brightness || 1
  }), /* @__PURE__ */ React.createElement(CameraControl, null), /* @__PURE__ */ React.createElement(GradientMesh, null));
}
function usePropsToStore(_a) {
  var _b = _a, { zoomOut = false } = _b, queryProps = __objRest(_b, ["zoomOut"]);
  useEffect(() => usePropertyStore.setState({ zoomOut }), [zoomOut]);
  useEffect(() => useQueryStore.setState(queryProps), [queryProps]);
}
function usePresetToStore() {
  const activePreset = useUIStore((state) => state.activePreset);
  useEffect(() => {
    var _a;
    let gradientURL = PRESETS[activePreset].url;
    if (activePreset === initialActivePreset && ((_a = window.location.search) == null ? void 0 : _a.includes("pixelDensity")))
      gradientURL = window.location.search;
    updateGradientState(gradientURL);
  }, [activePreset]);
}
export {
  Gradient
};
