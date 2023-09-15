import { usePostProcessing } from './hooks'
import { Lights, Mesh, Axis, CameraControl } from './comps'
import { GradientT } from '../types'

export function GradientWithouStore({
  control = 'props',
  dampingFactor,
  rotSpringOption,
  posSpringOption,
  isFigmaPlugin = false,
  ...props
}: GradientT) {
  const { lightType, envPreset, brightness, grain, toggleAxis, ...others } =
    props
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
