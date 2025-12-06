import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-5BEQP2BQ.mjs";

// ../../node_modules/.pnpm/@mediapipe+tasks-vision@0.10.17/node_modules/@mediapipe/tasks-vision/vision_bundle.mjs
var t = "undefined" != typeof self ? self : {};
function e(e2, n2) {
  t: {
    for (var r2 = ["CLOSURE_FLAGS"], i2 = t, s2 = 0; s2 < r2.length; s2++) if (null == (i2 = i2[r2[s2]])) {
      r2 = null;
      break t;
    }
    r2 = i2;
  }
  return null != (e2 = r2 && r2[e2]) ? e2 : n2;
}
function n() {
  throw Error("Invalid UTF8");
}
function r(t2, e2) {
  return e2 = String.fromCharCode.apply(null, e2), null == t2 ? e2 : t2 + e2;
}
var i;
var s;
var o = "undefined" != typeof TextDecoder;
var a;
var h = "undefined" != typeof TextEncoder;
function c(t2) {
  if (h) t2 = (a || (a = new TextEncoder())).encode(t2);
  else {
    let n2 = 0;
    const r2 = new Uint8Array(3 * t2.length);
    for (let i2 = 0; i2 < t2.length; i2++) {
      var e2 = t2.charCodeAt(i2);
      if (e2 < 128) r2[n2++] = e2;
      else {
        if (e2 < 2048) r2[n2++] = e2 >> 6 | 192;
        else {
          if (e2 >= 55296 && e2 <= 57343) {
            if (e2 <= 56319 && i2 < t2.length) {
              const s2 = t2.charCodeAt(++i2);
              if (s2 >= 56320 && s2 <= 57343) {
                e2 = 1024 * (e2 - 55296) + s2 - 56320 + 65536, r2[n2++] = e2 >> 18 | 240, r2[n2++] = e2 >> 12 & 63 | 128, r2[n2++] = e2 >> 6 & 63 | 128, r2[n2++] = 63 & e2 | 128;
                continue;
              }
              i2--;
            }
            e2 = 65533;
          }
          r2[n2++] = e2 >> 12 | 224, r2[n2++] = e2 >> 6 & 63 | 128;
        }
        r2[n2++] = 63 & e2 | 128;
      }
    }
    t2 = n2 === r2.length ? r2 : r2.subarray(0, n2);
  }
  return t2;
}
var u;
var l = e(610401301, false);
var f = e(653718497, e(1, true));
var d = e(660014094, false);
var p = t.navigator;
function g(t2) {
  return !!l && (!!u && u.brands.some(({ brand: e2 }) => e2 && -1 != e2.indexOf(t2)));
}
function m(e2) {
  var n2;
  return (n2 = t.navigator) && (n2 = n2.userAgent) || (n2 = ""), -1 != n2.indexOf(e2);
}
function y() {
  return !!l && (!!u && u.brands.length > 0);
}
function _() {
  return y() ? g("Chromium") : (m("Chrome") || m("CriOS")) && !(!y() && m("Edge")) || m("Silk");
}
function v(t2) {
  return v[" "](t2), t2;
}
u = p && p.userAgentData || null, v[" "] = function() {
};
var E = !y() && (m("Trident") || m("MSIE"));
!m("Android") || _(), _(), m("Safari") && (_() || !y() && m("Coast") || !y() && m("Opera") || !y() && m("Edge") || (y() ? g("Microsoft Edge") : m("Edg/")) || y() && g("Opera"));
var w = {};
var T = null;
function A(t2) {
  var e2 = t2.length, n2 = 3 * e2 / 4;
  n2 % 3 ? n2 = Math.floor(n2) : -1 != "=.".indexOf(t2[e2 - 1]) && (n2 = -1 != "=.".indexOf(t2[e2 - 2]) ? n2 - 2 : n2 - 1);
  var r2 = new Uint8Array(n2), i2 = 0;
  return function(t3, e3) {
    function n3(e4) {
      for (; r3 < t3.length; ) {
        var n4 = t3.charAt(r3++), i4 = T[n4];
        if (null != i4) return i4;
        if (!/^[\s\xa0]*$/.test(n4)) throw Error("Unknown base64 encoding at char: " + n4);
      }
      return e4;
    }
    b();
    for (var r3 = 0; ; ) {
      var i3 = n3(-1), s2 = n3(0), o2 = n3(64), a2 = n3(64);
      if (64 === a2 && -1 === i3) break;
      e3(i3 << 2 | s2 >> 4), 64 != o2 && (e3(s2 << 4 & 240 | o2 >> 2), 64 != a2 && e3(o2 << 6 & 192 | a2));
    }
  }(t2, function(t3) {
    r2[i2++] = t3;
  }), i2 !== n2 ? r2.subarray(0, i2) : r2;
}
function b() {
  if (!T) {
    T = {};
    for (var t2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), e2 = ["+/=", "+/", "-_=", "-_.", "-_"], n2 = 0; n2 < 5; n2++) {
      var r2 = t2.concat(e2[n2].split(""));
      w[n2] = r2;
      for (var i2 = 0; i2 < r2.length; i2++) {
        var s2 = r2[i2];
        void 0 === T[s2] && (T[s2] = i2);
      }
    }
  }
}
var k = "undefined" != typeof Uint8Array;
var S = !E && "function" == typeof btoa;
function x(t2) {
  if (!S) {
    var e2;
    void 0 === e2 && (e2 = 0), b(), e2 = w[e2];
    var n2 = Array(Math.floor(t2.length / 3)), r2 = e2[64] || "";
    let h2 = 0, c2 = 0;
    for (; h2 < t2.length - 2; h2 += 3) {
      var i2 = t2[h2], s2 = t2[h2 + 1], o2 = t2[h2 + 2], a2 = e2[i2 >> 2];
      i2 = e2[(3 & i2) << 4 | s2 >> 4], s2 = e2[(15 & s2) << 2 | o2 >> 6], o2 = e2[63 & o2], n2[c2++] = a2 + i2 + s2 + o2;
    }
    switch (a2 = 0, o2 = r2, t2.length - h2) {
      case 2:
        o2 = e2[(15 & (a2 = t2[h2 + 1])) << 2] || r2;
      case 1:
        t2 = t2[h2], n2[c2] = e2[t2 >> 2] + e2[(3 & t2) << 4 | a2 >> 4] + o2 + r2;
    }
    return n2.join("");
  }
  for (e2 = "", n2 = 0, r2 = t2.length - 10240; n2 < r2; ) e2 += String.fromCharCode.apply(null, t2.subarray(n2, n2 += 10240));
  return e2 += String.fromCharCode.apply(null, n2 ? t2.subarray(n2) : t2), btoa(e2);
}
var L = /[-_.]/g;
var R = { "-": "+", _: "/", ".": "=" };
function F(t2) {
  return R[t2] || "";
}
function M(t2) {
  if (!S) return A(t2);
  L.test(t2) && (t2 = t2.replace(L, F)), t2 = atob(t2);
  const e2 = new Uint8Array(t2.length);
  for (let n2 = 0; n2 < t2.length; n2++) e2[n2] = t2.charCodeAt(n2);
  return e2;
}
function I(t2) {
  return k && null != t2 && t2 instanceof Uint8Array;
}
var P = {};
var O;
function C(t2) {
  if (t2 !== P) throw Error("illegal external caller");
}
function N() {
  return O || (O = new D(null, P));
}
function U(t2) {
  C(P);
  var e2 = t2.ba;
  return null == (e2 = null == e2 || I(e2) ? e2 : "string" == typeof e2 ? M(e2) : null) ? e2 : t2.ba = e2;
}
var D = class {
  constructor(t2, e2) {
    if (C(e2), this.ba = t2, null != t2 && 0 === t2.length) throw Error("ByteString should be constructed with non-empty values");
  }
  ua() {
    return new Uint8Array(U(this) || 0);
  }
};
function B(t2, e2) {
  t2.__closure__error__context__984382 || (t2.__closure__error__context__984382 = {}), t2.__closure__error__context__984382.severity = e2;
}
var G;
function j() {
  const e2 = Error();
  B(e2, "incident"), function(e3) {
    t.setTimeout(() => {
      throw e3;
    }, 0);
  }(e2);
}
function V(t2) {
  return B(t2 = Error(t2), "warning"), t2;
}
function X() {
  return "function" == typeof BigInt;
}
function H(t2) {
  return Array.prototype.slice.call(t2);
}
var W = "function" == typeof Symbol && "symbol" == typeof Symbol();
function z(t2) {
  return "function" == typeof Symbol && "symbol" == typeof Symbol() ? Symbol() : t2;
}
var K = z();
var Y = z("0di");
var $ = z("2ex");
var q = z("1oa");
var J = z("0dg");
var Z = W ? (t2, e2) => {
  t2[K] |= e2;
} : (t2, e2) => {
  void 0 !== t2.G ? t2.G |= e2 : Object.defineProperties(t2, { G: { value: e2, configurable: true, writable: true, enumerable: false } });
};
var Q = W ? (t2, e2) => {
  t2[K] &= ~e2;
} : (t2, e2) => {
  void 0 !== t2.G && (t2.G &= ~e2);
};
var tt = W ? (t2) => 0 | t2[K] : (t2) => 0 | t2.G;
var et = W ? (t2) => t2[K] : (t2) => t2.G;
var nt = W ? (t2, e2) => {
  t2[K] = e2;
} : (t2, e2) => {
  void 0 !== t2.G ? t2.G = e2 : Object.defineProperties(t2, { G: { value: e2, configurable: true, writable: true, enumerable: false } });
};
function rt(t2) {
  return Z(t2, 34), t2;
}
function it(t2, e2) {
  nt(e2, -14591 & (0 | t2));
}
function st(t2, e2) {
  nt(e2, -14557 & (34 | t2));
}
var ot;
var at = {};
var ht = {};
function ct(t2) {
  return !(!t2 || "object" != typeof t2 || t2.La !== ht);
}
function ut(t2) {
  return null !== t2 && "object" == typeof t2 && !Array.isArray(t2) && t2.constructor === Object;
}
function lt(t2, e2, n2) {
  if (null != t2) {
    if ("string" == typeof t2) t2 = t2 ? new D(t2, P) : N();
    else if (t2.constructor !== D) if (I(t2)) t2 = t2.length ? new D(n2 ? t2 : new Uint8Array(t2), P) : N();
    else {
      if (!e2) throw Error();
      t2 = void 0;
    }
  }
  return t2;
}
function ft(t2) {
  return !(!Array.isArray(t2) || t2.length) && !!(1 & tt(t2));
}
var dt = [];
function pt(t2) {
  if (2 & t2) throw Error();
}
nt(dt, 55), ot = Object.freeze(dt);
var gt = class _gt {
  constructor(t2, e2, n2) {
    this.l = 0, this.g = t2, this.h = e2, this.m = n2;
  }
  next() {
    if (this.l < this.g.length) {
      const t2 = this.g[this.l++];
      return { done: false, value: this.h ? this.h.call(this.m, t2) : t2 };
    }
    return { done: true, value: void 0 };
  }
  [Symbol.iterator]() {
    return new _gt(this.g, this.h, this.m);
  }
};
var mt;
function yt(t2, e2) {
  (e2 = mt ? e2[mt] : void 0) && (t2[mt] = H(e2));
}
var _t = Object.freeze({});
Object.freeze({});
var vt = Object.freeze({});
function Et(t2) {
  return t2.Sa = true, t2;
}
var wt = Et((t2) => "number" == typeof t2);
var Tt = Et((t2) => "string" == typeof t2);
var At = Et((t2) => "boolean" == typeof t2);
var bt = "function" == typeof t.BigInt && "bigint" == typeof t.BigInt(0);
var kt = Et((t2) => bt ? t2 >= xt && t2 <= Rt : "-" === t2[0] ? Ft(t2, St) : Ft(t2, Lt));
var St = Number.MIN_SAFE_INTEGER.toString();
var xt = bt ? BigInt(Number.MIN_SAFE_INTEGER) : void 0;
var Lt = Number.MAX_SAFE_INTEGER.toString();
var Rt = bt ? BigInt(Number.MAX_SAFE_INTEGER) : void 0;
function Ft(t2, e2) {
  if (t2.length > e2.length) return false;
  if (t2.length < e2.length || t2 === e2) return true;
  for (let n2 = 0; n2 < t2.length; n2++) {
    const r2 = t2[n2], i2 = e2[n2];
    if (r2 > i2) return false;
    if (r2 < i2) return true;
  }
}
var Mt = "function" == typeof Uint8Array.prototype.slice;
var It;
var Pt = 0;
var Ot = 0;
function Ct(t2) {
  const e2 = t2 >>> 0;
  Pt = e2, Ot = (t2 - e2) / 4294967296 >>> 0;
}
function Nt(t2) {
  if (t2 < 0) {
    Ct(-t2);
    const [e2, n2] = Xt(Pt, Ot);
    Pt = e2 >>> 0, Ot = n2 >>> 0;
  } else Ct(t2);
}
function Ut(t2) {
  const e2 = It || (It = new DataView(new ArrayBuffer(8)));
  e2.setFloat32(0, +t2, true), Ot = 0, Pt = e2.getUint32(0, true);
}
function Dt(t2, e2) {
  return 4294967296 * e2 + (t2 >>> 0);
}
function Bt(t2, e2) {
  const n2 = 2147483648 & e2;
  return n2 && (e2 = ~e2 >>> 0, 0 == (t2 = 1 + ~t2 >>> 0) && (e2 = e2 + 1 >>> 0)), t2 = Dt(t2, e2), n2 ? -t2 : t2;
}
function Gt(t2, e2) {
  if (t2 >>>= 0, (e2 >>>= 0) <= 2097151) var n2 = "" + (4294967296 * e2 + t2);
  else X() ? n2 = "" + (BigInt(e2) << BigInt(32) | BigInt(t2)) : (t2 = (16777215 & t2) + 6777216 * (n2 = 16777215 & (t2 >>> 24 | e2 << 8)) + 6710656 * (e2 = e2 >> 16 & 65535), n2 += 8147497 * e2, e2 *= 2, t2 >= 1e7 && (n2 += t2 / 1e7 >>> 0, t2 %= 1e7), n2 >= 1e7 && (e2 += n2 / 1e7 >>> 0, n2 %= 1e7), n2 = e2 + jt(n2) + jt(t2));
  return n2;
}
function jt(t2) {
  return t2 = String(t2), "0000000".slice(t2.length) + t2;
}
function Vt(t2) {
  if (t2.length < 16) Nt(Number(t2));
  else if (X()) t2 = BigInt(t2), Pt = Number(t2 & BigInt(4294967295)) >>> 0, Ot = Number(t2 >> BigInt(32) & BigInt(4294967295));
  else {
    const e2 = +("-" === t2[0]);
    Ot = Pt = 0;
    const n2 = t2.length;
    for (let r2 = e2, i2 = (n2 - e2) % 6 + e2; i2 <= n2; r2 = i2, i2 += 6) {
      const e3 = Number(t2.slice(r2, i2));
      Ot *= 1e6, Pt = 1e6 * Pt + e3, Pt >= 4294967296 && (Ot += Math.trunc(Pt / 4294967296), Ot >>>= 0, Pt >>>= 0);
    }
    if (e2) {
      const [t3, e3] = Xt(Pt, Ot);
      Pt = t3, Ot = e3;
    }
  }
}
function Xt(t2, e2) {
  return e2 = ~e2, t2 ? t2 = 1 + ~t2 : e2 += 1, [t2, e2];
}
function Ht(t2) {
  return null == t2 || "number" == typeof t2 ? t2 : "NaN" === t2 || "Infinity" === t2 || "-Infinity" === t2 ? Number(t2) : void 0;
}
function Wt(t2) {
  return null == t2 || "boolean" == typeof t2 ? t2 : "number" == typeof t2 ? !!t2 : void 0;
}
var zt = /^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;
function Kt(t2) {
  const e2 = typeof t2;
  switch (e2) {
    case "bigint":
      return true;
    case "number":
      return Number.isFinite(t2);
  }
  return "string" === e2 && zt.test(t2);
}
function Yt(t2) {
  if (null == t2) return t2;
  if ("string" == typeof t2) {
    if (!t2) return;
    t2 = +t2;
  }
  return "number" == typeof t2 && Number.isFinite(t2) ? 0 | t2 : void 0;
}
function $t(t2) {
  if (null == t2) return t2;
  if ("string" == typeof t2) {
    if (!t2) return;
    t2 = +t2;
  }
  return "number" == typeof t2 && Number.isFinite(t2) ? t2 >>> 0 : void 0;
}
function qt(t2) {
  return "-" !== t2[0] && (t2.length < 20 || 20 === t2.length && Number(t2.substring(0, 6)) < 184467);
}
function Jt(t2) {
  return t2 = Math.trunc(t2), Number.isSafeInteger(t2) || (Nt(t2), t2 = Bt(Pt, Ot)), t2;
}
function Zt(t2) {
  var e2 = Math.trunc(Number(t2));
  if (Number.isSafeInteger(e2)) return String(e2);
  if (-1 !== (e2 = t2.indexOf(".")) && (t2 = t2.substring(0, e2)), !("-" === t2[0] ? t2.length < 20 || 20 === t2.length && Number(t2.substring(0, 7)) > -922337 : t2.length < 19 || 19 === t2.length && Number(t2.substring(0, 6)) < 922337)) if (Vt(t2), t2 = Pt, 2147483648 & (e2 = Ot)) if (X()) t2 = "" + (BigInt(0 | e2) << BigInt(32) | BigInt(t2 >>> 0));
  else {
    const [n2, r2] = Xt(t2, e2);
    t2 = "-" + Gt(n2, r2);
  }
  else t2 = Gt(t2, e2);
  return t2;
}
function Qt(t2) {
  return null == t2 ? t2 : "bigint" == typeof t2 ? (kt(t2) ? t2 = Number(t2) : (t2 = BigInt.asIntN(64, t2), t2 = kt(t2) ? Number(t2) : String(t2)), t2) : Kt(t2) ? "number" == typeof t2 ? Jt(t2) : Zt(t2) : void 0;
}
function te(t2) {
  if (null == t2) return t2;
  var e2 = typeof t2;
  if ("bigint" === e2) return String(BigInt.asUintN(64, t2));
  if (Kt(t2)) {
    if ("string" === e2) return e2 = Math.trunc(Number(t2)), Number.isSafeInteger(e2) && e2 >= 0 ? t2 = String(e2) : (-1 !== (e2 = t2.indexOf(".")) && (t2 = t2.substring(0, e2)), qt(t2) || (Vt(t2), t2 = Gt(Pt, Ot))), t2;
    if ("number" === e2) return (t2 = Math.trunc(t2)) >= 0 && Number.isSafeInteger(t2) ? t2 : function(t3) {
      if (t3 < 0) {
        Nt(t3);
        const e3 = Gt(Pt, Ot);
        return t3 = Number(e3), Number.isSafeInteger(t3) ? t3 : e3;
      }
      return qt(String(t3)) ? t3 : (Nt(t3), Dt(Pt, Ot));
    }(t2);
  }
}
function ee(t2) {
  if ("string" != typeof t2) throw Error();
  return t2;
}
function ne(t2) {
  if (null != t2 && "string" != typeof t2) throw Error();
  return t2;
}
function re(t2) {
  return null == t2 || "string" == typeof t2 ? t2 : void 0;
}
function ie(t2, e2, n2, r2) {
  if (null != t2 && "object" == typeof t2 && t2.Y === at) return t2;
  if (!Array.isArray(t2)) return n2 ? 2 & r2 ? (t2 = e2[Y]) ? e2 = t2 : (rt((t2 = new e2()).u), e2 = e2[Y] = t2) : e2 = new e2() : e2 = void 0, e2;
  let i2 = n2 = tt(t2);
  return 0 === i2 && (i2 |= 32 & r2), i2 |= 2 & r2, i2 !== n2 && nt(t2, i2), new e2(t2);
}
function se(t2, e2, n2) {
  if (e2) t: {
    if (!Kt(e2 = t2)) throw V("int64");
    switch (typeof e2) {
      case "string":
        e2 = Zt(e2);
        break t;
      case "bigint":
        if (t2 = e2 = BigInt.asIntN(64, e2), Tt(t2)) {
          if (!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(t2)) throw Error(String(t2));
        } else if (wt(t2) && !Number.isSafeInteger(t2)) throw Error(String(t2));
        e2 = bt ? BigInt(e2) : At(e2) ? e2 ? "1" : "0" : Tt(e2) ? e2.trim() || "0" : String(e2);
        break t;
      default:
        e2 = Jt(e2);
    }
  }
  else e2 = Qt(t2);
  return "string" == typeof (n2 = null == (t2 = e2) ? n2 ? 0 : void 0 : t2) && (e2 = +n2, Number.isSafeInteger(e2)) ? e2 : n2;
}
function oe(t2) {
  if (void 0 === ce && (ce = "function" == typeof Proxy ? ye(Proxy) : null), !ce || !me()) return t2;
  let e2 = ae == null ? void 0 : ae.get(t2);
  return e2 || (Math.random() > 0.01 ? t2 : (function(t3) {
    if (void 0 === le) {
      const t4 = new ce([], {});
      le = 1 === Array.prototype.concat.call([], t4).length;
    }
    le && "function" == typeof Symbol && Symbol.isConcatSpreadable && (t3[Symbol.isConcatSpreadable] = true);
  }(t2), e2 = new ce(t2, { set: (t3, e3, n2) => (j(), t3[e3] = n2, true) }), function(t3, e3) {
    (ae || (ae = new ue())).set(t3, e3), (he || (he = new ue())).set(e3, t3);
  }(t2, e2), e2));
}
var ae;
var he;
var ce;
var ue;
var le;
var fe;
var de;
var pe;
var ge;
function me() {
  return void 0 === ue && (ue = "function" == typeof WeakMap ? ye(WeakMap) : null), ue;
}
function ye(t2) {
  try {
    return -1 !== t2.toString().indexOf("[native code]") ? t2 : null;
  } catch (e2) {
    return null;
  }
}
function _e(t2, e2, n2) {
  var _a2;
  if (f && me()) {
    if ((_a2 = fe == null ? void 0 : fe.get(e2)) == null ? void 0 : _a2.get(t2)) {
      if (n2) return;
    } else if (Math.random() > 0.01) return;
    var r2 = t2.length;
    n2 = { length: r2 };
    for (var i2 = 0; i2 < Math.min(r2, 10); i2++) {
      if (r2 <= 10) var s2 = i2;
      else {
        s2 = r2 / 10;
        const t3 = Math.floor(i2 * s2);
        s2 = t3 + Math.floor(Math.random() * (Math.floor((i2 + 1) * s2) - t3));
      }
      n2[s2] = t2[s2];
    }
    Ee(t2, n2) ? ((i2 = (r2 = fe || (fe = new ue())).get(e2)) || (i2 = new ue(), r2.set(e2, i2)), i2.set(t2, n2)) : (j(), Te(t2, e2));
  }
}
function ve(t2, e2) {
  var _a2;
  const n2 = (_a2 = fe == null ? void 0 : fe.get(e2)) == null ? void 0 : _a2.get(t2);
  n2 && !Ee(t2, n2) && (j(), Te(t2, e2));
}
function Ee(t2, e2) {
  if (t2.length !== e2.length) return false;
  for (const i2 in e2) {
    var n2, r2 = Number(i2);
    if ((n2 = Number.isInteger(r2)) && (n2 = t2[r2], r2 = e2[r2], n2 = !(Number.isNaN(n2) ? Number.isNaN(r2) : n2 === r2)), n2) return false;
  }
  return true;
}
function we(t2) {
  if (t2 && (fe == null ? void 0 : fe.has(t2))) {
    var e2 = t2.u;
    if (e2) for (let n2 = 0; n2 < e2.length; n2++) {
      const r2 = e2[n2];
      if (n2 === e2.length - 1 && ut(r2)) for (const e3 in r2) {
        const n3 = r2[e3];
        Array.isArray(n3) && ve(n3, t2);
      }
      else Array.isArray(r2) && ve(r2, t2);
    }
  }
}
function Te(t2, e2) {
  var _a2;
  (_a2 = fe == null ? void 0 : fe.get(e2)) == null ? void 0 : _a2.delete(t2);
}
function Ae(t2, e2) {
  return t2 = be(t2, e2[0], e2[1]), Z(t2, 16384), t2;
}
function be(t2, e2, n2) {
  if (null == t2 && (t2 = de), de = void 0, null == t2) {
    var r2 = 96;
    n2 ? (t2 = [n2], r2 |= 512) : t2 = [], e2 && (r2 = -33521665 & r2 | (1023 & e2) << 15);
  } else {
    if (!Array.isArray(t2)) throw Error("narr");
    if (2048 & (r2 = tt(t2))) throw Error("farr");
    if (64 & r2) return t2;
    if (r2 |= 64, n2 && (r2 |= 512, n2 !== t2[0])) throw Error("mid");
    t: {
      const i2 = (n2 = t2).length;
      if (i2) {
        const t3 = i2 - 1;
        if (ut(n2[t3])) {
          if ((e2 = t3 - (+!!(512 & (r2 |= 256)) - 1)) >= 1024) throw Error("pvtlmt");
          r2 = -33521665 & r2 | (1023 & e2) << 15;
          break t;
        }
      }
      if (e2) {
        if ((e2 = Math.max(e2, i2 - (+!!(512 & r2) - 1))) > 1024) throw Error("spvt");
        r2 = -33521665 & r2 | (1023 & e2) << 15;
      }
    }
  }
  return nt(t2, r2), t2;
}
var ke = {};
var Se = function() {
  try {
    return v(new class extends Map {
      constructor() {
        super();
      }
    }()), false;
  } catch (e2) {
    return true;
  }
}();
var xe = class {
  constructor() {
    this.g = /* @__PURE__ */ new Map();
  }
  get(t2) {
    return this.g.get(t2);
  }
  set(t2, e2) {
    return this.g.set(t2, e2), this.size = this.g.size, this;
  }
  delete(t2) {
    return t2 = this.g.delete(t2), this.size = this.g.size, t2;
  }
  clear() {
    this.g.clear(), this.size = this.g.size;
  }
  has(t2) {
    return this.g.has(t2);
  }
  entries() {
    return this.g.entries();
  }
  keys() {
    return this.g.keys();
  }
  values() {
    return this.g.values();
  }
  forEach(t2, e2) {
    return this.g.forEach(t2, e2);
  }
  [Symbol.iterator]() {
    return this.entries();
  }
};
var Le = Se ? (Object.setPrototypeOf(xe.prototype, Map.prototype), Object.defineProperties(xe.prototype, { size: { value: 0, configurable: true, enumerable: true, writable: true } }), xe) : class extends Map {
  constructor() {
    super();
  }
};
function Re(t2) {
  return t2;
}
function Fe(t2) {
  if (2 & t2.M) throw Error("Cannot mutate an immutable Map");
}
var Me = class extends Le {
  constructor(t2, e2, n2 = Re, r2 = Re) {
    super();
    let i2 = tt(t2);
    i2 |= 64, nt(t2, i2), this.M = i2, this.U = e2, this.T = n2, this.aa = this.U ? Ie : r2;
    for (let s2 = 0; s2 < t2.length; s2++) {
      const o2 = t2[s2], a2 = n2(o2[0], false, true);
      let h2 = o2[1];
      e2 ? void 0 === h2 && (h2 = null) : h2 = r2(o2[1], false, true, void 0, void 0, i2), super.set(a2, h2);
    }
  }
  pa(t2 = Pe) {
    if (0 !== this.size) return this.Z(t2);
  }
  Z(t2 = Pe) {
    const e2 = [], n2 = super.entries();
    for (var r2; !(r2 = n2.next()).done; ) (r2 = r2.value)[0] = t2(r2[0]), r2[1] = t2(r2[1]), e2.push(r2);
    return e2;
  }
  clear() {
    Fe(this), super.clear();
  }
  delete(t2) {
    return Fe(this), super.delete(this.T(t2, true, false));
  }
  entries() {
    var t2 = this.oa();
    return new gt(t2, Oe, this);
  }
  keys() {
    return this.Ka();
  }
  values() {
    var t2 = this.oa();
    return new gt(t2, Me.prototype.get, this);
  }
  forEach(t2, e2) {
    super.forEach((n2, r2) => {
      t2.call(e2, this.get(r2), r2, this);
    });
  }
  set(t2, e2) {
    return Fe(this), null == (t2 = this.T(t2, true, false)) ? this : null == e2 ? (super.delete(t2), this) : super.set(t2, this.aa(e2, true, true, this.U, false, this.M));
  }
  Qa(t2) {
    const e2 = this.T(t2[0], false, true);
    t2 = t2[1], t2 = this.U ? void 0 === t2 ? null : t2 : this.aa(t2, false, true, void 0, false, this.M), super.set(e2, t2);
  }
  has(t2) {
    return super.has(this.T(t2, false, false));
  }
  get(t2) {
    t2 = this.T(t2, false, false);
    const e2 = super.get(t2);
    if (void 0 !== e2) {
      var n2 = this.U;
      return n2 ? ((n2 = this.aa(e2, false, true, n2, this.va, this.M)) !== e2 && super.set(t2, n2), n2) : e2;
    }
  }
  oa() {
    return Array.from(super.keys());
  }
  Ka() {
    return super.keys();
  }
  [Symbol.iterator]() {
    return this.entries();
  }
};
function Ie(t2, e2, n2, r2, i2, s2) {
  return t2 = ie(t2, r2, n2, s2), i2 && (t2 = He(t2)), t2;
}
function Pe(t2) {
  return t2;
}
function Oe(t2) {
  return [t2, this.get(t2)];
}
var Ce;
function Ne() {
  return Ce || (Ce = new Me(rt([]), void 0, void 0, void 0, ke));
}
function Ue(t2, e2, n2, r2, i2) {
  if (null != t2) {
    if (Array.isArray(t2)) t2 = ft(t2) ? void 0 : i2 && 2 & tt(t2) ? t2 : De(t2, e2, n2, void 0 !== r2, i2);
    else if (ut(t2)) {
      const s2 = {};
      for (let o2 in t2) s2[o2] = Ue(t2[o2], e2, n2, r2, i2);
      t2 = s2;
    } else t2 = e2(t2, r2);
    return t2;
  }
}
function De(t2, e2, n2, r2, i2) {
  const s2 = r2 || n2 ? tt(t2) : 0;
  r2 = r2 ? !!(32 & s2) : void 0;
  const o2 = H(t2);
  for (let t3 = 0; t3 < o2.length; t3++) o2[t3] = Ue(o2[t3], e2, n2, r2, i2);
  return n2 && (yt(o2, t2), n2(s2, o2)), o2;
}
function Be(t2) {
  return Ue(t2, Ge, void 0, void 0, false);
}
function Ge(t2) {
  return t2.Y === at ? t2.toJSON() : t2 instanceof Me ? t2.pa(Be) : function(t3) {
    switch (typeof t3) {
      case "number":
        return isFinite(t3) ? t3 : String(t3);
      case "bigint":
        return kt(t3) ? Number(t3) : String(t3);
      case "boolean":
        return t3 ? 1 : 0;
      case "object":
        if (t3) if (Array.isArray(t3)) {
          if (ft(t3)) return;
        } else {
          if (I(t3)) return x(t3);
          if (t3 instanceof D) {
            const e2 = t3.ba;
            return null == e2 ? "" : "string" == typeof e2 ? e2 : t3.ba = x(e2);
          }
          if (t3 instanceof Me) return t3.pa();
        }
    }
    return t3;
  }(t2);
}
function je(t2, e2, n2 = st) {
  if (null != t2) {
    if (k && t2 instanceof Uint8Array) return e2 ? t2 : new Uint8Array(t2);
    if (Array.isArray(t2)) {
      var r2 = tt(t2);
      return 2 & r2 ? t2 : (e2 && (e2 = 0 === r2 || !!(32 & r2) && !(64 & r2 || !(16 & r2))), e2 ? (nt(t2, -12293 & (34 | r2)), t2) : De(t2, je, 4 & r2 ? st : n2, true, true));
    }
    return t2.Y === at ? (n2 = t2.u, t2 = 2 & (r2 = et(n2)) ? t2 : Ve(t2, n2, r2, true)) : t2 instanceof Me && !(2 & t2.M) && (n2 = rt(t2.Z(je)), t2 = new Me(n2, t2.U, t2.T, t2.aa)), t2;
  }
}
function Ve(t2, e2, n2, r2) {
  return we(t2), t2 = t2.constructor, de = e2 = Xe(e2, n2, r2), e2 = new t2(e2), de = void 0, e2;
}
function Xe(t2, e2, n2) {
  const r2 = n2 || 2 & e2 ? st : it, i2 = !!(32 & e2);
  return t2 = function(t3, e3, n3) {
    const r3 = H(t3);
    var i3 = r3.length;
    const s2 = 256 & e3 ? r3[i3 - 1] : void 0;
    for (i3 += s2 ? -1 : 0, e3 = 512 & e3 ? 1 : 0; e3 < i3; e3++) r3[e3] = n3(r3[e3]);
    if (s2) {
      e3 = r3[e3] = {};
      for (const t4 in s2) e3[t4] = n3(s2[t4]);
    }
    return yt(r3, t3), r3;
  }(t2, e2, (t3) => je(t3, i2, r2)), Z(t2, 32 | (n2 ? 2 : 0)), t2;
}
function He(t2) {
  const e2 = t2.u, n2 = et(e2);
  return 2 & n2 ? Ve(t2, e2, n2, false) : t2;
}
function We(t2, e2, n2, r2) {
  return !(4 & e2) || null != n2 && (!r2 && 0 === n2 && (4096 & e2 || 8192 & e2) && (t2.constructor[J] = 1 + (0 | t2.constructor[J])) < 5 && j(), 0 !== n2 && !(n2 & e2));
}
function ze(t2, e2) {
  return Ye(t2 = t2.u, et(t2), e2);
}
function Ke(t2, e2, n2, r2) {
  if (!((e2 = r2 + (+!!(512 & e2) - 1)) < 0 || e2 >= t2.length || e2 >= n2)) return t2[e2];
}
function Ye(t2, e2, n2, r2) {
  if (-1 === n2) return null;
  const i2 = e2 >> 15 & 1023 || 536870912;
  if (!(n2 >= i2)) {
    var s2 = t2.length;
    return r2 && 256 & e2 && null != (r2 = t2[s2 - 1][n2]) ? (Ke(t2, e2, i2, n2) && null != $ && ((e2 = (t2 = G != null ? G : G = {})[$] || 0) >= 4 || (t2[$] = e2 + 1, j())), r2) : Ke(t2, e2, i2, n2);
  }
  return 256 & e2 ? t2[t2.length - 1][n2] : void 0;
}
function $e(t2, e2, n2) {
  const r2 = t2.u;
  let i2 = et(r2);
  return pt(i2), qe(r2, i2, e2, n2), t2;
}
function qe(t2, e2, n2, r2) {
  const i2 = e2 >> 15 & 1023 || 536870912;
  if (n2 >= i2) {
    let s2, o2 = e2;
    if (256 & e2) s2 = t2[t2.length - 1];
    else {
      if (null == r2) return o2;
      s2 = t2[i2 + (+!!(512 & e2) - 1)] = {}, o2 |= 256;
    }
    return s2[n2] = r2, n2 < i2 && (t2[n2 + (+!!(512 & e2) - 1)] = void 0), o2 !== e2 && nt(t2, o2), o2;
  }
  return t2[n2 + (+!!(512 & e2) - 1)] = r2, 256 & e2 && (n2 in (t2 = t2[t2.length - 1]) && delete t2[n2]), e2;
}
function Je(t2, e2, n2, r2, i2) {
  var s2 = 2 & e2;
  i2 = Ye(t2, e2, n2, i2), Array.isArray(i2) || (i2 = ot);
  const o2 = !(2 & r2);
  r2 = !(1 & r2);
  const a2 = !!(32 & e2);
  let h2 = tt(i2);
  return 0 !== h2 || !a2 || s2 || o2 ? 1 & h2 || (h2 |= 1, nt(i2, h2)) : (h2 |= 33, nt(i2, h2)), s2 ? (t2 = false, 2 & h2 || (rt(i2), t2 = !!(4 & h2)), (r2 || t2) && Object.freeze(i2)) : (s2 = !!(2 & h2) || !!(2048 & h2), r2 && s2 ? (i2 = H(i2), s2 = 1, a2 && !o2 && (s2 |= 32), nt(i2, s2), qe(t2, e2, n2, i2)) : o2 && 32 & h2 && !s2 && Q(i2, 32)), i2;
}
function Ze(t2, e2) {
  t2 = t2.u;
  let n2 = et(t2);
  const r2 = Ye(t2, n2, e2), i2 = Ht(r2);
  return null != i2 && i2 !== r2 && qe(t2, n2, e2, i2), i2;
}
function Qe(t2) {
  t2 = t2.u;
  let e2 = et(t2);
  const n2 = Ye(t2, e2, 1), r2 = lt(n2, true, !!(34 & e2));
  return null != r2 && r2 !== n2 && qe(t2, e2, 1, r2), r2;
}
function tn() {
  return void 0 === _t ? 2 : 5;
}
function en(t2, e2, n2, r2, i2, s2) {
  const o2 = t2.u;
  let a2 = et(o2);
  r2 = 2 & a2 ? 1 : r2, s2 = !!s2, i2 = nn(o2, a2, e2, i2);
  var h2 = tt(i2), c2 = i2;
  if (ve(c2, t2), 2 !== r2 && 1 !== r2 || Te(c2, t2), We(t2, h2, void 0, s2)) {
    4 & h2 && (i2 = H(i2), h2 = vn(h2, a2), a2 = qe(o2, a2, e2, i2));
    let t3 = c2 = 0;
    for (; c2 < i2.length; c2++) {
      const e3 = n2(i2[c2]);
      null != e3 && (i2[t3++] = e3);
    }
    t3 < c2 && (i2.length = t3), h2 = -4097 & (20 | (h2 = rn(h2, a2))), nt(i2, h2 &= -8193), 2 & h2 && Object.freeze(i2);
  }
  let u2;
  return 1 === r2 || 4 === r2 && 32 & h2 ? sn(h2) || (t2 = h2, (h2 |= 2) !== t2 && nt(i2, h2), Object.freeze(i2)) : (n2 = 5 === r2 && (!!(32 & h2) || sn(h2) || !!(ae == null ? void 0 : ae.get(i2))), (2 === r2 || n2) && sn(h2) && (i2 = H(i2), h2 = En(h2 = vn(h2, a2), a2, s2), nt(i2, h2), a2 = qe(o2, a2, e2, i2)), sn(h2) || (e2 = h2, (h2 = En(h2, a2, s2)) !== e2 && nt(i2, h2)), n2 ? (u2 = oe(i2), _e(i2, t2, true)) : 2 !== r2 || s2 || (ae == null ? void 0 : ae.delete(i2))), u2 || i2;
}
function nn(t2, e2, n2, r2) {
  return t2 = Ye(t2, e2, n2, r2), Array.isArray(t2) ? t2 : ot;
}
function rn(t2, e2) {
  return 0 === t2 && (t2 = vn(t2, e2)), 1 | t2;
}
function sn(t2) {
  return !!(2 & t2) && !!(4 & t2) || !!(2048 & t2);
}
function on(t2) {
  t2 = H(t2);
  for (let e2 = 0; e2 < t2.length; e2++) {
    const n2 = t2[e2] = H(t2[e2]);
    Array.isArray(n2[1]) && (n2[1] = rt(n2[1]));
  }
  return t2;
}
function an(t2, e2, n2, r2) {
  t2 = t2.u;
  let i2 = et(t2);
  pt(i2), qe(t2, i2, e2, ("0" === r2 ? 0 === Number(n2) : n2 === r2) ? void 0 : n2);
}
function hn(t2, e2) {
  var n2 = _s;
  return ln(cn(t2 = t2.u), t2, et(t2), n2) === e2 ? e2 : -1;
}
function cn(t2) {
  var _a2;
  if (W) return (_a2 = t2[q]) != null ? _a2 : t2[q] = /* @__PURE__ */ new Map();
  if (q in t2) return t2[q];
  const e2 = /* @__PURE__ */ new Map();
  return Object.defineProperty(t2, q, { value: e2 }), e2;
}
function un(t2, e2, n2, r2) {
  const i2 = cn(t2), s2 = ln(i2, t2, e2, n2);
  return s2 !== r2 && (s2 && (e2 = qe(t2, e2, s2)), i2.set(n2, r2)), e2;
}
function ln(t2, e2, n2, r2) {
  let i2 = t2.get(r2);
  if (null != i2) return i2;
  i2 = 0;
  for (let t3 = 0; t3 < r2.length; t3++) {
    const s2 = r2[t3];
    null != Ye(e2, n2, s2) && (0 !== i2 && (n2 = qe(e2, n2, i2)), i2 = s2);
  }
  return t2.set(r2, i2), i2;
}
function fn(t2, e2, n2, r2) {
  let i2, s2 = et(t2);
  if (null != (r2 = Ye(t2, s2, n2, r2)) && r2.Y === at) return (e2 = He(r2)) !== r2 && qe(t2, s2, n2, e2), e2.u;
  if (Array.isArray(r2)) {
    const t3 = tt(r2);
    i2 = 2 & t3 ? Xe(r2, t3, false) : r2, i2 = Ae(i2, e2);
  } else i2 = Ae(void 0, e2);
  return i2 !== r2 && qe(t2, s2, n2, i2), i2;
}
function dn(t2, e2, n2, r2) {
  t2 = t2.u;
  let i2 = et(t2);
  return (e2 = ie(r2 = Ye(t2, i2, n2, r2), e2, false, i2)) !== r2 && null != e2 && qe(t2, i2, n2, e2), e2;
}
function pn(t2, e2, n2, r2 = false) {
  if (null == (e2 = dn(t2, e2, n2, r2))) return e2;
  if (t2 = t2.u, !(2 & (r2 = et(t2)))) {
    const i2 = He(e2);
    i2 !== e2 && qe(t2, r2, n2, e2 = i2);
  }
  return e2;
}
function gn(t2, e2, n2, r2, i2, s2, o2) {
  const a2 = t2.u;
  var h2 = !!(2 & e2);
  i2 = h2 ? 1 : i2, s2 = !!s2, o2 && (o2 = !h2), h2 = nn(a2, e2, r2);
  var c2 = tt(h2), u2 = h2;
  if (ve(u2, t2), 2 !== i2 && 1 !== i2 || Te(u2, t2), !(u2 = !!(4 & c2))) {
    var l2 = h2, f2 = e2;
    const t3 = !!(2 & (c2 = rn(c2, e2)));
    t3 && (f2 |= 2);
    let r3 = !t3, i3 = true, s3 = 0, o3 = 0;
    for (; s3 < l2.length; s3++) {
      const e3 = ie(l2[s3], n2, false, f2);
      if (e3 instanceof n2) {
        if (!t3) {
          const t4 = !!(2 & tt(e3.u));
          r3 && (r3 = !t4), i3 && (i3 = t4);
        }
        l2[o3++] = e3;
      }
    }
    o3 < s3 && (l2.length = o3), c2 |= 4, c2 = i3 ? 16 | c2 : -17 & c2, nt(l2, c2 = r3 ? 8 | c2 : -9 & c2), t3 && Object.freeze(l2);
  }
  if (o2 && !(8 & c2 || !h2.length && (1 === i2 || 4 === i2 && 32 & c2))) {
    for (sn(c2) ? (h2 = H(h2), c2 = vn(c2, e2), e2 = qe(a2, e2, r2, h2)) : Te(h2, t2), n2 = h2, o2 = c2, l2 = 0; l2 < n2.length; l2++) (c2 = n2[l2]) !== (f2 = He(c2)) && (n2[l2] = f2);
    o2 |= 8, o2 = n2.length ? -17 & o2 : 16 | o2, nt(n2, o2), c2 = o2;
  }
  let d2;
  return 1 === i2 || 4 === i2 && 32 & c2 ? sn(c2) || (t2 = c2, (c2 |= !h2.length || 16 & c2 && (!u2 || 32 & c2) ? 2 : 2048) !== t2 && nt(h2, c2), Object.freeze(h2)) : (u2 = 5 === i2 && (!!(32 & c2) || sn(c2) || !!(ae == null ? void 0 : ae.get(h2))), (2 === i2 || u2) && sn(c2) && (h2 = H(h2), c2 = En(c2 = vn(c2, e2), e2, s2), nt(h2, c2), e2 = qe(a2, e2, r2, h2)), sn(c2) || (r2 = c2, (c2 = En(c2, e2, s2)) !== r2 && nt(h2, c2)), u2 ? (d2 = oe(h2), _e(h2, t2, true)) : 2 !== i2 || s2 || (ae == null ? void 0 : ae.delete(h2))), d2 || h2;
}
function mn(t2, e2, n2) {
  const r2 = et(t2.u);
  return gn(t2, r2, e2, n2, tn(), false, !(2 & r2));
}
function yn(t2, e2, n2, r2) {
  return null == r2 && (r2 = void 0), $e(t2, n2, r2);
}
function _n(t2, e2, n2, r2) {
  null == r2 && (r2 = void 0);
  t: {
    t2 = t2.u;
    let i2 = et(t2);
    if (pt(i2), null == r2) {
      const r3 = cn(t2);
      if (ln(r3, t2, i2, n2) !== e2) break t;
      r3.set(n2, 0);
    } else i2 = un(t2, i2, n2, e2);
    qe(t2, i2, e2, r2);
  }
}
function vn(t2, e2) {
  return -2049 & (t2 = 32 | (2 & e2 ? 2 | t2 : -3 & t2));
}
function En(t2, e2, n2) {
  return 32 & e2 && n2 || (t2 &= -33), t2;
}
function wn(t2, e2, n2, r2) {
  const i2 = et(t2.u);
  pt(i2), t2 = gn(t2, i2, n2, e2, 2, true), n2 = null != r2 ? r2 : new n2(), t2.push(n2), 2 & tt(n2.u) ? Q(t2, 8) : Q(t2, 16);
}
function Tn(t2, e2) {
  return t2 != null ? t2 : e2;
}
function An(t2, e2) {
  return Yt(ze(t2, e2));
}
function bn(t2, e2) {
  return Tn(Ze(t2, e2), 0);
}
function kn(t2, e2) {
  return Tn(re(ze(t2, e2)), "");
}
function Sn(t2, e2, n2) {
  if (null != n2 && "boolean" != typeof n2) throw t2 = typeof n2, Error(`Expected boolean but got ${"object" != t2 ? t2 : n2 ? Array.isArray(n2) ? "array" : t2 : "null"}: ${n2}`);
  $e(t2, e2, n2);
}
function xn(t2, e2, n2) {
  if (null != n2) {
    if ("number" != typeof n2) throw V("int32");
    if (!Number.isFinite(n2)) throw V("int32");
    n2 |= 0;
  }
  $e(t2, e2, n2);
}
function Ln(t2, e2, n2) {
  if (null != n2 && "number" != typeof n2) throw Error(`Value of float/double field must be a number, found ${typeof n2}: ${n2}`);
  $e(t2, e2, n2);
}
function Rn(t2, e2, n2) {
  {
    const a2 = t2.u;
    let h2 = et(a2);
    if (pt(h2), null == n2) qe(a2, h2, e2);
    else {
      n2 = (he == null ? void 0 : he.get(n2)) || n2;
      var r2, i2 = tt(n2), s2 = i2, o2 = !!(2 & i2) || Object.isFrozen(n2);
      if ((r2 = !o2) && (r2 = void 0 === vt || false), We(t2, i2)) {
        i2 = 21, o2 && (n2 = H(n2), s2 = 0, i2 = En(i2 = vn(i2, h2), h2, true));
        for (let t3 = 0; t3 < n2.length; t3++) n2[t3] = ee(n2[t3]);
      }
      r2 ? (n2 = H(n2), s2 = 0, i2 = En(i2 = vn(i2, h2), h2, true)) : o2 || _e(n2, t2), i2 !== s2 && nt(n2, i2), qe(a2, h2, e2, n2);
    }
  }
}
function Fn(t2, e2, n2) {
  pt(et(t2.u)), en(t2, e2, re, 2, void 0, true).push(ee(n2));
}
function Mn(t2, e2) {
  return Error(`Invalid wire type: ${t2} (at position ${e2})`);
}
function In() {
  return Error("Failed to read varint, encoding is invalid.");
}
function Pn(t2, e2) {
  return Error(`Tried to read past the end of the data ${e2} > ${t2}`);
}
function On(t2) {
  if ("string" == typeof t2) return { buffer: M(t2), O: false };
  if (Array.isArray(t2)) return { buffer: new Uint8Array(t2), O: false };
  if (t2.constructor === Uint8Array) return { buffer: t2, O: false };
  if (t2.constructor === ArrayBuffer) return { buffer: new Uint8Array(t2), O: false };
  if (t2.constructor === D) return { buffer: U(t2) || new Uint8Array(0), O: true };
  if (t2 instanceof Uint8Array) return { buffer: new Uint8Array(t2.buffer, t2.byteOffset, t2.byteLength), O: false };
  throw Error("Type not convertible to a Uint8Array, expected a Uint8Array, an ArrayBuffer, a base64 encoded string, a ByteString or an Array of numbers");
}
function Cn(t2, e2) {
  let n2, r2 = 0, i2 = 0, s2 = 0;
  const o2 = t2.h;
  let a2 = t2.g;
  do {
    n2 = o2[a2++], r2 |= (127 & n2) << s2, s2 += 7;
  } while (s2 < 32 && 128 & n2);
  for (s2 > 32 && (i2 |= (127 & n2) >> 4), s2 = 3; s2 < 32 && 128 & n2; s2 += 7) n2 = o2[a2++], i2 |= (127 & n2) << s2;
  if (Xn(t2, a2), n2 < 128) return e2(r2 >>> 0, i2 >>> 0);
  throw In();
}
function Nn(t2) {
  let e2 = 0, n2 = t2.g;
  const r2 = n2 + 10, i2 = t2.h;
  for (; n2 < r2; ) {
    const r3 = i2[n2++];
    if (e2 |= r3, 0 == (128 & r3)) return Xn(t2, n2), !!(127 & e2);
  }
  throw In();
}
function Un(t2) {
  const e2 = t2.h;
  let n2 = t2.g, r2 = e2[n2++], i2 = 127 & r2;
  if (128 & r2 && (r2 = e2[n2++], i2 |= (127 & r2) << 7, 128 & r2 && (r2 = e2[n2++], i2 |= (127 & r2) << 14, 128 & r2 && (r2 = e2[n2++], i2 |= (127 & r2) << 21, 128 & r2 && (r2 = e2[n2++], i2 |= r2 << 28, 128 & r2 && 128 & e2[n2++] && 128 & e2[n2++] && 128 & e2[n2++] && 128 & e2[n2++] && 128 & e2[n2++]))))) throw In();
  return Xn(t2, n2), i2;
}
function Dn(t2) {
  return Un(t2) >>> 0;
}
function Bn(t2) {
  var e2 = t2.h;
  const n2 = t2.g, r2 = e2[n2], i2 = e2[n2 + 1], s2 = e2[n2 + 2];
  return e2 = e2[n2 + 3], Xn(t2, t2.g + 4), (r2 << 0 | i2 << 8 | s2 << 16 | e2 << 24) >>> 0;
}
function Gn(t2) {
  var e2 = Bn(t2);
  t2 = 2 * (e2 >> 31) + 1;
  const n2 = e2 >>> 23 & 255;
  return e2 &= 8388607, 255 == n2 ? e2 ? NaN : t2 * (1 / 0) : 0 == n2 ? 1401298464324817e-60 * t2 * e2 : t2 * Math.pow(2, n2 - 150) * (e2 + 8388608);
}
function jn(t2) {
  return Un(t2);
}
function Vn(t2, e2, { ea: n2 = false } = {}) {
  t2.ea = n2, e2 && (e2 = On(e2), t2.h = e2.buffer, t2.m = e2.O, t2.j = 0, t2.l = t2.h.length, t2.g = t2.j);
}
function Xn(t2, e2) {
  if (t2.g = e2, e2 > t2.l) throw Pn(t2.l, e2);
}
function Hn(t2, e2) {
  if (e2 < 0) throw Error(`Tried to read a negative byte length: ${e2}`);
  const n2 = t2.g, r2 = n2 + e2;
  if (r2 > t2.l) throw Pn(e2, t2.l - n2);
  return t2.g = r2, n2;
}
function Wn(t2, e2) {
  if (0 == e2) return N();
  var n2 = Hn(t2, e2);
  return t2.ea && t2.m ? n2 = t2.h.subarray(n2, n2 + e2) : (t2 = t2.h, n2 = n2 === (e2 = n2 + e2) ? new Uint8Array(0) : Mt ? t2.slice(n2, e2) : new Uint8Array(t2.subarray(n2, e2))), 0 == n2.length ? N() : new D(n2, P);
}
Me.prototype.toJSON = void 0, Me.prototype.La = ht;
var zn = [];
function Kn(t2) {
  var e2 = t2.g;
  if (e2.g == e2.l) return false;
  t2.l = t2.g.g;
  var n2 = Dn(t2.g);
  if (e2 = n2 >>> 3, !((n2 &= 7) >= 0 && n2 <= 5)) throw Mn(n2, t2.l);
  if (e2 < 1) throw Error(`Invalid field number: ${e2} (at position ${t2.l})`);
  return t2.m = e2, t2.h = n2, true;
}
function Yn(t2) {
  switch (t2.h) {
    case 0:
      0 != t2.h ? Yn(t2) : Nn(t2.g);
      break;
    case 1:
      Xn(t2 = t2.g, t2.g + 8);
      break;
    case 2:
      if (2 != t2.h) Yn(t2);
      else {
        var e2 = Dn(t2.g);
        Xn(t2 = t2.g, t2.g + e2);
      }
      break;
    case 5:
      Xn(t2 = t2.g, t2.g + 4);
      break;
    case 3:
      for (e2 = t2.m; ; ) {
        if (!Kn(t2)) throw Error("Unmatched start-group tag: stream EOF");
        if (4 == t2.h) {
          if (t2.m != e2) throw Error("Unmatched end-group tag");
          break;
        }
        Yn(t2);
      }
      break;
    default:
      throw Mn(t2.h, t2.l);
  }
}
function $n(t2, e2, n2) {
  const r2 = t2.g.l, i2 = Dn(t2.g), s2 = t2.g.g + i2;
  let o2 = s2 - r2;
  if (o2 <= 0 && (t2.g.l = s2, n2(e2, t2, void 0, void 0, void 0), o2 = s2 - t2.g.g), o2) throw Error(`Message parsing ended unexpectedly. Expected to read ${i2} bytes, instead read ${i2 - o2} bytes, either the data ended unexpectedly or the message misreported its own length`);
  return t2.g.g = s2, t2.g.l = r2, e2;
}
function qn(t2) {
  var e2 = Dn(t2.g), a2 = Hn(t2 = t2.g, e2);
  if (t2 = t2.h, o) {
    var h2, c2 = t2;
    (h2 = s) || (h2 = s = new TextDecoder("utf-8", { fatal: true })), e2 = a2 + e2, c2 = 0 === a2 && e2 === c2.length ? c2 : c2.subarray(a2, e2);
    try {
      var u2 = h2.decode(c2);
    } catch (t3) {
      if (void 0 === i) {
        try {
          h2.decode(new Uint8Array([128]));
        } catch (t4) {
        }
        try {
          h2.decode(new Uint8Array([97])), i = true;
        } catch (t4) {
          i = false;
        }
      }
      throw !i && (s = void 0), t3;
    }
  } else {
    e2 = (u2 = a2) + e2, a2 = [];
    let i2, s2 = null;
    for (; u2 < e2; ) {
      var l2 = t2[u2++];
      l2 < 128 ? a2.push(l2) : l2 < 224 ? u2 >= e2 ? n() : (i2 = t2[u2++], l2 < 194 || 128 != (192 & i2) ? (u2--, n()) : a2.push((31 & l2) << 6 | 63 & i2)) : l2 < 240 ? u2 >= e2 - 1 ? n() : (i2 = t2[u2++], 128 != (192 & i2) || 224 === l2 && i2 < 160 || 237 === l2 && i2 >= 160 || 128 != (192 & (h2 = t2[u2++])) ? (u2--, n()) : a2.push((15 & l2) << 12 | (63 & i2) << 6 | 63 & h2)) : l2 <= 244 ? u2 >= e2 - 2 ? n() : (i2 = t2[u2++], 128 != (192 & i2) || i2 - 144 + (l2 << 28) >> 30 != 0 || 128 != (192 & (h2 = t2[u2++])) || 128 != (192 & (c2 = t2[u2++])) ? (u2--, n()) : (l2 = (7 & l2) << 18 | (63 & i2) << 12 | (63 & h2) << 6 | 63 & c2, l2 -= 65536, a2.push(55296 + (l2 >> 10 & 1023), 56320 + (1023 & l2)))) : n(), a2.length >= 8192 && (s2 = r(s2, a2), a2.length = 0);
    }
    u2 = r(s2, a2);
  }
  return u2;
}
function Jn(t2) {
  const e2 = Dn(t2.g);
  return Wn(t2.g, e2);
}
function Zn(t2, e2, n2) {
  var r2 = Dn(t2.g);
  for (r2 = t2.g.g + r2; t2.g.g < r2; ) n2.push(e2(t2.g));
}
var Qn = [];
var tr;
function er(t2, e2, n2) {
  e2.g ? e2.m(t2, e2.g, e2.h, n2, true) : e2.m(t2, e2.h, n2, true);
}
var nr = class {
  constructor(t2, e2) {
    this.u = be(t2, e2);
  }
  toJSON() {
    return rr(this);
  }
  l() {
    var t2 = vo;
    return t2.g ? t2.l(this, t2.g, t2.h, true) : t2.l(this, t2.h, t2.defaultValue, true);
  }
  clone() {
    const t2 = this.u;
    return Ve(this, t2, et(t2), false);
  }
  O() {
    return !!(2 & tt(this.u));
  }
};
function rr(t2) {
  we(t2), t2 = tr ? t2.u : De(t2.u, Ge, void 0, void 0, false);
  {
    var e2 = !tr;
    let c2 = t2.length;
    if (c2) {
      var n2 = t2[c2 - 1], r2 = ut(n2);
      r2 ? c2-- : n2 = void 0;
      var i2 = t2;
      if (r2) {
        t: {
          var s2, o2 = n2, a2 = false;
          if (o2) for (let t3 in o2) isNaN(+t3) ? (s2 != null ? s2 : s2 = {})[t3] = o2[t3] : (r2 = o2[t3], Array.isArray(r2) && (ft(r2) || ct(r2) && 0 === r2.size) && (r2 = null), null == r2 && (a2 = true), null != r2 && ((s2 != null ? s2 : s2 = {})[t3] = r2));
          if (a2 || (s2 = o2), s2) for (let t3 in s2) {
            a2 = s2;
            break t;
          }
          a2 = null;
        }
        o2 = null == a2 ? null != n2 : a2 !== n2;
      }
      for (; c2 > 0 && (null == (s2 = i2[c2 - 1]) || ft(s2) || ct(s2) && 0 === s2.size); c2--) var h2 = true;
      (i2 !== t2 || o2 || h2) && (e2 ? (h2 || o2 || a2) && (i2.length = c2) : i2 = Array.prototype.slice.call(i2, 0, c2), a2 && i2.push(a2)), h2 = i2;
    } else h2 = t2;
  }
  return h2;
}
function ir(t2) {
  return t2 ? /^\d+$/.test(t2) ? (Vt(t2), new sr(Pt, Ot)) : null : or || (or = new sr(0, 0));
}
nr.prototype.Y = at, nr.prototype.toString = function() {
  try {
    return tr = true, rr(this).toString();
  } finally {
    tr = false;
  }
};
var sr = class {
  constructor(t2, e2) {
    this.h = t2 >>> 0, this.g = e2 >>> 0;
  }
};
var or;
function ar(t2) {
  return t2 ? /^-?\d+$/.test(t2) ? (Vt(t2), new hr(Pt, Ot)) : null : cr || (cr = new hr(0, 0));
}
var hr = class {
  constructor(t2, e2) {
    this.h = t2 >>> 0, this.g = e2 >>> 0;
  }
};
var cr;
function ur(t2, e2, n2) {
  for (; n2 > 0 || e2 > 127; ) t2.g.push(127 & e2 | 128), e2 = (e2 >>> 7 | n2 << 25) >>> 0, n2 >>>= 7;
  t2.g.push(e2);
}
function lr(t2, e2) {
  for (; e2 > 127; ) t2.g.push(127 & e2 | 128), e2 >>>= 7;
  t2.g.push(e2);
}
function fr(t2, e2) {
  if (e2 >= 0) lr(t2, e2);
  else {
    for (let n2 = 0; n2 < 9; n2++) t2.g.push(127 & e2 | 128), e2 >>= 7;
    t2.g.push(1);
  }
}
function dr(t2, e2) {
  t2.g.push(e2 >>> 0 & 255), t2.g.push(e2 >>> 8 & 255), t2.g.push(e2 >>> 16 & 255), t2.g.push(e2 >>> 24 & 255);
}
function pr(t2, e2) {
  0 !== e2.length && (t2.l.push(e2), t2.h += e2.length);
}
function gr(t2, e2, n2) {
  lr(t2.g, 8 * e2 + n2);
}
function mr(t2, e2) {
  return gr(t2, e2, 2), e2 = t2.g.end(), pr(t2, e2), e2.push(t2.h), e2;
}
function yr(t2, e2) {
  var n2 = e2.pop();
  for (n2 = t2.h + t2.g.length() - n2; n2 > 127; ) e2.push(127 & n2 | 128), n2 >>>= 7, t2.h++;
  e2.push(n2), t2.h++;
}
function _r(t2, e2, n2) {
  gr(t2, e2, 2), lr(t2.g, n2.length), pr(t2, t2.g.end()), pr(t2, n2);
}
function vr(t2, e2, n2, r2) {
  null != n2 && (e2 = mr(t2, e2), r2(n2, t2), yr(t2, e2));
}
var Er = class {
  constructor(t2, e2, n2) {
    this.g = t2, this.h = e2, this.qa = n2;
  }
};
function wr(t2) {
  return Array.isArray(t2) ? t2[0] instanceof Er ? t2 : [gi, t2] : [t2, void 0];
}
function Tr(t2, e2) {
  if (Array.isArray(e2)) {
    var n2 = tt(e2);
    if (4 & n2) return e2;
    for (var r2 = 0, i2 = 0; r2 < e2.length; r2++) {
      const n3 = t2(e2[r2]);
      null != n3 && (e2[i2++] = n3);
    }
    return i2 < r2 && (e2.length = i2), nt(e2, -12289 & (5 | n2)), 2 & n2 && Object.freeze(e2), e2;
  }
}
var Ar = Symbol();
function br(t2) {
  let e2 = t2[Ar];
  if (!e2) {
    const n2 = Ur(t2), r2 = n2.h;
    e2 = r2 ? (t3, e3) => r2(t3, e3, n2) : (t3, e3) => {
      var _a2;
      for (; Kn(e3) && 4 != e3.h; ) {
        var r3 = e3.m;
        let o2 = n2[r3];
        const a2 = !o2;
        let h2 = false;
        if (!o2) {
          var i2 = n2.X;
          if (i2) {
            var s2 = i2[r3];
            s2 && (h2 = (_a2 = i2.P) == null ? void 0 : _a2[r3], (!d || h2) && (i2 = kr(s2)) && (o2 = n2[r3] = i2));
          }
        }
        o2 && o2(e3, t3, r3) || (r3 = (i2 = e3).l, Yn(i2), i2.ja ? i2 = void 0 : (s2 = i2.g.g - r3, i2.g.g = r3, i2 = Wn(i2.g, s2)), r3 = t3, i2 && (mt || (mt = Symbol()), (s2 = r3[mt]) ? s2.push(i2) : r3[mt] = [i2])), a2 && o2 && !h2 && Wr++ < 5 && j();
      }
    }, t2[Ar] = e2;
  }
  return e2;
}
function kr(t2) {
  const e2 = (t2 = wr(t2))[0].g;
  if (t2 = t2[1]) {
    const n2 = br(t2), r2 = Ur(t2).g;
    return (t3, i2, s2) => e2(t3, i2, s2, r2, n2);
  }
  return e2;
}
function Sr(t2, e2, n2) {
  t2[e2] = n2;
}
function xr(t2, e2, n2, r2) {
  var i2 = Sr;
  e2.g = function(t3) {
    switch (typeof t3) {
      case "boolean":
        return pe || (pe = [0, void 0, true]);
      case "number":
        return t3 > 0 ? void 0 : 0 === t3 ? ge || (ge = [0, void 0]) : [-t3, void 0];
      case "string":
        return [0, t3];
      case "object":
        return t3;
    }
  }(t2[0]);
  let s2 = 0;
  var o2 = t2[++s2];
  o2 && o2.constructor === Object && (e2.X = o2, "function" == typeof (o2 = t2[++s2]) && (e2.h = o2, e2.l = t2[++s2], o2 = t2[++s2]));
  const a2 = {};
  for (; Array.isArray(o2) && "number" == typeof o2[0] && o2[0] > 0; ) {
    for (var h2 = 0; h2 < o2.length; h2++) a2[o2[h2]] = o2;
    o2 = t2[++s2];
  }
  for (h2 = 1; void 0 !== o2; ) {
    let l2;
    "number" == typeof o2 && (h2 += o2, o2 = t2[++s2]);
    var c2 = void 0;
    if (o2 instanceof Er ? l2 = o2 : (l2 = mi, s2--), l2.qa) {
      o2 = t2[++s2], c2 = t2;
      var u2 = s2;
      "function" == typeof o2 && (o2 = o2(), c2[u2] = o2), c2 = o2;
    }
    for (u2 = h2 + 1, "number" == typeof (o2 = t2[++s2]) && o2 < 0 && (u2 -= o2, o2 = t2[++s2]); h2 < u2; h2++) {
      const t3 = a2[h2];
      i2(e2, h2, c2 ? r2(l2, c2, t3) : n2(l2, t3));
    }
  }
  return e2;
}
var Lr = Symbol();
function Rr(t2) {
  let e2 = t2[Lr];
  if (!e2) {
    const n2 = Pr(t2);
    e2 = (t3, e3) => Br(t3, e3, n2), t2[Lr] = e2;
  }
  return e2;
}
var Fr = Symbol();
function Mr(t2) {
  return t2.h;
}
function Ir(t2, e2) {
  let n2, r2;
  const i2 = t2.h;
  return (t3, s2, o2) => i2(t3, s2, o2, r2 || (r2 = Pr(e2).g), n2 || (n2 = Rr(e2)));
}
function Pr(t2) {
  let e2 = t2[Fr];
  return e2 || (e2 = xr(t2, t2[Fr] = {}, Mr, Ir));
}
var Or = Symbol();
function Cr(t2, e2) {
  const n2 = t2.g;
  return e2 ? (t3, r2, i2) => n2(t3, r2, i2, e2) : n2;
}
function Nr(t2, e2, n2) {
  const r2 = t2.g;
  let i2, s2;
  return (t3, o2, a2) => r2(t3, o2, a2, s2 || (s2 = Ur(e2).g), i2 || (i2 = br(e2)), n2);
}
function Ur(t2) {
  let e2 = t2[Or];
  return e2 || (e2 = xr(t2, t2[Or] = {}, Cr, Nr));
}
function Dr(t2, e2) {
  var _a2;
  var n2 = t2[e2];
  if (n2) return n2;
  if (n2 = t2.X) {
    var r2 = n2[e2];
    if (r2) {
      var i2 = (r2 = wr(r2))[0].h;
      if (r2 = r2[1], n2 = (_a2 = n2.P) == null ? void 0 : _a2[e2], !d || n2) {
        if (r2) {
          const e3 = Rr(r2), s2 = Pr(r2).g;
          n2 = (n2 = t2.l) ? n2(s2, e3) : (t3, n3, r3) => i2(t3, n3, r3, s2, e3);
        } else n2 = i2;
        return t2[e2] = n2;
      }
    }
  }
}
function Br(t2, e2, n2) {
  var _a2, _b, _c;
  for (var r2 = et(t2), i2 = +!!(512 & r2) - 1, s2 = t2.length, o2 = 512 & r2 ? 1 : 0, a2 = s2 + (256 & r2 ? -1 : 0); o2 < a2; o2++) {
    const r3 = t2[o2];
    if (null == r3) continue;
    const s3 = o2 - i2, a3 = Dr(n2, s3);
    if (!a3) continue;
    const h2 = n2.X;
    (h2 == null ? void 0 : h2[s3]) && !((_a2 = h2 == null ? void 0 : h2.P) == null ? void 0 : _a2[s3]) && Wr++ < 5 && j(), a3(e2, r3, s3);
  }
  if (256 & r2) {
    r2 = t2[s2 - 1];
    for (let t3 in r2) i2 = +t3, !Number.isNaN(i2) && (null != (s2 = r2[t3]) && (a2 = Dr(n2, i2))) && (((_b = o2 = n2.X) == null ? void 0 : _b[i2]) && !((_c = o2 == null ? void 0 : o2.P) == null ? void 0 : _c[i2]) && Wr++ < 5 && j(), a2(e2, s2, i2));
  }
  if (t2 = mt ? t2[mt] : void 0) for (pr(e2, e2.g.end()), n2 = 0; n2 < t2.length; n2++) pr(e2, U(t2[n2]) || new Uint8Array(0));
}
function Gr(t2, e2) {
  return new Er(t2, e2, false);
}
function jr(t2, e2) {
  return new Er(t2, e2, false);
}
function Vr(t2, e2) {
  return new Er(t2, e2, true);
}
function Xr(t2, e2, n2) {
  qe(t2, et(t2), e2, n2);
}
var Hr = Vr(function(t2, e2, n2, r2, i2) {
  return 2 === t2.h && (t2 = $n(t2, Ae([void 0, void 0], r2), i2), pt(r2 = et(e2)), (i2 = Ye(e2, r2, n2)) instanceof Me ? 0 != (2 & i2.M) ? ((i2 = i2.Z()).push(t2), qe(e2, r2, n2, i2)) : i2.Qa(t2) : Array.isArray(i2) ? (2 & tt(i2) && qe(e2, r2, n2, i2 = on(i2)), i2.push(t2)) : qe(e2, r2, n2, [t2]), true);
}, function(t2, e2, n2, r2, i2) {
  if (e2 instanceof Me) e2.forEach((e3, s2) => {
    vr(t2, n2, Ae([s2, e3], r2), i2);
  });
  else if (Array.isArray(e2)) for (let s2 = 0; s2 < e2.length; s2++) {
    const o2 = e2[s2];
    Array.isArray(o2) && vr(t2, n2, Ae(o2, r2), i2);
  }
});
var Wr = 0;
function zr(t2, e2, n2) {
  if (e2 = function(t3) {
    if (null == t3) return t3;
    const e3 = typeof t3;
    if ("bigint" === e3) return String(BigInt.asIntN(64, t3));
    if (Kt(t3)) {
      if ("string" === e3) return Zt(t3);
      if ("number" === e3) return Jt(t3);
    }
  }(e2), null != e2) {
    if ("string" == typeof e2) ar(e2);
    if (null != e2) switch (gr(t2, n2, 0), typeof e2) {
      case "number":
        t2 = t2.g, Nt(e2), ur(t2, Pt, Ot);
        break;
      case "bigint":
        n2 = BigInt.asUintN(64, e2), n2 = new hr(Number(n2 & BigInt(4294967295)), Number(n2 >> BigInt(32))), ur(t2.g, n2.h, n2.g);
        break;
      default:
        n2 = ar(e2), ur(t2.g, n2.h, n2.g);
    }
  }
}
function Kr(t2, e2, n2) {
  null != (e2 = Yt(e2)) && null != e2 && (gr(t2, n2, 0), fr(t2.g, e2));
}
function Yr(t2, e2, n2) {
  null != (e2 = Wt(e2)) && (gr(t2, n2, 0), t2.g.g.push(e2 ? 1 : 0));
}
function $r(t2, e2, n2) {
  null != (e2 = re(e2)) && _r(t2, n2, c(e2));
}
function qr(t2, e2, n2, r2, i2) {
  e2 instanceof nr ? (we(e2), e2 = e2.u) : e2 = Array.isArray(e2) ? Ae(e2, r2) : void 0, vr(t2, n2, e2, i2);
}
function Jr(t2, e2, n2) {
  null != (e2 = null == e2 || "string" == typeof e2 || I(e2) || e2 instanceof D ? e2 : void 0) && _r(t2, n2, On(e2).buffer);
}
function Zr(t2, e2, n2) {
  return (5 === t2.h || 2 === t2.h) && (e2 = Je(e2, et(e2), n2, 2, false), 2 == t2.h ? Zn(t2, Gn, e2) : e2.push(Gn(t2.g)), true);
}
var Qr;
var ti = Gr(function(t2, e2, n2) {
  if (1 !== t2.h) return false;
  var r2 = t2.g;
  t2 = Bn(r2);
  const i2 = Bn(r2);
  r2 = 2 * (i2 >> 31) + 1;
  const s2 = i2 >>> 20 & 2047;
  return t2 = 4294967296 * (1048575 & i2) + t2, Xr(e2, n2, 2047 == s2 ? t2 ? NaN : r2 * (1 / 0) : 0 == s2 ? 5e-324 * r2 * t2 : r2 * Math.pow(2, s2 - 1075) * (t2 + 4503599627370496)), true;
}, function(t2, e2, n2) {
  null != (e2 = Ht(e2)) && (gr(t2, n2, 1), t2 = t2.g, (n2 = It || (It = new DataView(new ArrayBuffer(8)))).setFloat64(0, +e2, true), Pt = n2.getUint32(0, true), Ot = n2.getUint32(4, true), dr(t2, Pt), dr(t2, Ot));
});
var ei = Gr(function(t2, e2, n2) {
  return 5 === t2.h && (Xr(e2, n2, Gn(t2.g)), true);
}, function(t2, e2, n2) {
  null != (e2 = Ht(e2)) && (gr(t2, n2, 5), t2 = t2.g, Ut(e2), dr(t2, Pt));
});
var ni = jr(Zr, function(t2, e2, n2) {
  if (null != (e2 = Tr(Ht, e2))) for (let o2 = 0; o2 < e2.length; o2++) {
    var r2 = t2, i2 = n2, s2 = e2[o2];
    null != s2 && (gr(r2, i2, 5), r2 = r2.g, Ut(s2), dr(r2, Pt));
  }
});
var ri = jr(Zr, function(t2, e2, n2) {
  if (null != (e2 = Tr(Ht, e2)) && e2.length) {
    gr(t2, n2, 2), lr(t2.g, 4 * e2.length);
    for (let r2 = 0; r2 < e2.length; r2++) n2 = t2.g, Ut(e2[r2]), dr(n2, Pt);
  }
});
var ii = Gr(function(t2, e2, n2) {
  return 0 === t2.h && (Xr(e2, n2, Cn(t2.g, Bt)), true);
}, zr);
var si = Gr(function(t2, e2, n2) {
  return 0 === t2.h && (Xr(e2, n2, 0 === (t2 = Cn(t2.g, Bt)) ? void 0 : t2), true);
}, zr);
var oi = Gr(function(t2, e2, n2) {
  return 0 === t2.h && (Xr(e2, n2, Cn(t2.g, Dt)), true);
}, function(t2, e2, n2) {
  if (null != (e2 = te(e2))) {
    if ("string" == typeof e2) ir(e2);
    if (null != e2) switch (gr(t2, n2, 0), typeof e2) {
      case "number":
        t2 = t2.g, Nt(e2), ur(t2, Pt, Ot);
        break;
      case "bigint":
        n2 = BigInt.asUintN(64, e2), n2 = new sr(Number(n2 & BigInt(4294967295)), Number(n2 >> BigInt(32))), ur(t2.g, n2.h, n2.g);
        break;
      default:
        n2 = ir(e2), ur(t2.g, n2.h, n2.g);
    }
  }
});
var ai = Gr(function(t2, e2, n2) {
  return 0 === t2.h && (Xr(e2, n2, Un(t2.g)), true);
}, Kr);
var hi = jr(function(t2, e2, n2) {
  return (0 === t2.h || 2 === t2.h) && (e2 = Je(e2, et(e2), n2, 2, false), 2 == t2.h ? Zn(t2, Un, e2) : e2.push(Un(t2.g)), true);
}, function(t2, e2, n2) {
  if (null != (e2 = Tr(Yt, e2)) && e2.length) {
    n2 = mr(t2, n2);
    for (let n3 = 0; n3 < e2.length; n3++) fr(t2.g, e2[n3]);
    yr(t2, n2);
  }
});
var ci = Gr(function(t2, e2, n2) {
  return 0 === t2.h && (Xr(e2, n2, 0 === (t2 = Un(t2.g)) ? void 0 : t2), true);
}, Kr);
var ui = Gr(function(t2, e2, n2) {
  return 0 === t2.h && (Xr(e2, n2, Nn(t2.g)), true);
}, Yr);
var li = Gr(function(t2, e2, n2) {
  return 0 === t2.h && (Xr(e2, n2, false === (t2 = Nn(t2.g)) ? void 0 : t2), true);
}, Yr);
var fi = jr(function(t2, e2, n2) {
  if (2 !== t2.h) return false;
  t2 = qn(t2);
  const r2 = et(e2);
  return pt(r2), Je(e2, r2, n2, 2).push(t2), true;
}, function(t2, e2, n2) {
  if (null != (e2 = Tr(re, e2))) for (let o2 = 0; o2 < e2.length; o2++) {
    var r2 = t2, i2 = n2, s2 = e2[o2];
    null != s2 && _r(r2, i2, c(s2));
  }
});
var di = Gr(function(t2, e2, n2) {
  return 2 === t2.h && (Xr(e2, n2, "" === (t2 = qn(t2)) ? void 0 : t2), true);
}, $r);
var pi = Gr(function(t2, e2, n2) {
  return 2 === t2.h && (Xr(e2, n2, qn(t2)), true);
}, $r);
var gi = Vr(function(t2, e2, n2, r2, i2) {
  return 2 === t2.h && ($n(t2, fn(e2, r2, n2, true), i2), true);
}, qr);
var mi = Vr(function(t2, e2, n2, r2, i2) {
  return 2 === t2.h && ($n(t2, fn(e2, r2, n2), i2), true);
}, qr);
Qr = new Er(function(t2, e2, n2, r2, i2) {
  if (2 !== t2.h) return false;
  r2 = Ae(void 0, r2);
  let s2 = et(e2);
  pt(s2);
  let o2 = Je(e2, s2, n2, 3);
  return s2 = et(e2), 4 & tt(o2) && (o2 = H(o2), nt(o2, -2079 & (1 | tt(o2))), qe(e2, s2, n2, o2)), o2.push(r2), $n(t2, r2, i2), true;
}, function(t2, e2, n2, r2, i2) {
  if (Array.isArray(e2)) for (let s2 = 0; s2 < e2.length; s2++) qr(t2, e2[s2], n2, r2, i2);
}, true);
var yi = Vr(function(t2, e2, n2, r2, i2, s2) {
  return 2 === t2.h && (un(e2, et(e2), s2, n2), $n(t2, e2 = fn(e2, r2, n2), i2), true);
}, qr);
var _i = Gr(function(t2, e2, n2) {
  return 2 === t2.h && (Xr(e2, n2, Jn(t2)), true);
}, Jr);
var vi = jr(function(t2, e2, n2) {
  return (0 === t2.h || 2 === t2.h) && (e2 = Je(e2, et(e2), n2, 2, false), 2 == t2.h ? Zn(t2, Dn, e2) : e2.push(Dn(t2.g)), true);
}, function(t2, e2, n2) {
  if (null != (e2 = Tr($t, e2))) for (let o2 = 0; o2 < e2.length; o2++) {
    var r2 = t2, i2 = n2, s2 = e2[o2];
    null != s2 && (gr(r2, i2, 0), lr(r2.g, s2));
  }
});
var Ei = Gr(function(t2, e2, n2) {
  return 0 === t2.h && (Xr(e2, n2, Un(t2.g)), true);
}, function(t2, e2, n2) {
  null != (e2 = Yt(e2)) && (e2 = parseInt(e2, 10), gr(t2, n2, 0), fr(t2.g, e2));
});
var wi = class {
  constructor(t2, e2) {
    this.h = t2, this.g = e2, this.l = pn, this.m = yn, this.defaultValue = void 0;
  }
};
function Ti(t2, e2) {
  return new wi(t2, e2);
}
function Ai(t2, e2) {
  return (n2, r2) => {
    if (Qn.length) {
      const t3 = Qn.pop();
      t3.o(r2), Vn(t3.g, n2, r2), n2 = t3;
    } else n2 = new class {
      constructor(t3, e3) {
        if (zn.length) {
          const n3 = zn.pop();
          Vn(n3, t3, e3), t3 = n3;
        } else t3 = new class {
          constructor(t4, e4) {
            this.h = null, this.m = false, this.g = this.l = this.j = 0, Vn(this, t4, e4);
          }
          clear() {
            this.h = null, this.m = false, this.g = this.l = this.j = 0, this.ea = false;
          }
        }(t3, e3);
        this.g = t3, this.l = this.g.g, this.h = this.m = -1, this.o(e3);
      }
      o({ ja: t3 = false } = {}) {
        this.ja = t3;
      }
    }(n2, r2);
    try {
      const r3 = new t2(), s2 = r3.u;
      br(e2)(s2, n2);
      var i2 = r3;
    } finally {
      n2.g.clear(), n2.m = -1, n2.h = -1, Qn.length < 100 && Qn.push(n2);
    }
    return i2;
  };
}
function bi(t2) {
  return function() {
    we(this);
    const e2 = new class {
      constructor() {
        this.l = [], this.h = 0, this.g = new class {
          constructor() {
            this.g = [];
          }
          length() {
            return this.g.length;
          }
          end() {
            const t3 = this.g;
            return this.g = [], t3;
          }
        }();
      }
    }();
    Br(this.u, e2, Pr(t2)), pr(e2, e2.g.end());
    const n2 = new Uint8Array(e2.h), r2 = e2.l, i2 = r2.length;
    let s2 = 0;
    for (let t3 = 0; t3 < i2; t3++) {
      const e3 = r2[t3];
      n2.set(e3, s2), s2 += e3.length;
    }
    return e2.l = [n2], n2;
  };
}
var ki = class extends nr {
  constructor(t2) {
    super(t2);
  }
};
var Si = [0, di, Gr(function(t2, e2, n2) {
  return 2 === t2.h && (Xr(e2, n2, (t2 = Jn(t2)) === N() ? void 0 : t2), true);
}, function(t2, e2, n2) {
  if (null != e2) {
    if (e2 instanceof nr) {
      const r2 = e2.Ta;
      return void (r2 && (e2 = r2(e2), null != e2 && _r(t2, n2, On(e2).buffer)));
    }
    if (Array.isArray(e2)) return;
  }
  Jr(t2, e2, n2);
})];
var xi = [0, ai, Ei, ui, -1, hi, Ei, -1];
var Li = class extends nr {
  constructor() {
    super();
  }
};
var Ri = [0, ui, pi, ui, Ei, -1, jr(function(t2, e2, n2) {
  return (0 === t2.h || 2 === t2.h) && (e2 = Je(e2, et(e2), n2, 2, false), 2 == t2.h ? Zn(t2, jn, e2) : e2.push(Un(t2.g)), true);
}, function(t2, e2, n2) {
  if (null != (e2 = Tr(Yt, e2)) && e2.length) {
    n2 = mr(t2, n2);
    for (let n3 = 0; n3 < e2.length; n3++) fr(t2.g, e2[n3]);
    yr(t2, n2);
  }
}), pi, -1, [0, ui, -1], Ei, ui, -1];
var Fi = [0, pi, -2];
var Mi = class extends nr {
  constructor() {
    super();
  }
};
var Ii = [0];
var Pi = [0, ai, ui, 1, ui, -3];
var Oi = [0, pi, ui, -1, ai, [0, [1, 2, 3, 4, 5, 6, 7], yi, Ii, yi, Ri, yi, Fi, yi, Pi, yi, xi, yi, [0, pi, -2], yi, [0, pi, Ei]], [0, pi], ui, [0, [1, 3], [2, 4], yi, [0, hi], -1, yi, [0, fi], -1, Qr, [0, pi, -1]], pi];
var Ci = class extends nr {
  constructor(t2) {
    super(t2, 2);
  }
};
var Ni = {};
var Ui = Ni.P = {};
Ni[336783863] = Oi, Ui[336783863] = 1;
var Di = [0, si, -1, li, -3, si, hi, di, ci, si, -1, li, ci, li, -2, di];
function Bi(t2, e2) {
  an(t2, 2, ne(e2), "");
}
function Gi(t2, e2) {
  Fn(t2, 3, e2);
}
function ji(t2, e2) {
  Fn(t2, 4, e2);
}
var Vi = class extends nr {
  constructor(t2) {
    super(t2, 500);
  }
  o(t2) {
    return yn(this, 0, 7, t2);
  }
};
var Xi = [-1, { P: {} }];
var Hi = [0, pi, 1, Xi];
var Wi = [0, pi, fi, Xi];
function zi(t2, e2) {
  wn(t2, 1, Vi, e2);
}
function Ki(t2, e2) {
  Fn(t2, 10, e2);
}
function Yi(t2, e2) {
  Fn(t2, 15, e2);
}
var $i = class extends nr {
  constructor(t2) {
    super(t2, 500);
  }
  o(t2) {
    return yn(this, 0, 1001, t2);
  }
};
var qi = [-500, Qr, [-500, di, -1, fi, -3, [-2, Ni, ui], Qr, Si, ci, -1, Hi, Wi, Qr, [0, di, li], di, Di, ci, fi, 987, fi], 4, Qr, [-500, pi, -1, [-1, { P: {} }], 998, pi], Qr, [-500, pi, fi, -1, [-2, { P: {} }, ui], 997, fi, -1], ci, Qr, [-500, pi, fi, Xi, 998, fi], fi, ci, Hi, Wi, Qr, [0, di, -1, Xi], fi, -2, Di, di, -1, li, 979, Xi, Qr, Si];
$i.prototype.g = bi(qi);
var Ji = Ai($i, qi);
var Zi = class extends nr {
  constructor(t2) {
    super(t2);
  }
};
var Qi = class extends nr {
  constructor(t2) {
    super(t2);
  }
  g() {
    return mn(this, Zi, 1);
  }
};
var ts = [0, Qr, [0, ai, ei, pi, -1]];
var es = Ai(Qi, ts);
var ns = class extends nr {
  constructor(t2) {
    super(t2);
  }
};
var rs = class extends nr {
  constructor(t2) {
    super(t2);
  }
};
var is = class extends nr {
  constructor(t2) {
    super(t2);
  }
  h() {
    return pn(this, ns, 2);
  }
  g() {
    return mn(this, rs, 5);
  }
};
var ss = Ai(class extends nr {
  constructor(t2) {
    super(t2);
  }
}, [0, fi, hi, ri, [0, Ei, [0, ai, -3], [0, ei, -3], [0, ai, -1, [0, Qr, [0, ai, -2]]], Qr, [0, ei, -1, pi, ei]], pi, -1, ii, Qr, [0, ai, ei], fi, ii]);
var os = class extends nr {
  constructor(t2) {
    super(t2);
  }
};
var as = Ai(class extends nr {
  constructor(t2) {
    super(t2);
  }
}, [0, Qr, [0, ei, -4]]);
var hs = class extends nr {
  constructor(t2) {
    super(t2);
  }
};
var cs = Ai(class extends nr {
  constructor(t2) {
    super(t2);
  }
}, [0, Qr, [0, ei, -4]]);
var us = class extends nr {
  constructor(t2) {
    super(t2);
  }
};
var ls = [0, ai, -1, ri, Ei];
var fs = class extends nr {
  constructor() {
    super();
  }
};
fs.prototype.g = bi([0, ei, -4, ii]);
var ds = class extends nr {
  constructor(t2) {
    super(t2);
  }
};
var ps = Ai(class extends nr {
  constructor(t2) {
    super(t2);
  }
}, [0, Qr, [0, 1, ai, pi, ts], ii]);
var gs = class extends nr {
  constructor(t2) {
    super(t2);
  }
};
var ms = class extends nr {
  constructor(t2) {
    super(t2);
  }
  ra() {
    const t2 = Qe(this);
    return null == t2 ? N() : t2;
  }
};
var ys = class extends nr {
  constructor(t2) {
    super(t2);
  }
};
var _s = [1, 2];
var vs = Ai(class extends nr {
  constructor(t2) {
    super(t2);
  }
}, [0, Qr, [0, _s, yi, [0, ri], yi, [0, _i], ai, pi], ii]);
var Es = class extends nr {
  constructor(t2) {
    super(t2);
  }
};
var ws = [0, pi, ai, ei, fi, -1];
var Ts = class extends nr {
  constructor(t2) {
    super(t2);
  }
};
var As = [0, ui, -1];
var bs = class extends nr {
  constructor(t2) {
    super(t2);
  }
};
var ks = [1, 2, 3, 4, 5];
var Ss = class extends nr {
  constructor(t2) {
    super(t2);
  }
  g() {
    return null != Qe(this);
  }
  h() {
    return null != re(ze(this, 2));
  }
};
var xs = class extends nr {
  constructor(t2) {
    super(t2);
  }
  g() {
    var _a2;
    return (_a2 = Wt(ze(this, 2))) != null ? _a2 : false;
  }
};
var Ls = [0, _i, pi, [0, ai, ii, -1], [0, oi, ii]];
var Rs = [0, Ls, ui, [0, ks, yi, Pi, yi, Ri, yi, xi, yi, Ii, yi, Fi], Ei];
var Fs = class extends nr {
  constructor(t2) {
    super(t2);
  }
};
var Ms = [0, Rs, ei, -1, ai];
var Is = Ti(502141897, Fs);
Ni[502141897] = Ms, Ui[502141897] = 1;
var Ps = [0, Ls];
Ni[512499200] = Ps;
var Os = [0, Ps];
Ni[515723506] = Os;
var Cs = Ai(class extends nr {
  constructor(t2) {
    super(t2);
  }
}, [0, [0, Ei, -1, ni, vi], ls]);
var Ns = [0, Rs];
Ni[508981768] = Ns;
var Us = class extends nr {
  constructor(t2) {
    super(t2);
  }
};
var Ds = class extends nr {
  constructor(t2) {
    super(t2);
  }
};
var Bs = [0, Rs, ei, Ns, ui];
var Gs = [0, Rs, Ms, Bs, ei, Os];
Ni[508968149] = Bs;
var js = Ti(508968150, Ds);
Ni[508968150] = Gs, Ui[508968150] = 1, Ui[508968149] = 1;
var Vs = class extends nr {
  constructor(t2) {
    super(t2);
  }
};
var Xs = Ti(513916220, Vs);
Ni[513916220] = [0, Rs, Gs, ai], Ui[513916220] = 1;
var Hs = class extends nr {
  constructor(t2) {
    super(t2);
  }
  h() {
    return pn(this, Es, 2);
  }
  g() {
    $e(this, 2);
  }
};
var Ws = [0, Rs, ws];
Ni[478825465] = Ws, Ui[478825465] = 1;
var zs = [0, Rs];
Ni[478825422] = zs;
var Ks = class extends nr {
  constructor(t2) {
    super(t2);
  }
};
var Ys = class extends nr {
  constructor(t2) {
    super(t2);
  }
};
var $s = class extends nr {
  constructor(t2) {
    super(t2);
  }
};
var qs = class extends nr {
  constructor(t2) {
    super(t2);
  }
};
var Js = class extends nr {
  constructor(t2) {
    super(t2);
  }
};
var Zs = [0, Rs, zs, Ws, -1];
var Qs = [0, Rs, ei, ai];
var to = [0, Rs, ei];
var eo = [0, Rs, Qs, to, ei];
var no = [0, Rs, eo, Zs];
Ni[463370452] = Zs, Ni[464864288] = Qs, Ni[474472470] = to;
var ro = Ti(462713202, qs);
Ni[462713202] = eo;
var io = Ti(479097054, Js);
Ni[479097054] = no, Ui[479097054] = 1, Ui[463370452] = 1, Ui[464864288] = 1, Ui[462713202] = 1, Ui[474472470] = 1;
var so = class extends nr {
  constructor(t2) {
    super(t2);
  }
};
var oo = class extends nr {
  constructor(t2) {
    super(t2);
  }
};
var ao = class extends nr {
  constructor(t2) {
    super(t2);
  }
};
var ho = class extends nr {
  constructor() {
    super();
  }
};
var co = [0, Rs, ei, -1, ai];
var uo = [0, Rs, ei, ui];
ho.prototype.g = bi([0, Rs, to, [0, Rs], Ms, Bs, co, uo]), Ni[514774813] = co, Ni[518928384] = uo;
var lo = class extends nr {
  constructor(t2) {
    super(t2);
  }
};
var fo = Ti(456383383, lo);
Ni[456383383] = [0, Rs, ws], Ui[456383383] = 1;
var po = class extends nr {
  constructor(t2) {
    super(t2);
  }
};
var go = Ti(476348187, po);
Ni[476348187] = [0, Rs, As], Ui[476348187] = 1;
var mo = class extends nr {
  constructor(t2) {
    super(t2);
  }
};
var yo = class extends nr {
  constructor(t2) {
    super(t2);
  }
};
var _o = [0, Ei, -1];
var vo = Ti(458105876, class extends nr {
  constructor(t2) {
    super(t2);
  }
  g() {
    var t2 = this.u;
    const e2 = et(t2);
    const n2 = 2 & e2;
    return t2 = function(t3, e3, n3) {
      var r2 = yo;
      const i2 = 2 & e3;
      let s2 = false;
      if (null == n3) {
        if (i2) return Ne();
        n3 = [];
      } else if (n3.constructor === Me) {
        if (0 == (2 & n3.M) || i2) return n3;
        n3 = n3.Z();
      } else Array.isArray(n3) ? s2 = !!(2 & tt(n3)) : n3 = [];
      if (i2) {
        if (!n3.length) return Ne();
        s2 || (s2 = true, rt(n3));
      } else s2 && (s2 = false, n3 = on(n3));
      return s2 || (64 & tt(n3) ? Q(n3, 32) : 32 & e3 && Z(n3, 32)), qe(t3, e3, 2, r2 = new Me(n3, r2, se, void 0)), r2;
    }(t2, e2, Ye(t2, e2, 2)), !n2 && yo && (t2.va = true), t2;
  }
});
Ni[458105876] = [0, _o, Hr, [true, ii, [0, pi, -1, fi]]], Ui[458105876] = 1;
var Eo = class extends nr {
  constructor(t2) {
    super(t2);
  }
};
var wo = Ti(458105758, Eo);
Ni[458105758] = [0, Rs, pi, _o], Ui[458105758] = 1;
var To = class extends nr {
  constructor(t2) {
    super(t2);
  }
};
var Ao = Ti(443442058, To);
Ni[443442058] = [0, Rs, pi, ai, ei, fi, -1], Ui[443442058] = 1, Ui[514774813] = 1;
var bo = class extends nr {
  constructor(t2) {
    super(t2);
  }
};
var ko = Ti(516587230, bo);
function So(t2, e2) {
  return e2 = e2 ? e2.clone() : new Es(), void 0 !== t2.displayNamesLocale ? $e(e2, 1, ne(t2.displayNamesLocale)) : void 0 === t2.displayNamesLocale && $e(e2, 1), void 0 !== t2.maxResults ? xn(e2, 2, t2.maxResults) : "maxResults" in t2 && $e(e2, 2), void 0 !== t2.scoreThreshold ? Ln(e2, 3, t2.scoreThreshold) : "scoreThreshold" in t2 && $e(e2, 3), void 0 !== t2.categoryAllowlist ? Rn(e2, 4, t2.categoryAllowlist) : "categoryAllowlist" in t2 && $e(e2, 4), void 0 !== t2.categoryDenylist ? Rn(e2, 5, t2.categoryDenylist) : "categoryDenylist" in t2 && $e(e2, 5), e2;
}
function xo(t2, e2 = -1, n2 = "") {
  return { categories: t2.map((t3) => {
    var _a2, _b, _c, _d;
    return { index: (_a2 = Tn(An(t3, 1), 0)) != null ? _a2 : -1, score: (_b = bn(t3, 2)) != null ? _b : 0, categoryName: (_c = kn(t3, 3)) != null ? _c : "", displayName: (_d = kn(t3, 4)) != null ? _d : "" };
  }), headIndex: e2, headName: n2 };
}
function Lo(t2) {
  var _a2, _b, _c, _d, _e2, _f, _g, _h2, _i2, _j, _k, _l, _m;
  var e2 = en(t2, 3, Ht, tn()), n2 = en(t2, 2, Yt, tn()), r2 = en(t2, 1, re, tn()), i2 = en(t2, 9, re, tn());
  const s2 = { categories: [], keypoints: [] };
  for (let t3 = 0; t3 < e2.length; t3++) s2.categories.push({ score: e2[t3], index: (_a2 = n2[t3]) != null ? _a2 : -1, categoryName: (_b = r2[t3]) != null ? _b : "", displayName: (_c = i2[t3]) != null ? _c : "" });
  if ((e2 = (_d = pn(t2, is, 4)) == null ? void 0 : _d.h()) && (s2.boundingBox = { originX: (_e2 = An(e2, 1)) != null ? _e2 : 0, originY: (_f = An(e2, 2)) != null ? _f : 0, width: (_g = An(e2, 3)) != null ? _g : 0, height: (_h2 = An(e2, 4)) != null ? _h2 : 0, angle: 0 }), (_i2 = pn(t2, is, 4)) == null ? void 0 : _i2.g().length) for (const e3 of pn(t2, is, 4).g()) s2.keypoints.push({ x: (_j = Ze(e3, 1)) != null ? _j : 0, y: (_k = Ze(e3, 2)) != null ? _k : 0, score: (_l = Ze(e3, 4)) != null ? _l : 0, label: (_m = re(ze(e3, 3))) != null ? _m : "" });
  return s2;
}
function Ro(t2) {
  var _a2, _b, _c, _d;
  const e2 = [];
  for (const n2 of mn(t2, hs, 1)) e2.push({ x: (_a2 = bn(n2, 1)) != null ? _a2 : 0, y: (_b = bn(n2, 2)) != null ? _b : 0, z: (_c = bn(n2, 3)) != null ? _c : 0, visibility: (_d = bn(n2, 4)) != null ? _d : 0 });
  return e2;
}
function Fo(t2) {
  var _a2, _b, _c, _d;
  const e2 = [];
  for (const n2 of mn(t2, os, 1)) e2.push({ x: (_a2 = bn(n2, 1)) != null ? _a2 : 0, y: (_b = bn(n2, 2)) != null ? _b : 0, z: (_c = bn(n2, 3)) != null ? _c : 0, visibility: (_d = bn(n2, 4)) != null ? _d : 0 });
  return e2;
}
function Mo(t2) {
  return Array.from(t2, (t3) => t3 > 127 ? t3 - 256 : t3);
}
function Io(t2, e2) {
  if (t2.length !== e2.length) throw Error(`Cannot compute cosine similarity between embeddings of different sizes (${t2.length} vs. ${e2.length}).`);
  let n2 = 0, r2 = 0, i2 = 0;
  for (let s2 = 0; s2 < t2.length; s2++) n2 += t2[s2] * e2[s2], r2 += t2[s2] * t2[s2], i2 += e2[s2] * e2[s2];
  if (r2 <= 0 || i2 <= 0) throw Error("Cannot compute cosine similarity on embedding with 0 norm.");
  return n2 / Math.sqrt(r2 * i2);
}
var Po;
Ni[516587230] = [0, Rs, co, uo, ei], Ui[516587230] = 1, Ui[518928384] = 1;
var Oo = new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 5, 1, 96, 0, 1, 123, 3, 2, 1, 0, 10, 10, 1, 8, 0, 65, 0, 253, 15, 253, 98, 11]);
function Co() {
  return __async(this, null, function* () {
    if (void 0 === Po) try {
      yield WebAssembly.instantiate(Oo), Po = true;
    } catch (e2) {
      Po = false;
    }
    return Po;
  });
}
function No(t2, e2 = "") {
  return __async(this, null, function* () {
    const n2 = (yield Co()) ? "wasm_internal" : "wasm_nosimd_internal";
    return { wasmLoaderPath: `${e2}/${t2}_${n2}.js`, wasmBinaryPath: `${e2}/${t2}_${n2}.wasm` };
  });
}
var Uo = class {
};
function Do() {
  var t2 = navigator;
  return "undefined" != typeof OffscreenCanvas && (!function(t3 = navigator) {
    return (t3 = t3.userAgent).includes("Safari") && !t3.includes("Chrome");
  }(t2) || !!((t2 = t2.userAgent.match(/Version\/([\d]+).*Safari/)) && t2.length >= 1 && Number(t2[1]) >= 17));
}
function Bo(t2) {
  return __async(this, null, function* () {
    if ("function" != typeof importScripts) {
      const e2 = document.createElement("script");
      return e2.src = t2.toString(), e2.crossOrigin = "anonymous", new Promise((t3, n2) => {
        e2.addEventListener("load", () => {
          t3();
        }, false), e2.addEventListener("error", (t4) => {
          n2(t4);
        }, false), document.body.appendChild(e2);
      });
    }
    importScripts(t2.toString());
  });
}
function Go(t2) {
  return void 0 !== t2.videoWidth ? [t2.videoWidth, t2.videoHeight] : void 0 !== t2.naturalWidth ? [t2.naturalWidth, t2.naturalHeight] : void 0 !== t2.displayWidth ? [t2.displayWidth, t2.displayHeight] : [t2.width, t2.height];
}
function jo(t2, e2, n2) {
  t2.m || console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target"), n2(e2 = t2.i.stringToNewUTF8(e2)), t2.i._free(e2);
}
function Vo(t2, e2, n2) {
  if (!t2.i.canvas) throw Error("No OpenGL canvas configured.");
  if (n2 ? t2.i._bindTextureToStream(n2) : t2.i._bindTextureToCanvas(), !(n2 = t2.i.canvas.getContext("webgl2") || t2.i.canvas.getContext("webgl"))) throw Error("Failed to obtain WebGL context from the provided canvas. `getContext()` should only be invoked with `webgl` or `webgl2`.");
  t2.i.gpuOriginForWebTexturesIsBottomLeft && n2.pixelStorei(n2.UNPACK_FLIP_Y_WEBGL, true), n2.texImage2D(n2.TEXTURE_2D, 0, n2.RGBA, n2.RGBA, n2.UNSIGNED_BYTE, e2), t2.i.gpuOriginForWebTexturesIsBottomLeft && n2.pixelStorei(n2.UNPACK_FLIP_Y_WEBGL, false);
  const [r2, i2] = Go(e2);
  return !t2.l || r2 === t2.i.canvas.width && i2 === t2.i.canvas.height || (t2.i.canvas.width = r2, t2.i.canvas.height = i2), [r2, i2];
}
function Xo(t2, e2, n2) {
  t2.m || console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target");
  const r2 = new Uint32Array(e2.length);
  for (let n3 = 0; n3 < e2.length; n3++) r2[n3] = t2.i.stringToNewUTF8(e2[n3]);
  e2 = t2.i._malloc(4 * r2.length), t2.i.HEAPU32.set(r2, e2 >> 2), n2(e2);
  for (const e3 of r2) t2.i._free(e3);
  t2.i._free(e2);
}
function Ho(t2, e2, n2) {
  t2.i.simpleListeners = t2.i.simpleListeners || {}, t2.i.simpleListeners[e2] = n2;
}
function Wo(t2, e2, n2) {
  let r2 = [];
  t2.i.simpleListeners = t2.i.simpleListeners || {}, t2.i.simpleListeners[e2] = (t3, e3, i2) => {
    e3 ? (n2(r2, i2), r2 = []) : r2.push(t3);
  };
}
Uo.forVisionTasks = function(t2) {
  return No("vision", t2);
}, Uo.forTextTasks = function(t2) {
  return No("text", t2);
}, Uo.forGenAiExperimentalTasks = function(t2) {
  return No("genai_experimental", t2);
}, Uo.forGenAiTasks = function(t2) {
  return No("genai", t2);
}, Uo.forAudioTasks = function(t2) {
  return No("audio", t2);
}, Uo.isSimdSupported = function() {
  return Co();
};
function zo(t2, e2, n2, r2) {
  return __async(this, null, function* () {
    return t2 = yield ((t3, e3, n3, r3, i2) => __async(this, null, function* () {
      if (e3 && (yield Bo(e3)), !self.ModuleFactory) throw Error("ModuleFactory not set.");
      if (n3 && (yield Bo(n3), !self.ModuleFactory)) throw Error("ModuleFactory not set.");
      return self.Module && i2 && ((e3 = self.Module).locateFile = i2.locateFile, i2.mainScriptUrlOrBlob && (e3.mainScriptUrlOrBlob = i2.mainScriptUrlOrBlob)), i2 = yield self.ModuleFactory(self.Module || i2), self.ModuleFactory = self.Module = void 0, new t3(i2, r3);
    }))(t2, n2.wasmLoaderPath, n2.assetLoaderPath, e2, { locateFile: (t3) => t3.endsWith(".wasm") ? n2.wasmBinaryPath.toString() : n2.assetBinaryPath && t3.endsWith(".data") ? n2.assetBinaryPath.toString() : t3 }), yield t2.o(r2), t2;
  });
}
function Ko(t2, e2) {
  const n2 = pn(t2.baseOptions, Ss, 1) || new Ss();
  "string" == typeof e2 ? ($e(n2, 2, ne(e2)), $e(n2, 1)) : e2 instanceof Uint8Array && ($e(n2, 1, lt(e2, false, false)), $e(n2, 2)), yn(t2.baseOptions, 0, 1, n2);
}
function Yo(t2) {
  try {
    const e2 = t2.H.length;
    if (1 === e2) throw Error(t2.H[0].message);
    if (e2 > 1) throw Error("Encountered multiple errors: " + t2.H.map((t3) => t3.message).join(", "));
  } finally {
    t2.H = [];
  }
}
function $o(t2, e2) {
  t2.B = Math.max(t2.B, e2);
}
function qo(t2, e2) {
  t2.A = new Vi(), Bi(t2.A, "PassThroughCalculator"), Gi(t2.A, "free_memory"), ji(t2.A, "free_memory_unused_out"), Ki(e2, "free_memory"), zi(e2, t2.A);
}
function Jo(t2, e2) {
  Gi(t2.A, e2), ji(t2.A, e2 + "_unused_out");
}
function Zo(t2) {
  t2.g.addBoolToStream(true, "free_memory", t2.B);
}
var Qo = class {
  constructor(t2) {
    this.g = t2, this.H = [], this.B = 0, this.g.setAutoRenderToScreen(false);
  }
  l(t2, e2 = true) {
    var _a2, _b, _c, _d, _e2, _f;
    if (e2) {
      const e3 = t2.baseOptions || {};
      if (((_a2 = t2.baseOptions) == null ? void 0 : _a2.modelAssetBuffer) && ((_b = t2.baseOptions) == null ? void 0 : _b.modelAssetPath)) throw Error("Cannot set both baseOptions.modelAssetPath and baseOptions.modelAssetBuffer");
      if (!(((_c = pn(this.baseOptions, Ss, 1)) == null ? void 0 : _c.g()) || ((_d = pn(this.baseOptions, Ss, 1)) == null ? void 0 : _d.h()) || ((_e2 = t2.baseOptions) == null ? void 0 : _e2.modelAssetBuffer) || ((_f = t2.baseOptions) == null ? void 0 : _f.modelAssetPath))) throw Error("Either baseOptions.modelAssetPath or baseOptions.modelAssetBuffer must be set");
      if (function(t3, e4) {
        let n2 = pn(t3.baseOptions, bs, 3);
        if (!n2) {
          var r2 = n2 = new bs(), i2 = new Mi();
          _n(r2, 4, ks, i2);
        }
        "delegate" in e4 && ("GPU" === e4.delegate ? (e4 = n2, r2 = new Li(), _n(e4, 2, ks, r2)) : (e4 = n2, r2 = new Mi(), _n(e4, 4, ks, r2))), yn(t3.baseOptions, 0, 3, n2);
      }(this, e3), e3.modelAssetPath) return fetch(e3.modelAssetPath.toString()).then((t3) => {
        if (t3.ok) return t3.arrayBuffer();
        throw Error(`Failed to fetch model: ${e3.modelAssetPath} (${t3.status})`);
      }).then((t3) => {
        try {
          this.g.i.FS_unlink("/model.dat");
        } catch (e4) {
        }
        this.g.i.FS_createDataFile("/", "model.dat", new Uint8Array(t3), true, false, false), Ko(this, "/model.dat"), this.m(), this.J();
      });
      if (e3.modelAssetBuffer instanceof Uint8Array) Ko(this, e3.modelAssetBuffer);
      else if (e3.modelAssetBuffer) return function(t3) {
        return __async(this, null, function* () {
          const e4 = [];
          for (var n2 = 0; ; ) {
            const { done: r2, value: i2 } = yield t3.read();
            if (r2) break;
            e4.push(i2), n2 += i2.length;
          }
          if (0 === e4.length) return new Uint8Array(0);
          if (1 === e4.length) return e4[0];
          t3 = new Uint8Array(n2), n2 = 0;
          for (const r2 of e4) t3.set(r2, n2), n2 += r2.length;
          return t3;
        });
      }(e3.modelAssetBuffer).then((t3) => {
        Ko(this, t3), this.m(), this.J();
      });
    }
    return this.m(), this.J(), Promise.resolve();
  }
  J() {
  }
  ga() {
    let t2;
    if (this.g.ga((e2) => {
      t2 = Ji(e2);
    }), !t2) throw Error("Failed to retrieve CalculatorGraphConfig");
    return t2;
  }
  setGraph(t2, e2) {
    this.g.attachErrorListener((t3, e3) => {
      this.H.push(Error(e3));
    }), this.g.Oa(), this.g.setGraph(t2, e2), this.A = void 0, Yo(this);
  }
  finishProcessing() {
    this.g.finishProcessing(), Yo(this);
  }
  close() {
    this.A = void 0, this.g.closeGraph();
  }
};
function ta(t2, e2) {
  if (!t2) throw Error(`Unable to obtain required WebGL resource: ${e2}`);
  return t2;
}
Qo.prototype.close = Qo.prototype.close, function(e2, n2) {
  e2 = e2.split(".");
  var r2, i2 = t;
  e2[0] in i2 || void 0 === i2.execScript || i2.execScript("var " + e2[0]);
  for (; e2.length && (r2 = e2.shift()); ) e2.length || void 0 === n2 ? i2 = i2[r2] && i2[r2] !== Object.prototype[r2] ? i2[r2] : i2[r2] = {} : i2[r2] = n2;
}("TaskRunner", Qo);
var ea = class {
  constructor(t2, e2, n2, r2) {
    this.g = t2, this.h = e2, this.m = n2, this.l = r2;
  }
  bind() {
    this.g.bindVertexArray(this.h);
  }
  close() {
    this.g.deleteVertexArray(this.h), this.g.deleteBuffer(this.m), this.g.deleteBuffer(this.l);
  }
};
function na(t2, e2, n2) {
  const r2 = t2.g;
  if (n2 = ta(r2.createShader(n2), "Failed to create WebGL shader"), r2.shaderSource(n2, e2), r2.compileShader(n2), !r2.getShaderParameter(n2, r2.COMPILE_STATUS)) throw Error(`Could not compile WebGL shader: ${r2.getShaderInfoLog(n2)}`);
  return r2.attachShader(t2.h, n2), n2;
}
function ra(t2, e2) {
  const n2 = t2.g, r2 = ta(n2.createVertexArray(), "Failed to create vertex array");
  n2.bindVertexArray(r2);
  const i2 = ta(n2.createBuffer(), "Failed to create buffer");
  n2.bindBuffer(n2.ARRAY_BUFFER, i2), n2.enableVertexAttribArray(t2.R), n2.vertexAttribPointer(t2.R, 2, n2.FLOAT, false, 0, 0), n2.bufferData(n2.ARRAY_BUFFER, new Float32Array([-1, -1, -1, 1, 1, 1, 1, -1]), n2.STATIC_DRAW);
  const s2 = ta(n2.createBuffer(), "Failed to create buffer");
  return n2.bindBuffer(n2.ARRAY_BUFFER, s2), n2.enableVertexAttribArray(t2.J), n2.vertexAttribPointer(t2.J, 2, n2.FLOAT, false, 0, 0), n2.bufferData(n2.ARRAY_BUFFER, new Float32Array(e2 ? [0, 1, 0, 0, 1, 0, 1, 1] : [0, 0, 0, 1, 1, 1, 1, 0]), n2.STATIC_DRAW), n2.bindBuffer(n2.ARRAY_BUFFER, null), n2.bindVertexArray(null), new ea(n2, r2, i2, s2);
}
function ia(t2, e2) {
  if (t2.g) {
    if (e2 !== t2.g) throw Error("Cannot change GL context once initialized");
  } else t2.g = e2;
}
function sa(t2, e2, n2, r2) {
  return ia(t2, e2), t2.h || (t2.m(), t2.C()), n2 ? (t2.s || (t2.s = ra(t2, true)), n2 = t2.s) : (t2.v || (t2.v = ra(t2, false)), n2 = t2.v), e2.useProgram(t2.h), n2.bind(), t2.l(), t2 = r2(), n2.g.bindVertexArray(null), t2;
}
function oa(t2, e2, n2) {
  return ia(t2, e2), t2 = ta(e2.createTexture(), "Failed to create texture"), e2.bindTexture(e2.TEXTURE_2D, t2), e2.texParameteri(e2.TEXTURE_2D, e2.TEXTURE_WRAP_S, e2.CLAMP_TO_EDGE), e2.texParameteri(e2.TEXTURE_2D, e2.TEXTURE_WRAP_T, e2.CLAMP_TO_EDGE), e2.texParameteri(e2.TEXTURE_2D, e2.TEXTURE_MIN_FILTER, n2 != null ? n2 : e2.LINEAR), e2.texParameteri(e2.TEXTURE_2D, e2.TEXTURE_MAG_FILTER, n2 != null ? n2 : e2.LINEAR), e2.bindTexture(e2.TEXTURE_2D, null), t2;
}
function aa(t2, e2, n2) {
  ia(t2, e2), t2.A || (t2.A = ta(e2.createFramebuffer(), "Failed to create framebuffe.")), e2.bindFramebuffer(e2.FRAMEBUFFER, t2.A), e2.framebufferTexture2D(e2.FRAMEBUFFER, e2.COLOR_ATTACHMENT0, e2.TEXTURE_2D, n2, 0);
}
function ha(t2) {
  var _a2;
  (_a2 = t2.g) == null ? void 0 : _a2.bindFramebuffer(t2.g.FRAMEBUFFER, null);
}
var ca = class {
  H() {
    return "\n  precision mediump float;\n  varying vec2 vTex;\n  uniform sampler2D inputTexture;\n  void main() {\n    gl_FragColor = texture2D(inputTexture, vTex);\n  }\n ";
  }
  m() {
    const t2 = this.g;
    if (this.h = ta(t2.createProgram(), "Failed to create WebGL program"), this.da = na(this, "\n  attribute vec2 aVertex;\n  attribute vec2 aTex;\n  varying vec2 vTex;\n  void main(void) {\n    gl_Position = vec4(aVertex, 0.0, 1.0);\n    vTex = aTex;\n  }", t2.VERTEX_SHADER), this.ca = na(this, this.H(), t2.FRAGMENT_SHADER), t2.linkProgram(this.h), !t2.getProgramParameter(this.h, t2.LINK_STATUS)) throw Error(`Error during program linking: ${t2.getProgramInfoLog(this.h)}`);
    this.R = t2.getAttribLocation(this.h, "aVertex"), this.J = t2.getAttribLocation(this.h, "aTex");
  }
  C() {
  }
  l() {
  }
  close() {
    if (this.h) {
      const t2 = this.g;
      t2.deleteProgram(this.h), t2.deleteShader(this.da), t2.deleteShader(this.ca);
    }
    this.A && this.g.deleteFramebuffer(this.A), this.v && this.v.close(), this.s && this.s.close();
  }
};
var ua = class extends ca {
  H() {
    return "\n  precision mediump float;\n  uniform sampler2D backgroundTexture;\n  uniform sampler2D maskTexture;\n  uniform sampler2D colorMappingTexture;\n  varying vec2 vTex;\n  void main() {\n    vec4 backgroundColor = texture2D(backgroundTexture, vTex);\n    float category = texture2D(maskTexture, vTex).r;\n    vec4 categoryColor = texture2D(colorMappingTexture, vec2(category, 0.0));\n    gl_FragColor = mix(backgroundColor, categoryColor, categoryColor.a);\n  }\n ";
  }
  C() {
    const t2 = this.g;
    t2.activeTexture(t2.TEXTURE1), this.B = oa(this, t2, t2.LINEAR), t2.activeTexture(t2.TEXTURE2), this.j = oa(this, t2, t2.NEAREST);
  }
  m() {
    super.m();
    const t2 = this.g;
    this.L = ta(t2.getUniformLocation(this.h, "backgroundTexture"), "Uniform location"), this.V = ta(t2.getUniformLocation(this.h, "colorMappingTexture"), "Uniform location"), this.K = ta(t2.getUniformLocation(this.h, "maskTexture"), "Uniform location");
  }
  l() {
    super.l();
    const t2 = this.g;
    t2.uniform1i(this.K, 0), t2.uniform1i(this.L, 1), t2.uniform1i(this.V, 2);
  }
  close() {
    this.B && this.g.deleteTexture(this.B), this.j && this.g.deleteTexture(this.j), super.close();
  }
};
var la = class extends ca {
  H() {
    return "\n  precision mediump float;\n  uniform sampler2D maskTexture;\n  uniform sampler2D defaultTexture;\n  uniform sampler2D overlayTexture;\n  varying vec2 vTex;\n  void main() {\n    float confidence = texture2D(maskTexture, vTex).r;\n    vec4 defaultColor = texture2D(defaultTexture, vTex);\n    vec4 overlayColor = texture2D(overlayTexture, vTex);\n    // Apply the alpha from the overlay and merge in the default color\n    overlayColor = mix(defaultColor, overlayColor, overlayColor.a);\n    gl_FragColor = mix(defaultColor, overlayColor, confidence);\n  }\n ";
  }
  C() {
    const t2 = this.g;
    t2.activeTexture(t2.TEXTURE1), this.j = oa(this, t2), t2.activeTexture(t2.TEXTURE2), this.B = oa(this, t2);
  }
  m() {
    super.m();
    const t2 = this.g;
    this.K = ta(t2.getUniformLocation(this.h, "defaultTexture"), "Uniform location"), this.L = ta(t2.getUniformLocation(this.h, "overlayTexture"), "Uniform location"), this.I = ta(t2.getUniformLocation(this.h, "maskTexture"), "Uniform location");
  }
  l() {
    super.l();
    const t2 = this.g;
    t2.uniform1i(this.I, 0), t2.uniform1i(this.K, 1), t2.uniform1i(this.L, 2);
  }
  close() {
    this.j && this.g.deleteTexture(this.j), this.B && this.g.deleteTexture(this.B), super.close();
  }
};
function fa(t2, e2) {
  switch (e2) {
    case 0:
      return t2.g.find((t3) => t3 instanceof Uint8Array);
    case 1:
      return t2.g.find((t3) => t3 instanceof Float32Array);
    case 2:
      return t2.g.find((t3) => "undefined" != typeof WebGLTexture && t3 instanceof WebGLTexture);
    default:
      throw Error(`Type is not supported: ${e2}`);
  }
}
function da(t2) {
  var e2 = fa(t2, 1);
  if (!e2) {
    if (e2 = fa(t2, 0)) e2 = new Float32Array(e2).map((t3) => t3 / 255);
    else {
      e2 = new Float32Array(t2.width * t2.height);
      const r2 = ga(t2);
      var n2 = ya(t2);
      if (aa(n2, r2, pa(t2)), "iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform) || navigator.userAgent.includes("Mac") && "ontouchend" in self.document) {
        n2 = new Float32Array(t2.width * t2.height * 4), r2.readPixels(0, 0, t2.width, t2.height, r2.RGBA, r2.FLOAT, n2);
        for (let t3 = 0, r3 = 0; t3 < e2.length; ++t3, r3 += 4) e2[t3] = n2[r3];
      } else r2.readPixels(0, 0, t2.width, t2.height, r2.RED, r2.FLOAT, e2);
    }
    t2.g.push(e2);
  }
  return e2;
}
function pa(t2) {
  let e2 = fa(t2, 2);
  if (!e2) {
    const n2 = ga(t2);
    e2 = _a(t2);
    const r2 = da(t2), i2 = ma(t2);
    n2.texImage2D(n2.TEXTURE_2D, 0, i2, t2.width, t2.height, 0, n2.RED, n2.FLOAT, r2), va(t2);
  }
  return e2;
}
function ga(t2) {
  if (!t2.canvas) throw Error("Conversion to different image formats require that a canvas is passed when initializing the image.");
  return t2.h || (t2.h = ta(t2.canvas.getContext("webgl2"), "You cannot use a canvas that is already bound to a different type of rendering context.")), t2.h;
}
function ma(t2) {
  if (t2 = ga(t2), !Ea) if (t2.getExtension("EXT_color_buffer_float") && t2.getExtension("OES_texture_float_linear") && t2.getExtension("EXT_float_blend")) Ea = t2.R32F;
  else {
    if (!t2.getExtension("EXT_color_buffer_half_float")) throw Error("GPU does not fully support 4-channel float32 or float16 formats");
    Ea = t2.R16F;
  }
  return Ea;
}
function ya(t2) {
  return t2.l || (t2.l = new ca()), t2.l;
}
function _a(t2) {
  const e2 = ga(t2);
  e2.viewport(0, 0, t2.width, t2.height), e2.activeTexture(e2.TEXTURE0);
  let n2 = fa(t2, 2);
  return n2 || (n2 = oa(ya(t2), e2, t2.m ? e2.LINEAR : e2.NEAREST), t2.g.push(n2), t2.j = true), e2.bindTexture(e2.TEXTURE_2D, n2), n2;
}
function va(t2) {
  t2.h.bindTexture(t2.h.TEXTURE_2D, null);
}
var Ea;
var wa = class {
  constructor(t2, e2, n2, r2, i2, s2, o2) {
    this.g = t2, this.m = e2, this.j = n2, this.canvas = r2, this.l = i2, this.width = s2, this.height = o2, this.j && (0 === --Ta && console.error("You seem to be creating MPMask instances without invoking .close(). This leaks resources."));
  }
  Ja() {
    return !!fa(this, 0);
  }
  ma() {
    return !!fa(this, 1);
  }
  S() {
    return !!fa(this, 2);
  }
  la() {
    return (e2 = fa(t2 = this, 0)) || (e2 = da(t2), e2 = new Uint8Array(e2.map((t3) => 255 * t3)), t2.g.push(e2)), e2;
    var t2, e2;
  }
  ka() {
    return da(this);
  }
  N() {
    return pa(this);
  }
  clone() {
    const t2 = [];
    for (const e2 of this.g) {
      let n2;
      if (e2 instanceof Uint8Array) n2 = new Uint8Array(e2);
      else if (e2 instanceof Float32Array) n2 = new Float32Array(e2);
      else {
        if (!(e2 instanceof WebGLTexture)) throw Error(`Type is not supported: ${e2}`);
        {
          const t3 = ga(this), e3 = ya(this);
          t3.activeTexture(t3.TEXTURE1), n2 = oa(e3, t3, this.m ? t3.LINEAR : t3.NEAREST), t3.bindTexture(t3.TEXTURE_2D, n2);
          const r2 = ma(this);
          t3.texImage2D(t3.TEXTURE_2D, 0, r2, this.width, this.height, 0, t3.RED, t3.FLOAT, null), t3.bindTexture(t3.TEXTURE_2D, null), aa(e3, t3, n2), sa(e3, t3, false, () => {
            _a(this), t3.clearColor(0, 0, 0, 0), t3.clear(t3.COLOR_BUFFER_BIT), t3.drawArrays(t3.TRIANGLE_FAN, 0, 4), va(this);
          }), ha(e3), va(this);
        }
      }
      t2.push(n2);
    }
    return new wa(t2, this.m, this.S(), this.canvas, this.l, this.width, this.height);
  }
  close() {
    this.j && ga(this).deleteTexture(fa(this, 2)), Ta = -1;
  }
};
wa.prototype.close = wa.prototype.close, wa.prototype.clone = wa.prototype.clone, wa.prototype.getAsWebGLTexture = wa.prototype.N, wa.prototype.getAsFloat32Array = wa.prototype.ka, wa.prototype.getAsUint8Array = wa.prototype.la, wa.prototype.hasWebGLTexture = wa.prototype.S, wa.prototype.hasFloat32Array = wa.prototype.ma, wa.prototype.hasUint8Array = wa.prototype.Ja;
var Ta = 250;
var Aa = { color: "white", lineWidth: 4, radius: 6 };
function ba(t2) {
  return __spreadValues(__spreadProps(__spreadValues({}, Aa), { fillColor: (t2 = t2 || {}).color }), t2);
}
function ka(t2, e2) {
  return t2 instanceof Function ? t2(e2) : t2;
}
function Sa(t2, e2, n2) {
  return Math.max(Math.min(e2, n2), Math.min(Math.max(e2, n2), t2));
}
function xa(t2) {
  if (!t2.l) throw Error("CPU rendering requested but CanvasRenderingContext2D not provided.");
  return t2.l;
}
function La(t2) {
  if (!t2.j) throw Error("GPU rendering requested but WebGL2RenderingContext not provided.");
  return t2.j;
}
function Ra(t2, e2, n2) {
  var _a2;
  if (e2.S()) n2(e2.N());
  else {
    const r2 = e2.ma() ? e2.ka() : e2.la();
    t2.m = (_a2 = t2.m) != null ? _a2 : new ca();
    const i2 = La(t2);
    n2((t2 = new wa([r2], e2.m, false, i2.canvas, t2.m, e2.width, e2.height)).N()), t2.close();
  }
}
function Fa(t2, e2, n2, r2) {
  const i2 = function(t3) {
    return t3.g || (t3.g = new ua()), t3.g;
  }(t2), s2 = La(t2), o2 = Array.isArray(n2) ? new ImageData(new Uint8ClampedArray(n2), 1, 1) : n2;
  sa(i2, s2, true, () => {
    !function(t4, e3, n3, r3) {
      const i3 = t4.g;
      if (i3.activeTexture(i3.TEXTURE0), i3.bindTexture(i3.TEXTURE_2D, e3), i3.activeTexture(i3.TEXTURE1), i3.bindTexture(i3.TEXTURE_2D, t4.B), i3.texImage2D(i3.TEXTURE_2D, 0, i3.RGBA, i3.RGBA, i3.UNSIGNED_BYTE, n3), t4.I && function(t5, e4) {
        if (t5 !== e4) return false;
        t5 = t5.entries(), e4 = e4.entries();
        for (const [r4, i4] of t5) {
          t5 = r4;
          const s3 = i4;
          var n4 = e4.next();
          if (n4.done) return false;
          const [o3, a2] = n4.value;
          if (n4 = a2, t5 !== o3 || s3[0] !== n4[0] || s3[1] !== n4[1] || s3[2] !== n4[2] || s3[3] !== n4[3]) return false;
        }
        return !!e4.next().done;
      }(t4.I, r3)) i3.activeTexture(i3.TEXTURE2), i3.bindTexture(i3.TEXTURE_2D, t4.j);
      else {
        t4.I = r3;
        const e4 = Array(1024).fill(0);
        r3.forEach((t5, n4) => {
          if (4 !== t5.length) throw Error(`Color at index ${n4} is not a four-channel value.`);
          e4[4 * n4] = t5[0], e4[4 * n4 + 1] = t5[1], e4[4 * n4 + 2] = t5[2], e4[4 * n4 + 3] = t5[3];
        }), i3.activeTexture(i3.TEXTURE2), i3.bindTexture(i3.TEXTURE_2D, t4.j), i3.texImage2D(i3.TEXTURE_2D, 0, i3.RGBA, 256, 1, 0, i3.RGBA, i3.UNSIGNED_BYTE, new Uint8Array(e4));
      }
    }(i2, e2, o2, r2), s2.clearColor(0, 0, 0, 0), s2.clear(s2.COLOR_BUFFER_BIT), s2.drawArrays(s2.TRIANGLE_FAN, 0, 4);
    const t3 = i2.g;
    t3.activeTexture(t3.TEXTURE0), t3.bindTexture(t3.TEXTURE_2D, null), t3.activeTexture(t3.TEXTURE1), t3.bindTexture(t3.TEXTURE_2D, null), t3.activeTexture(t3.TEXTURE2), t3.bindTexture(t3.TEXTURE_2D, null);
  });
}
function Ma(t2, e2, n2, r2) {
  const i2 = La(t2), s2 = function(t3) {
    return t3.h || (t3.h = new la()), t3.h;
  }(t2), o2 = Array.isArray(n2) ? new ImageData(new Uint8ClampedArray(n2), 1, 1) : n2, a2 = Array.isArray(r2) ? new ImageData(new Uint8ClampedArray(r2), 1, 1) : r2;
  sa(s2, i2, true, () => {
    var t3 = s2.g;
    t3.activeTexture(t3.TEXTURE0), t3.bindTexture(t3.TEXTURE_2D, e2), t3.activeTexture(t3.TEXTURE1), t3.bindTexture(t3.TEXTURE_2D, s2.j), t3.texImage2D(t3.TEXTURE_2D, 0, t3.RGBA, t3.RGBA, t3.UNSIGNED_BYTE, o2), t3.activeTexture(t3.TEXTURE2), t3.bindTexture(t3.TEXTURE_2D, s2.B), t3.texImage2D(t3.TEXTURE_2D, 0, t3.RGBA, t3.RGBA, t3.UNSIGNED_BYTE, a2), i2.clearColor(0, 0, 0, 0), i2.clear(i2.COLOR_BUFFER_BIT), i2.drawArrays(i2.TRIANGLE_FAN, 0, 4), i2.bindTexture(i2.TEXTURE_2D, null), (t3 = s2.g).activeTexture(t3.TEXTURE0), t3.bindTexture(t3.TEXTURE_2D, null), t3.activeTexture(t3.TEXTURE1), t3.bindTexture(t3.TEXTURE_2D, null), t3.activeTexture(t3.TEXTURE2), t3.bindTexture(t3.TEXTURE_2D, null);
  });
}
var Ia = class {
  constructor(t2, e2) {
    t2 instanceof CanvasRenderingContext2D || t2 instanceof OffscreenCanvasRenderingContext2D ? (this.l = t2, this.j = e2) : this.j = t2;
  }
  Ca(t2, e2) {
    if (t2) {
      var n2 = xa(this);
      e2 = ba(e2), n2.save();
      var r2 = n2.canvas, i2 = 0;
      for (const s2 of t2) n2.fillStyle = ka(e2.fillColor, { index: i2, from: s2 }), n2.strokeStyle = ka(e2.color, { index: i2, from: s2 }), n2.lineWidth = ka(e2.lineWidth, { index: i2, from: s2 }), (t2 = new Path2D()).arc(s2.x * r2.width, s2.y * r2.height, ka(e2.radius, { index: i2, from: s2 }), 0, 2 * Math.PI), n2.fill(t2), n2.stroke(t2), ++i2;
      n2.restore();
    }
  }
  Ba(t2, e2, n2) {
    if (t2 && e2) {
      var r2 = xa(this);
      n2 = ba(n2), r2.save();
      var i2 = r2.canvas, s2 = 0;
      for (const o2 of e2) {
        r2.beginPath(), e2 = t2[o2.start];
        const a2 = t2[o2.end];
        e2 && a2 && (r2.strokeStyle = ka(n2.color, { index: s2, from: e2, to: a2 }), r2.lineWidth = ka(n2.lineWidth, { index: s2, from: e2, to: a2 }), r2.moveTo(e2.x * i2.width, e2.y * i2.height), r2.lineTo(a2.x * i2.width, a2.y * i2.height)), ++s2, r2.stroke();
      }
      r2.restore();
    }
  }
  ya(t2, e2) {
    const n2 = xa(this);
    e2 = ba(e2), n2.save(), n2.beginPath(), n2.lineWidth = ka(e2.lineWidth, {}), n2.strokeStyle = ka(e2.color, {}), n2.fillStyle = ka(e2.fillColor, {}), n2.moveTo(t2.originX, t2.originY), n2.lineTo(t2.originX + t2.width, t2.originY), n2.lineTo(t2.originX + t2.width, t2.originY + t2.height), n2.lineTo(t2.originX, t2.originY + t2.height), n2.lineTo(t2.originX, t2.originY), n2.stroke(), n2.fill(), n2.restore();
  }
  za(t2, e2, n2 = [0, 0, 0, 255]) {
    this.l ? function(t3, e3, n3, r2) {
      const i2 = La(t3);
      Ra(t3, e3, (e4) => {
        Fa(t3, e4, n3, r2), (e4 = xa(t3)).drawImage(i2.canvas, 0, 0, e4.canvas.width, e4.canvas.height);
      });
    }(this, t2, n2, e2) : Fa(this, t2.N(), n2, e2);
  }
  Aa(t2, e2, n2) {
    this.l ? function(t3, e3, n3, r2) {
      const i2 = La(t3);
      Ra(t3, e3, (e4) => {
        Ma(t3, e4, n3, r2), (e4 = xa(t3)).drawImage(i2.canvas, 0, 0, e4.canvas.width, e4.canvas.height);
      });
    }(this, t2, e2, n2) : Ma(this, t2.N(), e2, n2);
  }
  close() {
    var _a2, _b, _c;
    (_a2 = this.g) == null ? void 0 : _a2.close(), this.g = void 0, (_b = this.h) == null ? void 0 : _b.close(), this.h = void 0, (_c = this.m) == null ? void 0 : _c.close(), this.m = void 0;
  }
};
function Pa(t2, e2) {
  switch (e2) {
    case 0:
      return t2.g.find((t3) => t3 instanceof ImageData);
    case 1:
      return t2.g.find((t3) => "undefined" != typeof ImageBitmap && t3 instanceof ImageBitmap);
    case 2:
      return t2.g.find((t3) => "undefined" != typeof WebGLTexture && t3 instanceof WebGLTexture);
    default:
      throw Error(`Type is not supported: ${e2}`);
  }
}
function Oa(t2) {
  var e2 = Pa(t2, 0);
  if (!e2) {
    e2 = Na(t2);
    const n2 = Ua(t2), r2 = new Uint8Array(t2.width * t2.height * 4);
    aa(n2, e2, Ca(t2)), e2.readPixels(0, 0, t2.width, t2.height, e2.RGBA, e2.UNSIGNED_BYTE, r2), ha(n2), e2 = new ImageData(new Uint8ClampedArray(r2.buffer), t2.width, t2.height), t2.g.push(e2);
  }
  return e2;
}
function Ca(t2) {
  let e2 = Pa(t2, 2);
  if (!e2) {
    const n2 = Na(t2);
    e2 = Da(t2);
    const r2 = Pa(t2, 1) || Oa(t2);
    n2.texImage2D(n2.TEXTURE_2D, 0, n2.RGBA, n2.RGBA, n2.UNSIGNED_BYTE, r2), Ba(t2);
  }
  return e2;
}
function Na(t2) {
  if (!t2.canvas) throw Error("Conversion to different image formats require that a canvas is passed when iniitializing the image.");
  return t2.h || (t2.h = ta(t2.canvas.getContext("webgl2"), "You cannot use a canvas that is already bound to a different type of rendering context.")), t2.h;
}
function Ua(t2) {
  return t2.l || (t2.l = new ca()), t2.l;
}
function Da(t2) {
  const e2 = Na(t2);
  e2.viewport(0, 0, t2.width, t2.height), e2.activeTexture(e2.TEXTURE0);
  let n2 = Pa(t2, 2);
  return n2 || (n2 = oa(Ua(t2), e2), t2.g.push(n2), t2.m = true), e2.bindTexture(e2.TEXTURE_2D, n2), n2;
}
function Ba(t2) {
  t2.h.bindTexture(t2.h.TEXTURE_2D, null);
}
function Ga(t2) {
  const e2 = Na(t2);
  return sa(Ua(t2), e2, true, () => function(t3, e3) {
    const n2 = t3.canvas;
    if (n2.width === t3.width && n2.height === t3.height) return e3();
    const r2 = n2.width, i2 = n2.height;
    return n2.width = t3.width, n2.height = t3.height, t3 = e3(), n2.width = r2, n2.height = i2, t3;
  }(t2, () => {
    if (e2.bindFramebuffer(e2.FRAMEBUFFER, null), e2.clearColor(0, 0, 0, 0), e2.clear(e2.COLOR_BUFFER_BIT), e2.drawArrays(e2.TRIANGLE_FAN, 0, 4), !(t2.canvas instanceof OffscreenCanvas)) throw Error("Conversion to ImageBitmap requires that the MediaPipe Tasks is initialized with an OffscreenCanvas");
    return t2.canvas.transferToImageBitmap();
  }));
}
Ia.prototype.close = Ia.prototype.close, Ia.prototype.drawConfidenceMask = Ia.prototype.Aa, Ia.prototype.drawCategoryMask = Ia.prototype.za, Ia.prototype.drawBoundingBox = Ia.prototype.ya, Ia.prototype.drawConnectors = Ia.prototype.Ba, Ia.prototype.drawLandmarks = Ia.prototype.Ca, Ia.lerp = function(t2, e2, n2, r2, i2) {
  return Sa(r2 * (1 - (t2 - e2) / (n2 - e2)) + i2 * (1 - (n2 - t2) / (n2 - e2)), r2, i2);
}, Ia.clamp = Sa;
var ja = class {
  constructor(t2, e2, n2, r2, i2, s2, o2) {
    this.g = t2, this.j = e2, this.m = n2, this.canvas = r2, this.l = i2, this.width = s2, this.height = o2, (this.j || this.m) && (0 === --Va && console.error("You seem to be creating MPImage instances without invoking .close(). This leaks resources."));
  }
  Ia() {
    return !!Pa(this, 0);
  }
  na() {
    return !!Pa(this, 1);
  }
  S() {
    return !!Pa(this, 2);
  }
  Ga() {
    return Oa(this);
  }
  Fa() {
    var t2 = Pa(this, 1);
    return t2 || (Ca(this), Da(this), t2 = Ga(this), Ba(this), this.g.push(t2), this.j = true), t2;
  }
  N() {
    return Ca(this);
  }
  clone() {
    const t2 = [];
    for (const e2 of this.g) {
      let n2;
      if (e2 instanceof ImageData) n2 = new ImageData(e2.data, this.width, this.height);
      else if (e2 instanceof WebGLTexture) {
        const t3 = Na(this), e3 = Ua(this);
        t3.activeTexture(t3.TEXTURE1), n2 = oa(e3, t3), t3.bindTexture(t3.TEXTURE_2D, n2), t3.texImage2D(t3.TEXTURE_2D, 0, t3.RGBA, this.width, this.height, 0, t3.RGBA, t3.UNSIGNED_BYTE, null), t3.bindTexture(t3.TEXTURE_2D, null), aa(e3, t3, n2), sa(e3, t3, false, () => {
          Da(this), t3.clearColor(0, 0, 0, 0), t3.clear(t3.COLOR_BUFFER_BIT), t3.drawArrays(t3.TRIANGLE_FAN, 0, 4), Ba(this);
        }), ha(e3), Ba(this);
      } else {
        if (!(e2 instanceof ImageBitmap)) throw Error(`Type is not supported: ${e2}`);
        Ca(this), Da(this), n2 = Ga(this), Ba(this);
      }
      t2.push(n2);
    }
    return new ja(t2, this.na(), this.S(), this.canvas, this.l, this.width, this.height);
  }
  close() {
    this.j && Pa(this, 1).close(), this.m && Na(this).deleteTexture(Pa(this, 2)), Va = -1;
  }
};
ja.prototype.close = ja.prototype.close, ja.prototype.clone = ja.prototype.clone, ja.prototype.getAsWebGLTexture = ja.prototype.N, ja.prototype.getAsImageBitmap = ja.prototype.Fa, ja.prototype.getAsImageData = ja.prototype.Ga, ja.prototype.hasWebGLTexture = ja.prototype.S, ja.prototype.hasImageBitmap = ja.prototype.na, ja.prototype.hasImageData = ja.prototype.Ia;
var Va = 250;
function Xa(...t2) {
  return t2.map(([t3, e2]) => ({ start: t3, end: e2 }));
}
var Ha = /* @__PURE__ */ function(t2) {
  return class extends t2 {
    Oa() {
      this.i._registerModelResourcesGraphService();
    }
  };
}((Wa = class {
  constructor(t2, e2) {
    this.l = true, this.i = t2, this.g = null, this.h = 0, this.m = "function" == typeof this.i._addIntToInputStream, void 0 !== e2 ? this.i.canvas = e2 : Do() ? this.i.canvas = new OffscreenCanvas(1, 1) : (console.warn("OffscreenCanvas not supported and GraphRunner constructor glCanvas parameter is undefined. Creating backup canvas."), this.i.canvas = document.createElement("canvas"));
  }
  initializeGraph(t2) {
    return __async(this, null, function* () {
      const e2 = yield (yield fetch(t2)).arrayBuffer();
      t2 = !(t2.endsWith(".pbtxt") || t2.endsWith(".textproto")), this.setGraph(new Uint8Array(e2), t2);
    });
  }
  setGraphFromString(t2) {
    this.setGraph(new TextEncoder().encode(t2), false);
  }
  setGraph(t2, e2) {
    const n2 = t2.length, r2 = this.i._malloc(n2);
    this.i.HEAPU8.set(t2, r2), e2 ? this.i._changeBinaryGraph(n2, r2) : this.i._changeTextGraph(n2, r2), this.i._free(r2);
  }
  configureAudio(t2, e2, n2, r2, i2) {
    this.i._configureAudio || console.warn('Attempting to use configureAudio without support for input audio. Is build dep ":gl_graph_runner_audio" missing?'), jo(this, r2 || "input_audio", (r3) => {
      jo(this, i2 = i2 || "audio_header", (i3) => {
        this.i._configureAudio(r3, i3, t2, e2, n2);
      });
    });
  }
  setAutoResizeCanvas(t2) {
    this.l = t2;
  }
  setAutoRenderToScreen(t2) {
    this.i._setAutoRenderToScreen(t2);
  }
  setGpuBufferVerticalFlip(t2) {
    this.i.gpuOriginForWebTexturesIsBottomLeft = t2;
  }
  ga(t2) {
    Ho(this, "__graph_config__", (e2) => {
      t2(e2);
    }), jo(this, "__graph_config__", (t3) => {
      this.i._getGraphConfig(t3, void 0);
    }), delete this.i.simpleListeners.__graph_config__;
  }
  attachErrorListener(t2) {
    this.i.errorListener = t2;
  }
  attachEmptyPacketListener(t2, e2) {
    this.i.emptyPacketListeners = this.i.emptyPacketListeners || {}, this.i.emptyPacketListeners[t2] = e2;
  }
  addAudioToStream(t2, e2, n2) {
    this.addAudioToStreamWithShape(t2, 0, 0, e2, n2);
  }
  addAudioToStreamWithShape(t2, e2, n2, r2, i2) {
    const s2 = 4 * t2.length;
    this.h !== s2 && (this.g && this.i._free(this.g), this.g = this.i._malloc(s2), this.h = s2), this.i.HEAPF32.set(t2, this.g / 4), jo(this, r2, (t3) => {
      this.i._addAudioToInputStream(this.g, e2, n2, t3, i2);
    });
  }
  addGpuBufferToStream(t2, e2, n2) {
    jo(this, e2, (e3) => {
      const [r2, i2] = Vo(this, t2, e3);
      this.i._addBoundTextureToStream(e3, r2, i2, n2);
    });
  }
  addBoolToStream(t2, e2, n2) {
    jo(this, e2, (e3) => {
      this.i._addBoolToInputStream(t2, e3, n2);
    });
  }
  addDoubleToStream(t2, e2, n2) {
    jo(this, e2, (e3) => {
      this.i._addDoubleToInputStream(t2, e3, n2);
    });
  }
  addFloatToStream(t2, e2, n2) {
    jo(this, e2, (e3) => {
      this.i._addFloatToInputStream(t2, e3, n2);
    });
  }
  addIntToStream(t2, e2, n2) {
    jo(this, e2, (e3) => {
      this.i._addIntToInputStream(t2, e3, n2);
    });
  }
  addUintToStream(t2, e2, n2) {
    jo(this, e2, (e3) => {
      this.i._addUintToInputStream(t2, e3, n2);
    });
  }
  addStringToStream(t2, e2, n2) {
    jo(this, e2, (e3) => {
      jo(this, t2, (t3) => {
        this.i._addStringToInputStream(t3, e3, n2);
      });
    });
  }
  addStringRecordToStream(t2, e2, n2) {
    jo(this, e2, (e3) => {
      Xo(this, Object.keys(t2), (r2) => {
        Xo(this, Object.values(t2), (i2) => {
          this.i._addFlatHashMapToInputStream(r2, i2, Object.keys(t2).length, e3, n2);
        });
      });
    });
  }
  addProtoToStream(t2, e2, n2, r2) {
    jo(this, n2, (n3) => {
      jo(this, e2, (e3) => {
        const i2 = this.i._malloc(t2.length);
        this.i.HEAPU8.set(t2, i2), this.i._addProtoToInputStream(i2, t2.length, e3, n3, r2), this.i._free(i2);
      });
    });
  }
  addEmptyPacketToStream(t2, e2) {
    jo(this, t2, (t3) => {
      this.i._addEmptyPacketToInputStream(t3, e2);
    });
  }
  addBoolVectorToStream(t2, e2, n2) {
    jo(this, e2, (e3) => {
      const r2 = this.i._allocateBoolVector(t2.length);
      if (!r2) throw Error("Unable to allocate new bool vector on heap.");
      for (const e4 of t2) this.i._addBoolVectorEntry(r2, e4);
      this.i._addBoolVectorToInputStream(r2, e3, n2);
    });
  }
  addDoubleVectorToStream(t2, e2, n2) {
    jo(this, e2, (e3) => {
      const r2 = this.i._allocateDoubleVector(t2.length);
      if (!r2) throw Error("Unable to allocate new double vector on heap.");
      for (const e4 of t2) this.i._addDoubleVectorEntry(r2, e4);
      this.i._addDoubleVectorToInputStream(r2, e3, n2);
    });
  }
  addFloatVectorToStream(t2, e2, n2) {
    jo(this, e2, (e3) => {
      const r2 = this.i._allocateFloatVector(t2.length);
      if (!r2) throw Error("Unable to allocate new float vector on heap.");
      for (const e4 of t2) this.i._addFloatVectorEntry(r2, e4);
      this.i._addFloatVectorToInputStream(r2, e3, n2);
    });
  }
  addIntVectorToStream(t2, e2, n2) {
    jo(this, e2, (e3) => {
      const r2 = this.i._allocateIntVector(t2.length);
      if (!r2) throw Error("Unable to allocate new int vector on heap.");
      for (const e4 of t2) this.i._addIntVectorEntry(r2, e4);
      this.i._addIntVectorToInputStream(r2, e3, n2);
    });
  }
  addUintVectorToStream(t2, e2, n2) {
    jo(this, e2, (e3) => {
      const r2 = this.i._allocateUintVector(t2.length);
      if (!r2) throw Error("Unable to allocate new unsigned int vector on heap.");
      for (const e4 of t2) this.i._addUintVectorEntry(r2, e4);
      this.i._addUintVectorToInputStream(r2, e3, n2);
    });
  }
  addStringVectorToStream(t2, e2, n2) {
    jo(this, e2, (e3) => {
      const r2 = this.i._allocateStringVector(t2.length);
      if (!r2) throw Error("Unable to allocate new string vector on heap.");
      for (const e4 of t2) jo(this, e4, (t3) => {
        this.i._addStringVectorEntry(r2, t3);
      });
      this.i._addStringVectorToInputStream(r2, e3, n2);
    });
  }
  addBoolToInputSidePacket(t2, e2) {
    jo(this, e2, (e3) => {
      this.i._addBoolToInputSidePacket(t2, e3);
    });
  }
  addDoubleToInputSidePacket(t2, e2) {
    jo(this, e2, (e3) => {
      this.i._addDoubleToInputSidePacket(t2, e3);
    });
  }
  addFloatToInputSidePacket(t2, e2) {
    jo(this, e2, (e3) => {
      this.i._addFloatToInputSidePacket(t2, e3);
    });
  }
  addIntToInputSidePacket(t2, e2) {
    jo(this, e2, (e3) => {
      this.i._addIntToInputSidePacket(t2, e3);
    });
  }
  addUintToInputSidePacket(t2, e2) {
    jo(this, e2, (e3) => {
      this.i._addUintToInputSidePacket(t2, e3);
    });
  }
  addStringToInputSidePacket(t2, e2) {
    jo(this, e2, (e3) => {
      jo(this, t2, (t3) => {
        this.i._addStringToInputSidePacket(t3, e3);
      });
    });
  }
  addProtoToInputSidePacket(t2, e2, n2) {
    jo(this, n2, (n3) => {
      jo(this, e2, (e3) => {
        const r2 = this.i._malloc(t2.length);
        this.i.HEAPU8.set(t2, r2), this.i._addProtoToInputSidePacket(r2, t2.length, e3, n3), this.i._free(r2);
      });
    });
  }
  addBoolVectorToInputSidePacket(t2, e2) {
    jo(this, e2, (e3) => {
      const n2 = this.i._allocateBoolVector(t2.length);
      if (!n2) throw Error("Unable to allocate new bool vector on heap.");
      for (const e4 of t2) this.i._addBoolVectorEntry(n2, e4);
      this.i._addBoolVectorToInputSidePacket(n2, e3);
    });
  }
  addDoubleVectorToInputSidePacket(t2, e2) {
    jo(this, e2, (e3) => {
      const n2 = this.i._allocateDoubleVector(t2.length);
      if (!n2) throw Error("Unable to allocate new double vector on heap.");
      for (const e4 of t2) this.i._addDoubleVectorEntry(n2, e4);
      this.i._addDoubleVectorToInputSidePacket(n2, e3);
    });
  }
  addFloatVectorToInputSidePacket(t2, e2) {
    jo(this, e2, (e3) => {
      const n2 = this.i._allocateFloatVector(t2.length);
      if (!n2) throw Error("Unable to allocate new float vector on heap.");
      for (const e4 of t2) this.i._addFloatVectorEntry(n2, e4);
      this.i._addFloatVectorToInputSidePacket(n2, e3);
    });
  }
  addIntVectorToInputSidePacket(t2, e2) {
    jo(this, e2, (e3) => {
      const n2 = this.i._allocateIntVector(t2.length);
      if (!n2) throw Error("Unable to allocate new int vector on heap.");
      for (const e4 of t2) this.i._addIntVectorEntry(n2, e4);
      this.i._addIntVectorToInputSidePacket(n2, e3);
    });
  }
  addUintVectorToInputSidePacket(t2, e2) {
    jo(this, e2, (e3) => {
      const n2 = this.i._allocateUintVector(t2.length);
      if (!n2) throw Error("Unable to allocate new unsigned int vector on heap.");
      for (const e4 of t2) this.i._addUintVectorEntry(n2, e4);
      this.i._addUintVectorToInputSidePacket(n2, e3);
    });
  }
  addStringVectorToInputSidePacket(t2, e2) {
    jo(this, e2, (e3) => {
      const n2 = this.i._allocateStringVector(t2.length);
      if (!n2) throw Error("Unable to allocate new string vector on heap.");
      for (const e4 of t2) jo(this, e4, (t3) => {
        this.i._addStringVectorEntry(n2, t3);
      });
      this.i._addStringVectorToInputSidePacket(n2, e3);
    });
  }
  attachBoolListener(t2, e2) {
    Ho(this, t2, e2), jo(this, t2, (t3) => {
      this.i._attachBoolListener(t3);
    });
  }
  attachBoolVectorListener(t2, e2) {
    Wo(this, t2, e2), jo(this, t2, (t3) => {
      this.i._attachBoolVectorListener(t3);
    });
  }
  attachIntListener(t2, e2) {
    Ho(this, t2, e2), jo(this, t2, (t3) => {
      this.i._attachIntListener(t3);
    });
  }
  attachIntVectorListener(t2, e2) {
    Wo(this, t2, e2), jo(this, t2, (t3) => {
      this.i._attachIntVectorListener(t3);
    });
  }
  attachUintListener(t2, e2) {
    Ho(this, t2, e2), jo(this, t2, (t3) => {
      this.i._attachUintListener(t3);
    });
  }
  attachUintVectorListener(t2, e2) {
    Wo(this, t2, e2), jo(this, t2, (t3) => {
      this.i._attachUintVectorListener(t3);
    });
  }
  attachDoubleListener(t2, e2) {
    Ho(this, t2, e2), jo(this, t2, (t3) => {
      this.i._attachDoubleListener(t3);
    });
  }
  attachDoubleVectorListener(t2, e2) {
    Wo(this, t2, e2), jo(this, t2, (t3) => {
      this.i._attachDoubleVectorListener(t3);
    });
  }
  attachFloatListener(t2, e2) {
    Ho(this, t2, e2), jo(this, t2, (t3) => {
      this.i._attachFloatListener(t3);
    });
  }
  attachFloatVectorListener(t2, e2) {
    Wo(this, t2, e2), jo(this, t2, (t3) => {
      this.i._attachFloatVectorListener(t3);
    });
  }
  attachStringListener(t2, e2) {
    Ho(this, t2, e2), jo(this, t2, (t3) => {
      this.i._attachStringListener(t3);
    });
  }
  attachStringVectorListener(t2, e2) {
    Wo(this, t2, e2), jo(this, t2, (t3) => {
      this.i._attachStringVectorListener(t3);
    });
  }
  attachProtoListener(t2, e2, n2) {
    Ho(this, t2, e2), jo(this, t2, (t3) => {
      this.i._attachProtoListener(t3, n2 || false);
    });
  }
  attachProtoVectorListener(t2, e2, n2) {
    Wo(this, t2, e2), jo(this, t2, (t3) => {
      this.i._attachProtoVectorListener(t3, n2 || false);
    });
  }
  attachAudioListener(t2, e2, n2) {
    this.i._attachAudioListener || console.warn('Attempting to use attachAudioListener without support for output audio. Is build dep ":gl_graph_runner_audio_out" missing?'), Ho(this, t2, (t3, n3) => {
      t3 = new Float32Array(t3.buffer, t3.byteOffset, t3.length / 4), e2(t3, n3);
    }), jo(this, t2, (t3) => {
      this.i._attachAudioListener(t3, n2 || false);
    });
  }
  finishProcessing() {
    this.i._waitUntilIdle();
  }
  closeGraph() {
    this.i._closeGraph(), this.i.simpleListeners = void 0, this.i.emptyPacketListeners = void 0;
  }
}, class extends Wa {
  get ia() {
    return this.i;
  }
  ta(t2, e2, n2) {
    jo(this, e2, (e3) => {
      const [r2, i2] = Vo(this, t2, e3);
      this.ia._addBoundTextureAsImageToStream(e3, r2, i2, n2);
    });
  }
  W(t2, e2) {
    Ho(this, t2, e2), jo(this, t2, (t3) => {
      this.ia._attachImageListener(t3);
    });
  }
  fa(t2, e2) {
    Wo(this, t2, e2), jo(this, t2, (t3) => {
      this.ia._attachImageVectorListener(t3);
    });
  }
}));
var Wa;
var za = class extends Ha {
};
function Ka(t2, e2, n2) {
  return __async(this, null, function* () {
    var _a2;
    return function(t3, e3, n3, r2) {
      return __async(this, null, function* () {
        return zo(t3, e3, n3, r2);
      });
    }(t2, (_a2 = n2.canvas) != null ? _a2 : Do() ? void 0 : document.createElement("canvas"), e2, n2);
  });
}
function Ya(t2, e2, n2, r2) {
  if (t2.V) {
    const s2 = new fs();
    if (n2 == null ? void 0 : n2.regionOfInterest) {
      if (!t2.sa) throw Error("This task doesn't support region-of-interest.");
      var i2 = n2.regionOfInterest;
      if (i2.left >= i2.right || i2.top >= i2.bottom) throw Error("Expected RectF with left < right and top < bottom.");
      if (i2.left < 0 || i2.top < 0 || i2.right > 1 || i2.bottom > 1) throw Error("Expected RectF values to be in [0,1].");
      Ln(s2, 1, (i2.left + i2.right) / 2), Ln(s2, 2, (i2.top + i2.bottom) / 2), Ln(s2, 4, i2.right - i2.left), Ln(s2, 3, i2.bottom - i2.top);
    } else Ln(s2, 1, 0.5), Ln(s2, 2, 0.5), Ln(s2, 4, 1), Ln(s2, 3, 1);
    if (n2 == null ? void 0 : n2.rotationDegrees) {
      if ((n2 == null ? void 0 : n2.rotationDegrees) % 90 != 0) throw Error("Expected rotation to be a multiple of 90\xB0.");
      if (Ln(s2, 5, -Math.PI * n2.rotationDegrees / 180), (n2 == null ? void 0 : n2.rotationDegrees) % 180 != 0) {
        const [t3, r3] = Go(e2);
        n2 = bn(s2, 3) * r3 / t3, i2 = bn(s2, 4) * t3 / r3, Ln(s2, 4, n2), Ln(s2, 3, i2);
      }
    }
    t2.g.addProtoToStream(s2.g(), "mediapipe.NormalizedRect", t2.V, r2);
  }
  t2.g.ta(e2, t2.da, r2 != null ? r2 : performance.now()), t2.finishProcessing();
}
function $a(t2, e2, n2) {
  var _a2;
  if ((_a2 = t2.baseOptions) == null ? void 0 : _a2.g()) throw Error("Task is not initialized with image mode. 'runningMode' must be set to 'IMAGE'.");
  Ya(t2, e2, n2, t2.B + 1);
}
function qa(t2, e2, n2, r2) {
  var _a2;
  if (!((_a2 = t2.baseOptions) == null ? void 0 : _a2.g())) throw Error("Task is not initialized with video mode. 'runningMode' must be set to 'VIDEO'.");
  Ya(t2, e2, n2, r2);
}
function Ja(t2, e2, n2, r2) {
  var i2 = e2.data;
  const s2 = e2.width, o2 = s2 * (e2 = e2.height);
  if ((i2 instanceof Uint8Array || i2 instanceof Float32Array) && i2.length !== o2) throw Error("Unsupported channel count: " + i2.length / o2);
  return t2 = new wa([i2], n2, false, t2.g.i.canvas, t2.R, s2, e2), r2 ? t2.clone() : t2;
}
var Za = class extends Qo {
  constructor(t2, e2, n2, r2) {
    super(t2), this.g = t2, this.da = e2, this.V = n2, this.sa = r2, this.R = new ca();
  }
  l(t2, e2 = true) {
    if ("runningMode" in t2 && Sn(this.baseOptions, 2, !!t2.runningMode && "IMAGE" !== t2.runningMode), void 0 !== t2.canvas && this.g.i.canvas !== t2.canvas) throw Error("You must create a new task to reset the canvas.");
    return super.l(t2, e2);
  }
  close() {
    this.R.close(), super.close();
  }
};
Za.prototype.close = Za.prototype.close;
var Qa = class extends Za {
  constructor(t2, e2) {
    super(new za(t2, e2), "image_in", "norm_rect_in", false), this.j = { detections: [] }, yn(t2 = this.h = new Fs(), 0, 1, e2 = new xs()), Ln(this.h, 2, 0.5), Ln(this.h, 3, 0.3);
  }
  get baseOptions() {
    return pn(this.h, xs, 1);
  }
  set baseOptions(t2) {
    yn(this.h, 0, 1, t2);
  }
  o(t2) {
    var _a2, _b;
    return "minDetectionConfidence" in t2 && Ln(this.h, 2, (_a2 = t2.minDetectionConfidence) != null ? _a2 : 0.5), "minSuppressionThreshold" in t2 && Ln(this.h, 3, (_b = t2.minSuppressionThreshold) != null ? _b : 0.3), this.l(t2);
  }
  D(t2, e2) {
    return this.j = { detections: [] }, $a(this, t2, e2), this.j;
  }
  F(t2, e2, n2) {
    return this.j = { detections: [] }, qa(this, t2, n2, e2), this.j;
  }
  m() {
    var t2 = new $i();
    Ki(t2, "image_in"), Ki(t2, "norm_rect_in"), Yi(t2, "detections");
    const e2 = new Ci();
    er(e2, Is, this.h);
    const n2 = new Vi();
    Bi(n2, "mediapipe.tasks.vision.face_detector.FaceDetectorGraph"), Gi(n2, "IMAGE:image_in"), Gi(n2, "NORM_RECT:norm_rect_in"), ji(n2, "DETECTIONS:detections"), n2.o(e2), zi(t2, n2), this.g.attachProtoVectorListener("detections", (t3, e3) => {
      for (const e4 of t3) t3 = ss(e4), this.j.detections.push(Lo(t3));
      $o(this, e3);
    }), this.g.attachEmptyPacketListener("detections", (t3) => {
      $o(this, t3);
    }), t2 = t2.g(), this.setGraph(new Uint8Array(t2), true);
  }
};
Qa.prototype.detectForVideo = Qa.prototype.F, Qa.prototype.detect = Qa.prototype.D, Qa.prototype.setOptions = Qa.prototype.o, Qa.createFromModelPath = function(t2, e2) {
  return __async(this, null, function* () {
    return Ka(Qa, t2, { baseOptions: { modelAssetPath: e2 } });
  });
}, Qa.createFromModelBuffer = function(t2, e2) {
  return Ka(Qa, t2, { baseOptions: { modelAssetBuffer: e2 } });
}, Qa.createFromOptions = function(t2, e2) {
  return Ka(Qa, t2, e2);
};
var th = Xa([61, 146], [146, 91], [91, 181], [181, 84], [84, 17], [17, 314], [314, 405], [405, 321], [321, 375], [375, 291], [61, 185], [185, 40], [40, 39], [39, 37], [37, 0], [0, 267], [267, 269], [269, 270], [270, 409], [409, 291], [78, 95], [95, 88], [88, 178], [178, 87], [87, 14], [14, 317], [317, 402], [402, 318], [318, 324], [324, 308], [78, 191], [191, 80], [80, 81], [81, 82], [82, 13], [13, 312], [312, 311], [311, 310], [310, 415], [415, 308]);
var eh = Xa([263, 249], [249, 390], [390, 373], [373, 374], [374, 380], [380, 381], [381, 382], [382, 362], [263, 466], [466, 388], [388, 387], [387, 386], [386, 385], [385, 384], [384, 398], [398, 362]);
var nh = Xa([276, 283], [283, 282], [282, 295], [295, 285], [300, 293], [293, 334], [334, 296], [296, 336]);
var rh = Xa([474, 475], [475, 476], [476, 477], [477, 474]);
var ih = Xa([33, 7], [7, 163], [163, 144], [144, 145], [145, 153], [153, 154], [154, 155], [155, 133], [33, 246], [246, 161], [161, 160], [160, 159], [159, 158], [158, 157], [157, 173], [173, 133]);
var sh = Xa([46, 53], [53, 52], [52, 65], [65, 55], [70, 63], [63, 105], [105, 66], [66, 107]);
var oh = Xa([469, 470], [470, 471], [471, 472], [472, 469]);
var ah = Xa([10, 338], [338, 297], [297, 332], [332, 284], [284, 251], [251, 389], [389, 356], [356, 454], [454, 323], [323, 361], [361, 288], [288, 397], [397, 365], [365, 379], [379, 378], [378, 400], [400, 377], [377, 152], [152, 148], [148, 176], [176, 149], [149, 150], [150, 136], [136, 172], [172, 58], [58, 132], [132, 93], [93, 234], [234, 127], [127, 162], [162, 21], [21, 54], [54, 103], [103, 67], [67, 109], [109, 10]);
var hh = [...th, ...eh, ...nh, ...ih, ...sh, ...ah];
var ch = Xa([127, 34], [34, 139], [139, 127], [11, 0], [0, 37], [37, 11], [232, 231], [231, 120], [120, 232], [72, 37], [37, 39], [39, 72], [128, 121], [121, 47], [47, 128], [232, 121], [121, 128], [128, 232], [104, 69], [69, 67], [67, 104], [175, 171], [171, 148], [148, 175], [118, 50], [50, 101], [101, 118], [73, 39], [39, 40], [40, 73], [9, 151], [151, 108], [108, 9], [48, 115], [115, 131], [131, 48], [194, 204], [204, 211], [211, 194], [74, 40], [40, 185], [185, 74], [80, 42], [42, 183], [183, 80], [40, 92], [92, 186], [186, 40], [230, 229], [229, 118], [118, 230], [202, 212], [212, 214], [214, 202], [83, 18], [18, 17], [17, 83], [76, 61], [61, 146], [146, 76], [160, 29], [29, 30], [30, 160], [56, 157], [157, 173], [173, 56], [106, 204], [204, 194], [194, 106], [135, 214], [214, 192], [192, 135], [203, 165], [165, 98], [98, 203], [21, 71], [71, 68], [68, 21], [51, 45], [45, 4], [4, 51], [144, 24], [24, 23], [23, 144], [77, 146], [146, 91], [91, 77], [205, 50], [50, 187], [187, 205], [201, 200], [200, 18], [18, 201], [91, 106], [106, 182], [182, 91], [90, 91], [91, 181], [181, 90], [85, 84], [84, 17], [17, 85], [206, 203], [203, 36], [36, 206], [148, 171], [171, 140], [140, 148], [92, 40], [40, 39], [39, 92], [193, 189], [189, 244], [244, 193], [159, 158], [158, 28], [28, 159], [247, 246], [246, 161], [161, 247], [236, 3], [3, 196], [196, 236], [54, 68], [68, 104], [104, 54], [193, 168], [168, 8], [8, 193], [117, 228], [228, 31], [31, 117], [189, 193], [193, 55], [55, 189], [98, 97], [97, 99], [99, 98], [126, 47], [47, 100], [100, 126], [166, 79], [79, 218], [218, 166], [155, 154], [154, 26], [26, 155], [209, 49], [49, 131], [131, 209], [135, 136], [136, 150], [150, 135], [47, 126], [126, 217], [217, 47], [223, 52], [52, 53], [53, 223], [45, 51], [51, 134], [134, 45], [211, 170], [170, 140], [140, 211], [67, 69], [69, 108], [108, 67], [43, 106], [106, 91], [91, 43], [230, 119], [119, 120], [120, 230], [226, 130], [130, 247], [247, 226], [63, 53], [53, 52], [52, 63], [238, 20], [20, 242], [242, 238], [46, 70], [70, 156], [156, 46], [78, 62], [62, 96], [96, 78], [46, 53], [53, 63], [63, 46], [143, 34], [34, 227], [227, 143], [123, 117], [117, 111], [111, 123], [44, 125], [125, 19], [19, 44], [236, 134], [134, 51], [51, 236], [216, 206], [206, 205], [205, 216], [154, 153], [153, 22], [22, 154], [39, 37], [37, 167], [167, 39], [200, 201], [201, 208], [208, 200], [36, 142], [142, 100], [100, 36], [57, 212], [212, 202], [202, 57], [20, 60], [60, 99], [99, 20], [28, 158], [158, 157], [157, 28], [35, 226], [226, 113], [113, 35], [160, 159], [159, 27], [27, 160], [204, 202], [202, 210], [210, 204], [113, 225], [225, 46], [46, 113], [43, 202], [202, 204], [204, 43], [62, 76], [76, 77], [77, 62], [137, 123], [123, 116], [116, 137], [41, 38], [38, 72], [72, 41], [203, 129], [129, 142], [142, 203], [64, 98], [98, 240], [240, 64], [49, 102], [102, 64], [64, 49], [41, 73], [73, 74], [74, 41], [212, 216], [216, 207], [207, 212], [42, 74], [74, 184], [184, 42], [169, 170], [170, 211], [211, 169], [170, 149], [149, 176], [176, 170], [105, 66], [66, 69], [69, 105], [122, 6], [6, 168], [168, 122], [123, 147], [147, 187], [187, 123], [96, 77], [77, 90], [90, 96], [65, 55], [55, 107], [107, 65], [89, 90], [90, 180], [180, 89], [101, 100], [100, 120], [120, 101], [63, 105], [105, 104], [104, 63], [93, 137], [137, 227], [227, 93], [15, 86], [86, 85], [85, 15], [129, 102], [102, 49], [49, 129], [14, 87], [87, 86], [86, 14], [55, 8], [8, 9], [9, 55], [100, 47], [47, 121], [121, 100], [145, 23], [23, 22], [22, 145], [88, 89], [89, 179], [179, 88], [6, 122], [122, 196], [196, 6], [88, 95], [95, 96], [96, 88], [138, 172], [172, 136], [136, 138], [215, 58], [58, 172], [172, 215], [115, 48], [48, 219], [219, 115], [42, 80], [80, 81], [81, 42], [195, 3], [3, 51], [51, 195], [43, 146], [146, 61], [61, 43], [171, 175], [175, 199], [199, 171], [81, 82], [82, 38], [38, 81], [53, 46], [46, 225], [225, 53], [144, 163], [163, 110], [110, 144], [52, 65], [65, 66], [66, 52], [229, 228], [228, 117], [117, 229], [34, 127], [127, 234], [234, 34], [107, 108], [108, 69], [69, 107], [109, 108], [108, 151], [151, 109], [48, 64], [64, 235], [235, 48], [62, 78], [78, 191], [191, 62], [129, 209], [209, 126], [126, 129], [111, 35], [35, 143], [143, 111], [117, 123], [123, 50], [50, 117], [222, 65], [65, 52], [52, 222], [19, 125], [125, 141], [141, 19], [221, 55], [55, 65], [65, 221], [3, 195], [195, 197], [197, 3], [25, 7], [7, 33], [33, 25], [220, 237], [237, 44], [44, 220], [70, 71], [71, 139], [139, 70], [122, 193], [193, 245], [245, 122], [247, 130], [130, 33], [33, 247], [71, 21], [21, 162], [162, 71], [170, 169], [169, 150], [150, 170], [188, 174], [174, 196], [196, 188], [216, 186], [186, 92], [92, 216], [2, 97], [97, 167], [167, 2], [141, 125], [125, 241], [241, 141], [164, 167], [167, 37], [37, 164], [72, 38], [38, 12], [12, 72], [38, 82], [82, 13], [13, 38], [63, 68], [68, 71], [71, 63], [226, 35], [35, 111], [111, 226], [101, 50], [50, 205], [205, 101], [206, 92], [92, 165], [165, 206], [209, 198], [198, 217], [217, 209], [165, 167], [167, 97], [97, 165], [220, 115], [115, 218], [218, 220], [133, 112], [112, 243], [243, 133], [239, 238], [238, 241], [241, 239], [214, 135], [135, 169], [169, 214], [190, 173], [173, 133], [133, 190], [171, 208], [208, 32], [32, 171], [125, 44], [44, 237], [237, 125], [86, 87], [87, 178], [178, 86], [85, 86], [86, 179], [179, 85], [84, 85], [85, 180], [180, 84], [83, 84], [84, 181], [181, 83], [201, 83], [83, 182], [182, 201], [137, 93], [93, 132], [132, 137], [76, 62], [62, 183], [183, 76], [61, 76], [76, 184], [184, 61], [57, 61], [61, 185], [185, 57], [212, 57], [57, 186], [186, 212], [214, 207], [207, 187], [187, 214], [34, 143], [143, 156], [156, 34], [79, 239], [239, 237], [237, 79], [123, 137], [137, 177], [177, 123], [44, 1], [1, 4], [4, 44], [201, 194], [194, 32], [32, 201], [64, 102], [102, 129], [129, 64], [213, 215], [215, 138], [138, 213], [59, 166], [166, 219], [219, 59], [242, 99], [99, 97], [97, 242], [2, 94], [94, 141], [141, 2], [75, 59], [59, 235], [235, 75], [24, 110], [110, 228], [228, 24], [25, 130], [130, 226], [226, 25], [23, 24], [24, 229], [229, 23], [22, 23], [23, 230], [230, 22], [26, 22], [22, 231], [231, 26], [112, 26], [26, 232], [232, 112], [189, 190], [190, 243], [243, 189], [221, 56], [56, 190], [190, 221], [28, 56], [56, 221], [221, 28], [27, 28], [28, 222], [222, 27], [29, 27], [27, 223], [223, 29], [30, 29], [29, 224], [224, 30], [247, 30], [30, 225], [225, 247], [238, 79], [79, 20], [20, 238], [166, 59], [59, 75], [75, 166], [60, 75], [75, 240], [240, 60], [147, 177], [177, 215], [215, 147], [20, 79], [79, 166], [166, 20], [187, 147], [147, 213], [213, 187], [112, 233], [233, 244], [244, 112], [233, 128], [128, 245], [245, 233], [128, 114], [114, 188], [188, 128], [114, 217], [217, 174], [174, 114], [131, 115], [115, 220], [220, 131], [217, 198], [198, 236], [236, 217], [198, 131], [131, 134], [134, 198], [177, 132], [132, 58], [58, 177], [143, 35], [35, 124], [124, 143], [110, 163], [163, 7], [7, 110], [228, 110], [110, 25], [25, 228], [356, 389], [389, 368], [368, 356], [11, 302], [302, 267], [267, 11], [452, 350], [350, 349], [349, 452], [302, 303], [303, 269], [269, 302], [357, 343], [343, 277], [277, 357], [452, 453], [453, 357], [357, 452], [333, 332], [332, 297], [297, 333], [175, 152], [152, 377], [377, 175], [347, 348], [348, 330], [330, 347], [303, 304], [304, 270], [270, 303], [9, 336], [336, 337], [337, 9], [278, 279], [279, 360], [360, 278], [418, 262], [262, 431], [431, 418], [304, 408], [408, 409], [409, 304], [310, 415], [415, 407], [407, 310], [270, 409], [409, 410], [410, 270], [450, 348], [348, 347], [347, 450], [422, 430], [430, 434], [434, 422], [313, 314], [314, 17], [17, 313], [306, 307], [307, 375], [375, 306], [387, 388], [388, 260], [260, 387], [286, 414], [414, 398], [398, 286], [335, 406], [406, 418], [418, 335], [364, 367], [367, 416], [416, 364], [423, 358], [358, 327], [327, 423], [251, 284], [284, 298], [298, 251], [281, 5], [5, 4], [4, 281], [373, 374], [374, 253], [253, 373], [307, 320], [320, 321], [321, 307], [425, 427], [427, 411], [411, 425], [421, 313], [313, 18], [18, 421], [321, 405], [405, 406], [406, 321], [320, 404], [404, 405], [405, 320], [315, 16], [16, 17], [17, 315], [426, 425], [425, 266], [266, 426], [377, 400], [400, 369], [369, 377], [322, 391], [391, 269], [269, 322], [417, 465], [465, 464], [464, 417], [386, 257], [257, 258], [258, 386], [466, 260], [260, 388], [388, 466], [456, 399], [399, 419], [419, 456], [284, 332], [332, 333], [333, 284], [417, 285], [285, 8], [8, 417], [346, 340], [340, 261], [261, 346], [413, 441], [441, 285], [285, 413], [327, 460], [460, 328], [328, 327], [355, 371], [371, 329], [329, 355], [392, 439], [439, 438], [438, 392], [382, 341], [341, 256], [256, 382], [429, 420], [420, 360], [360, 429], [364, 394], [394, 379], [379, 364], [277, 343], [343, 437], [437, 277], [443, 444], [444, 283], [283, 443], [275, 440], [440, 363], [363, 275], [431, 262], [262, 369], [369, 431], [297, 338], [338, 337], [337, 297], [273, 375], [375, 321], [321, 273], [450, 451], [451, 349], [349, 450], [446, 342], [342, 467], [467, 446], [293, 334], [334, 282], [282, 293], [458, 461], [461, 462], [462, 458], [276, 353], [353, 383], [383, 276], [308, 324], [324, 325], [325, 308], [276, 300], [300, 293], [293, 276], [372, 345], [345, 447], [447, 372], [352, 345], [345, 340], [340, 352], [274, 1], [1, 19], [19, 274], [456, 248], [248, 281], [281, 456], [436, 427], [427, 425], [425, 436], [381, 256], [256, 252], [252, 381], [269, 391], [391, 393], [393, 269], [200, 199], [199, 428], [428, 200], [266, 330], [330, 329], [329, 266], [287, 273], [273, 422], [422, 287], [250, 462], [462, 328], [328, 250], [258, 286], [286, 384], [384, 258], [265, 353], [353, 342], [342, 265], [387, 259], [259, 257], [257, 387], [424, 431], [431, 430], [430, 424], [342, 353], [353, 276], [276, 342], [273, 335], [335, 424], [424, 273], [292, 325], [325, 307], [307, 292], [366, 447], [447, 345], [345, 366], [271, 303], [303, 302], [302, 271], [423, 266], [266, 371], [371, 423], [294, 455], [455, 460], [460, 294], [279, 278], [278, 294], [294, 279], [271, 272], [272, 304], [304, 271], [432, 434], [434, 427], [427, 432], [272, 407], [407, 408], [408, 272], [394, 430], [430, 431], [431, 394], [395, 369], [369, 400], [400, 395], [334, 333], [333, 299], [299, 334], [351, 417], [417, 168], [168, 351], [352, 280], [280, 411], [411, 352], [325, 319], [319, 320], [320, 325], [295, 296], [296, 336], [336, 295], [319, 403], [403, 404], [404, 319], [330, 348], [348, 349], [349, 330], [293, 298], [298, 333], [333, 293], [323, 454], [454, 447], [447, 323], [15, 16], [16, 315], [315, 15], [358, 429], [429, 279], [279, 358], [14, 15], [15, 316], [316, 14], [285, 336], [336, 9], [9, 285], [329, 349], [349, 350], [350, 329], [374, 380], [380, 252], [252, 374], [318, 402], [402, 403], [403, 318], [6, 197], [197, 419], [419, 6], [318, 319], [319, 325], [325, 318], [367, 364], [364, 365], [365, 367], [435, 367], [367, 397], [397, 435], [344, 438], [438, 439], [439, 344], [272, 271], [271, 311], [311, 272], [195, 5], [5, 281], [281, 195], [273, 287], [287, 291], [291, 273], [396, 428], [428, 199], [199, 396], [311, 271], [271, 268], [268, 311], [283, 444], [444, 445], [445, 283], [373, 254], [254, 339], [339, 373], [282, 334], [334, 296], [296, 282], [449, 347], [347, 346], [346, 449], [264, 447], [447, 454], [454, 264], [336, 296], [296, 299], [299, 336], [338, 10], [10, 151], [151, 338], [278, 439], [439, 455], [455, 278], [292, 407], [407, 415], [415, 292], [358, 371], [371, 355], [355, 358], [340, 345], [345, 372], [372, 340], [346, 347], [347, 280], [280, 346], [442, 443], [443, 282], [282, 442], [19, 94], [94, 370], [370, 19], [441, 442], [442, 295], [295, 441], [248, 419], [419, 197], [197, 248], [263, 255], [255, 359], [359, 263], [440, 275], [275, 274], [274, 440], [300, 383], [383, 368], [368, 300], [351, 412], [412, 465], [465, 351], [263, 467], [467, 466], [466, 263], [301, 368], [368, 389], [389, 301], [395, 378], [378, 379], [379, 395], [412, 351], [351, 419], [419, 412], [436, 426], [426, 322], [322, 436], [2, 164], [164, 393], [393, 2], [370, 462], [462, 461], [461, 370], [164, 0], [0, 267], [267, 164], [302, 11], [11, 12], [12, 302], [268, 12], [12, 13], [13, 268], [293, 300], [300, 301], [301, 293], [446, 261], [261, 340], [340, 446], [330, 266], [266, 425], [425, 330], [426, 423], [423, 391], [391, 426], [429, 355], [355, 437], [437, 429], [391, 327], [327, 326], [326, 391], [440, 457], [457, 438], [438, 440], [341, 382], [382, 362], [362, 341], [459, 457], [457, 461], [461, 459], [434, 430], [430, 394], [394, 434], [414, 463], [463, 362], [362, 414], [396, 369], [369, 262], [262, 396], [354, 461], [461, 457], [457, 354], [316, 403], [403, 402], [402, 316], [315, 404], [404, 403], [403, 315], [314, 405], [405, 404], [404, 314], [313, 406], [406, 405], [405, 313], [421, 418], [418, 406], [406, 421], [366, 401], [401, 361], [361, 366], [306, 408], [408, 407], [407, 306], [291, 409], [409, 408], [408, 291], [287, 410], [410, 409], [409, 287], [432, 436], [436, 410], [410, 432], [434, 416], [416, 411], [411, 434], [264, 368], [368, 383], [383, 264], [309, 438], [438, 457], [457, 309], [352, 376], [376, 401], [401, 352], [274, 275], [275, 4], [4, 274], [421, 428], [428, 262], [262, 421], [294, 327], [327, 358], [358, 294], [433, 416], [416, 367], [367, 433], [289, 455], [455, 439], [439, 289], [462, 370], [370, 326], [326, 462], [2, 326], [326, 370], [370, 2], [305, 460], [460, 455], [455, 305], [254, 449], [449, 448], [448, 254], [255, 261], [261, 446], [446, 255], [253, 450], [450, 449], [449, 253], [252, 451], [451, 450], [450, 252], [256, 452], [452, 451], [451, 256], [341, 453], [453, 452], [452, 341], [413, 464], [464, 463], [463, 413], [441, 413], [413, 414], [414, 441], [258, 442], [442, 441], [441, 258], [257, 443], [443, 442], [442, 257], [259, 444], [444, 443], [443, 259], [260, 445], [445, 444], [444, 260], [467, 342], [342, 445], [445, 467], [459, 458], [458, 250], [250, 459], [289, 392], [392, 290], [290, 289], [290, 328], [328, 460], [460, 290], [376, 433], [433, 435], [435, 376], [250, 290], [290, 392], [392, 250], [411, 416], [416, 433], [433, 411], [341, 463], [463, 464], [464, 341], [453, 464], [464, 465], [465, 453], [357, 465], [465, 412], [412, 357], [343, 412], [412, 399], [399, 343], [360, 363], [363, 440], [440, 360], [437, 399], [399, 456], [456, 437], [420, 456], [456, 363], [363, 420], [401, 435], [435, 288], [288, 401], [372, 383], [383, 353], [353, 372], [339, 255], [255, 249], [249, 339], [448, 261], [261, 255], [255, 448], [133, 243], [243, 190], [190, 133], [133, 155], [155, 112], [112, 133], [33, 246], [246, 247], [247, 33], [33, 130], [130, 25], [25, 33], [398, 384], [384, 286], [286, 398], [362, 398], [398, 414], [414, 362], [362, 463], [463, 341], [341, 362], [263, 359], [359, 467], [467, 263], [263, 249], [249, 255], [255, 263], [466, 467], [467, 260], [260, 466], [75, 60], [60, 166], [166, 75], [238, 239], [239, 79], [79, 238], [162, 127], [127, 139], [139, 162], [72, 11], [11, 37], [37, 72], [121, 232], [232, 120], [120, 121], [73, 72], [72, 39], [39, 73], [114, 128], [128, 47], [47, 114], [233, 232], [232, 128], [128, 233], [103, 104], [104, 67], [67, 103], [152, 175], [175, 148], [148, 152], [119, 118], [118, 101], [101, 119], [74, 73], [73, 40], [40, 74], [107, 9], [9, 108], [108, 107], [49, 48], [48, 131], [131, 49], [32, 194], [194, 211], [211, 32], [184, 74], [74, 185], [185, 184], [191, 80], [80, 183], [183, 191], [185, 40], [40, 186], [186, 185], [119, 230], [230, 118], [118, 119], [210, 202], [202, 214], [214, 210], [84, 83], [83, 17], [17, 84], [77, 76], [76, 146], [146, 77], [161, 160], [160, 30], [30, 161], [190, 56], [56, 173], [173, 190], [182, 106], [106, 194], [194, 182], [138, 135], [135, 192], [192, 138], [129, 203], [203, 98], [98, 129], [54, 21], [21, 68], [68, 54], [5, 51], [51, 4], [4, 5], [145, 144], [144, 23], [23, 145], [90, 77], [77, 91], [91, 90], [207, 205], [205, 187], [187, 207], [83, 201], [201, 18], [18, 83], [181, 91], [91, 182], [182, 181], [180, 90], [90, 181], [181, 180], [16, 85], [85, 17], [17, 16], [205, 206], [206, 36], [36, 205], [176, 148], [148, 140], [140, 176], [165, 92], [92, 39], [39, 165], [245, 193], [193, 244], [244, 245], [27, 159], [159, 28], [28, 27], [30, 247], [247, 161], [161, 30], [174, 236], [236, 196], [196, 174], [103, 54], [54, 104], [104, 103], [55, 193], [193, 8], [8, 55], [111, 117], [117, 31], [31, 111], [221, 189], [189, 55], [55, 221], [240, 98], [98, 99], [99, 240], [142, 126], [126, 100], [100, 142], [219, 166], [166, 218], [218, 219], [112, 155], [155, 26], [26, 112], [198, 209], [209, 131], [131, 198], [169, 135], [135, 150], [150, 169], [114, 47], [47, 217], [217, 114], [224, 223], [223, 53], [53, 224], [220, 45], [45, 134], [134, 220], [32, 211], [211, 140], [140, 32], [109, 67], [67, 108], [108, 109], [146, 43], [43, 91], [91, 146], [231, 230], [230, 120], [120, 231], [113, 226], [226, 247], [247, 113], [105, 63], [63, 52], [52, 105], [241, 238], [238, 242], [242, 241], [124, 46], [46, 156], [156, 124], [95, 78], [78, 96], [96, 95], [70, 46], [46, 63], [63, 70], [116, 143], [143, 227], [227, 116], [116, 123], [123, 111], [111, 116], [1, 44], [44, 19], [19, 1], [3, 236], [236, 51], [51, 3], [207, 216], [216, 205], [205, 207], [26, 154], [154, 22], [22, 26], [165, 39], [39, 167], [167, 165], [199, 200], [200, 208], [208, 199], [101, 36], [36, 100], [100, 101], [43, 57], [57, 202], [202, 43], [242, 20], [20, 99], [99, 242], [56, 28], [28, 157], [157, 56], [124, 35], [35, 113], [113, 124], [29, 160], [160, 27], [27, 29], [211, 204], [204, 210], [210, 211], [124, 113], [113, 46], [46, 124], [106, 43], [43, 204], [204, 106], [96, 62], [62, 77], [77, 96], [227, 137], [137, 116], [116, 227], [73, 41], [41, 72], [72, 73], [36, 203], [203, 142], [142, 36], [235, 64], [64, 240], [240, 235], [48, 49], [49, 64], [64, 48], [42, 41], [41, 74], [74, 42], [214, 212], [212, 207], [207, 214], [183, 42], [42, 184], [184, 183], [210, 169], [169, 211], [211, 210], [140, 170], [170, 176], [176, 140], [104, 105], [105, 69], [69, 104], [193, 122], [122, 168], [168, 193], [50, 123], [123, 187], [187, 50], [89, 96], [96, 90], [90, 89], [66, 65], [65, 107], [107, 66], [179, 89], [89, 180], [180, 179], [119, 101], [101, 120], [120, 119], [68, 63], [63, 104], [104, 68], [234, 93], [93, 227], [227, 234], [16, 15], [15, 85], [85, 16], [209, 129], [129, 49], [49, 209], [15, 14], [14, 86], [86, 15], [107, 55], [55, 9], [9, 107], [120, 100], [100, 121], [121, 120], [153, 145], [145, 22], [22, 153], [178, 88], [88, 179], [179, 178], [197, 6], [6, 196], [196, 197], [89, 88], [88, 96], [96, 89], [135, 138], [138, 136], [136, 135], [138, 215], [215, 172], [172, 138], [218, 115], [115, 219], [219, 218], [41, 42], [42, 81], [81, 41], [5, 195], [195, 51], [51, 5], [57, 43], [43, 61], [61, 57], [208, 171], [171, 199], [199, 208], [41, 81], [81, 38], [38, 41], [224, 53], [53, 225], [225, 224], [24, 144], [144, 110], [110, 24], [105, 52], [52, 66], [66, 105], [118, 229], [229, 117], [117, 118], [227, 34], [34, 234], [234, 227], [66, 107], [107, 69], [69, 66], [10, 109], [109, 151], [151, 10], [219, 48], [48, 235], [235, 219], [183, 62], [62, 191], [191, 183], [142, 129], [129, 126], [126, 142], [116, 111], [111, 143], [143, 116], [118, 117], [117, 50], [50, 118], [223, 222], [222, 52], [52, 223], [94, 19], [19, 141], [141, 94], [222, 221], [221, 65], [65, 222], [196, 3], [3, 197], [197, 196], [45, 220], [220, 44], [44, 45], [156, 70], [70, 139], [139, 156], [188, 122], [122, 245], [245, 188], [139, 71], [71, 162], [162, 139], [149, 170], [170, 150], [150, 149], [122, 188], [188, 196], [196, 122], [206, 216], [216, 92], [92, 206], [164, 2], [2, 167], [167, 164], [242, 141], [141, 241], [241, 242], [0, 164], [164, 37], [37, 0], [11, 72], [72, 12], [12, 11], [12, 38], [38, 13], [13, 12], [70, 63], [63, 71], [71, 70], [31, 226], [226, 111], [111, 31], [36, 101], [101, 205], [205, 36], [203, 206], [206, 165], [165, 203], [126, 209], [209, 217], [217, 126], [98, 165], [165, 97], [97, 98], [237, 220], [220, 218], [218, 237], [237, 239], [239, 241], [241, 237], [210, 214], [214, 169], [169, 210], [140, 171], [171, 32], [32, 140], [241, 125], [125, 237], [237, 241], [179, 86], [86, 178], [178, 179], [180, 85], [85, 179], [179, 180], [181, 84], [84, 180], [180, 181], [182, 83], [83, 181], [181, 182], [194, 201], [201, 182], [182, 194], [177, 137], [137, 132], [132, 177], [184, 76], [76, 183], [183, 184], [185, 61], [61, 184], [184, 185], [186, 57], [57, 185], [185, 186], [216, 212], [212, 186], [186, 216], [192, 214], [214, 187], [187, 192], [139, 34], [34, 156], [156, 139], [218, 79], [79, 237], [237, 218], [147, 123], [123, 177], [177, 147], [45, 44], [44, 4], [4, 45], [208, 201], [201, 32], [32, 208], [98, 64], [64, 129], [129, 98], [192, 213], [213, 138], [138, 192], [235, 59], [59, 219], [219, 235], [141, 242], [242, 97], [97, 141], [97, 2], [2, 141], [141, 97], [240, 75], [75, 235], [235, 240], [229, 24], [24, 228], [228, 229], [31, 25], [25, 226], [226, 31], [230, 23], [23, 229], [229, 230], [231, 22], [22, 230], [230, 231], [232, 26], [26, 231], [231, 232], [233, 112], [112, 232], [232, 233], [244, 189], [189, 243], [243, 244], [189, 221], [221, 190], [190, 189], [222, 28], [28, 221], [221, 222], [223, 27], [27, 222], [222, 223], [224, 29], [29, 223], [223, 224], [225, 30], [30, 224], [224, 225], [113, 247], [247, 225], [225, 113], [99, 60], [60, 240], [240, 99], [213, 147], [147, 215], [215, 213], [60, 20], [20, 166], [166, 60], [192, 187], [187, 213], [213, 192], [243, 112], [112, 244], [244, 243], [244, 233], [233, 245], [245, 244], [245, 128], [128, 188], [188, 245], [188, 114], [114, 174], [174, 188], [134, 131], [131, 220], [220, 134], [174, 217], [217, 236], [236, 174], [236, 198], [198, 134], [134, 236], [215, 177], [177, 58], [58, 215], [156, 143], [143, 124], [124, 156], [25, 110], [110, 7], [7, 25], [31, 228], [228, 25], [25, 31], [264, 356], [356, 368], [368, 264], [0, 11], [11, 267], [267, 0], [451, 452], [452, 349], [349, 451], [267, 302], [302, 269], [269, 267], [350, 357], [357, 277], [277, 350], [350, 452], [452, 357], [357, 350], [299, 333], [333, 297], [297, 299], [396, 175], [175, 377], [377, 396], [280, 347], [347, 330], [330, 280], [269, 303], [303, 270], [270, 269], [151, 9], [9, 337], [337, 151], [344, 278], [278, 360], [360, 344], [424, 418], [418, 431], [431, 424], [270, 304], [304, 409], [409, 270], [272, 310], [310, 407], [407, 272], [322, 270], [270, 410], [410, 322], [449, 450], [450, 347], [347, 449], [432, 422], [422, 434], [434, 432], [18, 313], [313, 17], [17, 18], [291, 306], [306, 375], [375, 291], [259, 387], [387, 260], [260, 259], [424, 335], [335, 418], [418, 424], [434, 364], [364, 416], [416, 434], [391, 423], [423, 327], [327, 391], [301, 251], [251, 298], [298, 301], [275, 281], [281, 4], [4, 275], [254, 373], [373, 253], [253, 254], [375, 307], [307, 321], [321, 375], [280, 425], [425, 411], [411, 280], [200, 421], [421, 18], [18, 200], [335, 321], [321, 406], [406, 335], [321, 320], [320, 405], [405, 321], [314, 315], [315, 17], [17, 314], [423, 426], [426, 266], [266, 423], [396, 377], [377, 369], [369, 396], [270, 322], [322, 269], [269, 270], [413, 417], [417, 464], [464, 413], [385, 386], [386, 258], [258, 385], [248, 456], [456, 419], [419, 248], [298, 284], [284, 333], [333, 298], [168, 417], [417, 8], [8, 168], [448, 346], [346, 261], [261, 448], [417, 413], [413, 285], [285, 417], [326, 327], [327, 328], [328, 326], [277, 355], [355, 329], [329, 277], [309, 392], [392, 438], [438, 309], [381, 382], [382, 256], [256, 381], [279, 429], [429, 360], [360, 279], [365, 364], [364, 379], [379, 365], [355, 277], [277, 437], [437, 355], [282, 443], [443, 283], [283, 282], [281, 275], [275, 363], [363, 281], [395, 431], [431, 369], [369, 395], [299, 297], [297, 337], [337, 299], [335, 273], [273, 321], [321, 335], [348, 450], [450, 349], [349, 348], [359, 446], [446, 467], [467, 359], [283, 293], [293, 282], [282, 283], [250, 458], [458, 462], [462, 250], [300, 276], [276, 383], [383, 300], [292, 308], [308, 325], [325, 292], [283, 276], [276, 293], [293, 283], [264, 372], [372, 447], [447, 264], [346, 352], [352, 340], [340, 346], [354, 274], [274, 19], [19, 354], [363, 456], [456, 281], [281, 363], [426, 436], [436, 425], [425, 426], [380, 381], [381, 252], [252, 380], [267, 269], [269, 393], [393, 267], [421, 200], [200, 428], [428, 421], [371, 266], [266, 329], [329, 371], [432, 287], [287, 422], [422, 432], [290, 250], [250, 328], [328, 290], [385, 258], [258, 384], [384, 385], [446, 265], [265, 342], [342, 446], [386, 387], [387, 257], [257, 386], [422, 424], [424, 430], [430, 422], [445, 342], [342, 276], [276, 445], [422, 273], [273, 424], [424, 422], [306, 292], [292, 307], [307, 306], [352, 366], [366, 345], [345, 352], [268, 271], [271, 302], [302, 268], [358, 423], [423, 371], [371, 358], [327, 294], [294, 460], [460, 327], [331, 279], [279, 294], [294, 331], [303, 271], [271, 304], [304, 303], [436, 432], [432, 427], [427, 436], [304, 272], [272, 408], [408, 304], [395, 394], [394, 431], [431, 395], [378, 395], [395, 400], [400, 378], [296, 334], [334, 299], [299, 296], [6, 351], [351, 168], [168, 6], [376, 352], [352, 411], [411, 376], [307, 325], [325, 320], [320, 307], [285, 295], [295, 336], [336, 285], [320, 319], [319, 404], [404, 320], [329, 330], [330, 349], [349, 329], [334, 293], [293, 333], [333, 334], [366, 323], [323, 447], [447, 366], [316, 15], [15, 315], [315, 316], [331, 358], [358, 279], [279, 331], [317, 14], [14, 316], [316, 317], [8, 285], [285, 9], [9, 8], [277, 329], [329, 350], [350, 277], [253, 374], [374, 252], [252, 253], [319, 318], [318, 403], [403, 319], [351, 6], [6, 419], [419, 351], [324, 318], [318, 325], [325, 324], [397, 367], [367, 365], [365, 397], [288, 435], [435, 397], [397, 288], [278, 344], [344, 439], [439, 278], [310, 272], [272, 311], [311, 310], [248, 195], [195, 281], [281, 248], [375, 273], [273, 291], [291, 375], [175, 396], [396, 199], [199, 175], [312, 311], [311, 268], [268, 312], [276, 283], [283, 445], [445, 276], [390, 373], [373, 339], [339, 390], [295, 282], [282, 296], [296, 295], [448, 449], [449, 346], [346, 448], [356, 264], [264, 454], [454, 356], [337, 336], [336, 299], [299, 337], [337, 338], [338, 151], [151, 337], [294, 278], [278, 455], [455, 294], [308, 292], [292, 415], [415, 308], [429, 358], [358, 355], [355, 429], [265, 340], [340, 372], [372, 265], [352, 346], [346, 280], [280, 352], [295, 442], [442, 282], [282, 295], [354, 19], [19, 370], [370, 354], [285, 441], [441, 295], [295, 285], [195, 248], [248, 197], [197, 195], [457, 440], [440, 274], [274, 457], [301, 300], [300, 368], [368, 301], [417, 351], [351, 465], [465, 417], [251, 301], [301, 389], [389, 251], [394, 395], [395, 379], [379, 394], [399, 412], [412, 419], [419, 399], [410, 436], [436, 322], [322, 410], [326, 2], [2, 393], [393, 326], [354, 370], [370, 461], [461, 354], [393, 164], [164, 267], [267, 393], [268, 302], [302, 12], [12, 268], [312, 268], [268, 13], [13, 312], [298, 293], [293, 301], [301, 298], [265, 446], [446, 340], [340, 265], [280, 330], [330, 425], [425, 280], [322, 426], [426, 391], [391, 322], [420, 429], [429, 437], [437, 420], [393, 391], [391, 326], [326, 393], [344, 440], [440, 438], [438, 344], [458, 459], [459, 461], [461, 458], [364, 434], [434, 394], [394, 364], [428, 396], [396, 262], [262, 428], [274, 354], [354, 457], [457, 274], [317, 316], [316, 402], [402, 317], [316, 315], [315, 403], [403, 316], [315, 314], [314, 404], [404, 315], [314, 313], [313, 405], [405, 314], [313, 421], [421, 406], [406, 313], [323, 366], [366, 361], [361, 323], [292, 306], [306, 407], [407, 292], [306, 291], [291, 408], [408, 306], [291, 287], [287, 409], [409, 291], [287, 432], [432, 410], [410, 287], [427, 434], [434, 411], [411, 427], [372, 264], [264, 383], [383, 372], [459, 309], [309, 457], [457, 459], [366, 352], [352, 401], [401, 366], [1, 274], [274, 4], [4, 1], [418, 421], [421, 262], [262, 418], [331, 294], [294, 358], [358, 331], [435, 433], [433, 367], [367, 435], [392, 289], [289, 439], [439, 392], [328, 462], [462, 326], [326, 328], [94, 2], [2, 370], [370, 94], [289, 305], [305, 455], [455, 289], [339, 254], [254, 448], [448, 339], [359, 255], [255, 446], [446, 359], [254, 253], [253, 449], [449, 254], [253, 252], [252, 450], [450, 253], [252, 256], [256, 451], [451, 252], [256, 341], [341, 452], [452, 256], [414, 413], [413, 463], [463, 414], [286, 441], [441, 414], [414, 286], [286, 258], [258, 441], [441, 286], [258, 257], [257, 442], [442, 258], [257, 259], [259, 443], [443, 257], [259, 260], [260, 444], [444, 259], [260, 467], [467, 445], [445, 260], [309, 459], [459, 250], [250, 309], [305, 289], [289, 290], [290, 305], [305, 290], [290, 460], [460, 305], [401, 376], [376, 435], [435, 401], [309, 250], [250, 392], [392, 309], [376, 411], [411, 433], [433, 376], [453, 341], [341, 464], [464, 453], [357, 453], [453, 465], [465, 357], [343, 357], [357, 412], [412, 343], [437, 343], [343, 399], [399, 437], [344, 360], [360, 440], [440, 344], [420, 437], [437, 456], [456, 420], [360, 420], [420, 363], [363, 360], [361, 401], [401, 288], [288, 361], [265, 372], [372, 353], [353, 265], [390, 339], [339, 249], [249, 390], [339, 448], [448, 255], [255, 339]);
function uh(t2) {
  t2.j = { faceLandmarks: [], faceBlendshapes: [], facialTransformationMatrixes: [] };
}
var lh = class extends Za {
  constructor(t2, e2) {
    super(new za(t2, e2), "image_in", "norm_rect", false), this.j = { faceLandmarks: [], faceBlendshapes: [], facialTransformationMatrixes: [] }, this.outputFacialTransformationMatrixes = this.outputFaceBlendshapes = false, yn(t2 = this.h = new Ds(), 0, 1, e2 = new xs()), this.v = new Us(), yn(this.h, 0, 3, this.v), this.s = new Fs(), yn(this.h, 0, 2, this.s), xn(this.s, 4, 1), Ln(this.s, 2, 0.5), Ln(this.v, 2, 0.5), Ln(this.h, 4, 0.5);
  }
  get baseOptions() {
    return pn(this.h, xs, 1);
  }
  set baseOptions(t2) {
    yn(this.h, 0, 1, t2);
  }
  o(t2) {
    var _a2, _b, _c, _d;
    return "numFaces" in t2 && xn(this.s, 4, (_a2 = t2.numFaces) != null ? _a2 : 1), "minFaceDetectionConfidence" in t2 && Ln(this.s, 2, (_b = t2.minFaceDetectionConfidence) != null ? _b : 0.5), "minTrackingConfidence" in t2 && Ln(this.h, 4, (_c = t2.minTrackingConfidence) != null ? _c : 0.5), "minFacePresenceConfidence" in t2 && Ln(this.v, 2, (_d = t2.minFacePresenceConfidence) != null ? _d : 0.5), "outputFaceBlendshapes" in t2 && (this.outputFaceBlendshapes = !!t2.outputFaceBlendshapes), "outputFacialTransformationMatrixes" in t2 && (this.outputFacialTransformationMatrixes = !!t2.outputFacialTransformationMatrixes), this.l(t2);
  }
  D(t2, e2) {
    return uh(this), $a(this, t2, e2), this.j;
  }
  F(t2, e2, n2) {
    return uh(this), qa(this, t2, n2, e2), this.j;
  }
  m() {
    var t2 = new $i();
    Ki(t2, "image_in"), Ki(t2, "norm_rect"), Yi(t2, "face_landmarks");
    const e2 = new Ci();
    er(e2, js, this.h);
    const n2 = new Vi();
    Bi(n2, "mediapipe.tasks.vision.face_landmarker.FaceLandmarkerGraph"), Gi(n2, "IMAGE:image_in"), Gi(n2, "NORM_RECT:norm_rect"), ji(n2, "NORM_LANDMARKS:face_landmarks"), n2.o(e2), zi(t2, n2), this.g.attachProtoVectorListener("face_landmarks", (t3, e3) => {
      for (const e4 of t3) t3 = cs(e4), this.j.faceLandmarks.push(Ro(t3));
      $o(this, e3);
    }), this.g.attachEmptyPacketListener("face_landmarks", (t3) => {
      $o(this, t3);
    }), this.outputFaceBlendshapes && (Yi(t2, "blendshapes"), ji(n2, "BLENDSHAPES:blendshapes"), this.g.attachProtoVectorListener("blendshapes", (t3, e3) => {
      var _a2;
      if (this.outputFaceBlendshapes) for (const e4 of t3) t3 = es(e4), this.j.faceBlendshapes.push(xo((_a2 = t3.g()) != null ? _a2 : []));
      $o(this, e3);
    }), this.g.attachEmptyPacketListener("blendshapes", (t3) => {
      $o(this, t3);
    })), this.outputFacialTransformationMatrixes && (Yi(t2, "face_geometry"), ji(n2, "FACE_GEOMETRY:face_geometry"), this.g.attachProtoVectorListener("face_geometry", (t3, e3) => {
      var _a2, _b, _c;
      if (this.outputFacialTransformationMatrixes) for (const e4 of t3) (t3 = pn(Cs(e4), us, 2)) && this.j.facialTransformationMatrixes.push({ rows: (_a2 = Tn(An(t3, 1), 0)) != null ? _a2 : 0, columns: (_b = Tn(An(t3, 2), 0)) != null ? _b : 0, data: (_c = en(t3, 3, Ht, tn()).slice()) != null ? _c : [] });
      $o(this, e3);
    }), this.g.attachEmptyPacketListener("face_geometry", (t3) => {
      $o(this, t3);
    })), t2 = t2.g(), this.setGraph(new Uint8Array(t2), true);
  }
};
lh.prototype.detectForVideo = lh.prototype.F, lh.prototype.detect = lh.prototype.D, lh.prototype.setOptions = lh.prototype.o, lh.createFromModelPath = function(t2, e2) {
  return Ka(lh, t2, { baseOptions: { modelAssetPath: e2 } });
}, lh.createFromModelBuffer = function(t2, e2) {
  return Ka(lh, t2, { baseOptions: { modelAssetBuffer: e2 } });
}, lh.createFromOptions = function(t2, e2) {
  return Ka(lh, t2, e2);
}, lh.FACE_LANDMARKS_LIPS = th, lh.FACE_LANDMARKS_LEFT_EYE = eh, lh.FACE_LANDMARKS_LEFT_EYEBROW = nh, lh.FACE_LANDMARKS_LEFT_IRIS = rh, lh.FACE_LANDMARKS_RIGHT_EYE = ih, lh.FACE_LANDMARKS_RIGHT_EYEBROW = sh, lh.FACE_LANDMARKS_RIGHT_IRIS = oh, lh.FACE_LANDMARKS_FACE_OVAL = ah, lh.FACE_LANDMARKS_CONTOURS = hh, lh.FACE_LANDMARKS_TESSELATION = ch;
var fh = class extends Za {
  constructor(t2, e2) {
    super(new za(t2, e2), "image_in", "norm_rect", true), yn(t2 = this.j = new Vs(), 0, 1, e2 = new xs());
  }
  get baseOptions() {
    return pn(this.j, xs, 1);
  }
  set baseOptions(t2) {
    yn(this.j, 0, 1, t2);
  }
  o(t2) {
    return super.l(t2);
  }
  Ra(t2, e2, n2) {
    const r2 = "function" != typeof e2 ? e2 : {};
    if (this.h = "function" == typeof e2 ? e2 : n2, $a(this, t2, r2 != null ? r2 : {}), !this.h) return this.s;
  }
  m() {
    var t2 = new $i();
    Ki(t2, "image_in"), Ki(t2, "norm_rect"), Yi(t2, "stylized_image");
    const e2 = new Ci();
    er(e2, Xs, this.j);
    const n2 = new Vi();
    Bi(n2, "mediapipe.tasks.vision.face_stylizer.FaceStylizerGraph"), Gi(n2, "IMAGE:image_in"), Gi(n2, "NORM_RECT:norm_rect"), ji(n2, "STYLIZED_IMAGE:stylized_image"), n2.o(e2), zi(t2, n2), this.g.W("stylized_image", (t3, e3) => {
      var n3 = !this.h, r2 = t3.data, i2 = t3.width;
      const s2 = i2 * (t3 = t3.height);
      if (r2 instanceof Uint8Array) if (r2.length === 3 * s2) {
        const e4 = new Uint8ClampedArray(4 * s2);
        for (let t4 = 0; t4 < s2; ++t4) e4[4 * t4] = r2[3 * t4], e4[4 * t4 + 1] = r2[3 * t4 + 1], e4[4 * t4 + 2] = r2[3 * t4 + 2], e4[4 * t4 + 3] = 255;
        r2 = new ImageData(e4, i2, t3);
      } else {
        if (r2.length !== 4 * s2) throw Error("Unsupported channel count: " + r2.length / s2);
        r2 = new ImageData(new Uint8ClampedArray(r2.buffer, r2.byteOffset, r2.length), i2, t3);
      }
      else if (!(r2 instanceof WebGLTexture)) throw Error(`Unsupported format: ${r2.constructor.name}`);
      i2 = new ja([r2], false, false, this.g.i.canvas, this.R, i2, t3), this.s = n3 = n3 ? i2.clone() : i2, this.h && this.h(n3), $o(this, e3);
    }), this.g.attachEmptyPacketListener("stylized_image", (t3) => {
      this.s = null, this.h && this.h(null), $o(this, t3);
    }), t2 = t2.g(), this.setGraph(new Uint8Array(t2), true);
  }
};
fh.prototype.stylize = fh.prototype.Ra, fh.prototype.setOptions = fh.prototype.o, fh.createFromModelPath = function(t2, e2) {
  return Ka(fh, t2, { baseOptions: { modelAssetPath: e2 } });
}, fh.createFromModelBuffer = function(t2, e2) {
  return Ka(fh, t2, { baseOptions: { modelAssetBuffer: e2 } });
}, fh.createFromOptions = function(t2, e2) {
  return Ka(fh, t2, e2);
};
var dh = Xa([0, 1], [1, 2], [2, 3], [3, 4], [0, 5], [5, 6], [6, 7], [7, 8], [5, 9], [9, 10], [10, 11], [11, 12], [9, 13], [13, 14], [14, 15], [15, 16], [13, 17], [0, 17], [17, 18], [18, 19], [19, 20]);
function ph(t2) {
  t2.gestures = [], t2.landmarks = [], t2.worldLandmarks = [], t2.handedness = [];
}
function gh(t2) {
  return 0 === t2.gestures.length ? { gestures: [], landmarks: [], worldLandmarks: [], handedness: [], handednesses: [] } : { gestures: t2.gestures, landmarks: t2.landmarks, worldLandmarks: t2.worldLandmarks, handedness: t2.handedness, handednesses: t2.handedness };
}
function mh(t2, e2 = true) {
  var _a2, _b, _c;
  const n2 = [];
  for (const i2 of t2) {
    var r2 = es(i2);
    t2 = [];
    for (const n3 of r2.g()) r2 = e2 && null != An(n3, 1) ? Tn(An(n3, 1), 0) : -1, t2.push({ score: (_a2 = bn(n3, 2)) != null ? _a2 : 0, index: r2, categoryName: (_b = kn(n3, 3)) != null ? _b : "", displayName: (_c = kn(n3, 4)) != null ? _c : "" });
    n2.push(t2);
  }
  return n2;
}
var yh = class extends Za {
  constructor(t2, e2) {
    super(new za(t2, e2), "image_in", "norm_rect", false), this.gestures = [], this.landmarks = [], this.worldLandmarks = [], this.handedness = [], yn(t2 = this.j = new Js(), 0, 1, e2 = new xs()), this.s = new qs(), yn(this.j, 0, 2, this.s), this.C = new $s(), yn(this.s, 0, 3, this.C), this.v = new Ys(), yn(this.s, 0, 2, this.v), this.h = new Ks(), yn(this.j, 0, 3, this.h), Ln(this.v, 2, 0.5), Ln(this.s, 4, 0.5), Ln(this.C, 2, 0.5);
  }
  get baseOptions() {
    return pn(this.j, xs, 1);
  }
  set baseOptions(t2) {
    yn(this.j, 0, 1, t2);
  }
  o(t2) {
    var _a2, _b, _c, _d, _e2, _f, _g, _h2;
    if (xn(this.v, 3, (_a2 = t2.numHands) != null ? _a2 : 1), "minHandDetectionConfidence" in t2 && Ln(this.v, 2, (_b = t2.minHandDetectionConfidence) != null ? _b : 0.5), "minTrackingConfidence" in t2 && Ln(this.s, 4, (_c = t2.minTrackingConfidence) != null ? _c : 0.5), "minHandPresenceConfidence" in t2 && Ln(this.C, 2, (_d = t2.minHandPresenceConfidence) != null ? _d : 0.5), t2.cannedGesturesClassifierOptions) {
      var e2 = new Hs(), n2 = e2, r2 = So(t2.cannedGesturesClassifierOptions, (_e2 = pn(this.h, Hs, 3)) == null ? void 0 : _e2.h());
      yn(n2, 0, 2, r2), yn(this.h, 0, 3, e2);
    } else void 0 === t2.cannedGesturesClassifierOptions && ((_f = pn(this.h, Hs, 3)) == null ? void 0 : _f.g());
    return t2.customGesturesClassifierOptions ? (yn(n2 = e2 = new Hs(), 0, 2, r2 = So(t2.customGesturesClassifierOptions, (_g = pn(this.h, Hs, 4)) == null ? void 0 : _g.h())), yn(this.h, 0, 4, e2)) : void 0 === t2.customGesturesClassifierOptions && ((_h2 = pn(this.h, Hs, 4)) == null ? void 0 : _h2.g()), this.l(t2);
  }
  Ma(t2, e2) {
    return ph(this), $a(this, t2, e2), gh(this);
  }
  Na(t2, e2, n2) {
    return ph(this), qa(this, t2, n2, e2), gh(this);
  }
  m() {
    var t2 = new $i();
    Ki(t2, "image_in"), Ki(t2, "norm_rect"), Yi(t2, "hand_gestures"), Yi(t2, "hand_landmarks"), Yi(t2, "world_hand_landmarks"), Yi(t2, "handedness");
    const e2 = new Ci();
    er(e2, io, this.j);
    const n2 = new Vi();
    Bi(n2, "mediapipe.tasks.vision.gesture_recognizer.GestureRecognizerGraph"), Gi(n2, "IMAGE:image_in"), Gi(n2, "NORM_RECT:norm_rect"), ji(n2, "HAND_GESTURES:hand_gestures"), ji(n2, "LANDMARKS:hand_landmarks"), ji(n2, "WORLD_LANDMARKS:world_hand_landmarks"), ji(n2, "HANDEDNESS:handedness"), n2.o(e2), zi(t2, n2), this.g.attachProtoVectorListener("hand_landmarks", (t3, e3) => {
      var _a2, _b, _c, _d;
      for (const e4 of t3) {
        t3 = cs(e4);
        const n3 = [];
        for (const e5 of mn(t3, hs, 1)) n3.push({ x: (_a2 = bn(e5, 1)) != null ? _a2 : 0, y: (_b = bn(e5, 2)) != null ? _b : 0, z: (_c = bn(e5, 3)) != null ? _c : 0, visibility: (_d = bn(e5, 4)) != null ? _d : 0 });
        this.landmarks.push(n3);
      }
      $o(this, e3);
    }), this.g.attachEmptyPacketListener("hand_landmarks", (t3) => {
      $o(this, t3);
    }), this.g.attachProtoVectorListener("world_hand_landmarks", (t3, e3) => {
      var _a2, _b, _c, _d;
      for (const e4 of t3) {
        t3 = as(e4);
        const n3 = [];
        for (const e5 of mn(t3, os, 1)) n3.push({ x: (_a2 = bn(e5, 1)) != null ? _a2 : 0, y: (_b = bn(e5, 2)) != null ? _b : 0, z: (_c = bn(e5, 3)) != null ? _c : 0, visibility: (_d = bn(e5, 4)) != null ? _d : 0 });
        this.worldLandmarks.push(n3);
      }
      $o(this, e3);
    }), this.g.attachEmptyPacketListener("world_hand_landmarks", (t3) => {
      $o(this, t3);
    }), this.g.attachProtoVectorListener("hand_gestures", (t3, e3) => {
      this.gestures.push(...mh(t3, false)), $o(this, e3);
    }), this.g.attachEmptyPacketListener("hand_gestures", (t3) => {
      $o(this, t3);
    }), this.g.attachProtoVectorListener("handedness", (t3, e3) => {
      this.handedness.push(...mh(t3)), $o(this, e3);
    }), this.g.attachEmptyPacketListener("handedness", (t3) => {
      $o(this, t3);
    }), t2 = t2.g(), this.setGraph(new Uint8Array(t2), true);
  }
};
function _h(t2) {
  return { landmarks: t2.landmarks, worldLandmarks: t2.worldLandmarks, handednesses: t2.handedness, handedness: t2.handedness };
}
yh.prototype.recognizeForVideo = yh.prototype.Na, yh.prototype.recognize = yh.prototype.Ma, yh.prototype.setOptions = yh.prototype.o, yh.createFromModelPath = function(t2, e2) {
  return Ka(yh, t2, { baseOptions: { modelAssetPath: e2 } });
}, yh.createFromModelBuffer = function(t2, e2) {
  return Ka(yh, t2, { baseOptions: { modelAssetBuffer: e2 } });
}, yh.createFromOptions = function(t2, e2) {
  return Ka(yh, t2, e2);
}, yh.HAND_CONNECTIONS = dh;
var vh = class extends Za {
  constructor(t2, e2) {
    super(new za(t2, e2), "image_in", "norm_rect", false), this.landmarks = [], this.worldLandmarks = [], this.handedness = [], yn(t2 = this.h = new qs(), 0, 1, e2 = new xs()), this.s = new $s(), yn(this.h, 0, 3, this.s), this.j = new Ys(), yn(this.h, 0, 2, this.j), xn(this.j, 3, 1), Ln(this.j, 2, 0.5), Ln(this.s, 2, 0.5), Ln(this.h, 4, 0.5);
  }
  get baseOptions() {
    return pn(this.h, xs, 1);
  }
  set baseOptions(t2) {
    yn(this.h, 0, 1, t2);
  }
  o(t2) {
    var _a2, _b, _c, _d;
    return "numHands" in t2 && xn(this.j, 3, (_a2 = t2.numHands) != null ? _a2 : 1), "minHandDetectionConfidence" in t2 && Ln(this.j, 2, (_b = t2.minHandDetectionConfidence) != null ? _b : 0.5), "minTrackingConfidence" in t2 && Ln(this.h, 4, (_c = t2.minTrackingConfidence) != null ? _c : 0.5), "minHandPresenceConfidence" in t2 && Ln(this.s, 2, (_d = t2.minHandPresenceConfidence) != null ? _d : 0.5), this.l(t2);
  }
  D(t2, e2) {
    return this.landmarks = [], this.worldLandmarks = [], this.handedness = [], $a(this, t2, e2), _h(this);
  }
  F(t2, e2, n2) {
    return this.landmarks = [], this.worldLandmarks = [], this.handedness = [], qa(this, t2, n2, e2), _h(this);
  }
  m() {
    var t2 = new $i();
    Ki(t2, "image_in"), Ki(t2, "norm_rect"), Yi(t2, "hand_landmarks"), Yi(t2, "world_hand_landmarks"), Yi(t2, "handedness");
    const e2 = new Ci();
    er(e2, ro, this.h);
    const n2 = new Vi();
    Bi(n2, "mediapipe.tasks.vision.hand_landmarker.HandLandmarkerGraph"), Gi(n2, "IMAGE:image_in"), Gi(n2, "NORM_RECT:norm_rect"), ji(n2, "LANDMARKS:hand_landmarks"), ji(n2, "WORLD_LANDMARKS:world_hand_landmarks"), ji(n2, "HANDEDNESS:handedness"), n2.o(e2), zi(t2, n2), this.g.attachProtoVectorListener("hand_landmarks", (t3, e3) => {
      for (const e4 of t3) t3 = cs(e4), this.landmarks.push(Ro(t3));
      $o(this, e3);
    }), this.g.attachEmptyPacketListener("hand_landmarks", (t3) => {
      $o(this, t3);
    }), this.g.attachProtoVectorListener("world_hand_landmarks", (t3, e3) => {
      for (const e4 of t3) t3 = as(e4), this.worldLandmarks.push(Fo(t3));
      $o(this, e3);
    }), this.g.attachEmptyPacketListener("world_hand_landmarks", (t3) => {
      $o(this, t3);
    }), this.g.attachProtoVectorListener("handedness", (t3, e3) => {
      var _a2, _b, _c, _d;
      var n3 = this.handedness, r2 = n3.push;
      const i2 = [];
      for (const e4 of t3) {
        t3 = es(e4);
        const n4 = [];
        for (const e5 of t3.g()) n4.push({ score: (_a2 = bn(e5, 2)) != null ? _a2 : 0, index: (_b = Tn(An(e5, 1), 0)) != null ? _b : -1, categoryName: (_c = kn(e5, 3)) != null ? _c : "", displayName: (_d = kn(e5, 4)) != null ? _d : "" });
        i2.push(n4);
      }
      r2.call(n3, ...i2), $o(this, e3);
    }), this.g.attachEmptyPacketListener("handedness", (t3) => {
      $o(this, t3);
    }), t2 = t2.g(), this.setGraph(new Uint8Array(t2), true);
  }
};
vh.prototype.detectForVideo = vh.prototype.F, vh.prototype.detect = vh.prototype.D, vh.prototype.setOptions = vh.prototype.o, vh.createFromModelPath = function(t2, e2) {
  return Ka(vh, t2, { baseOptions: { modelAssetPath: e2 } });
}, vh.createFromModelBuffer = function(t2, e2) {
  return Ka(vh, t2, { baseOptions: { modelAssetBuffer: e2 } });
}, vh.createFromOptions = function(t2, e2) {
  return Ka(vh, t2, e2);
}, vh.HAND_CONNECTIONS = dh;
var Eh = Xa([0, 1], [1, 2], [2, 3], [3, 7], [0, 4], [4, 5], [5, 6], [6, 8], [9, 10], [11, 12], [11, 13], [13, 15], [15, 17], [15, 19], [15, 21], [17, 19], [12, 14], [14, 16], [16, 18], [16, 20], [16, 22], [18, 20], [11, 23], [12, 24], [23, 24], [23, 25], [24, 26], [25, 27], [26, 28], [27, 29], [28, 30], [29, 31], [30, 32], [27, 31], [28, 32]);
function wh(t2) {
  t2.h = { faceLandmarks: [], faceBlendshapes: [], poseLandmarks: [], poseWorldLandmarks: [], poseSegmentationMasks: [], leftHandLandmarks: [], leftHandWorldLandmarks: [], rightHandLandmarks: [], rightHandWorldLandmarks: [] };
}
function Th(t2) {
  try {
    if (!t2.C) return t2.h;
    t2.C(t2.h);
  } finally {
    Zo(t2);
  }
}
function Ah(t2, e2) {
  t2 = cs(t2), e2.push(Ro(t2));
}
var bh = class extends Za {
  constructor(t2, e2) {
    super(new za(t2, e2), "input_frames_image", null, false), this.h = { faceLandmarks: [], faceBlendshapes: [], poseLandmarks: [], poseWorldLandmarks: [], poseSegmentationMasks: [], leftHandLandmarks: [], leftHandWorldLandmarks: [], rightHandLandmarks: [], rightHandWorldLandmarks: [] }, this.outputPoseSegmentationMasks = this.outputFaceBlendshapes = false, yn(t2 = this.j = new ho(), 0, 1, e2 = new xs()), this.K = new $s(), yn(this.j, 0, 2, this.K), this.ca = new so(), yn(this.j, 0, 3, this.ca), this.s = new Fs(), yn(this.j, 0, 4, this.s), this.I = new Us(), yn(this.j, 0, 5, this.I), this.v = new oo(), yn(this.j, 0, 6, this.v), this.L = new ao(), yn(this.j, 0, 7, this.L), Ln(this.s, 2, 0.5), Ln(this.s, 3, 0.3), Ln(this.I, 2, 0.5), Ln(this.v, 2, 0.5), Ln(this.v, 3, 0.3), Ln(this.L, 2, 0.5), Ln(this.K, 2, 0.5);
  }
  get baseOptions() {
    return pn(this.j, xs, 1);
  }
  set baseOptions(t2) {
    yn(this.j, 0, 1, t2);
  }
  o(t2) {
    var _a2, _b, _c, _d, _e2, _f, _g;
    return "minFaceDetectionConfidence" in t2 && Ln(this.s, 2, (_a2 = t2.minFaceDetectionConfidence) != null ? _a2 : 0.5), "minFaceSuppressionThreshold" in t2 && Ln(this.s, 3, (_b = t2.minFaceSuppressionThreshold) != null ? _b : 0.3), "minFacePresenceConfidence" in t2 && Ln(this.I, 2, (_c = t2.minFacePresenceConfidence) != null ? _c : 0.5), "outputFaceBlendshapes" in t2 && (this.outputFaceBlendshapes = !!t2.outputFaceBlendshapes), "minPoseDetectionConfidence" in t2 && Ln(this.v, 2, (_d = t2.minPoseDetectionConfidence) != null ? _d : 0.5), "minPoseSuppressionThreshold" in t2 && Ln(this.v, 3, (_e2 = t2.minPoseSuppressionThreshold) != null ? _e2 : 0.3), "minPosePresenceConfidence" in t2 && Ln(this.L, 2, (_f = t2.minPosePresenceConfidence) != null ? _f : 0.5), "outputPoseSegmentationMasks" in t2 && (this.outputPoseSegmentationMasks = !!t2.outputPoseSegmentationMasks), "minHandLandmarksConfidence" in t2 && Ln(this.K, 2, (_g = t2.minHandLandmarksConfidence) != null ? _g : 0.5), this.l(t2);
  }
  D(t2, e2, n2) {
    const r2 = "function" != typeof e2 ? e2 : {};
    return this.C = "function" == typeof e2 ? e2 : n2, wh(this), $a(this, t2, r2), Th(this);
  }
  F(t2, e2, n2, r2) {
    const i2 = "function" != typeof n2 ? n2 : {};
    return this.C = "function" == typeof n2 ? n2 : r2, wh(this), qa(this, t2, i2, e2), Th(this);
  }
  m() {
    var t2 = new $i();
    Ki(t2, "input_frames_image"), Yi(t2, "pose_landmarks"), Yi(t2, "pose_world_landmarks"), Yi(t2, "face_landmarks"), Yi(t2, "left_hand_landmarks"), Yi(t2, "left_hand_world_landmarks"), Yi(t2, "right_hand_landmarks"), Yi(t2, "right_hand_world_landmarks");
    const e2 = new Ci(), n2 = new ki();
    an(n2, 1, ne("type.googleapis.com/mediapipe.tasks.vision.holistic_landmarker.proto.HolisticLandmarkerGraphOptions"), ""), function(t3, e3) {
      if (null != e3) if (Array.isArray(e3)) $e(t3, 2, De(e3, Ge, void 0, void 0, false));
      else {
        if (!("string" == typeof e3 || e3 instanceof D || I(e3))) throw Error("invalid value in Any.value field: " + e3 + " expected a ByteString, a base64 encoded string, a Uint8Array or a jspb array");
        an(t3, 2, lt(e3, false, false), N());
      }
    }(n2, this.j.g());
    const r2 = new Vi();
    Bi(r2, "mediapipe.tasks.vision.holistic_landmarker.HolisticLandmarkerGraph"), wn(r2, 8, ki, n2), Gi(r2, "IMAGE:input_frames_image"), ji(r2, "POSE_LANDMARKS:pose_landmarks"), ji(r2, "POSE_WORLD_LANDMARKS:pose_world_landmarks"), ji(r2, "FACE_LANDMARKS:face_landmarks"), ji(r2, "LEFT_HAND_LANDMARKS:left_hand_landmarks"), ji(r2, "LEFT_HAND_WORLD_LANDMARKS:left_hand_world_landmarks"), ji(r2, "RIGHT_HAND_LANDMARKS:right_hand_landmarks"), ji(r2, "RIGHT_HAND_WORLD_LANDMARKS:right_hand_world_landmarks"), r2.o(e2), zi(t2, r2), qo(this, t2), this.g.attachProtoListener("pose_landmarks", (t3, e3) => {
      Ah(t3, this.h.poseLandmarks), $o(this, e3);
    }), this.g.attachEmptyPacketListener("pose_landmarks", (t3) => {
      $o(this, t3);
    }), this.g.attachProtoListener("pose_world_landmarks", (t3, e3) => {
      var n3 = this.h.poseWorldLandmarks;
      t3 = as(t3), n3.push(Fo(t3)), $o(this, e3);
    }), this.g.attachEmptyPacketListener("pose_world_landmarks", (t3) => {
      $o(this, t3);
    }), this.outputPoseSegmentationMasks && (ji(r2, "POSE_SEGMENTATION_MASK:pose_segmentation_mask"), Jo(this, "pose_segmentation_mask"), this.g.W("pose_segmentation_mask", (t3, e3) => {
      this.h.poseSegmentationMasks = [Ja(this, t3, true, !this.C)], $o(this, e3);
    }), this.g.attachEmptyPacketListener("pose_segmentation_mask", (t3) => {
      this.h.poseSegmentationMasks = [], $o(this, t3);
    })), this.g.attachProtoListener("face_landmarks", (t3, e3) => {
      Ah(t3, this.h.faceLandmarks), $o(this, e3);
    }), this.g.attachEmptyPacketListener("face_landmarks", (t3) => {
      $o(this, t3);
    }), this.outputFaceBlendshapes && (Yi(t2, "extra_blendshapes"), ji(r2, "FACE_BLENDSHAPES:extra_blendshapes"), this.g.attachProtoListener("extra_blendshapes", (t3, e3) => {
      var _a2;
      var n3 = this.h.faceBlendshapes;
      this.outputFaceBlendshapes && (t3 = es(t3), n3.push(xo((_a2 = t3.g()) != null ? _a2 : []))), $o(this, e3);
    }), this.g.attachEmptyPacketListener("extra_blendshapes", (t3) => {
      $o(this, t3);
    })), this.g.attachProtoListener("left_hand_landmarks", (t3, e3) => {
      Ah(t3, this.h.leftHandLandmarks), $o(this, e3);
    }), this.g.attachEmptyPacketListener("left_hand_landmarks", (t3) => {
      $o(this, t3);
    }), this.g.attachProtoListener("left_hand_world_landmarks", (t3, e3) => {
      var n3 = this.h.leftHandWorldLandmarks;
      t3 = as(t3), n3.push(Fo(t3)), $o(this, e3);
    }), this.g.attachEmptyPacketListener("left_hand_world_landmarks", (t3) => {
      $o(this, t3);
    }), this.g.attachProtoListener("right_hand_landmarks", (t3, e3) => {
      Ah(t3, this.h.rightHandLandmarks), $o(this, e3);
    }), this.g.attachEmptyPacketListener("right_hand_landmarks", (t3) => {
      $o(this, t3);
    }), this.g.attachProtoListener("right_hand_world_landmarks", (t3, e3) => {
      var n3 = this.h.rightHandWorldLandmarks;
      t3 = as(t3), n3.push(Fo(t3)), $o(this, e3);
    }), this.g.attachEmptyPacketListener("right_hand_world_landmarks", (t3) => {
      $o(this, t3);
    }), t2 = t2.g(), this.setGraph(new Uint8Array(t2), true);
  }
};
bh.prototype.detectForVideo = bh.prototype.F, bh.prototype.detect = bh.prototype.D, bh.prototype.setOptions = bh.prototype.o, bh.createFromModelPath = function(t2, e2) {
  return Ka(bh, t2, { baseOptions: { modelAssetPath: e2 } });
}, bh.createFromModelBuffer = function(t2, e2) {
  return Ka(bh, t2, { baseOptions: { modelAssetBuffer: e2 } });
}, bh.createFromOptions = function(t2, e2) {
  return Ka(bh, t2, e2);
}, bh.HAND_CONNECTIONS = dh, bh.POSE_CONNECTIONS = Eh, bh.FACE_LANDMARKS_LIPS = th, bh.FACE_LANDMARKS_LEFT_EYE = eh, bh.FACE_LANDMARKS_LEFT_EYEBROW = nh, bh.FACE_LANDMARKS_LEFT_IRIS = rh, bh.FACE_LANDMARKS_RIGHT_EYE = ih, bh.FACE_LANDMARKS_RIGHT_EYEBROW = sh, bh.FACE_LANDMARKS_RIGHT_IRIS = oh, bh.FACE_LANDMARKS_FACE_OVAL = ah, bh.FACE_LANDMARKS_CONTOURS = hh, bh.FACE_LANDMARKS_TESSELATION = ch;
var kh = class extends Za {
  constructor(t2, e2) {
    super(new za(t2, e2), "input_image", "norm_rect", true), this.j = { classifications: [] }, yn(t2 = this.h = new lo(), 0, 1, e2 = new xs());
  }
  get baseOptions() {
    return pn(this.h, xs, 1);
  }
  set baseOptions(t2) {
    yn(this.h, 0, 1, t2);
  }
  o(t2) {
    return yn(this.h, 0, 2, So(t2, pn(this.h, Es, 2))), this.l(t2);
  }
  wa(t2, e2) {
    return this.j = { classifications: [] }, $a(this, t2, e2), this.j;
  }
  xa(t2, e2, n2) {
    return this.j = { classifications: [] }, qa(this, t2, n2, e2), this.j;
  }
  m() {
    var t2 = new $i();
    Ki(t2, "input_image"), Ki(t2, "norm_rect"), Yi(t2, "classifications");
    const e2 = new Ci();
    er(e2, fo, this.h);
    const n2 = new Vi();
    Bi(n2, "mediapipe.tasks.vision.image_classifier.ImageClassifierGraph"), Gi(n2, "IMAGE:input_image"), Gi(n2, "NORM_RECT:norm_rect"), ji(n2, "CLASSIFICATIONS:classifications"), n2.o(e2), zi(t2, n2), this.g.attachProtoListener("classifications", (t3, e3) => {
      this.j = function(t4) {
        const e4 = { classifications: mn(t4, ds, 1).map((t5) => {
          var _a2, _b;
          return xo((_b = (_a2 = pn(t5, Qi, 4)) == null ? void 0 : _a2.g()) != null ? _b : [], Tn(An(t5, 2), 0), kn(t5, 3));
        }) };
        return null != Qt(ze(t4, 2)) && (e4.timestampMs = Tn(Qt(ze(t4, 2)), 0)), e4;
      }(ps(t3)), $o(this, e3);
    }), this.g.attachEmptyPacketListener("classifications", (t3) => {
      $o(this, t3);
    }), t2 = t2.g(), this.setGraph(new Uint8Array(t2), true);
  }
};
kh.prototype.classifyForVideo = kh.prototype.xa, kh.prototype.classify = kh.prototype.wa, kh.prototype.setOptions = kh.prototype.o, kh.createFromModelPath = function(t2, e2) {
  return Ka(kh, t2, { baseOptions: { modelAssetPath: e2 } });
}, kh.createFromModelBuffer = function(t2, e2) {
  return Ka(kh, t2, { baseOptions: { modelAssetBuffer: e2 } });
}, kh.createFromOptions = function(t2, e2) {
  return Ka(kh, t2, e2);
};
var Sh = class extends Za {
  constructor(t2, e2) {
    super(new za(t2, e2), "image_in", "norm_rect", true), this.h = new po(), this.embeddings = { embeddings: [] }, yn(t2 = this.h, 0, 1, e2 = new xs());
  }
  get baseOptions() {
    return pn(this.h, xs, 1);
  }
  set baseOptions(t2) {
    yn(this.h, 0, 1, t2);
  }
  o(t2) {
    var e2 = this.h, n2 = pn(this.h, Ts, 2);
    return n2 = n2 ? n2.clone() : new Ts(), void 0 !== t2.l2Normalize ? Sn(n2, 1, t2.l2Normalize) : "l2Normalize" in t2 && $e(n2, 1), void 0 !== t2.quantize ? Sn(n2, 2, t2.quantize) : "quantize" in t2 && $e(n2, 2), yn(e2, 0, 2, n2), this.l(t2);
  }
  Da(t2, e2) {
    return $a(this, t2, e2), this.embeddings;
  }
  Ea(t2, e2, n2) {
    return qa(this, t2, n2, e2), this.embeddings;
  }
  m() {
    var t2 = new $i();
    Ki(t2, "image_in"), Ki(t2, "norm_rect"), Yi(t2, "embeddings_out");
    const e2 = new Ci();
    er(e2, go, this.h);
    const n2 = new Vi();
    Bi(n2, "mediapipe.tasks.vision.image_embedder.ImageEmbedderGraph"), Gi(n2, "IMAGE:image_in"), Gi(n2, "NORM_RECT:norm_rect"), ji(n2, "EMBEDDINGS:embeddings_out"), n2.o(e2), zi(t2, n2), this.g.attachProtoListener("embeddings_out", (t3, e3) => {
      t3 = vs(t3), this.embeddings = function(t4) {
        return { embeddings: mn(t4, ys, 1).map((t5) => {
          var _a2, _b, _c, _d, _e2;
          const e4 = { headIndex: (_a2 = Tn(An(t5, 3), 0)) != null ? _a2 : -1, headName: (_b = kn(t5, 4)) != null ? _b : "" };
          if (void 0 !== dn(t5, gs, hn(t5, 1))) t5 = en(t5 = pn(t5, gs, hn(t5, 1)), 1, Ht, tn()), e4.floatEmbedding = t5.slice();
          else {
            const n3 = new Uint8Array(0);
            e4.quantizedEmbedding = (_e2 = (_d = (_c = pn(t5, ms, hn(t5, 2))) == null ? void 0 : _c.ra()) == null ? void 0 : _d.ua()) != null ? _e2 : n3;
          }
          return e4;
        }), timestampMs: Tn(Qt(ze(t4, 2)), 0) };
      }(t3), $o(this, e3);
    }), this.g.attachEmptyPacketListener("embeddings_out", (t3) => {
      $o(this, t3);
    }), t2 = t2.g(), this.setGraph(new Uint8Array(t2), true);
  }
};
Sh.cosineSimilarity = function(t2, e2) {
  if (t2.floatEmbedding && e2.floatEmbedding) t2 = Io(t2.floatEmbedding, e2.floatEmbedding);
  else {
    if (!t2.quantizedEmbedding || !e2.quantizedEmbedding) throw Error("Cannot compute cosine similarity between quantized and float embeddings.");
    t2 = Io(Mo(t2.quantizedEmbedding), Mo(e2.quantizedEmbedding));
  }
  return t2;
}, Sh.prototype.embedForVideo = Sh.prototype.Ea, Sh.prototype.embed = Sh.prototype.Da, Sh.prototype.setOptions = Sh.prototype.o, Sh.createFromModelPath = function(t2, e2) {
  return Ka(Sh, t2, { baseOptions: { modelAssetPath: e2 } });
}, Sh.createFromModelBuffer = function(t2, e2) {
  return Ka(Sh, t2, { baseOptions: { modelAssetBuffer: e2 } });
}, Sh.createFromOptions = function(t2, e2) {
  return Ka(Sh, t2, e2);
};
var xh = class {
  constructor(t2, e2, n2) {
    this.confidenceMasks = t2, this.categoryMask = e2, this.qualityScores = n2;
  }
  close() {
    var _a2, _b;
    (_a2 = this.confidenceMasks) == null ? void 0 : _a2.forEach((t2) => {
      t2.close();
    }), (_b = this.categoryMask) == null ? void 0 : _b.close();
  }
};
function Lh(t2) {
  t2.categoryMask = void 0, t2.confidenceMasks = void 0, t2.qualityScores = void 0;
}
function Rh(t2) {
  try {
    const e2 = new xh(t2.confidenceMasks, t2.categoryMask, t2.qualityScores);
    if (!t2.j) return e2;
    t2.j(e2);
  } finally {
    Zo(t2);
  }
}
xh.prototype.close = xh.prototype.close;
var Fh = class extends Za {
  constructor(t2, e2) {
    super(new za(t2, e2), "image_in", "norm_rect", false), this.s = [], this.outputCategoryMask = false, this.outputConfidenceMasks = true, this.h = new Eo(), this.v = new mo(), yn(this.h, 0, 3, this.v), yn(t2 = this.h, 0, 1, e2 = new xs());
  }
  get baseOptions() {
    return pn(this.h, xs, 1);
  }
  set baseOptions(t2) {
    yn(this.h, 0, 1, t2);
  }
  o(t2) {
    var _a2, _b;
    return void 0 !== t2.displayNamesLocale ? $e(this.h, 2, ne(t2.displayNamesLocale)) : "displayNamesLocale" in t2 && $e(this.h, 2), "outputCategoryMask" in t2 && (this.outputCategoryMask = (_a2 = t2.outputCategoryMask) != null ? _a2 : false), "outputConfidenceMasks" in t2 && (this.outputConfidenceMasks = (_b = t2.outputConfidenceMasks) != null ? _b : true), super.l(t2);
  }
  J() {
    !function(t2) {
      var _a2, _b, _c;
      const e2 = mn(t2.ga(), Vi, 1).filter((t3) => kn(t3, 1).includes("mediapipe.tasks.TensorsToSegmentationCalculator"));
      if (t2.s = [], e2.length > 1) throw Error("The graph has more than one mediapipe.tasks.TensorsToSegmentationCalculator.");
      1 === e2.length && ((_c = (_b = (_a2 = pn(e2[0], Ci, 7)) == null ? void 0 : _a2.l()) == null ? void 0 : _b.g()) != null ? _c : /* @__PURE__ */ new Map()).forEach((e3, n2) => {
        t2.s[Number(n2)] = kn(e3, 1);
      });
    }(this);
  }
  ha(t2, e2, n2) {
    const r2 = "function" != typeof e2 ? e2 : {};
    return this.j = "function" == typeof e2 ? e2 : n2, Lh(this), $a(this, t2, r2), Rh(this);
  }
  Pa(t2, e2, n2, r2) {
    const i2 = "function" != typeof n2 ? n2 : {};
    return this.j = "function" == typeof n2 ? n2 : r2, Lh(this), qa(this, t2, i2, e2), Rh(this);
  }
  Ha() {
    return this.s;
  }
  m() {
    var t2 = new $i();
    Ki(t2, "image_in"), Ki(t2, "norm_rect");
    const e2 = new Ci();
    er(e2, wo, this.h);
    const n2 = new Vi();
    Bi(n2, "mediapipe.tasks.vision.image_segmenter.ImageSegmenterGraph"), Gi(n2, "IMAGE:image_in"), Gi(n2, "NORM_RECT:norm_rect"), n2.o(e2), zi(t2, n2), qo(this, t2), this.outputConfidenceMasks && (Yi(t2, "confidence_masks"), ji(n2, "CONFIDENCE_MASKS:confidence_masks"), Jo(this, "confidence_masks"), this.g.fa("confidence_masks", (t3, e3) => {
      this.confidenceMasks = t3.map((t4) => Ja(this, t4, true, !this.j)), $o(this, e3);
    }), this.g.attachEmptyPacketListener("confidence_masks", (t3) => {
      this.confidenceMasks = [], $o(this, t3);
    })), this.outputCategoryMask && (Yi(t2, "category_mask"), ji(n2, "CATEGORY_MASK:category_mask"), Jo(this, "category_mask"), this.g.W("category_mask", (t3, e3) => {
      this.categoryMask = Ja(this, t3, false, !this.j), $o(this, e3);
    }), this.g.attachEmptyPacketListener("category_mask", (t3) => {
      this.categoryMask = void 0, $o(this, t3);
    })), Yi(t2, "quality_scores"), ji(n2, "QUALITY_SCORES:quality_scores"), this.g.attachFloatVectorListener("quality_scores", (t3, e3) => {
      this.qualityScores = t3, $o(this, e3);
    }), this.g.attachEmptyPacketListener("quality_scores", (t3) => {
      this.categoryMask = void 0, $o(this, t3);
    }), t2 = t2.g(), this.setGraph(new Uint8Array(t2), true);
  }
};
Fh.prototype.getLabels = Fh.prototype.Ha, Fh.prototype.segmentForVideo = Fh.prototype.Pa, Fh.prototype.segment = Fh.prototype.ha, Fh.prototype.setOptions = Fh.prototype.o, Fh.createFromModelPath = function(t2, e2) {
  return Ka(Fh, t2, { baseOptions: { modelAssetPath: e2 } });
}, Fh.createFromModelBuffer = function(t2, e2) {
  return Ka(Fh, t2, { baseOptions: { modelAssetBuffer: e2 } });
}, Fh.createFromOptions = function(t2, e2) {
  return Ka(Fh, t2, e2);
};
var Mh = class {
  constructor(t2, e2, n2) {
    this.confidenceMasks = t2, this.categoryMask = e2, this.qualityScores = n2;
  }
  close() {
    var _a2, _b;
    (_a2 = this.confidenceMasks) == null ? void 0 : _a2.forEach((t2) => {
      t2.close();
    }), (_b = this.categoryMask) == null ? void 0 : _b.close();
  }
};
Mh.prototype.close = Mh.prototype.close;
var Ih = class extends nr {
  constructor(t2) {
    super(t2);
  }
};
var Ph = [0, ai, -2];
var Oh = [0, ti, -3, ui, ti, -1];
var Ch = [0, Oh];
var Nh = [0, Oh, ai, -1];
var Uh = class extends nr {
  constructor(t2) {
    super(t2);
  }
};
var Dh = [0, ti, -1, ui];
var Bh = class extends nr {
  constructor() {
    super();
  }
};
var Gh = class extends nr {
  constructor(t2) {
    super(t2);
  }
};
var jh = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 14, 15];
var Vh = class extends nr {
  constructor() {
    super();
  }
};
Vh.prototype.g = bi([0, Qr, [0, jh, yi, Oh, yi, [0, Oh, Ph], yi, Ch, yi, [0, Ch, Ph], yi, Dh, yi, [0, ti, -3, ui, Ei], yi, [0, ti, -3, ui], yi, [0, pi, ti, -2, ui, ai, ui, -1, 2, ti, Ph], yi, Nh, yi, [0, Nh, Ph], ti, Ph, pi, yi, [0, ti, -3, ui, Ph, -1], yi, [0, Qr, Dh]], pi, [0, pi, ai, -1, ui]]);
var Xh = class extends Za {
  constructor(t2, e2) {
    super(new za(t2, e2), "image_in", "norm_rect_in", false), this.outputCategoryMask = false, this.outputConfidenceMasks = true, this.h = new Eo(), this.s = new mo(), yn(this.h, 0, 3, this.s), yn(t2 = this.h, 0, 1, e2 = new xs());
  }
  get baseOptions() {
    return pn(this.h, xs, 1);
  }
  set baseOptions(t2) {
    yn(this.h, 0, 1, t2);
  }
  o(t2) {
    var _a2, _b;
    return "outputCategoryMask" in t2 && (this.outputCategoryMask = (_a2 = t2.outputCategoryMask) != null ? _a2 : false), "outputConfidenceMasks" in t2 && (this.outputConfidenceMasks = (_b = t2.outputConfidenceMasks) != null ? _b : true), super.l(t2);
  }
  ha(t2, e2, n2, r2) {
    const i2 = "function" != typeof n2 ? n2 : {};
    this.j = "function" == typeof n2 ? n2 : r2, this.qualityScores = this.categoryMask = this.confidenceMasks = void 0, n2 = this.B + 1, r2 = new Vh();
    const s2 = new Gh();
    var o2 = new Ih();
    if (xn(o2, 1, 255), yn(s2, 0, 12, o2), e2.keypoint && e2.scribble) throw Error("Cannot provide both keypoint and scribble.");
    if (e2.keypoint) {
      var a2 = new Uh();
      Sn(a2, 3, true), Ln(a2, 1, e2.keypoint.x), Ln(a2, 2, e2.keypoint.y), _n(s2, 5, jh, a2);
    } else {
      if (!e2.scribble) throw Error("Must provide either a keypoint or a scribble.");
      for (a2 of (o2 = new Bh(), e2.scribble)) Sn(e2 = new Uh(), 3, true), Ln(e2, 1, a2.x), Ln(e2, 2, a2.y), wn(o2, 1, Uh, e2);
      _n(s2, 15, jh, o2);
    }
    wn(r2, 1, Gh, s2), this.g.addProtoToStream(r2.g(), "drishti.RenderData", "roi_in", n2), $a(this, t2, i2);
    t: {
      try {
        const t3 = new Mh(this.confidenceMasks, this.categoryMask, this.qualityScores);
        if (!this.j) {
          var h2 = t3;
          break t;
        }
        this.j(t3);
      } finally {
        Zo(this);
      }
      h2 = void 0;
    }
    return h2;
  }
  m() {
    var t2 = new $i();
    Ki(t2, "image_in"), Ki(t2, "roi_in"), Ki(t2, "norm_rect_in");
    const e2 = new Ci();
    er(e2, wo, this.h);
    const n2 = new Vi();
    Bi(n2, "mediapipe.tasks.vision.interactive_segmenter.InteractiveSegmenterGraph"), Gi(n2, "IMAGE:image_in"), Gi(n2, "ROI:roi_in"), Gi(n2, "NORM_RECT:norm_rect_in"), n2.o(e2), zi(t2, n2), qo(this, t2), this.outputConfidenceMasks && (Yi(t2, "confidence_masks"), ji(n2, "CONFIDENCE_MASKS:confidence_masks"), Jo(this, "confidence_masks"), this.g.fa("confidence_masks", (t3, e3) => {
      this.confidenceMasks = t3.map((t4) => Ja(this, t4, true, !this.j)), $o(this, e3);
    }), this.g.attachEmptyPacketListener("confidence_masks", (t3) => {
      this.confidenceMasks = [], $o(this, t3);
    })), this.outputCategoryMask && (Yi(t2, "category_mask"), ji(n2, "CATEGORY_MASK:category_mask"), Jo(this, "category_mask"), this.g.W("category_mask", (t3, e3) => {
      this.categoryMask = Ja(this, t3, false, !this.j), $o(this, e3);
    }), this.g.attachEmptyPacketListener("category_mask", (t3) => {
      this.categoryMask = void 0, $o(this, t3);
    })), Yi(t2, "quality_scores"), ji(n2, "QUALITY_SCORES:quality_scores"), this.g.attachFloatVectorListener("quality_scores", (t3, e3) => {
      this.qualityScores = t3, $o(this, e3);
    }), this.g.attachEmptyPacketListener("quality_scores", (t3) => {
      this.categoryMask = void 0, $o(this, t3);
    }), t2 = t2.g(), this.setGraph(new Uint8Array(t2), true);
  }
};
Xh.prototype.segment = Xh.prototype.ha, Xh.prototype.setOptions = Xh.prototype.o, Xh.createFromModelPath = function(t2, e2) {
  return Ka(Xh, t2, { baseOptions: { modelAssetPath: e2 } });
}, Xh.createFromModelBuffer = function(t2, e2) {
  return Ka(Xh, t2, { baseOptions: { modelAssetBuffer: e2 } });
}, Xh.createFromOptions = function(t2, e2) {
  return Ka(Xh, t2, e2);
};
var Hh = class extends Za {
  constructor(t2, e2) {
    super(new za(t2, e2), "input_frame_gpu", "norm_rect", false), this.j = { detections: [] }, yn(t2 = this.h = new To(), 0, 1, e2 = new xs());
  }
  get baseOptions() {
    return pn(this.h, xs, 1);
  }
  set baseOptions(t2) {
    yn(this.h, 0, 1, t2);
  }
  o(t2) {
    return void 0 !== t2.displayNamesLocale ? $e(this.h, 2, ne(t2.displayNamesLocale)) : "displayNamesLocale" in t2 && $e(this.h, 2), void 0 !== t2.maxResults ? xn(this.h, 3, t2.maxResults) : "maxResults" in t2 && $e(this.h, 3), void 0 !== t2.scoreThreshold ? Ln(this.h, 4, t2.scoreThreshold) : "scoreThreshold" in t2 && $e(this.h, 4), void 0 !== t2.categoryAllowlist ? Rn(this.h, 5, t2.categoryAllowlist) : "categoryAllowlist" in t2 && $e(this.h, 5), void 0 !== t2.categoryDenylist ? Rn(this.h, 6, t2.categoryDenylist) : "categoryDenylist" in t2 && $e(this.h, 6), this.l(t2);
  }
  D(t2, e2) {
    return this.j = { detections: [] }, $a(this, t2, e2), this.j;
  }
  F(t2, e2, n2) {
    return this.j = { detections: [] }, qa(this, t2, n2, e2), this.j;
  }
  m() {
    var t2 = new $i();
    Ki(t2, "input_frame_gpu"), Ki(t2, "norm_rect"), Yi(t2, "detections");
    const e2 = new Ci();
    er(e2, Ao, this.h);
    const n2 = new Vi();
    Bi(n2, "mediapipe.tasks.vision.ObjectDetectorGraph"), Gi(n2, "IMAGE:input_frame_gpu"), Gi(n2, "NORM_RECT:norm_rect"), ji(n2, "DETECTIONS:detections"), n2.o(e2), zi(t2, n2), this.g.attachProtoVectorListener("detections", (t3, e3) => {
      for (const e4 of t3) t3 = ss(e4), this.j.detections.push(Lo(t3));
      $o(this, e3);
    }), this.g.attachEmptyPacketListener("detections", (t3) => {
      $o(this, t3);
    }), t2 = t2.g(), this.setGraph(new Uint8Array(t2), true);
  }
};
Hh.prototype.detectForVideo = Hh.prototype.F, Hh.prototype.detect = Hh.prototype.D, Hh.prototype.setOptions = Hh.prototype.o, Hh.createFromModelPath = function(t2, e2) {
  return __async(this, null, function* () {
    return Ka(Hh, t2, { baseOptions: { modelAssetPath: e2 } });
  });
}, Hh.createFromModelBuffer = function(t2, e2) {
  return Ka(Hh, t2, { baseOptions: { modelAssetBuffer: e2 } });
}, Hh.createFromOptions = function(t2, e2) {
  return Ka(Hh, t2, e2);
};
var Wh = class {
  constructor(t2, e2, n2) {
    this.landmarks = t2, this.worldLandmarks = e2, this.segmentationMasks = n2;
  }
  close() {
    var _a2;
    (_a2 = this.segmentationMasks) == null ? void 0 : _a2.forEach((t2) => {
      t2.close();
    });
  }
};
function zh(t2) {
  t2.landmarks = [], t2.worldLandmarks = [], t2.segmentationMasks = void 0;
}
function Kh(t2) {
  try {
    const e2 = new Wh(t2.landmarks, t2.worldLandmarks, t2.segmentationMasks);
    if (!t2.s) return e2;
    t2.s(e2);
  } finally {
    Zo(t2);
  }
}
Wh.prototype.close = Wh.prototype.close;
var Yh = class extends Za {
  constructor(t2, e2) {
    super(new za(t2, e2), "image_in", "norm_rect", false), this.landmarks = [], this.worldLandmarks = [], this.outputSegmentationMasks = false, yn(t2 = this.h = new bo(), 0, 1, e2 = new xs()), this.v = new ao(), yn(this.h, 0, 3, this.v), this.j = new oo(), yn(this.h, 0, 2, this.j), xn(this.j, 4, 1), Ln(this.j, 2, 0.5), Ln(this.v, 2, 0.5), Ln(this.h, 4, 0.5);
  }
  get baseOptions() {
    return pn(this.h, xs, 1);
  }
  set baseOptions(t2) {
    yn(this.h, 0, 1, t2);
  }
  o(t2) {
    var _a2, _b, _c, _d, _e2;
    return "numPoses" in t2 && xn(this.j, 4, (_a2 = t2.numPoses) != null ? _a2 : 1), "minPoseDetectionConfidence" in t2 && Ln(this.j, 2, (_b = t2.minPoseDetectionConfidence) != null ? _b : 0.5), "minTrackingConfidence" in t2 && Ln(this.h, 4, (_c = t2.minTrackingConfidence) != null ? _c : 0.5), "minPosePresenceConfidence" in t2 && Ln(this.v, 2, (_d = t2.minPosePresenceConfidence) != null ? _d : 0.5), "outputSegmentationMasks" in t2 && (this.outputSegmentationMasks = (_e2 = t2.outputSegmentationMasks) != null ? _e2 : false), this.l(t2);
  }
  D(t2, e2, n2) {
    const r2 = "function" != typeof e2 ? e2 : {};
    return this.s = "function" == typeof e2 ? e2 : n2, zh(this), $a(this, t2, r2), Kh(this);
  }
  F(t2, e2, n2, r2) {
    const i2 = "function" != typeof n2 ? n2 : {};
    return this.s = "function" == typeof n2 ? n2 : r2, zh(this), qa(this, t2, i2, e2), Kh(this);
  }
  m() {
    var t2 = new $i();
    Ki(t2, "image_in"), Ki(t2, "norm_rect"), Yi(t2, "normalized_landmarks"), Yi(t2, "world_landmarks"), Yi(t2, "segmentation_masks");
    const e2 = new Ci();
    er(e2, ko, this.h);
    const n2 = new Vi();
    Bi(n2, "mediapipe.tasks.vision.pose_landmarker.PoseLandmarkerGraph"), Gi(n2, "IMAGE:image_in"), Gi(n2, "NORM_RECT:norm_rect"), ji(n2, "NORM_LANDMARKS:normalized_landmarks"), ji(n2, "WORLD_LANDMARKS:world_landmarks"), n2.o(e2), zi(t2, n2), qo(this, t2), this.g.attachProtoVectorListener("normalized_landmarks", (t3, e3) => {
      this.landmarks = [];
      for (const e4 of t3) t3 = cs(e4), this.landmarks.push(Ro(t3));
      $o(this, e3);
    }), this.g.attachEmptyPacketListener("normalized_landmarks", (t3) => {
      this.landmarks = [], $o(this, t3);
    }), this.g.attachProtoVectorListener("world_landmarks", (t3, e3) => {
      this.worldLandmarks = [];
      for (const e4 of t3) t3 = as(e4), this.worldLandmarks.push(Fo(t3));
      $o(this, e3);
    }), this.g.attachEmptyPacketListener("world_landmarks", (t3) => {
      this.worldLandmarks = [], $o(this, t3);
    }), this.outputSegmentationMasks && (ji(n2, "SEGMENTATION_MASK:segmentation_masks"), Jo(this, "segmentation_masks"), this.g.fa("segmentation_masks", (t3, e3) => {
      this.segmentationMasks = t3.map((t4) => Ja(this, t4, true, !this.s)), $o(this, e3);
    }), this.g.attachEmptyPacketListener("segmentation_masks", (t3) => {
      this.segmentationMasks = [], $o(this, t3);
    })), t2 = t2.g(), this.setGraph(new Uint8Array(t2), true);
  }
};
Yh.prototype.detectForVideo = Yh.prototype.F, Yh.prototype.detect = Yh.prototype.D, Yh.prototype.setOptions = Yh.prototype.o, Yh.createFromModelPath = function(t2, e2) {
  return Ka(Yh, t2, { baseOptions: { modelAssetPath: e2 } });
}, Yh.createFromModelBuffer = function(t2, e2) {
  return Ka(Yh, t2, { baseOptions: { modelAssetBuffer: e2 } });
}, Yh.createFromOptions = function(t2, e2) {
  return Ka(Yh, t2, e2);
}, Yh.POSE_CONNECTIONS = Eh;
export {
  Ia as DrawingUtils,
  Qa as FaceDetector,
  lh as FaceLandmarker,
  fh as FaceStylizer,
  Uo as FilesetResolver,
  yh as GestureRecognizer,
  vh as HandLandmarker,
  bh as HolisticLandmarker,
  kh as ImageClassifier,
  Sh as ImageEmbedder,
  Fh as ImageSegmenter,
  xh as ImageSegmenterResult,
  Xh as InteractiveSegmenter,
  Mh as InteractiveSegmenterResult,
  ja as MPImage,
  wa as MPMask,
  Hh as ObjectDetector,
  Yh as PoseLandmarker,
  Za as VisionTaskRunner
};
