import { Geometry } from './Geometry'
import { MeshT } from '@/types'
import { Materials } from './Materials'
import * as shaders from '@/shaders'

import { dToRArr, colorToRgb } from '@/utils'
import { debug } from '@/utils/debug'

export function Mesh({
  animate,
  range,
  rangeStart,
  rangeEnd,
  loop,
  loopDuration,

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
  reflection,
  uTime,
  uSpeed,
  uDensity,
  uStrength,
  uFrequency,
  uAmplitude,

  shader,
}: MeshT) {
  const { vertex, fragment } = shaders[shader][type]

  // Prepare uniforms based on shader type
  const baseUniforms = {
    colors: [color1, color2, color3],
    uTime,
    uSpeed,
    uLoadingTime: 1, // no loading animation
    uNoiseDensity: uDensity,
    uNoiseStrength: uStrength,
    uFrequency,
    uAmplitude,
    uIntensity: 0.5,
    uLoop: loop === 'on' ? 1.0 : 0.0,
    uLoopDuration: loopDuration || 5.0,
  }

  // Add glass-specific uniforms
  const glassUniforms =
    shader === 'glass'
      ? {
          uColor1: colorToRgb(color1),
          uColor2: colorToRgb(color2),
          uColor3: colorToRgb(color3),
          uTransparency: 0.1,
          uRefraction: 1.5,
          uChromaticAberration: 0.1,
          uFresnelPower: 2.0,
          uReflectivity: 0.9,
          uWaveAmplitude: 0.02,
          uWaveFrequency: 5.0,
          uDistortion: 0.1,
          uFlowSpeed: 0.1,
          uFlowDirection: { x: 1.0, y: 0.5 },
          uLiquidEffect: 0.5,
          uFoamIntensity: 0.3,
          envMapIntensity: 1.0,
        }
      : {}

  const uniforms = {
    ...baseUniforms,
    ...glassUniforms,
  }

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
        loop={loop}
        loopDuration={loopDuration}
        reflection={reflection}
        shader={shader}
        uniforms={uniforms}
        vertexShader={vertex}
        fragmentShader={fragment}
        onInit={(material) => {
          debug.performance('material (onInit)', material)
        }}
      />
    </mesh>
  )
}
