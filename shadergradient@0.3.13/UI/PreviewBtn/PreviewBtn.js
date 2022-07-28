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

// src/UI/PreviewBtn/PreviewBtn.tsx
var import_classnames = __toESM(require_classnames());
import * as React from "react";
import { motion } from "framer-motion";
import { useUIStore, useCursorStore } from "../../store.js";
function PreviewBtn({ display = true, color = "white" }) {
  const mode = useUIStore((state) => state.mode);
  const setMode = useUIStore((state) => state.setMode);
  return /* @__PURE__ */ React.createElement("div", {
    style: { display: display ? "block" : "none" }
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex gap-1.5",
    style: { display: "flex" }
  }, /* @__PURE__ */ React.createElement(motion.div, {
    className: (0, import_classnames.default)("rounded-sm cursor-pointer w-[17px] h-[31px]"),
    onClick: () => {
      if (mode !== "mobile") {
        setMode("mobile");
      } else {
        setMode("full");
      }
    },
    onMouseMove: () => {
      useCursorStore.setState({ hover: "preview" });
    },
    onMouseLeave: () => {
      useCursorStore.setState({ hover: "default" });
    },
    style: {
      overflow: "hidden",
      border: mode !== "full" ? "2px solid #FF430A" : "2px solid " + color,
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }
  }, /* @__PURE__ */ React.createElement(motion.div, {
    style: {
      width: "100%",
      height: "100%",
      padding: 20,
      background: mode !== "full" ? "#FF430A" : color
    },
    whileHover: {
      opacity: 1
    },
    animate: {
      opacity: mode === "mobile" ? 1 : 0
    }
  })), /* @__PURE__ */ React.createElement(motion.div, {
    className: (0, import_classnames.default)("rounded-sm cursor-pointer  w-[47px] h-[31px]"),
    onClick: () => {
      if (mode !== "web") {
        setMode("web");
      } else {
        setMode("full");
      }
    },
    onMouseMove: () => {
      useCursorStore.setState({ hover: "preview" });
    },
    onMouseLeave: () => {
      useCursorStore.setState({ hover: "default" });
    },
    style: {
      overflow: "hidden",
      border: mode !== "full" ? "2px solid #FF430A" : "2px solid " + color,
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }
  }, /* @__PURE__ */ React.createElement(motion.div, {
    style: {
      width: "100%",
      height: "100%",
      padding: 20,
      background: mode !== "full" ? "#FF430A" : color
    },
    whileHover: {
      opacity: 1
    },
    animate: {
      opacity: mode === "web" ? 1 : 0
    }
  }))));
}
export {
  PreviewBtn
};
/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
