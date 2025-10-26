import {
  initLiveReload
} from "../../chunk-2UADZWQU.mjs";
import "../../chunk-IXEL7LSF.mjs";
import {
  __async
} from "../../chunk-5BEQP2BQ.mjs";

// src/utils/live-reload/useRealtimeComponent.ts
import * as React from "react";
import { RenderTarget } from "framer";
var isDev = [RenderTarget.canvas, RenderTarget.preview].includes(
  RenderTarget.current()
);
function useRealtimeComponent(originalComponent, componentName) {
  if (!isDev) return originalComponent;
  const [, setForceRerender] = React.useState(0);
  const updateCount = React.useRef(0);
  const updatedInstance = React.useRef(null);
  React.useLayoutEffect(() => {
    const onRebuild = (event) => __async(this, null, function* () {
      console.log(
        `[framer-live-esm] Build complete, refreshing ${componentName}`
      );
      const response = yield import(`http://127.0.0.1:8000/${componentName}.mjs?${updateCount.current}`);
      updateCount.current++;
      updatedInstance.current = response[componentName.split("/").pop()];
      setForceRerender(updateCount.current);
    });
    const setupHandler = (retryCount = 0) => {
      if (!window.framerRealtimeSocket) {
        setTimeout(() => setupHandler(retryCount + 1), retryCount + 1 * 500);
        return;
      }
      window.framerRealtimeSocket.on("build", onRebuild);
    };
    setupHandler();
    return () => {
      if (window.framerRealtimeSocket) {
        window.framerRealtimeSocket.off("build", onRebuild);
      }
    };
  }, [componentName]);
  React.useEffect(() => {
    initLiveReload();
  }, []);
  return updatedInstance.current || originalComponent;
}
export {
  isDev,
  useRealtimeComponent
};
