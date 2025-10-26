import {
  dToR
} from "./chunk-WNGYPXFW.mjs";
import {
  useFrame
} from "./chunk-73SH6GTX.mjs";
import {
  defaultPlanesZoom,
  defaultSphereDistance,
  zoomOutPlanes,
  zoomOutSphere
} from "./chunk-WPNBLVEI.mjs";

// src/ShaderGradient/Controls/useCameraAnimation.ts
import { useEffect, useRef } from "react";
function useCameraAnimation({
  type,
  cAzimuthAngle,
  cPolarAngle,
  cDistance,
  cameraZoom,
  zoomOut,
  enableTransition = true
}) {
  const ref = useRef();
  useFrame((state, delta) => ref.current.update(delta));
  useEffect(() => {
    const control = ref.current;
    control == null ? void 0 : control.rotateTo(dToR(cAzimuthAngle), dToR(cPolarAngle), enableTransition);
  }, [ref, cAzimuthAngle, cPolarAngle]);
  useEffect(() => {
    const control = ref.current;
    if (zoomOut) {
      if (type === "sphere") {
        control == null ? void 0 : control.dollyTo(zoomOutSphere.distance, enableTransition);
        control == null ? void 0 : control.zoomTo(zoomOutSphere.zoom, enableTransition);
      } else {
        control == null ? void 0 : control.dollyTo(zoomOutPlanes.distance, enableTransition);
        control == null ? void 0 : control.zoomTo(zoomOutPlanes.zoom, enableTransition);
      }
    } else {
      if (type === "sphere") {
        control == null ? void 0 : control.zoomTo(cameraZoom, enableTransition);
        control == null ? void 0 : control.dollyTo(defaultSphereDistance, enableTransition);
      } else {
        control == null ? void 0 : control.dollyTo(cDistance, enableTransition);
        control == null ? void 0 : control.zoomTo(defaultPlanesZoom, enableTransition);
      }
    }
  }, [ref, zoomOut, type, cameraZoom, cDistance]);
  return ref;
}

export {
  useCameraAnimation
};
