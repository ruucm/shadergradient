import { Suspense } from 'react'
import { usePostProcessing } from './hooks'
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
  controls = {},
  ...props
}: Props) {
  const { lightType, envPreset, brightness, grain, toggleAxis, ...others } =
    controls
  // const { lightType, envPreset, brightness, grain, toggleAxis, ...others } =
  //   useControlValues(control, props)
  // usePostProcessing(grain === 'off')
  usePostProcessing(false)

  // usePresetToStore() // init gradient state with preset

  return (
    <>
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
    </>
  )
}
