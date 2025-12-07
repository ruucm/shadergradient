import {
  init_store,
  updateGradientState,
  useUIStore
} from "./chunk-AHTPSY2H.mjs";
import {
  PRESETS,
  init_presetURLs
} from "./chunk-MPLXXSUE.mjs";
import {
  __esm
} from "./chunk-HXGKXP63.mjs";

// src/components/Shared/ShaderGradientStateless/store/usePresetToStore.ts
import { useEffect } from "react";
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
var pageLoaded;
var init_usePresetToStore = __esm({
  "src/components/Shared/ShaderGradientStateless/store/usePresetToStore.ts"() {
    init_presetURLs();
    init_store();
    pageLoaded = false;
  }
});

export {
  usePresetToStore,
  init_usePresetToStore
};
