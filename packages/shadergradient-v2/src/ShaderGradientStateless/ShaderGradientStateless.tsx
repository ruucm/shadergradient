import { GradientT } from '@/types'
import { ShaderGradient } from '../ShaderGradient/ShaderGradient'
import { useSearchParamToStore } from './store/useSearchParamToStore'
import { useControlValues } from './useControlValues'
import { useQueryState } from './store/useQueryState'

export function ShaderGradientStateless(passedProps: GradientT): JSX.Element {
  useSearchParamToStore() // init gradient state with url query
  const props = useControlValues(passedProps.control, passedProps) // make props using url query, control and passed props

  // Get query state setters
  const [, setCAzimuthAngle] = useQueryState('cAzimuthAngle')
  const [, setCPolarAngle] = useQueryState('cPolarAngle')
  const [, setCDistance] = useQueryState('cDistance')
  const [, setCameraZoom] = useQueryState('cameraZoom')

  const handleUpdate = (updates: Partial<GradientT>) => {
    // Update query state based on camera updates
    if (updates.cAzimuthAngle !== undefined) {
      setCAzimuthAngle(() => updates.cAzimuthAngle)
    }
    if (updates.cPolarAngle !== undefined) {
      setCPolarAngle(() => updates.cPolarAngle)
    }
    if (updates.cDistance !== undefined) {
      setCDistance(() => updates.cDistance)
    }
    if (updates.cameraZoom !== undefined) {
      setCameraZoom(() => updates.cameraZoom)
    }
  }

  return <ShaderGradient {...props} onChange={handleUpdate} />
}
