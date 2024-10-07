import { Geometry } from './Geometry'
import { MeshT } from '@/types'
import { Materials } from './Materials'
import { vertexShader, fragmentShader } from '@/shaders/a'
// import { vertexShader, fragmentShader } from '@/shaders/base'

export function Mesh({
  position,
  rotation,
  type,
  color1,
  color2,
  color3,
  uTime,
  uSpeed,
  uDensity,
  uStrength,
  uFrequency,
  uAmplitude,
}: MeshT): JSX.Element {
  return (
    <mesh
      position={[position.positionX, position.positionY, position.positionZ]}
      rotation={[rotation.rotationX, rotation.rotationY, rotation.rotationZ]}
    >
      <Geometry type={type} />
      <Materials
        uniforms={{
          colors: [color1, color2, color3],
          uTime,
          uSpeed,

          uLoadingTime: 1, // no loading animation

          uNoiseDensity: uDensity,
          uNoiseStrength: uStrength,
          uFrequency,
          uAmplitude,
          uIntensity: 0.5,
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
