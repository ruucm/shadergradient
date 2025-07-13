import {
  combine,
  create
} from "./chunk-GDIJPCEQ.mjs";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-CU5I7XXF.mjs";

// src/store.ts
var useUIStore = create(
  combine({
    activePreset: 0,
    mode: "full",
    loadingPercentage: 0,
    inputMode: "preset",
    urlInput: ""
    //preset or url
  }, (set) => ({
    setActivePreset: (by) => set((state) => ({ activePreset: by })),
    setInputMode: (data) => set((state) => __spreadProps(__spreadValues({}, state), { input: data })),
    setMode: (data) => set((state) => __spreadProps(__spreadValues({}, state), { mode: data })),
    setUrlInput: (data) => set((state) => __spreadProps(__spreadValues({}, state), { urlInput: data })),
    setLoadingPercentage: (data) => set((state) => __spreadProps(__spreadValues({}, state), { loadingPercentage: data }))
  }))
);
var useBillingIntervalStore = create((set) => ({
  billingInterval: "year",
  setBillingInterval: (payload) => set((state) => ({ billingInterval: payload }))
}));
function useBillingInterval() {
  const billingInterval = useBillingIntervalStore(
    (state) => state.billingInterval
  );
  const setBillingInterval = useBillingIntervalStore(
    (state) => state.setBillingInterval
  );
  return [billingInterval, setBillingInterval];
}

export {
  useUIStore,
  useBillingIntervalStore,
  useBillingInterval
};
