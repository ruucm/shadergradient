import {
  DEFAUlT_PRESET,
  initialActivePreset
} from "./chunk-RVMBOHEA.mjs";
import {
  __export1
} from "./chunk-AVODCFKL.mjs";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-5BEQP2BQ.mjs";

// ../../node_modules/.pnpm/zustand@5.0.1_@types+react@18.3.18_immer@9.0.21_react@18.3.1_use-sync-external-store@1.4.0_react@18.3.1_/node_modules/zustand/esm/vanilla.mjs
var createStoreImpl = (createState) => {
  let state;
  const listeners = /* @__PURE__ */ new Set();
  const setState = (partial, replace) => {
    const nextState = typeof partial === "function" ? partial(state) : partial;
    if (!Object.is(nextState, state)) {
      const previousState = state;
      state = (replace != null ? replace : typeof nextState !== "object" || nextState === null) ? nextState : Object.assign({}, state, nextState);
      listeners.forEach((listener) => listener(state, previousState));
    }
  };
  const getState = () => state;
  const getInitialState = () => initialState;
  const subscribe = (listener) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  };
  const api = { setState, getState, getInitialState, subscribe };
  const initialState = state = createState(setState, getState, api);
  return api;
};
var createStore = (createState) => createState ? createStoreImpl(createState) : createStoreImpl;

// ../../node_modules/.pnpm/zustand@5.0.1_@types+react@18.3.18_immer@9.0.21_react@18.3.1_use-sync-external-store@1.4.0_react@18.3.1_/node_modules/zustand/esm/react.mjs
import React from "react";
var identity = (arg) => arg;
function useStore(api, selector = identity) {
  const slice = React.useSyncExternalStore(
    api.subscribe,
    () => selector(api.getState()),
    () => selector(api.getInitialState())
  );
  React.useDebugValue(slice);
  return slice;
}
var createImpl = (createState) => {
  const api = createStore(createState);
  const useBoundStore = (selector) => useStore(api, selector);
  Object.assign(useBoundStore, api);
  return useBoundStore;
};
var create = (createState) => createState ? createImpl(createState) : createImpl;

// ../../node_modules/.pnpm/zustand@5.0.1_@types+react@18.3.18_immer@9.0.21_react@18.3.1_use-sync-external-store@1.4.0_react@18.3.1_/node_modules/zustand/esm/middleware.mjs
var combine = (initialState, create2) => (...a) => Object.assign({}, initialState, create2(...a));

// src/ShaderGradientStateless/store/store.ts
var defaultState = __spreadValues({}, parseState());
var useQueryStore = create((set) => defaultState);
var updateGradientState = (querystate) => {
  const isString = typeof querystate === "string";
  let state = querystate;
  if (isString) state = parseState(querystate);
  useQueryStore.setState(state, isString);
};
function parseState(search = DEFAUlT_PRESET) {
  return __export1(search, {
    parseNumbers: true,
    parseBooleans: true,
    arrayFormat: "index"
  });
}
var useDomStore = create(() => {
  return { dom: null };
});
var useCursorStore = create((set) => ({
  hoverState: 0,
  hover: "default",
  updateHoverState: (payload) => set({ hoverState: payload })
}));
var useUIStore = create(
  combine(
    { activePreset: initialActivePreset, mode: "full", loadingPercentage: 0 },
    (set) => ({
      setActivePreset: (by) => set((state) => ({ activePreset: by })),
      setMode: (data) => set((state) => __spreadProps(__spreadValues({}, state), { mode: data })),
      setLoadingPercentage: (data) => set((state) => __spreadProps(__spreadValues({}, state), { loadingPercentage: data }))
    })
  )
);
var useFigmaStore = create((set) => ({
  figma: { selection: 0, user: null },
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

export {
  useQueryStore,
  updateGradientState,
  useDomStore,
  useCursorStore,
  useUIStore,
  useFigma,
  useBillingIntervalStore,
  useBillingInterval
};
