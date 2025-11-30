import {
  __export
} from "./chunk-HXGKXP63.mjs";

// ../../node_modules/.pnpm/@supabase+node-fetch@2.6.15/node_modules/@supabase/node-fetch/browser.js
var browser_exports = {};
__export(browser_exports, {
  Headers: () => Headers,
  Request: () => Request,
  Response: () => Response,
  default: () => browser_default,
  fetch: () => fetch
});
var getGlobal = function() {
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw new Error("unable to locate global object");
};
var globalObject = getGlobal();
var fetch = globalObject.fetch;
var browser_default = globalObject.fetch.bind(globalObject);
var Headers = globalObject.Headers;
var Request = globalObject.Request;
var Response = globalObject.Response;

export {
  fetch,
  browser_default,
  Headers,
  Request,
  Response,
  browser_exports
};
