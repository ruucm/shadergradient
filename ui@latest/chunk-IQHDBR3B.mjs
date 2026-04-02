import {
  init_useQueryState,
  useQueryState
} from "./chunk-IKNEA3HI.mjs";
import {
  ShaderGradientCanvas,
  init_dist,
  mergeCanvasProps
} from "./chunk-CF66W5N3.mjs";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-S4634TOL.mjs";

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
