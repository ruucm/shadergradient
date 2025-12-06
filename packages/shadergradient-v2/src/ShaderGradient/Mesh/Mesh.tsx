import { useRef } from 'react'
import { Geometry } from './Geometry'
import { MeshT } from '@/types'
import { Materials } from './Materials'
import * as shaders from '@/shaders'

import * as THREE from 'three'
import { dToRArr, colorToRgb } from '@/utils'
import { debug } from '@/utils/debug'
import { buildResinUniforms, useResinDeformation } from './resin'

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
  meshScale,
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
  
  // Resin props
  transmission,
  thickness,
  ior,
  chromaticAberration,
  anisotropy,
  distortion,
  distortionScale,
  temporalDistortion,
  clearcoat,
  clearcoatRoughness,
}: MeshT) {
  const { vertex, fragment } = shaders[shader][type]
  const meshRef = useRef<THREE.Mesh>(null)
  useResinDeformation(meshRef, {
    shader,
    type,
    animate,
    uDensity,
    uStrength,
    uAmplitude,
    uSpeed,
  })

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

  // Add glass/liquid-specific uniforms
  const glassUniforms =
    shader === 'glass' || shader === 'liquid'
      ? {
          uColor1: colorToRgb(color1),
          uColor2: colorToRgb(color2),
          uColor3: colorToRgb(color3),
          uTransparency: shader === 'liquid' ? 0.2 : 0.1,
          uRefraction: shader === 'liquid' ? 1.4 : 1.5,
          uChromaticAberration: shader === 'liquid' ? 0.2 : 0.1,
          uFresnelPower: shader === 'liquid' ? 3.0 : 2.0,
          uReflectivity: shader === 'liquid' ? 0.95 : 0.9,
          uWaveAmplitude: 0.02,
          uWaveFrequency: 5.0,
          uDistortion: 0.1,
          uFlowSpeed: 0.1,
          uFlowDirection: { x: 1.0, y: 0.5 },
          uLiquidEffect: shader === 'liquid' ? 1.0 : 0.5,
          uFoamIntensity: 0.3,
          envMapIntensity: shader === 'liquid' ? 1.5 : 1.0,
        }
      : {}

  // Add resin-specific uniforms
  const resinUniforms =
    buildResinUniforms({
      shader,
      color1,
      color2,
      color3,
      transmission,
      thickness,
      ior,
      chromaticAberration,
      anisotropy,
      distortion,
      distortionScale,
      temporalDistortion,
      clearcoat,
      clearcoatRoughness,
    })

  const uniforms = {
    ...baseUniforms,
    ...glassUniforms,
    ...resinUniforms,
  }

  return (
    <mesh
      name='shadergradient-mesh'
      ref={meshRef}
      position={[positionX, positionY, positionZ]}
      rotation={dToRArr([rotationX, rotationY, rotationZ])}
      scale={[meshScale ?? 1, meshScale ?? 1, meshScale ?? 1]}
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
