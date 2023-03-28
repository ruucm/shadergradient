export type MeshT = {
  type?: 'plane' | 'sphere' | 'waterPlane'
  animate?: boolean
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
}
