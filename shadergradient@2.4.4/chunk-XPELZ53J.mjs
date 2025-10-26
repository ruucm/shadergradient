import {
  BlendMode
} from "./chunk-OUMQVT4Y.mjs";
import {
  BlendFunction
} from "./chunk-4NRCS6EB.mjs";
import {
  HalftoneShader
} from "./chunk-3U6A2N6D.mjs";
import {
  FullScreenQuad,
  Pass
} from "./chunk-LZ3DDWYG.mjs";
import {
  ShaderMaterial,
  UniformsUtils
} from "./chunk-BT6X4JN2.mjs";

// src/ShaderGradient/PostProcessing/lib/pp/HalftonePass.ts
var usePassedMeshSize = true;
var HalftonePass = class extends Pass {
  constructor(width, height, params) {
    super();
    if (HalftoneShader === void 0) {
      console.error("THREE.HalftonePass requires HalftoneShader");
    }
    this.uniforms = UniformsUtils.clone(HalftoneShader.uniforms);
    this.material = new ShaderMaterial({
      uniforms: this.uniforms,
      fragmentShader: HalftoneShader.fragmentShader,
      vertexShader: HalftoneShader.vertexShader
    });
    if (usePassedMeshSize) {
      this.uniforms.width.value = width;
      this.uniforms.height.value = height;
    }
    this.uniforms.disable.value = params["disable"];
    this.fsQuad = new FullScreenQuad(this.material);
    this.blendMode = new BlendMode(BlendFunction.SCREEN);
    this.extensions = null;
  }
  render(renderer, writeBuffer, readBuffer) {
    this.material.uniforms["tDiffuse"].value = readBuffer.texture;
    if (this.renderToScreen) {
      renderer.setRenderTarget(null);
      this.fsQuad.render(renderer);
    } else {
      renderer.setRenderTarget(writeBuffer);
      if (this.clear) renderer.clear();
      this.fsQuad.render(renderer);
    }
  }
  setSize(width, height) {
    if (usePassedMeshSize) {
      this.uniforms.width.value = width;
      this.uniforms.height.value = height;
    }
  }
  initialize(renderer, alpha, frameBufferType) {
  }
  addEventListener() {
  }
  getAttributes() {
    return this.attributes;
  }
  getFragmentShader() {
    return HalftoneShader.fragmentShader;
  }
  getVertexShader() {
    return HalftoneShader.vertexShader;
  }
  update(renderer, inputBuffer, deltaTime) {
  }
};

export {
  HalftonePass
};
