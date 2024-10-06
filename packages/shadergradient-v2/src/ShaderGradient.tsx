import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Mesh as PlaneMesh } from './Plane'
import { Mesh as WaterPlaneMesh } from './WaterPlane'
import { Mesh as SphereMesh } from './Sphere'
import { MeshT, ShaderGradientProps } from './types'
import { presets } from './presets'

const width = 10
const height = 10

export function ShaderGradient(passedProps: ShaderGradientProps): JSX.Element {
  const props = { ...presets.base.props, ...passedProps }

  return (
    <Canvas resize={{ offsetSize: true }}>
      <Mesh {...props} />
      <OrbitControls />
    </Canvas>
  )
}

function Mesh({ type, ...props }: any) {
  const {
    positionX,
    positionY,
    positionZ,
    rotationX,
    rotationY,
    rotationZ,
    uAmplitude,
  } = props

  const position = { positionX, positionY, positionZ }
  const rotation = { rotationX, rotationY, rotationZ }

  return (
    <>
      {type === 'plane' && (
        <PlaneMesh
          width={width}
          height={height}
          position={position}
          rotation={rotation}
          uAmplitude={uAmplitude}
        />
      )}
      {type === 'waterPlane' && (
        <WaterPlaneMesh
          width={width}
          height={height}
          position={position}
          rotation={rotation}
          uAmplitude={uAmplitude}
        />
      )}
      {type === 'sphere' && (
        <SphereMesh
          width={width}
          height={height}
          position={position}
          rotation={rotation}
          uAmplitude={uAmplitude}
        />
      )}
    </>
  )
}
