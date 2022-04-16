// @ts-nocheck
import * as React from 'react'
import { useRef } from 'react'
import * as THREE from 'three'
import { useFiber } from '../../../useFiber'
import fragment from './glsl/shader.frag'
import vertex from './glsl/shader.vert'
import { shaderMaterial } from './shaderMaterial'

const meshCount = 192
const clock = new THREE.Clock()

export const GradientMesh: React.FC<any> = () => {
  const { useFrame, extend } = useFiber()

  const ColorShiftMaterial = shaderMaterial(
    {
      time: 0,
      color: new THREE.Color(0.05, 0.0, 0.025),
      uTime: { value: 0 }, // should be a object that has value to use in the shader
      uNoiseDensity: 0,
      uNoiseStrength: 0,
    },
    vertex,
    fragment
  )
  extend({ ColorShiftMaterial })

  const material = useRef()
  useFrame((state, delta) => {
    // mesh.current.rotation.x += 0.01
    material.current.uniforms.uTime.value = clock.getElapsedTime()
  })

  return (
    <mesh rotation={[0.3, 0.3, 0]}>
      <planeGeometry args={[10, 10, meshCount, meshCount]} />
      {/* <boxGeometry args={[1, 1, 1]} /> */}
      {/* <meshStandardMaterial color={'gold'} /> */}
      {/* @ts-ignore */}
      <colorShiftMaterial
        key={ColorShiftMaterial.key}
        time={3}
        ref={material}
      />
    </mesh>
  )
}
