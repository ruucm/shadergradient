import * as React from 'react'
import { Radio } from '../Controls/index'
import { useQueryState } from '../hooks/index'
import { InputPanel } from '../InputPanel'
import { Slider } from '../UI/index'

type EffectControlsPropsT = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

export const EffectControls: React.FC<EffectControlsPropsT> = () => {
  const [grain, setGrain] = useQueryState('grain')
  const [lightType, setLightType] = useQueryState('lightType')
  const [envPreset, setEnvPreset] = useQueryState('envPreset')
  const [reflection, setReflection] = useQueryState('reflection')
  const [brightness, setBrightness] = useQueryState('brightness')
  const [isHovered, setIsHovered] = React.useState('')

  return (
    <div className='flex flex-col gap-3'>
      <InputPanel
        title='Grain'
        info={true}
        hoverContent='Grain effects can slow down the performance of the animation. '
        isHovered={isHovered}
        onMouseEnter={() => {
          setIsHovered('Grain')
        }}
        onMouseLeave={() => {
          setIsHovered('')
        }}
      >
        <Radio
          name='grain'
          value='on'
          setValue={setGrain}
          check={grain === 'on'}
          label='On'
        />
        <Radio
          name='grain'
          value='off'
          setValue={setGrain}
          check={grain === 'off'}
          label='Off'
        />
      </InputPanel>

      <InputPanel
        title='Environment'
        info={true}
        hoverContent='Environment lighting creates more dynamic lighting effects, e.g. reflections'
        isHovered={isHovered}
        onMouseEnter={() => {
          setIsHovered('Environment')
        }}
        onMouseLeave={() => {
          setIsHovered('')
        }}
      >
        <Radio
          name='lightType'
          value='env'
          setValue={setLightType}
          check={lightType === 'env'}
          label='On'
        />
        <Radio
          name='lightType'
          value='3d'
          setValue={setLightType}
          check={lightType === '3d'}
          label='Off'
        />
      </InputPanel>

      {lightType === 'env' && (
        <InputPanel title='Env Preset'>
          <Radio
            name='envPreset'
            value='city'
            setValue={setEnvPreset}
            check={envPreset === 'city'}
            label='City'
          />
          <Radio
            name='envPreset'
            value='dawn'
            setValue={setEnvPreset}
            check={envPreset === 'dawn'}
            label='Dawn'
          />
          <Radio
            name='envPreset'
            value='lobby'
            setValue={setEnvPreset}
            check={envPreset === 'lobby'}
            label='Lobby'
          />
        </InputPanel>
      )}

      {lightType === 'env' && (
        <InputPanel title='Reflection'>
          <Slider
            defaultValue={reflection}
            setValue={setReflection}
            step={0.1}
            min={0}
            max={1}
          />
        </InputPanel>
      )}

      {lightType === '3d' && (
        <InputPanel title='Brightness'>
          <Slider
            defaultValue={brightness}
            setValue={setBrightness}
            step={0.1}
            min={0}
            max={3}
          />
        </InputPanel>
      )}
    </div>
  )
}
