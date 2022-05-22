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

// src/UI/HoverBox/TextHoverBox.tsx
var import_classnames = __toESM(require_classnames());
import * as React from "react";
var TextHoverBox = (_a) => {
  var _b = _a, {
    content,
    link = null,
    text,
    tag = null
  } = _b, rest = __objRest(_b, [
    "content",
    "link",
    "text",
    "tag"
  ]);
  const [isHovered, setIsHovered] = React.useState(false);
  return /* @__PURE__ */ React.createElement("div", {
    onMouseOver: () => {
      setIsHovered(true);
    },
    onMouseLeave: () => {
      setIsHovered(false);
    },
    style: {
      position: "relative",
      display: "inline-flex",
      justifyContent: "center",
      alignItems: "end",
      height: "fit-content"
    }
  }, /* @__PURE__ */ React.createElement("div", {
    className: (0, import_classnames.default)("text-sm font-medium text-white"),
    style: {
      position: "absolute",
      display: "flex",
      visibility: isHovered ? "visible" : "hidden",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: isHovered ? 30 : 20,
      transitionDuration: "0.3s",
      opacity: isHovered ? 1 : 0
    }
  }, /* @__PURE__ */ React.createElement("div", {
    style: {
      width: "fit-content",
      height: "fit-content"
    }
  }, /* @__PURE__ */ React.createElement("div", {
    className: (0, import_classnames.default)("bg-primary"),
    style: {
      position: "absolute",
      width: "100%",
      height: "100%",
      borderRadius: 3,
      opacity: 0.8,
      zIndex: 0,
      display: "flex",
      justifyContent: "center",
      alignItems: "end"
    }
  }, /* @__PURE__ */ React.createElement("div", {
    className: (0, import_classnames.default)("bg-primary"),
    style: {
      width: 17,
      height: 17,
      transform: "rotate(45deg)",
      borderRadius: 3,
      marginBottom: -5
    }
  })), /* @__PURE__ */ React.createElement("p", {
    className: "text-center",
    style: {
      padding: 8,
      zIndex: 20,
      position: "relative",
      width: "max-content",
      maxWidth: "200px"
    }
  }, content, tag !== null && /* @__PURE__ */ React.createElement("span", {
    className: "text-xs text-center",
    style: { color: "lightgrey", lineHeight: 0.6 }
  }, /* @__PURE__ */ React.createElement("br", null), tag)))), /* @__PURE__ */ React.createElement("p", {
    className: "text-primary",
    style: {
      textDecoration: "underline",
      cursor: "pointer"
    }
  }, /* @__PURE__ */ React.createElement("a", {
    href: link
  }, text)));
};
export {
  TextHoverBox
};
/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
