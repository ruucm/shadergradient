import {
  useSearchParamToStore
} from "./chunk-MLLUK2MU.mjs";
import {
  useControlValues
} from "./chunk-YMXA24IR.mjs";
import {
  ShaderGradient
} from "./chunk-ZBV3SI2S.mjs";
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
