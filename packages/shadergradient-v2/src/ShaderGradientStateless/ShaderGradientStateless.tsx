import { GradientT } from '@/types'
import { ShaderGradient } from '../ShaderGradient/ShaderGradient'
import { useSearchParamToStore } from './store/useSearchParamToStore'
import { useControlValues } from './useControlValues'
export { PRESETS } from './store/presetURLs'

export function ShaderGradientStateless(passedProps: GradientT): JSX.Element {
  useSearchParamToStore() // init gradient state with url query
  const props = useControlValues(passedProps.control, passedProps) // make props using url query, control and passed props

  return <ShaderGradient {...props} />
}
