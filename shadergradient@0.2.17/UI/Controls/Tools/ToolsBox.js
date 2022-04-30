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
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

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
import { usePropertyStore } from "../../../store.js";
import { IconButtons } from "./IconButtons.js";
var ToolsBox = (_a) => {
  var _b = _a, {
    title,
    darkMode
  } = _b, rest = __objRest(_b, [
    "title",
    "darkMode"
  ]);
  const zoomOut = usePropertyStore((state) => state.zoomOut);
  const toggleAxis = usePropertyStore((state) => state.toggleAxis);
  const [copyUrlText, setCopyUrl] = React.useState("copy url");
  return /* @__PURE__ */ React.createElement("div", {
    className: (0, import_classnames.default)("flex items-center justify-center", darkMode && "bg-controls-sub-panel"),
    style: {
      gap: 6,
      width: "fit-content",
      height: "fit-content",
      padding: 8,
      borderRadius: 40
    }
  }, /* @__PURE__ */ React.createElement(IconButtons, {
    icon: "CornerUpLeft",
    content: "undo"
  }), /* @__PURE__ */ React.createElement(IconButtons, {
    icon: "Box",
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
      usePropertyStore.setState({ zoomOut: !zoomOut });
    }
  }), /* @__PURE__ */ React.createElement(IconButtons, {
    icon: "Copy",
    content: copyUrlText,
    onClick: () => __async(void 0, null, function* () {
      window.navigator.clipboard.writeText(window.location.href);
      setCopyUrl("copied!");
      yield setTimeout(() => {
        setCopyUrl("copy url");
      }, 1e3);
    })
  }));
};
export {
  ToolsBox
};
/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
