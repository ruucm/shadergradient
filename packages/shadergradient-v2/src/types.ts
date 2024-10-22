export type ShaderGradientType = 'plane' | 'waterPlane' | 'sphere'

export interface Position {
  positionX: number
  positionY: number
  positionZ: number
}

export interface Rotation {
  rotationX: number
  rotationY: number
  rotationZ: number
}

export type typeT = 'plane' | 'sphere' | 'waterPlane'
export type animateT = 'on' | 'off'

export type MeshT = {
  type?: typeT
  animate?: animateT
  uTime?: number
  uSpeed?: number
  uStrength?: number
  uDensity?: number
  uFrequency?: number
  uAmplitude?: number
  positionX?: number
  positionY?: number
  positionZ?: number
  rotationX?: number
  rotationY?: number
  rotationZ?: number
  color1?: string
  color2?: string
  color3?: string
  reflection?: number
  wireframe?: boolean
  shader?: string
  rotSpringOption?: any
  posSpringOption?: any
}

export type GradientT = MeshT & {
  control?: 'query' | 'props'
  isFigmaPlugin?: boolean
  dampingFactor?: number

  // View (camera) props
  cAzimuthAngle?: number
  cPolarAngle?: number
  cDistance?: number
  cameraZoom?: number

  // Effect props
  lightType?: '3d' | 'env'
  brightness?: number
  envPreset?: 'city' | 'dawn' | 'lobby'
  grain?: 'on' | 'off'
  grainBlending?: number

  // Tool props
  zoomOut?: boolean
  toggleAxis?: boolean
  hoverState?: string

  enableTransition?: boolean
}
