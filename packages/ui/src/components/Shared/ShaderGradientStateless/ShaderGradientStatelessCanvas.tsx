import { ShaderGradientCanvas, mergeCanvasProps } from '@shadergradient/react'
import { useQueryState } from './store/useQueryState'

export function ShaderGradientStatelessCanvas(props) {
  const [pixelDensity] = useQueryState('pixelDensity')
  const [fov] = useQueryState('fov')
  const [preserveDrawingBuffer] = useQueryState('preserveDrawingBuffer')
  const [powerPreference] = useQueryState('powerPreference')

  const canvasProps = mergeCanvasProps({
    queryPixelDensity: pixelDensity,
    queryFov: fov,
    queryPreserveDrawingBuffer: preserveDrawingBuffer,
    queryPowerPreference: powerPreference,
    props,
  })

  return (
    <ShaderGradientCanvas
      {...props}
      pixelDensity={canvasProps.pixelDensity}
      fov={canvasProps.fov}
      preserveDrawingBuffer={canvasProps.preserveDrawingBuffer}
      powerPreference={canvasProps.powerPreference}
    />
  )
}
