import React from 'react'
import { dToRArr } from '@/utils'
import { animated, useSpring } from '@react-spring/three'
import { useMaterials } from './useMaterials'
import { useTimeAnimation } from './useTimeAnimation'
import { useHoverColorInfo } from './useHoverColorInfo'
import { MeshT } from '@/types'

// @ts-ignore
Math.easeInOutCubic = function (t, b, c, d) {
  t /= d / 2
  if (t < 1) return (c / 2) * t * t * t + b
  t -= 2
  return (c / 2) * (t * t * t + 2) + b
}
const meshCount = 192
const meshLineCount = 36

export const Mesh: React.FC<MeshT> = ({
  type,
  animate,
  range,
  rangeStart,
  rangeEnd,
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
}) => {
  const [hoverState, colors] = useHoverColorInfo({ color1, color2, color3 })
  const materialMounted = useMaterials({
    type,
    shader,
    ...colors,
    uTime,
    uSpeed,
    uDensity,
    uStrength,
    uFrequency,
    uAmplitude,
  })

  const { material, linemat } = useTimeAnimation({
    animate,
    range,
    rangeStart,
    rangeEnd,
  })

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
        {type === 'sphere' && <icosahedronGeometry args={[1, meshCount / 3]} />}
        {type === 'waterPlane' && (
          <planeGeometry args={[10, 10, meshCount, meshCount]} />
        )}
        {materialMounted && (
          // @ts-ignore
          <colorShiftMaterial ref={material} roughness={1 - reflection} />
        )}
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
            <icosahedronGeometry args={[1, meshLineCount / 3]} />
          )}
          {type === 'waterPlane' && (
            <planeGeometry args={[10, 10, meshLineCount, meshLineCount]} />
          )}
          {/* @ts-ignore */}
          {materialMounted && <hoveredLineMaterial ref={linemat} />}
        </lineSegments>
      </mesh>
    </group>
  )
}
