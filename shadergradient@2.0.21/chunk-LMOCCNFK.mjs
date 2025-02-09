import {
  useSearchParamToStore
} from "./chunk-RCVYRVFF.mjs";
import {
  useControlValues
} from "./chunk-B6IXIROA.mjs";
import {
  ShaderGradient
} from "./chunk-UGCH3PIR.mjs";
import {
  __spreadValues
} from "./chunk-5BEQP2BQ.mjs";

// src/ShaderGradientStateless/ShaderGradientStateless.tsx
import { jsx } from "react/jsx-runtime";
function ShaderGradientStateless(passedProps) {
  useSearchParamToStore();
  const props = useControlValues(passedProps.control, passedProps);
  return /* @__PURE__ */ jsx(ShaderGradient, __spreadValues({}, props));
}

export {
  ShaderGradientStateless
};
