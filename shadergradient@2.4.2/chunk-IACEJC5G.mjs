import {
  Mesh
} from "./chunk-F3GUEAGM.mjs";
import {
  PostProcessing
} from "./chunk-HTJBLCUE.mjs";
import {
  Controls
} from "./chunk-3SCKP3WD.mjs";
import {
  Lights
} from "./chunk-GPHGTWLK.mjs";
import {
  formatUrlString
} from "./chunk-WNGYPXFW.mjs";
import {
  Axis
} from "./chunk-X2DICZQA.mjs";
import {
  presets
} from "./chunk-3ONLEHDB.mjs";
import {
  __export,
  __objRest,
  __spreadProps,
  __spreadValues
} from "./chunk-5BEQP2BQ.mjs";

// ../../node_modules/.pnpm/filter-obj@1.1.0/node_modules/filter-obj/index.js
var filter_obj_exports = {};
__export(filter_obj_exports, {
  default: () => filter_obj_default
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
var filter_obj_default = module.exports;

// ../../node_modules/.pnpm/split-on-first@1.1.0/node_modules/split-on-first/index.js
var split_on_first_exports = {};
__export(split_on_first_exports, {
  default: () => split_on_first_default
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
module2.exports = (string, separator) => {
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
var split_on_first_default = module2.exports;

// ../../node_modules/.pnpm/decode-uri-component@0.2.2/node_modules/decode-uri-component/index.js
var decode_uri_component_exports = {};
__export(decode_uri_component_exports, {
  default: () => decode_uri_component_default
});
var exports3 = {};
var module3 = {
  get exports() {
    return exports3;
  },
  set exports(value) {
    exports3 = value;
  }
};
var token = "%[a-f0-9]{2}";
var singleMatcher = new RegExp("(" + token + ")|([^%]+?)", "gi");
var multiMatcher = new RegExp("(" + token + ")+", "gi");
function decodeComponents(components, split) {
  try {
    return [decodeURIComponent(components.join(""))];
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
    var tokens = input.match(singleMatcher) || [];
    for (var i = 1; i < tokens.length; i++) {
      input = decodeComponents(tokens, i).join("");
      tokens = input.match(singleMatcher) || [];
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
module3.exports = function(encodedURI) {
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
var decode_uri_component_default = module3.exports;

// ../../node_modules/.pnpm/strict-uri-encode@2.0.0/node_modules/strict-uri-encode/index.js
var strict_uri_encode_exports = {};
__export(strict_uri_encode_exports, {
  default: () => strict_uri_encode_default
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
module4.exports = (str) => encodeURIComponent(str).replace(/[!'()*]/g, (x) => `%${x.charCodeAt(0).toString(16).toUpperCase()}`);
var strict_uri_encode_default = module4.exports;

// ../../node_modules/.pnpm/query-string@7.1.3/node_modules/query-string/index.js
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
    names.forEach(function(k) {
      if (k === "default") {
        hasDefaultExport = true;
      } else if (!hasNamedExports && k != "__esModule") {
        try {
          hasNamedExports = requiredModule[k] != null;
        } catch (err) {
        }
      }
      Object2.defineProperty(specifiers, k, {
        get: function() {
          return requiredModule[k];
        },
        enumerable: true,
        configurable: false
      });
    });
    if (Object2.getOwnPropertySymbols) {
      var symbols = Object2.getOwnPropertySymbols(requiredModule);
      symbols.forEach(function(k) {
        Object2.defineProperty(specifiers, k, {
          get: function() {
            return requiredModule[k];
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
var exports5 = {};
var module5 = {
  get exports() {
    return exports5;
  },
  set exports(value) {
    exports5 = value;
  }
};
var strictUriEncode = __cjs_default__(typeof strict_uri_encode_exports !== "undefined" ? strict_uri_encode_exports : {});
var decodeComponent = __cjs_default__(typeof decode_uri_component_exports !== "undefined" ? decode_uri_component_exports : {});
var splitOnFirst = __cjs_default__(typeof split_on_first_exports !== "undefined" ? split_on_first_exports : {});
var filterObject = __cjs_default__(typeof filter_obj_exports !== "undefined" ? filter_obj_exports : {});
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
        const isEncodedArray = typeof value === "string" && !isArray && decode2(value, options).includes(options.arrayFormatSeparator);
        value = isEncodedArray ? decode2(value, options) : value;
        const newValue = isArray || isEncodedArray ? value.split(options.arrayFormatSeparator).map((item) => decode2(item, options)) : value === null ? value : decode2(value, options);
        accumulator[key] = newValue;
      };
    case "bracket-separator":
      return (key, value, accumulator) => {
        const isArray = /(\[\])$/.test(key);
        key = key.replace(/\[\]$/, "");
        if (!isArray) {
          accumulator[key] = value ? decode2(value, options) : value;
          return;
        }
        const arrayValue = value === null ? [] : value.split(options.arrayFormatSeparator).map((item) => decode2(item, options));
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
function decode2(value, options) {
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
function parse(query, options) {
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
    value = value === void 0 ? null : ["comma", "separator", "bracket-separator"].includes(options.arrayFormat) ? value : decode2(value, options);
    formatter(decode2(key, options), value, ret);
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
exports5.extract = extract;
exports5.parse = parse;
exports5.stringify = (object, options) => {
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
exports5.parseUrl = (url, options) => {
  options = Object.assign({
    decode: true
  }, options);
  const [url_, hash] = splitOnFirst(url, "#");
  return Object.assign(
    {
      url: url_.split("?")[0] || "",
      query: parse(extract(url), options)
    },
    options && options.parseFragmentIdentifier && hash ? { fragmentIdentifier: decode2(hash, options) } : {}
  );
};
exports5.stringifyUrl = (object, options) => {
  options = Object.assign({
    encode: true,
    strict: true,
    [encodeFragmentIdentifier]: true
  }, options);
  const url = removeHash(object.url).split("?")[0] || "";
  const queryFromUrl = exports5.extract(object.url);
  const parsedQueryFromUrl = exports5.parse(queryFromUrl, { sort: false });
  const query = Object.assign(parsedQueryFromUrl, object.query);
  let queryString = exports5.stringify(query, options);
  if (queryString) {
    queryString = `?${queryString}`;
  }
  let hash = getHash(object.url);
  if (object.fragmentIdentifier) {
    hash = `#${options[encodeFragmentIdentifier] ? encode(object.fragmentIdentifier, options) : object.fragmentIdentifier}`;
  }
  return `${url}${queryString}${hash}`;
};
exports5.pick = (input, filter, options) => {
  options = Object.assign({
    parseFragmentIdentifier: true,
    [encodeFragmentIdentifier]: false
  }, options);
  const { url, query, fragmentIdentifier } = exports5.parseUrl(input, options);
  return exports5.stringifyUrl({
    url,
    query: filterObject(query, filter),
    fragmentIdentifier
  }, options);
};
exports5.exclude = (input, filter, options) => {
  const exclusionFilter = Array.isArray(filter) ? (key) => !filter.includes(key) : (key, value) => !filter(key, value);
  return exports5.pick(input, exclusionFilter, options);
};
var __export0;
var __export1;
var __export2;
var __export3;
var __export4;
var __export5;
var __export6;
if (Object.isExtensible(module5.exports) && Object.keys(module5.exports).length === 7) {
  __export0 = module5.exports["extract"];
  __export1 = module5.exports["parse"];
  __export2 = module5.exports["stringify"];
  __export3 = module5.exports["parseUrl"];
  __export4 = module5.exports["stringifyUrl"];
  __export5 = module5.exports["pick"];
  __export6 = module5.exports["exclude"];
}
var query_string_default = module5.exports;

// src/ShaderGradient/ShaderGradient.tsx
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
function ShaderGradient(passedProps) {
  const _a = __spreadValues(__spreadValues({}, presets.halo.props), passedProps), { control, urlString, onCameraUpdate } = _a, rest = __objRest(_a, ["control", "urlString", "onCameraUpdate"]);
  let props = rest;
  if (control === "query")
    props = __export1(formatUrlString(urlString), {
      parseNumbers: true,
      parseBooleans: true,
      arrayFormat: "index"
    });
  const _b = props, { lightType, envPreset, brightness, grain, toggleAxis } = _b, others = __objRest(_b, ["lightType", "envPreset", "brightness", "grain", "toggleAxis"]);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Mesh, __spreadValues({}, props)),
    /* @__PURE__ */ jsx(
      Lights,
      {
        lightType,
        brightness,
        envPreset
      }
    ),
    grain !== "off" && /* @__PURE__ */ jsx(PostProcessing, {}),
    toggleAxis && /* @__PURE__ */ jsx(Axis, {}),
    /* @__PURE__ */ jsx(Controls, __spreadProps(__spreadValues({}, props), { onCameraUpdate }))
  ] });
}

export {
  ShaderGradient
};
