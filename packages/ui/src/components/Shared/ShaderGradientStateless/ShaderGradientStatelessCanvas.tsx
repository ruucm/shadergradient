import { ShaderGradientCanvas } from '@shadergradient/react'
import { useQueryState } from '@/components/Shared/ShaderGradientStateless'
import { canvasProps } from '@/utils'

export function ShaderGradientStatelessCanvas(props) {
  const [pixelDensity] = useQueryState('pixelDensity')
  const [fov] = useQueryState('fov')

  return <ShaderGradientCanvas {...props} {...canvasProps(pixelDensity, fov)} />
}
