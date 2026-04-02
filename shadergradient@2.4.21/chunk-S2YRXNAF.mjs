import {
  __objRest,
  __spreadValues
} from "./chunk-CU5I7XXF.mjs";

// src/ShaderGradient/Axis/useFBO.tsx
import * as React from "react";
import * as THREE from "three";
import { useThree } from "@react-three/fiber";
function useFBO(width, height, settings) {
  const { gl, size, viewport } = useThree();
  const _width = typeof width === "number" ? width : size.width * viewport.dpr;
  const _height = typeof height === "number" ? height : size.height * viewport.dpr;
  const _settings = (typeof width === "number" ? settings : width) || {};
  const _a = _settings, { samples } = _a, targetSettings = __objRest(_a, ["samples"]);
  const target = React.useMemo(() => {
    let target2;
    target2 = new THREE.WebGLRenderTarget(_width, _height, __spreadValues({
      minFilter: THREE.LinearFilter,
      magFilter: THREE.LinearFilter,
      encoding: gl.outputEncoding,
      type: THREE.HalfFloatType
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
