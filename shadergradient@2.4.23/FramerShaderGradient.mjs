import "./chunk-35NIH65G.mjs";
import {
  propertyControls
} from "./chunk-RJXQ2OEQ.mjs";
import {
  ShaderGradient
} from "./chunk-FRK2XAMT.mjs";
import "./chunk-BKMGN7IO.mjs";
import "./chunk-SLC3XING.mjs";
import "./chunk-WBM42ICI.mjs";
import "./chunk-DCAA2VAD.mjs";
import "./chunk-WGOL3MLC.mjs";
import "./chunk-2PUXPQ5M.mjs";
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
import "./chunk-NXPMTKJI.mjs";
import "./chunk-ITFFVSW2.mjs";
import "./chunk-4W65BB7P.mjs";
import "./chunk-F5B5J54Z.mjs";
import "./chunk-74SM6P3D.mjs";
import "./chunk-EQTKUIXJ.mjs";
import "./chunk-354V437W.mjs";
import "./chunk-YKAVLCYB.mjs";
import "./chunk-6A4LZ7FD.mjs";
import "./chunk-NVTGOKBX.mjs";
import "./chunk-4YIDX7JU.mjs";
import "./chunk-RJZZIMJY.mjs";
import "./chunk-JF5A2SDR.mjs";
import "./chunk-QJPNE4GC.mjs";
import "./chunk-B5RRTGOC.mjs";
import "./chunk-APRV6APK.mjs";
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
} from "./chunk-W75LGFSA.mjs";
import "./chunk-BM6YAGTL.mjs";
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
