import {
  combine
} from "./chunk-VEWYDM76.mjs";
import {
  create
} from "./chunk-XTOQHCY5.mjs";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-CU5I7XXF.mjs";

// src/store.ts
var useUIStore = create(
  combine({ activePreset: 0, mode: "full", loadingPercentage: 0 }, (set) => ({
    setActivePreset: (by) => set((state) => ({ activePreset: by })),
    setMode: (data) => set((state) => __spreadProps(__spreadValues({}, state), { mode: data })),
    setLoadingPercentage: (data) => set((state) => __spreadProps(__spreadValues({}, state), { loadingPercentage: data }))
  }))
);

export {
  useUIStore
};
