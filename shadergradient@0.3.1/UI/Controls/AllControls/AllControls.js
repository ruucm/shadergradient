// src/UI/Controls/AllControls/AllControls.tsx
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useOnClickOutside } from "../../../hooks/index.js";
import { useUIStore } from "../../../store.js";
import { PropertyControls } from "../../PropertyControls.js";
import { ControlTabTitles, ToolsBox, ControlTypeTitles } from "../Tools/index.js";

// esbuild-css-modules-plugin-namespace:/tmp/tmp-1904-WzyJTzEvgf3x/shadergradient/src/UI/Controls/AllControls/AllControls.module.css.js
var digest = "f41cf4803bb96ca95ae89e8f109b26d668fc40aadf1107a2dd065596ed13df8b";
var css = `._controlMobile_jnbyg_1 {
  width: 100vw;
  height: fit-content;
  @apply bg-white; }
  ._controlMobile_jnbyg_1 ._hideBtn_jnbyg_5 {
    width: 100vw;
    color: #ff430a;
    margin-top: -35px; }
    ._controlMobile_jnbyg_1 ._hideBtn_jnbyg_5 div {
      margin: 0 auto;
      display: flex;
      height: 2em;
      width: 2em;
      border-radius: 100%;
      background-color: white; }
    ._controlMobile_jnbyg_1 ._hideBtn_jnbyg_5 p {
      line-height: 2em;
      width: 100%;
      text-align: center; }
`;
(function() {
  if (!document.getElementById(digest)) {
    var ele = document.createElement("style");
    ele.id = digest;
    ele.textContent = css;
    document.head.appendChild(ele);
  }
})();
var AllControls_module_css_default = { "controlMobile": "_controlMobile_jnbyg_1", "hideBtn": "_hideBtn_jnbyg_5" };

// src/UI/Controls/AllControls/AllControls.tsx
import { HorizontalControl } from "./HorizontalControl.js";
var AllControls = ({ isMobile }) => {
  const [activeTab, setActiveTab] = useState("none");
  const mode = useUIStore((state) => state.mode);
  const setMode = useUIStore((state) => state.setMode);
  const ref = useRef(null);
  useOnClickOutside(ref, () => setActiveTab("none"));
  const children = /* @__PURE__ */ React.createElement(React.Fragment, null, !isMobile && /* @__PURE__ */ React.createElement("div", {
    style: { width: "100%", display: "flex", alignItems: "center" }
  }, /* @__PURE__ */ React.createElement(ControlTabTitles, {
    activeTab,
    setActiveTab
  }), /* @__PURE__ */ React.createElement(ToolsBox, {
    darkMode: false
  })), /* @__PURE__ */ React.createElement(PropertyControls, {
    activeTab,
    setActiveTab
  }), isMobile && /* @__PURE__ */ React.createElement(ControlTypeTitles, {
    activeTab,
    setActiveTab
  }));
  return /* @__PURE__ */ React.createElement("div", {
    ref
  }, isMobile === true ? /* @__PURE__ */ React.createElement("div", {
    className: AllControls_module_css_default.controlMobile
  }, /* @__PURE__ */ React.createElement(motion.div, {
    className: AllControls_module_css_default.floating
  }, /* @__PURE__ */ React.createElement(motion.div, {
    className: AllControls_module_css_default.hideBtn,
    onClick: () => {
      setActiveTab("none");
    },
    animate: {
      opacity: activeTab === "none" ? 0 : 1,
      marginTop: activeTab === "none" ? "5px" : "-35px",
      transition: { duration: 0.5 }
    }
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", null, "\u2715")))), children) : /* @__PURE__ */ React.createElement(HorizontalControl, {
    mode,
    setMode,
    activeTab,
    setActiveTab
  }, children));
};
export {
  AllControls
};
