import {
  DoubleSide,
  MeshPhysicalMaterial,
  UniformsUtils
} from "../chunk-M5G6JQMQ.mjs";
import {
  __spreadValues
} from "../chunk-5BEQP2BQ.mjs";

// src/shaders/shaderMaterial.ts
function shaderMaterial(uniforms, vertexShader, fragmentShader, onInit) {
  return class extends MeshPhysicalMaterial {
    constructor() {
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
      super({
        metalness: 0.2,
        // similar effects reducing -0.2 intensity of the ambient light
        userData: uniformValues,
        // sync uniform and userData to update uniforms from outside (MeshPhysicalMaterial)
        side: DoubleSide,
        onBeforeCompile: (shader) => {
          shader.uniforms = __spreadValues(__spreadValues(__spreadValues({}, shader.uniforms), uniformValues), rgbColors);
          shader.vertexShader = vertexShader;
          shader.fragmentShader = fragmentShader;
        }
        // wireframe: true,
      });
      entries.forEach(
        ([name]) => Object.defineProperty(this, name, {
          // @ts-ignore
          get: () => this.uniforms[name].value,
          // @ts-ignore
          set: (v) => this.uniforms[name].value = v
        })
      );
      if (onInit) onInit(this);
    }
  };
}
function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}
function rgbStringToRgb(rgbString) {
  const result = rgbString.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
  return result ? {
    r: parseInt(result[1]),
    g: parseInt(result[2]),
    b: parseInt(result[3])
  } : null;
}
function colorToRgb(color) {
  if (color.startsWith("#")) {
    return hexToRgb(color);
  } else if (color.startsWith("rgb")) {
    return rgbStringToRgb(color);
  } else {
    throw new Error("Invalid color format");
  }
}
function formatColor(color = 0) {
  return color / 255;
}
export {
  shaderMaterial
};
