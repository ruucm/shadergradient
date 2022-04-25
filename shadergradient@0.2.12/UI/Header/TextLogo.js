// src/UI/Header/TextLogo.tsx
import React from "react";
import { TextHover } from "../TextAnimation/index.js";
function TextLogo({ color = "white", size = 18, onClick }) {
  return /* @__PURE__ */ React.createElement("div", {
    style: {
      width: "100vw",
      display: "flex",
      height: "fit-content",
      justifyContent: "center",
      alignItems: "center"
    },
    onClick
  }, /* @__PURE__ */ React.createElement("div", {
    style: {
      width: "fit-content",
      padding: "2px 5px",
      borderBottom: "2px solid " + color
    }
  }, /* @__PURE__ */ React.createElement(TextHover, {
    fontSize: size,
    color,
    content: "ShaderGradient",
    delay: 0
  })));
}
export {
  TextLogo
};
