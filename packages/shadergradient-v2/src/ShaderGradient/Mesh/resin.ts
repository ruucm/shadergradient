import { useCallback, useEffect, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { SimplexNoise } from 'three/examples/jsm/math/SimplexNoise.js'
import { MeshT } from '@/types'
import { colorToRgb } from '@/utils'

type ResinUniformInputs = Pick<
  MeshT,
  | 'shader'
  | 'color1'
  | 'color2'
  | 'color3'
  | 'transmission'
  | 'thickness'
  | 'ior'
  | 'chromaticAberration'
  | 'anisotropy'
  | 'distortion'
  | 'distortionScale'
  | 'temporalDistortion'
  | 'clearcoat'
  | 'clearcoatRoughness'
>

type ResinDeformInputs = Pick<
  MeshT,
  | 'shader'
  | 'type'
  | 'animate'
  | 'uDensity'
  | 'uStrength'
  | 'uAmplitude'
  | 'uSpeed'
>

export const buildResinUniforms = ({
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
}: ResinUniformInputs) =>
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

export const useResinDeformation = (
  meshRef: React.RefObject<THREE.Mesh>,
  { shader, type, animate, uDensity, uStrength, uAmplitude, uSpeed }: ResinDeformInputs
) => {
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

      if (type === 'waterPlane') {
        const positions = positionAttr.array as Float32Array
        const waveStrength = 0.3 * strength * (0.5 + amplitude * 0.5)
        const waveFrequency = 1.5 * density
        const timeScale = 0.8 + speed * 0.8

        for (let i = 0; i < positions.length; i += 3) {
          const x = original[i]
          const y = original[i + 1]

          positions[i] = x
          positions[i + 1] = y
          positions[i + 2] =
            Math.sin(x * waveFrequency + time) * waveStrength +
            Math.cos(y * waveFrequency + time * timeScale) * waveStrength +
            Math.sin(
              (x + y) * waveFrequency * 0.8 + time * 0.5 * timeScale
            ) *
              (waveStrength * 0.66)
        }
      } else {
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
      }

      positionAttr.needsUpdate = true
      geometry.computeVertexNormals()
    },
    [shader, type, uDensity, uStrength, uAmplitude, uSpeed, resinNoise, meshRef]
  )

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
      geometry.userData.originalPosition = (
        positionAttr.array as Float32Array
      ).slice()
    }

    applyResinBump(0)
  }, [shader, type, applyResinBump, meshRef])

  useFrame(({ clock }) => {
    if (shader !== 'resin' || animate !== 'on') return
    applyResinBump(clock.getElapsedTime())
  })
}
