import {
  useControlValues
} from "./chunk-Z5FVJ7G4.mjs";
import {
  useSearchParamToStore
} from "./chunk-MQTXXI4C.mjs";
import {
  ShaderGradient
} from "./chunk-UG4GD4RN.mjs";
import {
  __spreadValues
} from "./chunk-CU5I7XXF.mjs";

// src/components/Shared/ShaderGradientStateless/ShaderGradientStateless.tsx
import { jsx } from "react/jsx-runtime";
function ShaderGradientStateless(passedProps) {
  useSearchParamToStore();
  const props = useControlValues(passedProps.control, passedProps);
  return /* @__PURE__ */ jsx(ShaderGradient, __spreadValues({}, props));
}

export {
  ShaderGradientStateless
};
