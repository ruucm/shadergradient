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

// src/useFiber.tsx
import React, { useContext, createContext } from "react";
function FiberCanvas({ fiber, children }) {
  const { Canvas } = fiber;
  const value = useContext(context);
  return /* @__PURE__ */ React.createElement(Canvas, null, "w", /* @__PURE__ */ React.createElement(context.Provider, {
    value
  }, children));
}
var context = createContext(null);
var FiberContextProvider = (_a) => {
  var _b = _a, { value } = _b, props = __objRest(_b, ["value"]);
  return /* @__PURE__ */ React.createElement(context.Provider, __spreadValues({
    value
  }, props));
};
var useFiber = () => {
  const ctx = useContext(context);
  if (ctx === void 0) {
    throw new Error(`useFiber must be used within a FiberContextProvider.`);
  }
  return ctx;
};
export {
  FiberCanvas,
  FiberContextProvider,
  useFiber
};
