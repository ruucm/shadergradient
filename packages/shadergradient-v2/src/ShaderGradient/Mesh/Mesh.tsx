import { useCallback, useEffect, useMemo, useRef } from 'react'
import { Geometry } from './Geometry'
import { MeshT } from '@/types'
import { Materials } from './Materials'
import * as shaders from '@/shaders'

import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { SimplexNoise } from 'three/examples/jsm/math/SimplexNoise'
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
  const resinNoise = useMemo(() => new SimplexNoise(), [])

  const applyResinBump = useCallback(
    (time = 0) => {
      if (shader !== 'resin' || !meshRef.current) return

      const geometry = meshRef.current.geometry as THREE.BufferGeometry
      const positionAttr = geometry.getAttribute(
        'position'
      ) as THREE.BufferAttribute
      if (!positionAttr) return

      const original =
        (geometry.userData.originalPosition as Float32Array) ??
        (() => {
          const copy = (positionAttr.array as Float32Array).slice()
          geometry.userData.originalPosition = copy
          return copy
        })()

      const density = uDensity ?? 1
      const strength = uStrength ?? 1
      const amplitude = uAmplitude ?? 1
      const speed = uSpeed ?? 0.5

      for (let i = 0; i < positionAttr.count; i++) {
        const i3 = i * 3
        const ox = original[i3]
        const oy = original[i3 + 1]
        const oz = original[i3 + 2]

        const noise = resinNoise.noise3d(
          ox * 0.25 * density,
          oz * 0.25 * density,
          time * (0.2 + speed * 0.8)
        )

        const bump = noise * 0.35 * strength * (0.5 + amplitude * 0.5)
        positionAttr.array[i3] = ox + bump * 0.25
        positionAttr.array[i3 + 1] = oy + bump
        positionAttr.array[i3 + 2] = oz + bump * 0.25
      }

      positionAttr.needsUpdate = true
      geometry.computeVertexNormals()
    },
    [shader, uDensity, uStrength, uAmplitude, uSpeed, resinNoise]
  )

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
    shader === 'resin'
      ? {
          uColor1: colorToRgb(color1),
          uColor2: colorToRgb(color2),
          uColor3: colorToRgb(color3),
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
        }
      : {}

  const uniforms = {
    ...baseUniforms,
    ...glassUniforms,
    ...resinUniforms,
  }

  useEffect(() => {
    if (!meshRef.current) return
    const geometry = meshRef.current.geometry as THREE.BufferGeometry
    const positionAttr = geometry.getAttribute(
      'position'
    ) as THREE.BufferAttribute
    if (!positionAttr) return

    const original = geometry.userData.originalPosition as
      | Float32Array
      | undefined

    if (shader !== 'resin') {
      if (original && original.length === positionAttr.array.length) {
        positionAttr.array.set(original)
        positionAttr.needsUpdate = true
        geometry.computeVertexNormals()
      }
      return
    }

    if (!original || original.length !== positionAttr.array.length) {
      geometry.userData.originalPosition = (positionAttr.array as Float32Array).slice()
    }

    applyResinBump(0)
  }, [shader, type, applyResinBump])

  useFrame(({ clock }) => {
    if (shader !== 'resin' || animate !== 'on') return
    applyResinBump(clock.getElapsedTime())
  })

  return (
    <mesh
      name='shadergradient-mesh'
      ref={meshRef}
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
