var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b ||= {})
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
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

// src/utils.ts
var cx = (...classes) => classes.filter((a) => !!a).join(" ");

// src/UI/Button.tsx
import { jsx } from "react/jsx-runtime";
var ButtonKind = {
  primary: "bg-primary text-white",
  secondary: "ring-1 ring-primary text-primary"
};
var Button = (_a) => {
  var _b = _a, {
    kind = "primary",
    children
  } = _b, rest = __objRest(_b, [
    "kind",
    "children"
  ]);
  return /* @__PURE__ */ jsx(
    "button",
    __spreadProps(__spreadValues({
      className: cx("h-button font-medium rounded w-full", ButtonKind[kind])
    }, rest), {
      children
    })
  );
};

// src/UI/Card.tsx
import { jsx as jsx2, jsxs } from "react/jsx-runtime";
var Card = () => {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      style: {
        background: "skyblue",
        padding: 20
      },
      children: [
        /* @__PURE__ */ jsx2(Button, { children: "Button in the card" }),
        "CAARD"
      ]
    }
  );
};
export {
  Button,
  Card
};
