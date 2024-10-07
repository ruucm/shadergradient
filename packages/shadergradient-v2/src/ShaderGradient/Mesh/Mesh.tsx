import { Geometry } from './Geometry'
import { MeshT } from '@/types'
import { Materials } from './Materials'
import { vertexShader, fragmentShader } from '@/shaders/a'

export function Mesh({ type, color1, color2, color3 }: MeshT): JSX.Element {
  return (
    <mesh>
      <Geometry type={type} />
      <Materials
        uniforms={{
          colors: [color1, color2, color3],
          uTime: 1,
          uAmplitude: 2,
          uWidth: 10,
          uHeight: 10,
        }}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        onInit={(material) => {
          console.log('material (onInit)', material)
        }}
      />
    </mesh>
  )
}
