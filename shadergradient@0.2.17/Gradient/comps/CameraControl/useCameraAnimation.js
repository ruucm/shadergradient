// src/Gradient/comps/CameraControl/useCameraAnimation.ts
import { useEffect, useRef } from "react";
import { useQueryState } from "../../../hooks/index.js";
import { usePropertyStore } from "../../../store.js";
import { useFiber } from "../../../utils/index.js";
var defaultDistance = 10;
var defaultZoom = 1;
function useCameraAnimation() {
  const { useFrame } = useFiber();
  const ref = useRef();
  useFrame((state, delta) => ref.current.update(delta));
  const [cAzimuthAngle] = useQueryState("cAzimuthAngle");
  const [cPolarAngle] = useQueryState("cPolarAngle");
  const [cDistance] = useQueryState("cDistance");
  const [cameraZoom] = useQueryState("cameraZoom");
  const hoverState = usePropertyStore((state) => state.hoverState);
  const toggleZoom = usePropertyStore((state) => state.toggleZoom);
  const [type] = useQueryState("type");
  useEffect(() => {
    const control = ref.current;
    control && control.dollyTo(cDistance, true);
  }, [ref]);
  useEffect(() => {
    const control = ref.current;
    if (toggleZoom) {
      control.dollyTo(defaultDistance, true);
      control.zoomTo(defaultZoom, true);
    } else {
      if (type === "sphere") {
        control.zoomTo(cameraZoom, true);
        control.dollyTo(defaultDistance, true);
      } else {
        control.dollyTo(cDistance, true);
        control.zoomTo(defaultZoom, true);
      }
    }
  }, [ref, toggleZoom, type]);
  return ref;
}
export {
  useCameraAnimation
};
