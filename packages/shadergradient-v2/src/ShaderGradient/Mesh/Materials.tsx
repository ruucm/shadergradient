import React, { useEffect, useMemo, useRef } from 'react'
import * as THREE from 'three'
import { MeshTransmissionMaterial } from '@react-three/drei'
import { colorToRgb, formatColor } from '@/utils'
import { useFrame } from '@react-three/fiber'

// Define the material component
export const Materials = ({
  animate,
  range,
  rangeStart,
  rangeEnd,
  loop,
  loopDuration,
  reflection,
  uniforms,
  vertexShader,
  fragmentShader,
  onInit,
  shader,
}) => {
  const localClockRef = useRef(new THREE.Clock())
  const resinNoiseUniformRef = useRef(new THREE.Uniform(0))
  const resinGradientTexture = useMemo(() => {
    if (shader !== 'resin') return null
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

    const toCss = (src) =>
      `rgb(${Math.round((src as any)?.r ?? 255)}, ${Math.round(
        (src as any)?.g ?? 255
      )}, ${Math.round((src as any)?.b ?? 255)})`

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
    shader,
    uniforms?.uColor1,
    uniforms?.uColor2,
    uniforms?.uColor3,
    uniforms?.colors,
  ])

  useEffect(() => {
    if (shader === 'resin' && typeof uniforms?.uNoiseStrength === 'number') {
      resinNoiseUniformRef.current.value = uniforms.uNoiseStrength
    }
  }, [shader, uniforms?.uNoiseStrength])

  useEffect(() => {
    return () => {
      resinGradientTexture?.dispose()
    }
  }, [resinGradientTexture])

  // Resin: use Drei's MeshTransmissionMaterial for glassy look (matches reference)
  if (shader === 'resin') {
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

    const toThreeColor = (src) =>
      new THREE.Color(
        formatColor((src as any)?.r ?? 255),
        formatColor((src as any)?.g ?? 255),
        formatColor((src as any)?.b ?? 255)
      )

    const primaryColor = toThreeColor(primarySource)
    const secondaryColor = toThreeColor(secondarySource)
    const tertiaryColor = toThreeColor(tertiarySource)

    // Blend all three to tint the glass background so every color influences resin
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

  const material = useMemo(() => {
    const entries = Object.entries(uniforms)
    const colors = uniforms.colors
    const uC1 = colorToRgb(colors[0])
    const uC2 = colorToRgb(colors[1])
    const uC3 = colorToRgb(colors[2])
    const rgbColors = {
      uC1r: { value: formatColor(uC1?.r) },
      uC1g: { value: formatColor(uC1?.g) },
      uC1b: { value: formatColor(uC1?.b) },
      uC2r: { value: formatColor(uC2?.r) },
      uC2g: { value: formatColor(uC2?.g) },
      uC2b: { value: formatColor(uC2?.b) },
      uC3r: { value: formatColor(uC3?.r) },
      uC3g: { value: formatColor(uC3?.g) },
      uC3b: { value: formatColor(uC3?.b) },
    }

    const uniformValues = entries.reduce((acc, [name, value]) => {
      const uniform = THREE.UniformsUtils.clone({ [name]: { value } })
      return {
        ...acc,
        ...uniform,
      }
    }, {})

    // Material configuration based on shader type
    const materialConfig = {
      userData: uniformValues, // sync uniform and userData to update uniforms from outside (MeshPhysicalMaterial)
      metalness:
        shader === 'glass'
          ? 0.0
          : shader === 'holographic'
          ? 0.8
          : shader === 'liquid'
          ? 0.1
          : 0.2,
      roughness:
        shader === 'glass'
          ? 0.1
          : shader === 'holographic'
          ? 0.2
          : shader === 'liquid'
          ? 0.05
          : 1 - (typeof reflection === 'number' ? reflection : 0.1),
      side: THREE.DoubleSide,
      onBeforeCompile: (shader) => {
        shader.uniforms = {
          ...shader.uniforms,
          ...uniformValues,
          ...rgbColors,
        }
        shader.vertexShader = vertexShader
        shader.fragmentShader = fragmentShader
      },
      // wireframe: true,
    } as any

    // Add glass/liquid-specific material properties
    if (shader === 'glass' || shader === 'liquid' || shader === 'resin') {
      materialConfig.transparent = true
      materialConfig.opacity =
        shader === 'liquid' ? 0.6 : shader === 'resin' ? 0.95 : 0.3
      materialConfig.transmission = shader === 'liquid' ? 0.95 : 0.9
      materialConfig.thickness =
        shader === 'liquid' ? 1.0 : shader === 'resin' ? 0.7 : 0.5
      materialConfig.clearcoat = 1.0
      materialConfig.clearcoatRoughness = shader === 'resin' ? 0.05 : 0.0
      materialConfig.ior = shader === 'liquid' ? 1.4 : 1.5
      materialConfig.envMapIntensity = shader === 'liquid' ? 1.5 : 1.0
    }

    const material = new THREE.MeshPhysicalMaterial(materialConfig)
    ;(material as any).uniforms = uniformValues

    entries.forEach(([name]) =>
      Object.defineProperty(material, name, {
        get: () => material.uniforms[name].value,
        set: (v) => (material.uniforms[name].value = v),
      })
    )

    if (onInit) onInit(material)
    return material
  }, [uniforms, vertexShader, fragmentShader, onInit, reflection, shader])

  useEffect(() => {
    return () => {
      material.dispose()
    }
  }, [material])

  // Sync clock with animate/range changes similar to v1's useTimeAnimation
  useEffect(() => {
    if (animate === 'on') {
      localClockRef.current.start()
    } else {
      localClockRef.current.stop()
    }
  }, [animate])

  // Animate uTime with useFrame (v1-like behavior)
  useFrame(() => {
    if (animate === 'on' && material.userData.uTime) {
      let elapsed = localClockRef.current.getElapsedTime()

      // Handle loop functionality
      if (loop === 'on' && Number.isFinite(loopDuration) && loopDuration > 0) {
        // For seamless loops, we need to ensure the time wraps around smoothly
        // The shader will handle the circular sampling to make it truly seamless
        elapsed = elapsed % loopDuration

        // Update loop uniforms
        if (material.userData.uLoop) {
          material.userData.uLoop.value = 1.0
        }
        if (material.userData.uLoopDuration) {
          material.userData.uLoopDuration.value = loopDuration
        }
      } else {
        // Disable loop in shader
        if (material.userData.uLoop) {
          material.userData.uLoop.value = 0.0
        }

        if (
          range === 'enabled' &&
          Number.isFinite(rangeStart) &&
          Number.isFinite(rangeEnd) &&
          rangeEnd > rangeStart
        ) {
          elapsed = (rangeStart as number) + elapsed
          if (elapsed >= (rangeEnd as number)) {
            elapsed = rangeStart as number
            // restart the local clock to loop precisely from rangeStart
            localClockRef.current.start()
          }
        }
      }

      material.userData.uTime.value = elapsed
    }
  })

  return <primitive attach='material' object={material} />
}
