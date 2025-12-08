import {
  CustomizeNumberInput
} from "./chunk-OUDGQEHL.mjs";
import {
  Spacing
} from "./chunk-VDGKXM7B.mjs";
import {
  u
} from "./chunk-2FOTMNF6.mjs";

// src/components/Web/Customize/CustomizeSlider.tsx
import * as React from "react";
import { useEffect, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
var CustomizeSlider = React.forwardRef(
  ({ defaultValue, setValue, step, min, max }, ref) => {
    const [sharedValue, setSharedValue] = useState(defaultValue);
    useEffect(() => {
      setSharedValue(defaultValue);
    }, [defaultValue]);
    useEffect(() => {
      setValue(sharedValue);
    }, [sharedValue]);
    return /* @__PURE__ */ jsxs("div", { className: "flex items-center w-full", children: [
      /* @__PURE__ */ jsx(
        CustomizeNumberInput,
        {
          value: sharedValue,
          setValue: setSharedValue,
          step
        }
      ),
      /* @__PURE__ */ jsx(Spacing, { className: "w-4" }),
      /* @__PURE__ */ jsx(
        u,
        {
          value: Number(sharedValue),
          step,
          min,
          max,
          onChange: (value, index) => setSharedValue(value),
          className: "bg-[#FF430A] h-[2px] w-full",
          marks: [(min + max) / 2],
          markClassName: "w-[2px] h-[2px] bg-[#FF430A] top-1/2 transform -translate-y-1/2",
          thumbClassName: "bg-[#FF430A] w-[16px] h-[16px] rounded-full top-1/2 transform -translate-y-1/2 outline-none cursor-pointer",
          thumbActiveClassName: "bg-opacity-80"
        }
      )
    ] });
  }
);

export {
  CustomizeSlider
};
