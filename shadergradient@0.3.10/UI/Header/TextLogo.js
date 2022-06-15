// src/UI/Header/TextLogo.tsx
import React from "react";
import { useUIStore } from "../../store.js";
import { TextHover } from "../TextAnimation/index.js";
function TextLogo({ color = "white", size = 18, onClick }) {
  const mode = useUIStore((state) => state.mode);
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
      padding: "2px 5px"
    }
  }, /* @__PURE__ */ React.createElement(TextHover, {
    fontSize: size,
    color: mode !== "full" ? "#FF430A" : color,
    content: "ShaderGradient",
    delay: 0,
    border: true
  })));
}
export {
  TextLogo
};
