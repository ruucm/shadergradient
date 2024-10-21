import { GradientT } from '../types'
import { presets } from '../presets'
import { Mesh } from './Mesh'
import { Lights } from './Lights'
import { PostProcessing } from './PostProcessing'
import { Controls } from './Controls'
import * as qs from 'query-string'
import { formatUrlString } from '@/utils'

export function ShaderGradient(passedProps: GradientT): JSX.Element {
  const { control, urlString, ...rest } = {
    ...presets.halo.props,
    ...passedProps,
  }

  let props = rest
  if (control === 'query')
    props = qs.parse(formatUrlString(urlString), {
      parseNumbers: true,
      parseBooleans: true,
      arrayFormat: 'index',
    }) as any

  const { lightType, envPreset, brightness, grain, toggleAxis, ...others } =
    props

  return (
    <>
      <Mesh {...props} />
      <Lights />
      <PostProcessing />

      <Controls {...props} />
    </>
  )
}
