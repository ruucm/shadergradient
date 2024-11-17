import React, { useEffect, useMemo } from 'react'
import * as THREE from 'three'
import { colorToRgb, formatColor } from '@/utils'
import { useFrame } from '@react-three/fiber'

// Define the material component
export const Materials = ({
  animate,
  uniforms,
  vertexShader,
  fragmentShader,
  onInit,
}) => {
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

    const material = new THREE.MeshPhysicalMaterial({
      userData: uniformValues, // sync uniform and userData to update uniforms from outside (MeshPhysicalMaterial)

      metalness: 0.2, // similar effects reducing -0.2 intensity of the ambient light
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
    })

    entries.forEach(([name]) =>
      Object.defineProperty(material, name, {
        get: () => material.uniforms[name].value,
        set: (v) => (material.uniforms[name].value = v),
      })
    )

    if (onInit) onInit(material)
    return material
  }, [uniforms, vertexShader, fragmentShader, onInit])

  useEffect(() => {
    return () => {
      material.dispose()
    }
  }, [material])

  // Animate uTime with useFrame
  useFrame(({ clock }) => {
    if (animate === 'on' && material.userData.uTime) {
      material.userData.uTime.value = clock.getElapsedTime()
    }
  })

  return <primitive attach='material' object={material} />
}
