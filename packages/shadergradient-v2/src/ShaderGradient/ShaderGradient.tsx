import { GradientT } from '../types'
import { presets } from '../presets'
import { Mesh } from './Mesh'
import { Lights } from './Lights'
import { PostProcessing } from './PostProcessing'
import { Controls } from './Controls'

export function ShaderGradient(passedProps: GradientT): JSX.Element {
  const { pixelDensity, fov, ...props } = {
    ...presets.halo.props,
    ...passedProps,
  }

  return (
    <>
      <Mesh {...props} />
      <Lights />
      <PostProcessing />

      <Controls {...props} />
    </>
  )
}
