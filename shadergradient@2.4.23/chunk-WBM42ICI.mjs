// src/ShaderGradient/Mesh/Geometry.tsx
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
var meshCount = 192;
function Geometry({ type }) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    type === "plane" && /* @__PURE__ */ jsx("planeGeometry", { args: [10, 10, 1, meshCount] }),
    type === "sphere" && /* @__PURE__ */ jsx("icosahedronGeometry", { args: [1, meshCount / 3] }),
    type === "waterPlane" && /* @__PURE__ */ jsx("planeGeometry", { args: [10, 10, meshCount, meshCount] })
  ] });
}

export {
  Geometry
};
