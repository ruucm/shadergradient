var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
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
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __commonJS = (cb, mod) => function __require() {
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
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// ../../node_modules/strict-uri-encode/index.js
var require_strict_uri_encode = __commonJS({
  "../../node_modules/strict-uri-encode/index.js"(exports, module) {
    "use strict";
    module.exports = (str) => encodeURIComponent(str).replace(/[!'()*]/g, (x) => `%${x.charCodeAt(0).toString(16).toUpperCase()}`);
  }
});

// ../../node_modules/decode-uri-component/index.js
var require_decode_uri_component = __commonJS({
  "../../node_modules/decode-uri-component/index.js"(exports, module) {
    "use strict";
    var token = "%[a-f0-9]{2}";
    var singleMatcher = new RegExp(token, "gi");
    var multiMatcher = new RegExp("(" + token + ")+", "gi");
    function decodeComponents(components, split) {
      try {
        return decodeURIComponent(components.join(""));
      } catch (err) {
      }
      if (components.length === 1) {
        return components;
      }
      split = split || 1;
      var left = components.slice(0, split);
      var right = components.slice(split);
      return Array.prototype.concat.call([], decodeComponents(left), decodeComponents(right));
    }
    function decode(input) {
      try {
        return decodeURIComponent(input);
      } catch (err) {
        var tokens = input.match(singleMatcher);
        for (var i = 1; i < tokens.length; i++) {
          input = decodeComponents(tokens, i).join("");
          tokens = input.match(singleMatcher);
        }
        return input;
      }
    }
    function customDecodeURIComponent(input) {
      var replaceMap = {
        "%FE%FF": "\uFFFD\uFFFD",
        "%FF%FE": "\uFFFD\uFFFD"
      };
      var match = multiMatcher.exec(input);
      while (match) {
        try {
          replaceMap[match[0]] = decodeURIComponent(match[0]);
        } catch (err) {
          var result = decode(match[0]);
          if (result !== match[0]) {
            replaceMap[match[0]] = result;
          }
        }
        match = multiMatcher.exec(input);
      }
      replaceMap["%C2"] = "\uFFFD";
      var entries = Object.keys(replaceMap);
      for (var i = 0; i < entries.length; i++) {
        var key = entries[i];
        input = input.replace(new RegExp(key, "g"), replaceMap[key]);
      }
      return input;
    }
    module.exports = function(encodedURI) {
      if (typeof encodedURI !== "string") {
        throw new TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof encodedURI + "`");
      }
      try {
        encodedURI = encodedURI.replace(/\+/g, " ");
        return decodeURIComponent(encodedURI);
      } catch (err) {
        return customDecodeURIComponent(encodedURI);
      }
    };
  }
});

// ../../node_modules/split-on-first/index.js
var require_split_on_first = __commonJS({
  "../../node_modules/split-on-first/index.js"(exports, module) {
    "use strict";
    module.exports = (string, separator) => {
      if (!(typeof string === "string" && typeof separator === "string")) {
        throw new TypeError("Expected the arguments to be of type `string`");
      }
      if (separator === "") {
        return [string];
      }
      const separatorIndex = string.indexOf(separator);
      if (separatorIndex === -1) {
        return [string];
      }
      return [
        string.slice(0, separatorIndex),
        string.slice(separatorIndex + separator.length)
      ];
    };
  }
});

// ../../node_modules/filter-obj/index.js
var require_filter_obj = __commonJS({
  "../../node_modules/filter-obj/index.js"(exports, module) {
    "use strict";
    module.exports = function(obj, predicate) {
      var ret = {};
      var keys = Object.keys(obj);
      var isArr = Array.isArray(predicate);
      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        var val = obj[key];
        if (isArr ? predicate.indexOf(key) !== -1 : predicate(key, val, obj)) {
          ret[key] = val;
        }
      }
      return ret;
    };
  }
});

// ../../node_modules/query-string/index.js
var require_query_string = __commonJS({
  "../../node_modules/query-string/index.js"(exports) {
    "use strict";
    var strictUriEncode = require_strict_uri_encode();
    var decodeComponent = require_decode_uri_component();
    var splitOnFirst = require_split_on_first();
    var filterObject = require_filter_obj();
    var isNullOrUndefined = (value) => value === null || value === void 0;
    var encodeFragmentIdentifier = Symbol("encodeFragmentIdentifier");
    function encoderForArrayFormat(options) {
      switch (options.arrayFormat) {
        case "index":
          return (key) => (result, value) => {
            const index = result.length;
            if (value === void 0 || options.skipNull && value === null || options.skipEmptyString && value === "") {
              return result;
            }
            if (value === null) {
              return [...result, [encode(key, options), "[", index, "]"].join("")];
            }
            return [
              ...result,
              [encode(key, options), "[", encode(index, options), "]=", encode(value, options)].join("")
            ];
          };
        case "bracket":
          return (key) => (result, value) => {
            if (value === void 0 || options.skipNull && value === null || options.skipEmptyString && value === "") {
              return result;
            }
            if (value === null) {
              return [...result, [encode(key, options), "[]"].join("")];
            }
            return [...result, [encode(key, options), "[]=", encode(value, options)].join("")];
          };
        case "colon-list-separator":
          return (key) => (result, value) => {
            if (value === void 0 || options.skipNull && value === null || options.skipEmptyString && value === "") {
              return result;
            }
            if (value === null) {
              return [...result, [encode(key, options), ":list="].join("")];
            }
            return [...result, [encode(key, options), ":list=", encode(value, options)].join("")];
          };
        case "comma":
        case "separator":
        case "bracket-separator": {
          const keyValueSep = options.arrayFormat === "bracket-separator" ? "[]=" : "=";
          return (key) => (result, value) => {
            if (value === void 0 || options.skipNull && value === null || options.skipEmptyString && value === "") {
              return result;
            }
            value = value === null ? "" : value;
            if (result.length === 0) {
              return [[encode(key, options), keyValueSep, encode(value, options)].join("")];
            }
            return [[result, encode(value, options)].join(options.arrayFormatSeparator)];
          };
        }
        default:
          return (key) => (result, value) => {
            if (value === void 0 || options.skipNull && value === null || options.skipEmptyString && value === "") {
              return result;
            }
            if (value === null) {
              return [...result, encode(key, options)];
            }
            return [...result, [encode(key, options), "=", encode(value, options)].join("")];
          };
      }
    }
    function parserForArrayFormat(options) {
      let result;
      switch (options.arrayFormat) {
        case "index":
          return (key, value, accumulator) => {
            result = /\[(\d*)\]$/.exec(key);
            key = key.replace(/\[\d*\]$/, "");
            if (!result) {
              accumulator[key] = value;
              return;
            }
            if (accumulator[key] === void 0) {
              accumulator[key] = {};
            }
            accumulator[key][result[1]] = value;
          };
        case "bracket":
          return (key, value, accumulator) => {
            result = /(\[\])$/.exec(key);
            key = key.replace(/\[\]$/, "");
            if (!result) {
              accumulator[key] = value;
              return;
            }
            if (accumulator[key] === void 0) {
              accumulator[key] = [value];
              return;
            }
            accumulator[key] = [].concat(accumulator[key], value);
          };
        case "colon-list-separator":
          return (key, value, accumulator) => {
            result = /(:list)$/.exec(key);
            key = key.replace(/:list$/, "");
            if (!result) {
              accumulator[key] = value;
              return;
            }
            if (accumulator[key] === void 0) {
              accumulator[key] = [value];
              return;
            }
            accumulator[key] = [].concat(accumulator[key], value);
          };
        case "comma":
        case "separator":
          return (key, value, accumulator) => {
            const isArray = typeof value === "string" && value.includes(options.arrayFormatSeparator);
            const isEncodedArray = typeof value === "string" && !isArray && decode(value, options).includes(options.arrayFormatSeparator);
            value = isEncodedArray ? decode(value, options) : value;
            const newValue = isArray || isEncodedArray ? value.split(options.arrayFormatSeparator).map((item) => decode(item, options)) : value === null ? value : decode(value, options);
            accumulator[key] = newValue;
          };
        case "bracket-separator":
          return (key, value, accumulator) => {
            const isArray = /(\[\])$/.test(key);
            key = key.replace(/\[\]$/, "");
            if (!isArray) {
              accumulator[key] = value ? decode(value, options) : value;
              return;
            }
            const arrayValue = value === null ? [] : value.split(options.arrayFormatSeparator).map((item) => decode(item, options));
            if (accumulator[key] === void 0) {
              accumulator[key] = arrayValue;
              return;
            }
            accumulator[key] = [].concat(accumulator[key], arrayValue);
          };
        default:
          return (key, value, accumulator) => {
            if (accumulator[key] === void 0) {
              accumulator[key] = value;
              return;
            }
            accumulator[key] = [].concat(accumulator[key], value);
          };
      }
    }
    function validateArrayFormatSeparator(value) {
      if (typeof value !== "string" || value.length !== 1) {
        throw new TypeError("arrayFormatSeparator must be single character string");
      }
    }
    function encode(value, options) {
      if (options.encode) {
        return options.strict ? strictUriEncode(value) : encodeURIComponent(value);
      }
      return value;
    }
    function decode(value, options) {
      if (options.decode) {
        return decodeComponent(value);
      }
      return value;
    }
    function keysSorter(input) {
      if (Array.isArray(input)) {
        return input.sort();
      }
      if (typeof input === "object") {
        return keysSorter(Object.keys(input)).sort((a, b) => Number(a) - Number(b)).map((key) => input[key]);
      }
      return input;
    }
    function removeHash(input) {
      const hashStart = input.indexOf("#");
      if (hashStart !== -1) {
        input = input.slice(0, hashStart);
      }
      return input;
    }
    function getHash(url) {
      let hash = "";
      const hashStart = url.indexOf("#");
      if (hashStart !== -1) {
        hash = url.slice(hashStart);
      }
      return hash;
    }
    function extract(input) {
      input = removeHash(input);
      const queryStart = input.indexOf("?");
      if (queryStart === -1) {
        return "";
      }
      return input.slice(queryStart + 1);
    }
    function parseValue(value, options) {
      if (options.parseNumbers && !Number.isNaN(Number(value)) && (typeof value === "string" && value.trim() !== "")) {
        value = Number(value);
      } else if (options.parseBooleans && value !== null && (value.toLowerCase() === "true" || value.toLowerCase() === "false")) {
        value = value.toLowerCase() === "true";
      }
      return value;
    }
    function parse2(query, options) {
      options = Object.assign({
        decode: true,
        sort: true,
        arrayFormat: "none",
        arrayFormatSeparator: ",",
        parseNumbers: false,
        parseBooleans: false
      }, options);
      validateArrayFormatSeparator(options.arrayFormatSeparator);
      const formatter = parserForArrayFormat(options);
      const ret = /* @__PURE__ */ Object.create(null);
      if (typeof query !== "string") {
        return ret;
      }
      query = query.trim().replace(/^[?#&]/, "");
      if (!query) {
        return ret;
      }
      for (const param of query.split("&")) {
        if (param === "") {
          continue;
        }
        let [key, value] = splitOnFirst(options.decode ? param.replace(/\+/g, " ") : param, "=");
        value = value === void 0 ? null : ["comma", "separator", "bracket-separator"].includes(options.arrayFormat) ? value : decode(value, options);
        formatter(decode(key, options), value, ret);
      }
      for (const key of Object.keys(ret)) {
        const value = ret[key];
        if (typeof value === "object" && value !== null) {
          for (const k of Object.keys(value)) {
            value[k] = parseValue(value[k], options);
          }
        } else {
          ret[key] = parseValue(value, options);
        }
      }
      if (options.sort === false) {
        return ret;
      }
      return (options.sort === true ? Object.keys(ret).sort() : Object.keys(ret).sort(options.sort)).reduce((result, key) => {
        const value = ret[key];
        if (Boolean(value) && typeof value === "object" && !Array.isArray(value)) {
          result[key] = keysSorter(value);
        } else {
          result[key] = value;
        }
        return result;
      }, /* @__PURE__ */ Object.create(null));
    }
    exports.extract = extract;
    exports.parse = parse2;
    exports.stringify = (object, options) => {
      if (!object) {
        return "";
      }
      options = Object.assign({
        encode: true,
        strict: true,
        arrayFormat: "none",
        arrayFormatSeparator: ","
      }, options);
      validateArrayFormatSeparator(options.arrayFormatSeparator);
      const shouldFilter = (key) => options.skipNull && isNullOrUndefined(object[key]) || options.skipEmptyString && object[key] === "";
      const formatter = encoderForArrayFormat(options);
      const objectCopy = {};
      for (const key of Object.keys(object)) {
        if (!shouldFilter(key)) {
          objectCopy[key] = object[key];
        }
      }
      const keys = Object.keys(objectCopy);
      if (options.sort !== false) {
        keys.sort(options.sort);
      }
      return keys.map((key) => {
        const value = object[key];
        if (value === void 0) {
          return "";
        }
        if (value === null) {
          return encode(key, options);
        }
        if (Array.isArray(value)) {
          if (value.length === 0 && options.arrayFormat === "bracket-separator") {
            return encode(key, options) + "[]";
          }
          return value.reduce(formatter(key), []).join("&");
        }
        return encode(key, options) + "=" + encode(value, options);
      }).filter((x) => x.length > 0).join("&");
    };
    exports.parseUrl = (url, options) => {
      options = Object.assign({
        decode: true
      }, options);
      const [url_, hash] = splitOnFirst(url, "#");
      return Object.assign({
        url: url_.split("?")[0] || "",
        query: parse2(extract(url), options)
      }, options && options.parseFragmentIdentifier && hash ? { fragmentIdentifier: decode(hash, options) } : {});
    };
    exports.stringifyUrl = (object, options) => {
      options = Object.assign({
        encode: true,
        strict: true,
        [encodeFragmentIdentifier]: true
      }, options);
      const url = removeHash(object.url).split("?")[0] || "";
      const queryFromUrl = exports.extract(object.url);
      const parsedQueryFromUrl = exports.parse(queryFromUrl, { sort: false });
      const query = Object.assign(parsedQueryFromUrl, object.query);
      let queryString = exports.stringify(query, options);
      if (queryString) {
        queryString = `?${queryString}`;
      }
      let hash = getHash(object.url);
      if (object.fragmentIdentifier) {
        hash = `#${options[encodeFragmentIdentifier] ? encode(object.fragmentIdentifier, options) : object.fragmentIdentifier}`;
      }
      return `${url}${queryString}${hash}`;
    };
    exports.pick = (input, filter, options) => {
      options = Object.assign({
        parseFragmentIdentifier: true,
        [encodeFragmentIdentifier]: false
      }, options);
      const { url, query, fragmentIdentifier } = exports.parseUrl(input, options);
      return exports.stringifyUrl({
        url,
        query: filterObject(query, filter),
        fragmentIdentifier
      }, options);
    };
    exports.exclude = (input, filter, options) => {
      const exclusionFilter = Array.isArray(filter) ? (key) => !filter.includes(key) : (key, value) => !filter(key, value);
      return exports.pick(input, exclusionFilter, options);
    };
  }
});

// src/Overrides/FigmaPlugin.tsx
var qs = __toESM(require_query_string());
import { useState } from "react";
import React from "react";
import { useURLQueryState } from "../hooks/index.js";
import { PRESETS } from "../presets.js";
import { updateGradientState, usePropertyStore, useUIStore } from "../store.js";
import { cx } from "../utils/index.js";
import {
  figma,
  postFigmaMessage,
  postFigmaMessageForSnapShot
} from "./FigmaApi.js";
function createRectangle(Component) {
  return (props) => {
    return /* @__PURE__ */ React.createElement(Component, __spreadProps(__spreadValues({}, props), {
      onClick: () => __async(this, null, function* () {
        postFigmaMessage(() => {
          const ellipse = figma.createRectangle();
          ellipse.resize(300, 300);
        });
      })
    }));
  };
}
function extractGIF(Component) {
  return (_a) => {
    var _b = _a, { style } = _b, props = __objRest(_b, ["style"]);
    return /* @__PURE__ */ React.createElement(Component, __spreadProps(__spreadValues({}, props), {
      style: __spreadProps(__spreadValues({}, style), { cursor: "pointer" }),
      onClick: () => alert("This feature is under development.")
    }));
  };
}
function insertCanvasAsImage(Component) {
  return (_a) => {
    var _b = _a, { style } = _b, props = __objRest(_b, ["style"]);
    return /* @__PURE__ */ React.createElement(Component, __spreadProps(__spreadValues({}, props), {
      style: __spreadProps(__spreadValues({}, style), { cursor: "pointer" }),
      onClick: () => postFigmaMessageForSnapShot(() => void 0)
    }));
  };
}
function ArrowLeft(Component) {
  return (_a) => {
    var _b = _a, { style } = _b, props = __objRest(_b, ["style"]);
    const activePreset = useUIStore((state) => state.activePreset);
    const setActivePreset = useUIStore((state) => state.setActivePreset);
    return /* @__PURE__ */ React.createElement(Component, __spreadProps(__spreadValues({}, props), {
      style: __spreadProps(__spreadValues({}, style), { cursor: "pointer" }),
      onClick: () => {
        if (activePreset !== 0) {
          setActivePreset(activePreset - 1);
        } else {
          setActivePreset(PRESETS.length - 1);
        }
      }
    }));
  };
}
function ArrowRight(Component) {
  return (_a) => {
    var _b = _a, { style } = _b, props = __objRest(_b, ["style"]);
    const activePreset = useUIStore((state) => state.activePreset);
    const setActivePreset = useUIStore((state) => state.setActivePreset);
    return /* @__PURE__ */ React.createElement(Component, __spreadProps(__spreadValues({}, props), {
      style: __spreadProps(__spreadValues({}, style), { cursor: "pointer" }),
      onClick: () => {
        if (activePreset !== PRESETS.length - 1) {
          setActivePreset(activePreset + 1);
        } else {
          setActivePreset(0);
        }
      }
    }));
  };
}
function ActiveTitle(Component) {
  return (props) => {
    const activePreset = useUIStore((state) => state.activePreset);
    return /* @__PURE__ */ React.createElement(Component, __spreadProps(__spreadValues({}, props), {
      text: PRESETS[activePreset].title
    }));
  };
}
function Tool3dAxis(Component) {
  return (_a) => {
    var _b = _a, { style } = _b, props = __objRest(_b, ["style"]);
    const toggleAxis = usePropertyStore((state) => state.toggleAxis);
    return /* @__PURE__ */ React.createElement(Component, __spreadProps(__spreadValues({}, props), {
      style: __spreadProps(__spreadValues({}, style), { cursor: "pointer" }),
      onClick: () => usePropertyStore.setState({ toggleAxis: !toggleAxis })
    }));
  };
}
function ToolZoomOut(Component) {
  return (_a) => {
    var _b = _a, { style } = _b, props = __objRest(_b, ["style"]);
    const zoomOut = usePropertyStore((state) => state.zoomOut);
    return /* @__PURE__ */ React.createElement(Component, __spreadProps(__spreadValues({}, props), {
      style: __spreadProps(__spreadValues({}, style), { cursor: "pointer" }),
      onClick: () => usePropertyStore.setState({ zoomOut: !zoomOut })
    }));
  };
}
function ToolCopy(Component) {
  return (_a) => {
    var _b = _a, { style } = _b, props = __objRest(_b, ["style"]);
    const [copyUrlText, setCopyUrl] = React.useState("copy url");
    return /* @__PURE__ */ React.createElement(Component, __spreadProps(__spreadValues({}, props), {
      style: __spreadProps(__spreadValues({}, style), { cursor: "pointer" }),
      onClick: () => __async(this, null, function* () {
        window.navigator.clipboard.writeText(window.location.href);
        setCopyUrl("copied!");
        yield setTimeout(() => {
          setCopyUrl("copy url");
        }, 1e3);
      })
    }));
  };
}
function ToolUndo(Component) {
  return (_a) => {
    var _b = _a, { style } = _b, props = __objRest(_b, ["style"]);
    return /* @__PURE__ */ React.createElement(Component, __spreadProps(__spreadValues({}, props), {
      style: __spreadProps(__spreadValues({}, style), { cursor: "pointer" }),
      onClick: () => {
        const prevUrls = window.history.state.prevUrls || [];
        if (prevUrls.length > 1) {
          prevUrls.pop();
          const lastURL = new URL(prevUrls[prevUrls.length - 1]).search;
          updateGradientState(lastURL);
          prevUrls.pop();
          window.history.pushState({ prevUrls }, document.title, "");
        } else
          alert("no history");
      }
    }));
  };
}
function UrlInput(Component) {
  return (props) => {
    const setQueryValue = useURLQueryState();
    const [value, setValue] = useState("");
    const [valid, setValid] = useState(true);
    let variant = "default";
    if (value) {
      if (valid)
        variant = "valid";
      else
        variant = "invalid";
    }
    return /* @__PURE__ */ React.createElement(Component, __spreadProps(__spreadValues({}, props), {
      onChange: (e) => {
        const value2 = e.target.value;
        setValue(value2);
        if (isValidUrl(value2))
          setValid(true);
        else
          setValid(false);
      },
      onKeyDown: (e) => {
        if (e.key === "Enter" && valid) {
          setQueryValue(value);
          props == null ? void 0 : props.onKeyDown();
        }
      },
      onSubmit: () => {
        if (valid) {
          setQueryValue(value);
          props == null ? void 0 : props.onSubmit();
        }
      },
      variant
    }));
  };
}
var isValidUrl = (urlString) => {
  const state = qs.parse(urlString, {
    parseNumbers: true,
    parseBooleans: true,
    arrayFormat: "index"
  });
  return state.color1 && state.color2 && state.color3;
};
function HideScrollBar(Component) {
  return (_a) => {
    var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
    return /* @__PURE__ */ React.createElement(Component, __spreadProps(__spreadValues({}, props), {
      className: cx("hide-scrollbar", className)
    }));
  };
}
export {
  ActiveTitle,
  ArrowLeft,
  ArrowRight,
  HideScrollBar,
  Tool3dAxis,
  ToolCopy,
  ToolUndo,
  ToolZoomOut,
  UrlInput,
  createRectangle,
  extractGIF,
  insertCanvasAsImage
};
