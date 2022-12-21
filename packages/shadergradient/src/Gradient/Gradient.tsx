import { Suspense } from 'react'
import { useControlValues, usePostProcessing, usePresetToStore } from './hooks'
import { Lights, Mesh, Axis, CameraControl } from './comps'

type Props = {
  control?: 'query' | 'props'
  isFigmaPlugin?: boolean
  [x: string]: any
}

export function Gradient({
  control = 'props',
  dampingFactor,
  rotSpringOption,
  posSpringOption,
  isFigmaPlugin = false,
  ...props
}: Props) {
  const { lightType, envPreset, brightness, grain, toggleAxis, ...others } =
    useControlValues(control, props)
  usePostProcessing(grain === 'off')

  usePresetToStore() // init gradient state with preset

  return (
    <Suspense fallback='Load Failed'>
      <Lights
        lightType={lightType}
        brightness={brightness}
        envPreset={envPreset}
      />
      <Mesh
        {...others}
        rotSpringOption={rotSpringOption}
        posSpringOption={posSpringOption}
      />
      {toggleAxis && <Axis isFigmaPlugin={isFigmaPlugin} />}
      <CameraControl dampingFactor={dampingFactor} {...others} />
    </Suspense>
  )
}
