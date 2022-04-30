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

// src/UI/Inputs/NumberInput/NumberInput.tsx
import React from "react";
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
  }, /* @__PURE__ */ React.createElement("input", {
    type: "number",
    className: "font-medium text-primary bg-transparent h-input w-control-number-input text-center outline-none text-base",
    ref,
    value,
    onChange: (e) => setValue(e.target.value)
  }), arrow === true && /* @__PURE__ */ React.createElement("div", {
    className: "h-input flex flex-col text-primary justify-start items-center w-1",
    style: { marginRight: 8, marginLeft: -5 }
  }, /* @__PURE__ */ React.createElement("div", {
    className: "h-[50%] w-fit cursor-pointer flex items-center",
    onClick: () => {
      setValue(value + step);
    }
  }, "\u25B4"), /* @__PURE__ */ React.createElement("div", {
    className: "h-[50%] w-fit cursor-pointer flex items-center",
    onClick: () => {
      setValue(value - step);
    }
  }, "\u25BE"))));
});
export {
  NumberInput
};
