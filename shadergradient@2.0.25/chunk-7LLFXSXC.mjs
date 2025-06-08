import {
  Mesh
} from "./chunk-7C3K3MU2.mjs";
import {
  PostProcessing
} from "./chunk-3ZHZMFDB.mjs";
import {
  Controls
} from "./chunk-2G4RFBP6.mjs";
import {
  Lights
} from "./chunk-NCKUTFKN.mjs";
import {
  __export1
} from "./chunk-AVODCFKL.mjs";
import {
  formatUrlString
} from "./chunk-G7COPUKV.mjs";
import {
  presets
} from "./chunk-VTSZNOAZ.mjs";
import {
  __objRest,
  __spreadValues
} from "./chunk-5BEQP2BQ.mjs";

// src/ShaderGradient/ShaderGradient.tsx
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
function ShaderGradient(passedProps) {
  const _a = __spreadValues(__spreadValues({}, presets.halo.props), passedProps), { control, urlString } = _a, rest = __objRest(_a, ["control", "urlString"]);
  let props = rest;
  if (control === "query")
    props = __export1(formatUrlString(urlString), {
      parseNumbers: true,
      parseBooleans: true,
      arrayFormat: "index"
    });
  const _b = props, { lightType, envPreset, brightness, grain, toggleAxis } = _b, others = __objRest(_b, ["lightType", "envPreset", "brightness", "grain", "toggleAxis"]);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Mesh, __spreadValues({}, props)),
    /* @__PURE__ */ jsx(
      Lights,
      {
        lightType,
        brightness,
        envPreset
      }
    ),
    grain !== "off" && /* @__PURE__ */ jsx(PostProcessing, {}),
    /* @__PURE__ */ jsx(Controls, __spreadValues({}, props))
  ] });
}

export {
  ShaderGradient
};
