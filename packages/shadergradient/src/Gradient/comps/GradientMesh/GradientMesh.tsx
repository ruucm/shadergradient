import React, { useEffect } from 'react'
import { useRef } from 'react'
import * as THREE from 'three'
import { usePropertyStore } from '../../../store'
import { dToRArr, sleep, useFiber } from '../../../utils/index'
import { lineMaterial } from './lineMaterial'
import { shaderMaterial } from './shaderMaterial'
import * as shaders from './shaders/index'

const clock = new THREE.Clock()

const delay = 1
const duration = 1.2
const to = 1
const speed = to / duration

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
  reflection,
  wireframe,
  shader,
}) => {
  const { useFrame, extend, animated, useSpring } = useFiber()

  let sceneShader = shaders.defaults[type ?? 'plane'] // default type is plane
  if (shader && shader !== 'defaults') sceneShader = shaders[shader]

  // when color is hovered
  const hoverState = usePropertyStore((state: any) => state.hoverState)
  const meshCount = 192
  const meshLineCount = 36

  useEffect(() => {
    if (hoverState !== 0) {
      usePropertyStore.setState({ zoomOut: true })
    } else {
      usePropertyStore.setState({ zoomOut: false })
    }
  }, [hoverState])

  const ColorShiftMaterial = shaderMaterial(
    {
      colors: getHoverColor(hoverState, [color1, color2, color3]),
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

  // This is the 🔑 that HMR will renew if this file is edited
  // It works for THREE.ShaderMaterial as well as for drei/shaderMaterial
  // @ts-ignore
  ColorShiftMaterial.key = THREE.MathUtils.generateUUID()

  extend({ ColorShiftMaterial })

  HoveredLineMaterial.key = THREE.MathUtils.generateUUID()

  extend({ HoveredLineMaterial })

  const material: any = useRef()
  const linemat: any = useRef()

  useFrame((state, delta) => {
    // loading animation
    if (clock.getElapsedTime() > delay) {
      if (clock.getElapsedTime() < duration + delay)
        material.current.userData.uLoadingTime.value =
          clock.getElapsedTime() * speed
      else material.current.userData.uLoadingTime.value = to + delay
    }

    // loop animation
    if (animate === 'on') {
      material.current.userData.uTime.value = clock.getElapsedTime()
      if (linemat.current !== undefined) {
        linemat.current.userData.uTime.value = clock.getElapsedTime()
      }
    }
  })

  useEffect(() => {
    material.current.userData.uTime.value = uTime
    if (linemat.current !== undefined) {
      linemat.current.userData.uTime.value = uTime
    }

    material.current.roughness = 1 - reflection
  }, [uTime, reflection])

  // change position/rotation for about page
  const { animatedRotation } = useSpring({
    to: async (next, cancel) => {
      await sleep(0.6)
      await next({
        animatedRotation: dToRArr([rotationX, rotationY, rotationZ]),
      })
    },
    from: { animatedRotation: dToRArr([0, 0, 0]) },
    config: { duration: duration * 1000 },
  })

  return (
    <group>
      {/* @ts-ignore */}
      <animated.mesh
        position={[positionX, positionY, positionZ]}
        rotation={animatedRotation}
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
      </animated.mesh>

      {/* show the line mesh when color is hovered */}
      <mesh>
        <lineSegments
          renderOrder={1}
          position={[positionX, positionY, positionZ]}
          rotation={dToRArr([rotationX, rotationY, rotationZ])}
          visible={hoverState !== 0 ? true : false}
        >
          {type === 'plane' && (
            <planeGeometry args={[10, 10, 1, meshLineCount]} />
          )}
          {type === 'sphere' && (
            <icosahedronBufferGeometry args={[1, meshLineCount / 3]} />
          )}
          {type === 'waterPlane' && (
            <planeGeometry args={[10, 10, meshLineCount, meshLineCount]} />
          )}
          {/* @ts-ignore */}
          <hoveredLineMaterial key={HoveredLineMaterial.key} ref={linemat} />
        </lineSegments>
      </mesh>
    </group>
  )
}

function getHoverColor(hoverState: number, colors: any) {
  if (hoverState === 1) return [colors[0], '#000000', '#000000']
  else if (hoverState === 2) return ['#000000', colors[1], '#000000']
  else if (hoverState === 3) return ['#000000', '#000000', colors[2]]
  else return [colors[0], colors[1], colors[2]]
}
