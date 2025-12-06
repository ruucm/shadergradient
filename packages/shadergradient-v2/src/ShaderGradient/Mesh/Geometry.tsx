const meshCount = 192
const waterPlaneSize = 5
const waterPlaneSegments = 128

export function Geometry({ type }) {
  return (
    <>
      {type === 'plane' && (
        <planeGeometry args={[10, 10, meshCount, meshCount]} />
      )}
      {type === 'sphere' && <icosahedronGeometry args={[1, meshCount / 3]} />}
      {type === 'waterPlane' && (
        <planeGeometry
          args={[
            waterPlaneSize,
            waterPlaneSize,
            waterPlaneSegments,
            waterPlaneSegments,
          ]}
        />
      )}
    </>
  )
}
