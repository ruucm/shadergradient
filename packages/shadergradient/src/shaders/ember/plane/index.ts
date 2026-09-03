import baseFragment from '../fragment.glsl'
import baseVertex from '../vertex.glsl'

// the plane geometry has a single segment across x, so vertex displacement
// would smear into horizontal bands. EMBER_FLAT skips it and fakes the plate
// bevel per pixel instead (see fragment.glsl)
const vertex = '#define EMBER_FLAT\n' + baseVertex
const fragment = '#define EMBER_FLAT\n' + baseFragment

export { vertex, fragment }
