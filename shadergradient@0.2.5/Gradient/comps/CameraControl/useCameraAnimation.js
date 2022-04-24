// src/Gradient/comps/CameraControl/useCameraAnimation.ts
import { useEffect, useRef } from "react";
import { useQueryState } from "../../../hooks/index.js";
import { usePropertyStore } from "../../../store.js";
import { useFiber } from "../../../utils/index.js";
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
    if (control && hoverState === 0 && toggleZoom === false) {
    } else if (hoverState !== 0 || toggleZoom === true) {
      control.dollyTo(20, true);
    }
  }, [
    ref,
    cAzimuthAngle,
    cPolarAngle,
    cDistance,
    cameraZoom,
    hoverState,
    toggleZoom,
    type
  ]);
  return ref;
}
export {
  useCameraAnimation
};
