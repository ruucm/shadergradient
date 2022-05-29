// src/Gradient/comps/CameraControl/useCameraAnimation.ts
import { useEffect, useRef } from "react";
import { aboutAngles, defaultDistance, defaultZoom } from "../../../consts.js";
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
  const hoverState = usePropertyStore((state) => state.hoverState);
  const zoomOut = usePropertyStore((state) => state.zoomOut);
  const inAbout = usePropertyStore((state) => state.inAbout);
  useEffect(() => {
    control == null ? void 0 : control.rotateTo(dToR(cAzimuthAngle), dToR(cPolarAngle), true);
    if (inAbout === true) {
      control == null ? void 0 : control.rotateTo(dToR(aboutAngles[0]), dToR(aboutAngles[1]), true);
    }
  }, [control, cAzimuthAngle, cPolarAngle, inAbout]);
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
  }, [control, zoomOut, type, cameraZoom, cDistance]);
  return ref;
}
export {
  useCameraAnimation
};
