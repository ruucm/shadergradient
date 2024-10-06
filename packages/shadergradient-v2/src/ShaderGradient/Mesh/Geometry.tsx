const meshLineCount = 36

export function Geometry({ type }): JSX.Element {
  return (
    <>
      {type === 'plane' && <planeGeometry args={[10, 10, 1, 1]} />}
      {type === 'sphere' && (
        <icosahedronGeometry args={[1, meshLineCount / 3]} />
      )}
      {type === 'waterPlane' && (
        <planeGeometry args={[10, 10, meshLineCount, meshLineCount]} />
      )}
    </>
  )
}
