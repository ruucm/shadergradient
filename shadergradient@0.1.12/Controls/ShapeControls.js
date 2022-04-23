// src/Controls/ShapeControls.tsx
import React from "react";
import { useQueryState } from "../hooks/index.js";
import { Radio } from "./Radio.js";
function ShapeControls() {
  const [shader, setShader] = useQueryState("shader");
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Radio, {
    name: "shader",
    value: "defaults",
    setValue: setShader,
    check: shader === "defaults",
    label: "Defaults"
  }), /* @__PURE__ */ React.createElement(Radio, {
    name: "shader",
    value: "blueMix",
    setValue: setShader,
    check: shader === "blueMix",
    label: "BlueMix"
  }), /* @__PURE__ */ React.createElement(Radio, {
    name: "shader",
    value: "snakeHalftone",
    setValue: setShader,
    check: shader === "snakeHalftone",
    label: "SnakeHalftone"
  }), /* @__PURE__ */ React.createElement(Radio, {
    name: "shader",
    value: "noise",
    setValue: setShader,
    check: shader === "noise",
    label: "noise"
  }));
}
export {
  ShapeControls
};
