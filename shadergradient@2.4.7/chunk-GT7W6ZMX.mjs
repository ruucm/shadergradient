import {
  ResinMaterial
} from "./chunk-LGZSQY7E.mjs";
import {
  colorToRgb,
  formatColor
} from "./chunk-BI5IV7LU.mjs";
import {
  useFrame
} from "./chunk-NLXVRQGB.mjs";
import {
  Clock,
  DoubleSide,
  MeshPhysicalMaterial,
  UniformsUtils
} from "./chunk-QDIU42HX.mjs";
import {
  __spreadValues
} from "./chunk-5BEQP2BQ.mjs";

// src/ShaderGradient/Mesh/Materials.tsx
import { useEffect, useMemo, useRef } from "react";
import { jsx } from "react/jsx-runtime";
var Materials = ({
  animate,
  range,
  rangeStart,
  rangeEnd,
  loop,
  loopDuration,
  reflection,
  uniforms,
  vertexShader,
  fragmentShader,
  onInit,
  shader
}) => {
  const localClockRef = useRef(new Clock());
  if (shader === "resin") {
    return /* @__PURE__ */ jsx(ResinMaterial, { uniforms });
  }
  const material = useMemo(() => {
    const entries = Object.entries(uniforms);
    const colors = uniforms.colors;
    const uC1 = colorToRgb(colors[0]);
    const uC2 = colorToRgb(colors[1]);
    const uC3 = colorToRgb(colors[2]);
    const rgbColors = {
      uC1r: { value: formatColor(uC1 == null ? void 0 : uC1.r) },
      uC1g: { value: formatColor(uC1 == null ? void 0 : uC1.g) },
      uC1b: { value: formatColor(uC1 == null ? void 0 : uC1.b) },
      uC2r: { value: formatColor(uC2 == null ? void 0 : uC2.r) },
      uC2g: { value: formatColor(uC2 == null ? void 0 : uC2.g) },
      uC2b: { value: formatColor(uC2 == null ? void 0 : uC2.b) },
      uC3r: { value: formatColor(uC3 == null ? void 0 : uC3.r) },
      uC3g: { value: formatColor(uC3 == null ? void 0 : uC3.g) },
      uC3b: { value: formatColor(uC3 == null ? void 0 : uC3.b) }
    };
    const uniformValues = entries.reduce((acc, [name, value]) => {
      const uniform = UniformsUtils.clone({ [name]: { value } });
      return __spreadValues(__spreadValues({}, acc), uniform);
    }, {});
    const materialConfig = {
      userData: uniformValues,
      // sync uniform and userData to update uniforms from outside (MeshPhysicalMaterial)
      metalness: shader === "glass" ? 0 : shader === "holographic" ? 0.8 : shader === "liquid" ? 0.1 : 0.2,
      roughness: shader === "glass" ? 0.1 : shader === "holographic" ? 0.2 : shader === "liquid" ? 0.05 : 1 - (typeof reflection === "number" ? reflection : 0.1),
      side: DoubleSide,
      onBeforeCompile: (shader2) => {
        shader2.uniforms = __spreadValues(__spreadValues(__spreadValues({}, shader2.uniforms), uniformValues), rgbColors);
        shader2.vertexShader = vertexShader;
        shader2.fragmentShader = fragmentShader;
      }
      // wireframe: true,
    };
    if (shader === "glass" || shader === "liquid") {
      materialConfig.transparent = true;
      materialConfig.opacity = shader === "liquid" ? 0.6 : 0.3;
      materialConfig.transmission = shader === "liquid" ? 0.95 : 0.9;
      materialConfig.thickness = shader === "liquid" ? 1 : 0.5;
      materialConfig.clearcoat = 1;
      materialConfig.clearcoatRoughness = 0;
      materialConfig.ior = shader === "liquid" ? 1.4 : 1.5;
      materialConfig.envMapIntensity = shader === "liquid" ? 1.5 : 1;
    }
    const material2 = new MeshPhysicalMaterial(materialConfig);
    material2.uniforms = uniformValues;
    entries.forEach(
      ([name]) => Object.defineProperty(material2, name, {
        get: () => material2.uniforms[name].value,
        set: (v) => material2.uniforms[name].value = v
      })
    );
    if (onInit) onInit(material2);
    return material2;
  }, [uniforms, vertexShader, fragmentShader, onInit, reflection, shader]);
  useEffect(() => {
    return () => {
      material.dispose();
    };
  }, [material]);
  useEffect(() => {
    if (animate === "on") {
      localClockRef.current.start();
    } else {
      localClockRef.current.stop();
    }
  }, [animate]);
  useFrame(() => {
    if (animate === "on" && material.userData.uTime) {
      let elapsed = localClockRef.current.getElapsedTime();
      if (loop === "on" && Number.isFinite(loopDuration) && loopDuration > 0) {
        elapsed = elapsed % loopDuration;
        if (material.userData.uLoop) {
          material.userData.uLoop.value = 1;
        }
        if (material.userData.uLoopDuration) {
          material.userData.uLoopDuration.value = loopDuration;
        }
      } else {
        if (material.userData.uLoop) {
          material.userData.uLoop.value = 0;
        }
        if (range === "enabled" && Number.isFinite(rangeStart) && Number.isFinite(rangeEnd) && rangeEnd > rangeStart) {
          elapsed = rangeStart + elapsed;
          if (elapsed >= rangeEnd) {
            elapsed = rangeStart;
            localClockRef.current.start();
          }
        }
      }
      material.userData.uTime.value = elapsed;
    }
  });
  return /* @__PURE__ */ jsx("primitive", { attach: "material", object: material });
};

export {
  Materials
};
