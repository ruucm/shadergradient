import {
  OrthographicCamera
} from "./chunk-FW2KKI26.mjs";
import {
  useCamera
} from "./chunk-B5OTQHNJ.mjs";
import {
  createPortal,
  useFrame,
  useThree
} from "./chunk-73SH6GTX.mjs";
import {
  Matrix4,
  Object3D,
  Quaternion,
  Scene,
  Vector3
} from "./chunk-BT6X4JN2.mjs";

// src/ShaderGradient/Axis/GizmoHelper.tsx
import * as React from "react";
import { jsx, jsxs } from "react/jsx-runtime";
var Context = React.createContext(
  {}
);
var useGizmoContext = () => {
  return React.useContext(Context);
};
var turnRate = 2 * Math.PI;
var dummy = new Object3D();
var matrix = new Matrix4();
var [q1, q2] = [new Quaternion(), new Quaternion()];
var target = new Vector3();
var targetPosition = new Vector3();
var isOrbitControls = (controls) => {
  return "minPolarAngle" in controls;
};
var GizmoHelper = ({
  alignment = "bottom-right",
  margin = [80, 80],
  renderPriority = 0,
  autoClear = true,
  onUpdate,
  onTarget,
  children: GizmoHelperComponent
}) => {
  const size = useThree(({ size: size2 }) => size2);
  const mainCamera = useThree(({ camera }) => camera);
  const defaultControls = useThree(
    ({ controls }) => controls
  );
  const gl = useThree(({ gl: gl2 }) => gl2);
  const scene = useThree(({ scene: scene2 }) => scene2);
  const invalidate = useThree(({ invalidate: invalidate2 }) => invalidate2);
  const backgroundRef = React.useRef();
  const gizmoRef = React.useRef();
  const virtualCam = React.useRef(null);
  const [virtualScene] = React.useState(() => new Scene());
  const animating = React.useRef(false);
  const radius = React.useRef(0);
  const focusPoint = React.useRef(new Vector3(0, 0, 0));
  const defaultUp = React.useRef(new Vector3(0, 0, 0));
  React.useEffect(() => {
    defaultUp.current.copy(mainCamera.up);
  }, [mainCamera]);
  const tweenCamera = React.useCallback(
    (direction) => {
      animating.current = true;
      if (defaultControls || onTarget)
        focusPoint.current = (defaultControls == null ? void 0 : defaultControls.target) || (onTarget == null ? void 0 : onTarget());
      radius.current = mainCamera.position.distanceTo(target);
      q1.copy(mainCamera.quaternion);
      targetPosition.copy(direction).multiplyScalar(radius.current).add(target);
      dummy.lookAt(targetPosition);
      q2.copy(dummy.quaternion);
      invalidate();
    },
    [defaultControls, mainCamera, onTarget, invalidate]
  );
  React.useEffect(() => {
    if (scene.background) {
      backgroundRef.current = scene.background;
      scene.background = null;
      virtualScene.background = backgroundRef.current;
    }
    return () => {
      if (backgroundRef.current) scene.background = backgroundRef.current;
    };
  }, []);
  useFrame((_, delta) => {
    var _a;
    if (virtualCam.current && gizmoRef.current) {
      if (animating.current) {
        if (q1.angleTo(q2) < 0.01) {
          animating.current = false;
          if (isOrbitControls(defaultControls)) {
            mainCamera.up.copy(defaultUp.current);
          }
        } else {
          const step = delta * turnRate;
          q1.rotateTowards(q2, step);
          mainCamera.position.set(0, 0, 1).applyQuaternion(q1).multiplyScalar(radius.current).add(focusPoint.current);
          mainCamera.up.set(0, 1, 0).applyQuaternion(q1).normalize();
          mainCamera.quaternion.copy(q1);
          if (onUpdate) onUpdate();
          else if (defaultControls) defaultControls.update();
          invalidate();
        }
      }
      matrix.copy(mainCamera.matrix).invert();
      (_a = gizmoRef.current) == null ? void 0 : _a.quaternion.setFromRotationMatrix(matrix);
      if (autoClear) gl.autoClear = false;
      gl.clearDepth();
      gl.render(virtualScene, virtualCam.current);
    }
  }, renderPriority);
  const raycast = useCamera(virtualCam);
  const gizmoHelperContext = React.useMemo(
    () => ({ tweenCamera, raycast }),
    [tweenCamera]
  );
  const [marginX, marginY] = margin;
  const x = alignment.endsWith("-center") ? 0 : alignment.endsWith("-left") ? -size.width / 2 + marginX : size.width / 2 - marginX;
  const y = alignment.startsWith("center-") ? 0 : alignment.startsWith("top-") ? size.height / 2 - marginY : -size.height / 2 + marginY;
  return createPortal(
    /* @__PURE__ */ jsxs(Context.Provider, { value: gizmoHelperContext, children: [
      /* @__PURE__ */ jsx(OrthographicCamera, { ref: virtualCam, position: [0, 0, 200] }),
      /* @__PURE__ */ jsx("group", { ref: gizmoRef, position: [x, y, 0], children: GizmoHelperComponent })
    ] }),
    virtualScene
  );
};

export {
  useGizmoContext,
  GizmoHelper
};
