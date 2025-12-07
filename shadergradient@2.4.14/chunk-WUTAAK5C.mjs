import {
  Materials
} from "./chunk-FZNUZZPQ.mjs";
import {
  Geometry
} from "./chunk-WBM42ICI.mjs";
import {
  shaders_exports
} from "./chunk-WABK53HJ.mjs";
import {
  debug
} from "./chunk-QRRZJ6IM.mjs";
import {
  dToRArr
} from "./chunk-F63IJTWN.mjs";
import {
  colorToRgb
} from "./chunk-BI5IV7LU.mjs";
import {
  __spreadValues
} from "./chunk-5BEQP2BQ.mjs";

// src/ShaderGradient/Mesh/Mesh.tsx
import { jsx, jsxs } from "react/jsx-runtime";
function Mesh({
  animate,
  range,
  rangeStart,
  rangeEnd,
  loop,
  loopDuration,
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
  const baseUniforms = {
    colors: [color1, color2, color3],
    uTime,
    uSpeed,
    uLoadingTime: 1,
    // no loading animation
    uNoiseDensity: uDensity,
    uNoiseStrength: uStrength,
    uFrequency,
    uAmplitude,
    uIntensity: 0.5,
    uLoop: loop === "on" ? 1 : 0,
    uLoopDuration: loopDuration || 5
  };
  const glassUniforms = shader === "glass" ? {
    uColor1: colorToRgb(color1),
    uColor2: colorToRgb(color2),
    uColor3: colorToRgb(color3),
    uTransparency: 0.1,
    uRefraction: 1.5,
    uChromaticAberration: 0.1,
    uFresnelPower: 2,
    uReflectivity: 0.9,
    uWaveAmplitude: 0.02,
    uWaveFrequency: 5,
    uDistortion: 0.1,
    uFlowSpeed: 0.1,
    uFlowDirection: { x: 1, y: 0.5 },
    uLiquidEffect: 0.5,
    uFoamIntensity: 0.3,
    envMapIntensity: 1
  } : {};
  const uniforms = __spreadValues(__spreadValues({}, baseUniforms), glassUniforms);
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
            loop,
            loopDuration,
            reflection,
            shader,
            uniforms,
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
