import {
  useQueryState
} from "./chunk-6EDEMVLW.mjs";
import {
  ShaderGradientCanvas
} from "./chunk-QX4TIT56.mjs";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-CU5I7XXF.mjs";

// src/components/Shared/ShaderGradientStateless/ShaderGradientStatelessCanvas.tsx
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
