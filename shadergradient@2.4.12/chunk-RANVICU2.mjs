import {
  useThree
} from "./chunk-73SH6GTX.mjs";
import {
  HalfFloatType,
  LinearFilter,
  WebGLRenderTarget
} from "./chunk-BT6X4JN2.mjs";
import {
  __objRest,
  __spreadValues
} from "./chunk-5BEQP2BQ.mjs";

// src/ShaderGradient/Axis/useFBO.tsx
import * as React from "react";
function useFBO(width, height, settings) {
  const { gl, size, viewport } = useThree();
  const _width = typeof width === "number" ? width : size.width * viewport.dpr;
  const _height = typeof height === "number" ? height : size.height * viewport.dpr;
  const _settings = (typeof width === "number" ? settings : width) || {};
  const _a = _settings, { samples } = _a, targetSettings = __objRest(_a, ["samples"]);
  const target = React.useMemo(() => {
    let target2;
    target2 = new WebGLRenderTarget(_width, _height, __spreadValues({
      minFilter: LinearFilter,
      magFilter: LinearFilter,
      encoding: gl.outputEncoding,
      type: HalfFloatType
    }, targetSettings));
    target2.samples = samples;
    return target2;
  }, []);
  React.useLayoutEffect(() => {
    target.setSize(_width, _height);
    if (samples) target.samples = samples;
  }, [samples, target, _width, _height]);
  React.useEffect(() => {
    return () => target.dispose();
  }, []);
  return target;
}

export {
  useFBO
};
