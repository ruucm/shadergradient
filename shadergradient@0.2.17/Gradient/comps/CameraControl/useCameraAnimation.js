// src/Gradient/comps/CameraControl/useCameraAnimation.ts
import { useEffect, useRef } from "react";
import { useQueryState } from "../../../hooks/index.js";
import { usePropertyStore } from "../../../store.js";
import { dToR, useFiber } from "../../../utils/index.js";
var defaultDistance = 10;
var defaultZoom = 1;
function useCameraAnimation() {
  const { useFrame } = useFiber();
  const ref = useRef();
  const control = ref.current;
  useFrame((state, delta) => ref.current.update(delta));
  const [cAzimuthAngle] = useQueryState("cAzimuthAngle");
  const [cPolarAngle] = useQueryState("cPolarAngle");
  const [cDistance] = useQueryState("cDistance");
  const [cameraZoom] = useQueryState("cameraZoom");
  const hoverState = usePropertyStore((state) => state.hoverState);
  const zoomOut = usePropertyStore((state) => state.zoomOut);
  const [type] = useQueryState("type");
  useEffect(() => {
    control == null ? void 0 : control.dollyTo(cDistance, true);
  }, [control]);
  useEffect(() => {
    control == null ? void 0 : control.rotateTo(dToR(cAzimuthAngle), dToR(cPolarAngle), true);
  }, [control, cAzimuthAngle, cPolarAngle]);
  useEffect(() => {
    if (zoomOut) {
      control == null ? void 0 : control.dollyTo(defaultDistance, true);
      control == null ? void 0 : control.zoomTo(defaultZoom, true);
    } else {
      if (type === "sphere") {
        control == null ? void 0 : control.zoomTo(cameraZoom, true);
        control == null ? void 0 : control.dollyTo(defaultDistance, true);
      } else {
        control == null ? void 0 : control.dollyTo(cDistance, true);
        control == null ? void 0 : control.zoomTo(defaultZoom, true);
      }
    }
  }, [control, zoomOut, type]);
  return ref;
}
export {
  useCameraAnimation
};
