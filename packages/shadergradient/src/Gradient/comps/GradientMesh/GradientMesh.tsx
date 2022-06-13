import React, { useEffect } from 'react'
import { useRef } from 'react'
import * as THREE from 'three'
import { aboutPositions, aboutRotations } from '../../../consts'
import { usePropertyStore } from '../../../store'
import { dToRArr, useFiber } from '../../../utils/index'
import { lineMaterial } from './lineMaterial'
import { shaderMaterial } from './shaderMaterial'
import * as shaders from './shaders/index'

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
  reflection,
  wireframe,
  shader,
}) => {
  const { useFrame, extend } = useFiber()

  let sceneShader = shaders.defaults[type ?? 'plane'] // default type is plane
  if (shader && shader !== 'defaults') sceneShader = shaders[shader]

  // when color is hovered
  const hoverState = usePropertyStore((state: any) => state.hoverState)
  const meshCount = hoverState !== 0 ? 48 : 192

  // const [meshCount, setMeshCount] = useState(48)
  useEffect(() => {
    // if (hoverState !== 0) {
    //   setMeshCount(48)
    // } else {
    //   setMeshCount(192)
    // }
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

  const mesh: any = useRef()
  const material: any = useRef()
  const linemesh: any = useRef()
  const linemat: any = useRef()

  useFrame((state, delta) => {
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

  useEffect(() => {
    if (mesh.current !== undefined && linemesh.current !== undefined) {
      console.log(linemesh.current)
    }
  }, [mesh.current])

  // change position/rotation for about page
  const inAbout = usePropertyStore((state: any) => state.inAbout)

  return (
    <group>
      <mesh
        ref={mesh}
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
      <mesh>
        <lineSegments
          ref={linemesh}
          renderOrder={1}
          position={
            inAbout === true
              ? [aboutPositions[0], aboutPositions[1], aboutPositions[2]]
              : [positionX, positionY, positionZ]
          }
          rotation={
            inAbout === true
              ? dToRArr([
                  aboutRotations[0],
                  aboutRotations[1],
                  aboutRotations[2],
                ])
              : dToRArr([rotationX, rotationY, rotationZ])
          }
          visible={hoverState !== 0 ? true : false}
          // geometry={mesh.current.geometry}
        >
          {type === 'plane' && <planeGeometry args={[10, 10, 1, 48]} />}
          {type === 'sphere' && (
            <icosahedronBufferGeometry args={[1, 48 / 3]} />
          )}
          {type === 'waterPlane' && <planeGeometry args={[10, 10, 48, 48]} />}
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
