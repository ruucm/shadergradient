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
var __typeError = (msg2) => {
  throw TypeError(msg2);
};
var __defNormalProp = (obj, key3, value) => key3 in obj ? __defProp(obj, key3, { enumerable: true, configurable: true, writable: true, value }) : obj[key3] = value;
var __spreadValues = (a2, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a2, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a2, prop, b[prop]);
    }
  return a2;
};
var __spreadProps = (a2, b) => __defProps(a2, __getOwnPropDescs(b));
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
var __commonJS = (cb, mod2) => function __require() {
  return mod2 || (0, cb[__getOwnPropNames(cb)[0]])((mod2 = { exports: {} }).exports, mod2), mod2.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key3 of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key3) && key3 !== except)
        __defProp(to, key3, { get: () => from[key3], enumerable: !(desc = __getOwnPropDesc(from, key3)) || desc.enumerable });
  }
  return to;
};
var __reExport = (target, mod2, secondTarget) => (__copyProps(target, mod2, "default"), secondTarget && __copyProps(secondTarget, mod2, "default"));
var __toESM = (mod2, isNodeMode, target) => (target = mod2 != null ? __create(__getProtoOf(mod2)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod2 || !mod2.__esModule ? __defProp(target, "default", { value: mod2, enumerable: true }) : target,
  mod2
));
var __publicField = (obj, key3, value) => __defNormalProp(obj, typeof key3 !== "symbol" ? key3 + "" : key3, value);
var __accessCheck = (obj, member, msg2) => member.has(obj) || __typeError("Cannot " + msg2);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e2) {
        reject(e2);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e2) {
        reject(e2);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// ../../node_modules/.pnpm/@babel+runtime@7.27.0/node_modules/@babel/runtime/helpers/setPrototypeOf.js
var require_setPrototypeOf = __commonJS({
  "../../node_modules/.pnpm/@babel+runtime@7.27.0/node_modules/@babel/runtime/helpers/setPrototypeOf.js"(exports, module) {
    function _setPrototypeOf(t2, e2) {
      return module.exports = _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t3, e3) {
        return t3.__proto__ = e3, t3;
      }, module.exports.__esModule = true, module.exports["default"] = module.exports, _setPrototypeOf(t2, e2);
    }
    module.exports = _setPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// ../../node_modules/.pnpm/@babel+runtime@7.27.0/node_modules/@babel/runtime/helpers/inheritsLoose.js
var require_inheritsLoose = __commonJS({
  "../../node_modules/.pnpm/@babel+runtime@7.27.0/node_modules/@babel/runtime/helpers/inheritsLoose.js"(exports, module) {
    var setPrototypeOf = require_setPrototypeOf();
    function _inheritsLoose(t2, o2) {
      t2.prototype = Object.create(o2.prototype), t2.prototype.constructor = t2, setPrototypeOf(t2, o2);
    }
    module.exports = _inheritsLoose, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// ../../node_modules/.pnpm/@babel+runtime@7.27.0/node_modules/@babel/runtime/helpers/extends.js
var require_extends = __commonJS({
  "../../node_modules/.pnpm/@babel+runtime@7.27.0/node_modules/@babel/runtime/helpers/extends.js"(exports, module) {
    function _extends8() {
      return module.exports = _extends8 = Object.assign ? Object.assign.bind() : function(n2) {
        for (var e2 = 1; e2 < arguments.length; e2++) {
          var t2 = arguments[e2];
          for (var r2 in t2) ({}).hasOwnProperty.call(t2, r2) && (n2[r2] = t2[r2]);
        }
        return n2;
      }, module.exports.__esModule = true, module.exports["default"] = module.exports, _extends8.apply(null, arguments);
    }
    module.exports = _extends8, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// ../../node_modules/.pnpm/@babel+runtime@7.27.0/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js
var require_objectWithoutPropertiesLoose = __commonJS({
  "../../node_modules/.pnpm/@babel+runtime@7.27.0/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"(exports, module) {
    function _objectWithoutPropertiesLoose6(r2, e2) {
      if (null == r2) return {};
      var t2 = {};
      for (var n2 in r2) if ({}.hasOwnProperty.call(r2, n2)) {
        if (-1 !== e2.indexOf(n2)) continue;
        t2[n2] = r2[n2];
      }
      return t2;
    }
    module.exports = _objectWithoutPropertiesLoose6, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// ../../node_modules/.pnpm/hsluv@0.0.3/node_modules/hsluv/hsluv.js
var require_hsluv = __commonJS({
  "../../node_modules/.pnpm/hsluv@0.0.3/node_modules/hsluv/hsluv.js"(exports, module) {
    var hsluv = hsluv || {};
    hsluv.Geometry = function() {
    };
    hsluv.Geometry.intersectLineLine = function(a2, b) {
      var x = (a2.intercept - b.intercept) / (b.slope - a2.slope);
      var y = a2.slope * x + a2.intercept;
      return { x, y };
    };
    hsluv.Geometry.distanceFromOrigin = function(point) {
      return Math.sqrt(Math.pow(point.x, 2) + Math.pow(point.y, 2));
    };
    hsluv.Geometry.distanceLineFromOrigin = function(line) {
      return Math.abs(line.intercept) / Math.sqrt(Math.pow(line.slope, 2) + 1);
    };
    hsluv.Geometry.perpendicularThroughPoint = function(line, point) {
      var slope = -1 / line.slope;
      var intercept = point.y - slope * point.x;
      return { slope, intercept };
    };
    hsluv.Geometry.angleFromOrigin = function(point) {
      return Math.atan2(point.y, point.x);
    };
    hsluv.Geometry.normalizeAngle = function(angle) {
      var m = 2 * Math.PI;
      return (angle % m + m) % m;
    };
    hsluv.Geometry.lengthOfRayUntilIntersect = function(theta, line) {
      return line.intercept / (Math.sin(theta) - line.slope * Math.cos(theta));
    };
    hsluv.Hsluv = function() {
    };
    hsluv.Hsluv.getBounds = function(L) {
      var result = [];
      var sub1 = Math.pow(L + 16, 3) / 1560896;
      var sub2 = sub1 > hsluv.Hsluv.epsilon ? sub1 : L / hsluv.Hsluv.kappa;
      var _g = 0;
      while (_g < 3) {
        var c = _g++;
        var m1 = hsluv.Hsluv.m[c][0];
        var m2 = hsluv.Hsluv.m[c][1];
        var m3 = hsluv.Hsluv.m[c][2];
        var _g1 = 0;
        while (_g1 < 2) {
          var t2 = _g1++;
          var top1 = (284517 * m1 - 94839 * m3) * sub2;
          var top2 = (838422 * m3 + 769860 * m2 + 731718 * m1) * L * sub2 - 769860 * t2 * L;
          var bottom = (632260 * m3 - 126452 * m2) * sub2 + 126452 * t2;
          result.push({ slope: top1 / bottom, intercept: top2 / bottom });
        }
      }
      return result;
    };
    hsluv.Hsluv.maxSafeChromaForL = function(L) {
      var bounds = hsluv.Hsluv.getBounds(L);
      var min = Infinity;
      var _g = 0;
      while (_g < bounds.length) {
        var bound = bounds[_g];
        ++_g;
        var length = hsluv.Geometry.distanceLineFromOrigin(bound);
        min = Math.min(min, length);
      }
      return min;
    };
    hsluv.Hsluv.maxChromaForLH = function(L, H) {
      var hrad = H / 360 * Math.PI * 2;
      var bounds = hsluv.Hsluv.getBounds(L);
      var min = Infinity;
      var _g = 0;
      while (_g < bounds.length) {
        var bound = bounds[_g];
        ++_g;
        var length = hsluv.Geometry.lengthOfRayUntilIntersect(hrad, bound);
        if (length >= 0) {
          min = Math.min(min, length);
        }
      }
      return min;
    };
    hsluv.Hsluv.dotProduct = function(a2, b) {
      var sum = 0;
      var _g1 = 0;
      var _g = a2.length;
      while (_g1 < _g) {
        var i2 = _g1++;
        sum += a2[i2] * b[i2];
      }
      return sum;
    };
    hsluv.Hsluv.fromLinear = function(c) {
      if (c <= 31308e-7) {
        return 12.92 * c;
      } else {
        return 1.055 * Math.pow(c, 0.4166666666666667) - 0.055;
      }
    };
    hsluv.Hsluv.toLinear = function(c) {
      if (c > 0.04045) {
        return Math.pow((c + 0.055) / 1.055, 2.4);
      } else {
        return c / 12.92;
      }
    };
    hsluv.Hsluv.xyzToRgb = function(tuple) {
      return [hsluv.Hsluv.fromLinear(hsluv.Hsluv.dotProduct(hsluv.Hsluv.m[0], tuple)), hsluv.Hsluv.fromLinear(hsluv.Hsluv.dotProduct(hsluv.Hsluv.m[1], tuple)), hsluv.Hsluv.fromLinear(hsluv.Hsluv.dotProduct(hsluv.Hsluv.m[2], tuple))];
    };
    hsluv.Hsluv.rgbToXyz = function(tuple) {
      var rgbl = [hsluv.Hsluv.toLinear(tuple[0]), hsluv.Hsluv.toLinear(tuple[1]), hsluv.Hsluv.toLinear(tuple[2])];
      return [hsluv.Hsluv.dotProduct(hsluv.Hsluv.minv[0], rgbl), hsluv.Hsluv.dotProduct(hsluv.Hsluv.minv[1], rgbl), hsluv.Hsluv.dotProduct(hsluv.Hsluv.minv[2], rgbl)];
    };
    hsluv.Hsluv.yToL = function(Y) {
      if (Y <= hsluv.Hsluv.epsilon) {
        return Y / hsluv.Hsluv.refY * hsluv.Hsluv.kappa;
      } else {
        return 116 * Math.pow(Y / hsluv.Hsluv.refY, 0.3333333333333333) - 16;
      }
    };
    hsluv.Hsluv.lToY = function(L) {
      if (L <= 8) {
        return hsluv.Hsluv.refY * L / hsluv.Hsluv.kappa;
      } else {
        return hsluv.Hsluv.refY * Math.pow((L + 16) / 116, 3);
      }
    };
    hsluv.Hsluv.xyzToLuv = function(tuple) {
      var X = tuple[0];
      var Y = tuple[1];
      var Z = tuple[2];
      var divider = X + 15 * Y + 3 * Z;
      var varU = 4 * X;
      var varV = 9 * Y;
      if (divider != 0) {
        varU /= divider;
        varV /= divider;
      } else {
        varU = NaN;
        varV = NaN;
      }
      var L = hsluv.Hsluv.yToL(Y);
      if (L == 0) {
        return [0, 0, 0];
      }
      var U = 13 * L * (varU - hsluv.Hsluv.refU);
      var V = 13 * L * (varV - hsluv.Hsluv.refV);
      return [L, U, V];
    };
    hsluv.Hsluv.luvToXyz = function(tuple) {
      var L = tuple[0];
      var U = tuple[1];
      var V = tuple[2];
      if (L == 0) {
        return [0, 0, 0];
      }
      var varU = U / (13 * L) + hsluv.Hsluv.refU;
      var varV = V / (13 * L) + hsluv.Hsluv.refV;
      var Y = hsluv.Hsluv.lToY(L);
      var X = 0 - 9 * Y * varU / ((varU - 4) * varV - varU * varV);
      var Z = (9 * Y - 15 * varV * Y - varV * X) / (3 * varV);
      return [X, Y, Z];
    };
    hsluv.Hsluv.luvToLch = function(tuple) {
      var L = tuple[0];
      var U = tuple[1];
      var V = tuple[2];
      var C = Math.sqrt(U * U + V * V);
      var H;
      if (C < 1e-8) {
        H = 0;
      } else {
        var Hrad = Math.atan2(V, U);
        H = Hrad * 180 / Math.PI;
        if (H < 0) {
          H = 360 + H;
        }
      }
      return [L, C, H];
    };
    hsluv.Hsluv.lchToLuv = function(tuple) {
      var L = tuple[0];
      var C = tuple[1];
      var H = tuple[2];
      var Hrad = H / 360 * 2 * Math.PI;
      var U = Math.cos(Hrad) * C;
      var V = Math.sin(Hrad) * C;
      return [L, U, V];
    };
    hsluv.Hsluv.hsluvToLch = function(tuple) {
      var H = tuple[0];
      var S = tuple[1];
      var L = tuple[2];
      if (L > 99.9999999) {
        return [100, 0, H];
      }
      if (L < 1e-8) {
        return [0, 0, H];
      }
      var max = hsluv.Hsluv.maxChromaForLH(L, H);
      var C = max / 100 * S;
      return [L, C, H];
    };
    hsluv.Hsluv.lchToHsluv = function(tuple) {
      var L = tuple[0];
      var C = tuple[1];
      var H = tuple[2];
      if (L > 99.9999999) {
        return [H, 0, 100];
      }
      if (L < 1e-8) {
        return [H, 0, 0];
      }
      var max = hsluv.Hsluv.maxChromaForLH(L, H);
      var S = C / max * 100;
      return [H, S, L];
    };
    hsluv.Hsluv.hpluvToLch = function(tuple) {
      var H = tuple[0];
      var S = tuple[1];
      var L = tuple[2];
      if (L > 99.9999999) {
        return [100, 0, H];
      }
      if (L < 1e-8) {
        return [0, 0, H];
      }
      var max = hsluv.Hsluv.maxSafeChromaForL(L);
      var C = max / 100 * S;
      return [L, C, H];
    };
    hsluv.Hsluv.lchToHpluv = function(tuple) {
      var L = tuple[0];
      var C = tuple[1];
      var H = tuple[2];
      if (L > 99.9999999) {
        return [H, 0, 100];
      }
      if (L < 1e-8) {
        return [H, 0, 0];
      }
      var max = hsluv.Hsluv.maxSafeChromaForL(L);
      var S = C / max * 100;
      return [H, S, L];
    };
    hsluv.Hsluv.rgbToHex = function(tuple) {
      var h = "#";
      var _g = 0;
      while (_g < 3) {
        var i2 = _g++;
        var chan = tuple[i2];
        var c = Math.round(chan * 255);
        var digit2 = c % 16;
        var digit1 = (c - digit2) / 16 | 0;
        h += hsluv.Hsluv.hexChars.charAt(digit1) + hsluv.Hsluv.hexChars.charAt(digit2);
      }
      return h;
    };
    hsluv.Hsluv.hexToRgb = function(hex) {
      hex = hex.toLowerCase();
      var ret = [];
      var _g = 0;
      while (_g < 3) {
        var i2 = _g++;
        var digit1 = hsluv.Hsluv.hexChars.indexOf(hex.charAt(i2 * 2 + 1));
        var digit2 = hsluv.Hsluv.hexChars.indexOf(hex.charAt(i2 * 2 + 2));
        var n2 = digit1 * 16 + digit2;
        ret.push(n2 / 255);
      }
      return ret;
    };
    hsluv.Hsluv.lchToRgb = function(tuple) {
      return hsluv.Hsluv.xyzToRgb(hsluv.Hsluv.luvToXyz(hsluv.Hsluv.lchToLuv(tuple)));
    };
    hsluv.Hsluv.rgbToLch = function(tuple) {
      return hsluv.Hsluv.luvToLch(hsluv.Hsluv.xyzToLuv(hsluv.Hsluv.rgbToXyz(tuple)));
    };
    hsluv.Hsluv.hsluvToRgb = function(tuple) {
      return hsluv.Hsluv.lchToRgb(hsluv.Hsluv.hsluvToLch(tuple));
    };
    hsluv.Hsluv.rgbToHsluv = function(tuple) {
      return hsluv.Hsluv.lchToHsluv(hsluv.Hsluv.rgbToLch(tuple));
    };
    hsluv.Hsluv.hpluvToRgb = function(tuple) {
      return hsluv.Hsluv.lchToRgb(hsluv.Hsluv.hpluvToLch(tuple));
    };
    hsluv.Hsluv.rgbToHpluv = function(tuple) {
      return hsluv.Hsluv.lchToHpluv(hsluv.Hsluv.rgbToLch(tuple));
    };
    hsluv.Hsluv.hsluvToHex = function(tuple) {
      return hsluv.Hsluv.rgbToHex(hsluv.Hsluv.hsluvToRgb(tuple));
    };
    hsluv.Hsluv.hpluvToHex = function(tuple) {
      return hsluv.Hsluv.rgbToHex(hsluv.Hsluv.hpluvToRgb(tuple));
    };
    hsluv.Hsluv.hexToHsluv = function(s2) {
      return hsluv.Hsluv.rgbToHsluv(hsluv.Hsluv.hexToRgb(s2));
    };
    hsluv.Hsluv.hexToHpluv = function(s2) {
      return hsluv.Hsluv.rgbToHpluv(hsluv.Hsluv.hexToRgb(s2));
    };
    hsluv.Hsluv.m = [[3.240969941904521, -1.537383177570093, -0.498610760293], [-0.96924363628087, 1.87596750150772, 0.041555057407175], [0.055630079696993, -0.20397695888897, 1.056971514242878]];
    hsluv.Hsluv.minv = [[0.41239079926595, 0.35758433938387, 0.18048078840183], [0.21263900587151, 0.71516867876775, 0.072192315360733], [0.019330818715591, 0.11919477979462, 0.95053215224966]];
    hsluv.Hsluv.refY = 1;
    hsluv.Hsluv.refU = 0.19783000664283;
    hsluv.Hsluv.refV = 0.46831999493879;
    hsluv.Hsluv.kappa = 903.2962962;
    hsluv.Hsluv.epsilon = 0.0088564516;
    hsluv.Hsluv.hexChars = "0123456789abcdef";
    var root = {
      "hsluvToRgb": hsluv.Hsluv.hsluvToRgb,
      "rgbToHsluv": hsluv.Hsluv.rgbToHsluv,
      "hpluvToRgb": hsluv.Hsluv.hpluvToRgb,
      "rgbToHpluv": hsluv.Hsluv.rgbToHpluv,
      "hsluvToHex": hsluv.Hsluv.hsluvToHex,
      "hexToHsluv": hsluv.Hsluv.hexToHsluv,
      "hpluvToHex": hsluv.Hsluv.hpluvToHex,
      "hexToHpluv": hsluv.Hsluv.hexToHpluv,
      "lchToHpluv": hsluv.Hsluv.lchToHpluv,
      "hpluvToLch": hsluv.Hsluv.hpluvToLch,
      "lchToHsluv": hsluv.Hsluv.lchToHsluv,
      "hsluvToLch": hsluv.Hsluv.hsluvToLch,
      "lchToLuv": hsluv.Hsluv.lchToLuv,
      "luvToLch": hsluv.Hsluv.luvToLch,
      "xyzToLuv": hsluv.Hsluv.xyzToLuv,
      "luvToXyz": hsluv.Hsluv.luvToXyz,
      "xyzToRgb": hsluv.Hsluv.xyzToRgb,
      "rgbToXyz": hsluv.Hsluv.rgbToXyz,
      "lchToRgb": hsluv.Hsluv.lchToRgb,
      "rgbToLch": hsluv.Hsluv.rgbToLch
    };
    module.exports = root;
  }
});

// ../../node_modules/.pnpm/fontfaceobserver@2.3.0/node_modules/fontfaceobserver/fontfaceobserver.standalone.js
var require_fontfaceobserver_standalone = __commonJS({
  "../../node_modules/.pnpm/fontfaceobserver@2.3.0/node_modules/fontfaceobserver/fontfaceobserver.standalone.js"(exports, module) {
    (function() {
      function p2(a2, c) {
        document.addEventListener ? a2.addEventListener("scroll", c, false) : a2.attachEvent("scroll", c);
      }
      function u2(a2) {
        document.body ? a2() : document.addEventListener ? document.addEventListener("DOMContentLoaded", function b() {
          document.removeEventListener("DOMContentLoaded", b);
          a2();
        }) : document.attachEvent("onreadystatechange", function g() {
          if ("interactive" == document.readyState || "complete" == document.readyState) document.detachEvent("onreadystatechange", g), a2();
        });
      }
      ;
      function w(a2) {
        this.g = document.createElement("div");
        this.g.setAttribute("aria-hidden", "true");
        this.g.appendChild(document.createTextNode(a2));
        this.h = document.createElement("span");
        this.i = document.createElement("span");
        this.m = document.createElement("span");
        this.j = document.createElement("span");
        this.l = -1;
        this.h.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";
        this.i.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";
        this.j.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";
        this.m.style.cssText = "display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;";
        this.h.appendChild(this.m);
        this.i.appendChild(this.j);
        this.g.appendChild(this.h);
        this.g.appendChild(this.i);
      }
      function x(a2, c) {
        a2.g.style.cssText = "max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:" + c + ";";
      }
      function B(a2) {
        var c = a2.g.offsetWidth, b = c + 100;
        a2.j.style.width = b + "px";
        a2.i.scrollLeft = b;
        a2.h.scrollLeft = a2.h.scrollWidth + 100;
        return a2.l !== c ? (a2.l = c, true) : false;
      }
      function C(a2, c) {
        function b() {
          var e2 = g;
          B(e2) && null !== e2.g.parentNode && c(e2.l);
        }
        var g = a2;
        p2(a2.h, b);
        p2(a2.i, b);
        B(a2);
      }
      ;
      function D(a2, c, b) {
        c = c || {};
        b = b || window;
        this.family = a2;
        this.style = c.style || "normal";
        this.weight = c.weight || "normal";
        this.stretch = c.stretch || "normal";
        this.context = b;
      }
      var E = null, F = null, G = null, H = null;
      function I(a2) {
        null === F && (M(a2) && /Apple/.test(window.navigator.vendor) ? (a2 = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(window.navigator.userAgent), F = !!a2 && 603 > parseInt(a2[1], 10)) : F = false);
        return F;
      }
      function M(a2) {
        null === H && (H = !!a2.document.fonts);
        return H;
      }
      function N(a2, c) {
        var b = a2.style, g = a2.weight;
        if (null === G) {
          var e2 = document.createElement("div");
          try {
            e2.style.font = "condensed 100px sans-serif";
          } catch (q) {
          }
          G = "" !== e2.style.font;
        }
        return [b, g, G ? a2.stretch : "", "100px", c].join(" ");
      }
      D.prototype.load = function(a2, c) {
        var b = this, g = a2 || "BESbswy", e2 = 0, q = c || 3e3, J = (/* @__PURE__ */ new Date()).getTime();
        return new Promise(function(K, L) {
          if (M(b.context) && !I(b.context)) {
            var O = new Promise(function(r2, t2) {
              function h() {
                (/* @__PURE__ */ new Date()).getTime() - J >= q ? t2(Error("" + q + "ms timeout exceeded")) : b.context.document.fonts.load(N(b, '"' + b.family + '"'), g).then(function(n2) {
                  1 <= n2.length ? r2() : setTimeout(h, 25);
                }, t2);
              }
              h();
            }), P = new Promise(function(r2, t2) {
              e2 = setTimeout(function() {
                t2(Error("" + q + "ms timeout exceeded"));
              }, q);
            });
            Promise.race([P, O]).then(function() {
              clearTimeout(e2);
              K(b);
            }, L);
          } else u2(function() {
            function r2() {
              var d;
              if (d = -1 != k && -1 != l || -1 != k && -1 != m || -1 != l && -1 != m) (d = k != l && k != m && l != m) || (null === E && (d = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent), E = !!d && (536 > parseInt(d[1], 10) || 536 === parseInt(d[1], 10) && 11 >= parseInt(d[2], 10))), d = E && (k == y && l == y && m == y || k == z && l == z && m == z || k == A && l == A && m == A)), d = !d;
              d && (null !== f.parentNode && f.parentNode.removeChild(f), clearTimeout(e2), K(b));
            }
            function t2() {
              if ((/* @__PURE__ */ new Date()).getTime() - J >= q) null !== f.parentNode && f.parentNode.removeChild(f), L(Error("" + q + "ms timeout exceeded"));
              else {
                var d = b.context.document.hidden;
                if (true === d || void 0 === d) k = h.g.offsetWidth, l = n2.g.offsetWidth, m = v.g.offsetWidth, r2();
                e2 = setTimeout(t2, 50);
              }
            }
            var h = new w(g), n2 = new w(g), v = new w(g), k = -1, l = -1, m = -1, y = -1, z = -1, A = -1, f = document.createElement("div");
            f.dir = "ltr";
            x(h, N(b, "sans-serif"));
            x(n2, N(b, "serif"));
            x(v, N(b, "monospace"));
            f.appendChild(h.g);
            f.appendChild(n2.g);
            f.appendChild(v.g);
            b.context.document.body.appendChild(f);
            y = h.g.offsetWidth;
            z = n2.g.offsetWidth;
            A = v.g.offsetWidth;
            t2();
            C(h, function(d) {
              k = d;
              r2();
            });
            x(h, N(b, '"' + b.family + '",sans-serif'));
            C(n2, function(d) {
              l = d;
              r2();
            });
            x(n2, N(b, '"' + b.family + '",serif'));
            C(v, function(d) {
              m = d;
              r2();
            });
            x(v, N(b, '"' + b.family + '",monospace'));
          });
        });
      };
      "object" === typeof module ? module.exports = D : (window.FontFaceObserver = D, window.FontFaceObserver.prototype.load = D.prototype.load);
    })();
  }
});

// ../../node_modules/.pnpm/zustand@5.0.1_@types+react@18.2.73_immer@9.0.21_react@18.3.1_use-sync-external-store@1.5.0_react@18.3.1_/node_modules/zustand/esm/vanilla.mjs
var createStoreImpl = (createState) => {
  let state;
  const listeners = /* @__PURE__ */ new Set();
  const setState = (partial, replace) => {
    const nextState = typeof partial === "function" ? partial(state) : partial;
    if (!Object.is(nextState, state)) {
      const previousState = state;
      state = (replace != null ? replace : typeof nextState !== "object" || nextState === null) ? nextState : Object.assign({}, state, nextState);
      listeners.forEach((listener) => listener(state, previousState));
    }
  };
  const getState = () => state;
  const getInitialState = () => initialState;
  const subscribe = (listener) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  };
  const api = { setState, getState, getInitialState, subscribe };
  const initialState = state = createState(setState, getState, api);
  return api;
};
var createStore = (createState) => createState ? createStoreImpl(createState) : createStoreImpl;

// ../../node_modules/.pnpm/zustand@5.0.1_@types+react@18.2.73_immer@9.0.21_react@18.3.1_use-sync-external-store@1.5.0_react@18.3.1_/node_modules/zustand/esm/react.mjs
import React from "react";
var identity = (arg) => arg;
function useStore(api, selector = identity) {
  const slice = React.useSyncExternalStore(
    api.subscribe,
    () => selector(api.getState()),
    () => selector(api.getInitialState())
  );
  React.useDebugValue(slice);
  return slice;
}
var createImpl = (createState) => {
  const api = createStore(createState);
  const useBoundStore = (selector) => useStore(api, selector);
  Object.assign(useBoundStore, api);
  return useBoundStore;
};
var create = (createState) => createState ? createImpl(createState) : createImpl;

// ../../node_modules/.pnpm/zustand@5.0.1_@types+react@18.2.73_immer@9.0.21_react@18.3.1_use-sync-external-store@1.5.0_react@18.3.1_/node_modules/zustand/esm/middleware.mjs
var combine = (initialState, create2) => (...a2) => Object.assign({}, initialState, create2(...a2));

// src/store.ts
var useUIStore = create(
  combine({ activePreset: 0, mode: "full", loadingPercentage: 0 }, (set) => ({
    setActivePreset: (by) => set((state) => ({ activePreset: by })),
    setMode: (data) => set((state) => __spreadProps(__spreadValues({}, state), { mode: data })),
    setLoadingPercentage: (data) => set((state) => __spreadProps(__spreadValues({}, state), { loadingPercentage: data }))
  }))
);

// src/utils.ts
import { useEffect } from "react";
var cx = (...classes) => classes.filter((a2) => !!a2).join(" ");
function useOnClickOutside(ref, handler) {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}

// src/Button.tsx
import { jsx } from "react/jsx-runtime";
var ButtonKind = {
  primary: "bg-primary text-white",
  secondary: "ring-1 ring-primary text-primary"
};
var Button = (_a) => {
  var _b = _a, {
    kind = "primary",
    children
  } = _b, rest = __objRest(_b, [
    "kind",
    "children"
  ]);
  return /* @__PURE__ */ jsx(
    "button",
    __spreadProps(__spreadValues({
      className: cx("h-button font-medium rounded w-full", ButtonKind[kind])
    }, rest), {
      children
    })
  );
};

// src/TextAnimation.tsx
import { useState as useState2, useEffect as useEffect3 } from "react";
import { motion, useAnimation } from "framer-motion";

// ../../node_modules/.pnpm/react-intersection-observer@9.16.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-intersection-observer/dist/index.mjs
import * as React2 from "react";
import * as React22 from "react";
var observerMap = /* @__PURE__ */ new Map();
var RootIds = /* @__PURE__ */ new WeakMap();
var rootId = 0;
var unsupportedValue = void 0;
function getRootId(root) {
  if (!root) return "0";
  if (RootIds.has(root)) return RootIds.get(root);
  rootId += 1;
  RootIds.set(root, rootId.toString());
  return RootIds.get(root);
}
function optionsToId(options) {
  return Object.keys(options).sort().filter(
    (key3) => options[key3] !== void 0
  ).map((key3) => {
    return `${key3}_${key3 === "root" ? getRootId(options.root) : options[key3]}`;
  }).toString();
}
function createObserver(options) {
  const id = optionsToId(options);
  let instance = observerMap.get(id);
  if (!instance) {
    const elements = /* @__PURE__ */ new Map();
    let thresholds;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        var _a;
        const inView = entry.isIntersecting && thresholds.some((threshold) => entry.intersectionRatio >= threshold);
        if (options.trackVisibility && typeof entry.isVisible === "undefined") {
          entry.isVisible = inView;
        }
        (_a = elements.get(entry.target)) == null ? void 0 : _a.forEach((callback) => {
          callback(inView, entry);
        });
      });
    }, options);
    thresholds = observer.thresholds || (Array.isArray(options.threshold) ? options.threshold : [options.threshold || 0]);
    instance = {
      id,
      observer,
      elements
    };
    observerMap.set(id, instance);
  }
  return instance;
}
function observe(element, callback, options = {}, fallbackInView = unsupportedValue) {
  if (typeof window.IntersectionObserver === "undefined" && fallbackInView !== void 0) {
    const bounds = element.getBoundingClientRect();
    callback(fallbackInView, {
      isIntersecting: fallbackInView,
      target: element,
      intersectionRatio: typeof options.threshold === "number" ? options.threshold : 0,
      time: 0,
      boundingClientRect: bounds,
      intersectionRect: bounds,
      rootBounds: bounds
    });
    return () => {
    };
  }
  const { id, observer, elements } = createObserver(options);
  const callbacks2 = elements.get(element) || [];
  if (!elements.has(element)) {
    elements.set(element, callbacks2);
  }
  callbacks2.push(callback);
  observer.observe(element);
  return function unobserve() {
    callbacks2.splice(callbacks2.indexOf(callback), 1);
    if (callbacks2.length === 0) {
      elements.delete(element);
      observer.unobserve(element);
    }
    if (elements.size === 0) {
      observer.disconnect();
      observerMap.delete(id);
    }
  };
}
function useInView({
  threshold,
  delay,
  trackVisibility,
  rootMargin,
  root,
  triggerOnce,
  skip,
  initialInView,
  fallbackInView,
  onChange
} = {}) {
  var _a;
  const [ref, setRef] = React22.useState(null);
  const callback = React22.useRef(onChange);
  const [state, setState] = React22.useState({
    inView: !!initialInView,
    entry: void 0
  });
  callback.current = onChange;
  React22.useEffect(
    () => {
      if (skip || !ref) return;
      let unobserve;
      unobserve = observe(
        ref,
        (inView, entry) => {
          setState({
            inView,
            entry
          });
          if (callback.current) callback.current(inView, entry);
          if (entry.isIntersecting && triggerOnce && unobserve) {
            unobserve();
            unobserve = void 0;
          }
        },
        {
          root,
          rootMargin,
          threshold,
          // @ts-ignore
          trackVisibility,
          // @ts-ignore
          delay
        },
        fallbackInView
      );
      return () => {
        if (unobserve) {
          unobserve();
        }
      };
    },
    // We break the rule here, because we aren't including the actual `threshold` variable
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      // If the threshold is an array, convert it to a string, so it won't change between renders.
      Array.isArray(threshold) ? threshold.toString() : threshold,
      ref,
      root,
      rootMargin,
      triggerOnce,
      skip,
      trackVisibility,
      fallbackInView,
      delay
    ]
  );
  const entryTarget = (_a = state.entry) == null ? void 0 : _a.target;
  const previousEntryTarget = React22.useRef(void 0);
  if (!ref && entryTarget && !triggerOnce && !skip && previousEntryTarget.current !== entryTarget) {
    previousEntryTarget.current = entryTarget;
    setState({
      inView: !!initialInView,
      entry: void 0
    });
  }
  const result = [setRef, state.inView, state.entry];
  result.ref = result[0];
  result.inView = result[1];
  result.entry = result[2];
  return result;
}

// src/TextAnimation.tsx
import { Fragment, jsx as jsx2, jsxs } from "react/jsx-runtime";
function TextAnimation({
  fontSize,
  color: color2,
  content,
  delay,
  width = null,
  yBefore = 20,
  isFramerCanvas = false,
  fontFamily = '"Lora", serif'
}) {
  const letterContainerVariants2 = {
    before: { transition: { staggerChildren: 0.015 } },
    after: { transition: { staggerChildren: 0.015 } }
  };
  const letterVariants2 = {
    before: {
      opacity: 0,
      y: yBefore,
      rotate: -15,
      scale: 0.4,
      transition: {
        type: "spring",
        duration: 0.4,
        damping: 10
      }
    },
    after: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        duration: 0.4,
        damping: 10
        // stiffness: 80,
      }
    }
  };
  const [ref, inView] = useInView();
  const controls = useAnimation();
  const [activePresetInView, setActivePresetInView] = useState2(false);
  useEffect3(() => {
    if (inView) {
      controls.start("after");
    } else {
      controls.start("before");
    }
  }, [controls, inView]);
  setTimeout(() => {
    setActivePresetInView(true);
  }, delay);
  return /* @__PURE__ */ jsx2(Fragment, { children: activePresetInView && /* @__PURE__ */ jsx2(
    motion.div,
    {
      style: {
        position: "relative",
        wordBreak: "break-word",
        width: width === 0 ? "fit-content" : width
      },
      children: /* @__PURE__ */ jsx2(
        motion.h1,
        {
          variants: letterContainerVariants2,
          ref,
          initial: isFramerCanvas ? "after" : "before",
          animate: controls,
          children: /* @__PURE__ */ jsx2(
            "div",
            {
              style: {
                textAlign: "left",
                fontSize,
                color: color2,
                fontWeight: 500,
                fontFamily
              },
              children: content.split(" ").map((word, wordI) => /* @__PURE__ */ jsxs(
                "div",
                {
                  style: {
                    display: "inline-block"
                  },
                  children: [
                    Array.from(word).map((letter, index) => /* @__PURE__ */ jsx2(
                      motion.span,
                      {
                        style: {
                          position: "relative",
                          display: "inline-block",
                          width: "auto"
                        },
                        variants: letterVariants2,
                        children: letter === " " ? "\xA0" : letter
                      },
                      `${index}-${letter}`
                    )),
                    wordI !== content.split(" ").length - 1 ? "\xA0" : null
                  ]
                },
                `word-${word}-${wordI}`
              ))
            }
          )
        }
      )
    }
  ) });
}

// src/TextHover.tsx
import { motion as motion2 } from "framer-motion";
import { jsx as jsx3, jsxs as jsxs2 } from "react/jsx-runtime";
var letterContainerVariants = {
  initial: { transition: { staggerChildren: 0.015 } },
  default: { transition: { staggerChildren: 0.015 } },
  hover: { transition: { staggerChildren: 0.03 } }
};
var letterVariants = {
  initial: {
    opacity: 0,
    y: 60,
    rotate: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 200
    }
  },
  default: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 200
    }
  },
  hover: {
    opacity: 1,
    y: -4,
    rotate: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 200
    }
  }
};
function TextHover({
  fontSize,
  color: color2,
  content,
  delay = 0,
  width = null,
  font = null,
  border = false,
  fontWeight = 400,
  isFramerCanvas = false
}) {
  return /* @__PURE__ */ jsx3(
    motion2.div,
    {
      style: {
        position: "relative",
        wordBreak: "break-word",
        maxWidth: width === 0 ? "fit-content" : width,
        width: "fit-content",
        height: "fit-content",
        fontFamily: '"' + font + '", san-serif',
        display: "flex",
        flexDirection: "column",
        color: color2,
        whiteSpace: "nowrap",
        userSelect: "none"
      },
      children: /* @__PURE__ */ jsxs2(
        motion2.h1,
        {
          variants: letterContainerVariants,
          initial: isFramerCanvas ? "default" : "initial",
          whileInView: "default",
          whileHover: "hover",
          style: {
            fontWeight,
            margin: 0,
            width: "fit-content",
            userSelect: "none"
          },
          transition: { delay },
          children: [
            /* @__PURE__ */ jsx3(
              "div",
              {
                style: {
                  textAlign: "left",
                  fontSize,
                  color: color2,
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  height: "fit-content"
                },
                children: content.split(" ").map((word, wordI) => /* @__PURE__ */ jsxs2(
                  "div",
                  {
                    style: {
                      height: "fit-content",
                      display: "flex",
                      alignItems: "center"
                    },
                    children: [
                      Array.from(word).map((letter, index) => /* @__PURE__ */ jsx3(
                        motion2.div,
                        {
                          style: {
                            width: "fit-content",
                            height: "fit-content",
                            overflow: "hidden",
                            position: "relative",
                            display: "inline-block"
                          },
                          children: /* @__PURE__ */ jsx3(
                            motion2.span,
                            {
                              variants: letterVariants,
                              transition: { duration: 0.5 },
                              style: {
                                position: "relative",
                                display: "inline-block"
                              },
                              children: letter === " " ? "\xA0" : letter
                            }
                          )
                        },
                        `${index}-${letter}`
                      )),
                      wordI !== content.split(" ").length - 1 ? "\xA0" : null
                    ]
                  },
                  `word-${word}-${wordI}`
                ))
              }
            ),
            border && /* @__PURE__ */ jsx3(
              motion2.div,
              {
                style: { background: color2, height: 2, marginTop: 3 },
                initial: { width: 0 },
                animate: { width: "100%" },
                transition: { delay: delay + 0.5 }
              }
            )
          ]
        }
      )
    }
  );
}

// ../../node_modules/.pnpm/react-slider@2.0.6_react@18.3.1/node_modules/react-slider/dist/es/prod/components/ReactSlider/ReactSlider.mjs
var import_inheritsLoose = __toESM(require_inheritsLoose(), 1);
import t from "react";
function s(e2) {
  return e2 && e2.stopPropagation && e2.stopPropagation(), e2 && e2.preventDefault && e2.preventDefault(), false;
}
function n(e2) {
  return null == e2 ? [] : Array.isArray(e2) ? e2.slice() : [e2];
}
function i(e2) {
  return null !== e2 && 1 === e2.length ? e2[0] : e2.slice();
}
function o(e2) {
  Object.keys(e2).forEach((t2) => {
    "undefined" != typeof document && document.addEventListener(t2, e2[t2], false);
  });
}
function r(e2, t2) {
  return a(function(e3, t3) {
    let s2 = e3;
    s2 <= t3.min && (s2 = t3.min);
    s2 >= t3.max && (s2 = t3.max);
    return s2;
  }(e2, t2), t2);
}
function a(e2, t2) {
  const s2 = (e2 - t2.min) % t2.step;
  let n2 = e2 - s2;
  return 2 * Math.abs(s2) >= t2.step && (n2 += s2 > 0 ? t2.step : -t2.step), parseFloat(n2.toFixed(5));
}
var p = function(p2) {
  function u2(e2) {
    var a2;
    (a2 = p2.call(this, e2) || this).onKeyUp = () => {
      a2.onEnd();
    }, a2.onMouseUp = () => {
      a2.onEnd(a2.getMouseEventMap());
    }, a2.onTouchEnd = (e3) => {
      e3.preventDefault(), a2.onEnd(a2.getTouchEventMap());
    }, a2.onBlur = () => {
      a2.setState({ index: -1 }, a2.onEnd(a2.getKeyDownEventMap()));
    }, a2.onMouseMove = (e3) => {
      a2.setState({ pending: true });
      const t2 = a2.getMousePosition(e3), s2 = a2.getDiffPosition(t2[0]), n2 = a2.getValueFromPosition(s2);
      a2.move(n2);
    }, a2.onTouchMove = (e3) => {
      if (e3.touches.length > 1) return;
      a2.setState({ pending: true });
      const t2 = a2.getTouchPosition(e3);
      if (void 0 === a2.isScrolling) {
        const e4 = t2[0] - a2.startPosition[0], s3 = t2[1] - a2.startPosition[1];
        a2.isScrolling = Math.abs(s3) > Math.abs(e4);
      }
      if (a2.isScrolling) return void a2.setState({ index: -1 });
      const s2 = a2.getDiffPosition(t2[0]), n2 = a2.getValueFromPosition(s2);
      a2.move(n2);
    }, a2.onKeyDown = (e3) => {
      if (!(e3.ctrlKey || e3.shiftKey || e3.altKey || e3.metaKey)) switch (a2.setState({ pending: true }), e3.key) {
        case "ArrowLeft":
        case "ArrowDown":
        case "Left":
        case "Down":
          e3.preventDefault(), a2.moveDownByStep();
          break;
        case "ArrowRight":
        case "ArrowUp":
        case "Right":
        case "Up":
          e3.preventDefault(), a2.moveUpByStep();
          break;
        case "Home":
          e3.preventDefault(), a2.move(a2.props.min);
          break;
        case "End":
          e3.preventDefault(), a2.move(a2.props.max);
          break;
        case "PageDown":
          e3.preventDefault(), a2.moveDownByStep(a2.props.pageFn(a2.props.step));
          break;
        case "PageUp":
          e3.preventDefault(), a2.moveUpByStep(a2.props.pageFn(a2.props.step));
      }
    }, a2.onSliderMouseDown = (e3) => {
      if (!a2.props.disabled && 2 !== e3.button) {
        if (a2.setState({ pending: true }), !a2.props.snapDragDisabled) {
          const t2 = a2.getMousePosition(e3);
          a2.forceValueFromPosition(t2[0], (e4) => {
            a2.start(e4, t2[0]), o(a2.getMouseEventMap());
          });
        }
        s(e3);
      }
    }, a2.onSliderClick = (e3) => {
      if (!a2.props.disabled && a2.props.onSliderClick && !a2.hasMoved) {
        const t2 = a2.getMousePosition(e3), s2 = r(a2.calcValue(a2.calcOffsetFromPosition(t2[0])), a2.props);
        a2.props.onSliderClick(s2);
      }
    }, a2.createOnKeyDown = (e3) => (t2) => {
      a2.props.disabled || (a2.start(e3), o(a2.getKeyDownEventMap()), s(t2));
    }, a2.createOnMouseDown = (e3) => (t2) => {
      if (a2.props.disabled || 2 === t2.button) return;
      a2.setState({ pending: true });
      const n2 = a2.getMousePosition(t2);
      a2.start(e3, n2[0]), o(a2.getMouseEventMap()), s(t2);
    }, a2.createOnTouchStart = (e3) => (t2) => {
      if (a2.props.disabled || t2.touches.length > 1) return;
      a2.setState({ pending: true });
      const s2 = a2.getTouchPosition(t2);
      a2.startPosition = s2, a2.isScrolling = void 0, a2.start(e3, s2[0]), o(a2.getTouchEventMap()), function(e4) {
        e4.stopPropagation && e4.stopPropagation();
      }(t2);
    }, a2.handleResize = () => {
      const e3 = window.setTimeout(() => {
        a2.pendingResizeTimeouts.shift(), a2.resize();
      }, 0);
      a2.pendingResizeTimeouts.push(e3);
    }, a2.renderThumb = (e3, t2) => {
      const s2 = a2.props.thumbClassName + " " + a2.props.thumbClassName + "-" + t2 + " " + (a2.state.index === t2 ? a2.props.thumbActiveClassName : ""), n2 = { ref: (e4) => {
        a2["thumb" + t2] = e4;
      }, key: a2.props.thumbClassName + "-" + t2, className: s2, style: e3, onMouseDown: a2.createOnMouseDown(t2), onTouchStart: a2.createOnTouchStart(t2), onFocus: a2.createOnKeyDown(t2), tabIndex: 0, role: "slider", "aria-orientation": a2.props.orientation, "aria-valuenow": a2.state.value[t2], "aria-valuemin": a2.props.min, "aria-valuemax": a2.props.max, "aria-label": Array.isArray(a2.props.ariaLabel) ? a2.props.ariaLabel[t2] : a2.props.ariaLabel, "aria-labelledby": Array.isArray(a2.props.ariaLabelledby) ? a2.props.ariaLabelledby[t2] : a2.props.ariaLabelledby, "aria-disabled": a2.props.disabled }, o2 = { index: t2, value: i(a2.state.value), valueNow: a2.state.value[t2] };
      return a2.props.ariaValuetext && (n2["aria-valuetext"] = "string" == typeof a2.props.ariaValuetext ? a2.props.ariaValuetext : a2.props.ariaValuetext(o2)), a2.props.renderThumb(n2, o2);
    }, a2.renderTrack = (e3, t2, s2) => {
      const n2 = { key: a2.props.trackClassName + "-" + e3, className: a2.props.trackClassName + " " + a2.props.trackClassName + "-" + e3, style: a2.buildTrackStyle(t2, a2.state.upperBound - s2) }, o2 = { index: e3, value: i(a2.state.value) };
      return a2.props.renderTrack(n2, o2);
    };
    let u3 = n(e2.value);
    u3.length || (u3 = n(e2.defaultValue)), a2.pendingResizeTimeouts = [];
    const h2 = [];
    for (let t2 = 0; t2 < u3.length; t2 += 1) u3[t2] = r(u3[t2], e2), h2.push(t2);
    return a2.resizeObserver = null, a2.resizeElementRef = t.createRef(), a2.state = { index: -1, upperBound: 0, sliderLength: 0, value: u3, zIndices: h2 }, a2;
  }
  (0, import_inheritsLoose.default)(u2, p2);
  var h = u2.prototype;
  return h.componentDidMount = function() {
    "undefined" != typeof window && (this.resizeObserver = new ResizeObserver(this.handleResize), this.resizeObserver.observe(this.resizeElementRef.current), this.resize());
  }, u2.getDerivedStateFromProps = function(e2, t2) {
    const s2 = n(e2.value);
    return s2.length ? t2.pending ? null : { value: s2.map((t3) => r(t3, e2)) } : null;
  }, h.componentDidUpdate = function() {
    0 === this.state.upperBound && this.resize();
  }, h.componentWillUnmount = function() {
    this.clearPendingResizeTimeouts(), this.resizeObserver && this.resizeObserver.disconnect();
  }, h.onEnd = function(e2) {
    e2 && function(e3) {
      Object.keys(e3).forEach((t2) => {
        "undefined" != typeof document && document.removeEventListener(t2, e3[t2], false);
      });
    }(e2), this.hasMoved && this.fireChangeEvent("onAfterChange"), this.setState({ pending: false }), this.hasMoved = false;
  }, h.getValue = function() {
    return i(this.state.value);
  }, h.getClosestIndex = function(e2) {
    let t2 = Number.MAX_VALUE, s2 = -1;
    const { value: n2 } = this.state, i2 = n2.length;
    for (let o2 = 0; o2 < i2; o2 += 1) {
      const i3 = this.calcOffset(n2[o2]), r2 = Math.abs(e2 - i3);
      r2 < t2 && (t2 = r2, s2 = o2);
    }
    return s2;
  }, h.getMousePosition = function(e2) {
    return [e2["page" + this.axisKey()], e2["page" + this.orthogonalAxisKey()]];
  }, h.getTouchPosition = function(e2) {
    const t2 = e2.touches[0];
    return [t2["page" + this.axisKey()], t2["page" + this.orthogonalAxisKey()]];
  }, h.getKeyDownEventMap = function() {
    return { keydown: this.onKeyDown, keyup: this.onKeyUp, focusout: this.onBlur };
  }, h.getMouseEventMap = function() {
    return { mousemove: this.onMouseMove, mouseup: this.onMouseUp };
  }, h.getTouchEventMap = function() {
    return { touchmove: this.onTouchMove, touchend: this.onTouchEnd };
  }, h.getValueFromPosition = function(e2) {
    const t2 = e2 / (this.state.sliderLength - this.state.thumbSize) * (this.props.max - this.props.min);
    return r(this.state.startValue + t2, this.props);
  }, h.getDiffPosition = function(e2) {
    let t2 = e2 - this.state.startPosition;
    return this.props.invert && (t2 *= -1), t2;
  }, h.resize = function() {
    const { slider: e2, thumb0: t2 } = this;
    if (!e2 || !t2) return;
    const s2 = this.sizeKey(), n2 = e2.getBoundingClientRect(), i2 = e2[s2], o2 = n2[this.posMaxKey()], r2 = n2[this.posMinKey()], a2 = t2.getBoundingClientRect()[s2.replace("client", "").toLowerCase()], p3 = i2 - a2, u3 = Math.abs(o2 - r2);
    this.state.upperBound === p3 && this.state.sliderLength === u3 && this.state.thumbSize === a2 || this.setState({ upperBound: p3, sliderLength: u3, thumbSize: a2 });
  }, h.calcOffset = function(e2) {
    const t2 = this.props.max - this.props.min;
    if (0 === t2) return 0;
    return (e2 - this.props.min) / t2 * this.state.upperBound;
  }, h.calcValue = function(e2) {
    return e2 / this.state.upperBound * (this.props.max - this.props.min) + this.props.min;
  }, h.calcOffsetFromPosition = function(e2) {
    const { slider: t2 } = this, s2 = t2.getBoundingClientRect(), n2 = s2[this.posMaxKey()], i2 = s2[this.posMinKey()];
    let o2 = e2 - (window["page" + this.axisKey() + "Offset"] + (this.props.invert ? n2 : i2));
    return this.props.invert && (o2 = this.state.sliderLength - o2), o2 -= this.state.thumbSize / 2, o2;
  }, h.forceValueFromPosition = function(e2, t2) {
    const s2 = this.calcOffsetFromPosition(e2), n2 = this.getClosestIndex(s2), i2 = r(this.calcValue(s2), this.props), o2 = this.state.value.slice();
    o2[n2] = i2;
    for (let e3 = 0; e3 < o2.length - 1; e3 += 1) if (o2[e3 + 1] - o2[e3] < this.props.minDistance) return;
    this.fireChangeEvent("onBeforeChange"), this.hasMoved = true, this.setState({ value: o2 }, () => {
      t2(n2), this.fireChangeEvent("onChange");
    });
  }, h.clearPendingResizeTimeouts = function() {
    do {
      const e2 = this.pendingResizeTimeouts.shift();
      clearTimeout(e2);
    } while (this.pendingResizeTimeouts.length);
  }, h.start = function(e2, t2) {
    const s2 = this["thumb" + e2];
    s2 && s2.focus();
    const { zIndices: n2 } = this.state;
    n2.splice(n2.indexOf(e2), 1), n2.push(e2), this.setState((s3) => ({ startValue: s3.value[e2], startPosition: void 0 !== t2 ? t2 : s3.startPosition, index: e2, zIndices: n2 }));
  }, h.moveUpByStep = function(e2) {
    void 0 === e2 && (e2 = this.props.step);
    const t2 = this.state.value[this.state.index], s2 = r(this.props.invert && "horizontal" === this.props.orientation ? t2 - e2 : t2 + e2, this.props);
    this.move(Math.min(s2, this.props.max));
  }, h.moveDownByStep = function(e2) {
    void 0 === e2 && (e2 = this.props.step);
    const t2 = this.state.value[this.state.index], s2 = r(this.props.invert && "horizontal" === this.props.orientation ? t2 + e2 : t2 - e2, this.props);
    this.move(Math.max(s2, this.props.min));
  }, h.move = function(e2) {
    const t2 = this.state.value.slice(), { index: s2 } = this.state, { length: n2 } = t2, i2 = t2[s2];
    if (e2 === i2) return;
    this.hasMoved || this.fireChangeEvent("onBeforeChange"), this.hasMoved = true;
    const { pearling: o2, max: r2, min: a2, minDistance: p3 } = this.props;
    if (!o2) {
      if (s2 > 0) {
        const n3 = t2[s2 - 1];
        e2 < n3 + p3 && (e2 = n3 + p3);
      }
      if (s2 < n2 - 1) {
        const n3 = t2[s2 + 1];
        e2 > n3 - p3 && (e2 = n3 - p3);
      }
    }
    t2[s2] = e2, o2 && n2 > 1 && (e2 > i2 ? (this.pushSucceeding(t2, p3, s2), function(e3, t3, s3, n3) {
      for (let i3 = 0; i3 < e3; i3 += 1) {
        const o3 = n3 - i3 * s3;
        t3[e3 - 1 - i3] > o3 && (t3[e3 - 1 - i3] = o3);
      }
    }(n2, t2, p3, r2)) : e2 < i2 && (this.pushPreceding(t2, p3, s2), function(e3, t3, s3, n3) {
      for (let i3 = 0; i3 < e3; i3 += 1) {
        const e4 = n3 + i3 * s3;
        t3[i3] < e4 && (t3[i3] = e4);
      }
    }(n2, t2, p3, a2))), this.setState({ value: t2 }, this.fireChangeEvent.bind(this, "onChange"));
  }, h.pushSucceeding = function(e2, t2, s2) {
    let n2, i2;
    for (n2 = s2, i2 = e2[n2] + t2; null !== e2[n2 + 1] && i2 > e2[n2 + 1]; n2 += 1, i2 = e2[n2] + t2) e2[n2 + 1] = a(i2, this.props);
  }, h.pushPreceding = function(e2, t2, s2) {
    for (let n2 = s2, i2 = e2[n2] - t2; null !== e2[n2 - 1] && i2 < e2[n2 - 1]; n2 -= 1, i2 = e2[n2] - t2) e2[n2 - 1] = a(i2, this.props);
  }, h.axisKey = function() {
    return "vertical" === this.props.orientation ? "Y" : "X";
  }, h.orthogonalAxisKey = function() {
    return "vertical" === this.props.orientation ? "X" : "Y";
  }, h.posMinKey = function() {
    return "vertical" === this.props.orientation ? this.props.invert ? "bottom" : "top" : this.props.invert ? "right" : "left";
  }, h.posMaxKey = function() {
    return "vertical" === this.props.orientation ? this.props.invert ? "top" : "bottom" : this.props.invert ? "left" : "right";
  }, h.sizeKey = function() {
    return "vertical" === this.props.orientation ? "clientHeight" : "clientWidth";
  }, h.fireChangeEvent = function(e2) {
    this.props[e2] && this.props[e2](i(this.state.value), this.state.index);
  }, h.buildThumbStyle = function(e2, t2) {
    const s2 = { position: "absolute", touchAction: "none", willChange: this.state.index >= 0 ? this.posMinKey() : void 0, zIndex: this.state.zIndices.indexOf(t2) + 1 };
    return s2[this.posMinKey()] = e2 + "px", s2;
  }, h.buildTrackStyle = function(e2, t2) {
    const s2 = { position: "absolute", willChange: this.state.index >= 0 ? this.posMinKey() + "," + this.posMaxKey() : void 0 };
    return s2[this.posMinKey()] = e2, s2[this.posMaxKey()] = t2, s2;
  }, h.buildMarkStyle = function(e2) {
    var t2;
    return (t2 = { position: "absolute" })[this.posMinKey()] = e2, t2;
  }, h.renderThumbs = function(e2) {
    const { length: t2 } = e2, s2 = [];
    for (let n3 = 0; n3 < t2; n3 += 1) s2[n3] = this.buildThumbStyle(e2[n3], n3);
    const n2 = [];
    for (let e3 = 0; e3 < t2; e3 += 1) n2[e3] = this.renderThumb(s2[e3], e3);
    return n2;
  }, h.renderTracks = function(e2) {
    const t2 = [], s2 = e2.length - 1;
    t2.push(this.renderTrack(0, 0, e2[0]));
    for (let n2 = 0; n2 < s2; n2 += 1) t2.push(this.renderTrack(n2 + 1, e2[n2], e2[n2 + 1]));
    return t2.push(this.renderTrack(s2 + 1, e2[s2], this.state.upperBound)), t2;
  }, h.renderMarks = function() {
    let { marks: e2 } = this.props;
    const t2 = this.props.max - this.props.min + 1;
    return "boolean" == typeof e2 ? e2 = Array.from({ length: t2 }).map((e3, t3) => t3) : "number" == typeof e2 && (e2 = Array.from({ length: t2 }).map((e3, t3) => t3).filter((t3) => t3 % e2 == 0)), e2.map(parseFloat).sort((e3, t3) => e3 - t3).map((e3) => {
      const t3 = this.calcOffset(e3), s2 = { key: e3, className: this.props.markClassName, style: this.buildMarkStyle(t3) };
      return this.props.renderMark(s2);
    });
  }, h.render = function() {
    const e2 = [], { value: s2 } = this.state, n2 = s2.length;
    for (let t2 = 0; t2 < n2; t2 += 1) e2[t2] = this.calcOffset(s2[t2], t2);
    const i2 = this.props.withTracks ? this.renderTracks(e2) : null, o2 = this.renderThumbs(e2), r2 = this.props.marks ? this.renderMarks() : null;
    return t.createElement("div", { ref: (e3) => {
      this.slider = e3, this.resizeElementRef.current = e3;
    }, style: { position: "relative" }, className: this.props.className + (this.props.disabled ? " disabled" : ""), onMouseDown: this.onSliderMouseDown, onClick: this.onSliderClick }, i2, o2, r2);
  }, u2;
}(t.Component);
p.displayName = "ReactSlider", p.defaultProps = { min: 0, max: 100, step: 1, pageFn: (e2) => 10 * e2, minDistance: 0, defaultValue: 0, orientation: "horizontal", className: "slider", thumbClassName: "thumb", thumbActiveClassName: "active", trackClassName: "track", markClassName: "mark", withTracks: true, pearling: false, disabled: false, snapDragDisabled: false, invert: false, marks: [], renderThumb: (e2) => t.createElement("div", e2), renderTrack: (e2) => t.createElement("div", e2), renderMark: (e2) => t.createElement("span", e2) };
var u = p;

// src/PluginUI/Slider.tsx
import { useState as useState4, useEffect as useEffect4 } from "react";

// src/PluginUI/InputTitle.tsx
import { useState as useState3 } from "react";
import { jsx as jsx4, jsxs as jsxs3 } from "react/jsx-runtime";
function InputTitle({
  title,
  info,
  infoContent,
  condition = false
}) {
  const [isMouseOver, setIsMouseOver] = useState3(false);
  return /* @__PURE__ */ jsxs3(
    "div",
    {
      className: 'w-[105px] flex items-center flex-shrink-0 gap-0.5 select-none font-["Inter"]',
      children: [
        /* @__PURE__ */ jsxs3("p", { className: "font-medium whitespace-nowrap select-none", children: [
          condition === true && /* @__PURE__ */ jsx4("span", { className: "opacity-30", children: "\u21B3 " }),
          title
        ] }),
        info === true && /* @__PURE__ */ jsx4(
          "div",
          {
            className: "flex items-center justify-center relative w-fit h-fit p-0.5 cursor-pointer",
            onMouseOver: () => setIsMouseOver(true),
            onMouseLeave: () => setIsMouseOver(false),
            children: /* @__PURE__ */ jsx4(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                width: "16",
                height: "16",
                fill: "#000000",
                viewBox: "0 0 256 256",
                className: "opacity-30",
                children: /* @__PURE__ */ jsx4("path", { d: "M144,180a16,16,0,1,1-16-16A16,16,0,0,1,144,180Zm92-52A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128ZM128,64c-24.26,0-44,17.94-44,40v4a12,12,0,0,0,24,0v-4c0-8.82,9-16,20-16s20,7.18,20,16-9,16-20,16a12,12,0,0,0-12,12v8a12,12,0,0,0,23.73,2.56C158.31,137.88,172,122.37,172,104,172,81.94,152.26,64,128,64Z" })
              }
            )
          }
        ),
        info === true && /* @__PURE__ */ jsxs3(
          "div",
          {
            className: "w-fit h-fit absolute z-20 min-w-[140px] pointer-events-none duration-300 " + (isMouseOver === true ? "opacity-100 bottom-7" : "opacity-0 bottom-6"),
            children: [
              /* @__PURE__ */ jsx4("div", { className: "absolute w-full h-full bg-[#ff340a] z-0 rounded-md opacity-80", children: /* @__PURE__ */ jsx4("div", { className: "bg-[#ff340a] absolute w-3 h-3 rotate-45 rounded-sm bottom-[-4px] left-[12px]" }) }),
              /* @__PURE__ */ jsx4("p", { className: "relative z-20 p-2 text-white", children: infoContent })
            ]
          }
        )
      ]
    }
  );
}

// src/PluginUI/Slider.tsx
import { jsx as jsx5, jsxs as jsxs4 } from "react/jsx-runtime";
function Slider({
  title,
  defaultValue,
  setValue,
  step,
  min,
  max,
  info,
  infoContent,
  condition
}) {
  const [sharedValue, setSharedValue] = useState4(defaultValue);
  const [isMouseOver, setIsMouseOver] = useState4(false);
  useEffect4(() => {
    setSharedValue(defaultValue);
  }, []);
  useEffect4(() => {
    setValue(sharedValue);
  }, [sharedValue]);
  useEffect4(() => {
    setSharedValue(defaultValue);
  }, [defaultValue]);
  return /* @__PURE__ */ jsxs4(
    "div",
    {
      className: 'flex items-center w-full h-[26px] flex-row gap-2 font-["Inter"]',
      children: [
        /* @__PURE__ */ jsx5(
          InputTitle,
          {
            title,
            info,
            infoContent,
            condition
          }
        ),
        /* @__PURE__ */ jsxs4(
          "div",
          {
            className: "flex items-center w-full h-fit flex-row gap-2",
            onMouseOver: () => setIsMouseOver(true),
            onMouseLeave: () => setIsMouseOver(false),
            children: [
              /* @__PURE__ */ jsx5(
                u,
                {
                  value: Number(sharedValue),
                  step,
                  min,
                  max,
                  onChange: (value, index) => setSharedValue(value),
                  className: "w-full rounded-md bg-[#F2F2F2] cursor-ew-resize overflow-hidden transition-height duration-300 " + (isMouseOver === true ? "h-[26px]" : "h-[5px]"),
                  trackClassName: "h-full duration-300 " + (isMouseOver === true ? "bg-[#ff340a]" : "bg-[#ABABAB]"),
                  renderTrack: (props, state) => /* @__PURE__ */ jsx5(
                    "div",
                    __spreadProps(__spreadValues({}, props), {
                      className: "h-full flex relative " + (isMouseOver === true ? "bg-[#ff340a]" : "bg-[#ABABAB]"),
                      style: __spreadProps(__spreadValues({}, props.style), {
                        opacity: state.index === 1 ? 0 : 1
                      })
                    })
                  ),
                  renderThumb: (props, state) => /* @__PURE__ */ jsx5(
                    "div",
                    __spreadProps(__spreadValues({}, props), {
                      className: "w-[8px] h-full justify-center items-center flex",
                      children: /* @__PURE__ */ jsx5(
                        "div",
                        {
                          className: "absolute w-[2px] bg-[#ffffff] rounded-full pointer-events-none duration-200 h-[30%] " + (isMouseOver === true ? "opacity-100" : "opacity-0")
                        }
                      )
                    })
                  )
                }
              ),
              /* @__PURE__ */ jsx5(
                "input",
                {
                  type: "number",
                  value: sharedValue,
                  onChange: (e2) => setSharedValue(e2.target.value),
                  className: "font-medium w-[42px] h-[26px] outline-none text-center bg-[#F2F2F2] rounded-md flex items-center justify-center [&::-webkit-inner-spin-button]:appearance-none " + (isMouseOver === true ? "text-[#ff340a]" : "text-[#000000]"),
                  min,
                  max,
                  step
                }
              )
            ]
          }
        )
      ]
    }
  );
}

// src/PluginUI/ColorInput.tsx
import * as React9 from "react";

// ../../node_modules/.pnpm/@uiw+color-convert@1.4.3_@babel+runtime@7.27.0/node_modules/@uiw/color-convert/esm/index.js
var import_extends = __toESM(require_extends());

// ../../node_modules/.pnpm/@uiw+color-convert@1.4.3_@babel+runtime@7.27.0/node_modules/@uiw/color-convert/esm/utils.js
var validHex = (hex) => /^#?([A-Fa-f0-9]{3,4}){1,2}$/.test(hex);

// ../../node_modules/.pnpm/@uiw+color-convert@1.4.3_@babel+runtime@7.27.0/node_modules/@uiw/color-convert/esm/index.js
var RGB_MAX = 255;
var HUE_MAX = 360;
var SV_MAX = 100;
var rgbaToHsva = (_ref) => {
  var {
    r: r2,
    g,
    b,
    a: a2
  } = _ref;
  var max = Math.max(r2, g, b);
  var delta = max - Math.min(r2, g, b);
  var hh = delta ? max === r2 ? (g - b) / delta : max === g ? 2 + (b - r2) / delta : 4 + (r2 - g) / delta : 0;
  return {
    h: 60 * (hh < 0 ? hh + 6 : hh),
    s: max ? delta / max * SV_MAX : 0,
    v: max / RGB_MAX * SV_MAX,
    a: a2
  };
};
var hsvaToHslaString = (hsva) => {
  var {
    h,
    s: s2,
    l,
    a: a2
  } = hsvaToHsla(hsva);
  return "hsla(" + h + ", " + s2 + "%, " + l + "%, " + a2 + ")";
};
var hsvaToHsla = (_ref5) => {
  var {
    h,
    s: s2,
    v,
    a: a2
  } = _ref5;
  var hh = (200 - s2) * v / SV_MAX;
  return {
    h,
    s: hh > 0 && hh < 200 ? s2 * v / SV_MAX / (hh <= SV_MAX ? hh : 200 - hh) * SV_MAX : 0,
    l: hh / 2,
    a: a2
  };
};
var angleUnits = {
  grad: HUE_MAX / 400,
  turn: HUE_MAX,
  rad: HUE_MAX / (Math.PI * 2)
};
var rgbaToHex = (_ref6) => {
  var {
    r: r2,
    g,
    b
  } = _ref6;
  var bin = r2 << 16 | g << 8 | b;
  return "#" + ((h) => new Array(7 - h.length).join("0") + h)(bin.toString(16));
};
var rgbaToHexa = (_ref7) => {
  var {
    r: r2,
    g,
    b,
    a: a2
  } = _ref7;
  var alpha = typeof a2 === "number" && (a2 * 255 | 1 << 8).toString(16).slice(1);
  return "" + rgbaToHex({
    r: r2,
    g,
    b,
    a: a2
  }) + (alpha ? alpha : "");
};
var hexToHsva = (hex) => rgbaToHsva(hexToRgba(hex));
var hexToRgba = (hex) => {
  var htemp = hex.replace("#", "");
  if (/^#?/.test(hex) && htemp.length === 3) {
    hex = "#" + htemp.charAt(0) + htemp.charAt(0) + htemp.charAt(1) + htemp.charAt(1) + htemp.charAt(2) + htemp.charAt(2);
  }
  var reg = new RegExp("[A-Za-z0-9]{2}", "g");
  var [r2, g, b = 0, a2] = hex.match(reg).map((v) => parseInt(v, 16));
  return {
    r: r2,
    g,
    b,
    a: (a2 != null ? a2 : 255) / RGB_MAX
  };
};
var hsvaToRgba = (_ref8) => {
  var {
    h,
    s: s2,
    v,
    a: a2
  } = _ref8;
  var _h = h / 60, _s = s2 / SV_MAX, _v = v / SV_MAX, hi = Math.floor(_h) % 6;
  var f = _h - Math.floor(_h), _p = RGB_MAX * _v * (1 - _s), _q = RGB_MAX * _v * (1 - _s * f), _t = RGB_MAX * _v * (1 - _s * (1 - f));
  _v *= RGB_MAX;
  var rgba = {};
  switch (hi) {
    case 0:
      rgba.r = _v;
      rgba.g = _t;
      rgba.b = _p;
      break;
    case 1:
      rgba.r = _q;
      rgba.g = _v;
      rgba.b = _p;
      break;
    case 2:
      rgba.r = _p;
      rgba.g = _v;
      rgba.b = _t;
      break;
    case 3:
      rgba.r = _p;
      rgba.g = _q;
      rgba.b = _v;
      break;
    case 4:
      rgba.r = _t;
      rgba.g = _p;
      rgba.b = _v;
      break;
    case 5:
      rgba.r = _v;
      rgba.g = _p;
      rgba.b = _q;
      break;
  }
  rgba.r = Math.round(rgba.r);
  rgba.g = Math.round(rgba.g);
  rgba.b = Math.round(rgba.b);
  return (0, import_extends.default)({}, rgba, {
    a: a2
  });
};
var rgbaToRgb = (_ref9) => {
  var {
    r: r2,
    g,
    b
  } = _ref9;
  return {
    r: r2,
    g,
    b
  };
};
var hslaToHsl = (_ref10) => {
  var {
    h,
    s: s2,
    l
  } = _ref10;
  return {
    h,
    s: s2,
    l
  };
};
var hsvaToHex = (hsva) => rgbaToHex(hsvaToRgba(hsva));
var hsvaToHsv = (_ref11) => {
  var {
    h,
    s: s2,
    v
  } = _ref11;
  return {
    h,
    s: s2,
    v
  };
};
var color = (str) => {
  var rgb;
  var hsl;
  var hsv;
  var rgba;
  var hsla;
  var hsva;
  var hex;
  var hexa;
  if (typeof str === "string" && validHex(str)) {
    hsva = hexToHsva(str);
    hex = str;
  } else if (typeof str !== "string") {
    hsva = str;
  }
  if (hsva) {
    hsv = hsvaToHsv(hsva);
    hsla = hsvaToHsla(hsva);
    rgba = hsvaToRgba(hsva);
    hexa = rgbaToHexa(rgba);
    hex = hsvaToHex(hsva);
    hsl = hslaToHsl(hsla);
    rgb = rgbaToRgb(rgba);
  }
  return {
    rgb,
    hsl,
    hsv,
    rgba,
    hsla,
    hsva,
    hex,
    hexa
  };
};

// ../../node_modules/.pnpm/@uiw+react-color-shade-slider@1.4.3_@babel+runtime@7.27.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@uiw/react-color-shade-slider/esm/index.js
var import_extends5 = __toESM(require_extends());
var import_objectWithoutPropertiesLoose4 = __toESM(require_objectWithoutPropertiesLoose());
import React6 from "react";

// ../../node_modules/.pnpm/@uiw+react-color-alpha@1.4.3_@babel+runtime@7.27.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@uiw/react-color-alpha/esm/index.js
var import_extends4 = __toESM(require_extends());
var import_objectWithoutPropertiesLoose3 = __toESM(require_objectWithoutPropertiesLoose());
import React5 from "react";

// ../../node_modules/.pnpm/@uiw+react-drag-event-interactive@1.4.3_@babel+runtime@7.27.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@uiw/react-drag-event-interactive/esm/index.js
var import_extends2 = __toESM(require_extends());
var import_objectWithoutPropertiesLoose = __toESM(require_objectWithoutPropertiesLoose());
import React3, { useRef as useRef3, useState as useState5, useCallback as useCallback2, useEffect as useEffect6 } from "react";

// ../../node_modules/.pnpm/@uiw+react-drag-event-interactive@1.4.3_@babel+runtime@7.27.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@uiw/react-drag-event-interactive/esm/utils.js
import { useRef as useRef2, useEffect as useEffect5, useCallback } from "react";
function useEventCallback(handler) {
  var callbackRef = useRef2(handler);
  useEffect5(() => {
    callbackRef.current = handler;
  });
  return useCallback((value, event) => callbackRef.current && callbackRef.current(value, event), []);
}
var isTouch = (event) => "touches" in event;
var preventDefaultMove = (event) => {
  !isTouch(event) && event.preventDefault && event.preventDefault();
};
var clamp = function clamp2(number, min, max) {
  if (min === void 0) {
    min = 0;
  }
  if (max === void 0) {
    max = 1;
  }
  return number > max ? max : number < min ? min : number;
};
var getRelativePosition = (node, event) => {
  var rect = node.getBoundingClientRect();
  var pointer = isTouch(event) ? event.touches[0] : event;
  return {
    left: clamp((pointer.pageX - (rect.left + window.pageXOffset)) / rect.width),
    top: clamp((pointer.pageY - (rect.top + window.pageYOffset)) / rect.height),
    width: rect.width,
    height: rect.height,
    x: pointer.pageX - (rect.left + window.pageXOffset),
    y: pointer.pageY - (rect.top + window.pageYOffset)
  };
};

// ../../node_modules/.pnpm/@uiw+react-drag-event-interactive@1.4.3_@babel+runtime@7.27.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@uiw/react-drag-event-interactive/esm/index.js
import { jsx as _jsx } from "react/jsx-runtime";
var _excluded = ["prefixCls", "className", "onMove", "onDown"];
var Interactive = /* @__PURE__ */ React3.forwardRef((props, ref) => {
  var {
    prefixCls = "w-color-interactive",
    className,
    onMove,
    onDown
  } = props, reset = (0, import_objectWithoutPropertiesLoose.default)(props, _excluded);
  var container = useRef3(null);
  var hasTouched = useRef3(false);
  var [isDragging, setDragging] = useState5(false);
  var onMoveCallback = useEventCallback(onMove);
  var onKeyCallback = useEventCallback(onDown);
  var isValid = (event) => {
    if (hasTouched.current && !isTouch(event)) return false;
    hasTouched.current = isTouch(event);
    return true;
  };
  var handleMove = useCallback2((event) => {
    preventDefaultMove(event);
    var isDown = isTouch(event) ? event.touches.length > 0 : event.buttons > 0;
    if (isDown && container.current) {
      onMoveCallback && onMoveCallback(getRelativePosition(container.current, event), event);
    } else {
      setDragging(false);
    }
  }, [onMoveCallback]);
  var handleMoveEnd = useCallback2(() => setDragging(false), []);
  var toggleDocumentEvents = useCallback2((state) => {
    var toggleEvent = state ? window.addEventListener : window.removeEventListener;
    toggleEvent(hasTouched.current ? "touchmove" : "mousemove", handleMove);
    toggleEvent(hasTouched.current ? "touchend" : "mouseup", handleMoveEnd);
  }, []);
  useEffect6(() => {
    toggleDocumentEvents(isDragging);
    return () => {
      isDragging && toggleDocumentEvents(false);
    };
  }, [isDragging, toggleDocumentEvents]);
  var handleMoveStart = useCallback2((event) => {
    preventDefaultMove(event.nativeEvent);
    if (!isValid(event.nativeEvent)) return;
    onKeyCallback && onKeyCallback(getRelativePosition(container.current, event.nativeEvent), event.nativeEvent);
    setDragging(true);
  }, [onKeyCallback]);
  return /* @__PURE__ */ _jsx("div", (0, import_extends2.default)({}, reset, {
    className: [prefixCls, className || ""].filter(Boolean).join(" "),
    style: (0, import_extends2.default)({}, reset.style, {
      touchAction: "none"
    }),
    ref: container,
    tabIndex: 0,
    onMouseDown: handleMoveStart,
    onTouchStart: handleMoveStart
  }));
});
Interactive.displayName = "Interactive";
var esm_default = Interactive;

// ../../node_modules/.pnpm/@uiw+react-color-alpha@1.4.3_@babel+runtime@7.27.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@uiw/react-color-alpha/esm/Pointer.js
var import_extends3 = __toESM(require_extends());
var import_objectWithoutPropertiesLoose2 = __toESM(require_objectWithoutPropertiesLoose());
import React4 from "react";
import { jsx as _jsx2 } from "react/jsx-runtime";
var _excluded2 = ["className", "prefixCls", "left", "top", "style", "fillProps"];
var Pointer = (_ref) => {
  var {
    className,
    prefixCls,
    left,
    top,
    style,
    fillProps
  } = _ref, reset = (0, import_objectWithoutPropertiesLoose2.default)(_ref, _excluded2);
  var styleWrapper = (0, import_extends3.default)({}, style, {
    position: "absolute",
    left,
    top
  });
  var stylePointer = (0, import_extends3.default)({
    width: 18,
    height: 18,
    boxShadow: "var(--alpha-pointer-box-shadow)",
    borderRadius: "50%",
    backgroundColor: "var(--alpha-pointer-background-color)"
  }, fillProps == null ? void 0 : fillProps.style, {
    transform: left ? "translate(-9px, -1px)" : "translate(-1px, -9px)"
  });
  return /* @__PURE__ */ _jsx2("div", (0, import_extends3.default)({
    className: prefixCls + "-pointer " + (className || ""),
    style: styleWrapper
  }, reset, {
    children: /* @__PURE__ */ _jsx2("div", (0, import_extends3.default)({
      className: prefixCls + "-fill"
    }, fillProps, {
      style: stylePointer
    }))
  }));
};

// ../../node_modules/.pnpm/@uiw+react-color-alpha@1.4.3_@babel+runtime@7.27.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@uiw/react-color-alpha/esm/index.js
import { jsx as _jsx3 } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var _excluded3 = ["prefixCls", "className", "hsva", "background", "bgProps", "innerProps", "pointerProps", "radius", "width", "height", "direction", "style", "onChange", "pointer"];
var BACKGROUND_IMG = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAMUlEQVQ4T2NkYGAQYcAP3uCTZhw1gGGYhAGBZIA/nYDCgBDAm9BGDWAAJyRCgLaBCAAgXwixzAS0pgAAAABJRU5ErkJggg==";
var Alpha = /* @__PURE__ */ React5.forwardRef((props, ref) => {
  var {
    prefixCls = "w-color-alpha",
    className,
    hsva,
    background,
    bgProps = {},
    innerProps = {},
    pointerProps = {},
    radius = 0,
    width,
    height = 16,
    direction = "horizontal",
    style,
    onChange,
    pointer
  } = props, other = (0, import_objectWithoutPropertiesLoose3.default)(props, _excluded3);
  var handleChange = (offset) => {
    onChange && onChange((0, import_extends4.default)({}, hsva, {
      a: direction === "horizontal" ? offset.left : offset.top
    }), offset);
  };
  var colorTo = hsvaToHslaString(Object.assign({}, hsva, {
    a: 1
  }));
  var innerBackground = "linear-gradient(to " + (direction === "horizontal" ? "right" : "bottom") + ", rgba(244, 67, 54, 0) 0%, " + colorTo + " 100%)";
  var comProps = {};
  if (direction === "horizontal") {
    comProps.left = hsva.a * 100 + "%";
  } else {
    comProps.top = hsva.a * 100 + "%";
  }
  var styleWrapper = (0, import_extends4.default)({
    "--alpha-background-color": "#fff",
    "--alpha-pointer-background-color": "rgb(248, 248, 248)",
    "--alpha-pointer-box-shadow": "rgb(0 0 0 / 37%) 0px 1px 4px 0px",
    borderRadius: radius,
    background: "url(" + BACKGROUND_IMG + ") left center",
    backgroundColor: "var(--alpha-background-color)"
  }, style, {
    position: "relative"
  }, {
    width,
    height
  });
  var pointerElement = pointer && typeof pointer === "function" ? pointer((0, import_extends4.default)({
    prefixCls
  }, pointerProps, comProps)) : /* @__PURE__ */ _jsx3(Pointer, (0, import_extends4.default)({}, pointerProps, {
    prefixCls
  }, comProps));
  return /* @__PURE__ */ _jsxs("div", (0, import_extends4.default)({}, other, {
    className: [prefixCls, prefixCls + "-" + direction, className || ""].filter(Boolean).join(" "),
    style: styleWrapper,
    ref,
    children: [/* @__PURE__ */ _jsx3("div", (0, import_extends4.default)({}, bgProps, {
      style: (0, import_extends4.default)({
        inset: 0,
        position: "absolute",
        background: background || innerBackground,
        borderRadius: radius
      }, bgProps.style)
    })), /* @__PURE__ */ _jsx3(esm_default, (0, import_extends4.default)({}, innerProps, {
      style: (0, import_extends4.default)({}, innerProps.style, {
        inset: 0,
        zIndex: 1,
        position: "absolute"
      }),
      onMove: handleChange,
      onDown: handleChange,
      children: pointerElement
    }))]
  }));
});
Alpha.displayName = "Alpha";
var esm_default2 = Alpha;

// ../../node_modules/.pnpm/@uiw+react-color-shade-slider@1.4.3_@babel+runtime@7.27.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@uiw/react-color-shade-slider/esm/index.js
import { jsx as _jsx4 } from "react/jsx-runtime";
var _excluded4 = ["prefixCls", "className", "onChange", "direction", "hsva"];
var ShadeSlider = /* @__PURE__ */ React6.forwardRef((props, ref) => {
  var {
    prefixCls = "w-color-saturation",
    className,
    onChange: _onChange,
    direction = "horizontal",
    hsva
  } = props, other = (0, import_objectWithoutPropertiesLoose4.default)(props, _excluded4);
  var colorFrom = hsvaToHslaString((0, import_extends5.default)({}, hsva, {
    a: 1,
    v: 100
  }));
  return /* @__PURE__ */ _jsx4(esm_default2, (0, import_extends5.default)({
    ref
  }, other, {
    className: prefixCls + " " + (className || ""),
    hsva: {
      h: hsva.h,
      s: hsva.s,
      v: hsva.v,
      a: 1 - hsva.v / 100
    },
    direction,
    background: "linear-gradient(to " + (direction === "horizontal" ? "right" : "bottom") + ", " + colorFrom + ", rgb(0, 0, 0))",
    onChange: (_, interaction) => {
      _onChange && _onChange({
        v: direction === "horizontal" ? 100 - interaction.left * 100 : 100 - interaction.top * 100
      });
    }
  }));
});
ShadeSlider.displayName = "ShadeSlider";
var esm_default3 = ShadeSlider;

// ../../node_modules/.pnpm/@uiw+react-color-wheel@1.4.3_@babel+runtime@7.27.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@uiw/react-color-wheel/esm/index.js
var import_extends7 = __toESM(require_extends());
var import_objectWithoutPropertiesLoose5 = __toESM(require_objectWithoutPropertiesLoose());
import React8 from "react";

// ../../node_modules/.pnpm/@uiw+react-color-wheel@1.4.3_@babel+runtime@7.27.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@uiw/react-color-wheel/esm/Pointer.js
var import_extends6 = __toESM(require_extends());
import React7 from "react";
import { jsx as _jsx5 } from "react/jsx-runtime";
var BOXSHADOW = "rgb(255 255 255) 0px 0px 0px 1.5px, rgb(0 0 0 / 30%) 0px 0px 1px 1px inset, rgb(0 0 0 / 40%) 0px 0px 1px 2px";
var Pointer2 = (_ref) => {
  var {
    className,
    color: color2,
    left,
    top,
    style,
    prefixCls
  } = _ref;
  var styleWarp = (0, import_extends6.default)({}, style, {
    position: "absolute",
    top,
    left
  });
  var cls = prefixCls + "-pointer " + (className || "");
  return /* @__PURE__ */ _jsx5("div", {
    className: cls,
    style: styleWarp,
    children: /* @__PURE__ */ _jsx5("div", {
      className: prefixCls + "-fill",
      style: {
        width: 10,
        height: 10,
        transform: "translate(-5px, -5px)",
        boxShadow: BOXSHADOW,
        borderRadius: "50%",
        backgroundColor: "#fff"
      },
      children: /* @__PURE__ */ _jsx5("div", {
        style: {
          inset: 0,
          borderRadius: "50%",
          position: "absolute",
          backgroundColor: color2
        }
      })
    })
  });
};

// ../../node_modules/.pnpm/@uiw+react-color-wheel@1.4.3_@babel+runtime@7.27.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@uiw/react-color-wheel/esm/utils.js
var TAU = Math.PI * 2;
var mod = (a2, n2) => (a2 % n2 + n2) % n2;
var dist = (x, y) => Math.sqrt(x * x + y * y);
function getWheelDimensions(_ref) {
  var {
    width = 0
  } = _ref;
  var r2 = width / 2;
  return {
    width,
    radius: r2,
    cx: r2,
    cy: r2
  };
}
function getWheelHandlePosition(props, hsv) {
  var {
    cx: cx3,
    cy
  } = getWheelDimensions(props);
  var handleRange = getHandleRange(props);
  var handleAngle = (180 + translateWheelAngle(props, hsv.h, true)) * (TAU / 360);
  var handleDist = hsv.s / 100 * handleRange;
  var direction = props.direction === "clockwise" ? -1 : 1;
  return {
    x: cx3 + handleDist * Math.cos(handleAngle) * direction,
    y: cy + handleDist * Math.sin(handleAngle) * direction
  };
}
function getHandleRange(_ref2) {
  var {
    width = 0
  } = _ref2;
  return width / 2;
}
function translateWheelAngle(props, angle, invert) {
  var wheelAngle = props.angle || 0;
  var direction = props.direction;
  if (invert && direction === "clockwise") angle = wheelAngle + angle;
  else if (direction === "clockwise") angle = 360 - wheelAngle + angle;
  else if (invert && direction === "anticlockwise") angle = wheelAngle + 180 - angle;
  else if (direction === "anticlockwise") angle = wheelAngle - angle;
  return mod(angle, 360);
}
function getWheelValueFromInput(props, x, y) {
  var {
    cx: cx3,
    cy
  } = getWheelDimensions(props);
  var handleRange = getHandleRange(props);
  x = cx3 - x;
  y = cy - y;
  var hue = translateWheelAngle(props, Math.atan2(-y, -x) * (360 / TAU));
  var handleDist = Math.min(dist(x, y), handleRange);
  return {
    h: Math.round(hue),
    s: Math.round(100 / handleRange * handleDist)
  };
}

// ../../node_modules/.pnpm/@uiw+react-color-wheel@1.4.3_@babel+runtime@7.27.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@uiw/react-color-wheel/esm/index.js
import { jsx as _jsx6 } from "react/jsx-runtime";
import { jsxs as _jsxs2 } from "react/jsx-runtime";
var _excluded5 = ["prefixCls", "radius", "pointer", "className", "style", "width", "height", "oval", "direction", "angle", "color", "onChange"];
var HUE_GRADIENT_CLOCKWISE = "conic-gradient(red, yellow, lime, aqua, blue, magenta, red)";
var HUE_GRADIENT_ANTICLOCKWISE = "conic-gradient(red, magenta, blue, aqua, lime, yellow, red)";
var Wheel = /* @__PURE__ */ React8.forwardRef((props, ref) => {
  var {
    prefixCls = "w-color-wheel",
    radius = 0,
    pointer,
    className,
    style,
    width = 200,
    height = 200,
    oval,
    direction = "anticlockwise",
    angle = 180,
    color: color2,
    onChange
  } = props, other = (0, import_objectWithoutPropertiesLoose5.default)(props, _excluded5);
  var hsva = typeof color2 === "string" && validHex(color2) ? hexToHsva(color2) : color2 || {};
  var hex = color2 ? hsvaToHex(hsva) : "";
  var positions = getWheelHandlePosition({
    width
  }, hsva);
  var comProps = {
    top: "0",
    left: "0",
    color: hex
  };
  var handleChange = (interaction, event) => {
    var result = getWheelValueFromInput({
      width
    }, width - interaction.x, height - interaction.y);
    var handleHsva = {
      h: result.h,
      s: result.s,
      v: hsva.v,
      a: hsva.a
    };
    onChange && onChange(color(handleHsva));
  };
  var pointerStyle = {
    zIndex: 1,
    transform: "translate(" + positions.x + "px, " + positions.y + "px) " + (oval === "x" || oval === "X" ? "scaleY(2)" : oval === "y" || oval === "Y" ? "scaleX(2)" : "")
  };
  var pointerElement = pointer && typeof pointer === "function" ? pointer((0, import_extends7.default)({
    prefixCls,
    style: pointerStyle
  }, comProps)) : /* @__PURE__ */ _jsx6(Pointer2, (0, import_extends7.default)({
    prefixCls,
    style: pointerStyle
  }, comProps));
  return /* @__PURE__ */ _jsxs2(esm_default, (0, import_extends7.default)({
    className: [prefixCls, className || ""].filter(Boolean).join(" ")
  }, other, {
    style: (0, import_extends7.default)({
      position: "relative",
      width,
      transform: oval === "x" || oval === "X" ? "scaleY(0.5)" : oval === "y" || oval === "Y" ? "scaleX(0.5)" : "",
      height
    }, style),
    ref,
    onMove: handleChange,
    onDown: handleChange,
    children: [pointerElement, /* @__PURE__ */ _jsx6("div", {
      style: {
        position: "absolute",
        borderRadius: "50%",
        background: direction === "anticlockwise" ? HUE_GRADIENT_CLOCKWISE : HUE_GRADIENT_ANTICLOCKWISE,
        transform: "rotateZ(" + (angle + 90) + "deg)",
        inset: 0
      }
    }), /* @__PURE__ */ _jsx6("div", {
      style: {
        position: "absolute",
        borderRadius: "50%",
        background: "radial-gradient(circle closest-side, #fff, transparent)",
        inset: 0
      }
    }), /* @__PURE__ */ _jsx6("div", {
      style: {
        backgroundColor: "#000",
        borderRadius: "50%",
        position: "absolute",
        inset: 0,
        opacity: typeof hsva.v === "number" ? 1 - hsva.v / 100 : 0
      }
    })]
  }));
});
Wheel.displayName = "Wheel";
var esm_default4 = Wheel;

// src/PluginUI/ColorInput.tsx
import { jsx as jsx6, jsxs as jsxs5 } from "react/jsx-runtime";
function ColorInput({
  defaultValue,
  setValue
}) {
  const [sharedValue, setSharedValue] = React9.useState(defaultValue);
  const [isClicked, setIsClicked] = React9.useState(false);
  const colorPickerRef = React9.useRef(null);
  const triggerRef = React9.useRef(null);
  React9.useEffect(() => {
    setSharedValue(defaultValue);
  }, []);
  React9.useEffect(() => {
    setValue(sharedValue);
  }, [sharedValue]);
  React9.useEffect(() => {
    setSharedValue(defaultValue);
  }, [defaultValue]);
  React9.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting && isClicked) {
          setIsClicked(false);
        }
      },
      { threshold: 0.5 }
      // Trigger when any part of the element is not visible
    );
    if (triggerRef.current) {
      observer.observe(triggerRef.current);
    }
    return () => {
      if (triggerRef.current) {
        observer.unobserve(triggerRef.current);
      }
    };
  }, [isClicked]);
  const updateColorWheelPosition = React9.useCallback(() => {
    if (isClicked && colorPickerRef.current && triggerRef.current) {
      const triggerRect = triggerRef.current.getBoundingClientRect();
      const colorWheelRect = colorPickerRef.current.getBoundingClientRect();
      const left = triggerRect.left + triggerRect.width / 2 - colorWheelRect.width / 2;
      const top = triggerRect.top - colorWheelRect.height - 5;
      colorPickerRef.current.style.left = `${left}px`;
      colorPickerRef.current.style.top = `${top}px`;
    }
  }, [isClicked]);
  useOnClickOutside(colorPickerRef, () => setIsClicked(false));
  React9.useEffect(() => {
    updateColorWheelPosition();
    const handleScroll = () => {
      updateColorWheelPosition();
    };
    if (isClicked) {
      window.addEventListener("scroll", handleScroll, true);
    }
    return () => {
      window.removeEventListener("scroll", handleScroll, true);
    };
  }, [isClicked, updateColorWheelPosition]);
  return /* @__PURE__ */ jsxs5("div", { className: "flex items-center w-full h-full flex-row gap-2", children: [
    /* @__PURE__ */ jsxs5("div", { className: "flex items-center gap-2 w-full relative h-full", children: [
      /* @__PURE__ */ jsx6(
        "div",
        {
          ref: triggerRef,
          className: "w-full h-[26px] rounded-md cursor-pointer",
          style: {
            background: sharedValue,
            border: sharedValue === "#ffffff" ? "1px solid #F2F2F2" : "0px solid transparent"
          },
          onClick: () => {
            setIsClicked(!isClicked);
          }
        }
      ),
      /* @__PURE__ */ jsx6(
        "div",
        {
          ref: colorPickerRef,
          id: "colorwheel",
          style: {
            width: "fit-content",
            height: "fit-content",
            position: "fixed",
            zIndex: 100,
            display: isClicked === true ? "block" : "none"
          },
          children: /* @__PURE__ */ jsxs5(
            "div",
            {
              style: {
                display: "flex",
                width: "fit-content",
                height: "fit-content",
                background: "white",
                padding: 16,
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: 16,
                borderRadius: 5,
                filter: "drop-shadow(0px 0px 10px rgba(0,0,0,0.10))"
              },
              children: [
                /* @__PURE__ */ jsx6(
                  esm_default4,
                  {
                    color: sharedValue,
                    onChange: (color2) => {
                      setSharedValue(color2.hex);
                    },
                    width: 200,
                    height: 200
                  }
                ),
                /* @__PURE__ */ jsx6(
                  esm_default3,
                  {
                    width: 200,
                    radius: 4,
                    style: { display: "flex", alignItems: "center" },
                    hsva: hexToHsva(sharedValue),
                    onChange: (color2) => {
                      setSharedValue(
                        hsvaToHex({
                          h: hexToHsva(sharedValue).h,
                          // @ts-ignore
                          s: color2.s,
                          v: color2.v,
                          a: 1
                        })
                      );
                    }
                  }
                ),
                /* @__PURE__ */ jsx6(
                  "div",
                  {
                    style: {
                      width: 16,
                      height: 16,
                      background: "white",
                      position: "absolute",
                      borderRadius: 3,
                      bottom: -5,
                      transform: "rotate(45deg)"
                    }
                  }
                )
              ]
            }
          )
        }
      )
    ] }),
    /* @__PURE__ */ jsx6(
      "input",
      {
        type: "text",
        value: sharedValue,
        onChange: (e2) => setSharedValue(e2.target.value),
        className: "w-[84px] h-[26px] outline-none text-center bg-[#F2F2F2] rounded-md flex items-center justify-center"
      }
    )
  ] });
}

// src/PluginUI/RangeSlider.tsx
import { useState as useState7, useEffect as useEffect8 } from "react";
import { jsx as jsx7, jsxs as jsxs6 } from "react/jsx-runtime";
function RangeSlider({
  title,
  defaultValue,
  setValue,
  step,
  min,
  max,
  info,
  infoContent,
  condition
}) {
  const [rangeValue, setRangeValue] = useState7(defaultValue);
  const [isMouseOver, setIsMouseOver] = useState7(false);
  useEffect8(() => {
    setRangeValue(defaultValue);
  }, [defaultValue]);
  useEffect8(() => {
    setValue(rangeValue);
  }, [rangeValue]);
  return /* @__PURE__ */ jsxs6(
    "div",
    {
      className: 'flex items-center w-full h-[26px] flex-row gap-2 font-["Inter"]',
      children: [
        /* @__PURE__ */ jsx7(
          InputTitle,
          {
            title,
            info,
            infoContent,
            condition
          }
        ),
        /* @__PURE__ */ jsxs6(
          "div",
          {
            className: "flex items-center w-full h-fit flex-row gap-2",
            onMouseOver: () => setIsMouseOver(true),
            onMouseLeave: () => setIsMouseOver(false),
            children: [
              /* @__PURE__ */ jsx7(
                "input",
                {
                  type: "number",
                  value: rangeValue[0],
                  onChange: (e2) => {
                    setRangeValue([Number(e2.target.value), rangeValue[1]]);
                  },
                  min: 0,
                  className: "font-medium w-[42px] h-[26px] outline-none text-center bg-[#F2F2F2] rounded-md flex items-center justify-center [&::-webkit-inner-spin-button]:appearance-none " + (isMouseOver === true ? "text-[#ff340a]" : "text-[#000000]"),
                  step
                }
              ),
              /* @__PURE__ */ jsx7(
                u,
                {
                  value: rangeValue,
                  step,
                  min,
                  max,
                  onChange: (values) => {
                    setRangeValue(values);
                  },
                  className: "w-full rounded-md bg-[#F2F2F2] cursor-ew-resize overflow-hidden transition-height duration-300 " + (isMouseOver === true ? "h-[26px]" : "h-[5px]"),
                  trackClassName: "h-full duration-300 " + (isMouseOver === true ? "bg-[#ff340a]" : "bg-[#ABABAB]"),
                  renderTrack: (props, state) => /* @__PURE__ */ jsx7(
                    "div",
                    __spreadProps(__spreadValues({}, props), {
                      className: "h-full flex relative " + (isMouseOver === true ? "bg-[#ff340a]" : "bg-[#ABABAB]"),
                      style: __spreadProps(__spreadValues({}, props.style), {
                        opacity: state.index === 1 ? 1 : 0
                      })
                    })
                  ),
                  renderThumb: (props, state) => /* @__PURE__ */ jsx7(
                    "div",
                    __spreadProps(__spreadValues({}, props), {
                      className: "w-[8px] h-full justify-center items-center flex",
                      children: /* @__PURE__ */ jsx7(
                        "div",
                        {
                          className: "absolute w-[2px] bg-[#ffffff] rounded-full pointer-events-none duration-200 h-[30%] " + (isMouseOver === true ? "opacity-100" : "opacity-0")
                        }
                      )
                    })
                  )
                }
              ),
              /* @__PURE__ */ jsx7(
                "input",
                {
                  type: "number",
                  value: rangeValue[1],
                  onChange: (e2) => {
                    setRangeValue([rangeValue[0], Number(e2.target.value)]);
                  },
                  className: "font-medium w-[42px] h-[26px] outline-none text-center bg-[#F2F2F2] rounded-md flex items-center justify-center [&::-webkit-inner-spin-button]:appearance-none " + (isMouseOver === true ? "text-[#ff340a]" : "text-[#000000]"),
                  step,
                  max
                }
              )
            ]
          }
        )
      ]
    }
  );
}

// src/PluginUI/TripleNumberInput.tsx
import { useState as useState9, useEffect as useEffect10 } from "react";

// src/PluginUI/NumberInput.tsx
import { useState as useState8, useCallback as useCallback4, useEffect as useEffect9 } from "react";
import { jsx as jsx8, jsxs as jsxs7 } from "react/jsx-runtime";
var NumberInput = ({
  label,
  value,
  setValue,
  mouseOverOn,
  setMouseOverOn,
  min,
  max,
  step
}) => {
  const [snapshot, setSnapshot] = useState8(value);
  const [startVal, setStartVal] = useState8(0);
  const onStart = useCallback4(
    (event) => {
      setStartVal(event.clientX);
      setSnapshot(value);
    },
    [value]
  );
  useEffect9(() => {
    const onUpdate = (event) => {
      var _a;
      if (startVal) {
        const diff = event.clientX - startVal;
        const sensitivity = 0.5;
        const rawValue = snapshot + diff * sensitivity;
        const newValue = step ? Math.round(rawValue / step) * step : rawValue;
        if (min !== void 0 && newValue < min) return;
        if (max !== void 0 && newValue > max) return;
        const decimalPlaces = step ? ((_a = step.toString().split(".")[1]) == null ? void 0 : _a.length) || 0 : 0;
        setValue(parseFloat(newValue.toFixed(decimalPlaces)));
      }
    };
    const onEnd = () => {
      setStartVal(0);
    };
    document.addEventListener("mousemove", onUpdate);
    document.addEventListener("mouseup", onEnd);
    return () => {
      document.removeEventListener("mousemove", onUpdate);
      document.removeEventListener("mouseup", onEnd);
    };
  }, [startVal, setValue, snapshot, min, max, step]);
  return /* @__PURE__ */ jsxs7(
    "div",
    {
      className: 'w-full bg-[#F2F2F2] rounded-md flex flex-row gap-0 justify-center items-center h-full relative cursor-ew-resize font-["Inter"]',
      onMouseOver: () => setMouseOverOn(label),
      onMouseLeave: () => setMouseOverOn(""),
      onMouseDown: onStart,
      children: [
        /* @__PURE__ */ jsx8("div", { className: "h-full w-fit flex justify-center items-center text-[9px] text-black opacity-70 capitalize ml-2 select-none", children: label }),
        /* @__PURE__ */ jsx8("div", { className: "w-full flex justify-center items-center", children: /* @__PURE__ */ jsx8(
          "input",
          {
            type: "number",
            value,
            onChange: (e2) => setValue(parseFloat(e2.target.value)),
            className: "font-medium w-[24px] h-[26px] outline-none text-center bg-[#F2F2F2] rounded-md [&::-webkit-inner-spin-button]:appearance-none overflow-visible select-none " + (mouseOverOn === label ? "text-[#ff340a]" : "text-[#000000]"),
            min,
            max,
            step
          }
        ) })
      ]
    }
  );
};

// src/PluginUI/TripleNumberInput.tsx
import { jsx as jsx9, jsxs as jsxs8 } from "react/jsx-runtime";
function TripleNumberInput({
  title,
  defaultValueX,
  defaultValueY,
  defaultValueZ,
  setValueX,
  setValueY,
  setValueZ,
  step,
  min,
  max,
  info,
  infoContent,
  condition
}) {
  const [sharedValueX, setSharedValueX] = useState9(defaultValueX);
  const [sharedValueY, setSharedValueY] = useState9(defaultValueY);
  const [sharedValueZ, setSharedValueZ] = useState9(defaultValueZ);
  const [mouseOverOn, setMouseOverOn] = useState9("");
  useEffect10(() => {
    setSharedValueX(defaultValueX);
    setSharedValueY(defaultValueY);
    setSharedValueZ(defaultValueZ);
  }, []);
  useEffect10(() => {
    setValueX(sharedValueX);
  }, [sharedValueX]);
  useEffect10(() => {
    setValueY(sharedValueY);
  }, [sharedValueY]);
  useEffect10(() => {
    setValueZ(sharedValueZ);
  }, [sharedValueZ]);
  useEffect10(() => {
    setSharedValueX(defaultValueX);
  }, [defaultValueX]);
  useEffect10(() => {
    setSharedValueY(defaultValueY);
  }, [defaultValueY]);
  useEffect10(() => {
    setSharedValueZ(defaultValueZ);
  }, [defaultValueZ]);
  return /* @__PURE__ */ jsxs8(
    "div",
    {
      className: "flex items-center w-full h-[26px] flex-row gap-2",
      style: { fontFamily: "Inter Medium" },
      children: [
        /* @__PURE__ */ jsx9(
          InputTitle,
          {
            title,
            info,
            infoContent,
            condition
          }
        ),
        /* @__PURE__ */ jsxs8("div", { className: "flex items-center w-full h-fit flex-row gap-2", children: [
          /* @__PURE__ */ jsx9(
            NumberInput,
            {
              label: "x",
              value: sharedValueX,
              setValue: setSharedValueX,
              mouseOverOn,
              setMouseOverOn,
              min,
              max,
              step
            }
          ),
          /* @__PURE__ */ jsx9(
            NumberInput,
            {
              label: "y",
              value: sharedValueY,
              setValue: setSharedValueY,
              mouseOverOn,
              setMouseOverOn,
              min,
              max,
              step
            }
          ),
          /* @__PURE__ */ jsx9(
            NumberInput,
            {
              label: "z",
              value: sharedValueZ,
              setValue: setSharedValueZ,
              mouseOverOn,
              setMouseOverOn,
              min,
              max,
              step
            }
          )
        ] })
      ]
    }
  );
}

// src/PluginUI/DoubleNumberInput.tsx
import { useState as useState10, useEffect as useEffect11 } from "react";
import { jsx as jsx10, jsxs as jsxs9 } from "react/jsx-runtime";
function DoubleNumberInput({
  title,
  defaultValueX,
  defaultValueY,
  labelX,
  labelY,
  setValueX,
  setValueY,
  step,
  min,
  max,
  info,
  infoContent,
  condition
}) {
  const [sharedValueX, setSharedValueX] = useState10(defaultValueX);
  const [sharedValueY, setSharedValueY] = useState10(defaultValueY);
  const [mouseOverOn, setMouseOverOn] = useState10("");
  useEffect11(() => {
    setSharedValueX(defaultValueX);
    setSharedValueY(defaultValueY);
  }, []);
  useEffect11(() => {
    setValueX(sharedValueX);
  }, [sharedValueX]);
  useEffect11(() => {
    setValueY(sharedValueY);
  }, [sharedValueY]);
  useEffect11(() => {
    setSharedValueX(defaultValueX);
  }, [defaultValueX]);
  useEffect11(() => {
    setSharedValueY(defaultValueY);
  }, [defaultValueY]);
  return /* @__PURE__ */ jsxs9(
    "div",
    {
      className: "flex items-center w-full h-[26px] flex-row gap-2",
      style: { fontFamily: "Inter Medium" },
      children: [
        /* @__PURE__ */ jsx10(
          InputTitle,
          {
            title,
            info,
            infoContent,
            condition
          }
        ),
        /* @__PURE__ */ jsxs9("div", { className: "flex items-center w-full h-fit flex-row gap-2", children: [
          /* @__PURE__ */ jsx10(
            NumberInput,
            {
              label: labelX,
              value: sharedValueX,
              setValue: setSharedValueX,
              mouseOverOn,
              setMouseOverOn,
              min,
              max,
              step
            }
          ),
          /* @__PURE__ */ jsx10(
            NumberInput,
            {
              label: labelY,
              value: sharedValueY,
              setValue: setSharedValueY,
              mouseOverOn,
              setMouseOverOn,
              min,
              max,
              step
            }
          )
        ] })
      ]
    }
  );
}

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/index.js
var build_exports = {};
__export(build_exports, {
  Color: () => Color,
  ComponentPresetsConsumer: () => ComponentPresetsConsumer,
  ComponentPresetsProvider: () => ComponentPresetsProvider,
  ControlType: () => ControlType,
  CycleVariantState: () => CycleVariantState,
  Frame: () => Frame,
  FrameWithMotion: () => FrameWithMotion,
  Image: () => Image2,
  LazyValue: () => LazyValue,
  Link: () => Link,
  Page: () => Page,
  RenderTarget: () => RenderTarget,
  RichText: () => RichText,
  SVG: () => SVG,
  Scroll: () => Scroll,
  Stack: () => Stack,
  Text: () => Text2,
  Vector: () => Vector,
  VectorGroup: () => VectorGroup,
  addFonts: () => addFonts,
  addPropertyControls: () => addPropertyControls,
  cx: () => cx2,
  fontStore: () => fontStore,
  getFonts: () => getFonts,
  getPropertyControls: () => getPropertyControls,
  transformTemplate: () => transformTemplate,
  useActiveVariantCallback: () => useActiveVariantCallback,
  useAddVariantProps: () => useAddVariantProps,
  useDataRecord: () => useDataRecord,
  useGamepad: () => useGamepad,
  useHotkey: () => useHotkey,
  useIsInCurrentNavigationTarget: () => useIsInCurrentNavigationTarget,
  useLocale: () => useLocale,
  useLocaleCode: () => useLocaleCode,
  useLocaleInfo: () => useLocaleInfo,
  useLocalizationInfo: () => useLocalizationInfo,
  useNavigate: () => useNavigate,
  useOnAppear: () => useOnAppear,
  useOnVariantChange: () => useOnVariantChange,
  useOverlayState: () => useOverlayState,
  useQueryData: () => useQueryData,
  useRouteAnchor: () => useRouteAnchor,
  useRouteHandler: () => useRouteHandler,
  useSafariGapFix: () => useSafariGapFix,
  useVariantState: () => useVariantState,
  withCSS: () => withCSS,
  withMeasuredSize: () => withMeasuredSize
});
__reExport(build_exports, framer_motion_star);
import * as framer_motion_star from "framer-motion";

// ../../node_modules/.pnpm/@juggle+resize-observer@3.4.0/node_modules/@juggle/resize-observer/lib/utils/resizeObservers.js
var resizeObservers = [];

// ../../node_modules/.pnpm/@juggle+resize-observer@3.4.0/node_modules/@juggle/resize-observer/lib/algorithms/hasActiveObservations.js
var hasActiveObservations = function() {
  return resizeObservers.some(function(ro) {
    return ro.activeTargets.length > 0;
  });
};

// ../../node_modules/.pnpm/@juggle+resize-observer@3.4.0/node_modules/@juggle/resize-observer/lib/algorithms/hasSkippedObservations.js
var hasSkippedObservations = function() {
  return resizeObservers.some(function(ro) {
    return ro.skippedTargets.length > 0;
  });
};

// ../../node_modules/.pnpm/@juggle+resize-observer@3.4.0/node_modules/@juggle/resize-observer/lib/algorithms/deliverResizeLoopError.js
var msg = "ResizeObserver loop completed with undelivered notifications.";
var deliverResizeLoopError = function() {
  var event;
  if (typeof ErrorEvent === "function") {
    event = new ErrorEvent("error", {
      message: msg
    });
  } else {
    event = document.createEvent("Event");
    event.initEvent("error", false, false);
    event.message = msg;
  }
  window.dispatchEvent(event);
};

// ../../node_modules/.pnpm/@juggle+resize-observer@3.4.0/node_modules/@juggle/resize-observer/lib/ResizeObserverBoxOptions.js
var ResizeObserverBoxOptions;
(function(ResizeObserverBoxOptions2) {
  ResizeObserverBoxOptions2["BORDER_BOX"] = "border-box";
  ResizeObserverBoxOptions2["CONTENT_BOX"] = "content-box";
  ResizeObserverBoxOptions2["DEVICE_PIXEL_CONTENT_BOX"] = "device-pixel-content-box";
})(ResizeObserverBoxOptions || (ResizeObserverBoxOptions = {}));

// ../../node_modules/.pnpm/@juggle+resize-observer@3.4.0/node_modules/@juggle/resize-observer/lib/utils/freeze.js
var freeze = function(obj) {
  return Object.freeze(obj);
};

// ../../node_modules/.pnpm/@juggle+resize-observer@3.4.0/node_modules/@juggle/resize-observer/lib/ResizeObserverSize.js
var ResizeObserverSize = /* @__PURE__ */ function() {
  function ResizeObserverSize2(inlineSize, blockSize) {
    this.inlineSize = inlineSize;
    this.blockSize = blockSize;
    freeze(this);
  }
  return ResizeObserverSize2;
}();

// ../../node_modules/.pnpm/@juggle+resize-observer@3.4.0/node_modules/@juggle/resize-observer/lib/DOMRectReadOnly.js
var DOMRectReadOnly = function() {
  function DOMRectReadOnly2(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.top = this.y;
    this.left = this.x;
    this.bottom = this.top + this.height;
    this.right = this.left + this.width;
    return freeze(this);
  }
  DOMRectReadOnly2.prototype.toJSON = function() {
    var _a = this, x = _a.x, y = _a.y, top = _a.top, right = _a.right, bottom = _a.bottom, left = _a.left, width = _a.width, height = _a.height;
    return { x, y, top, right, bottom, left, width, height };
  };
  DOMRectReadOnly2.fromRect = function(rectangle) {
    return new DOMRectReadOnly2(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
  };
  return DOMRectReadOnly2;
}();

// ../../node_modules/.pnpm/@juggle+resize-observer@3.4.0/node_modules/@juggle/resize-observer/lib/utils/element.js
var isSVG = function(target) {
  return target instanceof SVGElement && "getBBox" in target;
};
var isHidden = function(target) {
  if (isSVG(target)) {
    var _a = target.getBBox(), width = _a.width, height = _a.height;
    return !width && !height;
  }
  var _b = target, offsetWidth = _b.offsetWidth, offsetHeight = _b.offsetHeight;
  return !(offsetWidth || offsetHeight || target.getClientRects().length);
};
var isElement = function(obj) {
  var _a;
  if (obj instanceof Element) {
    return true;
  }
  var scope = (_a = obj === null || obj === void 0 ? void 0 : obj.ownerDocument) === null || _a === void 0 ? void 0 : _a.defaultView;
  return !!(scope && obj instanceof scope.Element);
};
var isReplacedElement = function(target) {
  switch (target.tagName) {
    case "INPUT":
      if (target.type !== "image") {
        break;
      }
    case "VIDEO":
    case "AUDIO":
    case "EMBED":
    case "OBJECT":
    case "CANVAS":
    case "IFRAME":
    case "IMG":
      return true;
  }
  return false;
};

// ../../node_modules/.pnpm/@juggle+resize-observer@3.4.0/node_modules/@juggle/resize-observer/lib/utils/global.js
var global = typeof window !== "undefined" ? window : {};

// ../../node_modules/.pnpm/@juggle+resize-observer@3.4.0/node_modules/@juggle/resize-observer/lib/algorithms/calculateBoxSize.js
var cache = /* @__PURE__ */ new WeakMap();
var scrollRegexp = /auto|scroll/;
var verticalRegexp = /^tb|vertical/;
var IE = /msie|trident/i.test(global.navigator && global.navigator.userAgent);
var parseDimension = function(pixel) {
  return parseFloat(pixel || "0");
};
var size = function(inlineSize, blockSize, switchSizes) {
  if (inlineSize === void 0) {
    inlineSize = 0;
  }
  if (blockSize === void 0) {
    blockSize = 0;
  }
  if (switchSizes === void 0) {
    switchSizes = false;
  }
  return new ResizeObserverSize((switchSizes ? blockSize : inlineSize) || 0, (switchSizes ? inlineSize : blockSize) || 0);
};
var zeroBoxes = freeze({
  devicePixelContentBoxSize: size(),
  borderBoxSize: size(),
  contentBoxSize: size(),
  contentRect: new DOMRectReadOnly(0, 0, 0, 0)
});
var calculateBoxSizes = function(target, forceRecalculation) {
  if (forceRecalculation === void 0) {
    forceRecalculation = false;
  }
  if (cache.has(target) && !forceRecalculation) {
    return cache.get(target);
  }
  if (isHidden(target)) {
    cache.set(target, zeroBoxes);
    return zeroBoxes;
  }
  var cs = getComputedStyle(target);
  var svg = isSVG(target) && target.ownerSVGElement && target.getBBox();
  var removePadding = !IE && cs.boxSizing === "border-box";
  var switchSizes = verticalRegexp.test(cs.writingMode || "");
  var canScrollVertically = !svg && scrollRegexp.test(cs.overflowY || "");
  var canScrollHorizontally = !svg && scrollRegexp.test(cs.overflowX || "");
  var paddingTop = svg ? 0 : parseDimension(cs.paddingTop);
  var paddingRight = svg ? 0 : parseDimension(cs.paddingRight);
  var paddingBottom = svg ? 0 : parseDimension(cs.paddingBottom);
  var paddingLeft = svg ? 0 : parseDimension(cs.paddingLeft);
  var borderTop = svg ? 0 : parseDimension(cs.borderTopWidth);
  var borderRight = svg ? 0 : parseDimension(cs.borderRightWidth);
  var borderBottom = svg ? 0 : parseDimension(cs.borderBottomWidth);
  var borderLeft = svg ? 0 : parseDimension(cs.borderLeftWidth);
  var horizontalPadding = paddingLeft + paddingRight;
  var verticalPadding = paddingTop + paddingBottom;
  var horizontalBorderArea = borderLeft + borderRight;
  var verticalBorderArea = borderTop + borderBottom;
  var horizontalScrollbarThickness = !canScrollHorizontally ? 0 : target.offsetHeight - verticalBorderArea - target.clientHeight;
  var verticalScrollbarThickness = !canScrollVertically ? 0 : target.offsetWidth - horizontalBorderArea - target.clientWidth;
  var widthReduction = removePadding ? horizontalPadding + horizontalBorderArea : 0;
  var heightReduction = removePadding ? verticalPadding + verticalBorderArea : 0;
  var contentWidth = svg ? svg.width : parseDimension(cs.width) - widthReduction - verticalScrollbarThickness;
  var contentHeight = svg ? svg.height : parseDimension(cs.height) - heightReduction - horizontalScrollbarThickness;
  var borderBoxWidth = contentWidth + horizontalPadding + verticalScrollbarThickness + horizontalBorderArea;
  var borderBoxHeight = contentHeight + verticalPadding + horizontalScrollbarThickness + verticalBorderArea;
  var boxes = freeze({
    devicePixelContentBoxSize: size(Math.round(contentWidth * devicePixelRatio), Math.round(contentHeight * devicePixelRatio), switchSizes),
    borderBoxSize: size(borderBoxWidth, borderBoxHeight, switchSizes),
    contentBoxSize: size(contentWidth, contentHeight, switchSizes),
    contentRect: new DOMRectReadOnly(paddingLeft, paddingTop, contentWidth, contentHeight)
  });
  cache.set(target, boxes);
  return boxes;
};
var calculateBoxSize = function(target, observedBox, forceRecalculation) {
  var _a = calculateBoxSizes(target, forceRecalculation), borderBoxSize = _a.borderBoxSize, contentBoxSize = _a.contentBoxSize, devicePixelContentBoxSize = _a.devicePixelContentBoxSize;
  switch (observedBox) {
    case ResizeObserverBoxOptions.DEVICE_PIXEL_CONTENT_BOX:
      return devicePixelContentBoxSize;
    case ResizeObserverBoxOptions.BORDER_BOX:
      return borderBoxSize;
    default:
      return contentBoxSize;
  }
};

// ../../node_modules/.pnpm/@juggle+resize-observer@3.4.0/node_modules/@juggle/resize-observer/lib/ResizeObserverEntry.js
var ResizeObserverEntry = /* @__PURE__ */ function() {
  function ResizeObserverEntry2(target) {
    var boxes = calculateBoxSizes(target);
    this.target = target;
    this.contentRect = boxes.contentRect;
    this.borderBoxSize = freeze([boxes.borderBoxSize]);
    this.contentBoxSize = freeze([boxes.contentBoxSize]);
    this.devicePixelContentBoxSize = freeze([boxes.devicePixelContentBoxSize]);
  }
  return ResizeObserverEntry2;
}();

// ../../node_modules/.pnpm/@juggle+resize-observer@3.4.0/node_modules/@juggle/resize-observer/lib/algorithms/calculateDepthForNode.js
var calculateDepthForNode = function(node) {
  if (isHidden(node)) {
    return Infinity;
  }
  var depth = 0;
  var parent = node.parentNode;
  while (parent) {
    depth += 1;
    parent = parent.parentNode;
  }
  return depth;
};

// ../../node_modules/.pnpm/@juggle+resize-observer@3.4.0/node_modules/@juggle/resize-observer/lib/algorithms/broadcastActiveObservations.js
var broadcastActiveObservations = function() {
  var shallowestDepth = Infinity;
  var callbacks2 = [];
  resizeObservers.forEach(function processObserver(ro) {
    if (ro.activeTargets.length === 0) {
      return;
    }
    var entries = [];
    ro.activeTargets.forEach(function processTarget(ot) {
      var entry = new ResizeObserverEntry(ot.target);
      var targetDepth = calculateDepthForNode(ot.target);
      entries.push(entry);
      ot.lastReportedSize = calculateBoxSize(ot.target, ot.observedBox);
      if (targetDepth < shallowestDepth) {
        shallowestDepth = targetDepth;
      }
    });
    callbacks2.push(function resizeObserverCallback() {
      ro.callback.call(ro.observer, entries, ro.observer);
    });
    ro.activeTargets.splice(0, ro.activeTargets.length);
  });
  for (var _i = 0, callbacks_1 = callbacks2; _i < callbacks_1.length; _i++) {
    var callback = callbacks_1[_i];
    callback();
  }
  return shallowestDepth;
};

// ../../node_modules/.pnpm/@juggle+resize-observer@3.4.0/node_modules/@juggle/resize-observer/lib/algorithms/gatherActiveObservationsAtDepth.js
var gatherActiveObservationsAtDepth = function(depth) {
  resizeObservers.forEach(function processObserver(ro) {
    ro.activeTargets.splice(0, ro.activeTargets.length);
    ro.skippedTargets.splice(0, ro.skippedTargets.length);
    ro.observationTargets.forEach(function processTarget(ot) {
      if (ot.isActive()) {
        if (calculateDepthForNode(ot.target) > depth) {
          ro.activeTargets.push(ot);
        } else {
          ro.skippedTargets.push(ot);
        }
      }
    });
  });
};

// ../../node_modules/.pnpm/@juggle+resize-observer@3.4.0/node_modules/@juggle/resize-observer/lib/utils/process.js
var process = function() {
  var depth = 0;
  gatherActiveObservationsAtDepth(depth);
  while (hasActiveObservations()) {
    depth = broadcastActiveObservations();
    gatherActiveObservationsAtDepth(depth);
  }
  if (hasSkippedObservations()) {
    deliverResizeLoopError();
  }
  return depth > 0;
};

// ../../node_modules/.pnpm/@juggle+resize-observer@3.4.0/node_modules/@juggle/resize-observer/lib/utils/queueMicroTask.js
var trigger;
var callbacks = [];
var notify = function() {
  return callbacks.splice(0).forEach(function(cb) {
    return cb();
  });
};
var queueMicroTask = function(callback) {
  if (!trigger) {
    var toggle_1 = 0;
    var el_1 = document.createTextNode("");
    var config = { characterData: true };
    new MutationObserver(function() {
      return notify();
    }).observe(el_1, config);
    trigger = function() {
      el_1.textContent = "".concat(toggle_1 ? toggle_1-- : toggle_1++);
    };
  }
  callbacks.push(callback);
  trigger();
};

// ../../node_modules/.pnpm/@juggle+resize-observer@3.4.0/node_modules/@juggle/resize-observer/lib/utils/queueResizeObserver.js
var queueResizeObserver = function(cb) {
  queueMicroTask(function ResizeObserver3() {
    requestAnimationFrame(cb);
  });
};

// ../../node_modules/.pnpm/@juggle+resize-observer@3.4.0/node_modules/@juggle/resize-observer/lib/utils/scheduler.js
var watching = 0;
var isWatching = function() {
  return !!watching;
};
var CATCH_PERIOD = 250;
var observerConfig = { attributes: true, characterData: true, childList: true, subtree: true };
var events = [
  "resize",
  "load",
  "transitionend",
  "animationend",
  "animationstart",
  "animationiteration",
  "keyup",
  "keydown",
  "mouseup",
  "mousedown",
  "mouseover",
  "mouseout",
  "blur",
  "focus"
];
var time = function(timeout) {
  if (timeout === void 0) {
    timeout = 0;
  }
  return Date.now() + timeout;
};
var scheduled = false;
var Scheduler = function() {
  function Scheduler2() {
    var _this = this;
    this.stopped = true;
    this.listener = function() {
      return _this.schedule();
    };
  }
  Scheduler2.prototype.run = function(timeout) {
    var _this = this;
    if (timeout === void 0) {
      timeout = CATCH_PERIOD;
    }
    if (scheduled) {
      return;
    }
    scheduled = true;
    var until = time(timeout);
    queueResizeObserver(function() {
      var elementsHaveResized = false;
      try {
        elementsHaveResized = process();
      } finally {
        scheduled = false;
        timeout = until - time();
        if (!isWatching()) {
          return;
        }
        if (elementsHaveResized) {
          _this.run(1e3);
        } else if (timeout > 0) {
          _this.run(timeout);
        } else {
          _this.start();
        }
      }
    });
  };
  Scheduler2.prototype.schedule = function() {
    this.stop();
    this.run();
  };
  Scheduler2.prototype.observe = function() {
    var _this = this;
    var cb = function() {
      return _this.observer && _this.observer.observe(document.body, observerConfig);
    };
    document.body ? cb() : global.addEventListener("DOMContentLoaded", cb);
  };
  Scheduler2.prototype.start = function() {
    var _this = this;
    if (this.stopped) {
      this.stopped = false;
      this.observer = new MutationObserver(this.listener);
      this.observe();
      events.forEach(function(name) {
        return global.addEventListener(name, _this.listener, true);
      });
    }
  };
  Scheduler2.prototype.stop = function() {
    var _this = this;
    if (!this.stopped) {
      this.observer && this.observer.disconnect();
      events.forEach(function(name) {
        return global.removeEventListener(name, _this.listener, true);
      });
      this.stopped = true;
    }
  };
  return Scheduler2;
}();
var scheduler = new Scheduler();
var updateCount = function(n2) {
  !watching && n2 > 0 && scheduler.start();
  watching += n2;
  !watching && scheduler.stop();
};

// ../../node_modules/.pnpm/@juggle+resize-observer@3.4.0/node_modules/@juggle/resize-observer/lib/ResizeObservation.js
var skipNotifyOnElement = function(target) {
  return !isSVG(target) && !isReplacedElement(target) && getComputedStyle(target).display === "inline";
};
var ResizeObservation = function() {
  function ResizeObservation2(target, observedBox) {
    this.target = target;
    this.observedBox = observedBox || ResizeObserverBoxOptions.CONTENT_BOX;
    this.lastReportedSize = {
      inlineSize: 0,
      blockSize: 0
    };
  }
  ResizeObservation2.prototype.isActive = function() {
    var size2 = calculateBoxSize(this.target, this.observedBox, true);
    if (skipNotifyOnElement(this.target)) {
      this.lastReportedSize = size2;
    }
    if (this.lastReportedSize.inlineSize !== size2.inlineSize || this.lastReportedSize.blockSize !== size2.blockSize) {
      return true;
    }
    return false;
  };
  return ResizeObservation2;
}();

// ../../node_modules/.pnpm/@juggle+resize-observer@3.4.0/node_modules/@juggle/resize-observer/lib/ResizeObserverDetail.js
var ResizeObserverDetail = /* @__PURE__ */ function() {
  function ResizeObserverDetail2(resizeObserver, callback) {
    this.activeTargets = [];
    this.skippedTargets = [];
    this.observationTargets = [];
    this.observer = resizeObserver;
    this.callback = callback;
  }
  return ResizeObserverDetail2;
}();

// ../../node_modules/.pnpm/@juggle+resize-observer@3.4.0/node_modules/@juggle/resize-observer/lib/ResizeObserverController.js
var observerMap2 = /* @__PURE__ */ new WeakMap();
var getObservationIndex = function(observationTargets, target) {
  for (var i2 = 0; i2 < observationTargets.length; i2 += 1) {
    if (observationTargets[i2].target === target) {
      return i2;
    }
  }
  return -1;
};
var ResizeObserverController = function() {
  function ResizeObserverController2() {
  }
  ResizeObserverController2.connect = function(resizeObserver, callback) {
    var detail = new ResizeObserverDetail(resizeObserver, callback);
    observerMap2.set(resizeObserver, detail);
  };
  ResizeObserverController2.observe = function(resizeObserver, target, options) {
    var detail = observerMap2.get(resizeObserver);
    var firstObservation = detail.observationTargets.length === 0;
    if (getObservationIndex(detail.observationTargets, target) < 0) {
      firstObservation && resizeObservers.push(detail);
      detail.observationTargets.push(new ResizeObservation(target, options && options.box));
      updateCount(1);
      scheduler.schedule();
    }
  };
  ResizeObserverController2.unobserve = function(resizeObserver, target) {
    var detail = observerMap2.get(resizeObserver);
    var index = getObservationIndex(detail.observationTargets, target);
    var lastObservation = detail.observationTargets.length === 1;
    if (index >= 0) {
      lastObservation && resizeObservers.splice(resizeObservers.indexOf(detail), 1);
      detail.observationTargets.splice(index, 1);
      updateCount(-1);
    }
  };
  ResizeObserverController2.disconnect = function(resizeObserver) {
    var _this = this;
    var detail = observerMap2.get(resizeObserver);
    detail.observationTargets.slice().forEach(function(ot) {
      return _this.unobserve(resizeObserver, ot.target);
    });
    detail.activeTargets.splice(0, detail.activeTargets.length);
  };
  return ResizeObserverController2;
}();

// ../../node_modules/.pnpm/@juggle+resize-observer@3.4.0/node_modules/@juggle/resize-observer/lib/ResizeObserver.js
var ResizeObserver2 = function() {
  function ResizeObserver3(callback) {
    if (arguments.length === 0) {
      throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
    }
    if (typeof callback !== "function") {
      throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
    }
    ResizeObserverController.connect(this, callback);
  }
  ResizeObserver3.prototype.observe = function(target, options) {
    if (arguments.length === 0) {
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
    }
    if (!isElement(target)) {
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
    }
    ResizeObserverController.observe(this, target, options);
  };
  ResizeObserver3.prototype.unobserve = function(target) {
    if (arguments.length === 0) {
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
    }
    if (!isElement(target)) {
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
    }
    ResizeObserverController.unobserve(this, target);
  };
  ResizeObserver3.prototype.disconnect = function() {
    ResizeObserverController.disconnect(this);
  };
  ResizeObserver3.toString = function() {
    return "function ResizeObserver () { [polyfill code] }";
  };
  return ResizeObserver3;
}();

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/components/hoc/withMeasuredSize.js
import React11, { useEffect as useEffect13 } from "react";

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/modules/useForceUpdate.js
import React10 from "react";
function useForceUpdate() {
  const [_, setForcedRenderCount] = React10.useState(0);
  return React10.useCallback(() => setForcedRenderCount((v) => v + 1), []);
}

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/useIsomorphicLayoutEffect.js
import { useEffect as useEffect12, useLayoutEffect } from "react";
var useIsomorphicLayoutEffect = typeof document !== "undefined" ? useLayoutEffect : useEffect12;

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/utils/environment.js
import process2 from "process";

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/utils/safeWindow.js
var mockWindow = {
  addEventListener: () => {
  },
  removeEventListener: () => {
  },
  dispatchEvent: () => false,
  ResizeObserver: void 0,
  onpointerdown: false,
  onpointermove: false,
  onpointerup: false,
  ontouchstart: false,
  ontouchmove: false,
  ontouchend: false,
  onmousedown: false,
  onmousemove: false,
  onmouseup: false,
  devicePixelRatio: 1,
  scrollX: 0,
  scrollY: 0,
  location: {
    href: ""
  },
  setTimeout: () => 0,
  clearTimeout: () => {
  },
  setInterval: () => 0,
  clearInterval: () => {
  },
  requestAnimationFrame: () => 0,
  cancelAnimationFrame: () => {
  },
  getSelection: () => null,
  matchMedia: (query) => {
    return {
      matches: false,
      media: query,
      onchange: () => {
      },
      addEventListener: () => {
      },
      removeEventListener: () => {
      },
      addListener: () => {
      },
      removeListener: () => {
      },
      dispatchEvent: () => false
    };
  },
  innerHeight: 0,
  SVGSVGElement: {}
};
var safeWindow = typeof window === "undefined" ? mockWindow : window;

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/utils/safeNavigator.js
var safeNavigator = typeof navigator !== "undefined" ? navigator : void 0;

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/utils/environment.js
var isBrowser = () => typeof document === "object";
var safariVersion = () => {
  let version = -1;
  const regexp = /Version\/([\d.]+)/;
  const result = safeNavigator && regexp.exec(safeNavigator.userAgent);
  if (result && result[1]) {
    version = parseFloat(result[1]);
  }
  return version;
};
var isChrome = () => safeNavigator && /Chrome/.test(safeNavigator.userAgent) && /Google Inc/.test(safeNavigator.vendor) && !isEdge();
var isSafari = () => safeNavigator && /Safari/.test(safeNavigator.userAgent) && /Apple Computer/.test(safeNavigator.vendor);
var isFramerX = () => safeNavigator && /FramerX/.test(safeNavigator.userAgent);
var isEdge = () => safeNavigator && /Edg\//.test(safeNavigator.userAgent);
var isAndroid = () => safeNavigator && /(android)/i.test(safeNavigator.userAgent);
var isIOS = () => safeNavigator && /(iPhone|iPod|iPad)/i.test(safeNavigator.platform);
var isMacOS = () => safeNavigator && /Mac/.test(safeNavigator.platform);
var isWindows = () => safeNavigator && /Win/.test(safeNavigator.platform);
var isTouch2 = () => safeWindow.ontouchstart === null && safeWindow.ontouchmove === null && safeWindow.ontouchend === null;
var isTest = () => process2.env.NODE_ENV === "test";
var deviceOS = () => {
  if (isMacOS())
    return "macos";
  if (isIOS())
    return "ios";
  if (isAndroid())
    return "android";
  if (isWindows())
    return "windows";
};
var deviceFont = (os) => {
  if (!os) {
    os = deviceOS();
  }
  const fonts = {
    apple: "-apple-system, BlinkMacSystemFont, SF Pro Text, SF UI Text, Helvetica Neue",
    google: "Roboto, Helvetica Neue",
    microsoft: "Segoe UI, Helvetica Neue"
  };
  if (os === "macos")
    return fonts.apple;
  if (os === "ios")
    return fonts.apple;
  if (os === "android")
    return fonts.google;
  if (os === "windows")
    return fonts.microsoft;
  return fonts.apple;
};

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/components/hoc/withMeasuredSize.js
var DEFAULT_SIZE = 200;
var _sharedResizeObserver, _callbacks;
var SharedObserver = class {
  constructor() {
    __privateAdd(this, _sharedResizeObserver);
    __privateAdd(this, _callbacks, /* @__PURE__ */ new WeakMap());
    var _a;
    const ResizeObserver3 = (_a = safeWindow.ResizeObserver) != null ? _a : ResizeObserver2;
    __privateSet(this, _sharedResizeObserver, new ResizeObserver3(this.updateResizedElements.bind(this)));
  }
  updateResizedElements(entries) {
    for (const entry of entries) {
      const callbackForElement = __privateGet(this, _callbacks).get(entry.target);
      if (callbackForElement)
        callbackForElement(entry.contentRect);
    }
  }
  observeElementWithCallback(element, callback) {
    __privateGet(this, _sharedResizeObserver).observe(element);
    __privateGet(this, _callbacks).set(element, callback);
  }
  unobserve(element) {
    __privateGet(this, _sharedResizeObserver).unobserve(element);
    __privateGet(this, _callbacks).delete(element);
  }
};
_sharedResizeObserver = new WeakMap();
_callbacks = new WeakMap();
var sharedResizeObserver = isBrowser() ? new SharedObserver() : void 0;
function useMeasuredSize(ref) {
  const forceUpdate = useForceUpdate();
  const size2 = React11.useRef(null);
  function updateSize(newSize) {
    if (newSize.width === 0 && newSize.height === 0)
      return;
    if (!size2.current || newSize.height !== size2.current.height || newSize.width !== size2.current.width) {
      size2.current = { width: newSize.width, height: newSize.height };
      forceUpdate();
    }
  }
  useIsomorphicLayoutEffect(() => {
    if (!ref.current)
      return;
    const { offsetWidth, offsetHeight } = ref.current;
    updateSize({
      width: offsetWidth,
      height: offsetHeight
    });
    sharedResizeObserver.observeElementWithCallback(ref.current, updateSize);
    return () => {
      if (!ref.current)
        return;
      sharedResizeObserver.unobserve(ref.current);
    };
  }, []);
  return size2.current;
}
var SIZE_COMPATIBILITY_WRAPPER_ATTRIBUTE = "data-framer-size-compatibility-wrapper";
var withMeasuredSize = (Component6) => (props) => {
  var _a, _b, _c, _d;
  const ref = React11.useRef(null);
  const size2 = useMeasuredSize(ref);
  const dataProps = { [SIZE_COMPATIBILITY_WRAPPER_ATTRIBUTE]: true };
  const shouldRender = Boolean(size2);
  const fallbackWidth = (_a = props.width) != null ? _a : DEFAULT_SIZE;
  const fallbackHeight = (_b = props.height) != null ? _b : DEFAULT_SIZE;
  return React11.createElement("div", __spreadValues({ style: { width: "100%", height: "100%", pointerEvents: "none" }, ref }, dataProps), shouldRender && React11.createElement(Component6, __spreadProps(__spreadValues({}, props), { width: (_c = size2 == null ? void 0 : size2.width) != null ? _c : fallbackWidth, height: (_d = size2 == null ? void 0 : size2.height) != null ? _d : fallbackHeight })));
};

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/components/NavigationContainerContext.js
import React12, { useContext } from "react";
var NavigationContainerContext = React12.createContext(true);
function useIsInCurrentNavigationTarget() {
  const isInCurrentNavigationTarget = useContext(NavigationContainerContext);
  return isInCurrentNavigationTarget;
}

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/components/Page/EmulatedPage.js
import { animate, animateValue, motionValue, useMotionValue } from "framer-motion";
import process4 from "process";
import React25 from "react";

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/render/presentation/Frame/FrameWithMotion.js
import { isValidMotionProp, motion as motion5, resolveMotionValue } from "framer-motion";
import process3 from "process";
import React19, { forwardRef, useContext as useContext5, useRef as useRef7 } from "react";

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/utils/isPropValid.js
function memoize(fn) {
  const cache3 = /* @__PURE__ */ Object.create(null);
  return (arg) => {
    if (cache3[arg] === void 0)
      cache3[arg] = fn(arg);
    return cache3[arg];
  };
}
var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/;
var isPropValid = /* @__PURE__ */ memoize(
  (prop) => reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111 && prop.charCodeAt(1) === 110 && prop.charCodeAt(2) < 91
  /* Z+1 */
);

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/render/style/BackgroundImageComponent.js
import { motion as motion3 } from "framer-motion";
import React13 from "react";

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/utils/warnOnce.js
var warningMessages = /* @__PURE__ */ new Set();
function warnOnce(keyMessage, ...rest) {
  if (warningMessages.has(keyMessage))
    return;
  warningMessages.add(keyMessage);
  console.warn(keyMessage, ...rest);
}

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/utils/runtimeInjection.js
var mockWithWarning = (message) => {
  return () => {
    warnOnce(message);
  };
};
var implementation = {
  // We need a default implementation for useImageSource and useImageElement as it is used for rendering image backgrounds which would break otherwise.
  // The default value is used for HTML export and when using the library without Framer.
  useImageSource(image) {
    var _a;
    return (_a = image.src) != null ? _a : "";
  },
  useImageElement(image, rect, nodeId) {
    const element = new Image();
    element.src = runtime.useImageSource(image, rect, nodeId);
    if (image.srcSet)
      element.srcset = image.srcSet;
    return element;
  }
};
var isRuntimeInjected = false;
var runtimeProxy = {
  get(target, key3, reciever) {
    if (Reflect.has(target, key3)) {
      return Reflect.get(target, key3, reciever);
    }
    if (isRuntimeInjected) {
      return mockWithWarning(`${String(key3)} is not available in this version of Framer.`);
    } else {
      return mockWithWarning(`${String(key3)} is only available inside of Framer. https://www.framer.com/`);
    }
  }
};
var runtime = new Proxy(implementation, runtimeProxy);

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/utils/utils.js
function isFunction(value) {
  return typeof value === "function";
}
function isBoolean(value) {
  return typeof value === "boolean";
}
function isString(value) {
  return typeof value === "string";
}
function isNumber(value) {
  return typeof value === "number" && Number.isFinite(value);
}
function isArray(value) {
  return Array.isArray(value);
}
function isObject(value) {
  return value !== null && typeof value === "object" && !isArray(value);
}
function isUndefined(value) {
  return typeof value === "undefined";
}
function isValidDate(value) {
  return value instanceof Date && !isNaN(value.getTime());
}

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/render/types/RenderEnvironment.js
var RenderTarget;
(function(RenderTarget2) {
  RenderTarget2["canvas"] = "CANVAS";
  RenderTarget2["export"] = "EXPORT";
  RenderTarget2["thumbnail"] = "THUMBNAIL";
  RenderTarget2["preview"] = "PREVIEW";
})(RenderTarget || (RenderTarget = {}));
var RenderEnvironment = {
  imageBaseURL: "",
  target: RenderTarget.preview,
  zoom: 1
};
(function(RenderTarget2) {
  function current() {
    return RenderEnvironment.target;
  }
  RenderTarget2.current = current;
  function hasRestrictions() {
    const target = RenderEnvironment.target;
    if (target === RenderTarget2.canvas)
      return true;
    if (target === RenderTarget2.export)
      return true;
    return false;
  }
  RenderTarget2.hasRestrictions = hasRestrictions;
})(RenderTarget || (RenderTarget = {}));

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/render/utils/imageRendering.js
function minZoomForPixelatedImageRendering(image, containerSize, devicePixelRatio2 = 1) {
  var _a, _b, _c, _d;
  let { width: frameWidth, height: frameHeight } = containerSize;
  const imageWidth = (_b = (_a = image.pixelWidth) != null ? _a : image.intrinsicWidth) != null ? _b : 0;
  const imageHeight = (_d = (_c = image.pixelHeight) != null ? _c : image.intrinsicHeight) != null ? _d : 0;
  if (frameWidth < 1 || frameHeight < 1 || imageWidth < 1 || imageHeight < 1) {
    return void 0;
  }
  frameWidth *= devicePixelRatio2;
  frameHeight *= devicePixelRatio2;
  const frameAspectRatio = frameWidth / frameHeight;
  const imageAspectRatio = imageWidth / imageHeight;
  switch (image.fit) {
    case "fill":
      if (imageAspectRatio > frameAspectRatio) {
        return imageHeight / frameHeight;
      } else {
        return imageWidth / frameWidth;
      }
    case "fit":
    case "stretch":
      return Math.max(imageWidth / frameWidth, imageHeight / frameHeight);
  }
}
function imageRenderingForZoom(zoom, minPixelatedZoom) {
  if (minPixelatedZoom && Math.max(1, zoom) > minPixelatedZoom) {
    return "pixelated";
  }
  return "auto";
}

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/render/style/BackgroundImageComponent.js
var wrapperStyle = {
  position: "absolute",
  borderRadius: "inherit",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
};
var placeholderStyle = {
  backgroundSize: "16px 16px",
  backgroundImage: "repeating-linear-gradient(45deg, rgba(180, 180, 180, 0.8) 0, rgba(180, 180, 180, 0.8) 1px, rgba(255, 255, 255, 0.2) 0, rgba(255, 255, 255, 0.2) 50%)",
  border: "1px solid #c4c4c4"
};
function cssObjectFit(imageFit) {
  switch (imageFit) {
    case "fit":
      return "contain";
    case "stretch":
      return "fill";
    default:
      return "cover";
  }
}
function cssImageRendering(image, containerSize) {
  if (!containerSize)
    return "auto";
  const devicePixelRatio2 = RenderTarget.current() === RenderTarget.canvas ? safeWindow.devicePixelRatio : 1;
  const minPixelatedZoom = minZoomForPixelatedImageRendering(image, containerSize, devicePixelRatio2);
  if (RenderTarget.current() === RenderTarget.canvas) {
    return imageRenderingForZoom(1, minPixelatedZoom);
  } else {
    return imageRenderingForZoom(RenderEnvironment.zoom, minPixelatedZoom);
  }
}
function getImageStyle(image, containerSize) {
  return {
    display: "block",
    width: "100%",
    height: "100%",
    borderRadius: "inherit",
    objectPosition: "center",
    objectFit: cssObjectFit(image.fit),
    imageRendering: cssImageRendering(image, containerSize)
  };
}
function InnerImage({ image, containerSize, nodeId, alt }) {
  const wrapperRef = React13.useRef(null);
  const source = runtime.useImageSource(image, containerSize, nodeId);
  const imageStyle = getImageStyle(image, containerSize);
  const isStaticRendering = RenderTarget.current() !== RenderTarget.canvas;
  if (isStaticRendering) {
    return React13.createElement("img", {
      src: source,
      alt: alt != null ? alt : image.alt,
      // We don't need to resolve srcSet with useImageSource,
      // because these are currently only used in generated
      // components, where resolution happens during
      // code-generation.
      srcSet: image.srcSet,
      sizes: image.sizes,
      style: imageStyle,
      loading: image.loading
    });
  } else {
    const imageElement = runtime.useImageElement(image, containerSize, nodeId);
    useIsomorphicLayoutEffect(() => {
      const wrapper = wrapperRef.current;
      if (wrapper === null)
        return;
      wrapper.appendChild(imageElement);
      return () => {
        wrapper.removeChild(imageElement);
      };
    }, [imageElement]);
    Object.assign(imageElement.style, imageStyle);
    return React13.createElement("div", { ref: wrapperRef, style: { display: "contents", borderRadius: "inherit" } });
  }
}
function BackgroundImageComponent(_a) {
  var _b = _a, { layoutId, image } = _b, props = __objRest(_b, ["layoutId", "image"]);
  if (layoutId) {
    layoutId = layoutId + "-background";
  }
  const hasImage = isString(image.src);
  const hasPlaceholder = !hasImage;
  return React13.createElement(motion3.div, { layoutId, style: hasPlaceholder ? __spreadValues(__spreadValues({}, wrapperStyle), placeholderStyle) : wrapperStyle, "data-framer-background-image-wrapper": true }, hasImage && React13.createElement(InnerImage, __spreadValues({ image }, props)));
}

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/utils/deprecation.js
function deprecationWarning(removedItem, removalVersion, replacement) {
  const replacementText = replacement ? `, use ${replacement} instead` : "";
  const warningText = `Deprecation warning: ${removedItem} will be removed in version ${removalVersion}${replacementText}.`;
  warnOnce(warningText);
}

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/animation/Animatable/Observers.js
var Observers = class {
  constructor() {
    __publicField(this, "observers", /* @__PURE__ */ new Set());
    __publicField(this, "transactions", {});
  }
  add(observer) {
    this.observers.add(observer);
    let isCalled = false;
    return () => {
      if (isCalled) {
        return;
      }
      isCalled = true;
      this.remove(observer);
    };
  }
  remove(observer) {
    this.observers.delete(observer);
  }
  notify(change, transaction) {
    if (transaction) {
      const accumulatedChange = this.transactions[transaction] || change;
      accumulatedChange.value = change.value;
      this.transactions[transaction] = accumulatedChange;
    } else {
      this.callObservers(change);
    }
  }
  finishTransaction(transaction) {
    const accumulatedChange = this.transactions[transaction];
    delete this.transactions[transaction];
    return this.callObservers(accumulatedChange, transaction);
  }
  callObservers(change, transaction) {
    const finishObservers = [];
    new Set(this.observers).forEach((observer) => {
      if (typeof observer === "function") {
        observer(change, transaction);
      } else {
        observer.update(change, transaction);
        finishObservers.push(observer.finish);
      }
    });
    return finishObservers;
  }
};

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/animation/Animatable/Animatable.js
var Animatable = /* @__PURE__ */ (() => {
  function Animatable2(value) {
    deprecationWarning("Animatable()", "2.0.0", "the new animation API (https://www.framer.com/api/animation/)");
    return isAnimatable(value) ? value : new AnimatableValue(value);
  }
  Animatable2.transaction = (update) => {
    const transactionId = Math.random();
    const updatedValues = /* @__PURE__ */ new Set();
    const updater = (animatable, value) => {
      animatable.set(value, transactionId);
      updatedValues.add(animatable);
    };
    update(updater, transactionId);
    const finishObservers = [];
    updatedValues.forEach((value) => {
      finishObservers.push(...value.finishTransaction(transactionId));
    });
    finishObservers.forEach((finish) => {
      finish(transactionId);
    });
  };
  Animatable2.getNumber = (value, defaultValue = 0) => {
    return Animatable2.get(value, defaultValue);
  };
  Animatable2.get = (value, defaultValue) => {
    if (value === void 0 || value === null) {
      return defaultValue;
    }
    if (isAnimatable(value)) {
      return value.get();
    }
    return value;
  };
  Animatable2.objectToValues = (object) => {
    if (!object) {
      return object;
    }
    const result = {};
    for (const key3 in object) {
      const value = object[key3];
      if (isAnimatable(value)) {
        result[key3] = value.get();
      } else {
        result[key3] = value;
      }
    }
    return result;
  };
  return Animatable2;
})();
var onUpdateKey = "onUpdate";
var finishTransactionKey = "finishTransaction";
function isAnimatable(value) {
  return value !== null && typeof value === "object" && onUpdateKey in value && value[onUpdateKey] instanceof Function && finishTransactionKey in value && value[finishTransactionKey] instanceof Function;
}
function animatableInterpolation(value, currentInterpolation) {
  return {
    interpolate(from, to) {
      const fromValue = from.get();
      const toValue = to.get();
      const result = Animatable(fromValue);
      return (progress) => {
        const v = currentInterpolation.interpolate(fromValue, toValue)(progress);
        result.set(v);
        return result;
      };
    },
    difference(from, to) {
      const v = from.get();
      return currentInterpolation.difference(v, to.get());
    }
  };
}
var AnimatableValue = class {
  constructor(value) {
    __publicField(this, "value");
    __publicField(this, "observers", new Observers());
    this.value = value;
  }
  static interpolationFor(value, currentInterpolation) {
    if (isAnimatable(value)) {
      return animatableInterpolation(value, currentInterpolation);
    }
  }
  get() {
    return this.value;
  }
  set(value, transaction) {
    const oldValue = this.value;
    if (isAnimatable(value)) {
      value = value.get();
    }
    this.value = value;
    const change = {
      value,
      oldValue
    };
    this.observers.notify(change, transaction);
  }
  finishTransaction(transaction) {
    return this.observers.finishTransaction(transaction);
  }
  onUpdate(handler) {
    return this.observers.add(handler);
  }
};

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/render/types/BackgroundImage.js
var key = "src";
var BackgroundImage;
(function(BackgroundImage2) {
  BackgroundImage2.isImageObject = function(image) {
    if (!image || typeof image === "string")
      return false;
    return key in image;
  };
})(BackgroundImage || (BackgroundImage = {}));

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/render/style/backgroundImageFromProps.js
function applyForwardOverrides(background, props) {
  const { _forwardedOverrideId, _forwardedOverrides, id } = props;
  const forwardedOverrideId = _forwardedOverrideId != null ? _forwardedOverrideId : id;
  const src = _forwardedOverrides && forwardedOverrideId ? _forwardedOverrides[forwardedOverrideId] : void 0;
  if (src && typeof src === "string") {
    background = __spreadProps(__spreadValues({}, background), { src });
  }
  return background;
}
function backgroundImageFromProps(props) {
  const { background, image } = props;
  if (image !== void 0 && background && !BackgroundImage.isImageObject(background)) {
    return;
  }
  let backgroundImage = null;
  if (isString(image)) {
    backgroundImage = { alt: "", src: image };
  } else {
    backgroundImage = Animatable.get(background, null);
  }
  if (!BackgroundImage.isImageObject(backgroundImage)) {
    return;
  }
  return applyForwardOverrides(backgroundImage, props);
}

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/render/style/BorderComponent.js
import { motion as motion4 } from "framer-motion";
import React14 from "react";
function collectBorderStyleForProps(props, style, collapseEqualBorders = true) {
  const { borderWidth, borderStyle, borderColor } = props;
  if (!borderWidth) {
    return;
  }
  let borderTop;
  let borderBottom;
  let borderLeft;
  let borderRight;
  if (typeof borderWidth === "number") {
    borderTop = borderBottom = borderLeft = borderRight = borderWidth;
  } else {
    borderTop = borderWidth.top || 0;
    borderBottom = borderWidth.bottom || 0;
    borderLeft = borderWidth.left || 0;
    borderRight = borderWidth.right || 0;
  }
  if (borderTop === 0 && borderBottom === 0 && borderLeft === 0 && borderRight === 0) {
    return;
  }
  if (collapseEqualBorders && borderTop === borderBottom && borderTop === borderLeft && borderTop === borderRight) {
    style.border = `${borderTop}px ${borderStyle} ${borderColor}`;
    return;
  }
  style.borderStyle = props.borderStyle;
  style.borderColor = props.borderColor;
  style.borderTopWidth = `${borderTop}px`;
  style.borderBottomWidth = `${borderBottom}px`;
  style.borderLeftWidth = `${borderLeft}px`;
  style.borderRightWidth = `${borderRight}px`;
}
function Border(props) {
  const layoutId = props.layoutId ? `${props.layoutId}-border` : void 0;
  if (!props.borderWidth) {
    return null;
  }
  const style = {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    borderRadius: "inherit",
    pointerEvents: "none"
  };
  if (props.border) {
    ;
    style.border = props.border;
    return React14.createElement(motion4.div, { style });
  }
  collectBorderStyleForProps(props, style, false);
  return React14.createElement(motion4.div, { "data-frame-border": true, style, layoutId });
}

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/utils/assert.js
function assert(condition, ...msg2) {
  var _a, _b;
  if (condition)
    return;
  const e2 = Error("Assertion Error" + (msg2.length > 0 ? ": " + msg2.join(" ") : ""));
  if (e2.stack) {
    try {
      const lines = e2.stack.split("\n");
      if ((_a = lines[1]) == null ? void 0 : _a.includes("assert")) {
        lines.splice(1, 1);
        e2.stack = lines.join("\n");
      } else if ((_b = lines[0]) == null ? void 0 : _b.includes("assert")) {
        lines.splice(0, 1);
        e2.stack = lines.join("\n");
      }
    } catch (e3) {
    }
  }
  throw e2;
}
function assertNever(x, error) {
  throw error || new Error(x ? `Unexpected value: ${x}` : "Application entered invalid state");
}

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/utils/type-guards.js
function isEmpty(obj) {
  return !obj || !Object.keys(obj).length && obj.constructor === Object;
}
function isReactElement(test) {
  return typeof test !== "string" && typeof test !== "number";
}
function isReactChild(test) {
  return test !== null && typeof test !== "undefined" && typeof test !== "boolean" && !isEmpty(test);
}

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/render/utils/isFiniteNumber.js
function isFiniteNumber(value) {
  return typeof value === "number" && isFinite(value);
}

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/render/utils/roundedNumber.js
function roundedNumber(value, decimals) {
  const d = Math.round(Math.abs(decimals));
  const multiplier = Math.pow(10, d);
  return Math.round(value * multiplier) / multiplier;
}
function roundedNumberString(value, decimals) {
  const result = value.toFixed(decimals);
  if (decimals === 0) {
    return result;
  }
  return result.replace(/\.?0+$/, "");
}
function roundWithOffset(value, offset) {
  if (offset === 0) {
    return Math.round(value);
  }
  offset -= offset | 0;
  if (offset < 0) {
    offset = 1 - offset;
  }
  return Math.round(value - offset) + offset;
}

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/render/types/Point.js
function Point(x, y) {
  return { x, y };
}
(function(Point2) {
  Point2.add = (...args) => {
    return args.reduce((previousValue, currentValue) => {
      return { x: previousValue.x + currentValue.x, y: previousValue.y + currentValue.y };
    }, { x: 0, y: 0 });
  };
  Point2.subtract = (a2, b) => {
    return { x: a2.x - b.x, y: a2.y - b.y };
  };
  Point2.multiply = (a2, b) => {
    return { x: a2.x * b, y: a2.y * b };
  };
  Point2.divide = (a2, b) => {
    return { x: a2.x / b, y: a2.y / b };
  };
  Point2.absolute = (point) => {
    return {
      x: Math.abs(point.x),
      y: Math.abs(point.y)
    };
  };
  Point2.reverse = (point) => {
    return {
      x: point.x * -1,
      y: point.y * -1
    };
  };
  Point2.pixelAligned = (point, offset = { x: 0, y: 0 }) => {
    return {
      x: roundWithOffset(point.x, offset.x),
      y: roundWithOffset(point.y, offset.y)
    };
  };
  Point2.distance = (a2, b) => {
    const deltaX = Math.abs(a2.x - b.x);
    const deltaY = Math.abs(a2.y - b.y);
    return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
  };
  Point2.angle = (a2, b) => {
    return Math.atan2(b.y - a2.y, b.x - a2.x) * 180 / Math.PI - 90;
  };
  Point2.isEqual = (a2, b) => {
    return a2.x === b.x && a2.y === b.y;
  };
  Point2.rotationNormalizer = () => {
    let lastValue;
    return (value) => {
      if (typeof lastValue !== "number") {
        lastValue = value;
      }
      const diff = lastValue - value;
      const maxDiff = Math.abs(diff) + 180;
      const nTimes = Math.floor(maxDiff / 360);
      if (diff < 180) {
        value -= nTimes * 360;
      }
      if (diff > 180) {
        value += nTimes * 360;
      }
      lastValue = value;
      return value;
    };
  };
  function center(a2, b) {
    return {
      x: (a2.x + b.x) / 2,
      y: (a2.y + b.y) / 2
    };
  }
  Point2.center = center;
})(Point || (Point = {}));

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/render/types/Rect.js
var Rect;
(function(Rect2) {
  function equals(rect, other) {
    if (rect === other)
      return true;
    if (!rect || !other)
      return false;
    return rect.x === other.x && rect.y === other.y && rect.width === other.width && rect.height === other.height;
  }
  Rect2.equals = equals;
  Rect2.atOrigin = (size2) => {
    return __spreadProps(__spreadValues({}, size2), { x: 0, y: 0 });
  };
  Rect2.fromTwoPoints = (a2, b) => {
    return {
      x: Math.min(a2.x, b.x),
      y: Math.min(a2.y, b.y),
      width: Math.abs(a2.x - b.x),
      height: Math.abs(a2.y - b.y)
    };
  };
  Rect2.fromRect = (rect) => {
    return {
      x: rect.left,
      y: rect.top,
      width: rect.right - rect.left,
      height: rect.bottom - rect.top
    };
  };
  Rect2.multiply = (rect, n2) => {
    return {
      x: rect.x * n2,
      y: rect.y * n2,
      width: rect.width * n2,
      height: rect.height * n2
    };
  };
  Rect2.divide = (rect, n2) => {
    return Rect2.multiply(rect, 1 / n2);
  };
  Rect2.offset = (rect, delta) => {
    const xOffset = typeof delta.x === "number" ? delta.x : 0;
    const yOffset = typeof delta.y === "number" ? delta.y : 0;
    return __spreadProps(__spreadValues({}, rect), {
      x: rect.x + xOffset,
      y: rect.y + yOffset
    });
  };
  function inflate(rect, value) {
    if (value === 0)
      return rect;
    const doubleValue = 2 * value;
    return {
      x: rect.x - value,
      y: rect.y - value,
      width: rect.width + doubleValue,
      height: rect.height + doubleValue
    };
  }
  Rect2.inflate = inflate;
  Rect2.pixelAligned = (rect) => {
    const x = Math.round(rect.x);
    const y = Math.round(rect.y);
    const rectMaxX = Math.round(rect.x + rect.width);
    const rectMaxY = Math.round(rect.y + rect.height);
    const width = Math.max(rectMaxX - x, 0);
    const height = Math.max(rectMaxY - y, 0);
    return { x, y, width, height };
  };
  Rect2.halfPixelAligned = (rect) => {
    const x = Math.round(rect.x * 2) / 2;
    const y = Math.round(rect.y * 2) / 2;
    const rectMaxX = Math.round((rect.x + rect.width) * 2) / 2;
    const rectMaxY = Math.round((rect.y + rect.height) * 2) / 2;
    const width = Math.max(rectMaxX - x, 1);
    const height = Math.max(rectMaxY - y, 1);
    return { x, y, width, height };
  };
  Rect2.round = (rect, decimals = 0) => {
    const x = roundedNumber(rect.x, decimals);
    const y = roundedNumber(rect.y, decimals);
    const width = roundedNumber(rect.width, decimals);
    const height = roundedNumber(rect.height, decimals);
    return { x, y, width, height };
  };
  Rect2.roundToOutside = (rect) => {
    const x = Math.floor(rect.x);
    const y = Math.floor(rect.y);
    const rectMaxX = Math.ceil(rect.x + rect.width);
    const rectMaxY = Math.ceil(rect.y + rect.height);
    const width = Math.max(rectMaxX - x, 0);
    const height = Math.max(rectMaxY - y, 0);
    return { x, y, width, height };
  };
  Rect2.minX = (rect) => {
    return rect.x;
  };
  Rect2.maxX = (rect) => {
    return rect.x + rect.width;
  };
  Rect2.minY = (rect) => {
    return rect.y;
  };
  Rect2.maxY = (rect) => {
    return rect.y + rect.height;
  };
  Rect2.positions = (rect) => {
    return {
      minX: rect.x,
      midX: rect.x + rect.width / 2,
      maxX: Rect2.maxX(rect),
      minY: rect.y,
      midY: rect.y + rect.height / 2,
      maxY: Rect2.maxY(rect)
    };
  };
  Rect2.center = (rect) => {
    return {
      x: rect.x + rect.width / 2,
      y: rect.y + rect.height / 2
    };
  };
  Rect2.fromPoints = (ps) => {
    const xValues = ps.map((point) => point.x);
    const yValues = ps.map((point) => point.y);
    const x = Math.min(...xValues);
    const y = Math.min(...yValues);
    const width = Math.max(...xValues) - x;
    const height = Math.max(...yValues) - y;
    return { x, y, width, height };
  };
  Rect2.merge = (...rect) => {
    const min = {
      x: Math.min(...rect.map(Rect2.minX)),
      y: Math.min(...rect.map(Rect2.minY))
    };
    const max = {
      x: Math.max(...rect.map(Rect2.maxX)),
      y: Math.max(...rect.map(Rect2.maxY))
    };
    return Rect2.fromTwoPoints(min, max);
  };
  Rect2.intersection = (rect1, rect2) => {
    const x = Math.max(rect1.x, rect2.x);
    const x2 = Math.min(rect1.x + rect1.width, rect2.x + rect2.width);
    const y = Math.max(rect1.y, rect2.y);
    const y2 = Math.min(rect1.y + rect1.height, rect2.y + rect2.height);
    return { x, y, width: x2 - x, height: y2 - y };
  };
  Rect2.points = (rect) => {
    return [
      { x: Rect2.minX(rect), y: Rect2.minY(rect) },
      { x: Rect2.minX(rect), y: Rect2.maxY(rect) },
      { x: Rect2.maxX(rect), y: Rect2.minY(rect) },
      { x: Rect2.maxX(rect), y: Rect2.maxY(rect) }
    ];
  };
  Rect2.transform = (rect, matrix) => {
    const { x: x1, y: y1 } = matrix.transformPoint({ x: rect.x, y: rect.y });
    const { x: x2, y: y2 } = matrix.transformPoint({ x: rect.x + rect.width, y: rect.y });
    const { x: x3, y: y3 } = matrix.transformPoint({ x: rect.x + rect.width, y: rect.y + rect.height });
    const { x: x4, y: y4 } = matrix.transformPoint({ x: rect.x, y: rect.y + rect.height });
    const x = Math.min(x1, x2, x3, x4);
    const width = Math.max(x1, x2, x3, x4) - x;
    const y = Math.min(y1, y2, y3, y4);
    const height = Math.max(y1, y2, y3, y4) - y;
    return { x, y, width, height };
  };
  Rect2.containsPoint = (rect, point) => {
    if (point.x < Rect2.minX(rect)) {
      return false;
    }
    if (point.x > Rect2.maxX(rect)) {
      return false;
    }
    if (point.y < Rect2.minY(rect)) {
      return false;
    }
    if (point.y > Rect2.maxY(rect)) {
      return false;
    }
    if (isNaN(rect.x)) {
      return false;
    }
    if (isNaN(rect.y)) {
      return false;
    }
    return true;
  };
  Rect2.containsRect = (rectA, rectB) => {
    for (const point of Rect2.points(rectB)) {
      if (!Rect2.containsPoint(rectA, point)) {
        return false;
      }
    }
    return true;
  };
  Rect2.toCSS = (rect) => {
    return {
      display: "block",
      transform: `translate(${rect.x}px, ${rect.y}px)`,
      width: `${rect.width}px`,
      height: `${rect.height}px`
    };
  };
  Rect2.inset = (rect, n2) => {
    return {
      x: rect.x + n2,
      y: rect.y + n2,
      width: Math.max(0, rect.width - 2 * n2),
      height: Math.max(0, rect.height - 2 * n2)
    };
  };
  Rect2.intersects = (rectA, rectB) => {
    return !(rectB.x >= Rect2.maxX(rectA) || Rect2.maxX(rectB) <= rectA.x || rectB.y >= Rect2.maxY(rectA) || Rect2.maxY(rectB) <= rectA.y);
  };
  Rect2.overlapHorizontally = (rectA, rectB) => {
    const aMax = Rect2.maxX(rectA);
    const bMax = Rect2.maxX(rectB);
    return aMax > rectB.x && bMax > rectA.x;
  };
  Rect2.overlapVertically = (rectA, rectB) => {
    const aMax = Rect2.maxY(rectA);
    const bMax = Rect2.maxY(rectB);
    return aMax > rectB.y && bMax > rectA.y;
  };
  Rect2.doesNotIntersect = (rect, rects) => {
    return rects.find((comparingRect) => {
      return Rect2.intersects(comparingRect, rect);
    }) === void 0;
  };
  Rect2.isEqual = (rectA, rectB) => {
    if (rectA && rectB) {
      const { x, y, width, height } = rectA;
      return rectB.x === x && rectB.y === y && rectB.width === width && rectB.height === height;
    } else {
      return rectA === rectB;
    }
  };
  Rect2.cornerPoints = (rect) => {
    const rectMinX = rect.x;
    const rectMaxX = rect.x + rect.width;
    const rectMinY = rect.y;
    const rectMaxY = rect.y + rect.height;
    const corner1 = { x: rectMinX, y: rectMinY };
    const corner2 = { x: rectMaxX, y: rectMinY };
    const corner3 = { x: rectMaxX, y: rectMaxY };
    const corner4 = { x: rectMinX, y: rectMaxY };
    return [corner1, corner2, corner3, corner4];
  };
  Rect2.midPoints = (rect) => {
    const rectMinX = rect.x;
    const rectMidX = rect.x + rect.width / 2;
    const rectMaxX = rect.x + rect.width;
    const rectMinY = rect.y;
    const rectMidY = rect.y + rect.height / 2;
    const rectMaxY = rect.y + rect.height;
    const top = { x: rectMidX, y: rectMinY };
    const right = { x: rectMaxX, y: rectMidY };
    const bottom = { x: rectMidX, y: rectMaxY };
    const left = { x: rectMinX, y: rectMidY };
    return [top, right, bottom, left];
  };
  Rect2.pointDistance = (rect, point) => {
    let x = 0;
    let y = 0;
    if (point.x < rect.x) {
      x = rect.x - point.x;
    } else if (point.x > Rect2.maxX(rect)) {
      x = point.x - Rect2.maxX(rect);
    }
    if (point.y < rect.y) {
      y = rect.y - point.y;
    } else if (point.y > Rect2.maxY(rect)) {
      y = point.y - Rect2.maxY(rect);
    }
    return Point.distance({ x, y }, { x: 0, y: 0 });
  };
  const fromAnyDefaults = {
    x: 0,
    y: 0,
    width: 0,
    height: 0
  };
  Rect2.fromAny = (rect, defaults = fromAnyDefaults) => {
    return {
      x: rect.x || defaults.x,
      y: rect.y || defaults.y,
      width: rect.width || defaults.width,
      height: rect.height || defaults.height
    };
  };
  Rect2.withMinSize = (rect, minSize) => {
    const { width: minWidth, height: minHeight } = minSize;
    const diffX = rect.width - minWidth;
    const diffY = rect.height - minHeight;
    return {
      width: Math.max(rect.width, minWidth),
      height: Math.max(rect.height, minHeight),
      x: rect.width < minWidth ? rect.x + diffX / 2 : rect.x,
      y: rect.height < minHeight ? rect.y + diffY / 2 : rect.y
    };
  };
})(Rect || (Rect = {}));

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/render/types/Constraints.js
var DimensionType;
(function(DimensionType2) {
  DimensionType2[DimensionType2["FixedNumber"] = 0] = "FixedNumber";
  DimensionType2[DimensionType2["Percentage"] = 1] = "Percentage";
  DimensionType2[DimensionType2["Auto"] = 2] = "Auto";
  DimensionType2[DimensionType2["FractionOfFreeSpace"] = 3] = "FractionOfFreeSpace";
  DimensionType2[DimensionType2["Viewport"] = 4] = "Viewport";
})(DimensionType || (DimensionType = {}));
var ConstraintMask;
(function(ConstraintMask2) {
  ConstraintMask2.quickfix = (constraints) => {
    if (constraints.widthType === DimensionType.Auto || constraints.heightType === DimensionType.Auto) {
      constraints.aspectRatio = null;
    }
    if (isFiniteNumber(constraints.aspectRatio)) {
      if (constraints.left && constraints.right) {
        constraints.widthType = DimensionType.FixedNumber;
      }
      if (constraints.top && constraints.bottom) {
        constraints.heightType = DimensionType.FixedNumber;
      }
      if (constraints.left && constraints.right && constraints.top && constraints.bottom) {
        constraints.bottom = false;
      }
      if (constraints.widthType !== DimensionType.FixedNumber && constraints.heightType !== DimensionType.FixedNumber) {
        constraints.heightType = DimensionType.FixedNumber;
      }
    }
    if (constraints.left && constraints.right) {
      if (constraints.fixedSize || constraints.widthType === DimensionType.Auto || isFiniteNumber(constraints.maxWidth)) {
        constraints.right = false;
      }
      constraints.widthType = DimensionType.FixedNumber;
    }
    if (constraints.top && constraints.bottom) {
      if (constraints.fixedSize || constraints.heightType === DimensionType.Auto || isFiniteNumber(constraints.maxHeight)) {
        constraints.bottom = false;
      }
      constraints.heightType = DimensionType.FixedNumber;
    }
    return constraints;
  };
})(ConstraintMask || (ConstraintMask = {}));
function valueToDimensionType(value) {
  if (typeof value === "string") {
    const trimmedValue = value.trim();
    if (trimmedValue === "auto")
      return DimensionType.Auto;
    if (trimmedValue.endsWith("fr"))
      return DimensionType.FractionOfFreeSpace;
    if (trimmedValue.endsWith("%"))
      return DimensionType.Percentage;
    if (trimmedValue.endsWith("vw") || trimmedValue.endsWith("vh"))
      return DimensionType.Viewport;
  }
  return DimensionType.FixedNumber;
}
var ConstraintValues;
(function(ConstraintValues2) {
  ConstraintValues2.fromProperties = (props) => {
    const { left, right, top, bottom, width, height, centerX, centerY, aspectRatio, autoSize } = props;
    const constraints = ConstraintMask.quickfix({
      left: isFiniteNumber(left) || isAnimatable(left),
      right: isFiniteNumber(right) || isAnimatable(right),
      top: isFiniteNumber(top) || isAnimatable(top),
      bottom: isFiniteNumber(bottom) || isAnimatable(bottom),
      widthType: valueToDimensionType(width),
      heightType: valueToDimensionType(height),
      aspectRatio: aspectRatio || null,
      fixedSize: autoSize === true
    });
    let widthValue = null;
    let heightValue = null;
    let widthType = DimensionType.FixedNumber;
    let heightType = DimensionType.FixedNumber;
    if (constraints.widthType !== DimensionType.FixedNumber && typeof width === "string") {
      const parsedWidth = parseFloat(width);
      if (width.endsWith("fr")) {
        widthType = DimensionType.FractionOfFreeSpace;
        widthValue = parsedWidth;
      } else if (width === "auto") {
        widthType = DimensionType.Auto;
      } else {
        widthType = DimensionType.Percentage;
        widthValue = parsedWidth / 100;
      }
    } else if (width !== void 0 && typeof width !== "string") {
      widthValue = Animatable.getNumber(width);
    }
    if (constraints.heightType !== DimensionType.FixedNumber && typeof height === "string") {
      const parsedHeight = parseFloat(height);
      if (height.endsWith("fr")) {
        heightType = DimensionType.FractionOfFreeSpace;
        heightValue = parsedHeight;
      } else if (height === "auto") {
        heightType = DimensionType.Auto;
      } else {
        heightType = DimensionType.Percentage;
        heightValue = parseFloat(height) / 100;
      }
    } else if (height !== void 0 && typeof height !== "string") {
      heightValue = Animatable.getNumber(height);
    }
    let centerAnchorX = 0.5;
    let centerAnchorY = 0.5;
    if (centerX) {
      centerAnchorX = parseFloat(centerX) / 100;
    }
    if (centerY) {
      centerAnchorY = parseFloat(centerY) / 100;
    }
    return {
      left: constraints.left ? Animatable.getNumber(left) : null,
      right: constraints.right ? Animatable.getNumber(right) : null,
      top: constraints.top ? Animatable.getNumber(top) : null,
      bottom: constraints.bottom ? Animatable.getNumber(bottom) : null,
      widthType,
      heightType,
      width: widthValue,
      height: heightValue,
      aspectRatio: constraints.aspectRatio || null,
      centerAnchorX,
      centerAnchorY
    };
  };
  ConstraintValues2.toSize = (values, parentSizeInfo, autoSize, freeSpace) => {
    let width = null;
    let height = null;
    const parentWidth = (parentSizeInfo == null ? void 0 : parentSizeInfo.sizing) ? Animatable.getNumber(parentSizeInfo == null ? void 0 : parentSizeInfo.sizing.width) : null;
    const parentHeight = (parentSizeInfo == null ? void 0 : parentSizeInfo.sizing) ? Animatable.getNumber(parentSizeInfo == null ? void 0 : parentSizeInfo.sizing.height) : null;
    const hOpposingPinsOffset = pinnedOffset(values.left, values.right);
    if (parentWidth && isFiniteNumber(hOpposingPinsOffset)) {
      width = parentWidth - hOpposingPinsOffset;
    } else if (autoSize && values.widthType === DimensionType.Auto) {
      width = autoSize.width;
    } else if (isFiniteNumber(values.width)) {
      switch (values.widthType) {
        case DimensionType.FixedNumber:
          width = values.width;
          break;
        case DimensionType.FractionOfFreeSpace:
          width = freeSpace ? freeSpace.freeSpaceInParent.width / freeSpace.freeSpaceUnitDivisor.width * values.width : null;
          break;
        case DimensionType.Percentage:
        case DimensionType.Viewport:
          if (parentWidth) {
            width = parentWidth * values.width;
          }
          break;
        case DimensionType.Auto:
          break;
        default:
          assertNever(values.widthType);
      }
    }
    const vOpposingPinsOffset = pinnedOffset(values.top, values.bottom);
    if (parentHeight && isFiniteNumber(vOpposingPinsOffset)) {
      height = parentHeight - vOpposingPinsOffset;
    } else if (autoSize && values.heightType === DimensionType.Auto) {
      height = autoSize.height;
    } else if (isFiniteNumber(values.height)) {
      switch (values.heightType) {
        case DimensionType.FixedNumber:
          height = values.height;
          break;
        case DimensionType.FractionOfFreeSpace:
          height = freeSpace ? freeSpace.freeSpaceInParent.height / freeSpace.freeSpaceUnitDivisor.height * values.height : null;
          break;
        case DimensionType.Percentage:
        case DimensionType.Viewport:
          if (parentHeight) {
            height = parentHeight * values.height;
          }
          break;
        case DimensionType.Auto:
          break;
        default:
          assertNever(values.heightType);
      }
    }
    return sizeAfterApplyingConstraintsAndAspectRatio(width, height, values, {
      height: parentHeight != null ? parentHeight : 0,
      width: parentWidth != null ? parentWidth : 0
    }, parentSizeInfo == null ? void 0 : parentSizeInfo.viewport);
  };
  ConstraintValues2.toRect = (values, parentSizeInfo = null, autoSize = null, pixelAlign = false, freeSpace = null) => {
    var _a;
    let x = values.left || 0;
    let y = values.top || 0;
    const { width, height } = ConstraintValues2.toSize(values, parentSizeInfo, autoSize, freeSpace);
    const parentSizeForPositioning = (_a = parentSizeInfo == null ? void 0 : parentSizeInfo.positioning) != null ? _a : null;
    const positioningParentWidth = parentSizeForPositioning ? Animatable.getNumber(parentSizeForPositioning.width) : null;
    const positioningParentHeight = parentSizeForPositioning ? Animatable.getNumber(parentSizeForPositioning.height) : null;
    if (values.left !== null) {
      x = values.left;
    } else if (positioningParentWidth && values.right !== null) {
      x = positioningParentWidth - values.right - width;
    } else if (positioningParentWidth) {
      x = values.centerAnchorX * positioningParentWidth - width / 2;
    }
    if (values.top !== null) {
      y = values.top;
    } else if (positioningParentHeight && values.bottom !== null) {
      y = positioningParentHeight - values.bottom - height;
    } else if (positioningParentHeight) {
      y = values.centerAnchorY * positioningParentHeight - height / 2;
    }
    const f = { x, y, width, height };
    if (pixelAlign) {
      return Rect.pixelAligned(f);
    }
    return f;
  };
})(ConstraintValues || (ConstraintValues = {}));
var defaultWidth = 200;
var defaultHeight = 200;
function getConstraintValue(constraint, value, parentSize, viewport) {
  if (typeof value === "string") {
    if (value.endsWith("%") && parentSize) {
      switch (constraint) {
        case "maxWidth":
        case "minWidth":
          return parseFloat(value) / 100 * parentSize.width;
        case "maxHeight":
        case "minHeight":
          return parseFloat(value) / 100 * parentSize.height;
        default:
          break;
      }
    }
    if (value.endsWith("vh") && viewport) {
      switch (constraint) {
        case "maxWidth":
        case "minWidth":
          return parseFloat(value) / 100 * viewport.width;
        case "maxHeight":
        case "minHeight":
          return parseFloat(value) / 100 * viewport.height;
        default:
          break;
      }
    }
    return parseFloat(value);
  }
  return value;
}
function constrainHeight(height, values, parentSize, viewport) {
  if (values.minHeight) {
    height = Math.max(getConstraintValue("minHeight", values.minHeight, parentSize, viewport), height);
  }
  if (values.maxHeight) {
    height = Math.min(getConstraintValue("maxHeight", values.maxHeight, parentSize, viewport), height);
  }
  return height;
}
function constrainWidth(width, values, parentSize, viewport) {
  if (values.minWidth) {
    width = Math.max(getConstraintValue("minWidth", values.minWidth, parentSize, viewport), width);
  }
  if (values.maxWidth) {
    width = Math.min(getConstraintValue("maxWidth", values.maxWidth, parentSize, viewport), width);
  }
  return width;
}
function sizeAfterApplyingConstraintsAndAspectRatio(width, height, values, parentSize, viewport) {
  let w = constrainWidth(isFiniteNumber(width) ? width : defaultWidth, values, parentSize, viewport);
  let h = constrainHeight(isFiniteNumber(height) ? height : defaultHeight, values, parentSize, viewport);
  if (isFiniteNumber(values.aspectRatio) && values.aspectRatio > 0) {
    if (isFiniteNumber(values.left) && isFiniteNumber(values.right)) {
      h = w / values.aspectRatio;
    } else if (isFiniteNumber(values.top) && isFiniteNumber(values.bottom)) {
      w = h * values.aspectRatio;
    } else if (values.widthType !== DimensionType.FixedNumber) {
      h = w / values.aspectRatio;
    } else {
      w = h * values.aspectRatio;
    }
  }
  return {
    width: w,
    height: h
  };
}
function pinnedOffset(start, end) {
  if (!isFiniteNumber(start) || !isFiniteNumber(end))
    return null;
  return start + end;
}

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/render/types/NewConstraints.js
import React15 from "react";
function containsInvalidStringValues(props) {
  if (typeof props.right === "string")
    return true;
  if (typeof props.bottom === "string")
    return true;
  if (typeof props.left === "string" && (!props.center || props.center === "y")) {
    return true;
  }
  if (typeof props.top === "string" && (!props.center || props.center === "x")) {
    return true;
  }
  return false;
}
function constraintsEnabled(props) {
  if (!props._constraints)
    return false;
  if (containsInvalidStringValues(props))
    return false;
  return props._constraints.enabled;
}
function sizeFromFiniteNumberProps(props) {
  const { size: size2 } = props;
  let { width, height } = props;
  if (isFiniteNumber(size2)) {
    if (width === void 0) {
      width = size2;
    }
    if (height === void 0) {
      height = size2;
    }
  }
  if (isFiniteNumber(width) && isFiniteNumber(height)) {
    return {
      width,
      height
    };
  }
  return null;
}
function rectFromFiniteNumberProps(props) {
  const size2 = sizeFromFiniteNumberProps(props);
  if (size2 === null) {
    return null;
  }
  const { left, top } = props;
  if (isFiniteNumber(left) && isFiniteNumber(top)) {
    return __spreadValues({
      x: left,
      y: top
    }, size2);
  }
  return null;
}
function calculateRect(props, parentSize, pixelAlign = true) {
  if (props.positionFixed || props.positionAbsolute)
    return null;
  const parentSizeDisabled = parentSize === ParentSizeState.Disabled || parentSize === ParentSizeState.DisabledForCurrentLevel;
  if (!constraintsEnabled(props) || parentSizeDisabled) {
    return rectFromFiniteNumberProps(props);
  }
  const constraintValues = getConstraintValues(props);
  const enabledParentSize = deprecatedParentSize(parentSize);
  const parentSizeInfo = enabledParentSize ? { sizing: enabledParentSize, positioning: enabledParentSize, viewport: null } : null;
  return ConstraintValues.toRect(constraintValues, parentSizeInfo, null, pixelAlign, null);
}
function getConstraintValues(props) {
  const { left, right, top, bottom, center, _constraints, size: size2 } = props;
  let { width, height } = props;
  if (width === void 0) {
    width = size2;
  }
  if (height === void 0) {
    height = size2;
  }
  const { aspectRatio, autoSize } = _constraints;
  const constraintMask = ConstraintMask.quickfix({
    left: isFiniteNumber(left),
    right: isFiniteNumber(right),
    top: isFiniteNumber(top),
    bottom: isFiniteNumber(bottom),
    widthType: valueToDimensionType(width),
    heightType: valueToDimensionType(height),
    aspectRatio: aspectRatio || null,
    fixedSize: autoSize === true
  });
  let widthValue = null;
  let heightValue = null;
  let widthType = DimensionType.FixedNumber;
  let heightType = DimensionType.FixedNumber;
  if (constraintMask.widthType !== DimensionType.FixedNumber && typeof width === "string") {
    const parsedWidth = parseFloat(width);
    if (width.endsWith("fr")) {
      widthType = DimensionType.FractionOfFreeSpace;
      widthValue = parsedWidth;
    } else if (width === "auto") {
      widthType = DimensionType.Auto;
    } else {
      widthType = DimensionType.Percentage;
      widthValue = parsedWidth / 100;
    }
  } else if (width !== void 0 && typeof width !== "string") {
    widthValue = width;
  }
  if (constraintMask.heightType !== DimensionType.FixedNumber && typeof height === "string") {
    const parsedHeight = parseFloat(height);
    if (height.endsWith("fr")) {
      heightType = DimensionType.FractionOfFreeSpace;
      heightValue = parsedHeight;
    } else if (height === "auto") {
      heightType = DimensionType.Auto;
    } else {
      heightType = DimensionType.Percentage;
      heightValue = parseFloat(height) / 100;
    }
  } else if (height !== void 0 && typeof height !== "string") {
    heightValue = height;
  }
  let centerAnchorX = 0.5;
  let centerAnchorY = 0.5;
  if (center === true || center === "x") {
    constraintMask.left = false;
    if (typeof left === "string") {
      centerAnchorX = parseFloat(left) / 100;
    }
  }
  if (center === true || center === "y") {
    constraintMask.top = false;
    if (typeof top === "string") {
      centerAnchorY = parseFloat(top) / 100;
    }
  }
  return {
    // Because we check isFiniteNumber when creating the masks,
    // We know that left, right, top and bottom are numbers if the mask is true for the corresponding value
    // We need to cast this because typescript does not understand that
    left: constraintMask.left ? left : null,
    right: constraintMask.right ? right : null,
    top: constraintMask.top ? top : null,
    bottom: constraintMask.bottom ? bottom : null,
    widthType,
    heightType,
    width: widthValue,
    height: heightValue,
    aspectRatio: constraintMask.aspectRatio || null,
    centerAnchorX,
    centerAnchorY,
    minHeight: props.minHeight,
    maxHeight: props.maxHeight,
    minWidth: props.minWidth,
    maxWidth: props.maxWidth
  };
}
var ParentSizeState;
(function(ParentSizeState2) {
  ParentSizeState2[ParentSizeState2["Unknown"] = 0] = "Unknown";
  ParentSizeState2[ParentSizeState2["Disabled"] = 1] = "Disabled";
  ParentSizeState2[ParentSizeState2["DisabledForCurrentLevel"] = 2] = "DisabledForCurrentLevel";
})(ParentSizeState || (ParentSizeState = {}));
var ConstraintsContext = React15.createContext({
  parentSize: ParentSizeState.Unknown
});
function deprecatedParentSize(parentSize) {
  if (parentSize === ParentSizeState.Unknown || parentSize === ParentSizeState.Disabled || parentSize === ParentSizeState.DisabledForCurrentLevel) {
    return null;
  }
  return parentSize;
}
function useParentSize() {
  return React15.useContext(ConstraintsContext).parentSize;
}
function isSize(o2) {
  return typeof o2 === "object";
}
var ProvideParentSize = (props) => {
  const currentParentSize = useParentSize();
  const { parentSize, children } = props;
  const value = React15.useMemo(
    () => ({ parentSize }),
    // We are generating the memoKeys in runtime and react doesn't like it,
    // but it should be safe to ignore.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [getParentWidth(parentSize), getParentHeight(parentSize)]
  );
  if (currentParentSize === ParentSizeState.Disabled) {
    return children ? React15.createElement(React15.Fragment, null, children) : null;
  }
  return React15.createElement(ConstraintsContext.Provider, { value }, children);
};
function getParentWidth(parentSize) {
  return isSize(parentSize) ? parentSize.width : parentSize;
}
function getParentHeight(parentSize) {
  return isSize(parentSize) ? parentSize.height : parentSize;
}
var ConsumeParentSize = ConstraintsContext.Consumer;
function useProvideParentSize(node, parentSize) {
  return React15.createElement(ProvideParentSize, { parentSize }, node);
}
function useConstraints(props) {
  const parentSize = useParentSize();
  const calculatedRect = calculateRect(props, parentSize, true);
  return calculatedRect;
}

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/modules/workaroundFlexboxGapNotSupported.js
var flexboxGapNotSupportedClass = "flexbox-gap-not-supported";

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/render/utils/injectDeprecatedRichTextRules.js
var richTextStylesRule = `
[data-framer-component-type="DeprecatedRichText"] p,
[data-framer-component-type="DeprecatedRichText"] div,
[data-framer-component-type="DeprecatedRichText"] h1,
[data-framer-component-type="DeprecatedRichText"] h2,
[data-framer-component-type="DeprecatedRichText"] h3,
[data-framer-component-type="DeprecatedRichText"] h4,
[data-framer-component-type="DeprecatedRichText"] h5,
[data-framer-component-type="DeprecatedRichText"] h6,
[data-framer-component-type="DeprecatedRichText"] li,
[data-framer-component-type="DeprecatedRichText"] ol,
[data-framer-component-type="DeprecatedRichText"] ul,
[data-framer-component-type="DeprecatedRichText"] span:not([data-text-fill]) {
    font-family: var(--framer-font-family, Inter, Inter Placeholder, sans-serif);
    font-style: var(--framer-font-style, normal);
    font-weight: var(--framer-font-weight, 400);
    color: var(--framer-text-color, #000);
    font-size: var(--framer-font-size, 16px);
    letter-spacing: var(--framer-letter-spacing, 0);
    text-transform: var(--framer-text-transform, none);
    text-decoration: var(--framer-text-decoration, none);
    line-height: var(--framer-line-height, 1.2em);
    text-align: var(--framer-text-alignment, start);
}
`;
var richTextParagraphSpacingStylesRule = `
[data-framer-component-type="DeprecatedRichText"] p:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] div:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h1:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h2:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h3:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h4:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h5:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h6:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] ol:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] ul:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] .framer-image:not(:first-child) {
    margin-top: var(--framer-paragraph-spacing, 0);
}
`;
var richTextBackgroundMaskStylesRule = `
[data-framer-component-type="DeprecatedRichText"] span[data-text-fill] {
    display: inline-block;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
`;
var richTextLinkStylesRule = `
[data-framer-component-type="DeprecatedRichText"] a,
[data-framer-component-type="DeprecatedRichText"] a span:not([data-text-fill]) {
    font-family: var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
    font-style: var(--framer-link-font-style, var(--framer-font-style, normal));
    font-weight: var(--framer-link-font-weight, var(--framer-font-weight, 400));
    color: var(--framer-link-text-color, var(--framer-text-color, #000));
    font-size: var(--framer-link-font-size, var(--framer-font-size, 16px));
    text-transform: var(--framer-link-text-transform, var(--framer-text-transform, none));
    text-decoration: var(--framer-link-text-decoration, var(--framer-text-decoration, none));
}
`;
var richTextLinkHoverStylesRule = `
[data-framer-component-type="DeprecatedRichText"] a:hover,
[data-framer-component-type="DeprecatedRichText"] a:hover span:not([data-text-fill]) {
    font-family: var(--framer-link-hover-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)));
    font-style: var(--framer-link-hover-font-style, var(--framer-link-font-style, var(--framer-font-style, normal)));
    font-weight: var(--framer-link-hover-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)));
    color: var(--framer-link-hover-text-color, var(--framer-link-text-color, var(--framer-text-color, #000)));
    font-size: var(--framer-link-hover-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px)));
    text-transform: var(--framer-link-hover-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none)));
    text-decoration: var(--framer-link-hover-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none)));
}
`;
var richTextLinkCurrentStylesRule = `
a[data-framer-page-link-current],
a[data-framer-page-link-current] span:not([data-text-fill]) {
    font-family: var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)));
    font-style: var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal)));
    font-weight: var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)));
    color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000)));
    font-size: var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px)));
    text-transform: var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none)));
    text-decoration: var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none)));
}
`;
var richTextLinkCurrentHoverStylesRule = `
a[data-framer-page-link-current]:hover,
a[data-framer-page-link-current]:hover span:not([data-text-fill]) {
    font-family: var(--framer-link-hover-font-family, var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif))));
    font-style: var(--framer-link-hover-font-style, var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal))));
    font-weight: var(--framer-link-hover-font-weight, var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400))));
    color: var(--framer-link-hover-text-color, var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000))));
    font-size: var(--framer-link-hover-font-size, var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px))));
    text-transform: var(--framer-link-hover-text-transform, var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none))));
    text-decoration: var(--framer-link-hover-text-decoration, var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none))));
}
`;
var richTextBoldStylesRule = `
[data-framer-component-type="DeprecatedRichText"] strong {
    font-weight: bolder;
}
`;
var richTextItalicStylesRule = `
[data-framer-component-type="DeprecatedRichText"] em {
    font-style: italic;
}
`;
var richTextImageRule = `
[data-framer-component-type="DeprecatedRichText"] .framer-image {
    display: block;
    max-width: 100%;
    height: auto;
}
`;
var richTextBlockElementResetRule = `
[data-framer-component-type="DeprecatedRichText"] p,
[data-framer-component-type="DeprecatedRichText"] div,
[data-framer-component-type="DeprecatedRichText"] h1,
[data-framer-component-type="DeprecatedRichText"] h2,
[data-framer-component-type="DeprecatedRichText"] h3,
[data-framer-component-type="DeprecatedRichText"] h4,
[data-framer-component-type="DeprecatedRichText"] h5,
[data-framer-component-type="DeprecatedRichText"] h6 {
    margin: 0;
    padding: 0;
}
`;
var richTextStylesPresetResetRule = `
[data-framer-component-type="DeprecatedRichText"] .text-styles-preset-reset {
    --framer-font-family: Inter, Inter Placeholder, sans-serif;
    --framer-font-style: normal;
    --framer-font-weight: 500;
    --framer-text-color: #000;
    --framer-font-size: 16px;
    --framer-letter-spacing: 0;
    --framer-text-transform: none;
    --framer-text-decoration: none;
    --framer-line-height: 1.2em;
    --framer-text-alignment: start;
}
`;
var richTextStylesList = `
[data-framer-component-type="DeprecatedRichText"] ul,
[data-framer-component-type="DeprecatedRichText"] ol {
    display: table;
    width: 100%;
    padding-left: 0;
    margin: 0;
}
`;
var richTextStylesListItem = `
[data-framer-component-type="DeprecatedRichText"] li {
    display: table-row;
    counter-increment: list-item;
    list-style: none;
}
`;
var richTextStylesNumberedListMarker = `
[data-framer-component-type="DeprecatedRichText"] ol > li::before {
    display: table-cell;
    width: 2.25ch;
    box-sizing: border-box;
    padding-right: 0.75ch;
    content: counter(list-item) ".";
    white-space: nowrap;
}
`;
var richTextStylesBulletedListMarker = `
[data-framer-component-type="DeprecatedRichText"] ul > li::before {
    display: table-cell;
    width: 2.25ch;
    box-sizing: border-box;
    padding-right: 0.75ch;
    content: "\u2022";
}
`;
var deprecatedRichTextCSSRules = [
  `[data-framer-component-type="DeprecatedRichText"] { cursor: inherit; }`,
  richTextStylesPresetResetRule,
  richTextBlockElementResetRule,
  richTextStylesRule,
  richTextParagraphSpacingStylesRule,
  richTextBackgroundMaskStylesRule,
  richTextLinkStylesRule,
  richTextLinkHoverStylesRule,
  richTextLinkCurrentStylesRule,
  richTextLinkCurrentHoverStylesRule,
  richTextBoldStylesRule,
  richTextItalicStylesRule,
  richTextImageRule,
  richTextStylesList,
  richTextStylesListItem,
  richTextStylesNumberedListMarker,
  richTextStylesBulletedListMarker
];

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/render/utils/injectRichTextRules.js
var richTextCSSRules = [
  /* css */
  `
        p.framer-text,
        div.framer-text,
        h1.framer-text,
        h2.framer-text,
        h3.framer-text,
        h4.framer-text,
        h5.framer-text,
        h6.framer-text,
        ol.framer-text,
        ul.framer-text {
            margin: 0;
            padding: 0;
        }
    `,
  /* css */
  `
        p.framer-text,
        div.framer-text,
        h1.framer-text,
        h2.framer-text,
        h3.framer-text,
        h4.framer-text,
        h5.framer-text,
        h6.framer-text,
        li.framer-text,
        ol.framer-text,
        ul.framer-text,
        span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-font-family, Inter, Inter Placeholder, sans-serif);
            font-style: var(--framer-font-style, normal);
            font-weight: var(--framer-font-weight, 400);
            color: var(--framer-text-color, #000);
            font-size: calc(var(--framer-font-size, 16px) * var(--framer-font-size-scale, 1));
            letter-spacing: var(--framer-letter-spacing, 0);
            text-transform: var(--framer-text-transform, none);
            text-decoration: var(--framer-text-decoration, none);
            line-height: var(--framer-line-height, 1.2em);
            text-align: var(--framer-text-alignment, start);
        }
    `,
  /* css */
  `
        strong.framer-text {
            font-family: var(--framer-font-family-bold);
            font-style: var(--framer-font-style-bold);
            font-weight: var(--framer-font-weight-bold, bolder);
        }
    `,
  /* css */
  `
        em.framer-text {
            font-family: var(--framer-font-family-italic);
            font-style: var(--framer-font-style-italic, italic);
            font-weight: var(--framer-font-weight-italic);
        }
    `,
  /* css */
  `
        em.framer-text > strong.framer-text {
            font-family: var(--framer-font-family-bold-italic);
            font-style: var(--framer-font-style-bold-italic, italic);
            font-weight: var(--framer-font-weight-bold-italic, bolder);
        }
    `,
  /* css */
  `
        p.framer-text:not(:first-child),
        div.framer-text:not(:first-child),
        h1.framer-text:not(:first-child),
        h2.framer-text:not(:first-child),
        h3.framer-text:not(:first-child),
        h4.framer-text:not(:first-child),
        h5.framer-text:not(:first-child),
        h6.framer-text:not(:first-child),
        ol.framer-text:not(:first-child),
        ul.framer-text:not(:first-child),
        .framer-image.framer-text:not(:first-child) {
            margin-top: var(--framer-paragraph-spacing, 0);
        }
    `,
  // The first child of a list item is a paragraph. If the second child is a
  // nested list we don't want it to have paragraph spacing.
  /* css */
  `
        li.framer-text > ul.framer-text:nth-child(2),
        li.framer-text > ol.framer-text:nth-child(2) {
            margin-top: 0;
        }
    `,
  // background-clip: text clips to the physical dimensions of text as appose
  // to the rendered dimensions. normal text will bleed out side these
  // constraints but since this is just a clipping mask over the area the text
  // takes up we have cases where the text will get clipped. That is why we
  // need to expand the area that the gradient applies to to allow users to
  // use low line-heights. This will result in gradients not aligning
  // perfectly to the edges of the text. but this is a acceptable trade off at
  // this point. For now we increase the area of the clipping mask on the
  // bottom (for descenders) and the right for italic or wide fonts.
  /* css */
  `
        .framer-text[data-text-fill] {
            display: inline-block;
            background-clip: text;
            -webkit-background-clip: text;
            /* make this a transparent color if you want to visualise the clipping  */
            -webkit-text-fill-color: transparent;
            padding: max(0em, calc(calc(1.3em - var(--framer-line-height, 1.3em)) / 2));
            margin: min(0em, calc(calc(1.3em - var(--framer-line-height, 1.3em)) / -2));
        }
    `,
  /* css */
  `
        code.framer-text,
        code.framer-text span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
            font-style: var(--framer-code-font-style, var(--framer-font-style, normal));
            font-weight: var(--framer-code-font-weight, var(--framer-font-weight, 400));
            color: var(--framer-code-text-color, var(--framer-text-color, #000));
            font-size: calc(var(--framer-font-size, 16px) * var(--framer-font-size-scale, 1));
            letter-spacing: var(--framer-letter-spacing, 0);
            line-height: var(--framer-line-height, 1.2em);
        }
    `,
  /* css */
  `
        a.framer-text,
        a.framer-text span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
            font-style: var(--framer-link-font-style, var(--framer-font-style, normal));
            font-weight: var(--framer-link-font-weight, var(--framer-font-weight, 400));
            color: var(--framer-link-text-color, var(--framer-text-color, #000));
            font-size: calc(var(--framer-link-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-text-transform, var(--framer-text-transform, none));
            text-decoration: var(--framer-link-text-decoration, var(--framer-text-decoration, none));
            /* Cursor inherit to overwrite the user agent stylesheet on rich text links. */
            cursor: var(--framer-custom-cursors, pointer);
        }
    `,
  /* css */
  `
        code.framer-text a.framer-text,
        code.framer-text a.framer-text span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
            font-style: var(--framer-code-font-style, var(--framer-font-style, normal));
            font-weight: var(--framer-code-font-weight, var(--framer-font-weight, 400));
            color: var(--framer-link-text-color, var(--framer-code-text-color, var(--framer-text-color, #000)));
            font-size: calc(var(--framer-link-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
        }
    `,
  /* css */
  `
        a.framer-text:hover,
        a.framer-text:hover span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-link-hover-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)));
            font-style: var(--framer-link-hover-font-style, var(--framer-link-font-style, var(--framer-font-style, normal)));
            font-weight: var(--framer-link-hover-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)));
            color: var(--framer-link-hover-text-color, var(--framer-link-text-color, var(--framer-text-color, #000)));
            font-size: calc(var(--framer-link-hover-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px))) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-hover-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none)));
            text-decoration: var(--framer-link-hover-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none)));
        }
    `,
  /* css */
  `
        code.framer-text a.framer-text:hover,
        code.framer-text a.framer-text:hover span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
            font-style: var(--framer-code-font-style, var(--framer-font-style, normal));
            font-weight: var(--framer-code-font-weight, var(--framer-font-weight, 400));
            color: var(--framer-link-hover-text-color, var(--framer-link-text-color, var(--framer-code-text-color, var(--framer-text-color, #000))));
            font-size: calc(var(--framer-link-hover-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px))) * var(--framer-font-size-scale, 1));
        }
    `,
  /* css */
  `
        a.framer-text[data-framer-page-link-current],
        a.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)));
            font-style: var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal)));
            font-weight: var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)));
            color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000)));
            font-size: calc(var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px))) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none)));
            text-decoration: var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none)));
        }
    `,
  /* css */
  `
        code.framer-text a.framer-text[data-framer-page-link-current],
        code.framer-text a.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
            font-style: var(--framer-code-font-style, var(--framer-font-style, normal));
            font-weight: var(--framer-code-font-weight, var(--framer-font-weight, 400));
            color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-code-text-color, var(--framer-text-color, #000))));
            font-size: calc(var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px))) * var(--framer-font-size-scale, 1));
        }
    `,
  /* css */
  `
        a.framer-text[data-framer-page-link-current]:hover,
        a.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-link-hover-font-family, var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif))));
            font-style: var(--framer-link-hover-font-style, var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal))));
            font-weight: var(--framer-link-hover-font-weight, var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400))));
            color: var(--framer-link-hover-text-color, var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000))));
            font-size: calc(var(--framer-link-hover-font-size, var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px)))) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-hover-text-transform, var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none))));
            text-decoration: var(--framer-link-hover-text-decoration, var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none))));
        }
    `,
  /* css */
  `
        code.framer-text a.framer-text[data-framer-page-link-current]:hover,
        code.framer-text a.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
            font-style: var(--framer-code-font-style, var(--framer-font-style, normal));
            font-weight: var(--framer-code-font-weight, var(--framer-font-weight, 400));
            color: var(--framer-link-hover-text-color, var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-code-text-color, var(--framer-text-color, #000)))));
            font-size: calc(var(--framer-link-hover-font-size, var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px)))) * var(--framer-font-size-scale, 1));
        }
    `,
  /* css */
  `
        .framer-image.framer-text {
            display: block;
            max-width: 100%;
            height: auto;
        }
    `,
  /* css */
  `
        .text-styles-preset-reset.framer-text {
            --framer-font-family: Inter, Inter Placeholder, sans-serif;
            --framer-font-style: normal;
            --framer-font-weight: 500;
            --framer-text-color: #000;
            --framer-font-size: 16px;
            --framer-letter-spacing: 0;
            --framer-text-transform: none;
            --framer-text-decoration: none;
            --framer-line-height: 1.2em;
            --framer-text-alignment: start;
        }
    `,
  /* css */
  `
        ul.framer-text,
        ol.framer-text {
            display: table;
            width: 100%;
        }
    `,
  /* css */
  `
        li.framer-text {
            display: table-row;
            counter-increment: list-item;
            list-style: none;
        }
    `,
  /* css */
  `
        ol.framer-text > li.framer-text::before {
            display: table-cell;
            width: 2.25ch;
            box-sizing: border-box;
            padding-inline-end: 0.75ch;
            content: counter(list-item) ".";
            white-space: nowrap;
        }
    `,
  /* css */
  `
        ul.framer-text > li.framer-text::before {
            display: table-cell;
            width: 2.25ch;
            box-sizing: border-box;
            padding-inline-end: 0.75ch;
            content: "\u2022";
        }
    `,
  /* css */
  `
        .framer-text-module[style*="aspect-ratio"] > :first-child {
            width: 100%;
        }
    `,
  /* css */
  `
        @supports not (aspect-ratio: 1) {
            .framer-text-module[style*="aspect-ratio"] {
                position: relative;
            }
        }
    `,
  /* css */
  `
        @supports not (aspect-ratio: 1) {
            .framer-text-module[style*="aspect-ratio"]::before {
                content: "";
                display: block;
                padding-bottom: calc(100% / calc(var(--aspect-ratio)));
            }
        }
    `,
  /* css */
  `
        @supports not (aspect-ratio: 1) {
            .framer-text-module[style*="aspect-ratio"] > :first-child {
                position: absolute;
                top: 0;
                left: 0;
                height: 100%;
            }
        }
    `
];

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/render/utils/setDocumentStyles.js
var defaultCache = /* @__PURE__ */ new Set();
var defaultSheet;
function injectCSSRule(cssRule, sheet, cache3 = defaultCache) {
  if (!cssRule || cache3.has(cssRule) || typeof document === "undefined")
    return;
  cache3.add(cssRule);
  if (!sheet) {
    if (!defaultSheet) {
      const styleElement = document.createElement("style");
      styleElement.setAttribute("type", "text/css");
      styleElement.setAttribute("data-framer-css", "true");
      if (!document.head) {
        console.warn("not injecting CSS: the document is missing a <head> element");
        return;
      }
      document.head.appendChild(styleElement);
      if (styleElement.sheet) {
        defaultSheet = styleElement.sheet;
      } else {
        console.warn("not injecting CSS: injected <style> element does not have a sheet", styleElement);
        return;
      }
    }
    sheet = defaultSheet;
  }
  try {
    sheet.insertRule(cssRule, sheet.cssRules.length);
  } catch (e2) {
  }
}

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/render/utils/injectComponentCSSRules.js
var componentCSSRules = [`[data-framer-component-type] { position: absolute; }`];
var textAlignmentRule = `
[data-framer-component-type="Text"] > * {
    text-align: var(--framer-text-alignment, start);
}`;
var textBlockSpanRule = `
[data-framer-component-type="Text"] span span,
[data-framer-component-type="Text"] p span,
[data-framer-component-type="Text"] h1 span,
[data-framer-component-type="Text"] h2 span,
[data-framer-component-type="Text"] h3 span,
[data-framer-component-type="Text"] h4 span,
[data-framer-component-type="Text"] h5 span,
[data-framer-component-type="Text"] h6 span {
    display: block;
}`;
var textInlineSpanRule = `
[data-framer-component-type="Text"] span span span,
[data-framer-component-type="Text"] p span span,
[data-framer-component-type="Text"] h1 span span,
[data-framer-component-type="Text"] h2 span span,
[data-framer-component-type="Text"] h3 span span,
[data-framer-component-type="Text"] h4 span span,
[data-framer-component-type="Text"] h5 span span,
[data-framer-component-type="Text"] h6 span span {
    display: unset;
}`;
var renderTextStylesRule = `
[data-framer-component-type="Text"] div div span,
[data-framer-component-type="Text"] a div span,
[data-framer-component-type="Text"] span span span,
[data-framer-component-type="Text"] p span span,
[data-framer-component-type="Text"] h1 span span,
[data-framer-component-type="Text"] h2 span span,
[data-framer-component-type="Text"] h3 span span,
[data-framer-component-type="Text"] h4 span span,
[data-framer-component-type="Text"] h5 span span,
[data-framer-component-type="Text"] h6 span span,
[data-framer-component-type="Text"] a {
    font-family: var(--font-family);
    font-style: var(--font-style);
    font-weight: min(calc(var(--framer-font-weight-increase, 0) + var(--font-weight, 400)), 900);
    color: var(--text-color);
    letter-spacing: var(--letter-spacing);
    font-size: var(--font-size);
    text-transform: var(--text-transform);
    text-decoration: var(--text-decoration);
    line-height: var(--line-height);
}`;
var textStylesRule = `
[data-framer-component-type="Text"] div div span,
[data-framer-component-type="Text"] a div span,
[data-framer-component-type="Text"] span span span,
[data-framer-component-type="Text"] p span span,
[data-framer-component-type="Text"] h1 span span,
[data-framer-component-type="Text"] h2 span span,
[data-framer-component-type="Text"] h3 span span,
[data-framer-component-type="Text"] h4 span span,
[data-framer-component-type="Text"] h5 span span,
[data-framer-component-type="Text"] h6 span span,
[data-framer-component-type="Text"] a {
    --font-family: var(--framer-font-family);
    --font-style: var(--framer-font-style);
    --font-weight: var(--framer-font-weight);
    --text-color: var(--framer-text-color);
    --letter-spacing: var(--framer-letter-spacing);
    --font-size: var(--framer-font-size);
    --text-transform: var(--framer-text-transform);
    --text-decoration: var(--framer-text-decoration);
    --line-height: var(--framer-line-height);
}`;
var linkStylesRule = `
[data-framer-component-type="Text"] a,
[data-framer-component-type="Text"] a div span,
[data-framer-component-type="Text"] a span span span,
[data-framer-component-type="Text"] a p span span,
[data-framer-component-type="Text"] a h1 span span,
[data-framer-component-type="Text"] a h2 span span,
[data-framer-component-type="Text"] a h3 span span,
[data-framer-component-type="Text"] a h4 span span,
[data-framer-component-type="Text"] a h5 span span,
[data-framer-component-type="Text"] a h6 span span {
    --font-family: var(--framer-link-font-family, var(--framer-font-family));
    --font-style: var(--framer-link-font-style, var(--framer-font-style));
    --font-weight: var(--framer-link-font-weight, var(--framer-font-weight));
    --text-color: var(--framer-link-text-color, var(--framer-text-color));
    --font-size: var(--framer-link-font-size, var(--framer-font-size));
    --text-transform: var(--framer-link-text-transform, var(--framer-text-transform));
    --text-decoration: var(--framer-link-text-decoration, var(--framer-text-decoration));
}`;
var linkHoverStylesRule = `
[data-framer-component-type="Text"] a:hover,
[data-framer-component-type="Text"] a div span:hover,
[data-framer-component-type="Text"] a span span span:hover,
[data-framer-component-type="Text"] a p span span:hover,
[data-framer-component-type="Text"] a h1 span span:hover,
[data-framer-component-type="Text"] a h2 span span:hover,
[data-framer-component-type="Text"] a h3 span span:hover,
[data-framer-component-type="Text"] a h4 span span:hover,
[data-framer-component-type="Text"] a h5 span span:hover,
[data-framer-component-type="Text"] a h6 span span:hover {
    --font-family: var(--framer-link-hover-font-family, var(--framer-link-font-family, var(--framer-font-family)));
    --font-style: var(--framer-link-hover-font-style, var(--framer-link-font-style, var(--framer-font-style)));
    --font-weight: var(--framer-link-hover-font-weight, var(--framer-link-font-weight, var(--framer-font-weight)));
    --text-color: var(--framer-link-hover-text-color, var(--framer-link-text-color, var(--framer-text-color)));
    --font-size: var(--framer-link-hover-font-size, var(--framer-link-font-size, var(--framer-font-size)));
    --text-transform: var(--framer-link-hover-text-transform, var(--framer-link-text-transform, var(--framer-text-transform)));
    --text-decoration: var(--framer-link-hover-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration)));
}`;
var linkCurrentStylesRule = `
[data-framer-component-type="Text"].isCurrent a,
[data-framer-component-type="Text"].isCurrent a div span,
[data-framer-component-type="Text"].isCurrent a span span span,
[data-framer-component-type="Text"].isCurrent a p span span,
[data-framer-component-type="Text"].isCurrent a h1 span span,
[data-framer-component-type="Text"].isCurrent a h2 span span,
[data-framer-component-type="Text"].isCurrent a h3 span span,
[data-framer-component-type="Text"].isCurrent a h4 span span,
[data-framer-component-type="Text"].isCurrent a h5 span span,
[data-framer-component-type="Text"].isCurrent a h6 span span {
    --font-family: var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family)));
    --font-style: var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style)));
    --font-weight: var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight)));
    --text-color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color)));
    --font-size: var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size)));
    --text-transform: var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform)));
    --text-decoration: var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration)));
}`;
var textCSSRules = [
  `[data-framer-component-type="Text"] { cursor: inherit; }`,
  `[data-framer-component-text-autosized] * { white-space: pre; }`,
  textAlignmentRule,
  textBlockSpanRule,
  textInlineSpanRule,
  renderTextStylesRule,
  textStylesRule,
  linkStylesRule,
  linkHoverStylesRule,
  linkCurrentStylesRule
];
var stackPositionRule = `
:not([data-framer-generated]) > [data-framer-stack-content-wrapper] > *,
:not([data-framer-generated]) > [data-framer-stack-content-wrapper] > [data-framer-component-type],
:not([data-framer-generated]) > [data-framer-stack-content-wrapper] > [data-framer-legacy-stack-gap-enabled] > *,
:not([data-framer-generated]) > [data-framer-stack-content-wrapper] > [data-framer-legacy-stack-gap-enabled] > [data-framer-component-type] {
    position: relative;
}`;
var nativeStackGapRules = [
  `[data-framer-stack-content-wrapper][data-framer-stack-gap-enabled="true"] {
        row-gap: var(--stack-native-row-gap);
        column-gap: var(--stack-native-column-gap);
    }`,
  `.${flexboxGapNotSupportedClass} [data-framer-stack-content-wrapper][data-framer-stack-gap-enabled="true"] {
        row-gap: unset;
        column-gap: unset;
    }`
];
var stackGapRule = `
.${flexboxGapNotSupportedClass} [data-framer-legacy-stack-gap-enabled="true"] > *, [data-framer-legacy-stack-gap-enabled="true"][data-framer-stack-flexbox-gap="false"] {
    margin-top: calc(var(--stack-gap-y) / 2);
    margin-bottom: calc(var(--stack-gap-y) / 2);
    margin-right: calc(var(--stack-gap-x) / 2);
    margin-left: calc(var(--stack-gap-x) / 2);
}
`;
var stackDirectionRuleVertical = `
.${flexboxGapNotSupportedClass}
[data-framer-stack-direction-reverse="false"]
[data-framer-legacy-stack-gap-enabled="true"]
> *:first-child,
[data-framer-stack-direction-reverse="false"]
[data-framer-legacy-stack-gap-enabled="true"][data-framer-stack-flexbox-gap="false"]
> *:first-child,
.${flexboxGapNotSupportedClass}
[data-framer-stack-direction-reverse="true"]
[data-framer-legacy-stack-gap-enabled="true"]
> *:last-child,
[data-framer-stack-direction-reverse="true"]
[data-framer-legacy-stack-gap-enabled="true"][data-framer-stack-flexbox-gap="false"]
> *:last-child {
    margin-top: 0;
    margin-left: 0;
}`;
var stackDirectionRuleHorizontal = `
.${flexboxGapNotSupportedClass}
[data-framer-stack-direction-reverse="false"]
[data-framer-legacy-stack-gap-enabled="true"]
> *:last-child,
[data-framer-stack-direction-reverse="false"]
[data-framer-legacy-stack-gap-enabled="true"][data-framer-stack-flexbox-gap="false"]
> *:last-child,
.${flexboxGapNotSupportedClass}
[data-framer-stack-direction-reverse="true"]
[data-framer-legacy-stack-gap-enabled="true"]
> *:first-child,
[data-framer-stack-direction-reverse="true"]
[data-framer-legacy-stack-gap-enabled="true"][data-framer-stack-flexbox-gap="false"]
> *:first-child {
    margin-right: 0;
    margin-bottom: 0;
}`;
var stackCSSRules = [
  stackPositionRule,
  stackGapRule,
  ...nativeStackGapRules,
  stackDirectionRuleVertical,
  stackDirectionRuleHorizontal
];
var navigationCSSRules = [
  `
NavigationContainer
[data-framer-component-type="NavigationContainer"] > *,
[data-framer-component-type="NavigationContainer"] > [data-framer-component-type] {
    position: relative;
}`
];
var scrollCSSRules = [
  `[data-framer-component-type="Scroll"]::-webkit-scrollbar { display: none; }`,
  `[data-framer-component-type="ScrollContentWrapper"] > * { position: relative; }`
];
var nativeScrollCSSRules = [
  `[data-framer-component-type="NativeScroll"] { -webkit-overflow-scrolling: touch; }`,
  `[data-framer-component-type="NativeScroll"] > * { position: relative; }`,
  `[data-framer-component-type="NativeScroll"].direction-both { overflow-x: scroll; overflow-y: scroll; }`,
  `[data-framer-component-type="NativeScroll"].direction-vertical { overflow-x: hidden; overflow-y: scroll; }`,
  `[data-framer-component-type="NativeScroll"].direction-horizontal { overflow-x: scroll; overflow-y: hidden; }`,
  `[data-framer-component-type="NativeScroll"].direction-vertical > * { width: 100% !important; }`,
  `[data-framer-component-type="NativeScroll"].direction-horizontal > * { height: 100% !important; }`,
  `[data-framer-component-type="NativeScroll"].scrollbar-hidden::-webkit-scrollbar { display: none; }`
];
var deviceComponentCSSRules = [
  `[data-framer-component-type="DeviceComponent"].no-device > * { width: 100% !important; height: 100% !important; }`
];
var pageContentWrapperWrapperCSSRules = [
  `[data-framer-component-type="PageContentWrapper"] > *, [data-framer-component-type="PageContentWrapper"] > [data-framer-component-type] { position: relative; }`
];
var presenceCSS = [
  `[data-is-present="false"], [data-is-present="false"] * { pointer-events: none !important; }`
];
var cursorCSS = [
  `[data-framer-cursor="pointer"] { cursor: pointer; }`,
  `[data-framer-cursor="grab"] { cursor: grab; }`,
  `[data-framer-cursor="grab"]:active { cursor: grabbing; }`
];
var frameCSS = [
  // Non-sites prototyping projects render with FrameWithMotion and Stacks. In
  // that context this rule ensures pointer events work in a specific way
  // designed for prototypes that we don't care about anymore in sites. We
  // can't remove it for legacy reasons, but sites will never render any
  // elements that are impacted by this rule. However, users can still use the
  // <Frame> api in code, at which point this rule will kick in. We don't
  // encourage the use of this API anymore, and bugs that come from this will
  // be the user's concern.
  `[data-framer-component-type="Frame"] *, [data-framer-component-type="Stack"] * { pointer-events: auto; }`,
  // This is fully deprecated, and will never exist in code that is generated
  // after 24/01/2023. There will be existing code-generated that depends on
  // this rule existing, so we can't remove it.
  `[data-framer-generated] * { pointer-events: unset }`
];
var resetCSS = [
  `[data-reset="button"] {
        border-width: 0;
        padding: 0;
        background: none;
}`
];
var hideScrollbars = [
  `[data-hide-scrollbars="true"]::-webkit-scrollbar { width: 0px; height: 0px; }`,
  `[data-hide-scrollbars="true"]::-webkit-scrollbar-thumb { background: transparent; }`
];
var frameCSSRules = (isPreview) => {
  return isPreview ? frameCSS : [];
};
var svgCSSRules = [`.svgContainer svg { display: block; }`];
var combineCSSRules = (isPreview) => [
  ...componentCSSRules,
  ...textCSSRules,
  ...richTextCSSRules,
  ...deprecatedRichTextCSSRules,
  ...stackCSSRules,
  ...navigationCSSRules,
  ...scrollCSSRules,
  ...nativeScrollCSSRules,
  ...pageContentWrapperWrapperCSSRules,
  ...deviceComponentCSSRules,
  ...presenceCSS,
  ...cursorCSS,
  ...frameCSSRules(isPreview),
  ...svgCSSRules,
  ...resetCSS,
  ...hideScrollbars
];
var combinedCSSRules = combineCSSRules(false);
var combinedCSSRulesForPreview = combineCSSRules(true);
var didInject = false;
function injectComponentCSSRules() {
  if (didInject)
    return;
  didInject = true;
  const styles = RenderTarget.current() === RenderTarget.preview ? combinedCSSRulesForPreview : combinedCSSRules;
  for (const rule of styles) {
    injectCSSRule(rule, void 0, void 0);
  }
}

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/render/utils/layoutHintDataPropsForCenter.js
var isChrome2 = isChrome();
function layoutHintDataPropsForCenter(center) {
  const props = {};
  if (!isChrome2 || RenderTarget.current() !== RenderTarget.canvas) {
    return props;
  }
  if (center === true || center === "x") {
    props["data-framer-layout-hint-center-x"] = true;
  }
  if (center === true || center === "y") {
    props["data-framer-layout-hint-center-y"] = true;
  }
  return props;
}

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/render/utils/nodeIdFromString.js
function nodeIdFromString(str) {
  return str.replace(/^id_/, "").replace(/\\/g, "");
}

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/render/utils/processOverrideForwarding.js
import React16 from "react";
function processOverrideForwarding(props, children) {
  if (!children) {
    children = props.children;
    if (!children)
      return { props, children };
  }
  let _forwardedOverrides = props._forwardedOverrides;
  const extractions = props._overrideForwardingDescription;
  if (extractions) {
    _forwardedOverrides = void 0;
    for (const key3 in extractions) {
      const propName = extractions[key3];
      const value = props[propName];
      if (value !== void 0) {
        if (!_forwardedOverrides) {
          _forwardedOverrides = {};
          props = __spreadValues({}, props);
        }
        _forwardedOverrides[key3] = props[propName];
        delete props[propName];
      }
    }
  }
  if (!_forwardedOverrides)
    return { props, children };
  children = React16.Children.map(children, (child) => {
    if (!React16.isValidElement(child))
      return child;
    return React16.cloneElement(child, { _forwardedOverrides });
  });
  return { props, children };
}

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/render/utils/transformCustomValues.js
import { complex, invariant, px } from "framer-motion";

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/render/types/Color/Color.js
import { interpolate } from "framer-motion";

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/render/types/Color/converters.js
var import_hsluv = __toESM(require_hsluv(), 1);

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/render/types/Color/CSSNames.js
var cssNames = {
  aliceblue: "f0f8ff",
  antiquewhite: "faebd7",
  aqua: "0ff",
  aquamarine: "7fffd4",
  azure: "f0ffff",
  beige: "f5f5dc",
  bisque: "ffe4c4",
  black: "000",
  blanchedalmond: "ffebcd",
  blue: "00f",
  blueviolet: "8a2be2",
  brown: "a52a2a",
  burlywood: "deb887",
  burntsienna: "ea7e5d",
  cadetblue: "5f9ea0",
  chartreuse: "7fff00",
  chocolate: "d2691e",
  coral: "ff7f50",
  cornflowerblue: "6495ed",
  cornsilk: "fff8dc",
  crimson: "dc143c",
  cyan: "0ff",
  darkblue: "00008b",
  darkcyan: "008b8b",
  darkgoldenrod: "b8860b",
  darkgray: "a9a9a9",
  darkgreen: "006400",
  darkgrey: "a9a9a9",
  darkkhaki: "bdb76b",
  darkmagenta: "8b008b",
  darkolivegreen: "556b2f",
  darkorange: "ff8c00",
  darkorchid: "9932cc",
  darkred: "8b0000",
  darksalmon: "e9967a",
  darkseagreen: "8fbc8f",
  darkslateblue: "483d8b",
  darkslategray: "2f4f4f",
  darkslategrey: "2f4f4f",
  darkturquoise: "00ced1",
  darkviolet: "9400d3",
  deeppink: "ff1493",
  deepskyblue: "00bfff",
  dimgray: "696969",
  dimgrey: "696969",
  dodgerblue: "1e90ff",
  firebrick: "b22222",
  floralwhite: "fffaf0",
  forestgreen: "228b22",
  fuchsia: "f0f",
  gainsboro: "dcdcdc",
  ghostwhite: "f8f8ff",
  gold: "ffd700",
  goldenrod: "daa520",
  gray: "808080",
  green: "008000",
  greenyellow: "adff2f",
  grey: "808080",
  honeydew: "f0fff0",
  hotpink: "ff69b4",
  indianred: "cd5c5c",
  indigo: "4b0082",
  ivory: "fffff0",
  khaki: "f0e68c",
  lavender: "e6e6fa",
  lavenderblush: "fff0f5",
  lawngreen: "7cfc00",
  lemonchiffon: "fffacd",
  lightblue: "add8e6",
  lightcoral: "f08080",
  lightcyan: "e0ffff",
  lightgoldenrodyellow: "fafad2",
  lightgray: "d3d3d3",
  lightgreen: "90ee90",
  lightgrey: "d3d3d3",
  lightpink: "ffb6c1",
  lightsalmon: "ffa07a",
  lightseagreen: "20b2aa",
  lightskyblue: "87cefa",
  lightslategray: "789",
  lightslategrey: "789",
  lightsteelblue: "b0c4de",
  lightyellow: "ffffe0",
  lime: "0f0",
  limegreen: "32cd32",
  linen: "faf0e6",
  magenta: "f0f",
  maroon: "800000",
  mediumaquamarine: "66cdaa",
  mediumblue: "0000cd",
  mediumorchid: "ba55d3",
  mediumpurple: "9370db",
  mediumseagreen: "3cb371",
  mediumslateblue: "7b68ee",
  mediumspringgreen: "00fa9a",
  mediumturquoise: "48d1cc",
  mediumvioletred: "c71585",
  midnightblue: "191970",
  mintcream: "f5fffa",
  mistyrose: "ffe4e1",
  moccasin: "ffe4b5",
  navajowhite: "ffdead",
  navy: "000080",
  oldlace: "fdf5e6",
  olive: "808000",
  olivedrab: "6b8e23",
  orange: "ffa500",
  orangered: "ff4500",
  orchid: "da70d6",
  palegoldenrod: "eee8aa",
  palegreen: "98fb98",
  paleturquoise: "afeeee",
  palevioletred: "db7093",
  papayawhip: "ffefd5",
  peachpuff: "ffdab9",
  peru: "cd853f",
  pink: "ffc0cb",
  plum: "dda0dd",
  powderblue: "b0e0e6",
  purple: "800080",
  rebeccapurple: "663399",
  red: "f00",
  rosybrown: "bc8f8f",
  royalblue: "4169e1",
  saddlebrown: "8b4513",
  salmon: "fa8072",
  sandybrown: "f4a460",
  seagreen: "2e8b57",
  seashell: "fff5ee",
  sienna: "a0522d",
  silver: "c0c0c0",
  skyblue: "87ceeb",
  slateblue: "6a5acd",
  slategray: "708090",
  slategrey: "708090",
  snow: "fffafa",
  springgreen: "00ff7f",
  steelblue: "4682b4",
  tan: "d2b48c",
  teal: "008080",
  thistle: "d8bfd8",
  tomato: "ff6347",
  turquoise: "40e0d0",
  violet: "ee82ee",
  wheat: "f5deb3",
  white: "fff",
  whitesmoke: "f5f5f5",
  yellow: "ff0",
  yellowgreen: "9acd32"
};

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/render/types/Color/types.js
var ColorFormat;
(function(ColorFormat2) {
  ColorFormat2["RGB"] = "rgb";
  ColorFormat2["HSL"] = "hsl";
  ColorFormat2["HSV"] = "hsv";
  ColorFormat2["HEX"] = "hex";
  ColorFormat2["NAME"] = "name";
})(ColorFormat || (ColorFormat = {}));
var ColorMixModelType;
(function(ColorMixModelType2) {
  ColorMixModelType2["RGB"] = "rgb";
  ColorMixModelType2["RGBA"] = "rgba";
  ColorMixModelType2["HSL"] = "hsl";
  ColorMixModelType2["HSLA"] = "hsla";
  ColorMixModelType2["HUSL"] = "husl";
})(ColorMixModelType || (ColorMixModelType = {}));

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/render/types/Color/Utils.js
function modulate(value, rangeA, rangeB, limit = false) {
  const [fromLow, fromHigh] = rangeA;
  const [toLow, toHigh] = rangeB;
  const fromDelta = fromHigh - fromLow;
  if (fromDelta === 0)
    return (toHigh + toLow) / 2;
  const toDelta = toHigh - toLow;
  if (toDelta === 0)
    return toLow;
  const result = toLow + (value - fromLow) / fromDelta * toDelta;
  if (limit === true) {
    if (toLow < toHigh) {
      if (result < toLow) {
        return toLow;
      }
      if (result > toHigh) {
        return toHigh;
      }
    } else {
      if (result > toLow) {
        return toLow;
      }
      if (result < toHigh) {
        return toHigh;
      }
    }
  }
  return result;
}
function isNumeric(value) {
  return !isNaN(value) && isFinite(value);
}
function percentToFraction(val) {
  const digits = numberFromString(val);
  if (digits !== void 0) {
    if (val.includes("%")) {
      return digits / 100;
    }
    return digits;
  }
  return 0;
}
function numberFromString(input) {
  const match = input.match(/\d?\.?\d+/);
  return match ? Number(match[0]) : void 0;
}

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/render/types/Color/converters.js
var { hsluvToRgb, rgbToHsluv: rgbToHsluvExternal } = import_hsluv.default;
function rgbToHsluv(r2, g, b) {
  const [h, s2, l] = rgbToHsluvExternal([r2 / 255, g / 255, b / 255]);
  return { h, s: s2, l };
}
function rgbaFromHusl(h, s2, l, a2 = 1) {
  const rgb = hsluvToRgb([h, s2, l]);
  return {
    r: rgb[0] * 255,
    g: rgb[1] * 255,
    b: rgb[2] * 255,
    a: a2
  };
}
function hsvToStr(h, s2, v, a2) {
  const _h = Math.round(h);
  const _s = Math.round(s2 * 100);
  const _v = Math.round(v * 100);
  return a2 === void 0 || a2 === 1 ? "hsv(" + _h + ", " + _s + "%, " + _v + "%)" : "hsva(" + _h + ", " + _s + "%, " + _v + "%, " + a2 + ")";
}
function rgbToRgb(r2, g, b) {
  return {
    r: isNumeric(r2) ? bound01(r2, 255) * 255 : 0,
    g: isNumeric(g) ? bound01(g, 255) * 255 : 0,
    b: isNumeric(b) ? bound01(b, 255) * 255 : 0
  };
}
function rgbToHex(r2, g, b, allow3Char) {
  const hex = [
    pad2(Math.round(r2).toString(16)),
    pad2(Math.round(g).toString(16)),
    pad2(Math.round(b).toString(16))
  ];
  if (allow3Char && hex[0].charAt(0) === hex[0].charAt(1) && hex[1].charAt(0) === hex[1].charAt(1) && hex[2].charAt(0) === hex[2].charAt(1)) {
    return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
  }
  return hex.join("");
}
function rgbToHsl(r2, g, b) {
  let l;
  let s2;
  const _r = bound01(r2, 255);
  const _g = bound01(g, 255);
  const _b = bound01(b, 255);
  const max = Math.max(_r, _g, _b);
  const min = Math.min(_r, _g, _b);
  let h = s2 = l = (max + min) / 2;
  if (max === min) {
    h = s2 = 0;
  } else {
    const d = max - min;
    s2 = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case _r:
        h = (_g - _b) / d + (_g < _b ? 6 : 0);
        break;
      case _g:
        h = (_b - _r) / d + 2;
        break;
      case _b:
        h = (_r - _g) / d + 4;
        break;
    }
    h /= 6;
  }
  return { h: h * 360, s: s2, l };
}
function hue2rgb(p2, q, t2) {
  if (t2 < 0) {
    t2 += 1;
  }
  if (t2 > 1) {
    t2 -= 1;
  }
  if (t2 < 1 / 6) {
    return p2 + (q - p2) * 6 * t2;
  }
  if (t2 < 1 / 2) {
    return q;
  }
  if (t2 < 2 / 3) {
    return p2 + (q - p2) * (2 / 3 - t2) * 6;
  }
  return p2;
}
function hslToRgb(h, s2, l) {
  let r2;
  let g;
  let b;
  h = bound01(h, 360);
  s2 = bound01(s2 * 100, 100);
  l = bound01(l * 100, 100);
  if (s2 === 0) {
    r2 = g = b = l;
  } else {
    const q = l < 0.5 ? l * (1 + s2) : l + s2 - l * s2;
    const p2 = 2 * l - q;
    r2 = hue2rgb(p2, q, h + 1 / 3);
    g = hue2rgb(p2, q, h);
    b = hue2rgb(p2, q, h - 1 / 3);
  }
  return { r: r2 * 255, g: g * 255, b: b * 255 };
}
function rgbToHsv(r2, g, b) {
  r2 = bound01(r2, 255);
  g = bound01(g, 255);
  b = bound01(b, 255);
  const max = Math.max(r2, g, b);
  const min = Math.min(r2, g, b);
  const d = max - min;
  let h;
  const s2 = max === 0 ? 0 : d / max;
  const v = max;
  if (max === min) {
    h = 0;
  } else {
    switch (max) {
      case r2:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r2) / d + 2;
        break;
      case b:
        h = (r2 - g) / d + 4;
        break;
    }
    h /= 6;
  }
  return { h, s: s2, v };
}
function hsvToRgb(h, s2, v) {
  h = bound01(h, 360) * 6;
  s2 = bound01(s2 * 100, 100);
  v = bound01(v * 100, 100);
  const i2 = Math.floor(h);
  const f = h - i2;
  const p2 = v * (1 - s2);
  const q = v * (1 - f * s2);
  const t2 = v * (1 - (1 - f) * s2);
  const mod2 = i2 % 6;
  const r2 = [v, q, p2, p2, t2, v][mod2];
  const g = [t2, v, v, q, p2, p2][mod2];
  const b = [p2, p2, t2, v, v, q][mod2];
  return { r: r2 * 255, g: g * 255, b: b * 255 };
}
function bound01(n2, max) {
  let _max;
  let _n;
  if (typeof max === "string")
    _max = parseFloat(max);
  else
    _max = max;
  if (typeof n2 === "string") {
    if (isOnePointZero(n2)) {
      n2 = "100%";
    }
    const processPercent = isPercentage(n2);
    _n = Math.min(_max, Math.max(0, parseFloat(n2)));
    if (processPercent) {
      _n = Math.floor(_n * _max) / 100;
    }
  } else {
    _n = n2;
  }
  if (Math.abs(_n - _max) < 1e-6) {
    return 1;
  }
  return _n % _max / _max;
}
function isOnePointZero(n2) {
  return typeof n2 === "string" && n2.includes(".") && parseFloat(n2) === 1;
}
function isPercentage(n2) {
  return typeof n2 === "string" && n2.includes("%");
}
function pad2(char) {
  if (char.length === 1) {
    return "0" + char;
  } else {
    return "" + char;
  }
}
var matchers = function() {
  const cssInteger = "[-\\+]?\\d+%?";
  const cssNumber = "[-\\+]?\\d*\\.\\d+%?";
  const cssUnit = "(?:" + cssNumber + ")|(?:" + cssInteger + ")";
  const permissiveMatch3 = "[\\s|\\(]+(" + cssUnit + ")[,|\\s]+(" + cssUnit + ")[,|\\s]+(" + cssUnit + ")\\s*\\)?";
  const permissiveMatch4 = "[\\s|\\(]+(" + cssUnit + ")[,|\\s]+(" + cssUnit + ")[,|\\s]+(" + cssUnit + ")[,|\\s]+(" + cssUnit + ")\\s*\\)?";
  return {
    rgb: new RegExp("rgb" + permissiveMatch3),
    rgba: new RegExp("rgba" + permissiveMatch4),
    hsl: new RegExp("hsl" + permissiveMatch3),
    hsla: new RegExp("hsla" + permissiveMatch4),
    hsv: new RegExp("hsv" + permissiveMatch3),
    hsva: new RegExp("hsva" + permissiveMatch4),
    hex3: /^([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex6: /^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
    hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
  };
}();
function stringToObject(inputColor) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B;
  if (inputColor.includes("gradient("))
    return false;
  if (inputColor.includes("var("))
    return false;
  const trimLeft = /^[\s,#]+/;
  const trimRight = /\s+$/;
  let color2 = inputColor.replace(trimLeft, "").replace(trimRight, "").toLowerCase();
  let named = false;
  if (cssNames[color2]) {
    color2 = cssNames[color2];
    named = true;
  }
  if (color2 === "transparent") {
    return {
      r: 0,
      g: 0,
      b: 0,
      a: 0,
      format: ColorFormat.NAME
    };
  }
  let match;
  if (match = matchers.rgb.exec(color2)) {
    return {
      r: parseInt((_a = match[1]) != null ? _a : ""),
      g: parseInt((_b = match[2]) != null ? _b : ""),
      b: parseInt((_c = match[3]) != null ? _c : ""),
      a: 1,
      format: ColorFormat.RGB
    };
  }
  if (match = matchers.rgba.exec(color2)) {
    return {
      r: parseInt((_d = match[1]) != null ? _d : ""),
      g: parseInt((_e = match[2]) != null ? _e : ""),
      b: parseInt((_f = match[3]) != null ? _f : ""),
      a: parseFloat((_g = match[4]) != null ? _g : ""),
      format: ColorFormat.RGB
    };
  }
  if (match = matchers.hsl.exec(color2)) {
    return {
      h: parseInt((_h = match[1]) != null ? _h : ""),
      s: percentToFraction((_i = match[2]) != null ? _i : ""),
      l: percentToFraction((_j = match[3]) != null ? _j : ""),
      a: 1,
      format: ColorFormat.HSL
    };
  }
  if (match = matchers.hsla.exec(color2)) {
    return {
      h: parseInt((_k = match[1]) != null ? _k : ""),
      s: percentToFraction((_l = match[2]) != null ? _l : ""),
      l: percentToFraction((_m = match[3]) != null ? _m : ""),
      a: parseFloat((_n = match[4]) != null ? _n : ""),
      format: ColorFormat.HSL
    };
  }
  if (match = matchers.hsv.exec(color2)) {
    return {
      h: parseInt((_o = match[1]) != null ? _o : ""),
      s: percentToFraction((_p = match[2]) != null ? _p : ""),
      v: percentToFraction((_q = match[3]) != null ? _q : ""),
      a: 1,
      format: ColorFormat.HSV
    };
  }
  if (match = matchers.hsva.exec(color2)) {
    return {
      h: parseInt((_r = match[1]) != null ? _r : ""),
      s: percentToFraction((_s = match[2]) != null ? _s : ""),
      v: percentToFraction((_t = match[3]) != null ? _t : ""),
      a: parseFloat((_u = match[4]) != null ? _u : ""),
      format: ColorFormat.HSV
    };
  }
  if (match = matchers.hex8.exec(color2)) {
    return {
      r: parseIntFromHex((_v = match[1]) != null ? _v : ""),
      g: parseIntFromHex((_w = match[2]) != null ? _w : ""),
      b: parseIntFromHex((_x = match[3]) != null ? _x : ""),
      a: convertHexToDecimal((_y = match[4]) != null ? _y : ""),
      format: named ? ColorFormat.NAME : ColorFormat.HEX
    };
  }
  if (match = matchers.hex6.exec(color2)) {
    return {
      r: parseIntFromHex((_z = match[1]) != null ? _z : ""),
      g: parseIntFromHex((_A = match[2]) != null ? _A : ""),
      b: parseIntFromHex((_B = match[3]) != null ? _B : ""),
      a: 1,
      format: named ? ColorFormat.NAME : ColorFormat.HEX
    };
  }
  if (match = matchers.hex4.exec(color2)) {
    return {
      r: parseIntFromHex(`${match[1]}${match[1]}`),
      g: parseIntFromHex(`${match[2]}${match[2]}`),
      b: parseIntFromHex(`${match[3]}${match[3]}`),
      a: convertHexToDecimal(match[4] + "" + match[4]),
      format: named ? ColorFormat.NAME : ColorFormat.HEX
    };
  }
  if (match = matchers.hex3.exec(color2)) {
    return {
      r: parseIntFromHex(`${match[1]}${match[1]}`),
      g: parseIntFromHex(`${match[2]}${match[2]}`),
      b: parseIntFromHex(`${match[3]}${match[3]}`),
      a: 1,
      format: named ? ColorFormat.NAME : ColorFormat.HEX
    };
  } else {
    return false;
  }
}
function parseIntFromHex(hex) {
  return parseInt(hex, 16);
}
function convertHexToDecimal(h) {
  return parseIntFromHex(h) / 255;
}

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/render/types/Color/Color.js
var cache2 = /* @__PURE__ */ new Map();
var Color = /* @__PURE__ */ (() => {
  function Color2(color2, r2, g, b) {
    if (typeof color2 === "string") {
      let c = cache2.get(color2);
      if (c)
        return c;
      c = createColor(color2);
      if (c === void 0)
        return __spreadProps(__spreadValues({}, Color2("black")), { isValid: false });
      cache2.set(color2, c);
      return c;
    }
    const created = createColor(color2, r2, g, b);
    return created !== void 0 ? created : __spreadProps(__spreadValues({}, Color2("black")), { isValid: false });
  }
  function createColor(color2, r2, g, b) {
    if (color2 === "")
      return void 0;
    const colorData = getCompleteColorStrategy(color2, r2, g, b);
    if (colorData) {
      const newColor = {
        r: colorData.r,
        g: colorData.g,
        b: colorData.b,
        a: colorData.a,
        h: colorData.h,
        s: colorData.s,
        l: colorData.l,
        initialValue: typeof color2 === "string" && colorData.format !== ColorFormat.HSV ? color2 : void 0,
        roundA: Math.round(100 * colorData.a) / 100,
        format: colorData.format,
        mix: Color2.mix,
        toValue: () => Color2.toRgbString(newColor)
      };
      return newColor;
    } else {
      return void 0;
    }
  }
  const ColorMixModel = {
    isRGB(colorModel) {
      return colorModel === ColorMixModelType.RGB || colorModel === ColorMixModelType.RGBA;
    },
    isHSL(colorModel) {
      return colorModel === ColorMixModelType.HSL || colorModel === ColorMixModelType.HSLA;
    }
  };
  Color2.inspect = (color2, initialValue) => {
    if (color2.format === ColorFormat.HSL) {
      return `<${color2.constructor.name} h:${color2.h} s:${color2.s} l:${color2.l} a:${color2.a}>`;
    } else if (color2.format === ColorFormat.HEX || color2.format === ColorFormat.NAME) {
      return `<${color2.constructor.name} "${initialValue}">`;
    } else {
      return `<${color2.constructor.name} r:${color2.r} g:${color2.g} b:${color2.b} a:${color2.a}>`;
    }
  };
  Color2.isColor = (color2) => {
    if (typeof color2 === "string") {
      return Color2.isColorString(color2);
    } else {
      return Color2.isColorObject(color2);
    }
  };
  Color2.isColorString = (colorString) => {
    if (typeof colorString === "string") {
      return stringToObject(colorString) !== false;
    }
    return false;
  };
  Color2.isColorObject = (color2) => {
    return color2 && typeof color2 !== "string" && typeof color2.r === "number" && typeof color2.g === "number" && typeof color2.b === "number" && typeof color2.h === "number" && typeof color2.s === "number" && typeof color2.l === "number" && typeof color2.a === "number" && typeof color2.roundA === "number" && typeof color2.format === "string";
  };
  Color2.toString = (color2) => {
    return Color2.toRgbString(color2);
  };
  Color2.toHex = (color2, allow3Char = false) => {
    return rgbToHex(color2.r, color2.g, color2.b, allow3Char);
  };
  Color2.toHexString = (color2, allow3Char = false) => {
    return `#${Color2.toHex(color2, allow3Char)}`;
  };
  Color2.toRgbString = (color2) => {
    return color2.a === 1 ? "rgb(" + Math.round(color2.r) + ", " + Math.round(color2.g) + ", " + Math.round(color2.b) + ")" : "rgba(" + Math.round(color2.r) + ", " + Math.round(color2.g) + ", " + Math.round(color2.b) + ", " + color2.roundA + ")";
  };
  Color2.toHusl = (color2) => {
    return __spreadProps(__spreadValues({}, rgbToHsluv(color2.r, color2.g, color2.b)), {
      a: color2.roundA
    });
  };
  Color2.toHslString = (color2) => {
    const hsl = Color2.toHsl(color2);
    const h = Math.round(hsl.h);
    const s2 = Math.round(hsl.s * 100);
    const l = Math.round(hsl.l * 100);
    return color2.a === 1 ? "hsl(" + h + ", " + s2 + "%, " + l + "%)" : "hsla(" + h + ", " + s2 + "%, " + l + "%, " + color2.roundA + ")";
  };
  Color2.toHsv = (color2) => {
    const hsv = rgbToHsv(color2.r, color2.g, color2.b);
    return { h: hsv.h * 360, s: hsv.s, v: hsv.v, a: color2.a };
  };
  Color2.toHsvString = (color2) => {
    const hsv = rgbToHsv(color2.r, color2.g, color2.b);
    const h = Math.round(hsv.h * 360);
    const s2 = Math.round(hsv.s * 100);
    const v = Math.round(hsv.v * 100);
    return color2.a === 1 ? "hsv(" + h + ", " + s2 + "%, " + v + "%)" : "hsva(" + h + ", " + s2 + "%, " + v + "%, " + color2.roundA + ")";
  };
  Color2.toName = (color2) => {
    if (color2.a === 0) {
      return "transparent";
    }
    if (color2.a < 1) {
      return false;
    }
    const hex = rgbToHex(color2.r, color2.g, color2.b, true);
    for (const key3 of Object.keys(cssNames)) {
      const value = cssNames[key3];
      if (value === hex) {
        return key3;
      }
    }
    return false;
  };
  Color2.toHsl = (color2) => {
    return {
      h: Math.round(color2.h),
      s: color2.s,
      l: color2.l,
      a: color2.a
    };
  };
  Color2.toRgb = (color2) => {
    return {
      r: Math.round(color2.r),
      g: Math.round(color2.g),
      b: Math.round(color2.b),
      a: color2.a
    };
  };
  Color2.brighten = (color2, amount = 10) => {
    const rgb = Color2.toRgb(color2);
    rgb.r = Math.max(0, Math.min(255, rgb.r - Math.round(255 * -(amount / 100))));
    rgb.g = Math.max(0, Math.min(255, rgb.g - Math.round(255 * -(amount / 100))));
    rgb.b = Math.max(0, Math.min(255, rgb.b - Math.round(255 * -(amount / 100))));
    return Color2(rgb);
  };
  Color2.lighten = (color2, amount = 10) => {
    const hsl = Color2.toHsl(color2);
    hsl.l += amount / 100;
    hsl.l = Math.min(1, Math.max(0, hsl.l));
    return Color2(hsl);
  };
  Color2.darken = (color2, amount = 10) => {
    const hsl = Color2.toHsl(color2);
    hsl.l -= amount / 100;
    hsl.l = Math.min(1, Math.max(0, hsl.l));
    return Color2(hsl);
  };
  Color2.saturate = (color2, amount = 10) => {
    const hsl = Color2.toHsl(color2);
    hsl.s += amount / 100;
    hsl.s = Math.min(1, Math.max(0, hsl.s));
    return Color2(hsl);
  };
  Color2.desaturate = (color2, amount = 10) => {
    const hsl = Color2.toHsl(color2);
    hsl.s -= amount / 100;
    hsl.s = Math.min(1, Math.max(0, hsl.s));
    return Color2(hsl);
  };
  Color2.grayscale = (color2) => {
    return Color2.desaturate(color2, 100);
  };
  Color2.hueRotate = (color2, angle) => {
    const hsl = Color2.toHsl(color2);
    hsl.h += angle;
    hsl.h = hsl.h > 360 ? hsl.h - 360 : hsl.h;
    return Color2(hsl);
  };
  Color2.alpha = (color2, a2 = 1) => {
    return Color2({
      r: color2.r,
      g: color2.g,
      b: color2.b,
      a: a2
    });
  };
  Color2.transparent = (color2) => {
    return Color2.alpha(color2, 0);
  };
  Color2.multiplyAlpha = (color2, alphaValue = 1) => {
    return Color2({
      r: color2.r,
      g: color2.g,
      b: color2.b,
      a: color2.a * alphaValue
    });
  };
  Color2.interpolate = (colorA, colorB, model = ColorMixModelType.RGB) => {
    if (!Color2.isColorObject(colorA) || !Color2.isColorObject(colorB)) {
      throw new TypeError("Both arguments for Color.interpolate must be Color objects");
    }
    return (progress) => {
      const color2 = Color2.mixAsColor(colorA, colorB, progress, false, model);
      return color2;
    };
  };
  Color2.mix = (from, toColor, { model = ColorMixModelType.RGB } = {}) => {
    const fromColor = typeof from === "string" ? Color2(from) : from;
    const mixer = Color2.interpolate(fromColor, toColor, model);
    return (p2) => Color2.toRgbString(mixer(p2));
  };
  Color2.mixAsColor = (colorA, colorB, fraction2 = 0.5, limit = false, model = ColorMixModelType.RGB) => {
    let result = null;
    if (ColorMixModel.isRGB(model)) {
      result = Color2({
        r: modulate(fraction2, [0, 1], [colorA.r, colorB.r], limit),
        g: modulate(fraction2, [0, 1], [colorA.g, colorB.g], limit),
        b: modulate(fraction2, [0, 1], [colorA.b, colorB.b], limit),
        a: modulate(fraction2, [0, 1], [colorA.a, colorB.a], limit)
      });
    } else {
      let hslA, hslB;
      if (ColorMixModel.isHSL(model)) {
        hslA = Color2.toHsl(colorA);
        hslB = Color2.toHsl(colorB);
      } else {
        hslA = Color2.toHusl(colorA);
        hslB = Color2.toHusl(colorB);
      }
      if (hslA.s === 0) {
        hslA.h = hslB.h;
      } else if (hslB.s === 0) {
        hslB.h = hslA.h;
      }
      const fromH = hslA.h;
      const toH = hslB.h;
      let deltaH = toH - fromH;
      if (deltaH > 180) {
        deltaH = toH - 360 - fromH;
      } else if (deltaH < -180) {
        deltaH = toH + 360 - fromH;
      }
      const tween = {
        h: modulate(fraction2, [0, 1], [fromH, fromH + deltaH], limit),
        s: modulate(fraction2, [0, 1], [hslA.s, hslB.s], limit),
        l: modulate(fraction2, [0, 1], [hslA.l, hslB.l], limit),
        a: modulate(fraction2, [0, 1], [colorA.a, colorB.a], limit)
      };
      if (ColorMixModel.isHSL(model)) {
        result = Color2(tween);
      } else {
        result = Color2(rgbaFromHusl(tween.h, tween.s, tween.l, tween.a));
      }
    }
    return result;
  };
  Color2.random = (alphaValue = 1) => {
    function gen() {
      return Math.floor(Math.random() * 255);
    }
    return Color2("rgba(" + gen() + ", " + gen() + ", " + gen() + ", " + alphaValue + ")");
  };
  Color2.grey = (amount = 0.5, alphaValue = 1) => {
    amount = Math.floor(amount * 255);
    return Color2("rgba(" + amount + ", " + amount + ", " + amount + ", " + alphaValue + ")");
  };
  Color2.gray = Color2.grey;
  Color2.rgbToHsl = (r2, g, b) => {
    return rgbToHsl(r2, g, b);
  };
  Color2.isValidColorProperty = (name, value) => {
    const isColorKey = name.toLowerCase().slice(-5) === "color" || name === "fill" || name === "stroke";
    if (isColorKey && typeof value === "string" && Color2.isColorString(value)) {
      return true;
    }
    return false;
  };
  Color2.difference = (colorA, colorB) => {
    const _r = (colorA.r + colorB.r) / 2;
    const deltaR = colorA.r - colorB.r;
    const deltaG = colorA.g - colorB.g;
    const deltaB = colorA.b - colorB.b;
    const deltaR2 = Math.pow(deltaR, 2);
    const deltaG2 = Math.pow(deltaG, 2);
    const deltaB2 = Math.pow(deltaB, 2);
    return Math.sqrt(2 * deltaR2 + 4 * deltaG2 + 3 * deltaB2 + _r * (deltaR2 - deltaB2) / 256);
  };
  Color2.equal = (colorA, colorB, tolerance = 0.1) => {
    if (Math.abs(colorA.r - colorB.r) >= tolerance) {
      return false;
    }
    if (Math.abs(colorA.g - colorB.g) >= tolerance) {
      return false;
    }
    if (Math.abs(colorA.b - colorB.b) >= tolerance) {
      return false;
    }
    if (Math.abs(colorA.a - colorB.a) * 256 >= tolerance) {
      return false;
    }
    return true;
  };
  const channelToDecimal = interpolate([0, 255], [0, 1]);
  function convertChannelToLinearRgb(channel) {
    channel = channelToDecimal(channel);
    const abs = Math.abs(channel);
    if (abs < 0.04045)
      return channel / 12.92;
    return (Math.sign(channel) || 1) * Math.pow((abs + 0.055) / 1.055, 2.4);
  }
  Color2.luminance = (color2) => {
    const { r: r2, g, b } = Color2.toRgb(color2);
    return 0.2126 * convertChannelToLinearRgb(r2) + 0.7152 * convertChannelToLinearRgb(g) + 0.0722 * convertChannelToLinearRgb(b);
  };
  Color2.contrast = (a2, b) => {
    const l1 = Color2.luminance(a2);
    const l2 = Color2.luminance(b);
    return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
  };
  return Color2;
})();
function getCompleteColorStrategy(colorOrR, g, b, a2 = 1) {
  let completeColor;
  if (typeof colorOrR === "number" && !Number.isNaN(colorOrR) && typeof g === "number" && !Number.isNaN(g) && typeof b === "number" && !Number.isNaN(b)) {
    const _r = colorOrR;
    const _g = g;
    const _b = b;
    const _a = a2;
    completeColor = getCompleteColorFromRGB({ r: _r, g: _g, b: _b, a: _a });
  } else if (typeof colorOrR === "string") {
    completeColor = getCompleteColorFromString(colorOrR);
  } else if (typeof colorOrR === "object") {
    if (colorOrR.hasOwnProperty("r") && colorOrR.hasOwnProperty("g") && colorOrR.hasOwnProperty("b")) {
      completeColor = getCompleteColorFromRGB(colorOrR);
    } else {
      completeColor = getCompleteColorFromHSL(colorOrR);
    }
  }
  return completeColor;
}
function getCompleteColorFromString(color2) {
  const result = stringToObject(color2);
  if (result) {
    if (result.format === ColorFormat.HSL) {
      return getCompleteColorFromHSL(result);
    } else if (result.format === ColorFormat.HSV) {
      return getCompleteColorFromHSV(result);
    } else {
      return getCompleteColorFromRGB(result);
    }
  }
}
function getCompleteColorFromHSV(color2) {
  const rgb = hsvToRgb(color2.h, color2.s, color2.v);
  const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);
  return __spreadProps(__spreadValues(__spreadValues({}, hsl), rgb), {
    format: ColorFormat.RGB,
    a: color2.a !== void 0 ? correctAlpha(color2.a) : 1
  });
}
function getCompleteColorFromRGB(color2) {
  const rgb = rgbToRgb(color2.r, color2.g, color2.b);
  const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);
  return __spreadProps(__spreadValues(__spreadValues({}, hsl), rgb), {
    format: ColorFormat.RGB,
    a: color2.a !== void 0 ? correctAlpha(color2.a) : 1
  });
}
function getCompleteColorFromHSL(color2) {
  let h;
  let s2;
  let l;
  let rgb = { r: 0, g: 0, b: 0 };
  let hsl = { h: 0, s: 0, l: 0 };
  h = isNumeric(color2.h) ? color2.h : 0;
  h = (h + 360) % 360;
  s2 = isNumeric(color2.s) ? color2.s : 1;
  if (typeof color2.s === "string") {
    s2 = numberFromString(color2.s);
  }
  l = isNumeric(color2.l) ? color2.l : 0.5;
  if (typeof color2.l === "string") {
    l = numberFromString(color2.l);
  }
  rgb = hslToRgb(h, s2, l);
  hsl = {
    h,
    s: s2,
    l
  };
  return __spreadProps(__spreadValues(__spreadValues({}, rgb), hsl), {
    a: color2.a === void 0 ? 1 : color2.a,
    format: ColorFormat.HSL
  });
}
function correctAlpha(alphaValue) {
  alphaValue = parseFloat(alphaValue);
  if (alphaValue < 0) {
    alphaValue = 0;
  }
  if (isNaN(alphaValue) || alphaValue > 1) {
    alphaValue = 1;
  }
  return alphaValue;
}

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/render/utils/transformCustomValues.js
var isCustomValue = (v) => {
  return Boolean(v && typeof v === "object" && v.mix && v.toValue);
};
var isColorProp = (key3) => key3 === "background" || key3.endsWith("color") || key3.endsWith("Color");
var resolveSingleCustomValue = (key3, v) => {
  if (v && typeof v === "object") {
    invariant(isCustomValue(v), "Motion styles must be numbers, strings, or an instance with a `toValue` and `mix` methods.");
    return v.toValue();
  } else if (isColorProp(key3) && typeof v === "string" && Color.isColor(v)) {
    return Color(v).toValue();
  }
  return v;
};
var resolveCustomValues = (key3, v) => {
  if (Array.isArray(v)) {
    const numValues = v.length;
    const resolved = [];
    for (let i2 = 0; i2 < numValues; i2++) {
      resolved.push(resolveSingleCustomValue(key3, v[i2]));
    }
    return resolved;
  } else {
    return resolveSingleCustomValue(key3, v);
  }
};
var customValueHandlers = {
  size: {
    set: (inputValues, outputValues, value) => {
      if (inputValues.height === void 0) {
        outputValues.height = value;
      }
      if (inputValues.width === void 0) {
        outputValues.width = value;
      }
    },
    type: px
  },
  radius: {
    set: (inputValues, outputValues, value) => {
      outputValues.borderRadius = value;
    },
    type: px
  },
  shadow: {
    set: (inputValues, outputValues, value) => {
      outputValues.boxShadow = value;
    },
    type: complex
  }
};
var transformValues = (values) => {
  const transformedValues = {};
  for (const key3 in values) {
    const resolved = resolveCustomValues(key3, values[key3]);
    const valueHandler = customValueHandlers[key3];
    if (valueHandler) {
      const isDefaultType = valueHandler.type && typeof values[key3] === "number";
      const value = isDefaultType ? valueHandler.type.transform(values[key3]) : values[key3];
      valueHandler.set(values, transformedValues, value);
    } else {
      transformedValues[key3] = resolved;
    }
  }
  return transformedValues;
};

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/render/utils/transformTemplate.js
function transformTemplate(center) {
  return (_, generated) => {
    if (center === true) {
      return `translate(-50%, -50%) ${generated}`;
    } else {
      if (center === "x") {
        return `translateX(-50%) ${generated}`;
      } else if (center === "y") {
        return `translateY(-50%) ${generated}`;
      }
    }
    return generated || "none";
  };
}

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/render/utils/useLayoutId.js
import { useContext as useContext3, useMemo as useMemo2 } from "react";

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/components/AnimateLayout/LayoutIdContext.js
import React17, { useCallback as useCallback5, useContext as useContext2, useMemo, useRef as useRef5 } from "react";
var LayoutIdContext = React17.createContext({
  getLayoutId: (args) => null,
  persistLayoutIdCache: () => {
  },
  top: false,
  enabled: true
});

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/render/utils/useLayoutId.js
function useLayoutId(props, { specificLayoutId, postfix } = {}) {
  const { name, layoutIdKey, duplicatedFrom, __fromCodeComponentNode = false, drag } = props;
  const { getLayoutId, enabled } = useContext3(LayoutIdContext);
  return useMemo2(() => {
    if (!enabled)
      return props.layoutId;
    const existingLayoutId = specificLayoutId || props.layoutId;
    if (!existingLayoutId) {
      if (drag || !layoutIdKey || __fromCodeComponentNode)
        return void 0;
    }
    const layoutIdCandidate = existingLayoutId || getLayoutId({ id: layoutIdKey, name, duplicatedFrom });
    if (!layoutIdCandidate)
      return void 0;
    return postfix ? `${layoutIdCandidate}-${postfix}` : layoutIdCandidate;
  }, [enabled]);
}

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/render/utils/useMeasureLayout.js
import { useContext as useContext4 } from "react";

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/render/presentation/ComponentContainerContext.js
import React18 from "react";
var ComponentContainerContext = React18.createContext(false);

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/render/utils/getMeasurableCodeComponentChildren.js
function getMeasurableCodeComponentChildren(element) {
  const childrenCollection = element.firstElementChild && element.firstElementChild.hasAttribute(SIZE_COMPATIBILITY_WRAPPER_ATTRIBUTE) ? element.firstElementChild.children : element.children;
  return [...childrenCollection].filter(isMeasurable).map(unwrapInlinedDisplayContents);
}
function isMeasurable(element) {
  if (element instanceof HTMLBaseElement || element instanceof HTMLHeadElement || element instanceof HTMLLinkElement || element instanceof HTMLMetaElement || element instanceof HTMLScriptElement || element instanceof HTMLStyleElement || element instanceof HTMLTitleElement) {
    return false;
  }
  return element instanceof HTMLElement || element instanceof SVGElement;
}
function unwrapInlinedDisplayContents(element) {
  if (!(element instanceof HTMLElement))
    return element;
  if (element.children.length === 0)
    return element;
  if (element.style.display !== "contents")
    return element;
  const firstMeasurableChild = [...element.children].find(isMeasurable);
  if (firstMeasurableChild) {
    return unwrapInlinedDisplayContents(firstMeasurableChild);
  }
  return element;
}

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/render/utils/useMeasureLayout.js
function useMeasureLayout(props, ref, getChildren = () => [], options = {}) {
  const { id, visible, _needsMeasure } = props;
  const { skipHook = false } = options;
  const inCodeComponent = Boolean(useContext4(ComponentContainerContext));
  const onCanvas = RenderTarget.current() === RenderTarget.canvas;
  useIsomorphicLayoutEffect(() => {
    if (!onCanvas || inCodeComponent || skipHook) {
      return;
    }
    if (!(ref.current && id && visible && _needsMeasure)) {
      return;
    }
    runtime.queueMeasureRequest(nodeIdFromString(id), ref.current, getChildren(ref.current));
  });
}
function measureClosestComponentContainer(element) {
  const container = element.closest("[data-framer-component-container]");
  if (!container)
    return;
  runtime.queueMeasureRequest(nodeIdFromString(container.id), container, getMeasurableCodeComponentChildren(container));
}

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/render/presentation/Layer.js
import { Component as Component2 } from "react";

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/render/utils/isEqual.js
function hasProp(o2, prop) {
  return Object.prototype.hasOwnProperty.call(o2, prop);
}
function withEquals(o2) {
  if (!hasProp(o2, "equals"))
    return false;
  return typeof o2.equals === "function";
}
function valueEqual(a2, b) {
  if (a2 === b)
    return true;
  return a2 !== a2 && b !== b;
}
function arrayShallowEqual(a2, b) {
  const length = a2.length;
  if (length !== b.length)
    return false;
  for (let i2 = length; i2-- !== 0; ) {
    if (!valueEqual(a2[i2], b[i2]))
      return false;
  }
  return true;
}
function arrayDeepEqual(a2, b) {
  const length = a2.length;
  if (length !== b.length)
    return false;
  for (let i2 = length; i2-- !== 0; ) {
    if (!equal(a2[i2], b[i2], true))
      return false;
  }
  return true;
}
function mapShallowEqual(a2, b) {
  if (a2.size !== b.size)
    return false;
  for (const [key3, aValue] of a2.entries()) {
    if (!valueEqual(aValue, b.get(key3)))
      return false;
  }
  return true;
}
function mapDeepEqual(a2, b) {
  if (a2.size !== b.size)
    return false;
  for (const [key3, aValue] of a2.entries()) {
    if (!equal(aValue, b.get(key3), true))
      return false;
  }
  return true;
}
function setEqual(a2, b) {
  if (a2.size !== b.size)
    return false;
  for (const aValue of a2.keys()) {
    if (!b.has(aValue))
      return false;
  }
  return true;
}
function objectShallowEqual(a2, b) {
  const keys2 = Object.keys(a2);
  if (keys2.length !== Object.keys(b).length)
    return false;
  for (const key3 of keys2) {
    if (!hasProp(b, key3))
      return false;
    if (key3 === "_owner" && hasProp(a2, "$$typeof") && a2.$$typeof) {
      continue;
    }
    if (!valueEqual(a2[key3], b[key3]))
      return false;
  }
  return true;
}
function objectDeepEqual(a2, b) {
  const keys2 = Object.keys(a2);
  if (keys2.length !== Object.keys(b).length)
    return false;
  for (const key3 of keys2) {
    if (!hasProp(b, key3))
      return false;
    if (key3 === "_owner" && hasProp(a2, "$$typeof") && a2.$$typeof) {
      continue;
    }
    if (!equal(a2[key3], b[key3], true))
      return false;
  }
  return true;
}
function equal(a2, b, deep) {
  if (a2 === b)
    return true;
  if (!a2 || !b)
    return a2 !== a2 && b !== b;
  const typeA = typeof a2;
  const typeB = typeof b;
  if (typeA !== typeB)
    return false;
  if (typeA !== "object")
    return false;
  const aIsArray = Array.isArray(a2);
  const bIsArray = Array.isArray(b);
  if (aIsArray && bIsArray) {
    if (deep) {
      return arrayDeepEqual(a2, b);
    } else {
      return arrayShallowEqual(a2, b);
    }
  } else if (aIsArray !== bIsArray) {
    return false;
  }
  const aIsMap = a2 instanceof Map;
  const bIsMap = b instanceof Map;
  if (aIsMap && bIsMap) {
    if (deep) {
      return mapDeepEqual(a2, b);
    } else {
      return mapShallowEqual(a2, b);
    }
  } else if (aIsMap !== bIsMap) {
    return false;
  }
  const aIsSet = a2 instanceof Set;
  const bIsSet = b instanceof Set;
  if (aIsSet && bIsSet) {
    return setEqual(a2, b);
  } else if (aIsSet !== bIsSet) {
    return false;
  }
  const dateA = a2 instanceof Date;
  const dateB = b instanceof Date;
  if (dateA && dateB) {
    return a2.getTime() === b.getTime();
  } else if (dateA !== dateB) {
    return false;
  }
  const regexpA = a2 instanceof RegExp;
  const regexpB = b instanceof RegExp;
  if (regexpA && regexpB) {
    return a2.toString() === b.toString();
  } else if (regexpA !== regexpB) {
    return false;
  }
  if (withEquals(a2) && withEquals(b)) {
    return a2.equals(b);
  }
  if (deep) {
    return objectDeepEqual(a2, b);
  } else {
    return objectShallowEqual(a2, b);
  }
}
function isEqual(a2, b, deep = true) {
  try {
    return equal(a2, b, deep);
  } catch (error) {
    if (error instanceof Error && error.message.match(/stack|recursion/i)) {
      console.warn("Warning: isEqual does not handle circular references.", error.name, error.message);
      return false;
    }
    throw error;
  }
}

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/render/utils/setLayerBacked.js
var smallValue = "0.000001px";
var translateZ = ` translateZ(${smallValue})`;
var useTranslateZHack = isFramerX() || isSafari() || isTest();
function forceLayerBackingWithMotionStyle(motionStyle) {
  motionStyle.willChange = "transform";
  const onCanvas = RenderTarget.current() === RenderTarget.canvas;
  if (useTranslateZHack && onCanvas) {
    motionStyle.translateZ = smallValue;
  }
}
function forceLayerBackingWithCSSProperties(cssProperties) {
  cssProperties.willChange = "transform";
  setTranslateZHack(cssProperties, true);
}
function setTranslateZHack(style, enabled) {
  const onCanvas = RenderTarget.current() === RenderTarget.canvas;
  if (!useTranslateZHack || !onCanvas) {
    return;
  }
  const transform2 = style.transform || "";
  if (enabled) {
    const hasTranslateZ = transform2.includes(translateZ);
    if (!hasTranslateZ) {
      style.transform = transform2 + translateZ;
    }
  } else {
    style.transform = transform2.replace(translateZ, "");
  }
}

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/render/utils/useWebkitFixes.js
import { useEffect as useEffect14, useRef as useRef6 } from "react";
function resetSetStyle(element, key3, toValue, microtask = true) {
  if (!element) {
    return;
  }
  const value = toValue ? toValue : element.style[key3];
  const reset = () => {
    element.style[key3] = value;
  };
  element.style[key3] = null;
  if (microtask) {
    void Promise.resolve().then(reset);
  } else {
    setTimeout(reset, 0);
  }
}

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/render/presentation/Layer.js
var Layer = class extends Component2 {
  constructor() {
    super(...arguments);
    __publicField(this, "layerElement", null);
    __publicField(this, "setLayerElement", (element) => {
      this.layerElement = element;
    });
  }
  static applyWillChange(props, style, usingMotionStyle) {
    if (props.willChangeTransform) {
      if (usingMotionStyle) {
        forceLayerBackingWithMotionStyle(style);
      } else {
        forceLayerBackingWithCSSProperties(style);
      }
    }
  }
  /** @internal */
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps._needsMeasure || this.state !== nextState || !isEqual(this.props, nextProps);
  }
  /** @internal */
  componentDidUpdate(prevProps) {
    if (this.props["clip"] && this.props["radius"] === 0 && prevProps["radius"] !== 0) {
      resetSetStyle(this.layerElement, "overflow", "hidden", false);
    }
  }
};
__publicField(Layer, "defaultProps", {});

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/render/utils/isMotionValue.js
import { MotionValue } from "framer-motion";
var isMotionValue = (v) => v instanceof MotionValue;

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/utils/memoize.js
function manageCache(cache3, maxEntries) {
  const size2 = cache3.size;
  if (size2 < maxEntries)
    return;
  let i2 = Math.round(Math.random());
  for (const key3 of cache3.keys()) {
    if ((++i2 & 1) === 1)
      continue;
    cache3.delete(key3);
  }
}
function memoize2(maxEntries, cache3, key3, create2) {
  const r2 = cache3.get(key3);
  if (r2)
    return r2;
  manageCache(cache3, maxEntries);
  const g = create2(key3);
  cache3.set(key3, g);
  return g;
}

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/utils/string.js
var hash = (value) => {
  let hasher = 0, i2, chr;
  if (value.length === 0)
    return hasher;
  for (i2 = 0; i2 < value.length; i2++) {
    chr = value.charCodeAt(i2);
    hasher = (hasher << 5) - hasher + chr;
    hasher |= 0;
  }
  return hasher;
};

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/render/types/Color/ConvertColor.js
var ConvertColor = {
  hueRotate: (color2, angle) => {
    return Color.toHslString(Color.hueRotate(Color(color2), angle));
  },
  setAlpha: (color2, alpha) => {
    return Color.toRgbString(Color.alpha(Color(color2), alpha));
  },
  getAlpha: (color2) => {
    const obj = stringToObject(color2);
    return obj ? obj.a : 1;
  },
  multiplyAlpha: (color2, alpha) => {
    return Color.toRgbString(Color.multiplyAlpha(Color(color2), alpha));
  },
  toHex: (color2) => {
    return Color.toHexString(Color(color2)).toUpperCase();
  },
  toRgb: (color2) => {
    return Color.toRgb(Color(color2));
  },
  toRgbString: (color2) => {
    return Color.toRgbString(Color(color2));
  },
  toHSV: (color2) => {
    return Color.toHsv(Color(color2));
  },
  toHSL: (color2) => {
    return Color.toHsl(Color(color2));
  },
  toHslString: (color2) => {
    return Color.toHslString(Color(color2));
  },
  toHsvString: (color2) => {
    return Color.toHsvString(Color(color2));
  },
  hsvToHSLString: (hsv) => {
    return Color.toHslString(Color(hsvToStr(hsv.h, hsv.s, hsv.v, hsv.a)));
  },
  hsvToString: (hsv) => {
    return hsvToStr(hsv.h, hsv.s, hsv.v);
  },
  rgbaToString: (color2) => {
    return Color.toRgbString(Color(color2));
  },
  hslToString: (hsl) => {
    return Color.toRgbString(Color(hsl));
  },
  toColorPickerSquare: (h) => {
    return Color.toRgbString(Color({ h, s: 1, l: 0.5, a: 1 }));
  },
  isValid: (color2) => {
    return Color(color2).isValid !== false;
  },
  equals: (a2, b) => {
    if (typeof a2 === "string") {
      a2 = Color(a2);
    }
    if (typeof b === "string") {
      b = Color(b);
    }
    return Color.equal(a2, b);
  },
  toHexOrRgbaString: (input) => {
    const color2 = Color(input);
    return color2.a !== 1 ? Color.toRgbString(color2) : Color.toHexString(color2);
  }
};

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/render/utils/gradientColorStops.js
var CSSVariableRegExp = /var\(.+\)/;
var colorCache = /* @__PURE__ */ new Map();
function cachedMultiplyAlpha(s2, a2) {
  const key3 = [s2, a2];
  if (CSSVariableRegExp.test(s2)) {
    return s2;
  }
  return memoize2(1e3, colorCache, key3, () => ConvertColor.multiplyAlpha(s2, a2));
}
function gradientColorStops(gradient, alpha = 1) {
  let stops;
  if ("stops" in gradient) {
    stops = gradient.stops;
  } else {
    stops = [
      { value: gradient.start, position: 0 },
      { value: gradient.end, position: 1 }
    ];
  }
  if (alpha === 1) {
    return stops;
  } else {
    return stops.map((stop) => __spreadProps(__spreadValues({}, stop), { value: cachedMultiplyAlpha(stop.value, alpha) }));
  }
}
function gradientColorStopsHash(gradient, alpha) {
  let result = 0;
  gradientColorStops(gradient, alpha).forEach((stop) => {
    result ^= hash(stop.value) ^ stop.position;
  });
  return result;
}

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/render/types/MultiStopGradient.js
var multiStopGradientKeys = ["stops"];
function isMultiStopGradient(value) {
  return value && multiStopGradientKeys.every((key3) => key3 in value);
}

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/render/types/SimpleGradient.js
var simpleGradientKeys = ["start", "end"];
function isSimpleGradient(value) {
  return value && simpleGradientKeys.every((key3) => key3 in value);
}

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/render/types/LinearGradient.js
var linearGradientKeys = ["angle", "alpha"];
var LinearGradient = {
  /**
   * @param value -
   */
  isLinearGradient: (value) => {
    return value && linearGradientKeys.every((key3) => key3 in value) && (isSimpleGradient(value) || isMultiStopGradient(value));
  },
  /** @internal */
  hash: (linearGradient) => {
    return linearGradient.angle ^ gradientColorStopsHash(linearGradient, linearGradient.alpha);
  },
  /** @internal */
  toCSS: (linearGradient, overrideAngle) => {
    const stops = gradientColorStops(linearGradient, linearGradient.alpha);
    const angle = overrideAngle !== void 0 ? overrideAngle : linearGradient.angle;
    const cssStops = stops.map((stop) => `${stop.value} ${stop.position * 100}%`);
    return `linear-gradient(${angle}deg, ${cssStops.join(", ")})`;
  }
};

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/render/types/RadialGradient.js
var radialGradientKeys = [
  "widthFactor",
  "heightFactor",
  "centerAnchorX",
  "centerAnchorY",
  "alpha"
];
var RadialGradient = {
  /**
   * @param value -
   * @public
   */
  isRadialGradient: (value) => {
    return value && radialGradientKeys.every((key3) => key3 in value) && (isSimpleGradient(value) || isMultiStopGradient(value));
  },
  /** @internal */
  hash: (radialGradient) => {
    return radialGradient.centerAnchorX ^ radialGradient.centerAnchorY ^ radialGradient.widthFactor ^ radialGradient.heightFactor ^ gradientColorStopsHash(radialGradient, radialGradient.alpha);
  },
  /** @internal */
  toCSS: (radialGradient) => {
    const { alpha, widthFactor, heightFactor, centerAnchorX, centerAnchorY } = radialGradient;
    const stops = gradientColorStops(radialGradient, alpha);
    const cssStops = stops.map((stop) => `${stop.value} ${stop.position * 100}%`);
    return `radial-gradient(${widthFactor * 100}% ${heightFactor * 100}% at ${centerAnchorX * 100}% ${centerAnchorY * 100}%, ${cssStops.join(", ")})`;
  }
};

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/render/traits/Background.js
function collectBackgroundFromProps({ background, backgroundColor }, style) {
  if (backgroundColor) {
    if (typeof backgroundColor === "string" || isMotionValue(backgroundColor)) {
      style.backgroundColor = backgroundColor;
    } else if (Color.isColorObject(background)) {
      style.backgroundColor = background.initialValue || Color.toRgbString(background);
    }
  } else if (background) {
    background = Animatable.get(background, null);
    if (typeof background === "string" || isMotionValue(background)) {
      style.background = background;
    } else if (LinearGradient.isLinearGradient(background)) {
      style.background = LinearGradient.toCSS(background);
    } else if (RadialGradient.isRadialGradient(background)) {
      style.background = RadialGradient.toCSS(background);
    } else if (Color.isColorObject(background)) {
      style.backgroundColor = background.initialValue || Color.toRgbString(background);
    }
  }
}

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/render/utils/extractStyleFromProps.js
function extractStyleFromProps(props, name, styleRef, into) {
  if (into === void 0) {
    into = name;
  }
  if (props[name] !== void 0) {
    styleRef[into] = props[name];
    return;
  }
}

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/render/presentation/Frame/getStyleForFrameProps.js
function hasLeftAndRight(style) {
  if (!style)
    return false;
  return style.left !== void 0 && style.right !== void 0;
}
function hasTopAndBottom(style) {
  if (!style)
    return false;
  return style.top !== void 0 && style.bottom !== void 0;
}
function getStyleForFrameProps(props) {
  if (!props) {
    return {};
  }
  const style = {};
  if (props.preserve3d === true) {
    style.transformStyle = "preserve-3d";
  } else if (props.preserve3d === false) {
    style.transformStyle = "flat";
  }
  if (props.backfaceVisible === true) {
    style.backfaceVisibility = "visible";
  } else if (props.backfaceVisible === false) {
    style.backfaceVisibility = "hidden";
  }
  if (style.backfaceVisibility) {
    style.WebkitBackfaceVisibility = style.backfaceVisibility;
  }
  if (props.perspective !== void 0) {
    style.perspective = style.WebkitPerspective = props.perspective;
  }
  if (!props.__fromCanvasComponent) {
    if (props.center === true) {
      style.left = "50%";
      style.top = "50%";
    } else {
      if (props.center === "x") {
        style.left = "50%";
      } else if (props.center === "y") {
        style.top = "50%";
      }
    }
  }
  extractStyleFromProps(props, "size", style);
  extractStyleFromProps(props, "width", style);
  extractStyleFromProps(props, "height", style);
  extractStyleFromProps(props, "minWidth", style);
  extractStyleFromProps(props, "minHeight", style);
  extractStyleFromProps(props, "top", style);
  extractStyleFromProps(props, "right", style);
  extractStyleFromProps(props, "bottom", style);
  extractStyleFromProps(props, "left", style);
  extractStyleFromProps(props, "position", style);
  extractStyleFromProps(props, "overflow", style);
  extractStyleFromProps(props, "opacity", style);
  if (!props._border || !props._border.borderWidth)
    extractStyleFromProps(props, "border", style);
  extractStyleFromProps(props, "borderRadius", style);
  extractStyleFromProps(props, "radius", style, "borderRadius");
  extractStyleFromProps(props, "color", style);
  extractStyleFromProps(props, "shadow", style, "boxShadow");
  extractStyleFromProps(props, "x", style);
  extractStyleFromProps(props, "y", style);
  extractStyleFromProps(props, "z", style);
  extractStyleFromProps(props, "rotate", style);
  extractStyleFromProps(props, "rotateX", style);
  extractStyleFromProps(props, "rotateY", style);
  extractStyleFromProps(props, "rotateZ", style);
  extractStyleFromProps(props, "scale", style);
  extractStyleFromProps(props, "scaleX", style);
  extractStyleFromProps(props, "scaleY", style);
  extractStyleFromProps(props, "skew", style);
  extractStyleFromProps(props, "skewX", style);
  extractStyleFromProps(props, "skewY", style);
  extractStyleFromProps(props, "originX", style);
  extractStyleFromProps(props, "originY", style);
  extractStyleFromProps(props, "originZ", style);
  collectBackgroundFromProps(props, style);
  return style;
}

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/render/presentation/Frame/FrameWithMotion.js
function hasEvents(props) {
  for (const key3 in props) {
    if (key3 === "drag" || key3.startsWith("while") || typeof props[key3] === "function" && key3.startsWith("on") && !key3.includes("Animation")) {
      return true;
    }
  }
  return false;
}
var pointerEvents = [
  "onClick",
  "onDoubleClick",
  "onMouse",
  "onMouseDown",
  "onMouseUp",
  "onTapDown",
  "onTap",
  "onTapUp",
  "onPointer",
  "onPointerDown",
  "onPointerUp",
  "onTouch",
  "onTouchDown",
  "onTouchUp"
];
var pointerEventsSet = /* @__PURE__ */ new Set([
  ...pointerEvents,
  ...pointerEvents.map((event) => `${event}Capture`)
  // Add capture event variants
]);
function getCursorFromEvents(props) {
  if (props.drag) {
    return "grab";
  }
  for (const key3 in props) {
    if (pointerEventsSet.has(key3)) {
      return "pointer";
    }
  }
  return void 0;
}
var overflowKey = "overflow";
function hasScrollableContent(props) {
  if (hasScrollingOverflow(props))
    return true;
  if (!props.style)
    return false;
  if (hasScrollingOverflow(props.style))
    return true;
  return false;
}
function hasScrollingOverflow(props) {
  if (overflowKey in props && (props[overflowKey] === "scroll" || props[overflowKey] === "auto"))
    return true;
  return false;
}
function unwrapFrameProps(frameProps) {
  const { left, top, bottom, right, width, height, center, _constraints, size: size2, widthType, heightType, positionFixed, positionAbsolute } = frameProps;
  const minWidth = resolveMotionValue(frameProps.minWidth);
  const minHeight = resolveMotionValue(frameProps.minHeight);
  const maxWidth = resolveMotionValue(frameProps.maxWidth);
  const maxHeight = resolveMotionValue(frameProps.maxHeight);
  const constraintProps = {
    top: resolveMotionValue(top),
    left: resolveMotionValue(left),
    bottom: resolveMotionValue(bottom),
    right: resolveMotionValue(right),
    width: resolveMotionValue(width),
    height: resolveMotionValue(height),
    size: resolveMotionValue(size2),
    center,
    _constraints,
    widthType,
    heightType,
    positionFixed,
    positionAbsolute,
    minWidth,
    minHeight,
    maxWidth,
    maxHeight
  };
  return constraintProps;
}
var defaultFrameRect = { x: 0, y: 0, width: 200, height: 200 };
function useStyleAndRect(props) {
  var _a, _b;
  injectComponentCSSRules();
  const inCodeComponent = Boolean(useContext5(ComponentContainerContext));
  const { style, _initialStyle, __fromCanvasComponent, size: size2 } = props;
  const unwrappedProps = unwrapFrameProps(props);
  const constraintsRect = useConstraints(unwrappedProps);
  const defaultStyle = {
    display: "block",
    flexShrink: 0,
    userSelect: RenderTarget.current() !== RenderTarget.preview ? "none" : void 0
  };
  if (!props.__fromCanvasComponent) {
    defaultStyle.backgroundColor = props.background === void 0 ? "rgba(0, 170, 255, 0.3)" : void 0;
  }
  const shouldDisablePointerEvents = !hasEvents(props) && !props.__fromCanvasComponent && !hasScrollableContent(props);
  const safeToEditPointerEvents = props.style ? !("pointerEvents" in props.style) : true;
  if (shouldDisablePointerEvents && safeToEditPointerEvents) {
    defaultStyle.pointerEvents = "none";
  }
  const addTextCentering = React19.Children.count(props.children) > 0 && React19.Children.toArray(props.children).every((child) => {
    return typeof child === "string" || typeof child === "number";
  });
  const centerTextStyle = addTextCentering && {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center"
  };
  const propsStyle = getStyleForFrameProps(props);
  if (size2 === void 0 && !__fromCanvasComponent) {
    if (!hasLeftAndRight(propsStyle)) {
      defaultStyle.width = defaultFrameRect.width;
    }
    if (!hasTopAndBottom(propsStyle)) {
      defaultStyle.height = defaultFrameRect.height;
    }
  }
  if (unwrappedProps.minWidth !== void 0) {
    defaultStyle.minWidth = unwrappedProps.minWidth;
  }
  if (unwrappedProps.minHeight !== void 0) {
    defaultStyle.minHeight = unwrappedProps.minHeight;
  }
  let constraintsStyle = {};
  if (constraintsEnabled(unwrappedProps)) {
    if (constraintsRect && !isAutoSized(props)) {
      constraintsStyle = {
        left: constraintsRect.x,
        top: constraintsRect.y,
        width: constraintsRect.width,
        height: constraintsRect.height,
        right: void 0,
        bottom: void 0
      };
    }
  }
  Object.assign(defaultStyle, centerTextStyle, _initialStyle, propsStyle, constraintsStyle, style);
  Object.assign(defaultStyle, {
    overflowX: (_a = defaultStyle.overflowX) != null ? _a : defaultStyle.overflow,
    overflowY: (_b = defaultStyle.overflowY) != null ? _b : defaultStyle.overflow,
    overflow: void 0
  });
  Layer.applyWillChange(props, defaultStyle, true);
  let resultStyle = defaultStyle;
  if (!defaultStyle.transform) {
    resultStyle = __spreadValues({ x: 0, y: 0 }, defaultStyle);
  }
  const onCanvas = RenderTarget.current() === RenderTarget.canvas;
  if (props.positionSticky) {
    if (!onCanvas || inCodeComponent) {
      resultStyle.position = "sticky";
      resultStyle.willChange = "transform";
      resultStyle.zIndex = 1;
      resultStyle.top = props.positionStickyTop;
      resultStyle.right = props.positionStickyRight;
      resultStyle.bottom = props.positionStickyBottom;
      resultStyle.left = props.positionStickyLeft;
    }
  } else if (onCanvas && (props.positionFixed || props.positionAbsolute)) {
    resultStyle.position = "absolute";
  }
  if ("rotate" in resultStyle && resultStyle.rotate === void 0) {
    delete resultStyle.rotate;
  }
  return [resultStyle, constraintsRect];
}
var filteredProps = /* @__PURE__ */ new Set([
  "width",
  "height",
  "opacity",
  "overflow",
  "radius",
  "background",
  "color",
  "x",
  "y",
  "z",
  "rotate",
  "rotateX",
  "rotateY",
  "rotateZ",
  "scale",
  "scaleX",
  "scaleY",
  "skew",
  "skewX",
  "skewY",
  "originX",
  "originY",
  "originZ"
]);
function getMotionProps(props) {
  const motionProps = {};
  for (const key3 in props) {
    const isValid = isValidMotionProp(key3) || isPropValid(key3);
    if (isValid && !filteredProps.has(key3)) {
      motionProps[key3] = props[key3];
    } else if (key3 === "positionTransition" || key3 === "layoutTransition") {
      motionProps["layout"] = true;
      if (typeof props[key3] !== "boolean" && !props.transition) {
        motionProps["transition"] = props[key3];
      }
    }
  }
  return motionProps;
}
function hasDataFramerName(props) {
  return "data-framer-name" in props;
}
var VisibleFrame = /* @__PURE__ */ forwardRef(function VisibleFrame2(props, forwardedRef) {
  var _a, _b;
  const { name, center, border, _border, __portal } = props;
  const { props: propsWithOverrides, children } = processOverrideForwarding(props);
  const motionProps = getMotionProps(propsWithOverrides);
  const layoutId = useLayoutId(props);
  const cursor = getCursorFromEvents(props);
  const fallbackRef = useRef7(null);
  const ref = forwardedRef != null ? forwardedRef : fallbackRef;
  const dataProps = {
    "data-framer-component-type": "Frame",
    "data-framer-cursor": cursor,
    "data-framer-highlight": cursor === "pointer" ? true : void 0,
    "data-layoutid": layoutId
  };
  if (!hasDataFramerName(props) && name) {
    dataProps["data-framer-name"] = name;
  }
  const [currentStyle, rect] = useStyleAndRect(propsWithOverrides);
  const unwrappedProps = unwrapFrameProps(propsWithOverrides);
  const autoSized = isAutoSized(unwrappedProps);
  if (center && !(rect && !autoSized && constraintsEnabled(unwrappedProps))) {
    if (!motionProps.transformTemplate)
      motionProps.transformTemplate = transformTemplate(center);
    Object.assign(dataProps, layoutHintDataPropsForCenter(center));
  } else if (!motionProps.transformTemplate) {
    motionProps.transformTemplate = void 0;
  }
  useMeasureLayout(props, ref);
  const backgroundImage = backgroundImageFromProps(props);
  const inCodeComponent = Boolean(useContext5(ComponentContainerContext));
  const parentSize = resolveParentSize(propsWithOverrides, unwrappedProps, rect, inCodeComponent);
  const wrappedContent = useProvideParentSize(React19.createElement(
    React19.Fragment,
    null,
    backgroundImage ? React19.createElement(BackgroundImageComponent, { alt: (_a = props.alt) != null ? _a : "", image: backgroundImage, containerSize: rect != null ? rect : void 0, nodeId: props.id && nodeIdFromString(props.id), layoutId }) : null,
    children,
    React19.createElement(Border, __spreadProps(__spreadValues({}, _border), { border, layoutId }))
  ), parentSize);
  const MotionComponent = motion5[(_b = props.as) != null ? _b : "div"];
  return React19.createElement(
    MotionComponent,
    __spreadProps(__spreadValues(__spreadValues({}, dataProps), motionProps), { layoutId, style: currentStyle, ref, transformValues }),
    wrappedContent,
    __portal
  );
});
var FrameWithMotion = /* @__PURE__ */ forwardRef(function FrameWithMotion2(props, ref) {
  if (process3.env.NODE_ENV !== "production" && safeWindow["perf"])
    safeWindow["perf"].nodeRender();
  const { visible = true } = props;
  if (!visible)
    return null;
  return React19.createElement(VisibleFrame, __spreadProps(__spreadValues({}, props), { ref }));
});
function resolveParentSize(props, unwrappedProps, rect, inCodeComponent) {
  if (inCodeComponent) {
    const parentSize = rect ? { width: rect.width, height: rect.height } : ParentSizeState.Disabled;
    return parentSize;
  }
  const { _usesDOMRect } = props;
  const { widthType = DimensionType.FixedNumber, heightType = DimensionType.FixedNumber, width, height } = unwrappedProps;
  if (rect && !_usesDOMRect) {
    return rect;
  }
  if (widthType === DimensionType.FixedNumber && heightType === DimensionType.FixedNumber && typeof width === "number" && typeof height === "number") {
    return { width, height };
  }
  if (_usesDOMRect || props.positionFixed || props.positionAbsolute) {
    return ParentSizeState.DisabledForCurrentLevel;
  }
  return ParentSizeState.Unknown;
}
function isAutoSized({ width, height }) {
  return width === "auto" || width === "min-content" || height === "auto" || height === "min-content";
}

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/components/EmptyState.js
import React20 from "react";
function EmptyState({ title = "", description = "Click and drag the connector to any frame on the canvas \u2192", children, size: size2, hide, insideUserCodeComponent = false, position = "absolute" }) {
  const { target } = RenderEnvironment;
  const childCount = React20.Children.count(children);
  if (insideUserCodeComponent && childCount === 0) {
    return React20.createElement(FrameWithMotion, __spreadProps(__spreadValues({}, size2), { "data-name": "placeholder" }));
  }
  if (target !== RenderTarget.canvas)
    return null;
  if (hide)
    return null;
  if (childCount !== 0)
    return null;
  return React20.createElement(
    FrameWithMotion,
    { key: "empty-state", className: "framerInternalUI-canvasPlaceholder", top: 0, left: 0, bottom: 0, right: 0, style: __spreadValues({ position }, size2) },
    React20.createElement(
      "div",
      { style: {
        display: "flex",
        alignItems: "center",
        lineHeight: "1.4",
        height: "100%",
        width: "100%"
      } },
      React20.createElement(
        "div",
        { style: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          width: "100%",
          // Use a mask to fade out the right edge of the content as it gets cropped.
          WebkitMaskImage: `linear-gradient(90deg, black, black calc(100% - 12px * ${scaleFactor}), transparent)`
        } },
        React20.createElement(Title, null, title),
        React20.createElement(Description, null, description)
      )
    )
  );
}
var scaleFactor = "var(--framerInternalCanvas-canvasPlaceholderContentScaleFactor, 1)";
function Title({ children }) {
  return React20.createElement("span", { style: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    flexGrow: 1,
    flexShrink: 0,
    fontWeight: 600,
    marginBottom: "5px"
  } }, children);
}
function Description({ children }) {
  return React20.createElement("span", { style: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    flexGrow: 1,
    flexShrink: 0,
    fontWeight: 400,
    maxWidth: "200px"
  } }, children);
}

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/components/Scroll/useWheelScroll.js
import { useDomEvent } from "framer-motion";
import { useCallback as useCallback6, useRef as useRef8 } from "react";

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/render/utils/debounce.js
function debounce(fn, time2) {
  let timeout;
  const debounced = (...args) => {
    safeWindow.clearTimeout(timeout);
    timeout = safeWindow.setTimeout(fn, time2, ...args);
  };
  const cancel = () => {
    safeWindow.clearTimeout(timeout);
  };
  debounced.cancel = cancel;
  return debounced;
}

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/utils/math.js
var clamp3 = (value, a2, b) => {
  const min = Math.min(a2, b);
  const max = Math.max(a2, b);
  if (value < min) {
    value = min;
  }
  if (value > max) {
    value = max;
  }
  return value;
};

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/components/Scroll/useWheelScroll.js
function useWheelScroll(ref, { enabled, initial, prev, direction, constraints, offsetX, offsetY, onScrollStart, onScroll, onScrollEnd }) {
  const isWheelScrollActive = useRef8(false);
  const getPointData = useCallback6(() => {
    const point = getPoint(offsetX, offsetY);
    const data = {
      point,
      velocity: { x: offsetX.getVelocity(), y: offsetY.getVelocity() },
      offset: { x: point.x - initial.x, y: point.y - initial.y },
      delta: { x: point.x - prev.x, y: point.y - prev.y }
    };
    prev.x = point.x;
    prev.y = point.y;
    return data;
  }, []);
  let handler;
  if (enabled) {
    let clampX = function(v) {
      return constraints.current === null ? v : clamp3(v, constraints.current.left, constraints.current.right);
    }, clampY = function(v) {
      return constraints.current === null ? v : clamp3(v, constraints.current.top, constraints.current.bottom);
    }, updateX = function(delta) {
      offsetX.stop();
      offsetX.set(clampX(offsetX.get() - delta));
    }, updateY = function(delta) {
      offsetY.stop();
      offsetY.set(clampY(offsetY.get() - delta));
    };
    const debouncedOnScrollEnd = debounce(() => {
      onScrollEnd && onScrollEnd(getPointData());
      isWheelScrollActive.current = false;
    }, 200);
    handler = (e2) => {
      e2.preventDefault();
      if (!isWheelScrollActive.current) {
        const x = offsetX.get();
        const y = offsetY.get();
        initial.x = x;
        initial.y = y;
        prev.x = x;
        prev.y = y;
        onScrollStart && onScrollStart(getPointData());
        isWheelScrollActive.current = true;
      }
      switch (direction) {
        case "horizontal":
          updateX(e2.deltaX);
          break;
        case "vertical":
          updateY(e2.deltaY);
          break;
        default:
          updateX(e2.deltaX);
          updateY(e2.deltaY);
      }
      onScroll && onScroll(getPointData());
      debouncedOnScrollEnd();
    };
  }
  useDomEvent(ref, "wheel", handler, { passive: false });
}
function getPoint(x, y) {
  return { x: x.get(), y: y.get() };
}

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/components/utils/paddingFromProps.js
function hasPaddingPerSide(props) {
  const { paddingPerSide, paddingTop, paddingBottom, paddingLeft, paddingRight } = props;
  return paddingPerSide !== false && (paddingTop !== void 0 || paddingBottom !== void 0 || paddingLeft !== void 0 || paddingRight !== void 0);
}
function paddingFromProps(props) {
  const { padding = 0, paddingTop, paddingBottom, paddingLeft, paddingRight } = props;
  if (hasPaddingPerSide(props)) {
    return {
      top: paddingTop !== void 0 ? paddingTop : padding,
      bottom: paddingBottom !== void 0 ? paddingBottom : padding,
      left: paddingLeft !== void 0 ? paddingLeft : padding,
      right: paddingRight !== void 0 ? paddingRight : padding
    };
  }
  return {
    top: padding,
    bottom: padding,
    left: padding,
    right: padding
  };
}
function makePaddingString({ top, left, bottom, right }) {
  return `${top}px ${right}px ${bottom}px ${left}px`;
}

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/components/Page/PageContainer.js
import React24 from "react";

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/components/Stack/Stack.js
import { motion as motion6 } from "framer-motion";
import React23 from "react";

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/modules/useSafariGapFix.js
import React21 from "react";
function triggerStackReflow(element, display) {
  if (!element)
    return;
  element.style.display = "none";
  void element.offsetHeight;
  element.style.display = display;
}
var requiresPolyfill = Boolean(isSafari() && safariVersion() < 15.4);
function useSafariGapFix(gap, ref, display) {
  if (!requiresPolyfill)
    return void 0;
  const isInitialRender = React21.useRef(true);
  const hasTriggeredReflow = React21.useRef(false);
  const prevGapValue = React21.useRef(gap);
  hasTriggeredReflow.current = false;
  React21.useLayoutEffect(() => {
    prevGapValue.current = gap;
    if (isInitialRender.current) {
      isInitialRender.current = false;
      return;
    }
    if (!hasTriggeredReflow.current) {
      triggerStackReflow(ref.current, display);
      hasTriggeredReflow.current = true;
    }
  }, [gap, ref, prevGapValue, display]);
  return React21.useCallback(() => {
    if (prevGapValue.current === gap)
      return;
    if (!hasTriggeredReflow.current)
      triggerStackReflow(ref.current, display);
    hasTriggeredReflow.current = true;
  }, [gap, ref]);
}

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/render/types/PropertyControls.js
var ControlType;
(function(ControlType2) {
  ControlType2["Boolean"] = "boolean";
  ControlType2["Number"] = "number";
  ControlType2["String"] = "string";
  ControlType2["RichText"] = "richtext";
  ControlType2["FusedNumber"] = "fusednumber";
  ControlType2["Enum"] = "enum";
  ControlType2["SegmentedEnum"] = "segmentedenum";
  ControlType2["Color"] = "color";
  ControlType2["Image"] = "image";
  ControlType2["ResponsiveImage"] = "responsiveimage";
  ControlType2["File"] = "file";
  ControlType2["ComponentInstance"] = "componentinstance";
  ControlType2["Array"] = "array";
  ControlType2["EventHandler"] = "eventhandler";
  ControlType2["Transition"] = "transition";
  ControlType2["Link"] = "link";
  ControlType2["Date"] = "date";
  ControlType2["Object"] = "object";
  ControlType2["Font"] = "font";
  ControlType2["PageScope"] = "pagescope";
})(ControlType || (ControlType = {}));

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/utils/applyControlDefaultsToReactDefaultProps.js
function isReactComponent(component) {
  return isObject(component) || isFunction(component);
}
var optionalKey = "optional";
function controlIsOptional(control) {
  return !!control && optionalKey in control && control[optionalKey] === true;
}
function shouldBeNever(_) {
}
function getControlDefaultValue(control) {
  try {
    switch (control.type) {
      case ControlType.String:
      case ControlType.Color:
      case ControlType.Date:
      case ControlType.Link:
        return isString(control.defaultValue) ? control.defaultValue : void 0;
      case ControlType.Boolean:
        return isBoolean(control.defaultValue) ? control.defaultValue : void 0;
      case ControlType.Enum:
        if (isUndefined(control.defaultValue))
          return void 0;
        return control.options.includes(control.defaultValue) ? control.defaultValue : void 0;
      case ControlType.FusedNumber:
      case ControlType.Number:
        return isNumber(control.defaultValue) ? control.defaultValue : void 0;
      case ControlType.Transition:
        return isObject(control.defaultValue) ? control.defaultValue : void 0;
      case ControlType.Font:
        return isObject(control.defaultValue) ? control.defaultValue : void 0;
      case ControlType.Object: {
        const value = isObject(control.defaultValue) ? control.defaultValue : {};
        if (isObject(control.controls)) {
          applyControlDefaultsToDefaultProps(value, control.controls);
        }
        return value;
      }
      case ControlType.Array:
        return isArray(control.defaultValue) ? control.defaultValue : void 0;
      case ControlType.File:
      case ControlType.Image:
      case ControlType.RichText:
      case ControlType.PageScope:
      case ControlType.EventHandler:
      case ControlType.SegmentedEnum:
      case ControlType.ResponsiveImage:
      case ControlType.ComponentInstance:
        return void 0;
      // No default
      default:
        shouldBeNever(control);
        return void 0;
    }
  } catch (e2) {
    return void 0;
  }
}
function applyControlDefaultsToDefaultProps(defaultProps, controls) {
  for (const controlKey in controls) {
    const control = controls[controlKey];
    if (!control)
      continue;
    const currentDefault = defaultProps[controlKey];
    if (!isUndefined(currentDefault))
      continue;
    if (controlIsOptional(control))
      continue;
    const defaultValue = getControlDefaultValue(control);
    if (isUndefined(defaultValue))
      continue;
    defaultProps[controlKey] = defaultValue;
  }
}
function getDefaultProps(component) {
  if (isObject(component.defaultProps)) {
    return component.defaultProps;
  }
  const defaultProps = {};
  component.defaultProps = defaultProps;
  return defaultProps;
}
function applyControlDefaultsToReactDefaultProps(component, controls) {
  if (!isReactComponent(component))
    return;
  const defaultProps = getDefaultProps(component);
  applyControlDefaultsToDefaultProps(defaultProps, controls);
}

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/utils/addPropertyControls.js
function addPropertyControls(component, propertyControls) {
  Object.assign(component, { propertyControls });
  applyControlDefaultsToReactDefaultProps(component, propertyControls);
}
function getPropertyControls(component) {
  return component.propertyControls;
}

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/components/Stack/Stack.js
var Stack = /* @__PURE__ */ (() => {
  const StackInner = React23.memo(React23.forwardRef(function StackInner2(stackProps, forwardedRef) {
    var _b, _c;
    const _a = stackProps, { as = "div", direction = "vertical", distribution = "start", alignment = "center", gap = 10, wrap = false, useFlexboxGap: externalUseFlexboxGap = true, children, style: styleProp, className, willChangeTransform, __fromCodeComponentNode, parentSize, __contentWrapperStyle } = _a, containerProps = __objRest(_a, ["as", "direction", "distribution", "alignment", "gap", "wrap", "useFlexboxGap", "children", "style", "className", "willChangeTransform", "__fromCodeComponentNode", "parentSize", "__contentWrapperStyle"]);
    const useFlexboxGap = Boolean(externalUseFlexboxGap || wrap);
    const stackRef = React23.useRef(null);
    const onBeforeLayoutMeasure = useSafariGapFix(gap, stackRef, "flex");
    const flexDirection = toFlexDirection(direction);
    const isReverse = isReverseDirection(flexDirection);
    const justifyContent = toJustifyOrAlignment(distribution);
    const padding = hasPaddingPerSide(containerProps) || containerProps.padding ? makePaddingString(paddingFromProps(containerProps)) : void 0;
    const style = __spreadValues({}, styleProp);
    Layer.applyWillChange({ willChangeTransform }, style, true);
    if (__fromCodeComponentNode && !constraintsEnabled(unwrapFrameProps(containerProps))) {
      containerProps.width = "100%";
      containerProps.height = "100%";
      containerProps._constraints = { enabled: true };
    }
    const layoutId = useLayoutId(stackProps);
    const { children: _children, props } = processOverrideForwarding(containerProps, children);
    const widthType = (_b = containerProps.widthType) != null ? _b : containerProps.width === "auto" ? DimensionType.Auto : DimensionType.FixedNumber;
    const heightType = (_c = containerProps.heightType) != null ? _c : containerProps.height === "auto" ? DimensionType.Auto : DimensionType.FixedNumber;
    const fractionChildren = handleFraction(_children, direction, widthType, heightType);
    const gapChildren = wrapInGapElementForLegacyGap(fractionChildren, gap, flexDirection, justifyContent, useFlexboxGap, wrap);
    const content = useProvideParentSize(gapChildren, parentSize != null ? parentSize : ParentSizeState.Disabled);
    const attributes = {
      "data-framer-component-type": "Stack"
    };
    const fromCanvasComponent = containerProps.__fromCanvasComponent;
    if (fromCanvasComponent)
      attributes["data-framer-generated"] = true;
    const alignItems = toJustifyOrAlignment(alignment);
    const contentWrapperStyle = __spreadValues({
      display: "flex",
      flexDirection,
      flexWrap: wrap ? "wrap" : "nowrap",
      justifyContent,
      alignItems,
      alignContent: alignItems,
      padding
    }, __contentWrapperStyle);
    const gapEnabled = isGapEnabled(gap, justifyContent, wrap);
    if (useFlexboxGap && gapEnabled) {
      const gapSupportedInMainAxis = isGapSupportedInMainAxis(justifyContent);
      if (gapSupportedInMainAxis || direction !== "horizontal") {
        contentWrapperStyle["--stack-native-column-gap"] = `${gap}px`;
      }
      if (gapSupportedInMainAxis || direction !== "vertical") {
        contentWrapperStyle["--stack-native-row-gap"] = `${gap}px`;
      }
    }
    if (contentWrapperStyle.width === void 0) {
      contentWrapperStyle.width = widthType === DimensionType.Auto ? "min-content" : "100%";
    }
    if (contentWrapperStyle.height === void 0) {
      contentWrapperStyle.height = heightType === DimensionType.Auto ? "min-content" : "100%";
    }
    if (fromCanvasComponent) {
      if (styleProp == null ? void 0 : styleProp.width)
        contentWrapperStyle.width = styleProp == null ? void 0 : styleProp.width;
      if (styleProp == null ? void 0 : styleProp.height)
        contentWrapperStyle.height = styleProp == null ? void 0 : styleProp.height;
    }
    return React23.createElement(
      FrameWithMotion,
      __spreadProps(__spreadValues(__spreadProps(__spreadValues({ as, background: fromCanvasComponent ? void 0 : "none" }, props), { layoutId, ref: useForwardedRef(forwardedRef, stackRef) }), attributes), { style, className, layoutScroll: true }),
      React23.createElement(motion6.div, { "data-framer-stack-content-wrapper": true, "data-framer-stack-direction-reverse": isReverse, "data-framer-stack-gap-enabled": gapEnabled, style: contentWrapperStyle, onBeforeLayoutMeasure }, content)
    );
  }));
  StackInner["defaultProps"] = {
    distribution: "start"
  };
  StackInner.displayName = "Stack";
  addPropertyControls(StackInner, {
    direction: {
      type: ControlType.SegmentedEnum,
      options: ["horizontal", "vertical"],
      title: "Direction",
      defaultValue: "vertical"
    },
    distribution: {
      type: ControlType.Enum,
      options: ["start", "center", "end", "space-between", "space-around", "space-evenly"],
      optionTitles: ["Start", "Center", "End", "Space Between", "Space Around", "Space Evenly"],
      title: "Distribute",
      defaultValue: "space-around"
    },
    alignment: {
      type: ControlType.SegmentedEnum,
      options: ["start", "center", "end"],
      title: "Align",
      defaultValue: "center"
    },
    gap: {
      type: ControlType.Number,
      min: 0,
      title: "Gap",
      hidden: (props) => {
        return props.distribution !== void 0 && ["space-between", "space-around", "space-evenly"].includes(props.distribution);
      },
      defaultValue: 10
    },
    padding: {
      type: ControlType.FusedNumber,
      toggleKey: "paddingPerSide",
      toggleTitles: ["Padding", "Padding per side"],
      valueKeys: ["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"],
      valueLabels: ["t", "r", "b", "l"],
      min: 0,
      title: "Padding",
      defaultValue: 0
    }
  });
  return StackInner;
})();
function isFractionDimension(dimension) {
  return typeof dimension === "string" && dimension.endsWith("fr");
}
function fraction(dimension) {
  const value = parseFloat(dimension);
  return isFiniteNumber(value) ? value : 0;
}
function handleFraction(children, direction, widthType, heightType) {
  return React23.Children.map(children, (child) => {
    if (!isReactChild(child) || !isReactElement(child))
      return;
    const isVertical = direction === "vertical";
    const style = {};
    let hasFraction = false;
    const { style: propsStyle, size: size2 } = child.props;
    let { width, height } = child.props;
    if (size2 !== void 0) {
      if (width === void 0)
        width = size2;
      if (height === void 0)
        height = size2;
    }
    let newWidth = width;
    let newHeight = height;
    if (isFractionDimension(width)) {
      hasFraction = true;
      hasFraction = true;
      if (isVertical) {
        if (widthType === DimensionType.Auto) {
          style.alignSelf = "stretch";
          newWidth = "auto";
        } else {
          newWidth = `${fraction(width) * 100}%`;
        }
      } else {
        newWidth = 1;
        style.flexGrow = fraction(width);
        style.flexBasis = 0;
      }
      style.width = newWidth;
    }
    if (isFractionDimension(height)) {
      hasFraction = true;
      if (isVertical) {
        newHeight = 1;
        style.flexGrow = fraction(height);
        style.flexBasis = 0;
      } else {
        if (heightType === DimensionType.Auto) {
          style.alignSelf = "stretch";
          newHeight = "auto";
        } else {
          newHeight = `${fraction(height) * 100}%`;
        }
      }
      style.height = newHeight;
    }
    if (!hasFraction)
      return child;
    const nextStyle = __spreadValues(__spreadValues({}, propsStyle), style);
    return React23.cloneElement(child, {
      width: newWidth,
      height: newHeight,
      style: nextStyle
    });
  });
}
function isGapSupportedInMainAxis(justifyContent) {
  if (!justifyContent)
    return false;
  return !["space-between", "space-around", "space-evenly", "stretch"].includes(justifyContent);
}
function isGapEnabled(gap, justifyContent, wrap) {
  if (!gap) {
    return false;
  }
  if (!wrap && !isGapSupportedInMainAxis(justifyContent)) {
    return false;
  }
  return true;
}
function wrapInGapElementForLegacyGap(children, gap, direction, justifyContent, useFlexboxGap, wrap) {
  const gapStyle = {
    // We need the wrapper to have `display: contents` to prevent the child
    // margins from collapsing when using the fallback gap solution.
    // https://codesandbox.io/s/dreamy-haslett-01ie5?file=/src/styles.css
    display: "contents"
  };
  const gapEnabled = isGapEnabled(gap, justifyContent, wrap);
  if (gapEnabled) {
    const isVertical = isVerticalDirection(direction);
    gapStyle["--stack-gap-x"] = `${isVertical ? 0 : gap}px`;
    gapStyle["--stack-gap-y"] = `${isVertical ? gap : 0}px`;
  }
  return React23.createElement("div", { "data-framer-legacy-stack-gap-enabled": gapEnabled, "data-framer-stack-flexbox-gap": useFlexboxGap, style: gapStyle }, children);
}
function toFlexDirection(direction) {
  switch (direction) {
    case "vertical":
      return "column";
    case "horizontal":
      return "row";
    default:
      return direction;
  }
}
function isVerticalDirection(direction) {
  return direction === "column" || direction === "column-reverse";
}
function isReverseDirection(direction) {
  switch (direction) {
    case "column-reverse":
    case "row-reverse":
      return true;
    default:
      return false;
  }
}
function toJustifyOrAlignment(distribution) {
  switch (distribution) {
    case "start":
      return "flex-start";
    case "end":
      return "flex-end";
    default:
      return distribution;
  }
}
function useForwardedRef(forwardedRef, innerRef) {
  return (element) => {
    innerRef.current = element;
    if (typeof forwardedRef === "function") {
      forwardedRef(element);
    } else if (forwardedRef) {
      forwardedRef.current = element;
    }
  };
}

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/components/Page/PageContainer.js
var pageContentWrapperType = "PageContentWrapper";
function PageContainer({ children, effect, dragEnabled, direction, contentHeight, contentWidth, alignment, gap, isLastPage, contentOffsetRef, constraintsRef, directionLock, onDragStart, onDrag, onDragEnd, layoutId }) {
  const isHorizontalDirection = direction === "horizontal";
  const dragAxis = isHorizontalDirection ? "x" : "y";
  const hasHorizontalGap = isHorizontalDirection && !isLastPage && gap;
  const hasVerticalGap = !isHorizontalDirection && !isLastPage && gap;
  const hasAutoWidth = contentWidth !== "stretch" && isHorizontalDirection;
  const hasAutoHeight = contentHeight !== "stretch" && !isHorizontalDirection;
  const wrapperWidth = hasAutoWidth ? "auto" : "100%";
  const wrapperHeight = hasAutoHeight ? "auto" : "100%";
  const containerWidth = hasHorizontalGap && wrapperWidth === "100%" ? `calc(100% + ${gap}px)` : wrapperWidth;
  const containerHeight = hasVerticalGap && wrapperHeight === "100%" ? `calc(100% + ${gap}px)` : wrapperHeight;
  return React24.createElement(
    FrameWithMotion,
    { position: "relative", "data-framer-component-type": "PageContainer", width: containerWidth, height: containerHeight, layoutId: layoutId ? `${layoutId}-container` : void 0, backgroundColor: "transparent", drag: dragEnabled ? dragAxis : false, dragDirectionLock: directionLock, _dragX: contentOffsetRef.current.x, _dragY: contentOffsetRef.current.y, dragConstraints: constraintsRef.current, onDrag, onDragStart, onDragEnd, preserve3d: true, style: {
      pointerEvents: void 0,
      paddingRight: hasHorizontalGap ? gap : 0,
      paddingBottom: hasVerticalGap ? gap : 0
    } },
    React24.createElement(FrameWithMotion, { position: "relative", "data-framer-component-type": pageContentWrapperType, width: wrapperWidth, height: wrapperHeight, preserve3d: false, backgroundColor: "transparent", key: effect ? Object.keys(effect).join("") : "", style: __spreadProps(__spreadValues({}, effect), {
      pointerEvents: void 0,
      display: "flex",
      flexDirection: isHorizontalDirection ? "row" : "column",
      alignItems: alignment && toJustifyOrAlignment(alignment)
    }) }, children)
  );
}

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/components/Page/EmulatedPage.js
var Page = /* @__PURE__ */ React25.forwardRef(function Page2(props, forwardedRef) {
  var _b;
  const _a = props, { direction = "horizontal", contentWidth = "stretch", contentHeight = "stretch", alignment = "start", currentPage = 0, animateCurrentPageUpdate = true, gap: gapValue = 10, padding = 0, momentum = false, dragEnabled = true, defaultEffect = "none", background = "transparent", overflow = "hidden", __fromCodeComponentNode, effect, children, contentOffsetX, contentOffsetY, onChangePage, onScrollStart, onScroll, onDragStart, onDrag, onDragEnd, directionLock, onScrollEnd, onDirectionLock, onUpdate, wheelEnabled = false, layoutId: specificLayoutId } = _a, rest = __objRest(_a, ["direction", "contentWidth", "contentHeight", "alignment", "currentPage", "animateCurrentPageUpdate", "gap", "padding", "momentum", "dragEnabled", "defaultEffect", "background", "overflow", "__fromCodeComponentNode", "effect", "children", "contentOffsetX", "contentOffsetY", "onChangePage", "onScrollStart", "onScroll", "onDragStart", "onDrag", "onDragEnd", "directionLock", "onScrollEnd", "onDirectionLock", "onUpdate", "wheelEnabled", "layoutId"]);
  const layoutId = useLayoutId(props, { specificLayoutId, postfix: "page" });
  const containerProps = __spreadProps(__spreadValues({}, rest), { background });
  const hasMountedRef = React25.useRef(false);
  const hasFixedSize = RenderTarget.hasRestrictions() && props.__fromCodeComponentNode && isFiniteNumber(containerProps.width) && isFiniteNumber(containerProps.height);
  if (!hasFixedSize && __fromCodeComponentNode && !containerProps.__fromCanvasComponent) {
    containerProps.width = "100%";
    containerProps.height = "100%";
    containerProps._constraints = { enabled: true };
  }
  const { initial, prev } = React25.useRef({
    initial: { x: 0, y: 0 },
    prev: { x: 0, y: 0 }
  }).current;
  const isHorizontal = direction === "horizontal";
  let gap = gapValue;
  if (gap < 0) {
    warnOnce(`The 'gap' property of Page component can not be negative, but is ${gapValue}.`);
    gap = 0;
  }
  injectComponentCSSRules();
  const pageCount = React25.Children.count(children);
  const maxOffsetRef = React25.useRef(0);
  const constraints = React25.useRef({ top: 0, left: 0, right: 0, bottom: 0 });
  const fallbackContainerRef = React25.useRef(null);
  const containerRef = forwardedRef || fallbackContainerRef;
  const scrollableRef = React25.useRef(null);
  const pageEffectValuesRef = React25.useRef([]);
  const pageRectsRef = React25.useRef([]);
  const internalX = useMotionValue(isMotionValue(contentOffsetX) ? 0 : contentOffsetX != null ? contentOffsetX : 0);
  const internalY = useMotionValue(isMotionValue(contentOffsetY) ? 0 : contentOffsetY != null ? contentOffsetY : 0);
  const contentOffsetRef = React25.useRef({
    x: isMotionValue(contentOffsetX) ? contentOffsetX : internalX,
    y: isMotionValue(contentOffsetY) ? contentOffsetY : internalY
  });
  const currentContentPageRef = React25.useRef(currentPage);
  const propsBoundedCurrentPageRef = React25.useRef(currentPage);
  const latestPropsRef = React25.useRef(props);
  latestPropsRef.current = props;
  const lastDirectionRef = React25.useRef(props.direction);
  const snapToPage = useSnapToPage(currentContentPageRef, contentOffsetRef, isHorizontal);
  const [_, setForceUpdateCount] = React25.useState(0);
  const containerSizeRef = React25.useRef({ width: 200, height: 200 });
  if (hasFixedSize && isFiniteNumber(containerProps.width) && isFiniteNumber(containerProps.height)) {
    containerSizeRef.current.width = containerProps.width;
    containerSizeRef.current.height = containerProps.height;
  }
  const updateOnResize = React25.useCallback(() => {
    if (!hasFixedSize)
      setForceUpdateCount((v) => v + 1);
  }, [hasFixedSize]);
  React25.useEffect(() => {
    if (RenderTarget.current() !== RenderTarget.preview)
      return;
    globalThis.addEventListener("resize", updateOnResize);
    return () => {
      globalThis.removeEventListener("resize", updateOnResize);
    };
  }, [updateOnResize]);
  const applyEffects = () => {
    pageEffectValuesRef.current.forEach((effectDictionary, index) => {
      const values = effectValues(index, latestPropsRef, pageRectsRef, contentOffsetRef, maxOffsetRef);
      if (!effectDictionary || !values)
        return;
      for (const [key3, value] of Object.entries(values)) {
        const effectValue = effectDictionary[key3];
        if (isMotionValue(effectValue)) {
          effectValue.set(value);
        }
      }
    });
  };
  const updateMaxOffsetFromPageContents = (containerSize) => {
    const newPageContentRects = getPageContentRects(containerRef, containerSize, direction, gap);
    if (newPageContentRects)
      pageRectsRef.current = newPageContentRects;
    const newMaxOffset = getMaxOffset(containerSizeRef.current, pageRectsRef.current, direction, latestPropsRef.current);
    if (newMaxOffset !== maxOffsetRef.current) {
      maxOffsetRef.current = newMaxOffset;
      constraints.current.top = -newMaxOffset;
      constraints.current.left = -newMaxOffset;
      if (RenderTarget.current() === RenderTarget.canvas)
        setForceUpdateCount((v) => v + 1);
    }
  };
  const measureContainerSize = () => {
    const element = containerRef.current;
    if (!element)
      return null;
    const { offsetWidth, offsetHeight } = element;
    const currentSize = containerSizeRef.current;
    if (offsetWidth !== currentSize.width || offsetHeight !== currentSize.height) {
      containerSizeRef.current = {
        width: offsetWidth,
        height: offsetHeight
      };
      return containerSizeRef.current;
    }
    return null;
  };
  const updateAndSnapToPage = (newPage, mount = false) => {
    const newBoundedCurrentPage = getBoundedCurrentPage(newPage, pageCount);
    const boundedCurrentPageDidChange = newBoundedCurrentPage !== propsBoundedCurrentPageRef.current;
    if (boundedCurrentPageDidChange) {
      propsBoundedCurrentPageRef.current = newBoundedCurrentPage;
      updateCurrentPage(newBoundedCurrentPage, currentContentPageRef, !mount ? onChangePage : void 0);
    }
    const offset = offsetForPage(newBoundedCurrentPage, pageCount, pageRectsRef, isHorizontal, maxOffsetRef);
    const animated = animateCurrentPageUpdate && RenderTarget.current() !== RenderTarget.canvas && !mount;
    snapToPage(newBoundedCurrentPage, offset, { animated });
  };
  useIsomorphicLayoutEffect(() => {
    if (hasMountedRef.current)
      return;
    requestAnimationFrame(() => {
      var _a2;
      currentContentPageRef.current = currentPage;
      const contentOffset = contentOffsetRef.current;
      contentOffset.x.on("change", applyEffects);
      contentOffset.y.on("change", applyEffects);
      applyEffects();
      hasMountedRef.current = true;
      const containerSize = (_a2 = measureContainerSize()) != null ? _a2 : containerSizeRef.current;
      updateMaxOffsetFromPageContents(containerSize);
      updateAndSnapToPage(currentContentPageRef.current, true);
    });
  }, []);
  React25.useEffect(() => {
    if (currentPage !== currentContentPageRef.current)
      updateAndSnapToPage(currentPage);
  }, [currentPage]);
  const handleMeasureLifecycle = () => {
    const newContainerSize = measureContainerSize();
    updateMaxOffsetFromPageContents(newContainerSize != null ? newContainerSize : containerSizeRef.current);
    updateAndSnapToPage(currentContentPageRef.current);
    if (newContainerSize || direction !== lastDirectionRef.current) {
      if (direction === "horizontal") {
        contentOffsetRef.current.y.set(0);
      } else {
        contentOffsetRef.current.x.set(0);
      }
      lastDirectionRef.current = direction;
    }
  };
  useIsomorphicLayoutEffect(() => {
    if (RenderTarget.current() !== RenderTarget.canvas)
      return;
    handleMeasureLifecycle();
  });
  const onDragStartHandler = (event, info) => {
    if (onScrollStart)
      onScrollStart(info);
    if (onDragStart)
      onDragStart(event, info);
    prev.x = initial.x = info.point.x;
    prev.y = initial.y = info.point.y;
  };
  const onDragHandler = (event, info) => {
    if (onScroll)
      onScroll(info);
    if (onDrag)
      onDrag(event, info);
    prev.x = info.point.x;
    prev.y = info.point.y;
  };
  const onDragTransitionEnd = () => {
    if (props.onDragTransitionEnd)
      props.onDragTransitionEnd();
    if (onScrollEnd) {
      const { x, y } = contentOffsetRef.current;
      const point = { x: x.get(), y: y.get() };
      onScrollEnd({
        point,
        velocity: { x: x.getVelocity(), y: y.getVelocity() },
        offset: { x: point.x - initial.x, y: point.y - initial.y },
        delta: { x: point.x - prev.x, y: point.y - prev.y }
      });
    }
  };
  const onDragEndHandler = (event, info) => __async(this, null, function* () {
    const contentOffset = isHorizontal ? contentOffsetRef.current.x : contentOffsetRef.current.y;
    contentOffset.stop();
    const startPosition = contentOffset.get();
    const axis = isHorizontal ? "x" : "y";
    const velocity = info.velocity[axis];
    let index = nearestPageIndex(pageRectsRef.current, startPosition, startPosition, isHorizontal, momentum);
    if (velocity) {
      animateValue({
        type: "inertia",
        keyframes: [startPosition],
        velocity,
        modifyTarget: (endPosition) => {
          index = nearestPageIndex(pageRectsRef.current, startPosition, endPosition, isHorizontal, momentum);
          return endPosition;
        }
      }).stop();
    }
    updateCurrentPage(index, currentContentPageRef, onChangePage);
    const offset = offsetForPage(index, pageCount, pageRectsRef, isHorizontal, maxOffsetRef);
    if (onDragEnd)
      onDragEnd(event, info);
    const handler = contentOffsetRef.current[axis];
    handler.set(startPosition);
    animate(handler, offset, {
      type: "spring",
      velocity,
      stiffness: 500,
      damping: 50,
      onComplete: onDragTransitionEnd
    });
  });
  pageEffectValuesRef.current = [];
  const childComponents = React25.Children.map(children, (child, index) => {
    var _a2;
    if (!isReactChild(child) || !isReactElement(child)) {
      return child;
    }
    const update = {
      right: void 0,
      bottom: void 0,
      top: void 0,
      left: void 0,
      _constraints: {
        enabled: false
      }
    };
    if (containerProps.__fromCanvasComponent) {
      update.style = (_a2 = child.props.style) != null ? _a2 : {};
      if (contentWidth === "stretch")
        update.style.width = "100%";
      if (contentHeight === "stretch")
        update.style.height = "100%";
    } else {
      if (contentWidth === "stretch")
        update.width = "100%";
      if (contentHeight === "stretch")
        update.height = "100%";
    }
    let effectDictionary;
    const values = effectValues(index, latestPropsRef, pageRectsRef, contentOffsetRef, maxOffsetRef);
    if (values) {
      effectDictionary = {};
      for (const key3 in values) {
        effectDictionary[key3] = motionValue(values[key3]);
      }
    }
    pageEffectValuesRef.current.push(effectDictionary);
    return React25.createElement(PageContainer, { key: index, effect: effectDictionary, dragEnabled, direction, contentHeight, contentWidth, alignment, gap, isLastPage: index === pageCount - 1, contentOffsetRef, constraintsRef: constraints, directionLock, onDragStart: onDragStartHandler, onDrag: onDragHandler, onDragEnd: onDragEndHandler, layoutId: layoutId ? `${layoutId}-${index}` : void 0 }, React25.cloneElement(child, update));
  });
  useWheelScroll(scrollableRef, {
    enabled: wheelEnabled,
    initial,
    prev,
    direction,
    constraints,
    offsetX: contentOffsetRef.current.x,
    offsetY: contentOffsetRef.current.y,
    onScrollStart,
    onScroll,
    onScrollEnd
  });
  return React25.createElement(
    FrameWithMotion,
    __spreadProps(__spreadValues({
      "data-framer-component-type": "PageWrapper",
      preserve3d: false,
      perspective: hasEffect(props) ? 1200 : void 0
    }, containerProps), {
      // Overflow is managed via a property control.
      style: __spreadProps(__spreadValues({ pointerEvents: void 0 }, containerProps.style), { overflow }),
      layoutId,
      ref: containerRef,
      onLayoutMeasure: handleMeasureLifecycle
    }),
    React25.createElement(
      FrameWithMotion,
      { "data-framer-component-type": "Page", ref: scrollableRef, background: null, x: contentOffsetRef.current.x, y: contentOffsetRef.current.y, width: "100%", height: "100%", preserve3d: true, layout: true, layoutId: layoutId !== void 0 ? layoutId + "-page" : void 0, style: {
        padding: makePaddingString(paddingFromProps(props)),
        display: "flex",
        flexDirection: isHorizontal ? "row" : "column",
        pointerEvents: (_b = props.style) == null ? void 0 : _b.pointerEvents
      } },
      React25.createElement(EmptyState, { title: "Page", description: "Click and drag the connector to any frame on the canvas \u2192", children, size: containerSizeRef.current, insideUserCodeComponent: !__fromCodeComponentNode }),
      childComponents
    )
  );
});
function cubeEffect(info) {
  const { normalizedOffset, direction } = info;
  const isHorizontal = direction === "horizontal";
  return {
    originX: normalizedOffset < 0 ? 1 : 0,
    originY: normalizedOffset < 0 ? 1 : 0,
    rotateY: isHorizontal ? Math.min(Math.max(-90, normalizedOffset * 90), 90) : 0,
    rotateX: isHorizontal ? 0 : Math.min(Math.max(-90, normalizedOffset * -90), 90),
    backfaceVisibility: "hidden",
    WebkitBackfaceVisibility: "hidden"
  };
}
function coverflowEffect(info) {
  const { normalizedOffset, direction, size: size2 } = info;
  const isHorizontal = direction === "horizontal";
  return {
    rotateY: isHorizontal ? Math.min(45, Math.max(-45, normalizedOffset * -45)) : 0,
    rotateX: isHorizontal ? 0 : Math.min(45, Math.max(-45, normalizedOffset * 45)),
    originX: isHorizontal ? normalizedOffset < 0 ? 0 : 1 : 0.5,
    originY: isHorizontal ? 0.5 : normalizedOffset < 0 ? 0 : 1,
    x: isHorizontal ? `${normalizedOffset * -25}%` : 0,
    y: isHorizontal ? 0 : `${normalizedOffset * -25}%`,
    z: -Math.abs(normalizedOffset),
    scale: 1 - Math.abs(normalizedOffset / 10)
  };
}
function calcPileAxisOffset(offset, length) {
  return offset * length - offset * 8;
}
function pileEffect(info) {
  const { normalizedOffset, direction, size: size2 } = info;
  const isHorizontal = direction === "horizontal";
  const absoluteOffset = Math.abs(normalizedOffset);
  return {
    x: normalizedOffset < 0 && isHorizontal ? calcPileAxisOffset(absoluteOffset, size2.width) : 0,
    y: normalizedOffset < 0 && !isHorizontal ? calcPileAxisOffset(absoluteOffset, size2.height) : 0,
    scale: normalizedOffset < 0 ? 1 - absoluteOffset / 50 : 1
  };
}
function wheelEffect(info) {
  const { normalizedOffset, direction, size: size2 } = info;
  const isHorizontal = direction === "horizontal";
  const originZ = (isHorizontal ? size2.width : size2.height) * 18 / (2 * Math.PI);
  const rotateX = isHorizontal ? 0 : normalizedOffset * -20;
  const rotateY = isHorizontal ? normalizedOffset * 20 : 0;
  const y = isHorizontal ? 0 : normalizedOffset * -size2.height;
  const x = isHorizontal ? normalizedOffset * -size2.width : 0;
  return {
    opacity: 1 - Math.abs(normalizedOffset) / 4,
    transform: `translate(${x}px, ${y}px) translateZ(-${originZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(${originZ}px)`
  };
}
function getDefaultEffect(type) {
  switch (type) {
    case "cube":
      return cubeEffect;
    case "coverflow":
      return coverflowEffect;
    case "pile":
      return pileEffect;
    case "wheel":
      return wheelEffect;
    default:
      return null;
  }
}
function nearestPageIndex(pageRects, startPosition, endPosition, isHorizontalDirection, allowSkippingPages) {
  const distanceToStart = function(rect) {
    const rectPosition = isHorizontalDirection ? rect.x : rect.y;
    return Math.abs(rectPosition + startPosition);
  };
  const distanceToEnd = function(rect) {
    const rectPosition = isHorizontalDirection ? rect.x : rect.y;
    return Math.abs(rectPosition + endPosition);
  };
  if (allowSkippingPages) {
    const closestPages = [...pageRects].sort((a2, b) => distanceToEnd(a2) - distanceToEnd(b));
    if (!closestPages[0])
      return -1;
    return pageRects.indexOf(closestPages[0]);
  } else {
    const closestToStart = [...pageRects].sort((a2, b) => distanceToStart(a2) - distanceToStart(b));
    if (closestToStart.length === 1 && closestToStart[0])
      return pageRects.indexOf(closestToStart[0]);
    const pageA = closestToStart[0];
    const pageB = closestToStart[1];
    if (!pageA || !pageB)
      return -1;
    const closestPages = [pageA, pageB].sort((a2, b) => distanceToEnd(a2) - distanceToEnd(b));
    if (!closestPages[0])
      return -1;
    return pageRects.indexOf(closestPages[0]);
  }
}
function getPageContentRects(containerRef, containerSize, direction, gap) {
  var _a;
  const containerElement = containerRef.current;
  if (!containerElement)
    return;
  const contentWrappers = [];
  (_a = containerElement.firstChild) == null ? void 0 : _a.childNodes.forEach((node) => {
    const childNode = node.firstChild;
    if (!(childNode instanceof HTMLElement))
      return;
    const componentType = childNode.getAttribute("data-framer-component-type");
    if (componentType === pageContentWrapperType) {
      contentWrappers.push(childNode);
    }
  });
  const sizes = [];
  contentWrappers.forEach((contentWrapper) => {
    if (contentWrapper instanceof HTMLElement && contentWrapper.firstChild instanceof HTMLElement) {
      let width = contentWrapper.firstChild.offsetWidth;
      let height = contentWrapper.firstChild.offsetHeight;
      if (process4.env.NODE_ENV === "test") {
        width = 100;
        height = 100;
      }
      sizes.push({ width, height });
    } else {
      sizes.push(null);
    }
  });
  let maxX = 0;
  let maxY = 0;
  const isHorizontal = direction === "horizontal";
  return sizes.map((queriedSize) => {
    const size2 = queriedSize || containerSize;
    const x = maxX;
    const y = maxY;
    if (isHorizontal) {
      maxX += size2.width + gap;
    } else {
      maxY += size2.height + gap;
    }
    return __spreadProps(__spreadValues({}, size2), { x, y });
  });
}
function getMaxOffset(containerSize, pageContentRects, direction, paddingProps) {
  const lastPageRect = pageContentRects[pageContentRects.length - 1];
  if (!lastPageRect)
    return 0;
  const paddingSides = paddingFromProps(paddingProps);
  const isHorizontal = direction === "horizontal";
  const paddingStart = isHorizontal ? paddingSides.left : paddingSides.top;
  const paddingEnd = isHorizontal ? paddingSides.right : paddingSides.bottom;
  const pageWidth = isHorizontal ? lastPageRect.width : lastPageRect.height;
  const containerWidth = isHorizontal ? containerSize.width : containerSize.height;
  const freeSpace = containerWidth - paddingStart - paddingEnd - pageWidth;
  const target = isHorizontal ? lastPageRect.x : lastPageRect.y;
  if (freeSpace <= 0)
    return Math.max(target, 0);
  return Math.max(target - freeSpace, 0);
}
function offsetForPage(index, pageCount, pageRectsRef, isHorizontal, maxOffsetRef) {
  const pageIndex = Math.max(0, Math.min(pageCount - 1, index));
  const currentPageRect = pageRectsRef.current[pageIndex];
  if (!currentPageRect) {
    return 0;
  }
  if (isHorizontal) {
    return -Math.min(currentPageRect.x, maxOffsetRef.current);
  } else {
    return -Math.min(currentPageRect.y, maxOffsetRef.current);
  }
}
function useSnapToPage(currentContentPageRef, contentOffsetRef, isHorizontal) {
  return (pageIndex, offset, options) => {
    currentContentPageRef.current = pageIndex;
    const contentOffset = isHorizontal ? contentOffsetRef.current.x : contentOffsetRef.current.y;
    if (!options || !options.animated) {
      contentOffset.set(offset);
      return;
    }
    const axis = isHorizontal ? "x" : "y";
    const value = contentOffsetRef.current[axis];
    value.set(contentOffset.get());
    animate(value, offset, {
      type: "spring",
      velocity: contentOffset.getVelocity(),
      stiffness: 500,
      damping: 50
    });
  };
}
function getBoundedCurrentPage(pageIndex, pageCount) {
  return pageIndex >= 0 ? Math.min(pageIndex, pageCount - 1) : (pageIndex % pageCount + pageCount) % pageCount;
}
function effectValues(index, latestPropsRef, pageRectsRef, contentOffsetRef, maxOffsetRef) {
  const { direction: latestDirection = "horizontal", defaultEffect: latestDefaultEffect, effect: latestEffect, gap: latestGap = 10 } = latestPropsRef.current;
  const latestIsHorizontal = latestDirection === "horizontal";
  const pageRect = pageRectsRef.current[index] || {
    x: latestIsHorizontal ? index * 200 + latestGap : 0,
    y: latestIsHorizontal ? 0 : index * 200 + latestGap,
    width: 200,
    height: 200
  };
  const effectFunction = latestEffect || getDefaultEffect(latestDefaultEffect);
  if (!effectFunction)
    return null;
  let offset;
  let normalizedOffset;
  const contentOffset = contentOffsetRef.current;
  const maxScrollOffset = maxOffsetRef.current;
  if (latestIsHorizontal) {
    offset = Math.min(pageRect.x, maxScrollOffset) + (contentOffset ? contentOffset.x.get() : 0);
    normalizedOffset = offset / (pageRect.width + latestGap);
  } else {
    offset = Math.min(pageRect.y, maxScrollOffset) + (contentOffset ? contentOffset.y.get() : 0);
    normalizedOffset = offset / (pageRect.height + latestGap);
  }
  const size2 = { width: pageRect.width, height: pageRect.height };
  return effectFunction({
    offset,
    normalizedOffset,
    size: size2,
    index,
    direction: latestDirection,
    gap: latestGap,
    pageCount: pageRectsRef.current.length
  });
}
function hasEffect(props) {
  return !!props.effect || !!getDefaultEffect(props.defaultEffect);
}
function updateCurrentPage(newPageIndex, currentContentPageRef, onChangePage) {
  if (currentContentPageRef.current === newPageIndex)
    return;
  if (onChangePage)
    onChangePage(newPageIndex, currentContentPageRef.current);
  currentContentPageRef.current = newPageIndex;
}

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/components/Scroll/Scroll.js
import React29 from "react";

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/components/Scroll/EmulatedScroll.js
import { frame, useDragControls, useMotionValue as useMotionValue2 } from "framer-motion";
import React26, { useCallback as useCallback7, useMemo as useMemo3, useRef as useRef9 } from "react";
var directionMap = {
  horizontal: "x",
  vertical: "y",
  both: true
};
function convertScrollDirectionToDrag(scrollDirection) {
  return scrollDirection ? directionMap[scrollDirection] : scrollDirection;
}
var useUpdateChildSize = ({ dragDirection, children, fromCanvasComponent }) => {
  return useMemo3(() => {
    return React26.Children.map(children, (child) => {
      if (child === null || typeof child !== "object" || typeof child.type === "string") {
        return child;
      }
      const updatedSize = {};
      switch (dragDirection) {
        case "vertical":
          updatedSize.width = "100%";
          break;
        case "horizontal":
          updatedSize.height = "100%";
          break;
        default:
          return child;
      }
      const update = fromCanvasComponent ? { style: Object.assign({}, child.props.style, updatedSize) } : updatedSize;
      return React26.cloneElement(child, update);
    });
  }, [dragDirection, children]);
};
var numberFromOptionalMotionValue = (value) => {
  return typeof value === "number" ? value : value.get();
};
var EmulatedScroll = /* @__PURE__ */ React26.forwardRef(function EmulatedScroll2(props, forwardedRef) {
  const _a = props, { direction = "vertical", directionLock = false, dragEnabled = true, dragElastic, dragMomentum, dragTransition, wheelEnabled = true, contentOffsetX = 0, contentOffsetY = 0, contentWidth, contentHeight, onScrollStart, onScroll, onScrollEnd, onDragStart, onDrag, onDragEnd, onUpdate, onDirectionLock, style, children, scrollAnimate, resetOffset, overdragEnabled = true, layoutId: specificLayoutId, native } = _a, containerProps = __objRest(_a, ["direction", "directionLock", "dragEnabled", "dragElastic", "dragMomentum", "dragTransition", "wheelEnabled", "contentOffsetX", "contentOffsetY", "contentWidth", "contentHeight", "onScrollStart", "onScroll", "onScrollEnd", "onDragStart", "onDrag", "onDragEnd", "onUpdate", "onDirectionLock", "style", "children", "scrollAnimate", "resetOffset", "overdragEnabled", "layoutId", "native"]);
  const layoutId = useLayoutId(props, { specificLayoutId, postfix: "scroll" });
  const defaultX = useMotionValue2(typeof contentOffsetX === "number" ? contentOffsetX : 0);
  const defaultY = useMotionValue2(typeof contentOffsetY === "number" ? contentOffsetY : 0);
  const x = isMotionValue(contentOffsetX) ? contentOffsetX : defaultX;
  const y = isMotionValue(contentOffsetY) ? contentOffsetY : defaultY;
  const measuredConstraints = useRef9(null);
  const dragControls = useDragControls();
  const isInTarget = useIsInCurrentNavigationTarget();
  const wasInTargetRef = useRef9(true);
  injectComponentCSSRules();
  function setMeasureDragConstraints(constraints) {
    constraints = offsetToZero(constraints);
    if (contentWidth !== void 0)
      constraints.left = -contentWidth;
    if (contentHeight !== void 0)
      constraints.top = -contentHeight;
    return measuredConstraints.current = constraints;
  }
  const { initial, prev } = useRef9({
    initial: { x: 0, y: 0 },
    prev: { x: 0, y: 0 }
  }).current;
  const isPreview = RenderTarget.current() === RenderTarget.preview;
  const containerFallbackRef = useRef9(null);
  const containerRef = forwardedRef || containerFallbackRef;
  const contentRef = useRef9(null);
  const lastOffsetRef = useRef9(null);
  function shouldResetScroll(inTarget) {
    const hasEnteredTarget = inTarget && wasInTargetRef.current === false;
    return resetOffset && hasEnteredTarget;
  }
  function measureAndUpdateScrollOffset() {
    if (!contentRef.current || !containerRef.current)
      return;
    const mustReset = shouldResetScroll(isInTarget);
    wasInTargetRef.current = isInTarget;
    const previous = lastOffsetRef.current;
    if (previous === null && contentOffsetX === void 0 && contentOffsetY === void 0)
      return;
    const shouldUpdateOffset = previous === null || !isMotionValue(contentOffsetX) && contentOffsetX !== previous.offsetX || !isMotionValue(contentOffsetY) && contentOffsetY !== previous.offsetY;
    const currentMaxXOffset = contentRef.current.offsetWidth - containerRef.current.offsetWidth;
    const currentMaxYOffset = contentRef.current.offsetHeight - containerRef.current.offsetHeight;
    const hasSizeChanged = currentMaxXOffset !== (previous == null ? void 0 : previous.maxXOffset) || currentMaxYOffset !== (previous == null ? void 0 : previous.maxYOffset);
    const hasScrollOffsetChanged = (previous == null ? void 0 : previous.x) !== x.get() || (previous == null ? void 0 : previous.y) !== y.get();
    const shouldStayPinned = hasSizeChanged && !hasScrollOffsetChanged;
    if (mustReset || shouldUpdateOffset || shouldStayPinned) {
      const currentOffsetX = direction !== "vertical" ? numberFromOptionalMotionValue(contentOffsetX) : 0;
      const currentOffsetY = direction !== "horizontal" ? numberFromOptionalMotionValue(contentOffsetY) : 0;
      const nextXOffset = -Math.min(currentOffsetX, currentMaxXOffset);
      const nextYOffset = -Math.min(currentOffsetY, currentMaxYOffset);
      x.set(nextXOffset);
      y.set(nextYOffset);
      lastOffsetRef.current = {
        maxXOffset: currentMaxXOffset,
        maxYOffset: currentMaxYOffset,
        offsetX: currentOffsetX,
        offsetY: currentOffsetY,
        x: nextXOffset,
        y: nextYOffset
      };
    }
  }
  useIsomorphicLayoutEffect(() => {
    if (RenderTarget.current() !== RenderTarget.canvas)
      return;
    measureAndUpdateScrollOffset();
  });
  useIsomorphicLayoutEffect(() => {
    if (RenderTarget.current() === RenderTarget.canvas)
      return;
    measureAndUpdateScrollOffset();
  }, []);
  React26.useEffect(() => {
    if (shouldResetScroll(isInTarget))
      measureAndUpdateScrollOffset();
    if (isInTarget === false)
      wasInTargetRef.current = false;
  }, [isInTarget]);
  const getLatestPoint = () => ({ x: x.get(), y: y.get() });
  const resetInitialPoint = useCallback7(() => {
    const point = getLatestPoint();
    initial.x = point.x;
    initial.y = point.y;
    prev.x = point.x;
    prev.y = point.y;
  }, []);
  const getPointData = useCallback7(() => {
    const point = getLatestPoint();
    const data = {
      point,
      velocity: { x: x.getVelocity(), y: y.getVelocity() },
      offset: { x: point.x - initial.x, y: point.y - initial.y },
      delta: { x: point.x - prev.x, y: point.y - prev.y }
    };
    prev.x = point.x;
    prev.y = point.y;
    return data;
  }, [x, y]);
  const updateScrollListeners = useCallback7(() => {
    onUpdate && onUpdate({ x: x.get(), y: y.get() });
    onScroll && onScroll(getPointData());
  }, [onScroll, onUpdate, getPointData, x, y]);
  const scheduleUpdateScrollListeners = useCallback7(() => {
    frame.update(updateScrollListeners, false, true);
  }, [updateScrollListeners]);
  const onMotionDragStart = (event, info) => {
    resetInitialPoint();
    onDragStart && onDragStart(event, info);
    onScrollStart && onScrollStart(info);
  };
  const onMotionDragTransitionEnd = () => onScrollEnd && onScrollEnd(getPointData());
  const onWheelScrollStart = (info) => {
    onScrollStart == null ? void 0 : onScrollStart(info);
  };
  useWheelScroll(containerRef, {
    enabled: wheelEnabled,
    initial,
    prev,
    direction,
    offsetX: x,
    offsetY: y,
    onScrollStart: onWheelScrollStart,
    onScroll,
    onScrollEnd,
    constraints: measuredConstraints
  });
  const overdragX = useMotionValue2(0);
  const overdragY = useMotionValue2(0);
  useIsomorphicLayoutEffect(() => {
    const setScrollX = (xValue) => {
      const element = containerRef.current;
      if (!(element instanceof HTMLDivElement))
        return;
      element.scrollLeft = -xValue;
      const constraints = measuredConstraints.current;
      if (constraints && overdragEnabled) {
        let overdragXValue = 0;
        if (xValue > constraints.right)
          overdragXValue = xValue;
        if (xValue < constraints.left)
          overdragXValue = xValue - constraints.left;
        overdragX.set(overdragXValue);
      }
      scheduleUpdateScrollListeners();
    };
    const currentX = x.get();
    if (currentX !== 0)
      setScrollX(currentX);
    return x.on("change", setScrollX);
  }, [x, overdragX, scheduleUpdateScrollListeners, overdragEnabled]);
  useIsomorphicLayoutEffect(() => {
    const setScrollY = (yValue) => {
      const element = containerRef.current;
      if (!(element instanceof HTMLDivElement))
        return;
      element.scrollTop = -yValue;
      const constraints = measuredConstraints.current;
      if (constraints && overdragEnabled) {
        let overdragYValue = 0;
        if (yValue > constraints.bottom)
          overdragYValue = yValue;
        if (yValue < constraints.top)
          overdragYValue = yValue - constraints.top;
        overdragY.set(overdragYValue);
      }
      scheduleUpdateScrollListeners();
    };
    const currentY = y.get();
    if (currentY !== 0)
      setScrollY(currentY);
    return y.on("change", setScrollY);
  }, [y, overdragY, scheduleUpdateScrollListeners, overdragEnabled]);
  const nativeOnScroll = React26.useCallback(() => {
    const element = containerRef.current;
    if (!(element instanceof HTMLDivElement))
      return;
    const xDelta = Math.abs(x.get() + element.scrollLeft);
    const yDelta = Math.abs(y.get() + element.scrollTop);
    if (xDelta > 1)
      x.set(-element.scrollLeft);
    if (yDelta > 1)
      y.set(-element.scrollTop);
  }, [x, y]);
  const isEmpty2 = React26.Children.count(children) === 0;
  const width = direction !== "vertical" && !isEmpty2 ? "auto" : "100%";
  const height = direction !== "horizontal" && !isEmpty2 ? "auto" : "100%";
  const size2 = !containerProps.__fromCanvasComponent ? {
    width: containerProps.__fromCodeComponentNode ? "100%" : containerProps.width,
    height: containerProps.__fromCodeComponentNode ? "100%" : containerProps.height
  } : {};
  return React26.createElement(
    FrameWithMotion,
    __spreadProps(__spreadValues(__spreadValues({
      "data-framer-component-type": "Scroll",
      background: "none"
    }, containerProps), size2), {
      style: __spreadProps(__spreadValues({}, style), {
        willChange: isPreview ? "transform" : void 0,
        overflow: "hidden"
      }),
      onScroll: nativeOnScroll,
      preserve3d: containerProps.preserve3d,
      ref: containerRef,
      layoutId,
      layoutScroll: true,
      onBeforeLayoutMeasure: measureAndUpdateScrollOffset
    }),
    React26.createElement(
      FrameWithMotion,
      { "data-framer-component-type": "ScrollContentWrapper", animate: scrollAnimate, drag: dragEnabled && convertScrollDirectionToDrag(direction), dragDirectionLock: directionLock, dragElastic, dragMomentum, dragTransition, dragConstraints: containerRef, dragControls, onDragStart: onMotionDragStart, onDrag, onDragEnd, onDragTransitionEnd: onMotionDragTransitionEnd, onDirectionLock, onMeasureDragConstraints: setMeasureDragConstraints, width, height, _dragX: x, _dragY: y, position: "relative", x: overdragEnabled ? overdragX : void 0, y: overdragEnabled ? overdragY : void 0, ref: contentRef, style: {
        display: isEmpty2 ? "block" : "inline-block",
        willChange: isPreview ? "transform" : void 0,
        backgroundColor: "transparent",
        overflow: "visible",
        minWidth: "100%",
        minHeight: "100%"
      }, preserve3d: containerProps.preserve3d },
      React26.createElement(EmptyState, { children, size: {
        width: isFiniteNumber(containerProps.width) ? containerProps.width : "100%",
        height: isFiniteNumber(containerProps.height) ? containerProps.height : "100%"
      }, insideUserCodeComponent: !containerProps.__fromCodeComponentNode, title: "Scroll", description: "Click and drag the connector to any frame on the canvas \u2192" }),
      useUpdateChildSize({
        dragDirection: direction,
        children,
        fromCanvasComponent: containerProps.__fromCanvasComponent
      })
    )
  );
});
function offsetToZero({ top, left, right, bottom }) {
  const width = right - left;
  const height = bottom - top;
  return {
    top: -height,
    left: -width,
    right: 0,
    bottom: 0
  };
}

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/components/Scroll/NativeScroll.js
import React28 from "react";

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/modules/cx.js
function cx2(...classNames) {
  return classNames.filter(Boolean).join(" ");
}

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/components/utils/useEmulatedTouchScroll.js
import React27, { useEffect as useEffect15 } from "react";

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/components/utils/animatePointWithInertia.js
import { animateValue as animateValue2, frame as frame2 } from "framer-motion";
var AnimationPhase;
(function(AnimationPhase2) {
  AnimationPhase2[AnimationPhase2["None"] = 0] = "None";
  AnimationPhase2[AnimationPhase2["Running"] = 1] = "Running";
  AnimationPhase2[AnimationPhase2["Completed"] = 2] = "Completed";
  AnimationPhase2[AnimationPhase2["Cancelled"] = 3] = "Cancelled";
})(AnimationPhase || (AnimationPhase = {}));
function isRunningAnimation(...phases) {
  let runningAny = false;
  let cancelledAny = false;
  phases.forEach((phase) => {
    runningAny = runningAny || phase === AnimationPhase.Running;
    cancelledAny = cancelledAny || phase === AnimationPhase.Cancelled;
  });
  return runningAny && !cancelledAny;
}
function didFinishAnimations(...phases) {
  return phases.every((phase) => phase === AnimationPhase.None || phase === AnimationPhase.Completed);
}
var timeConstant = 400;
function animatePointWithInertia({ from, velocity, onUpdate, onComplete, onStop }) {
  const latest = from;
  let animationPhaseX = AnimationPhase.None;
  let animationPhaseY = AnimationPhase.None;
  const animations = [];
  const updateHandler = () => {
    if (isRunningAnimation(animationPhaseX, animationPhaseY)) {
      onUpdate(latest);
    }
  };
  const completionHandler = () => {
    if (didFinishAnimations(animationPhaseX, animationPhaseY)) {
      onComplete();
    }
  };
  if (velocity.x) {
    animationPhaseX = AnimationPhase.Running;
    animations.push(animateValue2({
      keyframes: [from.x],
      velocity: -velocity.x,
      timeConstant,
      onUpdate: (value) => {
        latest.x = value;
        frame2.update(updateHandler, false, true);
      },
      onComplete: () => {
        if (animationPhaseX !== AnimationPhase.Running) {
          throw Error("animation x should be running when completing");
        }
        animationPhaseX = AnimationPhase.Completed;
        completionHandler();
      }
    }));
  }
  if (velocity.y) {
    animationPhaseY = AnimationPhase.Running;
    animations.push(animateValue2({
      keyframes: [from.y],
      velocity: -velocity.y,
      timeConstant,
      onUpdate: (value) => {
        latest.y = value;
        frame2.update(updateHandler, false, true);
      },
      onComplete: () => {
        if (animationPhaseY !== AnimationPhase.Running) {
          throw Error("animation y should be running when completing");
        }
        animationPhaseY = AnimationPhase.Completed;
        completionHandler();
      }
    }));
  }
  if (!isRunningAnimation(animationPhaseX, animationPhaseY)) {
    completionHandler();
  }
  return {
    stop: () => {
      if (!isRunningAnimation(animationPhaseX, animationPhaseY))
        return;
      animations.forEach((animation) => animation.stop());
      animationPhaseX = animationPhaseX === AnimationPhase.Running ? AnimationPhase.Cancelled : animationPhaseX;
      animationPhaseY = animationPhaseY === AnimationPhase.Running ? AnimationPhase.Cancelled : animationPhaseY;
      onStop();
    }
  };
}

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/components/utils/useEmulatedTouchScroll.js
var scrollThreshold = 3;
var isTouchDevice = /* @__PURE__ */ isTouch2();
var isSafariBrowser = /* @__PURE__ */ isSafari();
function getTouchAction(element) {
  if (!(element instanceof HTMLElement))
    return null;
  return element.style.touchAction;
}
function canPanInDirection(element, direction) {
  switch (direction) {
    case "horizontal":
      return getTouchAction(element) === "pan-x";
    case "vertical":
      return getTouchAction(element) === "pan-y";
    default:
      return false;
  }
}
function isInteractiveElement(element) {
  const tag = element.tagName.toLowerCase();
  if (tag === "input")
    return true;
  if (tag === "text")
    return true;
  if (tag === "textarea")
    return true;
  return false;
}
function canStartScrollFromElement(element, direction) {
  if (!(element instanceof Element))
    return false;
  if (isInteractiveElement(element))
    return false;
  if (element.hasAttribute("draggable")) {
    if (!canPanInDirection(element, direction)) {
      return false;
    }
  }
  return true;
}
function getEventPoint(event) {
  return {
    x: event.pageX,
    y: event.pageY
  };
}
function setStyle(element, property, value) {
  if (element == null ? void 0 : element.style) {
    element.style[property] = value;
  }
}
function getStyle(element, property) {
  var _a;
  return (_a = element == null ? void 0 : element.style) == null ? void 0 : _a[property];
}
var TouchScrollPhase;
(function(TouchScrollPhase2) {
  TouchScrollPhase2[TouchScrollPhase2["Idle"] = 0] = "Idle";
  TouchScrollPhase2[TouchScrollPhase2["TouchDown"] = 1] = "TouchDown";
  TouchScrollPhase2[TouchScrollPhase2["Drag"] = 2] = "Drag";
  TouchScrollPhase2[TouchScrollPhase2["DragLocked"] = 3] = "DragLocked";
  TouchScrollPhase2[TouchScrollPhase2["DragAnimation"] = 4] = "DragAnimation";
  TouchScrollPhase2[TouchScrollPhase2["Interrupted"] = 5] = "Interrupted";
})(TouchScrollPhase || (TouchScrollPhase = {}));
var emptyObject = {};
Object.freeze(emptyObject);
function useEmulateTouchScroll(ref, direction, enabled) {
  if (isTouchDevice)
    return emptyObject;
  if (RenderTarget.current() !== RenderTarget.preview)
    return emptyObject;
  const scrollAnimationControlsRef = React27.useRef(null);
  useEffect15(() => {
    if (!ref.current)
      return;
    const element = ref.current;
    let phase = TouchScrollPhase.Idle;
    let targets = null;
    let downPoint = null;
    let scrollOffsetStart = null;
    let mouseMoveEvents = [];
    function onMouseMove(event) {
      var _a;
      switch (phase) {
        case TouchScrollPhase.Idle:
        case TouchScrollPhase.DragAnimation:
        case TouchScrollPhase.DragLocked:
          return;
      }
      if (event.metaKey)
        return;
      const point = getEventPoint(event);
      if (!downPoint)
        return;
      const offset = Point.subtract(point, downPoint);
      if (phase === TouchScrollPhase.TouchDown || phase === TouchScrollPhase.Interrupted) {
        const deltaX = Math.abs(offset.x);
        const deltaY = Math.abs(offset.y);
        if ((deltaX > scrollThreshold || deltaY > scrollThreshold) && deltaX !== deltaY) {
          const scrollDirection = deltaX > deltaY ? "horizontal" : "vertical";
          const shouldIgnoreBecauseOfDirectionLock = direction === "horizontal" && scrollDirection === "vertical" || direction === "vertical" && scrollDirection === "horizontal";
          if (shouldIgnoreBecauseOfDirectionLock) {
            phase = TouchScrollPhase.DragLocked;
            return;
          }
          phase = TouchScrollPhase.Drag;
          targets == null ? void 0 : targets.forEach(([target]) => setStyle(target, "pointerEvents", "none"));
        }
      }
      if (isSafariBrowser)
        event.preventDefault();
      if (phase !== TouchScrollPhase.Drag)
        return;
      (_a = safeWindow.getSelection()) == null ? void 0 : _a.empty();
      mouseMoveEvents = getRecentEvents([...mouseMoveEvents, event]);
      if (scrollOffsetStart) {
        if (direction !== "vertical")
          element.scrollLeft = scrollOffsetStart.x - offset.x;
        if (direction !== "horizontal")
          element.scrollTop = scrollOffsetStart.y - offset.y;
      }
    }
    function onMouseUp(event) {
      safeWindow.removeEventListener("mousemove", onMouseMove, false);
      safeWindow.removeEventListener("mouseup", onMouseUp);
      if (phase === TouchScrollPhase.Drag && targets) {
        targets.forEach(([target, originalPointerEventsValue]) => setStyle(target, "pointerEvents", originalPointerEventsValue || "auto"));
      }
      targets = null;
      const velocity = calculateVelocity({ mouseMoveEvents, mouseUpEvent: event });
      downPoint = null;
      if (phase === TouchScrollPhase.Drag) {
        const shouldAnimateY = direction !== "horizontal" && velocity.y !== 0;
        const shouldAnimateX = direction !== "vertical" && velocity.x !== 0;
        if (!shouldAnimateY && !shouldAnimateX) {
          phase = TouchScrollPhase.Idle;
          return;
        }
        phase = TouchScrollPhase.DragAnimation;
        scrollAnimationControlsRef.current = animatePointWithInertia({
          from: { x: element.scrollLeft, y: element.scrollTop },
          velocity: {
            x: shouldAnimateX ? velocity.x : 0,
            y: shouldAnimateY ? velocity.y : 0
          },
          onUpdate: (position) => {
            if (shouldAnimateX)
              element.scrollLeft = position.x;
            if (shouldAnimateY)
              element.scrollTop = position.y;
          },
          onStop: () => {
            if (phase !== TouchScrollPhase.Interrupted) {
              phase = TouchScrollPhase.Idle;
            }
            scrollAnimationControlsRef.current = null;
          },
          onComplete: () => {
            if (phase !== TouchScrollPhase.DragAnimation) {
              throw Error("On animation completion we should still be in the animation phase");
            }
            phase = TouchScrollPhase.Idle;
            scrollAnimationControlsRef.current = null;
          }
        });
      } else {
        phase = TouchScrollPhase.Idle;
      }
    }
    function onMouseWheel() {
      var _a;
      (_a = scrollAnimationControlsRef.current) == null ? void 0 : _a.stop();
    }
    function onMouseDown(event) {
      var _a;
      if (!enabled)
        return;
      if (event.metaKey)
        return;
      if (!canStartScrollFromElement(event.target, direction)) {
        if (phase === TouchScrollPhase.DragAnimation) {
          phase = TouchScrollPhase.Idle;
          (_a = scrollAnimationControlsRef.current) == null ? void 0 : _a.stop();
        }
        return;
      }
      const previousPhase = phase;
      phase = previousPhase === TouchScrollPhase.DragAnimation ? TouchScrollPhase.Interrupted : TouchScrollPhase.TouchDown;
      downPoint = getEventPoint(event);
      targets = document.elementsFromPoint(downPoint.x, downPoint.y).filter((targetEl) => targetEl instanceof HTMLElement || targetEl instanceof SVGElement).map((targetEl) => [targetEl, getStyle(targetEl, "pointerEvents")]);
      scrollOffsetStart = { x: element.scrollLeft, y: element.scrollTop };
      mouseMoveEvents = [];
      if (scrollAnimationControlsRef.current) {
        if (previousPhase !== TouchScrollPhase.DragAnimation) {
          throw Error("When stopping a drag animation we need to be animating");
        }
        scrollAnimationControlsRef.current.stop();
      }
      safeWindow.addEventListener("mousemove", onMouseMove);
      safeWindow.addEventListener("mouseup", onMouseUp);
      element.addEventListener("mousewheel", onMouseWheel);
    }
    element.addEventListener("mousedown", onMouseDown);
    return () => {
      var _a;
      element.removeEventListener("mousedown", onMouseDown);
      element.removeEventListener("mousewheel", onMouseWheel);
      safeWindow.removeEventListener("mousemove", onMouseMove);
      safeWindow.removeEventListener("mouseup", onMouseUp);
      phase = TouchScrollPhase.Interrupted;
      (_a = scrollAnimationControlsRef.current) == null ? void 0 : _a.stop();
    };
  }, [ref, direction, enabled]);
  return React27.useMemo(() => {
    return {
      cancelEmulatedTouchScrollAnimation: () => {
        var _a;
        (_a = scrollAnimationControlsRef.current) == null ? void 0 : _a.stop();
      }
    };
  }, []);
}
var timeDelta = 4 / 60 * 1e3;
function getRecentEvents(events2) {
  const currentTime = new CustomEvent("getTime").timeStamp;
  const maxAge = currentTime - timeDelta;
  return events2.filter((event) => event.timeStamp > maxAge);
}
var zeroPoint = { x: 0, y: 0 };
function calculateVelocity({ mouseMoveEvents, mouseUpEvent }) {
  const recentMouseMoveEvents = getRecentEvents(mouseMoveEvents);
  const oldestMouseMoveEvent = recentMouseMoveEvents[0];
  if (!oldestMouseMoveEvent)
    return zeroPoint;
  const deltaX = mouseUpEvent.clientX - oldestMouseMoveEvent.clientX;
  const deltaY = mouseUpEvent.clientY - oldestMouseMoveEvent.clientY;
  const time2 = mouseUpEvent.timeStamp - oldestMouseMoveEvent.timeStamp;
  if (time2 === 0)
    return zeroPoint;
  return {
    x: deltaX / time2 * 1e3,
    y: deltaY / time2 * 1e3
  };
}

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/components/utils/useUpdateScrollOffset.js
function useUpdateScrollOffset(ref, side, offset, cancelEmulatedTouchScrollAnimation) {
  useIsomorphicLayoutEffect(
    () => {
      if (isMotionValue(offset)) {
        const updateScrollLeft = () => {
          cancelEmulatedTouchScrollAnimation == null ? void 0 : cancelEmulatedTouchScrollAnimation();
          const element = ref.current;
          if (element)
            element[side] = Math.abs(offset.get());
        };
        updateScrollLeft();
        return offset.on("change", updateScrollLeft);
      } else if (isFiniteNumber(offset)) {
        const element = ref.current;
        if (!element)
          return;
        cancelEmulatedTouchScrollAnimation == null ? void 0 : cancelEmulatedTouchScrollAnimation();
        element[side] = Math.abs(offset);
      }
    },
    // We only want to update on contentOffset changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [offset]
  );
}

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/components/Scroll/NativeScroll.js
var NativeScroll = /* @__PURE__ */ React28.forwardRef(function NativeScroll2(props, forwardedRef) {
  const _a = props, {
    direction = "vertical",
    scrollBarVisible = false,
    dragEnabled = true,
    contentOffsetX = 0,
    contentOffsetY = 0,
    contentWidth,
    contentHeight,
    children,
    resetOffset,
    onScroll,
    className,
    directionLock: directionLock = false,
    wheelEnabled = true,
    scrollAnimate,
    dragTransition,
    dragMomentum,
    dragElastic,
    overdragEnabled = true,
    onScrollStart,
    onScrollEnd,
    onDragStart,
    onDrag,
    onDragEnd,
    onUpdate,
    onDirectionLock,
    layoutId: specificLayoutId,
    native
  } = _a, containerProps = __objRest(_a, [
    "direction",
    "scrollBarVisible",
    "dragEnabled",
    "contentOffsetX",
    "contentOffsetY",
    "contentWidth",
    "contentHeight",
    "children",
    "resetOffset",
    "onScroll",
    "className",
    // Not (yet) supported
    "directionLock",
    "wheelEnabled",
    "scrollAnimate",
    "dragTransition",
    "dragMomentum",
    "dragElastic",
    "overdragEnabled",
    "onScrollStart",
    "onScrollEnd",
    "onDragStart",
    "onDrag",
    "onDragEnd",
    "onUpdate",
    "onDirectionLock",
    "layoutId",
    "native"
  ]);
  const layoutId = useLayoutId(props, { specificLayoutId, postfix: "scroll" });
  const fallbackRef = React28.useRef(null);
  const ref = forwardedRef || fallbackRef;
  const { cancelEmulatedTouchScrollAnimation } = useEmulateTouchScroll(ref, direction, dragEnabled);
  injectComponentCSSRules();
  const isInTarget = useIsInCurrentNavigationTarget();
  const previousIsInTargetRef = React28.useRef(isInTarget);
  const updateScrollOffsetHandler = () => {
    if (!resetOffset)
      return;
    const previousIsTarget = previousIsInTargetRef.current;
    previousIsInTargetRef.current = isInTarget;
    const shouldResetOffset = isInTarget && !previousIsTarget;
    if (!shouldResetOffset)
      return;
    const element = ref.current;
    if (!element)
      return;
    if (direction !== "vertical") {
      cancelEmulatedTouchScrollAnimation == null ? void 0 : cancelEmulatedTouchScrollAnimation();
      element.scrollLeft = Math.abs(isMotionValue(contentOffsetX) ? contentOffsetX.get() : contentOffsetX);
    }
    if (direction !== "horizontal") {
      cancelEmulatedTouchScrollAnimation == null ? void 0 : cancelEmulatedTouchScrollAnimation();
      element.scrollTop = Math.abs(isMotionValue(contentOffsetY) ? contentOffsetY.get() : contentOffsetY);
    }
  };
  useIsomorphicLayoutEffect(updateScrollOffsetHandler, [isInTarget]);
  useUpdateScrollOffset(ref, "scrollLeft", contentOffsetX, cancelEmulatedTouchScrollAnimation);
  useUpdateScrollOffset(ref, "scrollTop", contentOffsetY, cancelEmulatedTouchScrollAnimation);
  const size2 = !containerProps.__fromCanvasComponent ? {
    width: containerProps.__fromCodeComponentNode ? "100%" : containerProps.width,
    height: containerProps.__fromCodeComponentNode ? "100%" : containerProps.height
  } : {};
  return React28.createElement(
    FrameWithMotion,
    __spreadProps(__spreadValues(__spreadValues({
      ref,
      "data-framer-component-type": "NativeScroll",
      background: "none"
    }, containerProps), size2), {
      onScroll,
      layoutId,
      onBeforeLayoutMeasure: updateScrollOffsetHandler,
      layoutScroll: true,
      className: cx2(className, `direction-${direction}`, !scrollBarVisible && "scrollbar-hidden")
    }),
    React28.createElement(EmptyState, { children, size: {
      width: isFiniteNumber(containerProps.width) ? containerProps.width : "100%",
      height: isFiniteNumber(containerProps.height) ? containerProps.height : "100%"
    }, insideUserCodeComponent: !containerProps.__fromCodeComponentNode, title: "Scroll", description: "Click and drag the connector to any frame on the canvas \u2192" }),
    children
  );
});

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/components/Scroll/Scroll.js
var Scroll = /* @__PURE__ */ (() => {
  const ScrollInner = React29.forwardRef(function ScrollInner2(props, forwardedRef) {
    if (props.native) {
      return React29.createElement(NativeScroll, __spreadValues({ ref: forwardedRef }, props));
    } else {
      return React29.createElement(EmulatedScroll, __spreadValues({ ref: forwardedRef }, props));
    }
  });
  ScrollInner.defaultProps = {
    directionLock: false
  };
  addPropertyControls(ScrollInner, {
    native: {
      type: ControlType.Boolean,
      defaultValue: false
    },
    direction: {
      type: ControlType.SegmentedEnum,
      title: "Direction",
      options: ["vertical", "horizontal", "both"],
      defaultValue: "vertical"
    },
    contentOffsetX: {
      type: ControlType.Number,
      title: "Offset X",
      defaultValue: 0,
      min: 0,
      step: 10,
      displayStepper: true,
      hidden: ({ direction }) => direction === "vertical"
    },
    contentOffsetY: {
      type: ControlType.Number,
      title: "Offset Y",
      defaultValue: 0,
      min: 0,
      step: 10,
      displayStepper: true,
      hidden: ({ direction }) => direction === "horizontal"
    },
    directionLock: {
      type: ControlType.Boolean,
      title: "Lock",
      enabledTitle: "1 Axis",
      disabledTitle: "Off",
      defaultValue: true,
      hidden: ({ native }) => native === true
    },
    dragEnabled: {
      type: ControlType.Boolean,
      title: "Drag",
      enabledTitle: "On",
      disabledTitle: "Off",
      defaultValue: true
    },
    overdragEnabled: {
      type: ControlType.Boolean,
      title: "Overdrag",
      enabledTitle: "On",
      disabledTitle: "Off",
      defaultValue: true,
      hidden: ({ native }) => native === true
    },
    wheelEnabled: {
      type: ControlType.Boolean,
      title: "Wheel",
      enabledTitle: "On",
      disabledTitle: "Off",
      defaultValue: true,
      hidden: ({ native }) => native === true
    },
    scrollBarVisible: {
      type: ControlType.Boolean,
      title: "Scroll Bar",
      enabledTitle: "Visible",
      disabledTitle: "Hidden",
      defaultValue: false,
      hidden: ({ native }) => native === false
    },
    resetOffset: {
      type: ControlType.Boolean,
      title: "Reset",
      defaultValue: false
    }
  });
  ScrollInner.supportsConstraints = true;
  return ScrollInner;
})();

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/modules/ComponentPresetsContext.js
import React30, { createContext, useContext as useContext6, useRef as useRef10 } from "react";
var Context = /* @__PURE__ */ createContext({});
function ComponentPresetsProvider({ presets, children }) {
  const lastPresets = useRef10(presets);
  if (!isEqual(presets, lastPresets.current, false)) {
    lastPresets.current = presets;
  }
  return React30.createElement(Context.Provider, { value: lastPresets.current }, children);
}
function ComponentPresetsConsumer({ componentIdentifier, children }) {
  var _a;
  const componentPresets = useContext6(Context);
  const presetProps = (_a = componentPresets[componentIdentifier]) != null ? _a : {};
  return children(presetProps);
}

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/modules/LazyValue.js
var LazyValue = class _LazyValue {
  constructor(resolver) {
    __publicField(this, "resolver");
    __publicField(this, "status");
    this.resolver = resolver;
  }
  static is(value) {
    return value instanceof _LazyValue;
  }
  /** Preload the value so it can be read() later. */
  preload() {
    if (this.status) {
      const status = this.status;
      if (status.type !== "pending")
        return;
      return status.promise;
    }
    const promise = this.resolver().then((value) => {
      this.status = {
        type: "fulfilled",
        value
      };
    }, (error) => {
      this.status = {
        type: "rejected",
        error
      };
    });
    this.status = {
      type: "pending",
      promise
    };
    return promise;
  }
  /** Synchronously read the value after calling preload() before. */
  read() {
    const status = this.status;
    if (!status) {
      throw new Error("Need to call preload() before read()");
    }
    switch (status.type) {
      case "pending":
        throw new Error("Need to wait for preload() to resolve");
      case "fulfilled":
        return status.value;
      case "rejected":
        throw status.error;
      default:
        assertNever(status);
    }
  }
};

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/modules/Link.js
import React32 from "react";

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/render/utils/findAnchorElement.js
function findAnchorElement(target, withinElement) {
  if (target instanceof HTMLAnchorElement) {
    return target;
  }
  if (target instanceof Element) {
    if (target === withinElement) {
      return null;
    }
    return findAnchorElement(target.parentElement, withinElement);
  }
  return null;
}

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/router/stub.js
import React31 from "react";
function useLocalizationInfo() {
  return { activeLocalization: null, localizations: [], setLocalization: () => {
  } };
}
function useLocaleInfo() {
  return { activeLocale: null, locales: [], setLocale: () => {
  } };
}
function useLocaleCode() {
  return "en-US";
}
function useLocale() {
  return useLocaleCode();
}
var ComponentWithPreload = stubbedComponent("ComponentWithPreload");
var RoutesProvider = stubbedComponent("RoutesProvider");
var Router = stubbedComponent("Router");
var RouterAPIProvider = stubbedComponent("RouterAPIProvider");
function computeRelativePath(_from, _to) {
  return "";
}
function isRoute(route) {
  return false;
}
function getPathForRoute(_route, _options) {
  return "/";
}
function getRouteElementId(_route, _elementId) {
  return void 0;
}
function useCurrentRoute() {
  return void 0;
}
function useRouter() {
  return {
    navigate(_routeId, _elementId, _pathVariables) {
    },
    getRoute(_routeId) {
      return void 0;
    },
    currentRouteId: ""
  };
}
function useRouteAnchor(_routeId, _options = {}) {
  return { onClick: () => {
  }, href: "#" };
}
function useRouteHandler(_routeId, _preload = false, elementId) {
  return () => {
  };
}
function useRoutePreloader(_routeIds, _enabled = true) {
  return;
}
function preloadComponent(_component) {
  return;
}
function inferInitialRouteFromPath(routes, locationPath, fallback) {
  return void 0;
}
function stubbedComponent(componentName) {
  return ({ children }) => {
    console.warn(`Using stubbed \`${componentName}\``);
    return React31.createElement(React31.Fragment, null, children);
  };
}

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/modules/framerPageLink.js
var elementKey = "element";
var collectionKey = "collection";
var collectionItemIdKey = "collectionItemId";
var pathVariablesKey = "pathVariables";
var mediaType = "framer/page-link,";
function isFramerPageLink(value) {
  return isString(value) && value.startsWith(`data:${mediaType}`);
}
function parseFramerPageLink(link) {
  if (!isFramerPageLink(link))
    return;
  try {
    const url = new URL(link);
    const target = url.pathname.substring(mediaType.length);
    const searchParams = url.searchParams;
    const element = searchParams.has(elementKey) ? searchParams.get(elementKey) : void 0;
    let collectionItem;
    const collection = searchParams.get(collectionKey);
    const collectionItemId = searchParams.get(collectionItemIdKey);
    const pathVariablesValue = searchParams.get(pathVariablesKey);
    if (collection && collectionItemId && pathVariablesValue) {
      const pathVariables = Object.fromEntries(new URLSearchParams(pathVariablesValue).entries());
      collectionItem = {
        collection,
        collectionItemId,
        pathVariables
      };
    }
    return {
      target: target === "none" ? null : target,
      /**
       * For historical reason we used to set "element=none" into the
       * datalink, we no longer do that today, but we still keep this code
       * so we could parse legacy links correctly.
       */
      element: element === "none" ? void 0 : element,
      collectionItem
    };
  } catch (e2) {
    return;
  }
}
function navigateFromAttributes(navigate, element, implicitPathVariables) {
  var _a, _b, _c;
  let routeId = element.getAttribute(
    "data-framer-page-link-target"
    /* PageLinkAttribute.Page */
  );
  let elementId;
  let pathVariables;
  if (routeId) {
    elementId = (_a = element.getAttribute(
      "data-framer-page-link-element"
      /* PageLinkAttribute.Element */
    )) != null ? _a : void 0;
    const pathVariablesRaw = element.getAttribute(
      "data-framer-page-link-path-variables"
      /* PageLinkAttribute.PathVariables */
    );
    if (pathVariablesRaw) {
      pathVariables = Object.fromEntries(new URLSearchParams(pathVariablesRaw).entries());
    }
  } else {
    const href = element.getAttribute("href");
    if (!href)
      return false;
    const link = parseFramerPageLink(href);
    if (!link || !link.target)
      return false;
    routeId = link.target;
    elementId = (_b = link.element) != null ? _b : void 0;
    pathVariables = (_c = link.collectionItem) == null ? void 0 : _c.pathVariables;
  }
  const smoothScroll = elementId ? element.dataset.framerSmoothScroll !== void 0 : void 0;
  navigate(routeId, elementId, Object.assign({}, implicitPathVariables, pathVariables), smoothScroll);
  return true;
}

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/modules/Link.js
var linkKey = "webPageId";
function isLinkToWebPage(link) {
  return Boolean(link && typeof link === "object" && linkKey in link);
}
function createVariablesFromPageLinkCollectionItem(collectionItem) {
  if (!collectionItem)
    return void 0;
  const variables = {};
  for (const pathVariablesKey2 in collectionItem.pathVariables) {
    const value = collectionItem.pathVariables[pathVariablesKey2];
    if (value)
      variables[pathVariablesKey2] = value;
  }
  return variables;
}
function linkFromFramerPageLink(link) {
  if (!isFramerPageLink(link))
    return link;
  const parsed = parseFramerPageLink(link);
  if (!parsed)
    return void 0;
  const { target, element, collectionItem } = parsed;
  if (!target)
    return void 0;
  return {
    webPageId: target,
    hash: element != null ? element : void 0,
    pathVariables: createVariablesFromPageLinkCollectionItem(collectionItem)
  };
}
var pathVariablesRegExp = /:([a-zA-Z][a-zA-Z0-9_]*)/g;
var PathVariablesContext = React32.createContext(void 0);
function useImplicitPathVariables() {
  var _a;
  const contextPathVariables = React32.useContext(PathVariablesContext);
  const currentPathVariables = (_a = useCurrentRoute()) == null ? void 0 : _a.pathVariables;
  const pathVariables = contextPathVariables || currentPathVariables;
  return pathVariables;
}
function linkMatchesRoute(route, { webPageId, hash: hash2, pathVariables }, implicitPathVariables) {
  if (webPageId !== route.id)
    return false;
  if (hash2)
    return false;
  if (route.path && route.pathVariables) {
    const combinedPathVariable = Object.assign({}, implicitPathVariables, pathVariables);
    for (const [, key3] of route.path.matchAll(pathVariablesRegExp)) {
      if (!key3)
        return false;
      if (route.pathVariables[key3] !== combinedPathVariable[key3]) {
        return false;
      }
    }
  }
  return true;
}
function useLinkMatchesRoute(link) {
  const route = useCurrentRoute();
  const contextPathVariables = React32.useContext(PathVariablesContext);
  if (!route)
    return false;
  const pageLink = isString(link) ? linkFromFramerPageLink(link) : link;
  return isLinkToWebPage(pageLink) ? linkMatchesRoute(route, pageLink, contextPathVariables) : false;
}
function isInternalURL(href) {
  if (href === void 0)
    return false;
  if (href.startsWith("#") || href.startsWith("/") || href.startsWith("."))
    return true;
  return false;
}
function isValidURL(href, isInternal) {
  try {
    const url = new URL(href);
    return Boolean(url.protocol);
  } catch (e2) {
  }
  return isInternal;
}
var AnchorLinkTarget;
(function(AnchorLinkTarget2) {
  AnchorLinkTarget2["_blank"] = "_blank";
  AnchorLinkTarget2["_self"] = "_self";
})(AnchorLinkTarget || (AnchorLinkTarget = {}));
function getTargetAttrValue(openInNewTab, isInternal) {
  if (openInNewTab !== void 0) {
    return openInNewTab ? AnchorLinkTarget._blank : void 0;
  }
  return isInternal ? void 0 : AnchorLinkTarget._blank;
}
function propsForLink(href, openInNewTab = void 0) {
  const isInternal = isInternalURL(href);
  const anchorTarget = getTargetAttrValue(openInNewTab, isInternal);
  return {
    href: isValidURL(href, isInternal) ? href : `https://${href}`,
    target: anchorTarget,
    rel: !isInternal ? "noopener" : void 0
  };
}
function createOnClickLinkHandler(router, routeId, elementId, combinedPathVariables, smoothScroll) {
  return (event) => {
    var _a;
    if (event.metaKey)
      return;
    const anchorElement = findAnchorElement(event.target);
    if (!anchorElement || anchorElement.getAttribute("target") === AnchorLinkTarget._blank)
      return;
    event.preventDefault();
    (_a = router.navigate) == null ? void 0 : _a.call(router, routeId, elementId, combinedPathVariables, smoothScroll);
  };
}
function propsForRoutePath(href, openInNewTab, router, currentRoute, implicitPathVariables, smoothScroll) {
  const isInternal = isInternalURL(href);
  if (!router.routes || !router.getRoute || !currentRoute || !isInternal) {
    return propsForLink(href, openInNewTab);
  }
  try {
    const [pathname, hash2] = href.split("#", 2);
    assert(pathname !== void 0, "A href must have a defined pathname.");
    const { routeId, pathVariables } = inferInitialRouteFromPath(router.routes, pathname);
    const route = router.getRoute(routeId);
    if (route) {
      preloadComponent(route.page);
      const combinedPathVariables = Object.assign({}, implicitPathVariables, pathVariables);
      const path = getPathForRoute(route, {
        currentRoutePath: currentRoute.path,
        // The hash value is already fully resolved so we don't need to
        // provide any hashVariables.
        hash: hash2 || void 0,
        pathVariables: combinedPathVariables
      });
      const anchorTarget = getTargetAttrValue(openInNewTab, true);
      return {
        href: path,
        target: anchorTarget,
        onClick: createOnClickLinkHandler(router, routeId, hash2 || void 0, combinedPathVariables, smoothScroll)
      };
    }
  } catch (e2) {
  }
  return propsForLink(href, openInNewTab);
}
var Link = /* @__PURE__ */ React32.forwardRef((_a, forwardedRef) => {
  var _b = _a, { children, href, openInNewTab, smoothScroll } = _b, restProps = __objRest(_b, ["children", "href", "openInNewTab", "smoothScroll"]);
  const router = useRouter();
  const currentRoute = useCurrentRoute();
  const implicitPathVariables = useImplicitPathVariables();
  const props = React32.useMemo(() => {
    var _a2;
    if (!href)
      return {};
    const pageLink = isLinkToWebPage(href) ? href : linkFromFramerPageLink(href);
    if (!pageLink)
      return {};
    if (isString(pageLink)) {
      return propsForRoutePath(pageLink, openInNewTab, router, currentRoute, implicitPathVariables, smoothScroll);
    }
    const { webPageId, hash: hash2, pathVariables, hashVariables } = pageLink;
    const route = (_a2 = router.getRoute) == null ? void 0 : _a2.call(router, webPageId);
    if (route)
      preloadComponent(route.page);
    const combinedPathVariable = Object.assign({}, implicitPathVariables, pathVariables);
    const combinedHashVariable = Object.assign({}, implicitPathVariables, hashVariables);
    const anchorTarget = getTargetAttrValue(openInNewTab, true);
    const resolvedHref = getPathForRoute(route, {
      currentRoutePath: currentRoute == null ? void 0 : currentRoute.path,
      hash: hash2,
      pathVariables: combinedPathVariable,
      hashVariables: combinedHashVariable
    });
    const resolvedHash = resolvedHref.split("#", 2)[1];
    return {
      href: resolvedHref,
      target: anchorTarget,
      onClick: createOnClickLinkHandler(router, webPageId, resolvedHash, combinedPathVariable, smoothScroll),
      "data-framer-page-link-current": currentRoute && linkMatchesRoute(currentRoute, pageLink, implicitPathVariables) || void 0
    };
  }, [currentRoute, href, openInNewTab, implicitPathVariables, router, smoothScroll]);
  if (!children)
    return null;
  const child = React32.Children.only(children);
  if (!React32.isValidElement(child))
    return null;
  return React32.cloneElement(child, __spreadProps(__spreadValues(__spreadValues({}, restProps), props), { ref: forwardedRef != null ? forwardedRef : restProps.ref }));
});

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/modules/useActiveVariantCallback.js
import React34 from "react";

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/components/NavigationTargetContext.js
import React33, { createContext as createContext2, useCallback as useCallback8, useContext as useContext7, useEffect as useEffect16, useRef as useRef12 } from "react";

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/components/utils/useConstant.js
import { useRef as useRef11 } from "react";
function useConstant(init) {
  const ref = useRef11(null);
  if (ref.current === null) {
    ref.current = init();
  }
  return ref.current;
}

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/components/NavigationTargetContext.js
var NavigationTargetContext = /* @__PURE__ */ createContext2({ register: () => {
}, deregister: () => {
} });
function useOnCurrentTargetChange(callback, deps = []) {
  const { register, deregister } = useContext7(NavigationTargetContext);
  useEffect16(() => {
    if (!callback)
      return;
    register(callback);
    return () => deregister(callback);
  }, [register, deregister, ...deps]);
}

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/modules/useActiveVariantCallback.js
function rejectPending(pendingTimers, pendingPromises) {
  pendingTimers.forEach((t2) => clearTimeout(t2));
  pendingTimers.clear();
  pendingPromises.forEach((reject) => reject && reject("Callback cancelled by variant change"));
  pendingPromises.clear();
}
function createSet() {
  return /* @__PURE__ */ new Set();
}
function useActiveVariantCallback(baseVariant) {
  const pendingPromises = useConstant(createSet);
  const pendingTimers = useConstant(createSet);
  useOnCurrentTargetChange(() => {
    return () => rejectPending(pendingTimers, pendingPromises);
  });
  React34.useEffect(() => {
    return () => rejectPending(pendingTimers, pendingPromises);
  }, [pendingPromises, pendingTimers]);
  React34.useEffect(() => {
    rejectPending(pendingTimers, pendingPromises);
  }, [baseVariant, pendingPromises, pendingTimers]);
  return React34.useRef({
    /**
     * Create a callback that can be cancelled if the base variant changes.
     */
    activeVariantCallback: (callback) => (...args) => {
      return new Promise((resolve, reject) => {
        pendingPromises.add(reject);
        return callback(...args).then(resolve);
      }).catch(() => {
      });
    },
    /**
     * Execute a callback after a defined period of time. The callback will not
     * be called if pending events are cancelled because the timeout will be
     * cancelled.
     */
    delay: (callback, msDelay) => __async(this, null, function* () {
      yield new Promise((resolve) => pendingTimers.add(globalThis.setTimeout(() => resolve(true), msDelay)));
      callback();
    })
  }).current;
}

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/modules/useAddVariantProps.js
import React35 from "react";
function useAddVariantProps(baseVariant, gestureVariant, variantProps) {
  return React35.useCallback((id) => {
    var _a, _b, _c;
    if (!variantProps)
      return {};
    if (!baseVariant)
      return {};
    if (gestureVariant) {
      return Object.assign({}, (_a = variantProps[baseVariant]) == null ? void 0 : _a[id], (_b = variantProps[gestureVariant]) == null ? void 0 : _b[id]);
    }
    return ((_c = variantProps[baseVariant]) == null ? void 0 : _c[id]) || {};
  }, [baseVariant, gestureVariant, variantProps]);
}

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/modules/useDataRecord.js
import { useMemo as useMemo4 } from "react";
function useDataRecord(collection, variables) {
  return useMemo4(() => {
    if (!Array.isArray(collection)) {
      return null;
    }
    if (!variables) {
      return null;
    }
    const pageRecord = collection.find((record) => {
      return Object.entries(variables).every(([key3, value]) => {
        const recordValue = record[key3];
        if (value === void 0 || recordValue === void 0 || isObject(value) || isObject(recordValue)) {
          return false;
        }
        return String(value) === String(recordValue);
      });
    });
    return pageRecord != null ? pageRecord : null;
  }, [collection, variables]);
}

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/modules/useGamepad.js
import React36 from "react";
function gamepadInputsHaveChanged(previous, current) {
  if (previous.length !== current.length)
    return true;
  if (!previous.every((item, i2) => current[i2] === item))
    return true;
  return false;
}
function createGamepadPoller() {
  const handlers = /* @__PURE__ */ new Set();
  let isConnected = false;
  let isPolling = null;
  let lastKeys = [];
  const startPolling = () => {
    const input = getGamepadInputs();
    if (!input)
      return;
    const { gamepad, inputs } = input;
    const { mapping, id } = gamepad;
    if (gamepadInputsHaveChanged(lastKeys, inputs))
      handlers.forEach((handler) => handler({ inputs, mapping, id }));
    lastKeys = inputs;
    isPolling = safeWindow.requestAnimationFrame(startPolling);
  };
  const handleConnection = () => {
    if (isConnected || isPolling)
      return;
    startPolling();
    isConnected = true;
  };
  const stopPolling = () => {
    if (!isPolling)
      return;
    safeWindow.cancelAnimationFrame(isPolling);
    isPolling = null;
  };
  const handleDisconnection = () => {
    if (!isConnected)
      return;
    stopPolling();
    isConnected = false;
  };
  const setupAndStartPolling = () => {
    if (isPolling)
      return;
    const gamepad = getGamepadInputs();
    if (!gamepad) {
      safeWindow.addEventListener("gamepadconnected", handleConnection);
      return;
    }
    safeWindow.addEventListener("gamepaddisconnected", handleDisconnection);
    isConnected = true;
    startPolling();
  };
  const cleanupAndStopPolling = () => {
    if (!isPolling)
      return;
    safeWindow.removeEventListener("gamepadconnected", handleConnection);
    safeWindow.removeEventListener("gamepaddisconnected", handleDisconnection);
    stopPolling();
  };
  return {
    register(callback) {
      if (handlers.size === 0)
        setupAndStartPolling();
      handlers.add(callback);
    },
    unregister(callback) {
      handlers.delete(callback);
      if (handlers.size === 0)
        cleanupAndStopPolling();
    }
  };
}
var gamepadPoller = /* @__PURE__ */ createGamepadPoller();
var GamepadContext = /* @__PURE__ */ React36.createContext(gamepadPoller);
function getGamepadInputs() {
  let firstConnectedGamepad = null;
  const gamepads = navigator.getGamepads();
  for (const gamepad of gamepads) {
    if (!gamepad)
      continue;
    if (!firstConnectedGamepad)
      firstConnectedGamepad = gamepad;
    const inputs = [...scanPressedAxis(gamepad), ...scanPressedButtons(gamepad)];
    if (inputs.length > 0)
      return { gamepad, inputs };
  }
  if (firstConnectedGamepad)
    return { gamepad: firstConnectedGamepad, inputs: [] };
  return null;
}
function scanPressedAxis(gamepad) {
  const axes = [];
  for (const [idx, axis] of gamepad.axes.entries()) {
    if (idx > 3)
      continue;
    if (axis <= -0.5)
      axes.push(`Axis ${idx}-`);
    if (axis > 0.5)
      axes.push(`Axis ${idx}+`);
  }
  return axes;
}
function scanPressedButtons(gamepad) {
  const buttons = [];
  for (const [idx, button] of gamepad.buttons.entries()) {
    if (isButtonPressed(button))
      buttons.push(`Button ${idx}`);
  }
  return buttons;
}
function isButtonPressed(button) {
  return button.pressed === true || button.value > 0;
}
function useGamepad(input, callback, { mapping, on } = {}) {
  const context = React36.useContext(GamepadContext);
  const settings = useConstant(() => ({
    mapping: mapping != null ? mapping : "standard",
    on: on != null ? on : "keydown"
  }));
  const stateRef = React36.useRef({
    pressed: false,
    handler: callback
  });
  const cb = React36.useCallback((gamepad) => {
    const { pressed, handler } = stateRef.current;
    if (gamepad.inputs.includes(input) && settings.mapping === gamepad.mapping) {
      settings.on === "keydown" && handler();
      stateRef.current.pressed = true;
    } else if (pressed) {
      settings.on === "keyup" && handler();
      stateRef.current.pressed = false;
    }
  }, [input, settings]);
  useOnCurrentTargetChange((isInTarget, isOverlayed) => {
    const isActive = isInTarget && !isOverlayed;
    if (isActive) {
      context.register(cb);
    } else {
      context.unregister(cb);
    }
    return () => context.unregister(cb);
  }, []);
  React36.useEffect(() => {
    return () => context.unregister(cb);
  }, [cb, context]);
  React36.useEffect(() => {
    stateRef.current.handler = callback;
  }, [callback]);
}

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/modules/useHotkey.js
import React37 from "react";
var modifierDefaults = {
  altKey: false,
  ctrlKey: false,
  metaKey: false,
  shiftKey: false
};
function createShortcutDefinition(shortcut) {
  const keys2 = shortcut.split("+");
  const key3 = keys2.pop();
  if (!key3)
    return void 0;
  const modifiers = {};
  for (const modifier of keys2) {
    modifiers[`${modifier}Key`] = true;
  }
  return __spreadProps(__spreadValues(__spreadValues({}, modifierDefaults), modifiers), {
    key: key3
  });
}
function useHotkey(shortcut, callback) {
  const inTarget = React37.useRef(true);
  const shortcutDefinition = useConstant(() => createShortcutDefinition(shortcut));
  useOnCurrentTargetChange((isCurrentTarget, isOverlayed) => {
    inTarget.current = isCurrentTarget && !isOverlayed;
    return () => inTarget.current = false;
  });
  const eventHandler = React37.useCallback((event) => {
    if (!shortcutDefinition)
      return;
    if (!inTarget.current)
      return;
    if (!Object.keys(shortcutDefinition).every((key3) => shortcutDefinition[key3] === event[key3]))
      return;
    event.preventDefault();
    callback();
  }, [shortcutDefinition, callback]);
  React37.useEffect(() => {
    document.addEventListener("keydown", eventHandler);
    return () => document.removeEventListener("keydown", eventHandler);
  }, [eventHandler]);
}

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/modules/useIsOnFramerCanvas.js
function useIsOnFramerCanvas() {
  return RenderTarget.current() === RenderTarget.canvas;
}

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/modules/useNavigate.js
function useNavigate() {
  const { navigate } = useRouter();
  const onCanvas = useIsOnFramerCanvas();
  if (!navigate)
    return () => {
    };
  return (target) => {
    if (onCanvas)
      return;
    navigate(target);
    return false;
  };
}

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/modules/useOnVariantChange.js
import React38 from "react";
function callbackForVariant(map, variant) {
  if (map[variant])
    return map[variant];
  if (variant in map)
    return void 0;
  return map.default;
}
function useOnVariantChange(variant, callbackMap) {
  const isOnFramerCanvas = useIsOnFramerCanvas();
  if (isOnFramerCanvas)
    return;
  const isActiveScreenRef = React38.useRef(true);
  const callbackMapRef = React38.useRef(callbackMap);
  useOnCurrentTargetChange((isCurrent, isOverlayed) => {
    const isActiveScreen = isCurrent && !isOverlayed;
    if (!isActiveScreenRef.current && isActiveScreen) {
      const callback = callbackForVariant(callbackMapRef.current, variant);
      if (callback)
        callback();
    }
    isActiveScreenRef.current = isActiveScreen;
  }, []);
  React38.useEffect(() => {
    if (isActiveScreenRef.current) {
      const callback = callbackForVariant(callbackMapRef.current, variant);
      if (callback)
        callback();
    }
  }, [variant]);
}
function useOnAppear(callback) {
  useOnVariantChange("default", { default: callback });
}

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/modules/useOverlayState.js
import React39 from "react";
function useOverlayState({ blockDocumentScrolling = true } = {}) {
  const [showOverlay, setShowOverlay] = React39.useState(false);
  const callback = React39.useCallback((show) => {
    setShowOverlay(show);
    if (blockDocumentScrolling === false)
      return;
    if (show) {
      document.documentElement.style.setProperty("overflow", "hidden");
    } else {
      document.documentElement.style.removeProperty("overflow");
    }
  }, [blockDocumentScrolling]);
  React39.useEffect(() => () => {
    if (blockDocumentScrolling === false)
      return;
    document.documentElement.style.removeProperty("overflow");
  }, [blockDocumentScrolling]);
  return [showOverlay, callback];
}

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/modules/useQueryData.js
import { useRef as useRef13 } from "react";
var DeepWeakMap = class {
  constructor() {
    __publicField(this, "map1", /* @__PURE__ */ new WeakMap());
  }
  get(key1, key22) {
    const map2 = this.map1.get(key1);
    return map2 == null ? void 0 : map2.get(key22);
  }
  set(key1, key22, value) {
    var _a;
    const map2 = (_a = this.map1.get(key1)) != null ? _a : /* @__PURE__ */ new WeakMap();
    this.map1.set(key1, map2);
    return map2.set(key22, value);
  }
};
var UnaryOperator;
(function(UnaryOperator2) {
  UnaryOperator2["Not"] = "not";
})(UnaryOperator || (UnaryOperator = {}));
var BinaryOperator;
(function(BinaryOperator2) {
  BinaryOperator2["And"] = "and";
  BinaryOperator2["Or"] = "or";
  BinaryOperator2["Equals"] = "==";
  BinaryOperator2["NotEquals"] = "!=";
  BinaryOperator2["LessThan"] = "<";
  BinaryOperator2["LessThanOrEqual"] = "<=";
  BinaryOperator2["GreaterThan"] = ">";
  BinaryOperator2["GreaterThanOrEqual"] = ">=";
})(BinaryOperator || (BinaryOperator = {}));
var OrderDirection;
(function(OrderDirection2) {
  OrderDirection2["Ascending"] = "asc";
  OrderDirection2["Descending"] = "desc";
})(OrderDirection || (OrderDirection = {}));
function useData(from) {
  const { data, locale } = from;
  if (isArray(data))
    return data;
  const promise = data.preload(locale);
  if (promise)
    throw promise;
  return data.read(locale);
}
var indexCache = /* @__PURE__ */ new WeakMap();
function useInsertIndex(data) {
  const cached = indexCache.get(data);
  if (cached)
    return cached;
  const result = data.map((item, index) => {
    return __spreadProps(__spreadValues({}, item), { index });
  });
  indexCache.set(data, result);
  return result;
}
var whereCache = /* @__PURE__ */ new DeepWeakMap();
function useExecuteWhere(data, where) {
  if (!where)
    return data;
  const cached = whereCache.get(data, where);
  if (cached)
    return cached;
  const result = data.filter((item) => {
    return evaluateExpression(where, {
      resolveIdentifier(identifier) {
        return item[identifier];
      }
    });
  });
  whereCache.set(data, where, result);
  return result;
}
var orderByCache = /* @__PURE__ */ new DeepWeakMap();
function useExecuteOrderBy(data, orderBy) {
  if (!orderBy)
    return data;
  const cached = orderByCache.get(data, orderBy);
  if (cached)
    return cached;
  const result = [...data].sort((leftItem, rightItem) => {
    let order = 0;
    for (const expression of orderBy) {
      const leftValue = evaluateExpression(expression, {
        resolveIdentifier(identifier) {
          return leftItem[identifier];
        }
      });
      const rightValue = evaluateExpression(expression, {
        resolveIdentifier(identifier) {
          return rightItem[identifier];
        }
      });
      if (isNumber(leftValue) && isNumber(rightValue)) {
        order = leftValue - rightValue;
      }
      if (isString(leftValue) && isString(rightValue)) {
        order = leftValue.localeCompare(rightValue, "en");
      }
      if (order !== 0) {
        return expression.direction === OrderDirection.Descending ? -order : order;
      }
    }
    if (isNumber(leftItem.index) && isNumber(rightItem.index)) {
      return leftItem.index - rightItem.index;
    }
    return 0;
  });
  orderByCache.set(data, orderBy, result);
  return result;
}
var offsetCache = /* @__PURE__ */ new DeepWeakMap();
function useExecuteOffset(data, offset) {
  if (!offset)
    return data;
  const cached = offsetCache.get(data, offset);
  if (cached)
    return cached;
  const offsetValue = evaluateExpression(offset, {
    resolveIdentifier() {
      throw new Error("Can't resolve identifier");
    }
  });
  const result = isNumber(offsetValue) ? data.slice(offsetValue) : data;
  offsetCache.set(data, offset, result);
  return result;
}
var limitCache = /* @__PURE__ */ new DeepWeakMap();
function useExecuteLimit(data, limit) {
  if (!limit)
    return data;
  const cached = limitCache.get(data, limit);
  if (cached)
    return cached;
  const limitValue = evaluateExpression(limit, {
    resolveIdentifier() {
      throw new Error("Can't resolve identifier");
    }
  });
  const result = isNumber(limitValue) ? data.slice(0, limitValue) : data;
  limitCache.set(data, limit, result);
  return result;
}
var selectCache = /* @__PURE__ */ new DeepWeakMap();
function useExecuteSelect(data, select) {
  const cached = selectCache.get(data, select);
  if (cached)
    return cached;
  const preloadPromise = preloadExpressions(select, data);
  if (preloadPromise)
    throw preloadPromise;
  const result = data.map((item) => {
    var _a;
    const selected = {};
    for (const expression of select) {
      const name = (_a = expression.alias) != null ? _a : stringifyExpression(expression);
      selected[name] = evaluateExpression(expression, {
        resolveIdentifier(identifier) {
          const value = item[identifier];
          if (LazyValue.is(value)) {
            return value.read();
          }
          return value;
        }
      });
    }
    return selected;
  });
  selectCache.set(data, select, result);
  return result;
}
function preloadExpressions(expressions, data) {
  const identifiers = [];
  for (const expression of expressions) {
    extractIdentifiers(identifiers, expression);
  }
  if (identifiers.length === 0)
    return;
  const preloadPromises = [];
  for (const item of data) {
    for (const identifier of identifiers) {
      const value = item[identifier];
      if (!LazyValue.is(value))
        continue;
      const promise = value.preload();
      if (!promise)
        continue;
      preloadPromises.push(promise);
    }
  }
  if (preloadPromises.length === 0)
    return;
  return Promise.all(preloadPromises);
}
function extractIdentifiers(identifiers, expression) {
  if (expression.type === "Identifier") {
    identifiers.push(expression.name);
  }
  if (expression.type === "FunctionCall") {
    for (const argument of expression.arguments) {
      extractIdentifiers(identifiers, argument);
    }
  }
  if (expression.type === "Case") {
    if (expression.value) {
      extractIdentifiers(identifiers, expression.value);
    }
    for (const condition of expression.conditions) {
      extractIdentifiers(identifiers, condition.when);
      extractIdentifiers(identifiers, condition.then);
    }
    if (expression.else) {
      extractIdentifiers(identifiers, expression.else);
    }
  }
  if (expression.type === "UnaryOperation") {
    extractIdentifiers(identifiers, expression.value);
  }
  if (expression.type === "BinaryOperation") {
    extractIdentifiers(identifiers, expression.left);
    extractIdentifiers(identifiers, expression.right);
  }
  if (expression.type === "TypeCast") {
    extractIdentifiers(identifiers, expression.value);
  }
}
function useQueryData(query) {
  const queryRef = useRef13();
  if (queryRef.current && isEqual(queryRef.current, query)) {
    query = queryRef.current;
  } else {
    queryRef.current = query;
  }
  let result = useData(query.from);
  result = useInsertIndex(result);
  result = useExecuteWhere(result, query.where);
  result = useExecuteOrderBy(result, query.orderBy);
  result = useExecuteOffset(result, query.offset);
  result = useExecuteLimit(result, query.limit);
  result = useExecuteSelect(result, query.select);
  return result;
}
function evaluateExpression(expression, context) {
  switch (expression.type) {
    case "Identifier":
      return context.resolveIdentifier(expression.name);
    case "LiteralValue":
      return expression.value;
    case "FunctionCall":
      return evaluateFunctionCall(expression, context);
    case "Case":
      return evaluateCase(expression, context);
    case "UnaryOperation":
      return evaluateUnaryOperation(expression, context);
    case "BinaryOperation":
      return evaluateBinaryOperation(expression, context);
    case "TypeCast":
      return evaluateTypeCast(expression, context);
    default:
      throw new Error(`Unsupported expression: ${JSON.stringify(expression)}`);
  }
}
function evaluateFunctionCall(expression, context) {
  function getArgument(index) {
    const argument = expression.arguments[index];
    if (argument) {
      return evaluateExpression(argument, context);
    }
  }
  switch (expression.functionName) {
    case "CONTAINS": {
      const value = getArgument(0);
      const search = getArgument(1);
      if (isString(value) && isString(search)) {
        return value.toLowerCase().includes(search.toLowerCase());
      }
      return false;
    }
    case "STARTS_WITH": {
      const value = getArgument(0);
      const search = getArgument(1);
      if (isString(value) && isString(search)) {
        return value.toLowerCase().startsWith(search.toLowerCase());
      }
      return false;
    }
    case "ENDS_WITH": {
      const value = getArgument(0);
      const search = getArgument(1);
      if (isString(value) && isString(search)) {
        return value.toLowerCase().endsWith(search.toLowerCase());
      }
      return false;
    }
    default: {
      throw new Error(`Unsupported function: ${expression.functionName}`);
    }
  }
}
function evaluateCase(expression, context) {
  const value = expression.value && evaluateExpression(expression.value, context);
  for (const condition of expression.conditions) {
    const when = evaluateExpression(condition.when, context);
    if (expression.value ? isLooseEqual(when, value) : when) {
      return evaluateExpression(condition.then, context);
    }
  }
  if (expression.else) {
    return evaluateExpression(expression.else, context);
  }
}
function evaluateUnaryOperation(expression, context) {
  const value = evaluateExpression(expression.value, context);
  switch (expression.operator) {
    case UnaryOperator.Not: {
      return !value;
    }
    default: {
      throw new Error(`Unsupported unary operation: ${expression.operator}`);
    }
  }
}
function evaluateBinaryOperation(expression, context) {
  const left = evaluateExpression(expression.left, context);
  const right = evaluateExpression(expression.right, context);
  switch (expression.operator) {
    case BinaryOperator.And: {
      return Boolean(left && right);
    }
    case BinaryOperator.Or: {
      return Boolean(left || right);
    }
    case BinaryOperator.Equals: {
      return isLooseEqual(left, right);
    }
    case BinaryOperator.NotEquals: {
      return !isLooseEqual(left, right);
    }
    case BinaryOperator.LessThan: {
      if (isNumber(left) && isNumber(right)) {
        return left < right;
      }
      if (isValidDate(left) && isValidDate(right)) {
        return left < right;
      }
      return false;
    }
    case BinaryOperator.LessThanOrEqual: {
      if (isNumber(left) && isNumber(right)) {
        return left <= right;
      }
      if (isValidDate(left) && isValidDate(right)) {
        return left <= right;
      }
      return false;
    }
    case BinaryOperator.GreaterThan: {
      if (isNumber(left) && isNumber(right)) {
        return left > right;
      }
      if (isValidDate(left) && isValidDate(right)) {
        return left > right;
      }
      return false;
    }
    case BinaryOperator.GreaterThanOrEqual: {
      if (isNumber(left) && isNumber(right)) {
        return left >= right;
      }
      if (isValidDate(left) && isValidDate(right)) {
        return left >= right;
      }
      return false;
    }
    default: {
      throw new Error(`Unsupported binary operation: ${expression.operator}`);
    }
  }
}
function evaluateTypeCast(expression, context) {
  const value = evaluateExpression(expression.value, context);
  switch (expression.dataType) {
    case "BOOLEAN": {
      return Boolean(value);
    }
    case "NUMBER": {
      if (isNumber(value) && isFinite(value)) {
        return value;
      }
      if (isString(value)) {
        const parsed = parseFloat(value);
        if (isFinite(parsed)) {
          return parsed;
        }
      }
      return 0;
    }
    case "DATE": {
      if (value instanceof Date)
        return value;
      if (!isString(value) && !isNumber(value)) {
        return void 0;
      }
      return new Date(value);
    }
    case "STRING": {
      return String(value);
    }
    default: {
      throw new Error(`Unsupported type cast: ${expression.dataType}`);
    }
  }
}
function stringifyExpression(expression) {
  switch (expression.type) {
    case "Identifier": {
      return expression.name;
    }
    default: {
      throw new Error(`Can't stringify expression: ${JSON.stringify(expression)}`);
    }
  }
}
function isLooseEqual(left, right) {
  if (left == null && right == null) {
    return true;
  }
  if (isString(left) && isString(right)) {
    return left.toLowerCase() === right.toLowerCase();
  }
  if (isValidDate(left) && isValidDate(right)) {
    return left.getTime() === right.getTime();
  }
  return left === right;
}

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/modules/useVariantState.js
import React40 from "react";
function createGestureVariant(variant, type) {
  return `${variant}-${type}`;
}
function nextVariant(allVariants, currentVariant) {
  const index = allVariants.indexOf(currentVariant);
  let nextIndex = index + 1;
  if (nextIndex >= allVariants.length) {
    nextIndex = 0;
  }
  const nextVariant2 = allVariants[nextIndex];
  assert(nextVariant2 !== void 0, "nextVariant should be defined");
  return nextVariant2;
}
function activeTransition(transitions, variant) {
  if (!transitions)
    return void 0;
  if (variant) {
    const variantTransition = transitions[variant];
    if (variantTransition)
      return variantTransition;
  }
  return transitions.default;
}
function getGesture(enabledGestures, isHovered, isPressed) {
  const { hover, pressed } = enabledGestures || {};
  if (pressed && isPressed)
    return "pressed";
  if (hover && isHovered)
    return "hover";
}
function createVariantClassName(baseVariant, variantClassNames) {
  const mappedClassName = variantClassNames[baseVariant];
  if (mappedClassName)
    return mappedClassName;
  return `framer-${"v"}-${baseVariant}`;
}
function safeBaseVariant(targetVariant, fallbackVariant, validBaseVariants) {
  if (!targetVariant)
    return fallbackVariant;
  if (validBaseVariants.has(targetVariant))
    return targetVariant;
  return fallbackVariant;
}
var CycleVariantState = /* @__PURE__ */ Symbol("cycle");
function useVariantState({ variant, defaultVariant: externalDefaultVariant, transitions: externalTransitions, enabledGestures: externalEnabledGestures, cycleOrder: externalCycleOrder = [], variantProps = {}, variantClassNames = {} }) {
  const forceUpdate = useForceUpdate();
  const validBaseVariants = useConstant(() => new Set(externalCycleOrder));
  const internalState = React40.useRef({
    isHovered: false,
    isPressed: false,
    baseVariant: safeBaseVariant(variant, externalDefaultVariant, validBaseVariants),
    lastVariant: variant,
    gestureVariant: void 0,
    // When used in generated components, these are static values defined
    // outside of the component function that also need to not result in
    // memoized values being recalculated, so we dump them into the ref.
    defaultVariant: externalDefaultVariant,
    enabledGestures: externalEnabledGestures,
    cycleOrder: externalCycleOrder,
    transitions: externalTransitions
  });
  const resolveNextVariant = React40.useCallback((targetBaseVariant) => {
    const { isHovered: isHovered2, isPressed: isPressed2, enabledGestures: enabledGestures2, defaultVariant: defaultVariant2 } = internalState.current;
    const nextBaseVariant = safeBaseVariant(targetBaseVariant, defaultVariant2, validBaseVariants);
    const gesture = getGesture(enabledGestures2 == null ? void 0 : enabledGestures2[nextBaseVariant], isHovered2, isPressed2);
    const nextGestureVariant = gesture ? createGestureVariant(nextBaseVariant, gesture) : void 0;
    return [nextBaseVariant, nextGestureVariant];
  }, [validBaseVariants]);
  const setGestureState = React40.useCallback(({ isHovered: isHovered2, isPressed: isPressed2 }) => {
    if (isHovered2 !== void 0)
      internalState.current.isHovered = isHovered2;
    if (isPressed2 !== void 0)
      internalState.current.isPressed = isPressed2;
    const { baseVariant: baseVariant2, gestureVariant: gestureVariant2, defaultVariant: defaultVariant2 } = internalState.current;
    const [nextBase, nextGesture] = resolveNextVariant(baseVariant2);
    if (nextBase !== baseVariant2 || nextGesture !== gestureVariant2) {
      internalState.current.baseVariant = nextBase || defaultVariant2;
      internalState.current.gestureVariant = nextGesture;
      forceUpdate();
    }
  }, [resolveNextVariant, forceUpdate]);
  const setVariant = React40.useCallback((proposedVariant) => {
    const { defaultVariant: defaultVariant2, cycleOrder, baseVariant: baseVariant2, gestureVariant: gestureVariant2 } = internalState.current;
    const nextBaseVariant = proposedVariant === CycleVariantState ? nextVariant(cycleOrder || [], baseVariant2 || defaultVariant2) : proposedVariant;
    const [nextBase, nextGesture] = resolveNextVariant(nextBaseVariant);
    if (nextBase !== baseVariant2 || nextGesture !== gestureVariant2) {
      internalState.current.baseVariant = nextBase || defaultVariant2;
      internalState.current.gestureVariant = nextGesture;
      forceUpdate();
    }
  }, [resolveNextVariant, forceUpdate]);
  if (variant !== internalState.current.lastVariant) {
    const [nextBase, nextGesture] = resolveNextVariant(variant);
    internalState.current.lastVariant = nextBase;
    if (nextBase !== internalState.current.baseVariant || nextGesture !== internalState.current.gestureVariant) {
      internalState.current.baseVariant = nextBase;
      internalState.current.gestureVariant = nextGesture;
    }
  }
  const { baseVariant, gestureVariant, defaultVariant, enabledGestures, isHovered, isPressed } = internalState.current;
  const addVariantProps = useAddVariantProps(internalState.current.baseVariant, internalState.current.gestureVariant, variantProps);
  return React40.useMemo(() => {
    const variants = [];
    if (baseVariant !== defaultVariant)
      variants.push(baseVariant);
    if (gestureVariant)
      variants.push(gestureVariant);
    return {
      variants,
      baseVariant,
      gestureVariant,
      transition: activeTransition(internalState.current.transitions, baseVariant),
      setVariant,
      setGestureState,
      addVariantProps,
      classNames: cx2(createVariantClassName(baseVariant, variantClassNames), getGesture(enabledGestures == null ? void 0 : enabledGestures[baseVariant], isHovered, isPressed))
    };
  }, [
    baseVariant,
    gestureVariant,
    isHovered,
    isPressed,
    addVariantProps,
    setVariant,
    defaultVariant,
    enabledGestures,
    setGestureState,
    variantClassNames
  ]);
}

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/modules/withCSS.js
import React42 from "react";

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/render/StyleSheetContext.js
import React41 from "react";
var StyleSheetContext = /* @__PURE__ */ React41.createContext(void 0);

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/modules/withCSS.js
if (isBrowser()) {
  for (const node of document.querySelectorAll("style[data-framer-css-ssr]")) {
    document.head.appendChild(node);
  }
}
var componentsWithServerRenderedStyles = /* @__PURE__ */ (() => {
  var _a;
  if (!isBrowser())
    return /* @__PURE__ */ new Set();
  const componentsWithSSRStylesAttr = (_a = document.querySelector("style[data-framer-css-ssr-minified]")) == null ? void 0 : _a.getAttribute("data-framer-components");
  if (!componentsWithSSRStylesAttr)
    return /* @__PURE__ */ new Set();
  return new Set(componentsWithSSRStylesAttr.split(" "));
})();
var styleTagSSRMarker = { "data-framer-css-ssr": true };
var withCSS = (Component6, escapedCSS, componentSerializationId) => React42.forwardRef((props, ref) => {
  var _a;
  const { sheet, cache: cache3 } = (_a = React42.useContext(StyleSheetContext)) != null ? _a : {};
  if (!isBrowser()) {
    const concatenatedCSS = Array.isArray(escapedCSS) ? escapedCSS.join("\n") : escapedCSS;
    return React42.createElement(
      React42.Fragment,
      null,
      React42.createElement("style", __spreadProps(__spreadValues({}, styleTagSSRMarker), { "data-framer-component": componentSerializationId, dangerouslySetInnerHTML: { __html: concatenatedCSS } })),
      React42.createElement(Component6, __spreadProps(__spreadValues({}, props), { ref }))
    );
  }
  React42.useInsertionEffect(() => {
    if (componentSerializationId && componentsWithServerRenderedStyles.has(componentSerializationId))
      return;
    const css = Array.isArray(escapedCSS) ? escapedCSS : escapedCSS.split("\n");
    css.forEach((rule) => rule && injectCSSRule(rule, sheet, cache3));
  }, []);
  return React42.createElement(Component6, __spreadProps(__spreadValues({}, props), { ref }));
});

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/render/fonts/fontStore.js
import process5 from "process";

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/render/fonts/types.js
var TypefaceSourceNames;
(function(TypefaceSourceNames2) {
  TypefaceSourceNames2["Google"] = "google";
  TypefaceSourceNames2["Fontshare"] = "fontshare";
  TypefaceSourceNames2["Local"] = "local";
  TypefaceSourceNames2["Custom"] = "custom";
})(TypefaceSourceNames || (TypefaceSourceNames = {}));
var knownGoogleFontCategories = ["sans-serif", "serif", "monospace", "display", "handwriting"];

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/render/fonts/CustomFontSource.js
var customFontSelectorPrefix = "CUSTOM;";
function getCustomFontName(fileName, properties) {
  if (!properties)
    return fileName.substring(0, fileName.lastIndexOf("."));
  const fontFamily = properties.font.preferredFamily === "" ? properties.font.fontFamily : properties.font.preferredFamily;
  const variant = properties.font.preferredSubFamily === "" ? properties.font.fontSubFamily : properties.font.preferredSubFamily;
  return `${fontFamily} ${variant}`;
}
var CustomFontSource = class {
  constructor() {
    __publicField(this, "name", TypefaceSourceNames.Custom);
    __publicField(this, "typefaces", []);
    __publicField(this, "byFamily", /* @__PURE__ */ new Map());
    __publicField(this, "assetsByFamily", /* @__PURE__ */ new Map());
  }
  importFonts(assets) {
    this.typefaces.length = 0;
    this.byFamily.clear();
    this.assetsByFamily.clear();
    const fonts = [];
    assets.forEach((asset) => {
      var _a;
      if (!this.isValidCustomFontAsset(asset)) {
        return;
      }
      const fontName = getCustomFontName(asset.name, asset.properties);
      const typeface = this.createTypeface(fontName);
      const font = {
        typeface,
        selector: `${customFontSelectorPrefix}${fontName}`,
        variant: this.inferVariantName(fontName),
        postscriptName: (_a = asset.properties) == null ? void 0 : _a.font.postscriptName,
        file: asset.url
      };
      typeface.fonts.push(font);
      typeface.owner = asset.ownerType === "team" ? "team" : "project";
      this.assetsByFamily.set(fontName, asset);
      fonts.push(...typeface.fonts);
    });
    return fonts;
  }
  isValidCustomFontAsset(asset) {
    var _a;
    if (!asset.mimeType.startsWith("font/"))
      return false;
    if (((_a = asset.properties) == null ? void 0 : _a.kind) !== "font")
      return false;
    if (!asset.properties.font)
      return false;
    return "fontFamily" in asset.properties.font;
  }
  inferVariantName(family) {
    const possibleValues = [
      "thin",
      "ultra light",
      "extra light",
      "light",
      "normal",
      "medium",
      "semi bold",
      "bold",
      "extra bold",
      "black"
    ];
    const possibleValuesWithItalics = [...possibleValues.map((value) => `${value} italic`), ...possibleValues];
    const lowerCaseFamily = family.toLowerCase();
    const tokens = [...lowerCaseFamily.split(" "), ...lowerCaseFamily.split("-"), ...lowerCaseFamily.split("_")];
    const foundToken = possibleValuesWithItalics.find((value) => tokens.includes(value) || tokens.includes(value.replace(/\s+/g, "")));
    if (foundToken)
      return foundToken.replace(/(^\w|\s\w)/g, (char) => char.toUpperCase());
    return "Regular";
  }
  createTypeface(family) {
    const existingTypeface = this.byFamily.get(family);
    if (existingTypeface)
      return existingTypeface;
    const typeface = {
      source: this.name,
      family,
      fonts: []
    };
    this.addTypeface(typeface);
    return typeface;
  }
  addTypeface(typeface) {
    this.typefaces.push(typeface);
    this.byFamily.set(typeface.family, typeface);
  }
  parseSelector(selector) {
    if (!selector.startsWith(customFontSelectorPrefix))
      return null;
    const tokens = selector.split(customFontSelectorPrefix);
    if (tokens[1] === void 0)
      return null;
    const locator = { source: "custom", family: tokens[1] };
    return locator;
  }
  getFontBySelector(selector, createFont = true) {
    const locator = this.parseSelector(selector);
    if (!locator)
      return;
    if (!createFont && !this.byFamily.get(locator.family))
      return;
    return this.getTypefaceByFamily(locator.family).fonts[0];
  }
  getTypefaceByFamily(family) {
    const foundTypeface = this.byFamily.get(family);
    if (foundTypeface)
      return foundTypeface;
    const typeface = {
      source: "custom",
      family,
      fonts: []
    };
    typeface.fonts.push({
      selector: `${customFontSelectorPrefix}${family}`,
      variant: this.inferVariantName(family),
      typeface
    });
    return typeface;
  }
};

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/render/fonts/getFontVariants.js
function getFontVariants(currentVariant, variants, parseVariant) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
  if (variants.length === 0)
    return {};
  const currentVariantInfo = parseVariant(currentVariant);
  if (!currentVariantInfo)
    return {};
  const { weight: currentWeight, style: currentStyle } = currentVariantInfo;
  const variantByWeightAndStyle = /* @__PURE__ */ new Map();
  const boldVariantByStyle = /* @__PURE__ */ new Map();
  variants.forEach((variant) => {
    const variantName = isString(variant) ? variant : variant.name.toLocaleLowerCase();
    const variantInfo = parseVariant(variantName);
    if (!variantInfo)
      return;
    variantByWeightAndStyle.set(`${variantInfo.weight}-${variantInfo.style}`, variantName);
    if (variantInfo.weight <= currentWeight)
      return;
    if (!boldVariantByStyle.has(variantInfo.style)) {
      boldVariantByStyle.set(variantInfo.style, variantName);
    }
  });
  let variantBold = boldVariantByStyle.get(currentStyle);
  let variantBoldItalic = (_a = boldVariantByStyle.get("italic")) != null ? _a : boldVariantByStyle.get("oblique");
  if (currentVariantInfo.weight <= 300) {
    variantBold = (_b = variantByWeightAndStyle.get(`400-${currentStyle}`)) != null ? _b : variantBold;
    variantBoldItalic = (_d = (_c = variantByWeightAndStyle.get("400-italic")) != null ? _c : variantByWeightAndStyle.get("400-oblique")) != null ? _d : variantBoldItalic;
  } else if (currentVariantInfo.weight <= 500) {
    variantBold = (_e = variantByWeightAndStyle.get(`700-${currentStyle}`)) != null ? _e : variantBold;
    variantBoldItalic = (_g = (_f = variantByWeightAndStyle.get("700-italic")) != null ? _f : variantByWeightAndStyle.get("700-oblique")) != null ? _g : variantBoldItalic;
  } else {
    variantBold = (_h = variantByWeightAndStyle.get(`900-${currentStyle}`)) != null ? _h : variantBold;
    variantBoldItalic = (_j = (_i = variantByWeightAndStyle.get("900-italic")) != null ? _i : variantByWeightAndStyle.get("900-oblique")) != null ? _j : variantBoldItalic;
  }
  const variantItalic = (_k = variantByWeightAndStyle.get(`${currentWeight}-italic`)) != null ? _k : variantByWeightAndStyle.get(`${currentWeight}-oblique`);
  return { variantBold, variantItalic, variantBoldItalic };
}

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/render/fonts/FontshareSource.js
var fontsharePrefix = "FS;";
var weightNameToNumber = {
  thin: 100,
  hairline: 100,
  extralight: 200,
  light: 300,
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  ultra: 800,
  black: 900,
  heavy: 900
  // Alternative name for "black".
};
var weightNames = Object.keys(weightNameToNumber);
var allowedVariantsRegex = new RegExp(`^(${[...weightNames, "italic"].join("|")})`);
var FontshareSource = class _FontshareSource {
  constructor() {
    __publicField(this, "name", TypefaceSourceNames.Fontshare);
    __publicField(this, "typefaces", []);
    __publicField(this, "byFamily", /* @__PURE__ */ new Map());
  }
  getTypefaceByFamily(family) {
    var _a;
    return (_a = this.byFamily.get(family)) != null ? _a : null;
  }
  /**
   * Parses variant a string into a weight number and style, defaulting to a
   * weight of `400` and/or a style of `"normal"` depending on what isn't
   * present in the variant string.
   *
   * E.g:
   *   - `"bold"` becomes `{ weight: 700, style: "normal" }`
   *   - `"bold italic"` becomes `{ weight: 700, style: "italic" }`
   *   - `"italic"` becomes `{ weight: 400, style: "italic" }`
   */
  static parseVariant(variant) {
    const variantSplit = variant.split(" ");
    const weightName = weightNames.find((weightName2) => {
      return variantSplit.includes(weightName2);
    });
    const styleName = variant.includes("italic") ? "italic" : "normal";
    const weight = weightName && weightNameToNumber[weightName] || 400;
    const style = styleName === "italic" ? styleName : "normal";
    return {
      weight,
      style
    };
  }
  parseSelector(selector) {
    if (!selector.startsWith(fontsharePrefix))
      return null;
    const tokens = selector.split("-");
    if (tokens.length !== 2)
      return null;
    const [family, variant] = tokens;
    if (!family || !variant)
      return null;
    return { family: family.replace(fontsharePrefix, ""), variant, source: this.name };
  }
  static createSelector(family, variant) {
    return `${fontsharePrefix}${family}-${variant}`;
  }
  addTypeface(typeface) {
    this.typefaces.push(typeface);
    this.byFamily.set(typeface.family, typeface);
  }
  importFonts(fontshareFonts) {
    this.typefaces.length = 0;
    this.byFamily.clear();
    const fonts = [];
    for (const fontshareFont of fontshareFonts) {
      const fontStyles = fontshareFont.font_styles.filter((fontStyle) => {
        const variant = fontStyle.name.toLowerCase();
        const allowedVariantMatch = allowedVariantsRegex.exec(variant);
        if (!allowedVariantMatch || variant.endsWith("wide")) {
          return false;
        }
        return true;
      });
      for (const fontStyle of fontStyles) {
        const { name: family } = fontshareFont;
        const variant = fontStyle.name.toLowerCase();
        let typeface = this.getTypefaceByFamily(family);
        if (!typeface) {
          typeface = { family, fonts: [], source: this.name };
          this.addTypeface(typeface);
        }
        const selector = _FontshareSource.createSelector(family, variant);
        const variantInfo = _FontshareSource.parseVariant(variant) || {
          weight: void 0,
          style: void 0
        };
        const { weight, style } = variantInfo;
        const { variantBold, variantBoldItalic, variantItalic } = getFontVariants(variant, fontStyles, _FontshareSource.parseVariant);
        const font = {
          typeface,
          variant,
          selector,
          selectorBold: variantBold ? _FontshareSource.createSelector(family, variantBold) : void 0,
          selectorBoldItalic: variantBoldItalic ? _FontshareSource.createSelector(family, variantBoldItalic) : void 0,
          selectorItalic: variantItalic ? _FontshareSource.createSelector(family, variantItalic) : void 0,
          weight,
          style,
          file: fontStyle.file
        };
        typeface.fonts.push(font);
        fonts.push(font);
      }
    }
    return fonts;
  }
};

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/render/fonts/GoogleFontSource.js
var googleFontSelectorPrefix = "GF;";
var GoogleFontSource = class _GoogleFontSource {
  constructor() {
    __publicField(this, "name", TypefaceSourceNames.Google);
    __publicField(this, "typefaces", []);
    __publicField(this, "byFamily", /* @__PURE__ */ new Map());
  }
  getTypefaceByFamily(family) {
    var _a;
    return (_a = this.byFamily.get(family)) != null ? _a : null;
  }
  static parseVariant(variant) {
    if (variant === "regular")
      return { style: "normal", weight: 400 };
    const match = /([0-9]*)([a-z]*)/.exec(variant);
    if (!match)
      return null;
    const weight = parseInt(match[1] || "400");
    const style = match[2] || "normal";
    return { weight, style };
  }
  parseSelector(selector) {
    if (!selector.startsWith(googleFontSelectorPrefix))
      return null;
    const tokens = selector.split("-");
    if (tokens.length !== 2)
      return null;
    const [family, variant] = tokens;
    if (!family || !variant)
      return null;
    return { family: family.replace(googleFontSelectorPrefix, ""), variant, source: this.name };
  }
  static createSelector(family, variant) {
    return `${googleFontSelectorPrefix}${family}-${variant}`;
  }
  addTypeface(family) {
    const typeface = { family, fonts: [], source: this.name };
    this.typefaces.push(typeface);
    this.byFamily.set(typeface.family, typeface);
    return typeface;
  }
  importFonts(webFonts) {
    this.typefaces.length = 0;
    this.byFamily.clear();
    const fonts = [];
    webFonts.forEach((webFont) => {
      webFont.variants.forEach((variant) => {
        var _a, _b;
        const family = webFont.family;
        let typeface = this.getTypefaceByFamily(family);
        if (!typeface) {
          typeface = this.addTypeface(family);
        }
        const variantInfo = (_a = _GoogleFontSource.parseVariant(variant)) != null ? _a : {};
        const { weight, style } = variantInfo;
        const selector = _GoogleFontSource.createSelector(family, variant);
        const { variantBold, variantItalic, variantBoldItalic } = getFontVariants(variant, webFont.variants, _GoogleFontSource.parseVariant);
        const font = {
          typeface,
          variant,
          selector,
          selectorBold: variantBold ? _GoogleFontSource.createSelector(family, variantBold) : void 0,
          selectorBoldItalic: variantBoldItalic ? _GoogleFontSource.createSelector(family, variantBoldItalic) : void 0,
          selectorItalic: variantItalic ? _GoogleFontSource.createSelector(family, variantItalic) : void 0,
          weight,
          style,
          category: ensureKnownCategory(webFont.category),
          file: (_b = webFont.files[variant]) == null ? void 0 : _b.replace("http://", "https://")
        };
        typeface.fonts.push(font);
        fonts.push(font);
      });
    });
    return fonts;
  }
};
function ensureKnownCategory(category) {
  if (knownGoogleFontCategories.includes(category))
    return category;
  return void 0;
}

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/render/fonts/loadFont.js
var import_fontfaceobserver = __toESM(require_fontfaceobserver_standalone(), 1);
var FONT_LOADING_TIMEOUT = 5e3;
var MAX_RETRIES = 3;
var FontLoadingError = class extends Error {
  constructor(message) {
    super(message);
    this.name = "FontLoadingError";
  }
};
var fontRequests = /* @__PURE__ */ new Map();
var fontReadyPromises = /* @__PURE__ */ new Map();
var loadFont = (data, doc) => loadFontWithRetries(data, doc);
function loadFontWithRetries(data, doc, attempt = 0) {
  return __async(this, null, function* () {
    const { family, url, stretch, unicodeRange } = data;
    const weight = data.weight || 500;
    const style = data.style || "normal";
    const requestId = `${family}-${style}-${weight}-${url}`;
    if (!fontRequests.has(requestId) || attempt > 0) {
      const fontFace = new FontFace(family, `url(${url})`, {
        weight: isString(weight) ? weight : weight == null ? void 0 : weight.toString(),
        style,
        stretch,
        unicodeRange
      });
      const readyPromise = fontFace.load().then(() => {
        doc.fonts.add(fontFace);
        return isFontReady(family, style, weight);
      }).catch((e2) => {
        if (e2.name !== "NetworkError") {
          throw e2;
        }
        if (attempt < MAX_RETRIES) {
          return loadFontWithRetries(data, doc, attempt + 1);
        }
        throw new FontLoadingError(`Font loading failed after ${attempt} retries due to network error: ${JSON.stringify({
          family,
          style,
          weight,
          url,
          stretch,
          unicodeRange
        })}`);
      });
      fontRequests.set(requestId, readyPromise);
    }
    yield fontRequests.get(requestId);
  });
}
function isFontReady(family, style, weight) {
  return __async(this, null, function* () {
    const readyPromiseId = `${family}-${style}-${weight}`;
    if (!fontReadyPromises.has(readyPromiseId)) {
      const observer = new import_fontfaceobserver.default(family, {
        style,
        weight
      });
      const readyPromise = observer.load(null, FONT_LOADING_TIMEOUT);
      fontReadyPromises.set(readyPromiseId, readyPromise);
    }
    try {
      yield fontReadyPromises.get(readyPromiseId);
    } catch (e2) {
      throw new FontLoadingError(`Failed to check if font is ready (${FONT_LOADING_TIMEOUT}ms timeout exceeded): ${JSON.stringify({
        family,
        style,
        weight
      })}`);
    }
  });
}

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/render/fonts/fonts.js
var safeFonts = {
  Arial: {
    Regular: { selector: "Arial", weight: void 0 },
    Black: { selector: "Arial-Black", weight: void 0 },
    Narrow: { selector: "Arial Narrow", weight: void 0 },
    "Rounded Bold": { selector: "Arial Rounded MT Bold", weight: void 0 }
  },
  Avenir: {
    Book: { selector: "Avenir", weight: void 0 },
    Light: { selector: "Avenir-Light", weight: void 0 },
    Medium: { selector: "Avenir-Medium", weight: void 0 },
    Heavy: { selector: "Avenir-Heavy", weight: void 0 },
    Black: { selector: "Avenir-Black", weight: void 0 }
  },
  "Avenir Next": {
    Regular: { selector: "Avenir Next", weight: void 0 },
    "Ultra Light": { selector: "AvenirNext-UltraLight", weight: void 0 },
    Medium: { selector: "AvenirNext-Medium", weight: void 0 },
    "Demi Bold": { selector: "AvenirNext-DemiBold", weight: void 0 },
    Heavy: { selector: "AvenirNext-Heavy", weight: void 0 }
  },
  "Avenir Next Condensed": {
    Regular: { selector: "Avenir Next Condensed", weight: void 0 },
    "Ultra Light": { selector: "AvenirNextCondensed-UltraLight", weight: void 0 },
    Medium: { selector: "AvenirNextCondensed-Medium", weight: void 0 },
    "Demi Bold": { selector: "AvenirNextCondensed-DemiBold", weight: void 0 },
    Heavy: { selector: "AvenirNextCondensed-Heavy", weight: void 0 }
  },
  Baskerville: {
    Regular: { selector: "Baskerville", weight: void 0 },
    "Semi Bold": { selector: "Baskerville-SemiBold", weight: void 0 }
  },
  "Bodoni 72": {
    Book: { selector: "Bodoni 72", weight: void 0 },
    Oldstyle: { selector: "Bodoni 72 Oldstyle", weight: void 0 },
    Smallcaps: { selector: "Bodoni 72 Smallcaps", weight: void 0 }
  },
  Courier: { Regular: { selector: "Courier", weight: void 0 } },
  "Courier New": { Regular: { selector: "Courier New", weight: void 0 } },
  Futura: {
    Medium: { selector: "Futura", weight: void 0 },
    Condensed: { selector: "Futura-CondensedMedium", weight: void 0 },
    "Condensed ExtraBold": { selector: "Futura-CondensedExtraBold", weight: void 0 }
  },
  Georgia: { Regular: { selector: "Georgia", weight: void 0 } },
  "Gill Sans": {
    Regular: { selector: "Gill Sans", weight: void 0 },
    Light: { selector: "GillSans-Light", weight: void 0 },
    SemiBold: { selector: "GillSans-SemiBold", weight: void 0 },
    UltraBold: { selector: "GillSans-UltraBold", weight: void 0 }
  },
  Helvetica: {
    Regular: { selector: "Helvetica", weight: void 0 },
    Light: { selector: "Helvetica-Light", weight: void 0 },
    Bold: { selector: "Helvetica-Bold", weight: void 0 },
    Oblique: { selector: "Helvetica-Oblique", weight: void 0 },
    "Light Oblique": { selector: "Helvetica-LightOblique", weight: void 0 },
    "Bold Oblique": { selector: "Helvetica-BoldOblique", weight: void 0 }
  },
  "Helvetica Neue": {
    Regular: { selector: "Helvetica Neue", weight: void 0 },
    UltraLight: { selector: "HelveticaNeue-UltraLight", weight: void 0 },
    Thin: { selector: "HelveticaNeue-Thin", weight: void 0 },
    Light: { selector: "HelveticaNeue-Light", weight: void 0 },
    Medium: { selector: "HelveticaNeue-Medium", weight: void 0 },
    Bold: { selector: "HelveticaNeue-Bold", weight: void 0 },
    Italic: { selector: "HelveticaNeue-Italic", weight: void 0 },
    "UltraLight Italic": { selector: "HelveticaNeue-UltraLightItalic", weight: void 0 },
    "Thin Italic": { selector: "HelveticaNeue-ThinItalic", weight: void 0 },
    "Light Italic": { selector: "HelveticaNeue-LightItalic", weight: void 0 },
    "Medium Italic": { selector: "HelveticaNeue-MediumItalic", weight: void 0 },
    "Bold Italic": { selector: "HelveticaNeue-BoldItalic", weight: void 0 },
    "Condensed Bold": { selector: "HelveticaNeue-CondensedBold", weight: void 0 },
    "Condensed Black": { selector: "HelveticaNeue-CondensedBlack", weight: void 0 }
  },
  "Hoefler Text": { Regular: { selector: "Hoefler Text", weight: void 0 } },
  Impact: { Regular: { selector: "Impact", weight: void 0 } },
  "Lucida Grande": { Regular: { selector: "Lucida Grande", weight: void 0 } },
  Menlo: { Regular: { selector: "Menlo", weight: void 0 } },
  Monaco: { Regular: { selector: "Monaco", weight: void 0 } },
  Optima: {
    Regular: { selector: "Optima", weight: void 0 },
    ExtraBlack: { selector: "Optima-ExtraBlack", weight: void 0 }
  },
  Palatino: { Regular: { selector: "Palatino", weight: void 0 } },
  "SF Pro Display": {
    Regular: { selector: "__SF-UI-Display-Regular__", weight: 400 },
    Ultralight: { selector: "__SF-UI-Display-Ultralight__", weight: 100 },
    Thin: { selector: "__SF-UI-Display-Thin__", weight: 200 },
    Light: { selector: "__SF-UI-Display-Light__", weight: 300 },
    Medium: { selector: "__SF-UI-Display-Medium__", weight: 500 },
    Semibold: { selector: "__SF-UI-Display-Semibold__", weight: 600 },
    Bold: { selector: "__SF-UI-Display-Bold__", weight: 700 },
    Heavy: { selector: "__SF-UI-Display-Heavy__", weight: 800 },
    Black: { selector: "__SF-UI-Display-Black__", weight: 900 },
    Italic: { selector: "__SF-UI-Display-Italic__", weight: 400 },
    "Ultralight Italic": { selector: "__SF-UI-Display-Ultralight-Italic__", weight: 100 },
    "Thin Italic": { selector: "__SF-UI-Display-Thin-Italic__", weight: 200 },
    "Light Italic": { selector: "__SF-UI-Display-Light-Italic__", weight: 300 },
    "Medium Italic": { selector: "__SF-UI-Display-Medium-Italic__", weight: 500 },
    "Semibold Italic": { selector: "__SF-UI-Display-Semibold-Italic__", weight: 600 },
    "Bold Italic": { selector: "__SF-UI-Display-Bold-Italic__", weight: 700 },
    "Heavy Italic": { selector: "__SF-UI-Display-Heavy-Italic__", weight: 800 },
    "Black Italic": { selector: "__SF-UI-Display-Black-Italic__", weight: 900 }
  },
  "SF Pro Display Condensed": {
    Regular: { selector: "__SF-UI-Display-Condensed-Regular__", weight: 400 },
    Ultralight: { selector: "__SF-UI-Display-Condensed-Ultralight__", weight: 100 },
    Thin: { selector: "__SF-UI-Display-Condensed-Thin__", weight: 200 },
    Light: { selector: "__SF-UI-Display-Condensed-Light__", weight: 300 },
    Medium: { selector: "__SF-UI-Display-Condensed-Medium__", weight: 500 },
    Semibold: { selector: "__SF-UI-Display-Condensed-Semibold__", weight: 600 },
    Bold: { selector: "__SF-UI-Display-Condensed-Bold__", weight: 700 },
    Heavy: { selector: "__SF-UI-Display-Condensed-Heavy__", weight: 800 },
    Black: { selector: "__SF-UI-Display-Condensed-Black__", weight: 900 }
  },
  "SF Pro Text": {
    Regular: { selector: "__SF-UI-Text-Regular__", weight: 400 },
    Light: { selector: "__SF-UI-Text-Light__", weight: 200 },
    Medium: { selector: "__SF-UI-Text-Medium__", weight: 500 },
    Semibold: { selector: "__SF-UI-Text-Semibold__", weight: 600 },
    Bold: { selector: "__SF-UI-Text-Bold__", weight: 700 },
    Heavy: { selector: "__SF-UI-Text-Heavy__", weight: 800 },
    Italic: { selector: "__SF-UI-Text-Italic__", weight: 400 },
    "Light Italic": { selector: "__SF-UI-Text-Light-Italic__", weight: 200 },
    "Medium Italic": { selector: "__SF-UI-Text-Medium-Italic__", weight: 500 },
    "Semibold Italic": { selector: "__SF-UI-Text-Semibold-Italic__", weight: 600 },
    "Bold Italic": { selector: "__SF-UI-Text-Bold-Italic__", weight: 700 },
    "Heavy Italic": { selector: "__SF-UI-Text-Heavy-Italic__", weight: 800 }
  },
  "SF Pro Text Condensed": {
    Regular: { selector: "__SF-UI-Text-Condensed-Regular__", weight: 400 },
    Light: { selector: "__SF-UI-Text-Condensed-Light__", weight: 200 },
    Medium: { selector: "__SF-UI-Text-Condensed-Medium__", weight: 500 },
    Semibold: { selector: "__SF-UI-Text-Condensed-Semibold__", weight: 600 },
    Bold: { selector: "__SF-UI-Text-Condensed-Bold__", weight: 700 },
    Heavy: { selector: "__SF-UI-Text-Condensed-Heavy__", weight: 800 }
  },
  Tahoma: { Regular: { selector: "Tahoma", weight: void 0 } },
  Times: { Regular: { selector: "Times", weight: void 0 } },
  "Times New Roman": { Regular: { selector: "Times New Roman", weight: void 0 } },
  Trebuchet: { Regular: { selector: "Trebuchet MS", weight: void 0 } },
  Verdana: { Regular: { selector: "Verdana", weight: void 0 } }
};
var typefaceAliases = {
  "__SF-Compact-Display-Regular__": "SFCompactDisplay-Regular|.SFCompactDisplay-Regular",
  "__SF-Compact-Display-Ultralight__": "SFCompactDisplay-Ultralight|.SFCompactDisplay-Ultralight",
  "__SF-Compact-Display-Thin__": "SFCompactDisplay-Thin|.SFCompactDisplay-Thin",
  "__SF-Compact-Display-Light__": "SFCompactDisplay-Light|.SFCompactDisplay-Light",
  "__SF-Compact-Display-Medium__": "SFCompactDisplay-Medium|.SFCompactDisplay-Medium",
  "__SF-Compact-Display-Semibold__": "SFCompactDisplay-Semibold|.SFCompactDisplay-Semibold",
  "__SF-Compact-Display-Heavy__": "SFCompactDisplay-Heavy|.SFCompactDisplay-Heavy",
  "__SF-Compact-Display-Black__": "SFCompactDisplay-Black|.SFCompactDisplay-Black",
  "__SF-Compact-Display-Bold__": "SFCompactDisplay-Bold|.SFCompactDisplay-Bold",
  "__SF-UI-Text-Regular__": ".SFNSText|SFProText-Regular|SFUIText-Regular|.SFUIText",
  "__SF-UI-Text-Light__": ".SFNSText-Light|SFProText-Light|SFUIText-Light|.SFUIText-Light",
  "__SF-UI-Text-Medium__": ".SFNSText-Medium|SFProText-Medium|SFUIText-Medium|.SFUIText-Medium",
  "__SF-UI-Text-Semibold__": ".SFNSText-Semibold|SFProText-Semibold|SFUIText-Semibold|.SFUIText-Semibold",
  "__SF-UI-Text-Bold__": ".SFNSText-Bold|SFProText-Bold|SFUIText-Bold|.SFUIText-Bold",
  "__SF-UI-Text-Heavy__": ".SFNSText-Heavy|SFProText-Heavy|.SFUIText-Heavy",
  "__SF-UI-Text-Italic__": ".SFNSText-Italic|SFProText-Italic|SFUIText-Italic|.SFUIText-Italic",
  "__SF-UI-Text-Light-Italic__": ".SFNSText-LightItalic|SFProText-LightItalic|SFUIText-LightItalic|.SFUIText-LightItalic",
  "__SF-UI-Text-Medium-Italic__": ".SFNSText-MediumItalic|SFProText-MediumItalic|SFUIText-MediumItalic|.SFUIText-MediumItalic",
  "__SF-UI-Text-Semibold-Italic__": ".SFNSText-SemiboldItalic|SFProText-SemiboldItalic|SFUIText-SemiboldItalic|.SFUIText-SemiboldItalic",
  "__SF-UI-Text-Bold-Italic__": ".SFNSText-BoldItalic|SFProText-BoldItalic|SFUIText-BoldItalic|.SFUIText-BoldItalic",
  "__SF-UI-Text-Heavy-Italic__": ".SFNSText-HeavyItalic|SFProText-HeavyItalic|.SFUIText-HeavyItalic",
  "__SF-Compact-Text-Regular__": "SFCompactText-Regular|.SFCompactText-Regular",
  "__SF-Compact-Text-Light__": "SFCompactText-Light|.SFCompactText-Light",
  "__SF-Compact-Text-Medium__": "SFCompactText-Medium|.SFCompactText-Medium",
  "__SF-Compact-Text-Semibold__": "SFCompactText-Semibold|.SFCompactText-Semibold",
  "__SF-Compact-Text-Bold__": "SFCompactText-Bold|.SFCompactText-Bold",
  "__SF-Compact-Text-Heavy__": "SFCompactText-Heavy|.SFCompactText-Heavy",
  "__SF-Compact-Text-Italic__": "SFCompactText-Italic|.SFCompactText-Italic",
  "__SF-Compact-Text-Light-Italic__": "SFCompactText-LightItalic|.SFCompactText-LightItalic",
  "__SF-Compact-Text-Medium-Italic__": "SFCompactText-MediumItalic|.SFCompactText-MediumItalic",
  "__SF-Compact-Text-Semibold-Italic__": "SFCompactText-SemiboldItalic|.SFCompactText-SemiboldItalic",
  "__SF-Compact-Text-Bold-Italic__": "SFCompactText-BoldItalic|.SFCompactText-BoldItalic",
  "__SF-Compact-Text-Heavy-Italic__": "SFCompactText-HeavyItalic|.SFCompactText-HeavyItalic",
  "__SF-UI-Display-Condensed-Regular__": ".SFNSDisplayCondensed-Regular|SFUIDisplayCondensed-Regular|.SFUIDisplayCondensed-Regular",
  "__SF-UI-Display-Condensed-Ultralight__": ".SFNSDisplayCondensed-Ultralight|SFUIDisplayCondensed-Ultralight|.SFUIDisplayCondensed-Ultralight",
  "__SF-UI-Display-Condensed-Thin__": ".SFNSDisplayCondensed-Thin|SFUIDisplayCondensed-Thin|.SFUIDisplayCondensed-Thin",
  "__SF-UI-Display-Condensed-Light__": ".SFNSDisplayCondensed-Light|SFUIDisplayCondensed-Light|.SFUIDisplayCondensed-Light",
  "__SF-UI-Display-Condensed-Medium__": ".SFNSDisplayCondensed-Medium|SFUIDisplayCondensed-Medium|.SFUIDisplayCondensed-Medium",
  "__SF-UI-Display-Condensed-Semibold__": ".SFNSDisplayCondensed-Semibold|SFUIDisplayCondensed-Semibold|.SFUIDisplayCondensed-Semibold",
  "__SF-UI-Display-Condensed-Bold__": ".SFNSDisplayCondensed-Bold|SFUIDisplayCondensed-Bold|.SFUIDisplayCondensed-Bold",
  "__SF-UI-Display-Condensed-Heavy__": ".SFNSDisplayCondensed-Heavy|SFUIDisplayCondensed-Heavy|.SFUIDisplayCondensed-Heavy",
  "__SF-UI-Display-Condensed-Black__": ".SFNSDisplayCondensed-Black|.SFUIDisplayCondensed-Black",
  "__SF-UI-Display-Regular__": ".SFNSDisplay|SFProDisplay-Regular|SFUIDisplay-Regular|.SFUIDisplay",
  "__SF-UI-Display-Ultralight__": ".SFNSDisplay-Ultralight|SFProDisplay-Ultralight|SFUIDisplay-Ultralight|.SFUIDisplay-Ultralight",
  "__SF-UI-Display-Thin__": ".SFNSDisplay-Thin|SFProDisplay-Thin|SFUIDisplay-Thin|.SFUIDisplay-Thin",
  "__SF-UI-Display-Light__": ".SFNSDisplay-Light|SFProDisplay-Light|SFUIDisplay-Light|.SFUIDisplay-Light",
  "__SF-UI-Display-Medium__": ".SFNSDisplay-Medium|SFProDisplay-Medium|SFUIDisplay-Medium|.SFUIDisplay-Medium",
  "__SF-UI-Display-Semibold__": ".SFNSDisplay-Semibold|SFProDisplay-Semibold|SFUIDisplay-Semibold|.SFUIDisplay-Semibold",
  "__SF-UI-Display-Bold__": ".SFNSDisplay-Bold|SFProDisplay-Bold|SFUIDisplay-Bold|.SFUIDisplay-Bold",
  "__SF-UI-Display-Heavy__": ".SFNSDisplay-Heavy|SFProDisplay-Heavy|SFUIDisplay-Heavy|.SFUIDisplay-Heavy",
  "__SF-UI-Display-Black__": ".SFNSDisplay-Black|SFProDisplay-Black|.SFUIDisplay-Black",
  "__SF-UI-Display-Italic__": ".SFNSDisplay-Italic|SFProDisplay-Italic|SFUIDisplay-Italic",
  "__SF-UI-Display-Ultralight-Italic__": ".SFNSDisplay-UltralightItalic|SFProDisplay-UltralightItalic|SFUIDisplay-UltralightItalic|.SFUIDisplay-UltralightItalic",
  "__SF-UI-Display-Thin-Italic__": ".SFNSDisplay-ThinItalic|SFProDisplay-ThinItalic|SFUIDisplay-ThinItalic|.SFUIDisplay-ThinItalic",
  "__SF-UI-Display-Light-Italic__": ".SFNSDisplay-LightItalic|SFProDisplay-LightItalic|SFUIDisplay-LightItalic|.SFUIDisplay-LightItalic",
  "__SF-UI-Display-Medium-Italic__": ".SFNSDisplay-MediumItalic|SFProDisplay-MediumItalic|SFUIDisplay-MediumItalic|.SFUIDisplay-MediumItalic",
  "__SF-UI-Display-Semibold-Italic__": ".SFNSDisplay-SemiboldItalic|SFProDisplay-SemiboldItalic|SFUIDisplay-SemiboldItalic|.SFUIDisplay-SemiboldItalic",
  "__SF-UI-Display-Bold-Italic__": ".SFNSDisplay-BoldItalic|SFProDisplay-BoldItalic|SFUIDisplay-BoldItalic|.SFUIDisplay-BoldItalic",
  "__SF-UI-Display-Heavy-Italic__": ".SFNSDisplay-HeavyItalic|SFProDisplay-HeavyItalic|SFUIDisplay-HeavyItalic|.SFUIDisplay-HeavyItalic",
  "__SF-UI-Display-Black-Italic__": ".SFNSDisplay-BlackItalic|SFProDisplay-BlackItalic|.SFUIDisplay-BlackItalic",
  "__SF-UI-Text-Condensed-Regular__": ".SFNSTextCondensed-Regular|SFUITextCondensed-Regular|.SFUITextCondensed-Regular",
  "__SF-UI-Text-Condensed-Light__": ".SFNSTextCondensed-Light|SFUITextCondensed-Light|.SFUITextCondensed-Light",
  "__SF-UI-Text-Condensed-Medium__": ".SFNSTextCondensed-Medium|SFUITextCondensed-Medium|.SFUITextCondensed-Medium",
  "__SF-UI-Text-Condensed-Semibold__": ".SFNSTextCondensed-Semibold|SFUITextCondensed-Semibold|.SFUITextCondensed-Semibold",
  "__SF-UI-Text-Condensed-Bold__": ".SFNSTextCondensed-Bold|SFUITextCondensed-Bold|.SFUITextCondensed-Bold",
  "__SF-UI-Text-Condensed-Heavy__": ".SFNSTextCondensed-Heavy|.SFUITextCondensed-Heavy",
  "__SF-Compact-Rounded-Regular__": "SFCompactRounded-Regular|.SFCompactRounded-Regular",
  "__SF-Compact-Rounded-Ultralight__": "SFCompactRounded-Ultralight|.SFCompactRounded-Ultralight",
  "__SF-Compact-Rounded-Thin__": "SFCompactRounded-Thin|.SFCompactRounded-Thin",
  "__SF-Compact-Rounded-Light__": "SFCompactRounded-Light|.SFCompactRounded-Light",
  "__SF-Compact-Rounded-Medium__": "SFCompactRounded-Medium|.SFCompactRounded-Medium",
  "__SF-Compact-Rounded-Semibold__": "SFCompactRounded-Semibold|.SFCompactRounded-Semibold",
  "__SF-Compact-Rounded-Bold__": "SFCompactRounded-Bold|.SFCompactRounded-Bold",
  "__SF-Compact-Rounded-Heavy__": "SFCompactRounded-Heavy|.SFCompactRounded-Heavy",
  "__SF-Compact-Rounded-Black__": "SFCompactRounded-Black|.SFCompactRounded-Black"
};
var typefaces = safeFonts;

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/render/fonts/LocalFontSource.js
var systemTypefaceName = "System Default";
var LocalFontSource = class {
  constructor() {
    __publicField(this, "name", TypefaceSourceNames.Local);
    __publicField(this, "typefaces", []);
    __publicField(this, "byFamily", /* @__PURE__ */ new Map());
    __publicField(this, "typefaceAliasBySelector", /* @__PURE__ */ new Map());
    __publicField(this, "typefaceAliases", /* @__PURE__ */ new Map());
    __publicField(this, "interTypefaceSelectors", /* @__PURE__ */ new Set());
  }
  getTypefaceByFamily(family) {
    var _a;
    return (_a = this.byFamily.get(family)) != null ? _a : null;
  }
  // TODO: these are duplicated across implementations of FontSource
  // When adding a third source, we should abstract them
  createTypeface(family) {
    const typeface = { family, fonts: [], source: this.name };
    this.addTypeface(typeface);
    return typeface;
  }
  addTypeface(typeface) {
    this.typefaces.push(typeface);
    this.byFamily.set(typeface.family, typeface);
  }
  // end of duplication
  importFonts() {
    const fonts = [];
    for (const family of Object.keys(typefaces)) {
      const members = typefaces[family];
      if (!members)
        continue;
      const typeface = this.createTypeface(family);
      for (const variant of Object.keys(members)) {
        const member = members[variant];
        if (!member)
          continue;
        const { selector, weight } = member;
        const font = {
          variant,
          selector,
          weight,
          typeface,
          status: "loaded"
        };
        typeface.fonts.push(font);
      }
      fonts.push(...typeface.fonts);
    }
    for (const [key3, value] of Object.entries(typefaceAliases)) {
      this.addTypefaceAlias(key3, value);
    }
    const { typeface: systemTypeface, aliases } = this.getSystemTypeface();
    this.addTypeface(systemTypeface);
    for (const [key3, value] of aliases) {
      this.addTypefaceAlias(key3, value);
    }
    fonts.push(...systemTypeface.fonts);
    const interTypeface = this.importInterTypeface();
    fonts.push(...interTypeface.fonts);
    return fonts;
  }
  importInterTypeface() {
    const inter = [
      {
        variant: "Regular",
        selector: "Inter",
        weight: 400,
        selectorBold: "Inter-Bold",
        selectorBoldItalic: "Inter-BoldItalic",
        selectorItalic: "Inter-Italic"
      },
      {
        variant: "Thin",
        selector: "Inter-Thin",
        weight: 100,
        selectorBold: "Inter",
        selectorBoldItalic: "Inter-Italic",
        selectorItalic: "Inter-ThinItalic"
      },
      {
        variant: "Extra Light",
        selector: "Inter-ExtraLight",
        weight: 200,
        selectorBold: "Inter",
        selectorBoldItalic: "Inter-Italic",
        selectorItalic: "Inter-ExtraLightItalic"
      },
      {
        variant: "Light",
        selector: "Inter-Light",
        weight: 300,
        selectorBold: "Inter",
        selectorBoldItalic: "Inter-Italic",
        selectorItalic: "Inter-LightItalic"
      },
      {
        variant: "Medium",
        selector: "Inter-Medium",
        weight: 500,
        selectorBold: "Inter-Bold",
        selectorBoldItalic: "Inter-BoldItalic",
        selectorItalic: "Inter-MediumItalic"
      },
      {
        variant: "Semibold",
        selector: "Inter-SemiBold",
        weight: 600,
        selectorBold: "Inter-Black",
        selectorBoldItalic: "Inter-BlackItalic",
        selectorItalic: "Inter-SemiBoldItalic"
      },
      {
        variant: "Bold",
        selector: "Inter-Bold",
        weight: 700,
        selectorBold: "Inter-Black",
        selectorBoldItalic: "Inter-BlackItalic",
        selectorItalic: "Inter-BoldItalic"
      },
      {
        variant: "Extra Bold",
        selector: "Inter-ExtraBold",
        weight: 800,
        selectorBold: "Inter-Black",
        selectorBoldItalic: "Inter-BlackItalic",
        selectorItalic: "Inter-ExtraBoldItalic"
      },
      {
        variant: "Black",
        selector: "Inter-Black",
        weight: 900,
        selectorBold: void 0,
        selectorBoldItalic: "Inter-BlackItalic",
        selectorItalic: void 0
      },
      {
        variant: "Thin Italic",
        selector: "Inter-ThinItalic",
        weight: 100,
        selectorBold: "Inter-Italic",
        selectorBoldItalic: "Inter-Italic",
        selectorItalic: "Inter-ThinItalic"
      },
      {
        variant: "Extra Light Italic",
        selector: "Inter-ExtraLightItalic",
        weight: 200,
        selectorBold: "Inter-Italic",
        selectorBoldItalic: "Inter-Italic",
        selectorItalic: "Inter-ExtraLightItalic"
      },
      {
        variant: "Light Italic",
        selector: "Inter-LightItalic",
        weight: 300,
        selectorBold: "Inter-Italic",
        selectorBoldItalic: "Inter-Italic",
        selectorItalic: "Inter-LightItalic"
      },
      {
        variant: "Italic",
        selector: "Inter-Italic",
        weight: 400,
        selectorBold: "Inter-BoldItalic",
        selectorBoldItalic: "Inter-BoldItalic",
        selectorItalic: "Inter-Italic"
      },
      {
        variant: "Medium Italic",
        selector: "Inter-MediumItalic",
        weight: 500,
        selectorBold: "Inter-BoldItalic",
        selectorBoldItalic: "Inter-BoldItalic",
        selectorItalic: "Inter-MediumItalic"
      },
      {
        variant: "Semibold Italic",
        selector: "Inter-SemiBoldItalic",
        weight: 600,
        selectorBold: "Inter-BoldItalic",
        selectorBoldItalic: "Inter-BoldItalic",
        selectorItalic: "Inter-SemiBoldItalic"
      },
      {
        variant: "Bold Italic",
        selector: "Inter-BoldItalic",
        weight: 700,
        selectorBold: "Inter-BlackItalic",
        selectorBoldItalic: "Inter-BlackItalic",
        selectorItalic: "Inter-BoldItalic"
      },
      {
        variant: "Extra Bold Italic",
        selector: "Inter-ExtraBoldItalic",
        weight: 800,
        selectorBold: "Inter-BlackItalic",
        selectorBoldItalic: "Inter-BlackItalic",
        selectorItalic: "Inter-ExtraBoldItalic"
      },
      {
        variant: "Black Italic",
        selector: "Inter-BlackItalic",
        weight: 900,
        selectorBold: void 0,
        selectorBoldItalic: void 0,
        selectorItalic: "Inter-BlackItalic"
      }
    ];
    const typeface = this.createTypeface("Inter");
    for (const entry of inter) {
      const { variant, selector, weight, selectorBold, selectorBoldItalic, selectorItalic } = entry;
      const font = {
        variant,
        selector,
        selectorBold,
        selectorBoldItalic,
        selectorItalic,
        weight,
        typeface,
        style: /italic/i.test(selector) ? "italic" : "normal"
      };
      typeface.fonts.push(font);
    }
    typeface.fonts.forEach((t2) => this.interTypefaceSelectors.add(t2.selector));
    return typeface;
  }
  addTypefaceAlias(key3, value) {
    this.typefaceAliases.set(key3, value);
    this.typefaceAliasBySelector.set(value, key3);
  }
  getSystemTypeface() {
    const fontFamilies = this.workaroundChrome81and82(
      // System fonts - Taken from https://furbo.org/stuff/systemfonts-new.html - "All Platforms" section
      "system-ui|-apple-system|BlinkMacSystemFont|Segoe UI|Roboto|Oxygen|Ubuntu|Cantarell|Fira Sans|Droid Sans|Helvetica Neue|sans-serif"
    );
    const typeface = { family: systemTypefaceName, fonts: [], source: this.name };
    const aliases = /* @__PURE__ */ new Map();
    const weights = [400, 100, 200, 300, 500, 600, 700, 800, 900];
    const styles = ["normal", "italic"];
    for (const style of styles) {
      for (const weight of weights) {
        const variant = createVariantName(weight, style);
        const alias = `__SystemDefault-${weight}-${style}__`;
        const font = {
          variant,
          selector: alias,
          style,
          weight,
          typeface,
          status: "loaded"
        };
        typeface.fonts.push(font);
        aliases.set(alias, fontFamilies);
      }
    }
    return { typeface, aliases };
  }
  getTypefaceAliasBySelector(selector) {
    return this.typefaceAliasBySelector.get(selector) || null;
  }
  getTypefaceSelectorByAlias(alias) {
    return this.typefaceAliases.get(alias) || null;
  }
  /** Typeface aliases are in the format of `__Alias-Name__` */
  isTypefaceAlias(value) {
    if (value && value.match(/^__.*__$/))
      return true;
    return false;
  }
  /**
   * Use 'Inter' web font as System Default fonts on Mac with Chrome v81 v82
   * https://github.com/framer/company/issues/17277
   * https://bugs.chromium.org/p/chromium/issues/detail?id=1057654
   */
  workaroundChrome81and82(s2) {
    if (safeNavigator) {
      const userAgent = safeNavigator.userAgent;
      if (!userAgent.includes("Mac OS X 10_15"))
        return s2;
      if (!userAgent.includes("Chrome/81") && !userAgent.includes("Chrome/82"))
        return s2;
    }
    return `Inter|${s2}`;
  }
};
var fontWeightNames = {
  "100": "Thin",
  "200": "Extra Light",
  "300": "Light",
  "400": "Normal",
  "500": "Medium",
  "600": "Semi Bold",
  "700": "Bold",
  "800": "Extra Bold",
  "900": "Black"
};
function createVariantName(weight, style) {
  const friendlyStyle = style === "normal" ? "Regular" : "Italic";
  if (weight === 400) {
    return friendlyStyle;
  }
  if (style !== "normal") {
    return `${fontWeightNames[weight]} ${friendlyStyle}`;
  }
  return `${fontWeightNames[weight]}`;
}

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/render/fonts/fontStore.js
var LoadFontResult;
(function(LoadFontResult2) {
  LoadFontResult2[LoadFontResult2["AlreadyLoaded"] = 0] = "AlreadyLoaded";
  LoadFontResult2[LoadFontResult2["Loaded"] = 1] = "Loaded";
})(LoadFontResult || (LoadFontResult = {}));
var FontStore = class {
  constructor() {
    /**
     * Enabling the `FontStore` will make Text components automatically load
     * their fonts on render. Otherwise font loading is the responsibility of
     * the environment.
     */
    __publicField(this, "enabled", false);
    __publicField(this, "bySelector", /* @__PURE__ */ new Map());
    __publicField(this, "getGoogleFontsListPromise");
    __publicField(this, "getFontshareFontsListPromise");
    __publicField(this, "loadedSelectors", /* @__PURE__ */ new Set());
    __publicField(this, "googleFamilyNames", /* @__PURE__ */ new Set());
    __publicField(this, "defaultFont");
    __publicField(this, "local");
    __publicField(this, "google");
    __publicField(this, "fontshare");
    __publicField(this, "custom");
    this.local = new LocalFontSource();
    this.google = new GoogleFontSource();
    this.fontshare = new FontshareSource();
    this.custom = new CustomFontSource();
    this.bySelector = /* @__PURE__ */ new Map();
    this.importLocalFonts();
    const defaultFont = this.getFontBySelector("Inter");
    assert(defaultFont, "Can\u2019t find Inter font");
    this.defaultFont = defaultFont;
  }
  addFont(font) {
    this.bySelector.set(font.selector, font);
  }
  getAvailableFonts() {
    return Array.from(this.bySelector.values());
  }
  importLocalFonts() {
    this.local.importFonts().forEach((font) => {
      this.addFont(font);
      if (!this.local.interTypefaceSelectors.has(font.selector)) {
        this.loadFont(font);
      }
    });
  }
  importGoogleFonts() {
    return __async(this, null, function* () {
      if (!this.getGoogleFontsListPromise) {
        this.getGoogleFontsListPromise = runtime.fetchGoogleFontsList();
        const googleFonts = yield this.getGoogleFontsListPromise;
        this.google.importFonts(googleFonts).forEach((font) => {
          this.googleFamilyNames.add(font.typeface.family.toLowerCase());
          this.addFont(font);
        });
      }
      return this.getGoogleFontsListPromise;
    });
  }
  importFontshareFonts() {
    return __async(this, null, function* () {
      if (!this.getFontshareFontsListPromise) {
        this.getFontshareFontsListPromise = runtime.fetchFontshareFontsList();
        const fontshareFonts = yield this.getFontshareFontsListPromise;
        this.fontshare.importFonts(fontshareFonts).forEach((font) => {
          if (!this.googleFamilyNames.has(font.typeface.family.toLowerCase())) {
            this.addFont(font);
          }
        });
      }
      return this.getFontshareFontsListPromise;
    });
  }
  importCustomFonts(assets) {
    this.bySelector.forEach((_, key3) => {
      if (key3.startsWith(customFontSelectorPrefix)) {
        this.bySelector.delete(key3);
      }
    });
    this.custom.importFonts(assets).forEach((font) => this.addFont(font));
  }
  getTypeface(info) {
    const typeface = this[info.source].getTypefaceByFamily(info.family);
    return typeface;
  }
  getFontBySelector(selector, createFont = true) {
    if (selector.startsWith(customFontSelectorPrefix)) {
      return this.custom.getFontBySelector(selector, createFont);
    }
    return this.bySelector.get(selector);
  }
  // Function called by draft to get font properties for a selector, before the (google) font is available in the store
  // It replaces a previous function that created Font instances and added them to the store
  // on the fly while rendering drafts, which caused issues (overriding real google font info with fake instances with partial data).
  // Ideally this should not happen, but that's a fix for another day
  getDraftPropertiesBySelector(selector) {
    const font = this.getFontBySelector(selector);
    if (font) {
      return {
        style: font.style,
        weight: font.weight,
        variant: font.variant,
        family: font.typeface.family,
        source: font.typeface.source,
        category: font.category
      };
    }
    const googleLocator = this.google.parseSelector(selector);
    if (googleLocator) {
      const fontVariant = GoogleFontSource.parseVariant(googleLocator.variant);
      if (fontVariant) {
        return {
          style: fontVariant.style,
          weight: fontVariant.weight,
          variant: googleLocator.variant,
          family: googleLocator.family,
          source: TypefaceSourceNames.Google,
          category: void 0
        };
      }
    }
    const fontshareLocator = this.fontshare.parseSelector(selector);
    if (fontshareLocator) {
      const fontVariant = FontshareSource.parseVariant(fontshareLocator.variant);
      if (fontVariant) {
        return {
          style: fontVariant.style,
          weight: fontVariant.weight,
          variant: fontshareLocator.variant,
          family: fontshareLocator.family,
          source: TypefaceSourceNames.Fontshare,
          category: void 0
        };
      }
    }
    return null;
  }
  isSelectorLoaded(selector) {
    return this.loadedSelectors.has(selector);
  }
  /**
   * Load a single font
   * */
  loadFont(font) {
    return __async(this, null, function* () {
      if (this.isSelectorLoaded(font.selector)) {
        return LoadFontResult.AlreadyLoaded;
      }
      if (font.typeface.source === TypefaceSourceNames.Local) {
        if (this.local.interTypefaceSelectors.has(font.selector) && process5.env.NODE_ENV !== "test") {
          yield isFontReady(font.typeface.family, font.style, font.weight);
        }
        this.loadedSelectors.add(font.selector);
        return LoadFontResult.Loaded;
      }
      if (!font.file) {
        return Promise.reject(`Unable to load font: ${font.selector}`);
      }
      yield loadFont({
        family: font.typeface.family,
        url: font.file,
        weight: font.weight,
        style: font.style
      }, document);
      this.loadedSelectors.add(font.selector);
      return LoadFontResult.Loaded;
    });
  }
  loadWebFontsFromSelectors(selectors) {
    return __async(this, null, function* () {
      if (!this.enabled)
        return [];
      const loadFontshareFonts = selectors.some((selector) => selector.startsWith(fontsharePrefix));
      if (selectors.some((s2) => s2.startsWith(googleFontSelectorPrefix)) || loadFontshareFonts) {
        try {
          yield this.importGoogleFonts();
        } catch (error) {
          warnOnce("Failed to load Google fonts:", error);
        }
        try {
          yield this.importFontshareFonts();
        } catch (error) {
          warnOnce("Failed to load Fontshare fonts:", error);
        }
      }
      const fonts = selectors.map((s2) => this.bySelector.get(s2)).filter((f) => !!f);
      return Promise.allSettled(fonts.map((f) => this.loadFont(f)));
    });
  }
  loadMissingFonts(fontSelectors, fontsLoadedCallback) {
    return __async(this, null, function* () {
      const selectors = fontSelectors.filter((selector) => {
        return !fontStore.isSelectorLoaded(selector);
      });
      if (selectors.length === 0)
        return;
      yield fontStore.loadWebFontsFromSelectors(selectors);
      const isEachFontLoaded = selectors.every((selector) => {
        return fontStore.isSelectorLoaded(selector);
      });
      if (isEachFontLoaded && fontsLoadedCallback)
        fontsLoadedCallback();
    });
  }
};
var fontStore = /* @__PURE__ */ new FontStore();
Promise.allSettled = Promise.allSettled || ((promises) => Promise.all(promises.map((p2) => p2.then((v) => ({ status: "fulfilled", value: v })).catch((e2) => ({ status: "rejected", reason: e2 })))));

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/render/presentation/Image.js
import { motion as motion7 } from "framer-motion";
import React43 from "react";
var Image2 = /* @__PURE__ */ React43.forwardRef(function Image3(props, ref) {
  var _b;
  const _a = props, { background, children, alt } = _a, rest = __objRest(_a, ["background", "children", "alt"]);
  const style = __spreadValues({}, rest.style);
  if (background) {
    delete style.background;
  }
  const MotionComponent = motion7[(_b = props.as) != null ? _b : "div"];
  return React43.createElement(
    MotionComponent,
    __spreadProps(__spreadValues({}, rest), { style, ref }),
    background && React43.createElement(BackgroundImageComponent, { image: background, alt }),
    children
  );
});

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/render/presentation/RichText.js
import { isMotionComponent, motion as motion9, unwrapMotionComponent } from "framer-motion";
import React47, { Children, cloneElement, forwardRef as forwardRef3, isValidElement, useContext as useContext9, useRef as useRef15 } from "react";

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/render/style/shadow.js
import { distance, interpolate as interpolate2, mix } from "framer-motion";
import React45 from "react";

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/render/presentation/CustomProperties.js
import React44, { PureComponent } from "react";
var CustomPropertiesContext = /* @__PURE__ */ React44.createContext(() => null);

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/render/types/Shadow.js
var boxShadowKeys = ["x", "y", "color", "inset", "blur", "spread"];
var BoxShadow = {
  is: (shadow) => {
    return shadow && boxShadowKeys.every((key3) => key3 in shadow);
  },
  toCSS: (shadow) => {
    const inset = shadow.inset ? "inset " : "";
    return `${inset}${shadow.x}px ${shadow.y}px ${shadow.blur}px ${shadow.spread}px ${shadow.color}`;
  }
};

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/render/style/shadow.js
function shadowsAsFilter(shadows) {
  const filters = [];
  if (shadows && shadows.length) {
    const dropShadows = shadows.map((shadowItem) => {
      return `drop-shadow(${shadowItem.x}px ${shadowItem.y}px ${shadowItem.blur}px ${shadowItem.color})`;
    });
    filters.push(...dropShadows);
  }
  return filters;
}
function collectTextShadowsForProps(props, style) {
  if (!props.shadows || props.shadows.length === 0)
    return;
  const textShadow = props.shadows.map((shadow) => {
    return `${shadow.x}px ${shadow.y}px ${shadow.blur}px ${shadow.color}`;
  }).join(", ");
  if (!textShadow)
    return;
  style.textShadow = textShadow;
}
function shadowForShape(boxShadows, rect, shapeId, fillAlpha, strokeAlpha, strokeWidth, strokeClipId, svgStrokeAttributes) {
  const definition = [];
  let outsetElement = null;
  let insetElement = null;
  const needsStrokeClip = false;
  const shadows = [];
  const insetShadows = [];
  const boxShadowsCount = boxShadows.length;
  const svgShadowClass = "svg-shadow";
  const svgShadowProps = RenderTarget.current() === RenderTarget.canvas ? { className: svgShadowClass } : {};
  for (const shadow of boxShadows) {
    shadow.inset ? insetShadows.push(shadow) : shadows.push(shadow);
  }
  if (shadows.length > 0) {
    shadows.reverse();
    const outsideShadowId = shapeId.add("_shadow_out");
    const normalizedFrame = Rect.atOrigin(rect);
    const shadowRects = [normalizedFrame];
    for (const shadow of shadows) {
      const shadowFrame = localShadowFrame(shadow, normalizedFrame, true);
      if (shadowFrame === null) {
        continue;
      }
      shadowRects.push(shadowFrame);
    }
    let maxBlur = 0;
    const filterElements = [];
    const mergeElements = [];
    for (let i2 = 0, il = shadows.length; i2 < il; i2++) {
      const shadow = shadows[i2];
      if (!shadow)
        continue;
      const shadowElements = outerShadowElements(shapeId, shadow, i2);
      maxBlur = Math.max(maxBlur, shadow.blur);
      filterElements.push(shadowElements.filterElements);
      mergeElements.push(shadowElements.mergeElement);
    }
    let expandStrokeWidth = strokeWidth;
    if (!isFiniteNumber(expandStrokeWidth))
      expandStrokeWidth = 0;
    let miter = svgStrokeAttributes.strokeMiterlimit;
    if (!isFiniteNumber(miter))
      miter = 4;
    let shadowRect = Rect.merge(...shadowRects);
    shadowRect = Rect.inflate(shadowRect, (expandStrokeWidth * miter / 2 + maxBlur) * 1.1);
    const width = rect.width + (strokeWidth ? strokeWidth / 2 : 0.1);
    const height = rect.height + (strokeWidth ? strokeWidth / 2 : 0.1);
    const filterX = shadowRect.x / width * 100;
    const filterY = shadowRect.y / height * 100;
    const filterWidth = shadowRect.width / width * 100;
    const filterHeight = shadowRect.height / height * 100;
    definition.push(React45.createElement(
      "filter",
      __spreadValues({ key: outsideShadowId.id, id: outsideShadowId.id, x: `${filterX.toFixed(1)}%`, y: `${filterY.toFixed(1)}%`, width: `${filterWidth.toFixed(1)}%`, height: `${filterHeight.toFixed(1)}%`, filterUnits: "objectBoundingBox" }, svgShadowProps),
      filterElements,
      shadows.length > 1 ? React45.createElement("feMerge", null, mergeElements) : null
    ));
    outsetElement = React45.createElement(
      "g",
      __spreadValues({ filter: outsideShadowId.urlLink }, svgShadowProps),
      React45.createElement("use", __spreadProps(__spreadValues({}, svgStrokeAttributes), { fill: "black", fillOpacity: fillAlpha <= 0 ? 0 : 1, stroke: "black", strokeOpacity: strokeAlpha <= 0 ? 0 : 1, strokeWidth: strokeAlpha > 0 ? strokeWidth : 0, xlinkHref: shapeId.link, clipPath: strokeClipId.urlLink }))
    );
  }
  if (insetShadows.length) {
    insetShadows.reverse();
    const insideShadowId = shapeId.add("_shadow_inside");
    const normalizedFrame = Rect.atOrigin(rect);
    const shadowFrames = [normalizedFrame];
    for (const shadow of insetShadows) {
      const shadowFrame = localShadowFrame(shadow, normalizedFrame, true);
      if (shadowFrame === null) {
        continue;
      }
      shadowFrames.push(shadowFrame);
    }
    const shadowRect = Rect.merge(...shadowFrames);
    const width = rect.width + (strokeWidth ? strokeWidth / 2 : 0.1);
    const height = rect.height + (strokeWidth ? strokeWidth / 2 : 0.1);
    const filterX = shadowRect.x / width * 100;
    const filterY = shadowRect.y / height * 100;
    const filterWidth = shadowRect.width / width * 100;
    const filterHeight = shadowRect.height / height * 100;
    const filterElements = [];
    const mergeElements = [];
    for (let i2 = 0, il = insetShadows.length; i2 < il; i2++) {
      const shadow = insetShadows[i2];
      if (!shadow)
        continue;
      const shadowElements = innerShadowElements(shapeId, shadow, i2);
      filterElements.push(shadowElements.filterElements);
      mergeElements.push(shadowElements.mergeElement);
    }
    definition.push(React45.createElement(
      "filter",
      __spreadValues({ key: insideShadowId.id, id: insideShadowId.id, x: `${filterX.toFixed(1)}%`, y: `${filterY.toFixed(1)}%`, width: `${filterWidth.toFixed(1)}%`, height: `${filterHeight.toFixed(1)}%`, filterUnits: "objectBoundingBox" }, svgShadowProps),
      filterElements,
      insetShadows.length > 1 ? React45.createElement("feMerge", null, mergeElements) : null
    ));
    let clipPath;
    if (needsStrokeClip) {
      clipPath = strokeClipId.urlLink;
    }
    insetElement = React45.createElement("use", __spreadValues({ fill: "black", fillOpacity: "1", filter: insideShadowId.urlLink, xlinkHref: shapeId.link, clipPath }, svgShadowProps));
  }
  return { definition, outsetElement, insetElement, needsStrokeClip };
}
function outerShadowElements(shapeID, shadow, index) {
  const shadowKey = shapeID.add("_outer_shadow" + index);
  const offsetResultId = shadowKey.add("offset").id;
  const blurResultId = shadowKey.add("blur").id;
  const matrixResultId = shadowKey.add("matrix").id;
  const filterElements = React45.createElement(OuterShadowFilterElements, { key: shadowKey.id + "-filters", shadow, blurId: blurResultId, offsetId: offsetResultId, matrixId: matrixResultId });
  const mergeElement = React45.createElement("feMergeNode", { key: shadowKey.id + "-merge", in: matrixResultId });
  return { filterElements, mergeElement };
}
var OuterShadowFilterElements = (props) => {
  const lookup = React45.useContext(CustomPropertiesContext);
  const { shadow, blurId, offsetId, matrixId } = props;
  let color2 = shadow.color;
  const result = lookup(color2);
  if (result) {
    color2 = result;
  }
  const rgb = ConvertColor.toRgb(color2);
  const r2 = roundedNumberString(rgb.r / 255, 3);
  const g = roundedNumberString(rgb.g / 255, 3);
  const b = roundedNumberString(rgb.b / 255, 3);
  const matrixValues = `0 0 0 0 ${r2}   0 0 0 0 ${g}   0 0 0 0 ${b}  0 0 0 ${rgb.a} 0`;
  return React45.createElement(
    React45.Fragment,
    null,
    React45.createElement("feOffset", { dx: shadow.x, dy: shadow.y, in: "SourceAlpha", result: offsetId }),
    React45.createElement("feGaussianBlur", { stdDeviation: shadow.blur / 2, in: offsetId, result: blurId }),
    React45.createElement("feColorMatrix", { colorInterpolationFilters: "sRGB", values: matrixValues, type: "matrix", in: blurId, result: matrixId })
  );
};
function innerShadowElements(shapeID, shadow, index) {
  const shadowKey = shapeID.add("_inside_shadow" + index);
  const blurId = shadowKey.add("blur").id;
  const offsetId = shadowKey.add("offset").id;
  const compositeId = shadowKey.add("composite").id;
  const matrixId = shadowKey.add("matrix").id;
  const filterElements = React45.createElement(InnerShadowFilterElements, { key: shadowKey.id + "-filters", shadow, blurId, offsetId, compositeId, matrixId });
  const mergeElement = React45.createElement("feMergeNode", { key: shadowKey.id + "-merge", in: matrixId });
  return { filterElements, mergeElement };
}
var InnerShadowFilterElements = (props) => {
  const lookup = React45.useContext(CustomPropertiesContext);
  const { shadow, blurId, offsetId, compositeId, matrixId } = props;
  let color2 = shadow.color;
  const result = lookup(color2);
  if (result) {
    color2 = result;
  }
  const rgb = ConvertColor.toRgb(color2);
  const r2 = rgb.r / 255;
  const g = rgb.g / 255;
  const b = rgb.b / 255;
  const matrixValues = `0 0 0 0 ${r2}   0 0 0 0 ${g}   0 0 0 0 ${b}  0 0 0 ${rgb.a} 0`;
  return React45.createElement(
    React45.Fragment,
    null,
    React45.createElement("feGaussianBlur", { stdDeviation: shadow.blur / 2, in: "SourceAlpha", result: blurId }),
    React45.createElement("feOffset", { dx: shadow.x, dy: shadow.y, in: blurId, result: offsetId }),
    React45.createElement("feComposite", { in: offsetId, in2: "SourceAlpha", operator: "arithmetic", k2: "-1", k3: "1", result: compositeId }),
    React45.createElement("feColorMatrix", { colorInterpolationFilters: "sRGB", values: matrixValues, type: "matrix", in: compositeId, result: matrixId })
  );
};
function calcMaxRealisticShadowBlur(distance2, focus) {
  return interpolate2([0, 0.5, 1], [distance2 * 5, distance2, 0])(focus);
}
var maxSpread = 5;
function calcRealisticShadowSpread(diffusion) {
  return mix(-maxSpread, 0, diffusion);
}
function localShadowFrame(shadow, frame3, isSVG2 = false) {
  if (!isSVG2 && shadow["inset"])
    return null;
  let growth = shadow.blur;
  let minX;
  let maxX;
  let minY;
  let maxY;
  if (isSVG2) {
    minX = -Math.abs(shadow.x) - growth;
    maxX = Math.abs(shadow.x) + frame3.width + growth;
    minY = -Math.abs(shadow.y) - growth;
    maxY = Math.abs(shadow.y) + frame3.height + growth;
  } else if (BoxShadow.is(shadow) && shadow.type === "realistic") {
    growth = calcMaxRealisticShadowBlur(distance(shadow.x, shadow.y), shadow.focus) + calcRealisticShadowSpread(shadow.diffusion);
    if (shadow.x >= 0) {
      minX = 0 - growth;
      maxX = shadow.x + frame3.width + growth;
    } else {
      minX = shadow.x - growth;
      maxX = frame3.width + growth;
    }
    if (shadow.y >= 0) {
      minY = 0 - growth;
      maxY = shadow.y + frame3.height + growth;
    } else {
      minY = shadow.y - growth;
      maxY = frame3.height + growth;
    }
  } else {
    growth += shadow.spread;
    minX = shadow.x - growth;
    maxX = shadow.x + frame3.width + growth;
    minY = shadow.y - growth;
    maxY = shadow.y + frame3.height + growth;
  }
  if (maxX <= minX || maxY <= minY)
    return null;
  return { x: minX, y: minY, width: maxX - minX, height: maxY - minY };
}

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/render/utils/filtersForNode.js
function collectLayerFilters(props, style) {
  const filters = [];
  if (isFiniteNumber(props.brightness)) {
    filters.push(`brightness(${props.brightness / 100})`);
  }
  if (isFiniteNumber(props.contrast)) {
    filters.push(`contrast(${props.contrast / 100})`);
  }
  if (isFiniteNumber(props.grayscale)) {
    filters.push(`grayscale(${props.grayscale / 100})`);
  }
  if (isFiniteNumber(props.hueRotate)) {
    filters.push(`hue-rotate(${props.hueRotate}deg)`);
  }
  if (isFiniteNumber(props.invert)) {
    filters.push(`invert(${props.invert / 100})`);
  }
  if (isFiniteNumber(props.saturate)) {
    filters.push(`saturate(${props.saturate / 100})`);
  }
  if (isFiniteNumber(props.sepia)) {
    filters.push(`sepia(${props.sepia / 100})`);
  }
  if (isFiniteNumber(props.blur)) {
    filters.push(`blur(${props.blur}px)`);
  }
  if (props.dropShadows) {
    filters.push(...shadowsAsFilter(props.dropShadows));
  }
  if (filters.length === 0)
    return;
  style.filter = style.WebkitFilter = filters.join(" ");
}
function collectBackgroundFilters(props, style) {
  if (isFiniteNumber(props.backgroundBlur)) {
    style.backdropFilter = style.WebkitBackdropFilter = `blur(${props.backgroundBlur}px)`;
  }
}
function collectFiltersFromProps(props, style) {
  collectBackgroundFilters(props, style);
  collectLayerFilters(props, style);
}

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/render/presentation/DeprecatedRichText.js
import { motion as motion8 } from "framer-motion";
import * as React46 from "react";
import { useRef as useRef14 } from "react";

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/modules/replaceFramerPageLinks.js
var htmlRegExp = /[&<>'"]/g;
var escapeHTML = (str) => str.replace(htmlRegExp, (tag) => ({
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  "'": "&#39;",
  '"': "&quot;"
})[tag] || tag);
var regex = /(<([a-z]+)(?:\s+(?!href[\s=])[^=\s]+=(?:'[^']*'|"[^"]*"))*)(?:(\s+href\s*=)(?:'([^']*)'|"([^"]*)"))?((?:\s+[^=\s]+=(?:'[^']*'|"[^"]*"))*>)/gi;
function replaceFramerPageLinks(rawHTML, getRoute, currentRoute, implicitPathVariables) {
  return rawHTML.replace(regex, (original, pre1, tag, pre2, value1, value2, post) => {
    var _a, _b, _c;
    if (tag.toLowerCase() !== "a")
      return original;
    const href = value1 || value2;
    const pageLink = parseFramerPageLink(href.replace(/&amp;/g, "&"));
    if (!pageLink || !pageLink.target)
      return original;
    const targetRoute = getRoute(pageLink.target);
    if (!isRoute(targetRoute) || !isRoute(currentRoute))
      return original;
    const targetPath = targetRoute.path;
    const currentPath = currentRoute.path;
    if (!targetPath || !currentPath)
      return original;
    let attributes = ` ${"data-framer-page-link-target"}="${pageLink.target}"`;
    const elementId = getRouteElementId(targetRoute, (_a = pageLink.element) != null ? _a : void 0);
    if (elementId) {
      attributes += ` ${"data-framer-page-link-element"}="${pageLink.element}"`;
    }
    const link = linkFromFramerPageLink(href);
    if (!link || isString(link))
      return original;
    if (linkMatchesRoute(currentRoute, link, implicitPathVariables)) {
      attributes += ` ${"data-framer-page-link-current"}`;
    }
    let relativePath = targetPath;
    const pathVariables = Object.assign({}, implicitPathVariables, (_b = pageLink.collectionItem) == null ? void 0 : _b.pathVariables);
    if (Object.keys(pathVariables).length > 0) {
      relativePath = relativePath.replace(pathVariablesRegExp, (_, key3) => "" + pathVariables[key3]);
    }
    if ((_c = pageLink.collectionItem) == null ? void 0 : _c.pathVariables) {
      const params = new URLSearchParams(pageLink.collectionItem.pathVariables);
      attributes += ` ${"data-framer-page-link-path-variables"}="${params}"`;
    }
    relativePath = computeRelativePath(currentPath, relativePath);
    return pre1 + pre2 + `"${escapeHTML(relativePath + (elementId ? `#${elementId}` : ""))}"` + attributes + post;
  });
}

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/render/utils/isShallowEqualArray.js
function isShallowEqualArray(a2, b) {
  return a2.length === b.length && a2.every((v, i2) => v === b[i2]);
}

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/render/presentation/DeprecatedRichText.js
var htmlEscapes = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
};
var reUnescapedHtml = /[&<>"']/g;
var reHasUnescapedHtml = RegExp(reUnescapedHtml.source);
function escapeHTML2(str) {
  return str && reHasUnescapedHtml.test(str) ? str.replace(reUnescapedHtml, (chr) => htmlEscapes[chr]) : str || "";
}
var deprecatedRichTextPlaceholder = "{{ text-placeholder }}";
var richTextWrapperClassName = "rich-text-wrapper";
var DeprecatedRichText = /* @__PURE__ */ React46.forwardRef(function Text(props, forwardedRef) {
  var _b, _c;
  const _a = props, { id, name, html, htmlFromDesign, text, textFromDesign, fonts = [], width, height, left, right, top, bottom, center, className, stylesPresetsClassName, visible = true, opacity, rotation = 0, verticalAlignment = "top", isEditable = false, willChangeTransform, environment = RenderTarget.current, withExternalLayout = false, positionSticky, positionStickyTop, positionStickyRight, positionStickyBottom, positionStickyLeft, __htmlStructure, __fromCanvasComponent = false, _forwardedOverrideId, _forwardedOverrides, _usesDOMRect, children } = _a, rest = __objRest(_a, ["id", "name", "html", "htmlFromDesign", "text", "textFromDesign", "fonts", "width", "height", "left", "right", "top", "bottom", "center", "className", "stylesPresetsClassName", "visible", "opacity", "rotation", "verticalAlignment", "isEditable", "willChangeTransform", "environment", "withExternalLayout", "positionSticky", "positionStickyTop", "positionStickyRight", "positionStickyBottom", "positionStickyLeft", "__htmlStructure", "__fromCanvasComponent", "_forwardedOverrideId", "_forwardedOverrides", "_usesDOMRect", "children"]);
  const parentSize = useParentSize();
  const layoutId = useLayoutId(props);
  const fallbackLayoutRef = useRef14(null);
  const layoutRef = forwardedRef != null ? forwardedRef : fallbackLayoutRef;
  const { navigate, getRoute } = useRouter();
  const currentRoute = useCurrentRoute();
  useRoutePreloader((_b = props.preload) != null ? _b : []);
  useMeasureLayout(props, layoutRef);
  const inCodeComponent = React46.useContext(ComponentContainerContext);
  const isOnCanvas = useIsOnFramerCanvas();
  let textOrOverride = text;
  const forwardedOverrideId = _forwardedOverrideId != null ? _forwardedOverrideId : id;
  if (forwardedOverrideId && _forwardedOverrides) {
    const override = _forwardedOverrides[forwardedOverrideId];
    if (typeof override === "string") {
      textOrOverride = override;
    }
  }
  let innerHTML = "";
  if (textOrOverride) {
    const escapedText = escapeHTML2(textOrOverride);
    innerHTML = __htmlStructure ? __htmlStructure.replace(deprecatedRichTextPlaceholder, escapedText) : `<p>${escapedText}</p>`;
  } else if (html) {
    innerHTML = html;
  } else if (textFromDesign) {
    const escapedText = escapeHTML2(textFromDesign);
    innerHTML = __htmlStructure ? __htmlStructure.replace(deprecatedRichTextPlaceholder, escapedText) : `<p>${escapedText}</p>`;
  } else if (htmlFromDesign) {
    innerHTML = htmlFromDesign;
  }
  const implicitPathVariables = useImplicitPathVariables();
  const innerHTMLWithReplacedFramerPageLinks = React46.useMemo(() => {
    if (isOnCanvas || !getRoute || !currentRoute)
      return innerHTML;
    return replaceFramerPageLinks(innerHTML, getRoute, currentRoute, implicitPathVariables);
  }, [isOnCanvas, innerHTML, getRoute, currentRoute, implicitPathVariables]);
  React46.useEffect(() => {
    const container = layoutRef.current;
    if (container === null)
      return;
    function interceptPageLinks(event) {
      const anchorElement = findAnchorElement(event.target, layoutRef.current);
      if (event.metaKey || !navigate || !anchorElement || anchorElement.getAttribute("target") === AnchorLinkTarget._blank)
        return;
      const didNavigate = navigateFromAttributes(navigate, anchorElement, implicitPathVariables);
      if (didNavigate) {
        event.preventDefault();
      }
    }
    container.addEventListener("click", interceptPageLinks);
    return () => {
      container.removeEventListener("click", interceptPageLinks);
    };
  }, [navigate, implicitPathVariables]);
  useLoadFonts(fonts, __fromCanvasComponent, layoutRef);
  if (!visible)
    return null;
  injectComponentCSSRules();
  const isHidden2 = isEditable && environment() === RenderTarget.canvas;
  const style = {
    outline: "none",
    display: "flex",
    flexDirection: "column",
    justifyContent: convertVerticalAlignment(verticalAlignment),
    opacity: isHidden2 ? 0 : opacity,
    flexShrink: 0
  };
  const restrictedRenderTarget = RenderTarget.hasRestrictions();
  const frame3 = calculateRect(props, parentSize || ParentSizeState.Unknown, false);
  const isAutoSized2 = _usesDOMRect && (width === "auto" || height === "auto");
  const hasTransformTemplate = !!props.transformTemplate || !frame3 || !restrictedRenderTarget || __fromCanvasComponent || isAutoSized2;
  const template = hasTransformTemplate ? (_c = props.transformTemplate) != null ? _c : transformTemplate(center) : void 0;
  if (!withExternalLayout) {
    if (frame3 && restrictedRenderTarget && !isAutoSized2) {
      const rotate = Animatable.getNumber(rotation).toFixed(4);
      style.transform = `translate(${frame3.x}px, ${frame3.y}px) rotate(${rotate}deg)`;
      style.width = frame3.width;
      style.minWidth = frame3.width;
      style.height = frame3.height;
    } else {
      style.left = left;
      style.right = right;
      style.top = top;
      style.bottom = bottom;
      style.width = width;
      style.height = height;
      style.rotate = rotation;
    }
    if (positionSticky) {
      if (!isOnCanvas || inCodeComponent) {
        style.position = "sticky";
        style.willChange = "transform";
        style.zIndex = 1;
        style.top = positionStickyTop;
        style.right = positionStickyRight;
        style.bottom = positionStickyBottom;
        style.left = positionStickyLeft;
      }
    } else if (isOnCanvas && (props.positionFixed || props.positionAbsolute)) {
      style.position = "absolute";
    }
  }
  collectFiltersFromProps(props, style);
  collectTextShadowsForProps(props, style);
  if (willChangeTransform) {
    forceLayerBackingWithCSSProperties(style);
  }
  Object.assign(style, props.style);
  return React46.createElement(motion8.div, __spreadProps(__spreadValues({ id, ref: layoutRef }, rest), { style, layoutId, "data-framer-name": name, "data-framer-component-type": "DeprecatedRichText", "data-center": center, className: cx2(className, stylesPresetsClassName, richTextWrapperClassName), transformTemplate: template, dangerouslySetInnerHTML: { __html: innerHTMLWithReplacedFramerPageLinks } }));
});
function convertVerticalAlignment(verticalAlignment) {
  switch (verticalAlignment) {
    case "top":
      return "flex-start";
    case "center":
      return "center";
    case "bottom":
      return "flex-end";
  }
}
function useLoadFonts(fonts, fromCanvasComponent, containerRef) {
  const prevFontsRef = useRef14([]);
  if (!isShallowEqualArray(prevFontsRef.current, fonts)) {
    prevFontsRef.current = fonts;
    fontStore.loadWebFontsFromSelectors(fonts).then((results) => {
      if (!fromCanvasComponent || !containerRef.current || RenderTarget.current() !== RenderTarget.canvas)
        return;
      const didLoadNewFonts = results.some((result) => result.status === "fulfilled" && result.value === LoadFontResult.Loaded);
      if (didLoadNewFonts) {
        measureClosestComponentContainer(containerRef.current);
      }
    });
  }
}

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/render/presentation/RichText.js
var RichTextContainer = /* @__PURE__ */ forwardRef3((props, ref) => {
  var _b;
  const _a = props, { __fromCanvasComponent = false, _forwardedOverrideId, _forwardedOverrides, _usesDOMRect, bottom, center, children, environment = RenderTarget.current, fonts = [], height, isEditable = false, left, name, opacity, positionSticky, positionStickyBottom, positionStickyLeft, positionStickyRight, positionStickyTop, right, rotation = 0, style, stylesPresetsClassNames, text: plainText, top, verticalAlignment = "top", visible = true, width, willChangeTransform, withExternalLayout = false, viewBox, viewBoxScale = 1 } = _a, rest = __objRest(_a, ["__fromCanvasComponent", "_forwardedOverrideId", "_forwardedOverrides", "_usesDOMRect", "bottom", "center", "children", "environment", "fonts", "height", "isEditable", "left", "name", "opacity", "positionSticky", "positionStickyBottom", "positionStickyLeft", "positionStickyRight", "positionStickyTop", "right", "rotation", "style", "stylesPresetsClassNames", "text", "top", "verticalAlignment", "visible", "width", "willChangeTransform", "withExternalLayout", "viewBox", "viewBoxScale"]);
  const parentSize = useParentSize();
  const isOnCanvas = useIsOnFramerCanvas();
  const inCodeComponent = useContext9(ComponentContainerContext);
  const layoutId = useLayoutId(props);
  const fallbackRef = useRef15(null);
  const containerRef = ref != null ? ref : fallbackRef;
  useMeasureLayout(props, containerRef);
  useLoadFonts(fonts, __fromCanvasComponent, containerRef);
  if (!visible)
    return null;
  injectComponentCSSRules();
  const isHidden2 = isEditable && environment() === RenderTarget.canvas;
  const containerStyle2 = {
    outline: "none",
    display: "flex",
    flexDirection: "column",
    justifyContent: convertVerticalAlignment(verticalAlignment),
    opacity: isHidden2 ? 0 : opacity,
    flexShrink: 0
  };
  const restrictedRenderTarget = RenderTarget.hasRestrictions();
  const frame3 = calculateRect(props, parentSize || ParentSizeState.Unknown, false);
  const isAutoSized2 = _usesDOMRect && (width === "auto" || height === "auto");
  const hasTransformTemplate = !!props.transformTemplate || !frame3 || !restrictedRenderTarget || __fromCanvasComponent || isAutoSized2;
  const template = hasTransformTemplate ? (_b = props.transformTemplate) != null ? _b : transformTemplate(center) : void 0;
  if (!withExternalLayout) {
    if (frame3 && restrictedRenderTarget && !isAutoSized2) {
      const rotate = Animatable.getNumber(rotation).toFixed(4);
      containerStyle2.transform = `translate(${frame3.x}px, ${frame3.y}px) rotate(${rotate}deg)`;
      containerStyle2.width = frame3.width;
      containerStyle2.minWidth = frame3.width;
      containerStyle2.height = frame3.height;
    } else {
      containerStyle2.left = left;
      containerStyle2.right = right;
      containerStyle2.top = top;
      containerStyle2.bottom = bottom;
      containerStyle2.width = width;
      containerStyle2.height = height;
      containerStyle2.rotate = rotation;
    }
    if (positionSticky) {
      if (!isOnCanvas || inCodeComponent) {
        containerStyle2.position = "sticky";
        containerStyle2.willChange = "transform";
        containerStyle2.zIndex = 1;
        containerStyle2.top = positionStickyTop;
        containerStyle2.right = positionStickyRight;
        containerStyle2.bottom = positionStickyBottom;
        containerStyle2.left = positionStickyLeft;
      }
    } else if (isOnCanvas && (props.positionFixed || props.positionAbsolute)) {
      containerStyle2.position = "absolute";
    }
  }
  collectFiltersFromProps(props, containerStyle2);
  collectTextShadowsForProps(props, containerStyle2);
  if (willChangeTransform) {
    forceLayerBackingWithCSSProperties(containerStyle2);
  }
  Object.assign(containerStyle2, style);
  if (layoutId) {
    rest.layout = "preserve-aspect";
  }
  if (isString(props.viewBox)) {
    return React47.createElement(
      motion9.svg,
      __spreadProps(__spreadValues({}, rest), { ref: containerRef, style: containerStyle2, layoutId, transformTemplate: template, "data-framer-name": name, "data-framer-component-type": "RichTextContainer", viewBox }),
      React47.createElement(motion9.foreignObject, { width: "100%", height: "100%", transform: `scale(${viewBoxScale})`, style: { overflow: "visible", transformOrigin: "center center" } }, children && styleRichTextChildren(children, stylesPresetsClassNames, plainText))
    );
  }
  return React47.createElement(motion9.div, __spreadProps(__spreadValues({}, rest), { ref: containerRef, style: containerStyle2, layoutId, transformTemplate: template, "data-framer-name": name, "data-framer-component-type": "RichTextContainer" }), children && styleRichTextChildren(children, stylesPresetsClassNames, plainText));
});
function styleRichTextChildren(element, stylesPresetsClassNames, plainText) {
  let children = Children.toArray(element.props.children);
  if (isString(plainText)) {
    children = children.slice(0, 1);
  }
  children = children.map((child) => {
    if (isValidElement(child)) {
      return styleRichTextChildren(child, stylesPresetsClassNames, plainText);
    }
    if (isString(plainText)) {
      return plainText;
    }
    return child;
  });
  const _a = element.props, { ["data-preset-tag"]: dataPresetTag } = _a, props = __objRest(_a, ["data-preset-tag"]);
  if (isString(element.type) || isMotionComponent(element.type)) {
    const tag = dataPresetTag || unwrapMotionComponent(element.type) || element.type;
    const stylesPresetClassName = isString(tag) ? stylesPresetsClassNames == null ? void 0 : stylesPresetsClassNames[tag] : void 0;
    props.className = cx2("framer-text", props.className, stylesPresetClassName);
  }
  return cloneElement(element, props, ...children);
}
var RichText = /* @__PURE__ */ forwardRef3((_a, ref) => {
  var _b = _a, { children, html, htmlFromDesign } = _b, props = __objRest(_b, ["children", "html", "htmlFromDesign"]);
  const content = html || children || htmlFromDesign;
  if (isString(content)) {
    if (!props.stylesPresetsClassName && isObject(props.stylesPresetsClassNames)) {
      props.stylesPresetsClassName = Object.values(props.stylesPresetsClassNames).join(" ");
    }
    const contentProp = {
      // We need to use the original prop name.
      [isString(html) ? "html" : "htmlFromDesign"]: content
    };
    return React47.createElement(DeprecatedRichText, __spreadProps(__spreadValues(__spreadValues({}, props), contentProp), { ref }));
  }
  if (!props.stylesPresetsClassNames && isString(props.stylesPresetsClassName)) {
    const [h1, h2, h3, p2, a2] = props.stylesPresetsClassName.split(" ");
    if (h1 === void 0 || h2 === void 0 || h3 === void 0 || p2 === void 0 || a2 === void 0) {
      console.warn(`Encountered invalid stylesPresetsClassNames: ${props.stylesPresetsClassNames}`);
    } else {
      props.stylesPresetsClassNames = { h1, h2, h3, p: p2, a: a2 };
    }
  }
  return React47.createElement(RichTextContainer, __spreadProps(__spreadValues({}, props), { ref }), isValidElement(content) ? content : void 0);
});

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/render/presentation/SVG.js
import { motion as motion10 } from "framer-motion";
import process6 from "process";
import React50 from "react";

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/render/traits/Opacity.js
var key2 = "opacity";
function withOpacity(target) {
  return key2 in target;
}
function collectOpacityFromProps(props, style) {
  if (!withOpacity(props))
    return;
  const opacity = Animatable.getNumber(props.opacity);
  if (opacity === 1)
    return;
  style.opacity = opacity;
}

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/render/utils/elementPropertiesForGradient.js
import { interpolate as interpolate3 } from "framer-motion";

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/render/types/Line.js
var Line = /* @__PURE__ */ (() => {
  function Line2(a2, b) {
    return { a: a2, b };
  }
  Line2.intersection = (lineA, lineB) => {
    const x1 = lineA.a.x;
    const y1 = lineA.a.y;
    const x2 = lineA.b.x;
    const y2 = lineA.b.y;
    const x3 = lineB.a.x;
    const y3 = lineB.a.y;
    const x4 = lineB.b.x;
    const y4 = lineB.b.y;
    const d = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);
    if (d === 0) {
      return null;
    }
    const xi = ((x3 - x4) * (x1 * y2 - y1 * x2) - (x1 - x2) * (x3 * y4 - y3 * x4)) / d;
    const yi = ((y3 - y4) * (x1 * y2 - y1 * x2) - (y1 - y2) * (x3 * y4 - y3 * x4)) / d;
    return { x: xi, y: yi };
  };
  Line2.intersectionAngle = (lineA, lineB) => {
    const deltaAX = lineA.b.x - lineA.a.x;
    const deltaAY = lineA.b.y - lineA.a.y;
    const deltaBX = lineB.b.x - lineB.a.x;
    const deltaBY = lineB.b.y - lineB.a.y;
    const angle = Math.atan2(deltaAX * deltaBY - deltaAY * deltaBX, deltaAX * deltaBX + deltaAY * deltaBY);
    return angle * (180 / Math.PI);
  };
  Line2.isOrthogonal = (line) => {
    return line.a.x === line.b.x || line.a.y === line.b.y;
  };
  Line2.perpendicular = (line, pointOnLine) => {
    const deltaX = line.a.x - line.b.x;
    const deltaY = line.a.y - line.b.y;
    const pointB = Point(pointOnLine.x - deltaY, pointOnLine.y + deltaX);
    return Line2(pointB, pointOnLine);
  };
  Line2.projectPoint = (line, point) => {
    const perp = Line2.perpendicular(line, point);
    return Line2.intersection(line, perp);
  };
  Line2.pointAtPercentDistance = (line, distance2) => {
    const hypotenuse = Line2.distance(line);
    const r2 = distance2 * hypotenuse / hypotenuse;
    return {
      x: r2 * line.b.x + (1 - r2) * line.a.x,
      y: r2 * line.b.y + (1 - r2) * line.a.y
    };
  };
  Line2.distance = (line) => {
    return Point.distance(line.a, line.b);
  };
  return Line2;
})();

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/render/utils/elementPropertiesForGradient.js
function linearGradientLine(angle) {
  var _a, _b;
  const rad = angle * Math.PI / 180;
  const offset = {
    x: -Math.sin(rad) * 100,
    y: Math.cos(rad) * 100
  };
  const anglePoint = Point(offset.x, offset.y);
  const angleLine = Line(Point(0.5, 0.5), anglePoint);
  const points = Rect.points({ x: 0, y: 0, width: 1, height: 1 });
  const sortedPoints = points.map((point) => ({ point, distance: Point.distance(anglePoint, point) })).sort((a3, b2) => a3.distance - b2.distance);
  const a2 = (_a = sortedPoints[0]) == null ? void 0 : _a.point;
  const b = (_b = sortedPoints[1]) == null ? void 0 : _b.point;
  assert(a2 && b, "linearGradientLine: Must have 2 closest points.");
  const [c, d] = points.filter((point) => !Point.isEqual(point, a2) && !Point.isEqual(point, b));
  assert(c && d, "linearGradientLine: Must have 2 opposing points.");
  const start = Line.intersection(angleLine, Line(a2, b));
  const end = Line.intersection(angleLine, Line(c, d));
  assert(start && end, "linearGradientLine: Must have a start and end point.");
  return Line(start, end);
}
function elementPropertiesForLinearGradient(gradient, id) {
  var _a, _b, _c, _d;
  const line = linearGradientLine(gradient.angle);
  const stops = gradientColorStops(gradient);
  const startPosition = (_b = (_a = stops[0]) == null ? void 0 : _a.position) != null ? _b : 0;
  const endPosition = (_d = (_c = stops[stops.length - 1]) == null ? void 0 : _c.position) != null ? _d : 1;
  const startPoint = Line.pointAtPercentDistance(line, startPosition);
  const endPoint = Line.pointAtPercentDistance(line, endPosition);
  const interpolator = interpolate3([startPosition, endPosition], [0, 1]);
  return {
    id: `id${id}g${LinearGradient.hash(gradient)}`,
    x1: startPoint.x,
    y1: startPoint.y,
    x2: endPoint.x,
    y2: endPoint.y,
    stops: stops.map((stop) => ({
      color: stop.value,
      alpha: ConvertColor.getAlpha(stop.value) * gradient.alpha,
      position: interpolator(stop.position)
    }))
  };
}
function elementPropertiesForRadialGradient(gradient, id) {
  return {
    id: `id${id}g${RadialGradient.hash(gradient)}`,
    widthFactor: gradient.widthFactor,
    heightFactor: gradient.heightFactor,
    centerAnchorX: gradient.centerAnchorX,
    centerAnchorY: gradient.centerAnchorY,
    stops: gradientColorStops(gradient).map((stop) => ({
      color: stop.value,
      alpha: ConvertColor.getAlpha(stop.value) * gradient.alpha,
      position: stop.position
    }))
  };
}

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/render/utils/imagePatternPropsForFill.js
function imagePatternPropsForFill(fill, frame3, id) {
  var _a;
  fill = Animatable.get(fill, "#09F");
  if (!BackgroundImage.isImageObject(fill))
    return void 0;
  if (!fill.pixelWidth || !fill.pixelHeight)
    return void 0;
  const imageWidth = fill.pixelWidth;
  const imageHeight = fill.pixelHeight;
  let transform2;
  const { fit } = fill;
  if (fit === "fill" || fit === "fit" || !fit) {
    let scaleX = 1;
    let scaleY = 1;
    let offsetX = 0;
    let offsetY = 0;
    const imageRatio = imageWidth / imageHeight;
    const realWidth = frame3.height * imageRatio;
    const realHeight = frame3.width / imageRatio;
    const validScaleX = realWidth / frame3.width;
    const validScaleY = realHeight / frame3.height;
    if (fit === "fill" || !fit ? validScaleY > validScaleX : validScaleY < validScaleX) {
      scaleY = validScaleY;
      offsetY = (1 - validScaleY) / 2;
    } else {
      scaleX = validScaleX;
      offsetX = (1 - validScaleX) / 2;
    }
    transform2 = `translate(${offsetX}, ${offsetY}) scale(${scaleX}, ${scaleY})`;
  }
  const imageId = `id${id}g${"-fillImage"}`;
  return { id: imageId, path: (_a = fill.src) != null ? _a : "", transform: transform2 };
}

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/render/WindowContext.js
import React48 from "react";
var WindowContext = /* @__PURE__ */ React48.createContext(void 0);
var useProvidedWindow = () => React48.useContext(WindowContext);

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/render/presentation/ImagePatternElement.js
import React49, { Component as Component3 } from "react";

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/render/utils/imageUrlForAsset.js
var mediaType2 = "framer/asset-reference,";
function isAssetReference(value) {
  return value.startsWith(`data:${mediaType2}`);
}
function imageUrlForAsset(asset, pixelSize) {
  var _a;
  if (/^\w+:/.test(asset) && !isAssetReference(asset))
    return asset;
  if (typeof pixelSize !== "number")
    pixelSize = void 0;
  else if (pixelSize <= 512)
    pixelSize = 512;
  else if (pixelSize <= 1024)
    pixelSize = 1024;
  else if (pixelSize <= 2048)
    pixelSize = 2048;
  else
    pixelSize = 4096;
  const isExport = RenderTarget.current() === RenderTarget.export;
  return (_a = runtime.assetResolver(asset, { pixelSize, isExport })) != null ? _a : "";
}

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/render/presentation/ImagePatternElement.js
var ImagePatternElement = class extends Component3 {
  render() {
    const { id, path, transform: transform2 } = this.props;
    const xlinkHref = imageUrlForAsset(path);
    return React49.createElement(
      "pattern",
      { id, width: "100%", height: "100%", patternContentUnits: "objectBoundingBox" },
      React49.createElement("image", { key: xlinkHref, width: 1, height: 1, xlinkHref, preserveAspectRatio: "none", transform: transform2 })
    );
  }
};

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/render/presentation/SharedSVGManager.js
var useDOM = isBrowser();
var SharedSVGEntry = class {
  constructor(id, svg, innerHTML, viewBox, count = 0) {
    __publicField(this, "id");
    __publicField(this, "svg");
    __publicField(this, "innerHTML");
    __publicField(this, "viewBox");
    __publicField(this, "count");
    this.id = id;
    this.svg = svg;
    this.innerHTML = innerHTML;
    this.viewBox = viewBox;
    this.count = count;
  }
};
var SharedSVGManager = class {
  constructor() {
    __publicField(this, "entries", /* @__PURE__ */ new Map());
  }
  debugGetEntries() {
    return this.entries;
  }
  /** Request to render a svg, this will ensure there is a global instance and will return a
   * template referencing the image. Must be balanced with `unsubscribe()` calls using the same
   * svg. If called multiple times while the shared SVG exists, the generateUniqueIds and
   * contentId parameters are ignored. */
  subscribe(svg, generateUniqueIds, contentId) {
    if (!svg || svg === "")
      return "";
    let entry = this.entries.get(svg);
    if (!entry) {
      if (!contentId) {
        contentId = "svg" + String(hash(svg)) + "_" + String(svg.length);
      }
      let uniqueSVG = svg;
      let svgSize;
      const svgDom = parseSVG(svg);
      if (svgDom) {
        if (generateUniqueIds) {
          prefixIdsInSVG(svgDom, contentId);
        }
        svgDom.id = contentId;
        svgSize = getSVGSize(svgDom);
        uniqueSVG = svgDom.outerHTML;
      }
      entry = this.createDOMElementFor(uniqueSVG, contentId, svgSize);
      this.entries.set(svg, entry);
    }
    entry.count += 1;
    return entry.innerHTML;
  }
  /** Returns the viewBox for the svg, or undefined if there is no viewBox. */
  getViewBox(svg) {
    if (!svg || svg === "")
      return;
    const entry = this.entries.get(svg);
    return entry == null ? void 0 : entry.viewBox;
  }
  /** When no longer rendering an svg it must be unsubscribed from so resources can be cleaned up.
   * Pass in the same svg as used with `subscribe()`. */
  unsubscribe(svg) {
    if (!svg || svg === "")
      return;
    const entry = this.entries.get(svg);
    if (!entry)
      return;
    entry.count -= 1;
    if (entry.count > 0)
      return;
    setTimeout(() => this.maybeRemoveEntry(svg), 5e3);
  }
  maybeRemoveEntry(svg) {
    const entry = this.entries.get(svg);
    if (!entry)
      return;
    if (entry.count > 0)
      return;
    this.entries.delete(svg);
    this.removeDOMElement(entry);
  }
  removeDOMElement(entry) {
    const containerId = "container_" + entry.id;
    if (useDOM) {
      const container = document == null ? void 0 : document.querySelector("#" + containerId);
      container == null ? void 0 : container.remove();
    }
  }
  createDOMElementFor(svg, id, size2) {
    const containerId = "container_" + id;
    if (useDOM) {
      let svgTemplates = document.querySelector("#svg-templates");
      if (!svgTemplates) {
        svgTemplates = document.createElement("div");
        svgTemplates.id = "svg-templates";
        svgTemplates.style.position = "absolute";
        svgTemplates.style.top = "0";
        svgTemplates.style.left = "0";
        svgTemplates.style.width = "0";
        svgTemplates.style.height = "0";
        svgTemplates.style.overflow = "hidden";
        document.body.appendChild(svgTemplates);
      }
      if (!document.querySelector("#" + containerId)) {
        const container = document.createElement("div");
        container.id = containerId;
        container.innerHTML = svg;
        if (container.firstElementChild) {
          container.firstElementChild.id = id;
        }
        svgTemplates.appendChild(container);
      }
    }
    const box = size2 ? `0 0 ${size2.width} ${size2.height}` : void 0;
    const viewBox = box ? ` viewBox="${box}"` : "";
    const innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="width: 100%; height: 100%"${viewBox}><use href="#${id}"></use></svg>`;
    return new SharedSVGEntry(id, svg, innerHTML, box);
  }
  clear() {
    this.entries.clear();
  }
  /** Returns a string containing a div#svg-templates and all the current svg templates. Can be
   * used after running `ReactDOMServer.renderToString()` */
  generateTemplates() {
    const output = [];
    const style = "position: absolute; overflow: hidden; top: 0; left: 0; width: 0; height: 0";
    output.push(`<div id="svg-templates" style="${style}">`);
    for (const value of this.entries.values()) {
      const containerId = "container_" + value.id;
      output.push(`  <div id="${containerId}">`);
      output.push(`    ${value.svg}`);
      output.push("  </div>");
    }
    output.push("</div>");
    return output.join("\n");
  }
};
var sharedSVGManager = /* @__PURE__ */ new SharedSVGManager();
function parseSVG(svg) {
  if (typeof DOMParser === "undefined") {
    console.warn("unable to find DOMParser");
    return;
  }
  try {
    const domParser = new DOMParser();
    const doc = domParser.parseFromString(svg, "text/html");
    const node = doc.getElementsByTagName("svg")[0];
    if (!node)
      throw Error("no svg element found");
    return node;
  } catch (e2) {
    return;
  }
}
function prefixIdsInSVG(svg, prefix) {
  const sanitizedPrefix = sanitizeString(prefix);
  recursivelyPrefixId(svg, sanitizedPrefix);
}
function sanitizeString(str) {
  return str.replace(/[^a-z0-9\-_:.]|^[^a-z]+/gi, "");
}
function recursivelyPrefixId(el, prefix) {
  prefixId(el, prefix);
  const childNodes = Array.from(el.children);
  childNodes.forEach((node) => {
    recursivelyPrefixId(node, prefix);
  });
}
function prefixId(el, prefix) {
  const attributes = el.getAttributeNames();
  attributes.forEach((attr) => {
    const value = el.getAttribute(attr);
    if (!value)
      return;
    if (attr === "id") {
      el.setAttribute(attr, `${prefix}_${value}`);
    }
    if (attr === "href" || attr === "xlink:href") {
      const [base, fragmentIdentifier] = value.split("#");
      if (base)
        return;
      el.setAttribute(attr, `#${prefix}_${fragmentIdentifier}`);
      return;
    }
    const URL_REF = "url(#";
    if (value.includes(URL_REF)) {
      const prefixedValue = value.replace(URL_REF, `${URL_REF}${prefix}_`);
      el.setAttribute(attr, prefixedValue);
    }
  });
}
var unitsToPixels = {
  cm: 96 / 2.54,
  mm: 96 / 2.54 / 10,
  Q: 96 / 2.54 / 40,
  in: 96,
  pc: 96 / 6,
  pt: 96 / 72,
  px: 1,
  // A few assumptions about relative units.
  em: 16,
  ex: 8,
  ch: 8,
  rem: 16
};
function parseLength(value) {
  var _a;
  if (!value)
    return;
  const m = /(-?[0-9.]+)([a-z%]*)/.exec(value);
  if ((m == null ? void 0 : m[1]) === void 0 || (m == null ? void 0 : m[2]) === void 0)
    return;
  if ((_a = m[2]) == null ? void 0 : _a.startsWith("%"))
    return;
  return Math.round(parseFloat(m[1]) * (unitsToPixels[m[2]] || 1));
}
function getSVGSize(svg) {
  const width = parseLength(svg.getAttribute("width"));
  const height = parseLength(svg.getAttribute("height"));
  if (typeof width !== "number" || typeof height !== "number")
    return;
  if (width <= 0 || height <= 0)
    return;
  return { width, height };
}

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/render/presentation/SVG.js
function SVG(props) {
  const parentSize = useParentSize();
  const ariaId = "svg" + React50.useId();
  const layoutId = useLayoutId(props);
  const layoutRef = React50.useRef(null);
  const providedWindow = useProvidedWindow();
  useMeasureLayout(props, layoutRef);
  return React50.createElement(SVGComponent, __spreadProps(__spreadValues({}, props), { innerRef: layoutRef, parentSize, ariaId, layoutId, providedWindow }));
}
var MAX_BACKGROUND_SVG_TEXT_LENGTH = 5e4;
function containsImageReference(svg) {
  return svg.indexOf("image") >= 0;
}
function containsCustomPropertyReference(svg) {
  return svg.indexOf("var(--") >= 0;
}
function hasBorderRadius(style) {
  return !!(style.borderRadius || style.borderBottomLeftRadius || style.borderBottomRightRadius || style.borderTopLeftRadius || style.borderTopRightRadius);
}
function sizeSVG(container, props) {
  var _a, _b, _c;
  const div = container.current;
  if (!div)
    return;
  const localWindow = (_a = props.providedWindow) != null ? _a : safeWindow;
  const svg = div.firstElementChild;
  if (!svg || !(svg instanceof localWindow.SVGSVGElement))
    return;
  if (!svg.getAttribute("viewBox")) {
    const viewBox = sharedSVGManager.getViewBox(props.svg);
    if (viewBox) {
      svg.setAttribute("viewBox", viewBox);
    }
  }
  const { withExternalLayout, parentSize } = props;
  const canUseCalculatedOnCanvasSize = !withExternalLayout && constraintsEnabled(props) && parentSize !== ParentSizeState.Disabled && parentSize !== ParentSizeState.DisabledForCurrentLevel;
  if (canUseCalculatedOnCanvasSize)
    return;
  const { intrinsicWidth, intrinsicHeight, _constraints } = props;
  if (((_b = svg.viewBox.baseVal) == null ? void 0 : _b.width) === 0 && ((_c = svg.viewBox.baseVal) == null ? void 0 : _c.height) === 0 && isFiniteNumber(intrinsicWidth) && isFiniteNumber(intrinsicHeight)) {
    svg.setAttribute("viewBox", `0 0 ${intrinsicWidth} ${intrinsicHeight}`);
  }
  if (_constraints && _constraints.aspectRatio) {
    svg.setAttribute("preserveAspectRatio", "");
  } else {
    svg.setAttribute("preserveAspectRatio", "none");
  }
  svg.setAttribute("width", "100%");
  svg.setAttribute("height", "100%");
}
var SVGComponent = /* @__PURE__ */ (() => {
  var _a;
  return _a = class extends Layer {
    constructor() {
      super(...arguments);
      __publicField(this, "container", React50.createRef());
      __publicField(this, "svgElement", null);
      __publicField(this, "setSVGElement", (element) => {
        this.svgElement = element;
        this.setLayerElement(element);
      });
      __publicField(this, "previouslyRenderedSVG", "");
      __publicField(this, "unmountedSVG", "");
    }
    static frame(props) {
      return calculateRect(props, props.parentSize || ParentSizeState.Unknown);
    }
    get frame() {
      return calculateRect(this.props, this.props.parentSize || ParentSizeState.Unknown);
    }
    componentDidMount() {
      if (this.unmountedSVG) {
        const { svgContentId } = this.props;
        const contentid = svgContentId ? "svg" + svgContentId : null;
        sharedSVGManager.subscribe(this.unmountedSVG, !svgContentId, contentid);
        this.previouslyRenderedSVG = this.unmountedSVG;
      }
      if (this.props.svgContentId)
        return;
      sizeSVG(this.container, this.props);
    }
    componentWillUnmount() {
      sharedSVGManager.unsubscribe(this.previouslyRenderedSVG);
      this.unmountedSVG = this.previouslyRenderedSVG;
      this.previouslyRenderedSVG = "";
    }
    componentDidUpdate(prevProps) {
      super.componentDidUpdate(prevProps);
      if (this.props.svgContentId)
        return;
      const { fill } = this.props;
      if (BackgroundImage.isImageObject(fill) && BackgroundImage.isImageObject(prevProps.fill) && fill.src !== prevProps.fill.src) {
        resetSetStyle(this.svgElement, "fill", null, false);
      }
      sizeSVG(this.container, this.props);
    }
    collectLayout(style, innerStyle) {
      if (this.props.withExternalLayout) {
        innerStyle.width = "100%";
        innerStyle.height = "100%";
        innerStyle.aspectRatio = "inherit";
        return;
      }
      const frame3 = this.frame;
      const { rotation, intrinsicWidth, intrinsicHeight, width, height } = this.props;
      const rotate = Animatable.getNumber(rotation);
      style.opacity = isFiniteNumber(this.props.opacity) ? this.props.opacity : 1;
      if (RenderTarget.hasRestrictions() && frame3) {
        Object.assign(style, {
          transform: `translate(${frame3.x}px, ${frame3.y}px) rotate(${rotate.toFixed(4)}deg)`,
          width: `${frame3.width}px`,
          height: `${frame3.height}px`
        });
        if (constraintsEnabled(this.props)) {
          style.position = "absolute";
        }
        const xFactor = frame3.width / (intrinsicWidth || 1);
        const yFactor = frame3.height / (intrinsicHeight || 1);
        innerStyle.transformOrigin = "top left";
        const { zoom, target } = RenderEnvironment;
        if (target === RenderTarget.export) {
          const zoomFactor = zoom > 1 ? zoom : 1;
          innerStyle.transform = `scale(${xFactor * zoomFactor}, ${yFactor * zoomFactor})`;
          innerStyle.zoom = 1 / zoomFactor;
        } else {
          innerStyle.transform = `scale(${xFactor}, ${yFactor})`;
        }
        if (intrinsicWidth && intrinsicHeight) {
          innerStyle.width = intrinsicWidth;
          innerStyle.height = intrinsicHeight;
        }
      } else {
        const { left, right, top, bottom } = this.props;
        Object.assign(style, {
          left,
          right,
          top,
          bottom,
          width,
          height,
          rotate
        });
        Object.assign(innerStyle, {
          left: 0,
          top: 0,
          bottom: 0,
          right: 0,
          position: "absolute"
        });
      }
    }
    render() {
      var _b, _c;
      if (process6.env.NODE_ENV !== "production" && safeWindow["perf"])
        safeWindow["perf"].nodeRender();
      const _a2 = this.props, { id, visible, style, fill, svg, intrinsicHeight, intrinsicWidth, ariaId = "", title, description, layoutId, className, variants, withExternalLayout, innerRef, svgContentId, height, opacity, width } = _a2, rest = __objRest(_a2, ["id", "visible", "style", "fill", "svg", "intrinsicHeight", "intrinsicWidth", "ariaId", "title", "description", "layoutId", "className", "variants", "withExternalLayout", "innerRef", "svgContentId", "height", "opacity", "width"]);
      if (!withExternalLayout && (!visible || !id))
        return null;
      const identifier = (_b = id != null ? id : layoutId) != null ? _b : "svg";
      injectComponentCSSRules();
      const frame3 = this.frame;
      const size2 = frame3 || { width: intrinsicWidth || 100, height: intrinsicHeight || 100 };
      const outerStyle = __spreadProps(__spreadValues({}, style), { imageRendering: "pixelated", flexShrink: 0 });
      const innerStyle = {};
      this.collectLayout(outerStyle, innerStyle);
      collectOpacityFromProps(this.props, outerStyle);
      collectFiltersFromProps(this.props, outerStyle);
      Layer.applyWillChange(this.props, outerStyle, false);
      let fillElement = null;
      if (typeof fill === "string" || Color.isColorObject(fill)) {
        const fillColor = Color.isColorObject(fill) ? fill.initialValue || Color.toRgbString(fill) : fill;
        outerStyle.fill = fillColor;
        outerStyle.color = fillColor;
      } else if (LinearGradient.isLinearGradient(fill)) {
        const gradient = fill;
        const gradientId = `${encodeURI(id || "")}g${LinearGradient.hash(gradient)}`;
        outerStyle.fill = `url(#${gradientId})`;
        const { stops, x1, x2, y1, y2 } = elementPropertiesForLinearGradient(gradient, identifier);
        fillElement = React50.createElement(
          "svg",
          { ref: this.setSVGElement, xmlns: "http://www.w3.org/2000/svg", width: "100%", height: "100%", style: { position: "absolute" } },
          React50.createElement("linearGradient", { id: gradientId, x1, x2, y1, y2 }, stops.map((stop, idx) => {
            return React50.createElement("stop", { key: idx, offset: stop.position, stopColor: stop.color, stopOpacity: stop.alpha });
          }))
        );
      } else if (RadialGradient.isRadialGradient(fill)) {
        const gradient = fill;
        const gradientId = `${encodeURI(id || "")}g${RadialGradient.hash(gradient)}`;
        outerStyle.fill = `url(#${gradientId})`;
        const elementProperties = elementPropertiesForRadialGradient(gradient, identifier);
        fillElement = React50.createElement(
          "svg",
          { ref: this.setSVGElement, xmlns: "http://www.w3.org/2000/svg", width: "100%", height: "100%", style: { position: "absolute" } },
          React50.createElement("radialGradient", { id: gradientId, cy: gradient.centerAnchorY, cx: gradient.centerAnchorX, r: gradient.widthFactor }, elementProperties.stops.map((stop, idx) => {
            return React50.createElement("stop", { key: idx, offset: stop.position, stopColor: stop.color, stopOpacity: stop.alpha });
          }))
        );
      } else if (BackgroundImage.isImageObject(fill)) {
        const imagePattern = imagePatternPropsForFill(fill, size2, identifier);
        if (imagePattern) {
          outerStyle.fill = `url(#${imagePattern.id})`;
          fillElement = React50.createElement(
            "svg",
            { ref: this.setSVGElement, xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", width: "100%", height: "100%", style: { position: "absolute" } },
            React50.createElement(
              "defs",
              null,
              React50.createElement(ImagePatternElement, __spreadValues({}, imagePattern))
            )
          );
        }
      }
      const dataProps = {
        "data-framer-component-type": "SVG"
      };
      const hasTransformTemplate = !frame3;
      if (hasTransformTemplate) {
        Object.assign(dataProps, layoutHintDataPropsForCenter(this.props.center));
      }
      const svgAsBackgroundImage = !fillElement && !outerStyle.fill && !outerStyle.background && !outerStyle.backgroundImage && svg.length < MAX_BACKGROUND_SVG_TEXT_LENGTH && !containsImageReference(svg) && !containsCustomPropertyReference(svg);
      let content = null;
      if (svgAsBackgroundImage) {
        outerStyle.backgroundSize = "100% 100%";
        outerStyle.backgroundImage = `url('data:image/svg+xml;utf8,${encodeURIComponent(svg)}')`;
        sharedSVGManager.unsubscribe(this.previouslyRenderedSVG);
        this.previouslyRenderedSVG = "";
      } else {
        const contentid = svgContentId ? "svg" + svgContentId : null;
        const __html = sharedSVGManager.subscribe(svg, !svgContentId, contentid);
        sharedSVGManager.unsubscribe(this.previouslyRenderedSVG);
        this.previouslyRenderedSVG = svg;
        if (hasBorderRadius(outerStyle)) {
          outerStyle.overflow = "hidden";
        }
        content = React50.createElement(
          React50.Fragment,
          null,
          fillElement,
          React50.createElement("div", {
            key: BackgroundImage.isImageObject(fill) ? fill.src : "",
            className: "svgContainer",
            style: innerStyle,
            ref: this.container,
            dangerouslySetInnerHTML: { __html }
          })
        );
      }
      const MotionComponent = motion10[(_c = this.props.as) != null ? _c : "div"];
      const { href, target, rel, onClick } = this.props;
      const ariaDescriptionId = ariaId + "desc";
      return React50.createElement(
        MotionComponent,
        __spreadValues(__spreadProps(__spreadValues(__spreadValues({}, dataProps), rest), { layoutId, transformTemplate: hasTransformTemplate ? transformTemplate(this.props.center) : void 0, id, ref: innerRef, style: outerStyle, className, variants, tabIndex: this.props.tabIndex, role: title || description ? "img" : void 0, "aria-label": title, "aria-describedby": description ? ariaDescriptionId : void 0 }), { href, target, rel, onClick }),
        content,
        description && React50.createElement("div", { style: VISUALLY_HIDDEN_STYLES, id: ariaDescriptionId }, description)
      );
    }
  }, __publicField(_a, "supportsConstraints", true), __publicField(_a, "defaultSVGProps", {
    left: void 0,
    right: void 0,
    top: void 0,
    bottom: void 0,
    style: void 0,
    _constraints: {
      enabled: true,
      aspectRatio: null
    },
    parentSize: ParentSizeState.Unknown,
    rotation: 0,
    visible: true,
    svg: "",
    shadows: []
  }), __publicField(_a, "defaultProps", __spreadValues(__spreadValues({}, Layer.defaultProps), _a.defaultSVGProps)), _a;
})();
var VISUALLY_HIDDEN_STYLES = {
  clip: "rect(1px, 1px, 1px, 1px)",
  clipPath: "inset(50%)",
  height: "1px",
  width: "1px",
  margin: "-1px",
  overflow: "hidden",
  padding: 0,
  position: "absolute"
};

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/render/presentation/Text.js
import { motion as motion11 } from "framer-motion";
import process7 from "process";
import React52, { useEffect as useEffect18, useRef as useRef16 } from "react";

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/render/fonts/useFontLoadStatus.js
import React51 from "react";
function useFontLoadStatus(fontSelectors = [], timeout = 5e3) {
  const missingFontSelectors = fontSelectors.filter((s2) => !fontStore.isSelectorLoaded(s2));
  const [fontLoadStatus, setFontLoadStatus] = React51.useState(missingFontSelectors.length ? "loading" : "done");
  React51.useEffect(() => {
    if (!missingFontSelectors.length)
      return;
    setFontLoadStatus("loading");
    const timer = setTimeout(() => {
      setFontLoadStatus("timeout");
    }, timeout);
    fontStore.loadWebFontsFromSelectors(missingFontSelectors).then(() => {
      clearTimeout(timer);
      setFontLoadStatus("done");
    });
  }, [fontSelectors.join(", "), missingFontSelectors.join(", ")]);
  return fontLoadStatus;
}

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/render/presentation/Text.js
var Text2 = /* @__PURE__ */ React52.forwardRef(function Text3(props, forwardedRef) {
  var _a, _b;
  const parentSize = useParentSize();
  const layoutId = useLayoutId(props);
  const fallbackLayoutRef = useRef16(null);
  const layoutRef = forwardedRef != null ? forwardedRef : fallbackLayoutRef;
  const { navigate, getRoute } = useRouter();
  const currentRoute = useCurrentRoute();
  useRoutePreloader((_a = props.preload) != null ? _a : []);
  const onCanvas = useIsOnFramerCanvas();
  const matchesCurrentRoute = useLinkMatchesRoute(props.__link);
  const fontLoadStatus = useFontLoadStatus(props.fonts);
  useMeasureLayout(props, layoutRef);
  const { fonts, __fromCanvasComponent } = props;
  const prevFontsRef = useRef16([]);
  const fontsDidChange = !isShallowEqualArray((_b = prevFontsRef.current) != null ? _b : [], fonts != null ? fonts : []);
  prevFontsRef.current = fonts;
  useEffect18(() => {
    if (!fontsDidChange || !fonts)
      return;
    fontStore.loadWebFontsFromSelectors(fonts).then((results) => {
      if (!__fromCanvasComponent || !layoutRef.current || RenderTarget.current() !== RenderTarget.canvas)
        return;
      const didLoadNewFonts = results.some((result) => result.status === "fulfilled" && result.value === LoadFontResult.Loaded);
      if (!didLoadNewFonts)
        return;
      measureClosestComponentContainer(layoutRef.current);
    });
  }, [fonts]);
  const implicitPathVariables = useImplicitPathVariables();
  const interceptPageLinks = React52.useCallback((event) => {
    const anchorElement = findAnchorElement(event.target, layoutRef.current);
    if (event.metaKey || !navigate || !anchorElement)
      return;
    const didNavigate = navigateFromAttributes(navigate, anchorElement, implicitPathVariables);
    if (didNavigate) {
      event.preventDefault();
    }
  }, [navigate, implicitPathVariables]);
  useEffect18(() => {
    var _a2;
    (_a2 = layoutRef.current) == null ? void 0 : _a2.addEventListener("click", interceptPageLinks);
    const ref = layoutRef.current;
    return () => ref == null ? void 0 : ref.removeEventListener("click", interceptPageLinks);
  }, [interceptPageLinks]);
  const rawHTML = React52.useMemo(() => {
    if (!props.rawHTML || onCanvas || !getRoute || !currentRoute)
      return props.rawHTML;
    return replaceFramerPageLinks(props.rawHTML, getRoute, currentRoute, implicitPathVariables);
  }, [props.rawHTML, getRoute, onCanvas, currentRoute, implicitPathVariables]);
  return React52.createElement(TextComponent, __spreadProps(__spreadValues({}, props), { innerRef: layoutRef, layoutId, parentSize, fontLoadStatus, rawHTML, matchesCurrentRoute }));
});
var TextComponent = /* @__PURE__ */ (() => {
  var _a;
  return _a = class extends Layer {
    constructor() {
      super(...arguments);
      __publicField(this, "editorText");
      __publicField(this, "setElement", (element) => {
        if (this.props.innerRef) {
          this.props.innerRef.current = element;
        }
        this.setLayerElement(element);
      });
      /** Used by the ComponentContainerContext */
      __publicField(this, "renderMain", (inCodeComponent) => {
        if (process7.env.NODE_ENV !== "production" && safeWindow["perf"])
          safeWindow["perf"].nodeRender();
        const _a2 = this.props, { font, visible, alignment, willChangeTransform, opacity, id, layoutId, className, transition, variants, name, __fromCanvasComponent, _initialStyle, widthType, heightType, _usesDOMRect, autoSize, style: styleProp, fontLoadStatus, matchesCurrentRoute, preload, tabIndex } = _a2, rest = __objRest(_a2, ["font", "visible", "alignment", "willChangeTransform", "opacity", "id", "layoutId", "className", "transition", "variants", "name", "__fromCanvasComponent", "_initialStyle", "widthType", "heightType", "_usesDOMRect", "autoSize", "style", "fontLoadStatus", "matchesCurrentRoute", "preload", "tabIndex"]);
        if (!visible) {
          return null;
        }
        injectComponentCSSRules();
        const isHidden2 = this.props.isEditable && this.props.environment() === RenderTarget.canvas;
        const justifyContent = convertVerticalAlignment2(this.props.verticalAlignment);
        const style = {
          outline: "none",
          display: "flex",
          flexDirection: "column",
          justifyContent,
          opacity: isHidden2 ? 0 : opacity,
          flexShrink: 0
        };
        if (_initialStyle) {
          for (const key3 in _initialStyle) {
            if (key3.startsWith("--framer")) {
              style[key3] = _initialStyle[key3];
            }
          }
        }
        const dataProps = {
          "data-framer-component-type": "Text",
          "data-framer-name": name
        };
        if (autoSize) {
          dataProps["data-framer-component-text-autosized"] = "true";
        }
        this.collectLayout(style, inCodeComponent);
        collectFiltersFromProps(this.props, style);
        collectTextShadowsForProps(this.props, style);
        if (style.opacity === 1 || style.opacity === void 0) {
          delete style.opacity;
        }
        if (willChangeTransform) {
          forceLayerBackingWithCSSProperties(style);
        }
        let rawHTML = this.props.rawHTML;
        const text = this.getOverrideText() || this.props.text;
        if (isString(text)) {
          if (rawHTML) {
            rawHTML = replaceDraftHTMLWithText(rawHTML, text);
          } else {
            rawHTML = `<p style="font: ${font}">${text}</p>`;
          }
        }
        if (this.props.style) {
          Object.assign(style, this.props.style);
        }
        const centeringTransformTemplate = this.transformTemplate;
        if (centeringTransformTemplate)
          Object.assign(dataProps, layoutHintDataPropsForCenter(this.props.center));
        if (rawHTML) {
          style.lineHeight = "1px";
          style.fontSize = "0px";
          if (RenderTarget.current() === RenderTarget.canvas && fontLoadStatus === "loading") {
            style.visibility = "hidden";
          }
          if (RenderTarget.current() === RenderTarget.canvas && fontLoadStatus === "timeout") {
            style.backgroundColor = "rgba(255, 0, 0, 0.3)";
          }
          Object.assign(style, styleProp);
          if (alignment)
            style["--framer-text-alignment"] = alignment;
          const tabIndexProps = getTabIndexProps(tabIndex);
          return React52.createElement(motion11.div, __spreadProps(__spreadValues(__spreadValues(__spreadValues({ layoutId, id }, tabIndexProps), dataProps), rest), { style, transformTemplate: centeringTransformTemplate, dangerouslySetInnerHTML: { __html: rawHTML }, "data-center": this.props.center, className: cx2(className, matchesCurrentRoute && "isCurrent"), transition, variants, ref: this.setElement }));
        }
      });
    }
    get frame() {
      return calculateRect(this.props, this.props.parentSize || ParentSizeState.Unknown, false);
    }
    getOverrideText() {
      const { _forwardedOverrideId, _forwardedOverrides, id } = this.props;
      const forwardedOverrideId = _forwardedOverrideId != null ? _forwardedOverrideId : id;
      if (forwardedOverrideId && _forwardedOverrides) {
        const text = _forwardedOverrides[forwardedOverrideId];
        if (isString(text)) {
          return text;
        }
      }
    }
    render() {
      return React52.createElement(ComponentContainerContext.Consumer, null, this.renderMain);
    }
    collectLayout(style, inCodeComponent) {
      if (this.props.withExternalLayout)
        return;
      const frame3 = this.frame;
      const { rotation, autoSize, positionSticky, positionStickyTop, positionStickyRight, positionStickyBottom, positionStickyLeft, width: externalWidth, height: externalHeight, _usesDOMRect, positionFixed, positionAbsolute } = this.props;
      const rotate = Animatable.getNumber(rotation);
      const isDOMLayoutAutoSized = _usesDOMRect && (externalWidth === "auto" || externalHeight === "auto");
      if (frame3 && !isDOMLayoutAutoSized && RenderTarget.hasRestrictions()) {
        Object.assign(style, {
          transform: `translate(${frame3.x}px, ${frame3.y}px) rotate(${rotate.toFixed(4)}deg)`,
          // Using “auto” fixes wrapping problems where our size calculation does not work out well when zooming the
          // text (due to rendering differences).
          // TODO: When the `autoSize` prop is removed, it's safe to leave
          // this at `${frame.width}px`, because all auto cases will be
          // handled by DOM layout in the `else` side of the conditional
          width: autoSize ? "auto" : `${frame3.width}px`,
          minWidth: `${frame3.width}px`,
          height: `${frame3.height}px`
        });
      } else {
        const { left, right, top, bottom } = this.props;
        let width;
        let height;
        if (autoSize) {
          width = "auto";
          height = "auto";
        } else {
          if (!isFiniteNumber(left) || !isFiniteNumber(right)) {
            width = externalWidth;
          }
          if (!isFiniteNumber(top) || !isFiniteNumber(bottom)) {
            height = externalHeight;
          }
        }
        Object.assign(style, {
          left,
          right,
          top,
          bottom,
          width,
          height,
          rotate
        });
      }
      const onCanvas = RenderTarget.current() === RenderTarget.canvas;
      if (positionSticky) {
        if (!onCanvas || inCodeComponent) {
          style.position = "sticky";
          style.willChange = "transform";
          style.zIndex = 1;
          style.top = positionStickyTop;
          style.right = positionStickyRight;
          style.bottom = positionStickyBottom;
          style.left = positionStickyLeft;
        }
      } else if (onCanvas && (positionFixed || positionAbsolute)) {
        style.position = "absolute";
      }
    }
    get transformTemplate() {
      const { _usesDOMRect, widthType, heightType, __fromCanvasComponent } = this.props;
      if (this.props.transformTemplate)
        return this.props.transformTemplate;
      const frame3 = this.frame;
      const isDOMLayoutAutoSized = _usesDOMRect && (widthType === DimensionType.Auto || heightType === DimensionType.Auto);
      const hasTransformTemplate = !frame3 || !RenderTarget.hasRestrictions() || __fromCanvasComponent || isDOMLayoutAutoSized;
      if (hasTransformTemplate)
        return transformTemplate(this.props.center);
    }
  }, __publicField(_a, "supportsConstraints", true), __publicField(_a, "defaultTextProps", {
    opacity: void 0,
    left: void 0,
    right: void 0,
    top: void 0,
    bottom: void 0,
    _constraints: {
      enabled: true,
      aspectRatio: null
    },
    rotation: 0,
    visible: true,
    alignment: void 0,
    verticalAlignment: "top",
    shadows: [],
    font: "16px " + deviceFont()
  }), __publicField(_a, "defaultProps", __spreadProps(__spreadValues(__spreadValues({}, Layer.defaultProps), _a.defaultTextProps), {
    isEditable: false,
    environment: RenderTarget.current,
    withExternalLayout: false,
    fontLoadStatus: "loading"
  })), _a;
})();
var linkTag = "(?:<a[^>]*>)?";
var linkClosingTag = "(?:</a>)?";
var outerTag = "<[^>]+>";
var outerClosingTag = "</[^>]+>";
var blockTag = "<(?:div|span)[^>]*>";
var blockClosingTag = "</(?:div|span)>";
var inlineTag = "<[^>]+>";
var inlineClosingTag = "</[^>]+>";
var textContentRegex = new RegExp(
  `^(${linkTag}${outerTag}${blockTag}${inlineTag}).*?(${inlineClosingTag}).*?(${blockClosingTag}${outerClosingTag}${linkClosingTag})$`,
  //                                              ^^^ this is the content we want to replace
  //                                                                      ^^^ this is the content we want to discard
  "s"
  // let the "." also match newlines
);
function replaceDraftHTMLWithText(rawHTML, text) {
  return rawHTML.replace(textContentRegex, (_, openingTags, inlineClosingTag2, closingTags) => openingTags + text + inlineClosingTag2 + "<br>" + closingTags);
}
function convertVerticalAlignment2(verticalAlignment) {
  switch (verticalAlignment) {
    case "top":
      return "flex-start";
    case "center":
      return "center";
    case "bottom":
      return "flex-end";
  }
}
function getTabIndexProps(tabIndex) {
  if (tabIndex === void 0)
    return {};
  return { tabIndex };
}

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/render/presentation/Vector.js
import { motion as motion12 } from "framer-motion";
import process8 from "process";
import React55 from "react";

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/utils/internalId.js
var keys = /* @__PURE__ */ new Map();
var InternalID = class _InternalID {
  constructor(id) {
    __publicField(this, "id");
    __publicField(this, "_link", null);
    __publicField(this, "_urllink", null);
    this.id = id;
  }
  add(str) {
    return _InternalID.forKey(this.id + str);
  }
  toString() {
    return this.id;
  }
  get link() {
    const res = this._link;
    if (res)
      return res;
    return this._link = "#" + this.id;
  }
  get urlLink() {
    const res = this._urllink;
    if (res)
      return res;
    return this._urllink = "url(#" + this.id + ")";
  }
  static forKey(key3) {
    let res = keys.get(key3);
    if (res)
      return res;
    res = new _InternalID("a" + (1e3 + keys.size) + "z");
    keys.set(key3, res);
    return res;
  }
};

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/render/types/PathSegment.js
var PathSegment = class {
  constructor(value) {
    // #region withClassDiscriminator
    // NOTE: this implementation carefully copies the implementation of `withClassDiscriminator`
    // from Vekter. If making changes here, make sure to sync them to `withClassDiscriminator` as well.
    __publicField(this, "__class", "PathSegment");
    // #endregion
    __publicField(this, "x", 0);
    // The anchor point of the segment.
    __publicField(this, "y", 0);
    __publicField(this, "handleMirroring", "straight");
    __publicField(this, "handleOutX", 0);
    // Describes the out tangent of the segment.
    __publicField(this, "handleOutY", 0);
    __publicField(this, "handleInX", 0);
    // Describes the in tangent of the segment.
    __publicField(this, "handleInY", 0);
    __publicField(this, "radius", 0);
    if (value) {
      Object.assign(this, value);
    }
  }
  merge(value) {
    return Object.assign(Object.create(Object.getPrototypeOf(this)), this, value);
  }
};
__publicField(PathSegment, "displayName", "WithClassDiscriminatorMixin(PathSegment)");
PathSegment.prototype.__class = "PathSegment";
(function(PathSegment2) {
  PathSegment2.point = (pathSegment) => {
    return { x: pathSegment.x, y: pathSegment.y };
  };
  PathSegment2.handleOut = (pathSegment) => {
    return { x: pathSegment.handleOutX, y: pathSegment.handleOutY };
  };
  PathSegment2.handleIn = (pathSegment) => {
    return { x: pathSegment.handleInX, y: pathSegment.handleInY };
  };
  PathSegment2.calculatedHandleOut = (pathSegment) => {
    switch (pathSegment.handleMirroring) {
      case "symmetric":
      case "disconnected":
      case "asymmetric":
        return Point.add(PathSegment2.point(pathSegment), PathSegment2.handleOut(pathSegment));
      default:
        return { x: pathSegment.x, y: pathSegment.y };
    }
  };
  PathSegment2.calculatedHandleIn = (pathSegment) => {
    switch (pathSegment.handleMirroring) {
      case "symmetric":
        return Point.subtract(PathSegment2.point(pathSegment), PathSegment2.handleOut(pathSegment));
      case "disconnected":
      case "asymmetric":
        return Point.add(PathSegment2.point(pathSegment), PathSegment2.handleIn(pathSegment));
      default:
        return PathSegment2.point(pathSegment);
    }
  };
  PathSegment2.curveDefault = (points, index) => {
    if (points.length > 2) {
      let pointBefore;
      let pointAfter;
      if (index === 0) {
        pointBefore = points[points.length - 1];
      } else {
        pointBefore = points[index - 1];
      }
      if (index === points.length - 1) {
        pointAfter = points[0];
      } else {
        pointAfter = points[index + 1];
      }
      assert(pointBefore, "pointBefore should be defined");
      assert(pointAfter, "pointAfter should be defined");
      const delta = Point.subtract(PathSegment2.point(pointAfter), PathSegment2.point(pointBefore));
      return { x: delta.x / 4, y: delta.y / 4 };
    }
    return { x: 10, y: 10 };
  };
})(PathSegment || (PathSegment = {}));

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/render/traits/Path.js
function toSVGPath(withPaths, translate = { x: 0, y: 0 }, canvasMode = RenderTarget.canvas) {
  let pathElements = [];
  let paths = [];
  if (Array.isArray(withPaths)) {
    paths = withPaths;
  } else {
    paths = [withPaths];
  }
  paths.forEach((path) => {
    const { pathClosed, pathSegments } = path;
    const segmentCount = pathSegments.length;
    if (segmentCount === 0)
      return "";
    for (let i2 = 0; i2 < segmentCount; i2++) {
      const segment = pathSegments[i2];
      assert(segment, "Path segment must be defined");
      let nextSegment;
      let prevSegment;
      const isFirstSegment = i2 === 0;
      const isLastSegment = i2 === segmentCount - 1;
      if (!isLastSegment) {
        nextSegment = pathSegments[i2 + 1];
      } else if (pathClosed) {
        nextSegment = pathSegments[0];
      }
      if (!isFirstSegment) {
        prevSegment = pathSegments[i2 - 1];
      } else if (pathClosed) {
        prevSegment = pathSegments[segmentCount - 1];
      }
      if (i2 === 0) {
        pathElements.push("M");
      } else if (prevSegment && isStraightCurve(prevSegment, segment)) {
        pathElements.push("L");
      }
      pathElements.push(segment.x + translate.x, segment.y + translate.y);
      if (nextSegment && !isStraightCurve(segment, nextSegment)) {
        const handleOut = PathSegment.calculatedHandleOut(segment);
        const handleIn = PathSegment.calculatedHandleIn(nextSegment);
        pathElements.push("C", handleOut.x + translate.x, handleOut.y + translate.y, handleIn.x + translate.x, handleIn.y + translate.y);
      }
      if (isLastSegment && nextSegment) {
        if (isStraightCurve(segment, nextSegment)) {
          pathElements.push("Z");
        } else {
          pathElements.push(nextSegment.x + translate.x, nextSegment.y + translate.y, "Z");
        }
      }
    }
  });
  if (canvasMode === RenderTarget.export || canvasMode === RenderTarget.preview) {
    pathElements = pathElements.map((value) => isFiniteNumber(value) ? roundedNumberString(value, 3) : value);
  }
  return pathElements.join(" ");
}
function isStraightCurve(fromSegment, toSegment) {
  const fromStraight = fromSegment.handleMirroring === "straight" || fromSegment.handleOutX === 0 && fromSegment.handleOutY === 0;
  const toStraight = toSegment.handleMirroring === "straight" || toSegment.handleInX === 0 && toSegment.handleInY === 0;
  return fromStraight && toStraight;
}

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/render/types/svgElementAttributeDefaults.js
var svgElementAttributeDefaults = {
  stroke: "none",
  strokeWidth: 1,
  strokeLinecap: "butt",
  strokeLinejoin: "miter",
  strokeMiterlimit: 4,
  strokeDasharray: "0",
  strokeDashoffset: 0,
  strokeOpacity: 1,
  fill: "black",
  fillRule: "nonzero",
  fillOpacity: 1
};

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/render/utils/createTransformValues.js
function createTransformValues(baseTransform, mode) {
  let { x, y } = baseTransform;
  const { width, height, rotation } = baseTransform;
  if (mode === "resetXYKeepFraction") {
    x = x - Math.floor(x);
    y = y - Math.floor(y);
  } else if (mode === "resetXY") {
    x = 0;
    y = 0;
  }
  return { x, y, width, height, rotation };
}
function getTransformMode(isRootVectorNode, includeTransform) {
  if (includeTransform !== void 0) {
    if (includeTransform) {
      return "asIs";
    }
  } else {
    if (!isRootVectorNode) {
      return "asIs";
    }
  }
  if (isRootVectorNode) {
    return "resetXYKeepFraction";
  } else {
    return "resetXY";
  }
}
function transformValues2(rect, rotation, isRootVectorNode, includeTransform) {
  const transformMode = getTransformMode(isRootVectorNode, includeTransform);
  const baseTransform = __spreadProps(__spreadValues({}, rect), { rotation });
  const transform2 = createTransformValues(baseTransform, transformMode);
  return transform2;
}

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/render/utils/transformString.js
function transformString(transform2) {
  if (transform2 === void 0) {
    return void 0;
  }
  const { x, y, rotation, width, height } = transform2;
  let result;
  if (x !== 0 || y !== 0) {
    result = `translate(${roundedNumberString(x, 3)} ${roundedNumberString(y, 3)})`;
  }
  if (rotation !== 0) {
    const roundedRotation = roundedNumberString(rotation, 4);
    const roundedWidth = roundedNumberString(width / 2, 3);
    const roundedHeight = roundedNumberString(height / 2, 3);
    const rotationString = `rotate(${roundedRotation} ${roundedWidth} ${roundedHeight})`;
    result = result ? `${result} ${rotationString}` : rotationString;
  }
  return result;
}

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/render/presentation/GradientElement.js
import React53, { Component as Component4 } from "react";
var LinearGradientElement = class extends Component4 {
  render() {
    const { id, stops, x1, x2, y1, y2 } = this.props;
    return React53.createElement("linearGradient", { id, x1, x2, y1, y2 }, stops.map((stop, idx) => {
      return React53.createElement("stop", { key: idx, offset: stop.position, stopColor: stop.color, stopOpacity: stop.alpha });
    }));
  }
};
var RadialGradientElement = class extends Component4 {
  render() {
    const { centerAnchorX, centerAnchorY, id, widthFactor, heightFactor, stops } = this.props;
    return React53.createElement("radialGradient", { id, cy: centerAnchorY, cx: centerAnchorX, r: widthFactor, gradientTransform: `translate(${centerAnchorX}, ${centerAnchorY}) scale(1 ${heightFactor / widthFactor}) translate(-${centerAnchorX}, -${centerAnchorY})` }, stops.map((stop, idx) => {
      return React53.createElement("stop", { key: idx, offset: stop.position, stopColor: stop.color, stopOpacity: stop.alpha });
    }));
  }
};

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/render/presentation/SVGRoot.js
import React54, { Component as Component5 } from "react";
var SVGRoot = class extends Component5 {
  render() {
    const { children, frame: frame3, innerRef } = this.props;
    const { width, height } = frame3;
    const fx = Math.floor(frame3.x);
    const fy = Math.floor(frame3.y);
    const svgStyle = {
      position: "absolute",
      width: Math.ceil(width),
      height: Math.ceil(height),
      overflow: "visible",
      display: "block",
      transform: `translate(${fx}px, ${fy}px)`
    };
    Layer.applyWillChange(this.props, svgStyle, false);
    return React54.createElement("svg", { width: "100%", height: "100%", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", style: svgStyle, ref: innerRef }, children);
  }
};

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/render/presentation/Vector.js
var Vector = /* @__PURE__ */ (() => {
  var _a;
  return _a = class extends Layer {
    render() {
      var _a2, _b;
      if (process8.env.NODE_ENV !== "production" && safeWindow["perf"])
        safeWindow["perf"].nodeRender();
      const { opacity, calculatedPath, d, insideStroke, shapeId, strokeEnabled, strokeClipId, strokeWidth, idAttribute, rect, shadows, strokeAlpha, name, includeTransform, isRootVectorNode, rotation, id, lineCap, lineJoin, strokeColor, strokeMiterLimit, strokeDashArray, strokeDashOffset, fill, variants, transition } = this.props;
      if (!id || !shapeId || !strokeClipId)
        return null;
      const rotate = (_b = (_a2 = this.props.rotate) != null ? _a2 : rotation) != null ? _b : 0;
      const { target } = RenderEnvironment;
      const transform2 = transformValues2(rect, rotate, isRootVectorNode, includeTransform);
      let vectorFill;
      let fillAlpha = 0;
      let imagePattern;
      let linearGradient;
      let radialGradient;
      if (typeof fill === "string" || Color.isColorObject(fill)) {
        const fillColor = Color.isColorObject(fill) ? fill.initialValue || Color.toRgbString(fill) : fill;
        if (fillColor !== "transparent") {
          vectorFill = fillColor;
          fillAlpha = ConvertColor.getAlpha(vectorFill);
        }
      } else if (LinearGradient.isLinearGradient(fill)) {
        linearGradient = elementPropertiesForLinearGradient(fill, id);
        vectorFill = `url(#${linearGradient.id})`;
        fillAlpha = 1;
      } else if (RadialGradient.isRadialGradient(fill)) {
        radialGradient = elementPropertiesForRadialGradient(fill, id);
        vectorFill = `url(#${radialGradient.id})`;
        fillAlpha = 1;
      } else if (BackgroundImage.isImageObject(fill)) {
        imagePattern = imagePatternPropsForFill(fill, transform2, id);
        if (imagePattern) {
          vectorFill = `url(#${imagePattern.id})`;
          fillAlpha = 1;
        }
      }
      if (vectorFill === svgElementAttributeDefaults.fill) {
        vectorFill = void 0;
      }
      if (vectorFill === void 0) {
        vectorFill = "transparent";
      }
      const fillEnabled = vectorFill !== void 0 && vectorFill !== "transparent" && fillAlpha !== 0;
      if (!fillEnabled && !strokeEnabled) {
        fillAlpha = 1;
      }
      let mainElement;
      let strokeClipPath = null;
      let shapeReference = null;
      let strokeElement = null;
      let pathTranslate;
      let elementTransform;
      const translatePaths = target === RenderTarget.export;
      if (transform2.rotation === 0 && translatePaths) {
        pathTranslate = transform2;
      } else {
        pathTranslate = { x: 0, y: 0 };
        elementTransform = transformString(transform2);
      }
      const pathAttributes = {
        d: d != null ? d : toSVGPath(calculatedPath, pathTranslate, target),
        transform: elementTransform
      };
      const svgStrokeAttributes = {};
      if (strokeEnabled && strokeWidth !== 0) {
        svgStrokeAttributes.strokeWidth = strokeWidth;
        svgStrokeAttributes.stroke = strokeColor;
        svgStrokeAttributes.strokeLinecap = lineCap;
        svgStrokeAttributes.strokeLinejoin = lineJoin;
        if (lineJoin === "miter") {
          svgStrokeAttributes.strokeMiterlimit = strokeMiterLimit;
        }
        svgStrokeAttributes.strokeDasharray = strokeDashArray;
        if (strokeDashOffset !== 0) {
          svgStrokeAttributes.strokeDashoffset = strokeDashOffset;
        }
      }
      for (const key3 in svgElementAttributeDefaults) {
        if (svgStrokeAttributes[key3] === svgElementAttributeDefaults[key3]) {
          svgStrokeAttributes[key3] = void 0;
        }
      }
      const internalShapeId = InternalID.forKey(shapeId);
      const internalStrokeClipId = InternalID.forKey(strokeClipId);
      const shadow = shadowForShape(shadows, rect, internalShapeId, fillAlpha, strokeAlpha, strokeWidth, internalStrokeClipId, svgStrokeAttributes);
      const currentName = target === RenderTarget.preview ? name || void 0 : void 0;
      if (shadow.insetElement !== null || shadow.outsetElement !== null || insideStroke) {
        pathAttributes.id = internalShapeId.id;
        shapeReference = React55.createElement(motion12.path, __spreadProps(__spreadValues({}, __spreadValues({}, pathAttributes)), { variants, transition }));
        if (shadow.needsStrokeClip || insideStroke) {
          strokeClipPath = React55.createElement(
            "clipPath",
            { id: internalStrokeClipId.id },
            React55.createElement("use", { xlinkHref: internalShapeId.link })
          );
        }
        if (shadow.insetElement !== null && strokeEnabled && strokeWidth && strokeWidth > 0) {
          mainElement = React55.createElement("use", { xlinkHref: internalShapeId.link, fill: vectorFill, strokeOpacity: "0", name: currentName });
          strokeElement = React55.createElement("use", __spreadProps(__spreadValues({ xlinkHref: internalShapeId.link, clipPath: internalStrokeClipId.urlLink, fill: "transparent" }, svgStrokeAttributes), { strokeWidth }));
        } else {
          mainElement = React55.createElement("use", __spreadProps(__spreadValues({ xlinkHref: internalShapeId.link, fill: vectorFill, clipPath: internalStrokeClipId.urlLink }, svgStrokeAttributes), { strokeWidth, name: currentName }));
        }
      } else {
        pathAttributes.id = idAttribute;
        mainElement = React55.createElement(motion12.path, __spreadProps(__spreadValues({}, __spreadValues(__spreadProps(__spreadValues({}, pathAttributes), {
          fill: vectorFill
        }), svgStrokeAttributes)), { name: currentName, variants, transition }));
      }
      const imagePatternElement = imagePattern ? React55.createElement(ImagePatternElement, __spreadValues({}, imagePattern)) : void 0;
      let gradient;
      if (linearGradient) {
        gradient = React55.createElement(LinearGradientElement, __spreadValues({}, linearGradient));
      } else if (radialGradient) {
        gradient = React55.createElement(RadialGradientElement, __spreadValues({}, radialGradient));
      }
      let defs = null;
      if (shapeReference || strokeClipPath || shadow.definition && shadow.definition.length || gradient || imagePatternElement) {
        defs = React55.createElement(
          "defs",
          null,
          shapeReference,
          strokeClipPath,
          shadow.definition,
          gradient,
          imagePatternElement
        );
      }
      const opacityValue = opacity != null ? opacity : variants ? 1 : void 0;
      if (defs === null && shadow.outsetElement === null && shadow.insetElement === null && strokeElement === null) {
        mainElement = React55.createElement(motion12.path, __spreadProps(__spreadValues({}, __spreadValues(__spreadProps(__spreadValues({}, pathAttributes), {
          fill: vectorFill
        }), svgStrokeAttributes)), { opacity: opacityValue, variants, transition, name: currentName }));
        return this.renderElement(mainElement);
      } else {
        return this.renderElement(React55.createElement(
          motion12.g,
          { opacity: opacityValue, variants, transition },
          defs,
          shadow.outsetElement,
          mainElement,
          shadow.insetElement,
          strokeElement
        ));
      }
    }
    renderElement(element) {
      var _a2, _b;
      const { isRootVectorNode, width, height, rect, willChangeTransform, includeTransform } = this.props;
      const frame3 = (_b = (_a2 = this.props.frame) != null ? _a2 : rect) != null ? _b : { x: 0, y: 0, width: 100, height: 100 };
      if (!isRootVectorNode)
        return element;
      if (includeTransform)
        return element;
      return React55.createElement(SVGRoot, { frame: frame3, width, height, willChangeTransform, innerRef: this.setLayerElement }, element);
    }
  }, __publicField(_a, "defaultVectorProps", {
    isRootVectorNode: false,
    name: null,
    includeTransform: void 0,
    defaultFillColor: void 0,
    defaultStrokeColor: void 0,
    defaultStrokeWidth: void 0,
    defaultStrokeAlignment: "center",
    width: 100,
    height: 100,
    rotation: 0,
    rotate: void 0,
    frame: void 0,
    opacity: void 0,
    calculatedPath: [],
    d: void 0,
    shapeId: void 0,
    insideStroke: false,
    strokeEnabled: true,
    strokeClipId: void 0,
    strokeWidth: void 0,
    idAttribute: void 0,
    transition: void 0,
    shadows: [],
    strokeAlpha: 1,
    rect: { x: 0, y: 0, width: 0, height: 0 },
    lineCap: "butt",
    strokeColor: "#0AF",
    lineJoin: "miter",
    strokeMiterLimit: 4,
    strokeDashArray: "0",
    strokeDashOffset: 0,
    fill: "rgba(0,170,255,0.5)"
  }), __publicField(_a, "defaultProps", __spreadValues(__spreadValues({}, Layer.defaultProps), _a.defaultVectorProps)), _a;
})();

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/render/presentation/VectorGroup.js
import process9 from "process";
import React56 from "react";
var VectorGroup = /* @__PURE__ */ (() => {
  var _a;
  return _a = class extends Layer {
    render() {
      if (process9.env.NODE_ENV !== "production" && safeWindow["perf"])
        safeWindow["perf"].nodeRender();
      const { id, name: nameProp, opacity, visible, targetName, defaultName, children, includeTransform, x, y, width, height, rotation, isRootVectorNode } = this.props;
      if (!visible)
        return null;
      const { target } = RenderEnvironment;
      const rect = { x, y, width, height };
      const transform2 = transformValues2(rect, rotation, isRootVectorNode, includeTransform);
      const addNames = target === RenderTarget.preview;
      let name = void 0;
      if (addNames) {
        if (targetName) {
          name = targetName;
        } else if (nameProp) {
          name = nameProp;
        } else {
          name = defaultName;
        }
      }
      return this.renderElement(React56.createElement("g", __spreadValues({ transform: transformString(transform2) }, { id, name, opacity }), children));
    }
    renderElement(element) {
      const { isRootVectorNode, width, height, frame: frame3, willChangeTransform, includeTransform } = this.props;
      if (!isRootVectorNode)
        return element;
      if (includeTransform)
        return element;
      return React56.createElement(SVGRoot, { frame: frame3, width, height, willChangeTransform, innerRef: this.setLayerElement }, element);
    }
  }, __publicField(_a, "defaultVectorGroupProps", {
    name: void 0,
    opacity: void 0,
    visible: true,
    x: 0,
    y: 0,
    rotation: 0,
    width: 100,
    height: 100,
    targetName: void 0,
    defaultName: "",
    isRootVectorNode: false,
    includeTransform: void 0,
    frame: { x: 0, y: 0, width: 100, height: 100 }
  }), __publicField(_a, "defaultProps", __spreadValues(__spreadValues({}, Layer.defaultProps), _a.defaultVectorGroupProps)), _a;
})();

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/utils/addFonts.js
function addFonts(component, fonts) {
  Object.assign(component, { fonts });
}
function getFonts(component) {
  const fonts = component.fonts;
  return fonts || [];
}

// ../../node_modules/.pnpm/framer@2.4.1_framer-motion@10.18.0_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-d_b8d0a96c21e4e4cf5ada9f664300441f/node_modules/framer/build/index.js
function Frame() {
  throw new Error("<Frame> has been deprecated. Please use <motion.div>");
}

// src/WebUI/Icons.tsx
import { jsx as jsx11, jsxs as jsxs10 } from "react/jsx-runtime";
function Icons({ iconName, color: color2 }) {
  return /* @__PURE__ */ jsxs10("div", { style: containerStyle, children: [
    iconName === "framer" && /* @__PURE__ */ jsx11(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        fill: color2,
        stroke: color2,
        display: "inline-block",
        viewBox: "0 0 256 256",
        style: {
          WebkitUserSelect: "none",
          MozUserSelect: "none",
          msUserSelect: "none",
          userSelect: "none",
          width: "100%",
          height: "100%",
          WebkitFlexShrink: "0",
          flexShrink: "0"
        },
        children: /* @__PURE__ */ jsx11("path", { d: "M200 104h-51l56.27 50a8 8 0 01-5.27 14h-64v64a8 8 0 01-13.66 5.66l-72-72A8 8 0 0148 160V96a8 8 0 018-8h51L50.69 38A8 8 0 0156 24h144a8 8 0 018 8v64a8 8 0 01-8 8z" })
      }
    ),
    iconName === "figma" && /* @__PURE__ */ jsx11(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        fill: color2,
        stroke: color2,
        display: "inline-block",
        viewBox: "0 0 256 256",
        style: {
          WebkitUserSelect: "none",
          MozUserSelect: "none",
          msUserSelect: "none",
          userSelect: "none",
          width: "100%",
          height: "100%",
          WebkitFlexShrink: "0",
          flexShrink: "0"
        },
        children: /* @__PURE__ */ jsx11("path", { d: "M184 96a40 40 0 00-24-72H88a40 40 0 00-24 72 40 40 0 001.37 65A44 44 0 10136 196v-36a40 40 0 1048-64zm-48-56h24a24 24 0 010 48h-24zm24 112a24 24 0 1124-24 24 24 0 01-24 24z" })
      }
    ),
    iconName === "github" && /* @__PURE__ */ jsxs10(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: "30",
        height: "30",
        fill: "none",
        viewBox: "0 0 30 30",
        children: [
          /* @__PURE__ */ jsx11(
            "path",
            {
              fill: color2,
              d: "M19.949 28v-3.726a4.41 4.41 0 00-1.205-3.388c4.025-.455 8.256-2 8.256-9.088a7.11 7.11 0 00-1.923-4.869 6.663 6.663 0 00-.115-4.894s-1.513-.454-5.013 1.921a16.959 16.959 0 00-8.975 0c-3.5-2.375-5.012-1.921-5.012-1.921a6.658 6.658 0 00-.116 4.894 7.113 7.113 0 00-1.923 4.908c0 7.036 4.231 8.581 8.256 9.088a4.406 4.406 0 00-1.205 3.349V28h8.975z"
            }
          ),
          /* @__PURE__ */ jsx11(
            "path",
            {
              stroke: color2,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: "2",
              d: "M10.974 25.404c-3.846 1.263-7.051 0-8.974-3.895"
            }
          )
        ]
      }
    )
  ] });
}
var containerStyle = {
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden"
};
Icons.propertyControls = {
  color: { type: ControlType.Color },
  iconName: {
    type: ControlType.Enum,
    options: ["framer", "figma", "github"]
  }
};

// src/WebUI/SimpleSlider.tsx
import {
  animate as animate2,
  transform,
  motion as motion13,
  useTransform
} from "framer-motion";
import { useRef as useRef17, useState as useState11, useCallback as useCallback9 } from "react";
import {
  isMotionValue as isMotionValue2,
  useOnChange,
  useAutoMotionValue
} from "https://framer.com/m/framer/default-utils.js@^0.45.0";
import { throttle } from "https://framer.com/m/framer/lodash.js@0.3.0";
import { jsx as jsx12, jsxs as jsxs11 } from "react/jsx-runtime";
var SimpleSlider = withCSS(
  function Slider2(props) {
    const {
      value: valueProp,
      trackHeight,
      fillColor,
      focusColor,
      min,
      max,
      onChange,
      onChangeLive,
      onMax,
      onMin,
      trackColor,
      trackRadius,
      knobSize,
      knobColor,
      constrainKnob,
      shadow,
      shouldAnimateChange,
      transition,
      overdrag,
      knobSetting,
      style
    } = props;
    const [hovered, setHovered] = useState11(false);
    const [focused, setFocused] = useState11(false);
    const onCanvas = RenderTarget.current() === RenderTarget.canvas;
    const shouldAnimate = shouldAnimateChange && !onCanvas;
    const isConstrained = constrainKnob && knobSetting === "Show" /* Show */;
    const showKnob = knobSetting !== "Hide" /* Hide */;
    const input = useRef17();
    const knobPadding = 8;
    const updateValue = useCallback9(
      (newVal, target) => {
        throttledInputUpdate(newVal);
        if (onChange) onChange(newVal);
        if (shouldAnimate) animate2(target, newVal, transition);
        else requestAnimationFrame(() => target.set(newVal));
      },
      [transition, shouldAnimate, onChange]
    );
    const value = useAutoMotionValue(valueProp, {
      onChange: updateValue,
      transform: (value2) => transform(value2, [0, 100], [min, max])
    });
    const knobX = useTransform(value, [min, max], ["0%", "100%"]);
    const normalizedValue = useTransform(value, [min, max], [0, 1]);
    const throttledInputUpdate = useCallback9(
      throttle((val) => {
        var _a;
        if ((_a = input.current) == null ? void 0 : _a.value) input.current.value = val;
      }, 100),
      [input]
    );
    useOnChange(value, (val) => {
      if (isMotionValue2(valueProp)) throttledInputUpdate(val);
      if (onMax && val >= max) onMax();
      if (onMin && val <= min) onMin();
      if (onChangeLive) onChangeLive(val);
    });
    const handleInputChange = (e2) => {
      updateValue(parseFloat(e2.target.value), value);
    };
    const handleMouseDown = (e2) => {
      if (parseFloat(e2.target.value) !== 0)
        updateValue(parseFloat(e2.target.value), value);
    };
    const handleMouseUp = () => {
    };
    const totalKnobWidth = showKnob ? knobSize + knobPadding : knobPadding;
    const totalHeight = Math.max(knobSize + knobPadding, trackHeight);
    return /* @__PURE__ */ jsxs11(
      "div",
      {
        className: "framer-default-slider",
        onMouseEnter: () => setHovered(true),
        onMouseLeave: () => setHovered(false),
        style: __spreadProps(__spreadValues({
          position: "relative"
        }, style), {
          alignItems: "center",
          justifyContent: "flex-start",
          border: `0px solid ${focusColor}`,
          "--framer-default-slider-height": totalHeight,
          "--framer-default-slider-width": totalKnobWidth
        }),
        children: [
          /* @__PURE__ */ jsx12(
            "input",
            {
              ref: input,
              style: __spreadValues(__spreadProps(__spreadValues({
                flexShrink: 0,
                minHeight: totalHeight,
                opacity: 0,
                margin: 0,
                display: "flex"
              }, style), {
                WebkitTapHighlightColor: "rgba(0, 0, 0, 0)"
              }), !isConstrained && {
                width: `calc(100% + ${totalKnobWidth}px)`,
                marginLeft: -totalKnobWidth / 2
              }),
              onFocus: () => setFocused(true),
              onBlur: () => setFocused(false),
              type: "range",
              min,
              max,
              defaultValue: -1,
              step: "any",
              onChange: handleInputChange,
              onMouseDown: handleMouseDown,
              onMouseUp: handleMouseUp
            }
          ),
          /* @__PURE__ */ jsx12(
            "div",
            {
              style: {
                background: trackColor,
                position: "absolute",
                top: `calc(50% - ${Math.ceil(trackHeight / 2)}px)`,
                borderRadius: trackRadius,
                display: "flex",
                height: trackHeight,
                width: "100%",
                transformOrigin: "left",
                pointerEvents: "none",
                overflow: "hidden"
              },
              children: /* @__PURE__ */ jsx12(
                motion13.div,
                {
                  style: {
                    height: trackHeight,
                    width: "100%",
                    background: fillColor,
                    scaleX: normalizedValue,
                    position: "absolute",
                    top: `calc(50% - ${Math.ceil(trackHeight / 2)}px)`,
                    transformOrigin: "left",
                    pointerEvents: "none"
                  }
                }
              )
            }
          ),
          /* @__PURE__ */ jsx12(
            motion13.div,
            {
              style: __spreadValues({
                x: knobX,
                position: "absolute",
                display: "flex",
                width: "100%",
                top: `calc(50% - ${Math.floor(knobSize / 2)}px)`,
                pointerEvents: "none"
              }, isConstrained ? {
                width: `calc(100% - ${knobSize}px`,
                left: 0
              } : {
                width: `100%`,
                left: -knobSize / 2
              }),
              children: /* @__PURE__ */ jsx12(
                motion13.div,
                {
                  initial: false,
                  animate: {
                    scale: hovered && knobSetting === "Hover" /* Hover */ || knobSetting === "Show" /* Show */ ? 1 : 0
                  },
                  transition: {
                    type: "spring",
                    stiffness: 900,
                    damping: 40
                  },
                  style: {
                    transformOrigin: "50% 50%",
                    width: knobSize,
                    height: knobSize,
                    borderRadius: "50%",
                    background: knobColor,
                    pointerEvents: "none",
                    boxShadow: `0px 1px 2px 0px ${shadow}, 
                                0px 2px 4px 0px ${shadow}, 
                                0px 4px 8px 0px ${shadow}`
                  }
                }
              )
            }
          )
        ]
      }
    );
  },
  [
    ".framer-default-slider input[type=range] {  width: 100%; height: 100% background:transparent margin: 0;}",
    ".framer-default-slider input[type=range]:focus { outline: none; }",
    ".framer-default-slider input[type=range]::-ms-track { width: 100%; cursor: pointer; background: transparent; border-color: transparent; color: transparent; }",
    ".framer-default-slider input[type=range]::-webkit-slider-thumb { height: var(--framer-default-slider-height, 0px); width: var(--framer-default-slider-width, 0px); border-radius: 0;  background: none; }",
    ".framer-default-slider input[type=range]::-moz-range-thumb { height: var(--framer-default-slider-height, 0px); width: var(--framer-default-slider-width, 0px); border-radius: 0;  background: none; }",
    ".framer-default-slider input[type=range]::-ms-thumb  { height: var(--framer-default-slider-height, 0px); width: var(--framer-default-slider-width, 0px); border-radius: 0;  background: none; }"
  ]
);
SimpleSlider.displayName = "SimpleSlider";
SimpleSlider.defaultProps = {
  height: 20,
  width: 200,
  trackHeight: 4,
  fillColor: "#09F",
  trackColor: "#DDD",
  knobColor: "#FFF",
  focusColor: "rgba(0, 153, 255,0)",
  shadow: "rgba(0,0,0,0.1)",
  knobSize: 20,
  overdrag: true,
  min: 0,
  max: 100,
  value: 50,
  trackRadius: 5,
  knobSetting: "Show" /* Show */,
  constrainKnob: false,
  transition: {
    type: "spring",
    delay: 0,
    stiffness: 750,
    damping: 50
  },
  shouldAnimateChange: true
};
SimpleSlider.propertyControls = {
  fillColor: {
    title: "Tint",
    type: ControlType.Color
  },
  trackColor: {
    title: "Track",
    type: ControlType.Color
  },
  knobColor: {
    title: "Knob",
    type: ControlType.Color
  },
  shadow: { type: ControlType.Color, title: "Shadow" },
  // focusColor: {
  //     title: "Focus",
  //     type: ControlType.Color,
  // },
  shouldAnimateChange: {
    type: ControlType.Boolean,
    title: "Changes",
    enabledTitle: "Animate",
    disabledTitle: "Instant"
  },
  transition: {
    type: ControlType.Transition,
    defaultValue: SimpleSlider.defaultProps.transition
  },
  knobSetting: {
    type: ControlType.Enum,
    displaySegmentedControl: true,
    title: "Knob",
    options: ["Hide", "Hover", "Show"]
  },
  constrainKnob: {
    type: ControlType.Boolean,
    title: "Constrain",
    enabledTitle: "Yes",
    disabledTitle: "No",
    hidden: ({ knobSetting }) => knobSetting !== "Show" /* Show */
  },
  knobSize: {
    type: ControlType.Number,
    title: "Knob",
    min: 10,
    max: 100,
    hidden: ({ knobSetting }) => knobSetting === "Hide" /* Hide */
  },
  value: {
    type: ControlType.Number,
    title: "Value",
    min: 0,
    max: 100,
    unit: "%"
  },
  trackHeight: {
    title: "Height",
    type: ControlType.Number,
    min: 0
  },
  min: {
    title: "Min",
    type: ControlType.Number,
    displayStepper: true
  },
  trackRadius: {
    type: ControlType.Number,
    displayStepper: true,
    min: 0,
    max: 200,
    title: "Radius"
  },
  max: {
    title: "Max",
    type: ControlType.Number,
    displayStepper: true
  },
  onChange: { type: ControlType.EventHandler },
  onMax: { type: ControlType.EventHandler },
  onMin: { type: ControlType.EventHandler }
};
export {
  Button,
  ColorInput,
  DoubleNumberInput,
  Icons,
  InputTitle,
  RangeSlider,
  SimpleSlider,
  Slider,
  TextAnimation,
  TextHover,
  TripleNumberInput,
  useUIStore
};
/*! Bundled license information:

framer/build/utils/isPropValid.js:
  (**
   * @license Emotion v11.0.0
   * MIT License
   *
   * Copyright (c) Emotion team and other contributors
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in all
   * copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
   *)
*/
