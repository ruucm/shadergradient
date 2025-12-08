import {
  __objRest,
  __spreadValues
} from "./chunk-5BEQP2BQ.mjs";

// src/utils/index.ts
function degToRad(deg) {
  return deg * (Math.PI / 180);
}
function dToR(d) {
  return d / 180 * Math.PI;
}
function dToRArr(degrees) {
  return degrees.map((d) => dToR(d));
}
function formatUrlString(urlString) {
  return urlString.replace("http://localhost:3001/customize", "").replace("https://shadergradient.co/customize", "").replace("https://www.shadergradient.co/customize", "");
}
function formatFramerProps(_a) {
  var _b = _a, {
    position,
    rotation,
    cameraAngle,
    noise,
    canvas
  } = _b, rest = __objRest(_b, [
    "position",
    "rotation",
    "cameraAngle",
    "noise",
    "canvas"
  ]);
  const { positionX, positionY, positionZ } = position || {};
  const { rotationX, rotationY, rotationZ } = rotation || {};
  const { cAzimuthAngle, cPolarAngle } = cameraAngle || {};
  const { uDensity, uStrength } = noise || {};
  const {
    pixelDensity,
    fov,
    preserveDrawingBuffer,
    powerPreference
  } = canvas || {};
  const parsedPowerPreference = powerPreference && powerPreference !== "default" ? powerPreference : void 0;
  return __spreadValues({
    positionX,
    positionY,
    positionZ,
    rotationX,
    rotationY,
    rotationZ,
    cAzimuthAngle,
    cPolarAngle,
    uDensity,
    uStrength,
    pixelDensity,
    fov,
    preserveDrawingBuffer,
    powerPreference: parsedPowerPreference
  }, rest);
}

export {
  degToRad,
  dToR,
  dToRArr,
  formatUrlString,
  formatFramerProps
};
