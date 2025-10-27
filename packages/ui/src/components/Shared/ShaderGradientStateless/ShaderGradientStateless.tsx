import { ControlType } from 'framer'
import {
  ShaderGradient,
  GradientT,
  propertyControls,
} from '@shadergradient/react'
import { useSearchParamToStore } from './store/useSearchParamToStore'
import { useControlValues } from './useControlValues'
export { PRESETS } from './store/presetURLs'

export function ShaderGradientStateless(passedProps: GradientT): JSX.Element {
  useSearchParamToStore() // init gradient state with url query
  const props = useControlValues(passedProps.control, passedProps) // make props using url query, control and passed props

  // enableCameraUpdate defaults to true if not specified
  const enableCameraUpdate = passedProps.enableCameraUpdate !== false

  return (
    <ShaderGradient
      {...props}
      onCameraUpdate={
        enableCameraUpdate
          ? (updates) => {
              const { cAzimuthAngle, cPolarAngle, cDistance, cameraZoom } =
                updates
              // defer writing to the URL store; useQueryState itself handles URL push
              if (typeof window !== 'undefined') {
                // Lazy import to avoid coupling at build time; same store contract
                const { useQueryStore } = require('./store')
                const next: any = {}
                if (typeof cAzimuthAngle !== 'undefined')
                  next.cAzimuthAngle = cAzimuthAngle
                if (typeof cPolarAngle !== 'undefined')
                  next.cPolarAngle = cPolarAngle
                if (typeof cDistance !== 'undefined') next.cDistance = cDistance
                if (typeof cameraZoom !== 'undefined')
                  next.cameraZoom = cameraZoom
                if (Object.keys(next).length) {
                  useQueryStore.setState(next)
                }
              }
            }
          : undefined
      }
    />
  )
}

ShaderGradientStateless.propertyControls = propertyControls(
  ControlType,
  'stateless'
)
