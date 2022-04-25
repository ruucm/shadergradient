// src/UI/Header/Header.tsx
import React from "react";
import { PRESETS } from "../../presets.js";
import { AboutBtn } from "./AboutBtn.js";

// esbuild-css-modules-plugin-namespace:/tmp/tmp-1919-QXAMV8jP5MTF/shadergradient/src/UI/Header/Header.module.css.js
var digest = "6306ff1065d9c09b793b3fc6f445c4d90763e9aeebc1289215aa9a6964aca4a4";
var css = `._header_fvc3v_1 {
  width: 100vw;
  height: 8vh;
  display: flex;
  justify-content: center;
  align-items: center; }
`;
(function() {
  if (!document.getElementById(digest)) {
    var ele = document.createElement("style");
    ele.id = digest;
    ele.textContent = css;
    document.head.appendChild(ele);
  }
})();
var Header_module_css_default = { "header": "_header_fvc3v_1" };

// src/UI/Header/Header.tsx
import { TextLogo } from "./TextLogo.js";
function Header({
  mode,
  activePreset,
  isMobile = false,
  inAbout = false,
  onLogoClick = () => void 0,
  onAboutClick = () => void 0
}) {
  const color = mode !== "full" ? "#FF430A" : PRESETS[activePreset].color;
  return /* @__PURE__ */ React.createElement("div", {
    className: Header_module_css_default.header
  }, /* @__PURE__ */ React.createElement(TextLogo, {
    color,
    size: isMobile === true ? 15 : 18,
    onClick: onLogoClick
  }), /* @__PURE__ */ React.createElement(AboutBtn, {
    inAbout,
    color,
    onClick: onAboutClick
  }));
}
export {
  Header
};
