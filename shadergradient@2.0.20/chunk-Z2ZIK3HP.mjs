import {
  FullScreenQuad,
  Pass
} from "./chunk-C4TFB3WJ.mjs";
import {
  ShaderMaterial,
  UniformsUtils
} from "./chunk-M5G6JQMQ.mjs";

// src/ShaderGradient/PostProcessing/lib/pp/from-threejs/postprocessing/ShaderPass.js
var ShaderPass = class extends Pass {
  constructor(shader, textureID) {
    super();
    this.textureID = textureID !== void 0 ? textureID : "tDiffuse";
    if (shader instanceof ShaderMaterial) {
      this.uniforms = shader.uniforms;
      this.material = shader;
    } else if (shader) {
      this.uniforms = UniformsUtils.clone(shader.uniforms);
      this.material = new ShaderMaterial({
        defines: Object.assign({}, shader.defines),
        uniforms: this.uniforms,
        vertexShader: shader.vertexShader,
        fragmentShader: shader.fragmentShader
      });
    }
    this.fsQuad = new FullScreenQuad(this.material);
  }
  render(renderer, writeBuffer, readBuffer) {
    if (this.uniforms[this.textureID]) {
      this.uniforms[this.textureID].value = readBuffer.texture;
    }
    this.fsQuad.material = this.material;
    if (this.renderToScreen) {
      renderer.setRenderTarget(null);
      this.fsQuad.render(renderer);
    } else {
      renderer.setRenderTarget(writeBuffer);
      if (this.clear)
        renderer.clear(
          renderer.autoClearColor,
          renderer.autoClearDepth,
          renderer.autoClearStencil
        );
      this.fsQuad.render(renderer);
    }
  }
};

export {
  ShaderPass
};
