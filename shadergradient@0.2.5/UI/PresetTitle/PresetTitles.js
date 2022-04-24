// src/UI/PresetTitle/PresetTitles.tsx
import React from "react";
import { PRESETS } from "../../presets.js";
import { PresetTitle } from "./PresetTitle.js";
function PresetTitles({ isMobile = false }) {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, PRESETS.map((item, index) => {
    return /* @__PURE__ */ React.createElement(PresetTitle, {
      index,
      color: item.color,
      key: index,
      title: index < 10 ? "0" + index.toString() + " " + item.title : index.toString() + " " + item.title,
      isMobile,
      fontSize: isMobile ? 90 : 120
    });
  }));
}
export {
  PresetTitles
};
