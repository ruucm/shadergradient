// @ts-nocheck
import * as React from 'react'
import { useRef } from 'react'
import * as THREE from 'three'
import { useFiber } from '../../../useFiber'
import fragment from './glsl/shader.frag'
import vertex from './glsl/shader.vert'

export const GradientMesh: React.FC<any> = () => {
  const { useFrame, extend, shaderMaterial } = useFiber()

  const ColorShiftMaterial = shaderMaterial(
    {
      time: 0,
      color: new THREE.Color(0.05, 0.0, 0.025),
    },
    vertex,
    fragment
  )
  extend({ ColorShiftMaterial })

  const mesh = useRef()
  useFrame((state, delta) => (mesh.current.rotation.x += 0.01))

  return (
    <mesh ref={mesh} rotation={[0.3, 0.3, 0]}>
      <boxGeometry args={[1, 1, 1]} />
      {/* <meshStandardMaterial color={'gold'} /> */}
      {/* @ts-ignore */}
      <colorShiftMaterial key={ColorShiftMaterial.key} time={3} />
    </mesh>
  )
}
