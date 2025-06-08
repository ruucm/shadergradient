import {
  Canvas
} from "./chunk-4MOUWEMW.mjs";
import {
  ShaderChunk
} from "./chunk-Z4XR7UL5.mjs";
import {
  canvasProps
} from "./chunk-RKBHOMSK.mjs";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-5BEQP2BQ.mjs";

// src/ShaderGradientStateless/ShaderGradientStatelessCanvas.tsx
import { useEffect } from "react";
import { jsx } from "react/jsx-runtime";
function ShaderGradientStatelessCanvas({
  children,
  style = {},
  pixelDensity = 1,
  fov = 45,
  pointerEvents
}) {
  useShaderChunkFix();
  return /* @__PURE__ */ jsx(
    Canvas,
    __spreadProps(__spreadValues({
      style: __spreadProps(__spreadValues({}, style), { pointerEvents }),
      resize: { offsetSize: true }
    }, canvasProps(pixelDensity, fov)), {
      children
    })
  );
}
function useShaderChunkFix() {
  useEffect(() => {
    ShaderChunk["uv2_pars_vertex"] = ``;
    ShaderChunk["uv2_vertex"] = ``;
    ShaderChunk["uv2_pars_fragment"] = ``;
    ShaderChunk["encodings_fragment"] = ``;
  }, []);
}

export {
  ShaderGradientStatelessCanvas
};
