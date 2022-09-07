import React, { useEffect } from 'react'
import { useRef } from 'react'
import * as THREE from 'three'
import { mainLoading } from '../../../consts'
import { usePropertyStore } from '../../../store'
import { dToRArr, useFiber } from '../../../utils/index'
import { lineMaterial } from './lineMaterial'
import { shaderMaterial } from './shaderMaterial'
import * as shaders from './shaders/index'


const { to, rotDur, meshDur, rotDelay, meshDelay } = mainLoading

const clock = new THREE.Clock()
//t = current time
//b = start value
//c = change in value
//d = duration

// @ts-ignore
Math.easeInOutCubic = function (t, b, c, d) {
  t /= d / 2
  if (t < 1) return (c / 2) * t * t * t + b
  t -= 2
  return (c / 2) * (t * t * t + 2) + b
}


const increment = 20
const { delay, duration, to } = mainLoading

const meshCount = 192
const meshLineCount = 36

export const GradientMesh: React.FC<any> = ({
  type,
  animate,
  uTime,
  positionX,
  positionY,
  positionZ,
  rotationX,
  rotationY,
  rotationZ,
  reflection,
  wireframe,
  shader,
  rotSpringOption = ({ rotation }) => ({
    to: async (next, cancel) => {
      await next({ animatedRotation: rotation })
    },
    from: { rotation: dToRArr([0, 0, 0]) },
    config: { duration: 300 }, // default transition
  }),
  posSpringOption = ({ position }) => ({
    to: async (next, cancel) => {
      await next({ animatedPosition: position })
    },
    from: { position: [0, 0, 0] },
    config: { duration: 300 }, // default transition
  }),
  ...materialProps // uSpeed, uStrength, uDensity, uFrequency, uAmplitude, color1, color2, color3, wireframe, shader
}) => {
  const { useFrame, extend, animated, useSpring, useSprings } = useFiber()

  const material: any = useRef()
  const linemat: any = useRef()
  const hoverState = usePropertyStore((state: any) => state.hoverState)

  useEffect(() => {
    material.current.userData.uTime.value = uTime
    if (linemat.current !== undefined)
      linemat.current.userData.uTime.value = uTime

    material.current.roughness = 1 - reflection
  }, [uTime, reflection])

  const { ColorShiftMaterial, HoveredLineMaterial } = useMaterials({
    type,
    uTime,
    ...materialProps,
    hoverState,
  })
  useMaterialAnimate({ animate, material, linemat })

  // change position/rotation for about page
  const position = [positionX, positionY, positionZ]
  const rotation = dToRArr([rotationX, rotationY, rotationZ])

  const { animatedPosition } = useSpring({ animatedPosition: position })
  const { animatedRotation } = useSpring(springOption({ rotation }))

  return (
    <group>
      {/* @ts-ignore */}
      <animated.mesh position={animatedPosition} rotation={animatedRotation}>
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
          rotation={rotation}
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

function useMaterials({
  type,
  uTime,

  uSpeed,
  uStrength,
  uDensity,
  uFrequency,
  uAmplitude,
  color1,
  color2,
  color3,
  wireframe,
  shader,

  hoverState,
}) {
  const { extend } = useFiber()

  let sceneShader = shaders.defaults[type ?? 'plane'] // default type is plane
  if (shader && shader !== 'defaults') sceneShader = shaders[shader]

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
      // tDiffuse: {
      //   width: 1060,
      //   height: 919,
      //   depth: 1,
      //   scissor: {
      //     x: 0,
      //     y: 0,
      //     z: 1060,
      //     w: 919,
      //   },
      //   scissorTest: false,
      //   viewport: {
      //     x: 0,
      //     y: 0,
      //     z: 1060,
      //     w: 919,
      //   },
      //   texture: {
      //     metadata: {
      //       version: 4.5,
      //       type: 'Texture',
      //       generator: 'Texture.toJSON',
      //     },
      //     uuid: '011C409F-9AAC-4677-8A3F-314D3E665425',
      //     name: 'EffectComposer.rt1',
      //     mapping: 300,
      //     repeat: [1, 1],
      //     offset: [0, 0],
      //     center: [0, 0],
      //     rotation: 0,
      //     wrap: [1001, 1001],
      //     format: 1023,
      //     type: 1009,
      //     encoding: 3000,
      //     minFilter: 1006,
      //     magFilter: 1006,
      //     anisotropy: 1,
      //     flipY: true,
      //     premultiplyAlpha: false,
      //     unpackAlignment: 4,
      //     image: '350E62FB-2018-4842-90B0-20D14C339B35',
      //   },
      //   depthBuffer: true,
      //   stencilBuffer: false,
      //   depthTexture: null,
      //   _listeners: {
      //     dispose: [null],
      //   },
      // },
      shape: 1,
      radius: 2,
      rotateR: (Math.PI / 12) * 1,
      rotateG: (Math.PI / 12) * 2,
      rotateB: (Math.PI / 12) * 3,
      scatter: 1,
      width: 1060,
      height: 919,
      // width: 0.1,
      // height: 0.1,
      // blending: 1,
      blendingMode: 1,
      greyscale: false,
      disable: false,
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

  return { ColorShiftMaterial, HoveredLineMaterial, hoverState }
}

function useMaterialAnimate({ animate, material, linemat }) {
  const { useFrame } = useFiber()

  let currentTime = 0
  useFrame((state, delta) => {
    const elapsed = clock.getElapsedTime()

    // loading animation
    if (elapsed > meshDelay) {
      const current = material.current.userData.uLoadingTime.value
      const val =
        elapsed < meshDur + meshDelay
          ? // @ts-ignore
            Math.easeInOutCubic(
              currentTime,
              current,
              to - current,
              meshDur * 1000
            )
          : to
      material.current.userData.uLoadingTime.value = val

      if (elapsed < meshDur + meshDelay) {
        currentTime += increment
        // console.log({ elapsed, val })
      }
    }

    // loop animation
    if (animate === 'on') {
      material.current.userData.uTime.value = elapsed
      if (linemat.current !== undefined) {
        linemat.current.userData.uTime.value = elapsed
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
  const position = [positionX, positionY, positionZ]
  const rotation = dToRArr([rotationX, rotationY, rotationZ])

  const { animatedPosition } = useSpring(posSpringOption({ position }))

  const { animatedRotation } = useSpring(rotSpringOption({ rotation }))

  return (
    <group>
      {/* @ts-ignore */}
      <animated.mesh position={animatedPosition} rotation={animatedRotation}>
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
          position={position}
          rotation={rotation}
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

//t = current time
//b = start value
//c = change in value
//d = duration
// @ts-ignore
Math.easeInExpo = function (t, b, c, d) {
  // source from http://gizma.com/easing/
  return c * Math.pow(2, 10 * (t / d - 1)) + b
}
