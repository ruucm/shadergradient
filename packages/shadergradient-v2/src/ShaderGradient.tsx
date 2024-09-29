import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Mesh as PlaneMesh } from './Plane'
import { Mesh as WaterPlaneMesh } from './WaterPlane'
import { Mesh as SphereMesh } from './Sphere'

const width = 10
const height = 10

type ShaderGradientType = 'plane' | 'waterPlane' | 'sphere'

interface Position {
  positionX: number
  positionY: number
  positionZ: number
}

interface Rotation {
  rotationX: number
  rotationY: number
  rotationZ: number
}

interface ShaderGradientProps {
  position: Position
  rotation: Rotation
  type: ShaderGradientType
}

export function ShaderGradient({
  position,
  rotation,
  type,
}: ShaderGradientProps): JSX.Element {
  return (
    <Canvas resize={{ offsetSize: true }}>
      {type === 'plane' && (
        <PlaneMesh
          width={width}
          height={height}
          position={position}
          rotation={rotation}
        />
      )}
      {type === 'waterPlane' && (
        <WaterPlaneMesh
          width={width}
          height={height}
          position={position}
          rotation={rotation}
        />
      )}
      {type === 'sphere' && (
        <SphereMesh
          width={width}
          height={height}
          position={position}
          rotation={rotation}
        />
      )}
      <OrbitControls />
    </Canvas>
  )
}
