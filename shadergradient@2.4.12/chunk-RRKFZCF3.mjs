import {
  useInView
} from "./chunk-ROJWBSDB.mjs";
import {
  Canvas
} from "./chunk-73SH6GTX.mjs";
import {
  ShaderChunk
} from "./chunk-BT6X4JN2.mjs";
import {
  canvasProps
} from "./chunk-WPNBLVEI.mjs";
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
  threshold = 0.1,
  rootMargin = "0px"
}) {
  const { isInView, containerRef } = useInView(lazyLoad, threshold, rootMargin);
  const contextValue = useMemo(
    () => ({ envBasePath }),
    [envBasePath]
  );
  useShaderChunkFix();
  return /* @__PURE__ */ jsx("div", { ref: containerRef, style: __spreadValues({ width: "100%", height: "100%" }, style), children: (!lazyLoad || isInView) && /* @__PURE__ */ jsx(Context.Provider, { value: contextValue, children: /* @__PURE__ */ jsx(
    Canvas,
    __spreadProps(__spreadValues({
      id: "gradientCanvas",
      style: { pointerEvents },
      resize: { offsetSize: true },
      className
    }, canvasProps(pixelDensity, fov)), {
      children
    }),
    pixelDensity + fov
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
