import { ReactThreeFiber } from 'react-three-fiber'

declare module '*.module.css'
declare module '*.module.scss'

// for shaders
declare module '*.glsl'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ambientLight: ReactThreeFiber.AmbientLightProps
    }
  }
}
