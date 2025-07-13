import {
  EffectComposer
} from "./chunk-2S3VJM34.mjs";
import {
  RenderPass
} from "./chunk-IRMTC4UN.mjs";
import {
  HalftonePass
} from "./chunk-XLXOMSVB.mjs";
import {
  useFrame,
  useThree
} from "./chunk-4MOUWEMW.mjs";

// src/ShaderGradient/PostProcessing/PostProcessing.tsx
import { useEffect, useMemo } from "react";
import { Fragment, jsx } from "react/jsx-runtime";
function PostProcessing({ disable = false }) {
  const { gl, scene, camera, size } = useThree();
  const composer = useMemo(() => {
    const effectComposer = new EffectComposer(gl);
    effectComposer.addPass(new RenderPass(scene, camera));
    const halftoneParams = {
      shape: 1,
      radius: 2,
      rotateR: Math.PI / 12,
      rotateB: Math.PI / 12 * 2,
      rotateG: Math.PI / 12 * 3,
      scatter: 1,
      blending: 1,
      blendingMode: 1,
      greyscale: false,
      disable
    };
    const halftonePass = new HalftonePass(
      size.width,
      size.height,
      halftoneParams
    );
    effectComposer.addPass(halftonePass);
    return effectComposer;
  }, [gl, scene, camera, size, disable]);
  useEffect(() => composer == null ? void 0 : composer.setSize(size.width, size.height), [composer, size]);
  useFrame(
    (_, delta) => void (gl.autoClear = true, composer.render(delta)),
    1
  );
  return /* @__PURE__ */ jsx(Fragment, {});
}

export {
  PostProcessing
};
