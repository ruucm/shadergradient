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
  for (var prop in b ||= {})
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
  var target2 = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target2[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target2[prop] = source[prop];
    }
  return target2;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target2, all) => {
  for (var name in all)
    __defProp(target2, name, { get: all[name], enumerable: true });
};
var __copyProps = (to3, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to3, key) && key !== except)
        __defProp(to3, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to3;
};
var __toESM = (mod, isNodeMode, target2) => (target2 = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target2, "default", { value: mod, enumerable: true }) : target2,
  mod
));
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

// ../../node_modules/.pnpm/strict-uri-encode@2.0.0/node_modules/strict-uri-encode/index.js
var require_strict_uri_encode = __commonJS({
  "../../node_modules/.pnpm/strict-uri-encode@2.0.0/node_modules/strict-uri-encode/index.js"(exports, module) {
    "use strict";
    module.exports = (str) => encodeURIComponent(str).replace(/[!'()*]/g, (x) => `%${x.charCodeAt(0).toString(16).toUpperCase()}`);
  }
});

// ../../node_modules/.pnpm/decode-uri-component@0.2.2/node_modules/decode-uri-component/index.js
var require_decode_uri_component = __commonJS({
  "../../node_modules/.pnpm/decode-uri-component@0.2.2/node_modules/decode-uri-component/index.js"(exports, module) {
    "use strict";
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

// ../../node_modules/.pnpm/split-on-first@1.1.0/node_modules/split-on-first/index.js
var require_split_on_first = __commonJS({
  "../../node_modules/.pnpm/split-on-first@1.1.0/node_modules/split-on-first/index.js"(exports, module) {
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

// ../../node_modules/.pnpm/filter-obj@1.1.0/node_modules/filter-obj/index.js
var require_filter_obj = __commonJS({
  "../../node_modules/.pnpm/filter-obj@1.1.0/node_modules/filter-obj/index.js"(exports, module) {
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

// ../../node_modules/.pnpm/query-string@7.1.3/node_modules/query-string/index.js
var require_query_string = __commonJS({
  "../../node_modules/.pnpm/query-string@7.1.3/node_modules/query-string/index.js"(exports) {
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
    function parse4(query, options) {
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
    exports.parse = parse4;
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
      return Object.assign(
        {
          url: url_.split("?")[0] || "",
          query: parse4(extract(url), options)
        },
        options && options.parseFragmentIdentifier && hash ? { fragmentIdentifier: decode(hash, options) } : {}
      );
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

// src/Box/Box.tsx
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
function Box(props) {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("mesh", __spreadProps(__spreadValues({}, props), { rotation: [1, 1, 0], scale: 0.5, children: [
    /* @__PURE__ */ jsx("boxGeometry", { args: [2, 2, 2] }),
    /* @__PURE__ */ jsx("meshStandardMaterial", { color: "red" })
  ] })) });
}

// src/GradientCanvas.tsx
import { Canvas } from "@react-three/fiber";
import { useEffect } from "react";

// src/consts.ts
var initialActivePreset = 0;
var canvasProps = (pixelDensity, fov) => ({
  dpr: pixelDensity,
  camera: { fov },
  linear: true,
  flat: true,
  gl: { preserveDrawingBuffer: true }
});
var defaultPlanesZoom = 1;
var defaultSphereDistance = 14;
var zoomOutPlanes = { zoom: 1, distance: 14 };
var zoomOutSphere = { zoom: 5, distance: 14 };
var mainLoading = {
  meshDelay: 2,
  meshDur: 1.8,
  rotDelay: 1.7,
  rotDur: 1,
  posDelay: 1.3,
  posDur: 2.2,
  logoTransition: 3.1,
  text: 2.5,
  to: 1
};
var envBasePath = "https://shadergradient.vercel.app/hdr/";

// src/presets.ts
var DEFAUlT_PRESET = "?pixelDensity=1&fov=45";
var PRESETS = [
  {
    title: "Halo",
    color: "white",
    url: "?animate=on&axesHelper=off&brightness=1.2&cAzimuthAngle=180&cDistance=3.6&cPolarAngle=90&cameraZoom=1&color1=%23ff5005&color2=%23dbba95&color3=%23d0bce1&embedMode=off&envPreset=city&gizmoHelper=hide&grain=on&lightType=3d&pixelDensity=1&fov=45&positionX=-1.4&positionY=0&positionZ=0&reflection=0.1&rotationX=0&rotationY=10&rotationZ=50&shader=defaults&type=plane&uDensity=1.3&uSpeed=0.4&uStrength=4&uTime=0&uFrequency=5.5&wireframe=false"
  },
  {
    title: "Pensive",
    color: "white",
    url: "?animate=on&axesHelper=off&brightness=1.5&cAzimuthAngle=250&cDistance=1.5&cPolarAngle=140&cameraZoom=12.5&color1=%23809bd6&color2=%23910aff&color3=%23af38ff&embedMode=off&envPreset=city&gizmoHelper=hide&grain=on&lightType=3d&pixelDensity=1&fov=45&positionX=0&positionY=0&positionZ=0&reflection=0.5&rotationX=0&rotationY=0&rotationZ=140&shader=defaults&type=sphere&uAmplitude=7&uDensity=0.8&uFrequency=5.5&uSpeed=0.3&uStrength=0.4&uTime=0&wireframe=false"
  },
  {
    title: "Mint",
    color: "white",
    url: "?animate=on&axesHelper=off&brightness=1.2&cAzimuthAngle=170&cDistance=4.4&cPolarAngle=70&cameraZoom=1&color1=%2394ffd1&color2=%236bf5ff&color3=%23ffffff&embedMode=off&envPreset=city&gizmoHelper=hide&grain=off&lightType=3d&pixelDensity=1&fov=45&positionX=0&positionY=0.9&positionZ=-0.3&reflection=0.1&rotationX=45&rotationY=0&rotationZ=0&type=waterPlane&uAmplitude=0&uDensity=1.2&uFrequency=0&uSpeed=0.2&uStrength=3.4&uTime=0&wireframe=false&shader=defaults"
  },
  {
    title: "Interstella",
    color: "white",
    url: "?animate=on&axesHelper=off&brightness=0.8&cAzimuthAngle=270&cDistance=0.5&cPolarAngle=180&cameraZoom=15.1&color1=%2373bfc4&color2=%23ff810a&color3=%238da0ce&embedMode=off&envPreset=city&gizmoHelper=hide&grain=on&lightType=env&pixelDensity=1&fov=45&positionX=-0.1&positionY=0&positionZ=0&reflection=0.4&rotationX=0&rotationY=130&rotationZ=70&shader=defaults&type=sphere&uAmplitude=3.2&uDensity=0.8&uFrequency=5.5&uSpeed=0.3&uStrength=0.3&uTime=0&wireframe=false"
  },
  {
    title: "Nighty night",
    color: "white",
    url: "?animate=on&axesHelper=off&brightness=1&cAzimuthAngle=180&cDistance=2.8&cPolarAngle=80&cameraZoom=9.1&color1=%23606080&color2=%238d7dca&color3=%23212121&embedMode=off&envPreset=city&gizmoHelper=hide&grain=on&lightType=3d&pixelDensity=1&fov=45&positionX=0&positionY=0&positionZ=0&reflection=0.1&rotationX=50&rotationY=0&rotationZ=-60&shader=defaults&type=waterPlane&uAmplitude=0&uDensity=1.5&uFrequency=0&uSpeed=0.3&uStrength=1.5&uTime=8&wireframe=false"
  },
  {
    title: "Viola orientalis",
    color: "white",
    url: "?animate=on&axesHelper=on&brightness=1.1&cAzimuthAngle=0&cDistance=7.1&cPolarAngle=140&cameraZoom=17.3&color1=%23ffffff&color2=%23ffbb00&color3=%230700ff&embedMode=off&envPreset=city&grain=off&lightType=3d&pixelDensity=1&fov=45&positionX=0&positionY=0&positionZ=0&reflection=0.1&rotationX=0&rotationY=0&rotationZ=0&type=sphere&uAmplitude=1.4&uDensity=1.1&uSpeed=0.1&uStrength=1&uTime=0&wireframe=false&uFrequency=5.5&shader=defaults"
  },
  {
    title: "Universe",
    color: "white",
    url: "?animate=on&axesHelper=on&brightness=1.1&cAzimuthAngle=180&cDistance=3.9&cPolarAngle=115&cameraZoom=1&color1=%235606FF&color2=%23FE8989&color3=%23000000&embedMode=off&envPreset=city&grain=off&lightType=3d&pixelDensity=1&fov=45&positionX=-0.5&positionY=0.1&positionZ=0&reflection=0.1&rotationX=0&rotationY=0&rotationZ=235&type=waterPlane&uAmplitude=0&uDensity=1.1&uSpeed=0.1&uStrength=2.4&uTime=0.2&uFrequency=5.5&wireframe=false&shader=defaults"
  },
  {
    title: "Sunset",
    color: "white",
    url: "?animate=on&axesHelper=on&bgColor1=%23000000&bgColor2=%23000000&brightness=1.5&cAzimuthAngle=60&cDistance=7.1&cPolarAngle=90&cameraZoom=15.3&color1=%23ff7a33&color2=%2333a0ff&color3=%23ffc53d&embedMode=off&envPreset=dawn&grain=off&http%3A%2F%2Flocalhost%3A3002%2Fcustomize%3Fanimate=on&lightType=3d&pixelDensity=1&fov=45&positionX=0&positionY=-0.15&positionZ=0&reflection=0.1&rotationX=0&rotationY=0&rotationZ=0&shader=defaults&type=sphere&uAmplitude=1.4&uDensity=1.1&uSpeed=0.1&uStrength=0.4&uTime=0&uFrequency=5.5&wireframe=false"
  },
  {
    title: "Mandarin",
    color: "white",
    url: "?animate=on&axesHelper=on&bgColor1=%23000000&bgColor2=%23000000&brightness=1.2&cAzimuthAngle=180&cDistance=2.4&cPolarAngle=95&cameraZoom=1&color1=%23ff6a1a&color2=%23c73c00&color3=%23FD4912&embedMode=off&envPreset=city&grain=off&lightType=3d&pixelDensity=1&fov=45&positionX=0&positionY=-2.1&positionZ=0&reflection=0.1&rotationX=0&rotationY=0&rotationZ=225&shader=defaults&type=waterPlane&uAmplitude=0&uFrequency=5.5&uDensity=1.8&uSpeed=0.2&uStrength=3&uTime=0.2&wireframe=false"
  },
  {
    title: "Cotton Candy",
    color: "white",
    url: "?animate=on&axesHelper=off&brightness=1.2&cAzimuthAngle=180&cDistance=2.9&cPolarAngle=120&cameraZoom=1&color1=%23ebedff&color2=%23f3f2f8&color3=%23dbf8ff&embedMode=off&envPreset=city&gizmoHelper=hide&grain=off&lightType=3d&pixelDensity=1&fov=45&positionX=0&positionY=1.8&positionZ=0&reflection=0.1&rotationX=0&rotationY=0&rotationZ=-90&type=waterPlane&uDensity=1&uSpeed=0.3&uStrength=3&uTime=0.2&uFrequency=5.5&wireframe=false&shader=defaults"
  }
];

// src/store.ts
var qs = __toESM(require_query_string());
import create from "zustand";
import { combine } from "zustand/middleware";
var useQueryStore = create((set) => __spreadValues({}, parseState()));
var usePropertyStore = create((set) => ({
  hoverState: 0,
  inAbout: false
}));
var useCursorStore = create(() => {
  return {
    hover: "default"
  };
});
var updateGradientState = (querystate) => {
  const state = parseState(querystate);
  useQueryStore.setState(state, true);
};
function parseState(search = DEFAUlT_PRESET) {
  return qs.parse(search, {
    parseNumbers: true,
    parseBooleans: true,
    arrayFormat: "index"
  });
}
var useDomStore = create(() => {
  return { dom: null };
});
var useUIStore = create(
  combine(
    { activePreset: initialActivePreset, mode: "full", loadingPercentage: 0 },
    (set) => ({
      setActivePreset: (by) => set((state) => ({ activePreset: by })),
      setMode: (data) => set((state) => __spreadProps(__spreadValues({}, state), { mode: data })),
      setLoadingPercentage: (data) => set((state) => __spreadProps(__spreadValues({}, state), { loadingPercentage: data }))
    })
  )
);

// src/useQueryState.ts
var qs2 = __toESM(require_query_string());
import { useCallback } from "react";
var useQueryState = (propName, defaultValue = null) => {
  const selector = useCallback(
    (state) => typeof state[propName] !== "undefined" ? state[propName] : defaultValue,
    [propName, defaultValue]
  );
  const globalValue = useQueryStore(selector);
  const _setGlobalValue = useCallback(
    (valueFun) => useQueryStore.setState({
      [propName]: valueFun(useQueryStore.getState()[propName])
    }),
    [propName]
  );
  const setQueryValue = useCallback(
    (newVal) => {
      _setGlobalValue((currentState) => {
        if (typeof newVal === "function") {
          newVal = newVal(currentState || defaultValue);
        }
        if (Number.isFinite(newVal)) {
          newVal = parseFloat(newVal.toFixed(2));
        }
        setTimeout(() => {
          const query = useQueryStore.getState();
          updateHistory(
            qs2.stringifyUrl(
              { url: window.location.pathname, query },
              { skipNull: true, arrayFormat: "index" }
            )
          );
        }, 0);
        return newVal;
      });
    },
    [_setGlobalValue]
  );
  return [globalValue, setQueryValue];
};
function updateHistory(path) {
  var _a;
  window.history.pushState(
    {
      prevUrls: [
        ...((_a = window.history.state) == null ? void 0 : _a.prevUrls) || [],
        window.location.origin + path
      ]
    },
    document.title,
    path
  );
}
var useQueryState_default = useQueryState;

// src/GradientCanvas.tsx
import { Fragment as Fragment2, jsx as jsx2 } from "react/jsx-runtime";
function GradientCanvas(_a) {
  var _b = _a, {
    children,
    pointerEvents = "none"
  } = _b, rest = __objRest(_b, [
    "children",
    "pointerEvents"
  ]);
  usePresetToStore();
  const [pixelDensity] = useQueryState_default("pixelDensity");
  const [fov] = useQueryState_default("fov");
  return /* @__PURE__ */ jsx2(Fragment2, { children: /* @__PURE__ */ jsx2(
    Canvas,
    __spreadProps(__spreadValues(__spreadProps(__spreadValues({
      id: "gradientCanvas",
      resize: { offsetSize: true }
    }, canvasProps(pixelDensity, fov)), {
      style: { pointerEvents }
    }), rest), {
      children
    }),
    fov
  ) });
}
var pageLoaded = false;
function usePresetToStore() {
  const activePreset = useUIStore((state) => state.activePreset);
  useEffect(() => {
    var _a;
    let gradientURL;
    if (!pageLoaded && ((_a = window.location.search) == null ? void 0 : _a.includes("pixelDensity")))
      gradientURL = window.location.search;
    else
      gradientURL = PRESETS[activePreset].url;
    updateGradientState(gradientURL);
    pageLoaded = true;
  }, [activePreset]);
}

// src/Gradient/Gradient.tsx
import { Suspense } from "react";

// src/utils.ts
function dToR(d) {
  return d / 180 * Math.PI;
}
function dToRArr(degrees) {
  return degrees.map((d) => dToR(d));
}
function formatUrlString(urlString) {
  return urlString.replace("http://localhost:3001/customize", "").replace("https://shadergradient.co/customize", "");
}

// src/Gradient/hooks/useControlValues.ts
var qs3 = __toESM(require_query_string());
function useControlValues(control, _a) {
  var _b = _a, { urlString } = _b, props = __objRest(_b, ["urlString"]);
  const [type] = useQueryState_default("type");
  const [animate] = useQueryState_default("animate");
  const [uTime] = useQueryState_default("uTime");
  const [uSpeed] = useQueryState_default("uSpeed");
  const [uStrength] = useQueryState_default("uStrength");
  const [uDensity] = useQueryState_default("uDensity");
  const [uFrequency] = useQueryState_default("uFrequency");
  const [uAmplitude] = useQueryState_default("uAmplitude");
  const [positionX] = useQueryState_default("positionX");
  const [positionY] = useQueryState_default("positionY");
  const [positionZ] = useQueryState_default("positionZ");
  const [rotationX] = useQueryState_default("rotationX");
  const [rotationY] = useQueryState_default("rotationY");
  const [rotationZ] = useQueryState_default("rotationZ");
  const [color1] = useQueryState_default("color1");
  const [color2] = useQueryState_default("color2");
  const [color3] = useQueryState_default("color3");
  const [cAzimuthAngle] = useQueryState_default("cAzimuthAngle");
  const [cPolarAngle] = useQueryState_default("cPolarAngle");
  const [cDistance] = useQueryState_default("cDistance");
  const [cameraZoom] = useQueryState_default("cameraZoom");
  const [wireframe] = useQueryState_default("wireframe");
  const [shader] = useQueryState_default("shader");
  const [lightType] = useQueryState_default("lightType");
  const [brightness] = useQueryState_default("brightness");
  const [envPreset] = useQueryState_default("envPreset");
  const [grain] = useQueryState_default("grain");
  const [reflection] = useQueryState_default("reflection");
  const [zoomOut] = useQueryState_default("zoomOut");
  const [toggleAxis] = useQueryState_default("toggleAxis");
  const queryProps = {
    type,
    animate,
    uTime,
    uSpeed,
    uStrength,
    uDensity,
    uFrequency,
    uAmplitude,
    positionX,
    positionY,
    positionZ,
    rotationX,
    rotationY,
    rotationZ,
    color1,
    color2,
    color3,
    cAzimuthAngle,
    cPolarAngle,
    cDistance,
    cameraZoom,
    wireframe,
    shader,
    lightType,
    brightness,
    envPreset,
    grain,
    reflection,
    zoomOut,
    toggleAxis
  };
  if (control === "props")
    return __spreadValues(__spreadValues({}, queryProps), props);
  else if (control === "query")
    return urlString ? qs3.parse(formatUrlString(urlString), {
      parseNumbers: true,
      parseBooleans: true,
      arrayFormat: "index"
    }) : queryProps;
}

// src/Gradient/hooks/usePostProcessing/usePostProcessing.ts
import { useEffect as useEffect2, useMemo } from "react";

// src/Gradient/hooks/usePostProcessing/lib/pp/from-threejs/postprocessing/EffectComposer.js
import {
  BufferGeometry as BufferGeometry2,
  Clock,
  Float32BufferAttribute as Float32BufferAttribute2,
  LinearFilter,
  Mesh as Mesh2,
  OrthographicCamera as OrthographicCamera2,
  RGBAFormat,
  Vector2,
  WebGLRenderTarget
} from "three";

// src/Gradient/hooks/usePostProcessing/lib/pp/from-threejs/postprocessing/Pass.js
import {
  BufferGeometry,
  Float32BufferAttribute,
  OrthographicCamera,
  Mesh
} from "three";
var Pass = class {
  constructor() {
    this.enabled = true;
    this.needsSwap = true;
    this.clear = false;
    this.renderToScreen = false;
  }
  setSize() {
  }
  render() {
    console.error("THREE.Pass: .render() must be implemented in derived pass.");
  }
};
var _camera = new OrthographicCamera(-1, 1, 1, -1, 0, 1);
var _geometry = new BufferGeometry();
_geometry.setAttribute(
  "position",
  new Float32BufferAttribute([-1, 3, 0, -1, -1, 0, 3, -1, 0], 3)
);
_geometry.setAttribute("uv", new Float32BufferAttribute([0, 2, 0, 0, 2, 0], 2));
var FullScreenQuad = class {
  constructor(material) {
    this._mesh = new Mesh(_geometry, material);
  }
  dispose() {
    this._mesh.geometry.dispose();
  }
  render(renderer) {
    renderer.render(this._mesh, _camera);
  }
  get material() {
    return this._mesh.material;
  }
  set material(value) {
    this._mesh.material = value;
  }
};

// src/Gradient/hooks/usePostProcessing/lib/pp/from-threejs/postprocessing/MaskPass.js
var MaskPass = class extends Pass {
  constructor(scene, camera) {
    super();
    this.scene = scene;
    this.camera = camera;
    this.clear = true;
    this.needsSwap = false;
    this.inverse = false;
  }
  render(renderer, writeBuffer, readBuffer) {
    const context = renderer.getContext();
    const state = renderer.state;
    state.buffers.color.setMask(false);
    state.buffers.depth.setMask(false);
    state.buffers.color.setLocked(true);
    state.buffers.depth.setLocked(true);
    let writeValue, clearValue;
    if (this.inverse) {
      writeValue = 0;
      clearValue = 1;
    } else {
      writeValue = 1;
      clearValue = 0;
    }
    state.buffers.stencil.setTest(true);
    state.buffers.stencil.setOp(
      context.REPLACE,
      context.REPLACE,
      context.REPLACE
    );
    state.buffers.stencil.setFunc(context.ALWAYS, writeValue, 4294967295);
    state.buffers.stencil.setClear(clearValue);
    state.buffers.stencil.setLocked(true);
    renderer.setRenderTarget(readBuffer);
    if (this.clear)
      renderer.clear();
    renderer.render(this.scene, this.camera);
    renderer.setRenderTarget(writeBuffer);
    if (this.clear)
      renderer.clear();
    renderer.render(this.scene, this.camera);
    state.buffers.color.setLocked(false);
    state.buffers.depth.setLocked(false);
    state.buffers.stencil.setLocked(false);
    state.buffers.stencil.setFunc(context.EQUAL, 1, 4294967295);
    state.buffers.stencil.setOp(context.KEEP, context.KEEP, context.KEEP);
    state.buffers.stencil.setLocked(true);
  }
};
var ClearMaskPass = class extends Pass {
  constructor() {
    super();
    this.needsSwap = false;
  }
  render(renderer) {
    renderer.state.buffers.stencil.setLocked(false);
    renderer.state.buffers.stencil.setTest(false);
  }
};

// src/Gradient/hooks/usePostProcessing/lib/pp/from-threejs/postprocessing/ShaderPass.js
import { ShaderMaterial, UniformsUtils } from "three";
var ShaderPass = class extends Pass {
  constructor(shader, textureID) {
    super();
    this.textureID = textureID !== void 0 ? textureID : "tDiffuse";
    if (shader instanceof ShaderMaterial) {
      this.uniforms = shader.uniforms;
      this.material = shader;
    } else if (shader) {
      this.uniforms = UniformsUtils.clone(shader.uniforms);
      this.material = new ShaderMaterial({
        defines: Object.assign({}, shader.defines),
        uniforms: this.uniforms,
        vertexShader: shader.vertexShader,
        fragmentShader: shader.fragmentShader
      });
    }
    this.fsQuad = new FullScreenQuad(this.material);
  }
  render(renderer, writeBuffer, readBuffer) {
    if (this.uniforms[this.textureID]) {
      this.uniforms[this.textureID].value = readBuffer.texture;
    }
    this.fsQuad.material = this.material;
    if (this.renderToScreen) {
      renderer.setRenderTarget(null);
      this.fsQuad.render(renderer);
    } else {
      renderer.setRenderTarget(writeBuffer);
      if (this.clear)
        renderer.clear(
          renderer.autoClearColor,
          renderer.autoClearDepth,
          renderer.autoClearStencil
        );
      this.fsQuad.render(renderer);
    }
  }
};

// src/Gradient/hooks/usePostProcessing/lib/pp/from-threejs/shaders/CopyShader.js
var CopyShader = {
  uniforms: {
    tDiffuse: { value: null },
    opacity: { value: 1 }
  },
  vertexShader: `

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,
  fragmentShader: `

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;

		}`
};

// src/Gradient/hooks/usePostProcessing/lib/pp/from-threejs/postprocessing/EffectComposer.js
var EffectComposer = class {
  constructor(renderer, renderTarget) {
    this.renderer = renderer;
    if (renderTarget === void 0) {
      const parameters = {
        minFilter: LinearFilter,
        magFilter: LinearFilter,
        format: RGBAFormat
      };
      const size = renderer.getSize(new Vector2());
      this._pixelRatio = renderer.getPixelRatio();
      this._width = size.width;
      this._height = size.height;
      renderTarget = new WebGLRenderTarget(
        this._width * this._pixelRatio,
        this._height * this._pixelRatio,
        parameters
      );
      renderTarget.texture.name = "EffectComposer.rt1";
    } else {
      this._pixelRatio = 1;
      this._width = renderTarget.width;
      this._height = renderTarget.height;
    }
    this.renderTarget1 = renderTarget;
    this.renderTarget2 = renderTarget.clone();
    this.renderTarget2.texture.name = "EffectComposer.rt2";
    this.writeBuffer = this.renderTarget1;
    this.readBuffer = this.renderTarget2;
    this.renderToScreen = true;
    this.passes = [];
    if (CopyShader === void 0) {
      console.error("THREE.EffectComposer relies on CopyShader");
    }
    if (ShaderPass === void 0) {
      console.error("THREE.EffectComposer relies on ShaderPass");
    }
    this.copyPass = new ShaderPass(CopyShader);
    this.clock = new Clock();
  }
  swapBuffers() {
    const tmp = this.readBuffer;
    this.readBuffer = this.writeBuffer;
    this.writeBuffer = tmp;
  }
  addPass(pass) {
    this.passes.push(pass);
    pass.setSize(
      this._width * this._pixelRatio,
      this._height * this._pixelRatio
    );
  }
  insertPass(pass, index) {
    this.passes.splice(index, 0, pass);
    pass.setSize(
      this._width * this._pixelRatio,
      this._height * this._pixelRatio
    );
  }
  removePass(pass) {
    const index = this.passes.indexOf(pass);
    if (index !== -1) {
      this.passes.splice(index, 1);
    }
  }
  isLastEnabledPass(passIndex) {
    for (let i = passIndex + 1; i < this.passes.length; i++) {
      if (this.passes[i].enabled) {
        return false;
      }
    }
    return true;
  }
  render(deltaTime) {
    if (deltaTime === void 0) {
      deltaTime = this.clock.getDelta();
    }
    const currentRenderTarget = this.renderer.getRenderTarget();
    let maskActive = false;
    for (let i = 0, il = this.passes.length; i < il; i++) {
      const pass = this.passes[i];
      if (pass.enabled === false)
        continue;
      pass.renderToScreen = this.renderToScreen && this.isLastEnabledPass(i);
      pass.render(
        this.renderer,
        this.writeBuffer,
        this.readBuffer,
        deltaTime,
        maskActive
      );
      if (pass.needsSwap) {
        if (maskActive) {
          const context = this.renderer.getContext();
          const stencil = this.renderer.state.buffers.stencil;
          stencil.setFunc(context.NOTEQUAL, 1, 4294967295);
          this.copyPass.render(
            this.renderer,
            this.writeBuffer,
            this.readBuffer,
            deltaTime
          );
          stencil.setFunc(context.EQUAL, 1, 4294967295);
        }
        this.swapBuffers();
      }
      if (MaskPass !== void 0) {
        if (pass instanceof MaskPass) {
          maskActive = true;
        } else if (pass instanceof ClearMaskPass) {
          maskActive = false;
        }
      }
    }
    this.renderer.setRenderTarget(currentRenderTarget);
  }
  reset(renderTarget) {
    if (renderTarget === void 0) {
      const size = this.renderer.getSize(new Vector2());
      this._pixelRatio = this.renderer.getPixelRatio();
      this._width = size.width;
      this._height = size.height;
      renderTarget = this.renderTarget1.clone();
      renderTarget.setSize(
        this._width * this._pixelRatio,
        this._height * this._pixelRatio
      );
    }
    this.renderTarget1.dispose();
    this.renderTarget2.dispose();
    this.renderTarget1 = renderTarget;
    this.renderTarget2 = renderTarget.clone();
    this.writeBuffer = this.renderTarget1;
    this.readBuffer = this.renderTarget2;
  }
  setSize(width, height) {
    this._width = width;
    this._height = height;
    const effectiveWidth = this._width * this._pixelRatio;
    const effectiveHeight = this._height * this._pixelRatio;
    this.renderTarget1.setSize(effectiveWidth, effectiveHeight);
    this.renderTarget2.setSize(effectiveWidth, effectiveHeight);
    for (let i = 0; i < this.passes.length; i++) {
      this.passes[i].setSize(effectiveWidth, effectiveHeight);
    }
  }
  setPixelRatio(pixelRatio) {
    this._pixelRatio = pixelRatio;
    this.setSize(this._width, this._height);
  }
};
var _camera2 = new OrthographicCamera2(-1, 1, 1, -1, 0, 1);
var _geometry2 = new BufferGeometry2();
_geometry2.setAttribute(
  "position",
  new Float32BufferAttribute2([-1, 3, 0, -1, -1, 0, 3, -1, 0], 3)
);
_geometry2.setAttribute("uv", new Float32BufferAttribute2([0, 2, 0, 0, 2, 0], 2));

// src/Gradient/hooks/usePostProcessing/lib/pp/from-threejs/postprocessing/RenderPass.js
import { Color } from "three";
var RenderPass = class extends Pass {
  constructor(scene, camera, overrideMaterial, clearColor, clearAlpha) {
    super();
    this.scene = scene;
    this.camera = camera;
    this.overrideMaterial = overrideMaterial;
    this.clearColor = clearColor;
    this.clearAlpha = clearAlpha !== void 0 ? clearAlpha : 0;
    this.clear = true;
    this.clearDepth = false;
    this.needsSwap = false;
    this._oldClearColor = new Color();
  }
  render(renderer, writeBuffer, readBuffer) {
    const oldAutoClear = renderer.autoClear;
    renderer.autoClear = false;
    let oldClearAlpha, oldOverrideMaterial;
    if (this.overrideMaterial !== void 0) {
      oldOverrideMaterial = this.scene.overrideMaterial;
      this.scene.overrideMaterial = this.overrideMaterial;
    }
    if (this.clearColor) {
      renderer.getClearColor(this._oldClearColor);
      oldClearAlpha = renderer.getClearAlpha();
      renderer.setClearColor(this.clearColor, this.clearAlpha);
    }
    if (this.clearDepth) {
      renderer.clearDepth();
    }
    renderer.setRenderTarget(this.renderToScreen ? null : readBuffer);
    if (this.clear)
      renderer.clear(
        renderer.autoClearColor,
        renderer.autoClearDepth,
        renderer.autoClearStencil
      );
    renderer.render(this.scene, this.camera);
    if (this.clearColor) {
      renderer.setClearColor(this._oldClearColor, oldClearAlpha);
    }
    if (this.overrideMaterial !== void 0) {
      this.scene.overrideMaterial = oldOverrideMaterial;
    }
    renderer.autoClear = oldAutoClear;
  }
};

// src/Gradient/hooks/usePostProcessing/lib/pp/HalftonePass.ts
import { ShaderMaterial as ShaderMaterial2, UniformsUtils as UniformsUtils2 } from "three";

// src/Gradient/hooks/usePostProcessing/lib/pp/blending/BlendFunction.js
var BlendFunction = {
  SKIP: 0,
  ADD: 1,
  ALPHA: 2,
  AVERAGE: 3,
  COLOR_BURN: 4,
  COLOR_DODGE: 5,
  DARKEN: 6,
  DIFFERENCE: 7,
  EXCLUSION: 8,
  LIGHTEN: 9,
  MULTIPLY: 10,
  DIVIDE: 11,
  NEGATION: 12,
  NORMAL: 13,
  OVERLAY: 14,
  REFLECT: 15,
  SCREEN: 16,
  SOFT_LIGHT: 17,
  SUBTRACT: 18
};

// src/Gradient/hooks/usePostProcessing/lib/pp/blending/BlendMode.js
import { EventDispatcher, Uniform } from "three";

// src/Gradient/hooks/usePostProcessing/lib/pp/blending/glsl/add/shader.frag
var shader_default = "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return min(x+y,1.0)*opacity+x*(1.0-opacity);}";

// src/Gradient/hooks/usePostProcessing/lib/pp/blending/glsl/alpha/shader.frag
var shader_default2 = "vec3 blend(const in vec3 x,const in vec3 y,const in float opacity){return y*opacity+x*(1.0-opacity);}vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){float a=min(y.a,opacity);return vec4(blend(x.rgb,y.rgb,a),max(x.a,a));}";

// src/Gradient/hooks/usePostProcessing/lib/pp/blending/glsl/average/shader.frag
var shader_default3 = "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return(x+y)*0.5*opacity+x*(1.0-opacity);}";

// src/Gradient/hooks/usePostProcessing/lib/pp/blending/glsl/color-burn/shader.frag
var shader_default4 = "float blend(const in float x,const in float y){return(y==0.0)?y:max(1.0-(1.0-x)/y,0.0);}vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=vec4(blend(x.r,y.r),blend(x.g,y.g),blend(x.b,y.b),blend(x.a,y.a));return z*opacity+x*(1.0-opacity);}";

// src/Gradient/hooks/usePostProcessing/lib/pp/blending/glsl/color-dodge/shader.frag
var shader_default5 = "float blend(const in float x,const in float y){return(y==1.0)?y:min(x/(1.0-y),1.0);}vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=vec4(blend(x.r,y.r),blend(x.g,y.g),blend(x.b,y.b),blend(x.a,y.a));return z*opacity+x*(1.0-opacity);}";

// src/Gradient/hooks/usePostProcessing/lib/pp/blending/glsl/darken/shader.frag
var shader_default6 = "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return min(x,y)*opacity+x*(1.0-opacity);}";

// src/Gradient/hooks/usePostProcessing/lib/pp/blending/glsl/difference/shader.frag
var shader_default7 = "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return abs(x-y)*opacity+x*(1.0-opacity);}";

// src/Gradient/hooks/usePostProcessing/lib/pp/blending/glsl/divide/shader.frag
var shader_default8 = "float blend(const in float x,const in float y){return(y>0.0)?min(x/y,1.0):1.0;}vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=vec4(blend(x.r,y.r),blend(x.g,y.g),blend(x.b,y.b),blend(x.a,y.a));return z*opacity+x*(1.0-opacity);}";

// src/Gradient/hooks/usePostProcessing/lib/pp/blending/glsl/exclusion/shader.frag
var shader_default9 = "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return(x+y-2.0*x*y)*opacity+x*(1.0-opacity);}";

// src/Gradient/hooks/usePostProcessing/lib/pp/blending/glsl/lighten/shader.frag
var shader_default10 = "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return max(x,y)*opacity+x*(1.0-opacity);}";

// src/Gradient/hooks/usePostProcessing/lib/pp/blending/glsl/multiply/shader.frag
var shader_default11 = "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return x*y*opacity+x*(1.0-opacity);}";

// src/Gradient/hooks/usePostProcessing/lib/pp/blending/glsl/negation/shader.frag
var shader_default12 = "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return(1.0-abs(1.0-x-y))*opacity+x*(1.0-opacity);}";

// src/Gradient/hooks/usePostProcessing/lib/pp/blending/glsl/normal/shader.frag
var shader_default13 = "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return y*opacity+x*(1.0-opacity);}";

// src/Gradient/hooks/usePostProcessing/lib/pp/blending/glsl/overlay/shader.frag
var shader_default14 = "float blend(const in float x,const in float y){return(x<0.5)?(2.0*x*y):(1.0-2.0*(1.0-x)*(1.0-y));}vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=vec4(blend(x.r,y.r),blend(x.g,y.g),blend(x.b,y.b),blend(x.a,y.a));return z*opacity+x*(1.0-opacity);}";

// src/Gradient/hooks/usePostProcessing/lib/pp/blending/glsl/reflect/shader.frag
var shader_default15 = "float blend(const in float x,const in float y){return(y==1.0)?y:min(x*x/(1.0-y),1.0);}vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=vec4(blend(x.r,y.r),blend(x.g,y.g),blend(x.b,y.b),blend(x.a,y.a));return z*opacity+x*(1.0-opacity);}";

// src/Gradient/hooks/usePostProcessing/lib/pp/blending/glsl/screen/shader.frag
var shader_default16 = "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return(1.0-(1.0-x)*(1.0-y))*opacity+x*(1.0-opacity);}";

// src/Gradient/hooks/usePostProcessing/lib/pp/blending/glsl/soft-light/shader.frag
var shader_default17 = "float blend(const in float x,const in float y){return(y<0.5)?(2.0*x*y+x*x*(1.0-2.0*y)):(sqrt(x)*(2.0*y-1.0)+2.0*x*(1.0-y));}vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=vec4(blend(x.r,y.r),blend(x.g,y.g),blend(x.b,y.b),blend(x.a,y.a));return z*opacity+x*(1.0-opacity);}";

// src/Gradient/hooks/usePostProcessing/lib/pp/blending/glsl/subtract/shader.frag
var shader_default18 = "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return max(x+y-1.0,0.0)*opacity+x*(1.0-opacity);}";

// src/Gradient/hooks/usePostProcessing/lib/pp/blending/BlendMode.js
var blendFunctions = /* @__PURE__ */ new Map([
  [BlendFunction.SKIP, null],
  [BlendFunction.ADD, shader_default],
  [BlendFunction.ALPHA, shader_default2],
  [BlendFunction.AVERAGE, shader_default3],
  [BlendFunction.COLOR_BURN, shader_default4],
  [BlendFunction.COLOR_DODGE, shader_default5],
  [BlendFunction.DARKEN, shader_default6],
  [BlendFunction.DIFFERENCE, shader_default7],
  [BlendFunction.EXCLUSION, shader_default9],
  [BlendFunction.LIGHTEN, shader_default10],
  [BlendFunction.MULTIPLY, shader_default11],
  [BlendFunction.DIVIDE, shader_default8],
  [BlendFunction.NEGATION, shader_default12],
  [BlendFunction.NORMAL, shader_default13],
  [BlendFunction.OVERLAY, shader_default14],
  [BlendFunction.REFLECT, shader_default15],
  [BlendFunction.SCREEN, shader_default16],
  [BlendFunction.SOFT_LIGHT, shader_default17],
  [BlendFunction.SUBTRACT, shader_default18]
]);
var BlendMode = class extends EventDispatcher {
  constructor(blendFunction, opacity = 1) {
    super();
    this.blendFunction = blendFunction;
    this.opacity = new Uniform(opacity);
  }
  getBlendFunction() {
    return this.blendFunction;
  }
  setBlendFunction(blendFunction) {
    this.blendFunction = blendFunction;
    this.dispatchEvent({ type: "change" });
  }
  getShaderCode() {
    return blendFunctions.get(this.blendFunction);
  }
};

// src/Gradient/hooks/usePostProcessing/lib/pp/HalftoneShader.js
var HalftoneShader = {
  uniforms: {
    tDiffuse: { value: null },
    shape: { value: 1 },
    radius: { value: 2 },
    rotateR: { value: Math.PI / 12 * 1 },
    rotateG: { value: Math.PI / 12 * 2 },
    rotateB: { value: Math.PI / 12 * 3 },
    scatter: { value: 1 },
    width: { value: 20 },
    height: { value: 20 },
    blending: { value: 1 },
    blendingMode: { value: 1 },
    greyscale: { value: false },
    disable: { value: false }
  },
  vertexShader: `

		varying vec2 vUV;
		varying vec3 vPosition;

		void main() {

			vUV = uv;
			vPosition = position;

			gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);

		}`,
  fragmentShader: `

		#define SQRT2_MINUS_ONE 0.41421356
		#define SQRT2_HALF_MINUS_ONE 0.20710678
		#define PI2 6.28318531
		#define SHAPE_DOT 1
		#define SHAPE_ELLIPSE 2
		#define SHAPE_LINE 3
		#define SHAPE_SQUARE 4
		#define BLENDING_LINEAR 1
		#define BLENDING_MULTIPLY 2
		#define BLENDING_ADD 3
		#define BLENDING_LIGHTER 4
		#define BLENDING_DARKER 5
		uniform sampler2D tDiffuse;
		uniform float radius;
		uniform float rotateR;
		uniform float rotateG;
		uniform float rotateB;
		uniform float scatter;
		uniform float width;
		uniform float height;
		uniform int shape;
		uniform bool disable;
		uniform float blending;
		uniform int blendingMode;
		varying vec2 vUV;
		varying vec3 vPosition;
		uniform bool greyscale;
		const int samples = 8;

		float blend( float a, float b, float t ) {

		// linear blend
			return a * ( 1.0 - t ) + b * t;

		}

		float hypot( float x, float y ) {

		// vector magnitude
			return sqrt( x * x + y * y );

		}

		float rand( vec2 seed ){

		// get pseudo-random number
			return fract( sin( dot( seed.xy, vec2( 12.9898, 78.233 ) ) ) * 43758.5453 );

		}

		float distanceToDotRadius( float channel, vec2 coord, vec2 normal, vec2 p, float angle, float rad_max ) {

		// apply shape-specific transforms
			float dist = hypot( coord.x - p.x, coord.y - p.y );
			float rad = channel;

			if ( shape == SHAPE_DOT ) {

				rad = pow( abs( rad ), 1.125 ) * rad_max;

			} else if ( shape == SHAPE_ELLIPSE ) {

				rad = pow( abs( rad ), 1.125 ) * rad_max;

				if ( dist != 0.0 ) {
					float dot_p = abs( ( p.x - coord.x ) / dist * normal.x + ( p.y - coord.y ) / dist * normal.y );
					dist = ( dist * ( 1.0 - SQRT2_HALF_MINUS_ONE ) ) + dot_p * dist * SQRT2_MINUS_ONE;
				}

			} else if ( shape == SHAPE_LINE ) {

				rad = pow( abs( rad ), 1.5) * rad_max;
				float dot_p = ( p.x - coord.x ) * normal.x + ( p.y - coord.y ) * normal.y;
				dist = hypot( normal.x * dot_p, normal.y * dot_p );

			} else if ( shape == SHAPE_SQUARE ) {

				float theta = atan( p.y - coord.y, p.x - coord.x ) - angle;
				float sin_t = abs( sin( theta ) );
				float cos_t = abs( cos( theta ) );
				rad = pow( abs( rad ), 1.4 );
				rad = rad_max * ( rad + ( ( sin_t > cos_t ) ? rad - sin_t * rad : rad - cos_t * rad ) );

			}

			return rad - dist;

		}

		struct Cell {

		// grid sample positions
			vec2 normal;
			vec2 p1;
			vec2 p2;
			vec2 p3;
			vec2 p4;
			float samp2;
			float samp1;
			float samp3;
			float samp4;

		};

		vec4 getSample( vec2 point ) {

		// multi-sampled point
			vec4 tex = texture2D( tDiffuse, vec2( point.x / width, point.y / height ) );
			float base = rand( vec2( floor( point.x ), floor( point.y ) ) ) * PI2;
			float step = PI2 / float( samples );
			// float dist = radius * 0.66;
			float dist = radius * 0.0;

			for ( int i = 0; i < samples; ++i ) {

				float r = base + step * float( i );
				vec2 coord = point + vec2( cos( r ) * dist, sin( r ) * dist );
				tex += texture2D( tDiffuse, vec2( coord.x / width, coord.y / height ) );

			}

			tex /= float( samples ) + 1.0;
			return tex;

		}

		float getDotColour( Cell c, vec2 p, int channel, float angle, float aa ) {

		// get colour for given point
			float dist_c_1, dist_c_2, dist_c_3, dist_c_4, res;

			if ( channel == 0 ) {

				c.samp1 = getSample( c.p1 ).r;
				c.samp2 = getSample( c.p2 ).r;
				c.samp3 = getSample( c.p3 ).r;
				c.samp4 = getSample( c.p4 ).r;

			} else if (channel == 1) {

				c.samp1 = getSample( c.p1 ).g;
				c.samp2 = getSample( c.p2 ).g;
				c.samp3 = getSample( c.p3 ).g;
				c.samp4 = getSample( c.p4 ).g;

			} else {

				c.samp1 = getSample( c.p1 ).b;
				c.samp3 = getSample( c.p3 ).b;
				c.samp2 = getSample( c.p2 ).b;
				c.samp4 = getSample( c.p4 ).b;

			}

			dist_c_1 = distanceToDotRadius( c.samp1, c.p1, c.normal, p, angle, radius );
			dist_c_2 = distanceToDotRadius( c.samp2, c.p2, c.normal, p, angle, radius );
			dist_c_3 = distanceToDotRadius( c.samp3, c.p3, c.normal, p, angle, radius );
			dist_c_4 = distanceToDotRadius( c.samp4, c.p4, c.normal, p, angle, radius );
			res = ( dist_c_1 > 0.0 ) ? clamp( dist_c_1 / aa, 0.0, 1.0 ) : 0.0;
			// res = 0.0;
			res += ( dist_c_2 > 0.0 ) ? clamp( dist_c_2 / aa, 0.0, 1.0 ) : 0.0;
			res += ( dist_c_3 > 0.0 ) ? clamp( dist_c_3 / aa, 0.0, 1.0 ) : 0.0;
			res += ( dist_c_4 > 0.0 ) ? clamp( dist_c_4 / aa, 0.0, 1.0 ) : 0.0;
			res = clamp( res, 0.0, 1.0 );

			return res;
			// return 2

		}

		Cell getReferenceCell( vec2 p, vec2 origin, float grid_angle, float step ) {

		// get containing cell
			Cell c;

		// calc grid
			vec2 n = vec2( cos( grid_angle ), sin( grid_angle ) );
			float threshold = step * 0.5;
			float dot_normal = n.x * ( p.x - origin.x ) + n.y * ( p.y - origin.y );
			float dot_line = -n.y * ( p.x - origin.x ) + n.x * ( p.y - origin.y );
			vec2 offset = vec2( n.x * dot_normal, n.y * dot_normal );
			float offset_normal = mod( hypot( offset.x, offset.y ), step );
			float normal_dir = ( dot_normal < 0.0 ) ? 1.0 : -1.0;
			float normal_scale = ( ( offset_normal < threshold ) ? -offset_normal : step - offset_normal ) * normal_dir;
			float offset_line = mod( hypot( ( p.x - offset.x ) - origin.x, ( p.y - offset.y ) - origin.y ), step );
			float line_dir = ( dot_line < 0.0 ) ? 1.0 : -1.0;
			float line_scale = ( ( offset_line < threshold ) ? -offset_line : step - offset_line ) * line_dir;

		// get closest corner
			c.normal = n;
			c.p1.x = p.x - n.x * normal_scale + n.y * line_scale;
			c.p1.y = p.y - n.y * normal_scale - n.x * line_scale;

		// scatter
			if ( scatter != 0.0 ) {

				float off_mag = scatter * threshold * 0.5;
				float off_angle = rand( vec2( floor( c.p1.x ), floor( c.p1.y ) ) ) * PI2;
				c.p1.x += cos( off_angle ) * off_mag;
				c.p1.y += sin( off_angle ) * off_mag;

			}

		// find corners
			float normal_step = normal_dir * ( ( offset_normal < threshold ) ? step : -step );
			float line_step = line_dir * ( ( offset_line < threshold ) ? step : -step );
			c.p2.x = c.p1.x - n.x * normal_step;
			c.p2.y = c.p1.y - n.y * normal_step;
			c.p3.x = c.p1.x + n.y * line_step;
			c.p3.y = c.p1.y - n.x * line_step;
			c.p4.x = c.p1.x - n.x * normal_step + n.y * line_step;
			c.p4.y = c.p1.y - n.y * normal_step - n.x * line_step;

			return c;

		}

		float blendColour( float a, float b, float t ) {

		// blend colours
			if ( blendingMode == BLENDING_LINEAR ) {
				return blend( a, b, 1.0 - t );
			} else if ( blendingMode == BLENDING_ADD ) {
				return blend( a, min( 1.0, a + b ), t );
			} else if ( blendingMode == BLENDING_MULTIPLY ) {
				return blend( a, max( 0.0, a * b ), t );
			} else if ( blendingMode == BLENDING_LIGHTER ) {
				return blend( a, max( a, b ), t );
			} else if ( blendingMode == BLENDING_DARKER ) {
				return blend( a, min( a, b ), t );
			} else {
				return blend( a, b, 1.0 - t );
			}

		}

		void main() {

			if ( ! disable ) {

		// setup
				vec2 p = vec2( vUV.x * width, vUV.y * height ) - vec2(vPosition.x, vPosition.y) * 3.0; // - position values to remove black borders.
				vec2 origin = vec2( 0, 0 );
				float aa = ( radius < 2.5 ) ? radius * 0.5 : 1.25;
				// float aa = 0.0;

		// get channel samples
				Cell cell_r = getReferenceCell( p, origin, rotateR, radius );
				Cell cell_g = getReferenceCell( p, origin, rotateG, radius );
				Cell cell_b = getReferenceCell( p, origin, rotateB, radius );
				float r = getDotColour( cell_r, p, 0, rotateR, aa );
				float g = getDotColour( cell_g, p, 1, rotateG, aa );
				float b = getDotColour( cell_b, p, 2, rotateB, aa );

		// blend with original
				vec4 colour = texture2D( tDiffuse, vUV );
				
				// add masking before blendColour
				if (colour.r == 0.0) {
					r = 0.0;
				} else {
					r = blendColour( r, colour.r, blending );
				}

				if (colour.g == 0.0) {
					g = 0.0;
				} else {
					g = blendColour( g, colour.g, blending );
				}

				if (colour.b == 0.0) {
					b = 0.0;
				} else {
					b = blendColour( b, colour.b, blending );
				}
				
				
				

				if ( greyscale ) {
					r = g = b = (r + b + g) / 3.0;
				}

				// add alpha channel to each r, g, b colors
				vec4 vR;
				vec4 vG;
				vec4 vB;
	
				// apply transparent to outside of mesh
				if (r == 0.0 && colour.r == 0.0) {
					vR = vec4( 0, 0, 0, 0 );
				} else {
					vR = vec4( r, 0, 0, 1 );
				}
	
				if (g == 0.0 && colour.g == 0.0) {
					vG = vec4( 0, 0, 0, 0 );
				} else {
					vG = vec4( 0, g, 0, 1 );
				}
	
				if (b == 0.0 && colour.b == 0.0) {
					vB = vec4( 0, 0, 0, 0 );
				} else {
					vB = vec4( 0, 0, b, 1 );
				}

				// gl_FragColor = vec4( r, g, b, 1.0 );
				gl_FragColor = vR + vG + vB;

			} else {

				gl_FragColor = texture2D( tDiffuse, vUV );

			}

		}`
};

// src/Gradient/hooks/usePostProcessing/lib/pp/Pass.js
import {
  BufferGeometry as BufferGeometry3,
  Float32BufferAttribute as Float32BufferAttribute3,
  OrthographicCamera as OrthographicCamera3,
  Mesh as Mesh3
} from "three";
var Pass2 = class {
  constructor() {
    this.enabled = true;
    this.needsSwap = true;
    this.clear = false;
    this.renderToScreen = false;
  }
  setSize() {
  }
  render() {
    console.error("THREE.Pass: .render() must be implemented in derived pass.");
  }
};
var _camera3 = new OrthographicCamera3(-1, 1, 1, -1, 0, 1);
var _geometry3 = new BufferGeometry3();
_geometry3.setAttribute(
  "position",
  new Float32BufferAttribute3([-1, 3, 0, -1, -1, 0, 3, -1, 0], 3)
);
_geometry3.setAttribute("uv", new Float32BufferAttribute3([0, 2, 0, 0, 2, 0], 2));
var FullScreenQuad2 = class {
  constructor(material) {
    this._mesh = new Mesh3(_geometry3, material);
  }
  dispose() {
    this._mesh.geometry.dispose();
  }
  render(renderer) {
    renderer.render(this._mesh, _camera3);
  }
  get material() {
    return this._mesh.material;
  }
  set material(value) {
    this._mesh.material = value;
  }
};

// src/Gradient/hooks/usePostProcessing/lib/pp/HalftonePass.ts
var usePassedMeshSize = true;
var HalftonePass = class extends Pass2 {
  constructor(width, height, params) {
    super();
    if (HalftoneShader === void 0) {
      console.error("THREE.HalftonePass requires HalftoneShader");
    }
    this.uniforms = UniformsUtils2.clone(HalftoneShader.uniforms);
    this.material = new ShaderMaterial2({
      uniforms: this.uniforms,
      fragmentShader: HalftoneShader.fragmentShader,
      vertexShader: HalftoneShader.vertexShader
    });
    if (usePassedMeshSize) {
      this.uniforms.width.value = width;
      this.uniforms.height.value = height;
    }
    this.uniforms.disable.value = params["disable"];
    this.fsQuad = new FullScreenQuad2(this.material);
    this.blendMode = new BlendMode(BlendFunction.SCREEN);
    this.extensions = null;
  }
  render(renderer, writeBuffer, readBuffer) {
    this.material.uniforms["tDiffuse"].value = readBuffer.texture;
    if (this.renderToScreen) {
      renderer.setRenderTarget(null);
      this.fsQuad.render(renderer);
    } else {
      renderer.setRenderTarget(writeBuffer);
      if (this.clear)
        renderer.clear();
      this.fsQuad.render(renderer);
    }
  }
  setSize(width, height) {
    if (usePassedMeshSize) {
      this.uniforms.width.value = width;
      this.uniforms.height.value = height;
    }
  }
  initialize(renderer, alpha, frameBufferType) {
  }
  addEventListener() {
  }
  getAttributes() {
    return this.attributes;
  }
  getFragmentShader() {
    return HalftoneShader.fragmentShader;
  }
  getVertexShader() {
    return HalftoneShader.vertexShader;
  }
  update(renderer, inputBuffer, deltaTime) {
  }
};

// src/Gradient/hooks/usePostProcessing/usePostProcessing.ts
import { useThree, useFrame } from "@react-three/fiber";
function usePostProcessing(disable) {
  const { gl, scene, camera, size } = useThree();
  const composer = useMemo(() => {
    const effectComposer = new EffectComposer(gl);
    effectComposer.addPass(new RenderPass(scene, camera));
    const halftoneParams = {
      shape: 1,
      radius: 2,
      rotateR: Math.PI / 12,
      rotateB: Math.PI / 12 * 2,
      rotateG: Math.PI / 12 * 3,
      scatter: 1,
      blending: 1,
      blendingMode: 1,
      greyscale: false,
      disable
    };
    const halftonePass = new HalftonePass(
      size.width,
      size.height,
      halftoneParams
    );
    effectComposer.addPass(halftonePass);
    return effectComposer;
  }, [gl, scene, camera, size, disable]);
  useEffect2(() => composer == null ? void 0 : composer.setSize(size.width, size.height), [composer, size]);
  useFrame(
    (_, delta) => void (gl.autoClear = true, composer.render(delta)),
    1
  );
}

// src/Gradient/comps/Axis/GizmoHelper.tsx
import * as React4 from "react";
import { createPortal, useFrame as useFrame3, useThree as useThree5 } from "@react-three/fiber";
import {
  Matrix4,
  Object3D,
  Quaternion,
  Scene,
  Vector3
} from "three";

// src/Gradient/comps/Axis/OrthographicCamera.tsx
import * as React2 from "react";
import { useThree as useThree3, useFrame as useFrame2 } from "@react-three/fiber";

// ../../node_modules/.pnpm/react-merge-refs@1.1.0/node_modules/react-merge-refs/dist/react-merge-refs.esm.js
function mergeRefs(refs) {
  return function(value) {
    refs.forEach(function(ref) {
      if (typeof ref === "function") {
        ref(value);
      } else if (ref != null) {
        ref.current = value;
      }
    });
  };
}
var react_merge_refs_esm_default = mergeRefs;

// src/Gradient/comps/Axis/useFBO.tsx
import * as React from "react";
import * as THREE from "three";
import { useThree as useThree2 } from "@react-three/fiber";
function useFBO(width, height, settings) {
  const { gl, size, viewport } = useThree2();
  const _width = typeof width === "number" ? width : size.width * viewport.dpr;
  const _height = typeof height === "number" ? height : size.height * viewport.dpr;
  const _settings = (typeof width === "number" ? settings : width) || {};
  const _a = _settings, { samples } = _a, targetSettings = __objRest(_a, ["samples"]);
  const target2 = React.useMemo(() => {
    let target3;
    target3 = new THREE.WebGLRenderTarget(_width, _height, __spreadValues({
      minFilter: THREE.LinearFilter,
      magFilter: THREE.LinearFilter,
      encoding: gl.outputEncoding,
      type: THREE.HalfFloatType
    }, targetSettings));
    target3.samples = samples;
    return target3;
  }, []);
  React.useLayoutEffect(() => {
    target2.setSize(_width, _height);
    if (samples)
      target2.samples = samples;
  }, [samples, target2, _width, _height]);
  React.useEffect(() => {
    return () => target2.dispose();
  }, []);
  return target2;
}

// src/Gradient/comps/Axis/OrthographicCamera.tsx
import { Fragment as Fragment3, jsx as jsx3, jsxs as jsxs2 } from "react/jsx-runtime";
var isFunction = (node) => typeof node === "function";
var OrthographicCamera4 = React2.forwardRef(
  (_a, ref) => {
    var _b = _a, {
      envMap,
      resolution = 256,
      frames = Infinity,
      children,
      makeDefault
    } = _b, props = __objRest(_b, [
      "envMap",
      "resolution",
      "frames",
      "children",
      "makeDefault"
    ]);
    const set = useThree3(({ set: set2 }) => set2);
    const camera = useThree3(({ camera: camera2 }) => camera2);
    const size = useThree3(({ size: size2 }) => size2);
    const cameraRef = React2.useRef(null);
    const groupRef = React2.useRef(null);
    const fbo = useFBO(resolution);
    React2.useLayoutEffect(() => {
      if (!props.manual) {
        cameraRef.current.updateProjectionMatrix();
      }
    }, [size, props]);
    React2.useLayoutEffect(() => {
      cameraRef.current.updateProjectionMatrix();
    });
    React2.useLayoutEffect(() => {
      if (makeDefault) {
        const oldCam = camera;
        set(() => ({ camera: cameraRef.current }));
        return () => set(() => ({ camera: oldCam }));
      }
    }, [cameraRef, makeDefault, set]);
    let count = 0;
    let oldEnvMap = null;
    const functional = isFunction(children);
    useFrame2((state) => {
      if (functional && (frames === Infinity || count < frames)) {
        groupRef.current.visible = false;
        state.gl.setRenderTarget(fbo);
        oldEnvMap = state.scene.background;
        if (envMap)
          state.scene.background = envMap;
        state.gl.render(state.scene, cameraRef.current);
        state.scene.background = oldEnvMap;
        state.gl.setRenderTarget(null);
        groupRef.current.visible = true;
        count++;
      }
    });
    return /* @__PURE__ */ jsxs2(Fragment3, { children: [
      /* @__PURE__ */ jsx3(
        "orthographicCamera",
        __spreadProps(__spreadValues({
          left: size.width / -2,
          right: size.width / 2,
          top: size.height / 2,
          bottom: size.height / -2,
          ref: react_merge_refs_esm_default([cameraRef, ref])
        }, props), {
          children: !functional && children
        })
      ),
      /* @__PURE__ */ jsx3("group", { ref: groupRef, children: functional && children(fbo.texture) })
    ] });
  }
);

// src/Gradient/comps/Axis/useCamera.tsx
import * as React3 from "react";
import { Raycaster, Camera } from "three";
import { useThree as useThree4, applyProps } from "@react-three/fiber";
function useCamera(camera, props) {
  const pointer = useThree4((state) => state.pointer);
  const [raycast] = React3.useState(() => {
    const raycaster = new Raycaster();
    if (props)
      applyProps(raycaster, props, {});
    return function(_, intersects) {
      raycaster.setFromCamera(
        pointer,
        camera instanceof Camera ? camera : camera.current
      );
      const rc = this.constructor.prototype.raycast.bind(this);
      if (rc)
        rc(raycaster, intersects);
    };
  });
  return raycast;
}

// src/Gradient/comps/Axis/GizmoHelper.tsx
import { jsx as jsx4, jsxs as jsxs3 } from "react/jsx-runtime";
var Context = React4.createContext(
  {}
);
var useGizmoContext = () => {
  return React4.useContext(Context);
};
var turnRate = 2 * Math.PI;
var dummy = new Object3D();
var matrix = new Matrix4();
var [q1, q2] = [new Quaternion(), new Quaternion()];
var target = new Vector3();
var targetPosition = new Vector3();
var isOrbitControls = (controls) => {
  return "minPolarAngle" in controls;
};
var GizmoHelper = ({
  alignment = "bottom-right",
  margin = [80, 80],
  renderPriority = 0,
  autoClear = true,
  onUpdate,
  onTarget,
  children: GizmoHelperComponent
}) => {
  const size = useThree5(({ size: size2 }) => size2);
  const mainCamera = useThree5(({ camera }) => camera);
  const defaultControls = useThree5(({ controls }) => controls);
  const gl = useThree5(({ gl: gl2 }) => gl2);
  const scene = useThree5(({ scene: scene2 }) => scene2);
  const invalidate = useThree5(({ invalidate: invalidate2 }) => invalidate2);
  const backgroundRef = React4.useRef();
  const gizmoRef = React4.useRef();
  const virtualCam = React4.useRef(null);
  const [virtualScene] = React4.useState(() => new Scene());
  const animating = React4.useRef(false);
  const radius = React4.useRef(0);
  const focusPoint = React4.useRef(new Vector3(0, 0, 0));
  const defaultUp = React4.useRef(new Vector3(0, 0, 0));
  React4.useEffect(() => {
    defaultUp.current.copy(mainCamera.up);
  }, [mainCamera]);
  const tweenCamera = React4.useCallback(
    (direction) => {
      animating.current = true;
      if (defaultControls || onTarget)
        focusPoint.current = (defaultControls == null ? void 0 : defaultControls.target) || (onTarget == null ? void 0 : onTarget());
      radius.current = mainCamera.position.distanceTo(target);
      q1.copy(mainCamera.quaternion);
      targetPosition.copy(direction).multiplyScalar(radius.current).add(target);
      dummy.lookAt(targetPosition);
      q2.copy(dummy.quaternion);
      invalidate();
    },
    [defaultControls, mainCamera, onTarget, invalidate]
  );
  React4.useEffect(() => {
    if (scene.background) {
      backgroundRef.current = scene.background;
      scene.background = null;
      virtualScene.background = backgroundRef.current;
    }
    return () => {
      if (backgroundRef.current)
        scene.background = backgroundRef.current;
    };
  }, []);
  useFrame3((_, delta) => {
    var _a;
    if (virtualCam.current && gizmoRef.current) {
      if (animating.current) {
        if (q1.angleTo(q2) < 0.01) {
          animating.current = false;
          if (isOrbitControls(defaultControls)) {
            mainCamera.up.copy(defaultUp.current);
          }
        } else {
          const step = delta * turnRate;
          q1.rotateTowards(q2, step);
          mainCamera.position.set(0, 0, 1).applyQuaternion(q1).multiplyScalar(radius.current).add(focusPoint.current);
          mainCamera.up.set(0, 1, 0).applyQuaternion(q1).normalize();
          mainCamera.quaternion.copy(q1);
          if (onUpdate)
            onUpdate();
          else if (defaultControls)
            defaultControls.update();
          invalidate();
        }
      }
      matrix.copy(mainCamera.matrix).invert();
      (_a = gizmoRef.current) == null ? void 0 : _a.quaternion.setFromRotationMatrix(matrix);
      if (autoClear)
        gl.autoClear = false;
      gl.clearDepth();
      gl.render(virtualScene, virtualCam.current);
    }
  }, renderPriority);
  const raycast = useCamera(virtualCam);
  const gizmoHelperContext = React4.useMemo(
    () => ({ tweenCamera, raycast }),
    [tweenCamera]
  );
  const [marginX, marginY] = margin;
  const x = alignment.endsWith("-center") ? 0 : alignment.endsWith("-left") ? -size.width / 2 + marginX : size.width / 2 - marginX;
  const y = alignment.startsWith("center-") ? 0 : alignment.startsWith("top-") ? size.height / 2 - marginY : -size.height / 2 + marginY;
  return createPortal(
    /* @__PURE__ */ jsxs3(Context.Provider, { value: gizmoHelperContext, children: [
      /* @__PURE__ */ jsx4(OrthographicCamera4, { ref: virtualCam, position: [0, 0, 200] }),
      /* @__PURE__ */ jsx4("group", { ref: gizmoRef, position: [x, y, 0], children: GizmoHelperComponent })
    ] }),
    virtualScene
  );
};

// src/Gradient/comps/Axis/GizmoViewport.tsx
import * as React5 from "react";
import { useThree as useThree6 } from "@react-three/fiber";
import { CanvasTexture } from "three";
import { Fragment as Fragment4, jsx as jsx5, jsxs as jsxs4 } from "react/jsx-runtime";
function Axis({ scale = [0.8, 0.05, 0.05], color, rotation }) {
  return /* @__PURE__ */ jsx5("group", { rotation, children: /* @__PURE__ */ jsxs4("mesh", { position: [0.4, 0, 0], children: [
    /* @__PURE__ */ jsx5("boxGeometry", { args: scale }),
    /* @__PURE__ */ jsx5("meshBasicMaterial", { color, toneMapped: false })
  ] }) });
}
function AxisHead(_a) {
  var _b = _a, {
    onClick,
    font,
    disabled,
    arcStyle,
    label,
    labelColor,
    axisHeadScale = 1
  } = _b, props = __objRest(_b, [
    "onClick",
    "font",
    "disabled",
    "arcStyle",
    "label",
    "labelColor",
    "axisHeadScale"
  ]);
  const gl = useThree6((state) => state.gl);
  const texture = React5.useMemo(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 64;
    canvas.height = 64;
    const context = canvas.getContext("2d");
    context.beginPath();
    context.arc(32, 32, 16, 0, 2 * Math.PI);
    context.closePath();
    context.fillStyle = arcStyle;
    context.fill();
    if (label) {
      context.font = font;
      context.textAlign = "center";
      context.fillStyle = labelColor;
      context.fillText(label, 32, 41);
    }
    return new CanvasTexture(canvas);
  }, [arcStyle, label, labelColor, font]);
  const [active, setActive] = React5.useState(false);
  const scale = (label ? 1 : 0.75) * (active ? 1.2 : 1) * axisHeadScale;
  const handlePointerOver = (e) => {
    e.stopPropagation();
    setActive(true);
  };
  const handlePointerOut = (e) => {
    e.stopPropagation();
    setActive(false);
  };
  return /* @__PURE__ */ jsx5(
    "sprite",
    __spreadProps(__spreadValues({
      scale,
      onPointerOver: !disabled ? handlePointerOver : void 0,
      onPointerOut: !disabled ? onClick || handlePointerOut : void 0
    }, props), {
      children: /* @__PURE__ */ jsx5(
        "spriteMaterial",
        {
          map: texture,
          "map-encoding": gl.outputEncoding,
          "map-anisotropy": gl.capabilities.getMaxAnisotropy() || 1,
          alphaTest: 0.3,
          opacity: label ? 1 : 0.75,
          toneMapped: false
        }
      )
    })
  );
}
var GizmoViewport = (_a) => {
  var _b = _a, {
    hideNegativeAxes,
    hideAxisHeads,
    disabled,
    font = "18px Inter var, Arial, sans-serif",
    axisColors = ["#ff2060", "#20df80", "#2080ff"],
    axisHeadScale = 1,
    axisScale,
    labels = ["X", "Y", "Z"],
    labelColor = "#000",
    onClick
  } = _b, props = __objRest(_b, [
    "hideNegativeAxes",
    "hideAxisHeads",
    "disabled",
    "font",
    "axisColors",
    "axisHeadScale",
    "axisScale",
    "labels",
    "labelColor",
    "onClick"
  ]);
  const [colorX, colorY, colorZ] = axisColors;
  const { tweenCamera, raycast } = useGizmoContext();
  const axisHeadProps = {
    font,
    disabled,
    labelColor,
    raycast,
    onClick,
    axisHeadScale,
    onPointerDown: !disabled ? (e) => {
      tweenCamera(e.object.position);
      e.stopPropagation();
    } : void 0
  };
  return /* @__PURE__ */ jsxs4("group", __spreadProps(__spreadValues({ scale: 40 }, props), { children: [
    /* @__PURE__ */ jsx5(Axis, { color: colorX, rotation: [0, 0, 0], scale: axisScale }),
    /* @__PURE__ */ jsx5(Axis, { color: colorY, rotation: [0, 0, Math.PI / 2], scale: axisScale }),
    /* @__PURE__ */ jsx5(Axis, { color: colorZ, rotation: [0, -Math.PI / 2, 0], scale: axisScale }),
    !hideAxisHeads && /* @__PURE__ */ jsxs4(Fragment4, { children: [
      /* @__PURE__ */ jsx5(
        AxisHead,
        __spreadValues({
          arcStyle: colorX,
          position: [1, 0, 0],
          label: labels[0]
        }, axisHeadProps)
      ),
      /* @__PURE__ */ jsx5(
        AxisHead,
        __spreadValues({
          arcStyle: colorY,
          position: [0, 1, 0],
          label: labels[1]
        }, axisHeadProps)
      ),
      /* @__PURE__ */ jsx5(
        AxisHead,
        __spreadValues({
          arcStyle: colorZ,
          position: [0, 0, 1],
          label: labels[2]
        }, axisHeadProps)
      ),
      !hideNegativeAxes && /* @__PURE__ */ jsxs4(Fragment4, { children: [
        /* @__PURE__ */ jsx5(
          AxisHead,
          __spreadValues({
            arcStyle: colorX,
            position: [-1, 0, 0]
          }, axisHeadProps)
        ),
        /* @__PURE__ */ jsx5(
          AxisHead,
          __spreadValues({
            arcStyle: colorY,
            position: [0, -1, 0]
          }, axisHeadProps)
        ),
        /* @__PURE__ */ jsx5(
          AxisHead,
          __spreadValues({
            arcStyle: colorZ,
            position: [0, 0, -1]
          }, axisHeadProps)
        )
      ] })
    ] }),
    /* @__PURE__ */ jsx5("ambientLight", { intensity: 0.5 }),
    /* @__PURE__ */ jsx5("pointLight", { position: [10, 10, 10], intensity: 0.5 })
  ] }));
};

// src/Gradient/comps/Axis/Axis.tsx
import { Fragment as Fragment5, jsx as jsx6 } from "react/jsx-runtime";
function Axis2({ isFigmaPlugin }) {
  return /* @__PURE__ */ jsx6(Fragment5, { children: /* @__PURE__ */ jsx6(
    GizmoHelper,
    {
      alignment: "bottom-right",
      margin: isFigmaPlugin ? [25, 25] : [65, 110],
      renderPriority: 2,
      children: /* @__PURE__ */ jsx6(
        GizmoViewport,
        {
          axisColors: ["#FF430A", "#FF430A", "#FF430A"],
          labelColor: "white",
          hideNegativeAxes: true,
          axisHeadScale: 0.8
        }
      )
    }
  ) });
}

// ../../node_modules/.pnpm/camera-controls@1.37.4_three@0.146.0/node_modules/camera-controls/dist/camera-controls.module.js
var MOUSE_BUTTON = {
  LEFT: 1,
  RIGHT: 2,
  MIDDLE: 4
};
var ACTION = Object.freeze({
  NONE: 0,
  ROTATE: 1,
  TRUCK: 2,
  OFFSET: 4,
  DOLLY: 8,
  ZOOM: 16,
  TOUCH_ROTATE: 32,
  TOUCH_TRUCK: 64,
  TOUCH_OFFSET: 128,
  TOUCH_DOLLY: 256,
  TOUCH_ZOOM: 512,
  TOUCH_DOLLY_TRUCK: 1024,
  TOUCH_DOLLY_OFFSET: 2048,
  TOUCH_DOLLY_ROTATE: 4096,
  TOUCH_ZOOM_TRUCK: 8192,
  TOUCH_ZOOM_OFFSET: 16384,
  TOUCH_ZOOM_ROTATE: 32768
});
function isPerspectiveCamera(camera) {
  return camera.isPerspectiveCamera;
}
function isOrthographicCamera(camera) {
  return camera.isOrthographicCamera;
}
var PI_2 = Math.PI * 2;
var PI_HALF = Math.PI / 2;
var EPSILON = 1e-5;
function approxZero(number, error = EPSILON) {
  return Math.abs(number) < error;
}
function approxEquals(a, b, error = EPSILON) {
  return approxZero(a - b, error);
}
function roundToStep(value, step) {
  return Math.round(value / step) * step;
}
function infinityToMaxNumber(value) {
  if (isFinite(value))
    return value;
  if (value < 0)
    return -Number.MAX_VALUE;
  return Number.MAX_VALUE;
}
function maxNumberToInfinity(value) {
  if (Math.abs(value) < Number.MAX_VALUE)
    return value;
  return value * Infinity;
}
function extractClientCoordFromEvent(pointers, out) {
  out.set(0, 0);
  pointers.forEach((pointer) => {
    out.x += pointer.clientX;
    out.y += pointer.clientY;
  });
  out.x /= pointers.length;
  out.y /= pointers.length;
}
function notSupportedInOrthographicCamera(camera, message) {
  if (isOrthographicCamera(camera)) {
    console.warn(`${message} is not supported in OrthographicCamera`);
    return true;
  }
  return false;
}
function quatInvertCompat(target2) {
  if (target2.invert) {
    target2.invert();
  } else {
    target2.inverse();
  }
  return target2;
}
var EventDispatcher2 = class {
  constructor() {
    this._listeners = {};
  }
  addEventListener(type, listener) {
    const listeners = this._listeners;
    if (listeners[type] === void 0)
      listeners[type] = [];
    if (listeners[type].indexOf(listener) === -1)
      listeners[type].push(listener);
  }
  removeEventListener(type, listener) {
    const listeners = this._listeners;
    const listenerArray = listeners[type];
    if (listenerArray !== void 0) {
      const index = listenerArray.indexOf(listener);
      if (index !== -1)
        listenerArray.splice(index, 1);
    }
  }
  removeAllEventListeners(type) {
    if (!type) {
      this._listeners = {};
      return;
    }
    if (Array.isArray(this._listeners[type]))
      this._listeners[type].length = 0;
  }
  dispatchEvent(event) {
    const listeners = this._listeners;
    const listenerArray = listeners[event.type];
    if (listenerArray !== void 0) {
      event.target = this;
      const array = listenerArray.slice(0);
      for (let i = 0, l = array.length; i < l; i++) {
        array[i].call(this, event);
      }
    }
  }
};
var isBrowser = typeof window !== "undefined";
var isMac = isBrowser && /Mac/.test(navigator.platform);
var isPointerEventsNotSupported = !(isBrowser && "PointerEvent" in window);
var TOUCH_DOLLY_FACTOR = 1 / 8;
var THREE2;
var _ORIGIN;
var _AXIS_Y;
var _AXIS_Z;
var _v2;
var _v3A;
var _v3B;
var _v3C;
var _xColumn;
var _yColumn;
var _zColumn;
var _deltaTarget;
var _deltaOffset;
var _sphericalA;
var _sphericalB;
var _box3A;
var _box3B;
var _sphere;
var _quaternionA;
var _quaternionB;
var _rotationMatrix;
var _raycaster;
var CameraControls = class extends EventDispatcher2 {
  constructor(camera, domElement) {
    super();
    this.minPolarAngle = 0;
    this.maxPolarAngle = Math.PI;
    this.minAzimuthAngle = -Infinity;
    this.maxAzimuthAngle = Infinity;
    this.minDistance = 0;
    this.maxDistance = Infinity;
    this.infinityDolly = false;
    this.minZoom = 0.01;
    this.maxZoom = Infinity;
    this.dampingFactor = 0.05;
    this.draggingDampingFactor = 0.25;
    this.azimuthRotateSpeed = 1;
    this.polarRotateSpeed = 1;
    this.dollySpeed = 1;
    this.truckSpeed = 2;
    this.dollyToCursor = false;
    this.dragToOffset = false;
    this.verticalDragToForward = false;
    this.boundaryFriction = 0;
    this.restThreshold = 0.01;
    this.colliderMeshes = [];
    this.cancel = () => {
    };
    this._enabled = true;
    this._state = ACTION.NONE;
    this._viewport = null;
    this._dollyControlAmount = 0;
    this._hasRested = true;
    this._boundaryEnclosesCamera = false;
    this._needsUpdate = true;
    this._updatedLastTime = false;
    this._elementRect = new DOMRect();
    this._activePointers = [];
    this._truckInternal = (deltaX, deltaY, dragToOffset) => {
      if (isPerspectiveCamera(this._camera)) {
        const offset = _v3A.copy(this._camera.position).sub(this._target);
        const fov = this._camera.getEffectiveFOV() * THREE2.MathUtils.DEG2RAD;
        const targetDistance = offset.length() * Math.tan(fov * 0.5);
        const truckX = this.truckSpeed * deltaX * targetDistance / this._elementRect.height;
        const pedestalY = this.truckSpeed * deltaY * targetDistance / this._elementRect.height;
        if (this.verticalDragToForward) {
          dragToOffset ? this.setFocalOffset(this._focalOffsetEnd.x + truckX, this._focalOffsetEnd.y, this._focalOffsetEnd.z, true) : this.truck(truckX, 0, true);
          this.forward(-pedestalY, true);
        } else {
          dragToOffset ? this.setFocalOffset(this._focalOffsetEnd.x + truckX, this._focalOffsetEnd.y + pedestalY, this._focalOffsetEnd.z, true) : this.truck(truckX, pedestalY, true);
        }
      } else if (isOrthographicCamera(this._camera)) {
        const camera2 = this._camera;
        const truckX = deltaX * (camera2.right - camera2.left) / camera2.zoom / this._elementRect.width;
        const pedestalY = deltaY * (camera2.top - camera2.bottom) / camera2.zoom / this._elementRect.height;
        dragToOffset ? this.setFocalOffset(this._focalOffsetEnd.x + truckX, this._focalOffsetEnd.y + pedestalY, this._focalOffsetEnd.z, true) : this.truck(truckX, pedestalY, true);
      }
    };
    this._rotateInternal = (deltaX, deltaY) => {
      const theta = PI_2 * this.azimuthRotateSpeed * deltaX / this._elementRect.height;
      const phi = PI_2 * this.polarRotateSpeed * deltaY / this._elementRect.height;
      this.rotate(theta, phi, true);
    };
    this._dollyInternal = (delta, x, y) => {
      const dollyScale = Math.pow(0.95, -delta * this.dollySpeed);
      const distance = this._sphericalEnd.radius * dollyScale;
      const prevRadius = this._sphericalEnd.radius;
      const signedPrevRadius = prevRadius * (delta >= 0 ? -1 : 1);
      this.dollyTo(distance);
      if (this.infinityDolly && (distance < this.minDistance || this.maxDistance === this.minDistance)) {
        this._camera.getWorldDirection(_v3A);
        this._targetEnd.add(_v3A.normalize().multiplyScalar(signedPrevRadius));
        this._target.add(_v3A.normalize().multiplyScalar(signedPrevRadius));
      }
      if (this.dollyToCursor) {
        this._dollyControlAmount += this._sphericalEnd.radius - prevRadius;
        if (this.infinityDolly && (distance < this.minDistance || this.maxDistance === this.minDistance)) {
          this._dollyControlAmount -= signedPrevRadius;
        }
        this._dollyControlCoord.set(x, y);
      }
      return;
    };
    this._zoomInternal = (delta, x, y) => {
      const zoomScale = Math.pow(0.95, delta * this.dollySpeed);
      const prevZoom = this._zoomEnd;
      this.zoomTo(this._zoom * zoomScale);
      if (this.dollyToCursor) {
        this._dollyControlAmount += this._zoomEnd - prevZoom;
        this._dollyControlCoord.set(x, y);
      }
      return;
    };
    if (typeof THREE2 === "undefined") {
      console.error("camera-controls: `THREE` is undefined. You must first run `CameraControls.install( { THREE: THREE } )`. Check the docs for further information.");
    }
    this._camera = camera;
    this._yAxisUpSpace = new THREE2.Quaternion().setFromUnitVectors(this._camera.up, _AXIS_Y);
    this._yAxisUpSpaceInverse = quatInvertCompat(this._yAxisUpSpace.clone());
    this._state = ACTION.NONE;
    this._domElement = domElement;
    this._domElement.style.touchAction = "none";
    this._domElement.style.userSelect = "none";
    this._domElement.style.webkitUserSelect = "none";
    this._target = new THREE2.Vector3();
    this._targetEnd = this._target.clone();
    this._focalOffset = new THREE2.Vector3();
    this._focalOffsetEnd = this._focalOffset.clone();
    this._spherical = new THREE2.Spherical().setFromVector3(_v3A.copy(this._camera.position).applyQuaternion(this._yAxisUpSpace));
    this._sphericalEnd = this._spherical.clone();
    this._zoom = this._camera.zoom;
    this._zoomEnd = this._zoom;
    this._nearPlaneCorners = [
      new THREE2.Vector3(),
      new THREE2.Vector3(),
      new THREE2.Vector3(),
      new THREE2.Vector3()
    ];
    this._updateNearPlaneCorners();
    this._boundary = new THREE2.Box3(new THREE2.Vector3(-Infinity, -Infinity, -Infinity), new THREE2.Vector3(Infinity, Infinity, Infinity));
    this._target0 = this._target.clone();
    this._position0 = this._camera.position.clone();
    this._zoom0 = this._zoom;
    this._focalOffset0 = this._focalOffset.clone();
    this._dollyControlAmount = 0;
    this._dollyControlCoord = new THREE2.Vector2();
    this.mouseButtons = {
      left: ACTION.ROTATE,
      middle: ACTION.DOLLY,
      right: ACTION.TRUCK,
      wheel: isPerspectiveCamera(this._camera) ? ACTION.DOLLY : isOrthographicCamera(this._camera) ? ACTION.ZOOM : ACTION.NONE
    };
    this.touches = {
      one: ACTION.TOUCH_ROTATE,
      two: isPerspectiveCamera(this._camera) ? ACTION.TOUCH_DOLLY_TRUCK : isOrthographicCamera(this._camera) ? ACTION.TOUCH_ZOOM_TRUCK : ACTION.NONE,
      three: ACTION.TOUCH_TRUCK
    };
    if (this._domElement) {
      const dragStartPosition = new THREE2.Vector2();
      const lastDragPosition = new THREE2.Vector2();
      const dollyStart = new THREE2.Vector2();
      const onPointerDown = (event) => {
        if (!this._enabled)
          return;
        const pointer = {
          pointerId: event.pointerId,
          clientX: event.clientX,
          clientY: event.clientY,
          deltaX: 0,
          deltaY: 0
        };
        this._activePointers.push(pointer);
        this._domElement.ownerDocument.removeEventListener("pointermove", onPointerMove, { passive: false });
        this._domElement.ownerDocument.removeEventListener("pointerup", onPointerUp);
        this._domElement.ownerDocument.addEventListener("pointermove", onPointerMove, { passive: false });
        this._domElement.ownerDocument.addEventListener("pointerup", onPointerUp);
        startDragging(event);
      };
      const onMouseDown = (event) => {
        if (!this._enabled)
          return;
        const pointer = {
          pointerId: 0,
          clientX: event.clientX,
          clientY: event.clientY,
          deltaX: 0,
          deltaY: 0
        };
        this._activePointers.push(pointer);
        this._domElement.ownerDocument.removeEventListener("mousemove", onMouseMove);
        this._domElement.ownerDocument.removeEventListener("mouseup", onMouseUp);
        this._domElement.ownerDocument.addEventListener("mousemove", onMouseMove);
        this._domElement.ownerDocument.addEventListener("mouseup", onMouseUp);
        startDragging(event);
      };
      const onTouchStart = (event) => {
        if (!this._enabled)
          return;
        event.preventDefault();
        Array.prototype.forEach.call(event.changedTouches, (touch) => {
          const pointer = {
            pointerId: touch.identifier,
            clientX: touch.clientX,
            clientY: touch.clientY,
            deltaX: 0,
            deltaY: 0
          };
          this._activePointers.push(pointer);
        });
        this._domElement.ownerDocument.removeEventListener("touchmove", onTouchMove, { passive: false });
        this._domElement.ownerDocument.removeEventListener("touchend", onTouchEnd);
        this._domElement.ownerDocument.addEventListener("touchmove", onTouchMove, { passive: false });
        this._domElement.ownerDocument.addEventListener("touchend", onTouchEnd);
        startDragging(event);
      };
      const onPointerMove = (event) => {
        if (event.cancelable)
          event.preventDefault();
        const pointerId = event.pointerId;
        const pointer = this._findPointerById(pointerId);
        if (!pointer)
          return;
        pointer.clientX = event.clientX;
        pointer.clientY = event.clientY;
        pointer.deltaX = event.movementX;
        pointer.deltaY = event.movementY;
        if (event.pointerType === "touch") {
          switch (this._activePointers.length) {
            case 1:
              this._state = this.touches.one;
              break;
            case 2:
              this._state = this.touches.two;
              break;
            case 3:
              this._state = this.touches.three;
              break;
          }
        } else {
          this._state = 0;
          if ((event.buttons & MOUSE_BUTTON.LEFT) === MOUSE_BUTTON.LEFT) {
            this._state = this._state | this.mouseButtons.left;
          }
          if ((event.buttons & MOUSE_BUTTON.MIDDLE) === MOUSE_BUTTON.MIDDLE) {
            this._state = this._state | this.mouseButtons.middle;
          }
          if ((event.buttons & MOUSE_BUTTON.RIGHT) === MOUSE_BUTTON.RIGHT) {
            this._state = this._state | this.mouseButtons.right;
          }
        }
        dragging();
      };
      const onMouseMove = (event) => {
        const pointer = this._findPointerById(0);
        if (!pointer)
          return;
        pointer.clientX = event.clientX;
        pointer.clientY = event.clientY;
        pointer.deltaX = event.movementX;
        pointer.deltaY = event.movementY;
        this._state = 0;
        if ((event.buttons & MOUSE_BUTTON.LEFT) === MOUSE_BUTTON.LEFT) {
          this._state = this._state | this.mouseButtons.left;
        }
        if ((event.buttons & MOUSE_BUTTON.MIDDLE) === MOUSE_BUTTON.MIDDLE) {
          this._state = this._state | this.mouseButtons.middle;
        }
        if ((event.buttons & MOUSE_BUTTON.RIGHT) === MOUSE_BUTTON.RIGHT) {
          this._state = this._state | this.mouseButtons.right;
        }
        dragging();
      };
      const onTouchMove = (event) => {
        if (event.cancelable)
          event.preventDefault();
        Array.prototype.forEach.call(event.changedTouches, (touch) => {
          const pointerId = touch.identifier;
          const pointer = this._findPointerById(pointerId);
          if (!pointer)
            return;
          pointer.clientX = touch.clientX;
          pointer.clientY = touch.clientY;
        });
        dragging();
      };
      const onPointerUp = (event) => {
        const pointerId = event.pointerId;
        const pointer = this._findPointerById(pointerId);
        pointer && this._activePointers.splice(this._activePointers.indexOf(pointer), 1);
        if (event.pointerType === "touch") {
          switch (this._activePointers.length) {
            case 0:
              this._state = ACTION.NONE;
              break;
            case 1:
              this._state = this.touches.one;
              break;
            case 2:
              this._state = this.touches.two;
              break;
            case 3:
              this._state = this.touches.three;
              break;
          }
        } else {
          this._state = ACTION.NONE;
        }
        endDragging();
      };
      const onMouseUp = () => {
        const pointer = this._findPointerById(0);
        pointer && this._activePointers.splice(this._activePointers.indexOf(pointer), 1);
        this._state = ACTION.NONE;
        endDragging();
      };
      const onTouchEnd = (event) => {
        Array.prototype.forEach.call(event.changedTouches, (touch) => {
          const pointerId = touch.identifier;
          const pointer = this._findPointerById(pointerId);
          pointer && this._activePointers.splice(this._activePointers.indexOf(pointer), 1);
        });
        switch (this._activePointers.length) {
          case 0:
            this._state = ACTION.NONE;
            break;
          case 1:
            this._state = this.touches.one;
            break;
          case 2:
            this._state = this.touches.two;
            break;
          case 3:
            this._state = this.touches.three;
            break;
        }
        endDragging();
      };
      let lastScrollTimeStamp = -1;
      const onMouseWheel = (event) => {
        if (!this._enabled || this.mouseButtons.wheel === ACTION.NONE)
          return;
        event.preventDefault();
        if (this.dollyToCursor || this.mouseButtons.wheel === ACTION.ROTATE || this.mouseButtons.wheel === ACTION.TRUCK) {
          const now = performance.now();
          if (lastScrollTimeStamp - now < 1e3)
            this._getClientRect(this._elementRect);
          lastScrollTimeStamp = now;
        }
        const deltaYFactor = isMac ? -1 : -3;
        const delta = event.deltaMode === 1 ? event.deltaY / deltaYFactor : event.deltaY / (deltaYFactor * 10);
        const x = this.dollyToCursor ? (event.clientX - this._elementRect.x) / this._elementRect.width * 2 - 1 : 0;
        const y = this.dollyToCursor ? (event.clientY - this._elementRect.y) / this._elementRect.height * -2 + 1 : 0;
        switch (this.mouseButtons.wheel) {
          case ACTION.ROTATE: {
            this._rotateInternal(event.deltaX, event.deltaY);
            break;
          }
          case ACTION.TRUCK: {
            this._truckInternal(event.deltaX, event.deltaY, false);
            break;
          }
          case ACTION.OFFSET: {
            this._truckInternal(event.deltaX, event.deltaY, true);
            break;
          }
          case ACTION.DOLLY: {
            this._dollyInternal(-delta, x, y);
            break;
          }
          case ACTION.ZOOM: {
            this._zoomInternal(-delta, x, y);
            break;
          }
        }
        this.dispatchEvent({ type: "control" });
      };
      const onContextMenu = (event) => {
        if (!this._enabled)
          return;
        event.preventDefault();
      };
      const startDragging = (event) => {
        if (!this._enabled)
          return;
        extractClientCoordFromEvent(this._activePointers, _v2);
        this._getClientRect(this._elementRect);
        dragStartPosition.copy(_v2);
        lastDragPosition.copy(_v2);
        const isMultiTouch = this._activePointers.length >= 2;
        if (isMultiTouch) {
          const dx = _v2.x - this._activePointers[1].clientX;
          const dy = _v2.y - this._activePointers[1].clientY;
          const distance = Math.sqrt(dx * dx + dy * dy);
          dollyStart.set(0, distance);
          const x = (this._activePointers[0].clientX + this._activePointers[1].clientX) * 0.5;
          const y = (this._activePointers[0].clientY + this._activePointers[1].clientY) * 0.5;
          lastDragPosition.set(x, y);
        }
        if ("touches" in event || "pointerType" in event && event.pointerType === "touch") {
          switch (this._activePointers.length) {
            case 1:
              this._state = this.touches.one;
              break;
            case 2:
              this._state = this.touches.two;
              break;
            case 3:
              this._state = this.touches.three;
              break;
          }
        } else {
          this._state = 0;
          if ((event.buttons & MOUSE_BUTTON.LEFT) === MOUSE_BUTTON.LEFT) {
            this._state = this._state | this.mouseButtons.left;
          }
          if ((event.buttons & MOUSE_BUTTON.MIDDLE) === MOUSE_BUTTON.MIDDLE) {
            this._state = this._state | this.mouseButtons.middle;
          }
          if ((event.buttons & MOUSE_BUTTON.RIGHT) === MOUSE_BUTTON.RIGHT) {
            this._state = this._state | this.mouseButtons.right;
          }
        }
        this.dispatchEvent({ type: "controlstart" });
      };
      const dragging = () => {
        if (!this._enabled)
          return;
        extractClientCoordFromEvent(this._activePointers, _v2);
        const isPointerLockActive = this._domElement && document.pointerLockElement === this._domElement;
        const deltaX = isPointerLockActive ? -this._activePointers[0].deltaX : lastDragPosition.x - _v2.x;
        const deltaY = isPointerLockActive ? -this._activePointers[0].deltaY : lastDragPosition.y - _v2.y;
        lastDragPosition.copy(_v2);
        if ((this._state & ACTION.ROTATE) === ACTION.ROTATE || (this._state & ACTION.TOUCH_ROTATE) === ACTION.TOUCH_ROTATE || (this._state & ACTION.TOUCH_DOLLY_ROTATE) === ACTION.TOUCH_DOLLY_ROTATE || (this._state & ACTION.TOUCH_ZOOM_ROTATE) === ACTION.TOUCH_ZOOM_ROTATE) {
          this._rotateInternal(deltaX, deltaY);
        }
        if ((this._state & ACTION.DOLLY) === ACTION.DOLLY || (this._state & ACTION.ZOOM) === ACTION.ZOOM) {
          const dollyX = this.dollyToCursor ? (dragStartPosition.x - this._elementRect.x) / this._elementRect.width * 2 - 1 : 0;
          const dollyY = this.dollyToCursor ? (dragStartPosition.y - this._elementRect.y) / this._elementRect.height * -2 + 1 : 0;
          this._state === ACTION.DOLLY ? this._dollyInternal(deltaY * TOUCH_DOLLY_FACTOR, dollyX, dollyY) : this._zoomInternal(deltaY * TOUCH_DOLLY_FACTOR, dollyX, dollyY);
        }
        if ((this._state & ACTION.TOUCH_DOLLY) === ACTION.TOUCH_DOLLY || (this._state & ACTION.TOUCH_ZOOM) === ACTION.TOUCH_ZOOM || (this._state & ACTION.TOUCH_DOLLY_TRUCK) === ACTION.TOUCH_DOLLY_TRUCK || (this._state & ACTION.TOUCH_ZOOM_TRUCK) === ACTION.TOUCH_ZOOM_TRUCK || (this._state & ACTION.TOUCH_DOLLY_OFFSET) === ACTION.TOUCH_DOLLY_OFFSET || (this._state & ACTION.TOUCH_ZOOM_OFFSET) === ACTION.TOUCH_ZOOM_OFFSET || (this._state & ACTION.TOUCH_DOLLY_ROTATE) === ACTION.TOUCH_DOLLY_ROTATE || (this._state & ACTION.TOUCH_ZOOM_ROTATE) === ACTION.TOUCH_ZOOM_ROTATE) {
          const dx = _v2.x - this._activePointers[1].clientX;
          const dy = _v2.y - this._activePointers[1].clientY;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const dollyDelta = dollyStart.y - distance;
          dollyStart.set(0, distance);
          const dollyX = this.dollyToCursor ? (lastDragPosition.x - this._elementRect.x) / this._elementRect.width * 2 - 1 : 0;
          const dollyY = this.dollyToCursor ? (lastDragPosition.y - this._elementRect.y) / this._elementRect.height * -2 + 1 : 0;
          this._state === ACTION.TOUCH_DOLLY || this._state === ACTION.TOUCH_DOLLY_ROTATE || this._state === ACTION.TOUCH_DOLLY_TRUCK || this._state === ACTION.TOUCH_DOLLY_OFFSET ? this._dollyInternal(dollyDelta * TOUCH_DOLLY_FACTOR, dollyX, dollyY) : this._zoomInternal(dollyDelta * TOUCH_DOLLY_FACTOR, dollyX, dollyY);
        }
        if ((this._state & ACTION.TRUCK) === ACTION.TRUCK || (this._state & ACTION.TOUCH_TRUCK) === ACTION.TOUCH_TRUCK || (this._state & ACTION.TOUCH_DOLLY_TRUCK) === ACTION.TOUCH_DOLLY_TRUCK || (this._state & ACTION.TOUCH_ZOOM_TRUCK) === ACTION.TOUCH_ZOOM_TRUCK) {
          this._truckInternal(deltaX, deltaY, false);
        }
        if ((this._state & ACTION.OFFSET) === ACTION.OFFSET || (this._state & ACTION.TOUCH_OFFSET) === ACTION.TOUCH_OFFSET || (this._state & ACTION.TOUCH_DOLLY_OFFSET) === ACTION.TOUCH_DOLLY_OFFSET || (this._state & ACTION.TOUCH_ZOOM_OFFSET) === ACTION.TOUCH_ZOOM_OFFSET) {
          this._truckInternal(deltaX, deltaY, true);
        }
        this.dispatchEvent({ type: "control" });
      };
      const endDragging = () => {
        extractClientCoordFromEvent(this._activePointers, _v2);
        lastDragPosition.copy(_v2);
        if (this._activePointers.length === 0) {
          this._domElement.ownerDocument.removeEventListener("pointermove", onPointerMove, { passive: false });
          this._domElement.ownerDocument.removeEventListener("pointerup", onPointerUp);
          this._domElement.ownerDocument.removeEventListener("touchmove", onTouchMove, { passive: false });
          this._domElement.ownerDocument.removeEventListener("touchend", onTouchEnd);
          this.dispatchEvent({ type: "controlend" });
        }
      };
      this._domElement.addEventListener("pointerdown", onPointerDown);
      isPointerEventsNotSupported && this._domElement.addEventListener("mousedown", onMouseDown);
      isPointerEventsNotSupported && this._domElement.addEventListener("touchstart", onTouchStart);
      this._domElement.addEventListener("pointercancel", onPointerUp);
      this._domElement.addEventListener("wheel", onMouseWheel, { passive: false });
      this._domElement.addEventListener("contextmenu", onContextMenu);
      this._removeAllEventListeners = () => {
        this._domElement.removeEventListener("pointerdown", onPointerDown);
        this._domElement.removeEventListener("mousedown", onMouseDown);
        this._domElement.removeEventListener("touchstart", onTouchStart);
        this._domElement.removeEventListener("pointercancel", onPointerUp);
        this._domElement.removeEventListener("wheel", onMouseWheel, { passive: false });
        this._domElement.removeEventListener("contextmenu", onContextMenu);
        this._domElement.ownerDocument.removeEventListener("pointermove", onPointerMove, { passive: false });
        this._domElement.ownerDocument.removeEventListener("mousemove", onMouseMove);
        this._domElement.ownerDocument.removeEventListener("touchmove", onTouchMove, { passive: false });
        this._domElement.ownerDocument.removeEventListener("pointerup", onPointerUp);
        this._domElement.ownerDocument.removeEventListener("mouseup", onMouseUp);
        this._domElement.ownerDocument.removeEventListener("touchend", onTouchEnd);
      };
      this.cancel = () => {
        if (this._state === ACTION.NONE)
          return;
        this._state = ACTION.NONE;
        this._activePointers.length = 0;
        endDragging();
      };
    }
    this.update(0);
  }
  static install(libs) {
    THREE2 = libs.THREE;
    _ORIGIN = Object.freeze(new THREE2.Vector3(0, 0, 0));
    _AXIS_Y = Object.freeze(new THREE2.Vector3(0, 1, 0));
    _AXIS_Z = Object.freeze(new THREE2.Vector3(0, 0, 1));
    _v2 = new THREE2.Vector2();
    _v3A = new THREE2.Vector3();
    _v3B = new THREE2.Vector3();
    _v3C = new THREE2.Vector3();
    _xColumn = new THREE2.Vector3();
    _yColumn = new THREE2.Vector3();
    _zColumn = new THREE2.Vector3();
    _deltaTarget = new THREE2.Vector3();
    _deltaOffset = new THREE2.Vector3();
    _sphericalA = new THREE2.Spherical();
    _sphericalB = new THREE2.Spherical();
    _box3A = new THREE2.Box3();
    _box3B = new THREE2.Box3();
    _sphere = new THREE2.Sphere();
    _quaternionA = new THREE2.Quaternion();
    _quaternionB = new THREE2.Quaternion();
    _rotationMatrix = new THREE2.Matrix4();
    _raycaster = new THREE2.Raycaster();
  }
  static get ACTION() {
    return ACTION;
  }
  get camera() {
    return this._camera;
  }
  set camera(camera) {
    this._camera = camera;
    this.updateCameraUp();
    this._camera.updateProjectionMatrix();
    this._updateNearPlaneCorners();
    this._needsUpdate = true;
  }
  get enabled() {
    return this._enabled;
  }
  set enabled(enabled) {
    this._enabled = enabled;
    if (enabled) {
      this._domElement.style.touchAction = "none";
      this._domElement.style.userSelect = "none";
      this._domElement.style.webkitUserSelect = "none";
    } else {
      this.cancel();
      this._domElement.style.touchAction = "";
      this._domElement.style.userSelect = "";
      this._domElement.style.webkitUserSelect = "";
    }
  }
  get active() {
    return !this._hasRested;
  }
  get currentAction() {
    return this._state;
  }
  get distance() {
    return this._spherical.radius;
  }
  set distance(distance) {
    if (this._spherical.radius === distance && this._sphericalEnd.radius === distance)
      return;
    this._spherical.radius = distance;
    this._sphericalEnd.radius = distance;
    this._needsUpdate = true;
  }
  get azimuthAngle() {
    return this._spherical.theta;
  }
  set azimuthAngle(azimuthAngle) {
    if (this._spherical.theta === azimuthAngle && this._sphericalEnd.theta === azimuthAngle)
      return;
    this._spherical.theta = azimuthAngle;
    this._sphericalEnd.theta = azimuthAngle;
    this._needsUpdate = true;
  }
  get polarAngle() {
    return this._spherical.phi;
  }
  set polarAngle(polarAngle) {
    if (this._spherical.phi === polarAngle && this._sphericalEnd.phi === polarAngle)
      return;
    this._spherical.phi = polarAngle;
    this._sphericalEnd.phi = polarAngle;
    this._needsUpdate = true;
  }
  get boundaryEnclosesCamera() {
    return this._boundaryEnclosesCamera;
  }
  set boundaryEnclosesCamera(boundaryEnclosesCamera) {
    this._boundaryEnclosesCamera = boundaryEnclosesCamera;
    this._needsUpdate = true;
  }
  addEventListener(type, listener) {
    super.addEventListener(type, listener);
  }
  removeEventListener(type, listener) {
    super.removeEventListener(type, listener);
  }
  rotate(azimuthAngle, polarAngle, enableTransition = false) {
    return this.rotateTo(this._sphericalEnd.theta + azimuthAngle, this._sphericalEnd.phi + polarAngle, enableTransition);
  }
  rotateAzimuthTo(azimuthAngle, enableTransition = false) {
    return this.rotateTo(azimuthAngle, this._sphericalEnd.phi, enableTransition);
  }
  rotatePolarTo(polarAngle, enableTransition = false) {
    return this.rotateTo(this._sphericalEnd.theta, polarAngle, enableTransition);
  }
  rotateTo(azimuthAngle, polarAngle, enableTransition = false) {
    const theta = THREE2.MathUtils.clamp(azimuthAngle, this.minAzimuthAngle, this.maxAzimuthAngle);
    const phi = THREE2.MathUtils.clamp(polarAngle, this.minPolarAngle, this.maxPolarAngle);
    this._sphericalEnd.theta = theta;
    this._sphericalEnd.phi = phi;
    this._sphericalEnd.makeSafe();
    this._needsUpdate = true;
    if (!enableTransition) {
      this._spherical.theta = this._sphericalEnd.theta;
      this._spherical.phi = this._sphericalEnd.phi;
    }
    const resolveImmediately = !enableTransition || approxEquals(this._spherical.theta, this._sphericalEnd.theta, this.restThreshold) && approxEquals(this._spherical.phi, this._sphericalEnd.phi, this.restThreshold);
    return this._createOnRestPromise(resolveImmediately);
  }
  dolly(distance, enableTransition = false) {
    return this.dollyTo(this._sphericalEnd.radius - distance, enableTransition);
  }
  dollyTo(distance, enableTransition = false) {
    const lastRadius = this._sphericalEnd.radius;
    const newRadius = THREE2.MathUtils.clamp(distance, this.minDistance, this.maxDistance);
    const hasCollider = this.colliderMeshes.length >= 1;
    if (hasCollider) {
      const maxDistanceByCollisionTest = this._collisionTest();
      const isCollided = approxEquals(maxDistanceByCollisionTest, this._spherical.radius);
      const isDollyIn = lastRadius > newRadius;
      if (!isDollyIn && isCollided)
        return Promise.resolve();
      this._sphericalEnd.radius = Math.min(newRadius, maxDistanceByCollisionTest);
    } else {
      this._sphericalEnd.radius = newRadius;
    }
    this._needsUpdate = true;
    if (!enableTransition) {
      this._spherical.radius = this._sphericalEnd.radius;
    }
    const resolveImmediately = !enableTransition || approxEquals(this._spherical.radius, this._sphericalEnd.radius, this.restThreshold);
    return this._createOnRestPromise(resolveImmediately);
  }
  zoom(zoomStep, enableTransition = false) {
    return this.zoomTo(this._zoomEnd + zoomStep, enableTransition);
  }
  zoomTo(zoom, enableTransition = false) {
    this._zoomEnd = THREE2.MathUtils.clamp(zoom, this.minZoom, this.maxZoom);
    this._needsUpdate = true;
    if (!enableTransition) {
      this._zoom = this._zoomEnd;
    }
    const resolveImmediately = !enableTransition || approxEquals(this._zoom, this._zoomEnd, this.restThreshold);
    return this._createOnRestPromise(resolveImmediately);
  }
  pan(x, y, enableTransition = false) {
    console.warn("`pan` has been renamed to `truck`");
    return this.truck(x, y, enableTransition);
  }
  truck(x, y, enableTransition = false) {
    this._camera.updateMatrix();
    _xColumn.setFromMatrixColumn(this._camera.matrix, 0);
    _yColumn.setFromMatrixColumn(this._camera.matrix, 1);
    _xColumn.multiplyScalar(x);
    _yColumn.multiplyScalar(-y);
    const offset = _v3A.copy(_xColumn).add(_yColumn);
    const to3 = _v3B.copy(this._targetEnd).add(offset);
    return this.moveTo(to3.x, to3.y, to3.z, enableTransition);
  }
  forward(distance, enableTransition = false) {
    _v3A.setFromMatrixColumn(this._camera.matrix, 0);
    _v3A.crossVectors(this._camera.up, _v3A);
    _v3A.multiplyScalar(distance);
    const to3 = _v3B.copy(this._targetEnd).add(_v3A);
    return this.moveTo(to3.x, to3.y, to3.z, enableTransition);
  }
  moveTo(x, y, z, enableTransition = false) {
    const offset = _v3A.set(x, y, z).sub(this._targetEnd);
    this._encloseToBoundary(this._targetEnd, offset, this.boundaryFriction);
    this._needsUpdate = true;
    if (!enableTransition) {
      this._target.copy(this._targetEnd);
    }
    const resolveImmediately = !enableTransition || approxEquals(this._target.x, this._targetEnd.x, this.restThreshold) && approxEquals(this._target.y, this._targetEnd.y, this.restThreshold) && approxEquals(this._target.z, this._targetEnd.z, this.restThreshold);
    return this._createOnRestPromise(resolveImmediately);
  }
  fitToBox(box3OrObject, enableTransition, { cover = false, paddingLeft = 0, paddingRight = 0, paddingBottom = 0, paddingTop = 0 } = {}) {
    const promises = [];
    const aabb = box3OrObject.isBox3 ? _box3A.copy(box3OrObject) : _box3A.setFromObject(box3OrObject);
    if (aabb.isEmpty()) {
      console.warn("camera-controls: fitTo() cannot be used with an empty box. Aborting");
      Promise.resolve();
    }
    const theta = roundToStep(this._sphericalEnd.theta, PI_HALF);
    const phi = roundToStep(this._sphericalEnd.phi, PI_HALF);
    promises.push(this.rotateTo(theta, phi, enableTransition));
    const normal = _v3A.setFromSpherical(this._sphericalEnd).normalize();
    const rotation = _quaternionA.setFromUnitVectors(normal, _AXIS_Z);
    const viewFromPolar = approxEquals(Math.abs(normal.y), 1);
    if (viewFromPolar) {
      rotation.multiply(_quaternionB.setFromAxisAngle(_AXIS_Y, theta));
    }
    rotation.multiply(this._yAxisUpSpaceInverse);
    const bb = _box3B.makeEmpty();
    _v3B.copy(aabb.min).applyQuaternion(rotation);
    bb.expandByPoint(_v3B);
    _v3B.copy(aabb.min).setX(aabb.max.x).applyQuaternion(rotation);
    bb.expandByPoint(_v3B);
    _v3B.copy(aabb.min).setY(aabb.max.y).applyQuaternion(rotation);
    bb.expandByPoint(_v3B);
    _v3B.copy(aabb.max).setZ(aabb.min.z).applyQuaternion(rotation);
    bb.expandByPoint(_v3B);
    _v3B.copy(aabb.min).setZ(aabb.max.z).applyQuaternion(rotation);
    bb.expandByPoint(_v3B);
    _v3B.copy(aabb.max).setY(aabb.min.y).applyQuaternion(rotation);
    bb.expandByPoint(_v3B);
    _v3B.copy(aabb.max).setX(aabb.min.x).applyQuaternion(rotation);
    bb.expandByPoint(_v3B);
    _v3B.copy(aabb.max).applyQuaternion(rotation);
    bb.expandByPoint(_v3B);
    bb.min.x -= paddingLeft;
    bb.min.y -= paddingBottom;
    bb.max.x += paddingRight;
    bb.max.y += paddingTop;
    rotation.setFromUnitVectors(_AXIS_Z, normal);
    if (viewFromPolar) {
      rotation.premultiply(_quaternionB.invert());
    }
    rotation.premultiply(this._yAxisUpSpace);
    const bbSize = bb.getSize(_v3A);
    const center = bb.getCenter(_v3B).applyQuaternion(rotation);
    if (isPerspectiveCamera(this._camera)) {
      const distance = this.getDistanceToFitBox(bbSize.x, bbSize.y, bbSize.z, cover);
      promises.push(this.moveTo(center.x, center.y, center.z, enableTransition));
      promises.push(this.dollyTo(distance, enableTransition));
      promises.push(this.setFocalOffset(0, 0, 0, enableTransition));
    } else if (isOrthographicCamera(this._camera)) {
      const camera = this._camera;
      const width = camera.right - camera.left;
      const height = camera.top - camera.bottom;
      const zoom = cover ? Math.max(width / bbSize.x, height / bbSize.y) : Math.min(width / bbSize.x, height / bbSize.y);
      promises.push(this.moveTo(center.x, center.y, center.z, enableTransition));
      promises.push(this.zoomTo(zoom, enableTransition));
      promises.push(this.setFocalOffset(0, 0, 0, enableTransition));
    }
    return Promise.all(promises);
  }
  fitToSphere(sphereOrMesh, enableTransition) {
    const promises = [];
    const isSphere = sphereOrMesh instanceof THREE2.Sphere;
    const boundingSphere = isSphere ? _sphere.copy(sphereOrMesh) : createBoundingSphere(sphereOrMesh, _sphere);
    promises.push(this.moveTo(boundingSphere.center.x, boundingSphere.center.y, boundingSphere.center.z, enableTransition));
    if (isPerspectiveCamera(this._camera)) {
      const distanceToFit = this.getDistanceToFitSphere(boundingSphere.radius);
      promises.push(this.dollyTo(distanceToFit, enableTransition));
    } else if (isOrthographicCamera(this._camera)) {
      const width = this._camera.right - this._camera.left;
      const height = this._camera.top - this._camera.bottom;
      const diameter = 2 * boundingSphere.radius;
      const zoom = Math.min(width / diameter, height / diameter);
      promises.push(this.zoomTo(zoom, enableTransition));
    }
    promises.push(this.setFocalOffset(0, 0, 0, enableTransition));
    return Promise.all(promises);
  }
  setLookAt(positionX, positionY, positionZ, targetX, targetY, targetZ, enableTransition = false) {
    const target2 = _v3B.set(targetX, targetY, targetZ);
    const position = _v3A.set(positionX, positionY, positionZ);
    this._targetEnd.copy(target2);
    this._sphericalEnd.setFromVector3(position.sub(target2).applyQuaternion(this._yAxisUpSpace));
    this.normalizeRotations();
    this._needsUpdate = true;
    if (!enableTransition) {
      this._target.copy(this._targetEnd);
      this._spherical.copy(this._sphericalEnd);
    }
    const resolveImmediately = !enableTransition || approxEquals(this._target.x, this._targetEnd.x, this.restThreshold) && approxEquals(this._target.y, this._targetEnd.y, this.restThreshold) && approxEquals(this._target.z, this._targetEnd.z, this.restThreshold) && approxEquals(this._spherical.theta, this._sphericalEnd.theta, this.restThreshold) && approxEquals(this._spherical.phi, this._sphericalEnd.phi, this.restThreshold) && approxEquals(this._spherical.radius, this._sphericalEnd.radius, this.restThreshold);
    return this._createOnRestPromise(resolveImmediately);
  }
  lerpLookAt(positionAX, positionAY, positionAZ, targetAX, targetAY, targetAZ, positionBX, positionBY, positionBZ, targetBX, targetBY, targetBZ, t, enableTransition = false) {
    const targetA = _v3A.set(targetAX, targetAY, targetAZ);
    const positionA = _v3B.set(positionAX, positionAY, positionAZ);
    _sphericalA.setFromVector3(positionA.sub(targetA).applyQuaternion(this._yAxisUpSpace));
    const targetB = _v3C.set(targetBX, targetBY, targetBZ);
    const positionB = _v3B.set(positionBX, positionBY, positionBZ);
    _sphericalB.setFromVector3(positionB.sub(targetB).applyQuaternion(this._yAxisUpSpace));
    this._targetEnd.copy(targetA.lerp(targetB, t));
    const deltaTheta = _sphericalB.theta - _sphericalA.theta;
    const deltaPhi = _sphericalB.phi - _sphericalA.phi;
    const deltaRadius = _sphericalB.radius - _sphericalA.radius;
    this._sphericalEnd.set(_sphericalA.radius + deltaRadius * t, _sphericalA.phi + deltaPhi * t, _sphericalA.theta + deltaTheta * t);
    this.normalizeRotations();
    this._needsUpdate = true;
    if (!enableTransition) {
      this._target.copy(this._targetEnd);
      this._spherical.copy(this._sphericalEnd);
    }
    const resolveImmediately = !enableTransition || approxEquals(this._target.x, this._targetEnd.x, this.restThreshold) && approxEquals(this._target.y, this._targetEnd.y, this.restThreshold) && approxEquals(this._target.z, this._targetEnd.z, this.restThreshold) && approxEquals(this._spherical.theta, this._sphericalEnd.theta, this.restThreshold) && approxEquals(this._spherical.phi, this._sphericalEnd.phi, this.restThreshold) && approxEquals(this._spherical.radius, this._sphericalEnd.radius, this.restThreshold);
    return this._createOnRestPromise(resolveImmediately);
  }
  setPosition(positionX, positionY, positionZ, enableTransition = false) {
    return this.setLookAt(positionX, positionY, positionZ, this._targetEnd.x, this._targetEnd.y, this._targetEnd.z, enableTransition);
  }
  setTarget(targetX, targetY, targetZ, enableTransition = false) {
    const pos = this.getPosition(_v3A);
    return this.setLookAt(pos.x, pos.y, pos.z, targetX, targetY, targetZ, enableTransition);
  }
  setFocalOffset(x, y, z, enableTransition = false) {
    this._focalOffsetEnd.set(x, y, z);
    this._needsUpdate = true;
    if (!enableTransition) {
      this._focalOffset.copy(this._focalOffsetEnd);
    }
    const resolveImmediately = !enableTransition || approxEquals(this._focalOffset.x, this._focalOffsetEnd.x, this.restThreshold) && approxEquals(this._focalOffset.y, this._focalOffsetEnd.y, this.restThreshold) && approxEquals(this._focalOffset.z, this._focalOffsetEnd.z, this.restThreshold);
    return this._createOnRestPromise(resolveImmediately);
  }
  setOrbitPoint(targetX, targetY, targetZ) {
    this._camera.updateMatrixWorld();
    _xColumn.setFromMatrixColumn(this._camera.matrixWorldInverse, 0);
    _yColumn.setFromMatrixColumn(this._camera.matrixWorldInverse, 1);
    _zColumn.setFromMatrixColumn(this._camera.matrixWorldInverse, 2);
    const position = _v3A.set(targetX, targetY, targetZ);
    const distance = position.distanceTo(this._camera.position);
    const cameraToPoint = position.sub(this._camera.position);
    _xColumn.multiplyScalar(cameraToPoint.x);
    _yColumn.multiplyScalar(cameraToPoint.y);
    _zColumn.multiplyScalar(cameraToPoint.z);
    _v3A.copy(_xColumn).add(_yColumn).add(_zColumn);
    _v3A.z = _v3A.z + distance;
    this.dollyTo(distance, false);
    this.setFocalOffset(-_v3A.x, _v3A.y, -_v3A.z, false);
    this.moveTo(targetX, targetY, targetZ, false);
  }
  setBoundary(box3) {
    if (!box3) {
      this._boundary.min.set(-Infinity, -Infinity, -Infinity);
      this._boundary.max.set(Infinity, Infinity, Infinity);
      this._needsUpdate = true;
      return;
    }
    this._boundary.copy(box3);
    this._boundary.clampPoint(this._targetEnd, this._targetEnd);
    this._needsUpdate = true;
  }
  setViewport(viewportOrX, y, width, height) {
    if (viewportOrX === null) {
      this._viewport = null;
      return;
    }
    this._viewport = this._viewport || new THREE2.Vector4();
    if (typeof viewportOrX === "number") {
      this._viewport.set(viewportOrX, y, width, height);
    } else {
      this._viewport.copy(viewportOrX);
    }
  }
  getDistanceToFitBox(width, height, depth, cover = false) {
    if (notSupportedInOrthographicCamera(this._camera, "getDistanceToFitBox"))
      return this._spherical.radius;
    const boundingRectAspect = width / height;
    const fov = this._camera.getEffectiveFOV() * THREE2.MathUtils.DEG2RAD;
    const aspect = this._camera.aspect;
    const heightToFit = (cover ? boundingRectAspect > aspect : boundingRectAspect < aspect) ? height : width / aspect;
    return heightToFit * 0.5 / Math.tan(fov * 0.5) + depth * 0.5;
  }
  getDistanceToFitSphere(radius) {
    if (notSupportedInOrthographicCamera(this._camera, "getDistanceToFitSphere"))
      return this._spherical.radius;
    const vFOV = this._camera.getEffectiveFOV() * THREE2.MathUtils.DEG2RAD;
    const hFOV = Math.atan(Math.tan(vFOV * 0.5) * this._camera.aspect) * 2;
    const fov = 1 < this._camera.aspect ? vFOV : hFOV;
    return radius / Math.sin(fov * 0.5);
  }
  getTarget(out) {
    const _out = !!out && out.isVector3 ? out : new THREE2.Vector3();
    return _out.copy(this._targetEnd);
  }
  getPosition(out) {
    const _out = !!out && out.isVector3 ? out : new THREE2.Vector3();
    return _out.setFromSpherical(this._sphericalEnd).applyQuaternion(this._yAxisUpSpaceInverse).add(this._targetEnd);
  }
  getFocalOffset(out) {
    const _out = !!out && out.isVector3 ? out : new THREE2.Vector3();
    return _out.copy(this._focalOffsetEnd);
  }
  normalizeRotations() {
    this._sphericalEnd.theta = this._sphericalEnd.theta % PI_2;
    if (this._sphericalEnd.theta < 0)
      this._sphericalEnd.theta += PI_2;
    this._spherical.theta += PI_2 * Math.round((this._sphericalEnd.theta - this._spherical.theta) / PI_2);
  }
  reset(enableTransition = false) {
    const promises = [
      this.setLookAt(this._position0.x, this._position0.y, this._position0.z, this._target0.x, this._target0.y, this._target0.z, enableTransition),
      this.setFocalOffset(this._focalOffset0.x, this._focalOffset0.y, this._focalOffset0.z, enableTransition),
      this.zoomTo(this._zoom0, enableTransition)
    ];
    return Promise.all(promises);
  }
  saveState() {
    this.getTarget(this._target0);
    this.getPosition(this._position0);
    this._zoom0 = this._zoom;
    this._focalOffset0.copy(this._focalOffset);
  }
  updateCameraUp() {
    this._yAxisUpSpace.setFromUnitVectors(this._camera.up, _AXIS_Y);
    quatInvertCompat(this._yAxisUpSpaceInverse.copy(this._yAxisUpSpace));
  }
  update(delta) {
    const dampingFactor = this._state === ACTION.NONE ? this.dampingFactor : this.draggingDampingFactor;
    const lerpRatio = Math.min(dampingFactor * delta * 60, 1);
    const deltaTheta = this._sphericalEnd.theta - this._spherical.theta;
    const deltaPhi = this._sphericalEnd.phi - this._spherical.phi;
    const deltaRadius = this._sphericalEnd.radius - this._spherical.radius;
    const deltaTarget = _deltaTarget.subVectors(this._targetEnd, this._target);
    const deltaOffset = _deltaOffset.subVectors(this._focalOffsetEnd, this._focalOffset);
    if (!approxZero(deltaTheta) || !approxZero(deltaPhi) || !approxZero(deltaRadius) || !approxZero(deltaTarget.x) || !approxZero(deltaTarget.y) || !approxZero(deltaTarget.z) || !approxZero(deltaOffset.x) || !approxZero(deltaOffset.y) || !approxZero(deltaOffset.z)) {
      this._spherical.set(this._spherical.radius + deltaRadius * lerpRatio, this._spherical.phi + deltaPhi * lerpRatio, this._spherical.theta + deltaTheta * lerpRatio);
      this._target.add(deltaTarget.multiplyScalar(lerpRatio));
      this._focalOffset.add(deltaOffset.multiplyScalar(lerpRatio));
      this._needsUpdate = true;
    } else {
      this._spherical.copy(this._sphericalEnd);
      this._target.copy(this._targetEnd);
      this._focalOffset.copy(this._focalOffsetEnd);
    }
    if (this._dollyControlAmount !== 0) {
      if (isPerspectiveCamera(this._camera)) {
        const camera = this._camera;
        const direction = _v3A.setFromSpherical(this._sphericalEnd).applyQuaternion(this._yAxisUpSpaceInverse).normalize().negate();
        const planeX = _v3B.copy(direction).cross(camera.up).normalize();
        if (planeX.lengthSq() === 0)
          planeX.x = 1;
        const planeY = _v3C.crossVectors(planeX, direction);
        const worldToScreen = this._sphericalEnd.radius * Math.tan(camera.getEffectiveFOV() * THREE2.MathUtils.DEG2RAD * 0.5);
        const prevRadius = this._sphericalEnd.radius - this._dollyControlAmount;
        const lerpRatio2 = (prevRadius - this._sphericalEnd.radius) / this._sphericalEnd.radius;
        const cursor = _v3A.copy(this._targetEnd).add(planeX.multiplyScalar(this._dollyControlCoord.x * worldToScreen * camera.aspect)).add(planeY.multiplyScalar(this._dollyControlCoord.y * worldToScreen));
        this._targetEnd.lerp(cursor, lerpRatio2);
      } else if (isOrthographicCamera(this._camera)) {
        const camera = this._camera;
        const cameraDirection = camera.getWorldDirection(_v3A.clone());
        const prevPlaneConstant = this._targetEnd.x * cameraDirection.x + this._targetEnd.y * cameraDirection.y + this._targetEnd.z * cameraDirection.z;
        const worldPosition = _v3A.set(this._dollyControlCoord.x, this._dollyControlCoord.y, (camera.near + camera.far) / (camera.near - camera.far)).unproject(camera);
        const quaternion = _v3B.set(0, 0, -1).applyQuaternion(camera.quaternion);
        const cursor = _v3C.copy(worldPosition).add(quaternion.multiplyScalar(-worldPosition.dot(camera.up)));
        const prevZoom = this._zoom - this._dollyControlAmount;
        const lerpRatio2 = -(prevZoom - this._zoomEnd) / this._zoom;
        this._targetEnd.lerp(cursor, lerpRatio2);
        const newPlaneConstant = this._targetEnd.x * cameraDirection.x + this._targetEnd.y * cameraDirection.y + this._targetEnd.z * cameraDirection.z;
        const pullBack = cameraDirection.multiplyScalar(newPlaneConstant - prevPlaneConstant);
        this._targetEnd.sub(pullBack);
      }
      this._target.copy(this._targetEnd);
      this._boundary.clampPoint(this._targetEnd, this._targetEnd);
      this._dollyControlAmount = 0;
    }
    const maxDistance = this._collisionTest();
    this._spherical.radius = Math.min(this._spherical.radius, maxDistance);
    this._spherical.makeSafe();
    this._camera.position.setFromSpherical(this._spherical).applyQuaternion(this._yAxisUpSpaceInverse).add(this._target);
    this._camera.lookAt(this._target);
    const affectOffset = !approxZero(this._focalOffset.x) || !approxZero(this._focalOffset.y) || !approxZero(this._focalOffset.z);
    if (affectOffset) {
      this._camera.updateMatrix();
      _xColumn.setFromMatrixColumn(this._camera.matrix, 0);
      _yColumn.setFromMatrixColumn(this._camera.matrix, 1);
      _zColumn.setFromMatrixColumn(this._camera.matrix, 2);
      _xColumn.multiplyScalar(this._focalOffset.x);
      _yColumn.multiplyScalar(-this._focalOffset.y);
      _zColumn.multiplyScalar(this._focalOffset.z);
      _v3A.copy(_xColumn).add(_yColumn).add(_zColumn);
      this._camera.position.add(_v3A);
    }
    if (this._boundaryEnclosesCamera) {
      this._encloseToBoundary(this._camera.position.copy(this._target), _v3A.setFromSpherical(this._spherical).applyQuaternion(this._yAxisUpSpaceInverse), 1);
    }
    const deltaZoom = this._zoomEnd - this._zoom;
    this._zoom += deltaZoom * lerpRatio;
    if (this._camera.zoom !== this._zoom) {
      if (approxZero(deltaZoom))
        this._zoom = this._zoomEnd;
      this._camera.zoom = this._zoom;
      this._camera.updateProjectionMatrix();
      this._updateNearPlaneCorners();
      this._needsUpdate = true;
    }
    const updated = this._needsUpdate;
    if (updated && !this._updatedLastTime) {
      this._hasRested = false;
      this.dispatchEvent({ type: "wake" });
      this.dispatchEvent({ type: "update" });
    } else if (updated) {
      this.dispatchEvent({ type: "update" });
      if (approxZero(deltaTheta, this.restThreshold) && approxZero(deltaPhi, this.restThreshold) && approxZero(deltaRadius, this.restThreshold) && approxZero(deltaTarget.x, this.restThreshold) && approxZero(deltaTarget.y, this.restThreshold) && approxZero(deltaTarget.z, this.restThreshold) && approxZero(deltaOffset.x, this.restThreshold) && approxZero(deltaOffset.y, this.restThreshold) && approxZero(deltaOffset.z, this.restThreshold) && approxZero(deltaZoom, this.restThreshold) && !this._hasRested) {
        this._hasRested = true;
        this.dispatchEvent({ type: "rest" });
      }
    } else if (!updated && this._updatedLastTime) {
      this.dispatchEvent({ type: "sleep" });
    }
    this._updatedLastTime = updated;
    this._needsUpdate = false;
    return updated;
  }
  toJSON() {
    return JSON.stringify({
      enabled: this._enabled,
      minDistance: this.minDistance,
      maxDistance: infinityToMaxNumber(this.maxDistance),
      minZoom: this.minZoom,
      maxZoom: infinityToMaxNumber(this.maxZoom),
      minPolarAngle: this.minPolarAngle,
      maxPolarAngle: infinityToMaxNumber(this.maxPolarAngle),
      minAzimuthAngle: infinityToMaxNumber(this.minAzimuthAngle),
      maxAzimuthAngle: infinityToMaxNumber(this.maxAzimuthAngle),
      dampingFactor: this.dampingFactor,
      draggingDampingFactor: this.draggingDampingFactor,
      dollySpeed: this.dollySpeed,
      truckSpeed: this.truckSpeed,
      dollyToCursor: this.dollyToCursor,
      verticalDragToForward: this.verticalDragToForward,
      target: this._targetEnd.toArray(),
      position: _v3A.setFromSpherical(this._sphericalEnd).add(this._targetEnd).toArray(),
      zoom: this._zoomEnd,
      focalOffset: this._focalOffsetEnd.toArray(),
      target0: this._target0.toArray(),
      position0: this._position0.toArray(),
      zoom0: this._zoom0,
      focalOffset0: this._focalOffset0.toArray()
    });
  }
  fromJSON(json, enableTransition = false) {
    const obj = JSON.parse(json);
    const position = _v3A.fromArray(obj.position);
    this.enabled = obj.enabled;
    this.minDistance = obj.minDistance;
    this.maxDistance = maxNumberToInfinity(obj.maxDistance);
    this.minZoom = obj.minZoom;
    this.maxZoom = maxNumberToInfinity(obj.maxZoom);
    this.minPolarAngle = obj.minPolarAngle;
    this.maxPolarAngle = maxNumberToInfinity(obj.maxPolarAngle);
    this.minAzimuthAngle = maxNumberToInfinity(obj.minAzimuthAngle);
    this.maxAzimuthAngle = maxNumberToInfinity(obj.maxAzimuthAngle);
    this.dampingFactor = obj.dampingFactor;
    this.draggingDampingFactor = obj.draggingDampingFactor;
    this.dollySpeed = obj.dollySpeed;
    this.truckSpeed = obj.truckSpeed;
    this.dollyToCursor = obj.dollyToCursor;
    this.verticalDragToForward = obj.verticalDragToForward;
    this._target0.fromArray(obj.target0);
    this._position0.fromArray(obj.position0);
    this._zoom0 = obj.zoom0;
    this._focalOffset0.fromArray(obj.focalOffset0);
    this.moveTo(obj.target[0], obj.target[1], obj.target[2], enableTransition);
    _sphericalA.setFromVector3(position.sub(this._targetEnd).applyQuaternion(this._yAxisUpSpace));
    this.rotateTo(_sphericalA.theta, _sphericalA.phi, enableTransition);
    this.zoomTo(obj.zoom, enableTransition);
    this.setFocalOffset(obj.focalOffset[0], obj.focalOffset[1], obj.focalOffset[2], enableTransition);
    this._needsUpdate = true;
  }
  dispose() {
    this._removeAllEventListeners();
  }
  _findPointerById(pointerId) {
    let pointer = null;
    this._activePointers.some((activePointer) => {
      if (activePointer.pointerId === pointerId) {
        pointer = activePointer;
        return true;
      }
      return false;
    });
    return pointer;
  }
  _encloseToBoundary(position, offset, friction) {
    const offsetLength2 = offset.lengthSq();
    if (offsetLength2 === 0) {
      return position;
    }
    const newTarget = _v3B.copy(offset).add(position);
    const clampedTarget = this._boundary.clampPoint(newTarget, _v3C);
    const deltaClampedTarget = clampedTarget.sub(newTarget);
    const deltaClampedTargetLength2 = deltaClampedTarget.lengthSq();
    if (deltaClampedTargetLength2 === 0) {
      return position.add(offset);
    } else if (deltaClampedTargetLength2 === offsetLength2) {
      return position;
    } else if (friction === 0) {
      return position.add(offset).add(deltaClampedTarget);
    } else {
      const offsetFactor = 1 + friction * deltaClampedTargetLength2 / offset.dot(deltaClampedTarget);
      return position.add(_v3B.copy(offset).multiplyScalar(offsetFactor)).add(deltaClampedTarget.multiplyScalar(1 - friction));
    }
  }
  _updateNearPlaneCorners() {
    if (isPerspectiveCamera(this._camera)) {
      const camera = this._camera;
      const near = camera.near;
      const fov = camera.getEffectiveFOV() * THREE2.MathUtils.DEG2RAD;
      const heightHalf = Math.tan(fov * 0.5) * near;
      const widthHalf = heightHalf * camera.aspect;
      this._nearPlaneCorners[0].set(-widthHalf, -heightHalf, 0);
      this._nearPlaneCorners[1].set(widthHalf, -heightHalf, 0);
      this._nearPlaneCorners[2].set(widthHalf, heightHalf, 0);
      this._nearPlaneCorners[3].set(-widthHalf, heightHalf, 0);
    } else if (isOrthographicCamera(this._camera)) {
      const camera = this._camera;
      const zoomInv = 1 / camera.zoom;
      const left = camera.left * zoomInv;
      const right = camera.right * zoomInv;
      const top = camera.top * zoomInv;
      const bottom = camera.bottom * zoomInv;
      this._nearPlaneCorners[0].set(left, top, 0);
      this._nearPlaneCorners[1].set(right, top, 0);
      this._nearPlaneCorners[2].set(right, bottom, 0);
      this._nearPlaneCorners[3].set(left, bottom, 0);
    }
  }
  _collisionTest() {
    let distance = Infinity;
    const hasCollider = this.colliderMeshes.length >= 1;
    if (!hasCollider)
      return distance;
    if (notSupportedInOrthographicCamera(this._camera, "_collisionTest"))
      return distance;
    const direction = _v3A.setFromSpherical(this._spherical).divideScalar(this._spherical.radius);
    _rotationMatrix.lookAt(_ORIGIN, direction, this._camera.up);
    for (let i = 0; i < 4; i++) {
      const nearPlaneCorner = _v3B.copy(this._nearPlaneCorners[i]);
      nearPlaneCorner.applyMatrix4(_rotationMatrix);
      const origin = _v3C.addVectors(this._target, nearPlaneCorner);
      _raycaster.set(origin, direction);
      _raycaster.far = this._spherical.radius + 1;
      const intersects = _raycaster.intersectObjects(this.colliderMeshes);
      if (intersects.length !== 0 && intersects[0].distance < distance) {
        distance = intersects[0].distance;
      }
    }
    return distance;
  }
  _getClientRect(target2) {
    const rect = this._domElement.getBoundingClientRect();
    target2.x = rect.left;
    target2.y = rect.top;
    if (this._viewport) {
      target2.x += this._viewport.x;
      target2.y += rect.height - this._viewport.w - this._viewport.y;
      target2.width = this._viewport.z;
      target2.height = this._viewport.w;
    } else {
      target2.width = rect.width;
      target2.height = rect.height;
    }
    return target2;
  }
  _createOnRestPromise(resolveImmediately) {
    if (resolveImmediately)
      return Promise.resolve();
    this._hasRested = false;
    this.dispatchEvent({ type: "transitionstart" });
    return new Promise((resolve) => {
      const onResolve = () => {
        this.removeEventListener("rest", onResolve);
        resolve();
      };
      this.addEventListener("rest", onResolve);
    });
  }
  _removeAllEventListeners() {
  }
};
function createBoundingSphere(object3d, out) {
  const boundingSphere = out;
  const center = boundingSphere.center;
  _box3A.makeEmpty();
  object3d.traverseVisible((object) => {
    if (!object.isMesh)
      return;
    _box3A.expandByObject(object);
  });
  _box3A.getCenter(center);
  let maxRadiusSq = 0;
  object3d.traverseVisible((object) => {
    if (!object.isMesh)
      return;
    const mesh = object;
    const geometry = mesh.geometry.clone();
    geometry.applyMatrix4(mesh.matrixWorld);
    if (geometry.isBufferGeometry) {
      const bufferGeometry = geometry;
      const position = bufferGeometry.attributes.position;
      for (let i = 0, l = position.count; i < l; i++) {
        _v3A.fromBufferAttribute(position, i);
        maxRadiusSq = Math.max(maxRadiusSq, center.distanceToSquared(_v3A));
      }
    } else {
      const position = geometry.attributes.position;
      const vector = new THREE2.Vector3();
      for (let i = 0, l = position.count; i < l; i++) {
        vector.fromBufferAttribute(position, i);
        maxRadiusSq = Math.max(maxRadiusSq, center.distanceToSquared(vector));
      }
    }
  });
  boundingSphere.radius = Math.sqrt(maxRadiusSq);
  return boundingSphere;
}

// src/Gradient/comps/CameraControl/CameraControl.tsx
import * as THREE3 from "three";

// src/Gradient/comps/CameraControl/useCameraAnimation.ts
import { useEffect as useEffect5, useRef as useRef3 } from "react";
import { useFrame as useFrame4 } from "@react-three/fiber";
function useCameraAnimation({
  type,
  cAzimuthAngle,
  cPolarAngle,
  cDistance,
  cameraZoom,
  zoomOut
}) {
  const ref = useRef3();
  const control = ref.current;
  useFrame4((state, delta) => ref.current.update(delta));
  useEffect5(() => {
    control == null ? void 0 : control.rotateTo(dToR(cAzimuthAngle), dToR(cPolarAngle), true);
  }, [control, cAzimuthAngle, cPolarAngle]);
  useEffect5(() => {
    if (zoomOut) {
      if (type === "sphere") {
        control == null ? void 0 : control.dollyTo(zoomOutSphere.distance, true);
        control == null ? void 0 : control.zoomTo(zoomOutSphere.zoom, true);
      } else {
        control == null ? void 0 : control.dollyTo(zoomOutPlanes.distance, true);
        control == null ? void 0 : control.zoomTo(zoomOutPlanes.zoom, true);
      }
    } else {
      if (type === "sphere") {
        control == null ? void 0 : control.zoomTo(cameraZoom, true);
        control == null ? void 0 : control.dollyTo(defaultSphereDistance, true);
      } else {
        control == null ? void 0 : control.dollyTo(cDistance, true);
        control == null ? void 0 : control.zoomTo(defaultPlanesZoom, true);
      }
    }
  }, [control, zoomOut, type, cameraZoom, cDistance]);
  return ref;
}

// src/Gradient/comps/CameraControl/CameraControl.tsx
import { extend, useThree as useThree7, useFrame as useFrame5 } from "@react-three/fiber";
import { jsx as jsx7 } from "react/jsx-runtime";
function CameraControl(_a) {
  var _b = _a, {
    dampingFactor = 0.05
  } = _b, props = __objRest(_b, [
    "dampingFactor"
  ]);
  CameraControls.install({ THREE: THREE3 });
  extend({ CameraControls });
  const camera = useThree7((state) => state.camera);
  const gl = useThree7((state) => state.gl);
  const ref = useCameraAnimation(props);
  useFrame5((state, delta) => ref.current.update(delta));
  return /* @__PURE__ */ jsx7(
    "cameraControls",
    {
      ref,
      args: [camera, gl.domElement],
      enableDamping: true,
      dampingFactor,
      zoomSpeed: 10,
      dollySpeed: 10,
      restThreshold: 0
    }
  );
}

// src/Gradient/comps/Lights/Environment/EnvironmentMap.tsx
import React6 from "react";
import { EquirectangularReflectionMapping } from "three";
import { useThree as useThree8 } from "@react-three/fiber";

// ../../node_modules/.pnpm/three-stdlib@2.20.4_three@0.146.0/node_modules/three-stdlib/loaders/RGBELoader.js
import { DataTextureLoader, HalfFloatType as HalfFloatType2, FloatType, DataUtils, LinearEncoding, LinearFilter as LinearFilter3 } from "three";
var RGBELoader = class extends DataTextureLoader {
  constructor(manager) {
    super(manager);
    this.type = HalfFloatType2;
  }
  parse(buffer) {
    const RGBE_RETURN_FAILURE = -1, rgbe_read_error = 1, rgbe_write_error = 2, rgbe_format_error = 3, rgbe_memory_error = 4, rgbe_error = function(rgbe_error_code, msg) {
      switch (rgbe_error_code) {
        case rgbe_read_error:
          console.error("THREE.RGBELoader Read Error: " + (msg || ""));
          break;
        case rgbe_write_error:
          console.error("THREE.RGBELoader Write Error: " + (msg || ""));
          break;
        case rgbe_format_error:
          console.error("THREE.RGBELoader Bad File Format: " + (msg || ""));
          break;
        default:
        case rgbe_memory_error:
          console.error("THREE.RGBELoader: Error: " + (msg || ""));
      }
      return RGBE_RETURN_FAILURE;
    }, RGBE_VALID_PROGRAMTYPE = 1, RGBE_VALID_FORMAT = 2, RGBE_VALID_DIMENSIONS = 4, NEWLINE = "\n", fgets = function(buffer2, lineLimit, consume) {
      const chunkSize = 128;
      lineLimit = !lineLimit ? 1024 : lineLimit;
      let p = buffer2.pos, i = -1, len = 0, s = "", chunk = String.fromCharCode.apply(null, new Uint16Array(buffer2.subarray(p, p + chunkSize)));
      while (0 > (i = chunk.indexOf(NEWLINE)) && len < lineLimit && p < buffer2.byteLength) {
        s += chunk;
        len += chunk.length;
        p += chunkSize;
        chunk += String.fromCharCode.apply(null, new Uint16Array(buffer2.subarray(p, p + chunkSize)));
      }
      if (-1 < i) {
        if (false !== consume)
          buffer2.pos += len + i + 1;
        return s + chunk.slice(0, i);
      }
      return false;
    }, RGBE_ReadHeader = function(buffer2) {
      const magic_token_re = /^#\?(\S+)/, gamma_re = /^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/, exposure_re = /^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/, format_re = /^\s*FORMAT=(\S+)\s*$/, dimensions_re = /^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/, header = {
        valid: 0,
        string: "",
        comments: "",
        programtype: "RGBE",
        format: "",
        gamma: 1,
        exposure: 1,
        width: 0,
        height: 0
      };
      let line, match;
      if (buffer2.pos >= buffer2.byteLength || !(line = fgets(buffer2))) {
        return rgbe_error(rgbe_read_error, "no header found");
      }
      if (!(match = line.match(magic_token_re))) {
        return rgbe_error(rgbe_format_error, "bad initial token");
      }
      header.valid |= RGBE_VALID_PROGRAMTYPE;
      header.programtype = match[1];
      header.string += line + "\n";
      while (true) {
        line = fgets(buffer2);
        if (false === line)
          break;
        header.string += line + "\n";
        if ("#" === line.charAt(0)) {
          header.comments += line + "\n";
          continue;
        }
        if (match = line.match(gamma_re)) {
          header.gamma = parseFloat(match[1]);
        }
        if (match = line.match(exposure_re)) {
          header.exposure = parseFloat(match[1]);
        }
        if (match = line.match(format_re)) {
          header.valid |= RGBE_VALID_FORMAT;
          header.format = match[1];
        }
        if (match = line.match(dimensions_re)) {
          header.valid |= RGBE_VALID_DIMENSIONS;
          header.height = parseInt(match[1], 10);
          header.width = parseInt(match[2], 10);
        }
        if (header.valid & RGBE_VALID_FORMAT && header.valid & RGBE_VALID_DIMENSIONS)
          break;
      }
      if (!(header.valid & RGBE_VALID_FORMAT)) {
        return rgbe_error(rgbe_format_error, "missing format specifier");
      }
      if (!(header.valid & RGBE_VALID_DIMENSIONS)) {
        return rgbe_error(rgbe_format_error, "missing image size specifier");
      }
      return header;
    }, RGBE_ReadPixels_RLE = function(buffer2, w, h) {
      const scanline_width = w;
      if (scanline_width < 8 || scanline_width > 32767 || 2 !== buffer2[0] || 2 !== buffer2[1] || buffer2[2] & 128) {
        return new Uint8Array(buffer2);
      }
      if (scanline_width !== (buffer2[2] << 8 | buffer2[3])) {
        return rgbe_error(rgbe_format_error, "wrong scanline width");
      }
      const data_rgba = new Uint8Array(4 * w * h);
      if (!data_rgba.length) {
        return rgbe_error(rgbe_memory_error, "unable to allocate buffer space");
      }
      let offset = 0, pos = 0;
      const ptr_end = 4 * scanline_width;
      const rgbeStart = new Uint8Array(4);
      const scanline_buffer = new Uint8Array(ptr_end);
      let num_scanlines = h;
      while (num_scanlines > 0 && pos < buffer2.byteLength) {
        if (pos + 4 > buffer2.byteLength) {
          return rgbe_error(rgbe_read_error);
        }
        rgbeStart[0] = buffer2[pos++];
        rgbeStart[1] = buffer2[pos++];
        rgbeStart[2] = buffer2[pos++];
        rgbeStart[3] = buffer2[pos++];
        if (2 != rgbeStart[0] || 2 != rgbeStart[1] || (rgbeStart[2] << 8 | rgbeStart[3]) != scanline_width) {
          return rgbe_error(rgbe_format_error, "bad rgbe scanline format");
        }
        let ptr = 0, count;
        while (ptr < ptr_end && pos < buffer2.byteLength) {
          count = buffer2[pos++];
          const isEncodedRun = count > 128;
          if (isEncodedRun)
            count -= 128;
          if (0 === count || ptr + count > ptr_end) {
            return rgbe_error(rgbe_format_error, "bad scanline data");
          }
          if (isEncodedRun) {
            const byteValue = buffer2[pos++];
            for (let i = 0; i < count; i++) {
              scanline_buffer[ptr++] = byteValue;
            }
          } else {
            scanline_buffer.set(buffer2.subarray(pos, pos + count), ptr);
            ptr += count;
            pos += count;
          }
        }
        const l = scanline_width;
        for (let i = 0; i < l; i++) {
          let off = 0;
          data_rgba[offset] = scanline_buffer[i + off];
          off += scanline_width;
          data_rgba[offset + 1] = scanline_buffer[i + off];
          off += scanline_width;
          data_rgba[offset + 2] = scanline_buffer[i + off];
          off += scanline_width;
          data_rgba[offset + 3] = scanline_buffer[i + off];
          offset += 4;
        }
        num_scanlines--;
      }
      return data_rgba;
    };
    const RGBEByteToRGBFloat = function(sourceArray, sourceOffset, destArray, destOffset) {
      const e = sourceArray[sourceOffset + 3];
      const scale = Math.pow(2, e - 128) / 255;
      destArray[destOffset + 0] = sourceArray[sourceOffset + 0] * scale;
      destArray[destOffset + 1] = sourceArray[sourceOffset + 1] * scale;
      destArray[destOffset + 2] = sourceArray[sourceOffset + 2] * scale;
      destArray[destOffset + 3] = 1;
    };
    const RGBEByteToRGBHalf = function(sourceArray, sourceOffset, destArray, destOffset) {
      const e = sourceArray[sourceOffset + 3];
      const scale = Math.pow(2, e - 128) / 255;
      destArray[destOffset + 0] = DataUtils.toHalfFloat(Math.min(sourceArray[sourceOffset + 0] * scale, 65504));
      destArray[destOffset + 1] = DataUtils.toHalfFloat(Math.min(sourceArray[sourceOffset + 1] * scale, 65504));
      destArray[destOffset + 2] = DataUtils.toHalfFloat(Math.min(sourceArray[sourceOffset + 2] * scale, 65504));
      destArray[destOffset + 3] = DataUtils.toHalfFloat(1);
    };
    const byteArray = new Uint8Array(buffer);
    byteArray.pos = 0;
    const rgbe_header_info = RGBE_ReadHeader(byteArray);
    if (RGBE_RETURN_FAILURE !== rgbe_header_info) {
      const w = rgbe_header_info.width, h = rgbe_header_info.height, image_rgba_data = RGBE_ReadPixels_RLE(byteArray.subarray(byteArray.pos), w, h);
      if (RGBE_RETURN_FAILURE !== image_rgba_data) {
        let data, type;
        let numElements;
        switch (this.type) {
          case FloatType:
            numElements = image_rgba_data.length / 4;
            const floatArray = new Float32Array(numElements * 4);
            for (let j = 0; j < numElements; j++) {
              RGBEByteToRGBFloat(image_rgba_data, j * 4, floatArray, j * 4);
            }
            data = floatArray;
            type = FloatType;
            break;
          case HalfFloatType2:
            numElements = image_rgba_data.length / 4;
            const halfArray = new Uint16Array(numElements * 4);
            for (let j = 0; j < numElements; j++) {
              RGBEByteToRGBHalf(image_rgba_data, j * 4, halfArray, j * 4);
            }
            data = halfArray;
            type = HalfFloatType2;
            break;
          default:
            console.error("THREE.RGBELoader: unsupported type: ", this.type);
            break;
        }
        return {
          width: w,
          height: h,
          data,
          header: rgbe_header_info.string,
          gamma: rgbe_header_info.gamma,
          exposure: rgbe_header_info.exposure,
          type
        };
      }
    }
    return null;
  }
  setDataType(value) {
    this.type = value;
    return this;
  }
  load(url, onLoad, onProgress, onError) {
    function onLoadCallback(texture, texData) {
      switch (texture.type) {
        case FloatType:
        case HalfFloatType2:
          texture.encoding = LinearEncoding;
          texture.minFilter = LinearFilter3;
          texture.magFilter = LinearFilter3;
          texture.generateMipmaps = false;
          texture.flipY = true;
          break;
      }
      if (onLoad)
        onLoad(texture, texData);
    }
    return super.load(url, onLoadCallback, onProgress, onError);
  }
};

// src/Gradient/comps/Lights/Environment/useRGBELoader.ts
import { useLoader } from "@react-three/fiber";
function useRGBELoader(file, { path }) {
  const cubeTexture = useLoader(
    RGBELoader,
    file,
    (loader) => loader.setPath(path)
  );
  return cubeTexture;
}

// src/Gradient/comps/Lights/Environment/EnvironmentMap.tsx
var isRef = (obj) => obj.current && obj.current.isScene;
var resolveScene = (scene) => isRef(scene) ? scene.current : scene;
function EnvironmentMap({ background = false, envPreset }) {
  const city = useRGBELoader("city.hdr", { path: envBasePath });
  const dawn = useRGBELoader("dawn.hdr", { path: envBasePath });
  const lobby = useRGBELoader("lobby.hdr", { path: envBasePath });
  const textures = { city, dawn, lobby };
  const map = textures[envPreset];
  const defaultScene = useThree8((state) => state.scene);
  React6.useLayoutEffect(() => {
    if (map) {
      const target2 = resolveScene(defaultScene);
      const oldbg = target2.background;
      const oldenv = target2.environment;
      if (background !== "only")
        target2.environment = map;
      if (background)
        target2.background = map;
      return () => {
        if (background !== "only")
          target2.environment = oldenv;
        if (background)
          target2.background = "black";
      };
    }
  }, [defaultScene, map, background]);
  const texture = map;
  texture.mapping = EquirectangularReflectionMapping;
  return null;
}

// src/Gradient/comps/Lights/Lights.tsx
import { Fragment as Fragment6, jsx as jsx8, jsxs as jsxs5 } from "react/jsx-runtime";
function Lights({ lightType, brightness, envPreset }) {
  const setLoadingPercentage = useUIStore(
    (state) => state.setLoadingPercentage
  );
  return /* @__PURE__ */ jsxs5(Fragment6, { children: [
    lightType === "3d" && /* @__PURE__ */ jsx8("ambientLight", { intensity: brightness || 1 }),
    lightType === "env" && /* @__PURE__ */ jsx8(
      EnvironmentMap,
      {
        envPreset,
        background: true,
        loadingCallback: setLoadingPercentage
      }
    )
  ] });
}

// src/Gradient/comps/Mesh/Mesh.tsx
import { useEffect as useEffect8 } from "react";
import { useRef as useRef7 } from "react";
import * as THREE7 from "three";

// src/Gradient/comps/Mesh/lineMaterial.ts
import * as THREE4 from "three";
function lineMaterial(uniforms, vertexShader, onInit) {
  return class extends THREE4.LineBasicMaterial {
    constructor() {
      const entries = Object.entries(uniforms);
      const uniformValues = entries.reduce((acc, [name, value]) => {
        const uniform = THREE4.UniformsUtils.clone({ [name]: { value } });
        return __spreadValues(__spreadValues({}, acc), uniform);
      }, {});
      super({
        color: "#ffffff",
        linewidth: 5,
        userData: uniformValues,
        onBeforeCompile: (shader) => {
          shader.uniforms = __spreadValues(__spreadValues({}, shader.uniforms), uniformValues);
          shader.vertexShader = vertexShader;
        }
      });
      entries.forEach(
        ([name]) => Object.defineProperty(this, name, {
          get: () => this.uniforms[name].value,
          set: (v) => this.uniforms[name].value = v
        })
      );
      if (onInit)
        onInit(this);
    }
  };
}

// src/Gradient/comps/Mesh/shaderMaterial.ts
import * as THREE5 from "three";
function shaderMaterial(uniforms, vertexShader, fragmentShader, onInit) {
  return class extends THREE5.MeshPhysicalMaterial {
    constructor() {
      const entries = Object.entries(uniforms);
      const colors2 = uniforms.colors;
      const uC1 = hexToRgb(colors2[0]);
      const uC2 = hexToRgb(colors2[1]);
      const uC3 = hexToRgb(colors2[2]);
      const rgbColors = {
        uC1r: { value: formatColor(uC1 == null ? void 0 : uC1.r) },
        uC1g: { value: formatColor(uC1 == null ? void 0 : uC1.g) },
        uC1b: { value: formatColor(uC1 == null ? void 0 : uC1.b) },
        uC2r: { value: formatColor(uC2 == null ? void 0 : uC2.r) },
        uC2g: { value: formatColor(uC2 == null ? void 0 : uC2.g) },
        uC2b: { value: formatColor(uC2 == null ? void 0 : uC2.b) },
        uC3r: { value: formatColor(uC3 == null ? void 0 : uC3.r) },
        uC3g: { value: formatColor(uC3 == null ? void 0 : uC3.g) },
        uC3b: { value: formatColor(uC3 == null ? void 0 : uC3.b) }
      };
      const uniformValues = entries.reduce((acc, [name, value]) => {
        const uniform = THREE5.UniformsUtils.clone({ [name]: { value } });
        return __spreadValues(__spreadValues({}, acc), uniform);
      }, {});
      super({
        metalness: 0.2,
        userData: uniformValues,
        side: THREE5.DoubleSide,
        onBeforeCompile: (shader) => {
          shader.uniforms = __spreadValues(__spreadValues(__spreadValues({}, shader.uniforms), uniformValues), rgbColors);
          shader.vertexShader = vertexShader;
          shader.fragmentShader = fragmentShader;
        }
      });
      entries.forEach(
        ([name]) => Object.defineProperty(this, name, {
          get: () => this.uniforms[name].value,
          set: (v) => this.uniforms[name].value = v
        })
      );
      if (onInit)
        onInit(this);
    }
  };
}
function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}
function formatColor(color = 0) {
  return color / 255;
}

// src/Gradient/comps/Mesh/shaders/index.ts
var shaders_exports = {};
__export(shaders_exports, {
  defaults: () => defaults_exports,
  positionMix: () => positionMix_exports
});

// src/Gradient/comps/Mesh/shaders/defaults/index.ts
var defaults_exports = {};
__export(defaults_exports, {
  plane: () => plane_exports,
  sphere: () => sphere_exports,
  waterPlane: () => waterPlane_exports
});

// src/Gradient/comps/Mesh/shaders/defaults/plane/index.ts
var plane_exports = {};
__export(plane_exports, {
  fragment: () => fragment_default,
  vertex: () => vertex_default
});

// src/Gradient/comps/Mesh/shaders/defaults/plane/fragment.glsl
var fragment_default = "\n#define STANDARD\n#ifdef PHYSICAL\n#define REFLECTIVITY\n#define CLEARCOAT\n#define TRANSMISSION\n#endif\nuniform vec3 diffuse;uniform vec3 emissive;uniform float roughness;uniform float metalness;uniform float opacity;\n#ifdef TRANSMISSION\nuniform float transmission;\n#endif\n#ifdef REFLECTIVITY\nuniform float reflectivity;\n#endif\n#ifdef CLEARCOAT\nuniform float clearcoat;uniform float clearcoatRoughness;\n#endif\n#ifdef USE_SHEEN\nuniform vec3 sheen;\n#endif\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n#ifdef USE_TANGENT\nvarying vec3 vTangent;varying vec3 vBitangent;\n#endif\n#endif\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <color_pars_fragment>\n#include <common>\n#include <dithering_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <map_pars_fragment>\n#include <packing>\n#include <uv2_pars_fragment>\n#include <uv_pars_fragment>\n#include <bsdfs>\n#include <bumpmap_pars_fragment>\n#include <clearcoat_pars_fragment>\n#include <clipping_planes_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <lights_physical_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <shadowmap_pars_fragment>\nvarying vec3 vNormal;varying float displacement;varying vec3 vPos;varying float vDistort;uniform float uC1r;uniform float uC1g;uniform float uC1b;uniform float uC2r;uniform float uC2g;uniform float uC2b;uniform float uC3r;uniform float uC3g;uniform float uC3b;varying vec3 color1;varying vec3 color2;varying vec3 color3;float linearToRelativeLuminance2(const in vec3 color){vec3 weights=vec3(0.2126,0.7152,0.0722);return dot(weights,color.rgb);}void main(){vec3 color1=vec3(uC1r,uC1g,uC1b);vec3 color2=vec3(uC2r,uC2g,uC2b);vec3 color3=vec3(uC3r,uC3g,uC3b);float clearcoat=1.0;float clearcoatRoughness=0.5;\n#include <clipping_planes_fragment>\nvec4 diffuseColor=vec4(mix(mix(color1,color2,smoothstep(-3.0,3.0,vPos.x)),color3,vPos.z),1);ReflectedLight reflectedLight=ReflectedLight(vec3(0.0),vec3(0.0),vec3(0.0),vec3(0.0));vec3 totalEmissiveRadiance=emissive;\n#ifdef TRANSMISSION\nfloat totalTransmission=transmission;\n#endif\n#include <logdepthbuf_fragment>\n#include <map_fragment>\n#include <color_fragment>\n#include <alphamap_fragment>\n#include <alphatest_fragment>\n#include <roughnessmap_fragment>\n#include <metalnessmap_fragment>\n#include <normal_fragment_begin>\n#include <normal_fragment_maps>\n#include <clearcoat_normal_fragment_begin>\n#include <clearcoat_normal_fragment_maps>\n#include <emissivemap_fragment>\n#include <lights_physical_fragment>\n#include <lights_fragment_begin>\n#include <lights_fragment_maps>\n#include <lights_fragment_end>\n#include <aomap_fragment>\nvec3 outgoingLight=reflectedLight.directDiffuse+reflectedLight.indirectDiffuse+reflectedLight.directSpecular+reflectedLight.indirectSpecular;\n#ifdef TRANSMISSION\ndiffuseColor.a*=mix(saturate(1.-totalTransmission+linearToRelativeLuminance2(reflectedLight.directSpecular+reflectedLight.indirectSpecular)),1.0,metalness);\n#endif\n#include <tonemapping_fragment>\n#include <encodings_fragment>\n#include <fog_fragment>\n#include <premultiplied_alpha_fragment>\n#include <dithering_fragment>\ngl_FragColor=vec4(outgoingLight,diffuseColor.a);}";

// src/Gradient/comps/Mesh/shaders/defaults/plane/vertex.glsl
var vertex_default = "vec3 mod289(vec3 x){return x-floor(x*(1.0/289.0))*289.0;}vec4 mod289(vec4 x){return x-floor(x*(1.0/289.0))*289.0;}vec4 permute(vec4 x){return mod289(((x*34.0)+1.0)*x);}vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}vec3 fade(vec3 t){return t*t*t*(t*(t*6.0-15.0)+10.0);}float cnoise(vec3 P){vec3 Pi0=floor(P);vec3 Pi1=Pi0+vec3(1.0);Pi0=mod289(Pi0);Pi1=mod289(Pi1);vec3 Pf0=fract(P);vec3 Pf1=Pf0-vec3(1.0);vec4 ix=vec4(Pi0.x,Pi1.x,Pi0.x,Pi1.x);vec4 iy=vec4(Pi0.yy,Pi1.yy);vec4 iz0=Pi0.zzzz;vec4 iz1=Pi1.zzzz;vec4 ixy=permute(permute(ix)+iy);vec4 ixy0=permute(ixy+iz0);vec4 ixy1=permute(ixy+iz1);vec4 gx0=ixy0*(1.0/7.0);vec4 gy0=fract(floor(gx0)*(1.0/7.0))-0.5;gx0=fract(gx0);vec4 gz0=vec4(0.5)-abs(gx0)-abs(gy0);vec4 sz0=step(gz0,vec4(0.0));gx0-=sz0*(step(0.0,gx0)-0.5);gy0-=sz0*(step(0.0,gy0)-0.5);vec4 gx1=ixy1*(1.0/7.0);vec4 gy1=fract(floor(gx1)*(1.0/7.0))-0.5;gx1=fract(gx1);vec4 gz1=vec4(0.5)-abs(gx1)-abs(gy1);vec4 sz1=step(gz1,vec4(0.0));gx1-=sz1*(step(0.0,gx1)-0.5);gy1-=sz1*(step(0.0,gy1)-0.5);vec3 g000=vec3(gx0.x,gy0.x,gz0.x);vec3 g100=vec3(gx0.y,gy0.y,gz0.y);vec3 g010=vec3(gx0.z,gy0.z,gz0.z);vec3 g110=vec3(gx0.w,gy0.w,gz0.w);vec3 g001=vec3(gx1.x,gy1.x,gz1.x);vec3 g101=vec3(gx1.y,gy1.y,gz1.y);vec3 g011=vec3(gx1.z,gy1.z,gz1.z);vec3 g111=vec3(gx1.w,gy1.w,gz1.w);vec4 norm0=taylorInvSqrt(vec4(dot(g000,g000),dot(g010,g010),dot(g100,g100),dot(g110,g110)));g000*=norm0.x;g010*=norm0.y;g100*=norm0.z;g110*=norm0.w;vec4 norm1=taylorInvSqrt(vec4(dot(g001,g001),dot(g011,g011),dot(g101,g101),dot(g111,g111)));g001*=norm1.x;g011*=norm1.y;g101*=norm1.z;g111*=norm1.w;float n000=dot(g000,Pf0);float n100=dot(g100,vec3(Pf1.x,Pf0.yz));float n010=dot(g010,vec3(Pf0.x,Pf1.y,Pf0.z));float n110=dot(g110,vec3(Pf1.xy,Pf0.z));float n001=dot(g001,vec3(Pf0.xy,Pf1.z));float n101=dot(g101,vec3(Pf1.x,Pf0.y,Pf1.z));float n011=dot(g011,vec3(Pf0.x,Pf1.yz));float n111=dot(g111,Pf1);vec3 fade_xyz=fade(Pf0);vec4 n_z=mix(vec4(n000,n100,n010,n110),vec4(n001,n101,n011,n111),fade_xyz.z);vec2 n_yz=mix(n_z.xy,n_z.zw,fade_xyz.y);float n_xyz=mix(n_yz.x,n_yz.y,fade_xyz.x);return 2.2*n_xyz;}mat3 rotation3dY(float angle){float s=sin(angle);float c=cos(angle);return mat3(c,0.0,-s,0.0,1.0,0.0,s,0.0,c);}vec3 rotateY(vec3 v,float angle){return rotation3dY(angle)*v;}varying vec3 vNormal;varying float displacement;varying vec3 vPos;varying float vDistort;varying vec2 vUv;uniform float uTime;uniform float uSpeed;uniform float uLoadingTime;uniform float uNoiseDensity;uniform float uNoiseStrength;\n#define STANDARD\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n#ifdef USE_TANGENT\nvarying vec3 vTangent;varying vec3 vBitangent;\n#endif\n#endif\n#include <clipping_planes_pars_vertex>\n#include <color_pars_vertex>\n#include <common>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <skinning_pars_vertex>\n#include <uv2_pars_vertex>\n#include <uv_pars_vertex>\nvoid main(){\n#include <beginnormal_vertex>\n#include <color_vertex>\n#include <defaultnormal_vertex>\n#include <morphnormal_vertex>\n#include <skinbase_vertex>\n#include <skinnormal_vertex>\n#include <uv2_vertex>\n#include <uv_vertex>\n#ifndef FLAT_SHADED\nvNormal=normalize(transformedNormal);\n#ifdef USE_TANGENT\nvTangent=normalize(transformedTangent);vBitangent=normalize(cross(vNormal,vTangent)*tangent.w);\n#endif\n#endif\n#include <begin_vertex>\n#include <clipping_planes_vertex>\n#include <displacementmap_vertex>\n#include <logdepthbuf_vertex>\n#include <morphtarget_vertex>\n#include <project_vertex>\n#include <skinning_vertex>\nvViewPosition=-mvPosition.xyz;\n#include <fog_vertex>\n#include <shadowmap_vertex>\n#include <worldpos_vertex>\nvUv=uv;float t=uTime*uSpeed;float distortion=0.75*cnoise(0.43*position*uNoiseDensity+t);vec3 pos=position+normal*distortion*uNoiseStrength*uLoadingTime;vPos=pos;gl_Position=projectionMatrix*modelViewMatrix*vec4(pos,1.);}";

// src/Gradient/comps/Mesh/shaders/defaults/sphere/index.ts
var sphere_exports = {};
__export(sphere_exports, {
  fragment: () => fragment_default2,
  vertex: () => vertex_default2
});

// src/Gradient/comps/Mesh/shaders/defaults/sphere/fragment.glsl
var fragment_default2 = "\n#define STANDARD\n#ifdef PHYSICAL\n#define REFLECTIVITY\n#define CLEARCOAT\n#define TRANSMISSION\n#endif\nuniform vec3 diffuse;uniform vec3 emissive;uniform float roughness;uniform float metalness;uniform float opacity;\n#ifdef TRANSMISSION\nuniform float transmission;\n#endif\n#ifdef REFLECTIVITY\nuniform float reflectivity;\n#endif\n#ifdef CLEARCOAT\nuniform float clearcoat;uniform float clearcoatRoughness;\n#endif\n#ifdef USE_SHEEN\nuniform vec3 sheen;\n#endif\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n#ifdef USE_TANGENT\nvarying vec3 vTangent;varying vec3 vBitangent;\n#endif\n#endif\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <color_pars_fragment>\n#include <common>\n#include <dithering_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <map_pars_fragment>\n#include <packing>\n#include <uv2_pars_fragment>\n#include <uv_pars_fragment>\n#include <bsdfs>\n#include <bumpmap_pars_fragment>\n#include <clearcoat_pars_fragment>\n#include <clipping_planes_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <lights_physical_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <shadowmap_pars_fragment>\nvarying vec3 vNormal;varying float displacement;varying vec3 vPos;varying float vDistort;uniform float uC1r;uniform float uC1g;uniform float uC1b;uniform float uC2r;uniform float uC2g;uniform float uC2b;uniform float uC3r;uniform float uC3g;uniform float uC3b;varying vec3 color1;varying vec3 color2;varying vec3 color3;varying float distanceToCenter;float linearToRelativeLuminance2(const in vec3 color){vec3 weights=vec3(0.2126,0.7152,0.0722);return dot(weights,color.rgb);}void main(){vec3 color1=vec3(uC1r,uC1g,uC1b);vec3 color2=vec3(uC2r,uC2g,uC2b);vec3 color3=vec3(uC3r,uC3g,uC3b);float clearcoat=1.0;float clearcoatRoughness=0.5;\n#include <clipping_planes_fragment>\nfloat distanceToCenter=distance(vPos,vec3(0,0,0));vec4 diffuseColor=vec4(mix(color3,mix(color2,color1,smoothstep(-1.0,1.0,vPos.y)),distanceToCenter),1);ReflectedLight reflectedLight=ReflectedLight(vec3(0.0),vec3(0.0),vec3(0.0),vec3(0.0));vec3 totalEmissiveRadiance=emissive;\n#ifdef TRANSMISSION\nfloat totalTransmission=transmission;\n#endif\n#include <logdepthbuf_fragment>\n#include <map_fragment>\n#include <color_fragment>\n#include <alphamap_fragment>\n#include <alphatest_fragment>\n#include <roughnessmap_fragment>\n#include <metalnessmap_fragment>\n#include <normal_fragment_begin>\n#include <normal_fragment_maps>\n#include <clearcoat_normal_fragment_begin>\n#include <clearcoat_normal_fragment_maps>\n#include <emissivemap_fragment>\n#include <lights_physical_fragment>\n#include <lights_fragment_begin>\n#include <lights_fragment_maps>\n#include <lights_fragment_end>\n#include <aomap_fragment>\nvec3 outgoingLight=reflectedLight.directDiffuse+reflectedLight.indirectDiffuse+reflectedLight.directSpecular+reflectedLight.indirectSpecular;\n#ifdef TRANSMISSION\ndiffuseColor.a*=mix(saturate(1.-totalTransmission+linearToRelativeLuminance2(reflectedLight.directSpecular+reflectedLight.indirectSpecular)),1.0,metalness);\n#endif\ngl_FragColor=vec4(outgoingLight,diffuseColor.a);\n#include <tonemapping_fragment>\n#include <encodings_fragment>\n#include <fog_fragment>\n#include <premultiplied_alpha_fragment>\n#include <dithering_fragment>\n}";

// src/Gradient/comps/Mesh/shaders/defaults/sphere/vertex.glsl
var vertex_default2 = "vec3 mod289(vec3 x){return x-floor(x*(1.0/289.0))*289.0;}vec4 mod289(vec4 x){return x-floor(x*(1.0/289.0))*289.0;}vec4 permute(vec4 x){return mod289(((x*34.0)+1.0)*x);}vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}vec3 fade(vec3 t){return t*t*t*(t*(t*6.0-15.0)+10.0);}float pnoise(vec3 P,vec3 rep){vec3 Pi0=mod(floor(P),rep);vec3 Pi1=mod(Pi0+vec3(1.0),rep);Pi0=mod289(Pi0);Pi1=mod289(Pi1);vec3 Pf0=fract(P);vec3 Pf1=Pf0-vec3(1.0);vec4 ix=vec4(Pi0.x,Pi1.x,Pi0.x,Pi1.x);vec4 iy=vec4(Pi0.yy,Pi1.yy);vec4 iz0=Pi0.zzzz;vec4 iz1=Pi1.zzzz;vec4 ixy=permute(permute(ix)+iy);vec4 ixy0=permute(ixy+iz0);vec4 ixy1=permute(ixy+iz1);vec4 gx0=ixy0*(1.0/7.0);vec4 gy0=fract(floor(gx0)*(1.0/7.0))-0.5;gx0=fract(gx0);vec4 gz0=vec4(0.5)-abs(gx0)-abs(gy0);vec4 sz0=step(gz0,vec4(0.0));gx0-=sz0*(step(0.0,gx0)-0.5);gy0-=sz0*(step(0.0,gy0)-0.5);vec4 gx1=ixy1*(1.0/7.0);vec4 gy1=fract(floor(gx1)*(1.0/7.0))-0.5;gx1=fract(gx1);vec4 gz1=vec4(0.5)-abs(gx1)-abs(gy1);vec4 sz1=step(gz1,vec4(0.0));gx1-=sz1*(step(0.0,gx1)-0.5);gy1-=sz1*(step(0.0,gy1)-0.5);vec3 g000=vec3(gx0.x,gy0.x,gz0.x);vec3 g100=vec3(gx0.y,gy0.y,gz0.y);vec3 g010=vec3(gx0.z,gy0.z,gz0.z);vec3 g110=vec3(gx0.w,gy0.w,gz0.w);vec3 g001=vec3(gx1.x,gy1.x,gz1.x);vec3 g101=vec3(gx1.y,gy1.y,gz1.y);vec3 g011=vec3(gx1.z,gy1.z,gz1.z);vec3 g111=vec3(gx1.w,gy1.w,gz1.w);vec4 norm0=taylorInvSqrt(vec4(dot(g000,g000),dot(g010,g010),dot(g100,g100),dot(g110,g110)));g000*=norm0.x;g010*=norm0.y;g100*=norm0.z;g110*=norm0.w;vec4 norm1=taylorInvSqrt(vec4(dot(g001,g001),dot(g011,g011),dot(g101,g101),dot(g111,g111)));g001*=norm1.x;g011*=norm1.y;g101*=norm1.z;g111*=norm1.w;float n000=dot(g000,Pf0);float n100=dot(g100,vec3(Pf1.x,Pf0.yz));float n010=dot(g010,vec3(Pf0.x,Pf1.y,Pf0.z));float n110=dot(g110,vec3(Pf1.xy,Pf0.z));float n001=dot(g001,vec3(Pf0.xy,Pf1.z));float n101=dot(g101,vec3(Pf1.x,Pf0.y,Pf1.z));float n011=dot(g011,vec3(Pf0.x,Pf1.yz));float n111=dot(g111,Pf1);vec3 fade_xyz=fade(Pf0);vec4 n_z=mix(vec4(n000,n100,n010,n110),vec4(n001,n101,n011,n111),fade_xyz.z);vec2 n_yz=mix(n_z.xy,n_z.zw,fade_xyz.y);float n_xyz=mix(n_yz.x,n_yz.y,fade_xyz.x);return 2.2*n_xyz;}varying vec3 vNormal;uniform float uTime;uniform float uSpeed;uniform float uNoiseDensity;uniform float uNoiseStrength;uniform float uFrequency;uniform float uAmplitude;varying vec3 vPos;varying float vDistort;varying vec2 vUv;varying vec3 vViewPosition;\n#define STANDARD\n#ifndef FLAT_SHADED\n#ifdef USE_TANGENT\nvarying vec3 vTangent;varying vec3 vBitangent;\n#endif\n#endif\n#include <clipping_planes_pars_vertex>\n#include <color_pars_vertex>\n#include <common>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <skinning_pars_vertex>\n#include <uv2_pars_vertex>\n#include <uv_pars_vertex>\nmat3 rotation3dY(float angle){float s=sin(angle);float c=cos(angle);return mat3(c,0.0,-s,0.0,1.0,0.0,s,0.0,c);}vec3 rotateY(vec3 v,float angle){return rotation3dY(angle)*v;}void main(){\n#include <beginnormal_vertex>\n#include <color_vertex>\n#include <defaultnormal_vertex>\n#include <morphnormal_vertex>\n#include <skinbase_vertex>\n#include <skinnormal_vertex>\n#include <uv2_vertex>\n#include <uv_vertex>\n#ifndef FLAT_SHADED\nvNormal=normalize(transformedNormal);\n#ifdef USE_TANGENT\nvTangent=normalize(transformedTangent);vBitangent=normalize(cross(vNormal,vTangent)*tangent.w);\n#endif\n#endif\n#include <begin_vertex>\n#include <clipping_planes_vertex>\n#include <displacementmap_vertex>\n#include <logdepthbuf_vertex>\n#include <morphtarget_vertex>\n#include <project_vertex>\n#include <skinning_vertex>\nvViewPosition=-mvPosition.xyz;\n#include <fog_vertex>\n#include <shadowmap_vertex>\n#include <worldpos_vertex>\nfloat t=uTime*uSpeed;float distortion=pnoise((normal+t)*uNoiseDensity,vec3(10.0))*uNoiseStrength;vec3 pos=position+(normal*distortion);float angle=sin(uv.y*uFrequency+t)*uAmplitude;pos=rotateY(pos,angle);vPos=pos;vDistort=distortion;vNormal=normal;vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(pos,1.);}";

// src/Gradient/comps/Mesh/shaders/defaults/waterPlane/index.ts
var waterPlane_exports = {};
__export(waterPlane_exports, {
  fragment: () => fragment_default3,
  vertex: () => vertex_default3
});

// src/Gradient/comps/Mesh/shaders/defaults/waterPlane/fragment.glsl
var fragment_default3 = "\n#define STANDARD\n#ifdef PHYSICAL\n#define REFLECTIVITY\n#define CLEARCOAT\n#define TRANSMISSION\n#endif\nuniform vec3 diffuse;uniform vec3 emissive;uniform float roughness;uniform float metalness;uniform float opacity;\n#ifdef TRANSMISSION\nuniform float transmission;\n#endif\n#ifdef REFLECTIVITY\nuniform float reflectivity;\n#endif\n#ifdef CLEARCOAT\nuniform float clearcoat;uniform float clearcoatRoughness;\n#endif\n#ifdef USE_SHEEN\nuniform vec3 sheen;\n#endif\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n#ifdef USE_TANGENT\nvarying vec3 vTangent;varying vec3 vBitangent;\n#endif\n#endif\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <color_pars_fragment>\n#include <common>\n#include <dithering_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <map_pars_fragment>\n#include <packing>\n#include <uv2_pars_fragment>\n#include <uv_pars_fragment>\n#include <bsdfs>\n#include <bumpmap_pars_fragment>\n#include <clearcoat_pars_fragment>\n#include <clipping_planes_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <lights_physical_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <shadowmap_pars_fragment>\nvarying vec3 vNormal;varying float displacement;varying vec3 vPos;varying float vDistort;uniform float uC1r;uniform float uC1g;uniform float uC1b;uniform float uC2r;uniform float uC2g;uniform float uC2b;uniform float uC3r;uniform float uC3g;uniform float uC3b;varying vec3 color1;varying vec3 color2;varying vec3 color3;float linearToRelativeLuminance2(const in vec3 color){vec3 weights=vec3(0.2126,0.7152,0.0722);return dot(weights,color.rgb);}void main(){vec3 color1=vec3(uC1r,uC1g,uC1b);vec3 color2=vec3(uC2r,uC2g,uC2b);vec3 color3=vec3(uC3r,uC3g,uC3b);float clearcoat=1.0;float clearcoatRoughness=0.5;\n#include <clipping_planes_fragment>\nvec4 diffuseColor=vec4(mix(mix(color1,color2,smoothstep(-3.0,3.0,vPos.x)),color3,vPos.z),1);ReflectedLight reflectedLight=ReflectedLight(vec3(0.0),vec3(0.0),vec3(0.0),vec3(0.0));vec3 totalEmissiveRadiance=emissive;\n#ifdef TRANSMISSION\nfloat totalTransmission=transmission;\n#endif\n#include <logdepthbuf_fragment>\n#include <map_fragment>\n#include <color_fragment>\n#include <alphamap_fragment>\n#include <alphatest_fragment>\n#include <roughnessmap_fragment>\n#include <metalnessmap_fragment>\n#include <normal_fragment_begin>\n#include <normal_fragment_maps>\n#include <clearcoat_normal_fragment_begin>\n#include <clearcoat_normal_fragment_maps>\n#include <emissivemap_fragment>\n#include <lights_physical_fragment>\n#include <lights_fragment_begin>\n#include <lights_fragment_maps>\n#include <lights_fragment_end>\n#include <aomap_fragment>\nvec3 outgoingLight=reflectedLight.directDiffuse+reflectedLight.indirectDiffuse+reflectedLight.directSpecular+reflectedLight.indirectSpecular;\n#ifdef TRANSMISSION\ndiffuseColor.a*=mix(saturate(1.-totalTransmission+linearToRelativeLuminance2(reflectedLight.directSpecular+reflectedLight.indirectSpecular)),1.0,metalness);\n#endif\n#include <tonemapping_fragment>\n#include <encodings_fragment>\n#include <fog_fragment>\n#include <premultiplied_alpha_fragment>\n#include <dithering_fragment>\ngl_FragColor=vec4(outgoingLight,diffuseColor.a);}";

// src/Gradient/comps/Mesh/shaders/defaults/waterPlane/vertex.glsl
var vertex_default3 = "vec3 mod289(vec3 x){return x-floor(x*(1.0/289.0))*289.0;}vec4 mod289(vec4 x){return x-floor(x*(1.0/289.0))*289.0;}vec4 permute(vec4 x){return mod289(((x*34.0)+1.0)*x);}vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}vec3 fade(vec3 t){return t*t*t*(t*(t*6.0-15.0)+10.0);}float cnoise(vec3 P){vec3 Pi0=floor(P);vec3 Pi1=Pi0+vec3(1.0);Pi0=mod289(Pi0);Pi1=mod289(Pi1);vec3 Pf0=fract(P);vec3 Pf1=Pf0-vec3(1.0);vec4 ix=vec4(Pi0.x,Pi1.x,Pi0.x,Pi1.x);vec4 iy=vec4(Pi0.yy,Pi1.yy);vec4 iz0=Pi0.zzzz;vec4 iz1=Pi1.zzzz;vec4 ixy=permute(permute(ix)+iy);vec4 ixy0=permute(ixy+iz0);vec4 ixy1=permute(ixy+iz1);vec4 gx0=ixy0*(1.0/7.0);vec4 gy0=fract(floor(gx0)*(1.0/7.0))-0.5;gx0=fract(gx0);vec4 gz0=vec4(0.5)-abs(gx0)-abs(gy0);vec4 sz0=step(gz0,vec4(0.0));gx0-=sz0*(step(0.0,gx0)-0.5);gy0-=sz0*(step(0.0,gy0)-0.5);vec4 gx1=ixy1*(1.0/7.0);vec4 gy1=fract(floor(gx1)*(1.0/7.0))-0.5;gx1=fract(gx1);vec4 gz1=vec4(0.5)-abs(gx1)-abs(gy1);vec4 sz1=step(gz1,vec4(0.0));gx1-=sz1*(step(0.0,gx1)-0.5);gy1-=sz1*(step(0.0,gy1)-0.5);vec3 g000=vec3(gx0.x,gy0.x,gz0.x);vec3 g100=vec3(gx0.y,gy0.y,gz0.y);vec3 g010=vec3(gx0.z,gy0.z,gz0.z);vec3 g110=vec3(gx0.w,gy0.w,gz0.w);vec3 g001=vec3(gx1.x,gy1.x,gz1.x);vec3 g101=vec3(gx1.y,gy1.y,gz1.y);vec3 g011=vec3(gx1.z,gy1.z,gz1.z);vec3 g111=vec3(gx1.w,gy1.w,gz1.w);vec4 norm0=taylorInvSqrt(vec4(dot(g000,g000),dot(g010,g010),dot(g100,g100),dot(g110,g110)));g000*=norm0.x;g010*=norm0.y;g100*=norm0.z;g110*=norm0.w;vec4 norm1=taylorInvSqrt(vec4(dot(g001,g001),dot(g011,g011),dot(g101,g101),dot(g111,g111)));g001*=norm1.x;g011*=norm1.y;g101*=norm1.z;g111*=norm1.w;float n000=dot(g000,Pf0);float n100=dot(g100,vec3(Pf1.x,Pf0.yz));float n010=dot(g010,vec3(Pf0.x,Pf1.y,Pf0.z));float n110=dot(g110,vec3(Pf1.xy,Pf0.z));float n001=dot(g001,vec3(Pf0.xy,Pf1.z));float n101=dot(g101,vec3(Pf1.x,Pf0.y,Pf1.z));float n011=dot(g011,vec3(Pf0.x,Pf1.yz));float n111=dot(g111,Pf1);vec3 fade_xyz=fade(Pf0);vec4 n_z=mix(vec4(n000,n100,n010,n110),vec4(n001,n101,n011,n111),fade_xyz.z);vec2 n_yz=mix(n_z.xy,n_z.zw,fade_xyz.y);float n_xyz=mix(n_yz.x,n_yz.y,fade_xyz.x);return 2.2*n_xyz;}mat3 rotation3dY(float angle){float s=sin(angle);float c=cos(angle);return mat3(c,0.0,-s,0.0,1.0,0.0,s,0.0,c);}vec3 rotateY(vec3 v,float angle){return rotation3dY(angle)*v;}varying vec3 vNormal;varying float displacement;varying vec3 vPos;varying float vDistort;uniform float uTime;uniform float uSpeed;uniform float uNoiseDensity;uniform float uNoiseStrength;\n#define STANDARD\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n#ifdef USE_TANGENT\nvarying vec3 vTangent;varying vec3 vBitangent;\n#endif\n#endif\n#include <clipping_planes_pars_vertex>\n#include <color_pars_vertex>\n#include <common>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <skinning_pars_vertex>\n#include <uv2_pars_vertex>\n#include <uv_pars_vertex>\nvoid main(){\n#include <beginnormal_vertex>\n#include <color_vertex>\n#include <defaultnormal_vertex>\n#include <morphnormal_vertex>\n#include <skinbase_vertex>\n#include <skinnormal_vertex>\n#include <uv2_vertex>\n#include <uv_vertex>\n#ifndef FLAT_SHADED\nvNormal=normalize(transformedNormal);\n#ifdef USE_TANGENT\nvTangent=normalize(transformedTangent);vBitangent=normalize(cross(vNormal,vTangent)*tangent.w);\n#endif\n#endif\n#include <begin_vertex>\n#include <clipping_planes_vertex>\n#include <displacementmap_vertex>\n#include <logdepthbuf_vertex>\n#include <morphtarget_vertex>\n#include <project_vertex>\n#include <skinning_vertex>\nvViewPosition=-mvPosition.xyz;\n#include <fog_vertex>\n#include <shadowmap_vertex>\n#include <worldpos_vertex>\nfloat t=uTime*uSpeed;float distortion=0.75*cnoise(0.43*position*uNoiseDensity+t);vec3 pos=position+normal*distortion*uNoiseStrength;vPos=pos;gl_Position=projectionMatrix*modelViewMatrix*vec4(pos,1.);}";

// src/Gradient/comps/Mesh/shaders/positionMix/index.ts
var positionMix_exports = {};
__export(positionMix_exports, {
  plane: () => plane_exports2,
  sphere: () => sphere_exports2,
  waterPlane: () => waterPlane_exports2
});

// src/Gradient/comps/Mesh/shaders/positionMix/plane/index.ts
var plane_exports2 = {};
__export(plane_exports2, {
  fragment: () => fragment_default4,
  vertex: () => vertex_default4
});

// src/Gradient/comps/Mesh/shaders/positionMix/plane/fragment.glsl
var fragment_default4 = "uniform float uC1r;uniform float uC1g;uniform float uC1b;uniform float uC2r;uniform float uC2g;uniform float uC2b;uniform float uC3r;uniform float uC3g;uniform float uC3b;varying vec3 vNormal;varying vec3 vPos;void main(){vec3 color1=vec3(uC1r,uC1g,uC1b);vec3 color2=vec3(uC2r,uC2g,uC2b);vec3 color3=vec3(uC3r,uC3g,uC3b);gl_FragColor=vec4(color1*vPos.x+color2*vPos.y+color3*vPos.z,1.);}";

// src/Gradient/comps/Mesh/shaders/positionMix/plane/vertex.glsl
var vertex_default4 = "vec3 mod289(vec3 x){return x-floor(x*(1.0/289.0))*289.0;}vec4 mod289(vec4 x){return x-floor(x*(1.0/289.0))*289.0;}vec4 permute(vec4 x){return mod289(((x*34.0)+1.0)*x);}vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}vec3 fade(vec3 t){return t*t*t*(t*(t*6.0-15.0)+10.0);}float cnoise(vec3 P){vec3 Pi0=floor(P);vec3 Pi1=Pi0+vec3(1.0);Pi0=mod289(Pi0);Pi1=mod289(Pi1);vec3 Pf0=fract(P);vec3 Pf1=Pf0-vec3(1.0);vec4 ix=vec4(Pi0.x,Pi1.x,Pi0.x,Pi1.x);vec4 iy=vec4(Pi0.yy,Pi1.yy);vec4 iz0=Pi0.zzzz;vec4 iz1=Pi1.zzzz;vec4 ixy=permute(permute(ix)+iy);vec4 ixy0=permute(ixy+iz0);vec4 ixy1=permute(ixy+iz1);vec4 gx0=ixy0*(1.0/7.0);vec4 gy0=fract(floor(gx0)*(1.0/7.0))-0.5;gx0=fract(gx0);vec4 gz0=vec4(0.5)-abs(gx0)-abs(gy0);vec4 sz0=step(gz0,vec4(0.0));gx0-=sz0*(step(0.0,gx0)-0.5);gy0-=sz0*(step(0.0,gy0)-0.5);vec4 gx1=ixy1*(1.0/7.0);vec4 gy1=fract(floor(gx1)*(1.0/7.0))-0.5;gx1=fract(gx1);vec4 gz1=vec4(0.5)-abs(gx1)-abs(gy1);vec4 sz1=step(gz1,vec4(0.0));gx1-=sz1*(step(0.0,gx1)-0.5);gy1-=sz1*(step(0.0,gy1)-0.5);vec3 g000=vec3(gx0.x,gy0.x,gz0.x);vec3 g100=vec3(gx0.y,gy0.y,gz0.y);vec3 g010=vec3(gx0.z,gy0.z,gz0.z);vec3 g110=vec3(gx0.w,gy0.w,gz0.w);vec3 g001=vec3(gx1.x,gy1.x,gz1.x);vec3 g101=vec3(gx1.y,gy1.y,gz1.y);vec3 g011=vec3(gx1.z,gy1.z,gz1.z);vec3 g111=vec3(gx1.w,gy1.w,gz1.w);vec4 norm0=taylorInvSqrt(vec4(dot(g000,g000),dot(g010,g010),dot(g100,g100),dot(g110,g110)));g000*=norm0.x;g010*=norm0.y;g100*=norm0.z;g110*=norm0.w;vec4 norm1=taylorInvSqrt(vec4(dot(g001,g001),dot(g011,g011),dot(g101,g101),dot(g111,g111)));g001*=norm1.x;g011*=norm1.y;g101*=norm1.z;g111*=norm1.w;float n000=dot(g000,Pf0);float n100=dot(g100,vec3(Pf1.x,Pf0.yz));float n010=dot(g010,vec3(Pf0.x,Pf1.y,Pf0.z));float n110=dot(g110,vec3(Pf1.xy,Pf0.z));float n001=dot(g001,vec3(Pf0.xy,Pf1.z));float n101=dot(g101,vec3(Pf1.x,Pf0.y,Pf1.z));float n011=dot(g011,vec3(Pf0.x,Pf1.yz));float n111=dot(g111,Pf1);vec3 fade_xyz=fade(Pf0);vec4 n_z=mix(vec4(n000,n100,n010,n110),vec4(n001,n101,n011,n111),fade_xyz.z);vec2 n_yz=mix(n_z.xy,n_z.zw,fade_xyz.y);float n_xyz=mix(n_yz.x,n_yz.y,fade_xyz.x);return 2.2*n_xyz;}mat3 rotation3dY(float angle){float s=sin(angle);float c=cos(angle);return mat3(c,0.0,-s,0.0,1.0,0.0,s,0.0,c);}vec3 rotateY(vec3 v,float angle){return rotation3dY(angle)*v;}varying vec3 vNormal;varying float displacement;varying vec3 vPos;varying float vDistort;varying vec2 vUv;uniform float uTime;uniform float uSpeed;uniform float uLoadingTime;uniform float uNoiseDensity;uniform float uNoiseStrength;\n#define STANDARD\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n#ifdef USE_TANGENT\nvarying vec3 vTangent;varying vec3 vBitangent;\n#endif\n#endif\n#include <clipping_planes_pars_vertex>\n#include <color_pars_vertex>\n#include <common>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <skinning_pars_vertex>\n#include <uv2_pars_vertex>\n#include <uv_pars_vertex>\nvoid main(){\n#include <beginnormal_vertex>\n#include <color_vertex>\n#include <defaultnormal_vertex>\n#include <morphnormal_vertex>\n#include <skinbase_vertex>\n#include <skinnormal_vertex>\n#include <uv2_vertex>\n#include <uv_vertex>\n#ifndef FLAT_SHADED\nvNormal=normalize(transformedNormal);\n#ifdef USE_TANGENT\nvTangent=normalize(transformedTangent);vBitangent=normalize(cross(vNormal,vTangent)*tangent.w);\n#endif\n#endif\n#include <begin_vertex>\n#include <clipping_planes_vertex>\n#include <displacementmap_vertex>\n#include <logdepthbuf_vertex>\n#include <morphtarget_vertex>\n#include <project_vertex>\n#include <skinning_vertex>\nvViewPosition=-mvPosition.xyz;\n#include <fog_vertex>\n#include <shadowmap_vertex>\n#include <worldpos_vertex>\nvUv=uv;float t=uTime*uSpeed;float distortion=0.75*cnoise(0.43*position*uNoiseDensity+t);vec3 pos=position+normal*distortion*uNoiseStrength*uLoadingTime;vPos=pos;gl_Position=projectionMatrix*modelViewMatrix*vec4(pos,1.);}";

// src/Gradient/comps/Mesh/shaders/positionMix/sphere/index.ts
var sphere_exports2 = {};
__export(sphere_exports2, {
  fragment: () => fragment_default5,
  vertex: () => vertex_default5
});

// src/Gradient/comps/Mesh/shaders/positionMix/sphere/fragment.glsl
var fragment_default5 = "\n#define STANDARD\n#ifdef PHYSICAL\n#define REFLECTIVITY\n#define CLEARCOAT\n#define TRANSMISSION\n#endif\nuniform vec3 diffuse;uniform vec3 emissive;uniform float roughness;uniform float metalness;uniform float opacity;\n#ifdef TRANSMISSION\nuniform float transmission;\n#endif\n#ifdef REFLECTIVITY\nuniform float reflectivity;\n#endif\n#ifdef CLEARCOAT\nuniform float clearcoat;uniform float clearcoatRoughness;\n#endif\n#ifdef USE_SHEEN\nuniform vec3 sheen;\n#endif\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n#ifdef USE_TANGENT\nvarying vec3 vTangent;varying vec3 vBitangent;\n#endif\n#endif\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <color_pars_fragment>\n#include <common>\n#include <dithering_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <map_pars_fragment>\n#include <packing>\n#include <uv2_pars_fragment>\n#include <uv_pars_fragment>\n#include <bsdfs>\n#include <bumpmap_pars_fragment>\n#include <clearcoat_pars_fragment>\n#include <clipping_planes_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <lights_physical_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <shadowmap_pars_fragment>\nvarying vec3 vNormal;varying float displacement;varying vec3 vPos;varying float vDistort;uniform float uC1r;uniform float uC1g;uniform float uC1b;uniform float uC2r;uniform float uC2g;uniform float uC2b;uniform float uC3r;uniform float uC3g;uniform float uC3b;varying vec3 color1;varying vec3 color2;varying vec3 color3;varying float distanceToCenter;void main(){vec3 color1=vec3(uC1r,uC1g,uC1b);vec3 color2=vec3(uC2r,uC2g,uC2b);vec3 color3=vec3(uC3r,uC3g,uC3b);float clearcoat=1.0;float clearcoatRoughness=0.5;\n#include <clipping_planes_fragment>\nfloat distanceToCenter=distance(vPos,vec3(0,0,0));vec4 diffuseColor=vec4(mix(color3,mix(color2,color1,smoothstep(-1.0,1.0,vPos.y)),distanceToCenter),1);ReflectedLight reflectedLight=ReflectedLight(vec3(0.0),vec3(0.0),vec3(0.0),vec3(0.0));vec3 totalEmissiveRadiance=emissive;\n#ifdef TRANSMISSION\nfloat totalTransmission=transmission;\n#endif\n#include <logdepthbuf_fragment>\n#include <map_fragment>\n#include <color_fragment>\n#include <alphamap_fragment>\n#include <alphatest_fragment>\n#include <roughnessmap_fragment>\n#include <metalnessmap_fragment>\n#include <normal_fragment_begin>\n#include <normal_fragment_maps>\n#include <clearcoat_normal_fragment_begin>\n#include <clearcoat_normal_fragment_maps>\n#include <emissivemap_fragment>\n#include <lights_physical_fragment>\n#include <lights_fragment_begin>\n#include <lights_fragment_maps>\n#include <lights_fragment_end>\n#include <aomap_fragment>\nvec3 outgoingLight=reflectedLight.directDiffuse+reflectedLight.indirectDiffuse+reflectedLight.directSpecular+reflectedLight.indirectSpecular;\n#ifdef TRANSMISSION\ndiffuseColor.a*=mix(saturate(1.-totalTransmission+linearToRelativeLuminance(reflectedLight.directSpecular+reflectedLight.indirectSpecular)),1.0,metalness);\n#endif\ngl_FragColor=vec4(outgoingLight,diffuseColor.a);\n#include <tonemapping_fragment>\n#include <encodings_fragment>\n#include <fog_fragment>\n#include <premultiplied_alpha_fragment>\n#include <dithering_fragment>\n}";

// src/Gradient/comps/Mesh/shaders/positionMix/sphere/vertex.glsl
var vertex_default5 = "vec3 mod289(vec3 x){return x-floor(x*(1.0/289.0))*289.0;}vec4 mod289(vec4 x){return x-floor(x*(1.0/289.0))*289.0;}vec4 permute(vec4 x){return mod289(((x*34.0)+1.0)*x);}vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}vec3 fade(vec3 t){return t*t*t*(t*(t*6.0-15.0)+10.0);}float pnoise(vec3 P,vec3 rep){vec3 Pi0=mod(floor(P),rep);vec3 Pi1=mod(Pi0+vec3(1.0),rep);Pi0=mod289(Pi0);Pi1=mod289(Pi1);vec3 Pf0=fract(P);vec3 Pf1=Pf0-vec3(1.0);vec4 ix=vec4(Pi0.x,Pi1.x,Pi0.x,Pi1.x);vec4 iy=vec4(Pi0.yy,Pi1.yy);vec4 iz0=Pi0.zzzz;vec4 iz1=Pi1.zzzz;vec4 ixy=permute(permute(ix)+iy);vec4 ixy0=permute(ixy+iz0);vec4 ixy1=permute(ixy+iz1);vec4 gx0=ixy0*(1.0/7.0);vec4 gy0=fract(floor(gx0)*(1.0/7.0))-0.5;gx0=fract(gx0);vec4 gz0=vec4(0.5)-abs(gx0)-abs(gy0);vec4 sz0=step(gz0,vec4(0.0));gx0-=sz0*(step(0.0,gx0)-0.5);gy0-=sz0*(step(0.0,gy0)-0.5);vec4 gx1=ixy1*(1.0/7.0);vec4 gy1=fract(floor(gx1)*(1.0/7.0))-0.5;gx1=fract(gx1);vec4 gz1=vec4(0.5)-abs(gx1)-abs(gy1);vec4 sz1=step(gz1,vec4(0.0));gx1-=sz1*(step(0.0,gx1)-0.5);gy1-=sz1*(step(0.0,gy1)-0.5);vec3 g000=vec3(gx0.x,gy0.x,gz0.x);vec3 g100=vec3(gx0.y,gy0.y,gz0.y);vec3 g010=vec3(gx0.z,gy0.z,gz0.z);vec3 g110=vec3(gx0.w,gy0.w,gz0.w);vec3 g001=vec3(gx1.x,gy1.x,gz1.x);vec3 g101=vec3(gx1.y,gy1.y,gz1.y);vec3 g011=vec3(gx1.z,gy1.z,gz1.z);vec3 g111=vec3(gx1.w,gy1.w,gz1.w);vec4 norm0=taylorInvSqrt(vec4(dot(g000,g000),dot(g010,g010),dot(g100,g100),dot(g110,g110)));g000*=norm0.x;g010*=norm0.y;g100*=norm0.z;g110*=norm0.w;vec4 norm1=taylorInvSqrt(vec4(dot(g001,g001),dot(g011,g011),dot(g101,g101),dot(g111,g111)));g001*=norm1.x;g011*=norm1.y;g101*=norm1.z;g111*=norm1.w;float n000=dot(g000,Pf0);float n100=dot(g100,vec3(Pf1.x,Pf0.yz));float n010=dot(g010,vec3(Pf0.x,Pf1.y,Pf0.z));float n110=dot(g110,vec3(Pf1.xy,Pf0.z));float n001=dot(g001,vec3(Pf0.xy,Pf1.z));float n101=dot(g101,vec3(Pf1.x,Pf0.y,Pf1.z));float n011=dot(g011,vec3(Pf0.x,Pf1.yz));float n111=dot(g111,Pf1);vec3 fade_xyz=fade(Pf0);vec4 n_z=mix(vec4(n000,n100,n010,n110),vec4(n001,n101,n011,n111),fade_xyz.z);vec2 n_yz=mix(n_z.xy,n_z.zw,fade_xyz.y);float n_xyz=mix(n_yz.x,n_yz.y,fade_xyz.x);return 2.2*n_xyz;}varying vec3 vNormal;uniform float uTime;uniform float uSpeed;uniform float uNoiseDensity;uniform float uNoiseStrength;uniform float uFrequency;uniform float uAmplitude;varying vec3 vPos;varying float vDistort;varying vec2 vUv;varying vec3 vViewPosition;\n#define STANDARD\n#ifndef FLAT_SHADED\n#ifdef USE_TANGENT\nvarying vec3 vTangent;varying vec3 vBitangent;\n#endif\n#endif\n#include <clipping_planes_pars_vertex>\n#include <color_pars_vertex>\n#include <common>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <skinning_pars_vertex>\n#include <uv2_pars_vertex>\n#include <uv_pars_vertex>\nmat3 rotation3dY(float angle){float s=sin(angle);float c=cos(angle);return mat3(c,0.0,-s,0.0,1.0,0.0,s,0.0,c);}vec3 rotateY(vec3 v,float angle){return rotation3dY(angle)*v;}void main(){\n#include <beginnormal_vertex>\n#include <color_vertex>\n#include <defaultnormal_vertex>\n#include <morphnormal_vertex>\n#include <skinbase_vertex>\n#include <skinnormal_vertex>\n#include <uv2_vertex>\n#include <uv_vertex>\n#ifndef FLAT_SHADED\nvNormal=normalize(transformedNormal);\n#ifdef USE_TANGENT\nvTangent=normalize(transformedTangent);vBitangent=normalize(cross(vNormal,vTangent)*tangent.w);\n#endif\n#endif\n#include <begin_vertex>\n#include <clipping_planes_vertex>\n#include <displacementmap_vertex>\n#include <logdepthbuf_vertex>\n#include <morphtarget_vertex>\n#include <project_vertex>\n#include <skinning_vertex>\nvViewPosition=-mvPosition.xyz;\n#include <fog_vertex>\n#include <shadowmap_vertex>\n#include <worldpos_vertex>\nfloat t=uTime*uSpeed;float distortion=pnoise((normal+t)*uNoiseDensity,vec3(10.0))*uNoiseStrength;vec3 pos=position+(normal*distortion);float angle=sin(uv.y*uFrequency+t)*uAmplitude;pos=rotateY(pos,angle);vPos=pos;vDistort=distortion;vNormal=normal;vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(pos,1.);}";

// src/Gradient/comps/Mesh/shaders/positionMix/waterPlane/index.ts
var waterPlane_exports2 = {};
__export(waterPlane_exports2, {
  fragment: () => fragment_default6,
  vertex: () => vertex_default6
});

// src/Gradient/comps/Mesh/shaders/positionMix/waterPlane/fragment.glsl
var fragment_default6 = "uniform float uC1r;uniform float uC1g;uniform float uC1b;uniform float uC2r;uniform float uC2g;uniform float uC2b;uniform float uC3r;uniform float uC3g;uniform float uC3b;varying vec3 vNormal;varying vec3 vPos;void main(){vec3 color1=vec3(uC1r,uC1g,uC1b);vec3 color2=vec3(uC2r,uC2g,uC2b);vec3 color3=vec3(uC3r,uC3g,uC3b);gl_FragColor=vec4(color1*vPos.x+color2*vPos.y+color3*vPos.z,1.);}";

// src/Gradient/comps/Mesh/shaders/positionMix/waterPlane/vertex.glsl
var vertex_default6 = "vec3 mod289(vec3 x){return x-floor(x*(1.0/289.0))*289.0;}vec4 mod289(vec4 x){return x-floor(x*(1.0/289.0))*289.0;}vec4 permute(vec4 x){return mod289(((x*34.0)+1.0)*x);}vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}vec3 fade(vec3 t){return t*t*t*(t*(t*6.0-15.0)+10.0);}float cnoise(vec3 P){vec3 Pi0=floor(P);vec3 Pi1=Pi0+vec3(1.0);Pi0=mod289(Pi0);Pi1=mod289(Pi1);vec3 Pf0=fract(P);vec3 Pf1=Pf0-vec3(1.0);vec4 ix=vec4(Pi0.x,Pi1.x,Pi0.x,Pi1.x);vec4 iy=vec4(Pi0.yy,Pi1.yy);vec4 iz0=Pi0.zzzz;vec4 iz1=Pi1.zzzz;vec4 ixy=permute(permute(ix)+iy);vec4 ixy0=permute(ixy+iz0);vec4 ixy1=permute(ixy+iz1);vec4 gx0=ixy0*(1.0/7.0);vec4 gy0=fract(floor(gx0)*(1.0/7.0))-0.5;gx0=fract(gx0);vec4 gz0=vec4(0.5)-abs(gx0)-abs(gy0);vec4 sz0=step(gz0,vec4(0.0));gx0-=sz0*(step(0.0,gx0)-0.5);gy0-=sz0*(step(0.0,gy0)-0.5);vec4 gx1=ixy1*(1.0/7.0);vec4 gy1=fract(floor(gx1)*(1.0/7.0))-0.5;gx1=fract(gx1);vec4 gz1=vec4(0.5)-abs(gx1)-abs(gy1);vec4 sz1=step(gz1,vec4(0.0));gx1-=sz1*(step(0.0,gx1)-0.5);gy1-=sz1*(step(0.0,gy1)-0.5);vec3 g000=vec3(gx0.x,gy0.x,gz0.x);vec3 g100=vec3(gx0.y,gy0.y,gz0.y);vec3 g010=vec3(gx0.z,gy0.z,gz0.z);vec3 g110=vec3(gx0.w,gy0.w,gz0.w);vec3 g001=vec3(gx1.x,gy1.x,gz1.x);vec3 g101=vec3(gx1.y,gy1.y,gz1.y);vec3 g011=vec3(gx1.z,gy1.z,gz1.z);vec3 g111=vec3(gx1.w,gy1.w,gz1.w);vec4 norm0=taylorInvSqrt(vec4(dot(g000,g000),dot(g010,g010),dot(g100,g100),dot(g110,g110)));g000*=norm0.x;g010*=norm0.y;g100*=norm0.z;g110*=norm0.w;vec4 norm1=taylorInvSqrt(vec4(dot(g001,g001),dot(g011,g011),dot(g101,g101),dot(g111,g111)));g001*=norm1.x;g011*=norm1.y;g101*=norm1.z;g111*=norm1.w;float n000=dot(g000,Pf0);float n100=dot(g100,vec3(Pf1.x,Pf0.yz));float n010=dot(g010,vec3(Pf0.x,Pf1.y,Pf0.z));float n110=dot(g110,vec3(Pf1.xy,Pf0.z));float n001=dot(g001,vec3(Pf0.xy,Pf1.z));float n101=dot(g101,vec3(Pf1.x,Pf0.y,Pf1.z));float n011=dot(g011,vec3(Pf0.x,Pf1.yz));float n111=dot(g111,Pf1);vec3 fade_xyz=fade(Pf0);vec4 n_z=mix(vec4(n000,n100,n010,n110),vec4(n001,n101,n011,n111),fade_xyz.z);vec2 n_yz=mix(n_z.xy,n_z.zw,fade_xyz.y);float n_xyz=mix(n_yz.x,n_yz.y,fade_xyz.x);return 2.2*n_xyz;}mat3 rotation3dY(float angle){float s=sin(angle);float c=cos(angle);return mat3(c,0.0,-s,0.0,1.0,0.0,s,0.0,c);}vec3 rotateY(vec3 v,float angle){return rotation3dY(angle)*v;}varying vec3 vNormal;varying float displacement;varying vec3 vPos;varying float vDistort;varying vec2 vUv;uniform float uTime;uniform float uSpeed;uniform float uLoadingTime;uniform float uNoiseDensity;uniform float uNoiseStrength;\n#define STANDARD\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n#ifdef USE_TANGENT\nvarying vec3 vTangent;varying vec3 vBitangent;\n#endif\n#endif\n#include <clipping_planes_pars_vertex>\n#include <color_pars_vertex>\n#include <common>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <skinning_pars_vertex>\n#include <uv2_pars_vertex>\n#include <uv_pars_vertex>\nvoid main(){\n#include <beginnormal_vertex>\n#include <color_vertex>\n#include <defaultnormal_vertex>\n#include <morphnormal_vertex>\n#include <skinbase_vertex>\n#include <skinnormal_vertex>\n#include <uv2_vertex>\n#include <uv_vertex>\n#ifndef FLAT_SHADED\nvNormal=normalize(transformedNormal);\n#ifdef USE_TANGENT\nvTangent=normalize(transformedTangent);vBitangent=normalize(cross(vNormal,vTangent)*tangent.w);\n#endif\n#endif\n#include <begin_vertex>\n#include <clipping_planes_vertex>\n#include <displacementmap_vertex>\n#include <logdepthbuf_vertex>\n#include <morphtarget_vertex>\n#include <project_vertex>\n#include <skinning_vertex>\nvViewPosition=-mvPosition.xyz;\n#include <fog_vertex>\n#include <shadowmap_vertex>\n#include <worldpos_vertex>\nvUv=uv;float t=uTime*uSpeed;float distortion=0.75*cnoise(0.43*position*uNoiseDensity+t);vec3 pos=position+normal*distortion*uNoiseStrength*uLoadingTime;vPos=pos;gl_Position=projectionMatrix*modelViewMatrix*vec4(pos,1.);}";

// src/Gradient/comps/Mesh/Mesh.tsx
import { useFrame as useFrame6, extend as extend2 } from "@react-three/fiber";

// ../../node_modules/.pnpm/@react-spring+three@9.6.1_aj5kj473hsgheg4miwvuwybosy/node_modules/@react-spring/three/dist/react-spring-three.esm.js
import { addEffect, applyProps as applyProps2 } from "@react-three/fiber";

// ../../node_modules/.pnpm/@react-spring+rafz@9.6.1/node_modules/@react-spring/rafz/dist/react-spring-rafz.esm.js
var updateQueue = makeQueue();
var raf = (fn) => schedule(fn, updateQueue);
var writeQueue = makeQueue();
raf.write = (fn) => schedule(fn, writeQueue);
var onStartQueue = makeQueue();
raf.onStart = (fn) => schedule(fn, onStartQueue);
var onFrameQueue = makeQueue();
raf.onFrame = (fn) => schedule(fn, onFrameQueue);
var onFinishQueue = makeQueue();
raf.onFinish = (fn) => schedule(fn, onFinishQueue);
var timeouts = [];
raf.setTimeout = (handler, ms) => {
  let time = raf.now() + ms;
  let cancel = () => {
    let i = timeouts.findIndex((t) => t.cancel == cancel);
    if (~i)
      timeouts.splice(i, 1);
    pendingCount -= ~i ? 1 : 0;
  };
  let timeout = {
    time,
    handler,
    cancel
  };
  timeouts.splice(findTimeout(time), 0, timeout);
  pendingCount += 1;
  start();
  return timeout;
};
var findTimeout = (time) => ~(~timeouts.findIndex((t) => t.time > time) || ~timeouts.length);
raf.cancel = (fn) => {
  onStartQueue.delete(fn);
  onFrameQueue.delete(fn);
  onFinishQueue.delete(fn);
  updateQueue.delete(fn);
  writeQueue.delete(fn);
};
raf.sync = (fn) => {
  sync = true;
  raf.batchedUpdates(fn);
  sync = false;
};
raf.throttle = (fn) => {
  let lastArgs;
  function queuedFn() {
    try {
      fn(...lastArgs);
    } finally {
      lastArgs = null;
    }
  }
  function throttled(...args) {
    lastArgs = args;
    raf.onStart(queuedFn);
  }
  throttled.handler = fn;
  throttled.cancel = () => {
    onStartQueue.delete(queuedFn);
    lastArgs = null;
  };
  return throttled;
};
var nativeRaf = typeof window != "undefined" ? window.requestAnimationFrame : () => {
};
raf.use = (impl) => nativeRaf = impl;
raf.now = typeof performance != "undefined" ? () => performance.now() : Date.now;
raf.batchedUpdates = (fn) => fn();
raf.catch = console.error;
raf.frameLoop = "always";
raf.advance = () => {
  if (raf.frameLoop !== "demand") {
    console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand");
  } else {
    update();
  }
};
var ts = -1;
var pendingCount = 0;
var sync = false;
function schedule(fn, queue) {
  if (sync) {
    queue.delete(fn);
    fn(0);
  } else {
    queue.add(fn);
    start();
  }
}
function start() {
  if (ts < 0) {
    ts = 0;
    if (raf.frameLoop !== "demand") {
      nativeRaf(loop);
    }
  }
}
function stop() {
  ts = -1;
}
function loop() {
  if (~ts) {
    nativeRaf(loop);
    raf.batchedUpdates(update);
  }
}
function update() {
  let prevTs = ts;
  ts = raf.now();
  let count = findTimeout(ts);
  if (count) {
    eachSafely(timeouts.splice(0, count), (t) => t.handler());
    pendingCount -= count;
  }
  if (!pendingCount) {
    stop();
    return;
  }
  onStartQueue.flush();
  updateQueue.flush(prevTs ? Math.min(64, ts - prevTs) : 16.667);
  onFrameQueue.flush();
  writeQueue.flush();
  onFinishQueue.flush();
}
function makeQueue() {
  let next = /* @__PURE__ */ new Set();
  let current = next;
  return {
    add(fn) {
      pendingCount += current == next && !next.has(fn) ? 1 : 0;
      next.add(fn);
    },
    delete(fn) {
      pendingCount -= current == next && next.has(fn) ? 1 : 0;
      return next.delete(fn);
    },
    flush(arg) {
      if (current.size) {
        next = /* @__PURE__ */ new Set();
        pendingCount -= current.size;
        eachSafely(current, (fn) => fn(arg) && next.add(fn));
        pendingCount += next.size;
        current = next;
      }
    }
  };
}
function eachSafely(values, each2) {
  values.forEach((value) => {
    try {
      each2(value);
    } catch (e) {
      raf.catch(e);
    }
  });
}

// ../../node_modules/.pnpm/@react-spring+shared@9.6.1_react@18.2.0/node_modules/@react-spring/shared/dist/react-spring-shared.esm.js
import { useRef as useRef4, useEffect as useEffect6, useLayoutEffect as useLayoutEffect3, useState as useState4 } from "react";
function noop() {
}
var defineHidden = (obj, key, value) => Object.defineProperty(obj, key, {
  value,
  writable: true,
  configurable: true
});
var is = {
  arr: Array.isArray,
  obj: (a) => !!a && a.constructor.name === "Object",
  fun: (a) => typeof a === "function",
  str: (a) => typeof a === "string",
  num: (a) => typeof a === "number",
  und: (a) => a === void 0
};
function isEqual(a, b) {
  if (is.arr(a)) {
    if (!is.arr(b) || a.length !== b.length)
      return false;
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i])
        return false;
    }
    return true;
  }
  return a === b;
}
var each = (obj, fn) => obj.forEach(fn);
function eachProp(obj, fn, ctx2) {
  if (is.arr(obj)) {
    for (let i = 0; i < obj.length; i++) {
      fn.call(ctx2, obj[i], `${i}`);
    }
    return;
  }
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      fn.call(ctx2, obj[key], key);
    }
  }
}
var toArray = (a) => is.und(a) ? [] : is.arr(a) ? a : [a];
function flush(queue, iterator) {
  if (queue.size) {
    const items = Array.from(queue);
    queue.clear();
    each(items, iterator);
  }
}
var flushCalls = (queue, ...args) => flush(queue, (fn) => fn(...args));
var isSSR = () => typeof window === "undefined" || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent);
var createStringInterpolator$1;
var to;
var colors$1 = null;
var skipAnimation = false;
var willAdvance = noop;
var assign = (globals2) => {
  if (globals2.to)
    to = globals2.to;
  if (globals2.now)
    raf.now = globals2.now;
  if (globals2.colors !== void 0)
    colors$1 = globals2.colors;
  if (globals2.skipAnimation != null)
    skipAnimation = globals2.skipAnimation;
  if (globals2.createStringInterpolator)
    createStringInterpolator$1 = globals2.createStringInterpolator;
  if (globals2.requestAnimationFrame)
    raf.use(globals2.requestAnimationFrame);
  if (globals2.batchedUpdates)
    raf.batchedUpdates = globals2.batchedUpdates;
  if (globals2.willAdvance)
    willAdvance = globals2.willAdvance;
  if (globals2.frameLoop)
    raf.frameLoop = globals2.frameLoop;
};
var globals = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  get createStringInterpolator() {
    return createStringInterpolator$1;
  },
  get to() {
    return to;
  },
  get colors() {
    return colors$1;
  },
  get skipAnimation() {
    return skipAnimation;
  },
  get willAdvance() {
    return willAdvance;
  },
  assign
});
var startQueue = /* @__PURE__ */ new Set();
var currentFrame = [];
var prevFrame = [];
var priority = 0;
var frameLoop = {
  get idle() {
    return !startQueue.size && !currentFrame.length;
  },
  start(animation) {
    if (priority > animation.priority) {
      startQueue.add(animation);
      raf.onStart(flushStartQueue);
    } else {
      startSafely(animation);
      raf(advance);
    }
  },
  advance,
  sort(animation) {
    if (priority) {
      raf.onFrame(() => frameLoop.sort(animation));
    } else {
      const prevIndex = currentFrame.indexOf(animation);
      if (~prevIndex) {
        currentFrame.splice(prevIndex, 1);
        startUnsafely(animation);
      }
    }
  },
  clear() {
    currentFrame = [];
    startQueue.clear();
  }
};
function flushStartQueue() {
  startQueue.forEach(startSafely);
  startQueue.clear();
  raf(advance);
}
function startSafely(animation) {
  if (!currentFrame.includes(animation))
    startUnsafely(animation);
}
function startUnsafely(animation) {
  currentFrame.splice(findIndex(currentFrame, (other) => other.priority > animation.priority), 0, animation);
}
function advance(dt) {
  const nextFrame = prevFrame;
  for (let i = 0; i < currentFrame.length; i++) {
    const animation = currentFrame[i];
    priority = animation.priority;
    if (!animation.idle) {
      willAdvance(animation);
      animation.advance(dt);
      if (!animation.idle) {
        nextFrame.push(animation);
      }
    }
  }
  priority = 0;
  prevFrame = currentFrame;
  prevFrame.length = 0;
  currentFrame = nextFrame;
  return currentFrame.length > 0;
}
function findIndex(arr, test) {
  const index = arr.findIndex(test);
  return index < 0 ? arr.length : index;
}
var clamp = (min, max, v) => Math.min(Math.max(v, min), max);
var colors = {
  transparent: 0,
  aliceblue: 4042850303,
  antiquewhite: 4209760255,
  aqua: 16777215,
  aquamarine: 2147472639,
  azure: 4043309055,
  beige: 4126530815,
  bisque: 4293182719,
  black: 255,
  blanchedalmond: 4293643775,
  blue: 65535,
  blueviolet: 2318131967,
  brown: 2771004159,
  burlywood: 3736635391,
  burntsienna: 3934150143,
  cadetblue: 1604231423,
  chartreuse: 2147418367,
  chocolate: 3530104575,
  coral: 4286533887,
  cornflowerblue: 1687547391,
  cornsilk: 4294499583,
  crimson: 3692313855,
  cyan: 16777215,
  darkblue: 35839,
  darkcyan: 9145343,
  darkgoldenrod: 3095792639,
  darkgray: 2846468607,
  darkgreen: 6553855,
  darkgrey: 2846468607,
  darkkhaki: 3182914559,
  darkmagenta: 2332068863,
  darkolivegreen: 1433087999,
  darkorange: 4287365375,
  darkorchid: 2570243327,
  darkred: 2332033279,
  darksalmon: 3918953215,
  darkseagreen: 2411499519,
  darkslateblue: 1211993087,
  darkslategray: 793726975,
  darkslategrey: 793726975,
  darkturquoise: 13554175,
  darkviolet: 2483082239,
  deeppink: 4279538687,
  deepskyblue: 12582911,
  dimgray: 1768516095,
  dimgrey: 1768516095,
  dodgerblue: 512819199,
  firebrick: 2988581631,
  floralwhite: 4294635775,
  forestgreen: 579543807,
  fuchsia: 4278255615,
  gainsboro: 3705462015,
  ghostwhite: 4177068031,
  gold: 4292280575,
  goldenrod: 3668254975,
  gray: 2155905279,
  green: 8388863,
  greenyellow: 2919182335,
  grey: 2155905279,
  honeydew: 4043305215,
  hotpink: 4285117695,
  indianred: 3445382399,
  indigo: 1258324735,
  ivory: 4294963455,
  khaki: 4041641215,
  lavender: 3873897215,
  lavenderblush: 4293981695,
  lawngreen: 2096890111,
  lemonchiffon: 4294626815,
  lightblue: 2916673279,
  lightcoral: 4034953471,
  lightcyan: 3774873599,
  lightgoldenrodyellow: 4210742015,
  lightgray: 3553874943,
  lightgreen: 2431553791,
  lightgrey: 3553874943,
  lightpink: 4290167295,
  lightsalmon: 4288707327,
  lightseagreen: 548580095,
  lightskyblue: 2278488831,
  lightslategray: 2005441023,
  lightslategrey: 2005441023,
  lightsteelblue: 2965692159,
  lightyellow: 4294959359,
  lime: 16711935,
  limegreen: 852308735,
  linen: 4210091775,
  magenta: 4278255615,
  maroon: 2147483903,
  mediumaquamarine: 1724754687,
  mediumblue: 52735,
  mediumorchid: 3126187007,
  mediumpurple: 2473647103,
  mediumseagreen: 1018393087,
  mediumslateblue: 2070474495,
  mediumspringgreen: 16423679,
  mediumturquoise: 1221709055,
  mediumvioletred: 3340076543,
  midnightblue: 421097727,
  mintcream: 4127193855,
  mistyrose: 4293190143,
  moccasin: 4293178879,
  navajowhite: 4292783615,
  navy: 33023,
  oldlace: 4260751103,
  olive: 2155872511,
  olivedrab: 1804477439,
  orange: 4289003775,
  orangered: 4282712319,
  orchid: 3664828159,
  palegoldenrod: 4008225535,
  palegreen: 2566625535,
  paleturquoise: 2951671551,
  palevioletred: 3681588223,
  papayawhip: 4293907967,
  peachpuff: 4292524543,
  peru: 3448061951,
  pink: 4290825215,
  plum: 3718307327,
  powderblue: 2967529215,
  purple: 2147516671,
  rebeccapurple: 1714657791,
  red: 4278190335,
  rosybrown: 3163525119,
  royalblue: 1097458175,
  saddlebrown: 2336560127,
  salmon: 4202722047,
  sandybrown: 4104413439,
  seagreen: 780883967,
  seashell: 4294307583,
  sienna: 2689740287,
  silver: 3233857791,
  skyblue: 2278484991,
  slateblue: 1784335871,
  slategray: 1887473919,
  slategrey: 1887473919,
  snow: 4294638335,
  springgreen: 16744447,
  steelblue: 1182971135,
  tan: 3535047935,
  teal: 8421631,
  thistle: 3636451583,
  tomato: 4284696575,
  turquoise: 1088475391,
  violet: 4001558271,
  wheat: 4125012991,
  white: 4294967295,
  whitesmoke: 4126537215,
  yellow: 4294902015,
  yellowgreen: 2597139199
};
var NUMBER = "[-+]?\\d*\\.?\\d+";
var PERCENTAGE = NUMBER + "%";
function call(...parts) {
  return "\\(\\s*(" + parts.join(")\\s*,\\s*(") + ")\\s*\\)";
}
var rgb = new RegExp("rgb" + call(NUMBER, NUMBER, NUMBER));
var rgba = new RegExp("rgba" + call(NUMBER, NUMBER, NUMBER, NUMBER));
var hsl = new RegExp("hsl" + call(NUMBER, PERCENTAGE, PERCENTAGE));
var hsla = new RegExp("hsla" + call(NUMBER, PERCENTAGE, PERCENTAGE, NUMBER));
var hex3 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
var hex4 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
var hex6 = /^#([0-9a-fA-F]{6})$/;
var hex8 = /^#([0-9a-fA-F]{8})$/;
function normalizeColor(color) {
  let match;
  if (typeof color === "number") {
    return color >>> 0 === color && color >= 0 && color <= 4294967295 ? color : null;
  }
  if (match = hex6.exec(color))
    return parseInt(match[1] + "ff", 16) >>> 0;
  if (colors$1 && colors$1[color] !== void 0) {
    return colors$1[color];
  }
  if (match = rgb.exec(color)) {
    return (parse255(match[1]) << 24 | parse255(match[2]) << 16 | parse255(match[3]) << 8 | 255) >>> 0;
  }
  if (match = rgba.exec(color)) {
    return (parse255(match[1]) << 24 | parse255(match[2]) << 16 | parse255(match[3]) << 8 | parse1(match[4])) >>> 0;
  }
  if (match = hex3.exec(color)) {
    return parseInt(match[1] + match[1] + match[2] + match[2] + match[3] + match[3] + "ff", 16) >>> 0;
  }
  if (match = hex8.exec(color))
    return parseInt(match[1], 16) >>> 0;
  if (match = hex4.exec(color)) {
    return parseInt(match[1] + match[1] + match[2] + match[2] + match[3] + match[3] + match[4] + match[4], 16) >>> 0;
  }
  if (match = hsl.exec(color)) {
    return (hslToRgb(parse360(match[1]), parsePercentage(match[2]), parsePercentage(match[3])) | 255) >>> 0;
  }
  if (match = hsla.exec(color)) {
    return (hslToRgb(parse360(match[1]), parsePercentage(match[2]), parsePercentage(match[3])) | parse1(match[4])) >>> 0;
  }
  return null;
}
function hue2rgb(p, q, t) {
  if (t < 0)
    t += 1;
  if (t > 1)
    t -= 1;
  if (t < 1 / 6)
    return p + (q - p) * 6 * t;
  if (t < 1 / 2)
    return q;
  if (t < 2 / 3)
    return p + (q - p) * (2 / 3 - t) * 6;
  return p;
}
function hslToRgb(h, s, l) {
  const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
  const p = 2 * l - q;
  const r = hue2rgb(p, q, h + 1 / 3);
  const g = hue2rgb(p, q, h);
  const b = hue2rgb(p, q, h - 1 / 3);
  return Math.round(r * 255) << 24 | Math.round(g * 255) << 16 | Math.round(b * 255) << 8;
}
function parse255(str) {
  const int = parseInt(str, 10);
  if (int < 0)
    return 0;
  if (int > 255)
    return 255;
  return int;
}
function parse360(str) {
  const int = parseFloat(str);
  return (int % 360 + 360) % 360 / 360;
}
function parse1(str) {
  const num = parseFloat(str);
  if (num < 0)
    return 0;
  if (num > 1)
    return 255;
  return Math.round(num * 255);
}
function parsePercentage(str) {
  const int = parseFloat(str);
  if (int < 0)
    return 0;
  if (int > 100)
    return 1;
  return int / 100;
}
function colorToRgba(input) {
  let int32Color = normalizeColor(input);
  if (int32Color === null)
    return input;
  int32Color = int32Color || 0;
  let r = (int32Color & 4278190080) >>> 24;
  let g = (int32Color & 16711680) >>> 16;
  let b = (int32Color & 65280) >>> 8;
  let a = (int32Color & 255) / 255;
  return `rgba(${r}, ${g}, ${b}, ${a})`;
}
var createInterpolator = (range, output, extrapolate) => {
  if (is.fun(range)) {
    return range;
  }
  if (is.arr(range)) {
    return createInterpolator({
      range,
      output,
      extrapolate
    });
  }
  if (is.str(range.output[0])) {
    return createStringInterpolator$1(range);
  }
  const config2 = range;
  const outputRange = config2.output;
  const inputRange = config2.range || [0, 1];
  const extrapolateLeft = config2.extrapolateLeft || config2.extrapolate || "extend";
  const extrapolateRight = config2.extrapolateRight || config2.extrapolate || "extend";
  const easing = config2.easing || ((t) => t);
  return (input) => {
    const range2 = findRange(input, inputRange);
    return interpolate(input, inputRange[range2], inputRange[range2 + 1], outputRange[range2], outputRange[range2 + 1], easing, extrapolateLeft, extrapolateRight, config2.map);
  };
};
function interpolate(input, inputMin, inputMax, outputMin, outputMax, easing, extrapolateLeft, extrapolateRight, map) {
  let result = map ? map(input) : input;
  if (result < inputMin) {
    if (extrapolateLeft === "identity")
      return result;
    else if (extrapolateLeft === "clamp")
      result = inputMin;
  }
  if (result > inputMax) {
    if (extrapolateRight === "identity")
      return result;
    else if (extrapolateRight === "clamp")
      result = inputMax;
  }
  if (outputMin === outputMax)
    return outputMin;
  if (inputMin === inputMax)
    return input <= inputMin ? outputMin : outputMax;
  if (inputMin === -Infinity)
    result = -result;
  else if (inputMax === Infinity)
    result = result - inputMin;
  else
    result = (result - inputMin) / (inputMax - inputMin);
  result = easing(result);
  if (outputMin === -Infinity)
    result = -result;
  else if (outputMax === Infinity)
    result = result + outputMin;
  else
    result = result * (outputMax - outputMin) + outputMin;
  return result;
}
function findRange(input, inputRange) {
  for (var i = 1; i < inputRange.length - 1; ++i)
    if (inputRange[i] >= input)
      break;
  return i - 1;
}
var steps = (steps2, direction = "end") => (progress) => {
  progress = direction === "end" ? Math.min(progress, 0.999) : Math.max(progress, 1e-3);
  const expanded = progress * steps2;
  const rounded = direction === "end" ? Math.floor(expanded) : Math.ceil(expanded);
  return clamp(0, 1, rounded / steps2);
};
var c1 = 1.70158;
var c2 = c1 * 1.525;
var c3 = c1 + 1;
var c4 = 2 * Math.PI / 3;
var c5 = 2 * Math.PI / 4.5;
var bounceOut = (x) => {
  const n1 = 7.5625;
  const d1 = 2.75;
  if (x < 1 / d1) {
    return n1 * x * x;
  } else if (x < 2 / d1) {
    return n1 * (x -= 1.5 / d1) * x + 0.75;
  } else if (x < 2.5 / d1) {
    return n1 * (x -= 2.25 / d1) * x + 0.9375;
  } else {
    return n1 * (x -= 2.625 / d1) * x + 0.984375;
  }
};
var easings = {
  linear: (x) => x,
  easeInQuad: (x) => x * x,
  easeOutQuad: (x) => 1 - (1 - x) * (1 - x),
  easeInOutQuad: (x) => x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2,
  easeInCubic: (x) => x * x * x,
  easeOutCubic: (x) => 1 - Math.pow(1 - x, 3),
  easeInOutCubic: (x) => x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2,
  easeInQuart: (x) => x * x * x * x,
  easeOutQuart: (x) => 1 - Math.pow(1 - x, 4),
  easeInOutQuart: (x) => x < 0.5 ? 8 * x * x * x * x : 1 - Math.pow(-2 * x + 2, 4) / 2,
  easeInQuint: (x) => x * x * x * x * x,
  easeOutQuint: (x) => 1 - Math.pow(1 - x, 5),
  easeInOutQuint: (x) => x < 0.5 ? 16 * x * x * x * x * x : 1 - Math.pow(-2 * x + 2, 5) / 2,
  easeInSine: (x) => 1 - Math.cos(x * Math.PI / 2),
  easeOutSine: (x) => Math.sin(x * Math.PI / 2),
  easeInOutSine: (x) => -(Math.cos(Math.PI * x) - 1) / 2,
  easeInExpo: (x) => x === 0 ? 0 : Math.pow(2, 10 * x - 10),
  easeOutExpo: (x) => x === 1 ? 1 : 1 - Math.pow(2, -10 * x),
  easeInOutExpo: (x) => x === 0 ? 0 : x === 1 ? 1 : x < 0.5 ? Math.pow(2, 20 * x - 10) / 2 : (2 - Math.pow(2, -20 * x + 10)) / 2,
  easeInCirc: (x) => 1 - Math.sqrt(1 - Math.pow(x, 2)),
  easeOutCirc: (x) => Math.sqrt(1 - Math.pow(x - 1, 2)),
  easeInOutCirc: (x) => x < 0.5 ? (1 - Math.sqrt(1 - Math.pow(2 * x, 2))) / 2 : (Math.sqrt(1 - Math.pow(-2 * x + 2, 2)) + 1) / 2,
  easeInBack: (x) => c3 * x * x * x - c1 * x * x,
  easeOutBack: (x) => 1 + c3 * Math.pow(x - 1, 3) + c1 * Math.pow(x - 1, 2),
  easeInOutBack: (x) => x < 0.5 ? Math.pow(2 * x, 2) * ((c2 + 1) * 2 * x - c2) / 2 : (Math.pow(2 * x - 2, 2) * ((c2 + 1) * (x * 2 - 2) + c2) + 2) / 2,
  easeInElastic: (x) => x === 0 ? 0 : x === 1 ? 1 : -Math.pow(2, 10 * x - 10) * Math.sin((x * 10 - 10.75) * c4),
  easeOutElastic: (x) => x === 0 ? 0 : x === 1 ? 1 : Math.pow(2, -10 * x) * Math.sin((x * 10 - 0.75) * c4) + 1,
  easeInOutElastic: (x) => x === 0 ? 0 : x === 1 ? 1 : x < 0.5 ? -(Math.pow(2, 20 * x - 10) * Math.sin((20 * x - 11.125) * c5)) / 2 : Math.pow(2, -20 * x + 10) * Math.sin((20 * x - 11.125) * c5) / 2 + 1,
  easeInBounce: (x) => 1 - bounceOut(1 - x),
  easeOutBounce: bounceOut,
  easeInOutBounce: (x) => x < 0.5 ? (1 - bounceOut(1 - 2 * x)) / 2 : (1 + bounceOut(2 * x - 1)) / 2,
  steps
};
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function(target2) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target2[key] = source[key];
        }
      }
    }
    return target2;
  };
  return _extends.apply(this, arguments);
}
var $get = Symbol.for("FluidValue.get");
var $observers = Symbol.for("FluidValue.observers");
var hasFluidValue = (arg) => Boolean(arg && arg[$get]);
var getFluidValue = (arg) => arg && arg[$get] ? arg[$get]() : arg;
var getFluidObservers = (target2) => target2[$observers] || null;
function callFluidObserver(observer, event) {
  if (observer.eventObserved) {
    observer.eventObserved(event);
  } else {
    observer(event);
  }
}
function callFluidObservers(target2, event) {
  let observers = target2[$observers];
  if (observers) {
    observers.forEach((observer) => {
      callFluidObserver(observer, event);
    });
  }
}
var FluidValue = class {
  constructor(get) {
    this[$get] = void 0;
    this[$observers] = void 0;
    if (!get && !(get = this.get)) {
      throw Error("Unknown getter");
    }
    setFluidGetter(this, get);
  }
};
var setFluidGetter = (target2, get) => setHidden(target2, $get, get);
function addFluidObserver(target2, observer) {
  if (target2[$get]) {
    let observers = target2[$observers];
    if (!observers) {
      setHidden(target2, $observers, observers = /* @__PURE__ */ new Set());
    }
    if (!observers.has(observer)) {
      observers.add(observer);
      if (target2.observerAdded) {
        target2.observerAdded(observers.size, observer);
      }
    }
  }
  return observer;
}
function removeFluidObserver(target2, observer) {
  let observers = target2[$observers];
  if (observers && observers.has(observer)) {
    const count = observers.size - 1;
    if (count) {
      observers.delete(observer);
    } else {
      target2[$observers] = null;
    }
    if (target2.observerRemoved) {
      target2.observerRemoved(count, observer);
    }
  }
}
var setHidden = (target2, key, value) => Object.defineProperty(target2, key, {
  value,
  writable: true,
  configurable: true
});
var numberRegex = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g;
var colorRegex = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi;
var unitRegex = new RegExp(`(${numberRegex.source})(%|[a-z]+)`, "i");
var rgbaRegex = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi;
var cssVariableRegex = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
var variableToRgba = (input) => {
  const [token, fallback] = parseCSSVariable(input);
  if (!token || isSSR()) {
    return input;
  }
  const value = window.getComputedStyle(document.documentElement).getPropertyValue(token);
  if (value) {
    return value.trim();
  } else if (fallback && fallback.startsWith("--")) {
    const _value = window.getComputedStyle(document.documentElement).getPropertyValue(fallback);
    if (_value) {
      return _value;
    } else {
      return input;
    }
  } else if (fallback && cssVariableRegex.test(fallback)) {
    return variableToRgba(fallback);
  } else if (fallback) {
    return fallback;
  }
  return input;
};
var parseCSSVariable = (current) => {
  const match = cssVariableRegex.exec(current);
  if (!match)
    return [,];
  const [, token, fallback] = match;
  return [token, fallback];
};
var namedColorRegex;
var rgbaRound = (_, p1, p2, p3, p4) => `rgba(${Math.round(p1)}, ${Math.round(p2)}, ${Math.round(p3)}, ${p4})`;
var createStringInterpolator = (config2) => {
  if (!namedColorRegex)
    namedColorRegex = colors$1 ? new RegExp(`(${Object.keys(colors$1).join("|")})(?!\\w)`, "g") : /^\b$/;
  const output = config2.output.map((value) => {
    return getFluidValue(value).replace(cssVariableRegex, variableToRgba).replace(colorRegex, colorToRgba).replace(namedColorRegex, colorToRgba);
  });
  const keyframes = output.map((value) => value.match(numberRegex).map(Number));
  const outputRanges = keyframes[0].map((_, i) => keyframes.map((values) => {
    if (!(i in values)) {
      throw Error('The arity of each "output" value must be equal');
    }
    return values[i];
  }));
  const interpolators = outputRanges.map((output2) => createInterpolator(_extends({}, config2, {
    output: output2
  })));
  return (input) => {
    var _output$find;
    const missingUnit = !unitRegex.test(output[0]) && ((_output$find = output.find((value) => unitRegex.test(value))) == null ? void 0 : _output$find.replace(numberRegex, ""));
    let i = 0;
    return output[0].replace(numberRegex, () => `${interpolators[i++](input)}${missingUnit || ""}`).replace(rgbaRegex, rgbaRound);
  };
};
var prefix = "react-spring: ";
var once = (fn) => {
  const func = fn;
  let called = false;
  if (typeof func != "function") {
    throw new TypeError(`${prefix}once requires a function parameter`);
  }
  return (...args) => {
    if (!called) {
      func(...args);
      called = true;
    }
  };
};
var warnInterpolate = once(console.warn);
function deprecateInterpolate() {
  warnInterpolate(`${prefix}The "interpolate" function is deprecated in v9 (use "to" instead)`);
}
var warnDirectCall = once(console.warn);
function deprecateDirectCall() {
  warnDirectCall(`${prefix}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);
}
function isAnimatedString(value) {
  return is.str(value) && (value[0] == "#" || /\d/.test(value) || !isSSR() && cssVariableRegex.test(value) || value in (colors$1 || {}));
}
var useIsomorphicLayoutEffect = isSSR() ? useEffect6 : useLayoutEffect3;
var useIsMounted = () => {
  const isMounted = useRef4(false);
  useIsomorphicLayoutEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);
  return isMounted;
};
function useForceUpdate() {
  const update3 = useState4()[1];
  const isMounted = useIsMounted();
  return () => {
    if (isMounted.current) {
      update3(Math.random());
    }
  };
}
function useMemoOne(getResult, inputs) {
  const [initial] = useState4(() => ({
    inputs,
    result: getResult()
  }));
  const committed = useRef4();
  const prevCache = committed.current;
  let cache = prevCache;
  if (cache) {
    const useCache = Boolean(inputs && cache.inputs && areInputsEqual(inputs, cache.inputs));
    if (!useCache) {
      cache = {
        inputs,
        result: getResult()
      };
    }
  } else {
    cache = initial;
  }
  useEffect6(() => {
    committed.current = cache;
    if (prevCache == initial) {
      initial.inputs = initial.result = void 0;
    }
  }, [cache]);
  return cache.result;
}
function areInputsEqual(next, prev) {
  if (next.length !== prev.length) {
    return false;
  }
  for (let i = 0; i < next.length; i++) {
    if (next[i] !== prev[i]) {
      return false;
    }
  }
  return true;
}
var useOnce = (effect) => useEffect6(effect, emptyDeps);
var emptyDeps = [];
function usePrev(value) {
  const prevRef = useRef4();
  useEffect6(() => {
    prevRef.current = value;
  });
  return prevRef.current;
}

// ../../node_modules/.pnpm/@react-spring+core@9.6.1_react@18.2.0/node_modules/@react-spring/core/dist/react-spring-core.esm.js
import * as React8 from "react";
import { useContext as useContext2, useMemo as useMemo5, useRef as useRef6, useState as useState5 } from "react";

// ../../node_modules/.pnpm/@react-spring+animated@9.6.1_react@18.2.0/node_modules/@react-spring/animated/dist/react-spring-animated.esm.js
import * as React7 from "react";
import { forwardRef as forwardRef2, useRef as useRef5, useCallback as useCallback3, useEffect as useEffect7 } from "react";
var $node = Symbol.for("Animated:node");
var isAnimated = (value) => !!value && value[$node] === value;
var getAnimated = (owner) => owner && owner[$node];
var setAnimated = (owner, node) => defineHidden(owner, $node, node);
var getPayload = (owner) => owner && owner[$node] && owner[$node].getPayload();
var Animated = class {
  constructor() {
    this.payload = void 0;
    setAnimated(this, this);
  }
  getPayload() {
    return this.payload || [];
  }
};
var AnimatedValue = class extends Animated {
  constructor(_value) {
    super();
    this.done = true;
    this.elapsedTime = void 0;
    this.lastPosition = void 0;
    this.lastVelocity = void 0;
    this.v0 = void 0;
    this.durationProgress = 0;
    this._value = _value;
    if (is.num(this._value)) {
      this.lastPosition = this._value;
    }
  }
  static create(value) {
    return new AnimatedValue(value);
  }
  getPayload() {
    return [this];
  }
  getValue() {
    return this._value;
  }
  setValue(value, step) {
    if (is.num(value)) {
      this.lastPosition = value;
      if (step) {
        value = Math.round(value / step) * step;
        if (this.done) {
          this.lastPosition = value;
        }
      }
    }
    if (this._value === value) {
      return false;
    }
    this._value = value;
    return true;
  }
  reset() {
    const {
      done
    } = this;
    this.done = false;
    if (is.num(this._value)) {
      this.elapsedTime = 0;
      this.durationProgress = 0;
      this.lastPosition = this._value;
      if (done)
        this.lastVelocity = null;
      this.v0 = null;
    }
  }
};
var AnimatedString = class extends AnimatedValue {
  constructor(value) {
    super(0);
    this._string = null;
    this._toString = void 0;
    this._toString = createInterpolator({
      output: [value, value]
    });
  }
  static create(value) {
    return new AnimatedString(value);
  }
  getValue() {
    let value = this._string;
    return value == null ? this._string = this._toString(this._value) : value;
  }
  setValue(value) {
    if (is.str(value)) {
      if (value == this._string) {
        return false;
      }
      this._string = value;
      this._value = 1;
    } else if (super.setValue(value)) {
      this._string = null;
    } else {
      return false;
    }
    return true;
  }
  reset(goal) {
    if (goal) {
      this._toString = createInterpolator({
        output: [this.getValue(), goal]
      });
    }
    this._value = 0;
    super.reset();
  }
};
var TreeContext = {
  dependencies: null
};
var AnimatedObject = class extends Animated {
  constructor(source) {
    super();
    this.source = source;
    this.setValue(source);
  }
  getValue(animated2) {
    const values = {};
    eachProp(this.source, (source, key) => {
      if (isAnimated(source)) {
        values[key] = source.getValue(animated2);
      } else if (hasFluidValue(source)) {
        values[key] = getFluidValue(source);
      } else if (!animated2) {
        values[key] = source;
      }
    });
    return values;
  }
  setValue(source) {
    this.source = source;
    this.payload = this._makePayload(source);
  }
  reset() {
    if (this.payload) {
      each(this.payload, (node) => node.reset());
    }
  }
  _makePayload(source) {
    if (source) {
      const payload = /* @__PURE__ */ new Set();
      eachProp(source, this._addToPayload, payload);
      return Array.from(payload);
    }
  }
  _addToPayload(source) {
    if (TreeContext.dependencies && hasFluidValue(source)) {
      TreeContext.dependencies.add(source);
    }
    const payload = getPayload(source);
    if (payload) {
      each(payload, (node) => this.add(node));
    }
  }
};
var AnimatedArray = class extends AnimatedObject {
  constructor(source) {
    super(source);
  }
  static create(source) {
    return new AnimatedArray(source);
  }
  getValue() {
    return this.source.map((node) => node.getValue());
  }
  setValue(source) {
    const payload = this.getPayload();
    if (source.length == payload.length) {
      return payload.map((node, i) => node.setValue(source[i])).some(Boolean);
    }
    super.setValue(source.map(makeAnimated));
    return true;
  }
};
function makeAnimated(value) {
  const nodeType = isAnimatedString(value) ? AnimatedString : AnimatedValue;
  return nodeType.create(value);
}
function getAnimatedType(value) {
  const parentNode = getAnimated(value);
  return parentNode ? parentNode.constructor : is.arr(value) ? AnimatedArray : isAnimatedString(value) ? AnimatedString : AnimatedValue;
}
function _extends2() {
  _extends2 = Object.assign ? Object.assign.bind() : function(target2) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target2[key] = source[key];
        }
      }
    }
    return target2;
  };
  return _extends2.apply(this, arguments);
}
var withAnimated = (Component, host2) => {
  const hasInstance = !is.fun(Component) || Component.prototype && Component.prototype.isReactComponent;
  return forwardRef2((givenProps, givenRef) => {
    const instanceRef = useRef5(null);
    const ref = hasInstance && useCallback3((value) => {
      instanceRef.current = updateRef(givenRef, value);
    }, [givenRef]);
    const [props, deps] = getAnimatedState(givenProps, host2);
    const forceUpdate = useForceUpdate();
    const callback = () => {
      const instance = instanceRef.current;
      if (hasInstance && !instance) {
        return;
      }
      const didUpdate = instance ? host2.applyAnimatedValues(instance, props.getValue(true)) : false;
      if (didUpdate === false) {
        forceUpdate();
      }
    };
    const observer = new PropsObserver(callback, deps);
    const observerRef = useRef5();
    useIsomorphicLayoutEffect(() => {
      observerRef.current = observer;
      each(deps, (dep) => addFluidObserver(dep, observer));
      return () => {
        if (observerRef.current) {
          each(observerRef.current.deps, (dep) => removeFluidObserver(dep, observerRef.current));
          raf.cancel(observerRef.current.update);
        }
      };
    });
    useEffect7(callback, []);
    useOnce(() => () => {
      const observer2 = observerRef.current;
      each(observer2.deps, (dep) => removeFluidObserver(dep, observer2));
    });
    const usedProps = host2.getComponentProps(props.getValue());
    return React7.createElement(Component, _extends2({}, usedProps, {
      ref
    }));
  });
};
var PropsObserver = class {
  constructor(update3, deps) {
    this.update = update3;
    this.deps = deps;
  }
  eventObserved(event) {
    if (event.type == "change") {
      raf.write(this.update);
    }
  }
};
function getAnimatedState(props, host2) {
  const dependencies = /* @__PURE__ */ new Set();
  TreeContext.dependencies = dependencies;
  if (props.style)
    props = _extends2({}, props, {
      style: host2.createAnimatedStyle(props.style)
    });
  props = new AnimatedObject(props);
  TreeContext.dependencies = null;
  return [props, dependencies];
}
function updateRef(ref, value) {
  if (ref) {
    if (is.fun(ref))
      ref(value);
    else
      ref.current = value;
  }
  return value;
}
var cacheKey = Symbol.for("AnimatedComponent");
var createHost = (components, {
  applyAnimatedValues: _applyAnimatedValues = () => false,
  createAnimatedStyle: _createAnimatedStyle = (style) => new AnimatedObject(style),
  getComponentProps: _getComponentProps = (props) => props
} = {}) => {
  const hostConfig = {
    applyAnimatedValues: _applyAnimatedValues,
    createAnimatedStyle: _createAnimatedStyle,
    getComponentProps: _getComponentProps
  };
  const animated2 = (Component) => {
    const displayName = getDisplayName(Component) || "Anonymous";
    if (is.str(Component)) {
      Component = animated2[Component] || (animated2[Component] = withAnimated(Component, hostConfig));
    } else {
      Component = Component[cacheKey] || (Component[cacheKey] = withAnimated(Component, hostConfig));
    }
    Component.displayName = `Animated(${displayName})`;
    return Component;
  };
  eachProp(components, (Component, key) => {
    if (is.arr(components)) {
      key = getDisplayName(Component);
    }
    animated2[key] = animated2(Component);
  });
  return {
    animated: animated2
  };
};
var getDisplayName = (arg) => is.str(arg) ? arg : arg && is.str(arg.displayName) ? arg.displayName : is.fun(arg) && arg.name || null;

// ../../node_modules/.pnpm/@react-spring+core@9.6.1_react@18.2.0/node_modules/@react-spring/core/dist/react-spring-core.esm.js
function _extends3() {
  _extends3 = Object.assign ? Object.assign.bind() : function(target2) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target2[key] = source[key];
        }
      }
    }
    return target2;
  };
  return _extends3.apply(this, arguments);
}
function callProp(value, ...args) {
  return is.fun(value) ? value(...args) : value;
}
var matchProp = (value, key) => value === true || !!(key && value && (is.fun(value) ? value(key) : toArray(value).includes(key)));
var resolveProp = (prop, key) => is.obj(prop) ? key && prop[key] : prop;
var getDefaultProp = (props, key) => props.default === true ? props[key] : props.default ? props.default[key] : void 0;
var noopTransform = (value) => value;
var getDefaultProps = (props, transform = noopTransform) => {
  let keys = DEFAULT_PROPS;
  if (props.default && props.default !== true) {
    props = props.default;
    keys = Object.keys(props);
  }
  const defaults2 = {};
  for (const key of keys) {
    const value = transform(props[key], key);
    if (!is.und(value)) {
      defaults2[key] = value;
    }
  }
  return defaults2;
};
var DEFAULT_PROPS = ["config", "onProps", "onStart", "onChange", "onPause", "onResume", "onRest"];
var RESERVED_PROPS = {
  config: 1,
  from: 1,
  to: 1,
  ref: 1,
  loop: 1,
  reset: 1,
  pause: 1,
  cancel: 1,
  reverse: 1,
  immediate: 1,
  default: 1,
  delay: 1,
  onProps: 1,
  onStart: 1,
  onChange: 1,
  onPause: 1,
  onResume: 1,
  onRest: 1,
  onResolve: 1,
  items: 1,
  trail: 1,
  sort: 1,
  expires: 1,
  initial: 1,
  enter: 1,
  update: 1,
  leave: 1,
  children: 1,
  onDestroyed: 1,
  keys: 1,
  callId: 1,
  parentId: 1
};
function getForwardProps(props) {
  const forward = {};
  let count = 0;
  eachProp(props, (value, prop) => {
    if (!RESERVED_PROPS[prop]) {
      forward[prop] = value;
      count++;
    }
  });
  if (count) {
    return forward;
  }
}
function inferTo(props) {
  const to3 = getForwardProps(props);
  if (to3) {
    const out = {
      to: to3
    };
    eachProp(props, (val, key) => key in to3 || (out[key] = val));
    return out;
  }
  return _extends3({}, props);
}
function computeGoal(value) {
  value = getFluidValue(value);
  return is.arr(value) ? value.map(computeGoal) : isAnimatedString(value) ? globals.createStringInterpolator({
    range: [0, 1],
    output: [value, value]
  })(1) : value;
}
function hasProps(props) {
  for (const _ in props)
    return true;
  return false;
}
function isAsyncTo(to3) {
  return is.fun(to3) || is.arr(to3) && is.obj(to3[0]);
}
function detachRefs(ctrl, ref) {
  var _ctrl$ref;
  (_ctrl$ref = ctrl.ref) == null ? void 0 : _ctrl$ref.delete(ctrl);
  ref == null ? void 0 : ref.delete(ctrl);
}
function replaceRef(ctrl, ref) {
  if (ref && ctrl.ref !== ref) {
    var _ctrl$ref2;
    (_ctrl$ref2 = ctrl.ref) == null ? void 0 : _ctrl$ref2.delete(ctrl);
    ref.add(ctrl);
    ctrl.ref = ref;
  }
}
var config = {
  default: {
    tension: 170,
    friction: 26
  },
  gentle: {
    tension: 120,
    friction: 14
  },
  wobbly: {
    tension: 180,
    friction: 12
  },
  stiff: {
    tension: 210,
    friction: 20
  },
  slow: {
    tension: 280,
    friction: 60
  },
  molasses: {
    tension: 280,
    friction: 120
  }
};
var defaults = _extends3({}, config.default, {
  mass: 1,
  damping: 1,
  easing: easings.linear,
  clamp: false
});
var AnimationConfig = class {
  constructor() {
    this.tension = void 0;
    this.friction = void 0;
    this.frequency = void 0;
    this.damping = void 0;
    this.mass = void 0;
    this.velocity = 0;
    this.restVelocity = void 0;
    this.precision = void 0;
    this.progress = void 0;
    this.duration = void 0;
    this.easing = void 0;
    this.clamp = void 0;
    this.bounce = void 0;
    this.decay = void 0;
    this.round = void 0;
    Object.assign(this, defaults);
  }
};
function mergeConfig(config2, newConfig, defaultConfig) {
  if (defaultConfig) {
    defaultConfig = _extends3({}, defaultConfig);
    sanitizeConfig(defaultConfig, newConfig);
    newConfig = _extends3({}, defaultConfig, newConfig);
  }
  sanitizeConfig(config2, newConfig);
  Object.assign(config2, newConfig);
  for (const key in defaults) {
    if (config2[key] == null) {
      config2[key] = defaults[key];
    }
  }
  let {
    mass,
    frequency,
    damping
  } = config2;
  if (!is.und(frequency)) {
    if (frequency < 0.01)
      frequency = 0.01;
    if (damping < 0)
      damping = 0;
    config2.tension = Math.pow(2 * Math.PI / frequency, 2) * mass;
    config2.friction = 4 * Math.PI * damping * mass / frequency;
  }
  return config2;
}
function sanitizeConfig(config2, props) {
  if (!is.und(props.decay)) {
    config2.duration = void 0;
  } else {
    const isTensionConfig = !is.und(props.tension) || !is.und(props.friction);
    if (isTensionConfig || !is.und(props.frequency) || !is.und(props.damping) || !is.und(props.mass)) {
      config2.duration = void 0;
      config2.decay = void 0;
    }
    if (isTensionConfig) {
      config2.frequency = void 0;
    }
  }
}
var emptyArray = [];
var Animation = class {
  constructor() {
    this.changed = false;
    this.values = emptyArray;
    this.toValues = null;
    this.fromValues = emptyArray;
    this.to = void 0;
    this.from = void 0;
    this.config = new AnimationConfig();
    this.immediate = false;
  }
};
function scheduleProps(callId, {
  key,
  props,
  defaultProps,
  state,
  actions
}) {
  return new Promise((resolve, reject) => {
    var _props$cancel;
    let delay;
    let timeout;
    let cancel = matchProp((_props$cancel = props.cancel) != null ? _props$cancel : defaultProps == null ? void 0 : defaultProps.cancel, key);
    if (cancel) {
      onStart();
    } else {
      if (!is.und(props.pause)) {
        state.paused = matchProp(props.pause, key);
      }
      let pause = defaultProps == null ? void 0 : defaultProps.pause;
      if (pause !== true) {
        pause = state.paused || matchProp(pause, key);
      }
      delay = callProp(props.delay || 0, key);
      if (pause) {
        state.resumeQueue.add(onResume);
        actions.pause();
      } else {
        actions.resume();
        onResume();
      }
    }
    function onPause() {
      state.resumeQueue.add(onResume);
      state.timeouts.delete(timeout);
      timeout.cancel();
      delay = timeout.time - raf.now();
    }
    function onResume() {
      if (delay > 0 && !globals.skipAnimation) {
        state.delayed = true;
        timeout = raf.setTimeout(onStart, delay);
        state.pauseQueue.add(onPause);
        state.timeouts.add(timeout);
      } else {
        onStart();
      }
    }
    function onStart() {
      if (state.delayed) {
        state.delayed = false;
      }
      state.pauseQueue.delete(onPause);
      state.timeouts.delete(timeout);
      if (callId <= (state.cancelId || 0)) {
        cancel = true;
      }
      try {
        actions.start(_extends3({}, props, {
          callId,
          cancel
        }), resolve);
      } catch (err) {
        reject(err);
      }
    }
  });
}
var getCombinedResult = (target2, results) => results.length == 1 ? results[0] : results.some((result) => result.cancelled) ? getCancelledResult(target2.get()) : results.every((result) => result.noop) ? getNoopResult(target2.get()) : getFinishedResult(target2.get(), results.every((result) => result.finished));
var getNoopResult = (value) => ({
  value,
  noop: true,
  finished: true,
  cancelled: false
});
var getFinishedResult = (value, finished, cancelled = false) => ({
  value,
  finished,
  cancelled
});
var getCancelledResult = (value) => ({
  value,
  cancelled: true,
  finished: false
});
function runAsync(to3, props, state, target2) {
  const {
    callId,
    parentId,
    onRest
  } = props;
  const {
    asyncTo: prevTo,
    promise: prevPromise
  } = state;
  if (!parentId && to3 === prevTo && !props.reset) {
    return prevPromise;
  }
  return state.promise = (async () => {
    state.asyncId = callId;
    state.asyncTo = to3;
    const defaultProps = getDefaultProps(props, (value, key) => key === "onRest" ? void 0 : value);
    let preventBail;
    let bail;
    const bailPromise = new Promise((resolve, reject) => (preventBail = resolve, bail = reject));
    const bailIfEnded = (bailSignal) => {
      const bailResult = callId <= (state.cancelId || 0) && getCancelledResult(target2) || callId !== state.asyncId && getFinishedResult(target2, false);
      if (bailResult) {
        bailSignal.result = bailResult;
        bail(bailSignal);
        throw bailSignal;
      }
    };
    const animate = (arg1, arg2) => {
      const bailSignal = new BailSignal();
      const skipAnimationSignal = new SkipAnimationSignal();
      return (async () => {
        if (globals.skipAnimation) {
          stopAsync(state);
          skipAnimationSignal.result = getFinishedResult(target2, false);
          bail(skipAnimationSignal);
          throw skipAnimationSignal;
        }
        bailIfEnded(bailSignal);
        const props2 = is.obj(arg1) ? _extends3({}, arg1) : _extends3({}, arg2, {
          to: arg1
        });
        props2.parentId = callId;
        eachProp(defaultProps, (value, key) => {
          if (is.und(props2[key])) {
            props2[key] = value;
          }
        });
        const result2 = await target2.start(props2);
        bailIfEnded(bailSignal);
        if (state.paused) {
          await new Promise((resume) => {
            state.resumeQueue.add(resume);
          });
        }
        return result2;
      })();
    };
    let result;
    if (globals.skipAnimation) {
      stopAsync(state);
      return getFinishedResult(target2, false);
    }
    try {
      let animating;
      if (is.arr(to3)) {
        animating = (async (queue) => {
          for (const props2 of queue) {
            await animate(props2);
          }
        })(to3);
      } else {
        animating = Promise.resolve(to3(animate, target2.stop.bind(target2)));
      }
      await Promise.all([animating.then(preventBail), bailPromise]);
      result = getFinishedResult(target2.get(), true, false);
    } catch (err) {
      if (err instanceof BailSignal) {
        result = err.result;
      } else if (err instanceof SkipAnimationSignal) {
        result = err.result;
      } else {
        throw err;
      }
    } finally {
      if (callId == state.asyncId) {
        state.asyncId = parentId;
        state.asyncTo = parentId ? prevTo : void 0;
        state.promise = parentId ? prevPromise : void 0;
      }
    }
    if (is.fun(onRest)) {
      raf.batchedUpdates(() => {
        onRest(result, target2, target2.item);
      });
    }
    return result;
  })();
}
function stopAsync(state, cancelId) {
  flush(state.timeouts, (t) => t.cancel());
  state.pauseQueue.clear();
  state.resumeQueue.clear();
  state.asyncId = state.asyncTo = state.promise = void 0;
  if (cancelId)
    state.cancelId = cancelId;
}
var BailSignal = class extends Error {
  constructor() {
    super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.");
    this.result = void 0;
  }
};
var SkipAnimationSignal = class extends Error {
  constructor() {
    super("SkipAnimationSignal");
    this.result = void 0;
  }
};
var isFrameValue = (value) => value instanceof FrameValue;
var nextId$1 = 1;
var FrameValue = class extends FluidValue {
  constructor(...args) {
    super(...args);
    this.id = nextId$1++;
    this.key = void 0;
    this._priority = 0;
  }
  get priority() {
    return this._priority;
  }
  set priority(priority2) {
    if (this._priority != priority2) {
      this._priority = priority2;
      this._onPriorityChange(priority2);
    }
  }
  get() {
    const node = getAnimated(this);
    return node && node.getValue();
  }
  to(...args) {
    return globals.to(this, args);
  }
  interpolate(...args) {
    deprecateInterpolate();
    return globals.to(this, args);
  }
  toJSON() {
    return this.get();
  }
  observerAdded(count) {
    if (count == 1)
      this._attach();
  }
  observerRemoved(count) {
    if (count == 0)
      this._detach();
  }
  _attach() {
  }
  _detach() {
  }
  _onChange(value, idle = false) {
    callFluidObservers(this, {
      type: "change",
      parent: this,
      value,
      idle
    });
  }
  _onPriorityChange(priority2) {
    if (!this.idle) {
      frameLoop.sort(this);
    }
    callFluidObservers(this, {
      type: "priority",
      parent: this,
      priority: priority2
    });
  }
};
var $P = Symbol.for("SpringPhase");
var HAS_ANIMATED = 1;
var IS_ANIMATING = 2;
var IS_PAUSED = 4;
var hasAnimated = (target2) => (target2[$P] & HAS_ANIMATED) > 0;
var isAnimating = (target2) => (target2[$P] & IS_ANIMATING) > 0;
var isPaused = (target2) => (target2[$P] & IS_PAUSED) > 0;
var setActiveBit = (target2, active) => active ? target2[$P] |= IS_ANIMATING | HAS_ANIMATED : target2[$P] &= ~IS_ANIMATING;
var setPausedBit = (target2, paused) => paused ? target2[$P] |= IS_PAUSED : target2[$P] &= ~IS_PAUSED;
var SpringValue = class extends FrameValue {
  constructor(arg1, arg2) {
    super();
    this.key = void 0;
    this.animation = new Animation();
    this.queue = void 0;
    this.defaultProps = {};
    this._state = {
      paused: false,
      delayed: false,
      pauseQueue: /* @__PURE__ */ new Set(),
      resumeQueue: /* @__PURE__ */ new Set(),
      timeouts: /* @__PURE__ */ new Set()
    };
    this._pendingCalls = /* @__PURE__ */ new Set();
    this._lastCallId = 0;
    this._lastToId = 0;
    this._memoizedDuration = 0;
    if (!is.und(arg1) || !is.und(arg2)) {
      const props = is.obj(arg1) ? _extends3({}, arg1) : _extends3({}, arg2, {
        from: arg1
      });
      if (is.und(props.default)) {
        props.default = true;
      }
      this.start(props);
    }
  }
  get idle() {
    return !(isAnimating(this) || this._state.asyncTo) || isPaused(this);
  }
  get goal() {
    return getFluidValue(this.animation.to);
  }
  get velocity() {
    const node = getAnimated(this);
    return node instanceof AnimatedValue ? node.lastVelocity || 0 : node.getPayload().map((node2) => node2.lastVelocity || 0);
  }
  get hasAnimated() {
    return hasAnimated(this);
  }
  get isAnimating() {
    return isAnimating(this);
  }
  get isPaused() {
    return isPaused(this);
  }
  get isDelayed() {
    return this._state.delayed;
  }
  advance(dt) {
    let idle = true;
    let changed = false;
    const anim = this.animation;
    let {
      config: config2,
      toValues
    } = anim;
    const payload = getPayload(anim.to);
    if (!payload && hasFluidValue(anim.to)) {
      toValues = toArray(getFluidValue(anim.to));
    }
    anim.values.forEach((node2, i) => {
      if (node2.done)
        return;
      const to3 = node2.constructor == AnimatedString ? 1 : payload ? payload[i].lastPosition : toValues[i];
      let finished = anim.immediate;
      let position = to3;
      if (!finished) {
        position = node2.lastPosition;
        if (config2.tension <= 0) {
          node2.done = true;
          return;
        }
        let elapsed = node2.elapsedTime += dt;
        const from = anim.fromValues[i];
        const v0 = node2.v0 != null ? node2.v0 : node2.v0 = is.arr(config2.velocity) ? config2.velocity[i] : config2.velocity;
        let velocity;
        const precision = config2.precision || (from == to3 ? 5e-3 : Math.min(1, Math.abs(to3 - from) * 1e-3));
        if (!is.und(config2.duration)) {
          let p = 1;
          if (config2.duration > 0) {
            if (this._memoizedDuration !== config2.duration) {
              this._memoizedDuration = config2.duration;
              if (node2.durationProgress > 0) {
                node2.elapsedTime = config2.duration * node2.durationProgress;
                elapsed = node2.elapsedTime += dt;
              }
            }
            p = (config2.progress || 0) + elapsed / this._memoizedDuration;
            p = p > 1 ? 1 : p < 0 ? 0 : p;
            node2.durationProgress = p;
          }
          position = from + config2.easing(p) * (to3 - from);
          velocity = (position - node2.lastPosition) / dt;
          finished = p == 1;
        } else if (config2.decay) {
          const decay = config2.decay === true ? 0.998 : config2.decay;
          const e = Math.exp(-(1 - decay) * elapsed);
          position = from + v0 / (1 - decay) * (1 - e);
          finished = Math.abs(node2.lastPosition - position) <= precision;
          velocity = v0 * e;
        } else {
          velocity = node2.lastVelocity == null ? v0 : node2.lastVelocity;
          const restVelocity = config2.restVelocity || precision / 10;
          const bounceFactor = config2.clamp ? 0 : config2.bounce;
          const canBounce = !is.und(bounceFactor);
          const isGrowing = from == to3 ? node2.v0 > 0 : from < to3;
          let isMoving;
          let isBouncing = false;
          const step = 1;
          const numSteps = Math.ceil(dt / step);
          for (let n = 0; n < numSteps; ++n) {
            isMoving = Math.abs(velocity) > restVelocity;
            if (!isMoving) {
              finished = Math.abs(to3 - position) <= precision;
              if (finished) {
                break;
              }
            }
            if (canBounce) {
              isBouncing = position == to3 || position > to3 == isGrowing;
              if (isBouncing) {
                velocity = -velocity * bounceFactor;
                position = to3;
              }
            }
            const springForce = -config2.tension * 1e-6 * (position - to3);
            const dampingForce = -config2.friction * 1e-3 * velocity;
            const acceleration = (springForce + dampingForce) / config2.mass;
            velocity = velocity + acceleration * step;
            position = position + velocity * step;
          }
        }
        node2.lastVelocity = velocity;
        if (Number.isNaN(position)) {
          console.warn(`Got NaN while animating:`, this);
          finished = true;
        }
      }
      if (payload && !payload[i].done) {
        finished = false;
      }
      if (finished) {
        node2.done = true;
      } else {
        idle = false;
      }
      if (node2.setValue(position, config2.round)) {
        changed = true;
      }
    });
    const node = getAnimated(this);
    const currVal = node.getValue();
    if (idle) {
      const finalVal = getFluidValue(anim.to);
      if ((currVal !== finalVal || changed) && !config2.decay) {
        node.setValue(finalVal);
        this._onChange(finalVal);
      } else if (changed && config2.decay) {
        this._onChange(currVal);
      }
      this._stop();
    } else if (changed) {
      this._onChange(currVal);
    }
  }
  set(value) {
    raf.batchedUpdates(() => {
      this._stop();
      this._focus(value);
      this._set(value);
    });
    return this;
  }
  pause() {
    this._update({
      pause: true
    });
  }
  resume() {
    this._update({
      pause: false
    });
  }
  finish() {
    if (isAnimating(this)) {
      const {
        to: to3,
        config: config2
      } = this.animation;
      raf.batchedUpdates(() => {
        this._onStart();
        if (!config2.decay) {
          this._set(to3, false);
        }
        this._stop();
      });
    }
    return this;
  }
  update(props) {
    const queue = this.queue || (this.queue = []);
    queue.push(props);
    return this;
  }
  start(to3, arg2) {
    let queue;
    if (!is.und(to3)) {
      queue = [is.obj(to3) ? to3 : _extends3({}, arg2, {
        to: to3
      })];
    } else {
      queue = this.queue || [];
      this.queue = [];
    }
    return Promise.all(queue.map((props) => {
      const up = this._update(props);
      return up;
    })).then((results) => getCombinedResult(this, results));
  }
  stop(cancel) {
    const {
      to: to3
    } = this.animation;
    this._focus(this.get());
    stopAsync(this._state, cancel && this._lastCallId);
    raf.batchedUpdates(() => this._stop(to3, cancel));
    return this;
  }
  reset() {
    this._update({
      reset: true
    });
  }
  eventObserved(event) {
    if (event.type == "change") {
      this._start();
    } else if (event.type == "priority") {
      this.priority = event.priority + 1;
    }
  }
  _prepareNode(props) {
    const key = this.key || "";
    let {
      to: to3,
      from
    } = props;
    to3 = is.obj(to3) ? to3[key] : to3;
    if (to3 == null || isAsyncTo(to3)) {
      to3 = void 0;
    }
    from = is.obj(from) ? from[key] : from;
    if (from == null) {
      from = void 0;
    }
    const range = {
      to: to3,
      from
    };
    if (!hasAnimated(this)) {
      if (props.reverse)
        [to3, from] = [from, to3];
      from = getFluidValue(from);
      if (!is.und(from)) {
        this._set(from);
      } else if (!getAnimated(this)) {
        this._set(to3);
      }
    }
    return range;
  }
  _update(_ref, isLoop) {
    let props = _extends3({}, _ref);
    const {
      key,
      defaultProps
    } = this;
    if (props.default)
      Object.assign(defaultProps, getDefaultProps(props, (value, prop) => /^on/.test(prop) ? resolveProp(value, key) : value));
    mergeActiveFn(this, props, "onProps");
    sendEvent(this, "onProps", props, this);
    const range = this._prepareNode(props);
    if (Object.isFrozen(this)) {
      throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");
    }
    const state = this._state;
    return scheduleProps(++this._lastCallId, {
      key,
      props,
      defaultProps,
      state,
      actions: {
        pause: () => {
          if (!isPaused(this)) {
            setPausedBit(this, true);
            flushCalls(state.pauseQueue);
            sendEvent(this, "onPause", getFinishedResult(this, checkFinished(this, this.animation.to)), this);
          }
        },
        resume: () => {
          if (isPaused(this)) {
            setPausedBit(this, false);
            if (isAnimating(this)) {
              this._resume();
            }
            flushCalls(state.resumeQueue);
            sendEvent(this, "onResume", getFinishedResult(this, checkFinished(this, this.animation.to)), this);
          }
        },
        start: this._merge.bind(this, range)
      }
    }).then((result) => {
      if (props.loop && result.finished && !(isLoop && result.noop)) {
        const nextProps = createLoopUpdate(props);
        if (nextProps) {
          return this._update(nextProps, true);
        }
      }
      return result;
    });
  }
  _merge(range, props, resolve) {
    if (props.cancel) {
      this.stop(true);
      return resolve(getCancelledResult(this));
    }
    const hasToProp = !is.und(range.to);
    const hasFromProp = !is.und(range.from);
    if (hasToProp || hasFromProp) {
      if (props.callId > this._lastToId) {
        this._lastToId = props.callId;
      } else {
        return resolve(getCancelledResult(this));
      }
    }
    const {
      key,
      defaultProps,
      animation: anim
    } = this;
    const {
      to: prevTo,
      from: prevFrom
    } = anim;
    let {
      to: to3 = prevTo,
      from = prevFrom
    } = range;
    if (hasFromProp && !hasToProp && (!props.default || is.und(to3))) {
      to3 = from;
    }
    if (props.reverse)
      [to3, from] = [from, to3];
    const hasFromChanged = !isEqual(from, prevFrom);
    if (hasFromChanged) {
      anim.from = from;
    }
    from = getFluidValue(from);
    const hasToChanged = !isEqual(to3, prevTo);
    if (hasToChanged) {
      this._focus(to3);
    }
    const hasAsyncTo = isAsyncTo(props.to);
    const {
      config: config2
    } = anim;
    const {
      decay,
      velocity
    } = config2;
    if (hasToProp || hasFromProp) {
      config2.velocity = 0;
    }
    if (props.config && !hasAsyncTo) {
      mergeConfig(config2, callProp(props.config, key), props.config !== defaultProps.config ? callProp(defaultProps.config, key) : void 0);
    }
    let node = getAnimated(this);
    if (!node || is.und(to3)) {
      return resolve(getFinishedResult(this, true));
    }
    const reset = is.und(props.reset) ? hasFromProp && !props.default : !is.und(from) && matchProp(props.reset, key);
    const value = reset ? from : this.get();
    const goal = computeGoal(to3);
    const isAnimatable = is.num(goal) || is.arr(goal) || isAnimatedString(goal);
    const immediate = !hasAsyncTo && (!isAnimatable || matchProp(defaultProps.immediate || props.immediate, key));
    if (hasToChanged) {
      const nodeType = getAnimatedType(to3);
      if (nodeType !== node.constructor) {
        if (immediate) {
          node = this._set(goal);
        } else
          throw Error(`Cannot animate between ${node.constructor.name} and ${nodeType.name}, as the "to" prop suggests`);
      }
    }
    const goalType = node.constructor;
    let started = hasFluidValue(to3);
    let finished = false;
    if (!started) {
      const hasValueChanged = reset || !hasAnimated(this) && hasFromChanged;
      if (hasToChanged || hasValueChanged) {
        finished = isEqual(computeGoal(value), goal);
        started = !finished;
      }
      if (!isEqual(anim.immediate, immediate) && !immediate || !isEqual(config2.decay, decay) || !isEqual(config2.velocity, velocity)) {
        started = true;
      }
    }
    if (finished && isAnimating(this)) {
      if (anim.changed && !reset) {
        started = true;
      } else if (!started) {
        this._stop(prevTo);
      }
    }
    if (!hasAsyncTo) {
      if (started || hasFluidValue(prevTo)) {
        anim.values = node.getPayload();
        anim.toValues = hasFluidValue(to3) ? null : goalType == AnimatedString ? [1] : toArray(goal);
      }
      if (anim.immediate != immediate) {
        anim.immediate = immediate;
        if (!immediate && !reset) {
          this._set(prevTo);
        }
      }
      if (started) {
        const {
          onRest
        } = anim;
        each(ACTIVE_EVENTS, (type) => mergeActiveFn(this, props, type));
        const result = getFinishedResult(this, checkFinished(this, prevTo));
        flushCalls(this._pendingCalls, result);
        this._pendingCalls.add(resolve);
        if (anim.changed)
          raf.batchedUpdates(() => {
            anim.changed = !reset;
            onRest == null ? void 0 : onRest(result, this);
            if (reset) {
              callProp(defaultProps.onRest, result);
            } else {
              anim.onStart == null ? void 0 : anim.onStart(result, this);
            }
          });
      }
    }
    if (reset) {
      this._set(value);
    }
    if (hasAsyncTo) {
      resolve(runAsync(props.to, props, this._state, this));
    } else if (started) {
      this._start();
    } else if (isAnimating(this) && !hasToChanged) {
      this._pendingCalls.add(resolve);
    } else {
      resolve(getNoopResult(value));
    }
  }
  _focus(value) {
    const anim = this.animation;
    if (value !== anim.to) {
      if (getFluidObservers(this)) {
        this._detach();
      }
      anim.to = value;
      if (getFluidObservers(this)) {
        this._attach();
      }
    }
  }
  _attach() {
    let priority2 = 0;
    const {
      to: to3
    } = this.animation;
    if (hasFluidValue(to3)) {
      addFluidObserver(to3, this);
      if (isFrameValue(to3)) {
        priority2 = to3.priority + 1;
      }
    }
    this.priority = priority2;
  }
  _detach() {
    const {
      to: to3
    } = this.animation;
    if (hasFluidValue(to3)) {
      removeFluidObserver(to3, this);
    }
  }
  _set(arg, idle = true) {
    const value = getFluidValue(arg);
    if (!is.und(value)) {
      const oldNode = getAnimated(this);
      if (!oldNode || !isEqual(value, oldNode.getValue())) {
        const nodeType = getAnimatedType(value);
        if (!oldNode || oldNode.constructor != nodeType) {
          setAnimated(this, nodeType.create(value));
        } else {
          oldNode.setValue(value);
        }
        if (oldNode) {
          raf.batchedUpdates(() => {
            this._onChange(value, idle);
          });
        }
      }
    }
    return getAnimated(this);
  }
  _onStart() {
    const anim = this.animation;
    if (!anim.changed) {
      anim.changed = true;
      sendEvent(this, "onStart", getFinishedResult(this, checkFinished(this, anim.to)), this);
    }
  }
  _onChange(value, idle) {
    if (!idle) {
      this._onStart();
      callProp(this.animation.onChange, value, this);
    }
    callProp(this.defaultProps.onChange, value, this);
    super._onChange(value, idle);
  }
  _start() {
    const anim = this.animation;
    getAnimated(this).reset(getFluidValue(anim.to));
    if (!anim.immediate) {
      anim.fromValues = anim.values.map((node) => node.lastPosition);
    }
    if (!isAnimating(this)) {
      setActiveBit(this, true);
      if (!isPaused(this)) {
        this._resume();
      }
    }
  }
  _resume() {
    if (globals.skipAnimation) {
      this.finish();
    } else {
      frameLoop.start(this);
    }
  }
  _stop(goal, cancel) {
    if (isAnimating(this)) {
      setActiveBit(this, false);
      const anim = this.animation;
      each(anim.values, (node) => {
        node.done = true;
      });
      if (anim.toValues) {
        anim.onChange = anim.onPause = anim.onResume = void 0;
      }
      callFluidObservers(this, {
        type: "idle",
        parent: this
      });
      const result = cancel ? getCancelledResult(this.get()) : getFinishedResult(this.get(), checkFinished(this, goal != null ? goal : anim.to));
      flushCalls(this._pendingCalls, result);
      if (anim.changed) {
        anim.changed = false;
        sendEvent(this, "onRest", result, this);
      }
    }
  }
};
function checkFinished(target2, to3) {
  const goal = computeGoal(to3);
  const value = computeGoal(target2.get());
  return isEqual(value, goal);
}
function createLoopUpdate(props, loop2 = props.loop, to3 = props.to) {
  let loopRet = callProp(loop2);
  if (loopRet) {
    const overrides = loopRet !== true && inferTo(loopRet);
    const reverse = (overrides || props).reverse;
    const reset = !overrides || overrides.reset;
    return createUpdate(_extends3({}, props, {
      loop: loop2,
      default: false,
      pause: void 0,
      to: !reverse || isAsyncTo(to3) ? to3 : void 0,
      from: reset ? props.from : void 0,
      reset
    }, overrides));
  }
}
function createUpdate(props) {
  const {
    to: to3,
    from
  } = props = inferTo(props);
  const keys = /* @__PURE__ */ new Set();
  if (is.obj(to3))
    findDefined(to3, keys);
  if (is.obj(from))
    findDefined(from, keys);
  props.keys = keys.size ? Array.from(keys) : null;
  return props;
}
function declareUpdate(props) {
  const update3 = createUpdate(props);
  if (is.und(update3.default)) {
    update3.default = getDefaultProps(update3);
  }
  return update3;
}
function findDefined(values, keys) {
  eachProp(values, (value, key) => value != null && keys.add(key));
}
var ACTIVE_EVENTS = ["onStart", "onRest", "onChange", "onPause", "onResume"];
function mergeActiveFn(target2, props, type) {
  target2.animation[type] = props[type] !== getDefaultProp(props, type) ? resolveProp(props[type], target2.key) : void 0;
}
function sendEvent(target2, type, ...args) {
  var _target$animation$typ, _target$animation, _target$defaultProps$, _target$defaultProps;
  (_target$animation$typ = (_target$animation = target2.animation)[type]) == null ? void 0 : _target$animation$typ.call(_target$animation, ...args);
  (_target$defaultProps$ = (_target$defaultProps = target2.defaultProps)[type]) == null ? void 0 : _target$defaultProps$.call(_target$defaultProps, ...args);
}
var BATCHED_EVENTS = ["onStart", "onChange", "onRest"];
var nextId = 1;
var Controller = class {
  constructor(props, flush2) {
    this.id = nextId++;
    this.springs = {};
    this.queue = [];
    this.ref = void 0;
    this._flush = void 0;
    this._initialProps = void 0;
    this._lastAsyncId = 0;
    this._active = /* @__PURE__ */ new Set();
    this._changed = /* @__PURE__ */ new Set();
    this._started = false;
    this._item = void 0;
    this._state = {
      paused: false,
      pauseQueue: /* @__PURE__ */ new Set(),
      resumeQueue: /* @__PURE__ */ new Set(),
      timeouts: /* @__PURE__ */ new Set()
    };
    this._events = {
      onStart: /* @__PURE__ */ new Map(),
      onChange: /* @__PURE__ */ new Map(),
      onRest: /* @__PURE__ */ new Map()
    };
    this._onFrame = this._onFrame.bind(this);
    if (flush2) {
      this._flush = flush2;
    }
    if (props) {
      this.start(_extends3({
        default: true
      }, props));
    }
  }
  get idle() {
    return !this._state.asyncTo && Object.values(this.springs).every((spring) => {
      return spring.idle && !spring.isDelayed && !spring.isPaused;
    });
  }
  get item() {
    return this._item;
  }
  set item(item) {
    this._item = item;
  }
  get() {
    const values = {};
    this.each((spring, key) => values[key] = spring.get());
    return values;
  }
  set(values) {
    for (const key in values) {
      const value = values[key];
      if (!is.und(value)) {
        this.springs[key].set(value);
      }
    }
  }
  update(props) {
    if (props) {
      this.queue.push(createUpdate(props));
    }
    return this;
  }
  start(props) {
    let {
      queue
    } = this;
    if (props) {
      queue = toArray(props).map(createUpdate);
    } else {
      this.queue = [];
    }
    if (this._flush) {
      return this._flush(this, queue);
    }
    prepareKeys(this, queue);
    return flushUpdateQueue(this, queue);
  }
  stop(arg, keys) {
    if (arg !== !!arg) {
      keys = arg;
    }
    if (keys) {
      const springs = this.springs;
      each(toArray(keys), (key) => springs[key].stop(!!arg));
    } else {
      stopAsync(this._state, this._lastAsyncId);
      this.each((spring) => spring.stop(!!arg));
    }
    return this;
  }
  pause(keys) {
    if (is.und(keys)) {
      this.start({
        pause: true
      });
    } else {
      const springs = this.springs;
      each(toArray(keys), (key) => springs[key].pause());
    }
    return this;
  }
  resume(keys) {
    if (is.und(keys)) {
      this.start({
        pause: false
      });
    } else {
      const springs = this.springs;
      each(toArray(keys), (key) => springs[key].resume());
    }
    return this;
  }
  each(iterator) {
    eachProp(this.springs, iterator);
  }
  _onFrame() {
    const {
      onStart,
      onChange,
      onRest
    } = this._events;
    const active = this._active.size > 0;
    const changed = this._changed.size > 0;
    if (active && !this._started || changed && !this._started) {
      this._started = true;
      flush(onStart, ([onStart2, result]) => {
        result.value = this.get();
        onStart2(result, this, this._item);
      });
    }
    const idle = !active && this._started;
    const values = changed || idle && onRest.size ? this.get() : null;
    if (changed && onChange.size) {
      flush(onChange, ([onChange2, result]) => {
        result.value = values;
        onChange2(result, this, this._item);
      });
    }
    if (idle) {
      this._started = false;
      flush(onRest, ([onRest2, result]) => {
        result.value = values;
        onRest2(result, this, this._item);
      });
    }
  }
  eventObserved(event) {
    if (event.type == "change") {
      this._changed.add(event.parent);
      if (!event.idle) {
        this._active.add(event.parent);
      }
    } else if (event.type == "idle") {
      this._active.delete(event.parent);
    } else
      return;
    raf.onFrame(this._onFrame);
  }
};
function flushUpdateQueue(ctrl, queue) {
  return Promise.all(queue.map((props) => flushUpdate(ctrl, props))).then((results) => getCombinedResult(ctrl, results));
}
async function flushUpdate(ctrl, props, isLoop) {
  const {
    keys,
    to: to3,
    from,
    loop: loop2,
    onRest,
    onResolve
  } = props;
  const defaults2 = is.obj(props.default) && props.default;
  if (loop2) {
    props.loop = false;
  }
  if (to3 === false)
    props.to = null;
  if (from === false)
    props.from = null;
  const asyncTo = is.arr(to3) || is.fun(to3) ? to3 : void 0;
  if (asyncTo) {
    props.to = void 0;
    props.onRest = void 0;
    if (defaults2) {
      defaults2.onRest = void 0;
    }
  } else {
    each(BATCHED_EVENTS, (key) => {
      const handler = props[key];
      if (is.fun(handler)) {
        const queue = ctrl["_events"][key];
        props[key] = ({
          finished,
          cancelled
        }) => {
          const result2 = queue.get(handler);
          if (result2) {
            if (!finished)
              result2.finished = false;
            if (cancelled)
              result2.cancelled = true;
          } else {
            queue.set(handler, {
              value: null,
              finished: finished || false,
              cancelled: cancelled || false
            });
          }
        };
        if (defaults2) {
          defaults2[key] = props[key];
        }
      }
    });
  }
  const state = ctrl["_state"];
  if (props.pause === !state.paused) {
    state.paused = props.pause;
    flushCalls(props.pause ? state.pauseQueue : state.resumeQueue);
  } else if (state.paused) {
    props.pause = true;
  }
  const promises = (keys || Object.keys(ctrl.springs)).map((key) => ctrl.springs[key].start(props));
  const cancel = props.cancel === true || getDefaultProp(props, "cancel") === true;
  if (asyncTo || cancel && state.asyncId) {
    promises.push(scheduleProps(++ctrl["_lastAsyncId"], {
      props,
      state,
      actions: {
        pause: noop,
        resume: noop,
        start(props2, resolve) {
          if (cancel) {
            stopAsync(state, ctrl["_lastAsyncId"]);
            resolve(getCancelledResult(ctrl));
          } else {
            props2.onRest = onRest;
            resolve(runAsync(asyncTo, props2, state, ctrl));
          }
        }
      }
    }));
  }
  if (state.paused) {
    await new Promise((resume) => {
      state.resumeQueue.add(resume);
    });
  }
  const result = getCombinedResult(ctrl, await Promise.all(promises));
  if (loop2 && result.finished && !(isLoop && result.noop)) {
    const nextProps = createLoopUpdate(props, loop2, to3);
    if (nextProps) {
      prepareKeys(ctrl, [nextProps]);
      return flushUpdate(ctrl, nextProps, true);
    }
  }
  if (onResolve) {
    raf.batchedUpdates(() => onResolve(result, ctrl, ctrl.item));
  }
  return result;
}
function getSprings(ctrl, props) {
  const springs = _extends3({}, ctrl.springs);
  if (props) {
    each(toArray(props), (props2) => {
      if (is.und(props2.keys)) {
        props2 = createUpdate(props2);
      }
      if (!is.obj(props2.to)) {
        props2 = _extends3({}, props2, {
          to: void 0
        });
      }
      prepareSprings(springs, props2, (key) => {
        return createSpring(key);
      });
    });
  }
  setSprings(ctrl, springs);
  return springs;
}
function setSprings(ctrl, springs) {
  eachProp(springs, (spring, key) => {
    if (!ctrl.springs[key]) {
      ctrl.springs[key] = spring;
      addFluidObserver(spring, ctrl);
    }
  });
}
function createSpring(key, observer) {
  const spring = new SpringValue();
  spring.key = key;
  if (observer) {
    addFluidObserver(spring, observer);
  }
  return spring;
}
function prepareSprings(springs, props, create2) {
  if (props.keys) {
    each(props.keys, (key) => {
      const spring = springs[key] || (springs[key] = create2(key));
      spring["_prepareNode"](props);
    });
  }
}
function prepareKeys(ctrl, queue) {
  each(queue, (props) => {
    prepareSprings(ctrl.springs, props, (key) => {
      return createSpring(key, ctrl);
    });
  });
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target2 = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target2[key] = source[key];
  }
  return target2;
}
var _excluded$6 = ["children"];
var SpringContext = (_ref) => {
  let {
    children
  } = _ref, props = _objectWithoutPropertiesLoose(_ref, _excluded$6);
  const inherited = useContext2(ctx);
  const pause = props.pause || !!inherited.pause, immediate = props.immediate || !!inherited.immediate;
  props = useMemoOne(() => ({
    pause,
    immediate
  }), [pause, immediate]);
  const {
    Provider
  } = ctx;
  return React8.createElement(Provider, {
    value: props
  }, children);
};
var ctx = makeContext(SpringContext, {});
SpringContext.Provider = ctx.Provider;
SpringContext.Consumer = ctx.Consumer;
function makeContext(target2, init) {
  Object.assign(target2, React8.createContext(init));
  target2.Provider._context = target2;
  target2.Consumer._context = target2;
  return target2;
}
var SpringRef = () => {
  const current = [];
  const SpringRef2 = function SpringRef3(props) {
    deprecateDirectCall();
    const results = [];
    each(current, (ctrl, i) => {
      if (is.und(props)) {
        results.push(ctrl.start());
      } else {
        const update3 = _getProps(props, ctrl, i);
        if (update3) {
          results.push(ctrl.start(update3));
        }
      }
    });
    return results;
  };
  SpringRef2.current = current;
  SpringRef2.add = function(ctrl) {
    if (!current.includes(ctrl)) {
      current.push(ctrl);
    }
  };
  SpringRef2.delete = function(ctrl) {
    const i = current.indexOf(ctrl);
    if (~i)
      current.splice(i, 1);
  };
  SpringRef2.pause = function() {
    each(current, (ctrl) => ctrl.pause(...arguments));
    return this;
  };
  SpringRef2.resume = function() {
    each(current, (ctrl) => ctrl.resume(...arguments));
    return this;
  };
  SpringRef2.set = function(values) {
    each(current, (ctrl) => ctrl.set(values));
  };
  SpringRef2.start = function(props) {
    const results = [];
    each(current, (ctrl, i) => {
      if (is.und(props)) {
        results.push(ctrl.start());
      } else {
        const update3 = this._getProps(props, ctrl, i);
        if (update3) {
          results.push(ctrl.start(update3));
        }
      }
    });
    return results;
  };
  SpringRef2.stop = function() {
    each(current, (ctrl) => ctrl.stop(...arguments));
    return this;
  };
  SpringRef2.update = function(props) {
    each(current, (ctrl, i) => ctrl.update(this._getProps(props, ctrl, i)));
    return this;
  };
  const _getProps = function _getProps2(arg, ctrl, index) {
    return is.fun(arg) ? arg(index, ctrl) : arg;
  };
  SpringRef2._getProps = _getProps;
  return SpringRef2;
};
function useSprings(length, props, deps) {
  const propsFn = is.fun(props) && props;
  if (propsFn && !deps)
    deps = [];
  const ref = useMemo5(() => propsFn || arguments.length == 3 ? SpringRef() : void 0, []);
  const layoutId = useRef6(0);
  const forceUpdate = useForceUpdate();
  const state = useMemo5(() => ({
    ctrls: [],
    queue: [],
    flush(ctrl, updates2) {
      const springs2 = getSprings(ctrl, updates2);
      const canFlushSync = layoutId.current > 0 && !state.queue.length && !Object.keys(springs2).some((key) => !ctrl.springs[key]);
      return canFlushSync ? flushUpdateQueue(ctrl, updates2) : new Promise((resolve) => {
        setSprings(ctrl, springs2);
        state.queue.push(() => {
          resolve(flushUpdateQueue(ctrl, updates2));
        });
        forceUpdate();
      });
    }
  }), []);
  const ctrls = useRef6([...state.ctrls]);
  const updates = [];
  const prevLength = usePrev(length) || 0;
  useMemo5(() => {
    each(ctrls.current.slice(length, prevLength), (ctrl) => {
      detachRefs(ctrl, ref);
      ctrl.stop(true);
    });
    ctrls.current.length = length;
    declareUpdates(prevLength, length);
  }, [length]);
  useMemo5(() => {
    declareUpdates(0, Math.min(prevLength, length));
  }, deps);
  function declareUpdates(startIndex, endIndex) {
    for (let i = startIndex; i < endIndex; i++) {
      const ctrl = ctrls.current[i] || (ctrls.current[i] = new Controller(null, state.flush));
      const update3 = propsFn ? propsFn(i, ctrl) : props[i];
      if (update3) {
        updates[i] = declareUpdate(update3);
      }
    }
  }
  const springs = ctrls.current.map((ctrl, i) => getSprings(ctrl, updates[i]));
  const context = useContext2(SpringContext);
  const prevContext = usePrev(context);
  const hasContext = context !== prevContext && hasProps(context);
  useIsomorphicLayoutEffect(() => {
    layoutId.current++;
    state.ctrls = ctrls.current;
    const {
      queue
    } = state;
    if (queue.length) {
      state.queue = [];
      each(queue, (cb) => cb());
    }
    each(ctrls.current, (ctrl, i) => {
      ref == null ? void 0 : ref.add(ctrl);
      if (hasContext) {
        ctrl.start({
          default: context
        });
      }
      const update3 = updates[i];
      if (update3) {
        replaceRef(ctrl, update3.ref);
        if (ctrl.ref) {
          ctrl.queue.push(update3);
        } else {
          ctrl.start(update3);
        }
      }
    });
  });
  useOnce(() => () => {
    each(state.ctrls, (ctrl) => ctrl.stop(true));
  });
  const values = springs.map((x) => _extends3({}, x));
  return ref ? [values, ref] : values;
}
function useSpring(props, deps) {
  const isFn = is.fun(props);
  const [[values], ref] = useSprings(1, isFn ? props : [props], isFn ? deps || [] : deps);
  return isFn || arguments.length == 2 ? [values, ref] : values;
}
var TransitionPhase;
(function(TransitionPhase2) {
  TransitionPhase2["MOUNT"] = "mount";
  TransitionPhase2["ENTER"] = "enter";
  TransitionPhase2["UPDATE"] = "update";
  TransitionPhase2["LEAVE"] = "leave";
})(TransitionPhase || (TransitionPhase = {}));
var Interpolation = class extends FrameValue {
  constructor(source, args) {
    super();
    this.key = void 0;
    this.idle = true;
    this.calc = void 0;
    this._active = /* @__PURE__ */ new Set();
    this.source = source;
    this.calc = createInterpolator(...args);
    const value = this._get();
    const nodeType = getAnimatedType(value);
    setAnimated(this, nodeType.create(value));
  }
  advance(_dt) {
    const value = this._get();
    const oldValue = this.get();
    if (!isEqual(value, oldValue)) {
      getAnimated(this).setValue(value);
      this._onChange(value, this.idle);
    }
    if (!this.idle && checkIdle(this._active)) {
      becomeIdle(this);
    }
  }
  _get() {
    const inputs = is.arr(this.source) ? this.source.map(getFluidValue) : toArray(getFluidValue(this.source));
    return this.calc(...inputs);
  }
  _start() {
    if (this.idle && !checkIdle(this._active)) {
      this.idle = false;
      each(getPayload(this), (node) => {
        node.done = false;
      });
      if (globals.skipAnimation) {
        raf.batchedUpdates(() => this.advance());
        becomeIdle(this);
      } else {
        frameLoop.start(this);
      }
    }
  }
  _attach() {
    let priority2 = 1;
    each(toArray(this.source), (source) => {
      if (hasFluidValue(source)) {
        addFluidObserver(source, this);
      }
      if (isFrameValue(source)) {
        if (!source.idle) {
          this._active.add(source);
        }
        priority2 = Math.max(priority2, source.priority + 1);
      }
    });
    this.priority = priority2;
    this._start();
  }
  _detach() {
    each(toArray(this.source), (source) => {
      if (hasFluidValue(source)) {
        removeFluidObserver(source, this);
      }
    });
    this._active.clear();
    becomeIdle(this);
  }
  eventObserved(event) {
    if (event.type == "change") {
      if (event.idle) {
        this.advance();
      } else {
        this._active.add(event.parent);
        this._start();
      }
    } else if (event.type == "idle") {
      this._active.delete(event.parent);
    } else if (event.type == "priority") {
      this.priority = toArray(this.source).reduce((highest, parent) => Math.max(highest, (isFrameValue(parent) ? parent.priority : 0) + 1), 0);
    }
  }
};
function isIdle(source) {
  return source.idle !== false;
}
function checkIdle(active) {
  return !active.size || Array.from(active).every(isIdle);
}
function becomeIdle(self) {
  if (!self.idle) {
    self.idle = true;
    each(getPayload(self), (node) => {
      node.done = true;
    });
    callFluidObservers(self, {
      type: "idle",
      parent: self
    });
  }
}
globals.assign({
  createStringInterpolator,
  to: (source, args) => new Interpolation(source, args)
});
var update2 = frameLoop.advance;

// ../../node_modules/.pnpm/@react-spring+three@9.6.1_aj5kj473hsgheg4miwvuwybosy/node_modules/@react-spring/three/dist/react-spring-three.esm.js
import * as THREE6 from "three";
var primitives = ["primitive"].concat(Object.keys(THREE6).filter((key) => /^[A-Z]/.test(key)).map((key) => key[0].toLowerCase() + key.slice(1)));
globals.assign({
  createStringInterpolator,
  colors,
  frameLoop: "demand"
});
addEffect(() => {
  raf.advance();
});
var host = createHost(primitives, {
  applyAnimatedValues: applyProps2
});
var animated = host.animated;

// src/Gradient/comps/Mesh/Mesh.tsx
import { jsx as jsx9, jsxs as jsxs6 } from "react/jsx-runtime";
var { to: to2, rotDur, meshDur, rotDelay, meshDelay } = mainLoading;
var clock = new THREE7.Clock();
Math.easeInOutCubic = function(t, b, c, d) {
  t /= d / 2;
  if (t < 1)
    return c / 2 * t * t * t + b;
  t -= 2;
  return c / 2 * (t * t * t + 2) + b;
};
var increment = 20;
var Mesh4 = ({
  type,
  animate,
  uTime,
  uSpeed,
  uStrength,
  uDensity,
  uFrequency,
  uAmplitude,
  positionX,
  positionY,
  positionZ,
  rotationX,
  rotationY,
  rotationZ,
  color1,
  color2,
  color3,
  reflection,
  wireframe,
  shader,
  rotSpringOption = ({ rotation }) => ({
    to: (next, cancel) => __async(void 0, null, function* () {
      yield next({ animatedRotation: rotation });
    }),
    from: { rotation: dToRArr([0, 0, 0]) },
    config: { duration: 300 }
  }),
  posSpringOption = ({ position }) => ({
    to: (next, cancel) => __async(void 0, null, function* () {
      yield next({ animatedPosition: position });
    }),
    from: { position: [0, 0, 0] },
    config: { duration: 300 }
  })
}) => {
  let sceneShader = defaults_exports[type != null ? type : "plane"];
  if (shader && shader !== "defaults")
    sceneShader = shaders_exports[shader][type != null ? type : "plane"];
  const hoverState = usePropertyStore((state) => state.hoverState);
  const [, setZoomOut] = useQueryState_default("zoomOut");
  const meshCount = 192;
  const meshLineCount = 36;
  useEffect8(() => {
    if (hoverState !== 0)
      setZoomOut(true);
    else
      setZoomOut(false);
  }, [hoverState]);
  const ColorShiftMaterial = shaderMaterial(
    {
      colors: getHoverColor(hoverState, [color1, color2, color3]),
      uTime,
      uSpeed,
      uLoadingTime: 0,
      uNoiseDensity: uDensity,
      uNoiseStrength: uStrength,
      uFrequency,
      uAmplitude,
      uIntensity: 0.5
    },
    sceneShader.vertex,
    sceneShader.fragment
  );
  const HoveredLineMaterial = lineMaterial(
    {
      uTime,
      uSpeed,
      uNoiseDensity: uDensity,
      uNoiseStrength: uStrength,
      uFrequency,
      uAmplitude,
      uIntensity: 0.5
    },
    sceneShader.vertex
  );
  ColorShiftMaterial.key = THREE7.MathUtils.generateUUID();
  extend2({ ColorShiftMaterial });
  HoveredLineMaterial.key = THREE7.MathUtils.generateUUID();
  extend2({ HoveredLineMaterial });
  const material = useRef7();
  const linemat = useRef7();
  let currentTime = 0;
  useFrame6((state, delta) => {
    const elapsed = clock.getElapsedTime();
    if (elapsed > meshDelay) {
      const current = material.current.userData.uLoadingTime.value;
      const val = elapsed < meshDur + meshDelay ? Math.easeInOutCubic(
        currentTime,
        current,
        to2 - current,
        meshDur * 1e3
      ) : to2;
      material.current.userData.uLoadingTime.value = val;
      if (elapsed < meshDur + meshDelay) {
        currentTime += increment;
      }
    }
    if (animate === "on") {
      material.current.userData.uTime.value = elapsed;
      if (linemat.current !== void 0) {
        linemat.current.userData.uTime.value = elapsed;
      }
    }
  });
  useEffect8(() => {
    material.current.userData.uTime.value = uTime;
    if (linemat.current !== void 0) {
      linemat.current.userData.uTime.value = uTime;
    }
    material.current.roughness = 1 - reflection;
  }, [uTime, reflection]);
  const position = [positionX, positionY, positionZ];
  const rotation = dToRArr([rotationX, rotationY, rotationZ]);
  const { animatedPosition } = useSpring(posSpringOption({ position }));
  const { animatedRotation } = useSpring(rotSpringOption({ rotation }));
  return /* @__PURE__ */ jsxs6("group", { children: [
    /* @__PURE__ */ jsxs6(animated.mesh, { position: animatedPosition, rotation: animatedRotation, children: [
      type === "plane" && /* @__PURE__ */ jsx9("planeGeometry", { args: [10, 10, 1, meshCount] }),
      type === "sphere" && /* @__PURE__ */ jsx9("icosahedronBufferGeometry", { args: [1, meshCount / 3] }),
      type === "waterPlane" && /* @__PURE__ */ jsx9("planeGeometry", { args: [10, 10, meshCount, meshCount] }),
      /* @__PURE__ */ jsx9("colorShiftMaterial", { ref: material }, ColorShiftMaterial.key)
    ] }),
    /* @__PURE__ */ jsx9("mesh", { children: /* @__PURE__ */ jsxs6(
      "lineSegments",
      {
        renderOrder: 1,
        position,
        rotation,
        visible: hoverState !== 0 ? true : false,
        children: [
          type === "plane" && /* @__PURE__ */ jsx9("planeGeometry", { args: [10, 10, 1, meshLineCount] }),
          type === "sphere" && /* @__PURE__ */ jsx9("icosahedronBufferGeometry", { args: [1, meshLineCount / 3] }),
          type === "waterPlane" && /* @__PURE__ */ jsx9("planeGeometry", { args: [10, 10, meshLineCount, meshLineCount] }),
          /* @__PURE__ */ jsx9("hoveredLineMaterial", { ref: linemat }, HoveredLineMaterial.key)
        ]
      }
    ) })
  ] });
};
function getHoverColor(hoverState, colors2) {
  if (hoverState === 1)
    return [colors2[0], "#000000", "#000000"];
  else if (hoverState === 2)
    return ["#000000", colors2[1], "#000000"];
  else if (hoverState === 3)
    return ["#000000", "#000000", colors2[2]];
  else
    return [colors2[0], colors2[1], colors2[2]];
}

// src/Gradient/Gradient.tsx
import { jsx as jsx10, jsxs as jsxs7 } from "react/jsx-runtime";
function Gradient(_a) {
  var _b = _a, {
    control = "props",
    dampingFactor,
    rotSpringOption,
    posSpringOption,
    isFigmaPlugin = false
  } = _b, props = __objRest(_b, [
    "control",
    "dampingFactor",
    "rotSpringOption",
    "posSpringOption",
    "isFigmaPlugin"
  ]);
  const _a2 = useControlValues(control, props), { lightType, envPreset, brightness, grain, toggleAxis } = _a2, others = __objRest(_a2, ["lightType", "envPreset", "brightness", "grain", "toggleAxis"]);
  usePostProcessing(grain === "off");
  return /* @__PURE__ */ jsxs7(Suspense, { fallback: "Load Failed", children: [
    /* @__PURE__ */ jsx10(
      Lights,
      {
        lightType,
        brightness,
        envPreset
      }
    ),
    /* @__PURE__ */ jsx10(
      Mesh4,
      __spreadProps(__spreadValues({}, others), {
        rotSpringOption,
        posSpringOption
      })
    ),
    toggleAxis && /* @__PURE__ */ jsx10(Axis2, { isFigmaPlugin }),
    /* @__PURE__ */ jsx10(CameraControl, __spreadValues({ dampingFactor }, others))
  ] });
}
export {
  Box,
  Gradient,
  GradientCanvas
};
