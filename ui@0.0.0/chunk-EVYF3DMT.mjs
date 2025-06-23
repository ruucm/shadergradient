import {
  __spreadProps,
  __spreadValues
} from "./chunk-FWCSY2DS.mjs";

// src/store.ts
import { create } from "zustand";
import { combine } from "zustand/middleware";
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
