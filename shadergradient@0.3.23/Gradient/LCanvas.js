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

// src/Gradient/LCanvas.tsx
import React from "react";
import { canvasProps } from "../consts.js";
import { useQueryState } from "../hooks/index.js";
import { FiberContextProvider } from "../utils/index.js";
function LCanvas(_a) {
  var _b = _a, {
    children,
    importedFiber = null
  } = _b, rest = __objRest(_b, [
    "children",
    "importedFiber"
  ]);
  const { Canvas } = importedFiber;
  const [pixelDensity] = useQueryState("pixelDensity");
  const [fov] = useQueryState("fov");
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("style", null, `#gradientCanvas canvas { pointer-events: none; }`), /* @__PURE__ */ React.createElement(Canvas, __spreadValues(__spreadValues({
    id: "gradientCanvas",
    key: fov,
    resize: { offsetSize: true }
  }, canvasProps(pixelDensity, fov)), rest), /* @__PURE__ */ React.createElement(FiberContextProvider, {
    value: importedFiber
  }, children)));
}
export {
  LCanvas
};
