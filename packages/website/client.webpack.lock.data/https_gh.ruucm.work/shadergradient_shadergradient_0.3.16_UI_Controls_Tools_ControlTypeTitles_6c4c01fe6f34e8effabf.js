var __getOwnPropSymbols = Object.getOwnPropertySymbols;
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

// src/UI/Controls/Tools/ControlTypeTitles.tsx
import * as React from "react";
import { ControlTypeTitle } from "./ControlTypeTitle.js";
var ControlTypeTitles = (_a) => {
  var _b = _a, {
    activeTab,
    setActiveTab,
    isMobile
  } = _b, rest = __objRest(_b, [
    "activeTab",
    "setActiveTab",
    "isMobile"
  ]);
  return /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-row justify-start w-[fit-content] h-[58px] cursor-pointer",
    style: {
      width: isMobile === false ? "fit-content" : "100%",
      height: isMobile === false ? 58 : "100%",
      justifyContent: isMobile === false ? "flex-start" : "space-between",
      background: isMobile === false ? "transparent" : "white"
    },
    onClick: () => setActiveTab("shape")
  }, /* @__PURE__ */ React.createElement(ControlTypeTitle, {
    title: "Shape",
    active: activeTab === "shape",
    onClick: () => {
      activeTab === "shape" ? setActiveTab("none") : setActiveTab("shape");
    }
  }), /* @__PURE__ */ React.createElement(ControlTypeTitle, {
    title: "Colors",
    active: activeTab === "colors",
    onClick: (e) => {
      e.stopPropagation();
      activeTab === "colors" ? setActiveTab("none") : setActiveTab("colors");
    }
  }), /* @__PURE__ */ React.createElement(ControlTypeTitle, {
    title: "Effects",
    active: activeTab === "effects",
    onClick: (e) => {
      e.stopPropagation();
      activeTab === "effects" ? setActiveTab("none") : setActiveTab("effects");
    }
  }), /* @__PURE__ */ React.createElement(ControlTypeTitle, {
    title: "View",
    active: activeTab === "view",
    onClick: (e) => {
      e.stopPropagation();
      activeTab === "view" ? setActiveTab("none") : setActiveTab("view");
    }
  }));
};
export {
  ControlTypeTitles
};
