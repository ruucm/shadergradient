import {
  useSearchParamToStore
} from "./chunk-GLLRGCYV.mjs";
import {
  useControlValues
} from "./chunk-GQSUDAQH.mjs";
import {
  ShaderGradient
} from "./chunk-XDOUJDTT.mjs";
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
