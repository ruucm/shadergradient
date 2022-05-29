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

// src/Overrides/FigmaPlugin.tsx
import React from "react";
import { PRESETS } from "../presets.js";
import { useUIStore } from "../store.js";
import { cx } from "../utils/index.js";
import {
  figma,
  postFigmaMessage,
  postFigmaMessageForSnapShot
} from "./FigmaApi.js";
function createRectangle(Component) {
  return (props) => {
    return /* @__PURE__ */ React.createElement(Component, __spreadProps(__spreadValues({}, props), {
      onClick: () => __async(this, null, function* () {
        postFigmaMessage(() => {
          const ellipse = figma.createRectangle();
          ellipse.resize(300, 300);
        });
      })
    }));
  };
}
function insertCanvasAsImage(Component) {
  return (_a) => {
    var _b = _a, { style } = _b, props = __objRest(_b, ["style"]);
    return /* @__PURE__ */ React.createElement(Component, __spreadProps(__spreadValues({}, props), {
      style: __spreadProps(__spreadValues({}, style), { cursor: "pointer" }),
      onClick: () => postFigmaMessageForSnapShot(() => void 0)
    }));
  };
}
function ArrowLeft(Component) {
  return (_a) => {
    var _b = _a, { style } = _b, props = __objRest(_b, ["style"]);
    const activePreset = useUIStore((state) => state.activePreset);
    const setActivePreset = useUIStore((state) => state.setActivePreset);
    return /* @__PURE__ */ React.createElement(Component, __spreadProps(__spreadValues({}, props), {
      style: __spreadProps(__spreadValues({}, style), { cursor: "pointer" }),
      onClick: () => {
        if (activePreset !== 0) {
          setActivePreset(activePreset - 1);
        } else {
          setActivePreset(PRESETS.length - 1);
        }
      }
    }));
  };
}
function ArrowRight(Component) {
  return (_a) => {
    var _b = _a, { style } = _b, props = __objRest(_b, ["style"]);
    const activePreset = useUIStore((state) => state.activePreset);
    const setActivePreset = useUIStore((state) => state.setActivePreset);
    return /* @__PURE__ */ React.createElement(Component, __spreadProps(__spreadValues({}, props), {
      style: __spreadProps(__spreadValues({}, style), { cursor: "pointer" }),
      onClick: () => {
        if (activePreset !== PRESETS.length - 1) {
          setActivePreset(activePreset + 1);
        } else {
          setActivePreset(0);
        }
      }
    }));
  };
}
function ActiveTitle(Component) {
  return (props) => {
    const activePreset = useUIStore((state) => state.activePreset);
    return /* @__PURE__ */ React.createElement(Component, __spreadProps(__spreadValues({}, props), {
      text: PRESETS[activePreset].title
    }));
  };
}
function HideScrollBar(Component) {
  return (_a) => {
    var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
    return /* @__PURE__ */ React.createElement(Component, __spreadProps(__spreadValues({}, props), {
      className: cx("hide-scrollbar", className)
    }));
  };
}
export {
  ActiveTitle,
  ArrowLeft,
  ArrowRight,
  HideScrollBar,
  createRectangle,
  insertCanvasAsImage
};
