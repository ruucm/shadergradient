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

// declare functions for gif encoding (imported as script tags)
declare global {
  function GIFEncoder(): void
  function encode64(input: string): string
}
