import fragment from './fragment.glsl'
import vertex from './vertex.glsl'

// The paint surface is computed in 3D from vPos and displaced along the
// surface normal, so one vertex/fragment pair serves every geometry type
const variant = { vertex, fragment }

export const plane = variant
export const sphere = variant
export const waterPlane = variant
export const torus = variant
