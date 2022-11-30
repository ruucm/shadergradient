// src/UI/PresetTitle/PresetTitle.tsx
import * as React from "react";
import { motion, useAnimation } from "framer-motion";
import { PRESETS } from "../../presets.js";
import { useUIStore, useCursorStore } from "../../store.js";
import { TextAnimation } from "../../UI/index.js";

// esbuild-css-modules-plugin-namespace:/tmp/tmp-1877-ZhqL7RnUKZOZ/shadergradient/src/UI/PresetTitle/PresetTitle.module.css.js
var digest = "2f1d3f8de574769f2ee831d31d446cc439eaaecffce12c248f4599aaabec49b4";
var css = `@import url("https://fonts.googleapis.com/css2?family=Lora:wght@500&display=swap");
._presetWrapper_nbez8_2 {
  width: 100vw;
  height: fit-content; }
  @media (max-width: 640px) {
    ._presetWrapper_nbez8_2 {
      width: fit-content; } }

._presetTitle_nbez8_9 {
  width: 100vw;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Lora', serif;
  font-weight: 500; }

._slideBtns_nbez8_18 {
  display: flex;
  font-family: 'Inter', sans-serif; }

._slideBtn_nbez8_18 {
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-right: -5px; }

._clickOnTitle_nbez8_30 {
  width: 100%;
  height: 50%;
  background: white;
  cursor: pointer;
  filter: blur(30px);
  border-radius: 100%; }
`;
(function() {
  if (typeof document !== "undefined" && !document.getElementById(digest)) {
    var ele = document.createElement("style");
    ele.id = digest;
    ele.textContent = css;
    document.head.appendChild(ele);
  }
})();
var PresetTitle_module_css_default = { "presetWrapper": "_presetWrapper_nbez8_2", "presetTitle": "_presetTitle_nbez8_9", "slideBtns": "_slideBtns_nbez8_18", "slideBtn": "_slideBtn_nbez8_18", "clickOnTitle": "_clickOnTitle_nbez8_30" };

// src/UI/PresetTitle/PresetTitle.tsx
function PresetTitle({
  color = "#FF430A",
  title = "title",
  index = 0,
  fontSize = 120,
  isMobile = false,
  arrowOn = true
}) {
  const activePreset = useUIStore((state) => state.activePreset);
  const setActivePreset = useUIStore((state) => state.setActivePreset);
  const activeUp = () => {
    if (activePreset !== PRESETS.length - 1) {
      setActivePreset(activePreset + 1);
    } else {
      setActivePreset(0);
    }
  };
  const activeDown = () => {
    if (activePreset !== 0) {
      setActivePreset(activePreset - 1);
    } else {
      setActivePreset(PRESETS.length - 1);
    }
  };
  React.useEffect(() => {
    arrowDownAnim.start({ opacity: 1, transition: { delay: 0.3 } });
    arrowUpAnim.start({ opacity: 1, transition: { delay: 0.3 } });
  }, []);
  const arrowUpAnim = useAnimation();
  const arrowDownAnim = useAnimation();
  const fogUpAnim = useAnimation();
  const fogDownAnim = useAnimation();
  return /* @__PURE__ */ React.createElement("div", {
    className: PresetTitle_module_css_default.presetWrapper
  }, /* @__PURE__ */ React.createElement("div", {
    className: PresetTitle_module_css_default.presetTitle,
    style: {
      display: index === activePreset ? "flex" : "none",
      gap: 25,
      flexDirection: isMobile === true ? "column" : "row"
    }
  }, /* @__PURE__ */ React.createElement("div", {
    style: {
      width: "fit-content",
      height: "fit-content",
      position: "relative"
    }
  }, /* @__PURE__ */ React.createElement("div", {
    style: {
      width: "100%",
      height: "100%",
      position: "absolute",
      display: "flex",
      flexDirection: "column",
      zIndex: 10
    }
  }, /* @__PURE__ */ React.createElement(motion.div, {
    className: PresetTitle_module_css_default.clickOnTitle,
    style: { opacity: 0 },
    whileHover: { opacity: 0.4 },
    animate: fogUpAnim,
    onClick: activeUp,
    onMouseMove: () => {
      useCursorStore.setState({ hover: "arrowUp" });
      arrowUpAnim.start({
        opacity: 1
      });
      arrowDownAnim.start({
        opacity: 0.4
      });
    },
    onMouseLeave: () => {
      useCursorStore.setState({ hover: "default" });
      arrowUpAnim.start({
        opacity: 1
      });
      arrowDownAnim.start({
        opacity: 1
      });
    }
  }), /* @__PURE__ */ React.createElement(motion.div, {
    className: PresetTitle_module_css_default.clickOnTitle,
    style: { opacity: 0 },
    whileHover: { opacity: 0.4 },
    animate: fogDownAnim,
    onClick: activeDown,
    onMouseMove: () => {
      useCursorStore.setState({ hover: "arrowDown" });
      arrowDownAnim.start({
        opacity: 1
      });
      arrowUpAnim.start({
        opacity: 0.4
      });
    },
    onMouseLeave: () => {
      useCursorStore.setState({ hover: "default" });
      arrowDownAnim.start({
        opacity: 1
      });
      arrowUpAnim.start({
        opacity: 1
      });
    }
  })), /* @__PURE__ */ React.createElement(TextAnimation, {
    delay: 0,
    font: '"Lora", serif',
    color,
    fontSize,
    yBefore: 50,
    content: isMobile === true ? title.substring(3) : title
  })), /* @__PURE__ */ React.createElement("div", {
    className: PresetTitle_module_css_default.slideBtns,
    style: {
      color,
      fontSize: isMobile === true ? 22 : 30,
      display: arrowOn === false ? "none" : "flex"
    }
  }, /* @__PURE__ */ React.createElement(motion.div, {
    className: PresetTitle_module_css_default.slideBtn,
    initial: { opacity: 0 },
    animate: arrowDownAnim,
    onMouseOver: () => {
      fogDownAnim.start({
        opacity: 0.4
      });
      arrowUpAnim.start({
        opacity: 0.4
      });
      useCursorStore.setState({ hover: "arrowDown" });
    },
    onMouseLeave: () => {
      fogUpAnim.start({
        opacity: 0
      });
      fogDownAnim.start({
        opacity: 0
      });
      arrowDownAnim.start({
        opacity: 1
      });
      arrowUpAnim.start({
        opacity: 1
      });
      useCursorStore.setState({ hover: "default" });
    },
    onClick: activeDown,
    style: { width: isMobile ? 35 : 40, height: isMobile ? 35 : 40 }
  }, "\u2193"), /* @__PURE__ */ React.createElement(motion.div, {
    className: PresetTitle_module_css_default.slideBtn,
    animate: arrowUpAnim,
    initial: { opacity: 0 },
    onMouseOver: () => {
      fogUpAnim.start({
        opacity: 0.4
      });
      arrowDownAnim.start({
        opacity: 0.4
      });
      useCursorStore.setState({ hover: "arrowUp" });
    },
    onMouseLeave: () => {
      fogUpAnim.start({
        opacity: 0
      });
      fogDownAnim.start({
        opacity: 0
      });
      arrowDownAnim.start({
        opacity: 1
      });
      arrowUpAnim.start({
        opacity: 1
      });
      useCursorStore.setState({ hover: "default" });
    },
    onClick: activeUp,
    style: {
      width: isMobile === true ? 35 : 40,
      height: isMobile === true ? 35 : 40
    }
  }, "\u2191"))));
}
export {
  PresetTitle
};
