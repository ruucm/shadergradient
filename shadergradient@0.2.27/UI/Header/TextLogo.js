var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined")
    return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + x + '" is not supported');
});
var __commonJS = (cb, mod) => function __require2() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));

// ../../node_modules/next/dist/client/normalize-trailing-slash.js
var require_normalize_trailing_slash = __commonJS({
  "../../node_modules/next/dist/client/normalize-trailing-slash.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.removePathTrailingSlash = removePathTrailingSlash;
    exports.normalizePathTrailingSlash = void 0;
    function removePathTrailingSlash(path) {
      return path.endsWith("/") && path !== "/" ? path.slice(0, -1) : path;
    }
    var normalizePathTrailingSlash = process.env.__NEXT_TRAILING_SLASH ? (path) => {
      if (/\.[^/]+\/?$/.test(path)) {
        return removePathTrailingSlash(path);
      } else if (path.endsWith("/")) {
        return path;
      } else {
        return path + "/";
      }
    } : removePathTrailingSlash;
    exports.normalizePathTrailingSlash = normalizePathTrailingSlash;
  }
});

// ../../node_modules/next/dist/shared/lib/router/utils/get-asset-path-from-route.js
var require_get_asset_path_from_route = __commonJS({
  "../../node_modules/next/dist/shared/lib/router/utils/get-asset-path-from-route.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = getAssetPathFromRoute;
    function getAssetPathFromRoute(route, ext = "") {
      const path = route === "/" ? "/index" : /^\/index(\/|$)/.test(route) ? `/index${route}` : `${route}`;
      return path + ext;
    }
  }
});

// ../../node_modules/next/dist/client/request-idle-callback.js
var require_request_idle_callback = __commonJS({
  "../../node_modules/next/dist/client/request-idle-callback.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.cancelIdleCallback = exports.requestIdleCallback = void 0;
    var requestIdleCallback = typeof self !== "undefined" && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function(cb) {
      let start = Date.now();
      return setTimeout(function() {
        cb({
          didTimeout: false,
          timeRemaining: function() {
            return Math.max(0, 50 - (Date.now() - start));
          }
        });
      }, 1);
    };
    exports.requestIdleCallback = requestIdleCallback;
    var cancelIdleCallback = typeof self !== "undefined" && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function(id) {
      return clearTimeout(id);
    };
    exports.cancelIdleCallback = cancelIdleCallback;
  }
});

// ../../node_modules/next/dist/client/route-loader.js
var require_route_loader = __commonJS({
  "../../node_modules/next/dist/client/route-loader.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.markAssetError = markAssetError;
    exports.isAssetError = isAssetError;
    exports.getClientBuildManifest = getClientBuildManifest;
    exports.getMiddlewareManifest = getMiddlewareManifest;
    exports.createRouteLoader = createRouteLoader;
    var _getAssetPathFromRoute = _interopRequireDefault(require_get_asset_path_from_route());
    var _requestIdleCallback = require_request_idle_callback();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var MS_MAX_IDLE_DELAY = 3800;
    function withFuture(key, map, generator) {
      let entry = map.get(key);
      if (entry) {
        if ("future" in entry) {
          return entry.future;
        }
        return Promise.resolve(entry);
      }
      let resolver;
      const prom = new Promise((resolve) => {
        resolver = resolve;
      });
      map.set(key, entry = {
        resolve: resolver,
        future: prom
      });
      return generator ? generator().then((value) => (resolver(value), value)).catch((err) => {
        map.delete(key);
        throw err;
      }) : prom;
    }
    function hasPrefetch(link) {
      try {
        link = document.createElement("link");
        return !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports("prefetch");
      } catch (e) {
        return false;
      }
    }
    var canPrefetch = hasPrefetch();
    function prefetchViaDom(href, as, link) {
      return new Promise((res, rej) => {
        const selector = `
      link[rel="prefetch"][href^="${href}"],
      link[rel="preload"][href^="${href}"],
      script[src^="${href}"]`;
        if (document.querySelector(selector)) {
          return res();
        }
        link = document.createElement("link");
        if (as)
          link.as = as;
        link.rel = `prefetch`;
        link.crossOrigin = process.env.__NEXT_CROSS_ORIGIN;
        link.onload = res;
        link.onerror = rej;
        link.href = href;
        document.head.appendChild(link);
      });
    }
    var ASSET_LOAD_ERROR = Symbol("ASSET_LOAD_ERROR");
    function markAssetError(err) {
      return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
    }
    function isAssetError(err) {
      return err && ASSET_LOAD_ERROR in err;
    }
    function appendScript(src, script) {
      return new Promise((resolve, reject) => {
        script = document.createElement("script");
        script.onload = resolve;
        script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`)));
        script.crossOrigin = process.env.__NEXT_CROSS_ORIGIN;
        script.src = src;
        document.body.appendChild(script);
      });
    }
    var devBuildPromise;
    function resolvePromiseWithTimeout(p, ms, err) {
      return new Promise((resolve, reject) => {
        let cancelled = false;
        p.then((r) => {
          cancelled = true;
          resolve(r);
        }).catch(reject);
        if (true) {
          (devBuildPromise || Promise.resolve()).then(() => {
            (0, _requestIdleCallback).requestIdleCallback(() => setTimeout(() => {
              if (!cancelled) {
                reject(err);
              }
            }, ms));
          });
        }
        if (false) {
          (0, _requestIdleCallback).requestIdleCallback(() => setTimeout(() => {
            if (!cancelled) {
              reject(err);
            }
          }, ms));
        }
      });
    }
    function getClientBuildManifest() {
      if (self.__BUILD_MANIFEST) {
        return Promise.resolve(self.__BUILD_MANIFEST);
      }
      const onBuildManifest = new Promise((resolve) => {
        const cb = self.__BUILD_MANIFEST_CB;
        self.__BUILD_MANIFEST_CB = () => {
          resolve(self.__BUILD_MANIFEST);
          cb && cb();
        };
      });
      return resolvePromiseWithTimeout(onBuildManifest, MS_MAX_IDLE_DELAY, markAssetError(new Error("Failed to load client build manifest")));
    }
    function getMiddlewareManifest() {
      if (self.__MIDDLEWARE_MANIFEST) {
        return Promise.resolve(self.__MIDDLEWARE_MANIFEST);
      }
      const onMiddlewareManifest = new Promise((resolve) => {
        const cb = self.__MIDDLEWARE_MANIFEST_CB;
        self.__MIDDLEWARE_MANIFEST_CB = () => {
          resolve(self.__MIDDLEWARE_MANIFEST);
          cb && cb();
        };
      });
      return resolvePromiseWithTimeout(onMiddlewareManifest, MS_MAX_IDLE_DELAY, markAssetError(new Error("Failed to load client middleware manifest")));
    }
    function getFilesForRoute(assetPrefix, route) {
      if (true) {
        return Promise.resolve({
          scripts: [
            assetPrefix + "/_next/static/chunks/pages" + encodeURI((0, _getAssetPathFromRoute).default(route, ".js"))
          ],
          css: []
        });
      }
      return getClientBuildManifest().then((manifest) => {
        if (!(route in manifest)) {
          throw markAssetError(new Error(`Failed to lookup route: ${route}`));
        }
        const allFiles = manifest[route].map((entry) => assetPrefix + "/_next/" + encodeURI(entry));
        return {
          scripts: allFiles.filter((v) => v.endsWith(".js")),
          css: allFiles.filter((v) => v.endsWith(".css"))
        };
      });
    }
    function createRouteLoader(assetPrefix) {
      const entrypoints = /* @__PURE__ */ new Map();
      const loadedScripts = /* @__PURE__ */ new Map();
      const styleSheets = /* @__PURE__ */ new Map();
      const routes = /* @__PURE__ */ new Map();
      function maybeExecuteScript(src) {
        if (false) {
          let prom = loadedScripts.get(src);
          if (prom) {
            return prom;
          }
          if (document.querySelector(`script[src^="${src}"]`)) {
            return Promise.resolve();
          }
          loadedScripts.set(src, prom = appendScript(src));
          return prom;
        } else {
          return appendScript(src);
        }
      }
      function fetchStyleSheet(href) {
        let prom = styleSheets.get(href);
        if (prom) {
          return prom;
        }
        styleSheets.set(href, prom = fetch(href).then((res) => {
          if (!res.ok) {
            throw new Error(`Failed to load stylesheet: ${href}`);
          }
          return res.text().then((text) => ({
            href,
            content: text
          }));
        }).catch((err) => {
          throw markAssetError(err);
        }));
        return prom;
      }
      return {
        whenEntrypoint(route) {
          return withFuture(route, entrypoints);
        },
        onEntrypoint(route, execute) {
          (execute ? Promise.resolve().then(() => execute()).then((exports2) => ({
            component: exports2 && exports2.default || exports2,
            exports: exports2
          }), (err) => ({
            error: err
          })) : Promise.resolve(void 0)).then((input) => {
            const old = entrypoints.get(route);
            if (old && "resolve" in old) {
              if (input) {
                entrypoints.set(route, input);
                old.resolve(input);
              }
            } else {
              if (input) {
                entrypoints.set(route, input);
              } else {
                entrypoints.delete(route);
              }
              routes.delete(route);
            }
          });
        },
        loadRoute(route, prefetch) {
          return withFuture(route, routes, () => {
            let devBuildPromiseResolve;
            if (true) {
              devBuildPromise = new Promise((resolve) => {
                devBuildPromiseResolve = resolve;
              });
            }
            return resolvePromiseWithTimeout(getFilesForRoute(assetPrefix, route).then(({ scripts, css }) => {
              return Promise.all([
                entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)),
                Promise.all(css.map(fetchStyleSheet))
              ]);
            }).then((res) => {
              return this.whenEntrypoint(route).then((entrypoint) => ({
                entrypoint,
                styles: res[1]
              }));
            }), MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`))).then(({ entrypoint, styles }) => {
              const res = Object.assign({
                styles
              }, entrypoint);
              return "error" in entrypoint ? entrypoint : res;
            }).catch((err) => {
              if (prefetch) {
                throw err;
              }
              return {
                error: err
              };
            }).finally(() => {
              return devBuildPromiseResolve === null || devBuildPromiseResolve === void 0 ? void 0 : devBuildPromiseResolve();
            });
          });
        },
        prefetch(route) {
          let cn;
          if (cn = navigator.connection) {
            if (cn.saveData || /2g/.test(cn.effectiveType))
              return Promise.resolve();
          }
          return getFilesForRoute(assetPrefix, route).then((output) => Promise.all(canPrefetch ? output.scripts.map((script) => prefetchViaDom(script, "script")) : [])).then(() => {
            (0, _requestIdleCallback).requestIdleCallback(() => this.loadRoute(route, true).catch(() => {
            }));
          }).catch(() => {
          });
        }
      };
    }
  }
});

// ../../node_modules/next/dist/shared/lib/is-plain-object.js
var require_is_plain_object = __commonJS({
  "../../node_modules/next/dist/shared/lib/is-plain-object.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.getObjectClassLabel = getObjectClassLabel;
    exports.isPlainObject = isPlainObject;
    function getObjectClassLabel(value) {
      return Object.prototype.toString.call(value);
    }
    function isPlainObject(value) {
      if (getObjectClassLabel(value) !== "[object Object]") {
        return false;
      }
      const prototype = Object.getPrototypeOf(value);
      return prototype === null || prototype === Object.prototype;
    }
  }
});

// ../../node_modules/next/dist/lib/is-error.js
var require_is_error = __commonJS({
  "../../node_modules/next/dist/lib/is-error.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isError;
    exports.getProperError = getProperError;
    var _isPlainObject = require_is_plain_object();
    function isError(err) {
      return typeof err === "object" && err !== null && "name" in err && "message" in err;
    }
    function getProperError(err) {
      if (isError(err)) {
        return err;
      }
      if (true) {
        if (typeof err === "undefined") {
          return new Error("An undefined error was thrown, see here for more info: https://nextjs.org/docs/messages/threw-undefined");
        }
        if (err === null) {
          return new Error("A null error was thrown, see here for more info: https://nextjs.org/docs/messages/threw-undefined");
        }
      }
      return new Error((0, _isPlainObject).isPlainObject(err) ? JSON.stringify(err) : err + "");
    }
  }
});

// ../../node_modules/next/dist/shared/lib/escape-regexp.js
var require_escape_regexp = __commonJS({
  "../../node_modules/next/dist/shared/lib/escape-regexp.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.escapeStringRegexp = escapeStringRegexp;
    function escapeStringRegexp(str) {
      return str.replace(/[|\\{}()[\]^$+*?.-]/g, "\\$&");
    }
  }
});

// ../../node_modules/next/dist/shared/lib/router/utils/route-regex.js
var require_route_regex = __commonJS({
  "../../node_modules/next/dist/shared/lib/router/utils/route-regex.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.getParametrizedRoute = getParametrizedRoute;
    exports.getRouteRegex = getRouteRegex;
    var _escapeRegexp = require_escape_regexp();
    function parseParameter(param) {
      const optional = param.startsWith("[") && param.endsWith("]");
      if (optional) {
        param = param.slice(1, -1);
      }
      const repeat = param.startsWith("...");
      if (repeat) {
        param = param.slice(3);
      }
      return {
        key: param,
        repeat,
        optional
      };
    }
    function getParametrizedRoute(route) {
      const segments = (route.replace(/\/$/, "") || "/").slice(1).split("/");
      const groups = {};
      let groupIndex = 1;
      const parameterizedRoute = segments.map((segment) => {
        if (segment.startsWith("[") && segment.endsWith("]")) {
          const { key, optional, repeat } = parseParameter(segment.slice(1, -1));
          groups[key] = {
            pos: groupIndex++,
            repeat,
            optional
          };
          return repeat ? optional ? "(?:/(.+?))?" : "/(.+?)" : "/([^/]+?)";
        } else {
          return `/${(0, _escapeRegexp).escapeStringRegexp(segment)}`;
        }
      }).join("");
      if (typeof window === "undefined") {
        let routeKeyCharCode = 97;
        let routeKeyCharLength = 1;
        const getSafeRouteKey = () => {
          let routeKey = "";
          for (let i = 0; i < routeKeyCharLength; i++) {
            routeKey += String.fromCharCode(routeKeyCharCode);
            routeKeyCharCode++;
            if (routeKeyCharCode > 122) {
              routeKeyCharLength++;
              routeKeyCharCode = 97;
            }
          }
          return routeKey;
        };
        const routeKeys = {};
        let namedParameterizedRoute = segments.map((segment) => {
          if (segment.startsWith("[") && segment.endsWith("]")) {
            const { key, optional, repeat } = parseParameter(segment.slice(1, -1));
            let cleanedKey = key.replace(/\W/g, "");
            let invalidKey = false;
            if (cleanedKey.length === 0 || cleanedKey.length > 30) {
              invalidKey = true;
            }
            if (!isNaN(parseInt(cleanedKey.slice(0, 1)))) {
              invalidKey = true;
            }
            if (invalidKey) {
              cleanedKey = getSafeRouteKey();
            }
            routeKeys[cleanedKey] = key;
            return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
          } else {
            return `/${(0, _escapeRegexp).escapeStringRegexp(segment)}`;
          }
        }).join("");
        return {
          parameterizedRoute,
          namedParameterizedRoute,
          groups,
          routeKeys
        };
      }
      return {
        parameterizedRoute,
        groups
      };
    }
    function getRouteRegex(normalizedRoute) {
      const result = getParametrizedRoute(normalizedRoute);
      if ("routeKeys" in result) {
        return {
          re: new RegExp(`^${result.parameterizedRoute}(?:/)?$`),
          groups: result.groups,
          routeKeys: result.routeKeys,
          namedRegex: `^${result.namedParameterizedRoute}(?:/)?$`
        };
      }
      return {
        re: new RegExp(`^${result.parameterizedRoute}(?:/)?$`),
        groups: result.groups
      };
    }
  }
});

// ../../node_modules/next/dist/shared/lib/router/utils/get-middleware-regex.js
var require_get_middleware_regex = __commonJS({
  "../../node_modules/next/dist/shared/lib/router/utils/get-middleware-regex.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.getMiddlewareRegex = getMiddlewareRegex;
    var _routeRegex = require_route_regex();
    var FIRST_SEGMENT_DYNAMIC = /^\/\[[^/]+?\](?=\/|$)/;
    var NOT_API_ROUTE = "(?!/api(?:/|$))";
    function getMiddlewareRegex(normalizedRoute, catchAll = true) {
      const result = (0, _routeRegex).getParametrizedRoute(normalizedRoute);
      const notApiRegex = FIRST_SEGMENT_DYNAMIC.test(normalizedRoute) ? NOT_API_ROUTE : "";
      let catchAllRegex = catchAll ? "(?!_next($|/)).*" : "";
      let catchAllGroupedRegex = catchAll ? "(?:(/.*)?)" : "";
      if ("routeKeys" in result) {
        if (result.parameterizedRoute === "/") {
          return {
            groups: {},
            namedRegex: `^/${catchAllRegex}$`,
            re: new RegExp(`^/${catchAllRegex}$`),
            routeKeys: {}
          };
        }
        return {
          groups: result.groups,
          namedRegex: `^${notApiRegex}${result.namedParameterizedRoute}${catchAllGroupedRegex}$`,
          re: new RegExp(`^${notApiRegex}${result.parameterizedRoute}${catchAllGroupedRegex}$`),
          routeKeys: result.routeKeys
        };
      }
      if (result.parameterizedRoute === "/") {
        return {
          groups: {},
          re: new RegExp(`^/${catchAllRegex}$`)
        };
      }
      return {
        groups: {},
        re: new RegExp(`^${notApiRegex}${result.parameterizedRoute}${catchAllGroupedRegex}$`)
      };
    }
  }
});

// ../../node_modules/next/dist/shared/lib/utils.js
var require_utils = __commonJS({
  "../../node_modules/next/dist/shared/lib/utils.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.execOnce = execOnce;
    exports.getLocationOrigin = getLocationOrigin;
    exports.getURL = getURL;
    exports.getDisplayName = getDisplayName;
    exports.isResSent = isResSent;
    exports.normalizeRepeatedSlashes = normalizeRepeatedSlashes;
    exports.loadGetInitialProps = loadGetInitialProps;
    exports.ST = exports.SP = exports.warnOnce = void 0;
    function execOnce(fn) {
      let used = false;
      let result;
      return (...args) => {
        if (!used) {
          used = true;
          result = fn(...args);
        }
        return result;
      };
    }
    function getLocationOrigin() {
      const { protocol, hostname, port } = window.location;
      return `${protocol}//${hostname}${port ? ":" + port : ""}`;
    }
    function getURL() {
      const { href } = window.location;
      const origin = getLocationOrigin();
      return href.substring(origin.length);
    }
    function getDisplayName(Component) {
      return typeof Component === "string" ? Component : Component.displayName || Component.name || "Unknown";
    }
    function isResSent(res) {
      return res.finished || res.headersSent;
    }
    function normalizeRepeatedSlashes(url) {
      const urlParts = url.split("?");
      const urlNoQuery = urlParts[0];
      return urlNoQuery.replace(/\\/g, "/").replace(/\/\/+/g, "/") + (urlParts[1] ? `?${urlParts.slice(1).join("?")}` : "");
    }
    async function loadGetInitialProps(App, ctx) {
      if (true) {
        var ref;
        if ((ref = App.prototype) === null || ref === void 0 ? void 0 : ref.getInitialProps) {
          const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://nextjs.org/docs/messages/get-initial-props-as-an-instance-method for more information.`;
          throw new Error(message);
        }
      }
      const res = ctx.res || ctx.ctx && ctx.ctx.res;
      if (!App.getInitialProps) {
        if (ctx.ctx && ctx.Component) {
          return {
            pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
          };
        }
        return {};
      }
      const props = await App.getInitialProps(ctx);
      if (res && isResSent(res)) {
        return props;
      }
      if (!props) {
        const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
        throw new Error(message);
      }
      if (true) {
        if (Object.keys(props).length === 0 && !ctx.ctx) {
          console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://nextjs.org/docs/messages/empty-object-getInitialProps`);
        }
      }
      return props;
    }
    var warnOnce = (_) => {
    };
    exports.warnOnce = warnOnce;
    if (true) {
      const warnings = /* @__PURE__ */ new Set();
      exports.warnOnce = warnOnce = (msg) => {
        if (!warnings.has(msg)) {
          console.warn(msg);
        }
        warnings.add(msg);
      };
    }
    var SP = typeof performance !== "undefined";
    exports.SP = SP;
    var ST = SP && typeof performance.mark === "function" && typeof performance.measure === "function";
    exports.ST = ST;
    var DecodeError = class extends Error {
    };
    exports.DecodeError = DecodeError;
  }
});

// ../../node_modules/next/dist/shared/lib/router/utils/route-matcher.js
var require_route_matcher = __commonJS({
  "../../node_modules/next/dist/shared/lib/router/utils/route-matcher.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.getRouteMatcher = getRouteMatcher;
    var _utils = require_utils();
    function getRouteMatcher(routeRegex) {
      const { re, groups } = routeRegex;
      return (pathname) => {
        const routeMatch = re.exec(pathname);
        if (!routeMatch) {
          return false;
        }
        const decode = (param) => {
          try {
            return decodeURIComponent(param);
          } catch (_) {
            throw new _utils.DecodeError("failed to decode param");
          }
        };
        const params = {};
        Object.keys(groups).forEach((slugName) => {
          const g = groups[slugName];
          const m = routeMatch[g.pos];
          if (m !== void 0) {
            params[slugName] = ~m.indexOf("/") ? m.split("/").map((entry) => decode(entry)) : g.repeat ? [
              decode(m)
            ] : decode(m);
          }
        });
        return params;
      };
    }
  }
});

// ../../node_modules/next/dist/shared/lib/router/utils/sorted-routes.js
var require_sorted_routes = __commonJS({
  "../../node_modules/next/dist/shared/lib/router/utils/sorted-routes.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.getSortedRoutes = getSortedRoutes;
    var UrlNode = class {
      insert(urlPath) {
        this._insert(urlPath.split("/").filter(Boolean), [], false);
      }
      smoosh() {
        return this._smoosh();
      }
      _smoosh(prefix = "/") {
        const childrenPaths = [
          ...this.children.keys()
        ].sort();
        if (this.slugName !== null) {
          childrenPaths.splice(childrenPaths.indexOf("[]"), 1);
        }
        if (this.restSlugName !== null) {
          childrenPaths.splice(childrenPaths.indexOf("[...]"), 1);
        }
        if (this.optionalRestSlugName !== null) {
          childrenPaths.splice(childrenPaths.indexOf("[[...]]"), 1);
        }
        if (this.isMiddleware) {
          childrenPaths.splice(childrenPaths.indexOf("_middleware"), 1);
        }
        const routes = childrenPaths.map((c) => this.children.get(c)._smoosh(`${prefix}${c}/`)).reduce((prev, curr) => [
          ...prev,
          ...curr
        ], []);
        if (this.slugName !== null) {
          routes.push(...this.children.get("[]")._smoosh(`${prefix}[${this.slugName}]/`));
        }
        if (!this.placeholder) {
          const r = prefix === "/" ? "/" : prefix.slice(0, -1);
          if (this.optionalRestSlugName != null) {
            throw new Error(`You cannot define a route with the same specificity as a optional catch-all route ("${r}" and "${r}[[...${this.optionalRestSlugName}]]").`);
          }
          routes.unshift(r);
        }
        if (this.isMiddleware) {
          routes.unshift(...this.children.get("_middleware")._smoosh(`${prefix}_middleware/`));
        }
        if (this.restSlugName !== null) {
          routes.push(...this.children.get("[...]")._smoosh(`${prefix}[...${this.restSlugName}]/`));
        }
        if (this.optionalRestSlugName !== null) {
          routes.push(...this.children.get("[[...]]")._smoosh(`${prefix}[[...${this.optionalRestSlugName}]]/`));
        }
        return routes;
      }
      _insert(urlPaths, slugNames, isCatchAll) {
        if (urlPaths.length === 0) {
          this.placeholder = false;
          return;
        }
        if (isCatchAll) {
          throw new Error(`Catch-all must be the last part of the URL.`);
        }
        let nextSegment = urlPaths[0];
        if (nextSegment.startsWith("[") && nextSegment.endsWith("]")) {
          let handleSlug = function(previousSlug, nextSlug) {
            if (previousSlug !== null) {
              if (previousSlug !== nextSlug) {
                throw new Error(`You cannot use different slug names for the same dynamic path ('${previousSlug}' !== '${nextSlug}').`);
              }
            }
            slugNames.forEach((slug) => {
              if (slug === nextSlug) {
                throw new Error(`You cannot have the same slug name "${nextSlug}" repeat within a single dynamic path`);
              }
              if (slug.replace(/\W/g, "") === nextSegment.replace(/\W/g, "")) {
                throw new Error(`You cannot have the slug names "${slug}" and "${nextSlug}" differ only by non-word symbols within a single dynamic path`);
              }
            });
            slugNames.push(nextSlug);
          };
          let segmentName = nextSegment.slice(1, -1);
          let isOptional = false;
          if (segmentName.startsWith("[") && segmentName.endsWith("]")) {
            segmentName = segmentName.slice(1, -1);
            isOptional = true;
          }
          if (segmentName.startsWith("...")) {
            segmentName = segmentName.substring(3);
            isCatchAll = true;
          }
          if (segmentName.startsWith("[") || segmentName.endsWith("]")) {
            throw new Error(`Segment names may not start or end with extra brackets ('${segmentName}').`);
          }
          if (segmentName.startsWith(".")) {
            throw new Error(`Segment names may not start with erroneous periods ('${segmentName}').`);
          }
          if (isCatchAll) {
            if (isOptional) {
              if (this.restSlugName != null) {
                throw new Error(`You cannot use both an required and optional catch-all route at the same level ("[...${this.restSlugName}]" and "${urlPaths[0]}" ).`);
              }
              handleSlug(this.optionalRestSlugName, segmentName);
              this.optionalRestSlugName = segmentName;
              nextSegment = "[[...]]";
            } else {
              if (this.optionalRestSlugName != null) {
                throw new Error(`You cannot use both an optional and required catch-all route at the same level ("[[...${this.optionalRestSlugName}]]" and "${urlPaths[0]}").`);
              }
              handleSlug(this.restSlugName, segmentName);
              this.restSlugName = segmentName;
              nextSegment = "[...]";
            }
          } else {
            if (isOptional) {
              throw new Error(`Optional route parameters are not yet supported ("${urlPaths[0]}").`);
            }
            handleSlug(this.slugName, segmentName);
            this.slugName = segmentName;
            nextSegment = "[]";
          }
        } else if (nextSegment === "_middleware" && urlPaths.length === 1) {
          this.isMiddleware = true;
        }
        if (!this.children.has(nextSegment)) {
          this.children.set(nextSegment, new UrlNode());
        }
        this.children.get(nextSegment)._insert(urlPaths.slice(1), slugNames, isCatchAll);
      }
      constructor() {
        this.placeholder = true;
        this.children = /* @__PURE__ */ new Map();
        this.slugName = null;
        this.restSlugName = null;
        this.optionalRestSlugName = null;
        this.isMiddleware = false;
      }
    };
    function getSortedRoutes(normalizedPages) {
      const root = new UrlNode();
      normalizedPages.forEach((pagePath) => root.insert(pagePath));
      return root.smoosh();
    }
  }
});

// ../../node_modules/next/dist/shared/lib/router/utils/routing-items.js
var require_routing_items = __commonJS({
  "../../node_modules/next/dist/shared/lib/router/utils/routing-items.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.getRoutingItems = getRoutingItems;
    var _getMiddlewareRegex = require_get_middleware_regex();
    var _routeMatcher = require_route_matcher();
    var _routeRegex = require_route_regex();
    var _sortedRoutes = require_sorted_routes();
    var MIDDLEWARE_SUFFIX = "/_middleware";
    function getRoutingItems(pages, middleware) {
      const middlewarePages = middleware.map((m) => `${m.page}${MIDDLEWARE_SUFFIX}`);
      const middlewareMap = new Map(middleware.map((m) => [
        m.page,
        m
      ]));
      const sortedRoutes = (0, _sortedRoutes).getSortedRoutes([
        ...pages,
        ...middlewarePages
      ]);
      return sortedRoutes.map((page) => {
        if (page.endsWith(MIDDLEWARE_SUFFIX)) {
          const p = page.slice(0, -MIDDLEWARE_SUFFIX.length) || "/";
          const { ssr } = middlewareMap.get(p);
          return {
            match: (0, _routeMatcher).getRouteMatcher((0, _getMiddlewareRegex).getMiddlewareRegex(p, !ssr)),
            page: p,
            ssr,
            isMiddleware: true
          };
        } else {
          return {
            match: (0, _routeMatcher).getRouteMatcher((0, _routeRegex).getRouteRegex(page)),
            page
          };
        }
      });
    }
  }
});

// ../../node_modules/next/dist/shared/lib/router/utils/is-dynamic.js
var require_is_dynamic = __commonJS({
  "../../node_modules/next/dist/shared/lib/router/utils/is-dynamic.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.isDynamicRoute = isDynamicRoute;
    var TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;
    function isDynamicRoute(route) {
      return TEST_ROUTE.test(route);
    }
  }
});

// ../../node_modules/next/dist/shared/lib/router/utils/index.js
var require_utils2 = __commonJS({
  "../../node_modules/next/dist/shared/lib/router/utils/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "getMiddlewareRegex", {
      enumerable: true,
      get: function() {
        return _getMiddlewareRegex.getMiddlewareRegex;
      }
    });
    Object.defineProperty(exports, "getRouteMatcher", {
      enumerable: true,
      get: function() {
        return _routeMatcher.getRouteMatcher;
      }
    });
    Object.defineProperty(exports, "getRouteRegex", {
      enumerable: true,
      get: function() {
        return _routeRegex.getRouteRegex;
      }
    });
    Object.defineProperty(exports, "getRoutingItems", {
      enumerable: true,
      get: function() {
        return _routingItems.getRoutingItems;
      }
    });
    Object.defineProperty(exports, "RoutingItem", {
      enumerable: true,
      get: function() {
        return _routingItems.RoutingItem;
      }
    });
    Object.defineProperty(exports, "getSortedRoutes", {
      enumerable: true,
      get: function() {
        return _sortedRoutes.getSortedRoutes;
      }
    });
    Object.defineProperty(exports, "isDynamicRoute", {
      enumerable: true,
      get: function() {
        return _isDynamic.isDynamicRoute;
      }
    });
    var _getMiddlewareRegex = require_get_middleware_regex();
    var _routeMatcher = require_route_matcher();
    var _routeRegex = require_route_regex();
    var _routingItems = require_routing_items();
    var _sortedRoutes = require_sorted_routes();
    var _isDynamic = require_is_dynamic();
  }
});

// ../../node_modules/next/dist/server/denormalize-page-path.js
var require_denormalize_page_path = __commonJS({
  "../../node_modules/next/dist/server/denormalize-page-path.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.normalizePathSep = normalizePathSep;
    exports.denormalizePagePath = denormalizePagePath;
    var _utils = require_utils2();
    function normalizePathSep(path) {
      return path.replace(/\\/g, "/");
    }
    function denormalizePagePath(page) {
      page = normalizePathSep(page);
      if (page.startsWith("/index/") && !(0, _utils).isDynamicRoute(page)) {
        page = page.slice(6);
      } else if (page === "/index") {
        page = "/";
      }
      return page;
    }
  }
});

// ../../node_modules/next/dist/shared/lib/i18n/normalize-locale-path.js
var require_normalize_locale_path = __commonJS({
  "../../node_modules/next/dist/shared/lib/i18n/normalize-locale-path.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.normalizeLocalePath = normalizeLocalePath;
    function normalizeLocalePath(pathname, locales) {
      let detectedLocale;
      const pathnameParts = pathname.split("/");
      (locales || []).some((locale) => {
        if (pathnameParts[1] && pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
          detectedLocale = locale;
          pathnameParts.splice(1, 1);
          pathname = pathnameParts.join("/") || "/";
          return true;
        }
        return false;
      });
      return {
        pathname,
        detectedLocale
      };
    }
  }
});

// ../../node_modules/next/dist/shared/lib/mitt.js
var require_mitt = __commonJS({
  "../../node_modules/next/dist/shared/lib/mitt.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = mitt;
    function mitt() {
      const all = /* @__PURE__ */ Object.create(null);
      return {
        on(type, handler) {
          (all[type] || (all[type] = [])).push(handler);
        },
        off(type, handler) {
          if (all[type]) {
            all[type].splice(all[type].indexOf(handler) >>> 0, 1);
          }
        },
        emit(type, ...evts) {
          (all[type] || []).slice().map((handler) => {
            handler(...evts);
          });
        }
      };
    }
  }
});

// ../../node_modules/next/dist/shared/lib/router/utils/querystring.js
var require_querystring = __commonJS({
  "../../node_modules/next/dist/shared/lib/router/utils/querystring.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
    exports.urlQueryToSearchParams = urlQueryToSearchParams;
    exports.assign = assign;
    function searchParamsToUrlQuery(searchParams) {
      const query = {};
      searchParams.forEach((value, key) => {
        if (typeof query[key] === "undefined") {
          query[key] = value;
        } else if (Array.isArray(query[key])) {
          query[key].push(value);
        } else {
          query[key] = [
            query[key],
            value
          ];
        }
      });
      return query;
    }
    function stringifyUrlQueryParam(param) {
      if (typeof param === "string" || typeof param === "number" && !isNaN(param) || typeof param === "boolean") {
        return String(param);
      } else {
        return "";
      }
    }
    function urlQueryToSearchParams(urlQuery) {
      const result = new URLSearchParams();
      Object.entries(urlQuery).forEach(([key, value]) => {
        if (Array.isArray(value)) {
          value.forEach((item) => result.append(key, stringifyUrlQueryParam(item)));
        } else {
          result.set(key, stringifyUrlQueryParam(value));
        }
      });
      return result;
    }
    function assign(target, ...searchParamsList) {
      searchParamsList.forEach((searchParams) => {
        Array.from(searchParams.keys()).forEach((key) => target.delete(key));
        searchParams.forEach((value, key) => target.append(key, value));
      });
      return target;
    }
  }
});

// ../../node_modules/next/dist/shared/lib/router/utils/parse-relative-url.js
var require_parse_relative_url = __commonJS({
  "../../node_modules/next/dist/shared/lib/router/utils/parse-relative-url.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.parseRelativeUrl = parseRelativeUrl;
    var _utils = require_utils();
    var _querystring = require_querystring();
    function parseRelativeUrl(url, base) {
      const globalBase = new URL(typeof window === "undefined" ? "http://n" : (0, _utils).getLocationOrigin());
      const resolvedBase = base ? new URL(base, globalBase) : globalBase;
      const { pathname, searchParams, search, hash, href, origin } = new URL(url, resolvedBase);
      if (origin !== globalBase.origin) {
        throw new Error(`invariant: invalid relative URL, router received ${url}`);
      }
      return {
        pathname,
        query: (0, _querystring).searchParamsToUrlQuery(searchParams),
        search,
        hash,
        href: href.slice(globalBase.origin.length)
      };
    }
  }
});

// ../../node_modules/next/dist/compiled/path-to-regexp/index.js
var require_path_to_regexp = __commonJS({
  "../../node_modules/next/dist/compiled/path-to-regexp/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function lexer(str) {
      var tokens = [];
      var i = 0;
      while (i < str.length) {
        var char = str[i];
        if (char === "*" || char === "+" || char === "?") {
          tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
          continue;
        }
        if (char === "\\") {
          tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
          continue;
        }
        if (char === "{") {
          tokens.push({ type: "OPEN", index: i, value: str[i++] });
          continue;
        }
        if (char === "}") {
          tokens.push({ type: "CLOSE", index: i, value: str[i++] });
          continue;
        }
        if (char === ":") {
          var name = "";
          var j = i + 1;
          while (j < str.length) {
            var code = str.charCodeAt(j);
            if (code >= 48 && code <= 57 || code >= 65 && code <= 90 || code >= 97 && code <= 122 || code === 95) {
              name += str[j++];
              continue;
            }
            break;
          }
          if (!name)
            throw new TypeError("Missing parameter name at " + i);
          tokens.push({ type: "NAME", index: i, value: name });
          i = j;
          continue;
        }
        if (char === "(") {
          var count = 1;
          var pattern = "";
          var j = i + 1;
          if (str[j] === "?") {
            throw new TypeError('Pattern cannot start with "?" at ' + j);
          }
          while (j < str.length) {
            if (str[j] === "\\") {
              pattern += str[j++] + str[j++];
              continue;
            }
            if (str[j] === ")") {
              count--;
              if (count === 0) {
                j++;
                break;
              }
            } else if (str[j] === "(") {
              count++;
              if (str[j + 1] !== "?") {
                throw new TypeError("Capturing groups are not allowed at " + j);
              }
            }
            pattern += str[j++];
          }
          if (count)
            throw new TypeError("Unbalanced pattern at " + i);
          if (!pattern)
            throw new TypeError("Missing pattern at " + i);
          tokens.push({ type: "PATTERN", index: i, value: pattern });
          i = j;
          continue;
        }
        tokens.push({ type: "CHAR", index: i, value: str[i++] });
      }
      tokens.push({ type: "END", index: i, value: "" });
      return tokens;
    }
    function parse(str, options) {
      if (options === void 0) {
        options = {};
      }
      var tokens = lexer(str);
      var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
      var defaultPattern = "[^" + escapeString(options.delimiter || "/#?") + "]+?";
      var result = [];
      var key = 0;
      var i = 0;
      var path = "";
      var tryConsume = function(type) {
        if (i < tokens.length && tokens[i].type === type)
          return tokens[i++].value;
      };
      var mustConsume = function(type) {
        var value2 = tryConsume(type);
        if (value2 !== void 0)
          return value2;
        var _a2 = tokens[i], nextType = _a2.type, index = _a2.index;
        throw new TypeError("Unexpected " + nextType + " at " + index + ", expected " + type);
      };
      var consumeText = function() {
        var result2 = "";
        var value2;
        while (value2 = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR")) {
          result2 += value2;
        }
        return result2;
      };
      while (i < tokens.length) {
        var char = tryConsume("CHAR");
        var name = tryConsume("NAME");
        var pattern = tryConsume("PATTERN");
        if (name || pattern) {
          var prefix = char || "";
          if (prefixes.indexOf(prefix) === -1) {
            path += prefix;
            prefix = "";
          }
          if (path) {
            result.push(path);
            path = "";
          }
          result.push({
            name: name || key++,
            prefix,
            suffix: "",
            pattern: pattern || defaultPattern,
            modifier: tryConsume("MODIFIER") || ""
          });
          continue;
        }
        var value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
          path += value;
          continue;
        }
        if (path) {
          result.push(path);
          path = "";
        }
        var open = tryConsume("OPEN");
        if (open) {
          var prefix = consumeText();
          var name_1 = tryConsume("NAME") || "";
          var pattern_1 = tryConsume("PATTERN") || "";
          var suffix = consumeText();
          mustConsume("CLOSE");
          result.push({
            name: name_1 || (pattern_1 ? key++ : ""),
            pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
            prefix,
            suffix,
            modifier: tryConsume("MODIFIER") || ""
          });
          continue;
        }
        mustConsume("END");
      }
      return result;
    }
    exports.parse = parse;
    function compile(str, options) {
      return tokensToFunction(parse(str, options), options);
    }
    exports.compile = compile;
    function tokensToFunction(tokens, options) {
      if (options === void 0) {
        options = {};
      }
      var reFlags = flags(options);
      var _a = options.encode, encode = _a === void 0 ? function(x) {
        return x;
      } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
      var matches = tokens.map(function(token) {
        if (typeof token === "object") {
          return new RegExp("^(?:" + token.pattern + ")$", reFlags);
        }
      });
      return function(data) {
        var path = "";
        for (var i = 0; i < tokens.length; i++) {
          var token = tokens[i];
          if (typeof token === "string") {
            path += token;
            continue;
          }
          var value = data ? data[token.name] : void 0;
          var optional = token.modifier === "?" || token.modifier === "*";
          var repeat = token.modifier === "*" || token.modifier === "+";
          if (Array.isArray(value)) {
            if (!repeat) {
              throw new TypeError('Expected "' + token.name + '" to not repeat, but got an array');
            }
            if (value.length === 0) {
              if (optional)
                continue;
              throw new TypeError('Expected "' + token.name + '" to not be empty');
            }
            for (var j = 0; j < value.length; j++) {
              var segment = encode(value[j], token);
              if (validate && !matches[i].test(segment)) {
                throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but got "' + segment + '"');
              }
              path += token.prefix + segment + token.suffix;
            }
            continue;
          }
          if (typeof value === "string" || typeof value === "number") {
            var segment = encode(String(value), token);
            if (validate && !matches[i].test(segment)) {
              throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but got "' + segment + '"');
            }
            path += token.prefix + segment + token.suffix;
            continue;
          }
          if (optional)
            continue;
          var typeOfMessage = repeat ? "an array" : "a string";
          throw new TypeError('Expected "' + token.name + '" to be ' + typeOfMessage);
        }
        return path;
      };
    }
    exports.tokensToFunction = tokensToFunction;
    function match(str, options) {
      var keys = [];
      var re = pathToRegexp(str, keys, options);
      return regexpToFunction(re, keys, options);
    }
    exports.match = match;
    function regexpToFunction(re, keys, options) {
      if (options === void 0) {
        options = {};
      }
      var _a = options.decode, decode = _a === void 0 ? function(x) {
        return x;
      } : _a;
      return function(pathname) {
        var m = re.exec(pathname);
        if (!m)
          return false;
        var path = m[0], index = m.index;
        var params = /* @__PURE__ */ Object.create(null);
        var _loop_1 = function(i2) {
          if (m[i2] === void 0)
            return "continue";
          var key = keys[i2 - 1];
          if (key.modifier === "*" || key.modifier === "+") {
            params[key.name] = m[i2].split(key.prefix + key.suffix).map(function(value) {
              return decode(value, key);
            });
          } else {
            params[key.name] = decode(m[i2], key);
          }
        };
        for (var i = 1; i < m.length; i++) {
          _loop_1(i);
        }
        return { path, index, params };
      };
    }
    exports.regexpToFunction = regexpToFunction;
    function escapeString(str) {
      return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
    }
    function flags(options) {
      return options && options.sensitive ? "" : "i";
    }
    function regexpToRegexp(path, keys) {
      if (!keys)
        return path;
      var groups = path.source.match(/\((?!\?)/g);
      if (groups) {
        for (var i = 0; i < groups.length; i++) {
          keys.push({
            name: i,
            prefix: "",
            suffix: "",
            modifier: "",
            pattern: ""
          });
        }
      }
      return path;
    }
    function arrayToRegexp(paths, keys, options) {
      var parts = paths.map(function(path) {
        return pathToRegexp(path, keys, options).source;
      });
      return new RegExp("(?:" + parts.join("|") + ")", flags(options));
    }
    function stringToRegexp(path, keys, options) {
      return tokensToRegexp(parse(path, options), keys, options);
    }
    function tokensToRegexp(tokens, keys, options) {
      if (options === void 0) {
        options = {};
      }
      var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function(x) {
        return x;
      } : _d;
      var endsWith = "[" + escapeString(options.endsWith || "") + "]|$";
      var delimiter = "[" + escapeString(options.delimiter || "/#?") + "]";
      var route = start ? "^" : "";
      for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
        var token = tokens_1[_i];
        if (typeof token === "string") {
          route += escapeString(encode(token));
        } else {
          var prefix = escapeString(encode(token.prefix));
          var suffix = escapeString(encode(token.suffix));
          if (token.pattern) {
            if (keys)
              keys.push(token);
            if (prefix || suffix) {
              if (token.modifier === "+" || token.modifier === "*") {
                var mod = token.modifier === "*" ? "?" : "";
                route += "(?:" + prefix + "((?:" + token.pattern + ")(?:" + suffix + prefix + "(?:" + token.pattern + "))*)" + suffix + ")" + mod;
              } else {
                route += "(?:" + prefix + "(" + token.pattern + ")" + suffix + ")" + token.modifier;
              }
            } else {
              route += "(" + token.pattern + ")" + token.modifier;
            }
          } else {
            route += "(?:" + prefix + suffix + ")" + token.modifier;
          }
        }
      }
      if (end) {
        if (!strict)
          route += delimiter + "?";
        route += !options.endsWith ? "$" : "(?=" + endsWith + ")";
      } else {
        var endToken = tokens[tokens.length - 1];
        var isEndDelimited = typeof endToken === "string" ? delimiter.indexOf(endToken[endToken.length - 1]) > -1 : endToken === void 0;
        if (!strict) {
          route += "(?:" + delimiter + "(?=" + endsWith + "))?";
        }
        if (!isEndDelimited) {
          route += "(?=" + delimiter + "|" + endsWith + ")";
        }
      }
      return new RegExp(route, flags(options));
    }
    exports.tokensToRegexp = tokensToRegexp;
    function pathToRegexp(path, keys, options) {
      if (path instanceof RegExp)
        return regexpToRegexp(path, keys);
      if (Array.isArray(path))
        return arrayToRegexp(path, keys, options);
      return stringToRegexp(path, keys, options);
    }
    exports.pathToRegexp = pathToRegexp;
  }
});

// ../../node_modules/next/dist/shared/lib/router/utils/path-match.js
var require_path_match = __commonJS({
  "../../node_modules/next/dist/shared/lib/router/utils/path-match.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = exports.customRouteMatcherOptions = exports.matcherOptions = exports.pathToRegexp = void 0;
    var pathToRegexp = _interopRequireWildcard(require_path_to_regexp());
    exports.pathToRegexp = pathToRegexp;
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      } else {
        var newObj = {};
        if (obj != null) {
          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
              var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};
              if (desc.get || desc.set) {
                Object.defineProperty(newObj, key, desc);
              } else {
                newObj[key] = obj[key];
              }
            }
          }
        }
        newObj.default = obj;
        return newObj;
      }
    }
    var matcherOptions = {
      sensitive: false,
      delimiter: "/"
    };
    exports.matcherOptions = matcherOptions;
    var customRouteMatcherOptions = {
      ...matcherOptions,
      strict: true
    };
    exports.customRouteMatcherOptions = customRouteMatcherOptions;
    var _default = (customRoute = false) => {
      return (path, regexModifier) => {
        const keys = [];
        let matcherRegex = pathToRegexp.pathToRegexp(path, keys, customRoute ? customRouteMatcherOptions : matcherOptions);
        if (regexModifier) {
          const regexSource = regexModifier(matcherRegex.source);
          matcherRegex = new RegExp(regexSource, matcherRegex.flags);
        }
        const matcher = pathToRegexp.regexpToFunction(matcherRegex, keys);
        return (pathname, params) => {
          const res = pathname == null ? false : matcher(pathname);
          if (!res) {
            return false;
          }
          if (customRoute) {
            for (const key of keys) {
              if (typeof key.name === "number") {
                delete res.params[key.name];
              }
            }
          }
          return {
            ...params,
            ...res.params
          };
        };
      };
    };
    exports.default = _default;
  }
});

// ../../node_modules/next/dist/shared/lib/router/utils/parse-url.js
var require_parse_url = __commonJS({
  "../../node_modules/next/dist/shared/lib/router/utils/parse-url.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.parseUrl = parseUrl;
    var _querystring = require_querystring();
    var _parseRelativeUrl = require_parse_relative_url();
    function parseUrl(url) {
      if (url.startsWith("/")) {
        return (0, _parseRelativeUrl).parseRelativeUrl(url);
      }
      const parsedURL = new URL(url);
      return {
        hash: parsedURL.hash,
        hostname: parsedURL.hostname,
        href: parsedURL.href,
        pathname: parsedURL.pathname,
        port: parsedURL.port,
        protocol: parsedURL.protocol,
        query: (0, _querystring).searchParamsToUrlQuery(parsedURL.searchParams),
        search: parsedURL.search
      };
    }
  }
});

// ../../node_modules/next/dist/shared/lib/router/utils/prepare-destination.js
var require_prepare_destination = __commonJS({
  "../../node_modules/next/dist/shared/lib/router/utils/prepare-destination.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.matchHas = matchHas;
    exports.compileNonPath = compileNonPath;
    exports.prepareDestination = prepareDestination;
    var _pathToRegexp = require_path_to_regexp();
    var _escapeRegexp = require_escape_regexp();
    var _parseUrl = require_parse_url();
    function matchHas(req, has, query) {
      const params = {};
      const allMatch = has.every((hasItem) => {
        let value;
        let key = hasItem.key;
        switch (hasItem.type) {
          case "header": {
            key = key.toLowerCase();
            value = req.headers[key];
            break;
          }
          case "cookie": {
            value = req.cookies[hasItem.key];
            break;
          }
          case "query": {
            value = query[key];
            break;
          }
          case "host": {
            const { host } = (req === null || req === void 0 ? void 0 : req.headers) || {};
            const hostname = host === null || host === void 0 ? void 0 : host.split(":")[0].toLowerCase();
            value = hostname;
            break;
          }
          default: {
            break;
          }
        }
        if (!hasItem.value && value) {
          params[getSafeParamName(key)] = value;
          return true;
        } else if (value) {
          const matcher = new RegExp(`^${hasItem.value}$`);
          const matches = Array.isArray(value) ? value.slice(-1)[0].match(matcher) : value.match(matcher);
          if (matches) {
            if (Array.isArray(matches)) {
              if (matches.groups) {
                Object.keys(matches.groups).forEach((groupKey) => {
                  params[groupKey] = matches.groups[groupKey];
                });
              } else if (hasItem.type === "host" && matches[0]) {
                params.host = matches[0];
              }
            }
            return true;
          }
        }
        return false;
      });
      if (allMatch) {
        return params;
      }
      return false;
    }
    function compileNonPath(value, params) {
      if (!value.includes(":")) {
        return value;
      }
      for (const key of Object.keys(params)) {
        if (value.includes(`:${key}`)) {
          value = value.replace(new RegExp(`:${key}\\*`, "g"), `:${key}--ESCAPED_PARAM_ASTERISKS`).replace(new RegExp(`:${key}\\?`, "g"), `:${key}--ESCAPED_PARAM_QUESTION`).replace(new RegExp(`:${key}\\+`, "g"), `:${key}--ESCAPED_PARAM_PLUS`).replace(new RegExp(`:${key}(?!\\w)`, "g"), `--ESCAPED_PARAM_COLON${key}`);
        }
      }
      value = value.replace(/(:|\*|\?|\+|\(|\)|\{|\})/g, "\\$1").replace(/--ESCAPED_PARAM_PLUS/g, "+").replace(/--ESCAPED_PARAM_COLON/g, ":").replace(/--ESCAPED_PARAM_QUESTION/g, "?").replace(/--ESCAPED_PARAM_ASTERISKS/g, "*");
      return (0, _pathToRegexp).compile(`/${value}`, {
        validate: false
      })(params).slice(1);
    }
    function prepareDestination(args) {
      const query = Object.assign({}, args.query);
      delete query.__nextLocale;
      delete query.__nextDefaultLocale;
      let escapedDestination = args.destination;
      for (const param of Object.keys({
        ...args.params,
        ...query
      })) {
        escapedDestination = escapeSegment(escapedDestination, param);
      }
      const parsedDestination = (0, _parseUrl).parseUrl(escapedDestination);
      const destQuery = parsedDestination.query;
      const destPath = unescapeSegments(`${parsedDestination.pathname}${parsedDestination.hash || ""}`);
      const destHostname = unescapeSegments(parsedDestination.hostname || "");
      const destPathParamKeys = [];
      const destHostnameParamKeys = [];
      (0, _pathToRegexp).pathToRegexp(destPath, destPathParamKeys);
      (0, _pathToRegexp).pathToRegexp(destHostname, destHostnameParamKeys);
      const destParams = [];
      destPathParamKeys.forEach((key) => destParams.push(key.name));
      destHostnameParamKeys.forEach((key) => destParams.push(key.name));
      const destPathCompiler = (0, _pathToRegexp).compile(destPath, {
        validate: false
      });
      const destHostnameCompiler = (0, _pathToRegexp).compile(destHostname, {
        validate: false
      });
      for (const [key1, strOrArray] of Object.entries(destQuery)) {
        if (Array.isArray(strOrArray)) {
          destQuery[key1] = strOrArray.map((value) => compileNonPath(unescapeSegments(value), args.params));
        } else {
          destQuery[key1] = compileNonPath(unescapeSegments(strOrArray), args.params);
        }
      }
      let paramKeys = Object.keys(args.params).filter((name) => name !== "nextInternalLocale");
      if (args.appendParamsToQuery && !paramKeys.some((key) => destParams.includes(key))) {
        for (const key of paramKeys) {
          if (!(key in destQuery)) {
            destQuery[key] = args.params[key];
          }
        }
      }
      let newUrl;
      try {
        newUrl = destPathCompiler(args.params);
        const [pathname, hash] = newUrl.split("#");
        parsedDestination.hostname = destHostnameCompiler(args.params);
        parsedDestination.pathname = pathname;
        parsedDestination.hash = `${hash ? "#" : ""}${hash || ""}`;
        delete parsedDestination.search;
      } catch (err) {
        if (err.message.match(/Expected .*? to not repeat, but got an array/)) {
          throw new Error(`To use a multi-match in the destination you must add \`*\` at the end of the param name to signify it should repeat. https://nextjs.org/docs/messages/invalid-multi-match`);
        }
        throw err;
      }
      parsedDestination.query = {
        ...query,
        ...parsedDestination.query
      };
      return {
        newUrl,
        parsedDestination
      };
    }
    function getSafeParamName(paramName) {
      let newParamName = "";
      for (let i = 0; i < paramName.length; i++) {
        const charCode = paramName.charCodeAt(i);
        if (charCode > 64 && charCode < 91 || charCode > 96 && charCode < 123) {
          newParamName += paramName[i];
        }
      }
      return newParamName;
    }
    function escapeSegment(str, segmentName) {
      return str.replace(new RegExp(`:${(0, _escapeRegexp).escapeStringRegexp(segmentName)}`, "g"), `__ESC_COLON_${segmentName}`);
    }
    function unescapeSegments(str) {
      return str.replace(/__ESC_COLON_/gi, ":");
    }
  }
});

// ../../node_modules/next/dist/shared/lib/router/utils/resolve-rewrites.js
var require_resolve_rewrites = __commonJS({
  "../../node_modules/next/dist/shared/lib/router/utils/resolve-rewrites.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = resolveRewrites;
    var _pathMatch = _interopRequireDefault(require_path_match());
    var _prepareDestination = require_prepare_destination();
    var _normalizeTrailingSlash = require_normalize_trailing_slash();
    var _normalizeLocalePath = require_normalize_locale_path();
    var _parseRelativeUrl = require_parse_relative_url();
    var _router = require_router();
    function resolveRewrites(asPath, pages, rewrites, query, resolveHref, locales) {
      let matchedPage = false;
      let externalDest = false;
      let parsedAs = (0, _parseRelativeUrl).parseRelativeUrl(asPath);
      let fsPathname = (0, _normalizeTrailingSlash).removePathTrailingSlash((0, _normalizeLocalePath).normalizeLocalePath((0, _router).delBasePath(parsedAs.pathname), locales).pathname);
      let resolvedHref;
      const handleRewrite = (rewrite) => {
        const matcher = customRouteMatcher(rewrite.source);
        let params = matcher(parsedAs.pathname);
        if (rewrite.has && params) {
          const hasParams = (0, _prepareDestination).matchHas({
            headers: {
              host: document.location.hostname
            },
            cookies: document.cookie.split("; ").reduce((acc, item) => {
              const [key, ...value] = item.split("=");
              acc[key] = value.join("=");
              return acc;
            }, {})
          }, rewrite.has, parsedAs.query);
          if (hasParams) {
            Object.assign(params, hasParams);
          } else {
            params = false;
          }
        }
        if (params) {
          if (!rewrite.destination) {
            externalDest = true;
            return true;
          }
          const destRes = (0, _prepareDestination).prepareDestination({
            appendParamsToQuery: true,
            destination: rewrite.destination,
            params,
            query
          });
          parsedAs = destRes.parsedDestination;
          asPath = destRes.newUrl;
          Object.assign(query, destRes.parsedDestination.query);
          fsPathname = (0, _normalizeTrailingSlash).removePathTrailingSlash((0, _normalizeLocalePath).normalizeLocalePath((0, _router).delBasePath(asPath), locales).pathname);
          if (pages.includes(fsPathname)) {
            matchedPage = true;
            resolvedHref = fsPathname;
            return true;
          }
          resolvedHref = resolveHref(fsPathname);
          if (resolvedHref !== asPath && pages.includes(resolvedHref)) {
            matchedPage = true;
            return true;
          }
        }
      };
      let finished = false;
      for (let i = 0; i < rewrites.beforeFiles.length; i++) {
        finished = handleRewrite(rewrites.beforeFiles[i]) || false;
      }
      matchedPage = pages.includes(fsPathname);
      if (!matchedPage) {
        if (!finished) {
          for (let i = 0; i < rewrites.afterFiles.length; i++) {
            if (handleRewrite(rewrites.afterFiles[i])) {
              finished = true;
              break;
            }
          }
        }
        if (!finished) {
          resolvedHref = resolveHref(fsPathname);
          matchedPage = pages.includes(resolvedHref);
          finished = matchedPage;
        }
        if (!finished) {
          for (let i = 0; i < rewrites.fallback.length; i++) {
            if (handleRewrite(rewrites.fallback[i])) {
              finished = true;
              break;
            }
          }
        }
      }
      return {
        asPath,
        parsedAs,
        matchedPage,
        resolvedHref,
        externalDest
      };
    }
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var customRouteMatcher = (0, _pathMatch).default(true);
  }
});

// ../../node_modules/next/dist/shared/lib/router/utils/format-url.js
var require_format_url = __commonJS({
  "../../node_modules/next/dist/shared/lib/router/utils/format-url.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.formatUrl = formatUrl;
    exports.formatWithValidation = formatWithValidation;
    exports.urlObjectKeys = void 0;
    var querystring = _interopRequireWildcard(require_querystring());
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      } else {
        var newObj = {};
        if (obj != null) {
          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
              var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};
              if (desc.get || desc.set) {
                Object.defineProperty(newObj, key, desc);
              } else {
                newObj[key] = obj[key];
              }
            }
          }
        }
        newObj.default = obj;
        return newObj;
      }
    }
    var slashedProtocols = /https?|ftp|gopher|file/;
    function formatUrl(urlObj) {
      let { auth, hostname } = urlObj;
      let protocol = urlObj.protocol || "";
      let pathname = urlObj.pathname || "";
      let hash = urlObj.hash || "";
      let query = urlObj.query || "";
      let host = false;
      auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ":") + "@" : "";
      if (urlObj.host) {
        host = auth + urlObj.host;
      } else if (hostname) {
        host = auth + (~hostname.indexOf(":") ? `[${hostname}]` : hostname);
        if (urlObj.port) {
          host += ":" + urlObj.port;
        }
      }
      if (query && typeof query === "object") {
        query = String(querystring.urlQueryToSearchParams(query));
      }
      let search = urlObj.search || query && `?${query}` || "";
      if (protocol && !protocol.endsWith(":"))
        protocol += ":";
      if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
        host = "//" + (host || "");
        if (pathname && pathname[0] !== "/")
          pathname = "/" + pathname;
      } else if (!host) {
        host = "";
      }
      if (hash && hash[0] !== "#")
        hash = "#" + hash;
      if (search && search[0] !== "?")
        search = "?" + search;
      pathname = pathname.replace(/[?#]/g, encodeURIComponent);
      search = search.replace("#", "%23");
      return `${protocol}${host}${pathname}${search}${hash}`;
    }
    var urlObjectKeys = [
      "auth",
      "hash",
      "host",
      "hostname",
      "href",
      "path",
      "pathname",
      "port",
      "protocol",
      "query",
      "search",
      "slashes"
    ];
    exports.urlObjectKeys = urlObjectKeys;
    function formatWithValidation(url) {
      if (true) {
        if (url !== null && typeof url === "object") {
          Object.keys(url).forEach((key) => {
            if (urlObjectKeys.indexOf(key) === -1) {
              console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
            }
          });
        }
      }
      return formatUrl(url);
    }
  }
});

// ../../node_modules/next/dist/shared/lib/i18n/detect-domain-locale.js
var require_detect_domain_locale = __commonJS({
  "../../node_modules/next/dist/shared/lib/i18n/detect-domain-locale.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.detectDomainLocale = detectDomainLocale;
    function detectDomainLocale(domainItems, hostname, detectedLocale) {
      let domainItem;
      if (domainItems) {
        if (detectedLocale) {
          detectedLocale = detectedLocale.toLowerCase();
        }
        for (const item of domainItems) {
          var ref, ref1;
          const domainHostname = (ref = item.domain) === null || ref === void 0 ? void 0 : ref.split(":")[0].toLowerCase();
          if (hostname === domainHostname || detectedLocale === item.defaultLocale.toLowerCase() || ((ref1 = item.locales) === null || ref1 === void 0 ? void 0 : ref1.some((locale) => locale.toLowerCase() === detectedLocale))) {
            domainItem = item;
            break;
          }
        }
      }
      return domainItem;
    }
  }
});

// ../../node_modules/next/dist/compiled/react-is/cjs/react-is.development.js
var require_react_is_development = __commonJS({
  "../../node_modules/next/dist/compiled/react-is/cjs/react-is.development.js"(exports) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        var REACT_ELEMENT_TYPE = 60103;
        var REACT_PORTAL_TYPE = 60106;
        var REACT_FRAGMENT_TYPE = 60107;
        var REACT_STRICT_MODE_TYPE = 60108;
        var REACT_PROFILER_TYPE = 60114;
        var REACT_PROVIDER_TYPE = 60109;
        var REACT_CONTEXT_TYPE = 60110;
        var REACT_FORWARD_REF_TYPE = 60112;
        var REACT_SUSPENSE_TYPE = 60113;
        var REACT_SUSPENSE_LIST_TYPE = 60120;
        var REACT_MEMO_TYPE = 60115;
        var REACT_LAZY_TYPE = 60116;
        var REACT_BLOCK_TYPE = 60121;
        var REACT_SERVER_BLOCK_TYPE = 60122;
        var REACT_FUNDAMENTAL_TYPE = 60117;
        var REACT_SCOPE_TYPE = 60119;
        var REACT_OPAQUE_ID_TYPE = 60128;
        var REACT_DEBUG_TRACING_MODE_TYPE = 60129;
        var REACT_OFFSCREEN_TYPE = 60130;
        var REACT_LEGACY_HIDDEN_TYPE = 60131;
        if (typeof Symbol === "function" && Symbol.for) {
          var symbolFor = Symbol.for;
          REACT_ELEMENT_TYPE = symbolFor("react.element");
          REACT_PORTAL_TYPE = symbolFor("react.portal");
          REACT_FRAGMENT_TYPE = symbolFor("react.fragment");
          REACT_STRICT_MODE_TYPE = symbolFor("react.strict_mode");
          REACT_PROFILER_TYPE = symbolFor("react.profiler");
          REACT_PROVIDER_TYPE = symbolFor("react.provider");
          REACT_CONTEXT_TYPE = symbolFor("react.context");
          REACT_FORWARD_REF_TYPE = symbolFor("react.forward_ref");
          REACT_SUSPENSE_TYPE = symbolFor("react.suspense");
          REACT_SUSPENSE_LIST_TYPE = symbolFor("react.suspense_list");
          REACT_MEMO_TYPE = symbolFor("react.memo");
          REACT_LAZY_TYPE = symbolFor("react.lazy");
          REACT_BLOCK_TYPE = symbolFor("react.block");
          REACT_SERVER_BLOCK_TYPE = symbolFor("react.server.block");
          REACT_FUNDAMENTAL_TYPE = symbolFor("react.fundamental");
          REACT_SCOPE_TYPE = symbolFor("react.scope");
          REACT_OPAQUE_ID_TYPE = symbolFor("react.opaque.id");
          REACT_DEBUG_TRACING_MODE_TYPE = symbolFor("react.debug_trace_mode");
          REACT_OFFSCREEN_TYPE = symbolFor("react.offscreen");
          REACT_LEGACY_HIDDEN_TYPE = symbolFor("react.legacy_hidden");
        }
        var enableScopeAPI = false;
        function isValidElementType(type) {
          if (typeof type === "string" || typeof type === "function") {
            return true;
          }
          if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || type === REACT_DEBUG_TRACING_MODE_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI) {
            return true;
          }
          if (typeof type === "object" && type !== null) {
            if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
              return true;
            }
          }
          return false;
        }
        function typeOf(object) {
          if (typeof object === "object" && object !== null) {
            var $$typeof = object.$$typeof;
            switch ($$typeof) {
              case REACT_ELEMENT_TYPE:
                var type = object.type;
                switch (type) {
                  case REACT_FRAGMENT_TYPE:
                  case REACT_PROFILER_TYPE:
                  case REACT_STRICT_MODE_TYPE:
                  case REACT_SUSPENSE_TYPE:
                  case REACT_SUSPENSE_LIST_TYPE:
                    return type;
                  default:
                    var $$typeofType = type && type.$$typeof;
                    switch ($$typeofType) {
                      case REACT_CONTEXT_TYPE:
                      case REACT_FORWARD_REF_TYPE:
                      case REACT_LAZY_TYPE:
                      case REACT_MEMO_TYPE:
                      case REACT_PROVIDER_TYPE:
                        return $$typeofType;
                      default:
                        return $$typeof;
                    }
                }
              case REACT_PORTAL_TYPE:
                return $$typeof;
            }
          }
          return void 0;
        }
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element = REACT_ELEMENT_TYPE;
        var ForwardRef = REACT_FORWARD_REF_TYPE;
        var Fragment = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo = REACT_MEMO_TYPE;
        var Portal = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false;
        var hasWarnedAboutDeprecatedIsConcurrentMode = false;
        function isAsyncMode(object) {
          {
            if (!hasWarnedAboutDeprecatedIsAsyncMode) {
              hasWarnedAboutDeprecatedIsAsyncMode = true;
              console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.");
            }
          }
          return false;
        }
        function isConcurrentMode(object) {
          {
            if (!hasWarnedAboutDeprecatedIsConcurrentMode) {
              hasWarnedAboutDeprecatedIsConcurrentMode = true;
              console["warn"]("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.");
            }
          }
          return false;
        }
        function isContextConsumer(object) {
          return typeOf(object) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object) {
          return typeOf(object) === REACT_PROVIDER_TYPE;
        }
        function isElement(object) {
          return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        function isForwardRef(object) {
          return typeOf(object) === REACT_FORWARD_REF_TYPE;
        }
        function isFragment(object) {
          return typeOf(object) === REACT_FRAGMENT_TYPE;
        }
        function isLazy(object) {
          return typeOf(object) === REACT_LAZY_TYPE;
        }
        function isMemo(object) {
          return typeOf(object) === REACT_MEMO_TYPE;
        }
        function isPortal(object) {
          return typeOf(object) === REACT_PORTAL_TYPE;
        }
        function isProfiler(object) {
          return typeOf(object) === REACT_PROFILER_TYPE;
        }
        function isStrictMode(object) {
          return typeOf(object) === REACT_STRICT_MODE_TYPE;
        }
        function isSuspense(object) {
          return typeOf(object) === REACT_SUSPENSE_TYPE;
        }
        exports.ContextConsumer = ContextConsumer;
        exports.ContextProvider = ContextProvider;
        exports.Element = Element;
        exports.ForwardRef = ForwardRef;
        exports.Fragment = Fragment;
        exports.Lazy = Lazy;
        exports.Memo = Memo;
        exports.Portal = Portal;
        exports.Profiler = Profiler;
        exports.StrictMode = StrictMode;
        exports.Suspense = Suspense;
        exports.isAsyncMode = isAsyncMode;
        exports.isConcurrentMode = isConcurrentMode;
        exports.isContextConsumer = isContextConsumer;
        exports.isContextProvider = isContextProvider;
        exports.isElement = isElement;
        exports.isForwardRef = isForwardRef;
        exports.isFragment = isFragment;
        exports.isLazy = isLazy;
        exports.isMemo = isMemo;
        exports.isPortal = isPortal;
        exports.isProfiler = isProfiler;
        exports.isStrictMode = isStrictMode;
        exports.isSuspense = isSuspense;
        exports.isValidElementType = isValidElementType;
        exports.typeOf = typeOf;
      })();
    }
  }
});

// ../../node_modules/next/dist/compiled/react-is/index.js
var require_react_is = __commonJS({
  "../../node_modules/next/dist/compiled/react-is/index.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_is_development();
    }
  }
});

// ../../node_modules/next/dist/shared/lib/router/router.js
var require_router = __commonJS({
  "../../node_modules/next/dist/shared/lib/router/router.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.getDomainLocale = getDomainLocale;
    exports.addLocale = addLocale;
    exports.delLocale = delLocale;
    exports.hasBasePath = hasBasePath;
    exports.addBasePath = addBasePath;
    exports.delBasePath = delBasePath;
    exports.isLocalURL = isLocalURL;
    exports.interpolateAs = interpolateAs;
    exports.resolveHref = resolveHref;
    exports.default = void 0;
    var _normalizeTrailingSlash = require_normalize_trailing_slash();
    var _routeLoader = require_route_loader();
    var _isError = _interopRequireWildcard(require_is_error());
    var _denormalizePagePath = require_denormalize_page_path();
    var _normalizeLocalePath = require_normalize_locale_path();
    var _mitt = _interopRequireDefault(require_mitt());
    var _utils = require_utils();
    var _isDynamic = require_is_dynamic();
    var _parseRelativeUrl = require_parse_relative_url();
    var _querystring = require_querystring();
    var _resolveRewrites = _interopRequireDefault(require_resolve_rewrites());
    var _routeMatcher = require_route_matcher();
    var _routeRegex = require_route_regex();
    var _formatUrl = require_format_url();
    var _routingItems = require_routing_items();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      } else {
        var newObj = {};
        if (obj != null) {
          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
              var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};
              if (desc.get || desc.set) {
                Object.defineProperty(newObj, key, desc);
              } else {
                newObj[key] = obj[key];
              }
            }
          }
        }
        newObj.default = obj;
        return newObj;
      }
    }
    var detectDomainLocale;
    if (process.env.__NEXT_I18N_SUPPORT) {
      detectDomainLocale = require_detect_domain_locale().detectDomainLocale;
    }
    var basePath = process.env.__NEXT_ROUTER_BASEPATH || "";
    function buildCancellationError() {
      return Object.assign(new Error("Route Cancelled"), {
        cancelled: true
      });
    }
    function addPathPrefix(path, prefix) {
      if (!path.startsWith("/") || !prefix) {
        return path;
      }
      const pathname = pathNoQueryHash(path);
      return (0, _normalizeTrailingSlash).normalizePathTrailingSlash(`${prefix}${pathname}`) + path.slice(pathname.length);
    }
    function getDomainLocale(path, locale, locales, domainLocales) {
      if (process.env.__NEXT_I18N_SUPPORT) {
        locale = locale || (0, _normalizeLocalePath).normalizeLocalePath(path, locales).detectedLocale;
        const detectedDomain = detectDomainLocale(domainLocales, void 0, locale);
        if (detectedDomain) {
          return `http${detectedDomain.http ? "" : "s"}://${detectedDomain.domain}${basePath || ""}${locale === detectedDomain.defaultLocale ? "" : `/${locale}`}${path}`;
        }
        return false;
      } else {
        return false;
      }
    }
    function addLocale(path, locale, defaultLocale) {
      if (process.env.__NEXT_I18N_SUPPORT) {
        const pathname = pathNoQueryHash(path);
        const pathLower = pathname.toLowerCase();
        const localeLower = locale && locale.toLowerCase();
        return locale && locale !== defaultLocale && !pathLower.startsWith("/" + localeLower + "/") && pathLower !== "/" + localeLower ? addPathPrefix(path, "/" + locale) : path;
      }
      return path;
    }
    function delLocale(path, locale) {
      if (process.env.__NEXT_I18N_SUPPORT) {
        const pathname = pathNoQueryHash(path);
        const pathLower = pathname.toLowerCase();
        const localeLower = locale && locale.toLowerCase();
        return locale && (pathLower.startsWith("/" + localeLower + "/") || pathLower === "/" + localeLower) ? (pathname.length === locale.length + 1 ? "/" : "") + path.slice(locale.length + 1) : path;
      }
      return path;
    }
    function pathNoQueryHash(path) {
      const queryIndex = path.indexOf("?");
      const hashIndex = path.indexOf("#");
      if (queryIndex > -1 || hashIndex > -1) {
        path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
      }
      return path;
    }
    function hasBasePath(path) {
      path = pathNoQueryHash(path);
      return path === basePath || path.startsWith(basePath + "/");
    }
    function addBasePath(path) {
      return addPathPrefix(path, basePath);
    }
    function delBasePath(path) {
      path = path.slice(basePath.length);
      if (!path.startsWith("/"))
        path = `/${path}`;
      return path;
    }
    function isLocalURL(url) {
      if (url.startsWith("/") || url.startsWith("#") || url.startsWith("?"))
        return true;
      try {
        const locationOrigin = (0, _utils).getLocationOrigin();
        const resolved = new URL(url, locationOrigin);
        return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
      } catch (_) {
        return false;
      }
    }
    function interpolateAs(route, asPathname, query) {
      let interpolatedRoute = "";
      const dynamicRegex = (0, _routeRegex).getRouteRegex(route);
      const dynamicGroups = dynamicRegex.groups;
      const dynamicMatches = (asPathname !== route ? (0, _routeMatcher).getRouteMatcher(dynamicRegex)(asPathname) : "") || query;
      interpolatedRoute = route;
      const params = Object.keys(dynamicGroups);
      if (!params.every((param) => {
        let value = dynamicMatches[param] || "";
        const { repeat, optional } = dynamicGroups[param];
        let replaced = `[${repeat ? "..." : ""}${param}]`;
        if (optional) {
          replaced = `${!value ? "/" : ""}[${replaced}]`;
        }
        if (repeat && !Array.isArray(value))
          value = [
            value
          ];
        return (optional || param in dynamicMatches) && (interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map((segment) => encodeURIComponent(segment)).join("/") : encodeURIComponent(value)) || "/");
      })) {
        interpolatedRoute = "";
      }
      return {
        params,
        result: interpolatedRoute
      };
    }
    function omitParmsFromQuery(query, params) {
      const filteredQuery = {};
      Object.keys(query).forEach((key) => {
        if (!params.includes(key)) {
          filteredQuery[key] = query[key];
        }
      });
      return filteredQuery;
    }
    function resolveHref(router, href, resolveAs) {
      let base;
      let urlAsString = typeof href === "string" ? href : (0, _formatUrl).formatWithValidation(href);
      const urlProtoMatch = urlAsString.match(/^[a-zA-Z]{1,}:\/\//);
      const urlAsStringNoProto = urlProtoMatch ? urlAsString.slice(urlProtoMatch[0].length) : urlAsString;
      const urlParts = urlAsStringNoProto.split("?");
      if ((urlParts[0] || "").match(/(\/\/|\\)/)) {
        console.error(`Invalid href passed to next/router: ${urlAsString}, repeated forward-slashes (//) or backslashes \\ are not valid in the href`);
        const normalizedUrl = (0, _utils).normalizeRepeatedSlashes(urlAsStringNoProto);
        urlAsString = (urlProtoMatch ? urlProtoMatch[0] : "") + normalizedUrl;
      }
      if (!isLocalURL(urlAsString)) {
        return resolveAs ? [
          urlAsString
        ] : urlAsString;
      }
      try {
        base = new URL(urlAsString.startsWith("#") ? router.asPath : router.pathname, "http://n");
      } catch (_) {
        base = new URL("/", "http://n");
      }
      try {
        const finalUrl = new URL(urlAsString, base);
        finalUrl.pathname = (0, _normalizeTrailingSlash).normalizePathTrailingSlash(finalUrl.pathname);
        let interpolatedAs = "";
        if ((0, _isDynamic).isDynamicRoute(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
          const query = (0, _querystring).searchParamsToUrlQuery(finalUrl.searchParams);
          const { result, params } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);
          if (result) {
            interpolatedAs = (0, _formatUrl).formatWithValidation({
              pathname: result,
              hash: finalUrl.hash,
              query: omitParmsFromQuery(query, params)
            });
          }
        }
        const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
        return resolveAs ? [
          resolvedHref,
          interpolatedAs || resolvedHref
        ] : resolvedHref;
      } catch (_1) {
        return resolveAs ? [
          urlAsString
        ] : urlAsString;
      }
    }
    function stripOrigin(url) {
      const origin = (0, _utils).getLocationOrigin();
      return url.startsWith(origin) ? url.substring(origin.length) : url;
    }
    function prepareUrlAs(router, url, as) {
      let [resolvedHref, resolvedAs] = resolveHref(router, url, true);
      const origin = (0, _utils).getLocationOrigin();
      const hrefHadOrigin = resolvedHref.startsWith(origin);
      const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
      resolvedHref = stripOrigin(resolvedHref);
      resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
      const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
      const preparedAs = as ? stripOrigin(resolveHref(router, as)) : resolvedAs || resolvedHref;
      return {
        url: preparedUrl,
        as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
      };
    }
    function resolveDynamicRoute(pathname, pages) {
      const cleanPathname = (0, _normalizeTrailingSlash).removePathTrailingSlash((0, _denormalizePagePath).denormalizePagePath(pathname));
      if (cleanPathname === "/404" || cleanPathname === "/_error") {
        return pathname;
      }
      if (!pages.includes(cleanPathname)) {
        pages.some((page) => {
          if ((0, _isDynamic).isDynamicRoute(page) && (0, _routeRegex).getRouteRegex(page).re.test(cleanPathname)) {
            pathname = page;
            return true;
          }
        });
      }
      return (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname);
    }
    var manualScrollRestoration = process.env.__NEXT_SCROLL_RESTORATION && typeof window !== "undefined" && "scrollRestoration" in window.history && !!function() {
      try {
        let v = "__next";
        return sessionStorage.setItem(v, v), sessionStorage.removeItem(v), true;
      } catch (n) {
      }
    }();
    var SSG_DATA_NOT_FOUND = Symbol("SSG_DATA_NOT_FOUND");
    function fetchRetry(url, attempts, opts) {
      return fetch(url, {
        credentials: "same-origin"
      }).then((res) => {
        if (!res.ok) {
          if (attempts > 1 && res.status >= 500) {
            return fetchRetry(url, attempts - 1, opts);
          }
          if (res.status === 404) {
            return res.json().then((data) => {
              if (data.notFound) {
                return {
                  notFound: SSG_DATA_NOT_FOUND
                };
              }
              throw new Error(`Failed to load static props`);
            });
          }
          throw new Error(`Failed to load static props`);
        }
        return opts.text ? res.text() : res.json();
      });
    }
    function fetchNextData(dataHref, isServerRender, text, inflightCache, persistCache) {
      const { href: cacheKey } = new URL(dataHref, window.location.href);
      if (inflightCache[cacheKey] !== void 0) {
        return inflightCache[cacheKey];
      }
      return inflightCache[cacheKey] = fetchRetry(dataHref, isServerRender ? 3 : 1, {
        text
      }).catch((err) => {
        if (!isServerRender) {
          (0, _routeLoader).markAssetError(err);
        }
        throw err;
      }).then((data) => {
        if (!persistCache || true) {
          delete inflightCache[cacheKey];
        }
        return data;
      }).catch((err) => {
        delete inflightCache[cacheKey];
        throw err;
      });
    }
    var Router = class {
      constructor(pathname1, query1, as1, { initialProps, pageLoader, App, wrapApp, Component, err, subscription, isFallback, locale, locales, defaultLocale, domainLocales, isPreview, isRsc }) {
        this.sdc = {};
        this.sdr = {};
        this.sde = {};
        this._idx = 0;
        this.onPopState = (e) => {
          const state = e.state;
          if (!state) {
            const { pathname: pathname2, query } = this;
            this.changeState("replaceState", (0, _formatUrl).formatWithValidation({
              pathname: addBasePath(pathname2),
              query
            }), (0, _utils).getURL());
            return;
          }
          if (!state.__N) {
            return;
          }
          let forcedScroll;
          const { url, as, options, idx } = state;
          if (process.env.__NEXT_SCROLL_RESTORATION) {
            if (manualScrollRestoration) {
              if (this._idx !== idx) {
                try {
                  sessionStorage.setItem("__next_scroll_" + this._idx, JSON.stringify({
                    x: self.pageXOffset,
                    y: self.pageYOffset
                  }));
                } catch {
                }
                try {
                  const v = sessionStorage.getItem("__next_scroll_" + idx);
                  forcedScroll = JSON.parse(v);
                } catch {
                  forcedScroll = {
                    x: 0,
                    y: 0
                  };
                }
              }
            }
          }
          this._idx = idx;
          const { pathname } = (0, _parseRelativeUrl).parseRelativeUrl(url);
          if (this.isSsr && as === addBasePath(this.asPath) && pathname === addBasePath(this.pathname)) {
            return;
          }
          if (this._bps && !this._bps(state)) {
            return;
          }
          this.change("replaceState", url, as, Object.assign({}, options, {
            shallow: options.shallow && this._shallow,
            locale: options.locale || this.defaultLocale
          }), forcedScroll);
        };
        const route = (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname1);
        this.components = {};
        if (pathname1 !== "/_error") {
          this.components[route] = {
            Component,
            initial: true,
            props: initialProps,
            err,
            __N_SSG: initialProps && initialProps.__N_SSG,
            __N_SSP: initialProps && initialProps.__N_SSP,
            __N_RSC: !!isRsc
          };
        }
        this.components["/_app"] = {
          Component: App,
          styleSheets: []
        };
        this.events = Router.events;
        this.pageLoader = pageLoader;
        const autoExportDynamic = (0, _isDynamic).isDynamicRoute(pathname1) && self.__NEXT_DATA__.autoExport;
        this.basePath = basePath;
        this.sub = subscription;
        this.clc = null;
        this._wrapApp = wrapApp;
        this.isSsr = true;
        this.isLocaleDomain = false;
        this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || self.__NEXT_DATA__.appGip && !self.__NEXT_DATA__.gsp || !autoExportDynamic && !self.location.search && !process.env.__NEXT_HAS_REWRITES);
        if (process.env.__NEXT_I18N_SUPPORT) {
          this.locales = locales;
          this.defaultLocale = defaultLocale;
          this.domainLocales = domainLocales;
          this.isLocaleDomain = !!detectDomainLocale(domainLocales, self.location.hostname);
        }
        this.state = {
          route,
          pathname: pathname1,
          query: query1,
          asPath: autoExportDynamic ? pathname1 : as1,
          isPreview: !!isPreview,
          locale: process.env.__NEXT_I18N_SUPPORT ? locale : void 0,
          isFallback
        };
        if (typeof window !== "undefined") {
          if (!as1.startsWith("//")) {
            const options = {
              locale
            };
            options._shouldResolveHref = as1 !== pathname1;
            this.changeState("replaceState", (0, _formatUrl).formatWithValidation({
              pathname: addBasePath(pathname1),
              query: query1
            }), (0, _utils).getURL(), options);
          }
          window.addEventListener("popstate", this.onPopState);
          if (process.env.__NEXT_SCROLL_RESTORATION) {
            if (manualScrollRestoration) {
              window.history.scrollRestoration = "manual";
            }
          }
        }
      }
      reload() {
        window.location.reload();
      }
      back() {
        window.history.back();
      }
      push(url, as, options = {}) {
        if (process.env.__NEXT_SCROLL_RESTORATION) {
          if (manualScrollRestoration) {
            try {
              sessionStorage.setItem("__next_scroll_" + this._idx, JSON.stringify({
                x: self.pageXOffset,
                y: self.pageYOffset
              }));
            } catch {
            }
          }
        }
        ({ url, as } = prepareUrlAs(this, url, as));
        return this.change("pushState", url, as, options);
      }
      replace(url, as, options = {}) {
        ({ url, as } = prepareUrlAs(this, url, as));
        return this.change("replaceState", url, as, options);
      }
      async change(method, url, as, options, forcedScroll) {
        if (!isLocalURL(url)) {
          window.location.href = url;
          return false;
        }
        const shouldResolveHref = options._h || options._shouldResolveHref || pathNoQueryHash(url) === pathNoQueryHash(as);
        const nextState = {
          ...this.state
        };
        if (options._h) {
          this.isReady = true;
        }
        const prevLocale = nextState.locale;
        if (process.env.__NEXT_I18N_SUPPORT) {
          nextState.locale = options.locale === false ? this.defaultLocale : options.locale || nextState.locale;
          if (typeof options.locale === "undefined") {
            options.locale = nextState.locale;
          }
          const parsedAs = (0, _parseRelativeUrl).parseRelativeUrl(hasBasePath(as) ? delBasePath(as) : as);
          const localePathResult = (0, _normalizeLocalePath).normalizeLocalePath(parsedAs.pathname, this.locales);
          if (localePathResult.detectedLocale) {
            nextState.locale = localePathResult.detectedLocale;
            parsedAs.pathname = addBasePath(parsedAs.pathname);
            as = (0, _formatUrl).formatWithValidation(parsedAs);
            url = addBasePath((0, _normalizeLocalePath).normalizeLocalePath(hasBasePath(url) ? delBasePath(url) : url, this.locales).pathname);
          }
          let didNavigate = false;
          if (process.env.__NEXT_I18N_SUPPORT) {
            var ref;
            if (!((ref = this.locales) === null || ref === void 0 ? void 0 : ref.includes(nextState.locale))) {
              parsedAs.pathname = addLocale(parsedAs.pathname, nextState.locale);
              window.location.href = (0, _formatUrl).formatWithValidation(parsedAs);
              didNavigate = true;
            }
          }
          const detectedDomain = detectDomainLocale(this.domainLocales, void 0, nextState.locale);
          if (process.env.__NEXT_I18N_SUPPORT) {
            if (!didNavigate && detectedDomain && this.isLocaleDomain && self.location.hostname !== detectedDomain.domain) {
              const asNoBasePath = delBasePath(as);
              window.location.href = `http${detectedDomain.http ? "" : "s"}://${detectedDomain.domain}${addBasePath(`${nextState.locale === detectedDomain.defaultLocale ? "" : `/${nextState.locale}`}${asNoBasePath === "/" ? "" : asNoBasePath}` || "/")}`;
              didNavigate = true;
            }
          }
          if (didNavigate) {
            return new Promise(() => {
            });
          }
        }
        if (!options._h) {
          this.isSsr = false;
        }
        if (_utils.ST) {
          performance.mark("routeChange");
        }
        const { shallow = false, scroll = true } = options;
        const routeProps = {
          shallow
        };
        if (this._inFlightRoute) {
          this.abortComponentLoad(this._inFlightRoute, routeProps);
        }
        as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
        const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, nextState.locale);
        this._inFlightRoute = as;
        let localeChange = prevLocale !== nextState.locale;
        if (!options._h && this.onlyAHashChange(cleanedAs) && !localeChange) {
          nextState.asPath = cleanedAs;
          Router.events.emit("hashChangeStart", as, routeProps);
          this.changeState(method, url, as, {
            ...options,
            scroll: false
          });
          if (scroll) {
            this.scrollToHash(cleanedAs);
          }
          this.set(nextState, this.components[nextState.route], null);
          Router.events.emit("hashChangeComplete", as, routeProps);
          return true;
        }
        let parsed = (0, _parseRelativeUrl).parseRelativeUrl(url);
        let { pathname, query } = parsed;
        let pages, rewrites;
        try {
          [pages, { __rewrites: rewrites }] = await Promise.all([
            this.pageLoader.getPageList(),
            (0, _routeLoader).getClientBuildManifest(),
            this.pageLoader.getMiddlewareList()
          ]);
        } catch (err) {
          window.location.href = as;
          return false;
        }
        if (!this.urlIsNew(cleanedAs) && !localeChange) {
          method = "replaceState";
        }
        let resolvedAs = as;
        pathname = pathname ? (0, _normalizeTrailingSlash).removePathTrailingSlash(delBasePath(pathname)) : pathname;
        if (shouldResolveHref && pathname !== "/_error") {
          options._shouldResolveHref = true;
          if (process.env.__NEXT_HAS_REWRITES && as.startsWith("/")) {
            const rewritesResult = (0, _resolveRewrites).default(addBasePath(addLocale(cleanedAs, nextState.locale)), pages, rewrites, query, (p) => resolveDynamicRoute(p, pages), this.locales);
            if (rewritesResult.externalDest) {
              location.href = as;
              return true;
            }
            resolvedAs = rewritesResult.asPath;
            if (rewritesResult.matchedPage && rewritesResult.resolvedHref) {
              pathname = rewritesResult.resolvedHref;
              parsed.pathname = addBasePath(pathname);
              url = (0, _formatUrl).formatWithValidation(parsed);
            }
          } else {
            parsed.pathname = resolveDynamicRoute(pathname, pages);
            if (parsed.pathname !== pathname) {
              pathname = parsed.pathname;
              parsed.pathname = addBasePath(pathname);
              url = (0, _formatUrl).formatWithValidation(parsed);
            }
          }
        }
        if (!isLocalURL(as)) {
          if (true) {
            throw new Error(`Invalid href: "${url}" and as: "${as}", received relative href and external as
See more info: https://nextjs.org/docs/messages/invalid-relative-url-external-as`);
          }
          window.location.href = as;
          return false;
        }
        resolvedAs = delLocale(delBasePath(resolvedAs), nextState.locale);
        if ((!options.shallow || options._h === 1) && (options._h !== 1 || (0, _isDynamic).isDynamicRoute((0, _normalizeTrailingSlash).removePathTrailingSlash(pathname)))) {
          const effect = await this._preflightRequest({
            as,
            cache: false,
            pages,
            pathname,
            query,
            locale: nextState.locale,
            isPreview: nextState.isPreview
          });
          if (effect.type === "rewrite") {
            query = {
              ...query,
              ...effect.parsedAs.query
            };
            resolvedAs = effect.asPath;
            pathname = effect.resolvedHref;
            parsed.pathname = effect.resolvedHref;
            url = (0, _formatUrl).formatWithValidation(parsed);
          } else if (effect.type === "redirect" && effect.newAs) {
            return this.change(method, effect.newUrl, effect.newAs, options);
          } else if (effect.type === "redirect" && effect.destination) {
            window.location.href = effect.destination;
            return new Promise(() => {
            });
          } else if (effect.type === "refresh" && as !== window.location.pathname) {
            window.location.href = as;
            return new Promise(() => {
            });
          }
        }
        const route = (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname);
        if ((0, _isDynamic).isDynamicRoute(route)) {
          const parsedAs = (0, _parseRelativeUrl).parseRelativeUrl(resolvedAs);
          const asPathname = parsedAs.pathname;
          const routeRegex = (0, _routeRegex).getRouteRegex(route);
          const routeMatch = (0, _routeMatcher).getRouteMatcher(routeRegex)(asPathname);
          const shouldInterpolate = route === asPathname;
          const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};
          if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
            const missingParams = Object.keys(routeRegex.groups).filter((param) => !query[param]);
            if (missingParams.length > 0) {
              if (true) {
                console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide the params: ${missingParams.join(", ")} in the \`href\`'s \`query\``);
              }
              throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(", ")}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://nextjs.org/docs/messages/${shouldInterpolate ? "href-interpolation-failed" : "incompatible-href-as"}`);
            }
          } else if (shouldInterpolate) {
            as = (0, _formatUrl).formatWithValidation(Object.assign({}, parsedAs, {
              pathname: interpolatedAs.result,
              query: omitParmsFromQuery(query, interpolatedAs.params)
            }));
          } else {
            Object.assign(query, routeMatch);
          }
        }
        Router.events.emit("routeChangeStart", as, routeProps);
        try {
          var ref1, ref2;
          let routeInfo = await this.getRouteInfo(route, pathname, query, as, resolvedAs, routeProps, nextState.locale, nextState.isPreview);
          let { error, props, __N_SSG, __N_SSP } = routeInfo;
          if ((__N_SSG || __N_SSP) && props) {
            if (props.pageProps && props.pageProps.__N_REDIRECT) {
              const destination = props.pageProps.__N_REDIRECT;
              if (destination.startsWith("/") && props.pageProps.__N_REDIRECT_BASE_PATH !== false) {
                const parsedHref = (0, _parseRelativeUrl).parseRelativeUrl(destination);
                parsedHref.pathname = resolveDynamicRoute(parsedHref.pathname, pages);
                const { url: newUrl, as: newAs } = prepareUrlAs(this, destination, destination);
                return this.change(method, newUrl, newAs, options);
              }
              window.location.href = destination;
              return new Promise(() => {
              });
            }
            nextState.isPreview = !!props.__N_PREVIEW;
            if (props.notFound === SSG_DATA_NOT_FOUND) {
              let notFoundRoute;
              try {
                await this.fetchComponent("/404");
                notFoundRoute = "/404";
              } catch (_) {
                notFoundRoute = "/_error";
              }
              routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query, as, resolvedAs, {
                shallow: false
              }, nextState.locale, nextState.isPreview);
            }
          }
          Router.events.emit("beforeHistoryChange", as, routeProps);
          this.changeState(method, url, as, options);
          if (options._h && pathname === "/_error" && ((ref1 = self.__NEXT_DATA__.props) === null || ref1 === void 0 ? void 0 : (ref2 = ref1.pageProps) === null || ref2 === void 0 ? void 0 : ref2.statusCode) === 500 && (props === null || props === void 0 ? void 0 : props.pageProps)) {
            props.pageProps.statusCode = 500;
          }
          const isValidShallowRoute = options.shallow && nextState.route === route;
          var _scroll;
          const shouldScroll = (_scroll = options.scroll) !== null && _scroll !== void 0 ? _scroll : !isValidShallowRoute;
          const resetScroll = shouldScroll ? {
            x: 0,
            y: 0
          } : null;
          await this.set({
            ...nextState,
            route,
            pathname,
            query,
            asPath: cleanedAs,
            isFallback: false
          }, routeInfo, forcedScroll !== null && forcedScroll !== void 0 ? forcedScroll : resetScroll).catch((e) => {
            if (e.cancelled)
              error = error || e;
            else
              throw e;
          });
          if (error) {
            Router.events.emit("routeChangeError", error, cleanedAs, routeProps);
            throw error;
          }
          if (process.env.__NEXT_I18N_SUPPORT) {
            if (nextState.locale) {
              document.documentElement.lang = nextState.locale;
            }
          }
          Router.events.emit("routeChangeComplete", as, routeProps);
          return true;
        } catch (err1) {
          if ((0, _isError).default(err1) && err1.cancelled) {
            return false;
          }
          throw err1;
        }
      }
      changeState(method, url, as, options = {}) {
        if (true) {
          if (typeof window.history === "undefined") {
            console.error(`Warning: window.history is not available.`);
            return;
          }
          if (typeof window.history[method] === "undefined") {
            console.error(`Warning: window.history.${method} is not available`);
            return;
          }
        }
        if (method !== "pushState" || (0, _utils).getURL() !== as) {
          this._shallow = options.shallow;
          window.history[method]({
            url,
            as,
            options,
            __N: true,
            idx: this._idx = method !== "pushState" ? this._idx : this._idx + 1
          }, "", as);
        }
      }
      async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
        if (err.cancelled) {
          throw err;
        }
        if ((0, _routeLoader).isAssetError(err) || loadErrorFail) {
          Router.events.emit("routeChangeError", err, as, routeProps);
          window.location.href = as;
          throw buildCancellationError();
        }
        try {
          let Component;
          let styleSheets;
          let props;
          if (typeof Component === "undefined" || typeof styleSheets === "undefined") {
            ({ page: Component, styleSheets } = await this.fetchComponent("/_error"));
          }
          const routeInfo = {
            props,
            Component,
            styleSheets,
            err,
            error: err
          };
          if (!routeInfo.props) {
            try {
              routeInfo.props = await this.getInitialProps(Component, {
                err,
                pathname,
                query
              });
            } catch (gipErr) {
              console.error("Error in error page `getInitialProps`: ", gipErr);
              routeInfo.props = {};
            }
          }
          return routeInfo;
        } catch (routeInfoErr) {
          return this.handleRouteInfoError((0, _isError).default(routeInfoErr) ? routeInfoErr : new Error(routeInfoErr + ""), pathname, query, as, routeProps, true);
        }
      }
      async getRouteInfo(route, pathname, query, as, resolvedAs, routeProps, locale, isPreview) {
        try {
          const existingRouteInfo = this.components[route];
          if (routeProps.shallow && existingRouteInfo && this.route === route) {
            return existingRouteInfo;
          }
          let cachedRouteInfo = void 0;
          if (false) {
            cachedRouteInfo = existingRouteInfo;
          }
          const routeInfo = cachedRouteInfo || await this.fetchComponent(route).then((res) => ({
            Component: res.page,
            styleSheets: res.styleSheets,
            __N_SSG: res.mod.__N_SSG,
            __N_SSP: res.mod.__N_SSP,
            __N_RSC: !!res.mod.__next_rsc__
          }));
          const { Component, __N_SSG, __N_SSP, __N_RSC } = routeInfo;
          if (true) {
            const { isValidElementType } = require_react_is();
            if (!isValidElementType(Component)) {
              throw new Error(`The default export is not a React Component in page: "${pathname}"`);
            }
          }
          let dataHref;
          if (__N_SSG || __N_SSP || __N_RSC) {
            dataHref = this.pageLoader.getDataHref({
              href: (0, _formatUrl).formatWithValidation({
                pathname,
                query
              }),
              asPath: resolvedAs,
              ssg: __N_SSG,
              rsc: __N_RSC,
              locale
            });
          }
          const props = await this._getData(() => __N_SSG || __N_SSP ? fetchNextData(dataHref, this.isSsr, false, __N_SSG ? this.sdc : this.sdr, !!__N_SSG && !isPreview) : this.getInitialProps(Component, {
            pathname,
            query,
            asPath: as,
            locale,
            locales: this.locales,
            defaultLocale: this.defaultLocale
          }));
          if (__N_RSC) {
            const { fresh, data } = await this._getData(() => this._getFlightData(dataHref));
            props.pageProps = Object.assign(props.pageProps, {
              __flight_serialized__: data,
              __flight_fresh__: fresh
            });
          }
          routeInfo.props = props;
          this.components[route] = routeInfo;
          return routeInfo;
        } catch (err) {
          return this.handleRouteInfoError((0, _isError).getProperError(err), pathname, query, as, routeProps);
        }
      }
      set(state, data, resetScroll) {
        this.state = state;
        return this.sub(data, this.components["/_app"].Component, resetScroll);
      }
      beforePopState(cb) {
        this._bps = cb;
      }
      onlyAHashChange(as) {
        if (!this.asPath)
          return false;
        const [oldUrlNoHash, oldHash] = this.asPath.split("#");
        const [newUrlNoHash, newHash] = as.split("#");
        if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
          return true;
        }
        if (oldUrlNoHash !== newUrlNoHash) {
          return false;
        }
        return oldHash !== newHash;
      }
      scrollToHash(as) {
        const [, hash = ""] = as.split("#");
        if (hash === "" || hash === "top") {
          window.scrollTo(0, 0);
          return;
        }
        const idEl = document.getElementById(hash);
        if (idEl) {
          idEl.scrollIntoView();
          return;
        }
        const nameEl = document.getElementsByName(hash)[0];
        if (nameEl) {
          nameEl.scrollIntoView();
        }
      }
      urlIsNew(asPath) {
        return this.asPath !== asPath;
      }
      async prefetch(url, asPath = url, options = {}) {
        let parsed = (0, _parseRelativeUrl).parseRelativeUrl(url);
        let { pathname, query } = parsed;
        if (process.env.__NEXT_I18N_SUPPORT) {
          if (options.locale === false) {
            pathname = (0, _normalizeLocalePath).normalizeLocalePath(pathname, this.locales).pathname;
            parsed.pathname = pathname;
            url = (0, _formatUrl).formatWithValidation(parsed);
            let parsedAs = (0, _parseRelativeUrl).parseRelativeUrl(asPath);
            const localePathResult = (0, _normalizeLocalePath).normalizeLocalePath(parsedAs.pathname, this.locales);
            parsedAs.pathname = localePathResult.pathname;
            options.locale = localePathResult.detectedLocale || this.defaultLocale;
            asPath = (0, _formatUrl).formatWithValidation(parsedAs);
          }
        }
        const pages = await this.pageLoader.getPageList();
        let resolvedAs = asPath;
        if (process.env.__NEXT_HAS_REWRITES && asPath.startsWith("/")) {
          let rewrites;
          ({ __rewrites: rewrites } = await (0, _routeLoader).getClientBuildManifest());
          const rewritesResult = (0, _resolveRewrites).default(addBasePath(addLocale(asPath, this.locale)), pages, rewrites, parsed.query, (p) => resolveDynamicRoute(p, pages), this.locales);
          if (rewritesResult.externalDest) {
            return;
          }
          resolvedAs = delLocale(delBasePath(rewritesResult.asPath), this.locale);
          if (rewritesResult.matchedPage && rewritesResult.resolvedHref) {
            pathname = rewritesResult.resolvedHref;
            parsed.pathname = pathname;
            url = (0, _formatUrl).formatWithValidation(parsed);
          }
        } else {
          parsed.pathname = resolveDynamicRoute(parsed.pathname, pages);
          if (parsed.pathname !== pathname) {
            pathname = parsed.pathname;
            parsed.pathname = pathname;
            url = (0, _formatUrl).formatWithValidation(parsed);
          }
        }
        if (true) {
          return;
        }
        const effects = await this._preflightRequest({
          as: addBasePath(asPath),
          cache: true,
          pages,
          pathname,
          query,
          locale: this.locale,
          isPreview: this.isPreview
        });
        if (effects.type === "rewrite") {
          parsed.pathname = effects.resolvedHref;
          pathname = effects.resolvedHref;
          query = {
            ...query,
            ...effects.parsedAs.query
          };
          resolvedAs = effects.asPath;
          url = (0, _formatUrl).formatWithValidation(parsed);
        }
        const route = (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname);
        await Promise.all([
          this.pageLoader._isSsg(route).then((isSsg) => {
            return isSsg ? fetchNextData(this.pageLoader.getDataHref({
              href: url,
              asPath: resolvedAs,
              ssg: true,
              locale: typeof options.locale !== "undefined" ? options.locale : this.locale
            }), false, false, this.sdc, true) : false;
          }),
          this.pageLoader[options.priority ? "loadPage" : "prefetch"](route)
        ]);
      }
      async fetchComponent(route) {
        let cancelled = false;
        const cancel = this.clc = () => {
          cancelled = true;
        };
        const handleCancelled = () => {
          if (cancelled) {
            const error = new Error(`Abort fetching component for route: "${route}"`);
            error.cancelled = true;
            throw error;
          }
          if (cancel === this.clc) {
            this.clc = null;
          }
        };
        try {
          const componentResult = await this.pageLoader.loadPage(route);
          handleCancelled();
          return componentResult;
        } catch (err) {
          handleCancelled();
          throw err;
        }
      }
      _getData(fn) {
        let cancelled = false;
        const cancel = () => {
          cancelled = true;
        };
        this.clc = cancel;
        return fn().then((data) => {
          if (cancel === this.clc) {
            this.clc = null;
          }
          if (cancelled) {
            const err = new Error("Loading initial props cancelled");
            err.cancelled = true;
            throw err;
          }
          return data;
        });
      }
      _getFlightData(dataHref) {
        return fetchNextData(dataHref, true, true, this.sdc, false).then((serialized) => {
          return {
            fresh: true,
            data: serialized
          };
        });
      }
      async _preflightRequest(options) {
        const asPathname = pathNoQueryHash(options.as);
        const cleanedAs = delLocale(hasBasePath(asPathname) ? delBasePath(asPathname) : asPathname, options.locale);
        const middlewareList = await this.pageLoader.getMiddlewareList();
        const middleware = middlewareList.map(([page, ssr]) => ({
          page,
          ssr
        }));
        const routingItems = (0, _routingItems).getRoutingItems(options.pages, middleware);
        let requiresPreflight = false;
        for (const item of routingItems) {
          if (item.match(cleanedAs)) {
            if (item.isMiddleware) {
              requiresPreflight = true;
            }
            break;
          }
        }
        if (!requiresPreflight) {
          return {
            type: "next"
          };
        }
        let preflight;
        try {
          preflight = await this._getPreflightData({
            preflightHref: options.as,
            shouldCache: options.cache,
            isPreview: options.isPreview
          });
        } catch (err) {
          return {
            type: "redirect",
            destination: options.as
          };
        }
        if (preflight.rewrite) {
          if (!preflight.rewrite.startsWith("/")) {
            return {
              type: "redirect",
              destination: options.as
            };
          }
          const parsed = (0, _parseRelativeUrl).parseRelativeUrl((0, _normalizeLocalePath).normalizeLocalePath(hasBasePath(preflight.rewrite) ? delBasePath(preflight.rewrite) : preflight.rewrite, this.locales).pathname);
          const fsPathname = (0, _normalizeTrailingSlash).removePathTrailingSlash(parsed.pathname);
          let matchedPage;
          let resolvedHref;
          if (options.pages.includes(fsPathname)) {
            matchedPage = true;
            resolvedHref = fsPathname;
          } else {
            resolvedHref = resolveDynamicRoute(fsPathname, options.pages);
            if (resolvedHref !== parsed.pathname && options.pages.includes(resolvedHref)) {
              matchedPage = true;
            }
          }
          return {
            type: "rewrite",
            asPath: parsed.pathname,
            parsedAs: parsed,
            matchedPage,
            resolvedHref
          };
        }
        if (preflight.redirect) {
          if (preflight.redirect.startsWith("/")) {
            const cleanRedirect = (0, _normalizeTrailingSlash).removePathTrailingSlash((0, _normalizeLocalePath).normalizeLocalePath(hasBasePath(preflight.redirect) ? delBasePath(preflight.redirect) : preflight.redirect, this.locales).pathname);
            const { url: newUrl, as: newAs } = prepareUrlAs(this, cleanRedirect, cleanRedirect);
            return {
              type: "redirect",
              newUrl,
              newAs
            };
          }
          return {
            type: "redirect",
            destination: preflight.redirect
          };
        }
        if (preflight.refresh && !preflight.ssr) {
          return {
            type: "refresh"
          };
        }
        return {
          type: "next"
        };
      }
      _getPreflightData(params) {
        const { preflightHref, shouldCache = false, isPreview } = params;
        const { href: cacheKey } = new URL(preflightHref, window.location.href);
        if (false) {
          return Promise.resolve(this.sde[cacheKey]);
        }
        return fetch(preflightHref, {
          method: "HEAD",
          credentials: "same-origin",
          headers: {
            "x-middleware-preflight": "1"
          }
        }).then((res) => {
          if (!res.ok) {
            throw new Error(`Failed to preflight request`);
          }
          return {
            cache: res.headers.get("x-middleware-cache"),
            redirect: res.headers.get("Location"),
            refresh: res.headers.has("x-middleware-refresh"),
            rewrite: res.headers.get("x-middleware-rewrite"),
            ssr: !!res.headers.get("x-middleware-ssr")
          };
        }).then((data) => {
          if (shouldCache && data.cache !== "no-cache") {
            this.sde[cacheKey] = data;
          }
          return data;
        }).catch((err) => {
          delete this.sde[cacheKey];
          throw err;
        });
      }
      getInitialProps(Component, ctx) {
        const { Component: App } = this.components["/_app"];
        const AppTree = this._wrapApp(App);
        ctx.AppTree = AppTree;
        return (0, _utils).loadGetInitialProps(App, {
          AppTree,
          Component,
          router: this,
          ctx
        });
      }
      abortComponentLoad(as, routeProps) {
        if (this.clc) {
          Router.events.emit("routeChangeError", buildCancellationError(), as, routeProps);
          this.clc();
          this.clc = null;
        }
      }
      get route() {
        return this.state.route;
      }
      get pathname() {
        return this.state.pathname;
      }
      get query() {
        return this.state.query;
      }
      get asPath() {
        return this.state.asPath;
      }
      get locale() {
        return this.state.locale;
      }
      get isFallback() {
        return this.state.isFallback;
      }
      get isPreview() {
        return this.state.isPreview;
      }
    };
    exports.default = Router;
    Router.events = (0, _mitt).default();
  }
});

// ../../node_modules/next/dist/shared/lib/router-context.js
var require_router_context = __commonJS({
  "../../node_modules/next/dist/shared/lib/router-context.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.RouterContext = void 0;
    var _react = _interopRequireDefault(__require("react"));
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var RouterContext = _react.default.createContext(null);
    exports.RouterContext = RouterContext;
    if (true) {
      RouterContext.displayName = "RouterContext";
    }
  }
});

// ../../node_modules/next/dist/client/with-router.js
var require_with_router = __commonJS({
  "../../node_modules/next/dist/client/with-router.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = withRouter;
    var _react = _interopRequireDefault(__require("react"));
    var _router = require_router2();
    function withRouter(ComposedComponent) {
      function WithRouterWrapper(props) {
        return /* @__PURE__ */ _react.default.createElement(ComposedComponent, Object.assign({
          router: (0, _router).useRouter()
        }, props));
      }
      WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps;
      WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;
      if (true) {
        const name = ComposedComponent.displayName || ComposedComponent.name || "Unknown";
        WithRouterWrapper.displayName = `withRouter(${name})`;
      }
      return WithRouterWrapper;
    }
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
  }
});

// ../../node_modules/next/dist/client/router.js
var require_router2 = __commonJS({
  "../../node_modules/next/dist/client/router.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "Router", {
      enumerable: true,
      get: function() {
        return _router.default;
      }
    });
    Object.defineProperty(exports, "withRouter", {
      enumerable: true,
      get: function() {
        return _withRouter.default;
      }
    });
    exports.useRouter = useRouter;
    exports.createRouter = createRouter;
    exports.makePublicRouterInstance = makePublicRouterInstance;
    exports.default = void 0;
    var _react = _interopRequireDefault(__require("react"));
    var _router = _interopRequireDefault(require_router());
    var _routerContext = require_router_context();
    var _isError = _interopRequireDefault(require_is_error());
    var _withRouter = _interopRequireDefault(require_with_router());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var singletonRouter = {
      router: null,
      readyCallbacks: [],
      ready(cb) {
        if (this.router)
          return cb();
        if (typeof window !== "undefined") {
          this.readyCallbacks.push(cb);
        }
      }
    };
    var urlPropertyFields = [
      "pathname",
      "route",
      "query",
      "asPath",
      "components",
      "isFallback",
      "basePath",
      "locale",
      "locales",
      "defaultLocale",
      "isReady",
      "isPreview",
      "isLocaleDomain",
      "domainLocales"
    ];
    var routerEvents = [
      "routeChangeStart",
      "beforeHistoryChange",
      "routeChangeComplete",
      "routeChangeError",
      "hashChangeStart",
      "hashChangeComplete"
    ];
    var coreMethodFields = [
      "push",
      "replace",
      "reload",
      "back",
      "prefetch",
      "beforePopState"
    ];
    Object.defineProperty(singletonRouter, "events", {
      get() {
        return _router.default.events;
      }
    });
    urlPropertyFields.forEach((field) => {
      Object.defineProperty(singletonRouter, field, {
        get() {
          const router = getRouter();
          return router[field];
        }
      });
    });
    coreMethodFields.forEach((field) => {
      singletonRouter[field] = (...args) => {
        const router = getRouter();
        return router[field](...args);
      };
    });
    routerEvents.forEach((event) => {
      singletonRouter.ready(() => {
        _router.default.events.on(event, (...args) => {
          const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
          const _singletonRouter = singletonRouter;
          if (_singletonRouter[eventField]) {
            try {
              _singletonRouter[eventField](...args);
            } catch (err) {
              console.error(`Error when running the Router event: ${eventField}`);
              console.error((0, _isError).default(err) ? `${err.message}
${err.stack}` : err + "");
            }
          }
        });
      });
    });
    function getRouter() {
      if (!singletonRouter.router) {
        const message = 'No router instance found.\nYou should only use "next/router" on the client side of your app.\n';
        throw new Error(message);
      }
      return singletonRouter.router;
    }
    var _default = singletonRouter;
    exports.default = _default;
    function useRouter() {
      return _react.default.useContext(_routerContext.RouterContext);
    }
    function createRouter(...args) {
      singletonRouter.router = new _router.default(...args);
      singletonRouter.readyCallbacks.forEach((cb) => cb());
      singletonRouter.readyCallbacks = [];
      return singletonRouter.router;
    }
    function makePublicRouterInstance(router) {
      const scopedRouter = router;
      const instance = {};
      for (const property of urlPropertyFields) {
        if (typeof scopedRouter[property] === "object") {
          instance[property] = Object.assign(Array.isArray(scopedRouter[property]) ? [] : {}, scopedRouter[property]);
          continue;
        }
        instance[property] = scopedRouter[property];
      }
      instance.events = _router.default.events;
      coreMethodFields.forEach((field) => {
        instance[field] = (...args) => {
          return scopedRouter[field](...args);
        };
      });
      return instance;
    }
  }
});

// ../../node_modules/next/dist/client/use-intersection.js
var require_use_intersection = __commonJS({
  "../../node_modules/next/dist/client/use-intersection.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.useIntersection = useIntersection;
    var _react = __require("react");
    var _requestIdleCallback = require_request_idle_callback();
    var hasIntersectionObserver = typeof IntersectionObserver !== "undefined";
    function useIntersection({ rootRef, rootMargin, disabled }) {
      const isDisabled = disabled || !hasIntersectionObserver;
      const unobserve = (0, _react).useRef();
      const [visible, setVisible] = (0, _react).useState(false);
      const [root, setRoot] = (0, _react).useState(rootRef ? rootRef.current : null);
      const setRef = (0, _react).useCallback((el) => {
        if (unobserve.current) {
          unobserve.current();
          unobserve.current = void 0;
        }
        if (isDisabled || visible)
          return;
        if (el && el.tagName) {
          unobserve.current = observe(el, (isVisible) => isVisible && setVisible(isVisible), {
            root,
            rootMargin
          });
        }
      }, [
        isDisabled,
        root,
        rootMargin,
        visible
      ]);
      (0, _react).useEffect(() => {
        if (!hasIntersectionObserver) {
          if (!visible) {
            const idleCallback = (0, _requestIdleCallback).requestIdleCallback(() => setVisible(true));
            return () => (0, _requestIdleCallback).cancelIdleCallback(idleCallback);
          }
        }
      }, [
        visible
      ]);
      (0, _react).useEffect(() => {
        if (rootRef)
          setRoot(rootRef.current);
      }, [
        rootRef
      ]);
      return [
        setRef,
        visible
      ];
    }
    function observe(element, callback, options) {
      const { id, observer, elements } = createObserver(options);
      elements.set(element, callback);
      observer.observe(element);
      return function unobserve() {
        elements.delete(element);
        observer.unobserve(element);
        if (elements.size === 0) {
          observer.disconnect();
          observers.delete(id);
          let index = idList.findIndex((obj) => obj.root === id.root && obj.margin === id.margin);
          if (index > -1) {
            idList.splice(index, 1);
          }
        }
      };
    }
    var observers = /* @__PURE__ */ new Map();
    var idList = [];
    function createObserver(options) {
      const id = {
        root: options.root || null,
        margin: options.rootMargin || ""
      };
      let existing = idList.find((obj) => obj.root === id.root && obj.margin === id.margin);
      let instance;
      if (existing) {
        instance = observers.get(existing);
      } else {
        instance = observers.get(id);
        idList.push(id);
      }
      if (instance) {
        return instance;
      }
      const elements = /* @__PURE__ */ new Map();
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          const callback = elements.get(entry.target);
          const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;
          if (callback && isVisible) {
            callback(isVisible);
          }
        });
      }, options);
      observers.set(id, instance = {
        id,
        observer,
        elements
      });
      return instance;
    }
  }
});

// ../../node_modules/next/dist/client/link.js
var require_link = __commonJS({
  "../../node_modules/next/dist/client/link.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _react = _interopRequireDefault(__require("react"));
    var _router = require_router();
    var _router1 = require_router2();
    var _useIntersection = require_use_intersection();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var prefetched = {};
    function prefetch(router, href, as, options) {
      if (typeof window === "undefined" || !router)
        return;
      if (!(0, _router).isLocalURL(href))
        return;
      router.prefetch(href, as, options).catch((err) => {
        if (true) {
          throw err;
        }
      });
      const curLocale = options && typeof options.locale !== "undefined" ? options.locale : router && router.locale;
      prefetched[href + "%" + as + (curLocale ? "%" + curLocale : "")] = true;
    }
    function isModifiedEvent(event) {
      const { target } = event.currentTarget;
      return target && target !== "_self" || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.nativeEvent && event.nativeEvent.which === 2;
    }
    function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
      const { nodeName } = e.currentTarget;
      const isAnchorNodeName = nodeName.toUpperCase() === "A";
      if (isAnchorNodeName && (isModifiedEvent(e) || !(0, _router).isLocalURL(href))) {
        return;
      }
      e.preventDefault();
      router[replace ? "replace" : "push"](href, as, {
        shallow,
        locale,
        scroll
      });
    }
    function Link2(props) {
      if (true) {
        let createPropError = function(args) {
          return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (typeof window !== "undefined" ? "\nOpen your browser's console to view the Component stack trace." : ""));
        };
        const requiredPropsGuard = {
          href: true
        };
        const requiredProps = Object.keys(requiredPropsGuard);
        requiredProps.forEach((key) => {
          if (key === "href") {
            if (props[key] == null || typeof props[key] !== "string" && typeof props[key] !== "object") {
              throw createPropError({
                key,
                expected: "`string` or `object`",
                actual: props[key] === null ? "null" : typeof props[key]
              });
            }
          } else {
            const _ = key;
          }
        });
        const optionalPropsGuard = {
          as: true,
          replace: true,
          scroll: true,
          shallow: true,
          passHref: true,
          prefetch: true,
          locale: true
        };
        const optionalProps = Object.keys(optionalPropsGuard);
        optionalProps.forEach((key) => {
          const valType = typeof props[key];
          if (key === "as") {
            if (props[key] && valType !== "string" && valType !== "object") {
              throw createPropError({
                key,
                expected: "`string` or `object`",
                actual: valType
              });
            }
          } else if (key === "locale") {
            if (props[key] && valType !== "string") {
              throw createPropError({
                key,
                expected: "`string`",
                actual: valType
              });
            }
          } else if (key === "replace" || key === "scroll" || key === "shallow" || key === "passHref" || key === "prefetch") {
            if (props[key] != null && valType !== "boolean") {
              throw createPropError({
                key,
                expected: "`boolean`",
                actual: valType
              });
            }
          } else {
            const _ = key;
          }
        });
        const hasWarned = _react.default.useRef(false);
        if (props.prefetch && !hasWarned.current) {
          hasWarned.current = true;
          console.warn("Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://nextjs.org/docs/messages/prefetch-true-deprecated");
        }
      }
      const p = props.prefetch !== false;
      const router = (0, _router1).useRouter();
      const { href, as } = _react.default.useMemo(() => {
        const [resolvedHref, resolvedAs] = (0, _router).resolveHref(router, props.href, true);
        return {
          href: resolvedHref,
          as: props.as ? (0, _router).resolveHref(router, props.as) : resolvedAs || resolvedHref
        };
      }, [
        router,
        props.href,
        props.as
      ]);
      let { children, replace, shallow, scroll, locale } = props;
      if (typeof children === "string") {
        children = /* @__PURE__ */ _react.default.createElement("a", null, children);
      }
      let child;
      if (true) {
        try {
          child = _react.default.Children.only(children);
        } catch (err) {
          if (!children) {
            throw new Error(`No children were passed to <Link> with \`href\` of \`${props.href}\` but one child is required https://nextjs.org/docs/messages/link-no-children`);
          }
          throw new Error(`Multiple children were passed to <Link> with \`href\` of \`${props.href}\` but only one child is supported https://nextjs.org/docs/messages/link-multiple-children` + (typeof window !== "undefined" ? " \nOpen your browser's console to view the Component stack trace." : ""));
        }
      } else {
        child = _react.default.Children.only(children);
      }
      const childRef = child && typeof child === "object" && child.ref;
      const [setIntersectionRef, isVisible] = (0, _useIntersection).useIntersection({
        rootMargin: "200px"
      });
      const setRef = _react.default.useCallback((el) => {
        setIntersectionRef(el);
        if (childRef) {
          if (typeof childRef === "function")
            childRef(el);
          else if (typeof childRef === "object") {
            childRef.current = el;
          }
        }
      }, [
        childRef,
        setIntersectionRef
      ]);
      _react.default.useEffect(() => {
        const shouldPrefetch = isVisible && p && (0, _router).isLocalURL(href);
        const curLocale = typeof locale !== "undefined" ? locale : router && router.locale;
        const isPrefetched = prefetched[href + "%" + as + (curLocale ? "%" + curLocale : "")];
        if (shouldPrefetch && !isPrefetched) {
          prefetch(router, href, as, {
            locale: curLocale
          });
        }
      }, [
        as,
        href,
        isVisible,
        locale,
        p,
        router
      ]);
      const childProps = {
        ref: setRef,
        onClick: (e) => {
          if (true) {
            if (!e) {
              throw new Error(`Component rendered inside next/link has to pass click event to "onClick" prop.`);
            }
          }
          if (child.props && typeof child.props.onClick === "function") {
            child.props.onClick(e);
          }
          if (!e.defaultPrevented) {
            linkClicked(e, router, href, as, replace, shallow, scroll, locale);
          }
        }
      };
      childProps.onMouseEnter = (e) => {
        if (child.props && typeof child.props.onMouseEnter === "function") {
          child.props.onMouseEnter(e);
        }
        if ((0, _router).isLocalURL(href)) {
          prefetch(router, href, as, {
            priority: true
          });
        }
      };
      if (props.passHref || child.type === "a" && !("href" in child.props)) {
        const curLocale = typeof locale !== "undefined" ? locale : router && router.locale;
        const localeDomain = router && router.isLocaleDomain && (0, _router).getDomainLocale(as, curLocale, router && router.locales, router && router.domainLocales);
        childProps.href = localeDomain || (0, _router).addBasePath((0, _router).addLocale(as, curLocale, router && router.defaultLocale));
      }
      return /* @__PURE__ */ _react.default.cloneElement(child, childProps);
    }
    var _default = Link2;
    exports.default = _default;
  }
});

// ../../node_modules/next/link.js
var require_link2 = __commonJS({
  "../../node_modules/next/link.js"(exports, module) {
    module.exports = require_link();
  }
});

// src/UI/Header/TextLogo.tsx
var import_link = __toESM(require_link2());
import React from "react";
import { useUIStore } from "../../store.js";
import { TextHover } from "../TextAnimation/index.js";
function TextLogo({ color = "white", size = 18, onClick }) {
  const mode = useUIStore((state) => state.mode);
  return /* @__PURE__ */ React.createElement("div", {
    style: {
      width: "100vw",
      display: "flex",
      height: "fit-content",
      justifyContent: "center",
      alignItems: "center"
    },
    onClick
  }, /* @__PURE__ */ React.createElement(import_link.default, {
    href: "/"
  }, /* @__PURE__ */ React.createElement("div", {
    style: {
      width: "fit-content",
      padding: "2px 5px",
      borderBottom: mode !== "full" ? "2px solid #FF430A" : "2px solid " + color
    }
  }, /* @__PURE__ */ React.createElement(TextHover, {
    fontSize: size,
    color: mode !== "full" ? "#FF430A" : color,
    content: "ShaderGradient",
    delay: 0
  }))));
}
export {
  TextLogo
};
/** @license React v17.0.2
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
