import {
  updateGradientState,
  useUIStore
} from "./chunk-I77SZOCP.mjs";
import {
  PRESETS
} from "./chunk-FMU5CMSR.mjs";

// src/components/Shared/ShaderGradientStateless/store/usePresetToStore.ts
import { useEffect } from "react";
var pageLoaded = false;
function usePresetToStore() {
  const activePreset = useUIStore((state) => state.activePreset);
  useEffect(() => {
    var _a;
    let gradientURL;
    if (!pageLoaded && ((_a = window.location.search) == null ? void 0 : _a.includes("pixelDensity")))
      gradientURL = window.location.search;
    else gradientURL = PRESETS[activePreset].url;
    updateGradientState(gradientURL);
    pageLoaded = true;
  }, [activePreset]);
}

export {
  usePresetToStore
};
