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
} from "./chunk-QDIU42HX.mjs";
import {
  __export,
  __objRest,
  __spreadProps,
  __spreadValues
} from "./chunk-5BEQP2BQ.mjs";

// ../../node_modules/.pnpm/@react-three+fiber@8.18.0_@types+react@18.2.73_react-dom@18.3.1_react@18.3.1__react@18.3.1_three@0.169.0/node_modules/@react-three/fiber/dist/events-776716bd.esm.js
import * as React from "react";
import { DefaultEventPriority, ContinuousEventPriority, DiscreteEventPriority, ConcurrentRoot } from "react-reconciler/constants";

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
import Reconciler from "react-reconciler";

// ../../node_modules/.pnpm/scheduler@0.21.0/node_modules/scheduler/cjs/scheduler.development.js
var scheduler_development_exports = {};
__export(scheduler_development_exports, {
  default: () => scheduler_development_default,
  unstable_IdlePriority: () => __export1,
  unstable_ImmediatePriority: () => __export2,
  unstable_LowPriority: () => __export3,
  unstable_NormalPriority: () => __export4,
  unstable_Profiling: () => __export5,
  unstable_UserBlockingPriority: () => __export6,
  unstable_cancelCallback: () => __export7,
  unstable_continueExecution: () => __export8,
  unstable_forceFrameRate: () => __export9,
  unstable_getCurrentPriorityLevel: () => __export10,
  unstable_getFirstCallbackNode: () => __export11,
  unstable_next: () => __export12,
  unstable_now: () => __export0,
  unstable_pauseExecution: () => __export13,
  unstable_requestPaint: () => __export14,
  unstable_runWithPriority: () => __export15,
  unstable_scheduleCallback: () => __export16,
  unstable_shouldYield: () => __export17,
  unstable_wrapCallback: () => __export18
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
      exports.unstable_now = function() {
        return localPerformance.now();
      };
    } else {
      var localDate = Date;
      var initialTime = localDate.now();
      exports.unstable_now = function() {
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
              var currentTime = exports.unstable_now();
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
          currentTime = exports.unstable_now();
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
      var currentTime = exports.unstable_now();
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
      var timeElapsed = exports.unstable_now() - startTime;
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
        var currentTime = exports.unstable_now();
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
        callback(exports.unstable_now());
      }, ms);
    }
    function cancelHostTimeout() {
      localClearTimeout(taskTimeoutID);
      taskTimeoutID = -1;
    }
    var unstable_requestPaint = requestPaint;
    var unstable_Profiling = null;
    exports.unstable_IdlePriority = IdlePriority;
    exports.unstable_ImmediatePriority = ImmediatePriority;
    exports.unstable_LowPriority = LowPriority;
    exports.unstable_NormalPriority = NormalPriority;
    exports.unstable_Profiling = unstable_Profiling;
    exports.unstable_UserBlockingPriority = UserBlockingPriority;
    exports.unstable_cancelCallback = unstable_cancelCallback;
    exports.unstable_continueExecution = unstable_continueExecution;
    exports.unstable_forceFrameRate = forceFrameRate;
    exports.unstable_getCurrentPriorityLevel = unstable_getCurrentPriorityLevel;
    exports.unstable_getFirstCallbackNode = unstable_getFirstCallbackNode;
    exports.unstable_next = unstable_next;
    exports.unstable_pauseExecution = unstable_pauseExecution;
    exports.unstable_requestPaint = unstable_requestPaint;
    exports.unstable_runWithPriority = unstable_runWithPriority;
    exports.unstable_scheduleCallback = unstable_scheduleCallback;
    exports.unstable_shouldYield = shouldYieldToHost;
    exports.unstable_wrapCallback = unstable_wrapCallback;
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop === "function") {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }
  })();
}
var __export0;
var __export1;
var __export2;
var __export3;
var __export4;
var __export5;
var __export6;
var __export7;
var __export8;
var __export9;
var __export10;
var __export11;
var __export12;
var __export13;
var __export14;
var __export15;
var __export16;
var __export17;
var __export18;
if (Object.isExtensible(module.exports) && Object.keys(module.exports).length === 19) {
  __export0 = module.exports["unstable_now"];
  __export1 = module.exports["unstable_IdlePriority"];
  __export2 = module.exports["unstable_ImmediatePriority"];
  __export3 = module.exports["unstable_LowPriority"];
  __export4 = module.exports["unstable_NormalPriority"];
  __export5 = module.exports["unstable_Profiling"];
  __export6 = module.exports["unstable_UserBlockingPriority"];
  __export7 = module.exports["unstable_cancelCallback"];
  __export8 = module.exports["unstable_continueExecution"];
  __export9 = module.exports["unstable_forceFrameRate"];
  __export10 = module.exports["unstable_getCurrentPriorityLevel"];
  __export11 = module.exports["unstable_getFirstCallbackNode"];
  __export12 = module.exports["unstable_next"];
  __export13 = module.exports["unstable_pauseExecution"];
  __export14 = module.exports["unstable_requestPaint"];
  __export15 = module.exports["unstable_runWithPriority"];
  __export16 = module.exports["unstable_scheduleCallback"];
  __export17 = module.exports["unstable_shouldYield"];
  __export18 = module.exports["unstable_wrapCallback"];
}
var scheduler_development_default = module.exports;

// ../../node_modules/.pnpm/scheduler@0.21.0/node_modules/scheduler/cjs/scheduler.production.min.js
var exports2 = {};
var module2 = {
  get exports() {
    return exports2;
  },
  set exports(value) {
    exports2 = value;
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
  exports2.unstable_now = function() {
    return l.now();
  };
} else {
  p2 = Date, q = p2.now();
  exports2.unstable_now = function() {
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
        b = exports2.unstable_now();
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
  return exports2.unstable_now() - Q < P ? false : true;
}
function R() {
  if (null !== O) {
    var a = exports2.unstable_now();
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
    a(exports2.unstable_now());
  }, b);
}
exports2.unstable_IdlePriority = 5;
exports2.unstable_ImmediatePriority = 1;
exports2.unstable_LowPriority = 4;
exports2.unstable_NormalPriority = 3;
exports2.unstable_Profiling = null;
exports2.unstable_UserBlockingPriority = 2;
exports2.unstable_cancelCallback = function(a) {
  a.callback = null;
};
exports2.unstable_continueExecution = function() {
  A || z || (A = true, I(J));
};
exports2.unstable_forceFrameRate = function(a) {
  0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P = 0 < a ? Math.floor(1e3 / a) : 5;
};
exports2.unstable_getCurrentPriorityLevel = function() {
  return y;
};
exports2.unstable_getFirstCallbackNode = function() {
  return h(r);
};
exports2.unstable_next = function(a) {
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
exports2.unstable_pauseExecution = function() {
};
exports2.unstable_requestPaint = function() {
};
exports2.unstable_runWithPriority = function(a, b) {
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
exports2.unstable_scheduleCallback = function(a, b, c) {
  var d = exports2.unstable_now();
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
exports2.unstable_shouldYield = M;
exports2.unstable_wrapCallback = function(a) {
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
var __export02;
var __export19;
var __export22;
var __export32;
var __export42;
var __export52;
var __export62;
var __export72;
var __export82;
var __export92;
var __export102;
var __export112;
var __export122;
var __export132;
var __export142;
var __export152;
var __export162;
var __export172;
var __export182;
if (Object.isExtensible(module2.exports) && Object.keys(module2.exports).length === 19) {
  __export02 = module2.exports["unstable_now"];
  __export19 = module2.exports["unstable_IdlePriority"];
  __export22 = module2.exports["unstable_ImmediatePriority"];
  __export32 = module2.exports["unstable_LowPriority"];
  __export42 = module2.exports["unstable_NormalPriority"];
  __export52 = module2.exports["unstable_Profiling"];
  __export62 = module2.exports["unstable_UserBlockingPriority"];
  __export72 = module2.exports["unstable_cancelCallback"];
  __export82 = module2.exports["unstable_continueExecution"];
  __export92 = module2.exports["unstable_forceFrameRate"];
  __export102 = module2.exports["unstable_getCurrentPriorityLevel"];
  __export112 = module2.exports["unstable_getFirstCallbackNode"];
  __export122 = module2.exports["unstable_next"];
  __export132 = module2.exports["unstable_pauseExecution"];
  __export142 = module2.exports["unstable_requestPaint"];
  __export152 = module2.exports["unstable_runWithPriority"];
  __export162 = module2.exports["unstable_scheduleCallback"];
  __export172 = module2.exports["unstable_shouldYield"];
  __export182 = module2.exports["unstable_wrapCallback"];
}
var scheduler_production_min_default = module2.exports;

// ../../node_modules/.pnpm/scheduler@0.21.0/node_modules/scheduler/index.js
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
  module3.exports = __cjs_default__(typeof scheduler_production_min_exports !== "undefined" ? scheduler_production_min_exports : {});
} else {
  module3.exports = __cjs_default__(typeof scheduler_development_exports !== "undefined" ? scheduler_development_exports : {});
}
var scheduler_default = module3.exports;

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
          __export16(__export1, callback);
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
  const reconciler2 = Reconciler({
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
    getCurrentEventPriority: () => _getEventPriority ? _getEventPriority() : DefaultEventPriority,
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
  if (!globalScope) return DefaultEventPriority;
  const name = (_globalScope$event = globalScope.event) == null ? void 0 : _globalScope$event.type;
  switch (name) {
    case "click":
    case "contextmenu":
    case "dblclick":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
      return DiscreteEventPriority;
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "pointerenter":
    case "pointerleave":
    case "wheel":
      return ContinuousEventPriority;
    default:
      return DefaultEventPriority;
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
  const fiber = prevFiber || reconciler.createContainer(store, ConcurrentRoot, null, false, null, "", logRecoverableError, null);
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
import "react-reconciler/constants";
import "react-reconciler";
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
*/
