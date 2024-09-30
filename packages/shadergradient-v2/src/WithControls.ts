import { ShaderGradient as OriginalShaderGradient } from './ShaderGradient'
import { ControlType } from 'framer'
import { ShaderGradientWithControls } from './types'

const ShaderGradient = OriginalShaderGradient as ShaderGradientWithControls

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
  uAmplitude: {
    title: 'uAmplitude',
    type: ControlType.Number,
    min: 0,
    max: 7,
    step: 0.1,
    displayStepper: true,
    defaultValue: 2,
  },
}

export { ShaderGradient }
