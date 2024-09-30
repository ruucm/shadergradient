import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Mesh as PlaneMesh } from './Plane'
import { Mesh as WaterPlaneMesh } from './WaterPlane'
import { Mesh as SphereMesh } from './Sphere'
import { ShaderGradientProps } from './types'

const width = 10
const height = 10

export function ShaderGradient({
  type,
  position,
  rotation,
  uAmplitude,
}: ShaderGradientProps): JSX.Element {
  return (
    <Canvas resize={{ offsetSize: true }}>
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
      <OrbitControls />
    </Canvas>
  )
}
