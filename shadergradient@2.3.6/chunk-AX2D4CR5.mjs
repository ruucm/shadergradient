import {
  EnvironmentMap
} from "./chunk-ZLTLOVKT.mjs";

// src/ShaderGradient/Lights/Lights.tsx
import { Suspense } from "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
function Lights({ lightType, brightness, envPreset }) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    lightType === "3d" && /* @__PURE__ */ jsx("ambientLight", { intensity: (brightness || 1) * Math.PI }),
    lightType === "env" && /* @__PURE__ */ jsx(Suspense, { fallback: /* @__PURE__ */ jsx(Loader, {}), children: /* @__PURE__ */ jsx(
      EnvironmentMap,
      {
        envPreset,
        background: false,
        loadingCallback: () => void 0
      }
    ) })
  ] });
}
function Loader() {
  return /* @__PURE__ */ jsx("ambientLight", { intensity: 0.4 });
}

export {
  Lights
};
