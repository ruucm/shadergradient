import baseFragment from '../fragment.glsl'
import baseVertex from '../vertex.glsl'

// enables the uFrequency / uAmplitude twist and switches both stages to the
// 3D voronoi (see vertex.glsl)
const vertex = '#define EMBER_SPHERE\n' + baseVertex
const fragment = '#define EMBER_SPHERE\n' + baseFragment

export { vertex, fragment }
