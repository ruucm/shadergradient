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
var react_reconciler_constants_development_exports = {};
__export(react_reconciler_constants_development_exports, {
  ConcurrentRoot: () => __export0,
  ContinuousEventPriority: () => __export1,
  DefaultEventPriority: () => __export2,
  DiscreteEventPriority: () => __export3,
  IdleEventPriority: () => __export4,
  LegacyRoot: () => __export5,
  default: () => react_reconciler_constants_development_default
});
var exports = {};
var module = {
  get exports() {
    return exports;
  },
  set exports(value) {
    exports = value;
  }
};
if (true) {
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
if (false) {
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

// ../../node_modules/.pnpm/react-reconciler@0.27.0_react@18.3.1/node_modules/react-reconciler/cjs/react-reconciler.development.js
var react_reconciler_development_exports = {};
__export(react_reconciler_development_exports, {
  attemptContinuousHydration: () => __export05,
  attemptHydrationAtCurrentPriority: () => __export110,
  attemptSynchronousHydration: () => __export25,
  batchedUpdates: () => __export35,
  createComponentSelector: () => __export45,
  createContainer: () => __export55,
  createHasPseudoClassSelector: () => __export63,
  createHydrationContainer: () => __export73,
  createPortal: () => __export83,
  createRoleSelector: () => __export93,
  createTestNameSelector: () => __export103,
  createTextSelector: () => __export113,
  default: () => react_reconciler_development_default,
  deferredUpdates: () => __export124,
  discreteUpdates: () => __export134,
  findAllNodes: () => __export143,
  findBoundingRects: () => __export153,
  findHostInstance: () => __export163,
  findHostInstanceWithNoPortals: () => __export173,
  findHostInstanceWithWarning: () => __export183,
  flushControlled: () => __export192,
  flushPassiveEffects: () => __export20,
  flushSync: () => __export21,
  focusWithin: () => __export222,
  getCurrentUpdatePriority: () => __export232,
  getFindAllNodesFailureDescription: () => __export242,
  getPublicRootInstance: () => __export252,
  injectIntoDevTools: () => __export26,
  isAlreadyRendering: () => __export27,
  observeVisibleRects: () => __export28,
  registerMutableSourceForHydration: () => __export29,
  runWithPriority: () => __export30,
  shouldError: () => __export31,
  shouldSuspend: () => __export322,
  updateContainer: () => __export332
});

// ../../node_modules/.pnpm/scheduler@0.21.0/node_modules/scheduler/index.js
var scheduler_exports = {};
__export(scheduler_exports, {
  default: () => scheduler_default,
  unstable_IdlePriority: () => __export13,
  unstable_ImmediatePriority: () => __export23,
  unstable_LowPriority: () => __export33,
  unstable_NormalPriority: () => __export43,
  unstable_Profiling: () => __export53,
  unstable_UserBlockingPriority: () => __export6,
  unstable_cancelCallback: () => __export7,
  unstable_continueExecution: () => __export8,
  unstable_forceFrameRate: () => __export9,
  unstable_getCurrentPriorityLevel: () => __export10,
  unstable_getFirstCallbackNode: () => __export11,
  unstable_next: () => __export122,
  unstable_now: () => __export03,
  unstable_pauseExecution: () => __export132,
  unstable_requestPaint: () => __export14,
  unstable_runWithPriority: () => __export15,
  unstable_scheduleCallback: () => __export16,
  unstable_shouldYield: () => __export17,
  unstable_wrapCallback: () => __export18
});

// ../../node_modules/.pnpm/scheduler@0.21.0/node_modules/scheduler/cjs/scheduler.development.js
var scheduler_development_exports = {};
__export(scheduler_development_exports, {
  default: () => scheduler_development_default,
  unstable_IdlePriority: () => __export13,
  unstable_ImmediatePriority: () => __export23,
  unstable_LowPriority: () => __export33,
  unstable_NormalPriority: () => __export43,
  unstable_Profiling: () => __export53,
  unstable_UserBlockingPriority: () => __export6,
  unstable_cancelCallback: () => __export7,
  unstable_continueExecution: () => __export8,
  unstable_forceFrameRate: () => __export9,
  unstable_getCurrentPriorityLevel: () => __export10,
  unstable_getFirstCallbackNode: () => __export11,
  unstable_next: () => __export122,
  unstable_now: () => __export03,
  unstable_pauseExecution: () => __export132,
  unstable_requestPaint: () => __export14,
  unstable_runWithPriority: () => __export15,
  unstable_scheduleCallback: () => __export16,
  unstable_shouldYield: () => __export17,
  unstable_wrapCallback: () => __export18
});
var exports4 = {};
var module4 = {
  get exports() {
    return exports4;
  },
  set exports(value) {
    exports4 = value;
  }
};
if (true) {
  (function() {
    "use strict";
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart === "function") {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    }
    var enableSchedulerDebugging = false;
    var enableProfiling = false;
    var frameYieldMs = 5;
    function push(heap, node) {
      var index = heap.length;
      heap.push(node);
      siftUp(heap, node, index);
    }
    function peek(heap) {
      return heap.length === 0 ? null : heap[0];
    }
    function pop(heap) {
      if (heap.length === 0) {
        return null;
      }
      var first = heap[0];
      var last = heap.pop();
      if (last !== first) {
        heap[0] = last;
        siftDown(heap, last, 0);
      }
      return first;
    }
    function siftUp(heap, node, i2) {
      var index = i2;
      while (index > 0) {
        var parentIndex = index - 1 >>> 1;
        var parent = heap[parentIndex];
        if (compare(parent, node) > 0) {
          heap[parentIndex] = node;
          heap[index] = parent;
          index = parentIndex;
        } else {
          return;
        }
      }
    }
    function siftDown(heap, node, i2) {
      var index = i2;
      var length = heap.length;
      var halfLength = length >>> 1;
      while (index < halfLength) {
        var leftIndex = (index + 1) * 2 - 1;
        var left = heap[leftIndex];
        var rightIndex = leftIndex + 1;
        var right = heap[rightIndex];
        if (compare(left, node) < 0) {
          if (rightIndex < length && compare(right, left) < 0) {
            heap[index] = right;
            heap[rightIndex] = node;
            index = rightIndex;
          } else {
            heap[index] = left;
            heap[leftIndex] = node;
            index = leftIndex;
          }
        } else if (rightIndex < length && compare(right, node) < 0) {
          heap[index] = right;
          heap[rightIndex] = node;
          index = rightIndex;
        } else {
          return;
        }
      }
    }
    function compare(a, b) {
      var diff = a.sortIndex - b.sortIndex;
      return diff !== 0 ? diff : a.id - b.id;
    }
    var ImmediatePriority = 1;
    var UserBlockingPriority = 2;
    var NormalPriority = 3;
    var LowPriority = 4;
    var IdlePriority = 5;
    function markTaskErrored(task, ms) {
    }
    var hasPerformanceNow = typeof performance === "object" && typeof performance.now === "function";
    if (hasPerformanceNow) {
      var localPerformance = performance;
      exports4.unstable_now = function() {
        return localPerformance.now();
      };
    } else {
      var localDate = Date;
      var initialTime = localDate.now();
      exports4.unstable_now = function() {
        return localDate.now() - initialTime;
      };
    }
    var maxSigned31BitInt = 1073741823;
    var IMMEDIATE_PRIORITY_TIMEOUT = -1;
    var USER_BLOCKING_PRIORITY_TIMEOUT = 250;
    var NORMAL_PRIORITY_TIMEOUT = 5e3;
    var LOW_PRIORITY_TIMEOUT = 1e4;
    var IDLE_PRIORITY_TIMEOUT = maxSigned31BitInt;
    var taskQueue = [];
    var timerQueue = [];
    var taskIdCounter = 1;
    var currentTask = null;
    var currentPriorityLevel = NormalPriority;
    var isPerformingWork = false;
    var isHostCallbackScheduled = false;
    var isHostTimeoutScheduled = false;
    var localSetTimeout = typeof setTimeout === "function" ? setTimeout : null;
    var localClearTimeout = typeof clearTimeout === "function" ? clearTimeout : null;
    var localSetImmediate = typeof setImmediate !== "undefined" ? setImmediate : null;
    var isInputPending = typeof navigator !== "undefined" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 ? navigator.scheduling.isInputPending.bind(navigator.scheduling) : null;
    function advanceTimers(currentTime) {
      var timer = peek(timerQueue);
      while (timer !== null) {
        if (timer.callback === null) {
          pop(timerQueue);
        } else if (timer.startTime <= currentTime) {
          pop(timerQueue);
          timer.sortIndex = timer.expirationTime;
          push(taskQueue, timer);
        } else {
          return;
        }
        timer = peek(timerQueue);
      }
    }
    function handleTimeout(currentTime) {
      isHostTimeoutScheduled = false;
      advanceTimers(currentTime);
      if (!isHostCallbackScheduled) {
        if (peek(taskQueue) !== null) {
          isHostCallbackScheduled = true;
          requestHostCallback(flushWork);
        } else {
          var firstTimer = peek(timerQueue);
          if (firstTimer !== null) {
            requestHostTimeout(handleTimeout, firstTimer.startTime - currentTime);
          }
        }
      }
    }
    function flushWork(hasTimeRemaining, initialTime2) {
      isHostCallbackScheduled = false;
      if (isHostTimeoutScheduled) {
        isHostTimeoutScheduled = false;
        cancelHostTimeout();
      }
      isPerformingWork = true;
      var previousPriorityLevel = currentPriorityLevel;
      try {
        if (enableProfiling) {
          try {
            return workLoop(hasTimeRemaining, initialTime2);
          } catch (error2) {
            if (currentTask !== null) {
              var currentTime = exports4.unstable_now();
              markTaskErrored(currentTask, currentTime);
              currentTask.isQueued = false;
            }
            throw error2;
          }
        } else {
          return workLoop(hasTimeRemaining, initialTime2);
        }
      } finally {
        currentTask = null;
        currentPriorityLevel = previousPriorityLevel;
        isPerformingWork = false;
      }
    }
    function workLoop(hasTimeRemaining, initialTime2) {
      var currentTime = initialTime2;
      advanceTimers(currentTime);
      currentTask = peek(taskQueue);
      while (currentTask !== null && !enableSchedulerDebugging) {
        if (currentTask.expirationTime > currentTime && (!hasTimeRemaining || shouldYieldToHost())) {
          break;
        }
        var callback = currentTask.callback;
        if (typeof callback === "function") {
          currentTask.callback = null;
          currentPriorityLevel = currentTask.priorityLevel;
          var didUserCallbackTimeout = currentTask.expirationTime <= currentTime;
          var continuationCallback = callback(didUserCallbackTimeout);
          currentTime = exports4.unstable_now();
          if (typeof continuationCallback === "function") {
            currentTask.callback = continuationCallback;
          } else {
            if (currentTask === peek(taskQueue)) {
              pop(taskQueue);
            }
          }
          advanceTimers(currentTime);
        } else {
          pop(taskQueue);
        }
        currentTask = peek(taskQueue);
      }
      if (currentTask !== null) {
        return true;
      } else {
        var firstTimer = peek(timerQueue);
        if (firstTimer !== null) {
          requestHostTimeout(handleTimeout, firstTimer.startTime - currentTime);
        }
        return false;
      }
    }
    function unstable_runWithPriority(priorityLevel, eventHandler) {
      switch (priorityLevel) {
        case ImmediatePriority:
        case UserBlockingPriority:
        case NormalPriority:
        case LowPriority:
        case IdlePriority:
          break;
        default:
          priorityLevel = NormalPriority;
      }
      var previousPriorityLevel = currentPriorityLevel;
      currentPriorityLevel = priorityLevel;
      try {
        return eventHandler();
      } finally {
        currentPriorityLevel = previousPriorityLevel;
      }
    }
    function unstable_next(eventHandler) {
      var priorityLevel;
      switch (currentPriorityLevel) {
        case ImmediatePriority:
        case UserBlockingPriority:
        case NormalPriority:
          priorityLevel = NormalPriority;
          break;
        default:
          priorityLevel = currentPriorityLevel;
          break;
      }
      var previousPriorityLevel = currentPriorityLevel;
      currentPriorityLevel = priorityLevel;
      try {
        return eventHandler();
      } finally {
        currentPriorityLevel = previousPriorityLevel;
      }
    }
    function unstable_wrapCallback(callback) {
      var parentPriorityLevel = currentPriorityLevel;
      return function() {
        var previousPriorityLevel = currentPriorityLevel;
        currentPriorityLevel = parentPriorityLevel;
        try {
          return callback.apply(this, arguments);
        } finally {
          currentPriorityLevel = previousPriorityLevel;
        }
      };
    }
    function unstable_scheduleCallback(priorityLevel, callback, options) {
      var currentTime = exports4.unstable_now();
      var startTime2;
      if (typeof options === "object" && options !== null) {
        var delay = options.delay;
        if (typeof delay === "number" && delay > 0) {
          startTime2 = currentTime + delay;
        } else {
          startTime2 = currentTime;
        }
      } else {
        startTime2 = currentTime;
      }
      var timeout;
      switch (priorityLevel) {
        case ImmediatePriority:
          timeout = IMMEDIATE_PRIORITY_TIMEOUT;
          break;
        case UserBlockingPriority:
          timeout = USER_BLOCKING_PRIORITY_TIMEOUT;
          break;
        case IdlePriority:
          timeout = IDLE_PRIORITY_TIMEOUT;
          break;
        case LowPriority:
          timeout = LOW_PRIORITY_TIMEOUT;
          break;
        case NormalPriority:
        default:
          timeout = NORMAL_PRIORITY_TIMEOUT;
          break;
      }
      var expirationTime = startTime2 + timeout;
      var newTask = {
        id: taskIdCounter++,
        callback,
        priorityLevel,
        startTime: startTime2,
        expirationTime,
        sortIndex: -1
      };
      if (startTime2 > currentTime) {
        newTask.sortIndex = startTime2;
        push(timerQueue, newTask);
        if (peek(taskQueue) === null && newTask === peek(timerQueue)) {
          if (isHostTimeoutScheduled) {
            cancelHostTimeout();
          } else {
            isHostTimeoutScheduled = true;
          }
          requestHostTimeout(handleTimeout, startTime2 - currentTime);
        }
      } else {
        newTask.sortIndex = expirationTime;
        push(taskQueue, newTask);
        if (!isHostCallbackScheduled && !isPerformingWork) {
          isHostCallbackScheduled = true;
          requestHostCallback(flushWork);
        }
      }
      return newTask;
    }
    function unstable_pauseExecution() {
    }
    function unstable_continueExecution() {
      if (!isHostCallbackScheduled && !isPerformingWork) {
        isHostCallbackScheduled = true;
        requestHostCallback(flushWork);
      }
    }
    function unstable_getFirstCallbackNode() {
      return peek(taskQueue);
    }
    function unstable_cancelCallback(task) {
      task.callback = null;
    }
    function unstable_getCurrentPriorityLevel() {
      return currentPriorityLevel;
    }
    var isMessageLoopRunning = false;
    var scheduledHostCallback = null;
    var taskTimeoutID = -1;
    var frameInterval = frameYieldMs;
    var startTime = -1;
    function shouldYieldToHost() {
      var timeElapsed = exports4.unstable_now() - startTime;
      if (timeElapsed < frameInterval) {
        return false;
      }
      return true;
    }
    function requestPaint() {
    }
    function forceFrameRate(fps) {
      if (fps < 0 || fps > 125) {
        console["error"]("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
        return;
      }
      if (fps > 0) {
        frameInterval = Math.floor(1e3 / fps);
      } else {
        frameInterval = frameYieldMs;
      }
    }
    var performWorkUntilDeadline = function() {
      if (scheduledHostCallback !== null) {
        var currentTime = exports4.unstable_now();
        startTime = currentTime;
        var hasTimeRemaining = true;
        var hasMoreWork = true;
        try {
          hasMoreWork = scheduledHostCallback(hasTimeRemaining, currentTime);
        } finally {
          if (hasMoreWork) {
            schedulePerformWorkUntilDeadline();
          } else {
            isMessageLoopRunning = false;
            scheduledHostCallback = null;
          }
        }
      } else {
        isMessageLoopRunning = false;
      }
    };
    var schedulePerformWorkUntilDeadline;
    if (typeof localSetImmediate === "function") {
      schedulePerformWorkUntilDeadline = function() {
        localSetImmediate(performWorkUntilDeadline);
      };
    } else if (typeof MessageChannel !== "undefined") {
      var channel = new MessageChannel();
      var port = channel.port2;
      channel.port1.onmessage = performWorkUntilDeadline;
      schedulePerformWorkUntilDeadline = function() {
        port.postMessage(null);
      };
    } else {
      schedulePerformWorkUntilDeadline = function() {
        localSetTimeout(performWorkUntilDeadline, 0);
      };
    }
    function requestHostCallback(callback) {
      scheduledHostCallback = callback;
      if (!isMessageLoopRunning) {
        isMessageLoopRunning = true;
        schedulePerformWorkUntilDeadline();
      }
    }
    function requestHostTimeout(callback, ms) {
      taskTimeoutID = localSetTimeout(function() {
        callback(exports4.unstable_now());
      }, ms);
    }
    function cancelHostTimeout() {
      localClearTimeout(taskTimeoutID);
      taskTimeoutID = -1;
    }
    var unstable_requestPaint = requestPaint;
    var unstable_Profiling = null;
    exports4.unstable_IdlePriority = IdlePriority;
    exports4.unstable_ImmediatePriority = ImmediatePriority;
    exports4.unstable_LowPriority = LowPriority;
    exports4.unstable_NormalPriority = NormalPriority;
    exports4.unstable_Profiling = unstable_Profiling;
    exports4.unstable_UserBlockingPriority = UserBlockingPriority;
    exports4.unstable_cancelCallback = unstable_cancelCallback;
    exports4.unstable_continueExecution = unstable_continueExecution;
    exports4.unstable_forceFrameRate = forceFrameRate;
    exports4.unstable_getCurrentPriorityLevel = unstable_getCurrentPriorityLevel;
    exports4.unstable_getFirstCallbackNode = unstable_getFirstCallbackNode;
    exports4.unstable_next = unstable_next;
    exports4.unstable_pauseExecution = unstable_pauseExecution;
    exports4.unstable_requestPaint = unstable_requestPaint;
    exports4.unstable_runWithPriority = unstable_runWithPriority;
    exports4.unstable_scheduleCallback = unstable_scheduleCallback;
    exports4.unstable_shouldYield = shouldYieldToHost;
    exports4.unstable_wrapCallback = unstable_wrapCallback;
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop === "function") {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }
  })();
}
var __export03;
var __export13;
var __export23;
var __export33;
var __export43;
var __export53;
var __export6;
var __export7;
var __export8;
var __export9;
var __export10;
var __export11;
var __export122;
var __export132;
var __export14;
var __export15;
var __export16;
var __export17;
var __export18;
if (Object.isExtensible(module4.exports) && Object.keys(module4.exports).length === 19) {
  __export03 = module4.exports["unstable_now"];
  __export13 = module4.exports["unstable_IdlePriority"];
  __export23 = module4.exports["unstable_ImmediatePriority"];
  __export33 = module4.exports["unstable_LowPriority"];
  __export43 = module4.exports["unstable_NormalPriority"];
  __export53 = module4.exports["unstable_Profiling"];
  __export6 = module4.exports["unstable_UserBlockingPriority"];
  __export7 = module4.exports["unstable_cancelCallback"];
  __export8 = module4.exports["unstable_continueExecution"];
  __export9 = module4.exports["unstable_forceFrameRate"];
  __export10 = module4.exports["unstable_getCurrentPriorityLevel"];
  __export11 = module4.exports["unstable_getFirstCallbackNode"];
  __export122 = module4.exports["unstable_next"];
  __export132 = module4.exports["unstable_pauseExecution"];
  __export14 = module4.exports["unstable_requestPaint"];
  __export15 = module4.exports["unstable_runWithPriority"];
  __export16 = module4.exports["unstable_scheduleCallback"];
  __export17 = module4.exports["unstable_shouldYield"];
  __export18 = module4.exports["unstable_wrapCallback"];
}
var scheduler_development_default = module4.exports;

// ../../node_modules/.pnpm/scheduler@0.21.0/node_modules/scheduler/cjs/scheduler.production.min.js
var exports5 = {};
var module5 = {
  get exports() {
    return exports5;
  },
  set exports(value) {
    exports5 = value;
  }
};
function f(a, b) {
  var c = a.length;
  a.push(b);
  a: for (; 0 < c; ) {
    var d = c - 1 >>> 1, e = a[d];
    if (0 < g(e, b)) a[d] = b, a[c] = e, c = d;
    else break a;
  }
}
function h(a) {
  return 0 === a.length ? null : a[0];
}
function k(a) {
  if (0 === a.length) return null;
  var b = a[0], c = a.pop();
  if (c !== b) {
    a[0] = c;
    a: for (var d = 0, e = a.length, w = e >>> 1; d < w; ) {
      var m = 2 * (d + 1) - 1, C = a[m], n = m + 1, x = a[n];
      if (0 > g(C, c)) n < e && 0 > g(x, C) ? (a[d] = x, a[n] = c, d = n) : (a[d] = C, a[m] = c, d = m);
      else if (n < e && 0 > g(x, c)) a[d] = x, a[n] = c, d = n;
      else break a;
    }
  }
  return b;
}
function g(a, b) {
  var c = a.sortIndex - b.sortIndex;
  return 0 !== c ? c : a.id - b.id;
}
if ("object" === typeof performance && "function" === typeof performance.now) {
  l = performance;
  exports5.unstable_now = function() {
    return l.now();
  };
} else {
  p2 = Date, q = p2.now();
  exports5.unstable_now = function() {
    return p2.now() - q;
  };
}
var l;
var p2;
var q;
var r = [];
var t = [];
var u = 1;
var v = null;
var y = 3;
var z = false;
var A = false;
var B = false;
var D = "function" === typeof setTimeout ? setTimeout : null;
var E = "function" === typeof clearTimeout ? clearTimeout : null;
var F = "undefined" !== typeof setImmediate ? setImmediate : null;
"undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
function G(a) {
  for (var b = h(t); null !== b; ) {
    if (null === b.callback) k(t);
    else if (b.startTime <= a) k(t), b.sortIndex = b.expirationTime, f(r, b);
    else break;
    b = h(t);
  }
}
function H(a) {
  B = false;
  G(a);
  if (!A) if (null !== h(r)) A = true, I(J);
  else {
    var b = h(t);
    null !== b && K(H, b.startTime - a);
  }
}
function J(a, b) {
  A = false;
  B && (B = false, E(L), L = -1);
  z = true;
  var c = y;
  try {
    G(b);
    for (v = h(r); null !== v && (!(v.expirationTime > b) || a && !M()); ) {
      var d = v.callback;
      if ("function" === typeof d) {
        v.callback = null;
        y = v.priorityLevel;
        var e = d(v.expirationTime <= b);
        b = exports5.unstable_now();
        "function" === typeof e ? v.callback = e : v === h(r) && k(r);
        G(b);
      } else k(r);
      v = h(r);
    }
    if (null !== v) var w = true;
    else {
      var m = h(t);
      null !== m && K(H, m.startTime - b);
      w = false;
    }
    return w;
  } finally {
    v = null, y = c, z = false;
  }
}
var N = false;
var O = null;
var L = -1;
var P = 5;
var Q = -1;
function M() {
  return exports5.unstable_now() - Q < P ? false : true;
}
function R() {
  if (null !== O) {
    var a = exports5.unstable_now();
    Q = a;
    var b = true;
    try {
      b = O(true, a);
    } finally {
      b ? S() : (N = false, O = null);
    }
  } else N = false;
}
var S;
if ("function" === typeof F) S = function() {
  F(R);
};
else if ("undefined" !== typeof MessageChannel) {
  T2 = new MessageChannel(), U = T2.port2;
  T2.port1.onmessage = R;
  S = function() {
    U.postMessage(null);
  };
} else S = function() {
  D(R, 0);
};
var T2;
var U;
function I(a) {
  O = a;
  N || (N = true, S());
}
function K(a, b) {
  L = D(function() {
    a(exports5.unstable_now());
  }, b);
}
exports5.unstable_IdlePriority = 5;
exports5.unstable_ImmediatePriority = 1;
exports5.unstable_LowPriority = 4;
exports5.unstable_NormalPriority = 3;
exports5.unstable_Profiling = null;
exports5.unstable_UserBlockingPriority = 2;
exports5.unstable_cancelCallback = function(a) {
  a.callback = null;
};
exports5.unstable_continueExecution = function() {
  A || z || (A = true, I(J));
};
exports5.unstable_forceFrameRate = function(a) {
  0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P = 0 < a ? Math.floor(1e3 / a) : 5;
};
exports5.unstable_getCurrentPriorityLevel = function() {
  return y;
};
exports5.unstable_getFirstCallbackNode = function() {
  return h(r);
};
exports5.unstable_next = function(a) {
  switch (y) {
    case 1:
    case 2:
    case 3:
      var b = 3;
      break;
    default:
      b = y;
  }
  var c = y;
  y = b;
  try {
    return a();
  } finally {
    y = c;
  }
};
exports5.unstable_pauseExecution = function() {
};
exports5.unstable_requestPaint = function() {
};
exports5.unstable_runWithPriority = function(a, b) {
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
  var c = y;
  y = a;
  try {
    return b();
  } finally {
    y = c;
  }
};
exports5.unstable_scheduleCallback = function(a, b, c) {
  var d = exports5.unstable_now();
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
  a = { id: u++, callback: b, priorityLevel: a, startTime: c, expirationTime: e, sortIndex: -1 };
  c > d ? (a.sortIndex = c, f(t, a), null === h(r) && a === h(t) && (B ? (E(L), L = -1) : B = true, K(H, c - d))) : (a.sortIndex = e, f(r, a), A || z || (A = true, I(J)));
  return a;
};
exports5.unstable_shouldYield = M;
exports5.unstable_wrapCallback = function(a) {
  var b = y;
  return function() {
    var c = y;
    y = b;
    try {
      return a.apply(this, arguments);
    } finally {
      y = c;
    }
  };
};
var __export04;
var __export19;
var __export24;
var __export34;
var __export44;
var __export54;
var __export62;
var __export72;
var __export82;
var __export92;
var __export102;
var __export112;
var __export123;
var __export133;
var __export142;
var __export152;
var __export162;
var __export172;
var __export182;
if (Object.isExtensible(module5.exports) && Object.keys(module5.exports).length === 19) {
  __export04 = module5.exports["unstable_now"];
  __export19 = module5.exports["unstable_IdlePriority"];
  __export24 = module5.exports["unstable_ImmediatePriority"];
  __export34 = module5.exports["unstable_LowPriority"];
  __export44 = module5.exports["unstable_NormalPriority"];
  __export54 = module5.exports["unstable_Profiling"];
  __export62 = module5.exports["unstable_UserBlockingPriority"];
  __export72 = module5.exports["unstable_cancelCallback"];
  __export82 = module5.exports["unstable_continueExecution"];
  __export92 = module5.exports["unstable_forceFrameRate"];
  __export102 = module5.exports["unstable_getCurrentPriorityLevel"];
  __export112 = module5.exports["unstable_getFirstCallbackNode"];
  __export123 = module5.exports["unstable_next"];
  __export133 = module5.exports["unstable_pauseExecution"];
  __export142 = module5.exports["unstable_requestPaint"];
  __export152 = module5.exports["unstable_runWithPriority"];
  __export162 = module5.exports["unstable_scheduleCallback"];
  __export172 = module5.exports["unstable_shouldYield"];
  __export182 = module5.exports["unstable_wrapCallback"];
}
var scheduler_production_min_default = module5.exports;

// ../../node_modules/.pnpm/scheduler@0.21.0/node_modules/scheduler/index.js
function __cjs_default__2(requiredModule) {
  var Object2 = (typeof window !== "undefined" && window || typeof self !== "undefined" && self || typeof global2 !== "undefined" && global2 || typeof globalThis !== "undefined" && globalThis || {}).Object;
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
var global2 = typeof window !== "undefined" && window || typeof self !== "undefined" && self || typeof global2 !== "undefined" && global2 || typeof globalThis !== "undefined" && globalThis || {};
var exports6 = {};
var module6 = {
  get exports() {
    return exports6;
  },
  set exports(value) {
    exports6 = value;
  }
};
if (false) {
  module6.exports = __cjs_default__2(typeof scheduler_production_min_exports !== "undefined" ? scheduler_production_min_exports : {});
} else {
  module6.exports = __cjs_default__2(typeof scheduler_development_exports !== "undefined" ? scheduler_development_exports : {});
}
var scheduler_default = module6.exports;

// ../../node_modules/.pnpm/react-reconciler@0.27.0_react@18.3.1/node_modules/react-reconciler/cjs/react-reconciler.development.js
import * as $cjs$react from "react";
function __cjs_default__3(requiredModule) {
  var Object2 = (typeof window !== "undefined" && window || typeof self !== "undefined" && self || typeof global3 !== "undefined" && global3 || typeof globalThis !== "undefined" && globalThis || {}).Object;
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
var global3 = typeof window !== "undefined" && window || typeof self !== "undefined" && self || typeof global3 !== "undefined" && global3 || typeof globalThis !== "undefined" && globalThis || {};
var exports7 = {};
var module7 = {
  get exports() {
    return exports7;
  },
  set exports(value) {
    exports7 = value;
  }
};
if (true) {
  module7.exports = function $$$reconciler2($$$hostConfig) {
    var exports10 = {};
    "use strict";
    var React4 = __cjs_default__3(typeof $cjs$react !== "undefined" ? $cjs$react : {});
    var Scheduler = __cjs_default__3(typeof scheduler_exports !== "undefined" ? scheduler_exports : {});
    var ReactSharedInternals = React4.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    var suppressWarning = false;
    function setSuppressWarning(newSuppressWarning) {
      {
        suppressWarning = newSuppressWarning;
      }
    }
    function warn(format) {
      {
        if (!suppressWarning) {
          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }
          printWarning("warn", format, args);
        }
      }
    }
    function error2(format) {
      {
        if (!suppressWarning) {
          for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            args[_key2 - 1] = arguments[_key2];
          }
          printWarning("error", format, args);
        }
      }
    }
    function printWarning(level, format, args) {
      {
        var ReactDebugCurrentFrame2 = ReactSharedInternals.ReactDebugCurrentFrame;
        var stack = ReactDebugCurrentFrame2.getStackAddendum();
        if (stack !== "") {
          format += "%s";
          args = args.concat([stack]);
        }
        var argsWithFormat = args.map(function(item) {
          return String(item);
        });
        argsWithFormat.unshift("Warning: " + format);
        Function.prototype.apply.call(console[level], console, argsWithFormat);
      }
    }
    var assign = Object.assign;
    function get(key) {
      return key._reactInternals;
    }
    function set(key, value) {
      key._reactInternals = value;
    }
    var enablePersistentOffscreenHostContainer = false;
    var enableNewReconciler = false;
    var enableLazyContextPropagation = false;
    var enableLegacyHidden = false;
    var enableSuspenseAvoidThisFallback = false;
    var warnAboutStringRefs = false;
    var enableSchedulingProfiler = true;
    var enableProfilerTimer = true;
    var enableProfilerCommitHooks = true;
    var FunctionComponent = 0;
    var ClassComponent = 1;
    var IndeterminateComponent = 2;
    var HostRoot = 3;
    var HostPortal = 4;
    var HostComponent = 5;
    var HostText = 6;
    var Fragment2 = 7;
    var Mode = 8;
    var ContextConsumer = 9;
    var ContextProvider = 10;
    var ForwardRef = 11;
    var Profiler = 12;
    var SuspenseComponent = 13;
    var MemoComponent = 14;
    var SimpleMemoComponent = 15;
    var LazyComponent = 16;
    var IncompleteClassComponent = 17;
    var DehydratedFragment = 18;
    var SuspenseListComponent = 19;
    var ScopeComponent = 21;
    var OffscreenComponent = 22;
    var LegacyHiddenComponent = 23;
    var CacheComponent = 24;
    var TracingMarkerComponent = 25;
    var REACT_ELEMENT_TYPE = Symbol.for("react.element");
    var REACT_PORTAL_TYPE = Symbol.for("react.portal");
    var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
    var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
    var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
    var REACT_PROVIDER_TYPE = Symbol.for("react.provider");
    var REACT_CONTEXT_TYPE = Symbol.for("react.context");
    var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
    var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
    var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
    var REACT_MEMO_TYPE = Symbol.for("react.memo");
    var REACT_LAZY_TYPE = Symbol.for("react.lazy");
    var REACT_SCOPE_TYPE = Symbol.for("react.scope");
    var REACT_DEBUG_TRACING_MODE_TYPE = Symbol.for("react.debug_trace_mode");
    var REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen");
    var REACT_LEGACY_HIDDEN_TYPE = Symbol.for("react.legacy_hidden");
    var REACT_CACHE_TYPE = Symbol.for("react.cache");
    var REACT_TRACING_MARKER_TYPE = Symbol.for("react.tracing_marker");
    var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
    var FAUX_ITERATOR_SYMBOL = "@@iterator";
    function getIteratorFn(maybeIterable) {
      if (maybeIterable === null || typeof maybeIterable !== "object") {
        return null;
      }
      var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
      if (typeof maybeIterator === "function") {
        return maybeIterator;
      }
      return null;
    }
    function getWrappedName(outerType, innerType, wrapperName) {
      var displayName = outerType.displayName;
      if (displayName) {
        return displayName;
      }
      var functionName = innerType.displayName || innerType.name || "";
      return functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName;
    }
    function getContextName(type) {
      return type.displayName || "Context";
    }
    function getComponentNameFromType(type) {
      if (type == null) {
        return null;
      }
      {
        if (typeof type.tag === "number") {
          error2("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.");
        }
      }
      if (typeof type === "function") {
        return type.displayName || type.name || null;
      }
      if (typeof type === "string") {
        return type;
      }
      switch (type) {
        case REACT_FRAGMENT_TYPE:
          return "Fragment";
        case REACT_PORTAL_TYPE:
          return "Portal";
        case REACT_PROFILER_TYPE:
          return "Profiler";
        case REACT_STRICT_MODE_TYPE:
          return "StrictMode";
        case REACT_SUSPENSE_TYPE:
          return "Suspense";
        case REACT_SUSPENSE_LIST_TYPE:
          return "SuspenseList";
      }
      if (typeof type === "object") {
        switch (type.$$typeof) {
          case REACT_CONTEXT_TYPE:
            var context2 = type;
            return getContextName(context2) + ".Consumer";
          case REACT_PROVIDER_TYPE:
            var provider = type;
            return getContextName(provider._context) + ".Provider";
          case REACT_FORWARD_REF_TYPE:
            return getWrappedName(type, type.render, "ForwardRef");
          case REACT_MEMO_TYPE:
            var outerName = type.displayName || null;
            if (outerName !== null) {
              return outerName;
            }
            return getComponentNameFromType(type.type) || "Memo";
          case REACT_LAZY_TYPE: {
            var lazyComponent = type;
            var payload = lazyComponent._payload;
            var init = lazyComponent._init;
            try {
              return getComponentNameFromType(init(payload));
            } catch (x) {
              return null;
            }
          }
        }
      }
      return null;
    }
    function getWrappedName$1(outerType, innerType, wrapperName) {
      var functionName = innerType.displayName || innerType.name || "";
      return outerType.displayName || (functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName);
    }
    function getContextName$1(type) {
      return type.displayName || "Context";
    }
    function getComponentNameFromFiber(fiber) {
      var tag = fiber.tag, type = fiber.type;
      switch (tag) {
        case CacheComponent:
          return "Cache";
        case ContextConsumer:
          var context2 = type;
          return getContextName$1(context2) + ".Consumer";
        case ContextProvider:
          var provider = type;
          return getContextName$1(provider._context) + ".Provider";
        case DehydratedFragment:
          return "DehydratedFragment";
        case ForwardRef:
          return getWrappedName$1(type, type.render, "ForwardRef");
        case Fragment2:
          return "Fragment";
        case HostComponent:
          return type;
        case HostPortal:
          return "Portal";
        case HostRoot:
          return "Root";
        case HostText:
          return "Text";
        case LazyComponent:
          return getComponentNameFromType(type);
        case Mode:
          if (type === REACT_STRICT_MODE_TYPE) {
            return "StrictMode";
          }
          return "Mode";
        case OffscreenComponent:
          return "Offscreen";
        case Profiler:
          return "Profiler";
        case ScopeComponent:
          return "Scope";
        case SuspenseComponent:
          return "Suspense";
        case SuspenseListComponent:
          return "SuspenseList";
        case TracingMarkerComponent:
          return "TracingMarker";
        // The display name for this tags come from the user-provided type:
        case ClassComponent:
        case FunctionComponent:
        case IncompleteClassComponent:
        case IndeterminateComponent:
        case MemoComponent:
        case SimpleMemoComponent:
          if (typeof type === "function") {
            return type.displayName || type.name || null;
          }
          if (typeof type === "string") {
            return type;
          }
          break;
      }
      return null;
    }
    var NoFlags = (
      /*                      */
      0
    );
    var PerformedWork = (
      /*                */
      1
    );
    var Placement = (
      /*                    */
      2
    );
    var Update = (
      /*                       */
      4
    );
    var PlacementAndUpdate = (
      /*           */
      Placement | Update
    );
    var ChildDeletion = (
      /*                */
      16
    );
    var ContentReset = (
      /*                 */
      32
    );
    var Callback = (
      /*                     */
      64
    );
    var DidCapture = (
      /*                   */
      128
    );
    var ForceClientRender = (
      /*            */
      256
    );
    var Ref = (
      /*                          */
      512
    );
    var Snapshot = (
      /*                     */
      1024
    );
    var Passive = (
      /*                      */
      2048
    );
    var Hydrating = (
      /*                    */
      4096
    );
    var HydratingAndUpdate = (
      /*           */
      Hydrating | Update
    );
    var Visibility = (
      /*                   */
      8192
    );
    var StoreConsistency = (
      /*             */
      16384
    );
    var LifecycleEffectMask = Passive | Update | Callback | Ref | Snapshot | StoreConsistency;
    var HostEffectMask = (
      /*               */
      32767
    );
    var Incomplete = (
      /*                   */
      32768
    );
    var ShouldCapture = (
      /*                */
      65536
    );
    var ForceUpdateForLegacySuspense = (
      /* */
      131072
    );
    var Forked = (
      /*                       */
      1048576
    );
    var RefStatic = (
      /*                    */
      2097152
    );
    var LayoutStatic = (
      /*                 */
      4194304
    );
    var PassiveStatic = (
      /*                */
      8388608
    );
    var MountLayoutDev = (
      /*               */
      16777216
    );
    var MountPassiveDev = (
      /*              */
      33554432
    );
    var BeforeMutationMask = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      Update | Snapshot | 0
    );
    var MutationMask = Placement | Update | ChildDeletion | ContentReset | Ref | Hydrating | Visibility;
    var LayoutMask = Update | Callback | Ref | Visibility;
    var PassiveMask = Passive | ChildDeletion;
    var StaticMask = LayoutStatic | PassiveStatic | RefStatic;
    var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
    function getNearestMountedFiber(fiber) {
      var node = fiber;
      var nearestMounted = fiber;
      if (!fiber.alternate) {
        var nextNode = node;
        do {
          node = nextNode;
          if ((node.flags & (Placement | Hydrating)) !== NoFlags) {
            nearestMounted = node.return;
          }
          nextNode = node.return;
        } while (nextNode);
      } else {
        while (node.return) {
          node = node.return;
        }
      }
      if (node.tag === HostRoot) {
        return nearestMounted;
      }
      return null;
    }
    function isFiberMounted(fiber) {
      return getNearestMountedFiber(fiber) === fiber;
    }
    function isMounted(component) {
      {
        var owner = ReactCurrentOwner.current;
        if (owner !== null && owner.tag === ClassComponent) {
          var ownerFiber = owner;
          var instance = ownerFiber.stateNode;
          if (!instance._warnedAboutRefsInRender) {
            error2("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", getComponentNameFromFiber(ownerFiber) || "A component");
          }
          instance._warnedAboutRefsInRender = true;
        }
      }
      var fiber = get(component);
      if (!fiber) {
        return false;
      }
      return getNearestMountedFiber(fiber) === fiber;
    }
    function assertIsMounted(fiber) {
      if (getNearestMountedFiber(fiber) !== fiber) {
        throw new Error("Unable to find node on an unmounted component.");
      }
    }
    function findCurrentFiberUsingSlowPath(fiber) {
      var alternate = fiber.alternate;
      if (!alternate) {
        var nearestMounted = getNearestMountedFiber(fiber);
        if (nearestMounted === null) {
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (nearestMounted !== fiber) {
          return null;
        }
        return fiber;
      }
      var a = fiber;
      var b = alternate;
      while (true) {
        var parentA = a.return;
        if (parentA === null) {
          break;
        }
        var parentB = parentA.alternate;
        if (parentB === null) {
          var nextParent = parentA.return;
          if (nextParent !== null) {
            a = b = nextParent;
            continue;
          }
          break;
        }
        if (parentA.child === parentB.child) {
          var child = parentA.child;
          while (child) {
            if (child === a) {
              assertIsMounted(parentA);
              return fiber;
            }
            if (child === b) {
              assertIsMounted(parentA);
              return alternate;
            }
            child = child.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (a.return !== b.return) {
          a = parentA;
          b = parentB;
        } else {
          var didFindChild = false;
          var _child = parentA.child;
          while (_child) {
            if (_child === a) {
              didFindChild = true;
              a = parentA;
              b = parentB;
              break;
            }
            if (_child === b) {
              didFindChild = true;
              b = parentA;
              a = parentB;
              break;
            }
            _child = _child.sibling;
          }
          if (!didFindChild) {
            _child = parentB.child;
            while (_child) {
              if (_child === a) {
                didFindChild = true;
                a = parentB;
                b = parentA;
                break;
              }
              if (_child === b) {
                didFindChild = true;
                b = parentB;
                a = parentA;
                break;
              }
              _child = _child.sibling;
            }
            if (!didFindChild) {
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
            }
          }
        }
        if (a.alternate !== b) {
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
        }
      }
      if (a.tag !== HostRoot) {
        throw new Error("Unable to find node on an unmounted component.");
      }
      if (a.stateNode.current === a) {
        return fiber;
      }
      return alternate;
    }
    function findCurrentHostFiber(parent) {
      var currentParent = findCurrentFiberUsingSlowPath(parent);
      return currentParent !== null ? findCurrentHostFiberImpl(currentParent) : null;
    }
    function findCurrentHostFiberImpl(node) {
      if (node.tag === HostComponent || node.tag === HostText) {
        return node;
      }
      var child = node.child;
      while (child !== null) {
        var match = findCurrentHostFiberImpl(child);
        if (match !== null) {
          return match;
        }
        child = child.sibling;
      }
      return null;
    }
    function findCurrentHostFiberWithNoPortals(parent) {
      var currentParent = findCurrentFiberUsingSlowPath(parent);
      return currentParent !== null ? findCurrentHostFiberWithNoPortalsImpl(currentParent) : null;
    }
    function findCurrentHostFiberWithNoPortalsImpl(node) {
      if (node.tag === HostComponent || node.tag === HostText) {
        return node;
      }
      var child = node.child;
      while (child !== null) {
        if (child.tag !== HostPortal) {
          var match = findCurrentHostFiberWithNoPortalsImpl(child);
          if (match !== null) {
            return match;
          }
        }
        child = child.sibling;
      }
      return null;
    }
    var isArrayImpl = Array.isArray;
    function isArray(a) {
      return isArrayImpl(a);
    }
    var getPublicInstance = $$$hostConfig.getPublicInstance;
    var getRootHostContext = $$$hostConfig.getRootHostContext;
    var getChildHostContext = $$$hostConfig.getChildHostContext;
    var prepareForCommit = $$$hostConfig.prepareForCommit;
    var resetAfterCommit = $$$hostConfig.resetAfterCommit;
    var createInstance = $$$hostConfig.createInstance;
    var appendInitialChild = $$$hostConfig.appendInitialChild;
    var finalizeInitialChildren = $$$hostConfig.finalizeInitialChildren;
    var prepareUpdate = $$$hostConfig.prepareUpdate;
    var shouldSetTextContent = $$$hostConfig.shouldSetTextContent;
    var createTextInstance = $$$hostConfig.createTextInstance;
    var scheduleTimeout = $$$hostConfig.scheduleTimeout;
    var cancelTimeout = $$$hostConfig.cancelTimeout;
    var noTimeout = $$$hostConfig.noTimeout;
    var now = $$$hostConfig.now;
    var isPrimaryRenderer = $$$hostConfig.isPrimaryRenderer;
    var warnsIfNotActing = $$$hostConfig.warnsIfNotActing;
    var supportsMutation = $$$hostConfig.supportsMutation;
    var supportsPersistence = $$$hostConfig.supportsPersistence;
    var supportsHydration = $$$hostConfig.supportsHydration;
    var getInstanceFromNode = $$$hostConfig.getInstanceFromNode;
    var beforeActiveInstanceBlur = $$$hostConfig.beforeActiveInstanceBlur;
    var afterActiveInstanceBlur = $$$hostConfig.afterActiveInstanceBlur;
    var preparePortalMount = $$$hostConfig.preparePortalMount;
    var prepareScopeUpdate = $$$hostConfig.preparePortalMount;
    var getInstanceFromScope = $$$hostConfig.getInstanceFromScope;
    var getCurrentEventPriority = $$$hostConfig.getCurrentEventPriority;
    var detachDeletedInstance = $$$hostConfig.detachDeletedInstance;
    var supportsMicrotasks = $$$hostConfig.supportsMicrotasks;
    var scheduleMicrotask = $$$hostConfig.scheduleMicrotask;
    var supportsTestSelectors = $$$hostConfig.supportsTestSelectors;
    var findFiberRoot = $$$hostConfig.findFiberRoot;
    var getBoundingRect = $$$hostConfig.getBoundingRect;
    var getTextContent = $$$hostConfig.getTextContent;
    var isHiddenSubtree = $$$hostConfig.isHiddenSubtree;
    var matchAccessibilityRole = $$$hostConfig.matchAccessibilityRole;
    var setFocusIfFocusable = $$$hostConfig.setFocusIfFocusable;
    var setupIntersectionObserver = $$$hostConfig.setupIntersectionObserver;
    var appendChild = $$$hostConfig.appendChild;
    var appendChildToContainer = $$$hostConfig.appendChildToContainer;
    var commitTextUpdate = $$$hostConfig.commitTextUpdate;
    var commitMount = $$$hostConfig.commitMount;
    var commitUpdate = $$$hostConfig.commitUpdate;
    var insertBefore = $$$hostConfig.insertBefore;
    var insertInContainerBefore = $$$hostConfig.insertInContainerBefore;
    var removeChild = $$$hostConfig.removeChild;
    var removeChildFromContainer = $$$hostConfig.removeChildFromContainer;
    var resetTextContent = $$$hostConfig.resetTextContent;
    var hideInstance = $$$hostConfig.hideInstance;
    var hideTextInstance = $$$hostConfig.hideTextInstance;
    var unhideInstance = $$$hostConfig.unhideInstance;
    var unhideTextInstance = $$$hostConfig.unhideTextInstance;
    var clearContainer = $$$hostConfig.clearContainer;
    var cloneInstance = $$$hostConfig.cloneInstance;
    var createContainerChildSet = $$$hostConfig.createContainerChildSet;
    var appendChildToContainerChildSet = $$$hostConfig.appendChildToContainerChildSet;
    var finalizeContainerChildren = $$$hostConfig.finalizeContainerChildren;
    var replaceContainerChildren = $$$hostConfig.replaceContainerChildren;
    var getOffscreenContainerType = $$$hostConfig.getOffscreenContainerType;
    var getOffscreenContainerProps = $$$hostConfig.getOffscreenContainerProps;
    var cloneHiddenInstance = $$$hostConfig.cloneHiddenInstance;
    var cloneHiddenTextInstance = $$$hostConfig.cloneHiddenTextInstance;
    var canHydrateInstance = $$$hostConfig.canHydrateInstance;
    var canHydrateTextInstance = $$$hostConfig.canHydrateTextInstance;
    var canHydrateSuspenseInstance = $$$hostConfig.canHydrateSuspenseInstance;
    var isSuspenseInstancePending = $$$hostConfig.isSuspenseInstancePending;
    var isSuspenseInstanceFallback = $$$hostConfig.isSuspenseInstanceFallback;
    var registerSuspenseInstanceRetry = $$$hostConfig.registerSuspenseInstanceRetry;
    var getNextHydratableSibling = $$$hostConfig.getNextHydratableSibling;
    var getFirstHydratableChild = $$$hostConfig.getFirstHydratableChild;
    var getFirstHydratableChildWithinContainer = $$$hostConfig.getFirstHydratableChildWithinContainer;
    var getFirstHydratableChildWithinSuspenseInstance = $$$hostConfig.getFirstHydratableChildWithinSuspenseInstance;
    var hydrateInstance = $$$hostConfig.hydrateInstance;
    var hydrateTextInstance = $$$hostConfig.hydrateTextInstance;
    var hydrateSuspenseInstance = $$$hostConfig.hydrateSuspenseInstance;
    var getNextHydratableInstanceAfterSuspenseInstance = $$$hostConfig.getNextHydratableInstanceAfterSuspenseInstance;
    var commitHydratedContainer = $$$hostConfig.commitHydratedContainer;
    var commitHydratedSuspenseInstance = $$$hostConfig.commitHydratedSuspenseInstance;
    var clearSuspenseBoundary = $$$hostConfig.clearSuspenseBoundary;
    var clearSuspenseBoundaryFromContainer = $$$hostConfig.clearSuspenseBoundaryFromContainer;
    var shouldDeleteUnhydratedTailInstances = $$$hostConfig.shouldDeleteUnhydratedTailInstances;
    var didNotMatchHydratedContainerTextInstance = $$$hostConfig.didNotMatchHydratedContainerTextInstance;
    var didNotMatchHydratedTextInstance = $$$hostConfig.didNotMatchHydratedTextInstance;
    var didNotHydrateInstanceWithinContainer = $$$hostConfig.didNotHydrateInstanceWithinContainer;
    var didNotHydrateInstanceWithinSuspenseInstance = $$$hostConfig.didNotHydrateInstanceWithinSuspenseInstance;
    var didNotHydrateInstance = $$$hostConfig.didNotHydrateInstance;
    var didNotFindHydratableInstanceWithinContainer = $$$hostConfig.didNotFindHydratableInstanceWithinContainer;
    var didNotFindHydratableTextInstanceWithinContainer = $$$hostConfig.didNotFindHydratableTextInstanceWithinContainer;
    var didNotFindHydratableSuspenseInstanceWithinContainer = $$$hostConfig.didNotFindHydratableSuspenseInstanceWithinContainer;
    var didNotFindHydratableInstanceWithinSuspenseInstance = $$$hostConfig.didNotFindHydratableInstanceWithinSuspenseInstance;
    var didNotFindHydratableTextInstanceWithinSuspenseInstance = $$$hostConfig.didNotFindHydratableTextInstanceWithinSuspenseInstance;
    var didNotFindHydratableSuspenseInstanceWithinSuspenseInstance = $$$hostConfig.didNotFindHydratableSuspenseInstanceWithinSuspenseInstance;
    var didNotFindHydratableInstance = $$$hostConfig.didNotFindHydratableInstance;
    var didNotFindHydratableTextInstance = $$$hostConfig.didNotFindHydratableTextInstance;
    var didNotFindHydratableSuspenseInstance = $$$hostConfig.didNotFindHydratableSuspenseInstance;
    var errorHydratingContainer = $$$hostConfig.errorHydratingContainer;
    var disabledDepth = 0;
    var prevLog;
    var prevInfo;
    var prevWarn;
    var prevError;
    var prevGroup;
    var prevGroupCollapsed;
    var prevGroupEnd;
    function disabledLog() {
    }
    disabledLog.__reactDisabledLog = true;
    function disableLogs() {
      {
        if (disabledDepth === 0) {
          prevLog = console.log;
          prevInfo = console.info;
          prevWarn = console.warn;
          prevError = console.error;
          prevGroup = console.group;
          prevGroupCollapsed = console.groupCollapsed;
          prevGroupEnd = console.groupEnd;
          var props = {
            configurable: true,
            enumerable: true,
            value: disabledLog,
            writable: true
          };
          Object.defineProperties(console, {
            info: props,
            log: props,
            warn: props,
            error: props,
            group: props,
            groupCollapsed: props,
            groupEnd: props
          });
        }
        disabledDepth++;
      }
    }
    function reenableLogs() {
      {
        disabledDepth--;
        if (disabledDepth === 0) {
          var props = {
            configurable: true,
            enumerable: true,
            writable: true
          };
          Object.defineProperties(console, {
            log: assign({}, props, {
              value: prevLog
            }),
            info: assign({}, props, {
              value: prevInfo
            }),
            warn: assign({}, props, {
              value: prevWarn
            }),
            error: assign({}, props, {
              value: prevError
            }),
            group: assign({}, props, {
              value: prevGroup
            }),
            groupCollapsed: assign({}, props, {
              value: prevGroupCollapsed
            }),
            groupEnd: assign({}, props, {
              value: prevGroupEnd
            })
          });
        }
        if (disabledDepth < 0) {
          error2("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
    }
    var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
    var prefix;
    function describeBuiltInComponentFrame(name, source, ownerFn) {
      {
        if (prefix === void 0) {
          try {
            throw Error();
          } catch (x) {
            var match = x.stack.trim().match(/\n( *(at )?)/);
            prefix = match && match[1] || "";
          }
        }
        return "\n" + prefix + name;
      }
    }
    var reentry = false;
    var componentFrameCache;
    {
      var PossiblyWeakMap = typeof WeakMap === "function" ? WeakMap : Map;
      componentFrameCache = new PossiblyWeakMap();
    }
    function describeNativeComponentFrame(fn, construct) {
      if (!fn || reentry) {
        return "";
      }
      {
        var frame = componentFrameCache.get(fn);
        if (frame !== void 0) {
          return frame;
        }
      }
      var control;
      reentry = true;
      var previousPrepareStackTrace = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var previousDispatcher;
      {
        previousDispatcher = ReactCurrentDispatcher.current;
        ReactCurrentDispatcher.current = null;
        disableLogs();
      }
      try {
        if (construct) {
          var Fake = function() {
            throw Error();
          };
          Object.defineProperty(Fake.prototype, "props", {
            set: function() {
              throw Error();
            }
          });
          if (typeof Reflect === "object" && Reflect.construct) {
            try {
              Reflect.construct(Fake, []);
            } catch (x) {
              control = x;
            }
            Reflect.construct(fn, [], Fake);
          } else {
            try {
              Fake.call();
            } catch (x) {
              control = x;
            }
            fn.call(Fake.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (x) {
            control = x;
          }
          fn();
        }
      } catch (sample) {
        if (sample && control && typeof sample.stack === "string") {
          var sampleLines = sample.stack.split("\n");
          var controlLines = control.stack.split("\n");
          var s = sampleLines.length - 1;
          var c = controlLines.length - 1;
          while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
            c--;
          }
          for (; s >= 1 && c >= 0; s--, c--) {
            if (sampleLines[s] !== controlLines[c]) {
              if (s !== 1 || c !== 1) {
                do {
                  s--;
                  c--;
                  if (c < 0 || sampleLines[s] !== controlLines[c]) {
                    var _frame = "\n" + sampleLines[s].replace(" at new ", " at ");
                    if (fn.displayName && _frame.includes("<anonymous>")) {
                      _frame = _frame.replace("<anonymous>", fn.displayName);
                    }
                    {
                      if (typeof fn === "function") {
                        componentFrameCache.set(fn, _frame);
                      }
                    }
                    return _frame;
                  }
                } while (s >= 1 && c >= 0);
              }
              break;
            }
          }
        }
      } finally {
        reentry = false;
        {
          ReactCurrentDispatcher.current = previousDispatcher;
          reenableLogs();
        }
        Error.prepareStackTrace = previousPrepareStackTrace;
      }
      var name = fn ? fn.displayName || fn.name : "";
      var syntheticFrame = name ? describeBuiltInComponentFrame(name) : "";
      {
        if (typeof fn === "function") {
          componentFrameCache.set(fn, syntheticFrame);
        }
      }
      return syntheticFrame;
    }
    function describeClassComponentFrame(ctor, source, ownerFn) {
      {
        return describeNativeComponentFrame(ctor, true);
      }
    }
    function describeFunctionComponentFrame(fn, source, ownerFn) {
      {
        return describeNativeComponentFrame(fn, false);
      }
    }
    function shouldConstruct(Component3) {
      var prototype = Component3.prototype;
      return !!(prototype && prototype.isReactComponent);
    }
    function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
      if (type == null) {
        return "";
      }
      if (typeof type === "function") {
        {
          return describeNativeComponentFrame(type, shouldConstruct(type));
        }
      }
      if (typeof type === "string") {
        return describeBuiltInComponentFrame(type);
      }
      switch (type) {
        case REACT_SUSPENSE_TYPE:
          return describeBuiltInComponentFrame("Suspense");
        case REACT_SUSPENSE_LIST_TYPE:
          return describeBuiltInComponentFrame("SuspenseList");
      }
      if (typeof type === "object") {
        switch (type.$$typeof) {
          case REACT_FORWARD_REF_TYPE:
            return describeFunctionComponentFrame(type.render);
          case REACT_MEMO_TYPE:
            return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
          case REACT_LAZY_TYPE: {
            var lazyComponent = type;
            var payload = lazyComponent._payload;
            var init = lazyComponent._init;
            try {
              return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
            } catch (x) {
            }
          }
        }
      }
      return "";
    }
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var loggedTypeFailures = {};
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    function setCurrentlyValidatingElement(element) {
      {
        if (element) {
          var owner = element._owner;
          var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
          ReactDebugCurrentFrame.setExtraStackFrame(stack);
        } else {
          ReactDebugCurrentFrame.setExtraStackFrame(null);
        }
      }
    }
    function checkPropTypes(typeSpecs, values, location, componentName, element) {
      {
        var has = Function.call.bind(hasOwnProperty);
        for (var typeSpecName in typeSpecs) {
          if (has(typeSpecs, typeSpecName)) {
            var error$1 = void 0;
            try {
              if (typeof typeSpecs[typeSpecName] !== "function") {
                var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                err.name = "Invariant Violation";
                throw err;
              }
              error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ex) {
              error$1 = ex;
            }
            if (error$1 && !(error$1 instanceof Error)) {
              setCurrentlyValidatingElement(element);
              error2("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || "React class", location, typeSpecName, typeof error$1);
              setCurrentlyValidatingElement(null);
            }
            if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
              loggedTypeFailures[error$1.message] = true;
              setCurrentlyValidatingElement(element);
              error2("Failed %s type: %s", location, error$1.message);
              setCurrentlyValidatingElement(null);
            }
          }
        }
      }
    }
    var valueStack = [];
    var fiberStack;
    {
      fiberStack = [];
    }
    var index = -1;
    function createCursor(defaultValue) {
      return {
        current: defaultValue
      };
    }
    function pop(cursor, fiber) {
      if (index < 0) {
        {
          error2("Unexpected pop.");
        }
        return;
      }
      {
        if (fiber !== fiberStack[index]) {
          error2("Unexpected Fiber popped.");
        }
      }
      cursor.current = valueStack[index];
      valueStack[index] = null;
      {
        fiberStack[index] = null;
      }
      index--;
    }
    function push(cursor, value, fiber) {
      index++;
      valueStack[index] = cursor.current;
      {
        fiberStack[index] = fiber;
      }
      cursor.current = value;
    }
    var warnedAboutMissingGetChildContext;
    {
      warnedAboutMissingGetChildContext = {};
    }
    var emptyContextObject = {};
    {
      Object.freeze(emptyContextObject);
    }
    var contextStackCursor = createCursor(emptyContextObject);
    var didPerformWorkStackCursor = createCursor(false);
    var previousContext = emptyContextObject;
    function getUnmaskedContext(workInProgress2, Component3, didPushOwnContextIfProvider) {
      {
        if (didPushOwnContextIfProvider && isContextProvider(Component3)) {
          return previousContext;
        }
        return contextStackCursor.current;
      }
    }
    function cacheContext(workInProgress2, unmaskedContext, maskedContext) {
      {
        var instance = workInProgress2.stateNode;
        instance.__reactInternalMemoizedUnmaskedChildContext = unmaskedContext;
        instance.__reactInternalMemoizedMaskedChildContext = maskedContext;
      }
    }
    function getMaskedContext(workInProgress2, unmaskedContext) {
      {
        var type = workInProgress2.type;
        var contextTypes = type.contextTypes;
        if (!contextTypes) {
          return emptyContextObject;
        }
        var instance = workInProgress2.stateNode;
        if (instance && instance.__reactInternalMemoizedUnmaskedChildContext === unmaskedContext) {
          return instance.__reactInternalMemoizedMaskedChildContext;
        }
        var context2 = {};
        for (var key in contextTypes) {
          context2[key] = unmaskedContext[key];
        }
        {
          var name = getComponentNameFromFiber(workInProgress2) || "Unknown";
          checkPropTypes(contextTypes, context2, "context", name);
        }
        if (instance) {
          cacheContext(workInProgress2, unmaskedContext, context2);
        }
        return context2;
      }
    }
    function hasContextChanged() {
      {
        return didPerformWorkStackCursor.current;
      }
    }
    function isContextProvider(type) {
      {
        var childContextTypes = type.childContextTypes;
        return childContextTypes !== null && childContextTypes !== void 0;
      }
    }
    function popContext(fiber) {
      {
        pop(didPerformWorkStackCursor, fiber);
        pop(contextStackCursor, fiber);
      }
    }
    function popTopLevelContextObject(fiber) {
      {
        pop(didPerformWorkStackCursor, fiber);
        pop(contextStackCursor, fiber);
      }
    }
    function pushTopLevelContextObject(fiber, context2, didChange) {
      {
        if (contextStackCursor.current !== emptyContextObject) {
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        }
        push(contextStackCursor, context2, fiber);
        push(didPerformWorkStackCursor, didChange, fiber);
      }
    }
    function processChildContext(fiber, type, parentContext) {
      {
        var instance = fiber.stateNode;
        var childContextTypes = type.childContextTypes;
        if (typeof instance.getChildContext !== "function") {
          {
            var componentName = getComponentNameFromFiber(fiber) || "Unknown";
            if (!warnedAboutMissingGetChildContext[componentName]) {
              warnedAboutMissingGetChildContext[componentName] = true;
              error2("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", componentName, componentName);
            }
          }
          return parentContext;
        }
        var childContext = instance.getChildContext();
        for (var contextKey in childContext) {
          if (!(contextKey in childContextTypes)) {
            throw new Error((getComponentNameFromFiber(fiber) || "Unknown") + '.getChildContext(): key "' + contextKey + '" is not defined in childContextTypes.');
          }
        }
        {
          var name = getComponentNameFromFiber(fiber) || "Unknown";
          checkPropTypes(childContextTypes, childContext, "child context", name);
        }
        return assign({}, parentContext, childContext);
      }
    }
    function pushContextProvider(workInProgress2) {
      {
        var instance = workInProgress2.stateNode;
        var memoizedMergedChildContext = instance && instance.__reactInternalMemoizedMergedChildContext || emptyContextObject;
        previousContext = contextStackCursor.current;
        push(contextStackCursor, memoizedMergedChildContext, workInProgress2);
        push(didPerformWorkStackCursor, didPerformWorkStackCursor.current, workInProgress2);
        return true;
      }
    }
    function invalidateContextProvider(workInProgress2, type, didChange) {
      {
        var instance = workInProgress2.stateNode;
        if (!instance) {
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        }
        if (didChange) {
          var mergedContext = processChildContext(workInProgress2, type, previousContext);
          instance.__reactInternalMemoizedMergedChildContext = mergedContext;
          pop(didPerformWorkStackCursor, workInProgress2);
          pop(contextStackCursor, workInProgress2);
          push(contextStackCursor, mergedContext, workInProgress2);
          push(didPerformWorkStackCursor, didChange, workInProgress2);
        } else {
          pop(didPerformWorkStackCursor, workInProgress2);
          push(didPerformWorkStackCursor, didChange, workInProgress2);
        }
      }
    }
    function findCurrentUnmaskedContext(fiber) {
      {
        if (!isFiberMounted(fiber) || fiber.tag !== ClassComponent) {
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        }
        var node = fiber;
        do {
          switch (node.tag) {
            case HostRoot:
              return node.stateNode.context;
            case ClassComponent: {
              var Component3 = node.type;
              if (isContextProvider(Component3)) {
                return node.stateNode.__reactInternalMemoizedMergedChildContext;
              }
              break;
            }
          }
          node = node.return;
        } while (node !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var LegacyRoot = 0;
    var ConcurrentRoot = 1;
    var NoMode = (
      /*                         */
      0
    );
    var ConcurrentMode = (
      /*                 */
      1
    );
    var ProfileMode = (
      /*                    */
      2
    );
    var StrictLegacyMode = (
      /*               */
      8
    );
    var StrictEffectsMode = (
      /*              */
      16
    );
    var clz32 = Math.clz32 ? Math.clz32 : clz32Fallback;
    var log = Math.log;
    var LN2 = Math.LN2;
    function clz32Fallback(x) {
      var asUint = x >>> 0;
      if (asUint === 0) {
        return 32;
      }
      return 31 - (log(asUint) / LN2 | 0) | 0;
    }
    var TotalLanes = 31;
    var NoLanes = (
      /*                        */
      0
    );
    var NoLane = (
      /*                          */
      0
    );
    var SyncLane = (
      /*                        */
      1
    );
    var InputContinuousHydrationLane = (
      /*    */
      2
    );
    var InputContinuousLane = (
      /*            */
      4
    );
    var DefaultHydrationLane = (
      /*            */
      8
    );
    var DefaultLane = (
      /*                    */
      16
    );
    var TransitionHydrationLane = (
      /*                */
      32
    );
    var TransitionLanes = (
      /*                       */
      4194240
    );
    var TransitionLane1 = (
      /*                        */
      64
    );
    var TransitionLane2 = (
      /*                        */
      128
    );
    var TransitionLane3 = (
      /*                        */
      256
    );
    var TransitionLane4 = (
      /*                        */
      512
    );
    var TransitionLane5 = (
      /*                        */
      1024
    );
    var TransitionLane6 = (
      /*                        */
      2048
    );
    var TransitionLane7 = (
      /*                        */
      4096
    );
    var TransitionLane8 = (
      /*                        */
      8192
    );
    var TransitionLane9 = (
      /*                        */
      16384
    );
    var TransitionLane10 = (
      /*                       */
      32768
    );
    var TransitionLane11 = (
      /*                       */
      65536
    );
    var TransitionLane12 = (
      /*                       */
      131072
    );
    var TransitionLane13 = (
      /*                       */
      262144
    );
    var TransitionLane14 = (
      /*                       */
      524288
    );
    var TransitionLane15 = (
      /*                       */
      1048576
    );
    var TransitionLane16 = (
      /*                       */
      2097152
    );
    var RetryLanes = (
      /*                            */
      130023424
    );
    var RetryLane1 = (
      /*                             */
      4194304
    );
    var RetryLane2 = (
      /*                             */
      8388608
    );
    var RetryLane3 = (
      /*                             */
      16777216
    );
    var RetryLane4 = (
      /*                             */
      33554432
    );
    var RetryLane5 = (
      /*                             */
      67108864
    );
    var SomeRetryLane = RetryLane1;
    var SelectiveHydrationLane = (
      /*          */
      134217728
    );
    var NonIdleLanes = (
      /*                                 */
      268435455
    );
    var IdleHydrationLane = (
      /*               */
      268435456
    );
    var IdleLane = (
      /*                       */
      536870912
    );
    var OffscreenLane = (
      /*                   */
      1073741824
    );
    function getLabelForLane(lane) {
      {
        if (lane & SyncLane) {
          return "Sync";
        }
        if (lane & InputContinuousHydrationLane) {
          return "InputContinuousHydration";
        }
        if (lane & InputContinuousLane) {
          return "InputContinuous";
        }
        if (lane & DefaultHydrationLane) {
          return "DefaultHydration";
        }
        if (lane & DefaultLane) {
          return "Default";
        }
        if (lane & TransitionHydrationLane) {
          return "TransitionHydration";
        }
        if (lane & TransitionLanes) {
          return "Transition";
        }
        if (lane & RetryLanes) {
          return "Retry";
        }
        if (lane & SelectiveHydrationLane) {
          return "SelectiveHydration";
        }
        if (lane & IdleHydrationLane) {
          return "IdleHydration";
        }
        if (lane & IdleLane) {
          return "Idle";
        }
        if (lane & OffscreenLane) {
          return "Offscreen";
        }
      }
    }
    var NoTimestamp = -1;
    var nextTransitionLane = TransitionLane1;
    var nextRetryLane = RetryLane1;
    function getHighestPriorityLanes(lanes) {
      switch (getHighestPriorityLane(lanes)) {
        case SyncLane:
          return SyncLane;
        case InputContinuousHydrationLane:
          return InputContinuousHydrationLane;
        case InputContinuousLane:
          return InputContinuousLane;
        case DefaultHydrationLane:
          return DefaultHydrationLane;
        case DefaultLane:
          return DefaultLane;
        case TransitionHydrationLane:
          return TransitionHydrationLane;
        case TransitionLane1:
        case TransitionLane2:
        case TransitionLane3:
        case TransitionLane4:
        case TransitionLane5:
        case TransitionLane6:
        case TransitionLane7:
        case TransitionLane8:
        case TransitionLane9:
        case TransitionLane10:
        case TransitionLane11:
        case TransitionLane12:
        case TransitionLane13:
        case TransitionLane14:
        case TransitionLane15:
        case TransitionLane16:
          return lanes & TransitionLanes;
        case RetryLane1:
        case RetryLane2:
        case RetryLane3:
        case RetryLane4:
        case RetryLane5:
          return lanes & RetryLanes;
        case SelectiveHydrationLane:
          return SelectiveHydrationLane;
        case IdleHydrationLane:
          return IdleHydrationLane;
        case IdleLane:
          return IdleLane;
        case OffscreenLane:
          return OffscreenLane;
        default:
          {
            error2("Should have found matching lanes. This is a bug in React.");
          }
          return lanes;
      }
    }
    function getNextLanes(root, wipLanes) {
      var pendingLanes = root.pendingLanes;
      if (pendingLanes === NoLanes) {
        return NoLanes;
      }
      var nextLanes = NoLanes;
      var suspendedLanes = root.suspendedLanes;
      var pingedLanes = root.pingedLanes;
      var nonIdlePendingLanes = pendingLanes & NonIdleLanes;
      if (nonIdlePendingLanes !== NoLanes) {
        var nonIdleUnblockedLanes = nonIdlePendingLanes & ~suspendedLanes;
        if (nonIdleUnblockedLanes !== NoLanes) {
          nextLanes = getHighestPriorityLanes(nonIdleUnblockedLanes);
        } else {
          var nonIdlePingedLanes = nonIdlePendingLanes & pingedLanes;
          if (nonIdlePingedLanes !== NoLanes) {
            nextLanes = getHighestPriorityLanes(nonIdlePingedLanes);
          }
        }
      } else {
        var unblockedLanes = pendingLanes & ~suspendedLanes;
        if (unblockedLanes !== NoLanes) {
          nextLanes = getHighestPriorityLanes(unblockedLanes);
        } else {
          if (pingedLanes !== NoLanes) {
            nextLanes = getHighestPriorityLanes(pingedLanes);
          }
        }
      }
      if (nextLanes === NoLanes) {
        return NoLanes;
      }
      if (wipLanes !== NoLanes && wipLanes !== nextLanes && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (wipLanes & suspendedLanes) === NoLanes) {
        var nextLane = getHighestPriorityLane(nextLanes);
        var wipLane = getHighestPriorityLane(wipLanes);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          nextLane >= wipLane || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          nextLane === DefaultLane && (wipLane & TransitionLanes) !== NoLanes
        ) {
          return wipLanes;
        }
      }
      if ((nextLanes & InputContinuousLane) !== NoLanes) {
        nextLanes |= pendingLanes & DefaultLane;
      }
      var entangledLanes = root.entangledLanes;
      if (entangledLanes !== NoLanes) {
        var entanglements = root.entanglements;
        var lanes = nextLanes & entangledLanes;
        while (lanes > 0) {
          var index2 = pickArbitraryLaneIndex(lanes);
          var lane = 1 << index2;
          nextLanes |= entanglements[index2];
          lanes &= ~lane;
        }
      }
      return nextLanes;
    }
    function getMostRecentEventTime(root, lanes) {
      var eventTimes = root.eventTimes;
      var mostRecentEventTime = NoTimestamp;
      while (lanes > 0) {
        var index2 = pickArbitraryLaneIndex(lanes);
        var lane = 1 << index2;
        var eventTime = eventTimes[index2];
        if (eventTime > mostRecentEventTime) {
          mostRecentEventTime = eventTime;
        }
        lanes &= ~lane;
      }
      return mostRecentEventTime;
    }
    function computeExpirationTime(lane, currentTime) {
      switch (lane) {
        case SyncLane:
        case InputContinuousHydrationLane:
        case InputContinuousLane:
          return currentTime + 250;
        case DefaultHydrationLane:
        case DefaultLane:
        case TransitionHydrationLane:
        case TransitionLane1:
        case TransitionLane2:
        case TransitionLane3:
        case TransitionLane4:
        case TransitionLane5:
        case TransitionLane6:
        case TransitionLane7:
        case TransitionLane8:
        case TransitionLane9:
        case TransitionLane10:
        case TransitionLane11:
        case TransitionLane12:
        case TransitionLane13:
        case TransitionLane14:
        case TransitionLane15:
        case TransitionLane16:
          return currentTime + 5e3;
        case RetryLane1:
        case RetryLane2:
        case RetryLane3:
        case RetryLane4:
        case RetryLane5:
          return NoTimestamp;
        case SelectiveHydrationLane:
        case IdleHydrationLane:
        case IdleLane:
        case OffscreenLane:
          return NoTimestamp;
        default:
          {
            error2("Should have found matching lanes. This is a bug in React.");
          }
          return NoTimestamp;
      }
    }
    function markStarvedLanesAsExpired(root, currentTime) {
      var pendingLanes = root.pendingLanes;
      var suspendedLanes = root.suspendedLanes;
      var pingedLanes = root.pingedLanes;
      var expirationTimes = root.expirationTimes;
      var lanes = pendingLanes;
      while (lanes > 0) {
        var index2 = pickArbitraryLaneIndex(lanes);
        var lane = 1 << index2;
        var expirationTime = expirationTimes[index2];
        if (expirationTime === NoTimestamp) {
          if ((lane & suspendedLanes) === NoLanes || (lane & pingedLanes) !== NoLanes) {
            expirationTimes[index2] = computeExpirationTime(lane, currentTime);
          }
        } else if (expirationTime <= currentTime) {
          root.expiredLanes |= lane;
        }
        lanes &= ~lane;
      }
    }
    function getHighestPriorityPendingLanes(root) {
      return getHighestPriorityLanes(root.pendingLanes);
    }
    function getLanesToRetrySynchronouslyOnError(root) {
      var everythingButOffscreen = root.pendingLanes & ~OffscreenLane;
      if (everythingButOffscreen !== NoLanes) {
        return everythingButOffscreen;
      }
      if (everythingButOffscreen & OffscreenLane) {
        return OffscreenLane;
      }
      return NoLanes;
    }
    function includesSyncLane(lanes) {
      return (lanes & SyncLane) !== NoLanes;
    }
    function includesNonIdleWork(lanes) {
      return (lanes & NonIdleLanes) !== NoLanes;
    }
    function includesOnlyRetries(lanes) {
      return (lanes & RetryLanes) === lanes;
    }
    function includesOnlyTransitions(lanes) {
      return (lanes & TransitionLanes) === lanes;
    }
    function includesBlockingLane(root, lanes) {
      var SyncDefaultLanes = InputContinuousHydrationLane | InputContinuousLane | DefaultHydrationLane | DefaultLane;
      return (lanes & SyncDefaultLanes) !== NoLanes;
    }
    function includesExpiredLane(root, lanes) {
      return (lanes & root.expiredLanes) !== NoLanes;
    }
    function isTransitionLane(lane) {
      return (lane & TransitionLanes) !== 0;
    }
    function claimNextTransitionLane() {
      var lane = nextTransitionLane;
      nextTransitionLane <<= 1;
      if ((nextTransitionLane & TransitionLanes) === 0) {
        nextTransitionLane = TransitionLane1;
      }
      return lane;
    }
    function claimNextRetryLane() {
      var lane = nextRetryLane;
      nextRetryLane <<= 1;
      if ((nextRetryLane & RetryLanes) === 0) {
        nextRetryLane = RetryLane1;
      }
      return lane;
    }
    function getHighestPriorityLane(lanes) {
      return lanes & -lanes;
    }
    function pickArbitraryLane(lanes) {
      return getHighestPriorityLane(lanes);
    }
    function pickArbitraryLaneIndex(lanes) {
      return 31 - clz32(lanes);
    }
    function laneToIndex(lane) {
      return pickArbitraryLaneIndex(lane);
    }
    function includesSomeLane(a, b) {
      return (a & b) !== NoLanes;
    }
    function isSubsetOfLanes(set2, subset) {
      return (set2 & subset) === subset;
    }
    function mergeLanes(a, b) {
      return a | b;
    }
    function removeLanes(set2, subset) {
      return set2 & ~subset;
    }
    function intersectLanes(a, b) {
      return a & b;
    }
    function laneToLanes(lane) {
      return lane;
    }
    function higherPriorityLane(a, b) {
      return a !== NoLane && a < b ? a : b;
    }
    function createLaneMap(initial) {
      var laneMap = [];
      for (var i2 = 0; i2 < TotalLanes; i2++) {
        laneMap.push(initial);
      }
      return laneMap;
    }
    function markRootUpdated(root, updateLane, eventTime) {
      root.pendingLanes |= updateLane;
      if (updateLane !== IdleLane) {
        root.suspendedLanes = NoLanes;
        root.pingedLanes = NoLanes;
      }
      var eventTimes = root.eventTimes;
      var index2 = laneToIndex(updateLane);
      eventTimes[index2] = eventTime;
    }
    function markRootSuspended(root, suspendedLanes) {
      root.suspendedLanes |= suspendedLanes;
      root.pingedLanes &= ~suspendedLanes;
      var expirationTimes = root.expirationTimes;
      var lanes = suspendedLanes;
      while (lanes > 0) {
        var index2 = pickArbitraryLaneIndex(lanes);
        var lane = 1 << index2;
        expirationTimes[index2] = NoTimestamp;
        lanes &= ~lane;
      }
    }
    function markRootPinged(root, pingedLanes, eventTime) {
      root.pingedLanes |= root.suspendedLanes & pingedLanes;
    }
    function markRootFinished(root, remainingLanes) {
      var noLongerPendingLanes = root.pendingLanes & ~remainingLanes;
      root.pendingLanes = remainingLanes;
      root.suspendedLanes = 0;
      root.pingedLanes = 0;
      root.expiredLanes &= remainingLanes;
      root.mutableReadLanes &= remainingLanes;
      root.entangledLanes &= remainingLanes;
      var entanglements = root.entanglements;
      var eventTimes = root.eventTimes;
      var expirationTimes = root.expirationTimes;
      var lanes = noLongerPendingLanes;
      while (lanes > 0) {
        var index2 = pickArbitraryLaneIndex(lanes);
        var lane = 1 << index2;
        entanglements[index2] = NoLanes;
        eventTimes[index2] = NoTimestamp;
        expirationTimes[index2] = NoTimestamp;
        lanes &= ~lane;
      }
    }
    function markRootEntangled(root, entangledLanes) {
      var rootEntangledLanes = root.entangledLanes |= entangledLanes;
      var entanglements = root.entanglements;
      var lanes = rootEntangledLanes;
      while (lanes) {
        var index2 = pickArbitraryLaneIndex(lanes);
        var lane = 1 << index2;
        if (
          // Is this one of the newly entangled lanes?
          lane & entangledLanes | // Is this lane transitively entangled with the newly entangled lanes?
          entanglements[index2] & entangledLanes
        ) {
          entanglements[index2] |= entangledLanes;
        }
        lanes &= ~lane;
      }
    }
    function getBumpedLaneForHydration(root, renderLanes2) {
      var renderLane = getHighestPriorityLane(renderLanes2);
      var lane;
      switch (renderLane) {
        case InputContinuousLane:
          lane = InputContinuousHydrationLane;
          break;
        case DefaultLane:
          lane = DefaultHydrationLane;
          break;
        case TransitionLane1:
        case TransitionLane2:
        case TransitionLane3:
        case TransitionLane4:
        case TransitionLane5:
        case TransitionLane6:
        case TransitionLane7:
        case TransitionLane8:
        case TransitionLane9:
        case TransitionLane10:
        case TransitionLane11:
        case TransitionLane12:
        case TransitionLane13:
        case TransitionLane14:
        case TransitionLane15:
        case TransitionLane16:
        case RetryLane1:
        case RetryLane2:
        case RetryLane3:
        case RetryLane4:
        case RetryLane5:
          lane = TransitionHydrationLane;
          break;
        case IdleLane:
          lane = IdleHydrationLane;
          break;
        default:
          lane = NoLane;
          break;
      }
      if ((lane & (root.suspendedLanes | renderLanes2)) !== NoLane) {
        return NoLane;
      }
      return lane;
    }
    function addFiberToLanesMap(root, fiber, lanes) {
      if (!isDevToolsPresent) {
        return;
      }
      var pendingUpdatersLaneMap = root.pendingUpdatersLaneMap;
      while (lanes > 0) {
        var index2 = laneToIndex(lanes);
        var lane = 1 << index2;
        var updaters = pendingUpdatersLaneMap[index2];
        updaters.add(fiber);
        lanes &= ~lane;
      }
    }
    function movePendingFibersToMemoized(root, lanes) {
      if (!isDevToolsPresent) {
        return;
      }
      var pendingUpdatersLaneMap = root.pendingUpdatersLaneMap;
      var memoizedUpdaters = root.memoizedUpdaters;
      while (lanes > 0) {
        var index2 = laneToIndex(lanes);
        var lane = 1 << index2;
        var updaters = pendingUpdatersLaneMap[index2];
        if (updaters.size > 0) {
          updaters.forEach(function(fiber) {
            var alternate = fiber.alternate;
            if (alternate === null || !memoizedUpdaters.has(alternate)) {
              memoizedUpdaters.add(fiber);
            }
          });
          updaters.clear();
        }
        lanes &= ~lane;
      }
    }
    var DiscreteEventPriority = SyncLane;
    var ContinuousEventPriority = InputContinuousLane;
    var DefaultEventPriority = DefaultLane;
    var IdleEventPriority = IdleLane;
    var currentUpdatePriority = NoLane;
    function getCurrentUpdatePriority() {
      return currentUpdatePriority;
    }
    function setCurrentUpdatePriority(newPriority) {
      currentUpdatePriority = newPriority;
    }
    function runWithPriority(priority, fn) {
      var previousPriority = currentUpdatePriority;
      try {
        currentUpdatePriority = priority;
        return fn();
      } finally {
        currentUpdatePriority = previousPriority;
      }
    }
    function higherEventPriority(a, b) {
      return a !== 0 && a < b ? a : b;
    }
    function lowerEventPriority(a, b) {
      return a === 0 || a > b ? a : b;
    }
    function isHigherEventPriority(a, b) {
      return a !== 0 && a < b;
    }
    function lanesToEventPriority(lanes) {
      var lane = getHighestPriorityLane(lanes);
      if (!isHigherEventPriority(DiscreteEventPriority, lane)) {
        return DiscreteEventPriority;
      }
      if (!isHigherEventPriority(ContinuousEventPriority, lane)) {
        return ContinuousEventPriority;
      }
      if (includesNonIdleWork(lane)) {
        return DefaultEventPriority;
      }
      return IdleEventPriority;
    }
    var scheduleCallback = Scheduler.unstable_scheduleCallback;
    var cancelCallback = Scheduler.unstable_cancelCallback;
    var shouldYield = Scheduler.unstable_shouldYield;
    var requestPaint = Scheduler.unstable_requestPaint;
    var now$1 = Scheduler.unstable_now;
    var ImmediatePriority = Scheduler.unstable_ImmediatePriority;
    var UserBlockingPriority = Scheduler.unstable_UserBlockingPriority;
    var NormalPriority = Scheduler.unstable_NormalPriority;
    var IdlePriority = Scheduler.unstable_IdlePriority;
    var unstable_yieldValue = Scheduler.unstable_yieldValue;
    var unstable_setDisableYieldValue = Scheduler.unstable_setDisableYieldValue;
    var rendererID = null;
    var injectedHook = null;
    var injectedProfilingHooks = null;
    var hasLoggedError = false;
    var isDevToolsPresent = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined";
    function injectInternals(internals) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined") {
        return false;
      }
      var hook = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (hook.isDisabled) {
        return true;
      }
      if (!hook.supportsFiber) {
        {
          error2("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools");
        }
        return true;
      }
      try {
        if (enableSchedulingProfiler) {
          internals = assign({}, internals, {
            getLaneLabelMap,
            injectProfilingHooks
          });
        }
        rendererID = hook.inject(internals);
        injectedHook = hook;
      } catch (err) {
        {
          error2("React instrumentation encountered an error: %s.", err);
        }
      }
      if (hook.checkDCE) {
        return true;
      } else {
        return false;
      }
    }
    function onScheduleRoot(root, children) {
      {
        if (injectedHook && typeof injectedHook.onScheduleFiberRoot === "function") {
          try {
            injectedHook.onScheduleFiberRoot(rendererID, root, children);
          } catch (err) {
            if (!hasLoggedError) {
              hasLoggedError = true;
              error2("React instrumentation encountered an error: %s", err);
            }
          }
        }
      }
    }
    function onCommitRoot(root, eventPriority) {
      if (injectedHook && typeof injectedHook.onCommitFiberRoot === "function") {
        try {
          var didError = (root.current.flags & DidCapture) === DidCapture;
          if (enableProfilerTimer) {
            var schedulerPriority;
            switch (eventPriority) {
              case DiscreteEventPriority:
                schedulerPriority = ImmediatePriority;
                break;
              case ContinuousEventPriority:
                schedulerPriority = UserBlockingPriority;
                break;
              case DefaultEventPriority:
                schedulerPriority = NormalPriority;
                break;
              case IdleEventPriority:
                schedulerPriority = IdlePriority;
                break;
              default:
                schedulerPriority = NormalPriority;
                break;
            }
            injectedHook.onCommitFiberRoot(rendererID, root, schedulerPriority, didError);
          } else {
            injectedHook.onCommitFiberRoot(rendererID, root, void 0, didError);
          }
        } catch (err) {
          {
            if (!hasLoggedError) {
              hasLoggedError = true;
              error2("React instrumentation encountered an error: %s", err);
            }
          }
        }
      }
    }
    function onPostCommitRoot(root) {
      if (injectedHook && typeof injectedHook.onPostCommitFiberRoot === "function") {
        try {
          injectedHook.onPostCommitFiberRoot(rendererID, root);
        } catch (err) {
          {
            if (!hasLoggedError) {
              hasLoggedError = true;
              error2("React instrumentation encountered an error: %s", err);
            }
          }
        }
      }
    }
    function onCommitUnmount(fiber) {
      if (injectedHook && typeof injectedHook.onCommitFiberUnmount === "function") {
        try {
          injectedHook.onCommitFiberUnmount(rendererID, fiber);
        } catch (err) {
          {
            if (!hasLoggedError) {
              hasLoggedError = true;
              error2("React instrumentation encountered an error: %s", err);
            }
          }
        }
      }
    }
    function setIsStrictModeForDevtools(newIsStrictMode) {
      {
        if (typeof unstable_yieldValue === "function") {
          unstable_setDisableYieldValue(newIsStrictMode);
          setSuppressWarning(newIsStrictMode);
        }
        if (injectedHook && typeof injectedHook.setStrictMode === "function") {
          try {
            injectedHook.setStrictMode(rendererID, newIsStrictMode);
          } catch (err) {
            {
              if (!hasLoggedError) {
                hasLoggedError = true;
                error2("React instrumentation encountered an error: %s", err);
              }
            }
          }
        }
      }
    }
    function injectProfilingHooks(profilingHooks) {
      injectedProfilingHooks = profilingHooks;
    }
    function getLaneLabelMap() {
      {
        var map = /* @__PURE__ */ new Map();
        var lane = 1;
        for (var index2 = 0; index2 < TotalLanes; index2++) {
          var label = getLabelForLane(lane);
          map.set(lane, label);
          lane *= 2;
        }
        return map;
      }
    }
    function markCommitStarted(lanes) {
      {
        if (injectedProfilingHooks !== null && typeof injectedProfilingHooks.markCommitStarted === "function") {
          injectedProfilingHooks.markCommitStarted(lanes);
        }
      }
    }
    function markCommitStopped() {
      {
        if (injectedProfilingHooks !== null && typeof injectedProfilingHooks.markCommitStopped === "function") {
          injectedProfilingHooks.markCommitStopped();
        }
      }
    }
    function markComponentRenderStarted(fiber) {
      {
        if (injectedProfilingHooks !== null && typeof injectedProfilingHooks.markComponentRenderStarted === "function") {
          injectedProfilingHooks.markComponentRenderStarted(fiber);
        }
      }
    }
    function markComponentRenderStopped() {
      {
        if (injectedProfilingHooks !== null && typeof injectedProfilingHooks.markComponentRenderStopped === "function") {
          injectedProfilingHooks.markComponentRenderStopped();
        }
      }
    }
    function markComponentPassiveEffectMountStarted(fiber) {
      {
        if (injectedProfilingHooks !== null && typeof injectedProfilingHooks.markComponentPassiveEffectMountStarted === "function") {
          injectedProfilingHooks.markComponentPassiveEffectMountStarted(fiber);
        }
      }
    }
    function markComponentPassiveEffectMountStopped() {
      {
        if (injectedProfilingHooks !== null && typeof injectedProfilingHooks.markComponentPassiveEffectMountStopped === "function") {
          injectedProfilingHooks.markComponentPassiveEffectMountStopped();
        }
      }
    }
    function markComponentPassiveEffectUnmountStarted(fiber) {
      {
        if (injectedProfilingHooks !== null && typeof injectedProfilingHooks.markComponentPassiveEffectUnmountStarted === "function") {
          injectedProfilingHooks.markComponentPassiveEffectUnmountStarted(fiber);
        }
      }
    }
    function markComponentPassiveEffectUnmountStopped() {
      {
        if (injectedProfilingHooks !== null && typeof injectedProfilingHooks.markComponentPassiveEffectUnmountStopped === "function") {
          injectedProfilingHooks.markComponentPassiveEffectUnmountStopped();
        }
      }
    }
    function markComponentLayoutEffectMountStarted(fiber) {
      {
        if (injectedProfilingHooks !== null && typeof injectedProfilingHooks.markComponentLayoutEffectMountStarted === "function") {
          injectedProfilingHooks.markComponentLayoutEffectMountStarted(fiber);
        }
      }
    }
    function markComponentLayoutEffectMountStopped() {
      {
        if (injectedProfilingHooks !== null && typeof injectedProfilingHooks.markComponentLayoutEffectMountStopped === "function") {
          injectedProfilingHooks.markComponentLayoutEffectMountStopped();
        }
      }
    }
    function markComponentLayoutEffectUnmountStarted(fiber) {
      {
        if (injectedProfilingHooks !== null && typeof injectedProfilingHooks.markComponentLayoutEffectUnmountStarted === "function") {
          injectedProfilingHooks.markComponentLayoutEffectUnmountStarted(fiber);
        }
      }
    }
    function markComponentLayoutEffectUnmountStopped() {
      {
        if (injectedProfilingHooks !== null && typeof injectedProfilingHooks.markComponentLayoutEffectUnmountStopped === "function") {
          injectedProfilingHooks.markComponentLayoutEffectUnmountStopped();
        }
      }
    }
    function markComponentErrored(fiber, thrownValue, lanes) {
      {
        if (injectedProfilingHooks !== null && typeof injectedProfilingHooks.markComponentErrored === "function") {
          injectedProfilingHooks.markComponentErrored(fiber, thrownValue, lanes);
        }
      }
    }
    function markComponentSuspended(fiber, wakeable, lanes) {
      {
        if (injectedProfilingHooks !== null && typeof injectedProfilingHooks.markComponentSuspended === "function") {
          injectedProfilingHooks.markComponentSuspended(fiber, wakeable, lanes);
        }
      }
    }
    function markLayoutEffectsStarted(lanes) {
      {
        if (injectedProfilingHooks !== null && typeof injectedProfilingHooks.markLayoutEffectsStarted === "function") {
          injectedProfilingHooks.markLayoutEffectsStarted(lanes);
        }
      }
    }
    function markLayoutEffectsStopped() {
      {
        if (injectedProfilingHooks !== null && typeof injectedProfilingHooks.markLayoutEffectsStopped === "function") {
          injectedProfilingHooks.markLayoutEffectsStopped();
        }
      }
    }
    function markPassiveEffectsStarted(lanes) {
      {
        if (injectedProfilingHooks !== null && typeof injectedProfilingHooks.markPassiveEffectsStarted === "function") {
          injectedProfilingHooks.markPassiveEffectsStarted(lanes);
        }
      }
    }
    function markPassiveEffectsStopped() {
      {
        if (injectedProfilingHooks !== null && typeof injectedProfilingHooks.markPassiveEffectsStopped === "function") {
          injectedProfilingHooks.markPassiveEffectsStopped();
        }
      }
    }
    function markRenderStarted(lanes) {
      {
        if (injectedProfilingHooks !== null && typeof injectedProfilingHooks.markRenderStarted === "function") {
          injectedProfilingHooks.markRenderStarted(lanes);
        }
      }
    }
    function markRenderYielded() {
      {
        if (injectedProfilingHooks !== null && typeof injectedProfilingHooks.markRenderYielded === "function") {
          injectedProfilingHooks.markRenderYielded();
        }
      }
    }
    function markRenderStopped() {
      {
        if (injectedProfilingHooks !== null && typeof injectedProfilingHooks.markRenderStopped === "function") {
          injectedProfilingHooks.markRenderStopped();
        }
      }
    }
    function markRenderScheduled(lane) {
      {
        if (injectedProfilingHooks !== null && typeof injectedProfilingHooks.markRenderScheduled === "function") {
          injectedProfilingHooks.markRenderScheduled(lane);
        }
      }
    }
    function markForceUpdateScheduled(fiber, lane) {
      {
        if (injectedProfilingHooks !== null && typeof injectedProfilingHooks.markForceUpdateScheduled === "function") {
          injectedProfilingHooks.markForceUpdateScheduled(fiber, lane);
        }
      }
    }
    function markStateUpdateScheduled(fiber, lane) {
      {
        if (injectedProfilingHooks !== null && typeof injectedProfilingHooks.markStateUpdateScheduled === "function") {
          injectedProfilingHooks.markStateUpdateScheduled(fiber, lane);
        }
      }
    }
    function is2(x, y2) {
      return x === y2 && (x !== 0 || 1 / x === 1 / y2) || x !== x && y2 !== y2;
    }
    var objectIs = typeof Object.is === "function" ? Object.is : is2;
    var syncQueue = null;
    var includesLegacySyncCallbacks = false;
    var isFlushingSyncQueue = false;
    function scheduleSyncCallback(callback) {
      if (syncQueue === null) {
        syncQueue = [callback];
      } else {
        syncQueue.push(callback);
      }
    }
    function scheduleLegacySyncCallback(callback) {
      includesLegacySyncCallbacks = true;
      scheduleSyncCallback(callback);
    }
    function flushSyncCallbacksOnlyInLegacyMode() {
      if (includesLegacySyncCallbacks) {
        flushSyncCallbacks();
      }
    }
    function flushSyncCallbacks() {
      if (!isFlushingSyncQueue && syncQueue !== null) {
        isFlushingSyncQueue = true;
        var i2 = 0;
        var previousUpdatePriority = getCurrentUpdatePriority();
        try {
          var isSync = true;
          var queue = syncQueue;
          setCurrentUpdatePriority(DiscreteEventPriority);
          for (; i2 < queue.length; i2++) {
            var callback = queue[i2];
            do {
              callback = callback(isSync);
            } while (callback !== null);
          }
          syncQueue = null;
          includesLegacySyncCallbacks = false;
        } catch (error3) {
          if (syncQueue !== null) {
            syncQueue = syncQueue.slice(i2 + 1);
          }
          scheduleCallback(ImmediatePriority, flushSyncCallbacks);
          throw error3;
        } finally {
          setCurrentUpdatePriority(previousUpdatePriority);
          isFlushingSyncQueue = false;
        }
      }
      return null;
    }
    function isRootDehydrated(root) {
      var currentState = root.current.memoizedState;
      return currentState.isDehydrated;
    }
    var ReactCurrentBatchConfig = ReactSharedInternals.ReactCurrentBatchConfig;
    var NoTransition = null;
    function requestCurrentTransition() {
      return ReactCurrentBatchConfig.transition;
    }
    function shallowEqual(objA, objB) {
      if (objectIs(objA, objB)) {
        return true;
      }
      if (typeof objA !== "object" || objA === null || typeof objB !== "object" || objB === null) {
        return false;
      }
      var keysA = Object.keys(objA);
      var keysB = Object.keys(objB);
      if (keysA.length !== keysB.length) {
        return false;
      }
      for (var i2 = 0; i2 < keysA.length; i2++) {
        var currentKey = keysA[i2];
        if (!hasOwnProperty.call(objB, currentKey) || !objectIs(objA[currentKey], objB[currentKey])) {
          return false;
        }
      }
      return true;
    }
    function describeFiber(fiber) {
      var owner = fiber._debugOwner ? fiber._debugOwner.type : null;
      var source = fiber._debugSource;
      switch (fiber.tag) {
        case HostComponent:
          return describeBuiltInComponentFrame(fiber.type);
        case LazyComponent:
          return describeBuiltInComponentFrame("Lazy");
        case SuspenseComponent:
          return describeBuiltInComponentFrame("Suspense");
        case SuspenseListComponent:
          return describeBuiltInComponentFrame("SuspenseList");
        case FunctionComponent:
        case IndeterminateComponent:
        case SimpleMemoComponent:
          return describeFunctionComponentFrame(fiber.type);
        case ForwardRef:
          return describeFunctionComponentFrame(fiber.type.render);
        case ClassComponent:
          return describeClassComponentFrame(fiber.type);
        default:
          return "";
      }
    }
    function getStackByFiberInDevAndProd(workInProgress2) {
      try {
        var info = "";
        var node = workInProgress2;
        do {
          info += describeFiber(node);
          node = node.return;
        } while (node);
        return info;
      } catch (x) {
        return "\nError generating stack: " + x.message + "\n" + x.stack;
      }
    }
    var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
    var current = null;
    var isRendering = false;
    function getCurrentFiberOwnerNameInDevOrNull() {
      {
        if (current === null) {
          return null;
        }
        var owner = current._debugOwner;
        if (owner !== null && typeof owner !== "undefined") {
          return getComponentNameFromFiber(owner);
        }
      }
      return null;
    }
    function getCurrentFiberStackInDev() {
      {
        if (current === null) {
          return "";
        }
        return getStackByFiberInDevAndProd(current);
      }
    }
    function resetCurrentFiber() {
      {
        ReactDebugCurrentFrame$1.getCurrentStack = null;
        current = null;
        isRendering = false;
      }
    }
    function setCurrentFiber(fiber) {
      {
        ReactDebugCurrentFrame$1.getCurrentStack = getCurrentFiberStackInDev;
        current = fiber;
        isRendering = false;
      }
    }
    function setIsRendering(rendering) {
      {
        isRendering = rendering;
      }
    }
    var ReactStrictModeWarnings = {
      recordUnsafeLifecycleWarnings: function(fiber, instance) {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function(fiber, instance) {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    };
    {
      var findStrictRoot = function(fiber) {
        var maybeStrictRoot = null;
        var node = fiber;
        while (node !== null) {
          if (node.mode & StrictLegacyMode) {
            maybeStrictRoot = node;
          }
          node = node.return;
        }
        return maybeStrictRoot;
      };
      var setToSortedString = function(set2) {
        var array = [];
        set2.forEach(function(value) {
          array.push(value);
        });
        return array.sort().join(", ");
      };
      var pendingComponentWillMountWarnings = [];
      var pendingUNSAFE_ComponentWillMountWarnings = [];
      var pendingComponentWillReceivePropsWarnings = [];
      var pendingUNSAFE_ComponentWillReceivePropsWarnings = [];
      var pendingComponentWillUpdateWarnings = [];
      var pendingUNSAFE_ComponentWillUpdateWarnings = [];
      var didWarnAboutUnsafeLifecycles = /* @__PURE__ */ new Set();
      ReactStrictModeWarnings.recordUnsafeLifecycleWarnings = function(fiber, instance) {
        if (didWarnAboutUnsafeLifecycles.has(fiber.type)) {
          return;
        }
        if (typeof instance.componentWillMount === "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        instance.componentWillMount.__suppressDeprecationWarning !== true) {
          pendingComponentWillMountWarnings.push(fiber);
        }
        if (fiber.mode & StrictLegacyMode && typeof instance.UNSAFE_componentWillMount === "function") {
          pendingUNSAFE_ComponentWillMountWarnings.push(fiber);
        }
        if (typeof instance.componentWillReceiveProps === "function" && instance.componentWillReceiveProps.__suppressDeprecationWarning !== true) {
          pendingComponentWillReceivePropsWarnings.push(fiber);
        }
        if (fiber.mode & StrictLegacyMode && typeof instance.UNSAFE_componentWillReceiveProps === "function") {
          pendingUNSAFE_ComponentWillReceivePropsWarnings.push(fiber);
        }
        if (typeof instance.componentWillUpdate === "function" && instance.componentWillUpdate.__suppressDeprecationWarning !== true) {
          pendingComponentWillUpdateWarnings.push(fiber);
        }
        if (fiber.mode & StrictLegacyMode && typeof instance.UNSAFE_componentWillUpdate === "function") {
          pendingUNSAFE_ComponentWillUpdateWarnings.push(fiber);
        }
      };
      ReactStrictModeWarnings.flushPendingUnsafeLifecycleWarnings = function() {
        var componentWillMountUniqueNames = /* @__PURE__ */ new Set();
        if (pendingComponentWillMountWarnings.length > 0) {
          pendingComponentWillMountWarnings.forEach(function(fiber) {
            componentWillMountUniqueNames.add(getComponentNameFromFiber(fiber) || "Component");
            didWarnAboutUnsafeLifecycles.add(fiber.type);
          });
          pendingComponentWillMountWarnings = [];
        }
        var UNSAFE_componentWillMountUniqueNames = /* @__PURE__ */ new Set();
        if (pendingUNSAFE_ComponentWillMountWarnings.length > 0) {
          pendingUNSAFE_ComponentWillMountWarnings.forEach(function(fiber) {
            UNSAFE_componentWillMountUniqueNames.add(getComponentNameFromFiber(fiber) || "Component");
            didWarnAboutUnsafeLifecycles.add(fiber.type);
          });
          pendingUNSAFE_ComponentWillMountWarnings = [];
        }
        var componentWillReceivePropsUniqueNames = /* @__PURE__ */ new Set();
        if (pendingComponentWillReceivePropsWarnings.length > 0) {
          pendingComponentWillReceivePropsWarnings.forEach(function(fiber) {
            componentWillReceivePropsUniqueNames.add(getComponentNameFromFiber(fiber) || "Component");
            didWarnAboutUnsafeLifecycles.add(fiber.type);
          });
          pendingComponentWillReceivePropsWarnings = [];
        }
        var UNSAFE_componentWillReceivePropsUniqueNames = /* @__PURE__ */ new Set();
        if (pendingUNSAFE_ComponentWillReceivePropsWarnings.length > 0) {
          pendingUNSAFE_ComponentWillReceivePropsWarnings.forEach(function(fiber) {
            UNSAFE_componentWillReceivePropsUniqueNames.add(getComponentNameFromFiber(fiber) || "Component");
            didWarnAboutUnsafeLifecycles.add(fiber.type);
          });
          pendingUNSAFE_ComponentWillReceivePropsWarnings = [];
        }
        var componentWillUpdateUniqueNames = /* @__PURE__ */ new Set();
        if (pendingComponentWillUpdateWarnings.length > 0) {
          pendingComponentWillUpdateWarnings.forEach(function(fiber) {
            componentWillUpdateUniqueNames.add(getComponentNameFromFiber(fiber) || "Component");
            didWarnAboutUnsafeLifecycles.add(fiber.type);
          });
          pendingComponentWillUpdateWarnings = [];
        }
        var UNSAFE_componentWillUpdateUniqueNames = /* @__PURE__ */ new Set();
        if (pendingUNSAFE_ComponentWillUpdateWarnings.length > 0) {
          pendingUNSAFE_ComponentWillUpdateWarnings.forEach(function(fiber) {
            UNSAFE_componentWillUpdateUniqueNames.add(getComponentNameFromFiber(fiber) || "Component");
            didWarnAboutUnsafeLifecycles.add(fiber.type);
          });
          pendingUNSAFE_ComponentWillUpdateWarnings = [];
        }
        if (UNSAFE_componentWillMountUniqueNames.size > 0) {
          var sortedNames = setToSortedString(UNSAFE_componentWillMountUniqueNames);
          error2("Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.\n\n* Move code with side effects to componentDidMount, and set initial state in the constructor.\n\nPlease update the following components: %s", sortedNames);
        }
        if (UNSAFE_componentWillReceivePropsUniqueNames.size > 0) {
          var _sortedNames = setToSortedString(UNSAFE_componentWillReceivePropsUniqueNames);
          error2("Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.\n\n* Move data fetching code or side effects to componentDidUpdate.\n* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state\n\nPlease update the following components: %s", _sortedNames);
        }
        if (UNSAFE_componentWillUpdateUniqueNames.size > 0) {
          var _sortedNames2 = setToSortedString(UNSAFE_componentWillUpdateUniqueNames);
          error2("Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.\n\n* Move data fetching code or side effects to componentDidUpdate.\n\nPlease update the following components: %s", _sortedNames2);
        }
        if (componentWillMountUniqueNames.size > 0) {
          var _sortedNames3 = setToSortedString(componentWillMountUniqueNames);
          warn("componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.\n\n* Move code with side effects to componentDidMount, and set initial state in the constructor.\n* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run `npx react-codemod rename-unsafe-lifecycles` in your project source folder.\n\nPlease update the following components: %s", _sortedNames3);
        }
        if (componentWillReceivePropsUniqueNames.size > 0) {
          var _sortedNames4 = setToSortedString(componentWillReceivePropsUniqueNames);
          warn("componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.\n\n* Move data fetching code or side effects to componentDidUpdate.\n* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state\n* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run `npx react-codemod rename-unsafe-lifecycles` in your project source folder.\n\nPlease update the following components: %s", _sortedNames4);
        }
        if (componentWillUpdateUniqueNames.size > 0) {
          var _sortedNames5 = setToSortedString(componentWillUpdateUniqueNames);
          warn("componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.\n\n* Move data fetching code or side effects to componentDidUpdate.\n* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run `npx react-codemod rename-unsafe-lifecycles` in your project source folder.\n\nPlease update the following components: %s", _sortedNames5);
        }
      };
      var pendingLegacyContextWarning = /* @__PURE__ */ new Map();
      var didWarnAboutLegacyContext = /* @__PURE__ */ new Set();
      ReactStrictModeWarnings.recordLegacyContextWarning = function(fiber, instance) {
        var strictRoot = findStrictRoot(fiber);
        if (strictRoot === null) {
          error2("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (didWarnAboutLegacyContext.has(fiber.type)) {
          return;
        }
        var warningsForRoot = pendingLegacyContextWarning.get(strictRoot);
        if (fiber.type.contextTypes != null || fiber.type.childContextTypes != null || instance !== null && typeof instance.getChildContext === "function") {
          if (warningsForRoot === void 0) {
            warningsForRoot = [];
            pendingLegacyContextWarning.set(strictRoot, warningsForRoot);
          }
          warningsForRoot.push(fiber);
        }
      };
      ReactStrictModeWarnings.flushLegacyContextWarning = function() {
        pendingLegacyContextWarning.forEach(function(fiberArray, strictRoot) {
          if (fiberArray.length === 0) {
            return;
          }
          var firstFiber = fiberArray[0];
          var uniqueNames = /* @__PURE__ */ new Set();
          fiberArray.forEach(function(fiber) {
            uniqueNames.add(getComponentNameFromFiber(fiber) || "Component");
            didWarnAboutLegacyContext.add(fiber.type);
          });
          var sortedNames = setToSortedString(uniqueNames);
          try {
            setCurrentFiber(firstFiber);
            error2("Legacy context API has been detected within a strict-mode tree.\n\nThe old API will be supported in all 16.x releases, but applications using it should migrate to the new version.\n\nPlease update the following components: %s\n\nLearn more about this warning here: https://reactjs.org/link/legacy-context", sortedNames);
          } finally {
            resetCurrentFiber();
          }
        });
      };
      ReactStrictModeWarnings.discardPendingWarnings = function() {
        pendingComponentWillMountWarnings = [];
        pendingUNSAFE_ComponentWillMountWarnings = [];
        pendingComponentWillReceivePropsWarnings = [];
        pendingUNSAFE_ComponentWillReceivePropsWarnings = [];
        pendingComponentWillUpdateWarnings = [];
        pendingUNSAFE_ComponentWillUpdateWarnings = [];
        pendingLegacyContextWarning = /* @__PURE__ */ new Map();
      };
    }
    function typeName(value) {
      {
        var hasToStringTag = typeof Symbol === "function" && Symbol.toStringTag;
        var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
        return type;
      }
    }
    function willCoercionThrow(value) {
      {
        try {
          testStringCoercion(value);
          return false;
        } catch (e) {
          return true;
        }
      }
    }
    function testStringCoercion(value) {
      return "" + value;
    }
    function checkKeyStringCoercion(value) {
      {
        if (willCoercionThrow(value)) {
          error2("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", typeName(value));
          return testStringCoercion(value);
        }
      }
    }
    function checkPropStringCoercion(value, propName) {
      {
        if (willCoercionThrow(value)) {
          error2("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", propName, typeName(value));
          return testStringCoercion(value);
        }
      }
    }
    function resolveDefaultProps(Component3, baseProps) {
      if (Component3 && Component3.defaultProps) {
        var props = assign({}, baseProps);
        var defaultProps = Component3.defaultProps;
        for (var propName in defaultProps) {
          if (props[propName] === void 0) {
            props[propName] = defaultProps[propName];
          }
        }
        return props;
      }
      return baseProps;
    }
    var valueCursor = createCursor(null);
    var rendererSigil;
    {
      rendererSigil = {};
    }
    var currentlyRenderingFiber = null;
    var lastContextDependency = null;
    var lastFullyObservedContext = null;
    var isDisallowedContextReadInDEV = false;
    function resetContextDependencies() {
      currentlyRenderingFiber = null;
      lastContextDependency = null;
      lastFullyObservedContext = null;
      {
        isDisallowedContextReadInDEV = false;
      }
    }
    function enterDisallowedContextReadInDEV() {
      {
        isDisallowedContextReadInDEV = true;
      }
    }
    function exitDisallowedContextReadInDEV() {
      {
        isDisallowedContextReadInDEV = false;
      }
    }
    function pushProvider(providerFiber, context2, nextValue) {
      if (isPrimaryRenderer) {
        push(valueCursor, context2._currentValue, providerFiber);
        context2._currentValue = nextValue;
        {
          if (context2._currentRenderer !== void 0 && context2._currentRenderer !== null && context2._currentRenderer !== rendererSigil) {
            error2("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported.");
          }
          context2._currentRenderer = rendererSigil;
        }
      } else {
        push(valueCursor, context2._currentValue2, providerFiber);
        context2._currentValue2 = nextValue;
        {
          if (context2._currentRenderer2 !== void 0 && context2._currentRenderer2 !== null && context2._currentRenderer2 !== rendererSigil) {
            error2("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported.");
          }
          context2._currentRenderer2 = rendererSigil;
        }
      }
    }
    function popProvider(context2, providerFiber) {
      var currentValue = valueCursor.current;
      pop(valueCursor, providerFiber);
      if (isPrimaryRenderer) {
        {
          context2._currentValue = currentValue;
        }
      } else {
        {
          context2._currentValue2 = currentValue;
        }
      }
    }
    function scheduleContextWorkOnParentPath(parent, renderLanes2, propagationRoot) {
      var node = parent;
      while (node !== null) {
        var alternate = node.alternate;
        if (!isSubsetOfLanes(node.childLanes, renderLanes2)) {
          node.childLanes = mergeLanes(node.childLanes, renderLanes2);
          if (alternate !== null) {
            alternate.childLanes = mergeLanes(alternate.childLanes, renderLanes2);
          }
        } else if (alternate !== null && !isSubsetOfLanes(alternate.childLanes, renderLanes2)) {
          alternate.childLanes = mergeLanes(alternate.childLanes, renderLanes2);
        }
        if (node === propagationRoot) {
          break;
        }
        node = node.return;
      }
      {
        if (node !== propagationRoot) {
          error2("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
        }
      }
    }
    function propagateContextChange(workInProgress2, context2, renderLanes2) {
      {
        propagateContextChange_eager(workInProgress2, context2, renderLanes2);
      }
    }
    function propagateContextChange_eager(workInProgress2, context2, renderLanes2) {
      var fiber = workInProgress2.child;
      if (fiber !== null) {
        fiber.return = workInProgress2;
      }
      while (fiber !== null) {
        var nextFiber = void 0;
        var list = fiber.dependencies;
        if (list !== null) {
          nextFiber = fiber.child;
          var dependency = list.firstContext;
          while (dependency !== null) {
            if (dependency.context === context2) {
              if (fiber.tag === ClassComponent) {
                var lane = pickArbitraryLane(renderLanes2);
                var update = createUpdate(NoTimestamp, lane);
                update.tag = ForceUpdate;
                var updateQueue = fiber.updateQueue;
                if (updateQueue === null) ;
                else {
                  var sharedQueue = updateQueue.shared;
                  var pending = sharedQueue.pending;
                  if (pending === null) {
                    update.next = update;
                  } else {
                    update.next = pending.next;
                    pending.next = update;
                  }
                  sharedQueue.pending = update;
                }
              }
              fiber.lanes = mergeLanes(fiber.lanes, renderLanes2);
              var alternate = fiber.alternate;
              if (alternate !== null) {
                alternate.lanes = mergeLanes(alternate.lanes, renderLanes2);
              }
              scheduleContextWorkOnParentPath(fiber.return, renderLanes2, workInProgress2);
              list.lanes = mergeLanes(list.lanes, renderLanes2);
              break;
            }
            dependency = dependency.next;
          }
        } else if (fiber.tag === ContextProvider) {
          nextFiber = fiber.type === workInProgress2.type ? null : fiber.child;
        } else if (fiber.tag === DehydratedFragment) {
          var parentSuspense = fiber.return;
          if (parentSuspense === null) {
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          }
          parentSuspense.lanes = mergeLanes(parentSuspense.lanes, renderLanes2);
          var _alternate = parentSuspense.alternate;
          if (_alternate !== null) {
            _alternate.lanes = mergeLanes(_alternate.lanes, renderLanes2);
          }
          scheduleContextWorkOnParentPath(parentSuspense, renderLanes2, workInProgress2);
          nextFiber = fiber.sibling;
        } else {
          nextFiber = fiber.child;
        }
        if (nextFiber !== null) {
          nextFiber.return = fiber;
        } else {
          nextFiber = fiber;
          while (nextFiber !== null) {
            if (nextFiber === workInProgress2) {
              nextFiber = null;
              break;
            }
            var sibling = nextFiber.sibling;
            if (sibling !== null) {
              sibling.return = nextFiber.return;
              nextFiber = sibling;
              break;
            }
            nextFiber = nextFiber.return;
          }
        }
        fiber = nextFiber;
      }
    }
    function prepareToReadContext(workInProgress2, renderLanes2) {
      currentlyRenderingFiber = workInProgress2;
      lastContextDependency = null;
      lastFullyObservedContext = null;
      var dependencies = workInProgress2.dependencies;
      if (dependencies !== null) {
        {
          var firstContext = dependencies.firstContext;
          if (firstContext !== null) {
            if (includesSomeLane(dependencies.lanes, renderLanes2)) {
              markWorkInProgressReceivedUpdate();
            }
            dependencies.firstContext = null;
          }
        }
      }
    }
    function readContext(context2) {
      {
        if (isDisallowedContextReadInDEV) {
          error2("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
        }
      }
      var value = isPrimaryRenderer ? context2._currentValue : context2._currentValue2;
      if (lastFullyObservedContext === context2) ;
      else {
        var contextItem = {
          context: context2,
          memoizedValue: value,
          next: null
        };
        if (lastContextDependency === null) {
          if (currentlyRenderingFiber === null) {
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          }
          lastContextDependency = contextItem;
          currentlyRenderingFiber.dependencies = {
            lanes: NoLanes,
            firstContext: contextItem
          };
        } else {
          lastContextDependency = lastContextDependency.next = contextItem;
        }
      }
      return value;
    }
    var interleavedQueues = null;
    function pushInterleavedQueue(queue) {
      if (interleavedQueues === null) {
        interleavedQueues = [queue];
      } else {
        interleavedQueues.push(queue);
      }
    }
    function enqueueInterleavedUpdates() {
      if (interleavedQueues !== null) {
        for (var i2 = 0; i2 < interleavedQueues.length; i2++) {
          var queue = interleavedQueues[i2];
          var lastInterleavedUpdate = queue.interleaved;
          if (lastInterleavedUpdate !== null) {
            queue.interleaved = null;
            var firstInterleavedUpdate = lastInterleavedUpdate.next;
            var lastPendingUpdate = queue.pending;
            if (lastPendingUpdate !== null) {
              var firstPendingUpdate = lastPendingUpdate.next;
              lastPendingUpdate.next = firstInterleavedUpdate;
              lastInterleavedUpdate.next = firstPendingUpdate;
            }
            queue.pending = lastInterleavedUpdate;
          }
        }
        interleavedQueues = null;
      }
    }
    var UpdateState = 0;
    var ReplaceState = 1;
    var ForceUpdate = 2;
    var CaptureUpdate = 3;
    var hasForceUpdate = false;
    var didWarnUpdateInsideUpdate;
    var currentlyProcessingQueue;
    {
      didWarnUpdateInsideUpdate = false;
      currentlyProcessingQueue = null;
    }
    function initializeUpdateQueue(fiber) {
      var queue = {
        baseState: fiber.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: NoLanes
        },
        effects: null
      };
      fiber.updateQueue = queue;
    }
    function cloneUpdateQueue(current2, workInProgress2) {
      var queue = workInProgress2.updateQueue;
      var currentQueue = current2.updateQueue;
      if (queue === currentQueue) {
        var clone = {
          baseState: currentQueue.baseState,
          firstBaseUpdate: currentQueue.firstBaseUpdate,
          lastBaseUpdate: currentQueue.lastBaseUpdate,
          shared: currentQueue.shared,
          effects: currentQueue.effects
        };
        workInProgress2.updateQueue = clone;
      }
    }
    function createUpdate(eventTime, lane) {
      var update = {
        eventTime,
        lane,
        tag: UpdateState,
        payload: null,
        callback: null,
        next: null
      };
      return update;
    }
    function enqueueUpdate(fiber, update, lane) {
      var updateQueue = fiber.updateQueue;
      if (updateQueue === null) {
        return;
      }
      var sharedQueue = updateQueue.shared;
      if (isInterleavedUpdate(fiber)) {
        var interleaved = sharedQueue.interleaved;
        if (interleaved === null) {
          update.next = update;
          pushInterleavedQueue(sharedQueue);
        } else {
          update.next = interleaved.next;
          interleaved.next = update;
        }
        sharedQueue.interleaved = update;
      } else {
        var pending = sharedQueue.pending;
        if (pending === null) {
          update.next = update;
        } else {
          update.next = pending.next;
          pending.next = update;
        }
        sharedQueue.pending = update;
      }
      {
        if (currentlyProcessingQueue === sharedQueue && !didWarnUpdateInsideUpdate) {
          error2("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback.");
          didWarnUpdateInsideUpdate = true;
        }
      }
    }
    function entangleTransitions(root, fiber, lane) {
      var updateQueue = fiber.updateQueue;
      if (updateQueue === null) {
        return;
      }
      var sharedQueue = updateQueue.shared;
      if (isTransitionLane(lane)) {
        var queueLanes = sharedQueue.lanes;
        queueLanes = intersectLanes(queueLanes, root.pendingLanes);
        var newQueueLanes = mergeLanes(queueLanes, lane);
        sharedQueue.lanes = newQueueLanes;
        markRootEntangled(root, newQueueLanes);
      }
    }
    function enqueueCapturedUpdate(workInProgress2, capturedUpdate) {
      var queue = workInProgress2.updateQueue;
      var current2 = workInProgress2.alternate;
      if (current2 !== null) {
        var currentQueue = current2.updateQueue;
        if (queue === currentQueue) {
          var newFirst = null;
          var newLast = null;
          var firstBaseUpdate = queue.firstBaseUpdate;
          if (firstBaseUpdate !== null) {
            var update = firstBaseUpdate;
            do {
              var clone = {
                eventTime: update.eventTime,
                lane: update.lane,
                tag: update.tag,
                payload: update.payload,
                callback: update.callback,
                next: null
              };
              if (newLast === null) {
                newFirst = newLast = clone;
              } else {
                newLast.next = clone;
                newLast = clone;
              }
              update = update.next;
            } while (update !== null);
            if (newLast === null) {
              newFirst = newLast = capturedUpdate;
            } else {
              newLast.next = capturedUpdate;
              newLast = capturedUpdate;
            }
          } else {
            newFirst = newLast = capturedUpdate;
          }
          queue = {
            baseState: currentQueue.baseState,
            firstBaseUpdate: newFirst,
            lastBaseUpdate: newLast,
            shared: currentQueue.shared,
            effects: currentQueue.effects
          };
          workInProgress2.updateQueue = queue;
          return;
        }
      }
      var lastBaseUpdate = queue.lastBaseUpdate;
      if (lastBaseUpdate === null) {
        queue.firstBaseUpdate = capturedUpdate;
      } else {
        lastBaseUpdate.next = capturedUpdate;
      }
      queue.lastBaseUpdate = capturedUpdate;
    }
    function getStateFromUpdate(workInProgress2, queue, update, prevState, nextProps, instance) {
      switch (update.tag) {
        case ReplaceState: {
          var payload = update.payload;
          if (typeof payload === "function") {
            {
              enterDisallowedContextReadInDEV();
            }
            var nextState = payload.call(instance, prevState, nextProps);
            {
              if (workInProgress2.mode & StrictLegacyMode) {
                setIsStrictModeForDevtools(true);
                try {
                  payload.call(instance, prevState, nextProps);
                } finally {
                  setIsStrictModeForDevtools(false);
                }
              }
              exitDisallowedContextReadInDEV();
            }
            return nextState;
          }
          return payload;
        }
        case CaptureUpdate: {
          workInProgress2.flags = workInProgress2.flags & ~ShouldCapture | DidCapture;
        }
        // Intentional fallthrough
        case UpdateState: {
          var _payload = update.payload;
          var partialState;
          if (typeof _payload === "function") {
            {
              enterDisallowedContextReadInDEV();
            }
            partialState = _payload.call(instance, prevState, nextProps);
            {
              if (workInProgress2.mode & StrictLegacyMode) {
                setIsStrictModeForDevtools(true);
                try {
                  _payload.call(instance, prevState, nextProps);
                } finally {
                  setIsStrictModeForDevtools(false);
                }
              }
              exitDisallowedContextReadInDEV();
            }
          } else {
            partialState = _payload;
          }
          if (partialState === null || partialState === void 0) {
            return prevState;
          }
          return assign({}, prevState, partialState);
        }
        case ForceUpdate: {
          hasForceUpdate = true;
          return prevState;
        }
      }
      return prevState;
    }
    function processUpdateQueue(workInProgress2, props, instance, renderLanes2) {
      var queue = workInProgress2.updateQueue;
      hasForceUpdate = false;
      {
        currentlyProcessingQueue = queue.shared;
      }
      var firstBaseUpdate = queue.firstBaseUpdate;
      var lastBaseUpdate = queue.lastBaseUpdate;
      var pendingQueue = queue.shared.pending;
      if (pendingQueue !== null) {
        queue.shared.pending = null;
        var lastPendingUpdate = pendingQueue;
        var firstPendingUpdate = lastPendingUpdate.next;
        lastPendingUpdate.next = null;
        if (lastBaseUpdate === null) {
          firstBaseUpdate = firstPendingUpdate;
        } else {
          lastBaseUpdate.next = firstPendingUpdate;
        }
        lastBaseUpdate = lastPendingUpdate;
        var current2 = workInProgress2.alternate;
        if (current2 !== null) {
          var currentQueue = current2.updateQueue;
          var currentLastBaseUpdate = currentQueue.lastBaseUpdate;
          if (currentLastBaseUpdate !== lastBaseUpdate) {
            if (currentLastBaseUpdate === null) {
              currentQueue.firstBaseUpdate = firstPendingUpdate;
            } else {
              currentLastBaseUpdate.next = firstPendingUpdate;
            }
            currentQueue.lastBaseUpdate = lastPendingUpdate;
          }
        }
      }
      if (firstBaseUpdate !== null) {
        var newState = queue.baseState;
        var newLanes = NoLanes;
        var newBaseState = null;
        var newFirstBaseUpdate = null;
        var newLastBaseUpdate = null;
        var update = firstBaseUpdate;
        do {
          var updateLane = update.lane;
          var updateEventTime = update.eventTime;
          if (!isSubsetOfLanes(renderLanes2, updateLane)) {
            var clone = {
              eventTime: updateEventTime,
              lane: updateLane,
              tag: update.tag,
              payload: update.payload,
              callback: update.callback,
              next: null
            };
            if (newLastBaseUpdate === null) {
              newFirstBaseUpdate = newLastBaseUpdate = clone;
              newBaseState = newState;
            } else {
              newLastBaseUpdate = newLastBaseUpdate.next = clone;
            }
            newLanes = mergeLanes(newLanes, updateLane);
          } else {
            if (newLastBaseUpdate !== null) {
              var _clone = {
                eventTime: updateEventTime,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: NoLane,
                tag: update.tag,
                payload: update.payload,
                callback: update.callback,
                next: null
              };
              newLastBaseUpdate = newLastBaseUpdate.next = _clone;
            }
            newState = getStateFromUpdate(workInProgress2, queue, update, newState, props, instance);
            var callback = update.callback;
            if (callback !== null && // If the update was already committed, we should not queue its
            // callback again.
            update.lane !== NoLane) {
              workInProgress2.flags |= Callback;
              var effects = queue.effects;
              if (effects === null) {
                queue.effects = [update];
              } else {
                effects.push(update);
              }
            }
          }
          update = update.next;
          if (update === null) {
            pendingQueue = queue.shared.pending;
            if (pendingQueue === null) {
              break;
            } else {
              var _lastPendingUpdate = pendingQueue;
              var _firstPendingUpdate = _lastPendingUpdate.next;
              _lastPendingUpdate.next = null;
              update = _firstPendingUpdate;
              queue.lastBaseUpdate = _lastPendingUpdate;
              queue.shared.pending = null;
            }
          }
        } while (true);
        if (newLastBaseUpdate === null) {
          newBaseState = newState;
        }
        queue.baseState = newBaseState;
        queue.firstBaseUpdate = newFirstBaseUpdate;
        queue.lastBaseUpdate = newLastBaseUpdate;
        var lastInterleaved = queue.shared.interleaved;
        if (lastInterleaved !== null) {
          var interleaved = lastInterleaved;
          do {
            newLanes = mergeLanes(newLanes, interleaved.lane);
            interleaved = interleaved.next;
          } while (interleaved !== lastInterleaved);
        } else if (firstBaseUpdate === null) {
          queue.shared.lanes = NoLanes;
        }
        markSkippedUpdateLanes(newLanes);
        workInProgress2.lanes = newLanes;
        workInProgress2.memoizedState = newState;
      }
      {
        currentlyProcessingQueue = null;
      }
    }
    function callCallback(callback, context2) {
      if (typeof callback !== "function") {
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + callback));
      }
      callback.call(context2);
    }
    function resetHasForceUpdateBeforeProcessing() {
      hasForceUpdate = false;
    }
    function checkHasForceUpdateAfterProcessing() {
      return hasForceUpdate;
    }
    function commitUpdateQueue(finishedWork, finishedQueue, instance) {
      var effects = finishedQueue.effects;
      finishedQueue.effects = null;
      if (effects !== null) {
        for (var i2 = 0; i2 < effects.length; i2++) {
          var effect = effects[i2];
          var callback = effect.callback;
          if (callback !== null) {
            effect.callback = null;
            callCallback(callback, instance);
          }
        }
      }
    }
    var fakeInternalInstance = {};
    var emptyRefsObject = new React4.Component().refs;
    var didWarnAboutStateAssignmentForComponent;
    var didWarnAboutUninitializedState;
    var didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate;
    var didWarnAboutLegacyLifecyclesAndDerivedState;
    var didWarnAboutUndefinedDerivedState;
    var warnOnUndefinedDerivedState;
    var warnOnInvalidCallback;
    var didWarnAboutDirectlyAssigningPropsToState;
    var didWarnAboutContextTypeAndContextTypes;
    var didWarnAboutInvalidateContextType;
    {
      didWarnAboutStateAssignmentForComponent = /* @__PURE__ */ new Set();
      didWarnAboutUninitializedState = /* @__PURE__ */ new Set();
      didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate = /* @__PURE__ */ new Set();
      didWarnAboutLegacyLifecyclesAndDerivedState = /* @__PURE__ */ new Set();
      didWarnAboutDirectlyAssigningPropsToState = /* @__PURE__ */ new Set();
      didWarnAboutUndefinedDerivedState = /* @__PURE__ */ new Set();
      didWarnAboutContextTypeAndContextTypes = /* @__PURE__ */ new Set();
      didWarnAboutInvalidateContextType = /* @__PURE__ */ new Set();
      var didWarnOnInvalidCallback = /* @__PURE__ */ new Set();
      warnOnInvalidCallback = function(callback, callerName) {
        if (callback === null || typeof callback === "function") {
          return;
        }
        var key = callerName + "_" + callback;
        if (!didWarnOnInvalidCallback.has(key)) {
          didWarnOnInvalidCallback.add(key);
          error2("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", callerName, callback);
        }
      };
      warnOnUndefinedDerivedState = function(type, partialState) {
        if (partialState === void 0) {
          var componentName = getComponentNameFromType(type) || "Component";
          if (!didWarnAboutUndefinedDerivedState.has(componentName)) {
            didWarnAboutUndefinedDerivedState.add(componentName);
            error2("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", componentName);
          }
        }
      };
      Object.defineProperty(fakeInternalInstance, "_processChildContext", {
        enumerable: false,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      });
      Object.freeze(fakeInternalInstance);
    }
    function applyDerivedStateFromProps(workInProgress2, ctor, getDerivedStateFromProps, nextProps) {
      var prevState = workInProgress2.memoizedState;
      var partialState = getDerivedStateFromProps(nextProps, prevState);
      {
        if (workInProgress2.mode & StrictLegacyMode) {
          setIsStrictModeForDevtools(true);
          try {
            partialState = getDerivedStateFromProps(nextProps, prevState);
          } finally {
            setIsStrictModeForDevtools(false);
          }
        }
        warnOnUndefinedDerivedState(ctor, partialState);
      }
      var memoizedState = partialState === null || partialState === void 0 ? prevState : assign({}, prevState, partialState);
      workInProgress2.memoizedState = memoizedState;
      if (workInProgress2.lanes === NoLanes) {
        var updateQueue = workInProgress2.updateQueue;
        updateQueue.baseState = memoizedState;
      }
    }
    var classComponentUpdater = {
      isMounted,
      enqueueSetState: function(inst, payload, callback) {
        var fiber = get(inst);
        var eventTime = requestEventTime();
        var lane = requestUpdateLane(fiber);
        var update = createUpdate(eventTime, lane);
        update.payload = payload;
        if (callback !== void 0 && callback !== null) {
          {
            warnOnInvalidCallback(callback, "setState");
          }
          update.callback = callback;
        }
        enqueueUpdate(fiber, update);
        var root = scheduleUpdateOnFiber(fiber, lane, eventTime);
        if (root !== null) {
          entangleTransitions(root, fiber, lane);
        }
        {
          markStateUpdateScheduled(fiber, lane);
        }
      },
      enqueueReplaceState: function(inst, payload, callback) {
        var fiber = get(inst);
        var eventTime = requestEventTime();
        var lane = requestUpdateLane(fiber);
        var update = createUpdate(eventTime, lane);
        update.tag = ReplaceState;
        update.payload = payload;
        if (callback !== void 0 && callback !== null) {
          {
            warnOnInvalidCallback(callback, "replaceState");
          }
          update.callback = callback;
        }
        enqueueUpdate(fiber, update);
        var root = scheduleUpdateOnFiber(fiber, lane, eventTime);
        if (root !== null) {
          entangleTransitions(root, fiber, lane);
        }
        {
          markStateUpdateScheduled(fiber, lane);
        }
      },
      enqueueForceUpdate: function(inst, callback) {
        var fiber = get(inst);
        var eventTime = requestEventTime();
        var lane = requestUpdateLane(fiber);
        var update = createUpdate(eventTime, lane);
        update.tag = ForceUpdate;
        if (callback !== void 0 && callback !== null) {
          {
            warnOnInvalidCallback(callback, "forceUpdate");
          }
          update.callback = callback;
        }
        enqueueUpdate(fiber, update);
        var root = scheduleUpdateOnFiber(fiber, lane, eventTime);
        if (root !== null) {
          entangleTransitions(root, fiber, lane);
        }
        {
          markForceUpdateScheduled(fiber, lane);
        }
      }
    };
    function checkShouldComponentUpdate(workInProgress2, ctor, oldProps, newProps, oldState, newState, nextContext) {
      var instance = workInProgress2.stateNode;
      if (typeof instance.shouldComponentUpdate === "function") {
        var shouldUpdate = instance.shouldComponentUpdate(newProps, newState, nextContext);
        {
          if (workInProgress2.mode & StrictLegacyMode) {
            setIsStrictModeForDevtools(true);
            try {
              shouldUpdate = instance.shouldComponentUpdate(newProps, newState, nextContext);
            } finally {
              setIsStrictModeForDevtools(false);
            }
          }
          if (shouldUpdate === void 0) {
            error2("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", getComponentNameFromType(ctor) || "Component");
          }
        }
        return shouldUpdate;
      }
      if (ctor.prototype && ctor.prototype.isPureReactComponent) {
        return !shallowEqual(oldProps, newProps) || !shallowEqual(oldState, newState);
      }
      return true;
    }
    function checkClassInstance(workInProgress2, ctor, newProps) {
      var instance = workInProgress2.stateNode;
      {
        var name = getComponentNameFromType(ctor) || "Component";
        var renderPresent = instance.render;
        if (!renderPresent) {
          if (ctor.prototype && typeof ctor.prototype.render === "function") {
            error2("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", name);
          } else {
            error2("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", name);
          }
        }
        if (instance.getInitialState && !instance.getInitialState.isReactClassApproved && !instance.state) {
          error2("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", name);
        }
        if (instance.getDefaultProps && !instance.getDefaultProps.isReactClassApproved) {
          error2("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", name);
        }
        if (instance.propTypes) {
          error2("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", name);
        }
        if (instance.contextType) {
          error2("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", name);
        }
        {
          if (instance.contextTypes) {
            error2("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", name);
          }
          if (ctor.contextType && ctor.contextTypes && !didWarnAboutContextTypeAndContextTypes.has(ctor)) {
            didWarnAboutContextTypeAndContextTypes.add(ctor);
            error2("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", name);
          }
        }
        if (typeof instance.componentShouldUpdate === "function") {
          error2("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", name);
        }
        if (ctor.prototype && ctor.prototype.isPureReactComponent && typeof instance.shouldComponentUpdate !== "undefined") {
          error2("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", getComponentNameFromType(ctor) || "A pure component");
        }
        if (typeof instance.componentDidUnmount === "function") {
          error2("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", name);
        }
        if (typeof instance.componentDidReceiveProps === "function") {
          error2("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", name);
        }
        if (typeof instance.componentWillRecieveProps === "function") {
          error2("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", name);
        }
        if (typeof instance.UNSAFE_componentWillRecieveProps === "function") {
          error2("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", name);
        }
        var hasMutatedProps = instance.props !== newProps;
        if (instance.props !== void 0 && hasMutatedProps) {
          error2("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", name, name);
        }
        if (instance.defaultProps) {
          error2("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", name, name);
        }
        if (typeof instance.getSnapshotBeforeUpdate === "function" && typeof instance.componentDidUpdate !== "function" && !didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate.has(ctor)) {
          didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate.add(ctor);
          error2("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", getComponentNameFromType(ctor));
        }
        if (typeof instance.getDerivedStateFromProps === "function") {
          error2("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", name);
        }
        if (typeof instance.getDerivedStateFromError === "function") {
          error2("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", name);
        }
        if (typeof ctor.getSnapshotBeforeUpdate === "function") {
          error2("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", name);
        }
        var _state = instance.state;
        if (_state && (typeof _state !== "object" || isArray(_state))) {
          error2("%s.state: must be set to an object or null", name);
        }
        if (typeof instance.getChildContext === "function" && typeof ctor.childContextTypes !== "object") {
          error2("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", name);
        }
      }
    }
    function adoptClassInstance(workInProgress2, instance) {
      instance.updater = classComponentUpdater;
      workInProgress2.stateNode = instance;
      set(instance, workInProgress2);
      {
        instance._reactInternalInstance = fakeInternalInstance;
      }
    }
    function constructClassInstance(workInProgress2, ctor, props) {
      var isLegacyContextConsumer = false;
      var unmaskedContext = emptyContextObject;
      var context2 = emptyContextObject;
      var contextType = ctor.contextType;
      {
        if ("contextType" in ctor) {
          var isValid = (
            // Allow null for conditional declaration
            contextType === null || contextType !== void 0 && contextType.$$typeof === REACT_CONTEXT_TYPE && contextType._context === void 0
          );
          if (!isValid && !didWarnAboutInvalidateContextType.has(ctor)) {
            didWarnAboutInvalidateContextType.add(ctor);
            var addendum = "";
            if (contextType === void 0) {
              addendum = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file.";
            } else if (typeof contextType !== "object") {
              addendum = " However, it is set to a " + typeof contextType + ".";
            } else if (contextType.$$typeof === REACT_PROVIDER_TYPE) {
              addendum = " Did you accidentally pass the Context.Provider instead?";
            } else if (contextType._context !== void 0) {
              addendum = " Did you accidentally pass the Context.Consumer instead?";
            } else {
              addendum = " However, it is set to an object with keys {" + Object.keys(contextType).join(", ") + "}.";
            }
            error2("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", getComponentNameFromType(ctor) || "Component", addendum);
          }
        }
      }
      if (typeof contextType === "object" && contextType !== null) {
        context2 = readContext(contextType);
      } else {
        unmaskedContext = getUnmaskedContext(workInProgress2, ctor, true);
        var contextTypes = ctor.contextTypes;
        isLegacyContextConsumer = contextTypes !== null && contextTypes !== void 0;
        context2 = isLegacyContextConsumer ? getMaskedContext(workInProgress2, unmaskedContext) : emptyContextObject;
      }
      var instance = new ctor(props, context2);
      {
        if (workInProgress2.mode & StrictLegacyMode) {
          setIsStrictModeForDevtools(true);
          try {
            instance = new ctor(props, context2);
          } finally {
            setIsStrictModeForDevtools(false);
          }
        }
      }
      var state = workInProgress2.memoizedState = instance.state !== null && instance.state !== void 0 ? instance.state : null;
      adoptClassInstance(workInProgress2, instance);
      {
        if (typeof ctor.getDerivedStateFromProps === "function" && state === null) {
          var componentName = getComponentNameFromType(ctor) || "Component";
          if (!didWarnAboutUninitializedState.has(componentName)) {
            didWarnAboutUninitializedState.add(componentName);
            error2("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", componentName, instance.state === null ? "null" : "undefined", componentName);
          }
        }
        if (typeof ctor.getDerivedStateFromProps === "function" || typeof instance.getSnapshotBeforeUpdate === "function") {
          var foundWillMountName = null;
          var foundWillReceivePropsName = null;
          var foundWillUpdateName = null;
          if (typeof instance.componentWillMount === "function" && instance.componentWillMount.__suppressDeprecationWarning !== true) {
            foundWillMountName = "componentWillMount";
          } else if (typeof instance.UNSAFE_componentWillMount === "function") {
            foundWillMountName = "UNSAFE_componentWillMount";
          }
          if (typeof instance.componentWillReceiveProps === "function" && instance.componentWillReceiveProps.__suppressDeprecationWarning !== true) {
            foundWillReceivePropsName = "componentWillReceiveProps";
          } else if (typeof instance.UNSAFE_componentWillReceiveProps === "function") {
            foundWillReceivePropsName = "UNSAFE_componentWillReceiveProps";
          }
          if (typeof instance.componentWillUpdate === "function" && instance.componentWillUpdate.__suppressDeprecationWarning !== true) {
            foundWillUpdateName = "componentWillUpdate";
          } else if (typeof instance.UNSAFE_componentWillUpdate === "function") {
            foundWillUpdateName = "UNSAFE_componentWillUpdate";
          }
          if (foundWillMountName !== null || foundWillReceivePropsName !== null || foundWillUpdateName !== null) {
            var _componentName = getComponentNameFromType(ctor) || "Component";
            var newApiName = typeof ctor.getDerivedStateFromProps === "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            if (!didWarnAboutLegacyLifecyclesAndDerivedState.has(_componentName)) {
              didWarnAboutLegacyLifecyclesAndDerivedState.add(_componentName);
              error2("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n%s uses %s but also contains the following legacy lifecycles:%s%s%s\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://reactjs.org/link/unsafe-component-lifecycles", _componentName, newApiName, foundWillMountName !== null ? "\n  " + foundWillMountName : "", foundWillReceivePropsName !== null ? "\n  " + foundWillReceivePropsName : "", foundWillUpdateName !== null ? "\n  " + foundWillUpdateName : "");
            }
          }
        }
      }
      if (isLegacyContextConsumer) {
        cacheContext(workInProgress2, unmaskedContext, context2);
      }
      return instance;
    }
    function callComponentWillMount(workInProgress2, instance) {
      var oldState = instance.state;
      if (typeof instance.componentWillMount === "function") {
        instance.componentWillMount();
      }
      if (typeof instance.UNSAFE_componentWillMount === "function") {
        instance.UNSAFE_componentWillMount();
      }
      if (oldState !== instance.state) {
        {
          error2("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", getComponentNameFromFiber(workInProgress2) || "Component");
        }
        classComponentUpdater.enqueueReplaceState(instance, instance.state, null);
      }
    }
    function callComponentWillReceiveProps(workInProgress2, instance, newProps, nextContext) {
      var oldState = instance.state;
      if (typeof instance.componentWillReceiveProps === "function") {
        instance.componentWillReceiveProps(newProps, nextContext);
      }
      if (typeof instance.UNSAFE_componentWillReceiveProps === "function") {
        instance.UNSAFE_componentWillReceiveProps(newProps, nextContext);
      }
      if (instance.state !== oldState) {
        {
          var componentName = getComponentNameFromFiber(workInProgress2) || "Component";
          if (!didWarnAboutStateAssignmentForComponent.has(componentName)) {
            didWarnAboutStateAssignmentForComponent.add(componentName);
            error2("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", componentName);
          }
        }
        classComponentUpdater.enqueueReplaceState(instance, instance.state, null);
      }
    }
    function mountClassInstance(workInProgress2, ctor, newProps, renderLanes2) {
      {
        checkClassInstance(workInProgress2, ctor, newProps);
      }
      var instance = workInProgress2.stateNode;
      instance.props = newProps;
      instance.state = workInProgress2.memoizedState;
      instance.refs = emptyRefsObject;
      initializeUpdateQueue(workInProgress2);
      var contextType = ctor.contextType;
      if (typeof contextType === "object" && contextType !== null) {
        instance.context = readContext(contextType);
      } else {
        var unmaskedContext = getUnmaskedContext(workInProgress2, ctor, true);
        instance.context = getMaskedContext(workInProgress2, unmaskedContext);
      }
      {
        if (instance.state === newProps) {
          var componentName = getComponentNameFromType(ctor) || "Component";
          if (!didWarnAboutDirectlyAssigningPropsToState.has(componentName)) {
            didWarnAboutDirectlyAssigningPropsToState.add(componentName);
            error2("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", componentName);
          }
        }
        if (workInProgress2.mode & StrictLegacyMode) {
          ReactStrictModeWarnings.recordLegacyContextWarning(workInProgress2, instance);
        }
        {
          ReactStrictModeWarnings.recordUnsafeLifecycleWarnings(workInProgress2, instance);
        }
      }
      instance.state = workInProgress2.memoizedState;
      var getDerivedStateFromProps = ctor.getDerivedStateFromProps;
      if (typeof getDerivedStateFromProps === "function") {
        applyDerivedStateFromProps(workInProgress2, ctor, getDerivedStateFromProps, newProps);
        instance.state = workInProgress2.memoizedState;
      }
      if (typeof ctor.getDerivedStateFromProps !== "function" && typeof instance.getSnapshotBeforeUpdate !== "function" && (typeof instance.UNSAFE_componentWillMount === "function" || typeof instance.componentWillMount === "function")) {
        callComponentWillMount(workInProgress2, instance);
        processUpdateQueue(workInProgress2, newProps, instance, renderLanes2);
        instance.state = workInProgress2.memoizedState;
      }
      if (typeof instance.componentDidMount === "function") {
        var fiberFlags = Update;
        {
          fiberFlags |= LayoutStatic;
        }
        if ((workInProgress2.mode & StrictEffectsMode) !== NoMode) {
          fiberFlags |= MountLayoutDev;
        }
        workInProgress2.flags |= fiberFlags;
      }
    }
    function resumeMountClassInstance(workInProgress2, ctor, newProps, renderLanes2) {
      var instance = workInProgress2.stateNode;
      var oldProps = workInProgress2.memoizedProps;
      instance.props = oldProps;
      var oldContext = instance.context;
      var contextType = ctor.contextType;
      var nextContext = emptyContextObject;
      if (typeof contextType === "object" && contextType !== null) {
        nextContext = readContext(contextType);
      } else {
        var nextLegacyUnmaskedContext = getUnmaskedContext(workInProgress2, ctor, true);
        nextContext = getMaskedContext(workInProgress2, nextLegacyUnmaskedContext);
      }
      var getDerivedStateFromProps = ctor.getDerivedStateFromProps;
      var hasNewLifecycles = typeof getDerivedStateFromProps === "function" || typeof instance.getSnapshotBeforeUpdate === "function";
      if (!hasNewLifecycles && (typeof instance.UNSAFE_componentWillReceiveProps === "function" || typeof instance.componentWillReceiveProps === "function")) {
        if (oldProps !== newProps || oldContext !== nextContext) {
          callComponentWillReceiveProps(workInProgress2, instance, newProps, nextContext);
        }
      }
      resetHasForceUpdateBeforeProcessing();
      var oldState = workInProgress2.memoizedState;
      var newState = instance.state = oldState;
      processUpdateQueue(workInProgress2, newProps, instance, renderLanes2);
      newState = workInProgress2.memoizedState;
      if (oldProps === newProps && oldState === newState && !hasContextChanged() && !checkHasForceUpdateAfterProcessing()) {
        if (typeof instance.componentDidMount === "function") {
          var fiberFlags = Update;
          {
            fiberFlags |= LayoutStatic;
          }
          if ((workInProgress2.mode & StrictEffectsMode) !== NoMode) {
            fiberFlags |= MountLayoutDev;
          }
          workInProgress2.flags |= fiberFlags;
        }
        return false;
      }
      if (typeof getDerivedStateFromProps === "function") {
        applyDerivedStateFromProps(workInProgress2, ctor, getDerivedStateFromProps, newProps);
        newState = workInProgress2.memoizedState;
      }
      var shouldUpdate = checkHasForceUpdateAfterProcessing() || checkShouldComponentUpdate(workInProgress2, ctor, oldProps, newProps, oldState, newState, nextContext);
      if (shouldUpdate) {
        if (!hasNewLifecycles && (typeof instance.UNSAFE_componentWillMount === "function" || typeof instance.componentWillMount === "function")) {
          if (typeof instance.componentWillMount === "function") {
            instance.componentWillMount();
          }
          if (typeof instance.UNSAFE_componentWillMount === "function") {
            instance.UNSAFE_componentWillMount();
          }
        }
        if (typeof instance.componentDidMount === "function") {
          var _fiberFlags = Update;
          {
            _fiberFlags |= LayoutStatic;
          }
          if ((workInProgress2.mode & StrictEffectsMode) !== NoMode) {
            _fiberFlags |= MountLayoutDev;
          }
          workInProgress2.flags |= _fiberFlags;
        }
      } else {
        if (typeof instance.componentDidMount === "function") {
          var _fiberFlags2 = Update;
          {
            _fiberFlags2 |= LayoutStatic;
          }
          if ((workInProgress2.mode & StrictEffectsMode) !== NoMode) {
            _fiberFlags2 |= MountLayoutDev;
          }
          workInProgress2.flags |= _fiberFlags2;
        }
        workInProgress2.memoizedProps = newProps;
        workInProgress2.memoizedState = newState;
      }
      instance.props = newProps;
      instance.state = newState;
      instance.context = nextContext;
      return shouldUpdate;
    }
    function updateClassInstance(current2, workInProgress2, ctor, newProps, renderLanes2) {
      var instance = workInProgress2.stateNode;
      cloneUpdateQueue(current2, workInProgress2);
      var unresolvedOldProps = workInProgress2.memoizedProps;
      var oldProps = workInProgress2.type === workInProgress2.elementType ? unresolvedOldProps : resolveDefaultProps(workInProgress2.type, unresolvedOldProps);
      instance.props = oldProps;
      var unresolvedNewProps = workInProgress2.pendingProps;
      var oldContext = instance.context;
      var contextType = ctor.contextType;
      var nextContext = emptyContextObject;
      if (typeof contextType === "object" && contextType !== null) {
        nextContext = readContext(contextType);
      } else {
        var nextUnmaskedContext = getUnmaskedContext(workInProgress2, ctor, true);
        nextContext = getMaskedContext(workInProgress2, nextUnmaskedContext);
      }
      var getDerivedStateFromProps = ctor.getDerivedStateFromProps;
      var hasNewLifecycles = typeof getDerivedStateFromProps === "function" || typeof instance.getSnapshotBeforeUpdate === "function";
      if (!hasNewLifecycles && (typeof instance.UNSAFE_componentWillReceiveProps === "function" || typeof instance.componentWillReceiveProps === "function")) {
        if (unresolvedOldProps !== unresolvedNewProps || oldContext !== nextContext) {
          callComponentWillReceiveProps(workInProgress2, instance, newProps, nextContext);
        }
      }
      resetHasForceUpdateBeforeProcessing();
      var oldState = workInProgress2.memoizedState;
      var newState = instance.state = oldState;
      processUpdateQueue(workInProgress2, newProps, instance, renderLanes2);
      newState = workInProgress2.memoizedState;
      if (unresolvedOldProps === unresolvedNewProps && oldState === newState && !hasContextChanged() && !checkHasForceUpdateAfterProcessing() && !enableLazyContextPropagation) {
        if (typeof instance.componentDidUpdate === "function") {
          if (unresolvedOldProps !== current2.memoizedProps || oldState !== current2.memoizedState) {
            workInProgress2.flags |= Update;
          }
        }
        if (typeof instance.getSnapshotBeforeUpdate === "function") {
          if (unresolvedOldProps !== current2.memoizedProps || oldState !== current2.memoizedState) {
            workInProgress2.flags |= Snapshot;
          }
        }
        return false;
      }
      if (typeof getDerivedStateFromProps === "function") {
        applyDerivedStateFromProps(workInProgress2, ctor, getDerivedStateFromProps, newProps);
        newState = workInProgress2.memoizedState;
      }
      var shouldUpdate = checkHasForceUpdateAfterProcessing() || checkShouldComponentUpdate(workInProgress2, ctor, oldProps, newProps, oldState, newState, nextContext) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      enableLazyContextPropagation;
      if (shouldUpdate) {
        if (!hasNewLifecycles && (typeof instance.UNSAFE_componentWillUpdate === "function" || typeof instance.componentWillUpdate === "function")) {
          if (typeof instance.componentWillUpdate === "function") {
            instance.componentWillUpdate(newProps, newState, nextContext);
          }
          if (typeof instance.UNSAFE_componentWillUpdate === "function") {
            instance.UNSAFE_componentWillUpdate(newProps, newState, nextContext);
          }
        }
        if (typeof instance.componentDidUpdate === "function") {
          workInProgress2.flags |= Update;
        }
        if (typeof instance.getSnapshotBeforeUpdate === "function") {
          workInProgress2.flags |= Snapshot;
        }
      } else {
        if (typeof instance.componentDidUpdate === "function") {
          if (unresolvedOldProps !== current2.memoizedProps || oldState !== current2.memoizedState) {
            workInProgress2.flags |= Update;
          }
        }
        if (typeof instance.getSnapshotBeforeUpdate === "function") {
          if (unresolvedOldProps !== current2.memoizedProps || oldState !== current2.memoizedState) {
            workInProgress2.flags |= Snapshot;
          }
        }
        workInProgress2.memoizedProps = newProps;
        workInProgress2.memoizedState = newState;
      }
      instance.props = newProps;
      instance.state = newState;
      instance.context = nextContext;
      return shouldUpdate;
    }
    var forkStack = [];
    var forkStackIndex = 0;
    var treeForkProvider = null;
    var treeForkCount = 0;
    var idStack = [];
    var idStackIndex = 0;
    var treeContextProvider = null;
    var treeContextId = 1;
    var treeContextOverflow = "";
    function isForkedChild(workInProgress2) {
      warnIfNotHydrating();
      return (workInProgress2.flags & Forked) !== NoFlags;
    }
    function getForksAtLevel(workInProgress2) {
      warnIfNotHydrating();
      return treeForkCount;
    }
    function getTreeId() {
      var overflow = treeContextOverflow;
      var idWithLeadingBit = treeContextId;
      var id = idWithLeadingBit & ~getLeadingBit(idWithLeadingBit);
      return id.toString(32) + overflow;
    }
    function pushTreeFork(workInProgress2, totalChildren) {
      warnIfNotHydrating();
      forkStack[forkStackIndex++] = treeForkCount;
      forkStack[forkStackIndex++] = treeForkProvider;
      treeForkProvider = workInProgress2;
      treeForkCount = totalChildren;
    }
    function pushTreeId(workInProgress2, totalChildren, index2) {
      warnIfNotHydrating();
      idStack[idStackIndex++] = treeContextId;
      idStack[idStackIndex++] = treeContextOverflow;
      idStack[idStackIndex++] = treeContextProvider;
      treeContextProvider = workInProgress2;
      var baseIdWithLeadingBit = treeContextId;
      var baseOverflow = treeContextOverflow;
      var baseLength = getBitLength(baseIdWithLeadingBit) - 1;
      var baseId = baseIdWithLeadingBit & ~(1 << baseLength);
      var slot = index2 + 1;
      var length = getBitLength(totalChildren) + baseLength;
      if (length > 30) {
        var numberOfOverflowBits = baseLength - baseLength % 5;
        var newOverflowBits = (1 << numberOfOverflowBits) - 1;
        var newOverflow = (baseId & newOverflowBits).toString(32);
        var restOfBaseId = baseId >> numberOfOverflowBits;
        var restOfBaseLength = baseLength - numberOfOverflowBits;
        var restOfLength = getBitLength(totalChildren) + restOfBaseLength;
        var restOfNewBits = slot << restOfBaseLength;
        var id = restOfNewBits | restOfBaseId;
        var overflow = newOverflow + baseOverflow;
        treeContextId = 1 << restOfLength | id;
        treeContextOverflow = overflow;
      } else {
        var newBits = slot << baseLength;
        var _id = newBits | baseId;
        var _overflow = baseOverflow;
        treeContextId = 1 << length | _id;
        treeContextOverflow = _overflow;
      }
    }
    function pushMaterializedTreeId(workInProgress2) {
      warnIfNotHydrating();
      var returnFiber = workInProgress2.return;
      if (returnFiber !== null) {
        var numberOfForks = 1;
        var slotIndex = 0;
        pushTreeFork(workInProgress2, numberOfForks);
        pushTreeId(workInProgress2, numberOfForks, slotIndex);
      }
    }
    function getBitLength(number) {
      return 32 - clz32(number);
    }
    function getLeadingBit(id) {
      return 1 << getBitLength(id) - 1;
    }
    function popTreeContext(workInProgress2) {
      while (workInProgress2 === treeForkProvider) {
        treeForkProvider = forkStack[--forkStackIndex];
        forkStack[forkStackIndex] = null;
        treeForkCount = forkStack[--forkStackIndex];
        forkStack[forkStackIndex] = null;
      }
      while (workInProgress2 === treeContextProvider) {
        treeContextProvider = idStack[--idStackIndex];
        idStack[idStackIndex] = null;
        treeContextOverflow = idStack[--idStackIndex];
        idStack[idStackIndex] = null;
        treeContextId = idStack[--idStackIndex];
        idStack[idStackIndex] = null;
      }
    }
    function getSuspendedTreeContext() {
      warnIfNotHydrating();
      if (treeContextProvider !== null) {
        return {
          id: treeContextId,
          overflow: treeContextOverflow
        };
      } else {
        return null;
      }
    }
    function restoreSuspendedTreeContext(workInProgress2, suspendedContext) {
      warnIfNotHydrating();
      idStack[idStackIndex++] = treeContextId;
      idStack[idStackIndex++] = treeContextOverflow;
      idStack[idStackIndex++] = treeContextProvider;
      treeContextId = suspendedContext.id;
      treeContextOverflow = suspendedContext.overflow;
      treeContextProvider = workInProgress2;
    }
    function warnIfNotHydrating() {
      {
        if (!getIsHydrating()) {
          error2("Expected to be hydrating. This is a bug in React. Please file an issue.");
        }
      }
    }
    var hydrationParentFiber = null;
    var nextHydratableInstance = null;
    var isHydrating = false;
    var didSuspend = false;
    var hydrationErrors = null;
    function warnIfHydrating() {
      {
        if (isHydrating) {
          error2("We should not be hydrating here. This is a bug in React. Please file a bug.");
        }
      }
    }
    function markDidSuspendWhileHydratingDEV() {
      {
        didSuspend = true;
      }
    }
    function enterHydrationState(fiber) {
      if (!supportsHydration) {
        return false;
      }
      var parentInstance = fiber.stateNode.containerInfo;
      nextHydratableInstance = getFirstHydratableChildWithinContainer(parentInstance);
      hydrationParentFiber = fiber;
      isHydrating = true;
      hydrationErrors = null;
      didSuspend = false;
      return true;
    }
    function reenterHydrationStateFromDehydratedSuspenseInstance(fiber, suspenseInstance, treeContext) {
      if (!supportsHydration) {
        return false;
      }
      nextHydratableInstance = getFirstHydratableChildWithinSuspenseInstance(suspenseInstance);
      hydrationParentFiber = fiber;
      isHydrating = true;
      hydrationErrors = null;
      didSuspend = false;
      if (treeContext !== null) {
        restoreSuspendedTreeContext(fiber, treeContext);
      }
      return true;
    }
    function warnUnhydratedInstance(returnFiber, instance) {
      {
        switch (returnFiber.tag) {
          case HostRoot:
            didNotHydrateInstanceWithinContainer(returnFiber.stateNode.containerInfo, instance);
            break;
          case HostComponent:
            didNotHydrateInstance(returnFiber.type, returnFiber.memoizedProps, returnFiber.stateNode, instance);
            break;
          case SuspenseComponent:
            var suspenseState = returnFiber.memoizedState;
            if (suspenseState.dehydrated !== null) didNotHydrateInstanceWithinSuspenseInstance(suspenseState.dehydrated, instance);
            break;
        }
      }
    }
    function deleteHydratableInstance(returnFiber, instance) {
      warnUnhydratedInstance(returnFiber, instance);
      var childToDelete = createFiberFromHostInstanceForDeletion();
      childToDelete.stateNode = instance;
      childToDelete.return = returnFiber;
      var deletions = returnFiber.deletions;
      if (deletions === null) {
        returnFiber.deletions = [childToDelete];
        returnFiber.flags |= ChildDeletion;
      } else {
        deletions.push(childToDelete);
      }
    }
    function warnNonhydratedInstance(returnFiber, fiber) {
      {
        if (didSuspend) {
          return;
        }
        switch (returnFiber.tag) {
          case HostRoot: {
            var parentContainer = returnFiber.stateNode.containerInfo;
            switch (fiber.tag) {
              case HostComponent:
                var type = fiber.type;
                var props = fiber.pendingProps;
                didNotFindHydratableInstanceWithinContainer(parentContainer, type, props);
                break;
              case HostText:
                var text = fiber.pendingProps;
                didNotFindHydratableTextInstanceWithinContainer(parentContainer, text);
                break;
              case SuspenseComponent:
                didNotFindHydratableSuspenseInstanceWithinContainer(parentContainer);
                break;
            }
            break;
          }
          case HostComponent: {
            var parentType = returnFiber.type;
            var parentProps = returnFiber.memoizedProps;
            var parentInstance = returnFiber.stateNode;
            switch (fiber.tag) {
              case HostComponent:
                var _type = fiber.type;
                var _props = fiber.pendingProps;
                didNotFindHydratableInstance(parentType, parentProps, parentInstance, _type, _props);
                break;
              case HostText:
                var _text = fiber.pendingProps;
                didNotFindHydratableTextInstance(parentType, parentProps, parentInstance, _text);
                break;
              case SuspenseComponent:
                didNotFindHydratableSuspenseInstance(parentType, parentProps, parentInstance);
                break;
            }
            break;
          }
          case SuspenseComponent: {
            var suspenseState = returnFiber.memoizedState;
            var _parentInstance = suspenseState.dehydrated;
            if (_parentInstance !== null) switch (fiber.tag) {
              case HostComponent:
                var _type2 = fiber.type;
                var _props2 = fiber.pendingProps;
                didNotFindHydratableInstanceWithinSuspenseInstance(_parentInstance, _type2, _props2);
                break;
              case HostText:
                var _text2 = fiber.pendingProps;
                didNotFindHydratableTextInstanceWithinSuspenseInstance(_parentInstance, _text2);
                break;
              case SuspenseComponent:
                didNotFindHydratableSuspenseInstanceWithinSuspenseInstance(_parentInstance);
                break;
            }
            break;
          }
          default:
            return;
        }
      }
    }
    function insertNonHydratedInstance(returnFiber, fiber) {
      fiber.flags = fiber.flags & ~Hydrating | Placement;
      warnNonhydratedInstance(returnFiber, fiber);
    }
    function tryHydrate(fiber, nextInstance) {
      switch (fiber.tag) {
        case HostComponent: {
          var type = fiber.type;
          var props = fiber.pendingProps;
          var instance = canHydrateInstance(nextInstance, type, props);
          if (instance !== null) {
            fiber.stateNode = instance;
            hydrationParentFiber = fiber;
            nextHydratableInstance = getFirstHydratableChild(instance);
            return true;
          }
          return false;
        }
        case HostText: {
          var text = fiber.pendingProps;
          var textInstance = canHydrateTextInstance(nextInstance, text);
          if (textInstance !== null) {
            fiber.stateNode = textInstance;
            hydrationParentFiber = fiber;
            nextHydratableInstance = null;
            return true;
          }
          return false;
        }
        case SuspenseComponent: {
          {
            var suspenseInstance = canHydrateSuspenseInstance(nextInstance);
            if (suspenseInstance !== null) {
              var suspenseState = {
                dehydrated: suspenseInstance,
                treeContext: getSuspendedTreeContext(),
                retryLane: OffscreenLane
              };
              fiber.memoizedState = suspenseState;
              var dehydratedFragment = createFiberFromDehydratedFragment(suspenseInstance);
              dehydratedFragment.return = fiber;
              fiber.child = dehydratedFragment;
              hydrationParentFiber = fiber;
              nextHydratableInstance = null;
              return true;
            }
          }
          return false;
        }
        default:
          return false;
      }
    }
    function shouldClientRenderOnMismatch(fiber) {
      return (fiber.mode & ConcurrentMode) !== NoMode && (fiber.flags & DidCapture) === NoFlags;
    }
    function throwOnHydrationMismatch(fiber) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function tryToClaimNextHydratableInstance(fiber) {
      if (!isHydrating) {
        return;
      }
      var nextInstance = nextHydratableInstance;
      if (!nextInstance) {
        if (shouldClientRenderOnMismatch(fiber)) {
          warnNonhydratedInstance(hydrationParentFiber, fiber);
          throwOnHydrationMismatch();
        }
        insertNonHydratedInstance(hydrationParentFiber, fiber);
        isHydrating = false;
        hydrationParentFiber = fiber;
        return;
      }
      var firstAttemptedInstance = nextInstance;
      if (!tryHydrate(fiber, nextInstance)) {
        if (shouldClientRenderOnMismatch(fiber)) {
          warnNonhydratedInstance(hydrationParentFiber, fiber);
          throwOnHydrationMismatch();
        }
        nextInstance = getNextHydratableSibling(firstAttemptedInstance);
        var prevHydrationParentFiber = hydrationParentFiber;
        if (!nextInstance || !tryHydrate(fiber, nextInstance)) {
          insertNonHydratedInstance(hydrationParentFiber, fiber);
          isHydrating = false;
          hydrationParentFiber = fiber;
          return;
        }
        deleteHydratableInstance(prevHydrationParentFiber, firstAttemptedInstance);
      }
    }
    function prepareToHydrateHostInstance(fiber, rootContainerInstance, hostContext) {
      if (!supportsHydration) {
        throw new Error("Expected prepareToHydrateHostInstance() to never be called. This error is likely caused by a bug in React. Please file an issue.");
      }
      var instance = fiber.stateNode;
      var shouldWarnIfMismatchDev = !didSuspend;
      var updatePayload = hydrateInstance(instance, fiber.type, fiber.memoizedProps, rootContainerInstance, hostContext, fiber, shouldWarnIfMismatchDev);
      fiber.updateQueue = updatePayload;
      if (updatePayload !== null) {
        return true;
      }
      return false;
    }
    function prepareToHydrateHostTextInstance(fiber) {
      if (!supportsHydration) {
        throw new Error("Expected prepareToHydrateHostTextInstance() to never be called. This error is likely caused by a bug in React. Please file an issue.");
      }
      var textInstance = fiber.stateNode;
      var textContent = fiber.memoizedProps;
      var shouldWarnIfMismatchDev = !didSuspend;
      var shouldUpdate = hydrateTextInstance(textInstance, textContent, fiber, shouldWarnIfMismatchDev);
      if (shouldUpdate) {
        var returnFiber = hydrationParentFiber;
        if (returnFiber !== null) {
          var isConcurrentMode = (returnFiber.mode & ConcurrentMode) !== NoMode;
          switch (returnFiber.tag) {
            case HostRoot: {
              var parentContainer = returnFiber.stateNode.containerInfo;
              didNotMatchHydratedContainerTextInstance(
                parentContainer,
                textInstance,
                textContent,
                // TODO: Delete this argument when we remove the legacy root API.
                isConcurrentMode
              );
              break;
            }
            case HostComponent: {
              var parentType = returnFiber.type;
              var parentProps = returnFiber.memoizedProps;
              var parentInstance = returnFiber.stateNode;
              didNotMatchHydratedTextInstance(
                parentType,
                parentProps,
                parentInstance,
                textInstance,
                textContent,
                // TODO: Delete this argument when we remove the legacy root API.
                isConcurrentMode
              );
              break;
            }
          }
        }
      }
      return shouldUpdate;
    }
    function prepareToHydrateHostSuspenseInstance(fiber) {
      if (!supportsHydration) {
        throw new Error("Expected prepareToHydrateHostSuspenseInstance() to never be called. This error is likely caused by a bug in React. Please file an issue.");
      }
      var suspenseState = fiber.memoizedState;
      var suspenseInstance = suspenseState !== null ? suspenseState.dehydrated : null;
      if (!suspenseInstance) {
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      }
      hydrateSuspenseInstance(suspenseInstance, fiber);
    }
    function skipPastDehydratedSuspenseInstance(fiber) {
      if (!supportsHydration) {
        throw new Error("Expected skipPastDehydratedSuspenseInstance() to never be called. This error is likely caused by a bug in React. Please file an issue.");
      }
      var suspenseState = fiber.memoizedState;
      var suspenseInstance = suspenseState !== null ? suspenseState.dehydrated : null;
      if (!suspenseInstance) {
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      }
      return getNextHydratableInstanceAfterSuspenseInstance(suspenseInstance);
    }
    function popToNextHostParent(fiber) {
      var parent = fiber.return;
      while (parent !== null && parent.tag !== HostComponent && parent.tag !== HostRoot && parent.tag !== SuspenseComponent) {
        parent = parent.return;
      }
      hydrationParentFiber = parent;
    }
    function popHydrationState(fiber) {
      if (!supportsHydration) {
        return false;
      }
      if (fiber !== hydrationParentFiber) {
        return false;
      }
      if (!isHydrating) {
        popToNextHostParent(fiber);
        isHydrating = true;
        return false;
      }
      if (fiber.tag !== HostRoot && (fiber.tag !== HostComponent || shouldDeleteUnhydratedTailInstances(fiber.type) && !shouldSetTextContent(fiber.type, fiber.memoizedProps))) {
        var nextInstance = nextHydratableInstance;
        if (nextInstance) {
          if (shouldClientRenderOnMismatch(fiber)) {
            warnIfUnhydratedTailNodes(fiber);
            throwOnHydrationMismatch();
          } else {
            while (nextInstance) {
              deleteHydratableInstance(fiber, nextInstance);
              nextInstance = getNextHydratableSibling(nextInstance);
            }
          }
        }
      }
      popToNextHostParent(fiber);
      if (fiber.tag === SuspenseComponent) {
        nextHydratableInstance = skipPastDehydratedSuspenseInstance(fiber);
      } else {
        nextHydratableInstance = hydrationParentFiber ? getNextHydratableSibling(fiber.stateNode) : null;
      }
      return true;
    }
    function hasUnhydratedTailNodes() {
      return isHydrating && nextHydratableInstance !== null;
    }
    function warnIfUnhydratedTailNodes(fiber) {
      var nextInstance = nextHydratableInstance;
      while (nextInstance) {
        warnUnhydratedInstance(fiber, nextInstance);
        nextInstance = getNextHydratableSibling(nextInstance);
      }
    }
    function resetHydrationState() {
      if (!supportsHydration) {
        return;
      }
      hydrationParentFiber = null;
      nextHydratableInstance = null;
      isHydrating = false;
      didSuspend = false;
    }
    function upgradeHydrationErrorsToRecoverable() {
      if (hydrationErrors !== null) {
        queueRecoverableErrors(hydrationErrors);
        hydrationErrors = null;
      }
    }
    function getIsHydrating() {
      return isHydrating;
    }
    function queueHydrationError(error3) {
      if (hydrationErrors === null) {
        hydrationErrors = [error3];
      } else {
        hydrationErrors.push(error3);
      }
    }
    var didWarnAboutMaps;
    var didWarnAboutGenerators;
    var didWarnAboutStringRefs;
    var ownerHasKeyUseWarning;
    var ownerHasFunctionTypeWarning;
    var warnForMissingKey = function(child, returnFiber) {
    };
    {
      didWarnAboutMaps = false;
      didWarnAboutGenerators = false;
      didWarnAboutStringRefs = {};
      ownerHasKeyUseWarning = {};
      ownerHasFunctionTypeWarning = {};
      warnForMissingKey = function(child, returnFiber) {
        if (child === null || typeof child !== "object") {
          return;
        }
        if (!child._store || child._store.validated || child.key != null) {
          return;
        }
        if (typeof child._store !== "object") {
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        }
        child._store.validated = true;
        var componentName = getComponentNameFromFiber(returnFiber) || "Component";
        if (ownerHasKeyUseWarning[componentName]) {
          return;
        }
        ownerHasKeyUseWarning[componentName] = true;
        error2('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.');
      };
    }
    function coerceRef(returnFiber, current2, element) {
      var mixedRef = element.ref;
      if (mixedRef !== null && typeof mixedRef !== "function" && typeof mixedRef !== "object") {
        {
          if ((returnFiber.mode & StrictLegacyMode || warnAboutStringRefs) && // We warn in ReactElement.js if owner and self are equal for string refs
          // because these cannot be automatically converted to an arrow function
          // using a codemod. Therefore, we don't have to warn about string refs again.
          !(element._owner && element._self && element._owner.stateNode !== element._self)) {
            var componentName = getComponentNameFromFiber(returnFiber) || "Component";
            if (!didWarnAboutStringRefs[componentName]) {
              {
                error2('A string ref, "%s", has been found within a strict mode tree. String refs are a source of potential bugs and should be avoided. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', mixedRef);
              }
              didWarnAboutStringRefs[componentName] = true;
            }
          }
        }
        if (element._owner) {
          var owner = element._owner;
          var inst;
          if (owner) {
            var ownerFiber = owner;
            if (ownerFiber.tag !== ClassComponent) {
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            }
            inst = ownerFiber.stateNode;
          }
          if (!inst) {
            throw new Error("Missing owner for string ref " + mixedRef + ". This error is likely caused by a bug in React. Please file an issue.");
          }
          var resolvedInst = inst;
          {
            checkPropStringCoercion(mixedRef, "ref");
          }
          var stringRef = "" + mixedRef;
          if (current2 !== null && current2.ref !== null && typeof current2.ref === "function" && current2.ref._stringRef === stringRef) {
            return current2.ref;
          }
          var ref = function(value) {
            var refs = resolvedInst.refs;
            if (refs === emptyRefsObject) {
              refs = resolvedInst.refs = {};
            }
            if (value === null) {
              delete refs[stringRef];
            } else {
              refs[stringRef] = value;
            }
          };
          ref._stringRef = stringRef;
          return ref;
        } else {
          if (typeof mixedRef !== "string") {
            throw new Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");
          }
          if (!element._owner) {
            throw new Error("Element ref was specified as a string (" + mixedRef + ") but no owner was set. This could happen for one of the following reasons:\n1. You may be adding a ref to a function component\n2. You may be adding a ref to a component that was not created inside a component's render method\n3. You have multiple copies of React loaded\nSee https://reactjs.org/link/refs-must-have-owner for more information.");
          }
        }
      }
      return mixedRef;
    }
    function throwOnInvalidObjectType(returnFiber, newChild) {
      var childString = Object.prototype.toString.call(newChild);
      throw new Error("Objects are not valid as a React child (found: " + (childString === "[object Object]" ? "object with keys {" + Object.keys(newChild).join(", ") + "}" : childString) + "). If you meant to render a collection of children, use an array instead.");
    }
    function warnOnFunctionType(returnFiber) {
      {
        var componentName = getComponentNameFromFiber(returnFiber) || "Component";
        if (ownerHasFunctionTypeWarning[componentName]) {
          return;
        }
        ownerHasFunctionTypeWarning[componentName] = true;
        error2("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function resolveLazy(lazyType) {
      var payload = lazyType._payload;
      var init = lazyType._init;
      return init(payload);
    }
    function ChildReconciler(shouldTrackSideEffects) {
      function deleteChild(returnFiber, childToDelete) {
        if (!shouldTrackSideEffects) {
          return;
        }
        var deletions = returnFiber.deletions;
        if (deletions === null) {
          returnFiber.deletions = [childToDelete];
          returnFiber.flags |= ChildDeletion;
        } else {
          deletions.push(childToDelete);
        }
      }
      function deleteRemainingChildren(returnFiber, currentFirstChild) {
        if (!shouldTrackSideEffects) {
          return null;
        }
        var childToDelete = currentFirstChild;
        while (childToDelete !== null) {
          deleteChild(returnFiber, childToDelete);
          childToDelete = childToDelete.sibling;
        }
        return null;
      }
      function mapRemainingChildren(returnFiber, currentFirstChild) {
        var existingChildren = /* @__PURE__ */ new Map();
        var existingChild = currentFirstChild;
        while (existingChild !== null) {
          if (existingChild.key !== null) {
            existingChildren.set(existingChild.key, existingChild);
          } else {
            existingChildren.set(existingChild.index, existingChild);
          }
          existingChild = existingChild.sibling;
        }
        return existingChildren;
      }
      function useFiber2(fiber, pendingProps) {
        var clone = createWorkInProgress(fiber, pendingProps);
        clone.index = 0;
        clone.sibling = null;
        return clone;
      }
      function placeChild(newFiber, lastPlacedIndex, newIndex) {
        newFiber.index = newIndex;
        if (!shouldTrackSideEffects) {
          newFiber.flags |= Forked;
          return lastPlacedIndex;
        }
        var current2 = newFiber.alternate;
        if (current2 !== null) {
          var oldIndex = current2.index;
          if (oldIndex < lastPlacedIndex) {
            newFiber.flags |= Placement;
            return lastPlacedIndex;
          } else {
            return oldIndex;
          }
        } else {
          newFiber.flags |= Placement;
          return lastPlacedIndex;
        }
      }
      function placeSingleChild(newFiber) {
        if (shouldTrackSideEffects && newFiber.alternate === null) {
          newFiber.flags |= Placement;
        }
        return newFiber;
      }
      function updateTextNode(returnFiber, current2, textContent, lanes) {
        if (current2 === null || current2.tag !== HostText) {
          var created = createFiberFromText(textContent, returnFiber.mode, lanes);
          created.return = returnFiber;
          return created;
        } else {
          var existing = useFiber2(current2, textContent);
          existing.return = returnFiber;
          return existing;
        }
      }
      function updateElement(returnFiber, current2, element, lanes) {
        var elementType = element.type;
        if (elementType === REACT_FRAGMENT_TYPE) {
          return updateFragment2(returnFiber, current2, element.props.children, lanes, element.key);
        }
        if (current2 !== null) {
          if (current2.elementType === elementType || // Keep this check inline so it only runs on the false path:
          isCompatibleFamilyForHotReloading(current2, element) || // Lazy types should reconcile their resolved type.
          // We need to do this after the Hot Reloading check above,
          // because hot reloading has different semantics than prod because
          // it doesn't resuspend. So we can't let the call below suspend.
          typeof elementType === "object" && elementType !== null && elementType.$$typeof === REACT_LAZY_TYPE && resolveLazy(elementType) === current2.type) {
            var existing = useFiber2(current2, element.props);
            existing.ref = coerceRef(returnFiber, current2, element);
            existing.return = returnFiber;
            {
              existing._debugSource = element._source;
              existing._debugOwner = element._owner;
            }
            return existing;
          }
        }
        var created = createFiberFromElement(element, returnFiber.mode, lanes);
        created.ref = coerceRef(returnFiber, current2, element);
        created.return = returnFiber;
        return created;
      }
      function updatePortal(returnFiber, current2, portal, lanes) {
        if (current2 === null || current2.tag !== HostPortal || current2.stateNode.containerInfo !== portal.containerInfo || current2.stateNode.implementation !== portal.implementation) {
          var created = createFiberFromPortal(portal, returnFiber.mode, lanes);
          created.return = returnFiber;
          return created;
        } else {
          var existing = useFiber2(current2, portal.children || []);
          existing.return = returnFiber;
          return existing;
        }
      }
      function updateFragment2(returnFiber, current2, fragment, lanes, key) {
        if (current2 === null || current2.tag !== Fragment2) {
          var created = createFiberFromFragment(fragment, returnFiber.mode, lanes, key);
          created.return = returnFiber;
          return created;
        } else {
          var existing = useFiber2(current2, fragment);
          existing.return = returnFiber;
          return existing;
        }
      }
      function createChild(returnFiber, newChild, lanes) {
        if (typeof newChild === "string" && newChild !== "" || typeof newChild === "number") {
          var created = createFiberFromText("" + newChild, returnFiber.mode, lanes);
          created.return = returnFiber;
          return created;
        }
        if (typeof newChild === "object" && newChild !== null) {
          switch (newChild.$$typeof) {
            case REACT_ELEMENT_TYPE: {
              var _created = createFiberFromElement(newChild, returnFiber.mode, lanes);
              _created.ref = coerceRef(returnFiber, null, newChild);
              _created.return = returnFiber;
              return _created;
            }
            case REACT_PORTAL_TYPE: {
              var _created2 = createFiberFromPortal(newChild, returnFiber.mode, lanes);
              _created2.return = returnFiber;
              return _created2;
            }
            case REACT_LAZY_TYPE: {
              {
                var payload = newChild._payload;
                var init = newChild._init;
                return createChild(returnFiber, init(payload), lanes);
              }
            }
          }
          if (isArray(newChild) || getIteratorFn(newChild)) {
            var _created3 = createFiberFromFragment(newChild, returnFiber.mode, lanes, null);
            _created3.return = returnFiber;
            return _created3;
          }
          throwOnInvalidObjectType(returnFiber, newChild);
        }
        {
          if (typeof newChild === "function") {
            warnOnFunctionType(returnFiber);
          }
        }
        return null;
      }
      function updateSlot(returnFiber, oldFiber, newChild, lanes) {
        var key = oldFiber !== null ? oldFiber.key : null;
        if (typeof newChild === "string" && newChild !== "" || typeof newChild === "number") {
          if (key !== null) {
            return null;
          }
          return updateTextNode(returnFiber, oldFiber, "" + newChild, lanes);
        }
        if (typeof newChild === "object" && newChild !== null) {
          switch (newChild.$$typeof) {
            case REACT_ELEMENT_TYPE: {
              if (newChild.key === key) {
                return updateElement(returnFiber, oldFiber, newChild, lanes);
              } else {
                return null;
              }
            }
            case REACT_PORTAL_TYPE: {
              if (newChild.key === key) {
                return updatePortal(returnFiber, oldFiber, newChild, lanes);
              } else {
                return null;
              }
            }
            case REACT_LAZY_TYPE: {
              {
                var payload = newChild._payload;
                var init = newChild._init;
                return updateSlot(returnFiber, oldFiber, init(payload), lanes);
              }
            }
          }
          if (isArray(newChild) || getIteratorFn(newChild)) {
            if (key !== null) {
              return null;
            }
            return updateFragment2(returnFiber, oldFiber, newChild, lanes, null);
          }
          throwOnInvalidObjectType(returnFiber, newChild);
        }
        {
          if (typeof newChild === "function") {
            warnOnFunctionType(returnFiber);
          }
        }
        return null;
      }
      function updateFromMap(existingChildren, returnFiber, newIdx, newChild, lanes) {
        if (typeof newChild === "string" && newChild !== "" || typeof newChild === "number") {
          var matchedFiber = existingChildren.get(newIdx) || null;
          return updateTextNode(returnFiber, matchedFiber, "" + newChild, lanes);
        }
        if (typeof newChild === "object" && newChild !== null) {
          switch (newChild.$$typeof) {
            case REACT_ELEMENT_TYPE: {
              var _matchedFiber = existingChildren.get(newChild.key === null ? newIdx : newChild.key) || null;
              return updateElement(returnFiber, _matchedFiber, newChild, lanes);
            }
            case REACT_PORTAL_TYPE: {
              var _matchedFiber2 = existingChildren.get(newChild.key === null ? newIdx : newChild.key) || null;
              return updatePortal(returnFiber, _matchedFiber2, newChild, lanes);
            }
            case REACT_LAZY_TYPE: {
              var payload = newChild._payload;
              var init = newChild._init;
              return updateFromMap(existingChildren, returnFiber, newIdx, init(payload), lanes);
            }
          }
          if (isArray(newChild) || getIteratorFn(newChild)) {
            var _matchedFiber3 = existingChildren.get(newIdx) || null;
            return updateFragment2(returnFiber, _matchedFiber3, newChild, lanes, null);
          }
          throwOnInvalidObjectType(returnFiber, newChild);
        }
        {
          if (typeof newChild === "function") {
            warnOnFunctionType(returnFiber);
          }
        }
        return null;
      }
      function warnOnInvalidKey(child, knownKeys, returnFiber) {
        {
          if (typeof child !== "object" || child === null) {
            return knownKeys;
          }
          switch (child.$$typeof) {
            case REACT_ELEMENT_TYPE:
            case REACT_PORTAL_TYPE:
              warnForMissingKey(child, returnFiber);
              var key = child.key;
              if (typeof key !== "string") {
                break;
              }
              if (knownKeys === null) {
                knownKeys = /* @__PURE__ */ new Set();
                knownKeys.add(key);
                break;
              }
              if (!knownKeys.has(key)) {
                knownKeys.add(key);
                break;
              }
              error2("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted \u2014 the behavior is unsupported and could change in a future version.", key);
              break;
            case REACT_LAZY_TYPE: {
              var payload = child._payload;
              var init = child._init;
              warnOnInvalidKey(init(payload), knownKeys, returnFiber);
              break;
            }
          }
        }
        return knownKeys;
      }
      function reconcileChildrenArray(returnFiber, currentFirstChild, newChildren, lanes) {
        {
          var knownKeys = null;
          for (var i2 = 0; i2 < newChildren.length; i2++) {
            var child = newChildren[i2];
            knownKeys = warnOnInvalidKey(child, knownKeys, returnFiber);
          }
        }
        var resultingFirstChild = null;
        var previousNewFiber = null;
        var oldFiber = currentFirstChild;
        var lastPlacedIndex = 0;
        var newIdx = 0;
        var nextOldFiber = null;
        for (; oldFiber !== null && newIdx < newChildren.length; newIdx++) {
          if (oldFiber.index > newIdx) {
            nextOldFiber = oldFiber;
            oldFiber = null;
          } else {
            nextOldFiber = oldFiber.sibling;
          }
          var newFiber = updateSlot(returnFiber, oldFiber, newChildren[newIdx], lanes);
          if (newFiber === null) {
            if (oldFiber === null) {
              oldFiber = nextOldFiber;
            }
            break;
          }
          if (shouldTrackSideEffects) {
            if (oldFiber && newFiber.alternate === null) {
              deleteChild(returnFiber, oldFiber);
            }
          }
          lastPlacedIndex = placeChild(newFiber, lastPlacedIndex, newIdx);
          if (previousNewFiber === null) {
            resultingFirstChild = newFiber;
          } else {
            previousNewFiber.sibling = newFiber;
          }
          previousNewFiber = newFiber;
          oldFiber = nextOldFiber;
        }
        if (newIdx === newChildren.length) {
          deleteRemainingChildren(returnFiber, oldFiber);
          if (getIsHydrating()) {
            var numberOfForks = newIdx;
            pushTreeFork(returnFiber, numberOfForks);
          }
          return resultingFirstChild;
        }
        if (oldFiber === null) {
          for (; newIdx < newChildren.length; newIdx++) {
            var _newFiber = createChild(returnFiber, newChildren[newIdx], lanes);
            if (_newFiber === null) {
              continue;
            }
            lastPlacedIndex = placeChild(_newFiber, lastPlacedIndex, newIdx);
            if (previousNewFiber === null) {
              resultingFirstChild = _newFiber;
            } else {
              previousNewFiber.sibling = _newFiber;
            }
            previousNewFiber = _newFiber;
          }
          if (getIsHydrating()) {
            var _numberOfForks = newIdx;
            pushTreeFork(returnFiber, _numberOfForks);
          }
          return resultingFirstChild;
        }
        var existingChildren = mapRemainingChildren(returnFiber, oldFiber);
        for (; newIdx < newChildren.length; newIdx++) {
          var _newFiber2 = updateFromMap(existingChildren, returnFiber, newIdx, newChildren[newIdx], lanes);
          if (_newFiber2 !== null) {
            if (shouldTrackSideEffects) {
              if (_newFiber2.alternate !== null) {
                existingChildren.delete(_newFiber2.key === null ? newIdx : _newFiber2.key);
              }
            }
            lastPlacedIndex = placeChild(_newFiber2, lastPlacedIndex, newIdx);
            if (previousNewFiber === null) {
              resultingFirstChild = _newFiber2;
            } else {
              previousNewFiber.sibling = _newFiber2;
            }
            previousNewFiber = _newFiber2;
          }
        }
        if (shouldTrackSideEffects) {
          existingChildren.forEach(function(child2) {
            return deleteChild(returnFiber, child2);
          });
        }
        if (getIsHydrating()) {
          var _numberOfForks2 = newIdx;
          pushTreeFork(returnFiber, _numberOfForks2);
        }
        return resultingFirstChild;
      }
      function reconcileChildrenIterator(returnFiber, currentFirstChild, newChildrenIterable, lanes) {
        var iteratorFn = getIteratorFn(newChildrenIterable);
        if (typeof iteratorFn !== "function") {
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        }
        {
          if (typeof Symbol === "function" && // $FlowFixMe Flow doesn't know about toStringTag
          newChildrenIterable[Symbol.toStringTag] === "Generator") {
            if (!didWarnAboutGenerators) {
              error2("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers.");
            }
            didWarnAboutGenerators = true;
          }
          if (newChildrenIterable.entries === iteratorFn) {
            if (!didWarnAboutMaps) {
              error2("Using Maps as children is not supported. Use an array of keyed ReactElements instead.");
            }
            didWarnAboutMaps = true;
          }
          var _newChildren = iteratorFn.call(newChildrenIterable);
          if (_newChildren) {
            var knownKeys = null;
            var _step = _newChildren.next();
            for (; !_step.done; _step = _newChildren.next()) {
              var child = _step.value;
              knownKeys = warnOnInvalidKey(child, knownKeys, returnFiber);
            }
          }
        }
        var newChildren = iteratorFn.call(newChildrenIterable);
        if (newChildren == null) {
          throw new Error("An iterable object provided no iterator.");
        }
        var resultingFirstChild = null;
        var previousNewFiber = null;
        var oldFiber = currentFirstChild;
        var lastPlacedIndex = 0;
        var newIdx = 0;
        var nextOldFiber = null;
        var step = newChildren.next();
        for (; oldFiber !== null && !step.done; newIdx++, step = newChildren.next()) {
          if (oldFiber.index > newIdx) {
            nextOldFiber = oldFiber;
            oldFiber = null;
          } else {
            nextOldFiber = oldFiber.sibling;
          }
          var newFiber = updateSlot(returnFiber, oldFiber, step.value, lanes);
          if (newFiber === null) {
            if (oldFiber === null) {
              oldFiber = nextOldFiber;
            }
            break;
          }
          if (shouldTrackSideEffects) {
            if (oldFiber && newFiber.alternate === null) {
              deleteChild(returnFiber, oldFiber);
            }
          }
          lastPlacedIndex = placeChild(newFiber, lastPlacedIndex, newIdx);
          if (previousNewFiber === null) {
            resultingFirstChild = newFiber;
          } else {
            previousNewFiber.sibling = newFiber;
          }
          previousNewFiber = newFiber;
          oldFiber = nextOldFiber;
        }
        if (step.done) {
          deleteRemainingChildren(returnFiber, oldFiber);
          if (getIsHydrating()) {
            var numberOfForks = newIdx;
            pushTreeFork(returnFiber, numberOfForks);
          }
          return resultingFirstChild;
        }
        if (oldFiber === null) {
          for (; !step.done; newIdx++, step = newChildren.next()) {
            var _newFiber3 = createChild(returnFiber, step.value, lanes);
            if (_newFiber3 === null) {
              continue;
            }
            lastPlacedIndex = placeChild(_newFiber3, lastPlacedIndex, newIdx);
            if (previousNewFiber === null) {
              resultingFirstChild = _newFiber3;
            } else {
              previousNewFiber.sibling = _newFiber3;
            }
            previousNewFiber = _newFiber3;
          }
          if (getIsHydrating()) {
            var _numberOfForks3 = newIdx;
            pushTreeFork(returnFiber, _numberOfForks3);
          }
          return resultingFirstChild;
        }
        var existingChildren = mapRemainingChildren(returnFiber, oldFiber);
        for (; !step.done; newIdx++, step = newChildren.next()) {
          var _newFiber4 = updateFromMap(existingChildren, returnFiber, newIdx, step.value, lanes);
          if (_newFiber4 !== null) {
            if (shouldTrackSideEffects) {
              if (_newFiber4.alternate !== null) {
                existingChildren.delete(_newFiber4.key === null ? newIdx : _newFiber4.key);
              }
            }
            lastPlacedIndex = placeChild(_newFiber4, lastPlacedIndex, newIdx);
            if (previousNewFiber === null) {
              resultingFirstChild = _newFiber4;
            } else {
              previousNewFiber.sibling = _newFiber4;
            }
            previousNewFiber = _newFiber4;
          }
        }
        if (shouldTrackSideEffects) {
          existingChildren.forEach(function(child2) {
            return deleteChild(returnFiber, child2);
          });
        }
        if (getIsHydrating()) {
          var _numberOfForks4 = newIdx;
          pushTreeFork(returnFiber, _numberOfForks4);
        }
        return resultingFirstChild;
      }
      function reconcileSingleTextNode(returnFiber, currentFirstChild, textContent, lanes) {
        if (currentFirstChild !== null && currentFirstChild.tag === HostText) {
          deleteRemainingChildren(returnFiber, currentFirstChild.sibling);
          var existing = useFiber2(currentFirstChild, textContent);
          existing.return = returnFiber;
          return existing;
        }
        deleteRemainingChildren(returnFiber, currentFirstChild);
        var created = createFiberFromText(textContent, returnFiber.mode, lanes);
        created.return = returnFiber;
        return created;
      }
      function reconcileSingleElement(returnFiber, currentFirstChild, element, lanes) {
        var key = element.key;
        var child = currentFirstChild;
        while (child !== null) {
          if (child.key === key) {
            var elementType = element.type;
            if (elementType === REACT_FRAGMENT_TYPE) {
              if (child.tag === Fragment2) {
                deleteRemainingChildren(returnFiber, child.sibling);
                var existing = useFiber2(child, element.props.children);
                existing.return = returnFiber;
                {
                  existing._debugSource = element._source;
                  existing._debugOwner = element._owner;
                }
                return existing;
              }
            } else {
              if (child.elementType === elementType || // Keep this check inline so it only runs on the false path:
              isCompatibleFamilyForHotReloading(child, element) || // Lazy types should reconcile their resolved type.
              // We need to do this after the Hot Reloading check above,
              // because hot reloading has different semantics than prod because
              // it doesn't resuspend. So we can't let the call below suspend.
              typeof elementType === "object" && elementType !== null && elementType.$$typeof === REACT_LAZY_TYPE && resolveLazy(elementType) === child.type) {
                deleteRemainingChildren(returnFiber, child.sibling);
                var _existing = useFiber2(child, element.props);
                _existing.ref = coerceRef(returnFiber, child, element);
                _existing.return = returnFiber;
                {
                  _existing._debugSource = element._source;
                  _existing._debugOwner = element._owner;
                }
                return _existing;
              }
            }
            deleteRemainingChildren(returnFiber, child);
            break;
          } else {
            deleteChild(returnFiber, child);
          }
          child = child.sibling;
        }
        if (element.type === REACT_FRAGMENT_TYPE) {
          var created = createFiberFromFragment(element.props.children, returnFiber.mode, lanes, element.key);
          created.return = returnFiber;
          return created;
        } else {
          var _created4 = createFiberFromElement(element, returnFiber.mode, lanes);
          _created4.ref = coerceRef(returnFiber, currentFirstChild, element);
          _created4.return = returnFiber;
          return _created4;
        }
      }
      function reconcileSinglePortal(returnFiber, currentFirstChild, portal, lanes) {
        var key = portal.key;
        var child = currentFirstChild;
        while (child !== null) {
          if (child.key === key) {
            if (child.tag === HostPortal && child.stateNode.containerInfo === portal.containerInfo && child.stateNode.implementation === portal.implementation) {
              deleteRemainingChildren(returnFiber, child.sibling);
              var existing = useFiber2(child, portal.children || []);
              existing.return = returnFiber;
              return existing;
            } else {
              deleteRemainingChildren(returnFiber, child);
              break;
            }
          } else {
            deleteChild(returnFiber, child);
          }
          child = child.sibling;
        }
        var created = createFiberFromPortal(portal, returnFiber.mode, lanes);
        created.return = returnFiber;
        return created;
      }
      function reconcileChildFibers2(returnFiber, currentFirstChild, newChild, lanes) {
        var isUnkeyedTopLevelFragment = typeof newChild === "object" && newChild !== null && newChild.type === REACT_FRAGMENT_TYPE && newChild.key === null;
        if (isUnkeyedTopLevelFragment) {
          newChild = newChild.props.children;
        }
        if (typeof newChild === "object" && newChild !== null) {
          switch (newChild.$$typeof) {
            case REACT_ELEMENT_TYPE:
              return placeSingleChild(reconcileSingleElement(returnFiber, currentFirstChild, newChild, lanes));
            case REACT_PORTAL_TYPE:
              return placeSingleChild(reconcileSinglePortal(returnFiber, currentFirstChild, newChild, lanes));
            case REACT_LAZY_TYPE: {
              var payload = newChild._payload;
              var init = newChild._init;
              return reconcileChildFibers2(returnFiber, currentFirstChild, init(payload), lanes);
            }
          }
          if (isArray(newChild)) {
            return reconcileChildrenArray(returnFiber, currentFirstChild, newChild, lanes);
          }
          if (getIteratorFn(newChild)) {
            return reconcileChildrenIterator(returnFiber, currentFirstChild, newChild, lanes);
          }
          throwOnInvalidObjectType(returnFiber, newChild);
        }
        if (typeof newChild === "string" && newChild !== "" || typeof newChild === "number") {
          return placeSingleChild(reconcileSingleTextNode(returnFiber, currentFirstChild, "" + newChild, lanes));
        }
        {
          if (typeof newChild === "function") {
            warnOnFunctionType(returnFiber);
          }
        }
        return deleteRemainingChildren(returnFiber, currentFirstChild);
      }
      return reconcileChildFibers2;
    }
    var reconcileChildFibers = ChildReconciler(true);
    var mountChildFibers = ChildReconciler(false);
    function cloneChildFibers(current2, workInProgress2) {
      if (current2 !== null && workInProgress2.child !== current2.child) {
        throw new Error("Resuming work not yet implemented.");
      }
      if (workInProgress2.child === null) {
        return;
      }
      var currentChild = workInProgress2.child;
      var newChild = createWorkInProgress(currentChild, currentChild.pendingProps);
      workInProgress2.child = newChild;
      newChild.return = workInProgress2;
      while (currentChild.sibling !== null) {
        currentChild = currentChild.sibling;
        newChild = newChild.sibling = createWorkInProgress(currentChild, currentChild.pendingProps);
        newChild.return = workInProgress2;
      }
      newChild.sibling = null;
    }
    function resetChildFibers(workInProgress2, lanes) {
      var child = workInProgress2.child;
      while (child !== null) {
        resetWorkInProgress(child, lanes);
        child = child.sibling;
      }
    }
    var NO_CONTEXT = {};
    var contextStackCursor$1 = createCursor(NO_CONTEXT);
    var contextFiberStackCursor = createCursor(NO_CONTEXT);
    var rootInstanceStackCursor = createCursor(NO_CONTEXT);
    function requiredContext(c) {
      if (c === NO_CONTEXT) {
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      }
      return c;
    }
    function getRootHostContainer() {
      var rootInstance = requiredContext(rootInstanceStackCursor.current);
      return rootInstance;
    }
    function pushHostContainer(fiber, nextRootInstance) {
      push(rootInstanceStackCursor, nextRootInstance, fiber);
      push(contextFiberStackCursor, fiber, fiber);
      push(contextStackCursor$1, NO_CONTEXT, fiber);
      var nextRootContext = getRootHostContext(nextRootInstance);
      pop(contextStackCursor$1, fiber);
      push(contextStackCursor$1, nextRootContext, fiber);
    }
    function popHostContainer(fiber) {
      pop(contextStackCursor$1, fiber);
      pop(contextFiberStackCursor, fiber);
      pop(rootInstanceStackCursor, fiber);
    }
    function getHostContext() {
      var context2 = requiredContext(contextStackCursor$1.current);
      return context2;
    }
    function pushHostContext(fiber) {
      var rootInstance = requiredContext(rootInstanceStackCursor.current);
      var context2 = requiredContext(contextStackCursor$1.current);
      var nextContext = getChildHostContext(context2, fiber.type, rootInstance);
      if (context2 === nextContext) {
        return;
      }
      push(contextFiberStackCursor, fiber, fiber);
      push(contextStackCursor$1, nextContext, fiber);
    }
    function popHostContext(fiber) {
      if (contextFiberStackCursor.current !== fiber) {
        return;
      }
      pop(contextStackCursor$1, fiber);
      pop(contextFiberStackCursor, fiber);
    }
    var DefaultSuspenseContext = 0;
    var SubtreeSuspenseContextMask = 1;
    var InvisibleParentSuspenseContext = 1;
    var ForceSuspenseFallback = 2;
    var suspenseStackCursor = createCursor(DefaultSuspenseContext);
    function hasSuspenseContext(parentContext, flag) {
      return (parentContext & flag) !== 0;
    }
    function setDefaultShallowSuspenseContext(parentContext) {
      return parentContext & SubtreeSuspenseContextMask;
    }
    function setShallowSuspenseContext(parentContext, shallowContext) {
      return parentContext & SubtreeSuspenseContextMask | shallowContext;
    }
    function addSubtreeSuspenseContext(parentContext, subtreeContext) {
      return parentContext | subtreeContext;
    }
    function pushSuspenseContext(fiber, newContext) {
      push(suspenseStackCursor, newContext, fiber);
    }
    function popSuspenseContext(fiber) {
      pop(suspenseStackCursor, fiber);
    }
    function shouldCaptureSuspense(workInProgress2, hasInvisibleParent) {
      var nextState = workInProgress2.memoizedState;
      if (nextState !== null) {
        if (nextState.dehydrated !== null) {
          return true;
        }
        return false;
      }
      var props = workInProgress2.memoizedProps;
      {
        return true;
      }
    }
    function findFirstSuspended(row) {
      var node = row;
      while (node !== null) {
        if (node.tag === SuspenseComponent) {
          var state = node.memoizedState;
          if (state !== null) {
            var dehydrated = state.dehydrated;
            if (dehydrated === null || isSuspenseInstancePending(dehydrated) || isSuspenseInstanceFallback(dehydrated)) {
              return node;
            }
          }
        } else if (node.tag === SuspenseListComponent && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        node.memoizedProps.revealOrder !== void 0) {
          var didSuspend2 = (node.flags & DidCapture) !== NoFlags;
          if (didSuspend2) {
            return node;
          }
        } else if (node.child !== null) {
          node.child.return = node;
          node = node.child;
          continue;
        }
        if (node === row) {
          return null;
        }
        while (node.sibling === null) {
          if (node.return === null || node.return === row) {
            return null;
          }
          node = node.return;
        }
        node.sibling.return = node.return;
        node = node.sibling;
      }
      return null;
    }
    var NoFlags$1 = (
      /*   */
      0
    );
    var HasEffect = (
      /* */
      1
    );
    var Insertion = (
      /*  */
      2
    );
    var Layout = (
      /*    */
      4
    );
    var Passive$1 = (
      /*   */
      8
    );
    var workInProgressSources = [];
    function resetWorkInProgressVersions() {
      for (var i2 = 0; i2 < workInProgressSources.length; i2++) {
        var mutableSource = workInProgressSources[i2];
        if (isPrimaryRenderer) {
          mutableSource._workInProgressVersionPrimary = null;
        } else {
          mutableSource._workInProgressVersionSecondary = null;
        }
      }
      workInProgressSources.length = 0;
    }
    function registerMutableSourceForHydration(root, mutableSource) {
      var getVersion = mutableSource._getVersion;
      var version2 = getVersion(mutableSource._source);
      if (root.mutableSourceEagerHydrationData == null) {
        root.mutableSourceEagerHydrationData = [mutableSource, version2];
      } else {
        root.mutableSourceEagerHydrationData.push(mutableSource, version2);
      }
    }
    var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher, ReactCurrentBatchConfig$1 = ReactSharedInternals.ReactCurrentBatchConfig;
    var didWarnAboutMismatchedHooksForComponent;
    var didWarnUncachedGetSnapshot;
    {
      didWarnAboutMismatchedHooksForComponent = /* @__PURE__ */ new Set();
    }
    var renderLanes = NoLanes;
    var currentlyRenderingFiber$1 = null;
    var currentHook = null;
    var workInProgressHook = null;
    var didScheduleRenderPhaseUpdate = false;
    var didScheduleRenderPhaseUpdateDuringThisPass = false;
    var localIdCounter = 0;
    var globalClientIdCounter = 0;
    var RE_RENDER_LIMIT = 25;
    var currentHookNameInDev = null;
    var hookTypesDev = null;
    var hookTypesUpdateIndexDev = -1;
    var ignorePreviousDependencies = false;
    function mountHookTypesDev() {
      {
        var hookName = currentHookNameInDev;
        if (hookTypesDev === null) {
          hookTypesDev = [hookName];
        } else {
          hookTypesDev.push(hookName);
        }
      }
    }
    function updateHookTypesDev() {
      {
        var hookName = currentHookNameInDev;
        if (hookTypesDev !== null) {
          hookTypesUpdateIndexDev++;
          if (hookTypesDev[hookTypesUpdateIndexDev] !== hookName) {
            warnOnHookMismatchInDev(hookName);
          }
        }
      }
    }
    function checkDepsAreArrayDev(deps) {
      {
        if (deps !== void 0 && deps !== null && !isArray(deps)) {
          error2("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", currentHookNameInDev, typeof deps);
        }
      }
    }
    function warnOnHookMismatchInDev(currentHookName) {
      {
        var componentName = getComponentNameFromFiber(currentlyRenderingFiber$1);
        if (!didWarnAboutMismatchedHooksForComponent.has(componentName)) {
          didWarnAboutMismatchedHooksForComponent.add(componentName);
          if (hookTypesDev !== null) {
            var table = "";
            var secondColumnStart = 30;
            for (var i2 = 0; i2 <= hookTypesUpdateIndexDev; i2++) {
              var oldHookName = hookTypesDev[i2];
              var newHookName = i2 === hookTypesUpdateIndexDev ? currentHookName : oldHookName;
              var row = i2 + 1 + ". " + oldHookName;
              while (row.length < secondColumnStart) {
                row += " ";
              }
              row += newHookName + "\n";
              table += row;
            }
            error2("React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks\n\n   Previous render            Next render\n   ------------------------------------------------------\n%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n", componentName, table);
          }
        }
      }
    }
    function throwInvalidHookError() {
      throw new Error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.");
    }
    function areHookInputsEqual(nextDeps, prevDeps) {
      {
        if (ignorePreviousDependencies) {
          return false;
        }
      }
      if (prevDeps === null) {
        {
          error2("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", currentHookNameInDev);
        }
        return false;
      }
      {
        if (nextDeps.length !== prevDeps.length) {
          error2("The final argument passed to %s changed size between renders. The order and size of this array must remain constant.\n\nPrevious: %s\nIncoming: %s", currentHookNameInDev, "[" + prevDeps.join(", ") + "]", "[" + nextDeps.join(", ") + "]");
        }
      }
      for (var i2 = 0; i2 < prevDeps.length && i2 < nextDeps.length; i2++) {
        if (objectIs(nextDeps[i2], prevDeps[i2])) {
          continue;
        }
        return false;
      }
      return true;
    }
    function renderWithHooks(current2, workInProgress2, Component3, props, secondArg, nextRenderLanes) {
      renderLanes = nextRenderLanes;
      currentlyRenderingFiber$1 = workInProgress2;
      {
        hookTypesDev = current2 !== null ? current2._debugHookTypes : null;
        hookTypesUpdateIndexDev = -1;
        ignorePreviousDependencies = current2 !== null && current2.type !== workInProgress2.type;
      }
      workInProgress2.memoizedState = null;
      workInProgress2.updateQueue = null;
      workInProgress2.lanes = NoLanes;
      {
        if (current2 !== null && current2.memoizedState !== null) {
          ReactCurrentDispatcher$1.current = HooksDispatcherOnUpdateInDEV;
        } else if (hookTypesDev !== null) {
          ReactCurrentDispatcher$1.current = HooksDispatcherOnMountWithHookTypesInDEV;
        } else {
          ReactCurrentDispatcher$1.current = HooksDispatcherOnMountInDEV;
        }
      }
      var children = Component3(props, secondArg);
      if (didScheduleRenderPhaseUpdateDuringThisPass) {
        var numberOfReRenders = 0;
        do {
          didScheduleRenderPhaseUpdateDuringThisPass = false;
          localIdCounter = 0;
          if (numberOfReRenders >= RE_RENDER_LIMIT) {
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          }
          numberOfReRenders += 1;
          {
            ignorePreviousDependencies = false;
          }
          currentHook = null;
          workInProgressHook = null;
          workInProgress2.updateQueue = null;
          {
            hookTypesUpdateIndexDev = -1;
          }
          ReactCurrentDispatcher$1.current = HooksDispatcherOnRerenderInDEV;
          children = Component3(props, secondArg);
        } while (didScheduleRenderPhaseUpdateDuringThisPass);
      }
      ReactCurrentDispatcher$1.current = ContextOnlyDispatcher;
      {
        workInProgress2._debugHookTypes = hookTypesDev;
      }
      var didRenderTooFewHooks = currentHook !== null && currentHook.next !== null;
      renderLanes = NoLanes;
      currentlyRenderingFiber$1 = null;
      currentHook = null;
      workInProgressHook = null;
      {
        currentHookNameInDev = null;
        hookTypesDev = null;
        hookTypesUpdateIndexDev = -1;
        if (current2 !== null && (current2.flags & StaticMask) !== (workInProgress2.flags & StaticMask) && // Disable this warning in legacy mode, because legacy Suspense is weird
        // and creates false positives. To make this work in legacy mode, we'd
        // need to mark fibers that commit in an incomplete state, somehow. For
        // now I'll disable the warning that most of the bugs that would trigger
        // it are either exclusive to concurrent mode or exist in both.
        (current2.mode & ConcurrentMode) !== NoMode) {
          error2("Internal React error: Expected static flag was missing. Please notify the React team.");
        }
      }
      didScheduleRenderPhaseUpdate = false;
      if (didRenderTooFewHooks) {
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      }
      return children;
    }
    function checkDidRenderIdHook() {
      var didRenderIdHook = localIdCounter !== 0;
      localIdCounter = 0;
      return didRenderIdHook;
    }
    function bailoutHooks(current2, workInProgress2, lanes) {
      workInProgress2.updateQueue = current2.updateQueue;
      if ((workInProgress2.mode & StrictEffectsMode) !== NoMode) {
        workInProgress2.flags &= ~(MountPassiveDev | MountLayoutDev | Passive | Update);
      } else {
        workInProgress2.flags &= ~(Passive | Update);
      }
      current2.lanes = removeLanes(current2.lanes, lanes);
    }
    function resetHooksAfterThrow() {
      ReactCurrentDispatcher$1.current = ContextOnlyDispatcher;
      if (didScheduleRenderPhaseUpdate) {
        var hook = currentlyRenderingFiber$1.memoizedState;
        while (hook !== null) {
          var queue = hook.queue;
          if (queue !== null) {
            queue.pending = null;
          }
          hook = hook.next;
        }
        didScheduleRenderPhaseUpdate = false;
      }
      renderLanes = NoLanes;
      currentlyRenderingFiber$1 = null;
      currentHook = null;
      workInProgressHook = null;
      {
        hookTypesDev = null;
        hookTypesUpdateIndexDev = -1;
        currentHookNameInDev = null;
        isUpdatingOpaqueValueInRenderPhase = false;
      }
      didScheduleRenderPhaseUpdateDuringThisPass = false;
      localIdCounter = 0;
    }
    function mountWorkInProgressHook() {
      var hook = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      if (workInProgressHook === null) {
        currentlyRenderingFiber$1.memoizedState = workInProgressHook = hook;
      } else {
        workInProgressHook = workInProgressHook.next = hook;
      }
      return workInProgressHook;
    }
    function updateWorkInProgressHook() {
      var nextCurrentHook;
      if (currentHook === null) {
        var current2 = currentlyRenderingFiber$1.alternate;
        if (current2 !== null) {
          nextCurrentHook = current2.memoizedState;
        } else {
          nextCurrentHook = null;
        }
      } else {
        nextCurrentHook = currentHook.next;
      }
      var nextWorkInProgressHook;
      if (workInProgressHook === null) {
        nextWorkInProgressHook = currentlyRenderingFiber$1.memoizedState;
      } else {
        nextWorkInProgressHook = workInProgressHook.next;
      }
      if (nextWorkInProgressHook !== null) {
        workInProgressHook = nextWorkInProgressHook;
        nextWorkInProgressHook = workInProgressHook.next;
        currentHook = nextCurrentHook;
      } else {
        if (nextCurrentHook === null) {
          throw new Error("Rendered more hooks than during the previous render.");
        }
        currentHook = nextCurrentHook;
        var newHook = {
          memoizedState: currentHook.memoizedState,
          baseState: currentHook.baseState,
          baseQueue: currentHook.baseQueue,
          queue: currentHook.queue,
          next: null
        };
        if (workInProgressHook === null) {
          currentlyRenderingFiber$1.memoizedState = workInProgressHook = newHook;
        } else {
          workInProgressHook = workInProgressHook.next = newHook;
        }
      }
      return workInProgressHook;
    }
    function createFunctionComponentUpdateQueue() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function basicStateReducer(state, action) {
      return typeof action === "function" ? action(state) : action;
    }
    function mountReducer(reducer, initialArg, init) {
      var hook = mountWorkInProgressHook();
      var initialState;
      if (init !== void 0) {
        initialState = init(initialArg);
      } else {
        initialState = initialArg;
      }
      hook.memoizedState = hook.baseState = initialState;
      var queue = {
        pending: null,
        interleaved: null,
        lanes: NoLanes,
        dispatch: null,
        lastRenderedReducer: reducer,
        lastRenderedState: initialState
      };
      hook.queue = queue;
      var dispatch = queue.dispatch = dispatchReducerAction.bind(null, currentlyRenderingFiber$1, queue);
      return [hook.memoizedState, dispatch];
    }
    function updateReducer(reducer, initialArg, init) {
      var hook = updateWorkInProgressHook();
      var queue = hook.queue;
      if (queue === null) {
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      }
      queue.lastRenderedReducer = reducer;
      var current2 = currentHook;
      var baseQueue = current2.baseQueue;
      var pendingQueue = queue.pending;
      if (pendingQueue !== null) {
        if (baseQueue !== null) {
          var baseFirst = baseQueue.next;
          var pendingFirst = pendingQueue.next;
          baseQueue.next = pendingFirst;
          pendingQueue.next = baseFirst;
        }
        {
          if (current2.baseQueue !== baseQueue) {
            error2("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React.");
          }
        }
        current2.baseQueue = baseQueue = pendingQueue;
        queue.pending = null;
      }
      if (baseQueue !== null) {
        var first = baseQueue.next;
        var newState = current2.baseState;
        var newBaseState = null;
        var newBaseQueueFirst = null;
        var newBaseQueueLast = null;
        var update = first;
        do {
          var updateLane = update.lane;
          if (!isSubsetOfLanes(renderLanes, updateLane)) {
            var clone = {
              lane: updateLane,
              action: update.action,
              hasEagerState: update.hasEagerState,
              eagerState: update.eagerState,
              next: null
            };
            if (newBaseQueueLast === null) {
              newBaseQueueFirst = newBaseQueueLast = clone;
              newBaseState = newState;
            } else {
              newBaseQueueLast = newBaseQueueLast.next = clone;
            }
            currentlyRenderingFiber$1.lanes = mergeLanes(currentlyRenderingFiber$1.lanes, updateLane);
            markSkippedUpdateLanes(updateLane);
          } else {
            if (newBaseQueueLast !== null) {
              var _clone = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: NoLane,
                action: update.action,
                hasEagerState: update.hasEagerState,
                eagerState: update.eagerState,
                next: null
              };
              newBaseQueueLast = newBaseQueueLast.next = _clone;
            }
            if (update.hasEagerState) {
              newState = update.eagerState;
            } else {
              var action = update.action;
              newState = reducer(newState, action);
            }
          }
          update = update.next;
        } while (update !== null && update !== first);
        if (newBaseQueueLast === null) {
          newBaseState = newState;
        } else {
          newBaseQueueLast.next = newBaseQueueFirst;
        }
        if (!objectIs(newState, hook.memoizedState)) {
          markWorkInProgressReceivedUpdate();
        }
        hook.memoizedState = newState;
        hook.baseState = newBaseState;
        hook.baseQueue = newBaseQueueLast;
        queue.lastRenderedState = newState;
      }
      var lastInterleaved = queue.interleaved;
      if (lastInterleaved !== null) {
        var interleaved = lastInterleaved;
        do {
          var interleavedLane = interleaved.lane;
          currentlyRenderingFiber$1.lanes = mergeLanes(currentlyRenderingFiber$1.lanes, interleavedLane);
          markSkippedUpdateLanes(interleavedLane);
          interleaved = interleaved.next;
        } while (interleaved !== lastInterleaved);
      } else if (baseQueue === null) {
        queue.lanes = NoLanes;
      }
      var dispatch = queue.dispatch;
      return [hook.memoizedState, dispatch];
    }
    function rerenderReducer(reducer, initialArg, init) {
      var hook = updateWorkInProgressHook();
      var queue = hook.queue;
      if (queue === null) {
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      }
      queue.lastRenderedReducer = reducer;
      var dispatch = queue.dispatch;
      var lastRenderPhaseUpdate = queue.pending;
      var newState = hook.memoizedState;
      if (lastRenderPhaseUpdate !== null) {
        queue.pending = null;
        var firstRenderPhaseUpdate = lastRenderPhaseUpdate.next;
        var update = firstRenderPhaseUpdate;
        do {
          var action = update.action;
          newState = reducer(newState, action);
          update = update.next;
        } while (update !== firstRenderPhaseUpdate);
        if (!objectIs(newState, hook.memoizedState)) {
          markWorkInProgressReceivedUpdate();
        }
        hook.memoizedState = newState;
        if (hook.baseQueue === null) {
          hook.baseState = newState;
        }
        queue.lastRenderedState = newState;
      }
      return [newState, dispatch];
    }
    function mountMutableSource(source, getSnapshot, subscribe) {
      {
        return void 0;
      }
    }
    function updateMutableSource(source, getSnapshot, subscribe) {
      {
        return void 0;
      }
    }
    function mountSyncExternalStore(subscribe, getSnapshot, getServerSnapshot) {
      var fiber = currentlyRenderingFiber$1;
      var hook = mountWorkInProgressHook();
      var nextSnapshot;
      var isHydrating2 = getIsHydrating();
      if (isHydrating2) {
        if (getServerSnapshot === void 0) {
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        }
        nextSnapshot = getServerSnapshot();
        {
          if (!didWarnUncachedGetSnapshot) {
            if (nextSnapshot !== getServerSnapshot()) {
              error2("The result of getServerSnapshot should be cached to avoid an infinite loop");
              didWarnUncachedGetSnapshot = true;
            }
          }
        }
      } else {
        nextSnapshot = getSnapshot();
        {
          if (!didWarnUncachedGetSnapshot) {
            var cachedSnapshot = getSnapshot();
            if (!objectIs(nextSnapshot, cachedSnapshot)) {
              error2("The result of getSnapshot should be cached to avoid an infinite loop");
              didWarnUncachedGetSnapshot = true;
            }
          }
        }
        var root = getWorkInProgressRoot();
        if (root === null) {
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        }
        if (!includesBlockingLane(root, renderLanes)) {
          pushStoreConsistencyCheck(fiber, getSnapshot, nextSnapshot);
        }
      }
      hook.memoizedState = nextSnapshot;
      var inst = {
        value: nextSnapshot,
        getSnapshot
      };
      hook.queue = inst;
      mountEffect(subscribeToStore.bind(null, fiber, inst, subscribe), [subscribe]);
      fiber.flags |= Passive;
      pushEffect(HasEffect | Passive$1, updateStoreInstance.bind(null, fiber, inst, nextSnapshot, getSnapshot), void 0, null);
      return nextSnapshot;
    }
    function updateSyncExternalStore(subscribe, getSnapshot, getServerSnapshot) {
      var fiber = currentlyRenderingFiber$1;
      var hook = updateWorkInProgressHook();
      var nextSnapshot = getSnapshot();
      {
        if (!didWarnUncachedGetSnapshot) {
          var cachedSnapshot = getSnapshot();
          if (!objectIs(nextSnapshot, cachedSnapshot)) {
            error2("The result of getSnapshot should be cached to avoid an infinite loop");
            didWarnUncachedGetSnapshot = true;
          }
        }
      }
      var prevSnapshot = hook.memoizedState;
      var snapshotChanged = !objectIs(prevSnapshot, nextSnapshot);
      if (snapshotChanged) {
        hook.memoizedState = nextSnapshot;
        markWorkInProgressReceivedUpdate();
      }
      var inst = hook.queue;
      updateEffect(subscribeToStore.bind(null, fiber, inst, subscribe), [subscribe]);
      if (inst.getSnapshot !== getSnapshot || snapshotChanged || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      workInProgressHook !== null && workInProgressHook.memoizedState.tag & HasEffect) {
        fiber.flags |= Passive;
        pushEffect(HasEffect | Passive$1, updateStoreInstance.bind(null, fiber, inst, nextSnapshot, getSnapshot), void 0, null);
        var root = getWorkInProgressRoot();
        if (root === null) {
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        }
        if (!includesBlockingLane(root, renderLanes)) {
          pushStoreConsistencyCheck(fiber, getSnapshot, nextSnapshot);
        }
      }
      return nextSnapshot;
    }
    function pushStoreConsistencyCheck(fiber, getSnapshot, renderedSnapshot) {
      fiber.flags |= StoreConsistency;
      var check = {
        getSnapshot,
        value: renderedSnapshot
      };
      var componentUpdateQueue = currentlyRenderingFiber$1.updateQueue;
      if (componentUpdateQueue === null) {
        componentUpdateQueue = createFunctionComponentUpdateQueue();
        currentlyRenderingFiber$1.updateQueue = componentUpdateQueue;
        componentUpdateQueue.stores = [check];
      } else {
        var stores = componentUpdateQueue.stores;
        if (stores === null) {
          componentUpdateQueue.stores = [check];
        } else {
          stores.push(check);
        }
      }
    }
    function updateStoreInstance(fiber, inst, nextSnapshot, getSnapshot) {
      inst.value = nextSnapshot;
      inst.getSnapshot = getSnapshot;
      if (checkIfSnapshotChanged(inst)) {
        forceStoreRerender(fiber);
      }
    }
    function subscribeToStore(fiber, inst, subscribe) {
      var handleStoreChange = function() {
        if (checkIfSnapshotChanged(inst)) {
          forceStoreRerender(fiber);
        }
      };
      return subscribe(handleStoreChange);
    }
    function checkIfSnapshotChanged(inst) {
      var latestGetSnapshot = inst.getSnapshot;
      var prevValue = inst.value;
      try {
        var nextValue = latestGetSnapshot();
        return !objectIs(prevValue, nextValue);
      } catch (error3) {
        return true;
      }
    }
    function forceStoreRerender(fiber) {
      scheduleUpdateOnFiber(fiber, SyncLane, NoTimestamp);
    }
    function mountState(initialState) {
      var hook = mountWorkInProgressHook();
      if (typeof initialState === "function") {
        initialState = initialState();
      }
      hook.memoizedState = hook.baseState = initialState;
      var queue = {
        pending: null,
        interleaved: null,
        lanes: NoLanes,
        dispatch: null,
        lastRenderedReducer: basicStateReducer,
        lastRenderedState: initialState
      };
      hook.queue = queue;
      var dispatch = queue.dispatch = dispatchSetState.bind(null, currentlyRenderingFiber$1, queue);
      return [hook.memoizedState, dispatch];
    }
    function updateState(initialState) {
      return updateReducer(basicStateReducer);
    }
    function rerenderState(initialState) {
      return rerenderReducer(basicStateReducer);
    }
    function pushEffect(tag, create2, destroy, deps) {
      var effect = {
        tag,
        create: create2,
        destroy,
        deps,
        // Circular
        next: null
      };
      var componentUpdateQueue = currentlyRenderingFiber$1.updateQueue;
      if (componentUpdateQueue === null) {
        componentUpdateQueue = createFunctionComponentUpdateQueue();
        currentlyRenderingFiber$1.updateQueue = componentUpdateQueue;
        componentUpdateQueue.lastEffect = effect.next = effect;
      } else {
        var lastEffect = componentUpdateQueue.lastEffect;
        if (lastEffect === null) {
          componentUpdateQueue.lastEffect = effect.next = effect;
        } else {
          var firstEffect = lastEffect.next;
          lastEffect.next = effect;
          effect.next = firstEffect;
          componentUpdateQueue.lastEffect = effect;
        }
      }
      return effect;
    }
    function mountRef(initialValue) {
      var hook = mountWorkInProgressHook();
      {
        var _ref2 = {
          current: initialValue
        };
        hook.memoizedState = _ref2;
        return _ref2;
      }
    }
    function updateRef(initialValue) {
      var hook = updateWorkInProgressHook();
      return hook.memoizedState;
    }
    function mountEffectImpl(fiberFlags, hookFlags, create2, deps) {
      var hook = mountWorkInProgressHook();
      var nextDeps = deps === void 0 ? null : deps;
      currentlyRenderingFiber$1.flags |= fiberFlags;
      hook.memoizedState = pushEffect(HasEffect | hookFlags, create2, void 0, nextDeps);
    }
    function updateEffectImpl(fiberFlags, hookFlags, create2, deps) {
      var hook = updateWorkInProgressHook();
      var nextDeps = deps === void 0 ? null : deps;
      var destroy = void 0;
      if (currentHook !== null) {
        var prevEffect = currentHook.memoizedState;
        destroy = prevEffect.destroy;
        if (nextDeps !== null) {
          var prevDeps = prevEffect.deps;
          if (areHookInputsEqual(nextDeps, prevDeps)) {
            hook.memoizedState = pushEffect(hookFlags, create2, destroy, nextDeps);
            return;
          }
        }
      }
      currentlyRenderingFiber$1.flags |= fiberFlags;
      hook.memoizedState = pushEffect(HasEffect | hookFlags, create2, destroy, nextDeps);
    }
    function mountEffect(create2, deps) {
      if ((currentlyRenderingFiber$1.mode & StrictEffectsMode) !== NoMode) {
        return mountEffectImpl(MountPassiveDev | Passive | PassiveStatic, Passive$1, create2, deps);
      } else {
        return mountEffectImpl(Passive | PassiveStatic, Passive$1, create2, deps);
      }
    }
    function updateEffect(create2, deps) {
      return updateEffectImpl(Passive, Passive$1, create2, deps);
    }
    function mountInsertionEffect(create2, deps) {
      return mountEffectImpl(Update, Insertion, create2, deps);
    }
    function updateInsertionEffect(create2, deps) {
      return updateEffectImpl(Update, Insertion, create2, deps);
    }
    function mountLayoutEffect(create2, deps) {
      var fiberFlags = Update;
      {
        fiberFlags |= LayoutStatic;
      }
      if ((currentlyRenderingFiber$1.mode & StrictEffectsMode) !== NoMode) {
        fiberFlags |= MountLayoutDev;
      }
      return mountEffectImpl(fiberFlags, Layout, create2, deps);
    }
    function updateLayoutEffect(create2, deps) {
      return updateEffectImpl(Update, Layout, create2, deps);
    }
    function imperativeHandleEffect(create2, ref) {
      if (typeof ref === "function") {
        var refCallback = ref;
        var _inst = create2();
        refCallback(_inst);
        return function() {
          refCallback(null);
        };
      } else if (ref !== null && ref !== void 0) {
        var refObject = ref;
        {
          if (!refObject.hasOwnProperty("current")) {
            error2("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(refObject).join(", ") + "}");
          }
        }
        var _inst2 = create2();
        refObject.current = _inst2;
        return function() {
          refObject.current = null;
        };
      }
    }
    function mountImperativeHandle(ref, create2, deps) {
      {
        if (typeof create2 !== "function") {
          error2("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", create2 !== null ? typeof create2 : "null");
        }
      }
      var effectDeps = deps !== null && deps !== void 0 ? deps.concat([ref]) : null;
      var fiberFlags = Update;
      {
        fiberFlags |= LayoutStatic;
      }
      if ((currentlyRenderingFiber$1.mode & StrictEffectsMode) !== NoMode) {
        fiberFlags |= MountLayoutDev;
      }
      return mountEffectImpl(fiberFlags, Layout, imperativeHandleEffect.bind(null, create2, ref), effectDeps);
    }
    function updateImperativeHandle(ref, create2, deps) {
      {
        if (typeof create2 !== "function") {
          error2("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", create2 !== null ? typeof create2 : "null");
        }
      }
      var effectDeps = deps !== null && deps !== void 0 ? deps.concat([ref]) : null;
      return updateEffectImpl(Update, Layout, imperativeHandleEffect.bind(null, create2, ref), effectDeps);
    }
    function mountDebugValue(value, formatterFn) {
    }
    var updateDebugValue = mountDebugValue;
    function mountCallback(callback, deps) {
      var hook = mountWorkInProgressHook();
      var nextDeps = deps === void 0 ? null : deps;
      hook.memoizedState = [callback, nextDeps];
      return callback;
    }
    function updateCallback(callback, deps) {
      var hook = updateWorkInProgressHook();
      var nextDeps = deps === void 0 ? null : deps;
      var prevState = hook.memoizedState;
      if (prevState !== null) {
        if (nextDeps !== null) {
          var prevDeps = prevState[1];
          if (areHookInputsEqual(nextDeps, prevDeps)) {
            return prevState[0];
          }
        }
      }
      hook.memoizedState = [callback, nextDeps];
      return callback;
    }
    function mountMemo(nextCreate, deps) {
      var hook = mountWorkInProgressHook();
      var nextDeps = deps === void 0 ? null : deps;
      var nextValue = nextCreate();
      hook.memoizedState = [nextValue, nextDeps];
      return nextValue;
    }
    function updateMemo(nextCreate, deps) {
      var hook = updateWorkInProgressHook();
      var nextDeps = deps === void 0 ? null : deps;
      var prevState = hook.memoizedState;
      if (prevState !== null) {
        if (nextDeps !== null) {
          var prevDeps = prevState[1];
          if (areHookInputsEqual(nextDeps, prevDeps)) {
            return prevState[0];
          }
        }
      }
      var nextValue = nextCreate();
      hook.memoizedState = [nextValue, nextDeps];
      return nextValue;
    }
    function mountDeferredValue(value) {
      var _mountState = mountState(value), prevValue = _mountState[0], setValue = _mountState[1];
      mountEffect(function() {
        var prevTransition = ReactCurrentBatchConfig$1.transition;
        ReactCurrentBatchConfig$1.transition = {};
        try {
          setValue(value);
        } finally {
          ReactCurrentBatchConfig$1.transition = prevTransition;
        }
      }, [value]);
      return prevValue;
    }
    function updateDeferredValue(value) {
      var _updateState = updateState(), prevValue = _updateState[0], setValue = _updateState[1];
      updateEffect(function() {
        var prevTransition = ReactCurrentBatchConfig$1.transition;
        ReactCurrentBatchConfig$1.transition = {};
        try {
          setValue(value);
        } finally {
          ReactCurrentBatchConfig$1.transition = prevTransition;
        }
      }, [value]);
      return prevValue;
    }
    function rerenderDeferredValue(value) {
      var _rerenderState = rerenderState(), prevValue = _rerenderState[0], setValue = _rerenderState[1];
      updateEffect(function() {
        var prevTransition = ReactCurrentBatchConfig$1.transition;
        ReactCurrentBatchConfig$1.transition = {};
        try {
          setValue(value);
        } finally {
          ReactCurrentBatchConfig$1.transition = prevTransition;
        }
      }, [value]);
      return prevValue;
    }
    function startTransition(setPending, callback, options) {
      var previousPriority = getCurrentUpdatePriority();
      setCurrentUpdatePriority(higherEventPriority(previousPriority, ContinuousEventPriority));
      setPending(true);
      var prevTransition = ReactCurrentBatchConfig$1.transition;
      ReactCurrentBatchConfig$1.transition = {};
      var currentTransition = ReactCurrentBatchConfig$1.transition;
      {
        ReactCurrentBatchConfig$1.transition._updatedFibers = /* @__PURE__ */ new Set();
      }
      try {
        setPending(false);
        callback();
      } finally {
        setCurrentUpdatePriority(previousPriority);
        ReactCurrentBatchConfig$1.transition = prevTransition;
        {
          if (prevTransition === null && currentTransition._updatedFibers) {
            var updatedFibersCount = currentTransition._updatedFibers.size;
            if (updatedFibersCount > 10) {
              warn("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table.");
            }
            currentTransition._updatedFibers.clear();
          }
        }
      }
    }
    function mountTransition() {
      var _mountState2 = mountState(false), isPending = _mountState2[0], setPending = _mountState2[1];
      var start = startTransition.bind(null, setPending);
      var hook = mountWorkInProgressHook();
      hook.memoizedState = start;
      return [isPending, start];
    }
    function updateTransition() {
      var _updateState2 = updateState(), isPending = _updateState2[0];
      var hook = updateWorkInProgressHook();
      var start = hook.memoizedState;
      return [isPending, start];
    }
    function rerenderTransition() {
      var _rerenderState2 = rerenderState(), isPending = _rerenderState2[0];
      var hook = updateWorkInProgressHook();
      var start = hook.memoizedState;
      return [isPending, start];
    }
    var isUpdatingOpaqueValueInRenderPhase = false;
    function getIsUpdatingOpaqueValueInRenderPhaseInDEV() {
      {
        return isUpdatingOpaqueValueInRenderPhase;
      }
    }
    function mountId() {
      var hook = mountWorkInProgressHook();
      var root = getWorkInProgressRoot();
      var identifierPrefix = root.identifierPrefix;
      var id;
      if (getIsHydrating()) {
        var treeId = getTreeId();
        id = ":" + identifierPrefix + "R" + treeId;
        var localId = localIdCounter++;
        if (localId > 0) {
          id += "H" + localId.toString(32);
        }
        id += ":";
      } else {
        var globalClientId = globalClientIdCounter++;
        id = ":" + identifierPrefix + "r" + globalClientId.toString(32) + ":";
      }
      hook.memoizedState = id;
      return id;
    }
    function updateId() {
      var hook = updateWorkInProgressHook();
      var id = hook.memoizedState;
      return id;
    }
    function dispatchReducerAction(fiber, queue, action) {
      {
        if (typeof arguments[3] === "function") {
          error2("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
        }
      }
      var lane = requestUpdateLane(fiber);
      var update = {
        lane,
        action,
        hasEagerState: false,
        eagerState: null,
        next: null
      };
      if (isRenderPhaseUpdate(fiber)) {
        enqueueRenderPhaseUpdate(queue, update);
      } else {
        enqueueUpdate$1(fiber, queue, update);
        var eventTime = requestEventTime();
        var root = scheduleUpdateOnFiber(fiber, lane, eventTime);
        if (root !== null) {
          entangleTransitionUpdate(root, queue, lane);
        }
      }
      markUpdateInDevTools(fiber, lane);
    }
    function dispatchSetState(fiber, queue, action) {
      {
        if (typeof arguments[3] === "function") {
          error2("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
        }
      }
      var lane = requestUpdateLane(fiber);
      var update = {
        lane,
        action,
        hasEagerState: false,
        eagerState: null,
        next: null
      };
      if (isRenderPhaseUpdate(fiber)) {
        enqueueRenderPhaseUpdate(queue, update);
      } else {
        enqueueUpdate$1(fiber, queue, update);
        var alternate = fiber.alternate;
        if (fiber.lanes === NoLanes && (alternate === null || alternate.lanes === NoLanes)) {
          var lastRenderedReducer = queue.lastRenderedReducer;
          if (lastRenderedReducer !== null) {
            var prevDispatcher;
            {
              prevDispatcher = ReactCurrentDispatcher$1.current;
              ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnUpdateInDEV;
            }
            try {
              var currentState = queue.lastRenderedState;
              var eagerState = lastRenderedReducer(currentState, action);
              update.hasEagerState = true;
              update.eagerState = eagerState;
              if (objectIs(eagerState, currentState)) {
                return;
              }
            } catch (error3) {
            } finally {
              {
                ReactCurrentDispatcher$1.current = prevDispatcher;
              }
            }
          }
        }
        var eventTime = requestEventTime();
        var root = scheduleUpdateOnFiber(fiber, lane, eventTime);
        if (root !== null) {
          entangleTransitionUpdate(root, queue, lane);
        }
      }
      markUpdateInDevTools(fiber, lane);
    }
    function isRenderPhaseUpdate(fiber) {
      var alternate = fiber.alternate;
      return fiber === currentlyRenderingFiber$1 || alternate !== null && alternate === currentlyRenderingFiber$1;
    }
    function enqueueRenderPhaseUpdate(queue, update) {
      didScheduleRenderPhaseUpdateDuringThisPass = didScheduleRenderPhaseUpdate = true;
      var pending = queue.pending;
      if (pending === null) {
        update.next = update;
      } else {
        update.next = pending.next;
        pending.next = update;
      }
      queue.pending = update;
    }
    function enqueueUpdate$1(fiber, queue, update, lane) {
      if (isInterleavedUpdate(fiber)) {
        var interleaved = queue.interleaved;
        if (interleaved === null) {
          update.next = update;
          pushInterleavedQueue(queue);
        } else {
          update.next = interleaved.next;
          interleaved.next = update;
        }
        queue.interleaved = update;
      } else {
        var pending = queue.pending;
        if (pending === null) {
          update.next = update;
        } else {
          update.next = pending.next;
          pending.next = update;
        }
        queue.pending = update;
      }
    }
    function entangleTransitionUpdate(root, queue, lane) {
      if (isTransitionLane(lane)) {
        var queueLanes = queue.lanes;
        queueLanes = intersectLanes(queueLanes, root.pendingLanes);
        var newQueueLanes = mergeLanes(queueLanes, lane);
        queue.lanes = newQueueLanes;
        markRootEntangled(root, newQueueLanes);
      }
    }
    function markUpdateInDevTools(fiber, lane, action) {
      {
        markStateUpdateScheduled(fiber, lane);
      }
    }
    var ContextOnlyDispatcher = {
      readContext,
      useCallback: throwInvalidHookError,
      useContext: throwInvalidHookError,
      useEffect: throwInvalidHookError,
      useImperativeHandle: throwInvalidHookError,
      useInsertionEffect: throwInvalidHookError,
      useLayoutEffect: throwInvalidHookError,
      useMemo: throwInvalidHookError,
      useReducer: throwInvalidHookError,
      useRef: throwInvalidHookError,
      useState: throwInvalidHookError,
      useDebugValue: throwInvalidHookError,
      useDeferredValue: throwInvalidHookError,
      useTransition: throwInvalidHookError,
      useMutableSource: throwInvalidHookError,
      useSyncExternalStore: throwInvalidHookError,
      useId: throwInvalidHookError,
      unstable_isNewReconciler: enableNewReconciler
    };
    var HooksDispatcherOnMountInDEV = null;
    var HooksDispatcherOnMountWithHookTypesInDEV = null;
    var HooksDispatcherOnUpdateInDEV = null;
    var HooksDispatcherOnRerenderInDEV = null;
    var InvalidNestedHooksDispatcherOnMountInDEV = null;
    var InvalidNestedHooksDispatcherOnUpdateInDEV = null;
    var InvalidNestedHooksDispatcherOnRerenderInDEV = null;
    {
      var warnInvalidContextAccess = function() {
        error2("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      };
      var warnInvalidHookAccess = function() {
        error2("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      HooksDispatcherOnMountInDEV = {
        readContext: function(context2) {
          return readContext(context2);
        },
        useCallback: function(callback, deps) {
          currentHookNameInDev = "useCallback";
          mountHookTypesDev();
          checkDepsAreArrayDev(deps);
          return mountCallback(callback, deps);
        },
        useContext: function(context2) {
          currentHookNameInDev = "useContext";
          mountHookTypesDev();
          return readContext(context2);
        },
        useEffect: function(create2, deps) {
          currentHookNameInDev = "useEffect";
          mountHookTypesDev();
          checkDepsAreArrayDev(deps);
          return mountEffect(create2, deps);
        },
        useImperativeHandle: function(ref, create2, deps) {
          currentHookNameInDev = "useImperativeHandle";
          mountHookTypesDev();
          checkDepsAreArrayDev(deps);
          return mountImperativeHandle(ref, create2, deps);
        },
        useInsertionEffect: function(create2, deps) {
          currentHookNameInDev = "useInsertionEffect";
          mountHookTypesDev();
          checkDepsAreArrayDev(deps);
          return mountInsertionEffect(create2, deps);
        },
        useLayoutEffect: function(create2, deps) {
          currentHookNameInDev = "useLayoutEffect";
          mountHookTypesDev();
          checkDepsAreArrayDev(deps);
          return mountLayoutEffect(create2, deps);
        },
        useMemo: function(create2, deps) {
          currentHookNameInDev = "useMemo";
          mountHookTypesDev();
          checkDepsAreArrayDev(deps);
          var prevDispatcher = ReactCurrentDispatcher$1.current;
          ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnMountInDEV;
          try {
            return mountMemo(create2, deps);
          } finally {
            ReactCurrentDispatcher$1.current = prevDispatcher;
          }
        },
        useReducer: function(reducer, initialArg, init) {
          currentHookNameInDev = "useReducer";
          mountHookTypesDev();
          var prevDispatcher = ReactCurrentDispatcher$1.current;
          ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnMountInDEV;
          try {
            return mountReducer(reducer, initialArg, init);
          } finally {
            ReactCurrentDispatcher$1.current = prevDispatcher;
          }
        },
        useRef: function(initialValue) {
          currentHookNameInDev = "useRef";
          mountHookTypesDev();
          return mountRef(initialValue);
        },
        useState: function(initialState) {
          currentHookNameInDev = "useState";
          mountHookTypesDev();
          var prevDispatcher = ReactCurrentDispatcher$1.current;
          ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnMountInDEV;
          try {
            return mountState(initialState);
          } finally {
            ReactCurrentDispatcher$1.current = prevDispatcher;
          }
        },
        useDebugValue: function(value, formatterFn) {
          currentHookNameInDev = "useDebugValue";
          mountHookTypesDev();
          return mountDebugValue();
        },
        useDeferredValue: function(value) {
          currentHookNameInDev = "useDeferredValue";
          mountHookTypesDev();
          return mountDeferredValue(value);
        },
        useTransition: function() {
          currentHookNameInDev = "useTransition";
          mountHookTypesDev();
          return mountTransition();
        },
        useMutableSource: function(source, getSnapshot, subscribe) {
          currentHookNameInDev = "useMutableSource";
          mountHookTypesDev();
          return mountMutableSource();
        },
        useSyncExternalStore: function(subscribe, getSnapshot, getServerSnapshot) {
          currentHookNameInDev = "useSyncExternalStore";
          mountHookTypesDev();
          return mountSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
        },
        useId: function() {
          currentHookNameInDev = "useId";
          mountHookTypesDev();
          return mountId();
        },
        unstable_isNewReconciler: enableNewReconciler
      };
      HooksDispatcherOnMountWithHookTypesInDEV = {
        readContext: function(context2) {
          return readContext(context2);
        },
        useCallback: function(callback, deps) {
          currentHookNameInDev = "useCallback";
          updateHookTypesDev();
          return mountCallback(callback, deps);
        },
        useContext: function(context2) {
          currentHookNameInDev = "useContext";
          updateHookTypesDev();
          return readContext(context2);
        },
        useEffect: function(create2, deps) {
          currentHookNameInDev = "useEffect";
          updateHookTypesDev();
          return mountEffect(create2, deps);
        },
        useImperativeHandle: function(ref, create2, deps) {
          currentHookNameInDev = "useImperativeHandle";
          updateHookTypesDev();
          return mountImperativeHandle(ref, create2, deps);
        },
        useInsertionEffect: function(create2, deps) {
          currentHookNameInDev = "useInsertionEffect";
          updateHookTypesDev();
          return mountInsertionEffect(create2, deps);
        },
        useLayoutEffect: function(create2, deps) {
          currentHookNameInDev = "useLayoutEffect";
          updateHookTypesDev();
          return mountLayoutEffect(create2, deps);
        },
        useMemo: function(create2, deps) {
          currentHookNameInDev = "useMemo";
          updateHookTypesDev();
          var prevDispatcher = ReactCurrentDispatcher$1.current;
          ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnMountInDEV;
          try {
            return mountMemo(create2, deps);
          } finally {
            ReactCurrentDispatcher$1.current = prevDispatcher;
          }
        },
        useReducer: function(reducer, initialArg, init) {
          currentHookNameInDev = "useReducer";
          updateHookTypesDev();
          var prevDispatcher = ReactCurrentDispatcher$1.current;
          ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnMountInDEV;
          try {
            return mountReducer(reducer, initialArg, init);
          } finally {
            ReactCurrentDispatcher$1.current = prevDispatcher;
          }
        },
        useRef: function(initialValue) {
          currentHookNameInDev = "useRef";
          updateHookTypesDev();
          return mountRef(initialValue);
        },
        useState: function(initialState) {
          currentHookNameInDev = "useState";
          updateHookTypesDev();
          var prevDispatcher = ReactCurrentDispatcher$1.current;
          ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnMountInDEV;
          try {
            return mountState(initialState);
          } finally {
            ReactCurrentDispatcher$1.current = prevDispatcher;
          }
        },
        useDebugValue: function(value, formatterFn) {
          currentHookNameInDev = "useDebugValue";
          updateHookTypesDev();
          return mountDebugValue();
        },
        useDeferredValue: function(value) {
          currentHookNameInDev = "useDeferredValue";
          updateHookTypesDev();
          return mountDeferredValue(value);
        },
        useTransition: function() {
          currentHookNameInDev = "useTransition";
          updateHookTypesDev();
          return mountTransition();
        },
        useMutableSource: function(source, getSnapshot, subscribe) {
          currentHookNameInDev = "useMutableSource";
          updateHookTypesDev();
          return mountMutableSource();
        },
        useSyncExternalStore: function(subscribe, getSnapshot, getServerSnapshot) {
          currentHookNameInDev = "useSyncExternalStore";
          updateHookTypesDev();
          return mountSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
        },
        useId: function() {
          currentHookNameInDev = "useId";
          updateHookTypesDev();
          return mountId();
        },
        unstable_isNewReconciler: enableNewReconciler
      };
      HooksDispatcherOnUpdateInDEV = {
        readContext: function(context2) {
          return readContext(context2);
        },
        useCallback: function(callback, deps) {
          currentHookNameInDev = "useCallback";
          updateHookTypesDev();
          return updateCallback(callback, deps);
        },
        useContext: function(context2) {
          currentHookNameInDev = "useContext";
          updateHookTypesDev();
          return readContext(context2);
        },
        useEffect: function(create2, deps) {
          currentHookNameInDev = "useEffect";
          updateHookTypesDev();
          return updateEffect(create2, deps);
        },
        useImperativeHandle: function(ref, create2, deps) {
          currentHookNameInDev = "useImperativeHandle";
          updateHookTypesDev();
          return updateImperativeHandle(ref, create2, deps);
        },
        useInsertionEffect: function(create2, deps) {
          currentHookNameInDev = "useInsertionEffect";
          updateHookTypesDev();
          return updateInsertionEffect(create2, deps);
        },
        useLayoutEffect: function(create2, deps) {
          currentHookNameInDev = "useLayoutEffect";
          updateHookTypesDev();
          return updateLayoutEffect(create2, deps);
        },
        useMemo: function(create2, deps) {
          currentHookNameInDev = "useMemo";
          updateHookTypesDev();
          var prevDispatcher = ReactCurrentDispatcher$1.current;
          ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnUpdateInDEV;
          try {
            return updateMemo(create2, deps);
          } finally {
            ReactCurrentDispatcher$1.current = prevDispatcher;
          }
        },
        useReducer: function(reducer, initialArg, init) {
          currentHookNameInDev = "useReducer";
          updateHookTypesDev();
          var prevDispatcher = ReactCurrentDispatcher$1.current;
          ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnUpdateInDEV;
          try {
            return updateReducer(reducer, initialArg, init);
          } finally {
            ReactCurrentDispatcher$1.current = prevDispatcher;
          }
        },
        useRef: function(initialValue) {
          currentHookNameInDev = "useRef";
          updateHookTypesDev();
          return updateRef();
        },
        useState: function(initialState) {
          currentHookNameInDev = "useState";
          updateHookTypesDev();
          var prevDispatcher = ReactCurrentDispatcher$1.current;
          ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnUpdateInDEV;
          try {
            return updateState(initialState);
          } finally {
            ReactCurrentDispatcher$1.current = prevDispatcher;
          }
        },
        useDebugValue: function(value, formatterFn) {
          currentHookNameInDev = "useDebugValue";
          updateHookTypesDev();
          return updateDebugValue();
        },
        useDeferredValue: function(value) {
          currentHookNameInDev = "useDeferredValue";
          updateHookTypesDev();
          return updateDeferredValue(value);
        },
        useTransition: function() {
          currentHookNameInDev = "useTransition";
          updateHookTypesDev();
          return updateTransition();
        },
        useMutableSource: function(source, getSnapshot, subscribe) {
          currentHookNameInDev = "useMutableSource";
          updateHookTypesDev();
          return updateMutableSource();
        },
        useSyncExternalStore: function(subscribe, getSnapshot, getServerSnapshot) {
          currentHookNameInDev = "useSyncExternalStore";
          updateHookTypesDev();
          return updateSyncExternalStore(subscribe, getSnapshot);
        },
        useId: function() {
          currentHookNameInDev = "useId";
          updateHookTypesDev();
          return updateId();
        },
        unstable_isNewReconciler: enableNewReconciler
      };
      HooksDispatcherOnRerenderInDEV = {
        readContext: function(context2) {
          return readContext(context2);
        },
        useCallback: function(callback, deps) {
          currentHookNameInDev = "useCallback";
          updateHookTypesDev();
          return updateCallback(callback, deps);
        },
        useContext: function(context2) {
          currentHookNameInDev = "useContext";
          updateHookTypesDev();
          return readContext(context2);
        },
        useEffect: function(create2, deps) {
          currentHookNameInDev = "useEffect";
          updateHookTypesDev();
          return updateEffect(create2, deps);
        },
        useImperativeHandle: function(ref, create2, deps) {
          currentHookNameInDev = "useImperativeHandle";
          updateHookTypesDev();
          return updateImperativeHandle(ref, create2, deps);
        },
        useInsertionEffect: function(create2, deps) {
          currentHookNameInDev = "useInsertionEffect";
          updateHookTypesDev();
          return updateInsertionEffect(create2, deps);
        },
        useLayoutEffect: function(create2, deps) {
          currentHookNameInDev = "useLayoutEffect";
          updateHookTypesDev();
          return updateLayoutEffect(create2, deps);
        },
        useMemo: function(create2, deps) {
          currentHookNameInDev = "useMemo";
          updateHookTypesDev();
          var prevDispatcher = ReactCurrentDispatcher$1.current;
          ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnRerenderInDEV;
          try {
            return updateMemo(create2, deps);
          } finally {
            ReactCurrentDispatcher$1.current = prevDispatcher;
          }
        },
        useReducer: function(reducer, initialArg, init) {
          currentHookNameInDev = "useReducer";
          updateHookTypesDev();
          var prevDispatcher = ReactCurrentDispatcher$1.current;
          ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnRerenderInDEV;
          try {
            return rerenderReducer(reducer, initialArg, init);
          } finally {
            ReactCurrentDispatcher$1.current = prevDispatcher;
          }
        },
        useRef: function(initialValue) {
          currentHookNameInDev = "useRef";
          updateHookTypesDev();
          return updateRef();
        },
        useState: function(initialState) {
          currentHookNameInDev = "useState";
          updateHookTypesDev();
          var prevDispatcher = ReactCurrentDispatcher$1.current;
          ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnRerenderInDEV;
          try {
            return rerenderState(initialState);
          } finally {
            ReactCurrentDispatcher$1.current = prevDispatcher;
          }
        },
        useDebugValue: function(value, formatterFn) {
          currentHookNameInDev = "useDebugValue";
          updateHookTypesDev();
          return updateDebugValue();
        },
        useDeferredValue: function(value) {
          currentHookNameInDev = "useDeferredValue";
          updateHookTypesDev();
          return rerenderDeferredValue(value);
        },
        useTransition: function() {
          currentHookNameInDev = "useTransition";
          updateHookTypesDev();
          return rerenderTransition();
        },
        useMutableSource: function(source, getSnapshot, subscribe) {
          currentHookNameInDev = "useMutableSource";
          updateHookTypesDev();
          return updateMutableSource();
        },
        useSyncExternalStore: function(subscribe, getSnapshot, getServerSnapshot) {
          currentHookNameInDev = "useSyncExternalStore";
          updateHookTypesDev();
          return updateSyncExternalStore(subscribe, getSnapshot);
        },
        useId: function() {
          currentHookNameInDev = "useId";
          updateHookTypesDev();
          return updateId();
        },
        unstable_isNewReconciler: enableNewReconciler
      };
      InvalidNestedHooksDispatcherOnMountInDEV = {
        readContext: function(context2) {
          warnInvalidContextAccess();
          return readContext(context2);
        },
        useCallback: function(callback, deps) {
          currentHookNameInDev = "useCallback";
          warnInvalidHookAccess();
          mountHookTypesDev();
          return mountCallback(callback, deps);
        },
        useContext: function(context2) {
          currentHookNameInDev = "useContext";
          warnInvalidHookAccess();
          mountHookTypesDev();
          return readContext(context2);
        },
        useEffect: function(create2, deps) {
          currentHookNameInDev = "useEffect";
          warnInvalidHookAccess();
          mountHookTypesDev();
          return mountEffect(create2, deps);
        },
        useImperativeHandle: function(ref, create2, deps) {
          currentHookNameInDev = "useImperativeHandle";
          warnInvalidHookAccess();
          mountHookTypesDev();
          return mountImperativeHandle(ref, create2, deps);
        },
        useInsertionEffect: function(create2, deps) {
          currentHookNameInDev = "useInsertionEffect";
          warnInvalidHookAccess();
          mountHookTypesDev();
          return mountInsertionEffect(create2, deps);
        },
        useLayoutEffect: function(create2, deps) {
          currentHookNameInDev = "useLayoutEffect";
          warnInvalidHookAccess();
          mountHookTypesDev();
          return mountLayoutEffect(create2, deps);
        },
        useMemo: function(create2, deps) {
          currentHookNameInDev = "useMemo";
          warnInvalidHookAccess();
          mountHookTypesDev();
          var prevDispatcher = ReactCurrentDispatcher$1.current;
          ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnMountInDEV;
          try {
            return mountMemo(create2, deps);
          } finally {
            ReactCurrentDispatcher$1.current = prevDispatcher;
          }
        },
        useReducer: function(reducer, initialArg, init) {
          currentHookNameInDev = "useReducer";
          warnInvalidHookAccess();
          mountHookTypesDev();
          var prevDispatcher = ReactCurrentDispatcher$1.current;
          ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnMountInDEV;
          try {
            return mountReducer(reducer, initialArg, init);
          } finally {
            ReactCurrentDispatcher$1.current = prevDispatcher;
          }
        },
        useRef: function(initialValue) {
          currentHookNameInDev = "useRef";
          warnInvalidHookAccess();
          mountHookTypesDev();
          return mountRef(initialValue);
        },
        useState: function(initialState) {
          currentHookNameInDev = "useState";
          warnInvalidHookAccess();
          mountHookTypesDev();
          var prevDispatcher = ReactCurrentDispatcher$1.current;
          ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnMountInDEV;
          try {
            return mountState(initialState);
          } finally {
            ReactCurrentDispatcher$1.current = prevDispatcher;
          }
        },
        useDebugValue: function(value, formatterFn) {
          currentHookNameInDev = "useDebugValue";
          warnInvalidHookAccess();
          mountHookTypesDev();
          return mountDebugValue();
        },
        useDeferredValue: function(value) {
          currentHookNameInDev = "useDeferredValue";
          warnInvalidHookAccess();
          mountHookTypesDev();
          return mountDeferredValue(value);
        },
        useTransition: function() {
          currentHookNameInDev = "useTransition";
          warnInvalidHookAccess();
          mountHookTypesDev();
          return mountTransition();
        },
        useMutableSource: function(source, getSnapshot, subscribe) {
          currentHookNameInDev = "useMutableSource";
          warnInvalidHookAccess();
          mountHookTypesDev();
          return mountMutableSource();
        },
        useSyncExternalStore: function(subscribe, getSnapshot, getServerSnapshot) {
          currentHookNameInDev = "useSyncExternalStore";
          warnInvalidHookAccess();
          mountHookTypesDev();
          return mountSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
        },
        useId: function() {
          currentHookNameInDev = "useId";
          warnInvalidHookAccess();
          mountHookTypesDev();
          return mountId();
        },
        unstable_isNewReconciler: enableNewReconciler
      };
      InvalidNestedHooksDispatcherOnUpdateInDEV = {
        readContext: function(context2) {
          warnInvalidContextAccess();
          return readContext(context2);
        },
        useCallback: function(callback, deps) {
          currentHookNameInDev = "useCallback";
          warnInvalidHookAccess();
          updateHookTypesDev();
          return updateCallback(callback, deps);
        },
        useContext: function(context2) {
          currentHookNameInDev = "useContext";
          warnInvalidHookAccess();
          updateHookTypesDev();
          return readContext(context2);
        },
        useEffect: function(create2, deps) {
          currentHookNameInDev = "useEffect";
          warnInvalidHookAccess();
          updateHookTypesDev();
          return updateEffect(create2, deps);
        },
        useImperativeHandle: function(ref, create2, deps) {
          currentHookNameInDev = "useImperativeHandle";
          warnInvalidHookAccess();
          updateHookTypesDev();
          return updateImperativeHandle(ref, create2, deps);
        },
        useInsertionEffect: function(create2, deps) {
          currentHookNameInDev = "useInsertionEffect";
          warnInvalidHookAccess();
          updateHookTypesDev();
          return updateInsertionEffect(create2, deps);
        },
        useLayoutEffect: function(create2, deps) {
          currentHookNameInDev = "useLayoutEffect";
          warnInvalidHookAccess();
          updateHookTypesDev();
          return updateLayoutEffect(create2, deps);
        },
        useMemo: function(create2, deps) {
          currentHookNameInDev = "useMemo";
          warnInvalidHookAccess();
          updateHookTypesDev();
          var prevDispatcher = ReactCurrentDispatcher$1.current;
          ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnUpdateInDEV;
          try {
            return updateMemo(create2, deps);
          } finally {
            ReactCurrentDispatcher$1.current = prevDispatcher;
          }
        },
        useReducer: function(reducer, initialArg, init) {
          currentHookNameInDev = "useReducer";
          warnInvalidHookAccess();
          updateHookTypesDev();
          var prevDispatcher = ReactCurrentDispatcher$1.current;
          ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnUpdateInDEV;
          try {
            return updateReducer(reducer, initialArg, init);
          } finally {
            ReactCurrentDispatcher$1.current = prevDispatcher;
          }
        },
        useRef: function(initialValue) {
          currentHookNameInDev = "useRef";
          warnInvalidHookAccess();
          updateHookTypesDev();
          return updateRef();
        },
        useState: function(initialState) {
          currentHookNameInDev = "useState";
          warnInvalidHookAccess();
          updateHookTypesDev();
          var prevDispatcher = ReactCurrentDispatcher$1.current;
          ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnUpdateInDEV;
          try {
            return updateState(initialState);
          } finally {
            ReactCurrentDispatcher$1.current = prevDispatcher;
          }
        },
        useDebugValue: function(value, formatterFn) {
          currentHookNameInDev = "useDebugValue";
          warnInvalidHookAccess();
          updateHookTypesDev();
          return updateDebugValue();
        },
        useDeferredValue: function(value) {
          currentHookNameInDev = "useDeferredValue";
          warnInvalidHookAccess();
          updateHookTypesDev();
          return updateDeferredValue(value);
        },
        useTransition: function() {
          currentHookNameInDev = "useTransition";
          warnInvalidHookAccess();
          updateHookTypesDev();
          return updateTransition();
        },
        useMutableSource: function(source, getSnapshot, subscribe) {
          currentHookNameInDev = "useMutableSource";
          warnInvalidHookAccess();
          updateHookTypesDev();
          return updateMutableSource();
        },
        useSyncExternalStore: function(subscribe, getSnapshot, getServerSnapshot) {
          currentHookNameInDev = "useSyncExternalStore";
          warnInvalidHookAccess();
          updateHookTypesDev();
          return updateSyncExternalStore(subscribe, getSnapshot);
        },
        useId: function() {
          currentHookNameInDev = "useId";
          warnInvalidHookAccess();
          updateHookTypesDev();
          return updateId();
        },
        unstable_isNewReconciler: enableNewReconciler
      };
      InvalidNestedHooksDispatcherOnRerenderInDEV = {
        readContext: function(context2) {
          warnInvalidContextAccess();
          return readContext(context2);
        },
        useCallback: function(callback, deps) {
          currentHookNameInDev = "useCallback";
          warnInvalidHookAccess();
          updateHookTypesDev();
          return updateCallback(callback, deps);
        },
        useContext: function(context2) {
          currentHookNameInDev = "useContext";
          warnInvalidHookAccess();
          updateHookTypesDev();
          return readContext(context2);
        },
        useEffect: function(create2, deps) {
          currentHookNameInDev = "useEffect";
          warnInvalidHookAccess();
          updateHookTypesDev();
          return updateEffect(create2, deps);
        },
        useImperativeHandle: function(ref, create2, deps) {
          currentHookNameInDev = "useImperativeHandle";
          warnInvalidHookAccess();
          updateHookTypesDev();
          return updateImperativeHandle(ref, create2, deps);
        },
        useInsertionEffect: function(create2, deps) {
          currentHookNameInDev = "useInsertionEffect";
          warnInvalidHookAccess();
          updateHookTypesDev();
          return updateInsertionEffect(create2, deps);
        },
        useLayoutEffect: function(create2, deps) {
          currentHookNameInDev = "useLayoutEffect";
          warnInvalidHookAccess();
          updateHookTypesDev();
          return updateLayoutEffect(create2, deps);
        },
        useMemo: function(create2, deps) {
          currentHookNameInDev = "useMemo";
          warnInvalidHookAccess();
          updateHookTypesDev();
          var prevDispatcher = ReactCurrentDispatcher$1.current;
          ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnUpdateInDEV;
          try {
            return updateMemo(create2, deps);
          } finally {
            ReactCurrentDispatcher$1.current = prevDispatcher;
          }
        },
        useReducer: function(reducer, initialArg, init) {
          currentHookNameInDev = "useReducer";
          warnInvalidHookAccess();
          updateHookTypesDev();
          var prevDispatcher = ReactCurrentDispatcher$1.current;
          ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnUpdateInDEV;
          try {
            return rerenderReducer(reducer, initialArg, init);
          } finally {
            ReactCurrentDispatcher$1.current = prevDispatcher;
          }
        },
        useRef: function(initialValue) {
          currentHookNameInDev = "useRef";
          warnInvalidHookAccess();
          updateHookTypesDev();
          return updateRef();
        },
        useState: function(initialState) {
          currentHookNameInDev = "useState";
          warnInvalidHookAccess();
          updateHookTypesDev();
          var prevDispatcher = ReactCurrentDispatcher$1.current;
          ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnUpdateInDEV;
          try {
            return rerenderState(initialState);
          } finally {
            ReactCurrentDispatcher$1.current = prevDispatcher;
          }
        },
        useDebugValue: function(value, formatterFn) {
          currentHookNameInDev = "useDebugValue";
          warnInvalidHookAccess();
          updateHookTypesDev();
          return updateDebugValue();
        },
        useDeferredValue: function(value) {
          currentHookNameInDev = "useDeferredValue";
          warnInvalidHookAccess();
          updateHookTypesDev();
          return rerenderDeferredValue(value);
        },
        useTransition: function() {
          currentHookNameInDev = "useTransition";
          warnInvalidHookAccess();
          updateHookTypesDev();
          return rerenderTransition();
        },
        useMutableSource: function(source, getSnapshot, subscribe) {
          currentHookNameInDev = "useMutableSource";
          warnInvalidHookAccess();
          updateHookTypesDev();
          return updateMutableSource();
        },
        useSyncExternalStore: function(subscribe, getSnapshot, getServerSnapshot) {
          currentHookNameInDev = "useSyncExternalStore";
          warnInvalidHookAccess();
          updateHookTypesDev();
          return updateSyncExternalStore(subscribe, getSnapshot);
        },
        useId: function() {
          currentHookNameInDev = "useId";
          warnInvalidHookAccess();
          updateHookTypesDev();
          return updateId();
        },
        unstable_isNewReconciler: enableNewReconciler
      };
    }
    var now$2 = Scheduler.unstable_now;
    var commitTime = 0;
    var layoutEffectStartTime = -1;
    var profilerStartTime = -1;
    var passiveEffectStartTime = -1;
    var currentUpdateIsNested = false;
    var nestedUpdateScheduled = false;
    function isCurrentUpdateNested() {
      return currentUpdateIsNested;
    }
    function markNestedUpdateScheduled() {
      {
        nestedUpdateScheduled = true;
      }
    }
    function resetNestedUpdateFlag() {
      {
        currentUpdateIsNested = false;
        nestedUpdateScheduled = false;
      }
    }
    function syncNestedUpdateFlag() {
      {
        currentUpdateIsNested = nestedUpdateScheduled;
        nestedUpdateScheduled = false;
      }
    }
    function getCommitTime() {
      return commitTime;
    }
    function recordCommitTime() {
      commitTime = now$2();
    }
    function startProfilerTimer(fiber) {
      profilerStartTime = now$2();
      if (fiber.actualStartTime < 0) {
        fiber.actualStartTime = now$2();
      }
    }
    function stopProfilerTimerIfRunning(fiber) {
      profilerStartTime = -1;
    }
    function stopProfilerTimerIfRunningAndRecordDelta(fiber, overrideBaseTime) {
      if (profilerStartTime >= 0) {
        var elapsedTime = now$2() - profilerStartTime;
        fiber.actualDuration += elapsedTime;
        if (overrideBaseTime) {
          fiber.selfBaseDuration = elapsedTime;
        }
        profilerStartTime = -1;
      }
    }
    function recordLayoutEffectDuration(fiber) {
      if (layoutEffectStartTime >= 0) {
        var elapsedTime = now$2() - layoutEffectStartTime;
        layoutEffectStartTime = -1;
        var parentFiber = fiber.return;
        while (parentFiber !== null) {
          switch (parentFiber.tag) {
            case HostRoot:
              var root = parentFiber.stateNode;
              root.effectDuration += elapsedTime;
              return;
            case Profiler:
              var parentStateNode = parentFiber.stateNode;
              parentStateNode.effectDuration += elapsedTime;
              return;
          }
          parentFiber = parentFiber.return;
        }
      }
    }
    function recordPassiveEffectDuration(fiber) {
      if (passiveEffectStartTime >= 0) {
        var elapsedTime = now$2() - passiveEffectStartTime;
        passiveEffectStartTime = -1;
        var parentFiber = fiber.return;
        while (parentFiber !== null) {
          switch (parentFiber.tag) {
            case HostRoot:
              var root = parentFiber.stateNode;
              if (root !== null) {
                root.passiveEffectDuration += elapsedTime;
              }
              return;
            case Profiler:
              var parentStateNode = parentFiber.stateNode;
              if (parentStateNode !== null) {
                parentStateNode.passiveEffectDuration += elapsedTime;
              }
              return;
          }
          parentFiber = parentFiber.return;
        }
      }
    }
    function startLayoutEffectTimer() {
      layoutEffectStartTime = now$2();
    }
    function startPassiveEffectTimer() {
      passiveEffectStartTime = now$2();
    }
    function transferActualDuration(fiber) {
      var child = fiber.child;
      while (child) {
        fiber.actualDuration += child.actualDuration;
        child = child.sibling;
      }
    }
    function createCapturedValue(value, source) {
      return {
        value,
        source,
        stack: getStackByFiberInDevAndProd(source)
      };
    }
    function showErrorDialog(boundary, errorInfo) {
      return true;
    }
    function logCapturedError(boundary, errorInfo) {
      try {
        var logError = showErrorDialog(boundary, errorInfo);
        if (logError === false) {
          return;
        }
        var error3 = errorInfo.value;
        if (true) {
          var source = errorInfo.source;
          var stack = errorInfo.stack;
          var componentStack = stack !== null ? stack : "";
          if (error3 != null && error3._suppressLogging) {
            if (boundary.tag === ClassComponent) {
              return;
            }
            console["error"](error3);
          }
          var componentName = source ? getComponentNameFromFiber(source) : null;
          var componentNameMessage = componentName ? "The above error occurred in the <" + componentName + "> component:" : "The above error occurred in one of your React components:";
          var errorBoundaryMessage;
          if (boundary.tag === HostRoot) {
            errorBoundaryMessage = "Consider adding an error boundary to your tree to customize error handling behavior.\nVisit https://reactjs.org/link/error-boundaries to learn more about error boundaries.";
          } else {
            var errorBoundaryName = getComponentNameFromFiber(boundary) || "Anonymous";
            errorBoundaryMessage = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + errorBoundaryName + ".");
          }
          var combinedMessage = componentNameMessage + "\n" + componentStack + "\n\n" + ("" + errorBoundaryMessage);
          console["error"](combinedMessage);
        } else {
          console["error"](error3);
        }
      } catch (e) {
        setTimeout(function() {
          throw e;
        });
      }
    }
    var PossiblyWeakMap$1 = typeof WeakMap === "function" ? WeakMap : Map;
    function createRootErrorUpdate(fiber, errorInfo, lane) {
      var update = createUpdate(NoTimestamp, lane);
      update.tag = CaptureUpdate;
      update.payload = {
        element: null
      };
      var error3 = errorInfo.value;
      update.callback = function() {
        onUncaughtError(error3);
        logCapturedError(fiber, errorInfo);
      };
      return update;
    }
    function createClassErrorUpdate(fiber, errorInfo, lane) {
      var update = createUpdate(NoTimestamp, lane);
      update.tag = CaptureUpdate;
      var getDerivedStateFromError = fiber.type.getDerivedStateFromError;
      if (typeof getDerivedStateFromError === "function") {
        var error$1 = errorInfo.value;
        update.payload = function() {
          return getDerivedStateFromError(error$1);
        };
        update.callback = function() {
          {
            markFailedErrorBoundaryForHotReloading(fiber);
          }
          logCapturedError(fiber, errorInfo);
        };
      }
      var inst = fiber.stateNode;
      if (inst !== null && typeof inst.componentDidCatch === "function") {
        update.callback = function callback() {
          {
            markFailedErrorBoundaryForHotReloading(fiber);
          }
          logCapturedError(fiber, errorInfo);
          if (typeof getDerivedStateFromError !== "function") {
            markLegacyErrorBoundaryAsFailed(this);
          }
          var error$12 = errorInfo.value;
          var stack = errorInfo.stack;
          this.componentDidCatch(error$12, {
            componentStack: stack !== null ? stack : ""
          });
          {
            if (typeof getDerivedStateFromError !== "function") {
              if (!includesSomeLane(fiber.lanes, SyncLane)) {
                error2("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", getComponentNameFromFiber(fiber) || "Unknown");
              }
            }
          }
        };
      }
      return update;
    }
    function attachPingListener(root, wakeable, lanes) {
      var pingCache = root.pingCache;
      var threadIDs;
      if (pingCache === null) {
        pingCache = root.pingCache = new PossiblyWeakMap$1();
        threadIDs = /* @__PURE__ */ new Set();
        pingCache.set(wakeable, threadIDs);
      } else {
        threadIDs = pingCache.get(wakeable);
        if (threadIDs === void 0) {
          threadIDs = /* @__PURE__ */ new Set();
          pingCache.set(wakeable, threadIDs);
        }
      }
      if (!threadIDs.has(lanes)) {
        threadIDs.add(lanes);
        var ping = pingSuspendedRoot.bind(null, root, wakeable, lanes);
        {
          if (isDevToolsPresent) {
            restorePendingUpdaters(root, lanes);
          }
        }
        wakeable.then(ping, ping);
      }
    }
    function attachRetryListener(suspenseBoundary, root, wakeable, lanes) {
      var wakeables = suspenseBoundary.updateQueue;
      if (wakeables === null) {
        var updateQueue = /* @__PURE__ */ new Set();
        updateQueue.add(wakeable);
        suspenseBoundary.updateQueue = updateQueue;
      } else {
        wakeables.add(wakeable);
      }
    }
    function resetSuspendedComponent(sourceFiber, rootRenderLanes) {
      var tag = sourceFiber.tag;
      if ((sourceFiber.mode & ConcurrentMode) === NoMode && (tag === FunctionComponent || tag === ForwardRef || tag === SimpleMemoComponent)) {
        var currentSource = sourceFiber.alternate;
        if (currentSource) {
          sourceFiber.updateQueue = currentSource.updateQueue;
          sourceFiber.memoizedState = currentSource.memoizedState;
          sourceFiber.lanes = currentSource.lanes;
        } else {
          sourceFiber.updateQueue = null;
          sourceFiber.memoizedState = null;
        }
      }
    }
    function getNearestSuspenseBoundaryToCapture(returnFiber) {
      var node = returnFiber;
      do {
        if (node.tag === SuspenseComponent && shouldCaptureSuspense(node)) {
          return node;
        }
        node = node.return;
      } while (node !== null);
      return null;
    }
    function markSuspenseBoundaryShouldCapture(suspenseBoundary, returnFiber, sourceFiber, root, rootRenderLanes) {
      if ((suspenseBoundary.mode & ConcurrentMode) === NoMode) {
        if (suspenseBoundary === returnFiber) {
          suspenseBoundary.flags |= ShouldCapture;
        } else {
          suspenseBoundary.flags |= DidCapture;
          sourceFiber.flags |= ForceUpdateForLegacySuspense;
          sourceFiber.flags &= ~(LifecycleEffectMask | Incomplete);
          if (supportsPersistence && enablePersistentOffscreenHostContainer) {
            var currentSuspenseBoundary = suspenseBoundary.alternate;
            if (currentSuspenseBoundary === null) {
              var offscreenFiber = suspenseBoundary.child;
              var offscreenContainer = offscreenFiber.child;
              if (offscreenContainer !== null) {
                var children = offscreenContainer.memoizedProps.children;
                var containerProps = getOffscreenContainerProps("hidden", children);
                offscreenContainer.pendingProps = containerProps;
                offscreenContainer.memoizedProps = containerProps;
              }
            }
          }
          if (sourceFiber.tag === ClassComponent) {
            var currentSourceFiber = sourceFiber.alternate;
            if (currentSourceFiber === null) {
              sourceFiber.tag = IncompleteClassComponent;
            } else {
              var update = createUpdate(NoTimestamp, SyncLane);
              update.tag = ForceUpdate;
              enqueueUpdate(sourceFiber, update);
            }
          }
          sourceFiber.lanes = mergeLanes(sourceFiber.lanes, SyncLane);
        }
        return suspenseBoundary;
      }
      suspenseBoundary.flags |= ShouldCapture;
      suspenseBoundary.lanes = rootRenderLanes;
      return suspenseBoundary;
    }
    function throwException(root, returnFiber, sourceFiber, value, rootRenderLanes) {
      sourceFiber.flags |= Incomplete;
      {
        if (isDevToolsPresent) {
          restorePendingUpdaters(root, rootRenderLanes);
        }
      }
      if (value !== null && typeof value === "object" && typeof value.then === "function") {
        var wakeable = value;
        resetSuspendedComponent(sourceFiber);
        var suspenseBoundary = getNearestSuspenseBoundaryToCapture(returnFiber);
        if (suspenseBoundary !== null) {
          suspenseBoundary.flags &= ~ForceClientRender;
          markSuspenseBoundaryShouldCapture(suspenseBoundary, returnFiber, sourceFiber, root, rootRenderLanes);
          if (suspenseBoundary.mode & ConcurrentMode) {
            attachPingListener(root, wakeable, rootRenderLanes);
          }
          attachRetryListener(suspenseBoundary, root, wakeable);
          return;
        } else {
          if (!includesSyncLane(rootRenderLanes)) {
            attachPingListener(root, wakeable, rootRenderLanes);
            renderDidSuspendDelayIfPossible();
            return;
          }
          var uncaughtSuspenseError = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          value = uncaughtSuspenseError;
        }
      } else {
        if (getIsHydrating() && sourceFiber.mode & ConcurrentMode) {
          markDidSuspendWhileHydratingDEV();
          var _suspenseBoundary = getNearestSuspenseBoundaryToCapture(returnFiber);
          if (_suspenseBoundary !== null) {
            if ((_suspenseBoundary.flags & ShouldCapture) === NoFlags) {
              _suspenseBoundary.flags |= ForceClientRender;
            }
            markSuspenseBoundaryShouldCapture(_suspenseBoundary, returnFiber, sourceFiber, root, rootRenderLanes);
            queueHydrationError(value);
            return;
          }
        }
      }
      renderDidError(value);
      value = createCapturedValue(value, sourceFiber);
      var workInProgress2 = returnFiber;
      do {
        switch (workInProgress2.tag) {
          case HostRoot: {
            var _errorInfo = value;
            workInProgress2.flags |= ShouldCapture;
            var lane = pickArbitraryLane(rootRenderLanes);
            workInProgress2.lanes = mergeLanes(workInProgress2.lanes, lane);
            var update = createRootErrorUpdate(workInProgress2, _errorInfo, lane);
            enqueueCapturedUpdate(workInProgress2, update);
            return;
          }
          case ClassComponent:
            var errorInfo = value;
            var ctor = workInProgress2.type;
            var instance = workInProgress2.stateNode;
            if ((workInProgress2.flags & DidCapture) === NoFlags && (typeof ctor.getDerivedStateFromError === "function" || instance !== null && typeof instance.componentDidCatch === "function" && !isAlreadyFailedLegacyErrorBoundary(instance))) {
              workInProgress2.flags |= ShouldCapture;
              var _lane = pickArbitraryLane(rootRenderLanes);
              workInProgress2.lanes = mergeLanes(workInProgress2.lanes, _lane);
              var _update = createClassErrorUpdate(workInProgress2, errorInfo, _lane);
              enqueueCapturedUpdate(workInProgress2, _update);
              return;
            }
            break;
        }
        workInProgress2 = workInProgress2.return;
      } while (workInProgress2 !== null);
    }
    function getSuspendedCache() {
      {
        return null;
      }
    }
    function markUpdate(workInProgress2) {
      workInProgress2.flags |= Update;
    }
    function markRef(workInProgress2) {
      workInProgress2.flags |= Ref;
      {
        workInProgress2.flags |= RefStatic;
      }
    }
    function hadNoMutationsEffects(current2, completedWork) {
      var didBailout = current2 !== null && current2.child === completedWork.child;
      if (didBailout) {
        return true;
      }
      if ((completedWork.flags & ChildDeletion) !== NoFlags) {
        return false;
      }
      var child = completedWork.child;
      while (child !== null) {
        if ((child.flags & MutationMask) !== NoFlags || (child.subtreeFlags & MutationMask) !== NoFlags) {
          return false;
        }
        child = child.sibling;
      }
      return true;
    }
    var appendAllChildren;
    var updateHostContainer;
    var updateHostComponent;
    var updateHostText;
    if (supportsMutation) {
      appendAllChildren = function(parent, workInProgress2, needsVisibilityToggle, isHidden) {
        var node = workInProgress2.child;
        while (node !== null) {
          if (node.tag === HostComponent || node.tag === HostText) {
            appendInitialChild(parent, node.stateNode);
          } else if (node.tag === HostPortal) ;
          else if (node.child !== null) {
            node.child.return = node;
            node = node.child;
            continue;
          }
          if (node === workInProgress2) {
            return;
          }
          while (node.sibling === null) {
            if (node.return === null || node.return === workInProgress2) {
              return;
            }
            node = node.return;
          }
          node.sibling.return = node.return;
          node = node.sibling;
        }
      };
      updateHostContainer = function(current2, workInProgress2) {
      };
      updateHostComponent = function(current2, workInProgress2, type, newProps, rootContainerInstance) {
        var oldProps = current2.memoizedProps;
        if (oldProps === newProps) {
          return;
        }
        var instance = workInProgress2.stateNode;
        var currentHostContext = getHostContext();
        var updatePayload = prepareUpdate(instance, type, oldProps, newProps, rootContainerInstance, currentHostContext);
        workInProgress2.updateQueue = updatePayload;
        if (updatePayload) {
          markUpdate(workInProgress2);
        }
      };
      updateHostText = function(current2, workInProgress2, oldText, newText) {
        if (oldText !== newText) {
          markUpdate(workInProgress2);
        }
      };
    } else if (supportsPersistence) {
      appendAllChildren = function(parent, workInProgress2, needsVisibilityToggle, isHidden) {
        var node = workInProgress2.child;
        while (node !== null) {
          if (node.tag === HostComponent) {
            var instance = node.stateNode;
            if (needsVisibilityToggle && isHidden) {
              var props = node.memoizedProps;
              var type = node.type;
              instance = cloneHiddenInstance(instance, type, props, node);
            }
            appendInitialChild(parent, instance);
          } else if (node.tag === HostText) {
            var _instance = node.stateNode;
            if (needsVisibilityToggle && isHidden) {
              var text = node.memoizedProps;
              _instance = cloneHiddenTextInstance(_instance, text, node);
            }
            appendInitialChild(parent, _instance);
          } else if (node.tag === HostPortal) ;
          else if (node.tag === OffscreenComponent && node.memoizedState !== null) {
            var child = node.child;
            if (child !== null) {
              child.return = node;
            }
            {
              appendAllChildren(parent, node, true, true);
            }
          } else if (node.child !== null) {
            node.child.return = node;
            node = node.child;
            continue;
          }
          node = node;
          if (node === workInProgress2) {
            return;
          }
          while (node.sibling === null) {
            if (node.return === null || node.return === workInProgress2) {
              return;
            }
            node = node.return;
          }
          node.sibling.return = node.return;
          node = node.sibling;
        }
      };
      var appendAllChildrenToContainer = function(containerChildSet, workInProgress2, needsVisibilityToggle, isHidden) {
        var node = workInProgress2.child;
        while (node !== null) {
          if (node.tag === HostComponent) {
            var instance = node.stateNode;
            if (needsVisibilityToggle && isHidden) {
              var props = node.memoizedProps;
              var type = node.type;
              instance = cloneHiddenInstance(instance, type, props, node);
            }
            appendChildToContainerChildSet(containerChildSet, instance);
          } else if (node.tag === HostText) {
            var _instance2 = node.stateNode;
            if (needsVisibilityToggle && isHidden) {
              var text = node.memoizedProps;
              _instance2 = cloneHiddenTextInstance(_instance2, text, node);
            }
            appendChildToContainerChildSet(containerChildSet, _instance2);
          } else if (node.tag === HostPortal) ;
          else if (node.tag === OffscreenComponent && node.memoizedState !== null) {
            var child = node.child;
            if (child !== null) {
              child.return = node;
            }
            {
              appendAllChildrenToContainer(containerChildSet, node, true, true);
            }
          } else if (node.child !== null) {
            node.child.return = node;
            node = node.child;
            continue;
          }
          node = node;
          if (node === workInProgress2) {
            return;
          }
          while (node.sibling === null) {
            if (node.return === null || node.return === workInProgress2) {
              return;
            }
            node = node.return;
          }
          node.sibling.return = node.return;
          node = node.sibling;
        }
      };
      updateHostContainer = function(current2, workInProgress2) {
        var portalOrRoot = workInProgress2.stateNode;
        var childrenUnchanged = hadNoMutationsEffects(current2, workInProgress2);
        if (childrenUnchanged) ;
        else {
          var container = portalOrRoot.containerInfo;
          var newChildSet = createContainerChildSet(container);
          appendAllChildrenToContainer(newChildSet, workInProgress2, false, false);
          portalOrRoot.pendingChildren = newChildSet;
          markUpdate(workInProgress2);
          finalizeContainerChildren(container, newChildSet);
        }
      };
      updateHostComponent = function(current2, workInProgress2, type, newProps, rootContainerInstance) {
        var currentInstance = current2.stateNode;
        var oldProps = current2.memoizedProps;
        var childrenUnchanged = hadNoMutationsEffects(current2, workInProgress2);
        if (childrenUnchanged && oldProps === newProps) {
          workInProgress2.stateNode = currentInstance;
          return;
        }
        var recyclableInstance = workInProgress2.stateNode;
        var currentHostContext = getHostContext();
        var updatePayload = null;
        if (oldProps !== newProps) {
          updatePayload = prepareUpdate(recyclableInstance, type, oldProps, newProps, rootContainerInstance, currentHostContext);
        }
        if (childrenUnchanged && updatePayload === null) {
          workInProgress2.stateNode = currentInstance;
          return;
        }
        var newInstance = cloneInstance(currentInstance, updatePayload, type, oldProps, newProps, workInProgress2, childrenUnchanged, recyclableInstance);
        if (finalizeInitialChildren(newInstance, type, newProps, rootContainerInstance, currentHostContext)) {
          markUpdate(workInProgress2);
        }
        workInProgress2.stateNode = newInstance;
        if (childrenUnchanged) {
          markUpdate(workInProgress2);
        } else {
          appendAllChildren(newInstance, workInProgress2, false, false);
        }
      };
      updateHostText = function(current2, workInProgress2, oldText, newText) {
        if (oldText !== newText) {
          var rootContainerInstance = getRootHostContainer();
          var currentHostContext = getHostContext();
          workInProgress2.stateNode = createTextInstance(newText, rootContainerInstance, currentHostContext, workInProgress2);
          markUpdate(workInProgress2);
        } else {
          workInProgress2.stateNode = current2.stateNode;
        }
      };
    } else {
      updateHostContainer = function(current2, workInProgress2) {
      };
      updateHostComponent = function(current2, workInProgress2, type, newProps, rootContainerInstance) {
      };
      updateHostText = function(current2, workInProgress2, oldText, newText) {
      };
    }
    function cutOffTailIfNeeded(renderState, hasRenderedATailFallback) {
      if (getIsHydrating()) {
        return;
      }
      switch (renderState.tailMode) {
        case "hidden": {
          var tailNode = renderState.tail;
          var lastTailNode = null;
          while (tailNode !== null) {
            if (tailNode.alternate !== null) {
              lastTailNode = tailNode;
            }
            tailNode = tailNode.sibling;
          }
          if (lastTailNode === null) {
            renderState.tail = null;
          } else {
            lastTailNode.sibling = null;
          }
          break;
        }
        case "collapsed": {
          var _tailNode = renderState.tail;
          var _lastTailNode = null;
          while (_tailNode !== null) {
            if (_tailNode.alternate !== null) {
              _lastTailNode = _tailNode;
            }
            _tailNode = _tailNode.sibling;
          }
          if (_lastTailNode === null) {
            if (!hasRenderedATailFallback && renderState.tail !== null) {
              renderState.tail.sibling = null;
            } else {
              renderState.tail = null;
            }
          } else {
            _lastTailNode.sibling = null;
          }
          break;
        }
      }
    }
    function bubbleProperties(completedWork) {
      var didBailout = completedWork.alternate !== null && completedWork.alternate.child === completedWork.child;
      var newChildLanes = NoLanes;
      var subtreeFlags = NoFlags;
      if (!didBailout) {
        if ((completedWork.mode & ProfileMode) !== NoMode) {
          var actualDuration = completedWork.actualDuration;
          var treeBaseDuration = completedWork.selfBaseDuration;
          var child = completedWork.child;
          while (child !== null) {
            newChildLanes = mergeLanes(newChildLanes, mergeLanes(child.lanes, child.childLanes));
            subtreeFlags |= child.subtreeFlags;
            subtreeFlags |= child.flags;
            actualDuration += child.actualDuration;
            treeBaseDuration += child.treeBaseDuration;
            child = child.sibling;
          }
          completedWork.actualDuration = actualDuration;
          completedWork.treeBaseDuration = treeBaseDuration;
        } else {
          var _child = completedWork.child;
          while (_child !== null) {
            newChildLanes = mergeLanes(newChildLanes, mergeLanes(_child.lanes, _child.childLanes));
            subtreeFlags |= _child.subtreeFlags;
            subtreeFlags |= _child.flags;
            _child.return = completedWork;
            _child = _child.sibling;
          }
        }
        completedWork.subtreeFlags |= subtreeFlags;
      } else {
        if ((completedWork.mode & ProfileMode) !== NoMode) {
          var _treeBaseDuration = completedWork.selfBaseDuration;
          var _child2 = completedWork.child;
          while (_child2 !== null) {
            newChildLanes = mergeLanes(newChildLanes, mergeLanes(_child2.lanes, _child2.childLanes));
            subtreeFlags |= _child2.subtreeFlags & StaticMask;
            subtreeFlags |= _child2.flags & StaticMask;
            _treeBaseDuration += _child2.treeBaseDuration;
            _child2 = _child2.sibling;
          }
          completedWork.treeBaseDuration = _treeBaseDuration;
        } else {
          var _child3 = completedWork.child;
          while (_child3 !== null) {
            newChildLanes = mergeLanes(newChildLanes, mergeLanes(_child3.lanes, _child3.childLanes));
            subtreeFlags |= _child3.subtreeFlags & StaticMask;
            subtreeFlags |= _child3.flags & StaticMask;
            _child3.return = completedWork;
            _child3 = _child3.sibling;
          }
        }
        completedWork.subtreeFlags |= subtreeFlags;
      }
      completedWork.childLanes = newChildLanes;
      return didBailout;
    }
    function completeWork(current2, workInProgress2, renderLanes2) {
      var newProps = workInProgress2.pendingProps;
      popTreeContext(workInProgress2);
      switch (workInProgress2.tag) {
        case IndeterminateComponent:
        case LazyComponent:
        case SimpleMemoComponent:
        case FunctionComponent:
        case ForwardRef:
        case Fragment2:
        case Mode:
        case Profiler:
        case ContextConsumer:
        case MemoComponent:
          bubbleProperties(workInProgress2);
          return null;
        case ClassComponent: {
          var Component3 = workInProgress2.type;
          if (isContextProvider(Component3)) {
            popContext(workInProgress2);
          }
          bubbleProperties(workInProgress2);
          return null;
        }
        case HostRoot: {
          var fiberRoot = workInProgress2.stateNode;
          popHostContainer(workInProgress2);
          popTopLevelContextObject(workInProgress2);
          resetWorkInProgressVersions();
          if (fiberRoot.pendingContext) {
            fiberRoot.context = fiberRoot.pendingContext;
            fiberRoot.pendingContext = null;
          }
          if (current2 === null || current2.child === null) {
            var wasHydrated = popHydrationState(workInProgress2);
            if (wasHydrated) {
              markUpdate(workInProgress2);
            } else {
              if (current2 !== null) {
                var prevState = current2.memoizedState;
                if (
                  // Check if this is a client root
                  !prevState.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
                  (workInProgress2.flags & ForceClientRender) !== NoFlags
                ) {
                  workInProgress2.flags |= Snapshot;
                  upgradeHydrationErrorsToRecoverable();
                }
              }
            }
          }
          updateHostContainer(current2, workInProgress2);
          bubbleProperties(workInProgress2);
          return null;
        }
        case HostComponent: {
          popHostContext(workInProgress2);
          var rootContainerInstance = getRootHostContainer();
          var type = workInProgress2.type;
          if (current2 !== null && workInProgress2.stateNode != null) {
            updateHostComponent(current2, workInProgress2, type, newProps, rootContainerInstance);
            if (current2.ref !== workInProgress2.ref) {
              markRef(workInProgress2);
            }
          } else {
            if (!newProps) {
              if (workInProgress2.stateNode === null) {
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              }
              bubbleProperties(workInProgress2);
              return null;
            }
            var currentHostContext = getHostContext();
            var _wasHydrated = popHydrationState(workInProgress2);
            if (_wasHydrated) {
              if (prepareToHydrateHostInstance(workInProgress2, rootContainerInstance, currentHostContext)) {
                markUpdate(workInProgress2);
              }
            } else {
              var instance = createInstance(type, newProps, rootContainerInstance, currentHostContext, workInProgress2);
              appendAllChildren(instance, workInProgress2, false, false);
              workInProgress2.stateNode = instance;
              if (finalizeInitialChildren(instance, type, newProps, rootContainerInstance, currentHostContext)) {
                markUpdate(workInProgress2);
              }
            }
            if (workInProgress2.ref !== null) {
              markRef(workInProgress2);
            }
          }
          bubbleProperties(workInProgress2);
          return null;
        }
        case HostText: {
          var newText = newProps;
          if (current2 && workInProgress2.stateNode != null) {
            var oldText = current2.memoizedProps;
            updateHostText(current2, workInProgress2, oldText, newText);
          } else {
            if (typeof newText !== "string") {
              if (workInProgress2.stateNode === null) {
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              }
            }
            var _rootContainerInstance = getRootHostContainer();
            var _currentHostContext = getHostContext();
            var _wasHydrated2 = popHydrationState(workInProgress2);
            if (_wasHydrated2) {
              if (prepareToHydrateHostTextInstance(workInProgress2)) {
                markUpdate(workInProgress2);
              }
            } else {
              workInProgress2.stateNode = createTextInstance(newText, _rootContainerInstance, _currentHostContext, workInProgress2);
            }
          }
          bubbleProperties(workInProgress2);
          return null;
        }
        case SuspenseComponent: {
          popSuspenseContext(workInProgress2);
          var nextState = workInProgress2.memoizedState;
          {
            if (hasUnhydratedTailNodes() && (workInProgress2.mode & ConcurrentMode) !== NoMode && (workInProgress2.flags & DidCapture) === NoFlags) {
              warnIfUnhydratedTailNodes(workInProgress2);
              resetHydrationState();
              workInProgress2.flags |= ForceClientRender | Incomplete | ShouldCapture;
              return workInProgress2;
            }
            if (nextState !== null && nextState.dehydrated !== null) {
              var _wasHydrated3 = popHydrationState(workInProgress2);
              if (current2 === null) {
                if (!_wasHydrated3) {
                  throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
                }
                prepareToHydrateHostSuspenseInstance(workInProgress2);
                bubbleProperties(workInProgress2);
                {
                  if ((workInProgress2.mode & ProfileMode) !== NoMode) {
                    var isTimedOutSuspense = nextState !== null;
                    if (isTimedOutSuspense) {
                      var primaryChildFragment = workInProgress2.child;
                      if (primaryChildFragment !== null) {
                        workInProgress2.treeBaseDuration -= primaryChildFragment.treeBaseDuration;
                      }
                    }
                  }
                }
                return null;
              } else {
                resetHydrationState();
                if ((workInProgress2.flags & DidCapture) === NoFlags) {
                  workInProgress2.memoizedState = null;
                }
                workInProgress2.flags |= Update;
                bubbleProperties(workInProgress2);
                {
                  if ((workInProgress2.mode & ProfileMode) !== NoMode) {
                    var _isTimedOutSuspense = nextState !== null;
                    if (_isTimedOutSuspense) {
                      var _primaryChildFragment = workInProgress2.child;
                      if (_primaryChildFragment !== null) {
                        workInProgress2.treeBaseDuration -= _primaryChildFragment.treeBaseDuration;
                      }
                    }
                  }
                }
                return null;
              }
            }
            upgradeHydrationErrorsToRecoverable();
          }
          if ((workInProgress2.flags & DidCapture) !== NoFlags) {
            workInProgress2.lanes = renderLanes2;
            if ((workInProgress2.mode & ProfileMode) !== NoMode) {
              transferActualDuration(workInProgress2);
            }
            return workInProgress2;
          }
          var nextDidTimeout = nextState !== null;
          var prevDidTimeout = false;
          if (current2 === null) {
            popHydrationState(workInProgress2);
          } else {
            var _prevState = current2.memoizedState;
            prevDidTimeout = _prevState !== null;
          }
          if (nextDidTimeout && !prevDidTimeout) {
            var _offscreenFiber = workInProgress2.child;
            _offscreenFiber.flags |= Visibility;
            if ((workInProgress2.mode & ConcurrentMode) !== NoMode) {
              var hasInvisibleChildContext = current2 === null && (workInProgress2.memoizedProps.unstable_avoidThisFallback !== true || !enableSuspenseAvoidThisFallback);
              if (hasInvisibleChildContext || hasSuspenseContext(suspenseStackCursor.current, InvisibleParentSuspenseContext)) {
                renderDidSuspend();
              } else {
                renderDidSuspendDelayIfPossible();
              }
            }
          }
          var wakeables = workInProgress2.updateQueue;
          if (wakeables !== null) {
            workInProgress2.flags |= Update;
          }
          bubbleProperties(workInProgress2);
          {
            if ((workInProgress2.mode & ProfileMode) !== NoMode) {
              if (nextDidTimeout) {
                var _primaryChildFragment2 = workInProgress2.child;
                if (_primaryChildFragment2 !== null) {
                  workInProgress2.treeBaseDuration -= _primaryChildFragment2.treeBaseDuration;
                }
              }
            }
          }
          return null;
        }
        case HostPortal:
          popHostContainer(workInProgress2);
          updateHostContainer(current2, workInProgress2);
          if (current2 === null) {
            preparePortalMount(workInProgress2.stateNode.containerInfo);
          }
          bubbleProperties(workInProgress2);
          return null;
        case ContextProvider:
          var context2 = workInProgress2.type._context;
          popProvider(context2, workInProgress2);
          bubbleProperties(workInProgress2);
          return null;
        case IncompleteClassComponent: {
          var _Component = workInProgress2.type;
          if (isContextProvider(_Component)) {
            popContext(workInProgress2);
          }
          bubbleProperties(workInProgress2);
          return null;
        }
        case SuspenseListComponent: {
          popSuspenseContext(workInProgress2);
          var renderState = workInProgress2.memoizedState;
          if (renderState === null) {
            bubbleProperties(workInProgress2);
            return null;
          }
          var didSuspendAlready = (workInProgress2.flags & DidCapture) !== NoFlags;
          var renderedTail = renderState.rendering;
          if (renderedTail === null) {
            if (!didSuspendAlready) {
              var cannotBeSuspended = renderHasNotSuspendedYet() && (current2 === null || (current2.flags & DidCapture) === NoFlags);
              if (!cannotBeSuspended) {
                var row = workInProgress2.child;
                while (row !== null) {
                  var suspended = findFirstSuspended(row);
                  if (suspended !== null) {
                    didSuspendAlready = true;
                    workInProgress2.flags |= DidCapture;
                    cutOffTailIfNeeded(renderState, false);
                    var newThenables = suspended.updateQueue;
                    if (newThenables !== null) {
                      workInProgress2.updateQueue = newThenables;
                      workInProgress2.flags |= Update;
                    }
                    workInProgress2.subtreeFlags = NoFlags;
                    resetChildFibers(workInProgress2, renderLanes2);
                    pushSuspenseContext(workInProgress2, setShallowSuspenseContext(suspenseStackCursor.current, ForceSuspenseFallback));
                    return workInProgress2.child;
                  }
                  row = row.sibling;
                }
              }
              if (renderState.tail !== null && now$1() > getRenderTargetTime()) {
                workInProgress2.flags |= DidCapture;
                didSuspendAlready = true;
                cutOffTailIfNeeded(renderState, false);
                workInProgress2.lanes = SomeRetryLane;
              }
            } else {
              cutOffTailIfNeeded(renderState, false);
            }
          } else {
            if (!didSuspendAlready) {
              var _suspended = findFirstSuspended(renderedTail);
              if (_suspended !== null) {
                workInProgress2.flags |= DidCapture;
                didSuspendAlready = true;
                var _newThenables = _suspended.updateQueue;
                if (_newThenables !== null) {
                  workInProgress2.updateQueue = _newThenables;
                  workInProgress2.flags |= Update;
                }
                cutOffTailIfNeeded(renderState, true);
                if (renderState.tail === null && renderState.tailMode === "hidden" && !renderedTail.alternate && !getIsHydrating()) {
                  bubbleProperties(workInProgress2);
                  return null;
                }
              } else if (
                // The time it took to render last row is greater than the remaining
                // time we have to render. So rendering one more row would likely
                // exceed it.
                now$1() * 2 - renderState.renderingStartTime > getRenderTargetTime() && renderLanes2 !== OffscreenLane
              ) {
                workInProgress2.flags |= DidCapture;
                didSuspendAlready = true;
                cutOffTailIfNeeded(renderState, false);
                workInProgress2.lanes = SomeRetryLane;
              }
            }
            if (renderState.isBackwards) {
              renderedTail.sibling = workInProgress2.child;
              workInProgress2.child = renderedTail;
            } else {
              var previousSibling = renderState.last;
              if (previousSibling !== null) {
                previousSibling.sibling = renderedTail;
              } else {
                workInProgress2.child = renderedTail;
              }
              renderState.last = renderedTail;
            }
          }
          if (renderState.tail !== null) {
            var next = renderState.tail;
            renderState.rendering = next;
            renderState.tail = next.sibling;
            renderState.renderingStartTime = now$1();
            next.sibling = null;
            var suspenseContext = suspenseStackCursor.current;
            if (didSuspendAlready) {
              suspenseContext = setShallowSuspenseContext(suspenseContext, ForceSuspenseFallback);
            } else {
              suspenseContext = setDefaultShallowSuspenseContext(suspenseContext);
            }
            pushSuspenseContext(workInProgress2, suspenseContext);
            return next;
          }
          bubbleProperties(workInProgress2);
          return null;
        }
        case ScopeComponent: {
          break;
        }
        case OffscreenComponent:
        case LegacyHiddenComponent: {
          popRenderLanes(workInProgress2);
          var _nextState = workInProgress2.memoizedState;
          var nextIsHidden = _nextState !== null;
          if (current2 !== null) {
            var _prevState2 = current2.memoizedState;
            var prevIsHidden = _prevState2 !== null;
            if (prevIsHidden !== nextIsHidden && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !enableLegacyHidden) {
              workInProgress2.flags |= Visibility;
            }
          }
          if (!nextIsHidden || (workInProgress2.mode & ConcurrentMode) === NoMode) {
            bubbleProperties(workInProgress2);
          } else {
            if (includesSomeLane(subtreeRenderLanes, OffscreenLane)) {
              bubbleProperties(workInProgress2);
              if (supportsMutation) {
                if (workInProgress2.subtreeFlags & (Placement | Update)) {
                  workInProgress2.flags |= Visibility;
                }
              }
            }
          }
          return null;
        }
        case CacheComponent: {
          return null;
        }
        case TracingMarkerComponent: {
          return null;
        }
      }
      throw new Error("Unknown unit of work tag (" + workInProgress2.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
    var didReceiveUpdate = false;
    var didWarnAboutBadClass;
    var didWarnAboutModulePatternComponent;
    var didWarnAboutContextTypeOnFunctionComponent;
    var didWarnAboutGetDerivedStateOnFunctionComponent;
    var didWarnAboutFunctionRefs;
    var didWarnAboutReassigningProps;
    var didWarnAboutRevealOrder;
    var didWarnAboutTailOptions;
    {
      didWarnAboutBadClass = {};
      didWarnAboutModulePatternComponent = {};
      didWarnAboutContextTypeOnFunctionComponent = {};
      didWarnAboutGetDerivedStateOnFunctionComponent = {};
      didWarnAboutFunctionRefs = {};
      didWarnAboutReassigningProps = false;
      didWarnAboutRevealOrder = {};
      didWarnAboutTailOptions = {};
    }
    function reconcileChildren(current2, workInProgress2, nextChildren, renderLanes2) {
      if (current2 === null) {
        workInProgress2.child = mountChildFibers(workInProgress2, null, nextChildren, renderLanes2);
      } else {
        workInProgress2.child = reconcileChildFibers(workInProgress2, current2.child, nextChildren, renderLanes2);
      }
    }
    function forceUnmountCurrentAndReconcile(current2, workInProgress2, nextChildren, renderLanes2) {
      workInProgress2.child = reconcileChildFibers(workInProgress2, current2.child, null, renderLanes2);
      workInProgress2.child = reconcileChildFibers(workInProgress2, null, nextChildren, renderLanes2);
    }
    function updateForwardRef(current2, workInProgress2, Component3, nextProps, renderLanes2) {
      {
        if (workInProgress2.type !== workInProgress2.elementType) {
          var innerPropTypes = Component3.propTypes;
          if (innerPropTypes) {
            checkPropTypes(
              innerPropTypes,
              nextProps,
              // Resolved props
              "prop",
              getComponentNameFromType(Component3)
            );
          }
        }
      }
      var render2 = Component3.render;
      var ref = workInProgress2.ref;
      var nextChildren;
      var hasId;
      prepareToReadContext(workInProgress2, renderLanes2);
      {
        markComponentRenderStarted(workInProgress2);
      }
      {
        ReactCurrentOwner$1.current = workInProgress2;
        setIsRendering(true);
        nextChildren = renderWithHooks(current2, workInProgress2, render2, nextProps, ref, renderLanes2);
        hasId = checkDidRenderIdHook();
        if (workInProgress2.mode & StrictLegacyMode) {
          setIsStrictModeForDevtools(true);
          try {
            nextChildren = renderWithHooks(current2, workInProgress2, render2, nextProps, ref, renderLanes2);
            hasId = checkDidRenderIdHook();
          } finally {
            setIsStrictModeForDevtools(false);
          }
        }
        setIsRendering(false);
      }
      {
        markComponentRenderStopped();
      }
      if (current2 !== null && !didReceiveUpdate) {
        bailoutHooks(current2, workInProgress2, renderLanes2);
        return bailoutOnAlreadyFinishedWork(current2, workInProgress2, renderLanes2);
      }
      if (getIsHydrating() && hasId) {
        pushMaterializedTreeId(workInProgress2);
      }
      workInProgress2.flags |= PerformedWork;
      reconcileChildren(current2, workInProgress2, nextChildren, renderLanes2);
      return workInProgress2.child;
    }
    function updateMemoComponent(current2, workInProgress2, Component3, nextProps, renderLanes2) {
      if (current2 === null) {
        var type = Component3.type;
        if (isSimpleFunctionComponent(type) && Component3.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        Component3.defaultProps === void 0) {
          var resolvedType = type;
          {
            resolvedType = resolveFunctionForHotReloading(type);
          }
          workInProgress2.tag = SimpleMemoComponent;
          workInProgress2.type = resolvedType;
          {
            validateFunctionComponentInDev(workInProgress2, type);
          }
          return updateSimpleMemoComponent(current2, workInProgress2, resolvedType, nextProps, renderLanes2);
        }
        {
          var innerPropTypes = type.propTypes;
          if (innerPropTypes) {
            checkPropTypes(
              innerPropTypes,
              nextProps,
              // Resolved props
              "prop",
              getComponentNameFromType(type)
            );
          }
        }
        var child = createFiberFromTypeAndProps(Component3.type, null, nextProps, workInProgress2, workInProgress2.mode, renderLanes2);
        child.ref = workInProgress2.ref;
        child.return = workInProgress2;
        workInProgress2.child = child;
        return child;
      }
      {
        var _type = Component3.type;
        var _innerPropTypes = _type.propTypes;
        if (_innerPropTypes) {
          checkPropTypes(
            _innerPropTypes,
            nextProps,
            // Resolved props
            "prop",
            getComponentNameFromType(_type)
          );
        }
      }
      var currentChild = current2.child;
      var hasScheduledUpdateOrContext = checkScheduledUpdateOrContext(current2, renderLanes2);
      if (!hasScheduledUpdateOrContext) {
        var prevProps = currentChild.memoizedProps;
        var compare = Component3.compare;
        compare = compare !== null ? compare : shallowEqual;
        if (compare(prevProps, nextProps) && current2.ref === workInProgress2.ref) {
          return bailoutOnAlreadyFinishedWork(current2, workInProgress2, renderLanes2);
        }
      }
      workInProgress2.flags |= PerformedWork;
      var newChild = createWorkInProgress(currentChild, nextProps);
      newChild.ref = workInProgress2.ref;
      newChild.return = workInProgress2;
      workInProgress2.child = newChild;
      return newChild;
    }
    function updateSimpleMemoComponent(current2, workInProgress2, Component3, nextProps, renderLanes2) {
      {
        if (workInProgress2.type !== workInProgress2.elementType) {
          var outerMemoType = workInProgress2.elementType;
          if (outerMemoType.$$typeof === REACT_LAZY_TYPE) {
            var lazyComponent = outerMemoType;
            var payload = lazyComponent._payload;
            var init = lazyComponent._init;
            try {
              outerMemoType = init(payload);
            } catch (x) {
              outerMemoType = null;
            }
            var outerPropTypes = outerMemoType && outerMemoType.propTypes;
            if (outerPropTypes) {
              checkPropTypes(
                outerPropTypes,
                nextProps,
                // Resolved (SimpleMemoComponent has no defaultProps)
                "prop",
                getComponentNameFromType(outerMemoType)
              );
            }
          }
        }
      }
      if (current2 !== null) {
        var prevProps = current2.memoizedProps;
        if (shallowEqual(prevProps, nextProps) && current2.ref === workInProgress2.ref && // Prevent bailout if the implementation changed due to hot reload.
        workInProgress2.type === current2.type) {
          didReceiveUpdate = false;
          if (!checkScheduledUpdateOrContext(current2, renderLanes2)) {
            workInProgress2.lanes = current2.lanes;
            return bailoutOnAlreadyFinishedWork(current2, workInProgress2, renderLanes2);
          } else if ((current2.flags & ForceUpdateForLegacySuspense) !== NoFlags) {
            didReceiveUpdate = true;
          }
        }
      }
      return updateFunctionComponent(current2, workInProgress2, Component3, nextProps, renderLanes2);
    }
    function updateOffscreenComponent(current2, workInProgress2, renderLanes2) {
      var nextProps = workInProgress2.pendingProps;
      var nextChildren = nextProps.children;
      var prevState = current2 !== null ? current2.memoizedState : null;
      if (nextProps.mode === "hidden" || enableLegacyHidden) {
        if ((workInProgress2.mode & ConcurrentMode) === NoMode) {
          var nextState = {
            baseLanes: NoLanes,
            cachePool: null
          };
          workInProgress2.memoizedState = nextState;
          pushRenderLanes(workInProgress2, renderLanes2);
        } else if (!includesSomeLane(renderLanes2, OffscreenLane)) {
          var spawnedCachePool = null;
          var nextBaseLanes;
          if (prevState !== null) {
            var prevBaseLanes = prevState.baseLanes;
            nextBaseLanes = mergeLanes(prevBaseLanes, renderLanes2);
          } else {
            nextBaseLanes = renderLanes2;
          }
          workInProgress2.lanes = workInProgress2.childLanes = laneToLanes(OffscreenLane);
          var _nextState = {
            baseLanes: nextBaseLanes,
            cachePool: spawnedCachePool
          };
          workInProgress2.memoizedState = _nextState;
          workInProgress2.updateQueue = null;
          pushRenderLanes(workInProgress2, nextBaseLanes);
          return null;
        } else {
          var _nextState2 = {
            baseLanes: NoLanes,
            cachePool: null
          };
          workInProgress2.memoizedState = _nextState2;
          var subtreeRenderLanes2 = prevState !== null ? prevState.baseLanes : renderLanes2;
          pushRenderLanes(workInProgress2, subtreeRenderLanes2);
        }
      } else {
        var _subtreeRenderLanes;
        if (prevState !== null) {
          _subtreeRenderLanes = mergeLanes(prevState.baseLanes, renderLanes2);
          workInProgress2.memoizedState = null;
        } else {
          _subtreeRenderLanes = renderLanes2;
        }
        pushRenderLanes(workInProgress2, _subtreeRenderLanes);
      }
      {
        reconcileChildren(current2, workInProgress2, nextChildren, renderLanes2);
        return workInProgress2.child;
      }
    }
    function updateFragment(current2, workInProgress2, renderLanes2) {
      var nextChildren = workInProgress2.pendingProps;
      reconcileChildren(current2, workInProgress2, nextChildren, renderLanes2);
      return workInProgress2.child;
    }
    function updateMode(current2, workInProgress2, renderLanes2) {
      var nextChildren = workInProgress2.pendingProps.children;
      reconcileChildren(current2, workInProgress2, nextChildren, renderLanes2);
      return workInProgress2.child;
    }
    function updateProfiler(current2, workInProgress2, renderLanes2) {
      {
        workInProgress2.flags |= Update;
        {
          var stateNode = workInProgress2.stateNode;
          stateNode.effectDuration = 0;
          stateNode.passiveEffectDuration = 0;
        }
      }
      var nextProps = workInProgress2.pendingProps;
      var nextChildren = nextProps.children;
      reconcileChildren(current2, workInProgress2, nextChildren, renderLanes2);
      return workInProgress2.child;
    }
    function markRef$1(current2, workInProgress2) {
      var ref = workInProgress2.ref;
      if (current2 === null && ref !== null || current2 !== null && current2.ref !== ref) {
        workInProgress2.flags |= Ref;
        {
          workInProgress2.flags |= RefStatic;
        }
      }
    }
    function updateFunctionComponent(current2, workInProgress2, Component3, nextProps, renderLanes2) {
      {
        if (workInProgress2.type !== workInProgress2.elementType) {
          var innerPropTypes = Component3.propTypes;
          if (innerPropTypes) {
            checkPropTypes(
              innerPropTypes,
              nextProps,
              // Resolved props
              "prop",
              getComponentNameFromType(Component3)
            );
          }
        }
      }
      var context2;
      {
        var unmaskedContext = getUnmaskedContext(workInProgress2, Component3, true);
        context2 = getMaskedContext(workInProgress2, unmaskedContext);
      }
      var nextChildren;
      var hasId;
      prepareToReadContext(workInProgress2, renderLanes2);
      {
        markComponentRenderStarted(workInProgress2);
      }
      {
        ReactCurrentOwner$1.current = workInProgress2;
        setIsRendering(true);
        nextChildren = renderWithHooks(current2, workInProgress2, Component3, nextProps, context2, renderLanes2);
        hasId = checkDidRenderIdHook();
        if (workInProgress2.mode & StrictLegacyMode) {
          setIsStrictModeForDevtools(true);
          try {
            nextChildren = renderWithHooks(current2, workInProgress2, Component3, nextProps, context2, renderLanes2);
            hasId = checkDidRenderIdHook();
          } finally {
            setIsStrictModeForDevtools(false);
          }
        }
        setIsRendering(false);
      }
      {
        markComponentRenderStopped();
      }
      if (current2 !== null && !didReceiveUpdate) {
        bailoutHooks(current2, workInProgress2, renderLanes2);
        return bailoutOnAlreadyFinishedWork(current2, workInProgress2, renderLanes2);
      }
      if (getIsHydrating() && hasId) {
        pushMaterializedTreeId(workInProgress2);
      }
      workInProgress2.flags |= PerformedWork;
      reconcileChildren(current2, workInProgress2, nextChildren, renderLanes2);
      return workInProgress2.child;
    }
    function updateClassComponent(current2, workInProgress2, Component3, nextProps, renderLanes2) {
      {
        switch (shouldError(workInProgress2)) {
          case false: {
            var _instance = workInProgress2.stateNode;
            var ctor = workInProgress2.type;
            var tempInstance = new ctor(workInProgress2.memoizedProps, _instance.context);
            var state = tempInstance.state;
            _instance.updater.enqueueSetState(_instance, state, null);
            break;
          }
          case true: {
            workInProgress2.flags |= DidCapture;
            workInProgress2.flags |= ShouldCapture;
            var error$1 = new Error("Simulated error coming from DevTools");
            var lane = pickArbitraryLane(renderLanes2);
            workInProgress2.lanes = mergeLanes(workInProgress2.lanes, lane);
            var update = createClassErrorUpdate(workInProgress2, createCapturedValue(error$1, workInProgress2), lane);
            enqueueCapturedUpdate(workInProgress2, update);
            break;
          }
        }
        if (workInProgress2.type !== workInProgress2.elementType) {
          var innerPropTypes = Component3.propTypes;
          if (innerPropTypes) {
            checkPropTypes(
              innerPropTypes,
              nextProps,
              // Resolved props
              "prop",
              getComponentNameFromType(Component3)
            );
          }
        }
      }
      var hasContext;
      if (isContextProvider(Component3)) {
        hasContext = true;
        pushContextProvider(workInProgress2);
      } else {
        hasContext = false;
      }
      prepareToReadContext(workInProgress2, renderLanes2);
      var instance = workInProgress2.stateNode;
      var shouldUpdate;
      if (instance === null) {
        if (current2 !== null) {
          current2.alternate = null;
          workInProgress2.alternate = null;
          workInProgress2.flags |= Placement;
        }
        constructClassInstance(workInProgress2, Component3, nextProps);
        mountClassInstance(workInProgress2, Component3, nextProps, renderLanes2);
        shouldUpdate = true;
      } else if (current2 === null) {
        shouldUpdate = resumeMountClassInstance(workInProgress2, Component3, nextProps, renderLanes2);
      } else {
        shouldUpdate = updateClassInstance(current2, workInProgress2, Component3, nextProps, renderLanes2);
      }
      var nextUnitOfWork = finishClassComponent(current2, workInProgress2, Component3, shouldUpdate, hasContext, renderLanes2);
      {
        var inst = workInProgress2.stateNode;
        if (shouldUpdate && inst.props !== nextProps) {
          if (!didWarnAboutReassigningProps) {
            error2("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", getComponentNameFromFiber(workInProgress2) || "a component");
          }
          didWarnAboutReassigningProps = true;
        }
      }
      return nextUnitOfWork;
    }
    function finishClassComponent(current2, workInProgress2, Component3, shouldUpdate, hasContext, renderLanes2) {
      markRef$1(current2, workInProgress2);
      var didCaptureError = (workInProgress2.flags & DidCapture) !== NoFlags;
      if (!shouldUpdate && !didCaptureError) {
        if (hasContext) {
          invalidateContextProvider(workInProgress2, Component3, false);
        }
        return bailoutOnAlreadyFinishedWork(current2, workInProgress2, renderLanes2);
      }
      var instance = workInProgress2.stateNode;
      ReactCurrentOwner$1.current = workInProgress2;
      var nextChildren;
      if (didCaptureError && typeof Component3.getDerivedStateFromError !== "function") {
        nextChildren = null;
        {
          stopProfilerTimerIfRunning();
        }
      } else {
        {
          markComponentRenderStarted(workInProgress2);
        }
        {
          setIsRendering(true);
          nextChildren = instance.render();
          if (workInProgress2.mode & StrictLegacyMode) {
            setIsStrictModeForDevtools(true);
            try {
              instance.render();
            } finally {
              setIsStrictModeForDevtools(false);
            }
          }
          setIsRendering(false);
        }
        {
          markComponentRenderStopped();
        }
      }
      workInProgress2.flags |= PerformedWork;
      if (current2 !== null && didCaptureError) {
        forceUnmountCurrentAndReconcile(current2, workInProgress2, nextChildren, renderLanes2);
      } else {
        reconcileChildren(current2, workInProgress2, nextChildren, renderLanes2);
      }
      workInProgress2.memoizedState = instance.state;
      if (hasContext) {
        invalidateContextProvider(workInProgress2, Component3, true);
      }
      return workInProgress2.child;
    }
    function pushHostRootContext(workInProgress2) {
      var root = workInProgress2.stateNode;
      if (root.pendingContext) {
        pushTopLevelContextObject(workInProgress2, root.pendingContext, root.pendingContext !== root.context);
      } else if (root.context) {
        pushTopLevelContextObject(workInProgress2, root.context, false);
      }
      pushHostContainer(workInProgress2, root.containerInfo);
    }
    function updateHostRoot(current2, workInProgress2, renderLanes2) {
      pushHostRootContext(workInProgress2);
      if (current2 === null) {
        throw new Error("Should have a current fiber. This is a bug in React.");
      }
      var nextProps = workInProgress2.pendingProps;
      var prevState = workInProgress2.memoizedState;
      var prevChildren = prevState.element;
      cloneUpdateQueue(current2, workInProgress2);
      processUpdateQueue(workInProgress2, nextProps, null, renderLanes2);
      var nextState = workInProgress2.memoizedState;
      var root = workInProgress2.stateNode;
      var nextChildren = nextState.element;
      if (supportsHydration && prevState.isDehydrated) {
        var overrideState = {
          element: nextChildren,
          isDehydrated: false,
          cache: nextState.cache,
          transitions: nextState.transitions
        };
        var updateQueue = workInProgress2.updateQueue;
        updateQueue.baseState = overrideState;
        workInProgress2.memoizedState = overrideState;
        if (workInProgress2.flags & ForceClientRender) {
          var recoverableError = new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering.");
          return mountHostRootWithoutHydrating(current2, workInProgress2, nextChildren, renderLanes2, recoverableError);
        } else if (nextChildren !== prevChildren) {
          var _recoverableError = new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering.");
          return mountHostRootWithoutHydrating(current2, workInProgress2, nextChildren, renderLanes2, _recoverableError);
        } else {
          enterHydrationState(workInProgress2);
          var child = mountChildFibers(workInProgress2, null, nextChildren, renderLanes2);
          workInProgress2.child = child;
          var node = child;
          while (node) {
            node.flags = node.flags & ~Placement | Hydrating;
            node = node.sibling;
          }
        }
      } else {
        resetHydrationState();
        if (nextChildren === prevChildren) {
          return bailoutOnAlreadyFinishedWork(current2, workInProgress2, renderLanes2);
        }
        reconcileChildren(current2, workInProgress2, nextChildren, renderLanes2);
      }
      return workInProgress2.child;
    }
    function mountHostRootWithoutHydrating(current2, workInProgress2, nextChildren, renderLanes2, recoverableError) {
      resetHydrationState();
      queueHydrationError(recoverableError);
      workInProgress2.flags |= ForceClientRender;
      reconcileChildren(current2, workInProgress2, nextChildren, renderLanes2);
      return workInProgress2.child;
    }
    function updateHostComponent$1(current2, workInProgress2, renderLanes2) {
      pushHostContext(workInProgress2);
      if (current2 === null) {
        tryToClaimNextHydratableInstance(workInProgress2);
      }
      var type = workInProgress2.type;
      var nextProps = workInProgress2.pendingProps;
      var prevProps = current2 !== null ? current2.memoizedProps : null;
      var nextChildren = nextProps.children;
      var isDirectTextChild = shouldSetTextContent(type, nextProps);
      if (isDirectTextChild) {
        nextChildren = null;
      } else if (prevProps !== null && shouldSetTextContent(type, prevProps)) {
        workInProgress2.flags |= ContentReset;
      }
      markRef$1(current2, workInProgress2);
      reconcileChildren(current2, workInProgress2, nextChildren, renderLanes2);
      return workInProgress2.child;
    }
    function updateHostText$1(current2, workInProgress2) {
      if (current2 === null) {
        tryToClaimNextHydratableInstance(workInProgress2);
      }
      return null;
    }
    function mountLazyComponent(_current, workInProgress2, elementType, renderLanes2) {
      if (_current !== null) {
        _current.alternate = null;
        workInProgress2.alternate = null;
        workInProgress2.flags |= Placement;
      }
      var props = workInProgress2.pendingProps;
      var lazyComponent = elementType;
      var payload = lazyComponent._payload;
      var init = lazyComponent._init;
      var Component3 = init(payload);
      workInProgress2.type = Component3;
      var resolvedTag = workInProgress2.tag = resolveLazyComponentTag(Component3);
      var resolvedProps = resolveDefaultProps(Component3, props);
      var child;
      switch (resolvedTag) {
        case FunctionComponent: {
          {
            validateFunctionComponentInDev(workInProgress2, Component3);
            workInProgress2.type = Component3 = resolveFunctionForHotReloading(Component3);
          }
          child = updateFunctionComponent(null, workInProgress2, Component3, resolvedProps, renderLanes2);
          return child;
        }
        case ClassComponent: {
          {
            workInProgress2.type = Component3 = resolveClassForHotReloading(Component3);
          }
          child = updateClassComponent(null, workInProgress2, Component3, resolvedProps, renderLanes2);
          return child;
        }
        case ForwardRef: {
          {
            workInProgress2.type = Component3 = resolveForwardRefForHotReloading(Component3);
          }
          child = updateForwardRef(null, workInProgress2, Component3, resolvedProps, renderLanes2);
          return child;
        }
        case MemoComponent: {
          {
            if (workInProgress2.type !== workInProgress2.elementType) {
              var outerPropTypes = Component3.propTypes;
              if (outerPropTypes) {
                checkPropTypes(
                  outerPropTypes,
                  resolvedProps,
                  // Resolved for outer only
                  "prop",
                  getComponentNameFromType(Component3)
                );
              }
            }
          }
          child = updateMemoComponent(
            null,
            workInProgress2,
            Component3,
            resolveDefaultProps(Component3.type, resolvedProps),
            // The inner type can have defaults too
            renderLanes2
          );
          return child;
        }
      }
      var hint = "";
      {
        if (Component3 !== null && typeof Component3 === "object" && Component3.$$typeof === REACT_LAZY_TYPE) {
          hint = " Did you wrap a component in React.lazy() more than once?";
        }
      }
      throw new Error("Element type is invalid. Received a promise that resolves to: " + Component3 + ". " + ("Lazy element type must resolve to a class or function." + hint));
    }
    function mountIncompleteClassComponent(_current, workInProgress2, Component3, nextProps, renderLanes2) {
      if (_current !== null) {
        _current.alternate = null;
        workInProgress2.alternate = null;
        workInProgress2.flags |= Placement;
      }
      workInProgress2.tag = ClassComponent;
      var hasContext;
      if (isContextProvider(Component3)) {
        hasContext = true;
        pushContextProvider(workInProgress2);
      } else {
        hasContext = false;
      }
      prepareToReadContext(workInProgress2, renderLanes2);
      constructClassInstance(workInProgress2, Component3, nextProps);
      mountClassInstance(workInProgress2, Component3, nextProps, renderLanes2);
      return finishClassComponent(null, workInProgress2, Component3, true, hasContext, renderLanes2);
    }
    function mountIndeterminateComponent(_current, workInProgress2, Component3, renderLanes2) {
      if (_current !== null) {
        _current.alternate = null;
        workInProgress2.alternate = null;
        workInProgress2.flags |= Placement;
      }
      var props = workInProgress2.pendingProps;
      var context2;
      {
        var unmaskedContext = getUnmaskedContext(workInProgress2, Component3, false);
        context2 = getMaskedContext(workInProgress2, unmaskedContext);
      }
      prepareToReadContext(workInProgress2, renderLanes2);
      var value;
      var hasId;
      {
        markComponentRenderStarted(workInProgress2);
      }
      {
        if (Component3.prototype && typeof Component3.prototype.render === "function") {
          var componentName = getComponentNameFromType(Component3) || "Unknown";
          if (!didWarnAboutBadClass[componentName]) {
            error2("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", componentName, componentName);
            didWarnAboutBadClass[componentName] = true;
          }
        }
        if (workInProgress2.mode & StrictLegacyMode) {
          ReactStrictModeWarnings.recordLegacyContextWarning(workInProgress2, null);
        }
        setIsRendering(true);
        ReactCurrentOwner$1.current = workInProgress2;
        value = renderWithHooks(null, workInProgress2, Component3, props, context2, renderLanes2);
        hasId = checkDidRenderIdHook();
        setIsRendering(false);
      }
      {
        markComponentRenderStopped();
      }
      workInProgress2.flags |= PerformedWork;
      {
        if (typeof value === "object" && value !== null && typeof value.render === "function" && value.$$typeof === void 0) {
          var _componentName = getComponentNameFromType(Component3) || "Unknown";
          if (!didWarnAboutModulePatternComponent[_componentName]) {
            error2("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", _componentName, _componentName, _componentName);
            didWarnAboutModulePatternComponent[_componentName] = true;
          }
        }
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof value === "object" && value !== null && typeof value.render === "function" && value.$$typeof === void 0
      ) {
        {
          var _componentName2 = getComponentNameFromType(Component3) || "Unknown";
          if (!didWarnAboutModulePatternComponent[_componentName2]) {
            error2("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", _componentName2, _componentName2, _componentName2);
            didWarnAboutModulePatternComponent[_componentName2] = true;
          }
        }
        workInProgress2.tag = ClassComponent;
        workInProgress2.memoizedState = null;
        workInProgress2.updateQueue = null;
        var hasContext = false;
        if (isContextProvider(Component3)) {
          hasContext = true;
          pushContextProvider(workInProgress2);
        } else {
          hasContext = false;
        }
        workInProgress2.memoizedState = value.state !== null && value.state !== void 0 ? value.state : null;
        initializeUpdateQueue(workInProgress2);
        adoptClassInstance(workInProgress2, value);
        mountClassInstance(workInProgress2, Component3, props, renderLanes2);
        return finishClassComponent(null, workInProgress2, Component3, true, hasContext, renderLanes2);
      } else {
        workInProgress2.tag = FunctionComponent;
        {
          if (workInProgress2.mode & StrictLegacyMode) {
            setIsStrictModeForDevtools(true);
            try {
              value = renderWithHooks(null, workInProgress2, Component3, props, context2, renderLanes2);
              hasId = checkDidRenderIdHook();
            } finally {
              setIsStrictModeForDevtools(false);
            }
          }
        }
        if (getIsHydrating() && hasId) {
          pushMaterializedTreeId(workInProgress2);
        }
        reconcileChildren(null, workInProgress2, value, renderLanes2);
        {
          validateFunctionComponentInDev(workInProgress2, Component3);
        }
        return workInProgress2.child;
      }
    }
    function validateFunctionComponentInDev(workInProgress2, Component3) {
      {
        if (Component3) {
          if (Component3.childContextTypes) {
            error2("%s(...): childContextTypes cannot be defined on a function component.", Component3.displayName || Component3.name || "Component");
          }
        }
        if (workInProgress2.ref !== null) {
          var info = "";
          var ownerName = getCurrentFiberOwnerNameInDevOrNull();
          if (ownerName) {
            info += "\n\nCheck the render method of `" + ownerName + "`.";
          }
          var warningKey = ownerName || "";
          var debugSource = workInProgress2._debugSource;
          if (debugSource) {
            warningKey = debugSource.fileName + ":" + debugSource.lineNumber;
          }
          if (!didWarnAboutFunctionRefs[warningKey]) {
            didWarnAboutFunctionRefs[warningKey] = true;
            error2("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", info);
          }
        }
        if (typeof Component3.getDerivedStateFromProps === "function") {
          var _componentName3 = getComponentNameFromType(Component3) || "Unknown";
          if (!didWarnAboutGetDerivedStateOnFunctionComponent[_componentName3]) {
            error2("%s: Function components do not support getDerivedStateFromProps.", _componentName3);
            didWarnAboutGetDerivedStateOnFunctionComponent[_componentName3] = true;
          }
        }
        if (typeof Component3.contextType === "object" && Component3.contextType !== null) {
          var _componentName4 = getComponentNameFromType(Component3) || "Unknown";
          if (!didWarnAboutContextTypeOnFunctionComponent[_componentName4]) {
            error2("%s: Function components do not support contextType.", _componentName4);
            didWarnAboutContextTypeOnFunctionComponent[_componentName4] = true;
          }
        }
      }
    }
    var SUSPENDED_MARKER = {
      dehydrated: null,
      treeContext: null,
      retryLane: NoLane
    };
    function mountSuspenseOffscreenState(renderLanes2) {
      return {
        baseLanes: renderLanes2,
        cachePool: getSuspendedCache()
      };
    }
    function updateSuspenseOffscreenState(prevOffscreenState, renderLanes2) {
      var cachePool = null;
      return {
        baseLanes: mergeLanes(prevOffscreenState.baseLanes, renderLanes2),
        cachePool
      };
    }
    function shouldRemainOnFallback(suspenseContext, current2, workInProgress2, renderLanes2) {
      if (current2 !== null) {
        var suspenseState = current2.memoizedState;
        if (suspenseState === null) {
          return false;
        }
      }
      return hasSuspenseContext(suspenseContext, ForceSuspenseFallback);
    }
    function getRemainingWorkInPrimaryTree(current2, renderLanes2) {
      return removeLanes(current2.childLanes, renderLanes2);
    }
    function updateSuspenseComponent(current2, workInProgress2, renderLanes2) {
      var nextProps = workInProgress2.pendingProps;
      {
        if (shouldSuspend(workInProgress2)) {
          workInProgress2.flags |= DidCapture;
        }
      }
      var suspenseContext = suspenseStackCursor.current;
      var showFallback = false;
      var didSuspend2 = (workInProgress2.flags & DidCapture) !== NoFlags;
      if (didSuspend2 || shouldRemainOnFallback(suspenseContext, current2)) {
        showFallback = true;
        workInProgress2.flags &= ~DidCapture;
      } else {
        if (current2 === null || current2.memoizedState !== null) {
          {
            suspenseContext = addSubtreeSuspenseContext(suspenseContext, InvisibleParentSuspenseContext);
          }
        }
      }
      suspenseContext = setDefaultShallowSuspenseContext(suspenseContext);
      pushSuspenseContext(workInProgress2, suspenseContext);
      if (current2 === null) {
        tryToClaimNextHydratableInstance(workInProgress2);
        {
          var suspenseState = workInProgress2.memoizedState;
          if (suspenseState !== null) {
            var dehydrated = suspenseState.dehydrated;
            if (dehydrated !== null) {
              return mountDehydratedSuspenseComponent(workInProgress2, dehydrated);
            }
          }
        }
        var nextPrimaryChildren = nextProps.children;
        var nextFallbackChildren = nextProps.fallback;
        if (showFallback) {
          var fallbackFragment = mountSuspenseFallbackChildren(workInProgress2, nextPrimaryChildren, nextFallbackChildren, renderLanes2);
          var primaryChildFragment = workInProgress2.child;
          primaryChildFragment.memoizedState = mountSuspenseOffscreenState(renderLanes2);
          workInProgress2.memoizedState = SUSPENDED_MARKER;
          return fallbackFragment;
        } else {
          return mountSuspensePrimaryChildren(workInProgress2, nextPrimaryChildren);
        }
      } else {
        var prevState = current2.memoizedState;
        if (prevState !== null) {
          {
            var _dehydrated = prevState.dehydrated;
            if (_dehydrated !== null) {
              if (!didSuspend2) {
                return updateDehydratedSuspenseComponent(current2, workInProgress2, _dehydrated, prevState, renderLanes2);
              } else if (workInProgress2.flags & ForceClientRender) {
                workInProgress2.flags &= ~ForceClientRender;
                return retrySuspenseComponentWithoutHydrating(current2, workInProgress2, renderLanes2, new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
              } else if (workInProgress2.memoizedState !== null) {
                workInProgress2.child = current2.child;
                workInProgress2.flags |= DidCapture;
                return null;
              } else {
                var _nextPrimaryChildren = nextProps.children;
                var _nextFallbackChildren = nextProps.fallback;
                var fallbackChildFragment = mountSuspenseFallbackAfterRetryWithoutHydrating(current2, workInProgress2, _nextPrimaryChildren, _nextFallbackChildren, renderLanes2);
                var _primaryChildFragment2 = workInProgress2.child;
                _primaryChildFragment2.memoizedState = mountSuspenseOffscreenState(renderLanes2);
                workInProgress2.memoizedState = SUSPENDED_MARKER;
                return fallbackChildFragment;
              }
            }
          }
          if (showFallback) {
            var _nextFallbackChildren2 = nextProps.fallback;
            var _nextPrimaryChildren2 = nextProps.children;
            var _fallbackChildFragment = updateSuspenseFallbackChildren(current2, workInProgress2, _nextPrimaryChildren2, _nextFallbackChildren2, renderLanes2);
            var _primaryChildFragment3 = workInProgress2.child;
            var prevOffscreenState = current2.child.memoizedState;
            _primaryChildFragment3.memoizedState = prevOffscreenState === null ? mountSuspenseOffscreenState(renderLanes2) : updateSuspenseOffscreenState(prevOffscreenState, renderLanes2);
            _primaryChildFragment3.childLanes = getRemainingWorkInPrimaryTree(current2, renderLanes2);
            workInProgress2.memoizedState = SUSPENDED_MARKER;
            return _fallbackChildFragment;
          } else {
            var _nextPrimaryChildren3 = nextProps.children;
            var _primaryChildFragment4 = updateSuspensePrimaryChildren(current2, workInProgress2, _nextPrimaryChildren3, renderLanes2);
            workInProgress2.memoizedState = null;
            return _primaryChildFragment4;
          }
        } else {
          if (showFallback) {
            var _nextFallbackChildren3 = nextProps.fallback;
            var _nextPrimaryChildren4 = nextProps.children;
            var _fallbackChildFragment2 = updateSuspenseFallbackChildren(current2, workInProgress2, _nextPrimaryChildren4, _nextFallbackChildren3, renderLanes2);
            var _primaryChildFragment5 = workInProgress2.child;
            var _prevOffscreenState = current2.child.memoizedState;
            _primaryChildFragment5.memoizedState = _prevOffscreenState === null ? mountSuspenseOffscreenState(renderLanes2) : updateSuspenseOffscreenState(_prevOffscreenState, renderLanes2);
            _primaryChildFragment5.childLanes = getRemainingWorkInPrimaryTree(current2, renderLanes2);
            workInProgress2.memoizedState = SUSPENDED_MARKER;
            return _fallbackChildFragment2;
          } else {
            var _nextPrimaryChildren5 = nextProps.children;
            var _primaryChildFragment6 = updateSuspensePrimaryChildren(current2, workInProgress2, _nextPrimaryChildren5, renderLanes2);
            workInProgress2.memoizedState = null;
            return _primaryChildFragment6;
          }
        }
      }
    }
    function mountSuspensePrimaryChildren(workInProgress2, primaryChildren, renderLanes2) {
      var mode = workInProgress2.mode;
      var primaryChildProps = {
        mode: "visible",
        children: primaryChildren
      };
      var primaryChildFragment = mountWorkInProgressOffscreenFiber(primaryChildProps, mode);
      primaryChildFragment.return = workInProgress2;
      workInProgress2.child = primaryChildFragment;
      return primaryChildFragment;
    }
    function mountSuspenseFallbackChildren(workInProgress2, primaryChildren, fallbackChildren, renderLanes2) {
      var mode = workInProgress2.mode;
      var progressedPrimaryFragment = workInProgress2.child;
      var primaryChildProps = {
        mode: "hidden",
        children: primaryChildren
      };
      var primaryChildFragment;
      var fallbackChildFragment;
      if ((mode & ConcurrentMode) === NoMode && progressedPrimaryFragment !== null) {
        primaryChildFragment = progressedPrimaryFragment;
        primaryChildFragment.childLanes = NoLanes;
        primaryChildFragment.pendingProps = primaryChildProps;
        if (workInProgress2.mode & ProfileMode) {
          primaryChildFragment.actualDuration = 0;
          primaryChildFragment.actualStartTime = -1;
          primaryChildFragment.selfBaseDuration = 0;
          primaryChildFragment.treeBaseDuration = 0;
        }
        fallbackChildFragment = createFiberFromFragment(fallbackChildren, mode, renderLanes2, null);
      } else {
        primaryChildFragment = mountWorkInProgressOffscreenFiber(primaryChildProps, mode);
        fallbackChildFragment = createFiberFromFragment(fallbackChildren, mode, renderLanes2, null);
      }
      primaryChildFragment.return = workInProgress2;
      fallbackChildFragment.return = workInProgress2;
      primaryChildFragment.sibling = fallbackChildFragment;
      workInProgress2.child = primaryChildFragment;
      return fallbackChildFragment;
    }
    function mountWorkInProgressOffscreenFiber(offscreenProps, mode, renderLanes2) {
      return createFiberFromOffscreen(offscreenProps, mode, NoLanes, null);
    }
    function updateWorkInProgressOffscreenFiber(current2, offscreenProps) {
      return createWorkInProgress(current2, offscreenProps);
    }
    function updateSuspensePrimaryChildren(current2, workInProgress2, primaryChildren, renderLanes2) {
      var currentPrimaryChildFragment = current2.child;
      var currentFallbackChildFragment = currentPrimaryChildFragment.sibling;
      var primaryChildFragment = updateWorkInProgressOffscreenFiber(currentPrimaryChildFragment, {
        mode: "visible",
        children: primaryChildren
      });
      if ((workInProgress2.mode & ConcurrentMode) === NoMode) {
        primaryChildFragment.lanes = renderLanes2;
      }
      primaryChildFragment.return = workInProgress2;
      primaryChildFragment.sibling = null;
      if (currentFallbackChildFragment !== null) {
        var deletions = workInProgress2.deletions;
        if (deletions === null) {
          workInProgress2.deletions = [currentFallbackChildFragment];
          workInProgress2.flags |= ChildDeletion;
        } else {
          deletions.push(currentFallbackChildFragment);
        }
      }
      workInProgress2.child = primaryChildFragment;
      return primaryChildFragment;
    }
    function updateSuspenseFallbackChildren(current2, workInProgress2, primaryChildren, fallbackChildren, renderLanes2) {
      var mode = workInProgress2.mode;
      var currentPrimaryChildFragment = current2.child;
      var currentFallbackChildFragment = currentPrimaryChildFragment.sibling;
      var primaryChildProps = {
        mode: "hidden",
        children: primaryChildren
      };
      var primaryChildFragment;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (mode & ConcurrentMode) === NoMode && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        workInProgress2.child !== currentPrimaryChildFragment
      ) {
        var progressedPrimaryFragment = workInProgress2.child;
        primaryChildFragment = progressedPrimaryFragment;
        primaryChildFragment.childLanes = NoLanes;
        primaryChildFragment.pendingProps = primaryChildProps;
        if (workInProgress2.mode & ProfileMode) {
          primaryChildFragment.actualDuration = 0;
          primaryChildFragment.actualStartTime = -1;
          primaryChildFragment.selfBaseDuration = currentPrimaryChildFragment.selfBaseDuration;
          primaryChildFragment.treeBaseDuration = currentPrimaryChildFragment.treeBaseDuration;
        }
        workInProgress2.deletions = null;
      } else {
        primaryChildFragment = updateWorkInProgressOffscreenFiber(currentPrimaryChildFragment, primaryChildProps);
        primaryChildFragment.subtreeFlags = currentPrimaryChildFragment.subtreeFlags & StaticMask;
      }
      var fallbackChildFragment;
      if (currentFallbackChildFragment !== null) {
        fallbackChildFragment = createWorkInProgress(currentFallbackChildFragment, fallbackChildren);
      } else {
        fallbackChildFragment = createFiberFromFragment(fallbackChildren, mode, renderLanes2, null);
        fallbackChildFragment.flags |= Placement;
      }
      fallbackChildFragment.return = workInProgress2;
      primaryChildFragment.return = workInProgress2;
      primaryChildFragment.sibling = fallbackChildFragment;
      workInProgress2.child = primaryChildFragment;
      return fallbackChildFragment;
    }
    function retrySuspenseComponentWithoutHydrating(current2, workInProgress2, renderLanes2, recoverableError) {
      if (recoverableError !== null) {
        queueHydrationError(recoverableError);
      }
      reconcileChildFibers(workInProgress2, current2.child, null, renderLanes2);
      var nextProps = workInProgress2.pendingProps;
      var primaryChildren = nextProps.children;
      var primaryChildFragment = mountSuspensePrimaryChildren(workInProgress2, primaryChildren);
      primaryChildFragment.flags |= Placement;
      workInProgress2.memoizedState = null;
      return primaryChildFragment;
    }
    function mountSuspenseFallbackAfterRetryWithoutHydrating(current2, workInProgress2, primaryChildren, fallbackChildren, renderLanes2) {
      var fiberMode = workInProgress2.mode;
      var primaryChildProps = {
        mode: "visible",
        children: primaryChildren
      };
      var primaryChildFragment = mountWorkInProgressOffscreenFiber(primaryChildProps, fiberMode);
      var fallbackChildFragment = createFiberFromFragment(fallbackChildren, fiberMode, renderLanes2, null);
      fallbackChildFragment.flags |= Placement;
      primaryChildFragment.return = workInProgress2;
      fallbackChildFragment.return = workInProgress2;
      primaryChildFragment.sibling = fallbackChildFragment;
      workInProgress2.child = primaryChildFragment;
      if ((workInProgress2.mode & ConcurrentMode) !== NoMode) {
        reconcileChildFibers(workInProgress2, current2.child, null, renderLanes2);
      }
      return fallbackChildFragment;
    }
    function mountDehydratedSuspenseComponent(workInProgress2, suspenseInstance, renderLanes2) {
      if ((workInProgress2.mode & ConcurrentMode) === NoMode) {
        {
          error2("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components.");
        }
        workInProgress2.lanes = laneToLanes(SyncLane);
      } else if (isSuspenseInstanceFallback(suspenseInstance)) {
        workInProgress2.lanes = laneToLanes(DefaultHydrationLane);
      } else {
        workInProgress2.lanes = laneToLanes(OffscreenLane);
      }
      return null;
    }
    function updateDehydratedSuspenseComponent(current2, workInProgress2, suspenseInstance, suspenseState, renderLanes2) {
      warnIfHydrating();
      if ((workInProgress2.mode & ConcurrentMode) === NoMode) {
        return retrySuspenseComponentWithoutHydrating(
          current2,
          workInProgress2,
          renderLanes2,
          // TODO: When we delete legacy mode, we should make this error argument
          // required — every concurrent mode path that causes hydration to
          // de-opt to client rendering should have an error message.
          null
        );
      }
      if (isSuspenseInstanceFallback(suspenseInstance)) {
        return retrySuspenseComponentWithoutHydrating(
          current2,
          workInProgress2,
          renderLanes2,
          // TODO: The server should serialize the error message so we can log it
          // here on the client. Or, in production, a hash/id that corresponds to
          // the error.
          new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.")
        );
      }
      var hasContextChanged2 = includesSomeLane(renderLanes2, current2.childLanes);
      if (didReceiveUpdate || hasContextChanged2) {
        var root = getWorkInProgressRoot();
        if (root !== null) {
          var attemptHydrationAtLane = getBumpedLaneForHydration(root, renderLanes2);
          if (attemptHydrationAtLane !== NoLane && attemptHydrationAtLane !== suspenseState.retryLane) {
            suspenseState.retryLane = attemptHydrationAtLane;
            var eventTime = NoTimestamp;
            scheduleUpdateOnFiber(current2, attemptHydrationAtLane, eventTime);
          }
        }
        renderDidSuspendDelayIfPossible();
        return retrySuspenseComponentWithoutHydrating(current2, workInProgress2, renderLanes2, new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
      } else if (isSuspenseInstancePending(suspenseInstance)) {
        workInProgress2.flags |= DidCapture;
        workInProgress2.child = current2.child;
        var retry = retryDehydratedSuspenseBoundary.bind(null, current2);
        registerSuspenseInstanceRetry(suspenseInstance, retry);
        return null;
      } else {
        reenterHydrationStateFromDehydratedSuspenseInstance(workInProgress2, suspenseInstance, suspenseState.treeContext);
        var nextProps = workInProgress2.pendingProps;
        var primaryChildren = nextProps.children;
        var primaryChildFragment = mountSuspensePrimaryChildren(workInProgress2, primaryChildren);
        primaryChildFragment.flags |= Hydrating;
        return primaryChildFragment;
      }
    }
    function scheduleSuspenseWorkOnFiber(fiber, renderLanes2, propagationRoot) {
      fiber.lanes = mergeLanes(fiber.lanes, renderLanes2);
      var alternate = fiber.alternate;
      if (alternate !== null) {
        alternate.lanes = mergeLanes(alternate.lanes, renderLanes2);
      }
      scheduleContextWorkOnParentPath(fiber.return, renderLanes2, propagationRoot);
    }
    function propagateSuspenseContextChange(workInProgress2, firstChild, renderLanes2) {
      var node = firstChild;
      while (node !== null) {
        if (node.tag === SuspenseComponent) {
          var state = node.memoizedState;
          if (state !== null) {
            scheduleSuspenseWorkOnFiber(node, renderLanes2, workInProgress2);
          }
        } else if (node.tag === SuspenseListComponent) {
          scheduleSuspenseWorkOnFiber(node, renderLanes2, workInProgress2);
        } else if (node.child !== null) {
          node.child.return = node;
          node = node.child;
          continue;
        }
        if (node === workInProgress2) {
          return;
        }
        while (node.sibling === null) {
          if (node.return === null || node.return === workInProgress2) {
            return;
          }
          node = node.return;
        }
        node.sibling.return = node.return;
        node = node.sibling;
      }
    }
    function findLastContentRow(firstChild) {
      var row = firstChild;
      var lastContentRow = null;
      while (row !== null) {
        var currentRow = row.alternate;
        if (currentRow !== null && findFirstSuspended(currentRow) === null) {
          lastContentRow = row;
        }
        row = row.sibling;
      }
      return lastContentRow;
    }
    function validateRevealOrder(revealOrder) {
      {
        if (revealOrder !== void 0 && revealOrder !== "forwards" && revealOrder !== "backwards" && revealOrder !== "together" && !didWarnAboutRevealOrder[revealOrder]) {
          didWarnAboutRevealOrder[revealOrder] = true;
          if (typeof revealOrder === "string") {
            switch (revealOrder.toLowerCase()) {
              case "together":
              case "forwards":
              case "backwards": {
                error2('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', revealOrder, revealOrder.toLowerCase());
                break;
              }
              case "forward":
              case "backward": {
                error2('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', revealOrder, revealOrder.toLowerCase());
                break;
              }
              default:
                error2('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', revealOrder);
                break;
            }
          } else {
            error2('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', revealOrder);
          }
        }
      }
    }
    function validateTailOptions(tailMode, revealOrder) {
      {
        if (tailMode !== void 0 && !didWarnAboutTailOptions[tailMode]) {
          if (tailMode !== "collapsed" && tailMode !== "hidden") {
            didWarnAboutTailOptions[tailMode] = true;
            error2('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', tailMode);
          } else if (revealOrder !== "forwards" && revealOrder !== "backwards") {
            didWarnAboutTailOptions[tailMode] = true;
            error2('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', tailMode);
          }
        }
      }
    }
    function validateSuspenseListNestedChild(childSlot, index2) {
      {
        var isAnArray = isArray(childSlot);
        var isIterable = !isAnArray && typeof getIteratorFn(childSlot) === "function";
        if (isAnArray || isIterable) {
          var type = isAnArray ? "array" : "iterable";
          error2("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", type, index2, type);
          return false;
        }
      }
      return true;
    }
    function validateSuspenseListChildren(children, revealOrder) {
      {
        if ((revealOrder === "forwards" || revealOrder === "backwards") && children !== void 0 && children !== null && children !== false) {
          if (isArray(children)) {
            for (var i2 = 0; i2 < children.length; i2++) {
              if (!validateSuspenseListNestedChild(children[i2], i2)) {
                return;
              }
            }
          } else {
            var iteratorFn = getIteratorFn(children);
            if (typeof iteratorFn === "function") {
              var childrenIterator = iteratorFn.call(children);
              if (childrenIterator) {
                var step = childrenIterator.next();
                var _i = 0;
                for (; !step.done; step = childrenIterator.next()) {
                  if (!validateSuspenseListNestedChild(step.value, _i)) {
                    return;
                  }
                  _i++;
                }
              }
            } else {
              error2('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', revealOrder);
            }
          }
        }
      }
    }
    function initSuspenseListRenderState(workInProgress2, isBackwards, tail, lastContentRow, tailMode) {
      var renderState = workInProgress2.memoizedState;
      if (renderState === null) {
        workInProgress2.memoizedState = {
          isBackwards,
          rendering: null,
          renderingStartTime: 0,
          last: lastContentRow,
          tail,
          tailMode
        };
      } else {
        renderState.isBackwards = isBackwards;
        renderState.rendering = null;
        renderState.renderingStartTime = 0;
        renderState.last = lastContentRow;
        renderState.tail = tail;
        renderState.tailMode = tailMode;
      }
    }
    function updateSuspenseListComponent(current2, workInProgress2, renderLanes2) {
      var nextProps = workInProgress2.pendingProps;
      var revealOrder = nextProps.revealOrder;
      var tailMode = nextProps.tail;
      var newChildren = nextProps.children;
      validateRevealOrder(revealOrder);
      validateTailOptions(tailMode, revealOrder);
      validateSuspenseListChildren(newChildren, revealOrder);
      reconcileChildren(current2, workInProgress2, newChildren, renderLanes2);
      var suspenseContext = suspenseStackCursor.current;
      var shouldForceFallback = hasSuspenseContext(suspenseContext, ForceSuspenseFallback);
      if (shouldForceFallback) {
        suspenseContext = setShallowSuspenseContext(suspenseContext, ForceSuspenseFallback);
        workInProgress2.flags |= DidCapture;
      } else {
        var didSuspendBefore = current2 !== null && (current2.flags & DidCapture) !== NoFlags;
        if (didSuspendBefore) {
          propagateSuspenseContextChange(workInProgress2, workInProgress2.child, renderLanes2);
        }
        suspenseContext = setDefaultShallowSuspenseContext(suspenseContext);
      }
      pushSuspenseContext(workInProgress2, suspenseContext);
      if ((workInProgress2.mode & ConcurrentMode) === NoMode) {
        workInProgress2.memoizedState = null;
      } else {
        switch (revealOrder) {
          case "forwards": {
            var lastContentRow = findLastContentRow(workInProgress2.child);
            var tail;
            if (lastContentRow === null) {
              tail = workInProgress2.child;
              workInProgress2.child = null;
            } else {
              tail = lastContentRow.sibling;
              lastContentRow.sibling = null;
            }
            initSuspenseListRenderState(
              workInProgress2,
              false,
              // isBackwards
              tail,
              lastContentRow,
              tailMode
            );
            break;
          }
          case "backwards": {
            var _tail = null;
            var row = workInProgress2.child;
            workInProgress2.child = null;
            while (row !== null) {
              var currentRow = row.alternate;
              if (currentRow !== null && findFirstSuspended(currentRow) === null) {
                workInProgress2.child = row;
                break;
              }
              var nextRow = row.sibling;
              row.sibling = _tail;
              _tail = row;
              row = nextRow;
            }
            initSuspenseListRenderState(
              workInProgress2,
              true,
              // isBackwards
              _tail,
              null,
              // last
              tailMode
            );
            break;
          }
          case "together": {
            initSuspenseListRenderState(
              workInProgress2,
              false,
              // isBackwards
              null,
              // tail
              null,
              // last
              void 0
            );
            break;
          }
          default: {
            workInProgress2.memoizedState = null;
          }
        }
      }
      return workInProgress2.child;
    }
    function updatePortalComponent(current2, workInProgress2, renderLanes2) {
      pushHostContainer(workInProgress2, workInProgress2.stateNode.containerInfo);
      var nextChildren = workInProgress2.pendingProps;
      if (current2 === null) {
        workInProgress2.child = reconcileChildFibers(workInProgress2, null, nextChildren, renderLanes2);
      } else {
        reconcileChildren(current2, workInProgress2, nextChildren, renderLanes2);
      }
      return workInProgress2.child;
    }
    var hasWarnedAboutUsingNoValuePropOnContextProvider = false;
    function updateContextProvider(current2, workInProgress2, renderLanes2) {
      var providerType = workInProgress2.type;
      var context2 = providerType._context;
      var newProps = workInProgress2.pendingProps;
      var oldProps = workInProgress2.memoizedProps;
      var newValue = newProps.value;
      {
        if (!("value" in newProps)) {
          if (!hasWarnedAboutUsingNoValuePropOnContextProvider) {
            hasWarnedAboutUsingNoValuePropOnContextProvider = true;
            error2("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?");
          }
        }
        var providerPropTypes = workInProgress2.type.propTypes;
        if (providerPropTypes) {
          checkPropTypes(providerPropTypes, newProps, "prop", "Context.Provider");
        }
      }
      pushProvider(workInProgress2, context2, newValue);
      {
        if (oldProps !== null) {
          var oldValue = oldProps.value;
          if (objectIs(oldValue, newValue)) {
            if (oldProps.children === newProps.children && !hasContextChanged()) {
              return bailoutOnAlreadyFinishedWork(current2, workInProgress2, renderLanes2);
            }
          } else {
            propagateContextChange(workInProgress2, context2, renderLanes2);
          }
        }
      }
      var newChildren = newProps.children;
      reconcileChildren(current2, workInProgress2, newChildren, renderLanes2);
      return workInProgress2.child;
    }
    var hasWarnedAboutUsingContextAsConsumer = false;
    function updateContextConsumer(current2, workInProgress2, renderLanes2) {
      var context2 = workInProgress2.type;
      {
        if (context2._context === void 0) {
          if (context2 !== context2.Consumer) {
            if (!hasWarnedAboutUsingContextAsConsumer) {
              hasWarnedAboutUsingContextAsConsumer = true;
              error2("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?");
            }
          }
        } else {
          context2 = context2._context;
        }
      }
      var newProps = workInProgress2.pendingProps;
      var render2 = newProps.children;
      {
        if (typeof render2 !== "function") {
          error2("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it.");
        }
      }
      prepareToReadContext(workInProgress2, renderLanes2);
      var newValue = readContext(context2);
      {
        markComponentRenderStarted(workInProgress2);
      }
      var newChildren;
      {
        ReactCurrentOwner$1.current = workInProgress2;
        setIsRendering(true);
        newChildren = render2(newValue);
        setIsRendering(false);
      }
      {
        markComponentRenderStopped();
      }
      workInProgress2.flags |= PerformedWork;
      reconcileChildren(current2, workInProgress2, newChildren, renderLanes2);
      return workInProgress2.child;
    }
    function markWorkInProgressReceivedUpdate() {
      didReceiveUpdate = true;
    }
    function bailoutOnAlreadyFinishedWork(current2, workInProgress2, renderLanes2) {
      if (current2 !== null) {
        workInProgress2.dependencies = current2.dependencies;
      }
      {
        stopProfilerTimerIfRunning();
      }
      markSkippedUpdateLanes(workInProgress2.lanes);
      if (!includesSomeLane(renderLanes2, workInProgress2.childLanes)) {
        {
          return null;
        }
      }
      cloneChildFibers(current2, workInProgress2);
      return workInProgress2.child;
    }
    function remountFiber(current2, oldWorkInProgress, newWorkInProgress) {
      {
        var returnFiber = oldWorkInProgress.return;
        if (returnFiber === null) {
          throw new Error("Cannot swap the root fiber.");
        }
        current2.alternate = null;
        oldWorkInProgress.alternate = null;
        newWorkInProgress.index = oldWorkInProgress.index;
        newWorkInProgress.sibling = oldWorkInProgress.sibling;
        newWorkInProgress.return = oldWorkInProgress.return;
        newWorkInProgress.ref = oldWorkInProgress.ref;
        if (oldWorkInProgress === returnFiber.child) {
          returnFiber.child = newWorkInProgress;
        } else {
          var prevSibling = returnFiber.child;
          if (prevSibling === null) {
            throw new Error("Expected parent to have a child.");
          }
          while (prevSibling.sibling !== oldWorkInProgress) {
            prevSibling = prevSibling.sibling;
            if (prevSibling === null) {
              throw new Error("Expected to find the previous sibling.");
            }
          }
          prevSibling.sibling = newWorkInProgress;
        }
        var deletions = returnFiber.deletions;
        if (deletions === null) {
          returnFiber.deletions = [current2];
          returnFiber.flags |= ChildDeletion;
        } else {
          deletions.push(current2);
        }
        newWorkInProgress.flags |= Placement;
        return newWorkInProgress;
      }
    }
    function checkScheduledUpdateOrContext(current2, renderLanes2) {
      var updateLanes = current2.lanes;
      if (includesSomeLane(updateLanes, renderLanes2)) {
        return true;
      }
      return false;
    }
    function attemptEarlyBailoutIfNoScheduledUpdate(current2, workInProgress2, renderLanes2) {
      switch (workInProgress2.tag) {
        case HostRoot:
          pushHostRootContext(workInProgress2);
          var root = workInProgress2.stateNode;
          resetHydrationState();
          break;
        case HostComponent:
          pushHostContext(workInProgress2);
          break;
        case ClassComponent: {
          var Component3 = workInProgress2.type;
          if (isContextProvider(Component3)) {
            pushContextProvider(workInProgress2);
          }
          break;
        }
        case HostPortal:
          pushHostContainer(workInProgress2, workInProgress2.stateNode.containerInfo);
          break;
        case ContextProvider: {
          var newValue = workInProgress2.memoizedProps.value;
          var context2 = workInProgress2.type._context;
          pushProvider(workInProgress2, context2, newValue);
          break;
        }
        case Profiler:
          {
            var hasChildWork = includesSomeLane(renderLanes2, workInProgress2.childLanes);
            if (hasChildWork) {
              workInProgress2.flags |= Update;
            }
            {
              var stateNode = workInProgress2.stateNode;
              stateNode.effectDuration = 0;
              stateNode.passiveEffectDuration = 0;
            }
          }
          break;
        case SuspenseComponent: {
          var state = workInProgress2.memoizedState;
          if (state !== null) {
            {
              if (state.dehydrated !== null) {
                pushSuspenseContext(workInProgress2, setDefaultShallowSuspenseContext(suspenseStackCursor.current));
                workInProgress2.flags |= DidCapture;
                return null;
              }
            }
            var primaryChildFragment = workInProgress2.child;
            var primaryChildLanes = primaryChildFragment.childLanes;
            if (includesSomeLane(renderLanes2, primaryChildLanes)) {
              return updateSuspenseComponent(current2, workInProgress2, renderLanes2);
            } else {
              pushSuspenseContext(workInProgress2, setDefaultShallowSuspenseContext(suspenseStackCursor.current));
              var child = bailoutOnAlreadyFinishedWork(current2, workInProgress2, renderLanes2);
              if (child !== null) {
                return child.sibling;
              } else {
                return null;
              }
            }
          } else {
            pushSuspenseContext(workInProgress2, setDefaultShallowSuspenseContext(suspenseStackCursor.current));
          }
          break;
        }
        case SuspenseListComponent: {
          var didSuspendBefore = (current2.flags & DidCapture) !== NoFlags;
          var _hasChildWork = includesSomeLane(renderLanes2, workInProgress2.childLanes);
          if (didSuspendBefore) {
            if (_hasChildWork) {
              return updateSuspenseListComponent(current2, workInProgress2, renderLanes2);
            }
            workInProgress2.flags |= DidCapture;
          }
          var renderState = workInProgress2.memoizedState;
          if (renderState !== null) {
            renderState.rendering = null;
            renderState.tail = null;
            renderState.lastEffect = null;
          }
          pushSuspenseContext(workInProgress2, suspenseStackCursor.current);
          if (_hasChildWork) {
            break;
          } else {
            return null;
          }
        }
        case OffscreenComponent:
        case LegacyHiddenComponent: {
          workInProgress2.lanes = NoLanes;
          return updateOffscreenComponent(current2, workInProgress2, renderLanes2);
        }
      }
      return bailoutOnAlreadyFinishedWork(current2, workInProgress2, renderLanes2);
    }
    function beginWork(current2, workInProgress2, renderLanes2) {
      {
        if (workInProgress2._debugNeedsRemount && current2 !== null) {
          return remountFiber(current2, workInProgress2, createFiberFromTypeAndProps(workInProgress2.type, workInProgress2.key, workInProgress2.pendingProps, workInProgress2._debugOwner || null, workInProgress2.mode, workInProgress2.lanes));
        }
      }
      if (current2 !== null) {
        var oldProps = current2.memoizedProps;
        var newProps = workInProgress2.pendingProps;
        if (oldProps !== newProps || hasContextChanged() || // Force a re-render if the implementation changed due to hot reload:
        workInProgress2.type !== current2.type) {
          didReceiveUpdate = true;
        } else {
          var hasScheduledUpdateOrContext = checkScheduledUpdateOrContext(current2, renderLanes2);
          if (!hasScheduledUpdateOrContext && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (workInProgress2.flags & DidCapture) === NoFlags) {
            didReceiveUpdate = false;
            return attemptEarlyBailoutIfNoScheduledUpdate(current2, workInProgress2, renderLanes2);
          }
          if ((current2.flags & ForceUpdateForLegacySuspense) !== NoFlags) {
            didReceiveUpdate = true;
          } else {
            didReceiveUpdate = false;
          }
        }
      } else {
        didReceiveUpdate = false;
        if (getIsHydrating() && isForkedChild(workInProgress2)) {
          var slotIndex = workInProgress2.index;
          var numberOfForks = getForksAtLevel();
          pushTreeId(workInProgress2, numberOfForks, slotIndex);
        }
      }
      workInProgress2.lanes = NoLanes;
      switch (workInProgress2.tag) {
        case IndeterminateComponent: {
          return mountIndeterminateComponent(current2, workInProgress2, workInProgress2.type, renderLanes2);
        }
        case LazyComponent: {
          var elementType = workInProgress2.elementType;
          return mountLazyComponent(current2, workInProgress2, elementType, renderLanes2);
        }
        case FunctionComponent: {
          var Component3 = workInProgress2.type;
          var unresolvedProps = workInProgress2.pendingProps;
          var resolvedProps = workInProgress2.elementType === Component3 ? unresolvedProps : resolveDefaultProps(Component3, unresolvedProps);
          return updateFunctionComponent(current2, workInProgress2, Component3, resolvedProps, renderLanes2);
        }
        case ClassComponent: {
          var _Component = workInProgress2.type;
          var _unresolvedProps = workInProgress2.pendingProps;
          var _resolvedProps = workInProgress2.elementType === _Component ? _unresolvedProps : resolveDefaultProps(_Component, _unresolvedProps);
          return updateClassComponent(current2, workInProgress2, _Component, _resolvedProps, renderLanes2);
        }
        case HostRoot:
          return updateHostRoot(current2, workInProgress2, renderLanes2);
        case HostComponent:
          return updateHostComponent$1(current2, workInProgress2, renderLanes2);
        case HostText:
          return updateHostText$1(current2, workInProgress2);
        case SuspenseComponent:
          return updateSuspenseComponent(current2, workInProgress2, renderLanes2);
        case HostPortal:
          return updatePortalComponent(current2, workInProgress2, renderLanes2);
        case ForwardRef: {
          var type = workInProgress2.type;
          var _unresolvedProps2 = workInProgress2.pendingProps;
          var _resolvedProps2 = workInProgress2.elementType === type ? _unresolvedProps2 : resolveDefaultProps(type, _unresolvedProps2);
          return updateForwardRef(current2, workInProgress2, type, _resolvedProps2, renderLanes2);
        }
        case Fragment2:
          return updateFragment(current2, workInProgress2, renderLanes2);
        case Mode:
          return updateMode(current2, workInProgress2, renderLanes2);
        case Profiler:
          return updateProfiler(current2, workInProgress2, renderLanes2);
        case ContextProvider:
          return updateContextProvider(current2, workInProgress2, renderLanes2);
        case ContextConsumer:
          return updateContextConsumer(current2, workInProgress2, renderLanes2);
        case MemoComponent: {
          var _type2 = workInProgress2.type;
          var _unresolvedProps3 = workInProgress2.pendingProps;
          var _resolvedProps3 = resolveDefaultProps(_type2, _unresolvedProps3);
          {
            if (workInProgress2.type !== workInProgress2.elementType) {
              var outerPropTypes = _type2.propTypes;
              if (outerPropTypes) {
                checkPropTypes(
                  outerPropTypes,
                  _resolvedProps3,
                  // Resolved for outer only
                  "prop",
                  getComponentNameFromType(_type2)
                );
              }
            }
          }
          _resolvedProps3 = resolveDefaultProps(_type2.type, _resolvedProps3);
          return updateMemoComponent(current2, workInProgress2, _type2, _resolvedProps3, renderLanes2);
        }
        case SimpleMemoComponent: {
          return updateSimpleMemoComponent(current2, workInProgress2, workInProgress2.type, workInProgress2.pendingProps, renderLanes2);
        }
        case IncompleteClassComponent: {
          var _Component2 = workInProgress2.type;
          var _unresolvedProps4 = workInProgress2.pendingProps;
          var _resolvedProps4 = workInProgress2.elementType === _Component2 ? _unresolvedProps4 : resolveDefaultProps(_Component2, _unresolvedProps4);
          return mountIncompleteClassComponent(current2, workInProgress2, _Component2, _resolvedProps4, renderLanes2);
        }
        case SuspenseListComponent: {
          return updateSuspenseListComponent(current2, workInProgress2, renderLanes2);
        }
        case ScopeComponent: {
          break;
        }
        case OffscreenComponent: {
          return updateOffscreenComponent(current2, workInProgress2, renderLanes2);
        }
      }
      throw new Error("Unknown unit of work tag (" + workInProgress2.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function unwindWork(current2, workInProgress2, renderLanes2) {
      popTreeContext(workInProgress2);
      switch (workInProgress2.tag) {
        case ClassComponent: {
          var Component3 = workInProgress2.type;
          if (isContextProvider(Component3)) {
            popContext(workInProgress2);
          }
          var flags = workInProgress2.flags;
          if (flags & ShouldCapture) {
            workInProgress2.flags = flags & ~ShouldCapture | DidCapture;
            if ((workInProgress2.mode & ProfileMode) !== NoMode) {
              transferActualDuration(workInProgress2);
            }
            return workInProgress2;
          }
          return null;
        }
        case HostRoot: {
          popHostContainer(workInProgress2);
          popTopLevelContextObject(workInProgress2);
          resetWorkInProgressVersions();
          var _flags = workInProgress2.flags;
          if ((_flags & ShouldCapture) !== NoFlags && (_flags & DidCapture) === NoFlags) {
            workInProgress2.flags = _flags & ~ShouldCapture | DidCapture;
            return workInProgress2;
          }
          return null;
        }
        case HostComponent: {
          popHostContext(workInProgress2);
          return null;
        }
        case SuspenseComponent: {
          popSuspenseContext(workInProgress2);
          {
            var suspenseState = workInProgress2.memoizedState;
            if (suspenseState !== null && suspenseState.dehydrated !== null) {
              if (workInProgress2.alternate === null) {
                throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
              }
              resetHydrationState();
            }
          }
          var _flags2 = workInProgress2.flags;
          if (_flags2 & ShouldCapture) {
            workInProgress2.flags = _flags2 & ~ShouldCapture | DidCapture;
            if ((workInProgress2.mode & ProfileMode) !== NoMode) {
              transferActualDuration(workInProgress2);
            }
            return workInProgress2;
          }
          return null;
        }
        case SuspenseListComponent: {
          popSuspenseContext(workInProgress2);
          return null;
        }
        case HostPortal:
          popHostContainer(workInProgress2);
          return null;
        case ContextProvider:
          var context2 = workInProgress2.type._context;
          popProvider(context2, workInProgress2);
          return null;
        case OffscreenComponent:
        case LegacyHiddenComponent:
          popRenderLanes(workInProgress2);
          return null;
        case CacheComponent:
          return null;
        default:
          return null;
      }
    }
    function unwindInterruptedWork(current2, interruptedWork, renderLanes2) {
      popTreeContext(interruptedWork);
      switch (interruptedWork.tag) {
        case ClassComponent: {
          var childContextTypes = interruptedWork.type.childContextTypes;
          if (childContextTypes !== null && childContextTypes !== void 0) {
            popContext(interruptedWork);
          }
          break;
        }
        case HostRoot: {
          popHostContainer(interruptedWork);
          popTopLevelContextObject(interruptedWork);
          resetWorkInProgressVersions();
          break;
        }
        case HostComponent: {
          popHostContext(interruptedWork);
          break;
        }
        case HostPortal:
          popHostContainer(interruptedWork);
          break;
        case SuspenseComponent:
          popSuspenseContext(interruptedWork);
          break;
        case SuspenseListComponent:
          popSuspenseContext(interruptedWork);
          break;
        case ContextProvider:
          var context2 = interruptedWork.type._context;
          popProvider(context2, interruptedWork);
          break;
        case OffscreenComponent:
        case LegacyHiddenComponent:
          popRenderLanes(interruptedWork);
          break;
      }
    }
    function invokeGuardedCallbackProd(name, func, context2, a, b, c, d, e, f2) {
      var funcArgs = Array.prototype.slice.call(arguments, 3);
      try {
        func.apply(context2, funcArgs);
      } catch (error3) {
        this.onError(error3);
      }
    }
    var invokeGuardedCallbackImpl = invokeGuardedCallbackProd;
    {
      if (typeof window !== "undefined" && typeof window.dispatchEvent === "function" && typeof document !== "undefined" && typeof document.createEvent === "function") {
        var fakeNode = document.createElement("react");
        invokeGuardedCallbackImpl = function invokeGuardedCallbackDev(name, func, context2, a, b, c, d, e, f2) {
          if (typeof document === "undefined" || document === null) {
            throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
          }
          var evt = document.createEvent("Event");
          var didCall = false;
          var didError = true;
          var windowEvent = window.event;
          var windowEventDescriptor = Object.getOwnPropertyDescriptor(window, "event");
          function restoreAfterDispatch() {
            fakeNode.removeEventListener(evtType, callCallback2, false);
            if (typeof window.event !== "undefined" && window.hasOwnProperty("event")) {
              window.event = windowEvent;
            }
          }
          var funcArgs = Array.prototype.slice.call(arguments, 3);
          function callCallback2() {
            didCall = true;
            restoreAfterDispatch();
            func.apply(context2, funcArgs);
            didError = false;
          }
          var error3;
          var didSetError = false;
          var isCrossOriginError = false;
          function handleWindowError(event) {
            error3 = event.error;
            didSetError = true;
            if (error3 === null && event.colno === 0 && event.lineno === 0) {
              isCrossOriginError = true;
            }
            if (event.defaultPrevented) {
              if (error3 != null && typeof error3 === "object") {
                try {
                  error3._suppressLogging = true;
                } catch (inner) {
                }
              }
            }
          }
          var evtType = "react-" + (name ? name : "invokeguardedcallback");
          window.addEventListener("error", handleWindowError);
          fakeNode.addEventListener(evtType, callCallback2, false);
          evt.initEvent(evtType, false, false);
          fakeNode.dispatchEvent(evt);
          if (windowEventDescriptor) {
            Object.defineProperty(window, "event", windowEventDescriptor);
          }
          if (didCall && didError) {
            if (!didSetError) {
              error3 = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`);
            } else if (isCrossOriginError) {
              error3 = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.");
            }
            this.onError(error3);
          }
          window.removeEventListener("error", handleWindowError);
          if (!didCall) {
            restoreAfterDispatch();
            return invokeGuardedCallbackProd.apply(this, arguments);
          }
        };
      }
    }
    var invokeGuardedCallbackImpl$1 = invokeGuardedCallbackImpl;
    var hasError = false;
    var caughtError = null;
    var reporter = {
      onError: function(error3) {
        hasError = true;
        caughtError = error3;
      }
    };
    function invokeGuardedCallback(name, func, context2, a, b, c, d, e, f2) {
      hasError = false;
      caughtError = null;
      invokeGuardedCallbackImpl$1.apply(reporter, arguments);
    }
    function hasCaughtError() {
      return hasError;
    }
    function clearCaughtError() {
      if (hasError) {
        var error3 = caughtError;
        hasError = false;
        caughtError = null;
        return error3;
      } else {
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var didWarnAboutUndefinedSnapshotBeforeUpdate = null;
    {
      didWarnAboutUndefinedSnapshotBeforeUpdate = /* @__PURE__ */ new Set();
    }
    var offscreenSubtreeIsHidden = false;
    var offscreenSubtreeWasHidden = false;
    var PossiblyWeakSet = typeof WeakSet === "function" ? WeakSet : Set;
    var nextEffect = null;
    var inProgressLanes = null;
    var inProgressRoot = null;
    function reportUncaughtErrorInDEV(error3) {
      {
        invokeGuardedCallback(null, function() {
          throw error3;
        });
        clearCaughtError();
      }
    }
    var callComponentWillUnmountWithTimer = function(current2, instance) {
      instance.props = current2.memoizedProps;
      instance.state = current2.memoizedState;
      if (current2.mode & ProfileMode) {
        try {
          startLayoutEffectTimer();
          instance.componentWillUnmount();
        } finally {
          recordLayoutEffectDuration(current2);
        }
      } else {
        instance.componentWillUnmount();
      }
    };
    function safelyCallCommitHookLayoutEffectListMount(current2, nearestMountedAncestor) {
      try {
        commitHookEffectListMount(Layout, current2);
      } catch (error3) {
        reportUncaughtErrorInDEV(error3);
        captureCommitPhaseError(current2, nearestMountedAncestor, error3);
      }
    }
    function safelyCallComponentWillUnmount(current2, nearestMountedAncestor, instance) {
      try {
        callComponentWillUnmountWithTimer(current2, instance);
      } catch (error3) {
        reportUncaughtErrorInDEV(error3);
        captureCommitPhaseError(current2, nearestMountedAncestor, error3);
      }
    }
    function safelyCallComponentDidMount(current2, nearestMountedAncestor, instance) {
      try {
        instance.componentDidMount();
      } catch (error3) {
        reportUncaughtErrorInDEV(error3);
        captureCommitPhaseError(current2, nearestMountedAncestor, error3);
      }
    }
    function safelyAttachRef(current2, nearestMountedAncestor) {
      try {
        commitAttachRef(current2);
      } catch (error3) {
        reportUncaughtErrorInDEV(error3);
        captureCommitPhaseError(current2, nearestMountedAncestor, error3);
      }
    }
    function safelyDetachRef(current2, nearestMountedAncestor) {
      var ref = current2.ref;
      if (ref !== null) {
        if (typeof ref === "function") {
          var retVal;
          try {
            if (enableProfilerTimer && enableProfilerCommitHooks && current2.mode & ProfileMode) {
              try {
                startLayoutEffectTimer();
                retVal = ref(null);
              } finally {
                recordLayoutEffectDuration(current2);
              }
            } else {
              retVal = ref(null);
            }
          } catch (error3) {
            reportUncaughtErrorInDEV(error3);
            captureCommitPhaseError(current2, nearestMountedAncestor, error3);
          }
          {
            if (typeof retVal === "function") {
              error2("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", getComponentNameFromFiber(current2));
            }
          }
        } else {
          ref.current = null;
        }
      }
    }
    function safelyCallDestroy(current2, nearestMountedAncestor, destroy) {
      try {
        destroy();
      } catch (error3) {
        reportUncaughtErrorInDEV(error3);
        captureCommitPhaseError(current2, nearestMountedAncestor, error3);
      }
    }
    var focusedInstanceHandle = null;
    var shouldFireAfterActiveInstanceBlur = false;
    function commitBeforeMutationEffects(root, firstChild) {
      focusedInstanceHandle = prepareForCommit(root.containerInfo);
      nextEffect = firstChild;
      commitBeforeMutationEffects_begin();
      var shouldFire = shouldFireAfterActiveInstanceBlur;
      shouldFireAfterActiveInstanceBlur = false;
      focusedInstanceHandle = null;
      return shouldFire;
    }
    function commitBeforeMutationEffects_begin() {
      while (nextEffect !== null) {
        var fiber = nextEffect;
        var child = fiber.child;
        if ((fiber.subtreeFlags & BeforeMutationMask) !== NoFlags && child !== null) {
          ensureCorrectReturnPointer(child, fiber);
          nextEffect = child;
        } else {
          commitBeforeMutationEffects_complete();
        }
      }
    }
    function commitBeforeMutationEffects_complete() {
      while (nextEffect !== null) {
        var fiber = nextEffect;
        setCurrentFiber(fiber);
        try {
          commitBeforeMutationEffectsOnFiber(fiber);
        } catch (error3) {
          reportUncaughtErrorInDEV(error3);
          captureCommitPhaseError(fiber, fiber.return, error3);
        }
        resetCurrentFiber();
        var sibling = fiber.sibling;
        if (sibling !== null) {
          ensureCorrectReturnPointer(sibling, fiber.return);
          nextEffect = sibling;
          return;
        }
        nextEffect = fiber.return;
      }
    }
    function commitBeforeMutationEffectsOnFiber(finishedWork) {
      var current2 = finishedWork.alternate;
      var flags = finishedWork.flags;
      if ((flags & Snapshot) !== NoFlags) {
        setCurrentFiber(finishedWork);
        switch (finishedWork.tag) {
          case FunctionComponent:
          case ForwardRef:
          case SimpleMemoComponent: {
            break;
          }
          case ClassComponent: {
            if (current2 !== null) {
              var prevProps = current2.memoizedProps;
              var prevState = current2.memoizedState;
              var instance = finishedWork.stateNode;
              {
                if (finishedWork.type === finishedWork.elementType && !didWarnAboutReassigningProps) {
                  if (instance.props !== finishedWork.memoizedProps) {
                    error2("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", getComponentNameFromFiber(finishedWork) || "instance");
                  }
                  if (instance.state !== finishedWork.memoizedState) {
                    error2("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", getComponentNameFromFiber(finishedWork) || "instance");
                  }
                }
              }
              var snapshot = instance.getSnapshotBeforeUpdate(finishedWork.elementType === finishedWork.type ? prevProps : resolveDefaultProps(finishedWork.type, prevProps), prevState);
              {
                var didWarnSet = didWarnAboutUndefinedSnapshotBeforeUpdate;
                if (snapshot === void 0 && !didWarnSet.has(finishedWork.type)) {
                  didWarnSet.add(finishedWork.type);
                  error2("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", getComponentNameFromFiber(finishedWork));
                }
              }
              instance.__reactInternalSnapshotBeforeUpdate = snapshot;
            }
            break;
          }
          case HostRoot: {
            if (supportsMutation) {
              var root = finishedWork.stateNode;
              clearContainer(root.containerInfo);
            }
            break;
          }
          case HostComponent:
          case HostText:
          case HostPortal:
          case IncompleteClassComponent:
            break;
          default: {
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
          }
        }
        resetCurrentFiber();
      }
    }
    function commitHookEffectListUnmount(flags, finishedWork, nearestMountedAncestor) {
      var updateQueue = finishedWork.updateQueue;
      var lastEffect = updateQueue !== null ? updateQueue.lastEffect : null;
      if (lastEffect !== null) {
        var firstEffect = lastEffect.next;
        var effect = firstEffect;
        do {
          if ((effect.tag & flags) === flags) {
            var destroy = effect.destroy;
            effect.destroy = void 0;
            if (destroy !== void 0) {
              {
                if ((flags & Passive$1) !== NoFlags$1) {
                  markComponentPassiveEffectUnmountStarted(finishedWork);
                } else if ((flags & Layout) !== NoFlags$1) {
                  markComponentLayoutEffectUnmountStarted(finishedWork);
                }
              }
              safelyCallDestroy(finishedWork, nearestMountedAncestor, destroy);
              {
                if ((flags & Passive$1) !== NoFlags$1) {
                  markComponentPassiveEffectUnmountStopped();
                } else if ((flags & Layout) !== NoFlags$1) {
                  markComponentLayoutEffectUnmountStopped();
                }
              }
            }
          }
          effect = effect.next;
        } while (effect !== firstEffect);
      }
    }
    function commitHookEffectListMount(flags, finishedWork) {
      var updateQueue = finishedWork.updateQueue;
      var lastEffect = updateQueue !== null ? updateQueue.lastEffect : null;
      if (lastEffect !== null) {
        var firstEffect = lastEffect.next;
        var effect = firstEffect;
        do {
          if ((effect.tag & flags) === flags) {
            {
              if ((flags & Passive$1) !== NoFlags$1) {
                markComponentPassiveEffectMountStarted(finishedWork);
              } else if ((flags & Layout) !== NoFlags$1) {
                markComponentLayoutEffectMountStarted(finishedWork);
              }
            }
            var create2 = effect.create;
            effect.destroy = create2();
            {
              if ((flags & Passive$1) !== NoFlags$1) {
                markComponentPassiveEffectMountStopped();
              } else if ((flags & Layout) !== NoFlags$1) {
                markComponentLayoutEffectMountStopped();
              }
            }
            {
              var destroy = effect.destroy;
              if (destroy !== void 0 && typeof destroy !== "function") {
                var hookName = void 0;
                if ((effect.tag & Layout) !== NoFlags) {
                  hookName = "useLayoutEffect";
                } else if ((effect.tag & Insertion) !== NoFlags) {
                  hookName = "useInsertionEffect";
                } else {
                  hookName = "useEffect";
                }
                var addendum = void 0;
                if (destroy === null) {
                  addendum = " You returned null. If your effect does not require clean up, return undefined (or nothing).";
                } else if (typeof destroy.then === "function") {
                  addendum = "\n\nIt looks like you wrote " + hookName + "(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:\n\n" + hookName + "(() => {\n  async function fetchData() {\n    // You can await here\n    const response = await MyAPI.getData(someId);\n    // ...\n  }\n  fetchData();\n}, [someId]); // Or [] if effect doesn't need props or state\n\nLearn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching";
                } else {
                  addendum = " You returned: " + destroy;
                }
                error2("%s must not return anything besides a function, which is used for clean-up.%s", hookName, addendum);
              }
            }
          }
          effect = effect.next;
        } while (effect !== firstEffect);
      }
    }
    function commitPassiveEffectDurations(finishedRoot, finishedWork) {
      {
        if ((finishedWork.flags & Update) !== NoFlags) {
          switch (finishedWork.tag) {
            case Profiler: {
              var passiveEffectDuration = finishedWork.stateNode.passiveEffectDuration;
              var _finishedWork$memoize = finishedWork.memoizedProps, id = _finishedWork$memoize.id, onPostCommit = _finishedWork$memoize.onPostCommit;
              var commitTime2 = getCommitTime();
              var phase = finishedWork.alternate === null ? "mount" : "update";
              {
                if (isCurrentUpdateNested()) {
                  phase = "nested-update";
                }
              }
              if (typeof onPostCommit === "function") {
                onPostCommit(id, phase, passiveEffectDuration, commitTime2);
              }
              var parentFiber = finishedWork.return;
              outer: while (parentFiber !== null) {
                switch (parentFiber.tag) {
                  case HostRoot:
                    var root = parentFiber.stateNode;
                    root.passiveEffectDuration += passiveEffectDuration;
                    break outer;
                  case Profiler:
                    var parentStateNode = parentFiber.stateNode;
                    parentStateNode.passiveEffectDuration += passiveEffectDuration;
                    break outer;
                }
                parentFiber = parentFiber.return;
              }
              break;
            }
          }
        }
      }
    }
    function commitLayoutEffectOnFiber(finishedRoot, current2, finishedWork, committedLanes) {
      if ((finishedWork.flags & LayoutMask) !== NoFlags) {
        switch (finishedWork.tag) {
          case FunctionComponent:
          case ForwardRef:
          case SimpleMemoComponent: {
            if (!offscreenSubtreeWasHidden) {
              if (finishedWork.mode & ProfileMode) {
                try {
                  startLayoutEffectTimer();
                  commitHookEffectListMount(Layout | HasEffect, finishedWork);
                } finally {
                  recordLayoutEffectDuration(finishedWork);
                }
              } else {
                commitHookEffectListMount(Layout | HasEffect, finishedWork);
              }
            }
            break;
          }
          case ClassComponent: {
            var instance = finishedWork.stateNode;
            if (finishedWork.flags & Update) {
              if (!offscreenSubtreeWasHidden) {
                if (current2 === null) {
                  {
                    if (finishedWork.type === finishedWork.elementType && !didWarnAboutReassigningProps) {
                      if (instance.props !== finishedWork.memoizedProps) {
                        error2("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", getComponentNameFromFiber(finishedWork) || "instance");
                      }
                      if (instance.state !== finishedWork.memoizedState) {
                        error2("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", getComponentNameFromFiber(finishedWork) || "instance");
                      }
                    }
                  }
                  if (finishedWork.mode & ProfileMode) {
                    try {
                      startLayoutEffectTimer();
                      instance.componentDidMount();
                    } finally {
                      recordLayoutEffectDuration(finishedWork);
                    }
                  } else {
                    instance.componentDidMount();
                  }
                } else {
                  var prevProps = finishedWork.elementType === finishedWork.type ? current2.memoizedProps : resolveDefaultProps(finishedWork.type, current2.memoizedProps);
                  var prevState = current2.memoizedState;
                  {
                    if (finishedWork.type === finishedWork.elementType && !didWarnAboutReassigningProps) {
                      if (instance.props !== finishedWork.memoizedProps) {
                        error2("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", getComponentNameFromFiber(finishedWork) || "instance");
                      }
                      if (instance.state !== finishedWork.memoizedState) {
                        error2("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", getComponentNameFromFiber(finishedWork) || "instance");
                      }
                    }
                  }
                  if (finishedWork.mode & ProfileMode) {
                    try {
                      startLayoutEffectTimer();
                      instance.componentDidUpdate(prevProps, prevState, instance.__reactInternalSnapshotBeforeUpdate);
                    } finally {
                      recordLayoutEffectDuration(finishedWork);
                    }
                  } else {
                    instance.componentDidUpdate(prevProps, prevState, instance.__reactInternalSnapshotBeforeUpdate);
                  }
                }
              }
            }
            var updateQueue = finishedWork.updateQueue;
            if (updateQueue !== null) {
              {
                if (finishedWork.type === finishedWork.elementType && !didWarnAboutReassigningProps) {
                  if (instance.props !== finishedWork.memoizedProps) {
                    error2("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", getComponentNameFromFiber(finishedWork) || "instance");
                  }
                  if (instance.state !== finishedWork.memoizedState) {
                    error2("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", getComponentNameFromFiber(finishedWork) || "instance");
                  }
                }
              }
              commitUpdateQueue(finishedWork, updateQueue, instance);
            }
            break;
          }
          case HostRoot: {
            var _updateQueue = finishedWork.updateQueue;
            if (_updateQueue !== null) {
              var _instance = null;
              if (finishedWork.child !== null) {
                switch (finishedWork.child.tag) {
                  case HostComponent:
                    _instance = getPublicInstance(finishedWork.child.stateNode);
                    break;
                  case ClassComponent:
                    _instance = finishedWork.child.stateNode;
                    break;
                }
              }
              commitUpdateQueue(finishedWork, _updateQueue, _instance);
            }
            break;
          }
          case HostComponent: {
            var _instance2 = finishedWork.stateNode;
            if (current2 === null && finishedWork.flags & Update) {
              var type = finishedWork.type;
              var props = finishedWork.memoizedProps;
              commitMount(_instance2, type, props, finishedWork);
            }
            break;
          }
          case HostText: {
            break;
          }
          case HostPortal: {
            break;
          }
          case Profiler: {
            {
              var _finishedWork$memoize2 = finishedWork.memoizedProps, onCommit = _finishedWork$memoize2.onCommit, onRender = _finishedWork$memoize2.onRender;
              var effectDuration = finishedWork.stateNode.effectDuration;
              var commitTime2 = getCommitTime();
              var phase = current2 === null ? "mount" : "update";
              {
                if (isCurrentUpdateNested()) {
                  phase = "nested-update";
                }
              }
              if (typeof onRender === "function") {
                onRender(finishedWork.memoizedProps.id, phase, finishedWork.actualDuration, finishedWork.treeBaseDuration, finishedWork.actualStartTime, commitTime2);
              }
              {
                if (typeof onCommit === "function") {
                  onCommit(finishedWork.memoizedProps.id, phase, effectDuration, commitTime2);
                }
                enqueuePendingPassiveProfilerEffect(finishedWork);
                var parentFiber = finishedWork.return;
                outer: while (parentFiber !== null) {
                  switch (parentFiber.tag) {
                    case HostRoot:
                      var root = parentFiber.stateNode;
                      root.effectDuration += effectDuration;
                      break outer;
                    case Profiler:
                      var parentStateNode = parentFiber.stateNode;
                      parentStateNode.effectDuration += effectDuration;
                      break outer;
                  }
                  parentFiber = parentFiber.return;
                }
              }
            }
            break;
          }
          case SuspenseComponent: {
            commitSuspenseHydrationCallbacks(finishedRoot, finishedWork);
            break;
          }
          case SuspenseListComponent:
          case IncompleteClassComponent:
          case ScopeComponent:
          case OffscreenComponent:
          case LegacyHiddenComponent: {
            break;
          }
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      }
      if (!offscreenSubtreeWasHidden) {
        {
          if (finishedWork.flags & Ref) {
            commitAttachRef(finishedWork);
          }
        }
      }
    }
    function reappearLayoutEffectsOnFiber(node) {
      switch (node.tag) {
        case FunctionComponent:
        case ForwardRef:
        case SimpleMemoComponent: {
          if (node.mode & ProfileMode) {
            try {
              startLayoutEffectTimer();
              safelyCallCommitHookLayoutEffectListMount(node, node.return);
            } finally {
              recordLayoutEffectDuration(node);
            }
          } else {
            safelyCallCommitHookLayoutEffectListMount(node, node.return);
          }
          break;
        }
        case ClassComponent: {
          var instance = node.stateNode;
          if (typeof instance.componentDidMount === "function") {
            safelyCallComponentDidMount(node, node.return, instance);
          }
          safelyAttachRef(node, node.return);
          break;
        }
        case HostComponent: {
          safelyAttachRef(node, node.return);
          break;
        }
      }
    }
    function hideOrUnhideAllChildren(finishedWork, isHidden) {
      var hostSubtreeRoot = null;
      if (supportsMutation) {
        var node = finishedWork;
        while (true) {
          if (node.tag === HostComponent) {
            if (hostSubtreeRoot === null) {
              hostSubtreeRoot = node;
              var instance = node.stateNode;
              if (isHidden) {
                hideInstance(instance);
              } else {
                unhideInstance(node.stateNode, node.memoizedProps);
              }
            }
          } else if (node.tag === HostText) {
            if (hostSubtreeRoot === null) {
              var _instance3 = node.stateNode;
              if (isHidden) {
                hideTextInstance(_instance3);
              } else {
                unhideTextInstance(_instance3, node.memoizedProps);
              }
            }
          } else if ((node.tag === OffscreenComponent || node.tag === LegacyHiddenComponent) && node.memoizedState !== null && node !== finishedWork) ;
          else if (node.child !== null) {
            node.child.return = node;
            node = node.child;
            continue;
          }
          if (node === finishedWork) {
            return;
          }
          while (node.sibling === null) {
            if (node.return === null || node.return === finishedWork) {
              return;
            }
            if (hostSubtreeRoot === node) {
              hostSubtreeRoot = null;
            }
            node = node.return;
          }
          if (hostSubtreeRoot === node) {
            hostSubtreeRoot = null;
          }
          node.sibling.return = node.return;
          node = node.sibling;
        }
      }
    }
    function commitAttachRef(finishedWork) {
      var ref = finishedWork.ref;
      if (ref !== null) {
        var instance = finishedWork.stateNode;
        var instanceToUse;
        switch (finishedWork.tag) {
          case HostComponent:
            instanceToUse = getPublicInstance(instance);
            break;
          default:
            instanceToUse = instance;
        }
        if (typeof ref === "function") {
          var retVal;
          if (finishedWork.mode & ProfileMode) {
            try {
              startLayoutEffectTimer();
              retVal = ref(instanceToUse);
            } finally {
              recordLayoutEffectDuration(finishedWork);
            }
          } else {
            retVal = ref(instanceToUse);
          }
          {
            if (typeof retVal === "function") {
              error2("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", getComponentNameFromFiber(finishedWork));
            }
          }
        } else {
          {
            if (!ref.hasOwnProperty("current")) {
              error2("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", getComponentNameFromFiber(finishedWork));
            }
          }
          ref.current = instanceToUse;
        }
      }
    }
    function commitDetachRef(current2) {
      var currentRef = current2.ref;
      if (currentRef !== null) {
        if (typeof currentRef === "function") {
          if (current2.mode & ProfileMode) {
            try {
              startLayoutEffectTimer();
              currentRef(null);
            } finally {
              recordLayoutEffectDuration(current2);
            }
          } else {
            currentRef(null);
          }
        } else {
          currentRef.current = null;
        }
      }
    }
    function commitUnmount(finishedRoot, current2, nearestMountedAncestor) {
      onCommitUnmount(current2);
      switch (current2.tag) {
        case FunctionComponent:
        case ForwardRef:
        case MemoComponent:
        case SimpleMemoComponent: {
          var updateQueue = current2.updateQueue;
          if (updateQueue !== null) {
            var lastEffect = updateQueue.lastEffect;
            if (lastEffect !== null) {
              var firstEffect = lastEffect.next;
              var effect = firstEffect;
              do {
                var _effect = effect, destroy = _effect.destroy, tag = _effect.tag;
                if (destroy !== void 0) {
                  if ((tag & Insertion) !== NoFlags$1) {
                    safelyCallDestroy(current2, nearestMountedAncestor, destroy);
                  } else if ((tag & Layout) !== NoFlags$1) {
                    {
                      markComponentLayoutEffectUnmountStarted(current2);
                    }
                    if (current2.mode & ProfileMode) {
                      startLayoutEffectTimer();
                      safelyCallDestroy(current2, nearestMountedAncestor, destroy);
                      recordLayoutEffectDuration(current2);
                    } else {
                      safelyCallDestroy(current2, nearestMountedAncestor, destroy);
                    }
                    {
                      markComponentLayoutEffectUnmountStopped();
                    }
                  }
                }
                effect = effect.next;
              } while (effect !== firstEffect);
            }
          }
          return;
        }
        case ClassComponent: {
          safelyDetachRef(current2, nearestMountedAncestor);
          var instance = current2.stateNode;
          if (typeof instance.componentWillUnmount === "function") {
            safelyCallComponentWillUnmount(current2, nearestMountedAncestor, instance);
          }
          return;
        }
        case HostComponent: {
          safelyDetachRef(current2, nearestMountedAncestor);
          return;
        }
        case HostPortal: {
          if (supportsMutation) {
            unmountHostComponents(finishedRoot, current2, nearestMountedAncestor);
          } else if (supportsPersistence) {
            emptyPortalContainer(current2);
          }
          return;
        }
        case DehydratedFragment: {
          return;
        }
        case ScopeComponent: {
          return;
        }
      }
    }
    function commitNestedUnmounts(finishedRoot, root, nearestMountedAncestor) {
      var node = root;
      while (true) {
        commitUnmount(finishedRoot, node, nearestMountedAncestor);
        if (node.child !== null && // If we use mutation we drill down into portals using commitUnmount above.
        // If we don't use mutation we drill down into portals here instead.
        (!supportsMutation || node.tag !== HostPortal)) {
          node.child.return = node;
          node = node.child;
          continue;
        }
        if (node === root) {
          return;
        }
        while (node.sibling === null) {
          if (node.return === null || node.return === root) {
            return;
          }
          node = node.return;
        }
        node.sibling.return = node.return;
        node = node.sibling;
      }
    }
    function detachFiberMutation(fiber) {
      var alternate = fiber.alternate;
      if (alternate !== null) {
        alternate.return = null;
      }
      fiber.return = null;
    }
    function detachFiberAfterEffects(fiber) {
      var alternate = fiber.alternate;
      if (alternate !== null) {
        fiber.alternate = null;
        detachFiberAfterEffects(alternate);
      }
      {
        fiber.child = null;
        fiber.deletions = null;
        fiber.sibling = null;
        if (fiber.tag === HostComponent) {
          var hostInstance = fiber.stateNode;
          if (hostInstance !== null) {
            detachDeletedInstance(hostInstance);
          }
        }
        fiber.stateNode = null;
        {
          fiber._debugOwner = null;
        }
        {
          fiber.return = null;
          fiber.dependencies = null;
          fiber.memoizedProps = null;
          fiber.memoizedState = null;
          fiber.pendingProps = null;
          fiber.stateNode = null;
          fiber.updateQueue = null;
        }
      }
    }
    function emptyPortalContainer(current2) {
      if (!supportsPersistence) {
        return;
      }
      var portal = current2.stateNode;
      var containerInfo = portal.containerInfo;
      var emptyChildSet = createContainerChildSet(containerInfo);
      replaceContainerChildren(containerInfo, emptyChildSet);
    }
    function commitContainer(finishedWork) {
      if (!supportsPersistence) {
        return;
      }
      switch (finishedWork.tag) {
        case ClassComponent:
        case HostComponent:
        case HostText: {
          return;
        }
        case HostRoot:
        case HostPortal: {
          var portalOrRoot = finishedWork.stateNode;
          var containerInfo = portalOrRoot.containerInfo, pendingChildren = portalOrRoot.pendingChildren;
          replaceContainerChildren(containerInfo, pendingChildren);
          return;
        }
      }
      throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
    }
    function getHostParentFiber(fiber) {
      var parent = fiber.return;
      while (parent !== null) {
        if (isHostParent(parent)) {
          return parent;
        }
        parent = parent.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function isHostParent(fiber) {
      return fiber.tag === HostComponent || fiber.tag === HostRoot || fiber.tag === HostPortal;
    }
    function getHostSibling(fiber) {
      var node = fiber;
      siblings: while (true) {
        while (node.sibling === null) {
          if (node.return === null || isHostParent(node.return)) {
            return null;
          }
          node = node.return;
        }
        node.sibling.return = node.return;
        node = node.sibling;
        while (node.tag !== HostComponent && node.tag !== HostText && node.tag !== DehydratedFragment) {
          if (node.flags & Placement) {
            continue siblings;
          }
          if (node.child === null || node.tag === HostPortal) {
            continue siblings;
          } else {
            node.child.return = node;
            node = node.child;
          }
        }
        if (!(node.flags & Placement)) {
          return node.stateNode;
        }
      }
    }
    function commitPlacement(finishedWork) {
      if (!supportsMutation) {
        return;
      }
      var parentFiber = getHostParentFiber(finishedWork);
      switch (parentFiber.tag) {
        case HostComponent: {
          var parent = parentFiber.stateNode;
          if (parentFiber.flags & ContentReset) {
            resetTextContent(parent);
            parentFiber.flags &= ~ContentReset;
          }
          var before = getHostSibling(finishedWork);
          insertOrAppendPlacementNode(finishedWork, before, parent);
          break;
        }
        case HostRoot:
        case HostPortal: {
          var _parent = parentFiber.stateNode.containerInfo;
          var _before = getHostSibling(finishedWork);
          insertOrAppendPlacementNodeIntoContainer(finishedWork, _before, _parent);
          break;
        }
        // eslint-disable-next-line-no-fallthrough
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function insertOrAppendPlacementNodeIntoContainer(node, before, parent) {
      var tag = node.tag;
      var isHost = tag === HostComponent || tag === HostText;
      if (isHost) {
        var stateNode = node.stateNode;
        if (before) {
          insertInContainerBefore(parent, stateNode, before);
        } else {
          appendChildToContainer(parent, stateNode);
        }
      } else if (tag === HostPortal) ;
      else {
        var child = node.child;
        if (child !== null) {
          insertOrAppendPlacementNodeIntoContainer(child, before, parent);
          var sibling = child.sibling;
          while (sibling !== null) {
            insertOrAppendPlacementNodeIntoContainer(sibling, before, parent);
            sibling = sibling.sibling;
          }
        }
      }
    }
    function insertOrAppendPlacementNode(node, before, parent) {
      var tag = node.tag;
      var isHost = tag === HostComponent || tag === HostText;
      if (isHost) {
        var stateNode = node.stateNode;
        if (before) {
          insertBefore(parent, stateNode, before);
        } else {
          appendChild(parent, stateNode);
        }
      } else if (tag === HostPortal) ;
      else {
        var child = node.child;
        if (child !== null) {
          insertOrAppendPlacementNode(child, before, parent);
          var sibling = child.sibling;
          while (sibling !== null) {
            insertOrAppendPlacementNode(sibling, before, parent);
            sibling = sibling.sibling;
          }
        }
      }
    }
    function unmountHostComponents(finishedRoot, current2, nearestMountedAncestor) {
      var node = current2;
      var currentParentIsValid = false;
      var currentParent;
      var currentParentIsContainer;
      while (true) {
        if (!currentParentIsValid) {
          var parent = node.return;
          findParent: while (true) {
            if (parent === null) {
              throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
            }
            var parentStateNode = parent.stateNode;
            switch (parent.tag) {
              case HostComponent:
                currentParent = parentStateNode;
                currentParentIsContainer = false;
                break findParent;
              case HostRoot:
                currentParent = parentStateNode.containerInfo;
                currentParentIsContainer = true;
                break findParent;
              case HostPortal:
                currentParent = parentStateNode.containerInfo;
                currentParentIsContainer = true;
                break findParent;
            }
            parent = parent.return;
          }
          currentParentIsValid = true;
        }
        if (node.tag === HostComponent || node.tag === HostText) {
          commitNestedUnmounts(finishedRoot, node, nearestMountedAncestor);
          if (currentParentIsContainer) {
            removeChildFromContainer(currentParent, node.stateNode);
          } else {
            removeChild(currentParent, node.stateNode);
          }
        } else if (node.tag === DehydratedFragment) {
          if (currentParentIsContainer) {
            clearSuspenseBoundaryFromContainer(currentParent, node.stateNode);
          } else {
            clearSuspenseBoundary(currentParent, node.stateNode);
          }
        } else if (node.tag === HostPortal) {
          if (node.child !== null) {
            currentParent = node.stateNode.containerInfo;
            currentParentIsContainer = true;
            node.child.return = node;
            node = node.child;
            continue;
          }
        } else {
          commitUnmount(finishedRoot, node, nearestMountedAncestor);
          if (node.child !== null) {
            node.child.return = node;
            node = node.child;
            continue;
          }
        }
        if (node === current2) {
          return;
        }
        while (node.sibling === null) {
          if (node.return === null || node.return === current2) {
            return;
          }
          node = node.return;
          if (node.tag === HostPortal) {
            currentParentIsValid = false;
          }
        }
        node.sibling.return = node.return;
        node = node.sibling;
      }
    }
    function commitDeletion(finishedRoot, current2, nearestMountedAncestor) {
      if (supportsMutation) {
        unmountHostComponents(finishedRoot, current2, nearestMountedAncestor);
      } else {
        commitNestedUnmounts(finishedRoot, current2, nearestMountedAncestor);
      }
      detachFiberMutation(current2);
    }
    function commitWork(current2, finishedWork) {
      if (!supportsMutation) {
        switch (finishedWork.tag) {
          case FunctionComponent:
          case ForwardRef:
          case MemoComponent:
          case SimpleMemoComponent: {
            commitHookEffectListUnmount(Insertion | HasEffect, finishedWork, finishedWork.return);
            commitHookEffectListMount(Insertion | HasEffect, finishedWork);
            if (finishedWork.mode & ProfileMode) {
              try {
                startLayoutEffectTimer();
                commitHookEffectListUnmount(Layout | HasEffect, finishedWork, finishedWork.return);
              } finally {
                recordLayoutEffectDuration(finishedWork);
              }
            } else {
              commitHookEffectListUnmount(Layout | HasEffect, finishedWork, finishedWork.return);
            }
            return;
          }
          case Profiler: {
            return;
          }
          case SuspenseComponent: {
            commitSuspenseCallback(finishedWork);
            attachSuspenseRetryListeners(finishedWork);
            return;
          }
          case SuspenseListComponent: {
            attachSuspenseRetryListeners(finishedWork);
            return;
          }
          case HostRoot: {
            if (supportsHydration) {
              if (current2 !== null) {
                var prevRootState = current2.memoizedState;
                if (prevRootState.isDehydrated) {
                  var root = finishedWork.stateNode;
                  commitHydratedContainer(root.containerInfo);
                }
              }
            }
            break;
          }
          case OffscreenComponent:
          case LegacyHiddenComponent: {
            return;
          }
        }
        commitContainer(finishedWork);
        return;
      }
      switch (finishedWork.tag) {
        case FunctionComponent:
        case ForwardRef:
        case MemoComponent:
        case SimpleMemoComponent: {
          commitHookEffectListUnmount(Insertion | HasEffect, finishedWork, finishedWork.return);
          commitHookEffectListMount(Insertion | HasEffect, finishedWork);
          if (finishedWork.mode & ProfileMode) {
            try {
              startLayoutEffectTimer();
              commitHookEffectListUnmount(Layout | HasEffect, finishedWork, finishedWork.return);
            } finally {
              recordLayoutEffectDuration(finishedWork);
            }
          } else {
            commitHookEffectListUnmount(Layout | HasEffect, finishedWork, finishedWork.return);
          }
          return;
        }
        case ClassComponent: {
          return;
        }
        case HostComponent: {
          var instance = finishedWork.stateNode;
          if (instance != null) {
            var newProps = finishedWork.memoizedProps;
            var oldProps = current2 !== null ? current2.memoizedProps : newProps;
            var type = finishedWork.type;
            var updatePayload = finishedWork.updateQueue;
            finishedWork.updateQueue = null;
            if (updatePayload !== null) {
              commitUpdate(instance, updatePayload, type, oldProps, newProps, finishedWork);
            }
          }
          return;
        }
        case HostText: {
          if (finishedWork.stateNode === null) {
            throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
          }
          var textInstance = finishedWork.stateNode;
          var newText = finishedWork.memoizedProps;
          var oldText = current2 !== null ? current2.memoizedProps : newText;
          commitTextUpdate(textInstance, oldText, newText);
          return;
        }
        case HostRoot: {
          if (supportsHydration) {
            if (current2 !== null) {
              var _prevRootState = current2.memoizedState;
              if (_prevRootState.isDehydrated) {
                var _root = finishedWork.stateNode;
                commitHydratedContainer(_root.containerInfo);
              }
            }
          }
          return;
        }
        case Profiler: {
          return;
        }
        case SuspenseComponent: {
          commitSuspenseCallback(finishedWork);
          attachSuspenseRetryListeners(finishedWork);
          return;
        }
        case SuspenseListComponent: {
          attachSuspenseRetryListeners(finishedWork);
          return;
        }
        case IncompleteClassComponent: {
          return;
        }
      }
      throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
    }
    function commitSuspenseCallback(finishedWork) {
      var newState = finishedWork.memoizedState;
    }
    function commitSuspenseHydrationCallbacks(finishedRoot, finishedWork) {
      if (!supportsHydration) {
        return;
      }
      var newState = finishedWork.memoizedState;
      if (newState === null) {
        var current2 = finishedWork.alternate;
        if (current2 !== null) {
          var prevState = current2.memoizedState;
          if (prevState !== null) {
            var suspenseInstance = prevState.dehydrated;
            if (suspenseInstance !== null) {
              commitHydratedSuspenseInstance(suspenseInstance);
            }
          }
        }
      }
    }
    function attachSuspenseRetryListeners(finishedWork) {
      var wakeables = finishedWork.updateQueue;
      if (wakeables !== null) {
        finishedWork.updateQueue = null;
        var retryCache = finishedWork.stateNode;
        if (retryCache === null) {
          retryCache = finishedWork.stateNode = new PossiblyWeakSet();
        }
        wakeables.forEach(function(wakeable) {
          var retry = resolveRetryWakeable.bind(null, finishedWork, wakeable);
          if (!retryCache.has(wakeable)) {
            retryCache.add(wakeable);
            {
              if (isDevToolsPresent) {
                if (inProgressLanes !== null && inProgressRoot !== null) {
                  restorePendingUpdaters(inProgressRoot, inProgressLanes);
                } else {
                  throw Error("Expected finished root and lanes to be set. This is a bug in React.");
                }
              }
            }
            wakeable.then(retry, retry);
          }
        });
      }
    }
    function commitResetTextContent(current2) {
      if (!supportsMutation) {
        return;
      }
      resetTextContent(current2.stateNode);
    }
    function commitMutationEffects(root, firstChild, committedLanes) {
      inProgressLanes = committedLanes;
      inProgressRoot = root;
      nextEffect = firstChild;
      commitMutationEffects_begin(root, committedLanes);
      inProgressLanes = null;
      inProgressRoot = null;
    }
    function commitMutationEffects_begin(root, lanes) {
      while (nextEffect !== null) {
        var fiber = nextEffect;
        var deletions = fiber.deletions;
        if (deletions !== null) {
          for (var i2 = 0; i2 < deletions.length; i2++) {
            var childToDelete = deletions[i2];
            try {
              commitDeletion(root, childToDelete, fiber);
            } catch (error3) {
              reportUncaughtErrorInDEV(error3);
              captureCommitPhaseError(childToDelete, fiber, error3);
            }
          }
        }
        var child = fiber.child;
        if ((fiber.subtreeFlags & MutationMask) !== NoFlags && child !== null) {
          ensureCorrectReturnPointer(child, fiber);
          nextEffect = child;
        } else {
          commitMutationEffects_complete(root, lanes);
        }
      }
    }
    function commitMutationEffects_complete(root, lanes) {
      while (nextEffect !== null) {
        var fiber = nextEffect;
        setCurrentFiber(fiber);
        try {
          commitMutationEffectsOnFiber(fiber, root, lanes);
        } catch (error3) {
          reportUncaughtErrorInDEV(error3);
          captureCommitPhaseError(fiber, fiber.return, error3);
        }
        resetCurrentFiber();
        var sibling = fiber.sibling;
        if (sibling !== null) {
          ensureCorrectReturnPointer(sibling, fiber.return);
          nextEffect = sibling;
          return;
        }
        nextEffect = fiber.return;
      }
    }
    function commitMutationEffectsOnFiber(finishedWork, root, lanes) {
      var flags = finishedWork.flags;
      if (flags & ContentReset) {
        commitResetTextContent(finishedWork);
      }
      if (flags & Ref) {
        var current2 = finishedWork.alternate;
        if (current2 !== null) {
          commitDetachRef(current2);
        }
      }
      if (flags & Visibility) {
        switch (finishedWork.tag) {
          case SuspenseComponent: {
            var newState = finishedWork.memoizedState;
            var isHidden = newState !== null;
            if (isHidden) {
              var _current = finishedWork.alternate;
              var wasHidden = _current !== null && _current.memoizedState !== null;
              if (!wasHidden) {
                markCommitTimeOfFallback();
              }
            }
            break;
          }
          case OffscreenComponent: {
            var _newState = finishedWork.memoizedState;
            var _isHidden = _newState !== null;
            var _current2 = finishedWork.alternate;
            var _wasHidden = _current2 !== null && _current2.memoizedState !== null;
            var offscreenBoundary = finishedWork;
            if (supportsMutation) {
              hideOrUnhideAllChildren(offscreenBoundary, _isHidden);
            }
            {
              if (_isHidden) {
                if (!_wasHidden) {
                  if ((offscreenBoundary.mode & ConcurrentMode) !== NoMode) {
                    nextEffect = offscreenBoundary;
                    var offscreenChild = offscreenBoundary.child;
                    while (offscreenChild !== null) {
                      nextEffect = offscreenChild;
                      disappearLayoutEffects_begin(offscreenChild);
                      offscreenChild = offscreenChild.sibling;
                    }
                  }
                }
              }
              break;
            }
          }
        }
      }
      var primaryFlags = flags & (Placement | Update | Hydrating);
      switch (primaryFlags) {
        case Placement: {
          commitPlacement(finishedWork);
          finishedWork.flags &= ~Placement;
          break;
        }
        case PlacementAndUpdate: {
          commitPlacement(finishedWork);
          finishedWork.flags &= ~Placement;
          var _current3 = finishedWork.alternate;
          commitWork(_current3, finishedWork);
          break;
        }
        case Hydrating: {
          finishedWork.flags &= ~Hydrating;
          break;
        }
        case HydratingAndUpdate: {
          finishedWork.flags &= ~Hydrating;
          var _current4 = finishedWork.alternate;
          commitWork(_current4, finishedWork);
          break;
        }
        case Update: {
          var _current5 = finishedWork.alternate;
          commitWork(_current5, finishedWork);
          break;
        }
      }
    }
    function commitLayoutEffects(finishedWork, root, committedLanes) {
      inProgressLanes = committedLanes;
      inProgressRoot = root;
      nextEffect = finishedWork;
      commitLayoutEffects_begin(finishedWork, root, committedLanes);
      inProgressLanes = null;
      inProgressRoot = null;
    }
    function commitLayoutEffects_begin(subtreeRoot, root, committedLanes) {
      var isModernRoot = (subtreeRoot.mode & ConcurrentMode) !== NoMode;
      while (nextEffect !== null) {
        var fiber = nextEffect;
        var firstChild = fiber.child;
        if (fiber.tag === OffscreenComponent && isModernRoot) {
          var isHidden = fiber.memoizedState !== null;
          var newOffscreenSubtreeIsHidden = isHidden || offscreenSubtreeIsHidden;
          if (newOffscreenSubtreeIsHidden) {
            commitLayoutMountEffects_complete(subtreeRoot, root, committedLanes);
            continue;
          } else {
            var current2 = fiber.alternate;
            var wasHidden = current2 !== null && current2.memoizedState !== null;
            var newOffscreenSubtreeWasHidden = wasHidden || offscreenSubtreeWasHidden;
            var prevOffscreenSubtreeIsHidden = offscreenSubtreeIsHidden;
            var prevOffscreenSubtreeWasHidden = offscreenSubtreeWasHidden;
            offscreenSubtreeIsHidden = newOffscreenSubtreeIsHidden;
            offscreenSubtreeWasHidden = newOffscreenSubtreeWasHidden;
            if (offscreenSubtreeWasHidden && !prevOffscreenSubtreeWasHidden) {
              nextEffect = fiber;
              reappearLayoutEffects_begin(fiber);
            }
            var child = firstChild;
            while (child !== null) {
              nextEffect = child;
              commitLayoutEffects_begin(
                child,
                // New root; bubble back up to here and stop.
                root,
                committedLanes
              );
              child = child.sibling;
            }
            nextEffect = fiber;
            offscreenSubtreeIsHidden = prevOffscreenSubtreeIsHidden;
            offscreenSubtreeWasHidden = prevOffscreenSubtreeWasHidden;
            commitLayoutMountEffects_complete(subtreeRoot, root, committedLanes);
            continue;
          }
        }
        if ((fiber.subtreeFlags & LayoutMask) !== NoFlags && firstChild !== null) {
          ensureCorrectReturnPointer(firstChild, fiber);
          nextEffect = firstChild;
        } else {
          commitLayoutMountEffects_complete(subtreeRoot, root, committedLanes);
        }
      }
    }
    function commitLayoutMountEffects_complete(subtreeRoot, root, committedLanes) {
      while (nextEffect !== null) {
        var fiber = nextEffect;
        if ((fiber.flags & LayoutMask) !== NoFlags) {
          var current2 = fiber.alternate;
          setCurrentFiber(fiber);
          try {
            commitLayoutEffectOnFiber(root, current2, fiber, committedLanes);
          } catch (error3) {
            reportUncaughtErrorInDEV(error3);
            captureCommitPhaseError(fiber, fiber.return, error3);
          }
          resetCurrentFiber();
        }
        if (fiber === subtreeRoot) {
          nextEffect = null;
          return;
        }
        var sibling = fiber.sibling;
        if (sibling !== null) {
          ensureCorrectReturnPointer(sibling, fiber.return);
          nextEffect = sibling;
          return;
        }
        nextEffect = fiber.return;
      }
    }
    function disappearLayoutEffects_begin(subtreeRoot) {
      while (nextEffect !== null) {
        var fiber = nextEffect;
        var firstChild = fiber.child;
        switch (fiber.tag) {
          case FunctionComponent:
          case ForwardRef:
          case MemoComponent:
          case SimpleMemoComponent: {
            if (fiber.mode & ProfileMode) {
              try {
                startLayoutEffectTimer();
                commitHookEffectListUnmount(Layout, fiber, fiber.return);
              } finally {
                recordLayoutEffectDuration(fiber);
              }
            } else {
              commitHookEffectListUnmount(Layout, fiber, fiber.return);
            }
            break;
          }
          case ClassComponent: {
            safelyDetachRef(fiber, fiber.return);
            var instance = fiber.stateNode;
            if (typeof instance.componentWillUnmount === "function") {
              safelyCallComponentWillUnmount(fiber, fiber.return, instance);
            }
            break;
          }
          case HostComponent: {
            safelyDetachRef(fiber, fiber.return);
            break;
          }
          case OffscreenComponent: {
            var isHidden = fiber.memoizedState !== null;
            if (isHidden) {
              disappearLayoutEffects_complete(subtreeRoot);
              continue;
            }
            break;
          }
        }
        if (firstChild !== null) {
          firstChild.return = fiber;
          nextEffect = firstChild;
        } else {
          disappearLayoutEffects_complete(subtreeRoot);
        }
      }
    }
    function disappearLayoutEffects_complete(subtreeRoot) {
      while (nextEffect !== null) {
        var fiber = nextEffect;
        if (fiber === subtreeRoot) {
          nextEffect = null;
          return;
        }
        var sibling = fiber.sibling;
        if (sibling !== null) {
          sibling.return = fiber.return;
          nextEffect = sibling;
          return;
        }
        nextEffect = fiber.return;
      }
    }
    function reappearLayoutEffects_begin(subtreeRoot) {
      while (nextEffect !== null) {
        var fiber = nextEffect;
        var firstChild = fiber.child;
        if (fiber.tag === OffscreenComponent) {
          var isHidden = fiber.memoizedState !== null;
          if (isHidden) {
            reappearLayoutEffects_complete(subtreeRoot);
            continue;
          }
        }
        if (firstChild !== null) {
          firstChild.return = fiber;
          nextEffect = firstChild;
        } else {
          reappearLayoutEffects_complete(subtreeRoot);
        }
      }
    }
    function reappearLayoutEffects_complete(subtreeRoot) {
      while (nextEffect !== null) {
        var fiber = nextEffect;
        setCurrentFiber(fiber);
        try {
          reappearLayoutEffectsOnFiber(fiber);
        } catch (error3) {
          reportUncaughtErrorInDEV(error3);
          captureCommitPhaseError(fiber, fiber.return, error3);
        }
        resetCurrentFiber();
        if (fiber === subtreeRoot) {
          nextEffect = null;
          return;
        }
        var sibling = fiber.sibling;
        if (sibling !== null) {
          sibling.return = fiber.return;
          nextEffect = sibling;
          return;
        }
        nextEffect = fiber.return;
      }
    }
    function commitPassiveMountEffects(root, finishedWork) {
      nextEffect = finishedWork;
      commitPassiveMountEffects_begin(finishedWork, root);
    }
    function commitPassiveMountEffects_begin(subtreeRoot, root) {
      while (nextEffect !== null) {
        var fiber = nextEffect;
        var firstChild = fiber.child;
        if ((fiber.subtreeFlags & PassiveMask) !== NoFlags && firstChild !== null) {
          ensureCorrectReturnPointer(firstChild, fiber);
          nextEffect = firstChild;
        } else {
          commitPassiveMountEffects_complete(subtreeRoot, root);
        }
      }
    }
    function commitPassiveMountEffects_complete(subtreeRoot, root) {
      while (nextEffect !== null) {
        var fiber = nextEffect;
        if ((fiber.flags & Passive) !== NoFlags) {
          setCurrentFiber(fiber);
          try {
            commitPassiveMountOnFiber(root, fiber);
          } catch (error3) {
            reportUncaughtErrorInDEV(error3);
            captureCommitPhaseError(fiber, fiber.return, error3);
          }
          resetCurrentFiber();
        }
        if (fiber === subtreeRoot) {
          nextEffect = null;
          return;
        }
        var sibling = fiber.sibling;
        if (sibling !== null) {
          ensureCorrectReturnPointer(sibling, fiber.return);
          nextEffect = sibling;
          return;
        }
        nextEffect = fiber.return;
      }
    }
    function commitPassiveMountOnFiber(finishedRoot, finishedWork) {
      switch (finishedWork.tag) {
        case FunctionComponent:
        case ForwardRef:
        case SimpleMemoComponent: {
          if (finishedWork.mode & ProfileMode) {
            startPassiveEffectTimer();
            try {
              commitHookEffectListMount(Passive$1 | HasEffect, finishedWork);
            } finally {
              recordPassiveEffectDuration(finishedWork);
            }
          } else {
            commitHookEffectListMount(Passive$1 | HasEffect, finishedWork);
          }
          break;
        }
      }
    }
    function commitPassiveUnmountEffects(firstChild) {
      nextEffect = firstChild;
      commitPassiveUnmountEffects_begin();
    }
    function commitPassiveUnmountEffects_begin() {
      while (nextEffect !== null) {
        var fiber = nextEffect;
        var child = fiber.child;
        if ((nextEffect.flags & ChildDeletion) !== NoFlags) {
          var deletions = fiber.deletions;
          if (deletions !== null) {
            for (var i2 = 0; i2 < deletions.length; i2++) {
              var fiberToDelete = deletions[i2];
              nextEffect = fiberToDelete;
              commitPassiveUnmountEffectsInsideOfDeletedTree_begin(fiberToDelete, fiber);
            }
            {
              var previousFiber = fiber.alternate;
              if (previousFiber !== null) {
                var detachedChild = previousFiber.child;
                if (detachedChild !== null) {
                  previousFiber.child = null;
                  do {
                    var detachedSibling = detachedChild.sibling;
                    detachedChild.sibling = null;
                    detachedChild = detachedSibling;
                  } while (detachedChild !== null);
                }
              }
            }
            nextEffect = fiber;
          }
        }
        if ((fiber.subtreeFlags & PassiveMask) !== NoFlags && child !== null) {
          ensureCorrectReturnPointer(child, fiber);
          nextEffect = child;
        } else {
          commitPassiveUnmountEffects_complete();
        }
      }
    }
    function commitPassiveUnmountEffects_complete() {
      while (nextEffect !== null) {
        var fiber = nextEffect;
        if ((fiber.flags & Passive) !== NoFlags) {
          setCurrentFiber(fiber);
          commitPassiveUnmountOnFiber(fiber);
          resetCurrentFiber();
        }
        var sibling = fiber.sibling;
        if (sibling !== null) {
          ensureCorrectReturnPointer(sibling, fiber.return);
          nextEffect = sibling;
          return;
        }
        nextEffect = fiber.return;
      }
    }
    function commitPassiveUnmountOnFiber(finishedWork) {
      switch (finishedWork.tag) {
        case FunctionComponent:
        case ForwardRef:
        case SimpleMemoComponent: {
          if (finishedWork.mode & ProfileMode) {
            startPassiveEffectTimer();
            commitHookEffectListUnmount(Passive$1 | HasEffect, finishedWork, finishedWork.return);
            recordPassiveEffectDuration(finishedWork);
          } else {
            commitHookEffectListUnmount(Passive$1 | HasEffect, finishedWork, finishedWork.return);
          }
          break;
        }
      }
    }
    function commitPassiveUnmountEffectsInsideOfDeletedTree_begin(deletedSubtreeRoot, nearestMountedAncestor) {
      while (nextEffect !== null) {
        var fiber = nextEffect;
        setCurrentFiber(fiber);
        commitPassiveUnmountInsideDeletedTreeOnFiber(fiber, nearestMountedAncestor);
        resetCurrentFiber();
        var child = fiber.child;
        if (child !== null) {
          ensureCorrectReturnPointer(child, fiber);
          nextEffect = child;
        } else {
          commitPassiveUnmountEffectsInsideOfDeletedTree_complete(deletedSubtreeRoot);
        }
      }
    }
    function commitPassiveUnmountEffectsInsideOfDeletedTree_complete(deletedSubtreeRoot) {
      while (nextEffect !== null) {
        var fiber = nextEffect;
        var sibling = fiber.sibling;
        var returnFiber = fiber.return;
        {
          detachFiberAfterEffects(fiber);
          if (fiber === deletedSubtreeRoot) {
            nextEffect = null;
            return;
          }
        }
        if (sibling !== null) {
          ensureCorrectReturnPointer(sibling, returnFiber);
          nextEffect = sibling;
          return;
        }
        nextEffect = returnFiber;
      }
    }
    function commitPassiveUnmountInsideDeletedTreeOnFiber(current2, nearestMountedAncestor) {
      switch (current2.tag) {
        case FunctionComponent:
        case ForwardRef:
        case SimpleMemoComponent: {
          if (current2.mode & ProfileMode) {
            startPassiveEffectTimer();
            commitHookEffectListUnmount(Passive$1, current2, nearestMountedAncestor);
            recordPassiveEffectDuration(current2);
          } else {
            commitHookEffectListUnmount(Passive$1, current2, nearestMountedAncestor);
          }
          break;
        }
      }
    }
    var didWarnWrongReturnPointer = false;
    function ensureCorrectReturnPointer(fiber, expectedReturnFiber) {
      {
        if (!didWarnWrongReturnPointer && fiber.return !== expectedReturnFiber) {
          didWarnWrongReturnPointer = true;
          error2("Internal React error: Return pointer is inconsistent with parent.");
        }
      }
      fiber.return = expectedReturnFiber;
    }
    function invokeLayoutEffectMountInDEV(fiber) {
      {
        switch (fiber.tag) {
          case FunctionComponent:
          case ForwardRef:
          case SimpleMemoComponent: {
            try {
              commitHookEffectListMount(Layout | HasEffect, fiber);
            } catch (error3) {
              reportUncaughtErrorInDEV(error3);
              captureCommitPhaseError(fiber, fiber.return, error3);
            }
            break;
          }
          case ClassComponent: {
            var instance = fiber.stateNode;
            try {
              instance.componentDidMount();
            } catch (error3) {
              reportUncaughtErrorInDEV(error3);
              captureCommitPhaseError(fiber, fiber.return, error3);
            }
            break;
          }
        }
      }
    }
    function invokePassiveEffectMountInDEV(fiber) {
      {
        switch (fiber.tag) {
          case FunctionComponent:
          case ForwardRef:
          case SimpleMemoComponent: {
            try {
              commitHookEffectListMount(Passive$1 | HasEffect, fiber);
            } catch (error3) {
              reportUncaughtErrorInDEV(error3);
              captureCommitPhaseError(fiber, fiber.return, error3);
            }
            break;
          }
        }
      }
    }
    function invokeLayoutEffectUnmountInDEV(fiber) {
      {
        switch (fiber.tag) {
          case FunctionComponent:
          case ForwardRef:
          case SimpleMemoComponent: {
            try {
              commitHookEffectListUnmount(Layout | HasEffect, fiber, fiber.return);
            } catch (error3) {
              reportUncaughtErrorInDEV(error3);
              captureCommitPhaseError(fiber, fiber.return, error3);
            }
            break;
          }
          case ClassComponent: {
            var instance = fiber.stateNode;
            if (typeof instance.componentWillUnmount === "function") {
              safelyCallComponentWillUnmount(fiber, fiber.return, instance);
            }
            break;
          }
        }
      }
    }
    function invokePassiveEffectUnmountInDEV(fiber) {
      {
        switch (fiber.tag) {
          case FunctionComponent:
          case ForwardRef:
          case SimpleMemoComponent: {
            try {
              commitHookEffectListUnmount(Passive$1 | HasEffect, fiber, fiber.return);
            } catch (error3) {
              reportUncaughtErrorInDEV(error3);
              captureCommitPhaseError(fiber, fiber.return, error3);
            }
          }
        }
      }
    }
    var COMPONENT_TYPE = 0;
    var HAS_PSEUDO_CLASS_TYPE = 1;
    var ROLE_TYPE = 2;
    var TEST_NAME_TYPE = 3;
    var TEXT_TYPE = 4;
    if (typeof Symbol === "function" && Symbol.for) {
      var symbolFor = Symbol.for;
      COMPONENT_TYPE = symbolFor("selector.component");
      HAS_PSEUDO_CLASS_TYPE = symbolFor("selector.has_pseudo_class");
      ROLE_TYPE = symbolFor("selector.role");
      TEST_NAME_TYPE = symbolFor("selector.test_id");
      TEXT_TYPE = symbolFor("selector.text");
    }
    function createComponentSelector(component) {
      return {
        $$typeof: COMPONENT_TYPE,
        value: component
      };
    }
    function createHasPseudoClassSelector(selectors) {
      return {
        $$typeof: HAS_PSEUDO_CLASS_TYPE,
        value: selectors
      };
    }
    function createRoleSelector(role) {
      return {
        $$typeof: ROLE_TYPE,
        value: role
      };
    }
    function createTextSelector(text) {
      return {
        $$typeof: TEXT_TYPE,
        value: text
      };
    }
    function createTestNameSelector(id) {
      return {
        $$typeof: TEST_NAME_TYPE,
        value: id
      };
    }
    function findFiberRootForHostRoot(hostRoot) {
      var maybeFiber = getInstanceFromNode(hostRoot);
      if (maybeFiber != null) {
        if (typeof maybeFiber.memoizedProps["data-testname"] !== "string") {
          throw new Error("Invalid host root specified. Should be either a React container or a node with a testname attribute.");
        }
        return maybeFiber;
      } else {
        var fiberRoot = findFiberRoot(hostRoot);
        if (fiberRoot === null) {
          throw new Error("Could not find React container within specified host subtree.");
        }
        return fiberRoot.stateNode.current;
      }
    }
    function matchSelector(fiber, selector) {
      switch (selector.$$typeof) {
        case COMPONENT_TYPE:
          if (fiber.type === selector.value) {
            return true;
          }
          break;
        case HAS_PSEUDO_CLASS_TYPE:
          return hasMatchingPaths(fiber, selector.value);
        case ROLE_TYPE:
          if (fiber.tag === HostComponent) {
            var node = fiber.stateNode;
            if (matchAccessibilityRole(node, selector.value)) {
              return true;
            }
          }
          break;
        case TEXT_TYPE:
          if (fiber.tag === HostComponent || fiber.tag === HostText) {
            var textContent = getTextContent(fiber);
            if (textContent !== null && textContent.indexOf(selector.value) >= 0) {
              return true;
            }
          }
          break;
        case TEST_NAME_TYPE:
          if (fiber.tag === HostComponent) {
            var dataTestID = fiber.memoizedProps["data-testname"];
            if (typeof dataTestID === "string" && dataTestID.toLowerCase() === selector.value.toLowerCase()) {
              return true;
            }
          }
          break;
        default:
          throw new Error("Invalid selector type specified.");
      }
      return false;
    }
    function selectorToString(selector) {
      switch (selector.$$typeof) {
        case COMPONENT_TYPE:
          var displayName = getComponentNameFromType(selector.value) || "Unknown";
          return "<" + displayName + ">";
        case HAS_PSEUDO_CLASS_TYPE:
          return ":has(" + (selectorToString(selector) || "") + ")";
        case ROLE_TYPE:
          return '[role="' + selector.value + '"]';
        case TEXT_TYPE:
          return '"' + selector.value + '"';
        case TEST_NAME_TYPE:
          return '[data-testname="' + selector.value + '"]';
        default:
          throw new Error("Invalid selector type specified.");
      }
    }
    function findPaths(root, selectors) {
      var matchingFibers = [];
      var stack = [root, 0];
      var index2 = 0;
      while (index2 < stack.length) {
        var fiber = stack[index2++];
        var selectorIndex = stack[index2++];
        var selector = selectors[selectorIndex];
        if (fiber.tag === HostComponent && isHiddenSubtree(fiber)) {
          continue;
        } else {
          while (selector != null && matchSelector(fiber, selector)) {
            selectorIndex++;
            selector = selectors[selectorIndex];
          }
        }
        if (selectorIndex === selectors.length) {
          matchingFibers.push(fiber);
        } else {
          var child = fiber.child;
          while (child !== null) {
            stack.push(child, selectorIndex);
            child = child.sibling;
          }
        }
      }
      return matchingFibers;
    }
    function hasMatchingPaths(root, selectors) {
      var stack = [root, 0];
      var index2 = 0;
      while (index2 < stack.length) {
        var fiber = stack[index2++];
        var selectorIndex = stack[index2++];
        var selector = selectors[selectorIndex];
        if (fiber.tag === HostComponent && isHiddenSubtree(fiber)) {
          continue;
        } else {
          while (selector != null && matchSelector(fiber, selector)) {
            selectorIndex++;
            selector = selectors[selectorIndex];
          }
        }
        if (selectorIndex === selectors.length) {
          return true;
        } else {
          var child = fiber.child;
          while (child !== null) {
            stack.push(child, selectorIndex);
            child = child.sibling;
          }
        }
      }
      return false;
    }
    function findAllNodes(hostRoot, selectors) {
      if (!supportsTestSelectors) {
        throw new Error("Test selector API is not supported by this renderer.");
      }
      var root = findFiberRootForHostRoot(hostRoot);
      var matchingFibers = findPaths(root, selectors);
      var instanceRoots = [];
      var stack = Array.from(matchingFibers);
      var index2 = 0;
      while (index2 < stack.length) {
        var node = stack[index2++];
        if (node.tag === HostComponent) {
          if (isHiddenSubtree(node)) {
            continue;
          }
          instanceRoots.push(node.stateNode);
        } else {
          var child = node.child;
          while (child !== null) {
            stack.push(child);
            child = child.sibling;
          }
        }
      }
      return instanceRoots;
    }
    function getFindAllNodesFailureDescription(hostRoot, selectors) {
      if (!supportsTestSelectors) {
        throw new Error("Test selector API is not supported by this renderer.");
      }
      var root = findFiberRootForHostRoot(hostRoot);
      var maxSelectorIndex = 0;
      var matchedNames = [];
      var stack = [root, 0];
      var index2 = 0;
      while (index2 < stack.length) {
        var fiber = stack[index2++];
        var selectorIndex = stack[index2++];
        var selector = selectors[selectorIndex];
        if (fiber.tag === HostComponent && isHiddenSubtree(fiber)) {
          continue;
        } else if (matchSelector(fiber, selector)) {
          matchedNames.push(selectorToString(selector));
          selectorIndex++;
          if (selectorIndex > maxSelectorIndex) {
            maxSelectorIndex = selectorIndex;
          }
        }
        if (selectorIndex < selectors.length) {
          var child = fiber.child;
          while (child !== null) {
            stack.push(child, selectorIndex);
            child = child.sibling;
          }
        }
      }
      if (maxSelectorIndex < selectors.length) {
        var unmatchedNames = [];
        for (var i2 = maxSelectorIndex; i2 < selectors.length; i2++) {
          unmatchedNames.push(selectorToString(selectors[i2]));
        }
        return "findAllNodes was able to match part of the selector:\n" + ("  " + matchedNames.join(" > ") + "\n\n") + "No matching component was found for:\n" + ("  " + unmatchedNames.join(" > "));
      }
      return null;
    }
    function findBoundingRects(hostRoot, selectors) {
      if (!supportsTestSelectors) {
        throw new Error("Test selector API is not supported by this renderer.");
      }
      var instanceRoots = findAllNodes(hostRoot, selectors);
      var boundingRects = [];
      for (var i2 = 0; i2 < instanceRoots.length; i2++) {
        boundingRects.push(getBoundingRect(instanceRoots[i2]));
      }
      for (var _i = boundingRects.length - 1; _i > 0; _i--) {
        var targetRect = boundingRects[_i];
        var targetLeft = targetRect.x;
        var targetRight = targetLeft + targetRect.width;
        var targetTop = targetRect.y;
        var targetBottom = targetTop + targetRect.height;
        for (var j2 = _i - 1; j2 >= 0; j2--) {
          if (_i !== j2) {
            var otherRect = boundingRects[j2];
            var otherLeft = otherRect.x;
            var otherRight = otherLeft + otherRect.width;
            var otherTop = otherRect.y;
            var otherBottom = otherTop + otherRect.height;
            if (targetLeft >= otherLeft && targetTop >= otherTop && targetRight <= otherRight && targetBottom <= otherBottom) {
              boundingRects.splice(_i, 1);
              break;
            } else if (targetLeft === otherLeft && targetRect.width === otherRect.width && !(otherBottom < targetTop) && !(otherTop > targetBottom)) {
              if (otherTop > targetTop) {
                otherRect.height += otherTop - targetTop;
                otherRect.y = targetTop;
              }
              if (otherBottom < targetBottom) {
                otherRect.height = targetBottom - otherTop;
              }
              boundingRects.splice(_i, 1);
              break;
            } else if (targetTop === otherTop && targetRect.height === otherRect.height && !(otherRight < targetLeft) && !(otherLeft > targetRight)) {
              if (otherLeft > targetLeft) {
                otherRect.width += otherLeft - targetLeft;
                otherRect.x = targetLeft;
              }
              if (otherRight < targetRight) {
                otherRect.width = targetRight - otherLeft;
              }
              boundingRects.splice(_i, 1);
              break;
            }
          }
        }
      }
      return boundingRects;
    }
    function focusWithin(hostRoot, selectors) {
      if (!supportsTestSelectors) {
        throw new Error("Test selector API is not supported by this renderer.");
      }
      var root = findFiberRootForHostRoot(hostRoot);
      var matchingFibers = findPaths(root, selectors);
      var stack = Array.from(matchingFibers);
      var index2 = 0;
      while (index2 < stack.length) {
        var fiber = stack[index2++];
        if (isHiddenSubtree(fiber)) {
          continue;
        }
        if (fiber.tag === HostComponent) {
          var node = fiber.stateNode;
          if (setFocusIfFocusable(node)) {
            return true;
          }
        }
        var child = fiber.child;
        while (child !== null) {
          stack.push(child);
          child = child.sibling;
        }
      }
      return false;
    }
    var commitHooks = [];
    function onCommitRoot$1() {
      if (supportsTestSelectors) {
        commitHooks.forEach(function(commitHook) {
          return commitHook();
        });
      }
    }
    function observeVisibleRects(hostRoot, selectors, callback, options) {
      if (!supportsTestSelectors) {
        throw new Error("Test selector API is not supported by this renderer.");
      }
      var instanceRoots = findAllNodes(hostRoot, selectors);
      var _setupIntersectionObs = setupIntersectionObserver(instanceRoots, callback, options), disconnect = _setupIntersectionObs.disconnect, observe = _setupIntersectionObs.observe, unobserve = _setupIntersectionObs.unobserve;
      var commitHook = function() {
        var nextInstanceRoots = findAllNodes(hostRoot, selectors);
        instanceRoots.forEach(function(target) {
          if (nextInstanceRoots.indexOf(target) < 0) {
            unobserve(target);
          }
        });
        nextInstanceRoots.forEach(function(target) {
          if (instanceRoots.indexOf(target) < 0) {
            observe(target);
          }
        });
      };
      commitHooks.push(commitHook);
      return {
        disconnect: function() {
          var index2 = commitHooks.indexOf(commitHook);
          if (index2 >= 0) {
            commitHooks.splice(index2, 1);
          }
          disconnect();
        }
      };
    }
    var ReactCurrentActQueue = ReactSharedInternals.ReactCurrentActQueue;
    function isLegacyActEnvironment(fiber) {
      {
        var isReactActEnvironmentGlobal = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT !== "undefined" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        var jestIsDefined = typeof jest !== "undefined";
        return warnsIfNotActing && jestIsDefined && isReactActEnvironmentGlobal !== false;
      }
    }
    function isConcurrentActEnvironment() {
      {
        var isReactActEnvironmentGlobal = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT !== "undefined" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        if (!isReactActEnvironmentGlobal && ReactCurrentActQueue.current !== null) {
          error2("The current testing environment is not configured to support act(...)");
        }
        return isReactActEnvironmentGlobal;
      }
    }
    var ceil = Math.ceil;
    var ReactCurrentDispatcher$2 = ReactSharedInternals.ReactCurrentDispatcher, ReactCurrentOwner$2 = ReactSharedInternals.ReactCurrentOwner, ReactCurrentBatchConfig$2 = ReactSharedInternals.ReactCurrentBatchConfig, ReactCurrentActQueue$1 = ReactSharedInternals.ReactCurrentActQueue;
    var NoContext = (
      /*             */
      0
    );
    var BatchedContext = (
      /*               */
      1
    );
    var RenderContext = (
      /*                */
      2
    );
    var CommitContext = (
      /*                */
      4
    );
    var RootInProgress = 0;
    var RootFatalErrored = 1;
    var RootErrored = 2;
    var RootSuspended = 3;
    var RootSuspendedWithDelay = 4;
    var RootCompleted = 5;
    var RootDidNotComplete = 6;
    var executionContext = NoContext;
    var workInProgressRoot = null;
    var workInProgress = null;
    var workInProgressRootRenderLanes = NoLanes;
    var subtreeRenderLanes = NoLanes;
    var subtreeRenderLanesCursor = createCursor(NoLanes);
    var workInProgressRootExitStatus = RootInProgress;
    var workInProgressRootFatalError = null;
    var workInProgressRootIncludedLanes = NoLanes;
    var workInProgressRootSkippedLanes = NoLanes;
    var workInProgressRootInterleavedUpdatedLanes = NoLanes;
    var workInProgressRootPingedLanes = NoLanes;
    var workInProgressRootConcurrentErrors = null;
    var workInProgressRootRecoverableErrors = null;
    var globalMostRecentFallbackTime = 0;
    var FALLBACK_THROTTLE_MS = 500;
    var workInProgressRootRenderTargetTime = Infinity;
    var RENDER_TIMEOUT_MS = 500;
    function resetRenderTimer() {
      workInProgressRootRenderTargetTime = now$1() + RENDER_TIMEOUT_MS;
    }
    function getRenderTargetTime() {
      return workInProgressRootRenderTargetTime;
    }
    var hasUncaughtError = false;
    var firstUncaughtError = null;
    var legacyErrorBoundariesThatAlreadyFailed = null;
    var rootDoesHavePassiveEffects = false;
    var rootWithPendingPassiveEffects = null;
    var pendingPassiveEffectsLanes = NoLanes;
    var pendingPassiveProfilerEffects = [];
    var NESTED_UPDATE_LIMIT = 50;
    var nestedUpdateCount = 0;
    var rootWithNestedUpdates = null;
    var NESTED_PASSIVE_UPDATE_LIMIT = 50;
    var nestedPassiveUpdateCount = 0;
    var currentEventTime = NoTimestamp;
    var currentEventTransitionLane = NoLanes;
    function getWorkInProgressRoot() {
      return workInProgressRoot;
    }
    function requestEventTime() {
      if ((executionContext & (RenderContext | CommitContext)) !== NoContext) {
        return now$1();
      }
      if (currentEventTime !== NoTimestamp) {
        return currentEventTime;
      }
      currentEventTime = now$1();
      return currentEventTime;
    }
    function requestUpdateLane(fiber) {
      var mode = fiber.mode;
      if ((mode & ConcurrentMode) === NoMode) {
        return SyncLane;
      } else if ((executionContext & RenderContext) !== NoContext && workInProgressRootRenderLanes !== NoLanes) {
        return pickArbitraryLane(workInProgressRootRenderLanes);
      }
      var isTransition = requestCurrentTransition() !== NoTransition;
      if (isTransition) {
        if (ReactCurrentBatchConfig$2.transition !== null) {
          var transition = ReactCurrentBatchConfig$2.transition;
          if (!transition._updatedFibers) {
            transition._updatedFibers = /* @__PURE__ */ new Set();
          }
          transition._updatedFibers.add(fiber);
        }
        if (currentEventTransitionLane === NoLane) {
          currentEventTransitionLane = claimNextTransitionLane();
        }
        return currentEventTransitionLane;
      }
      var updateLane = getCurrentUpdatePriority();
      if (updateLane !== NoLane) {
        return updateLane;
      }
      var eventLane = getCurrentEventPriority();
      return eventLane;
    }
    function requestRetryLane(fiber) {
      var mode = fiber.mode;
      if ((mode & ConcurrentMode) === NoMode) {
        return SyncLane;
      }
      return claimNextRetryLane();
    }
    function scheduleUpdateOnFiber(fiber, lane, eventTime) {
      checkForNestedUpdates();
      var root = markUpdateLaneFromFiberToRoot(fiber, lane);
      if (root === null) {
        return null;
      }
      markRootUpdated(root, lane, eventTime);
      if ((executionContext & RenderContext) !== NoLanes && root === workInProgressRoot) {
        warnAboutRenderPhaseUpdatesInDEV(fiber);
      } else {
        {
          if (isDevToolsPresent) {
            addFiberToLanesMap(root, fiber, lane);
          }
        }
        warnIfUpdatesNotWrappedWithActDEV(fiber);
        if (root === workInProgressRoot) {
          if ((executionContext & RenderContext) === NoContext) {
            workInProgressRootInterleavedUpdatedLanes = mergeLanes(workInProgressRootInterleavedUpdatedLanes, lane);
          }
          if (workInProgressRootExitStatus === RootSuspendedWithDelay) {
            markRootSuspended$1(root, workInProgressRootRenderLanes);
          }
        }
        ensureRootIsScheduled(root, eventTime);
        if (lane === SyncLane && executionContext === NoContext && (fiber.mode & ConcurrentMode) === NoMode && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !ReactCurrentActQueue$1.isBatchingLegacy) {
          resetRenderTimer();
          flushSyncCallbacksOnlyInLegacyMode();
        }
      }
      return root;
    }
    function scheduleInitialHydrationOnRoot(root, lane, eventTime) {
      var current2 = root.current;
      current2.lanes = lane;
      markRootUpdated(root, lane, eventTime);
      ensureRootIsScheduled(root, eventTime);
    }
    function markUpdateLaneFromFiberToRoot(sourceFiber, lane) {
      sourceFiber.lanes = mergeLanes(sourceFiber.lanes, lane);
      var alternate = sourceFiber.alternate;
      if (alternate !== null) {
        alternate.lanes = mergeLanes(alternate.lanes, lane);
      }
      {
        if (alternate === null && (sourceFiber.flags & (Placement | Hydrating)) !== NoFlags) {
          warnAboutUpdateOnNotYetMountedFiberInDEV(sourceFiber);
        }
      }
      var node = sourceFiber;
      var parent = sourceFiber.return;
      while (parent !== null) {
        parent.childLanes = mergeLanes(parent.childLanes, lane);
        alternate = parent.alternate;
        if (alternate !== null) {
          alternate.childLanes = mergeLanes(alternate.childLanes, lane);
        } else {
          {
            if ((parent.flags & (Placement | Hydrating)) !== NoFlags) {
              warnAboutUpdateOnNotYetMountedFiberInDEV(sourceFiber);
            }
          }
        }
        node = parent;
        parent = parent.return;
      }
      if (node.tag === HostRoot) {
        var root = node.stateNode;
        return root;
      } else {
        return null;
      }
    }
    function isInterleavedUpdate(fiber, lane) {
      return (
        // TODO: Optimize slightly by comparing to root that fiber belongs to.
        // Requires some refactoring. Not a big deal though since it's rare for
        // concurrent apps to have more than a single root.
        workInProgressRoot !== null && (fiber.mode & ConcurrentMode) !== NoMode && // If this is a render phase update (i.e. UNSAFE_componentWillReceiveProps),
        // then don't treat this as an interleaved update. This pattern is
        // accompanied by a warning but we haven't fully deprecated it yet. We can
        // remove once the deferRenderPhaseUpdateToNextBatch flag is enabled.
        (executionContext & RenderContext) === NoContext
      );
    }
    function ensureRootIsScheduled(root, currentTime) {
      var existingCallbackNode = root.callbackNode;
      markStarvedLanesAsExpired(root, currentTime);
      var nextLanes = getNextLanes(root, root === workInProgressRoot ? workInProgressRootRenderLanes : NoLanes);
      if (nextLanes === NoLanes) {
        if (existingCallbackNode !== null) {
          cancelCallback$1(existingCallbackNode);
        }
        root.callbackNode = null;
        root.callbackPriority = NoLane;
        return;
      }
      var newCallbackPriority = getHighestPriorityLane(nextLanes);
      var existingCallbackPriority = root.callbackPriority;
      if (existingCallbackPriority === newCallbackPriority && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(ReactCurrentActQueue$1.current !== null && existingCallbackNode !== fakeActCallbackNode)) {
        {
          if (existingCallbackNode == null && existingCallbackPriority !== SyncLane) {
            error2("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
          }
        }
        return;
      }
      if (existingCallbackNode != null) {
        cancelCallback$1(existingCallbackNode);
      }
      var newCallbackNode;
      if (newCallbackPriority === SyncLane) {
        if (root.tag === LegacyRoot) {
          if (ReactCurrentActQueue$1.isBatchingLegacy !== null) {
            ReactCurrentActQueue$1.didScheduleLegacyUpdate = true;
          }
          scheduleLegacySyncCallback(performSyncWorkOnRoot.bind(null, root));
        } else {
          scheduleSyncCallback(performSyncWorkOnRoot.bind(null, root));
        }
        if (supportsMicrotasks) {
          if (ReactCurrentActQueue$1.current !== null) {
            ReactCurrentActQueue$1.current.push(flushSyncCallbacks);
          } else {
            scheduleMicrotask(function() {
              if (executionContext === NoContext) {
                flushSyncCallbacks();
              }
            });
          }
        } else {
          scheduleCallback$1(ImmediatePriority, flushSyncCallbacks);
        }
        newCallbackNode = null;
      } else {
        var schedulerPriorityLevel;
        switch (lanesToEventPriority(nextLanes)) {
          case DiscreteEventPriority:
            schedulerPriorityLevel = ImmediatePriority;
            break;
          case ContinuousEventPriority:
            schedulerPriorityLevel = UserBlockingPriority;
            break;
          case DefaultEventPriority:
            schedulerPriorityLevel = NormalPriority;
            break;
          case IdleEventPriority:
            schedulerPriorityLevel = IdlePriority;
            break;
          default:
            schedulerPriorityLevel = NormalPriority;
            break;
        }
        newCallbackNode = scheduleCallback$1(schedulerPriorityLevel, performConcurrentWorkOnRoot.bind(null, root));
      }
      root.callbackPriority = newCallbackPriority;
      root.callbackNode = newCallbackNode;
    }
    function performConcurrentWorkOnRoot(root, didTimeout) {
      {
        resetNestedUpdateFlag();
      }
      currentEventTime = NoTimestamp;
      currentEventTransitionLane = NoLanes;
      if ((executionContext & (RenderContext | CommitContext)) !== NoContext) {
        throw new Error("Should not already be working.");
      }
      var originalCallbackNode = root.callbackNode;
      var didFlushPassiveEffects = flushPassiveEffects();
      if (didFlushPassiveEffects) {
        if (root.callbackNode !== originalCallbackNode) {
          return null;
        }
      }
      var lanes = getNextLanes(root, root === workInProgressRoot ? workInProgressRootRenderLanes : NoLanes);
      if (lanes === NoLanes) {
        return null;
      }
      var shouldTimeSlice = !includesBlockingLane(root, lanes) && !includesExpiredLane(root, lanes) && !didTimeout;
      var exitStatus = shouldTimeSlice ? renderRootConcurrent(root, lanes) : renderRootSync(root, lanes);
      if (exitStatus !== RootInProgress) {
        if (exitStatus === RootErrored) {
          var errorRetryLanes = getLanesToRetrySynchronouslyOnError(root);
          if (errorRetryLanes !== NoLanes) {
            lanes = errorRetryLanes;
            exitStatus = recoverFromConcurrentError(root, errorRetryLanes);
          }
        }
        if (exitStatus === RootFatalErrored) {
          var fatalError = workInProgressRootFatalError;
          prepareFreshStack(root, NoLanes);
          markRootSuspended$1(root, lanes);
          ensureRootIsScheduled(root, now$1());
          throw fatalError;
        }
        if (exitStatus === RootDidNotComplete) {
          markRootSuspended$1(root, lanes);
        } else {
          var renderWasConcurrent = !includesBlockingLane(root, lanes);
          var finishedWork = root.current.alternate;
          if (renderWasConcurrent && !isRenderConsistentWithExternalStores(finishedWork)) {
            exitStatus = renderRootSync(root, lanes);
            if (exitStatus === RootErrored) {
              var _errorRetryLanes = getLanesToRetrySynchronouslyOnError(root);
              if (_errorRetryLanes !== NoLanes) {
                lanes = _errorRetryLanes;
                exitStatus = recoverFromConcurrentError(root, _errorRetryLanes);
              }
            }
            if (exitStatus === RootFatalErrored) {
              var _fatalError = workInProgressRootFatalError;
              prepareFreshStack(root, NoLanes);
              markRootSuspended$1(root, lanes);
              ensureRootIsScheduled(root, now$1());
              throw _fatalError;
            }
          }
          root.finishedWork = finishedWork;
          root.finishedLanes = lanes;
          finishConcurrentRender(root, exitStatus, lanes);
        }
      }
      ensureRootIsScheduled(root, now$1());
      if (root.callbackNode === originalCallbackNode) {
        return performConcurrentWorkOnRoot.bind(null, root);
      }
      return null;
    }
    function recoverFromConcurrentError(root, errorRetryLanes) {
      var errorsFromFirstAttempt = workInProgressRootConcurrentErrors;
      if (isRootDehydrated(root)) {
        var rootWorkInProgress = prepareFreshStack(root, errorRetryLanes);
        rootWorkInProgress.flags |= ForceClientRender;
        {
          errorHydratingContainer(root.containerInfo);
        }
      }
      var exitStatus = renderRootSync(root, errorRetryLanes);
      if (exitStatus !== RootErrored) {
        var errorsFromSecondAttempt = workInProgressRootRecoverableErrors;
        workInProgressRootRecoverableErrors = errorsFromFirstAttempt;
        if (errorsFromSecondAttempt !== null) {
          queueRecoverableErrors(errorsFromSecondAttempt);
        }
      }
      return exitStatus;
    }
    function queueRecoverableErrors(errors) {
      if (workInProgressRootRecoverableErrors === null) {
        workInProgressRootRecoverableErrors = errors;
      } else {
        workInProgressRootRecoverableErrors.push.apply(workInProgressRootRecoverableErrors, errors);
      }
    }
    function finishConcurrentRender(root, exitStatus, lanes) {
      switch (exitStatus) {
        case RootInProgress:
        case RootFatalErrored: {
          throw new Error("Root did not complete. This is a bug in React.");
        }
        // Flow knows about invariant, so it complains if I add a break
        // statement, but eslint doesn't know about invariant, so it complains
        // if I do. eslint-disable-next-line no-fallthrough
        case RootErrored: {
          commitRoot(root, workInProgressRootRecoverableErrors);
          break;
        }
        case RootSuspended: {
          markRootSuspended$1(root, lanes);
          if (includesOnlyRetries(lanes) && // do not delay if we're inside an act() scope
          !shouldForceFlushFallbacksInDEV()) {
            var msUntilTimeout = globalMostRecentFallbackTime + FALLBACK_THROTTLE_MS - now$1();
            if (msUntilTimeout > 10) {
              var nextLanes = getNextLanes(root, NoLanes);
              if (nextLanes !== NoLanes) {
                break;
              }
              var suspendedLanes = root.suspendedLanes;
              if (!isSubsetOfLanes(suspendedLanes, lanes)) {
                var eventTime = requestEventTime();
                markRootPinged(root, suspendedLanes);
                break;
              }
              root.timeoutHandle = scheduleTimeout(commitRoot.bind(null, root, workInProgressRootRecoverableErrors), msUntilTimeout);
              break;
            }
          }
          commitRoot(root, workInProgressRootRecoverableErrors);
          break;
        }
        case RootSuspendedWithDelay: {
          markRootSuspended$1(root, lanes);
          if (includesOnlyTransitions(lanes)) {
            break;
          }
          if (!shouldForceFlushFallbacksInDEV()) {
            var mostRecentEventTime = getMostRecentEventTime(root, lanes);
            var eventTimeMs = mostRecentEventTime;
            var timeElapsedMs = now$1() - eventTimeMs;
            var _msUntilTimeout = jnd(timeElapsedMs) - timeElapsedMs;
            if (_msUntilTimeout > 10) {
              root.timeoutHandle = scheduleTimeout(commitRoot.bind(null, root, workInProgressRootRecoverableErrors), _msUntilTimeout);
              break;
            }
          }
          commitRoot(root, workInProgressRootRecoverableErrors);
          break;
        }
        case RootCompleted: {
          commitRoot(root, workInProgressRootRecoverableErrors);
          break;
        }
        default: {
          throw new Error("Unknown root exit status.");
        }
      }
    }
    function isRenderConsistentWithExternalStores(finishedWork) {
      var node = finishedWork;
      while (true) {
        if (node.flags & StoreConsistency) {
          var updateQueue = node.updateQueue;
          if (updateQueue !== null) {
            var checks = updateQueue.stores;
            if (checks !== null) {
              for (var i2 = 0; i2 < checks.length; i2++) {
                var check = checks[i2];
                var getSnapshot = check.getSnapshot;
                var renderedValue = check.value;
                try {
                  if (!objectIs(getSnapshot(), renderedValue)) {
                    return false;
                  }
                } catch (error3) {
                  return false;
                }
              }
            }
          }
        }
        var child = node.child;
        if (node.subtreeFlags & StoreConsistency && child !== null) {
          child.return = node;
          node = child;
          continue;
        }
        if (node === finishedWork) {
          return true;
        }
        while (node.sibling === null) {
          if (node.return === null || node.return === finishedWork) {
            return true;
          }
          node = node.return;
        }
        node.sibling.return = node.return;
        node = node.sibling;
      }
      return true;
    }
    function markRootSuspended$1(root, suspendedLanes) {
      suspendedLanes = removeLanes(suspendedLanes, workInProgressRootPingedLanes);
      suspendedLanes = removeLanes(suspendedLanes, workInProgressRootInterleavedUpdatedLanes);
      markRootSuspended(root, suspendedLanes);
    }
    function performSyncWorkOnRoot(root) {
      {
        syncNestedUpdateFlag();
      }
      if ((executionContext & (RenderContext | CommitContext)) !== NoContext) {
        throw new Error("Should not already be working.");
      }
      flushPassiveEffects();
      var lanes = getNextLanes(root, NoLanes);
      if (!includesSomeLane(lanes, SyncLane)) {
        ensureRootIsScheduled(root, now$1());
        return null;
      }
      var exitStatus = renderRootSync(root, lanes);
      if (root.tag !== LegacyRoot && exitStatus === RootErrored) {
        var errorRetryLanes = getLanesToRetrySynchronouslyOnError(root);
        if (errorRetryLanes !== NoLanes) {
          lanes = errorRetryLanes;
          exitStatus = recoverFromConcurrentError(root, errorRetryLanes);
        }
      }
      if (exitStatus === RootFatalErrored) {
        var fatalError = workInProgressRootFatalError;
        prepareFreshStack(root, NoLanes);
        markRootSuspended$1(root, lanes);
        ensureRootIsScheduled(root, now$1());
        throw fatalError;
      }
      if (exitStatus === RootDidNotComplete) {
        throw new Error("Root did not complete. This is a bug in React.");
      }
      var finishedWork = root.current.alternate;
      root.finishedWork = finishedWork;
      root.finishedLanes = lanes;
      commitRoot(root, workInProgressRootRecoverableErrors);
      ensureRootIsScheduled(root, now$1());
      return null;
    }
    function flushRoot(root, lanes) {
      if (lanes !== NoLanes) {
        markRootEntangled(root, mergeLanes(lanes, SyncLane));
        ensureRootIsScheduled(root, now$1());
        if ((executionContext & (RenderContext | CommitContext)) === NoContext) {
          resetRenderTimer();
          flushSyncCallbacks();
        }
      }
    }
    function deferredUpdates(fn) {
      var previousPriority = getCurrentUpdatePriority();
      var prevTransition = ReactCurrentBatchConfig$2.transition;
      try {
        ReactCurrentBatchConfig$2.transition = null;
        setCurrentUpdatePriority(DefaultEventPriority);
        return fn();
      } finally {
        setCurrentUpdatePriority(previousPriority);
        ReactCurrentBatchConfig$2.transition = prevTransition;
      }
    }
    function batchedUpdates(fn, a) {
      var prevExecutionContext = executionContext;
      executionContext |= BatchedContext;
      try {
        return fn(a);
      } finally {
        executionContext = prevExecutionContext;
        if (executionContext === NoContext && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !ReactCurrentActQueue$1.isBatchingLegacy) {
          resetRenderTimer();
          flushSyncCallbacksOnlyInLegacyMode();
        }
      }
    }
    function discreteUpdates(fn, a, b, c, d) {
      var previousPriority = getCurrentUpdatePriority();
      var prevTransition = ReactCurrentBatchConfig$2.transition;
      try {
        ReactCurrentBatchConfig$2.transition = null;
        setCurrentUpdatePriority(DiscreteEventPriority);
        return fn(a, b, c, d);
      } finally {
        setCurrentUpdatePriority(previousPriority);
        ReactCurrentBatchConfig$2.transition = prevTransition;
        if (executionContext === NoContext) {
          resetRenderTimer();
        }
      }
    }
    function flushSync2(fn) {
      if (rootWithPendingPassiveEffects !== null && rootWithPendingPassiveEffects.tag === LegacyRoot && (executionContext & (RenderContext | CommitContext)) === NoContext) {
        flushPassiveEffects();
      }
      var prevExecutionContext = executionContext;
      executionContext |= BatchedContext;
      var prevTransition = ReactCurrentBatchConfig$2.transition;
      var previousPriority = getCurrentUpdatePriority();
      try {
        ReactCurrentBatchConfig$2.transition = null;
        setCurrentUpdatePriority(DiscreteEventPriority);
        if (fn) {
          return fn();
        } else {
          return void 0;
        }
      } finally {
        setCurrentUpdatePriority(previousPriority);
        ReactCurrentBatchConfig$2.transition = prevTransition;
        executionContext = prevExecutionContext;
        if ((executionContext & (RenderContext | CommitContext)) === NoContext) {
          flushSyncCallbacks();
        }
      }
    }
    function isAlreadyRendering() {
      return (executionContext & (RenderContext | CommitContext)) !== NoContext;
    }
    function flushControlled(fn) {
      var prevExecutionContext = executionContext;
      executionContext |= BatchedContext;
      var prevTransition = ReactCurrentBatchConfig$2.transition;
      var previousPriority = getCurrentUpdatePriority();
      try {
        ReactCurrentBatchConfig$2.transition = null;
        setCurrentUpdatePriority(DiscreteEventPriority);
        fn();
      } finally {
        setCurrentUpdatePriority(previousPriority);
        ReactCurrentBatchConfig$2.transition = prevTransition;
        executionContext = prevExecutionContext;
        if (executionContext === NoContext) {
          resetRenderTimer();
          flushSyncCallbacks();
        }
      }
    }
    function pushRenderLanes(fiber, lanes) {
      push(subtreeRenderLanesCursor, subtreeRenderLanes, fiber);
      subtreeRenderLanes = mergeLanes(subtreeRenderLanes, lanes);
      workInProgressRootIncludedLanes = mergeLanes(workInProgressRootIncludedLanes, lanes);
    }
    function popRenderLanes(fiber) {
      subtreeRenderLanes = subtreeRenderLanesCursor.current;
      pop(subtreeRenderLanesCursor, fiber);
    }
    function prepareFreshStack(root, lanes) {
      root.finishedWork = null;
      root.finishedLanes = NoLanes;
      var timeoutHandle = root.timeoutHandle;
      if (timeoutHandle !== noTimeout) {
        root.timeoutHandle = noTimeout;
        cancelTimeout(timeoutHandle);
      }
      if (workInProgress !== null) {
        var interruptedWork = workInProgress.return;
        while (interruptedWork !== null) {
          var current2 = interruptedWork.alternate;
          unwindInterruptedWork(current2, interruptedWork);
          interruptedWork = interruptedWork.return;
        }
      }
      workInProgressRoot = root;
      var rootWorkInProgress = createWorkInProgress(root.current, null);
      workInProgress = rootWorkInProgress;
      workInProgressRootRenderLanes = subtreeRenderLanes = workInProgressRootIncludedLanes = lanes;
      workInProgressRootExitStatus = RootInProgress;
      workInProgressRootFatalError = null;
      workInProgressRootSkippedLanes = NoLanes;
      workInProgressRootInterleavedUpdatedLanes = NoLanes;
      workInProgressRootPingedLanes = NoLanes;
      workInProgressRootConcurrentErrors = null;
      workInProgressRootRecoverableErrors = null;
      enqueueInterleavedUpdates();
      {
        ReactStrictModeWarnings.discardPendingWarnings();
      }
      return rootWorkInProgress;
    }
    function handleError(root, thrownValue) {
      do {
        var erroredWork = workInProgress;
        try {
          resetContextDependencies();
          resetHooksAfterThrow();
          resetCurrentFiber();
          ReactCurrentOwner$2.current = null;
          if (erroredWork === null || erroredWork.return === null) {
            workInProgressRootExitStatus = RootFatalErrored;
            workInProgressRootFatalError = thrownValue;
            workInProgress = null;
            return;
          }
          if (enableProfilerTimer && erroredWork.mode & ProfileMode) {
            stopProfilerTimerIfRunningAndRecordDelta(erroredWork, true);
          }
          if (enableSchedulingProfiler) {
            markComponentRenderStopped();
            if (thrownValue !== null && typeof thrownValue === "object" && typeof thrownValue.then === "function") {
              var wakeable = thrownValue;
              markComponentSuspended(erroredWork, wakeable, workInProgressRootRenderLanes);
            } else {
              markComponentErrored(erroredWork, thrownValue, workInProgressRootRenderLanes);
            }
          }
          throwException(root, erroredWork.return, erroredWork, thrownValue, workInProgressRootRenderLanes);
          completeUnitOfWork(erroredWork);
        } catch (yetAnotherThrownValue) {
          thrownValue = yetAnotherThrownValue;
          if (workInProgress === erroredWork && erroredWork !== null) {
            erroredWork = erroredWork.return;
            workInProgress = erroredWork;
          } else {
            erroredWork = workInProgress;
          }
          continue;
        }
        return;
      } while (true);
    }
    function pushDispatcher() {
      var prevDispatcher = ReactCurrentDispatcher$2.current;
      ReactCurrentDispatcher$2.current = ContextOnlyDispatcher;
      if (prevDispatcher === null) {
        return ContextOnlyDispatcher;
      } else {
        return prevDispatcher;
      }
    }
    function popDispatcher(prevDispatcher) {
      ReactCurrentDispatcher$2.current = prevDispatcher;
    }
    function markCommitTimeOfFallback() {
      globalMostRecentFallbackTime = now$1();
    }
    function markSkippedUpdateLanes(lane) {
      workInProgressRootSkippedLanes = mergeLanes(lane, workInProgressRootSkippedLanes);
    }
    function renderDidSuspend() {
      if (workInProgressRootExitStatus === RootInProgress) {
        workInProgressRootExitStatus = RootSuspended;
      }
    }
    function renderDidSuspendDelayIfPossible() {
      if (workInProgressRootExitStatus === RootInProgress || workInProgressRootExitStatus === RootSuspended || workInProgressRootExitStatus === RootErrored) {
        workInProgressRootExitStatus = RootSuspendedWithDelay;
      }
      if (workInProgressRoot !== null && (includesNonIdleWork(workInProgressRootSkippedLanes) || includesNonIdleWork(workInProgressRootInterleavedUpdatedLanes))) {
        markRootSuspended$1(workInProgressRoot, workInProgressRootRenderLanes);
      }
    }
    function renderDidError(error3) {
      if (workInProgressRootExitStatus !== RootSuspendedWithDelay) {
        workInProgressRootExitStatus = RootErrored;
      }
      if (workInProgressRootConcurrentErrors === null) {
        workInProgressRootConcurrentErrors = [error3];
      } else {
        workInProgressRootConcurrentErrors.push(error3);
      }
    }
    function renderHasNotSuspendedYet() {
      return workInProgressRootExitStatus === RootInProgress;
    }
    function renderRootSync(root, lanes) {
      var prevExecutionContext = executionContext;
      executionContext |= RenderContext;
      var prevDispatcher = pushDispatcher();
      if (workInProgressRoot !== root || workInProgressRootRenderLanes !== lanes) {
        {
          if (isDevToolsPresent) {
            var memoizedUpdaters = root.memoizedUpdaters;
            if (memoizedUpdaters.size > 0) {
              restorePendingUpdaters(root, workInProgressRootRenderLanes);
              memoizedUpdaters.clear();
            }
            movePendingFibersToMemoized(root, lanes);
          }
        }
        prepareFreshStack(root, lanes);
      }
      {
        markRenderStarted(lanes);
      }
      do {
        try {
          workLoopSync();
          break;
        } catch (thrownValue) {
          handleError(root, thrownValue);
        }
      } while (true);
      resetContextDependencies();
      executionContext = prevExecutionContext;
      popDispatcher(prevDispatcher);
      if (workInProgress !== null) {
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      }
      {
        markRenderStopped();
      }
      workInProgressRoot = null;
      workInProgressRootRenderLanes = NoLanes;
      return workInProgressRootExitStatus;
    }
    function workLoopSync() {
      while (workInProgress !== null) {
        performUnitOfWork(workInProgress);
      }
    }
    function renderRootConcurrent(root, lanes) {
      var prevExecutionContext = executionContext;
      executionContext |= RenderContext;
      var prevDispatcher = pushDispatcher();
      if (workInProgressRoot !== root || workInProgressRootRenderLanes !== lanes) {
        {
          if (isDevToolsPresent) {
            var memoizedUpdaters = root.memoizedUpdaters;
            if (memoizedUpdaters.size > 0) {
              restorePendingUpdaters(root, workInProgressRootRenderLanes);
              memoizedUpdaters.clear();
            }
            movePendingFibersToMemoized(root, lanes);
          }
        }
        resetRenderTimer();
        prepareFreshStack(root, lanes);
      }
      {
        markRenderStarted(lanes);
      }
      do {
        try {
          workLoopConcurrent();
          break;
        } catch (thrownValue) {
          handleError(root, thrownValue);
        }
      } while (true);
      resetContextDependencies();
      popDispatcher(prevDispatcher);
      executionContext = prevExecutionContext;
      if (workInProgress !== null) {
        {
          markRenderYielded();
        }
        return RootInProgress;
      } else {
        {
          markRenderStopped();
        }
        workInProgressRoot = null;
        workInProgressRootRenderLanes = NoLanes;
        return workInProgressRootExitStatus;
      }
    }
    function workLoopConcurrent() {
      while (workInProgress !== null && !shouldYield()) {
        performUnitOfWork(workInProgress);
      }
    }
    function performUnitOfWork(unitOfWork) {
      var current2 = unitOfWork.alternate;
      setCurrentFiber(unitOfWork);
      var next;
      if ((unitOfWork.mode & ProfileMode) !== NoMode) {
        startProfilerTimer(unitOfWork);
        next = beginWork$1(current2, unitOfWork, subtreeRenderLanes);
        stopProfilerTimerIfRunningAndRecordDelta(unitOfWork, true);
      } else {
        next = beginWork$1(current2, unitOfWork, subtreeRenderLanes);
      }
      resetCurrentFiber();
      unitOfWork.memoizedProps = unitOfWork.pendingProps;
      if (next === null) {
        completeUnitOfWork(unitOfWork);
      } else {
        workInProgress = next;
      }
      ReactCurrentOwner$2.current = null;
    }
    function completeUnitOfWork(unitOfWork) {
      var completedWork = unitOfWork;
      do {
        var current2 = completedWork.alternate;
        var returnFiber = completedWork.return;
        if ((completedWork.flags & Incomplete) === NoFlags) {
          setCurrentFiber(completedWork);
          var next = void 0;
          if ((completedWork.mode & ProfileMode) === NoMode) {
            next = completeWork(current2, completedWork, subtreeRenderLanes);
          } else {
            startProfilerTimer(completedWork);
            next = completeWork(current2, completedWork, subtreeRenderLanes);
            stopProfilerTimerIfRunningAndRecordDelta(completedWork, false);
          }
          resetCurrentFiber();
          if (next !== null) {
            workInProgress = next;
            return;
          }
        } else {
          var _next = unwindWork(current2, completedWork);
          if (_next !== null) {
            _next.flags &= HostEffectMask;
            workInProgress = _next;
            return;
          }
          if ((completedWork.mode & ProfileMode) !== NoMode) {
            stopProfilerTimerIfRunningAndRecordDelta(completedWork, false);
            var actualDuration = completedWork.actualDuration;
            var child = completedWork.child;
            while (child !== null) {
              actualDuration += child.actualDuration;
              child = child.sibling;
            }
            completedWork.actualDuration = actualDuration;
          }
          if (returnFiber !== null) {
            returnFiber.flags |= Incomplete;
            returnFiber.subtreeFlags = NoFlags;
            returnFiber.deletions = null;
          } else {
            workInProgressRootExitStatus = RootDidNotComplete;
            workInProgress = null;
            return;
          }
        }
        var siblingFiber = completedWork.sibling;
        if (siblingFiber !== null) {
          workInProgress = siblingFiber;
          return;
        }
        completedWork = returnFiber;
        workInProgress = completedWork;
      } while (completedWork !== null);
      if (workInProgressRootExitStatus === RootInProgress) {
        workInProgressRootExitStatus = RootCompleted;
      }
    }
    function commitRoot(root, recoverableErrors) {
      var previousUpdateLanePriority = getCurrentUpdatePriority();
      var prevTransition = ReactCurrentBatchConfig$2.transition;
      try {
        ReactCurrentBatchConfig$2.transition = null;
        setCurrentUpdatePriority(DiscreteEventPriority);
        commitRootImpl(root, recoverableErrors, previousUpdateLanePriority);
      } finally {
        ReactCurrentBatchConfig$2.transition = prevTransition;
        setCurrentUpdatePriority(previousUpdateLanePriority);
      }
      return null;
    }
    function commitRootImpl(root, recoverableErrors, renderPriorityLevel) {
      do {
        flushPassiveEffects();
      } while (rootWithPendingPassiveEffects !== null);
      flushRenderPhaseStrictModeWarningsInDEV();
      if ((executionContext & (RenderContext | CommitContext)) !== NoContext) {
        throw new Error("Should not already be working.");
      }
      var finishedWork = root.finishedWork;
      var lanes = root.finishedLanes;
      {
        markCommitStarted(lanes);
      }
      if (finishedWork === null) {
        {
          markCommitStopped();
        }
        return null;
      } else {
        {
          if (lanes === NoLanes) {
            error2("root.finishedLanes should not be empty during a commit. This is a bug in React.");
          }
        }
      }
      root.finishedWork = null;
      root.finishedLanes = NoLanes;
      if (finishedWork === root.current) {
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      }
      root.callbackNode = null;
      root.callbackPriority = NoLane;
      var remainingLanes = mergeLanes(finishedWork.lanes, finishedWork.childLanes);
      markRootFinished(root, remainingLanes);
      if (root === workInProgressRoot) {
        workInProgressRoot = null;
        workInProgress = null;
        workInProgressRootRenderLanes = NoLanes;
      }
      if ((finishedWork.subtreeFlags & PassiveMask) !== NoFlags || (finishedWork.flags & PassiveMask) !== NoFlags) {
        if (!rootDoesHavePassiveEffects) {
          rootDoesHavePassiveEffects = true;
          scheduleCallback$1(NormalPriority, function() {
            flushPassiveEffects();
            return null;
          });
        }
      }
      var subtreeHasEffects = (finishedWork.subtreeFlags & (BeforeMutationMask | MutationMask | LayoutMask | PassiveMask)) !== NoFlags;
      var rootHasEffect = (finishedWork.flags & (BeforeMutationMask | MutationMask | LayoutMask | PassiveMask)) !== NoFlags;
      if (subtreeHasEffects || rootHasEffect) {
        var prevTransition = ReactCurrentBatchConfig$2.transition;
        ReactCurrentBatchConfig$2.transition = null;
        var previousPriority = getCurrentUpdatePriority();
        setCurrentUpdatePriority(DiscreteEventPriority);
        var prevExecutionContext = executionContext;
        executionContext |= CommitContext;
        ReactCurrentOwner$2.current = null;
        var shouldFireAfterActiveInstanceBlur2 = commitBeforeMutationEffects(root, finishedWork);
        {
          recordCommitTime();
        }
        commitMutationEffects(root, finishedWork, lanes);
        resetAfterCommit(root.containerInfo);
        root.current = finishedWork;
        {
          markLayoutEffectsStarted(lanes);
        }
        commitLayoutEffects(finishedWork, root, lanes);
        {
          markLayoutEffectsStopped();
        }
        requestPaint();
        executionContext = prevExecutionContext;
        setCurrentUpdatePriority(previousPriority);
        ReactCurrentBatchConfig$2.transition = prevTransition;
      } else {
        root.current = finishedWork;
        {
          recordCommitTime();
        }
      }
      var rootDidHavePassiveEffects = rootDoesHavePassiveEffects;
      if (rootDoesHavePassiveEffects) {
        rootDoesHavePassiveEffects = false;
        rootWithPendingPassiveEffects = root;
        pendingPassiveEffectsLanes = lanes;
      }
      remainingLanes = root.pendingLanes;
      if (remainingLanes === NoLanes) {
        legacyErrorBoundariesThatAlreadyFailed = null;
      }
      {
        if (!rootDidHavePassiveEffects) {
          commitDoubleInvokeEffectsInDEV(root.current, false);
        }
      }
      onCommitRoot(finishedWork.stateNode, renderPriorityLevel);
      {
        if (isDevToolsPresent) {
          root.memoizedUpdaters.clear();
        }
      }
      {
        onCommitRoot$1();
      }
      ensureRootIsScheduled(root, now$1());
      if (recoverableErrors !== null) {
        var onRecoverableError = root.onRecoverableError;
        for (var i2 = 0; i2 < recoverableErrors.length; i2++) {
          var recoverableError = recoverableErrors[i2];
          onRecoverableError(recoverableError);
        }
      }
      if (hasUncaughtError) {
        hasUncaughtError = false;
        var error$1 = firstUncaughtError;
        firstUncaughtError = null;
        throw error$1;
      }
      if (includesSomeLane(pendingPassiveEffectsLanes, SyncLane) && root.tag !== LegacyRoot) {
        flushPassiveEffects();
      }
      remainingLanes = root.pendingLanes;
      if (includesSomeLane(remainingLanes, SyncLane)) {
        {
          markNestedUpdateScheduled();
        }
        if (root === rootWithNestedUpdates) {
          nestedUpdateCount++;
        } else {
          nestedUpdateCount = 0;
          rootWithNestedUpdates = root;
        }
      } else {
        nestedUpdateCount = 0;
      }
      flushSyncCallbacks();
      {
        markCommitStopped();
      }
      return null;
    }
    function flushPassiveEffects() {
      if (rootWithPendingPassiveEffects !== null) {
        var renderPriority = lanesToEventPriority(pendingPassiveEffectsLanes);
        var priority = lowerEventPriority(DefaultEventPriority, renderPriority);
        var prevTransition = ReactCurrentBatchConfig$2.transition;
        var previousPriority = getCurrentUpdatePriority();
        try {
          ReactCurrentBatchConfig$2.transition = null;
          setCurrentUpdatePriority(priority);
          return flushPassiveEffectsImpl();
        } finally {
          setCurrentUpdatePriority(previousPriority);
          ReactCurrentBatchConfig$2.transition = prevTransition;
        }
      }
      return false;
    }
    function enqueuePendingPassiveProfilerEffect(fiber) {
      {
        pendingPassiveProfilerEffects.push(fiber);
        if (!rootDoesHavePassiveEffects) {
          rootDoesHavePassiveEffects = true;
          scheduleCallback$1(NormalPriority, function() {
            flushPassiveEffects();
            return null;
          });
        }
      }
    }
    function flushPassiveEffectsImpl() {
      if (rootWithPendingPassiveEffects === null) {
        return false;
      }
      var root = rootWithPendingPassiveEffects;
      var lanes = pendingPassiveEffectsLanes;
      rootWithPendingPassiveEffects = null;
      pendingPassiveEffectsLanes = NoLanes;
      if ((executionContext & (RenderContext | CommitContext)) !== NoContext) {
        throw new Error("Cannot flush passive effects while already rendering.");
      }
      {
        markPassiveEffectsStarted(lanes);
      }
      var prevExecutionContext = executionContext;
      executionContext |= CommitContext;
      commitPassiveUnmountEffects(root.current);
      commitPassiveMountEffects(root, root.current);
      {
        var profilerEffects = pendingPassiveProfilerEffects;
        pendingPassiveProfilerEffects = [];
        for (var i2 = 0; i2 < profilerEffects.length; i2++) {
          var _fiber = profilerEffects[i2];
          commitPassiveEffectDurations(root, _fiber);
        }
      }
      {
        markPassiveEffectsStopped();
      }
      {
        commitDoubleInvokeEffectsInDEV(root.current, true);
      }
      executionContext = prevExecutionContext;
      flushSyncCallbacks();
      nestedPassiveUpdateCount = rootWithPendingPassiveEffects === null ? 0 : nestedPassiveUpdateCount + 1;
      onPostCommitRoot(root);
      {
        var stateNode = root.current.stateNode;
        stateNode.effectDuration = 0;
        stateNode.passiveEffectDuration = 0;
      }
      return true;
    }
    function isAlreadyFailedLegacyErrorBoundary(instance) {
      return legacyErrorBoundariesThatAlreadyFailed !== null && legacyErrorBoundariesThatAlreadyFailed.has(instance);
    }
    function markLegacyErrorBoundaryAsFailed(instance) {
      if (legacyErrorBoundariesThatAlreadyFailed === null) {
        legacyErrorBoundariesThatAlreadyFailed = /* @__PURE__ */ new Set([instance]);
      } else {
        legacyErrorBoundariesThatAlreadyFailed.add(instance);
      }
    }
    function prepareToThrowUncaughtError(error3) {
      if (!hasUncaughtError) {
        hasUncaughtError = true;
        firstUncaughtError = error3;
      }
    }
    var onUncaughtError = prepareToThrowUncaughtError;
    function captureCommitPhaseErrorOnRoot(rootFiber, sourceFiber, error3) {
      var errorInfo = createCapturedValue(error3, sourceFiber);
      var update = createRootErrorUpdate(rootFiber, errorInfo, SyncLane);
      enqueueUpdate(rootFiber, update);
      var eventTime = requestEventTime();
      var root = markUpdateLaneFromFiberToRoot(rootFiber, SyncLane);
      if (root !== null) {
        markRootUpdated(root, SyncLane, eventTime);
        ensureRootIsScheduled(root, eventTime);
      }
    }
    function captureCommitPhaseError(sourceFiber, nearestMountedAncestor, error$1) {
      if (sourceFiber.tag === HostRoot) {
        captureCommitPhaseErrorOnRoot(sourceFiber, sourceFiber, error$1);
        return;
      }
      var fiber = null;
      {
        fiber = nearestMountedAncestor;
      }
      while (fiber !== null) {
        if (fiber.tag === HostRoot) {
          captureCommitPhaseErrorOnRoot(fiber, sourceFiber, error$1);
          return;
        } else if (fiber.tag === ClassComponent) {
          var ctor = fiber.type;
          var instance = fiber.stateNode;
          if (typeof ctor.getDerivedStateFromError === "function" || typeof instance.componentDidCatch === "function" && !isAlreadyFailedLegacyErrorBoundary(instance)) {
            var errorInfo = createCapturedValue(error$1, sourceFiber);
            var update = createClassErrorUpdate(fiber, errorInfo, SyncLane);
            enqueueUpdate(fiber, update);
            var eventTime = requestEventTime();
            var root = markUpdateLaneFromFiberToRoot(fiber, SyncLane);
            if (root !== null) {
              markRootUpdated(root, SyncLane, eventTime);
              ensureRootIsScheduled(root, eventTime);
            }
            return;
          }
        }
        fiber = fiber.return;
      }
      {
        error2("Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.\n\nError message:\n\n%s", error$1);
      }
    }
    function pingSuspendedRoot(root, wakeable, pingedLanes) {
      var pingCache = root.pingCache;
      if (pingCache !== null) {
        pingCache.delete(wakeable);
      }
      var eventTime = requestEventTime();
      markRootPinged(root, pingedLanes);
      warnIfSuspenseResolutionNotWrappedWithActDEV(root);
      if (workInProgressRoot === root && isSubsetOfLanes(workInProgressRootRenderLanes, pingedLanes)) {
        if (workInProgressRootExitStatus === RootSuspendedWithDelay || workInProgressRootExitStatus === RootSuspended && includesOnlyRetries(workInProgressRootRenderLanes) && now$1() - globalMostRecentFallbackTime < FALLBACK_THROTTLE_MS) {
          prepareFreshStack(root, NoLanes);
        } else {
          workInProgressRootPingedLanes = mergeLanes(workInProgressRootPingedLanes, pingedLanes);
        }
      }
      ensureRootIsScheduled(root, eventTime);
    }
    function retryTimedOutBoundary(boundaryFiber, retryLane) {
      if (retryLane === NoLane) {
        retryLane = requestRetryLane(boundaryFiber);
      }
      var eventTime = requestEventTime();
      var root = markUpdateLaneFromFiberToRoot(boundaryFiber, retryLane);
      if (root !== null) {
        markRootUpdated(root, retryLane, eventTime);
        ensureRootIsScheduled(root, eventTime);
      }
    }
    function retryDehydratedSuspenseBoundary(boundaryFiber) {
      var suspenseState = boundaryFiber.memoizedState;
      var retryLane = NoLane;
      if (suspenseState !== null) {
        retryLane = suspenseState.retryLane;
      }
      retryTimedOutBoundary(boundaryFiber, retryLane);
    }
    function resolveRetryWakeable(boundaryFiber, wakeable) {
      var retryLane = NoLane;
      var retryCache;
      {
        switch (boundaryFiber.tag) {
          case SuspenseComponent:
            retryCache = boundaryFiber.stateNode;
            var suspenseState = boundaryFiber.memoizedState;
            if (suspenseState !== null) {
              retryLane = suspenseState.retryLane;
            }
            break;
          case SuspenseListComponent:
            retryCache = boundaryFiber.stateNode;
            break;
          default:
            throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
        }
      }
      if (retryCache !== null) {
        retryCache.delete(wakeable);
      }
      retryTimedOutBoundary(boundaryFiber, retryLane);
    }
    function jnd(timeElapsed) {
      return timeElapsed < 120 ? 120 : timeElapsed < 480 ? 480 : timeElapsed < 1080 ? 1080 : timeElapsed < 1920 ? 1920 : timeElapsed < 3e3 ? 3e3 : timeElapsed < 4320 ? 4320 : ceil(timeElapsed / 1960) * 1960;
    }
    function checkForNestedUpdates() {
      if (nestedUpdateCount > NESTED_UPDATE_LIMIT) {
        nestedUpdateCount = 0;
        rootWithNestedUpdates = null;
        throw new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      }
      {
        if (nestedPassiveUpdateCount > NESTED_PASSIVE_UPDATE_LIMIT) {
          nestedPassiveUpdateCount = 0;
          error2("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render.");
        }
      }
    }
    function flushRenderPhaseStrictModeWarningsInDEV() {
      {
        ReactStrictModeWarnings.flushLegacyContextWarning();
        {
          ReactStrictModeWarnings.flushPendingUnsafeLifecycleWarnings();
        }
      }
    }
    function commitDoubleInvokeEffectsInDEV(fiber, hasPassiveEffects) {
      {
        setCurrentFiber(fiber);
        invokeEffectsInDev(fiber, MountLayoutDev, invokeLayoutEffectUnmountInDEV);
        if (hasPassiveEffects) {
          invokeEffectsInDev(fiber, MountPassiveDev, invokePassiveEffectUnmountInDEV);
        }
        invokeEffectsInDev(fiber, MountLayoutDev, invokeLayoutEffectMountInDEV);
        if (hasPassiveEffects) {
          invokeEffectsInDev(fiber, MountPassiveDev, invokePassiveEffectMountInDEV);
        }
        resetCurrentFiber();
      }
    }
    function invokeEffectsInDev(firstChild, fiberFlags, invokeEffectFn) {
      {
        var current2 = firstChild;
        var subtreeRoot = null;
        while (current2 !== null) {
          var primarySubtreeFlag = current2.subtreeFlags & fiberFlags;
          if (current2 !== subtreeRoot && current2.child !== null && primarySubtreeFlag !== NoFlags) {
            current2 = current2.child;
          } else {
            if ((current2.flags & fiberFlags) !== NoFlags) {
              invokeEffectFn(current2);
            }
            if (current2.sibling !== null) {
              current2 = current2.sibling;
            } else {
              current2 = subtreeRoot = current2.return;
            }
          }
        }
      }
    }
    var didWarnStateUpdateForNotYetMountedComponent = null;
    function warnAboutUpdateOnNotYetMountedFiberInDEV(fiber) {
      {
        if ((executionContext & RenderContext) !== NoContext) {
          return;
        }
        if (!(fiber.mode & ConcurrentMode)) {
          return;
        }
        var tag = fiber.tag;
        if (tag !== IndeterminateComponent && tag !== HostRoot && tag !== ClassComponent && tag !== FunctionComponent && tag !== ForwardRef && tag !== MemoComponent && tag !== SimpleMemoComponent) {
          return;
        }
        var componentName = getComponentNameFromFiber(fiber) || "ReactComponent";
        if (didWarnStateUpdateForNotYetMountedComponent !== null) {
          if (didWarnStateUpdateForNotYetMountedComponent.has(componentName)) {
            return;
          }
          didWarnStateUpdateForNotYetMountedComponent.add(componentName);
        } else {
          didWarnStateUpdateForNotYetMountedComponent = /* @__PURE__ */ new Set([componentName]);
        }
        var previousFiber = current;
        try {
          setCurrentFiber(fiber);
          error2("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          if (previousFiber) {
            setCurrentFiber(fiber);
          } else {
            resetCurrentFiber();
          }
        }
      }
    }
    var beginWork$1;
    {
      var dummyFiber = null;
      beginWork$1 = function(current2, unitOfWork, lanes) {
        var originalWorkInProgressCopy = assignFiberPropertiesInDEV(dummyFiber, unitOfWork);
        try {
          return beginWork(current2, unitOfWork, lanes);
        } catch (originalError) {
          if (originalError !== null && typeof originalError === "object" && typeof originalError.then === "function") {
            throw originalError;
          }
          resetContextDependencies();
          resetHooksAfterThrow();
          unwindInterruptedWork(current2, unitOfWork);
          assignFiberPropertiesInDEV(unitOfWork, originalWorkInProgressCopy);
          if (unitOfWork.mode & ProfileMode) {
            startProfilerTimer(unitOfWork);
          }
          invokeGuardedCallback(null, beginWork, null, current2, unitOfWork, lanes);
          if (hasCaughtError()) {
            var replayError = clearCaughtError();
            if (typeof replayError === "object" && replayError !== null && replayError._suppressLogging && typeof originalError === "object" && originalError !== null && !originalError._suppressLogging) {
              originalError._suppressLogging = true;
            }
          }
          throw originalError;
        }
      };
    }
    var didWarnAboutUpdateInRender = false;
    var didWarnAboutUpdateInRenderForAnotherComponent;
    {
      didWarnAboutUpdateInRenderForAnotherComponent = /* @__PURE__ */ new Set();
    }
    function warnAboutRenderPhaseUpdatesInDEV(fiber) {
      {
        if (isRendering && !getIsUpdatingOpaqueValueInRenderPhaseInDEV()) {
          switch (fiber.tag) {
            case FunctionComponent:
            case ForwardRef:
            case SimpleMemoComponent: {
              var renderingComponentName = workInProgress && getComponentNameFromFiber(workInProgress) || "Unknown";
              var dedupeKey = renderingComponentName;
              if (!didWarnAboutUpdateInRenderForAnotherComponent.has(dedupeKey)) {
                didWarnAboutUpdateInRenderForAnotherComponent.add(dedupeKey);
                var setStateComponentName = getComponentNameFromFiber(fiber) || "Unknown";
                error2("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", setStateComponentName, renderingComponentName, renderingComponentName);
              }
              break;
            }
            case ClassComponent: {
              if (!didWarnAboutUpdateInRender) {
                error2("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state.");
                didWarnAboutUpdateInRender = true;
              }
              break;
            }
          }
        }
      }
    }
    function restorePendingUpdaters(root, lanes) {
      {
        if (isDevToolsPresent) {
          var memoizedUpdaters = root.memoizedUpdaters;
          memoizedUpdaters.forEach(function(schedulingFiber) {
            addFiberToLanesMap(root, schedulingFiber, lanes);
          });
        }
      }
    }
    var fakeActCallbackNode = {};
    function scheduleCallback$1(priorityLevel, callback) {
      {
        var actQueue = ReactCurrentActQueue$1.current;
        if (actQueue !== null) {
          actQueue.push(callback);
          return fakeActCallbackNode;
        } else {
          return scheduleCallback(priorityLevel, callback);
        }
      }
    }
    function cancelCallback$1(callbackNode) {
      if (callbackNode === fakeActCallbackNode) {
        return;
      }
      return cancelCallback(callbackNode);
    }
    function shouldForceFlushFallbacksInDEV() {
      return ReactCurrentActQueue$1.current !== null;
    }
    function warnIfUpdatesNotWrappedWithActDEV(fiber) {
      {
        if (fiber.mode & ConcurrentMode) {
          if (!isConcurrentActEnvironment()) {
            return;
          }
        } else {
          if (!isLegacyActEnvironment()) {
            return;
          }
          if (executionContext !== NoContext) {
            return;
          }
          if (fiber.tag !== FunctionComponent && fiber.tag !== ForwardRef && fiber.tag !== SimpleMemoComponent) {
            return;
          }
        }
        if (ReactCurrentActQueue$1.current === null) {
          var previousFiber = current;
          try {
            setCurrentFiber(fiber);
            error2("An update to %s inside a test was not wrapped in act(...).\n\nWhen testing, code that causes React state updates should be wrapped into act(...):\n\nact(() => {\n  /* fire events that update state */\n});\n/* assert on the output */\n\nThis ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act", getComponentNameFromFiber(fiber));
          } finally {
            if (previousFiber) {
              setCurrentFiber(fiber);
            } else {
              resetCurrentFiber();
            }
          }
        }
      }
    }
    function warnIfSuspenseResolutionNotWrappedWithActDEV(root) {
      {
        if (root.tag !== LegacyRoot && isConcurrentActEnvironment() && ReactCurrentActQueue$1.current === null) {
          error2("A suspended resource finished loading inside a test, but the event was not wrapped in act(...).\n\nWhen testing, code that resolves suspended data should be wrapped into act(...):\n\nact(() => {\n  /* finish loading suspended data */\n});\n/* assert on the output */\n\nThis ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act");
        }
      }
    }
    var resolveFamily = null;
    var failedBoundaries = null;
    var setRefreshHandler = function(handler) {
      {
        resolveFamily = handler;
      }
    };
    function resolveFunctionForHotReloading(type) {
      {
        if (resolveFamily === null) {
          return type;
        }
        var family = resolveFamily(type);
        if (family === void 0) {
          return type;
        }
        return family.current;
      }
    }
    function resolveClassForHotReloading(type) {
      return resolveFunctionForHotReloading(type);
    }
    function resolveForwardRefForHotReloading(type) {
      {
        if (resolveFamily === null) {
          return type;
        }
        var family = resolveFamily(type);
        if (family === void 0) {
          if (type !== null && type !== void 0 && typeof type.render === "function") {
            var currentRender = resolveFunctionForHotReloading(type.render);
            if (type.render !== currentRender) {
              var syntheticType = {
                $$typeof: REACT_FORWARD_REF_TYPE,
                render: currentRender
              };
              if (type.displayName !== void 0) {
                syntheticType.displayName = type.displayName;
              }
              return syntheticType;
            }
          }
          return type;
        }
        return family.current;
      }
    }
    function isCompatibleFamilyForHotReloading(fiber, element) {
      {
        if (resolveFamily === null) {
          return false;
        }
        var prevType = fiber.elementType;
        var nextType = element.type;
        var needsCompareFamilies = false;
        var $$typeofNextType = typeof nextType === "object" && nextType !== null ? nextType.$$typeof : null;
        switch (fiber.tag) {
          case ClassComponent: {
            if (typeof nextType === "function") {
              needsCompareFamilies = true;
            }
            break;
          }
          case FunctionComponent: {
            if (typeof nextType === "function") {
              needsCompareFamilies = true;
            } else if ($$typeofNextType === REACT_LAZY_TYPE) {
              needsCompareFamilies = true;
            }
            break;
          }
          case ForwardRef: {
            if ($$typeofNextType === REACT_FORWARD_REF_TYPE) {
              needsCompareFamilies = true;
            } else if ($$typeofNextType === REACT_LAZY_TYPE) {
              needsCompareFamilies = true;
            }
            break;
          }
          case MemoComponent:
          case SimpleMemoComponent: {
            if ($$typeofNextType === REACT_MEMO_TYPE) {
              needsCompareFamilies = true;
            } else if ($$typeofNextType === REACT_LAZY_TYPE) {
              needsCompareFamilies = true;
            }
            break;
          }
          default:
            return false;
        }
        if (needsCompareFamilies) {
          var prevFamily = resolveFamily(prevType);
          if (prevFamily !== void 0 && prevFamily === resolveFamily(nextType)) {
            return true;
          }
        }
        return false;
      }
    }
    function markFailedErrorBoundaryForHotReloading(fiber) {
      {
        if (resolveFamily === null) {
          return;
        }
        if (typeof WeakSet !== "function") {
          return;
        }
        if (failedBoundaries === null) {
          failedBoundaries = /* @__PURE__ */ new WeakSet();
        }
        failedBoundaries.add(fiber);
      }
    }
    var scheduleRefresh = function(root, update) {
      {
        if (resolveFamily === null) {
          return;
        }
        var staleFamilies = update.staleFamilies, updatedFamilies = update.updatedFamilies;
        flushPassiveEffects();
        flushSync2(function() {
          scheduleFibersWithFamiliesRecursively(root.current, updatedFamilies, staleFamilies);
        });
      }
    };
    var scheduleRoot = function(root, element) {
      {
        if (root.context !== emptyContextObject) {
          return;
        }
        flushPassiveEffects();
        flushSync2(function() {
          updateContainer(element, root, null, null);
        });
      }
    };
    function scheduleFibersWithFamiliesRecursively(fiber, updatedFamilies, staleFamilies) {
      {
        var alternate = fiber.alternate, child = fiber.child, sibling = fiber.sibling, tag = fiber.tag, type = fiber.type;
        var candidateType = null;
        switch (tag) {
          case FunctionComponent:
          case SimpleMemoComponent:
          case ClassComponent:
            candidateType = type;
            break;
          case ForwardRef:
            candidateType = type.render;
            break;
        }
        if (resolveFamily === null) {
          throw new Error("Expected resolveFamily to be set during hot reload.");
        }
        var needsRender = false;
        var needsRemount = false;
        if (candidateType !== null) {
          var family = resolveFamily(candidateType);
          if (family !== void 0) {
            if (staleFamilies.has(family)) {
              needsRemount = true;
            } else if (updatedFamilies.has(family)) {
              if (tag === ClassComponent) {
                needsRemount = true;
              } else {
                needsRender = true;
              }
            }
          }
        }
        if (failedBoundaries !== null) {
          if (failedBoundaries.has(fiber) || alternate !== null && failedBoundaries.has(alternate)) {
            needsRemount = true;
          }
        }
        if (needsRemount) {
          fiber._debugNeedsRemount = true;
        }
        if (needsRemount || needsRender) {
          scheduleUpdateOnFiber(fiber, SyncLane, NoTimestamp);
        }
        if (child !== null && !needsRemount) {
          scheduleFibersWithFamiliesRecursively(child, updatedFamilies, staleFamilies);
        }
        if (sibling !== null) {
          scheduleFibersWithFamiliesRecursively(sibling, updatedFamilies, staleFamilies);
        }
      }
    }
    var findHostInstancesForRefresh = function(root, families) {
      {
        var hostInstances = /* @__PURE__ */ new Set();
        var types = new Set(families.map(function(family) {
          return family.current;
        }));
        findHostInstancesForMatchingFibersRecursively(root.current, types, hostInstances);
        return hostInstances;
      }
    };
    function findHostInstancesForMatchingFibersRecursively(fiber, types, hostInstances) {
      {
        var child = fiber.child, sibling = fiber.sibling, tag = fiber.tag, type = fiber.type;
        var candidateType = null;
        switch (tag) {
          case FunctionComponent:
          case SimpleMemoComponent:
          case ClassComponent:
            candidateType = type;
            break;
          case ForwardRef:
            candidateType = type.render;
            break;
        }
        var didMatch = false;
        if (candidateType !== null) {
          if (types.has(candidateType)) {
            didMatch = true;
          }
        }
        if (didMatch) {
          findHostInstancesForFiberShallowly(fiber, hostInstances);
        } else {
          if (child !== null) {
            findHostInstancesForMatchingFibersRecursively(child, types, hostInstances);
          }
        }
        if (sibling !== null) {
          findHostInstancesForMatchingFibersRecursively(sibling, types, hostInstances);
        }
      }
    }
    function findHostInstancesForFiberShallowly(fiber, hostInstances) {
      {
        var foundHostInstances = findChildHostInstancesForFiberShallowly(fiber, hostInstances);
        if (foundHostInstances) {
          return;
        }
        var node = fiber;
        while (true) {
          switch (node.tag) {
            case HostComponent:
              hostInstances.add(node.stateNode);
              return;
            case HostPortal:
              hostInstances.add(node.stateNode.containerInfo);
              return;
            case HostRoot:
              hostInstances.add(node.stateNode.containerInfo);
              return;
          }
          if (node.return === null) {
            throw new Error("Expected to reach root first.");
          }
          node = node.return;
        }
      }
    }
    function findChildHostInstancesForFiberShallowly(fiber, hostInstances) {
      {
        var node = fiber;
        var foundHostInstances = false;
        while (true) {
          if (node.tag === HostComponent) {
            foundHostInstances = true;
            hostInstances.add(node.stateNode);
          } else if (node.child !== null) {
            node.child.return = node;
            node = node.child;
            continue;
          }
          if (node === fiber) {
            return foundHostInstances;
          }
          while (node.sibling === null) {
            if (node.return === null || node.return === fiber) {
              return foundHostInstances;
            }
            node = node.return;
          }
          node.sibling.return = node.return;
          node = node.sibling;
        }
      }
      return false;
    }
    var hasBadMapPolyfill;
    {
      hasBadMapPolyfill = false;
      try {
        var nonExtensibleObject = Object.preventExtensions({});
        /* @__PURE__ */ new Map([[nonExtensibleObject, null]]);
        /* @__PURE__ */ new Set([nonExtensibleObject]);
      } catch (e) {
        hasBadMapPolyfill = true;
      }
    }
    function FiberNode(tag, pendingProps, key, mode) {
      this.tag = tag;
      this.key = key;
      this.elementType = null;
      this.type = null;
      this.stateNode = null;
      this.return = null;
      this.child = null;
      this.sibling = null;
      this.index = 0;
      this.ref = null;
      this.pendingProps = pendingProps;
      this.memoizedProps = null;
      this.updateQueue = null;
      this.memoizedState = null;
      this.dependencies = null;
      this.mode = mode;
      this.flags = NoFlags;
      this.subtreeFlags = NoFlags;
      this.deletions = null;
      this.lanes = NoLanes;
      this.childLanes = NoLanes;
      this.alternate = null;
      {
        this.actualDuration = Number.NaN;
        this.actualStartTime = Number.NaN;
        this.selfBaseDuration = Number.NaN;
        this.treeBaseDuration = Number.NaN;
        this.actualDuration = 0;
        this.actualStartTime = -1;
        this.selfBaseDuration = 0;
        this.treeBaseDuration = 0;
      }
      {
        this._debugSource = null;
        this._debugOwner = null;
        this._debugNeedsRemount = false;
        this._debugHookTypes = null;
        if (!hasBadMapPolyfill && typeof Object.preventExtensions === "function") {
          Object.preventExtensions(this);
        }
      }
    }
    var createFiber = function(tag, pendingProps, key, mode) {
      return new FiberNode(tag, pendingProps, key, mode);
    };
    function shouldConstruct$1(Component3) {
      var prototype = Component3.prototype;
      return !!(prototype && prototype.isReactComponent);
    }
    function isSimpleFunctionComponent(type) {
      return typeof type === "function" && !shouldConstruct$1(type) && type.defaultProps === void 0;
    }
    function resolveLazyComponentTag(Component3) {
      if (typeof Component3 === "function") {
        return shouldConstruct$1(Component3) ? ClassComponent : FunctionComponent;
      } else if (Component3 !== void 0 && Component3 !== null) {
        var $$typeof = Component3.$$typeof;
        if ($$typeof === REACT_FORWARD_REF_TYPE) {
          return ForwardRef;
        }
        if ($$typeof === REACT_MEMO_TYPE) {
          return MemoComponent;
        }
      }
      return IndeterminateComponent;
    }
    function createWorkInProgress(current2, pendingProps) {
      var workInProgress2 = current2.alternate;
      if (workInProgress2 === null) {
        workInProgress2 = createFiber(current2.tag, pendingProps, current2.key, current2.mode);
        workInProgress2.elementType = current2.elementType;
        workInProgress2.type = current2.type;
        workInProgress2.stateNode = current2.stateNode;
        {
          workInProgress2._debugSource = current2._debugSource;
          workInProgress2._debugOwner = current2._debugOwner;
          workInProgress2._debugHookTypes = current2._debugHookTypes;
        }
        workInProgress2.alternate = current2;
        current2.alternate = workInProgress2;
      } else {
        workInProgress2.pendingProps = pendingProps;
        workInProgress2.type = current2.type;
        workInProgress2.flags = NoFlags;
        workInProgress2.subtreeFlags = NoFlags;
        workInProgress2.deletions = null;
        {
          workInProgress2.actualDuration = 0;
          workInProgress2.actualStartTime = -1;
        }
      }
      workInProgress2.flags = current2.flags & StaticMask;
      workInProgress2.childLanes = current2.childLanes;
      workInProgress2.lanes = current2.lanes;
      workInProgress2.child = current2.child;
      workInProgress2.memoizedProps = current2.memoizedProps;
      workInProgress2.memoizedState = current2.memoizedState;
      workInProgress2.updateQueue = current2.updateQueue;
      var currentDependencies = current2.dependencies;
      workInProgress2.dependencies = currentDependencies === null ? null : {
        lanes: currentDependencies.lanes,
        firstContext: currentDependencies.firstContext
      };
      workInProgress2.sibling = current2.sibling;
      workInProgress2.index = current2.index;
      workInProgress2.ref = current2.ref;
      {
        workInProgress2.selfBaseDuration = current2.selfBaseDuration;
        workInProgress2.treeBaseDuration = current2.treeBaseDuration;
      }
      {
        workInProgress2._debugNeedsRemount = current2._debugNeedsRemount;
        switch (workInProgress2.tag) {
          case IndeterminateComponent:
          case FunctionComponent:
          case SimpleMemoComponent:
            workInProgress2.type = resolveFunctionForHotReloading(current2.type);
            break;
          case ClassComponent:
            workInProgress2.type = resolveClassForHotReloading(current2.type);
            break;
          case ForwardRef:
            workInProgress2.type = resolveForwardRefForHotReloading(current2.type);
            break;
        }
      }
      return workInProgress2;
    }
    function resetWorkInProgress(workInProgress2, renderLanes2) {
      workInProgress2.flags &= StaticMask | Placement;
      var current2 = workInProgress2.alternate;
      if (current2 === null) {
        workInProgress2.childLanes = NoLanes;
        workInProgress2.lanes = renderLanes2;
        workInProgress2.child = null;
        workInProgress2.subtreeFlags = NoFlags;
        workInProgress2.memoizedProps = null;
        workInProgress2.memoizedState = null;
        workInProgress2.updateQueue = null;
        workInProgress2.dependencies = null;
        workInProgress2.stateNode = null;
        {
          workInProgress2.selfBaseDuration = 0;
          workInProgress2.treeBaseDuration = 0;
        }
      } else {
        workInProgress2.childLanes = current2.childLanes;
        workInProgress2.lanes = current2.lanes;
        workInProgress2.child = current2.child;
        workInProgress2.subtreeFlags = NoFlags;
        workInProgress2.deletions = null;
        workInProgress2.memoizedProps = current2.memoizedProps;
        workInProgress2.memoizedState = current2.memoizedState;
        workInProgress2.updateQueue = current2.updateQueue;
        workInProgress2.type = current2.type;
        var currentDependencies = current2.dependencies;
        workInProgress2.dependencies = currentDependencies === null ? null : {
          lanes: currentDependencies.lanes,
          firstContext: currentDependencies.firstContext
        };
        {
          workInProgress2.selfBaseDuration = current2.selfBaseDuration;
          workInProgress2.treeBaseDuration = current2.treeBaseDuration;
        }
      }
      return workInProgress2;
    }
    function createHostRootFiber(tag, isStrictMode, concurrentUpdatesByDefaultOverride) {
      var mode;
      if (tag === ConcurrentRoot) {
        mode = ConcurrentMode;
        if (isStrictMode === true) {
          mode |= StrictLegacyMode;
          {
            mode |= StrictEffectsMode;
          }
        }
      } else {
        mode = NoMode;
      }
      if (isDevToolsPresent) {
        mode |= ProfileMode;
      }
      return createFiber(HostRoot, null, null, mode);
    }
    function createFiberFromTypeAndProps(type, key, pendingProps, owner, mode, lanes) {
      var fiberTag = IndeterminateComponent;
      var resolvedType = type;
      if (typeof type === "function") {
        if (shouldConstruct$1(type)) {
          fiberTag = ClassComponent;
          {
            resolvedType = resolveClassForHotReloading(resolvedType);
          }
        } else {
          {
            resolvedType = resolveFunctionForHotReloading(resolvedType);
          }
        }
      } else if (typeof type === "string") {
        fiberTag = HostComponent;
      } else {
        getTag: switch (type) {
          case REACT_FRAGMENT_TYPE:
            return createFiberFromFragment(pendingProps.children, mode, lanes, key);
          case REACT_STRICT_MODE_TYPE:
            fiberTag = Mode;
            mode |= StrictLegacyMode;
            if ((mode & ConcurrentMode) !== NoMode) {
              mode |= StrictEffectsMode;
            }
            break;
          case REACT_PROFILER_TYPE:
            return createFiberFromProfiler(pendingProps, mode, lanes, key);
          case REACT_SUSPENSE_TYPE:
            return createFiberFromSuspense(pendingProps, mode, lanes, key);
          case REACT_SUSPENSE_LIST_TYPE:
            return createFiberFromSuspenseList(pendingProps, mode, lanes, key);
          case REACT_OFFSCREEN_TYPE:
            return createFiberFromOffscreen(pendingProps, mode, lanes, key);
          case REACT_LEGACY_HIDDEN_TYPE:
          // eslint-disable-next-line no-fallthrough
          case REACT_SCOPE_TYPE:
          // eslint-disable-next-line no-fallthrough
          case REACT_CACHE_TYPE:
          // eslint-disable-next-line no-fallthrough
          case REACT_TRACING_MARKER_TYPE:
          // eslint-disable-next-line no-fallthrough
          case REACT_DEBUG_TRACING_MODE_TYPE:
          // eslint-disable-next-line no-fallthrough
          default: {
            if (typeof type === "object" && type !== null) {
              switch (type.$$typeof) {
                case REACT_PROVIDER_TYPE:
                  fiberTag = ContextProvider;
                  break getTag;
                case REACT_CONTEXT_TYPE:
                  fiberTag = ContextConsumer;
                  break getTag;
                case REACT_FORWARD_REF_TYPE:
                  fiberTag = ForwardRef;
                  {
                    resolvedType = resolveForwardRefForHotReloading(resolvedType);
                  }
                  break getTag;
                case REACT_MEMO_TYPE:
                  fiberTag = MemoComponent;
                  break getTag;
                case REACT_LAZY_TYPE:
                  fiberTag = LazyComponent;
                  resolvedType = null;
                  break getTag;
              }
            }
            var info = "";
            {
              if (type === void 0 || typeof type === "object" && type !== null && Object.keys(type).length === 0) {
                info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
              }
              var ownerName = owner ? getComponentNameFromFiber(owner) : null;
              if (ownerName) {
                info += "\n\nCheck the render method of `" + ownerName + "`.";
              }
            }
            throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (type == null ? type : typeof type) + "." + info));
          }
        }
      }
      var fiber = createFiber(fiberTag, pendingProps, key, mode);
      fiber.elementType = type;
      fiber.type = resolvedType;
      fiber.lanes = lanes;
      {
        fiber._debugOwner = owner;
      }
      return fiber;
    }
    function createFiberFromElement(element, mode, lanes) {
      var owner = null;
      {
        owner = element._owner;
      }
      var type = element.type;
      var key = element.key;
      var pendingProps = element.props;
      var fiber = createFiberFromTypeAndProps(type, key, pendingProps, owner, mode, lanes);
      {
        fiber._debugSource = element._source;
        fiber._debugOwner = element._owner;
      }
      return fiber;
    }
    function createFiberFromFragment(elements, mode, lanes, key) {
      var fiber = createFiber(Fragment2, elements, key, mode);
      fiber.lanes = lanes;
      return fiber;
    }
    function createFiberFromProfiler(pendingProps, mode, lanes, key) {
      {
        if (typeof pendingProps.id !== "string") {
          error2('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof pendingProps.id);
        }
      }
      var fiber = createFiber(Profiler, pendingProps, key, mode | ProfileMode);
      fiber.elementType = REACT_PROFILER_TYPE;
      fiber.lanes = lanes;
      {
        fiber.stateNode = {
          effectDuration: 0,
          passiveEffectDuration: 0
        };
      }
      return fiber;
    }
    function createFiberFromSuspense(pendingProps, mode, lanes, key) {
      var fiber = createFiber(SuspenseComponent, pendingProps, key, mode);
      fiber.elementType = REACT_SUSPENSE_TYPE;
      fiber.lanes = lanes;
      return fiber;
    }
    function createFiberFromSuspenseList(pendingProps, mode, lanes, key) {
      var fiber = createFiber(SuspenseListComponent, pendingProps, key, mode);
      fiber.elementType = REACT_SUSPENSE_LIST_TYPE;
      fiber.lanes = lanes;
      return fiber;
    }
    function createFiberFromOffscreen(pendingProps, mode, lanes, key) {
      var fiber = createFiber(OffscreenComponent, pendingProps, key, mode);
      fiber.elementType = REACT_OFFSCREEN_TYPE;
      fiber.lanes = lanes;
      var primaryChildInstance = {};
      fiber.stateNode = primaryChildInstance;
      return fiber;
    }
    function createFiberFromText(content, mode, lanes) {
      var fiber = createFiber(HostText, content, null, mode);
      fiber.lanes = lanes;
      return fiber;
    }
    function createFiberFromHostInstanceForDeletion() {
      var fiber = createFiber(HostComponent, null, null, NoMode);
      fiber.elementType = "DELETED";
      return fiber;
    }
    function createFiberFromDehydratedFragment(dehydratedNode) {
      var fiber = createFiber(DehydratedFragment, null, null, NoMode);
      fiber.stateNode = dehydratedNode;
      return fiber;
    }
    function createFiberFromPortal(portal, mode, lanes) {
      var pendingProps = portal.children !== null ? portal.children : [];
      var fiber = createFiber(HostPortal, pendingProps, portal.key, mode);
      fiber.lanes = lanes;
      fiber.stateNode = {
        containerInfo: portal.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: portal.implementation
      };
      return fiber;
    }
    function assignFiberPropertiesInDEV(target, source) {
      if (target === null) {
        target = createFiber(IndeterminateComponent, null, null, NoMode);
      }
      target.tag = source.tag;
      target.key = source.key;
      target.elementType = source.elementType;
      target.type = source.type;
      target.stateNode = source.stateNode;
      target.return = source.return;
      target.child = source.child;
      target.sibling = source.sibling;
      target.index = source.index;
      target.ref = source.ref;
      target.pendingProps = source.pendingProps;
      target.memoizedProps = source.memoizedProps;
      target.updateQueue = source.updateQueue;
      target.memoizedState = source.memoizedState;
      target.dependencies = source.dependencies;
      target.mode = source.mode;
      target.flags = source.flags;
      target.subtreeFlags = source.subtreeFlags;
      target.deletions = source.deletions;
      target.lanes = source.lanes;
      target.childLanes = source.childLanes;
      target.alternate = source.alternate;
      {
        target.actualDuration = source.actualDuration;
        target.actualStartTime = source.actualStartTime;
        target.selfBaseDuration = source.selfBaseDuration;
        target.treeBaseDuration = source.treeBaseDuration;
      }
      target._debugSource = source._debugSource;
      target._debugOwner = source._debugOwner;
      target._debugNeedsRemount = source._debugNeedsRemount;
      target._debugHookTypes = source._debugHookTypes;
      return target;
    }
    function FiberRootNode(containerInfo, tag, hydrate, identifierPrefix, onRecoverableError) {
      this.tag = tag;
      this.containerInfo = containerInfo;
      this.pendingChildren = null;
      this.current = null;
      this.pingCache = null;
      this.finishedWork = null;
      this.timeoutHandle = noTimeout;
      this.context = null;
      this.pendingContext = null;
      this.callbackNode = null;
      this.callbackPriority = NoLane;
      this.eventTimes = createLaneMap(NoLanes);
      this.expirationTimes = createLaneMap(NoTimestamp);
      this.pendingLanes = NoLanes;
      this.suspendedLanes = NoLanes;
      this.pingedLanes = NoLanes;
      this.expiredLanes = NoLanes;
      this.mutableReadLanes = NoLanes;
      this.finishedLanes = NoLanes;
      this.entangledLanes = NoLanes;
      this.entanglements = createLaneMap(NoLanes);
      this.identifierPrefix = identifierPrefix;
      this.onRecoverableError = onRecoverableError;
      if (supportsHydration) {
        this.mutableSourceEagerHydrationData = null;
      }
      {
        this.effectDuration = 0;
        this.passiveEffectDuration = 0;
      }
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        var pendingUpdatersLaneMap = this.pendingUpdatersLaneMap = [];
        for (var _i = 0; _i < TotalLanes; _i++) {
          pendingUpdatersLaneMap.push(/* @__PURE__ */ new Set());
        }
      }
      {
        switch (tag) {
          case ConcurrentRoot:
            this._debugRootType = hydrate ? "hydrateRoot()" : "createRoot()";
            break;
          case LegacyRoot:
            this._debugRootType = hydrate ? "hydrate()" : "render()";
            break;
        }
      }
    }
    function createFiberRoot(containerInfo, tag, hydrate, initialChildren, hydrationCallbacks, isStrictMode, concurrentUpdatesByDefaultOverride, identifierPrefix, onRecoverableError, transitionCallbacks) {
      var root = new FiberRootNode(containerInfo, tag, hydrate, identifierPrefix, onRecoverableError);
      var uninitializedFiber = createHostRootFiber(tag, isStrictMode);
      root.current = uninitializedFiber;
      uninitializedFiber.stateNode = root;
      {
        var _initialState = {
          element: initialChildren,
          isDehydrated: hydrate,
          cache: null,
          // not enabled yet
          transitions: null
        };
        uninitializedFiber.memoizedState = _initialState;
      }
      initializeUpdateQueue(uninitializedFiber);
      return root;
    }
    var ReactVersion = "18.0.0-fc46dba67-20220329";
    function createPortal2(children, containerInfo, implementation) {
      var key = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      {
        checkKeyStringCoercion(key);
      }
      return {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: REACT_PORTAL_TYPE,
        key: key == null ? null : "" + key,
        children,
        containerInfo,
        implementation
      };
    }
    var didWarnAboutNestedUpdates;
    var didWarnAboutFindNodeInStrictMode;
    {
      didWarnAboutNestedUpdates = false;
      didWarnAboutFindNodeInStrictMode = {};
    }
    function getContextForSubtree(parentComponent) {
      if (!parentComponent) {
        return emptyContextObject;
      }
      var fiber = get(parentComponent);
      var parentContext = findCurrentUnmaskedContext(fiber);
      if (fiber.tag === ClassComponent) {
        var Component3 = fiber.type;
        if (isContextProvider(Component3)) {
          return processChildContext(fiber, Component3, parentContext);
        }
      }
      return parentContext;
    }
    function findHostInstance(component) {
      var fiber = get(component);
      if (fiber === void 0) {
        if (typeof component.render === "function") {
          throw new Error("Unable to find node on an unmounted component.");
        } else {
          var keys = Object.keys(component).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + keys);
        }
      }
      var hostFiber = findCurrentHostFiber(fiber);
      if (hostFiber === null) {
        return null;
      }
      return hostFiber.stateNode;
    }
    function findHostInstanceWithWarning(component, methodName) {
      {
        var fiber = get(component);
        if (fiber === void 0) {
          if (typeof component.render === "function") {
            throw new Error("Unable to find node on an unmounted component.");
          } else {
            var keys = Object.keys(component).join(",");
            throw new Error("Argument appears to not be a ReactComponent. Keys: " + keys);
          }
        }
        var hostFiber = findCurrentHostFiber(fiber);
        if (hostFiber === null) {
          return null;
        }
        if (hostFiber.mode & StrictLegacyMode) {
          var componentName = getComponentNameFromFiber(fiber) || "Component";
          if (!didWarnAboutFindNodeInStrictMode[componentName]) {
            didWarnAboutFindNodeInStrictMode[componentName] = true;
            var previousFiber = current;
            try {
              setCurrentFiber(hostFiber);
              if (fiber.mode & StrictLegacyMode) {
                error2("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", methodName, methodName, componentName);
              } else {
                error2("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", methodName, methodName, componentName);
              }
            } finally {
              if (previousFiber) {
                setCurrentFiber(previousFiber);
              } else {
                resetCurrentFiber();
              }
            }
          }
        }
        return hostFiber.stateNode;
      }
    }
    function createContainer(containerInfo, tag, hydrationCallbacks, isStrictMode, concurrentUpdatesByDefaultOverride, identifierPrefix, onRecoverableError, transitionCallbacks) {
      var hydrate = false;
      var initialChildren = null;
      return createFiberRoot(containerInfo, tag, hydrate, initialChildren, hydrationCallbacks, isStrictMode, concurrentUpdatesByDefaultOverride, identifierPrefix, onRecoverableError);
    }
    function createHydrationContainer(initialChildren, callback, containerInfo, tag, hydrationCallbacks, isStrictMode, concurrentUpdatesByDefaultOverride, identifierPrefix, onRecoverableError, transitionCallbacks) {
      var hydrate = true;
      var root = createFiberRoot(containerInfo, tag, hydrate, initialChildren, hydrationCallbacks, isStrictMode, concurrentUpdatesByDefaultOverride, identifierPrefix, onRecoverableError);
      root.context = getContextForSubtree(null);
      var current2 = root.current;
      var eventTime = requestEventTime();
      var lane = requestUpdateLane(current2);
      var update = createUpdate(eventTime, lane);
      update.callback = callback !== void 0 && callback !== null ? callback : null;
      enqueueUpdate(current2, update);
      scheduleInitialHydrationOnRoot(root, lane, eventTime);
      return root;
    }
    function updateContainer(element, container, parentComponent, callback) {
      {
        onScheduleRoot(container, element);
      }
      var current$1 = container.current;
      var eventTime = requestEventTime();
      var lane = requestUpdateLane(current$1);
      {
        markRenderScheduled(lane);
      }
      var context2 = getContextForSubtree(parentComponent);
      if (container.context === null) {
        container.context = context2;
      } else {
        container.pendingContext = context2;
      }
      {
        if (isRendering && current !== null && !didWarnAboutNestedUpdates) {
          didWarnAboutNestedUpdates = true;
          error2("Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.\n\nCheck the render method of %s.", getComponentNameFromFiber(current) || "Unknown");
        }
      }
      var update = createUpdate(eventTime, lane);
      update.payload = {
        element
      };
      callback = callback === void 0 ? null : callback;
      if (callback !== null) {
        {
          if (typeof callback !== "function") {
            error2("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", callback);
          }
        }
        update.callback = callback;
      }
      enqueueUpdate(current$1, update);
      var root = scheduleUpdateOnFiber(current$1, lane, eventTime);
      if (root !== null) {
        entangleTransitions(root, current$1, lane);
      }
      return lane;
    }
    function getPublicRootInstance(container) {
      var containerFiber = container.current;
      if (!containerFiber.child) {
        return null;
      }
      switch (containerFiber.child.tag) {
        case HostComponent:
          return getPublicInstance(containerFiber.child.stateNode);
        default:
          return containerFiber.child.stateNode;
      }
    }
    function attemptSynchronousHydration(fiber) {
      switch (fiber.tag) {
        case HostRoot:
          var root = fiber.stateNode;
          if (isRootDehydrated(root)) {
            var lanes = getHighestPriorityPendingLanes(root);
            flushRoot(root, lanes);
          }
          break;
        case SuspenseComponent:
          var eventTime = requestEventTime();
          flushSync2(function() {
            return scheduleUpdateOnFiber(fiber, SyncLane, eventTime);
          });
          var retryLane = SyncLane;
          markRetryLaneIfNotHydrated(fiber, retryLane);
          break;
      }
    }
    function markRetryLaneImpl(fiber, retryLane) {
      var suspenseState = fiber.memoizedState;
      if (suspenseState !== null && suspenseState.dehydrated !== null) {
        suspenseState.retryLane = higherPriorityLane(suspenseState.retryLane, retryLane);
      }
    }
    function markRetryLaneIfNotHydrated(fiber, retryLane) {
      markRetryLaneImpl(fiber, retryLane);
      var alternate = fiber.alternate;
      if (alternate) {
        markRetryLaneImpl(alternate, retryLane);
      }
    }
    function attemptContinuousHydration(fiber) {
      if (fiber.tag !== SuspenseComponent) {
        return;
      }
      var eventTime = requestEventTime();
      var lane = SelectiveHydrationLane;
      scheduleUpdateOnFiber(fiber, lane, eventTime);
      markRetryLaneIfNotHydrated(fiber, lane);
    }
    function attemptHydrationAtCurrentPriority(fiber) {
      if (fiber.tag !== SuspenseComponent) {
        return;
      }
      var eventTime = requestEventTime();
      var lane = requestUpdateLane(fiber);
      scheduleUpdateOnFiber(fiber, lane, eventTime);
      markRetryLaneIfNotHydrated(fiber, lane);
    }
    function findHostInstanceWithNoPortals(fiber) {
      var hostFiber = findCurrentHostFiberWithNoPortals(fiber);
      if (hostFiber === null) {
        return null;
      }
      return hostFiber.stateNode;
    }
    var shouldErrorImpl = function(fiber) {
      return null;
    };
    function shouldError(fiber) {
      return shouldErrorImpl(fiber);
    }
    var shouldSuspendImpl = function(fiber) {
      return false;
    };
    function shouldSuspend(fiber) {
      return shouldSuspendImpl(fiber);
    }
    var overrideHookState = null;
    var overrideHookStateDeletePath = null;
    var overrideHookStateRenamePath = null;
    var overrideProps = null;
    var overridePropsDeletePath = null;
    var overridePropsRenamePath = null;
    var scheduleUpdate = null;
    var setErrorHandler = null;
    var setSuspenseHandler = null;
    {
      var copyWithDeleteImpl = function(obj, path, index2) {
        var key = path[index2];
        var updated = isArray(obj) ? obj.slice() : assign({}, obj);
        if (index2 + 1 === path.length) {
          if (isArray(updated)) {
            updated.splice(key, 1);
          } else {
            delete updated[key];
          }
          return updated;
        }
        updated[key] = copyWithDeleteImpl(obj[key], path, index2 + 1);
        return updated;
      };
      var copyWithDelete = function(obj, path) {
        return copyWithDeleteImpl(obj, path, 0);
      };
      var copyWithRenameImpl = function(obj, oldPath, newPath, index2) {
        var oldKey = oldPath[index2];
        var updated = isArray(obj) ? obj.slice() : assign({}, obj);
        if (index2 + 1 === oldPath.length) {
          var newKey = newPath[index2];
          updated[newKey] = updated[oldKey];
          if (isArray(updated)) {
            updated.splice(oldKey, 1);
          } else {
            delete updated[oldKey];
          }
        } else {
          updated[oldKey] = copyWithRenameImpl(
            // $FlowFixMe number or string is fine here
            obj[oldKey],
            oldPath,
            newPath,
            index2 + 1
          );
        }
        return updated;
      };
      var copyWithRename = function(obj, oldPath, newPath) {
        if (oldPath.length !== newPath.length) {
          warn("copyWithRename() expects paths of the same length");
          return;
        } else {
          for (var i2 = 0; i2 < newPath.length - 1; i2++) {
            if (oldPath[i2] !== newPath[i2]) {
              warn("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
          }
        }
        return copyWithRenameImpl(obj, oldPath, newPath, 0);
      };
      var copyWithSetImpl = function(obj, path, index2, value) {
        if (index2 >= path.length) {
          return value;
        }
        var key = path[index2];
        var updated = isArray(obj) ? obj.slice() : assign({}, obj);
        updated[key] = copyWithSetImpl(obj[key], path, index2 + 1, value);
        return updated;
      };
      var copyWithSet = function(obj, path, value) {
        return copyWithSetImpl(obj, path, 0, value);
      };
      var findHook = function(fiber, id) {
        var currentHook2 = fiber.memoizedState;
        while (currentHook2 !== null && id > 0) {
          currentHook2 = currentHook2.next;
          id--;
        }
        return currentHook2;
      };
      overrideHookState = function(fiber, id, path, value) {
        var hook = findHook(fiber, id);
        if (hook !== null) {
          var newState = copyWithSet(hook.memoizedState, path, value);
          hook.memoizedState = newState;
          hook.baseState = newState;
          fiber.memoizedProps = assign({}, fiber.memoizedProps);
          scheduleUpdateOnFiber(fiber, SyncLane, NoTimestamp);
        }
      };
      overrideHookStateDeletePath = function(fiber, id, path) {
        var hook = findHook(fiber, id);
        if (hook !== null) {
          var newState = copyWithDelete(hook.memoizedState, path);
          hook.memoizedState = newState;
          hook.baseState = newState;
          fiber.memoizedProps = assign({}, fiber.memoizedProps);
          scheduleUpdateOnFiber(fiber, SyncLane, NoTimestamp);
        }
      };
      overrideHookStateRenamePath = function(fiber, id, oldPath, newPath) {
        var hook = findHook(fiber, id);
        if (hook !== null) {
          var newState = copyWithRename(hook.memoizedState, oldPath, newPath);
          hook.memoizedState = newState;
          hook.baseState = newState;
          fiber.memoizedProps = assign({}, fiber.memoizedProps);
          scheduleUpdateOnFiber(fiber, SyncLane, NoTimestamp);
        }
      };
      overrideProps = function(fiber, path, value) {
        fiber.pendingProps = copyWithSet(fiber.memoizedProps, path, value);
        if (fiber.alternate) {
          fiber.alternate.pendingProps = fiber.pendingProps;
        }
        scheduleUpdateOnFiber(fiber, SyncLane, NoTimestamp);
      };
      overridePropsDeletePath = function(fiber, path) {
        fiber.pendingProps = copyWithDelete(fiber.memoizedProps, path);
        if (fiber.alternate) {
          fiber.alternate.pendingProps = fiber.pendingProps;
        }
        scheduleUpdateOnFiber(fiber, SyncLane, NoTimestamp);
      };
      overridePropsRenamePath = function(fiber, oldPath, newPath) {
        fiber.pendingProps = copyWithRename(fiber.memoizedProps, oldPath, newPath);
        if (fiber.alternate) {
          fiber.alternate.pendingProps = fiber.pendingProps;
        }
        scheduleUpdateOnFiber(fiber, SyncLane, NoTimestamp);
      };
      scheduleUpdate = function(fiber) {
        scheduleUpdateOnFiber(fiber, SyncLane, NoTimestamp);
      };
      setErrorHandler = function(newShouldErrorImpl) {
        shouldErrorImpl = newShouldErrorImpl;
      };
      setSuspenseHandler = function(newShouldSuspendImpl) {
        shouldSuspendImpl = newShouldSuspendImpl;
      };
    }
    function findHostInstanceByFiber(fiber) {
      var hostFiber = findCurrentHostFiber(fiber);
      if (hostFiber === null) {
        return null;
      }
      return hostFiber.stateNode;
    }
    function emptyFindFiberByHostInstance(instance) {
      return null;
    }
    function getCurrentFiberForDevTools() {
      return current;
    }
    function injectIntoDevTools(devToolsConfig) {
      var findFiberByHostInstance = devToolsConfig.findFiberByHostInstance;
      var ReactCurrentDispatcher2 = ReactSharedInternals.ReactCurrentDispatcher;
      return injectInternals({
        bundleType: devToolsConfig.bundleType,
        version: devToolsConfig.version,
        rendererPackageName: devToolsConfig.rendererPackageName,
        rendererConfig: devToolsConfig.rendererConfig,
        overrideHookState,
        overrideHookStateDeletePath,
        overrideHookStateRenamePath,
        overrideProps,
        overridePropsDeletePath,
        overridePropsRenamePath,
        setErrorHandler,
        setSuspenseHandler,
        scheduleUpdate,
        currentDispatcherRef: ReactCurrentDispatcher2,
        findHostInstanceByFiber,
        findFiberByHostInstance: findFiberByHostInstance || emptyFindFiberByHostInstance,
        // React Refresh
        findHostInstancesForRefresh,
        scheduleRefresh,
        scheduleRoot,
        setRefreshHandler,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: getCurrentFiberForDevTools,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: ReactVersion
      });
    }
    exports10.attemptContinuousHydration = attemptContinuousHydration;
    exports10.attemptHydrationAtCurrentPriority = attemptHydrationAtCurrentPriority;
    exports10.attemptSynchronousHydration = attemptSynchronousHydration;
    exports10.batchedUpdates = batchedUpdates;
    exports10.createComponentSelector = createComponentSelector;
    exports10.createContainer = createContainer;
    exports10.createHasPseudoClassSelector = createHasPseudoClassSelector;
    exports10.createHydrationContainer = createHydrationContainer;
    exports10.createPortal = createPortal2;
    exports10.createRoleSelector = createRoleSelector;
    exports10.createTestNameSelector = createTestNameSelector;
    exports10.createTextSelector = createTextSelector;
    exports10.deferredUpdates = deferredUpdates;
    exports10.discreteUpdates = discreteUpdates;
    exports10.findAllNodes = findAllNodes;
    exports10.findBoundingRects = findBoundingRects;
    exports10.findHostInstance = findHostInstance;
    exports10.findHostInstanceWithNoPortals = findHostInstanceWithNoPortals;
    exports10.findHostInstanceWithWarning = findHostInstanceWithWarning;
    exports10.flushControlled = flushControlled;
    exports10.flushPassiveEffects = flushPassiveEffects;
    exports10.flushSync = flushSync2;
    exports10.focusWithin = focusWithin;
    exports10.getCurrentUpdatePriority = getCurrentUpdatePriority;
    exports10.getFindAllNodesFailureDescription = getFindAllNodesFailureDescription;
    exports10.getPublicRootInstance = getPublicRootInstance;
    exports10.injectIntoDevTools = injectIntoDevTools;
    exports10.isAlreadyRendering = isAlreadyRendering;
    exports10.observeVisibleRects = observeVisibleRects;
    exports10.registerMutableSourceForHydration = registerMutableSourceForHydration;
    exports10.runWithPriority = runWithPriority;
    exports10.shouldError = shouldError;
    exports10.shouldSuspend = shouldSuspend;
    exports10.updateContainer = updateContainer;
    return exports10;
  };
}
var __export05;
var __export110;
var __export25;
var __export35;
var __export45;
var __export55;
var __export63;
var __export73;
var __export83;
var __export93;
var __export103;
var __export113;
var __export124;
var __export134;
var __export143;
var __export153;
var __export163;
var __export173;
var __export183;
var __export192;
var __export20;
var __export21;
var __export222;
var __export232;
var __export242;
var __export252;
var __export26;
var __export27;
var __export28;
var __export29;
var __export30;
var __export31;
var __export322;
var __export332;
if (Object.isExtensible(module7.exports) && Object.keys(module7.exports).length === 34) {
  __export05 = module7.exports["attemptContinuousHydration"];
  __export110 = module7.exports["attemptHydrationAtCurrentPriority"];
  __export25 = module7.exports["attemptSynchronousHydration"];
  __export35 = module7.exports["batchedUpdates"];
  __export45 = module7.exports["createComponentSelector"];
  __export55 = module7.exports["createContainer"];
  __export63 = module7.exports["createHasPseudoClassSelector"];
  __export73 = module7.exports["createHydrationContainer"];
  __export83 = module7.exports["createPortal"];
  __export93 = module7.exports["createRoleSelector"];
  __export103 = module7.exports["createTestNameSelector"];
  __export113 = module7.exports["createTextSelector"];
  __export124 = module7.exports["deferredUpdates"];
  __export134 = module7.exports["discreteUpdates"];
  __export143 = module7.exports["findAllNodes"];
  __export153 = module7.exports["findBoundingRects"];
  __export163 = module7.exports["findHostInstance"];
  __export173 = module7.exports["findHostInstanceWithNoPortals"];
  __export183 = module7.exports["findHostInstanceWithWarning"];
  __export192 = module7.exports["flushControlled"];
  __export20 = module7.exports["flushPassiveEffects"];
  __export21 = module7.exports["flushSync"];
  __export222 = module7.exports["focusWithin"];
  __export232 = module7.exports["getCurrentUpdatePriority"];
  __export242 = module7.exports["getFindAllNodesFailureDescription"];
  __export252 = module7.exports["getPublicRootInstance"];
  __export26 = module7.exports["injectIntoDevTools"];
  __export27 = module7.exports["isAlreadyRendering"];
  __export28 = module7.exports["observeVisibleRects"];
  __export29 = module7.exports["registerMutableSourceForHydration"];
  __export30 = module7.exports["runWithPriority"];
  __export31 = module7.exports["shouldError"];
  __export322 = module7.exports["shouldSuspend"];
  __export332 = module7.exports["updateContainer"];
}
var react_reconciler_development_default = module7.exports;

// ../../node_modules/.pnpm/react-reconciler@0.27.0_react@18.3.1/node_modules/react-reconciler/cjs/react-reconciler.production.min.js
import * as $cjs$react2 from "react";
function __cjs_default__4(requiredModule) {
  var Object2 = (typeof window !== "undefined" && window || typeof self !== "undefined" && self || typeof global4 !== "undefined" && global4 || typeof globalThis !== "undefined" && globalThis || {}).Object;
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
var global4 = typeof window !== "undefined" && window || typeof self !== "undefined" && self || typeof global4 !== "undefined" && global4 || typeof globalThis !== "undefined" && globalThis || {};
var exports8 = {};
var module8 = {
  get exports() {
    return exports8;
  },
  set exports(value) {
    exports8 = value;
  }
};
module8.exports = function $$$reconciler($$$hostConfig) {
  var exports10 = {};
  "use strict";
  var aa = __cjs_default__4(typeof $cjs$react2 !== "undefined" ? $cjs$react2 : {}), ba = __cjs_default__4(typeof scheduler_exports !== "undefined" ? scheduler_exports : {}), ca = Object.assign;
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
  function y2(a, b) {
    fc++;
    ec[fc] = a.current;
    a.current = b;
  }
  var hc = {}, A2 = gc(hc), B2 = gc(false), ic = hc;
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
    x(B2);
    x(A2);
  }
  function lc(a, b, c) {
    if (A2.current !== hc) throw Error(n(168));
    y2(A2, b);
    y2(B2, c);
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
    ic = A2.current;
    y2(A2, a);
    y2(B2, B2.current);
    return true;
  }
  function oc(a, b, c) {
    var d = a.stateNode;
    if (!d) throw Error(n(169));
    c ? (a = mc(a, b, ic), d.__reactInternalMemoizedMergedChildContext = a, x(B2), x(A2), y2(A2, a)) : x(B2);
    y2(B2, c);
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
  var D3 = 0;
  function Ec(a) {
    a &= -a;
    return 1 < a ? 4 < a ? 0 !== (a & 268435455) ? 16 : 536870912 : 4 : 1;
  }
  var Fc = ba.unstable_scheduleCallback, Gc = ba.unstable_cancelCallback, Hc = ba.unstable_shouldYield, Ic = ba.unstable_requestPaint, E3 = ba.unstable_now, Jc = ba.unstable_ImmediatePriority, Kc = ba.unstable_UserBlockingPriority, Lc = ba.unstable_NormalPriority, Mc = ba.unstable_IdlePriority, Nc = null, Oc = null;
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
      var a = 0, b = D3;
      try {
        var c = Sc;
        for (D3 = 1; a < c.length; a++) {
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
        D3 = b, Uc = false;
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
    Ta ? (y2(bd, b._currentValue), b._currentValue = c) : (y2(bd, b._currentValue2), b._currentValue2 = c);
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
    null !== c && (c = c.shared, null !== F2 && 0 !== (a.mode & 1) && 0 === (G2 & 2) ? (a = c.interleaved, null === a ? (b.next = b, null === md ? md = [c] : md.push(c)) : (b.next = a.next, a.next = b), c.interleaved = b) : (a = c.pending, null === a ? b.next = b : (b.next = a.next, a.next = b), c.pending = b));
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
      var v2 = e.baseState;
      g3 = 0;
      m = l = k3 = null;
      h2 = f2;
      do {
        var r2 = h2.lane, z2 = h2.eventTime;
        if ((d & r2) === r2) {
          null !== m && (m = m.next = {
            eventTime: z2,
            lane: 0,
            tag: h2.tag,
            payload: h2.payload,
            callback: h2.callback,
            next: null
          });
          a: {
            var q = a, N2 = h2;
            r2 = b;
            z2 = c;
            switch (N2.tag) {
              case 1:
                q = N2.payload;
                if ("function" === typeof q) {
                  v2 = q.call(z2, v2, r2);
                  break a;
                }
                v2 = q;
                break a;
              case 3:
                q.flags = q.flags & -65537 | 128;
              case 0:
                q = N2.payload;
                r2 = "function" === typeof q ? q.call(z2, v2, r2) : q;
                if (null === r2 || void 0 === r2) break a;
                v2 = ca({}, v2, r2);
                break a;
              case 2:
                nd = true;
            }
          }
          null !== h2.callback && 0 !== h2.lane && (a.flags |= 64, r2 = e.effects, null === r2 ? e.effects = [h2] : r2.push(h2));
        } else z2 = { eventTime: z2, lane: r2, tag: h2.tag, payload: h2.payload, callback: h2.callback, next: null }, null === m ? (l = m = z2, k3 = v2) : m = m.next = z2, g3 |= r2;
        h2 = h2.next;
        if (null === h2) if (h2 = e.shared.pending, null === h2) break;
        else r2 = h2, h2 = r2.next, r2.next = null, e.lastBaseUpdate = r2, e.shared.pending = null;
      } while (1);
      null === m && (k3 = v2);
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
      a.memoizedState = v2;
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
    "object" === typeof f2 && null !== f2 ? f2 = ld(f2) : (e = C(b) ? ic : A2.current, d = b.contextTypes, f2 = (d = null !== d && void 0 !== d) ? jc(a, e) : hc);
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
    "object" === typeof f2 && null !== f2 ? e.context = ld(f2) : (f2 = C(b) ? ic : A2.current, e.context = jc(a, f2));
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
    function v2(a2, b2, c2) {
      if ("string" === typeof b2 && "" !== b2 || "number" === typeof b2) return b2 = ke("" + b2, a2.mode, c2), b2.return = a2, b2;
      if ("object" === typeof b2 && null !== b2) {
        switch (b2.$$typeof) {
          case fa:
            return c2 = le(b2.type, b2.key, b2.props, null, a2.mode, c2), c2.ref = fe(a2, null, b2), c2.return = a2, c2;
          case ha:
            return b2 = me(b2, a2.mode, c2), b2.return = a2, b2;
          case ra:
            var d2 = b2._init;
            return v2(a2, d2(b2._payload), c2);
        }
        if (Ea(b2) || ua(b2)) return b2 = ne(b2, a2.mode, c2, null), b2.return = a2, b2;
        ge(a2, b2);
      }
      return null;
    }
    function r2(a2, b2, c2, d2) {
      var e2 = null !== b2 ? b2.key : null;
      if ("string" === typeof c2 && "" !== c2 || "number" === typeof c2) return null !== e2 ? null : h2(a2, b2, "" + c2, d2);
      if ("object" === typeof c2 && null !== c2) {
        switch (c2.$$typeof) {
          case fa:
            return c2.key === e2 ? k3(a2, b2, c2, d2) : null;
          case ha:
            return c2.key === e2 ? l(a2, b2, c2, d2) : null;
          case ra:
            return e2 = c2._init, r2(
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
    function z2(a2, b2, c2, d2, e2) {
      if ("string" === typeof d2 && "" !== d2 || "number" === typeof d2) return a2 = a2.get(c2) || null, h2(b2, a2, "" + d2, e2);
      if ("object" === typeof d2 && null !== d2) {
        switch (d2.$$typeof) {
          case fa:
            return a2 = a2.get(null === d2.key ? c2 : d2.key) || null, k3(b2, a2, d2, e2);
          case ha:
            return a2 = a2.get(null === d2.key ? c2 : d2.key) || null, l(b2, a2, d2, e2);
          case ra:
            var f3 = d2._init;
            return z2(a2, b2, c2, f3(d2._payload), e2);
        }
        if (Ea(d2) || ua(d2)) return a2 = a2.get(c2) || null, m(b2, a2, d2, e2, null);
        ge(b2, d2);
      }
      return null;
    }
    function q(e2, g4, h3, k4) {
      for (var l2 = null, m2 = null, w = g4, u3 = g4 = 0, t2 = null; null !== w && u3 < h3.length; u3++) {
        w.index > u3 ? (t2 = w, w = null) : t2 = w.sibling;
        var q2 = r2(e2, w, h3[u3], k4);
        if (null === q2) {
          null === w && (w = t2);
          break;
        }
        a && w && null === q2.alternate && b(e2, w);
        g4 = f2(q2, g4, u3);
        null === m2 ? l2 = q2 : m2.sibling = q2;
        m2 = q2;
        w = t2;
      }
      if (u3 === h3.length) return c(e2, w), I2 && Pd(e2, u3), l2;
      if (null === w) {
        for (; u3 < h3.length; u3++) w = v2(e2, h3[u3], k4), null !== w && (g4 = f2(w, g4, u3), null === m2 ? l2 = w : m2.sibling = w, m2 = w);
        I2 && Pd(e2, u3);
        return l2;
      }
      for (w = d(e2, w); u3 < h3.length; u3++) t2 = z2(w, e2, u3, h3[u3], k4), null !== t2 && (a && null !== t2.alternate && w.delete(null === t2.key ? u3 : t2.key), g4 = f2(t2, g4, u3), null === m2 ? l2 = t2 : m2.sibling = t2, m2 = t2);
      a && w.forEach(function(a2) {
        return b(e2, a2);
      });
      I2 && Pd(e2, u3);
      return l2;
    }
    function N2(e2, g4, h3, k4) {
      var l2 = ua(h3);
      if ("function" !== typeof l2) throw Error(n(150));
      h3 = l2.call(h3);
      if (null == h3) throw Error(n(151));
      for (var w = l2 = null, m2 = g4, u3 = g4 = 0, q2 = null, t2 = h3.next(); null !== m2 && !t2.done; u3++, t2 = h3.next()) {
        m2.index > u3 ? (q2 = m2, m2 = null) : q2 = m2.sibling;
        var V = r2(e2, m2, t2.value, k4);
        if (null === V) {
          null === m2 && (m2 = q2);
          break;
        }
        a && m2 && null === V.alternate && b(e2, m2);
        g4 = f2(V, g4, u3);
        null === w ? l2 = V : w.sibling = V;
        w = V;
        m2 = q2;
      }
      if (t2.done) return c(
        e2,
        m2
      ), I2 && Pd(e2, u3), l2;
      if (null === m2) {
        for (; !t2.done; u3++, t2 = h3.next()) t2 = v2(e2, t2.value, k4), null !== t2 && (g4 = f2(t2, g4, u3), null === w ? l2 = t2 : w.sibling = t2, w = t2);
        I2 && Pd(e2, u3);
        return l2;
      }
      for (m2 = d(e2, m2); !t2.done; u3++, t2 = h3.next()) t2 = z2(m2, e2, u3, t2.value, k4), null !== t2 && (a && null !== t2.alternate && m2.delete(null === t2.key ? u3 : t2.key), g4 = f2(t2, g4, u3), null === w ? l2 = t2 : w.sibling = t2, w = t2);
      a && m2.forEach(function(a2) {
        return b(e2, a2);
      });
      I2 && Pd(e2, u3);
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
    y2(te, b);
    y2(se, a);
    y2(re, qe);
    a = Ga(b);
    x(re);
    y2(re, a);
  }
  function we() {
    x(re);
    x(se);
    x(te);
  }
  function xe(a) {
    var b = ue(te.current), c = ue(re.current);
    b = Ha(c, a.type, b);
    c !== b && (y2(se, a), y2(re, b));
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
          var v2 = {
            lane: m,
            action: l.action,
            hasEagerState: l.hasEagerState,
            eagerState: l.eagerState,
            next: null
          };
          null === k3 ? (h2 = k3 = v2, g3 = d) : k3 = k3.next = v2;
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
      if (null === F2) throw Error(n(349));
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
    var c = D3;
    D3 = 0 !== c && 4 > c ? c : 4;
    a(true);
    var d = De.transition;
    De.transition = {};
    try {
      a(false), b();
    } finally {
      D3 = c, De.transition = d;
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
    null !== F2 && 0 !== (a.mode & 1) && 0 === (G2 & 2) ? (a = b.interleaved, null === a ? (c.next = c, null === md ? md = [b] : md.push(b)) : (c.next = a.next, a.next = c), b.interleaved = c) : (a = b.pending, null === a ? c.next = c : (c.next = a.next, a.next = c), b.pending = c);
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
      if (null === F2) throw Error(n(349));
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
    var a = Qe(), b = F2.identifierPrefix;
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
        x(B2);
        x(A2);
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
              y2(J2, J2.current & 1 | 2);
              return b.child;
            }
            a = a.sibling;
          }
          null !== e.tail && E3() > Uf && (b.flags |= 128, d = true, Qf(e, false), b.lanes = 4194304);
        }
        else {
          if (!d) if (a = ze(f2), null !== a) {
            if (b.flags |= 128, d = true, a = a.updateQueue, null !== a && (b.updateQueue = a, b.flags |= 4), Qf(e, true), null === e.tail && "hidden" === e.tailMode && !f2.alternate && !I2) return P2(b), null;
          } else 2 * E3() - e.renderingStartTime > Uf && 1073741824 !== c && (b.flags |= 128, d = true, Qf(e, false), b.lanes = 4194304);
          e.isBackwards ? (f2.sibling = b.child, b.child = f2) : (a = e.last, null !== a ? a.sibling = f2 : b.child = f2, e.last = f2);
        }
        if (null !== e.tail) return b = e.tail, e.rendering = b, e.tail = b.sibling, e.renderingStartTime = E3(), b.sibling = null, a = J2.current, y2(J2, d ? a & 1 | 2 : a & 1), b;
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
    if ("hidden" === d.mode) if (0 === (b.mode & 1)) b.memoizedState = { baseLanes: 0, cachePool: null }, y2(eg, Wf), Wf |= c;
    else if (0 !== (c & 1073741824)) b.memoizedState = { baseLanes: 0, cachePool: null }, d = null !== f2 ? f2.baseLanes : c, y2(eg, Wf), Wf |= d;
    else return a = null !== f2 ? f2.baseLanes | c : c, b.lanes = b.childLanes = 1073741824, b.memoizedState = { baseLanes: a, cachePool: null }, b.updateQueue = null, y2(eg, Wf), Wf |= a, null;
    else null !== f2 ? (d = f2.baseLanes | c, b.memoizedState = null) : d = c, y2(eg, Wf), Wf |= d;
    R2(a, b, e, c);
    return b.child;
  }
  function fg(a, b) {
    var c = b.ref;
    if (null === a && null !== c || null !== a && a.ref !== c) b.flags |= 512, b.flags |= 2097152;
  }
  function cg(a, b, c, d, e) {
    var f2 = C(c) ? ic : A2.current;
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
      "object" === typeof l && null !== l ? l = ld(l) : (l = C(c) ? ic : A2.current, l = jc(b, l));
      var m = c.getDerivedStateFromProps, v2 = "function" === typeof m || "function" === typeof g3.getSnapshotBeforeUpdate;
      v2 || "function" !== typeof g3.UNSAFE_componentWillReceiveProps && "function" !== typeof g3.componentWillReceiveProps || (h2 !== d || k3 !== l) && Ed(b, g3, d, l);
      nd = false;
      var r2 = b.memoizedState;
      g3.state = r2;
      ud(b, d, g3, e);
      k3 = b.memoizedState;
      h2 !== d || r2 !== k3 || B2.current || nd ? ("function" === typeof m && (yd(b, c, m, d), k3 = b.memoizedState), (h2 = nd || Cd(b, c, h2, d, r2, k3, l)) ? (v2 || "function" !== typeof g3.UNSAFE_componentWillMount && "function" !== typeof g3.componentWillMount || ("function" === typeof g3.componentWillMount && g3.componentWillMount(), "function" === typeof g3.UNSAFE_componentWillMount && g3.UNSAFE_componentWillMount()), "function" === typeof g3.componentDidMount && (b.flags |= 4194308)) : ("function" === typeof g3.componentDidMount && (b.flags |= 4194308), b.memoizedProps = d, b.memoizedState = k3), g3.props = d, g3.state = k3, g3.context = l, d = h2) : ("function" === typeof g3.componentDidMount && (b.flags |= 4194308), d = false);
    } else {
      g3 = b.stateNode;
      pd(a, b);
      h2 = b.memoizedProps;
      l = b.type === b.elementType ? h2 : ad(b.type, h2);
      g3.props = l;
      v2 = b.pendingProps;
      r2 = g3.context;
      k3 = c.contextType;
      "object" === typeof k3 && null !== k3 ? k3 = ld(k3) : (k3 = C(c) ? ic : A2.current, k3 = jc(b, k3));
      var z2 = c.getDerivedStateFromProps;
      (m = "function" === typeof z2 || "function" === typeof g3.getSnapshotBeforeUpdate) || "function" !== typeof g3.UNSAFE_componentWillReceiveProps && "function" !== typeof g3.componentWillReceiveProps || (h2 !== v2 || r2 !== k3) && Ed(b, g3, d, k3);
      nd = false;
      r2 = b.memoizedState;
      g3.state = r2;
      ud(b, d, g3, e);
      var q = b.memoizedState;
      h2 !== v2 || r2 !== q || B2.current || nd ? ("function" === typeof z2 && (yd(b, c, z2, d), q = b.memoizedState), (l = nd || Cd(b, c, l, d, r2, q, k3) || false) ? (m || "function" !== typeof g3.UNSAFE_componentWillUpdate && "function" !== typeof g3.componentWillUpdate || ("function" === typeof g3.componentWillUpdate && g3.componentWillUpdate(
        d,
        q,
        k3
      ), "function" === typeof g3.UNSAFE_componentWillUpdate && g3.UNSAFE_componentWillUpdate(d, q, k3)), "function" === typeof g3.componentDidUpdate && (b.flags |= 4), "function" === typeof g3.getSnapshotBeforeUpdate && (b.flags |= 1024)) : ("function" !== typeof g3.componentDidUpdate || h2 === a.memoizedProps && r2 === a.memoizedState || (b.flags |= 4), "function" !== typeof g3.getSnapshotBeforeUpdate || h2 === a.memoizedProps && r2 === a.memoizedState || (b.flags |= 1024), b.memoizedProps = d, b.memoizedState = q), g3.props = d, g3.state = q, g3.context = k3, d = l) : ("function" !== typeof g3.componentDidUpdate || h2 === a.memoizedProps && r2 === a.memoizedState || (b.flags |= 4), "function" !== typeof g3.getSnapshotBeforeUpdate || h2 === a.memoizedProps && r2 === a.memoizedState || (b.flags |= 1024), d = false);
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
    y2(J2, e & 1);
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
          d = F2;
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
    y2(J2, d);
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
          if (null !== d.dehydrated) return y2(J2, J2.current & 1), b.flags |= 128, null;
          if (0 !== (c & b.child.childLanes)) return mg(a, b, c);
          y2(J2, J2.current & 1);
          a = Zf(a, b, c);
          return null !== a ? a.sibling : null;
        }
        y2(J2, J2.current & 1);
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
        y2(J2, J2.current);
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
        return we(), x(B2), x(A2), Be(), a = b.flags, 0 !== (a & 65536) && 0 === (a & 128) ? (b.flags = a & -65537 | 128, b) : null;
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
      T2(a, b, d);
    }
    else c.current = null;
  }
  function Cg(a, b, c) {
    try {
      c();
    } catch (d) {
      T2(a, b, d);
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
        T2(a, a.return, h2);
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
          T2(
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
          T2(e, b, wa);
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
                if (null === m || null === m.memoizedState) Vg = E3();
              }
              break;
            case 22:
              var v2 = null !== b.memoizedState, r2 = b.alternate, z2 = null !== r2 && null !== r2.memoizedState;
              c = b;
              if (Ua) {
                a: if (d = c, e = v2, f2 = null, Ua) for (var q = d; ; ) {
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
              if (v2 && !z2 && 0 !== (c.mode & 1)) {
                S2 = c;
                for (var t2 = c.child; null !== t2; ) {
                  for (c = S2 = t2; null !== S2; ) {
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
                        var u3 = d.stateNode;
                        if ("function" === typeof u3.componentWillUnmount) {
                          var V = d.return;
                          try {
                            u3.props = d.memoizedProps, u3.state = d.memoizedState, u3.componentWillUnmount();
                          } catch (wa) {
                            T2(
                              d,
                              V,
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
                  t2 = t2.sibling;
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
          T2(b, b.return, wa);
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
        } catch (v2) {
          T2(b, b.return, v2);
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
              T2(b, c, k3);
            }
            break;
          case 1:
            var d = b.stateNode;
            if ("function" === typeof d.componentDidMount) {
              var e = b.return;
              try {
                d.componentDidMount();
              } catch (k3) {
                T2(b, e, k3);
              }
            }
            var f2 = b.return;
            try {
              Hg(b);
            } catch (k3) {
              T2(b, f2, k3);
            }
            break;
          case 5:
            var g3 = b.return;
            try {
              Hg(b);
            } catch (k3) {
              T2(b, g3, k3);
            }
        }
      } catch (k3) {
        T2(b, b.return, k3);
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
  var lh = Math.ceil, mh = ea.ReactCurrentDispatcher, nh = ea.ReactCurrentOwner, U = ea.ReactCurrentBatchConfig, G2 = 0, F2 = null, W2 = null, X2 = 0, Wf = 0, eg = gc(0), Q2 = 0, oh = null, vd = 0, ph = 0, qh = 0, rh = null, Y = null, Vg = 0, Uf = Infinity;
  function sh() {
    Uf = E3() + 500;
  }
  var Bf = false, Cf = null, Ef = null, th = false, uh = null, vh = 0, wh = 0, xh = null, yh = -1, zh = 0;
  function H2() {
    return 0 !== (G2 & 6) ? E3() : -1 !== yh ? yh : yh = E3();
  }
  function zd(a) {
    if (0 === (a.mode & 1)) return 1;
    if (0 !== (G2 & 2) && 0 !== X2) return X2 & -X2;
    if (null !== Yc.transition) return 0 === zh && (a = tc, tc <<= 1, 0 === (tc & 4194240) && (tc = 64), zh = a), zh;
    a = D3;
    return 0 !== a ? a : Ya();
  }
  function Ad(a, b, c) {
    if (50 < wh) throw wh = 0, xh = null, Error(n(185));
    var d = Ah(a, b);
    if (null === d) return null;
    Bc(d, b, c);
    if (0 === (G2 & 2) || d !== F2) d === F2 && (0 === (G2 & 2) && (ph |= b), 4 === Q2 && Bh(d, X2)), Z(d, c), 1 === b && 0 === G2 && 0 === (a.mode & 1) && (sh(), Tc && Xc());
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
    var d = wc(a, a === F2 ? X2 : 0);
    if (0 === d) null !== c && Gc(c), a.callbackNode = null, a.callbackPriority = 0;
    else if (b = d & -d, a.callbackPriority !== b) {
      null != c && Gc(c);
      if (1 === b) 0 === a.tag ? Wc(Ch.bind(null, a)) : Vc(Ch.bind(null, a)), $a ? ab(function() {
        0 === G2 && Xc();
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
    if (0 !== (G2 & 6)) throw Error(n(327));
    var c = a.callbackNode;
    if (Fh() && a.callbackNode !== c) return null;
    var d = wc(a, a === F2 ? X2 : 0);
    if (0 === d) return null;
    if (0 !== (d & 30) || 0 !== (d & a.expiredLanes) || b) b = Gh(a, d);
    else {
      b = d;
      var e = G2;
      G2 |= 2;
      var f2 = Hh();
      if (F2 !== a || X2 !== b) sh(), Ih(a, b);
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
      G2 = e;
      null !== W2 ? b = 0 : (F2 = null, X2 = 0, b = Q2);
    }
    if (0 !== b) {
      2 === b && (e = zc(a), 0 !== e && (d = e, b = Lh(a, e)));
      if (1 === b) throw c = oh, Ih(a, 0), Bh(a, d), Z(a, E3()), c;
      if (6 === b) Bh(a, d);
      else {
        e = a.current.alternate;
        if (0 === (d & 30) && !Mh(e) && (b = Gh(a, d), 2 === b && (f2 = zc(a), 0 !== f2 && (d = f2, b = Lh(a, f2))), 1 === b)) throw c = oh, Ih(a, 0), Bh(a, d), Z(a, E3()), c;
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
            if ((d & 130023424) === d && (b = Vg + 500 - E3(), 10 < b)) {
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
            d = E3() - d;
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
    Z(a, E3());
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
    if (0 !== (G2 & 6)) throw Error(n(327));
    Fh();
    var b = wc(a, 0);
    if (0 === (b & 1)) return Z(a, E3()), null;
    var c = Gh(a, b);
    if (0 !== a.tag && 2 === c) {
      var d = zc(a);
      0 !== d && (b = d, c = Lh(a, d));
    }
    if (1 === c) throw c = oh, Ih(a, 0), Bh(a, b), Z(a, E3()), c;
    if (6 === c) throw Error(n(345));
    a.finishedWork = a.current.alternate;
    a.finishedLanes = b;
    Nh(a, Y);
    Z(a, E3());
    return null;
  }
  function Oh(a) {
    null !== uh && 0 === uh.tag && 0 === (G2 & 6) && Fh();
    var b = G2;
    G2 |= 1;
    var c = U.transition, d = D3;
    try {
      if (U.transition = null, D3 = 1, a) return a();
    } finally {
      D3 = d, U.transition = c, G2 = b, 0 === (G2 & 6) && Xc();
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
    if (null !== W2) for (c = W2.return; null !== c; ) {
      var d = c;
      Sd(d);
      switch (d.tag) {
        case 1:
          d = d.type.childContextTypes;
          null !== d && void 0 !== d && kc();
          break;
        case 3:
          we();
          x(B2);
          x(A2);
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
    F2 = a;
    W2 = a = je(a.current, null);
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
      var c = W2;
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
          W2 = null;
          break;
        }
        a: {
          var f2 = a, g3 = c.return, h2 = c, k3 = b;
          b = X2;
          h2.flags |= 32768;
          if (null !== k3 && "object" === typeof k3 && "function" === typeof k3.then) {
            var l = k3, m = h2, v2 = m.tag;
            if (0 === (m.mode & 1) && (0 === v2 || 11 === v2 || 15 === v2)) {
              var r2 = m.alternate;
              r2 ? (m.updateQueue = r2.updateQueue, m.memoizedState = r2.memoizedState, m.lanes = r2.lanes) : (m.updateQueue = null, m.memoizedState = null);
            }
            var z2 = Hf(g3);
            if (null !== z2) {
              z2.flags &= -257;
              If(z2, g3, h2, f2, b);
              z2.mode & 1 && Ff(f2, l, b);
              b = z2;
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
                var t2 = Af(h2, k3, b);
                td(h2, t2);
                break a;
              case 1:
                f2 = k3;
                var w = h2.type, u3 = h2.stateNode;
                if (0 === (h2.flags & 128) && ("function" === typeof w.getDerivedStateFromError || null !== u3 && "function" === typeof u3.componentDidCatch && (null === Ef || !Ef.has(u3)))) {
                  h2.flags |= 65536;
                  b &= -b;
                  h2.lanes |= b;
                  var V = Df(h2, f2, b);
                  td(h2, V);
                  break a;
                }
            }
            h2 = h2.return;
          } while (null !== h2);
        }
        Ph(c);
      } catch (wa) {
        b = wa;
        W2 === c && null !== c && (W2 = c = c.return);
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
    null === F2 || 0 === (vd & 268435455) && 0 === (ph & 268435455) || Bh(F2, X2);
  }
  function Gh(a, b) {
    var c = G2;
    G2 |= 2;
    var d = Hh();
    F2 === a && X2 === b || Ih(a, b);
    do
      try {
        Qh();
        break;
      } catch (e) {
        Kh(a, e);
      }
    while (1);
    fd();
    G2 = c;
    mh.current = d;
    if (null !== W2) throw Error(n(261));
    F2 = null;
    X2 = 0;
    return Q2;
  }
  function Qh() {
    for (; null !== W2; ) Rh(W2);
  }
  function Jh() {
    for (; null !== W2 && !Hc(); ) Rh(W2);
  }
  function Rh(a) {
    var b = Sh(a.alternate, a, Wf);
    a.memoizedProps = a.pendingProps;
    null === b ? Ph(a) : W2 = b;
    nh.current = null;
  }
  function Ph(a) {
    var b = a;
    do {
      var c = b.alternate;
      a = b.return;
      if (0 === (b.flags & 32768)) {
        if (c = Rf(c, b, Wf), null !== c) {
          W2 = c;
          return;
        }
      } else {
        c = xg(c, b);
        if (null !== c) {
          c.flags &= 32767;
          W2 = c;
          return;
        }
        if (null !== a) a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null;
        else {
          Q2 = 6;
          W2 = null;
          return;
        }
      }
      b = b.sibling;
      if (null !== b) {
        W2 = b;
        return;
      }
      W2 = b = a;
    } while (null !== b);
    0 === Q2 && (Q2 = 5);
  }
  function Nh(a, b) {
    var c = D3, d = U.transition;
    try {
      U.transition = null, D3 = 1, Th(a, b, c);
    } finally {
      U.transition = d, D3 = c;
    }
    return null;
  }
  function Th(a, b, c) {
    do
      Fh();
    while (null !== uh);
    if (0 !== (G2 & 6)) throw Error(n(327));
    var d = a.finishedWork, e = a.finishedLanes;
    if (null === d) return null;
    a.finishedWork = null;
    a.finishedLanes = 0;
    if (d === a.current) throw Error(n(177));
    a.callbackNode = null;
    a.callbackPriority = 0;
    var f2 = d.lanes | d.childLanes;
    Cc(a, f2);
    a === F2 && (W2 = F2 = null, X2 = 0);
    0 === (d.subtreeFlags & 2064) && 0 === (d.flags & 2064) || th || (th = true, Dh(Lc, function() {
      Fh();
      return null;
    }));
    f2 = 0 !== (d.flags & 15990);
    if (0 !== (d.subtreeFlags & 15990) || f2) {
      f2 = U.transition;
      U.transition = null;
      var g3 = D3;
      D3 = 1;
      var h2 = G2;
      G2 |= 4;
      nh.current = null;
      Eg(a, d);
      Ug(a, d, e);
      Ja(a.containerInfo);
      a.current = d;
      Xg(d, a, e);
      Ic();
      G2 = h2;
      D3 = g3;
      U.transition = f2;
    } else a.current = d;
    th && (th = false, uh = a, vh = e);
    f2 = a.pendingLanes;
    0 === f2 && (Ef = null);
    Pc(d.stateNode, c);
    Z(a, E3());
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
      var a = Ec(vh), b = U.transition, c = D3;
      try {
        U.transition = null;
        D3 = 16 > a ? 16 : a;
        if (null === uh) var d = false;
        else {
          a = uh;
          uh = null;
          vh = 0;
          if (0 !== (G2 & 6)) throw Error(n(331));
          var e = G2;
          G2 |= 4;
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
                    var v2 = m.child;
                    if (null !== v2) v2.return = m, S2 = v2;
                    else for (; null !== S2; ) {
                      m = S2;
                      var r2 = m.sibling, z2 = m.return;
                      Lg(m);
                      if (m === l) {
                        S2 = null;
                        break;
                      }
                      if (null !== r2) {
                        r2.return = z2;
                        S2 = r2;
                        break;
                      }
                      S2 = z2;
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
              var t2 = f2.sibling;
              if (null !== t2) {
                t2.return = f2.return;
                S2 = t2;
                break b;
              }
              S2 = f2.return;
            }
          }
          var w = a.current;
          for (S2 = w; null !== S2; ) {
            g3 = S2;
            var u3 = g3.child;
            if (0 !== (g3.subtreeFlags & 2064) && null !== u3) u3.return = g3, S2 = u3;
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
                T2(h2, h2.return, wa);
              }
              if (h2 === g3) {
                S2 = null;
                break b;
              }
              var V = h2.sibling;
              if (null !== V) {
                V.return = h2.return;
                S2 = V;
                break b;
              }
              S2 = h2.return;
            }
          }
          G2 = e;
          Xc();
          if (Oc && "function" === typeof Oc.onPostCommitFiberRoot) try {
            Oc.onPostCommitFiberRoot(Nc, a);
          } catch (wa) {
          }
          d = true;
        }
        return d;
      } finally {
        D3 = c, U.transition = b;
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
  function T2(a, b, c) {
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
    F2 === a && (X2 & c) === c && (4 === Q2 || 3 === Q2 && (X2 & 130023424) === X2 && 500 > E3() - Vg ? Ih(a, 0) : qh |= c);
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
    if (null !== a) if (a.memoizedProps !== b.pendingProps || B2.current) kd = true;
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
        var e = jc(b, A2.current);
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
            if (f2.children === e.children && !B2.current) {
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
  exports10.attemptContinuousHydration = function(a) {
    if (13 === a.tag) {
      var b = H2();
      Ad(a, 134217728, b);
      ci(a, 134217728);
    }
  };
  exports10.attemptHydrationAtCurrentPriority = function(a) {
    if (13 === a.tag) {
      var b = H2(), c = zd(a);
      Ad(a, c, b);
      ci(a, c);
    }
  };
  exports10.attemptSynchronousHydration = function(a) {
    switch (a.tag) {
      case 3:
        var b = a.stateNode;
        if (b.current.memoizedState.isDehydrated) {
          var c = vc(b.pendingLanes);
          0 !== c && (Dc(b, c | 1), Z(b, E3()), 0 === (G2 & 6) && (sh(), Xc()));
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
  exports10.batchedUpdates = function(a, b) {
    var c = G2;
    G2 |= 1;
    try {
      return a(b);
    } finally {
      G2 = c, 0 === G2 && (sh(), Tc && Xc());
    }
  };
  exports10.createComponentSelector = function(a) {
    return { $$typeof: ah, value: a };
  };
  exports10.createContainer = function(a, b, c, d, e, f2, g3) {
    return Zh(a, b, false, null, c, d, e, f2, g3);
  };
  exports10.createHasPseudoClassSelector = function(a) {
    return { $$typeof: bh, value: a };
  };
  exports10.createHydrationContainer = function(a, b, c, d, e, f2, g3, h2, k3) {
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
  exports10.createPortal = function(a, b, c) {
    var d = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
    return { $$typeof: ha, key: null == d ? null : "" + d, children: a, containerInfo: b, implementation: c };
  };
  exports10.createRoleSelector = function(a) {
    return { $$typeof: ch, value: a };
  };
  exports10.createTestNameSelector = function(a) {
    return { $$typeof: dh, value: a };
  };
  exports10.createTextSelector = function(a) {
    return { $$typeof: eh, value: a };
  };
  exports10.deferredUpdates = function(a) {
    var b = D3, c = U.transition;
    try {
      return U.transition = null, D3 = 16, a();
    } finally {
      D3 = b, U.transition = c;
    }
  };
  exports10.discreteUpdates = function(a, b, c, d, e) {
    var f2 = D3, g3 = U.transition;
    try {
      return U.transition = null, D3 = 1, a(b, c, d, e);
    } finally {
      D3 = f2, U.transition = g3, 0 === G2 && sh();
    }
  };
  exports10.findAllNodes = kh;
  exports10.findBoundingRects = function(a, b) {
    if (!bb) throw Error(n(363));
    b = kh(a, b);
    a = [];
    for (var c = 0; c < b.length; c++) a.push(db(b[c]));
    for (b = a.length - 1; 0 < b; b--) {
      c = a[b];
      for (var d = c.x, e = d + c.width, f2 = c.y, g3 = f2 + c.height, h2 = b - 1; 0 <= h2; h2--) if (b !== h2) {
        var k3 = a[h2], l = k3.x, m = l + k3.width, v2 = k3.y, r2 = v2 + k3.height;
        if (d >= l && f2 >= v2 && e <= m && g3 <= r2) {
          a.splice(b, 1);
          break;
        } else if (!(d !== l || c.width !== k3.width || r2 < f2 || v2 > g3)) {
          v2 > f2 && (k3.height += v2 - f2, k3.y = f2);
          r2 < g3 && (k3.height = g3 - v2);
          a.splice(b, 1);
          break;
        } else if (!(f2 !== v2 || c.height !== k3.height || m < d || l > e)) {
          l > d && (k3.width += l - d, k3.x = d);
          m < e && (k3.width = e - l);
          a.splice(b, 1);
          break;
        }
      }
    }
    return a;
  };
  exports10.findHostInstance = ai;
  exports10.findHostInstanceWithNoPortals = function(a) {
    a = Aa(a);
    a = null !== a ? Da(a) : null;
    return null === a ? null : a.stateNode;
  };
  exports10.findHostInstanceWithWarning = function(a) {
    return ai(a);
  };
  exports10.flushControlled = function(a) {
    var b = G2;
    G2 |= 1;
    var c = U.transition, d = D3;
    try {
      U.transition = null, D3 = 1, a();
    } finally {
      D3 = d, U.transition = c, G2 = b, 0 === G2 && (sh(), Xc());
    }
  };
  exports10.flushPassiveEffects = Fh;
  exports10.flushSync = Oh;
  exports10.focusWithin = function(a, b) {
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
  exports10.getCurrentUpdatePriority = function() {
    return D3;
  };
  exports10.getFindAllNodesFailureDescription = function(a, b) {
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
  exports10.getPublicRootInstance = function(a) {
    a = a.current;
    if (!a.child) return null;
    switch (a.child.tag) {
      case 5:
        return Fa(a.child.stateNode);
      default:
        return a.child.stateNode;
    }
  };
  exports10.injectIntoDevTools = function(a) {
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
  exports10.isAlreadyRendering = function() {
    return false;
  };
  exports10.observeVisibleRects = function(a, b, c, d) {
    if (!bb) throw Error(n(363));
    a = kh(a, b);
    var e = ib(a, c, d).disconnect;
    return { disconnect: function() {
      e();
    } };
  };
  exports10.registerMutableSourceForHydration = function(a, b) {
    var c = b._getVersion;
    c = c(b._source);
    null == a.mutableSourceEagerHydrationData ? a.mutableSourceEagerHydrationData = [b, c] : a.mutableSourceEagerHydrationData.push(b, c);
  };
  exports10.runWithPriority = function(a, b) {
    var c = D3;
    try {
      return D3 = a, b();
    } finally {
      D3 = c;
    }
  };
  exports10.shouldError = function() {
    return null;
  };
  exports10.shouldSuspend = function() {
    return false;
  };
  exports10.updateContainer = function(a, b, c, d) {
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
  return exports10;
};
var __export06;
var __export111;
var __export210;
var __export36;
var __export46;
var __export56;
var __export64;
var __export74;
var __export84;
var __export94;
var __export104;
var __export114;
var __export125;
var __export135;
var __export144;
var __export154;
var __export164;
var __export174;
var __export184;
var __export193;
var __export202;
var __export212;
var __export223;
var __export233;
var __export243;
var __export253;
var __export262;
var __export272;
var __export282;
var __export292;
var __export302;
var __export312;
var __export323;
var __export333;
if (Object.isExtensible(module8.exports) && Object.keys(module8.exports).length === 34) {
  __export06 = module8.exports["attemptContinuousHydration"];
  __export111 = module8.exports["attemptHydrationAtCurrentPriority"];
  __export210 = module8.exports["attemptSynchronousHydration"];
  __export36 = module8.exports["batchedUpdates"];
  __export46 = module8.exports["createComponentSelector"];
  __export56 = module8.exports["createContainer"];
  __export64 = module8.exports["createHasPseudoClassSelector"];
  __export74 = module8.exports["createHydrationContainer"];
  __export84 = module8.exports["createPortal"];
  __export94 = module8.exports["createRoleSelector"];
  __export104 = module8.exports["createTestNameSelector"];
  __export114 = module8.exports["createTextSelector"];
  __export125 = module8.exports["deferredUpdates"];
  __export135 = module8.exports["discreteUpdates"];
  __export144 = module8.exports["findAllNodes"];
  __export154 = module8.exports["findBoundingRects"];
  __export164 = module8.exports["findHostInstance"];
  __export174 = module8.exports["findHostInstanceWithNoPortals"];
  __export184 = module8.exports["findHostInstanceWithWarning"];
  __export193 = module8.exports["flushControlled"];
  __export202 = module8.exports["flushPassiveEffects"];
  __export212 = module8.exports["flushSync"];
  __export223 = module8.exports["focusWithin"];
  __export233 = module8.exports["getCurrentUpdatePriority"];
  __export243 = module8.exports["getFindAllNodesFailureDescription"];
  __export253 = module8.exports["getPublicRootInstance"];
  __export262 = module8.exports["injectIntoDevTools"];
  __export272 = module8.exports["isAlreadyRendering"];
  __export282 = module8.exports["observeVisibleRects"];
  __export292 = module8.exports["registerMutableSourceForHydration"];
  __export302 = module8.exports["runWithPriority"];
  __export312 = module8.exports["shouldError"];
  __export323 = module8.exports["shouldSuspend"];
  __export333 = module8.exports["updateContainer"];
}
var react_reconciler_production_min_default = module8.exports;

// ../../node_modules/.pnpm/react-reconciler@0.27.0_react@18.3.1/node_modules/react-reconciler/index.js
function __cjs_default__5(requiredModule) {
  var Object2 = (typeof window !== "undefined" && window || typeof self !== "undefined" && self || typeof global5 !== "undefined" && global5 || typeof globalThis !== "undefined" && globalThis || {}).Object;
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
var global5 = typeof window !== "undefined" && window || typeof self !== "undefined" && self || typeof global5 !== "undefined" && global5 || typeof globalThis !== "undefined" && globalThis || {};
var exports9 = {};
var module9 = {
  get exports() {
    return exports9;
  },
  set exports(value) {
    exports9 = value;
  }
};
if (false) {
  module9.exports = __cjs_default__5(typeof react_reconciler_production_min_exports !== "undefined" ? react_reconciler_production_min_exports : {});
} else {
  module9.exports = __cjs_default__5(typeof react_reconciler_development_exports !== "undefined" ? react_reconciler_development_exports : {});
}
var react_reconciler_default = module9.exports;

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
          __export16(__export13, callback);
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
  const reconciler2 = react_reconciler_default({
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
var __DEV__ = typeof process !== "undefined" && true;
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
  bundleType: false ? 0 : 1,
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
import { useState as T, useRef as p, useEffect as u2, useMemo as M2 } from "react";
function g2(n, t2) {
  let o;
  return (...i2) => {
    window.clearTimeout(o), o = window.setTimeout(() => n(...i2), t2);
  };
}
function j({ debounce: n, scroll: t2, polyfill: o, offsetSize: i2 } = { debounce: 0, scroll: false, offsetSize: false }) {
  const a = o || (typeof window == "undefined" ? class {
  } : window.ResizeObserver);
  if (!a) throw new Error("This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills");
  const [c, h2] = T({ left: 0, top: 0, width: 0, height: 0, bottom: 0, right: 0, x: 0, y: 0 }), e = p({ element: null, scrollContainers: null, resizeObserver: null, lastBounds: c, orientationHandler: null }), d = n ? typeof n == "number" ? n : n.scroll : null, f2 = n ? typeof n == "number" ? n : n.resize : null, w = p(false);
  u2(() => (w.current = true, () => void (w.current = false)));
  const [z2, m, s] = M2(() => {
    const r2 = () => {
      if (!e.current.element) return;
      const { left: y2, top: C, width: H2, height: O2, bottom: S2, right: x, x: B2, y: R2 } = e.current.element.getBoundingClientRect(), l = { left: y2, top: C, width: H2, height: O2, bottom: S2, right: x, x: B2, y: R2 };
      e.current.element instanceof HTMLElement && i2 && (l.height = e.current.element.offsetHeight, l.width = e.current.element.offsetWidth), Object.freeze(l), w.current && !D2(e.current.lastBounds, l) && h2(e.current.lastBounds = l);
    };
    return [r2, f2 ? g2(r2, f2) : r2, d ? g2(r2, d) : r2];
  }, [h2, i2, d, f2]);
  function v2() {
    e.current.scrollContainers && (e.current.scrollContainers.forEach((r2) => r2.removeEventListener("scroll", s, true)), e.current.scrollContainers = null), e.current.resizeObserver && (e.current.resizeObserver.disconnect(), e.current.resizeObserver = null), e.current.orientationHandler && ("orientation" in screen && "removeEventListener" in screen.orientation ? screen.orientation.removeEventListener("change", e.current.orientationHandler) : "onorientationchange" in window && window.removeEventListener("orientationchange", e.current.orientationHandler));
  }
  function b() {
    e.current.element && (e.current.resizeObserver = new a(s), e.current.resizeObserver.observe(e.current.element), t2 && e.current.scrollContainers && e.current.scrollContainers.forEach((r2) => r2.addEventListener("scroll", s, { capture: true, passive: true })), e.current.orientationHandler = () => {
      s();
    }, "orientation" in screen && "addEventListener" in screen.orientation ? screen.orientation.addEventListener("change", e.current.orientationHandler) : "onorientationchange" in window && window.addEventListener("orientationchange", e.current.orientationHandler));
  }
  const L2 = (r2) => {
    !r2 || r2 === e.current.element || (v2(), e.current.element = r2, e.current.scrollContainers = E2(r2), b());
  };
  return X(s, !!t2), W(m), u2(() => {
    v2(), b();
  }, [t2, s, m]), u2(() => v2, []), [L2, c, z2];
}
function W(n) {
  u2(() => {
    const t2 = n;
    return window.addEventListener("resize", t2), () => void window.removeEventListener("resize", t2);
  }, [n]);
}
function X(n, t2) {
  u2(() => {
    if (t2) {
      const o = n;
      return window.addEventListener("scroll", o, { capture: true, passive: true }), () => void window.removeEventListener("scroll", o, true);
    }
  }, [n, t2]);
}
function E2(n) {
  const t2 = [];
  if (!n || n === document.body) return t2;
  const { overflow: o, overflowX: i2, overflowY: a } = window.getComputedStyle(n);
  return [o, i2, a].some((c) => c === "auto" || c === "scroll") && t2.push(n), [...t2, ...E2(n.parentElement)];
}
var k2 = ["x", "y", "top", "bottom", "left", "right", "width", "height"];
var D2 = (n, t2) => k2.every((o) => n[o] === t2[o]);

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
                const y2 = event[eventPrefix + "Y"];
                state2.pointer.set(x / state2.size.width * 2 - 1, -(y2 / state2.size.height) * 2 + 1);
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

scheduler/cjs/scheduler.development.js:
  (**
   * @license React
   * scheduler.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

scheduler/cjs/scheduler.production.min.js:
  (**
   * @license React
   * scheduler.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-reconciler/cjs/react-reconciler.development.js:
  (**
   * @license React
   * react-reconciler.development.js
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
