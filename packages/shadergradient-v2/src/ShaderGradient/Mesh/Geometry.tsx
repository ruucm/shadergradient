const meshCount = 192

export function Geometry({ type }) {
  return (
    <>
      {type === 'plane' && (
        <planeGeometry args={[10, 10, meshCount, meshCount]} />
      )}
      {type === 'sphere' && <icosahedronGeometry args={[1, meshCount / 3]} />}
      {type === 'waterPlane' && (
        <planeGeometry args={[10, 10, meshCount, meshCount]} />
      )}
    </>
  )
}
