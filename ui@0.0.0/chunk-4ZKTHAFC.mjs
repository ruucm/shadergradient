import {
  useControlValues
} from "./chunk-J52TBBAR.mjs";
import {
  useSearchParamToStore
} from "./chunk-XG4QA5OJ.mjs";
import {
  ShaderGradient,
  propertyControls
} from "./chunk-CIS2NEPW.mjs";
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
