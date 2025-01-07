import { Geometry } from './Geometry'
import { MeshT } from '@/types'
import { Materials } from './Materials'
import {
  vertexShader,
  fragmentShader,
  vertexSphere,
  fragmentSphere,
} from '@/shaders/a'
// import { vertexShader, fragmentShader } from '@/shaders/base'
import { dToRArr } from '@/utils'

declare const __DEV__: boolean;

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
        fragmentShader={type === 'sphere' ? fragmentSphere : fragmentShader}
        onInit={(material) => {
          if (__DEV__) {
            console.debug('material (onInit)', material);
          }
        }}
      />
    </mesh>
  )
}
