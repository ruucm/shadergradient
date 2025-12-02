import {
  __objRest,
  __spreadProps,
  __spreadValues
} from "./chunk-HXGKXP63.mjs";

// src/components/Shared/Spacing.tsx
import { jsx } from "react/jsx-runtime";
var Spacing = (_a) => {
  var _b = _a, { guide = false, className = "w-3 h-3" } = _b, props = __objRest(_b, ["guide", "className"]);
  return /* @__PURE__ */ jsx(
    "div",
    __spreadProps(__spreadValues({}, props), {
      className,
      style: {
        position: "relative",
        background: "hsl(100, 37%, 79%)",
        opacity: "var(--guide-opacity)"
      },
      children: /* @__PURE__ */ jsx(
        "div",
        {
          style: {
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            whiteSpace: "nowrap",
            fontSize: "8px"
          },
          children: guide && className
        }
      )
    })
  );
};

export {
  Spacing
};
