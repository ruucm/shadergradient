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

// src/UI/Controls/Tools/ControlTabTitles.tsx
import * as React from "react";
import { ControlTypeTitle } from "./ControlTypeTitle.js";
var ControlTabTitles = (_a) => {
  var _b = _a, {
    activeTab,
    setActiveTab
  } = _b, rest = __objRest(_b, [
    "activeTab",
    "setActiveTab"
  ]);
  return /* @__PURE__ */ React.createElement("div", {
    className: "flex justify-between flex-row gap-2 w-[fit-content] h-[58px] p-3 cursor-pointer md:w-full md:h-full md:flex-row md:justify-start",
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
  ControlTabTitles
};
