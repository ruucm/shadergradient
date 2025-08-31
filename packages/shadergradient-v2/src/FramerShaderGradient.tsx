import { ShaderGradient } from './ShaderGradient'
import { ControlType } from 'framer'
import { GradientT } from './types'
import { propertyControls } from './presets'
import { formatFramerProps } from './utils'

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
  cameraAngle?: {
    cAzimuthAngle: number
    cPolarAngle: number
  }
  noise?: {
    uDensity: number
    uStrength: number
  }
}

export function FramerShaderGradient({
  position,
  rotation,
  cameraAngle,
  noise,
  ...rest
}: FramerShaderGradientProps): JSX.Element {
  const props = formatFramerProps({
    position,
    rotation,
    cameraAngle,
    noise,
    ...rest,
  })

  return <ShaderGradient {...props} />
}

FramerShaderGradient.propertyControls = propertyControls(ControlType)

export * from './ShaderGradientCanvas'
