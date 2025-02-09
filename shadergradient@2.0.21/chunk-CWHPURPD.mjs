import {
  Canvas
} from "./chunk-WS7WB67W.mjs";
import {
  ShaderChunk
} from "./chunk-Z4XR7UL5.mjs";
import {
  canvasProps
} from "./chunk-SX7QUDKQ.mjs";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-5BEQP2BQ.mjs";

// src/ShaderGradientCanvas.tsx
import { useEffect } from "react";
import { jsx } from "react/jsx-runtime";
function ShaderGradientCanvas({
  children,
  style = {},
  pixelDensity = 1,
  fov = 45,
  pointerEvents,
  className
}) {
  useShaderChunkFix();
  return /* @__PURE__ */ jsx(
    Canvas,
    __spreadProps(__spreadValues({
      style: __spreadProps(__spreadValues({}, style), { pointerEvents }),
      resize: { offsetSize: true },
      className
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
  ShaderGradientCanvas
};
