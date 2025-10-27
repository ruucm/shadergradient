import {
  init_usePresetToStore,
  usePresetToStore
} from "./chunk-2XH7KKNT.mjs";
import {
  init_useQueryState,
  useQueryState,
  useURLQueryState
} from "./chunk-PY6KCJWI.mjs";
import {
  init_store,
  updateGradientState,
  useBillingInterval,
  useBillingIntervalStore,
  useCursorStore,
  useDomStore,
  useFigma,
  useQueryStore,
  useUIStore
} from "./chunk-S6AAXDTH.mjs";
import {
  DEFAUlT_PRESET,
  PRESETS,
  init_presetURLs,
  initialActivePreset
} from "./chunk-LCDF6HP4.mjs";
import {
  __esm,
  __export
} from "./chunk-HXGKXP63.mjs";

// src/components/Shared/ShaderGradientStateless/store/index.ts
var store_exports = {};
__export(store_exports, {
  DEFAUlT_PRESET: () => DEFAUlT_PRESET,
  PRESETS: () => PRESETS,
  initialActivePreset: () => initialActivePreset,
  updateGradientState: () => updateGradientState,
  useBillingInterval: () => useBillingInterval,
  useBillingIntervalStore: () => useBillingIntervalStore,
  useCursorStore: () => useCursorStore,
  useDomStore: () => useDomStore,
  useFigma: () => useFigma,
  usePresetToStore: () => usePresetToStore,
  useQueryState: () => useQueryState,
  useQueryStore: () => useQueryStore,
  useUIStore: () => useUIStore,
  useURLQueryState: () => useURLQueryState
});
var init_store2 = __esm({
  "src/components/Shared/ShaderGradientStateless/store/index.ts"() {
    init_store();
    init_useQueryState();
    init_presetURLs();
    init_usePresetToStore();
  }
});

export {
  store_exports,
  init_store2 as init_store
};
