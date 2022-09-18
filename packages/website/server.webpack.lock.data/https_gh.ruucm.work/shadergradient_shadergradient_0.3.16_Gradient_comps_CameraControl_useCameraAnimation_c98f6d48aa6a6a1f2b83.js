// src/Gradient/comps/CameraControl/useCameraAnimation.ts
import { useEffect, useRef } from "react";
import {
  zoomOutPlanes,
  zoomOutSphere,
  defaultPlanesZoom,
  defaultSphereDistance
} from "../../../consts.js";
import { usePropertyStore } from "../../../store.js";
import { dToR, useFiber } from "../../../utils/index.js";
function useCameraAnimation({
  type,
  cAzimuthAngle,
  cPolarAngle,
  cDistance,
  cameraZoom
}) {
  const { useFrame } = useFiber();
  const ref = useRef();
  const control = ref.current;
  useFrame((state, delta) => ref.current.update(delta));
  const zoomOut = usePropertyStore((state) => state.zoomOut);
  useEffect(() => {
    control == null ? void 0 : control.rotateTo(dToR(cAzimuthAngle), dToR(cPolarAngle), true);
  }, [control, cAzimuthAngle, cPolarAngle]);
  useEffect(() => {
    if (zoomOut) {
      if (type === "sphere") {
        control == null ? void 0 : control.dollyTo(zoomOutSphere.distance, true);
        control == null ? void 0 : control.zoomTo(zoomOutSphere.zoom, true);
      } else {
        control == null ? void 0 : control.dollyTo(zoomOutPlanes.distance, true);
        control == null ? void 0 : control.zoomTo(zoomOutPlanes.zoom, true);
      }
    } else {
      if (type === "sphere") {
        control == null ? void 0 : control.zoomTo(cameraZoom, true);
        control == null ? void 0 : control.dollyTo(defaultSphereDistance, true);
      } else {
        control == null ? void 0 : control.dollyTo(cDistance, true);
        control == null ? void 0 : control.zoomTo(defaultPlanesZoom, true);
      }
    }
  }, [control, zoomOut, type, cameraZoom, cDistance]);
  return ref;
}
export {
  useCameraAnimation
};
