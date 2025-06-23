import {
  create
} from "./chunk-XTOQHCY5.mjs";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-WNQUEZJF.mjs";

// ../../node_modules/.pnpm/zustand@5.0.1_@types+react@18.2.73_immer@9.0.21_react@18.3.1_use-sync-external-store@1.5.0_react@18.3.1_/node_modules/zustand/esm/middleware.mjs
var combine = (initialState, create2) => (...a) => Object.assign({}, initialState, create2(...a));

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
