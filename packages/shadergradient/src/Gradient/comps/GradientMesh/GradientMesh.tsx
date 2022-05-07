import React, { useEffect } from 'react'
import { useRef } from 'react'
import * as THREE from 'three'
import { aboutPositions, aboutRotations } from '../../../consts'
import { usePropertyStore } from '../../../store'
import { dToRArr, useFiber } from '../../../utils/index'
import { shaderMaterial } from './shaderMaterial'
import * as shaders from './shaders/index'

const meshCount = 192
const clock = new THREE.Clock()

export const GradientMesh: React.FC<any> = ({
  type,
  animate,
  uTime,
  uSpeed,
  uStrength,
  uDensity,
  uFrequency,
  uAmplitude,
  positionX,
  positionY,
  positionZ,
  rotationX,
  rotationY,
  rotationZ,
  color1,
  color2,
  color3,
  wireframe,
  shader,
}) => {
  const { useFrame, extend } = useFiber()

  let sceneShader = shaders.defaults[type ?? 'plane'] // default type is plane
  if (shader && shader !== 'defaults') sceneShader = shaders[shader]

  const ColorShiftMaterial = shaderMaterial(
    {
      colors: [color1, color2, color3],
      uTime,
      uSpeed,

      uNoiseDensity: uDensity,
      uNoiseStrength: uStrength,
      uFrequency,
      uAmplitude,
      uIntensity: 0.5,
    },
    sceneShader.vertex,
    sceneShader.fragment
  )

  // change position/rotation for about page
  const inAbout = usePropertyStore((state: any) => state.inAbout)

  // This is the 🔑 that HMR will renew if this file is edited
  // It works for THREE.ShaderMaterial as well as for drei/shaderMaterial
  // @ts-ignore
  ColorShiftMaterial.key = THREE.MathUtils.generateUUID()

  extend({ ColorShiftMaterial })

  const material: any = useRef()
  useFrame((state, delta) => {
    if (animate === 'on')
      material.current.userData.uTime.value = clock.getElapsedTime()
  })
  useEffect(() => {
    material.current.userData.uTime.value = uTime
  }, [uTime])

  return (
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

      {/* @ts-ignore */}
      <colorShiftMaterial key={ColorShiftMaterial.key} ref={material} />
    </mesh>
  )
}
