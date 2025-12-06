import "./chunk-35NIH65G.mjs";
import {
  ShaderGradient
} from "./chunk-ID2BAQGT.mjs";
import "./chunk-BKMGN7IO.mjs";
import "./chunk-T72WV6EA.mjs";
import "./chunk-QICB2M5A.mjs";
import "./chunk-WGOL3MLC.mjs";
import "./chunk-MSD542H5.mjs";
import "./chunk-74G4S7ON.mjs";
import "./chunk-5UWXYZQP.mjs";
import "./chunk-3U6A2N6D.mjs";
import "./chunk-C3LJ7QMH.mjs";
import "./chunk-N6TUE7XZ.mjs";
import "./chunk-IXACYCHN.mjs";
import "./chunk-4NRCS6EB.mjs";
import "./chunk-NP2HRVN3.mjs";
import "./chunk-24QXT3Y2.mjs";
import "./chunk-5JQBBDWP.mjs";
import "./chunk-3ZE57ROM.mjs";
import "./chunk-USQFKVUW.mjs";
import "./chunk-X2NOPSAQ.mjs";
import "./chunk-6IANST77.mjs";
import "./chunk-DW67YER5.mjs";
import "./chunk-TZMAMK5G.mjs";
import "./chunk-F5B5J54Z.mjs";
import "./chunk-OYQH36RG.mjs";
import "./chunk-EQTKUIXJ.mjs";
import "./chunk-E7IIU5HH.mjs";
import "./chunk-WDWZNOPF.mjs";
import "./chunk-OX5DEXNC.mjs";
import "./chunk-GT7W6ZMX.mjs";
import "./chunk-LGZSQY7E.mjs";
import "./chunk-NVTGOKBX.mjs";
import "./chunk-S6ISX3PZ.mjs";
import "./chunk-RNZVIT5T.mjs";
import "./chunk-CMNL4XFD.mjs";
import "./chunk-R2XBTOLG.mjs";
import "./chunk-5BVQK6OK.mjs";
import "./chunk-R4TL5TQS.mjs";
import "./chunk-73SSHDUK.mjs";
import "./chunk-IGOCR32Y.mjs";
import "./chunk-4DHS567T.mjs";
import "./chunk-H2RSKIPT.mjs";
import "./chunk-KR7RCWZK.mjs";
import "./chunk-Q2QAY7NM.mjs";
import "./chunk-NYQYF5HU.mjs";
import "./chunk-HQERVJWA.mjs";
import "./chunk-M7ODZ4K7.mjs";
import "./chunk-GLLM6F27.mjs";
import "./chunk-UDZCNACG.mjs";
import "./chunk-PBBG73XU.mjs";
import "./chunk-6ZGZBJSV.mjs";
import "./chunk-QRRZJ6IM.mjs";
import {
  formatFramerProps
} from "./chunk-WNGYPXFW.mjs";
import "./chunk-BI5IV7LU.mjs";
import "./chunk-6TUUPGNJ.mjs";
import "./chunk-MNXTAUPQ.mjs";
import "./chunk-3BM7YWKO.mjs";
import "./chunk-2W7ABT4Q.mjs";
import "./chunk-LGYLXRYF.mjs";
import "./chunk-QTOXSK6M.mjs";
import "./chunk-PZT7BDFU.mjs";
import "./chunk-FO6QGQLC.mjs";
import {
  ShaderGradientCanvas,
  useShaderGradientCanvasContext
} from "./chunk-YM3NB2ZH.mjs";
import "./chunk-ROJWBSDB.mjs";
import "./chunk-NLXVRQGB.mjs";
import "./chunk-QDIU42HX.mjs";
import "./chunk-WPNBLVEI.mjs";
import {
  propertyControls
} from "./chunk-DHGE2QGS.mjs";
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
