import {
  updateGradientState,
  useUIStore
} from "./chunk-HYJZ4XXP.mjs";
import {
  PRESETS
} from "./chunk-EIUMRO34.mjs";

// src/ShaderGradientStateless/store/usePresetToStore.ts
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
