import { useEffect, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Geometry } from './Geometry'
import { MeshT } from '@/types'
import { Materials } from './Materials'
import * as shaders from '@/shaders'
import { LaminaMaterial } from './LaminaMaterial'

import { dToRArr, colorToRgb } from '@/utils'
import { debug } from '@/utils/debug'

function LaminaMesh({
  animate,
  positionX = 0,
  positionY = 0,
  positionZ = 0,
  rotationX = 0,
  rotationY = 0,
  rotationZ = 0,
  type,
  color1,
  color2,
  color3,
  reflection,
  uTime,
  uSpeed,
  uDensity,
  uStrength,
}: MeshT) {
  const meshRef = useRef<any>(null)
  const basePositions = useRef<Float32Array | null>(null)

  // Cache original positions when geometry changes
  useEffect(() => {
    const geo = meshRef.current?.geometry
    const pos = geo?.attributes?.position?.array
    if (pos) {
      basePositions.current = new Float32Array(pos.length)
      basePositions.current.set(pos)
    }
  }, [type])

  // CPU displacement: simple layered sine noise
  useFrame((state) => {
    const mesh = meshRef.current
    const geo = mesh?.geometry
    const posAttr = geo?.attributes?.position
    const arr = posAttr?.array as Float32Array | undefined
    if (!arr) return

    if (!basePositions.current || basePositions.current.length !== arr.length) {
      basePositions.current = new Float32Array(arr.length)
      basePositions.current.set(arr)
    }

    const base = basePositions.current
    const t =
      animate === 'on'
        ? state.clock.elapsedTime * (uSpeed ?? 0.6)
        : uTime ?? 0
    const freq = Math.max(uDensity ?? 1, 0.05) * 0.8
    const amp = Math.max(uStrength ?? 1, 0.05) * 0.12

    for (let i = 0; i < arr.length; i += 3) {
      const px = base[i]
      const py = base[i + 1]
      const pz = base[i + 2]
      const n =
        Math.sin((px + t) * freq) +
        Math.cos((py - t * 0.8) * freq) +
        Math.sin((pz + t * 0.6) * freq)
      const offset = n * amp
      arr[i] = px + offset * 0.6
      arr[i + 1] = py + offset
      arr[i + 2] = pz + offset * 0.4
    }

    posAttr.needsUpdate = true
    if (geo.computeVertexNormals) geo.computeVertexNormals()
  })

  return (
    <mesh
      ref={meshRef}
      name='shadergradient-mesh'
      position={[positionX, positionY, positionZ]}
      rotation={dToRArr([rotationX, rotationY, rotationZ])}
    >
      <Geometry type={type} />
      <LaminaMaterial
        animate={animate}
        color1={color1}
        color2={color2}
        color3={color3}
        uTime={uTime}
        uSpeed={uSpeed}
        uDensity={uDensity}
        uStrength={uStrength}
        reflection={reflection}
      />
    </mesh>
  )
}

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
  if (shader === 'lamina') {
    return (
      <LaminaMesh
        animate={animate}
        positionX={positionX}
        positionY={positionY}
        positionZ={positionZ}
        rotationX={rotationX}
        rotationY={rotationY}
        rotationZ={rotationZ}
        type={type}
        color1={color1}
        color2={color2}
        color3={color3}
        reflection={reflection}
        uTime={uTime}
        uSpeed={uSpeed}
        uDensity={uDensity}
        uStrength={uStrength}
      />
    )
  }

  const shaderKey = shader && shaders[shader] ? shader : 'defaults'
  const shaderSet = shaders[shaderKey] || shaders['defaults']
  const shaderType = shaderSet[type] ? type : 'plane'
  const { vertex, fragment } = shaderSet[shaderType]

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
