// src/UI/Header/Header.tsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { mainLoading } from "../../consts.js";
import { PRESETS } from "../../presets.js";
import { useUIStore } from "../../store.js";
import { AboutBtn } from "./AboutBtn.js";

// esbuild-css-modules-plugin-namespace:/tmp/tmp-1965-02g6SIkPI8GG/shadergradient/src/UI/Header/Header.module.css.js
var digest = "c3f86fb9db774d967d70ee8e2a57f721c74993f0597b1fcbb0266418745159d3";
var css = `._header_bdl6a_1 {
  width: 100vw;
  height: 8vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 10; }
`;
(function() {
  if (typeof document !== "undefined" && !document.getElementById(digest)) {
    var ele = document.createElement("style");
    ele.id = digest;
    ele.textContent = css;
    document.head.appendChild(ele);
  }
})();
var Header_module_css_default = { "header": "_header_bdl6a_1" };

// src/UI/Header/Header.tsx
import { TextLogo } from "./TextLogo.js";
function Header({
  mode = "full",
  isMobile = false,
  inAbout = false,
  aboutBtn = false,
  loadingMotion = false,
  onLogoClick = () => void 0,
  onAboutClick = () => void 0,
  onBackClick = () => void 0
}) {
  const activePreset = useUIStore((state) => state.activePreset);
  const color = mode !== "full" ? "#FF430A" : PRESETS[activePreset].color;
  const [loadingReady, setLoadingReady] = useState(false);
  useEffect(() => {
    if (loadingMotion === true) {
      setTimeout(() => {
        setLoadingReady(true);
      }, (mainLoading.logoTransition + 0.6) * 1e3);
    }
  }, []);
  return /* @__PURE__ */ React.createElement(motion.div, {
    className: Header_module_css_default.header,
    initial: { top: loadingMotion === true ? "46%" : 0 },
    animate: {
      top: 0
    },
    transition: {
      duration: 0.5,
      delay: mainLoading.logoTransition,
      type: "spring"
    }
  }, (inAbout !== true || isMobile === true) && /* @__PURE__ */ React.createElement(TextLogo, {
    color,
    size: isMobile === true ? 15 : 18,
    onClick: onLogoClick,
    delay: loadingMotion === true ? 1.5 : 0
  }), aboutBtn && loadingReady === true && /* @__PURE__ */ React.createElement(AboutBtn, {
    inAbout,
    color,
    onAboutClick,
    onBackClick,
    isMobile
  }));
}
export {
  Header
};
