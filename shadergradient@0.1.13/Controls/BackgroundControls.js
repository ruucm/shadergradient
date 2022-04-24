// src/Controls/BackgroundControls.tsx
import * as React from "react";
import { ColorInput } from "../ColorInput.js";
import { useQueryState } from "../hooks/index.js";
import { InputPanel } from "../InputPanel.js";
var BackgroundControls = () => {
  const [bgColor1, setBgColor1] = useQueryState("bgColor1");
  const [bgColor2, setBgColor2] = useQueryState("bgColor2");
  return /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col gap-3"
  }, /* @__PURE__ */ React.createElement(InputPanel, {
    title: "Bg Color 1",
    info: true
  }, /* @__PURE__ */ React.createElement(ColorInput, {
    defaultValue: bgColor1,
    setValue: setBgColor1
  })), /* @__PURE__ */ React.createElement(InputPanel, {
    title: "Bg Color 2",
    info: true
  }, /* @__PURE__ */ React.createElement(ColorInput, {
    defaultValue: bgColor2,
    setValue: setBgColor2
  })));
};
export {
  BackgroundControls
};
