import { useControlValues, usePostProcessing } from './hooks'
import { Lights, Mesh, Axis, CameraControl } from './comps'
import { usePresetToStore } from '@/store'
import { useSearchParamToStore } from '@/store/useSearchParamToStore'

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
  // usePresetToStore() // init gradient state with preset
  useSearchParamToStore() // init gradient state with url query

  const { lightType, envPreset, brightness, grain, toggleAxis, ...others } =
    useControlValues(control, props)
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
