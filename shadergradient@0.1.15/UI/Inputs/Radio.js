// src/UI/Inputs/Radio.tsx
import * as React from "react";
import { cx } from "../../utils.js";
var Radio = React.forwardRef(({ label, check, setValue, value, name }, ref) => {
  return /* @__PURE__ */ React.createElement("label", {
    className: cx("flex justify-center items-center w-full h-input text-primary rounded cursor-pointer bg-primary hover:bg-opacity-10", check ? "bg-opacity-10" : "bg-opacity-0"),
    htmlFor: value
  }, /* @__PURE__ */ React.createElement("input", {
    name,
    value,
    type: "radio",
    id: value,
    className: "absolute inline-block opacity-0 cursor-pointer",
    onChange: (e) => setValue(e.target.value)
  }), /* @__PURE__ */ React.createElement("span", {
    className: "text-base font-medium"
  }, label || value));
});
export {
  Radio
};
