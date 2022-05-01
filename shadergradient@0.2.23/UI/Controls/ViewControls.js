// src/UI/Controls/ViewControls.tsx
import * as React from "react";
import { useQueryState } from "../../hooks/index.js";
import { NumberInput, Slider } from "../../UI/index.js";
import { InputPanel } from "./InputPanel.js";
var ViewControls = () => {
  const [cDistance, setCdistance] = useQueryState("cDistance");
  const [cameraZoom, setCameraZoom] = useQueryState("cameraZoom");
  const [cameraPositionX, setCameraPositionX] = useQueryState("cameraPositionX");
  const [cameraPositionY, setCameraPositionY] = useQueryState("cameraPositionY");
  const [cameraPositionZ, setCameraPositionZ] = useQueryState("cameraPositionZ");
  const [cAzimuthAngle, setCazimuthAngle] = useQueryState("cAzimuthAngle");
  const [cPolarAngle, setCpolarAngle] = useQueryState("cPolarAngle");
  const [positionX, setPositionX] = useQueryState("positionX");
  const [positionY, setPositionY] = useQueryState("positionY");
  const [positionZ, setPositionZ] = useQueryState("positionZ");
  const [rotationX, setRotationX] = useQueryState("rotationX");
  const [rotationY, setRotationY] = useQueryState("rotationY");
  const [rotationZ, setRotationZ] = useQueryState("rotationZ");
  const [isHovered, setIsHovered] = React.useState("");
  const [type] = useQueryState("type");
  return /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col gap-3"
  }, type !== "sphere" && /* @__PURE__ */ React.createElement(InputPanel, {
    title: "Distance"
  }, /* @__PURE__ */ React.createElement(Slider, {
    defaultValue: cDistance,
    setValue: setCdistance,
    step: 0.1,
    min: 0,
    max: 20
  })), type === "sphere" && /* @__PURE__ */ React.createElement(InputPanel, {
    title: "Zoom"
  }, /* @__PURE__ */ React.createElement(Slider, {
    defaultValue: cameraZoom,
    setValue: setCameraZoom,
    step: 0.1,
    min: 0.1,
    max: 30
  })), /* @__PURE__ */ React.createElement(InputPanel, {
    title: "Camera Angle",
    info: true,
    hoverContent: "Imagine a globe. Azimuth moves the camera in the direction of latitude, and polar, in the direction of longtitude",
    isHovered,
    onMouseEnter: () => {
      setIsHovered("Camera Angle");
    },
    onMouseLeave: () => {
      setIsHovered("");
    }
  }, /* @__PURE__ */ React.createElement(NumberInput, {
    label: "azimuth",
    step: 10,
    value: cAzimuthAngle,
    setValue: setCazimuthAngle,
    arrow: true
  }), /* @__PURE__ */ React.createElement(NumberInput, {
    label: "polar",
    step: 10,
    min: 0,
    max: 180,
    value: cPolarAngle,
    setValue: setCpolarAngle,
    arrow: true
  })), /* @__PURE__ */ React.createElement(InputPanel, {
    title: "Object Position"
  }, /* @__PURE__ */ React.createElement(NumberInput, {
    label: "x",
    step: 0.1,
    value: positionX,
    setValue: setPositionX,
    arrow: true
  }), /* @__PURE__ */ React.createElement(NumberInput, {
    label: "y",
    step: 0.1,
    value: positionY,
    setValue: setPositionY,
    arrow: true
  }), /* @__PURE__ */ React.createElement(NumberInput, {
    label: "z",
    step: 0.1,
    value: positionZ,
    setValue: setPositionZ,
    arrow: true
  })), /* @__PURE__ */ React.createElement(InputPanel, {
    title: "Object Rotation"
  }, /* @__PURE__ */ React.createElement(NumberInput, {
    label: "x",
    step: 10,
    value: rotationX,
    setValue: setRotationX,
    arrow: true
  }), /* @__PURE__ */ React.createElement(NumberInput, {
    label: "y",
    step: 10,
    value: rotationY,
    setValue: setRotationY,
    arrow: true
  }), /* @__PURE__ */ React.createElement(NumberInput, {
    label: "z",
    step: 10,
    value: rotationZ,
    setValue: setRotationZ,
    arrow: true
  })));
};
export {
  ViewControls
};
