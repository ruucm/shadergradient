import {
  RenderPass
} from "./chunk-OJ2FJ367.mjs";
import {
  EffectComposer
} from "./chunk-QVWWXOVQ.mjs";
import {
  HalftonePass
} from "./chunk-2U7BPWZ5.mjs";
import {
  useFrame,
  useThree
} from "./chunk-73SH6GTX.mjs";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-5BEQP2BQ.mjs";

// src/ShaderGradient/PostProcessing/PostProcessing.tsx
import { useEffect, useMemo, useRef } from "react";
import { Fragment, jsx } from "react/jsx-runtime";
function PostProcessing({ disable = false }) {
  const { gl, scene, camera, size } = useThree();
  const composerRef = useRef(null);
  const halftonePassRef = useRef(null);
  const halftoneParams = useMemo(
    () => ({
      shape: 1,
      radius: 2,
      rotateR: Math.PI / 12,
      rotateB: Math.PI / 12 * 2,
      rotateG: Math.PI / 12 * 3,
      scatter: 1,
      blending: 1,
      blendingMode: 1,
      greyscale: false
    }),
    []
  );
  useEffect(() => {
    const effectComposer = new EffectComposer(gl);
    const renderPass = new RenderPass(scene, camera);
    const halftonePass = new HalftonePass(
      size.width,
      size.height,
      __spreadProps(__spreadValues({}, halftoneParams), { disable })
    );
    effectComposer.addPass(renderPass);
    effectComposer.addPass(halftonePass);
    composerRef.current = effectComposer;
    halftonePassRef.current = halftonePass;
    return () => {
      var _a, _b, _c, _d, _e, _f, _g, _h;
      (_a = renderPass.dispose) == null ? void 0 : _a.call(renderPass);
      if ((_b = halftonePass.fsQuad) == null ? void 0 : _b.dispose) halftonePass.fsQuad.dispose();
      (_d = (_c = halftonePass.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
      (_f = (_e = effectComposer.renderTarget1) == null ? void 0 : _e.dispose) == null ? void 0 : _f.call(_e);
      (_h = (_g = effectComposer.renderTarget2) == null ? void 0 : _g.dispose) == null ? void 0 : _h.call(_g);
      composerRef.current = null;
      halftonePassRef.current = null;
    };
  }, [camera, gl, halftoneParams, scene]);
  useEffect(() => {
    var _a;
    const composer = composerRef.current;
    if (!composer) return;
    composer.setSize(size.width, size.height);
    (_a = halftonePassRef.current) == null ? void 0 : _a.setSize(size.width, size.height);
  }, [size.height, size.width]);
  useEffect(() => {
    var _a, _b;
    if ((_b = (_a = halftonePassRef.current) == null ? void 0 : _a.uniforms) == null ? void 0 : _b.disable) {
      halftonePassRef.current.uniforms.disable.value = disable;
    }
  }, [disable]);
  useFrame((_, delta) => {
    const composer = composerRef.current;
    if (!composer) return;
    gl.autoClear = true;
    composer.render(delta);
  }, 1);
  return /* @__PURE__ */ jsx(Fragment, {});
}

export {
  PostProcessing
};
