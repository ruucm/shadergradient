import {
  Color,
  DoubleSide,
  LinearSRGBColorSpace,
  MeshPhysicalMaterial,
  Vector2,
  Vector3,
} from 'three'
import type { IUniform } from 'three'
import type { ExtractPropTypes } from 'vue'
import type { gradientProps } from './props'
import * as shaders from '../../shadergradient/src/shaders'

export type ResolvedGradientProps = ExtractPropTypes<typeof gradientProps>

export function createMaterial(props: ResolvedGradientProps) {
  const source = shaders[props.shader][props.type]
  const material = new MeshPhysicalMaterial({
    side: DoubleSide,
    metalness: props.shader === 'glass' ? 0 : 0.2,
    ...(props.shader === 'glass'
      ? {
          transparent: true,
          opacity: 0.3,
          transmission: 0.9,
          thickness: 0.5,
          clearcoat: 1,
          clearcoatRoughness: 0,
          ior: 1.5,
        }
      : {}),
  })
  const uniforms: Record<string, IUniform> = {
    uTime: { value: props.uTime },
    uLoadingTime: { value: 1 },
    uIntensity: { value: 0.5 },
    uTransparency: { value: 0.1 },
    uRefraction: { value: 1.5 },
    uChromaticAberration: { value: 0.1 },
    uFresnelPower: { value: 2 },
    uReflectivity: { value: 0.9 },
    uWaveAmplitude: { value: 0.02 },
    uWaveFrequency: { value: 5 },
    uDistortion: { value: 0.1 },
    uFlowSpeed: { value: 0.1 },
    uFlowDirection: { value: new Vector2(1, 0.5) },
    uLiquidEffect: { value: 0.5 },
    uFoamIntensity: { value: 0.3 },
  }
  material.userData = uniforms
  material.onBeforeCompile = (compiled) => {
    Object.assign(compiled.uniforms, uniforms)
    compiled.vertexShader = compatibleShader(source.vertex)
    compiled.fragmentShader = compatibleShader(source.fragment)
  }
  material.customProgramCacheKey = () => `${props.shader}:${props.type}`
  updateMaterial(material, props)
  return material
}

function compatibleShader(source: string) {
  if (source.includes('linearToRelativeLuminance(')) {
    source = `float shaderGradientLuminance(vec3 color) { return dot(color, vec3(0.2126, 0.7152, 0.0722)); }\n${source.replaceAll(
      'linearToRelativeLuminance(',
      'shaderGradientLuminance('
    )}`
  }
  return source.replace(
    /#include <(?:uv2_pars_vertex|uv2_vertex|uv2_pars_fragment|encodings_fragment)>/g,
    ''
  )
}

export function updateMaterial(
  material: MeshPhysicalMaterial,
  props: ResolvedGradientProps
) {
  const uniforms = material.userData as Record<string, IUniform>
  const values = {
    uSpeed: props.uSpeed,
    uNoiseDensity: props.uDensity,
    uNoiseStrength: props.uStrength,
    uFrequency: props.uFrequency,
    uAmplitude: props.uAmplitude,
    uLoop:
      props.loop === 'on' &&
      Number.isFinite(props.loopDuration) &&
      props.loopDuration > 0
        ? 1
        : 0,
    uLoopDuration:
      Number.isFinite(props.loopDuration) && props.loopDuration > 0
        ? props.loopDuration
        : 5,
  }
  for (const [name, value] of Object.entries(values)) {
    if (uniforms[name]) uniforms[name].value = value
    else uniforms[name] = { value }
  }
  ;[props.color1, props.color2, props.color3].forEach((value, index) => {
    const color = new Color().setStyle(value, LinearSRGBColorSpace)
    for (const channel of ['r', 'g', 'b'] as const) {
      const name = `uC${index + 1}${channel}`
      if (uniforms[name]) uniforms[name].value = color[channel]
      else uniforms[name] = { value: color[channel] }
    }
    const name = `uColor${index + 1}`
    if (uniforms[name]) uniforms[name].value.set(color.r, color.g, color.b)
    else uniforms[name] = { value: new Vector3(color.r, color.g, color.b) }
  })
  material.roughness = props.shader === 'glass' ? 0.1 : 1 - props.reflection
  material.wireframe = props.wireframe
}
