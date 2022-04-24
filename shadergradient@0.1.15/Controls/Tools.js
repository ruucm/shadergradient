// src/Controls/Tools.tsx
import * as React from "react";
import { useQueryState } from "../hooks/index.js";
import { InputPanel } from "../InputPanel.js";
import { Radio } from "../UI/index.js";
var Tools = () => {
  const [wireframe, setWireframe] = useQueryState("wireframe");
  const [axesHelper, setAxesHelper] = useQueryState("axesHelper");
  const [gizmoHelper, setGizmoHelper] = useQueryState("gizmoHelper");
  return /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col gap-3"
  }, /* @__PURE__ */ React.createElement(InputPanel, {
    title: "Wireframe"
  }, /* @__PURE__ */ React.createElement(Radio, {
    name: "wireframe",
    value: "enable",
    setValue: setWireframe,
    check: wireframe === "enable",
    label: "On"
  }), /* @__PURE__ */ React.createElement(Radio, {
    name: "wireframe",
    value: "false",
    setValue: setWireframe,
    check: wireframe === "false",
    label: "Off"
  })), /* @__PURE__ */ React.createElement(InputPanel, {
    title: "Axes"
  }, /* @__PURE__ */ React.createElement(Radio, {
    name: "axesHelper",
    value: "on",
    setValue: setAxesHelper,
    check: axesHelper === "on",
    label: "On"
  }), /* @__PURE__ */ React.createElement(Radio, {
    name: "axesHelper",
    value: "off",
    setValue: setAxesHelper,
    check: axesHelper === "off",
    label: "Off"
  })), /* @__PURE__ */ React.createElement(InputPanel, {
    title: "Gizmo"
  }, /* @__PURE__ */ React.createElement(Radio, {
    name: "gizmoHelper",
    value: "show",
    setValue: setGizmoHelper,
    check: gizmoHelper === "show",
    label: "On"
  }), /* @__PURE__ */ React.createElement(Radio, {
    name: "gizmoHelper",
    value: "hide",
    setValue: setGizmoHelper,
    check: gizmoHelper === "hide",
    label: "Off"
  })));
};
export {
  Tools
};
