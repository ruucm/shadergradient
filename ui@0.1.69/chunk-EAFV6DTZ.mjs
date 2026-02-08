import {
  init_useQueryState,
  useQueryState
} from "./chunk-I5E26MJT.mjs";
import {
  ShaderGradientCanvas,
  init_dist,
  mergeCanvasProps
} from "./chunk-6T37OWYT.mjs";
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
  const [preserveDrawingBuffer] = useQueryState("preserveDrawingBuffer");
  const [powerPreference] = useQueryState("powerPreference");
  const canvasProps = mergeCanvasProps({
    queryPixelDensity: pixelDensity,
    queryFov: fov,
    queryPreserveDrawingBuffer: preserveDrawingBuffer,
    queryPowerPreference: powerPreference,
    props
  });
  return /* @__PURE__ */ jsx(
    ShaderGradientCanvas,
    __spreadProps(__spreadValues({}, props), {
      pixelDensity: canvasProps.pixelDensity,
      fov: canvasProps.fov,
      preserveDrawingBuffer: canvasProps.preserveDrawingBuffer,
      powerPreference: canvasProps.powerPreference
    })
  );
}

export {
  ShaderGradientStatelessCanvas
};
