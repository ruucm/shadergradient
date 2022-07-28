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

// src/UI/Inputs/NumberInput/NumberInput.tsx
import React from "react";
import { motion } from "framer-motion";
import { Spacing } from "../../Spacing.js";
var NumberInput = React.forwardRef((_a, ref) => {
  var _b = _a, {
    label = null,
    value,
    setValue = () => void 0,
    arrow = false,
    step = 0
  } = _b, inputProps = __objRest(_b, [
    "label",
    "value",
    "setValue",
    "arrow",
    "step"
  ]);
  return /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center"
  }, label && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("label", {
    className: "font-semibold text-primary text-base"
  }, label), /* @__PURE__ */ React.createElement(Spacing, {
    className: "w-2"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "bg-primary bg-opacity-10 flex flex-row w-fit h-fit rounded items-center"
  }, /* @__PURE__ */ React.createElement("input", __spreadValues({
    type: "number",
    className: "font-medium text-primary bg-transparent h-input w-control-number-input text-center outline-none text-base",
    ref,
    value,
    onChange: (e) => setValue(e.target.value),
    step
  }, inputProps)), arrow === true && /* @__PURE__ */ React.createElement("div", {
    className: "h-input flex flex-col text-primary justify-start items-center w-1",
    style: { marginRight: 8, marginLeft: -5 }
  }, /* @__PURE__ */ React.createElement(motion.div, {
    className: "h-[50%] w-fit cursor-pointer flex items-center",
    onClick: () => {
      setValue(value + step);
    },
    initial: { opacity: 0.5 },
    whileHover: { opacity: 1 }
  }, /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "8",
    height: "8"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M 4.468 2.048 C 4.306 1.616 3.694 1.616 3.532 2.048 L 1.853 6.524 C 1.731 6.851 1.972 7.2 2.322 7.2 L 4 7.2 L 4 7.2 L 5.678 7.2 C 6.028 7.2 6.269 6.851 6.147 6.524 Z",
    fill: "rgb(255, 67, 10)"
  }))), /* @__PURE__ */ React.createElement(motion.div, {
    className: "h-[50%] w-fit cursor-pointer flex items-center",
    onClick: () => {
      setValue(value - step);
    },
    initial: { opacity: 0.5 },
    whileHover: { opacity: 1 }
  }, /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "8",
    height: "8"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M 2.868 1.248 C 2.706 0.816 2.094 0.816 1.932 1.248 L 0.253 5.724 C 0.131 6.051 0.372 6.4 0.722 6.4 L 4.078 6.4 C 4.428 6.4 4.669 6.051 4.547 5.724 Z",
    transform: "translate(1.6 0.8) rotate(180 2.4 3.2)",
    fill: "rgb(255, 67, 10)"
  }))))));
});
export {
  NumberInput
};
