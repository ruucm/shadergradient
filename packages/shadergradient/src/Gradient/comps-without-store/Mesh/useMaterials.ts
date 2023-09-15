import { extend } from '@react-three/fiber'
import { useState, useEffect } from 'react'
import { lineMaterial } from './lineMaterial'
import { shaderMaterial } from './shaderMaterial'
import * as shaders from './shaders/index'

export function useMaterials({
  type,
  shader,
  color1,
  color2,
  color3,
  uTime,
  uSpeed,
  uDensity,
  uStrength,
  uFrequency,
  uAmplitude,
}) {
  const [mounted, setMounted] = useState(false)
  const shaderType = type ?? 'plane'
  let sceneShader = shaders.defaults[shaderType] // default type is plane
  if (shader && shader !== 'defaults') sceneShader = shaders[shader][shaderType]

  // update (22.12.30) - Framer canvas needs more extend per component
  // extend only once when the component is mounted
  // this Mesh component always gets mounted when prop changes on the parent (Gradient.tsx)
  const ColorShiftMaterial = shaderMaterial(
    {
      colors: [color1, color2, color3],
      uTime,
      uSpeed,

      uLoadingTime: 0,

      uNoiseDensity: uDensity,
      uNoiseStrength: uStrength,
      uFrequency,
      uAmplitude,
      uIntensity: 0.5,
    },
    sceneShader.vertex,
    sceneShader.fragment
  )

  const HoveredLineMaterial = lineMaterial(
    {
      uTime,
      uSpeed,
      uNoiseDensity: uDensity,
      uNoiseStrength: uStrength,
      uFrequency,
      uAmplitude,
      uIntensity: 0.5,
    },
    sceneShader.vertex
  )

  extend({ ColorShiftMaterial })
  extend({ HoveredLineMaterial })

  useEffect(() => {
    setMounted(true)
  }, [])

  return mounted
}
