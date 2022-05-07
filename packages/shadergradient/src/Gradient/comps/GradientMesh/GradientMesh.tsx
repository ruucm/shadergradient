import React, { useEffect } from 'react'
import { useRef } from 'react'
import * as THREE from 'three'
import { useQueryState } from '../../../hooks/index'
import { dToRArr, useFiber } from '../../../utils/index'
import { shaderMaterial } from './shaderMaterial'
import * as shaders from './shaders/index'

const meshCount = 192
const clock = new THREE.Clock()

export const GradientMesh: React.FC<any> = (props) => {
  const { useFrame, extend } = useFiber()
  const {
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
    cameraPositionX,
    cameraPositionY,
    cameraPositionZ,
    wireframe,
    shader,
  } = useQueryOrProps(props)

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
      position={[positionX, positionY, positionZ]}
      rotation={dToRArr([rotationX, rotationY, rotationZ])}
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

function useQueryOrProps(props) {
  // shape
  const [type] = useQueryState('type')
  const [animate] = useQueryState('animate')
  const [uTime] = useQueryState('uTime')
  const [uSpeed] = useQueryState('uSpeed')
  const [uStrength] = useQueryState('uStrength')
  const [uDensity] = useQueryState('uDensity')
  const [uFrequency] = useQueryState('uFrequency')
  const [uAmplitude] = useQueryState('uAmplitude')
  const [positionX] = useQueryState('positionX')
  const [positionY] = useQueryState('positionY')
  const [positionZ] = useQueryState('positionZ')
  const [rotationX] = useQueryState('rotationX')
  const [rotationY] = useQueryState('rotationY')
  const [rotationZ] = useQueryState('rotationZ')

  // colors
  const [color1] = useQueryState('color1')
  const [color2] = useQueryState('color2')
  const [color3] = useQueryState('color3')
  // const hoverStateColor = getHoverColor(hoverState, [color1, color2, color3])

  // camera
  const [cameraPositionX] = useQueryState('cameraPositionX')
  const [cameraPositionY] = useQueryState('cameraPositionY')
  const [cameraPositionZ] = useQueryState('cameraPositionZ')

  const [wireframe] = useQueryState('wireframe')

  // shader
  const [shader] = useQueryState('shader')

  return {
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
    cameraPositionX,
    cameraPositionY,
    cameraPositionZ,
    wireframe,
    shader,
    ...props,
  }
}
