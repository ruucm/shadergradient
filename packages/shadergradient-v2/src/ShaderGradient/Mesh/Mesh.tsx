import { Geometry } from './Geometry'
import { MeshT } from '@/types'
import { Materials } from './Materials'
import * as shaders from '@/shaders'

import { dToRArr } from '@/utils'
import { debug } from '@/utils/debug'

export function Mesh({
  animate,
  range,
  rangeStart,
  rangeEnd,

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

  shader,
}: MeshT) {
  const { vertex, fragment } = shaders[shader][type]

  return (
    <mesh
      name='shadergradient-mesh'
      position={[positionX, positionY, positionZ]}
      rotation={dToRArr([rotationX, rotationY, rotationZ])}
    >
      <Geometry type={type} />
      <Materials
        animate={animate}
        range={range}
        rangeStart={rangeStart}
        rangeEnd={rangeEnd}
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
        vertexShader={vertex}
        fragmentShader={fragment}
        onInit={(material) => {
          debug.performance('material (onInit)', material)
        }}
      />
    </mesh>
  )
}
