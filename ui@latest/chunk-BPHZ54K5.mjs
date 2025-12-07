import {
  useSearchParamToStore
} from "./chunk-PW3KZ5D6.mjs";
import {
  useControlValues
} from "./chunk-B5MTCCAV.mjs";
import {
  init_store,
  store_exports
} from "./chunk-KQLCT7MS.mjs";
import {
  ShaderGradient,
  init_dist,
  init_presetURLs,
  propertyControls
} from "./chunk-XGH5D5CV.mjs";
import {
  __spreadProps,
  __spreadValues,
  __toCommonJS
} from "./chunk-HXGKXP63.mjs";

// src/components/Shared/ShaderGradientStateless/ShaderGradientStateless.tsx
init_dist();
import { ControlType } from "framer";
init_presetURLs();
import { jsx } from "react/jsx-runtime";
function ShaderGradientStateless(passedProps) {
  useSearchParamToStore();
  const props = useControlValues(passedProps.control, passedProps);
  const enableCameraUpdate = passedProps.enableCameraUpdate !== false;
  return /* @__PURE__ */ jsx(
    ShaderGradient,
    __spreadProps(__spreadValues({}, props), {
      onCameraUpdate: enableCameraUpdate ? (updates) => {
        const { cAzimuthAngle, cPolarAngle, cDistance, cameraZoom } = updates;
        if (typeof window !== "undefined") {
          const { useQueryStore } = (init_store(), __toCommonJS(store_exports));
          const next = {};
          if (typeof cAzimuthAngle !== "undefined")
            next.cAzimuthAngle = cAzimuthAngle;
          if (typeof cPolarAngle !== "undefined")
            next.cPolarAngle = cPolarAngle;
          if (typeof cDistance !== "undefined") next.cDistance = cDistance;
          if (typeof cameraZoom !== "undefined")
            next.cameraZoom = cameraZoom;
          if (Object.keys(next).length) {
            useQueryStore.setState(next);
          }
        }
      } : void 0
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
