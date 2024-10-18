import { ShaderGradient } from './ShaderGradient'
import { addPropertyControls, ControlType } from 'framer'
import { GradientT } from './types'

type FramerShaderGradientProps = GradientT & {
  position?: {
    positionX: number
    positionY: number
    positionZ: number
  }
  rotation?: {
    rotationX: number
    rotationY: number
    rotationZ: number
  }
}

function FramerShaderGradient({
  position,
  rotation,
  ...rest
}: FramerShaderGradientProps) {
  const { positionX, positionY, positionZ } = position
  const { rotationX, rotationY, rotationZ } = rotation
  return (
    <ShaderGradient
      positionX={positionX}
      positionY={positionY}
      positionZ={positionZ}
      rotationX={rotationX}
      rotationY={rotationY}
      rotationZ={rotationZ}
      {...rest}
    />
  )
}

addPropertyControls(FramerShaderGradient, {
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
        defaultValue: 0,
      },
      positionZ: {
        type: ControlType.Number,
        step: 0.1,
        displayStepper: true,
        defaultValue: 0,
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
  uAmplitude: {
    title: 'uAmplitude',
    type: ControlType.Number,
    min: 0,
    max: 7,
    step: 0.1,
    displayStepper: true,
    defaultValue: 2,
  },
  color1: { type: ControlType.Color, defaultValue: '#ff5005' },
  color2: { type: ControlType.Color, defaultValue: '#dbba95' },
  color3: { type: ControlType.Color, defaultValue: '#d0bce1' },
})

export { FramerShaderGradient as ShaderGradient }
