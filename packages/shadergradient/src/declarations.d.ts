import { ReactThreeFiber } from 'react-three-fiber'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ambientLight: ReactThreeFiber.AmbientLightProps
      mesh: ReactThreeFiber.MeshProps
      planeGeometry: ReactThreeFiber.PlaneGeometryProps
      icosahedronGeometry: ReactThreeFiber.IcosahedronGeometryProps
      group: ReactThreeFiber.GrouopProps
      lineSegments: ReactThreeFiber.LineSegmentsProps
    }
  }
}
