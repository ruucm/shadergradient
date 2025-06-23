import {
  cx
} from "./chunk-HNS6MPBX.mjs";
import {
  __objRest,
  __spreadProps,
  __spreadValues
} from "./chunk-WNQUEZJF.mjs";

// src/components/Web/Button.tsx
import { jsx } from "react/jsx-runtime";
var ButtonKind = {
  primary: "bg-primary text-white",
  secondary: "ring-1 ring-primary text-primary"
};
var Button = (_a) => {
  var _b = _a, {
    kind = "primary",
    children
  } = _b, rest = __objRest(_b, [
    "kind",
    "children"
  ]);
  return /* @__PURE__ */ jsx(
    "button",
    __spreadProps(__spreadValues({
      className: cx("h-button font-medium rounded w-full", ButtonKind[kind])
    }, rest), {
      children
    })
  );
};

export {
  Button
};
