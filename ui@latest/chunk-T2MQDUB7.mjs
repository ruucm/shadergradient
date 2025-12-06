import {
  init_useQueryState,
  useQueryState
} from "./chunk-QOV4U74I.mjs";
import {
  ShaderGradientCanvas,
  init_dist
} from "./chunk-RW65CV6C.mjs";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-HXGKXP63.mjs";

// src/components/Shared/ShaderGradientStateless/ShaderGradientStatelessCanvas.tsx
init_dist();
init_useQueryState();
import { jsx } from "react/jsx-runtime";
function ShaderGradientStatelessCanvas(props) {
  const [pixelDensity] = useQueryState("pixelDensity");
  const [fov] = useQueryState("fov");
  return /* @__PURE__ */ jsx(
    ShaderGradientCanvas,
    __spreadProps(__spreadValues({}, props), {
      pixelDensity: pixelDensity || 1,
      fov: fov || 45
    })
  );
}

export {
  ShaderGradientStatelessCanvas
};
