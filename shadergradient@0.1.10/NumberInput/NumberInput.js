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

// src/NumberInput/NumberInput.tsx
import React from "react";
import { Spacing } from "../Spacing.js";
var NumberInput = React.forwardRef((_a, ref) => {
  var _b = _a, { label = "", value, setValue } = _b, inputProps = __objRest(_b, ["label", "value", "setValue"]);
  return /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center"
  }, label && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("label", {
    className: "font-semibold text-primary"
  }, label), /* @__PURE__ */ React.createElement(Spacing, {
    className: "w-2"
  })), /* @__PURE__ */ React.createElement("input", __spreadValues({
    type: "number",
    className: "font-medium text-primary bg-primary bg-opacity-10 rounded h-input w-control-number-input text-center outline-none",
    ref,
    value,
    onChange: (e) => setValue(e.target.value)
  }, inputProps)));
});
export {
  NumberInput
};
