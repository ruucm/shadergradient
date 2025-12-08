import {
  applyProps,
  useThree
} from "./chunk-73SH6GTX.mjs";
import {
  Camera,
  Raycaster
} from "./chunk-BT6X4JN2.mjs";

// src/ShaderGradient/Axis/useCamera.tsx
import * as React from "react";
function useCamera(camera, props) {
  const pointer = useThree((state) => state.pointer);
  const [raycast] = React.useState(() => {
    const raycaster = new Raycaster();
    if (props) applyProps(raycaster, props, {});
    return function(_, intersects) {
      raycaster.setFromCamera(
        pointer,
        camera instanceof Camera ? camera : camera.current
      );
      const rc = this.constructor.prototype.raycast.bind(this);
      if (rc) rc(raycaster, intersects);
    };
  });
  return raycast;
}

export {
  useCamera
};
