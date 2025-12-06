const meshCount = 192
const resinWaterPlaneSize = 5
const resinWaterPlaneSegments = 128

export function Geometry({ type, shader }) {
  return (
    <>
      {type === 'plane' &&
        (shader === 'resin' ? (
          <planeGeometry args={[10, 10, meshCount, meshCount]} />
        ) : (
          <planeGeometry args={[10, 10, 1, meshCount]} />
        ))}
      {type === 'sphere' && <icosahedronGeometry args={[1, meshCount / 3]} />}
      {type === 'waterPlane' &&
        (shader === 'resin' ? (
          <planeGeometry
            args={[
              resinWaterPlaneSize,
              resinWaterPlaneSize,
              resinWaterPlaneSegments,
              resinWaterPlaneSegments,
            ]}
          />
        ) : (
          <planeGeometry args={[10, 10, meshCount, meshCount]} />
        ))}
    </>
  )
}
