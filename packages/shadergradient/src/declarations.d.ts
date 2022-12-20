import { ReactThreeFiber } from 'react-three-fiber'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ambientLight: ReactThreeFiber.AmbientLightProps
      mesh: ReactThreeFiber.MeshProps
      planeGeometry: ReactThreeFiber.PlaneGeometryProps
      icosahedronBufferGeometry: ReactThreeFiber.IcosahedronBufferGeometryProps
      group: ReactThreeFiber.GrouopProps
      lineSegments: ReactThreeFiber.LineSegmentsProps
    }
  }
}
