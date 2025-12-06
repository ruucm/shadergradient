// src/ShaderGradient/Mesh/Geometry.tsx
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
var meshCount = 192;
var resinWaterPlaneSize = 5;
var resinWaterPlaneSegments = 128;
function Geometry({ type, shader }) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    type === "plane" && (shader === "resin" ? /* @__PURE__ */ jsx("planeGeometry", { args: [10, 10, meshCount, meshCount] }) : /* @__PURE__ */ jsx("planeGeometry", { args: [10, 10, 1, meshCount] })),
    type === "sphere" && /* @__PURE__ */ jsx("icosahedronGeometry", { args: [1, meshCount / 3] }),
    type === "waterPlane" && (shader === "resin" ? /* @__PURE__ */ jsx(
      "planeGeometry",
      {
        args: [
          resinWaterPlaneSize,
          resinWaterPlaneSize,
          resinWaterPlaneSegments,
          resinWaterPlaneSegments
        ]
      }
    ) : /* @__PURE__ */ jsx("planeGeometry", { args: [10, 10, meshCount, meshCount] }))
  ] });
}

export {
  Geometry
};
