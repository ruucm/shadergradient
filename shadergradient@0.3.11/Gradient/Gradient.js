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
import React, { useEffect } from "react";
import { envBasePath } from "../consts.js";
import { usePostProcessing, useQueryState } from "../hooks/index.js";
import { PRESETS } from "../presets.js";
import { updateGradientState, usePropertyStore, useUIStore } from "../store.js";
import { EnvironmentMap } from "./comps/Environment/EnvironmentMap.js";
import { useRGBELoader } from "./useRGBELoader.js";
import { CameraControl, GradientMesh } from "./index.js";
function Gradient(_a) {
  var _b = _a, {
    zoomOut = false,
    control = "props",
    dampingFactor
  } = _b, props = __objRest(_b, [
    "zoomOut",
    "control",
    "dampingFactor"
  ]);
  const setLoadingPercentage = useUIStore((state) => state.setLoadingPercentage);
  usePresetToStore();
  const _a2 = useControlValues(control, props), { lightType, envPreset, brightness, grain } = _a2, others = __objRest(_a2, ["lightType", "envPreset", "brightness", "grain"]);
  usePostProcessing(grain === "off");
  useEffect(() => usePropertyStore.setState({ zoomOut }), [zoomOut]);
  const city = useRGBELoader("city.hdr", { path: envBasePath });
  const dawn = useRGBELoader("dawn.hdr", { path: envBasePath });
  const lobby = useRGBELoader("lobby.hdr", { path: envBasePath });
  const textures = { city, dawn, lobby };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, lightType === "env" && /* @__PURE__ */ React.createElement(EnvironmentMap, {
    background: true,
    map: textures[envPreset],
    loadingCallback: setLoadingPercentage
  }), lightType === "3d" && /* @__PURE__ */ React.createElement("ambientLight", {
    intensity: brightness || 1
  }), /* @__PURE__ */ React.createElement(CameraControl, __spreadValues({
    dampingFactor
  }, others)), /* @__PURE__ */ React.createElement(GradientMesh, __spreadValues({}, others)));
}
var pageLoaded = false;
function usePresetToStore() {
  const activePreset = useUIStore((state) => state.activePreset);
  useEffect(() => {
    var _a;
    let gradientURL;
    if (!pageLoaded && ((_a = window.location.search) == null ? void 0 : _a.includes("pixelDensity")))
      gradientURL = window.location.search;
    else
      gradientURL = PRESETS[activePreset].url;
    updateGradientState(gradientURL);
    pageLoaded = true;
  }, [activePreset]);
}
function useControlValues(control, props) {
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
  const [cAzimuthAngle] = useQueryState("cAzimuthAngle");
  const [cPolarAngle] = useQueryState("cPolarAngle");
  const [cDistance] = useQueryState("cDistance");
  const [cameraZoom] = useQueryState("cameraZoom");
  const [wireframe] = useQueryState("wireframe");
  const [shader] = useQueryState("shader");
  const [lightType] = useQueryState("lightType");
  const [brightness] = useQueryState("brightness");
  const [envPreset] = useQueryState("envPreset");
  const [grain] = useQueryState("grain");
  const [reflection] = useQueryState("reflection");
  const queryProps = {
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
    cAzimuthAngle,
    cPolarAngle,
    cDistance,
    cameraZoom,
    wireframe,
    shader,
    lightType,
    brightness,
    envPreset,
    grain,
    reflection
  };
  if (control === "props")
    return __spreadValues(__spreadValues({}, queryProps), props);
  else if (control === "query")
    return queryProps;
}
export {
  Gradient
};