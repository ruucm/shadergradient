import "./chunk-HXGKXP63.mjs";

// ../../node_modules/.pnpm/ws@8.18.1/node_modules/ws/browser.js
var exports = {};
var module = {
  get exports() {
    return exports;
  },
  set exports(value) {
    exports = value;
  }
};
module.exports = function() {
  throw new Error(
    "ws does not work in the browser. Browser clients must use the native WebSocket object"
  );
};
var browser_default = module.exports;
export {
  browser_default as default
};
