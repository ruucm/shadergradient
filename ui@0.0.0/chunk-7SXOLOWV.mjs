import {
  useControlValues
} from "./chunk-D57SWJ3S.mjs";
import {
  useSearchParamToStore
} from "./chunk-T6OHO6E6.mjs";
import {
  ShaderGradient,
  propertyControls
} from "./chunk-BO7MB3YB.mjs";
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
ShaderGradientStateless.propertyControls = propertyControls(ControlType);

export {
  ShaderGradientStateless
};
