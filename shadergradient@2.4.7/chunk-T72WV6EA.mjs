import {
  buildResinUniforms,
  useResinDeformation
} from "./chunk-QICB2M5A.mjs";
import {
  Geometry
} from "./chunk-OX5DEXNC.mjs";
import {
  Materials
} from "./chunk-GT7W6ZMX.mjs";
import {
  shaders_exports
} from "./chunk-S6ISX3PZ.mjs";
import {
  debug
} from "./chunk-QRRZJ6IM.mjs";
import {
  dToRArr
} from "./chunk-WNGYPXFW.mjs";
import {
  colorToRgb
} from "./chunk-BI5IV7LU.mjs";
import {
  __spreadValues
} from "./chunk-5BEQP2BQ.mjs";

// src/ShaderGradient/Mesh/Mesh.tsx
import { useRef } from "react";
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
  meshScale,
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
  shader,
  // Resin props
  transmission,
  thickness,
  ior,
  chromaticAberration,
  anisotropy,
  distortion,
  distortionScale,
  temporalDistortion,
  clearcoat,
  clearcoatRoughness
}) {
  const { vertex, fragment } = shaders_exports[shader][type];
  const meshRef = useRef(null);
  useResinDeformation(meshRef, {
    shader,
    type,
    animate,
    uDensity,
    uStrength,
    uAmplitude,
    uSpeed
  });
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
  const glassUniforms = shader === "glass" || shader === "liquid" ? {
    uColor1: colorToRgb(color1),
    uColor2: colorToRgb(color2),
    uColor3: colorToRgb(color3),
    uTransparency: shader === "liquid" ? 0.2 : 0.1,
    uRefraction: shader === "liquid" ? 1.4 : 1.5,
    uChromaticAberration: shader === "liquid" ? 0.2 : 0.1,
    uFresnelPower: shader === "liquid" ? 3 : 2,
    uReflectivity: shader === "liquid" ? 0.95 : 0.9,
    uWaveAmplitude: 0.02,
    uWaveFrequency: 5,
    uDistortion: 0.1,
    uFlowSpeed: 0.1,
    uFlowDirection: { x: 1, y: 0.5 },
    uLiquidEffect: shader === "liquid" ? 1 : 0.5,
    uFoamIntensity: 0.3,
    envMapIntensity: shader === "liquid" ? 1.5 : 1
  } : {};
  const resinUniforms = buildResinUniforms({
    shader,
    color1,
    color2,
    color3,
    transmission,
    thickness,
    ior,
    chromaticAberration,
    anisotropy,
    distortion,
    distortionScale,
    temporalDistortion,
    clearcoat,
    clearcoatRoughness
  });
  const uniforms = __spreadValues(__spreadValues(__spreadValues({}, baseUniforms), glassUniforms), resinUniforms);
  return /* @__PURE__ */ jsxs(
    "mesh",
    {
      name: "shadergradient-mesh",
      ref: meshRef,
      position: [positionX, positionY, positionZ],
      rotation: dToRArr([rotationX, rotationY, rotationZ]),
      scale: [meshScale != null ? meshScale : 1, meshScale != null ? meshScale : 1, meshScale != null ? meshScale : 1],
      children: [
        /* @__PURE__ */ jsx(Geometry, { type, shader }),
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
