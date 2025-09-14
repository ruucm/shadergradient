import {
  useQueryState
} from "./chunk-TOORL64I.mjs";
import {
  ShaderGradientCanvas
} from "./chunk-LSE33O6Z.mjs";
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
