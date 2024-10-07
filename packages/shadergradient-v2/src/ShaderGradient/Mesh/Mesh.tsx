import { Geometry } from './Geometry'
import { MeshT } from '@/types'
import { Materials } from './Materials'

export function Mesh({ type, color1, color2, color3 }: MeshT): JSX.Element {
  return (
    <mesh>
      <Geometry type={type} />
      <Materials color1={color1} color2={color2} color3={color3} />
    </mesh>
  )
}
