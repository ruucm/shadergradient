import {
  useSearchParamToStore
} from "./chunk-KR2KJOQ4.mjs";
import {
  useControlValues
} from "./chunk-SD6QYBL4.mjs";
import {
  ShaderGradient,
  propertyControls
} from "./chunk-4WK5EO2N.mjs";
import {
  __spreadValues
} from "./chunk-CU5I7XXF.mjs";

// src/components/Shared/ShaderGradientStateless/ShaderGradientStateless.tsx
import { ControlType } from "framer";
import { jsx } from "react/jsx-runtime";
function ShaderGradientStateless(passedProps) {
  useSearchParamToStore();
  const props = useControlValues(passedProps.control, passedProps);
  return /* @__PURE__ */ jsx(ShaderGradient, __spreadValues({}, props));
}
ShaderGradientStateless.propertyControls = propertyControls(
  ControlType,
  "stateless"
);

export {
  ShaderGradientStateless
};
