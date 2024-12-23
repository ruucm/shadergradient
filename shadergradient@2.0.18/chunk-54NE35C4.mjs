import {
  BlendFunction
} from "./chunk-4NRCS6EB.mjs";
import {
  EventDispatcher,
  Uniform
} from "./chunk-M5G6JQMQ.mjs";

// src/ShaderGradient/PostProcessing/lib/pp/blending/glsl/add/shader.frag
var shader_default = "vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {\n\n	return min(x + y, 1.0) * opacity + x * (1.0 - opacity);\n\n}\n";

// src/ShaderGradient/PostProcessing/lib/pp/blending/glsl/alpha/shader.frag
var shader_default2 = "vec3 blend(const in vec3 x, const in vec3 y, const in float opacity) {\n\n	return y * opacity + x * (1.0 - opacity);\n\n}\n\nvec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {\n\n	float a = min(y.a, opacity);\n\n	return vec4(blend(x.rgb, y.rgb, a), max(x.a, a));\n\n}\n";

// src/ShaderGradient/PostProcessing/lib/pp/blending/glsl/average/shader.frag
var shader_default3 = "vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {\n\n	return (x + y) * 0.5 * opacity + x * (1.0 - opacity);\n\n}\n";

// src/ShaderGradient/PostProcessing/lib/pp/blending/glsl/color-burn/shader.frag
var shader_default4 = "float blend(const in float x, const in float y) {\n\n	return (y == 0.0) ? y : max(1.0 - (1.0 - x) / y, 0.0);\n\n}\n\nvec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {\n\n	vec4 z = vec4(\n		blend(x.r, y.r),\n		blend(x.g, y.g),\n		blend(x.b, y.b),\n		blend(x.a, y.a)\n	);\n\n	return z * opacity + x * (1.0 - opacity);\n\n}\n";

// src/ShaderGradient/PostProcessing/lib/pp/blending/glsl/color-dodge/shader.frag
var shader_default5 = "float blend(const in float x, const in float y) {\n\n	return (y == 1.0) ? y : min(x / (1.0 - y), 1.0);\n\n}\n\nvec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {\n\n	vec4 z = vec4(\n		blend(x.r, y.r),\n		blend(x.g, y.g),\n		blend(x.b, y.b),\n		blend(x.a, y.a)\n	);\n\n	return z * opacity + x * (1.0 - opacity);\n\n}\n";

// src/ShaderGradient/PostProcessing/lib/pp/blending/glsl/darken/shader.frag
var shader_default6 = "vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {\n\n	return min(x, y) * opacity + x * (1.0 - opacity);\n\n}\n";

// src/ShaderGradient/PostProcessing/lib/pp/blending/glsl/difference/shader.frag
var shader_default7 = "vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {\n\n	return abs(x - y) * opacity + x * (1.0 - opacity);\n\n}\n";

// src/ShaderGradient/PostProcessing/lib/pp/blending/glsl/divide/shader.frag
var shader_default8 = "float blend(const in float x, const in float y) {\n\n	return (y > 0.0) ? min(x / y, 1.0) : 1.0;\n\n}\n\nvec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {\n\n	vec4 z = vec4(\n		blend(x.r, y.r),\n		blend(x.g, y.g),\n		blend(x.b, y.b),\n		blend(x.a, y.a)\n	);\n\n	return z * opacity + x * (1.0 - opacity);\n\n}\n";

// src/ShaderGradient/PostProcessing/lib/pp/blending/glsl/exclusion/shader.frag
var shader_default9 = "vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {\n\n	return (x + y - 2.0 * x * y) * opacity + x * (1.0 - opacity);\n\n}\n";

// src/ShaderGradient/PostProcessing/lib/pp/blending/glsl/lighten/shader.frag
var shader_default10 = "vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {\n\n	return max(x, y) * opacity + x * (1.0 - opacity);\n\n}\n";

// src/ShaderGradient/PostProcessing/lib/pp/blending/glsl/multiply/shader.frag
var shader_default11 = "vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {\n\n	return x * y * opacity + x * (1.0 - opacity);\n\n}\n";

// src/ShaderGradient/PostProcessing/lib/pp/blending/glsl/negation/shader.frag
var shader_default12 = "vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {\n\n	return (1.0 - abs(1.0 - x - y)) * opacity + x * (1.0 - opacity);\n\n}\n";

// src/ShaderGradient/PostProcessing/lib/pp/blending/glsl/normal/shader.frag
var shader_default13 = "vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {\n\n	return y * opacity + x * (1.0 - opacity);\n\n}\n";

// src/ShaderGradient/PostProcessing/lib/pp/blending/glsl/overlay/shader.frag
var shader_default14 = "float blend(const in float x, const in float y) {\n\n	return (x < 0.5) ? (2.0 * x * y) : (1.0 - 2.0 * (1.0 - x) * (1.0 - y));\n\n}\n\nvec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {\n\n	vec4 z = vec4(\n		blend(x.r, y.r),\n		blend(x.g, y.g),\n		blend(x.b, y.b),\n		blend(x.a, y.a)\n	);\n\n	return z * opacity + x * (1.0 - opacity);\n\n}\n";

// src/ShaderGradient/PostProcessing/lib/pp/blending/glsl/reflect/shader.frag
var shader_default15 = "float blend(const in float x, const in float y) {\n\n	return (y == 1.0) ? y : min(x * x / (1.0 - y), 1.0);\n\n}\n\nvec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {\n\n	vec4 z = vec4(\n		blend(x.r, y.r),\n		blend(x.g, y.g),\n		blend(x.b, y.b),\n		blend(x.a, y.a)\n	);\n\n	return z * opacity + x * (1.0 - opacity);\n\n}\n";

// src/ShaderGradient/PostProcessing/lib/pp/blending/glsl/screen/shader.frag
var shader_default16 = "vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {\n\n	return (1.0 - (1.0 - x) * (1.0 - y)) * opacity + x * (1.0 - opacity);\n\n}\n";

// src/ShaderGradient/PostProcessing/lib/pp/blending/glsl/soft-light/shader.frag
var shader_default17 = "float blend(const in float x, const in float y) {\n\n	return (y < 0.5) ?\n		(2.0 * x * y + x * x * (1.0 - 2.0 * y)) :\n		(sqrt(x) * (2.0 * y - 1.0) + 2.0 * x * (1.0 - y));\n\n}\n\nvec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {\n\n	vec4 z = vec4(\n		blend(x.r, y.r),\n		blend(x.g, y.g),\n		blend(x.b, y.b),\n		blend(x.a, y.a)\n	);\n\n	return z * opacity + x * (1.0 - opacity);\n\n}\n";

// src/ShaderGradient/PostProcessing/lib/pp/blending/glsl/subtract/shader.frag
var shader_default18 = "vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {\n\n	return max(x + y - 1.0, 0.0) * opacity + x * (1.0 - opacity);\n\n}\n";

// src/ShaderGradient/PostProcessing/lib/pp/blending/BlendMode.js
var blendFunctions = /* @__PURE__ */ new Map([
  [BlendFunction.SKIP, null],
  [BlendFunction.ADD, shader_default],
  [BlendFunction.ALPHA, shader_default2],
  [BlendFunction.AVERAGE, shader_default3],
  [BlendFunction.COLOR_BURN, shader_default4],
  [BlendFunction.COLOR_DODGE, shader_default5],
  [BlendFunction.DARKEN, shader_default6],
  [BlendFunction.DIFFERENCE, shader_default7],
  [BlendFunction.EXCLUSION, shader_default9],
  [BlendFunction.LIGHTEN, shader_default10],
  [BlendFunction.MULTIPLY, shader_default11],
  [BlendFunction.DIVIDE, shader_default8],
  [BlendFunction.NEGATION, shader_default12],
  [BlendFunction.NORMAL, shader_default13],
  [BlendFunction.OVERLAY, shader_default14],
  [BlendFunction.REFLECT, shader_default15],
  [BlendFunction.SCREEN, shader_default16],
  [BlendFunction.SOFT_LIGHT, shader_default17],
  [BlendFunction.SUBTRACT, shader_default18]
]);
var BlendMode = class extends EventDispatcher {
  /**
   * Constructs a new blend mode.
   *
   * @param {BlendFunction} blendFunction - The blend function to use.
   * @param {Number} opacity - The opacity of the color that will be blended with the base color.
   */
  constructor(blendFunction, opacity = 1) {
    super();
    this.blendFunction = blendFunction;
    this.opacity = new Uniform(opacity);
  }
  /**
   * Returns the blend function.
   *
   * @return {BlendFunction} The blend function.
   */
  getBlendFunction() {
    return this.blendFunction;
  }
  /**
   * Sets the blend function.
   *
   * @param {BlendFunction} blendFunction - The blend function.
   */
  setBlendFunction(blendFunction) {
    this.blendFunction = blendFunction;
    this.dispatchEvent({ type: "change" });
  }
  /**
   * Returns the blend function shader code.
   *
   * @return {String} The blend function shader code.
   */
  getShaderCode() {
    return blendFunctions.get(this.blendFunction);
  }
};

export {
  BlendMode
};
