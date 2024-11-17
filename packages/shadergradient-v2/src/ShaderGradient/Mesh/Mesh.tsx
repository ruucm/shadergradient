import { Geometry } from './Geometry'
import { MeshT } from '@/types'
import { Materials } from './Materials'
import { vertexShader, fragmentShader, vertexSphere } from '@/shaders/a'
// import { vertexShader, fragmentShader } from '@/shaders/base'
import { dToRArr } from '@/utils'

export function Mesh({
  animate,

  positionX,
  positionY,
  positionZ,
  rotationX,
  rotationY,
  rotationZ,

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
      name='shadergradient-mesh'
      position={[positionX, positionY, positionZ]}
      rotation={dToRArr([rotationX, rotationY, rotationZ])}
    >
      <Geometry type={type} />
      <Materials
        animate={animate}
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
        vertexShader={type === 'sphere' ? vertexSphere : vertexShader}
        fragmentShader={fragmentShader}
        onInit={(material) => {
          console.log('material (onInit)', material)
        }}
      />
    </mesh>
  )
}
