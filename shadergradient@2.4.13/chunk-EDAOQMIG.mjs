import {
  mergeRefs
} from "./chunk-LGYLXRYF.mjs";
import {
  useFBO
} from "./chunk-RANVICU2.mjs";
import {
  useFrame,
  useThree
} from "./chunk-73SH6GTX.mjs";
import {
  __objRest,
  __spreadProps,
  __spreadValues
} from "./chunk-5BEQP2BQ.mjs";

// src/ShaderGradient/Axis/OrthographicCamera.tsx
import * as React from "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
var isFunction = (node) => typeof node === "function";
var OrthographicCamera = React.forwardRef(
  (_a, ref) => {
    var _b = _a, {
      envMap,
      resolution = 256,
      frames = Infinity,
      children,
      makeDefault
    } = _b, props = __objRest(_b, [
      "envMap",
      "resolution",
      "frames",
      "children",
      "makeDefault"
    ]);
    const set = useThree(({ set: set2 }) => set2);
    const camera = useThree(({ camera: camera2 }) => camera2);
    const size = useThree(({ size: size2 }) => size2);
    const cameraRef = React.useRef(null);
    const groupRef = React.useRef(null);
    const fbo = useFBO(resolution);
    React.useLayoutEffect(() => {
      if (!props.manual) {
        cameraRef.current.updateProjectionMatrix();
      }
    }, [size, props]);
    React.useLayoutEffect(() => {
      cameraRef.current.updateProjectionMatrix();
    });
    React.useLayoutEffect(() => {
      if (makeDefault) {
        const oldCam = camera;
        set(() => ({ camera: cameraRef.current }));
        return () => set(() => ({ camera: oldCam }));
      }
    }, [cameraRef, makeDefault, set]);
    let count = 0;
    let oldEnvMap = null;
    const functional = isFunction(children);
    useFrame((state) => {
      if (functional && (frames === Infinity || count < frames)) {
        groupRef.current.visible = false;
        state.gl.setRenderTarget(fbo);
        oldEnvMap = state.scene.background;
        if (envMap) state.scene.background = envMap;
        state.gl.render(state.scene, cameraRef.current);
        state.scene.background = oldEnvMap;
        state.gl.setRenderTarget(null);
        groupRef.current.visible = true;
        count++;
      }
    });
    return /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(
        "orthographicCamera",
        __spreadProps(__spreadValues({
          left: size.width / -2,
          right: size.width / 2,
          top: size.height / 2,
          bottom: size.height / -2,
          ref: mergeRefs([cameraRef, ref])
        }, props), {
          children: !functional && children
        })
      ),
      /* @__PURE__ */ jsx("group", { ref: groupRef, children: functional && children(fbo.texture) })
    ] });
  }
);

export {
  OrthographicCamera
};
