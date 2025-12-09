import React, { useEffect, useMemo, useRef } from 'react'
import * as THREE from 'three'
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
    const materialConfig: THREE.MeshPhysicalMaterialParameters = {
      userData: uniformValues, // sync uniform and userData to update uniforms from outside (MeshPhysicalMaterial)
      metalness: shader === 'glass' ? 0.0 : 0.2,
      roughness:
        shader === 'glass'
          ? 0.1
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
    }

    // Add glass-specific material properties
    if (shader === 'glass') {
      materialConfig.transparent = true
      materialConfig.opacity = 0.3
      materialConfig.transmission = 0.9
      materialConfig.thickness = 0.5
      materialConfig.clearcoat = 1.0
      materialConfig.clearcoatRoughness = 0.0
      materialConfig.ior = 1.5
      materialConfig.envMapIntensity = 1.0
    }

    const material = new THREE.MeshPhysicalMaterial(materialConfig)

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
