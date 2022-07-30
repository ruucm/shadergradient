// src/UI/Controls/AllControls/AllControls.tsx
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useOnClickOutside } from "../../../hooks/index.js";
import { useUIStore } from "../../../store.js";
import { PropertyControls } from "../../PropertyControls.js";
import { ToolsBox, ControlTypeTitles } from "../Tools/index.js";

// esbuild-css-modules-plugin-namespace:/tmp/tmp-1895-Du1WZZegbES2/shadergradient/src/UI/Controls/AllControls/AllControls.module.css.js
var digest = "f41cf4803bb96ca95ae89e8f109b26d668fc40aadf1107a2dd065596ed13df8b";
var css = `._controlMobile_1dm53_1 {
  width: 100vw;
  height: fit-content; }
  ._controlMobile_1dm53_1 ._hideBtn_1dm53_4 {
    width: 100vw;
    color: #ff430a; }
    ._controlMobile_1dm53_1 ._hideBtn_1dm53_4 div {
      margin: 10px auto;
      display: flex;
      height: 1.8em;
      width: 1.8em;
      border-radius: 100%;
      background-color: white; }
    ._controlMobile_1dm53_1 ._hideBtn_1dm53_4 p {
      line-height: 1.8em;
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
var AllControls_module_css_default = { "controlMobile": "_controlMobile_1dm53_1", "hideBtn": "_hideBtn_1dm53_4" };

// src/UI/Controls/AllControls/AllControls.tsx
import { HorizontalControl } from "./HorizontalControl.js";
var AllControls = ({ isMobile, isFigma = false }) => {
  const isWeb = !isMobile && !isFigma;
  const [activeTab, setActiveTab] = useState(isWeb ? "none" : "shape");
  const mode = useUIStore((state) => state.mode);
  const setMode = useUIStore((state) => state.setMode);
  const ref = useRef(null);
  useOnClickOutside(ref, () => isWeb && setActiveTab("none"));
  const children = /* @__PURE__ */ React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: isFigma === true ? "column-reverse" : "column",
      justifyContent: "flex-end"
    }
  }, /* @__PURE__ */ React.createElement(PropertyControls, {
    activeTab,
    setActiveTab
  }), /* @__PURE__ */ React.createElement("div", {
    style: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      cursor: "pointer",
      height: 58
    },
    className: isFigma ? "sticky top-0" : "",
    onClick: () => setActiveTab("shape")
  }, /* @__PURE__ */ React.createElement(ControlTypeTitles, {
    activeTab,
    setActiveTab,
    isMobile
  }), isMobile === false && /* @__PURE__ */ React.createElement(ToolsBox, {
    darkMode: false
  })));
  return /* @__PURE__ */ React.createElement("div", {
    ref
  }, isMobile === true ? /* @__PURE__ */ React.createElement("div", {
    className: AllControls_module_css_default.controlMobile
  }, !isFigma && /* @__PURE__ */ React.createElement(motion.div, {
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
