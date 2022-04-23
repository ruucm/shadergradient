// src/Button/Button.tsx
import React from "react";
import { motion } from "framer-motion";

// esbuild-css-modules-plugin-namespace:/tmp/tmp-1937-8STSNC9YeiZv/shadergradient/src/Button/Button.module.css.js
var digest = "ad6cb894db4f56b117bba1c91f3bf0e1b0e1cfabcae48ea3bcdefd0d4aa51c90";
var css = `._button_ztsmb_1 {
  all: unset;
  display: flex;
  align-items: center;
  gap: 8px;
  background: bisque;
  color: rgba(0, 0, 0, 0.8);
  font-weight: 700;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  padding: 8px;
  border-radius: 1000px; }
  ._button_ztsmb_1 span {
    background: rgba(0, 0, 0, 0.08);
    width: 28px;
    height: 28px;
    border-radius: 1000px;
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
var Button_module_css_default = { "button": "_button_ztsmb_1" };

// src/Button/Button.tsx
function Button({ title = "Title" }) {
  return /* @__PURE__ */ React.createElement(motion.button, {
    className: Button_module_css_default.button,
    whileHover: { scale: 0.9 },
    whileTap: { scale: 0.7 }
  }, title, /* @__PURE__ */ React.createElement("span", null, "\u{1F440}"));
}
export {
  Button
};
