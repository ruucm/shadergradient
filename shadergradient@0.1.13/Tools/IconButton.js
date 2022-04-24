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

// node_modules/classnames/index.js
var require_classnames = __commonJS({
  "node_modules/classnames/index.js"(exports, module) {
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

// src/Tools/IconButton.tsx
var import_classnames = __toESM(require_classnames());
import * as React from "react";
import { IconHoverBox } from "../HoverBox/IconHoverBox.js";
import { Feather } from "./Feather.js";
var IconButton = (_a) => {
  var _b = _a, {
    icon,
    content,
    active,
    onClick
  } = _b, rest = __objRest(_b, [
    "icon",
    "content",
    "active",
    "onClick"
  ]);
  const [isHovered, setIsHovered] = React.useState(false);
  const backgroundOpacity = (active2, isHovered2) => {
    if (active2 === true) {
      return 1;
    } else if (isHovered2 === true && active2 !== true) {
      return 0.1;
    } else
      return 0;
  };
  return /* @__PURE__ */ React.createElement("div", {
    className: (0, import_classnames.default)("text-sm font-medium cursor-pointer flex justify-center items-center", active && "bg-primary"),
    style: {
      justifyContent: "center",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      borderRadius: 15,
      width: 30,
      height: 30,
      transitionDuration: "0.3s",
      background: "rgba(255,67,10," + backgroundOpacity(active, isHovered) + ")"
    },
    onMouseEnter: () => {
      setIsHovered(true);
    },
    onMouseLeave: () => {
      setIsHovered(false);
    },
    onClick
  }, /* @__PURE__ */ React.createElement(Feather, {
    name: icon,
    size: 20,
    color: active ? "white" : "rgb(255,67,10)"
  }), /* @__PURE__ */ React.createElement(IconHoverBox, {
    content,
    isHovered
  }));
};
export {
  IconButton
};
/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
