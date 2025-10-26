import {
  useSearchParamToStore
} from "./chunk-7QYSD5N6.mjs";
import {
  useControlValues
} from "./chunk-6CWOQISD.mjs";
import {
  ShaderGradient,
  propertyControls
} from "./chunk-MB44DXHQ.mjs";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-CU5I7XXF.mjs";

// src/components/Shared/ShaderGradientStateless/ShaderGradientStateless.tsx
import { ControlType } from "framer";
import { jsx } from "react/jsx-runtime";
function ShaderGradientStateless(passedProps) {
  useSearchParamToStore();
  const props = useControlValues(passedProps.control, passedProps);
  return /* @__PURE__ */ jsx(
    ShaderGradient,
    __spreadProps(__spreadValues({}, props), {
      onCameraUpdate: (updates) => {
        const { cAzimuthAngle, cPolarAngle, cDistance, cameraZoom } = updates;
      }
    })
  );
}
ShaderGradientStateless.propertyControls = propertyControls(
  ControlType,
  "stateless"
);

export {
  ShaderGradientStateless
};
