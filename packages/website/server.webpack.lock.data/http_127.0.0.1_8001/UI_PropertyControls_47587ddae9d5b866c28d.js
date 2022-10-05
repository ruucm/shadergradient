var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
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

// src/UI/PropertyControls.tsx
var import_classnames = __toESM(require_classnames());
import * as React from "react";
import { motion } from "framer-motion";
import { useQueryState } from "../hooks/index.js";
import {
  ShapeControls,
  ColorControls,
  EffectControls,
  ViewControls
} from "../UI/index.js";
var PropertyControls = ({
  activeTab,
  setActiveTab
}) => {
  const [type] = useQueryState("type");
  if (!type)
    return null;
  return /* @__PURE__ */ React.createElement(motion.div, {
    className: (0, import_classnames.default)("w-full overflow-y-scroll bg-controls-panel-mobile text-primary mx-auto md:h-full relative hide-scrollbar"),
    style: {
      originY: 1
    },
    animate: {
      height: "fit-content",
      maxHeight: activeTab === "none" ? 0 : 600,
      padding: activeTab === "none" ? 0 : 20
    },
    transition: { duration: 0.72 }
  }, activeTab === "shape" && /* @__PURE__ */ React.createElement(ShapeControls, null), activeTab === "colors" && /* @__PURE__ */ React.createElement(ColorControls, null), activeTab === "effects" && /* @__PURE__ */ React.createElement(EffectControls, null), activeTab === "view" && /* @__PURE__ */ React.createElement(ViewControls, null));
};
export {
  PropertyControls
};
/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
