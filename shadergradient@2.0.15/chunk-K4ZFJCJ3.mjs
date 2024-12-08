import {
  fragmentSphere_default,
  fragment_default,
  vertexSphere_default,
  vertex_default
} from "./chunk-WMVG427C.mjs";
import {
  Geometry
} from "./chunk-WBM42ICI.mjs";
import {
  Materials
} from "./chunk-LJBCYGOI.mjs";
import {
  dToRArr
} from "./chunk-G7COPUKV.mjs";

// src/ShaderGradient/Mesh/Mesh.tsx
import { jsx, jsxs } from "react/jsx-runtime";
function Mesh({
  animate,
  positionX,
  positionY,
  positionZ,
  rotationX,
  rotationY,
  rotationZ,
  type,
  color1,
  color2,
  color3,
  uTime,
  uSpeed,
  uDensity,
  uStrength,
  uFrequency,
  uAmplitude
}) {
  return /* @__PURE__ */ jsxs(
    "mesh",
    {
      name: "shadergradient-mesh",
      position: [positionX, positionY, positionZ],
      rotation: dToRArr([rotationX, rotationY, rotationZ]),
      children: [
        /* @__PURE__ */ jsx(Geometry, { type }),
        /* @__PURE__ */ jsx(
          Materials,
          {
            animate,
            uniforms: {
              colors: [color1, color2, color3],
              uTime,
              uSpeed,
              uLoadingTime: 1,
              // no loading animation
              uNoiseDensity: uDensity,
              uNoiseStrength: uStrength,
              uFrequency,
              uAmplitude,
              uIntensity: 0.5
            },
            vertexShader: type === "sphere" ? vertexSphere_default : vertex_default,
            fragmentShader: type === "sphere" ? fragmentSphere_default : fragment_default,
            onInit: (material) => {
              console.log("material (onInit)", material);
            }
          }
        )
      ]
    }
  );
}

export {
  Mesh
};
