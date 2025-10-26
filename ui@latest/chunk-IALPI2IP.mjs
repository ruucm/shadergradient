import {
  updateGradientState,
  useUIStore
} from "./chunk-BMVUNY5L.mjs";
import {
  PRESETS
} from "./chunk-5RQD2NRH.mjs";

// src/components/Shared/ShaderGradientStateless/store/usePresetToStore.ts
import { useEffect } from "react";
var pageLoaded = false;
function usePresetToStore() {
  const activePreset = useUIStore((state) => state.activePreset);
  useEffect(() => {
    var _a;
    if (typeof window === "undefined") return;
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
