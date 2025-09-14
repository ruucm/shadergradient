import "./chunk-35NIH65G.mjs";
import {
  ShaderGradient
} from "./chunk-IIKUVRC3.mjs";
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
import "./chunk-KHNVVX6O.mjs";
import "./chunk-EQTKUIXJ.mjs";
import "./chunk-IJNCU5GA.mjs";
import "./chunk-PDTGKIU6.mjs";
import "./chunk-BKMGN7IO.mjs";
import "./chunk-2IS4ZGQD.mjs";
import "./chunk-WBM42ICI.mjs";
import "./chunk-XXCPKSPK.mjs";
import "./chunk-ANSGP5EK.mjs";
import "./chunk-UTX7GT3M.mjs";
import "./chunk-6ZGZBJSV.mjs";
import "./chunk-UDZCNACG.mjs";
import "./chunk-PBBG73XU.mjs";
import "./chunk-HCVCPLUE.mjs";
import "./chunk-52PU6OTS.mjs";
import "./chunk-VSA6O5KE.mjs";
import "./chunk-WV33TMXM.mjs";
import "./chunk-R4TL5TQS.mjs";
import "./chunk-73SSHDUK.mjs";
import "./chunk-IGOCR32Y.mjs";
import "./chunk-4DHS567T.mjs";
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
} from "./chunk-Z3GKY7BO.mjs";
import "./chunk-5HVKDCHP.mjs";
import "./chunk-4MOUWEMW.mjs";
import "./chunk-Z4XR7UL5.mjs";
import "./chunk-WPNBLVEI.mjs";
import {
  propertyControls
} from "./chunk-V2XP3MOF.mjs";
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
