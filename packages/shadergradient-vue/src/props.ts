import type { ExtractPublicPropTypes, PropType } from 'vue'
import { presets } from '../../shadergradient/src/presets'

export type ShaderName = 'defaults' | 'positionMix' | 'cosmic' | 'glass'
export type GradientType = 'plane' | 'sphere' | 'waterPlane'

const halo = presets.halo.props

export const gradientProps = {
  type: { type: String as PropType<GradientType>, default: halo.type },
  shader: { type: String as PropType<ShaderName>, default: 'defaults' },
  animate: { type: String as PropType<'on' | 'off'>, default: halo.animate },
  uTime: { type: Number, default: halo.uTime },
  uSpeed: { type: Number, default: halo.uSpeed },
  uStrength: { type: Number, default: halo.uStrength },
  uDensity: { type: Number, default: halo.uDensity },
  uFrequency: { type: Number, default: halo.uFrequency },
  uAmplitude: { type: Number, default: halo.uAmplitude },
  range: {
    type: String as PropType<'enabled' | 'disabled'>,
    default: 'disabled',
  },
  rangeStart: { type: Number, default: halo.rangeStart },
  rangeEnd: { type: Number, default: halo.rangeEnd },
  loop: { type: String as PropType<'on' | 'off'>, default: 'off' },
  loopDuration: { type: Number, default: 5 },
  positionX: { type: Number, default: halo.positionX },
  positionY: { type: Number, default: halo.positionY },
  positionZ: { type: Number, default: halo.positionZ },
  rotationX: { type: Number, default: halo.rotationX },
  rotationY: { type: Number, default: halo.rotationY },
  rotationZ: { type: Number, default: halo.rotationZ },
  color1: { type: String, default: halo.color1 },
  color2: { type: String, default: halo.color2 },
  color3: { type: String, default: halo.color3 },
  reflection: { type: Number, default: halo.reflection },
  wireframe: { type: Boolean, default: false },
  cAzimuthAngle: { type: Number, default: halo.cAzimuthAngle },
  cPolarAngle: { type: Number, default: halo.cPolarAngle },
  cDistance: { type: Number, default: halo.cDistance },
  cameraZoom: { type: Number, default: halo.cameraZoom },
  smoothTime: { type: Number, default: 0.05 },
  enableTransition: { type: Boolean, default: true },
  zoomOut: { type: Boolean, default: false },
  lightType: {
    type: String as PropType<'3d' | 'env'>,
    default: halo.lightType,
  },
  brightness: { type: Number, default: halo.brightness },
  envPreset: {
    type: String as PropType<'city' | 'dawn' | 'lobby'>,
    default: halo.envPreset,
  },
  grain: { type: String as PropType<'on' | 'off'>, default: 'on' },
  grainBlending: { type: Number, default: 1 },
  toggleAxis: { type: Boolean, default: false },
  control: { type: String as PropType<'props' | 'query'>, default: 'props' },
  urlString: { type: String, default: '' },
} as const

export type ShaderGradientProps = ExtractPublicPropTypes<typeof gradientProps>
