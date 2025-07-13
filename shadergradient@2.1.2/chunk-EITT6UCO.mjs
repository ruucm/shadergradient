import {
  colorToRgb,
  formatColor
} from "./chunk-BI5IV7LU.mjs";
import {
  useFrame
} from "./chunk-4MOUWEMW.mjs";
import {
  DoubleSide,
  MeshPhysicalMaterial,
  UniformsUtils
} from "./chunk-Z4XR7UL5.mjs";
import {
  __spreadValues
} from "./chunk-5BEQP2BQ.mjs";

// src/ShaderGradient/Mesh/Materials.tsx
import { useEffect, useMemo } from "react";
import { jsx } from "react/jsx-runtime";
var Materials = ({
  animate,
  uniforms,
  vertexShader,
  fragmentShader,
  onInit
}) => {
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
    const material2 = new MeshPhysicalMaterial({
      userData: uniformValues,
      // sync uniform and userData to update uniforms from outside (MeshPhysicalMaterial)
      metalness: 0.2,
      // similar effects reducing -0.2 intensity of the ambient light
      side: DoubleSide,
      onBeforeCompile: (shader) => {
        shader.uniforms = __spreadValues(__spreadValues(__spreadValues({}, shader.uniforms), uniformValues), rgbColors);
        shader.vertexShader = vertexShader;
        shader.fragmentShader = fragmentShader;
      }
      // wireframe: true,
    });
    entries.forEach(
      ([name]) => Object.defineProperty(material2, name, {
        get: () => material2.uniforms[name].value,
        set: (v) => material2.uniforms[name].value = v
      })
    );
    if (onInit) onInit(material2);
    return material2;
  }, [uniforms, vertexShader, fragmentShader, onInit]);
  useEffect(() => {
    return () => {
      material.dispose();
    };
  }, [material]);
  useFrame(({ clock }) => {
    if (animate === "on" && material.userData.uTime) {
      material.userData.uTime.value = clock.getElapsedTime();
    }
  });
  return /* @__PURE__ */ jsx("primitive", { attach: "material", object: material });
};

export {
  Materials
};
