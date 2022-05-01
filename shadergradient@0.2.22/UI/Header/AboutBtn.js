// src/UI/Header/AboutBtn.tsx
import React from "react";
import { motion } from "framer-motion";
function AboutBtn({ inAbout = false, color = "white", onClick }) {
  return /* @__PURE__ */ React.createElement(motion.div, {
    style: {
      cursor: "pointer",
      color,
      position: "absolute",
      right: 0,
      marginRight: "2vw",
      borderBottom: "1.5px solid transparent"
    },
    whileHover: {
      borderBottom: "1.5px solid " + color
    },
    onClick
  }, inAbout === true ? /* @__PURE__ */ React.createElement("div", {
    style: { display: "flex" }
  }, /* @__PURE__ */ React.createElement("p", {
    style: { transform: "rotate(-135deg)" }
  }, "\u2191"), /* @__PURE__ */ React.createElement("p", null, " back")) : /* @__PURE__ */ React.createElement("div", {
    style: { display: "flex" }
  }, /* @__PURE__ */ React.createElement("p", null, "about "), /* @__PURE__ */ React.createElement("p", {
    style: { transform: "rotate(45deg)" }
  }, "\u2191")));
}
export {
  AboutBtn
};
