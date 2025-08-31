// ../../node_modules/.pnpm/zustand@5.0.1_@types+react@18.2.73_immer@9.0.21_react@18.3.1_use-sync-external-store@1.5.0_react@18.3.1_/node_modules/zustand/esm/react.mjs
import React from "react";

// ../../node_modules/.pnpm/zustand@5.0.1_@types+react@18.2.73_immer@9.0.21_react@18.3.1_use-sync-external-store@1.5.0_react@18.3.1_/node_modules/zustand/esm/vanilla.mjs
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

// ../../node_modules/.pnpm/zustand@5.0.1_@types+react@18.2.73_immer@9.0.21_react@18.3.1_use-sync-external-store@1.5.0_react@18.3.1_/node_modules/zustand/esm/react.mjs
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

// ../../node_modules/.pnpm/zustand@5.0.1_@types+react@18.2.73_immer@9.0.21_react@18.3.1_use-sync-external-store@1.5.0_react@18.3.1_/node_modules/zustand/esm/middleware.mjs
var combine = (initialState, create2) => (...a) => Object.assign({}, initialState, create2(...a));

export {
  create,
  combine
};
