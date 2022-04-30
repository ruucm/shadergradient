// src/UI/Inputs/ColorInput/ColorInput.tsx
import * as React from "react";
import { useEffect, useState } from "react";
import { Spacing } from "../../../UI/index.js";
var ColorInput = React.forwardRef(({ label = "", defaultValue, setValue }, ref) => {
  const [sharedValue, setSharedValue] = useState(defaultValue);
  useEffect(() => {
    setSharedValue(defaultValue);
  }, [defaultValue]);
  useEffect(() => {
    setValue(sharedValue);
  }, [sharedValue]);
  return /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center"
  }, label && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("label", {
    className: "font-semibold text-primary text-base"
  }, label), /* @__PURE__ */ React.createElement(Spacing, {
    className: "w-2"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center gap-2 w-full"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "w-full h-input rounded",
    style: { background: sharedValue }
  }, /* @__PURE__ */ React.createElement("input", {
    type: "color",
    value: sharedValue,
    onChange: (e) => setSharedValue(e.target.value),
    className: "w-full h-full opacity-0 cursor-pointer",
    ref
  })), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    value: sharedValue,
    onChange: (e) => setSharedValue(e.target.value),
    className: "font-medium text-primary bg-primary bg-opacity-10 rounded h-input w-[90px] text-center outline-none text-base"
  })));
});
export {
  ColorInput
};
