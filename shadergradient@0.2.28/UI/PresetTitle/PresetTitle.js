// src/UI/PresetTitle/PresetTitle.tsx
import * as React from "react";
import { motion } from "framer-motion";
import { PRESETS } from "../../presets.js";
import { useUIStore } from "../../store.js";
import { TextAnimation } from "../../UI/index.js";

// esbuild-css-modules-plugin-namespace:/tmp/tmp-1873-n1pIKEH7q1ZF/shadergradient/src/UI/PresetTitle/PresetTitle.module.css.js
var digest = "da3e53b4e4fb90a08bf3864f4d776d9c50badae01bf0d2447c59a056ca2d3922";
var css = `@import url("https://fonts.googleapis.com/css2?family=Lora:wght@500&display=swap");
._presetWrapper_1qj0w_2 {
  width: 100vw;
  height: fit-content; }
  @media (max-width: 640px) {
    ._presetWrapper_1qj0w_2 {
      width: fit-content; } }

._presetTitle_1qj0w_9 {
  width: 100vw;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Lora', serif;
  font-weight: 500; }

._slideBtns_1qj0w_18 {
  display: flex;
  font-family: 'Inter', sans-serif; }

._slideBtn_1qj0w_18 {
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-right: -5px; }
`;
(function() {
  if (!document.getElementById(digest)) {
    var ele = document.createElement("style");
    ele.id = digest;
    ele.textContent = css;
    document.head.appendChild(ele);
  }
})();
var PresetTitle_module_css_default = { "presetWrapper": "_presetWrapper_1qj0w_2", "presetTitle": "_presetTitle_1qj0w_9", "slideBtns": "_slideBtns_1qj0w_18", "slideBtn": "_slideBtn_1qj0w_18" };

// src/UI/PresetTitle/PresetTitle.tsx
function PresetTitle({
  color = "#FF430A",
  title = "title",
  index = 0,
  fontSize = 120,
  isMobile = false
}) {
  const activePreset = useUIStore((state) => state.activePreset);
  const setActivePreset = useUIStore((state) => state.setActivePreset);
  return /* @__PURE__ */ React.createElement("div", {
    className: PresetTitle_module_css_default.presetWrapper
  }, /* @__PURE__ */ React.createElement("div", {
    className: PresetTitle_module_css_default.presetTitle,
    style: {
      display: index === activePreset ? "flex" : "none",
      gap: 25
    }
  }, /* @__PURE__ */ React.createElement(TextAnimation, {
    delay: 0,
    font: '"Lora", serif',
    color,
    fontSize,
    content: isMobile === true ? title.substring(3) : title
  }), /* @__PURE__ */ React.createElement("div", {
    className: PresetTitle_module_css_default.slideBtns,
    style: {
      color,
      fontSize: isMobile === true ? 22 : 30,
      display: isMobile === true ? "none" : "flex"
    }
  }, /* @__PURE__ */ React.createElement(motion.div, {
    className: PresetTitle_module_css_default.slideBtn,
    initial: { opacity: 0, y: -15 },
    animate: { opacity: 1, y: 0 },
    whileHover: {
      backgroundColor: "rgba(255,255,255,0.15)"
    },
    onClick: () => {
      if (activePreset !== 0) {
        setActivePreset(activePreset - 1);
      } else {
        setActivePreset(PRESETS.length - 1);
      }
    },
    style: { width: isMobile ? 35 : 40, height: isMobile ? 35 : 40 }
  }, "\u2193"), /* @__PURE__ */ React.createElement(motion.div, {
    className: PresetTitle_module_css_default.slideBtn,
    whileHover: {
      backgroundColor: "rgba(255,255,255,0.15)"
    },
    initial: { opacity: 0, y: 15 },
    animate: { opacity: 1, y: 0 },
    onClick: () => {
      if (activePreset !== PRESETS.length - 1) {
        setActivePreset(activePreset + 1);
      } else {
        setActivePreset(0);
      }
    },
    style: {
      width: isMobile === true ? 35 : 40,
      height: isMobile === true ? 35 : 40
    }
  }, "\u2191"))));
}
export {
  PresetTitle
};
