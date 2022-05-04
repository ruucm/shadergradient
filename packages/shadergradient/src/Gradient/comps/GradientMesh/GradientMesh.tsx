// @ts-nocheck
import * as React from 'react'
import { useRef } from 'react'
import * as THREE from 'three'
<<<<<<< Updated upstream
import useQueryState from '../../../hooks/useQueryState'
import { useFiber } from '../../../useFiber'
import fragment from './glsl/shader.frag'
import vertex from './glsl/shader.vert'
=======
import {
  aboutPositions,
  aboutRotations,
  initialActivePreset,
} from '../../../consts'
import { useQueryState } from '../../../hooks/index'
import { PRESETS } from '../../../presets'
import {
  useUIStore,
  updateGradientState,
  usePropertyStore,
} from '../../../store'
import { dToRArr, useFiber } from '../../../utils/index'
>>>>>>> Stashed changes
import { shaderMaterial } from './shaderMaterial'

const meshCount = 192
const clock = new THREE.Clock()

export const GradientMesh: React.FC<any> = () => {
  const { useFrame, extend } = useFiber()

  const [uStrength] = useQueryState('uStrength')

  const ColorShiftMaterial = shaderMaterial(
    {
      side: THREE.DoubleSide,
      time: 0,
      color: new THREE.Color(0.05, 0.0, 0.025),
      uTime: { value: 0 }, // should be a object that has value to use in the shader
      uNoiseDensity: 2,
      uNoiseStrength: uStrength,
    },
    vertex,
    fragment
  )

  // change position/rotation for about page
  const inAbout = usePropertyStore((state: any) => state.inAbout)

  // This is the 🔑 that HMR will renew if this file is edited
  // It works for THREE.ShaderMaterial as well as for drei/shaderMaterial
  // @ts-ignore
  ColorShiftMaterial.key = THREE.MathUtils.generateUUID()

  extend({ ColorShiftMaterial })

  const material = useRef()
  useFrame((state, delta) => {
    // mesh.current.rotation.x += 0.01
    material.current.uniforms.uTime.value = clock.getElapsedTime()
  })

  return (
<<<<<<< Updated upstream
    <mesh>
      <planeGeometry args={[10, 10, meshCount, meshCount]} />
      {/* <boxGeometry args={[1, 1, 1]} /> */}
      {/* <meshStandardMaterial color={'gold'} /> */}
=======
    <mesh
      position={
        inAbout === true
          ? [aboutPositions[0], aboutPositions[1], aboutPositions[2]]
          : [positionX, positionY, positionZ]
      }
      rotation={
        inAbout === true
          ? dToRArr([aboutRotations[0], aboutRotations[1], aboutRotations[2]])
          : dToRArr([rotationX, rotationY, rotationZ])
      }
    >
      {type === 'plane' && <planeGeometry args={[10, 10, 1, meshCount]} />}
      {type === 'sphere' && (
        <icosahedronBufferGeometry args={[1, meshCount / 3]} />
      )}
      {type === 'waterPlane' && (
        <planeGeometry args={[10, 10, meshCount, meshCount]} />
      )}

>>>>>>> Stashed changes
      {/* @ts-ignore */}
      <colorShiftMaterial
        key={ColorShiftMaterial.key}
        time={3}
        ref={material}
      />
    </mesh>
  )
}
