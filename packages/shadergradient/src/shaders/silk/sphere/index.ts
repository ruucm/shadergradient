import fragment from '../fragment.glsl'
import baseVertex from '../vertex.glsl'

// enables the uFrequency / uAmplitude twist (see vertex.glsl)
const vertex = '#define SILK_SPHERE\n' + baseVertex

export { vertex, fragment }
