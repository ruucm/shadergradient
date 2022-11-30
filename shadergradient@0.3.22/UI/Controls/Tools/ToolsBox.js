var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
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
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));

// ../../node_modules/classnames/index.js
var require_classnames = __commonJS({
  "../../node_modules/classnames/index.js"(exports, module) {
    (function() {
      "use strict";
      var hasOwn = {}.hasOwnProperty;
      function classNames() {
        var classes = [];
        for (var i = 0; i < arguments.length; i++) {
          var arg = arguments[i];
          if (!arg)
            continue;
          var argType = typeof arg;
          if (argType === "string" || argType === "number") {
            classes.push(arg);
          } else if (Array.isArray(arg)) {
            if (arg.length) {
              var inner = classNames.apply(null, arg);
              if (inner) {
                classes.push(inner);
              }
            }
          } else if (argType === "object") {
            if (arg.toString === Object.prototype.toString) {
              for (var key in arg) {
                if (hasOwn.call(arg, key) && arg[key]) {
                  classes.push(key);
                }
              }
            } else {
              classes.push(arg.toString());
            }
          }
        }
        return classes.join(" ");
      }
      if (typeof module !== "undefined" && module.exports) {
        classNames.default = classNames;
        module.exports = classNames;
      } else if (typeof define === "function" && typeof define.amd === "object" && define.amd) {
        define("classnames", [], function() {
          return classNames;
        });
      } else {
        window.classNames = classNames;
      }
    })();
  }
});

// src/UI/Controls/Tools/ToolsBox.tsx
var import_classnames = __toESM(require_classnames());
import * as React from "react";
import { useQueryState } from "../../../hooks/index.js";
import { updateGradientState, usePropertyStore } from "../../../store.js";
import { AxisButton } from "./AxisButton.js";
import { CopyButton } from "./CopyButton.js";
import { IconButtons } from "./IconButtons.js";
var ToolsBox = (_a) => {
  var _b = _a, {
    title,
    darkMode
  } = _b, rest = __objRest(_b, [
    "title",
    "darkMode"
  ]);
  const [zoomOut, setZoomOut] = useQueryState("zoomOut");
  const toggleAxis = usePropertyStore((state) => state.toggleAxis);
  const [copyUrlText, setCopyUrl] = React.useState("copy url");
  return /* @__PURE__ */ React.createElement("div", {
    className: (0, import_classnames.default)("flex items-center justify-center p-1", darkMode && "bg-controls-sub-panel"),
    style: {
      gap: 6,
      width: "fit-content",
      height: "fit-content",
      borderRadius: 40
    }
  }, /* @__PURE__ */ React.createElement(IconButtons, {
    icon: "CornerUpLeft",
    content: "undo",
    onClick: () => {
      const prevUrls = window.history.state.prevUrls || [];
      if (prevUrls.length > 1) {
        prevUrls.pop();
        const lastURL = new URL(prevUrls[prevUrls.length - 1]).search;
        updateGradientState(lastURL);
        prevUrls.pop();
        window.history.pushState({ prevUrls }, document.title, "");
      } else
        alert("no history");
    }
  }), /* @__PURE__ */ React.createElement(AxisButton, {
    content: "3d axis",
    active: toggleAxis,
    onClick: () => {
      usePropertyStore.setState({ toggleAxis: !toggleAxis });
    }
  }), /* @__PURE__ */ React.createElement(IconButtons, {
    icon: "Minimize2",
    content: "zoom out",
    active: zoomOut,
    onClick: () => {
      setZoomOut(!zoomOut);
    }
  }), /* @__PURE__ */ React.createElement(CopyButton, null));
};
export {
  ToolsBox
};
/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
