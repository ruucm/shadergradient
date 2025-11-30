import {
  cx
} from "./chunk-ZRY2JHRC.mjs";

// src/components/Web/Customize/CustomizeRadio.tsx
import * as React from "react";
import { jsx, jsxs } from "react/jsx-runtime";
var CustomizeRadio = React.forwardRef(
  ({ label, check, setValue, value, name }, ref) => {
    return /* @__PURE__ */ jsxs(
      "label",
      {
        className: cx(
          "flex justify-center items-center w-full h-input text-primary rounded cursor-pointer bg-primary hover:bg-opacity-10 select-none",
          check ? "bg-opacity-10" : "bg-opacity-0"
        ),
        htmlFor: value,
        children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              name,
              value,
              type: "radio",
              id: value,
              className: "absolute inline-block opacity-0 cursor-pointer",
              onChange: (e) => setValue(e.target.value)
            }
          ),
          /* @__PURE__ */ jsx("span", { className: "text-base font-medium", children: label || value })
        ]
      }
    );
  }
);

export {
  CustomizeRadio
};
