import {
  combine,
  create,
  createJSONStorage,
  init_esm,
  init_middleware,
  persist
} from "./chunk-NP5XZW6Z.mjs";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-HXGKXP63.mjs";

// src/store.ts
init_esm();
init_middleware();
var useUIStore = create(
  combine(
    {
      activePreset: 0,
      mode: "full",
      loadingPercentage: 0,
      inputMode: "preset",
      urlInput: "",
      //preset or url
      error: "",
      figmaPage: ""
    },
    (set) => ({
      setActivePreset: (by) => set((state) => ({ activePreset: by })),
      setInputMode: (data) => set((state) => __spreadProps(__spreadValues({}, state), { input: data })),
      setMode: (data) => set((state) => __spreadProps(__spreadValues({}, state), { mode: data })),
      setUrlInput: (data) => set((state) => __spreadProps(__spreadValues({}, state), { urlInput: data })),
      setError: (data) => set((state) => __spreadProps(__spreadValues({}, state), { error: data })),
      setFigmaPage: (data) => set((state) => __spreadProps(__spreadValues({}, state), { figmaPage: data })),
      setLoadingPercentage: (data) => set((state) => __spreadProps(__spreadValues({}, state), { loadingPercentage: data }))
    })
  )
);
var useScrollableBoxStore = create()(
  persist(
    (set) => ({
      activeIndex: 0,
      setActiveIndex: (index) => set({ activeIndex: index })
    }),
    {
      name: "scrollable-box-storage",
      storage: createJSONStorage(() => localStorage)
    }
  )
);
var useFigmaStore = create((set) => ({
  figma: { selection: 0, user: null, error: "", page: "" },
  setFigma: (payload) => set((prev) => ({ figma: __spreadValues(__spreadValues({}, prev.figma), payload) }))
}));
function useFigma() {
  const figma = useFigmaStore((state) => state.figma);
  const setFigma = useFigmaStore((state) => state.setFigma);
  return [figma, setFigma];
}
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
var useScrollStore = create()((set) => ({
  highlightWord: 0,
  currentSection: 0,
  setHighlightWord: (word) => set({ highlightWord: word }),
  setCurrentSection: (section) => set({ currentSection: section })
}));
var useUIOverrideStore = create()((set) => ({
  randomColor: [
    [100, 180, 255],
    [92, 92, 124],
    [200, 200, 200]
  ],
  slider: 0,
  toggle: false,
  setRandomColor: (color) => set({ randomColor: color }),
  setSlider: (slider) => set({ slider }),
  setToggle: (toggle) => set({ toggle })
}));
var useFigmaPluginStore = create()((set) => ({
  currentTab: 0,
  scrollingTo: null,
  share: "url",
  easyView: false,
  setCurrentTab: (tab) => set({ currentTab: tab }),
  setScrollingTo: (to) => set({ scrollingTo: to }),
  setShare: (share) => set({ share }),
  setEasyView: (easyView) => set({ easyView })
}));

export {
  useUIStore,
  useScrollableBoxStore,
  useFigmaStore,
  useFigma,
  useBillingIntervalStore,
  useBillingInterval,
  useScrollStore,
  useUIOverrideStore,
  useFigmaPluginStore
};
