// src/UI/Controls/EffectControls.tsx
import * as React from "react";
import { useQueryState } from "../../hooks/index.js";
import { Radio, Slider } from "../../UI/index.js";
import { InputPanel } from "./InputPanel.js";
var EffectControls = () => {
  const [grain, setGrain] = useQueryState("grain");
  const [lightType, setLightType] = useQueryState("lightType");
  const [envPreset, setEnvPreset] = useQueryState("envPreset");
  const [reflection, setReflection] = useQueryState("reflection");
  const [brightness, setBrightness] = useQueryState("brightness");
  const [isHovered, setIsHovered] = React.useState("");
  return /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col gap-3"
  }, /* @__PURE__ */ React.createElement(InputPanel, {
    title: "Grain",
    info: true,
    hoverContent: "Grain effects can slow down the performance of the animation. ",
    isHovered,
    onMouseEnter: () => {
      setIsHovered("Grain");
    },
    onMouseLeave: () => {
      setIsHovered("");
    }
  }, /* @__PURE__ */ React.createElement(Radio, {
    name: "grain",
    value: "on",
    setValue: setGrain,
    check: grain === "on",
    label: "On"
  }), /* @__PURE__ */ React.createElement(Radio, {
    name: "grain",
    value: "off",
    setValue: setGrain,
    check: grain === "off",
    label: "Off"
  })), /* @__PURE__ */ React.createElement(InputPanel, {
    title: "Environment",
    info: true,
    hoverContent: "Environment lighting creates more dynamic lighting effects, e.g. reflections",
    isHovered,
    onMouseEnter: () => {
      setIsHovered("Environment");
    },
    onMouseLeave: () => {
      setIsHovered("");
    }
  }, /* @__PURE__ */ React.createElement(Radio, {
    name: "lightType",
    value: "env",
    setValue: setLightType,
    check: lightType === "env",
    label: "On"
  }), /* @__PURE__ */ React.createElement(Radio, {
    name: "lightType",
    value: "3d",
    setValue: setLightType,
    check: lightType === "3d",
    label: "Off"
  })), lightType === "env" && /* @__PURE__ */ React.createElement(InputPanel, {
    title: "Env Preset"
  }, /* @__PURE__ */ React.createElement(Radio, {
    name: "envPreset",
    value: "city",
    setValue: setEnvPreset,
    check: envPreset === "city",
    label: "City"
  }), /* @__PURE__ */ React.createElement(Radio, {
    name: "envPreset",
    value: "dawn",
    setValue: setEnvPreset,
    check: envPreset === "dawn",
    label: "Dawn"
  }), /* @__PURE__ */ React.createElement(Radio, {
    name: "envPreset",
    value: "lobby",
    setValue: setEnvPreset,
    check: envPreset === "lobby",
    label: "Lobby"
  })), lightType === "env" && /* @__PURE__ */ React.createElement(InputPanel, {
    title: "Reflection"
  }, /* @__PURE__ */ React.createElement(Slider, {
    defaultValue: reflection,
    setValue: setReflection,
    step: 0.1,
    min: 0,
    max: 1
  })), lightType === "3d" && /* @__PURE__ */ React.createElement(InputPanel, {
    title: "Brightness"
  }, /* @__PURE__ */ React.createElement(Slider, {
    defaultValue: brightness,
    setValue: setBrightness,
    step: 0.1,
    min: 0,
    max: 3
  })));
};
export {
  EffectControls
};
