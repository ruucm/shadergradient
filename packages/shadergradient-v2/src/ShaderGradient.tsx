import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Mesh as PlaneMesh } from './Plane'
import { Mesh as WaterPlaneMesh } from './WaterPlane'
import { Mesh as SphereMesh } from './Sphere'
import { ControlType } from 'framer'

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

export const ShaderGradient: React.FC<ShaderGradientProps> = ({
  position,
  rotation,
  type,
}) => {
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

ShaderGradient.propertyControls = {
  type: {
    type: ControlType.Enum,
    options: ['plane', 'sphere', 'waterPlane'],
    optionTitles: ['Plane', 'Sphere', 'Water'],
    displaySegmentedControl: true,
  },
  position: {
    type: ControlType.Object,
    controls: {
      positionX: {
        type: ControlType.Number,
        step: 0.1,
        displayStepper: true,
        defaultValue: 0,
      },
      positionY: {
        type: ControlType.Number,
        step: 0.1,
        displayStepper: true,
      },
      positionZ: {
        type: ControlType.Number,
        step: 0.1,
        displayStepper: true,
      },
    },
  },
  rotation: {
    type: ControlType.Object,
    controls: {
      rotationX: {
        type: ControlType.Number,
        step: 10,
        min: -360,
        max: 360,
        displayStepper: true,
        defaultValue: 0,
      },
      rotationY: {
        type: ControlType.Number,
        step: 10,
        min: -360,
        max: 360,
        displayStepper: true,
        defaultValue: 0,
      },
      rotationZ: {
        type: ControlType.Number,
        step: 10,
        min: -360,
        max: 360,
        displayStepper: true,
        defaultValue: 0,
      },
    },
  },
}
