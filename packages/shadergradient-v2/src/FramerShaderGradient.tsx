import { ShaderGradient } from './ShaderGradient'
import { ControlType } from 'framer'
import { GradientT } from './types'
import { propertyControls } from './presets'

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
  const { positionX, positionY, positionZ } = position
  const { rotationX, rotationY, rotationZ } = rotation
  const { cAzimuthAngle, cPolarAngle } = cameraAngle
  const { uDensity, uStrength } = noise

  return (
    <ShaderGradient
      positionX={positionX}
      positionY={positionY}
      positionZ={positionZ}
      rotationX={rotationX}
      rotationY={rotationY}
      rotationZ={rotationZ}
      cAzimuthAngle={cAzimuthAngle}
      cPolarAngle={cPolarAngle}
      uDensity={uDensity}
      uStrength={uStrength}
      {...rest}
    />
  )
}

FramerShaderGradient.propertyControls = propertyControls(ControlType)

export * from './ShaderGradientCanvas'
