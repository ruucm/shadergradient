import baseFragment from '../fragment.glsl'
import baseVertex from '../vertex.glsl'

// the plane geometry has a single segment across x, so vertex displacement
// would smear into horizontal bands. LIQUID_FLAT skips the blob thickness;
// the glass look is computed per pixel anyway (see vertex.glsl)
const vertex = '#define LIQUID_FLAT\n' + baseVertex
const fragment = '#define LIQUID_FLAT\n' + baseFragment

export { vertex, fragment }
