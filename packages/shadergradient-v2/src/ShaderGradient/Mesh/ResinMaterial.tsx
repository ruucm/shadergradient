import React, { useEffect, useMemo } from 'react'
import * as THREE from 'three'
import { MeshTransmissionMaterial } from '@react-three/drei'
import { colorToRgb, formatColor } from '@/utils'

type ResinMaterialProps = {
  uniforms: any
}

export function ResinMaterial({ uniforms }: ResinMaterialProps) {
  const resinGradientTexture = useMemo(() => {
    if (typeof document === 'undefined') return null

    const colorSources = [
      uniforms?.uColor1 ||
        (uniforms?.colors?.[0] ? colorToRgb(uniforms.colors[0]) : null),
      uniforms?.uColor2 ||
        (uniforms?.colors?.[1] ? colorToRgb(uniforms.colors[1]) : null),
      uniforms?.uColor3 ||
        (uniforms?.colors?.[2] ? colorToRgb(uniforms.colors[2]) : null),
    ]

    const primarySource = colorSources[0] || colorToRgb('#ffffff')
    const secondarySource = colorSources[1] || primarySource
    const tertiarySource = colorSources[2] || primarySource
    const canvas = document.createElement('canvas')
    canvas.width = 256
    canvas.height = 256
    const ctx = canvas.getContext('2d')
    if (!ctx) return null

    const toCss = (src: any) =>
      `rgb(${Math.round(src?.r ?? 255)}, ${Math.round(
        src?.g ?? 255
      )}, ${Math.round(src?.b ?? 255)})`

    const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0)
    gradient.addColorStop(0, toCss(primarySource))
    gradient.addColorStop(0.5, toCss(secondarySource))
    gradient.addColorStop(1, toCss(tertiarySource))

    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    const texture = new THREE.CanvasTexture(canvas)
    texture.needsUpdate = true
    texture.colorSpace = THREE.SRGBColorSpace
    texture.wrapS = THREE.ClampToEdgeWrapping
    texture.wrapT = THREE.ClampToEdgeWrapping
    texture.magFilter = THREE.LinearFilter
    texture.minFilter = THREE.LinearFilter
    return texture
  }, [
    uniforms?.uColor1,
    uniforms?.uColor2,
    uniforms?.uColor3,
    uniforms?.colors,
  ])

  useEffect(() => {
    return () => {
      resinGradientTexture?.dispose()
    }
  }, [resinGradientTexture])

  const {
    uColor1,
    uColor2,
    uColor3,
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
  } = uniforms

  const colorSources = [
    uColor1 ||
      (uniforms.colors?.[0]
        ? colorToRgb(uniforms.colors[0])
        : colorToRgb('#ffffff')),
    uColor2 || (uniforms.colors?.[1] ? colorToRgb(uniforms.colors[1]) : null),
    uColor3 || (uniforms.colors?.[2] ? colorToRgb(uniforms.colors[2]) : null),
  ]

  const primarySource = colorSources[0]
  const secondarySource = colorSources[1] || primarySource
  const tertiarySource = colorSources[2] || primarySource

  const toThreeColor = (src: any) =>
    new THREE.Color(
      formatColor(src?.r ?? 255),
      formatColor(src?.g ?? 255),
      formatColor(src?.b ?? 255)
    )

  const primaryColor = toThreeColor(primarySource)
  const secondaryColor = toThreeColor(secondarySource)
  const tertiaryColor = toThreeColor(tertiarySource)

  const blendedBackground = primaryColor
    .clone()
    .add(secondaryColor)
    .add(tertiaryColor)
    .multiplyScalar(1 / 3)

  const attenuationColor = secondaryColor.clone().lerp(tertiaryColor, 0.35)

  return (
    <MeshTransmissionMaterial
      background={blendedBackground}
      map={resinGradientTexture || undefined}
      color={resinGradientTexture ? new THREE.Color(1, 1, 1) : primaryColor}
      attenuationColor={attenuationColor}
      transmission={transmission}
      thickness={thickness}
      roughness={0}
      ior={ior}
      chromaticAberration={chromaticAberration}
      anisotropy={anisotropy}
      distortion={distortion}
      distortionScale={distortionScale}
      temporalDistortion={temporalDistortion}
      clearcoat={clearcoat}
      clearcoatRoughness={clearcoatRoughness}
      side={THREE.DoubleSide}
    />
  )
}
