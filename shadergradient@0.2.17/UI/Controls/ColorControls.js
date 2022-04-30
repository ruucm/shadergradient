// src/UI/Controls/ColorControls.tsx
import * as React from "react";
import { useQueryState } from "../../hooks/index.js";
import { usePropertyStore } from "../../store.js";
import { ColorInput } from "../../UI/index.js";
import { InputPanel } from "./InputPanel.js";
var ColorControls = () => {
  const [color1, setColor1] = useQueryState("color1");
  const [color2, setColor2] = useQueryState("color2");
  const [color3, setColor3] = useQueryState("color3");
  const [bgColor1, setBgColor1] = useQueryState("bgColor1");
  const [bgColor2, setBgColor2] = useQueryState("bgColor2");
  const hoverState = usePropertyStore((state) => state.hoverState);
  return /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col gap-3"
  }, /* @__PURE__ */ React.createElement(InputPanel, {
    title: "Color 1",
    info: true,
    onMouseEnter: () => {
      usePropertyStore.setState({ hoverState: 1 });
    },
    onMouseLeave: () => {
      usePropertyStore.setState({ hoverState: 0 });
    }
  }, /* @__PURE__ */ React.createElement(ColorInput, {
    defaultValue: color1,
    setValue: setColor1
  })), /* @__PURE__ */ React.createElement(InputPanel, {
    title: "Color 2",
    info: true,
    onMouseEnter: () => {
      usePropertyStore.setState({ hoverState: 2 });
    },
    onMouseLeave: () => {
      usePropertyStore.setState({ hoverState: 0 });
    }
  }, /* @__PURE__ */ React.createElement(ColorInput, {
    defaultValue: color2,
    setValue: setColor2
  })), /* @__PURE__ */ React.createElement(InputPanel, {
    title: "Color 3",
    info: true,
    onMouseEnter: () => {
      usePropertyStore.setState({ hoverState: 3 });
    },
    onMouseLeave: () => {
      usePropertyStore.setState({ hoverState: 0 });
    }
  }, /* @__PURE__ */ React.createElement(ColorInput, {
    defaultValue: color3,
    setValue: setColor3
  })), /* @__PURE__ */ React.createElement(InputPanel, {
    title: "Bg Color 1",
    info: true
  }, /* @__PURE__ */ React.createElement(ColorInput, {
    defaultValue: bgColor1 === null ? "#000000" : bgColor1,
    setValue: setBgColor1
  })), /* @__PURE__ */ React.createElement(InputPanel, {
    title: "Bg Color 2",
    info: true
  }, /* @__PURE__ */ React.createElement(ColorInput, {
    defaultValue: bgColor2 === null ? "#000000" : bgColor2,
    setValue: setBgColor2
  })));
};
export {
  ColorControls
};
