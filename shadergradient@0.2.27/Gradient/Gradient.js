var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
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
import { updateGradientState, usePropertyStore, useUIStore } from "../store.js";
import { Environment } from "./comps/Environment/index.js";
import { CameraControl, GradientMesh } from "./index.js";
function Gradient(_a) {
  var _b = _a, { zoomOut = false } = _b, props = __objRest(_b, ["zoomOut"]);
  usePresetToStore();
  useEffect(() => usePropertyStore.setState({ zoomOut }), [zoomOut]);
  const _a2 = useQueryOrProps(props), { lightType, envPreset, brightness } = _a2, meshValues = __objRest(_a2, ["lightType", "envPreset", "brightness"]);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, lightType === "env" && /* @__PURE__ */ React.createElement(Suspense, {
    fallback: "Load Failed"
  }, /* @__PURE__ */ React.createElement(Environment, {
    files: `${hdrBase}/hdr/${envPreset}.hdr`,
    background: true
  })), lightType === "3d" && /* @__PURE__ */ React.createElement("ambientLight", {
    intensity: brightness || 1
  }), /* @__PURE__ */ React.createElement(CameraControl, null), /* @__PURE__ */ React.createElement(GradientMesh, __spreadValues({}, meshValues)));
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
function useQueryOrProps(props) {
  const [type] = useQueryState("type");
  const [animate] = useQueryState("animate");
  const [uTime] = useQueryState("uTime");
  const [uSpeed] = useQueryState("uSpeed");
  const [uStrength] = useQueryState("uStrength");
  const [uDensity] = useQueryState("uDensity");
  const [uFrequency] = useQueryState("uFrequency");
  const [uAmplitude] = useQueryState("uAmplitude");
  const [positionX] = useQueryState("positionX");
  const [positionY] = useQueryState("positionY");
  const [positionZ] = useQueryState("positionZ");
  const [rotationX] = useQueryState("rotationX");
  const [rotationY] = useQueryState("rotationY");
  const [rotationZ] = useQueryState("rotationZ");
  const [color1] = useQueryState("color1");
  const [color2] = useQueryState("color2");
  const [color3] = useQueryState("color3");
  const [cameraPositionX] = useQueryState("cameraPositionX");
  const [cameraPositionY] = useQueryState("cameraPositionY");
  const [cameraPositionZ] = useQueryState("cameraPositionZ");
  const [wireframe] = useQueryState("wireframe");
  const [shader] = useQueryState("shader");
  const [lightType] = useQueryState("lightType");
  const [brightness] = useQueryState("brightness");
  const [envPreset] = useQueryState("envPreset");
  const [grain] = useQueryState("grain");
  const [reflection] = useQueryState("reflection");
  usePostProcessing(grain === "off");
  return __spreadValues({
    type,
    animate,
    uTime,
    uSpeed,
    uStrength,
    uDensity,
    uFrequency,
    uAmplitude,
    positionX,
    positionY,
    positionZ,
    rotationX,
    rotationY,
    rotationZ,
    color1,
    color2,
    color3,
    cameraPositionX,
    cameraPositionY,
    cameraPositionZ,
    wireframe,
    shader,
    lightType,
    brightness,
    envPreset,
    grain,
    reflection
  }, props);
}
export {
  Gradient
};
