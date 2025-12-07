// @ts-nocheck
import { ShaderMaterial, UniformsUtils } from 'three'

import { BlendFunction, BlendMode } from './blending/index'
import { HalftoneShader } from './HalftoneShader'
import { Pass, FullScreenQuad } from './Pass'
// import { BlendFunction } from './BlendFunction'

/**
 * RGB Halftone pass for three.js effects composer. Requires HalftoneShader.
 */

const usePassedMeshSize = true

class HalftonePass extends Pass {
  constructor(width, height, params) {
    super()

    if (HalftoneShader === undefined) {
      console.error('THREE.HalftonePass requires HalftoneShader')
    }

    this.uniforms = UniformsUtils.clone(HalftoneShader.uniforms)
    this.material = new ShaderMaterial({
      uniforms: this.uniforms,
      fragmentShader: HalftoneShader.fragmentShader,
      vertexShader: HalftoneShader.vertexShader,
    })

    // set params
    if (usePassedMeshSize) {
      this.uniforms.width.value = width
      this.uniforms.height.value = height
    }
    this.uniforms.disable.value = params['disable']

    // for (const key in params) {
    //   if (params.hasOwnProperty(key) && this.uniforms.hasOwnProperty(key)) {
    //     this.uniforms[key].value = params[key]
    //   }
    // }

    this.fsQuad = new FullScreenQuad(this.material)

    this.blendMode = new BlendMode(BlendFunction.SCREEN)
    this.extensions = null
  }

  render(renderer, writeBuffer, readBuffer /*, deltaTime, maskActive*/) {
    this.material.uniforms['tDiffuse'].value = readBuffer.texture
    // renderer.setClearColor('#FFFFFF', 0.2)

    if (this.renderToScreen) {
      renderer.setRenderTarget(null)
      this.fsQuad.render(renderer)
    } else {
      renderer.setRenderTarget(writeBuffer)
      if (this.clear) renderer.clear()
      this.fsQuad.render(renderer)
    }
  }

  setSize(width, height) {
    if (usePassedMeshSize) {
      this.uniforms.width.value = width
      this.uniforms.height.value = height
    }
  }

  initialize(renderer, alpha, frameBufferType) {
    // this.blurPass.initialize(renderer, alpha, frameBufferType)
    // if (!alpha && frameBufferType === UnsignedByteType) {
    //   this.renderTarget.texture.format = RGBFormat
    // }
    // if (frameBufferType !== undefined) {
    //   this.renderTarget.texture.type = frameBufferType
    // }
  }

  addEventListener() {}

  getAttributes() {
    return this.attributes
  }

  getFragmentShader() {
    return HalftoneShader.fragmentShader
  }

  getVertexShader() {
    return HalftoneShader.vertexShader
  }

  update(renderer, inputBuffer, deltaTime) {}
}

export { HalftonePass }
