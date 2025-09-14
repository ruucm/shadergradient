// src/utils/debug.ts
var debugState = {
  performance: true,
  render: true
};
var debug = {
  enable: (category) => {
    debugState[category] = true;
  },
  disable: (category) => {
    debugState[category] = false;
  },
  enableAll: () => {
    Object.keys(debugState).forEach((key) => {
      debugState[key] = true;
    });
  },
  disableAll: () => {
    Object.keys(debugState).forEach((key) => {
      debugState[key] = false;
    });
  },
  performance: (...args) => {
    if (debugState.performance) {
      console.log("[Performance]", ...args);
    }
  },
  render: (...args) => {
    if (debugState.render) {
      console.log("[Render]", ...args);
    }
  }
};
if (typeof window !== "undefined") {
  window.debug = debug;
}

export {
  debug
};
