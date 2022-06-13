import React, { useEffect } from 'react'
import { useRef } from 'react'
import * as THREE from 'three'
import { aboutPositions, aboutRotations } from '../../../consts'
import { usePropertyStore } from '../../../store'
import { dToRArr, useFiber } from '../../../utils/index'
import { lineMaterial } from './lineMaterial'
import * as shaders from './shaders/index'

export const LineMesh: React.FC<any> = ({
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
  const { useFrame, extend } = useFiber()
  const hoverState = usePropertyStore((state: any) => state.hoverState)

  const meshCount = hoverState !== 0 ? 48 : 192
  const clock = new THREE.Clock()

  let sceneShader = shaders.defaults[type ?? 'plane'] // default type is plane
  if (shader && shader !== 'defaults') sceneShader = shaders[shader]

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

  // change position/rotation for about page
  const inAbout = usePropertyStore((state: any) => state.inAbout)

  // This is the 🔑 that HMR will renew if this file is edited
  // It works for THREE.ShaderMaterial as well as for drei/shaderMaterial
  // @ts-ignore
  HoveredLineMaterial.key = THREE.MathUtils.generateUUID()

  extend({ HoveredLineMaterial })

  const mesh: any = useRef()
  const linemesh: any = useRef()
  const linemat: any = useRef()

  useFrame((state, delta) => {
    if (animate === 'on') {
      linemat.current.userData.uTime.value = clock.getElapsedTime()
    }
  })
  useEffect(() => {
    linemat.current.userData.uTime.value = uTime
  }, [uTime, reflection])

  return (
    <mesh
      ref={mesh}
      visible={hoverState !== 0 ? true : false}
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
      <lineSegments
        ref={linemesh}
        renderOrder={1}
        position={mesh.current !== undefined ? mesh.current.position : null}
        rotation={mesh.current !== undefined ? mesh.current.rotation : null}
        visible={hoverState !== 0 ? true : false}
        geometry={mesh.current !== undefined ? mesh.current.geometry : null}
      />
      {/* @ts-ignore */}
      <hoveredLineMaterial key={HoveredLineMaterial.key} ref={linemat} />
    </mesh>
  )
}
