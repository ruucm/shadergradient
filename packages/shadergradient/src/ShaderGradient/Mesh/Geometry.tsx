import { ShaderGradientType } from '@/types'

const meshCount = 192

type GeometryProps = {
  type: ShaderGradientType
}

export function Geometry({ type }: GeometryProps) {
  return (
    <>
      {type === 'plane' && <planeGeometry args={[10, 10, 1, meshCount]} />}
      {type === 'sphere' && <icosahedronGeometry args={[1, meshCount / 3]} />}
      {type === 'waterPlane' && (
        <planeGeometry args={[10, 10, meshCount, meshCount]} />
      )}
    </>
  )
}
