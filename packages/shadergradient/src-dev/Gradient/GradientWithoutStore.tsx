import { usePostProcessing } from './hooks/usePostProcessing'
import { Lights, Mesh, Axis, CameraControl } from './comps-without-store'
import { GradientT } from '../types'
import * as qs from 'query-string'
import { formatUrlString } from '@/utils'

export function GradientWithoutStore({
  control = 'props',
  dampingFactor,
  rotSpringOption,
  posSpringOption,
  isFigmaPlugin = false,
  ...props
}: GradientT) {
  let controlProps = props
  if (control === 'query')
    controlProps = qs.parse(formatUrlString(props.urlString), {
      parseNumbers: true,
      parseBooleans: true,
      arrayFormat: 'index',
    })
  const { lightType, envPreset, brightness, grain, toggleAxis, ...others } =
    controlProps

  usePostProcessing(grain === 'off')

  return (
    <>
      <Lights
        lightType={lightType}
        brightness={brightness}
        envPreset={envPreset}
      />
      <Mesh
        key={JSON.stringify(others)}
        {...others}
        rotSpringOption={rotSpringOption}
        posSpringOption={posSpringOption}
      />
      {toggleAxis && <Axis isFigmaPlugin={isFigmaPlugin} />}
      <CameraControl dampingFactor={dampingFactor} {...others} />
    </>
  )
}
