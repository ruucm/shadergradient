import "./chunk-35NIH65G.mjs";
import {
  ShaderGradient
} from "./chunk-PWLTWYDD.mjs";
import "./chunk-WGOL3MLC.mjs";
import "./chunk-5XTCRLBF.mjs";
import "./chunk-2S3VJM34.mjs";
import "./chunk-FZIV7POA.mjs";
import "./chunk-IRMTC4UN.mjs";
import "./chunk-YUIDVF63.mjs";
import "./chunk-4Z3JUAHA.mjs";
import "./chunk-USQFKVUW.mjs";
import "./chunk-XLXOMSVB.mjs";
import "./chunk-N6TUE7XZ.mjs";
import "./chunk-3U6A2N6D.mjs";
import "./chunk-O7SDERYP.mjs";
import "./chunk-KD5UHE3V.mjs";
import "./chunk-4NRCS6EB.mjs";
import "./chunk-X2NOPSAQ.mjs";
import "./chunk-F5B5J54Z.mjs";
import "./chunk-RHKTMS4W.mjs";
import "./chunk-EQTKUIXJ.mjs";
import "./chunk-USWOWOPE.mjs";
import "./chunk-PDTGKIU6.mjs";
import "./chunk-BKMGN7IO.mjs";
import "./chunk-LZ42EXNT.mjs";
import "./chunk-WBM42ICI.mjs";
import "./chunk-EITT6UCO.mjs";
import "./chunk-DIQKYJOK.mjs";
import "./chunk-HCVCPLUE.mjs";
import "./chunk-52PU6OTS.mjs";
import "./chunk-VSA6O5KE.mjs";
import "./chunk-WV33TMXM.mjs";
import "./chunk-T2ZANVDY.mjs";
import "./chunk-Q2QAY7NM.mjs";
import "./chunk-NYQYF5HU.mjs";
import "./chunk-KR7RCWZK.mjs";
import "./chunk-3BRAYX2W.mjs";
import "./chunk-O7UJLD4S.mjs";
import "./chunk-FFNQY2IE.mjs";
import "./chunk-R74NQAQK.mjs";
import {
  formatFramerProps
} from "./chunk-WNGYPXFW.mjs";
import "./chunk-BI5IV7LU.mjs";
import {
  ShaderGradientCanvas,
  useShaderGradientCanvasContext
} from "./chunk-VBCWBBEX.mjs";
import "./chunk-5HVKDCHP.mjs";
import "./chunk-4MOUWEMW.mjs";
import "./chunk-Z4XR7UL5.mjs";
import "./chunk-WPNBLVEI.mjs";
import {
  propertyControls
} from "./chunk-E4YB42Q6.mjs";
import {
  __objRest,
  __spreadValues
} from "./chunk-5BEQP2BQ.mjs";

// src/FramerShaderGradient.tsx
import { ControlType } from "framer";
import { jsx } from "react/jsx-runtime";
function FramerShaderGradient(_a) {
  var _b = _a, {
    position,
    rotation,
    cameraAngle,
    noise
  } = _b, rest = __objRest(_b, [
    "position",
    "rotation",
    "cameraAngle",
    "noise"
  ]);
  const props = formatFramerProps(__spreadValues({
    position,
    rotation,
    cameraAngle,
    noise
  }, rest));
  return /* @__PURE__ */ jsx(ShaderGradient, __spreadValues({}, props));
}
FramerShaderGradient.propertyControls = propertyControls(ControlType);
export {
  FramerShaderGradient,
  ShaderGradientCanvas,
  useShaderGradientCanvasContext
};
