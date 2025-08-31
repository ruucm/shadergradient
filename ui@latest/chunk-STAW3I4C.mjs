import {
  useQueryState
} from "./chunk-IHNYOXY2.mjs";
import {
  ShaderGradientCanvas
} from "./chunk-V26AZFTQ.mjs";
import {
  canvasProps
} from "./chunk-ZRY2JHRC.mjs";
import {
  __spreadValues
} from "./chunk-CU5I7XXF.mjs";

// src/components/Shared/ShaderGradientStateless/ShaderGradientStatelessCanvas.tsx
import { jsx } from "react/jsx-runtime";
function ShaderGradientStatelessCanvas(props) {
  const [pixelDensity] = useQueryState("pixelDensity");
  const [fov] = useQueryState("fov");
  return /* @__PURE__ */ jsx(ShaderGradientCanvas, __spreadValues(__spreadValues({}, props), canvasProps(pixelDensity, fov)));
}

export {
  ShaderGradientStatelessCanvas
};
