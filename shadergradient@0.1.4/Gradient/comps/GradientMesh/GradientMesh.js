// src/Gradient/comps/GradientMesh/GradientMesh.tsx
import * as React from "react";
import { useRef } from "react";

// ../../node_modules/three/build/three.module.js
var REVISION = "139";
var CullFaceNone = 0;
var CullFaceBack = 1;
var CullFaceFront = 2;
var PCFShadowMap = 1;
var PCFSoftShadowMap = 2;
var VSMShadowMap = 3;
var FrontSide = 0;
var BackSide = 1;
var DoubleSide = 2;
var FlatShading = 1;
var NoBlending = 0;
var NormalBlending = 1;
var AdditiveBlending = 2;
var SubtractiveBlending = 3;
var MultiplyBlending = 4;
var CustomBlending = 5;
var AddEquation = 100;
var SubtractEquation = 101;
var ReverseSubtractEquation = 102;
var MinEquation = 103;
var MaxEquation = 104;
var ZeroFactor = 200;
var OneFactor = 201;
var SrcColorFactor = 202;
var OneMinusSrcColorFactor = 203;
var SrcAlphaFactor = 204;
var OneMinusSrcAlphaFactor = 205;
var DstAlphaFactor = 206;
var OneMinusDstAlphaFactor = 207;
var DstColorFactor = 208;
var OneMinusDstColorFactor = 209;
var SrcAlphaSaturateFactor = 210;
var NeverDepth = 0;
var AlwaysDepth = 1;
var LessDepth = 2;
var LessEqualDepth = 3;
var EqualDepth = 4;
var GreaterEqualDepth = 5;
var GreaterDepth = 6;
var NotEqualDepth = 7;
var MultiplyOperation = 0;
var MixOperation = 1;
var AddOperation = 2;
var NoToneMapping = 0;
var LinearToneMapping = 1;
var ReinhardToneMapping = 2;
var CineonToneMapping = 3;
var ACESFilmicToneMapping = 4;
var CustomToneMapping = 5;
var UVMapping = 300;
var CubeReflectionMapping = 301;
var CubeRefractionMapping = 302;
var EquirectangularReflectionMapping = 303;
var EquirectangularRefractionMapping = 304;
var CubeUVReflectionMapping = 306;
var RepeatWrapping = 1e3;
var ClampToEdgeWrapping = 1001;
var MirroredRepeatWrapping = 1002;
var NearestFilter = 1003;
var NearestMipmapNearestFilter = 1004;
var NearestMipmapLinearFilter = 1005;
var LinearFilter = 1006;
var LinearMipmapNearestFilter = 1007;
var LinearMipmapLinearFilter = 1008;
var UnsignedByteType = 1009;
var ByteType = 1010;
var ShortType = 1011;
var UnsignedShortType = 1012;
var IntType = 1013;
var UnsignedIntType = 1014;
var FloatType = 1015;
var HalfFloatType = 1016;
var UnsignedShort4444Type = 1017;
var UnsignedShort5551Type = 1018;
var UnsignedInt248Type = 1020;
var AlphaFormat = 1021;
var RGBFormat = 1022;
var RGBAFormat = 1023;
var LuminanceFormat = 1024;
var LuminanceAlphaFormat = 1025;
var DepthFormat = 1026;
var DepthStencilFormat = 1027;
var RedFormat = 1028;
var RedIntegerFormat = 1029;
var RGFormat = 1030;
var RGIntegerFormat = 1031;
var RGBAIntegerFormat = 1033;
var RGB_S3TC_DXT1_Format = 33776;
var RGBA_S3TC_DXT1_Format = 33777;
var RGBA_S3TC_DXT3_Format = 33778;
var RGBA_S3TC_DXT5_Format = 33779;
var RGB_PVRTC_4BPPV1_Format = 35840;
var RGB_PVRTC_2BPPV1_Format = 35841;
var RGBA_PVRTC_4BPPV1_Format = 35842;
var RGBA_PVRTC_2BPPV1_Format = 35843;
var RGB_ETC1_Format = 36196;
var RGB_ETC2_Format = 37492;
var RGBA_ETC2_EAC_Format = 37496;
var RGBA_ASTC_4x4_Format = 37808;
var RGBA_ASTC_5x4_Format = 37809;
var RGBA_ASTC_5x5_Format = 37810;
var RGBA_ASTC_6x5_Format = 37811;
var RGBA_ASTC_6x6_Format = 37812;
var RGBA_ASTC_8x5_Format = 37813;
var RGBA_ASTC_8x6_Format = 37814;
var RGBA_ASTC_8x8_Format = 37815;
var RGBA_ASTC_10x5_Format = 37816;
var RGBA_ASTC_10x6_Format = 37817;
var RGBA_ASTC_10x8_Format = 37818;
var RGBA_ASTC_10x10_Format = 37819;
var RGBA_ASTC_12x10_Format = 37820;
var RGBA_ASTC_12x12_Format = 37821;
var RGBA_BPTC_Format = 36492;
var LoopOnce = 2200;
var LoopRepeat = 2201;
var LoopPingPong = 2202;
var InterpolateDiscrete = 2300;
var InterpolateLinear = 2301;
var InterpolateSmooth = 2302;
var ZeroCurvatureEnding = 2400;
var ZeroSlopeEnding = 2401;
var WrapAroundEnding = 2402;
var NormalAnimationBlendMode = 2500;
var AdditiveAnimationBlendMode = 2501;
var TrianglesDrawMode = 0;
var LinearEncoding = 3e3;
var sRGBEncoding = 3001;
var BasicDepthPacking = 3200;
var RGBADepthPacking = 3201;
var TangentSpaceNormalMap = 0;
var ObjectSpaceNormalMap = 1;
var SRGBColorSpace = "srgb";
var LinearSRGBColorSpace = "srgb-linear";
var KeepStencilOp = 7680;
var AlwaysStencilFunc = 519;
var StaticDrawUsage = 35044;
var DynamicDrawUsage = 35048;
var GLSL3 = "300 es";
var _SRGBAFormat = 1035;
var EventDispatcher = class {
  addEventListener(type, listener) {
    if (this._listeners === void 0)
      this._listeners = {};
    const listeners = this._listeners;
    if (listeners[type] === void 0) {
      listeners[type] = [];
    }
    if (listeners[type].indexOf(listener) === -1) {
      listeners[type].push(listener);
    }
  }
  hasEventListener(type, listener) {
    if (this._listeners === void 0)
      return false;
    const listeners = this._listeners;
    return listeners[type] !== void 0 && listeners[type].indexOf(listener) !== -1;
  }
  removeEventListener(type, listener) {
    if (this._listeners === void 0)
      return;
    const listeners = this._listeners;
    const listenerArray = listeners[type];
    if (listenerArray !== void 0) {
      const index = listenerArray.indexOf(listener);
      if (index !== -1) {
        listenerArray.splice(index, 1);
      }
    }
  }
  dispatchEvent(event) {
    if (this._listeners === void 0)
      return;
    const listeners = this._listeners;
    const listenerArray = listeners[event.type];
    if (listenerArray !== void 0) {
      event.target = this;
      const array = listenerArray.slice(0);
      for (let i = 0, l = array.length; i < l; i++) {
        array[i].call(this, event);
      }
      event.target = null;
    }
  }
};
var _lut = [];
for (let i = 0; i < 256; i++) {
  _lut[i] = (i < 16 ? "0" : "") + i.toString(16);
}
var DEG2RAD = Math.PI / 180;
var RAD2DEG = 180 / Math.PI;
function generateUUID() {
  const d0 = Math.random() * 4294967295 | 0;
  const d1 = Math.random() * 4294967295 | 0;
  const d2 = Math.random() * 4294967295 | 0;
  const d3 = Math.random() * 4294967295 | 0;
  const uuid = _lut[d0 & 255] + _lut[d0 >> 8 & 255] + _lut[d0 >> 16 & 255] + _lut[d0 >> 24 & 255] + "-" + _lut[d1 & 255] + _lut[d1 >> 8 & 255] + "-" + _lut[d1 >> 16 & 15 | 64] + _lut[d1 >> 24 & 255] + "-" + _lut[d2 & 63 | 128] + _lut[d2 >> 8 & 255] + "-" + _lut[d2 >> 16 & 255] + _lut[d2 >> 24 & 255] + _lut[d3 & 255] + _lut[d3 >> 8 & 255] + _lut[d3 >> 16 & 255] + _lut[d3 >> 24 & 255];
  return uuid.toLowerCase();
}
function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}
function euclideanModulo(n, m) {
  return (n % m + m) % m;
}
function lerp(x, y, t) {
  return (1 - t) * x + t * y;
}
function isPowerOfTwo(value) {
  return (value & value - 1) === 0 && value !== 0;
}
function floorPowerOfTwo(value) {
  return Math.pow(2, Math.floor(Math.log(value) / Math.LN2));
}
var Vector2 = class {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }
  get width() {
    return this.x;
  }
  set width(value) {
    this.x = value;
  }
  get height() {
    return this.y;
  }
  set height(value) {
    this.y = value;
  }
  set(x, y) {
    this.x = x;
    this.y = y;
    return this;
  }
  setScalar(scalar) {
    this.x = scalar;
    this.y = scalar;
    return this;
  }
  setX(x) {
    this.x = x;
    return this;
  }
  setY(y) {
    this.y = y;
    return this;
  }
  setComponent(index, value) {
    switch (index) {
      case 0:
        this.x = value;
        break;
      case 1:
        this.y = value;
        break;
      default:
        throw new Error("index is out of range: " + index);
    }
    return this;
  }
  getComponent(index) {
    switch (index) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("index is out of range: " + index);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y);
  }
  copy(v) {
    this.x = v.x;
    this.y = v.y;
    return this;
  }
  add(v, w) {
    if (w !== void 0) {
      console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead.");
      return this.addVectors(v, w);
    }
    this.x += v.x;
    this.y += v.y;
    return this;
  }
  addScalar(s) {
    this.x += s;
    this.y += s;
    return this;
  }
  addVectors(a, b) {
    this.x = a.x + b.x;
    this.y = a.y + b.y;
    return this;
  }
  addScaledVector(v, s) {
    this.x += v.x * s;
    this.y += v.y * s;
    return this;
  }
  sub(v, w) {
    if (w !== void 0) {
      console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead.");
      return this.subVectors(v, w);
    }
    this.x -= v.x;
    this.y -= v.y;
    return this;
  }
  subScalar(s) {
    this.x -= s;
    this.y -= s;
    return this;
  }
  subVectors(a, b) {
    this.x = a.x - b.x;
    this.y = a.y - b.y;
    return this;
  }
  multiply(v) {
    this.x *= v.x;
    this.y *= v.y;
    return this;
  }
  multiplyScalar(scalar) {
    this.x *= scalar;
    this.y *= scalar;
    return this;
  }
  divide(v) {
    this.x /= v.x;
    this.y /= v.y;
    return this;
  }
  divideScalar(scalar) {
    return this.multiplyScalar(1 / scalar);
  }
  applyMatrix3(m) {
    const x = this.x, y = this.y;
    const e = m.elements;
    this.x = e[0] * x + e[3] * y + e[6];
    this.y = e[1] * x + e[4] * y + e[7];
    return this;
  }
  min(v) {
    this.x = Math.min(this.x, v.x);
    this.y = Math.min(this.y, v.y);
    return this;
  }
  max(v) {
    this.x = Math.max(this.x, v.x);
    this.y = Math.max(this.y, v.y);
    return this;
  }
  clamp(min, max) {
    this.x = Math.max(min.x, Math.min(max.x, this.x));
    this.y = Math.max(min.y, Math.min(max.y, this.y));
    return this;
  }
  clampScalar(minVal, maxVal) {
    this.x = Math.max(minVal, Math.min(maxVal, this.x));
    this.y = Math.max(minVal, Math.min(maxVal, this.y));
    return this;
  }
  clampLength(min, max) {
    const length = this.length();
    return this.divideScalar(length || 1).multiplyScalar(Math.max(min, Math.min(max, length)));
  }
  floor() {
    this.x = Math.floor(this.x);
    this.y = Math.floor(this.y);
    return this;
  }
  ceil() {
    this.x = Math.ceil(this.x);
    this.y = Math.ceil(this.y);
    return this;
  }
  round() {
    this.x = Math.round(this.x);
    this.y = Math.round(this.y);
    return this;
  }
  roundToZero() {
    this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x);
    this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y);
    return this;
  }
  negate() {
    this.x = -this.x;
    this.y = -this.y;
    return this;
  }
  dot(v) {
    return this.x * v.x + this.y * v.y;
  }
  cross(v) {
    return this.x * v.y - this.y * v.x;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  angle() {
    const angle = Math.atan2(-this.y, -this.x) + Math.PI;
    return angle;
  }
  distanceTo(v) {
    return Math.sqrt(this.distanceToSquared(v));
  }
  distanceToSquared(v) {
    const dx = this.x - v.x, dy = this.y - v.y;
    return dx * dx + dy * dy;
  }
  manhattanDistanceTo(v) {
    return Math.abs(this.x - v.x) + Math.abs(this.y - v.y);
  }
  setLength(length) {
    return this.normalize().multiplyScalar(length);
  }
  lerp(v, alpha) {
    this.x += (v.x - this.x) * alpha;
    this.y += (v.y - this.y) * alpha;
    return this;
  }
  lerpVectors(v1, v2, alpha) {
    this.x = v1.x + (v2.x - v1.x) * alpha;
    this.y = v1.y + (v2.y - v1.y) * alpha;
    return this;
  }
  equals(v) {
    return v.x === this.x && v.y === this.y;
  }
  fromArray(array, offset = 0) {
    this.x = array[offset];
    this.y = array[offset + 1];
    return this;
  }
  toArray(array = [], offset = 0) {
    array[offset] = this.x;
    array[offset + 1] = this.y;
    return array;
  }
  fromBufferAttribute(attribute, index, offset) {
    if (offset !== void 0) {
      console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute().");
    }
    this.x = attribute.getX(index);
    this.y = attribute.getY(index);
    return this;
  }
  rotateAround(center, angle) {
    const c = Math.cos(angle), s = Math.sin(angle);
    const x = this.x - center.x;
    const y = this.y - center.y;
    this.x = x * c - y * s + center.x;
    this.y = x * s + y * c + center.y;
    return this;
  }
  random() {
    this.x = Math.random();
    this.y = Math.random();
    return this;
  }
  *[Symbol.iterator]() {
    yield this.x;
    yield this.y;
  }
};
Vector2.prototype.isVector2 = true;
var Matrix3 = class {
  constructor() {
    this.elements = [
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ];
    if (arguments.length > 0) {
      console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.");
    }
  }
  set(n11, n12, n13, n21, n22, n23, n31, n32, n33) {
    const te = this.elements;
    te[0] = n11;
    te[1] = n21;
    te[2] = n31;
    te[3] = n12;
    te[4] = n22;
    te[5] = n32;
    te[6] = n13;
    te[7] = n23;
    te[8] = n33;
    return this;
  }
  identity() {
    this.set(1, 0, 0, 0, 1, 0, 0, 0, 1);
    return this;
  }
  copy(m) {
    const te = this.elements;
    const me = m.elements;
    te[0] = me[0];
    te[1] = me[1];
    te[2] = me[2];
    te[3] = me[3];
    te[4] = me[4];
    te[5] = me[5];
    te[6] = me[6];
    te[7] = me[7];
    te[8] = me[8];
    return this;
  }
  extractBasis(xAxis, yAxis, zAxis) {
    xAxis.setFromMatrix3Column(this, 0);
    yAxis.setFromMatrix3Column(this, 1);
    zAxis.setFromMatrix3Column(this, 2);
    return this;
  }
  setFromMatrix4(m) {
    const me = m.elements;
    this.set(me[0], me[4], me[8], me[1], me[5], me[9], me[2], me[6], me[10]);
    return this;
  }
  multiply(m) {
    return this.multiplyMatrices(this, m);
  }
  premultiply(m) {
    return this.multiplyMatrices(m, this);
  }
  multiplyMatrices(a, b) {
    const ae = a.elements;
    const be = b.elements;
    const te = this.elements;
    const a11 = ae[0], a12 = ae[3], a13 = ae[6];
    const a21 = ae[1], a22 = ae[4], a23 = ae[7];
    const a31 = ae[2], a32 = ae[5], a33 = ae[8];
    const b11 = be[0], b12 = be[3], b13 = be[6];
    const b21 = be[1], b22 = be[4], b23 = be[7];
    const b31 = be[2], b32 = be[5], b33 = be[8];
    te[0] = a11 * b11 + a12 * b21 + a13 * b31;
    te[3] = a11 * b12 + a12 * b22 + a13 * b32;
    te[6] = a11 * b13 + a12 * b23 + a13 * b33;
    te[1] = a21 * b11 + a22 * b21 + a23 * b31;
    te[4] = a21 * b12 + a22 * b22 + a23 * b32;
    te[7] = a21 * b13 + a22 * b23 + a23 * b33;
    te[2] = a31 * b11 + a32 * b21 + a33 * b31;
    te[5] = a31 * b12 + a32 * b22 + a33 * b32;
    te[8] = a31 * b13 + a32 * b23 + a33 * b33;
    return this;
  }
  multiplyScalar(s) {
    const te = this.elements;
    te[0] *= s;
    te[3] *= s;
    te[6] *= s;
    te[1] *= s;
    te[4] *= s;
    te[7] *= s;
    te[2] *= s;
    te[5] *= s;
    te[8] *= s;
    return this;
  }
  determinant() {
    const te = this.elements;
    const a = te[0], b = te[1], c = te[2], d = te[3], e = te[4], f = te[5], g = te[6], h = te[7], i = te[8];
    return a * e * i - a * f * h - b * d * i + b * f * g + c * d * h - c * e * g;
  }
  invert() {
    const te = this.elements, n11 = te[0], n21 = te[1], n31 = te[2], n12 = te[3], n22 = te[4], n32 = te[5], n13 = te[6], n23 = te[7], n33 = te[8], t11 = n33 * n22 - n32 * n23, t12 = n32 * n13 - n33 * n12, t13 = n23 * n12 - n22 * n13, det = n11 * t11 + n21 * t12 + n31 * t13;
    if (det === 0)
      return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const detInv = 1 / det;
    te[0] = t11 * detInv;
    te[1] = (n31 * n23 - n33 * n21) * detInv;
    te[2] = (n32 * n21 - n31 * n22) * detInv;
    te[3] = t12 * detInv;
    te[4] = (n33 * n11 - n31 * n13) * detInv;
    te[5] = (n31 * n12 - n32 * n11) * detInv;
    te[6] = t13 * detInv;
    te[7] = (n21 * n13 - n23 * n11) * detInv;
    te[8] = (n22 * n11 - n21 * n12) * detInv;
    return this;
  }
  transpose() {
    let tmp2;
    const m = this.elements;
    tmp2 = m[1];
    m[1] = m[3];
    m[3] = tmp2;
    tmp2 = m[2];
    m[2] = m[6];
    m[6] = tmp2;
    tmp2 = m[5];
    m[5] = m[7];
    m[7] = tmp2;
    return this;
  }
  getNormalMatrix(matrix4) {
    return this.setFromMatrix4(matrix4).invert().transpose();
  }
  transposeIntoArray(r) {
    const m = this.elements;
    r[0] = m[0];
    r[1] = m[3];
    r[2] = m[6];
    r[3] = m[1];
    r[4] = m[4];
    r[5] = m[7];
    r[6] = m[2];
    r[7] = m[5];
    r[8] = m[8];
    return this;
  }
  setUvTransform(tx, ty, sx, sy, rotation, cx, cy) {
    const c = Math.cos(rotation);
    const s = Math.sin(rotation);
    this.set(sx * c, sx * s, -sx * (c * cx + s * cy) + cx + tx, -sy * s, sy * c, -sy * (-s * cx + c * cy) + cy + ty, 0, 0, 1);
    return this;
  }
  scale(sx, sy) {
    const te = this.elements;
    te[0] *= sx;
    te[3] *= sx;
    te[6] *= sx;
    te[1] *= sy;
    te[4] *= sy;
    te[7] *= sy;
    return this;
  }
  rotate(theta) {
    const c = Math.cos(theta);
    const s = Math.sin(theta);
    const te = this.elements;
    const a11 = te[0], a12 = te[3], a13 = te[6];
    const a21 = te[1], a22 = te[4], a23 = te[7];
    te[0] = c * a11 + s * a21;
    te[3] = c * a12 + s * a22;
    te[6] = c * a13 + s * a23;
    te[1] = -s * a11 + c * a21;
    te[4] = -s * a12 + c * a22;
    te[7] = -s * a13 + c * a23;
    return this;
  }
  translate(tx, ty) {
    const te = this.elements;
    te[0] += tx * te[2];
    te[3] += tx * te[5];
    te[6] += tx * te[8];
    te[1] += ty * te[2];
    te[4] += ty * te[5];
    te[7] += ty * te[8];
    return this;
  }
  equals(matrix) {
    const te = this.elements;
    const me = matrix.elements;
    for (let i = 0; i < 9; i++) {
      if (te[i] !== me[i])
        return false;
    }
    return true;
  }
  fromArray(array, offset = 0) {
    for (let i = 0; i < 9; i++) {
      this.elements[i] = array[i + offset];
    }
    return this;
  }
  toArray(array = [], offset = 0) {
    const te = this.elements;
    array[offset] = te[0];
    array[offset + 1] = te[1];
    array[offset + 2] = te[2];
    array[offset + 3] = te[3];
    array[offset + 4] = te[4];
    array[offset + 5] = te[5];
    array[offset + 6] = te[6];
    array[offset + 7] = te[7];
    array[offset + 8] = te[8];
    return array;
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
};
Matrix3.prototype.isMatrix3 = true;
function arrayNeedsUint32(array) {
  for (let i = array.length - 1; i >= 0; --i) {
    if (array[i] > 65535)
      return true;
  }
  return false;
}
function createElementNS(name) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", name);
}
function SRGBToLinear(c) {
  return c < 0.04045 ? c * 0.0773993808 : Math.pow(c * 0.9478672986 + 0.0521327014, 2.4);
}
function LinearToSRGB(c) {
  return c < 31308e-7 ? c * 12.92 : 1.055 * Math.pow(c, 0.41666) - 0.055;
}
var FN = {
  [SRGBColorSpace]: { [LinearSRGBColorSpace]: SRGBToLinear },
  [LinearSRGBColorSpace]: { [SRGBColorSpace]: LinearToSRGB }
};
var ColorManagement = {
  legacyMode: true,
  get workingColorSpace() {
    return LinearSRGBColorSpace;
  },
  set workingColorSpace(colorSpace) {
    console.warn("THREE.ColorManagement: .workingColorSpace is readonly.");
  },
  convert: function(color, sourceColorSpace, targetColorSpace) {
    if (this.legacyMode || sourceColorSpace === targetColorSpace || !sourceColorSpace || !targetColorSpace) {
      return color;
    }
    if (FN[sourceColorSpace] && FN[sourceColorSpace][targetColorSpace] !== void 0) {
      const fn = FN[sourceColorSpace][targetColorSpace];
      color.r = fn(color.r);
      color.g = fn(color.g);
      color.b = fn(color.b);
      return color;
    }
    throw new Error("Unsupported color space conversion.");
  },
  fromWorkingColorSpace: function(color, targetColorSpace) {
    return this.convert(color, this.workingColorSpace, targetColorSpace);
  },
  toWorkingColorSpace: function(color, sourceColorSpace) {
    return this.convert(color, sourceColorSpace, this.workingColorSpace);
  }
};
var _colorKeywords = {
  "aliceblue": 15792383,
  "antiquewhite": 16444375,
  "aqua": 65535,
  "aquamarine": 8388564,
  "azure": 15794175,
  "beige": 16119260,
  "bisque": 16770244,
  "black": 0,
  "blanchedalmond": 16772045,
  "blue": 255,
  "blueviolet": 9055202,
  "brown": 10824234,
  "burlywood": 14596231,
  "cadetblue": 6266528,
  "chartreuse": 8388352,
  "chocolate": 13789470,
  "coral": 16744272,
  "cornflowerblue": 6591981,
  "cornsilk": 16775388,
  "crimson": 14423100,
  "cyan": 65535,
  "darkblue": 139,
  "darkcyan": 35723,
  "darkgoldenrod": 12092939,
  "darkgray": 11119017,
  "darkgreen": 25600,
  "darkgrey": 11119017,
  "darkkhaki": 12433259,
  "darkmagenta": 9109643,
  "darkolivegreen": 5597999,
  "darkorange": 16747520,
  "darkorchid": 10040012,
  "darkred": 9109504,
  "darksalmon": 15308410,
  "darkseagreen": 9419919,
  "darkslateblue": 4734347,
  "darkslategray": 3100495,
  "darkslategrey": 3100495,
  "darkturquoise": 52945,
  "darkviolet": 9699539,
  "deeppink": 16716947,
  "deepskyblue": 49151,
  "dimgray": 6908265,
  "dimgrey": 6908265,
  "dodgerblue": 2003199,
  "firebrick": 11674146,
  "floralwhite": 16775920,
  "forestgreen": 2263842,
  "fuchsia": 16711935,
  "gainsboro": 14474460,
  "ghostwhite": 16316671,
  "gold": 16766720,
  "goldenrod": 14329120,
  "gray": 8421504,
  "green": 32768,
  "greenyellow": 11403055,
  "grey": 8421504,
  "honeydew": 15794160,
  "hotpink": 16738740,
  "indianred": 13458524,
  "indigo": 4915330,
  "ivory": 16777200,
  "khaki": 15787660,
  "lavender": 15132410,
  "lavenderblush": 16773365,
  "lawngreen": 8190976,
  "lemonchiffon": 16775885,
  "lightblue": 11393254,
  "lightcoral": 15761536,
  "lightcyan": 14745599,
  "lightgoldenrodyellow": 16448210,
  "lightgray": 13882323,
  "lightgreen": 9498256,
  "lightgrey": 13882323,
  "lightpink": 16758465,
  "lightsalmon": 16752762,
  "lightseagreen": 2142890,
  "lightskyblue": 8900346,
  "lightslategray": 7833753,
  "lightslategrey": 7833753,
  "lightsteelblue": 11584734,
  "lightyellow": 16777184,
  "lime": 65280,
  "limegreen": 3329330,
  "linen": 16445670,
  "magenta": 16711935,
  "maroon": 8388608,
  "mediumaquamarine": 6737322,
  "mediumblue": 205,
  "mediumorchid": 12211667,
  "mediumpurple": 9662683,
  "mediumseagreen": 3978097,
  "mediumslateblue": 8087790,
  "mediumspringgreen": 64154,
  "mediumturquoise": 4772300,
  "mediumvioletred": 13047173,
  "midnightblue": 1644912,
  "mintcream": 16121850,
  "mistyrose": 16770273,
  "moccasin": 16770229,
  "navajowhite": 16768685,
  "navy": 128,
  "oldlace": 16643558,
  "olive": 8421376,
  "olivedrab": 7048739,
  "orange": 16753920,
  "orangered": 16729344,
  "orchid": 14315734,
  "palegoldenrod": 15657130,
  "palegreen": 10025880,
  "paleturquoise": 11529966,
  "palevioletred": 14381203,
  "papayawhip": 16773077,
  "peachpuff": 16767673,
  "peru": 13468991,
  "pink": 16761035,
  "plum": 14524637,
  "powderblue": 11591910,
  "purple": 8388736,
  "rebeccapurple": 6697881,
  "red": 16711680,
  "rosybrown": 12357519,
  "royalblue": 4286945,
  "saddlebrown": 9127187,
  "salmon": 16416882,
  "sandybrown": 16032864,
  "seagreen": 3050327,
  "seashell": 16774638,
  "sienna": 10506797,
  "silver": 12632256,
  "skyblue": 8900331,
  "slateblue": 6970061,
  "slategray": 7372944,
  "slategrey": 7372944,
  "snow": 16775930,
  "springgreen": 65407,
  "steelblue": 4620980,
  "tan": 13808780,
  "teal": 32896,
  "thistle": 14204888,
  "tomato": 16737095,
  "turquoise": 4251856,
  "violet": 15631086,
  "wheat": 16113331,
  "white": 16777215,
  "whitesmoke": 16119285,
  "yellow": 16776960,
  "yellowgreen": 10145074
};
var _rgb = { r: 0, g: 0, b: 0 };
var _hslA = { h: 0, s: 0, l: 0 };
var _hslB = { h: 0, s: 0, l: 0 };
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
    return p + (q - p) * 6 * (2 / 3 - t);
  return p;
}
function toComponents(source, target) {
  target.r = source.r;
  target.g = source.g;
  target.b = source.b;
  return target;
}
var Color = class {
  constructor(r, g, b) {
    if (g === void 0 && b === void 0) {
      return this.set(r);
    }
    return this.setRGB(r, g, b);
  }
  set(value) {
    if (value && value.isColor) {
      this.copy(value);
    } else if (typeof value === "number") {
      this.setHex(value);
    } else if (typeof value === "string") {
      this.setStyle(value);
    }
    return this;
  }
  setScalar(scalar) {
    this.r = scalar;
    this.g = scalar;
    this.b = scalar;
    return this;
  }
  setHex(hex, colorSpace = SRGBColorSpace) {
    hex = Math.floor(hex);
    this.r = (hex >> 16 & 255) / 255;
    this.g = (hex >> 8 & 255) / 255;
    this.b = (hex & 255) / 255;
    ColorManagement.toWorkingColorSpace(this, colorSpace);
    return this;
  }
  setRGB(r, g, b, colorSpace = LinearSRGBColorSpace) {
    this.r = r;
    this.g = g;
    this.b = b;
    ColorManagement.toWorkingColorSpace(this, colorSpace);
    return this;
  }
  setHSL(h, s, l, colorSpace = LinearSRGBColorSpace) {
    h = euclideanModulo(h, 1);
    s = clamp(s, 0, 1);
    l = clamp(l, 0, 1);
    if (s === 0) {
      this.r = this.g = this.b = l;
    } else {
      const p = l <= 0.5 ? l * (1 + s) : l + s - l * s;
      const q = 2 * l - p;
      this.r = hue2rgb(q, p, h + 1 / 3);
      this.g = hue2rgb(q, p, h);
      this.b = hue2rgb(q, p, h - 1 / 3);
    }
    ColorManagement.toWorkingColorSpace(this, colorSpace);
    return this;
  }
  setStyle(style, colorSpace = SRGBColorSpace) {
    function handleAlpha(string) {
      if (string === void 0)
        return;
      if (parseFloat(string) < 1) {
        console.warn("THREE.Color: Alpha component of " + style + " will be ignored.");
      }
    }
    let m;
    if (m = /^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(style)) {
      let color;
      const name = m[1];
      const components = m[2];
      switch (name) {
        case "rgb":
        case "rgba":
          if (color = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(components)) {
            this.r = Math.min(255, parseInt(color[1], 10)) / 255;
            this.g = Math.min(255, parseInt(color[2], 10)) / 255;
            this.b = Math.min(255, parseInt(color[3], 10)) / 255;
            ColorManagement.toWorkingColorSpace(this, colorSpace);
            handleAlpha(color[4]);
            return this;
          }
          if (color = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(components)) {
            this.r = Math.min(100, parseInt(color[1], 10)) / 100;
            this.g = Math.min(100, parseInt(color[2], 10)) / 100;
            this.b = Math.min(100, parseInt(color[3], 10)) / 100;
            ColorManagement.toWorkingColorSpace(this, colorSpace);
            handleAlpha(color[4]);
            return this;
          }
          break;
        case "hsl":
        case "hsla":
          if (color = /^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(components)) {
            const h = parseFloat(color[1]) / 360;
            const s = parseInt(color[2], 10) / 100;
            const l = parseInt(color[3], 10) / 100;
            handleAlpha(color[4]);
            return this.setHSL(h, s, l, colorSpace);
          }
          break;
      }
    } else if (m = /^\#([A-Fa-f\d]+)$/.exec(style)) {
      const hex = m[1];
      const size = hex.length;
      if (size === 3) {
        this.r = parseInt(hex.charAt(0) + hex.charAt(0), 16) / 255;
        this.g = parseInt(hex.charAt(1) + hex.charAt(1), 16) / 255;
        this.b = parseInt(hex.charAt(2) + hex.charAt(2), 16) / 255;
        ColorManagement.toWorkingColorSpace(this, colorSpace);
        return this;
      } else if (size === 6) {
        this.r = parseInt(hex.charAt(0) + hex.charAt(1), 16) / 255;
        this.g = parseInt(hex.charAt(2) + hex.charAt(3), 16) / 255;
        this.b = parseInt(hex.charAt(4) + hex.charAt(5), 16) / 255;
        ColorManagement.toWorkingColorSpace(this, colorSpace);
        return this;
      }
    }
    if (style && style.length > 0) {
      return this.setColorName(style, colorSpace);
    }
    return this;
  }
  setColorName(style, colorSpace = SRGBColorSpace) {
    const hex = _colorKeywords[style.toLowerCase()];
    if (hex !== void 0) {
      this.setHex(hex, colorSpace);
    } else {
      console.warn("THREE.Color: Unknown color " + style);
    }
    return this;
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(color) {
    this.r = color.r;
    this.g = color.g;
    this.b = color.b;
    return this;
  }
  copySRGBToLinear(color) {
    this.r = SRGBToLinear(color.r);
    this.g = SRGBToLinear(color.g);
    this.b = SRGBToLinear(color.b);
    return this;
  }
  copyLinearToSRGB(color) {
    this.r = LinearToSRGB(color.r);
    this.g = LinearToSRGB(color.g);
    this.b = LinearToSRGB(color.b);
    return this;
  }
  convertSRGBToLinear() {
    this.copySRGBToLinear(this);
    return this;
  }
  convertLinearToSRGB() {
    this.copyLinearToSRGB(this);
    return this;
  }
  getHex(colorSpace = SRGBColorSpace) {
    ColorManagement.fromWorkingColorSpace(toComponents(this, _rgb), colorSpace);
    return clamp(_rgb.r * 255, 0, 255) << 16 ^ clamp(_rgb.g * 255, 0, 255) << 8 ^ clamp(_rgb.b * 255, 0, 255) << 0;
  }
  getHexString(colorSpace = SRGBColorSpace) {
    return ("000000" + this.getHex(colorSpace).toString(16)).slice(-6);
  }
  getHSL(target, colorSpace = LinearSRGBColorSpace) {
    ColorManagement.fromWorkingColorSpace(toComponents(this, _rgb), colorSpace);
    const r = _rgb.r, g = _rgb.g, b = _rgb.b;
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let hue, saturation;
    const lightness = (min + max) / 2;
    if (min === max) {
      hue = 0;
      saturation = 0;
    } else {
      const delta = max - min;
      saturation = lightness <= 0.5 ? delta / (max + min) : delta / (2 - max - min);
      switch (max) {
        case r:
          hue = (g - b) / delta + (g < b ? 6 : 0);
          break;
        case g:
          hue = (b - r) / delta + 2;
          break;
        case b:
          hue = (r - g) / delta + 4;
          break;
      }
      hue /= 6;
    }
    target.h = hue;
    target.s = saturation;
    target.l = lightness;
    return target;
  }
  getRGB(target, colorSpace = LinearSRGBColorSpace) {
    ColorManagement.fromWorkingColorSpace(toComponents(this, _rgb), colorSpace);
    target.r = _rgb.r;
    target.g = _rgb.g;
    target.b = _rgb.b;
    return target;
  }
  getStyle(colorSpace = SRGBColorSpace) {
    ColorManagement.fromWorkingColorSpace(toComponents(this, _rgb), colorSpace);
    if (colorSpace !== SRGBColorSpace) {
      return `color(${colorSpace} ${_rgb.r} ${_rgb.g} ${_rgb.b})`;
    }
    return `rgb(${_rgb.r * 255 | 0},${_rgb.g * 255 | 0},${_rgb.b * 255 | 0})`;
  }
  offsetHSL(h, s, l) {
    this.getHSL(_hslA);
    _hslA.h += h;
    _hslA.s += s;
    _hslA.l += l;
    this.setHSL(_hslA.h, _hslA.s, _hslA.l);
    return this;
  }
  add(color) {
    this.r += color.r;
    this.g += color.g;
    this.b += color.b;
    return this;
  }
  addColors(color1, color2) {
    this.r = color1.r + color2.r;
    this.g = color1.g + color2.g;
    this.b = color1.b + color2.b;
    return this;
  }
  addScalar(s) {
    this.r += s;
    this.g += s;
    this.b += s;
    return this;
  }
  sub(color) {
    this.r = Math.max(0, this.r - color.r);
    this.g = Math.max(0, this.g - color.g);
    this.b = Math.max(0, this.b - color.b);
    return this;
  }
  multiply(color) {
    this.r *= color.r;
    this.g *= color.g;
    this.b *= color.b;
    return this;
  }
  multiplyScalar(s) {
    this.r *= s;
    this.g *= s;
    this.b *= s;
    return this;
  }
  lerp(color, alpha) {
    this.r += (color.r - this.r) * alpha;
    this.g += (color.g - this.g) * alpha;
    this.b += (color.b - this.b) * alpha;
    return this;
  }
  lerpColors(color1, color2, alpha) {
    this.r = color1.r + (color2.r - color1.r) * alpha;
    this.g = color1.g + (color2.g - color1.g) * alpha;
    this.b = color1.b + (color2.b - color1.b) * alpha;
    return this;
  }
  lerpHSL(color, alpha) {
    this.getHSL(_hslA);
    color.getHSL(_hslB);
    const h = lerp(_hslA.h, _hslB.h, alpha);
    const s = lerp(_hslA.s, _hslB.s, alpha);
    const l = lerp(_hslA.l, _hslB.l, alpha);
    this.setHSL(h, s, l);
    return this;
  }
  equals(c) {
    return c.r === this.r && c.g === this.g && c.b === this.b;
  }
  fromArray(array, offset = 0) {
    this.r = array[offset];
    this.g = array[offset + 1];
    this.b = array[offset + 2];
    return this;
  }
  toArray(array = [], offset = 0) {
    array[offset] = this.r;
    array[offset + 1] = this.g;
    array[offset + 2] = this.b;
    return array;
  }
  fromBufferAttribute(attribute, index) {
    this.r = attribute.getX(index);
    this.g = attribute.getY(index);
    this.b = attribute.getZ(index);
    if (attribute.normalized === true) {
      this.r /= 255;
      this.g /= 255;
      this.b /= 255;
    }
    return this;
  }
  toJSON() {
    return this.getHex();
  }
};
Color.NAMES = _colorKeywords;
Color.prototype.isColor = true;
Color.prototype.r = 1;
Color.prototype.g = 1;
Color.prototype.b = 1;
var _canvas;
var ImageUtils = class {
  static getDataURL(image) {
    if (/^data:/i.test(image.src)) {
      return image.src;
    }
    if (typeof HTMLCanvasElement == "undefined") {
      return image.src;
    }
    let canvas;
    if (image instanceof HTMLCanvasElement) {
      canvas = image;
    } else {
      if (_canvas === void 0)
        _canvas = createElementNS("canvas");
      _canvas.width = image.width;
      _canvas.height = image.height;
      const context = _canvas.getContext("2d");
      if (image instanceof ImageData) {
        context.putImageData(image, 0, 0);
      } else {
        context.drawImage(image, 0, 0, image.width, image.height);
      }
      canvas = _canvas;
    }
    if (canvas.width > 2048 || canvas.height > 2048) {
      console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", image);
      return canvas.toDataURL("image/jpeg", 0.6);
    } else {
      return canvas.toDataURL("image/png");
    }
  }
  static sRGBToLinear(image) {
    if (typeof HTMLImageElement !== "undefined" && image instanceof HTMLImageElement || typeof HTMLCanvasElement !== "undefined" && image instanceof HTMLCanvasElement || typeof ImageBitmap !== "undefined" && image instanceof ImageBitmap) {
      const canvas = createElementNS("canvas");
      canvas.width = image.width;
      canvas.height = image.height;
      const context = canvas.getContext("2d");
      context.drawImage(image, 0, 0, image.width, image.height);
      const imageData = context.getImageData(0, 0, image.width, image.height);
      const data = imageData.data;
      for (let i = 0; i < data.length; i++) {
        data[i] = SRGBToLinear(data[i] / 255) * 255;
      }
      context.putImageData(imageData, 0, 0);
      return canvas;
    } else if (image.data) {
      const data = image.data.slice(0);
      for (let i = 0; i < data.length; i++) {
        if (data instanceof Uint8Array || data instanceof Uint8ClampedArray) {
          data[i] = Math.floor(SRGBToLinear(data[i] / 255) * 255);
        } else {
          data[i] = SRGBToLinear(data[i]);
        }
      }
      return {
        data,
        width: image.width,
        height: image.height
      };
    } else {
      console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.");
      return image;
    }
  }
};
var Source = class {
  constructor(data = null) {
    this.uuid = generateUUID();
    this.data = data;
    this.version = 0;
  }
  set needsUpdate(value) {
    if (value === true)
      this.version++;
  }
  toJSON(meta) {
    const isRootObject = meta === void 0 || typeof meta === "string";
    if (!isRootObject && meta.images[this.uuid] !== void 0) {
      return meta.images[this.uuid];
    }
    const output = {
      uuid: this.uuid,
      url: ""
    };
    const data = this.data;
    if (data !== null) {
      let url;
      if (Array.isArray(data)) {
        url = [];
        for (let i = 0, l = data.length; i < l; i++) {
          if (data[i].isDataTexture) {
            url.push(serializeImage(data[i].image));
          } else {
            url.push(serializeImage(data[i]));
          }
        }
      } else {
        url = serializeImage(data);
      }
      output.url = url;
    }
    if (!isRootObject) {
      meta.images[this.uuid] = output;
    }
    return output;
  }
};
function serializeImage(image) {
  if (typeof HTMLImageElement !== "undefined" && image instanceof HTMLImageElement || typeof HTMLCanvasElement !== "undefined" && image instanceof HTMLCanvasElement || typeof ImageBitmap !== "undefined" && image instanceof ImageBitmap) {
    return ImageUtils.getDataURL(image);
  } else {
    if (image.data) {
      return {
        data: Array.prototype.slice.call(image.data),
        width: image.width,
        height: image.height,
        type: image.data.constructor.name
      };
    } else {
      console.warn("THREE.Texture: Unable to serialize Texture.");
      return {};
    }
  }
}
Source.prototype.isSource = true;
var textureId = 0;
var Texture = class extends EventDispatcher {
  constructor(image = Texture.DEFAULT_IMAGE, mapping = Texture.DEFAULT_MAPPING, wrapS = ClampToEdgeWrapping, wrapT = ClampToEdgeWrapping, magFilter = LinearFilter, minFilter = LinearMipmapLinearFilter, format = RGBAFormat, type = UnsignedByteType, anisotropy = 1, encoding = LinearEncoding) {
    super();
    Object.defineProperty(this, "id", { value: textureId++ });
    this.uuid = generateUUID();
    this.name = "";
    this.source = new Source(image);
    this.mipmaps = [];
    this.mapping = mapping;
    this.wrapS = wrapS;
    this.wrapT = wrapT;
    this.magFilter = magFilter;
    this.minFilter = minFilter;
    this.anisotropy = anisotropy;
    this.format = format;
    this.internalFormat = null;
    this.type = type;
    this.offset = new Vector2(0, 0);
    this.repeat = new Vector2(1, 1);
    this.center = new Vector2(0, 0);
    this.rotation = 0;
    this.matrixAutoUpdate = true;
    this.matrix = new Matrix3();
    this.generateMipmaps = true;
    this.premultiplyAlpha = false;
    this.flipY = true;
    this.unpackAlignment = 4;
    this.encoding = encoding;
    this.userData = {};
    this.version = 0;
    this.onUpdate = null;
    this.isRenderTargetTexture = false;
    this.needsPMREMUpdate = false;
  }
  get image() {
    return this.source.data;
  }
  set image(value) {
    this.source.data = value;
  }
  updateMatrix() {
    this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(source) {
    this.name = source.name;
    this.source = source.source;
    this.mipmaps = source.mipmaps.slice(0);
    this.mapping = source.mapping;
    this.wrapS = source.wrapS;
    this.wrapT = source.wrapT;
    this.magFilter = source.magFilter;
    this.minFilter = source.minFilter;
    this.anisotropy = source.anisotropy;
    this.format = source.format;
    this.internalFormat = source.internalFormat;
    this.type = source.type;
    this.offset.copy(source.offset);
    this.repeat.copy(source.repeat);
    this.center.copy(source.center);
    this.rotation = source.rotation;
    this.matrixAutoUpdate = source.matrixAutoUpdate;
    this.matrix.copy(source.matrix);
    this.generateMipmaps = source.generateMipmaps;
    this.premultiplyAlpha = source.premultiplyAlpha;
    this.flipY = source.flipY;
    this.unpackAlignment = source.unpackAlignment;
    this.encoding = source.encoding;
    this.userData = JSON.parse(JSON.stringify(source.userData));
    this.needsUpdate = true;
    return this;
  }
  toJSON(meta) {
    const isRootObject = meta === void 0 || typeof meta === "string";
    if (!isRootObject && meta.textures[this.uuid] !== void 0) {
      return meta.textures[this.uuid];
    }
    const output = {
      metadata: {
        version: 4.5,
        type: "Texture",
        generator: "Texture.toJSON"
      },
      uuid: this.uuid,
      name: this.name,
      image: this.source.toJSON(meta).uuid,
      mapping: this.mapping,
      repeat: [this.repeat.x, this.repeat.y],
      offset: [this.offset.x, this.offset.y],
      center: [this.center.x, this.center.y],
      rotation: this.rotation,
      wrap: [this.wrapS, this.wrapT],
      format: this.format,
      type: this.type,
      encoding: this.encoding,
      minFilter: this.minFilter,
      magFilter: this.magFilter,
      anisotropy: this.anisotropy,
      flipY: this.flipY,
      premultiplyAlpha: this.premultiplyAlpha,
      unpackAlignment: this.unpackAlignment
    };
    if (JSON.stringify(this.userData) !== "{}")
      output.userData = this.userData;
    if (!isRootObject) {
      meta.textures[this.uuid] = output;
    }
    return output;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  transformUv(uv) {
    if (this.mapping !== UVMapping)
      return uv;
    uv.applyMatrix3(this.matrix);
    if (uv.x < 0 || uv.x > 1) {
      switch (this.wrapS) {
        case RepeatWrapping:
          uv.x = uv.x - Math.floor(uv.x);
          break;
        case ClampToEdgeWrapping:
          uv.x = uv.x < 0 ? 0 : 1;
          break;
        case MirroredRepeatWrapping:
          if (Math.abs(Math.floor(uv.x) % 2) === 1) {
            uv.x = Math.ceil(uv.x) - uv.x;
          } else {
            uv.x = uv.x - Math.floor(uv.x);
          }
          break;
      }
    }
    if (uv.y < 0 || uv.y > 1) {
      switch (this.wrapT) {
        case RepeatWrapping:
          uv.y = uv.y - Math.floor(uv.y);
          break;
        case ClampToEdgeWrapping:
          uv.y = uv.y < 0 ? 0 : 1;
          break;
        case MirroredRepeatWrapping:
          if (Math.abs(Math.floor(uv.y) % 2) === 1) {
            uv.y = Math.ceil(uv.y) - uv.y;
          } else {
            uv.y = uv.y - Math.floor(uv.y);
          }
          break;
      }
    }
    if (this.flipY) {
      uv.y = 1 - uv.y;
    }
    return uv;
  }
  set needsUpdate(value) {
    if (value === true) {
      this.version++;
      this.source.needsUpdate = true;
    }
  }
};
Texture.DEFAULT_IMAGE = null;
Texture.DEFAULT_MAPPING = UVMapping;
Texture.prototype.isTexture = true;
var Vector4 = class {
  constructor(x = 0, y = 0, z = 0, w = 1) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.w = w;
  }
  get width() {
    return this.z;
  }
  set width(value) {
    this.z = value;
  }
  get height() {
    return this.w;
  }
  set height(value) {
    this.w = value;
  }
  set(x, y, z, w) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.w = w;
    return this;
  }
  setScalar(scalar) {
    this.x = scalar;
    this.y = scalar;
    this.z = scalar;
    this.w = scalar;
    return this;
  }
  setX(x) {
    this.x = x;
    return this;
  }
  setY(y) {
    this.y = y;
    return this;
  }
  setZ(z) {
    this.z = z;
    return this;
  }
  setW(w) {
    this.w = w;
    return this;
  }
  setComponent(index, value) {
    switch (index) {
      case 0:
        this.x = value;
        break;
      case 1:
        this.y = value;
        break;
      case 2:
        this.z = value;
        break;
      case 3:
        this.w = value;
        break;
      default:
        throw new Error("index is out of range: " + index);
    }
    return this;
  }
  getComponent(index) {
    switch (index) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error("index is out of range: " + index);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  copy(v) {
    this.x = v.x;
    this.y = v.y;
    this.z = v.z;
    this.w = v.w !== void 0 ? v.w : 1;
    return this;
  }
  add(v, w) {
    if (w !== void 0) {
      console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead.");
      return this.addVectors(v, w);
    }
    this.x += v.x;
    this.y += v.y;
    this.z += v.z;
    this.w += v.w;
    return this;
  }
  addScalar(s) {
    this.x += s;
    this.y += s;
    this.z += s;
    this.w += s;
    return this;
  }
  addVectors(a, b) {
    this.x = a.x + b.x;
    this.y = a.y + b.y;
    this.z = a.z + b.z;
    this.w = a.w + b.w;
    return this;
  }
  addScaledVector(v, s) {
    this.x += v.x * s;
    this.y += v.y * s;
    this.z += v.z * s;
    this.w += v.w * s;
    return this;
  }
  sub(v, w) {
    if (w !== void 0) {
      console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead.");
      return this.subVectors(v, w);
    }
    this.x -= v.x;
    this.y -= v.y;
    this.z -= v.z;
    this.w -= v.w;
    return this;
  }
  subScalar(s) {
    this.x -= s;
    this.y -= s;
    this.z -= s;
    this.w -= s;
    return this;
  }
  subVectors(a, b) {
    this.x = a.x - b.x;
    this.y = a.y - b.y;
    this.z = a.z - b.z;
    this.w = a.w - b.w;
    return this;
  }
  multiply(v) {
    this.x *= v.x;
    this.y *= v.y;
    this.z *= v.z;
    this.w *= v.w;
    return this;
  }
  multiplyScalar(scalar) {
    this.x *= scalar;
    this.y *= scalar;
    this.z *= scalar;
    this.w *= scalar;
    return this;
  }
  applyMatrix4(m) {
    const x = this.x, y = this.y, z = this.z, w = this.w;
    const e = m.elements;
    this.x = e[0] * x + e[4] * y + e[8] * z + e[12] * w;
    this.y = e[1] * x + e[5] * y + e[9] * z + e[13] * w;
    this.z = e[2] * x + e[6] * y + e[10] * z + e[14] * w;
    this.w = e[3] * x + e[7] * y + e[11] * z + e[15] * w;
    return this;
  }
  divideScalar(scalar) {
    return this.multiplyScalar(1 / scalar);
  }
  setAxisAngleFromQuaternion(q) {
    this.w = 2 * Math.acos(q.w);
    const s = Math.sqrt(1 - q.w * q.w);
    if (s < 1e-4) {
      this.x = 1;
      this.y = 0;
      this.z = 0;
    } else {
      this.x = q.x / s;
      this.y = q.y / s;
      this.z = q.z / s;
    }
    return this;
  }
  setAxisAngleFromRotationMatrix(m) {
    let angle, x, y, z;
    const epsilon = 0.01, epsilon2 = 0.1, te = m.elements, m11 = te[0], m12 = te[4], m13 = te[8], m21 = te[1], m22 = te[5], m23 = te[9], m31 = te[2], m32 = te[6], m33 = te[10];
    if (Math.abs(m12 - m21) < epsilon && Math.abs(m13 - m31) < epsilon && Math.abs(m23 - m32) < epsilon) {
      if (Math.abs(m12 + m21) < epsilon2 && Math.abs(m13 + m31) < epsilon2 && Math.abs(m23 + m32) < epsilon2 && Math.abs(m11 + m22 + m33 - 3) < epsilon2) {
        this.set(1, 0, 0, 0);
        return this;
      }
      angle = Math.PI;
      const xx = (m11 + 1) / 2;
      const yy = (m22 + 1) / 2;
      const zz = (m33 + 1) / 2;
      const xy = (m12 + m21) / 4;
      const xz = (m13 + m31) / 4;
      const yz = (m23 + m32) / 4;
      if (xx > yy && xx > zz) {
        if (xx < epsilon) {
          x = 0;
          y = 0.707106781;
          z = 0.707106781;
        } else {
          x = Math.sqrt(xx);
          y = xy / x;
          z = xz / x;
        }
      } else if (yy > zz) {
        if (yy < epsilon) {
          x = 0.707106781;
          y = 0;
          z = 0.707106781;
        } else {
          y = Math.sqrt(yy);
          x = xy / y;
          z = yz / y;
        }
      } else {
        if (zz < epsilon) {
          x = 0.707106781;
          y = 0.707106781;
          z = 0;
        } else {
          z = Math.sqrt(zz);
          x = xz / z;
          y = yz / z;
        }
      }
      this.set(x, y, z, angle);
      return this;
    }
    let s = Math.sqrt((m32 - m23) * (m32 - m23) + (m13 - m31) * (m13 - m31) + (m21 - m12) * (m21 - m12));
    if (Math.abs(s) < 1e-3)
      s = 1;
    this.x = (m32 - m23) / s;
    this.y = (m13 - m31) / s;
    this.z = (m21 - m12) / s;
    this.w = Math.acos((m11 + m22 + m33 - 1) / 2);
    return this;
  }
  min(v) {
    this.x = Math.min(this.x, v.x);
    this.y = Math.min(this.y, v.y);
    this.z = Math.min(this.z, v.z);
    this.w = Math.min(this.w, v.w);
    return this;
  }
  max(v) {
    this.x = Math.max(this.x, v.x);
    this.y = Math.max(this.y, v.y);
    this.z = Math.max(this.z, v.z);
    this.w = Math.max(this.w, v.w);
    return this;
  }
  clamp(min, max) {
    this.x = Math.max(min.x, Math.min(max.x, this.x));
    this.y = Math.max(min.y, Math.min(max.y, this.y));
    this.z = Math.max(min.z, Math.min(max.z, this.z));
    this.w = Math.max(min.w, Math.min(max.w, this.w));
    return this;
  }
  clampScalar(minVal, maxVal) {
    this.x = Math.max(minVal, Math.min(maxVal, this.x));
    this.y = Math.max(minVal, Math.min(maxVal, this.y));
    this.z = Math.max(minVal, Math.min(maxVal, this.z));
    this.w = Math.max(minVal, Math.min(maxVal, this.w));
    return this;
  }
  clampLength(min, max) {
    const length = this.length();
    return this.divideScalar(length || 1).multiplyScalar(Math.max(min, Math.min(max, length)));
  }
  floor() {
    this.x = Math.floor(this.x);
    this.y = Math.floor(this.y);
    this.z = Math.floor(this.z);
    this.w = Math.floor(this.w);
    return this;
  }
  ceil() {
    this.x = Math.ceil(this.x);
    this.y = Math.ceil(this.y);
    this.z = Math.ceil(this.z);
    this.w = Math.ceil(this.w);
    return this;
  }
  round() {
    this.x = Math.round(this.x);
    this.y = Math.round(this.y);
    this.z = Math.round(this.z);
    this.w = Math.round(this.w);
    return this;
  }
  roundToZero() {
    this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x);
    this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y);
    this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z);
    this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w);
    return this;
  }
  negate() {
    this.x = -this.x;
    this.y = -this.y;
    this.z = -this.z;
    this.w = -this.w;
    return this;
  }
  dot(v) {
    return this.x * v.x + this.y * v.y + this.z * v.z + this.w * v.w;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(length) {
    return this.normalize().multiplyScalar(length);
  }
  lerp(v, alpha) {
    this.x += (v.x - this.x) * alpha;
    this.y += (v.y - this.y) * alpha;
    this.z += (v.z - this.z) * alpha;
    this.w += (v.w - this.w) * alpha;
    return this;
  }
  lerpVectors(v1, v2, alpha) {
    this.x = v1.x + (v2.x - v1.x) * alpha;
    this.y = v1.y + (v2.y - v1.y) * alpha;
    this.z = v1.z + (v2.z - v1.z) * alpha;
    this.w = v1.w + (v2.w - v1.w) * alpha;
    return this;
  }
  equals(v) {
    return v.x === this.x && v.y === this.y && v.z === this.z && v.w === this.w;
  }
  fromArray(array, offset = 0) {
    this.x = array[offset];
    this.y = array[offset + 1];
    this.z = array[offset + 2];
    this.w = array[offset + 3];
    return this;
  }
  toArray(array = [], offset = 0) {
    array[offset] = this.x;
    array[offset + 1] = this.y;
    array[offset + 2] = this.z;
    array[offset + 3] = this.w;
    return array;
  }
  fromBufferAttribute(attribute, index, offset) {
    if (offset !== void 0) {
      console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute().");
    }
    this.x = attribute.getX(index);
    this.y = attribute.getY(index);
    this.z = attribute.getZ(index);
    this.w = attribute.getW(index);
    return this;
  }
  random() {
    this.x = Math.random();
    this.y = Math.random();
    this.z = Math.random();
    this.w = Math.random();
    return this;
  }
  *[Symbol.iterator]() {
    yield this.x;
    yield this.y;
    yield this.z;
    yield this.w;
  }
};
Vector4.prototype.isVector4 = true;
var WebGLRenderTarget = class extends EventDispatcher {
  constructor(width, height, options = {}) {
    super();
    this.width = width;
    this.height = height;
    this.depth = 1;
    this.scissor = new Vector4(0, 0, width, height);
    this.scissorTest = false;
    this.viewport = new Vector4(0, 0, width, height);
    const image = { width, height, depth: 1 };
    this.texture = new Texture(image, options.mapping, options.wrapS, options.wrapT, options.magFilter, options.minFilter, options.format, options.type, options.anisotropy, options.encoding);
    this.texture.isRenderTargetTexture = true;
    this.texture.flipY = false;
    this.texture.generateMipmaps = options.generateMipmaps !== void 0 ? options.generateMipmaps : false;
    this.texture.internalFormat = options.internalFormat !== void 0 ? options.internalFormat : null;
    this.texture.minFilter = options.minFilter !== void 0 ? options.minFilter : LinearFilter;
    this.depthBuffer = options.depthBuffer !== void 0 ? options.depthBuffer : true;
    this.stencilBuffer = options.stencilBuffer !== void 0 ? options.stencilBuffer : false;
    this.depthTexture = options.depthTexture !== void 0 ? options.depthTexture : null;
    this.samples = options.samples !== void 0 ? options.samples : 0;
  }
  setSize(width, height, depth = 1) {
    if (this.width !== width || this.height !== height || this.depth !== depth) {
      this.width = width;
      this.height = height;
      this.depth = depth;
      this.texture.image.width = width;
      this.texture.image.height = height;
      this.texture.image.depth = depth;
      this.dispose();
    }
    this.viewport.set(0, 0, width, height);
    this.scissor.set(0, 0, width, height);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(source) {
    this.width = source.width;
    this.height = source.height;
    this.depth = source.depth;
    this.viewport.copy(source.viewport);
    this.texture = source.texture.clone();
    this.texture.isRenderTargetTexture = true;
    this.texture.image = Object.assign({}, source.texture.image);
    this.depthBuffer = source.depthBuffer;
    this.stencilBuffer = source.stencilBuffer;
    if (source.depthTexture !== null)
      this.depthTexture = source.depthTexture.clone();
    this.samples = source.samples;
    return this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
};
WebGLRenderTarget.prototype.isWebGLRenderTarget = true;
var DataArrayTexture = class extends Texture {
  constructor(data = null, width = 1, height = 1, depth = 1) {
    super(null);
    this.image = { data, width, height, depth };
    this.magFilter = NearestFilter;
    this.minFilter = NearestFilter;
    this.wrapR = ClampToEdgeWrapping;
    this.generateMipmaps = false;
    this.flipY = false;
    this.unpackAlignment = 1;
  }
};
DataArrayTexture.prototype.isDataArrayTexture = true;
var WebGLArrayRenderTarget = class extends WebGLRenderTarget {
  constructor(width, height, depth) {
    super(width, height);
    this.depth = depth;
    this.texture = new DataArrayTexture(null, width, height, depth);
    this.texture.isRenderTargetTexture = true;
  }
};
WebGLArrayRenderTarget.prototype.isWebGLArrayRenderTarget = true;
var Data3DTexture = class extends Texture {
  constructor(data = null, width = 1, height = 1, depth = 1) {
    super(null);
    this.image = { data, width, height, depth };
    this.magFilter = NearestFilter;
    this.minFilter = NearestFilter;
    this.wrapR = ClampToEdgeWrapping;
    this.generateMipmaps = false;
    this.flipY = false;
    this.unpackAlignment = 1;
  }
};
Data3DTexture.prototype.isData3DTexture = true;
var WebGL3DRenderTarget = class extends WebGLRenderTarget {
  constructor(width, height, depth) {
    super(width, height);
    this.depth = depth;
    this.texture = new Data3DTexture(null, width, height, depth);
    this.texture.isRenderTargetTexture = true;
  }
};
WebGL3DRenderTarget.prototype.isWebGL3DRenderTarget = true;
var WebGLMultipleRenderTargets = class extends WebGLRenderTarget {
  constructor(width, height, count, options = {}) {
    super(width, height, options);
    const texture = this.texture;
    this.texture = [];
    for (let i = 0; i < count; i++) {
      this.texture[i] = texture.clone();
      this.texture[i].isRenderTargetTexture = true;
    }
  }
  setSize(width, height, depth = 1) {
    if (this.width !== width || this.height !== height || this.depth !== depth) {
      this.width = width;
      this.height = height;
      this.depth = depth;
      for (let i = 0, il = this.texture.length; i < il; i++) {
        this.texture[i].image.width = width;
        this.texture[i].image.height = height;
        this.texture[i].image.depth = depth;
      }
      this.dispose();
    }
    this.viewport.set(0, 0, width, height);
    this.scissor.set(0, 0, width, height);
    return this;
  }
  copy(source) {
    this.dispose();
    this.width = source.width;
    this.height = source.height;
    this.depth = source.depth;
    this.viewport.set(0, 0, this.width, this.height);
    this.scissor.set(0, 0, this.width, this.height);
    this.depthBuffer = source.depthBuffer;
    this.stencilBuffer = source.stencilBuffer;
    this.depthTexture = source.depthTexture;
    this.texture.length = 0;
    for (let i = 0, il = source.texture.length; i < il; i++) {
      this.texture[i] = source.texture[i].clone();
    }
    return this;
  }
};
WebGLMultipleRenderTargets.prototype.isWebGLMultipleRenderTargets = true;
var Quaternion = class {
  constructor(x = 0, y = 0, z = 0, w = 1) {
    this._x = x;
    this._y = y;
    this._z = z;
    this._w = w;
  }
  static slerp(qa, qb, qm, t) {
    console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead.");
    return qm.slerpQuaternions(qa, qb, t);
  }
  static slerpFlat(dst, dstOffset, src0, srcOffset0, src1, srcOffset1, t) {
    let x0 = src0[srcOffset0 + 0], y0 = src0[srcOffset0 + 1], z0 = src0[srcOffset0 + 2], w0 = src0[srcOffset0 + 3];
    const x1 = src1[srcOffset1 + 0], y1 = src1[srcOffset1 + 1], z1 = src1[srcOffset1 + 2], w1 = src1[srcOffset1 + 3];
    if (t === 0) {
      dst[dstOffset + 0] = x0;
      dst[dstOffset + 1] = y0;
      dst[dstOffset + 2] = z0;
      dst[dstOffset + 3] = w0;
      return;
    }
    if (t === 1) {
      dst[dstOffset + 0] = x1;
      dst[dstOffset + 1] = y1;
      dst[dstOffset + 2] = z1;
      dst[dstOffset + 3] = w1;
      return;
    }
    if (w0 !== w1 || x0 !== x1 || y0 !== y1 || z0 !== z1) {
      let s = 1 - t;
      const cos = x0 * x1 + y0 * y1 + z0 * z1 + w0 * w1, dir = cos >= 0 ? 1 : -1, sqrSin = 1 - cos * cos;
      if (sqrSin > Number.EPSILON) {
        const sin = Math.sqrt(sqrSin), len = Math.atan2(sin, cos * dir);
        s = Math.sin(s * len) / sin;
        t = Math.sin(t * len) / sin;
      }
      const tDir = t * dir;
      x0 = x0 * s + x1 * tDir;
      y0 = y0 * s + y1 * tDir;
      z0 = z0 * s + z1 * tDir;
      w0 = w0 * s + w1 * tDir;
      if (s === 1 - t) {
        const f = 1 / Math.sqrt(x0 * x0 + y0 * y0 + z0 * z0 + w0 * w0);
        x0 *= f;
        y0 *= f;
        z0 *= f;
        w0 *= f;
      }
    }
    dst[dstOffset] = x0;
    dst[dstOffset + 1] = y0;
    dst[dstOffset + 2] = z0;
    dst[dstOffset + 3] = w0;
  }
  static multiplyQuaternionsFlat(dst, dstOffset, src0, srcOffset0, src1, srcOffset1) {
    const x0 = src0[srcOffset0];
    const y0 = src0[srcOffset0 + 1];
    const z0 = src0[srcOffset0 + 2];
    const w0 = src0[srcOffset0 + 3];
    const x1 = src1[srcOffset1];
    const y1 = src1[srcOffset1 + 1];
    const z1 = src1[srcOffset1 + 2];
    const w1 = src1[srcOffset1 + 3];
    dst[dstOffset] = x0 * w1 + w0 * x1 + y0 * z1 - z0 * y1;
    dst[dstOffset + 1] = y0 * w1 + w0 * y1 + z0 * x1 - x0 * z1;
    dst[dstOffset + 2] = z0 * w1 + w0 * z1 + x0 * y1 - y0 * x1;
    dst[dstOffset + 3] = w0 * w1 - x0 * x1 - y0 * y1 - z0 * z1;
    return dst;
  }
  get x() {
    return this._x;
  }
  set x(value) {
    this._x = value;
    this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(value) {
    this._y = value;
    this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(value) {
    this._z = value;
    this._onChangeCallback();
  }
  get w() {
    return this._w;
  }
  set w(value) {
    this._w = value;
    this._onChangeCallback();
  }
  set(x, y, z, w) {
    this._x = x;
    this._y = y;
    this._z = z;
    this._w = w;
    this._onChangeCallback();
    return this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(quaternion) {
    this._x = quaternion.x;
    this._y = quaternion.y;
    this._z = quaternion.z;
    this._w = quaternion.w;
    this._onChangeCallback();
    return this;
  }
  setFromEuler(euler, update) {
    if (!(euler && euler.isEuler)) {
      throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");
    }
    const x = euler._x, y = euler._y, z = euler._z, order = euler._order;
    const cos = Math.cos;
    const sin = Math.sin;
    const c1 = cos(x / 2);
    const c2 = cos(y / 2);
    const c3 = cos(z / 2);
    const s1 = sin(x / 2);
    const s2 = sin(y / 2);
    const s3 = sin(z / 2);
    switch (order) {
      case "XYZ":
        this._x = s1 * c2 * c3 + c1 * s2 * s3;
        this._y = c1 * s2 * c3 - s1 * c2 * s3;
        this._z = c1 * c2 * s3 + s1 * s2 * c3;
        this._w = c1 * c2 * c3 - s1 * s2 * s3;
        break;
      case "YXZ":
        this._x = s1 * c2 * c3 + c1 * s2 * s3;
        this._y = c1 * s2 * c3 - s1 * c2 * s3;
        this._z = c1 * c2 * s3 - s1 * s2 * c3;
        this._w = c1 * c2 * c3 + s1 * s2 * s3;
        break;
      case "ZXY":
        this._x = s1 * c2 * c3 - c1 * s2 * s3;
        this._y = c1 * s2 * c3 + s1 * c2 * s3;
        this._z = c1 * c2 * s3 + s1 * s2 * c3;
        this._w = c1 * c2 * c3 - s1 * s2 * s3;
        break;
      case "ZYX":
        this._x = s1 * c2 * c3 - c1 * s2 * s3;
        this._y = c1 * s2 * c3 + s1 * c2 * s3;
        this._z = c1 * c2 * s3 - s1 * s2 * c3;
        this._w = c1 * c2 * c3 + s1 * s2 * s3;
        break;
      case "YZX":
        this._x = s1 * c2 * c3 + c1 * s2 * s3;
        this._y = c1 * s2 * c3 + s1 * c2 * s3;
        this._z = c1 * c2 * s3 - s1 * s2 * c3;
        this._w = c1 * c2 * c3 - s1 * s2 * s3;
        break;
      case "XZY":
        this._x = s1 * c2 * c3 - c1 * s2 * s3;
        this._y = c1 * s2 * c3 - s1 * c2 * s3;
        this._z = c1 * c2 * s3 + s1 * s2 * c3;
        this._w = c1 * c2 * c3 + s1 * s2 * s3;
        break;
      default:
        console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + order);
    }
    if (update !== false)
      this._onChangeCallback();
    return this;
  }
  setFromAxisAngle(axis, angle) {
    const halfAngle = angle / 2, s = Math.sin(halfAngle);
    this._x = axis.x * s;
    this._y = axis.y * s;
    this._z = axis.z * s;
    this._w = Math.cos(halfAngle);
    this._onChangeCallback();
    return this;
  }
  setFromRotationMatrix(m) {
    const te = m.elements, m11 = te[0], m12 = te[4], m13 = te[8], m21 = te[1], m22 = te[5], m23 = te[9], m31 = te[2], m32 = te[6], m33 = te[10], trace = m11 + m22 + m33;
    if (trace > 0) {
      const s = 0.5 / Math.sqrt(trace + 1);
      this._w = 0.25 / s;
      this._x = (m32 - m23) * s;
      this._y = (m13 - m31) * s;
      this._z = (m21 - m12) * s;
    } else if (m11 > m22 && m11 > m33) {
      const s = 2 * Math.sqrt(1 + m11 - m22 - m33);
      this._w = (m32 - m23) / s;
      this._x = 0.25 * s;
      this._y = (m12 + m21) / s;
      this._z = (m13 + m31) / s;
    } else if (m22 > m33) {
      const s = 2 * Math.sqrt(1 + m22 - m11 - m33);
      this._w = (m13 - m31) / s;
      this._x = (m12 + m21) / s;
      this._y = 0.25 * s;
      this._z = (m23 + m32) / s;
    } else {
      const s = 2 * Math.sqrt(1 + m33 - m11 - m22);
      this._w = (m21 - m12) / s;
      this._x = (m13 + m31) / s;
      this._y = (m23 + m32) / s;
      this._z = 0.25 * s;
    }
    this._onChangeCallback();
    return this;
  }
  setFromUnitVectors(vFrom, vTo) {
    let r = vFrom.dot(vTo) + 1;
    if (r < Number.EPSILON) {
      r = 0;
      if (Math.abs(vFrom.x) > Math.abs(vFrom.z)) {
        this._x = -vFrom.y;
        this._y = vFrom.x;
        this._z = 0;
        this._w = r;
      } else {
        this._x = 0;
        this._y = -vFrom.z;
        this._z = vFrom.y;
        this._w = r;
      }
    } else {
      this._x = vFrom.y * vTo.z - vFrom.z * vTo.y;
      this._y = vFrom.z * vTo.x - vFrom.x * vTo.z;
      this._z = vFrom.x * vTo.y - vFrom.y * vTo.x;
      this._w = r;
    }
    return this.normalize();
  }
  angleTo(q) {
    return 2 * Math.acos(Math.abs(clamp(this.dot(q), -1, 1)));
  }
  rotateTowards(q, step) {
    const angle = this.angleTo(q);
    if (angle === 0)
      return this;
    const t = Math.min(1, step / angle);
    this.slerp(q, t);
    return this;
  }
  identity() {
    return this.set(0, 0, 0, 1);
  }
  invert() {
    return this.conjugate();
  }
  conjugate() {
    this._x *= -1;
    this._y *= -1;
    this._z *= -1;
    this._onChangeCallback();
    return this;
  }
  dot(v) {
    return this._x * v._x + this._y * v._y + this._z * v._z + this._w * v._w;
  }
  lengthSq() {
    return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
  }
  length() {
    return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
  }
  normalize() {
    let l = this.length();
    if (l === 0) {
      this._x = 0;
      this._y = 0;
      this._z = 0;
      this._w = 1;
    } else {
      l = 1 / l;
      this._x = this._x * l;
      this._y = this._y * l;
      this._z = this._z * l;
      this._w = this._w * l;
    }
    this._onChangeCallback();
    return this;
  }
  multiply(q, p) {
    if (p !== void 0) {
      console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead.");
      return this.multiplyQuaternions(q, p);
    }
    return this.multiplyQuaternions(this, q);
  }
  premultiply(q) {
    return this.multiplyQuaternions(q, this);
  }
  multiplyQuaternions(a, b) {
    const qax = a._x, qay = a._y, qaz = a._z, qaw = a._w;
    const qbx = b._x, qby = b._y, qbz = b._z, qbw = b._w;
    this._x = qax * qbw + qaw * qbx + qay * qbz - qaz * qby;
    this._y = qay * qbw + qaw * qby + qaz * qbx - qax * qbz;
    this._z = qaz * qbw + qaw * qbz + qax * qby - qay * qbx;
    this._w = qaw * qbw - qax * qbx - qay * qby - qaz * qbz;
    this._onChangeCallback();
    return this;
  }
  slerp(qb, t) {
    if (t === 0)
      return this;
    if (t === 1)
      return this.copy(qb);
    const x = this._x, y = this._y, z = this._z, w = this._w;
    let cosHalfTheta = w * qb._w + x * qb._x + y * qb._y + z * qb._z;
    if (cosHalfTheta < 0) {
      this._w = -qb._w;
      this._x = -qb._x;
      this._y = -qb._y;
      this._z = -qb._z;
      cosHalfTheta = -cosHalfTheta;
    } else {
      this.copy(qb);
    }
    if (cosHalfTheta >= 1) {
      this._w = w;
      this._x = x;
      this._y = y;
      this._z = z;
      return this;
    }
    const sqrSinHalfTheta = 1 - cosHalfTheta * cosHalfTheta;
    if (sqrSinHalfTheta <= Number.EPSILON) {
      const s = 1 - t;
      this._w = s * w + t * this._w;
      this._x = s * x + t * this._x;
      this._y = s * y + t * this._y;
      this._z = s * z + t * this._z;
      this.normalize();
      this._onChangeCallback();
      return this;
    }
    const sinHalfTheta = Math.sqrt(sqrSinHalfTheta);
    const halfTheta = Math.atan2(sinHalfTheta, cosHalfTheta);
    const ratioA = Math.sin((1 - t) * halfTheta) / sinHalfTheta, ratioB = Math.sin(t * halfTheta) / sinHalfTheta;
    this._w = w * ratioA + this._w * ratioB;
    this._x = x * ratioA + this._x * ratioB;
    this._y = y * ratioA + this._y * ratioB;
    this._z = z * ratioA + this._z * ratioB;
    this._onChangeCallback();
    return this;
  }
  slerpQuaternions(qa, qb, t) {
    return this.copy(qa).slerp(qb, t);
  }
  random() {
    const u1 = Math.random();
    const sqrt1u1 = Math.sqrt(1 - u1);
    const sqrtu1 = Math.sqrt(u1);
    const u2 = 2 * Math.PI * Math.random();
    const u3 = 2 * Math.PI * Math.random();
    return this.set(sqrt1u1 * Math.cos(u2), sqrtu1 * Math.sin(u3), sqrtu1 * Math.cos(u3), sqrt1u1 * Math.sin(u2));
  }
  equals(quaternion) {
    return quaternion._x === this._x && quaternion._y === this._y && quaternion._z === this._z && quaternion._w === this._w;
  }
  fromArray(array, offset = 0) {
    this._x = array[offset];
    this._y = array[offset + 1];
    this._z = array[offset + 2];
    this._w = array[offset + 3];
    this._onChangeCallback();
    return this;
  }
  toArray(array = [], offset = 0) {
    array[offset] = this._x;
    array[offset + 1] = this._y;
    array[offset + 2] = this._z;
    array[offset + 3] = this._w;
    return array;
  }
  fromBufferAttribute(attribute, index) {
    this._x = attribute.getX(index);
    this._y = attribute.getY(index);
    this._z = attribute.getZ(index);
    this._w = attribute.getW(index);
    return this;
  }
  _onChange(callback) {
    this._onChangeCallback = callback;
    return this;
  }
  _onChangeCallback() {
  }
};
Quaternion.prototype.isQuaternion = true;
var Vector3 = class {
  constructor(x = 0, y = 0, z = 0) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
  set(x, y, z) {
    if (z === void 0)
      z = this.z;
    this.x = x;
    this.y = y;
    this.z = z;
    return this;
  }
  setScalar(scalar) {
    this.x = scalar;
    this.y = scalar;
    this.z = scalar;
    return this;
  }
  setX(x) {
    this.x = x;
    return this;
  }
  setY(y) {
    this.y = y;
    return this;
  }
  setZ(z) {
    this.z = z;
    return this;
  }
  setComponent(index, value) {
    switch (index) {
      case 0:
        this.x = value;
        break;
      case 1:
        this.y = value;
        break;
      case 2:
        this.z = value;
        break;
      default:
        throw new Error("index is out of range: " + index);
    }
    return this;
  }
  getComponent(index) {
    switch (index) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("index is out of range: " + index);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  copy(v) {
    this.x = v.x;
    this.y = v.y;
    this.z = v.z;
    return this;
  }
  add(v, w) {
    if (w !== void 0) {
      console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead.");
      return this.addVectors(v, w);
    }
    this.x += v.x;
    this.y += v.y;
    this.z += v.z;
    return this;
  }
  addScalar(s) {
    this.x += s;
    this.y += s;
    this.z += s;
    return this;
  }
  addVectors(a, b) {
    this.x = a.x + b.x;
    this.y = a.y + b.y;
    this.z = a.z + b.z;
    return this;
  }
  addScaledVector(v, s) {
    this.x += v.x * s;
    this.y += v.y * s;
    this.z += v.z * s;
    return this;
  }
  sub(v, w) {
    if (w !== void 0) {
      console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead.");
      return this.subVectors(v, w);
    }
    this.x -= v.x;
    this.y -= v.y;
    this.z -= v.z;
    return this;
  }
  subScalar(s) {
    this.x -= s;
    this.y -= s;
    this.z -= s;
    return this;
  }
  subVectors(a, b) {
    this.x = a.x - b.x;
    this.y = a.y - b.y;
    this.z = a.z - b.z;
    return this;
  }
  multiply(v, w) {
    if (w !== void 0) {
      console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead.");
      return this.multiplyVectors(v, w);
    }
    this.x *= v.x;
    this.y *= v.y;
    this.z *= v.z;
    return this;
  }
  multiplyScalar(scalar) {
    this.x *= scalar;
    this.y *= scalar;
    this.z *= scalar;
    return this;
  }
  multiplyVectors(a, b) {
    this.x = a.x * b.x;
    this.y = a.y * b.y;
    this.z = a.z * b.z;
    return this;
  }
  applyEuler(euler) {
    if (!(euler && euler.isEuler)) {
      console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order.");
    }
    return this.applyQuaternion(_quaternion$4.setFromEuler(euler));
  }
  applyAxisAngle(axis, angle) {
    return this.applyQuaternion(_quaternion$4.setFromAxisAngle(axis, angle));
  }
  applyMatrix3(m) {
    const x = this.x, y = this.y, z = this.z;
    const e = m.elements;
    this.x = e[0] * x + e[3] * y + e[6] * z;
    this.y = e[1] * x + e[4] * y + e[7] * z;
    this.z = e[2] * x + e[5] * y + e[8] * z;
    return this;
  }
  applyNormalMatrix(m) {
    return this.applyMatrix3(m).normalize();
  }
  applyMatrix4(m) {
    const x = this.x, y = this.y, z = this.z;
    const e = m.elements;
    const w = 1 / (e[3] * x + e[7] * y + e[11] * z + e[15]);
    this.x = (e[0] * x + e[4] * y + e[8] * z + e[12]) * w;
    this.y = (e[1] * x + e[5] * y + e[9] * z + e[13]) * w;
    this.z = (e[2] * x + e[6] * y + e[10] * z + e[14]) * w;
    return this;
  }
  applyQuaternion(q) {
    const x = this.x, y = this.y, z = this.z;
    const qx = q.x, qy = q.y, qz = q.z, qw = q.w;
    const ix = qw * x + qy * z - qz * y;
    const iy = qw * y + qz * x - qx * z;
    const iz = qw * z + qx * y - qy * x;
    const iw = -qx * x - qy * y - qz * z;
    this.x = ix * qw + iw * -qx + iy * -qz - iz * -qy;
    this.y = iy * qw + iw * -qy + iz * -qx - ix * -qz;
    this.z = iz * qw + iw * -qz + ix * -qy - iy * -qx;
    return this;
  }
  project(camera) {
    return this.applyMatrix4(camera.matrixWorldInverse).applyMatrix4(camera.projectionMatrix);
  }
  unproject(camera) {
    return this.applyMatrix4(camera.projectionMatrixInverse).applyMatrix4(camera.matrixWorld);
  }
  transformDirection(m) {
    const x = this.x, y = this.y, z = this.z;
    const e = m.elements;
    this.x = e[0] * x + e[4] * y + e[8] * z;
    this.y = e[1] * x + e[5] * y + e[9] * z;
    this.z = e[2] * x + e[6] * y + e[10] * z;
    return this.normalize();
  }
  divide(v) {
    this.x /= v.x;
    this.y /= v.y;
    this.z /= v.z;
    return this;
  }
  divideScalar(scalar) {
    return this.multiplyScalar(1 / scalar);
  }
  min(v) {
    this.x = Math.min(this.x, v.x);
    this.y = Math.min(this.y, v.y);
    this.z = Math.min(this.z, v.z);
    return this;
  }
  max(v) {
    this.x = Math.max(this.x, v.x);
    this.y = Math.max(this.y, v.y);
    this.z = Math.max(this.z, v.z);
    return this;
  }
  clamp(min, max) {
    this.x = Math.max(min.x, Math.min(max.x, this.x));
    this.y = Math.max(min.y, Math.min(max.y, this.y));
    this.z = Math.max(min.z, Math.min(max.z, this.z));
    return this;
  }
  clampScalar(minVal, maxVal) {
    this.x = Math.max(minVal, Math.min(maxVal, this.x));
    this.y = Math.max(minVal, Math.min(maxVal, this.y));
    this.z = Math.max(minVal, Math.min(maxVal, this.z));
    return this;
  }
  clampLength(min, max) {
    const length = this.length();
    return this.divideScalar(length || 1).multiplyScalar(Math.max(min, Math.min(max, length)));
  }
  floor() {
    this.x = Math.floor(this.x);
    this.y = Math.floor(this.y);
    this.z = Math.floor(this.z);
    return this;
  }
  ceil() {
    this.x = Math.ceil(this.x);
    this.y = Math.ceil(this.y);
    this.z = Math.ceil(this.z);
    return this;
  }
  round() {
    this.x = Math.round(this.x);
    this.y = Math.round(this.y);
    this.z = Math.round(this.z);
    return this;
  }
  roundToZero() {
    this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x);
    this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y);
    this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z);
    return this;
  }
  negate() {
    this.x = -this.x;
    this.y = -this.y;
    this.z = -this.z;
    return this;
  }
  dot(v) {
    return this.x * v.x + this.y * v.y + this.z * v.z;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(length) {
    return this.normalize().multiplyScalar(length);
  }
  lerp(v, alpha) {
    this.x += (v.x - this.x) * alpha;
    this.y += (v.y - this.y) * alpha;
    this.z += (v.z - this.z) * alpha;
    return this;
  }
  lerpVectors(v1, v2, alpha) {
    this.x = v1.x + (v2.x - v1.x) * alpha;
    this.y = v1.y + (v2.y - v1.y) * alpha;
    this.z = v1.z + (v2.z - v1.z) * alpha;
    return this;
  }
  cross(v, w) {
    if (w !== void 0) {
      console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead.");
      return this.crossVectors(v, w);
    }
    return this.crossVectors(this, v);
  }
  crossVectors(a, b) {
    const ax = a.x, ay = a.y, az = a.z;
    const bx = b.x, by = b.y, bz = b.z;
    this.x = ay * bz - az * by;
    this.y = az * bx - ax * bz;
    this.z = ax * by - ay * bx;
    return this;
  }
  projectOnVector(v) {
    const denominator = v.lengthSq();
    if (denominator === 0)
      return this.set(0, 0, 0);
    const scalar = v.dot(this) / denominator;
    return this.copy(v).multiplyScalar(scalar);
  }
  projectOnPlane(planeNormal) {
    _vector$c.copy(this).projectOnVector(planeNormal);
    return this.sub(_vector$c);
  }
  reflect(normal) {
    return this.sub(_vector$c.copy(normal).multiplyScalar(2 * this.dot(normal)));
  }
  angleTo(v) {
    const denominator = Math.sqrt(this.lengthSq() * v.lengthSq());
    if (denominator === 0)
      return Math.PI / 2;
    const theta = this.dot(v) / denominator;
    return Math.acos(clamp(theta, -1, 1));
  }
  distanceTo(v) {
    return Math.sqrt(this.distanceToSquared(v));
  }
  distanceToSquared(v) {
    const dx = this.x - v.x, dy = this.y - v.y, dz = this.z - v.z;
    return dx * dx + dy * dy + dz * dz;
  }
  manhattanDistanceTo(v) {
    return Math.abs(this.x - v.x) + Math.abs(this.y - v.y) + Math.abs(this.z - v.z);
  }
  setFromSpherical(s) {
    return this.setFromSphericalCoords(s.radius, s.phi, s.theta);
  }
  setFromSphericalCoords(radius, phi, theta) {
    const sinPhiRadius = Math.sin(phi) * radius;
    this.x = sinPhiRadius * Math.sin(theta);
    this.y = Math.cos(phi) * radius;
    this.z = sinPhiRadius * Math.cos(theta);
    return this;
  }
  setFromCylindrical(c) {
    return this.setFromCylindricalCoords(c.radius, c.theta, c.y);
  }
  setFromCylindricalCoords(radius, theta, y) {
    this.x = radius * Math.sin(theta);
    this.y = y;
    this.z = radius * Math.cos(theta);
    return this;
  }
  setFromMatrixPosition(m) {
    const e = m.elements;
    this.x = e[12];
    this.y = e[13];
    this.z = e[14];
    return this;
  }
  setFromMatrixScale(m) {
    const sx = this.setFromMatrixColumn(m, 0).length();
    const sy = this.setFromMatrixColumn(m, 1).length();
    const sz = this.setFromMatrixColumn(m, 2).length();
    this.x = sx;
    this.y = sy;
    this.z = sz;
    return this;
  }
  setFromMatrixColumn(m, index) {
    return this.fromArray(m.elements, index * 4);
  }
  setFromMatrix3Column(m, index) {
    return this.fromArray(m.elements, index * 3);
  }
  setFromEuler(e) {
    this.x = e._x;
    this.y = e._y;
    this.z = e._z;
    return this;
  }
  equals(v) {
    return v.x === this.x && v.y === this.y && v.z === this.z;
  }
  fromArray(array, offset = 0) {
    this.x = array[offset];
    this.y = array[offset + 1];
    this.z = array[offset + 2];
    return this;
  }
  toArray(array = [], offset = 0) {
    array[offset] = this.x;
    array[offset + 1] = this.y;
    array[offset + 2] = this.z;
    return array;
  }
  fromBufferAttribute(attribute, index, offset) {
    if (offset !== void 0) {
      console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute().");
    }
    this.x = attribute.getX(index);
    this.y = attribute.getY(index);
    this.z = attribute.getZ(index);
    return this;
  }
  random() {
    this.x = Math.random();
    this.y = Math.random();
    this.z = Math.random();
    return this;
  }
  randomDirection() {
    const u = (Math.random() - 0.5) * 2;
    const t = Math.random() * Math.PI * 2;
    const f = Math.sqrt(1 - u ** 2);
    this.x = f * Math.cos(t);
    this.y = f * Math.sin(t);
    this.z = u;
    return this;
  }
  *[Symbol.iterator]() {
    yield this.x;
    yield this.y;
    yield this.z;
  }
};
Vector3.prototype.isVector3 = true;
var _vector$c = /* @__PURE__ */ new Vector3();
var _quaternion$4 = /* @__PURE__ */ new Quaternion();
var Box3 = class {
  constructor(min = new Vector3(Infinity, Infinity, Infinity), max = new Vector3(-Infinity, -Infinity, -Infinity)) {
    this.min = min;
    this.max = max;
  }
  set(min, max) {
    this.min.copy(min);
    this.max.copy(max);
    return this;
  }
  setFromArray(array) {
    let minX = Infinity;
    let minY = Infinity;
    let minZ = Infinity;
    let maxX = -Infinity;
    let maxY = -Infinity;
    let maxZ = -Infinity;
    for (let i = 0, l = array.length; i < l; i += 3) {
      const x = array[i];
      const y = array[i + 1];
      const z = array[i + 2];
      if (x < minX)
        minX = x;
      if (y < minY)
        minY = y;
      if (z < minZ)
        minZ = z;
      if (x > maxX)
        maxX = x;
      if (y > maxY)
        maxY = y;
      if (z > maxZ)
        maxZ = z;
    }
    this.min.set(minX, minY, minZ);
    this.max.set(maxX, maxY, maxZ);
    return this;
  }
  setFromBufferAttribute(attribute) {
    let minX = Infinity;
    let minY = Infinity;
    let minZ = Infinity;
    let maxX = -Infinity;
    let maxY = -Infinity;
    let maxZ = -Infinity;
    for (let i = 0, l = attribute.count; i < l; i++) {
      const x = attribute.getX(i);
      const y = attribute.getY(i);
      const z = attribute.getZ(i);
      if (x < minX)
        minX = x;
      if (y < minY)
        minY = y;
      if (z < minZ)
        minZ = z;
      if (x > maxX)
        maxX = x;
      if (y > maxY)
        maxY = y;
      if (z > maxZ)
        maxZ = z;
    }
    this.min.set(minX, minY, minZ);
    this.max.set(maxX, maxY, maxZ);
    return this;
  }
  setFromPoints(points) {
    this.makeEmpty();
    for (let i = 0, il = points.length; i < il; i++) {
      this.expandByPoint(points[i]);
    }
    return this;
  }
  setFromCenterAndSize(center, size) {
    const halfSize = _vector$b.copy(size).multiplyScalar(0.5);
    this.min.copy(center).sub(halfSize);
    this.max.copy(center).add(halfSize);
    return this;
  }
  setFromObject(object, precise = false) {
    this.makeEmpty();
    return this.expandByObject(object, precise);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(box) {
    this.min.copy(box.min);
    this.max.copy(box.max);
    return this;
  }
  makeEmpty() {
    this.min.x = this.min.y = this.min.z = Infinity;
    this.max.x = this.max.y = this.max.z = -Infinity;
    return this;
  }
  isEmpty() {
    return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
  }
  getCenter(target) {
    return this.isEmpty() ? target.set(0, 0, 0) : target.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(target) {
    return this.isEmpty() ? target.set(0, 0, 0) : target.subVectors(this.max, this.min);
  }
  expandByPoint(point) {
    this.min.min(point);
    this.max.max(point);
    return this;
  }
  expandByVector(vector) {
    this.min.sub(vector);
    this.max.add(vector);
    return this;
  }
  expandByScalar(scalar) {
    this.min.addScalar(-scalar);
    this.max.addScalar(scalar);
    return this;
  }
  expandByObject(object, precise = false) {
    object.updateWorldMatrix(false, false);
    const geometry = object.geometry;
    if (geometry !== void 0) {
      if (precise && geometry.attributes != void 0 && geometry.attributes.position !== void 0) {
        const position = geometry.attributes.position;
        for (let i = 0, l = position.count; i < l; i++) {
          _vector$b.fromBufferAttribute(position, i).applyMatrix4(object.matrixWorld);
          this.expandByPoint(_vector$b);
        }
      } else {
        if (geometry.boundingBox === null) {
          geometry.computeBoundingBox();
        }
        _box$3.copy(geometry.boundingBox);
        _box$3.applyMatrix4(object.matrixWorld);
        this.union(_box$3);
      }
    }
    const children = object.children;
    for (let i = 0, l = children.length; i < l; i++) {
      this.expandByObject(children[i], precise);
    }
    return this;
  }
  containsPoint(point) {
    return point.x < this.min.x || point.x > this.max.x || point.y < this.min.y || point.y > this.max.y || point.z < this.min.z || point.z > this.max.z ? false : true;
  }
  containsBox(box) {
    return this.min.x <= box.min.x && box.max.x <= this.max.x && this.min.y <= box.min.y && box.max.y <= this.max.y && this.min.z <= box.min.z && box.max.z <= this.max.z;
  }
  getParameter(point, target) {
    return target.set((point.x - this.min.x) / (this.max.x - this.min.x), (point.y - this.min.y) / (this.max.y - this.min.y), (point.z - this.min.z) / (this.max.z - this.min.z));
  }
  intersectsBox(box) {
    return box.max.x < this.min.x || box.min.x > this.max.x || box.max.y < this.min.y || box.min.y > this.max.y || box.max.z < this.min.z || box.min.z > this.max.z ? false : true;
  }
  intersectsSphere(sphere) {
    this.clampPoint(sphere.center, _vector$b);
    return _vector$b.distanceToSquared(sphere.center) <= sphere.radius * sphere.radius;
  }
  intersectsPlane(plane) {
    let min, max;
    if (plane.normal.x > 0) {
      min = plane.normal.x * this.min.x;
      max = plane.normal.x * this.max.x;
    } else {
      min = plane.normal.x * this.max.x;
      max = plane.normal.x * this.min.x;
    }
    if (plane.normal.y > 0) {
      min += plane.normal.y * this.min.y;
      max += plane.normal.y * this.max.y;
    } else {
      min += plane.normal.y * this.max.y;
      max += plane.normal.y * this.min.y;
    }
    if (plane.normal.z > 0) {
      min += plane.normal.z * this.min.z;
      max += plane.normal.z * this.max.z;
    } else {
      min += plane.normal.z * this.max.z;
      max += plane.normal.z * this.min.z;
    }
    return min <= -plane.constant && max >= -plane.constant;
  }
  intersectsTriangle(triangle) {
    if (this.isEmpty()) {
      return false;
    }
    this.getCenter(_center);
    _extents.subVectors(this.max, _center);
    _v0$2.subVectors(triangle.a, _center);
    _v1$7.subVectors(triangle.b, _center);
    _v2$3.subVectors(triangle.c, _center);
    _f0.subVectors(_v1$7, _v0$2);
    _f1.subVectors(_v2$3, _v1$7);
    _f2.subVectors(_v0$2, _v2$3);
    let axes = [
      0,
      -_f0.z,
      _f0.y,
      0,
      -_f1.z,
      _f1.y,
      0,
      -_f2.z,
      _f2.y,
      _f0.z,
      0,
      -_f0.x,
      _f1.z,
      0,
      -_f1.x,
      _f2.z,
      0,
      -_f2.x,
      -_f0.y,
      _f0.x,
      0,
      -_f1.y,
      _f1.x,
      0,
      -_f2.y,
      _f2.x,
      0
    ];
    if (!satForAxes(axes, _v0$2, _v1$7, _v2$3, _extents)) {
      return false;
    }
    axes = [1, 0, 0, 0, 1, 0, 0, 0, 1];
    if (!satForAxes(axes, _v0$2, _v1$7, _v2$3, _extents)) {
      return false;
    }
    _triangleNormal.crossVectors(_f0, _f1);
    axes = [_triangleNormal.x, _triangleNormal.y, _triangleNormal.z];
    return satForAxes(axes, _v0$2, _v1$7, _v2$3, _extents);
  }
  clampPoint(point, target) {
    return target.copy(point).clamp(this.min, this.max);
  }
  distanceToPoint(point) {
    const clampedPoint = _vector$b.copy(point).clamp(this.min, this.max);
    return clampedPoint.sub(point).length();
  }
  getBoundingSphere(target) {
    this.getCenter(target.center);
    target.radius = this.getSize(_vector$b).length() * 0.5;
    return target;
  }
  intersect(box) {
    this.min.max(box.min);
    this.max.min(box.max);
    if (this.isEmpty())
      this.makeEmpty();
    return this;
  }
  union(box) {
    this.min.min(box.min);
    this.max.max(box.max);
    return this;
  }
  applyMatrix4(matrix) {
    if (this.isEmpty())
      return this;
    _points[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(matrix);
    _points[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(matrix);
    _points[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(matrix);
    _points[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(matrix);
    _points[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(matrix);
    _points[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(matrix);
    _points[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(matrix);
    _points[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(matrix);
    this.setFromPoints(_points);
    return this;
  }
  translate(offset) {
    this.min.add(offset);
    this.max.add(offset);
    return this;
  }
  equals(box) {
    return box.min.equals(this.min) && box.max.equals(this.max);
  }
};
Box3.prototype.isBox3 = true;
var _points = [
  /* @__PURE__ */ new Vector3(),
  /* @__PURE__ */ new Vector3(),
  /* @__PURE__ */ new Vector3(),
  /* @__PURE__ */ new Vector3(),
  /* @__PURE__ */ new Vector3(),
  /* @__PURE__ */ new Vector3(),
  /* @__PURE__ */ new Vector3(),
  /* @__PURE__ */ new Vector3()
];
var _vector$b = /* @__PURE__ */ new Vector3();
var _box$3 = /* @__PURE__ */ new Box3();
var _v0$2 = /* @__PURE__ */ new Vector3();
var _v1$7 = /* @__PURE__ */ new Vector3();
var _v2$3 = /* @__PURE__ */ new Vector3();
var _f0 = /* @__PURE__ */ new Vector3();
var _f1 = /* @__PURE__ */ new Vector3();
var _f2 = /* @__PURE__ */ new Vector3();
var _center = /* @__PURE__ */ new Vector3();
var _extents = /* @__PURE__ */ new Vector3();
var _triangleNormal = /* @__PURE__ */ new Vector3();
var _testAxis = /* @__PURE__ */ new Vector3();
function satForAxes(axes, v0, v1, v2, extents) {
  for (let i = 0, j = axes.length - 3; i <= j; i += 3) {
    _testAxis.fromArray(axes, i);
    const r = extents.x * Math.abs(_testAxis.x) + extents.y * Math.abs(_testAxis.y) + extents.z * Math.abs(_testAxis.z);
    const p0 = v0.dot(_testAxis);
    const p1 = v1.dot(_testAxis);
    const p2 = v2.dot(_testAxis);
    if (Math.max(-Math.max(p0, p1, p2), Math.min(p0, p1, p2)) > r) {
      return false;
    }
  }
  return true;
}
var _box$2 = /* @__PURE__ */ new Box3();
var _v1$6 = /* @__PURE__ */ new Vector3();
var _toFarthestPoint = /* @__PURE__ */ new Vector3();
var _toPoint = /* @__PURE__ */ new Vector3();
var Sphere = class {
  constructor(center = new Vector3(), radius = -1) {
    this.center = center;
    this.radius = radius;
  }
  set(center, radius) {
    this.center.copy(center);
    this.radius = radius;
    return this;
  }
  setFromPoints(points, optionalCenter) {
    const center = this.center;
    if (optionalCenter !== void 0) {
      center.copy(optionalCenter);
    } else {
      _box$2.setFromPoints(points).getCenter(center);
    }
    let maxRadiusSq = 0;
    for (let i = 0, il = points.length; i < il; i++) {
      maxRadiusSq = Math.max(maxRadiusSq, center.distanceToSquared(points[i]));
    }
    this.radius = Math.sqrt(maxRadiusSq);
    return this;
  }
  copy(sphere) {
    this.center.copy(sphere.center);
    this.radius = sphere.radius;
    return this;
  }
  isEmpty() {
    return this.radius < 0;
  }
  makeEmpty() {
    this.center.set(0, 0, 0);
    this.radius = -1;
    return this;
  }
  containsPoint(point) {
    return point.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  distanceToPoint(point) {
    return point.distanceTo(this.center) - this.radius;
  }
  intersectsSphere(sphere) {
    const radiusSum = this.radius + sphere.radius;
    return sphere.center.distanceToSquared(this.center) <= radiusSum * radiusSum;
  }
  intersectsBox(box) {
    return box.intersectsSphere(this);
  }
  intersectsPlane(plane) {
    return Math.abs(plane.distanceToPoint(this.center)) <= this.radius;
  }
  clampPoint(point, target) {
    const deltaLengthSq = this.center.distanceToSquared(point);
    target.copy(point);
    if (deltaLengthSq > this.radius * this.radius) {
      target.sub(this.center).normalize();
      target.multiplyScalar(this.radius).add(this.center);
    }
    return target;
  }
  getBoundingBox(target) {
    if (this.isEmpty()) {
      target.makeEmpty();
      return target;
    }
    target.set(this.center, this.center);
    target.expandByScalar(this.radius);
    return target;
  }
  applyMatrix4(matrix) {
    this.center.applyMatrix4(matrix);
    this.radius = this.radius * matrix.getMaxScaleOnAxis();
    return this;
  }
  translate(offset) {
    this.center.add(offset);
    return this;
  }
  expandByPoint(point) {
    _toPoint.subVectors(point, this.center);
    const lengthSq = _toPoint.lengthSq();
    if (lengthSq > this.radius * this.radius) {
      const length = Math.sqrt(lengthSq);
      const missingRadiusHalf = (length - this.radius) * 0.5;
      this.center.add(_toPoint.multiplyScalar(missingRadiusHalf / length));
      this.radius += missingRadiusHalf;
    }
    return this;
  }
  union(sphere) {
    if (this.center.equals(sphere.center) === true) {
      _toFarthestPoint.set(0, 0, 1).multiplyScalar(sphere.radius);
    } else {
      _toFarthestPoint.subVectors(sphere.center, this.center).normalize().multiplyScalar(sphere.radius);
    }
    this.expandByPoint(_v1$6.copy(sphere.center).add(_toFarthestPoint));
    this.expandByPoint(_v1$6.copy(sphere.center).sub(_toFarthestPoint));
    return this;
  }
  equals(sphere) {
    return sphere.center.equals(this.center) && sphere.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
};
var _vector$a = /* @__PURE__ */ new Vector3();
var _segCenter = /* @__PURE__ */ new Vector3();
var _segDir = /* @__PURE__ */ new Vector3();
var _diff = /* @__PURE__ */ new Vector3();
var _edge1 = /* @__PURE__ */ new Vector3();
var _edge2 = /* @__PURE__ */ new Vector3();
var _normal$1 = /* @__PURE__ */ new Vector3();
var Ray = class {
  constructor(origin = new Vector3(), direction = new Vector3(0, 0, -1)) {
    this.origin = origin;
    this.direction = direction;
  }
  set(origin, direction) {
    this.origin.copy(origin);
    this.direction.copy(direction);
    return this;
  }
  copy(ray) {
    this.origin.copy(ray.origin);
    this.direction.copy(ray.direction);
    return this;
  }
  at(t, target) {
    return target.copy(this.direction).multiplyScalar(t).add(this.origin);
  }
  lookAt(v) {
    this.direction.copy(v).sub(this.origin).normalize();
    return this;
  }
  recast(t) {
    this.origin.copy(this.at(t, _vector$a));
    return this;
  }
  closestPointToPoint(point, target) {
    target.subVectors(point, this.origin);
    const directionDistance = target.dot(this.direction);
    if (directionDistance < 0) {
      return target.copy(this.origin);
    }
    return target.copy(this.direction).multiplyScalar(directionDistance).add(this.origin);
  }
  distanceToPoint(point) {
    return Math.sqrt(this.distanceSqToPoint(point));
  }
  distanceSqToPoint(point) {
    const directionDistance = _vector$a.subVectors(point, this.origin).dot(this.direction);
    if (directionDistance < 0) {
      return this.origin.distanceToSquared(point);
    }
    _vector$a.copy(this.direction).multiplyScalar(directionDistance).add(this.origin);
    return _vector$a.distanceToSquared(point);
  }
  distanceSqToSegment(v0, v1, optionalPointOnRay, optionalPointOnSegment) {
    _segCenter.copy(v0).add(v1).multiplyScalar(0.5);
    _segDir.copy(v1).sub(v0).normalize();
    _diff.copy(this.origin).sub(_segCenter);
    const segExtent = v0.distanceTo(v1) * 0.5;
    const a01 = -this.direction.dot(_segDir);
    const b0 = _diff.dot(this.direction);
    const b1 = -_diff.dot(_segDir);
    const c = _diff.lengthSq();
    const det = Math.abs(1 - a01 * a01);
    let s0, s1, sqrDist, extDet;
    if (det > 0) {
      s0 = a01 * b1 - b0;
      s1 = a01 * b0 - b1;
      extDet = segExtent * det;
      if (s0 >= 0) {
        if (s1 >= -extDet) {
          if (s1 <= extDet) {
            const invDet = 1 / det;
            s0 *= invDet;
            s1 *= invDet;
            sqrDist = s0 * (s0 + a01 * s1 + 2 * b0) + s1 * (a01 * s0 + s1 + 2 * b1) + c;
          } else {
            s1 = segExtent;
            s0 = Math.max(0, -(a01 * s1 + b0));
            sqrDist = -s0 * s0 + s1 * (s1 + 2 * b1) + c;
          }
        } else {
          s1 = -segExtent;
          s0 = Math.max(0, -(a01 * s1 + b0));
          sqrDist = -s0 * s0 + s1 * (s1 + 2 * b1) + c;
        }
      } else {
        if (s1 <= -extDet) {
          s0 = Math.max(0, -(-a01 * segExtent + b0));
          s1 = s0 > 0 ? -segExtent : Math.min(Math.max(-segExtent, -b1), segExtent);
          sqrDist = -s0 * s0 + s1 * (s1 + 2 * b1) + c;
        } else if (s1 <= extDet) {
          s0 = 0;
          s1 = Math.min(Math.max(-segExtent, -b1), segExtent);
          sqrDist = s1 * (s1 + 2 * b1) + c;
        } else {
          s0 = Math.max(0, -(a01 * segExtent + b0));
          s1 = s0 > 0 ? segExtent : Math.min(Math.max(-segExtent, -b1), segExtent);
          sqrDist = -s0 * s0 + s1 * (s1 + 2 * b1) + c;
        }
      }
    } else {
      s1 = a01 > 0 ? -segExtent : segExtent;
      s0 = Math.max(0, -(a01 * s1 + b0));
      sqrDist = -s0 * s0 + s1 * (s1 + 2 * b1) + c;
    }
    if (optionalPointOnRay) {
      optionalPointOnRay.copy(this.direction).multiplyScalar(s0).add(this.origin);
    }
    if (optionalPointOnSegment) {
      optionalPointOnSegment.copy(_segDir).multiplyScalar(s1).add(_segCenter);
    }
    return sqrDist;
  }
  intersectSphere(sphere, target) {
    _vector$a.subVectors(sphere.center, this.origin);
    const tca = _vector$a.dot(this.direction);
    const d2 = _vector$a.dot(_vector$a) - tca * tca;
    const radius2 = sphere.radius * sphere.radius;
    if (d2 > radius2)
      return null;
    const thc = Math.sqrt(radius2 - d2);
    const t0 = tca - thc;
    const t1 = tca + thc;
    if (t0 < 0 && t1 < 0)
      return null;
    if (t0 < 0)
      return this.at(t1, target);
    return this.at(t0, target);
  }
  intersectsSphere(sphere) {
    return this.distanceSqToPoint(sphere.center) <= sphere.radius * sphere.radius;
  }
  distanceToPlane(plane) {
    const denominator = plane.normal.dot(this.direction);
    if (denominator === 0) {
      if (plane.distanceToPoint(this.origin) === 0) {
        return 0;
      }
      return null;
    }
    const t = -(this.origin.dot(plane.normal) + plane.constant) / denominator;
    return t >= 0 ? t : null;
  }
  intersectPlane(plane, target) {
    const t = this.distanceToPlane(plane);
    if (t === null) {
      return null;
    }
    return this.at(t, target);
  }
  intersectsPlane(plane) {
    const distToPoint = plane.distanceToPoint(this.origin);
    if (distToPoint === 0) {
      return true;
    }
    const denominator = plane.normal.dot(this.direction);
    if (denominator * distToPoint < 0) {
      return true;
    }
    return false;
  }
  intersectBox(box, target) {
    let tmin, tmax, tymin, tymax, tzmin, tzmax;
    const invdirx = 1 / this.direction.x, invdiry = 1 / this.direction.y, invdirz = 1 / this.direction.z;
    const origin = this.origin;
    if (invdirx >= 0) {
      tmin = (box.min.x - origin.x) * invdirx;
      tmax = (box.max.x - origin.x) * invdirx;
    } else {
      tmin = (box.max.x - origin.x) * invdirx;
      tmax = (box.min.x - origin.x) * invdirx;
    }
    if (invdiry >= 0) {
      tymin = (box.min.y - origin.y) * invdiry;
      tymax = (box.max.y - origin.y) * invdiry;
    } else {
      tymin = (box.max.y - origin.y) * invdiry;
      tymax = (box.min.y - origin.y) * invdiry;
    }
    if (tmin > tymax || tymin > tmax)
      return null;
    if (tymin > tmin || tmin !== tmin)
      tmin = tymin;
    if (tymax < tmax || tmax !== tmax)
      tmax = tymax;
    if (invdirz >= 0) {
      tzmin = (box.min.z - origin.z) * invdirz;
      tzmax = (box.max.z - origin.z) * invdirz;
    } else {
      tzmin = (box.max.z - origin.z) * invdirz;
      tzmax = (box.min.z - origin.z) * invdirz;
    }
    if (tmin > tzmax || tzmin > tmax)
      return null;
    if (tzmin > tmin || tmin !== tmin)
      tmin = tzmin;
    if (tzmax < tmax || tmax !== tmax)
      tmax = tzmax;
    if (tmax < 0)
      return null;
    return this.at(tmin >= 0 ? tmin : tmax, target);
  }
  intersectsBox(box) {
    return this.intersectBox(box, _vector$a) !== null;
  }
  intersectTriangle(a, b, c, backfaceCulling, target) {
    _edge1.subVectors(b, a);
    _edge2.subVectors(c, a);
    _normal$1.crossVectors(_edge1, _edge2);
    let DdN = this.direction.dot(_normal$1);
    let sign2;
    if (DdN > 0) {
      if (backfaceCulling)
        return null;
      sign2 = 1;
    } else if (DdN < 0) {
      sign2 = -1;
      DdN = -DdN;
    } else {
      return null;
    }
    _diff.subVectors(this.origin, a);
    const DdQxE2 = sign2 * this.direction.dot(_edge2.crossVectors(_diff, _edge2));
    if (DdQxE2 < 0) {
      return null;
    }
    const DdE1xQ = sign2 * this.direction.dot(_edge1.cross(_diff));
    if (DdE1xQ < 0) {
      return null;
    }
    if (DdQxE2 + DdE1xQ > DdN) {
      return null;
    }
    const QdN = -sign2 * _diff.dot(_normal$1);
    if (QdN < 0) {
      return null;
    }
    return this.at(QdN / DdN, target);
  }
  applyMatrix4(matrix4) {
    this.origin.applyMatrix4(matrix4);
    this.direction.transformDirection(matrix4);
    return this;
  }
  equals(ray) {
    return ray.origin.equals(this.origin) && ray.direction.equals(this.direction);
  }
  clone() {
    return new this.constructor().copy(this);
  }
};
var Matrix4 = class {
  constructor() {
    this.elements = [
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ];
    if (arguments.length > 0) {
      console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.");
    }
  }
  set(n11, n12, n13, n14, n21, n22, n23, n24, n31, n32, n33, n34, n41, n42, n43, n44) {
    const te = this.elements;
    te[0] = n11;
    te[4] = n12;
    te[8] = n13;
    te[12] = n14;
    te[1] = n21;
    te[5] = n22;
    te[9] = n23;
    te[13] = n24;
    te[2] = n31;
    te[6] = n32;
    te[10] = n33;
    te[14] = n34;
    te[3] = n41;
    te[7] = n42;
    te[11] = n43;
    te[15] = n44;
    return this;
  }
  identity() {
    this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    return this;
  }
  clone() {
    return new Matrix4().fromArray(this.elements);
  }
  copy(m) {
    const te = this.elements;
    const me = m.elements;
    te[0] = me[0];
    te[1] = me[1];
    te[2] = me[2];
    te[3] = me[3];
    te[4] = me[4];
    te[5] = me[5];
    te[6] = me[6];
    te[7] = me[7];
    te[8] = me[8];
    te[9] = me[9];
    te[10] = me[10];
    te[11] = me[11];
    te[12] = me[12];
    te[13] = me[13];
    te[14] = me[14];
    te[15] = me[15];
    return this;
  }
  copyPosition(m) {
    const te = this.elements, me = m.elements;
    te[12] = me[12];
    te[13] = me[13];
    te[14] = me[14];
    return this;
  }
  setFromMatrix3(m) {
    const me = m.elements;
    this.set(me[0], me[3], me[6], 0, me[1], me[4], me[7], 0, me[2], me[5], me[8], 0, 0, 0, 0, 1);
    return this;
  }
  extractBasis(xAxis, yAxis, zAxis) {
    xAxis.setFromMatrixColumn(this, 0);
    yAxis.setFromMatrixColumn(this, 1);
    zAxis.setFromMatrixColumn(this, 2);
    return this;
  }
  makeBasis(xAxis, yAxis, zAxis) {
    this.set(xAxis.x, yAxis.x, zAxis.x, 0, xAxis.y, yAxis.y, zAxis.y, 0, xAxis.z, yAxis.z, zAxis.z, 0, 0, 0, 0, 1);
    return this;
  }
  extractRotation(m) {
    const te = this.elements;
    const me = m.elements;
    const scaleX = 1 / _v1$5.setFromMatrixColumn(m, 0).length();
    const scaleY = 1 / _v1$5.setFromMatrixColumn(m, 1).length();
    const scaleZ = 1 / _v1$5.setFromMatrixColumn(m, 2).length();
    te[0] = me[0] * scaleX;
    te[1] = me[1] * scaleX;
    te[2] = me[2] * scaleX;
    te[3] = 0;
    te[4] = me[4] * scaleY;
    te[5] = me[5] * scaleY;
    te[6] = me[6] * scaleY;
    te[7] = 0;
    te[8] = me[8] * scaleZ;
    te[9] = me[9] * scaleZ;
    te[10] = me[10] * scaleZ;
    te[11] = 0;
    te[12] = 0;
    te[13] = 0;
    te[14] = 0;
    te[15] = 1;
    return this;
  }
  makeRotationFromEuler(euler) {
    if (!(euler && euler.isEuler)) {
      console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");
    }
    const te = this.elements;
    const x = euler.x, y = euler.y, z = euler.z;
    const a = Math.cos(x), b = Math.sin(x);
    const c = Math.cos(y), d = Math.sin(y);
    const e = Math.cos(z), f = Math.sin(z);
    if (euler.order === "XYZ") {
      const ae = a * e, af = a * f, be = b * e, bf = b * f;
      te[0] = c * e;
      te[4] = -c * f;
      te[8] = d;
      te[1] = af + be * d;
      te[5] = ae - bf * d;
      te[9] = -b * c;
      te[2] = bf - ae * d;
      te[6] = be + af * d;
      te[10] = a * c;
    } else if (euler.order === "YXZ") {
      const ce = c * e, cf = c * f, de = d * e, df = d * f;
      te[0] = ce + df * b;
      te[4] = de * b - cf;
      te[8] = a * d;
      te[1] = a * f;
      te[5] = a * e;
      te[9] = -b;
      te[2] = cf * b - de;
      te[6] = df + ce * b;
      te[10] = a * c;
    } else if (euler.order === "ZXY") {
      const ce = c * e, cf = c * f, de = d * e, df = d * f;
      te[0] = ce - df * b;
      te[4] = -a * f;
      te[8] = de + cf * b;
      te[1] = cf + de * b;
      te[5] = a * e;
      te[9] = df - ce * b;
      te[2] = -a * d;
      te[6] = b;
      te[10] = a * c;
    } else if (euler.order === "ZYX") {
      const ae = a * e, af = a * f, be = b * e, bf = b * f;
      te[0] = c * e;
      te[4] = be * d - af;
      te[8] = ae * d + bf;
      te[1] = c * f;
      te[5] = bf * d + ae;
      te[9] = af * d - be;
      te[2] = -d;
      te[6] = b * c;
      te[10] = a * c;
    } else if (euler.order === "YZX") {
      const ac = a * c, ad = a * d, bc = b * c, bd = b * d;
      te[0] = c * e;
      te[4] = bd - ac * f;
      te[8] = bc * f + ad;
      te[1] = f;
      te[5] = a * e;
      te[9] = -b * e;
      te[2] = -d * e;
      te[6] = ad * f + bc;
      te[10] = ac - bd * f;
    } else if (euler.order === "XZY") {
      const ac = a * c, ad = a * d, bc = b * c, bd = b * d;
      te[0] = c * e;
      te[4] = -f;
      te[8] = d * e;
      te[1] = ac * f + bd;
      te[5] = a * e;
      te[9] = ad * f - bc;
      te[2] = bc * f - ad;
      te[6] = b * e;
      te[10] = bd * f + ac;
    }
    te[3] = 0;
    te[7] = 0;
    te[11] = 0;
    te[12] = 0;
    te[13] = 0;
    te[14] = 0;
    te[15] = 1;
    return this;
  }
  makeRotationFromQuaternion(q) {
    return this.compose(_zero, q, _one);
  }
  lookAt(eye, target, up) {
    const te = this.elements;
    _z.subVectors(eye, target);
    if (_z.lengthSq() === 0) {
      _z.z = 1;
    }
    _z.normalize();
    _x.crossVectors(up, _z);
    if (_x.lengthSq() === 0) {
      if (Math.abs(up.z) === 1) {
        _z.x += 1e-4;
      } else {
        _z.z += 1e-4;
      }
      _z.normalize();
      _x.crossVectors(up, _z);
    }
    _x.normalize();
    _y.crossVectors(_z, _x);
    te[0] = _x.x;
    te[4] = _y.x;
    te[8] = _z.x;
    te[1] = _x.y;
    te[5] = _y.y;
    te[9] = _z.y;
    te[2] = _x.z;
    te[6] = _y.z;
    te[10] = _z.z;
    return this;
  }
  multiply(m, n) {
    if (n !== void 0) {
      console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead.");
      return this.multiplyMatrices(m, n);
    }
    return this.multiplyMatrices(this, m);
  }
  premultiply(m) {
    return this.multiplyMatrices(m, this);
  }
  multiplyMatrices(a, b) {
    const ae = a.elements;
    const be = b.elements;
    const te = this.elements;
    const a11 = ae[0], a12 = ae[4], a13 = ae[8], a14 = ae[12];
    const a21 = ae[1], a22 = ae[5], a23 = ae[9], a24 = ae[13];
    const a31 = ae[2], a32 = ae[6], a33 = ae[10], a34 = ae[14];
    const a41 = ae[3], a42 = ae[7], a43 = ae[11], a44 = ae[15];
    const b11 = be[0], b12 = be[4], b13 = be[8], b14 = be[12];
    const b21 = be[1], b22 = be[5], b23 = be[9], b24 = be[13];
    const b31 = be[2], b32 = be[6], b33 = be[10], b34 = be[14];
    const b41 = be[3], b42 = be[7], b43 = be[11], b44 = be[15];
    te[0] = a11 * b11 + a12 * b21 + a13 * b31 + a14 * b41;
    te[4] = a11 * b12 + a12 * b22 + a13 * b32 + a14 * b42;
    te[8] = a11 * b13 + a12 * b23 + a13 * b33 + a14 * b43;
    te[12] = a11 * b14 + a12 * b24 + a13 * b34 + a14 * b44;
    te[1] = a21 * b11 + a22 * b21 + a23 * b31 + a24 * b41;
    te[5] = a21 * b12 + a22 * b22 + a23 * b32 + a24 * b42;
    te[9] = a21 * b13 + a22 * b23 + a23 * b33 + a24 * b43;
    te[13] = a21 * b14 + a22 * b24 + a23 * b34 + a24 * b44;
    te[2] = a31 * b11 + a32 * b21 + a33 * b31 + a34 * b41;
    te[6] = a31 * b12 + a32 * b22 + a33 * b32 + a34 * b42;
    te[10] = a31 * b13 + a32 * b23 + a33 * b33 + a34 * b43;
    te[14] = a31 * b14 + a32 * b24 + a33 * b34 + a34 * b44;
    te[3] = a41 * b11 + a42 * b21 + a43 * b31 + a44 * b41;
    te[7] = a41 * b12 + a42 * b22 + a43 * b32 + a44 * b42;
    te[11] = a41 * b13 + a42 * b23 + a43 * b33 + a44 * b43;
    te[15] = a41 * b14 + a42 * b24 + a43 * b34 + a44 * b44;
    return this;
  }
  multiplyScalar(s) {
    const te = this.elements;
    te[0] *= s;
    te[4] *= s;
    te[8] *= s;
    te[12] *= s;
    te[1] *= s;
    te[5] *= s;
    te[9] *= s;
    te[13] *= s;
    te[2] *= s;
    te[6] *= s;
    te[10] *= s;
    te[14] *= s;
    te[3] *= s;
    te[7] *= s;
    te[11] *= s;
    te[15] *= s;
    return this;
  }
  determinant() {
    const te = this.elements;
    const n11 = te[0], n12 = te[4], n13 = te[8], n14 = te[12];
    const n21 = te[1], n22 = te[5], n23 = te[9], n24 = te[13];
    const n31 = te[2], n32 = te[6], n33 = te[10], n34 = te[14];
    const n41 = te[3], n42 = te[7], n43 = te[11], n44 = te[15];
    return n41 * (+n14 * n23 * n32 - n13 * n24 * n32 - n14 * n22 * n33 + n12 * n24 * n33 + n13 * n22 * n34 - n12 * n23 * n34) + n42 * (+n11 * n23 * n34 - n11 * n24 * n33 + n14 * n21 * n33 - n13 * n21 * n34 + n13 * n24 * n31 - n14 * n23 * n31) + n43 * (+n11 * n24 * n32 - n11 * n22 * n34 - n14 * n21 * n32 + n12 * n21 * n34 + n14 * n22 * n31 - n12 * n24 * n31) + n44 * (-n13 * n22 * n31 - n11 * n23 * n32 + n11 * n22 * n33 + n13 * n21 * n32 - n12 * n21 * n33 + n12 * n23 * n31);
  }
  transpose() {
    const te = this.elements;
    let tmp2;
    tmp2 = te[1];
    te[1] = te[4];
    te[4] = tmp2;
    tmp2 = te[2];
    te[2] = te[8];
    te[8] = tmp2;
    tmp2 = te[6];
    te[6] = te[9];
    te[9] = tmp2;
    tmp2 = te[3];
    te[3] = te[12];
    te[12] = tmp2;
    tmp2 = te[7];
    te[7] = te[13];
    te[13] = tmp2;
    tmp2 = te[11];
    te[11] = te[14];
    te[14] = tmp2;
    return this;
  }
  setPosition(x, y, z) {
    const te = this.elements;
    if (x.isVector3) {
      te[12] = x.x;
      te[13] = x.y;
      te[14] = x.z;
    } else {
      te[12] = x;
      te[13] = y;
      te[14] = z;
    }
    return this;
  }
  invert() {
    const te = this.elements, n11 = te[0], n21 = te[1], n31 = te[2], n41 = te[3], n12 = te[4], n22 = te[5], n32 = te[6], n42 = te[7], n13 = te[8], n23 = te[9], n33 = te[10], n43 = te[11], n14 = te[12], n24 = te[13], n34 = te[14], n44 = te[15], t11 = n23 * n34 * n42 - n24 * n33 * n42 + n24 * n32 * n43 - n22 * n34 * n43 - n23 * n32 * n44 + n22 * n33 * n44, t12 = n14 * n33 * n42 - n13 * n34 * n42 - n14 * n32 * n43 + n12 * n34 * n43 + n13 * n32 * n44 - n12 * n33 * n44, t13 = n13 * n24 * n42 - n14 * n23 * n42 + n14 * n22 * n43 - n12 * n24 * n43 - n13 * n22 * n44 + n12 * n23 * n44, t14 = n14 * n23 * n32 - n13 * n24 * n32 - n14 * n22 * n33 + n12 * n24 * n33 + n13 * n22 * n34 - n12 * n23 * n34;
    const det = n11 * t11 + n21 * t12 + n31 * t13 + n41 * t14;
    if (det === 0)
      return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const detInv = 1 / det;
    te[0] = t11 * detInv;
    te[1] = (n24 * n33 * n41 - n23 * n34 * n41 - n24 * n31 * n43 + n21 * n34 * n43 + n23 * n31 * n44 - n21 * n33 * n44) * detInv;
    te[2] = (n22 * n34 * n41 - n24 * n32 * n41 + n24 * n31 * n42 - n21 * n34 * n42 - n22 * n31 * n44 + n21 * n32 * n44) * detInv;
    te[3] = (n23 * n32 * n41 - n22 * n33 * n41 - n23 * n31 * n42 + n21 * n33 * n42 + n22 * n31 * n43 - n21 * n32 * n43) * detInv;
    te[4] = t12 * detInv;
    te[5] = (n13 * n34 * n41 - n14 * n33 * n41 + n14 * n31 * n43 - n11 * n34 * n43 - n13 * n31 * n44 + n11 * n33 * n44) * detInv;
    te[6] = (n14 * n32 * n41 - n12 * n34 * n41 - n14 * n31 * n42 + n11 * n34 * n42 + n12 * n31 * n44 - n11 * n32 * n44) * detInv;
    te[7] = (n12 * n33 * n41 - n13 * n32 * n41 + n13 * n31 * n42 - n11 * n33 * n42 - n12 * n31 * n43 + n11 * n32 * n43) * detInv;
    te[8] = t13 * detInv;
    te[9] = (n14 * n23 * n41 - n13 * n24 * n41 - n14 * n21 * n43 + n11 * n24 * n43 + n13 * n21 * n44 - n11 * n23 * n44) * detInv;
    te[10] = (n12 * n24 * n41 - n14 * n22 * n41 + n14 * n21 * n42 - n11 * n24 * n42 - n12 * n21 * n44 + n11 * n22 * n44) * detInv;
    te[11] = (n13 * n22 * n41 - n12 * n23 * n41 - n13 * n21 * n42 + n11 * n23 * n42 + n12 * n21 * n43 - n11 * n22 * n43) * detInv;
    te[12] = t14 * detInv;
    te[13] = (n13 * n24 * n31 - n14 * n23 * n31 + n14 * n21 * n33 - n11 * n24 * n33 - n13 * n21 * n34 + n11 * n23 * n34) * detInv;
    te[14] = (n14 * n22 * n31 - n12 * n24 * n31 - n14 * n21 * n32 + n11 * n24 * n32 + n12 * n21 * n34 - n11 * n22 * n34) * detInv;
    te[15] = (n12 * n23 * n31 - n13 * n22 * n31 + n13 * n21 * n32 - n11 * n23 * n32 - n12 * n21 * n33 + n11 * n22 * n33) * detInv;
    return this;
  }
  scale(v) {
    const te = this.elements;
    const x = v.x, y = v.y, z = v.z;
    te[0] *= x;
    te[4] *= y;
    te[8] *= z;
    te[1] *= x;
    te[5] *= y;
    te[9] *= z;
    te[2] *= x;
    te[6] *= y;
    te[10] *= z;
    te[3] *= x;
    te[7] *= y;
    te[11] *= z;
    return this;
  }
  getMaxScaleOnAxis() {
    const te = this.elements;
    const scaleXSq = te[0] * te[0] + te[1] * te[1] + te[2] * te[2];
    const scaleYSq = te[4] * te[4] + te[5] * te[5] + te[6] * te[6];
    const scaleZSq = te[8] * te[8] + te[9] * te[9] + te[10] * te[10];
    return Math.sqrt(Math.max(scaleXSq, scaleYSq, scaleZSq));
  }
  makeTranslation(x, y, z) {
    this.set(1, 0, 0, x, 0, 1, 0, y, 0, 0, 1, z, 0, 0, 0, 1);
    return this;
  }
  makeRotationX(theta) {
    const c = Math.cos(theta), s = Math.sin(theta);
    this.set(1, 0, 0, 0, 0, c, -s, 0, 0, s, c, 0, 0, 0, 0, 1);
    return this;
  }
  makeRotationY(theta) {
    const c = Math.cos(theta), s = Math.sin(theta);
    this.set(c, 0, s, 0, 0, 1, 0, 0, -s, 0, c, 0, 0, 0, 0, 1);
    return this;
  }
  makeRotationZ(theta) {
    const c = Math.cos(theta), s = Math.sin(theta);
    this.set(c, -s, 0, 0, s, c, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    return this;
  }
  makeRotationAxis(axis, angle) {
    const c = Math.cos(angle);
    const s = Math.sin(angle);
    const t = 1 - c;
    const x = axis.x, y = axis.y, z = axis.z;
    const tx = t * x, ty = t * y;
    this.set(tx * x + c, tx * y - s * z, tx * z + s * y, 0, tx * y + s * z, ty * y + c, ty * z - s * x, 0, tx * z - s * y, ty * z + s * x, t * z * z + c, 0, 0, 0, 0, 1);
    return this;
  }
  makeScale(x, y, z) {
    this.set(x, 0, 0, 0, 0, y, 0, 0, 0, 0, z, 0, 0, 0, 0, 1);
    return this;
  }
  makeShear(xy, xz, yx, yz, zx, zy) {
    this.set(1, yx, zx, 0, xy, 1, zy, 0, xz, yz, 1, 0, 0, 0, 0, 1);
    return this;
  }
  compose(position, quaternion, scale) {
    const te = this.elements;
    const x = quaternion._x, y = quaternion._y, z = quaternion._z, w = quaternion._w;
    const x2 = x + x, y2 = y + y, z2 = z + z;
    const xx = x * x2, xy = x * y2, xz = x * z2;
    const yy = y * y2, yz = y * z2, zz = z * z2;
    const wx = w * x2, wy = w * y2, wz = w * z2;
    const sx = scale.x, sy = scale.y, sz = scale.z;
    te[0] = (1 - (yy + zz)) * sx;
    te[1] = (xy + wz) * sx;
    te[2] = (xz - wy) * sx;
    te[3] = 0;
    te[4] = (xy - wz) * sy;
    te[5] = (1 - (xx + zz)) * sy;
    te[6] = (yz + wx) * sy;
    te[7] = 0;
    te[8] = (xz + wy) * sz;
    te[9] = (yz - wx) * sz;
    te[10] = (1 - (xx + yy)) * sz;
    te[11] = 0;
    te[12] = position.x;
    te[13] = position.y;
    te[14] = position.z;
    te[15] = 1;
    return this;
  }
  decompose(position, quaternion, scale) {
    const te = this.elements;
    let sx = _v1$5.set(te[0], te[1], te[2]).length();
    const sy = _v1$5.set(te[4], te[5], te[6]).length();
    const sz = _v1$5.set(te[8], te[9], te[10]).length();
    const det = this.determinant();
    if (det < 0)
      sx = -sx;
    position.x = te[12];
    position.y = te[13];
    position.z = te[14];
    _m1$2.copy(this);
    const invSX = 1 / sx;
    const invSY = 1 / sy;
    const invSZ = 1 / sz;
    _m1$2.elements[0] *= invSX;
    _m1$2.elements[1] *= invSX;
    _m1$2.elements[2] *= invSX;
    _m1$2.elements[4] *= invSY;
    _m1$2.elements[5] *= invSY;
    _m1$2.elements[6] *= invSY;
    _m1$2.elements[8] *= invSZ;
    _m1$2.elements[9] *= invSZ;
    _m1$2.elements[10] *= invSZ;
    quaternion.setFromRotationMatrix(_m1$2);
    scale.x = sx;
    scale.y = sy;
    scale.z = sz;
    return this;
  }
  makePerspective(left, right, top, bottom, near, far) {
    if (far === void 0) {
      console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");
    }
    const te = this.elements;
    const x = 2 * near / (right - left);
    const y = 2 * near / (top - bottom);
    const a = (right + left) / (right - left);
    const b = (top + bottom) / (top - bottom);
    const c = -(far + near) / (far - near);
    const d = -2 * far * near / (far - near);
    te[0] = x;
    te[4] = 0;
    te[8] = a;
    te[12] = 0;
    te[1] = 0;
    te[5] = y;
    te[9] = b;
    te[13] = 0;
    te[2] = 0;
    te[6] = 0;
    te[10] = c;
    te[14] = d;
    te[3] = 0;
    te[7] = 0;
    te[11] = -1;
    te[15] = 0;
    return this;
  }
  makeOrthographic(left, right, top, bottom, near, far) {
    const te = this.elements;
    const w = 1 / (right - left);
    const h = 1 / (top - bottom);
    const p = 1 / (far - near);
    const x = (right + left) * w;
    const y = (top + bottom) * h;
    const z = (far + near) * p;
    te[0] = 2 * w;
    te[4] = 0;
    te[8] = 0;
    te[12] = -x;
    te[1] = 0;
    te[5] = 2 * h;
    te[9] = 0;
    te[13] = -y;
    te[2] = 0;
    te[6] = 0;
    te[10] = -2 * p;
    te[14] = -z;
    te[3] = 0;
    te[7] = 0;
    te[11] = 0;
    te[15] = 1;
    return this;
  }
  equals(matrix) {
    const te = this.elements;
    const me = matrix.elements;
    for (let i = 0; i < 16; i++) {
      if (te[i] !== me[i])
        return false;
    }
    return true;
  }
  fromArray(array, offset = 0) {
    for (let i = 0; i < 16; i++) {
      this.elements[i] = array[i + offset];
    }
    return this;
  }
  toArray(array = [], offset = 0) {
    const te = this.elements;
    array[offset] = te[0];
    array[offset + 1] = te[1];
    array[offset + 2] = te[2];
    array[offset + 3] = te[3];
    array[offset + 4] = te[4];
    array[offset + 5] = te[5];
    array[offset + 6] = te[6];
    array[offset + 7] = te[7];
    array[offset + 8] = te[8];
    array[offset + 9] = te[9];
    array[offset + 10] = te[10];
    array[offset + 11] = te[11];
    array[offset + 12] = te[12];
    array[offset + 13] = te[13];
    array[offset + 14] = te[14];
    array[offset + 15] = te[15];
    return array;
  }
};
Matrix4.prototype.isMatrix4 = true;
var _v1$5 = /* @__PURE__ */ new Vector3();
var _m1$2 = /* @__PURE__ */ new Matrix4();
var _zero = /* @__PURE__ */ new Vector3(0, 0, 0);
var _one = /* @__PURE__ */ new Vector3(1, 1, 1);
var _x = /* @__PURE__ */ new Vector3();
var _y = /* @__PURE__ */ new Vector3();
var _z = /* @__PURE__ */ new Vector3();
var _matrix$1 = /* @__PURE__ */ new Matrix4();
var _quaternion$3 = /* @__PURE__ */ new Quaternion();
var Euler = class {
  constructor(x = 0, y = 0, z = 0, order = Euler.DefaultOrder) {
    this._x = x;
    this._y = y;
    this._z = z;
    this._order = order;
  }
  get x() {
    return this._x;
  }
  set x(value) {
    this._x = value;
    this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(value) {
    this._y = value;
    this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(value) {
    this._z = value;
    this._onChangeCallback();
  }
  get order() {
    return this._order;
  }
  set order(value) {
    this._order = value;
    this._onChangeCallback();
  }
  set(x, y, z, order = this._order) {
    this._x = x;
    this._y = y;
    this._z = z;
    this._order = order;
    this._onChangeCallback();
    return this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  copy(euler) {
    this._x = euler._x;
    this._y = euler._y;
    this._z = euler._z;
    this._order = euler._order;
    this._onChangeCallback();
    return this;
  }
  setFromRotationMatrix(m, order = this._order, update = true) {
    const te = m.elements;
    const m11 = te[0], m12 = te[4], m13 = te[8];
    const m21 = te[1], m22 = te[5], m23 = te[9];
    const m31 = te[2], m32 = te[6], m33 = te[10];
    switch (order) {
      case "XYZ":
        this._y = Math.asin(clamp(m13, -1, 1));
        if (Math.abs(m13) < 0.9999999) {
          this._x = Math.atan2(-m23, m33);
          this._z = Math.atan2(-m12, m11);
        } else {
          this._x = Math.atan2(m32, m22);
          this._z = 0;
        }
        break;
      case "YXZ":
        this._x = Math.asin(-clamp(m23, -1, 1));
        if (Math.abs(m23) < 0.9999999) {
          this._y = Math.atan2(m13, m33);
          this._z = Math.atan2(m21, m22);
        } else {
          this._y = Math.atan2(-m31, m11);
          this._z = 0;
        }
        break;
      case "ZXY":
        this._x = Math.asin(clamp(m32, -1, 1));
        if (Math.abs(m32) < 0.9999999) {
          this._y = Math.atan2(-m31, m33);
          this._z = Math.atan2(-m12, m22);
        } else {
          this._y = 0;
          this._z = Math.atan2(m21, m11);
        }
        break;
      case "ZYX":
        this._y = Math.asin(-clamp(m31, -1, 1));
        if (Math.abs(m31) < 0.9999999) {
          this._x = Math.atan2(m32, m33);
          this._z = Math.atan2(m21, m11);
        } else {
          this._x = 0;
          this._z = Math.atan2(-m12, m22);
        }
        break;
      case "YZX":
        this._z = Math.asin(clamp(m21, -1, 1));
        if (Math.abs(m21) < 0.9999999) {
          this._x = Math.atan2(-m23, m22);
          this._y = Math.atan2(-m31, m11);
        } else {
          this._x = 0;
          this._y = Math.atan2(m13, m33);
        }
        break;
      case "XZY":
        this._z = Math.asin(-clamp(m12, -1, 1));
        if (Math.abs(m12) < 0.9999999) {
          this._x = Math.atan2(m32, m22);
          this._y = Math.atan2(m13, m11);
        } else {
          this._x = Math.atan2(-m23, m33);
          this._y = 0;
        }
        break;
      default:
        console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + order);
    }
    this._order = order;
    if (update === true)
      this._onChangeCallback();
    return this;
  }
  setFromQuaternion(q, order, update) {
    _matrix$1.makeRotationFromQuaternion(q);
    return this.setFromRotationMatrix(_matrix$1, order, update);
  }
  setFromVector3(v, order = this._order) {
    return this.set(v.x, v.y, v.z, order);
  }
  reorder(newOrder) {
    _quaternion$3.setFromEuler(this);
    return this.setFromQuaternion(_quaternion$3, newOrder);
  }
  equals(euler) {
    return euler._x === this._x && euler._y === this._y && euler._z === this._z && euler._order === this._order;
  }
  fromArray(array) {
    this._x = array[0];
    this._y = array[1];
    this._z = array[2];
    if (array[3] !== void 0)
      this._order = array[3];
    this._onChangeCallback();
    return this;
  }
  toArray(array = [], offset = 0) {
    array[offset] = this._x;
    array[offset + 1] = this._y;
    array[offset + 2] = this._z;
    array[offset + 3] = this._order;
    return array;
  }
  _onChange(callback) {
    this._onChangeCallback = callback;
    return this;
  }
  _onChangeCallback() {
  }
};
Euler.prototype.isEuler = true;
Euler.DefaultOrder = "XYZ";
Euler.RotationOrders = ["XYZ", "YZX", "ZXY", "XZY", "YXZ", "ZYX"];
var Layers = class {
  constructor() {
    this.mask = 1 | 0;
  }
  set(channel) {
    this.mask = (1 << channel | 0) >>> 0;
  }
  enable(channel) {
    this.mask |= 1 << channel | 0;
  }
  enableAll() {
    this.mask = 4294967295 | 0;
  }
  toggle(channel) {
    this.mask ^= 1 << channel | 0;
  }
  disable(channel) {
    this.mask &= ~(1 << channel | 0);
  }
  disableAll() {
    this.mask = 0;
  }
  test(layers) {
    return (this.mask & layers.mask) !== 0;
  }
  isEnabled(channel) {
    return (this.mask & (1 << channel | 0)) !== 0;
  }
};
var _object3DId = 0;
var _v1$4 = /* @__PURE__ */ new Vector3();
var _q1 = /* @__PURE__ */ new Quaternion();
var _m1$1 = /* @__PURE__ */ new Matrix4();
var _target = /* @__PURE__ */ new Vector3();
var _position$3 = /* @__PURE__ */ new Vector3();
var _scale$2 = /* @__PURE__ */ new Vector3();
var _quaternion$2 = /* @__PURE__ */ new Quaternion();
var _xAxis = /* @__PURE__ */ new Vector3(1, 0, 0);
var _yAxis = /* @__PURE__ */ new Vector3(0, 1, 0);
var _zAxis = /* @__PURE__ */ new Vector3(0, 0, 1);
var _addedEvent = { type: "added" };
var _removedEvent = { type: "removed" };
var Object3D = class extends EventDispatcher {
  constructor() {
    super();
    Object.defineProperty(this, "id", { value: _object3DId++ });
    this.uuid = generateUUID();
    this.name = "";
    this.type = "Object3D";
    this.parent = null;
    this.children = [];
    this.up = Object3D.DefaultUp.clone();
    const position = new Vector3();
    const rotation = new Euler();
    const quaternion = new Quaternion();
    const scale = new Vector3(1, 1, 1);
    function onRotationChange() {
      quaternion.setFromEuler(rotation, false);
    }
    function onQuaternionChange() {
      rotation.setFromQuaternion(quaternion, void 0, false);
    }
    rotation._onChange(onRotationChange);
    quaternion._onChange(onQuaternionChange);
    Object.defineProperties(this, {
      position: {
        configurable: true,
        enumerable: true,
        value: position
      },
      rotation: {
        configurable: true,
        enumerable: true,
        value: rotation
      },
      quaternion: {
        configurable: true,
        enumerable: true,
        value: quaternion
      },
      scale: {
        configurable: true,
        enumerable: true,
        value: scale
      },
      modelViewMatrix: {
        value: new Matrix4()
      },
      normalMatrix: {
        value: new Matrix3()
      }
    });
    this.matrix = new Matrix4();
    this.matrixWorld = new Matrix4();
    this.matrixAutoUpdate = Object3D.DefaultMatrixAutoUpdate;
    this.matrixWorldNeedsUpdate = false;
    this.layers = new Layers();
    this.visible = true;
    this.castShadow = false;
    this.receiveShadow = false;
    this.frustumCulled = true;
    this.renderOrder = 0;
    this.animations = [];
    this.userData = {};
  }
  onBeforeRender() {
  }
  onAfterRender() {
  }
  applyMatrix4(matrix) {
    if (this.matrixAutoUpdate)
      this.updateMatrix();
    this.matrix.premultiply(matrix);
    this.matrix.decompose(this.position, this.quaternion, this.scale);
  }
  applyQuaternion(q) {
    this.quaternion.premultiply(q);
    return this;
  }
  setRotationFromAxisAngle(axis, angle) {
    this.quaternion.setFromAxisAngle(axis, angle);
  }
  setRotationFromEuler(euler) {
    this.quaternion.setFromEuler(euler, true);
  }
  setRotationFromMatrix(m) {
    this.quaternion.setFromRotationMatrix(m);
  }
  setRotationFromQuaternion(q) {
    this.quaternion.copy(q);
  }
  rotateOnAxis(axis, angle) {
    _q1.setFromAxisAngle(axis, angle);
    this.quaternion.multiply(_q1);
    return this;
  }
  rotateOnWorldAxis(axis, angle) {
    _q1.setFromAxisAngle(axis, angle);
    this.quaternion.premultiply(_q1);
    return this;
  }
  rotateX(angle) {
    return this.rotateOnAxis(_xAxis, angle);
  }
  rotateY(angle) {
    return this.rotateOnAxis(_yAxis, angle);
  }
  rotateZ(angle) {
    return this.rotateOnAxis(_zAxis, angle);
  }
  translateOnAxis(axis, distance) {
    _v1$4.copy(axis).applyQuaternion(this.quaternion);
    this.position.add(_v1$4.multiplyScalar(distance));
    return this;
  }
  translateX(distance) {
    return this.translateOnAxis(_xAxis, distance);
  }
  translateY(distance) {
    return this.translateOnAxis(_yAxis, distance);
  }
  translateZ(distance) {
    return this.translateOnAxis(_zAxis, distance);
  }
  localToWorld(vector) {
    return vector.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(vector) {
    return vector.applyMatrix4(_m1$1.copy(this.matrixWorld).invert());
  }
  lookAt(x, y, z) {
    if (x.isVector3) {
      _target.copy(x);
    } else {
      _target.set(x, y, z);
    }
    const parent = this.parent;
    this.updateWorldMatrix(true, false);
    _position$3.setFromMatrixPosition(this.matrixWorld);
    if (this.isCamera || this.isLight) {
      _m1$1.lookAt(_position$3, _target, this.up);
    } else {
      _m1$1.lookAt(_target, _position$3, this.up);
    }
    this.quaternion.setFromRotationMatrix(_m1$1);
    if (parent) {
      _m1$1.extractRotation(parent.matrixWorld);
      _q1.setFromRotationMatrix(_m1$1);
      this.quaternion.premultiply(_q1.invert());
    }
  }
  add(object) {
    if (arguments.length > 1) {
      for (let i = 0; i < arguments.length; i++) {
        this.add(arguments[i]);
      }
      return this;
    }
    if (object === this) {
      console.error("THREE.Object3D.add: object can't be added as a child of itself.", object);
      return this;
    }
    if (object && object.isObject3D) {
      if (object.parent !== null) {
        object.parent.remove(object);
      }
      object.parent = this;
      this.children.push(object);
      object.dispatchEvent(_addedEvent);
    } else {
      console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", object);
    }
    return this;
  }
  remove(object) {
    if (arguments.length > 1) {
      for (let i = 0; i < arguments.length; i++) {
        this.remove(arguments[i]);
      }
      return this;
    }
    const index = this.children.indexOf(object);
    if (index !== -1) {
      object.parent = null;
      this.children.splice(index, 1);
      object.dispatchEvent(_removedEvent);
    }
    return this;
  }
  removeFromParent() {
    const parent = this.parent;
    if (parent !== null) {
      parent.remove(this);
    }
    return this;
  }
  clear() {
    for (let i = 0; i < this.children.length; i++) {
      const object = this.children[i];
      object.parent = null;
      object.dispatchEvent(_removedEvent);
    }
    this.children.length = 0;
    return this;
  }
  attach(object) {
    this.updateWorldMatrix(true, false);
    _m1$1.copy(this.matrixWorld).invert();
    if (object.parent !== null) {
      object.parent.updateWorldMatrix(true, false);
      _m1$1.multiply(object.parent.matrixWorld);
    }
    object.applyMatrix4(_m1$1);
    this.add(object);
    object.updateWorldMatrix(false, true);
    return this;
  }
  getObjectById(id) {
    return this.getObjectByProperty("id", id);
  }
  getObjectByName(name) {
    return this.getObjectByProperty("name", name);
  }
  getObjectByProperty(name, value) {
    if (this[name] === value)
      return this;
    for (let i = 0, l = this.children.length; i < l; i++) {
      const child = this.children[i];
      const object = child.getObjectByProperty(name, value);
      if (object !== void 0) {
        return object;
      }
    }
    return void 0;
  }
  getWorldPosition(target) {
    this.updateWorldMatrix(true, false);
    return target.setFromMatrixPosition(this.matrixWorld);
  }
  getWorldQuaternion(target) {
    this.updateWorldMatrix(true, false);
    this.matrixWorld.decompose(_position$3, target, _scale$2);
    return target;
  }
  getWorldScale(target) {
    this.updateWorldMatrix(true, false);
    this.matrixWorld.decompose(_position$3, _quaternion$2, target);
    return target;
  }
  getWorldDirection(target) {
    this.updateWorldMatrix(true, false);
    const e = this.matrixWorld.elements;
    return target.set(e[8], e[9], e[10]).normalize();
  }
  raycast() {
  }
  traverse(callback) {
    callback(this);
    const children = this.children;
    for (let i = 0, l = children.length; i < l; i++) {
      children[i].traverse(callback);
    }
  }
  traverseVisible(callback) {
    if (this.visible === false)
      return;
    callback(this);
    const children = this.children;
    for (let i = 0, l = children.length; i < l; i++) {
      children[i].traverseVisible(callback);
    }
  }
  traverseAncestors(callback) {
    const parent = this.parent;
    if (parent !== null) {
      callback(parent);
      parent.traverseAncestors(callback);
    }
  }
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale);
    this.matrixWorldNeedsUpdate = true;
  }
  updateMatrixWorld(force) {
    if (this.matrixAutoUpdate)
      this.updateMatrix();
    if (this.matrixWorldNeedsUpdate || force) {
      if (this.parent === null) {
        this.matrixWorld.copy(this.matrix);
      } else {
        this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix);
      }
      this.matrixWorldNeedsUpdate = false;
      force = true;
    }
    const children = this.children;
    for (let i = 0, l = children.length; i < l; i++) {
      children[i].updateMatrixWorld(force);
    }
  }
  updateWorldMatrix(updateParents, updateChildren) {
    const parent = this.parent;
    if (updateParents === true && parent !== null) {
      parent.updateWorldMatrix(true, false);
    }
    if (this.matrixAutoUpdate)
      this.updateMatrix();
    if (this.parent === null) {
      this.matrixWorld.copy(this.matrix);
    } else {
      this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix);
    }
    if (updateChildren === true) {
      const children = this.children;
      for (let i = 0, l = children.length; i < l; i++) {
        children[i].updateWorldMatrix(false, true);
      }
    }
  }
  toJSON(meta) {
    const isRootObject = meta === void 0 || typeof meta === "string";
    const output = {};
    if (isRootObject) {
      meta = {
        geometries: {},
        materials: {},
        textures: {},
        images: {},
        shapes: {},
        skeletons: {},
        animations: {},
        nodes: {}
      };
      output.metadata = {
        version: 4.5,
        type: "Object",
        generator: "Object3D.toJSON"
      };
    }
    const object = {};
    object.uuid = this.uuid;
    object.type = this.type;
    if (this.name !== "")
      object.name = this.name;
    if (this.castShadow === true)
      object.castShadow = true;
    if (this.receiveShadow === true)
      object.receiveShadow = true;
    if (this.visible === false)
      object.visible = false;
    if (this.frustumCulled === false)
      object.frustumCulled = false;
    if (this.renderOrder !== 0)
      object.renderOrder = this.renderOrder;
    if (JSON.stringify(this.userData) !== "{}")
      object.userData = this.userData;
    object.layers = this.layers.mask;
    object.matrix = this.matrix.toArray();
    if (this.matrixAutoUpdate === false)
      object.matrixAutoUpdate = false;
    if (this.isInstancedMesh) {
      object.type = "InstancedMesh";
      object.count = this.count;
      object.instanceMatrix = this.instanceMatrix.toJSON();
      if (this.instanceColor !== null)
        object.instanceColor = this.instanceColor.toJSON();
    }
    function serialize(library, element) {
      if (library[element.uuid] === void 0) {
        library[element.uuid] = element.toJSON(meta);
      }
      return element.uuid;
    }
    if (this.isScene) {
      if (this.background) {
        if (this.background.isColor) {
          object.background = this.background.toJSON();
        } else if (this.background.isTexture) {
          object.background = this.background.toJSON(meta).uuid;
        }
      }
      if (this.environment && this.environment.isTexture) {
        object.environment = this.environment.toJSON(meta).uuid;
      }
    } else if (this.isMesh || this.isLine || this.isPoints) {
      object.geometry = serialize(meta.geometries, this.geometry);
      const parameters = this.geometry.parameters;
      if (parameters !== void 0 && parameters.shapes !== void 0) {
        const shapes = parameters.shapes;
        if (Array.isArray(shapes)) {
          for (let i = 0, l = shapes.length; i < l; i++) {
            const shape = shapes[i];
            serialize(meta.shapes, shape);
          }
        } else {
          serialize(meta.shapes, shapes);
        }
      }
    }
    if (this.isSkinnedMesh) {
      object.bindMode = this.bindMode;
      object.bindMatrix = this.bindMatrix.toArray();
      if (this.skeleton !== void 0) {
        serialize(meta.skeletons, this.skeleton);
        object.skeleton = this.skeleton.uuid;
      }
    }
    if (this.material !== void 0) {
      if (Array.isArray(this.material)) {
        const uuids = [];
        for (let i = 0, l = this.material.length; i < l; i++) {
          uuids.push(serialize(meta.materials, this.material[i]));
        }
        object.material = uuids;
      } else {
        object.material = serialize(meta.materials, this.material);
      }
    }
    if (this.children.length > 0) {
      object.children = [];
      for (let i = 0; i < this.children.length; i++) {
        object.children.push(this.children[i].toJSON(meta).object);
      }
    }
    if (this.animations.length > 0) {
      object.animations = [];
      for (let i = 0; i < this.animations.length; i++) {
        const animation = this.animations[i];
        object.animations.push(serialize(meta.animations, animation));
      }
    }
    if (isRootObject) {
      const geometries = extractFromCache(meta.geometries);
      const materials = extractFromCache(meta.materials);
      const textures = extractFromCache(meta.textures);
      const images = extractFromCache(meta.images);
      const shapes = extractFromCache(meta.shapes);
      const skeletons = extractFromCache(meta.skeletons);
      const animations = extractFromCache(meta.animations);
      const nodes = extractFromCache(meta.nodes);
      if (geometries.length > 0)
        output.geometries = geometries;
      if (materials.length > 0)
        output.materials = materials;
      if (textures.length > 0)
        output.textures = textures;
      if (images.length > 0)
        output.images = images;
      if (shapes.length > 0)
        output.shapes = shapes;
      if (skeletons.length > 0)
        output.skeletons = skeletons;
      if (animations.length > 0)
        output.animations = animations;
      if (nodes.length > 0)
        output.nodes = nodes;
    }
    output.object = object;
    return output;
    function extractFromCache(cache) {
      const values = [];
      for (const key in cache) {
        const data = cache[key];
        delete data.metadata;
        values.push(data);
      }
      return values;
    }
  }
  clone(recursive) {
    return new this.constructor().copy(this, recursive);
  }
  copy(source, recursive = true) {
    this.name = source.name;
    this.up.copy(source.up);
    this.position.copy(source.position);
    this.rotation.order = source.rotation.order;
    this.quaternion.copy(source.quaternion);
    this.scale.copy(source.scale);
    this.matrix.copy(source.matrix);
    this.matrixWorld.copy(source.matrixWorld);
    this.matrixAutoUpdate = source.matrixAutoUpdate;
    this.matrixWorldNeedsUpdate = source.matrixWorldNeedsUpdate;
    this.layers.mask = source.layers.mask;
    this.visible = source.visible;
    this.castShadow = source.castShadow;
    this.receiveShadow = source.receiveShadow;
    this.frustumCulled = source.frustumCulled;
    this.renderOrder = source.renderOrder;
    this.userData = JSON.parse(JSON.stringify(source.userData));
    if (recursive === true) {
      for (let i = 0; i < source.children.length; i++) {
        const child = source.children[i];
        this.add(child.clone());
      }
    }
    return this;
  }
};
Object3D.DefaultUp = new Vector3(0, 1, 0);
Object3D.DefaultMatrixAutoUpdate = true;
Object3D.prototype.isObject3D = true;
var _v0$1 = /* @__PURE__ */ new Vector3();
var _v1$3 = /* @__PURE__ */ new Vector3();
var _v2$2 = /* @__PURE__ */ new Vector3();
var _v3$1 = /* @__PURE__ */ new Vector3();
var _vab = /* @__PURE__ */ new Vector3();
var _vac = /* @__PURE__ */ new Vector3();
var _vbc = /* @__PURE__ */ new Vector3();
var _vap = /* @__PURE__ */ new Vector3();
var _vbp = /* @__PURE__ */ new Vector3();
var _vcp = /* @__PURE__ */ new Vector3();
var Triangle = class {
  constructor(a = new Vector3(), b = new Vector3(), c = new Vector3()) {
    this.a = a;
    this.b = b;
    this.c = c;
  }
  static getNormal(a, b, c, target) {
    target.subVectors(c, b);
    _v0$1.subVectors(a, b);
    target.cross(_v0$1);
    const targetLengthSq = target.lengthSq();
    if (targetLengthSq > 0) {
      return target.multiplyScalar(1 / Math.sqrt(targetLengthSq));
    }
    return target.set(0, 0, 0);
  }
  static getBarycoord(point, a, b, c, target) {
    _v0$1.subVectors(c, a);
    _v1$3.subVectors(b, a);
    _v2$2.subVectors(point, a);
    const dot00 = _v0$1.dot(_v0$1);
    const dot01 = _v0$1.dot(_v1$3);
    const dot02 = _v0$1.dot(_v2$2);
    const dot11 = _v1$3.dot(_v1$3);
    const dot12 = _v1$3.dot(_v2$2);
    const denom = dot00 * dot11 - dot01 * dot01;
    if (denom === 0) {
      return target.set(-2, -1, -1);
    }
    const invDenom = 1 / denom;
    const u = (dot11 * dot02 - dot01 * dot12) * invDenom;
    const v = (dot00 * dot12 - dot01 * dot02) * invDenom;
    return target.set(1 - u - v, v, u);
  }
  static containsPoint(point, a, b, c) {
    this.getBarycoord(point, a, b, c, _v3$1);
    return _v3$1.x >= 0 && _v3$1.y >= 0 && _v3$1.x + _v3$1.y <= 1;
  }
  static getUV(point, p1, p2, p3, uv1, uv2, uv3, target) {
    this.getBarycoord(point, p1, p2, p3, _v3$1);
    target.set(0, 0);
    target.addScaledVector(uv1, _v3$1.x);
    target.addScaledVector(uv2, _v3$1.y);
    target.addScaledVector(uv3, _v3$1.z);
    return target;
  }
  static isFrontFacing(a, b, c, direction) {
    _v0$1.subVectors(c, b);
    _v1$3.subVectors(a, b);
    return _v0$1.cross(_v1$3).dot(direction) < 0 ? true : false;
  }
  set(a, b, c) {
    this.a.copy(a);
    this.b.copy(b);
    this.c.copy(c);
    return this;
  }
  setFromPointsAndIndices(points, i0, i1, i2) {
    this.a.copy(points[i0]);
    this.b.copy(points[i1]);
    this.c.copy(points[i2]);
    return this;
  }
  setFromAttributeAndIndices(attribute, i0, i1, i2) {
    this.a.fromBufferAttribute(attribute, i0);
    this.b.fromBufferAttribute(attribute, i1);
    this.c.fromBufferAttribute(attribute, i2);
    return this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(triangle) {
    this.a.copy(triangle.a);
    this.b.copy(triangle.b);
    this.c.copy(triangle.c);
    return this;
  }
  getArea() {
    _v0$1.subVectors(this.c, this.b);
    _v1$3.subVectors(this.a, this.b);
    return _v0$1.cross(_v1$3).length() * 0.5;
  }
  getMidpoint(target) {
    return target.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
  }
  getNormal(target) {
    return Triangle.getNormal(this.a, this.b, this.c, target);
  }
  getPlane(target) {
    return target.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(point, target) {
    return Triangle.getBarycoord(point, this.a, this.b, this.c, target);
  }
  getUV(point, uv1, uv2, uv3, target) {
    return Triangle.getUV(point, this.a, this.b, this.c, uv1, uv2, uv3, target);
  }
  containsPoint(point) {
    return Triangle.containsPoint(point, this.a, this.b, this.c);
  }
  isFrontFacing(direction) {
    return Triangle.isFrontFacing(this.a, this.b, this.c, direction);
  }
  intersectsBox(box) {
    return box.intersectsTriangle(this);
  }
  closestPointToPoint(p, target) {
    const a = this.a, b = this.b, c = this.c;
    let v, w;
    _vab.subVectors(b, a);
    _vac.subVectors(c, a);
    _vap.subVectors(p, a);
    const d1 = _vab.dot(_vap);
    const d2 = _vac.dot(_vap);
    if (d1 <= 0 && d2 <= 0) {
      return target.copy(a);
    }
    _vbp.subVectors(p, b);
    const d3 = _vab.dot(_vbp);
    const d4 = _vac.dot(_vbp);
    if (d3 >= 0 && d4 <= d3) {
      return target.copy(b);
    }
    const vc = d1 * d4 - d3 * d2;
    if (vc <= 0 && d1 >= 0 && d3 <= 0) {
      v = d1 / (d1 - d3);
      return target.copy(a).addScaledVector(_vab, v);
    }
    _vcp.subVectors(p, c);
    const d5 = _vab.dot(_vcp);
    const d6 = _vac.dot(_vcp);
    if (d6 >= 0 && d5 <= d6) {
      return target.copy(c);
    }
    const vb = d5 * d2 - d1 * d6;
    if (vb <= 0 && d2 >= 0 && d6 <= 0) {
      w = d2 / (d2 - d6);
      return target.copy(a).addScaledVector(_vac, w);
    }
    const va = d3 * d6 - d5 * d4;
    if (va <= 0 && d4 - d3 >= 0 && d5 - d6 >= 0) {
      _vbc.subVectors(c, b);
      w = (d4 - d3) / (d4 - d3 + (d5 - d6));
      return target.copy(b).addScaledVector(_vbc, w);
    }
    const denom = 1 / (va + vb + vc);
    v = vb * denom;
    w = vc * denom;
    return target.copy(a).addScaledVector(_vab, v).addScaledVector(_vac, w);
  }
  equals(triangle) {
    return triangle.a.equals(this.a) && triangle.b.equals(this.b) && triangle.c.equals(this.c);
  }
};
var materialId = 0;
var Material = class extends EventDispatcher {
  constructor() {
    super();
    Object.defineProperty(this, "id", { value: materialId++ });
    this.uuid = generateUUID();
    this.name = "";
    this.type = "Material";
    this.fog = true;
    this.blending = NormalBlending;
    this.side = FrontSide;
    this.vertexColors = false;
    this.opacity = 1;
    this.transparent = false;
    this.blendSrc = SrcAlphaFactor;
    this.blendDst = OneMinusSrcAlphaFactor;
    this.blendEquation = AddEquation;
    this.blendSrcAlpha = null;
    this.blendDstAlpha = null;
    this.blendEquationAlpha = null;
    this.depthFunc = LessEqualDepth;
    this.depthTest = true;
    this.depthWrite = true;
    this.stencilWriteMask = 255;
    this.stencilFunc = AlwaysStencilFunc;
    this.stencilRef = 0;
    this.stencilFuncMask = 255;
    this.stencilFail = KeepStencilOp;
    this.stencilZFail = KeepStencilOp;
    this.stencilZPass = KeepStencilOp;
    this.stencilWrite = false;
    this.clippingPlanes = null;
    this.clipIntersection = false;
    this.clipShadows = false;
    this.shadowSide = null;
    this.colorWrite = true;
    this.precision = null;
    this.polygonOffset = false;
    this.polygonOffsetFactor = 0;
    this.polygonOffsetUnits = 0;
    this.dithering = false;
    this.alphaToCoverage = false;
    this.premultipliedAlpha = false;
    this.visible = true;
    this.toneMapped = true;
    this.userData = {};
    this.version = 0;
    this._alphaTest = 0;
  }
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(value) {
    if (this._alphaTest > 0 !== value > 0) {
      this.version++;
    }
    this._alphaTest = value;
  }
  onBuild() {
  }
  onBeforeRender() {
  }
  onBeforeCompile() {
  }
  customProgramCacheKey() {
    return this.onBeforeCompile.toString();
  }
  setValues(values) {
    if (values === void 0)
      return;
    for (const key in values) {
      const newValue = values[key];
      if (newValue === void 0) {
        console.warn("THREE.Material: '" + key + "' parameter is undefined.");
        continue;
      }
      if (key === "shading") {
        console.warn("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead.");
        this.flatShading = newValue === FlatShading ? true : false;
        continue;
      }
      const currentValue = this[key];
      if (currentValue === void 0) {
        console.warn("THREE." + this.type + ": '" + key + "' is not a property of this material.");
        continue;
      }
      if (currentValue && currentValue.isColor) {
        currentValue.set(newValue);
      } else if (currentValue && currentValue.isVector3 && (newValue && newValue.isVector3)) {
        currentValue.copy(newValue);
      } else {
        this[key] = newValue;
      }
    }
  }
  toJSON(meta) {
    const isRootObject = meta === void 0 || typeof meta === "string";
    if (isRootObject) {
      meta = {
        textures: {},
        images: {}
      };
    }
    const data = {
      metadata: {
        version: 4.5,
        type: "Material",
        generator: "Material.toJSON"
      }
    };
    data.uuid = this.uuid;
    data.type = this.type;
    if (this.name !== "")
      data.name = this.name;
    if (this.color && this.color.isColor)
      data.color = this.color.getHex();
    if (this.roughness !== void 0)
      data.roughness = this.roughness;
    if (this.metalness !== void 0)
      data.metalness = this.metalness;
    if (this.sheen !== void 0)
      data.sheen = this.sheen;
    if (this.sheenColor && this.sheenColor.isColor)
      data.sheenColor = this.sheenColor.getHex();
    if (this.sheenRoughness !== void 0)
      data.sheenRoughness = this.sheenRoughness;
    if (this.emissive && this.emissive.isColor)
      data.emissive = this.emissive.getHex();
    if (this.emissiveIntensity && this.emissiveIntensity !== 1)
      data.emissiveIntensity = this.emissiveIntensity;
    if (this.specular && this.specular.isColor)
      data.specular = this.specular.getHex();
    if (this.specularIntensity !== void 0)
      data.specularIntensity = this.specularIntensity;
    if (this.specularColor && this.specularColor.isColor)
      data.specularColor = this.specularColor.getHex();
    if (this.shininess !== void 0)
      data.shininess = this.shininess;
    if (this.clearcoat !== void 0)
      data.clearcoat = this.clearcoat;
    if (this.clearcoatRoughness !== void 0)
      data.clearcoatRoughness = this.clearcoatRoughness;
    if (this.clearcoatMap && this.clearcoatMap.isTexture) {
      data.clearcoatMap = this.clearcoatMap.toJSON(meta).uuid;
    }
    if (this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture) {
      data.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(meta).uuid;
    }
    if (this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture) {
      data.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(meta).uuid;
      data.clearcoatNormalScale = this.clearcoatNormalScale.toArray();
    }
    if (this.map && this.map.isTexture)
      data.map = this.map.toJSON(meta).uuid;
    if (this.matcap && this.matcap.isTexture)
      data.matcap = this.matcap.toJSON(meta).uuid;
    if (this.alphaMap && this.alphaMap.isTexture)
      data.alphaMap = this.alphaMap.toJSON(meta).uuid;
    if (this.lightMap && this.lightMap.isTexture) {
      data.lightMap = this.lightMap.toJSON(meta).uuid;
      data.lightMapIntensity = this.lightMapIntensity;
    }
    if (this.aoMap && this.aoMap.isTexture) {
      data.aoMap = this.aoMap.toJSON(meta).uuid;
      data.aoMapIntensity = this.aoMapIntensity;
    }
    if (this.bumpMap && this.bumpMap.isTexture) {
      data.bumpMap = this.bumpMap.toJSON(meta).uuid;
      data.bumpScale = this.bumpScale;
    }
    if (this.normalMap && this.normalMap.isTexture) {
      data.normalMap = this.normalMap.toJSON(meta).uuid;
      data.normalMapType = this.normalMapType;
      data.normalScale = this.normalScale.toArray();
    }
    if (this.displacementMap && this.displacementMap.isTexture) {
      data.displacementMap = this.displacementMap.toJSON(meta).uuid;
      data.displacementScale = this.displacementScale;
      data.displacementBias = this.displacementBias;
    }
    if (this.roughnessMap && this.roughnessMap.isTexture)
      data.roughnessMap = this.roughnessMap.toJSON(meta).uuid;
    if (this.metalnessMap && this.metalnessMap.isTexture)
      data.metalnessMap = this.metalnessMap.toJSON(meta).uuid;
    if (this.emissiveMap && this.emissiveMap.isTexture)
      data.emissiveMap = this.emissiveMap.toJSON(meta).uuid;
    if (this.specularMap && this.specularMap.isTexture)
      data.specularMap = this.specularMap.toJSON(meta).uuid;
    if (this.specularIntensityMap && this.specularIntensityMap.isTexture)
      data.specularIntensityMap = this.specularIntensityMap.toJSON(meta).uuid;
    if (this.specularColorMap && this.specularColorMap.isTexture)
      data.specularColorMap = this.specularColorMap.toJSON(meta).uuid;
    if (this.envMap && this.envMap.isTexture) {
      data.envMap = this.envMap.toJSON(meta).uuid;
      if (this.combine !== void 0)
        data.combine = this.combine;
    }
    if (this.envMapIntensity !== void 0)
      data.envMapIntensity = this.envMapIntensity;
    if (this.reflectivity !== void 0)
      data.reflectivity = this.reflectivity;
    if (this.refractionRatio !== void 0)
      data.refractionRatio = this.refractionRatio;
    if (this.gradientMap && this.gradientMap.isTexture) {
      data.gradientMap = this.gradientMap.toJSON(meta).uuid;
    }
    if (this.transmission !== void 0)
      data.transmission = this.transmission;
    if (this.transmissionMap && this.transmissionMap.isTexture)
      data.transmissionMap = this.transmissionMap.toJSON(meta).uuid;
    if (this.thickness !== void 0)
      data.thickness = this.thickness;
    if (this.thicknessMap && this.thicknessMap.isTexture)
      data.thicknessMap = this.thicknessMap.toJSON(meta).uuid;
    if (this.attenuationDistance !== void 0)
      data.attenuationDistance = this.attenuationDistance;
    if (this.attenuationColor !== void 0)
      data.attenuationColor = this.attenuationColor.getHex();
    if (this.size !== void 0)
      data.size = this.size;
    if (this.shadowSide !== null)
      data.shadowSide = this.shadowSide;
    if (this.sizeAttenuation !== void 0)
      data.sizeAttenuation = this.sizeAttenuation;
    if (this.blending !== NormalBlending)
      data.blending = this.blending;
    if (this.side !== FrontSide)
      data.side = this.side;
    if (this.vertexColors)
      data.vertexColors = true;
    if (this.opacity < 1)
      data.opacity = this.opacity;
    if (this.transparent === true)
      data.transparent = this.transparent;
    data.depthFunc = this.depthFunc;
    data.depthTest = this.depthTest;
    data.depthWrite = this.depthWrite;
    data.colorWrite = this.colorWrite;
    data.stencilWrite = this.stencilWrite;
    data.stencilWriteMask = this.stencilWriteMask;
    data.stencilFunc = this.stencilFunc;
    data.stencilRef = this.stencilRef;
    data.stencilFuncMask = this.stencilFuncMask;
    data.stencilFail = this.stencilFail;
    data.stencilZFail = this.stencilZFail;
    data.stencilZPass = this.stencilZPass;
    if (this.rotation !== void 0 && this.rotation !== 0)
      data.rotation = this.rotation;
    if (this.polygonOffset === true)
      data.polygonOffset = true;
    if (this.polygonOffsetFactor !== 0)
      data.polygonOffsetFactor = this.polygonOffsetFactor;
    if (this.polygonOffsetUnits !== 0)
      data.polygonOffsetUnits = this.polygonOffsetUnits;
    if (this.linewidth !== void 0 && this.linewidth !== 1)
      data.linewidth = this.linewidth;
    if (this.dashSize !== void 0)
      data.dashSize = this.dashSize;
    if (this.gapSize !== void 0)
      data.gapSize = this.gapSize;
    if (this.scale !== void 0)
      data.scale = this.scale;
    if (this.dithering === true)
      data.dithering = true;
    if (this.alphaTest > 0)
      data.alphaTest = this.alphaTest;
    if (this.alphaToCoverage === true)
      data.alphaToCoverage = this.alphaToCoverage;
    if (this.premultipliedAlpha === true)
      data.premultipliedAlpha = this.premultipliedAlpha;
    if (this.wireframe === true)
      data.wireframe = this.wireframe;
    if (this.wireframeLinewidth > 1)
      data.wireframeLinewidth = this.wireframeLinewidth;
    if (this.wireframeLinecap !== "round")
      data.wireframeLinecap = this.wireframeLinecap;
    if (this.wireframeLinejoin !== "round")
      data.wireframeLinejoin = this.wireframeLinejoin;
    if (this.flatShading === true)
      data.flatShading = this.flatShading;
    if (this.visible === false)
      data.visible = false;
    if (this.toneMapped === false)
      data.toneMapped = false;
    if (JSON.stringify(this.userData) !== "{}")
      data.userData = this.userData;
    function extractFromCache(cache) {
      const values = [];
      for (const key in cache) {
        const data2 = cache[key];
        delete data2.metadata;
        values.push(data2);
      }
      return values;
    }
    if (isRootObject) {
      const textures = extractFromCache(meta.textures);
      const images = extractFromCache(meta.images);
      if (textures.length > 0)
        data.textures = textures;
      if (images.length > 0)
        data.images = images;
    }
    return data;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(source) {
    this.name = source.name;
    this.fog = source.fog;
    this.blending = source.blending;
    this.side = source.side;
    this.vertexColors = source.vertexColors;
    this.opacity = source.opacity;
    this.transparent = source.transparent;
    this.blendSrc = source.blendSrc;
    this.blendDst = source.blendDst;
    this.blendEquation = source.blendEquation;
    this.blendSrcAlpha = source.blendSrcAlpha;
    this.blendDstAlpha = source.blendDstAlpha;
    this.blendEquationAlpha = source.blendEquationAlpha;
    this.depthFunc = source.depthFunc;
    this.depthTest = source.depthTest;
    this.depthWrite = source.depthWrite;
    this.stencilWriteMask = source.stencilWriteMask;
    this.stencilFunc = source.stencilFunc;
    this.stencilRef = source.stencilRef;
    this.stencilFuncMask = source.stencilFuncMask;
    this.stencilFail = source.stencilFail;
    this.stencilZFail = source.stencilZFail;
    this.stencilZPass = source.stencilZPass;
    this.stencilWrite = source.stencilWrite;
    const srcPlanes = source.clippingPlanes;
    let dstPlanes = null;
    if (srcPlanes !== null) {
      const n = srcPlanes.length;
      dstPlanes = new Array(n);
      for (let i = 0; i !== n; ++i) {
        dstPlanes[i] = srcPlanes[i].clone();
      }
    }
    this.clippingPlanes = dstPlanes;
    this.clipIntersection = source.clipIntersection;
    this.clipShadows = source.clipShadows;
    this.shadowSide = source.shadowSide;
    this.colorWrite = source.colorWrite;
    this.precision = source.precision;
    this.polygonOffset = source.polygonOffset;
    this.polygonOffsetFactor = source.polygonOffsetFactor;
    this.polygonOffsetUnits = source.polygonOffsetUnits;
    this.dithering = source.dithering;
    this.alphaTest = source.alphaTest;
    this.alphaToCoverage = source.alphaToCoverage;
    this.premultipliedAlpha = source.premultipliedAlpha;
    this.visible = source.visible;
    this.toneMapped = source.toneMapped;
    this.userData = JSON.parse(JSON.stringify(source.userData));
    return this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  set needsUpdate(value) {
    if (value === true)
      this.version++;
  }
};
Material.prototype.isMaterial = true;
Material.fromType = function() {
  return null;
};
var MeshBasicMaterial = class extends Material {
  constructor(parameters) {
    super();
    this.type = "MeshBasicMaterial";
    this.color = new Color(16777215);
    this.map = null;
    this.lightMap = null;
    this.lightMapIntensity = 1;
    this.aoMap = null;
    this.aoMapIntensity = 1;
    this.specularMap = null;
    this.alphaMap = null;
    this.envMap = null;
    this.combine = MultiplyOperation;
    this.reflectivity = 1;
    this.refractionRatio = 0.98;
    this.wireframe = false;
    this.wireframeLinewidth = 1;
    this.wireframeLinecap = "round";
    this.wireframeLinejoin = "round";
    this.setValues(parameters);
  }
  copy(source) {
    super.copy(source);
    this.color.copy(source.color);
    this.map = source.map;
    this.lightMap = source.lightMap;
    this.lightMapIntensity = source.lightMapIntensity;
    this.aoMap = source.aoMap;
    this.aoMapIntensity = source.aoMapIntensity;
    this.specularMap = source.specularMap;
    this.alphaMap = source.alphaMap;
    this.envMap = source.envMap;
    this.combine = source.combine;
    this.reflectivity = source.reflectivity;
    this.refractionRatio = source.refractionRatio;
    this.wireframe = source.wireframe;
    this.wireframeLinewidth = source.wireframeLinewidth;
    this.wireframeLinecap = source.wireframeLinecap;
    this.wireframeLinejoin = source.wireframeLinejoin;
    return this;
  }
};
MeshBasicMaterial.prototype.isMeshBasicMaterial = true;
var _vector$9 = /* @__PURE__ */ new Vector3();
var _vector2$1 = /* @__PURE__ */ new Vector2();
var BufferAttribute = class {
  constructor(array, itemSize, normalized) {
    if (Array.isArray(array)) {
      throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    }
    this.name = "";
    this.array = array;
    this.itemSize = itemSize;
    this.count = array !== void 0 ? array.length / itemSize : 0;
    this.normalized = normalized === true;
    this.usage = StaticDrawUsage;
    this.updateRange = { offset: 0, count: -1 };
    this.version = 0;
  }
  onUploadCallback() {
  }
  set needsUpdate(value) {
    if (value === true)
      this.version++;
  }
  setUsage(value) {
    this.usage = value;
    return this;
  }
  copy(source) {
    this.name = source.name;
    this.array = new source.array.constructor(source.array);
    this.itemSize = source.itemSize;
    this.count = source.count;
    this.normalized = source.normalized;
    this.usage = source.usage;
    return this;
  }
  copyAt(index1, attribute, index2) {
    index1 *= this.itemSize;
    index2 *= attribute.itemSize;
    for (let i = 0, l = this.itemSize; i < l; i++) {
      this.array[index1 + i] = attribute.array[index2 + i];
    }
    return this;
  }
  copyArray(array) {
    this.array.set(array);
    return this;
  }
  copyColorsArray(colors) {
    const array = this.array;
    let offset = 0;
    for (let i = 0, l = colors.length; i < l; i++) {
      let color = colors[i];
      if (color === void 0) {
        console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined", i);
        color = new Color();
      }
      array[offset++] = color.r;
      array[offset++] = color.g;
      array[offset++] = color.b;
    }
    return this;
  }
  copyVector2sArray(vectors) {
    const array = this.array;
    let offset = 0;
    for (let i = 0, l = vectors.length; i < l; i++) {
      let vector = vectors[i];
      if (vector === void 0) {
        console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined", i);
        vector = new Vector2();
      }
      array[offset++] = vector.x;
      array[offset++] = vector.y;
    }
    return this;
  }
  copyVector3sArray(vectors) {
    const array = this.array;
    let offset = 0;
    for (let i = 0, l = vectors.length; i < l; i++) {
      let vector = vectors[i];
      if (vector === void 0) {
        console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined", i);
        vector = new Vector3();
      }
      array[offset++] = vector.x;
      array[offset++] = vector.y;
      array[offset++] = vector.z;
    }
    return this;
  }
  copyVector4sArray(vectors) {
    const array = this.array;
    let offset = 0;
    for (let i = 0, l = vectors.length; i < l; i++) {
      let vector = vectors[i];
      if (vector === void 0) {
        console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined", i);
        vector = new Vector4();
      }
      array[offset++] = vector.x;
      array[offset++] = vector.y;
      array[offset++] = vector.z;
      array[offset++] = vector.w;
    }
    return this;
  }
  applyMatrix3(m) {
    if (this.itemSize === 2) {
      for (let i = 0, l = this.count; i < l; i++) {
        _vector2$1.fromBufferAttribute(this, i);
        _vector2$1.applyMatrix3(m);
        this.setXY(i, _vector2$1.x, _vector2$1.y);
      }
    } else if (this.itemSize === 3) {
      for (let i = 0, l = this.count; i < l; i++) {
        _vector$9.fromBufferAttribute(this, i);
        _vector$9.applyMatrix3(m);
        this.setXYZ(i, _vector$9.x, _vector$9.y, _vector$9.z);
      }
    }
    return this;
  }
  applyMatrix4(m) {
    for (let i = 0, l = this.count; i < l; i++) {
      _vector$9.fromBufferAttribute(this, i);
      _vector$9.applyMatrix4(m);
      this.setXYZ(i, _vector$9.x, _vector$9.y, _vector$9.z);
    }
    return this;
  }
  applyNormalMatrix(m) {
    for (let i = 0, l = this.count; i < l; i++) {
      _vector$9.fromBufferAttribute(this, i);
      _vector$9.applyNormalMatrix(m);
      this.setXYZ(i, _vector$9.x, _vector$9.y, _vector$9.z);
    }
    return this;
  }
  transformDirection(m) {
    for (let i = 0, l = this.count; i < l; i++) {
      _vector$9.fromBufferAttribute(this, i);
      _vector$9.transformDirection(m);
      this.setXYZ(i, _vector$9.x, _vector$9.y, _vector$9.z);
    }
    return this;
  }
  set(value, offset = 0) {
    this.array.set(value, offset);
    return this;
  }
  getX(index) {
    return this.array[index * this.itemSize];
  }
  setX(index, x) {
    this.array[index * this.itemSize] = x;
    return this;
  }
  getY(index) {
    return this.array[index * this.itemSize + 1];
  }
  setY(index, y) {
    this.array[index * this.itemSize + 1] = y;
    return this;
  }
  getZ(index) {
    return this.array[index * this.itemSize + 2];
  }
  setZ(index, z) {
    this.array[index * this.itemSize + 2] = z;
    return this;
  }
  getW(index) {
    return this.array[index * this.itemSize + 3];
  }
  setW(index, w) {
    this.array[index * this.itemSize + 3] = w;
    return this;
  }
  setXY(index, x, y) {
    index *= this.itemSize;
    this.array[index + 0] = x;
    this.array[index + 1] = y;
    return this;
  }
  setXYZ(index, x, y, z) {
    index *= this.itemSize;
    this.array[index + 0] = x;
    this.array[index + 1] = y;
    this.array[index + 2] = z;
    return this;
  }
  setXYZW(index, x, y, z, w) {
    index *= this.itemSize;
    this.array[index + 0] = x;
    this.array[index + 1] = y;
    this.array[index + 2] = z;
    this.array[index + 3] = w;
    return this;
  }
  onUpload(callback) {
    this.onUploadCallback = callback;
    return this;
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    const data = {
      itemSize: this.itemSize,
      type: this.array.constructor.name,
      array: Array.prototype.slice.call(this.array),
      normalized: this.normalized
    };
    if (this.name !== "")
      data.name = this.name;
    if (this.usage !== StaticDrawUsage)
      data.usage = this.usage;
    if (this.updateRange.offset !== 0 || this.updateRange.count !== -1)
      data.updateRange = this.updateRange;
    return data;
  }
};
BufferAttribute.prototype.isBufferAttribute = true;
var Uint16BufferAttribute = class extends BufferAttribute {
  constructor(array, itemSize, normalized) {
    super(new Uint16Array(array), itemSize, normalized);
  }
};
var Uint32BufferAttribute = class extends BufferAttribute {
  constructor(array, itemSize, normalized) {
    super(new Uint32Array(array), itemSize, normalized);
  }
};
var Float16BufferAttribute = class extends BufferAttribute {
  constructor(array, itemSize, normalized) {
    super(new Uint16Array(array), itemSize, normalized);
  }
};
Float16BufferAttribute.prototype.isFloat16BufferAttribute = true;
var Float32BufferAttribute = class extends BufferAttribute {
  constructor(array, itemSize, normalized) {
    super(new Float32Array(array), itemSize, normalized);
  }
};
var _id$1 = 0;
var _m1 = /* @__PURE__ */ new Matrix4();
var _obj = /* @__PURE__ */ new Object3D();
var _offset = /* @__PURE__ */ new Vector3();
var _box$1 = /* @__PURE__ */ new Box3();
var _boxMorphTargets = /* @__PURE__ */ new Box3();
var _vector$8 = /* @__PURE__ */ new Vector3();
var BufferGeometry = class extends EventDispatcher {
  constructor() {
    super();
    Object.defineProperty(this, "id", { value: _id$1++ });
    this.uuid = generateUUID();
    this.name = "";
    this.type = "BufferGeometry";
    this.index = null;
    this.attributes = {};
    this.morphAttributes = {};
    this.morphTargetsRelative = false;
    this.groups = [];
    this.boundingBox = null;
    this.boundingSphere = null;
    this.drawRange = { start: 0, count: Infinity };
    this.userData = {};
  }
  getIndex() {
    return this.index;
  }
  setIndex(index) {
    if (Array.isArray(index)) {
      this.index = new (arrayNeedsUint32(index) ? Uint32BufferAttribute : Uint16BufferAttribute)(index, 1);
    } else {
      this.index = index;
    }
    return this;
  }
  getAttribute(name) {
    return this.attributes[name];
  }
  setAttribute(name, attribute) {
    this.attributes[name] = attribute;
    return this;
  }
  deleteAttribute(name) {
    delete this.attributes[name];
    return this;
  }
  hasAttribute(name) {
    return this.attributes[name] !== void 0;
  }
  addGroup(start, count, materialIndex = 0) {
    this.groups.push({
      start,
      count,
      materialIndex
    });
  }
  clearGroups() {
    this.groups = [];
  }
  setDrawRange(start, count) {
    this.drawRange.start = start;
    this.drawRange.count = count;
  }
  applyMatrix4(matrix) {
    const position = this.attributes.position;
    if (position !== void 0) {
      position.applyMatrix4(matrix);
      position.needsUpdate = true;
    }
    const normal = this.attributes.normal;
    if (normal !== void 0) {
      const normalMatrix = new Matrix3().getNormalMatrix(matrix);
      normal.applyNormalMatrix(normalMatrix);
      normal.needsUpdate = true;
    }
    const tangent = this.attributes.tangent;
    if (tangent !== void 0) {
      tangent.transformDirection(matrix);
      tangent.needsUpdate = true;
    }
    if (this.boundingBox !== null) {
      this.computeBoundingBox();
    }
    if (this.boundingSphere !== null) {
      this.computeBoundingSphere();
    }
    return this;
  }
  applyQuaternion(q) {
    _m1.makeRotationFromQuaternion(q);
    this.applyMatrix4(_m1);
    return this;
  }
  rotateX(angle) {
    _m1.makeRotationX(angle);
    this.applyMatrix4(_m1);
    return this;
  }
  rotateY(angle) {
    _m1.makeRotationY(angle);
    this.applyMatrix4(_m1);
    return this;
  }
  rotateZ(angle) {
    _m1.makeRotationZ(angle);
    this.applyMatrix4(_m1);
    return this;
  }
  translate(x, y, z) {
    _m1.makeTranslation(x, y, z);
    this.applyMatrix4(_m1);
    return this;
  }
  scale(x, y, z) {
    _m1.makeScale(x, y, z);
    this.applyMatrix4(_m1);
    return this;
  }
  lookAt(vector) {
    _obj.lookAt(vector);
    _obj.updateMatrix();
    this.applyMatrix4(_obj.matrix);
    return this;
  }
  center() {
    this.computeBoundingBox();
    this.boundingBox.getCenter(_offset).negate();
    this.translate(_offset.x, _offset.y, _offset.z);
    return this;
  }
  setFromPoints(points) {
    const position = [];
    for (let i = 0, l = points.length; i < l; i++) {
      const point = points[i];
      position.push(point.x, point.y, point.z || 0);
    }
    this.setAttribute("position", new Float32BufferAttribute(position, 3));
    return this;
  }
  computeBoundingBox() {
    if (this.boundingBox === null) {
      this.boundingBox = new Box3();
    }
    const position = this.attributes.position;
    const morphAttributesPosition = this.morphAttributes.position;
    if (position && position.isGLBufferAttribute) {
      console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".', this);
      this.boundingBox.set(new Vector3(-Infinity, -Infinity, -Infinity), new Vector3(Infinity, Infinity, Infinity));
      return;
    }
    if (position !== void 0) {
      this.boundingBox.setFromBufferAttribute(position);
      if (morphAttributesPosition) {
        for (let i = 0, il = morphAttributesPosition.length; i < il; i++) {
          const morphAttribute = morphAttributesPosition[i];
          _box$1.setFromBufferAttribute(morphAttribute);
          if (this.morphTargetsRelative) {
            _vector$8.addVectors(this.boundingBox.min, _box$1.min);
            this.boundingBox.expandByPoint(_vector$8);
            _vector$8.addVectors(this.boundingBox.max, _box$1.max);
            this.boundingBox.expandByPoint(_vector$8);
          } else {
            this.boundingBox.expandByPoint(_box$1.min);
            this.boundingBox.expandByPoint(_box$1.max);
          }
        }
      }
    } else {
      this.boundingBox.makeEmpty();
    }
    if (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) {
      console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
    }
  }
  computeBoundingSphere() {
    if (this.boundingSphere === null) {
      this.boundingSphere = new Sphere();
    }
    const position = this.attributes.position;
    const morphAttributesPosition = this.morphAttributes.position;
    if (position && position.isGLBufferAttribute) {
      console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".', this);
      this.boundingSphere.set(new Vector3(), Infinity);
      return;
    }
    if (position) {
      const center = this.boundingSphere.center;
      _box$1.setFromBufferAttribute(position);
      if (morphAttributesPosition) {
        for (let i = 0, il = morphAttributesPosition.length; i < il; i++) {
          const morphAttribute = morphAttributesPosition[i];
          _boxMorphTargets.setFromBufferAttribute(morphAttribute);
          if (this.morphTargetsRelative) {
            _vector$8.addVectors(_box$1.min, _boxMorphTargets.min);
            _box$1.expandByPoint(_vector$8);
            _vector$8.addVectors(_box$1.max, _boxMorphTargets.max);
            _box$1.expandByPoint(_vector$8);
          } else {
            _box$1.expandByPoint(_boxMorphTargets.min);
            _box$1.expandByPoint(_boxMorphTargets.max);
          }
        }
      }
      _box$1.getCenter(center);
      let maxRadiusSq = 0;
      for (let i = 0, il = position.count; i < il; i++) {
        _vector$8.fromBufferAttribute(position, i);
        maxRadiusSq = Math.max(maxRadiusSq, center.distanceToSquared(_vector$8));
      }
      if (morphAttributesPosition) {
        for (let i = 0, il = morphAttributesPosition.length; i < il; i++) {
          const morphAttribute = morphAttributesPosition[i];
          const morphTargetsRelative = this.morphTargetsRelative;
          for (let j = 0, jl = morphAttribute.count; j < jl; j++) {
            _vector$8.fromBufferAttribute(morphAttribute, j);
            if (morphTargetsRelative) {
              _offset.fromBufferAttribute(position, j);
              _vector$8.add(_offset);
            }
            maxRadiusSq = Math.max(maxRadiusSq, center.distanceToSquared(_vector$8));
          }
        }
      }
      this.boundingSphere.radius = Math.sqrt(maxRadiusSq);
      if (isNaN(this.boundingSphere.radius)) {
        console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
      }
    }
  }
  computeTangents() {
    const index = this.index;
    const attributes = this.attributes;
    if (index === null || attributes.position === void 0 || attributes.normal === void 0 || attributes.uv === void 0) {
      console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
      return;
    }
    const indices = index.array;
    const positions = attributes.position.array;
    const normals = attributes.normal.array;
    const uvs = attributes.uv.array;
    const nVertices = positions.length / 3;
    if (this.hasAttribute("tangent") === false) {
      this.setAttribute("tangent", new BufferAttribute(new Float32Array(4 * nVertices), 4));
    }
    const tangents = this.getAttribute("tangent").array;
    const tan1 = [], tan2 = [];
    for (let i = 0; i < nVertices; i++) {
      tan1[i] = new Vector3();
      tan2[i] = new Vector3();
    }
    const vA = new Vector3(), vB = new Vector3(), vC = new Vector3(), uvA = new Vector2(), uvB = new Vector2(), uvC = new Vector2(), sdir = new Vector3(), tdir = new Vector3();
    function handleTriangle(a, b, c) {
      vA.fromArray(positions, a * 3);
      vB.fromArray(positions, b * 3);
      vC.fromArray(positions, c * 3);
      uvA.fromArray(uvs, a * 2);
      uvB.fromArray(uvs, b * 2);
      uvC.fromArray(uvs, c * 2);
      vB.sub(vA);
      vC.sub(vA);
      uvB.sub(uvA);
      uvC.sub(uvA);
      const r = 1 / (uvB.x * uvC.y - uvC.x * uvB.y);
      if (!isFinite(r))
        return;
      sdir.copy(vB).multiplyScalar(uvC.y).addScaledVector(vC, -uvB.y).multiplyScalar(r);
      tdir.copy(vC).multiplyScalar(uvB.x).addScaledVector(vB, -uvC.x).multiplyScalar(r);
      tan1[a].add(sdir);
      tan1[b].add(sdir);
      tan1[c].add(sdir);
      tan2[a].add(tdir);
      tan2[b].add(tdir);
      tan2[c].add(tdir);
    }
    let groups = this.groups;
    if (groups.length === 0) {
      groups = [{
        start: 0,
        count: indices.length
      }];
    }
    for (let i = 0, il = groups.length; i < il; ++i) {
      const group = groups[i];
      const start = group.start;
      const count = group.count;
      for (let j = start, jl = start + count; j < jl; j += 3) {
        handleTriangle(indices[j + 0], indices[j + 1], indices[j + 2]);
      }
    }
    const tmp2 = new Vector3(), tmp22 = new Vector3();
    const n = new Vector3(), n2 = new Vector3();
    function handleVertex(v) {
      n.fromArray(normals, v * 3);
      n2.copy(n);
      const t = tan1[v];
      tmp2.copy(t);
      tmp2.sub(n.multiplyScalar(n.dot(t))).normalize();
      tmp22.crossVectors(n2, t);
      const test = tmp22.dot(tan2[v]);
      const w = test < 0 ? -1 : 1;
      tangents[v * 4] = tmp2.x;
      tangents[v * 4 + 1] = tmp2.y;
      tangents[v * 4 + 2] = tmp2.z;
      tangents[v * 4 + 3] = w;
    }
    for (let i = 0, il = groups.length; i < il; ++i) {
      const group = groups[i];
      const start = group.start;
      const count = group.count;
      for (let j = start, jl = start + count; j < jl; j += 3) {
        handleVertex(indices[j + 0]);
        handleVertex(indices[j + 1]);
        handleVertex(indices[j + 2]);
      }
    }
  }
  computeVertexNormals() {
    const index = this.index;
    const positionAttribute = this.getAttribute("position");
    if (positionAttribute !== void 0) {
      let normalAttribute = this.getAttribute("normal");
      if (normalAttribute === void 0) {
        normalAttribute = new BufferAttribute(new Float32Array(positionAttribute.count * 3), 3);
        this.setAttribute("normal", normalAttribute);
      } else {
        for (let i = 0, il = normalAttribute.count; i < il; i++) {
          normalAttribute.setXYZ(i, 0, 0, 0);
        }
      }
      const pA = new Vector3(), pB = new Vector3(), pC = new Vector3();
      const nA = new Vector3(), nB = new Vector3(), nC = new Vector3();
      const cb = new Vector3(), ab = new Vector3();
      if (index) {
        for (let i = 0, il = index.count; i < il; i += 3) {
          const vA = index.getX(i + 0);
          const vB = index.getX(i + 1);
          const vC = index.getX(i + 2);
          pA.fromBufferAttribute(positionAttribute, vA);
          pB.fromBufferAttribute(positionAttribute, vB);
          pC.fromBufferAttribute(positionAttribute, vC);
          cb.subVectors(pC, pB);
          ab.subVectors(pA, pB);
          cb.cross(ab);
          nA.fromBufferAttribute(normalAttribute, vA);
          nB.fromBufferAttribute(normalAttribute, vB);
          nC.fromBufferAttribute(normalAttribute, vC);
          nA.add(cb);
          nB.add(cb);
          nC.add(cb);
          normalAttribute.setXYZ(vA, nA.x, nA.y, nA.z);
          normalAttribute.setXYZ(vB, nB.x, nB.y, nB.z);
          normalAttribute.setXYZ(vC, nC.x, nC.y, nC.z);
        }
      } else {
        for (let i = 0, il = positionAttribute.count; i < il; i += 3) {
          pA.fromBufferAttribute(positionAttribute, i + 0);
          pB.fromBufferAttribute(positionAttribute, i + 1);
          pC.fromBufferAttribute(positionAttribute, i + 2);
          cb.subVectors(pC, pB);
          ab.subVectors(pA, pB);
          cb.cross(ab);
          normalAttribute.setXYZ(i + 0, cb.x, cb.y, cb.z);
          normalAttribute.setXYZ(i + 1, cb.x, cb.y, cb.z);
          normalAttribute.setXYZ(i + 2, cb.x, cb.y, cb.z);
        }
      }
      this.normalizeNormals();
      normalAttribute.needsUpdate = true;
    }
  }
  merge(geometry, offset) {
    if (!(geometry && geometry.isBufferGeometry)) {
      console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.", geometry);
      return;
    }
    if (offset === void 0) {
      offset = 0;
      console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge.");
    }
    const attributes = this.attributes;
    for (const key in attributes) {
      if (geometry.attributes[key] === void 0)
        continue;
      const attribute1 = attributes[key];
      const attributeArray1 = attribute1.array;
      const attribute2 = geometry.attributes[key];
      const attributeArray2 = attribute2.array;
      const attributeOffset = attribute2.itemSize * offset;
      const length = Math.min(attributeArray2.length, attributeArray1.length - attributeOffset);
      for (let i = 0, j = attributeOffset; i < length; i++, j++) {
        attributeArray1[j] = attributeArray2[i];
      }
    }
    return this;
  }
  normalizeNormals() {
    const normals = this.attributes.normal;
    for (let i = 0, il = normals.count; i < il; i++) {
      _vector$8.fromBufferAttribute(normals, i);
      _vector$8.normalize();
      normals.setXYZ(i, _vector$8.x, _vector$8.y, _vector$8.z);
    }
  }
  toNonIndexed() {
    function convertBufferAttribute(attribute, indices2) {
      const array = attribute.array;
      const itemSize = attribute.itemSize;
      const normalized = attribute.normalized;
      const array2 = new array.constructor(indices2.length * itemSize);
      let index = 0, index2 = 0;
      for (let i = 0, l = indices2.length; i < l; i++) {
        if (attribute.isInterleavedBufferAttribute) {
          index = indices2[i] * attribute.data.stride + attribute.offset;
        } else {
          index = indices2[i] * itemSize;
        }
        for (let j = 0; j < itemSize; j++) {
          array2[index2++] = array[index++];
        }
      }
      return new BufferAttribute(array2, itemSize, normalized);
    }
    if (this.index === null) {
      console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.");
      return this;
    }
    const geometry2 = new BufferGeometry();
    const indices = this.index.array;
    const attributes = this.attributes;
    for (const name in attributes) {
      const attribute = attributes[name];
      const newAttribute = convertBufferAttribute(attribute, indices);
      geometry2.setAttribute(name, newAttribute);
    }
    const morphAttributes = this.morphAttributes;
    for (const name in morphAttributes) {
      const morphArray = [];
      const morphAttribute = morphAttributes[name];
      for (let i = 0, il = morphAttribute.length; i < il; i++) {
        const attribute = morphAttribute[i];
        const newAttribute = convertBufferAttribute(attribute, indices);
        morphArray.push(newAttribute);
      }
      geometry2.morphAttributes[name] = morphArray;
    }
    geometry2.morphTargetsRelative = this.morphTargetsRelative;
    const groups = this.groups;
    for (let i = 0, l = groups.length; i < l; i++) {
      const group = groups[i];
      geometry2.addGroup(group.start, group.count, group.materialIndex);
    }
    return geometry2;
  }
  toJSON() {
    const data = {
      metadata: {
        version: 4.5,
        type: "BufferGeometry",
        generator: "BufferGeometry.toJSON"
      }
    };
    data.uuid = this.uuid;
    data.type = this.type;
    if (this.name !== "")
      data.name = this.name;
    if (Object.keys(this.userData).length > 0)
      data.userData = this.userData;
    if (this.parameters !== void 0) {
      const parameters = this.parameters;
      for (const key in parameters) {
        if (parameters[key] !== void 0)
          data[key] = parameters[key];
      }
      return data;
    }
    data.data = { attributes: {} };
    const index = this.index;
    if (index !== null) {
      data.data.index = {
        type: index.array.constructor.name,
        array: Array.prototype.slice.call(index.array)
      };
    }
    const attributes = this.attributes;
    for (const key in attributes) {
      const attribute = attributes[key];
      data.data.attributes[key] = attribute.toJSON(data.data);
    }
    const morphAttributes = {};
    let hasMorphAttributes = false;
    for (const key in this.morphAttributes) {
      const attributeArray = this.morphAttributes[key];
      const array = [];
      for (let i = 0, il = attributeArray.length; i < il; i++) {
        const attribute = attributeArray[i];
        array.push(attribute.toJSON(data.data));
      }
      if (array.length > 0) {
        morphAttributes[key] = array;
        hasMorphAttributes = true;
      }
    }
    if (hasMorphAttributes) {
      data.data.morphAttributes = morphAttributes;
      data.data.morphTargetsRelative = this.morphTargetsRelative;
    }
    const groups = this.groups;
    if (groups.length > 0) {
      data.data.groups = JSON.parse(JSON.stringify(groups));
    }
    const boundingSphere = this.boundingSphere;
    if (boundingSphere !== null) {
      data.data.boundingSphere = {
        center: boundingSphere.center.toArray(),
        radius: boundingSphere.radius
      };
    }
    return data;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(source) {
    this.index = null;
    this.attributes = {};
    this.morphAttributes = {};
    this.groups = [];
    this.boundingBox = null;
    this.boundingSphere = null;
    const data = {};
    this.name = source.name;
    const index = source.index;
    if (index !== null) {
      this.setIndex(index.clone(data));
    }
    const attributes = source.attributes;
    for (const name in attributes) {
      const attribute = attributes[name];
      this.setAttribute(name, attribute.clone(data));
    }
    const morphAttributes = source.morphAttributes;
    for (const name in morphAttributes) {
      const array = [];
      const morphAttribute = morphAttributes[name];
      for (let i = 0, l = morphAttribute.length; i < l; i++) {
        array.push(morphAttribute[i].clone(data));
      }
      this.morphAttributes[name] = array;
    }
    this.morphTargetsRelative = source.morphTargetsRelative;
    const groups = source.groups;
    for (let i = 0, l = groups.length; i < l; i++) {
      const group = groups[i];
      this.addGroup(group.start, group.count, group.materialIndex);
    }
    const boundingBox = source.boundingBox;
    if (boundingBox !== null) {
      this.boundingBox = boundingBox.clone();
    }
    const boundingSphere = source.boundingSphere;
    if (boundingSphere !== null) {
      this.boundingSphere = boundingSphere.clone();
    }
    this.drawRange.start = source.drawRange.start;
    this.drawRange.count = source.drawRange.count;
    this.userData = source.userData;
    if (source.parameters !== void 0)
      this.parameters = Object.assign({}, source.parameters);
    return this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
};
BufferGeometry.prototype.isBufferGeometry = true;
var _inverseMatrix$2 = /* @__PURE__ */ new Matrix4();
var _ray$2 = /* @__PURE__ */ new Ray();
var _sphere$3 = /* @__PURE__ */ new Sphere();
var _vA$1 = /* @__PURE__ */ new Vector3();
var _vB$1 = /* @__PURE__ */ new Vector3();
var _vC$1 = /* @__PURE__ */ new Vector3();
var _tempA = /* @__PURE__ */ new Vector3();
var _tempB = /* @__PURE__ */ new Vector3();
var _tempC = /* @__PURE__ */ new Vector3();
var _morphA = /* @__PURE__ */ new Vector3();
var _morphB = /* @__PURE__ */ new Vector3();
var _morphC = /* @__PURE__ */ new Vector3();
var _uvA$1 = /* @__PURE__ */ new Vector2();
var _uvB$1 = /* @__PURE__ */ new Vector2();
var _uvC$1 = /* @__PURE__ */ new Vector2();
var _intersectionPoint = /* @__PURE__ */ new Vector3();
var _intersectionPointWorld = /* @__PURE__ */ new Vector3();
var Mesh = class extends Object3D {
  constructor(geometry = new BufferGeometry(), material = new MeshBasicMaterial()) {
    super();
    this.type = "Mesh";
    this.geometry = geometry;
    this.material = material;
    this.updateMorphTargets();
  }
  copy(source) {
    super.copy(source);
    if (source.morphTargetInfluences !== void 0) {
      this.morphTargetInfluences = source.morphTargetInfluences.slice();
    }
    if (source.morphTargetDictionary !== void 0) {
      this.morphTargetDictionary = Object.assign({}, source.morphTargetDictionary);
    }
    this.material = source.material;
    this.geometry = source.geometry;
    return this;
  }
  updateMorphTargets() {
    const geometry = this.geometry;
    if (geometry.isBufferGeometry) {
      const morphAttributes = geometry.morphAttributes;
      const keys = Object.keys(morphAttributes);
      if (keys.length > 0) {
        const morphAttribute = morphAttributes[keys[0]];
        if (morphAttribute !== void 0) {
          this.morphTargetInfluences = [];
          this.morphTargetDictionary = {};
          for (let m = 0, ml = morphAttribute.length; m < ml; m++) {
            const name = morphAttribute[m].name || String(m);
            this.morphTargetInfluences.push(0);
            this.morphTargetDictionary[name] = m;
          }
        }
      }
    } else {
      const morphTargets = geometry.morphTargets;
      if (morphTargets !== void 0 && morphTargets.length > 0) {
        console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");
      }
    }
  }
  raycast(raycaster, intersects2) {
    const geometry = this.geometry;
    const material = this.material;
    const matrixWorld = this.matrixWorld;
    if (material === void 0)
      return;
    if (geometry.boundingSphere === null)
      geometry.computeBoundingSphere();
    _sphere$3.copy(geometry.boundingSphere);
    _sphere$3.applyMatrix4(matrixWorld);
    if (raycaster.ray.intersectsSphere(_sphere$3) === false)
      return;
    _inverseMatrix$2.copy(matrixWorld).invert();
    _ray$2.copy(raycaster.ray).applyMatrix4(_inverseMatrix$2);
    if (geometry.boundingBox !== null) {
      if (_ray$2.intersectsBox(geometry.boundingBox) === false)
        return;
    }
    let intersection;
    if (geometry.isBufferGeometry) {
      const index = geometry.index;
      const position = geometry.attributes.position;
      const morphPosition = geometry.morphAttributes.position;
      const morphTargetsRelative = geometry.morphTargetsRelative;
      const uv = geometry.attributes.uv;
      const uv2 = geometry.attributes.uv2;
      const groups = geometry.groups;
      const drawRange = geometry.drawRange;
      if (index !== null) {
        if (Array.isArray(material)) {
          for (let i = 0, il = groups.length; i < il; i++) {
            const group = groups[i];
            const groupMaterial = material[group.materialIndex];
            const start = Math.max(group.start, drawRange.start);
            const end = Math.min(index.count, Math.min(group.start + group.count, drawRange.start + drawRange.count));
            for (let j = start, jl = end; j < jl; j += 3) {
              const a = index.getX(j);
              const b = index.getX(j + 1);
              const c = index.getX(j + 2);
              intersection = checkBufferGeometryIntersection(this, groupMaterial, raycaster, _ray$2, position, morphPosition, morphTargetsRelative, uv, uv2, a, b, c);
              if (intersection) {
                intersection.faceIndex = Math.floor(j / 3);
                intersection.face.materialIndex = group.materialIndex;
                intersects2.push(intersection);
              }
            }
          }
        } else {
          const start = Math.max(0, drawRange.start);
          const end = Math.min(index.count, drawRange.start + drawRange.count);
          for (let i = start, il = end; i < il; i += 3) {
            const a = index.getX(i);
            const b = index.getX(i + 1);
            const c = index.getX(i + 2);
            intersection = checkBufferGeometryIntersection(this, material, raycaster, _ray$2, position, morphPosition, morphTargetsRelative, uv, uv2, a, b, c);
            if (intersection) {
              intersection.faceIndex = Math.floor(i / 3);
              intersects2.push(intersection);
            }
          }
        }
      } else if (position !== void 0) {
        if (Array.isArray(material)) {
          for (let i = 0, il = groups.length; i < il; i++) {
            const group = groups[i];
            const groupMaterial = material[group.materialIndex];
            const start = Math.max(group.start, drawRange.start);
            const end = Math.min(position.count, Math.min(group.start + group.count, drawRange.start + drawRange.count));
            for (let j = start, jl = end; j < jl; j += 3) {
              const a = j;
              const b = j + 1;
              const c = j + 2;
              intersection = checkBufferGeometryIntersection(this, groupMaterial, raycaster, _ray$2, position, morphPosition, morphTargetsRelative, uv, uv2, a, b, c);
              if (intersection) {
                intersection.faceIndex = Math.floor(j / 3);
                intersection.face.materialIndex = group.materialIndex;
                intersects2.push(intersection);
              }
            }
          }
        } else {
          const start = Math.max(0, drawRange.start);
          const end = Math.min(position.count, drawRange.start + drawRange.count);
          for (let i = start, il = end; i < il; i += 3) {
            const a = i;
            const b = i + 1;
            const c = i + 2;
            intersection = checkBufferGeometryIntersection(this, material, raycaster, _ray$2, position, morphPosition, morphTargetsRelative, uv, uv2, a, b, c);
            if (intersection) {
              intersection.faceIndex = Math.floor(i / 3);
              intersects2.push(intersection);
            }
          }
        }
      }
    } else if (geometry.isGeometry) {
      console.error("THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");
    }
  }
};
Mesh.prototype.isMesh = true;
function checkIntersection(object, material, raycaster, ray, pA, pB, pC, point) {
  let intersect;
  if (material.side === BackSide) {
    intersect = ray.intersectTriangle(pC, pB, pA, true, point);
  } else {
    intersect = ray.intersectTriangle(pA, pB, pC, material.side !== DoubleSide, point);
  }
  if (intersect === null)
    return null;
  _intersectionPointWorld.copy(point);
  _intersectionPointWorld.applyMatrix4(object.matrixWorld);
  const distance = raycaster.ray.origin.distanceTo(_intersectionPointWorld);
  if (distance < raycaster.near || distance > raycaster.far)
    return null;
  return {
    distance,
    point: _intersectionPointWorld.clone(),
    object
  };
}
function checkBufferGeometryIntersection(object, material, raycaster, ray, position, morphPosition, morphTargetsRelative, uv, uv2, a, b, c) {
  _vA$1.fromBufferAttribute(position, a);
  _vB$1.fromBufferAttribute(position, b);
  _vC$1.fromBufferAttribute(position, c);
  const morphInfluences = object.morphTargetInfluences;
  if (morphPosition && morphInfluences) {
    _morphA.set(0, 0, 0);
    _morphB.set(0, 0, 0);
    _morphC.set(0, 0, 0);
    for (let i = 0, il = morphPosition.length; i < il; i++) {
      const influence = morphInfluences[i];
      const morphAttribute = morphPosition[i];
      if (influence === 0)
        continue;
      _tempA.fromBufferAttribute(morphAttribute, a);
      _tempB.fromBufferAttribute(morphAttribute, b);
      _tempC.fromBufferAttribute(morphAttribute, c);
      if (morphTargetsRelative) {
        _morphA.addScaledVector(_tempA, influence);
        _morphB.addScaledVector(_tempB, influence);
        _morphC.addScaledVector(_tempC, influence);
      } else {
        _morphA.addScaledVector(_tempA.sub(_vA$1), influence);
        _morphB.addScaledVector(_tempB.sub(_vB$1), influence);
        _morphC.addScaledVector(_tempC.sub(_vC$1), influence);
      }
    }
    _vA$1.add(_morphA);
    _vB$1.add(_morphB);
    _vC$1.add(_morphC);
  }
  if (object.isSkinnedMesh) {
    object.boneTransform(a, _vA$1);
    object.boneTransform(b, _vB$1);
    object.boneTransform(c, _vC$1);
  }
  const intersection = checkIntersection(object, material, raycaster, ray, _vA$1, _vB$1, _vC$1, _intersectionPoint);
  if (intersection) {
    if (uv) {
      _uvA$1.fromBufferAttribute(uv, a);
      _uvB$1.fromBufferAttribute(uv, b);
      _uvC$1.fromBufferAttribute(uv, c);
      intersection.uv = Triangle.getUV(_intersectionPoint, _vA$1, _vB$1, _vC$1, _uvA$1, _uvB$1, _uvC$1, new Vector2());
    }
    if (uv2) {
      _uvA$1.fromBufferAttribute(uv2, a);
      _uvB$1.fromBufferAttribute(uv2, b);
      _uvC$1.fromBufferAttribute(uv2, c);
      intersection.uv2 = Triangle.getUV(_intersectionPoint, _vA$1, _vB$1, _vC$1, _uvA$1, _uvB$1, _uvC$1, new Vector2());
    }
    const face = {
      a,
      b,
      c,
      normal: new Vector3(),
      materialIndex: 0
    };
    Triangle.getNormal(_vA$1, _vB$1, _vC$1, face.normal);
    intersection.face = face;
  }
  return intersection;
}
var BoxGeometry = class extends BufferGeometry {
  constructor(width = 1, height = 1, depth = 1, widthSegments = 1, heightSegments = 1, depthSegments = 1) {
    super();
    this.type = "BoxGeometry";
    this.parameters = {
      width,
      height,
      depth,
      widthSegments,
      heightSegments,
      depthSegments
    };
    const scope = this;
    widthSegments = Math.floor(widthSegments);
    heightSegments = Math.floor(heightSegments);
    depthSegments = Math.floor(depthSegments);
    const indices = [];
    const vertices = [];
    const normals = [];
    const uvs = [];
    let numberOfVertices = 0;
    let groupStart = 0;
    buildPlane("z", "y", "x", -1, -1, depth, height, width, depthSegments, heightSegments, 0);
    buildPlane("z", "y", "x", 1, -1, depth, height, -width, depthSegments, heightSegments, 1);
    buildPlane("x", "z", "y", 1, 1, width, depth, height, widthSegments, depthSegments, 2);
    buildPlane("x", "z", "y", 1, -1, width, depth, -height, widthSegments, depthSegments, 3);
    buildPlane("x", "y", "z", 1, -1, width, height, depth, widthSegments, heightSegments, 4);
    buildPlane("x", "y", "z", -1, -1, width, height, -depth, widthSegments, heightSegments, 5);
    this.setIndex(indices);
    this.setAttribute("position", new Float32BufferAttribute(vertices, 3));
    this.setAttribute("normal", new Float32BufferAttribute(normals, 3));
    this.setAttribute("uv", new Float32BufferAttribute(uvs, 2));
    function buildPlane(u, v, w, udir, vdir, width2, height2, depth2, gridX, gridY, materialIndex) {
      const segmentWidth = width2 / gridX;
      const segmentHeight = height2 / gridY;
      const widthHalf = width2 / 2;
      const heightHalf = height2 / 2;
      const depthHalf = depth2 / 2;
      const gridX1 = gridX + 1;
      const gridY1 = gridY + 1;
      let vertexCounter = 0;
      let groupCount = 0;
      const vector = new Vector3();
      for (let iy = 0; iy < gridY1; iy++) {
        const y = iy * segmentHeight - heightHalf;
        for (let ix = 0; ix < gridX1; ix++) {
          const x = ix * segmentWidth - widthHalf;
          vector[u] = x * udir;
          vector[v] = y * vdir;
          vector[w] = depthHalf;
          vertices.push(vector.x, vector.y, vector.z);
          vector[u] = 0;
          vector[v] = 0;
          vector[w] = depth2 > 0 ? 1 : -1;
          normals.push(vector.x, vector.y, vector.z);
          uvs.push(ix / gridX);
          uvs.push(1 - iy / gridY);
          vertexCounter += 1;
        }
      }
      for (let iy = 0; iy < gridY; iy++) {
        for (let ix = 0; ix < gridX; ix++) {
          const a = numberOfVertices + ix + gridX1 * iy;
          const b = numberOfVertices + ix + gridX1 * (iy + 1);
          const c = numberOfVertices + (ix + 1) + gridX1 * (iy + 1);
          const d = numberOfVertices + (ix + 1) + gridX1 * iy;
          indices.push(a, b, d);
          indices.push(b, c, d);
          groupCount += 6;
        }
      }
      scope.addGroup(groupStart, groupCount, materialIndex);
      groupStart += groupCount;
      numberOfVertices += vertexCounter;
    }
  }
  static fromJSON(data) {
    return new BoxGeometry(data.width, data.height, data.depth, data.widthSegments, data.heightSegments, data.depthSegments);
  }
};
function cloneUniforms(src) {
  const dst = {};
  for (const u in src) {
    dst[u] = {};
    for (const p in src[u]) {
      const property = src[u][p];
      if (property && (property.isColor || property.isMatrix3 || property.isMatrix4 || property.isVector2 || property.isVector3 || property.isVector4 || property.isTexture || property.isQuaternion)) {
        dst[u][p] = property.clone();
      } else if (Array.isArray(property)) {
        dst[u][p] = property.slice();
      } else {
        dst[u][p] = property;
      }
    }
  }
  return dst;
}
function mergeUniforms(uniforms) {
  const merged = {};
  for (let u = 0; u < uniforms.length; u++) {
    const tmp2 = cloneUniforms(uniforms[u]);
    for (const p in tmp2) {
      merged[p] = tmp2[p];
    }
  }
  return merged;
}
var UniformsUtils = { clone: cloneUniforms, merge: mergeUniforms };
var default_vertex = "void main() {\n	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}";
var default_fragment = "void main() {\n	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}";
var ShaderMaterial = class extends Material {
  constructor(parameters) {
    super();
    this.type = "ShaderMaterial";
    this.defines = {};
    this.uniforms = {};
    this.vertexShader = default_vertex;
    this.fragmentShader = default_fragment;
    this.linewidth = 1;
    this.wireframe = false;
    this.wireframeLinewidth = 1;
    this.fog = false;
    this.lights = false;
    this.clipping = false;
    this.extensions = {
      derivatives: false,
      fragDepth: false,
      drawBuffers: false,
      shaderTextureLOD: false
    };
    this.defaultAttributeValues = {
      "color": [1, 1, 1],
      "uv": [0, 0],
      "uv2": [0, 0]
    };
    this.index0AttributeName = void 0;
    this.uniformsNeedUpdate = false;
    this.glslVersion = null;
    if (parameters !== void 0) {
      if (parameters.attributes !== void 0) {
        console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead.");
      }
      this.setValues(parameters);
    }
  }
  copy(source) {
    super.copy(source);
    this.fragmentShader = source.fragmentShader;
    this.vertexShader = source.vertexShader;
    this.uniforms = cloneUniforms(source.uniforms);
    this.defines = Object.assign({}, source.defines);
    this.wireframe = source.wireframe;
    this.wireframeLinewidth = source.wireframeLinewidth;
    this.lights = source.lights;
    this.clipping = source.clipping;
    this.extensions = Object.assign({}, source.extensions);
    this.glslVersion = source.glslVersion;
    return this;
  }
  toJSON(meta) {
    const data = super.toJSON(meta);
    data.glslVersion = this.glslVersion;
    data.uniforms = {};
    for (const name in this.uniforms) {
      const uniform = this.uniforms[name];
      const value = uniform.value;
      if (value && value.isTexture) {
        data.uniforms[name] = {
          type: "t",
          value: value.toJSON(meta).uuid
        };
      } else if (value && value.isColor) {
        data.uniforms[name] = {
          type: "c",
          value: value.getHex()
        };
      } else if (value && value.isVector2) {
        data.uniforms[name] = {
          type: "v2",
          value: value.toArray()
        };
      } else if (value && value.isVector3) {
        data.uniforms[name] = {
          type: "v3",
          value: value.toArray()
        };
      } else if (value && value.isVector4) {
        data.uniforms[name] = {
          type: "v4",
          value: value.toArray()
        };
      } else if (value && value.isMatrix3) {
        data.uniforms[name] = {
          type: "m3",
          value: value.toArray()
        };
      } else if (value && value.isMatrix4) {
        data.uniforms[name] = {
          type: "m4",
          value: value.toArray()
        };
      } else {
        data.uniforms[name] = {
          value
        };
      }
    }
    if (Object.keys(this.defines).length > 0)
      data.defines = this.defines;
    data.vertexShader = this.vertexShader;
    data.fragmentShader = this.fragmentShader;
    const extensions = {};
    for (const key in this.extensions) {
      if (this.extensions[key] === true)
        extensions[key] = true;
    }
    if (Object.keys(extensions).length > 0)
      data.extensions = extensions;
    return data;
  }
};
ShaderMaterial.prototype.isShaderMaterial = true;
var Camera = class extends Object3D {
  constructor() {
    super();
    this.type = "Camera";
    this.matrixWorldInverse = new Matrix4();
    this.projectionMatrix = new Matrix4();
    this.projectionMatrixInverse = new Matrix4();
  }
  copy(source, recursive) {
    super.copy(source, recursive);
    this.matrixWorldInverse.copy(source.matrixWorldInverse);
    this.projectionMatrix.copy(source.projectionMatrix);
    this.projectionMatrixInverse.copy(source.projectionMatrixInverse);
    return this;
  }
  getWorldDirection(target) {
    this.updateWorldMatrix(true, false);
    const e = this.matrixWorld.elements;
    return target.set(-e[8], -e[9], -e[10]).normalize();
  }
  updateMatrixWorld(force) {
    super.updateMatrixWorld(force);
    this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  updateWorldMatrix(updateParents, updateChildren) {
    super.updateWorldMatrix(updateParents, updateChildren);
    this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  clone() {
    return new this.constructor().copy(this);
  }
};
Camera.prototype.isCamera = true;
var PerspectiveCamera = class extends Camera {
  constructor(fov2 = 50, aspect2 = 1, near = 0.1, far = 2e3) {
    super();
    this.type = "PerspectiveCamera";
    this.fov = fov2;
    this.zoom = 1;
    this.near = near;
    this.far = far;
    this.focus = 10;
    this.aspect = aspect2;
    this.view = null;
    this.filmGauge = 35;
    this.filmOffset = 0;
    this.updateProjectionMatrix();
  }
  copy(source, recursive) {
    super.copy(source, recursive);
    this.fov = source.fov;
    this.zoom = source.zoom;
    this.near = source.near;
    this.far = source.far;
    this.focus = source.focus;
    this.aspect = source.aspect;
    this.view = source.view === null ? null : Object.assign({}, source.view);
    this.filmGauge = source.filmGauge;
    this.filmOffset = source.filmOffset;
    return this;
  }
  setFocalLength(focalLength) {
    const vExtentSlope = 0.5 * this.getFilmHeight() / focalLength;
    this.fov = RAD2DEG * 2 * Math.atan(vExtentSlope);
    this.updateProjectionMatrix();
  }
  getFocalLength() {
    const vExtentSlope = Math.tan(DEG2RAD * 0.5 * this.fov);
    return 0.5 * this.getFilmHeight() / vExtentSlope;
  }
  getEffectiveFOV() {
    return RAD2DEG * 2 * Math.atan(Math.tan(DEG2RAD * 0.5 * this.fov) / this.zoom);
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  setViewOffset(fullWidth, fullHeight, x, y, width, height) {
    this.aspect = fullWidth / fullHeight;
    if (this.view === null) {
      this.view = {
        enabled: true,
        fullWidth: 1,
        fullHeight: 1,
        offsetX: 0,
        offsetY: 0,
        width: 1,
        height: 1
      };
    }
    this.view.enabled = true;
    this.view.fullWidth = fullWidth;
    this.view.fullHeight = fullHeight;
    this.view.offsetX = x;
    this.view.offsetY = y;
    this.view.width = width;
    this.view.height = height;
    this.updateProjectionMatrix();
  }
  clearViewOffset() {
    if (this.view !== null) {
      this.view.enabled = false;
    }
    this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const near = this.near;
    let top = near * Math.tan(DEG2RAD * 0.5 * this.fov) / this.zoom;
    let height = 2 * top;
    let width = this.aspect * height;
    let left = -0.5 * width;
    const view = this.view;
    if (this.view !== null && this.view.enabled) {
      const fullWidth = view.fullWidth, fullHeight = view.fullHeight;
      left += view.offsetX * width / fullWidth;
      top -= view.offsetY * height / fullHeight;
      width *= view.width / fullWidth;
      height *= view.height / fullHeight;
    }
    const skew = this.filmOffset;
    if (skew !== 0)
      left += near * skew / this.getFilmWidth();
    this.projectionMatrix.makePerspective(left, left + width, top, top - height, near, this.far);
    this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(meta) {
    const data = super.toJSON(meta);
    data.object.fov = this.fov;
    data.object.zoom = this.zoom;
    data.object.near = this.near;
    data.object.far = this.far;
    data.object.focus = this.focus;
    data.object.aspect = this.aspect;
    if (this.view !== null)
      data.object.view = Object.assign({}, this.view);
    data.object.filmGauge = this.filmGauge;
    data.object.filmOffset = this.filmOffset;
    return data;
  }
};
PerspectiveCamera.prototype.isPerspectiveCamera = true;
var fov = 90;
var aspect = 1;
var CubeCamera = class extends Object3D {
  constructor(near, far, renderTarget) {
    super();
    this.type = "CubeCamera";
    if (renderTarget.isWebGLCubeRenderTarget !== true) {
      console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");
      return;
    }
    this.renderTarget = renderTarget;
    const cameraPX = new PerspectiveCamera(fov, aspect, near, far);
    cameraPX.layers = this.layers;
    cameraPX.up.set(0, -1, 0);
    cameraPX.lookAt(new Vector3(1, 0, 0));
    this.add(cameraPX);
    const cameraNX = new PerspectiveCamera(fov, aspect, near, far);
    cameraNX.layers = this.layers;
    cameraNX.up.set(0, -1, 0);
    cameraNX.lookAt(new Vector3(-1, 0, 0));
    this.add(cameraNX);
    const cameraPY = new PerspectiveCamera(fov, aspect, near, far);
    cameraPY.layers = this.layers;
    cameraPY.up.set(0, 0, 1);
    cameraPY.lookAt(new Vector3(0, 1, 0));
    this.add(cameraPY);
    const cameraNY = new PerspectiveCamera(fov, aspect, near, far);
    cameraNY.layers = this.layers;
    cameraNY.up.set(0, 0, -1);
    cameraNY.lookAt(new Vector3(0, -1, 0));
    this.add(cameraNY);
    const cameraPZ = new PerspectiveCamera(fov, aspect, near, far);
    cameraPZ.layers = this.layers;
    cameraPZ.up.set(0, -1, 0);
    cameraPZ.lookAt(new Vector3(0, 0, 1));
    this.add(cameraPZ);
    const cameraNZ = new PerspectiveCamera(fov, aspect, near, far);
    cameraNZ.layers = this.layers;
    cameraNZ.up.set(0, -1, 0);
    cameraNZ.lookAt(new Vector3(0, 0, -1));
    this.add(cameraNZ);
  }
  update(renderer, scene) {
    if (this.parent === null)
      this.updateMatrixWorld();
    const renderTarget = this.renderTarget;
    const [cameraPX, cameraNX, cameraPY, cameraNY, cameraPZ, cameraNZ] = this.children;
    const currentRenderTarget = renderer.getRenderTarget();
    const currentOutputEncoding = renderer.outputEncoding;
    const currentToneMapping = renderer.toneMapping;
    const currentXrEnabled = renderer.xr.enabled;
    renderer.outputEncoding = LinearEncoding;
    renderer.toneMapping = NoToneMapping;
    renderer.xr.enabled = false;
    const generateMipmaps = renderTarget.texture.generateMipmaps;
    renderTarget.texture.generateMipmaps = false;
    renderer.setRenderTarget(renderTarget, 0);
    renderer.render(scene, cameraPX);
    renderer.setRenderTarget(renderTarget, 1);
    renderer.render(scene, cameraNX);
    renderer.setRenderTarget(renderTarget, 2);
    renderer.render(scene, cameraPY);
    renderer.setRenderTarget(renderTarget, 3);
    renderer.render(scene, cameraNY);
    renderer.setRenderTarget(renderTarget, 4);
    renderer.render(scene, cameraPZ);
    renderTarget.texture.generateMipmaps = generateMipmaps;
    renderer.setRenderTarget(renderTarget, 5);
    renderer.render(scene, cameraNZ);
    renderer.setRenderTarget(currentRenderTarget);
    renderer.outputEncoding = currentOutputEncoding;
    renderer.toneMapping = currentToneMapping;
    renderer.xr.enabled = currentXrEnabled;
    renderTarget.texture.needsPMREMUpdate = true;
  }
};
var CubeTexture = class extends Texture {
  constructor(images, mapping, wrapS, wrapT, magFilter, minFilter, format, type, anisotropy, encoding) {
    images = images !== void 0 ? images : [];
    mapping = mapping !== void 0 ? mapping : CubeReflectionMapping;
    super(images, mapping, wrapS, wrapT, magFilter, minFilter, format, type, anisotropy, encoding);
    this.flipY = false;
  }
  get images() {
    return this.image;
  }
  set images(value) {
    this.image = value;
  }
};
CubeTexture.prototype.isCubeTexture = true;
var WebGLCubeRenderTarget = class extends WebGLRenderTarget {
  constructor(size, options = {}) {
    super(size, size, options);
    const image = { width: size, height: size, depth: 1 };
    const images = [image, image, image, image, image, image];
    this.texture = new CubeTexture(images, options.mapping, options.wrapS, options.wrapT, options.magFilter, options.minFilter, options.format, options.type, options.anisotropy, options.encoding);
    this.texture.isRenderTargetTexture = true;
    this.texture.generateMipmaps = options.generateMipmaps !== void 0 ? options.generateMipmaps : false;
    this.texture.minFilter = options.minFilter !== void 0 ? options.minFilter : LinearFilter;
  }
  fromEquirectangularTexture(renderer, texture) {
    this.texture.type = texture.type;
    this.texture.encoding = texture.encoding;
    this.texture.generateMipmaps = texture.generateMipmaps;
    this.texture.minFilter = texture.minFilter;
    this.texture.magFilter = texture.magFilter;
    const shader = {
      uniforms: {
        tEquirect: { value: null }
      },
      vertexShader: `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,
      fragmentShader: `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`
    };
    const geometry = new BoxGeometry(5, 5, 5);
    const material = new ShaderMaterial({
      name: "CubemapFromEquirect",
      uniforms: cloneUniforms(shader.uniforms),
      vertexShader: shader.vertexShader,
      fragmentShader: shader.fragmentShader,
      side: BackSide,
      blending: NoBlending
    });
    material.uniforms.tEquirect.value = texture;
    const mesh = new Mesh(geometry, material);
    const currentMinFilter = texture.minFilter;
    if (texture.minFilter === LinearMipmapLinearFilter)
      texture.minFilter = LinearFilter;
    const camera = new CubeCamera(1, 10, this);
    camera.update(renderer, mesh);
    texture.minFilter = currentMinFilter;
    mesh.geometry.dispose();
    mesh.material.dispose();
    return this;
  }
  clear(renderer, color, depth, stencil) {
    const currentRenderTarget = renderer.getRenderTarget();
    for (let i = 0; i < 6; i++) {
      renderer.setRenderTarget(this, i);
      renderer.clear(color, depth, stencil);
    }
    renderer.setRenderTarget(currentRenderTarget);
  }
};
WebGLCubeRenderTarget.prototype.isWebGLCubeRenderTarget = true;
var _vector1 = /* @__PURE__ */ new Vector3();
var _vector2 = /* @__PURE__ */ new Vector3();
var _normalMatrix = /* @__PURE__ */ new Matrix3();
var Plane = class {
  constructor(normal = new Vector3(1, 0, 0), constant = 0) {
    this.normal = normal;
    this.constant = constant;
  }
  set(normal, constant) {
    this.normal.copy(normal);
    this.constant = constant;
    return this;
  }
  setComponents(x, y, z, w) {
    this.normal.set(x, y, z);
    this.constant = w;
    return this;
  }
  setFromNormalAndCoplanarPoint(normal, point) {
    this.normal.copy(normal);
    this.constant = -point.dot(this.normal);
    return this;
  }
  setFromCoplanarPoints(a, b, c) {
    const normal = _vector1.subVectors(c, b).cross(_vector2.subVectors(a, b)).normalize();
    this.setFromNormalAndCoplanarPoint(normal, a);
    return this;
  }
  copy(plane) {
    this.normal.copy(plane.normal);
    this.constant = plane.constant;
    return this;
  }
  normalize() {
    const inverseNormalLength = 1 / this.normal.length();
    this.normal.multiplyScalar(inverseNormalLength);
    this.constant *= inverseNormalLength;
    return this;
  }
  negate() {
    this.constant *= -1;
    this.normal.negate();
    return this;
  }
  distanceToPoint(point) {
    return this.normal.dot(point) + this.constant;
  }
  distanceToSphere(sphere) {
    return this.distanceToPoint(sphere.center) - sphere.radius;
  }
  projectPoint(point, target) {
    return target.copy(this.normal).multiplyScalar(-this.distanceToPoint(point)).add(point);
  }
  intersectLine(line, target) {
    const direction = line.delta(_vector1);
    const denominator = this.normal.dot(direction);
    if (denominator === 0) {
      if (this.distanceToPoint(line.start) === 0) {
        return target.copy(line.start);
      }
      return null;
    }
    const t = -(line.start.dot(this.normal) + this.constant) / denominator;
    if (t < 0 || t > 1) {
      return null;
    }
    return target.copy(direction).multiplyScalar(t).add(line.start);
  }
  intersectsLine(line) {
    const startSign = this.distanceToPoint(line.start);
    const endSign = this.distanceToPoint(line.end);
    return startSign < 0 && endSign > 0 || endSign < 0 && startSign > 0;
  }
  intersectsBox(box) {
    return box.intersectsPlane(this);
  }
  intersectsSphere(sphere) {
    return sphere.intersectsPlane(this);
  }
  coplanarPoint(target) {
    return target.copy(this.normal).multiplyScalar(-this.constant);
  }
  applyMatrix4(matrix, optionalNormalMatrix) {
    const normalMatrix = optionalNormalMatrix || _normalMatrix.getNormalMatrix(matrix);
    const referencePoint = this.coplanarPoint(_vector1).applyMatrix4(matrix);
    const normal = this.normal.applyMatrix3(normalMatrix).normalize();
    this.constant = -referencePoint.dot(normal);
    return this;
  }
  translate(offset) {
    this.constant -= offset.dot(this.normal);
    return this;
  }
  equals(plane) {
    return plane.normal.equals(this.normal) && plane.constant === this.constant;
  }
  clone() {
    return new this.constructor().copy(this);
  }
};
Plane.prototype.isPlane = true;
var _sphere$2 = /* @__PURE__ */ new Sphere();
var _vector$7 = /* @__PURE__ */ new Vector3();
var Frustum = class {
  constructor(p0 = new Plane(), p1 = new Plane(), p2 = new Plane(), p3 = new Plane(), p4 = new Plane(), p5 = new Plane()) {
    this.planes = [p0, p1, p2, p3, p4, p5];
  }
  set(p0, p1, p2, p3, p4, p5) {
    const planes = this.planes;
    planes[0].copy(p0);
    planes[1].copy(p1);
    planes[2].copy(p2);
    planes[3].copy(p3);
    planes[4].copy(p4);
    planes[5].copy(p5);
    return this;
  }
  copy(frustum) {
    const planes = this.planes;
    for (let i = 0; i < 6; i++) {
      planes[i].copy(frustum.planes[i]);
    }
    return this;
  }
  setFromProjectionMatrix(m) {
    const planes = this.planes;
    const me = m.elements;
    const me0 = me[0], me1 = me[1], me2 = me[2], me3 = me[3];
    const me4 = me[4], me5 = me[5], me6 = me[6], me7 = me[7];
    const me8 = me[8], me9 = me[9], me10 = me[10], me11 = me[11];
    const me12 = me[12], me13 = me[13], me14 = me[14], me15 = me[15];
    planes[0].setComponents(me3 - me0, me7 - me4, me11 - me8, me15 - me12).normalize();
    planes[1].setComponents(me3 + me0, me7 + me4, me11 + me8, me15 + me12).normalize();
    planes[2].setComponents(me3 + me1, me7 + me5, me11 + me9, me15 + me13).normalize();
    planes[3].setComponents(me3 - me1, me7 - me5, me11 - me9, me15 - me13).normalize();
    planes[4].setComponents(me3 - me2, me7 - me6, me11 - me10, me15 - me14).normalize();
    planes[5].setComponents(me3 + me2, me7 + me6, me11 + me10, me15 + me14).normalize();
    return this;
  }
  intersectsObject(object) {
    const geometry = object.geometry;
    if (geometry.boundingSphere === null)
      geometry.computeBoundingSphere();
    _sphere$2.copy(geometry.boundingSphere).applyMatrix4(object.matrixWorld);
    return this.intersectsSphere(_sphere$2);
  }
  intersectsSprite(sprite) {
    _sphere$2.center.set(0, 0, 0);
    _sphere$2.radius = 0.7071067811865476;
    _sphere$2.applyMatrix4(sprite.matrixWorld);
    return this.intersectsSphere(_sphere$2);
  }
  intersectsSphere(sphere) {
    const planes = this.planes;
    const center = sphere.center;
    const negRadius = -sphere.radius;
    for (let i = 0; i < 6; i++) {
      const distance = planes[i].distanceToPoint(center);
      if (distance < negRadius) {
        return false;
      }
    }
    return true;
  }
  intersectsBox(box) {
    const planes = this.planes;
    for (let i = 0; i < 6; i++) {
      const plane = planes[i];
      _vector$7.x = plane.normal.x > 0 ? box.max.x : box.min.x;
      _vector$7.y = plane.normal.y > 0 ? box.max.y : box.min.y;
      _vector$7.z = plane.normal.z > 0 ? box.max.z : box.min.z;
      if (plane.distanceToPoint(_vector$7) < 0) {
        return false;
      }
    }
    return true;
  }
  containsPoint(point) {
    const planes = this.planes;
    for (let i = 0; i < 6; i++) {
      if (planes[i].distanceToPoint(point) < 0) {
        return false;
      }
    }
    return true;
  }
  clone() {
    return new this.constructor().copy(this);
  }
};
function WebGLAnimation() {
  let context = null;
  let isAnimating = false;
  let animationLoop = null;
  let requestId = null;
  function onAnimationFrame(time, frame) {
    animationLoop(time, frame);
    requestId = context.requestAnimationFrame(onAnimationFrame);
  }
  return {
    start: function() {
      if (isAnimating === true)
        return;
      if (animationLoop === null)
        return;
      requestId = context.requestAnimationFrame(onAnimationFrame);
      isAnimating = true;
    },
    stop: function() {
      context.cancelAnimationFrame(requestId);
      isAnimating = false;
    },
    setAnimationLoop: function(callback) {
      animationLoop = callback;
    },
    setContext: function(value) {
      context = value;
    }
  };
}
function WebGLAttributes(gl, capabilities) {
  const isWebGL2 = capabilities.isWebGL2;
  const buffers = /* @__PURE__ */ new WeakMap();
  function createBuffer(attribute, bufferType) {
    const array = attribute.array;
    const usage = attribute.usage;
    const buffer = gl.createBuffer();
    gl.bindBuffer(bufferType, buffer);
    gl.bufferData(bufferType, array, usage);
    attribute.onUploadCallback();
    let type;
    if (array instanceof Float32Array) {
      type = 5126;
    } else if (array instanceof Uint16Array) {
      if (attribute.isFloat16BufferAttribute) {
        if (isWebGL2) {
          type = 5131;
        } else {
          throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");
        }
      } else {
        type = 5123;
      }
    } else if (array instanceof Int16Array) {
      type = 5122;
    } else if (array instanceof Uint32Array) {
      type = 5125;
    } else if (array instanceof Int32Array) {
      type = 5124;
    } else if (array instanceof Int8Array) {
      type = 5120;
    } else if (array instanceof Uint8Array) {
      type = 5121;
    } else if (array instanceof Uint8ClampedArray) {
      type = 5121;
    } else {
      throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + array);
    }
    return {
      buffer,
      type,
      bytesPerElement: array.BYTES_PER_ELEMENT,
      version: attribute.version
    };
  }
  function updateBuffer(buffer, attribute, bufferType) {
    const array = attribute.array;
    const updateRange = attribute.updateRange;
    gl.bindBuffer(bufferType, buffer);
    if (updateRange.count === -1) {
      gl.bufferSubData(bufferType, 0, array);
    } else {
      if (isWebGL2) {
        gl.bufferSubData(bufferType, updateRange.offset * array.BYTES_PER_ELEMENT, array, updateRange.offset, updateRange.count);
      } else {
        gl.bufferSubData(bufferType, updateRange.offset * array.BYTES_PER_ELEMENT, array.subarray(updateRange.offset, updateRange.offset + updateRange.count));
      }
      updateRange.count = -1;
    }
  }
  function get(attribute) {
    if (attribute.isInterleavedBufferAttribute)
      attribute = attribute.data;
    return buffers.get(attribute);
  }
  function remove(attribute) {
    if (attribute.isInterleavedBufferAttribute)
      attribute = attribute.data;
    const data = buffers.get(attribute);
    if (data) {
      gl.deleteBuffer(data.buffer);
      buffers.delete(attribute);
    }
  }
  function update(attribute, bufferType) {
    if (attribute.isGLBufferAttribute) {
      const cached = buffers.get(attribute);
      if (!cached || cached.version < attribute.version) {
        buffers.set(attribute, {
          buffer: attribute.buffer,
          type: attribute.type,
          bytesPerElement: attribute.elementSize,
          version: attribute.version
        });
      }
      return;
    }
    if (attribute.isInterleavedBufferAttribute)
      attribute = attribute.data;
    const data = buffers.get(attribute);
    if (data === void 0) {
      buffers.set(attribute, createBuffer(attribute, bufferType));
    } else if (data.version < attribute.version) {
      updateBuffer(data.buffer, attribute, bufferType);
      data.version = attribute.version;
    }
  }
  return {
    get,
    remove,
    update
  };
}
var PlaneGeometry = class extends BufferGeometry {
  constructor(width = 1, height = 1, widthSegments = 1, heightSegments = 1) {
    super();
    this.type = "PlaneGeometry";
    this.parameters = {
      width,
      height,
      widthSegments,
      heightSegments
    };
    const width_half = width / 2;
    const height_half = height / 2;
    const gridX = Math.floor(widthSegments);
    const gridY = Math.floor(heightSegments);
    const gridX1 = gridX + 1;
    const gridY1 = gridY + 1;
    const segment_width = width / gridX;
    const segment_height = height / gridY;
    const indices = [];
    const vertices = [];
    const normals = [];
    const uvs = [];
    for (let iy = 0; iy < gridY1; iy++) {
      const y = iy * segment_height - height_half;
      for (let ix = 0; ix < gridX1; ix++) {
        const x = ix * segment_width - width_half;
        vertices.push(x, -y, 0);
        normals.push(0, 0, 1);
        uvs.push(ix / gridX);
        uvs.push(1 - iy / gridY);
      }
    }
    for (let iy = 0; iy < gridY; iy++) {
      for (let ix = 0; ix < gridX; ix++) {
        const a = ix + gridX1 * iy;
        const b = ix + gridX1 * (iy + 1);
        const c = ix + 1 + gridX1 * (iy + 1);
        const d = ix + 1 + gridX1 * iy;
        indices.push(a, b, d);
        indices.push(b, c, d);
      }
    }
    this.setIndex(indices);
    this.setAttribute("position", new Float32BufferAttribute(vertices, 3));
    this.setAttribute("normal", new Float32BufferAttribute(normals, 3));
    this.setAttribute("uv", new Float32BufferAttribute(uvs, 2));
  }
  static fromJSON(data) {
    return new PlaneGeometry(data.width, data.height, data.widthSegments, data.heightSegments);
  }
};
var alphamap_fragment = "#ifdef USE_ALPHAMAP\n	diffuseColor.a *= texture2D( alphaMap, vUv ).g;\n#endif";
var alphamap_pars_fragment = "#ifdef USE_ALPHAMAP\n	uniform sampler2D alphaMap;\n#endif";
var alphatest_fragment = "#ifdef USE_ALPHATEST\n	if ( diffuseColor.a < alphaTest ) discard;\n#endif";
var alphatest_pars_fragment = "#ifdef USE_ALPHATEST\n	uniform float alphaTest;\n#endif";
var aomap_fragment = "#ifdef USE_AOMAP\n	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\n	reflectedLight.indirectDiffuse *= ambientOcclusion;\n	#if defined( USE_ENVMAP ) && defined( STANDARD )\n		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );\n	#endif\n#endif";
var aomap_pars_fragment = "#ifdef USE_AOMAP\n	uniform sampler2D aoMap;\n	uniform float aoMapIntensity;\n#endif";
var begin_vertex = "vec3 transformed = vec3( position );";
var beginnormal_vertex = "vec3 objectNormal = vec3( normal );\n#ifdef USE_TANGENT\n	vec3 objectTangent = vec3( tangent.xyz );\n#endif";
var bsdfs = "vec3 BRDF_Lambert( const in vec3 diffuseColor ) {\n	return RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {\n	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );\n	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );\n}\nfloat V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n	float a2 = pow2( alpha );\n	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n	return 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n	float a2 = pow2( alpha );\n	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n	return RECIPROCAL_PI * a2 / pow2( denom );\n}\nvec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {\n	float alpha = pow2( roughness );\n	vec3 halfDir = normalize( lightDir + viewDir );\n	float dotNL = saturate( dot( normal, lightDir ) );\n	float dotNV = saturate( dot( normal, viewDir ) );\n	float dotNH = saturate( dot( normal, halfDir ) );\n	float dotVH = saturate( dot( viewDir, halfDir ) );\n	vec3 F = F_Schlick( f0, f90, dotVH );\n	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n	float D = D_GGX( alpha, dotNH );\n	return F * ( V * D );\n}\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n	const float LUT_SIZE = 64.0;\n	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n	const float LUT_BIAS = 0.5 / LUT_SIZE;\n	float dotNV = saturate( dot( N, V ) );\n	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );\n	uv = uv * LUT_SCALE + LUT_BIAS;\n	return uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n	float l = length( f );\n	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n	float x = dot( v1, v2 );\n	float y = abs( x );\n	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;\n	float b = 3.4175940 + ( 4.1616724 + y ) * y;\n	float v = a / b;\n	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;\n	return cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n	vec3 lightNormal = cross( v1, v2 );\n	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n	vec3 T1, T2;\n	T1 = normalize( V - N * dot( V, N ) );\n	T2 = - cross( N, T1 );\n	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );\n	vec3 coords[ 4 ];\n	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n	coords[ 0 ] = normalize( coords[ 0 ] );\n	coords[ 1 ] = normalize( coords[ 1 ] );\n	coords[ 2 ] = normalize( coords[ 2 ] );\n	coords[ 3 ] = normalize( coords[ 3 ] );\n	vec3 vectorFormFactor = vec3( 0.0 );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );\n	return vec3( result );\n}\nfloat G_BlinnPhong_Implicit( ) {\n	return 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {\n	vec3 halfDir = normalize( lightDir + viewDir );\n	float dotNH = saturate( dot( normal, halfDir ) );\n	float dotVH = saturate( dot( viewDir, halfDir ) );\n	vec3 F = F_Schlick( specularColor, 1.0, dotVH );\n	float G = G_BlinnPhong_Implicit( );\n	float D = D_BlinnPhong( shininess, dotNH );\n	return F * ( G * D );\n}\n#if defined( USE_SHEEN )\nfloat D_Charlie( float roughness, float dotNH ) {\n	float alpha = pow2( roughness );\n	float invAlpha = 1.0 / alpha;\n	float cos2h = dotNH * dotNH;\n	float sin2h = max( 1.0 - cos2h, 0.0078125 );\n	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );\n}\nfloat V_Neubelt( float dotNV, float dotNL ) {\n	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );\n}\nvec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {\n	vec3 halfDir = normalize( lightDir + viewDir );\n	float dotNL = saturate( dot( normal, lightDir ) );\n	float dotNV = saturate( dot( normal, viewDir ) );\n	float dotNH = saturate( dot( normal, halfDir ) );\n	float D = D_Charlie( sheenRoughness, dotNH );\n	float V = V_Neubelt( dotNV, dotNL );\n	return sheenColor * ( D * V );\n}\n#endif";
var bumpmap_pars_fragment = "#ifdef USE_BUMPMAP\n	uniform sampler2D bumpMap;\n	uniform float bumpScale;\n	vec2 dHdxy_fwd() {\n		vec2 dSTdx = dFdx( vUv );\n		vec2 dSTdy = dFdy( vUv );\n		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n		return vec2( dBx, dBy );\n	}\n	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {\n		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );\n		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );\n		vec3 vN = surf_norm;\n		vec3 R1 = cross( vSigmaY, vN );\n		vec3 R2 = cross( vN, vSigmaX );\n		float fDet = dot( vSigmaX, R1 ) * faceDirection;\n		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n		return normalize( abs( fDet ) * surf_norm - vGrad );\n	}\n#endif";
var clipping_planes_fragment = "#if NUM_CLIPPING_PLANES > 0\n	vec4 plane;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n		plane = clippingPlanes[ i ];\n		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;\n	}\n	#pragma unroll_loop_end\n	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n		bool clipped = true;\n		#pragma unroll_loop_start\n		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n			plane = clippingPlanes[ i ];\n			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;\n		}\n		#pragma unroll_loop_end\n		if ( clipped ) discard;\n	#endif\n#endif";
var clipping_planes_pars_fragment = "#if NUM_CLIPPING_PLANES > 0\n	varying vec3 vClipPosition;\n	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif";
var clipping_planes_pars_vertex = "#if NUM_CLIPPING_PLANES > 0\n	varying vec3 vClipPosition;\n#endif";
var clipping_planes_vertex = "#if NUM_CLIPPING_PLANES > 0\n	vClipPosition = - mvPosition.xyz;\n#endif";
var color_fragment = "#if defined( USE_COLOR_ALPHA )\n	diffuseColor *= vColor;\n#elif defined( USE_COLOR )\n	diffuseColor.rgb *= vColor;\n#endif";
var color_pars_fragment = "#if defined( USE_COLOR_ALPHA )\n	varying vec4 vColor;\n#elif defined( USE_COLOR )\n	varying vec3 vColor;\n#endif";
var color_pars_vertex = "#if defined( USE_COLOR_ALPHA )\n	varying vec4 vColor;\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )\n	varying vec3 vColor;\n#endif";
var color_vertex = "#if defined( USE_COLOR_ALPHA )\n	vColor = vec4( 1.0 );\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )\n	vColor = vec3( 1.0 );\n#endif\n#ifdef USE_COLOR\n	vColor *= color;\n#endif\n#ifdef USE_INSTANCING_COLOR\n	vColor.xyz *= instanceColor.xyz;\n#endif";
var common = "#define PI 3.141592653589793\n#define PI2 6.283185307179586\n#define PI_HALF 1.5707963267948966\n#define RECIPROCAL_PI 0.3183098861837907\n#define RECIPROCAL_PI2 0.15915494309189535\n#define EPSILON 1e-6\n#ifndef saturate\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\n#define whiteComplement( a ) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }\nfloat average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }\nhighp float rand( const in vec2 uv ) {\n	const highp float a = 12.9898, b = 78.233, c = 43758.5453;\n	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n	return fract( sin( sn ) * c );\n}\n#ifdef HIGH_PRECISION\n	float precisionSafeLength( vec3 v ) { return length( v ); }\n#else\n	float precisionSafeLength( vec3 v ) {\n		float maxComponent = max3( abs( v ) );\n		return length( v / maxComponent ) * maxComponent;\n	}\n#endif\nstruct IncidentLight {\n	vec3 color;\n	vec3 direction;\n	bool visible;\n};\nstruct ReflectedLight {\n	vec3 directDiffuse;\n	vec3 directSpecular;\n	vec3 indirectDiffuse;\n	vec3 indirectSpecular;\n};\nstruct GeometricContext {\n	vec3 position;\n	vec3 normal;\n	vec3 viewDir;\n#ifdef USE_CLEARCOAT\n	vec3 clearcoatNormal;\n#endif\n};\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nmat3 transposeMat3( const in mat3 m ) {\n	mat3 tmp;\n	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );\n	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );\n	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );\n	return tmp;\n}\nfloat linearToRelativeLuminance( const in vec3 color ) {\n	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );\n	return dot( weights, color.rgb );\n}\nbool isPerspectiveMatrix( mat4 m ) {\n	return m[ 2 ][ 3 ] == - 1.0;\n}\nvec2 equirectUv( in vec3 dir ) {\n	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;\n	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n	return vec2( u, v );\n}";
var cube_uv_reflection_fragment = "#ifdef ENVMAP_TYPE_CUBE_UV\n	#define cubeUV_minMipLevel 4.0\n	#define cubeUV_minTileSize 16.0\n	float getFace( vec3 direction ) {\n		vec3 absDirection = abs( direction );\n		float face = - 1.0;\n		if ( absDirection.x > absDirection.z ) {\n			if ( absDirection.x > absDirection.y )\n				face = direction.x > 0.0 ? 0.0 : 3.0;\n			else\n				face = direction.y > 0.0 ? 1.0 : 4.0;\n		} else {\n			if ( absDirection.z > absDirection.y )\n				face = direction.z > 0.0 ? 2.0 : 5.0;\n			else\n				face = direction.y > 0.0 ? 1.0 : 4.0;\n		}\n		return face;\n	}\n	vec2 getUV( vec3 direction, float face ) {\n		vec2 uv;\n		if ( face == 0.0 ) {\n			uv = vec2( direction.z, direction.y ) / abs( direction.x );\n		} else if ( face == 1.0 ) {\n			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );\n		} else if ( face == 2.0 ) {\n			uv = vec2( - direction.x, direction.y ) / abs( direction.z );\n		} else if ( face == 3.0 ) {\n			uv = vec2( - direction.z, direction.y ) / abs( direction.x );\n		} else if ( face == 4.0 ) {\n			uv = vec2( - direction.x, direction.z ) / abs( direction.y );\n		} else {\n			uv = vec2( direction.x, direction.y ) / abs( direction.z );\n		}\n		return 0.5 * ( uv + 1.0 );\n	}\n	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {\n		float face = getFace( direction );\n		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );\n		mipInt = max( mipInt, cubeUV_minMipLevel );\n		float faceSize = exp2( mipInt );\n		vec2 uv = getUV( direction, face ) * ( faceSize - 1.0 ) + 0.5;\n		if ( face > 2.0 ) {\n			uv.y += faceSize;\n			face -= 3.0;\n		}\n		uv.x += face * faceSize;\n		uv.x += filterInt * 3.0 * cubeUV_minTileSize;\n		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );\n		uv.x *= CUBEUV_TEXEL_WIDTH;\n		uv.y *= CUBEUV_TEXEL_HEIGHT;\n		#ifdef texture2DGradEXT\n			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;\n		#else\n			return texture2D( envMap, uv ).rgb;\n		#endif\n	}\n	#define r0 1.0\n	#define v0 0.339\n	#define m0 - 2.0\n	#define r1 0.8\n	#define v1 0.276\n	#define m1 - 1.0\n	#define r4 0.4\n	#define v4 0.046\n	#define m4 2.0\n	#define r5 0.305\n	#define v5 0.016\n	#define m5 3.0\n	#define r6 0.21\n	#define v6 0.0038\n	#define m6 4.0\n	float roughnessToMip( float roughness ) {\n		float mip = 0.0;\n		if ( roughness >= r1 ) {\n			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;\n		} else if ( roughness >= r4 ) {\n			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;\n		} else if ( roughness >= r5 ) {\n			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;\n		} else if ( roughness >= r6 ) {\n			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;\n		} else {\n			mip = - 2.0 * log2( 1.16 * roughness );		}\n		return mip;\n	}\n	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {\n		float mip = clamp( roughnessToMip( roughness ), m0, CUBEUV_MAX_MIP );\n		float mipF = fract( mip );\n		float mipInt = floor( mip );\n		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );\n		if ( mipF == 0.0 ) {\n			return vec4( color0, 1.0 );\n		} else {\n			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );\n			return vec4( mix( color0, color1, mipF ), 1.0 );\n		}\n	}\n#endif";
var defaultnormal_vertex = "vec3 transformedNormal = objectNormal;\n#ifdef USE_INSTANCING\n	mat3 m = mat3( instanceMatrix );\n	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );\n	transformedNormal = m * transformedNormal;\n#endif\ntransformedNormal = normalMatrix * transformedNormal;\n#ifdef FLIP_SIDED\n	transformedNormal = - transformedNormal;\n#endif\n#ifdef USE_TANGENT\n	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n	#ifdef FLIP_SIDED\n		transformedTangent = - transformedTangent;\n	#endif\n#endif";
var displacementmap_pars_vertex = "#ifdef USE_DISPLACEMENTMAP\n	uniform sampler2D displacementMap;\n	uniform float displacementScale;\n	uniform float displacementBias;\n#endif";
var displacementmap_vertex = "#ifdef USE_DISPLACEMENTMAP\n	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );\n#endif";
var emissivemap_fragment = "#ifdef USE_EMISSIVEMAP\n	vec4 emissiveColor = texture2D( emissiveMap, vUv );\n	totalEmissiveRadiance *= emissiveColor.rgb;\n#endif";
var emissivemap_pars_fragment = "#ifdef USE_EMISSIVEMAP\n	uniform sampler2D emissiveMap;\n#endif";
var encodings_fragment = "gl_FragColor = linearToOutputTexel( gl_FragColor );";
var encodings_pars_fragment = "vec4 LinearToLinear( in vec4 value ) {\n	return value;\n}\nvec4 LinearTosRGB( in vec4 value ) {\n	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );\n}";
var envmap_fragment = "#ifdef USE_ENVMAP\n	#ifdef ENV_WORLDPOS\n		vec3 cameraToFrag;\n		if ( isOrthographic ) {\n			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n		} else {\n			cameraToFrag = normalize( vWorldPosition - cameraPosition );\n		}\n		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n		#ifdef ENVMAP_MODE_REFLECTION\n			vec3 reflectVec = reflect( cameraToFrag, worldNormal );\n		#else\n			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );\n		#endif\n	#else\n		vec3 reflectVec = vReflect;\n	#endif\n	#ifdef ENVMAP_TYPE_CUBE\n		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n	#elif defined( ENVMAP_TYPE_CUBE_UV )\n		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );\n	#else\n		vec4 envColor = vec4( 0.0 );\n	#endif\n	#ifdef ENVMAP_BLENDING_MULTIPLY\n		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n	#elif defined( ENVMAP_BLENDING_MIX )\n		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n	#elif defined( ENVMAP_BLENDING_ADD )\n		outgoingLight += envColor.xyz * specularStrength * reflectivity;\n	#endif\n#endif";
var envmap_common_pars_fragment = "#ifdef USE_ENVMAP\n	uniform float envMapIntensity;\n	uniform float flipEnvMap;\n	#ifdef ENVMAP_TYPE_CUBE\n		uniform samplerCube envMap;\n	#else\n		uniform sampler2D envMap;\n	#endif\n	\n#endif";
var envmap_pars_fragment = "#ifdef USE_ENVMAP\n	uniform float reflectivity;\n	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n		#define ENV_WORLDPOS\n	#endif\n	#ifdef ENV_WORLDPOS\n		varying vec3 vWorldPosition;\n		uniform float refractionRatio;\n	#else\n		varying vec3 vReflect;\n	#endif\n#endif";
var envmap_pars_vertex = "#ifdef USE_ENVMAP\n	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )\n		#define ENV_WORLDPOS\n	#endif\n	#ifdef ENV_WORLDPOS\n		\n		varying vec3 vWorldPosition;\n	#else\n		varying vec3 vReflect;\n		uniform float refractionRatio;\n	#endif\n#endif";
var envmap_vertex = "#ifdef USE_ENVMAP\n	#ifdef ENV_WORLDPOS\n		vWorldPosition = worldPosition.xyz;\n	#else\n		vec3 cameraToVertex;\n		if ( isOrthographic ) {\n			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n		} else {\n			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n		}\n		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n		#ifdef ENVMAP_MODE_REFLECTION\n			vReflect = reflect( cameraToVertex, worldNormal );\n		#else\n			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n		#endif\n	#endif\n#endif";
var fog_vertex = "#ifdef USE_FOG\n	vFogDepth = - mvPosition.z;\n#endif";
var fog_pars_vertex = "#ifdef USE_FOG\n	varying float vFogDepth;\n#endif";
var fog_fragment = "#ifdef USE_FOG\n	#ifdef FOG_EXP2\n		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );\n	#else\n		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );\n	#endif\n	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif";
var fog_pars_fragment = "#ifdef USE_FOG\n	uniform vec3 fogColor;\n	varying float vFogDepth;\n	#ifdef FOG_EXP2\n		uniform float fogDensity;\n	#else\n		uniform float fogNear;\n		uniform float fogFar;\n	#endif\n#endif";
var gradientmap_pars_fragment = "#ifdef USE_GRADIENTMAP\n	uniform sampler2D gradientMap;\n#endif\nvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n	float dotNL = dot( normal, lightDirection );\n	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n	#ifdef USE_GRADIENTMAP\n		return vec3( texture2D( gradientMap, coord ).r );\n	#else\n		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );\n	#endif\n}";
var lightmap_fragment = "#ifdef USE_LIGHTMAP\n	vec4 lightMapTexel = texture2D( lightMap, vUv2 );\n	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;\n	reflectedLight.indirectDiffuse += lightMapIrradiance;\n#endif";
var lightmap_pars_fragment = "#ifdef USE_LIGHTMAP\n	uniform sampler2D lightMap;\n	uniform float lightMapIntensity;\n#endif";
var lights_lambert_vertex = "vec3 diffuse = vec3( 1.0 );\nGeometricContext geometry;\ngeometry.position = mvPosition.xyz;\ngeometry.normal = normalize( transformedNormal );\ngeometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );\nGeometricContext backGeometry;\nbackGeometry.position = geometry.position;\nbackGeometry.normal = -geometry.normal;\nbackGeometry.viewDir = geometry.viewDir;\nvLightFront = vec3( 0.0 );\nvIndirectFront = vec3( 0.0 );\n#ifdef DOUBLE_SIDED\n	vLightBack = vec3( 0.0 );\n	vIndirectBack = vec3( 0.0 );\n#endif\nIncidentLight directLight;\nfloat dotNL;\nvec3 directLightColor_Diffuse;\nvIndirectFront += getAmbientLightIrradiance( ambientLightColor );\nvIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );\n#ifdef DOUBLE_SIDED\n	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );\n	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );\n#endif\n#if NUM_POINT_LIGHTS > 0\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n		getPointLightInfo( pointLights[ i ], geometry, directLight );\n		dotNL = dot( geometry.normal, directLight.direction );\n		directLightColor_Diffuse = directLight.color;\n		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n		#ifdef DOUBLE_SIDED\n			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;\n		#endif\n	}\n	#pragma unroll_loop_end\n#endif\n#if NUM_SPOT_LIGHTS > 0\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n		getSpotLightInfo( spotLights[ i ], geometry, directLight );\n		dotNL = dot( geometry.normal, directLight.direction );\n		directLightColor_Diffuse = directLight.color;\n		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n		#ifdef DOUBLE_SIDED\n			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;\n		#endif\n	}\n	#pragma unroll_loop_end\n#endif\n#if NUM_DIR_LIGHTS > 0\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );\n		dotNL = dot( geometry.normal, directLight.direction );\n		directLightColor_Diffuse = directLight.color;\n		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n		#ifdef DOUBLE_SIDED\n			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;\n		#endif\n	}\n	#pragma unroll_loop_end\n#endif\n#if NUM_HEMI_LIGHTS > 0\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );\n		#ifdef DOUBLE_SIDED\n			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );\n		#endif\n	}\n	#pragma unroll_loop_end\n#endif";
var lights_pars_begin = "uniform bool receiveShadow;\nuniform vec3 ambientLightColor;\nuniform vec3 lightProbe[ 9 ];\nvec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {\n	float x = normal.x, y = normal.y, z = normal.z;\n	vec3 result = shCoefficients[ 0 ] * 0.886227;\n	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;\n	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;\n	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;\n	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;\n	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;\n	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );\n	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;\n	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );\n	return result;\n}\nvec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {\n	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );\n	return irradiance;\n}\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n	vec3 irradiance = ambientLightColor;\n	return irradiance;\n}\nfloat getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n	#if defined ( PHYSICALLY_CORRECT_LIGHTS )\n		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n		if ( cutoffDistance > 0.0 ) {\n			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n		}\n		return distanceFalloff;\n	#else\n		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {\n			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );\n		}\n		return 1.0;\n	#endif\n}\nfloat getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {\n	return smoothstep( coneCosine, penumbraCosine, angleCosine );\n}\n#if NUM_DIR_LIGHTS > 0\n	struct DirectionalLight {\n		vec3 direction;\n		vec3 color;\n	};\n	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {\n		light.color = directionalLight.color;\n		light.direction = directionalLight.direction;\n		light.visible = true;\n	}\n#endif\n#if NUM_POINT_LIGHTS > 0\n	struct PointLight {\n		vec3 position;\n		vec3 color;\n		float distance;\n		float decay;\n	};\n	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {\n		vec3 lVector = pointLight.position - geometry.position;\n		light.direction = normalize( lVector );\n		float lightDistance = length( lVector );\n		light.color = pointLight.color;\n		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );\n		light.visible = ( light.color != vec3( 0.0 ) );\n	}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n	struct SpotLight {\n		vec3 position;\n		vec3 direction;\n		vec3 color;\n		float distance;\n		float decay;\n		float coneCos;\n		float penumbraCos;\n	};\n	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {\n		vec3 lVector = spotLight.position - geometry.position;\n		light.direction = normalize( lVector );\n		float angleCos = dot( light.direction, spotLight.direction );\n		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n		if ( spotAttenuation > 0.0 ) {\n			float lightDistance = length( lVector );\n			light.color = spotLight.color * spotAttenuation;\n			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );\n			light.visible = ( light.color != vec3( 0.0 ) );\n		} else {\n			light.color = vec3( 0.0 );\n			light.visible = false;\n		}\n	}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n	struct RectAreaLight {\n		vec3 color;\n		vec3 position;\n		vec3 halfWidth;\n		vec3 halfHeight;\n	};\n	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;\n	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n	struct HemisphereLight {\n		vec3 direction;\n		vec3 skyColor;\n		vec3 groundColor;\n	};\n	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {\n		float dotNL = dot( normal, hemiLight.direction );\n		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n		return irradiance;\n	}\n#endif";
var envmap_physical_pars_fragment = "#if defined( USE_ENVMAP )\n	vec3 getIBLIrradiance( const in vec3 normal ) {\n		#if defined( ENVMAP_TYPE_CUBE_UV )\n			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );\n			return PI * envMapColor.rgb * envMapIntensity;\n		#else\n			return vec3( 0.0 );\n		#endif\n	}\n	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {\n		#if defined( ENVMAP_TYPE_CUBE_UV )\n			vec3 reflectVec = reflect( - viewDir, normal );\n			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );\n			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );\n			return envMapColor.rgb * envMapIntensity;\n		#else\n			return vec3( 0.0 );\n		#endif\n	}\n#endif";
var lights_toon_fragment = "ToonMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;";
var lights_toon_pars_fragment = "varying vec3 vViewPosition;\nstruct ToonMaterial {\n	vec3 diffuseColor;\n};\nvoid RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;\n	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct				RE_Direct_Toon\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon\n#define Material_LightProbeLOD( material )	(0)";
var lights_phong_fragment = "BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;";
var lights_phong_pars_fragment = "varying vec3 vViewPosition;\nstruct BlinnPhongMaterial {\n	vec3 diffuseColor;\n	vec3 specularColor;\n	float specularShininess;\n	float specularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n	vec3 irradiance = dotNL * directLight.color;\n	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct				RE_Direct_BlinnPhong\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong\n#define Material_LightProbeLOD( material )	(0)";
var lights_physical_fragment = "PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nvec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );\nfloat geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );\nmaterial.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;\nmaterial.roughness = min( material.roughness, 1.0 );\n#ifdef IOR\n	#ifdef SPECULAR\n		float specularIntensityFactor = specularIntensity;\n		vec3 specularColorFactor = specularColor;\n		#ifdef USE_SPECULARINTENSITYMAP\n			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;\n		#endif\n		#ifdef USE_SPECULARCOLORMAP\n			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;\n		#endif\n		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );\n	#else\n		float specularIntensityFactor = 1.0;\n		vec3 specularColorFactor = vec3( 1.0 );\n		material.specularF90 = 1.0;\n	#endif\n	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );\n#else\n	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );\n	material.specularF90 = 1.0;\n#endif\n#ifdef USE_CLEARCOAT\n	material.clearcoat = clearcoat;\n	material.clearcoatRoughness = clearcoatRoughness;\n	material.clearcoatF0 = vec3( 0.04 );\n	material.clearcoatF90 = 1.0;\n	#ifdef USE_CLEARCOATMAP\n		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;\n	#endif\n	#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;\n	#endif\n	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );\n	material.clearcoatRoughness += geometryRoughness;\n	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );\n#endif\n#ifdef USE_SHEEN\n	material.sheenColor = sheenColor;\n	#ifdef USE_SHEENCOLORMAP\n		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;\n	#endif\n	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );\n	#ifdef USE_SHEENROUGHNESSMAP\n		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;\n	#endif\n#endif";
var lights_physical_pars_fragment = "struct PhysicalMaterial {\n	vec3 diffuseColor;\n	float roughness;\n	vec3 specularColor;\n	float specularF90;\n	#ifdef USE_CLEARCOAT\n		float clearcoat;\n		float clearcoatRoughness;\n		vec3 clearcoatF0;\n		float clearcoatF90;\n	#endif\n	#ifdef USE_SHEEN\n		vec3 sheenColor;\n		float sheenRoughness;\n	#endif\n};\nvec3 clearcoatSpecular = vec3( 0.0 );\nvec3 sheenSpecular = vec3( 0.0 );\nfloat IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness) {\n	float dotNV = saturate( dot( normal, viewDir ) );\n	float r2 = roughness * roughness;\n	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;\n	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;\n	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );\n	return saturate( DG * RECIPROCAL_PI );\n}\nvec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {\n	float dotNV = saturate( dot( normal, viewDir ) );\n	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n	vec4 r = roughness * c0 + c1;\n	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;\n	return fab;\n}\nvec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {\n	vec2 fab = DFGApprox( normal, viewDir, roughness );\n	return specularColor * fab.x + specularF90 * fab.y;\n}\nvoid computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n	vec2 fab = DFGApprox( normal, viewDir, roughness );\n	vec3 FssEss = specularColor * fab.x + specularF90 * fab.y;\n	float Ess = fab.x + fab.y;\n	float Ems = 1.0 - Ess;\n	vec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );\n	singleScatter += FssEss;\n	multiScatter += Fms * Ems;\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n		vec3 normal = geometry.normal;\n		vec3 viewDir = geometry.viewDir;\n		vec3 position = geometry.position;\n		vec3 lightPos = rectAreaLight.position;\n		vec3 halfWidth = rectAreaLight.halfWidth;\n		vec3 halfHeight = rectAreaLight.halfHeight;\n		vec3 lightColor = rectAreaLight.color;\n		float roughness = material.roughness;\n		vec3 rectCoords[ 4 ];\n		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;\n		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;\n		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;\n		vec2 uv = LTC_Uv( normal, viewDir, roughness );\n		vec4 t1 = texture2D( ltc_1, uv );\n		vec4 t2 = texture2D( ltc_2, uv );\n		mat3 mInv = mat3(\n			vec3( t1.x, 0, t1.y ),\n			vec3(    0, 1,    0 ),\n			vec3( t1.z, 0, t1.w )\n		);\n		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );\n		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );\n	}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n	vec3 irradiance = dotNL * directLight.color;\n	#ifdef USE_CLEARCOAT\n		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );\n		vec3 ccIrradiance = dotNLcc * directLight.color;\n		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );\n	#endif\n	#ifdef USE_SHEEN\n		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );\n	#endif\n	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );\n	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {\n	#ifdef USE_CLEARCOAT\n		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );\n	#endif\n	#ifdef USE_SHEEN\n		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );\n	#endif\n	vec3 singleScattering = vec3( 0.0 );\n	vec3 multiScattering = vec3( 0.0 );\n	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;\n	computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );\n	vec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );\n	reflectedLight.indirectSpecular += radiance * singleScattering;\n	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;\n	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;\n}\n#define RE_Direct				RE_Direct_Physical\n#define RE_Direct_RectArea		RE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular		RE_IndirectSpecular_Physical\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}";
var lights_fragment_begin = "\nGeometricContext geometry;\ngeometry.position = - vViewPosition;\ngeometry.normal = normal;\ngeometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );\n#ifdef USE_CLEARCOAT\n	geometry.clearcoatNormal = clearcoatNormal;\n#endif\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n	PointLight pointLight;\n	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0\n	PointLightShadow pointLightShadow;\n	#endif\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n		pointLight = pointLights[ i ];\n		getPointLightInfo( pointLight, geometry, directLight );\n		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )\n		pointLightShadow = pointLightShadows[ i ];\n		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometry, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n	SpotLight spotLight;\n	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0\n	SpotLightShadow spotLightShadow;\n	#endif\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n		spotLight = spotLights[ i ];\n		getSpotLightInfo( spotLight, geometry, directLight );\n		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n		spotLightShadow = spotLightShadows[ i ];\n		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometry, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n	DirectionalLight directionalLight;\n	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0\n	DirectionalLightShadow directionalLightShadow;\n	#endif\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n		directionalLight = directionalLights[ i ];\n		getDirectionalLightInfo( directionalLight, geometry, directLight );\n		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )\n		directionalLightShadow = directionalLightShadows[ i ];\n		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometry, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n	RectAreaLight rectAreaLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n		rectAreaLight = rectAreaLights[ i ];\n		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if defined( RE_IndirectDiffuse )\n	vec3 iblIrradiance = vec3( 0.0 );\n	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );\n	#if ( NUM_HEMI_LIGHTS > 0 )\n		#pragma unroll_loop_start\n		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );\n		}\n		#pragma unroll_loop_end\n	#endif\n#endif\n#if defined( RE_IndirectSpecular )\n	vec3 radiance = vec3( 0.0 );\n	vec3 clearcoatRadiance = vec3( 0.0 );\n#endif";
var lights_fragment_maps = "#if defined( RE_IndirectDiffuse )\n	#ifdef USE_LIGHTMAP\n		vec4 lightMapTexel = texture2D( lightMap, vUv2 );\n		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;\n		irradiance += lightMapIrradiance;\n	#endif\n	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )\n		iblIrradiance += getIBLIrradiance( geometry.normal );\n	#endif\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );\n	#ifdef USE_CLEARCOAT\n		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );\n	#endif\n#endif";
var lights_fragment_end = "#if defined( RE_IndirectDiffuse )\n	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );\n#endif\n#if defined( RE_IndirectSpecular )\n	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );\n#endif";
var logdepthbuf_fragment = "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;\n#endif";
var logdepthbuf_pars_fragment = "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n	uniform float logDepthBufFC;\n	varying float vFragDepth;\n	varying float vIsPerspective;\n#endif";
var logdepthbuf_pars_vertex = "#ifdef USE_LOGDEPTHBUF\n	#ifdef USE_LOGDEPTHBUF_EXT\n		varying float vFragDepth;\n		varying float vIsPerspective;\n	#else\n		uniform float logDepthBufFC;\n	#endif\n#endif";
var logdepthbuf_vertex = "#ifdef USE_LOGDEPTHBUF\n	#ifdef USE_LOGDEPTHBUF_EXT\n		vFragDepth = 1.0 + gl_Position.w;\n		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );\n	#else\n		if ( isPerspectiveMatrix( projectionMatrix ) ) {\n			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;\n			gl_Position.z *= gl_Position.w;\n		}\n	#endif\n#endif";
var map_fragment = "#ifdef USE_MAP\n	vec4 sampledDiffuseColor = texture2D( map, vUv );\n	#ifdef DECODE_VIDEO_TEXTURE\n		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );\n	#endif\n	diffuseColor *= sampledDiffuseColor;\n#endif";
var map_pars_fragment = "#ifdef USE_MAP\n	uniform sampler2D map;\n#endif";
var map_particle_fragment = "#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n#endif\n#ifdef USE_MAP\n	diffuseColor *= texture2D( map, uv );\n#endif\n#ifdef USE_ALPHAMAP\n	diffuseColor.a *= texture2D( alphaMap, uv ).g;\n#endif";
var map_particle_pars_fragment = "#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n	uniform mat3 uvTransform;\n#endif\n#ifdef USE_MAP\n	uniform sampler2D map;\n#endif\n#ifdef USE_ALPHAMAP\n	uniform sampler2D alphaMap;\n#endif";
var metalnessmap_fragment = "float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n	vec4 texelMetalness = texture2D( metalnessMap, vUv );\n	metalnessFactor *= texelMetalness.b;\n#endif";
var metalnessmap_pars_fragment = "#ifdef USE_METALNESSMAP\n	uniform sampler2D metalnessMap;\n#endif";
var morphcolor_vertex = "#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )\n	vColor *= morphTargetBaseInfluence;\n	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n		#if defined( USE_COLOR_ALPHA )\n			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];\n		#elif defined( USE_COLOR )\n			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];\n		#endif\n	}\n#endif";
var morphnormal_vertex = "#ifdef USE_MORPHNORMALS\n	objectNormal *= morphTargetBaseInfluence;\n	#ifdef MORPHTARGETS_TEXTURE\n		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];\n		}\n	#else\n		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];\n		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];\n		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];\n		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];\n	#endif\n#endif";
var morphtarget_pars_vertex = "#ifdef USE_MORPHTARGETS\n	uniform float morphTargetBaseInfluence;\n	#ifdef MORPHTARGETS_TEXTURE\n		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];\n		uniform sampler2DArray morphTargetsTexture;\n		uniform ivec2 morphTargetsTextureSize;\n		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {\n			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;\n			int y = texelIndex / morphTargetsTextureSize.x;\n			int x = texelIndex - y * morphTargetsTextureSize.x;\n			ivec3 morphUV = ivec3( x, y, morphTargetIndex );\n			return texelFetch( morphTargetsTexture, morphUV, 0 );\n		}\n	#else\n		#ifndef USE_MORPHNORMALS\n			uniform float morphTargetInfluences[ 8 ];\n		#else\n			uniform float morphTargetInfluences[ 4 ];\n		#endif\n	#endif\n#endif";
var morphtarget_vertex = "#ifdef USE_MORPHTARGETS\n	transformed *= morphTargetBaseInfluence;\n	#ifdef MORPHTARGETS_TEXTURE\n		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];\n		}\n	#else\n		transformed += morphTarget0 * morphTargetInfluences[ 0 ];\n		transformed += morphTarget1 * morphTargetInfluences[ 1 ];\n		transformed += morphTarget2 * morphTargetInfluences[ 2 ];\n		transformed += morphTarget3 * morphTargetInfluences[ 3 ];\n		#ifndef USE_MORPHNORMALS\n			transformed += morphTarget4 * morphTargetInfluences[ 4 ];\n			transformed += morphTarget5 * morphTargetInfluences[ 5 ];\n			transformed += morphTarget6 * morphTargetInfluences[ 6 ];\n			transformed += morphTarget7 * morphTargetInfluences[ 7 ];\n		#endif\n	#endif\n#endif";
var normal_fragment_begin = "float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;\n#ifdef FLAT_SHADED\n	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );\n	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );\n	vec3 normal = normalize( cross( fdx, fdy ) );\n#else\n	vec3 normal = normalize( vNormal );\n	#ifdef DOUBLE_SIDED\n		normal = normal * faceDirection;\n	#endif\n	#ifdef USE_TANGENT\n		vec3 tangent = normalize( vTangent );\n		vec3 bitangent = normalize( vBitangent );\n		#ifdef DOUBLE_SIDED\n			tangent = tangent * faceDirection;\n			bitangent = bitangent * faceDirection;\n		#endif\n		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )\n			mat3 vTBN = mat3( tangent, bitangent, normal );\n		#endif\n	#endif\n#endif\nvec3 geometryNormal = normal;";
var normal_fragment_maps = "#ifdef OBJECTSPACE_NORMALMAP\n	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n	#ifdef FLIP_SIDED\n		normal = - normal;\n	#endif\n	#ifdef DOUBLE_SIDED\n		normal = normal * faceDirection;\n	#endif\n	normal = normalize( normalMatrix * normal );\n#elif defined( TANGENTSPACE_NORMALMAP )\n	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n	mapN.xy *= normalScale;\n	#ifdef USE_TANGENT\n		normal = normalize( vTBN * mapN );\n	#else\n		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );\n	#endif\n#elif defined( USE_BUMPMAP )\n	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );\n#endif";
var normal_pars_fragment = "#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n	#ifdef USE_TANGENT\n		varying vec3 vTangent;\n		varying vec3 vBitangent;\n	#endif\n#endif";
var normal_pars_vertex = "#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n	#ifdef USE_TANGENT\n		varying vec3 vTangent;\n		varying vec3 vBitangent;\n	#endif\n#endif";
var normal_vertex = "#ifndef FLAT_SHADED\n	vNormal = normalize( transformedNormal );\n	#ifdef USE_TANGENT\n		vTangent = normalize( transformedTangent );\n		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n	#endif\n#endif";
var normalmap_pars_fragment = "#ifdef USE_NORMALMAP\n	uniform sampler2D normalMap;\n	uniform vec2 normalScale;\n#endif\n#ifdef OBJECTSPACE_NORMALMAP\n	uniform mat3 normalMatrix;\n#endif\n#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )\n	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {\n		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );\n		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );\n		vec2 st0 = dFdx( vUv.st );\n		vec2 st1 = dFdy( vUv.st );\n		vec3 N = surf_norm;\n		vec3 q1perp = cross( q1, N );\n		vec3 q0perp = cross( N, q0 );\n		vec3 T = q1perp * st0.x + q0perp * st1.x;\n		vec3 B = q1perp * st0.y + q0perp * st1.y;\n		float det = max( dot( T, T ), dot( B, B ) );\n		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );\n		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );\n	}\n#endif";
var clearcoat_normal_fragment_begin = "#ifdef USE_CLEARCOAT\n	vec3 clearcoatNormal = geometryNormal;\n#endif";
var clearcoat_normal_fragment_maps = "#ifdef USE_CLEARCOAT_NORMALMAP\n	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;\n	clearcoatMapN.xy *= clearcoatNormalScale;\n	#ifdef USE_TANGENT\n		clearcoatNormal = normalize( vTBN * clearcoatMapN );\n	#else\n		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );\n	#endif\n#endif";
var clearcoat_pars_fragment = "#ifdef USE_CLEARCOATMAP\n	uniform sampler2D clearcoatMap;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n	uniform sampler2D clearcoatRoughnessMap;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	uniform sampler2D clearcoatNormalMap;\n	uniform vec2 clearcoatNormalScale;\n#endif";
var output_fragment = "#ifdef OPAQUE\ndiffuseColor.a = 1.0;\n#endif\n#ifdef USE_TRANSMISSION\ndiffuseColor.a *= transmissionAlpha + 0.1;\n#endif\ngl_FragColor = vec4( outgoingLight, diffuseColor.a );";
var packing = "vec3 packNormalToRGB( const in vec3 normal ) {\n	return normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n	return 2.0 * rgb.xyz - 1.0;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\nconst float ShiftRight8 = 1. / 256.;\nvec4 packDepthToRGBA( const in float v ) {\n	vec4 r = vec4( fract( v * PackFactors ), v );\n	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n	return dot( v, UnpackFactors );\n}\nvec4 pack2HalfToRGBA( vec2 v ) {\n	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );\n	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );\n}\nvec2 unpackRGBATo2Half( vec4 v ) {\n	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n	return ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {\n	return linearClipZ * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {\n	return ( near * far ) / ( ( far - near ) * invClipZ - far );\n}";
var premultiplied_alpha_fragment = "#ifdef PREMULTIPLIED_ALPHA\n	gl_FragColor.rgb *= gl_FragColor.a;\n#endif";
var project_vertex = "vec4 mvPosition = vec4( transformed, 1.0 );\n#ifdef USE_INSTANCING\n	mvPosition = instanceMatrix * mvPosition;\n#endif\nmvPosition = modelViewMatrix * mvPosition;\ngl_Position = projectionMatrix * mvPosition;";
var dithering_fragment = "#ifdef DITHERING\n	gl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif";
var dithering_pars_fragment = "#ifdef DITHERING\n	vec3 dithering( vec3 color ) {\n		float grid_position = rand( gl_FragCoord.xy );\n		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n		return color + dither_shift_RGB;\n	}\n#endif";
var roughnessmap_fragment = "float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n	vec4 texelRoughness = texture2D( roughnessMap, vUv );\n	roughnessFactor *= texelRoughness.g;\n#endif";
var roughnessmap_pars_fragment = "#ifdef USE_ROUGHNESSMAP\n	uniform sampler2D roughnessMap;\n#endif";
var shadowmap_pars_fragment = "#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];\n		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n		struct DirectionalLightShadow {\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_SPOT_LIGHT_SHADOWS > 0\n		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];\n		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];\n		struct SpotLightShadow {\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];\n		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n		struct PointLightShadow {\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n			float shadowCameraNear;\n			float shadowCameraFar;\n		};\n		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n	#endif\n	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n	}\n	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {\n		return unpackRGBATo2Half( texture2D( shadow, uv ) );\n	}\n	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){\n		float occlusion = 1.0;\n		vec2 distribution = texture2DDistribution( shadow, uv );\n		float hard_shadow = step( compare , distribution.x );\n		if (hard_shadow != 1.0 ) {\n			float distance = compare - distribution.x ;\n			float variance = max( 0.00000, distribution.y * distribution.y );\n			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );\n		}\n		return occlusion;\n	}\n	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n		float shadow = 1.0;\n		shadowCoord.xyz /= shadowCoord.w;\n		shadowCoord.z += shadowBias;\n		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n		bool inFrustum = all( inFrustumVec );\n		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n		bool frustumTest = all( frustumTestVec );\n		if ( frustumTest ) {\n		#if defined( SHADOWMAP_TYPE_PCF )\n			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n			float dx0 = - texelSize.x * shadowRadius;\n			float dy0 = - texelSize.y * shadowRadius;\n			float dx1 = + texelSize.x * shadowRadius;\n			float dy1 = + texelSize.y * shadowRadius;\n			float dx2 = dx0 / 2.0;\n			float dy2 = dy0 / 2.0;\n			float dx3 = dx1 / 2.0;\n			float dy3 = dy1 / 2.0;\n			shadow = (\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n			) * ( 1.0 / 17.0 );\n		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n			float dx = texelSize.x;\n			float dy = texelSize.y;\n			vec2 uv = shadowCoord.xy;\n			vec2 f = fract( uv * shadowMapSize + 0.5 );\n			uv -= f * texelSize;\n			shadow = (\n				texture2DCompare( shadowMap, uv, shadowCoord.z ) +\n				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +\n				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), \n					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),\n					 f.x ) +\n				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), \n					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),\n					 f.x ) +\n				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), \n					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),\n					 f.y ) +\n				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), \n					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),\n					 f.y ) +\n				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), \n						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),\n						  f.x ),\n					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), \n						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),\n						  f.x ),\n					 f.y )\n			) * ( 1.0 / 9.0 );\n		#elif defined( SHADOWMAP_TYPE_VSM )\n			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );\n		#else\n			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n		#endif\n		}\n		return shadow;\n	}\n	vec2 cubeToUV( vec3 v, float texelSizeY ) {\n		vec3 absV = abs( v );\n		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n		absV *= scaleToCube;\n		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n		vec2 planar = v.xy;\n		float almostATexel = 1.5 * texelSizeY;\n		float almostOne = 1.0 - almostATexel;\n		if ( absV.z >= almostOne ) {\n			if ( v.z > 0.0 )\n				planar.x = 4.0 - v.x;\n		} else if ( absV.x >= almostOne ) {\n			float signX = sign( v.x );\n			planar.x = v.z * signX + 2.0 * signX;\n		} else if ( absV.y >= almostOne ) {\n			float signY = sign( v.y );\n			planar.x = v.x + 2.0 * signY + 2.0;\n			planar.y = v.z * signY - 2.0;\n		}\n		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n	}\n	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n		vec3 lightToPosition = shadowCoord.xyz;\n		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;\n		vec3 bd3D = normalize( lightToPosition );\n		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )\n			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n			return (\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n			) * ( 1.0 / 9.0 );\n		#else\n			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n		#endif\n	}\n#endif";
var shadowmap_pars_vertex = "#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];\n		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n		struct DirectionalLightShadow {\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_SPOT_LIGHT_SHADOWS > 0\n		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];\n		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];\n		struct SpotLightShadow {\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];\n		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n		struct PointLightShadow {\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n			float shadowCameraNear;\n			float shadowCameraFar;\n		};\n		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n	#endif\n#endif";
var shadowmap_vertex = "#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0\n		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n		vec4 shadowWorldPosition;\n	#endif\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );\n		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;\n	}\n	#pragma unroll_loop_end\n	#endif\n	#if NUM_SPOT_LIGHT_SHADOWS > 0\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );\n		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;\n	}\n	#pragma unroll_loop_end\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );\n		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;\n	}\n	#pragma unroll_loop_end\n	#endif\n#endif";
var shadowmask_pars_fragment = "float getShadowMask() {\n	float shadow = 1.0;\n	#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n	DirectionalLightShadow directionalLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n		directionalLight = directionalLightShadows[ i ];\n		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n	}\n	#pragma unroll_loop_end\n	#endif\n	#if NUM_SPOT_LIGHT_SHADOWS > 0\n	SpotLightShadow spotLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n		spotLight = spotLightShadows[ i ];\n		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n	}\n	#pragma unroll_loop_end\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n	PointLightShadow pointLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n		pointLight = pointLightShadows[ i ];\n		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n	}\n	#pragma unroll_loop_end\n	#endif\n	#endif\n	return shadow;\n}";
var skinbase_vertex = "#ifdef USE_SKINNING\n	mat4 boneMatX = getBoneMatrix( skinIndex.x );\n	mat4 boneMatY = getBoneMatrix( skinIndex.y );\n	mat4 boneMatZ = getBoneMatrix( skinIndex.z );\n	mat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif";
var skinning_pars_vertex = "#ifdef USE_SKINNING\n	uniform mat4 bindMatrix;\n	uniform mat4 bindMatrixInverse;\n	#ifdef BONE_TEXTURE\n		uniform highp sampler2D boneTexture;\n		uniform int boneTextureSize;\n		mat4 getBoneMatrix( const in float i ) {\n			float j = i * 4.0;\n			float x = mod( j, float( boneTextureSize ) );\n			float y = floor( j / float( boneTextureSize ) );\n			float dx = 1.0 / float( boneTextureSize );\n			float dy = 1.0 / float( boneTextureSize );\n			y = dy * ( y + 0.5 );\n			vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n			vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n			vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n			vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n			mat4 bone = mat4( v1, v2, v3, v4 );\n			return bone;\n		}\n	#else\n		uniform mat4 boneMatrices[ MAX_BONES ];\n		mat4 getBoneMatrix( const in float i ) {\n			mat4 bone = boneMatrices[ int(i) ];\n			return bone;\n		}\n	#endif\n#endif";
var skinning_vertex = "#ifdef USE_SKINNING\n	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n	vec4 skinned = vec4( 0.0 );\n	skinned += boneMatX * skinVertex * skinWeight.x;\n	skinned += boneMatY * skinVertex * skinWeight.y;\n	skinned += boneMatZ * skinVertex * skinWeight.z;\n	skinned += boneMatW * skinVertex * skinWeight.w;\n	transformed = ( bindMatrixInverse * skinned ).xyz;\n#endif";
var skinnormal_vertex = "#ifdef USE_SKINNING\n	mat4 skinMatrix = mat4( 0.0 );\n	skinMatrix += skinWeight.x * boneMatX;\n	skinMatrix += skinWeight.y * boneMatY;\n	skinMatrix += skinWeight.z * boneMatZ;\n	skinMatrix += skinWeight.w * boneMatW;\n	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;\n	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n	#ifdef USE_TANGENT\n		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n	#endif\n#endif";
var specularmap_fragment = "float specularStrength;\n#ifdef USE_SPECULARMAP\n	vec4 texelSpecular = texture2D( specularMap, vUv );\n	specularStrength = texelSpecular.r;\n#else\n	specularStrength = 1.0;\n#endif";
var specularmap_pars_fragment = "#ifdef USE_SPECULARMAP\n	uniform sampler2D specularMap;\n#endif";
var tonemapping_fragment = "#if defined( TONE_MAPPING )\n	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif";
var tonemapping_pars_fragment = "#ifndef saturate\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\nuniform float toneMappingExposure;\nvec3 LinearToneMapping( vec3 color ) {\n	return toneMappingExposure * color;\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n	color *= toneMappingExposure;\n	return saturate( color / ( vec3( 1.0 ) + color ) );\n}\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n	color *= toneMappingExposure;\n	color = max( vec3( 0.0 ), color - 0.004 );\n	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\nvec3 RRTAndODTFit( vec3 v ) {\n	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;\n	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;\n	return a / b;\n}\nvec3 ACESFilmicToneMapping( vec3 color ) {\n	const mat3 ACESInputMat = mat3(\n		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),\n		vec3( 0.04823, 0.01566, 0.83777 )\n	);\n	const mat3 ACESOutputMat = mat3(\n		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),\n		vec3( -0.07367, -0.00605,  1.07602 )\n	);\n	color *= toneMappingExposure / 0.6;\n	color = ACESInputMat * color;\n	color = RRTAndODTFit( color );\n	color = ACESOutputMat * color;\n	return saturate( color );\n}\nvec3 CustomToneMapping( vec3 color ) { return color; }";
var transmission_fragment = "#ifdef USE_TRANSMISSION\n	float transmissionAlpha = 1.0;\n	float transmissionFactor = transmission;\n	float thicknessFactor = thickness;\n	#ifdef USE_TRANSMISSIONMAP\n		transmissionFactor *= texture2D( transmissionMap, vUv ).r;\n	#endif\n	#ifdef USE_THICKNESSMAP\n		thicknessFactor *= texture2D( thicknessMap, vUv ).g;\n	#endif\n	vec3 pos = vWorldPosition;\n	vec3 v = normalize( cameraPosition - pos );\n	vec3 n = inverseTransformDirection( normal, viewMatrix );\n	vec4 transmission = getIBLVolumeRefraction(\n		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,\n		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,\n		attenuationColor, attenuationDistance );\n	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );\n	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );\n#endif";
var transmission_pars_fragment = "#ifdef USE_TRANSMISSION\n	uniform float transmission;\n	uniform float thickness;\n	uniform float attenuationDistance;\n	uniform vec3 attenuationColor;\n	#ifdef USE_TRANSMISSIONMAP\n		uniform sampler2D transmissionMap;\n	#endif\n	#ifdef USE_THICKNESSMAP\n		uniform sampler2D thicknessMap;\n	#endif\n	uniform vec2 transmissionSamplerSize;\n	uniform sampler2D transmissionSamplerMap;\n	uniform mat4 modelMatrix;\n	uniform mat4 projectionMatrix;\n	varying vec3 vWorldPosition;\n	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {\n		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );\n		vec3 modelScale;\n		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );\n		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );\n		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );\n		return normalize( refractionVector ) * thickness * modelScale;\n	}\n	float applyIorToRoughness( const in float roughness, const in float ior ) {\n		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );\n	}\n	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {\n		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );\n		#ifdef texture2DLodEXT\n			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );\n		#else\n			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );\n		#endif\n	}\n	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {\n		if ( attenuationDistance == 0.0 ) {\n			return radiance;\n		} else {\n			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;\n			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;\n		}\n	}\n	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,\n		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,\n		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,\n		const in vec3 attenuationColor, const in float attenuationDistance ) {\n		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );\n		vec3 refractedRayExit = position + transmissionRay;\n		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );\n		vec2 refractionCoords = ndcPos.xy / ndcPos.w;\n		refractionCoords += 1.0;\n		refractionCoords /= 2.0;\n		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );\n		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );\n		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );\n		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );\n	}\n#endif";
var uv_pars_fragment = "#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )\n	varying vec2 vUv;\n#endif";
var uv_pars_vertex = "#ifdef USE_UV\n	#ifdef UVS_VERTEX_ONLY\n		vec2 vUv;\n	#else\n		varying vec2 vUv;\n	#endif\n	uniform mat3 uvTransform;\n#endif";
var uv_vertex = "#ifdef USE_UV\n	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n#endif";
var uv2_pars_fragment = "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n	varying vec2 vUv2;\n#endif";
var uv2_pars_vertex = "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n	attribute vec2 uv2;\n	varying vec2 vUv2;\n	uniform mat3 uv2Transform;\n#endif";
var uv2_vertex = "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;\n#endif";
var worldpos_vertex = "#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )\n	vec4 worldPosition = vec4( transformed, 1.0 );\n	#ifdef USE_INSTANCING\n		worldPosition = instanceMatrix * worldPosition;\n	#endif\n	worldPosition = modelMatrix * worldPosition;\n#endif";
var vertex$g = "varying vec2 vUv;\nuniform mat3 uvTransform;\nvoid main() {\n	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n	gl_Position = vec4( position.xy, 1.0, 1.0 );\n}";
var fragment$g = "uniform sampler2D t2D;\nvarying vec2 vUv;\nvoid main() {\n	gl_FragColor = texture2D( t2D, vUv );\n	#ifdef DECODE_VIDEO_TEXTURE\n		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );\n	#endif\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n}";
var vertex$f = "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vWorldDirection = transformDirection( position, modelMatrix );\n	#include <begin_vertex>\n	#include <project_vertex>\n	gl_Position.z = gl_Position.w;\n}";
var fragment$f = "#include <envmap_common_pars_fragment>\nuniform float opacity;\nvarying vec3 vWorldDirection;\n#include <cube_uv_reflection_fragment>\nvoid main() {\n	vec3 vReflect = vWorldDirection;\n	#include <envmap_fragment>\n	gl_FragColor = envColor;\n	gl_FragColor.a *= opacity;\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n}";
var vertex$e = "#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n	#include <uv_vertex>\n	#include <skinbase_vertex>\n	#ifdef USE_DISPLACEMENTMAP\n		#include <beginnormal_vertex>\n		#include <morphnormal_vertex>\n		#include <skinnormal_vertex>\n	#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vHighPrecisionZW = gl_Position.zw;\n}";
var fragment$e = "#if DEPTH_PACKING == 3200\n	uniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( 1.0 );\n	#if DEPTH_PACKING == 3200\n		diffuseColor.a = opacity;\n	#endif\n	#include <map_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <logdepthbuf_fragment>\n	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;\n	#if DEPTH_PACKING == 3200\n		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );\n	#elif DEPTH_PACKING == 3201\n		gl_FragColor = packDepthToRGBA( fragCoordZ );\n	#endif\n}";
var vertex$d = "#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <skinbase_vertex>\n	#ifdef USE_DISPLACEMENTMAP\n		#include <beginnormal_vertex>\n		#include <morphnormal_vertex>\n		#include <skinnormal_vertex>\n	#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <worldpos_vertex>\n	#include <clipping_planes_vertex>\n	vWorldPosition = worldPosition.xyz;\n}";
var fragment$d = "#define DISTANCE\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( 1.0 );\n	#include <map_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	float dist = length( vWorldPosition - referencePosition );\n	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n	dist = saturate( dist );\n	gl_FragColor = packDepthToRGBA( dist );\n}";
var vertex$c = "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vWorldDirection = transformDirection( position, modelMatrix );\n	#include <begin_vertex>\n	#include <project_vertex>\n}";
var fragment$c = "uniform sampler2D tEquirect;\nvarying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vec3 direction = normalize( vWorldDirection );\n	vec2 sampleUV = equirectUv( direction );\n	gl_FragColor = texture2D( tEquirect, sampleUV );\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n}";
var vertex$b = "uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	vLineDistance = scale * lineDistance;\n	#include <color_vertex>\n	#include <morphcolor_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <fog_vertex>\n}";
var fragment$b = "uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	if ( mod( vLineDistance, totalSize ) > dashSize ) {\n		discard;\n	}\n	vec3 outgoingLight = vec3( 0.0 );\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <logdepthbuf_fragment>\n	#include <color_fragment>\n	outgoingLight = diffuseColor.rgb;\n	#include <output_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n}";
var vertex$a = "#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <uv2_vertex>\n	#include <color_vertex>\n	#include <morphcolor_vertex>\n	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )\n		#include <beginnormal_vertex>\n		#include <morphnormal_vertex>\n		#include <skinbase_vertex>\n		#include <skinnormal_vertex>\n		#include <defaultnormal_vertex>\n	#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <worldpos_vertex>\n	#include <envmap_vertex>\n	#include <fog_vertex>\n}";
var fragment$a = "uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n#endif\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <specularmap_fragment>\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	#ifdef USE_LIGHTMAP\n		vec4 lightMapTexel = texture2D( lightMap, vUv2 );\n		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;\n	#else\n		reflectedLight.indirectDiffuse += vec3( 1.0 );\n	#endif\n	#include <aomap_fragment>\n	reflectedLight.indirectDiffuse *= diffuseColor.rgb;\n	vec3 outgoingLight = reflectedLight.indirectDiffuse;\n	#include <envmap_fragment>\n	#include <output_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}";
var vertex$9 = "#define LAMBERT\nvarying vec3 vLightFront;\nvarying vec3 vIndirectFront;\n#ifdef DOUBLE_SIDED\n	varying vec3 vLightBack;\n	varying vec3 vIndirectBack;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <uv2_vertex>\n	#include <color_vertex>\n	#include <morphcolor_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <worldpos_vertex>\n	#include <envmap_vertex>\n	#include <lights_lambert_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}";
var fragment$9 = "uniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\nvarying vec3 vLightFront;\nvarying vec3 vIndirectFront;\n#ifdef DOUBLE_SIDED\n	varying vec3 vLightBack;\n	varying vec3 vIndirectBack;\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <specularmap_fragment>\n	#include <emissivemap_fragment>\n	#ifdef DOUBLE_SIDED\n		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;\n	#else\n		reflectedLight.indirectDiffuse += vIndirectFront;\n	#endif\n	#include <lightmap_fragment>\n	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );\n	#ifdef DOUBLE_SIDED\n		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;\n	#else\n		reflectedLight.directDiffuse = vLightFront;\n	#endif\n	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n	#include <envmap_fragment>\n	#include <output_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}";
var vertex$8 = "#define MATCAP\nvarying vec3 vViewPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphcolor_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <fog_vertex>\n	vViewPosition = - mvPosition.xyz;\n}";
var fragment$8 = "#define MATCAP\nuniform vec3 diffuse;\nuniform float opacity;\nuniform sampler2D matcap;\nvarying vec3 vViewPosition;\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <fog_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	vec3 viewDir = normalize( vViewPosition );\n	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );\n	vec3 y = cross( viewDir, x );\n	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;\n	#ifdef USE_MATCAP\n		vec4 matcapColor = texture2D( matcap, uv );\n	#else\n		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );\n	#endif\n	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;\n	#include <output_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}";
var vertex$7 = "#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n	varying vec3 vViewPosition;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n	vViewPosition = - mvPosition.xyz;\n#endif\n}";
var fragment$7 = "#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n	varying vec3 vViewPosition;\n#endif\n#include <packing>\n#include <uv_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	#include <logdepthbuf_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );\n	#ifdef OPAQUE\n		gl_FragColor.a = 1.0;\n	#endif\n}";
var vertex$6 = "#define PHONG\nvarying vec3 vViewPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <uv2_vertex>\n	#include <color_vertex>\n	#include <morphcolor_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <envmap_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}";
var fragment$6 = "#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <specularmap_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_phong_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n	#include <envmap_fragment>\n	#include <output_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}";
var vertex$5 = "#define STANDARD\nvarying vec3 vViewPosition;\n#ifdef USE_TRANSMISSION\n	varying vec3 vWorldPosition;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <uv2_vertex>\n	#include <color_vertex>\n	#include <morphcolor_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n#ifdef USE_TRANSMISSION\n	vWorldPosition = worldPosition.xyz;\n#endif\n}";
var fragment$5 = "#define STANDARD\n#ifdef PHYSICAL\n	#define IOR\n	#define SPECULAR\n#endif\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifdef IOR\n	uniform float ior;\n#endif\n#ifdef SPECULAR\n	uniform float specularIntensity;\n	uniform vec3 specularColor;\n	#ifdef USE_SPECULARINTENSITYMAP\n		uniform sampler2D specularIntensityMap;\n	#endif\n	#ifdef USE_SPECULARCOLORMAP\n		uniform sampler2D specularColorMap;\n	#endif\n#endif\n#ifdef USE_CLEARCOAT\n	uniform float clearcoat;\n	uniform float clearcoatRoughness;\n#endif\n#ifdef USE_SHEEN\n	uniform vec3 sheenColor;\n	uniform float sheenRoughness;\n	#ifdef USE_SHEENCOLORMAP\n		uniform sampler2D sheenColorMap;\n	#endif\n	#ifdef USE_SHEENROUGHNESSMAP\n		uniform sampler2D sheenRoughnessMap;\n	#endif\n#endif\nvarying vec3 vViewPosition;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <bsdfs>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_physical_pars_fragment>\n#include <transmission_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <clearcoat_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <roughnessmap_fragment>\n	#include <metalnessmap_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <clearcoat_normal_fragment_begin>\n	#include <clearcoat_normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_physical_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;\n	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;\n	#include <transmission_fragment>\n	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;\n	#ifdef USE_SHEEN\n		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );\n		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;\n	#endif\n	#ifdef USE_CLEARCOAT\n		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );\n		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );\n		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;\n	#endif\n	#include <output_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}";
var vertex$4 = "#define TOON\nvarying vec3 vViewPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <uv2_vertex>\n	#include <color_vertex>\n	#include <morphcolor_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}";
var fragment$4 = "#define TOON\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_toon_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_toon_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n	#include <output_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}";
var vertex$3 = "uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <color_vertex>\n	#include <morphcolor_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <project_vertex>\n	gl_PointSize = size;\n	#ifdef USE_SIZEATTENUATION\n		bool isPerspective = isPerspectiveMatrix( projectionMatrix );\n		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );\n	#endif\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <worldpos_vertex>\n	#include <fog_vertex>\n}";
var fragment$3 = "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec3 outgoingLight = vec3( 0.0 );\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <logdepthbuf_fragment>\n	#include <map_particle_fragment>\n	#include <color_fragment>\n	#include <alphatest_fragment>\n	outgoingLight = diffuseColor.rgb;\n	#include <output_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n}";
var vertex$2 = "#include <common>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\nvoid main() {\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <project_vertex>\n	#include <worldpos_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}";
var fragment$2 = "uniform vec3 color;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n}";
var vertex$1 = "uniform float rotation;\nuniform vec2 center;\n#include <common>\n#include <uv_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\n	vec2 scale;\n	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );\n	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );\n	#ifndef USE_SIZEATTENUATION\n		bool isPerspective = isPerspectiveMatrix( projectionMatrix );\n		if ( isPerspective ) scale *= - mvPosition.z;\n	#endif\n	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;\n	vec2 rotatedPosition;\n	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\n	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\n	mvPosition.xy += rotatedPosition;\n	gl_Position = projectionMatrix * mvPosition;\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <fog_vertex>\n}";
var fragment$1 = "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec3 outgoingLight = vec3( 0.0 );\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	outgoingLight = diffuseColor.rgb;\n	#include <output_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n}";
var ShaderChunk = {
  alphamap_fragment,
  alphamap_pars_fragment,
  alphatest_fragment,
  alphatest_pars_fragment,
  aomap_fragment,
  aomap_pars_fragment,
  begin_vertex,
  beginnormal_vertex,
  bsdfs,
  bumpmap_pars_fragment,
  clipping_planes_fragment,
  clipping_planes_pars_fragment,
  clipping_planes_pars_vertex,
  clipping_planes_vertex,
  color_fragment,
  color_pars_fragment,
  color_pars_vertex,
  color_vertex,
  common,
  cube_uv_reflection_fragment,
  defaultnormal_vertex,
  displacementmap_pars_vertex,
  displacementmap_vertex,
  emissivemap_fragment,
  emissivemap_pars_fragment,
  encodings_fragment,
  encodings_pars_fragment,
  envmap_fragment,
  envmap_common_pars_fragment,
  envmap_pars_fragment,
  envmap_pars_vertex,
  envmap_physical_pars_fragment,
  envmap_vertex,
  fog_vertex,
  fog_pars_vertex,
  fog_fragment,
  fog_pars_fragment,
  gradientmap_pars_fragment,
  lightmap_fragment,
  lightmap_pars_fragment,
  lights_lambert_vertex,
  lights_pars_begin,
  lights_toon_fragment,
  lights_toon_pars_fragment,
  lights_phong_fragment,
  lights_phong_pars_fragment,
  lights_physical_fragment,
  lights_physical_pars_fragment,
  lights_fragment_begin,
  lights_fragment_maps,
  lights_fragment_end,
  logdepthbuf_fragment,
  logdepthbuf_pars_fragment,
  logdepthbuf_pars_vertex,
  logdepthbuf_vertex,
  map_fragment,
  map_pars_fragment,
  map_particle_fragment,
  map_particle_pars_fragment,
  metalnessmap_fragment,
  metalnessmap_pars_fragment,
  morphcolor_vertex,
  morphnormal_vertex,
  morphtarget_pars_vertex,
  morphtarget_vertex,
  normal_fragment_begin,
  normal_fragment_maps,
  normal_pars_fragment,
  normal_pars_vertex,
  normal_vertex,
  normalmap_pars_fragment,
  clearcoat_normal_fragment_begin,
  clearcoat_normal_fragment_maps,
  clearcoat_pars_fragment,
  output_fragment,
  packing,
  premultiplied_alpha_fragment,
  project_vertex,
  dithering_fragment,
  dithering_pars_fragment,
  roughnessmap_fragment,
  roughnessmap_pars_fragment,
  shadowmap_pars_fragment,
  shadowmap_pars_vertex,
  shadowmap_vertex,
  shadowmask_pars_fragment,
  skinbase_vertex,
  skinning_pars_vertex,
  skinning_vertex,
  skinnormal_vertex,
  specularmap_fragment,
  specularmap_pars_fragment,
  tonemapping_fragment,
  tonemapping_pars_fragment,
  transmission_fragment,
  transmission_pars_fragment,
  uv_pars_fragment,
  uv_pars_vertex,
  uv_vertex,
  uv2_pars_fragment,
  uv2_pars_vertex,
  uv2_vertex,
  worldpos_vertex,
  background_vert: vertex$g,
  background_frag: fragment$g,
  cube_vert: vertex$f,
  cube_frag: fragment$f,
  depth_vert: vertex$e,
  depth_frag: fragment$e,
  distanceRGBA_vert: vertex$d,
  distanceRGBA_frag: fragment$d,
  equirect_vert: vertex$c,
  equirect_frag: fragment$c,
  linedashed_vert: vertex$b,
  linedashed_frag: fragment$b,
  meshbasic_vert: vertex$a,
  meshbasic_frag: fragment$a,
  meshlambert_vert: vertex$9,
  meshlambert_frag: fragment$9,
  meshmatcap_vert: vertex$8,
  meshmatcap_frag: fragment$8,
  meshnormal_vert: vertex$7,
  meshnormal_frag: fragment$7,
  meshphong_vert: vertex$6,
  meshphong_frag: fragment$6,
  meshphysical_vert: vertex$5,
  meshphysical_frag: fragment$5,
  meshtoon_vert: vertex$4,
  meshtoon_frag: fragment$4,
  points_vert: vertex$3,
  points_frag: fragment$3,
  shadow_vert: vertex$2,
  shadow_frag: fragment$2,
  sprite_vert: vertex$1,
  sprite_frag: fragment$1
};
var UniformsLib = {
  common: {
    diffuse: { value: new Color(16777215) },
    opacity: { value: 1 },
    map: { value: null },
    uvTransform: { value: new Matrix3() },
    uv2Transform: { value: new Matrix3() },
    alphaMap: { value: null },
    alphaTest: { value: 0 }
  },
  specularmap: {
    specularMap: { value: null }
  },
  envmap: {
    envMap: { value: null },
    flipEnvMap: { value: -1 },
    reflectivity: { value: 1 },
    ior: { value: 1.5 },
    refractionRatio: { value: 0.98 }
  },
  aomap: {
    aoMap: { value: null },
    aoMapIntensity: { value: 1 }
  },
  lightmap: {
    lightMap: { value: null },
    lightMapIntensity: { value: 1 }
  },
  emissivemap: {
    emissiveMap: { value: null }
  },
  bumpmap: {
    bumpMap: { value: null },
    bumpScale: { value: 1 }
  },
  normalmap: {
    normalMap: { value: null },
    normalScale: { value: new Vector2(1, 1) }
  },
  displacementmap: {
    displacementMap: { value: null },
    displacementScale: { value: 1 },
    displacementBias: { value: 0 }
  },
  roughnessmap: {
    roughnessMap: { value: null }
  },
  metalnessmap: {
    metalnessMap: { value: null }
  },
  gradientmap: {
    gradientMap: { value: null }
  },
  fog: {
    fogDensity: { value: 25e-5 },
    fogNear: { value: 1 },
    fogFar: { value: 2e3 },
    fogColor: { value: new Color(16777215) }
  },
  lights: {
    ambientLightColor: { value: [] },
    lightProbe: { value: [] },
    directionalLights: { value: [], properties: {
      direction: {},
      color: {}
    } },
    directionalLightShadows: { value: [], properties: {
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {}
    } },
    directionalShadowMap: { value: [] },
    directionalShadowMatrix: { value: [] },
    spotLights: { value: [], properties: {
      color: {},
      position: {},
      direction: {},
      distance: {},
      coneCos: {},
      penumbraCos: {},
      decay: {}
    } },
    spotLightShadows: { value: [], properties: {
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {}
    } },
    spotShadowMap: { value: [] },
    spotShadowMatrix: { value: [] },
    pointLights: { value: [], properties: {
      color: {},
      position: {},
      decay: {},
      distance: {}
    } },
    pointLightShadows: { value: [], properties: {
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {},
      shadowCameraNear: {},
      shadowCameraFar: {}
    } },
    pointShadowMap: { value: [] },
    pointShadowMatrix: { value: [] },
    hemisphereLights: { value: [], properties: {
      direction: {},
      skyColor: {},
      groundColor: {}
    } },
    rectAreaLights: { value: [], properties: {
      color: {},
      position: {},
      width: {},
      height: {}
    } },
    ltc_1: { value: null },
    ltc_2: { value: null }
  },
  points: {
    diffuse: { value: new Color(16777215) },
    opacity: { value: 1 },
    size: { value: 1 },
    scale: { value: 1 },
    map: { value: null },
    alphaMap: { value: null },
    alphaTest: { value: 0 },
    uvTransform: { value: new Matrix3() }
  },
  sprite: {
    diffuse: { value: new Color(16777215) },
    opacity: { value: 1 },
    center: { value: new Vector2(0.5, 0.5) },
    rotation: { value: 0 },
    map: { value: null },
    alphaMap: { value: null },
    alphaTest: { value: 0 },
    uvTransform: { value: new Matrix3() }
  }
};
var ShaderLib = {
  basic: {
    uniforms: mergeUniforms([
      UniformsLib.common,
      UniformsLib.specularmap,
      UniformsLib.envmap,
      UniformsLib.aomap,
      UniformsLib.lightmap,
      UniformsLib.fog
    ]),
    vertexShader: ShaderChunk.meshbasic_vert,
    fragmentShader: ShaderChunk.meshbasic_frag
  },
  lambert: {
    uniforms: mergeUniforms([
      UniformsLib.common,
      UniformsLib.specularmap,
      UniformsLib.envmap,
      UniformsLib.aomap,
      UniformsLib.lightmap,
      UniformsLib.emissivemap,
      UniformsLib.fog,
      UniformsLib.lights,
      {
        emissive: { value: new Color(0) }
      }
    ]),
    vertexShader: ShaderChunk.meshlambert_vert,
    fragmentShader: ShaderChunk.meshlambert_frag
  },
  phong: {
    uniforms: mergeUniforms([
      UniformsLib.common,
      UniformsLib.specularmap,
      UniformsLib.envmap,
      UniformsLib.aomap,
      UniformsLib.lightmap,
      UniformsLib.emissivemap,
      UniformsLib.bumpmap,
      UniformsLib.normalmap,
      UniformsLib.displacementmap,
      UniformsLib.fog,
      UniformsLib.lights,
      {
        emissive: { value: new Color(0) },
        specular: { value: new Color(1118481) },
        shininess: { value: 30 }
      }
    ]),
    vertexShader: ShaderChunk.meshphong_vert,
    fragmentShader: ShaderChunk.meshphong_frag
  },
  standard: {
    uniforms: mergeUniforms([
      UniformsLib.common,
      UniformsLib.envmap,
      UniformsLib.aomap,
      UniformsLib.lightmap,
      UniformsLib.emissivemap,
      UniformsLib.bumpmap,
      UniformsLib.normalmap,
      UniformsLib.displacementmap,
      UniformsLib.roughnessmap,
      UniformsLib.metalnessmap,
      UniformsLib.fog,
      UniformsLib.lights,
      {
        emissive: { value: new Color(0) },
        roughness: { value: 1 },
        metalness: { value: 0 },
        envMapIntensity: { value: 1 }
      }
    ]),
    vertexShader: ShaderChunk.meshphysical_vert,
    fragmentShader: ShaderChunk.meshphysical_frag
  },
  toon: {
    uniforms: mergeUniforms([
      UniformsLib.common,
      UniformsLib.aomap,
      UniformsLib.lightmap,
      UniformsLib.emissivemap,
      UniformsLib.bumpmap,
      UniformsLib.normalmap,
      UniformsLib.displacementmap,
      UniformsLib.gradientmap,
      UniformsLib.fog,
      UniformsLib.lights,
      {
        emissive: { value: new Color(0) }
      }
    ]),
    vertexShader: ShaderChunk.meshtoon_vert,
    fragmentShader: ShaderChunk.meshtoon_frag
  },
  matcap: {
    uniforms: mergeUniforms([
      UniformsLib.common,
      UniformsLib.bumpmap,
      UniformsLib.normalmap,
      UniformsLib.displacementmap,
      UniformsLib.fog,
      {
        matcap: { value: null }
      }
    ]),
    vertexShader: ShaderChunk.meshmatcap_vert,
    fragmentShader: ShaderChunk.meshmatcap_frag
  },
  points: {
    uniforms: mergeUniforms([
      UniformsLib.points,
      UniformsLib.fog
    ]),
    vertexShader: ShaderChunk.points_vert,
    fragmentShader: ShaderChunk.points_frag
  },
  dashed: {
    uniforms: mergeUniforms([
      UniformsLib.common,
      UniformsLib.fog,
      {
        scale: { value: 1 },
        dashSize: { value: 1 },
        totalSize: { value: 2 }
      }
    ]),
    vertexShader: ShaderChunk.linedashed_vert,
    fragmentShader: ShaderChunk.linedashed_frag
  },
  depth: {
    uniforms: mergeUniforms([
      UniformsLib.common,
      UniformsLib.displacementmap
    ]),
    vertexShader: ShaderChunk.depth_vert,
    fragmentShader: ShaderChunk.depth_frag
  },
  normal: {
    uniforms: mergeUniforms([
      UniformsLib.common,
      UniformsLib.bumpmap,
      UniformsLib.normalmap,
      UniformsLib.displacementmap,
      {
        opacity: { value: 1 }
      }
    ]),
    vertexShader: ShaderChunk.meshnormal_vert,
    fragmentShader: ShaderChunk.meshnormal_frag
  },
  sprite: {
    uniforms: mergeUniforms([
      UniformsLib.sprite,
      UniformsLib.fog
    ]),
    vertexShader: ShaderChunk.sprite_vert,
    fragmentShader: ShaderChunk.sprite_frag
  },
  background: {
    uniforms: {
      uvTransform: { value: new Matrix3() },
      t2D: { value: null }
    },
    vertexShader: ShaderChunk.background_vert,
    fragmentShader: ShaderChunk.background_frag
  },
  cube: {
    uniforms: mergeUniforms([
      UniformsLib.envmap,
      {
        opacity: { value: 1 }
      }
    ]),
    vertexShader: ShaderChunk.cube_vert,
    fragmentShader: ShaderChunk.cube_frag
  },
  equirect: {
    uniforms: {
      tEquirect: { value: null }
    },
    vertexShader: ShaderChunk.equirect_vert,
    fragmentShader: ShaderChunk.equirect_frag
  },
  distanceRGBA: {
    uniforms: mergeUniforms([
      UniformsLib.common,
      UniformsLib.displacementmap,
      {
        referencePosition: { value: new Vector3() },
        nearDistance: { value: 1 },
        farDistance: { value: 1e3 }
      }
    ]),
    vertexShader: ShaderChunk.distanceRGBA_vert,
    fragmentShader: ShaderChunk.distanceRGBA_frag
  },
  shadow: {
    uniforms: mergeUniforms([
      UniformsLib.lights,
      UniformsLib.fog,
      {
        color: { value: new Color(0) },
        opacity: { value: 1 }
      }
    ]),
    vertexShader: ShaderChunk.shadow_vert,
    fragmentShader: ShaderChunk.shadow_frag
  }
};
ShaderLib.physical = {
  uniforms: mergeUniforms([
    ShaderLib.standard.uniforms,
    {
      clearcoat: { value: 0 },
      clearcoatMap: { value: null },
      clearcoatRoughness: { value: 0 },
      clearcoatRoughnessMap: { value: null },
      clearcoatNormalScale: { value: new Vector2(1, 1) },
      clearcoatNormalMap: { value: null },
      sheen: { value: 0 },
      sheenColor: { value: new Color(0) },
      sheenColorMap: { value: null },
      sheenRoughness: { value: 1 },
      sheenRoughnessMap: { value: null },
      transmission: { value: 0 },
      transmissionMap: { value: null },
      transmissionSamplerSize: { value: new Vector2() },
      transmissionSamplerMap: { value: null },
      thickness: { value: 0 },
      thicknessMap: { value: null },
      attenuationDistance: { value: 0 },
      attenuationColor: { value: new Color(0) },
      specularIntensity: { value: 1 },
      specularIntensityMap: { value: null },
      specularColor: { value: new Color(1, 1, 1) },
      specularColorMap: { value: null }
    }
  ]),
  vertexShader: ShaderChunk.meshphysical_vert,
  fragmentShader: ShaderChunk.meshphysical_frag
};
function WebGLBackground(renderer, cubemaps, state, objects, alpha, premultipliedAlpha) {
  const clearColor = new Color(0);
  let clearAlpha = alpha === true ? 0 : 1;
  let planeMesh;
  let boxMesh;
  let currentBackground = null;
  let currentBackgroundVersion = 0;
  let currentTonemapping = null;
  function render(renderList, scene) {
    let forceClear = false;
    let background = scene.isScene === true ? scene.background : null;
    if (background && background.isTexture) {
      background = cubemaps.get(background);
    }
    const xr = renderer.xr;
    const session = xr.getSession && xr.getSession();
    if (session && session.environmentBlendMode === "additive") {
      background = null;
    }
    if (background === null) {
      setClear(clearColor, clearAlpha);
    } else if (background && background.isColor) {
      setClear(background, 1);
      forceClear = true;
    }
    if (renderer.autoClear || forceClear) {
      renderer.clear(renderer.autoClearColor, renderer.autoClearDepth, renderer.autoClearStencil);
    }
    if (background && (background.isCubeTexture || background.mapping === CubeUVReflectionMapping)) {
      if (boxMesh === void 0) {
        boxMesh = new Mesh(new BoxGeometry(1, 1, 1), new ShaderMaterial({
          name: "BackgroundCubeMaterial",
          uniforms: cloneUniforms(ShaderLib.cube.uniforms),
          vertexShader: ShaderLib.cube.vertexShader,
          fragmentShader: ShaderLib.cube.fragmentShader,
          side: BackSide,
          depthTest: false,
          depthWrite: false,
          fog: false
        }));
        boxMesh.geometry.deleteAttribute("normal");
        boxMesh.geometry.deleteAttribute("uv");
        boxMesh.onBeforeRender = function(renderer2, scene2, camera) {
          this.matrixWorld.copyPosition(camera.matrixWorld);
        };
        Object.defineProperty(boxMesh.material, "envMap", {
          get: function() {
            return this.uniforms.envMap.value;
          }
        });
        objects.update(boxMesh);
      }
      boxMesh.material.uniforms.envMap.value = background;
      boxMesh.material.uniforms.flipEnvMap.value = background.isCubeTexture && background.isRenderTargetTexture === false ? -1 : 1;
      if (currentBackground !== background || currentBackgroundVersion !== background.version || currentTonemapping !== renderer.toneMapping) {
        boxMesh.material.needsUpdate = true;
        currentBackground = background;
        currentBackgroundVersion = background.version;
        currentTonemapping = renderer.toneMapping;
      }
      renderList.unshift(boxMesh, boxMesh.geometry, boxMesh.material, 0, 0, null);
    } else if (background && background.isTexture) {
      if (planeMesh === void 0) {
        planeMesh = new Mesh(new PlaneGeometry(2, 2), new ShaderMaterial({
          name: "BackgroundMaterial",
          uniforms: cloneUniforms(ShaderLib.background.uniforms),
          vertexShader: ShaderLib.background.vertexShader,
          fragmentShader: ShaderLib.background.fragmentShader,
          side: FrontSide,
          depthTest: false,
          depthWrite: false,
          fog: false
        }));
        planeMesh.geometry.deleteAttribute("normal");
        Object.defineProperty(planeMesh.material, "map", {
          get: function() {
            return this.uniforms.t2D.value;
          }
        });
        objects.update(planeMesh);
      }
      planeMesh.material.uniforms.t2D.value = background;
      if (background.matrixAutoUpdate === true) {
        background.updateMatrix();
      }
      planeMesh.material.uniforms.uvTransform.value.copy(background.matrix);
      if (currentBackground !== background || currentBackgroundVersion !== background.version || currentTonemapping !== renderer.toneMapping) {
        planeMesh.material.needsUpdate = true;
        currentBackground = background;
        currentBackgroundVersion = background.version;
        currentTonemapping = renderer.toneMapping;
      }
      renderList.unshift(planeMesh, planeMesh.geometry, planeMesh.material, 0, 0, null);
    }
  }
  function setClear(color, alpha2) {
    state.buffers.color.setClear(color.r, color.g, color.b, alpha2, premultipliedAlpha);
  }
  return {
    getClearColor: function() {
      return clearColor;
    },
    setClearColor: function(color, alpha2 = 1) {
      clearColor.set(color);
      clearAlpha = alpha2;
      setClear(clearColor, clearAlpha);
    },
    getClearAlpha: function() {
      return clearAlpha;
    },
    setClearAlpha: function(alpha2) {
      clearAlpha = alpha2;
      setClear(clearColor, clearAlpha);
    },
    render
  };
}
function WebGLBindingStates(gl, extensions, attributes, capabilities) {
  const maxVertexAttributes = gl.getParameter(34921);
  const extension = capabilities.isWebGL2 ? null : extensions.get("OES_vertex_array_object");
  const vaoAvailable = capabilities.isWebGL2 || extension !== null;
  const bindingStates = {};
  const defaultState = createBindingState(null);
  let currentState = defaultState;
  let forceUpdate = false;
  function setup(object, material, program, geometry, index) {
    let updateBuffers = false;
    if (vaoAvailable) {
      const state = getBindingState(geometry, program, material);
      if (currentState !== state) {
        currentState = state;
        bindVertexArrayObject(currentState.object);
      }
      updateBuffers = needsUpdate(geometry, index);
      if (updateBuffers)
        saveCache(geometry, index);
    } else {
      const wireframe = material.wireframe === true;
      if (currentState.geometry !== geometry.id || currentState.program !== program.id || currentState.wireframe !== wireframe) {
        currentState.geometry = geometry.id;
        currentState.program = program.id;
        currentState.wireframe = wireframe;
        updateBuffers = true;
      }
    }
    if (object.isInstancedMesh === true) {
      updateBuffers = true;
    }
    if (index !== null) {
      attributes.update(index, 34963);
    }
    if (updateBuffers || forceUpdate) {
      forceUpdate = false;
      setupVertexAttributes(object, material, program, geometry);
      if (index !== null) {
        gl.bindBuffer(34963, attributes.get(index).buffer);
      }
    }
  }
  function createVertexArrayObject() {
    if (capabilities.isWebGL2)
      return gl.createVertexArray();
    return extension.createVertexArrayOES();
  }
  function bindVertexArrayObject(vao) {
    if (capabilities.isWebGL2)
      return gl.bindVertexArray(vao);
    return extension.bindVertexArrayOES(vao);
  }
  function deleteVertexArrayObject(vao) {
    if (capabilities.isWebGL2)
      return gl.deleteVertexArray(vao);
    return extension.deleteVertexArrayOES(vao);
  }
  function getBindingState(geometry, program, material) {
    const wireframe = material.wireframe === true;
    let programMap = bindingStates[geometry.id];
    if (programMap === void 0) {
      programMap = {};
      bindingStates[geometry.id] = programMap;
    }
    let stateMap = programMap[program.id];
    if (stateMap === void 0) {
      stateMap = {};
      programMap[program.id] = stateMap;
    }
    let state = stateMap[wireframe];
    if (state === void 0) {
      state = createBindingState(createVertexArrayObject());
      stateMap[wireframe] = state;
    }
    return state;
  }
  function createBindingState(vao) {
    const newAttributes = [];
    const enabledAttributes = [];
    const attributeDivisors = [];
    for (let i = 0; i < maxVertexAttributes; i++) {
      newAttributes[i] = 0;
      enabledAttributes[i] = 0;
      attributeDivisors[i] = 0;
    }
    return {
      geometry: null,
      program: null,
      wireframe: false,
      newAttributes,
      enabledAttributes,
      attributeDivisors,
      object: vao,
      attributes: {},
      index: null
    };
  }
  function needsUpdate(geometry, index) {
    const cachedAttributes = currentState.attributes;
    const geometryAttributes = geometry.attributes;
    let attributesNum = 0;
    for (const key in geometryAttributes) {
      const cachedAttribute = cachedAttributes[key];
      const geometryAttribute = geometryAttributes[key];
      if (cachedAttribute === void 0)
        return true;
      if (cachedAttribute.attribute !== geometryAttribute)
        return true;
      if (cachedAttribute.data !== geometryAttribute.data)
        return true;
      attributesNum++;
    }
    if (currentState.attributesNum !== attributesNum)
      return true;
    if (currentState.index !== index)
      return true;
    return false;
  }
  function saveCache(geometry, index) {
    const cache = {};
    const attributes2 = geometry.attributes;
    let attributesNum = 0;
    for (const key in attributes2) {
      const attribute = attributes2[key];
      const data = {};
      data.attribute = attribute;
      if (attribute.data) {
        data.data = attribute.data;
      }
      cache[key] = data;
      attributesNum++;
    }
    currentState.attributes = cache;
    currentState.attributesNum = attributesNum;
    currentState.index = index;
  }
  function initAttributes() {
    const newAttributes = currentState.newAttributes;
    for (let i = 0, il = newAttributes.length; i < il; i++) {
      newAttributes[i] = 0;
    }
  }
  function enableAttribute(attribute) {
    enableAttributeAndDivisor(attribute, 0);
  }
  function enableAttributeAndDivisor(attribute, meshPerAttribute) {
    const newAttributes = currentState.newAttributes;
    const enabledAttributes = currentState.enabledAttributes;
    const attributeDivisors = currentState.attributeDivisors;
    newAttributes[attribute] = 1;
    if (enabledAttributes[attribute] === 0) {
      gl.enableVertexAttribArray(attribute);
      enabledAttributes[attribute] = 1;
    }
    if (attributeDivisors[attribute] !== meshPerAttribute) {
      const extension2 = capabilities.isWebGL2 ? gl : extensions.get("ANGLE_instanced_arrays");
      extension2[capabilities.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"](attribute, meshPerAttribute);
      attributeDivisors[attribute] = meshPerAttribute;
    }
  }
  function disableUnusedAttributes() {
    const newAttributes = currentState.newAttributes;
    const enabledAttributes = currentState.enabledAttributes;
    for (let i = 0, il = enabledAttributes.length; i < il; i++) {
      if (enabledAttributes[i] !== newAttributes[i]) {
        gl.disableVertexAttribArray(i);
        enabledAttributes[i] = 0;
      }
    }
  }
  function vertexAttribPointer(index, size, type, normalized, stride, offset) {
    if (capabilities.isWebGL2 === true && (type === 5124 || type === 5125)) {
      gl.vertexAttribIPointer(index, size, type, stride, offset);
    } else {
      gl.vertexAttribPointer(index, size, type, normalized, stride, offset);
    }
  }
  function setupVertexAttributes(object, material, program, geometry) {
    if (capabilities.isWebGL2 === false && (object.isInstancedMesh || geometry.isInstancedBufferGeometry)) {
      if (extensions.get("ANGLE_instanced_arrays") === null)
        return;
    }
    initAttributes();
    const geometryAttributes = geometry.attributes;
    const programAttributes = program.getAttributes();
    const materialDefaultAttributeValues = material.defaultAttributeValues;
    for (const name in programAttributes) {
      const programAttribute = programAttributes[name];
      if (programAttribute.location >= 0) {
        let geometryAttribute = geometryAttributes[name];
        if (geometryAttribute === void 0) {
          if (name === "instanceMatrix" && object.instanceMatrix)
            geometryAttribute = object.instanceMatrix;
          if (name === "instanceColor" && object.instanceColor)
            geometryAttribute = object.instanceColor;
        }
        if (geometryAttribute !== void 0) {
          const normalized = geometryAttribute.normalized;
          const size = geometryAttribute.itemSize;
          const attribute = attributes.get(geometryAttribute);
          if (attribute === void 0)
            continue;
          const buffer = attribute.buffer;
          const type = attribute.type;
          const bytesPerElement = attribute.bytesPerElement;
          if (geometryAttribute.isInterleavedBufferAttribute) {
            const data = geometryAttribute.data;
            const stride = data.stride;
            const offset = geometryAttribute.offset;
            if (data.isInstancedInterleavedBuffer) {
              for (let i = 0; i < programAttribute.locationSize; i++) {
                enableAttributeAndDivisor(programAttribute.location + i, data.meshPerAttribute);
              }
              if (object.isInstancedMesh !== true && geometry._maxInstanceCount === void 0) {
                geometry._maxInstanceCount = data.meshPerAttribute * data.count;
              }
            } else {
              for (let i = 0; i < programAttribute.locationSize; i++) {
                enableAttribute(programAttribute.location + i);
              }
            }
            gl.bindBuffer(34962, buffer);
            for (let i = 0; i < programAttribute.locationSize; i++) {
              vertexAttribPointer(programAttribute.location + i, size / programAttribute.locationSize, type, normalized, stride * bytesPerElement, (offset + size / programAttribute.locationSize * i) * bytesPerElement);
            }
          } else {
            if (geometryAttribute.isInstancedBufferAttribute) {
              for (let i = 0; i < programAttribute.locationSize; i++) {
                enableAttributeAndDivisor(programAttribute.location + i, geometryAttribute.meshPerAttribute);
              }
              if (object.isInstancedMesh !== true && geometry._maxInstanceCount === void 0) {
                geometry._maxInstanceCount = geometryAttribute.meshPerAttribute * geometryAttribute.count;
              }
            } else {
              for (let i = 0; i < programAttribute.locationSize; i++) {
                enableAttribute(programAttribute.location + i);
              }
            }
            gl.bindBuffer(34962, buffer);
            for (let i = 0; i < programAttribute.locationSize; i++) {
              vertexAttribPointer(programAttribute.location + i, size / programAttribute.locationSize, type, normalized, size * bytesPerElement, size / programAttribute.locationSize * i * bytesPerElement);
            }
          }
        } else if (materialDefaultAttributeValues !== void 0) {
          const value = materialDefaultAttributeValues[name];
          if (value !== void 0) {
            switch (value.length) {
              case 2:
                gl.vertexAttrib2fv(programAttribute.location, value);
                break;
              case 3:
                gl.vertexAttrib3fv(programAttribute.location, value);
                break;
              case 4:
                gl.vertexAttrib4fv(programAttribute.location, value);
                break;
              default:
                gl.vertexAttrib1fv(programAttribute.location, value);
            }
          }
        }
      }
    }
    disableUnusedAttributes();
  }
  function dispose() {
    reset();
    for (const geometryId in bindingStates) {
      const programMap = bindingStates[geometryId];
      for (const programId in programMap) {
        const stateMap = programMap[programId];
        for (const wireframe in stateMap) {
          deleteVertexArrayObject(stateMap[wireframe].object);
          delete stateMap[wireframe];
        }
        delete programMap[programId];
      }
      delete bindingStates[geometryId];
    }
  }
  function releaseStatesOfGeometry(geometry) {
    if (bindingStates[geometry.id] === void 0)
      return;
    const programMap = bindingStates[geometry.id];
    for (const programId in programMap) {
      const stateMap = programMap[programId];
      for (const wireframe in stateMap) {
        deleteVertexArrayObject(stateMap[wireframe].object);
        delete stateMap[wireframe];
      }
      delete programMap[programId];
    }
    delete bindingStates[geometry.id];
  }
  function releaseStatesOfProgram(program) {
    for (const geometryId in bindingStates) {
      const programMap = bindingStates[geometryId];
      if (programMap[program.id] === void 0)
        continue;
      const stateMap = programMap[program.id];
      for (const wireframe in stateMap) {
        deleteVertexArrayObject(stateMap[wireframe].object);
        delete stateMap[wireframe];
      }
      delete programMap[program.id];
    }
  }
  function reset() {
    resetDefaultState();
    forceUpdate = true;
    if (currentState === defaultState)
      return;
    currentState = defaultState;
    bindVertexArrayObject(currentState.object);
  }
  function resetDefaultState() {
    defaultState.geometry = null;
    defaultState.program = null;
    defaultState.wireframe = false;
  }
  return {
    setup,
    reset,
    resetDefaultState,
    dispose,
    releaseStatesOfGeometry,
    releaseStatesOfProgram,
    initAttributes,
    enableAttribute,
    disableUnusedAttributes
  };
}
function WebGLBufferRenderer(gl, extensions, info, capabilities) {
  const isWebGL2 = capabilities.isWebGL2;
  let mode;
  function setMode(value) {
    mode = value;
  }
  function render(start, count) {
    gl.drawArrays(mode, start, count);
    info.update(count, mode, 1);
  }
  function renderInstances(start, count, primcount) {
    if (primcount === 0)
      return;
    let extension, methodName;
    if (isWebGL2) {
      extension = gl;
      methodName = "drawArraysInstanced";
    } else {
      extension = extensions.get("ANGLE_instanced_arrays");
      methodName = "drawArraysInstancedANGLE";
      if (extension === null) {
        console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
        return;
      }
    }
    extension[methodName](mode, start, count, primcount);
    info.update(count, mode, primcount);
  }
  this.setMode = setMode;
  this.render = render;
  this.renderInstances = renderInstances;
}
function WebGLCapabilities(gl, extensions, parameters) {
  let maxAnisotropy;
  function getMaxAnisotropy() {
    if (maxAnisotropy !== void 0)
      return maxAnisotropy;
    if (extensions.has("EXT_texture_filter_anisotropic") === true) {
      const extension = extensions.get("EXT_texture_filter_anisotropic");
      maxAnisotropy = gl.getParameter(extension.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else {
      maxAnisotropy = 0;
    }
    return maxAnisotropy;
  }
  function getMaxPrecision(precision2) {
    if (precision2 === "highp") {
      if (gl.getShaderPrecisionFormat(35633, 36338).precision > 0 && gl.getShaderPrecisionFormat(35632, 36338).precision > 0) {
        return "highp";
      }
      precision2 = "mediump";
    }
    if (precision2 === "mediump") {
      if (gl.getShaderPrecisionFormat(35633, 36337).precision > 0 && gl.getShaderPrecisionFormat(35632, 36337).precision > 0) {
        return "mediump";
      }
    }
    return "lowp";
  }
  const isWebGL2 = typeof WebGL2RenderingContext !== "undefined" && gl instanceof WebGL2RenderingContext || typeof WebGL2ComputeRenderingContext !== "undefined" && gl instanceof WebGL2ComputeRenderingContext;
  let precision = parameters.precision !== void 0 ? parameters.precision : "highp";
  const maxPrecision = getMaxPrecision(precision);
  if (maxPrecision !== precision) {
    console.warn("THREE.WebGLRenderer:", precision, "not supported, using", maxPrecision, "instead.");
    precision = maxPrecision;
  }
  const drawBuffers = isWebGL2 || extensions.has("WEBGL_draw_buffers");
  const logarithmicDepthBuffer = parameters.logarithmicDepthBuffer === true;
  const maxTextures = gl.getParameter(34930);
  const maxVertexTextures = gl.getParameter(35660);
  const maxTextureSize = gl.getParameter(3379);
  const maxCubemapSize = gl.getParameter(34076);
  const maxAttributes = gl.getParameter(34921);
  const maxVertexUniforms = gl.getParameter(36347);
  const maxVaryings = gl.getParameter(36348);
  const maxFragmentUniforms = gl.getParameter(36349);
  const vertexTextures = maxVertexTextures > 0;
  const floatFragmentTextures = isWebGL2 || extensions.has("OES_texture_float");
  const floatVertexTextures = vertexTextures && floatFragmentTextures;
  const maxSamples = isWebGL2 ? gl.getParameter(36183) : 0;
  return {
    isWebGL2,
    drawBuffers,
    getMaxAnisotropy,
    getMaxPrecision,
    precision,
    logarithmicDepthBuffer,
    maxTextures,
    maxVertexTextures,
    maxTextureSize,
    maxCubemapSize,
    maxAttributes,
    maxVertexUniforms,
    maxVaryings,
    maxFragmentUniforms,
    vertexTextures,
    floatFragmentTextures,
    floatVertexTextures,
    maxSamples
  };
}
function WebGLClipping(properties) {
  const scope = this;
  let globalState = null, numGlobalPlanes = 0, localClippingEnabled = false, renderingShadows = false;
  const plane = new Plane(), viewNormalMatrix = new Matrix3(), uniform = { value: null, needsUpdate: false };
  this.uniform = uniform;
  this.numPlanes = 0;
  this.numIntersection = 0;
  this.init = function(planes, enableLocalClipping, camera) {
    const enabled = planes.length !== 0 || enableLocalClipping || numGlobalPlanes !== 0 || localClippingEnabled;
    localClippingEnabled = enableLocalClipping;
    globalState = projectPlanes(planes, camera, 0);
    numGlobalPlanes = planes.length;
    return enabled;
  };
  this.beginShadows = function() {
    renderingShadows = true;
    projectPlanes(null);
  };
  this.endShadows = function() {
    renderingShadows = false;
    resetGlobalState();
  };
  this.setState = function(material, camera, useCache) {
    const planes = material.clippingPlanes, clipIntersection = material.clipIntersection, clipShadows = material.clipShadows;
    const materialProperties = properties.get(material);
    if (!localClippingEnabled || planes === null || planes.length === 0 || renderingShadows && !clipShadows) {
      if (renderingShadows) {
        projectPlanes(null);
      } else {
        resetGlobalState();
      }
    } else {
      const nGlobal = renderingShadows ? 0 : numGlobalPlanes, lGlobal = nGlobal * 4;
      let dstArray = materialProperties.clippingState || null;
      uniform.value = dstArray;
      dstArray = projectPlanes(planes, camera, lGlobal, useCache);
      for (let i = 0; i !== lGlobal; ++i) {
        dstArray[i] = globalState[i];
      }
      materialProperties.clippingState = dstArray;
      this.numIntersection = clipIntersection ? this.numPlanes : 0;
      this.numPlanes += nGlobal;
    }
  };
  function resetGlobalState() {
    if (uniform.value !== globalState) {
      uniform.value = globalState;
      uniform.needsUpdate = numGlobalPlanes > 0;
    }
    scope.numPlanes = numGlobalPlanes;
    scope.numIntersection = 0;
  }
  function projectPlanes(planes, camera, dstOffset, skipTransform) {
    const nPlanes = planes !== null ? planes.length : 0;
    let dstArray = null;
    if (nPlanes !== 0) {
      dstArray = uniform.value;
      if (skipTransform !== true || dstArray === null) {
        const flatSize = dstOffset + nPlanes * 4, viewMatrix = camera.matrixWorldInverse;
        viewNormalMatrix.getNormalMatrix(viewMatrix);
        if (dstArray === null || dstArray.length < flatSize) {
          dstArray = new Float32Array(flatSize);
        }
        for (let i = 0, i4 = dstOffset; i !== nPlanes; ++i, i4 += 4) {
          plane.copy(planes[i]).applyMatrix4(viewMatrix, viewNormalMatrix);
          plane.normal.toArray(dstArray, i4);
          dstArray[i4 + 3] = plane.constant;
        }
      }
      uniform.value = dstArray;
      uniform.needsUpdate = true;
    }
    scope.numPlanes = nPlanes;
    scope.numIntersection = 0;
    return dstArray;
  }
}
function WebGLCubeMaps(renderer) {
  let cubemaps = /* @__PURE__ */ new WeakMap();
  function mapTextureMapping(texture, mapping) {
    if (mapping === EquirectangularReflectionMapping) {
      texture.mapping = CubeReflectionMapping;
    } else if (mapping === EquirectangularRefractionMapping) {
      texture.mapping = CubeRefractionMapping;
    }
    return texture;
  }
  function get(texture) {
    if (texture && texture.isTexture && texture.isRenderTargetTexture === false) {
      const mapping = texture.mapping;
      if (mapping === EquirectangularReflectionMapping || mapping === EquirectangularRefractionMapping) {
        if (cubemaps.has(texture)) {
          const cubemap = cubemaps.get(texture).texture;
          return mapTextureMapping(cubemap, texture.mapping);
        } else {
          const image = texture.image;
          if (image && image.height > 0) {
            const renderTarget = new WebGLCubeRenderTarget(image.height / 2);
            renderTarget.fromEquirectangularTexture(renderer, texture);
            cubemaps.set(texture, renderTarget);
            texture.addEventListener("dispose", onTextureDispose);
            return mapTextureMapping(renderTarget.texture, texture.mapping);
          } else {
            return null;
          }
        }
      }
    }
    return texture;
  }
  function onTextureDispose(event) {
    const texture = event.target;
    texture.removeEventListener("dispose", onTextureDispose);
    const cubemap = cubemaps.get(texture);
    if (cubemap !== void 0) {
      cubemaps.delete(texture);
      cubemap.dispose();
    }
  }
  function dispose() {
    cubemaps = /* @__PURE__ */ new WeakMap();
  }
  return {
    get,
    dispose
  };
}
var OrthographicCamera = class extends Camera {
  constructor(left = -1, right = 1, top = 1, bottom = -1, near = 0.1, far = 2e3) {
    super();
    this.type = "OrthographicCamera";
    this.zoom = 1;
    this.view = null;
    this.left = left;
    this.right = right;
    this.top = top;
    this.bottom = bottom;
    this.near = near;
    this.far = far;
    this.updateProjectionMatrix();
  }
  copy(source, recursive) {
    super.copy(source, recursive);
    this.left = source.left;
    this.right = source.right;
    this.top = source.top;
    this.bottom = source.bottom;
    this.near = source.near;
    this.far = source.far;
    this.zoom = source.zoom;
    this.view = source.view === null ? null : Object.assign({}, source.view);
    return this;
  }
  setViewOffset(fullWidth, fullHeight, x, y, width, height) {
    if (this.view === null) {
      this.view = {
        enabled: true,
        fullWidth: 1,
        fullHeight: 1,
        offsetX: 0,
        offsetY: 0,
        width: 1,
        height: 1
      };
    }
    this.view.enabled = true;
    this.view.fullWidth = fullWidth;
    this.view.fullHeight = fullHeight;
    this.view.offsetX = x;
    this.view.offsetY = y;
    this.view.width = width;
    this.view.height = height;
    this.updateProjectionMatrix();
  }
  clearViewOffset() {
    if (this.view !== null) {
      this.view.enabled = false;
    }
    this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const dx = (this.right - this.left) / (2 * this.zoom);
    const dy = (this.top - this.bottom) / (2 * this.zoom);
    const cx = (this.right + this.left) / 2;
    const cy = (this.top + this.bottom) / 2;
    let left = cx - dx;
    let right = cx + dx;
    let top = cy + dy;
    let bottom = cy - dy;
    if (this.view !== null && this.view.enabled) {
      const scaleW = (this.right - this.left) / this.view.fullWidth / this.zoom;
      const scaleH = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      left += scaleW * this.view.offsetX;
      right = left + scaleW * this.view.width;
      top -= scaleH * this.view.offsetY;
      bottom = top - scaleH * this.view.height;
    }
    this.projectionMatrix.makeOrthographic(left, right, top, bottom, this.near, this.far);
    this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(meta) {
    const data = super.toJSON(meta);
    data.object.zoom = this.zoom;
    data.object.left = this.left;
    data.object.right = this.right;
    data.object.top = this.top;
    data.object.bottom = this.bottom;
    data.object.near = this.near;
    data.object.far = this.far;
    if (this.view !== null)
      data.object.view = Object.assign({}, this.view);
    return data;
  }
};
OrthographicCamera.prototype.isOrthographicCamera = true;
var LOD_MIN = 4;
var EXTRA_LOD_SIGMA = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582];
var MAX_SAMPLES = 20;
var _flatCamera = /* @__PURE__ */ new OrthographicCamera();
var _clearColor = /* @__PURE__ */ new Color();
var _oldTarget = null;
var PHI = (1 + Math.sqrt(5)) / 2;
var INV_PHI = 1 / PHI;
var _axisDirections = [
  /* @__PURE__ */ new Vector3(1, 1, 1),
  /* @__PURE__ */ new Vector3(-1, 1, 1),
  /* @__PURE__ */ new Vector3(1, 1, -1),
  /* @__PURE__ */ new Vector3(-1, 1, -1),
  /* @__PURE__ */ new Vector3(0, PHI, INV_PHI),
  /* @__PURE__ */ new Vector3(0, PHI, -INV_PHI),
  /* @__PURE__ */ new Vector3(INV_PHI, 0, PHI),
  /* @__PURE__ */ new Vector3(-INV_PHI, 0, PHI),
  /* @__PURE__ */ new Vector3(PHI, INV_PHI, 0),
  /* @__PURE__ */ new Vector3(-PHI, INV_PHI, 0)
];
var PMREMGenerator = class {
  constructor(renderer) {
    this._renderer = renderer;
    this._pingPongRenderTarget = null;
    this._lodMax = 0;
    this._cubeSize = 0;
    this._lodPlanes = [];
    this._sizeLods = [];
    this._sigmas = [];
    this._blurMaterial = null;
    this._cubemapMaterial = null;
    this._equirectMaterial = null;
    this._compileMaterial(this._blurMaterial);
  }
  fromScene(scene, sigma = 0, near = 0.1, far = 100) {
    _oldTarget = this._renderer.getRenderTarget();
    this._setSize(256);
    const cubeUVRenderTarget = this._allocateTargets();
    cubeUVRenderTarget.depthBuffer = true;
    this._sceneToCubeUV(scene, near, far, cubeUVRenderTarget);
    if (sigma > 0) {
      this._blur(cubeUVRenderTarget, 0, 0, sigma);
    }
    this._applyPMREM(cubeUVRenderTarget);
    this._cleanup(cubeUVRenderTarget);
    return cubeUVRenderTarget;
  }
  fromEquirectangular(equirectangular, renderTarget = null) {
    return this._fromTexture(equirectangular, renderTarget);
  }
  fromCubemap(cubemap, renderTarget = null) {
    return this._fromTexture(cubemap, renderTarget);
  }
  compileCubemapShader() {
    if (this._cubemapMaterial === null) {
      this._cubemapMaterial = _getCubemapMaterial();
      this._compileMaterial(this._cubemapMaterial);
    }
  }
  compileEquirectangularShader() {
    if (this._equirectMaterial === null) {
      this._equirectMaterial = _getEquirectMaterial();
      this._compileMaterial(this._equirectMaterial);
    }
  }
  dispose() {
    this._dispose();
    if (this._cubemapMaterial !== null)
      this._cubemapMaterial.dispose();
    if (this._equirectMaterial !== null)
      this._equirectMaterial.dispose();
  }
  _setSize(cubeSize) {
    this._lodMax = Math.floor(Math.log2(cubeSize));
    this._cubeSize = Math.pow(2, this._lodMax);
  }
  _dispose() {
    if (this._blurMaterial !== null)
      this._blurMaterial.dispose();
    if (this._pingPongRenderTarget !== null)
      this._pingPongRenderTarget.dispose();
    for (let i = 0; i < this._lodPlanes.length; i++) {
      this._lodPlanes[i].dispose();
    }
  }
  _cleanup(outputTarget) {
    this._renderer.setRenderTarget(_oldTarget);
    outputTarget.scissorTest = false;
    _setViewport(outputTarget, 0, 0, outputTarget.width, outputTarget.height);
  }
  _fromTexture(texture, renderTarget) {
    if (texture.mapping === CubeReflectionMapping || texture.mapping === CubeRefractionMapping) {
      this._setSize(texture.image.length === 0 ? 16 : texture.image[0].width || texture.image[0].image.width);
    } else {
      this._setSize(texture.image.width / 4);
    }
    _oldTarget = this._renderer.getRenderTarget();
    const cubeUVRenderTarget = renderTarget || this._allocateTargets();
    this._textureToCubeUV(texture, cubeUVRenderTarget);
    this._applyPMREM(cubeUVRenderTarget);
    this._cleanup(cubeUVRenderTarget);
    return cubeUVRenderTarget;
  }
  _allocateTargets() {
    const width = 3 * Math.max(this._cubeSize, 16 * 7);
    const height = 4 * this._cubeSize - 32;
    const params = {
      magFilter: LinearFilter,
      minFilter: LinearFilter,
      generateMipmaps: false,
      type: HalfFloatType,
      format: RGBAFormat,
      encoding: LinearEncoding,
      depthBuffer: false
    };
    const cubeUVRenderTarget = _createRenderTarget(width, height, params);
    if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== width) {
      if (this._pingPongRenderTarget !== null) {
        this._dispose();
      }
      this._pingPongRenderTarget = _createRenderTarget(width, height, params);
      const { _lodMax } = this;
      ({ sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas } = _createPlanes(_lodMax));
      this._blurMaterial = _getBlurShader(_lodMax, width, height);
    }
    return cubeUVRenderTarget;
  }
  _compileMaterial(material) {
    const tmpMesh = new Mesh(this._lodPlanes[0], material);
    this._renderer.compile(tmpMesh, _flatCamera);
  }
  _sceneToCubeUV(scene, near, far, cubeUVRenderTarget) {
    const fov2 = 90;
    const aspect2 = 1;
    const cubeCamera = new PerspectiveCamera(fov2, aspect2, near, far);
    const upSign = [1, -1, 1, 1, 1, 1];
    const forwardSign = [1, 1, 1, -1, -1, -1];
    const renderer = this._renderer;
    const originalAutoClear = renderer.autoClear;
    const toneMapping = renderer.toneMapping;
    renderer.getClearColor(_clearColor);
    renderer.toneMapping = NoToneMapping;
    renderer.autoClear = false;
    const backgroundMaterial = new MeshBasicMaterial({
      name: "PMREM.Background",
      side: BackSide,
      depthWrite: false,
      depthTest: false
    });
    const backgroundBox = new Mesh(new BoxGeometry(), backgroundMaterial);
    let useSolidColor = false;
    const background = scene.background;
    if (background) {
      if (background.isColor) {
        backgroundMaterial.color.copy(background);
        scene.background = null;
        useSolidColor = true;
      }
    } else {
      backgroundMaterial.color.copy(_clearColor);
      useSolidColor = true;
    }
    for (let i = 0; i < 6; i++) {
      const col = i % 3;
      if (col === 0) {
        cubeCamera.up.set(0, upSign[i], 0);
        cubeCamera.lookAt(forwardSign[i], 0, 0);
      } else if (col === 1) {
        cubeCamera.up.set(0, 0, upSign[i]);
        cubeCamera.lookAt(0, forwardSign[i], 0);
      } else {
        cubeCamera.up.set(0, upSign[i], 0);
        cubeCamera.lookAt(0, 0, forwardSign[i]);
      }
      const size = this._cubeSize;
      _setViewport(cubeUVRenderTarget, col * size, i > 2 ? size : 0, size, size);
      renderer.setRenderTarget(cubeUVRenderTarget);
      if (useSolidColor) {
        renderer.render(backgroundBox, cubeCamera);
      }
      renderer.render(scene, cubeCamera);
    }
    backgroundBox.geometry.dispose();
    backgroundBox.material.dispose();
    renderer.toneMapping = toneMapping;
    renderer.autoClear = originalAutoClear;
    scene.background = background;
  }
  _textureToCubeUV(texture, cubeUVRenderTarget) {
    const renderer = this._renderer;
    const isCubeTexture = texture.mapping === CubeReflectionMapping || texture.mapping === CubeRefractionMapping;
    if (isCubeTexture) {
      if (this._cubemapMaterial === null) {
        this._cubemapMaterial = _getCubemapMaterial();
      }
      this._cubemapMaterial.uniforms.flipEnvMap.value = texture.isRenderTargetTexture === false ? -1 : 1;
    } else {
      if (this._equirectMaterial === null) {
        this._equirectMaterial = _getEquirectMaterial();
      }
    }
    const material = isCubeTexture ? this._cubemapMaterial : this._equirectMaterial;
    const mesh = new Mesh(this._lodPlanes[0], material);
    const uniforms = material.uniforms;
    uniforms["envMap"].value = texture;
    const size = this._cubeSize;
    _setViewport(cubeUVRenderTarget, 0, 0, 3 * size, 2 * size);
    renderer.setRenderTarget(cubeUVRenderTarget);
    renderer.render(mesh, _flatCamera);
  }
  _applyPMREM(cubeUVRenderTarget) {
    const renderer = this._renderer;
    const autoClear = renderer.autoClear;
    renderer.autoClear = false;
    for (let i = 1; i < this._lodPlanes.length; i++) {
      const sigma = Math.sqrt(this._sigmas[i] * this._sigmas[i] - this._sigmas[i - 1] * this._sigmas[i - 1]);
      const poleAxis = _axisDirections[(i - 1) % _axisDirections.length];
      this._blur(cubeUVRenderTarget, i - 1, i, sigma, poleAxis);
    }
    renderer.autoClear = autoClear;
  }
  _blur(cubeUVRenderTarget, lodIn, lodOut, sigma, poleAxis) {
    const pingPongRenderTarget = this._pingPongRenderTarget;
    this._halfBlur(cubeUVRenderTarget, pingPongRenderTarget, lodIn, lodOut, sigma, "latitudinal", poleAxis);
    this._halfBlur(pingPongRenderTarget, cubeUVRenderTarget, lodOut, lodOut, sigma, "longitudinal", poleAxis);
  }
  _halfBlur(targetIn, targetOut, lodIn, lodOut, sigmaRadians, direction, poleAxis) {
    const renderer = this._renderer;
    const blurMaterial = this._blurMaterial;
    if (direction !== "latitudinal" && direction !== "longitudinal") {
      console.error("blur direction must be either latitudinal or longitudinal!");
    }
    const STANDARD_DEVIATIONS = 3;
    const blurMesh = new Mesh(this._lodPlanes[lodOut], blurMaterial);
    const blurUniforms = blurMaterial.uniforms;
    const pixels = this._sizeLods[lodIn] - 1;
    const radiansPerPixel = isFinite(sigmaRadians) ? Math.PI / (2 * pixels) : 2 * Math.PI / (2 * MAX_SAMPLES - 1);
    const sigmaPixels = sigmaRadians / radiansPerPixel;
    const samples = isFinite(sigmaRadians) ? 1 + Math.floor(STANDARD_DEVIATIONS * sigmaPixels) : MAX_SAMPLES;
    if (samples > MAX_SAMPLES) {
      console.warn(`sigmaRadians, ${sigmaRadians}, is too large and will clip, as it requested ${samples} samples when the maximum is set to ${MAX_SAMPLES}`);
    }
    const weights = [];
    let sum = 0;
    for (let i = 0; i < MAX_SAMPLES; ++i) {
      const x2 = i / sigmaPixels;
      const weight = Math.exp(-x2 * x2 / 2);
      weights.push(weight);
      if (i === 0) {
        sum += weight;
      } else if (i < samples) {
        sum += 2 * weight;
      }
    }
    for (let i = 0; i < weights.length; i++) {
      weights[i] = weights[i] / sum;
    }
    blurUniforms["envMap"].value = targetIn.texture;
    blurUniforms["samples"].value = samples;
    blurUniforms["weights"].value = weights;
    blurUniforms["latitudinal"].value = direction === "latitudinal";
    if (poleAxis) {
      blurUniforms["poleAxis"].value = poleAxis;
    }
    const { _lodMax } = this;
    blurUniforms["dTheta"].value = radiansPerPixel;
    blurUniforms["mipInt"].value = _lodMax - lodIn;
    const outputSize = this._sizeLods[lodOut];
    const x = 3 * outputSize * (lodOut > _lodMax - LOD_MIN ? lodOut - _lodMax + LOD_MIN : 0);
    const y = 4 * (this._cubeSize - outputSize);
    _setViewport(targetOut, x, y, 3 * outputSize, 2 * outputSize);
    renderer.setRenderTarget(targetOut);
    renderer.render(blurMesh, _flatCamera);
  }
};
function _createPlanes(lodMax) {
  const lodPlanes = [];
  const sizeLods = [];
  const sigmas = [];
  let lod = lodMax;
  const totalLods = lodMax - LOD_MIN + 1 + EXTRA_LOD_SIGMA.length;
  for (let i = 0; i < totalLods; i++) {
    const sizeLod = Math.pow(2, lod);
    sizeLods.push(sizeLod);
    let sigma = 1 / sizeLod;
    if (i > lodMax - LOD_MIN) {
      sigma = EXTRA_LOD_SIGMA[i - lodMax + LOD_MIN - 1];
    } else if (i === 0) {
      sigma = 0;
    }
    sigmas.push(sigma);
    const texelSize = 1 / (sizeLod - 1);
    const min = -texelSize / 2;
    const max = 1 + texelSize / 2;
    const uv1 = [min, min, max, min, max, max, min, min, max, max, min, max];
    const cubeFaces = 6;
    const vertices = 6;
    const positionSize = 3;
    const uvSize = 2;
    const faceIndexSize = 1;
    const position = new Float32Array(positionSize * vertices * cubeFaces);
    const uv = new Float32Array(uvSize * vertices * cubeFaces);
    const faceIndex = new Float32Array(faceIndexSize * vertices * cubeFaces);
    for (let face = 0; face < cubeFaces; face++) {
      const x = face % 3 * 2 / 3 - 1;
      const y = face > 2 ? 0 : -1;
      const coordinates = [
        x,
        y,
        0,
        x + 2 / 3,
        y,
        0,
        x + 2 / 3,
        y + 1,
        0,
        x,
        y,
        0,
        x + 2 / 3,
        y + 1,
        0,
        x,
        y + 1,
        0
      ];
      position.set(coordinates, positionSize * vertices * face);
      uv.set(uv1, uvSize * vertices * face);
      const fill = [face, face, face, face, face, face];
      faceIndex.set(fill, faceIndexSize * vertices * face);
    }
    const planes = new BufferGeometry();
    planes.setAttribute("position", new BufferAttribute(position, positionSize));
    planes.setAttribute("uv", new BufferAttribute(uv, uvSize));
    planes.setAttribute("faceIndex", new BufferAttribute(faceIndex, faceIndexSize));
    lodPlanes.push(planes);
    if (lod > LOD_MIN) {
      lod--;
    }
  }
  return { lodPlanes, sizeLods, sigmas };
}
function _createRenderTarget(width, height, params) {
  const cubeUVRenderTarget = new WebGLRenderTarget(width, height, params);
  cubeUVRenderTarget.texture.mapping = CubeUVReflectionMapping;
  cubeUVRenderTarget.texture.name = "PMREM.cubeUv";
  cubeUVRenderTarget.scissorTest = true;
  return cubeUVRenderTarget;
}
function _setViewport(target, x, y, width, height) {
  target.viewport.set(x, y, width, height);
  target.scissor.set(x, y, width, height);
}
function _getBlurShader(lodMax, width, height) {
  const weights = new Float32Array(MAX_SAMPLES);
  const poleAxis = new Vector3(0, 1, 0);
  const shaderMaterial = new ShaderMaterial({
    name: "SphericalGaussianBlur",
    defines: {
      "n": MAX_SAMPLES,
      "CUBEUV_TEXEL_WIDTH": 1 / width,
      "CUBEUV_TEXEL_HEIGHT": 1 / height,
      "CUBEUV_MAX_MIP": `${lodMax}.0`
    },
    uniforms: {
      "envMap": { value: null },
      "samples": { value: 1 },
      "weights": { value: weights },
      "latitudinal": { value: false },
      "dTheta": { value: 0 },
      "mipInt": { value: 0 },
      "poleAxis": { value: poleAxis }
    },
    vertexShader: _getCommonVertexShader(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,
    blending: NoBlending,
    depthTest: false,
    depthWrite: false
  });
  return shaderMaterial;
}
function _getEquirectMaterial() {
  return new ShaderMaterial({
    name: "EquirectangularToCubeUV",
    uniforms: {
      "envMap": { value: null }
    },
    vertexShader: _getCommonVertexShader(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,
    blending: NoBlending,
    depthTest: false,
    depthWrite: false
  });
}
function _getCubemapMaterial() {
  return new ShaderMaterial({
    name: "CubemapToCubeUV",
    uniforms: {
      "envMap": { value: null },
      "flipEnvMap": { value: -1 }
    },
    vertexShader: _getCommonVertexShader(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,
    blending: NoBlending,
    depthTest: false,
    depthWrite: false
  });
}
function _getCommonVertexShader() {
  return `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`;
}
function WebGLCubeUVMaps(renderer) {
  let cubeUVmaps = /* @__PURE__ */ new WeakMap();
  let pmremGenerator = null;
  function get(texture) {
    if (texture && texture.isTexture) {
      const mapping = texture.mapping;
      const isEquirectMap = mapping === EquirectangularReflectionMapping || mapping === EquirectangularRefractionMapping;
      const isCubeMap = mapping === CubeReflectionMapping || mapping === CubeRefractionMapping;
      if (isEquirectMap || isCubeMap) {
        if (texture.isRenderTargetTexture && texture.needsPMREMUpdate === true) {
          texture.needsPMREMUpdate = false;
          let renderTarget = cubeUVmaps.get(texture);
          if (pmremGenerator === null)
            pmremGenerator = new PMREMGenerator(renderer);
          renderTarget = isEquirectMap ? pmremGenerator.fromEquirectangular(texture, renderTarget) : pmremGenerator.fromCubemap(texture, renderTarget);
          cubeUVmaps.set(texture, renderTarget);
          return renderTarget.texture;
        } else {
          if (cubeUVmaps.has(texture)) {
            return cubeUVmaps.get(texture).texture;
          } else {
            const image = texture.image;
            if (isEquirectMap && image && image.height > 0 || isCubeMap && image && isCubeTextureComplete(image)) {
              if (pmremGenerator === null)
                pmremGenerator = new PMREMGenerator(renderer);
              const renderTarget = isEquirectMap ? pmremGenerator.fromEquirectangular(texture) : pmremGenerator.fromCubemap(texture);
              cubeUVmaps.set(texture, renderTarget);
              texture.addEventListener("dispose", onTextureDispose);
              return renderTarget.texture;
            } else {
              return null;
            }
          }
        }
      }
    }
    return texture;
  }
  function isCubeTextureComplete(image) {
    let count = 0;
    const length = 6;
    for (let i = 0; i < length; i++) {
      if (image[i] !== void 0)
        count++;
    }
    return count === length;
  }
  function onTextureDispose(event) {
    const texture = event.target;
    texture.removeEventListener("dispose", onTextureDispose);
    const cubemapUV = cubeUVmaps.get(texture);
    if (cubemapUV !== void 0) {
      cubeUVmaps.delete(texture);
      cubemapUV.dispose();
    }
  }
  function dispose() {
    cubeUVmaps = /* @__PURE__ */ new WeakMap();
    if (pmremGenerator !== null) {
      pmremGenerator.dispose();
      pmremGenerator = null;
    }
  }
  return {
    get,
    dispose
  };
}
function WebGLExtensions(gl) {
  const extensions = {};
  function getExtension(name) {
    if (extensions[name] !== void 0) {
      return extensions[name];
    }
    let extension;
    switch (name) {
      case "WEBGL_depth_texture":
        extension = gl.getExtension("WEBGL_depth_texture") || gl.getExtension("MOZ_WEBGL_depth_texture") || gl.getExtension("WEBKIT_WEBGL_depth_texture");
        break;
      case "EXT_texture_filter_anisotropic":
        extension = gl.getExtension("EXT_texture_filter_anisotropic") || gl.getExtension("MOZ_EXT_texture_filter_anisotropic") || gl.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
        break;
      case "WEBGL_compressed_texture_s3tc":
        extension = gl.getExtension("WEBGL_compressed_texture_s3tc") || gl.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || gl.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
        break;
      case "WEBGL_compressed_texture_pvrtc":
        extension = gl.getExtension("WEBGL_compressed_texture_pvrtc") || gl.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
        break;
      default:
        extension = gl.getExtension(name);
    }
    extensions[name] = extension;
    return extension;
  }
  return {
    has: function(name) {
      return getExtension(name) !== null;
    },
    init: function(capabilities) {
      if (capabilities.isWebGL2) {
        getExtension("EXT_color_buffer_float");
      } else {
        getExtension("WEBGL_depth_texture");
        getExtension("OES_texture_float");
        getExtension("OES_texture_half_float");
        getExtension("OES_texture_half_float_linear");
        getExtension("OES_standard_derivatives");
        getExtension("OES_element_index_uint");
        getExtension("OES_vertex_array_object");
        getExtension("ANGLE_instanced_arrays");
      }
      getExtension("OES_texture_float_linear");
      getExtension("EXT_color_buffer_half_float");
      getExtension("WEBGL_multisampled_render_to_texture");
    },
    get: function(name) {
      const extension = getExtension(name);
      if (extension === null) {
        console.warn("THREE.WebGLRenderer: " + name + " extension not supported.");
      }
      return extension;
    }
  };
}
function WebGLGeometries(gl, attributes, info, bindingStates) {
  const geometries = {};
  const wireframeAttributes = /* @__PURE__ */ new WeakMap();
  function onGeometryDispose(event) {
    const geometry = event.target;
    if (geometry.index !== null) {
      attributes.remove(geometry.index);
    }
    for (const name in geometry.attributes) {
      attributes.remove(geometry.attributes[name]);
    }
    geometry.removeEventListener("dispose", onGeometryDispose);
    delete geometries[geometry.id];
    const attribute = wireframeAttributes.get(geometry);
    if (attribute) {
      attributes.remove(attribute);
      wireframeAttributes.delete(geometry);
    }
    bindingStates.releaseStatesOfGeometry(geometry);
    if (geometry.isInstancedBufferGeometry === true) {
      delete geometry._maxInstanceCount;
    }
    info.memory.geometries--;
  }
  function get(object, geometry) {
    if (geometries[geometry.id] === true)
      return geometry;
    geometry.addEventListener("dispose", onGeometryDispose);
    geometries[geometry.id] = true;
    info.memory.geometries++;
    return geometry;
  }
  function update(geometry) {
    const geometryAttributes = geometry.attributes;
    for (const name in geometryAttributes) {
      attributes.update(geometryAttributes[name], 34962);
    }
    const morphAttributes = geometry.morphAttributes;
    for (const name in morphAttributes) {
      const array = morphAttributes[name];
      for (let i = 0, l = array.length; i < l; i++) {
        attributes.update(array[i], 34962);
      }
    }
  }
  function updateWireframeAttribute(geometry) {
    const indices = [];
    const geometryIndex = geometry.index;
    const geometryPosition = geometry.attributes.position;
    let version = 0;
    if (geometryIndex !== null) {
      const array = geometryIndex.array;
      version = geometryIndex.version;
      for (let i = 0, l = array.length; i < l; i += 3) {
        const a = array[i + 0];
        const b = array[i + 1];
        const c = array[i + 2];
        indices.push(a, b, b, c, c, a);
      }
    } else {
      const array = geometryPosition.array;
      version = geometryPosition.version;
      for (let i = 0, l = array.length / 3 - 1; i < l; i += 3) {
        const a = i + 0;
        const b = i + 1;
        const c = i + 2;
        indices.push(a, b, b, c, c, a);
      }
    }
    const attribute = new (arrayNeedsUint32(indices) ? Uint32BufferAttribute : Uint16BufferAttribute)(indices, 1);
    attribute.version = version;
    const previousAttribute = wireframeAttributes.get(geometry);
    if (previousAttribute)
      attributes.remove(previousAttribute);
    wireframeAttributes.set(geometry, attribute);
  }
  function getWireframeAttribute(geometry) {
    const currentAttribute = wireframeAttributes.get(geometry);
    if (currentAttribute) {
      const geometryIndex = geometry.index;
      if (geometryIndex !== null) {
        if (currentAttribute.version < geometryIndex.version) {
          updateWireframeAttribute(geometry);
        }
      }
    } else {
      updateWireframeAttribute(geometry);
    }
    return wireframeAttributes.get(geometry);
  }
  return {
    get,
    update,
    getWireframeAttribute
  };
}
function WebGLIndexedBufferRenderer(gl, extensions, info, capabilities) {
  const isWebGL2 = capabilities.isWebGL2;
  let mode;
  function setMode(value) {
    mode = value;
  }
  let type, bytesPerElement;
  function setIndex(value) {
    type = value.type;
    bytesPerElement = value.bytesPerElement;
  }
  function render(start, count) {
    gl.drawElements(mode, count, type, start * bytesPerElement);
    info.update(count, mode, 1);
  }
  function renderInstances(start, count, primcount) {
    if (primcount === 0)
      return;
    let extension, methodName;
    if (isWebGL2) {
      extension = gl;
      methodName = "drawElementsInstanced";
    } else {
      extension = extensions.get("ANGLE_instanced_arrays");
      methodName = "drawElementsInstancedANGLE";
      if (extension === null) {
        console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
        return;
      }
    }
    extension[methodName](mode, count, type, start * bytesPerElement, primcount);
    info.update(count, mode, primcount);
  }
  this.setMode = setMode;
  this.setIndex = setIndex;
  this.render = render;
  this.renderInstances = renderInstances;
}
function WebGLInfo(gl) {
  const memory = {
    geometries: 0,
    textures: 0
  };
  const render = {
    frame: 0,
    calls: 0,
    triangles: 0,
    points: 0,
    lines: 0
  };
  function update(count, mode, instanceCount) {
    render.calls++;
    switch (mode) {
      case 4:
        render.triangles += instanceCount * (count / 3);
        break;
      case 1:
        render.lines += instanceCount * (count / 2);
        break;
      case 3:
        render.lines += instanceCount * (count - 1);
        break;
      case 2:
        render.lines += instanceCount * count;
        break;
      case 0:
        render.points += instanceCount * count;
        break;
      default:
        console.error("THREE.WebGLInfo: Unknown draw mode:", mode);
        break;
    }
  }
  function reset() {
    render.frame++;
    render.calls = 0;
    render.triangles = 0;
    render.points = 0;
    render.lines = 0;
  }
  return {
    memory,
    render,
    programs: null,
    autoReset: true,
    reset,
    update
  };
}
function numericalSort(a, b) {
  return a[0] - b[0];
}
function absNumericalSort(a, b) {
  return Math.abs(b[1]) - Math.abs(a[1]);
}
function denormalize(morph, attribute) {
  let denominator = 1;
  const array = attribute.isInterleavedBufferAttribute ? attribute.data.array : attribute.array;
  if (array instanceof Int8Array)
    denominator = 127;
  else if (array instanceof Int16Array)
    denominator = 32767;
  else if (array instanceof Int32Array)
    denominator = 2147483647;
  else
    console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ", array);
  morph.divideScalar(denominator);
}
function WebGLMorphtargets(gl, capabilities, textures) {
  const influencesList = {};
  const morphInfluences = new Float32Array(8);
  const morphTextures = /* @__PURE__ */ new WeakMap();
  const morph = new Vector4();
  const workInfluences = [];
  for (let i = 0; i < 8; i++) {
    workInfluences[i] = [i, 0];
  }
  function update(object, geometry, material, program) {
    const objectInfluences = object.morphTargetInfluences;
    if (capabilities.isWebGL2 === true) {
      const morphAttribute = geometry.morphAttributes.position || geometry.morphAttributes.normal || geometry.morphAttributes.color;
      const morphTargetsCount = morphAttribute !== void 0 ? morphAttribute.length : 0;
      let entry = morphTextures.get(geometry);
      if (entry === void 0 || entry.count !== morphTargetsCount) {
        let disposeTexture = function() {
          texture.dispose();
          morphTextures.delete(geometry);
          geometry.removeEventListener("dispose", disposeTexture);
        };
        if (entry !== void 0)
          entry.texture.dispose();
        const hasMorphPosition = geometry.morphAttributes.position !== void 0;
        const hasMorphNormals = geometry.morphAttributes.normal !== void 0;
        const hasMorphColors = geometry.morphAttributes.color !== void 0;
        const morphTargets = geometry.morphAttributes.position || [];
        const morphNormals = geometry.morphAttributes.normal || [];
        const morphColors = geometry.morphAttributes.color || [];
        let vertexDataCount = 0;
        if (hasMorphPosition === true)
          vertexDataCount = 1;
        if (hasMorphNormals === true)
          vertexDataCount = 2;
        if (hasMorphColors === true)
          vertexDataCount = 3;
        let width = geometry.attributes.position.count * vertexDataCount;
        let height = 1;
        if (width > capabilities.maxTextureSize) {
          height = Math.ceil(width / capabilities.maxTextureSize);
          width = capabilities.maxTextureSize;
        }
        const buffer = new Float32Array(width * height * 4 * morphTargetsCount);
        const texture = new DataArrayTexture(buffer, width, height, morphTargetsCount);
        texture.type = FloatType;
        texture.needsUpdate = true;
        const vertexDataStride = vertexDataCount * 4;
        for (let i = 0; i < morphTargetsCount; i++) {
          const morphTarget = morphTargets[i];
          const morphNormal = morphNormals[i];
          const morphColor = morphColors[i];
          const offset = width * height * 4 * i;
          for (let j = 0; j < morphTarget.count; j++) {
            const stride = j * vertexDataStride;
            if (hasMorphPosition === true) {
              morph.fromBufferAttribute(morphTarget, j);
              if (morphTarget.normalized === true)
                denormalize(morph, morphTarget);
              buffer[offset + stride + 0] = morph.x;
              buffer[offset + stride + 1] = morph.y;
              buffer[offset + stride + 2] = morph.z;
              buffer[offset + stride + 3] = 0;
            }
            if (hasMorphNormals === true) {
              morph.fromBufferAttribute(morphNormal, j);
              if (morphNormal.normalized === true)
                denormalize(morph, morphNormal);
              buffer[offset + stride + 4] = morph.x;
              buffer[offset + stride + 5] = morph.y;
              buffer[offset + stride + 6] = morph.z;
              buffer[offset + stride + 7] = 0;
            }
            if (hasMorphColors === true) {
              morph.fromBufferAttribute(morphColor, j);
              if (morphColor.normalized === true)
                denormalize(morph, morphColor);
              buffer[offset + stride + 8] = morph.x;
              buffer[offset + stride + 9] = morph.y;
              buffer[offset + stride + 10] = morph.z;
              buffer[offset + stride + 11] = morphColor.itemSize === 4 ? morph.w : 1;
            }
          }
        }
        entry = {
          count: morphTargetsCount,
          texture,
          size: new Vector2(width, height)
        };
        morphTextures.set(geometry, entry);
        geometry.addEventListener("dispose", disposeTexture);
      }
      let morphInfluencesSum = 0;
      for (let i = 0; i < objectInfluences.length; i++) {
        morphInfluencesSum += objectInfluences[i];
      }
      const morphBaseInfluence = geometry.morphTargetsRelative ? 1 : 1 - morphInfluencesSum;
      program.getUniforms().setValue(gl, "morphTargetBaseInfluence", morphBaseInfluence);
      program.getUniforms().setValue(gl, "morphTargetInfluences", objectInfluences);
      program.getUniforms().setValue(gl, "morphTargetsTexture", entry.texture, textures);
      program.getUniforms().setValue(gl, "morphTargetsTextureSize", entry.size);
    } else {
      const length = objectInfluences === void 0 ? 0 : objectInfluences.length;
      let influences = influencesList[geometry.id];
      if (influences === void 0 || influences.length !== length) {
        influences = [];
        for (let i = 0; i < length; i++) {
          influences[i] = [i, 0];
        }
        influencesList[geometry.id] = influences;
      }
      for (let i = 0; i < length; i++) {
        const influence = influences[i];
        influence[0] = i;
        influence[1] = objectInfluences[i];
      }
      influences.sort(absNumericalSort);
      for (let i = 0; i < 8; i++) {
        if (i < length && influences[i][1]) {
          workInfluences[i][0] = influences[i][0];
          workInfluences[i][1] = influences[i][1];
        } else {
          workInfluences[i][0] = Number.MAX_SAFE_INTEGER;
          workInfluences[i][1] = 0;
        }
      }
      workInfluences.sort(numericalSort);
      const morphTargets = geometry.morphAttributes.position;
      const morphNormals = geometry.morphAttributes.normal;
      let morphInfluencesSum = 0;
      for (let i = 0; i < 8; i++) {
        const influence = workInfluences[i];
        const index = influence[0];
        const value = influence[1];
        if (index !== Number.MAX_SAFE_INTEGER && value) {
          if (morphTargets && geometry.getAttribute("morphTarget" + i) !== morphTargets[index]) {
            geometry.setAttribute("morphTarget" + i, morphTargets[index]);
          }
          if (morphNormals && geometry.getAttribute("morphNormal" + i) !== morphNormals[index]) {
            geometry.setAttribute("morphNormal" + i, morphNormals[index]);
          }
          morphInfluences[i] = value;
          morphInfluencesSum += value;
        } else {
          if (morphTargets && geometry.hasAttribute("morphTarget" + i) === true) {
            geometry.deleteAttribute("morphTarget" + i);
          }
          if (morphNormals && geometry.hasAttribute("morphNormal" + i) === true) {
            geometry.deleteAttribute("morphNormal" + i);
          }
          morphInfluences[i] = 0;
        }
      }
      const morphBaseInfluence = geometry.morphTargetsRelative ? 1 : 1 - morphInfluencesSum;
      program.getUniforms().setValue(gl, "morphTargetBaseInfluence", morphBaseInfluence);
      program.getUniforms().setValue(gl, "morphTargetInfluences", morphInfluences);
    }
  }
  return {
    update
  };
}
function WebGLObjects(gl, geometries, attributes, info) {
  let updateMap = /* @__PURE__ */ new WeakMap();
  function update(object) {
    const frame = info.render.frame;
    const geometry = object.geometry;
    const buffergeometry = geometries.get(object, geometry);
    if (updateMap.get(buffergeometry) !== frame) {
      geometries.update(buffergeometry);
      updateMap.set(buffergeometry, frame);
    }
    if (object.isInstancedMesh) {
      if (object.hasEventListener("dispose", onInstancedMeshDispose) === false) {
        object.addEventListener("dispose", onInstancedMeshDispose);
      }
      attributes.update(object.instanceMatrix, 34962);
      if (object.instanceColor !== null) {
        attributes.update(object.instanceColor, 34962);
      }
    }
    return buffergeometry;
  }
  function dispose() {
    updateMap = /* @__PURE__ */ new WeakMap();
  }
  function onInstancedMeshDispose(event) {
    const instancedMesh = event.target;
    instancedMesh.removeEventListener("dispose", onInstancedMeshDispose);
    attributes.remove(instancedMesh.instanceMatrix);
    if (instancedMesh.instanceColor !== null)
      attributes.remove(instancedMesh.instanceColor);
  }
  return {
    update,
    dispose
  };
}
var emptyTexture = new Texture();
var emptyArrayTexture = new DataArrayTexture();
var empty3dTexture = new Data3DTexture();
var emptyCubeTexture = new CubeTexture();
var arrayCacheF32 = [];
var arrayCacheI32 = [];
var mat4array = new Float32Array(16);
var mat3array = new Float32Array(9);
var mat2array = new Float32Array(4);
function flatten(array, nBlocks, blockSize) {
  const firstElem = array[0];
  if (firstElem <= 0 || firstElem > 0)
    return array;
  const n = nBlocks * blockSize;
  let r = arrayCacheF32[n];
  if (r === void 0) {
    r = new Float32Array(n);
    arrayCacheF32[n] = r;
  }
  if (nBlocks !== 0) {
    firstElem.toArray(r, 0);
    for (let i = 1, offset = 0; i !== nBlocks; ++i) {
      offset += blockSize;
      array[i].toArray(r, offset);
    }
  }
  return r;
}
function arraysEqual(a, b) {
  if (a.length !== b.length)
    return false;
  for (let i = 0, l = a.length; i < l; i++) {
    if (a[i] !== b[i])
      return false;
  }
  return true;
}
function copyArray(a, b) {
  for (let i = 0, l = b.length; i < l; i++) {
    a[i] = b[i];
  }
}
function allocTexUnits(textures, n) {
  let r = arrayCacheI32[n];
  if (r === void 0) {
    r = new Int32Array(n);
    arrayCacheI32[n] = r;
  }
  for (let i = 0; i !== n; ++i) {
    r[i] = textures.allocateTextureUnit();
  }
  return r;
}
function setValueV1f(gl, v) {
  const cache = this.cache;
  if (cache[0] === v)
    return;
  gl.uniform1f(this.addr, v);
  cache[0] = v;
}
function setValueV2f(gl, v) {
  const cache = this.cache;
  if (v.x !== void 0) {
    if (cache[0] !== v.x || cache[1] !== v.y) {
      gl.uniform2f(this.addr, v.x, v.y);
      cache[0] = v.x;
      cache[1] = v.y;
    }
  } else {
    if (arraysEqual(cache, v))
      return;
    gl.uniform2fv(this.addr, v);
    copyArray(cache, v);
  }
}
function setValueV3f(gl, v) {
  const cache = this.cache;
  if (v.x !== void 0) {
    if (cache[0] !== v.x || cache[1] !== v.y || cache[2] !== v.z) {
      gl.uniform3f(this.addr, v.x, v.y, v.z);
      cache[0] = v.x;
      cache[1] = v.y;
      cache[2] = v.z;
    }
  } else if (v.r !== void 0) {
    if (cache[0] !== v.r || cache[1] !== v.g || cache[2] !== v.b) {
      gl.uniform3f(this.addr, v.r, v.g, v.b);
      cache[0] = v.r;
      cache[1] = v.g;
      cache[2] = v.b;
    }
  } else {
    if (arraysEqual(cache, v))
      return;
    gl.uniform3fv(this.addr, v);
    copyArray(cache, v);
  }
}
function setValueV4f(gl, v) {
  const cache = this.cache;
  if (v.x !== void 0) {
    if (cache[0] !== v.x || cache[1] !== v.y || cache[2] !== v.z || cache[3] !== v.w) {
      gl.uniform4f(this.addr, v.x, v.y, v.z, v.w);
      cache[0] = v.x;
      cache[1] = v.y;
      cache[2] = v.z;
      cache[3] = v.w;
    }
  } else {
    if (arraysEqual(cache, v))
      return;
    gl.uniform4fv(this.addr, v);
    copyArray(cache, v);
  }
}
function setValueM2(gl, v) {
  const cache = this.cache;
  const elements = v.elements;
  if (elements === void 0) {
    if (arraysEqual(cache, v))
      return;
    gl.uniformMatrix2fv(this.addr, false, v);
    copyArray(cache, v);
  } else {
    if (arraysEqual(cache, elements))
      return;
    mat2array.set(elements);
    gl.uniformMatrix2fv(this.addr, false, mat2array);
    copyArray(cache, elements);
  }
}
function setValueM3(gl, v) {
  const cache = this.cache;
  const elements = v.elements;
  if (elements === void 0) {
    if (arraysEqual(cache, v))
      return;
    gl.uniformMatrix3fv(this.addr, false, v);
    copyArray(cache, v);
  } else {
    if (arraysEqual(cache, elements))
      return;
    mat3array.set(elements);
    gl.uniformMatrix3fv(this.addr, false, mat3array);
    copyArray(cache, elements);
  }
}
function setValueM4(gl, v) {
  const cache = this.cache;
  const elements = v.elements;
  if (elements === void 0) {
    if (arraysEqual(cache, v))
      return;
    gl.uniformMatrix4fv(this.addr, false, v);
    copyArray(cache, v);
  } else {
    if (arraysEqual(cache, elements))
      return;
    mat4array.set(elements);
    gl.uniformMatrix4fv(this.addr, false, mat4array);
    copyArray(cache, elements);
  }
}
function setValueV1i(gl, v) {
  const cache = this.cache;
  if (cache[0] === v)
    return;
  gl.uniform1i(this.addr, v);
  cache[0] = v;
}
function setValueV2i(gl, v) {
  const cache = this.cache;
  if (arraysEqual(cache, v))
    return;
  gl.uniform2iv(this.addr, v);
  copyArray(cache, v);
}
function setValueV3i(gl, v) {
  const cache = this.cache;
  if (arraysEqual(cache, v))
    return;
  gl.uniform3iv(this.addr, v);
  copyArray(cache, v);
}
function setValueV4i(gl, v) {
  const cache = this.cache;
  if (arraysEqual(cache, v))
    return;
  gl.uniform4iv(this.addr, v);
  copyArray(cache, v);
}
function setValueV1ui(gl, v) {
  const cache = this.cache;
  if (cache[0] === v)
    return;
  gl.uniform1ui(this.addr, v);
  cache[0] = v;
}
function setValueV2ui(gl, v) {
  const cache = this.cache;
  if (arraysEqual(cache, v))
    return;
  gl.uniform2uiv(this.addr, v);
  copyArray(cache, v);
}
function setValueV3ui(gl, v) {
  const cache = this.cache;
  if (arraysEqual(cache, v))
    return;
  gl.uniform3uiv(this.addr, v);
  copyArray(cache, v);
}
function setValueV4ui(gl, v) {
  const cache = this.cache;
  if (arraysEqual(cache, v))
    return;
  gl.uniform4uiv(this.addr, v);
  copyArray(cache, v);
}
function setValueT1(gl, v, textures) {
  const cache = this.cache;
  const unit = textures.allocateTextureUnit();
  if (cache[0] !== unit) {
    gl.uniform1i(this.addr, unit);
    cache[0] = unit;
  }
  textures.setTexture2D(v || emptyTexture, unit);
}
function setValueT3D1(gl, v, textures) {
  const cache = this.cache;
  const unit = textures.allocateTextureUnit();
  if (cache[0] !== unit) {
    gl.uniform1i(this.addr, unit);
    cache[0] = unit;
  }
  textures.setTexture3D(v || empty3dTexture, unit);
}
function setValueT6(gl, v, textures) {
  const cache = this.cache;
  const unit = textures.allocateTextureUnit();
  if (cache[0] !== unit) {
    gl.uniform1i(this.addr, unit);
    cache[0] = unit;
  }
  textures.setTextureCube(v || emptyCubeTexture, unit);
}
function setValueT2DArray1(gl, v, textures) {
  const cache = this.cache;
  const unit = textures.allocateTextureUnit();
  if (cache[0] !== unit) {
    gl.uniform1i(this.addr, unit);
    cache[0] = unit;
  }
  textures.setTexture2DArray(v || emptyArrayTexture, unit);
}
function getSingularSetter(type) {
  switch (type) {
    case 5126:
      return setValueV1f;
    case 35664:
      return setValueV2f;
    case 35665:
      return setValueV3f;
    case 35666:
      return setValueV4f;
    case 35674:
      return setValueM2;
    case 35675:
      return setValueM3;
    case 35676:
      return setValueM4;
    case 5124:
    case 35670:
      return setValueV1i;
    case 35667:
    case 35671:
      return setValueV2i;
    case 35668:
    case 35672:
      return setValueV3i;
    case 35669:
    case 35673:
      return setValueV4i;
    case 5125:
      return setValueV1ui;
    case 36294:
      return setValueV2ui;
    case 36295:
      return setValueV3ui;
    case 36296:
      return setValueV4ui;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return setValueT1;
    case 35679:
    case 36299:
    case 36307:
      return setValueT3D1;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return setValueT6;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return setValueT2DArray1;
  }
}
function setValueV1fArray(gl, v) {
  gl.uniform1fv(this.addr, v);
}
function setValueV2fArray(gl, v) {
  const data = flatten(v, this.size, 2);
  gl.uniform2fv(this.addr, data);
}
function setValueV3fArray(gl, v) {
  const data = flatten(v, this.size, 3);
  gl.uniform3fv(this.addr, data);
}
function setValueV4fArray(gl, v) {
  const data = flatten(v, this.size, 4);
  gl.uniform4fv(this.addr, data);
}
function setValueM2Array(gl, v) {
  const data = flatten(v, this.size, 4);
  gl.uniformMatrix2fv(this.addr, false, data);
}
function setValueM3Array(gl, v) {
  const data = flatten(v, this.size, 9);
  gl.uniformMatrix3fv(this.addr, false, data);
}
function setValueM4Array(gl, v) {
  const data = flatten(v, this.size, 16);
  gl.uniformMatrix4fv(this.addr, false, data);
}
function setValueV1iArray(gl, v) {
  gl.uniform1iv(this.addr, v);
}
function setValueV2iArray(gl, v) {
  gl.uniform2iv(this.addr, v);
}
function setValueV3iArray(gl, v) {
  gl.uniform3iv(this.addr, v);
}
function setValueV4iArray(gl, v) {
  gl.uniform4iv(this.addr, v);
}
function setValueV1uiArray(gl, v) {
  gl.uniform1uiv(this.addr, v);
}
function setValueV2uiArray(gl, v) {
  gl.uniform2uiv(this.addr, v);
}
function setValueV3uiArray(gl, v) {
  gl.uniform3uiv(this.addr, v);
}
function setValueV4uiArray(gl, v) {
  gl.uniform4uiv(this.addr, v);
}
function setValueT1Array(gl, v, textures) {
  const n = v.length;
  const units = allocTexUnits(textures, n);
  gl.uniform1iv(this.addr, units);
  for (let i = 0; i !== n; ++i) {
    textures.setTexture2D(v[i] || emptyTexture, units[i]);
  }
}
function setValueT3DArray(gl, v, textures) {
  const n = v.length;
  const units = allocTexUnits(textures, n);
  gl.uniform1iv(this.addr, units);
  for (let i = 0; i !== n; ++i) {
    textures.setTexture3D(v[i] || empty3dTexture, units[i]);
  }
}
function setValueT6Array(gl, v, textures) {
  const n = v.length;
  const units = allocTexUnits(textures, n);
  gl.uniform1iv(this.addr, units);
  for (let i = 0; i !== n; ++i) {
    textures.setTextureCube(v[i] || emptyCubeTexture, units[i]);
  }
}
function setValueT2DArrayArray(gl, v, textures) {
  const n = v.length;
  const units = allocTexUnits(textures, n);
  gl.uniform1iv(this.addr, units);
  for (let i = 0; i !== n; ++i) {
    textures.setTexture2DArray(v[i] || emptyArrayTexture, units[i]);
  }
}
function getPureArraySetter(type) {
  switch (type) {
    case 5126:
      return setValueV1fArray;
    case 35664:
      return setValueV2fArray;
    case 35665:
      return setValueV3fArray;
    case 35666:
      return setValueV4fArray;
    case 35674:
      return setValueM2Array;
    case 35675:
      return setValueM3Array;
    case 35676:
      return setValueM4Array;
    case 5124:
    case 35670:
      return setValueV1iArray;
    case 35667:
    case 35671:
      return setValueV2iArray;
    case 35668:
    case 35672:
      return setValueV3iArray;
    case 35669:
    case 35673:
      return setValueV4iArray;
    case 5125:
      return setValueV1uiArray;
    case 36294:
      return setValueV2uiArray;
    case 36295:
      return setValueV3uiArray;
    case 36296:
      return setValueV4uiArray;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return setValueT1Array;
    case 35679:
    case 36299:
    case 36307:
      return setValueT3DArray;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return setValueT6Array;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return setValueT2DArrayArray;
  }
}
function SingleUniform(id, activeInfo, addr) {
  this.id = id;
  this.addr = addr;
  this.cache = [];
  this.setValue = getSingularSetter(activeInfo.type);
}
function PureArrayUniform(id, activeInfo, addr) {
  this.id = id;
  this.addr = addr;
  this.cache = [];
  this.size = activeInfo.size;
  this.setValue = getPureArraySetter(activeInfo.type);
}
PureArrayUniform.prototype.updateCache = function(data) {
  const cache = this.cache;
  if (data instanceof Float32Array && cache.length !== data.length) {
    this.cache = new Float32Array(data.length);
  }
  copyArray(cache, data);
};
function StructuredUniform(id) {
  this.id = id;
  this.seq = [];
  this.map = {};
}
StructuredUniform.prototype.setValue = function(gl, value, textures) {
  const seq = this.seq;
  for (let i = 0, n = seq.length; i !== n; ++i) {
    const u = seq[i];
    u.setValue(gl, value[u.id], textures);
  }
};
var RePathPart = /(\w+)(\])?(\[|\.)?/g;
function addUniform(container, uniformObject) {
  container.seq.push(uniformObject);
  container.map[uniformObject.id] = uniformObject;
}
function parseUniform(activeInfo, addr, container) {
  const path = activeInfo.name, pathLength = path.length;
  RePathPart.lastIndex = 0;
  while (true) {
    const match = RePathPart.exec(path), matchEnd = RePathPart.lastIndex;
    let id = match[1];
    const idIsIndex = match[2] === "]", subscript = match[3];
    if (idIsIndex)
      id = id | 0;
    if (subscript === void 0 || subscript === "[" && matchEnd + 2 === pathLength) {
      addUniform(container, subscript === void 0 ? new SingleUniform(id, activeInfo, addr) : new PureArrayUniform(id, activeInfo, addr));
      break;
    } else {
      const map = container.map;
      let next = map[id];
      if (next === void 0) {
        next = new StructuredUniform(id);
        addUniform(container, next);
      }
      container = next;
    }
  }
}
function WebGLUniforms(gl, program) {
  this.seq = [];
  this.map = {};
  const n = gl.getProgramParameter(program, 35718);
  for (let i = 0; i < n; ++i) {
    const info = gl.getActiveUniform(program, i), addr = gl.getUniformLocation(program, info.name);
    parseUniform(info, addr, this);
  }
}
WebGLUniforms.prototype.setValue = function(gl, name, value, textures) {
  const u = this.map[name];
  if (u !== void 0)
    u.setValue(gl, value, textures);
};
WebGLUniforms.prototype.setOptional = function(gl, object, name) {
  const v = object[name];
  if (v !== void 0)
    this.setValue(gl, name, v);
};
WebGLUniforms.upload = function(gl, seq, values, textures) {
  for (let i = 0, n = seq.length; i !== n; ++i) {
    const u = seq[i], v = values[u.id];
    if (v.needsUpdate !== false) {
      u.setValue(gl, v.value, textures);
    }
  }
};
WebGLUniforms.seqWithValue = function(seq, values) {
  const r = [];
  for (let i = 0, n = seq.length; i !== n; ++i) {
    const u = seq[i];
    if (u.id in values)
      r.push(u);
  }
  return r;
};
function WebGLShader(gl, type, string) {
  const shader = gl.createShader(type);
  gl.shaderSource(shader, string);
  gl.compileShader(shader);
  return shader;
}
var programIdCount = 0;
function handleSource(string, errorLine) {
  const lines = string.split("\n");
  const lines2 = [];
  const from = Math.max(errorLine - 6, 0);
  const to = Math.min(errorLine + 6, lines.length);
  for (let i = from; i < to; i++) {
    lines2.push(i + 1 + ": " + lines[i]);
  }
  return lines2.join("\n");
}
function getEncodingComponents(encoding) {
  switch (encoding) {
    case LinearEncoding:
      return ["Linear", "( value )"];
    case sRGBEncoding:
      return ["sRGB", "( value )"];
    default:
      console.warn("THREE.WebGLProgram: Unsupported encoding:", encoding);
      return ["Linear", "( value )"];
  }
}
function getShaderErrors(gl, shader, type) {
  const status = gl.getShaderParameter(shader, 35713);
  const errors = gl.getShaderInfoLog(shader).trim();
  if (status && errors === "")
    return "";
  const errorLine = parseInt(/ERROR: 0:(\d+)/.exec(errors)[1]);
  return type.toUpperCase() + "\n\n" + errors + "\n\n" + handleSource(gl.getShaderSource(shader), errorLine);
}
function getTexelEncodingFunction(functionName, encoding) {
  const components = getEncodingComponents(encoding);
  return "vec4 " + functionName + "( vec4 value ) { return LinearTo" + components[0] + components[1] + "; }";
}
function getToneMappingFunction(functionName, toneMapping) {
  let toneMappingName;
  switch (toneMapping) {
    case LinearToneMapping:
      toneMappingName = "Linear";
      break;
    case ReinhardToneMapping:
      toneMappingName = "Reinhard";
      break;
    case CineonToneMapping:
      toneMappingName = "OptimizedCineon";
      break;
    case ACESFilmicToneMapping:
      toneMappingName = "ACESFilmic";
      break;
    case CustomToneMapping:
      toneMappingName = "Custom";
      break;
    default:
      console.warn("THREE.WebGLProgram: Unsupported toneMapping:", toneMapping);
      toneMappingName = "Linear";
  }
  return "vec3 " + functionName + "( vec3 color ) { return " + toneMappingName + "ToneMapping( color ); }";
}
function generateExtensions(parameters) {
  const chunks = [
    parameters.extensionDerivatives || !!parameters.envMapCubeUVHeight || parameters.bumpMap || parameters.tangentSpaceNormalMap || parameters.clearcoatNormalMap || parameters.flatShading || parameters.shaderID === "physical" ? "#extension GL_OES_standard_derivatives : enable" : "",
    (parameters.extensionFragDepth || parameters.logarithmicDepthBuffer) && parameters.rendererExtensionFragDepth ? "#extension GL_EXT_frag_depth : enable" : "",
    parameters.extensionDrawBuffers && parameters.rendererExtensionDrawBuffers ? "#extension GL_EXT_draw_buffers : require" : "",
    (parameters.extensionShaderTextureLOD || parameters.envMap || parameters.transmission) && parameters.rendererExtensionShaderTextureLod ? "#extension GL_EXT_shader_texture_lod : enable" : ""
  ];
  return chunks.filter(filterEmptyLine).join("\n");
}
function generateDefines(defines) {
  const chunks = [];
  for (const name in defines) {
    const value = defines[name];
    if (value === false)
      continue;
    chunks.push("#define " + name + " " + value);
  }
  return chunks.join("\n");
}
function fetchAttributeLocations(gl, program) {
  const attributes = {};
  const n = gl.getProgramParameter(program, 35721);
  for (let i = 0; i < n; i++) {
    const info = gl.getActiveAttrib(program, i);
    const name = info.name;
    let locationSize = 1;
    if (info.type === 35674)
      locationSize = 2;
    if (info.type === 35675)
      locationSize = 3;
    if (info.type === 35676)
      locationSize = 4;
    attributes[name] = {
      type: info.type,
      location: gl.getAttribLocation(program, name),
      locationSize
    };
  }
  return attributes;
}
function filterEmptyLine(string) {
  return string !== "";
}
function replaceLightNums(string, parameters) {
  return string.replace(/NUM_DIR_LIGHTS/g, parameters.numDirLights).replace(/NUM_SPOT_LIGHTS/g, parameters.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g, parameters.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, parameters.numPointLights).replace(/NUM_HEMI_LIGHTS/g, parameters.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, parameters.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g, parameters.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, parameters.numPointLightShadows);
}
function replaceClippingPlaneNums(string, parameters) {
  return string.replace(/NUM_CLIPPING_PLANES/g, parameters.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, parameters.numClippingPlanes - parameters.numClipIntersection);
}
var includePattern = /^[ \t]*#include +<([\w\d./]+)>/gm;
function resolveIncludes(string) {
  return string.replace(includePattern, includeReplacer);
}
function includeReplacer(match, include) {
  const string = ShaderChunk[include];
  if (string === void 0) {
    throw new Error("Can not resolve #include <" + include + ">");
  }
  return resolveIncludes(string);
}
var deprecatedUnrollLoopPattern = /#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g;
var unrollLoopPattern = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function unrollLoops(string) {
  return string.replace(unrollLoopPattern, loopReplacer).replace(deprecatedUnrollLoopPattern, deprecatedLoopReplacer);
}
function deprecatedLoopReplacer(match, start, end, snippet) {
  console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead.");
  return loopReplacer(match, start, end, snippet);
}
function loopReplacer(match, start, end, snippet) {
  let string = "";
  for (let i = parseInt(start); i < parseInt(end); i++) {
    string += snippet.replace(/\[\s*i\s*\]/g, "[ " + i + " ]").replace(/UNROLLED_LOOP_INDEX/g, i);
  }
  return string;
}
function generatePrecision(parameters) {
  let precisionstring = "precision " + parameters.precision + " float;\nprecision " + parameters.precision + " int;";
  if (parameters.precision === "highp") {
    precisionstring += "\n#define HIGH_PRECISION";
  } else if (parameters.precision === "mediump") {
    precisionstring += "\n#define MEDIUM_PRECISION";
  } else if (parameters.precision === "lowp") {
    precisionstring += "\n#define LOW_PRECISION";
  }
  return precisionstring;
}
function generateShadowMapTypeDefine(parameters) {
  let shadowMapTypeDefine = "SHADOWMAP_TYPE_BASIC";
  if (parameters.shadowMapType === PCFShadowMap) {
    shadowMapTypeDefine = "SHADOWMAP_TYPE_PCF";
  } else if (parameters.shadowMapType === PCFSoftShadowMap) {
    shadowMapTypeDefine = "SHADOWMAP_TYPE_PCF_SOFT";
  } else if (parameters.shadowMapType === VSMShadowMap) {
    shadowMapTypeDefine = "SHADOWMAP_TYPE_VSM";
  }
  return shadowMapTypeDefine;
}
function generateEnvMapTypeDefine(parameters) {
  let envMapTypeDefine = "ENVMAP_TYPE_CUBE";
  if (parameters.envMap) {
    switch (parameters.envMapMode) {
      case CubeReflectionMapping:
      case CubeRefractionMapping:
        envMapTypeDefine = "ENVMAP_TYPE_CUBE";
        break;
      case CubeUVReflectionMapping:
        envMapTypeDefine = "ENVMAP_TYPE_CUBE_UV";
        break;
    }
  }
  return envMapTypeDefine;
}
function generateEnvMapModeDefine(parameters) {
  let envMapModeDefine = "ENVMAP_MODE_REFLECTION";
  if (parameters.envMap) {
    switch (parameters.envMapMode) {
      case CubeRefractionMapping:
        envMapModeDefine = "ENVMAP_MODE_REFRACTION";
        break;
    }
  }
  return envMapModeDefine;
}
function generateEnvMapBlendingDefine(parameters) {
  let envMapBlendingDefine = "ENVMAP_BLENDING_NONE";
  if (parameters.envMap) {
    switch (parameters.combine) {
      case MultiplyOperation:
        envMapBlendingDefine = "ENVMAP_BLENDING_MULTIPLY";
        break;
      case MixOperation:
        envMapBlendingDefine = "ENVMAP_BLENDING_MIX";
        break;
      case AddOperation:
        envMapBlendingDefine = "ENVMAP_BLENDING_ADD";
        break;
    }
  }
  return envMapBlendingDefine;
}
function generateCubeUVSize(parameters) {
  const imageHeight = parameters.envMapCubeUVHeight;
  if (imageHeight === null)
    return null;
  const maxMip = Math.log2(imageHeight / 32 + 1) + 3;
  const texelHeight = 1 / imageHeight;
  const texelWidth = 1 / (3 * Math.max(Math.pow(2, maxMip), 7 * 16));
  return { texelWidth, texelHeight, maxMip };
}
function WebGLProgram(renderer, cacheKey, parameters, bindingStates) {
  const gl = renderer.getContext();
  const defines = parameters.defines;
  let vertexShader = parameters.vertexShader;
  let fragmentShader = parameters.fragmentShader;
  const shadowMapTypeDefine = generateShadowMapTypeDefine(parameters);
  const envMapTypeDefine = generateEnvMapTypeDefine(parameters);
  const envMapModeDefine = generateEnvMapModeDefine(parameters);
  const envMapBlendingDefine = generateEnvMapBlendingDefine(parameters);
  const envMapCubeUVSize = generateCubeUVSize(parameters);
  const customExtensions = parameters.isWebGL2 ? "" : generateExtensions(parameters);
  const customDefines = generateDefines(defines);
  const program = gl.createProgram();
  let prefixVertex, prefixFragment;
  let versionString = parameters.glslVersion ? "#version " + parameters.glslVersion + "\n" : "";
  if (parameters.isRawShaderMaterial) {
    prefixVertex = [
      customDefines
    ].filter(filterEmptyLine).join("\n");
    if (prefixVertex.length > 0) {
      prefixVertex += "\n";
    }
    prefixFragment = [
      customExtensions,
      customDefines
    ].filter(filterEmptyLine).join("\n");
    if (prefixFragment.length > 0) {
      prefixFragment += "\n";
    }
  } else {
    prefixVertex = [
      generatePrecision(parameters),
      "#define SHADER_NAME " + parameters.shaderName,
      customDefines,
      parameters.instancing ? "#define USE_INSTANCING" : "",
      parameters.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
      parameters.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "",
      "#define MAX_BONES " + parameters.maxBones,
      parameters.useFog && parameters.fog ? "#define USE_FOG" : "",
      parameters.useFog && parameters.fogExp2 ? "#define FOG_EXP2" : "",
      parameters.map ? "#define USE_MAP" : "",
      parameters.envMap ? "#define USE_ENVMAP" : "",
      parameters.envMap ? "#define " + envMapModeDefine : "",
      parameters.lightMap ? "#define USE_LIGHTMAP" : "",
      parameters.aoMap ? "#define USE_AOMAP" : "",
      parameters.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
      parameters.bumpMap ? "#define USE_BUMPMAP" : "",
      parameters.normalMap ? "#define USE_NORMALMAP" : "",
      parameters.normalMap && parameters.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "",
      parameters.normalMap && parameters.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "",
      parameters.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
      parameters.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
      parameters.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
      parameters.displacementMap && parameters.supportsVertexTextures ? "#define USE_DISPLACEMENTMAP" : "",
      parameters.specularMap ? "#define USE_SPECULARMAP" : "",
      parameters.specularIntensityMap ? "#define USE_SPECULARINTENSITYMAP" : "",
      parameters.specularColorMap ? "#define USE_SPECULARCOLORMAP" : "",
      parameters.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
      parameters.metalnessMap ? "#define USE_METALNESSMAP" : "",
      parameters.alphaMap ? "#define USE_ALPHAMAP" : "",
      parameters.transmission ? "#define USE_TRANSMISSION" : "",
      parameters.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
      parameters.thicknessMap ? "#define USE_THICKNESSMAP" : "",
      parameters.sheenColorMap ? "#define USE_SHEENCOLORMAP" : "",
      parameters.sheenRoughnessMap ? "#define USE_SHEENROUGHNESSMAP" : "",
      parameters.vertexTangents ? "#define USE_TANGENT" : "",
      parameters.vertexColors ? "#define USE_COLOR" : "",
      parameters.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
      parameters.vertexUvs ? "#define USE_UV" : "",
      parameters.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "",
      parameters.flatShading ? "#define FLAT_SHADED" : "",
      parameters.skinning ? "#define USE_SKINNING" : "",
      parameters.useVertexTexture ? "#define BONE_TEXTURE" : "",
      parameters.morphTargets ? "#define USE_MORPHTARGETS" : "",
      parameters.morphNormals && parameters.flatShading === false ? "#define USE_MORPHNORMALS" : "",
      parameters.morphColors && parameters.isWebGL2 ? "#define USE_MORPHCOLORS" : "",
      parameters.morphTargetsCount > 0 && parameters.isWebGL2 ? "#define MORPHTARGETS_TEXTURE" : "",
      parameters.morphTargetsCount > 0 && parameters.isWebGL2 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + parameters.morphTextureStride : "",
      parameters.morphTargetsCount > 0 && parameters.isWebGL2 ? "#define MORPHTARGETS_COUNT " + parameters.morphTargetsCount : "",
      parameters.doubleSided ? "#define DOUBLE_SIDED" : "",
      parameters.flipSided ? "#define FLIP_SIDED" : "",
      parameters.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
      parameters.shadowMapEnabled ? "#define " + shadowMapTypeDefine : "",
      parameters.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
      parameters.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
      parameters.logarithmicDepthBuffer && parameters.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "",
      "uniform mat4 modelMatrix;",
      "uniform mat4 modelViewMatrix;",
      "uniform mat4 projectionMatrix;",
      "uniform mat4 viewMatrix;",
      "uniform mat3 normalMatrix;",
      "uniform vec3 cameraPosition;",
      "uniform bool isOrthographic;",
      "#ifdef USE_INSTANCING",
      "	attribute mat4 instanceMatrix;",
      "#endif",
      "#ifdef USE_INSTANCING_COLOR",
      "	attribute vec3 instanceColor;",
      "#endif",
      "attribute vec3 position;",
      "attribute vec3 normal;",
      "attribute vec2 uv;",
      "#ifdef USE_TANGENT",
      "	attribute vec4 tangent;",
      "#endif",
      "#if defined( USE_COLOR_ALPHA )",
      "	attribute vec4 color;",
      "#elif defined( USE_COLOR )",
      "	attribute vec3 color;",
      "#endif",
      "#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )",
      "	attribute vec3 morphTarget0;",
      "	attribute vec3 morphTarget1;",
      "	attribute vec3 morphTarget2;",
      "	attribute vec3 morphTarget3;",
      "	#ifdef USE_MORPHNORMALS",
      "		attribute vec3 morphNormal0;",
      "		attribute vec3 morphNormal1;",
      "		attribute vec3 morphNormal2;",
      "		attribute vec3 morphNormal3;",
      "	#else",
      "		attribute vec3 morphTarget4;",
      "		attribute vec3 morphTarget5;",
      "		attribute vec3 morphTarget6;",
      "		attribute vec3 morphTarget7;",
      "	#endif",
      "#endif",
      "#ifdef USE_SKINNING",
      "	attribute vec4 skinIndex;",
      "	attribute vec4 skinWeight;",
      "#endif",
      "\n"
    ].filter(filterEmptyLine).join("\n");
    prefixFragment = [
      customExtensions,
      generatePrecision(parameters),
      "#define SHADER_NAME " + parameters.shaderName,
      customDefines,
      parameters.useFog && parameters.fog ? "#define USE_FOG" : "",
      parameters.useFog && parameters.fogExp2 ? "#define FOG_EXP2" : "",
      parameters.map ? "#define USE_MAP" : "",
      parameters.matcap ? "#define USE_MATCAP" : "",
      parameters.envMap ? "#define USE_ENVMAP" : "",
      parameters.envMap ? "#define " + envMapTypeDefine : "",
      parameters.envMap ? "#define " + envMapModeDefine : "",
      parameters.envMap ? "#define " + envMapBlendingDefine : "",
      envMapCubeUVSize ? "#define CUBEUV_TEXEL_WIDTH " + envMapCubeUVSize.texelWidth : "",
      envMapCubeUVSize ? "#define CUBEUV_TEXEL_HEIGHT " + envMapCubeUVSize.texelHeight : "",
      envMapCubeUVSize ? "#define CUBEUV_MAX_MIP " + envMapCubeUVSize.maxMip + ".0" : "",
      parameters.lightMap ? "#define USE_LIGHTMAP" : "",
      parameters.aoMap ? "#define USE_AOMAP" : "",
      parameters.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
      parameters.bumpMap ? "#define USE_BUMPMAP" : "",
      parameters.normalMap ? "#define USE_NORMALMAP" : "",
      parameters.normalMap && parameters.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "",
      parameters.normalMap && parameters.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "",
      parameters.clearcoat ? "#define USE_CLEARCOAT" : "",
      parameters.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
      parameters.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
      parameters.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
      parameters.specularMap ? "#define USE_SPECULARMAP" : "",
      parameters.specularIntensityMap ? "#define USE_SPECULARINTENSITYMAP" : "",
      parameters.specularColorMap ? "#define USE_SPECULARCOLORMAP" : "",
      parameters.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
      parameters.metalnessMap ? "#define USE_METALNESSMAP" : "",
      parameters.alphaMap ? "#define USE_ALPHAMAP" : "",
      parameters.alphaTest ? "#define USE_ALPHATEST" : "",
      parameters.sheen ? "#define USE_SHEEN" : "",
      parameters.sheenColorMap ? "#define USE_SHEENCOLORMAP" : "",
      parameters.sheenRoughnessMap ? "#define USE_SHEENROUGHNESSMAP" : "",
      parameters.transmission ? "#define USE_TRANSMISSION" : "",
      parameters.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
      parameters.thicknessMap ? "#define USE_THICKNESSMAP" : "",
      parameters.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "",
      parameters.vertexTangents ? "#define USE_TANGENT" : "",
      parameters.vertexColors || parameters.instancingColor ? "#define USE_COLOR" : "",
      parameters.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
      parameters.vertexUvs ? "#define USE_UV" : "",
      parameters.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "",
      parameters.gradientMap ? "#define USE_GRADIENTMAP" : "",
      parameters.flatShading ? "#define FLAT_SHADED" : "",
      parameters.doubleSided ? "#define DOUBLE_SIDED" : "",
      parameters.flipSided ? "#define FLIP_SIDED" : "",
      parameters.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
      parameters.shadowMapEnabled ? "#define " + shadowMapTypeDefine : "",
      parameters.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
      parameters.physicallyCorrectLights ? "#define PHYSICALLY_CORRECT_LIGHTS" : "",
      parameters.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
      parameters.logarithmicDepthBuffer && parameters.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "",
      "uniform mat4 viewMatrix;",
      "uniform vec3 cameraPosition;",
      "uniform bool isOrthographic;",
      parameters.toneMapping !== NoToneMapping ? "#define TONE_MAPPING" : "",
      parameters.toneMapping !== NoToneMapping ? ShaderChunk["tonemapping_pars_fragment"] : "",
      parameters.toneMapping !== NoToneMapping ? getToneMappingFunction("toneMapping", parameters.toneMapping) : "",
      parameters.dithering ? "#define DITHERING" : "",
      parameters.opaque ? "#define OPAQUE" : "",
      ShaderChunk["encodings_pars_fragment"],
      getTexelEncodingFunction("linearToOutputTexel", parameters.outputEncoding),
      parameters.depthPacking ? "#define DEPTH_PACKING " + parameters.depthPacking : "",
      "\n"
    ].filter(filterEmptyLine).join("\n");
  }
  vertexShader = resolveIncludes(vertexShader);
  vertexShader = replaceLightNums(vertexShader, parameters);
  vertexShader = replaceClippingPlaneNums(vertexShader, parameters);
  fragmentShader = resolveIncludes(fragmentShader);
  fragmentShader = replaceLightNums(fragmentShader, parameters);
  fragmentShader = replaceClippingPlaneNums(fragmentShader, parameters);
  vertexShader = unrollLoops(vertexShader);
  fragmentShader = unrollLoops(fragmentShader);
  if (parameters.isWebGL2 && parameters.isRawShaderMaterial !== true) {
    versionString = "#version 300 es\n";
    prefixVertex = [
      "precision mediump sampler2DArray;",
      "#define attribute in",
      "#define varying out",
      "#define texture2D texture"
    ].join("\n") + "\n" + prefixVertex;
    prefixFragment = [
      "#define varying in",
      parameters.glslVersion === GLSL3 ? "" : "layout(location = 0) out highp vec4 pc_fragColor;",
      parameters.glslVersion === GLSL3 ? "" : "#define gl_FragColor pc_fragColor",
      "#define gl_FragDepthEXT gl_FragDepth",
      "#define texture2D texture",
      "#define textureCube texture",
      "#define texture2DProj textureProj",
      "#define texture2DLodEXT textureLod",
      "#define texture2DProjLodEXT textureProjLod",
      "#define textureCubeLodEXT textureLod",
      "#define texture2DGradEXT textureGrad",
      "#define texture2DProjGradEXT textureProjGrad",
      "#define textureCubeGradEXT textureGrad"
    ].join("\n") + "\n" + prefixFragment;
  }
  const vertexGlsl = versionString + prefixVertex + vertexShader;
  const fragmentGlsl = versionString + prefixFragment + fragmentShader;
  const glVertexShader = WebGLShader(gl, 35633, vertexGlsl);
  const glFragmentShader = WebGLShader(gl, 35632, fragmentGlsl);
  gl.attachShader(program, glVertexShader);
  gl.attachShader(program, glFragmentShader);
  if (parameters.index0AttributeName !== void 0) {
    gl.bindAttribLocation(program, 0, parameters.index0AttributeName);
  } else if (parameters.morphTargets === true) {
    gl.bindAttribLocation(program, 0, "position");
  }
  gl.linkProgram(program);
  if (renderer.debug.checkShaderErrors) {
    const programLog = gl.getProgramInfoLog(program).trim();
    const vertexLog = gl.getShaderInfoLog(glVertexShader).trim();
    const fragmentLog = gl.getShaderInfoLog(glFragmentShader).trim();
    let runnable = true;
    let haveDiagnostics = true;
    if (gl.getProgramParameter(program, 35714) === false) {
      runnable = false;
      const vertexErrors = getShaderErrors(gl, glVertexShader, "vertex");
      const fragmentErrors = getShaderErrors(gl, glFragmentShader, "fragment");
      console.error("THREE.WebGLProgram: Shader Error " + gl.getError() + " - VALIDATE_STATUS " + gl.getProgramParameter(program, 35715) + "\n\nProgram Info Log: " + programLog + "\n" + vertexErrors + "\n" + fragmentErrors);
    } else if (programLog !== "") {
      console.warn("THREE.WebGLProgram: Program Info Log:", programLog);
    } else if (vertexLog === "" || fragmentLog === "") {
      haveDiagnostics = false;
    }
    if (haveDiagnostics) {
      this.diagnostics = {
        runnable,
        programLog,
        vertexShader: {
          log: vertexLog,
          prefix: prefixVertex
        },
        fragmentShader: {
          log: fragmentLog,
          prefix: prefixFragment
        }
      };
    }
  }
  gl.deleteShader(glVertexShader);
  gl.deleteShader(glFragmentShader);
  let cachedUniforms;
  this.getUniforms = function() {
    if (cachedUniforms === void 0) {
      cachedUniforms = new WebGLUniforms(gl, program);
    }
    return cachedUniforms;
  };
  let cachedAttributes;
  this.getAttributes = function() {
    if (cachedAttributes === void 0) {
      cachedAttributes = fetchAttributeLocations(gl, program);
    }
    return cachedAttributes;
  };
  this.destroy = function() {
    bindingStates.releaseStatesOfProgram(this);
    gl.deleteProgram(program);
    this.program = void 0;
  };
  this.name = parameters.shaderName;
  this.id = programIdCount++;
  this.cacheKey = cacheKey;
  this.usedTimes = 1;
  this.program = program;
  this.vertexShader = glVertexShader;
  this.fragmentShader = glFragmentShader;
  return this;
}
var _id = 0;
var WebGLShaderCache = class {
  constructor() {
    this.shaderCache = /* @__PURE__ */ new Map();
    this.materialCache = /* @__PURE__ */ new Map();
  }
  update(material) {
    const vertexShader = material.vertexShader;
    const fragmentShader = material.fragmentShader;
    const vertexShaderStage = this._getShaderStage(vertexShader);
    const fragmentShaderStage = this._getShaderStage(fragmentShader);
    const materialShaders = this._getShaderCacheForMaterial(material);
    if (materialShaders.has(vertexShaderStage) === false) {
      materialShaders.add(vertexShaderStage);
      vertexShaderStage.usedTimes++;
    }
    if (materialShaders.has(fragmentShaderStage) === false) {
      materialShaders.add(fragmentShaderStage);
      fragmentShaderStage.usedTimes++;
    }
    return this;
  }
  remove(material) {
    const materialShaders = this.materialCache.get(material);
    for (const shaderStage of materialShaders) {
      shaderStage.usedTimes--;
      if (shaderStage.usedTimes === 0)
        this.shaderCache.delete(shaderStage.code);
    }
    this.materialCache.delete(material);
    return this;
  }
  getVertexShaderID(material) {
    return this._getShaderStage(material.vertexShader).id;
  }
  getFragmentShaderID(material) {
    return this._getShaderStage(material.fragmentShader).id;
  }
  dispose() {
    this.shaderCache.clear();
    this.materialCache.clear();
  }
  _getShaderCacheForMaterial(material) {
    const cache = this.materialCache;
    if (cache.has(material) === false) {
      cache.set(material, /* @__PURE__ */ new Set());
    }
    return cache.get(material);
  }
  _getShaderStage(code) {
    const cache = this.shaderCache;
    if (cache.has(code) === false) {
      const stage = new WebGLShaderStage(code);
      cache.set(code, stage);
    }
    return cache.get(code);
  }
};
var WebGLShaderStage = class {
  constructor(code) {
    this.id = _id++;
    this.code = code;
    this.usedTimes = 0;
  }
};
function WebGLPrograms(renderer, cubemaps, cubeuvmaps, extensions, capabilities, bindingStates, clipping) {
  const _programLayers = new Layers();
  const _customShaders = new WebGLShaderCache();
  const programs = [];
  const isWebGL2 = capabilities.isWebGL2;
  const logarithmicDepthBuffer = capabilities.logarithmicDepthBuffer;
  const floatVertexTextures = capabilities.floatVertexTextures;
  const maxVertexUniforms = capabilities.maxVertexUniforms;
  const vertexTextures = capabilities.vertexTextures;
  let precision = capabilities.precision;
  const shaderIDs = {
    MeshDepthMaterial: "depth",
    MeshDistanceMaterial: "distanceRGBA",
    MeshNormalMaterial: "normal",
    MeshBasicMaterial: "basic",
    MeshLambertMaterial: "lambert",
    MeshPhongMaterial: "phong",
    MeshToonMaterial: "toon",
    MeshStandardMaterial: "physical",
    MeshPhysicalMaterial: "physical",
    MeshMatcapMaterial: "matcap",
    LineBasicMaterial: "basic",
    LineDashedMaterial: "dashed",
    PointsMaterial: "points",
    ShadowMaterial: "shadow",
    SpriteMaterial: "sprite"
  };
  function getMaxBones(object) {
    const skeleton = object.skeleton;
    const bones = skeleton.bones;
    if (floatVertexTextures) {
      return 1024;
    } else {
      const nVertexUniforms = maxVertexUniforms;
      const nVertexMatrices = Math.floor((nVertexUniforms - 20) / 4);
      const maxBones = Math.min(nVertexMatrices, bones.length);
      if (maxBones < bones.length) {
        console.warn("THREE.WebGLRenderer: Skeleton has " + bones.length + " bones. This GPU supports " + maxBones + ".");
        return 0;
      }
      return maxBones;
    }
  }
  function getParameters(material, lights, shadows, scene, object) {
    const fog = scene.fog;
    const geometry = object.geometry;
    const environment = material.isMeshStandardMaterial ? scene.environment : null;
    const envMap = (material.isMeshStandardMaterial ? cubeuvmaps : cubemaps).get(material.envMap || environment);
    const envMapCubeUVHeight = !!envMap && envMap.mapping === CubeUVReflectionMapping ? envMap.image.height : null;
    const shaderID = shaderIDs[material.type];
    const maxBones = object.isSkinnedMesh ? getMaxBones(object) : 0;
    if (material.precision !== null) {
      precision = capabilities.getMaxPrecision(material.precision);
      if (precision !== material.precision) {
        console.warn("THREE.WebGLProgram.getParameters:", material.precision, "not supported, using", precision, "instead.");
      }
    }
    const morphAttribute = geometry.morphAttributes.position || geometry.morphAttributes.normal || geometry.morphAttributes.color;
    const morphTargetsCount = morphAttribute !== void 0 ? morphAttribute.length : 0;
    let morphTextureStride = 0;
    if (geometry.morphAttributes.position !== void 0)
      morphTextureStride = 1;
    if (geometry.morphAttributes.normal !== void 0)
      morphTextureStride = 2;
    if (geometry.morphAttributes.color !== void 0)
      morphTextureStride = 3;
    let vertexShader, fragmentShader;
    let customVertexShaderID, customFragmentShaderID;
    if (shaderID) {
      const shader = ShaderLib[shaderID];
      vertexShader = shader.vertexShader;
      fragmentShader = shader.fragmentShader;
    } else {
      vertexShader = material.vertexShader;
      fragmentShader = material.fragmentShader;
      _customShaders.update(material);
      customVertexShaderID = _customShaders.getVertexShaderID(material);
      customFragmentShaderID = _customShaders.getFragmentShaderID(material);
    }
    const currentRenderTarget = renderer.getRenderTarget();
    const useAlphaTest = material.alphaTest > 0;
    const useClearcoat = material.clearcoat > 0;
    const parameters = {
      isWebGL2,
      shaderID,
      shaderName: material.type,
      vertexShader,
      fragmentShader,
      defines: material.defines,
      customVertexShaderID,
      customFragmentShaderID,
      isRawShaderMaterial: material.isRawShaderMaterial === true,
      glslVersion: material.glslVersion,
      precision,
      instancing: object.isInstancedMesh === true,
      instancingColor: object.isInstancedMesh === true && object.instanceColor !== null,
      supportsVertexTextures: vertexTextures,
      outputEncoding: currentRenderTarget === null ? renderer.outputEncoding : currentRenderTarget.isXRRenderTarget === true ? currentRenderTarget.texture.encoding : LinearEncoding,
      map: !!material.map,
      matcap: !!material.matcap,
      envMap: !!envMap,
      envMapMode: envMap && envMap.mapping,
      envMapCubeUVHeight,
      lightMap: !!material.lightMap,
      aoMap: !!material.aoMap,
      emissiveMap: !!material.emissiveMap,
      bumpMap: !!material.bumpMap,
      normalMap: !!material.normalMap,
      objectSpaceNormalMap: material.normalMapType === ObjectSpaceNormalMap,
      tangentSpaceNormalMap: material.normalMapType === TangentSpaceNormalMap,
      decodeVideoTexture: !!material.map && material.map.isVideoTexture === true && material.map.encoding === sRGBEncoding,
      clearcoat: useClearcoat,
      clearcoatMap: useClearcoat && !!material.clearcoatMap,
      clearcoatRoughnessMap: useClearcoat && !!material.clearcoatRoughnessMap,
      clearcoatNormalMap: useClearcoat && !!material.clearcoatNormalMap,
      displacementMap: !!material.displacementMap,
      roughnessMap: !!material.roughnessMap,
      metalnessMap: !!material.metalnessMap,
      specularMap: !!material.specularMap,
      specularIntensityMap: !!material.specularIntensityMap,
      specularColorMap: !!material.specularColorMap,
      opaque: material.transparent === false && material.blending === NormalBlending,
      alphaMap: !!material.alphaMap,
      alphaTest: useAlphaTest,
      gradientMap: !!material.gradientMap,
      sheen: material.sheen > 0,
      sheenColorMap: !!material.sheenColorMap,
      sheenRoughnessMap: !!material.sheenRoughnessMap,
      transmission: material.transmission > 0,
      transmissionMap: !!material.transmissionMap,
      thicknessMap: !!material.thicknessMap,
      combine: material.combine,
      vertexTangents: !!material.normalMap && !!geometry.attributes.tangent,
      vertexColors: material.vertexColors,
      vertexAlphas: material.vertexColors === true && !!geometry.attributes.color && geometry.attributes.color.itemSize === 4,
      vertexUvs: !!material.map || !!material.bumpMap || !!material.normalMap || !!material.specularMap || !!material.alphaMap || !!material.emissiveMap || !!material.roughnessMap || !!material.metalnessMap || !!material.clearcoatMap || !!material.clearcoatRoughnessMap || !!material.clearcoatNormalMap || !!material.displacementMap || !!material.transmissionMap || !!material.thicknessMap || !!material.specularIntensityMap || !!material.specularColorMap || !!material.sheenColorMap || !!material.sheenRoughnessMap,
      uvsVertexOnly: !(!!material.map || !!material.bumpMap || !!material.normalMap || !!material.specularMap || !!material.alphaMap || !!material.emissiveMap || !!material.roughnessMap || !!material.metalnessMap || !!material.clearcoatNormalMap || material.transmission > 0 || !!material.transmissionMap || !!material.thicknessMap || !!material.specularIntensityMap || !!material.specularColorMap || material.sheen > 0 || !!material.sheenColorMap || !!material.sheenRoughnessMap) && !!material.displacementMap,
      fog: !!fog,
      useFog: material.fog,
      fogExp2: fog && fog.isFogExp2,
      flatShading: !!material.flatShading,
      sizeAttenuation: material.sizeAttenuation,
      logarithmicDepthBuffer,
      skinning: object.isSkinnedMesh === true && maxBones > 0,
      maxBones,
      useVertexTexture: floatVertexTextures,
      morphTargets: geometry.morphAttributes.position !== void 0,
      morphNormals: geometry.morphAttributes.normal !== void 0,
      morphColors: geometry.morphAttributes.color !== void 0,
      morphTargetsCount,
      morphTextureStride,
      numDirLights: lights.directional.length,
      numPointLights: lights.point.length,
      numSpotLights: lights.spot.length,
      numRectAreaLights: lights.rectArea.length,
      numHemiLights: lights.hemi.length,
      numDirLightShadows: lights.directionalShadowMap.length,
      numPointLightShadows: lights.pointShadowMap.length,
      numSpotLightShadows: lights.spotShadowMap.length,
      numClippingPlanes: clipping.numPlanes,
      numClipIntersection: clipping.numIntersection,
      dithering: material.dithering,
      shadowMapEnabled: renderer.shadowMap.enabled && shadows.length > 0,
      shadowMapType: renderer.shadowMap.type,
      toneMapping: material.toneMapped ? renderer.toneMapping : NoToneMapping,
      physicallyCorrectLights: renderer.physicallyCorrectLights,
      premultipliedAlpha: material.premultipliedAlpha,
      doubleSided: material.side === DoubleSide,
      flipSided: material.side === BackSide,
      depthPacking: material.depthPacking !== void 0 ? material.depthPacking : false,
      index0AttributeName: material.index0AttributeName,
      extensionDerivatives: material.extensions && material.extensions.derivatives,
      extensionFragDepth: material.extensions && material.extensions.fragDepth,
      extensionDrawBuffers: material.extensions && material.extensions.drawBuffers,
      extensionShaderTextureLOD: material.extensions && material.extensions.shaderTextureLOD,
      rendererExtensionFragDepth: isWebGL2 || extensions.has("EXT_frag_depth"),
      rendererExtensionDrawBuffers: isWebGL2 || extensions.has("WEBGL_draw_buffers"),
      rendererExtensionShaderTextureLod: isWebGL2 || extensions.has("EXT_shader_texture_lod"),
      customProgramCacheKey: material.customProgramCacheKey()
    };
    return parameters;
  }
  function getProgramCacheKey(parameters) {
    const array = [];
    if (parameters.shaderID) {
      array.push(parameters.shaderID);
    } else {
      array.push(parameters.customVertexShaderID);
      array.push(parameters.customFragmentShaderID);
    }
    if (parameters.defines !== void 0) {
      for (const name in parameters.defines) {
        array.push(name);
        array.push(parameters.defines[name]);
      }
    }
    if (parameters.isRawShaderMaterial === false) {
      getProgramCacheKeyParameters(array, parameters);
      getProgramCacheKeyBooleans(array, parameters);
      array.push(renderer.outputEncoding);
    }
    array.push(parameters.customProgramCacheKey);
    return array.join();
  }
  function getProgramCacheKeyParameters(array, parameters) {
    array.push(parameters.precision);
    array.push(parameters.outputEncoding);
    array.push(parameters.envMapMode);
    array.push(parameters.envMapCubeUVHeight);
    array.push(parameters.combine);
    array.push(parameters.vertexUvs);
    array.push(parameters.fogExp2);
    array.push(parameters.sizeAttenuation);
    array.push(parameters.maxBones);
    array.push(parameters.morphTargetsCount);
    array.push(parameters.morphAttributeCount);
    array.push(parameters.numDirLights);
    array.push(parameters.numPointLights);
    array.push(parameters.numSpotLights);
    array.push(parameters.numHemiLights);
    array.push(parameters.numRectAreaLights);
    array.push(parameters.numDirLightShadows);
    array.push(parameters.numPointLightShadows);
    array.push(parameters.numSpotLightShadows);
    array.push(parameters.shadowMapType);
    array.push(parameters.toneMapping);
    array.push(parameters.numClippingPlanes);
    array.push(parameters.numClipIntersection);
  }
  function getProgramCacheKeyBooleans(array, parameters) {
    _programLayers.disableAll();
    if (parameters.isWebGL2)
      _programLayers.enable(0);
    if (parameters.supportsVertexTextures)
      _programLayers.enable(1);
    if (parameters.instancing)
      _programLayers.enable(2);
    if (parameters.instancingColor)
      _programLayers.enable(3);
    if (parameters.map)
      _programLayers.enable(4);
    if (parameters.matcap)
      _programLayers.enable(5);
    if (parameters.envMap)
      _programLayers.enable(6);
    if (parameters.lightMap)
      _programLayers.enable(7);
    if (parameters.aoMap)
      _programLayers.enable(8);
    if (parameters.emissiveMap)
      _programLayers.enable(9);
    if (parameters.bumpMap)
      _programLayers.enable(10);
    if (parameters.normalMap)
      _programLayers.enable(11);
    if (parameters.objectSpaceNormalMap)
      _programLayers.enable(12);
    if (parameters.tangentSpaceNormalMap)
      _programLayers.enable(13);
    if (parameters.clearcoat)
      _programLayers.enable(14);
    if (parameters.clearcoatMap)
      _programLayers.enable(15);
    if (parameters.clearcoatRoughnessMap)
      _programLayers.enable(16);
    if (parameters.clearcoatNormalMap)
      _programLayers.enable(17);
    if (parameters.displacementMap)
      _programLayers.enable(18);
    if (parameters.specularMap)
      _programLayers.enable(19);
    if (parameters.roughnessMap)
      _programLayers.enable(20);
    if (parameters.metalnessMap)
      _programLayers.enable(21);
    if (parameters.gradientMap)
      _programLayers.enable(22);
    if (parameters.alphaMap)
      _programLayers.enable(23);
    if (parameters.alphaTest)
      _programLayers.enable(24);
    if (parameters.vertexColors)
      _programLayers.enable(25);
    if (parameters.vertexAlphas)
      _programLayers.enable(26);
    if (parameters.vertexUvs)
      _programLayers.enable(27);
    if (parameters.vertexTangents)
      _programLayers.enable(28);
    if (parameters.uvsVertexOnly)
      _programLayers.enable(29);
    if (parameters.fog)
      _programLayers.enable(30);
    array.push(_programLayers.mask);
    _programLayers.disableAll();
    if (parameters.useFog)
      _programLayers.enable(0);
    if (parameters.flatShading)
      _programLayers.enable(1);
    if (parameters.logarithmicDepthBuffer)
      _programLayers.enable(2);
    if (parameters.skinning)
      _programLayers.enable(3);
    if (parameters.useVertexTexture)
      _programLayers.enable(4);
    if (parameters.morphTargets)
      _programLayers.enable(5);
    if (parameters.morphNormals)
      _programLayers.enable(6);
    if (parameters.morphColors)
      _programLayers.enable(7);
    if (parameters.premultipliedAlpha)
      _programLayers.enable(8);
    if (parameters.shadowMapEnabled)
      _programLayers.enable(9);
    if (parameters.physicallyCorrectLights)
      _programLayers.enable(10);
    if (parameters.doubleSided)
      _programLayers.enable(11);
    if (parameters.flipSided)
      _programLayers.enable(12);
    if (parameters.depthPacking)
      _programLayers.enable(13);
    if (parameters.dithering)
      _programLayers.enable(14);
    if (parameters.specularIntensityMap)
      _programLayers.enable(15);
    if (parameters.specularColorMap)
      _programLayers.enable(16);
    if (parameters.transmission)
      _programLayers.enable(17);
    if (parameters.transmissionMap)
      _programLayers.enable(18);
    if (parameters.thicknessMap)
      _programLayers.enable(19);
    if (parameters.sheen)
      _programLayers.enable(20);
    if (parameters.sheenColorMap)
      _programLayers.enable(21);
    if (parameters.sheenRoughnessMap)
      _programLayers.enable(22);
    if (parameters.decodeVideoTexture)
      _programLayers.enable(23);
    if (parameters.opaque)
      _programLayers.enable(24);
    array.push(_programLayers.mask);
  }
  function getUniforms(material) {
    const shaderID = shaderIDs[material.type];
    let uniforms;
    if (shaderID) {
      const shader = ShaderLib[shaderID];
      uniforms = UniformsUtils.clone(shader.uniforms);
    } else {
      uniforms = material.uniforms;
    }
    return uniforms;
  }
  function acquireProgram(parameters, cacheKey) {
    let program;
    for (let p = 0, pl = programs.length; p < pl; p++) {
      const preexistingProgram = programs[p];
      if (preexistingProgram.cacheKey === cacheKey) {
        program = preexistingProgram;
        ++program.usedTimes;
        break;
      }
    }
    if (program === void 0) {
      program = new WebGLProgram(renderer, cacheKey, parameters, bindingStates);
      programs.push(program);
    }
    return program;
  }
  function releaseProgram(program) {
    if (--program.usedTimes === 0) {
      const i = programs.indexOf(program);
      programs[i] = programs[programs.length - 1];
      programs.pop();
      program.destroy();
    }
  }
  function releaseShaderCache(material) {
    _customShaders.remove(material);
  }
  function dispose() {
    _customShaders.dispose();
  }
  return {
    getParameters,
    getProgramCacheKey,
    getUniforms,
    acquireProgram,
    releaseProgram,
    releaseShaderCache,
    programs,
    dispose
  };
}
function WebGLProperties() {
  let properties = /* @__PURE__ */ new WeakMap();
  function get(object) {
    let map = properties.get(object);
    if (map === void 0) {
      map = {};
      properties.set(object, map);
    }
    return map;
  }
  function remove(object) {
    properties.delete(object);
  }
  function update(object, key, value) {
    properties.get(object)[key] = value;
  }
  function dispose() {
    properties = /* @__PURE__ */ new WeakMap();
  }
  return {
    get,
    remove,
    update,
    dispose
  };
}
function painterSortStable(a, b) {
  if (a.groupOrder !== b.groupOrder) {
    return a.groupOrder - b.groupOrder;
  } else if (a.renderOrder !== b.renderOrder) {
    return a.renderOrder - b.renderOrder;
  } else if (a.material.id !== b.material.id) {
    return a.material.id - b.material.id;
  } else if (a.z !== b.z) {
    return a.z - b.z;
  } else {
    return a.id - b.id;
  }
}
function reversePainterSortStable(a, b) {
  if (a.groupOrder !== b.groupOrder) {
    return a.groupOrder - b.groupOrder;
  } else if (a.renderOrder !== b.renderOrder) {
    return a.renderOrder - b.renderOrder;
  } else if (a.z !== b.z) {
    return b.z - a.z;
  } else {
    return a.id - b.id;
  }
}
function WebGLRenderList() {
  const renderItems = [];
  let renderItemsIndex = 0;
  const opaque = [];
  const transmissive = [];
  const transparent = [];
  function init() {
    renderItemsIndex = 0;
    opaque.length = 0;
    transmissive.length = 0;
    transparent.length = 0;
  }
  function getNextRenderItem(object, geometry, material, groupOrder, z, group) {
    let renderItem = renderItems[renderItemsIndex];
    if (renderItem === void 0) {
      renderItem = {
        id: object.id,
        object,
        geometry,
        material,
        groupOrder,
        renderOrder: object.renderOrder,
        z,
        group
      };
      renderItems[renderItemsIndex] = renderItem;
    } else {
      renderItem.id = object.id;
      renderItem.object = object;
      renderItem.geometry = geometry;
      renderItem.material = material;
      renderItem.groupOrder = groupOrder;
      renderItem.renderOrder = object.renderOrder;
      renderItem.z = z;
      renderItem.group = group;
    }
    renderItemsIndex++;
    return renderItem;
  }
  function push(object, geometry, material, groupOrder, z, group) {
    const renderItem = getNextRenderItem(object, geometry, material, groupOrder, z, group);
    if (material.transmission > 0) {
      transmissive.push(renderItem);
    } else if (material.transparent === true) {
      transparent.push(renderItem);
    } else {
      opaque.push(renderItem);
    }
  }
  function unshift(object, geometry, material, groupOrder, z, group) {
    const renderItem = getNextRenderItem(object, geometry, material, groupOrder, z, group);
    if (material.transmission > 0) {
      transmissive.unshift(renderItem);
    } else if (material.transparent === true) {
      transparent.unshift(renderItem);
    } else {
      opaque.unshift(renderItem);
    }
  }
  function sort(customOpaqueSort, customTransparentSort) {
    if (opaque.length > 1)
      opaque.sort(customOpaqueSort || painterSortStable);
    if (transmissive.length > 1)
      transmissive.sort(customTransparentSort || reversePainterSortStable);
    if (transparent.length > 1)
      transparent.sort(customTransparentSort || reversePainterSortStable);
  }
  function finish() {
    for (let i = renderItemsIndex, il = renderItems.length; i < il; i++) {
      const renderItem = renderItems[i];
      if (renderItem.id === null)
        break;
      renderItem.id = null;
      renderItem.object = null;
      renderItem.geometry = null;
      renderItem.material = null;
      renderItem.group = null;
    }
  }
  return {
    opaque,
    transmissive,
    transparent,
    init,
    push,
    unshift,
    finish,
    sort
  };
}
function WebGLRenderLists() {
  let lists = /* @__PURE__ */ new WeakMap();
  function get(scene, renderCallDepth) {
    let list;
    if (lists.has(scene) === false) {
      list = new WebGLRenderList();
      lists.set(scene, [list]);
    } else {
      if (renderCallDepth >= lists.get(scene).length) {
        list = new WebGLRenderList();
        lists.get(scene).push(list);
      } else {
        list = lists.get(scene)[renderCallDepth];
      }
    }
    return list;
  }
  function dispose() {
    lists = /* @__PURE__ */ new WeakMap();
  }
  return {
    get,
    dispose
  };
}
function UniformsCache() {
  const lights = {};
  return {
    get: function(light) {
      if (lights[light.id] !== void 0) {
        return lights[light.id];
      }
      let uniforms;
      switch (light.type) {
        case "DirectionalLight":
          uniforms = {
            direction: new Vector3(),
            color: new Color()
          };
          break;
        case "SpotLight":
          uniforms = {
            position: new Vector3(),
            direction: new Vector3(),
            color: new Color(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0
          };
          break;
        case "PointLight":
          uniforms = {
            position: new Vector3(),
            color: new Color(),
            distance: 0,
            decay: 0
          };
          break;
        case "HemisphereLight":
          uniforms = {
            direction: new Vector3(),
            skyColor: new Color(),
            groundColor: new Color()
          };
          break;
        case "RectAreaLight":
          uniforms = {
            color: new Color(),
            position: new Vector3(),
            halfWidth: new Vector3(),
            halfHeight: new Vector3()
          };
          break;
      }
      lights[light.id] = uniforms;
      return uniforms;
    }
  };
}
function ShadowUniformsCache() {
  const lights = {};
  return {
    get: function(light) {
      if (lights[light.id] !== void 0) {
        return lights[light.id];
      }
      let uniforms;
      switch (light.type) {
        case "DirectionalLight":
          uniforms = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Vector2()
          };
          break;
        case "SpotLight":
          uniforms = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Vector2()
          };
          break;
        case "PointLight":
          uniforms = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Vector2(),
            shadowCameraNear: 1,
            shadowCameraFar: 1e3
          };
          break;
      }
      lights[light.id] = uniforms;
      return uniforms;
    }
  };
}
var nextVersion = 0;
function shadowCastingLightsFirst(lightA, lightB) {
  return (lightB.castShadow ? 1 : 0) - (lightA.castShadow ? 1 : 0);
}
function WebGLLights(extensions, capabilities) {
  const cache = new UniformsCache();
  const shadowCache = ShadowUniformsCache();
  const state = {
    version: 0,
    hash: {
      directionalLength: -1,
      pointLength: -1,
      spotLength: -1,
      rectAreaLength: -1,
      hemiLength: -1,
      numDirectionalShadows: -1,
      numPointShadows: -1,
      numSpotShadows: -1
    },
    ambient: [0, 0, 0],
    probe: [],
    directional: [],
    directionalShadow: [],
    directionalShadowMap: [],
    directionalShadowMatrix: [],
    spot: [],
    spotShadow: [],
    spotShadowMap: [],
    spotShadowMatrix: [],
    rectArea: [],
    rectAreaLTC1: null,
    rectAreaLTC2: null,
    point: [],
    pointShadow: [],
    pointShadowMap: [],
    pointShadowMatrix: [],
    hemi: []
  };
  for (let i = 0; i < 9; i++)
    state.probe.push(new Vector3());
  const vector3 = new Vector3();
  const matrix4 = new Matrix4();
  const matrix42 = new Matrix4();
  function setup(lights, physicallyCorrectLights) {
    let r = 0, g = 0, b = 0;
    for (let i = 0; i < 9; i++)
      state.probe[i].set(0, 0, 0);
    let directionalLength = 0;
    let pointLength = 0;
    let spotLength = 0;
    let rectAreaLength = 0;
    let hemiLength = 0;
    let numDirectionalShadows = 0;
    let numPointShadows = 0;
    let numSpotShadows = 0;
    lights.sort(shadowCastingLightsFirst);
    const scaleFactor = physicallyCorrectLights !== true ? Math.PI : 1;
    for (let i = 0, l = lights.length; i < l; i++) {
      const light = lights[i];
      const color = light.color;
      const intensity = light.intensity;
      const distance = light.distance;
      const shadowMap = light.shadow && light.shadow.map ? light.shadow.map.texture : null;
      if (light.isAmbientLight) {
        r += color.r * intensity * scaleFactor;
        g += color.g * intensity * scaleFactor;
        b += color.b * intensity * scaleFactor;
      } else if (light.isLightProbe) {
        for (let j = 0; j < 9; j++) {
          state.probe[j].addScaledVector(light.sh.coefficients[j], intensity);
        }
      } else if (light.isDirectionalLight) {
        const uniforms = cache.get(light);
        uniforms.color.copy(light.color).multiplyScalar(light.intensity * scaleFactor);
        if (light.castShadow) {
          const shadow = light.shadow;
          const shadowUniforms = shadowCache.get(light);
          shadowUniforms.shadowBias = shadow.bias;
          shadowUniforms.shadowNormalBias = shadow.normalBias;
          shadowUniforms.shadowRadius = shadow.radius;
          shadowUniforms.shadowMapSize = shadow.mapSize;
          state.directionalShadow[directionalLength] = shadowUniforms;
          state.directionalShadowMap[directionalLength] = shadowMap;
          state.directionalShadowMatrix[directionalLength] = light.shadow.matrix;
          numDirectionalShadows++;
        }
        state.directional[directionalLength] = uniforms;
        directionalLength++;
      } else if (light.isSpotLight) {
        const uniforms = cache.get(light);
        uniforms.position.setFromMatrixPosition(light.matrixWorld);
        uniforms.color.copy(color).multiplyScalar(intensity * scaleFactor);
        uniforms.distance = distance;
        uniforms.coneCos = Math.cos(light.angle);
        uniforms.penumbraCos = Math.cos(light.angle * (1 - light.penumbra));
        uniforms.decay = light.decay;
        if (light.castShadow) {
          const shadow = light.shadow;
          const shadowUniforms = shadowCache.get(light);
          shadowUniforms.shadowBias = shadow.bias;
          shadowUniforms.shadowNormalBias = shadow.normalBias;
          shadowUniforms.shadowRadius = shadow.radius;
          shadowUniforms.shadowMapSize = shadow.mapSize;
          state.spotShadow[spotLength] = shadowUniforms;
          state.spotShadowMap[spotLength] = shadowMap;
          state.spotShadowMatrix[spotLength] = light.shadow.matrix;
          numSpotShadows++;
        }
        state.spot[spotLength] = uniforms;
        spotLength++;
      } else if (light.isRectAreaLight) {
        const uniforms = cache.get(light);
        uniforms.color.copy(color).multiplyScalar(intensity);
        uniforms.halfWidth.set(light.width * 0.5, 0, 0);
        uniforms.halfHeight.set(0, light.height * 0.5, 0);
        state.rectArea[rectAreaLength] = uniforms;
        rectAreaLength++;
      } else if (light.isPointLight) {
        const uniforms = cache.get(light);
        uniforms.color.copy(light.color).multiplyScalar(light.intensity * scaleFactor);
        uniforms.distance = light.distance;
        uniforms.decay = light.decay;
        if (light.castShadow) {
          const shadow = light.shadow;
          const shadowUniforms = shadowCache.get(light);
          shadowUniforms.shadowBias = shadow.bias;
          shadowUniforms.shadowNormalBias = shadow.normalBias;
          shadowUniforms.shadowRadius = shadow.radius;
          shadowUniforms.shadowMapSize = shadow.mapSize;
          shadowUniforms.shadowCameraNear = shadow.camera.near;
          shadowUniforms.shadowCameraFar = shadow.camera.far;
          state.pointShadow[pointLength] = shadowUniforms;
          state.pointShadowMap[pointLength] = shadowMap;
          state.pointShadowMatrix[pointLength] = light.shadow.matrix;
          numPointShadows++;
        }
        state.point[pointLength] = uniforms;
        pointLength++;
      } else if (light.isHemisphereLight) {
        const uniforms = cache.get(light);
        uniforms.skyColor.copy(light.color).multiplyScalar(intensity * scaleFactor);
        uniforms.groundColor.copy(light.groundColor).multiplyScalar(intensity * scaleFactor);
        state.hemi[hemiLength] = uniforms;
        hemiLength++;
      }
    }
    if (rectAreaLength > 0) {
      if (capabilities.isWebGL2) {
        state.rectAreaLTC1 = UniformsLib.LTC_FLOAT_1;
        state.rectAreaLTC2 = UniformsLib.LTC_FLOAT_2;
      } else {
        if (extensions.has("OES_texture_float_linear") === true) {
          state.rectAreaLTC1 = UniformsLib.LTC_FLOAT_1;
          state.rectAreaLTC2 = UniformsLib.LTC_FLOAT_2;
        } else if (extensions.has("OES_texture_half_float_linear") === true) {
          state.rectAreaLTC1 = UniformsLib.LTC_HALF_1;
          state.rectAreaLTC2 = UniformsLib.LTC_HALF_2;
        } else {
          console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.");
        }
      }
    }
    state.ambient[0] = r;
    state.ambient[1] = g;
    state.ambient[2] = b;
    const hash = state.hash;
    if (hash.directionalLength !== directionalLength || hash.pointLength !== pointLength || hash.spotLength !== spotLength || hash.rectAreaLength !== rectAreaLength || hash.hemiLength !== hemiLength || hash.numDirectionalShadows !== numDirectionalShadows || hash.numPointShadows !== numPointShadows || hash.numSpotShadows !== numSpotShadows) {
      state.directional.length = directionalLength;
      state.spot.length = spotLength;
      state.rectArea.length = rectAreaLength;
      state.point.length = pointLength;
      state.hemi.length = hemiLength;
      state.directionalShadow.length = numDirectionalShadows;
      state.directionalShadowMap.length = numDirectionalShadows;
      state.pointShadow.length = numPointShadows;
      state.pointShadowMap.length = numPointShadows;
      state.spotShadow.length = numSpotShadows;
      state.spotShadowMap.length = numSpotShadows;
      state.directionalShadowMatrix.length = numDirectionalShadows;
      state.pointShadowMatrix.length = numPointShadows;
      state.spotShadowMatrix.length = numSpotShadows;
      hash.directionalLength = directionalLength;
      hash.pointLength = pointLength;
      hash.spotLength = spotLength;
      hash.rectAreaLength = rectAreaLength;
      hash.hemiLength = hemiLength;
      hash.numDirectionalShadows = numDirectionalShadows;
      hash.numPointShadows = numPointShadows;
      hash.numSpotShadows = numSpotShadows;
      state.version = nextVersion++;
    }
  }
  function setupView(lights, camera) {
    let directionalLength = 0;
    let pointLength = 0;
    let spotLength = 0;
    let rectAreaLength = 0;
    let hemiLength = 0;
    const viewMatrix = camera.matrixWorldInverse;
    for (let i = 0, l = lights.length; i < l; i++) {
      const light = lights[i];
      if (light.isDirectionalLight) {
        const uniforms = state.directional[directionalLength];
        uniforms.direction.setFromMatrixPosition(light.matrixWorld);
        vector3.setFromMatrixPosition(light.target.matrixWorld);
        uniforms.direction.sub(vector3);
        uniforms.direction.transformDirection(viewMatrix);
        directionalLength++;
      } else if (light.isSpotLight) {
        const uniforms = state.spot[spotLength];
        uniforms.position.setFromMatrixPosition(light.matrixWorld);
        uniforms.position.applyMatrix4(viewMatrix);
        uniforms.direction.setFromMatrixPosition(light.matrixWorld);
        vector3.setFromMatrixPosition(light.target.matrixWorld);
        uniforms.direction.sub(vector3);
        uniforms.direction.transformDirection(viewMatrix);
        spotLength++;
      } else if (light.isRectAreaLight) {
        const uniforms = state.rectArea[rectAreaLength];
        uniforms.position.setFromMatrixPosition(light.matrixWorld);
        uniforms.position.applyMatrix4(viewMatrix);
        matrix42.identity();
        matrix4.copy(light.matrixWorld);
        matrix4.premultiply(viewMatrix);
        matrix42.extractRotation(matrix4);
        uniforms.halfWidth.set(light.width * 0.5, 0, 0);
        uniforms.halfHeight.set(0, light.height * 0.5, 0);
        uniforms.halfWidth.applyMatrix4(matrix42);
        uniforms.halfHeight.applyMatrix4(matrix42);
        rectAreaLength++;
      } else if (light.isPointLight) {
        const uniforms = state.point[pointLength];
        uniforms.position.setFromMatrixPosition(light.matrixWorld);
        uniforms.position.applyMatrix4(viewMatrix);
        pointLength++;
      } else if (light.isHemisphereLight) {
        const uniforms = state.hemi[hemiLength];
        uniforms.direction.setFromMatrixPosition(light.matrixWorld);
        uniforms.direction.transformDirection(viewMatrix);
        uniforms.direction.normalize();
        hemiLength++;
      }
    }
  }
  return {
    setup,
    setupView,
    state
  };
}
function WebGLRenderState(extensions, capabilities) {
  const lights = new WebGLLights(extensions, capabilities);
  const lightsArray = [];
  const shadowsArray = [];
  function init() {
    lightsArray.length = 0;
    shadowsArray.length = 0;
  }
  function pushLight(light) {
    lightsArray.push(light);
  }
  function pushShadow(shadowLight) {
    shadowsArray.push(shadowLight);
  }
  function setupLights(physicallyCorrectLights) {
    lights.setup(lightsArray, physicallyCorrectLights);
  }
  function setupLightsView(camera) {
    lights.setupView(lightsArray, camera);
  }
  const state = {
    lightsArray,
    shadowsArray,
    lights
  };
  return {
    init,
    state,
    setupLights,
    setupLightsView,
    pushLight,
    pushShadow
  };
}
function WebGLRenderStates(extensions, capabilities) {
  let renderStates = /* @__PURE__ */ new WeakMap();
  function get(scene, renderCallDepth = 0) {
    let renderState;
    if (renderStates.has(scene) === false) {
      renderState = new WebGLRenderState(extensions, capabilities);
      renderStates.set(scene, [renderState]);
    } else {
      if (renderCallDepth >= renderStates.get(scene).length) {
        renderState = new WebGLRenderState(extensions, capabilities);
        renderStates.get(scene).push(renderState);
      } else {
        renderState = renderStates.get(scene)[renderCallDepth];
      }
    }
    return renderState;
  }
  function dispose() {
    renderStates = /* @__PURE__ */ new WeakMap();
  }
  return {
    get,
    dispose
  };
}
var MeshDepthMaterial = class extends Material {
  constructor(parameters) {
    super();
    this.type = "MeshDepthMaterial";
    this.depthPacking = BasicDepthPacking;
    this.map = null;
    this.alphaMap = null;
    this.displacementMap = null;
    this.displacementScale = 1;
    this.displacementBias = 0;
    this.wireframe = false;
    this.wireframeLinewidth = 1;
    this.fog = false;
    this.setValues(parameters);
  }
  copy(source) {
    super.copy(source);
    this.depthPacking = source.depthPacking;
    this.map = source.map;
    this.alphaMap = source.alphaMap;
    this.displacementMap = source.displacementMap;
    this.displacementScale = source.displacementScale;
    this.displacementBias = source.displacementBias;
    this.wireframe = source.wireframe;
    this.wireframeLinewidth = source.wireframeLinewidth;
    return this;
  }
};
MeshDepthMaterial.prototype.isMeshDepthMaterial = true;
var MeshDistanceMaterial = class extends Material {
  constructor(parameters) {
    super();
    this.type = "MeshDistanceMaterial";
    this.referencePosition = new Vector3();
    this.nearDistance = 1;
    this.farDistance = 1e3;
    this.map = null;
    this.alphaMap = null;
    this.displacementMap = null;
    this.displacementScale = 1;
    this.displacementBias = 0;
    this.fog = false;
    this.setValues(parameters);
  }
  copy(source) {
    super.copy(source);
    this.referencePosition.copy(source.referencePosition);
    this.nearDistance = source.nearDistance;
    this.farDistance = source.farDistance;
    this.map = source.map;
    this.alphaMap = source.alphaMap;
    this.displacementMap = source.displacementMap;
    this.displacementScale = source.displacementScale;
    this.displacementBias = source.displacementBias;
    return this;
  }
};
MeshDistanceMaterial.prototype.isMeshDistanceMaterial = true;
var vertex = "void main() {\n	gl_Position = vec4( position, 1.0 );\n}";
var fragment = "uniform sampler2D shadow_pass;\nuniform vec2 resolution;\nuniform float radius;\n#include <packing>\nvoid main() {\n	const float samples = float( VSM_SAMPLES );\n	float mean = 0.0;\n	float squared_mean = 0.0;\n	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );\n	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;\n	for ( float i = 0.0; i < samples; i ++ ) {\n		float uvOffset = uvStart + i * uvStride;\n		#ifdef HORIZONTAL_PASS\n			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );\n			mean += distribution.x;\n			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;\n		#else\n			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );\n			mean += depth;\n			squared_mean += depth * depth;\n		#endif\n	}\n	mean = mean / samples;\n	squared_mean = squared_mean / samples;\n	float std_dev = sqrt( squared_mean - mean * mean );\n	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );\n}";
function WebGLShadowMap(_renderer, _objects, _capabilities) {
  let _frustum = new Frustum();
  const _shadowMapSize = new Vector2(), _viewportSize = new Vector2(), _viewport = new Vector4(), _depthMaterial = new MeshDepthMaterial({ depthPacking: RGBADepthPacking }), _distanceMaterial = new MeshDistanceMaterial(), _materialCache = {}, _maxTextureSize = _capabilities.maxTextureSize;
  const shadowSide = { 0: BackSide, 1: FrontSide, 2: DoubleSide };
  const shadowMaterialVertical = new ShaderMaterial({
    defines: {
      VSM_SAMPLES: 8
    },
    uniforms: {
      shadow_pass: { value: null },
      resolution: { value: new Vector2() },
      radius: { value: 4 }
    },
    vertexShader: vertex,
    fragmentShader: fragment
  });
  const shadowMaterialHorizontal = shadowMaterialVertical.clone();
  shadowMaterialHorizontal.defines.HORIZONTAL_PASS = 1;
  const fullScreenTri = new BufferGeometry();
  fullScreenTri.setAttribute("position", new BufferAttribute(new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]), 3));
  const fullScreenMesh = new Mesh(fullScreenTri, shadowMaterialVertical);
  const scope = this;
  this.enabled = false;
  this.autoUpdate = true;
  this.needsUpdate = false;
  this.type = PCFShadowMap;
  this.render = function(lights, scene, camera) {
    if (scope.enabled === false)
      return;
    if (scope.autoUpdate === false && scope.needsUpdate === false)
      return;
    if (lights.length === 0)
      return;
    const currentRenderTarget = _renderer.getRenderTarget();
    const activeCubeFace = _renderer.getActiveCubeFace();
    const activeMipmapLevel = _renderer.getActiveMipmapLevel();
    const _state = _renderer.state;
    _state.setBlending(NoBlending);
    _state.buffers.color.setClear(1, 1, 1, 1);
    _state.buffers.depth.setTest(true);
    _state.setScissorTest(false);
    for (let i = 0, il = lights.length; i < il; i++) {
      const light = lights[i];
      const shadow = light.shadow;
      if (shadow === void 0) {
        console.warn("THREE.WebGLShadowMap:", light, "has no shadow.");
        continue;
      }
      if (shadow.autoUpdate === false && shadow.needsUpdate === false)
        continue;
      _shadowMapSize.copy(shadow.mapSize);
      const shadowFrameExtents = shadow.getFrameExtents();
      _shadowMapSize.multiply(shadowFrameExtents);
      _viewportSize.copy(shadow.mapSize);
      if (_shadowMapSize.x > _maxTextureSize || _shadowMapSize.y > _maxTextureSize) {
        if (_shadowMapSize.x > _maxTextureSize) {
          _viewportSize.x = Math.floor(_maxTextureSize / shadowFrameExtents.x);
          _shadowMapSize.x = _viewportSize.x * shadowFrameExtents.x;
          shadow.mapSize.x = _viewportSize.x;
        }
        if (_shadowMapSize.y > _maxTextureSize) {
          _viewportSize.y = Math.floor(_maxTextureSize / shadowFrameExtents.y);
          _shadowMapSize.y = _viewportSize.y * shadowFrameExtents.y;
          shadow.mapSize.y = _viewportSize.y;
        }
      }
      if (shadow.map === null && !shadow.isPointLightShadow && this.type === VSMShadowMap) {
        shadow.map = new WebGLRenderTarget(_shadowMapSize.x, _shadowMapSize.y);
        shadow.map.texture.name = light.name + ".shadowMap";
        shadow.mapPass = new WebGLRenderTarget(_shadowMapSize.x, _shadowMapSize.y);
        shadow.camera.updateProjectionMatrix();
      }
      if (shadow.map === null) {
        const pars = { minFilter: NearestFilter, magFilter: NearestFilter, format: RGBAFormat };
        shadow.map = new WebGLRenderTarget(_shadowMapSize.x, _shadowMapSize.y, pars);
        shadow.map.texture.name = light.name + ".shadowMap";
        shadow.camera.updateProjectionMatrix();
      }
      _renderer.setRenderTarget(shadow.map);
      _renderer.clear();
      const viewportCount = shadow.getViewportCount();
      for (let vp = 0; vp < viewportCount; vp++) {
        const viewport = shadow.getViewport(vp);
        _viewport.set(_viewportSize.x * viewport.x, _viewportSize.y * viewport.y, _viewportSize.x * viewport.z, _viewportSize.y * viewport.w);
        _state.viewport(_viewport);
        shadow.updateMatrices(light, vp);
        _frustum = shadow.getFrustum();
        renderObject(scene, camera, shadow.camera, light, this.type);
      }
      if (!shadow.isPointLightShadow && this.type === VSMShadowMap) {
        VSMPass(shadow, camera);
      }
      shadow.needsUpdate = false;
    }
    scope.needsUpdate = false;
    _renderer.setRenderTarget(currentRenderTarget, activeCubeFace, activeMipmapLevel);
  };
  function VSMPass(shadow, camera) {
    const geometry = _objects.update(fullScreenMesh);
    if (shadowMaterialVertical.defines.VSM_SAMPLES !== shadow.blurSamples) {
      shadowMaterialVertical.defines.VSM_SAMPLES = shadow.blurSamples;
      shadowMaterialHorizontal.defines.VSM_SAMPLES = shadow.blurSamples;
      shadowMaterialVertical.needsUpdate = true;
      shadowMaterialHorizontal.needsUpdate = true;
    }
    shadowMaterialVertical.uniforms.shadow_pass.value = shadow.map.texture;
    shadowMaterialVertical.uniforms.resolution.value = shadow.mapSize;
    shadowMaterialVertical.uniforms.radius.value = shadow.radius;
    _renderer.setRenderTarget(shadow.mapPass);
    _renderer.clear();
    _renderer.renderBufferDirect(camera, null, geometry, shadowMaterialVertical, fullScreenMesh, null);
    shadowMaterialHorizontal.uniforms.shadow_pass.value = shadow.mapPass.texture;
    shadowMaterialHorizontal.uniforms.resolution.value = shadow.mapSize;
    shadowMaterialHorizontal.uniforms.radius.value = shadow.radius;
    _renderer.setRenderTarget(shadow.map);
    _renderer.clear();
    _renderer.renderBufferDirect(camera, null, geometry, shadowMaterialHorizontal, fullScreenMesh, null);
  }
  function getDepthMaterial(object, material, light, shadowCameraNear, shadowCameraFar, type) {
    let result = null;
    const customMaterial = light.isPointLight === true ? object.customDistanceMaterial : object.customDepthMaterial;
    if (customMaterial !== void 0) {
      result = customMaterial;
    } else {
      result = light.isPointLight === true ? _distanceMaterial : _depthMaterial;
    }
    if (_renderer.localClippingEnabled && material.clipShadows === true && material.clippingPlanes.length !== 0 || material.displacementMap && material.displacementScale !== 0 || material.alphaMap && material.alphaTest > 0) {
      const keyA = result.uuid, keyB = material.uuid;
      let materialsForVariant = _materialCache[keyA];
      if (materialsForVariant === void 0) {
        materialsForVariant = {};
        _materialCache[keyA] = materialsForVariant;
      }
      let cachedMaterial = materialsForVariant[keyB];
      if (cachedMaterial === void 0) {
        cachedMaterial = result.clone();
        materialsForVariant[keyB] = cachedMaterial;
      }
      result = cachedMaterial;
    }
    result.visible = material.visible;
    result.wireframe = material.wireframe;
    if (type === VSMShadowMap) {
      result.side = material.shadowSide !== null ? material.shadowSide : material.side;
    } else {
      result.side = material.shadowSide !== null ? material.shadowSide : shadowSide[material.side];
    }
    result.alphaMap = material.alphaMap;
    result.alphaTest = material.alphaTest;
    result.clipShadows = material.clipShadows;
    result.clippingPlanes = material.clippingPlanes;
    result.clipIntersection = material.clipIntersection;
    result.displacementMap = material.displacementMap;
    result.displacementScale = material.displacementScale;
    result.displacementBias = material.displacementBias;
    result.wireframeLinewidth = material.wireframeLinewidth;
    result.linewidth = material.linewidth;
    if (light.isPointLight === true && result.isMeshDistanceMaterial === true) {
      result.referencePosition.setFromMatrixPosition(light.matrixWorld);
      result.nearDistance = shadowCameraNear;
      result.farDistance = shadowCameraFar;
    }
    return result;
  }
  function renderObject(object, camera, shadowCamera, light, type) {
    if (object.visible === false)
      return;
    const visible = object.layers.test(camera.layers);
    if (visible && (object.isMesh || object.isLine || object.isPoints)) {
      if ((object.castShadow || object.receiveShadow && type === VSMShadowMap) && (!object.frustumCulled || _frustum.intersectsObject(object))) {
        object.modelViewMatrix.multiplyMatrices(shadowCamera.matrixWorldInverse, object.matrixWorld);
        const geometry = _objects.update(object);
        const material = object.material;
        if (Array.isArray(material)) {
          const groups = geometry.groups;
          for (let k = 0, kl = groups.length; k < kl; k++) {
            const group = groups[k];
            const groupMaterial = material[group.materialIndex];
            if (groupMaterial && groupMaterial.visible) {
              const depthMaterial = getDepthMaterial(object, groupMaterial, light, shadowCamera.near, shadowCamera.far, type);
              _renderer.renderBufferDirect(shadowCamera, null, geometry, depthMaterial, object, group);
            }
          }
        } else if (material.visible) {
          const depthMaterial = getDepthMaterial(object, material, light, shadowCamera.near, shadowCamera.far, type);
          _renderer.renderBufferDirect(shadowCamera, null, geometry, depthMaterial, object, null);
        }
      }
    }
    const children = object.children;
    for (let i = 0, l = children.length; i < l; i++) {
      renderObject(children[i], camera, shadowCamera, light, type);
    }
  }
}
function WebGLState(gl, extensions, capabilities) {
  const isWebGL2 = capabilities.isWebGL2;
  function ColorBuffer() {
    let locked = false;
    const color = new Vector4();
    let currentColorMask = null;
    const currentColorClear = new Vector4(0, 0, 0, 0);
    return {
      setMask: function(colorMask) {
        if (currentColorMask !== colorMask && !locked) {
          gl.colorMask(colorMask, colorMask, colorMask, colorMask);
          currentColorMask = colorMask;
        }
      },
      setLocked: function(lock) {
        locked = lock;
      },
      setClear: function(r, g, b, a, premultipliedAlpha) {
        if (premultipliedAlpha === true) {
          r *= a;
          g *= a;
          b *= a;
        }
        color.set(r, g, b, a);
        if (currentColorClear.equals(color) === false) {
          gl.clearColor(r, g, b, a);
          currentColorClear.copy(color);
        }
      },
      reset: function() {
        locked = false;
        currentColorMask = null;
        currentColorClear.set(-1, 0, 0, 0);
      }
    };
  }
  function DepthBuffer() {
    let locked = false;
    let currentDepthMask = null;
    let currentDepthFunc = null;
    let currentDepthClear = null;
    return {
      setTest: function(depthTest) {
        if (depthTest) {
          enable(2929);
        } else {
          disable(2929);
        }
      },
      setMask: function(depthMask) {
        if (currentDepthMask !== depthMask && !locked) {
          gl.depthMask(depthMask);
          currentDepthMask = depthMask;
        }
      },
      setFunc: function(depthFunc) {
        if (currentDepthFunc !== depthFunc) {
          if (depthFunc) {
            switch (depthFunc) {
              case NeverDepth:
                gl.depthFunc(512);
                break;
              case AlwaysDepth:
                gl.depthFunc(519);
                break;
              case LessDepth:
                gl.depthFunc(513);
                break;
              case LessEqualDepth:
                gl.depthFunc(515);
                break;
              case EqualDepth:
                gl.depthFunc(514);
                break;
              case GreaterEqualDepth:
                gl.depthFunc(518);
                break;
              case GreaterDepth:
                gl.depthFunc(516);
                break;
              case NotEqualDepth:
                gl.depthFunc(517);
                break;
              default:
                gl.depthFunc(515);
            }
          } else {
            gl.depthFunc(515);
          }
          currentDepthFunc = depthFunc;
        }
      },
      setLocked: function(lock) {
        locked = lock;
      },
      setClear: function(depth) {
        if (currentDepthClear !== depth) {
          gl.clearDepth(depth);
          currentDepthClear = depth;
        }
      },
      reset: function() {
        locked = false;
        currentDepthMask = null;
        currentDepthFunc = null;
        currentDepthClear = null;
      }
    };
  }
  function StencilBuffer() {
    let locked = false;
    let currentStencilMask = null;
    let currentStencilFunc = null;
    let currentStencilRef = null;
    let currentStencilFuncMask = null;
    let currentStencilFail = null;
    let currentStencilZFail = null;
    let currentStencilZPass = null;
    let currentStencilClear = null;
    return {
      setTest: function(stencilTest) {
        if (!locked) {
          if (stencilTest) {
            enable(2960);
          } else {
            disable(2960);
          }
        }
      },
      setMask: function(stencilMask) {
        if (currentStencilMask !== stencilMask && !locked) {
          gl.stencilMask(stencilMask);
          currentStencilMask = stencilMask;
        }
      },
      setFunc: function(stencilFunc, stencilRef, stencilMask) {
        if (currentStencilFunc !== stencilFunc || currentStencilRef !== stencilRef || currentStencilFuncMask !== stencilMask) {
          gl.stencilFunc(stencilFunc, stencilRef, stencilMask);
          currentStencilFunc = stencilFunc;
          currentStencilRef = stencilRef;
          currentStencilFuncMask = stencilMask;
        }
      },
      setOp: function(stencilFail, stencilZFail, stencilZPass) {
        if (currentStencilFail !== stencilFail || currentStencilZFail !== stencilZFail || currentStencilZPass !== stencilZPass) {
          gl.stencilOp(stencilFail, stencilZFail, stencilZPass);
          currentStencilFail = stencilFail;
          currentStencilZFail = stencilZFail;
          currentStencilZPass = stencilZPass;
        }
      },
      setLocked: function(lock) {
        locked = lock;
      },
      setClear: function(stencil) {
        if (currentStencilClear !== stencil) {
          gl.clearStencil(stencil);
          currentStencilClear = stencil;
        }
      },
      reset: function() {
        locked = false;
        currentStencilMask = null;
        currentStencilFunc = null;
        currentStencilRef = null;
        currentStencilFuncMask = null;
        currentStencilFail = null;
        currentStencilZFail = null;
        currentStencilZPass = null;
        currentStencilClear = null;
      }
    };
  }
  const colorBuffer = new ColorBuffer();
  const depthBuffer = new DepthBuffer();
  const stencilBuffer = new StencilBuffer();
  let enabledCapabilities = {};
  let currentBoundFramebuffers = {};
  let currentDrawbuffers = /* @__PURE__ */ new WeakMap();
  let defaultDrawbuffers = [];
  let currentProgram = null;
  let currentBlendingEnabled = false;
  let currentBlending = null;
  let currentBlendEquation = null;
  let currentBlendSrc = null;
  let currentBlendDst = null;
  let currentBlendEquationAlpha = null;
  let currentBlendSrcAlpha = null;
  let currentBlendDstAlpha = null;
  let currentPremultipledAlpha = false;
  let currentFlipSided = null;
  let currentCullFace = null;
  let currentLineWidth = null;
  let currentPolygonOffsetFactor = null;
  let currentPolygonOffsetUnits = null;
  const maxTextures = gl.getParameter(35661);
  let lineWidthAvailable = false;
  let version = 0;
  const glVersion = gl.getParameter(7938);
  if (glVersion.indexOf("WebGL") !== -1) {
    version = parseFloat(/^WebGL (\d)/.exec(glVersion)[1]);
    lineWidthAvailable = version >= 1;
  } else if (glVersion.indexOf("OpenGL ES") !== -1) {
    version = parseFloat(/^OpenGL ES (\d)/.exec(glVersion)[1]);
    lineWidthAvailable = version >= 2;
  }
  let currentTextureSlot = null;
  let currentBoundTextures = {};
  const scissorParam = gl.getParameter(3088);
  const viewportParam = gl.getParameter(2978);
  const currentScissor = new Vector4().fromArray(scissorParam);
  const currentViewport = new Vector4().fromArray(viewportParam);
  function createTexture(type, target, count) {
    const data = new Uint8Array(4);
    const texture = gl.createTexture();
    gl.bindTexture(type, texture);
    gl.texParameteri(type, 10241, 9728);
    gl.texParameteri(type, 10240, 9728);
    for (let i = 0; i < count; i++) {
      gl.texImage2D(target + i, 0, 6408, 1, 1, 0, 6408, 5121, data);
    }
    return texture;
  }
  const emptyTextures = {};
  emptyTextures[3553] = createTexture(3553, 3553, 1);
  emptyTextures[34067] = createTexture(34067, 34069, 6);
  colorBuffer.setClear(0, 0, 0, 1);
  depthBuffer.setClear(1);
  stencilBuffer.setClear(0);
  enable(2929);
  depthBuffer.setFunc(LessEqualDepth);
  setFlipSided(false);
  setCullFace(CullFaceBack);
  enable(2884);
  setBlending(NoBlending);
  function enable(id) {
    if (enabledCapabilities[id] !== true) {
      gl.enable(id);
      enabledCapabilities[id] = true;
    }
  }
  function disable(id) {
    if (enabledCapabilities[id] !== false) {
      gl.disable(id);
      enabledCapabilities[id] = false;
    }
  }
  function bindFramebuffer(target, framebuffer) {
    if (currentBoundFramebuffers[target] !== framebuffer) {
      gl.bindFramebuffer(target, framebuffer);
      currentBoundFramebuffers[target] = framebuffer;
      if (isWebGL2) {
        if (target === 36009) {
          currentBoundFramebuffers[36160] = framebuffer;
        }
        if (target === 36160) {
          currentBoundFramebuffers[36009] = framebuffer;
        }
      }
      return true;
    }
    return false;
  }
  function drawBuffers(renderTarget, framebuffer) {
    let drawBuffers2 = defaultDrawbuffers;
    let needsUpdate = false;
    if (renderTarget) {
      drawBuffers2 = currentDrawbuffers.get(framebuffer);
      if (drawBuffers2 === void 0) {
        drawBuffers2 = [];
        currentDrawbuffers.set(framebuffer, drawBuffers2);
      }
      if (renderTarget.isWebGLMultipleRenderTargets) {
        const textures = renderTarget.texture;
        if (drawBuffers2.length !== textures.length || drawBuffers2[0] !== 36064) {
          for (let i = 0, il = textures.length; i < il; i++) {
            drawBuffers2[i] = 36064 + i;
          }
          drawBuffers2.length = textures.length;
          needsUpdate = true;
        }
      } else {
        if (drawBuffers2[0] !== 36064) {
          drawBuffers2[0] = 36064;
          needsUpdate = true;
        }
      }
    } else {
      if (drawBuffers2[0] !== 1029) {
        drawBuffers2[0] = 1029;
        needsUpdate = true;
      }
    }
    if (needsUpdate) {
      if (capabilities.isWebGL2) {
        gl.drawBuffers(drawBuffers2);
      } else {
        extensions.get("WEBGL_draw_buffers").drawBuffersWEBGL(drawBuffers2);
      }
    }
  }
  function useProgram(program) {
    if (currentProgram !== program) {
      gl.useProgram(program);
      currentProgram = program;
      return true;
    }
    return false;
  }
  const equationToGL = {
    [AddEquation]: 32774,
    [SubtractEquation]: 32778,
    [ReverseSubtractEquation]: 32779
  };
  if (isWebGL2) {
    equationToGL[MinEquation] = 32775;
    equationToGL[MaxEquation] = 32776;
  } else {
    const extension = extensions.get("EXT_blend_minmax");
    if (extension !== null) {
      equationToGL[MinEquation] = extension.MIN_EXT;
      equationToGL[MaxEquation] = extension.MAX_EXT;
    }
  }
  const factorToGL = {
    [ZeroFactor]: 0,
    [OneFactor]: 1,
    [SrcColorFactor]: 768,
    [SrcAlphaFactor]: 770,
    [SrcAlphaSaturateFactor]: 776,
    [DstColorFactor]: 774,
    [DstAlphaFactor]: 772,
    [OneMinusSrcColorFactor]: 769,
    [OneMinusSrcAlphaFactor]: 771,
    [OneMinusDstColorFactor]: 775,
    [OneMinusDstAlphaFactor]: 773
  };
  function setBlending(blending, blendEquation, blendSrc, blendDst, blendEquationAlpha, blendSrcAlpha, blendDstAlpha, premultipliedAlpha) {
    if (blending === NoBlending) {
      if (currentBlendingEnabled === true) {
        disable(3042);
        currentBlendingEnabled = false;
      }
      return;
    }
    if (currentBlendingEnabled === false) {
      enable(3042);
      currentBlendingEnabled = true;
    }
    if (blending !== CustomBlending) {
      if (blending !== currentBlending || premultipliedAlpha !== currentPremultipledAlpha) {
        if (currentBlendEquation !== AddEquation || currentBlendEquationAlpha !== AddEquation) {
          gl.blendEquation(32774);
          currentBlendEquation = AddEquation;
          currentBlendEquationAlpha = AddEquation;
        }
        if (premultipliedAlpha) {
          switch (blending) {
            case NormalBlending:
              gl.blendFuncSeparate(1, 771, 1, 771);
              break;
            case AdditiveBlending:
              gl.blendFunc(1, 1);
              break;
            case SubtractiveBlending:
              gl.blendFuncSeparate(0, 769, 0, 1);
              break;
            case MultiplyBlending:
              gl.blendFuncSeparate(0, 768, 0, 770);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", blending);
              break;
          }
        } else {
          switch (blending) {
            case NormalBlending:
              gl.blendFuncSeparate(770, 771, 1, 771);
              break;
            case AdditiveBlending:
              gl.blendFunc(770, 1);
              break;
            case SubtractiveBlending:
              gl.blendFuncSeparate(0, 769, 0, 1);
              break;
            case MultiplyBlending:
              gl.blendFunc(0, 768);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", blending);
              break;
          }
        }
        currentBlendSrc = null;
        currentBlendDst = null;
        currentBlendSrcAlpha = null;
        currentBlendDstAlpha = null;
        currentBlending = blending;
        currentPremultipledAlpha = premultipliedAlpha;
      }
      return;
    }
    blendEquationAlpha = blendEquationAlpha || blendEquation;
    blendSrcAlpha = blendSrcAlpha || blendSrc;
    blendDstAlpha = blendDstAlpha || blendDst;
    if (blendEquation !== currentBlendEquation || blendEquationAlpha !== currentBlendEquationAlpha) {
      gl.blendEquationSeparate(equationToGL[blendEquation], equationToGL[blendEquationAlpha]);
      currentBlendEquation = blendEquation;
      currentBlendEquationAlpha = blendEquationAlpha;
    }
    if (blendSrc !== currentBlendSrc || blendDst !== currentBlendDst || blendSrcAlpha !== currentBlendSrcAlpha || blendDstAlpha !== currentBlendDstAlpha) {
      gl.blendFuncSeparate(factorToGL[blendSrc], factorToGL[blendDst], factorToGL[blendSrcAlpha], factorToGL[blendDstAlpha]);
      currentBlendSrc = blendSrc;
      currentBlendDst = blendDst;
      currentBlendSrcAlpha = blendSrcAlpha;
      currentBlendDstAlpha = blendDstAlpha;
    }
    currentBlending = blending;
    currentPremultipledAlpha = null;
  }
  function setMaterial(material, frontFaceCW) {
    material.side === DoubleSide ? disable(2884) : enable(2884);
    let flipSided = material.side === BackSide;
    if (frontFaceCW)
      flipSided = !flipSided;
    setFlipSided(flipSided);
    material.blending === NormalBlending && material.transparent === false ? setBlending(NoBlending) : setBlending(material.blending, material.blendEquation, material.blendSrc, material.blendDst, material.blendEquationAlpha, material.blendSrcAlpha, material.blendDstAlpha, material.premultipliedAlpha);
    depthBuffer.setFunc(material.depthFunc);
    depthBuffer.setTest(material.depthTest);
    depthBuffer.setMask(material.depthWrite);
    colorBuffer.setMask(material.colorWrite);
    const stencilWrite = material.stencilWrite;
    stencilBuffer.setTest(stencilWrite);
    if (stencilWrite) {
      stencilBuffer.setMask(material.stencilWriteMask);
      stencilBuffer.setFunc(material.stencilFunc, material.stencilRef, material.stencilFuncMask);
      stencilBuffer.setOp(material.stencilFail, material.stencilZFail, material.stencilZPass);
    }
    setPolygonOffset(material.polygonOffset, material.polygonOffsetFactor, material.polygonOffsetUnits);
    material.alphaToCoverage === true ? enable(32926) : disable(32926);
  }
  function setFlipSided(flipSided) {
    if (currentFlipSided !== flipSided) {
      if (flipSided) {
        gl.frontFace(2304);
      } else {
        gl.frontFace(2305);
      }
      currentFlipSided = flipSided;
    }
  }
  function setCullFace(cullFace) {
    if (cullFace !== CullFaceNone) {
      enable(2884);
      if (cullFace !== currentCullFace) {
        if (cullFace === CullFaceBack) {
          gl.cullFace(1029);
        } else if (cullFace === CullFaceFront) {
          gl.cullFace(1028);
        } else {
          gl.cullFace(1032);
        }
      }
    } else {
      disable(2884);
    }
    currentCullFace = cullFace;
  }
  function setLineWidth(width) {
    if (width !== currentLineWidth) {
      if (lineWidthAvailable)
        gl.lineWidth(width);
      currentLineWidth = width;
    }
  }
  function setPolygonOffset(polygonOffset, factor, units) {
    if (polygonOffset) {
      enable(32823);
      if (currentPolygonOffsetFactor !== factor || currentPolygonOffsetUnits !== units) {
        gl.polygonOffset(factor, units);
        currentPolygonOffsetFactor = factor;
        currentPolygonOffsetUnits = units;
      }
    } else {
      disable(32823);
    }
  }
  function setScissorTest(scissorTest) {
    if (scissorTest) {
      enable(3089);
    } else {
      disable(3089);
    }
  }
  function activeTexture(webglSlot) {
    if (webglSlot === void 0)
      webglSlot = 33984 + maxTextures - 1;
    if (currentTextureSlot !== webglSlot) {
      gl.activeTexture(webglSlot);
      currentTextureSlot = webglSlot;
    }
  }
  function bindTexture(webglType, webglTexture) {
    if (currentTextureSlot === null) {
      activeTexture();
    }
    let boundTexture = currentBoundTextures[currentTextureSlot];
    if (boundTexture === void 0) {
      boundTexture = { type: void 0, texture: void 0 };
      currentBoundTextures[currentTextureSlot] = boundTexture;
    }
    if (boundTexture.type !== webglType || boundTexture.texture !== webglTexture) {
      gl.bindTexture(webglType, webglTexture || emptyTextures[webglType]);
      boundTexture.type = webglType;
      boundTexture.texture = webglTexture;
    }
  }
  function unbindTexture() {
    const boundTexture = currentBoundTextures[currentTextureSlot];
    if (boundTexture !== void 0 && boundTexture.type !== void 0) {
      gl.bindTexture(boundTexture.type, null);
      boundTexture.type = void 0;
      boundTexture.texture = void 0;
    }
  }
  function compressedTexImage2D() {
    try {
      gl.compressedTexImage2D.apply(gl, arguments);
    } catch (error) {
      console.error("THREE.WebGLState:", error);
    }
  }
  function texSubImage2D() {
    try {
      gl.texSubImage2D.apply(gl, arguments);
    } catch (error) {
      console.error("THREE.WebGLState:", error);
    }
  }
  function texSubImage3D() {
    try {
      gl.texSubImage3D.apply(gl, arguments);
    } catch (error) {
      console.error("THREE.WebGLState:", error);
    }
  }
  function compressedTexSubImage2D() {
    try {
      gl.compressedTexSubImage2D.apply(gl, arguments);
    } catch (error) {
      console.error("THREE.WebGLState:", error);
    }
  }
  function texStorage2D() {
    try {
      gl.texStorage2D.apply(gl, arguments);
    } catch (error) {
      console.error("THREE.WebGLState:", error);
    }
  }
  function texStorage3D() {
    try {
      gl.texStorage3D.apply(gl, arguments);
    } catch (error) {
      console.error("THREE.WebGLState:", error);
    }
  }
  function texImage2D() {
    try {
      gl.texImage2D.apply(gl, arguments);
    } catch (error) {
      console.error("THREE.WebGLState:", error);
    }
  }
  function texImage3D() {
    try {
      gl.texImage3D.apply(gl, arguments);
    } catch (error) {
      console.error("THREE.WebGLState:", error);
    }
  }
  function scissor(scissor2) {
    if (currentScissor.equals(scissor2) === false) {
      gl.scissor(scissor2.x, scissor2.y, scissor2.z, scissor2.w);
      currentScissor.copy(scissor2);
    }
  }
  function viewport(viewport2) {
    if (currentViewport.equals(viewport2) === false) {
      gl.viewport(viewport2.x, viewport2.y, viewport2.z, viewport2.w);
      currentViewport.copy(viewport2);
    }
  }
  function reset() {
    gl.disable(3042);
    gl.disable(2884);
    gl.disable(2929);
    gl.disable(32823);
    gl.disable(3089);
    gl.disable(2960);
    gl.disable(32926);
    gl.blendEquation(32774);
    gl.blendFunc(1, 0);
    gl.blendFuncSeparate(1, 0, 1, 0);
    gl.colorMask(true, true, true, true);
    gl.clearColor(0, 0, 0, 0);
    gl.depthMask(true);
    gl.depthFunc(513);
    gl.clearDepth(1);
    gl.stencilMask(4294967295);
    gl.stencilFunc(519, 0, 4294967295);
    gl.stencilOp(7680, 7680, 7680);
    gl.clearStencil(0);
    gl.cullFace(1029);
    gl.frontFace(2305);
    gl.polygonOffset(0, 0);
    gl.activeTexture(33984);
    gl.bindFramebuffer(36160, null);
    if (isWebGL2 === true) {
      gl.bindFramebuffer(36009, null);
      gl.bindFramebuffer(36008, null);
    }
    gl.useProgram(null);
    gl.lineWidth(1);
    gl.scissor(0, 0, gl.canvas.width, gl.canvas.height);
    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
    enabledCapabilities = {};
    currentTextureSlot = null;
    currentBoundTextures = {};
    currentBoundFramebuffers = {};
    currentDrawbuffers = /* @__PURE__ */ new WeakMap();
    defaultDrawbuffers = [];
    currentProgram = null;
    currentBlendingEnabled = false;
    currentBlending = null;
    currentBlendEquation = null;
    currentBlendSrc = null;
    currentBlendDst = null;
    currentBlendEquationAlpha = null;
    currentBlendSrcAlpha = null;
    currentBlendDstAlpha = null;
    currentPremultipledAlpha = false;
    currentFlipSided = null;
    currentCullFace = null;
    currentLineWidth = null;
    currentPolygonOffsetFactor = null;
    currentPolygonOffsetUnits = null;
    currentScissor.set(0, 0, gl.canvas.width, gl.canvas.height);
    currentViewport.set(0, 0, gl.canvas.width, gl.canvas.height);
    colorBuffer.reset();
    depthBuffer.reset();
    stencilBuffer.reset();
  }
  return {
    buffers: {
      color: colorBuffer,
      depth: depthBuffer,
      stencil: stencilBuffer
    },
    enable,
    disable,
    bindFramebuffer,
    drawBuffers,
    useProgram,
    setBlending,
    setMaterial,
    setFlipSided,
    setCullFace,
    setLineWidth,
    setPolygonOffset,
    setScissorTest,
    activeTexture,
    bindTexture,
    unbindTexture,
    compressedTexImage2D,
    texImage2D,
    texImage3D,
    texStorage2D,
    texStorage3D,
    texSubImage2D,
    texSubImage3D,
    compressedTexSubImage2D,
    scissor,
    viewport,
    reset
  };
}
function WebGLTextures(_gl, extensions, state, properties, capabilities, utils, info) {
  const isWebGL2 = capabilities.isWebGL2;
  const maxTextures = capabilities.maxTextures;
  const maxCubemapSize = capabilities.maxCubemapSize;
  const maxTextureSize = capabilities.maxTextureSize;
  const maxSamples = capabilities.maxSamples;
  const multisampledRTTExt = extensions.has("WEBGL_multisampled_render_to_texture") ? extensions.get("WEBGL_multisampled_render_to_texture") : null;
  const supportsInvalidateFramebuffer = /OculusBrowser/g.test(navigator.userAgent);
  const _videoTextures = /* @__PURE__ */ new WeakMap();
  let _canvas2;
  const _sources = /* @__PURE__ */ new WeakMap();
  let useOffscreenCanvas = false;
  try {
    useOffscreenCanvas = typeof OffscreenCanvas !== "undefined" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch (err) {
  }
  function createCanvas(width, height) {
    return useOffscreenCanvas ? new OffscreenCanvas(width, height) : createElementNS("canvas");
  }
  function resizeImage(image, needsPowerOfTwo, needsNewCanvas, maxSize) {
    let scale = 1;
    if (image.width > maxSize || image.height > maxSize) {
      scale = maxSize / Math.max(image.width, image.height);
    }
    if (scale < 1 || needsPowerOfTwo === true) {
      if (typeof HTMLImageElement !== "undefined" && image instanceof HTMLImageElement || typeof HTMLCanvasElement !== "undefined" && image instanceof HTMLCanvasElement || typeof ImageBitmap !== "undefined" && image instanceof ImageBitmap) {
        const floor = needsPowerOfTwo ? floorPowerOfTwo : Math.floor;
        const width = floor(scale * image.width);
        const height = floor(scale * image.height);
        if (_canvas2 === void 0)
          _canvas2 = createCanvas(width, height);
        const canvas = needsNewCanvas ? createCanvas(width, height) : _canvas2;
        canvas.width = width;
        canvas.height = height;
        const context = canvas.getContext("2d");
        context.drawImage(image, 0, 0, width, height);
        console.warn("THREE.WebGLRenderer: Texture has been resized from (" + image.width + "x" + image.height + ") to (" + width + "x" + height + ").");
        return canvas;
      } else {
        if ("data" in image) {
          console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + image.width + "x" + image.height + ").");
        }
        return image;
      }
    }
    return image;
  }
  function isPowerOfTwo$1(image) {
    return isPowerOfTwo(image.width) && isPowerOfTwo(image.height);
  }
  function textureNeedsPowerOfTwo(texture) {
    if (isWebGL2)
      return false;
    return texture.wrapS !== ClampToEdgeWrapping || texture.wrapT !== ClampToEdgeWrapping || texture.minFilter !== NearestFilter && texture.minFilter !== LinearFilter;
  }
  function textureNeedsGenerateMipmaps(texture, supportsMips) {
    return texture.generateMipmaps && supportsMips && texture.minFilter !== NearestFilter && texture.minFilter !== LinearFilter;
  }
  function generateMipmap(target) {
    _gl.generateMipmap(target);
  }
  function getInternalFormat(internalFormatName, glFormat, glType, encoding, isVideoTexture = false) {
    if (isWebGL2 === false)
      return glFormat;
    if (internalFormatName !== null) {
      if (_gl[internalFormatName] !== void 0)
        return _gl[internalFormatName];
      console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + internalFormatName + "'");
    }
    let internalFormat = glFormat;
    if (glFormat === 6403) {
      if (glType === 5126)
        internalFormat = 33326;
      if (glType === 5131)
        internalFormat = 33325;
      if (glType === 5121)
        internalFormat = 33321;
    }
    if (glFormat === 33319) {
      if (glType === 5126)
        internalFormat = 33328;
      if (glType === 5131)
        internalFormat = 33327;
      if (glType === 5121)
        internalFormat = 33323;
    }
    if (glFormat === 6408) {
      if (glType === 5126)
        internalFormat = 34836;
      if (glType === 5131)
        internalFormat = 34842;
      if (glType === 5121)
        internalFormat = encoding === sRGBEncoding && isVideoTexture === false ? 35907 : 32856;
      if (glType === 32819)
        internalFormat = 32854;
      if (glType === 32820)
        internalFormat = 32855;
    }
    if (internalFormat === 33325 || internalFormat === 33326 || internalFormat === 33327 || internalFormat === 33328 || internalFormat === 34842 || internalFormat === 34836) {
      extensions.get("EXT_color_buffer_float");
    }
    return internalFormat;
  }
  function getMipLevels(texture, image, supportsMips) {
    if (textureNeedsGenerateMipmaps(texture, supportsMips) === true || texture.isFramebufferTexture && texture.minFilter !== NearestFilter && texture.minFilter !== LinearFilter) {
      return Math.log2(Math.max(image.width, image.height)) + 1;
    } else if (texture.mipmaps !== void 0 && texture.mipmaps.length > 0) {
      return texture.mipmaps.length;
    } else if (texture.isCompressedTexture && Array.isArray(texture.image)) {
      return image.mipmaps.length;
    } else {
      return 1;
    }
  }
  function filterFallback(f) {
    if (f === NearestFilter || f === NearestMipmapNearestFilter || f === NearestMipmapLinearFilter) {
      return 9728;
    }
    return 9729;
  }
  function onTextureDispose(event) {
    const texture = event.target;
    texture.removeEventListener("dispose", onTextureDispose);
    deallocateTexture(texture);
    if (texture.isVideoTexture) {
      _videoTextures.delete(texture);
    }
  }
  function onRenderTargetDispose(event) {
    const renderTarget = event.target;
    renderTarget.removeEventListener("dispose", onRenderTargetDispose);
    deallocateRenderTarget(renderTarget);
  }
  function deallocateTexture(texture) {
    const textureProperties = properties.get(texture);
    if (textureProperties.__webglInit === void 0)
      return;
    const source = texture.source;
    const webglTextures = _sources.get(source);
    if (webglTextures) {
      const webglTexture = webglTextures[textureProperties.__cacheKey];
      webglTexture.usedTimes--;
      if (webglTexture.usedTimes === 0) {
        deleteTexture(texture);
      }
      if (Object.keys(webglTextures).length === 0) {
        _sources.delete(source);
      }
    }
    properties.remove(texture);
  }
  function deleteTexture(texture) {
    const textureProperties = properties.get(texture);
    _gl.deleteTexture(textureProperties.__webglTexture);
    const source = texture.source;
    const webglTextures = _sources.get(source);
    delete webglTextures[textureProperties.__cacheKey];
    info.memory.textures--;
  }
  function deallocateRenderTarget(renderTarget) {
    const texture = renderTarget.texture;
    const renderTargetProperties = properties.get(renderTarget);
    const textureProperties = properties.get(texture);
    if (textureProperties.__webglTexture !== void 0) {
      _gl.deleteTexture(textureProperties.__webglTexture);
      info.memory.textures--;
    }
    if (renderTarget.depthTexture) {
      renderTarget.depthTexture.dispose();
    }
    if (renderTarget.isWebGLCubeRenderTarget) {
      for (let i = 0; i < 6; i++) {
        _gl.deleteFramebuffer(renderTargetProperties.__webglFramebuffer[i]);
        if (renderTargetProperties.__webglDepthbuffer)
          _gl.deleteRenderbuffer(renderTargetProperties.__webglDepthbuffer[i]);
      }
    } else {
      _gl.deleteFramebuffer(renderTargetProperties.__webglFramebuffer);
      if (renderTargetProperties.__webglDepthbuffer)
        _gl.deleteRenderbuffer(renderTargetProperties.__webglDepthbuffer);
      if (renderTargetProperties.__webglMultisampledFramebuffer)
        _gl.deleteFramebuffer(renderTargetProperties.__webglMultisampledFramebuffer);
      if (renderTargetProperties.__webglColorRenderbuffer)
        _gl.deleteRenderbuffer(renderTargetProperties.__webglColorRenderbuffer);
      if (renderTargetProperties.__webglDepthRenderbuffer)
        _gl.deleteRenderbuffer(renderTargetProperties.__webglDepthRenderbuffer);
    }
    if (renderTarget.isWebGLMultipleRenderTargets) {
      for (let i = 0, il = texture.length; i < il; i++) {
        const attachmentProperties = properties.get(texture[i]);
        if (attachmentProperties.__webglTexture) {
          _gl.deleteTexture(attachmentProperties.__webglTexture);
          info.memory.textures--;
        }
        properties.remove(texture[i]);
      }
    }
    properties.remove(texture);
    properties.remove(renderTarget);
  }
  let textureUnits = 0;
  function resetTextureUnits() {
    textureUnits = 0;
  }
  function allocateTextureUnit() {
    const textureUnit = textureUnits;
    if (textureUnit >= maxTextures) {
      console.warn("THREE.WebGLTextures: Trying to use " + textureUnit + " texture units while this GPU supports only " + maxTextures);
    }
    textureUnits += 1;
    return textureUnit;
  }
  function getTextureCacheKey(texture) {
    const array = [];
    array.push(texture.wrapS);
    array.push(texture.wrapT);
    array.push(texture.magFilter);
    array.push(texture.minFilter);
    array.push(texture.anisotropy);
    array.push(texture.internalFormat);
    array.push(texture.format);
    array.push(texture.type);
    array.push(texture.generateMipmaps);
    array.push(texture.premultiplyAlpha);
    array.push(texture.flipY);
    array.push(texture.unpackAlignment);
    array.push(texture.encoding);
    return array.join();
  }
  function setTexture2D(texture, slot) {
    const textureProperties = properties.get(texture);
    if (texture.isVideoTexture)
      updateVideoTexture(texture);
    if (texture.isRenderTargetTexture === false && texture.version > 0 && textureProperties.__version !== texture.version) {
      const image = texture.image;
      if (image === null) {
        console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");
      } else if (image.complete === false) {
        console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
      } else {
        uploadTexture(textureProperties, texture, slot);
        return;
      }
    }
    state.activeTexture(33984 + slot);
    state.bindTexture(3553, textureProperties.__webglTexture);
  }
  function setTexture2DArray(texture, slot) {
    const textureProperties = properties.get(texture);
    if (texture.version > 0 && textureProperties.__version !== texture.version) {
      uploadTexture(textureProperties, texture, slot);
      return;
    }
    state.activeTexture(33984 + slot);
    state.bindTexture(35866, textureProperties.__webglTexture);
  }
  function setTexture3D(texture, slot) {
    const textureProperties = properties.get(texture);
    if (texture.version > 0 && textureProperties.__version !== texture.version) {
      uploadTexture(textureProperties, texture, slot);
      return;
    }
    state.activeTexture(33984 + slot);
    state.bindTexture(32879, textureProperties.__webglTexture);
  }
  function setTextureCube(texture, slot) {
    const textureProperties = properties.get(texture);
    if (texture.version > 0 && textureProperties.__version !== texture.version) {
      uploadCubeTexture(textureProperties, texture, slot);
      return;
    }
    state.activeTexture(33984 + slot);
    state.bindTexture(34067, textureProperties.__webglTexture);
  }
  const wrappingToGL = {
    [RepeatWrapping]: 10497,
    [ClampToEdgeWrapping]: 33071,
    [MirroredRepeatWrapping]: 33648
  };
  const filterToGL = {
    [NearestFilter]: 9728,
    [NearestMipmapNearestFilter]: 9984,
    [NearestMipmapLinearFilter]: 9986,
    [LinearFilter]: 9729,
    [LinearMipmapNearestFilter]: 9985,
    [LinearMipmapLinearFilter]: 9987
  };
  function setTextureParameters(textureType, texture, supportsMips) {
    if (supportsMips) {
      _gl.texParameteri(textureType, 10242, wrappingToGL[texture.wrapS]);
      _gl.texParameteri(textureType, 10243, wrappingToGL[texture.wrapT]);
      if (textureType === 32879 || textureType === 35866) {
        _gl.texParameteri(textureType, 32882, wrappingToGL[texture.wrapR]);
      }
      _gl.texParameteri(textureType, 10240, filterToGL[texture.magFilter]);
      _gl.texParameteri(textureType, 10241, filterToGL[texture.minFilter]);
    } else {
      _gl.texParameteri(textureType, 10242, 33071);
      _gl.texParameteri(textureType, 10243, 33071);
      if (textureType === 32879 || textureType === 35866) {
        _gl.texParameteri(textureType, 32882, 33071);
      }
      if (texture.wrapS !== ClampToEdgeWrapping || texture.wrapT !== ClampToEdgeWrapping) {
        console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping.");
      }
      _gl.texParameteri(textureType, 10240, filterFallback(texture.magFilter));
      _gl.texParameteri(textureType, 10241, filterFallback(texture.minFilter));
      if (texture.minFilter !== NearestFilter && texture.minFilter !== LinearFilter) {
        console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.");
      }
    }
    if (extensions.has("EXT_texture_filter_anisotropic") === true) {
      const extension = extensions.get("EXT_texture_filter_anisotropic");
      if (texture.type === FloatType && extensions.has("OES_texture_float_linear") === false)
        return;
      if (isWebGL2 === false && (texture.type === HalfFloatType && extensions.has("OES_texture_half_float_linear") === false))
        return;
      if (texture.anisotropy > 1 || properties.get(texture).__currentAnisotropy) {
        _gl.texParameterf(textureType, extension.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(texture.anisotropy, capabilities.getMaxAnisotropy()));
        properties.get(texture).__currentAnisotropy = texture.anisotropy;
      }
    }
  }
  function initTexture(textureProperties, texture) {
    let forceUpload = false;
    if (textureProperties.__webglInit === void 0) {
      textureProperties.__webglInit = true;
      texture.addEventListener("dispose", onTextureDispose);
    }
    const source = texture.source;
    let webglTextures = _sources.get(source);
    if (webglTextures === void 0) {
      webglTextures = {};
      _sources.set(source, webglTextures);
    }
    const textureCacheKey = getTextureCacheKey(texture);
    if (textureCacheKey !== textureProperties.__cacheKey) {
      if (webglTextures[textureCacheKey] === void 0) {
        webglTextures[textureCacheKey] = {
          texture: _gl.createTexture(),
          usedTimes: 0
        };
        info.memory.textures++;
        forceUpload = true;
      }
      webglTextures[textureCacheKey].usedTimes++;
      const webglTexture = webglTextures[textureProperties.__cacheKey];
      if (webglTexture !== void 0) {
        webglTextures[textureProperties.__cacheKey].usedTimes--;
        if (webglTexture.usedTimes === 0) {
          deleteTexture(texture);
        }
      }
      textureProperties.__cacheKey = textureCacheKey;
      textureProperties.__webglTexture = webglTextures[textureCacheKey].texture;
    }
    return forceUpload;
  }
  function uploadTexture(textureProperties, texture, slot) {
    let textureType = 3553;
    if (texture.isDataArrayTexture)
      textureType = 35866;
    if (texture.isData3DTexture)
      textureType = 32879;
    const forceUpload = initTexture(textureProperties, texture);
    const source = texture.source;
    state.activeTexture(33984 + slot);
    state.bindTexture(textureType, textureProperties.__webglTexture);
    if (source.version !== source.__currentVersion || forceUpload === true) {
      _gl.pixelStorei(37440, texture.flipY);
      _gl.pixelStorei(37441, texture.premultiplyAlpha);
      _gl.pixelStorei(3317, texture.unpackAlignment);
      _gl.pixelStorei(37443, 0);
      const needsPowerOfTwo = textureNeedsPowerOfTwo(texture) && isPowerOfTwo$1(texture.image) === false;
      let image = resizeImage(texture.image, needsPowerOfTwo, false, maxTextureSize);
      image = verifyColorSpace(texture, image);
      const supportsMips = isPowerOfTwo$1(image) || isWebGL2, glFormat = utils.convert(texture.format, texture.encoding);
      let glType = utils.convert(texture.type), glInternalFormat = getInternalFormat(texture.internalFormat, glFormat, glType, texture.encoding, texture.isVideoTexture);
      setTextureParameters(textureType, texture, supportsMips);
      let mipmap;
      const mipmaps = texture.mipmaps;
      const useTexStorage = isWebGL2 && texture.isVideoTexture !== true;
      const allocateMemory = textureProperties.__version === void 0;
      const levels = getMipLevels(texture, image, supportsMips);
      if (texture.isDepthTexture) {
        glInternalFormat = 6402;
        if (isWebGL2) {
          if (texture.type === FloatType) {
            glInternalFormat = 36012;
          } else if (texture.type === UnsignedIntType) {
            glInternalFormat = 33190;
          } else if (texture.type === UnsignedInt248Type) {
            glInternalFormat = 35056;
          } else {
            glInternalFormat = 33189;
          }
        } else {
          if (texture.type === FloatType) {
            console.error("WebGLRenderer: Floating point depth texture requires WebGL2.");
          }
        }
        if (texture.format === DepthFormat && glInternalFormat === 6402) {
          if (texture.type !== UnsignedShortType && texture.type !== UnsignedIntType) {
            console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture.");
            texture.type = UnsignedShortType;
            glType = utils.convert(texture.type);
          }
        }
        if (texture.format === DepthStencilFormat && glInternalFormat === 6402) {
          glInternalFormat = 34041;
          if (texture.type !== UnsignedInt248Type) {
            console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture.");
            texture.type = UnsignedInt248Type;
            glType = utils.convert(texture.type);
          }
        }
        if (useTexStorage && allocateMemory) {
          state.texStorage2D(3553, 1, glInternalFormat, image.width, image.height);
        } else {
          state.texImage2D(3553, 0, glInternalFormat, image.width, image.height, 0, glFormat, glType, null);
        }
      } else if (texture.isDataTexture) {
        if (mipmaps.length > 0 && supportsMips) {
          if (useTexStorage && allocateMemory) {
            state.texStorage2D(3553, levels, glInternalFormat, mipmaps[0].width, mipmaps[0].height);
          }
          for (let i = 0, il = mipmaps.length; i < il; i++) {
            mipmap = mipmaps[i];
            if (useTexStorage) {
              state.texSubImage2D(3553, i, 0, 0, mipmap.width, mipmap.height, glFormat, glType, mipmap.data);
            } else {
              state.texImage2D(3553, i, glInternalFormat, mipmap.width, mipmap.height, 0, glFormat, glType, mipmap.data);
            }
          }
          texture.generateMipmaps = false;
        } else {
          if (useTexStorage) {
            if (allocateMemory) {
              state.texStorage2D(3553, levels, glInternalFormat, image.width, image.height);
            }
            state.texSubImage2D(3553, 0, 0, 0, image.width, image.height, glFormat, glType, image.data);
          } else {
            state.texImage2D(3553, 0, glInternalFormat, image.width, image.height, 0, glFormat, glType, image.data);
          }
        }
      } else if (texture.isCompressedTexture) {
        if (useTexStorage && allocateMemory) {
          state.texStorage2D(3553, levels, glInternalFormat, mipmaps[0].width, mipmaps[0].height);
        }
        for (let i = 0, il = mipmaps.length; i < il; i++) {
          mipmap = mipmaps[i];
          if (texture.format !== RGBAFormat) {
            if (glFormat !== null) {
              if (useTexStorage) {
                state.compressedTexSubImage2D(3553, i, 0, 0, mipmap.width, mipmap.height, glFormat, mipmap.data);
              } else {
                state.compressedTexImage2D(3553, i, glInternalFormat, mipmap.width, mipmap.height, 0, mipmap.data);
              }
            } else {
              console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");
            }
          } else {
            if (useTexStorage) {
              state.texSubImage2D(3553, i, 0, 0, mipmap.width, mipmap.height, glFormat, glType, mipmap.data);
            } else {
              state.texImage2D(3553, i, glInternalFormat, mipmap.width, mipmap.height, 0, glFormat, glType, mipmap.data);
            }
          }
        }
      } else if (texture.isDataArrayTexture) {
        if (useTexStorage) {
          if (allocateMemory) {
            state.texStorage3D(35866, levels, glInternalFormat, image.width, image.height, image.depth);
          }
          state.texSubImage3D(35866, 0, 0, 0, 0, image.width, image.height, image.depth, glFormat, glType, image.data);
        } else {
          state.texImage3D(35866, 0, glInternalFormat, image.width, image.height, image.depth, 0, glFormat, glType, image.data);
        }
      } else if (texture.isData3DTexture) {
        if (useTexStorage) {
          if (allocateMemory) {
            state.texStorage3D(32879, levels, glInternalFormat, image.width, image.height, image.depth);
          }
          state.texSubImage3D(32879, 0, 0, 0, 0, image.width, image.height, image.depth, glFormat, glType, image.data);
        } else {
          state.texImage3D(32879, 0, glInternalFormat, image.width, image.height, image.depth, 0, glFormat, glType, image.data);
        }
      } else if (texture.isFramebufferTexture) {
        if (useTexStorage && allocateMemory) {
          state.texStorage2D(3553, levels, glInternalFormat, image.width, image.height);
        } else {
          state.texImage2D(3553, 0, glInternalFormat, image.width, image.height, 0, glFormat, glType, null);
        }
      } else {
        if (mipmaps.length > 0 && supportsMips) {
          if (useTexStorage && allocateMemory) {
            state.texStorage2D(3553, levels, glInternalFormat, mipmaps[0].width, mipmaps[0].height);
          }
          for (let i = 0, il = mipmaps.length; i < il; i++) {
            mipmap = mipmaps[i];
            if (useTexStorage) {
              state.texSubImage2D(3553, i, 0, 0, glFormat, glType, mipmap);
            } else {
              state.texImage2D(3553, i, glInternalFormat, glFormat, glType, mipmap);
            }
          }
          texture.generateMipmaps = false;
        } else {
          if (useTexStorage) {
            if (allocateMemory) {
              state.texStorage2D(3553, levels, glInternalFormat, image.width, image.height);
            }
            state.texSubImage2D(3553, 0, 0, 0, glFormat, glType, image);
          } else {
            state.texImage2D(3553, 0, glInternalFormat, glFormat, glType, image);
          }
        }
      }
      if (textureNeedsGenerateMipmaps(texture, supportsMips)) {
        generateMipmap(textureType);
      }
      source.__currentVersion = source.version;
      if (texture.onUpdate)
        texture.onUpdate(texture);
    }
    textureProperties.__version = texture.version;
  }
  function uploadCubeTexture(textureProperties, texture, slot) {
    if (texture.image.length !== 6)
      return;
    const forceUpload = initTexture(textureProperties, texture);
    const source = texture.source;
    state.activeTexture(33984 + slot);
    state.bindTexture(34067, textureProperties.__webglTexture);
    if (source.version !== source.__currentVersion || forceUpload === true) {
      _gl.pixelStorei(37440, texture.flipY);
      _gl.pixelStorei(37441, texture.premultiplyAlpha);
      _gl.pixelStorei(3317, texture.unpackAlignment);
      _gl.pixelStorei(37443, 0);
      const isCompressed = texture.isCompressedTexture || texture.image[0].isCompressedTexture;
      const isDataTexture = texture.image[0] && texture.image[0].isDataTexture;
      const cubeImage = [];
      for (let i = 0; i < 6; i++) {
        if (!isCompressed && !isDataTexture) {
          cubeImage[i] = resizeImage(texture.image[i], false, true, maxCubemapSize);
        } else {
          cubeImage[i] = isDataTexture ? texture.image[i].image : texture.image[i];
        }
        cubeImage[i] = verifyColorSpace(texture, cubeImage[i]);
      }
      const image = cubeImage[0], supportsMips = isPowerOfTwo$1(image) || isWebGL2, glFormat = utils.convert(texture.format, texture.encoding), glType = utils.convert(texture.type), glInternalFormat = getInternalFormat(texture.internalFormat, glFormat, glType, texture.encoding);
      const useTexStorage = isWebGL2 && texture.isVideoTexture !== true;
      const allocateMemory = textureProperties.__version === void 0;
      let levels = getMipLevels(texture, image, supportsMips);
      setTextureParameters(34067, texture, supportsMips);
      let mipmaps;
      if (isCompressed) {
        if (useTexStorage && allocateMemory) {
          state.texStorage2D(34067, levels, glInternalFormat, image.width, image.height);
        }
        for (let i = 0; i < 6; i++) {
          mipmaps = cubeImage[i].mipmaps;
          for (let j = 0; j < mipmaps.length; j++) {
            const mipmap = mipmaps[j];
            if (texture.format !== RGBAFormat) {
              if (glFormat !== null) {
                if (useTexStorage) {
                  state.compressedTexSubImage2D(34069 + i, j, 0, 0, mipmap.width, mipmap.height, glFormat, mipmap.data);
                } else {
                  state.compressedTexImage2D(34069 + i, j, glInternalFormat, mipmap.width, mipmap.height, 0, mipmap.data);
                }
              } else {
                console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");
              }
            } else {
              if (useTexStorage) {
                state.texSubImage2D(34069 + i, j, 0, 0, mipmap.width, mipmap.height, glFormat, glType, mipmap.data);
              } else {
                state.texImage2D(34069 + i, j, glInternalFormat, mipmap.width, mipmap.height, 0, glFormat, glType, mipmap.data);
              }
            }
          }
        }
      } else {
        mipmaps = texture.mipmaps;
        if (useTexStorage && allocateMemory) {
          if (mipmaps.length > 0)
            levels++;
          state.texStorage2D(34067, levels, glInternalFormat, cubeImage[0].width, cubeImage[0].height);
        }
        for (let i = 0; i < 6; i++) {
          if (isDataTexture) {
            if (useTexStorage) {
              state.texSubImage2D(34069 + i, 0, 0, 0, cubeImage[i].width, cubeImage[i].height, glFormat, glType, cubeImage[i].data);
            } else {
              state.texImage2D(34069 + i, 0, glInternalFormat, cubeImage[i].width, cubeImage[i].height, 0, glFormat, glType, cubeImage[i].data);
            }
            for (let j = 0; j < mipmaps.length; j++) {
              const mipmap = mipmaps[j];
              const mipmapImage = mipmap.image[i].image;
              if (useTexStorage) {
                state.texSubImage2D(34069 + i, j + 1, 0, 0, mipmapImage.width, mipmapImage.height, glFormat, glType, mipmapImage.data);
              } else {
                state.texImage2D(34069 + i, j + 1, glInternalFormat, mipmapImage.width, mipmapImage.height, 0, glFormat, glType, mipmapImage.data);
              }
            }
          } else {
            if (useTexStorage) {
              state.texSubImage2D(34069 + i, 0, 0, 0, glFormat, glType, cubeImage[i]);
            } else {
              state.texImage2D(34069 + i, 0, glInternalFormat, glFormat, glType, cubeImage[i]);
            }
            for (let j = 0; j < mipmaps.length; j++) {
              const mipmap = mipmaps[j];
              if (useTexStorage) {
                state.texSubImage2D(34069 + i, j + 1, 0, 0, glFormat, glType, mipmap.image[i]);
              } else {
                state.texImage2D(34069 + i, j + 1, glInternalFormat, glFormat, glType, mipmap.image[i]);
              }
            }
          }
        }
      }
      if (textureNeedsGenerateMipmaps(texture, supportsMips)) {
        generateMipmap(34067);
      }
      source.__currentVersion = source.version;
      if (texture.onUpdate)
        texture.onUpdate(texture);
    }
    textureProperties.__version = texture.version;
  }
  function setupFrameBufferTexture(framebuffer, renderTarget, texture, attachment, textureTarget) {
    const glFormat = utils.convert(texture.format, texture.encoding);
    const glType = utils.convert(texture.type);
    const glInternalFormat = getInternalFormat(texture.internalFormat, glFormat, glType, texture.encoding);
    const renderTargetProperties = properties.get(renderTarget);
    if (!renderTargetProperties.__hasExternalTextures) {
      if (textureTarget === 32879 || textureTarget === 35866) {
        state.texImage3D(textureTarget, 0, glInternalFormat, renderTarget.width, renderTarget.height, renderTarget.depth, 0, glFormat, glType, null);
      } else {
        state.texImage2D(textureTarget, 0, glInternalFormat, renderTarget.width, renderTarget.height, 0, glFormat, glType, null);
      }
    }
    state.bindFramebuffer(36160, framebuffer);
    if (useMultisampledRTT(renderTarget)) {
      multisampledRTTExt.framebufferTexture2DMultisampleEXT(36160, attachment, textureTarget, properties.get(texture).__webglTexture, 0, getRenderTargetSamples(renderTarget));
    } else {
      _gl.framebufferTexture2D(36160, attachment, textureTarget, properties.get(texture).__webglTexture, 0);
    }
    state.bindFramebuffer(36160, null);
  }
  function setupRenderBufferStorage(renderbuffer, renderTarget, isMultisample) {
    _gl.bindRenderbuffer(36161, renderbuffer);
    if (renderTarget.depthBuffer && !renderTarget.stencilBuffer) {
      let glInternalFormat = 33189;
      if (isMultisample || useMultisampledRTT(renderTarget)) {
        const depthTexture = renderTarget.depthTexture;
        if (depthTexture && depthTexture.isDepthTexture) {
          if (depthTexture.type === FloatType) {
            glInternalFormat = 36012;
          } else if (depthTexture.type === UnsignedIntType) {
            glInternalFormat = 33190;
          }
        }
        const samples = getRenderTargetSamples(renderTarget);
        if (useMultisampledRTT(renderTarget)) {
          multisampledRTTExt.renderbufferStorageMultisampleEXT(36161, samples, glInternalFormat, renderTarget.width, renderTarget.height);
        } else {
          _gl.renderbufferStorageMultisample(36161, samples, glInternalFormat, renderTarget.width, renderTarget.height);
        }
      } else {
        _gl.renderbufferStorage(36161, glInternalFormat, renderTarget.width, renderTarget.height);
      }
      _gl.framebufferRenderbuffer(36160, 36096, 36161, renderbuffer);
    } else if (renderTarget.depthBuffer && renderTarget.stencilBuffer) {
      const samples = getRenderTargetSamples(renderTarget);
      if (isMultisample && useMultisampledRTT(renderTarget) === false) {
        _gl.renderbufferStorageMultisample(36161, samples, 35056, renderTarget.width, renderTarget.height);
      } else if (useMultisampledRTT(renderTarget)) {
        multisampledRTTExt.renderbufferStorageMultisampleEXT(36161, samples, 35056, renderTarget.width, renderTarget.height);
      } else {
        _gl.renderbufferStorage(36161, 34041, renderTarget.width, renderTarget.height);
      }
      _gl.framebufferRenderbuffer(36160, 33306, 36161, renderbuffer);
    } else {
      const texture = renderTarget.isWebGLMultipleRenderTargets === true ? renderTarget.texture[0] : renderTarget.texture;
      const glFormat = utils.convert(texture.format, texture.encoding);
      const glType = utils.convert(texture.type);
      const glInternalFormat = getInternalFormat(texture.internalFormat, glFormat, glType, texture.encoding);
      const samples = getRenderTargetSamples(renderTarget);
      if (isMultisample && useMultisampledRTT(renderTarget) === false) {
        _gl.renderbufferStorageMultisample(36161, samples, glInternalFormat, renderTarget.width, renderTarget.height);
      } else if (useMultisampledRTT(renderTarget)) {
        multisampledRTTExt.renderbufferStorageMultisampleEXT(36161, samples, glInternalFormat, renderTarget.width, renderTarget.height);
      } else {
        _gl.renderbufferStorage(36161, glInternalFormat, renderTarget.width, renderTarget.height);
      }
    }
    _gl.bindRenderbuffer(36161, null);
  }
  function setupDepthTexture(framebuffer, renderTarget) {
    const isCube = renderTarget && renderTarget.isWebGLCubeRenderTarget;
    if (isCube)
      throw new Error("Depth Texture with cube render targets is not supported");
    state.bindFramebuffer(36160, framebuffer);
    if (!(renderTarget.depthTexture && renderTarget.depthTexture.isDepthTexture)) {
      throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
    }
    if (!properties.get(renderTarget.depthTexture).__webglTexture || renderTarget.depthTexture.image.width !== renderTarget.width || renderTarget.depthTexture.image.height !== renderTarget.height) {
      renderTarget.depthTexture.image.width = renderTarget.width;
      renderTarget.depthTexture.image.height = renderTarget.height;
      renderTarget.depthTexture.needsUpdate = true;
    }
    setTexture2D(renderTarget.depthTexture, 0);
    const webglDepthTexture = properties.get(renderTarget.depthTexture).__webglTexture;
    const samples = getRenderTargetSamples(renderTarget);
    if (renderTarget.depthTexture.format === DepthFormat) {
      if (useMultisampledRTT(renderTarget)) {
        multisampledRTTExt.framebufferTexture2DMultisampleEXT(36160, 36096, 3553, webglDepthTexture, 0, samples);
      } else {
        _gl.framebufferTexture2D(36160, 36096, 3553, webglDepthTexture, 0);
      }
    } else if (renderTarget.depthTexture.format === DepthStencilFormat) {
      if (useMultisampledRTT(renderTarget)) {
        multisampledRTTExt.framebufferTexture2DMultisampleEXT(36160, 33306, 3553, webglDepthTexture, 0, samples);
      } else {
        _gl.framebufferTexture2D(36160, 33306, 3553, webglDepthTexture, 0);
      }
    } else {
      throw new Error("Unknown depthTexture format");
    }
  }
  function setupDepthRenderbuffer(renderTarget) {
    const renderTargetProperties = properties.get(renderTarget);
    const isCube = renderTarget.isWebGLCubeRenderTarget === true;
    if (renderTarget.depthTexture && !renderTargetProperties.__autoAllocateDepthBuffer) {
      if (isCube)
        throw new Error("target.depthTexture not supported in Cube render targets");
      setupDepthTexture(renderTargetProperties.__webglFramebuffer, renderTarget);
    } else {
      if (isCube) {
        renderTargetProperties.__webglDepthbuffer = [];
        for (let i = 0; i < 6; i++) {
          state.bindFramebuffer(36160, renderTargetProperties.__webglFramebuffer[i]);
          renderTargetProperties.__webglDepthbuffer[i] = _gl.createRenderbuffer();
          setupRenderBufferStorage(renderTargetProperties.__webglDepthbuffer[i], renderTarget, false);
        }
      } else {
        state.bindFramebuffer(36160, renderTargetProperties.__webglFramebuffer);
        renderTargetProperties.__webglDepthbuffer = _gl.createRenderbuffer();
        setupRenderBufferStorage(renderTargetProperties.__webglDepthbuffer, renderTarget, false);
      }
    }
    state.bindFramebuffer(36160, null);
  }
  function rebindTextures(renderTarget, colorTexture, depthTexture) {
    const renderTargetProperties = properties.get(renderTarget);
    if (colorTexture !== void 0) {
      setupFrameBufferTexture(renderTargetProperties.__webglFramebuffer, renderTarget, renderTarget.texture, 36064, 3553);
    }
    if (depthTexture !== void 0) {
      setupDepthRenderbuffer(renderTarget);
    }
  }
  function setupRenderTarget(renderTarget) {
    const texture = renderTarget.texture;
    const renderTargetProperties = properties.get(renderTarget);
    const textureProperties = properties.get(texture);
    renderTarget.addEventListener("dispose", onRenderTargetDispose);
    if (renderTarget.isWebGLMultipleRenderTargets !== true) {
      if (textureProperties.__webglTexture === void 0) {
        textureProperties.__webglTexture = _gl.createTexture();
      }
      textureProperties.__version = texture.version;
      info.memory.textures++;
    }
    const isCube = renderTarget.isWebGLCubeRenderTarget === true;
    const isMultipleRenderTargets = renderTarget.isWebGLMultipleRenderTargets === true;
    const supportsMips = isPowerOfTwo$1(renderTarget) || isWebGL2;
    if (isCube) {
      renderTargetProperties.__webglFramebuffer = [];
      for (let i = 0; i < 6; i++) {
        renderTargetProperties.__webglFramebuffer[i] = _gl.createFramebuffer();
      }
    } else {
      renderTargetProperties.__webglFramebuffer = _gl.createFramebuffer();
      if (isMultipleRenderTargets) {
        if (capabilities.drawBuffers) {
          const textures = renderTarget.texture;
          for (let i = 0, il = textures.length; i < il; i++) {
            const attachmentProperties = properties.get(textures[i]);
            if (attachmentProperties.__webglTexture === void 0) {
              attachmentProperties.__webglTexture = _gl.createTexture();
              info.memory.textures++;
            }
          }
        } else {
          console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");
        }
      } else if (isWebGL2 && renderTarget.samples > 0 && useMultisampledRTT(renderTarget) === false) {
        renderTargetProperties.__webglMultisampledFramebuffer = _gl.createFramebuffer();
        renderTargetProperties.__webglColorRenderbuffer = _gl.createRenderbuffer();
        _gl.bindRenderbuffer(36161, renderTargetProperties.__webglColorRenderbuffer);
        const glFormat = utils.convert(texture.format, texture.encoding);
        const glType = utils.convert(texture.type);
        const glInternalFormat = getInternalFormat(texture.internalFormat, glFormat, glType, texture.encoding);
        const samples = getRenderTargetSamples(renderTarget);
        _gl.renderbufferStorageMultisample(36161, samples, glInternalFormat, renderTarget.width, renderTarget.height);
        state.bindFramebuffer(36160, renderTargetProperties.__webglMultisampledFramebuffer);
        _gl.framebufferRenderbuffer(36160, 36064, 36161, renderTargetProperties.__webglColorRenderbuffer);
        _gl.bindRenderbuffer(36161, null);
        if (renderTarget.depthBuffer) {
          renderTargetProperties.__webglDepthRenderbuffer = _gl.createRenderbuffer();
          setupRenderBufferStorage(renderTargetProperties.__webglDepthRenderbuffer, renderTarget, true);
        }
        state.bindFramebuffer(36160, null);
      }
    }
    if (isCube) {
      state.bindTexture(34067, textureProperties.__webglTexture);
      setTextureParameters(34067, texture, supportsMips);
      for (let i = 0; i < 6; i++) {
        setupFrameBufferTexture(renderTargetProperties.__webglFramebuffer[i], renderTarget, texture, 36064, 34069 + i);
      }
      if (textureNeedsGenerateMipmaps(texture, supportsMips)) {
        generateMipmap(34067);
      }
      state.unbindTexture();
    } else if (isMultipleRenderTargets) {
      const textures = renderTarget.texture;
      for (let i = 0, il = textures.length; i < il; i++) {
        const attachment = textures[i];
        const attachmentProperties = properties.get(attachment);
        state.bindTexture(3553, attachmentProperties.__webglTexture);
        setTextureParameters(3553, attachment, supportsMips);
        setupFrameBufferTexture(renderTargetProperties.__webglFramebuffer, renderTarget, attachment, 36064 + i, 3553);
        if (textureNeedsGenerateMipmaps(attachment, supportsMips)) {
          generateMipmap(3553);
        }
      }
      state.unbindTexture();
    } else {
      let glTextureType = 3553;
      if (renderTarget.isWebGL3DRenderTarget || renderTarget.isWebGLArrayRenderTarget) {
        if (isWebGL2) {
          glTextureType = renderTarget.isWebGL3DRenderTarget ? 32879 : 35866;
        } else {
          console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.");
        }
      }
      state.bindTexture(glTextureType, textureProperties.__webglTexture);
      setTextureParameters(glTextureType, texture, supportsMips);
      setupFrameBufferTexture(renderTargetProperties.__webglFramebuffer, renderTarget, texture, 36064, glTextureType);
      if (textureNeedsGenerateMipmaps(texture, supportsMips)) {
        generateMipmap(glTextureType);
      }
      state.unbindTexture();
    }
    if (renderTarget.depthBuffer) {
      setupDepthRenderbuffer(renderTarget);
    }
  }
  function updateRenderTargetMipmap(renderTarget) {
    const supportsMips = isPowerOfTwo$1(renderTarget) || isWebGL2;
    const textures = renderTarget.isWebGLMultipleRenderTargets === true ? renderTarget.texture : [renderTarget.texture];
    for (let i = 0, il = textures.length; i < il; i++) {
      const texture = textures[i];
      if (textureNeedsGenerateMipmaps(texture, supportsMips)) {
        const target = renderTarget.isWebGLCubeRenderTarget ? 34067 : 3553;
        const webglTexture = properties.get(texture).__webglTexture;
        state.bindTexture(target, webglTexture);
        generateMipmap(target);
        state.unbindTexture();
      }
    }
  }
  function updateMultisampleRenderTarget(renderTarget) {
    if (isWebGL2 && renderTarget.samples > 0 && useMultisampledRTT(renderTarget) === false) {
      const width = renderTarget.width;
      const height = renderTarget.height;
      let mask = 16384;
      const invalidationArray = [36064];
      const depthStyle = renderTarget.stencilBuffer ? 33306 : 36096;
      if (renderTarget.depthBuffer) {
        invalidationArray.push(depthStyle);
      }
      const renderTargetProperties = properties.get(renderTarget);
      const ignoreDepthValues = renderTargetProperties.__ignoreDepthValues !== void 0 ? renderTargetProperties.__ignoreDepthValues : false;
      if (ignoreDepthValues === false) {
        if (renderTarget.depthBuffer)
          mask |= 256;
        if (renderTarget.stencilBuffer)
          mask |= 1024;
      }
      state.bindFramebuffer(36008, renderTargetProperties.__webglMultisampledFramebuffer);
      state.bindFramebuffer(36009, renderTargetProperties.__webglFramebuffer);
      if (ignoreDepthValues === true) {
        _gl.invalidateFramebuffer(36008, [depthStyle]);
        _gl.invalidateFramebuffer(36009, [depthStyle]);
      }
      _gl.blitFramebuffer(0, 0, width, height, 0, 0, width, height, mask, 9728);
      if (supportsInvalidateFramebuffer) {
        _gl.invalidateFramebuffer(36008, invalidationArray);
      }
      state.bindFramebuffer(36008, null);
      state.bindFramebuffer(36009, renderTargetProperties.__webglMultisampledFramebuffer);
    }
  }
  function getRenderTargetSamples(renderTarget) {
    return Math.min(maxSamples, renderTarget.samples);
  }
  function useMultisampledRTT(renderTarget) {
    const renderTargetProperties = properties.get(renderTarget);
    return isWebGL2 && renderTarget.samples > 0 && extensions.has("WEBGL_multisampled_render_to_texture") === true && renderTargetProperties.__useRenderToTexture !== false;
  }
  function updateVideoTexture(texture) {
    const frame = info.render.frame;
    if (_videoTextures.get(texture) !== frame) {
      _videoTextures.set(texture, frame);
      texture.update();
    }
  }
  function verifyColorSpace(texture, image) {
    const encoding = texture.encoding;
    const format = texture.format;
    const type = texture.type;
    if (texture.isCompressedTexture === true || texture.isVideoTexture === true || texture.format === _SRGBAFormat)
      return image;
    if (encoding !== LinearEncoding) {
      if (encoding === sRGBEncoding) {
        if (isWebGL2 === false) {
          if (extensions.has("EXT_sRGB") === true && format === RGBAFormat) {
            texture.format = _SRGBAFormat;
            texture.minFilter = LinearFilter;
            texture.generateMipmaps = false;
          } else {
            image = ImageUtils.sRGBToLinear(image);
          }
        } else {
          if (format !== RGBAFormat || type !== UnsignedByteType) {
            console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.");
          }
        }
      } else {
        console.error("THREE.WebGLTextures: Unsupported texture encoding:", encoding);
      }
    }
    return image;
  }
  this.allocateTextureUnit = allocateTextureUnit;
  this.resetTextureUnits = resetTextureUnits;
  this.setTexture2D = setTexture2D;
  this.setTexture2DArray = setTexture2DArray;
  this.setTexture3D = setTexture3D;
  this.setTextureCube = setTextureCube;
  this.rebindTextures = rebindTextures;
  this.setupRenderTarget = setupRenderTarget;
  this.updateRenderTargetMipmap = updateRenderTargetMipmap;
  this.updateMultisampleRenderTarget = updateMultisampleRenderTarget;
  this.setupDepthRenderbuffer = setupDepthRenderbuffer;
  this.setupFrameBufferTexture = setupFrameBufferTexture;
  this.useMultisampledRTT = useMultisampledRTT;
}
function WebGLUtils(gl, extensions, capabilities) {
  const isWebGL2 = capabilities.isWebGL2;
  function convert(p, encoding = null) {
    let extension;
    if (p === UnsignedByteType)
      return 5121;
    if (p === UnsignedShort4444Type)
      return 32819;
    if (p === UnsignedShort5551Type)
      return 32820;
    if (p === ByteType)
      return 5120;
    if (p === ShortType)
      return 5122;
    if (p === UnsignedShortType)
      return 5123;
    if (p === IntType)
      return 5124;
    if (p === UnsignedIntType)
      return 5125;
    if (p === FloatType)
      return 5126;
    if (p === HalfFloatType) {
      if (isWebGL2)
        return 5131;
      extension = extensions.get("OES_texture_half_float");
      if (extension !== null) {
        return extension.HALF_FLOAT_OES;
      } else {
        return null;
      }
    }
    if (p === AlphaFormat)
      return 6406;
    if (p === RGBAFormat)
      return 6408;
    if (p === LuminanceFormat)
      return 6409;
    if (p === LuminanceAlphaFormat)
      return 6410;
    if (p === DepthFormat)
      return 6402;
    if (p === DepthStencilFormat)
      return 34041;
    if (p === RedFormat)
      return 6403;
    if (p === RGBFormat) {
      console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228");
      return 6408;
    }
    if (p === _SRGBAFormat) {
      extension = extensions.get("EXT_sRGB");
      if (extension !== null) {
        return extension.SRGB_ALPHA_EXT;
      } else {
        return null;
      }
    }
    if (p === RedIntegerFormat)
      return 36244;
    if (p === RGFormat)
      return 33319;
    if (p === RGIntegerFormat)
      return 33320;
    if (p === RGBAIntegerFormat)
      return 36249;
    if (p === RGB_S3TC_DXT1_Format || p === RGBA_S3TC_DXT1_Format || p === RGBA_S3TC_DXT3_Format || p === RGBA_S3TC_DXT5_Format) {
      if (encoding === sRGBEncoding) {
        extension = extensions.get("WEBGL_compressed_texture_s3tc_srgb");
        if (extension !== null) {
          if (p === RGB_S3TC_DXT1_Format)
            return extension.COMPRESSED_SRGB_S3TC_DXT1_EXT;
          if (p === RGBA_S3TC_DXT1_Format)
            return extension.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
          if (p === RGBA_S3TC_DXT3_Format)
            return extension.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
          if (p === RGBA_S3TC_DXT5_Format)
            return extension.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
        } else {
          return null;
        }
      } else {
        extension = extensions.get("WEBGL_compressed_texture_s3tc");
        if (extension !== null) {
          if (p === RGB_S3TC_DXT1_Format)
            return extension.COMPRESSED_RGB_S3TC_DXT1_EXT;
          if (p === RGBA_S3TC_DXT1_Format)
            return extension.COMPRESSED_RGBA_S3TC_DXT1_EXT;
          if (p === RGBA_S3TC_DXT3_Format)
            return extension.COMPRESSED_RGBA_S3TC_DXT3_EXT;
          if (p === RGBA_S3TC_DXT5_Format)
            return extension.COMPRESSED_RGBA_S3TC_DXT5_EXT;
        } else {
          return null;
        }
      }
    }
    if (p === RGB_PVRTC_4BPPV1_Format || p === RGB_PVRTC_2BPPV1_Format || p === RGBA_PVRTC_4BPPV1_Format || p === RGBA_PVRTC_2BPPV1_Format) {
      extension = extensions.get("WEBGL_compressed_texture_pvrtc");
      if (extension !== null) {
        if (p === RGB_PVRTC_4BPPV1_Format)
          return extension.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (p === RGB_PVRTC_2BPPV1_Format)
          return extension.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (p === RGBA_PVRTC_4BPPV1_Format)
          return extension.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (p === RGBA_PVRTC_2BPPV1_Format)
          return extension.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      } else {
        return null;
      }
    }
    if (p === RGB_ETC1_Format) {
      extension = extensions.get("WEBGL_compressed_texture_etc1");
      if (extension !== null) {
        return extension.COMPRESSED_RGB_ETC1_WEBGL;
      } else {
        return null;
      }
    }
    if (p === RGB_ETC2_Format || p === RGBA_ETC2_EAC_Format) {
      extension = extensions.get("WEBGL_compressed_texture_etc");
      if (extension !== null) {
        if (p === RGB_ETC2_Format)
          return encoding === sRGBEncoding ? extension.COMPRESSED_SRGB8_ETC2 : extension.COMPRESSED_RGB8_ETC2;
        if (p === RGBA_ETC2_EAC_Format)
          return encoding === sRGBEncoding ? extension.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : extension.COMPRESSED_RGBA8_ETC2_EAC;
      } else {
        return null;
      }
    }
    if (p === RGBA_ASTC_4x4_Format || p === RGBA_ASTC_5x4_Format || p === RGBA_ASTC_5x5_Format || p === RGBA_ASTC_6x5_Format || p === RGBA_ASTC_6x6_Format || p === RGBA_ASTC_8x5_Format || p === RGBA_ASTC_8x6_Format || p === RGBA_ASTC_8x8_Format || p === RGBA_ASTC_10x5_Format || p === RGBA_ASTC_10x6_Format || p === RGBA_ASTC_10x8_Format || p === RGBA_ASTC_10x10_Format || p === RGBA_ASTC_12x10_Format || p === RGBA_ASTC_12x12_Format) {
      extension = extensions.get("WEBGL_compressed_texture_astc");
      if (extension !== null) {
        if (p === RGBA_ASTC_4x4_Format)
          return encoding === sRGBEncoding ? extension.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : extension.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (p === RGBA_ASTC_5x4_Format)
          return encoding === sRGBEncoding ? extension.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : extension.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (p === RGBA_ASTC_5x5_Format)
          return encoding === sRGBEncoding ? extension.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : extension.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (p === RGBA_ASTC_6x5_Format)
          return encoding === sRGBEncoding ? extension.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : extension.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (p === RGBA_ASTC_6x6_Format)
          return encoding === sRGBEncoding ? extension.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : extension.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (p === RGBA_ASTC_8x5_Format)
          return encoding === sRGBEncoding ? extension.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : extension.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (p === RGBA_ASTC_8x6_Format)
          return encoding === sRGBEncoding ? extension.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : extension.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (p === RGBA_ASTC_8x8_Format)
          return encoding === sRGBEncoding ? extension.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : extension.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (p === RGBA_ASTC_10x5_Format)
          return encoding === sRGBEncoding ? extension.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : extension.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (p === RGBA_ASTC_10x6_Format)
          return encoding === sRGBEncoding ? extension.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : extension.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (p === RGBA_ASTC_10x8_Format)
          return encoding === sRGBEncoding ? extension.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : extension.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (p === RGBA_ASTC_10x10_Format)
          return encoding === sRGBEncoding ? extension.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : extension.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (p === RGBA_ASTC_12x10_Format)
          return encoding === sRGBEncoding ? extension.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : extension.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (p === RGBA_ASTC_12x12_Format)
          return encoding === sRGBEncoding ? extension.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : extension.COMPRESSED_RGBA_ASTC_12x12_KHR;
      } else {
        return null;
      }
    }
    if (p === RGBA_BPTC_Format) {
      extension = extensions.get("EXT_texture_compression_bptc");
      if (extension !== null) {
        if (p === RGBA_BPTC_Format)
          return encoding === sRGBEncoding ? extension.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : extension.COMPRESSED_RGBA_BPTC_UNORM_EXT;
      } else {
        return null;
      }
    }
    if (p === UnsignedInt248Type) {
      if (isWebGL2)
        return 34042;
      extension = extensions.get("WEBGL_depth_texture");
      if (extension !== null) {
        return extension.UNSIGNED_INT_24_8_WEBGL;
      } else {
        return null;
      }
    }
  }
  return { convert };
}
var ArrayCamera = class extends PerspectiveCamera {
  constructor(array = []) {
    super();
    this.cameras = array;
  }
};
ArrayCamera.prototype.isArrayCamera = true;
var Group = class extends Object3D {
  constructor() {
    super();
    this.type = "Group";
  }
};
Group.prototype.isGroup = true;
var _moveEvent = { type: "move" };
var WebXRController = class {
  constructor() {
    this._targetRay = null;
    this._grip = null;
    this._hand = null;
  }
  getHandSpace() {
    if (this._hand === null) {
      this._hand = new Group();
      this._hand.matrixAutoUpdate = false;
      this._hand.visible = false;
      this._hand.joints = {};
      this._hand.inputState = { pinching: false };
    }
    return this._hand;
  }
  getTargetRaySpace() {
    if (this._targetRay === null) {
      this._targetRay = new Group();
      this._targetRay.matrixAutoUpdate = false;
      this._targetRay.visible = false;
      this._targetRay.hasLinearVelocity = false;
      this._targetRay.linearVelocity = new Vector3();
      this._targetRay.hasAngularVelocity = false;
      this._targetRay.angularVelocity = new Vector3();
    }
    return this._targetRay;
  }
  getGripSpace() {
    if (this._grip === null) {
      this._grip = new Group();
      this._grip.matrixAutoUpdate = false;
      this._grip.visible = false;
      this._grip.hasLinearVelocity = false;
      this._grip.linearVelocity = new Vector3();
      this._grip.hasAngularVelocity = false;
      this._grip.angularVelocity = new Vector3();
    }
    return this._grip;
  }
  dispatchEvent(event) {
    if (this._targetRay !== null) {
      this._targetRay.dispatchEvent(event);
    }
    if (this._grip !== null) {
      this._grip.dispatchEvent(event);
    }
    if (this._hand !== null) {
      this._hand.dispatchEvent(event);
    }
    return this;
  }
  disconnect(inputSource) {
    this.dispatchEvent({ type: "disconnected", data: inputSource });
    if (this._targetRay !== null) {
      this._targetRay.visible = false;
    }
    if (this._grip !== null) {
      this._grip.visible = false;
    }
    if (this._hand !== null) {
      this._hand.visible = false;
    }
    return this;
  }
  update(inputSource, frame, referenceSpace) {
    let inputPose = null;
    let gripPose = null;
    let handPose = null;
    const targetRay = this._targetRay;
    const grip = this._grip;
    const hand = this._hand;
    if (inputSource && frame.session.visibilityState !== "visible-blurred") {
      if (targetRay !== null) {
        inputPose = frame.getPose(inputSource.targetRaySpace, referenceSpace);
        if (inputPose !== null) {
          targetRay.matrix.fromArray(inputPose.transform.matrix);
          targetRay.matrix.decompose(targetRay.position, targetRay.rotation, targetRay.scale);
          if (inputPose.linearVelocity) {
            targetRay.hasLinearVelocity = true;
            targetRay.linearVelocity.copy(inputPose.linearVelocity);
          } else {
            targetRay.hasLinearVelocity = false;
          }
          if (inputPose.angularVelocity) {
            targetRay.hasAngularVelocity = true;
            targetRay.angularVelocity.copy(inputPose.angularVelocity);
          } else {
            targetRay.hasAngularVelocity = false;
          }
          this.dispatchEvent(_moveEvent);
        }
      }
      if (hand && inputSource.hand) {
        handPose = true;
        for (const inputjoint of inputSource.hand.values()) {
          const jointPose = frame.getJointPose(inputjoint, referenceSpace);
          if (hand.joints[inputjoint.jointName] === void 0) {
            const joint2 = new Group();
            joint2.matrixAutoUpdate = false;
            joint2.visible = false;
            hand.joints[inputjoint.jointName] = joint2;
            hand.add(joint2);
          }
          const joint = hand.joints[inputjoint.jointName];
          if (jointPose !== null) {
            joint.matrix.fromArray(jointPose.transform.matrix);
            joint.matrix.decompose(joint.position, joint.rotation, joint.scale);
            joint.jointRadius = jointPose.radius;
          }
          joint.visible = jointPose !== null;
        }
        const indexTip = hand.joints["index-finger-tip"];
        const thumbTip = hand.joints["thumb-tip"];
        const distance = indexTip.position.distanceTo(thumbTip.position);
        const distanceToPinch = 0.02;
        const threshold = 5e-3;
        if (hand.inputState.pinching && distance > distanceToPinch + threshold) {
          hand.inputState.pinching = false;
          this.dispatchEvent({
            type: "pinchend",
            handedness: inputSource.handedness,
            target: this
          });
        } else if (!hand.inputState.pinching && distance <= distanceToPinch - threshold) {
          hand.inputState.pinching = true;
          this.dispatchEvent({
            type: "pinchstart",
            handedness: inputSource.handedness,
            target: this
          });
        }
      } else {
        if (grip !== null && inputSource.gripSpace) {
          gripPose = frame.getPose(inputSource.gripSpace, referenceSpace);
          if (gripPose !== null) {
            grip.matrix.fromArray(gripPose.transform.matrix);
            grip.matrix.decompose(grip.position, grip.rotation, grip.scale);
            if (gripPose.linearVelocity) {
              grip.hasLinearVelocity = true;
              grip.linearVelocity.copy(gripPose.linearVelocity);
            } else {
              grip.hasLinearVelocity = false;
            }
            if (gripPose.angularVelocity) {
              grip.hasAngularVelocity = true;
              grip.angularVelocity.copy(gripPose.angularVelocity);
            } else {
              grip.hasAngularVelocity = false;
            }
          }
        }
      }
    }
    if (targetRay !== null) {
      targetRay.visible = inputPose !== null;
    }
    if (grip !== null) {
      grip.visible = gripPose !== null;
    }
    if (hand !== null) {
      hand.visible = handPose !== null;
    }
    return this;
  }
};
var DepthTexture = class extends Texture {
  constructor(width, height, type, mapping, wrapS, wrapT, magFilter, minFilter, anisotropy, format) {
    format = format !== void 0 ? format : DepthFormat;
    if (format !== DepthFormat && format !== DepthStencilFormat) {
      throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    }
    if (type === void 0 && format === DepthFormat)
      type = UnsignedShortType;
    if (type === void 0 && format === DepthStencilFormat)
      type = UnsignedInt248Type;
    super(null, mapping, wrapS, wrapT, magFilter, minFilter, format, type, anisotropy);
    this.image = { width, height };
    this.magFilter = magFilter !== void 0 ? magFilter : NearestFilter;
    this.minFilter = minFilter !== void 0 ? minFilter : NearestFilter;
    this.flipY = false;
    this.generateMipmaps = false;
  }
};
DepthTexture.prototype.isDepthTexture = true;
var WebXRManager = class extends EventDispatcher {
  constructor(renderer, gl) {
    super();
    const scope = this;
    let session = null;
    let framebufferScaleFactor = 1;
    let referenceSpace = null;
    let referenceSpaceType = "local-floor";
    let pose = null;
    let glBinding = null;
    let glProjLayer = null;
    let glBaseLayer = null;
    let xrFrame = null;
    const attributes = gl.getContextAttributes();
    let initialRenderTarget = null;
    let newRenderTarget = null;
    const controllers = [];
    const inputSourcesMap = /* @__PURE__ */ new Map();
    const cameraL = new PerspectiveCamera();
    cameraL.layers.enable(1);
    cameraL.viewport = new Vector4();
    const cameraR = new PerspectiveCamera();
    cameraR.layers.enable(2);
    cameraR.viewport = new Vector4();
    const cameras = [cameraL, cameraR];
    const cameraVR = new ArrayCamera();
    cameraVR.layers.enable(1);
    cameraVR.layers.enable(2);
    let _currentDepthNear = null;
    let _currentDepthFar = null;
    this.cameraAutoUpdate = true;
    this.enabled = false;
    this.isPresenting = false;
    this.getController = function(index) {
      let controller = controllers[index];
      if (controller === void 0) {
        controller = new WebXRController();
        controllers[index] = controller;
      }
      return controller.getTargetRaySpace();
    };
    this.getControllerGrip = function(index) {
      let controller = controllers[index];
      if (controller === void 0) {
        controller = new WebXRController();
        controllers[index] = controller;
      }
      return controller.getGripSpace();
    };
    this.getHand = function(index) {
      let controller = controllers[index];
      if (controller === void 0) {
        controller = new WebXRController();
        controllers[index] = controller;
      }
      return controller.getHandSpace();
    };
    function onSessionEvent(event) {
      const controller = inputSourcesMap.get(event.inputSource);
      if (controller) {
        controller.dispatchEvent({ type: event.type, data: event.inputSource });
      }
    }
    function onSessionEnd() {
      inputSourcesMap.forEach(function(controller, inputSource) {
        controller.disconnect(inputSource);
      });
      inputSourcesMap.clear();
      _currentDepthNear = null;
      _currentDepthFar = null;
      renderer.setRenderTarget(initialRenderTarget);
      glBaseLayer = null;
      glProjLayer = null;
      glBinding = null;
      session = null;
      newRenderTarget = null;
      animation.stop();
      scope.isPresenting = false;
      scope.dispatchEvent({ type: "sessionend" });
    }
    this.setFramebufferScaleFactor = function(value) {
      framebufferScaleFactor = value;
      if (scope.isPresenting === true) {
        console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.");
      }
    };
    this.setReferenceSpaceType = function(value) {
      referenceSpaceType = value;
      if (scope.isPresenting === true) {
        console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.");
      }
    };
    this.getReferenceSpace = function() {
      return referenceSpace;
    };
    this.getBaseLayer = function() {
      return glProjLayer !== null ? glProjLayer : glBaseLayer;
    };
    this.getBinding = function() {
      return glBinding;
    };
    this.getFrame = function() {
      return xrFrame;
    };
    this.getSession = function() {
      return session;
    };
    this.setSession = async function(value) {
      session = value;
      if (session !== null) {
        initialRenderTarget = renderer.getRenderTarget();
        session.addEventListener("select", onSessionEvent);
        session.addEventListener("selectstart", onSessionEvent);
        session.addEventListener("selectend", onSessionEvent);
        session.addEventListener("squeeze", onSessionEvent);
        session.addEventListener("squeezestart", onSessionEvent);
        session.addEventListener("squeezeend", onSessionEvent);
        session.addEventListener("end", onSessionEnd);
        session.addEventListener("inputsourceschange", onInputSourcesChange);
        if (attributes.xrCompatible !== true) {
          await gl.makeXRCompatible();
        }
        if (session.renderState.layers === void 0 || renderer.capabilities.isWebGL2 === false) {
          const layerInit = {
            antialias: session.renderState.layers === void 0 ? attributes.antialias : true,
            alpha: attributes.alpha,
            depth: attributes.depth,
            stencil: attributes.stencil,
            framebufferScaleFactor
          };
          glBaseLayer = new XRWebGLLayer(session, gl, layerInit);
          session.updateRenderState({ baseLayer: glBaseLayer });
          newRenderTarget = new WebGLRenderTarget(glBaseLayer.framebufferWidth, glBaseLayer.framebufferHeight, {
            format: RGBAFormat,
            type: UnsignedByteType,
            encoding: renderer.outputEncoding
          });
        } else {
          let depthFormat = null;
          let depthType = null;
          let glDepthFormat = null;
          if (attributes.depth) {
            glDepthFormat = attributes.stencil ? 35056 : 33190;
            depthFormat = attributes.stencil ? DepthStencilFormat : DepthFormat;
            depthType = attributes.stencil ? UnsignedInt248Type : UnsignedShortType;
          }
          const projectionlayerInit = {
            colorFormat: renderer.outputEncoding === sRGBEncoding ? 35907 : 32856,
            depthFormat: glDepthFormat,
            scaleFactor: framebufferScaleFactor
          };
          glBinding = new XRWebGLBinding(session, gl);
          glProjLayer = glBinding.createProjectionLayer(projectionlayerInit);
          session.updateRenderState({ layers: [glProjLayer] });
          newRenderTarget = new WebGLRenderTarget(glProjLayer.textureWidth, glProjLayer.textureHeight, {
            format: RGBAFormat,
            type: UnsignedByteType,
            depthTexture: new DepthTexture(glProjLayer.textureWidth, glProjLayer.textureHeight, depthType, void 0, void 0, void 0, void 0, void 0, void 0, depthFormat),
            stencilBuffer: attributes.stencil,
            encoding: renderer.outputEncoding,
            samples: attributes.antialias ? 4 : 0
          });
          const renderTargetProperties = renderer.properties.get(newRenderTarget);
          renderTargetProperties.__ignoreDepthValues = glProjLayer.ignoreDepthValues;
        }
        newRenderTarget.isXRRenderTarget = true;
        this.setFoveation(1);
        referenceSpace = await session.requestReferenceSpace(referenceSpaceType);
        animation.setContext(session);
        animation.start();
        scope.isPresenting = true;
        scope.dispatchEvent({ type: "sessionstart" });
      }
    };
    function onInputSourcesChange(event) {
      const inputSources = session.inputSources;
      for (let i = 0; i < controllers.length; i++) {
        inputSourcesMap.set(inputSources[i], controllers[i]);
      }
      for (let i = 0; i < event.removed.length; i++) {
        const inputSource = event.removed[i];
        const controller = inputSourcesMap.get(inputSource);
        if (controller) {
          controller.dispatchEvent({ type: "disconnected", data: inputSource });
          inputSourcesMap.delete(inputSource);
        }
      }
      for (let i = 0; i < event.added.length; i++) {
        const inputSource = event.added[i];
        const controller = inputSourcesMap.get(inputSource);
        if (controller) {
          controller.dispatchEvent({ type: "connected", data: inputSource });
        }
      }
    }
    const cameraLPos = new Vector3();
    const cameraRPos = new Vector3();
    function setProjectionFromUnion(camera, cameraL2, cameraR2) {
      cameraLPos.setFromMatrixPosition(cameraL2.matrixWorld);
      cameraRPos.setFromMatrixPosition(cameraR2.matrixWorld);
      const ipd = cameraLPos.distanceTo(cameraRPos);
      const projL = cameraL2.projectionMatrix.elements;
      const projR = cameraR2.projectionMatrix.elements;
      const near = projL[14] / (projL[10] - 1);
      const far = projL[14] / (projL[10] + 1);
      const topFov = (projL[9] + 1) / projL[5];
      const bottomFov = (projL[9] - 1) / projL[5];
      const leftFov = (projL[8] - 1) / projL[0];
      const rightFov = (projR[8] + 1) / projR[0];
      const left = near * leftFov;
      const right = near * rightFov;
      const zOffset = ipd / (-leftFov + rightFov);
      const xOffset = zOffset * -leftFov;
      cameraL2.matrixWorld.decompose(camera.position, camera.quaternion, camera.scale);
      camera.translateX(xOffset);
      camera.translateZ(zOffset);
      camera.matrixWorld.compose(camera.position, camera.quaternion, camera.scale);
      camera.matrixWorldInverse.copy(camera.matrixWorld).invert();
      const near2 = near + zOffset;
      const far2 = far + zOffset;
      const left2 = left - xOffset;
      const right2 = right + (ipd - xOffset);
      const top2 = topFov * far / far2 * near2;
      const bottom2 = bottomFov * far / far2 * near2;
      camera.projectionMatrix.makePerspective(left2, right2, top2, bottom2, near2, far2);
    }
    function updateCamera(camera, parent) {
      if (parent === null) {
        camera.matrixWorld.copy(camera.matrix);
      } else {
        camera.matrixWorld.multiplyMatrices(parent.matrixWorld, camera.matrix);
      }
      camera.matrixWorldInverse.copy(camera.matrixWorld).invert();
    }
    this.updateCamera = function(camera) {
      if (session === null)
        return;
      cameraVR.near = cameraR.near = cameraL.near = camera.near;
      cameraVR.far = cameraR.far = cameraL.far = camera.far;
      if (_currentDepthNear !== cameraVR.near || _currentDepthFar !== cameraVR.far) {
        session.updateRenderState({
          depthNear: cameraVR.near,
          depthFar: cameraVR.far
        });
        _currentDepthNear = cameraVR.near;
        _currentDepthFar = cameraVR.far;
      }
      const parent = camera.parent;
      const cameras2 = cameraVR.cameras;
      updateCamera(cameraVR, parent);
      for (let i = 0; i < cameras2.length; i++) {
        updateCamera(cameras2[i], parent);
      }
      cameraVR.matrixWorld.decompose(cameraVR.position, cameraVR.quaternion, cameraVR.scale);
      camera.position.copy(cameraVR.position);
      camera.quaternion.copy(cameraVR.quaternion);
      camera.scale.copy(cameraVR.scale);
      camera.matrix.copy(cameraVR.matrix);
      camera.matrixWorld.copy(cameraVR.matrixWorld);
      const children = camera.children;
      for (let i = 0, l = children.length; i < l; i++) {
        children[i].updateMatrixWorld(true);
      }
      if (cameras2.length === 2) {
        setProjectionFromUnion(cameraVR, cameraL, cameraR);
      } else {
        cameraVR.projectionMatrix.copy(cameraL.projectionMatrix);
      }
    };
    this.getCamera = function() {
      return cameraVR;
    };
    this.getFoveation = function() {
      if (glProjLayer !== null) {
        return glProjLayer.fixedFoveation;
      }
      if (glBaseLayer !== null) {
        return glBaseLayer.fixedFoveation;
      }
      return void 0;
    };
    this.setFoveation = function(foveation) {
      if (glProjLayer !== null) {
        glProjLayer.fixedFoveation = foveation;
      }
      if (glBaseLayer !== null && glBaseLayer.fixedFoveation !== void 0) {
        glBaseLayer.fixedFoveation = foveation;
      }
    };
    let onAnimationFrameCallback = null;
    function onAnimationFrame(time, frame) {
      pose = frame.getViewerPose(referenceSpace);
      xrFrame = frame;
      if (pose !== null) {
        const views = pose.views;
        if (glBaseLayer !== null) {
          renderer.setRenderTargetFramebuffer(newRenderTarget, glBaseLayer.framebuffer);
          renderer.setRenderTarget(newRenderTarget);
        }
        let cameraVRNeedsUpdate = false;
        if (views.length !== cameraVR.cameras.length) {
          cameraVR.cameras.length = 0;
          cameraVRNeedsUpdate = true;
        }
        for (let i = 0; i < views.length; i++) {
          const view = views[i];
          let viewport = null;
          if (glBaseLayer !== null) {
            viewport = glBaseLayer.getViewport(view);
          } else {
            const glSubImage = glBinding.getViewSubImage(glProjLayer, view);
            viewport = glSubImage.viewport;
            if (i === 0) {
              renderer.setRenderTargetTextures(newRenderTarget, glSubImage.colorTexture, glProjLayer.ignoreDepthValues ? void 0 : glSubImage.depthStencilTexture);
              renderer.setRenderTarget(newRenderTarget);
            }
          }
          const camera = cameras[i];
          camera.matrix.fromArray(view.transform.matrix);
          camera.projectionMatrix.fromArray(view.projectionMatrix);
          camera.viewport.set(viewport.x, viewport.y, viewport.width, viewport.height);
          if (i === 0) {
            cameraVR.matrix.copy(camera.matrix);
          }
          if (cameraVRNeedsUpdate === true) {
            cameraVR.cameras.push(camera);
          }
        }
      }
      const inputSources = session.inputSources;
      for (let i = 0; i < controllers.length; i++) {
        const controller = controllers[i];
        const inputSource = inputSources[i];
        controller.update(inputSource, frame, referenceSpace);
      }
      if (onAnimationFrameCallback)
        onAnimationFrameCallback(time, frame);
      xrFrame = null;
    }
    const animation = new WebGLAnimation();
    animation.setAnimationLoop(onAnimationFrame);
    this.setAnimationLoop = function(callback) {
      onAnimationFrameCallback = callback;
    };
    this.dispose = function() {
    };
  }
};
function WebGLMaterials(renderer, properties) {
  function refreshFogUniforms(uniforms, fog) {
    uniforms.fogColor.value.copy(fog.color);
    if (fog.isFog) {
      uniforms.fogNear.value = fog.near;
      uniforms.fogFar.value = fog.far;
    } else if (fog.isFogExp2) {
      uniforms.fogDensity.value = fog.density;
    }
  }
  function refreshMaterialUniforms(uniforms, material, pixelRatio, height, transmissionRenderTarget) {
    if (material.isMeshBasicMaterial) {
      refreshUniformsCommon(uniforms, material);
    } else if (material.isMeshLambertMaterial) {
      refreshUniformsCommon(uniforms, material);
    } else if (material.isMeshToonMaterial) {
      refreshUniformsCommon(uniforms, material);
      refreshUniformsToon(uniforms, material);
    } else if (material.isMeshPhongMaterial) {
      refreshUniformsCommon(uniforms, material);
      refreshUniformsPhong(uniforms, material);
    } else if (material.isMeshStandardMaterial) {
      refreshUniformsCommon(uniforms, material);
      refreshUniformsStandard(uniforms, material);
      if (material.isMeshPhysicalMaterial) {
        refreshUniformsPhysical(uniforms, material, transmissionRenderTarget);
      }
    } else if (material.isMeshMatcapMaterial) {
      refreshUniformsCommon(uniforms, material);
      refreshUniformsMatcap(uniforms, material);
    } else if (material.isMeshDepthMaterial) {
      refreshUniformsCommon(uniforms, material);
    } else if (material.isMeshDistanceMaterial) {
      refreshUniformsCommon(uniforms, material);
      refreshUniformsDistance(uniforms, material);
    } else if (material.isMeshNormalMaterial) {
      refreshUniformsCommon(uniforms, material);
    } else if (material.isLineBasicMaterial) {
      refreshUniformsLine(uniforms, material);
      if (material.isLineDashedMaterial) {
        refreshUniformsDash(uniforms, material);
      }
    } else if (material.isPointsMaterial) {
      refreshUniformsPoints(uniforms, material, pixelRatio, height);
    } else if (material.isSpriteMaterial) {
      refreshUniformsSprites(uniforms, material);
    } else if (material.isShadowMaterial) {
      uniforms.color.value.copy(material.color);
      uniforms.opacity.value = material.opacity;
    } else if (material.isShaderMaterial) {
      material.uniformsNeedUpdate = false;
    }
  }
  function refreshUniformsCommon(uniforms, material) {
    uniforms.opacity.value = material.opacity;
    if (material.color) {
      uniforms.diffuse.value.copy(material.color);
    }
    if (material.emissive) {
      uniforms.emissive.value.copy(material.emissive).multiplyScalar(material.emissiveIntensity);
    }
    if (material.map) {
      uniforms.map.value = material.map;
    }
    if (material.alphaMap) {
      uniforms.alphaMap.value = material.alphaMap;
    }
    if (material.bumpMap) {
      uniforms.bumpMap.value = material.bumpMap;
      uniforms.bumpScale.value = material.bumpScale;
      if (material.side === BackSide)
        uniforms.bumpScale.value *= -1;
    }
    if (material.displacementMap) {
      uniforms.displacementMap.value = material.displacementMap;
      uniforms.displacementScale.value = material.displacementScale;
      uniforms.displacementBias.value = material.displacementBias;
    }
    if (material.emissiveMap) {
      uniforms.emissiveMap.value = material.emissiveMap;
    }
    if (material.normalMap) {
      uniforms.normalMap.value = material.normalMap;
      uniforms.normalScale.value.copy(material.normalScale);
      if (material.side === BackSide)
        uniforms.normalScale.value.negate();
    }
    if (material.specularMap) {
      uniforms.specularMap.value = material.specularMap;
    }
    if (material.alphaTest > 0) {
      uniforms.alphaTest.value = material.alphaTest;
    }
    const envMap = properties.get(material).envMap;
    if (envMap) {
      uniforms.envMap.value = envMap;
      uniforms.flipEnvMap.value = envMap.isCubeTexture && envMap.isRenderTargetTexture === false ? -1 : 1;
      uniforms.reflectivity.value = material.reflectivity;
      uniforms.ior.value = material.ior;
      uniforms.refractionRatio.value = material.refractionRatio;
    }
    if (material.lightMap) {
      uniforms.lightMap.value = material.lightMap;
      const scaleFactor = renderer.physicallyCorrectLights !== true ? Math.PI : 1;
      uniforms.lightMapIntensity.value = material.lightMapIntensity * scaleFactor;
    }
    if (material.aoMap) {
      uniforms.aoMap.value = material.aoMap;
      uniforms.aoMapIntensity.value = material.aoMapIntensity;
    }
    let uvScaleMap;
    if (material.map) {
      uvScaleMap = material.map;
    } else if (material.specularMap) {
      uvScaleMap = material.specularMap;
    } else if (material.displacementMap) {
      uvScaleMap = material.displacementMap;
    } else if (material.normalMap) {
      uvScaleMap = material.normalMap;
    } else if (material.bumpMap) {
      uvScaleMap = material.bumpMap;
    } else if (material.roughnessMap) {
      uvScaleMap = material.roughnessMap;
    } else if (material.metalnessMap) {
      uvScaleMap = material.metalnessMap;
    } else if (material.alphaMap) {
      uvScaleMap = material.alphaMap;
    } else if (material.emissiveMap) {
      uvScaleMap = material.emissiveMap;
    } else if (material.clearcoatMap) {
      uvScaleMap = material.clearcoatMap;
    } else if (material.clearcoatNormalMap) {
      uvScaleMap = material.clearcoatNormalMap;
    } else if (material.clearcoatRoughnessMap) {
      uvScaleMap = material.clearcoatRoughnessMap;
    } else if (material.specularIntensityMap) {
      uvScaleMap = material.specularIntensityMap;
    } else if (material.specularColorMap) {
      uvScaleMap = material.specularColorMap;
    } else if (material.transmissionMap) {
      uvScaleMap = material.transmissionMap;
    } else if (material.thicknessMap) {
      uvScaleMap = material.thicknessMap;
    } else if (material.sheenColorMap) {
      uvScaleMap = material.sheenColorMap;
    } else if (material.sheenRoughnessMap) {
      uvScaleMap = material.sheenRoughnessMap;
    }
    if (uvScaleMap !== void 0) {
      if (uvScaleMap.isWebGLRenderTarget) {
        uvScaleMap = uvScaleMap.texture;
      }
      if (uvScaleMap.matrixAutoUpdate === true) {
        uvScaleMap.updateMatrix();
      }
      uniforms.uvTransform.value.copy(uvScaleMap.matrix);
    }
    let uv2ScaleMap;
    if (material.aoMap) {
      uv2ScaleMap = material.aoMap;
    } else if (material.lightMap) {
      uv2ScaleMap = material.lightMap;
    }
    if (uv2ScaleMap !== void 0) {
      if (uv2ScaleMap.isWebGLRenderTarget) {
        uv2ScaleMap = uv2ScaleMap.texture;
      }
      if (uv2ScaleMap.matrixAutoUpdate === true) {
        uv2ScaleMap.updateMatrix();
      }
      uniforms.uv2Transform.value.copy(uv2ScaleMap.matrix);
    }
  }
  function refreshUniformsLine(uniforms, material) {
    uniforms.diffuse.value.copy(material.color);
    uniforms.opacity.value = material.opacity;
  }
  function refreshUniformsDash(uniforms, material) {
    uniforms.dashSize.value = material.dashSize;
    uniforms.totalSize.value = material.dashSize + material.gapSize;
    uniforms.scale.value = material.scale;
  }
  function refreshUniformsPoints(uniforms, material, pixelRatio, height) {
    uniforms.diffuse.value.copy(material.color);
    uniforms.opacity.value = material.opacity;
    uniforms.size.value = material.size * pixelRatio;
    uniforms.scale.value = height * 0.5;
    if (material.map) {
      uniforms.map.value = material.map;
    }
    if (material.alphaMap) {
      uniforms.alphaMap.value = material.alphaMap;
    }
    if (material.alphaTest > 0) {
      uniforms.alphaTest.value = material.alphaTest;
    }
    let uvScaleMap;
    if (material.map) {
      uvScaleMap = material.map;
    } else if (material.alphaMap) {
      uvScaleMap = material.alphaMap;
    }
    if (uvScaleMap !== void 0) {
      if (uvScaleMap.matrixAutoUpdate === true) {
        uvScaleMap.updateMatrix();
      }
      uniforms.uvTransform.value.copy(uvScaleMap.matrix);
    }
  }
  function refreshUniformsSprites(uniforms, material) {
    uniforms.diffuse.value.copy(material.color);
    uniforms.opacity.value = material.opacity;
    uniforms.rotation.value = material.rotation;
    if (material.map) {
      uniforms.map.value = material.map;
    }
    if (material.alphaMap) {
      uniforms.alphaMap.value = material.alphaMap;
    }
    if (material.alphaTest > 0) {
      uniforms.alphaTest.value = material.alphaTest;
    }
    let uvScaleMap;
    if (material.map) {
      uvScaleMap = material.map;
    } else if (material.alphaMap) {
      uvScaleMap = material.alphaMap;
    }
    if (uvScaleMap !== void 0) {
      if (uvScaleMap.matrixAutoUpdate === true) {
        uvScaleMap.updateMatrix();
      }
      uniforms.uvTransform.value.copy(uvScaleMap.matrix);
    }
  }
  function refreshUniformsPhong(uniforms, material) {
    uniforms.specular.value.copy(material.specular);
    uniforms.shininess.value = Math.max(material.shininess, 1e-4);
  }
  function refreshUniformsToon(uniforms, material) {
    if (material.gradientMap) {
      uniforms.gradientMap.value = material.gradientMap;
    }
  }
  function refreshUniformsStandard(uniforms, material) {
    uniforms.roughness.value = material.roughness;
    uniforms.metalness.value = material.metalness;
    if (material.roughnessMap) {
      uniforms.roughnessMap.value = material.roughnessMap;
    }
    if (material.metalnessMap) {
      uniforms.metalnessMap.value = material.metalnessMap;
    }
    const envMap = properties.get(material).envMap;
    if (envMap) {
      uniforms.envMapIntensity.value = material.envMapIntensity;
    }
  }
  function refreshUniformsPhysical(uniforms, material, transmissionRenderTarget) {
    uniforms.ior.value = material.ior;
    if (material.sheen > 0) {
      uniforms.sheenColor.value.copy(material.sheenColor).multiplyScalar(material.sheen);
      uniforms.sheenRoughness.value = material.sheenRoughness;
      if (material.sheenColorMap) {
        uniforms.sheenColorMap.value = material.sheenColorMap;
      }
      if (material.sheenRoughnessMap) {
        uniforms.sheenRoughnessMap.value = material.sheenRoughnessMap;
      }
    }
    if (material.clearcoat > 0) {
      uniforms.clearcoat.value = material.clearcoat;
      uniforms.clearcoatRoughness.value = material.clearcoatRoughness;
      if (material.clearcoatMap) {
        uniforms.clearcoatMap.value = material.clearcoatMap;
      }
      if (material.clearcoatRoughnessMap) {
        uniforms.clearcoatRoughnessMap.value = material.clearcoatRoughnessMap;
      }
      if (material.clearcoatNormalMap) {
        uniforms.clearcoatNormalScale.value.copy(material.clearcoatNormalScale);
        uniforms.clearcoatNormalMap.value = material.clearcoatNormalMap;
        if (material.side === BackSide) {
          uniforms.clearcoatNormalScale.value.negate();
        }
      }
    }
    if (material.transmission > 0) {
      uniforms.transmission.value = material.transmission;
      uniforms.transmissionSamplerMap.value = transmissionRenderTarget.texture;
      uniforms.transmissionSamplerSize.value.set(transmissionRenderTarget.width, transmissionRenderTarget.height);
      if (material.transmissionMap) {
        uniforms.transmissionMap.value = material.transmissionMap;
      }
      uniforms.thickness.value = material.thickness;
      if (material.thicknessMap) {
        uniforms.thicknessMap.value = material.thicknessMap;
      }
      uniforms.attenuationDistance.value = material.attenuationDistance;
      uniforms.attenuationColor.value.copy(material.attenuationColor);
    }
    uniforms.specularIntensity.value = material.specularIntensity;
    uniforms.specularColor.value.copy(material.specularColor);
    if (material.specularIntensityMap) {
      uniforms.specularIntensityMap.value = material.specularIntensityMap;
    }
    if (material.specularColorMap) {
      uniforms.specularColorMap.value = material.specularColorMap;
    }
  }
  function refreshUniformsMatcap(uniforms, material) {
    if (material.matcap) {
      uniforms.matcap.value = material.matcap;
    }
  }
  function refreshUniformsDistance(uniforms, material) {
    uniforms.referencePosition.value.copy(material.referencePosition);
    uniforms.nearDistance.value = material.nearDistance;
    uniforms.farDistance.value = material.farDistance;
  }
  return {
    refreshFogUniforms,
    refreshMaterialUniforms
  };
}
function createCanvasElement() {
  const canvas = createElementNS("canvas");
  canvas.style.display = "block";
  return canvas;
}
function WebGLRenderer(parameters = {}) {
  const _canvas2 = parameters.canvas !== void 0 ? parameters.canvas : createCanvasElement(), _context2 = parameters.context !== void 0 ? parameters.context : null, _depth = parameters.depth !== void 0 ? parameters.depth : true, _stencil = parameters.stencil !== void 0 ? parameters.stencil : true, _antialias = parameters.antialias !== void 0 ? parameters.antialias : false, _premultipliedAlpha = parameters.premultipliedAlpha !== void 0 ? parameters.premultipliedAlpha : true, _preserveDrawingBuffer = parameters.preserveDrawingBuffer !== void 0 ? parameters.preserveDrawingBuffer : false, _powerPreference = parameters.powerPreference !== void 0 ? parameters.powerPreference : "default", _failIfMajorPerformanceCaveat = parameters.failIfMajorPerformanceCaveat !== void 0 ? parameters.failIfMajorPerformanceCaveat : false;
  let _alpha;
  if (parameters.context !== void 0) {
    _alpha = _context2.getContextAttributes().alpha;
  } else {
    _alpha = parameters.alpha !== void 0 ? parameters.alpha : false;
  }
  let currentRenderList = null;
  let currentRenderState = null;
  const renderListStack = [];
  const renderStateStack = [];
  this.domElement = _canvas2;
  this.debug = {
    checkShaderErrors: true
  };
  this.autoClear = true;
  this.autoClearColor = true;
  this.autoClearDepth = true;
  this.autoClearStencil = true;
  this.sortObjects = true;
  this.clippingPlanes = [];
  this.localClippingEnabled = false;
  this.outputEncoding = LinearEncoding;
  this.physicallyCorrectLights = false;
  this.toneMapping = NoToneMapping;
  this.toneMappingExposure = 1;
  const _this = this;
  let _isContextLost = false;
  let _currentActiveCubeFace = 0;
  let _currentActiveMipmapLevel = 0;
  let _currentRenderTarget = null;
  let _currentMaterialId = -1;
  let _currentCamera = null;
  const _currentViewport = new Vector4();
  const _currentScissor = new Vector4();
  let _currentScissorTest = null;
  let _width = _canvas2.width;
  let _height = _canvas2.height;
  let _pixelRatio = 1;
  let _opaqueSort = null;
  let _transparentSort = null;
  const _viewport = new Vector4(0, 0, _width, _height);
  const _scissor = new Vector4(0, 0, _width, _height);
  let _scissorTest = false;
  const _frustum = new Frustum();
  let _clippingEnabled = false;
  let _localClippingEnabled = false;
  let _transmissionRenderTarget = null;
  const _projScreenMatrix2 = new Matrix4();
  const _vector22 = new Vector2();
  const _vector3 = new Vector3();
  const _emptyScene = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: true };
  function getTargetPixelRatio() {
    return _currentRenderTarget === null ? _pixelRatio : 1;
  }
  let _gl = _context2;
  function getContext(contextNames, contextAttributes) {
    for (let i = 0; i < contextNames.length; i++) {
      const contextName = contextNames[i];
      const context = _canvas2.getContext(contextName, contextAttributes);
      if (context !== null)
        return context;
    }
    return null;
  }
  try {
    const contextAttributes = {
      alpha: true,
      depth: _depth,
      stencil: _stencil,
      antialias: _antialias,
      premultipliedAlpha: _premultipliedAlpha,
      preserveDrawingBuffer: _preserveDrawingBuffer,
      powerPreference: _powerPreference,
      failIfMajorPerformanceCaveat: _failIfMajorPerformanceCaveat
    };
    if ("setAttribute" in _canvas2)
      _canvas2.setAttribute("data-engine", `three.js r${REVISION}`);
    _canvas2.addEventListener("webglcontextlost", onContextLost, false);
    _canvas2.addEventListener("webglcontextrestored", onContextRestore, false);
    if (_gl === null) {
      const contextNames = ["webgl2", "webgl", "experimental-webgl"];
      if (_this.isWebGL1Renderer === true) {
        contextNames.shift();
      }
      _gl = getContext(contextNames, contextAttributes);
      if (_gl === null) {
        if (getContext(contextNames)) {
          throw new Error("Error creating WebGL context with your selected attributes.");
        } else {
          throw new Error("Error creating WebGL context.");
        }
      }
    }
    if (_gl.getShaderPrecisionFormat === void 0) {
      _gl.getShaderPrecisionFormat = function() {
        return { "rangeMin": 1, "rangeMax": 1, "precision": 1 };
      };
    }
  } catch (error) {
    console.error("THREE.WebGLRenderer: " + error.message);
    throw error;
  }
  let extensions, capabilities, state, info;
  let properties, textures, cubemaps, cubeuvmaps, attributes, geometries, objects;
  let programCache, materials, renderLists, renderStates, clipping, shadowMap;
  let background, morphtargets, bufferRenderer, indexedBufferRenderer;
  let utils, bindingStates;
  function initGLContext() {
    extensions = new WebGLExtensions(_gl);
    capabilities = new WebGLCapabilities(_gl, extensions, parameters);
    extensions.init(capabilities);
    utils = new WebGLUtils(_gl, extensions, capabilities);
    state = new WebGLState(_gl, extensions, capabilities);
    info = new WebGLInfo(_gl);
    properties = new WebGLProperties();
    textures = new WebGLTextures(_gl, extensions, state, properties, capabilities, utils, info);
    cubemaps = new WebGLCubeMaps(_this);
    cubeuvmaps = new WebGLCubeUVMaps(_this);
    attributes = new WebGLAttributes(_gl, capabilities);
    bindingStates = new WebGLBindingStates(_gl, extensions, attributes, capabilities);
    geometries = new WebGLGeometries(_gl, attributes, info, bindingStates);
    objects = new WebGLObjects(_gl, geometries, attributes, info);
    morphtargets = new WebGLMorphtargets(_gl, capabilities, textures);
    clipping = new WebGLClipping(properties);
    programCache = new WebGLPrograms(_this, cubemaps, cubeuvmaps, extensions, capabilities, bindingStates, clipping);
    materials = new WebGLMaterials(_this, properties);
    renderLists = new WebGLRenderLists();
    renderStates = new WebGLRenderStates(extensions, capabilities);
    background = new WebGLBackground(_this, cubemaps, state, objects, _alpha, _premultipliedAlpha);
    shadowMap = new WebGLShadowMap(_this, objects, capabilities);
    bufferRenderer = new WebGLBufferRenderer(_gl, extensions, info, capabilities);
    indexedBufferRenderer = new WebGLIndexedBufferRenderer(_gl, extensions, info, capabilities);
    info.programs = programCache.programs;
    _this.capabilities = capabilities;
    _this.extensions = extensions;
    _this.properties = properties;
    _this.renderLists = renderLists;
    _this.shadowMap = shadowMap;
    _this.state = state;
    _this.info = info;
  }
  initGLContext();
  const xr = new WebXRManager(_this, _gl);
  this.xr = xr;
  this.getContext = function() {
    return _gl;
  };
  this.getContextAttributes = function() {
    return _gl.getContextAttributes();
  };
  this.forceContextLoss = function() {
    const extension = extensions.get("WEBGL_lose_context");
    if (extension)
      extension.loseContext();
  };
  this.forceContextRestore = function() {
    const extension = extensions.get("WEBGL_lose_context");
    if (extension)
      extension.restoreContext();
  };
  this.getPixelRatio = function() {
    return _pixelRatio;
  };
  this.setPixelRatio = function(value) {
    if (value === void 0)
      return;
    _pixelRatio = value;
    this.setSize(_width, _height, false);
  };
  this.getSize = function(target) {
    return target.set(_width, _height);
  };
  this.setSize = function(width, height, updateStyle) {
    if (xr.isPresenting) {
      console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");
      return;
    }
    _width = width;
    _height = height;
    _canvas2.width = Math.floor(width * _pixelRatio);
    _canvas2.height = Math.floor(height * _pixelRatio);
    if (updateStyle !== false) {
      _canvas2.style.width = width + "px";
      _canvas2.style.height = height + "px";
    }
    this.setViewport(0, 0, width, height);
  };
  this.getDrawingBufferSize = function(target) {
    return target.set(_width * _pixelRatio, _height * _pixelRatio).floor();
  };
  this.setDrawingBufferSize = function(width, height, pixelRatio) {
    _width = width;
    _height = height;
    _pixelRatio = pixelRatio;
    _canvas2.width = Math.floor(width * pixelRatio);
    _canvas2.height = Math.floor(height * pixelRatio);
    this.setViewport(0, 0, width, height);
  };
  this.getCurrentViewport = function(target) {
    return target.copy(_currentViewport);
  };
  this.getViewport = function(target) {
    return target.copy(_viewport);
  };
  this.setViewport = function(x, y, width, height) {
    if (x.isVector4) {
      _viewport.set(x.x, x.y, x.z, x.w);
    } else {
      _viewport.set(x, y, width, height);
    }
    state.viewport(_currentViewport.copy(_viewport).multiplyScalar(_pixelRatio).floor());
  };
  this.getScissor = function(target) {
    return target.copy(_scissor);
  };
  this.setScissor = function(x, y, width, height) {
    if (x.isVector4) {
      _scissor.set(x.x, x.y, x.z, x.w);
    } else {
      _scissor.set(x, y, width, height);
    }
    state.scissor(_currentScissor.copy(_scissor).multiplyScalar(_pixelRatio).floor());
  };
  this.getScissorTest = function() {
    return _scissorTest;
  };
  this.setScissorTest = function(boolean) {
    state.setScissorTest(_scissorTest = boolean);
  };
  this.setOpaqueSort = function(method) {
    _opaqueSort = method;
  };
  this.setTransparentSort = function(method) {
    _transparentSort = method;
  };
  this.getClearColor = function(target) {
    return target.copy(background.getClearColor());
  };
  this.setClearColor = function() {
    background.setClearColor.apply(background, arguments);
  };
  this.getClearAlpha = function() {
    return background.getClearAlpha();
  };
  this.setClearAlpha = function() {
    background.setClearAlpha.apply(background, arguments);
  };
  this.clear = function(color = true, depth = true, stencil = true) {
    let bits = 0;
    if (color)
      bits |= 16384;
    if (depth)
      bits |= 256;
    if (stencil)
      bits |= 1024;
    _gl.clear(bits);
  };
  this.clearColor = function() {
    this.clear(true, false, false);
  };
  this.clearDepth = function() {
    this.clear(false, true, false);
  };
  this.clearStencil = function() {
    this.clear(false, false, true);
  };
  this.dispose = function() {
    _canvas2.removeEventListener("webglcontextlost", onContextLost, false);
    _canvas2.removeEventListener("webglcontextrestored", onContextRestore, false);
    renderLists.dispose();
    renderStates.dispose();
    properties.dispose();
    cubemaps.dispose();
    cubeuvmaps.dispose();
    objects.dispose();
    bindingStates.dispose();
    programCache.dispose();
    xr.dispose();
    xr.removeEventListener("sessionstart", onXRSessionStart);
    xr.removeEventListener("sessionend", onXRSessionEnd);
    if (_transmissionRenderTarget) {
      _transmissionRenderTarget.dispose();
      _transmissionRenderTarget = null;
    }
    animation.stop();
  };
  function onContextLost(event) {
    event.preventDefault();
    console.log("THREE.WebGLRenderer: Context Lost.");
    _isContextLost = true;
  }
  function onContextRestore() {
    console.log("THREE.WebGLRenderer: Context Restored.");
    _isContextLost = false;
    const infoAutoReset = info.autoReset;
    const shadowMapEnabled = shadowMap.enabled;
    const shadowMapAutoUpdate = shadowMap.autoUpdate;
    const shadowMapNeedsUpdate = shadowMap.needsUpdate;
    const shadowMapType = shadowMap.type;
    initGLContext();
    info.autoReset = infoAutoReset;
    shadowMap.enabled = shadowMapEnabled;
    shadowMap.autoUpdate = shadowMapAutoUpdate;
    shadowMap.needsUpdate = shadowMapNeedsUpdate;
    shadowMap.type = shadowMapType;
  }
  function onMaterialDispose(event) {
    const material = event.target;
    material.removeEventListener("dispose", onMaterialDispose);
    deallocateMaterial(material);
  }
  function deallocateMaterial(material) {
    releaseMaterialProgramReferences(material);
    properties.remove(material);
  }
  function releaseMaterialProgramReferences(material) {
    const programs = properties.get(material).programs;
    if (programs !== void 0) {
      programs.forEach(function(program) {
        programCache.releaseProgram(program);
      });
      if (material.isShaderMaterial) {
        programCache.releaseShaderCache(material);
      }
    }
  }
  this.renderBufferDirect = function(camera, scene, geometry, material, object, group) {
    if (scene === null)
      scene = _emptyScene;
    const frontFaceCW = object.isMesh && object.matrixWorld.determinant() < 0;
    const program = setProgram(camera, scene, geometry, material, object);
    state.setMaterial(material, frontFaceCW);
    let index = geometry.index;
    const position = geometry.attributes.position;
    if (index === null) {
      if (position === void 0 || position.count === 0)
        return;
    } else if (index.count === 0) {
      return;
    }
    let rangeFactor = 1;
    if (material.wireframe === true) {
      index = geometries.getWireframeAttribute(geometry);
      rangeFactor = 2;
    }
    bindingStates.setup(object, material, program, geometry, index);
    let attribute;
    let renderer = bufferRenderer;
    if (index !== null) {
      attribute = attributes.get(index);
      renderer = indexedBufferRenderer;
      renderer.setIndex(attribute);
    }
    const dataCount = index !== null ? index.count : position.count;
    const rangeStart = geometry.drawRange.start * rangeFactor;
    const rangeCount = geometry.drawRange.count * rangeFactor;
    const groupStart = group !== null ? group.start * rangeFactor : 0;
    const groupCount = group !== null ? group.count * rangeFactor : Infinity;
    const drawStart = Math.max(rangeStart, groupStart);
    const drawEnd = Math.min(dataCount, rangeStart + rangeCount, groupStart + groupCount) - 1;
    const drawCount = Math.max(0, drawEnd - drawStart + 1);
    if (drawCount === 0)
      return;
    if (object.isMesh) {
      if (material.wireframe === true) {
        state.setLineWidth(material.wireframeLinewidth * getTargetPixelRatio());
        renderer.setMode(1);
      } else {
        renderer.setMode(4);
      }
    } else if (object.isLine) {
      let lineWidth = material.linewidth;
      if (lineWidth === void 0)
        lineWidth = 1;
      state.setLineWidth(lineWidth * getTargetPixelRatio());
      if (object.isLineSegments) {
        renderer.setMode(1);
      } else if (object.isLineLoop) {
        renderer.setMode(2);
      } else {
        renderer.setMode(3);
      }
    } else if (object.isPoints) {
      renderer.setMode(0);
    } else if (object.isSprite) {
      renderer.setMode(4);
    }
    if (object.isInstancedMesh) {
      renderer.renderInstances(drawStart, drawCount, object.count);
    } else if (geometry.isInstancedBufferGeometry) {
      const instanceCount = Math.min(geometry.instanceCount, geometry._maxInstanceCount);
      renderer.renderInstances(drawStart, drawCount, instanceCount);
    } else {
      renderer.render(drawStart, drawCount);
    }
  };
  this.compile = function(scene, camera) {
    currentRenderState = renderStates.get(scene);
    currentRenderState.init();
    renderStateStack.push(currentRenderState);
    scene.traverseVisible(function(object) {
      if (object.isLight && object.layers.test(camera.layers)) {
        currentRenderState.pushLight(object);
        if (object.castShadow) {
          currentRenderState.pushShadow(object);
        }
      }
    });
    currentRenderState.setupLights(_this.physicallyCorrectLights);
    scene.traverse(function(object) {
      const material = object.material;
      if (material) {
        if (Array.isArray(material)) {
          for (let i = 0; i < material.length; i++) {
            const material2 = material[i];
            getProgram(material2, scene, object);
          }
        } else {
          getProgram(material, scene, object);
        }
      }
    });
    renderStateStack.pop();
    currentRenderState = null;
  };
  let onAnimationFrameCallback = null;
  function onAnimationFrame(time) {
    if (onAnimationFrameCallback)
      onAnimationFrameCallback(time);
  }
  function onXRSessionStart() {
    animation.stop();
  }
  function onXRSessionEnd() {
    animation.start();
  }
  const animation = new WebGLAnimation();
  animation.setAnimationLoop(onAnimationFrame);
  if (typeof self !== "undefined")
    animation.setContext(self);
  this.setAnimationLoop = function(callback) {
    onAnimationFrameCallback = callback;
    xr.setAnimationLoop(callback);
    callback === null ? animation.stop() : animation.start();
  };
  xr.addEventListener("sessionstart", onXRSessionStart);
  xr.addEventListener("sessionend", onXRSessionEnd);
  this.render = function(scene, camera) {
    if (camera !== void 0 && camera.isCamera !== true) {
      console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
      return;
    }
    if (_isContextLost === true)
      return;
    if (scene.autoUpdate === true)
      scene.updateMatrixWorld();
    if (camera.parent === null)
      camera.updateMatrixWorld();
    if (xr.enabled === true && xr.isPresenting === true) {
      if (xr.cameraAutoUpdate === true)
        xr.updateCamera(camera);
      camera = xr.getCamera();
    }
    if (scene.isScene === true)
      scene.onBeforeRender(_this, scene, camera, _currentRenderTarget);
    currentRenderState = renderStates.get(scene, renderStateStack.length);
    currentRenderState.init();
    renderStateStack.push(currentRenderState);
    _projScreenMatrix2.multiplyMatrices(camera.projectionMatrix, camera.matrixWorldInverse);
    _frustum.setFromProjectionMatrix(_projScreenMatrix2);
    _localClippingEnabled = this.localClippingEnabled;
    _clippingEnabled = clipping.init(this.clippingPlanes, _localClippingEnabled, camera);
    currentRenderList = renderLists.get(scene, renderListStack.length);
    currentRenderList.init();
    renderListStack.push(currentRenderList);
    projectObject(scene, camera, 0, _this.sortObjects);
    currentRenderList.finish();
    if (_this.sortObjects === true) {
      currentRenderList.sort(_opaqueSort, _transparentSort);
    }
    if (_clippingEnabled === true)
      clipping.beginShadows();
    const shadowsArray = currentRenderState.state.shadowsArray;
    shadowMap.render(shadowsArray, scene, camera);
    if (_clippingEnabled === true)
      clipping.endShadows();
    if (this.info.autoReset === true)
      this.info.reset();
    background.render(currentRenderList, scene);
    currentRenderState.setupLights(_this.physicallyCorrectLights);
    if (camera.isArrayCamera) {
      const cameras = camera.cameras;
      for (let i = 0, l = cameras.length; i < l; i++) {
        const camera2 = cameras[i];
        renderScene(currentRenderList, scene, camera2, camera2.viewport);
      }
    } else {
      renderScene(currentRenderList, scene, camera);
    }
    if (_currentRenderTarget !== null) {
      textures.updateMultisampleRenderTarget(_currentRenderTarget);
      textures.updateRenderTargetMipmap(_currentRenderTarget);
    }
    if (scene.isScene === true)
      scene.onAfterRender(_this, scene, camera);
    bindingStates.resetDefaultState();
    _currentMaterialId = -1;
    _currentCamera = null;
    renderStateStack.pop();
    if (renderStateStack.length > 0) {
      currentRenderState = renderStateStack[renderStateStack.length - 1];
    } else {
      currentRenderState = null;
    }
    renderListStack.pop();
    if (renderListStack.length > 0) {
      currentRenderList = renderListStack[renderListStack.length - 1];
    } else {
      currentRenderList = null;
    }
  };
  function projectObject(object, camera, groupOrder, sortObjects) {
    if (object.visible === false)
      return;
    const visible = object.layers.test(camera.layers);
    if (visible) {
      if (object.isGroup) {
        groupOrder = object.renderOrder;
      } else if (object.isLOD) {
        if (object.autoUpdate === true)
          object.update(camera);
      } else if (object.isLight) {
        currentRenderState.pushLight(object);
        if (object.castShadow) {
          currentRenderState.pushShadow(object);
        }
      } else if (object.isSprite) {
        if (!object.frustumCulled || _frustum.intersectsSprite(object)) {
          if (sortObjects) {
            _vector3.setFromMatrixPosition(object.matrixWorld).applyMatrix4(_projScreenMatrix2);
          }
          const geometry = objects.update(object);
          const material = object.material;
          if (material.visible) {
            currentRenderList.push(object, geometry, material, groupOrder, _vector3.z, null);
          }
        }
      } else if (object.isMesh || object.isLine || object.isPoints) {
        if (object.isSkinnedMesh) {
          if (object.skeleton.frame !== info.render.frame) {
            object.skeleton.update();
            object.skeleton.frame = info.render.frame;
          }
        }
        if (!object.frustumCulled || _frustum.intersectsObject(object)) {
          if (sortObjects) {
            _vector3.setFromMatrixPosition(object.matrixWorld).applyMatrix4(_projScreenMatrix2);
          }
          const geometry = objects.update(object);
          const material = object.material;
          if (Array.isArray(material)) {
            const groups = geometry.groups;
            for (let i = 0, l = groups.length; i < l; i++) {
              const group = groups[i];
              const groupMaterial = material[group.materialIndex];
              if (groupMaterial && groupMaterial.visible) {
                currentRenderList.push(object, geometry, groupMaterial, groupOrder, _vector3.z, group);
              }
            }
          } else if (material.visible) {
            currentRenderList.push(object, geometry, material, groupOrder, _vector3.z, null);
          }
        }
      }
    }
    const children = object.children;
    for (let i = 0, l = children.length; i < l; i++) {
      projectObject(children[i], camera, groupOrder, sortObjects);
    }
  }
  function renderScene(currentRenderList2, scene, camera, viewport) {
    const opaqueObjects = currentRenderList2.opaque;
    const transmissiveObjects = currentRenderList2.transmissive;
    const transparentObjects = currentRenderList2.transparent;
    currentRenderState.setupLightsView(camera);
    if (transmissiveObjects.length > 0)
      renderTransmissionPass(opaqueObjects, scene, camera);
    if (viewport)
      state.viewport(_currentViewport.copy(viewport));
    if (opaqueObjects.length > 0)
      renderObjects(opaqueObjects, scene, camera);
    if (transmissiveObjects.length > 0)
      renderObjects(transmissiveObjects, scene, camera);
    if (transparentObjects.length > 0)
      renderObjects(transparentObjects, scene, camera);
    state.buffers.depth.setTest(true);
    state.buffers.depth.setMask(true);
    state.buffers.color.setMask(true);
    state.setPolygonOffset(false);
  }
  function renderTransmissionPass(opaqueObjects, scene, camera) {
    const isWebGL2 = capabilities.isWebGL2;
    if (_transmissionRenderTarget === null) {
      _transmissionRenderTarget = new WebGLRenderTarget(1, 1, {
        generateMipmaps: true,
        type: utils.convert(HalfFloatType) !== null ? HalfFloatType : UnsignedByteType,
        minFilter: LinearMipmapLinearFilter,
        samples: isWebGL2 && _antialias === true ? 4 : 0
      });
    }
    _this.getDrawingBufferSize(_vector22);
    if (isWebGL2) {
      _transmissionRenderTarget.setSize(_vector22.x, _vector22.y);
    } else {
      _transmissionRenderTarget.setSize(floorPowerOfTwo(_vector22.x), floorPowerOfTwo(_vector22.y));
    }
    const currentRenderTarget = _this.getRenderTarget();
    _this.setRenderTarget(_transmissionRenderTarget);
    _this.clear();
    const currentToneMapping = _this.toneMapping;
    _this.toneMapping = NoToneMapping;
    renderObjects(opaqueObjects, scene, camera);
    _this.toneMapping = currentToneMapping;
    textures.updateMultisampleRenderTarget(_transmissionRenderTarget);
    textures.updateRenderTargetMipmap(_transmissionRenderTarget);
    _this.setRenderTarget(currentRenderTarget);
  }
  function renderObjects(renderList, scene, camera) {
    const overrideMaterial = scene.isScene === true ? scene.overrideMaterial : null;
    for (let i = 0, l = renderList.length; i < l; i++) {
      const renderItem = renderList[i];
      const object = renderItem.object;
      const geometry = renderItem.geometry;
      const material = overrideMaterial === null ? renderItem.material : overrideMaterial;
      const group = renderItem.group;
      if (object.layers.test(camera.layers)) {
        renderObject(object, scene, camera, geometry, material, group);
      }
    }
  }
  function renderObject(object, scene, camera, geometry, material, group) {
    object.onBeforeRender(_this, scene, camera, geometry, material, group);
    object.modelViewMatrix.multiplyMatrices(camera.matrixWorldInverse, object.matrixWorld);
    object.normalMatrix.getNormalMatrix(object.modelViewMatrix);
    material.onBeforeRender(_this, scene, camera, geometry, object, group);
    if (material.transparent === true && material.side === DoubleSide) {
      material.side = BackSide;
      material.needsUpdate = true;
      _this.renderBufferDirect(camera, scene, geometry, material, object, group);
      material.side = FrontSide;
      material.needsUpdate = true;
      _this.renderBufferDirect(camera, scene, geometry, material, object, group);
      material.side = DoubleSide;
    } else {
      _this.renderBufferDirect(camera, scene, geometry, material, object, group);
    }
    object.onAfterRender(_this, scene, camera, geometry, material, group);
  }
  function getProgram(material, scene, object) {
    if (scene.isScene !== true)
      scene = _emptyScene;
    const materialProperties = properties.get(material);
    const lights = currentRenderState.state.lights;
    const shadowsArray = currentRenderState.state.shadowsArray;
    const lightsStateVersion = lights.state.version;
    const parameters2 = programCache.getParameters(material, lights.state, shadowsArray, scene, object);
    const programCacheKey = programCache.getProgramCacheKey(parameters2);
    let programs = materialProperties.programs;
    materialProperties.environment = material.isMeshStandardMaterial ? scene.environment : null;
    materialProperties.fog = scene.fog;
    materialProperties.envMap = (material.isMeshStandardMaterial ? cubeuvmaps : cubemaps).get(material.envMap || materialProperties.environment);
    if (programs === void 0) {
      material.addEventListener("dispose", onMaterialDispose);
      programs = /* @__PURE__ */ new Map();
      materialProperties.programs = programs;
    }
    let program = programs.get(programCacheKey);
    if (program !== void 0) {
      if (materialProperties.currentProgram === program && materialProperties.lightsStateVersion === lightsStateVersion) {
        updateCommonMaterialProperties(material, parameters2);
        return program;
      }
    } else {
      parameters2.uniforms = programCache.getUniforms(material);
      material.onBuild(object, parameters2, _this);
      material.onBeforeCompile(parameters2, _this);
      program = programCache.acquireProgram(parameters2, programCacheKey);
      programs.set(programCacheKey, program);
      materialProperties.uniforms = parameters2.uniforms;
    }
    const uniforms = materialProperties.uniforms;
    if (!material.isShaderMaterial && !material.isRawShaderMaterial || material.clipping === true) {
      uniforms.clippingPlanes = clipping.uniform;
    }
    updateCommonMaterialProperties(material, parameters2);
    materialProperties.needsLights = materialNeedsLights(material);
    materialProperties.lightsStateVersion = lightsStateVersion;
    if (materialProperties.needsLights) {
      uniforms.ambientLightColor.value = lights.state.ambient;
      uniforms.lightProbe.value = lights.state.probe;
      uniforms.directionalLights.value = lights.state.directional;
      uniforms.directionalLightShadows.value = lights.state.directionalShadow;
      uniforms.spotLights.value = lights.state.spot;
      uniforms.spotLightShadows.value = lights.state.spotShadow;
      uniforms.rectAreaLights.value = lights.state.rectArea;
      uniforms.ltc_1.value = lights.state.rectAreaLTC1;
      uniforms.ltc_2.value = lights.state.rectAreaLTC2;
      uniforms.pointLights.value = lights.state.point;
      uniforms.pointLightShadows.value = lights.state.pointShadow;
      uniforms.hemisphereLights.value = lights.state.hemi;
      uniforms.directionalShadowMap.value = lights.state.directionalShadowMap;
      uniforms.directionalShadowMatrix.value = lights.state.directionalShadowMatrix;
      uniforms.spotShadowMap.value = lights.state.spotShadowMap;
      uniforms.spotShadowMatrix.value = lights.state.spotShadowMatrix;
      uniforms.pointShadowMap.value = lights.state.pointShadowMap;
      uniforms.pointShadowMatrix.value = lights.state.pointShadowMatrix;
    }
    const progUniforms = program.getUniforms();
    const uniformsList = WebGLUniforms.seqWithValue(progUniforms.seq, uniforms);
    materialProperties.currentProgram = program;
    materialProperties.uniformsList = uniformsList;
    return program;
  }
  function updateCommonMaterialProperties(material, parameters2) {
    const materialProperties = properties.get(material);
    materialProperties.outputEncoding = parameters2.outputEncoding;
    materialProperties.instancing = parameters2.instancing;
    materialProperties.skinning = parameters2.skinning;
    materialProperties.morphTargets = parameters2.morphTargets;
    materialProperties.morphNormals = parameters2.morphNormals;
    materialProperties.morphColors = parameters2.morphColors;
    materialProperties.morphTargetsCount = parameters2.morphTargetsCount;
    materialProperties.numClippingPlanes = parameters2.numClippingPlanes;
    materialProperties.numIntersection = parameters2.numClipIntersection;
    materialProperties.vertexAlphas = parameters2.vertexAlphas;
    materialProperties.vertexTangents = parameters2.vertexTangents;
    materialProperties.toneMapping = parameters2.toneMapping;
  }
  function setProgram(camera, scene, geometry, material, object) {
    if (scene.isScene !== true)
      scene = _emptyScene;
    textures.resetTextureUnits();
    const fog = scene.fog;
    const environment = material.isMeshStandardMaterial ? scene.environment : null;
    const encoding = _currentRenderTarget === null ? _this.outputEncoding : _currentRenderTarget.isXRRenderTarget === true ? _currentRenderTarget.texture.encoding : LinearEncoding;
    const envMap = (material.isMeshStandardMaterial ? cubeuvmaps : cubemaps).get(material.envMap || environment);
    const vertexAlphas = material.vertexColors === true && !!geometry.attributes.color && geometry.attributes.color.itemSize === 4;
    const vertexTangents = !!material.normalMap && !!geometry.attributes.tangent;
    const morphTargets = !!geometry.morphAttributes.position;
    const morphNormals = !!geometry.morphAttributes.normal;
    const morphColors = !!geometry.morphAttributes.color;
    const toneMapping = material.toneMapped ? _this.toneMapping : NoToneMapping;
    const morphAttribute = geometry.morphAttributes.position || geometry.morphAttributes.normal || geometry.morphAttributes.color;
    const morphTargetsCount = morphAttribute !== void 0 ? morphAttribute.length : 0;
    const materialProperties = properties.get(material);
    const lights = currentRenderState.state.lights;
    if (_clippingEnabled === true) {
      if (_localClippingEnabled === true || camera !== _currentCamera) {
        const useCache = camera === _currentCamera && material.id === _currentMaterialId;
        clipping.setState(material, camera, useCache);
      }
    }
    let needsProgramChange = false;
    if (material.version === materialProperties.__version) {
      if (materialProperties.needsLights && materialProperties.lightsStateVersion !== lights.state.version) {
        needsProgramChange = true;
      } else if (materialProperties.outputEncoding !== encoding) {
        needsProgramChange = true;
      } else if (object.isInstancedMesh && materialProperties.instancing === false) {
        needsProgramChange = true;
      } else if (!object.isInstancedMesh && materialProperties.instancing === true) {
        needsProgramChange = true;
      } else if (object.isSkinnedMesh && materialProperties.skinning === false) {
        needsProgramChange = true;
      } else if (!object.isSkinnedMesh && materialProperties.skinning === true) {
        needsProgramChange = true;
      } else if (materialProperties.envMap !== envMap) {
        needsProgramChange = true;
      } else if (material.fog && materialProperties.fog !== fog) {
        needsProgramChange = true;
      } else if (materialProperties.numClippingPlanes !== void 0 && (materialProperties.numClippingPlanes !== clipping.numPlanes || materialProperties.numIntersection !== clipping.numIntersection)) {
        needsProgramChange = true;
      } else if (materialProperties.vertexAlphas !== vertexAlphas) {
        needsProgramChange = true;
      } else if (materialProperties.vertexTangents !== vertexTangents) {
        needsProgramChange = true;
      } else if (materialProperties.morphTargets !== morphTargets) {
        needsProgramChange = true;
      } else if (materialProperties.morphNormals !== morphNormals) {
        needsProgramChange = true;
      } else if (materialProperties.morphColors !== morphColors) {
        needsProgramChange = true;
      } else if (materialProperties.toneMapping !== toneMapping) {
        needsProgramChange = true;
      } else if (capabilities.isWebGL2 === true && materialProperties.morphTargetsCount !== morphTargetsCount) {
        needsProgramChange = true;
      }
    } else {
      needsProgramChange = true;
      materialProperties.__version = material.version;
    }
    let program = materialProperties.currentProgram;
    if (needsProgramChange === true) {
      program = getProgram(material, scene, object);
    }
    let refreshProgram = false;
    let refreshMaterial = false;
    let refreshLights = false;
    const p_uniforms = program.getUniforms(), m_uniforms = materialProperties.uniforms;
    if (state.useProgram(program.program)) {
      refreshProgram = true;
      refreshMaterial = true;
      refreshLights = true;
    }
    if (material.id !== _currentMaterialId) {
      _currentMaterialId = material.id;
      refreshMaterial = true;
    }
    if (refreshProgram || _currentCamera !== camera) {
      p_uniforms.setValue(_gl, "projectionMatrix", camera.projectionMatrix);
      if (capabilities.logarithmicDepthBuffer) {
        p_uniforms.setValue(_gl, "logDepthBufFC", 2 / (Math.log(camera.far + 1) / Math.LN2));
      }
      if (_currentCamera !== camera) {
        _currentCamera = camera;
        refreshMaterial = true;
        refreshLights = true;
      }
      if (material.isShaderMaterial || material.isMeshPhongMaterial || material.isMeshToonMaterial || material.isMeshStandardMaterial || material.envMap) {
        const uCamPos = p_uniforms.map.cameraPosition;
        if (uCamPos !== void 0) {
          uCamPos.setValue(_gl, _vector3.setFromMatrixPosition(camera.matrixWorld));
        }
      }
      if (material.isMeshPhongMaterial || material.isMeshToonMaterial || material.isMeshLambertMaterial || material.isMeshBasicMaterial || material.isMeshStandardMaterial || material.isShaderMaterial) {
        p_uniforms.setValue(_gl, "isOrthographic", camera.isOrthographicCamera === true);
      }
      if (material.isMeshPhongMaterial || material.isMeshToonMaterial || material.isMeshLambertMaterial || material.isMeshBasicMaterial || material.isMeshStandardMaterial || material.isShaderMaterial || material.isShadowMaterial || object.isSkinnedMesh) {
        p_uniforms.setValue(_gl, "viewMatrix", camera.matrixWorldInverse);
      }
    }
    if (object.isSkinnedMesh) {
      p_uniforms.setOptional(_gl, object, "bindMatrix");
      p_uniforms.setOptional(_gl, object, "bindMatrixInverse");
      const skeleton = object.skeleton;
      if (skeleton) {
        if (capabilities.floatVertexTextures) {
          if (skeleton.boneTexture === null)
            skeleton.computeBoneTexture();
          p_uniforms.setValue(_gl, "boneTexture", skeleton.boneTexture, textures);
          p_uniforms.setValue(_gl, "boneTextureSize", skeleton.boneTextureSize);
        } else {
          p_uniforms.setOptional(_gl, skeleton, "boneMatrices");
        }
      }
    }
    const morphAttributes = geometry.morphAttributes;
    if (morphAttributes.position !== void 0 || morphAttributes.normal !== void 0 || morphAttributes.color !== void 0 && capabilities.isWebGL2 === true) {
      morphtargets.update(object, geometry, material, program);
    }
    if (refreshMaterial || materialProperties.receiveShadow !== object.receiveShadow) {
      materialProperties.receiveShadow = object.receiveShadow;
      p_uniforms.setValue(_gl, "receiveShadow", object.receiveShadow);
    }
    if (refreshMaterial) {
      p_uniforms.setValue(_gl, "toneMappingExposure", _this.toneMappingExposure);
      if (materialProperties.needsLights) {
        markUniformsLightsNeedsUpdate(m_uniforms, refreshLights);
      }
      if (fog && material.fog) {
        materials.refreshFogUniforms(m_uniforms, fog);
      }
      materials.refreshMaterialUniforms(m_uniforms, material, _pixelRatio, _height, _transmissionRenderTarget);
      WebGLUniforms.upload(_gl, materialProperties.uniformsList, m_uniforms, textures);
    }
    if (material.isShaderMaterial && material.uniformsNeedUpdate === true) {
      WebGLUniforms.upload(_gl, materialProperties.uniformsList, m_uniforms, textures);
      material.uniformsNeedUpdate = false;
    }
    if (material.isSpriteMaterial) {
      p_uniforms.setValue(_gl, "center", object.center);
    }
    p_uniforms.setValue(_gl, "modelViewMatrix", object.modelViewMatrix);
    p_uniforms.setValue(_gl, "normalMatrix", object.normalMatrix);
    p_uniforms.setValue(_gl, "modelMatrix", object.matrixWorld);
    return program;
  }
  function markUniformsLightsNeedsUpdate(uniforms, value) {
    uniforms.ambientLightColor.needsUpdate = value;
    uniforms.lightProbe.needsUpdate = value;
    uniforms.directionalLights.needsUpdate = value;
    uniforms.directionalLightShadows.needsUpdate = value;
    uniforms.pointLights.needsUpdate = value;
    uniforms.pointLightShadows.needsUpdate = value;
    uniforms.spotLights.needsUpdate = value;
    uniforms.spotLightShadows.needsUpdate = value;
    uniforms.rectAreaLights.needsUpdate = value;
    uniforms.hemisphereLights.needsUpdate = value;
  }
  function materialNeedsLights(material) {
    return material.isMeshLambertMaterial || material.isMeshToonMaterial || material.isMeshPhongMaterial || material.isMeshStandardMaterial || material.isShadowMaterial || material.isShaderMaterial && material.lights === true;
  }
  this.getActiveCubeFace = function() {
    return _currentActiveCubeFace;
  };
  this.getActiveMipmapLevel = function() {
    return _currentActiveMipmapLevel;
  };
  this.getRenderTarget = function() {
    return _currentRenderTarget;
  };
  this.setRenderTargetTextures = function(renderTarget, colorTexture, depthTexture) {
    properties.get(renderTarget.texture).__webglTexture = colorTexture;
    properties.get(renderTarget.depthTexture).__webglTexture = depthTexture;
    const renderTargetProperties = properties.get(renderTarget);
    renderTargetProperties.__hasExternalTextures = true;
    if (renderTargetProperties.__hasExternalTextures) {
      renderTargetProperties.__autoAllocateDepthBuffer = depthTexture === void 0;
      if (!renderTargetProperties.__autoAllocateDepthBuffer) {
        if (extensions.has("WEBGL_multisampled_render_to_texture") === true) {
          console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided");
          renderTargetProperties.__useRenderToTexture = false;
        }
      }
    }
  };
  this.setRenderTargetFramebuffer = function(renderTarget, defaultFramebuffer) {
    const renderTargetProperties = properties.get(renderTarget);
    renderTargetProperties.__webglFramebuffer = defaultFramebuffer;
    renderTargetProperties.__useDefaultFramebuffer = defaultFramebuffer === void 0;
  };
  this.setRenderTarget = function(renderTarget, activeCubeFace = 0, activeMipmapLevel = 0) {
    _currentRenderTarget = renderTarget;
    _currentActiveCubeFace = activeCubeFace;
    _currentActiveMipmapLevel = activeMipmapLevel;
    let useDefaultFramebuffer = true;
    if (renderTarget) {
      const renderTargetProperties = properties.get(renderTarget);
      if (renderTargetProperties.__useDefaultFramebuffer !== void 0) {
        state.bindFramebuffer(36160, null);
        useDefaultFramebuffer = false;
      } else if (renderTargetProperties.__webglFramebuffer === void 0) {
        textures.setupRenderTarget(renderTarget);
      } else if (renderTargetProperties.__hasExternalTextures) {
        textures.rebindTextures(renderTarget, properties.get(renderTarget.texture).__webglTexture, properties.get(renderTarget.depthTexture).__webglTexture);
      }
    }
    let framebuffer = null;
    let isCube = false;
    let isRenderTarget3D = false;
    if (renderTarget) {
      const texture = renderTarget.texture;
      if (texture.isData3DTexture || texture.isDataArrayTexture) {
        isRenderTarget3D = true;
      }
      const __webglFramebuffer = properties.get(renderTarget).__webglFramebuffer;
      if (renderTarget.isWebGLCubeRenderTarget) {
        framebuffer = __webglFramebuffer[activeCubeFace];
        isCube = true;
      } else if (capabilities.isWebGL2 && renderTarget.samples > 0 && textures.useMultisampledRTT(renderTarget) === false) {
        framebuffer = properties.get(renderTarget).__webglMultisampledFramebuffer;
      } else {
        framebuffer = __webglFramebuffer;
      }
      _currentViewport.copy(renderTarget.viewport);
      _currentScissor.copy(renderTarget.scissor);
      _currentScissorTest = renderTarget.scissorTest;
    } else {
      _currentViewport.copy(_viewport).multiplyScalar(_pixelRatio).floor();
      _currentScissor.copy(_scissor).multiplyScalar(_pixelRatio).floor();
      _currentScissorTest = _scissorTest;
    }
    const framebufferBound = state.bindFramebuffer(36160, framebuffer);
    if (framebufferBound && capabilities.drawBuffers && useDefaultFramebuffer) {
      state.drawBuffers(renderTarget, framebuffer);
    }
    state.viewport(_currentViewport);
    state.scissor(_currentScissor);
    state.setScissorTest(_currentScissorTest);
    if (isCube) {
      const textureProperties = properties.get(renderTarget.texture);
      _gl.framebufferTexture2D(36160, 36064, 34069 + activeCubeFace, textureProperties.__webglTexture, activeMipmapLevel);
    } else if (isRenderTarget3D) {
      const textureProperties = properties.get(renderTarget.texture);
      const layer = activeCubeFace || 0;
      _gl.framebufferTextureLayer(36160, 36064, textureProperties.__webglTexture, activeMipmapLevel || 0, layer);
    }
    _currentMaterialId = -1;
  };
  this.readRenderTargetPixels = function(renderTarget, x, y, width, height, buffer, activeCubeFaceIndex) {
    if (!(renderTarget && renderTarget.isWebGLRenderTarget)) {
      console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
      return;
    }
    let framebuffer = properties.get(renderTarget).__webglFramebuffer;
    if (renderTarget.isWebGLCubeRenderTarget && activeCubeFaceIndex !== void 0) {
      framebuffer = framebuffer[activeCubeFaceIndex];
    }
    if (framebuffer) {
      state.bindFramebuffer(36160, framebuffer);
      try {
        const texture = renderTarget.texture;
        const textureFormat = texture.format;
        const textureType = texture.type;
        if (textureFormat !== RGBAFormat && utils.convert(textureFormat) !== _gl.getParameter(35739)) {
          console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
          return;
        }
        const halfFloatSupportedByExt = textureType === HalfFloatType && (extensions.has("EXT_color_buffer_half_float") || capabilities.isWebGL2 && extensions.has("EXT_color_buffer_float"));
        if (textureType !== UnsignedByteType && utils.convert(textureType) !== _gl.getParameter(35738) && !(textureType === FloatType && (capabilities.isWebGL2 || extensions.has("OES_texture_float") || extensions.has("WEBGL_color_buffer_float"))) && !halfFloatSupportedByExt) {
          console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
          return;
        }
        if (x >= 0 && x <= renderTarget.width - width && (y >= 0 && y <= renderTarget.height - height)) {
          _gl.readPixels(x, y, width, height, utils.convert(textureFormat), utils.convert(textureType), buffer);
        }
      } finally {
        const framebuffer2 = _currentRenderTarget !== null ? properties.get(_currentRenderTarget).__webglFramebuffer : null;
        state.bindFramebuffer(36160, framebuffer2);
      }
    }
  };
  this.copyFramebufferToTexture = function(position, texture, level = 0) {
    if (texture.isFramebufferTexture !== true) {
      console.error("THREE.WebGLRenderer: copyFramebufferToTexture() can only be used with FramebufferTexture.");
      return;
    }
    const levelScale = Math.pow(2, -level);
    const width = Math.floor(texture.image.width * levelScale);
    const height = Math.floor(texture.image.height * levelScale);
    textures.setTexture2D(texture, 0);
    _gl.copyTexSubImage2D(3553, level, 0, 0, position.x, position.y, width, height);
    state.unbindTexture();
  };
  this.copyTextureToTexture = function(position, srcTexture, dstTexture, level = 0) {
    const width = srcTexture.image.width;
    const height = srcTexture.image.height;
    const glFormat = utils.convert(dstTexture.format);
    const glType = utils.convert(dstTexture.type);
    textures.setTexture2D(dstTexture, 0);
    _gl.pixelStorei(37440, dstTexture.flipY);
    _gl.pixelStorei(37441, dstTexture.premultiplyAlpha);
    _gl.pixelStorei(3317, dstTexture.unpackAlignment);
    if (srcTexture.isDataTexture) {
      _gl.texSubImage2D(3553, level, position.x, position.y, width, height, glFormat, glType, srcTexture.image.data);
    } else {
      if (srcTexture.isCompressedTexture) {
        _gl.compressedTexSubImage2D(3553, level, position.x, position.y, srcTexture.mipmaps[0].width, srcTexture.mipmaps[0].height, glFormat, srcTexture.mipmaps[0].data);
      } else {
        _gl.texSubImage2D(3553, level, position.x, position.y, glFormat, glType, srcTexture.image);
      }
    }
    if (level === 0 && dstTexture.generateMipmaps)
      _gl.generateMipmap(3553);
    state.unbindTexture();
  };
  this.copyTextureToTexture3D = function(sourceBox, position, srcTexture, dstTexture, level = 0) {
    if (_this.isWebGL1Renderer) {
      console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");
      return;
    }
    const width = sourceBox.max.x - sourceBox.min.x + 1;
    const height = sourceBox.max.y - sourceBox.min.y + 1;
    const depth = sourceBox.max.z - sourceBox.min.z + 1;
    const glFormat = utils.convert(dstTexture.format);
    const glType = utils.convert(dstTexture.type);
    let glTarget;
    if (dstTexture.isData3DTexture) {
      textures.setTexture3D(dstTexture, 0);
      glTarget = 32879;
    } else if (dstTexture.isDataArrayTexture) {
      textures.setTexture2DArray(dstTexture, 0);
      glTarget = 35866;
    } else {
      console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");
      return;
    }
    _gl.pixelStorei(37440, dstTexture.flipY);
    _gl.pixelStorei(37441, dstTexture.premultiplyAlpha);
    _gl.pixelStorei(3317, dstTexture.unpackAlignment);
    const unpackRowLen = _gl.getParameter(3314);
    const unpackImageHeight = _gl.getParameter(32878);
    const unpackSkipPixels = _gl.getParameter(3316);
    const unpackSkipRows = _gl.getParameter(3315);
    const unpackSkipImages = _gl.getParameter(32877);
    const image = srcTexture.isCompressedTexture ? srcTexture.mipmaps[0] : srcTexture.image;
    _gl.pixelStorei(3314, image.width);
    _gl.pixelStorei(32878, image.height);
    _gl.pixelStorei(3316, sourceBox.min.x);
    _gl.pixelStorei(3315, sourceBox.min.y);
    _gl.pixelStorei(32877, sourceBox.min.z);
    if (srcTexture.isDataTexture || srcTexture.isData3DTexture) {
      _gl.texSubImage3D(glTarget, level, position.x, position.y, position.z, width, height, depth, glFormat, glType, image.data);
    } else {
      if (srcTexture.isCompressedTexture) {
        console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture.");
        _gl.compressedTexSubImage3D(glTarget, level, position.x, position.y, position.z, width, height, depth, glFormat, image.data);
      } else {
        _gl.texSubImage3D(glTarget, level, position.x, position.y, position.z, width, height, depth, glFormat, glType, image);
      }
    }
    _gl.pixelStorei(3314, unpackRowLen);
    _gl.pixelStorei(32878, unpackImageHeight);
    _gl.pixelStorei(3316, unpackSkipPixels);
    _gl.pixelStorei(3315, unpackSkipRows);
    _gl.pixelStorei(32877, unpackSkipImages);
    if (level === 0 && dstTexture.generateMipmaps)
      _gl.generateMipmap(glTarget);
    state.unbindTexture();
  };
  this.initTexture = function(texture) {
    textures.setTexture2D(texture, 0);
    state.unbindTexture();
  };
  this.resetState = function() {
    _currentActiveCubeFace = 0;
    _currentActiveMipmapLevel = 0;
    _currentRenderTarget = null;
    state.reset();
    bindingStates.reset();
  };
  if (typeof __THREE_DEVTOOLS__ !== "undefined") {
    __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
}
WebGLRenderer.prototype.isWebGLRenderer = true;
var WebGL1Renderer = class extends WebGLRenderer {
};
WebGL1Renderer.prototype.isWebGL1Renderer = true;
var FogExp2 = class {
  constructor(color, density = 25e-5) {
    this.name = "";
    this.color = new Color(color);
    this.density = density;
  }
  clone() {
    return new FogExp2(this.color, this.density);
  }
  toJSON() {
    return {
      type: "FogExp2",
      color: this.color.getHex(),
      density: this.density
    };
  }
};
FogExp2.prototype.isFogExp2 = true;
var Fog = class {
  constructor(color, near = 1, far = 1e3) {
    this.name = "";
    this.color = new Color(color);
    this.near = near;
    this.far = far;
  }
  clone() {
    return new Fog(this.color, this.near, this.far);
  }
  toJSON() {
    return {
      type: "Fog",
      color: this.color.getHex(),
      near: this.near,
      far: this.far
    };
  }
};
Fog.prototype.isFog = true;
var Scene = class extends Object3D {
  constructor() {
    super();
    this.type = "Scene";
    this.background = null;
    this.environment = null;
    this.fog = null;
    this.overrideMaterial = null;
    this.autoUpdate = true;
    if (typeof __THREE_DEVTOOLS__ !== "undefined") {
      __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
    }
  }
  copy(source, recursive) {
    super.copy(source, recursive);
    if (source.background !== null)
      this.background = source.background.clone();
    if (source.environment !== null)
      this.environment = source.environment.clone();
    if (source.fog !== null)
      this.fog = source.fog.clone();
    if (source.overrideMaterial !== null)
      this.overrideMaterial = source.overrideMaterial.clone();
    this.autoUpdate = source.autoUpdate;
    this.matrixAutoUpdate = source.matrixAutoUpdate;
    return this;
  }
  toJSON(meta) {
    const data = super.toJSON(meta);
    if (this.fog !== null)
      data.object.fog = this.fog.toJSON();
    return data;
  }
};
Scene.prototype.isScene = true;
var InterleavedBuffer = class {
  constructor(array, stride) {
    this.array = array;
    this.stride = stride;
    this.count = array !== void 0 ? array.length / stride : 0;
    this.usage = StaticDrawUsage;
    this.updateRange = { offset: 0, count: -1 };
    this.version = 0;
    this.uuid = generateUUID();
  }
  onUploadCallback() {
  }
  set needsUpdate(value) {
    if (value === true)
      this.version++;
  }
  setUsage(value) {
    this.usage = value;
    return this;
  }
  copy(source) {
    this.array = new source.array.constructor(source.array);
    this.count = source.count;
    this.stride = source.stride;
    this.usage = source.usage;
    return this;
  }
  copyAt(index1, attribute, index2) {
    index1 *= this.stride;
    index2 *= attribute.stride;
    for (let i = 0, l = this.stride; i < l; i++) {
      this.array[index1 + i] = attribute.array[index2 + i];
    }
    return this;
  }
  set(value, offset = 0) {
    this.array.set(value, offset);
    return this;
  }
  clone(data) {
    if (data.arrayBuffers === void 0) {
      data.arrayBuffers = {};
    }
    if (this.array.buffer._uuid === void 0) {
      this.array.buffer._uuid = generateUUID();
    }
    if (data.arrayBuffers[this.array.buffer._uuid] === void 0) {
      data.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer;
    }
    const array = new this.array.constructor(data.arrayBuffers[this.array.buffer._uuid]);
    const ib = new this.constructor(array, this.stride);
    ib.setUsage(this.usage);
    return ib;
  }
  onUpload(callback) {
    this.onUploadCallback = callback;
    return this;
  }
  toJSON(data) {
    if (data.arrayBuffers === void 0) {
      data.arrayBuffers = {};
    }
    if (this.array.buffer._uuid === void 0) {
      this.array.buffer._uuid = generateUUID();
    }
    if (data.arrayBuffers[this.array.buffer._uuid] === void 0) {
      data.arrayBuffers[this.array.buffer._uuid] = Array.prototype.slice.call(new Uint32Array(this.array.buffer));
    }
    return {
      uuid: this.uuid,
      buffer: this.array.buffer._uuid,
      type: this.array.constructor.name,
      stride: this.stride
    };
  }
};
InterleavedBuffer.prototype.isInterleavedBuffer = true;
var _vector$6 = /* @__PURE__ */ new Vector3();
var InterleavedBufferAttribute = class {
  constructor(interleavedBuffer, itemSize, offset, normalized = false) {
    this.name = "";
    this.data = interleavedBuffer;
    this.itemSize = itemSize;
    this.offset = offset;
    this.normalized = normalized === true;
  }
  get count() {
    return this.data.count;
  }
  get array() {
    return this.data.array;
  }
  set needsUpdate(value) {
    this.data.needsUpdate = value;
  }
  applyMatrix4(m) {
    for (let i = 0, l = this.data.count; i < l; i++) {
      _vector$6.fromBufferAttribute(this, i);
      _vector$6.applyMatrix4(m);
      this.setXYZ(i, _vector$6.x, _vector$6.y, _vector$6.z);
    }
    return this;
  }
  applyNormalMatrix(m) {
    for (let i = 0, l = this.count; i < l; i++) {
      _vector$6.fromBufferAttribute(this, i);
      _vector$6.applyNormalMatrix(m);
      this.setXYZ(i, _vector$6.x, _vector$6.y, _vector$6.z);
    }
    return this;
  }
  transformDirection(m) {
    for (let i = 0, l = this.count; i < l; i++) {
      _vector$6.fromBufferAttribute(this, i);
      _vector$6.transformDirection(m);
      this.setXYZ(i, _vector$6.x, _vector$6.y, _vector$6.z);
    }
    return this;
  }
  setX(index, x) {
    this.data.array[index * this.data.stride + this.offset] = x;
    return this;
  }
  setY(index, y) {
    this.data.array[index * this.data.stride + this.offset + 1] = y;
    return this;
  }
  setZ(index, z) {
    this.data.array[index * this.data.stride + this.offset + 2] = z;
    return this;
  }
  setW(index, w) {
    this.data.array[index * this.data.stride + this.offset + 3] = w;
    return this;
  }
  getX(index) {
    return this.data.array[index * this.data.stride + this.offset];
  }
  getY(index) {
    return this.data.array[index * this.data.stride + this.offset + 1];
  }
  getZ(index) {
    return this.data.array[index * this.data.stride + this.offset + 2];
  }
  getW(index) {
    return this.data.array[index * this.data.stride + this.offset + 3];
  }
  setXY(index, x, y) {
    index = index * this.data.stride + this.offset;
    this.data.array[index + 0] = x;
    this.data.array[index + 1] = y;
    return this;
  }
  setXYZ(index, x, y, z) {
    index = index * this.data.stride + this.offset;
    this.data.array[index + 0] = x;
    this.data.array[index + 1] = y;
    this.data.array[index + 2] = z;
    return this;
  }
  setXYZW(index, x, y, z, w) {
    index = index * this.data.stride + this.offset;
    this.data.array[index + 0] = x;
    this.data.array[index + 1] = y;
    this.data.array[index + 2] = z;
    this.data.array[index + 3] = w;
    return this;
  }
  clone(data) {
    if (data === void 0) {
      console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");
      const array = [];
      for (let i = 0; i < this.count; i++) {
        const index = i * this.data.stride + this.offset;
        for (let j = 0; j < this.itemSize; j++) {
          array.push(this.data.array[index + j]);
        }
      }
      return new BufferAttribute(new this.array.constructor(array), this.itemSize, this.normalized);
    } else {
      if (data.interleavedBuffers === void 0) {
        data.interleavedBuffers = {};
      }
      if (data.interleavedBuffers[this.data.uuid] === void 0) {
        data.interleavedBuffers[this.data.uuid] = this.data.clone(data);
      }
      return new InterleavedBufferAttribute(data.interleavedBuffers[this.data.uuid], this.itemSize, this.offset, this.normalized);
    }
  }
  toJSON(data) {
    if (data === void 0) {
      console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");
      const array = [];
      for (let i = 0; i < this.count; i++) {
        const index = i * this.data.stride + this.offset;
        for (let j = 0; j < this.itemSize; j++) {
          array.push(this.data.array[index + j]);
        }
      }
      return {
        itemSize: this.itemSize,
        type: this.array.constructor.name,
        array,
        normalized: this.normalized
      };
    } else {
      if (data.interleavedBuffers === void 0) {
        data.interleavedBuffers = {};
      }
      if (data.interleavedBuffers[this.data.uuid] === void 0) {
        data.interleavedBuffers[this.data.uuid] = this.data.toJSON(data);
      }
      return {
        isInterleavedBufferAttribute: true,
        itemSize: this.itemSize,
        data: this.data.uuid,
        offset: this.offset,
        normalized: this.normalized
      };
    }
  }
};
InterleavedBufferAttribute.prototype.isInterleavedBufferAttribute = true;
var SpriteMaterial = class extends Material {
  constructor(parameters) {
    super();
    this.type = "SpriteMaterial";
    this.color = new Color(16777215);
    this.map = null;
    this.alphaMap = null;
    this.rotation = 0;
    this.sizeAttenuation = true;
    this.transparent = true;
    this.setValues(parameters);
  }
  copy(source) {
    super.copy(source);
    this.color.copy(source.color);
    this.map = source.map;
    this.alphaMap = source.alphaMap;
    this.rotation = source.rotation;
    this.sizeAttenuation = source.sizeAttenuation;
    return this;
  }
};
SpriteMaterial.prototype.isSpriteMaterial = true;
var _geometry;
var _intersectPoint = /* @__PURE__ */ new Vector3();
var _worldScale = /* @__PURE__ */ new Vector3();
var _mvPosition = /* @__PURE__ */ new Vector3();
var _alignedPosition = /* @__PURE__ */ new Vector2();
var _rotatedPosition = /* @__PURE__ */ new Vector2();
var _viewWorldMatrix = /* @__PURE__ */ new Matrix4();
var _vA = /* @__PURE__ */ new Vector3();
var _vB = /* @__PURE__ */ new Vector3();
var _vC = /* @__PURE__ */ new Vector3();
var _uvA = /* @__PURE__ */ new Vector2();
var _uvB = /* @__PURE__ */ new Vector2();
var _uvC = /* @__PURE__ */ new Vector2();
var Sprite = class extends Object3D {
  constructor(material) {
    super();
    this.type = "Sprite";
    if (_geometry === void 0) {
      _geometry = new BufferGeometry();
      const float32Array = new Float32Array([
        -0.5,
        -0.5,
        0,
        0,
        0,
        0.5,
        -0.5,
        0,
        1,
        0,
        0.5,
        0.5,
        0,
        1,
        1,
        -0.5,
        0.5,
        0,
        0,
        1
      ]);
      const interleavedBuffer = new InterleavedBuffer(float32Array, 5);
      _geometry.setIndex([0, 1, 2, 0, 2, 3]);
      _geometry.setAttribute("position", new InterleavedBufferAttribute(interleavedBuffer, 3, 0, false));
      _geometry.setAttribute("uv", new InterleavedBufferAttribute(interleavedBuffer, 2, 3, false));
    }
    this.geometry = _geometry;
    this.material = material !== void 0 ? material : new SpriteMaterial();
    this.center = new Vector2(0.5, 0.5);
  }
  raycast(raycaster, intersects2) {
    if (raycaster.camera === null) {
      console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.');
    }
    _worldScale.setFromMatrixScale(this.matrixWorld);
    _viewWorldMatrix.copy(raycaster.camera.matrixWorld);
    this.modelViewMatrix.multiplyMatrices(raycaster.camera.matrixWorldInverse, this.matrixWorld);
    _mvPosition.setFromMatrixPosition(this.modelViewMatrix);
    if (raycaster.camera.isPerspectiveCamera && this.material.sizeAttenuation === false) {
      _worldScale.multiplyScalar(-_mvPosition.z);
    }
    const rotation = this.material.rotation;
    let sin, cos;
    if (rotation !== 0) {
      cos = Math.cos(rotation);
      sin = Math.sin(rotation);
    }
    const center = this.center;
    transformVertex(_vA.set(-0.5, -0.5, 0), _mvPosition, center, _worldScale, sin, cos);
    transformVertex(_vB.set(0.5, -0.5, 0), _mvPosition, center, _worldScale, sin, cos);
    transformVertex(_vC.set(0.5, 0.5, 0), _mvPosition, center, _worldScale, sin, cos);
    _uvA.set(0, 0);
    _uvB.set(1, 0);
    _uvC.set(1, 1);
    let intersect = raycaster.ray.intersectTriangle(_vA, _vB, _vC, false, _intersectPoint);
    if (intersect === null) {
      transformVertex(_vB.set(-0.5, 0.5, 0), _mvPosition, center, _worldScale, sin, cos);
      _uvB.set(0, 1);
      intersect = raycaster.ray.intersectTriangle(_vA, _vC, _vB, false, _intersectPoint);
      if (intersect === null) {
        return;
      }
    }
    const distance = raycaster.ray.origin.distanceTo(_intersectPoint);
    if (distance < raycaster.near || distance > raycaster.far)
      return;
    intersects2.push({
      distance,
      point: _intersectPoint.clone(),
      uv: Triangle.getUV(_intersectPoint, _vA, _vB, _vC, _uvA, _uvB, _uvC, new Vector2()),
      face: null,
      object: this
    });
  }
  copy(source) {
    super.copy(source);
    if (source.center !== void 0)
      this.center.copy(source.center);
    this.material = source.material;
    return this;
  }
};
Sprite.prototype.isSprite = true;
function transformVertex(vertexPosition, mvPosition, center, scale, sin, cos) {
  _alignedPosition.subVectors(vertexPosition, center).addScalar(0.5).multiply(scale);
  if (sin !== void 0) {
    _rotatedPosition.x = cos * _alignedPosition.x - sin * _alignedPosition.y;
    _rotatedPosition.y = sin * _alignedPosition.x + cos * _alignedPosition.y;
  } else {
    _rotatedPosition.copy(_alignedPosition);
  }
  vertexPosition.copy(mvPosition);
  vertexPosition.x += _rotatedPosition.x;
  vertexPosition.y += _rotatedPosition.y;
  vertexPosition.applyMatrix4(_viewWorldMatrix);
}
var _basePosition = /* @__PURE__ */ new Vector3();
var _skinIndex = /* @__PURE__ */ new Vector4();
var _skinWeight = /* @__PURE__ */ new Vector4();
var _vector$5 = /* @__PURE__ */ new Vector3();
var _matrix = /* @__PURE__ */ new Matrix4();
var SkinnedMesh = class extends Mesh {
  constructor(geometry, material) {
    super(geometry, material);
    this.type = "SkinnedMesh";
    this.bindMode = "attached";
    this.bindMatrix = new Matrix4();
    this.bindMatrixInverse = new Matrix4();
  }
  copy(source) {
    super.copy(source);
    this.bindMode = source.bindMode;
    this.bindMatrix.copy(source.bindMatrix);
    this.bindMatrixInverse.copy(source.bindMatrixInverse);
    this.skeleton = source.skeleton;
    return this;
  }
  bind(skeleton, bindMatrix) {
    this.skeleton = skeleton;
    if (bindMatrix === void 0) {
      this.updateMatrixWorld(true);
      this.skeleton.calculateInverses();
      bindMatrix = this.matrixWorld;
    }
    this.bindMatrix.copy(bindMatrix);
    this.bindMatrixInverse.copy(bindMatrix).invert();
  }
  pose() {
    this.skeleton.pose();
  }
  normalizeSkinWeights() {
    const vector = new Vector4();
    const skinWeight = this.geometry.attributes.skinWeight;
    for (let i = 0, l = skinWeight.count; i < l; i++) {
      vector.fromBufferAttribute(skinWeight, i);
      const scale = 1 / vector.manhattanLength();
      if (scale !== Infinity) {
        vector.multiplyScalar(scale);
      } else {
        vector.set(1, 0, 0, 0);
      }
      skinWeight.setXYZW(i, vector.x, vector.y, vector.z, vector.w);
    }
  }
  updateMatrixWorld(force) {
    super.updateMatrixWorld(force);
    if (this.bindMode === "attached") {
      this.bindMatrixInverse.copy(this.matrixWorld).invert();
    } else if (this.bindMode === "detached") {
      this.bindMatrixInverse.copy(this.bindMatrix).invert();
    } else {
      console.warn("THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode);
    }
  }
  boneTransform(index, target) {
    const skeleton = this.skeleton;
    const geometry = this.geometry;
    _skinIndex.fromBufferAttribute(geometry.attributes.skinIndex, index);
    _skinWeight.fromBufferAttribute(geometry.attributes.skinWeight, index);
    _basePosition.copy(target).applyMatrix4(this.bindMatrix);
    target.set(0, 0, 0);
    for (let i = 0; i < 4; i++) {
      const weight = _skinWeight.getComponent(i);
      if (weight !== 0) {
        const boneIndex = _skinIndex.getComponent(i);
        _matrix.multiplyMatrices(skeleton.bones[boneIndex].matrixWorld, skeleton.boneInverses[boneIndex]);
        target.addScaledVector(_vector$5.copy(_basePosition).applyMatrix4(_matrix), weight);
      }
    }
    return target.applyMatrix4(this.bindMatrixInverse);
  }
};
SkinnedMesh.prototype.isSkinnedMesh = true;
var Bone = class extends Object3D {
  constructor() {
    super();
    this.type = "Bone";
  }
};
Bone.prototype.isBone = true;
var DataTexture = class extends Texture {
  constructor(data = null, width = 1, height = 1, format, type, mapping, wrapS, wrapT, magFilter = NearestFilter, minFilter = NearestFilter, anisotropy, encoding) {
    super(null, mapping, wrapS, wrapT, magFilter, minFilter, format, type, anisotropy, encoding);
    this.image = { data, width, height };
    this.generateMipmaps = false;
    this.flipY = false;
    this.unpackAlignment = 1;
  }
};
DataTexture.prototype.isDataTexture = true;
var InstancedBufferAttribute = class extends BufferAttribute {
  constructor(array, itemSize, normalized, meshPerAttribute = 1) {
    if (typeof normalized === "number") {
      meshPerAttribute = normalized;
      normalized = false;
      console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.");
    }
    super(array, itemSize, normalized);
    this.meshPerAttribute = meshPerAttribute;
  }
  copy(source) {
    super.copy(source);
    this.meshPerAttribute = source.meshPerAttribute;
    return this;
  }
  toJSON() {
    const data = super.toJSON();
    data.meshPerAttribute = this.meshPerAttribute;
    data.isInstancedBufferAttribute = true;
    return data;
  }
};
InstancedBufferAttribute.prototype.isInstancedBufferAttribute = true;
var _instanceLocalMatrix = /* @__PURE__ */ new Matrix4();
var _instanceWorldMatrix = /* @__PURE__ */ new Matrix4();
var _instanceIntersects = [];
var _mesh = /* @__PURE__ */ new Mesh();
var InstancedMesh = class extends Mesh {
  constructor(geometry, material, count) {
    super(geometry, material);
    this.instanceMatrix = new InstancedBufferAttribute(new Float32Array(count * 16), 16);
    this.instanceColor = null;
    this.count = count;
    this.frustumCulled = false;
  }
  copy(source) {
    super.copy(source);
    this.instanceMatrix.copy(source.instanceMatrix);
    if (source.instanceColor !== null)
      this.instanceColor = source.instanceColor.clone();
    this.count = source.count;
    return this;
  }
  getColorAt(index, color) {
    color.fromArray(this.instanceColor.array, index * 3);
  }
  getMatrixAt(index, matrix) {
    matrix.fromArray(this.instanceMatrix.array, index * 16);
  }
  raycast(raycaster, intersects2) {
    const matrixWorld = this.matrixWorld;
    const raycastTimes = this.count;
    _mesh.geometry = this.geometry;
    _mesh.material = this.material;
    if (_mesh.material === void 0)
      return;
    for (let instanceId = 0; instanceId < raycastTimes; instanceId++) {
      this.getMatrixAt(instanceId, _instanceLocalMatrix);
      _instanceWorldMatrix.multiplyMatrices(matrixWorld, _instanceLocalMatrix);
      _mesh.matrixWorld = _instanceWorldMatrix;
      _mesh.raycast(raycaster, _instanceIntersects);
      for (let i = 0, l = _instanceIntersects.length; i < l; i++) {
        const intersect = _instanceIntersects[i];
        intersect.instanceId = instanceId;
        intersect.object = this;
        intersects2.push(intersect);
      }
      _instanceIntersects.length = 0;
    }
  }
  setColorAt(index, color) {
    if (this.instanceColor === null) {
      this.instanceColor = new InstancedBufferAttribute(new Float32Array(this.instanceMatrix.count * 3), 3);
    }
    color.toArray(this.instanceColor.array, index * 3);
  }
  setMatrixAt(index, matrix) {
    matrix.toArray(this.instanceMatrix.array, index * 16);
  }
  updateMorphTargets() {
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
};
InstancedMesh.prototype.isInstancedMesh = true;
var LineBasicMaterial = class extends Material {
  constructor(parameters) {
    super();
    this.type = "LineBasicMaterial";
    this.color = new Color(16777215);
    this.linewidth = 1;
    this.linecap = "round";
    this.linejoin = "round";
    this.setValues(parameters);
  }
  copy(source) {
    super.copy(source);
    this.color.copy(source.color);
    this.linewidth = source.linewidth;
    this.linecap = source.linecap;
    this.linejoin = source.linejoin;
    return this;
  }
};
LineBasicMaterial.prototype.isLineBasicMaterial = true;
var _start$1 = /* @__PURE__ */ new Vector3();
var _end$1 = /* @__PURE__ */ new Vector3();
var _inverseMatrix$1 = /* @__PURE__ */ new Matrix4();
var _ray$1 = /* @__PURE__ */ new Ray();
var _sphere$1 = /* @__PURE__ */ new Sphere();
var Line = class extends Object3D {
  constructor(geometry = new BufferGeometry(), material = new LineBasicMaterial()) {
    super();
    this.type = "Line";
    this.geometry = geometry;
    this.material = material;
    this.updateMorphTargets();
  }
  copy(source) {
    super.copy(source);
    this.material = source.material;
    this.geometry = source.geometry;
    return this;
  }
  computeLineDistances() {
    const geometry = this.geometry;
    if (geometry.isBufferGeometry) {
      if (geometry.index === null) {
        const positionAttribute = geometry.attributes.position;
        const lineDistances = [0];
        for (let i = 1, l = positionAttribute.count; i < l; i++) {
          _start$1.fromBufferAttribute(positionAttribute, i - 1);
          _end$1.fromBufferAttribute(positionAttribute, i);
          lineDistances[i] = lineDistances[i - 1];
          lineDistances[i] += _start$1.distanceTo(_end$1);
        }
        geometry.setAttribute("lineDistance", new Float32BufferAttribute(lineDistances, 1));
      } else {
        console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
      }
    } else if (geometry.isGeometry) {
      console.error("THREE.Line.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");
    }
    return this;
  }
  raycast(raycaster, intersects2) {
    const geometry = this.geometry;
    const matrixWorld = this.matrixWorld;
    const threshold = raycaster.params.Line.threshold;
    const drawRange = geometry.drawRange;
    if (geometry.boundingSphere === null)
      geometry.computeBoundingSphere();
    _sphere$1.copy(geometry.boundingSphere);
    _sphere$1.applyMatrix4(matrixWorld);
    _sphere$1.radius += threshold;
    if (raycaster.ray.intersectsSphere(_sphere$1) === false)
      return;
    _inverseMatrix$1.copy(matrixWorld).invert();
    _ray$1.copy(raycaster.ray).applyMatrix4(_inverseMatrix$1);
    const localThreshold = threshold / ((this.scale.x + this.scale.y + this.scale.z) / 3);
    const localThresholdSq = localThreshold * localThreshold;
    const vStart = new Vector3();
    const vEnd = new Vector3();
    const interSegment = new Vector3();
    const interRay = new Vector3();
    const step = this.isLineSegments ? 2 : 1;
    if (geometry.isBufferGeometry) {
      const index = geometry.index;
      const attributes = geometry.attributes;
      const positionAttribute = attributes.position;
      if (index !== null) {
        const start = Math.max(0, drawRange.start);
        const end = Math.min(index.count, drawRange.start + drawRange.count);
        for (let i = start, l = end - 1; i < l; i += step) {
          const a = index.getX(i);
          const b = index.getX(i + 1);
          vStart.fromBufferAttribute(positionAttribute, a);
          vEnd.fromBufferAttribute(positionAttribute, b);
          const distSq = _ray$1.distanceSqToSegment(vStart, vEnd, interRay, interSegment);
          if (distSq > localThresholdSq)
            continue;
          interRay.applyMatrix4(this.matrixWorld);
          const distance = raycaster.ray.origin.distanceTo(interRay);
          if (distance < raycaster.near || distance > raycaster.far)
            continue;
          intersects2.push({
            distance,
            point: interSegment.clone().applyMatrix4(this.matrixWorld),
            index: i,
            face: null,
            faceIndex: null,
            object: this
          });
        }
      } else {
        const start = Math.max(0, drawRange.start);
        const end = Math.min(positionAttribute.count, drawRange.start + drawRange.count);
        for (let i = start, l = end - 1; i < l; i += step) {
          vStart.fromBufferAttribute(positionAttribute, i);
          vEnd.fromBufferAttribute(positionAttribute, i + 1);
          const distSq = _ray$1.distanceSqToSegment(vStart, vEnd, interRay, interSegment);
          if (distSq > localThresholdSq)
            continue;
          interRay.applyMatrix4(this.matrixWorld);
          const distance = raycaster.ray.origin.distanceTo(interRay);
          if (distance < raycaster.near || distance > raycaster.far)
            continue;
          intersects2.push({
            distance,
            point: interSegment.clone().applyMatrix4(this.matrixWorld),
            index: i,
            face: null,
            faceIndex: null,
            object: this
          });
        }
      }
    } else if (geometry.isGeometry) {
      console.error("THREE.Line.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");
    }
  }
  updateMorphTargets() {
    const geometry = this.geometry;
    if (geometry.isBufferGeometry) {
      const morphAttributes = geometry.morphAttributes;
      const keys = Object.keys(morphAttributes);
      if (keys.length > 0) {
        const morphAttribute = morphAttributes[keys[0]];
        if (morphAttribute !== void 0) {
          this.morphTargetInfluences = [];
          this.morphTargetDictionary = {};
          for (let m = 0, ml = morphAttribute.length; m < ml; m++) {
            const name = morphAttribute[m].name || String(m);
            this.morphTargetInfluences.push(0);
            this.morphTargetDictionary[name] = m;
          }
        }
      }
    } else {
      const morphTargets = geometry.morphTargets;
      if (morphTargets !== void 0 && morphTargets.length > 0) {
        console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.");
      }
    }
  }
};
Line.prototype.isLine = true;
var _start = /* @__PURE__ */ new Vector3();
var _end = /* @__PURE__ */ new Vector3();
var LineSegments = class extends Line {
  constructor(geometry, material) {
    super(geometry, material);
    this.type = "LineSegments";
  }
  computeLineDistances() {
    const geometry = this.geometry;
    if (geometry.isBufferGeometry) {
      if (geometry.index === null) {
        const positionAttribute = geometry.attributes.position;
        const lineDistances = [];
        for (let i = 0, l = positionAttribute.count; i < l; i += 2) {
          _start.fromBufferAttribute(positionAttribute, i);
          _end.fromBufferAttribute(positionAttribute, i + 1);
          lineDistances[i] = i === 0 ? 0 : lineDistances[i - 1];
          lineDistances[i + 1] = lineDistances[i] + _start.distanceTo(_end);
        }
        geometry.setAttribute("lineDistance", new Float32BufferAttribute(lineDistances, 1));
      } else {
        console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
      }
    } else if (geometry.isGeometry) {
      console.error("THREE.LineSegments.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");
    }
    return this;
  }
};
LineSegments.prototype.isLineSegments = true;
var LineLoop = class extends Line {
  constructor(geometry, material) {
    super(geometry, material);
    this.type = "LineLoop";
  }
};
LineLoop.prototype.isLineLoop = true;
var PointsMaterial = class extends Material {
  constructor(parameters) {
    super();
    this.type = "PointsMaterial";
    this.color = new Color(16777215);
    this.map = null;
    this.alphaMap = null;
    this.size = 1;
    this.sizeAttenuation = true;
    this.setValues(parameters);
  }
  copy(source) {
    super.copy(source);
    this.color.copy(source.color);
    this.map = source.map;
    this.alphaMap = source.alphaMap;
    this.size = source.size;
    this.sizeAttenuation = source.sizeAttenuation;
    return this;
  }
};
PointsMaterial.prototype.isPointsMaterial = true;
var _inverseMatrix = /* @__PURE__ */ new Matrix4();
var _ray = /* @__PURE__ */ new Ray();
var _sphere = /* @__PURE__ */ new Sphere();
var _position$2 = /* @__PURE__ */ new Vector3();
var Points = class extends Object3D {
  constructor(geometry = new BufferGeometry(), material = new PointsMaterial()) {
    super();
    this.type = "Points";
    this.geometry = geometry;
    this.material = material;
    this.updateMorphTargets();
  }
  copy(source) {
    super.copy(source);
    this.material = source.material;
    this.geometry = source.geometry;
    return this;
  }
  raycast(raycaster, intersects2) {
    const geometry = this.geometry;
    const matrixWorld = this.matrixWorld;
    const threshold = raycaster.params.Points.threshold;
    const drawRange = geometry.drawRange;
    if (geometry.boundingSphere === null)
      geometry.computeBoundingSphere();
    _sphere.copy(geometry.boundingSphere);
    _sphere.applyMatrix4(matrixWorld);
    _sphere.radius += threshold;
    if (raycaster.ray.intersectsSphere(_sphere) === false)
      return;
    _inverseMatrix.copy(matrixWorld).invert();
    _ray.copy(raycaster.ray).applyMatrix4(_inverseMatrix);
    const localThreshold = threshold / ((this.scale.x + this.scale.y + this.scale.z) / 3);
    const localThresholdSq = localThreshold * localThreshold;
    if (geometry.isBufferGeometry) {
      const index = geometry.index;
      const attributes = geometry.attributes;
      const positionAttribute = attributes.position;
      if (index !== null) {
        const start = Math.max(0, drawRange.start);
        const end = Math.min(index.count, drawRange.start + drawRange.count);
        for (let i = start, il = end; i < il; i++) {
          const a = index.getX(i);
          _position$2.fromBufferAttribute(positionAttribute, a);
          testPoint(_position$2, a, localThresholdSq, matrixWorld, raycaster, intersects2, this);
        }
      } else {
        const start = Math.max(0, drawRange.start);
        const end = Math.min(positionAttribute.count, drawRange.start + drawRange.count);
        for (let i = start, l = end; i < l; i++) {
          _position$2.fromBufferAttribute(positionAttribute, i);
          testPoint(_position$2, i, localThresholdSq, matrixWorld, raycaster, intersects2, this);
        }
      }
    } else {
      console.error("THREE.Points.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");
    }
  }
  updateMorphTargets() {
    const geometry = this.geometry;
    if (geometry.isBufferGeometry) {
      const morphAttributes = geometry.morphAttributes;
      const keys = Object.keys(morphAttributes);
      if (keys.length > 0) {
        const morphAttribute = morphAttributes[keys[0]];
        if (morphAttribute !== void 0) {
          this.morphTargetInfluences = [];
          this.morphTargetDictionary = {};
          for (let m = 0, ml = morphAttribute.length; m < ml; m++) {
            const name = morphAttribute[m].name || String(m);
            this.morphTargetInfluences.push(0);
            this.morphTargetDictionary[name] = m;
          }
        }
      }
    } else {
      const morphTargets = geometry.morphTargets;
      if (morphTargets !== void 0 && morphTargets.length > 0) {
        console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.");
      }
    }
  }
};
Points.prototype.isPoints = true;
function testPoint(point, index, localThresholdSq, matrixWorld, raycaster, intersects2, object) {
  const rayPointDistanceSq = _ray.distanceSqToPoint(point);
  if (rayPointDistanceSq < localThresholdSq) {
    const intersectPoint = new Vector3();
    _ray.closestPointToPoint(point, intersectPoint);
    intersectPoint.applyMatrix4(matrixWorld);
    const distance = raycaster.ray.origin.distanceTo(intersectPoint);
    if (distance < raycaster.near || distance > raycaster.far)
      return;
    intersects2.push({
      distance,
      distanceToRay: Math.sqrt(rayPointDistanceSq),
      point: intersectPoint,
      index,
      face: null,
      object
    });
  }
}
var VideoTexture = class extends Texture {
  constructor(video, mapping, wrapS, wrapT, magFilter, minFilter, format, type, anisotropy) {
    super(video, mapping, wrapS, wrapT, magFilter, minFilter, format, type, anisotropy);
    this.minFilter = minFilter !== void 0 ? minFilter : LinearFilter;
    this.magFilter = magFilter !== void 0 ? magFilter : LinearFilter;
    this.generateMipmaps = false;
    const scope = this;
    function updateVideo() {
      scope.needsUpdate = true;
      video.requestVideoFrameCallback(updateVideo);
    }
    if ("requestVideoFrameCallback" in video) {
      video.requestVideoFrameCallback(updateVideo);
    }
  }
  clone() {
    return new this.constructor(this.image).copy(this);
  }
  update() {
    const video = this.image;
    const hasVideoFrameCallback = "requestVideoFrameCallback" in video;
    if (hasVideoFrameCallback === false && video.readyState >= video.HAVE_CURRENT_DATA) {
      this.needsUpdate = true;
    }
  }
};
VideoTexture.prototype.isVideoTexture = true;
var FramebufferTexture = class extends Texture {
  constructor(width, height, format) {
    super({ width, height });
    this.format = format;
    this.magFilter = NearestFilter;
    this.minFilter = NearestFilter;
    this.generateMipmaps = false;
    this.needsUpdate = true;
  }
};
FramebufferTexture.prototype.isFramebufferTexture = true;
var CompressedTexture = class extends Texture {
  constructor(mipmaps, width, height, format, type, mapping, wrapS, wrapT, magFilter, minFilter, anisotropy, encoding) {
    super(null, mapping, wrapS, wrapT, magFilter, minFilter, format, type, anisotropy, encoding);
    this.image = { width, height };
    this.mipmaps = mipmaps;
    this.flipY = false;
    this.generateMipmaps = false;
  }
};
CompressedTexture.prototype.isCompressedTexture = true;
var CanvasTexture = class extends Texture {
  constructor(canvas, mapping, wrapS, wrapT, magFilter, minFilter, format, type, anisotropy) {
    super(canvas, mapping, wrapS, wrapT, magFilter, minFilter, format, type, anisotropy);
    this.needsUpdate = true;
  }
};
CanvasTexture.prototype.isCanvasTexture = true;
var Curve = class {
  constructor() {
    this.type = "Curve";
    this.arcLengthDivisions = 200;
  }
  getPoint() {
    console.warn("THREE.Curve: .getPoint() not implemented.");
    return null;
  }
  getPointAt(u, optionalTarget) {
    const t = this.getUtoTmapping(u);
    return this.getPoint(t, optionalTarget);
  }
  getPoints(divisions = 5) {
    const points = [];
    for (let d = 0; d <= divisions; d++) {
      points.push(this.getPoint(d / divisions));
    }
    return points;
  }
  getSpacedPoints(divisions = 5) {
    const points = [];
    for (let d = 0; d <= divisions; d++) {
      points.push(this.getPointAt(d / divisions));
    }
    return points;
  }
  getLength() {
    const lengths = this.getLengths();
    return lengths[lengths.length - 1];
  }
  getLengths(divisions = this.arcLengthDivisions) {
    if (this.cacheArcLengths && this.cacheArcLengths.length === divisions + 1 && !this.needsUpdate) {
      return this.cacheArcLengths;
    }
    this.needsUpdate = false;
    const cache = [];
    let current, last = this.getPoint(0);
    let sum = 0;
    cache.push(0);
    for (let p = 1; p <= divisions; p++) {
      current = this.getPoint(p / divisions);
      sum += current.distanceTo(last);
      cache.push(sum);
      last = current;
    }
    this.cacheArcLengths = cache;
    return cache;
  }
  updateArcLengths() {
    this.needsUpdate = true;
    this.getLengths();
  }
  getUtoTmapping(u, distance) {
    const arcLengths = this.getLengths();
    let i = 0;
    const il = arcLengths.length;
    let targetArcLength;
    if (distance) {
      targetArcLength = distance;
    } else {
      targetArcLength = u * arcLengths[il - 1];
    }
    let low = 0, high = il - 1, comparison;
    while (low <= high) {
      i = Math.floor(low + (high - low) / 2);
      comparison = arcLengths[i] - targetArcLength;
      if (comparison < 0) {
        low = i + 1;
      } else if (comparison > 0) {
        high = i - 1;
      } else {
        high = i;
        break;
      }
    }
    i = high;
    if (arcLengths[i] === targetArcLength) {
      return i / (il - 1);
    }
    const lengthBefore = arcLengths[i];
    const lengthAfter = arcLengths[i + 1];
    const segmentLength = lengthAfter - lengthBefore;
    const segmentFraction = (targetArcLength - lengthBefore) / segmentLength;
    const t = (i + segmentFraction) / (il - 1);
    return t;
  }
  getTangent(t, optionalTarget) {
    const delta = 1e-4;
    let t1 = t - delta;
    let t2 = t + delta;
    if (t1 < 0)
      t1 = 0;
    if (t2 > 1)
      t2 = 1;
    const pt1 = this.getPoint(t1);
    const pt2 = this.getPoint(t2);
    const tangent = optionalTarget || (pt1.isVector2 ? new Vector2() : new Vector3());
    tangent.copy(pt2).sub(pt1).normalize();
    return tangent;
  }
  getTangentAt(u, optionalTarget) {
    const t = this.getUtoTmapping(u);
    return this.getTangent(t, optionalTarget);
  }
  computeFrenetFrames(segments, closed) {
    const normal = new Vector3();
    const tangents = [];
    const normals = [];
    const binormals = [];
    const vec = new Vector3();
    const mat = new Matrix4();
    for (let i = 0; i <= segments; i++) {
      const u = i / segments;
      tangents[i] = this.getTangentAt(u, new Vector3());
    }
    normals[0] = new Vector3();
    binormals[0] = new Vector3();
    let min = Number.MAX_VALUE;
    const tx = Math.abs(tangents[0].x);
    const ty = Math.abs(tangents[0].y);
    const tz = Math.abs(tangents[0].z);
    if (tx <= min) {
      min = tx;
      normal.set(1, 0, 0);
    }
    if (ty <= min) {
      min = ty;
      normal.set(0, 1, 0);
    }
    if (tz <= min) {
      normal.set(0, 0, 1);
    }
    vec.crossVectors(tangents[0], normal).normalize();
    normals[0].crossVectors(tangents[0], vec);
    binormals[0].crossVectors(tangents[0], normals[0]);
    for (let i = 1; i <= segments; i++) {
      normals[i] = normals[i - 1].clone();
      binormals[i] = binormals[i - 1].clone();
      vec.crossVectors(tangents[i - 1], tangents[i]);
      if (vec.length() > Number.EPSILON) {
        vec.normalize();
        const theta = Math.acos(clamp(tangents[i - 1].dot(tangents[i]), -1, 1));
        normals[i].applyMatrix4(mat.makeRotationAxis(vec, theta));
      }
      binormals[i].crossVectors(tangents[i], normals[i]);
    }
    if (closed === true) {
      let theta = Math.acos(clamp(normals[0].dot(normals[segments]), -1, 1));
      theta /= segments;
      if (tangents[0].dot(vec.crossVectors(normals[0], normals[segments])) > 0) {
        theta = -theta;
      }
      for (let i = 1; i <= segments; i++) {
        normals[i].applyMatrix4(mat.makeRotationAxis(tangents[i], theta * i));
        binormals[i].crossVectors(tangents[i], normals[i]);
      }
    }
    return {
      tangents,
      normals,
      binormals
    };
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(source) {
    this.arcLengthDivisions = source.arcLengthDivisions;
    return this;
  }
  toJSON() {
    const data = {
      metadata: {
        version: 4.5,
        type: "Curve",
        generator: "Curve.toJSON"
      }
    };
    data.arcLengthDivisions = this.arcLengthDivisions;
    data.type = this.type;
    return data;
  }
  fromJSON(json) {
    this.arcLengthDivisions = json.arcLengthDivisions;
    return this;
  }
};
var EllipseCurve = class extends Curve {
  constructor(aX = 0, aY = 0, xRadius = 1, yRadius = 1, aStartAngle = 0, aEndAngle = Math.PI * 2, aClockwise = false, aRotation = 0) {
    super();
    this.type = "EllipseCurve";
    this.aX = aX;
    this.aY = aY;
    this.xRadius = xRadius;
    this.yRadius = yRadius;
    this.aStartAngle = aStartAngle;
    this.aEndAngle = aEndAngle;
    this.aClockwise = aClockwise;
    this.aRotation = aRotation;
  }
  getPoint(t, optionalTarget) {
    const point = optionalTarget || new Vector2();
    const twoPi = Math.PI * 2;
    let deltaAngle = this.aEndAngle - this.aStartAngle;
    const samePoints = Math.abs(deltaAngle) < Number.EPSILON;
    while (deltaAngle < 0)
      deltaAngle += twoPi;
    while (deltaAngle > twoPi)
      deltaAngle -= twoPi;
    if (deltaAngle < Number.EPSILON) {
      if (samePoints) {
        deltaAngle = 0;
      } else {
        deltaAngle = twoPi;
      }
    }
    if (this.aClockwise === true && !samePoints) {
      if (deltaAngle === twoPi) {
        deltaAngle = -twoPi;
      } else {
        deltaAngle = deltaAngle - twoPi;
      }
    }
    const angle = this.aStartAngle + t * deltaAngle;
    let x = this.aX + this.xRadius * Math.cos(angle);
    let y = this.aY + this.yRadius * Math.sin(angle);
    if (this.aRotation !== 0) {
      const cos = Math.cos(this.aRotation);
      const sin = Math.sin(this.aRotation);
      const tx = x - this.aX;
      const ty = y - this.aY;
      x = tx * cos - ty * sin + this.aX;
      y = tx * sin + ty * cos + this.aY;
    }
    return point.set(x, y);
  }
  copy(source) {
    super.copy(source);
    this.aX = source.aX;
    this.aY = source.aY;
    this.xRadius = source.xRadius;
    this.yRadius = source.yRadius;
    this.aStartAngle = source.aStartAngle;
    this.aEndAngle = source.aEndAngle;
    this.aClockwise = source.aClockwise;
    this.aRotation = source.aRotation;
    return this;
  }
  toJSON() {
    const data = super.toJSON();
    data.aX = this.aX;
    data.aY = this.aY;
    data.xRadius = this.xRadius;
    data.yRadius = this.yRadius;
    data.aStartAngle = this.aStartAngle;
    data.aEndAngle = this.aEndAngle;
    data.aClockwise = this.aClockwise;
    data.aRotation = this.aRotation;
    return data;
  }
  fromJSON(json) {
    super.fromJSON(json);
    this.aX = json.aX;
    this.aY = json.aY;
    this.xRadius = json.xRadius;
    this.yRadius = json.yRadius;
    this.aStartAngle = json.aStartAngle;
    this.aEndAngle = json.aEndAngle;
    this.aClockwise = json.aClockwise;
    this.aRotation = json.aRotation;
    return this;
  }
};
EllipseCurve.prototype.isEllipseCurve = true;
var ArcCurve = class extends EllipseCurve {
  constructor(aX, aY, aRadius, aStartAngle, aEndAngle, aClockwise) {
    super(aX, aY, aRadius, aRadius, aStartAngle, aEndAngle, aClockwise);
    this.type = "ArcCurve";
  }
};
ArcCurve.prototype.isArcCurve = true;
function CubicPoly() {
  let c0 = 0, c1 = 0, c2 = 0, c3 = 0;
  function init(x0, x1, t0, t1) {
    c0 = x0;
    c1 = t0;
    c2 = -3 * x0 + 3 * x1 - 2 * t0 - t1;
    c3 = 2 * x0 - 2 * x1 + t0 + t1;
  }
  return {
    initCatmullRom: function(x0, x1, x2, x3, tension) {
      init(x1, x2, tension * (x2 - x0), tension * (x3 - x1));
    },
    initNonuniformCatmullRom: function(x0, x1, x2, x3, dt0, dt1, dt2) {
      let t1 = (x1 - x0) / dt0 - (x2 - x0) / (dt0 + dt1) + (x2 - x1) / dt1;
      let t2 = (x2 - x1) / dt1 - (x3 - x1) / (dt1 + dt2) + (x3 - x2) / dt2;
      t1 *= dt1;
      t2 *= dt1;
      init(x1, x2, t1, t2);
    },
    calc: function(t) {
      const t2 = t * t;
      const t3 = t2 * t;
      return c0 + c1 * t + c2 * t2 + c3 * t3;
    }
  };
}
var tmp = new Vector3();
var px = new CubicPoly();
var py = new CubicPoly();
var pz = new CubicPoly();
var CatmullRomCurve3 = class extends Curve {
  constructor(points = [], closed = false, curveType = "centripetal", tension = 0.5) {
    super();
    this.type = "CatmullRomCurve3";
    this.points = points;
    this.closed = closed;
    this.curveType = curveType;
    this.tension = tension;
  }
  getPoint(t, optionalTarget = new Vector3()) {
    const point = optionalTarget;
    const points = this.points;
    const l = points.length;
    const p = (l - (this.closed ? 0 : 1)) * t;
    let intPoint = Math.floor(p);
    let weight = p - intPoint;
    if (this.closed) {
      intPoint += intPoint > 0 ? 0 : (Math.floor(Math.abs(intPoint) / l) + 1) * l;
    } else if (weight === 0 && intPoint === l - 1) {
      intPoint = l - 2;
      weight = 1;
    }
    let p0, p3;
    if (this.closed || intPoint > 0) {
      p0 = points[(intPoint - 1) % l];
    } else {
      tmp.subVectors(points[0], points[1]).add(points[0]);
      p0 = tmp;
    }
    const p1 = points[intPoint % l];
    const p2 = points[(intPoint + 1) % l];
    if (this.closed || intPoint + 2 < l) {
      p3 = points[(intPoint + 2) % l];
    } else {
      tmp.subVectors(points[l - 1], points[l - 2]).add(points[l - 1]);
      p3 = tmp;
    }
    if (this.curveType === "centripetal" || this.curveType === "chordal") {
      const pow = this.curveType === "chordal" ? 0.5 : 0.25;
      let dt0 = Math.pow(p0.distanceToSquared(p1), pow);
      let dt1 = Math.pow(p1.distanceToSquared(p2), pow);
      let dt2 = Math.pow(p2.distanceToSquared(p3), pow);
      if (dt1 < 1e-4)
        dt1 = 1;
      if (dt0 < 1e-4)
        dt0 = dt1;
      if (dt2 < 1e-4)
        dt2 = dt1;
      px.initNonuniformCatmullRom(p0.x, p1.x, p2.x, p3.x, dt0, dt1, dt2);
      py.initNonuniformCatmullRom(p0.y, p1.y, p2.y, p3.y, dt0, dt1, dt2);
      pz.initNonuniformCatmullRom(p0.z, p1.z, p2.z, p3.z, dt0, dt1, dt2);
    } else if (this.curveType === "catmullrom") {
      px.initCatmullRom(p0.x, p1.x, p2.x, p3.x, this.tension);
      py.initCatmullRom(p0.y, p1.y, p2.y, p3.y, this.tension);
      pz.initCatmullRom(p0.z, p1.z, p2.z, p3.z, this.tension);
    }
    point.set(px.calc(weight), py.calc(weight), pz.calc(weight));
    return point;
  }
  copy(source) {
    super.copy(source);
    this.points = [];
    for (let i = 0, l = source.points.length; i < l; i++) {
      const point = source.points[i];
      this.points.push(point.clone());
    }
    this.closed = source.closed;
    this.curveType = source.curveType;
    this.tension = source.tension;
    return this;
  }
  toJSON() {
    const data = super.toJSON();
    data.points = [];
    for (let i = 0, l = this.points.length; i < l; i++) {
      const point = this.points[i];
      data.points.push(point.toArray());
    }
    data.closed = this.closed;
    data.curveType = this.curveType;
    data.tension = this.tension;
    return data;
  }
  fromJSON(json) {
    super.fromJSON(json);
    this.points = [];
    for (let i = 0, l = json.points.length; i < l; i++) {
      const point = json.points[i];
      this.points.push(new Vector3().fromArray(point));
    }
    this.closed = json.closed;
    this.curveType = json.curveType;
    this.tension = json.tension;
    return this;
  }
};
CatmullRomCurve3.prototype.isCatmullRomCurve3 = true;
function CatmullRom(t, p0, p1, p2, p3) {
  const v0 = (p2 - p0) * 0.5;
  const v1 = (p3 - p1) * 0.5;
  const t2 = t * t;
  const t3 = t * t2;
  return (2 * p1 - 2 * p2 + v0 + v1) * t3 + (-3 * p1 + 3 * p2 - 2 * v0 - v1) * t2 + v0 * t + p1;
}
function QuadraticBezierP0(t, p) {
  const k = 1 - t;
  return k * k * p;
}
function QuadraticBezierP1(t, p) {
  return 2 * (1 - t) * t * p;
}
function QuadraticBezierP2(t, p) {
  return t * t * p;
}
function QuadraticBezier(t, p0, p1, p2) {
  return QuadraticBezierP0(t, p0) + QuadraticBezierP1(t, p1) + QuadraticBezierP2(t, p2);
}
function CubicBezierP0(t, p) {
  const k = 1 - t;
  return k * k * k * p;
}
function CubicBezierP1(t, p) {
  const k = 1 - t;
  return 3 * k * k * t * p;
}
function CubicBezierP2(t, p) {
  return 3 * (1 - t) * t * t * p;
}
function CubicBezierP3(t, p) {
  return t * t * t * p;
}
function CubicBezier(t, p0, p1, p2, p3) {
  return CubicBezierP0(t, p0) + CubicBezierP1(t, p1) + CubicBezierP2(t, p2) + CubicBezierP3(t, p3);
}
var CubicBezierCurve = class extends Curve {
  constructor(v0 = new Vector2(), v1 = new Vector2(), v2 = new Vector2(), v3 = new Vector2()) {
    super();
    this.type = "CubicBezierCurve";
    this.v0 = v0;
    this.v1 = v1;
    this.v2 = v2;
    this.v3 = v3;
  }
  getPoint(t, optionalTarget = new Vector2()) {
    const point = optionalTarget;
    const v0 = this.v0, v1 = this.v1, v2 = this.v2, v3 = this.v3;
    point.set(CubicBezier(t, v0.x, v1.x, v2.x, v3.x), CubicBezier(t, v0.y, v1.y, v2.y, v3.y));
    return point;
  }
  copy(source) {
    super.copy(source);
    this.v0.copy(source.v0);
    this.v1.copy(source.v1);
    this.v2.copy(source.v2);
    this.v3.copy(source.v3);
    return this;
  }
  toJSON() {
    const data = super.toJSON();
    data.v0 = this.v0.toArray();
    data.v1 = this.v1.toArray();
    data.v2 = this.v2.toArray();
    data.v3 = this.v3.toArray();
    return data;
  }
  fromJSON(json) {
    super.fromJSON(json);
    this.v0.fromArray(json.v0);
    this.v1.fromArray(json.v1);
    this.v2.fromArray(json.v2);
    this.v3.fromArray(json.v3);
    return this;
  }
};
CubicBezierCurve.prototype.isCubicBezierCurve = true;
var CubicBezierCurve3 = class extends Curve {
  constructor(v0 = new Vector3(), v1 = new Vector3(), v2 = new Vector3(), v3 = new Vector3()) {
    super();
    this.type = "CubicBezierCurve3";
    this.v0 = v0;
    this.v1 = v1;
    this.v2 = v2;
    this.v3 = v3;
  }
  getPoint(t, optionalTarget = new Vector3()) {
    const point = optionalTarget;
    const v0 = this.v0, v1 = this.v1, v2 = this.v2, v3 = this.v3;
    point.set(CubicBezier(t, v0.x, v1.x, v2.x, v3.x), CubicBezier(t, v0.y, v1.y, v2.y, v3.y), CubicBezier(t, v0.z, v1.z, v2.z, v3.z));
    return point;
  }
  copy(source) {
    super.copy(source);
    this.v0.copy(source.v0);
    this.v1.copy(source.v1);
    this.v2.copy(source.v2);
    this.v3.copy(source.v3);
    return this;
  }
  toJSON() {
    const data = super.toJSON();
    data.v0 = this.v0.toArray();
    data.v1 = this.v1.toArray();
    data.v2 = this.v2.toArray();
    data.v3 = this.v3.toArray();
    return data;
  }
  fromJSON(json) {
    super.fromJSON(json);
    this.v0.fromArray(json.v0);
    this.v1.fromArray(json.v1);
    this.v2.fromArray(json.v2);
    this.v3.fromArray(json.v3);
    return this;
  }
};
CubicBezierCurve3.prototype.isCubicBezierCurve3 = true;
var LineCurve = class extends Curve {
  constructor(v1 = new Vector2(), v2 = new Vector2()) {
    super();
    this.type = "LineCurve";
    this.v1 = v1;
    this.v2 = v2;
  }
  getPoint(t, optionalTarget = new Vector2()) {
    const point = optionalTarget;
    if (t === 1) {
      point.copy(this.v2);
    } else {
      point.copy(this.v2).sub(this.v1);
      point.multiplyScalar(t).add(this.v1);
    }
    return point;
  }
  getPointAt(u, optionalTarget) {
    return this.getPoint(u, optionalTarget);
  }
  getTangent(t, optionalTarget) {
    const tangent = optionalTarget || new Vector2();
    tangent.copy(this.v2).sub(this.v1).normalize();
    return tangent;
  }
  copy(source) {
    super.copy(source);
    this.v1.copy(source.v1);
    this.v2.copy(source.v2);
    return this;
  }
  toJSON() {
    const data = super.toJSON();
    data.v1 = this.v1.toArray();
    data.v2 = this.v2.toArray();
    return data;
  }
  fromJSON(json) {
    super.fromJSON(json);
    this.v1.fromArray(json.v1);
    this.v2.fromArray(json.v2);
    return this;
  }
};
LineCurve.prototype.isLineCurve = true;
var LineCurve3 = class extends Curve {
  constructor(v1 = new Vector3(), v2 = new Vector3()) {
    super();
    this.type = "LineCurve3";
    this.isLineCurve3 = true;
    this.v1 = v1;
    this.v2 = v2;
  }
  getPoint(t, optionalTarget = new Vector3()) {
    const point = optionalTarget;
    if (t === 1) {
      point.copy(this.v2);
    } else {
      point.copy(this.v2).sub(this.v1);
      point.multiplyScalar(t).add(this.v1);
    }
    return point;
  }
  getPointAt(u, optionalTarget) {
    return this.getPoint(u, optionalTarget);
  }
  copy(source) {
    super.copy(source);
    this.v1.copy(source.v1);
    this.v2.copy(source.v2);
    return this;
  }
  toJSON() {
    const data = super.toJSON();
    data.v1 = this.v1.toArray();
    data.v2 = this.v2.toArray();
    return data;
  }
  fromJSON(json) {
    super.fromJSON(json);
    this.v1.fromArray(json.v1);
    this.v2.fromArray(json.v2);
    return this;
  }
};
var QuadraticBezierCurve = class extends Curve {
  constructor(v0 = new Vector2(), v1 = new Vector2(), v2 = new Vector2()) {
    super();
    this.type = "QuadraticBezierCurve";
    this.v0 = v0;
    this.v1 = v1;
    this.v2 = v2;
  }
  getPoint(t, optionalTarget = new Vector2()) {
    const point = optionalTarget;
    const v0 = this.v0, v1 = this.v1, v2 = this.v2;
    point.set(QuadraticBezier(t, v0.x, v1.x, v2.x), QuadraticBezier(t, v0.y, v1.y, v2.y));
    return point;
  }
  copy(source) {
    super.copy(source);
    this.v0.copy(source.v0);
    this.v1.copy(source.v1);
    this.v2.copy(source.v2);
    return this;
  }
  toJSON() {
    const data = super.toJSON();
    data.v0 = this.v0.toArray();
    data.v1 = this.v1.toArray();
    data.v2 = this.v2.toArray();
    return data;
  }
  fromJSON(json) {
    super.fromJSON(json);
    this.v0.fromArray(json.v0);
    this.v1.fromArray(json.v1);
    this.v2.fromArray(json.v2);
    return this;
  }
};
QuadraticBezierCurve.prototype.isQuadraticBezierCurve = true;
var QuadraticBezierCurve3 = class extends Curve {
  constructor(v0 = new Vector3(), v1 = new Vector3(), v2 = new Vector3()) {
    super();
    this.type = "QuadraticBezierCurve3";
    this.v0 = v0;
    this.v1 = v1;
    this.v2 = v2;
  }
  getPoint(t, optionalTarget = new Vector3()) {
    const point = optionalTarget;
    const v0 = this.v0, v1 = this.v1, v2 = this.v2;
    point.set(QuadraticBezier(t, v0.x, v1.x, v2.x), QuadraticBezier(t, v0.y, v1.y, v2.y), QuadraticBezier(t, v0.z, v1.z, v2.z));
    return point;
  }
  copy(source) {
    super.copy(source);
    this.v0.copy(source.v0);
    this.v1.copy(source.v1);
    this.v2.copy(source.v2);
    return this;
  }
  toJSON() {
    const data = super.toJSON();
    data.v0 = this.v0.toArray();
    data.v1 = this.v1.toArray();
    data.v2 = this.v2.toArray();
    return data;
  }
  fromJSON(json) {
    super.fromJSON(json);
    this.v0.fromArray(json.v0);
    this.v1.fromArray(json.v1);
    this.v2.fromArray(json.v2);
    return this;
  }
};
QuadraticBezierCurve3.prototype.isQuadraticBezierCurve3 = true;
var SplineCurve = class extends Curve {
  constructor(points = []) {
    super();
    this.type = "SplineCurve";
    this.points = points;
  }
  getPoint(t, optionalTarget = new Vector2()) {
    const point = optionalTarget;
    const points = this.points;
    const p = (points.length - 1) * t;
    const intPoint = Math.floor(p);
    const weight = p - intPoint;
    const p0 = points[intPoint === 0 ? intPoint : intPoint - 1];
    const p1 = points[intPoint];
    const p2 = points[intPoint > points.length - 2 ? points.length - 1 : intPoint + 1];
    const p3 = points[intPoint > points.length - 3 ? points.length - 1 : intPoint + 2];
    point.set(CatmullRom(weight, p0.x, p1.x, p2.x, p3.x), CatmullRom(weight, p0.y, p1.y, p2.y, p3.y));
    return point;
  }
  copy(source) {
    super.copy(source);
    this.points = [];
    for (let i = 0, l = source.points.length; i < l; i++) {
      const point = source.points[i];
      this.points.push(point.clone());
    }
    return this;
  }
  toJSON() {
    const data = super.toJSON();
    data.points = [];
    for (let i = 0, l = this.points.length; i < l; i++) {
      const point = this.points[i];
      data.points.push(point.toArray());
    }
    return data;
  }
  fromJSON(json) {
    super.fromJSON(json);
    this.points = [];
    for (let i = 0, l = json.points.length; i < l; i++) {
      const point = json.points[i];
      this.points.push(new Vector2().fromArray(point));
    }
    return this;
  }
};
SplineCurve.prototype.isSplineCurve = true;
var Curves = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ArcCurve,
  CatmullRomCurve3,
  CubicBezierCurve,
  CubicBezierCurve3,
  EllipseCurve,
  LineCurve,
  LineCurve3,
  QuadraticBezierCurve,
  QuadraticBezierCurve3,
  SplineCurve
});
var CurvePath = class extends Curve {
  constructor() {
    super();
    this.type = "CurvePath";
    this.curves = [];
    this.autoClose = false;
  }
  add(curve) {
    this.curves.push(curve);
  }
  closePath() {
    const startPoint = this.curves[0].getPoint(0);
    const endPoint = this.curves[this.curves.length - 1].getPoint(1);
    if (!startPoint.equals(endPoint)) {
      this.curves.push(new LineCurve(endPoint, startPoint));
    }
  }
  getPoint(t, optionalTarget) {
    const d = t * this.getLength();
    const curveLengths = this.getCurveLengths();
    let i = 0;
    while (i < curveLengths.length) {
      if (curveLengths[i] >= d) {
        const diff = curveLengths[i] - d;
        const curve = this.curves[i];
        const segmentLength = curve.getLength();
        const u = segmentLength === 0 ? 0 : 1 - diff / segmentLength;
        return curve.getPointAt(u, optionalTarget);
      }
      i++;
    }
    return null;
  }
  getLength() {
    const lens = this.getCurveLengths();
    return lens[lens.length - 1];
  }
  updateArcLengths() {
    this.needsUpdate = true;
    this.cacheLengths = null;
    this.getCurveLengths();
  }
  getCurveLengths() {
    if (this.cacheLengths && this.cacheLengths.length === this.curves.length) {
      return this.cacheLengths;
    }
    const lengths = [];
    let sums = 0;
    for (let i = 0, l = this.curves.length; i < l; i++) {
      sums += this.curves[i].getLength();
      lengths.push(sums);
    }
    this.cacheLengths = lengths;
    return lengths;
  }
  getSpacedPoints(divisions = 40) {
    const points = [];
    for (let i = 0; i <= divisions; i++) {
      points.push(this.getPoint(i / divisions));
    }
    if (this.autoClose) {
      points.push(points[0]);
    }
    return points;
  }
  getPoints(divisions = 12) {
    const points = [];
    let last;
    for (let i = 0, curves = this.curves; i < curves.length; i++) {
      const curve = curves[i];
      const resolution = curve.isEllipseCurve ? divisions * 2 : curve.isLineCurve || curve.isLineCurve3 ? 1 : curve.isSplineCurve ? divisions * curve.points.length : divisions;
      const pts = curve.getPoints(resolution);
      for (let j = 0; j < pts.length; j++) {
        const point = pts[j];
        if (last && last.equals(point))
          continue;
        points.push(point);
        last = point;
      }
    }
    if (this.autoClose && points.length > 1 && !points[points.length - 1].equals(points[0])) {
      points.push(points[0]);
    }
    return points;
  }
  copy(source) {
    super.copy(source);
    this.curves = [];
    for (let i = 0, l = source.curves.length; i < l; i++) {
      const curve = source.curves[i];
      this.curves.push(curve.clone());
    }
    this.autoClose = source.autoClose;
    return this;
  }
  toJSON() {
    const data = super.toJSON();
    data.autoClose = this.autoClose;
    data.curves = [];
    for (let i = 0, l = this.curves.length; i < l; i++) {
      const curve = this.curves[i];
      data.curves.push(curve.toJSON());
    }
    return data;
  }
  fromJSON(json) {
    super.fromJSON(json);
    this.autoClose = json.autoClose;
    this.curves = [];
    for (let i = 0, l = json.curves.length; i < l; i++) {
      const curve = json.curves[i];
      this.curves.push(new Curves[curve.type]().fromJSON(curve));
    }
    return this;
  }
};
var Path = class extends CurvePath {
  constructor(points) {
    super();
    this.type = "Path";
    this.currentPoint = new Vector2();
    if (points) {
      this.setFromPoints(points);
    }
  }
  setFromPoints(points) {
    this.moveTo(points[0].x, points[0].y);
    for (let i = 1, l = points.length; i < l; i++) {
      this.lineTo(points[i].x, points[i].y);
    }
    return this;
  }
  moveTo(x, y) {
    this.currentPoint.set(x, y);
    return this;
  }
  lineTo(x, y) {
    const curve = new LineCurve(this.currentPoint.clone(), new Vector2(x, y));
    this.curves.push(curve);
    this.currentPoint.set(x, y);
    return this;
  }
  quadraticCurveTo(aCPx, aCPy, aX, aY) {
    const curve = new QuadraticBezierCurve(this.currentPoint.clone(), new Vector2(aCPx, aCPy), new Vector2(aX, aY));
    this.curves.push(curve);
    this.currentPoint.set(aX, aY);
    return this;
  }
  bezierCurveTo(aCP1x, aCP1y, aCP2x, aCP2y, aX, aY) {
    const curve = new CubicBezierCurve(this.currentPoint.clone(), new Vector2(aCP1x, aCP1y), new Vector2(aCP2x, aCP2y), new Vector2(aX, aY));
    this.curves.push(curve);
    this.currentPoint.set(aX, aY);
    return this;
  }
  splineThru(pts) {
    const npts = [this.currentPoint.clone()].concat(pts);
    const curve = new SplineCurve(npts);
    this.curves.push(curve);
    this.currentPoint.copy(pts[pts.length - 1]);
    return this;
  }
  arc(aX, aY, aRadius, aStartAngle, aEndAngle, aClockwise) {
    const x0 = this.currentPoint.x;
    const y0 = this.currentPoint.y;
    this.absarc(aX + x0, aY + y0, aRadius, aStartAngle, aEndAngle, aClockwise);
    return this;
  }
  absarc(aX, aY, aRadius, aStartAngle, aEndAngle, aClockwise) {
    this.absellipse(aX, aY, aRadius, aRadius, aStartAngle, aEndAngle, aClockwise);
    return this;
  }
  ellipse(aX, aY, xRadius, yRadius, aStartAngle, aEndAngle, aClockwise, aRotation) {
    const x0 = this.currentPoint.x;
    const y0 = this.currentPoint.y;
    this.absellipse(aX + x0, aY + y0, xRadius, yRadius, aStartAngle, aEndAngle, aClockwise, aRotation);
    return this;
  }
  absellipse(aX, aY, xRadius, yRadius, aStartAngle, aEndAngle, aClockwise, aRotation) {
    const curve = new EllipseCurve(aX, aY, xRadius, yRadius, aStartAngle, aEndAngle, aClockwise, aRotation);
    if (this.curves.length > 0) {
      const firstPoint = curve.getPoint(0);
      if (!firstPoint.equals(this.currentPoint)) {
        this.lineTo(firstPoint.x, firstPoint.y);
      }
    }
    this.curves.push(curve);
    const lastPoint = curve.getPoint(1);
    this.currentPoint.copy(lastPoint);
    return this;
  }
  copy(source) {
    super.copy(source);
    this.currentPoint.copy(source.currentPoint);
    return this;
  }
  toJSON() {
    const data = super.toJSON();
    data.currentPoint = this.currentPoint.toArray();
    return data;
  }
  fromJSON(json) {
    super.fromJSON(json);
    this.currentPoint.fromArray(json.currentPoint);
    return this;
  }
};
var _v0 = new Vector3();
var _v1$1 = new Vector3();
var _normal = new Vector3();
var _triangle = new Triangle();
var Shape = class extends Path {
  constructor(points) {
    super(points);
    this.uuid = generateUUID();
    this.type = "Shape";
    this.holes = [];
  }
  getPointsHoles(divisions) {
    const holesPts = [];
    for (let i = 0, l = this.holes.length; i < l; i++) {
      holesPts[i] = this.holes[i].getPoints(divisions);
    }
    return holesPts;
  }
  extractPoints(divisions) {
    return {
      shape: this.getPoints(divisions),
      holes: this.getPointsHoles(divisions)
    };
  }
  copy(source) {
    super.copy(source);
    this.holes = [];
    for (let i = 0, l = source.holes.length; i < l; i++) {
      const hole = source.holes[i];
      this.holes.push(hole.clone());
    }
    return this;
  }
  toJSON() {
    const data = super.toJSON();
    data.uuid = this.uuid;
    data.holes = [];
    for (let i = 0, l = this.holes.length; i < l; i++) {
      const hole = this.holes[i];
      data.holes.push(hole.toJSON());
    }
    return data;
  }
  fromJSON(json) {
    super.fromJSON(json);
    this.uuid = json.uuid;
    this.holes = [];
    for (let i = 0, l = json.holes.length; i < l; i++) {
      const hole = json.holes[i];
      this.holes.push(new Path().fromJSON(hole));
    }
    return this;
  }
};
var Earcut = {
  triangulate: function(data, holeIndices, dim = 2) {
    const hasHoles = holeIndices && holeIndices.length;
    const outerLen = hasHoles ? holeIndices[0] * dim : data.length;
    let outerNode = linkedList(data, 0, outerLen, dim, true);
    const triangles = [];
    if (!outerNode || outerNode.next === outerNode.prev)
      return triangles;
    let minX, minY, maxX, maxY, x, y, invSize;
    if (hasHoles)
      outerNode = eliminateHoles(data, holeIndices, outerNode, dim);
    if (data.length > 80 * dim) {
      minX = maxX = data[0];
      minY = maxY = data[1];
      for (let i = dim; i < outerLen; i += dim) {
        x = data[i];
        y = data[i + 1];
        if (x < minX)
          minX = x;
        if (y < minY)
          minY = y;
        if (x > maxX)
          maxX = x;
        if (y > maxY)
          maxY = y;
      }
      invSize = Math.max(maxX - minX, maxY - minY);
      invSize = invSize !== 0 ? 1 / invSize : 0;
    }
    earcutLinked(outerNode, triangles, dim, minX, minY, invSize);
    return triangles;
  }
};
function linkedList(data, start, end, dim, clockwise) {
  let i, last;
  if (clockwise === signedArea(data, start, end, dim) > 0) {
    for (i = start; i < end; i += dim)
      last = insertNode(i, data[i], data[i + 1], last);
  } else {
    for (i = end - dim; i >= start; i -= dim)
      last = insertNode(i, data[i], data[i + 1], last);
  }
  if (last && equals(last, last.next)) {
    removeNode(last);
    last = last.next;
  }
  return last;
}
function filterPoints(start, end) {
  if (!start)
    return start;
  if (!end)
    end = start;
  let p = start, again;
  do {
    again = false;
    if (!p.steiner && (equals(p, p.next) || area(p.prev, p, p.next) === 0)) {
      removeNode(p);
      p = end = p.prev;
      if (p === p.next)
        break;
      again = true;
    } else {
      p = p.next;
    }
  } while (again || p !== end);
  return end;
}
function earcutLinked(ear, triangles, dim, minX, minY, invSize, pass) {
  if (!ear)
    return;
  if (!pass && invSize)
    indexCurve(ear, minX, minY, invSize);
  let stop = ear, prev, next;
  while (ear.prev !== ear.next) {
    prev = ear.prev;
    next = ear.next;
    if (invSize ? isEarHashed(ear, minX, minY, invSize) : isEar(ear)) {
      triangles.push(prev.i / dim);
      triangles.push(ear.i / dim);
      triangles.push(next.i / dim);
      removeNode(ear);
      ear = next.next;
      stop = next.next;
      continue;
    }
    ear = next;
    if (ear === stop) {
      if (!pass) {
        earcutLinked(filterPoints(ear), triangles, dim, minX, minY, invSize, 1);
      } else if (pass === 1) {
        ear = cureLocalIntersections(filterPoints(ear), triangles, dim);
        earcutLinked(ear, triangles, dim, minX, minY, invSize, 2);
      } else if (pass === 2) {
        splitEarcut(ear, triangles, dim, minX, minY, invSize);
      }
      break;
    }
  }
}
function isEar(ear) {
  const a = ear.prev, b = ear, c = ear.next;
  if (area(a, b, c) >= 0)
    return false;
  let p = ear.next.next;
  while (p !== ear.prev) {
    if (pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, p.x, p.y) && area(p.prev, p, p.next) >= 0)
      return false;
    p = p.next;
  }
  return true;
}
function isEarHashed(ear, minX, minY, invSize) {
  const a = ear.prev, b = ear, c = ear.next;
  if (area(a, b, c) >= 0)
    return false;
  const minTX = a.x < b.x ? a.x < c.x ? a.x : c.x : b.x < c.x ? b.x : c.x, minTY = a.y < b.y ? a.y < c.y ? a.y : c.y : b.y < c.y ? b.y : c.y, maxTX = a.x > b.x ? a.x > c.x ? a.x : c.x : b.x > c.x ? b.x : c.x, maxTY = a.y > b.y ? a.y > c.y ? a.y : c.y : b.y > c.y ? b.y : c.y;
  const minZ = zOrder(minTX, minTY, minX, minY, invSize), maxZ = zOrder(maxTX, maxTY, minX, minY, invSize);
  let p = ear.prevZ, n = ear.nextZ;
  while (p && p.z >= minZ && n && n.z <= maxZ) {
    if (p !== ear.prev && p !== ear.next && pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, p.x, p.y) && area(p.prev, p, p.next) >= 0)
      return false;
    p = p.prevZ;
    if (n !== ear.prev && n !== ear.next && pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, n.x, n.y) && area(n.prev, n, n.next) >= 0)
      return false;
    n = n.nextZ;
  }
  while (p && p.z >= minZ) {
    if (p !== ear.prev && p !== ear.next && pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, p.x, p.y) && area(p.prev, p, p.next) >= 0)
      return false;
    p = p.prevZ;
  }
  while (n && n.z <= maxZ) {
    if (n !== ear.prev && n !== ear.next && pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, n.x, n.y) && area(n.prev, n, n.next) >= 0)
      return false;
    n = n.nextZ;
  }
  return true;
}
function cureLocalIntersections(start, triangles, dim) {
  let p = start;
  do {
    const a = p.prev, b = p.next.next;
    if (!equals(a, b) && intersects(a, p, p.next, b) && locallyInside(a, b) && locallyInside(b, a)) {
      triangles.push(a.i / dim);
      triangles.push(p.i / dim);
      triangles.push(b.i / dim);
      removeNode(p);
      removeNode(p.next);
      p = start = b;
    }
    p = p.next;
  } while (p !== start);
  return filterPoints(p);
}
function splitEarcut(start, triangles, dim, minX, minY, invSize) {
  let a = start;
  do {
    let b = a.next.next;
    while (b !== a.prev) {
      if (a.i !== b.i && isValidDiagonal(a, b)) {
        let c = splitPolygon(a, b);
        a = filterPoints(a, a.next);
        c = filterPoints(c, c.next);
        earcutLinked(a, triangles, dim, minX, minY, invSize);
        earcutLinked(c, triangles, dim, minX, minY, invSize);
        return;
      }
      b = b.next;
    }
    a = a.next;
  } while (a !== start);
}
function eliminateHoles(data, holeIndices, outerNode, dim) {
  const queue = [];
  let i, len, start, end, list;
  for (i = 0, len = holeIndices.length; i < len; i++) {
    start = holeIndices[i] * dim;
    end = i < len - 1 ? holeIndices[i + 1] * dim : data.length;
    list = linkedList(data, start, end, dim, false);
    if (list === list.next)
      list.steiner = true;
    queue.push(getLeftmost(list));
  }
  queue.sort(compareX);
  for (i = 0; i < queue.length; i++) {
    eliminateHole(queue[i], outerNode);
    outerNode = filterPoints(outerNode, outerNode.next);
  }
  return outerNode;
}
function compareX(a, b) {
  return a.x - b.x;
}
function eliminateHole(hole, outerNode) {
  outerNode = findHoleBridge(hole, outerNode);
  if (outerNode) {
    const b = splitPolygon(outerNode, hole);
    filterPoints(outerNode, outerNode.next);
    filterPoints(b, b.next);
  }
}
function findHoleBridge(hole, outerNode) {
  let p = outerNode;
  const hx = hole.x;
  const hy = hole.y;
  let qx = -Infinity, m;
  do {
    if (hy <= p.y && hy >= p.next.y && p.next.y !== p.y) {
      const x = p.x + (hy - p.y) * (p.next.x - p.x) / (p.next.y - p.y);
      if (x <= hx && x > qx) {
        qx = x;
        if (x === hx) {
          if (hy === p.y)
            return p;
          if (hy === p.next.y)
            return p.next;
        }
        m = p.x < p.next.x ? p : p.next;
      }
    }
    p = p.next;
  } while (p !== outerNode);
  if (!m)
    return null;
  if (hx === qx)
    return m;
  const stop = m, mx = m.x, my = m.y;
  let tanMin = Infinity, tan;
  p = m;
  do {
    if (hx >= p.x && p.x >= mx && hx !== p.x && pointInTriangle(hy < my ? hx : qx, hy, mx, my, hy < my ? qx : hx, hy, p.x, p.y)) {
      tan = Math.abs(hy - p.y) / (hx - p.x);
      if (locallyInside(p, hole) && (tan < tanMin || tan === tanMin && (p.x > m.x || p.x === m.x && sectorContainsSector(m, p)))) {
        m = p;
        tanMin = tan;
      }
    }
    p = p.next;
  } while (p !== stop);
  return m;
}
function sectorContainsSector(m, p) {
  return area(m.prev, m, p.prev) < 0 && area(p.next, m, m.next) < 0;
}
function indexCurve(start, minX, minY, invSize) {
  let p = start;
  do {
    if (p.z === null)
      p.z = zOrder(p.x, p.y, minX, minY, invSize);
    p.prevZ = p.prev;
    p.nextZ = p.next;
    p = p.next;
  } while (p !== start);
  p.prevZ.nextZ = null;
  p.prevZ = null;
  sortLinked(p);
}
function sortLinked(list) {
  let i, p, q, e, tail, numMerges, pSize, qSize, inSize = 1;
  do {
    p = list;
    list = null;
    tail = null;
    numMerges = 0;
    while (p) {
      numMerges++;
      q = p;
      pSize = 0;
      for (i = 0; i < inSize; i++) {
        pSize++;
        q = q.nextZ;
        if (!q)
          break;
      }
      qSize = inSize;
      while (pSize > 0 || qSize > 0 && q) {
        if (pSize !== 0 && (qSize === 0 || !q || p.z <= q.z)) {
          e = p;
          p = p.nextZ;
          pSize--;
        } else {
          e = q;
          q = q.nextZ;
          qSize--;
        }
        if (tail)
          tail.nextZ = e;
        else
          list = e;
        e.prevZ = tail;
        tail = e;
      }
      p = q;
    }
    tail.nextZ = null;
    inSize *= 2;
  } while (numMerges > 1);
  return list;
}
function zOrder(x, y, minX, minY, invSize) {
  x = 32767 * (x - minX) * invSize;
  y = 32767 * (y - minY) * invSize;
  x = (x | x << 8) & 16711935;
  x = (x | x << 4) & 252645135;
  x = (x | x << 2) & 858993459;
  x = (x | x << 1) & 1431655765;
  y = (y | y << 8) & 16711935;
  y = (y | y << 4) & 252645135;
  y = (y | y << 2) & 858993459;
  y = (y | y << 1) & 1431655765;
  return x | y << 1;
}
function getLeftmost(start) {
  let p = start, leftmost = start;
  do {
    if (p.x < leftmost.x || p.x === leftmost.x && p.y < leftmost.y)
      leftmost = p;
    p = p.next;
  } while (p !== start);
  return leftmost;
}
function pointInTriangle(ax, ay, bx, by, cx, cy, px2, py2) {
  return (cx - px2) * (ay - py2) - (ax - px2) * (cy - py2) >= 0 && (ax - px2) * (by - py2) - (bx - px2) * (ay - py2) >= 0 && (bx - px2) * (cy - py2) - (cx - px2) * (by - py2) >= 0;
}
function isValidDiagonal(a, b) {
  return a.next.i !== b.i && a.prev.i !== b.i && !intersectsPolygon(a, b) && (locallyInside(a, b) && locallyInside(b, a) && middleInside(a, b) && (area(a.prev, a, b.prev) || area(a, b.prev, b)) || equals(a, b) && area(a.prev, a, a.next) > 0 && area(b.prev, b, b.next) > 0);
}
function area(p, q, r) {
  return (q.y - p.y) * (r.x - q.x) - (q.x - p.x) * (r.y - q.y);
}
function equals(p1, p2) {
  return p1.x === p2.x && p1.y === p2.y;
}
function intersects(p1, q1, p2, q2) {
  const o1 = sign(area(p1, q1, p2));
  const o2 = sign(area(p1, q1, q2));
  const o3 = sign(area(p2, q2, p1));
  const o4 = sign(area(p2, q2, q1));
  if (o1 !== o2 && o3 !== o4)
    return true;
  if (o1 === 0 && onSegment(p1, p2, q1))
    return true;
  if (o2 === 0 && onSegment(p1, q2, q1))
    return true;
  if (o3 === 0 && onSegment(p2, p1, q2))
    return true;
  if (o4 === 0 && onSegment(p2, q1, q2))
    return true;
  return false;
}
function onSegment(p, q, r) {
  return q.x <= Math.max(p.x, r.x) && q.x >= Math.min(p.x, r.x) && q.y <= Math.max(p.y, r.y) && q.y >= Math.min(p.y, r.y);
}
function sign(num) {
  return num > 0 ? 1 : num < 0 ? -1 : 0;
}
function intersectsPolygon(a, b) {
  let p = a;
  do {
    if (p.i !== a.i && p.next.i !== a.i && p.i !== b.i && p.next.i !== b.i && intersects(p, p.next, a, b))
      return true;
    p = p.next;
  } while (p !== a);
  return false;
}
function locallyInside(a, b) {
  return area(a.prev, a, a.next) < 0 ? area(a, b, a.next) >= 0 && area(a, a.prev, b) >= 0 : area(a, b, a.prev) < 0 || area(a, a.next, b) < 0;
}
function middleInside(a, b) {
  let p = a, inside = false;
  const px2 = (a.x + b.x) / 2, py2 = (a.y + b.y) / 2;
  do {
    if (p.y > py2 !== p.next.y > py2 && p.next.y !== p.y && px2 < (p.next.x - p.x) * (py2 - p.y) / (p.next.y - p.y) + p.x)
      inside = !inside;
    p = p.next;
  } while (p !== a);
  return inside;
}
function splitPolygon(a, b) {
  const a2 = new Node(a.i, a.x, a.y), b2 = new Node(b.i, b.x, b.y), an = a.next, bp = b.prev;
  a.next = b;
  b.prev = a;
  a2.next = an;
  an.prev = a2;
  b2.next = a2;
  a2.prev = b2;
  bp.next = b2;
  b2.prev = bp;
  return b2;
}
function insertNode(i, x, y, last) {
  const p = new Node(i, x, y);
  if (!last) {
    p.prev = p;
    p.next = p;
  } else {
    p.next = last.next;
    p.prev = last;
    last.next.prev = p;
    last.next = p;
  }
  return p;
}
function removeNode(p) {
  p.next.prev = p.prev;
  p.prev.next = p.next;
  if (p.prevZ)
    p.prevZ.nextZ = p.nextZ;
  if (p.nextZ)
    p.nextZ.prevZ = p.prevZ;
}
function Node(i, x, y) {
  this.i = i;
  this.x = x;
  this.y = y;
  this.prev = null;
  this.next = null;
  this.z = null;
  this.prevZ = null;
  this.nextZ = null;
  this.steiner = false;
}
function signedArea(data, start, end, dim) {
  let sum = 0;
  for (let i = start, j = end - dim; i < end; i += dim) {
    sum += (data[j] - data[i]) * (data[i + 1] + data[j + 1]);
    j = i;
  }
  return sum;
}
var ShapeUtils = class {
  static area(contour) {
    const n = contour.length;
    let a = 0;
    for (let p = n - 1, q = 0; q < n; p = q++) {
      a += contour[p].x * contour[q].y - contour[q].x * contour[p].y;
    }
    return a * 0.5;
  }
  static isClockWise(pts) {
    return ShapeUtils.area(pts) < 0;
  }
  static triangulateShape(contour, holes) {
    const vertices = [];
    const holeIndices = [];
    const faces = [];
    removeDupEndPts(contour);
    addContour(vertices, contour);
    let holeIndex = contour.length;
    holes.forEach(removeDupEndPts);
    for (let i = 0; i < holes.length; i++) {
      holeIndices.push(holeIndex);
      holeIndex += holes[i].length;
      addContour(vertices, holes[i]);
    }
    const triangles = Earcut.triangulate(vertices, holeIndices);
    for (let i = 0; i < triangles.length; i += 3) {
      faces.push(triangles.slice(i, i + 3));
    }
    return faces;
  }
};
function removeDupEndPts(points) {
  const l = points.length;
  if (l > 2 && points[l - 1].equals(points[0])) {
    points.pop();
  }
}
function addContour(vertices, contour) {
  for (let i = 0; i < contour.length; i++) {
    vertices.push(contour[i].x);
    vertices.push(contour[i].y);
  }
}
var ExtrudeGeometry = class extends BufferGeometry {
  constructor(shapes = new Shape([new Vector2(0.5, 0.5), new Vector2(-0.5, 0.5), new Vector2(-0.5, -0.5), new Vector2(0.5, -0.5)]), options = {}) {
    super();
    this.type = "ExtrudeGeometry";
    this.parameters = {
      shapes,
      options
    };
    shapes = Array.isArray(shapes) ? shapes : [shapes];
    const scope = this;
    const verticesArray = [];
    const uvArray = [];
    for (let i = 0, l = shapes.length; i < l; i++) {
      const shape = shapes[i];
      addShape(shape);
    }
    this.setAttribute("position", new Float32BufferAttribute(verticesArray, 3));
    this.setAttribute("uv", new Float32BufferAttribute(uvArray, 2));
    this.computeVertexNormals();
    function addShape(shape) {
      const placeholder = [];
      const curveSegments = options.curveSegments !== void 0 ? options.curveSegments : 12;
      const steps = options.steps !== void 0 ? options.steps : 1;
      let depth = options.depth !== void 0 ? options.depth : 1;
      let bevelEnabled = options.bevelEnabled !== void 0 ? options.bevelEnabled : true;
      let bevelThickness = options.bevelThickness !== void 0 ? options.bevelThickness : 0.2;
      let bevelSize = options.bevelSize !== void 0 ? options.bevelSize : bevelThickness - 0.1;
      let bevelOffset = options.bevelOffset !== void 0 ? options.bevelOffset : 0;
      let bevelSegments = options.bevelSegments !== void 0 ? options.bevelSegments : 3;
      const extrudePath = options.extrudePath;
      const uvgen = options.UVGenerator !== void 0 ? options.UVGenerator : WorldUVGenerator;
      if (options.amount !== void 0) {
        console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth.");
        depth = options.amount;
      }
      let extrudePts, extrudeByPath = false;
      let splineTube, binormal, normal, position2;
      if (extrudePath) {
        extrudePts = extrudePath.getSpacedPoints(steps);
        extrudeByPath = true;
        bevelEnabled = false;
        splineTube = extrudePath.computeFrenetFrames(steps, false);
        binormal = new Vector3();
        normal = new Vector3();
        position2 = new Vector3();
      }
      if (!bevelEnabled) {
        bevelSegments = 0;
        bevelThickness = 0;
        bevelSize = 0;
        bevelOffset = 0;
      }
      const shapePoints = shape.extractPoints(curveSegments);
      let vertices = shapePoints.shape;
      const holes = shapePoints.holes;
      const reverse = !ShapeUtils.isClockWise(vertices);
      if (reverse) {
        vertices = vertices.reverse();
        for (let h = 0, hl = holes.length; h < hl; h++) {
          const ahole = holes[h];
          if (ShapeUtils.isClockWise(ahole)) {
            holes[h] = ahole.reverse();
          }
        }
      }
      const faces = ShapeUtils.triangulateShape(vertices, holes);
      const contour = vertices;
      for (let h = 0, hl = holes.length; h < hl; h++) {
        const ahole = holes[h];
        vertices = vertices.concat(ahole);
      }
      function scalePt2(pt, vec, size) {
        if (!vec)
          console.error("THREE.ExtrudeGeometry: vec does not exist");
        return vec.clone().multiplyScalar(size).add(pt);
      }
      const vlen = vertices.length, flen = faces.length;
      function getBevelVec(inPt, inPrev, inNext) {
        let v_trans_x, v_trans_y, shrink_by;
        const v_prev_x = inPt.x - inPrev.x, v_prev_y = inPt.y - inPrev.y;
        const v_next_x = inNext.x - inPt.x, v_next_y = inNext.y - inPt.y;
        const v_prev_lensq = v_prev_x * v_prev_x + v_prev_y * v_prev_y;
        const collinear0 = v_prev_x * v_next_y - v_prev_y * v_next_x;
        if (Math.abs(collinear0) > Number.EPSILON) {
          const v_prev_len = Math.sqrt(v_prev_lensq);
          const v_next_len = Math.sqrt(v_next_x * v_next_x + v_next_y * v_next_y);
          const ptPrevShift_x = inPrev.x - v_prev_y / v_prev_len;
          const ptPrevShift_y = inPrev.y + v_prev_x / v_prev_len;
          const ptNextShift_x = inNext.x - v_next_y / v_next_len;
          const ptNextShift_y = inNext.y + v_next_x / v_next_len;
          const sf = ((ptNextShift_x - ptPrevShift_x) * v_next_y - (ptNextShift_y - ptPrevShift_y) * v_next_x) / (v_prev_x * v_next_y - v_prev_y * v_next_x);
          v_trans_x = ptPrevShift_x + v_prev_x * sf - inPt.x;
          v_trans_y = ptPrevShift_y + v_prev_y * sf - inPt.y;
          const v_trans_lensq = v_trans_x * v_trans_x + v_trans_y * v_trans_y;
          if (v_trans_lensq <= 2) {
            return new Vector2(v_trans_x, v_trans_y);
          } else {
            shrink_by = Math.sqrt(v_trans_lensq / 2);
          }
        } else {
          let direction_eq = false;
          if (v_prev_x > Number.EPSILON) {
            if (v_next_x > Number.EPSILON) {
              direction_eq = true;
            }
          } else {
            if (v_prev_x < -Number.EPSILON) {
              if (v_next_x < -Number.EPSILON) {
                direction_eq = true;
              }
            } else {
              if (Math.sign(v_prev_y) === Math.sign(v_next_y)) {
                direction_eq = true;
              }
            }
          }
          if (direction_eq) {
            v_trans_x = -v_prev_y;
            v_trans_y = v_prev_x;
            shrink_by = Math.sqrt(v_prev_lensq);
          } else {
            v_trans_x = v_prev_x;
            v_trans_y = v_prev_y;
            shrink_by = Math.sqrt(v_prev_lensq / 2);
          }
        }
        return new Vector2(v_trans_x / shrink_by, v_trans_y / shrink_by);
      }
      const contourMovements = [];
      for (let i = 0, il = contour.length, j = il - 1, k = i + 1; i < il; i++, j++, k++) {
        if (j === il)
          j = 0;
        if (k === il)
          k = 0;
        contourMovements[i] = getBevelVec(contour[i], contour[j], contour[k]);
      }
      const holesMovements = [];
      let oneHoleMovements, verticesMovements = contourMovements.concat();
      for (let h = 0, hl = holes.length; h < hl; h++) {
        const ahole = holes[h];
        oneHoleMovements = [];
        for (let i = 0, il = ahole.length, j = il - 1, k = i + 1; i < il; i++, j++, k++) {
          if (j === il)
            j = 0;
          if (k === il)
            k = 0;
          oneHoleMovements[i] = getBevelVec(ahole[i], ahole[j], ahole[k]);
        }
        holesMovements.push(oneHoleMovements);
        verticesMovements = verticesMovements.concat(oneHoleMovements);
      }
      for (let b = 0; b < bevelSegments; b++) {
        const t = b / bevelSegments;
        const z = bevelThickness * Math.cos(t * Math.PI / 2);
        const bs2 = bevelSize * Math.sin(t * Math.PI / 2) + bevelOffset;
        for (let i = 0, il = contour.length; i < il; i++) {
          const vert = scalePt2(contour[i], contourMovements[i], bs2);
          v(vert.x, vert.y, -z);
        }
        for (let h = 0, hl = holes.length; h < hl; h++) {
          const ahole = holes[h];
          oneHoleMovements = holesMovements[h];
          for (let i = 0, il = ahole.length; i < il; i++) {
            const vert = scalePt2(ahole[i], oneHoleMovements[i], bs2);
            v(vert.x, vert.y, -z);
          }
        }
      }
      const bs = bevelSize + bevelOffset;
      for (let i = 0; i < vlen; i++) {
        const vert = bevelEnabled ? scalePt2(vertices[i], verticesMovements[i], bs) : vertices[i];
        if (!extrudeByPath) {
          v(vert.x, vert.y, 0);
        } else {
          normal.copy(splineTube.normals[0]).multiplyScalar(vert.x);
          binormal.copy(splineTube.binormals[0]).multiplyScalar(vert.y);
          position2.copy(extrudePts[0]).add(normal).add(binormal);
          v(position2.x, position2.y, position2.z);
        }
      }
      for (let s = 1; s <= steps; s++) {
        for (let i = 0; i < vlen; i++) {
          const vert = bevelEnabled ? scalePt2(vertices[i], verticesMovements[i], bs) : vertices[i];
          if (!extrudeByPath) {
            v(vert.x, vert.y, depth / steps * s);
          } else {
            normal.copy(splineTube.normals[s]).multiplyScalar(vert.x);
            binormal.copy(splineTube.binormals[s]).multiplyScalar(vert.y);
            position2.copy(extrudePts[s]).add(normal).add(binormal);
            v(position2.x, position2.y, position2.z);
          }
        }
      }
      for (let b = bevelSegments - 1; b >= 0; b--) {
        const t = b / bevelSegments;
        const z = bevelThickness * Math.cos(t * Math.PI / 2);
        const bs2 = bevelSize * Math.sin(t * Math.PI / 2) + bevelOffset;
        for (let i = 0, il = contour.length; i < il; i++) {
          const vert = scalePt2(contour[i], contourMovements[i], bs2);
          v(vert.x, vert.y, depth + z);
        }
        for (let h = 0, hl = holes.length; h < hl; h++) {
          const ahole = holes[h];
          oneHoleMovements = holesMovements[h];
          for (let i = 0, il = ahole.length; i < il; i++) {
            const vert = scalePt2(ahole[i], oneHoleMovements[i], bs2);
            if (!extrudeByPath) {
              v(vert.x, vert.y, depth + z);
            } else {
              v(vert.x, vert.y + extrudePts[steps - 1].y, extrudePts[steps - 1].x + z);
            }
          }
        }
      }
      buildLidFaces();
      buildSideFaces();
      function buildLidFaces() {
        const start = verticesArray.length / 3;
        if (bevelEnabled) {
          let layer = 0;
          let offset = vlen * layer;
          for (let i = 0; i < flen; i++) {
            const face = faces[i];
            f3(face[2] + offset, face[1] + offset, face[0] + offset);
          }
          layer = steps + bevelSegments * 2;
          offset = vlen * layer;
          for (let i = 0; i < flen; i++) {
            const face = faces[i];
            f3(face[0] + offset, face[1] + offset, face[2] + offset);
          }
        } else {
          for (let i = 0; i < flen; i++) {
            const face = faces[i];
            f3(face[2], face[1], face[0]);
          }
          for (let i = 0; i < flen; i++) {
            const face = faces[i];
            f3(face[0] + vlen * steps, face[1] + vlen * steps, face[2] + vlen * steps);
          }
        }
        scope.addGroup(start, verticesArray.length / 3 - start, 0);
      }
      function buildSideFaces() {
        const start = verticesArray.length / 3;
        let layeroffset = 0;
        sidewalls(contour, layeroffset);
        layeroffset += contour.length;
        for (let h = 0, hl = holes.length; h < hl; h++) {
          const ahole = holes[h];
          sidewalls(ahole, layeroffset);
          layeroffset += ahole.length;
        }
        scope.addGroup(start, verticesArray.length / 3 - start, 1);
      }
      function sidewalls(contour2, layeroffset) {
        let i = contour2.length;
        while (--i >= 0) {
          const j = i;
          let k = i - 1;
          if (k < 0)
            k = contour2.length - 1;
          for (let s = 0, sl = steps + bevelSegments * 2; s < sl; s++) {
            const slen1 = vlen * s;
            const slen2 = vlen * (s + 1);
            const a = layeroffset + j + slen1, b = layeroffset + k + slen1, c = layeroffset + k + slen2, d = layeroffset + j + slen2;
            f4(a, b, c, d);
          }
        }
      }
      function v(x, y, z) {
        placeholder.push(x);
        placeholder.push(y);
        placeholder.push(z);
      }
      function f3(a, b, c) {
        addVertex(a);
        addVertex(b);
        addVertex(c);
        const nextIndex = verticesArray.length / 3;
        const uvs = uvgen.generateTopUV(scope, verticesArray, nextIndex - 3, nextIndex - 2, nextIndex - 1);
        addUV(uvs[0]);
        addUV(uvs[1]);
        addUV(uvs[2]);
      }
      function f4(a, b, c, d) {
        addVertex(a);
        addVertex(b);
        addVertex(d);
        addVertex(b);
        addVertex(c);
        addVertex(d);
        const nextIndex = verticesArray.length / 3;
        const uvs = uvgen.generateSideWallUV(scope, verticesArray, nextIndex - 6, nextIndex - 3, nextIndex - 2, nextIndex - 1);
        addUV(uvs[0]);
        addUV(uvs[1]);
        addUV(uvs[3]);
        addUV(uvs[1]);
        addUV(uvs[2]);
        addUV(uvs[3]);
      }
      function addVertex(index) {
        verticesArray.push(placeholder[index * 3 + 0]);
        verticesArray.push(placeholder[index * 3 + 1]);
        verticesArray.push(placeholder[index * 3 + 2]);
      }
      function addUV(vector2) {
        uvArray.push(vector2.x);
        uvArray.push(vector2.y);
      }
    }
  }
  toJSON() {
    const data = super.toJSON();
    const shapes = this.parameters.shapes;
    const options = this.parameters.options;
    return toJSON$1(shapes, options, data);
  }
  static fromJSON(data, shapes) {
    const geometryShapes = [];
    for (let j = 0, jl = data.shapes.length; j < jl; j++) {
      const shape = shapes[data.shapes[j]];
      geometryShapes.push(shape);
    }
    const extrudePath = data.options.extrudePath;
    if (extrudePath !== void 0) {
      data.options.extrudePath = new Curves[extrudePath.type]().fromJSON(extrudePath);
    }
    return new ExtrudeGeometry(geometryShapes, data.options);
  }
};
var WorldUVGenerator = {
  generateTopUV: function(geometry, vertices, indexA, indexB, indexC) {
    const a_x = vertices[indexA * 3];
    const a_y = vertices[indexA * 3 + 1];
    const b_x = vertices[indexB * 3];
    const b_y = vertices[indexB * 3 + 1];
    const c_x = vertices[indexC * 3];
    const c_y = vertices[indexC * 3 + 1];
    return [
      new Vector2(a_x, a_y),
      new Vector2(b_x, b_y),
      new Vector2(c_x, c_y)
    ];
  },
  generateSideWallUV: function(geometry, vertices, indexA, indexB, indexC, indexD) {
    const a_x = vertices[indexA * 3];
    const a_y = vertices[indexA * 3 + 1];
    const a_z = vertices[indexA * 3 + 2];
    const b_x = vertices[indexB * 3];
    const b_y = vertices[indexB * 3 + 1];
    const b_z = vertices[indexB * 3 + 2];
    const c_x = vertices[indexC * 3];
    const c_y = vertices[indexC * 3 + 1];
    const c_z = vertices[indexC * 3 + 2];
    const d_x = vertices[indexD * 3];
    const d_y = vertices[indexD * 3 + 1];
    const d_z = vertices[indexD * 3 + 2];
    if (Math.abs(a_y - b_y) < Math.abs(a_x - b_x)) {
      return [
        new Vector2(a_x, 1 - a_z),
        new Vector2(b_x, 1 - b_z),
        new Vector2(c_x, 1 - c_z),
        new Vector2(d_x, 1 - d_z)
      ];
    } else {
      return [
        new Vector2(a_y, 1 - a_z),
        new Vector2(b_y, 1 - b_z),
        new Vector2(c_y, 1 - c_z),
        new Vector2(d_y, 1 - d_z)
      ];
    }
  }
};
function toJSON$1(shapes, options, data) {
  data.shapes = [];
  if (Array.isArray(shapes)) {
    for (let i = 0, l = shapes.length; i < l; i++) {
      const shape = shapes[i];
      data.shapes.push(shape.uuid);
    }
  } else {
    data.shapes.push(shapes.uuid);
  }
  if (options.extrudePath !== void 0)
    data.options.extrudePath = options.extrudePath.toJSON();
  return data;
}
var ShapeGeometry = class extends BufferGeometry {
  constructor(shapes = new Shape([new Vector2(0, 0.5), new Vector2(-0.5, -0.5), new Vector2(0.5, -0.5)]), curveSegments = 12) {
    super();
    this.type = "ShapeGeometry";
    this.parameters = {
      shapes,
      curveSegments
    };
    const indices = [];
    const vertices = [];
    const normals = [];
    const uvs = [];
    let groupStart = 0;
    let groupCount = 0;
    if (Array.isArray(shapes) === false) {
      addShape(shapes);
    } else {
      for (let i = 0; i < shapes.length; i++) {
        addShape(shapes[i]);
        this.addGroup(groupStart, groupCount, i);
        groupStart += groupCount;
        groupCount = 0;
      }
    }
    this.setIndex(indices);
    this.setAttribute("position", new Float32BufferAttribute(vertices, 3));
    this.setAttribute("normal", new Float32BufferAttribute(normals, 3));
    this.setAttribute("uv", new Float32BufferAttribute(uvs, 2));
    function addShape(shape) {
      const indexOffset = vertices.length / 3;
      const points = shape.extractPoints(curveSegments);
      let shapeVertices = points.shape;
      const shapeHoles = points.holes;
      if (ShapeUtils.isClockWise(shapeVertices) === false) {
        shapeVertices = shapeVertices.reverse();
      }
      for (let i = 0, l = shapeHoles.length; i < l; i++) {
        const shapeHole = shapeHoles[i];
        if (ShapeUtils.isClockWise(shapeHole) === true) {
          shapeHoles[i] = shapeHole.reverse();
        }
      }
      const faces = ShapeUtils.triangulateShape(shapeVertices, shapeHoles);
      for (let i = 0, l = shapeHoles.length; i < l; i++) {
        const shapeHole = shapeHoles[i];
        shapeVertices = shapeVertices.concat(shapeHole);
      }
      for (let i = 0, l = shapeVertices.length; i < l; i++) {
        const vertex2 = shapeVertices[i];
        vertices.push(vertex2.x, vertex2.y, 0);
        normals.push(0, 0, 1);
        uvs.push(vertex2.x, vertex2.y);
      }
      for (let i = 0, l = faces.length; i < l; i++) {
        const face = faces[i];
        const a = face[0] + indexOffset;
        const b = face[1] + indexOffset;
        const c = face[2] + indexOffset;
        indices.push(a, b, c);
        groupCount += 3;
      }
    }
  }
  toJSON() {
    const data = super.toJSON();
    const shapes = this.parameters.shapes;
    return toJSON(shapes, data);
  }
  static fromJSON(data, shapes) {
    const geometryShapes = [];
    for (let j = 0, jl = data.shapes.length; j < jl; j++) {
      const shape = shapes[data.shapes[j]];
      geometryShapes.push(shape);
    }
    return new ShapeGeometry(geometryShapes, data.curveSegments);
  }
};
function toJSON(shapes, data) {
  data.shapes = [];
  if (Array.isArray(shapes)) {
    for (let i = 0, l = shapes.length; i < l; i++) {
      const shape = shapes[i];
      data.shapes.push(shape.uuid);
    }
  } else {
    data.shapes.push(shapes.uuid);
  }
  return data;
}
var ShadowMaterial = class extends Material {
  constructor(parameters) {
    super();
    this.type = "ShadowMaterial";
    this.color = new Color(0);
    this.transparent = true;
    this.setValues(parameters);
  }
  copy(source) {
    super.copy(source);
    this.color.copy(source.color);
    return this;
  }
};
ShadowMaterial.prototype.isShadowMaterial = true;
var RawShaderMaterial = class extends ShaderMaterial {
  constructor(parameters) {
    super(parameters);
    this.type = "RawShaderMaterial";
  }
};
RawShaderMaterial.prototype.isRawShaderMaterial = true;
var MeshStandardMaterial = class extends Material {
  constructor(parameters) {
    super();
    this.defines = { "STANDARD": "" };
    this.type = "MeshStandardMaterial";
    this.color = new Color(16777215);
    this.roughness = 1;
    this.metalness = 0;
    this.map = null;
    this.lightMap = null;
    this.lightMapIntensity = 1;
    this.aoMap = null;
    this.aoMapIntensity = 1;
    this.emissive = new Color(0);
    this.emissiveIntensity = 1;
    this.emissiveMap = null;
    this.bumpMap = null;
    this.bumpScale = 1;
    this.normalMap = null;
    this.normalMapType = TangentSpaceNormalMap;
    this.normalScale = new Vector2(1, 1);
    this.displacementMap = null;
    this.displacementScale = 1;
    this.displacementBias = 0;
    this.roughnessMap = null;
    this.metalnessMap = null;
    this.alphaMap = null;
    this.envMap = null;
    this.envMapIntensity = 1;
    this.wireframe = false;
    this.wireframeLinewidth = 1;
    this.wireframeLinecap = "round";
    this.wireframeLinejoin = "round";
    this.flatShading = false;
    this.setValues(parameters);
  }
  copy(source) {
    super.copy(source);
    this.defines = { "STANDARD": "" };
    this.color.copy(source.color);
    this.roughness = source.roughness;
    this.metalness = source.metalness;
    this.map = source.map;
    this.lightMap = source.lightMap;
    this.lightMapIntensity = source.lightMapIntensity;
    this.aoMap = source.aoMap;
    this.aoMapIntensity = source.aoMapIntensity;
    this.emissive.copy(source.emissive);
    this.emissiveMap = source.emissiveMap;
    this.emissiveIntensity = source.emissiveIntensity;
    this.bumpMap = source.bumpMap;
    this.bumpScale = source.bumpScale;
    this.normalMap = source.normalMap;
    this.normalMapType = source.normalMapType;
    this.normalScale.copy(source.normalScale);
    this.displacementMap = source.displacementMap;
    this.displacementScale = source.displacementScale;
    this.displacementBias = source.displacementBias;
    this.roughnessMap = source.roughnessMap;
    this.metalnessMap = source.metalnessMap;
    this.alphaMap = source.alphaMap;
    this.envMap = source.envMap;
    this.envMapIntensity = source.envMapIntensity;
    this.wireframe = source.wireframe;
    this.wireframeLinewidth = source.wireframeLinewidth;
    this.wireframeLinecap = source.wireframeLinecap;
    this.wireframeLinejoin = source.wireframeLinejoin;
    this.flatShading = source.flatShading;
    return this;
  }
};
MeshStandardMaterial.prototype.isMeshStandardMaterial = true;
var MeshPhysicalMaterial = class extends MeshStandardMaterial {
  constructor(parameters) {
    super();
    this.defines = {
      "STANDARD": "",
      "PHYSICAL": ""
    };
    this.type = "MeshPhysicalMaterial";
    this.clearcoatMap = null;
    this.clearcoatRoughness = 0;
    this.clearcoatRoughnessMap = null;
    this.clearcoatNormalScale = new Vector2(1, 1);
    this.clearcoatNormalMap = null;
    this.ior = 1.5;
    Object.defineProperty(this, "reflectivity", {
      get: function() {
        return clamp(2.5 * (this.ior - 1) / (this.ior + 1), 0, 1);
      },
      set: function(reflectivity) {
        this.ior = (1 + 0.4 * reflectivity) / (1 - 0.4 * reflectivity);
      }
    });
    this.sheenColor = new Color(0);
    this.sheenColorMap = null;
    this.sheenRoughness = 1;
    this.sheenRoughnessMap = null;
    this.transmissionMap = null;
    this.thickness = 0;
    this.thicknessMap = null;
    this.attenuationDistance = 0;
    this.attenuationColor = new Color(1, 1, 1);
    this.specularIntensity = 1;
    this.specularIntensityMap = null;
    this.specularColor = new Color(1, 1, 1);
    this.specularColorMap = null;
    this._sheen = 0;
    this._clearcoat = 0;
    this._transmission = 0;
    this.setValues(parameters);
  }
  get sheen() {
    return this._sheen;
  }
  set sheen(value) {
    if (this._sheen > 0 !== value > 0) {
      this.version++;
    }
    this._sheen = value;
  }
  get clearcoat() {
    return this._clearcoat;
  }
  set clearcoat(value) {
    if (this._clearcoat > 0 !== value > 0) {
      this.version++;
    }
    this._clearcoat = value;
  }
  get transmission() {
    return this._transmission;
  }
  set transmission(value) {
    if (this._transmission > 0 !== value > 0) {
      this.version++;
    }
    this._transmission = value;
  }
  copy(source) {
    super.copy(source);
    this.defines = {
      "STANDARD": "",
      "PHYSICAL": ""
    };
    this.clearcoat = source.clearcoat;
    this.clearcoatMap = source.clearcoatMap;
    this.clearcoatRoughness = source.clearcoatRoughness;
    this.clearcoatRoughnessMap = source.clearcoatRoughnessMap;
    this.clearcoatNormalMap = source.clearcoatNormalMap;
    this.clearcoatNormalScale.copy(source.clearcoatNormalScale);
    this.ior = source.ior;
    this.sheen = source.sheen;
    this.sheenColor.copy(source.sheenColor);
    this.sheenColorMap = source.sheenColorMap;
    this.sheenRoughness = source.sheenRoughness;
    this.sheenRoughnessMap = source.sheenRoughnessMap;
    this.transmission = source.transmission;
    this.transmissionMap = source.transmissionMap;
    this.thickness = source.thickness;
    this.thicknessMap = source.thicknessMap;
    this.attenuationDistance = source.attenuationDistance;
    this.attenuationColor.copy(source.attenuationColor);
    this.specularIntensity = source.specularIntensity;
    this.specularIntensityMap = source.specularIntensityMap;
    this.specularColor.copy(source.specularColor);
    this.specularColorMap = source.specularColorMap;
    return this;
  }
};
MeshPhysicalMaterial.prototype.isMeshPhysicalMaterial = true;
var MeshPhongMaterial = class extends Material {
  constructor(parameters) {
    super();
    this.type = "MeshPhongMaterial";
    this.color = new Color(16777215);
    this.specular = new Color(1118481);
    this.shininess = 30;
    this.map = null;
    this.lightMap = null;
    this.lightMapIntensity = 1;
    this.aoMap = null;
    this.aoMapIntensity = 1;
    this.emissive = new Color(0);
    this.emissiveIntensity = 1;
    this.emissiveMap = null;
    this.bumpMap = null;
    this.bumpScale = 1;
    this.normalMap = null;
    this.normalMapType = TangentSpaceNormalMap;
    this.normalScale = new Vector2(1, 1);
    this.displacementMap = null;
    this.displacementScale = 1;
    this.displacementBias = 0;
    this.specularMap = null;
    this.alphaMap = null;
    this.envMap = null;
    this.combine = MultiplyOperation;
    this.reflectivity = 1;
    this.refractionRatio = 0.98;
    this.wireframe = false;
    this.wireframeLinewidth = 1;
    this.wireframeLinecap = "round";
    this.wireframeLinejoin = "round";
    this.flatShading = false;
    this.setValues(parameters);
  }
  copy(source) {
    super.copy(source);
    this.color.copy(source.color);
    this.specular.copy(source.specular);
    this.shininess = source.shininess;
    this.map = source.map;
    this.lightMap = source.lightMap;
    this.lightMapIntensity = source.lightMapIntensity;
    this.aoMap = source.aoMap;
    this.aoMapIntensity = source.aoMapIntensity;
    this.emissive.copy(source.emissive);
    this.emissiveMap = source.emissiveMap;
    this.emissiveIntensity = source.emissiveIntensity;
    this.bumpMap = source.bumpMap;
    this.bumpScale = source.bumpScale;
    this.normalMap = source.normalMap;
    this.normalMapType = source.normalMapType;
    this.normalScale.copy(source.normalScale);
    this.displacementMap = source.displacementMap;
    this.displacementScale = source.displacementScale;
    this.displacementBias = source.displacementBias;
    this.specularMap = source.specularMap;
    this.alphaMap = source.alphaMap;
    this.envMap = source.envMap;
    this.combine = source.combine;
    this.reflectivity = source.reflectivity;
    this.refractionRatio = source.refractionRatio;
    this.wireframe = source.wireframe;
    this.wireframeLinewidth = source.wireframeLinewidth;
    this.wireframeLinecap = source.wireframeLinecap;
    this.wireframeLinejoin = source.wireframeLinejoin;
    this.flatShading = source.flatShading;
    return this;
  }
};
MeshPhongMaterial.prototype.isMeshPhongMaterial = true;
var MeshToonMaterial = class extends Material {
  constructor(parameters) {
    super();
    this.defines = { "TOON": "" };
    this.type = "MeshToonMaterial";
    this.color = new Color(16777215);
    this.map = null;
    this.gradientMap = null;
    this.lightMap = null;
    this.lightMapIntensity = 1;
    this.aoMap = null;
    this.aoMapIntensity = 1;
    this.emissive = new Color(0);
    this.emissiveIntensity = 1;
    this.emissiveMap = null;
    this.bumpMap = null;
    this.bumpScale = 1;
    this.normalMap = null;
    this.normalMapType = TangentSpaceNormalMap;
    this.normalScale = new Vector2(1, 1);
    this.displacementMap = null;
    this.displacementScale = 1;
    this.displacementBias = 0;
    this.alphaMap = null;
    this.wireframe = false;
    this.wireframeLinewidth = 1;
    this.wireframeLinecap = "round";
    this.wireframeLinejoin = "round";
    this.setValues(parameters);
  }
  copy(source) {
    super.copy(source);
    this.color.copy(source.color);
    this.map = source.map;
    this.gradientMap = source.gradientMap;
    this.lightMap = source.lightMap;
    this.lightMapIntensity = source.lightMapIntensity;
    this.aoMap = source.aoMap;
    this.aoMapIntensity = source.aoMapIntensity;
    this.emissive.copy(source.emissive);
    this.emissiveMap = source.emissiveMap;
    this.emissiveIntensity = source.emissiveIntensity;
    this.bumpMap = source.bumpMap;
    this.bumpScale = source.bumpScale;
    this.normalMap = source.normalMap;
    this.normalMapType = source.normalMapType;
    this.normalScale.copy(source.normalScale);
    this.displacementMap = source.displacementMap;
    this.displacementScale = source.displacementScale;
    this.displacementBias = source.displacementBias;
    this.alphaMap = source.alphaMap;
    this.wireframe = source.wireframe;
    this.wireframeLinewidth = source.wireframeLinewidth;
    this.wireframeLinecap = source.wireframeLinecap;
    this.wireframeLinejoin = source.wireframeLinejoin;
    return this;
  }
};
MeshToonMaterial.prototype.isMeshToonMaterial = true;
var MeshNormalMaterial = class extends Material {
  constructor(parameters) {
    super();
    this.type = "MeshNormalMaterial";
    this.bumpMap = null;
    this.bumpScale = 1;
    this.normalMap = null;
    this.normalMapType = TangentSpaceNormalMap;
    this.normalScale = new Vector2(1, 1);
    this.displacementMap = null;
    this.displacementScale = 1;
    this.displacementBias = 0;
    this.wireframe = false;
    this.wireframeLinewidth = 1;
    this.fog = false;
    this.flatShading = false;
    this.setValues(parameters);
  }
  copy(source) {
    super.copy(source);
    this.bumpMap = source.bumpMap;
    this.bumpScale = source.bumpScale;
    this.normalMap = source.normalMap;
    this.normalMapType = source.normalMapType;
    this.normalScale.copy(source.normalScale);
    this.displacementMap = source.displacementMap;
    this.displacementScale = source.displacementScale;
    this.displacementBias = source.displacementBias;
    this.wireframe = source.wireframe;
    this.wireframeLinewidth = source.wireframeLinewidth;
    this.flatShading = source.flatShading;
    return this;
  }
};
MeshNormalMaterial.prototype.isMeshNormalMaterial = true;
var MeshLambertMaterial = class extends Material {
  constructor(parameters) {
    super();
    this.type = "MeshLambertMaterial";
    this.color = new Color(16777215);
    this.map = null;
    this.lightMap = null;
    this.lightMapIntensity = 1;
    this.aoMap = null;
    this.aoMapIntensity = 1;
    this.emissive = new Color(0);
    this.emissiveIntensity = 1;
    this.emissiveMap = null;
    this.specularMap = null;
    this.alphaMap = null;
    this.envMap = null;
    this.combine = MultiplyOperation;
    this.reflectivity = 1;
    this.refractionRatio = 0.98;
    this.wireframe = false;
    this.wireframeLinewidth = 1;
    this.wireframeLinecap = "round";
    this.wireframeLinejoin = "round";
    this.setValues(parameters);
  }
  copy(source) {
    super.copy(source);
    this.color.copy(source.color);
    this.map = source.map;
    this.lightMap = source.lightMap;
    this.lightMapIntensity = source.lightMapIntensity;
    this.aoMap = source.aoMap;
    this.aoMapIntensity = source.aoMapIntensity;
    this.emissive.copy(source.emissive);
    this.emissiveMap = source.emissiveMap;
    this.emissiveIntensity = source.emissiveIntensity;
    this.specularMap = source.specularMap;
    this.alphaMap = source.alphaMap;
    this.envMap = source.envMap;
    this.combine = source.combine;
    this.reflectivity = source.reflectivity;
    this.refractionRatio = source.refractionRatio;
    this.wireframe = source.wireframe;
    this.wireframeLinewidth = source.wireframeLinewidth;
    this.wireframeLinecap = source.wireframeLinecap;
    this.wireframeLinejoin = source.wireframeLinejoin;
    return this;
  }
};
MeshLambertMaterial.prototype.isMeshLambertMaterial = true;
var MeshMatcapMaterial = class extends Material {
  constructor(parameters) {
    super();
    this.defines = { "MATCAP": "" };
    this.type = "MeshMatcapMaterial";
    this.color = new Color(16777215);
    this.matcap = null;
    this.map = null;
    this.bumpMap = null;
    this.bumpScale = 1;
    this.normalMap = null;
    this.normalMapType = TangentSpaceNormalMap;
    this.normalScale = new Vector2(1, 1);
    this.displacementMap = null;
    this.displacementScale = 1;
    this.displacementBias = 0;
    this.alphaMap = null;
    this.flatShading = false;
    this.setValues(parameters);
  }
  copy(source) {
    super.copy(source);
    this.defines = { "MATCAP": "" };
    this.color.copy(source.color);
    this.matcap = source.matcap;
    this.map = source.map;
    this.bumpMap = source.bumpMap;
    this.bumpScale = source.bumpScale;
    this.normalMap = source.normalMap;
    this.normalMapType = source.normalMapType;
    this.normalScale.copy(source.normalScale);
    this.displacementMap = source.displacementMap;
    this.displacementScale = source.displacementScale;
    this.displacementBias = source.displacementBias;
    this.alphaMap = source.alphaMap;
    this.flatShading = source.flatShading;
    return this;
  }
};
MeshMatcapMaterial.prototype.isMeshMatcapMaterial = true;
var LineDashedMaterial = class extends LineBasicMaterial {
  constructor(parameters) {
    super();
    this.type = "LineDashedMaterial";
    this.scale = 1;
    this.dashSize = 3;
    this.gapSize = 1;
    this.setValues(parameters);
  }
  copy(source) {
    super.copy(source);
    this.scale = source.scale;
    this.dashSize = source.dashSize;
    this.gapSize = source.gapSize;
    return this;
  }
};
LineDashedMaterial.prototype.isLineDashedMaterial = true;
var materialLib = {
  ShadowMaterial,
  SpriteMaterial,
  RawShaderMaterial,
  ShaderMaterial,
  PointsMaterial,
  MeshPhysicalMaterial,
  MeshStandardMaterial,
  MeshPhongMaterial,
  MeshToonMaterial,
  MeshNormalMaterial,
  MeshLambertMaterial,
  MeshDepthMaterial,
  MeshDistanceMaterial,
  MeshBasicMaterial,
  MeshMatcapMaterial,
  LineDashedMaterial,
  LineBasicMaterial,
  Material
};
Material.fromType = function(type) {
  return new materialLib[type]();
};
var AnimationUtils = {
  arraySlice: function(array, from, to) {
    if (AnimationUtils.isTypedArray(array)) {
      return new array.constructor(array.subarray(from, to !== void 0 ? to : array.length));
    }
    return array.slice(from, to);
  },
  convertArray: function(array, type, forceClone) {
    if (!array || !forceClone && array.constructor === type)
      return array;
    if (typeof type.BYTES_PER_ELEMENT === "number") {
      return new type(array);
    }
    return Array.prototype.slice.call(array);
  },
  isTypedArray: function(object) {
    return ArrayBuffer.isView(object) && !(object instanceof DataView);
  },
  getKeyframeOrder: function(times) {
    function compareTime(i, j) {
      return times[i] - times[j];
    }
    const n = times.length;
    const result = new Array(n);
    for (let i = 0; i !== n; ++i)
      result[i] = i;
    result.sort(compareTime);
    return result;
  },
  sortedArray: function(values, stride, order) {
    const nValues = values.length;
    const result = new values.constructor(nValues);
    for (let i = 0, dstOffset = 0; dstOffset !== nValues; ++i) {
      const srcOffset = order[i] * stride;
      for (let j = 0; j !== stride; ++j) {
        result[dstOffset++] = values[srcOffset + j];
      }
    }
    return result;
  },
  flattenJSON: function(jsonKeys, times, values, valuePropertyName) {
    let i = 1, key = jsonKeys[0];
    while (key !== void 0 && key[valuePropertyName] === void 0) {
      key = jsonKeys[i++];
    }
    if (key === void 0)
      return;
    let value = key[valuePropertyName];
    if (value === void 0)
      return;
    if (Array.isArray(value)) {
      do {
        value = key[valuePropertyName];
        if (value !== void 0) {
          times.push(key.time);
          values.push.apply(values, value);
        }
        key = jsonKeys[i++];
      } while (key !== void 0);
    } else if (value.toArray !== void 0) {
      do {
        value = key[valuePropertyName];
        if (value !== void 0) {
          times.push(key.time);
          value.toArray(values, values.length);
        }
        key = jsonKeys[i++];
      } while (key !== void 0);
    } else {
      do {
        value = key[valuePropertyName];
        if (value !== void 0) {
          times.push(key.time);
          values.push(value);
        }
        key = jsonKeys[i++];
      } while (key !== void 0);
    }
  },
  subclip: function(sourceClip, name, startFrame, endFrame, fps = 30) {
    const clip = sourceClip.clone();
    clip.name = name;
    const tracks = [];
    for (let i = 0; i < clip.tracks.length; ++i) {
      const track = clip.tracks[i];
      const valueSize = track.getValueSize();
      const times = [];
      const values = [];
      for (let j = 0; j < track.times.length; ++j) {
        const frame = track.times[j] * fps;
        if (frame < startFrame || frame >= endFrame)
          continue;
        times.push(track.times[j]);
        for (let k = 0; k < valueSize; ++k) {
          values.push(track.values[j * valueSize + k]);
        }
      }
      if (times.length === 0)
        continue;
      track.times = AnimationUtils.convertArray(times, track.times.constructor);
      track.values = AnimationUtils.convertArray(values, track.values.constructor);
      tracks.push(track);
    }
    clip.tracks = tracks;
    let minStartTime = Infinity;
    for (let i = 0; i < clip.tracks.length; ++i) {
      if (minStartTime > clip.tracks[i].times[0]) {
        minStartTime = clip.tracks[i].times[0];
      }
    }
    for (let i = 0; i < clip.tracks.length; ++i) {
      clip.tracks[i].shift(-1 * minStartTime);
    }
    clip.resetDuration();
    return clip;
  },
  makeClipAdditive: function(targetClip, referenceFrame = 0, referenceClip = targetClip, fps = 30) {
    if (fps <= 0)
      fps = 30;
    const numTracks = referenceClip.tracks.length;
    const referenceTime = referenceFrame / fps;
    for (let i = 0; i < numTracks; ++i) {
      const referenceTrack = referenceClip.tracks[i];
      const referenceTrackType = referenceTrack.ValueTypeName;
      if (referenceTrackType === "bool" || referenceTrackType === "string")
        continue;
      const targetTrack = targetClip.tracks.find(function(track) {
        return track.name === referenceTrack.name && track.ValueTypeName === referenceTrackType;
      });
      if (targetTrack === void 0)
        continue;
      let referenceOffset = 0;
      const referenceValueSize = referenceTrack.getValueSize();
      if (referenceTrack.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline) {
        referenceOffset = referenceValueSize / 3;
      }
      let targetOffset = 0;
      const targetValueSize = targetTrack.getValueSize();
      if (targetTrack.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline) {
        targetOffset = targetValueSize / 3;
      }
      const lastIndex = referenceTrack.times.length - 1;
      let referenceValue;
      if (referenceTime <= referenceTrack.times[0]) {
        const startIndex = referenceOffset;
        const endIndex = referenceValueSize - referenceOffset;
        referenceValue = AnimationUtils.arraySlice(referenceTrack.values, startIndex, endIndex);
      } else if (referenceTime >= referenceTrack.times[lastIndex]) {
        const startIndex = lastIndex * referenceValueSize + referenceOffset;
        const endIndex = startIndex + referenceValueSize - referenceOffset;
        referenceValue = AnimationUtils.arraySlice(referenceTrack.values, startIndex, endIndex);
      } else {
        const interpolant = referenceTrack.createInterpolant();
        const startIndex = referenceOffset;
        const endIndex = referenceValueSize - referenceOffset;
        interpolant.evaluate(referenceTime);
        referenceValue = AnimationUtils.arraySlice(interpolant.resultBuffer, startIndex, endIndex);
      }
      if (referenceTrackType === "quaternion") {
        const referenceQuat = new Quaternion().fromArray(referenceValue).normalize().conjugate();
        referenceQuat.toArray(referenceValue);
      }
      const numTimes = targetTrack.times.length;
      for (let j = 0; j < numTimes; ++j) {
        const valueStart = j * targetValueSize + targetOffset;
        if (referenceTrackType === "quaternion") {
          Quaternion.multiplyQuaternionsFlat(targetTrack.values, valueStart, referenceValue, 0, targetTrack.values, valueStart);
        } else {
          const valueEnd = targetValueSize - targetOffset * 2;
          for (let k = 0; k < valueEnd; ++k) {
            targetTrack.values[valueStart + k] -= referenceValue[k];
          }
        }
      }
    }
    targetClip.blendMode = AdditiveAnimationBlendMode;
    return targetClip;
  }
};
var Interpolant = class {
  constructor(parameterPositions, sampleValues, sampleSize, resultBuffer) {
    this.parameterPositions = parameterPositions;
    this._cachedIndex = 0;
    this.resultBuffer = resultBuffer !== void 0 ? resultBuffer : new sampleValues.constructor(sampleSize);
    this.sampleValues = sampleValues;
    this.valueSize = sampleSize;
    this.settings = null;
    this.DefaultSettings_ = {};
  }
  evaluate(t) {
    const pp = this.parameterPositions;
    let i1 = this._cachedIndex, t1 = pp[i1], t0 = pp[i1 - 1];
    validate_interval: {
      seek: {
        let right;
        linear_scan: {
          forward_scan:
            if (!(t < t1)) {
              for (let giveUpAt = i1 + 2; ; ) {
                if (t1 === void 0) {
                  if (t < t0)
                    break forward_scan;
                  i1 = pp.length;
                  this._cachedIndex = i1;
                  return this.afterEnd_(i1 - 1, t, t0);
                }
                if (i1 === giveUpAt)
                  break;
                t0 = t1;
                t1 = pp[++i1];
                if (t < t1) {
                  break seek;
                }
              }
              right = pp.length;
              break linear_scan;
            }
          if (!(t >= t0)) {
            const t1global = pp[1];
            if (t < t1global) {
              i1 = 2;
              t0 = t1global;
            }
            for (let giveUpAt = i1 - 2; ; ) {
              if (t0 === void 0) {
                this._cachedIndex = 0;
                return this.beforeStart_(0, t, t1);
              }
              if (i1 === giveUpAt)
                break;
              t1 = t0;
              t0 = pp[--i1 - 1];
              if (t >= t0) {
                break seek;
              }
            }
            right = i1;
            i1 = 0;
            break linear_scan;
          }
          break validate_interval;
        }
        while (i1 < right) {
          const mid = i1 + right >>> 1;
          if (t < pp[mid]) {
            right = mid;
          } else {
            i1 = mid + 1;
          }
        }
        t1 = pp[i1];
        t0 = pp[i1 - 1];
        if (t0 === void 0) {
          this._cachedIndex = 0;
          return this.beforeStart_(0, t, t1);
        }
        if (t1 === void 0) {
          i1 = pp.length;
          this._cachedIndex = i1;
          return this.afterEnd_(i1 - 1, t0, t);
        }
      }
      this._cachedIndex = i1;
      this.intervalChanged_(i1, t0, t1);
    }
    return this.interpolate_(i1, t0, t, t1);
  }
  getSettings_() {
    return this.settings || this.DefaultSettings_;
  }
  copySampleValue_(index) {
    const result = this.resultBuffer, values = this.sampleValues, stride = this.valueSize, offset = index * stride;
    for (let i = 0; i !== stride; ++i) {
      result[i] = values[offset + i];
    }
    return result;
  }
  interpolate_() {
    throw new Error("call to abstract method");
  }
  intervalChanged_() {
  }
};
Interpolant.prototype.beforeStart_ = Interpolant.prototype.copySampleValue_;
Interpolant.prototype.afterEnd_ = Interpolant.prototype.copySampleValue_;
var CubicInterpolant = class extends Interpolant {
  constructor(parameterPositions, sampleValues, sampleSize, resultBuffer) {
    super(parameterPositions, sampleValues, sampleSize, resultBuffer);
    this._weightPrev = -0;
    this._offsetPrev = -0;
    this._weightNext = -0;
    this._offsetNext = -0;
    this.DefaultSettings_ = {
      endingStart: ZeroCurvatureEnding,
      endingEnd: ZeroCurvatureEnding
    };
  }
  intervalChanged_(i1, t0, t1) {
    const pp = this.parameterPositions;
    let iPrev = i1 - 2, iNext = i1 + 1, tPrev = pp[iPrev], tNext = pp[iNext];
    if (tPrev === void 0) {
      switch (this.getSettings_().endingStart) {
        case ZeroSlopeEnding:
          iPrev = i1;
          tPrev = 2 * t0 - t1;
          break;
        case WrapAroundEnding:
          iPrev = pp.length - 2;
          tPrev = t0 + pp[iPrev] - pp[iPrev + 1];
          break;
        default:
          iPrev = i1;
          tPrev = t1;
      }
    }
    if (tNext === void 0) {
      switch (this.getSettings_().endingEnd) {
        case ZeroSlopeEnding:
          iNext = i1;
          tNext = 2 * t1 - t0;
          break;
        case WrapAroundEnding:
          iNext = 1;
          tNext = t1 + pp[1] - pp[0];
          break;
        default:
          iNext = i1 - 1;
          tNext = t0;
      }
    }
    const halfDt = (t1 - t0) * 0.5, stride = this.valueSize;
    this._weightPrev = halfDt / (t0 - tPrev);
    this._weightNext = halfDt / (tNext - t1);
    this._offsetPrev = iPrev * stride;
    this._offsetNext = iNext * stride;
  }
  interpolate_(i1, t0, t, t1) {
    const result = this.resultBuffer, values = this.sampleValues, stride = this.valueSize, o1 = i1 * stride, o0 = o1 - stride, oP = this._offsetPrev, oN = this._offsetNext, wP = this._weightPrev, wN = this._weightNext, p = (t - t0) / (t1 - t0), pp = p * p, ppp = pp * p;
    const sP = -wP * ppp + 2 * wP * pp - wP * p;
    const s0 = (1 + wP) * ppp + (-1.5 - 2 * wP) * pp + (-0.5 + wP) * p + 1;
    const s1 = (-1 - wN) * ppp + (1.5 + wN) * pp + 0.5 * p;
    const sN = wN * ppp - wN * pp;
    for (let i = 0; i !== stride; ++i) {
      result[i] = sP * values[oP + i] + s0 * values[o0 + i] + s1 * values[o1 + i] + sN * values[oN + i];
    }
    return result;
  }
};
var LinearInterpolant = class extends Interpolant {
  constructor(parameterPositions, sampleValues, sampleSize, resultBuffer) {
    super(parameterPositions, sampleValues, sampleSize, resultBuffer);
  }
  interpolate_(i1, t0, t, t1) {
    const result = this.resultBuffer, values = this.sampleValues, stride = this.valueSize, offset1 = i1 * stride, offset0 = offset1 - stride, weight1 = (t - t0) / (t1 - t0), weight0 = 1 - weight1;
    for (let i = 0; i !== stride; ++i) {
      result[i] = values[offset0 + i] * weight0 + values[offset1 + i] * weight1;
    }
    return result;
  }
};
var DiscreteInterpolant = class extends Interpolant {
  constructor(parameterPositions, sampleValues, sampleSize, resultBuffer) {
    super(parameterPositions, sampleValues, sampleSize, resultBuffer);
  }
  interpolate_(i1) {
    return this.copySampleValue_(i1 - 1);
  }
};
var KeyframeTrack = class {
  constructor(name, times, values, interpolation) {
    if (name === void 0)
      throw new Error("THREE.KeyframeTrack: track name is undefined");
    if (times === void 0 || times.length === 0)
      throw new Error("THREE.KeyframeTrack: no keyframes in track named " + name);
    this.name = name;
    this.times = AnimationUtils.convertArray(times, this.TimeBufferType);
    this.values = AnimationUtils.convertArray(values, this.ValueBufferType);
    this.setInterpolation(interpolation || this.DefaultInterpolation);
  }
  static toJSON(track) {
    const trackType = track.constructor;
    let json;
    if (trackType.toJSON !== this.toJSON) {
      json = trackType.toJSON(track);
    } else {
      json = {
        "name": track.name,
        "times": AnimationUtils.convertArray(track.times, Array),
        "values": AnimationUtils.convertArray(track.values, Array)
      };
      const interpolation = track.getInterpolation();
      if (interpolation !== track.DefaultInterpolation) {
        json.interpolation = interpolation;
      }
    }
    json.type = track.ValueTypeName;
    return json;
  }
  InterpolantFactoryMethodDiscrete(result) {
    return new DiscreteInterpolant(this.times, this.values, this.getValueSize(), result);
  }
  InterpolantFactoryMethodLinear(result) {
    return new LinearInterpolant(this.times, this.values, this.getValueSize(), result);
  }
  InterpolantFactoryMethodSmooth(result) {
    return new CubicInterpolant(this.times, this.values, this.getValueSize(), result);
  }
  setInterpolation(interpolation) {
    let factoryMethod;
    switch (interpolation) {
      case InterpolateDiscrete:
        factoryMethod = this.InterpolantFactoryMethodDiscrete;
        break;
      case InterpolateLinear:
        factoryMethod = this.InterpolantFactoryMethodLinear;
        break;
      case InterpolateSmooth:
        factoryMethod = this.InterpolantFactoryMethodSmooth;
        break;
    }
    if (factoryMethod === void 0) {
      const message = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
      if (this.createInterpolant === void 0) {
        if (interpolation !== this.DefaultInterpolation) {
          this.setInterpolation(this.DefaultInterpolation);
        } else {
          throw new Error(message);
        }
      }
      console.warn("THREE.KeyframeTrack:", message);
      return this;
    }
    this.createInterpolant = factoryMethod;
    return this;
  }
  getInterpolation() {
    switch (this.createInterpolant) {
      case this.InterpolantFactoryMethodDiscrete:
        return InterpolateDiscrete;
      case this.InterpolantFactoryMethodLinear:
        return InterpolateLinear;
      case this.InterpolantFactoryMethodSmooth:
        return InterpolateSmooth;
    }
  }
  getValueSize() {
    return this.values.length / this.times.length;
  }
  shift(timeOffset) {
    if (timeOffset !== 0) {
      const times = this.times;
      for (let i = 0, n = times.length; i !== n; ++i) {
        times[i] += timeOffset;
      }
    }
    return this;
  }
  scale(timeScale) {
    if (timeScale !== 1) {
      const times = this.times;
      for (let i = 0, n = times.length; i !== n; ++i) {
        times[i] *= timeScale;
      }
    }
    return this;
  }
  trim(startTime, endTime) {
    const times = this.times, nKeys = times.length;
    let from = 0, to = nKeys - 1;
    while (from !== nKeys && times[from] < startTime) {
      ++from;
    }
    while (to !== -1 && times[to] > endTime) {
      --to;
    }
    ++to;
    if (from !== 0 || to !== nKeys) {
      if (from >= to) {
        to = Math.max(to, 1);
        from = to - 1;
      }
      const stride = this.getValueSize();
      this.times = AnimationUtils.arraySlice(times, from, to);
      this.values = AnimationUtils.arraySlice(this.values, from * stride, to * stride);
    }
    return this;
  }
  validate() {
    let valid = true;
    const valueSize = this.getValueSize();
    if (valueSize - Math.floor(valueSize) !== 0) {
      console.error("THREE.KeyframeTrack: Invalid value size in track.", this);
      valid = false;
    }
    const times = this.times, values = this.values, nKeys = times.length;
    if (nKeys === 0) {
      console.error("THREE.KeyframeTrack: Track is empty.", this);
      valid = false;
    }
    let prevTime = null;
    for (let i = 0; i !== nKeys; i++) {
      const currTime = times[i];
      if (typeof currTime === "number" && isNaN(currTime)) {
        console.error("THREE.KeyframeTrack: Time is not a valid number.", this, i, currTime);
        valid = false;
        break;
      }
      if (prevTime !== null && prevTime > currTime) {
        console.error("THREE.KeyframeTrack: Out of order keys.", this, i, currTime, prevTime);
        valid = false;
        break;
      }
      prevTime = currTime;
    }
    if (values !== void 0) {
      if (AnimationUtils.isTypedArray(values)) {
        for (let i = 0, n = values.length; i !== n; ++i) {
          const value = values[i];
          if (isNaN(value)) {
            console.error("THREE.KeyframeTrack: Value is not a valid number.", this, i, value);
            valid = false;
            break;
          }
        }
      }
    }
    return valid;
  }
  optimize() {
    const times = AnimationUtils.arraySlice(this.times), values = AnimationUtils.arraySlice(this.values), stride = this.getValueSize(), smoothInterpolation = this.getInterpolation() === InterpolateSmooth, lastIndex = times.length - 1;
    let writeIndex = 1;
    for (let i = 1; i < lastIndex; ++i) {
      let keep = false;
      const time = times[i];
      const timeNext = times[i + 1];
      if (time !== timeNext && (i !== 1 || time !== times[0])) {
        if (!smoothInterpolation) {
          const offset = i * stride, offsetP = offset - stride, offsetN = offset + stride;
          for (let j = 0; j !== stride; ++j) {
            const value = values[offset + j];
            if (value !== values[offsetP + j] || value !== values[offsetN + j]) {
              keep = true;
              break;
            }
          }
        } else {
          keep = true;
        }
      }
      if (keep) {
        if (i !== writeIndex) {
          times[writeIndex] = times[i];
          const readOffset = i * stride, writeOffset = writeIndex * stride;
          for (let j = 0; j !== stride; ++j) {
            values[writeOffset + j] = values[readOffset + j];
          }
        }
        ++writeIndex;
      }
    }
    if (lastIndex > 0) {
      times[writeIndex] = times[lastIndex];
      for (let readOffset = lastIndex * stride, writeOffset = writeIndex * stride, j = 0; j !== stride; ++j) {
        values[writeOffset + j] = values[readOffset + j];
      }
      ++writeIndex;
    }
    if (writeIndex !== times.length) {
      this.times = AnimationUtils.arraySlice(times, 0, writeIndex);
      this.values = AnimationUtils.arraySlice(values, 0, writeIndex * stride);
    } else {
      this.times = times;
      this.values = values;
    }
    return this;
  }
  clone() {
    const times = AnimationUtils.arraySlice(this.times, 0);
    const values = AnimationUtils.arraySlice(this.values, 0);
    const TypedKeyframeTrack = this.constructor;
    const track = new TypedKeyframeTrack(this.name, times, values);
    track.createInterpolant = this.createInterpolant;
    return track;
  }
};
KeyframeTrack.prototype.TimeBufferType = Float32Array;
KeyframeTrack.prototype.ValueBufferType = Float32Array;
KeyframeTrack.prototype.DefaultInterpolation = InterpolateLinear;
var BooleanKeyframeTrack = class extends KeyframeTrack {
};
BooleanKeyframeTrack.prototype.ValueTypeName = "bool";
BooleanKeyframeTrack.prototype.ValueBufferType = Array;
BooleanKeyframeTrack.prototype.DefaultInterpolation = InterpolateDiscrete;
BooleanKeyframeTrack.prototype.InterpolantFactoryMethodLinear = void 0;
BooleanKeyframeTrack.prototype.InterpolantFactoryMethodSmooth = void 0;
var ColorKeyframeTrack = class extends KeyframeTrack {
};
ColorKeyframeTrack.prototype.ValueTypeName = "color";
var NumberKeyframeTrack = class extends KeyframeTrack {
};
NumberKeyframeTrack.prototype.ValueTypeName = "number";
var QuaternionLinearInterpolant = class extends Interpolant {
  constructor(parameterPositions, sampleValues, sampleSize, resultBuffer) {
    super(parameterPositions, sampleValues, sampleSize, resultBuffer);
  }
  interpolate_(i1, t0, t, t1) {
    const result = this.resultBuffer, values = this.sampleValues, stride = this.valueSize, alpha = (t - t0) / (t1 - t0);
    let offset = i1 * stride;
    for (let end = offset + stride; offset !== end; offset += 4) {
      Quaternion.slerpFlat(result, 0, values, offset - stride, values, offset, alpha);
    }
    return result;
  }
};
var QuaternionKeyframeTrack = class extends KeyframeTrack {
  InterpolantFactoryMethodLinear(result) {
    return new QuaternionLinearInterpolant(this.times, this.values, this.getValueSize(), result);
  }
};
QuaternionKeyframeTrack.prototype.ValueTypeName = "quaternion";
QuaternionKeyframeTrack.prototype.DefaultInterpolation = InterpolateLinear;
QuaternionKeyframeTrack.prototype.InterpolantFactoryMethodSmooth = void 0;
var StringKeyframeTrack = class extends KeyframeTrack {
};
StringKeyframeTrack.prototype.ValueTypeName = "string";
StringKeyframeTrack.prototype.ValueBufferType = Array;
StringKeyframeTrack.prototype.DefaultInterpolation = InterpolateDiscrete;
StringKeyframeTrack.prototype.InterpolantFactoryMethodLinear = void 0;
StringKeyframeTrack.prototype.InterpolantFactoryMethodSmooth = void 0;
var VectorKeyframeTrack = class extends KeyframeTrack {
};
VectorKeyframeTrack.prototype.ValueTypeName = "vector";
var AnimationClip = class {
  constructor(name, duration = -1, tracks, blendMode = NormalAnimationBlendMode) {
    this.name = name;
    this.tracks = tracks;
    this.duration = duration;
    this.blendMode = blendMode;
    this.uuid = generateUUID();
    if (this.duration < 0) {
      this.resetDuration();
    }
  }
  static parse(json) {
    const tracks = [], jsonTracks = json.tracks, frameTime = 1 / (json.fps || 1);
    for (let i = 0, n = jsonTracks.length; i !== n; ++i) {
      tracks.push(parseKeyframeTrack(jsonTracks[i]).scale(frameTime));
    }
    const clip = new this(json.name, json.duration, tracks, json.blendMode);
    clip.uuid = json.uuid;
    return clip;
  }
  static toJSON(clip) {
    const tracks = [], clipTracks = clip.tracks;
    const json = {
      "name": clip.name,
      "duration": clip.duration,
      "tracks": tracks,
      "uuid": clip.uuid,
      "blendMode": clip.blendMode
    };
    for (let i = 0, n = clipTracks.length; i !== n; ++i) {
      tracks.push(KeyframeTrack.toJSON(clipTracks[i]));
    }
    return json;
  }
  static CreateFromMorphTargetSequence(name, morphTargetSequence, fps, noLoop) {
    const numMorphTargets = morphTargetSequence.length;
    const tracks = [];
    for (let i = 0; i < numMorphTargets; i++) {
      let times = [];
      let values = [];
      times.push((i + numMorphTargets - 1) % numMorphTargets, i, (i + 1) % numMorphTargets);
      values.push(0, 1, 0);
      const order = AnimationUtils.getKeyframeOrder(times);
      times = AnimationUtils.sortedArray(times, 1, order);
      values = AnimationUtils.sortedArray(values, 1, order);
      if (!noLoop && times[0] === 0) {
        times.push(numMorphTargets);
        values.push(values[0]);
      }
      tracks.push(new NumberKeyframeTrack(".morphTargetInfluences[" + morphTargetSequence[i].name + "]", times, values).scale(1 / fps));
    }
    return new this(name, -1, tracks);
  }
  static findByName(objectOrClipArray, name) {
    let clipArray = objectOrClipArray;
    if (!Array.isArray(objectOrClipArray)) {
      const o = objectOrClipArray;
      clipArray = o.geometry && o.geometry.animations || o.animations;
    }
    for (let i = 0; i < clipArray.length; i++) {
      if (clipArray[i].name === name) {
        return clipArray[i];
      }
    }
    return null;
  }
  static CreateClipsFromMorphTargetSequences(morphTargets, fps, noLoop) {
    const animationToMorphTargets = {};
    const pattern = /^([\w-]*?)([\d]+)$/;
    for (let i = 0, il = morphTargets.length; i < il; i++) {
      const morphTarget = morphTargets[i];
      const parts = morphTarget.name.match(pattern);
      if (parts && parts.length > 1) {
        const name = parts[1];
        let animationMorphTargets = animationToMorphTargets[name];
        if (!animationMorphTargets) {
          animationToMorphTargets[name] = animationMorphTargets = [];
        }
        animationMorphTargets.push(morphTarget);
      }
    }
    const clips = [];
    for (const name in animationToMorphTargets) {
      clips.push(this.CreateFromMorphTargetSequence(name, animationToMorphTargets[name], fps, noLoop));
    }
    return clips;
  }
  static parseAnimation(animation, bones) {
    if (!animation) {
      console.error("THREE.AnimationClip: No animation in JSONLoader data.");
      return null;
    }
    const addNonemptyTrack = function(trackType, trackName, animationKeys, propertyName, destTracks) {
      if (animationKeys.length !== 0) {
        const times = [];
        const values = [];
        AnimationUtils.flattenJSON(animationKeys, times, values, propertyName);
        if (times.length !== 0) {
          destTracks.push(new trackType(trackName, times, values));
        }
      }
    };
    const tracks = [];
    const clipName = animation.name || "default";
    const fps = animation.fps || 30;
    const blendMode = animation.blendMode;
    let duration = animation.length || -1;
    const hierarchyTracks = animation.hierarchy || [];
    for (let h = 0; h < hierarchyTracks.length; h++) {
      const animationKeys = hierarchyTracks[h].keys;
      if (!animationKeys || animationKeys.length === 0)
        continue;
      if (animationKeys[0].morphTargets) {
        const morphTargetNames = {};
        let k;
        for (k = 0; k < animationKeys.length; k++) {
          if (animationKeys[k].morphTargets) {
            for (let m = 0; m < animationKeys[k].morphTargets.length; m++) {
              morphTargetNames[animationKeys[k].morphTargets[m]] = -1;
            }
          }
        }
        for (const morphTargetName in morphTargetNames) {
          const times = [];
          const values = [];
          for (let m = 0; m !== animationKeys[k].morphTargets.length; ++m) {
            const animationKey = animationKeys[k];
            times.push(animationKey.time);
            values.push(animationKey.morphTarget === morphTargetName ? 1 : 0);
          }
          tracks.push(new NumberKeyframeTrack(".morphTargetInfluence[" + morphTargetName + "]", times, values));
        }
        duration = morphTargetNames.length * fps;
      } else {
        const boneName = ".bones[" + bones[h].name + "]";
        addNonemptyTrack(VectorKeyframeTrack, boneName + ".position", animationKeys, "pos", tracks);
        addNonemptyTrack(QuaternionKeyframeTrack, boneName + ".quaternion", animationKeys, "rot", tracks);
        addNonemptyTrack(VectorKeyframeTrack, boneName + ".scale", animationKeys, "scl", tracks);
      }
    }
    if (tracks.length === 0) {
      return null;
    }
    const clip = new this(clipName, duration, tracks, blendMode);
    return clip;
  }
  resetDuration() {
    const tracks = this.tracks;
    let duration = 0;
    for (let i = 0, n = tracks.length; i !== n; ++i) {
      const track = this.tracks[i];
      duration = Math.max(duration, track.times[track.times.length - 1]);
    }
    this.duration = duration;
    return this;
  }
  trim() {
    for (let i = 0; i < this.tracks.length; i++) {
      this.tracks[i].trim(0, this.duration);
    }
    return this;
  }
  validate() {
    let valid = true;
    for (let i = 0; i < this.tracks.length; i++) {
      valid = valid && this.tracks[i].validate();
    }
    return valid;
  }
  optimize() {
    for (let i = 0; i < this.tracks.length; i++) {
      this.tracks[i].optimize();
    }
    return this;
  }
  clone() {
    const tracks = [];
    for (let i = 0; i < this.tracks.length; i++) {
      tracks.push(this.tracks[i].clone());
    }
    return new this.constructor(this.name, this.duration, tracks, this.blendMode);
  }
  toJSON() {
    return this.constructor.toJSON(this);
  }
};
function getTrackTypeForValueTypeName(typeName) {
  switch (typeName.toLowerCase()) {
    case "scalar":
    case "double":
    case "float":
    case "number":
    case "integer":
      return NumberKeyframeTrack;
    case "vector":
    case "vector2":
    case "vector3":
    case "vector4":
      return VectorKeyframeTrack;
    case "color":
      return ColorKeyframeTrack;
    case "quaternion":
      return QuaternionKeyframeTrack;
    case "bool":
    case "boolean":
      return BooleanKeyframeTrack;
    case "string":
      return StringKeyframeTrack;
  }
  throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + typeName);
}
function parseKeyframeTrack(json) {
  if (json.type === void 0) {
    throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");
  }
  const trackType = getTrackTypeForValueTypeName(json.type);
  if (json.times === void 0) {
    const times = [], values = [];
    AnimationUtils.flattenJSON(json.keys, times, values, "value");
    json.times = times;
    json.values = values;
  }
  if (trackType.parse !== void 0) {
    return trackType.parse(json);
  } else {
    return new trackType(json.name, json.times, json.values, json.interpolation);
  }
}
var Cache = {
  enabled: false,
  files: {},
  add: function(key, file) {
    if (this.enabled === false)
      return;
    this.files[key] = file;
  },
  get: function(key) {
    if (this.enabled === false)
      return;
    return this.files[key];
  },
  remove: function(key) {
    delete this.files[key];
  },
  clear: function() {
    this.files = {};
  }
};
var LoadingManager = class {
  constructor(onLoad, onProgress, onError) {
    const scope = this;
    let isLoading = false;
    let itemsLoaded = 0;
    let itemsTotal = 0;
    let urlModifier = void 0;
    const handlers = [];
    this.onStart = void 0;
    this.onLoad = onLoad;
    this.onProgress = onProgress;
    this.onError = onError;
    this.itemStart = function(url) {
      itemsTotal++;
      if (isLoading === false) {
        if (scope.onStart !== void 0) {
          scope.onStart(url, itemsLoaded, itemsTotal);
        }
      }
      isLoading = true;
    };
    this.itemEnd = function(url) {
      itemsLoaded++;
      if (scope.onProgress !== void 0) {
        scope.onProgress(url, itemsLoaded, itemsTotal);
      }
      if (itemsLoaded === itemsTotal) {
        isLoading = false;
        if (scope.onLoad !== void 0) {
          scope.onLoad();
        }
      }
    };
    this.itemError = function(url) {
      if (scope.onError !== void 0) {
        scope.onError(url);
      }
    };
    this.resolveURL = function(url) {
      if (urlModifier) {
        return urlModifier(url);
      }
      return url;
    };
    this.setURLModifier = function(transform) {
      urlModifier = transform;
      return this;
    };
    this.addHandler = function(regex, loader) {
      handlers.push(regex, loader);
      return this;
    };
    this.removeHandler = function(regex) {
      const index = handlers.indexOf(regex);
      if (index !== -1) {
        handlers.splice(index, 2);
      }
      return this;
    };
    this.getHandler = function(file) {
      for (let i = 0, l = handlers.length; i < l; i += 2) {
        const regex = handlers[i];
        const loader = handlers[i + 1];
        if (regex.global)
          regex.lastIndex = 0;
        if (regex.test(file)) {
          return loader;
        }
      }
      return null;
    };
  }
};
var DefaultLoadingManager = new LoadingManager();
var Loader = class {
  constructor(manager) {
    this.manager = manager !== void 0 ? manager : DefaultLoadingManager;
    this.crossOrigin = "anonymous";
    this.withCredentials = false;
    this.path = "";
    this.resourcePath = "";
    this.requestHeader = {};
  }
  load() {
  }
  loadAsync(url, onProgress) {
    const scope = this;
    return new Promise(function(resolve, reject) {
      scope.load(url, resolve, onProgress, reject);
    });
  }
  parse() {
  }
  setCrossOrigin(crossOrigin) {
    this.crossOrigin = crossOrigin;
    return this;
  }
  setWithCredentials(value) {
    this.withCredentials = value;
    return this;
  }
  setPath(path) {
    this.path = path;
    return this;
  }
  setResourcePath(resourcePath) {
    this.resourcePath = resourcePath;
    return this;
  }
  setRequestHeader(requestHeader) {
    this.requestHeader = requestHeader;
    return this;
  }
};
var loading = {};
var FileLoader = class extends Loader {
  constructor(manager) {
    super(manager);
  }
  load(url, onLoad, onProgress, onError) {
    if (url === void 0)
      url = "";
    if (this.path !== void 0)
      url = this.path + url;
    url = this.manager.resolveURL(url);
    const cached = Cache.get(url);
    if (cached !== void 0) {
      this.manager.itemStart(url);
      setTimeout(() => {
        if (onLoad)
          onLoad(cached);
        this.manager.itemEnd(url);
      }, 0);
      return cached;
    }
    if (loading[url] !== void 0) {
      loading[url].push({
        onLoad,
        onProgress,
        onError
      });
      return;
    }
    loading[url] = [];
    loading[url].push({
      onLoad,
      onProgress,
      onError
    });
    const req = new Request(url, {
      headers: new Headers(this.requestHeader),
      credentials: this.withCredentials ? "include" : "same-origin"
    });
    const mimeType = this.mimeType;
    const responseType = this.responseType;
    fetch(req).then((response) => {
      if (response.status === 200 || response.status === 0) {
        if (response.status === 0) {
          console.warn("THREE.FileLoader: HTTP Status 0 received.");
        }
        if (typeof ReadableStream === "undefined" || response.body === void 0 || response.body.getReader === void 0) {
          return response;
        }
        const callbacks = loading[url];
        const reader = response.body.getReader();
        const contentLength = response.headers.get("Content-Length");
        const total = contentLength ? parseInt(contentLength) : 0;
        const lengthComputable = total !== 0;
        let loaded = 0;
        const stream = new ReadableStream({
          start(controller) {
            readData();
            function readData() {
              reader.read().then(({ done, value }) => {
                if (done) {
                  controller.close();
                } else {
                  loaded += value.byteLength;
                  const event = new ProgressEvent("progress", { lengthComputable, loaded, total });
                  for (let i = 0, il = callbacks.length; i < il; i++) {
                    const callback = callbacks[i];
                    if (callback.onProgress)
                      callback.onProgress(event);
                  }
                  controller.enqueue(value);
                  readData();
                }
              });
            }
          }
        });
        return new Response(stream);
      } else {
        throw Error(`fetch for "${response.url}" responded with ${response.status}: ${response.statusText}`);
      }
    }).then((response) => {
      switch (responseType) {
        case "arraybuffer":
          return response.arrayBuffer();
        case "blob":
          return response.blob();
        case "document":
          return response.text().then((text) => {
            const parser = new DOMParser();
            return parser.parseFromString(text, mimeType);
          });
        case "json":
          return response.json();
        default:
          if (mimeType === void 0) {
            return response.text();
          } else {
            const re = /charset="?([^;"\s]*)"?/i;
            const exec = re.exec(mimeType);
            const label = exec && exec[1] ? exec[1].toLowerCase() : void 0;
            const decoder = new TextDecoder(label);
            return response.arrayBuffer().then((ab) => decoder.decode(ab));
          }
      }
    }).then((data) => {
      Cache.add(url, data);
      const callbacks = loading[url];
      delete loading[url];
      for (let i = 0, il = callbacks.length; i < il; i++) {
        const callback = callbacks[i];
        if (callback.onLoad)
          callback.onLoad(data);
      }
    }).catch((err) => {
      const callbacks = loading[url];
      if (callbacks === void 0) {
        this.manager.itemError(url);
        throw err;
      }
      delete loading[url];
      for (let i = 0, il = callbacks.length; i < il; i++) {
        const callback = callbacks[i];
        if (callback.onError)
          callback.onError(err);
      }
      this.manager.itemError(url);
    }).finally(() => {
      this.manager.itemEnd(url);
    });
    this.manager.itemStart(url);
  }
  setResponseType(value) {
    this.responseType = value;
    return this;
  }
  setMimeType(value) {
    this.mimeType = value;
    return this;
  }
};
var ImageLoader = class extends Loader {
  constructor(manager) {
    super(manager);
  }
  load(url, onLoad, onProgress, onError) {
    if (this.path !== void 0)
      url = this.path + url;
    url = this.manager.resolveURL(url);
    const scope = this;
    const cached = Cache.get(url);
    if (cached !== void 0) {
      scope.manager.itemStart(url);
      setTimeout(function() {
        if (onLoad)
          onLoad(cached);
        scope.manager.itemEnd(url);
      }, 0);
      return cached;
    }
    const image = createElementNS("img");
    function onImageLoad() {
      removeEventListeners();
      Cache.add(url, this);
      if (onLoad)
        onLoad(this);
      scope.manager.itemEnd(url);
    }
    function onImageError(event) {
      removeEventListeners();
      if (onError)
        onError(event);
      scope.manager.itemError(url);
      scope.manager.itemEnd(url);
    }
    function removeEventListeners() {
      image.removeEventListener("load", onImageLoad, false);
      image.removeEventListener("error", onImageError, false);
    }
    image.addEventListener("load", onImageLoad, false);
    image.addEventListener("error", onImageError, false);
    if (url.slice(0, 5) !== "data:") {
      if (this.crossOrigin !== void 0)
        image.crossOrigin = this.crossOrigin;
    }
    scope.manager.itemStart(url);
    image.src = url;
    return image;
  }
};
var CubeTextureLoader = class extends Loader {
  constructor(manager) {
    super(manager);
  }
  load(urls, onLoad, onProgress, onError) {
    const texture = new CubeTexture();
    const loader = new ImageLoader(this.manager);
    loader.setCrossOrigin(this.crossOrigin);
    loader.setPath(this.path);
    let loaded = 0;
    function loadTexture(i) {
      loader.load(urls[i], function(image) {
        texture.images[i] = image;
        loaded++;
        if (loaded === 6) {
          texture.needsUpdate = true;
          if (onLoad)
            onLoad(texture);
        }
      }, void 0, onError);
    }
    for (let i = 0; i < urls.length; ++i) {
      loadTexture(i);
    }
    return texture;
  }
};
var TextureLoader = class extends Loader {
  constructor(manager) {
    super(manager);
  }
  load(url, onLoad, onProgress, onError) {
    const texture = new Texture();
    const loader = new ImageLoader(this.manager);
    loader.setCrossOrigin(this.crossOrigin);
    loader.setPath(this.path);
    loader.load(url, function(image) {
      texture.image = image;
      texture.needsUpdate = true;
      if (onLoad !== void 0) {
        onLoad(texture);
      }
    }, onProgress, onError);
    return texture;
  }
};
var Light = class extends Object3D {
  constructor(color, intensity = 1) {
    super();
    this.type = "Light";
    this.color = new Color(color);
    this.intensity = intensity;
  }
  dispose() {
  }
  copy(source) {
    super.copy(source);
    this.color.copy(source.color);
    this.intensity = source.intensity;
    return this;
  }
  toJSON(meta) {
    const data = super.toJSON(meta);
    data.object.color = this.color.getHex();
    data.object.intensity = this.intensity;
    if (this.groundColor !== void 0)
      data.object.groundColor = this.groundColor.getHex();
    if (this.distance !== void 0)
      data.object.distance = this.distance;
    if (this.angle !== void 0)
      data.object.angle = this.angle;
    if (this.decay !== void 0)
      data.object.decay = this.decay;
    if (this.penumbra !== void 0)
      data.object.penumbra = this.penumbra;
    if (this.shadow !== void 0)
      data.object.shadow = this.shadow.toJSON();
    return data;
  }
};
Light.prototype.isLight = true;
var HemisphereLight = class extends Light {
  constructor(skyColor, groundColor, intensity) {
    super(skyColor, intensity);
    this.type = "HemisphereLight";
    this.position.copy(Object3D.DefaultUp);
    this.updateMatrix();
    this.groundColor = new Color(groundColor);
  }
  copy(source) {
    Light.prototype.copy.call(this, source);
    this.groundColor.copy(source.groundColor);
    return this;
  }
};
HemisphereLight.prototype.isHemisphereLight = true;
var _projScreenMatrix$1 = /* @__PURE__ */ new Matrix4();
var _lightPositionWorld$1 = /* @__PURE__ */ new Vector3();
var _lookTarget$1 = /* @__PURE__ */ new Vector3();
var LightShadow = class {
  constructor(camera) {
    this.camera = camera;
    this.bias = 0;
    this.normalBias = 0;
    this.radius = 1;
    this.blurSamples = 8;
    this.mapSize = new Vector2(512, 512);
    this.map = null;
    this.mapPass = null;
    this.matrix = new Matrix4();
    this.autoUpdate = true;
    this.needsUpdate = false;
    this._frustum = new Frustum();
    this._frameExtents = new Vector2(1, 1);
    this._viewportCount = 1;
    this._viewports = [
      new Vector4(0, 0, 1, 1)
    ];
  }
  getViewportCount() {
    return this._viewportCount;
  }
  getFrustum() {
    return this._frustum;
  }
  updateMatrices(light) {
    const shadowCamera = this.camera;
    const shadowMatrix = this.matrix;
    _lightPositionWorld$1.setFromMatrixPosition(light.matrixWorld);
    shadowCamera.position.copy(_lightPositionWorld$1);
    _lookTarget$1.setFromMatrixPosition(light.target.matrixWorld);
    shadowCamera.lookAt(_lookTarget$1);
    shadowCamera.updateMatrixWorld();
    _projScreenMatrix$1.multiplyMatrices(shadowCamera.projectionMatrix, shadowCamera.matrixWorldInverse);
    this._frustum.setFromProjectionMatrix(_projScreenMatrix$1);
    shadowMatrix.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1);
    shadowMatrix.multiply(shadowCamera.projectionMatrix);
    shadowMatrix.multiply(shadowCamera.matrixWorldInverse);
  }
  getViewport(viewportIndex) {
    return this._viewports[viewportIndex];
  }
  getFrameExtents() {
    return this._frameExtents;
  }
  dispose() {
    if (this.map) {
      this.map.dispose();
    }
    if (this.mapPass) {
      this.mapPass.dispose();
    }
  }
  copy(source) {
    this.camera = source.camera.clone();
    this.bias = source.bias;
    this.radius = source.radius;
    this.mapSize.copy(source.mapSize);
    return this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  toJSON() {
    const object = {};
    if (this.bias !== 0)
      object.bias = this.bias;
    if (this.normalBias !== 0)
      object.normalBias = this.normalBias;
    if (this.radius !== 1)
      object.radius = this.radius;
    if (this.mapSize.x !== 512 || this.mapSize.y !== 512)
      object.mapSize = this.mapSize.toArray();
    object.camera = this.camera.toJSON(false).object;
    delete object.camera.matrix;
    return object;
  }
};
var SpotLightShadow = class extends LightShadow {
  constructor() {
    super(new PerspectiveCamera(50, 1, 0.5, 500));
    this.focus = 1;
  }
  updateMatrices(light) {
    const camera = this.camera;
    const fov2 = RAD2DEG * 2 * light.angle * this.focus;
    const aspect2 = this.mapSize.width / this.mapSize.height;
    const far = light.distance || camera.far;
    if (fov2 !== camera.fov || aspect2 !== camera.aspect || far !== camera.far) {
      camera.fov = fov2;
      camera.aspect = aspect2;
      camera.far = far;
      camera.updateProjectionMatrix();
    }
    super.updateMatrices(light);
  }
  copy(source) {
    super.copy(source);
    this.focus = source.focus;
    return this;
  }
};
SpotLightShadow.prototype.isSpotLightShadow = true;
var SpotLight = class extends Light {
  constructor(color, intensity, distance = 0, angle = Math.PI / 3, penumbra = 0, decay = 1) {
    super(color, intensity);
    this.type = "SpotLight";
    this.position.copy(Object3D.DefaultUp);
    this.updateMatrix();
    this.target = new Object3D();
    this.distance = distance;
    this.angle = angle;
    this.penumbra = penumbra;
    this.decay = decay;
    this.shadow = new SpotLightShadow();
  }
  get power() {
    return this.intensity * Math.PI;
  }
  set power(power) {
    this.intensity = power / Math.PI;
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(source) {
    super.copy(source);
    this.distance = source.distance;
    this.angle = source.angle;
    this.penumbra = source.penumbra;
    this.decay = source.decay;
    this.target = source.target.clone();
    this.shadow = source.shadow.clone();
    return this;
  }
};
SpotLight.prototype.isSpotLight = true;
var _projScreenMatrix = /* @__PURE__ */ new Matrix4();
var _lightPositionWorld = /* @__PURE__ */ new Vector3();
var _lookTarget = /* @__PURE__ */ new Vector3();
var PointLightShadow = class extends LightShadow {
  constructor() {
    super(new PerspectiveCamera(90, 1, 0.5, 500));
    this._frameExtents = new Vector2(4, 2);
    this._viewportCount = 6;
    this._viewports = [
      new Vector4(2, 1, 1, 1),
      new Vector4(0, 1, 1, 1),
      new Vector4(3, 1, 1, 1),
      new Vector4(1, 1, 1, 1),
      new Vector4(3, 0, 1, 1),
      new Vector4(1, 0, 1, 1)
    ];
    this._cubeDirections = [
      new Vector3(1, 0, 0),
      new Vector3(-1, 0, 0),
      new Vector3(0, 0, 1),
      new Vector3(0, 0, -1),
      new Vector3(0, 1, 0),
      new Vector3(0, -1, 0)
    ];
    this._cubeUps = [
      new Vector3(0, 1, 0),
      new Vector3(0, 1, 0),
      new Vector3(0, 1, 0),
      new Vector3(0, 1, 0),
      new Vector3(0, 0, 1),
      new Vector3(0, 0, -1)
    ];
  }
  updateMatrices(light, viewportIndex = 0) {
    const camera = this.camera;
    const shadowMatrix = this.matrix;
    const far = light.distance || camera.far;
    if (far !== camera.far) {
      camera.far = far;
      camera.updateProjectionMatrix();
    }
    _lightPositionWorld.setFromMatrixPosition(light.matrixWorld);
    camera.position.copy(_lightPositionWorld);
    _lookTarget.copy(camera.position);
    _lookTarget.add(this._cubeDirections[viewportIndex]);
    camera.up.copy(this._cubeUps[viewportIndex]);
    camera.lookAt(_lookTarget);
    camera.updateMatrixWorld();
    shadowMatrix.makeTranslation(-_lightPositionWorld.x, -_lightPositionWorld.y, -_lightPositionWorld.z);
    _projScreenMatrix.multiplyMatrices(camera.projectionMatrix, camera.matrixWorldInverse);
    this._frustum.setFromProjectionMatrix(_projScreenMatrix);
  }
};
PointLightShadow.prototype.isPointLightShadow = true;
var PointLight = class extends Light {
  constructor(color, intensity, distance = 0, decay = 1) {
    super(color, intensity);
    this.type = "PointLight";
    this.distance = distance;
    this.decay = decay;
    this.shadow = new PointLightShadow();
  }
  get power() {
    return this.intensity * 4 * Math.PI;
  }
  set power(power) {
    this.intensity = power / (4 * Math.PI);
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(source) {
    super.copy(source);
    this.distance = source.distance;
    this.decay = source.decay;
    this.shadow = source.shadow.clone();
    return this;
  }
};
PointLight.prototype.isPointLight = true;
var DirectionalLightShadow = class extends LightShadow {
  constructor() {
    super(new OrthographicCamera(-5, 5, 5, -5, 0.5, 500));
  }
};
DirectionalLightShadow.prototype.isDirectionalLightShadow = true;
var DirectionalLight = class extends Light {
  constructor(color, intensity) {
    super(color, intensity);
    this.type = "DirectionalLight";
    this.position.copy(Object3D.DefaultUp);
    this.updateMatrix();
    this.target = new Object3D();
    this.shadow = new DirectionalLightShadow();
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(source) {
    super.copy(source);
    this.target = source.target.clone();
    this.shadow = source.shadow.clone();
    return this;
  }
};
DirectionalLight.prototype.isDirectionalLight = true;
var AmbientLight = class extends Light {
  constructor(color, intensity) {
    super(color, intensity);
    this.type = "AmbientLight";
  }
};
AmbientLight.prototype.isAmbientLight = true;
var RectAreaLight = class extends Light {
  constructor(color, intensity, width = 10, height = 10) {
    super(color, intensity);
    this.type = "RectAreaLight";
    this.width = width;
    this.height = height;
  }
  get power() {
    return this.intensity * this.width * this.height * Math.PI;
  }
  set power(power) {
    this.intensity = power / (this.width * this.height * Math.PI);
  }
  copy(source) {
    super.copy(source);
    this.width = source.width;
    this.height = source.height;
    return this;
  }
  toJSON(meta) {
    const data = super.toJSON(meta);
    data.object.width = this.width;
    data.object.height = this.height;
    return data;
  }
};
RectAreaLight.prototype.isRectAreaLight = true;
var SphericalHarmonics3 = class {
  constructor() {
    this.coefficients = [];
    for (let i = 0; i < 9; i++) {
      this.coefficients.push(new Vector3());
    }
  }
  set(coefficients) {
    for (let i = 0; i < 9; i++) {
      this.coefficients[i].copy(coefficients[i]);
    }
    return this;
  }
  zero() {
    for (let i = 0; i < 9; i++) {
      this.coefficients[i].set(0, 0, 0);
    }
    return this;
  }
  getAt(normal, target) {
    const x = normal.x, y = normal.y, z = normal.z;
    const coeff = this.coefficients;
    target.copy(coeff[0]).multiplyScalar(0.282095);
    target.addScaledVector(coeff[1], 0.488603 * y);
    target.addScaledVector(coeff[2], 0.488603 * z);
    target.addScaledVector(coeff[3], 0.488603 * x);
    target.addScaledVector(coeff[4], 1.092548 * (x * y));
    target.addScaledVector(coeff[5], 1.092548 * (y * z));
    target.addScaledVector(coeff[6], 0.315392 * (3 * z * z - 1));
    target.addScaledVector(coeff[7], 1.092548 * (x * z));
    target.addScaledVector(coeff[8], 0.546274 * (x * x - y * y));
    return target;
  }
  getIrradianceAt(normal, target) {
    const x = normal.x, y = normal.y, z = normal.z;
    const coeff = this.coefficients;
    target.copy(coeff[0]).multiplyScalar(0.886227);
    target.addScaledVector(coeff[1], 2 * 0.511664 * y);
    target.addScaledVector(coeff[2], 2 * 0.511664 * z);
    target.addScaledVector(coeff[3], 2 * 0.511664 * x);
    target.addScaledVector(coeff[4], 2 * 0.429043 * x * y);
    target.addScaledVector(coeff[5], 2 * 0.429043 * y * z);
    target.addScaledVector(coeff[6], 0.743125 * z * z - 0.247708);
    target.addScaledVector(coeff[7], 2 * 0.429043 * x * z);
    target.addScaledVector(coeff[8], 0.429043 * (x * x - y * y));
    return target;
  }
  add(sh) {
    for (let i = 0; i < 9; i++) {
      this.coefficients[i].add(sh.coefficients[i]);
    }
    return this;
  }
  addScaledSH(sh, s) {
    for (let i = 0; i < 9; i++) {
      this.coefficients[i].addScaledVector(sh.coefficients[i], s);
    }
    return this;
  }
  scale(s) {
    for (let i = 0; i < 9; i++) {
      this.coefficients[i].multiplyScalar(s);
    }
    return this;
  }
  lerp(sh, alpha) {
    for (let i = 0; i < 9; i++) {
      this.coefficients[i].lerp(sh.coefficients[i], alpha);
    }
    return this;
  }
  equals(sh) {
    for (let i = 0; i < 9; i++) {
      if (!this.coefficients[i].equals(sh.coefficients[i])) {
        return false;
      }
    }
    return true;
  }
  copy(sh) {
    return this.set(sh.coefficients);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  fromArray(array, offset = 0) {
    const coefficients = this.coefficients;
    for (let i = 0; i < 9; i++) {
      coefficients[i].fromArray(array, offset + i * 3);
    }
    return this;
  }
  toArray(array = [], offset = 0) {
    const coefficients = this.coefficients;
    for (let i = 0; i < 9; i++) {
      coefficients[i].toArray(array, offset + i * 3);
    }
    return array;
  }
  static getBasisAt(normal, shBasis) {
    const x = normal.x, y = normal.y, z = normal.z;
    shBasis[0] = 0.282095;
    shBasis[1] = 0.488603 * y;
    shBasis[2] = 0.488603 * z;
    shBasis[3] = 0.488603 * x;
    shBasis[4] = 1.092548 * x * y;
    shBasis[5] = 1.092548 * y * z;
    shBasis[6] = 0.315392 * (3 * z * z - 1);
    shBasis[7] = 1.092548 * x * z;
    shBasis[8] = 0.546274 * (x * x - y * y);
  }
};
SphericalHarmonics3.prototype.isSphericalHarmonics3 = true;
var LightProbe = class extends Light {
  constructor(sh = new SphericalHarmonics3(), intensity = 1) {
    super(void 0, intensity);
    this.sh = sh;
  }
  copy(source) {
    super.copy(source);
    this.sh.copy(source.sh);
    return this;
  }
  fromJSON(json) {
    this.intensity = json.intensity;
    this.sh.fromArray(json.sh);
    return this;
  }
  toJSON(meta) {
    const data = super.toJSON(meta);
    data.object.sh = this.sh.toArray();
    return data;
  }
};
LightProbe.prototype.isLightProbe = true;
var LoaderUtils = class {
  static decodeText(array) {
    if (typeof TextDecoder !== "undefined") {
      return new TextDecoder().decode(array);
    }
    let s = "";
    for (let i = 0, il = array.length; i < il; i++) {
      s += String.fromCharCode(array[i]);
    }
    try {
      return decodeURIComponent(escape(s));
    } catch (e) {
      return s;
    }
  }
  static extractUrlBase(url) {
    const index = url.lastIndexOf("/");
    if (index === -1)
      return "./";
    return url.slice(0, index + 1);
  }
  static resolveURL(url, path) {
    if (typeof url !== "string" || url === "")
      return "";
    if (/^https?:\/\//i.test(path) && /^\//.test(url)) {
      path = path.replace(/(^https?:\/\/[^\/]+).*/i, "$1");
    }
    if (/^(https?:)?\/\//i.test(url))
      return url;
    if (/^data:.*,.*$/i.test(url))
      return url;
    if (/^blob:.*$/i.test(url))
      return url;
    return path + url;
  }
};
var InstancedBufferGeometry = class extends BufferGeometry {
  constructor() {
    super();
    this.type = "InstancedBufferGeometry";
    this.instanceCount = Infinity;
  }
  copy(source) {
    super.copy(source);
    this.instanceCount = source.instanceCount;
    return this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  toJSON() {
    const data = super.toJSON(this);
    data.instanceCount = this.instanceCount;
    data.isInstancedBufferGeometry = true;
    return data;
  }
};
InstancedBufferGeometry.prototype.isInstancedBufferGeometry = true;
var ImageBitmapLoader = class extends Loader {
  constructor(manager) {
    super(manager);
    if (typeof createImageBitmap === "undefined") {
      console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported.");
    }
    if (typeof fetch === "undefined") {
      console.warn("THREE.ImageBitmapLoader: fetch() not supported.");
    }
    this.options = { premultiplyAlpha: "none" };
  }
  setOptions(options) {
    this.options = options;
    return this;
  }
  load(url, onLoad, onProgress, onError) {
    if (url === void 0)
      url = "";
    if (this.path !== void 0)
      url = this.path + url;
    url = this.manager.resolveURL(url);
    const scope = this;
    const cached = Cache.get(url);
    if (cached !== void 0) {
      scope.manager.itemStart(url);
      setTimeout(function() {
        if (onLoad)
          onLoad(cached);
        scope.manager.itemEnd(url);
      }, 0);
      return cached;
    }
    const fetchOptions = {};
    fetchOptions.credentials = this.crossOrigin === "anonymous" ? "same-origin" : "include";
    fetchOptions.headers = this.requestHeader;
    fetch(url, fetchOptions).then(function(res) {
      return res.blob();
    }).then(function(blob) {
      return createImageBitmap(blob, Object.assign(scope.options, { colorSpaceConversion: "none" }));
    }).then(function(imageBitmap) {
      Cache.add(url, imageBitmap);
      if (onLoad)
        onLoad(imageBitmap);
      scope.manager.itemEnd(url);
    }).catch(function(e) {
      if (onError)
        onError(e);
      scope.manager.itemError(url);
      scope.manager.itemEnd(url);
    });
    scope.manager.itemStart(url);
  }
};
ImageBitmapLoader.prototype.isImageBitmapLoader = true;
var _context;
var AudioContext = {
  getContext: function() {
    if (_context === void 0) {
      _context = new (window.AudioContext || window.webkitAudioContext)();
    }
    return _context;
  },
  setContext: function(value) {
    _context = value;
  }
};
var AudioLoader = class extends Loader {
  constructor(manager) {
    super(manager);
  }
  load(url, onLoad, onProgress, onError) {
    const scope = this;
    const loader = new FileLoader(this.manager);
    loader.setResponseType("arraybuffer");
    loader.setPath(this.path);
    loader.setRequestHeader(this.requestHeader);
    loader.setWithCredentials(this.withCredentials);
    loader.load(url, function(buffer) {
      try {
        const bufferCopy = buffer.slice(0);
        const context = AudioContext.getContext();
        context.decodeAudioData(bufferCopy, function(audioBuffer) {
          onLoad(audioBuffer);
        });
      } catch (e) {
        if (onError) {
          onError(e);
        } else {
          console.error(e);
        }
        scope.manager.itemError(url);
      }
    }, onProgress, onError);
  }
};
var HemisphereLightProbe = class extends LightProbe {
  constructor(skyColor, groundColor, intensity = 1) {
    super(void 0, intensity);
    const color1 = new Color().set(skyColor);
    const color2 = new Color().set(groundColor);
    const sky = new Vector3(color1.r, color1.g, color1.b);
    const ground = new Vector3(color2.r, color2.g, color2.b);
    const c0 = Math.sqrt(Math.PI);
    const c1 = c0 * Math.sqrt(0.75);
    this.sh.coefficients[0].copy(sky).add(ground).multiplyScalar(c0);
    this.sh.coefficients[1].copy(sky).sub(ground).multiplyScalar(c1);
  }
};
HemisphereLightProbe.prototype.isHemisphereLightProbe = true;
var AmbientLightProbe = class extends LightProbe {
  constructor(color, intensity = 1) {
    super(void 0, intensity);
    const color1 = new Color().set(color);
    this.sh.coefficients[0].set(color1.r, color1.g, color1.b).multiplyScalar(2 * Math.sqrt(Math.PI));
  }
};
AmbientLightProbe.prototype.isAmbientLightProbe = true;
var Audio = class extends Object3D {
  constructor(listener) {
    super();
    this.type = "Audio";
    this.listener = listener;
    this.context = listener.context;
    this.gain = this.context.createGain();
    this.gain.connect(listener.getInput());
    this.autoplay = false;
    this.buffer = null;
    this.detune = 0;
    this.loop = false;
    this.loopStart = 0;
    this.loopEnd = 0;
    this.offset = 0;
    this.duration = void 0;
    this.playbackRate = 1;
    this.isPlaying = false;
    this.hasPlaybackControl = true;
    this.source = null;
    this.sourceType = "empty";
    this._startedAt = 0;
    this._progress = 0;
    this._connected = false;
    this.filters = [];
  }
  getOutput() {
    return this.gain;
  }
  setNodeSource(audioNode) {
    this.hasPlaybackControl = false;
    this.sourceType = "audioNode";
    this.source = audioNode;
    this.connect();
    return this;
  }
  setMediaElementSource(mediaElement) {
    this.hasPlaybackControl = false;
    this.sourceType = "mediaNode";
    this.source = this.context.createMediaElementSource(mediaElement);
    this.connect();
    return this;
  }
  setMediaStreamSource(mediaStream) {
    this.hasPlaybackControl = false;
    this.sourceType = "mediaStreamNode";
    this.source = this.context.createMediaStreamSource(mediaStream);
    this.connect();
    return this;
  }
  setBuffer(audioBuffer) {
    this.buffer = audioBuffer;
    this.sourceType = "buffer";
    if (this.autoplay)
      this.play();
    return this;
  }
  play(delay = 0) {
    if (this.isPlaying === true) {
      console.warn("THREE.Audio: Audio is already playing.");
      return;
    }
    if (this.hasPlaybackControl === false) {
      console.warn("THREE.Audio: this Audio has no playback control.");
      return;
    }
    this._startedAt = this.context.currentTime + delay;
    const source = this.context.createBufferSource();
    source.buffer = this.buffer;
    source.loop = this.loop;
    source.loopStart = this.loopStart;
    source.loopEnd = this.loopEnd;
    source.onended = this.onEnded.bind(this);
    source.start(this._startedAt, this._progress + this.offset, this.duration);
    this.isPlaying = true;
    this.source = source;
    this.setDetune(this.detune);
    this.setPlaybackRate(this.playbackRate);
    return this.connect();
  }
  pause() {
    if (this.hasPlaybackControl === false) {
      console.warn("THREE.Audio: this Audio has no playback control.");
      return;
    }
    if (this.isPlaying === true) {
      this._progress += Math.max(this.context.currentTime - this._startedAt, 0) * this.playbackRate;
      if (this.loop === true) {
        this._progress = this._progress % (this.duration || this.buffer.duration);
      }
      this.source.stop();
      this.source.onended = null;
      this.isPlaying = false;
    }
    return this;
  }
  stop() {
    if (this.hasPlaybackControl === false) {
      console.warn("THREE.Audio: this Audio has no playback control.");
      return;
    }
    this._progress = 0;
    this.source.stop();
    this.source.onended = null;
    this.isPlaying = false;
    return this;
  }
  connect() {
    if (this.filters.length > 0) {
      this.source.connect(this.filters[0]);
      for (let i = 1, l = this.filters.length; i < l; i++) {
        this.filters[i - 1].connect(this.filters[i]);
      }
      this.filters[this.filters.length - 1].connect(this.getOutput());
    } else {
      this.source.connect(this.getOutput());
    }
    this._connected = true;
    return this;
  }
  disconnect() {
    if (this.filters.length > 0) {
      this.source.disconnect(this.filters[0]);
      for (let i = 1, l = this.filters.length; i < l; i++) {
        this.filters[i - 1].disconnect(this.filters[i]);
      }
      this.filters[this.filters.length - 1].disconnect(this.getOutput());
    } else {
      this.source.disconnect(this.getOutput());
    }
    this._connected = false;
    return this;
  }
  getFilters() {
    return this.filters;
  }
  setFilters(value) {
    if (!value)
      value = [];
    if (this._connected === true) {
      this.disconnect();
      this.filters = value.slice();
      this.connect();
    } else {
      this.filters = value.slice();
    }
    return this;
  }
  setDetune(value) {
    this.detune = value;
    if (this.source.detune === void 0)
      return;
    if (this.isPlaying === true) {
      this.source.detune.setTargetAtTime(this.detune, this.context.currentTime, 0.01);
    }
    return this;
  }
  getDetune() {
    return this.detune;
  }
  getFilter() {
    return this.getFilters()[0];
  }
  setFilter(filter) {
    return this.setFilters(filter ? [filter] : []);
  }
  setPlaybackRate(value) {
    if (this.hasPlaybackControl === false) {
      console.warn("THREE.Audio: this Audio has no playback control.");
      return;
    }
    this.playbackRate = value;
    if (this.isPlaying === true) {
      this.source.playbackRate.setTargetAtTime(this.playbackRate, this.context.currentTime, 0.01);
    }
    return this;
  }
  getPlaybackRate() {
    return this.playbackRate;
  }
  onEnded() {
    this.isPlaying = false;
  }
  getLoop() {
    if (this.hasPlaybackControl === false) {
      console.warn("THREE.Audio: this Audio has no playback control.");
      return false;
    }
    return this.loop;
  }
  setLoop(value) {
    if (this.hasPlaybackControl === false) {
      console.warn("THREE.Audio: this Audio has no playback control.");
      return;
    }
    this.loop = value;
    if (this.isPlaying === true) {
      this.source.loop = this.loop;
    }
    return this;
  }
  setLoopStart(value) {
    this.loopStart = value;
    return this;
  }
  setLoopEnd(value) {
    this.loopEnd = value;
    return this;
  }
  getVolume() {
    return this.gain.gain.value;
  }
  setVolume(value) {
    this.gain.gain.setTargetAtTime(value, this.context.currentTime, 0.01);
    return this;
  }
};
var AudioAnalyser = class {
  constructor(audio, fftSize = 2048) {
    this.analyser = audio.context.createAnalyser();
    this.analyser.fftSize = fftSize;
    this.data = new Uint8Array(this.analyser.frequencyBinCount);
    audio.getOutput().connect(this.analyser);
  }
  getFrequencyData() {
    this.analyser.getByteFrequencyData(this.data);
    return this.data;
  }
  getAverageFrequency() {
    let value = 0;
    const data = this.getFrequencyData();
    for (let i = 0; i < data.length; i++) {
      value += data[i];
    }
    return value / data.length;
  }
};
var PropertyMixer = class {
  constructor(binding, typeName, valueSize) {
    this.binding = binding;
    this.valueSize = valueSize;
    let mixFunction, mixFunctionAdditive, setIdentity;
    switch (typeName) {
      case "quaternion":
        mixFunction = this._slerp;
        mixFunctionAdditive = this._slerpAdditive;
        setIdentity = this._setAdditiveIdentityQuaternion;
        this.buffer = new Float64Array(valueSize * 6);
        this._workIndex = 5;
        break;
      case "string":
      case "bool":
        mixFunction = this._select;
        mixFunctionAdditive = this._select;
        setIdentity = this._setAdditiveIdentityOther;
        this.buffer = new Array(valueSize * 5);
        break;
      default:
        mixFunction = this._lerp;
        mixFunctionAdditive = this._lerpAdditive;
        setIdentity = this._setAdditiveIdentityNumeric;
        this.buffer = new Float64Array(valueSize * 5);
    }
    this._mixBufferRegion = mixFunction;
    this._mixBufferRegionAdditive = mixFunctionAdditive;
    this._setIdentity = setIdentity;
    this._origIndex = 3;
    this._addIndex = 4;
    this.cumulativeWeight = 0;
    this.cumulativeWeightAdditive = 0;
    this.useCount = 0;
    this.referenceCount = 0;
  }
  accumulate(accuIndex, weight) {
    const buffer = this.buffer, stride = this.valueSize, offset = accuIndex * stride + stride;
    let currentWeight = this.cumulativeWeight;
    if (currentWeight === 0) {
      for (let i = 0; i !== stride; ++i) {
        buffer[offset + i] = buffer[i];
      }
      currentWeight = weight;
    } else {
      currentWeight += weight;
      const mix = weight / currentWeight;
      this._mixBufferRegion(buffer, offset, 0, mix, stride);
    }
    this.cumulativeWeight = currentWeight;
  }
  accumulateAdditive(weight) {
    const buffer = this.buffer, stride = this.valueSize, offset = stride * this._addIndex;
    if (this.cumulativeWeightAdditive === 0) {
      this._setIdentity();
    }
    this._mixBufferRegionAdditive(buffer, offset, 0, weight, stride);
    this.cumulativeWeightAdditive += weight;
  }
  apply(accuIndex) {
    const stride = this.valueSize, buffer = this.buffer, offset = accuIndex * stride + stride, weight = this.cumulativeWeight, weightAdditive = this.cumulativeWeightAdditive, binding = this.binding;
    this.cumulativeWeight = 0;
    this.cumulativeWeightAdditive = 0;
    if (weight < 1) {
      const originalValueOffset = stride * this._origIndex;
      this._mixBufferRegion(buffer, offset, originalValueOffset, 1 - weight, stride);
    }
    if (weightAdditive > 0) {
      this._mixBufferRegionAdditive(buffer, offset, this._addIndex * stride, 1, stride);
    }
    for (let i = stride, e = stride + stride; i !== e; ++i) {
      if (buffer[i] !== buffer[i + stride]) {
        binding.setValue(buffer, offset);
        break;
      }
    }
  }
  saveOriginalState() {
    const binding = this.binding;
    const buffer = this.buffer, stride = this.valueSize, originalValueOffset = stride * this._origIndex;
    binding.getValue(buffer, originalValueOffset);
    for (let i = stride, e = originalValueOffset; i !== e; ++i) {
      buffer[i] = buffer[originalValueOffset + i % stride];
    }
    this._setIdentity();
    this.cumulativeWeight = 0;
    this.cumulativeWeightAdditive = 0;
  }
  restoreOriginalState() {
    const originalValueOffset = this.valueSize * 3;
    this.binding.setValue(this.buffer, originalValueOffset);
  }
  _setAdditiveIdentityNumeric() {
    const startIndex = this._addIndex * this.valueSize;
    const endIndex = startIndex + this.valueSize;
    for (let i = startIndex; i < endIndex; i++) {
      this.buffer[i] = 0;
    }
  }
  _setAdditiveIdentityQuaternion() {
    this._setAdditiveIdentityNumeric();
    this.buffer[this._addIndex * this.valueSize + 3] = 1;
  }
  _setAdditiveIdentityOther() {
    const startIndex = this._origIndex * this.valueSize;
    const targetIndex = this._addIndex * this.valueSize;
    for (let i = 0; i < this.valueSize; i++) {
      this.buffer[targetIndex + i] = this.buffer[startIndex + i];
    }
  }
  _select(buffer, dstOffset, srcOffset, t, stride) {
    if (t >= 0.5) {
      for (let i = 0; i !== stride; ++i) {
        buffer[dstOffset + i] = buffer[srcOffset + i];
      }
    }
  }
  _slerp(buffer, dstOffset, srcOffset, t) {
    Quaternion.slerpFlat(buffer, dstOffset, buffer, dstOffset, buffer, srcOffset, t);
  }
  _slerpAdditive(buffer, dstOffset, srcOffset, t, stride) {
    const workOffset = this._workIndex * stride;
    Quaternion.multiplyQuaternionsFlat(buffer, workOffset, buffer, dstOffset, buffer, srcOffset);
    Quaternion.slerpFlat(buffer, dstOffset, buffer, dstOffset, buffer, workOffset, t);
  }
  _lerp(buffer, dstOffset, srcOffset, t, stride) {
    const s = 1 - t;
    for (let i = 0; i !== stride; ++i) {
      const j = dstOffset + i;
      buffer[j] = buffer[j] * s + buffer[srcOffset + i] * t;
    }
  }
  _lerpAdditive(buffer, dstOffset, srcOffset, t, stride) {
    for (let i = 0; i !== stride; ++i) {
      const j = dstOffset + i;
      buffer[j] = buffer[j] + buffer[srcOffset + i] * t;
    }
  }
};
var _RESERVED_CHARS_RE = "\\[\\]\\.:\\/";
var _reservedRe = new RegExp("[" + _RESERVED_CHARS_RE + "]", "g");
var _wordChar = "[^" + _RESERVED_CHARS_RE + "]";
var _wordCharOrDot = "[^" + _RESERVED_CHARS_RE.replace("\\.", "") + "]";
var _directoryRe = /((?:WC+[\/:])*)/.source.replace("WC", _wordChar);
var _nodeRe = /(WCOD+)?/.source.replace("WCOD", _wordCharOrDot);
var _objectRe = /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", _wordChar);
var _propertyRe = /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", _wordChar);
var _trackRe = new RegExp("^" + _directoryRe + _nodeRe + _objectRe + _propertyRe + "$");
var _supportedObjectNames = ["material", "materials", "bones"];
var Composite = class {
  constructor(targetGroup, path, optionalParsedPath) {
    const parsedPath = optionalParsedPath || PropertyBinding.parseTrackName(path);
    this._targetGroup = targetGroup;
    this._bindings = targetGroup.subscribe_(path, parsedPath);
  }
  getValue(array, offset) {
    this.bind();
    const firstValidIndex = this._targetGroup.nCachedObjects_, binding = this._bindings[firstValidIndex];
    if (binding !== void 0)
      binding.getValue(array, offset);
  }
  setValue(array, offset) {
    const bindings = this._bindings;
    for (let i = this._targetGroup.nCachedObjects_, n = bindings.length; i !== n; ++i) {
      bindings[i].setValue(array, offset);
    }
  }
  bind() {
    const bindings = this._bindings;
    for (let i = this._targetGroup.nCachedObjects_, n = bindings.length; i !== n; ++i) {
      bindings[i].bind();
    }
  }
  unbind() {
    const bindings = this._bindings;
    for (let i = this._targetGroup.nCachedObjects_, n = bindings.length; i !== n; ++i) {
      bindings[i].unbind();
    }
  }
};
var PropertyBinding = class {
  constructor(rootNode, path, parsedPath) {
    this.path = path;
    this.parsedPath = parsedPath || PropertyBinding.parseTrackName(path);
    this.node = PropertyBinding.findNode(rootNode, this.parsedPath.nodeName) || rootNode;
    this.rootNode = rootNode;
    this.getValue = this._getValue_unbound;
    this.setValue = this._setValue_unbound;
  }
  static create(root, path, parsedPath) {
    if (!(root && root.isAnimationObjectGroup)) {
      return new PropertyBinding(root, path, parsedPath);
    } else {
      return new PropertyBinding.Composite(root, path, parsedPath);
    }
  }
  static sanitizeNodeName(name) {
    return name.replace(/\s/g, "_").replace(_reservedRe, "");
  }
  static parseTrackName(trackName) {
    const matches = _trackRe.exec(trackName);
    if (matches === null) {
      throw new Error("PropertyBinding: Cannot parse trackName: " + trackName);
    }
    const results = {
      nodeName: matches[2],
      objectName: matches[3],
      objectIndex: matches[4],
      propertyName: matches[5],
      propertyIndex: matches[6]
    };
    const lastDot = results.nodeName && results.nodeName.lastIndexOf(".");
    if (lastDot !== void 0 && lastDot !== -1) {
      const objectName = results.nodeName.substring(lastDot + 1);
      if (_supportedObjectNames.indexOf(objectName) !== -1) {
        results.nodeName = results.nodeName.substring(0, lastDot);
        results.objectName = objectName;
      }
    }
    if (results.propertyName === null || results.propertyName.length === 0) {
      throw new Error("PropertyBinding: can not parse propertyName from trackName: " + trackName);
    }
    return results;
  }
  static findNode(root, nodeName) {
    if (nodeName === void 0 || nodeName === "" || nodeName === "." || nodeName === -1 || nodeName === root.name || nodeName === root.uuid) {
      return root;
    }
    if (root.skeleton) {
      const bone = root.skeleton.getBoneByName(nodeName);
      if (bone !== void 0) {
        return bone;
      }
    }
    if (root.children) {
      const searchNodeSubtree = function(children) {
        for (let i = 0; i < children.length; i++) {
          const childNode = children[i];
          if (childNode.name === nodeName || childNode.uuid === nodeName) {
            return childNode;
          }
          const result = searchNodeSubtree(childNode.children);
          if (result)
            return result;
        }
        return null;
      };
      const subTreeNode = searchNodeSubtree(root.children);
      if (subTreeNode) {
        return subTreeNode;
      }
    }
    return null;
  }
  _getValue_unavailable() {
  }
  _setValue_unavailable() {
  }
  _getValue_direct(buffer, offset) {
    buffer[offset] = this.targetObject[this.propertyName];
  }
  _getValue_array(buffer, offset) {
    const source = this.resolvedProperty;
    for (let i = 0, n = source.length; i !== n; ++i) {
      buffer[offset++] = source[i];
    }
  }
  _getValue_arrayElement(buffer, offset) {
    buffer[offset] = this.resolvedProperty[this.propertyIndex];
  }
  _getValue_toArray(buffer, offset) {
    this.resolvedProperty.toArray(buffer, offset);
  }
  _setValue_direct(buffer, offset) {
    this.targetObject[this.propertyName] = buffer[offset];
  }
  _setValue_direct_setNeedsUpdate(buffer, offset) {
    this.targetObject[this.propertyName] = buffer[offset];
    this.targetObject.needsUpdate = true;
  }
  _setValue_direct_setMatrixWorldNeedsUpdate(buffer, offset) {
    this.targetObject[this.propertyName] = buffer[offset];
    this.targetObject.matrixWorldNeedsUpdate = true;
  }
  _setValue_array(buffer, offset) {
    const dest = this.resolvedProperty;
    for (let i = 0, n = dest.length; i !== n; ++i) {
      dest[i] = buffer[offset++];
    }
  }
  _setValue_array_setNeedsUpdate(buffer, offset) {
    const dest = this.resolvedProperty;
    for (let i = 0, n = dest.length; i !== n; ++i) {
      dest[i] = buffer[offset++];
    }
    this.targetObject.needsUpdate = true;
  }
  _setValue_array_setMatrixWorldNeedsUpdate(buffer, offset) {
    const dest = this.resolvedProperty;
    for (let i = 0, n = dest.length; i !== n; ++i) {
      dest[i] = buffer[offset++];
    }
    this.targetObject.matrixWorldNeedsUpdate = true;
  }
  _setValue_arrayElement(buffer, offset) {
    this.resolvedProperty[this.propertyIndex] = buffer[offset];
  }
  _setValue_arrayElement_setNeedsUpdate(buffer, offset) {
    this.resolvedProperty[this.propertyIndex] = buffer[offset];
    this.targetObject.needsUpdate = true;
  }
  _setValue_arrayElement_setMatrixWorldNeedsUpdate(buffer, offset) {
    this.resolvedProperty[this.propertyIndex] = buffer[offset];
    this.targetObject.matrixWorldNeedsUpdate = true;
  }
  _setValue_fromArray(buffer, offset) {
    this.resolvedProperty.fromArray(buffer, offset);
  }
  _setValue_fromArray_setNeedsUpdate(buffer, offset) {
    this.resolvedProperty.fromArray(buffer, offset);
    this.targetObject.needsUpdate = true;
  }
  _setValue_fromArray_setMatrixWorldNeedsUpdate(buffer, offset) {
    this.resolvedProperty.fromArray(buffer, offset);
    this.targetObject.matrixWorldNeedsUpdate = true;
  }
  _getValue_unbound(targetArray, offset) {
    this.bind();
    this.getValue(targetArray, offset);
  }
  _setValue_unbound(sourceArray, offset) {
    this.bind();
    this.setValue(sourceArray, offset);
  }
  bind() {
    let targetObject = this.node;
    const parsedPath = this.parsedPath;
    const objectName = parsedPath.objectName;
    const propertyName = parsedPath.propertyName;
    let propertyIndex = parsedPath.propertyIndex;
    if (!targetObject) {
      targetObject = PropertyBinding.findNode(this.rootNode, parsedPath.nodeName) || this.rootNode;
      this.node = targetObject;
    }
    this.getValue = this._getValue_unavailable;
    this.setValue = this._setValue_unavailable;
    if (!targetObject) {
      console.error("THREE.PropertyBinding: Trying to update node for track: " + this.path + " but it wasn't found.");
      return;
    }
    if (objectName) {
      let objectIndex = parsedPath.objectIndex;
      switch (objectName) {
        case "materials":
          if (!targetObject.material) {
            console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
            return;
          }
          if (!targetObject.material.materials) {
            console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this);
            return;
          }
          targetObject = targetObject.material.materials;
          break;
        case "bones":
          if (!targetObject.skeleton) {
            console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.", this);
            return;
          }
          targetObject = targetObject.skeleton.bones;
          for (let i = 0; i < targetObject.length; i++) {
            if (targetObject[i].name === objectIndex) {
              objectIndex = i;
              break;
            }
          }
          break;
        default:
          if (targetObject[objectName] === void 0) {
            console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.", this);
            return;
          }
          targetObject = targetObject[objectName];
      }
      if (objectIndex !== void 0) {
        if (targetObject[objectIndex] === void 0) {
          console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, targetObject);
          return;
        }
        targetObject = targetObject[objectIndex];
      }
    }
    const nodeProperty = targetObject[propertyName];
    if (nodeProperty === void 0) {
      const nodeName = parsedPath.nodeName;
      console.error("THREE.PropertyBinding: Trying to update property for track: " + nodeName + "." + propertyName + " but it wasn't found.", targetObject);
      return;
    }
    let versioning = this.Versioning.None;
    this.targetObject = targetObject;
    if (targetObject.needsUpdate !== void 0) {
      versioning = this.Versioning.NeedsUpdate;
    } else if (targetObject.matrixWorldNeedsUpdate !== void 0) {
      versioning = this.Versioning.MatrixWorldNeedsUpdate;
    }
    let bindingType = this.BindingType.Direct;
    if (propertyIndex !== void 0) {
      if (propertyName === "morphTargetInfluences") {
        if (!targetObject.geometry) {
          console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this);
          return;
        }
        if (targetObject.geometry.isBufferGeometry) {
          if (!targetObject.geometry.morphAttributes) {
            console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this);
            return;
          }
          if (targetObject.morphTargetDictionary[propertyIndex] !== void 0) {
            propertyIndex = targetObject.morphTargetDictionary[propertyIndex];
          }
        } else {
          console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.", this);
          return;
        }
      }
      bindingType = this.BindingType.ArrayElement;
      this.resolvedProperty = nodeProperty;
      this.propertyIndex = propertyIndex;
    } else if (nodeProperty.fromArray !== void 0 && nodeProperty.toArray !== void 0) {
      bindingType = this.BindingType.HasFromToArray;
      this.resolvedProperty = nodeProperty;
    } else if (Array.isArray(nodeProperty)) {
      bindingType = this.BindingType.EntireArray;
      this.resolvedProperty = nodeProperty;
    } else {
      this.propertyName = propertyName;
    }
    this.getValue = this.GetterByBindingType[bindingType];
    this.setValue = this.SetterByBindingTypeAndVersioning[bindingType][versioning];
  }
  unbind() {
    this.node = null;
    this.getValue = this._getValue_unbound;
    this.setValue = this._setValue_unbound;
  }
};
PropertyBinding.Composite = Composite;
PropertyBinding.prototype.BindingType = {
  Direct: 0,
  EntireArray: 1,
  ArrayElement: 2,
  HasFromToArray: 3
};
PropertyBinding.prototype.Versioning = {
  None: 0,
  NeedsUpdate: 1,
  MatrixWorldNeedsUpdate: 2
};
PropertyBinding.prototype.GetterByBindingType = [
  PropertyBinding.prototype._getValue_direct,
  PropertyBinding.prototype._getValue_array,
  PropertyBinding.prototype._getValue_arrayElement,
  PropertyBinding.prototype._getValue_toArray
];
PropertyBinding.prototype.SetterByBindingTypeAndVersioning = [
  [
    PropertyBinding.prototype._setValue_direct,
    PropertyBinding.prototype._setValue_direct_setNeedsUpdate,
    PropertyBinding.prototype._setValue_direct_setMatrixWorldNeedsUpdate
  ],
  [
    PropertyBinding.prototype._setValue_array,
    PropertyBinding.prototype._setValue_array_setNeedsUpdate,
    PropertyBinding.prototype._setValue_array_setMatrixWorldNeedsUpdate
  ],
  [
    PropertyBinding.prototype._setValue_arrayElement,
    PropertyBinding.prototype._setValue_arrayElement_setNeedsUpdate,
    PropertyBinding.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate
  ],
  [
    PropertyBinding.prototype._setValue_fromArray,
    PropertyBinding.prototype._setValue_fromArray_setNeedsUpdate,
    PropertyBinding.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate
  ]
];
var AnimationObjectGroup = class {
  constructor() {
    this.uuid = generateUUID();
    this._objects = Array.prototype.slice.call(arguments);
    this.nCachedObjects_ = 0;
    const indices = {};
    this._indicesByUUID = indices;
    for (let i = 0, n = arguments.length; i !== n; ++i) {
      indices[arguments[i].uuid] = i;
    }
    this._paths = [];
    this._parsedPaths = [];
    this._bindings = [];
    this._bindingsIndicesByPath = {};
    const scope = this;
    this.stats = {
      objects: {
        get total() {
          return scope._objects.length;
        },
        get inUse() {
          return this.total - scope.nCachedObjects_;
        }
      },
      get bindingsPerObject() {
        return scope._bindings.length;
      }
    };
  }
  add() {
    const objects = this._objects, indicesByUUID = this._indicesByUUID, paths = this._paths, parsedPaths = this._parsedPaths, bindings = this._bindings, nBindings = bindings.length;
    let knownObject = void 0, nObjects = objects.length, nCachedObjects = this.nCachedObjects_;
    for (let i = 0, n = arguments.length; i !== n; ++i) {
      const object = arguments[i], uuid = object.uuid;
      let index = indicesByUUID[uuid];
      if (index === void 0) {
        index = nObjects++;
        indicesByUUID[uuid] = index;
        objects.push(object);
        for (let j = 0, m = nBindings; j !== m; ++j) {
          bindings[j].push(new PropertyBinding(object, paths[j], parsedPaths[j]));
        }
      } else if (index < nCachedObjects) {
        knownObject = objects[index];
        const firstActiveIndex = --nCachedObjects, lastCachedObject = objects[firstActiveIndex];
        indicesByUUID[lastCachedObject.uuid] = index;
        objects[index] = lastCachedObject;
        indicesByUUID[uuid] = firstActiveIndex;
        objects[firstActiveIndex] = object;
        for (let j = 0, m = nBindings; j !== m; ++j) {
          const bindingsForPath = bindings[j], lastCached = bindingsForPath[firstActiveIndex];
          let binding = bindingsForPath[index];
          bindingsForPath[index] = lastCached;
          if (binding === void 0) {
            binding = new PropertyBinding(object, paths[j], parsedPaths[j]);
          }
          bindingsForPath[firstActiveIndex] = binding;
        }
      } else if (objects[index] !== knownObject) {
        console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.");
      }
    }
    this.nCachedObjects_ = nCachedObjects;
  }
  remove() {
    const objects = this._objects, indicesByUUID = this._indicesByUUID, bindings = this._bindings, nBindings = bindings.length;
    let nCachedObjects = this.nCachedObjects_;
    for (let i = 0, n = arguments.length; i !== n; ++i) {
      const object = arguments[i], uuid = object.uuid, index = indicesByUUID[uuid];
      if (index !== void 0 && index >= nCachedObjects) {
        const lastCachedIndex = nCachedObjects++, firstActiveObject = objects[lastCachedIndex];
        indicesByUUID[firstActiveObject.uuid] = index;
        objects[index] = firstActiveObject;
        indicesByUUID[uuid] = lastCachedIndex;
        objects[lastCachedIndex] = object;
        for (let j = 0, m = nBindings; j !== m; ++j) {
          const bindingsForPath = bindings[j], firstActive = bindingsForPath[lastCachedIndex], binding = bindingsForPath[index];
          bindingsForPath[index] = firstActive;
          bindingsForPath[lastCachedIndex] = binding;
        }
      }
    }
    this.nCachedObjects_ = nCachedObjects;
  }
  uncache() {
    const objects = this._objects, indicesByUUID = this._indicesByUUID, bindings = this._bindings, nBindings = bindings.length;
    let nCachedObjects = this.nCachedObjects_, nObjects = objects.length;
    for (let i = 0, n = arguments.length; i !== n; ++i) {
      const object = arguments[i], uuid = object.uuid, index = indicesByUUID[uuid];
      if (index !== void 0) {
        delete indicesByUUID[uuid];
        if (index < nCachedObjects) {
          const firstActiveIndex = --nCachedObjects, lastCachedObject = objects[firstActiveIndex], lastIndex = --nObjects, lastObject = objects[lastIndex];
          indicesByUUID[lastCachedObject.uuid] = index;
          objects[index] = lastCachedObject;
          indicesByUUID[lastObject.uuid] = firstActiveIndex;
          objects[firstActiveIndex] = lastObject;
          objects.pop();
          for (let j = 0, m = nBindings; j !== m; ++j) {
            const bindingsForPath = bindings[j], lastCached = bindingsForPath[firstActiveIndex], last = bindingsForPath[lastIndex];
            bindingsForPath[index] = lastCached;
            bindingsForPath[firstActiveIndex] = last;
            bindingsForPath.pop();
          }
        } else {
          const lastIndex = --nObjects, lastObject = objects[lastIndex];
          if (lastIndex > 0) {
            indicesByUUID[lastObject.uuid] = index;
          }
          objects[index] = lastObject;
          objects.pop();
          for (let j = 0, m = nBindings; j !== m; ++j) {
            const bindingsForPath = bindings[j];
            bindingsForPath[index] = bindingsForPath[lastIndex];
            bindingsForPath.pop();
          }
        }
      }
    }
    this.nCachedObjects_ = nCachedObjects;
  }
  subscribe_(path, parsedPath) {
    const indicesByPath = this._bindingsIndicesByPath;
    let index = indicesByPath[path];
    const bindings = this._bindings;
    if (index !== void 0)
      return bindings[index];
    const paths = this._paths, parsedPaths = this._parsedPaths, objects = this._objects, nObjects = objects.length, nCachedObjects = this.nCachedObjects_, bindingsForPath = new Array(nObjects);
    index = bindings.length;
    indicesByPath[path] = index;
    paths.push(path);
    parsedPaths.push(parsedPath);
    bindings.push(bindingsForPath);
    for (let i = nCachedObjects, n = objects.length; i !== n; ++i) {
      const object = objects[i];
      bindingsForPath[i] = new PropertyBinding(object, path, parsedPath);
    }
    return bindingsForPath;
  }
  unsubscribe_(path) {
    const indicesByPath = this._bindingsIndicesByPath, index = indicesByPath[path];
    if (index !== void 0) {
      const paths = this._paths, parsedPaths = this._parsedPaths, bindings = this._bindings, lastBindingsIndex = bindings.length - 1, lastBindings = bindings[lastBindingsIndex], lastBindingsPath = path[lastBindingsIndex];
      indicesByPath[lastBindingsPath] = index;
      bindings[index] = lastBindings;
      bindings.pop();
      parsedPaths[index] = parsedPaths[lastBindingsIndex];
      parsedPaths.pop();
      paths[index] = paths[lastBindingsIndex];
      paths.pop();
    }
  }
};
AnimationObjectGroup.prototype.isAnimationObjectGroup = true;
var AnimationAction = class {
  constructor(mixer, clip, localRoot = null, blendMode = clip.blendMode) {
    this._mixer = mixer;
    this._clip = clip;
    this._localRoot = localRoot;
    this.blendMode = blendMode;
    const tracks = clip.tracks, nTracks = tracks.length, interpolants = new Array(nTracks);
    const interpolantSettings = {
      endingStart: ZeroCurvatureEnding,
      endingEnd: ZeroCurvatureEnding
    };
    for (let i = 0; i !== nTracks; ++i) {
      const interpolant = tracks[i].createInterpolant(null);
      interpolants[i] = interpolant;
      interpolant.settings = interpolantSettings;
    }
    this._interpolantSettings = interpolantSettings;
    this._interpolants = interpolants;
    this._propertyBindings = new Array(nTracks);
    this._cacheIndex = null;
    this._byClipCacheIndex = null;
    this._timeScaleInterpolant = null;
    this._weightInterpolant = null;
    this.loop = LoopRepeat;
    this._loopCount = -1;
    this._startTime = null;
    this.time = 0;
    this.timeScale = 1;
    this._effectiveTimeScale = 1;
    this.weight = 1;
    this._effectiveWeight = 1;
    this.repetitions = Infinity;
    this.paused = false;
    this.enabled = true;
    this.clampWhenFinished = false;
    this.zeroSlopeAtStart = true;
    this.zeroSlopeAtEnd = true;
  }
  play() {
    this._mixer._activateAction(this);
    return this;
  }
  stop() {
    this._mixer._deactivateAction(this);
    return this.reset();
  }
  reset() {
    this.paused = false;
    this.enabled = true;
    this.time = 0;
    this._loopCount = -1;
    this._startTime = null;
    return this.stopFading().stopWarping();
  }
  isRunning() {
    return this.enabled && !this.paused && this.timeScale !== 0 && this._startTime === null && this._mixer._isActiveAction(this);
  }
  isScheduled() {
    return this._mixer._isActiveAction(this);
  }
  startAt(time) {
    this._startTime = time;
    return this;
  }
  setLoop(mode, repetitions) {
    this.loop = mode;
    this.repetitions = repetitions;
    return this;
  }
  setEffectiveWeight(weight) {
    this.weight = weight;
    this._effectiveWeight = this.enabled ? weight : 0;
    return this.stopFading();
  }
  getEffectiveWeight() {
    return this._effectiveWeight;
  }
  fadeIn(duration) {
    return this._scheduleFading(duration, 0, 1);
  }
  fadeOut(duration) {
    return this._scheduleFading(duration, 1, 0);
  }
  crossFadeFrom(fadeOutAction, duration, warp) {
    fadeOutAction.fadeOut(duration);
    this.fadeIn(duration);
    if (warp) {
      const fadeInDuration = this._clip.duration, fadeOutDuration = fadeOutAction._clip.duration, startEndRatio = fadeOutDuration / fadeInDuration, endStartRatio = fadeInDuration / fadeOutDuration;
      fadeOutAction.warp(1, startEndRatio, duration);
      this.warp(endStartRatio, 1, duration);
    }
    return this;
  }
  crossFadeTo(fadeInAction, duration, warp) {
    return fadeInAction.crossFadeFrom(this, duration, warp);
  }
  stopFading() {
    const weightInterpolant = this._weightInterpolant;
    if (weightInterpolant !== null) {
      this._weightInterpolant = null;
      this._mixer._takeBackControlInterpolant(weightInterpolant);
    }
    return this;
  }
  setEffectiveTimeScale(timeScale) {
    this.timeScale = timeScale;
    this._effectiveTimeScale = this.paused ? 0 : timeScale;
    return this.stopWarping();
  }
  getEffectiveTimeScale() {
    return this._effectiveTimeScale;
  }
  setDuration(duration) {
    this.timeScale = this._clip.duration / duration;
    return this.stopWarping();
  }
  syncWith(action) {
    this.time = action.time;
    this.timeScale = action.timeScale;
    return this.stopWarping();
  }
  halt(duration) {
    return this.warp(this._effectiveTimeScale, 0, duration);
  }
  warp(startTimeScale, endTimeScale, duration) {
    const mixer = this._mixer, now = mixer.time, timeScale = this.timeScale;
    let interpolant = this._timeScaleInterpolant;
    if (interpolant === null) {
      interpolant = mixer._lendControlInterpolant();
      this._timeScaleInterpolant = interpolant;
    }
    const times = interpolant.parameterPositions, values = interpolant.sampleValues;
    times[0] = now;
    times[1] = now + duration;
    values[0] = startTimeScale / timeScale;
    values[1] = endTimeScale / timeScale;
    return this;
  }
  stopWarping() {
    const timeScaleInterpolant = this._timeScaleInterpolant;
    if (timeScaleInterpolant !== null) {
      this._timeScaleInterpolant = null;
      this._mixer._takeBackControlInterpolant(timeScaleInterpolant);
    }
    return this;
  }
  getMixer() {
    return this._mixer;
  }
  getClip() {
    return this._clip;
  }
  getRoot() {
    return this._localRoot || this._mixer._root;
  }
  _update(time, deltaTime, timeDirection, accuIndex) {
    if (!this.enabled) {
      this._updateWeight(time);
      return;
    }
    const startTime = this._startTime;
    if (startTime !== null) {
      const timeRunning = (time - startTime) * timeDirection;
      if (timeRunning < 0 || timeDirection === 0) {
        return;
      }
      this._startTime = null;
      deltaTime = timeDirection * timeRunning;
    }
    deltaTime *= this._updateTimeScale(time);
    const clipTime = this._updateTime(deltaTime);
    const weight = this._updateWeight(time);
    if (weight > 0) {
      const interpolants = this._interpolants;
      const propertyMixers = this._propertyBindings;
      switch (this.blendMode) {
        case AdditiveAnimationBlendMode:
          for (let j = 0, m = interpolants.length; j !== m; ++j) {
            interpolants[j].evaluate(clipTime);
            propertyMixers[j].accumulateAdditive(weight);
          }
          break;
        case NormalAnimationBlendMode:
        default:
          for (let j = 0, m = interpolants.length; j !== m; ++j) {
            interpolants[j].evaluate(clipTime);
            propertyMixers[j].accumulate(accuIndex, weight);
          }
      }
    }
  }
  _updateWeight(time) {
    let weight = 0;
    if (this.enabled) {
      weight = this.weight;
      const interpolant = this._weightInterpolant;
      if (interpolant !== null) {
        const interpolantValue = interpolant.evaluate(time)[0];
        weight *= interpolantValue;
        if (time > interpolant.parameterPositions[1]) {
          this.stopFading();
          if (interpolantValue === 0) {
            this.enabled = false;
          }
        }
      }
    }
    this._effectiveWeight = weight;
    return weight;
  }
  _updateTimeScale(time) {
    let timeScale = 0;
    if (!this.paused) {
      timeScale = this.timeScale;
      const interpolant = this._timeScaleInterpolant;
      if (interpolant !== null) {
        const interpolantValue = interpolant.evaluate(time)[0];
        timeScale *= interpolantValue;
        if (time > interpolant.parameterPositions[1]) {
          this.stopWarping();
          if (timeScale === 0) {
            this.paused = true;
          } else {
            this.timeScale = timeScale;
          }
        }
      }
    }
    this._effectiveTimeScale = timeScale;
    return timeScale;
  }
  _updateTime(deltaTime) {
    const duration = this._clip.duration;
    const loop = this.loop;
    let time = this.time + deltaTime;
    let loopCount = this._loopCount;
    const pingPong = loop === LoopPingPong;
    if (deltaTime === 0) {
      if (loopCount === -1)
        return time;
      return pingPong && (loopCount & 1) === 1 ? duration - time : time;
    }
    if (loop === LoopOnce) {
      if (loopCount === -1) {
        this._loopCount = 0;
        this._setEndings(true, true, false);
      }
      handle_stop: {
        if (time >= duration) {
          time = duration;
        } else if (time < 0) {
          time = 0;
        } else {
          this.time = time;
          break handle_stop;
        }
        if (this.clampWhenFinished)
          this.paused = true;
        else
          this.enabled = false;
        this.time = time;
        this._mixer.dispatchEvent({
          type: "finished",
          action: this,
          direction: deltaTime < 0 ? -1 : 1
        });
      }
    } else {
      if (loopCount === -1) {
        if (deltaTime >= 0) {
          loopCount = 0;
          this._setEndings(true, this.repetitions === 0, pingPong);
        } else {
          this._setEndings(this.repetitions === 0, true, pingPong);
        }
      }
      if (time >= duration || time < 0) {
        const loopDelta = Math.floor(time / duration);
        time -= duration * loopDelta;
        loopCount += Math.abs(loopDelta);
        const pending = this.repetitions - loopCount;
        if (pending <= 0) {
          if (this.clampWhenFinished)
            this.paused = true;
          else
            this.enabled = false;
          time = deltaTime > 0 ? duration : 0;
          this.time = time;
          this._mixer.dispatchEvent({
            type: "finished",
            action: this,
            direction: deltaTime > 0 ? 1 : -1
          });
        } else {
          if (pending === 1) {
            const atStart = deltaTime < 0;
            this._setEndings(atStart, !atStart, pingPong);
          } else {
            this._setEndings(false, false, pingPong);
          }
          this._loopCount = loopCount;
          this.time = time;
          this._mixer.dispatchEvent({
            type: "loop",
            action: this,
            loopDelta
          });
        }
      } else {
        this.time = time;
      }
      if (pingPong && (loopCount & 1) === 1) {
        return duration - time;
      }
    }
    return time;
  }
  _setEndings(atStart, atEnd, pingPong) {
    const settings = this._interpolantSettings;
    if (pingPong) {
      settings.endingStart = ZeroSlopeEnding;
      settings.endingEnd = ZeroSlopeEnding;
    } else {
      if (atStart) {
        settings.endingStart = this.zeroSlopeAtStart ? ZeroSlopeEnding : ZeroCurvatureEnding;
      } else {
        settings.endingStart = WrapAroundEnding;
      }
      if (atEnd) {
        settings.endingEnd = this.zeroSlopeAtEnd ? ZeroSlopeEnding : ZeroCurvatureEnding;
      } else {
        settings.endingEnd = WrapAroundEnding;
      }
    }
  }
  _scheduleFading(duration, weightNow, weightThen) {
    const mixer = this._mixer, now = mixer.time;
    let interpolant = this._weightInterpolant;
    if (interpolant === null) {
      interpolant = mixer._lendControlInterpolant();
      this._weightInterpolant = interpolant;
    }
    const times = interpolant.parameterPositions, values = interpolant.sampleValues;
    times[0] = now;
    values[0] = weightNow;
    times[1] = now + duration;
    values[1] = weightThen;
    return this;
  }
};
var AnimationMixer = class extends EventDispatcher {
  constructor(root) {
    super();
    this._root = root;
    this._initMemoryManager();
    this._accuIndex = 0;
    this.time = 0;
    this.timeScale = 1;
  }
  _bindAction(action, prototypeAction) {
    const root = action._localRoot || this._root, tracks = action._clip.tracks, nTracks = tracks.length, bindings = action._propertyBindings, interpolants = action._interpolants, rootUuid = root.uuid, bindingsByRoot = this._bindingsByRootAndName;
    let bindingsByName = bindingsByRoot[rootUuid];
    if (bindingsByName === void 0) {
      bindingsByName = {};
      bindingsByRoot[rootUuid] = bindingsByName;
    }
    for (let i = 0; i !== nTracks; ++i) {
      const track = tracks[i], trackName = track.name;
      let binding = bindingsByName[trackName];
      if (binding !== void 0) {
        ++binding.referenceCount;
        bindings[i] = binding;
      } else {
        binding = bindings[i];
        if (binding !== void 0) {
          if (binding._cacheIndex === null) {
            ++binding.referenceCount;
            this._addInactiveBinding(binding, rootUuid, trackName);
          }
          continue;
        }
        const path = prototypeAction && prototypeAction._propertyBindings[i].binding.parsedPath;
        binding = new PropertyMixer(PropertyBinding.create(root, trackName, path), track.ValueTypeName, track.getValueSize());
        ++binding.referenceCount;
        this._addInactiveBinding(binding, rootUuid, trackName);
        bindings[i] = binding;
      }
      interpolants[i].resultBuffer = binding.buffer;
    }
  }
  _activateAction(action) {
    if (!this._isActiveAction(action)) {
      if (action._cacheIndex === null) {
        const rootUuid = (action._localRoot || this._root).uuid, clipUuid = action._clip.uuid, actionsForClip = this._actionsByClip[clipUuid];
        this._bindAction(action, actionsForClip && actionsForClip.knownActions[0]);
        this._addInactiveAction(action, clipUuid, rootUuid);
      }
      const bindings = action._propertyBindings;
      for (let i = 0, n = bindings.length; i !== n; ++i) {
        const binding = bindings[i];
        if (binding.useCount++ === 0) {
          this._lendBinding(binding);
          binding.saveOriginalState();
        }
      }
      this._lendAction(action);
    }
  }
  _deactivateAction(action) {
    if (this._isActiveAction(action)) {
      const bindings = action._propertyBindings;
      for (let i = 0, n = bindings.length; i !== n; ++i) {
        const binding = bindings[i];
        if (--binding.useCount === 0) {
          binding.restoreOriginalState();
          this._takeBackBinding(binding);
        }
      }
      this._takeBackAction(action);
    }
  }
  _initMemoryManager() {
    this._actions = [];
    this._nActiveActions = 0;
    this._actionsByClip = {};
    this._bindings = [];
    this._nActiveBindings = 0;
    this._bindingsByRootAndName = {};
    this._controlInterpolants = [];
    this._nActiveControlInterpolants = 0;
    const scope = this;
    this.stats = {
      actions: {
        get total() {
          return scope._actions.length;
        },
        get inUse() {
          return scope._nActiveActions;
        }
      },
      bindings: {
        get total() {
          return scope._bindings.length;
        },
        get inUse() {
          return scope._nActiveBindings;
        }
      },
      controlInterpolants: {
        get total() {
          return scope._controlInterpolants.length;
        },
        get inUse() {
          return scope._nActiveControlInterpolants;
        }
      }
    };
  }
  _isActiveAction(action) {
    const index = action._cacheIndex;
    return index !== null && index < this._nActiveActions;
  }
  _addInactiveAction(action, clipUuid, rootUuid) {
    const actions = this._actions, actionsByClip = this._actionsByClip;
    let actionsForClip = actionsByClip[clipUuid];
    if (actionsForClip === void 0) {
      actionsForClip = {
        knownActions: [action],
        actionByRoot: {}
      };
      action._byClipCacheIndex = 0;
      actionsByClip[clipUuid] = actionsForClip;
    } else {
      const knownActions = actionsForClip.knownActions;
      action._byClipCacheIndex = knownActions.length;
      knownActions.push(action);
    }
    action._cacheIndex = actions.length;
    actions.push(action);
    actionsForClip.actionByRoot[rootUuid] = action;
  }
  _removeInactiveAction(action) {
    const actions = this._actions, lastInactiveAction = actions[actions.length - 1], cacheIndex = action._cacheIndex;
    lastInactiveAction._cacheIndex = cacheIndex;
    actions[cacheIndex] = lastInactiveAction;
    actions.pop();
    action._cacheIndex = null;
    const clipUuid = action._clip.uuid, actionsByClip = this._actionsByClip, actionsForClip = actionsByClip[clipUuid], knownActionsForClip = actionsForClip.knownActions, lastKnownAction = knownActionsForClip[knownActionsForClip.length - 1], byClipCacheIndex = action._byClipCacheIndex;
    lastKnownAction._byClipCacheIndex = byClipCacheIndex;
    knownActionsForClip[byClipCacheIndex] = lastKnownAction;
    knownActionsForClip.pop();
    action._byClipCacheIndex = null;
    const actionByRoot = actionsForClip.actionByRoot, rootUuid = (action._localRoot || this._root).uuid;
    delete actionByRoot[rootUuid];
    if (knownActionsForClip.length === 0) {
      delete actionsByClip[clipUuid];
    }
    this._removeInactiveBindingsForAction(action);
  }
  _removeInactiveBindingsForAction(action) {
    const bindings = action._propertyBindings;
    for (let i = 0, n = bindings.length; i !== n; ++i) {
      const binding = bindings[i];
      if (--binding.referenceCount === 0) {
        this._removeInactiveBinding(binding);
      }
    }
  }
  _lendAction(action) {
    const actions = this._actions, prevIndex = action._cacheIndex, lastActiveIndex = this._nActiveActions++, firstInactiveAction = actions[lastActiveIndex];
    action._cacheIndex = lastActiveIndex;
    actions[lastActiveIndex] = action;
    firstInactiveAction._cacheIndex = prevIndex;
    actions[prevIndex] = firstInactiveAction;
  }
  _takeBackAction(action) {
    const actions = this._actions, prevIndex = action._cacheIndex, firstInactiveIndex = --this._nActiveActions, lastActiveAction = actions[firstInactiveIndex];
    action._cacheIndex = firstInactiveIndex;
    actions[firstInactiveIndex] = action;
    lastActiveAction._cacheIndex = prevIndex;
    actions[prevIndex] = lastActiveAction;
  }
  _addInactiveBinding(binding, rootUuid, trackName) {
    const bindingsByRoot = this._bindingsByRootAndName, bindings = this._bindings;
    let bindingByName = bindingsByRoot[rootUuid];
    if (bindingByName === void 0) {
      bindingByName = {};
      bindingsByRoot[rootUuid] = bindingByName;
    }
    bindingByName[trackName] = binding;
    binding._cacheIndex = bindings.length;
    bindings.push(binding);
  }
  _removeInactiveBinding(binding) {
    const bindings = this._bindings, propBinding = binding.binding, rootUuid = propBinding.rootNode.uuid, trackName = propBinding.path, bindingsByRoot = this._bindingsByRootAndName, bindingByName = bindingsByRoot[rootUuid], lastInactiveBinding = bindings[bindings.length - 1], cacheIndex = binding._cacheIndex;
    lastInactiveBinding._cacheIndex = cacheIndex;
    bindings[cacheIndex] = lastInactiveBinding;
    bindings.pop();
    delete bindingByName[trackName];
    if (Object.keys(bindingByName).length === 0) {
      delete bindingsByRoot[rootUuid];
    }
  }
  _lendBinding(binding) {
    const bindings = this._bindings, prevIndex = binding._cacheIndex, lastActiveIndex = this._nActiveBindings++, firstInactiveBinding = bindings[lastActiveIndex];
    binding._cacheIndex = lastActiveIndex;
    bindings[lastActiveIndex] = binding;
    firstInactiveBinding._cacheIndex = prevIndex;
    bindings[prevIndex] = firstInactiveBinding;
  }
  _takeBackBinding(binding) {
    const bindings = this._bindings, prevIndex = binding._cacheIndex, firstInactiveIndex = --this._nActiveBindings, lastActiveBinding = bindings[firstInactiveIndex];
    binding._cacheIndex = firstInactiveIndex;
    bindings[firstInactiveIndex] = binding;
    lastActiveBinding._cacheIndex = prevIndex;
    bindings[prevIndex] = lastActiveBinding;
  }
  _lendControlInterpolant() {
    const interpolants = this._controlInterpolants, lastActiveIndex = this._nActiveControlInterpolants++;
    let interpolant = interpolants[lastActiveIndex];
    if (interpolant === void 0) {
      interpolant = new LinearInterpolant(new Float32Array(2), new Float32Array(2), 1, this._controlInterpolantsResultBuffer);
      interpolant.__cacheIndex = lastActiveIndex;
      interpolants[lastActiveIndex] = interpolant;
    }
    return interpolant;
  }
  _takeBackControlInterpolant(interpolant) {
    const interpolants = this._controlInterpolants, prevIndex = interpolant.__cacheIndex, firstInactiveIndex = --this._nActiveControlInterpolants, lastActiveInterpolant = interpolants[firstInactiveIndex];
    interpolant.__cacheIndex = firstInactiveIndex;
    interpolants[firstInactiveIndex] = interpolant;
    lastActiveInterpolant.__cacheIndex = prevIndex;
    interpolants[prevIndex] = lastActiveInterpolant;
  }
  clipAction(clip, optionalRoot, blendMode) {
    const root = optionalRoot || this._root, rootUuid = root.uuid;
    let clipObject = typeof clip === "string" ? AnimationClip.findByName(root, clip) : clip;
    const clipUuid = clipObject !== null ? clipObject.uuid : clip;
    const actionsForClip = this._actionsByClip[clipUuid];
    let prototypeAction = null;
    if (blendMode === void 0) {
      if (clipObject !== null) {
        blendMode = clipObject.blendMode;
      } else {
        blendMode = NormalAnimationBlendMode;
      }
    }
    if (actionsForClip !== void 0) {
      const existingAction = actionsForClip.actionByRoot[rootUuid];
      if (existingAction !== void 0 && existingAction.blendMode === blendMode) {
        return existingAction;
      }
      prototypeAction = actionsForClip.knownActions[0];
      if (clipObject === null)
        clipObject = prototypeAction._clip;
    }
    if (clipObject === null)
      return null;
    const newAction = new AnimationAction(this, clipObject, optionalRoot, blendMode);
    this._bindAction(newAction, prototypeAction);
    this._addInactiveAction(newAction, clipUuid, rootUuid);
    return newAction;
  }
  existingAction(clip, optionalRoot) {
    const root = optionalRoot || this._root, rootUuid = root.uuid, clipObject = typeof clip === "string" ? AnimationClip.findByName(root, clip) : clip, clipUuid = clipObject ? clipObject.uuid : clip, actionsForClip = this._actionsByClip[clipUuid];
    if (actionsForClip !== void 0) {
      return actionsForClip.actionByRoot[rootUuid] || null;
    }
    return null;
  }
  stopAllAction() {
    const actions = this._actions, nActions = this._nActiveActions;
    for (let i = nActions - 1; i >= 0; --i) {
      actions[i].stop();
    }
    return this;
  }
  update(deltaTime) {
    deltaTime *= this.timeScale;
    const actions = this._actions, nActions = this._nActiveActions, time = this.time += deltaTime, timeDirection = Math.sign(deltaTime), accuIndex = this._accuIndex ^= 1;
    for (let i = 0; i !== nActions; ++i) {
      const action = actions[i];
      action._update(time, deltaTime, timeDirection, accuIndex);
    }
    const bindings = this._bindings, nBindings = this._nActiveBindings;
    for (let i = 0; i !== nBindings; ++i) {
      bindings[i].apply(accuIndex);
    }
    return this;
  }
  setTime(timeInSeconds) {
    this.time = 0;
    for (let i = 0; i < this._actions.length; i++) {
      this._actions[i].time = 0;
    }
    return this.update(timeInSeconds);
  }
  getRoot() {
    return this._root;
  }
  uncacheClip(clip) {
    const actions = this._actions, clipUuid = clip.uuid, actionsByClip = this._actionsByClip, actionsForClip = actionsByClip[clipUuid];
    if (actionsForClip !== void 0) {
      const actionsToRemove = actionsForClip.knownActions;
      for (let i = 0, n = actionsToRemove.length; i !== n; ++i) {
        const action = actionsToRemove[i];
        this._deactivateAction(action);
        const cacheIndex = action._cacheIndex, lastInactiveAction = actions[actions.length - 1];
        action._cacheIndex = null;
        action._byClipCacheIndex = null;
        lastInactiveAction._cacheIndex = cacheIndex;
        actions[cacheIndex] = lastInactiveAction;
        actions.pop();
        this._removeInactiveBindingsForAction(action);
      }
      delete actionsByClip[clipUuid];
    }
  }
  uncacheRoot(root) {
    const rootUuid = root.uuid, actionsByClip = this._actionsByClip;
    for (const clipUuid in actionsByClip) {
      const actionByRoot = actionsByClip[clipUuid].actionByRoot, action = actionByRoot[rootUuid];
      if (action !== void 0) {
        this._deactivateAction(action);
        this._removeInactiveAction(action);
      }
    }
    const bindingsByRoot = this._bindingsByRootAndName, bindingByName = bindingsByRoot[rootUuid];
    if (bindingByName !== void 0) {
      for (const trackName in bindingByName) {
        const binding = bindingByName[trackName];
        binding.restoreOriginalState();
        this._removeInactiveBinding(binding);
      }
    }
  }
  uncacheAction(clip, optionalRoot) {
    const action = this.existingAction(clip, optionalRoot);
    if (action !== null) {
      this._deactivateAction(action);
      this._removeInactiveAction(action);
    }
  }
};
AnimationMixer.prototype._controlInterpolantsResultBuffer = new Float32Array(1);
var Uniform = class {
  constructor(value) {
    if (typeof value === "string") {
      console.warn("THREE.Uniform: Type parameter is no longer needed.");
      value = arguments[1];
    }
    this.value = value;
  }
  clone() {
    return new Uniform(this.value.clone === void 0 ? this.value : this.value.clone());
  }
};
var InstancedInterleavedBuffer = class extends InterleavedBuffer {
  constructor(array, stride, meshPerAttribute = 1) {
    super(array, stride);
    this.meshPerAttribute = meshPerAttribute;
  }
  copy(source) {
    super.copy(source);
    this.meshPerAttribute = source.meshPerAttribute;
    return this;
  }
  clone(data) {
    const ib = super.clone(data);
    ib.meshPerAttribute = this.meshPerAttribute;
    return ib;
  }
  toJSON(data) {
    const json = super.toJSON(data);
    json.isInstancedInterleavedBuffer = true;
    json.meshPerAttribute = this.meshPerAttribute;
    return json;
  }
};
InstancedInterleavedBuffer.prototype.isInstancedInterleavedBuffer = true;
var GLBufferAttribute = class {
  constructor(buffer, type, itemSize, elementSize, count) {
    this.buffer = buffer;
    this.type = type;
    this.itemSize = itemSize;
    this.elementSize = elementSize;
    this.count = count;
    this.version = 0;
  }
  set needsUpdate(value) {
    if (value === true)
      this.version++;
  }
  setBuffer(buffer) {
    this.buffer = buffer;
    return this;
  }
  setType(type, elementSize) {
    this.type = type;
    this.elementSize = elementSize;
    return this;
  }
  setItemSize(itemSize) {
    this.itemSize = itemSize;
    return this;
  }
  setCount(count) {
    this.count = count;
    return this;
  }
};
GLBufferAttribute.prototype.isGLBufferAttribute = true;
var _vector$4 = /* @__PURE__ */ new Vector2();
var Box2 = class {
  constructor(min = new Vector2(Infinity, Infinity), max = new Vector2(-Infinity, -Infinity)) {
    this.min = min;
    this.max = max;
  }
  set(min, max) {
    this.min.copy(min);
    this.max.copy(max);
    return this;
  }
  setFromPoints(points) {
    this.makeEmpty();
    for (let i = 0, il = points.length; i < il; i++) {
      this.expandByPoint(points[i]);
    }
    return this;
  }
  setFromCenterAndSize(center, size) {
    const halfSize = _vector$4.copy(size).multiplyScalar(0.5);
    this.min.copy(center).sub(halfSize);
    this.max.copy(center).add(halfSize);
    return this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(box) {
    this.min.copy(box.min);
    this.max.copy(box.max);
    return this;
  }
  makeEmpty() {
    this.min.x = this.min.y = Infinity;
    this.max.x = this.max.y = -Infinity;
    return this;
  }
  isEmpty() {
    return this.max.x < this.min.x || this.max.y < this.min.y;
  }
  getCenter(target) {
    return this.isEmpty() ? target.set(0, 0) : target.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(target) {
    return this.isEmpty() ? target.set(0, 0) : target.subVectors(this.max, this.min);
  }
  expandByPoint(point) {
    this.min.min(point);
    this.max.max(point);
    return this;
  }
  expandByVector(vector) {
    this.min.sub(vector);
    this.max.add(vector);
    return this;
  }
  expandByScalar(scalar) {
    this.min.addScalar(-scalar);
    this.max.addScalar(scalar);
    return this;
  }
  containsPoint(point) {
    return point.x < this.min.x || point.x > this.max.x || point.y < this.min.y || point.y > this.max.y ? false : true;
  }
  containsBox(box) {
    return this.min.x <= box.min.x && box.max.x <= this.max.x && this.min.y <= box.min.y && box.max.y <= this.max.y;
  }
  getParameter(point, target) {
    return target.set((point.x - this.min.x) / (this.max.x - this.min.x), (point.y - this.min.y) / (this.max.y - this.min.y));
  }
  intersectsBox(box) {
    return box.max.x < this.min.x || box.min.x > this.max.x || box.max.y < this.min.y || box.min.y > this.max.y ? false : true;
  }
  clampPoint(point, target) {
    return target.copy(point).clamp(this.min, this.max);
  }
  distanceToPoint(point) {
    const clampedPoint = _vector$4.copy(point).clamp(this.min, this.max);
    return clampedPoint.sub(point).length();
  }
  intersect(box) {
    this.min.max(box.min);
    this.max.min(box.max);
    return this;
  }
  union(box) {
    this.min.min(box.min);
    this.max.max(box.max);
    return this;
  }
  translate(offset) {
    this.min.add(offset);
    this.max.add(offset);
    return this;
  }
  equals(box) {
    return box.min.equals(this.min) && box.max.equals(this.max);
  }
};
Box2.prototype.isBox2 = true;
var _startP = /* @__PURE__ */ new Vector3();
var _startEnd = /* @__PURE__ */ new Vector3();
var Line3 = class {
  constructor(start = new Vector3(), end = new Vector3()) {
    this.start = start;
    this.end = end;
  }
  set(start, end) {
    this.start.copy(start);
    this.end.copy(end);
    return this;
  }
  copy(line) {
    this.start.copy(line.start);
    this.end.copy(line.end);
    return this;
  }
  getCenter(target) {
    return target.addVectors(this.start, this.end).multiplyScalar(0.5);
  }
  delta(target) {
    return target.subVectors(this.end, this.start);
  }
  distanceSq() {
    return this.start.distanceToSquared(this.end);
  }
  distance() {
    return this.start.distanceTo(this.end);
  }
  at(t, target) {
    return this.delta(target).multiplyScalar(t).add(this.start);
  }
  closestPointToPointParameter(point, clampToLine) {
    _startP.subVectors(point, this.start);
    _startEnd.subVectors(this.end, this.start);
    const startEnd2 = _startEnd.dot(_startEnd);
    const startEnd_startP = _startEnd.dot(_startP);
    let t = startEnd_startP / startEnd2;
    if (clampToLine) {
      t = clamp(t, 0, 1);
    }
    return t;
  }
  closestPointToPoint(point, clampToLine, target) {
    const t = this.closestPointToPointParameter(point, clampToLine);
    return this.delta(target).multiplyScalar(t).add(this.start);
  }
  applyMatrix4(matrix) {
    this.start.applyMatrix4(matrix);
    this.end.applyMatrix4(matrix);
    return this;
  }
  equals(line) {
    return line.start.equals(this.start) && line.end.equals(this.end);
  }
  clone() {
    return new this.constructor().copy(this);
  }
};
var _vector$2 = /* @__PURE__ */ new Vector3();
var _boneMatrix = /* @__PURE__ */ new Matrix4();
var _matrixWorldInv = /* @__PURE__ */ new Matrix4();
var SkeletonHelper = class extends LineSegments {
  constructor(object) {
    const bones = getBoneList(object);
    const geometry = new BufferGeometry();
    const vertices = [];
    const colors = [];
    const color1 = new Color(0, 0, 1);
    const color2 = new Color(0, 1, 0);
    for (let i = 0; i < bones.length; i++) {
      const bone = bones[i];
      if (bone.parent && bone.parent.isBone) {
        vertices.push(0, 0, 0);
        vertices.push(0, 0, 0);
        colors.push(color1.r, color1.g, color1.b);
        colors.push(color2.r, color2.g, color2.b);
      }
    }
    geometry.setAttribute("position", new Float32BufferAttribute(vertices, 3));
    geometry.setAttribute("color", new Float32BufferAttribute(colors, 3));
    const material = new LineBasicMaterial({ vertexColors: true, depthTest: false, depthWrite: false, toneMapped: false, transparent: true });
    super(geometry, material);
    this.type = "SkeletonHelper";
    this.isSkeletonHelper = true;
    this.root = object;
    this.bones = bones;
    this.matrix = object.matrixWorld;
    this.matrixAutoUpdate = false;
  }
  updateMatrixWorld(force) {
    const bones = this.bones;
    const geometry = this.geometry;
    const position = geometry.getAttribute("position");
    _matrixWorldInv.copy(this.root.matrixWorld).invert();
    for (let i = 0, j = 0; i < bones.length; i++) {
      const bone = bones[i];
      if (bone.parent && bone.parent.isBone) {
        _boneMatrix.multiplyMatrices(_matrixWorldInv, bone.matrixWorld);
        _vector$2.setFromMatrixPosition(_boneMatrix);
        position.setXYZ(j, _vector$2.x, _vector$2.y, _vector$2.z);
        _boneMatrix.multiplyMatrices(_matrixWorldInv, bone.parent.matrixWorld);
        _vector$2.setFromMatrixPosition(_boneMatrix);
        position.setXYZ(j + 1, _vector$2.x, _vector$2.y, _vector$2.z);
        j += 2;
      }
    }
    geometry.getAttribute("position").needsUpdate = true;
    super.updateMatrixWorld(force);
  }
};
function getBoneList(object) {
  const boneList = [];
  if (object.isBone === true) {
    boneList.push(object);
  }
  for (let i = 0; i < object.children.length; i++) {
    boneList.push.apply(boneList, getBoneList(object.children[i]));
  }
  return boneList;
}
var GridHelper = class extends LineSegments {
  constructor(size = 10, divisions = 10, color1 = 4473924, color2 = 8947848) {
    color1 = new Color(color1);
    color2 = new Color(color2);
    const center = divisions / 2;
    const step = size / divisions;
    const halfSize = size / 2;
    const vertices = [], colors = [];
    for (let i = 0, j = 0, k = -halfSize; i <= divisions; i++, k += step) {
      vertices.push(-halfSize, 0, k, halfSize, 0, k);
      vertices.push(k, 0, -halfSize, k, 0, halfSize);
      const color = i === center ? color1 : color2;
      color.toArray(colors, j);
      j += 3;
      color.toArray(colors, j);
      j += 3;
      color.toArray(colors, j);
      j += 3;
      color.toArray(colors, j);
      j += 3;
    }
    const geometry = new BufferGeometry();
    geometry.setAttribute("position", new Float32BufferAttribute(vertices, 3));
    geometry.setAttribute("color", new Float32BufferAttribute(colors, 3));
    const material = new LineBasicMaterial({ vertexColors: true, toneMapped: false });
    super(geometry, material);
    this.type = "GridHelper";
  }
};
var _buffer = new ArrayBuffer(4);
var _floatView = new Float32Array(_buffer);
var _uint32View = new Uint32Array(_buffer);
var _baseTable = new Uint32Array(512);
var _shiftTable = new Uint32Array(512);
for (let i = 0; i < 256; ++i) {
  const e = i - 127;
  if (e < -27) {
    _baseTable[i] = 0;
    _baseTable[i | 256] = 32768;
    _shiftTable[i] = 24;
    _shiftTable[i | 256] = 24;
  } else if (e < -14) {
    _baseTable[i] = 1024 >> -e - 14;
    _baseTable[i | 256] = 1024 >> -e - 14 | 32768;
    _shiftTable[i] = -e - 1;
    _shiftTable[i | 256] = -e - 1;
  } else if (e <= 15) {
    _baseTable[i] = e + 15 << 10;
    _baseTable[i | 256] = e + 15 << 10 | 32768;
    _shiftTable[i] = 13;
    _shiftTable[i | 256] = 13;
  } else if (e < 128) {
    _baseTable[i] = 31744;
    _baseTable[i | 256] = 64512;
    _shiftTable[i] = 24;
    _shiftTable[i | 256] = 24;
  } else {
    _baseTable[i] = 31744;
    _baseTable[i | 256] = 64512;
    _shiftTable[i] = 13;
    _shiftTable[i | 256] = 13;
  }
}
var _mantissaTable = new Uint32Array(2048);
var _exponentTable = new Uint32Array(64);
var _offsetTable = new Uint32Array(64);
for (let i = 1; i < 1024; ++i) {
  let m = i << 13;
  let e = 0;
  while ((m & 8388608) === 0) {
    m <<= 1;
    e -= 8388608;
  }
  m &= ~8388608;
  e += 947912704;
  _mantissaTable[i] = m | e;
}
for (let i = 1024; i < 2048; ++i) {
  _mantissaTable[i] = 939524096 + (i - 1024 << 13);
}
for (let i = 1; i < 31; ++i) {
  _exponentTable[i] = i << 23;
}
_exponentTable[31] = 1199570944;
_exponentTable[32] = 2147483648;
for (let i = 33; i < 63; ++i) {
  _exponentTable[i] = 2147483648 + (i - 32 << 23);
}
_exponentTable[63] = 3347054592;
for (let i = 1; i < 64; ++i) {
  if (i !== 32) {
    _offsetTable[i] = 1024;
  }
}
Curve.create = function(construct, getPoint) {
  console.log("THREE.Curve.create() has been deprecated");
  construct.prototype = Object.create(Curve.prototype);
  construct.prototype.constructor = construct;
  construct.prototype.getPoint = getPoint;
  return construct;
};
Path.prototype.fromPoints = function(points) {
  console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints().");
  return this.setFromPoints(points);
};
GridHelper.prototype.setColors = function() {
  console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.");
};
SkeletonHelper.prototype.update = function() {
  console.error("THREE.SkeletonHelper: update() no longer needs to be called.");
};
Loader.prototype.extractUrlBase = function(url) {
  console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead.");
  return LoaderUtils.extractUrlBase(url);
};
Loader.Handlers = {
  add: function() {
    console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.");
  },
  get: function() {
    console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.");
  }
};
Box2.prototype.center = function(optionalTarget) {
  console.warn("THREE.Box2: .center() has been renamed to .getCenter().");
  return this.getCenter(optionalTarget);
};
Box2.prototype.empty = function() {
  console.warn("THREE.Box2: .empty() has been renamed to .isEmpty().");
  return this.isEmpty();
};
Box2.prototype.isIntersectionBox = function(box) {
  console.warn("THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox().");
  return this.intersectsBox(box);
};
Box2.prototype.size = function(optionalTarget) {
  console.warn("THREE.Box2: .size() has been renamed to .getSize().");
  return this.getSize(optionalTarget);
};
Box3.prototype.center = function(optionalTarget) {
  console.warn("THREE.Box3: .center() has been renamed to .getCenter().");
  return this.getCenter(optionalTarget);
};
Box3.prototype.empty = function() {
  console.warn("THREE.Box3: .empty() has been renamed to .isEmpty().");
  return this.isEmpty();
};
Box3.prototype.isIntersectionBox = function(box) {
  console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox().");
  return this.intersectsBox(box);
};
Box3.prototype.isIntersectionSphere = function(sphere) {
  console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere().");
  return this.intersectsSphere(sphere);
};
Box3.prototype.size = function(optionalTarget) {
  console.warn("THREE.Box3: .size() has been renamed to .getSize().");
  return this.getSize(optionalTarget);
};
Euler.prototype.toVector3 = function() {
  console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead");
};
Sphere.prototype.empty = function() {
  console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty().");
  return this.isEmpty();
};
Frustum.prototype.setFromMatrix = function(m) {
  console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix().");
  return this.setFromProjectionMatrix(m);
};
Line3.prototype.center = function(optionalTarget) {
  console.warn("THREE.Line3: .center() has been renamed to .getCenter().");
  return this.getCenter(optionalTarget);
};
Matrix3.prototype.flattenToArrayOffset = function(array, offset) {
  console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead.");
  return this.toArray(array, offset);
};
Matrix3.prototype.multiplyVector3 = function(vector) {
  console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead.");
  return vector.applyMatrix3(this);
};
Matrix3.prototype.multiplyVector3Array = function() {
  console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.");
};
Matrix3.prototype.applyToBufferAttribute = function(attribute) {
  console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead.");
  return attribute.applyMatrix3(this);
};
Matrix3.prototype.applyToVector3Array = function() {
  console.error("THREE.Matrix3: .applyToVector3Array() has been removed.");
};
Matrix3.prototype.getInverse = function(matrix) {
  console.warn("THREE.Matrix3: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead.");
  return this.copy(matrix).invert();
};
Matrix4.prototype.extractPosition = function(m) {
  console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition().");
  return this.copyPosition(m);
};
Matrix4.prototype.flattenToArrayOffset = function(array, offset) {
  console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead.");
  return this.toArray(array, offset);
};
Matrix4.prototype.getPosition = function() {
  console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead.");
  return new Vector3().setFromMatrixColumn(this, 3);
};
Matrix4.prototype.setRotationFromQuaternion = function(q) {
  console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion().");
  return this.makeRotationFromQuaternion(q);
};
Matrix4.prototype.multiplyToArray = function() {
  console.warn("THREE.Matrix4: .multiplyToArray() has been removed.");
};
Matrix4.prototype.multiplyVector3 = function(vector) {
  console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead.");
  return vector.applyMatrix4(this);
};
Matrix4.prototype.multiplyVector4 = function(vector) {
  console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead.");
  return vector.applyMatrix4(this);
};
Matrix4.prototype.multiplyVector3Array = function() {
  console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.");
};
Matrix4.prototype.rotateAxis = function(v) {
  console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead.");
  v.transformDirection(this);
};
Matrix4.prototype.crossVector = function(vector) {
  console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead.");
  return vector.applyMatrix4(this);
};
Matrix4.prototype.translate = function() {
  console.error("THREE.Matrix4: .translate() has been removed.");
};
Matrix4.prototype.rotateX = function() {
  console.error("THREE.Matrix4: .rotateX() has been removed.");
};
Matrix4.prototype.rotateY = function() {
  console.error("THREE.Matrix4: .rotateY() has been removed.");
};
Matrix4.prototype.rotateZ = function() {
  console.error("THREE.Matrix4: .rotateZ() has been removed.");
};
Matrix4.prototype.rotateByAxis = function() {
  console.error("THREE.Matrix4: .rotateByAxis() has been removed.");
};
Matrix4.prototype.applyToBufferAttribute = function(attribute) {
  console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead.");
  return attribute.applyMatrix4(this);
};
Matrix4.prototype.applyToVector3Array = function() {
  console.error("THREE.Matrix4: .applyToVector3Array() has been removed.");
};
Matrix4.prototype.makeFrustum = function(left, right, bottom, top, near, far) {
  console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead.");
  return this.makePerspective(left, right, top, bottom, near, far);
};
Matrix4.prototype.getInverse = function(matrix) {
  console.warn("THREE.Matrix4: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead.");
  return this.copy(matrix).invert();
};
Plane.prototype.isIntersectionLine = function(line) {
  console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine().");
  return this.intersectsLine(line);
};
Quaternion.prototype.multiplyVector3 = function(vector) {
  console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead.");
  return vector.applyQuaternion(this);
};
Quaternion.prototype.inverse = function() {
  console.warn("THREE.Quaternion: .inverse() has been renamed to invert().");
  return this.invert();
};
Ray.prototype.isIntersectionBox = function(box) {
  console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox().");
  return this.intersectsBox(box);
};
Ray.prototype.isIntersectionPlane = function(plane) {
  console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane().");
  return this.intersectsPlane(plane);
};
Ray.prototype.isIntersectionSphere = function(sphere) {
  console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere().");
  return this.intersectsSphere(sphere);
};
Triangle.prototype.area = function() {
  console.warn("THREE.Triangle: .area() has been renamed to .getArea().");
  return this.getArea();
};
Triangle.prototype.barycoordFromPoint = function(point, target) {
  console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord().");
  return this.getBarycoord(point, target);
};
Triangle.prototype.midpoint = function(target) {
  console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint().");
  return this.getMidpoint(target);
};
Triangle.prototypenormal = function(target) {
  console.warn("THREE.Triangle: .normal() has been renamed to .getNormal().");
  return this.getNormal(target);
};
Triangle.prototype.plane = function(target) {
  console.warn("THREE.Triangle: .plane() has been renamed to .getPlane().");
  return this.getPlane(target);
};
Triangle.barycoordFromPoint = function(point, a, b, c, target) {
  console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord().");
  return Triangle.getBarycoord(point, a, b, c, target);
};
Triangle.normal = function(a, b, c, target) {
  console.warn("THREE.Triangle: .normal() has been renamed to .getNormal().");
  return Triangle.getNormal(a, b, c, target);
};
Shape.prototype.extractAllPoints = function(divisions) {
  console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead.");
  return this.extractPoints(divisions);
};
Shape.prototype.extrude = function(options) {
  console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead.");
  return new ExtrudeGeometry(this, options);
};
Shape.prototype.makeGeometry = function(options) {
  console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead.");
  return new ShapeGeometry(this, options);
};
Vector2.prototype.fromAttribute = function(attribute, index, offset) {
  console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute().");
  return this.fromBufferAttribute(attribute, index, offset);
};
Vector2.prototype.distanceToManhattan = function(v) {
  console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo().");
  return this.manhattanDistanceTo(v);
};
Vector2.prototype.lengthManhattan = function() {
  console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength().");
  return this.manhattanLength();
};
Vector3.prototype.setEulerFromRotationMatrix = function() {
  console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.");
};
Vector3.prototype.setEulerFromQuaternion = function() {
  console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.");
};
Vector3.prototype.getPositionFromMatrix = function(m) {
  console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition().");
  return this.setFromMatrixPosition(m);
};
Vector3.prototype.getScaleFromMatrix = function(m) {
  console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale().");
  return this.setFromMatrixScale(m);
};
Vector3.prototype.getColumnFromMatrix = function(index, matrix) {
  console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn().");
  return this.setFromMatrixColumn(matrix, index);
};
Vector3.prototype.applyProjection = function(m) {
  console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead.");
  return this.applyMatrix4(m);
};
Vector3.prototype.fromAttribute = function(attribute, index, offset) {
  console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute().");
  return this.fromBufferAttribute(attribute, index, offset);
};
Vector3.prototype.distanceToManhattan = function(v) {
  console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo().");
  return this.manhattanDistanceTo(v);
};
Vector3.prototype.lengthManhattan = function() {
  console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength().");
  return this.manhattanLength();
};
Vector4.prototype.fromAttribute = function(attribute, index, offset) {
  console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute().");
  return this.fromBufferAttribute(attribute, index, offset);
};
Vector4.prototype.lengthManhattan = function() {
  console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength().");
  return this.manhattanLength();
};
Object3D.prototype.getChildByName = function(name) {
  console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName().");
  return this.getObjectByName(name);
};
Object3D.prototype.renderDepth = function() {
  console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.");
};
Object3D.prototype.translate = function(distance, axis) {
  console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead.");
  return this.translateOnAxis(axis, distance);
};
Object3D.prototype.getWorldRotation = function() {
  console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.");
};
Object3D.prototype.applyMatrix = function(matrix) {
  console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4().");
  return this.applyMatrix4(matrix);
};
Object.defineProperties(Object3D.prototype, {
  eulerOrder: {
    get: function() {
      console.warn("THREE.Object3D: .eulerOrder is now .rotation.order.");
      return this.rotation.order;
    },
    set: function(value) {
      console.warn("THREE.Object3D: .eulerOrder is now .rotation.order.");
      this.rotation.order = value;
    }
  },
  useQuaternion: {
    get: function() {
      console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.");
    },
    set: function() {
      console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.");
    }
  }
});
Mesh.prototype.setDrawMode = function() {
  console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.");
};
Object.defineProperties(Mesh.prototype, {
  drawMode: {
    get: function() {
      console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode.");
      return TrianglesDrawMode;
    },
    set: function() {
      console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.");
    }
  }
});
SkinnedMesh.prototype.initBones = function() {
  console.error("THREE.SkinnedMesh: initBones() has been removed.");
};
PerspectiveCamera.prototype.setLens = function(focalLength, filmGauge) {
  console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup.");
  if (filmGauge !== void 0)
    this.filmGauge = filmGauge;
  this.setFocalLength(focalLength);
};
Object.defineProperties(Light.prototype, {
  onlyShadow: {
    set: function() {
      console.warn("THREE.Light: .onlyShadow has been removed.");
    }
  },
  shadowCameraFov: {
    set: function(value) {
      console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov.");
      this.shadow.camera.fov = value;
    }
  },
  shadowCameraLeft: {
    set: function(value) {
      console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left.");
      this.shadow.camera.left = value;
    }
  },
  shadowCameraRight: {
    set: function(value) {
      console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right.");
      this.shadow.camera.right = value;
    }
  },
  shadowCameraTop: {
    set: function(value) {
      console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top.");
      this.shadow.camera.top = value;
    }
  },
  shadowCameraBottom: {
    set: function(value) {
      console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom.");
      this.shadow.camera.bottom = value;
    }
  },
  shadowCameraNear: {
    set: function(value) {
      console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near.");
      this.shadow.camera.near = value;
    }
  },
  shadowCameraFar: {
    set: function(value) {
      console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far.");
      this.shadow.camera.far = value;
    }
  },
  shadowCameraVisible: {
    set: function() {
      console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.");
    }
  },
  shadowBias: {
    set: function(value) {
      console.warn("THREE.Light: .shadowBias is now .shadow.bias.");
      this.shadow.bias = value;
    }
  },
  shadowDarkness: {
    set: function() {
      console.warn("THREE.Light: .shadowDarkness has been removed.");
    }
  },
  shadowMapWidth: {
    set: function(value) {
      console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width.");
      this.shadow.mapSize.width = value;
    }
  },
  shadowMapHeight: {
    set: function(value) {
      console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height.");
      this.shadow.mapSize.height = value;
    }
  }
});
Object.defineProperties(BufferAttribute.prototype, {
  length: {
    get: function() {
      console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead.");
      return this.array.length;
    }
  },
  dynamic: {
    get: function() {
      console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead.");
      return this.usage === DynamicDrawUsage;
    },
    set: function() {
      console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead.");
      this.setUsage(DynamicDrawUsage);
    }
  }
});
BufferAttribute.prototype.setDynamic = function(value) {
  console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead.");
  this.setUsage(value === true ? DynamicDrawUsage : StaticDrawUsage);
  return this;
};
BufferAttribute.prototype.copyIndicesArray = function() {
  console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.");
}, BufferAttribute.prototype.setArray = function() {
  console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers");
};
BufferGeometry.prototype.addIndex = function(index) {
  console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex().");
  this.setIndex(index);
};
BufferGeometry.prototype.addAttribute = function(name, attribute) {
  console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute().");
  if (!(attribute && attribute.isBufferAttribute) && !(attribute && attribute.isInterleavedBufferAttribute)) {
    console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute ).");
    return this.setAttribute(name, new BufferAttribute(arguments[1], arguments[2]));
  }
  if (name === "index") {
    console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute.");
    this.setIndex(attribute);
    return this;
  }
  return this.setAttribute(name, attribute);
};
BufferGeometry.prototype.addDrawCall = function(start, count, indexOffset) {
  if (indexOffset !== void 0) {
    console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset.");
  }
  console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup().");
  this.addGroup(start, count);
};
BufferGeometry.prototype.clearDrawCalls = function() {
  console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups().");
  this.clearGroups();
};
BufferGeometry.prototype.computeOffsets = function() {
  console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.");
};
BufferGeometry.prototype.removeAttribute = function(name) {
  console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute().");
  return this.deleteAttribute(name);
};
BufferGeometry.prototype.applyMatrix = function(matrix) {
  console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4().");
  return this.applyMatrix4(matrix);
};
Object.defineProperties(BufferGeometry.prototype, {
  drawcalls: {
    get: function() {
      console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups.");
      return this.groups;
    }
  },
  offsets: {
    get: function() {
      console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups.");
      return this.groups;
    }
  }
});
InterleavedBuffer.prototype.setDynamic = function(value) {
  console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead.");
  this.setUsage(value === true ? DynamicDrawUsage : StaticDrawUsage);
  return this;
};
InterleavedBuffer.prototype.setArray = function() {
  console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers");
};
ExtrudeGeometry.prototype.getArrays = function() {
  console.error("THREE.ExtrudeGeometry: .getArrays() has been removed.");
};
ExtrudeGeometry.prototype.addShapeList = function() {
  console.error("THREE.ExtrudeGeometry: .addShapeList() has been removed.");
};
ExtrudeGeometry.prototype.addShape = function() {
  console.error("THREE.ExtrudeGeometry: .addShape() has been removed.");
};
Scene.prototype.dispose = function() {
  console.error("THREE.Scene: .dispose() has been removed.");
};
Uniform.prototype.onUpdate = function() {
  console.warn("THREE.Uniform: .onUpdate() has been removed. Use object.onBeforeRender() instead.");
  return this;
};
Object.defineProperties(Material.prototype, {
  wrapAround: {
    get: function() {
      console.warn("THREE.Material: .wrapAround has been removed.");
    },
    set: function() {
      console.warn("THREE.Material: .wrapAround has been removed.");
    }
  },
  overdraw: {
    get: function() {
      console.warn("THREE.Material: .overdraw has been removed.");
    },
    set: function() {
      console.warn("THREE.Material: .overdraw has been removed.");
    }
  },
  wrapRGB: {
    get: function() {
      console.warn("THREE.Material: .wrapRGB has been removed.");
      return new Color();
    }
  },
  shading: {
    get: function() {
      console.error("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead.");
    },
    set: function(value) {
      console.warn("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead.");
      this.flatShading = value === FlatShading;
    }
  },
  stencilMask: {
    get: function() {
      console.warn("THREE." + this.type + ": .stencilMask has been removed. Use .stencilFuncMask instead.");
      return this.stencilFuncMask;
    },
    set: function(value) {
      console.warn("THREE." + this.type + ": .stencilMask has been removed. Use .stencilFuncMask instead.");
      this.stencilFuncMask = value;
    }
  },
  vertexTangents: {
    get: function() {
      console.warn("THREE." + this.type + ": .vertexTangents has been removed.");
    },
    set: function() {
      console.warn("THREE." + this.type + ": .vertexTangents has been removed.");
    }
  }
});
Object.defineProperties(ShaderMaterial.prototype, {
  derivatives: {
    get: function() {
      console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives.");
      return this.extensions.derivatives;
    },
    set: function(value) {
      console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives.");
      this.extensions.derivatives = value;
    }
  }
});
WebGLRenderer.prototype.clearTarget = function(renderTarget, color, depth, stencil) {
  console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead.");
  this.setRenderTarget(renderTarget);
  this.clear(color, depth, stencil);
};
WebGLRenderer.prototype.animate = function(callback) {
  console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop().");
  this.setAnimationLoop(callback);
};
WebGLRenderer.prototype.getCurrentRenderTarget = function() {
  console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget().");
  return this.getRenderTarget();
};
WebGLRenderer.prototype.getMaxAnisotropy = function() {
  console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy().");
  return this.capabilities.getMaxAnisotropy();
};
WebGLRenderer.prototype.getPrecision = function() {
  console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision.");
  return this.capabilities.precision;
};
WebGLRenderer.prototype.resetGLState = function() {
  console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset().");
  return this.state.reset();
};
WebGLRenderer.prototype.supportsFloatTextures = function() {
  console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' ).");
  return this.extensions.get("OES_texture_float");
};
WebGLRenderer.prototype.supportsHalfFloatTextures = function() {
  console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' ).");
  return this.extensions.get("OES_texture_half_float");
};
WebGLRenderer.prototype.supportsStandardDerivatives = function() {
  console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' ).");
  return this.extensions.get("OES_standard_derivatives");
};
WebGLRenderer.prototype.supportsCompressedTextureS3TC = function() {
  console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' ).");
  return this.extensions.get("WEBGL_compressed_texture_s3tc");
};
WebGLRenderer.prototype.supportsCompressedTexturePVRTC = function() {
  console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' ).");
  return this.extensions.get("WEBGL_compressed_texture_pvrtc");
};
WebGLRenderer.prototype.supportsBlendMinMax = function() {
  console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' ).");
  return this.extensions.get("EXT_blend_minmax");
};
WebGLRenderer.prototype.supportsVertexTextures = function() {
  console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures.");
  return this.capabilities.vertexTextures;
};
WebGLRenderer.prototype.supportsInstancedArrays = function() {
  console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' ).");
  return this.extensions.get("ANGLE_instanced_arrays");
};
WebGLRenderer.prototype.enableScissorTest = function(boolean) {
  console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest().");
  this.setScissorTest(boolean);
};
WebGLRenderer.prototype.initMaterial = function() {
  console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.");
};
WebGLRenderer.prototype.addPrePlugin = function() {
  console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.");
};
WebGLRenderer.prototype.addPostPlugin = function() {
  console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.");
};
WebGLRenderer.prototype.updateShadowMap = function() {
  console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.");
};
WebGLRenderer.prototype.setFaceCulling = function() {
  console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.");
};
WebGLRenderer.prototype.allocTextureUnit = function() {
  console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.");
};
WebGLRenderer.prototype.setTexture = function() {
  console.warn("THREE.WebGLRenderer: .setTexture() has been removed.");
};
WebGLRenderer.prototype.setTexture2D = function() {
  console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.");
};
WebGLRenderer.prototype.setTextureCube = function() {
  console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.");
};
WebGLRenderer.prototype.getActiveMipMapLevel = function() {
  console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel().");
  return this.getActiveMipmapLevel();
};
Object.defineProperties(WebGLRenderer.prototype, {
  shadowMapEnabled: {
    get: function() {
      return this.shadowMap.enabled;
    },
    set: function(value) {
      console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled.");
      this.shadowMap.enabled = value;
    }
  },
  shadowMapType: {
    get: function() {
      return this.shadowMap.type;
    },
    set: function(value) {
      console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type.");
      this.shadowMap.type = value;
    }
  },
  shadowMapCullFace: {
    get: function() {
      console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.");
      return void 0;
    },
    set: function() {
      console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.");
    }
  },
  context: {
    get: function() {
      console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead.");
      return this.getContext();
    }
  },
  vr: {
    get: function() {
      console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr");
      return this.xr;
    }
  },
  gammaInput: {
    get: function() {
      console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.");
      return false;
    },
    set: function() {
      console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.");
    }
  },
  gammaOutput: {
    get: function() {
      console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead.");
      return false;
    },
    set: function(value) {
      console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead.");
      this.outputEncoding = value === true ? sRGBEncoding : LinearEncoding;
    }
  },
  toneMappingWhitePoint: {
    get: function() {
      console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.");
      return 1;
    },
    set: function() {
      console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.");
    }
  },
  gammaFactor: {
    get: function() {
      console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.");
      return 2;
    },
    set: function() {
      console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.");
    }
  }
});
Object.defineProperties(WebGLShadowMap.prototype, {
  cullFace: {
    get: function() {
      console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.");
      return void 0;
    },
    set: function() {
      console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.");
    }
  },
  renderReverseSided: {
    get: function() {
      console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.");
      return void 0;
    },
    set: function() {
      console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.");
    }
  },
  renderSingleSided: {
    get: function() {
      console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.");
      return void 0;
    },
    set: function() {
      console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.");
    }
  }
});
Object.defineProperties(WebGLRenderTarget.prototype, {
  wrapS: {
    get: function() {
      console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS.");
      return this.texture.wrapS;
    },
    set: function(value) {
      console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS.");
      this.texture.wrapS = value;
    }
  },
  wrapT: {
    get: function() {
      console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT.");
      return this.texture.wrapT;
    },
    set: function(value) {
      console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT.");
      this.texture.wrapT = value;
    }
  },
  magFilter: {
    get: function() {
      console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter.");
      return this.texture.magFilter;
    },
    set: function(value) {
      console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter.");
      this.texture.magFilter = value;
    }
  },
  minFilter: {
    get: function() {
      console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter.");
      return this.texture.minFilter;
    },
    set: function(value) {
      console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter.");
      this.texture.minFilter = value;
    }
  },
  anisotropy: {
    get: function() {
      console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy.");
      return this.texture.anisotropy;
    },
    set: function(value) {
      console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy.");
      this.texture.anisotropy = value;
    }
  },
  offset: {
    get: function() {
      console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset.");
      return this.texture.offset;
    },
    set: function(value) {
      console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset.");
      this.texture.offset = value;
    }
  },
  repeat: {
    get: function() {
      console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat.");
      return this.texture.repeat;
    },
    set: function(value) {
      console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat.");
      this.texture.repeat = value;
    }
  },
  format: {
    get: function() {
      console.warn("THREE.WebGLRenderTarget: .format is now .texture.format.");
      return this.texture.format;
    },
    set: function(value) {
      console.warn("THREE.WebGLRenderTarget: .format is now .texture.format.");
      this.texture.format = value;
    }
  },
  type: {
    get: function() {
      console.warn("THREE.WebGLRenderTarget: .type is now .texture.type.");
      return this.texture.type;
    },
    set: function(value) {
      console.warn("THREE.WebGLRenderTarget: .type is now .texture.type.");
      this.texture.type = value;
    }
  },
  generateMipmaps: {
    get: function() {
      console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps.");
      return this.texture.generateMipmaps;
    },
    set: function(value) {
      console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps.");
      this.texture.generateMipmaps = value;
    }
  }
});
Audio.prototype.load = function(file) {
  console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");
  const scope = this;
  const audioLoader = new AudioLoader();
  audioLoader.load(file, function(buffer) {
    scope.setBuffer(buffer);
  });
  return this;
};
AudioAnalyser.prototype.getData = function() {
  console.warn("THREE.AudioAnalyser: .getData() is now .getFrequencyData().");
  return this.getFrequencyData();
};
CubeCamera.prototype.updateCubeMap = function(renderer, scene) {
  console.warn("THREE.CubeCamera: .updateCubeMap() is now .update().");
  return this.update(renderer, scene);
};
CubeCamera.prototype.clear = function(renderer, color, depth, stencil) {
  console.warn("THREE.CubeCamera: .clear() is now .renderTarget.clear().");
  return this.renderTarget.clear(renderer, color, depth, stencil);
};
ImageUtils.crossOrigin = void 0;
ImageUtils.loadTexture = function(url, mapping, onLoad, onError) {
  console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");
  const loader = new TextureLoader();
  loader.setCrossOrigin(this.crossOrigin);
  const texture = loader.load(url, onLoad, void 0, onError);
  if (mapping)
    texture.mapping = mapping;
  return texture;
};
ImageUtils.loadTextureCube = function(urls, mapping, onLoad, onError) {
  console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");
  const loader = new CubeTextureLoader();
  loader.setCrossOrigin(this.crossOrigin);
  const texture = loader.load(urls, onLoad, void 0, onError);
  if (mapping)
    texture.mapping = mapping;
  return texture;
};
ImageUtils.loadCompressedTexture = function() {
  console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.");
};
ImageUtils.loadCompressedTextureCube = function() {
  console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.");
};
if (typeof __THREE_DEVTOOLS__ !== "undefined") {
  __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: {
    revision: REVISION
  } }));
}
if (typeof window !== "undefined") {
  if (window.__THREE__) {
    console.warn("WARNING: Multiple instances of Three.js being imported.");
  } else {
    window.__THREE__ = REVISION;
  }
}

// src/Gradient/comps/GradientMesh/GradientMesh.tsx
import { useFiber } from "../../../useFiber.js";

// src/Gradient/comps/GradientMesh/glsl/shader.frag
var shader_default = "uniform float time;uniform vec3 color;varying vec2 vUv;\n#pragma glslify: random = require(glsl-random)\nvoid main(){gl_FragColor.rgba=vec4(0.5+0.3*sin(vUv.yxx+time)+color,1.0);}";

// src/Gradient/comps/GradientMesh/glsl/shader.vert
var shader_default2 = "varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}";

// src/Gradient/comps/GradientMesh/GradientMesh.tsx
var GradientMesh = () => {
  const { useFrame, extend, shaderMaterial } = useFiber();
  const ColorShiftMaterial = shaderMaterial({
    time: 0,
    color: new Color(0.05, 0, 0.025)
  }, shader_default2, shader_default);
  extend({ ColorShiftMaterial });
  const mesh = useRef();
  useFrame((state, delta) => mesh.current.rotation.x += 0.01);
  return /* @__PURE__ */ React.createElement("mesh", {
    ref: mesh,
    rotation: [0.3, 0.3, 0]
  }, /* @__PURE__ */ React.createElement("boxGeometry", {
    args: [1, 1, 1]
  }), /* @__PURE__ */ React.createElement("colorShiftMaterial", {
    key: ColorShiftMaterial.key,
    time: 3
  }));
};
export {
  GradientMesh
};
/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
