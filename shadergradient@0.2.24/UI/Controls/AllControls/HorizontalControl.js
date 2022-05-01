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

// src/UI/Controls/AllControls/HorizontalControl.tsx
var import_classnames = __toESM(require_classnames());
import React from "react";
import { useAnimation, motion } from "framer-motion";
function HorizontalControl({
  mode = "mobile",
  setMode = void 0,
  children,
  activeTab = "none",
  setActiveTab = void 0,
  className = ""
}) {
  const menuAnim = useAnimation();
  React.useEffect(() => {
    if (activeTab === "none") {
      menuAnim.start({
        height: 58,
        transition: { duration: 0.3 }
      });
    } else {
      menuAnim.start({
        height: "fit-content",
        transition: { duration: 0.3 }
      });
    }
  }, [activeTab]);
  return /* @__PURE__ */ React.createElement(motion.div, {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    style: {
      width: "100vw",
      height: "fit-content",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 2,
      bottom: 30
    }
  }, /* @__PURE__ */ React.createElement(motion.div, {
    className: (0, import_classnames.default)("z-10 overflow-hidden rounded-sm", className),
    style: {
      width: "580px",
      display: "flex",
      flexDirection: "column",
      boxShadow: mode === "mobile" || mode === "web" ? "0px 0px 20px 0px rgba(0, 0, 0, 0.1)" : "none",
      background: mode === "about" ? "#141414" : "white"
    },
    transition: { type: "spring", damping: 12, stiffness: 200, delay: 2 },
    animate: menuAnim
  }, children));
}
HorizontalControl.defaultProps = {};
export {
  HorizontalControl
};
/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
