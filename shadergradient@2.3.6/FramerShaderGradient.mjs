import "./chunk-35NIH65G.mjs";
import {
  ShaderGradient
} from "./chunk-Z5GDDOMG.mjs";
import "./chunk-BKMGN7IO.mjs";
import "./chunk-4CNC3MGP.mjs";
import "./chunk-WGOL3MLC.mjs";
import "./chunk-HTJBLCUE.mjs";
import "./chunk-FVJI5A2G.mjs";
import "./chunk-USQFKVUW.mjs";
import "./chunk-KXZH64OP.mjs";
import "./chunk-OJ2FJ367.mjs";
import "./chunk-EW3CJI4E.mjs";
import "./chunk-AU32OSCX.mjs";
import "./chunk-XPELZ53J.mjs";
import "./chunk-N6TUE7XZ.mjs";
import "./chunk-OUMQVT4Y.mjs";
import "./chunk-4NRCS6EB.mjs";
import "./chunk-3U6A2N6D.mjs";
import "./chunk-LZ3DDWYG.mjs";
import "./chunk-X2NOPSAQ.mjs";
import "./chunk-3SCKP3WD.mjs";
import "./chunk-M2MFZVXL.mjs";
import "./chunk-AVV7TPJS.mjs";
import "./chunk-F5B5J54Z.mjs";
import "./chunk-AX2D4CR5.mjs";
import "./chunk-EQTKUIXJ.mjs";
import "./chunk-ZLTLOVKT.mjs";
import "./chunk-MSKNCSEN.mjs";
import "./chunk-WBM42ICI.mjs";
import "./chunk-V62OMFTZ.mjs";
import "./chunk-NVTGOKBX.mjs";
import "./chunk-NXCPH64Q.mjs";
import "./chunk-H2RSKIPT.mjs";
import "./chunk-KR7RCWZK.mjs";
import "./chunk-Q2QAY7NM.mjs";
import "./chunk-NYQYF5HU.mjs";
import "./chunk-GLLM6F27.mjs";
import "./chunk-UDZCNACG.mjs";
import "./chunk-PBBG73XU.mjs";
import "./chunk-6ZGZBJSV.mjs";
import "./chunk-4GZNORIL.mjs";
import "./chunk-R2XBTOLG.mjs";
import "./chunk-5BVQK6OK.mjs";
import "./chunk-CMNL4XFD.mjs";
import "./chunk-XILNFAQ3.mjs";
import "./chunk-4DHS567T.mjs";
import "./chunk-73SSHDUK.mjs";
import "./chunk-IGOCR32Y.mjs";
import "./chunk-3BRAYX2W.mjs";
import {
  formatFramerProps
} from "./chunk-WNGYPXFW.mjs";
import "./chunk-BI5IV7LU.mjs";
import "./chunk-X2DICZQA.mjs";
import "./chunk-UFEBSNTT.mjs";
import "./chunk-YXAOGFVW.mjs";
import "./chunk-EDAOQMIG.mjs";
import "./chunk-LGYLXRYF.mjs";
import "./chunk-B5OTQHNJ.mjs";
import "./chunk-RANVICU2.mjs";
import "./chunk-6A4LZ7FD.mjs";
import {
  ShaderGradientCanvas,
  useShaderGradientCanvasContext
} from "./chunk-UJ5V3DPG.mjs";
import "./chunk-5HVKDCHP.mjs";
import "./chunk-73SH6GTX.mjs";
import "./chunk-BT6X4JN2.mjs";
import "./chunk-WPNBLVEI.mjs";
import {
  propertyControls
} from "./chunk-3ONLEHDB.mjs";
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
