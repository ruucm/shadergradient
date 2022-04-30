// src/UI/Header/Header.tsx
import React from "react";
import { PRESETS } from "../../presets.js";
import { useUIStore } from "../../store.js";
import { AboutBtn } from "./AboutBtn.js";

// esbuild-css-modules-plugin-namespace:/tmp/tmp-1889-3IvKgaqG04XS/shadergradient/src/UI/Header/Header.module.css.js
var digest = "aaf2c1bb0a4b75d48cd978af668510afafffe63f2a1d790b7b6d240d9810d443";
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
  mode = "full",
  isMobile = false,
  inAbout = false,
  aboutBtn = false,
  onLogoClick = () => void 0,
  onAboutClick = () => void 0
}) {
  const activePreset = useUIStore((state) => state.activePreset);
  const color = mode !== "full" ? "#FF430A" : PRESETS[activePreset].color;
  return /* @__PURE__ */ React.createElement("div", {
    className: Header_module_css_default.header
  }, /* @__PURE__ */ React.createElement(TextLogo, {
    color,
    size: isMobile === true ? 15 : 18,
    onClick: onLogoClick
  }), aboutBtn && /* @__PURE__ */ React.createElement(AboutBtn, {
    inAbout,
    color,
    onClick: onAboutClick
  }));
}
export {
  Header
};
