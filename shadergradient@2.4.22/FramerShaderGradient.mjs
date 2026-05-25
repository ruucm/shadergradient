import "./chunk-35NIH65G.mjs";
import {
  propertyControls
} from "./chunk-RJXQ2OEQ.mjs";
import {
  ShaderGradient
} from "./chunk-XLHYI4SZ.mjs";
import "./chunk-BKMGN7IO.mjs";
import "./chunk-XYYVFUYE.mjs";
import "./chunk-WBM42ICI.mjs";
import "./chunk-WGK4E7ZB.mjs";
import "./chunk-WGOL3MLC.mjs";
import "./chunk-FDKPON3Z.mjs";
import "./chunk-OJ2FJ367.mjs";
import "./chunk-QVWWXOVQ.mjs";
import "./chunk-EW3CJI4E.mjs";
import "./chunk-USQFKVUW.mjs";
import "./chunk-KXZH64OP.mjs";
import "./chunk-AU32OSCX.mjs";
import "./chunk-2U7BPWZ5.mjs";
import "./chunk-3U6A2N6D.mjs";
import "./chunk-LZ3DDWYG.mjs";
import "./chunk-N6TUE7XZ.mjs";
import "./chunk-OUMQVT4Y.mjs";
import "./chunk-4NRCS6EB.mjs";
import "./chunk-X2NOPSAQ.mjs";
import "./chunk-L5NP72F6.mjs";
import "./chunk-JTP6Q23H.mjs";
import "./chunk-BNDMFFKH.mjs";
import "./chunk-F5B5J54Z.mjs";
import "./chunk-HRBHNSWY.mjs";
import "./chunk-EQTKUIXJ.mjs";
import "./chunk-S4T5IQYW.mjs";
import "./chunk-AQGXJNKZ.mjs";
import "./chunk-6A4LZ7FD.mjs";
import "./chunk-NVTGOKBX.mjs";
import "./chunk-EZZRCLQH.mjs";
import "./chunk-RFI3BCGT.mjs";
import "./chunk-TGFYKEKF.mjs";
import "./chunk-S53F6LSQ.mjs";
import "./chunk-RXDJO4MI.mjs";
import "./chunk-4I5Q6CJM.mjs";
import "./chunk-LGYLXRYF.mjs";
import "./chunk-BO6EQTP3.mjs";
import "./chunk-4GZNORIL.mjs";
import "./chunk-R2XBTOLG.mjs";
import "./chunk-5BVQK6OK.mjs";
import "./chunk-CMNL4XFD.mjs";
import "./chunk-R4TL5TQS.mjs";
import "./chunk-73SSHDUK.mjs";
import "./chunk-IGOCR32Y.mjs";
import "./chunk-4DHS567T.mjs";
import "./chunk-H2RSKIPT.mjs";
import "./chunk-KR7RCWZK.mjs";
import "./chunk-Q2QAY7NM.mjs";
import "./chunk-NYQYF5HU.mjs";
import "./chunk-GLLM6F27.mjs";
import "./chunk-UDZCNACG.mjs";
import "./chunk-PBBG73XU.mjs";
import "./chunk-6ZGZBJSV.mjs";
import "./chunk-QRRZJ6IM.mjs";
import {
  formatFramerProps
} from "./chunk-ULEV7Y7T.mjs";
import "./chunk-BI5IV7LU.mjs";
import "./chunk-XS23OVEI.mjs";
import {
  ShaderGradientCanvas,
  useShaderGradientCanvasContext
} from "./chunk-QKLBBMBM.mjs";
import "./chunk-U5ITKQPR.mjs";
import "./chunk-RVPDO3VD.mjs";
import "./chunk-BT6X4JN2.mjs";
import "./chunk-JITLJLKU.mjs";
import "./chunk-PR7ME7PU.mjs";
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
    noise,
    canvas
  } = _b, rest = __objRest(_b, [
    "position",
    "rotation",
    "cameraAngle",
    "noise",
    "canvas"
  ]);
  const props = formatFramerProps(__spreadValues({
    position,
    rotation,
    cameraAngle,
    noise,
    canvas
  }, rest));
  return /* @__PURE__ */ jsx(ShaderGradient, __spreadValues({}, props));
}
FramerShaderGradient.propertyControls = propertyControls(ControlType);
export {
  FramerShaderGradient,
  ShaderGradientCanvas,
  useShaderGradientCanvasContext
};
