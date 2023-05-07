import * as React from 'react'
import { useQueryState } from '@/store'
import { Radio, RangeSlider, Slider } from '@/ui'
import { InputPanel } from './InputPanel'

type EffectControlsPropsT = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

export const EffectControls: React.FC<EffectControlsPropsT> = () => {
  const [animate, setAnimate] = useQueryState('animate')
  const [uTime, setUTime] = useQueryState('uTime')
  const [uSpeed, setUSpeed] = useQueryState('uSpeed')
  const [loop, setLoop] = useQueryState('loop')
  const [loopStart, setLoopStart] = useQueryState('loopStart')
  const [loopEnd, setLoopEnd] = useQueryState('loopEnd')
  const [grain, setGrain] = useQueryState('grain')
  const [lightType, setLightType] = useQueryState('lightType')
  const [envPreset, setEnvPreset] = useQueryState('envPreset')
  const [reflection, setReflection] = useQueryState('reflection')
  const [brightness, setBrightness] = useQueryState('brightness')
  const [isHovered, setIsHovered] = React.useState('')

  return (
    <div className='flex flex-col gap-3'>
      <InputPanel title='Animate'>
        <Radio
          name='animate'
          value='on'
          setValue={setAnimate}
          check={animate === 'on'}
          label='On'
        />
        <Radio
          name='animate'
          value='off'
          setValue={setAnimate}
          check={animate === 'off'}
          label='Off'
        />
      </InputPanel>

      {animate === 'off' && (
        <InputPanel title='Movements'>
          <Slider
            defaultValue={uTime}
            setValue={setUTime}
            step={0.1}
            min={0}
            max={9}
          />
        </InputPanel>
      )}

      {animate === 'on' && (
        <>
          <InputPanel title='Speed'>
            <Slider
              defaultValue={uSpeed}
              setValue={setUSpeed}
              step={0.1}
              min={0}
              max={2}
            />
          </InputPanel>
          <InputPanel title='Loop'>
            <Radio
              name='loop'
              value='enabled'
              setValue={setLoop}
              check={loop === 'enabled'}
              label='On'
            />
            <Radio
              name='loop'
              value='disabled'
              setValue={setLoop}
              check={loop === 'disabled'}
              label='Off'
            />
          </InputPanel>
          {loop === 'enabled' && (
            <InputPanel
              title='Range'
              info={true}
              hoverContent='Set the start and end of gif'
              isHovered={isHovered}
              onMouseEnter={() => {
                setIsHovered('Range')
              }}
              onMouseLeave={() => {
                setIsHovered('')
              }}
            >
              <RangeSlider
                defaultValue={[loopStart, loopEnd]}
                // setValue={setUDensity}
                setValue={(value) => {
                  const [start, end] = value
                  if (loopStart !== start) {
                    setUTime(start)
                    setLoopStart(start)
                  }
                  if (loopEnd !== end) setLoopEnd(end)
                }}
                step={0.1}
                min={0}
                max={40}
              />
            </InputPanel>
          )}
        </>
      )}
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
