import { ShaderGradientCanvas } from '@shadergradient/react'
import { useQueryState } from './store/useQueryState'

export function ShaderGradientStatelessCanvas(props) {
  const [pixelDensity] = useQueryState('pixelDensity')
  const [fov] = useQueryState('fov')

  return (
    <ShaderGradientCanvas
      {...props}
      pixelDensity={pixelDensity || 1}
      fov={fov || 45}
    />
  )
}
