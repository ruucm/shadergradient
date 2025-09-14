import {
  Geometry
} from "./chunk-WBM42ICI.mjs";
import {
  Materials
} from "./chunk-XCPFXDDS.mjs";
import {
  shaders_exports
} from "./chunk-4UWNUN5T.mjs";
import {
  debug
} from "./chunk-3BRAYX2W.mjs";
import {
  dToRArr
} from "./chunk-WNGYPXFW.mjs";

// src/ShaderGradient/Mesh/Mesh.tsx
import { jsx, jsxs } from "react/jsx-runtime";
function Mesh({
  animate,
  range,
  rangeStart,
  rangeEnd,
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
  reflection,
  uTime,
  uSpeed,
  uDensity,
  uStrength,
  uFrequency,
  uAmplitude,
  shader
}) {
  const { vertex, fragment } = shaders_exports[shader][type];
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
            range,
            rangeStart,
            rangeEnd,
            reflection,
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
            vertexShader: vertex,
            fragmentShader: fragment,
            onInit: (material) => {
              debug.performance("material (onInit)", material);
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
