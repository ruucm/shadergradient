import {
  ACESFilmicToneMapping,
  BasicShadowMap,
  Camera,
  Clock,
  Layers,
  NoToneMapping,
  OrthographicCamera,
  PCFShadowMap,
  PCFSoftShadowMap,
  PerspectiveCamera,
  RGBAFormat,
  Raycaster,
  Scene,
  UnsignedByteType,
  VSMShadowMap,
  Vector2,
  Vector3,
  WebGLRenderer,
  three_module_exports
} from "./chunk-BT6X4JN2.mjs";
import {
  __export,
  __objRest,
  __spreadProps,
  __spreadValues
} from "./chunk-5BEQP2BQ.mjs";

// ../../node_modules/.pnpm/@react-three+fiber@8.18.0_@types+react@18.2.73_react-dom@18.3.1_react@18.3.1__react@18.3.1_three@0.169.0/node_modules/@react-three/fiber/dist/events-776716bd.esm.js
import * as React from "react";

// ../../node_modules/.pnpm/react-reconciler@0.27.0_react@18.3.1/node_modules/react-reconciler/cjs/react-reconciler-constants.development.js
var exports = {};
var module = {
  get exports() {
    return exports;
  },
  set exports(value) {
    exports = value;
  }
};
if (false) {
  (function() {
    "use strict";
    var SyncLane = (
      /*                        */
      1
    );
    var InputContinuousLane = (
      /*            */
      4
    );
    var DefaultLane = (
      /*                    */
      16
    );
    var IdleLane = (
      /*                       */
      536870912
    );
    var DiscreteEventPriority = SyncLane;
    var ContinuousEventPriority = InputContinuousLane;
    var DefaultEventPriority = DefaultLane;
    var IdleEventPriority = IdleLane;
    var LegacyRoot = 0;
    var ConcurrentRoot = 1;
    exports.ConcurrentRoot = ConcurrentRoot;
    exports.ContinuousEventPriority = ContinuousEventPriority;
    exports.DefaultEventPriority = DefaultEventPriority;
    exports.DiscreteEventPriority = DiscreteEventPriority;
    exports.IdleEventPriority = IdleEventPriority;
    exports.LegacyRoot = LegacyRoot;
  })();
}
var __export0;
var __export1;
var __export2;
var __export3;
var __export4;
var __export5;
if (Object.isExtensible(module.exports) && Object.keys(module.exports).length === 6) {
  __export0 = module.exports["ConcurrentRoot"];
  __export1 = module.exports["ContinuousEventPriority"];
  __export2 = module.exports["DefaultEventPriority"];
  __export3 = module.exports["DiscreteEventPriority"];
  __export4 = module.exports["IdleEventPriority"];
  __export5 = module.exports["LegacyRoot"];
}
var react_reconciler_constants_development_default = module.exports;

// ../../node_modules/.pnpm/react-reconciler@0.27.0_react@18.3.1/node_modules/react-reconciler/cjs/react-reconciler-constants.production.min.js
var react_reconciler_constants_production_min_exports = {};
__export(react_reconciler_constants_production_min_exports, {
  ConcurrentRoot: () => __export02,
  ContinuousEventPriority: () => __export12,
  DefaultEventPriority: () => __export22,
  DiscreteEventPriority: () => __export32,
  IdleEventPriority: () => __export42,
  LegacyRoot: () => __export52,
  default: () => react_reconciler_constants_production_min_default
});
var exports2 = {};
var module2 = {
  get exports() {
    return exports2;
  },
  set exports(value) {
    exports2 = value;
  }
};
exports2.ConcurrentRoot = 1;
exports2.ContinuousEventPriority = 4;
exports2.DefaultEventPriority = 16;
exports2.DiscreteEventPriority = 1;
exports2.IdleEventPriority = 536870912;
exports2.LegacyRoot = 0;
var __export02;
var __export12;
var __export22;
var __export32;
var __export42;
var __export52;
if (Object.isExtensible(module2.exports) && Object.keys(module2.exports).length === 6) {
  __export02 = module2.exports["ConcurrentRoot"];
  __export12 = module2.exports["ContinuousEventPriority"];
  __export22 = module2.exports["DefaultEventPriority"];
  __export32 = module2.exports["DiscreteEventPriority"];
  __export42 = module2.exports["IdleEventPriority"];
  __export52 = module2.exports["LegacyRoot"];
}
var react_reconciler_constants_production_min_default = module2.exports;

// ../../node_modules/.pnpm/react-reconciler@0.27.0_react@18.3.1/node_modules/react-reconciler/constants.js
function __cjs_default__(requiredModule) {
  var Object2 = (typeof window !== "undefined" && window || typeof self !== "undefined" && self || typeof global !== "undefined" && global || typeof globalThis !== "undefined" && globalThis || {}).Object;
  var isEsModule = false;
  var specifiers = Object2.create(null);
  var hasNamedExports = false;
  var hasDefaultExport = false;
  Object2.defineProperty(specifiers, "__esModule", {
    value: true,
    enumerable: false,
    configurable: true
  });
  if (requiredModule) {
    var names = Object2.getOwnPropertyNames(requiredModule);
    ;
    names.forEach(function(k3) {
      if (k3 === "default") {
        hasDefaultExport = true;
      } else if (!hasNamedExports && k3 != "__esModule") {
        try {
          hasNamedExports = requiredModule[k3] != null;
        } catch (err) {
        }
      }
      Object2.defineProperty(specifiers, k3, {
        get: function() {
          return requiredModule[k3];
        },
        enumerable: true,
        configurable: false
      });
    });
    if (Object2.getOwnPropertySymbols) {
      var symbols = Object2.getOwnPropertySymbols(requiredModule);
      symbols.forEach(function(k3) {
        Object2.defineProperty(specifiers, k3, {
          get: function() {
            return requiredModule[k3];
          },
          enumerable: false,
          configurable: false
        });
      });
    }
    Object2.preventExtensions(specifiers);
    Object2.seal(specifiers);
    if (Object2.freeze) {
      Object2.freeze(specifiers);
    }
  }
  if (hasNamedExports) {
    return specifiers;
  }
  if (hasDefaultExport) {
    if (Object2.isExtensible(specifiers.default) && !("default" in specifiers.default)) {
      Object2.defineProperty(specifiers.default, "default", {
        value: specifiers.default,
        configurable: false,
        enumerable: false
      });
    }
    return specifiers.default;
  }
  return specifiers;
}
var global = typeof window !== "undefined" && window || typeof self !== "undefined" && self || typeof global !== "undefined" && global || typeof globalThis !== "undefined" && globalThis || {};
var exports3 = {};
var module3 = {
  get exports() {
    return exports3;
  },
  set exports(value) {
    exports3 = value;
  }
};
if (true) {
  module3.exports = __cjs_default__(typeof react_reconciler_constants_production_min_exports !== "undefined" ? react_reconciler_constants_production_min_exports : {});
} else {
  module3.exports = __cjs_default__(typeof react_reconciler_constants_development_exports !== "undefined" ? react_reconciler_constants_development_exports : {});
}
var constants_default = module3.exports;

// ../../node_modules/.pnpm/zustand@3.7.2_react@18.3.1/node_modules/zustand/esm/index.js
import { useReducer, useRef, useDebugValue, useEffect, useLayoutEffect } from "react";
function createStore(createState) {
  let state;
  const listeners = /* @__PURE__ */ new Set();
  const setState = (partial, replace) => {
    const nextState = typeof partial === "function" ? partial(state) : partial;
    if (nextState !== state) {
      const previousState = state;
      state = replace ? nextState : Object.assign({}, state, nextState);
      listeners.forEach((listener) => listener(state, previousState));
    }
  };
  const getState = () => state;
  const subscribeWithSelector = (listener, selector = getState, equalityFn = Object.is) => {
    console.warn("[DEPRECATED] Please use `subscribeWithSelector` middleware");
    let currentSlice = selector(state);
    function listenerToAdd() {
      const nextSlice = selector(state);
      if (!equalityFn(currentSlice, nextSlice)) {
        const previousSlice = currentSlice;
        listener(currentSlice = nextSlice, previousSlice);
      }
    }
    listeners.add(listenerToAdd);
    return () => listeners.delete(listenerToAdd);
  };
  const subscribe = (listener, selector, equalityFn) => {
    if (selector || equalityFn) {
      return subscribeWithSelector(listener, selector, equalityFn);
    }
    listeners.add(listener);
    return () => listeners.delete(listener);
  };
  const destroy = () => listeners.clear();
  const api = { setState, getState, subscribe, destroy };
  state = createState(setState, getState, api);
  return api;
}
var isSSR = typeof window === "undefined" || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent);
var useIsomorphicLayoutEffect = isSSR ? useEffect : useLayoutEffect;
function create(createState) {
  const api = typeof createState === "function" ? createStore(createState) : createState;
  const useStore2 = (selector = api.getState, equalityFn = Object.is) => {
    const [, forceUpdate] = useReducer((c) => c + 1, 0);
    const state = api.getState();
    const stateRef = useRef(state);
    const selectorRef = useRef(selector);
    const equalityFnRef = useRef(equalityFn);
    const erroredRef = useRef(false);
    const currentSliceRef = useRef();
    if (currentSliceRef.current === void 0) {
      currentSliceRef.current = selector(state);
    }
    let newStateSlice;
    let hasNewStateSlice = false;
    if (stateRef.current !== state || selectorRef.current !== selector || equalityFnRef.current !== equalityFn || erroredRef.current) {
      newStateSlice = selector(state);
      hasNewStateSlice = !equalityFn(currentSliceRef.current, newStateSlice);
    }
    useIsomorphicLayoutEffect(() => {
      if (hasNewStateSlice) {
        currentSliceRef.current = newStateSlice;
      }
      stateRef.current = state;
      selectorRef.current = selector;
      equalityFnRef.current = equalityFn;
      erroredRef.current = false;
    });
    const stateBeforeSubscriptionRef = useRef(state);
    useIsomorphicLayoutEffect(() => {
      const listener = () => {
        try {
          const nextState = api.getState();
          const nextStateSlice = selectorRef.current(nextState);
          if (!equalityFnRef.current(currentSliceRef.current, nextStateSlice)) {
            stateRef.current = nextState;
            currentSliceRef.current = nextStateSlice;
            forceUpdate();
          }
        } catch (error2) {
          erroredRef.current = true;
          forceUpdate();
        }
      };
      const unsubscribe = api.subscribe(listener);
      if (api.getState() !== stateBeforeSubscriptionRef.current) {
        listener();
      }
      return unsubscribe;
    }, []);
    const sliceToReturn = hasNewStateSlice ? newStateSlice : currentSliceRef.current;
    useDebugValue(sliceToReturn);
    return sliceToReturn;
  };
  Object.assign(useStore2, api);
  useStore2[Symbol.iterator] = function() {
    console.warn("[useStore, api] = create() is deprecated and will be removed in v4");
    const items = [useStore2, api];
    return {
      next() {
        const done = items.length <= 0;
        return { value: items.shift(), done };
      }
    };
  };
  return useStore2;
}

// ../../node_modules/.pnpm/suspend-react@0.1.3_react@18.3.1/node_modules/suspend-react/index.js
var isPromise = (promise) => typeof promise === "object" && typeof promise.then === "function";
var globalCache = [];
function shallowEqualArrays(arrA, arrB, equal = (a, b) => a === b) {
  if (arrA === arrB) return true;
  if (!arrA || !arrB) return false;
  const len = arrA.length;
  if (arrB.length !== len) return false;
  for (let i2 = 0; i2 < len; i2++) if (!equal(arrA[i2], arrB[i2])) return false;
  return true;
}
function query(fn, keys = null, preload2 = false, config = {}) {
  if (keys === null) keys = [fn];
  for (const entry2 of globalCache) {
    if (shallowEqualArrays(keys, entry2.keys, entry2.equal)) {
      if (preload2) return void 0;
      if (Object.prototype.hasOwnProperty.call(entry2, "error")) throw entry2.error;
      if (Object.prototype.hasOwnProperty.call(entry2, "response")) {
        if (config.lifespan && config.lifespan > 0) {
          if (entry2.timeout) clearTimeout(entry2.timeout);
          entry2.timeout = setTimeout(entry2.remove, config.lifespan);
        }
        return entry2.response;
      }
      if (!preload2) throw entry2.promise;
    }
  }
  const entry = {
    keys,
    equal: config.equal,
    remove: () => {
      const index = globalCache.indexOf(entry);
      if (index !== -1) globalCache.splice(index, 1);
    },
    promise: (
      // Execute the promise
      (isPromise(fn) ? fn : fn(...keys)).then((response) => {
        entry.response = response;
        if (config.lifespan && config.lifespan > 0) {
          entry.timeout = setTimeout(entry.remove, config.lifespan);
        }
      }).catch((error2) => entry.error = error2)
    )
  };
  globalCache.push(entry);
  if (!preload2) throw entry.promise;
  return void 0;
}
var suspend = (fn, keys, config) => query(fn, keys, false, config);
var preload = (fn, keys, config) => void query(fn, keys, true, config);
var clear = (keys) => {
  if (keys === void 0 || keys.length === 0) globalCache.splice(0, globalCache.length);
  else {
    const entry = globalCache.find((entry2) => shallowEqualArrays(keys, entry2.keys, entry2.equal));
    if (entry) entry.remove();
  }
};

// ../../node_modules/.pnpm/@react-three+fiber@8.18.0_@types+react@18.2.73_react-dom@18.3.1_react@18.3.1__react@18.3.1_three@0.169.0/node_modules/@react-three/fiber/dist/events-776716bd.esm.js
import { jsx, Fragment } from "react/jsx-runtime";

// rr-prod:/home/runner/work/shadergradient/shadergradient/main/node_modules/.pnpm/react-reconciler@0.27.0_react@18.3.1/node_modules/react-reconciler/cjs/react-reconciler.production.min.js
import * as __react from "react";

// sched-prod:/home/runner/work/shadergradient/shadergradient/main/node_modules/.pnpm/scheduler@0.20.2/node_modules/scheduler/cjs/scheduler.production.min.js
var scheduler_production_min_exports = {};
__export(scheduler_production_min_exports, {
  default: () => scheduler_production_min_default,
  unstable_IdlePriority: () => unstable_IdlePriority,
  unstable_ImmediatePriority: () => unstable_ImmediatePriority,
  unstable_LowPriority: () => unstable_LowPriority,
  unstable_NormalPriority: () => unstable_NormalPriority,
  unstable_Profiling: () => unstable_Profiling,
  unstable_UserBlockingPriority: () => unstable_UserBlockingPriority,
  unstable_cancelCallback: () => unstable_cancelCallback,
  unstable_continueExecution: () => unstable_continueExecution,
  unstable_forceFrameRate: () => unstable_forceFrameRate,
  unstable_getCurrentPriorityLevel: () => unstable_getCurrentPriorityLevel,
  unstable_getFirstCallbackNode: () => unstable_getFirstCallbackNode,
  unstable_next: () => unstable_next,
  unstable_now: () => unstable_now,
  unstable_pauseExecution: () => unstable_pauseExecution,
  unstable_requestPaint: () => unstable_requestPaint,
  unstable_runWithPriority: () => unstable_runWithPriority,
  unstable_scheduleCallback: () => unstable_scheduleCallback,
  unstable_shouldYield: () => unstable_shouldYield,
  unstable_wrapCallback: () => unstable_wrapCallback
});
var module4 = { exports: {} };
var exports4 = module4.exports;
var f;
var g;
var h;
var k;
if ("object" === typeof performance && "function" === typeof performance.now) {
  l = performance;
  exports4.unstable_now = function() {
    return l.now();
  };
} else {
  p2 = Date, q = p2.now();
  exports4.unstable_now = function() {
    return p2.now() - q;
  };
}
var l;
var p2;
var q;
if ("undefined" === typeof window || "function" !== typeof MessageChannel) {
  t = null, u2 = null, w = function() {
    if (null !== t) try {
      var a = exports4.unstable_now();
      t(true, a);
      t = null;
    } catch (b) {
      throw setTimeout(w, 0), b;
    }
  };
  f = function(a) {
    null !== t ? setTimeout(f, 0, a) : (t = a, setTimeout(w, 0));
  };
  g = function(a, b) {
    u2 = setTimeout(a, b);
  };
  h = function() {
    clearTimeout(u2);
  };
  exports4.unstable_shouldYield = function() {
    return false;
  };
  k = exports4.unstable_forceFrameRate = function() {
  };
} else {
  x = window.setTimeout, y = window.clearTimeout;
  if ("undefined" !== typeof console) {
    z = window.cancelAnimationFrame;
    "function" !== typeof window.requestAnimationFrame && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");
    "function" !== typeof z && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");
  }
  A = false, B = null, C = -1, D2 = 5, E2 = 0;
  exports4.unstable_shouldYield = function() {
    return exports4.unstable_now() >= E2;
  };
  k = function() {
  };
  exports4.unstable_forceFrameRate = function(a) {
    0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : D2 = 0 < a ? Math.floor(1e3 / a) : 5;
  };
  F = new MessageChannel(), G = F.port2;
  F.port1.onmessage = function() {
    if (null !== B) {
      var a = exports4.unstable_now();
      E2 = a + D2;
      try {
        B(true, a) ? G.postMessage(null) : (A = false, B = null);
      } catch (b) {
        throw G.postMessage(null), b;
      }
    } else A = false;
  };
  f = function(a) {
    B = a;
    A || (A = true, G.postMessage(null));
  };
  g = function(a, b) {
    C = x(function() {
      a(exports4.unstable_now());
    }, b);
  };
  h = function() {
    y(C);
    C = -1;
  };
}
var t;
var u2;
var w;
var x;
var y;
var z;
var A;
var B;
var C;
var D2;
var E2;
var F;
var G;
function H(a, b) {
  var c = a.length;
  a.push(b);
  a: for (; ; ) {
    var d = c - 1 >>> 1, e = a[d];
    if (void 0 !== e && 0 < I(e, b)) a[d] = b, a[c] = e, c = d;
    else break a;
  }
}
function J(a) {
  a = a[0];
  return void 0 === a ? null : a;
}
function K(a) {
  var b = a[0];
  if (void 0 !== b) {
    var c = a.pop();
    if (c !== b) {
      a[0] = c;
      a: for (var d = 0, e = a.length; d < e; ) {
        var m = 2 * (d + 1) - 1, n = a[m], v = m + 1, r = a[v];
        if (void 0 !== n && 0 > I(n, c)) void 0 !== r && 0 > I(r, n) ? (a[d] = r, a[v] = c, d = v) : (a[d] = n, a[m] = c, d = m);
        else if (void 0 !== r && 0 > I(r, c)) a[d] = r, a[v] = c, d = v;
        else break a;
      }
    }
    return b;
  }
  return null;
}
function I(a, b) {
  var c = a.sortIndex - b.sortIndex;
  return 0 !== c ? c : a.id - b.id;
}
var L = [];
var M = [];
var N = 1;
var O = null;
var P = 3;
var Q = false;
var R = false;
var S = false;
function T(a) {
  for (var b = J(M); null !== b; ) {
    if (null === b.callback) K(M);
    else if (b.startTime <= a) K(M), b.sortIndex = b.expirationTime, H(L, b);
    else break;
    b = J(M);
  }
}
function U(a) {
  S = false;
  T(a);
  if (!R) if (null !== J(L)) R = true, f(V);
  else {
    var b = J(M);
    null !== b && g(U, b.startTime - a);
  }
}
function V(a, b) {
  R = false;
  S && (S = false, h());
  Q = true;
  var c = P;
  try {
    T(b);
    for (O = J(L); null !== O && (!(O.expirationTime > b) || a && !exports4.unstable_shouldYield()); ) {
      var d = O.callback;
      if ("function" === typeof d) {
        O.callback = null;
        P = O.priorityLevel;
        var e = d(O.expirationTime <= b);
        b = exports4.unstable_now();
        "function" === typeof e ? O.callback = e : O === J(L) && K(L);
        T(b);
      } else K(L);
      O = J(L);
    }
    if (null !== O) var m = true;
    else {
      var n = J(M);
      null !== n && g(U, n.startTime - b);
      m = false;
    }
    return m;
  } finally {
    O = null, P = c, Q = false;
  }
}
var W = k;
exports4.unstable_IdlePriority = 5;
exports4.unstable_ImmediatePriority = 1;
exports4.unstable_LowPriority = 4;
exports4.unstable_NormalPriority = 3;
exports4.unstable_Profiling = null;
exports4.unstable_UserBlockingPriority = 2;
exports4.unstable_cancelCallback = function(a) {
  a.callback = null;
};
exports4.unstable_continueExecution = function() {
  R || Q || (R = true, f(V));
};
exports4.unstable_getCurrentPriorityLevel = function() {
  return P;
};
exports4.unstable_getFirstCallbackNode = function() {
  return J(L);
};
exports4.unstable_next = function(a) {
  switch (P) {
    case 1:
    case 2:
    case 3:
      var b = 3;
      break;
    default:
      b = P;
  }
  var c = P;
  P = b;
  try {
    return a();
  } finally {
    P = c;
  }
};
exports4.unstable_pauseExecution = function() {
};
exports4.unstable_requestPaint = W;
exports4.unstable_runWithPriority = function(a, b) {
  switch (a) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      break;
    default:
      a = 3;
  }
  var c = P;
  P = a;
  try {
    return b();
  } finally {
    P = c;
  }
};
exports4.unstable_scheduleCallback = function(a, b, c) {
  var d = exports4.unstable_now();
  "object" === typeof c && null !== c ? (c = c.delay, c = "number" === typeof c && 0 < c ? d + c : d) : c = d;
  switch (a) {
    case 1:
      var e = -1;
      break;
    case 2:
      e = 250;
      break;
    case 5:
      e = 1073741823;
      break;
    case 4:
      e = 1e4;
      break;
    default:
      e = 5e3;
  }
  e = c + e;
  a = { id: N++, callback: b, priorityLevel: a, startTime: c, expirationTime: e, sortIndex: -1 };
  c > d ? (a.sortIndex = c, H(M, a), null === J(L) && a === J(M) && (S ? h() : S = true, g(U, c - d))) : (a.sortIndex = e, H(L, a), R || Q || (R = true, f(V)));
  return a;
};
exports4.unstable_wrapCallback = function(a) {
  var b = P;
  return function() {
    var c = P;
    P = b;
    try {
      return a.apply(this, arguments);
    } finally {
      P = c;
    }
  };
};
var scheduler_production_min_default = module4.exports;
var unstable_now = module4.exports.unstable_now;
var unstable_shouldYield = module4.exports.unstable_shouldYield;
var unstable_forceFrameRate = module4.exports.unstable_forceFrameRate;
var unstable_IdlePriority = module4.exports.unstable_IdlePriority;
var unstable_ImmediatePriority = module4.exports.unstable_ImmediatePriority;
var unstable_LowPriority = module4.exports.unstable_LowPriority;
var unstable_NormalPriority = module4.exports.unstable_NormalPriority;
var unstable_Profiling = module4.exports.unstable_Profiling;
var unstable_UserBlockingPriority = module4.exports.unstable_UserBlockingPriority;
var unstable_cancelCallback = module4.exports.unstable_cancelCallback;
var unstable_continueExecution = module4.exports.unstable_continueExecution;
var unstable_getCurrentPriorityLevel = module4.exports.unstable_getCurrentPriorityLevel;
var unstable_getFirstCallbackNode = module4.exports.unstable_getFirstCallbackNode;
var unstable_next = module4.exports.unstable_next;
var unstable_pauseExecution = module4.exports.unstable_pauseExecution;
var unstable_requestPaint = module4.exports.unstable_requestPaint;
var unstable_runWithPriority = module4.exports.unstable_runWithPriority;
var unstable_scheduleCallback = module4.exports.unstable_scheduleCallback;
var unstable_wrapCallback = module4.exports.unstable_wrapCallback;

// rr-prod:/home/runner/work/shadergradient/shadergradient/main/node_modules/.pnpm/react-reconciler@0.27.0_react@18.3.1/node_modules/react-reconciler/cjs/react-reconciler.production.min.js
var require2 = (id) => id === "react" ? __react.default || __react : id === "scheduler" ? scheduler_production_min_default || scheduler_production_min_exports : (() => {
  throw new Error("react-reconciler unexpected require: " + id);
})();
var module5 = { exports: {} };
var exports5 = module5.exports;
module5.exports = function $$$reconciler($$$hostConfig) {
  var exports6 = {};
  "use strict";
  var aa = require2("react"), ba = require2("scheduler"), ca = Object.assign;
  function n(a) {
    for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++) b += "&args[]=" + encodeURIComponent(arguments[c]);
    return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var ea = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, fa = Symbol.for("react.element"), ha = Symbol.for("react.portal"), ia = Symbol.for("react.fragment"), ja = Symbol.for("react.strict_mode"), ka = Symbol.for("react.profiler"), la = Symbol.for("react.provider"), ma = Symbol.for("react.context"), na = Symbol.for("react.forward_ref"), oa = Symbol.for("react.suspense"), pa = Symbol.for("react.suspense_list"), qa = Symbol.for("react.memo"), ra = Symbol.for("react.lazy");
  Symbol.for("react.scope");
  Symbol.for("react.debug_trace_mode");
  var sa = Symbol.for("react.offscreen");
  Symbol.for("react.legacy_hidden");
  Symbol.for("react.cache");
  Symbol.for("react.tracing_marker");
  var ta = Symbol.iterator;
  function ua(a) {
    if (null === a || "object" !== typeof a) return null;
    a = ta && a[ta] || a["@@iterator"];
    return "function" === typeof a ? a : null;
  }
  function va(a) {
    if (null == a) return null;
    if ("function" === typeof a) return a.displayName || a.name || null;
    if ("string" === typeof a) return a;
    switch (a) {
      case ia:
        return "Fragment";
      case ha:
        return "Portal";
      case ka:
        return "Profiler";
      case ja:
        return "StrictMode";
      case oa:
        return "Suspense";
      case pa:
        return "SuspenseList";
    }
    if ("object" === typeof a) switch (a.$$typeof) {
      case ma:
        return (a.displayName || "Context") + ".Consumer";
      case la:
        return (a._context.displayName || "Context") + ".Provider";
      case na:
        var b = a.render;
        a = a.displayName;
        a || (a = b.displayName || b.name || "", a = "" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
        return a;
      case qa:
        return b = a.displayName || null, null !== b ? b : va(a.type) || "Memo";
      case ra:
        b = a._payload;
        a = a._init;
        try {
          return va(a(b));
        } catch (c) {
        }
    }
    return null;
  }
  function xa(a) {
    var b = a.type;
    switch (a.tag) {
      case 24:
        return "Cache";
      case 9:
        return (b.displayName || "Context") + ".Consumer";
      case 10:
        return (b._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return a = b.render, a = a.displayName || a.name || "", b.displayName || ("" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return b;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return va(b);
      case 8:
        return b === ja ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if ("function" === typeof b) return b.displayName || b.name || null;
        if ("string" === typeof b) return b;
    }
    return null;
  }
  function ya(a) {
    var b = a, c = a;
    if (a.alternate) for (; b.return; ) b = b.return;
    else {
      a = b;
      do
        b = a, 0 !== (b.flags & 4098) && (c = b.return), a = b.return;
      while (a);
    }
    return 3 === b.tag ? c : null;
  }
  function za(a) {
    if (ya(a) !== a) throw Error(n(188));
  }
  function Aa(a) {
    var b = a.alternate;
    if (!b) {
      b = ya(a);
      if (null === b) throw Error(n(188));
      return b !== a ? null : a;
    }
    for (var c = a, d = b; ; ) {
      var e = c.return;
      if (null === e) break;
      var f2 = e.alternate;
      if (null === f2) {
        d = e.return;
        if (null !== d) {
          c = d;
          continue;
        }
        break;
      }
      if (e.child === f2.child) {
        for (f2 = e.child; f2; ) {
          if (f2 === c) return za(e), a;
          if (f2 === d) return za(e), b;
          f2 = f2.sibling;
        }
        throw Error(n(188));
      }
      if (c.return !== d.return) c = e, d = f2;
      else {
        for (var g3 = false, h2 = e.child; h2; ) {
          if (h2 === c) {
            g3 = true;
            c = e;
            d = f2;
            break;
          }
          if (h2 === d) {
            g3 = true;
            d = e;
            c = f2;
            break;
          }
          h2 = h2.sibling;
        }
        if (!g3) {
          for (h2 = f2.child; h2; ) {
            if (h2 === c) {
              g3 = true;
              c = f2;
              d = e;
              break;
            }
            if (h2 === d) {
              g3 = true;
              d = f2;
              c = e;
              break;
            }
            h2 = h2.sibling;
          }
          if (!g3) throw Error(n(189));
        }
      }
      if (c.alternate !== d) throw Error(n(190));
    }
    if (3 !== c.tag) throw Error(n(188));
    return c.stateNode.current === c ? a : b;
  }
  function Ba(a) {
    a = Aa(a);
    return null !== a ? Ca(a) : null;
  }
  function Ca(a) {
    if (5 === a.tag || 6 === a.tag) return a;
    for (a = a.child; null !== a; ) {
      var b = Ca(a);
      if (null !== b) return b;
      a = a.sibling;
    }
    return null;
  }
  function Da(a) {
    if (5 === a.tag || 6 === a.tag) return a;
    for (a = a.child; null !== a; ) {
      if (4 !== a.tag) {
        var b = Da(a);
        if (null !== b) return b;
      }
      a = a.sibling;
    }
    return null;
  }
  var Ea = Array.isArray, Fa = $$$hostConfig.getPublicInstance, Ga = $$$hostConfig.getRootHostContext, Ha = $$$hostConfig.getChildHostContext, Ia = $$$hostConfig.prepareForCommit, Ja = $$$hostConfig.resetAfterCommit, Ka = $$$hostConfig.createInstance, La = $$$hostConfig.appendInitialChild, Ma = $$$hostConfig.finalizeInitialChildren, Na = $$$hostConfig.prepareUpdate, Oa = $$$hostConfig.shouldSetTextContent, Pa = $$$hostConfig.createTextInstance, Qa = $$$hostConfig.scheduleTimeout, Ra = $$$hostConfig.cancelTimeout, Sa = $$$hostConfig.noTimeout, Ta = $$$hostConfig.isPrimaryRenderer, Ua = $$$hostConfig.supportsMutation, Va = $$$hostConfig.supportsPersistence, p2 = $$$hostConfig.supportsHydration, Wa = $$$hostConfig.getInstanceFromNode, Xa = $$$hostConfig.preparePortalMount, Ya = $$$hostConfig.getCurrentEventPriority, Za = $$$hostConfig.detachDeletedInstance, $a = $$$hostConfig.supportsMicrotasks, ab = $$$hostConfig.scheduleMicrotask, bb = $$$hostConfig.supportsTestSelectors, cb = $$$hostConfig.findFiberRoot, db = $$$hostConfig.getBoundingRect, eb = $$$hostConfig.getTextContent, fb = $$$hostConfig.isHiddenSubtree, gb = $$$hostConfig.matchAccessibilityRole, hb = $$$hostConfig.setFocusIfFocusable, ib = $$$hostConfig.setupIntersectionObserver, jb = $$$hostConfig.appendChild, kb = $$$hostConfig.appendChildToContainer, lb = $$$hostConfig.commitTextUpdate, mb = $$$hostConfig.commitMount, nb = $$$hostConfig.commitUpdate, ob = $$$hostConfig.insertBefore, pb = $$$hostConfig.insertInContainerBefore, qb = $$$hostConfig.removeChild, rb = $$$hostConfig.removeChildFromContainer, sb = $$$hostConfig.resetTextContent, tb = $$$hostConfig.hideInstance, ub = $$$hostConfig.hideTextInstance, vb = $$$hostConfig.unhideInstance, wb = $$$hostConfig.unhideTextInstance, xb = $$$hostConfig.clearContainer, yb = $$$hostConfig.cloneInstance, zb = $$$hostConfig.createContainerChildSet, Ab = $$$hostConfig.appendChildToContainerChildSet, Bb = $$$hostConfig.finalizeContainerChildren, Cb = $$$hostConfig.replaceContainerChildren, Db = $$$hostConfig.cloneHiddenInstance, Eb = $$$hostConfig.cloneHiddenTextInstance, Fb = $$$hostConfig.canHydrateInstance, Gb = $$$hostConfig.canHydrateTextInstance, Hb = $$$hostConfig.canHydrateSuspenseInstance, Ib = $$$hostConfig.isSuspenseInstancePending, Jb = $$$hostConfig.isSuspenseInstanceFallback, Kb = $$$hostConfig.registerSuspenseInstanceRetry, Lb = $$$hostConfig.getNextHydratableSibling, Mb = $$$hostConfig.getFirstHydratableChild, Nb = $$$hostConfig.getFirstHydratableChildWithinContainer, Ob = $$$hostConfig.getFirstHydratableChildWithinSuspenseInstance, Pb = $$$hostConfig.hydrateInstance, Qb = $$$hostConfig.hydrateTextInstance, Rb = $$$hostConfig.hydrateSuspenseInstance, Sb = $$$hostConfig.getNextHydratableInstanceAfterSuspenseInstance, Tb = $$$hostConfig.commitHydratedContainer, Ub = $$$hostConfig.commitHydratedSuspenseInstance, Vb = $$$hostConfig.clearSuspenseBoundary, Wb = $$$hostConfig.clearSuspenseBoundaryFromContainer, Xb = $$$hostConfig.shouldDeleteUnhydratedTailInstances, Yb = $$$hostConfig.didNotMatchHydratedContainerTextInstance, Zb = $$$hostConfig.didNotMatchHydratedTextInstance, $b;
  function ac(a) {
    if (void 0 === $b) try {
      throw Error();
    } catch (c) {
      var b = c.stack.trim().match(/\n( *(at )?)/);
      $b = b && b[1] || "";
    }
    return "\n" + $b + a;
  }
  var bc = false;
  function cc(a, b) {
    if (!a || bc) return "";
    bc = true;
    var c = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (b) if (b = function() {
        throw Error();
      }, Object.defineProperty(b.prototype, "props", { set: function() {
        throw Error();
      } }), "object" === typeof Reflect && Reflect.construct) {
        try {
          Reflect.construct(b, []);
        } catch (l) {
          var d = l;
        }
        Reflect.construct(a, [], b);
      } else {
        try {
          b.call();
        } catch (l) {
          d = l;
        }
        a.call(b.prototype);
      }
      else {
        try {
          throw Error();
        } catch (l) {
          d = l;
        }
        a();
      }
    } catch (l) {
      if (l && d && "string" === typeof l.stack) {
        for (var e = l.stack.split("\n"), f2 = d.stack.split("\n"), g3 = e.length - 1, h2 = f2.length - 1; 1 <= g3 && 0 <= h2 && e[g3] !== f2[h2]; ) h2--;
        for (; 1 <= g3 && 0 <= h2; g3--, h2--) if (e[g3] !== f2[h2]) {
          if (1 !== g3 || 1 !== h2) {
            do
              if (g3--, h2--, 0 > h2 || e[g3] !== f2[h2]) {
                var k3 = "\n" + e[g3].replace(" at new ", " at ");
                a.displayName && k3.includes("<anonymous>") && (k3 = k3.replace("<anonymous>", a.displayName));
                return k3;
              }
            while (1 <= g3 && 0 <= h2);
          }
          break;
        }
      }
    } finally {
      bc = false, Error.prepareStackTrace = c;
    }
    return (a = a ? a.displayName || a.name : "") ? ac(a) : "";
  }
  var dc = Object.prototype.hasOwnProperty, ec = [], fc = -1;
  function gc(a) {
    return { current: a };
  }
  function x(a) {
    0 > fc || (a.current = ec[fc], ec[fc] = null, fc--);
  }
  function y(a, b) {
    fc++;
    ec[fc] = a.current;
    a.current = b;
  }
  var hc = {}, A = gc(hc), B = gc(false), ic = hc;
  function jc(a, b) {
    var c = a.type.contextTypes;
    if (!c) return hc;
    var d = a.stateNode;
    if (d && d.__reactInternalMemoizedUnmaskedChildContext === b) return d.__reactInternalMemoizedMaskedChildContext;
    var e = {}, f2;
    for (f2 in c) e[f2] = b[f2];
    d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b, a.__reactInternalMemoizedMaskedChildContext = e);
    return e;
  }
  function C(a) {
    a = a.childContextTypes;
    return null !== a && void 0 !== a;
  }
  function kc() {
    x(B);
    x(A);
  }
  function lc(a, b, c) {
    if (A.current !== hc) throw Error(n(168));
    y(A, b);
    y(B, c);
  }
  function mc(a, b, c) {
    var d = a.stateNode;
    b = b.childContextTypes;
    if ("function" !== typeof d.getChildContext) return c;
    d = d.getChildContext();
    for (var e in d) if (!(e in b)) throw Error(n(108, xa(a) || "Unknown", e));
    return ca({}, c, d);
  }
  function nc(a) {
    a = (a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext || hc;
    ic = A.current;
    y(A, a);
    y(B, B.current);
    return true;
  }
  function oc(a, b, c) {
    var d = a.stateNode;
    if (!d) throw Error(n(169));
    c ? (a = mc(a, b, ic), d.__reactInternalMemoizedMergedChildContext = a, x(B), x(A), y(A, a)) : x(B);
    y(B, c);
  }
  var qc = Math.clz32 ? Math.clz32 : pc, rc = Math.log, sc = Math.LN2;
  function pc(a) {
    a >>>= 0;
    return 0 === a ? 32 : 31 - (rc(a) / sc | 0) | 0;
  }
  var tc = 64, uc = 4194304;
  function vc(a) {
    switch (a & -a) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return a & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return a & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return a;
    }
  }
  function wc(a, b) {
    var c = a.pendingLanes;
    if (0 === c) return 0;
    var d = 0, e = a.suspendedLanes, f2 = a.pingedLanes, g3 = c & 268435455;
    if (0 !== g3) {
      var h2 = g3 & ~e;
      0 !== h2 ? d = vc(h2) : (f2 &= g3, 0 !== f2 && (d = vc(f2)));
    } else g3 = c & ~e, 0 !== g3 ? d = vc(g3) : 0 !== f2 && (d = vc(f2));
    if (0 === d) return 0;
    if (0 !== b && b !== d && 0 === (b & e) && (e = d & -d, f2 = b & -b, e >= f2 || 16 === e && 0 !== (f2 & 4194240))) return b;
    0 !== (d & 4) && (d |= c & 16);
    b = a.entangledLanes;
    if (0 !== b) for (a = a.entanglements, b &= d; 0 < b; ) c = 31 - qc(b), e = 1 << c, d |= a[c], b &= ~e;
    return d;
  }
  function xc(a, b) {
    switch (a) {
      case 1:
      case 2:
      case 4:
        return b + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return b + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function yc(a, b) {
    for (var c = a.suspendedLanes, d = a.pingedLanes, e = a.expirationTimes, f2 = a.pendingLanes; 0 < f2; ) {
      var g3 = 31 - qc(f2), h2 = 1 << g3, k3 = e[g3];
      if (-1 === k3) {
        if (0 === (h2 & c) || 0 !== (h2 & d)) e[g3] = xc(h2, b);
      } else k3 <= b && (a.expiredLanes |= h2);
      f2 &= ~h2;
    }
  }
  function zc(a) {
    a = a.pendingLanes & -1073741825;
    return 0 !== a ? a : a & 1073741824 ? 1073741824 : 0;
  }
  function Ac(a) {
    for (var b = [], c = 0; 31 > c; c++) b.push(a);
    return b;
  }
  function Bc(a, b, c) {
    a.pendingLanes |= b;
    536870912 !== b && (a.suspendedLanes = 0, a.pingedLanes = 0);
    a = a.eventTimes;
    b = 31 - qc(b);
    a[b] = c;
  }
  function Cc(a, b) {
    var c = a.pendingLanes & ~b;
    a.pendingLanes = b;
    a.suspendedLanes = 0;
    a.pingedLanes = 0;
    a.expiredLanes &= b;
    a.mutableReadLanes &= b;
    a.entangledLanes &= b;
    b = a.entanglements;
    var d = a.eventTimes;
    for (a = a.expirationTimes; 0 < c; ) {
      var e = 31 - qc(c), f2 = 1 << e;
      b[e] = 0;
      d[e] = -1;
      a[e] = -1;
      c &= ~f2;
    }
  }
  function Dc(a, b) {
    var c = a.entangledLanes |= b;
    for (a = a.entanglements; c; ) {
      var d = 31 - qc(c), e = 1 << d;
      e & b | a[d] & b && (a[d] |= b);
      c &= ~e;
    }
  }
  var D2 = 0;
  function Ec(a) {
    a &= -a;
    return 1 < a ? 4 < a ? 0 !== (a & 268435455) ? 16 : 536870912 : 4 : 1;
  }
  var Fc = ba.unstable_scheduleCallback, Gc = ba.unstable_cancelCallback, Hc = ba.unstable_shouldYield, Ic = ba.unstable_requestPaint, E2 = ba.unstable_now, Jc = ba.unstable_ImmediatePriority, Kc = ba.unstable_UserBlockingPriority, Lc = ba.unstable_NormalPriority, Mc = ba.unstable_IdlePriority, Nc = null, Oc = null;
  function Pc(a) {
    if (Oc && "function" === typeof Oc.onCommitFiberRoot) try {
      Oc.onCommitFiberRoot(Nc, a, void 0, 128 === (a.current.flags & 128));
    } catch (b) {
    }
  }
  function Qc(a, b) {
    return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
  }
  var Rc = "function" === typeof Object.is ? Object.is : Qc, Sc = null, Tc = false, Uc = false;
  function Vc(a) {
    null === Sc ? Sc = [a] : Sc.push(a);
  }
  function Wc(a) {
    Tc = true;
    Vc(a);
  }
  function Xc() {
    if (!Uc && null !== Sc) {
      Uc = true;
      var a = 0, b = D2;
      try {
        var c = Sc;
        for (D2 = 1; a < c.length; a++) {
          var d = c[a];
          do
            d = d(true);
          while (null !== d);
        }
        Sc = null;
        Tc = false;
      } catch (e) {
        throw null !== Sc && (Sc = Sc.slice(a + 1)), Fc(Jc, Xc), e;
      } finally {
        D2 = b, Uc = false;
      }
    }
    return null;
  }
  var Yc = ea.ReactCurrentBatchConfig;
  function Zc(a, b) {
    if (Rc(a, b)) return true;
    if ("object" !== typeof a || null === a || "object" !== typeof b || null === b) return false;
    var c = Object.keys(a), d = Object.keys(b);
    if (c.length !== d.length) return false;
    for (d = 0; d < c.length; d++) {
      var e = c[d];
      if (!dc.call(b, e) || !Rc(a[e], b[e])) return false;
    }
    return true;
  }
  function $c(a) {
    switch (a.tag) {
      case 5:
        return ac(a.type);
      case 16:
        return ac("Lazy");
      case 13:
        return ac("Suspense");
      case 19:
        return ac("SuspenseList");
      case 0:
      case 2:
      case 15:
        return a = cc(a.type, false), a;
      case 11:
        return a = cc(a.type.render, false), a;
      case 1:
        return a = cc(a.type, true), a;
      default:
        return "";
    }
  }
  function ad(a, b) {
    if (a && a.defaultProps) {
      b = ca({}, b);
      a = a.defaultProps;
      for (var c in a) void 0 === b[c] && (b[c] = a[c]);
      return b;
    }
    return b;
  }
  var bd = gc(null), cd = null, dd = null, ed = null;
  function fd() {
    ed = dd = cd = null;
  }
  function gd(a, b, c) {
    Ta ? (y(bd, b._currentValue), b._currentValue = c) : (y(bd, b._currentValue2), b._currentValue2 = c);
  }
  function hd(a) {
    var b = bd.current;
    x(bd);
    Ta ? a._currentValue = b : a._currentValue2 = b;
  }
  function id(a, b, c) {
    for (; null !== a; ) {
      var d = a.alternate;
      (a.childLanes & b) !== b ? (a.childLanes |= b, null !== d && (d.childLanes |= b)) : null !== d && (d.childLanes & b) !== b && (d.childLanes |= b);
      if (a === c) break;
      a = a.return;
    }
  }
  function jd(a, b) {
    cd = a;
    ed = dd = null;
    a = a.dependencies;
    null !== a && null !== a.firstContext && (0 !== (a.lanes & b) && (kd = true), a.firstContext = null);
  }
  function ld(a) {
    var b = Ta ? a._currentValue : a._currentValue2;
    if (ed !== a) if (a = { context: a, memoizedValue: b, next: null }, null === dd) {
      if (null === cd) throw Error(n(308));
      dd = a;
      cd.dependencies = { lanes: 0, firstContext: a };
    } else dd = dd.next = a;
    return b;
  }
  var md = null, nd = false;
  function od(a) {
    a.updateQueue = { baseState: a.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function pd(a, b) {
    a = a.updateQueue;
    b.updateQueue === a && (b.updateQueue = { baseState: a.baseState, firstBaseUpdate: a.firstBaseUpdate, lastBaseUpdate: a.lastBaseUpdate, shared: a.shared, effects: a.effects });
  }
  function qd(a, b) {
    return { eventTime: a, lane: b, tag: 0, payload: null, callback: null, next: null };
  }
  function rd(a, b) {
    var c = a.updateQueue;
    null !== c && (c = c.shared, null !== F && 0 !== (a.mode & 1) && 0 === (G & 2) ? (a = c.interleaved, null === a ? (b.next = b, null === md ? md = [c] : md.push(c)) : (b.next = a.next, a.next = b), c.interleaved = b) : (a = c.pending, null === a ? b.next = b : (b.next = a.next, a.next = b), c.pending = b));
  }
  function sd(a, b, c) {
    b = b.updateQueue;
    if (null !== b && (b = b.shared, 0 !== (c & 4194240))) {
      var d = b.lanes;
      d &= a.pendingLanes;
      c |= d;
      b.lanes = c;
      Dc(a, c);
    }
  }
  function td(a, b) {
    var c = a.updateQueue, d = a.alternate;
    if (null !== d && (d = d.updateQueue, c === d)) {
      var e = null, f2 = null;
      c = c.firstBaseUpdate;
      if (null !== c) {
        do {
          var g3 = { eventTime: c.eventTime, lane: c.lane, tag: c.tag, payload: c.payload, callback: c.callback, next: null };
          null === f2 ? e = f2 = g3 : f2 = f2.next = g3;
          c = c.next;
        } while (null !== c);
        null === f2 ? e = f2 = b : f2 = f2.next = b;
      } else e = f2 = b;
      c = { baseState: d.baseState, firstBaseUpdate: e, lastBaseUpdate: f2, shared: d.shared, effects: d.effects };
      a.updateQueue = c;
      return;
    }
    a = c.lastBaseUpdate;
    null === a ? c.firstBaseUpdate = b : a.next = b;
    c.lastBaseUpdate = b;
  }
  function ud(a, b, c, d) {
    var e = a.updateQueue;
    nd = false;
    var f2 = e.firstBaseUpdate, g3 = e.lastBaseUpdate, h2 = e.shared.pending;
    if (null !== h2) {
      e.shared.pending = null;
      var k3 = h2, l = k3.next;
      k3.next = null;
      null === g3 ? f2 = l : g3.next = l;
      g3 = k3;
      var m = a.alternate;
      null !== m && (m = m.updateQueue, h2 = m.lastBaseUpdate, h2 !== g3 && (null === h2 ? m.firstBaseUpdate = l : h2.next = l, m.lastBaseUpdate = k3));
    }
    if (null !== f2) {
      var v = e.baseState;
      g3 = 0;
      m = l = k3 = null;
      h2 = f2;
      do {
        var r = h2.lane, z = h2.eventTime;
        if ((d & r) === r) {
          null !== m && (m = m.next = {
            eventTime: z,
            lane: 0,
            tag: h2.tag,
            payload: h2.payload,
            callback: h2.callback,
            next: null
          });
          a: {
            var q = a, N2 = h2;
            r = b;
            z = c;
            switch (N2.tag) {
              case 1:
                q = N2.payload;
                if ("function" === typeof q) {
                  v = q.call(z, v, r);
                  break a;
                }
                v = q;
                break a;
              case 3:
                q.flags = q.flags & -65537 | 128;
              case 0:
                q = N2.payload;
                r = "function" === typeof q ? q.call(z, v, r) : q;
                if (null === r || void 0 === r) break a;
                v = ca({}, v, r);
                break a;
              case 2:
                nd = true;
            }
          }
          null !== h2.callback && 0 !== h2.lane && (a.flags |= 64, r = e.effects, null === r ? e.effects = [h2] : r.push(h2));
        } else z = { eventTime: z, lane: r, tag: h2.tag, payload: h2.payload, callback: h2.callback, next: null }, null === m ? (l = m = z, k3 = v) : m = m.next = z, g3 |= r;
        h2 = h2.next;
        if (null === h2) if (h2 = e.shared.pending, null === h2) break;
        else r = h2, h2 = r.next, r.next = null, e.lastBaseUpdate = r, e.shared.pending = null;
      } while (1);
      null === m && (k3 = v);
      e.baseState = k3;
      e.firstBaseUpdate = l;
      e.lastBaseUpdate = m;
      b = e.shared.interleaved;
      if (null !== b) {
        e = b;
        do
          g3 |= e.lane, e = e.next;
        while (e !== b);
      } else null === f2 && (e.shared.lanes = 0);
      vd |= g3;
      a.lanes = g3;
      a.memoizedState = v;
    }
  }
  function wd(a, b, c) {
    a = b.effects;
    b.effects = null;
    if (null !== a) for (b = 0; b < a.length; b++) {
      var d = a[b], e = d.callback;
      if (null !== e) {
        d.callback = null;
        d = c;
        if ("function" !== typeof e) throw Error(n(191, e));
        e.call(d);
      }
    }
  }
  var xd = new aa.Component().refs;
  function yd(a, b, c, d) {
    b = a.memoizedState;
    c = c(d, b);
    c = null === c || void 0 === c ? b : ca({}, b, c);
    a.memoizedState = c;
    0 === a.lanes && (a.updateQueue.baseState = c);
  }
  var Bd = { isMounted: function(a) {
    return (a = a._reactInternals) ? ya(a) === a : false;
  }, enqueueSetState: function(a, b, c) {
    a = a._reactInternals;
    var d = H2(), e = zd(a), f2 = qd(d, e);
    f2.payload = b;
    void 0 !== c && null !== c && (f2.callback = c);
    rd(a, f2);
    b = Ad(a, e, d);
    null !== b && sd(b, a, e);
  }, enqueueReplaceState: function(a, b, c) {
    a = a._reactInternals;
    var d = H2(), e = zd(a), f2 = qd(d, e);
    f2.tag = 1;
    f2.payload = b;
    void 0 !== c && null !== c && (f2.callback = c);
    rd(a, f2);
    b = Ad(a, e, d);
    null !== b && sd(b, a, e);
  }, enqueueForceUpdate: function(a, b) {
    a = a._reactInternals;
    var c = H2(), d = zd(a), e = qd(
      c,
      d
    );
    e.tag = 2;
    void 0 !== b && null !== b && (e.callback = b);
    rd(a, e);
    b = Ad(a, d, c);
    null !== b && sd(b, a, d);
  } };
  function Cd(a, b, c, d, e, f2, g3) {
    a = a.stateNode;
    return "function" === typeof a.shouldComponentUpdate ? a.shouldComponentUpdate(d, f2, g3) : b.prototype && b.prototype.isPureReactComponent ? !Zc(c, d) || !Zc(e, f2) : true;
  }
  function Dd(a, b, c) {
    var d = false, e = hc;
    var f2 = b.contextType;
    "object" === typeof f2 && null !== f2 ? f2 = ld(f2) : (e = C(b) ? ic : A.current, d = b.contextTypes, f2 = (d = null !== d && void 0 !== d) ? jc(a, e) : hc);
    b = new b(c, f2);
    a.memoizedState = null !== b.state && void 0 !== b.state ? b.state : null;
    b.updater = Bd;
    a.stateNode = b;
    b._reactInternals = a;
    d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e, a.__reactInternalMemoizedMaskedChildContext = f2);
    return b;
  }
  function Ed(a, b, c, d) {
    a = b.state;
    "function" === typeof b.componentWillReceiveProps && b.componentWillReceiveProps(c, d);
    "function" === typeof b.UNSAFE_componentWillReceiveProps && b.UNSAFE_componentWillReceiveProps(c, d);
    b.state !== a && Bd.enqueueReplaceState(b, b.state, null);
  }
  function Fd(a, b, c, d) {
    var e = a.stateNode;
    e.props = c;
    e.state = a.memoizedState;
    e.refs = xd;
    od(a);
    var f2 = b.contextType;
    "object" === typeof f2 && null !== f2 ? e.context = ld(f2) : (f2 = C(b) ? ic : A.current, e.context = jc(a, f2));
    e.state = a.memoizedState;
    f2 = b.getDerivedStateFromProps;
    "function" === typeof f2 && (yd(a, b, f2, c), e.state = a.memoizedState);
    "function" === typeof b.getDerivedStateFromProps || "function" === typeof e.getSnapshotBeforeUpdate || "function" !== typeof e.UNSAFE_componentWillMount && "function" !== typeof e.componentWillMount || (b = e.state, "function" === typeof e.componentWillMount && e.componentWillMount(), "function" === typeof e.UNSAFE_componentWillMount && e.UNSAFE_componentWillMount(), b !== e.state && Bd.enqueueReplaceState(e, e.state, null), ud(a, c, e, d), e.state = a.memoizedState);
    "function" === typeof e.componentDidMount && (a.flags |= 4194308);
  }
  var Gd = [], Hd = 0, Id = null, Jd = 0, Kd = [], Ld = 0, Md = null, Nd = 1, Od = "";
  function Pd(a, b) {
    Gd[Hd++] = Jd;
    Gd[Hd++] = Id;
    Id = a;
    Jd = b;
  }
  function Qd(a, b, c) {
    Kd[Ld++] = Nd;
    Kd[Ld++] = Od;
    Kd[Ld++] = Md;
    Md = a;
    var d = Nd;
    a = Od;
    var e = 32 - qc(d) - 1;
    d &= ~(1 << e);
    c += 1;
    var f2 = 32 - qc(b) + e;
    if (30 < f2) {
      var g3 = e - e % 5;
      f2 = (d & (1 << g3) - 1).toString(32);
      d >>= g3;
      e -= g3;
      Nd = 1 << 32 - qc(b) + e | c << e | d;
      Od = f2 + a;
    } else Nd = 1 << f2 | c << e | d, Od = a;
  }
  function Rd(a) {
    null !== a.return && (Pd(a, 1), Qd(a, 1, 0));
  }
  function Sd(a) {
    for (; a === Id; ) Id = Gd[--Hd], Gd[Hd] = null, Jd = Gd[--Hd], Gd[Hd] = null;
    for (; a === Md; ) Md = Kd[--Ld], Kd[Ld] = null, Od = Kd[--Ld], Kd[Ld] = null, Nd = Kd[--Ld], Kd[Ld] = null;
  }
  var Td = null, Ud = null, I2 = false, Vd = false, Wd = null;
  function Xd(a, b) {
    var c = Yd(5, null, null, 0);
    c.elementType = "DELETED";
    c.stateNode = b;
    c.return = a;
    b = a.deletions;
    null === b ? (a.deletions = [c], a.flags |= 16) : b.push(c);
  }
  function Zd(a, b) {
    switch (a.tag) {
      case 5:
        return b = Fb(b, a.type, a.pendingProps), null !== b ? (a.stateNode = b, Td = a, Ud = Mb(b), true) : false;
      case 6:
        return b = Gb(b, a.pendingProps), null !== b ? (a.stateNode = b, Td = a, Ud = null, true) : false;
      case 13:
        b = Hb(b);
        if (null !== b) {
          var c = null !== Md ? { id: Nd, overflow: Od } : null;
          a.memoizedState = { dehydrated: b, treeContext: c, retryLane: 1073741824 };
          c = Yd(18, null, null, 0);
          c.stateNode = b;
          c.return = a;
          a.child = c;
          Td = a;
          Ud = null;
          return true;
        }
        return false;
      default:
        return false;
    }
  }
  function $d(a) {
    return 0 !== (a.mode & 1) && 0 === (a.flags & 128);
  }
  function ae(a) {
    if (I2) {
      var b = Ud;
      if (b) {
        var c = b;
        if (!Zd(a, b)) {
          if ($d(a)) throw Error(n(418));
          b = Lb(c);
          var d = Td;
          b && Zd(a, b) ? Xd(d, c) : (a.flags = a.flags & -4097 | 2, I2 = false, Td = a);
        }
      } else {
        if ($d(a)) throw Error(n(418));
        a.flags = a.flags & -4097 | 2;
        I2 = false;
        Td = a;
      }
    }
  }
  function be(a) {
    for (a = a.return; null !== a && 5 !== a.tag && 3 !== a.tag && 13 !== a.tag; ) a = a.return;
    Td = a;
  }
  function ce(a) {
    if (!p2 || a !== Td) return false;
    if (!I2) return be(a), I2 = true, false;
    if (3 !== a.tag && (5 !== a.tag || Xb(a.type) && !Oa(a.type, a.memoizedProps))) {
      var b = Ud;
      if (b) {
        if ($d(a)) {
          for (a = Ud; a; ) a = Lb(a);
          throw Error(n(418));
        }
        for (; b; ) Xd(a, b), b = Lb(b);
      }
    }
    be(a);
    if (13 === a.tag) {
      if (!p2) throw Error(n(316));
      a = a.memoizedState;
      a = null !== a ? a.dehydrated : null;
      if (!a) throw Error(n(317));
      Ud = Sb(a);
    } else Ud = Td ? Lb(a.stateNode) : null;
    return true;
  }
  function de() {
    p2 && (Ud = Td = null, Vd = I2 = false);
  }
  function ee(a) {
    null === Wd ? Wd = [a] : Wd.push(a);
  }
  function fe(a, b, c) {
    a = c.ref;
    if (null !== a && "function" !== typeof a && "object" !== typeof a) {
      if (c._owner) {
        c = c._owner;
        if (c) {
          if (1 !== c.tag) throw Error(n(309));
          var d = c.stateNode;
        }
        if (!d) throw Error(n(147, a));
        var e = d, f2 = "" + a;
        if (null !== b && null !== b.ref && "function" === typeof b.ref && b.ref._stringRef === f2) return b.ref;
        b = function(a2) {
          var b2 = e.refs;
          b2 === xd && (b2 = e.refs = {});
          null === a2 ? delete b2[f2] : b2[f2] = a2;
        };
        b._stringRef = f2;
        return b;
      }
      if ("string" !== typeof a) throw Error(n(284));
      if (!c._owner) throw Error(n(290, a));
    }
    return a;
  }
  function ge(a, b) {
    a = Object.prototype.toString.call(b);
    throw Error(n(31, "[object Object]" === a ? "object with keys {" + Object.keys(b).join(", ") + "}" : a));
  }
  function he(a) {
    var b = a._init;
    return b(a._payload);
  }
  function ie(a) {
    function b(b2, c2) {
      if (a) {
        var d2 = b2.deletions;
        null === d2 ? (b2.deletions = [c2], b2.flags |= 16) : d2.push(c2);
      }
    }
    function c(c2, d2) {
      if (!a) return null;
      for (; null !== d2; ) b(c2, d2), d2 = d2.sibling;
      return null;
    }
    function d(a2, b2) {
      for (a2 = /* @__PURE__ */ new Map(); null !== b2; ) null !== b2.key ? a2.set(b2.key, b2) : a2.set(b2.index, b2), b2 = b2.sibling;
      return a2;
    }
    function e(a2, b2) {
      a2 = je(a2, b2);
      a2.index = 0;
      a2.sibling = null;
      return a2;
    }
    function f2(b2, c2, d2) {
      b2.index = d2;
      if (!a) return b2.flags |= 1048576, c2;
      d2 = b2.alternate;
      if (null !== d2) return d2 = d2.index, d2 < c2 ? (b2.flags |= 2, c2) : d2;
      b2.flags |= 2;
      return c2;
    }
    function g3(b2) {
      a && null === b2.alternate && (b2.flags |= 2);
      return b2;
    }
    function h2(a2, b2, c2, d2) {
      if (null === b2 || 6 !== b2.tag) return b2 = ke(c2, a2.mode, d2), b2.return = a2, b2;
      b2 = e(b2, c2);
      b2.return = a2;
      return b2;
    }
    function k3(a2, b2, c2, d2) {
      var f3 = c2.type;
      if (f3 === ia) return m(a2, b2, c2.props.children, d2, c2.key);
      if (null !== b2 && (b2.elementType === f3 || "object" === typeof f3 && null !== f3 && f3.$$typeof === ra && he(f3) === b2.type)) return d2 = e(b2, c2.props), d2.ref = fe(a2, b2, c2), d2.return = a2, d2;
      d2 = le(c2.type, c2.key, c2.props, null, a2.mode, d2);
      d2.ref = fe(a2, b2, c2);
      d2.return = a2;
      return d2;
    }
    function l(a2, b2, c2, d2) {
      if (null === b2 || 4 !== b2.tag || b2.stateNode.containerInfo !== c2.containerInfo || b2.stateNode.implementation !== c2.implementation) return b2 = me(c2, a2.mode, d2), b2.return = a2, b2;
      b2 = e(b2, c2.children || []);
      b2.return = a2;
      return b2;
    }
    function m(a2, b2, c2, d2, f3) {
      if (null === b2 || 7 !== b2.tag) return b2 = ne(c2, a2.mode, d2, f3), b2.return = a2, b2;
      b2 = e(b2, c2);
      b2.return = a2;
      return b2;
    }
    function v(a2, b2, c2) {
      if ("string" === typeof b2 && "" !== b2 || "number" === typeof b2) return b2 = ke("" + b2, a2.mode, c2), b2.return = a2, b2;
      if ("object" === typeof b2 && null !== b2) {
        switch (b2.$$typeof) {
          case fa:
            return c2 = le(b2.type, b2.key, b2.props, null, a2.mode, c2), c2.ref = fe(a2, null, b2), c2.return = a2, c2;
          case ha:
            return b2 = me(b2, a2.mode, c2), b2.return = a2, b2;
          case ra:
            var d2 = b2._init;
            return v(a2, d2(b2._payload), c2);
        }
        if (Ea(b2) || ua(b2)) return b2 = ne(b2, a2.mode, c2, null), b2.return = a2, b2;
        ge(a2, b2);
      }
      return null;
    }
    function r(a2, b2, c2, d2) {
      var e2 = null !== b2 ? b2.key : null;
      if ("string" === typeof c2 && "" !== c2 || "number" === typeof c2) return null !== e2 ? null : h2(a2, b2, "" + c2, d2);
      if ("object" === typeof c2 && null !== c2) {
        switch (c2.$$typeof) {
          case fa:
            return c2.key === e2 ? k3(a2, b2, c2, d2) : null;
          case ha:
            return c2.key === e2 ? l(a2, b2, c2, d2) : null;
          case ra:
            return e2 = c2._init, r(
              a2,
              b2,
              e2(c2._payload),
              d2
            );
        }
        if (Ea(c2) || ua(c2)) return null !== e2 ? null : m(a2, b2, c2, d2, null);
        ge(a2, c2);
      }
      return null;
    }
    function z(a2, b2, c2, d2, e2) {
      if ("string" === typeof d2 && "" !== d2 || "number" === typeof d2) return a2 = a2.get(c2) || null, h2(b2, a2, "" + d2, e2);
      if ("object" === typeof d2 && null !== d2) {
        switch (d2.$$typeof) {
          case fa:
            return a2 = a2.get(null === d2.key ? c2 : d2.key) || null, k3(b2, a2, d2, e2);
          case ha:
            return a2 = a2.get(null === d2.key ? c2 : d2.key) || null, l(b2, a2, d2, e2);
          case ra:
            var f3 = d2._init;
            return z(a2, b2, c2, f3(d2._payload), e2);
        }
        if (Ea(d2) || ua(d2)) return a2 = a2.get(c2) || null, m(b2, a2, d2, e2, null);
        ge(b2, d2);
      }
      return null;
    }
    function q(e2, g4, h3, k4) {
      for (var l2 = null, m2 = null, w = g4, u2 = g4 = 0, t = null; null !== w && u2 < h3.length; u2++) {
        w.index > u2 ? (t = w, w = null) : t = w.sibling;
        var q2 = r(e2, w, h3[u2], k4);
        if (null === q2) {
          null === w && (w = t);
          break;
        }
        a && w && null === q2.alternate && b(e2, w);
        g4 = f2(q2, g4, u2);
        null === m2 ? l2 = q2 : m2.sibling = q2;
        m2 = q2;
        w = t;
      }
      if (u2 === h3.length) return c(e2, w), I2 && Pd(e2, u2), l2;
      if (null === w) {
        for (; u2 < h3.length; u2++) w = v(e2, h3[u2], k4), null !== w && (g4 = f2(w, g4, u2), null === m2 ? l2 = w : m2.sibling = w, m2 = w);
        I2 && Pd(e2, u2);
        return l2;
      }
      for (w = d(e2, w); u2 < h3.length; u2++) t = z(w, e2, u2, h3[u2], k4), null !== t && (a && null !== t.alternate && w.delete(null === t.key ? u2 : t.key), g4 = f2(t, g4, u2), null === m2 ? l2 = t : m2.sibling = t, m2 = t);
      a && w.forEach(function(a2) {
        return b(e2, a2);
      });
      I2 && Pd(e2, u2);
      return l2;
    }
    function N2(e2, g4, h3, k4) {
      var l2 = ua(h3);
      if ("function" !== typeof l2) throw Error(n(150));
      h3 = l2.call(h3);
      if (null == h3) throw Error(n(151));
      for (var w = l2 = null, m2 = g4, u2 = g4 = 0, q2 = null, t = h3.next(); null !== m2 && !t.done; u2++, t = h3.next()) {
        m2.index > u2 ? (q2 = m2, m2 = null) : q2 = m2.sibling;
        var V2 = r(e2, m2, t.value, k4);
        if (null === V2) {
          null === m2 && (m2 = q2);
          break;
        }
        a && m2 && null === V2.alternate && b(e2, m2);
        g4 = f2(V2, g4, u2);
        null === w ? l2 = V2 : w.sibling = V2;
        w = V2;
        m2 = q2;
      }
      if (t.done) return c(
        e2,
        m2
      ), I2 && Pd(e2, u2), l2;
      if (null === m2) {
        for (; !t.done; u2++, t = h3.next()) t = v(e2, t.value, k4), null !== t && (g4 = f2(t, g4, u2), null === w ? l2 = t : w.sibling = t, w = t);
        I2 && Pd(e2, u2);
        return l2;
      }
      for (m2 = d(e2, m2); !t.done; u2++, t = h3.next()) t = z(m2, e2, u2, t.value, k4), null !== t && (a && null !== t.alternate && m2.delete(null === t.key ? u2 : t.key), g4 = f2(t, g4, u2), null === w ? l2 = t : w.sibling = t, w = t);
      a && m2.forEach(function(a2) {
        return b(e2, a2);
      });
      I2 && Pd(e2, u2);
      return l2;
    }
    function da(a2, d2, f3, h3) {
      "object" === typeof f3 && null !== f3 && f3.type === ia && null === f3.key && (f3 = f3.props.children);
      if ("object" === typeof f3 && null !== f3) {
        switch (f3.$$typeof) {
          case fa:
            a: {
              for (var k4 = f3.key, l2 = d2; null !== l2; ) {
                if (l2.key === k4) {
                  k4 = f3.type;
                  if (k4 === ia) {
                    if (7 === l2.tag) {
                      c(a2, l2.sibling);
                      d2 = e(l2, f3.props.children);
                      d2.return = a2;
                      a2 = d2;
                      break a;
                    }
                  } else if (l2.elementType === k4 || "object" === typeof k4 && null !== k4 && k4.$$typeof === ra && he(k4) === l2.type) {
                    c(a2, l2.sibling);
                    d2 = e(l2, f3.props);
                    d2.ref = fe(a2, l2, f3);
                    d2.return = a2;
                    a2 = d2;
                    break a;
                  }
                  c(a2, l2);
                  break;
                } else b(a2, l2);
                l2 = l2.sibling;
              }
              f3.type === ia ? (d2 = ne(f3.props.children, a2.mode, h3, f3.key), d2.return = a2, a2 = d2) : (h3 = le(f3.type, f3.key, f3.props, null, a2.mode, h3), h3.ref = fe(a2, d2, f3), h3.return = a2, a2 = h3);
            }
            return g3(a2);
          case ha:
            a: {
              for (l2 = f3.key; null !== d2; ) {
                if (d2.key === l2) if (4 === d2.tag && d2.stateNode.containerInfo === f3.containerInfo && d2.stateNode.implementation === f3.implementation) {
                  c(a2, d2.sibling);
                  d2 = e(d2, f3.children || []);
                  d2.return = a2;
                  a2 = d2;
                  break a;
                } else {
                  c(a2, d2);
                  break;
                }
                else b(a2, d2);
                d2 = d2.sibling;
              }
              d2 = me(f3, a2.mode, h3);
              d2.return = a2;
              a2 = d2;
            }
            return g3(a2);
          case ra:
            return l2 = f3._init, da(a2, d2, l2(f3._payload), h3);
        }
        if (Ea(f3)) return q(a2, d2, f3, h3);
        if (ua(f3)) return N2(a2, d2, f3, h3);
        ge(a2, f3);
      }
      return "string" === typeof f3 && "" !== f3 || "number" === typeof f3 ? (f3 = "" + f3, null !== d2 && 6 === d2.tag ? (c(a2, d2.sibling), d2 = e(d2, f3), d2.return = a2, a2 = d2) : (c(a2, d2), d2 = ke(f3, a2.mode, h3), d2.return = a2, a2 = d2), g3(a2)) : c(a2, d2);
    }
    return da;
  }
  var oe = ie(true), pe = ie(false), qe = {}, re = gc(qe), se = gc(qe), te = gc(qe);
  function ue(a) {
    if (a === qe) throw Error(n(174));
    return a;
  }
  function ve(a, b) {
    y(te, b);
    y(se, a);
    y(re, qe);
    a = Ga(b);
    x(re);
    y(re, a);
  }
  function we() {
    x(re);
    x(se);
    x(te);
  }
  function xe(a) {
    var b = ue(te.current), c = ue(re.current);
    b = Ha(c, a.type, b);
    c !== b && (y(se, a), y(re, b));
  }
  function ye(a) {
    se.current === a && (x(re), x(se));
  }
  var J2 = gc(0);
  function ze(a) {
    for (var b = a; null !== b; ) {
      if (13 === b.tag) {
        var c = b.memoizedState;
        if (null !== c && (c = c.dehydrated, null === c || Ib(c) || Jb(c))) return b;
      } else if (19 === b.tag && void 0 !== b.memoizedProps.revealOrder) {
        if (0 !== (b.flags & 128)) return b;
      } else if (null !== b.child) {
        b.child.return = b;
        b = b.child;
        continue;
      }
      if (b === a) break;
      for (; null === b.sibling; ) {
        if (null === b.return || b.return === a) return null;
        b = b.return;
      }
      b.sibling.return = b.return;
      b = b.sibling;
    }
    return null;
  }
  var Ae = [];
  function Be() {
    for (var a = 0; a < Ae.length; a++) {
      var b = Ae[a];
      Ta ? b._workInProgressVersionPrimary = null : b._workInProgressVersionSecondary = null;
    }
    Ae.length = 0;
  }
  var Ce = ea.ReactCurrentDispatcher, De = ea.ReactCurrentBatchConfig, Ee = 0, K2 = null, L2 = null, M3 = null, Fe = false, Ge = false, He = 0, Ie = 0;
  function O2() {
    throw Error(n(321));
  }
  function Je(a, b) {
    if (null === b) return false;
    for (var c = 0; c < b.length && c < a.length; c++) if (!Rc(a[c], b[c])) return false;
    return true;
  }
  function Ke(a, b, c, d, e, f2) {
    Ee = f2;
    K2 = b;
    b.memoizedState = null;
    b.updateQueue = null;
    b.lanes = 0;
    Ce.current = null === a || null === a.memoizedState ? Le : Me;
    a = c(d, e);
    if (Ge) {
      f2 = 0;
      do {
        Ge = false;
        He = 0;
        if (25 <= f2) throw Error(n(301));
        f2 += 1;
        M3 = L2 = null;
        b.updateQueue = null;
        Ce.current = Ne;
        a = c(d, e);
      } while (Ge);
    }
    Ce.current = Oe;
    b = null !== L2 && null !== L2.next;
    Ee = 0;
    M3 = L2 = K2 = null;
    Fe = false;
    if (b) throw Error(n(300));
    return a;
  }
  function Pe() {
    var a = 0 !== He;
    He = 0;
    return a;
  }
  function Qe() {
    var a = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    null === M3 ? K2.memoizedState = M3 = a : M3 = M3.next = a;
    return M3;
  }
  function Re() {
    if (null === L2) {
      var a = K2.alternate;
      a = null !== a ? a.memoizedState : null;
    } else a = L2.next;
    var b = null === M3 ? K2.memoizedState : M3.next;
    if (null !== b) M3 = b, L2 = a;
    else {
      if (null === a) throw Error(n(310));
      L2 = a;
      a = { memoizedState: L2.memoizedState, baseState: L2.baseState, baseQueue: L2.baseQueue, queue: L2.queue, next: null };
      null === M3 ? K2.memoizedState = M3 = a : M3 = M3.next = a;
    }
    return M3;
  }
  function Se(a, b) {
    return "function" === typeof b ? b(a) : b;
  }
  function Te(a) {
    var b = Re(), c = b.queue;
    if (null === c) throw Error(n(311));
    c.lastRenderedReducer = a;
    var d = L2, e = d.baseQueue, f2 = c.pending;
    if (null !== f2) {
      if (null !== e) {
        var g3 = e.next;
        e.next = f2.next;
        f2.next = g3;
      }
      d.baseQueue = e = f2;
      c.pending = null;
    }
    if (null !== e) {
      f2 = e.next;
      d = d.baseState;
      var h2 = g3 = null, k3 = null, l = f2;
      do {
        var m = l.lane;
        if ((Ee & m) === m) null !== k3 && (k3 = k3.next = { lane: 0, action: l.action, hasEagerState: l.hasEagerState, eagerState: l.eagerState, next: null }), d = l.hasEagerState ? l.eagerState : a(d, l.action);
        else {
          var v = {
            lane: m,
            action: l.action,
            hasEagerState: l.hasEagerState,
            eagerState: l.eagerState,
            next: null
          };
          null === k3 ? (h2 = k3 = v, g3 = d) : k3 = k3.next = v;
          K2.lanes |= m;
          vd |= m;
        }
        l = l.next;
      } while (null !== l && l !== f2);
      null === k3 ? g3 = d : k3.next = h2;
      Rc(d, b.memoizedState) || (kd = true);
      b.memoizedState = d;
      b.baseState = g3;
      b.baseQueue = k3;
      c.lastRenderedState = d;
    }
    a = c.interleaved;
    if (null !== a) {
      e = a;
      do
        f2 = e.lane, K2.lanes |= f2, vd |= f2, e = e.next;
      while (e !== a);
    } else null === e && (c.lanes = 0);
    return [b.memoizedState, c.dispatch];
  }
  function Ue(a) {
    var b = Re(), c = b.queue;
    if (null === c) throw Error(n(311));
    c.lastRenderedReducer = a;
    var d = c.dispatch, e = c.pending, f2 = b.memoizedState;
    if (null !== e) {
      c.pending = null;
      var g3 = e = e.next;
      do
        f2 = a(f2, g3.action), g3 = g3.next;
      while (g3 !== e);
      Rc(f2, b.memoizedState) || (kd = true);
      b.memoizedState = f2;
      null === b.baseQueue && (b.baseState = f2);
      c.lastRenderedState = f2;
    }
    return [f2, d];
  }
  function Ve() {
  }
  function We(a, b) {
    var c = K2, d = Re(), e = b(), f2 = !Rc(d.memoizedState, e);
    f2 && (d.memoizedState = e, kd = true);
    d = d.queue;
    Xe(Ye.bind(null, c, d, a), [a]);
    if (d.getSnapshot !== b || f2 || null !== M3 && M3.memoizedState.tag & 1) {
      c.flags |= 2048;
      Ze(9, $e.bind(null, c, d, e, b), void 0, null);
      if (null === F) throw Error(n(349));
      0 !== (Ee & 30) || af(c, b, e);
    }
    return e;
  }
  function af(a, b, c) {
    a.flags |= 16384;
    a = { getSnapshot: b, value: c };
    b = K2.updateQueue;
    null === b ? (b = { lastEffect: null, stores: null }, K2.updateQueue = b, b.stores = [a]) : (c = b.stores, null === c ? b.stores = [a] : c.push(a));
  }
  function $e(a, b, c, d) {
    b.value = c;
    b.getSnapshot = d;
    bf(b) && Ad(a, 1, -1);
  }
  function Ye(a, b, c) {
    return c(function() {
      bf(b) && Ad(a, 1, -1);
    });
  }
  function bf(a) {
    var b = a.getSnapshot;
    a = a.value;
    try {
      var c = b();
      return !Rc(a, c);
    } catch (d) {
      return true;
    }
  }
  function cf(a) {
    var b = Qe();
    "function" === typeof a && (a = a());
    b.memoizedState = b.baseState = a;
    a = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Se, lastRenderedState: a };
    b.queue = a;
    a = a.dispatch = df.bind(null, K2, a);
    return [b.memoizedState, a];
  }
  function Ze(a, b, c, d) {
    a = { tag: a, create: b, destroy: c, deps: d, next: null };
    b = K2.updateQueue;
    null === b ? (b = { lastEffect: null, stores: null }, K2.updateQueue = b, b.lastEffect = a.next = a) : (c = b.lastEffect, null === c ? b.lastEffect = a.next = a : (d = c.next, c.next = a, a.next = d, b.lastEffect = a));
    return a;
  }
  function ef() {
    return Re().memoizedState;
  }
  function ff(a, b, c, d) {
    var e = Qe();
    K2.flags |= a;
    e.memoizedState = Ze(1 | b, c, void 0, void 0 === d ? null : d);
  }
  function gf(a, b, c, d) {
    var e = Re();
    d = void 0 === d ? null : d;
    var f2 = void 0;
    if (null !== L2) {
      var g3 = L2.memoizedState;
      f2 = g3.destroy;
      if (null !== d && Je(d, g3.deps)) {
        e.memoizedState = Ze(b, c, f2, d);
        return;
      }
    }
    K2.flags |= a;
    e.memoizedState = Ze(1 | b, c, f2, d);
  }
  function hf(a, b) {
    return ff(8390656, 8, a, b);
  }
  function Xe(a, b) {
    return gf(2048, 8, a, b);
  }
  function jf(a, b) {
    return gf(4, 2, a, b);
  }
  function kf(a, b) {
    return gf(4, 4, a, b);
  }
  function lf(a, b) {
    if ("function" === typeof b) return a = a(), b(a), function() {
      b(null);
    };
    if (null !== b && void 0 !== b) return a = a(), b.current = a, function() {
      b.current = null;
    };
  }
  function mf(a, b, c) {
    c = null !== c && void 0 !== c ? c.concat([a]) : null;
    return gf(4, 4, lf.bind(null, b, a), c);
  }
  function nf() {
  }
  function of(a, b) {
    var c = Re();
    b = void 0 === b ? null : b;
    var d = c.memoizedState;
    if (null !== d && null !== b && Je(b, d[1])) return d[0];
    c.memoizedState = [a, b];
    return a;
  }
  function pf(a, b) {
    var c = Re();
    b = void 0 === b ? null : b;
    var d = c.memoizedState;
    if (null !== d && null !== b && Je(b, d[1])) return d[0];
    a = a();
    c.memoizedState = [a, b];
    return a;
  }
  function qf(a, b) {
    var c = D2;
    D2 = 0 !== c && 4 > c ? c : 4;
    a(true);
    var d = De.transition;
    De.transition = {};
    try {
      a(false), b();
    } finally {
      D2 = c, De.transition = d;
    }
  }
  function rf() {
    return Re().memoizedState;
  }
  function sf(a, b, c) {
    var d = zd(a);
    c = { lane: d, action: c, hasEagerState: false, eagerState: null, next: null };
    tf(a) ? uf(b, c) : (vf(a, b, c), c = H2(), a = Ad(a, d, c), null !== a && wf(a, b, d));
  }
  function df(a, b, c) {
    var d = zd(a), e = { lane: d, action: c, hasEagerState: false, eagerState: null, next: null };
    if (tf(a)) uf(b, e);
    else {
      vf(a, b, e);
      var f2 = a.alternate;
      if (0 === a.lanes && (null === f2 || 0 === f2.lanes) && (f2 = b.lastRenderedReducer, null !== f2)) try {
        var g3 = b.lastRenderedState, h2 = f2(g3, c);
        e.hasEagerState = true;
        e.eagerState = h2;
        if (Rc(h2, g3)) return;
      } catch (k3) {
      } finally {
      }
      c = H2();
      a = Ad(a, d, c);
      null !== a && wf(a, b, d);
    }
  }
  function tf(a) {
    var b = a.alternate;
    return a === K2 || null !== b && b === K2;
  }
  function uf(a, b) {
    Ge = Fe = true;
    var c = a.pending;
    null === c ? b.next = b : (b.next = c.next, c.next = b);
    a.pending = b;
  }
  function vf(a, b, c) {
    null !== F && 0 !== (a.mode & 1) && 0 === (G & 2) ? (a = b.interleaved, null === a ? (c.next = c, null === md ? md = [b] : md.push(b)) : (c.next = a.next, a.next = c), b.interleaved = c) : (a = b.pending, null === a ? c.next = c : (c.next = a.next, a.next = c), b.pending = c);
  }
  function wf(a, b, c) {
    if (0 !== (c & 4194240)) {
      var d = b.lanes;
      d &= a.pendingLanes;
      c |= d;
      b.lanes = c;
      Dc(a, c);
    }
  }
  var Oe = { readContext: ld, useCallback: O2, useContext: O2, useEffect: O2, useImperativeHandle: O2, useInsertionEffect: O2, useLayoutEffect: O2, useMemo: O2, useReducer: O2, useRef: O2, useState: O2, useDebugValue: O2, useDeferredValue: O2, useTransition: O2, useMutableSource: O2, useSyncExternalStore: O2, useId: O2, unstable_isNewReconciler: false }, Le = { readContext: ld, useCallback: function(a, b) {
    Qe().memoizedState = [a, void 0 === b ? null : b];
    return a;
  }, useContext: ld, useEffect: hf, useImperativeHandle: function(a, b, c) {
    c = null !== c && void 0 !== c ? c.concat([a]) : null;
    return ff(
      4194308,
      4,
      lf.bind(null, b, a),
      c
    );
  }, useLayoutEffect: function(a, b) {
    return ff(4194308, 4, a, b);
  }, useInsertionEffect: function(a, b) {
    return ff(4, 2, a, b);
  }, useMemo: function(a, b) {
    var c = Qe();
    b = void 0 === b ? null : b;
    a = a();
    c.memoizedState = [a, b];
    return a;
  }, useReducer: function(a, b, c) {
    var d = Qe();
    b = void 0 !== c ? c(b) : b;
    d.memoizedState = d.baseState = b;
    a = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: a, lastRenderedState: b };
    d.queue = a;
    a = a.dispatch = sf.bind(null, K2, a);
    return [d.memoizedState, a];
  }, useRef: function(a) {
    var b = Qe();
    a = { current: a };
    return b.memoizedState = a;
  }, useState: cf, useDebugValue: nf, useDeferredValue: function(a) {
    var b = cf(a), c = b[0], d = b[1];
    hf(function() {
      var b2 = De.transition;
      De.transition = {};
      try {
        d(a);
      } finally {
        De.transition = b2;
      }
    }, [a]);
    return c;
  }, useTransition: function() {
    var a = cf(false), b = a[0];
    a = qf.bind(null, a[1]);
    Qe().memoizedState = a;
    return [b, a];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(a, b, c) {
    var d = K2, e = Qe();
    if (I2) {
      if (void 0 === c) throw Error(n(407));
      c = c();
    } else {
      c = b();
      if (null === F) throw Error(n(349));
      0 !== (Ee & 30) || af(d, b, c);
    }
    e.memoizedState = c;
    var f2 = { value: c, getSnapshot: b };
    e.queue = f2;
    hf(Ye.bind(null, d, f2, a), [a]);
    d.flags |= 2048;
    Ze(9, $e.bind(null, d, f2, c, b), void 0, null);
    return c;
  }, useId: function() {
    var a = Qe(), b = F.identifierPrefix;
    if (I2) {
      var c = Od;
      var d = Nd;
      c = (d & ~(1 << 32 - qc(d) - 1)).toString(32) + c;
      b = ":" + b + "R" + c;
      c = He++;
      0 < c && (b += "H" + c.toString(32));
      b += ":";
    } else c = Ie++, b = ":" + b + "r" + c.toString(32) + ":";
    return a.memoizedState = b;
  }, unstable_isNewReconciler: false }, Me = {
    readContext: ld,
    useCallback: of,
    useContext: ld,
    useEffect: Xe,
    useImperativeHandle: mf,
    useInsertionEffect: jf,
    useLayoutEffect: kf,
    useMemo: pf,
    useReducer: Te,
    useRef: ef,
    useState: function() {
      return Te(Se);
    },
    useDebugValue: nf,
    useDeferredValue: function(a) {
      var b = Te(Se), c = b[0], d = b[1];
      Xe(function() {
        var b2 = De.transition;
        De.transition = {};
        try {
          d(a);
        } finally {
          De.transition = b2;
        }
      }, [a]);
      return c;
    },
    useTransition: function() {
      var a = Te(Se)[0], b = Re().memoizedState;
      return [a, b];
    },
    useMutableSource: Ve,
    useSyncExternalStore: We,
    useId: rf,
    unstable_isNewReconciler: false
  }, Ne = {
    readContext: ld,
    useCallback: of,
    useContext: ld,
    useEffect: Xe,
    useImperativeHandle: mf,
    useInsertionEffect: jf,
    useLayoutEffect: kf,
    useMemo: pf,
    useReducer: Ue,
    useRef: ef,
    useState: function() {
      return Ue(Se);
    },
    useDebugValue: nf,
    useDeferredValue: function(a) {
      var b = Ue(Se), c = b[0], d = b[1];
      Xe(function() {
        var b2 = De.transition;
        De.transition = {};
        try {
          d(a);
        } finally {
          De.transition = b2;
        }
      }, [a]);
      return c;
    },
    useTransition: function() {
      var a = Ue(Se)[0], b = Re().memoizedState;
      return [a, b];
    },
    useMutableSource: Ve,
    useSyncExternalStore: We,
    useId: rf,
    unstable_isNewReconciler: false
  };
  function xf(a, b) {
    try {
      var c = "", d = b;
      do
        c += $c(d), d = d.return;
      while (d);
      var e = c;
    } catch (f2) {
      e = "\nError generating stack: " + f2.message + "\n" + f2.stack;
    }
    return { value: a, source: b, stack: e };
  }
  function yf(a, b) {
    try {
      console.error(b.value);
    } catch (c) {
      setTimeout(function() {
        throw c;
      });
    }
  }
  var zf = "function" === typeof WeakMap ? WeakMap : Map;
  function Af(a, b, c) {
    c = qd(-1, c);
    c.tag = 3;
    c.payload = { element: null };
    var d = b.value;
    c.callback = function() {
      Bf || (Bf = true, Cf = d);
      yf(a, b);
    };
    return c;
  }
  function Df(a, b, c) {
    c = qd(-1, c);
    c.tag = 3;
    var d = a.type.getDerivedStateFromError;
    if ("function" === typeof d) {
      var e = b.value;
      c.payload = function() {
        return d(e);
      };
      c.callback = function() {
        yf(a, b);
      };
    }
    var f2 = a.stateNode;
    null !== f2 && "function" === typeof f2.componentDidCatch && (c.callback = function() {
      yf(a, b);
      "function" !== typeof d && (null === Ef ? Ef = /* @__PURE__ */ new Set([this]) : Ef.add(this));
      var c2 = b.stack;
      this.componentDidCatch(b.value, { componentStack: null !== c2 ? c2 : "" });
    });
    return c;
  }
  function Ff(a, b, c) {
    var d = a.pingCache;
    if (null === d) {
      d = a.pingCache = new zf();
      var e = /* @__PURE__ */ new Set();
      d.set(b, e);
    } else e = d.get(b), void 0 === e && (e = /* @__PURE__ */ new Set(), d.set(b, e));
    e.has(c) || (e.add(c), a = Gf.bind(null, a, b, c), b.then(a, a));
  }
  function Hf(a) {
    do {
      var b;
      if (b = 13 === a.tag) b = a.memoizedState, b = null !== b ? null !== b.dehydrated ? true : false : true;
      if (b) return a;
      a = a.return;
    } while (null !== a);
    return null;
  }
  function If(a, b, c, d, e) {
    if (0 === (a.mode & 1)) return a === b ? a.flags |= 65536 : (a.flags |= 128, c.flags |= 131072, c.flags &= -52805, 1 === c.tag && (null === c.alternate ? c.tag = 17 : (b = qd(-1, 1), b.tag = 2, rd(c, b))), c.lanes |= 1), a;
    a.flags |= 65536;
    a.lanes = e;
    return a;
  }
  function Jf(a) {
    a.flags |= 4;
  }
  function Kf(a, b) {
    if (null !== a && a.child === b.child) return true;
    if (0 !== (b.flags & 16)) return false;
    for (a = b.child; null !== a; ) {
      if (0 !== (a.flags & 12854) || 0 !== (a.subtreeFlags & 12854)) return false;
      a = a.sibling;
    }
    return true;
  }
  var Lf, Mf, Nf, Of;
  if (Ua) Lf = function(a, b) {
    for (var c = b.child; null !== c; ) {
      if (5 === c.tag || 6 === c.tag) La(a, c.stateNode);
      else if (4 !== c.tag && null !== c.child) {
        c.child.return = c;
        c = c.child;
        continue;
      }
      if (c === b) break;
      for (; null === c.sibling; ) {
        if (null === c.return || c.return === b) return;
        c = c.return;
      }
      c.sibling.return = c.return;
      c = c.sibling;
    }
  }, Mf = function() {
  }, Nf = function(a, b, c, d, e) {
    a = a.memoizedProps;
    if (a !== d) {
      var f2 = b.stateNode, g3 = ue(re.current);
      c = Na(f2, c, a, d, e, g3);
      (b.updateQueue = c) && Jf(b);
    }
  }, Of = function(a, b, c, d) {
    c !== d && Jf(b);
  };
  else if (Va) {
    Lf = function(a, b, c, d) {
      for (var e = b.child; null !== e; ) {
        if (5 === e.tag) {
          var f2 = e.stateNode;
          c && d && (f2 = Db(f2, e.type, e.memoizedProps, e));
          La(a, f2);
        } else if (6 === e.tag) f2 = e.stateNode, c && d && (f2 = Eb(f2, e.memoizedProps, e)), La(a, f2);
        else if (4 !== e.tag) {
          if (22 === e.tag && null !== e.memoizedState) f2 = e.child, null !== f2 && (f2.return = e), Lf(a, e, true, true);
          else if (null !== e.child) {
            e.child.return = e;
            e = e.child;
            continue;
          }
        }
        if (e === b) break;
        for (; null === e.sibling; ) {
          if (null === e.return || e.return === b) return;
          e = e.return;
        }
        e.sibling.return = e.return;
        e = e.sibling;
      }
    };
    var Pf = function(a, b, c, d) {
      for (var e = b.child; null !== e; ) {
        if (5 === e.tag) {
          var f2 = e.stateNode;
          c && d && (f2 = Db(f2, e.type, e.memoizedProps, e));
          Ab(a, f2);
        } else if (6 === e.tag) f2 = e.stateNode, c && d && (f2 = Eb(f2, e.memoizedProps, e)), Ab(a, f2);
        else if (4 !== e.tag) {
          if (22 === e.tag && null !== e.memoizedState) f2 = e.child, null !== f2 && (f2.return = e), Pf(a, e, true, true);
          else if (null !== e.child) {
            e.child.return = e;
            e = e.child;
            continue;
          }
        }
        if (e === b) break;
        for (; null === e.sibling; ) {
          if (null === e.return || e.return === b) return;
          e = e.return;
        }
        e.sibling.return = e.return;
        e = e.sibling;
      }
    };
    Mf = function(a, b) {
      var c = b.stateNode;
      if (!Kf(a, b)) {
        a = c.containerInfo;
        var d = zb(a);
        Pf(d, b, false, false);
        c.pendingChildren = d;
        Jf(b);
        Bb(a, d);
      }
    };
    Nf = function(a, b, c, d, e) {
      var f2 = a.stateNode, g3 = a.memoizedProps;
      if ((a = Kf(a, b)) && g3 === d) b.stateNode = f2;
      else {
        var h2 = b.stateNode, k3 = ue(re.current), l = null;
        g3 !== d && (l = Na(h2, c, g3, d, e, k3));
        a && null === l ? b.stateNode = f2 : (f2 = yb(f2, l, c, g3, d, b, a, h2), Ma(f2, c, d, e, k3) && Jf(b), b.stateNode = f2, a ? Jf(b) : Lf(f2, b, false, false));
      }
    };
    Of = function(a, b, c, d) {
      c !== d ? (a = ue(te.current), c = ue(re.current), b.stateNode = Pa(d, a, c, b), Jf(b)) : b.stateNode = a.stateNode;
    };
  } else Mf = function() {
  }, Nf = function() {
  }, Of = function() {
  };
  function Qf(a, b) {
    if (!I2) switch (a.tailMode) {
      case "hidden":
        b = a.tail;
        for (var c = null; null !== b; ) null !== b.alternate && (c = b), b = b.sibling;
        null === c ? a.tail = null : c.sibling = null;
        break;
      case "collapsed":
        c = a.tail;
        for (var d = null; null !== c; ) null !== c.alternate && (d = c), c = c.sibling;
        null === d ? b || null === a.tail ? a.tail = null : a.tail.sibling = null : d.sibling = null;
    }
  }
  function P2(a) {
    var b = null !== a.alternate && a.alternate.child === a.child, c = 0, d = 0;
    if (b) for (var e = a.child; null !== e; ) c |= e.lanes | e.childLanes, d |= e.subtreeFlags & 14680064, d |= e.flags & 14680064, e.return = a, e = e.sibling;
    else for (e = a.child; null !== e; ) c |= e.lanes | e.childLanes, d |= e.subtreeFlags, d |= e.flags, e.return = a, e = e.sibling;
    a.subtreeFlags |= d;
    a.childLanes = c;
    return b;
  }
  function Rf(a, b, c) {
    var d = b.pendingProps;
    Sd(b);
    switch (b.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return P2(b), null;
      case 1:
        return C(b.type) && kc(), P2(b), null;
      case 3:
        d = b.stateNode;
        we();
        x(B);
        x(A);
        Be();
        d.pendingContext && (d.context = d.pendingContext, d.pendingContext = null);
        if (null === a || null === a.child) ce(b) ? Jf(b) : null === a || a.memoizedState.isDehydrated && 0 === (b.flags & 256) || (b.flags |= 1024, null !== Wd && (Sf(Wd), Wd = null));
        Mf(a, b);
        P2(b);
        return null;
      case 5:
        ye(b);
        c = ue(te.current);
        var e = b.type;
        if (null !== a && null != b.stateNode) Nf(a, b, e, d, c), a.ref !== b.ref && (b.flags |= 512, b.flags |= 2097152);
        else {
          if (!d) {
            if (null === b.stateNode) throw Error(n(166));
            P2(b);
            return null;
          }
          a = ue(re.current);
          if (ce(b)) {
            if (!p2) throw Error(n(175));
            a = Pb(b.stateNode, b.type, b.memoizedProps, c, a, b, !Vd);
            b.updateQueue = a;
            null !== a && Jf(b);
          } else {
            var f2 = Ka(e, d, c, a, b);
            Lf(f2, b, false, false);
            b.stateNode = f2;
            Ma(f2, e, d, c, a) && Jf(b);
          }
          null !== b.ref && (b.flags |= 512, b.flags |= 2097152);
        }
        P2(b);
        return null;
      case 6:
        if (a && null != b.stateNode) Of(a, b, a.memoizedProps, d);
        else {
          if ("string" !== typeof d && null === b.stateNode) throw Error(n(166));
          a = ue(te.current);
          c = ue(re.current);
          if (ce(b)) {
            if (!p2) throw Error(n(176));
            a = b.stateNode;
            d = b.memoizedProps;
            if (c = Qb(a, d, b, !Vd)) {
              if (e = Td, null !== e) switch (f2 = 0 !== (e.mode & 1), e.tag) {
                case 3:
                  Yb(e.stateNode.containerInfo, a, d, f2);
                  break;
                case 5:
                  Zb(e.type, e.memoizedProps, e.stateNode, a, d, f2);
              }
            }
            c && Jf(b);
          } else b.stateNode = Pa(d, a, c, b);
        }
        P2(b);
        return null;
      case 13:
        x(J2);
        d = b.memoizedState;
        if (I2 && null !== Ud && 0 !== (b.mode & 1) && 0 === (b.flags & 128)) {
          for (a = Ud; a; ) a = Lb(a);
          de();
          b.flags |= 98560;
          return b;
        }
        if (null !== d && null !== d.dehydrated) {
          d = ce(b);
          if (null === a) {
            if (!d) throw Error(n(318));
            if (!p2) throw Error(n(344));
            a = b.memoizedState;
            a = null !== a ? a.dehydrated : null;
            if (!a) throw Error(n(317));
            Rb(a, b);
          } else de(), 0 === (b.flags & 128) && (b.memoizedState = null), b.flags |= 4;
          P2(b);
          return null;
        }
        null !== Wd && (Sf(Wd), Wd = null);
        if (0 !== (b.flags & 128)) return b.lanes = c, b;
        d = null !== d;
        c = false;
        null === a ? ce(b) : c = null !== a.memoizedState;
        d && !c && (b.child.flags |= 8192, 0 !== (b.mode & 1) && (null === a || 0 !== (J2.current & 1) ? 0 === Q2 && (Q2 = 3) : Tf()));
        null !== b.updateQueue && (b.flags |= 4);
        P2(b);
        return null;
      case 4:
        return we(), Mf(a, b), null === a && Xa(b.stateNode.containerInfo), P2(b), null;
      case 10:
        return hd(b.type._context), P2(b), null;
      case 17:
        return C(b.type) && kc(), P2(b), null;
      case 19:
        x(J2);
        e = b.memoizedState;
        if (null === e) return P2(b), null;
        d = 0 !== (b.flags & 128);
        f2 = e.rendering;
        if (null === f2) if (d) Qf(e, false);
        else {
          if (0 !== Q2 || null !== a && 0 !== (a.flags & 128)) for (a = b.child; null !== a; ) {
            f2 = ze(a);
            if (null !== f2) {
              b.flags |= 128;
              Qf(e, false);
              a = f2.updateQueue;
              null !== a && (b.updateQueue = a, b.flags |= 4);
              b.subtreeFlags = 0;
              a = c;
              for (d = b.child; null !== d; ) c = d, e = a, c.flags &= 14680066, f2 = c.alternate, null === f2 ? (c.childLanes = 0, c.lanes = e, c.child = null, c.subtreeFlags = 0, c.memoizedProps = null, c.memoizedState = null, c.updateQueue = null, c.dependencies = null, c.stateNode = null) : (c.childLanes = f2.childLanes, c.lanes = f2.lanes, c.child = f2.child, c.subtreeFlags = 0, c.deletions = null, c.memoizedProps = f2.memoizedProps, c.memoizedState = f2.memoizedState, c.updateQueue = f2.updateQueue, c.type = f2.type, e = f2.dependencies, c.dependencies = null === e ? null : { lanes: e.lanes, firstContext: e.firstContext }), d = d.sibling;
              y(J2, J2.current & 1 | 2);
              return b.child;
            }
            a = a.sibling;
          }
          null !== e.tail && E2() > Uf && (b.flags |= 128, d = true, Qf(e, false), b.lanes = 4194304);
        }
        else {
          if (!d) if (a = ze(f2), null !== a) {
            if (b.flags |= 128, d = true, a = a.updateQueue, null !== a && (b.updateQueue = a, b.flags |= 4), Qf(e, true), null === e.tail && "hidden" === e.tailMode && !f2.alternate && !I2) return P2(b), null;
          } else 2 * E2() - e.renderingStartTime > Uf && 1073741824 !== c && (b.flags |= 128, d = true, Qf(e, false), b.lanes = 4194304);
          e.isBackwards ? (f2.sibling = b.child, b.child = f2) : (a = e.last, null !== a ? a.sibling = f2 : b.child = f2, e.last = f2);
        }
        if (null !== e.tail) return b = e.tail, e.rendering = b, e.tail = b.sibling, e.renderingStartTime = E2(), b.sibling = null, a = J2.current, y(J2, d ? a & 1 | 2 : a & 1), b;
        P2(b);
        return null;
      case 22:
      case 23:
        return Vf(), d = null !== b.memoizedState, null !== a && null !== a.memoizedState !== d && (b.flags |= 8192), d && 0 !== (b.mode & 1) ? 0 !== (Wf & 1073741824) && (P2(b), Ua && b.subtreeFlags & 6 && (b.flags |= 8192)) : P2(b), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(n(156, b.tag));
  }
  var Xf = ea.ReactCurrentOwner, kd = false;
  function R2(a, b, c, d) {
    b.child = null === a ? pe(b, null, c, d) : oe(b, a.child, c, d);
  }
  function Yf(a, b, c, d, e) {
    c = c.render;
    var f2 = b.ref;
    jd(b, e);
    d = Ke(a, b, c, d, f2, e);
    c = Pe();
    if (null !== a && !kd) return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e, Zf(a, b, e);
    I2 && c && Rd(b);
    b.flags |= 1;
    R2(a, b, d, e);
    return b.child;
  }
  function $f(a, b, c, d, e) {
    if (null === a) {
      var f2 = c.type;
      if ("function" === typeof f2 && !ag(f2) && void 0 === f2.defaultProps && null === c.compare && void 0 === c.defaultProps) return b.tag = 15, b.type = f2, bg(a, b, f2, d, e);
      a = le(c.type, null, d, b, b.mode, e);
      a.ref = b.ref;
      a.return = b;
      return b.child = a;
    }
    f2 = a.child;
    if (0 === (a.lanes & e)) {
      var g3 = f2.memoizedProps;
      c = c.compare;
      c = null !== c ? c : Zc;
      if (c(g3, d) && a.ref === b.ref) return Zf(a, b, e);
    }
    b.flags |= 1;
    a = je(f2, d);
    a.ref = b.ref;
    a.return = b;
    return b.child = a;
  }
  function bg(a, b, c, d, e) {
    if (null !== a && Zc(a.memoizedProps, d) && a.ref === b.ref) if (kd = false, 0 !== (a.lanes & e)) 0 !== (a.flags & 131072) && (kd = true);
    else return b.lanes = a.lanes, Zf(a, b, e);
    return cg(a, b, c, d, e);
  }
  function dg(a, b, c) {
    var d = b.pendingProps, e = d.children, f2 = null !== a ? a.memoizedState : null;
    if ("hidden" === d.mode) if (0 === (b.mode & 1)) b.memoizedState = { baseLanes: 0, cachePool: null }, y(eg, Wf), Wf |= c;
    else if (0 !== (c & 1073741824)) b.memoizedState = { baseLanes: 0, cachePool: null }, d = null !== f2 ? f2.baseLanes : c, y(eg, Wf), Wf |= d;
    else return a = null !== f2 ? f2.baseLanes | c : c, b.lanes = b.childLanes = 1073741824, b.memoizedState = { baseLanes: a, cachePool: null }, b.updateQueue = null, y(eg, Wf), Wf |= a, null;
    else null !== f2 ? (d = f2.baseLanes | c, b.memoizedState = null) : d = c, y(eg, Wf), Wf |= d;
    R2(a, b, e, c);
    return b.child;
  }
  function fg(a, b) {
    var c = b.ref;
    if (null === a && null !== c || null !== a && a.ref !== c) b.flags |= 512, b.flags |= 2097152;
  }
  function cg(a, b, c, d, e) {
    var f2 = C(c) ? ic : A.current;
    f2 = jc(b, f2);
    jd(b, e);
    c = Ke(a, b, c, d, f2, e);
    d = Pe();
    if (null !== a && !kd) return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e, Zf(a, b, e);
    I2 && d && Rd(b);
    b.flags |= 1;
    R2(a, b, c, e);
    return b.child;
  }
  function gg(a, b, c, d, e) {
    if (C(c)) {
      var f2 = true;
      nc(b);
    } else f2 = false;
    jd(b, e);
    if (null === b.stateNode) null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2), Dd(b, c, d), Fd(b, c, d, e), d = true;
    else if (null === a) {
      var g3 = b.stateNode, h2 = b.memoizedProps;
      g3.props = h2;
      var k3 = g3.context, l = c.contextType;
      "object" === typeof l && null !== l ? l = ld(l) : (l = C(c) ? ic : A.current, l = jc(b, l));
      var m = c.getDerivedStateFromProps, v = "function" === typeof m || "function" === typeof g3.getSnapshotBeforeUpdate;
      v || "function" !== typeof g3.UNSAFE_componentWillReceiveProps && "function" !== typeof g3.componentWillReceiveProps || (h2 !== d || k3 !== l) && Ed(b, g3, d, l);
      nd = false;
      var r = b.memoizedState;
      g3.state = r;
      ud(b, d, g3, e);
      k3 = b.memoizedState;
      h2 !== d || r !== k3 || B.current || nd ? ("function" === typeof m && (yd(b, c, m, d), k3 = b.memoizedState), (h2 = nd || Cd(b, c, h2, d, r, k3, l)) ? (v || "function" !== typeof g3.UNSAFE_componentWillMount && "function" !== typeof g3.componentWillMount || ("function" === typeof g3.componentWillMount && g3.componentWillMount(), "function" === typeof g3.UNSAFE_componentWillMount && g3.UNSAFE_componentWillMount()), "function" === typeof g3.componentDidMount && (b.flags |= 4194308)) : ("function" === typeof g3.componentDidMount && (b.flags |= 4194308), b.memoizedProps = d, b.memoizedState = k3), g3.props = d, g3.state = k3, g3.context = l, d = h2) : ("function" === typeof g3.componentDidMount && (b.flags |= 4194308), d = false);
    } else {
      g3 = b.stateNode;
      pd(a, b);
      h2 = b.memoizedProps;
      l = b.type === b.elementType ? h2 : ad(b.type, h2);
      g3.props = l;
      v = b.pendingProps;
      r = g3.context;
      k3 = c.contextType;
      "object" === typeof k3 && null !== k3 ? k3 = ld(k3) : (k3 = C(c) ? ic : A.current, k3 = jc(b, k3));
      var z = c.getDerivedStateFromProps;
      (m = "function" === typeof z || "function" === typeof g3.getSnapshotBeforeUpdate) || "function" !== typeof g3.UNSAFE_componentWillReceiveProps && "function" !== typeof g3.componentWillReceiveProps || (h2 !== v || r !== k3) && Ed(b, g3, d, k3);
      nd = false;
      r = b.memoizedState;
      g3.state = r;
      ud(b, d, g3, e);
      var q = b.memoizedState;
      h2 !== v || r !== q || B.current || nd ? ("function" === typeof z && (yd(b, c, z, d), q = b.memoizedState), (l = nd || Cd(b, c, l, d, r, q, k3) || false) ? (m || "function" !== typeof g3.UNSAFE_componentWillUpdate && "function" !== typeof g3.componentWillUpdate || ("function" === typeof g3.componentWillUpdate && g3.componentWillUpdate(
        d,
        q,
        k3
      ), "function" === typeof g3.UNSAFE_componentWillUpdate && g3.UNSAFE_componentWillUpdate(d, q, k3)), "function" === typeof g3.componentDidUpdate && (b.flags |= 4), "function" === typeof g3.getSnapshotBeforeUpdate && (b.flags |= 1024)) : ("function" !== typeof g3.componentDidUpdate || h2 === a.memoizedProps && r === a.memoizedState || (b.flags |= 4), "function" !== typeof g3.getSnapshotBeforeUpdate || h2 === a.memoizedProps && r === a.memoizedState || (b.flags |= 1024), b.memoizedProps = d, b.memoizedState = q), g3.props = d, g3.state = q, g3.context = k3, d = l) : ("function" !== typeof g3.componentDidUpdate || h2 === a.memoizedProps && r === a.memoizedState || (b.flags |= 4), "function" !== typeof g3.getSnapshotBeforeUpdate || h2 === a.memoizedProps && r === a.memoizedState || (b.flags |= 1024), d = false);
    }
    return hg(a, b, c, d, f2, e);
  }
  function hg(a, b, c, d, e, f2) {
    fg(a, b);
    var g3 = 0 !== (b.flags & 128);
    if (!d && !g3) return e && oc(b, c, false), Zf(a, b, f2);
    d = b.stateNode;
    Xf.current = b;
    var h2 = g3 && "function" !== typeof c.getDerivedStateFromError ? null : d.render();
    b.flags |= 1;
    null !== a && g3 ? (b.child = oe(b, a.child, null, f2), b.child = oe(b, null, h2, f2)) : R2(a, b, h2, f2);
    b.memoizedState = d.state;
    e && oc(b, c, true);
    return b.child;
  }
  function ig(a) {
    var b = a.stateNode;
    b.pendingContext ? lc(a, b.pendingContext, b.pendingContext !== b.context) : b.context && lc(a, b.context, false);
    ve(a, b.containerInfo);
  }
  function jg(a, b, c, d, e) {
    de();
    ee(e);
    b.flags |= 256;
    R2(a, b, c, d);
    return b.child;
  }
  var kg = { dehydrated: null, treeContext: null, retryLane: 0 };
  function lg(a) {
    return { baseLanes: a, cachePool: null };
  }
  function mg(a, b, c) {
    var d = b.pendingProps, e = J2.current, f2 = false, g3 = 0 !== (b.flags & 128), h2;
    (h2 = g3) || (h2 = null !== a && null === a.memoizedState ? false : 0 !== (e & 2));
    if (h2) f2 = true, b.flags &= -129;
    else if (null === a || null !== a.memoizedState) e |= 1;
    y(J2, e & 1);
    if (null === a) {
      ae(b);
      a = b.memoizedState;
      if (null !== a && (a = a.dehydrated, null !== a)) return 0 === (b.mode & 1) ? b.lanes = 1 : Jb(a) ? b.lanes = 8 : b.lanes = 1073741824, null;
      e = d.children;
      a = d.fallback;
      return f2 ? (d = b.mode, f2 = b.child, e = { mode: "hidden", children: e }, 0 === (d & 1) && null !== f2 ? (f2.childLanes = 0, f2.pendingProps = e) : f2 = ng(e, d, 0, null), a = ne(a, d, c, null), f2.return = b, a.return = b, f2.sibling = a, b.child = f2, b.child.memoizedState = lg(c), b.memoizedState = kg, a) : og(b, e);
    }
    e = a.memoizedState;
    if (null !== e) {
      h2 = e.dehydrated;
      if (null !== h2) {
        if (g3) {
          if (b.flags & 256) return b.flags &= -257, pg(a, b, c, Error(n(422)));
          if (null !== b.memoizedState) return b.child = a.child, b.flags |= 128, null;
          f2 = d.fallback;
          e = b.mode;
          d = ng({ mode: "visible", children: d.children }, e, 0, null);
          f2 = ne(f2, e, c, null);
          f2.flags |= 2;
          d.return = b;
          f2.return = b;
          d.sibling = f2;
          b.child = d;
          0 !== (b.mode & 1) && oe(
            b,
            a.child,
            null,
            c
          );
          b.child.memoizedState = lg(c);
          b.memoizedState = kg;
          return f2;
        }
        if (0 === (b.mode & 1)) b = pg(a, b, c, null);
        else if (Jb(h2)) b = pg(a, b, c, Error(n(419)));
        else if (d = 0 !== (c & a.childLanes), kd || d) {
          d = F;
          if (null !== d) {
            switch (c & -c) {
              case 4:
                f2 = 2;
                break;
              case 16:
                f2 = 8;
                break;
              case 64:
              case 128:
              case 256:
              case 512:
              case 1024:
              case 2048:
              case 4096:
              case 8192:
              case 16384:
              case 32768:
              case 65536:
              case 131072:
              case 262144:
              case 524288:
              case 1048576:
              case 2097152:
              case 4194304:
              case 8388608:
              case 16777216:
              case 33554432:
              case 67108864:
                f2 = 32;
                break;
              case 536870912:
                f2 = 268435456;
                break;
              default:
                f2 = 0;
            }
            d = 0 !== (f2 & (d.suspendedLanes | c)) ? 0 : f2;
            0 !== d && d !== e.retryLane && (e.retryLane = d, Ad(a, d, -1));
          }
          Tf();
          b = pg(a, b, c, Error(n(421)));
        } else Ib(h2) ? (b.flags |= 128, b.child = a.child, b = qg.bind(null, a), Kb(h2, b), b = null) : (c = e.treeContext, p2 && (Ud = Ob(h2), Td = b, I2 = true, Wd = null, Vd = false, null !== c && (Kd[Ld++] = Nd, Kd[Ld++] = Od, Kd[Ld++] = Md, Nd = c.id, Od = c.overflow, Md = b)), b = og(b, b.pendingProps.children), b.flags |= 4096);
        return b;
      }
      if (f2) return d = rg(a, b, d.children, d.fallback, c), f2 = b.child, e = a.child.memoizedState, f2.memoizedState = null === e ? lg(c) : { baseLanes: e.baseLanes | c, cachePool: null }, f2.childLanes = a.childLanes & ~c, b.memoizedState = kg, d;
      c = sg(a, b, d.children, c);
      b.memoizedState = null;
      return c;
    }
    if (f2) return d = rg(a, b, d.children, d.fallback, c), f2 = b.child, e = a.child.memoizedState, f2.memoizedState = null === e ? lg(c) : { baseLanes: e.baseLanes | c, cachePool: null }, f2.childLanes = a.childLanes & ~c, b.memoizedState = kg, d;
    c = sg(a, b, d.children, c);
    b.memoizedState = null;
    return c;
  }
  function og(a, b) {
    b = ng({ mode: "visible", children: b }, a.mode, 0, null);
    b.return = a;
    return a.child = b;
  }
  function sg(a, b, c, d) {
    var e = a.child;
    a = e.sibling;
    c = je(e, { mode: "visible", children: c });
    0 === (b.mode & 1) && (c.lanes = d);
    c.return = b;
    c.sibling = null;
    null !== a && (d = b.deletions, null === d ? (b.deletions = [a], b.flags |= 16) : d.push(a));
    return b.child = c;
  }
  function rg(a, b, c, d, e) {
    var f2 = b.mode;
    a = a.child;
    var g3 = a.sibling, h2 = { mode: "hidden", children: c };
    0 === (f2 & 1) && b.child !== a ? (c = b.child, c.childLanes = 0, c.pendingProps = h2, b.deletions = null) : (c = je(a, h2), c.subtreeFlags = a.subtreeFlags & 14680064);
    null !== g3 ? d = je(g3, d) : (d = ne(d, f2, e, null), d.flags |= 2);
    d.return = b;
    c.return = b;
    c.sibling = d;
    b.child = c;
    return d;
  }
  function pg(a, b, c, d) {
    null !== d && ee(d);
    oe(b, a.child, null, c);
    a = og(b, b.pendingProps.children);
    a.flags |= 2;
    b.memoizedState = null;
    return a;
  }
  function tg(a, b, c) {
    a.lanes |= b;
    var d = a.alternate;
    null !== d && (d.lanes |= b);
    id(a.return, b, c);
  }
  function ug(a, b, c, d, e) {
    var f2 = a.memoizedState;
    null === f2 ? a.memoizedState = { isBackwards: b, rendering: null, renderingStartTime: 0, last: d, tail: c, tailMode: e } : (f2.isBackwards = b, f2.rendering = null, f2.renderingStartTime = 0, f2.last = d, f2.tail = c, f2.tailMode = e);
  }
  function vg(a, b, c) {
    var d = b.pendingProps, e = d.revealOrder, f2 = d.tail;
    R2(a, b, d.children, c);
    d = J2.current;
    if (0 !== (d & 2)) d = d & 1 | 2, b.flags |= 128;
    else {
      if (null !== a && 0 !== (a.flags & 128)) a: for (a = b.child; null !== a; ) {
        if (13 === a.tag) null !== a.memoizedState && tg(a, c, b);
        else if (19 === a.tag) tg(a, c, b);
        else if (null !== a.child) {
          a.child.return = a;
          a = a.child;
          continue;
        }
        if (a === b) break a;
        for (; null === a.sibling; ) {
          if (null === a.return || a.return === b) break a;
          a = a.return;
        }
        a.sibling.return = a.return;
        a = a.sibling;
      }
      d &= 1;
    }
    y(J2, d);
    if (0 === (b.mode & 1)) b.memoizedState = null;
    else switch (e) {
      case "forwards":
        c = b.child;
        for (e = null; null !== c; ) a = c.alternate, null !== a && null === ze(a) && (e = c), c = c.sibling;
        c = e;
        null === c ? (e = b.child, b.child = null) : (e = c.sibling, c.sibling = null);
        ug(b, false, e, c, f2);
        break;
      case "backwards":
        c = null;
        e = b.child;
        for (b.child = null; null !== e; ) {
          a = e.alternate;
          if (null !== a && null === ze(a)) {
            b.child = e;
            break;
          }
          a = e.sibling;
          e.sibling = c;
          c = e;
          e = a;
        }
        ug(b, true, c, null, f2);
        break;
      case "together":
        ug(b, false, null, null, void 0);
        break;
      default:
        b.memoizedState = null;
    }
    return b.child;
  }
  function Zf(a, b, c) {
    null !== a && (b.dependencies = a.dependencies);
    vd |= b.lanes;
    if (0 === (c & b.childLanes)) return null;
    if (null !== a && b.child !== a.child) throw Error(n(153));
    if (null !== b.child) {
      a = b.child;
      c = je(a, a.pendingProps);
      b.child = c;
      for (c.return = b; null !== a.sibling; ) a = a.sibling, c = c.sibling = je(a, a.pendingProps), c.return = b;
      c.sibling = null;
    }
    return b.child;
  }
  function wg(a, b, c) {
    switch (b.tag) {
      case 3:
        ig(b);
        de();
        break;
      case 5:
        xe(b);
        break;
      case 1:
        C(b.type) && nc(b);
        break;
      case 4:
        ve(b, b.stateNode.containerInfo);
        break;
      case 10:
        gd(b, b.type._context, b.memoizedProps.value);
        break;
      case 13:
        var d = b.memoizedState;
        if (null !== d) {
          if (null !== d.dehydrated) return y(J2, J2.current & 1), b.flags |= 128, null;
          if (0 !== (c & b.child.childLanes)) return mg(a, b, c);
          y(J2, J2.current & 1);
          a = Zf(a, b, c);
          return null !== a ? a.sibling : null;
        }
        y(J2, J2.current & 1);
        break;
      case 19:
        d = 0 !== (c & b.childLanes);
        if (0 !== (a.flags & 128)) {
          if (d) return vg(
            a,
            b,
            c
          );
          b.flags |= 128;
        }
        var e = b.memoizedState;
        null !== e && (e.rendering = null, e.tail = null, e.lastEffect = null);
        y(J2, J2.current);
        if (d) break;
        else return null;
      case 22:
      case 23:
        return b.lanes = 0, dg(a, b, c);
    }
    return Zf(a, b, c);
  }
  function xg(a, b) {
    Sd(b);
    switch (b.tag) {
      case 1:
        return C(b.type) && kc(), a = b.flags, a & 65536 ? (b.flags = a & -65537 | 128, b) : null;
      case 3:
        return we(), x(B), x(A), Be(), a = b.flags, 0 !== (a & 65536) && 0 === (a & 128) ? (b.flags = a & -65537 | 128, b) : null;
      case 5:
        return ye(b), null;
      case 13:
        x(J2);
        a = b.memoizedState;
        if (null !== a && null !== a.dehydrated) {
          if (null === b.alternate) throw Error(n(340));
          de();
        }
        a = b.flags;
        return a & 65536 ? (b.flags = a & -65537 | 128, b) : null;
      case 19:
        return x(J2), null;
      case 4:
        return we(), null;
      case 10:
        return hd(b.type._context), null;
      case 22:
      case 23:
        return Vf(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var yg = false, zg = false, Ag = "function" === typeof WeakSet ? WeakSet : Set, S2 = null;
  function Bg(a, b) {
    var c = a.ref;
    if (null !== c) if ("function" === typeof c) try {
      c(null);
    } catch (d) {
      T3(a, b, d);
    }
    else c.current = null;
  }
  function Cg(a, b, c) {
    try {
      c();
    } catch (d) {
      T3(a, b, d);
    }
  }
  var Dg = false;
  function Eg(a, b) {
    Ia(a.containerInfo);
    for (S2 = b; null !== S2; ) if (a = S2, b = a.child, 0 !== (a.subtreeFlags & 1028) && null !== b) b.return = a, S2 = b;
    else for (; null !== S2; ) {
      a = S2;
      try {
        var c = a.alternate;
        if (0 !== (a.flags & 1024)) switch (a.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (null !== c) {
              var d = c.memoizedProps, e = c.memoizedState, f2 = a.stateNode, g3 = f2.getSnapshotBeforeUpdate(a.elementType === a.type ? d : ad(a.type, d), e);
              f2.__reactInternalSnapshotBeforeUpdate = g3;
            }
            break;
          case 3:
            Ua && xb(a.stateNode.containerInfo);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(n(163));
        }
      } catch (h2) {
        T3(a, a.return, h2);
      }
      b = a.sibling;
      if (null !== b) {
        b.return = a.return;
        S2 = b;
        break;
      }
      S2 = a.return;
    }
    c = Dg;
    Dg = false;
    return c;
  }
  function Fg(a, b, c) {
    var d = b.updateQueue;
    d = null !== d ? d.lastEffect : null;
    if (null !== d) {
      var e = d = d.next;
      do {
        if ((e.tag & a) === a) {
          var f2 = e.destroy;
          e.destroy = void 0;
          void 0 !== f2 && Cg(b, c, f2);
        }
        e = e.next;
      } while (e !== d);
    }
  }
  function Gg(a, b) {
    b = b.updateQueue;
    b = null !== b ? b.lastEffect : null;
    if (null !== b) {
      var c = b = b.next;
      do {
        if ((c.tag & a) === a) {
          var d = c.create;
          c.destroy = d();
        }
        c = c.next;
      } while (c !== b);
    }
  }
  function Hg(a) {
    var b = a.ref;
    if (null !== b) {
      var c = a.stateNode;
      switch (a.tag) {
        case 5:
          a = Fa(c);
          break;
        default:
          a = c;
      }
      "function" === typeof b ? b(a) : b.current = a;
    }
  }
  function Ig(a, b, c) {
    if (Oc && "function" === typeof Oc.onCommitFiberUnmount) try {
      Oc.onCommitFiberUnmount(Nc, b);
    } catch (g3) {
    }
    switch (b.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        a = b.updateQueue;
        if (null !== a && (a = a.lastEffect, null !== a)) {
          var d = a = a.next;
          do {
            var e = d, f2 = e.destroy;
            e = e.tag;
            void 0 !== f2 && (0 !== (e & 2) ? Cg(b, c, f2) : 0 !== (e & 4) && Cg(b, c, f2));
            d = d.next;
          } while (d !== a);
        }
        break;
      case 1:
        Bg(b, c);
        a = b.stateNode;
        if ("function" === typeof a.componentWillUnmount) try {
          a.props = b.memoizedProps, a.state = b.memoizedState, a.componentWillUnmount();
        } catch (g3) {
          T3(
            b,
            c,
            g3
          );
        }
        break;
      case 5:
        Bg(b, c);
        break;
      case 4:
        Ua ? Jg(a, b, c) : Va && Va && (b = b.stateNode.containerInfo, c = zb(b), Cb(b, c));
    }
  }
  function Kg(a, b, c) {
    for (var d = b; ; ) if (Ig(a, d, c), null === d.child || Ua && 4 === d.tag) {
      if (d === b) break;
      for (; null === d.sibling; ) {
        if (null === d.return || d.return === b) return;
        d = d.return;
      }
      d.sibling.return = d.return;
      d = d.sibling;
    } else d.child.return = d, d = d.child;
  }
  function Lg(a) {
    var b = a.alternate;
    null !== b && (a.alternate = null, Lg(b));
    a.child = null;
    a.deletions = null;
    a.sibling = null;
    5 === a.tag && (b = a.stateNode, null !== b && Za(b));
    a.stateNode = null;
    a.return = null;
    a.dependencies = null;
    a.memoizedProps = null;
    a.memoizedState = null;
    a.pendingProps = null;
    a.stateNode = null;
    a.updateQueue = null;
  }
  function Mg(a) {
    return 5 === a.tag || 3 === a.tag || 4 === a.tag;
  }
  function Ng(a) {
    a: for (; ; ) {
      for (; null === a.sibling; ) {
        if (null === a.return || Mg(a.return)) return null;
        a = a.return;
      }
      a.sibling.return = a.return;
      for (a = a.sibling; 5 !== a.tag && 6 !== a.tag && 18 !== a.tag; ) {
        if (a.flags & 2) continue a;
        if (null === a.child || 4 === a.tag) continue a;
        else a.child.return = a, a = a.child;
      }
      if (!(a.flags & 2)) return a.stateNode;
    }
  }
  function Og(a) {
    if (Ua) {
      a: {
        for (var b = a.return; null !== b; ) {
          if (Mg(b)) break a;
          b = b.return;
        }
        throw Error(n(160));
      }
      var c = b;
      switch (c.tag) {
        case 5:
          b = c.stateNode;
          c.flags & 32 && (sb(b), c.flags &= -33);
          c = Ng(a);
          Pg(a, c, b);
          break;
        case 3:
        case 4:
          b = c.stateNode.containerInfo;
          c = Ng(a);
          Qg(a, c, b);
          break;
        default:
          throw Error(n(161));
      }
    }
  }
  function Qg(a, b, c) {
    var d = a.tag;
    if (5 === d || 6 === d) a = a.stateNode, b ? pb(c, a, b) : kb(c, a);
    else if (4 !== d && (a = a.child, null !== a)) for (Qg(a, b, c), a = a.sibling; null !== a; ) Qg(a, b, c), a = a.sibling;
  }
  function Pg(a, b, c) {
    var d = a.tag;
    if (5 === d || 6 === d) a = a.stateNode, b ? ob(c, a, b) : jb(c, a);
    else if (4 !== d && (a = a.child, null !== a)) for (Pg(a, b, c), a = a.sibling; null !== a; ) Pg(a, b, c), a = a.sibling;
  }
  function Jg(a, b, c) {
    for (var d = b, e = false, f2, g3; ; ) {
      if (!e) {
        e = d.return;
        a: for (; ; ) {
          if (null === e) throw Error(n(160));
          f2 = e.stateNode;
          switch (e.tag) {
            case 5:
              g3 = false;
              break a;
            case 3:
              f2 = f2.containerInfo;
              g3 = true;
              break a;
            case 4:
              f2 = f2.containerInfo;
              g3 = true;
              break a;
          }
          e = e.return;
        }
        e = true;
      }
      if (5 === d.tag || 6 === d.tag) Kg(a, d, c), g3 ? rb(f2, d.stateNode) : qb(f2, d.stateNode);
      else if (18 === d.tag) g3 ? Wb(f2, d.stateNode) : Vb(f2, d.stateNode);
      else if (4 === d.tag) {
        if (null !== d.child) {
          f2 = d.stateNode.containerInfo;
          g3 = true;
          d.child.return = d;
          d = d.child;
          continue;
        }
      } else if (Ig(a, d, c), null !== d.child) {
        d.child.return = d;
        d = d.child;
        continue;
      }
      if (d === b) break;
      for (; null === d.sibling; ) {
        if (null === d.return || d.return === b) return;
        d = d.return;
        4 === d.tag && (e = false);
      }
      d.sibling.return = d.return;
      d = d.sibling;
    }
  }
  function Rg(a, b) {
    if (Ua) {
      switch (b.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Fg(3, b, b.return);
          Gg(3, b);
          Fg(5, b, b.return);
          return;
        case 1:
          return;
        case 5:
          var c = b.stateNode;
          if (null != c) {
            var d = b.memoizedProps;
            a = null !== a ? a.memoizedProps : d;
            var e = b.type, f2 = b.updateQueue;
            b.updateQueue = null;
            null !== f2 && nb(c, f2, e, a, d, b);
          }
          return;
        case 6:
          if (null === b.stateNode) throw Error(n(162));
          c = b.memoizedProps;
          lb(b.stateNode, null !== a ? a.memoizedProps : c, c);
          return;
        case 3:
          p2 && null !== a && a.memoizedState.isDehydrated && Tb(b.stateNode.containerInfo);
          return;
        case 12:
          return;
        case 13:
          Sg(b);
          return;
        case 19:
          Sg(b);
          return;
        case 17:
          return;
      }
      throw Error(n(163));
    }
    switch (b.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Fg(3, b, b.return);
        Gg(3, b);
        Fg(5, b, b.return);
        return;
      case 12:
        return;
      case 13:
        Sg(b);
        return;
      case 19:
        Sg(b);
        return;
      case 3:
        p2 && null !== a && a.memoizedState.isDehydrated && Tb(b.stateNode.containerInfo);
        break;
      case 22:
      case 23:
        return;
    }
    a: if (Va) {
      switch (b.tag) {
        case 1:
        case 5:
        case 6:
          break a;
        case 3:
        case 4:
          b = b.stateNode;
          Cb(b.containerInfo, b.pendingChildren);
          break a;
      }
      throw Error(n(163));
    }
  }
  function Sg(a) {
    var b = a.updateQueue;
    if (null !== b) {
      a.updateQueue = null;
      var c = a.stateNode;
      null === c && (c = a.stateNode = new Ag());
      b.forEach(function(b2) {
        var d = Tg.bind(null, a, b2);
        c.has(b2) || (c.add(b2), b2.then(d, d));
      });
    }
  }
  function Ug(a, b) {
    for (S2 = b; null !== S2; ) {
      b = S2;
      var c = b.deletions;
      if (null !== c) for (var d = 0; d < c.length; d++) {
        var e = c[d];
        try {
          var f2 = a;
          Ua ? Jg(f2, e, b) : Kg(f2, e, b);
          var g3 = e.alternate;
          null !== g3 && (g3.return = null);
          e.return = null;
        } catch (wa) {
          T3(e, b, wa);
        }
      }
      c = b.child;
      if (0 !== (b.subtreeFlags & 12854) && null !== c) c.return = b, S2 = c;
      else for (; null !== S2; ) {
        b = S2;
        try {
          var h2 = b.flags;
          h2 & 32 && Ua && sb(b.stateNode);
          if (h2 & 512) {
            var k3 = b.alternate;
            if (null !== k3) {
              var l = k3.ref;
              null !== l && ("function" === typeof l ? l(null) : l.current = null);
            }
          }
          if (h2 & 8192) switch (b.tag) {
            case 13:
              if (null !== b.memoizedState) {
                var m = b.alternate;
                if (null === m || null === m.memoizedState) Vg = E2();
              }
              break;
            case 22:
              var v = null !== b.memoizedState, r = b.alternate, z = null !== r && null !== r.memoizedState;
              c = b;
              if (Ua) {
                a: if (d = c, e = v, f2 = null, Ua) for (var q = d; ; ) {
                  if (5 === q.tag) {
                    if (null === f2) {
                      f2 = q;
                      var N2 = q.stateNode;
                      e ? tb(N2) : vb(q.stateNode, q.memoizedProps);
                    }
                  } else if (6 === q.tag) {
                    if (null === f2) {
                      var da = q.stateNode;
                      e ? ub(da) : wb(da, q.memoizedProps);
                    }
                  } else if ((22 !== q.tag && 23 !== q.tag || null === q.memoizedState || q === d) && null !== q.child) {
                    q.child.return = q;
                    q = q.child;
                    continue;
                  }
                  if (q === d) break;
                  for (; null === q.sibling; ) {
                    if (null === q.return || q.return === d) break a;
                    f2 === q && (f2 = null);
                    q = q.return;
                  }
                  f2 === q && (f2 = null);
                  q.sibling.return = q.return;
                  q = q.sibling;
                }
              }
              if (v && !z && 0 !== (c.mode & 1)) {
                S2 = c;
                for (var t = c.child; null !== t; ) {
                  for (c = S2 = t; null !== S2; ) {
                    d = S2;
                    var w = d.child;
                    switch (d.tag) {
                      case 0:
                      case 11:
                      case 14:
                      case 15:
                        Fg(4, d, d.return);
                        break;
                      case 1:
                        Bg(d, d.return);
                        var u2 = d.stateNode;
                        if ("function" === typeof u2.componentWillUnmount) {
                          var V2 = d.return;
                          try {
                            u2.props = d.memoizedProps, u2.state = d.memoizedState, u2.componentWillUnmount();
                          } catch (wa) {
                            T3(
                              d,
                              V2,
                              wa
                            );
                          }
                        }
                        break;
                      case 5:
                        Bg(d, d.return);
                        break;
                      case 22:
                        if (null !== d.memoizedState) {
                          Wg(c);
                          continue;
                        }
                    }
                    null !== w ? (w.return = d, S2 = w) : Wg(c);
                  }
                  t = t.sibling;
                }
              }
          }
          switch (h2 & 4102) {
            case 2:
              Og(b);
              b.flags &= -3;
              break;
            case 6:
              Og(b);
              b.flags &= -3;
              Rg(b.alternate, b);
              break;
            case 4096:
              b.flags &= -4097;
              break;
            case 4100:
              b.flags &= -4097;
              Rg(b.alternate, b);
              break;
            case 4:
              Rg(b.alternate, b);
          }
        } catch (wa) {
          T3(b, b.return, wa);
        }
        c = b.sibling;
        if (null !== c) {
          c.return = b.return;
          S2 = c;
          break;
        }
        S2 = b.return;
      }
    }
  }
  function Xg(a, b, c) {
    S2 = a;
    Yg(a, b, c);
  }
  function Yg(a, b, c) {
    for (var d = 0 !== (a.mode & 1); null !== S2; ) {
      var e = S2, f2 = e.child;
      if (22 === e.tag && d) {
        var g3 = null !== e.memoizedState || yg;
        if (!g3) {
          var h2 = e.alternate, k3 = null !== h2 && null !== h2.memoizedState || zg;
          h2 = yg;
          var l = zg;
          yg = g3;
          if ((zg = k3) && !l) for (S2 = e; null !== S2; ) g3 = S2, k3 = g3.child, 22 === g3.tag && null !== g3.memoizedState ? Zg(e) : null !== k3 ? (k3.return = g3, S2 = k3) : Zg(e);
          for (; null !== f2; ) S2 = f2, Yg(f2, b, c), f2 = f2.sibling;
          S2 = e;
          yg = h2;
          zg = l;
        }
        $g(a, b, c);
      } else 0 !== (e.subtreeFlags & 8772) && null !== f2 ? (f2.return = e, S2 = f2) : $g(a, b, c);
    }
  }
  function $g(a) {
    for (; null !== S2; ) {
      var b = S2;
      if (0 !== (b.flags & 8772)) {
        var c = b.alternate;
        try {
          if (0 !== (b.flags & 8772)) switch (b.tag) {
            case 0:
            case 11:
            case 15:
              zg || Gg(5, b);
              break;
            case 1:
              var d = b.stateNode;
              if (b.flags & 4 && !zg) if (null === c) d.componentDidMount();
              else {
                var e = b.elementType === b.type ? c.memoizedProps : ad(b.type, c.memoizedProps);
                d.componentDidUpdate(e, c.memoizedState, d.__reactInternalSnapshotBeforeUpdate);
              }
              var f2 = b.updateQueue;
              null !== f2 && wd(b, f2, d);
              break;
            case 3:
              var g3 = b.updateQueue;
              if (null !== g3) {
                c = null;
                if (null !== b.child) switch (b.child.tag) {
                  case 5:
                    c = Fa(b.child.stateNode);
                    break;
                  case 1:
                    c = b.child.stateNode;
                }
                wd(b, g3, c);
              }
              break;
            case 5:
              var h2 = b.stateNode;
              null === c && b.flags & 4 && mb(h2, b.type, b.memoizedProps, b);
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (p2 && null === b.memoizedState) {
                var k3 = b.alternate;
                if (null !== k3) {
                  var l = k3.memoizedState;
                  if (null !== l) {
                    var m = l.dehydrated;
                    null !== m && Ub(m);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
              break;
            default:
              throw Error(n(163));
          }
          zg || b.flags & 512 && Hg(b);
        } catch (v) {
          T3(b, b.return, v);
        }
      }
      if (b === a) {
        S2 = null;
        break;
      }
      c = b.sibling;
      if (null !== c) {
        c.return = b.return;
        S2 = c;
        break;
      }
      S2 = b.return;
    }
  }
  function Wg(a) {
    for (; null !== S2; ) {
      var b = S2;
      if (b === a) {
        S2 = null;
        break;
      }
      var c = b.sibling;
      if (null !== c) {
        c.return = b.return;
        S2 = c;
        break;
      }
      S2 = b.return;
    }
  }
  function Zg(a) {
    for (; null !== S2; ) {
      var b = S2;
      try {
        switch (b.tag) {
          case 0:
          case 11:
          case 15:
            var c = b.return;
            try {
              Gg(4, b);
            } catch (k3) {
              T3(b, c, k3);
            }
            break;
          case 1:
            var d = b.stateNode;
            if ("function" === typeof d.componentDidMount) {
              var e = b.return;
              try {
                d.componentDidMount();
              } catch (k3) {
                T3(b, e, k3);
              }
            }
            var f2 = b.return;
            try {
              Hg(b);
            } catch (k3) {
              T3(b, f2, k3);
            }
            break;
          case 5:
            var g3 = b.return;
            try {
              Hg(b);
            } catch (k3) {
              T3(b, g3, k3);
            }
        }
      } catch (k3) {
        T3(b, b.return, k3);
      }
      if (b === a) {
        S2 = null;
        break;
      }
      var h2 = b.sibling;
      if (null !== h2) {
        h2.return = b.return;
        S2 = h2;
        break;
      }
      S2 = b.return;
    }
  }
  var ah = 0, bh = 1, ch = 2, dh = 3, eh = 4;
  if ("function" === typeof Symbol && Symbol.for) {
    var fh = Symbol.for;
    ah = fh("selector.component");
    bh = fh("selector.has_pseudo_class");
    ch = fh("selector.role");
    dh = fh("selector.test_id");
    eh = fh("selector.text");
  }
  function gh(a) {
    var b = Wa(a);
    if (null != b) {
      if ("string" !== typeof b.memoizedProps["data-testname"]) throw Error(n(364));
      return b;
    }
    a = cb(a);
    if (null === a) throw Error(n(362));
    return a.stateNode.current;
  }
  function hh(a, b) {
    switch (b.$$typeof) {
      case ah:
        if (a.type === b.value) return true;
        break;
      case bh:
        a: {
          b = b.value;
          a = [a, 0];
          for (var c = 0; c < a.length; ) {
            var d = a[c++], e = a[c++], f2 = b[e];
            if (5 !== d.tag || !fb(d)) {
              for (; null != f2 && hh(d, f2); ) e++, f2 = b[e];
              if (e === b.length) {
                b = true;
                break a;
              } else for (d = d.child; null !== d; ) a.push(d, e), d = d.sibling;
            }
          }
          b = false;
        }
        return b;
      case ch:
        if (5 === a.tag && gb(a.stateNode, b.value)) return true;
        break;
      case eh:
        if (5 === a.tag || 6 === a.tag) {
          if (a = eb(a), null !== a && 0 <= a.indexOf(b.value)) return true;
        }
        break;
      case dh:
        if (5 === a.tag && (a = a.memoizedProps["data-testname"], "string" === typeof a && a.toLowerCase() === b.value.toLowerCase())) return true;
        break;
      default:
        throw Error(n(365));
    }
    return false;
  }
  function ih(a) {
    switch (a.$$typeof) {
      case ah:
        return "<" + (va(a.value) || "Unknown") + ">";
      case bh:
        return ":has(" + (ih(a) || "") + ")";
      case ch:
        return '[role="' + a.value + '"]';
      case eh:
        return '"' + a.value + '"';
      case dh:
        return '[data-testname="' + a.value + '"]';
      default:
        throw Error(n(365));
    }
  }
  function jh(a, b) {
    var c = [];
    a = [a, 0];
    for (var d = 0; d < a.length; ) {
      var e = a[d++], f2 = a[d++], g3 = b[f2];
      if (5 !== e.tag || !fb(e)) {
        for (; null != g3 && hh(e, g3); ) f2++, g3 = b[f2];
        if (f2 === b.length) c.push(e);
        else for (e = e.child; null !== e; ) a.push(e, f2), e = e.sibling;
      }
    }
    return c;
  }
  function kh(a, b) {
    if (!bb) throw Error(n(363));
    a = gh(a);
    a = jh(a, b);
    b = [];
    a = Array.from(a);
    for (var c = 0; c < a.length; ) {
      var d = a[c++];
      if (5 === d.tag) fb(d) || b.push(d.stateNode);
      else for (d = d.child; null !== d; ) a.push(d), d = d.sibling;
    }
    return b;
  }
  var lh = Math.ceil, mh = ea.ReactCurrentDispatcher, nh = ea.ReactCurrentOwner, U2 = ea.ReactCurrentBatchConfig, G = 0, F = null, W3 = null, X2 = 0, Wf = 0, eg = gc(0), Q2 = 0, oh = null, vd = 0, ph = 0, qh = 0, rh = null, Y = null, Vg = 0, Uf = Infinity;
  function sh() {
    Uf = E2() + 500;
  }
  var Bf = false, Cf = null, Ef = null, th = false, uh = null, vh = 0, wh = 0, xh = null, yh = -1, zh = 0;
  function H2() {
    return 0 !== (G & 6) ? E2() : -1 !== yh ? yh : yh = E2();
  }
  function zd(a) {
    if (0 === (a.mode & 1)) return 1;
    if (0 !== (G & 2) && 0 !== X2) return X2 & -X2;
    if (null !== Yc.transition) return 0 === zh && (a = tc, tc <<= 1, 0 === (tc & 4194240) && (tc = 64), zh = a), zh;
    a = D2;
    return 0 !== a ? a : Ya();
  }
  function Ad(a, b, c) {
    if (50 < wh) throw wh = 0, xh = null, Error(n(185));
    var d = Ah(a, b);
    if (null === d) return null;
    Bc(d, b, c);
    if (0 === (G & 2) || d !== F) d === F && (0 === (G & 2) && (ph |= b), 4 === Q2 && Bh(d, X2)), Z(d, c), 1 === b && 0 === G && 0 === (a.mode & 1) && (sh(), Tc && Xc());
    return d;
  }
  function Ah(a, b) {
    a.lanes |= b;
    var c = a.alternate;
    null !== c && (c.lanes |= b);
    c = a;
    for (a = a.return; null !== a; ) a.childLanes |= b, c = a.alternate, null !== c && (c.childLanes |= b), c = a, a = a.return;
    return 3 === c.tag ? c.stateNode : null;
  }
  function Z(a, b) {
    var c = a.callbackNode;
    yc(a, b);
    var d = wc(a, a === F ? X2 : 0);
    if (0 === d) null !== c && Gc(c), a.callbackNode = null, a.callbackPriority = 0;
    else if (b = d & -d, a.callbackPriority !== b) {
      null != c && Gc(c);
      if (1 === b) 0 === a.tag ? Wc(Ch.bind(null, a)) : Vc(Ch.bind(null, a)), $a ? ab(function() {
        0 === G && Xc();
      }) : Fc(Jc, Xc), c = null;
      else {
        switch (Ec(d)) {
          case 1:
            c = Jc;
            break;
          case 4:
            c = Kc;
            break;
          case 16:
            c = Lc;
            break;
          case 536870912:
            c = Mc;
            break;
          default:
            c = Lc;
        }
        c = Dh(c, Eh.bind(null, a));
      }
      a.callbackPriority = b;
      a.callbackNode = c;
    }
  }
  function Eh(a, b) {
    yh = -1;
    zh = 0;
    if (0 !== (G & 6)) throw Error(n(327));
    var c = a.callbackNode;
    if (Fh() && a.callbackNode !== c) return null;
    var d = wc(a, a === F ? X2 : 0);
    if (0 === d) return null;
    if (0 !== (d & 30) || 0 !== (d & a.expiredLanes) || b) b = Gh(a, d);
    else {
      b = d;
      var e = G;
      G |= 2;
      var f2 = Hh();
      if (F !== a || X2 !== b) sh(), Ih(a, b);
      do
        try {
          Jh();
          break;
        } catch (h2) {
          Kh(a, h2);
        }
      while (1);
      fd();
      mh.current = f2;
      G = e;
      null !== W3 ? b = 0 : (F = null, X2 = 0, b = Q2);
    }
    if (0 !== b) {
      2 === b && (e = zc(a), 0 !== e && (d = e, b = Lh(a, e)));
      if (1 === b) throw c = oh, Ih(a, 0), Bh(a, d), Z(a, E2()), c;
      if (6 === b) Bh(a, d);
      else {
        e = a.current.alternate;
        if (0 === (d & 30) && !Mh(e) && (b = Gh(a, d), 2 === b && (f2 = zc(a), 0 !== f2 && (d = f2, b = Lh(a, f2))), 1 === b)) throw c = oh, Ih(a, 0), Bh(a, d), Z(a, E2()), c;
        a.finishedWork = e;
        a.finishedLanes = d;
        switch (b) {
          case 0:
          case 1:
            throw Error(n(345));
          case 2:
            Nh(a, Y);
            break;
          case 3:
            Bh(a, d);
            if ((d & 130023424) === d && (b = Vg + 500 - E2(), 10 < b)) {
              if (0 !== wc(a, 0)) break;
              e = a.suspendedLanes;
              if ((e & d) !== d) {
                H2();
                a.pingedLanes |= a.suspendedLanes & e;
                break;
              }
              a.timeoutHandle = Qa(Nh.bind(null, a, Y), b);
              break;
            }
            Nh(a, Y);
            break;
          case 4:
            Bh(a, d);
            if ((d & 4194240) === d) break;
            b = a.eventTimes;
            for (e = -1; 0 < d; ) {
              var g3 = 31 - qc(d);
              f2 = 1 << g3;
              g3 = b[g3];
              g3 > e && (e = g3);
              d &= ~f2;
            }
            d = e;
            d = E2() - d;
            d = (120 > d ? 120 : 480 > d ? 480 : 1080 > d ? 1080 : 1920 > d ? 1920 : 3e3 > d ? 3e3 : 4320 > d ? 4320 : 1960 * lh(d / 1960)) - d;
            if (10 < d) {
              a.timeoutHandle = Qa(Nh.bind(null, a, Y), d);
              break;
            }
            Nh(a, Y);
            break;
          case 5:
            Nh(a, Y);
            break;
          default:
            throw Error(n(329));
        }
      }
    }
    Z(a, E2());
    return a.callbackNode === c ? Eh.bind(null, a) : null;
  }
  function Lh(a, b) {
    var c = rh;
    a.current.memoizedState.isDehydrated && (Ih(a, b).flags |= 256);
    a = Gh(a, b);
    2 !== a && (b = Y, Y = c, null !== b && Sf(b));
    return a;
  }
  function Sf(a) {
    null === Y ? Y = a : Y.push.apply(Y, a);
  }
  function Mh(a) {
    for (var b = a; ; ) {
      if (b.flags & 16384) {
        var c = b.updateQueue;
        if (null !== c && (c = c.stores, null !== c)) for (var d = 0; d < c.length; d++) {
          var e = c[d], f2 = e.getSnapshot;
          e = e.value;
          try {
            if (!Rc(f2(), e)) return false;
          } catch (g3) {
            return false;
          }
        }
      }
      c = b.child;
      if (b.subtreeFlags & 16384 && null !== c) c.return = b, b = c;
      else {
        if (b === a) break;
        for (; null === b.sibling; ) {
          if (null === b.return || b.return === a) return true;
          b = b.return;
        }
        b.sibling.return = b.return;
        b = b.sibling;
      }
    }
    return true;
  }
  function Bh(a, b) {
    b &= ~qh;
    b &= ~ph;
    a.suspendedLanes |= b;
    a.pingedLanes &= ~b;
    for (a = a.expirationTimes; 0 < b; ) {
      var c = 31 - qc(b), d = 1 << c;
      a[c] = -1;
      b &= ~d;
    }
  }
  function Ch(a) {
    if (0 !== (G & 6)) throw Error(n(327));
    Fh();
    var b = wc(a, 0);
    if (0 === (b & 1)) return Z(a, E2()), null;
    var c = Gh(a, b);
    if (0 !== a.tag && 2 === c) {
      var d = zc(a);
      0 !== d && (b = d, c = Lh(a, d));
    }
    if (1 === c) throw c = oh, Ih(a, 0), Bh(a, b), Z(a, E2()), c;
    if (6 === c) throw Error(n(345));
    a.finishedWork = a.current.alternate;
    a.finishedLanes = b;
    Nh(a, Y);
    Z(a, E2());
    return null;
  }
  function Oh(a) {
    null !== uh && 0 === uh.tag && 0 === (G & 6) && Fh();
    var b = G;
    G |= 1;
    var c = U2.transition, d = D2;
    try {
      if (U2.transition = null, D2 = 1, a) return a();
    } finally {
      D2 = d, U2.transition = c, G = b, 0 === (G & 6) && Xc();
    }
  }
  function Vf() {
    Wf = eg.current;
    x(eg);
  }
  function Ih(a, b) {
    a.finishedWork = null;
    a.finishedLanes = 0;
    var c = a.timeoutHandle;
    c !== Sa && (a.timeoutHandle = Sa, Ra(c));
    if (null !== W3) for (c = W3.return; null !== c; ) {
      var d = c;
      Sd(d);
      switch (d.tag) {
        case 1:
          d = d.type.childContextTypes;
          null !== d && void 0 !== d && kc();
          break;
        case 3:
          we();
          x(B);
          x(A);
          Be();
          break;
        case 5:
          ye(d);
          break;
        case 4:
          we();
          break;
        case 13:
          x(J2);
          break;
        case 19:
          x(J2);
          break;
        case 10:
          hd(d.type._context);
          break;
        case 22:
        case 23:
          Vf();
      }
      c = c.return;
    }
    F = a;
    W3 = a = je(a.current, null);
    X2 = Wf = b;
    Q2 = 0;
    oh = null;
    qh = ph = vd = 0;
    Y = rh = null;
    if (null !== md) {
      for (b = 0; b < md.length; b++) if (c = md[b], d = c.interleaved, null !== d) {
        c.interleaved = null;
        var e = d.next, f2 = c.pending;
        if (null !== f2) {
          var g3 = f2.next;
          f2.next = e;
          d.next = g3;
        }
        c.pending = d;
      }
      md = null;
    }
    return a;
  }
  function Kh(a, b) {
    do {
      var c = W3;
      try {
        fd();
        Ce.current = Oe;
        if (Fe) {
          for (var d = K2.memoizedState; null !== d; ) {
            var e = d.queue;
            null !== e && (e.pending = null);
            d = d.next;
          }
          Fe = false;
        }
        Ee = 0;
        M3 = L2 = K2 = null;
        Ge = false;
        He = 0;
        nh.current = null;
        if (null === c || null === c.return) {
          Q2 = 1;
          oh = b;
          W3 = null;
          break;
        }
        a: {
          var f2 = a, g3 = c.return, h2 = c, k3 = b;
          b = X2;
          h2.flags |= 32768;
          if (null !== k3 && "object" === typeof k3 && "function" === typeof k3.then) {
            var l = k3, m = h2, v = m.tag;
            if (0 === (m.mode & 1) && (0 === v || 11 === v || 15 === v)) {
              var r = m.alternate;
              r ? (m.updateQueue = r.updateQueue, m.memoizedState = r.memoizedState, m.lanes = r.lanes) : (m.updateQueue = null, m.memoizedState = null);
            }
            var z = Hf(g3);
            if (null !== z) {
              z.flags &= -257;
              If(z, g3, h2, f2, b);
              z.mode & 1 && Ff(f2, l, b);
              b = z;
              k3 = l;
              var q = b.updateQueue;
              if (null === q) {
                var N2 = /* @__PURE__ */ new Set();
                N2.add(k3);
                b.updateQueue = N2;
              } else q.add(k3);
              break a;
            } else {
              if (0 === (b & 1)) {
                Ff(f2, l, b);
                Tf();
                break a;
              }
              k3 = Error(n(426));
            }
          } else if (I2 && h2.mode & 1) {
            var da = Hf(g3);
            if (null !== da) {
              0 === (da.flags & 65536) && (da.flags |= 256);
              If(da, g3, h2, f2, b);
              ee(k3);
              break a;
            }
          }
          f2 = k3;
          4 !== Q2 && (Q2 = 2);
          null === rh ? rh = [f2] : rh.push(f2);
          k3 = xf(k3, h2);
          h2 = g3;
          do {
            switch (h2.tag) {
              case 3:
                h2.flags |= 65536;
                b &= -b;
                h2.lanes |= b;
                var t = Af(h2, k3, b);
                td(h2, t);
                break a;
              case 1:
                f2 = k3;
                var w = h2.type, u2 = h2.stateNode;
                if (0 === (h2.flags & 128) && ("function" === typeof w.getDerivedStateFromError || null !== u2 && "function" === typeof u2.componentDidCatch && (null === Ef || !Ef.has(u2)))) {
                  h2.flags |= 65536;
                  b &= -b;
                  h2.lanes |= b;
                  var V2 = Df(h2, f2, b);
                  td(h2, V2);
                  break a;
                }
            }
            h2 = h2.return;
          } while (null !== h2);
        }
        Ph(c);
      } catch (wa) {
        b = wa;
        W3 === c && null !== c && (W3 = c = c.return);
        continue;
      }
      break;
    } while (1);
  }
  function Hh() {
    var a = mh.current;
    mh.current = Oe;
    return null === a ? Oe : a;
  }
  function Tf() {
    if (0 === Q2 || 3 === Q2 || 2 === Q2) Q2 = 4;
    null === F || 0 === (vd & 268435455) && 0 === (ph & 268435455) || Bh(F, X2);
  }
  function Gh(a, b) {
    var c = G;
    G |= 2;
    var d = Hh();
    F === a && X2 === b || Ih(a, b);
    do
      try {
        Qh();
        break;
      } catch (e) {
        Kh(a, e);
      }
    while (1);
    fd();
    G = c;
    mh.current = d;
    if (null !== W3) throw Error(n(261));
    F = null;
    X2 = 0;
    return Q2;
  }
  function Qh() {
    for (; null !== W3; ) Rh(W3);
  }
  function Jh() {
    for (; null !== W3 && !Hc(); ) Rh(W3);
  }
  function Rh(a) {
    var b = Sh(a.alternate, a, Wf);
    a.memoizedProps = a.pendingProps;
    null === b ? Ph(a) : W3 = b;
    nh.current = null;
  }
  function Ph(a) {
    var b = a;
    do {
      var c = b.alternate;
      a = b.return;
      if (0 === (b.flags & 32768)) {
        if (c = Rf(c, b, Wf), null !== c) {
          W3 = c;
          return;
        }
      } else {
        c = xg(c, b);
        if (null !== c) {
          c.flags &= 32767;
          W3 = c;
          return;
        }
        if (null !== a) a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null;
        else {
          Q2 = 6;
          W3 = null;
          return;
        }
      }
      b = b.sibling;
      if (null !== b) {
        W3 = b;
        return;
      }
      W3 = b = a;
    } while (null !== b);
    0 === Q2 && (Q2 = 5);
  }
  function Nh(a, b) {
    var c = D2, d = U2.transition;
    try {
      U2.transition = null, D2 = 1, Th(a, b, c);
    } finally {
      U2.transition = d, D2 = c;
    }
    return null;
  }
  function Th(a, b, c) {
    do
      Fh();
    while (null !== uh);
    if (0 !== (G & 6)) throw Error(n(327));
    var d = a.finishedWork, e = a.finishedLanes;
    if (null === d) return null;
    a.finishedWork = null;
    a.finishedLanes = 0;
    if (d === a.current) throw Error(n(177));
    a.callbackNode = null;
    a.callbackPriority = 0;
    var f2 = d.lanes | d.childLanes;
    Cc(a, f2);
    a === F && (W3 = F = null, X2 = 0);
    0 === (d.subtreeFlags & 2064) && 0 === (d.flags & 2064) || th || (th = true, Dh(Lc, function() {
      Fh();
      return null;
    }));
    f2 = 0 !== (d.flags & 15990);
    if (0 !== (d.subtreeFlags & 15990) || f2) {
      f2 = U2.transition;
      U2.transition = null;
      var g3 = D2;
      D2 = 1;
      var h2 = G;
      G |= 4;
      nh.current = null;
      Eg(a, d);
      Ug(a, d, e);
      Ja(a.containerInfo);
      a.current = d;
      Xg(d, a, e);
      Ic();
      G = h2;
      D2 = g3;
      U2.transition = f2;
    } else a.current = d;
    th && (th = false, uh = a, vh = e);
    f2 = a.pendingLanes;
    0 === f2 && (Ef = null);
    Pc(d.stateNode, c);
    Z(a, E2());
    if (null !== b) for (c = a.onRecoverableError, d = 0; d < b.length; d++) c(b[d]);
    if (Bf) throw Bf = false, a = Cf, Cf = null, a;
    0 !== (vh & 1) && 0 !== a.tag && Fh();
    f2 = a.pendingLanes;
    0 !== (f2 & 1) ? a === xh ? wh++ : (wh = 0, xh = a) : wh = 0;
    Xc();
    return null;
  }
  function Fh() {
    if (null !== uh) {
      var a = Ec(vh), b = U2.transition, c = D2;
      try {
        U2.transition = null;
        D2 = 16 > a ? 16 : a;
        if (null === uh) var d = false;
        else {
          a = uh;
          uh = null;
          vh = 0;
          if (0 !== (G & 6)) throw Error(n(331));
          var e = G;
          G |= 4;
          for (S2 = a.current; null !== S2; ) {
            var f2 = S2, g3 = f2.child;
            if (0 !== (S2.flags & 16)) {
              var h2 = f2.deletions;
              if (null !== h2) {
                for (var k3 = 0; k3 < h2.length; k3++) {
                  var l = h2[k3];
                  for (S2 = l; null !== S2; ) {
                    var m = S2;
                    switch (m.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Fg(8, m, f2);
                    }
                    var v = m.child;
                    if (null !== v) v.return = m, S2 = v;
                    else for (; null !== S2; ) {
                      m = S2;
                      var r = m.sibling, z = m.return;
                      Lg(m);
                      if (m === l) {
                        S2 = null;
                        break;
                      }
                      if (null !== r) {
                        r.return = z;
                        S2 = r;
                        break;
                      }
                      S2 = z;
                    }
                  }
                }
                var q = f2.alternate;
                if (null !== q) {
                  var N2 = q.child;
                  if (null !== N2) {
                    q.child = null;
                    do {
                      var da = N2.sibling;
                      N2.sibling = null;
                      N2 = da;
                    } while (null !== N2);
                  }
                }
                S2 = f2;
              }
            }
            if (0 !== (f2.subtreeFlags & 2064) && null !== g3) g3.return = f2, S2 = g3;
            else b: for (; null !== S2; ) {
              f2 = S2;
              if (0 !== (f2.flags & 2048)) switch (f2.tag) {
                case 0:
                case 11:
                case 15:
                  Fg(9, f2, f2.return);
              }
              var t = f2.sibling;
              if (null !== t) {
                t.return = f2.return;
                S2 = t;
                break b;
              }
              S2 = f2.return;
            }
          }
          var w = a.current;
          for (S2 = w; null !== S2; ) {
            g3 = S2;
            var u2 = g3.child;
            if (0 !== (g3.subtreeFlags & 2064) && null !== u2) u2.return = g3, S2 = u2;
            else b: for (g3 = w; null !== S2; ) {
              h2 = S2;
              if (0 !== (h2.flags & 2048)) try {
                switch (h2.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Gg(9, h2);
                }
              } catch (wa) {
                T3(h2, h2.return, wa);
              }
              if (h2 === g3) {
                S2 = null;
                break b;
              }
              var V2 = h2.sibling;
              if (null !== V2) {
                V2.return = h2.return;
                S2 = V2;
                break b;
              }
              S2 = h2.return;
            }
          }
          G = e;
          Xc();
          if (Oc && "function" === typeof Oc.onPostCommitFiberRoot) try {
            Oc.onPostCommitFiberRoot(Nc, a);
          } catch (wa) {
          }
          d = true;
        }
        return d;
      } finally {
        D2 = c, U2.transition = b;
      }
    }
    return false;
  }
  function Uh(a, b, c) {
    b = xf(c, b);
    b = Af(a, b, 1);
    rd(a, b);
    b = H2();
    a = Ah(a, 1);
    null !== a && (Bc(a, 1, b), Z(a, b));
  }
  function T3(a, b, c) {
    if (3 === a.tag) Uh(a, a, c);
    else for (; null !== b; ) {
      if (3 === b.tag) {
        Uh(b, a, c);
        break;
      } else if (1 === b.tag) {
        var d = b.stateNode;
        if ("function" === typeof b.type.getDerivedStateFromError || "function" === typeof d.componentDidCatch && (null === Ef || !Ef.has(d))) {
          a = xf(c, a);
          a = Df(b, a, 1);
          rd(b, a);
          a = H2();
          b = Ah(b, 1);
          null !== b && (Bc(b, 1, a), Z(b, a));
          break;
        }
      }
      b = b.return;
    }
  }
  function Gf(a, b, c) {
    var d = a.pingCache;
    null !== d && d.delete(b);
    b = H2();
    a.pingedLanes |= a.suspendedLanes & c;
    F === a && (X2 & c) === c && (4 === Q2 || 3 === Q2 && (X2 & 130023424) === X2 && 500 > E2() - Vg ? Ih(a, 0) : qh |= c);
    Z(a, b);
  }
  function Vh(a, b) {
    0 === b && (0 === (a.mode & 1) ? b = 1 : (b = uc, uc <<= 1, 0 === (uc & 130023424) && (uc = 4194304)));
    var c = H2();
    a = Ah(a, b);
    null !== a && (Bc(a, b, c), Z(a, c));
  }
  function qg(a) {
    var b = a.memoizedState, c = 0;
    null !== b && (c = b.retryLane);
    Vh(a, c);
  }
  function Tg(a, b) {
    var c = 0;
    switch (a.tag) {
      case 13:
        var d = a.stateNode;
        var e = a.memoizedState;
        null !== e && (c = e.retryLane);
        break;
      case 19:
        d = a.stateNode;
        break;
      default:
        throw Error(n(314));
    }
    null !== d && d.delete(b);
    Vh(a, c);
  }
  var Sh;
  Sh = function(a, b, c) {
    if (null !== a) if (a.memoizedProps !== b.pendingProps || B.current) kd = true;
    else {
      if (0 === (a.lanes & c) && 0 === (b.flags & 128)) return kd = false, wg(a, b, c);
      kd = 0 !== (a.flags & 131072) ? true : false;
    }
    else kd = false, I2 && 0 !== (b.flags & 1048576) && Qd(b, Jd, b.index);
    b.lanes = 0;
    switch (b.tag) {
      case 2:
        var d = b.type;
        null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2);
        a = b.pendingProps;
        var e = jc(b, A.current);
        jd(b, c);
        e = Ke(null, b, d, a, e, c);
        var f2 = Pe();
        b.flags |= 1;
        "object" === typeof e && null !== e && "function" === typeof e.render && void 0 === e.$$typeof ? (b.tag = 1, b.memoizedState = null, b.updateQueue = null, C(d) ? (f2 = true, nc(b)) : f2 = false, b.memoizedState = null !== e.state && void 0 !== e.state ? e.state : null, od(b), e.updater = Bd, b.stateNode = e, e._reactInternals = b, Fd(b, d, a, c), b = hg(null, b, d, true, f2, c)) : (b.tag = 0, I2 && f2 && Rd(b), R2(null, b, e, c), b = b.child);
        return b;
      case 16:
        d = b.elementType;
        a: {
          null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2);
          a = b.pendingProps;
          e = d._init;
          d = e(d._payload);
          b.type = d;
          e = b.tag = Wh(d);
          a = ad(d, a);
          switch (e) {
            case 0:
              b = cg(null, b, d, a, c);
              break a;
            case 1:
              b = gg(
                null,
                b,
                d,
                a,
                c
              );
              break a;
            case 11:
              b = Yf(null, b, d, a, c);
              break a;
            case 14:
              b = $f(null, b, d, ad(d.type, a), c);
              break a;
          }
          throw Error(n(306, d, ""));
        }
        return b;
      case 0:
        return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : ad(d, e), cg(a, b, d, e, c);
      case 1:
        return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : ad(d, e), gg(a, b, d, e, c);
      case 3:
        a: {
          ig(b);
          if (null === a) throw Error(n(387));
          d = b.pendingProps;
          f2 = b.memoizedState;
          e = f2.element;
          pd(a, b);
          ud(b, d, null, c);
          var g3 = b.memoizedState;
          d = g3.element;
          if (p2 && f2.isDehydrated) if (f2 = {
            element: d,
            isDehydrated: false,
            cache: g3.cache,
            transitions: g3.transitions
          }, b.updateQueue.baseState = f2, b.memoizedState = f2, b.flags & 256) {
            e = Error(n(423));
            b = jg(a, b, d, c, e);
            break a;
          } else if (d !== e) {
            e = Error(n(424));
            b = jg(a, b, d, c, e);
            break a;
          } else for (p2 && (Ud = Nb(b.stateNode.containerInfo), Td = b, I2 = true, Wd = null, Vd = false), c = pe(b, null, d, c), b.child = c; c; ) c.flags = c.flags & -3 | 4096, c = c.sibling;
          else {
            de();
            if (d === e) {
              b = Zf(a, b, c);
              break a;
            }
            R2(a, b, d, c);
          }
          b = b.child;
        }
        return b;
      case 5:
        return xe(b), null === a && ae(b), d = b.type, e = b.pendingProps, f2 = null !== a ? a.memoizedProps : null, g3 = e.children, Oa(d, e) ? g3 = null : null !== f2 && Oa(d, f2) && (b.flags |= 32), fg(a, b), R2(a, b, g3, c), b.child;
      case 6:
        return null === a && ae(b), null;
      case 13:
        return mg(a, b, c);
      case 4:
        return ve(b, b.stateNode.containerInfo), d = b.pendingProps, null === a ? b.child = oe(b, null, d, c) : R2(a, b, d, c), b.child;
      case 11:
        return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : ad(d, e), Yf(a, b, d, e, c);
      case 7:
        return R2(a, b, b.pendingProps, c), b.child;
      case 8:
        return R2(a, b, b.pendingProps.children, c), b.child;
      case 12:
        return R2(a, b, b.pendingProps.children, c), b.child;
      case 10:
        a: {
          d = b.type._context;
          e = b.pendingProps;
          f2 = b.memoizedProps;
          g3 = e.value;
          gd(b, d, g3);
          if (null !== f2) if (Rc(f2.value, g3)) {
            if (f2.children === e.children && !B.current) {
              b = Zf(a, b, c);
              break a;
            }
          } else for (f2 = b.child, null !== f2 && (f2.return = b); null !== f2; ) {
            var h2 = f2.dependencies;
            if (null !== h2) {
              g3 = f2.child;
              for (var k3 = h2.firstContext; null !== k3; ) {
                if (k3.context === d) {
                  if (1 === f2.tag) {
                    k3 = qd(-1, c & -c);
                    k3.tag = 2;
                    var l = f2.updateQueue;
                    if (null !== l) {
                      l = l.shared;
                      var m = l.pending;
                      null === m ? k3.next = k3 : (k3.next = m.next, m.next = k3);
                      l.pending = k3;
                    }
                  }
                  f2.lanes |= c;
                  k3 = f2.alternate;
                  null !== k3 && (k3.lanes |= c);
                  id(f2.return, c, b);
                  h2.lanes |= c;
                  break;
                }
                k3 = k3.next;
              }
            } else if (10 === f2.tag) g3 = f2.type === b.type ? null : f2.child;
            else if (18 === f2.tag) {
              g3 = f2.return;
              if (null === g3) throw Error(n(341));
              g3.lanes |= c;
              h2 = g3.alternate;
              null !== h2 && (h2.lanes |= c);
              id(g3, c, b);
              g3 = f2.sibling;
            } else g3 = f2.child;
            if (null !== g3) g3.return = f2;
            else for (g3 = f2; null !== g3; ) {
              if (g3 === b) {
                g3 = null;
                break;
              }
              f2 = g3.sibling;
              if (null !== f2) {
                f2.return = g3.return;
                g3 = f2;
                break;
              }
              g3 = g3.return;
            }
            f2 = g3;
          }
          R2(a, b, e.children, c);
          b = b.child;
        }
        return b;
      case 9:
        return e = b.type, d = b.pendingProps.children, jd(b, c), e = ld(e), d = d(e), b.flags |= 1, R2(a, b, d, c), b.child;
      case 14:
        return d = b.type, e = ad(d, b.pendingProps), e = ad(d.type, e), $f(a, b, d, e, c);
      case 15:
        return bg(a, b, b.type, b.pendingProps, c);
      case 17:
        return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : ad(d, e), null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2), b.tag = 1, C(d) ? (a = true, nc(b)) : a = false, jd(b, c), Dd(b, d, e), Fd(b, d, e, c), hg(null, b, d, true, a, c);
      case 19:
        return vg(a, b, c);
      case 22:
        return dg(a, b, c);
    }
    throw Error(n(156, b.tag));
  };
  function Dh(a, b) {
    return Fc(a, b);
  }
  function Xh(a, b, c, d) {
    this.tag = a;
    this.key = c;
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
    this.index = 0;
    this.ref = null;
    this.pendingProps = b;
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
    this.mode = d;
    this.subtreeFlags = this.flags = 0;
    this.deletions = null;
    this.childLanes = this.lanes = 0;
    this.alternate = null;
  }
  function Yd(a, b, c, d) {
    return new Xh(a, b, c, d);
  }
  function ag(a) {
    a = a.prototype;
    return !(!a || !a.isReactComponent);
  }
  function Wh(a) {
    if ("function" === typeof a) return ag(a) ? 1 : 0;
    if (void 0 !== a && null !== a) {
      a = a.$$typeof;
      if (a === na) return 11;
      if (a === qa) return 14;
    }
    return 2;
  }
  function je(a, b) {
    var c = a.alternate;
    null === c ? (c = Yd(a.tag, b, a.key, a.mode), c.elementType = a.elementType, c.type = a.type, c.stateNode = a.stateNode, c.alternate = a, a.alternate = c) : (c.pendingProps = b, c.type = a.type, c.flags = 0, c.subtreeFlags = 0, c.deletions = null);
    c.flags = a.flags & 14680064;
    c.childLanes = a.childLanes;
    c.lanes = a.lanes;
    c.child = a.child;
    c.memoizedProps = a.memoizedProps;
    c.memoizedState = a.memoizedState;
    c.updateQueue = a.updateQueue;
    b = a.dependencies;
    c.dependencies = null === b ? null : { lanes: b.lanes, firstContext: b.firstContext };
    c.sibling = a.sibling;
    c.index = a.index;
    c.ref = a.ref;
    return c;
  }
  function le(a, b, c, d, e, f2) {
    var g3 = 2;
    d = a;
    if ("function" === typeof a) ag(a) && (g3 = 1);
    else if ("string" === typeof a) g3 = 5;
    else a: switch (a) {
      case ia:
        return ne(c.children, e, f2, b);
      case ja:
        g3 = 8;
        e |= 8;
        break;
      case ka:
        return a = Yd(12, c, b, e | 2), a.elementType = ka, a.lanes = f2, a;
      case oa:
        return a = Yd(13, c, b, e), a.elementType = oa, a.lanes = f2, a;
      case pa:
        return a = Yd(19, c, b, e), a.elementType = pa, a.lanes = f2, a;
      case sa:
        return ng(c, e, f2, b);
      default:
        if ("object" === typeof a && null !== a) switch (a.$$typeof) {
          case la:
            g3 = 10;
            break a;
          case ma:
            g3 = 9;
            break a;
          case na:
            g3 = 11;
            break a;
          case qa:
            g3 = 14;
            break a;
          case ra:
            g3 = 16;
            d = null;
            break a;
        }
        throw Error(n(130, null == a ? a : typeof a, ""));
    }
    b = Yd(g3, c, b, e);
    b.elementType = a;
    b.type = d;
    b.lanes = f2;
    return b;
  }
  function ne(a, b, c, d) {
    a = Yd(7, a, d, b);
    a.lanes = c;
    return a;
  }
  function ng(a, b, c, d) {
    a = Yd(22, a, d, b);
    a.elementType = sa;
    a.lanes = c;
    a.stateNode = {};
    return a;
  }
  function ke(a, b, c) {
    a = Yd(6, a, null, b);
    a.lanes = c;
    return a;
  }
  function me(a, b, c) {
    b = Yd(4, null !== a.children ? a.children : [], a.key, b);
    b.lanes = c;
    b.stateNode = { containerInfo: a.containerInfo, pendingChildren: null, implementation: a.implementation };
    return b;
  }
  function Yh(a, b, c, d, e) {
    this.tag = b;
    this.containerInfo = a;
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
    this.timeoutHandle = Sa;
    this.callbackNode = this.pendingContext = this.context = null;
    this.callbackPriority = 0;
    this.eventTimes = Ac(0);
    this.expirationTimes = Ac(-1);
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
    this.entanglements = Ac(0);
    this.identifierPrefix = d;
    this.onRecoverableError = e;
    p2 && (this.mutableSourceEagerHydrationData = null);
  }
  function Zh(a, b, c, d, e, f2, g3, h2, k3) {
    a = new Yh(a, b, c, h2, k3);
    1 === b ? (b = 1, true === f2 && (b |= 8)) : b = 0;
    f2 = Yd(3, null, null, b);
    a.current = f2;
    f2.stateNode = a;
    f2.memoizedState = { element: d, isDehydrated: c, cache: null, transitions: null };
    od(f2);
    return a;
  }
  function $h(a) {
    if (!a) return hc;
    a = a._reactInternals;
    a: {
      if (ya(a) !== a || 1 !== a.tag) throw Error(n(170));
      var b = a;
      do {
        switch (b.tag) {
          case 3:
            b = b.stateNode.context;
            break a;
          case 1:
            if (C(b.type)) {
              b = b.stateNode.__reactInternalMemoizedMergedChildContext;
              break a;
            }
        }
        b = b.return;
      } while (null !== b);
      throw Error(n(171));
    }
    if (1 === a.tag) {
      var c = a.type;
      if (C(c)) return mc(a, c, b);
    }
    return b;
  }
  function ai(a) {
    var b = a._reactInternals;
    if (void 0 === b) {
      if ("function" === typeof a.render) throw Error(n(188));
      a = Object.keys(a).join(",");
      throw Error(n(268, a));
    }
    a = Ba(b);
    return null === a ? null : a.stateNode;
  }
  function bi(a, b) {
    a = a.memoizedState;
    if (null !== a && null !== a.dehydrated) {
      var c = a.retryLane;
      a.retryLane = 0 !== c && c < b ? c : b;
    }
  }
  function ci(a, b) {
    bi(a, b);
    (a = a.alternate) && bi(a, b);
  }
  function di(a) {
    a = Ba(a);
    return null === a ? null : a.stateNode;
  }
  function ei() {
    return null;
  }
  exports6.attemptContinuousHydration = function(a) {
    if (13 === a.tag) {
      var b = H2();
      Ad(a, 134217728, b);
      ci(a, 134217728);
    }
  };
  exports6.attemptHydrationAtCurrentPriority = function(a) {
    if (13 === a.tag) {
      var b = H2(), c = zd(a);
      Ad(a, c, b);
      ci(a, c);
    }
  };
  exports6.attemptSynchronousHydration = function(a) {
    switch (a.tag) {
      case 3:
        var b = a.stateNode;
        if (b.current.memoizedState.isDehydrated) {
          var c = vc(b.pendingLanes);
          0 !== c && (Dc(b, c | 1), Z(b, E2()), 0 === (G & 6) && (sh(), Xc()));
        }
        break;
      case 13:
        var d = H2();
        Oh(function() {
          return Ad(a, 1, d);
        });
        ci(a, 1);
    }
  };
  exports6.batchedUpdates = function(a, b) {
    var c = G;
    G |= 1;
    try {
      return a(b);
    } finally {
      G = c, 0 === G && (sh(), Tc && Xc());
    }
  };
  exports6.createComponentSelector = function(a) {
    return { $$typeof: ah, value: a };
  };
  exports6.createContainer = function(a, b, c, d, e, f2, g3) {
    return Zh(a, b, false, null, c, d, e, f2, g3);
  };
  exports6.createHasPseudoClassSelector = function(a) {
    return { $$typeof: bh, value: a };
  };
  exports6.createHydrationContainer = function(a, b, c, d, e, f2, g3, h2, k3) {
    a = Zh(c, d, true, a, e, f2, g3, h2, k3);
    a.context = $h(null);
    c = a.current;
    d = H2();
    e = zd(c);
    f2 = qd(d, e);
    f2.callback = void 0 !== b && null !== b ? b : null;
    rd(c, f2);
    a.current.lanes = e;
    Bc(a, e, d);
    Z(a, d);
    return a;
  };
  exports6.createPortal = function(a, b, c) {
    var d = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
    return { $$typeof: ha, key: null == d ? null : "" + d, children: a, containerInfo: b, implementation: c };
  };
  exports6.createRoleSelector = function(a) {
    return { $$typeof: ch, value: a };
  };
  exports6.createTestNameSelector = function(a) {
    return { $$typeof: dh, value: a };
  };
  exports6.createTextSelector = function(a) {
    return { $$typeof: eh, value: a };
  };
  exports6.deferredUpdates = function(a) {
    var b = D2, c = U2.transition;
    try {
      return U2.transition = null, D2 = 16, a();
    } finally {
      D2 = b, U2.transition = c;
    }
  };
  exports6.discreteUpdates = function(a, b, c, d, e) {
    var f2 = D2, g3 = U2.transition;
    try {
      return U2.transition = null, D2 = 1, a(b, c, d, e);
    } finally {
      D2 = f2, U2.transition = g3, 0 === G && sh();
    }
  };
  exports6.findAllNodes = kh;
  exports6.findBoundingRects = function(a, b) {
    if (!bb) throw Error(n(363));
    b = kh(a, b);
    a = [];
    for (var c = 0; c < b.length; c++) a.push(db(b[c]));
    for (b = a.length - 1; 0 < b; b--) {
      c = a[b];
      for (var d = c.x, e = d + c.width, f2 = c.y, g3 = f2 + c.height, h2 = b - 1; 0 <= h2; h2--) if (b !== h2) {
        var k3 = a[h2], l = k3.x, m = l + k3.width, v = k3.y, r = v + k3.height;
        if (d >= l && f2 >= v && e <= m && g3 <= r) {
          a.splice(b, 1);
          break;
        } else if (!(d !== l || c.width !== k3.width || r < f2 || v > g3)) {
          v > f2 && (k3.height += v - f2, k3.y = f2);
          r < g3 && (k3.height = g3 - v);
          a.splice(b, 1);
          break;
        } else if (!(f2 !== v || c.height !== k3.height || m < d || l > e)) {
          l > d && (k3.width += l - d, k3.x = d);
          m < e && (k3.width = e - l);
          a.splice(b, 1);
          break;
        }
      }
    }
    return a;
  };
  exports6.findHostInstance = ai;
  exports6.findHostInstanceWithNoPortals = function(a) {
    a = Aa(a);
    a = null !== a ? Da(a) : null;
    return null === a ? null : a.stateNode;
  };
  exports6.findHostInstanceWithWarning = function(a) {
    return ai(a);
  };
  exports6.flushControlled = function(a) {
    var b = G;
    G |= 1;
    var c = U2.transition, d = D2;
    try {
      U2.transition = null, D2 = 1, a();
    } finally {
      D2 = d, U2.transition = c, G = b, 0 === G && (sh(), Xc());
    }
  };
  exports6.flushPassiveEffects = Fh;
  exports6.flushSync = Oh;
  exports6.focusWithin = function(a, b) {
    if (!bb) throw Error(n(363));
    a = gh(a);
    b = jh(a, b);
    b = Array.from(b);
    for (a = 0; a < b.length; ) {
      var c = b[a++];
      if (!fb(c)) {
        if (5 === c.tag && hb(c.stateNode)) return true;
        for (c = c.child; null !== c; ) b.push(c), c = c.sibling;
      }
    }
    return false;
  };
  exports6.getCurrentUpdatePriority = function() {
    return D2;
  };
  exports6.getFindAllNodesFailureDescription = function(a, b) {
    if (!bb) throw Error(n(363));
    var c = 0, d = [];
    a = [gh(a), 0];
    for (var e = 0; e < a.length; ) {
      var f2 = a[e++], g3 = a[e++], h2 = b[g3];
      if (5 !== f2.tag || !fb(f2)) {
        if (hh(f2, h2) && (d.push(ih(h2)), g3++, g3 > c && (c = g3)), g3 < b.length) for (f2 = f2.child; null !== f2; ) a.push(f2, g3), f2 = f2.sibling;
      }
    }
    if (c < b.length) {
      for (a = []; c < b.length; c++) a.push(ih(b[c]));
      return "findAllNodes was able to match part of the selector:\n  " + (d.join(" > ") + "\n\nNo matching component was found for:\n  ") + a.join(" > ");
    }
    return null;
  };
  exports6.getPublicRootInstance = function(a) {
    a = a.current;
    if (!a.child) return null;
    switch (a.child.tag) {
      case 5:
        return Fa(a.child.stateNode);
      default:
        return a.child.stateNode;
    }
  };
  exports6.injectIntoDevTools = function(a) {
    a = { bundleType: a.bundleType, version: a.version, rendererPackageName: a.rendererPackageName, rendererConfig: a.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ea.ReactCurrentDispatcher, findHostInstanceByFiber: di, findFiberByHostInstance: a.findFiberByHostInstance || ei, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.0.0-fc46dba67-20220329" };
    if ("undefined" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) a = false;
    else {
      var b = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (b.isDisabled || !b.supportsFiber) a = true;
      else {
        try {
          Nc = b.inject(a), Oc = b;
        } catch (c) {
        }
        a = b.checkDCE ? true : false;
      }
    }
    return a;
  };
  exports6.isAlreadyRendering = function() {
    return false;
  };
  exports6.observeVisibleRects = function(a, b, c, d) {
    if (!bb) throw Error(n(363));
    a = kh(a, b);
    var e = ib(a, c, d).disconnect;
    return { disconnect: function() {
      e();
    } };
  };
  exports6.registerMutableSourceForHydration = function(a, b) {
    var c = b._getVersion;
    c = c(b._source);
    null == a.mutableSourceEagerHydrationData ? a.mutableSourceEagerHydrationData = [b, c] : a.mutableSourceEagerHydrationData.push(b, c);
  };
  exports6.runWithPriority = function(a, b) {
    var c = D2;
    try {
      return D2 = a, b();
    } finally {
      D2 = c;
    }
  };
  exports6.shouldError = function() {
    return null;
  };
  exports6.shouldSuspend = function() {
    return false;
  };
  exports6.updateContainer = function(a, b, c, d) {
    var e = b.current, f2 = H2(), g3 = zd(e);
    c = $h(c);
    null === b.context ? b.context = c : b.pendingContext = c;
    b = qd(f2, g3);
    b.payload = { element: a };
    d = void 0 === d ? null : d;
    null !== d && (b.callback = d);
    rd(e, b);
    a = Ad(e, g3, f2);
    null !== a && sd(a, e, g3);
    return g3;
  };
  return exports6;
};
var react_reconciler_production_min_default = module5.exports;

// ../../node_modules/.pnpm/@react-three+fiber@8.18.0_@types+react@18.2.73_react-dom@18.3.1_react@18.3.1__react@18.3.1_three@0.169.0/node_modules/@react-three/fiber/dist/events-776716bd.esm.js
var catalogue = {};
var extend = (objects) => void Object.assign(catalogue, objects);
function createRenderer(_roots, _getEventPriority) {
  function createInstance(type, _a2, root) {
    var _b2 = _a2, {
      args = [],
      attach: attach2
    } = _b2, props = __objRest(_b2, [
      "args",
      "attach"
    ]);
    let name = `${type[0].toUpperCase()}${type.slice(1)}`;
    let instance;
    if (type === "primitive") {
      if (props.object === void 0) throw new Error("R3F: Primitives without 'object' are invalid!");
      const object = props.object;
      instance = prepare(object, {
        type,
        root,
        attach: attach2,
        primitive: true
      });
    } else {
      const target = catalogue[name];
      if (!target) {
        throw new Error(`R3F: ${name} is not part of the THREE namespace! Did you forget to extend? See: https://docs.pmnd.rs/react-three-fiber/api/objects#using-3rd-party-objects-declaratively`);
      }
      if (!Array.isArray(args)) throw new Error("R3F: The args prop must be an array!");
      instance = prepare(new target(...args), {
        type,
        root,
        attach: attach2,
        // Save args in case we need to reconstruct later for HMR
        memoizedProps: {
          args
        }
      });
    }
    if (instance.__r3f.attach === void 0) {
      if (instance.isBufferGeometry) instance.__r3f.attach = "geometry";
      else if (instance.isMaterial) instance.__r3f.attach = "material";
    }
    if (name !== "inject") applyProps$1(instance, props);
    return instance;
  }
  function appendChild(parentInstance, child) {
    let added = false;
    if (child) {
      var _child$__r3f, _parentInstance$__r3f;
      if ((_child$__r3f = child.__r3f) != null && _child$__r3f.attach) {
        attach(parentInstance, child, child.__r3f.attach);
      } else if (child.isObject3D && parentInstance.isObject3D) {
        parentInstance.add(child);
        added = true;
      }
      if (!added) (_parentInstance$__r3f = parentInstance.__r3f) == null ? void 0 : _parentInstance$__r3f.objects.push(child);
      if (!child.__r3f) prepare(child, {});
      child.__r3f.parent = parentInstance;
      updateInstance(child);
      invalidateInstance(child);
    }
  }
  function insertBefore(parentInstance, child, beforeChild) {
    let added = false;
    if (child) {
      var _child$__r3f2, _parentInstance$__r3f2;
      if ((_child$__r3f2 = child.__r3f) != null && _child$__r3f2.attach) {
        attach(parentInstance, child, child.__r3f.attach);
      } else if (child.isObject3D && parentInstance.isObject3D) {
        child.parent = parentInstance;
        child.dispatchEvent({
          type: "added"
        });
        parentInstance.dispatchEvent({
          type: "childadded",
          child
        });
        const restSiblings = parentInstance.children.filter((sibling) => sibling !== child);
        const index = restSiblings.indexOf(beforeChild);
        parentInstance.children = [...restSiblings.slice(0, index), child, ...restSiblings.slice(index)];
        added = true;
      }
      if (!added) (_parentInstance$__r3f2 = parentInstance.__r3f) == null ? void 0 : _parentInstance$__r3f2.objects.push(child);
      if (!child.__r3f) prepare(child, {});
      child.__r3f.parent = parentInstance;
      updateInstance(child);
      invalidateInstance(child);
    }
  }
  function removeRecursive(array, parent, dispose2 = false) {
    if (array) [...array].forEach((child) => removeChild(parent, child, dispose2));
  }
  function removeChild(parentInstance, child, dispose2) {
    if (child) {
      var _parentInstance$__r3f3, _child$__r3f3, _child$__r3f5;
      if (child.__r3f) child.__r3f.parent = null;
      if ((_parentInstance$__r3f3 = parentInstance.__r3f) != null && _parentInstance$__r3f3.objects) parentInstance.__r3f.objects = parentInstance.__r3f.objects.filter((x) => x !== child);
      if ((_child$__r3f3 = child.__r3f) != null && _child$__r3f3.attach) {
        detach(parentInstance, child, child.__r3f.attach);
      } else if (child.isObject3D && parentInstance.isObject3D) {
        var _child$__r3f4;
        parentInstance.remove(child);
        if ((_child$__r3f4 = child.__r3f) != null && _child$__r3f4.root) {
          removeInteractivity(findInitialRoot(child), child);
        }
      }
      const isPrimitive = (_child$__r3f5 = child.__r3f) == null ? void 0 : _child$__r3f5.primitive;
      const shouldDispose = !isPrimitive && (dispose2 === void 0 ? child.dispose !== null : dispose2);
      if (!isPrimitive) {
        var _child$__r3f6;
        removeRecursive((_child$__r3f6 = child.__r3f) == null ? void 0 : _child$__r3f6.objects, child, shouldDispose);
        removeRecursive(child.children, child, shouldDispose);
      }
      delete child.__r3f;
      if (shouldDispose && child.dispose && child.type !== "Scene") {
        const callback = () => {
          try {
            child.dispose();
          } catch (e) {
          }
        };
        if (typeof IS_REACT_ACT_ENVIRONMENT === "undefined") {
          unstable_scheduleCallback(unstable_IdlePriority, callback);
        } else {
          callback();
        }
      }
      invalidateInstance(parentInstance);
    }
  }
  function switchInstance(instance, type, newProps, fiber) {
    var _instance$__r3f;
    const parent = (_instance$__r3f = instance.__r3f) == null ? void 0 : _instance$__r3f.parent;
    if (!parent) return;
    const newInstance = createInstance(type, newProps, instance.__r3f.root);
    if (instance.children) {
      for (const child of instance.children) {
        if (child.__r3f) appendChild(newInstance, child);
      }
      instance.children = instance.children.filter((child) => !child.__r3f);
    }
    instance.__r3f.objects.forEach((child) => appendChild(newInstance, child));
    instance.__r3f.objects = [];
    if (!instance.__r3f.autoRemovedBeforeAppend) {
      removeChild(parent, instance);
    }
    if (newInstance.parent) {
      newInstance.__r3f.autoRemovedBeforeAppend = true;
    }
    appendChild(parent, newInstance);
    if (newInstance.raycast && newInstance.__r3f.eventCount) {
      const rootState = findInitialRoot(newInstance).getState();
      rootState.internal.interaction.push(newInstance);
    }
    [fiber, fiber.alternate].forEach((fiber2) => {
      if (fiber2 !== null) {
        fiber2.stateNode = newInstance;
        if (fiber2.ref) {
          if (typeof fiber2.ref === "function") fiber2.ref(newInstance);
          else fiber2.ref.current = newInstance;
        }
      }
    });
  }
  const handleTextInstance = () => {
  };
  const reconciler2 = react_reconciler_production_min_default({
    createInstance,
    removeChild,
    appendChild,
    appendInitialChild: appendChild,
    insertBefore,
    supportsMutation: true,
    isPrimaryRenderer: false,
    supportsPersistence: false,
    supportsHydration: false,
    noTimeout: -1,
    appendChildToContainer: (container, child) => {
      if (!child) return;
      const scene = container.getState().scene;
      if (!scene.__r3f) return;
      scene.__r3f.root = container;
      appendChild(scene, child);
    },
    removeChildFromContainer: (container, child) => {
      if (!child) return;
      removeChild(container.getState().scene, child);
    },
    insertInContainerBefore: (container, child, beforeChild) => {
      if (!child || !beforeChild) return;
      const scene = container.getState().scene;
      if (!scene.__r3f) return;
      insertBefore(scene, child, beforeChild);
    },
    getRootHostContext: () => null,
    getChildHostContext: (parentHostContext) => parentHostContext,
    finalizeInitialChildren(instance) {
      var _instance$__r3f2;
      const localState = (_instance$__r3f2 = instance == null ? void 0 : instance.__r3f) != null ? _instance$__r3f2 : {};
      return Boolean(localState.handlers);
    },
    prepareUpdate(instance, _type, oldProps, newProps) {
      var _instance$__r3f3;
      const localState = (_instance$__r3f3 = instance == null ? void 0 : instance.__r3f) != null ? _instance$__r3f3 : {};
      if (localState.primitive && newProps.object && newProps.object !== instance) {
        return [true];
      } else {
        const _a2 = newProps, {
          args: argsNew = [],
          children: cN
        } = _a2, restNew = __objRest(_a2, [
          "args",
          "children"
        ]);
        const _b2 = oldProps, {
          args: argsOld = [],
          children: cO
        } = _b2, restOld = __objRest(_b2, [
          "args",
          "children"
        ]);
        if (!Array.isArray(argsNew)) throw new Error("R3F: the args prop must be an array!");
        if (argsNew.some((value, index) => value !== argsOld[index])) return [true];
        const diff = diffProps(instance, restNew, restOld, true);
        if (diff.changes.length) return [false, diff];
        return null;
      }
    },
    commitUpdate(instance, [reconstruct, diff], type, _oldProps, newProps, fiber) {
      if (reconstruct) switchInstance(instance, type, newProps, fiber);
      else applyProps$1(instance, diff);
    },
    commitMount(instance, _type, _props, _int) {
      var _instance$__r3f4;
      const localState = (_instance$__r3f4 = instance.__r3f) != null ? _instance$__r3f4 : {};
      if (instance.raycast && localState.handlers && localState.eventCount) {
        findInitialRoot(instance).getState().internal.interaction.push(instance);
      }
    },
    getPublicInstance: (instance) => instance,
    prepareForCommit: () => null,
    preparePortalMount: (container) => prepare(container.getState().scene),
    resetAfterCommit: () => {
    },
    shouldSetTextContent: () => false,
    clearContainer: () => false,
    hideInstance(instance) {
      var _instance$__r3f5;
      const {
        attach: type,
        parent
      } = (_instance$__r3f5 = instance.__r3f) != null ? _instance$__r3f5 : {};
      if (type && parent) detach(parent, instance, type);
      if (instance.isObject3D) instance.visible = false;
      invalidateInstance(instance);
    },
    unhideInstance(instance, props) {
      var _instance$__r3f6;
      const {
        attach: type,
        parent
      } = (_instance$__r3f6 = instance.__r3f) != null ? _instance$__r3f6 : {};
      if (type && parent) attach(parent, instance, type);
      if (instance.isObject3D && props.visible == null || props.visible) instance.visible = true;
      invalidateInstance(instance);
    },
    createTextInstance: handleTextInstance,
    hideTextInstance: handleTextInstance,
    unhideTextInstance: handleTextInstance,
    // https://github.com/pmndrs/react-three-fiber/pull/2360#discussion_r916356874
    // @ts-expect-error
    getCurrentEventPriority: () => _getEventPriority ? _getEventPriority() : __export2,
    beforeActiveInstanceBlur: () => {
    },
    afterActiveInstanceBlur: () => {
    },
    detachDeletedInstance: () => {
    },
    now: typeof performance !== "undefined" && is.fun(performance.now) ? performance.now : is.fun(Date.now) ? Date.now : () => 0,
    // https://github.com/pmndrs/react-three-fiber/pull/2360#discussion_r920883503
    scheduleTimeout: is.fun(setTimeout) ? setTimeout : void 0,
    cancelTimeout: is.fun(clearTimeout) ? clearTimeout : void 0
  });
  return {
    reconciler: reconciler2,
    applyProps: applyProps$1
  };
}
var _window$document;
var _window$navigator;
var hasColorSpace = (object) => "colorSpace" in object || "outputColorSpace" in object;
var getColorManagement = () => {
  var _ColorManagement;
  return (_ColorManagement = catalogue.ColorManagement) != null ? _ColorManagement : null;
};
var isOrthographicCamera = (def) => def && def.isOrthographicCamera;
var isRef = (obj) => obj && obj.hasOwnProperty("current");
var useIsomorphicLayoutEffect2 = typeof window !== "undefined" && ((_window$document = window.document) != null && _window$document.createElement || ((_window$navigator = window.navigator) == null ? void 0 : _window$navigator.product) === "ReactNative") ? React.useLayoutEffect : React.useEffect;
function useMutableCallback(fn) {
  const ref = React.useRef(fn);
  useIsomorphicLayoutEffect2(() => void (ref.current = fn), [fn]);
  return ref;
}
function Block({
  set
}) {
  useIsomorphicLayoutEffect2(() => {
    set(new Promise(() => null));
    return () => set(false);
  }, [set]);
  return null;
}
var ErrorBoundary = class extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      error: false
    };
  }
  componentDidCatch(err) {
    this.props.set(err);
  }
  render() {
    return this.state.error ? null : this.props.children;
  }
};
ErrorBoundary.getDerivedStateFromError = () => ({
  error: true
});
var DEFAULT = "__default";
var DEFAULTS = /* @__PURE__ */ new Map();
var isDiffSet = (def) => def && !!def.memoized && !!def.changes;
function calculateDpr(dpr) {
  var _window$devicePixelRa;
  const target = typeof window !== "undefined" ? (_window$devicePixelRa = window.devicePixelRatio) != null ? _window$devicePixelRa : 2 : 1;
  return Array.isArray(dpr) ? Math.min(Math.max(dpr[0], target), dpr[1]) : dpr;
}
var getRootState = (obj) => {
  var _r3f;
  return (_r3f = obj.__r3f) == null ? void 0 : _r3f.root.getState();
};
function findInitialRoot(child) {
  let root = child.__r3f.root;
  while (root.getState().previousRoot) root = root.getState().previousRoot;
  return root;
}
var is = {
  obj: (a) => a === Object(a) && !is.arr(a) && typeof a !== "function",
  fun: (a) => typeof a === "function",
  str: (a) => typeof a === "string",
  num: (a) => typeof a === "number",
  boo: (a) => typeof a === "boolean",
  und: (a) => a === void 0,
  arr: (a) => Array.isArray(a),
  equ(a, b, {
    arrays = "shallow",
    objects = "reference",
    strict = true
  } = {}) {
    if (typeof a !== typeof b || !!a !== !!b) return false;
    if (is.str(a) || is.num(a) || is.boo(a)) return a === b;
    const isObj = is.obj(a);
    if (isObj && objects === "reference") return a === b;
    const isArr = is.arr(a);
    if (isArr && arrays === "reference") return a === b;
    if ((isArr || isObj) && a === b) return true;
    let i2;
    for (i2 in a) if (!(i2 in b)) return false;
    if (isObj && arrays === "shallow" && objects === "shallow") {
      for (i2 in strict ? b : a) if (!is.equ(a[i2], b[i2], {
        strict,
        objects: "reference"
      })) return false;
    } else {
      for (i2 in strict ? b : a) if (a[i2] !== b[i2]) return false;
    }
    if (is.und(i2)) {
      if (isArr && a.length === 0 && b.length === 0) return true;
      if (isObj && Object.keys(a).length === 0 && Object.keys(b).length === 0) return true;
      if (a !== b) return false;
    }
    return true;
  }
};
function buildGraph(object) {
  const data = {
    nodes: {},
    materials: {}
  };
  if (object) {
    object.traverse((obj) => {
      if (obj.name) data.nodes[obj.name] = obj;
      if (obj.material && !data.materials[obj.material.name]) data.materials[obj.material.name] = obj.material;
    });
  }
  return data;
}
function dispose(obj) {
  if (obj.dispose && obj.type !== "Scene") obj.dispose();
  for (const p2 in obj) {
    p2.dispose == null ? void 0 : p2.dispose();
    delete obj[p2];
  }
}
function prepare(object, state) {
  const instance = object;
  instance.__r3f = __spreadValues({
    type: "",
    root: null,
    previousAttach: null,
    memoizedProps: {},
    eventCount: 0,
    handlers: {},
    objects: [],
    parent: null
  }, state);
  return object;
}
function resolve(instance, key) {
  let target = instance;
  if (key.includes("-")) {
    const entries = key.split("-");
    const last = entries.pop();
    target = entries.reduce((acc, key2) => acc[key2], instance);
    return {
      target,
      key: last
    };
  } else return {
    target,
    key
  };
}
var INDEX_REGEX = /-\d+$/;
function attach(parent, child, type) {
  if (is.str(type)) {
    if (INDEX_REGEX.test(type)) {
      const root = type.replace(INDEX_REGEX, "");
      const {
        target: target2,
        key: key2
      } = resolve(parent, root);
      if (!Array.isArray(target2[key2])) target2[key2] = [];
    }
    const {
      target,
      key
    } = resolve(parent, type);
    child.__r3f.previousAttach = target[key];
    target[key] = child;
  } else child.__r3f.previousAttach = type(parent, child);
}
function detach(parent, child, type) {
  var _child$__r3f, _child$__r3f2;
  if (is.str(type)) {
    const {
      target,
      key
    } = resolve(parent, type);
    const previous = child.__r3f.previousAttach;
    if (previous === void 0) delete target[key];
    else target[key] = previous;
  } else (_child$__r3f = child.__r3f) == null ? void 0 : _child$__r3f.previousAttach == null ? void 0 : _child$__r3f.previousAttach(parent, child);
  (_child$__r3f2 = child.__r3f) == null ? true : delete _child$__r3f2.previousAttach;
}
function diffProps(instance, _a2, _c = {}, remove = false) {
  var _b2 = _a2, {
    children: cN,
    key: kN,
    ref: rN
  } = _b2, props = __objRest(_b2, [
    "children",
    "key",
    "ref"
  ]);
  var _d = _c, {
    children: cP,
    key: kP,
    ref: rP
  } = _d, previous = __objRest(_d, [
    "children",
    "key",
    "ref"
  ]);
  const localState = instance.__r3f;
  const entries = Object.entries(props);
  const changes = [];
  if (remove) {
    const previousKeys = Object.keys(previous);
    for (let i2 = 0; i2 < previousKeys.length; i2++) {
      if (!props.hasOwnProperty(previousKeys[i2])) entries.unshift([previousKeys[i2], DEFAULT + "remove"]);
    }
  }
  entries.forEach(([key, value]) => {
    var _instance$__r3f;
    if ((_instance$__r3f = instance.__r3f) != null && _instance$__r3f.primitive && key === "object") return;
    if (is.equ(value, previous[key])) return;
    if (/^on(Pointer|Click|DoubleClick|ContextMenu|Wheel)/.test(key)) return changes.push([key, value, true, []]);
    let entries2 = [];
    if (key.includes("-")) entries2 = key.split("-");
    changes.push([key, value, false, entries2]);
    for (const prop in props) {
      const value2 = props[prop];
      if (prop.startsWith(`${key}-`)) changes.push([prop, value2, false, prop.split("-")]);
    }
  });
  const memoized = __spreadValues({}, props);
  if (localState != null && localState.memoizedProps && localState != null && localState.memoizedProps.args) memoized.args = localState.memoizedProps.args;
  if (localState != null && localState.memoizedProps && localState != null && localState.memoizedProps.attach) memoized.attach = localState.memoizedProps.attach;
  return {
    memoized,
    changes
  };
}
var __DEV__ = typeof process !== "undefined" && false;
function applyProps$1(instance, data) {
  var _instance$__r3f2;
  const localState = instance.__r3f;
  const root = localState == null ? void 0 : localState.root;
  const rootState = root == null ? void 0 : root.getState == null ? void 0 : root.getState();
  const {
    memoized,
    changes
  } = isDiffSet(data) ? data : diffProps(instance, data);
  const prevHandlers = localState == null ? void 0 : localState.eventCount;
  if (instance.__r3f) instance.__r3f.memoizedProps = memoized;
  for (let i2 = 0; i2 < changes.length; i2++) {
    let [key, value, isEvent, keys] = changes[i2];
    if (hasColorSpace(instance)) {
      const sRGBEncoding = 3001;
      const SRGBColorSpace = "srgb";
      const LinearSRGBColorSpace = "srgb-linear";
      if (key === "encoding") {
        key = "colorSpace";
        value = value === sRGBEncoding ? SRGBColorSpace : LinearSRGBColorSpace;
      } else if (key === "outputEncoding") {
        key = "outputColorSpace";
        value = value === sRGBEncoding ? SRGBColorSpace : LinearSRGBColorSpace;
      }
    }
    let currentInstance = instance;
    let targetProp = currentInstance[key];
    if (keys.length) {
      targetProp = keys.reduce((acc, key2) => acc[key2], instance);
      if (!(targetProp && targetProp.set)) {
        const [name, ...reverseEntries] = keys.reverse();
        currentInstance = reverseEntries.reverse().reduce((acc, key2) => acc[key2], instance);
        key = name;
      }
    }
    if (value === DEFAULT + "remove") {
      if (currentInstance.constructor) {
        let ctor = DEFAULTS.get(currentInstance.constructor);
        if (!ctor) {
          ctor = new currentInstance.constructor();
          DEFAULTS.set(currentInstance.constructor, ctor);
        }
        value = ctor[key];
      } else {
        value = 0;
      }
    }
    if (isEvent && localState) {
      if (value) localState.handlers[key] = value;
      else delete localState.handlers[key];
      localState.eventCount = Object.keys(localState.handlers).length;
    } else if (targetProp && targetProp.set && (targetProp.copy || targetProp instanceof Layers)) {
      if (Array.isArray(value)) {
        if (targetProp.fromArray) targetProp.fromArray(value);
        else targetProp.set(...value);
      } else if (targetProp.copy && value && value.constructor && // Some environments may break strict identity checks by duplicating versions of three.js.
      // Loosen to unminified names, ignoring descendents.
      // https://github.com/pmndrs/react-three-fiber/issues/2856
      // TODO: fix upstream and remove in v9
      (__DEV__ ? targetProp.constructor.name === value.constructor.name : targetProp.constructor === value.constructor)) {
        targetProp.copy(value);
      } else if (value !== void 0) {
        var _targetProp;
        const isColor = (_targetProp = targetProp) == null ? void 0 : _targetProp.isColor;
        if (!isColor && targetProp.setScalar) targetProp.setScalar(value);
        else if (targetProp instanceof Layers && value instanceof Layers) targetProp.mask = value.mask;
        else targetProp.set(value);
        if (!getColorManagement() && rootState && !rootState.linear && isColor) targetProp.convertSRGBToLinear();
      }
    } else {
      var _currentInstance$key;
      currentInstance[key] = value;
      if ((_currentInstance$key = currentInstance[key]) != null && _currentInstance$key.isTexture && // sRGB textures must be RGBA8 since r137 https://github.com/mrdoob/three.js/pull/23129
      currentInstance[key].format === RGBAFormat && currentInstance[key].type === UnsignedByteType && rootState) {
        const texture = currentInstance[key];
        if (hasColorSpace(texture) && hasColorSpace(rootState.gl)) texture.colorSpace = rootState.gl.outputColorSpace;
        else texture.encoding = rootState.gl.outputEncoding;
      }
    }
    invalidateInstance(instance);
  }
  if (localState && localState.parent && instance.raycast && prevHandlers !== localState.eventCount) {
    const internal = findInitialRoot(instance).getState().internal;
    const index = internal.interaction.indexOf(instance);
    if (index > -1) internal.interaction.splice(index, 1);
    if (localState.eventCount) internal.interaction.push(instance);
  }
  const isCircular = changes.length === 1 && changes[0][0] === "onUpdate";
  if (!isCircular && changes.length && (_instance$__r3f2 = instance.__r3f) != null && _instance$__r3f2.parent) updateInstance(instance);
  return instance;
}
function invalidateInstance(instance) {
  var _instance$__r3f3, _instance$__r3f3$root;
  const state = (_instance$__r3f3 = instance.__r3f) == null ? void 0 : (_instance$__r3f3$root = _instance$__r3f3.root) == null ? void 0 : _instance$__r3f3$root.getState == null ? void 0 : _instance$__r3f3$root.getState();
  if (state && state.internal.frames === 0) state.invalidate();
}
function updateInstance(instance) {
  instance.onUpdate == null ? void 0 : instance.onUpdate(instance);
}
function updateCamera(camera, size) {
  if (!camera.manual) {
    if (isOrthographicCamera(camera)) {
      camera.left = size.width / -2;
      camera.right = size.width / 2;
      camera.top = size.height / 2;
      camera.bottom = size.height / -2;
    } else {
      camera.aspect = size.width / size.height;
    }
    camera.updateProjectionMatrix();
    camera.updateMatrixWorld();
  }
}
function makeId(event) {
  return (event.eventObject || event.object).uuid + "/" + event.index + event.instanceId;
}
function getEventPriority() {
  var _globalScope$event;
  const globalScope = typeof self !== "undefined" && self || typeof window !== "undefined" && window;
  if (!globalScope) return __export2;
  const name = (_globalScope$event = globalScope.event) == null ? void 0 : _globalScope$event.type;
  switch (name) {
    case "click":
    case "contextmenu":
    case "dblclick":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
      return __export3;
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "pointerenter":
    case "pointerleave":
    case "wheel":
      return __export1;
    default:
      return __export2;
  }
}
function releaseInternalPointerCapture(capturedMap, obj, captures, pointerId) {
  const captureData = captures.get(obj);
  if (captureData) {
    captures.delete(obj);
    if (captures.size === 0) {
      capturedMap.delete(pointerId);
      captureData.target.releasePointerCapture(pointerId);
    }
  }
}
function removeInteractivity(store, object) {
  const {
    internal
  } = store.getState();
  internal.interaction = internal.interaction.filter((o) => o !== object);
  internal.initialHits = internal.initialHits.filter((o) => o !== object);
  internal.hovered.forEach((value, key) => {
    if (value.eventObject === object || value.object === object) {
      internal.hovered.delete(key);
    }
  });
  internal.capturedMap.forEach((captures, pointerId) => {
    releaseInternalPointerCapture(internal.capturedMap, object, captures, pointerId);
  });
}
function createEvents(store) {
  function calculateDistance(event) {
    const {
      internal
    } = store.getState();
    const dx = event.offsetX - internal.initialClick[0];
    const dy = event.offsetY - internal.initialClick[1];
    return Math.round(Math.sqrt(dx * dx + dy * dy));
  }
  function filterPointerEvents(objects) {
    return objects.filter((obj) => ["Move", "Over", "Enter", "Out", "Leave"].some((name) => {
      var _r3f;
      return (_r3f = obj.__r3f) == null ? void 0 : _r3f.handlers["onPointer" + name];
    }));
  }
  function intersect(event, filter) {
    const state = store.getState();
    const duplicates = /* @__PURE__ */ new Set();
    const intersections = [];
    const eventsObjects = filter ? filter(state.internal.interaction) : state.internal.interaction;
    for (let i2 = 0; i2 < eventsObjects.length; i2++) {
      const state2 = getRootState(eventsObjects[i2]);
      if (state2) {
        state2.raycaster.camera = void 0;
      }
    }
    if (!state.previousRoot) {
      state.events.compute == null ? void 0 : state.events.compute(event, state);
    }
    function handleRaycast(obj) {
      const state2 = getRootState(obj);
      if (!state2 || !state2.events.enabled || state2.raycaster.camera === null) return [];
      if (state2.raycaster.camera === void 0) {
        var _state$previousRoot;
        state2.events.compute == null ? void 0 : state2.events.compute(event, state2, (_state$previousRoot = state2.previousRoot) == null ? void 0 : _state$previousRoot.getState());
        if (state2.raycaster.camera === void 0) state2.raycaster.camera = null;
      }
      return state2.raycaster.camera ? state2.raycaster.intersectObject(obj, true) : [];
    }
    let hits = eventsObjects.flatMap(handleRaycast).sort((a, b) => {
      const aState = getRootState(a.object);
      const bState = getRootState(b.object);
      if (!aState || !bState) return a.distance - b.distance;
      return bState.events.priority - aState.events.priority || a.distance - b.distance;
    }).filter((item) => {
      const id = makeId(item);
      if (duplicates.has(id)) return false;
      duplicates.add(id);
      return true;
    });
    if (state.events.filter) hits = state.events.filter(hits, state);
    for (const hit of hits) {
      let eventObject = hit.object;
      while (eventObject) {
        var _r3f2;
        if ((_r3f2 = eventObject.__r3f) != null && _r3f2.eventCount) intersections.push(__spreadProps(__spreadValues({}, hit), {
          eventObject
        }));
        eventObject = eventObject.parent;
      }
    }
    if ("pointerId" in event && state.internal.capturedMap.has(event.pointerId)) {
      for (let captureData of state.internal.capturedMap.get(event.pointerId).values()) {
        if (!duplicates.has(makeId(captureData.intersection))) intersections.push(captureData.intersection);
      }
    }
    return intersections;
  }
  function handleIntersects(intersections, event, delta, callback) {
    const rootState = store.getState();
    if (intersections.length) {
      const localState = {
        stopped: false
      };
      for (const hit of intersections) {
        const state = getRootState(hit.object) || rootState;
        const {
          raycaster,
          pointer,
          camera,
          internal
        } = state;
        const unprojectedPoint = new Vector3(pointer.x, pointer.y, 0).unproject(camera);
        const hasPointerCapture = (id) => {
          var _internal$capturedMap, _internal$capturedMap2;
          return (_internal$capturedMap = (_internal$capturedMap2 = internal.capturedMap.get(id)) == null ? void 0 : _internal$capturedMap2.has(hit.eventObject)) != null ? _internal$capturedMap : false;
        };
        const setPointerCapture = (id) => {
          const captureData = {
            intersection: hit,
            target: event.target
          };
          if (internal.capturedMap.has(id)) {
            internal.capturedMap.get(id).set(hit.eventObject, captureData);
          } else {
            internal.capturedMap.set(id, /* @__PURE__ */ new Map([[hit.eventObject, captureData]]));
          }
          event.target.setPointerCapture(id);
        };
        const releasePointerCapture = (id) => {
          const captures = internal.capturedMap.get(id);
          if (captures) {
            releaseInternalPointerCapture(internal.capturedMap, hit.eventObject, captures, id);
          }
        };
        let extractEventProps = {};
        for (let prop in event) {
          let property = event[prop];
          if (typeof property !== "function") extractEventProps[prop] = property;
        }
        let raycastEvent = __spreadProps(__spreadValues(__spreadValues({}, hit), extractEventProps), {
          pointer,
          intersections,
          stopped: localState.stopped,
          delta,
          unprojectedPoint,
          ray: raycaster.ray,
          camera,
          // Hijack stopPropagation, which just sets a flag
          stopPropagation() {
            const capturesForPointer = "pointerId" in event && internal.capturedMap.get(event.pointerId);
            if (
              // ...if this pointer hasn't been captured
              !capturesForPointer || // ... or if the hit object is capturing the pointer
              capturesForPointer.has(hit.eventObject)
            ) {
              raycastEvent.stopped = localState.stopped = true;
              if (internal.hovered.size && Array.from(internal.hovered.values()).find((i2) => i2.eventObject === hit.eventObject)) {
                const higher = intersections.slice(0, intersections.indexOf(hit));
                cancelPointer([...higher, hit]);
              }
            }
          },
          // there should be a distinction between target and currentTarget
          target: {
            hasPointerCapture,
            setPointerCapture,
            releasePointerCapture
          },
          currentTarget: {
            hasPointerCapture,
            setPointerCapture,
            releasePointerCapture
          },
          nativeEvent: event
        });
        callback(raycastEvent);
        if (localState.stopped === true) break;
      }
    }
    return intersections;
  }
  function cancelPointer(intersections) {
    const {
      internal
    } = store.getState();
    for (const hoveredObj of internal.hovered.values()) {
      if (!intersections.length || !intersections.find((hit) => hit.object === hoveredObj.object && hit.index === hoveredObj.index && hit.instanceId === hoveredObj.instanceId)) {
        const eventObject = hoveredObj.eventObject;
        const instance = eventObject.__r3f;
        const handlers = instance == null ? void 0 : instance.handlers;
        internal.hovered.delete(makeId(hoveredObj));
        if (instance != null && instance.eventCount) {
          const data = __spreadProps(__spreadValues({}, hoveredObj), {
            intersections
          });
          handlers.onPointerOut == null ? void 0 : handlers.onPointerOut(data);
          handlers.onPointerLeave == null ? void 0 : handlers.onPointerLeave(data);
        }
      }
    }
  }
  function pointerMissed(event, objects) {
    for (let i2 = 0; i2 < objects.length; i2++) {
      const instance = objects[i2].__r3f;
      instance == null ? void 0 : instance.handlers.onPointerMissed == null ? void 0 : instance.handlers.onPointerMissed(event);
    }
  }
  function handlePointer(name) {
    switch (name) {
      case "onPointerLeave":
      case "onPointerCancel":
        return () => cancelPointer([]);
      case "onLostPointerCapture":
        return (event) => {
          const {
            internal
          } = store.getState();
          if ("pointerId" in event && internal.capturedMap.has(event.pointerId)) {
            requestAnimationFrame(() => {
              if (internal.capturedMap.has(event.pointerId)) {
                internal.capturedMap.delete(event.pointerId);
                cancelPointer([]);
              }
            });
          }
        };
    }
    return function handleEvent(event) {
      const {
        onPointerMissed,
        internal
      } = store.getState();
      internal.lastEvent.current = event;
      const isPointerMove = name === "onPointerMove";
      const isClickEvent = name === "onClick" || name === "onContextMenu" || name === "onDoubleClick";
      const filter = isPointerMove ? filterPointerEvents : void 0;
      const hits = intersect(event, filter);
      const delta = isClickEvent ? calculateDistance(event) : 0;
      if (name === "onPointerDown") {
        internal.initialClick = [event.offsetX, event.offsetY];
        internal.initialHits = hits.map((hit) => hit.eventObject);
      }
      if (isClickEvent && !hits.length) {
        if (delta <= 2) {
          pointerMissed(event, internal.interaction);
          if (onPointerMissed) onPointerMissed(event);
        }
      }
      if (isPointerMove) cancelPointer(hits);
      function onIntersect(data) {
        const eventObject = data.eventObject;
        const instance = eventObject.__r3f;
        const handlers = instance == null ? void 0 : instance.handlers;
        if (!(instance != null && instance.eventCount)) return;
        if (isPointerMove) {
          if (handlers.onPointerOver || handlers.onPointerEnter || handlers.onPointerOut || handlers.onPointerLeave) {
            const id = makeId(data);
            const hoveredItem = internal.hovered.get(id);
            if (!hoveredItem) {
              internal.hovered.set(id, data);
              handlers.onPointerOver == null ? void 0 : handlers.onPointerOver(data);
              handlers.onPointerEnter == null ? void 0 : handlers.onPointerEnter(data);
            } else if (hoveredItem.stopped) {
              data.stopPropagation();
            }
          }
          handlers.onPointerMove == null ? void 0 : handlers.onPointerMove(data);
        } else {
          const handler = handlers[name];
          if (handler) {
            if (!isClickEvent || internal.initialHits.includes(eventObject)) {
              pointerMissed(event, internal.interaction.filter((object) => !internal.initialHits.includes(object)));
              handler(data);
            }
          } else {
            if (isClickEvent && internal.initialHits.includes(eventObject)) {
              pointerMissed(event, internal.interaction.filter((object) => !internal.initialHits.includes(object)));
            }
          }
        }
      }
      handleIntersects(hits, event, delta, onIntersect);
    };
  }
  return {
    handlePointer
  };
}
var privateKeys = ["set", "get", "setSize", "setFrameloop", "setDpr", "events", "invalidate", "advance", "size", "viewport"];
var isRenderer = (def) => !!(def != null && def.render);
var context = /* @__PURE__ */ React.createContext(null);
var createStore2 = (invalidate2, advance2) => {
  const rootState = create((set, get) => {
    const position = new Vector3();
    const defaultTarget = new Vector3();
    const tempTarget = new Vector3();
    function getCurrentViewport(camera = get().camera, target = defaultTarget, size = get().size) {
      const {
        width,
        height,
        top,
        left
      } = size;
      const aspect = width / height;
      if (target.isVector3) tempTarget.copy(target);
      else tempTarget.set(...target);
      const distance = camera.getWorldPosition(position).distanceTo(tempTarget);
      if (isOrthographicCamera(camera)) {
        return {
          width: width / camera.zoom,
          height: height / camera.zoom,
          top,
          left,
          factor: 1,
          distance,
          aspect
        };
      } else {
        const fov = camera.fov * Math.PI / 180;
        const h2 = 2 * Math.tan(fov / 2) * distance;
        const w = h2 * (width / height);
        return {
          width: w,
          height: h2,
          top,
          left,
          factor: width / w,
          distance,
          aspect
        };
      }
    }
    let performanceTimeout = void 0;
    const setPerformanceCurrent = (current) => set((state2) => ({
      performance: __spreadProps(__spreadValues({}, state2.performance), {
        current
      })
    }));
    const pointer = new Vector2();
    const rootState2 = {
      set,
      get,
      // Mock objects that have to be configured
      gl: null,
      camera: null,
      raycaster: null,
      events: {
        priority: 1,
        enabled: true,
        connected: false
      },
      xr: null,
      scene: null,
      invalidate: (frames = 1) => invalidate2(get(), frames),
      advance: (timestamp, runGlobalEffects) => advance2(timestamp, runGlobalEffects, get()),
      legacy: false,
      linear: false,
      flat: false,
      controls: null,
      clock: new Clock(),
      pointer,
      mouse: pointer,
      frameloop: "always",
      onPointerMissed: void 0,
      performance: {
        current: 1,
        min: 0.5,
        max: 1,
        debounce: 200,
        regress: () => {
          const state2 = get();
          if (performanceTimeout) clearTimeout(performanceTimeout);
          if (state2.performance.current !== state2.performance.min) setPerformanceCurrent(state2.performance.min);
          performanceTimeout = setTimeout(() => setPerformanceCurrent(get().performance.max), state2.performance.debounce);
        }
      },
      size: {
        width: 0,
        height: 0,
        top: 0,
        left: 0,
        updateStyle: false
      },
      viewport: {
        initialDpr: 0,
        dpr: 0,
        width: 0,
        height: 0,
        top: 0,
        left: 0,
        aspect: 0,
        distance: 0,
        factor: 0,
        getCurrentViewport
      },
      setEvents: (events) => set((state2) => __spreadProps(__spreadValues({}, state2), {
        events: __spreadValues(__spreadValues({}, state2.events), events)
      })),
      setSize: (width, height, updateStyle, top, left) => {
        const camera = get().camera;
        const size = {
          width,
          height,
          top: top || 0,
          left: left || 0,
          updateStyle
        };
        set((state2) => ({
          size,
          viewport: __spreadValues(__spreadValues({}, state2.viewport), getCurrentViewport(camera, defaultTarget, size))
        }));
      },
      setDpr: (dpr) => set((state2) => {
        const resolved = calculateDpr(dpr);
        return {
          viewport: __spreadProps(__spreadValues({}, state2.viewport), {
            dpr: resolved,
            initialDpr: state2.viewport.initialDpr || resolved
          })
        };
      }),
      setFrameloop: (frameloop = "always") => {
        const clock = get().clock;
        clock.stop();
        clock.elapsedTime = 0;
        if (frameloop !== "never") {
          clock.start();
          clock.elapsedTime = 0;
        }
        set(() => ({
          frameloop
        }));
      },
      previousRoot: void 0,
      internal: {
        active: false,
        priority: 0,
        frames: 0,
        lastEvent: /* @__PURE__ */ React.createRef(),
        interaction: [],
        hovered: /* @__PURE__ */ new Map(),
        subscribers: [],
        initialClick: [0, 0],
        initialHits: [],
        capturedMap: /* @__PURE__ */ new Map(),
        subscribe: (ref, priority, store) => {
          const internal = get().internal;
          internal.priority = internal.priority + (priority > 0 ? 1 : 0);
          internal.subscribers.push({
            ref,
            priority,
            store
          });
          internal.subscribers = internal.subscribers.sort((a, b) => a.priority - b.priority);
          return () => {
            const internal2 = get().internal;
            if (internal2 != null && internal2.subscribers) {
              internal2.priority = internal2.priority - (priority > 0 ? 1 : 0);
              internal2.subscribers = internal2.subscribers.filter((s) => s.ref !== ref);
            }
          };
        }
      }
    };
    return rootState2;
  });
  const state = rootState.getState();
  let oldSize = state.size;
  let oldDpr = state.viewport.dpr;
  let oldCamera = state.camera;
  rootState.subscribe(() => {
    const {
      camera,
      size,
      viewport,
      gl,
      set
    } = rootState.getState();
    if (size.width !== oldSize.width || size.height !== oldSize.height || viewport.dpr !== oldDpr) {
      var _size$updateStyle;
      oldSize = size;
      oldDpr = viewport.dpr;
      updateCamera(camera, size);
      gl.setPixelRatio(viewport.dpr);
      const updateStyle = (_size$updateStyle = size.updateStyle) != null ? _size$updateStyle : typeof HTMLCanvasElement !== "undefined" && gl.domElement instanceof HTMLCanvasElement;
      gl.setSize(size.width, size.height, updateStyle);
    }
    if (camera !== oldCamera) {
      oldCamera = camera;
      set((state2) => ({
        viewport: __spreadValues(__spreadValues({}, state2.viewport), state2.viewport.getCurrentViewport(camera))
      }));
    }
  });
  rootState.subscribe((state2) => invalidate2(state2));
  return rootState;
};
var i;
var globalEffects = /* @__PURE__ */ new Set();
var globalAfterEffects = /* @__PURE__ */ new Set();
var globalTailEffects = /* @__PURE__ */ new Set();
function run(effects, timestamp) {
  if (!effects.size) return;
  for (const {
    callback
  } of effects.values()) {
    callback(timestamp);
  }
}
function flushGlobalEffects(type, timestamp) {
  switch (type) {
    case "before":
      return run(globalEffects, timestamp);
    case "after":
      return run(globalAfterEffects, timestamp);
    case "tail":
      return run(globalTailEffects, timestamp);
  }
}
var subscribers;
var subscription;
function render$1(timestamp, state, frame) {
  let delta = state.clock.getDelta();
  if (state.frameloop === "never" && typeof timestamp === "number") {
    delta = timestamp - state.clock.elapsedTime;
    state.clock.oldTime = state.clock.elapsedTime;
    state.clock.elapsedTime = timestamp;
  }
  subscribers = state.internal.subscribers;
  for (i = 0; i < subscribers.length; i++) {
    subscription = subscribers[i];
    subscription.ref.current(subscription.store.getState(), delta, frame);
  }
  if (!state.internal.priority && state.gl.render) state.gl.render(state.scene, state.camera);
  state.internal.frames = Math.max(0, state.internal.frames - 1);
  return state.frameloop === "always" ? 1 : state.internal.frames;
}
function createLoop(roots2) {
  let running = false;
  let useFrameInProgress = false;
  let repeat;
  let frame;
  let state;
  function loop(timestamp) {
    frame = requestAnimationFrame(loop);
    running = true;
    repeat = 0;
    flushGlobalEffects("before", timestamp);
    useFrameInProgress = true;
    for (const root of roots2.values()) {
      var _state$gl$xr;
      state = root.store.getState();
      if (state.internal.active && (state.frameloop === "always" || state.internal.frames > 0) && !((_state$gl$xr = state.gl.xr) != null && _state$gl$xr.isPresenting)) {
        repeat += render$1(timestamp, state);
      }
    }
    useFrameInProgress = false;
    flushGlobalEffects("after", timestamp);
    if (repeat === 0) {
      flushGlobalEffects("tail", timestamp);
      running = false;
      return cancelAnimationFrame(frame);
    }
  }
  function invalidate2(state2, frames = 1) {
    var _state$gl$xr2;
    if (!state2) return roots2.forEach((root) => invalidate2(root.store.getState(), frames));
    if ((_state$gl$xr2 = state2.gl.xr) != null && _state$gl$xr2.isPresenting || !state2.internal.active || state2.frameloop === "never") return;
    if (frames > 1) {
      state2.internal.frames = Math.min(60, state2.internal.frames + frames);
    } else {
      if (useFrameInProgress) {
        state2.internal.frames = 2;
      } else {
        state2.internal.frames = 1;
      }
    }
    if (!running) {
      running = true;
      requestAnimationFrame(loop);
    }
  }
  function advance2(timestamp, runGlobalEffects = true, state2, frame2) {
    if (runGlobalEffects) flushGlobalEffects("before", timestamp);
    if (!state2) for (const root of roots2.values()) render$1(timestamp, root.store.getState());
    else render$1(timestamp, state2, frame2);
    if (runGlobalEffects) flushGlobalEffects("after", timestamp);
  }
  return {
    loop,
    invalidate: invalidate2,
    advance: advance2
  };
}
function useStore() {
  const store = React.useContext(context);
  if (!store) throw new Error("R3F: Hooks can only be used within the Canvas component!");
  return store;
}
function useThree(selector = (state) => state, equalityFn) {
  return useStore()(selector, equalityFn);
}
function useFrame(callback, renderPriority = 0) {
  const store = useStore();
  const subscribe = store.getState().internal.subscribe;
  const ref = useMutableCallback(callback);
  useIsomorphicLayoutEffect2(() => subscribe(ref, renderPriority, store), [renderPriority, subscribe, store]);
  return null;
}
var memoizedLoaders = /* @__PURE__ */ new WeakMap();
function loadingFn(extensions, onProgress) {
  return function(Proto, ...input) {
    let loader = memoizedLoaders.get(Proto);
    if (!loader) {
      loader = new Proto();
      memoizedLoaders.set(Proto, loader);
    }
    if (extensions) extensions(loader);
    return Promise.all(input.map((input2) => new Promise((res, reject) => loader.load(input2, (data) => {
      if (data.scene) Object.assign(data, buildGraph(data.scene));
      res(data);
    }, onProgress, (error2) => reject(new Error(`Could not load ${input2}: ${error2 == null ? void 0 : error2.message}`))))));
  };
}
function useLoader(Proto, input, extensions, onProgress) {
  const keys = Array.isArray(input) ? input : [input];
  const results = suspend(loadingFn(extensions, onProgress), [Proto, ...keys], {
    equal: is.equ
  });
  return Array.isArray(input) ? results : results[0];
}
useLoader.preload = function(Proto, input, extensions) {
  const keys = Array.isArray(input) ? input : [input];
  return preload(loadingFn(extensions), [Proto, ...keys]);
};
useLoader.clear = function(Proto, input) {
  const keys = Array.isArray(input) ? input : [input];
  return clear([Proto, ...keys]);
};
var roots = /* @__PURE__ */ new Map();
var {
  invalidate,
  advance
} = createLoop(roots);
var {
  reconciler,
  applyProps
} = createRenderer(roots, getEventPriority);
var shallowLoose = {
  objects: "shallow",
  strict: false
};
var createRendererInstance = (gl, canvas) => {
  const customRenderer = typeof gl === "function" ? gl(canvas) : gl;
  if (isRenderer(customRenderer)) return customRenderer;
  else return new WebGLRenderer(__spreadValues({
    powerPreference: "high-performance",
    canvas,
    antialias: true,
    alpha: true
  }, gl));
};
function computeInitialSize(canvas, defaultSize) {
  const defaultStyle = typeof HTMLCanvasElement !== "undefined" && canvas instanceof HTMLCanvasElement;
  if (defaultSize) {
    const {
      width,
      height,
      top,
      left,
      updateStyle = defaultStyle
    } = defaultSize;
    return {
      width,
      height,
      top,
      left,
      updateStyle
    };
  } else if (typeof HTMLCanvasElement !== "undefined" && canvas instanceof HTMLCanvasElement && canvas.parentElement) {
    const {
      width,
      height,
      top,
      left
    } = canvas.parentElement.getBoundingClientRect();
    return {
      width,
      height,
      top,
      left,
      updateStyle: defaultStyle
    };
  } else if (typeof OffscreenCanvas !== "undefined" && canvas instanceof OffscreenCanvas) {
    return {
      width: canvas.width,
      height: canvas.height,
      top: 0,
      left: 0,
      updateStyle: defaultStyle
    };
  }
  return {
    width: 0,
    height: 0,
    top: 0,
    left: 0
  };
}
function createRoot(canvas) {
  const prevRoot = roots.get(canvas);
  const prevFiber = prevRoot == null ? void 0 : prevRoot.fiber;
  const prevStore = prevRoot == null ? void 0 : prevRoot.store;
  if (prevRoot) console.warn("R3F.createRoot should only be called once!");
  const logRecoverableError = typeof reportError === "function" ? (
    // In modern browsers, reportError will dispatch an error event,
    // emulating an uncaught JavaScript error.
    reportError
  ) : (
    // In older browsers and test environments, fallback to console.error.
    console.error
  );
  const store = prevStore || createStore2(invalidate, advance);
  const fiber = prevFiber || reconciler.createContainer(store, __export0, null, false, null, "", logRecoverableError, null);
  if (!prevRoot) roots.set(canvas, {
    fiber,
    store
  });
  let onCreated;
  let configured = false;
  let lastCamera;
  return {
    configure(props = {}) {
      let {
        gl: glConfig,
        size: propsSize,
        scene: sceneOptions,
        events,
        onCreated: onCreatedCallback,
        shadows = false,
        linear = false,
        flat = false,
        legacy = false,
        orthographic = false,
        frameloop = "always",
        dpr = [1, 2],
        performance: performance2,
        raycaster: raycastOptions,
        camera: cameraOptions,
        onPointerMissed
      } = props;
      let state = store.getState();
      let gl = state.gl;
      if (!state.gl) state.set({
        gl: gl = createRendererInstance(glConfig, canvas)
      });
      let raycaster = state.raycaster;
      if (!raycaster) state.set({
        raycaster: raycaster = new Raycaster()
      });
      const _a2 = raycastOptions || {}, {
        params
      } = _a2, options = __objRest(_a2, [
        "params"
      ]);
      if (!is.equ(options, raycaster, shallowLoose)) applyProps(raycaster, __spreadValues({}, options));
      if (!is.equ(params, raycaster.params, shallowLoose)) applyProps(raycaster, {
        params: __spreadValues(__spreadValues({}, raycaster.params), params)
      });
      if (!state.camera || state.camera === lastCamera && !is.equ(lastCamera, cameraOptions, shallowLoose)) {
        lastCamera = cameraOptions;
        const isCamera = cameraOptions instanceof Camera;
        const camera = isCamera ? cameraOptions : orthographic ? new OrthographicCamera(0, 0, 0, 0, 0.1, 1e3) : new PerspectiveCamera(75, 0, 0.1, 1e3);
        if (!isCamera) {
          camera.position.z = 5;
          if (cameraOptions) {
            applyProps(camera, cameraOptions);
            if ("aspect" in cameraOptions || "left" in cameraOptions || "right" in cameraOptions || "bottom" in cameraOptions || "top" in cameraOptions) {
              camera.manual = true;
              camera.updateProjectionMatrix();
            }
          }
          if (!state.camera && !(cameraOptions != null && cameraOptions.rotation)) camera.lookAt(0, 0, 0);
        }
        state.set({
          camera
        });
        raycaster.camera = camera;
      }
      if (!state.scene) {
        let scene;
        if (sceneOptions != null && sceneOptions.isScene) {
          scene = sceneOptions;
        } else {
          scene = new Scene();
          if (sceneOptions) applyProps(scene, sceneOptions);
        }
        state.set({
          scene: prepare(scene)
        });
      }
      if (!state.xr) {
        var _gl$xr;
        const handleXRFrame = (timestamp, frame) => {
          const state2 = store.getState();
          if (state2.frameloop === "never") return;
          advance(timestamp, true, state2, frame);
        };
        const handleSessionChange = () => {
          const state2 = store.getState();
          state2.gl.xr.enabled = state2.gl.xr.isPresenting;
          state2.gl.xr.setAnimationLoop(state2.gl.xr.isPresenting ? handleXRFrame : null);
          if (!state2.gl.xr.isPresenting) invalidate(state2);
        };
        const xr = {
          connect() {
            const gl2 = store.getState().gl;
            gl2.xr.addEventListener("sessionstart", handleSessionChange);
            gl2.xr.addEventListener("sessionend", handleSessionChange);
          },
          disconnect() {
            const gl2 = store.getState().gl;
            gl2.xr.removeEventListener("sessionstart", handleSessionChange);
            gl2.xr.removeEventListener("sessionend", handleSessionChange);
          }
        };
        if (typeof ((_gl$xr = gl.xr) == null ? void 0 : _gl$xr.addEventListener) === "function") xr.connect();
        state.set({
          xr
        });
      }
      if (gl.shadowMap) {
        const oldEnabled = gl.shadowMap.enabled;
        const oldType = gl.shadowMap.type;
        gl.shadowMap.enabled = !!shadows;
        if (is.boo(shadows)) {
          gl.shadowMap.type = PCFSoftShadowMap;
        } else if (is.str(shadows)) {
          var _types$shadows;
          const types = {
            basic: BasicShadowMap,
            percentage: PCFShadowMap,
            soft: PCFSoftShadowMap,
            variance: VSMShadowMap
          };
          gl.shadowMap.type = (_types$shadows = types[shadows]) != null ? _types$shadows : PCFSoftShadowMap;
        } else if (is.obj(shadows)) {
          Object.assign(gl.shadowMap, shadows);
        }
        if (oldEnabled !== gl.shadowMap.enabled || oldType !== gl.shadowMap.type) gl.shadowMap.needsUpdate = true;
      }
      const ColorManagement = getColorManagement();
      if (ColorManagement) {
        if ("enabled" in ColorManagement) ColorManagement.enabled = !legacy;
        else if ("legacyMode" in ColorManagement) ColorManagement.legacyMode = legacy;
      }
      if (!configured) {
        const LinearEncoding = 3e3;
        const sRGBEncoding = 3001;
        applyProps(gl, {
          outputEncoding: linear ? LinearEncoding : sRGBEncoding,
          toneMapping: flat ? NoToneMapping : ACESFilmicToneMapping
        });
      }
      if (state.legacy !== legacy) state.set(() => ({
        legacy
      }));
      if (state.linear !== linear) state.set(() => ({
        linear
      }));
      if (state.flat !== flat) state.set(() => ({
        flat
      }));
      if (glConfig && !is.fun(glConfig) && !isRenderer(glConfig) && !is.equ(glConfig, gl, shallowLoose)) applyProps(gl, glConfig);
      if (events && !state.events.handlers) state.set({
        events: events(store)
      });
      const size = computeInitialSize(canvas, propsSize);
      if (!is.equ(size, state.size, shallowLoose)) {
        state.setSize(size.width, size.height, size.updateStyle, size.top, size.left);
      }
      if (dpr && state.viewport.dpr !== calculateDpr(dpr)) state.setDpr(dpr);
      if (state.frameloop !== frameloop) state.setFrameloop(frameloop);
      if (!state.onPointerMissed) state.set({
        onPointerMissed
      });
      if (performance2 && !is.equ(performance2, state.performance, shallowLoose)) state.set((state2) => ({
        performance: __spreadValues(__spreadValues({}, state2.performance), performance2)
      }));
      onCreated = onCreatedCallback;
      configured = true;
      return this;
    },
    render(children) {
      if (!configured) this.configure();
      reconciler.updateContainer(/* @__PURE__ */ jsx(Provider, {
        store,
        children,
        onCreated,
        rootElement: canvas
      }), fiber, null, () => void 0);
      return store;
    },
    unmount() {
      unmountComponentAtNode(canvas);
    }
  };
}
function Provider({
  store,
  children,
  onCreated,
  rootElement
}) {
  useIsomorphicLayoutEffect2(() => {
    const state = store.getState();
    state.set((state2) => ({
      internal: __spreadProps(__spreadValues({}, state2.internal), {
        active: true
      })
    }));
    if (onCreated) onCreated(state);
    if (!store.getState().events.connected) state.events.connect == null ? void 0 : state.events.connect(rootElement);
  }, []);
  return /* @__PURE__ */ jsx(context.Provider, {
    value: store,
    children
  });
}
function unmountComponentAtNode(canvas, callback) {
  const root = roots.get(canvas);
  const fiber = root == null ? void 0 : root.fiber;
  if (fiber) {
    const state = root == null ? void 0 : root.store.getState();
    if (state) state.internal.active = false;
    reconciler.updateContainer(null, fiber, null, () => {
      if (state) {
        setTimeout(() => {
          try {
            var _state$gl, _state$gl$renderLists, _state$gl2, _state$gl3;
            state.events.disconnect == null ? void 0 : state.events.disconnect();
            (_state$gl = state.gl) == null ? void 0 : (_state$gl$renderLists = _state$gl.renderLists) == null ? void 0 : _state$gl$renderLists.dispose == null ? void 0 : _state$gl$renderLists.dispose();
            (_state$gl2 = state.gl) == null ? void 0 : _state$gl2.forceContextLoss == null ? void 0 : _state$gl2.forceContextLoss();
            if ((_state$gl3 = state.gl) != null && _state$gl3.xr) state.xr.disconnect();
            dispose(state);
            roots.delete(canvas);
            if (callback) callback(canvas);
          } catch (e) {
          }
        }, 500);
      }
    });
  }
}
function createPortal(children, container, state) {
  return /* @__PURE__ */ jsx(Portal, {
    children,
    container,
    state
  }, container.uuid);
}
function Portal({
  state = {},
  children,
  container
}) {
  const _a2 = state, {
    events,
    size
  } = _a2, rest = __objRest(_a2, [
    "events",
    "size"
  ]);
  const previousRoot = useStore();
  const [raycaster] = React.useState(() => new Raycaster());
  const [pointer] = React.useState(() => new Vector2());
  const inject = React.useCallback(
    (rootState, injectState) => {
      const intersect = __spreadValues({}, rootState);
      Object.keys(rootState).forEach((key) => {
        if (
          // Some props should be off-limits
          privateKeys.includes(key) || // Otherwise filter out the props that are different and let the inject layer take precedence
          // Unless the inject layer props is undefined, then we keep the root layer
          rootState[key] !== injectState[key] && injectState[key]
        ) {
          delete intersect[key];
        }
      });
      let viewport = void 0;
      if (injectState && size) {
        const camera = injectState.camera;
        viewport = rootState.viewport.getCurrentViewport(camera, new Vector3(), size);
        if (camera !== rootState.camera) updateCamera(camera, size);
      }
      return __spreadValues(__spreadProps(__spreadValues({}, intersect), {
        // Portals have their own scene, which forms the root, a raycaster and a pointer
        scene: container,
        raycaster,
        pointer,
        mouse: pointer,
        // Their previous root is the layer before it
        previousRoot,
        // Events, size and viewport can be overridden by the inject layer
        events: __spreadValues(__spreadValues(__spreadValues({}, rootState.events), injectState == null ? void 0 : injectState.events), events),
        size: __spreadValues(__spreadValues({}, rootState.size), size),
        viewport: __spreadValues(__spreadValues({}, rootState.viewport), viewport)
      }), rest);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [state]
  );
  const [usePortalStore] = React.useState(() => {
    const previousState = previousRoot.getState();
    const store = create((set, get) => __spreadProps(__spreadValues(__spreadProps(__spreadValues({}, previousState), {
      scene: container,
      raycaster,
      pointer,
      mouse: pointer,
      previousRoot,
      events: __spreadValues(__spreadValues({}, previousState.events), events),
      size: __spreadValues(__spreadValues({}, previousState.size), size)
    }), rest), {
      // Set and get refer to this root-state
      set,
      get,
      // Layers are allowed to override events
      setEvents: (events2) => set((state2) => __spreadProps(__spreadValues({}, state2), {
        events: __spreadValues(__spreadValues({}, state2.events), events2)
      }))
    }));
    return store;
  });
  React.useEffect(() => {
    const unsub = previousRoot.subscribe((prev) => usePortalStore.setState((state2) => inject(prev, state2)));
    return () => {
      unsub();
    };
  }, [inject]);
  React.useEffect(() => {
    usePortalStore.setState((injectState) => inject(previousRoot.getState(), injectState));
  }, [inject]);
  React.useEffect(() => {
    return () => {
      usePortalStore.destroy();
    };
  }, []);
  return /* @__PURE__ */ jsx(Fragment, {
    children: reconciler.createPortal(/* @__PURE__ */ jsx(context.Provider, {
      value: usePortalStore,
      children
    }), usePortalStore, null)
  });
}
reconciler.injectIntoDevTools({
  bundleType: true ? 0 : 1,
  rendererPackageName: "@react-three/fiber",
  version: React.version
});
var DOM_EVENTS = {
  onClick: ["click", false],
  onContextMenu: ["contextmenu", false],
  onDoubleClick: ["dblclick", false],
  onWheel: ["wheel", true],
  onPointerDown: ["pointerdown", true],
  onPointerUp: ["pointerup", true],
  onPointerLeave: ["pointerleave", true],
  onPointerMove: ["pointermove", true],
  onPointerCancel: ["pointercancel", true],
  onLostPointerCapture: ["lostpointercapture", true]
};
function createPointerEvents(store) {
  const {
    handlePointer
  } = createEvents(store);
  return {
    priority: 1,
    enabled: true,
    compute(event, state, previous) {
      state.pointer.set(event.offsetX / state.size.width * 2 - 1, -(event.offsetY / state.size.height) * 2 + 1);
      state.raycaster.setFromCamera(state.pointer, state.camera);
    },
    connected: void 0,
    handlers: Object.keys(DOM_EVENTS).reduce((acc, key) => __spreadProps(__spreadValues({}, acc), {
      [key]: handlePointer(key)
    }), {}),
    update: () => {
      var _internal$lastEvent;
      const {
        events,
        internal
      } = store.getState();
      if ((_internal$lastEvent = internal.lastEvent) != null && _internal$lastEvent.current && events.handlers) events.handlers.onPointerMove(internal.lastEvent.current);
    },
    connect: (target) => {
      var _events$handlers;
      const {
        set,
        events
      } = store.getState();
      events.disconnect == null ? void 0 : events.disconnect();
      set((state) => ({
        events: __spreadProps(__spreadValues({}, state.events), {
          connected: target
        })
      }));
      Object.entries((_events$handlers = events.handlers) != null ? _events$handlers : []).forEach(([name, event]) => {
        const [eventName, passive] = DOM_EVENTS[name];
        target.addEventListener(eventName, event, {
          passive
        });
      });
    },
    disconnect: () => {
      const {
        set,
        events
      } = store.getState();
      if (events.connected) {
        var _events$handlers2;
        Object.entries((_events$handlers2 = events.handlers) != null ? _events$handlers2 : []).forEach(([name, event]) => {
          if (events && events.connected instanceof HTMLElement) {
            const [eventName] = DOM_EVENTS[name];
            events.connected.removeEventListener(eventName, event);
          }
        });
        set((state) => ({
          events: __spreadProps(__spreadValues({}, state.events), {
            connected: void 0
          })
        }));
      }
    }
  };
}

// ../../node_modules/.pnpm/@react-three+fiber@8.18.0_@types+react@18.2.73_react-dom@18.3.1_react@18.3.1__react@18.3.1_three@0.169.0/node_modules/@react-three/fiber/dist/react-three-fiber.esm.js
import * as React3 from "react";

// ../../node_modules/.pnpm/react-use-measure@2.1.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-use-measure/dist/index.js
import { useState as T2, useRef as p, useEffect as u, useMemo as M2 } from "react";
function g2(n, t) {
  let o;
  return (...i2) => {
    window.clearTimeout(o), o = window.setTimeout(() => n(...i2), t);
  };
}
function j({ debounce: n, scroll: t, polyfill: o, offsetSize: i2 } = { debounce: 0, scroll: false, offsetSize: false }) {
  const a = o || (typeof window == "undefined" ? class {
  } : window.ResizeObserver);
  if (!a) throw new Error("This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills");
  const [c, h2] = T2({ left: 0, top: 0, width: 0, height: 0, bottom: 0, right: 0, x: 0, y: 0 }), e = p({ element: null, scrollContainers: null, resizeObserver: null, lastBounds: c, orientationHandler: null }), d = n ? typeof n == "number" ? n : n.scroll : null, f2 = n ? typeof n == "number" ? n : n.resize : null, w = p(false);
  u(() => (w.current = true, () => void (w.current = false)));
  const [z, m, s] = M2(() => {
    const r = () => {
      if (!e.current.element) return;
      const { left: y, top: C, width: H2, height: O2, bottom: S2, right: x, x: B, y: R2 } = e.current.element.getBoundingClientRect(), l = { left: y, top: C, width: H2, height: O2, bottom: S2, right: x, x: B, y: R2 };
      e.current.element instanceof HTMLElement && i2 && (l.height = e.current.element.offsetHeight, l.width = e.current.element.offsetWidth), Object.freeze(l), w.current && !D(e.current.lastBounds, l) && h2(e.current.lastBounds = l);
    };
    return [r, f2 ? g2(r, f2) : r, d ? g2(r, d) : r];
  }, [h2, i2, d, f2]);
  function v() {
    e.current.scrollContainers && (e.current.scrollContainers.forEach((r) => r.removeEventListener("scroll", s, true)), e.current.scrollContainers = null), e.current.resizeObserver && (e.current.resizeObserver.disconnect(), e.current.resizeObserver = null), e.current.orientationHandler && ("orientation" in screen && "removeEventListener" in screen.orientation ? screen.orientation.removeEventListener("change", e.current.orientationHandler) : "onorientationchange" in window && window.removeEventListener("orientationchange", e.current.orientationHandler));
  }
  function b() {
    e.current.element && (e.current.resizeObserver = new a(s), e.current.resizeObserver.observe(e.current.element), t && e.current.scrollContainers && e.current.scrollContainers.forEach((r) => r.addEventListener("scroll", s, { capture: true, passive: true })), e.current.orientationHandler = () => {
      s();
    }, "orientation" in screen && "addEventListener" in screen.orientation ? screen.orientation.addEventListener("change", e.current.orientationHandler) : "onorientationchange" in window && window.addEventListener("orientationchange", e.current.orientationHandler));
  }
  const L2 = (r) => {
    !r || r === e.current.element || (v(), e.current.element = r, e.current.scrollContainers = E(r), b());
  };
  return X(s, !!t), W2(m), u(() => {
    v(), b();
  }, [t, s, m]), u(() => v, []), [L2, c, z];
}
function W2(n) {
  u(() => {
    const t = n;
    return window.addEventListener("resize", t), () => void window.removeEventListener("resize", t);
  }, [n]);
}
function X(n, t) {
  u(() => {
    if (t) {
      const o = n;
      return window.addEventListener("scroll", o, { capture: true, passive: true }), () => void window.removeEventListener("scroll", o, true);
    }
  }, [n, t]);
}
function E(n) {
  const t = [];
  if (!n || n === document.body) return t;
  const { overflow: o, overflowX: i2, overflowY: a } = window.getComputedStyle(n);
  return [o, i2, a].some((c) => c === "auto" || c === "scroll") && t.push(n), [...t, ...E(n.parentElement)];
}
var k2 = ["x", "y", "top", "bottom", "left", "right", "width", "height"];
var D = (n, t) => k2.every((o) => n[o] === t[o]);

// ../../node_modules/.pnpm/its-fine@1.2.5_@types+react@18.2.73_react@18.3.1/node_modules/its-fine/dist/index.js
import * as React2 from "react";
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues2 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps2 = (a, b) => __defProps(a, __getOwnPropDescs(b));
var _a;
var _b;
var useIsomorphicLayoutEffect3 = typeof window !== "undefined" && (((_a = window.document) == null ? void 0 : _a.createElement) || ((_b = window.navigator) == null ? void 0 : _b.product) === "ReactNative") ? React2.useLayoutEffect : React2.useEffect;
function traverseFiber(fiber, ascending, selector) {
  if (!fiber)
    return;
  if (selector(fiber) === true)
    return fiber;
  let child = ascending ? fiber.return : fiber.child;
  while (child) {
    const match = traverseFiber(child, ascending, selector);
    if (match)
      return match;
    child = ascending ? null : child.sibling;
  }
}
function wrapContext(context2) {
  try {
    return Object.defineProperties(context2, {
      _currentRenderer: {
        get() {
          return null;
        },
        set() {
        }
      },
      _currentRenderer2: {
        get() {
          return null;
        },
        set() {
        }
      }
    });
  } catch (_) {
    return context2;
  }
}
var error = console.error;
console.error = function() {
  const message = [...arguments].join("");
  if ((message == null ? void 0 : message.startsWith("Warning:")) && message.includes("useContext")) {
    console.error = error;
    return;
  }
  return error.apply(this, arguments);
};
var FiberContext = wrapContext(React2.createContext(null));
var FiberProvider = class extends React2.Component {
  render() {
    return /* @__PURE__ */ React2.createElement(FiberContext.Provider, {
      value: this._reactInternals
    }, this.props.children);
  }
};
function useFiber() {
  const root = React2.useContext(FiberContext);
  if (root === null)
    throw new Error("its-fine: useFiber must be called within a <FiberProvider />!");
  const id = React2.useId();
  const fiber = React2.useMemo(() => {
    for (const maybeFiber of [root, root == null ? void 0 : root.alternate]) {
      if (!maybeFiber)
        continue;
      const fiber2 = traverseFiber(maybeFiber, false, (node) => {
        let state = node.memoizedState;
        while (state) {
          if (state.memoizedState === id)
            return true;
          state = state.next;
        }
      });
      if (fiber2)
        return fiber2;
    }
  }, [root, id]);
  return fiber;
}
function useContextMap() {
  const fiber = useFiber();
  const [contextMap] = React2.useState(() => /* @__PURE__ */ new Map());
  contextMap.clear();
  let node = fiber;
  while (node) {
    if (node.type && typeof node.type === "object") {
      const enableRenderableContext = node.type._context === void 0 && node.type.Provider === node.type;
      const context2 = enableRenderableContext ? node.type : node.type._context;
      if (context2 && context2 !== FiberContext && !contextMap.has(context2)) {
        contextMap.set(context2, React2.useContext(wrapContext(context2)));
      }
    }
    node = node.return;
  }
  return contextMap;
}
function useContextBridge() {
  const contextMap = useContextMap();
  return React2.useMemo(
    () => Array.from(contextMap.keys()).reduce(
      (Prev, context2) => (props) => /* @__PURE__ */ React2.createElement(Prev, null, /* @__PURE__ */ React2.createElement(context2.Provider, __spreadProps2(__spreadValues2({}, props), {
        value: contextMap.get(context2)
      }))),
      (props) => /* @__PURE__ */ React2.createElement(FiberProvider, __spreadValues2({}, props))
    ),
    [contextMap]
  );
}

// ../../node_modules/.pnpm/@react-three+fiber@8.18.0_@types+react@18.2.73_react-dom@18.3.1_react@18.3.1__react@18.3.1_three@0.169.0/node_modules/@react-three/fiber/dist/react-three-fiber.esm.js
import { jsx as jsx2 } from "react/jsx-runtime";
var CanvasImpl = /* @__PURE__ */ React3.forwardRef(function Canvas(_a2, forwardedRef) {
  var _b2 = _a2, {
    children,
    fallback,
    resize,
    style,
    gl,
    events = createPointerEvents,
    eventSource,
    eventPrefix,
    shadows,
    linear,
    flat,
    legacy,
    orthographic,
    frameloop,
    dpr,
    performance: performance2,
    raycaster,
    camera,
    scene,
    onPointerMissed,
    onCreated
  } = _b2, props = __objRest(_b2, [
    "children",
    "fallback",
    "resize",
    "style",
    "gl",
    "events",
    "eventSource",
    "eventPrefix",
    "shadows",
    "linear",
    "flat",
    "legacy",
    "orthographic",
    "frameloop",
    "dpr",
    "performance",
    "raycaster",
    "camera",
    "scene",
    "onPointerMissed",
    "onCreated"
  ]);
  React3.useMemo(() => extend(three_module_exports), []);
  const Bridge = useContextBridge();
  const [containerRef, containerRect] = j(__spreadValues({
    scroll: true,
    debounce: {
      scroll: 50,
      resize: 0
    }
  }, resize));
  const canvasRef = React3.useRef(null);
  const divRef = React3.useRef(null);
  React3.useImperativeHandle(forwardedRef, () => canvasRef.current);
  const handlePointerMissed = useMutableCallback(onPointerMissed);
  const [block, setBlock] = React3.useState(false);
  const [error2, setError] = React3.useState(false);
  if (block) throw block;
  if (error2) throw error2;
  const root = React3.useRef(null);
  useIsomorphicLayoutEffect2(() => {
    const canvas = canvasRef.current;
    if (containerRect.width > 0 && containerRect.height > 0 && canvas) {
      if (!root.current) root.current = createRoot(canvas);
      root.current.configure({
        gl,
        events,
        shadows,
        linear,
        flat,
        legacy,
        orthographic,
        frameloop,
        dpr,
        performance: performance2,
        raycaster,
        camera,
        scene,
        size: containerRect,
        // Pass mutable reference to onPointerMissed so it's free to update
        onPointerMissed: (...args) => handlePointerMissed.current == null ? void 0 : handlePointerMissed.current(...args),
        onCreated: (state) => {
          state.events.connect == null ? void 0 : state.events.connect(eventSource ? isRef(eventSource) ? eventSource.current : eventSource : divRef.current);
          if (eventPrefix) {
            state.setEvents({
              compute: (event, state2) => {
                const x = event[eventPrefix + "X"];
                const y = event[eventPrefix + "Y"];
                state2.pointer.set(x / state2.size.width * 2 - 1, -(y / state2.size.height) * 2 + 1);
                state2.raycaster.setFromCamera(state2.pointer, state2.camera);
              }
            });
          }
          onCreated == null ? void 0 : onCreated(state);
        }
      });
      root.current.render(/* @__PURE__ */ jsx2(Bridge, {
        children: /* @__PURE__ */ jsx2(ErrorBoundary, {
          set: setError,
          children: /* @__PURE__ */ jsx2(React3.Suspense, {
            fallback: /* @__PURE__ */ jsx2(Block, {
              set: setBlock
            }),
            children: children != null ? children : null
          })
        })
      }));
    }
  });
  React3.useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) return () => unmountComponentAtNode(canvas);
  }, []);
  const pointerEvents = eventSource ? "none" : "auto";
  return /* @__PURE__ */ jsx2("div", __spreadProps(__spreadValues({
    ref: divRef,
    style: __spreadValues({
      position: "relative",
      width: "100%",
      height: "100%",
      overflow: "hidden",
      pointerEvents
    }, style)
  }, props), {
    children: /* @__PURE__ */ jsx2("div", {
      ref: containerRef,
      style: {
        width: "100%",
        height: "100%"
      },
      children: /* @__PURE__ */ jsx2("canvas", {
        ref: canvasRef,
        style: {
          display: "block"
        },
        children: fallback
      })
    })
  }));
});
var Canvas2 = /* @__PURE__ */ React3.forwardRef(function CanvasWrapper(props, ref) {
  return /* @__PURE__ */ jsx2(FiberProvider, {
    children: /* @__PURE__ */ jsx2(CanvasImpl, __spreadProps(__spreadValues({}, props), {
      ref
    }))
  });
});

export {
  extend,
  useThree,
  useFrame,
  useLoader,
  applyProps,
  createPortal,
  Canvas2 as Canvas
};
/*! Bundled license information:

react-reconciler/cjs/react-reconciler-constants.development.js:
  (**
   * @license React
   * react-reconciler-constants.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-reconciler/cjs/react-reconciler-constants.production.min.js:
  (**
   * @license React
   * react-reconciler-constants.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

scheduler/cjs/scheduler.production.min.js:
  (** @license React v0.20.2
   * scheduler.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-reconciler/cjs/react-reconciler.production.min.js:
  (**
   * @license React
   * react-reconciler.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
