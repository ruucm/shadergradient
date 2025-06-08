import {
  Canvas
} from "./chunk-4MOUWEMW.mjs";
import {
  useInView
} from "./chunk-5HVKDCHP.mjs";
import {
  ShaderChunk
} from "./chunk-Z4XR7UL5.mjs";
import {
  canvasProps,
  defaultEnvBasePath
} from "./chunk-RKBHOMSK.mjs";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-5BEQP2BQ.mjs";

// src/ShaderGradientCanvas.tsx
import { useEffect, createContext, useMemo, useContext } from "react";
import { jsx } from "react/jsx-runtime";
var Context = createContext(
  {}
);
var useShaderGradientCanvasContext = () => {
  return useContext(Context);
};
function ShaderGradientCanvas({
  children,
  style = {},
  pixelDensity = 1,
  fov = 45,
  pointerEvents,
  className,
  envBasePath,
  lazyLoad = true,
  threshold = 0.1
}) {
  const { isInView, containerRef } = useInView(lazyLoad, threshold);
  const contextValue = useMemo(
    () => ({
      envBasePath: envBasePath || defaultEnvBasePath
    }),
    [envBasePath]
  );
  useShaderChunkFix();
  return /* @__PURE__ */ jsx("div", { ref: containerRef, style: __spreadValues({ width: "100%", height: "100%" }, style), children: (!lazyLoad || isInView) && /* @__PURE__ */ jsx(Context.Provider, { value: contextValue, children: /* @__PURE__ */ jsx(
    Canvas,
    __spreadProps(__spreadValues({
      style: { pointerEvents },
      resize: { offsetSize: true },
      className
    }, canvasProps(pixelDensity, fov)), {
      id: "gradientCanvas",
      children
    })
  ) }) });
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
  useShaderGradientCanvasContext,
  ShaderGradientCanvas
};
