var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
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
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));

// src/Button.tsx
import { jsx } from "react/jsx-runtime";
var Button = () => {
  return /* @__PURE__ */ jsx("div", {
    style: {
      background: "blue",
      color: "white",
      padding: 20,
      display: "flex"
    },
    children: "ESM button33"
  });
};

// src/Card.tsx
import { jsx as jsx2, jsxs } from "react/jsx-runtime";
var Card = () => {
  return /* @__PURE__ */ jsxs("div", {
    style: {
      background: "pink",
      padding: 20
    },
    children: [
      /* @__PURE__ */ jsx2(Button, {}),
      "CAARD"
    ]
  });
};

// src/Box/Box.tsx
import { Fragment, jsx as jsx3, jsxs as jsxs2 } from "react/jsx-runtime";
function Box(props) {
  return /* @__PURE__ */ jsxs2(Fragment, {
    children: [
      /* @__PURE__ */ jsx3("ambientLight", {}),
      /* @__PURE__ */ jsx3("pointLight", {
        position: [10, 10, 10]
      }),
      /* @__PURE__ */ jsxs2("mesh", __spreadProps(__spreadValues({}, props), {
        rotation: [1, 1, 0],
        scale: 0.5,
        children: [
          /* @__PURE__ */ jsx3("boxGeometry", {
            args: [2, 2, 2]
          }),
          /* @__PURE__ */ jsx3("meshStandardMaterial", {
            color: "red"
          })
        ]
      }))
    ]
  });
}
export {
  Box,
  Button,
  Card
};
