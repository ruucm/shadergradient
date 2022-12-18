// src/UI/Controls/ShapeControls.tsx
import * as React from "react";
import { useQueryState } from "../../hooks/index.js";
import { Slider, Radio } from "../../UI/index.js";
import { InputPanel } from "./InputPanel.js";
var ShapeControls = () => {
  const [type, setType] = useQueryState("type");
  const [shader, setShader] = useQueryState("shader");
  const [animate, setAnimate] = useQueryState("animate");
  const [uTime, setUTime] = useQueryState("uTime");
  const [uSpeed, setUSpeed] = useQueryState("uSpeed");
  const [uStrength, setUStrength] = useQueryState("uStrength");
  const [uDensity, setUDensity] = useQueryState("uDensity");
  const [uFrequency, setUFrequency] = useQueryState("uFrequency");
  const [uAmplitude, setUAmplitude] = useQueryState("uAmplitude");
  const [pixelDensity, setPixelDensity] = useQueryState("pixelDensity");
  const [isHovered, setIsHovered] = React.useState("");
  return /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col gap-3"
  }, /* @__PURE__ */ React.createElement(InputPanel, {
    title: "Type"
  }, /* @__PURE__ */ React.createElement(Radio, {
    name: "type",
    value: "plane",
    setValue: setType,
    check: type === "plane",
    label: "Plane"
  }), /* @__PURE__ */ React.createElement(Radio, {
    name: "type",
    value: "sphere",
    setValue: setType,
    check: type === "sphere",
    label: "Sphere"
  }), /* @__PURE__ */ React.createElement(Radio, {
    name: "type",
    value: "waterPlane",
    setValue: setType,
    check: type === "waterPlane",
    label: "Water"
  })), ["plane", "waterPlane"].includes(type) && /* @__PURE__ */ React.createElement(InputPanel, {
    title: "Shader"
  }, /* @__PURE__ */ React.createElement(Radio, {
    name: "shader",
    value: "defaults",
    setValue: setShader,
    check: shader === "defaults",
    label: "A"
  }), /* @__PURE__ */ React.createElement(Radio, {
    name: "shader",
    value: "positionMix",
    setValue: setShader,
    check: shader === "positionMix",
    label: "B"
  })), /* @__PURE__ */ React.createElement(InputPanel, {
    title: "Animate"
  }, /* @__PURE__ */ React.createElement(Radio, {
    name: "animate",
    value: "on",
    setValue: setAnimate,
    check: animate === "on",
    label: "On"
  }), /* @__PURE__ */ React.createElement(Radio, {
    name: "animate",
    value: "off",
    setValue: setAnimate,
    check: animate === "off",
    label: "Off"
  })), animate === "off" && /* @__PURE__ */ React.createElement(InputPanel, {
    title: "Movements"
  }, /* @__PURE__ */ React.createElement(Slider, {
    defaultValue: uTime,
    setValue: setUTime,
    step: 0.1,
    min: 0,
    max: 9
  })), animate === "on" && /* @__PURE__ */ React.createElement(InputPanel, {
    title: "Speed"
  }, /* @__PURE__ */ React.createElement(Slider, {
    defaultValue: uSpeed,
    setValue: setUSpeed,
    step: 0.1,
    min: 0,
    max: 2
  })), /* @__PURE__ */ React.createElement(InputPanel, {
    title: "Noise Strength",
    info: true,
    hoverContent: "Control the height of the bumps",
    isHovered,
    onMouseEnter: () => {
      setIsHovered("Noise Strength");
    },
    onMouseLeave: () => {
      setIsHovered("");
    }
  }, /* @__PURE__ */ React.createElement(Slider, {
    defaultValue: uStrength,
    setValue: setUStrength,
    step: 0.1,
    min: 0,
    max: 10
  })), /* @__PURE__ */ React.createElement(InputPanel, {
    title: "Noise Density",
    info: true,
    hoverContent: "Control the frequency of the bumps",
    isHovered,
    onMouseEnter: () => {
      setIsHovered("Noise Density");
    },
    onMouseLeave: () => {
      setIsHovered("");
    }
  }, /* @__PURE__ */ React.createElement(Slider, {
    defaultValue: uDensity,
    setValue: setUDensity,
    step: 0.1,
    min: 0,
    max: 7
  })), type === "sphere" && /* @__PURE__ */ React.createElement(InputPanel, {
    title: "Spiral"
  }, /* @__PURE__ */ React.createElement(Slider, {
    defaultValue: uAmplitude || 0,
    setValue: setUAmplitude,
    step: 0.1,
    min: 0,
    max: 7
  })), /* @__PURE__ */ React.createElement(InputPanel, {
    title: "Pixel Density"
  }, /* @__PURE__ */ React.createElement(Slider, {
    defaultValue: pixelDensity,
    setValue: setPixelDensity,
    step: 0.1,
    min: 0,
    max: 3
  })));
};
export {
  ShapeControls
};
