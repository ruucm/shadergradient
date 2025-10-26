import "../chunk-5BEQP2BQ.mjs";

// src/utils/debug.ts
var debugState = {
  performance: false,
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
export {
  debug
};
