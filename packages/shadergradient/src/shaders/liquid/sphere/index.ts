import baseFragment from '../fragment.glsl'
import baseVertex from '../vertex.glsl'

// enables the uFrequency / uAmplitude twist and maps the blob field onto the
// sphere surface in both stages (see vertex.glsl)
const vertex = '#define LIQUID_SPHERE\n' + baseVertex
const fragment = '#define LIQUID_SPHERE\n' + baseFragment

export { vertex, fragment }
