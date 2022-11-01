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

// src/Gradient/Axis.tsx
import * as React from "react";
import { useFiber } from "../utils/index.js";
var lineProps = {
  midA: [0, 0, 0],
  midB: [0, 0, 0],
  lineWidth: 1
};
function Axis() {
  const { CubicBezierLine } = useFiber();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(CubicBezierLine, __spreadValues({
    start: [0, 0, 0],
    end: [10, 0, 0],
    color: "red"
  }, lineProps)), /* @__PURE__ */ React.createElement(CubicBezierLine, __spreadValues({
    start: [0, 0, 0],
    end: [0, 10, 0],
    color: "green"
  }, lineProps)), /* @__PURE__ */ React.createElement(CubicBezierLine, __spreadValues({
    start: [0, 0, 0],
    end: [0, 0, 10],
    color: "blue"
  }, lineProps)));
}
export {
  Axis
};
