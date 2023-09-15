import * as React from 'react'
import { useCursorStore, useQueryState } from '@/store'
import { ColorInput, Radio, Slider } from '@/ui'
import { InputPanel } from './InputPanel'

type ColorControlsPropsT = {
  hoverState?: number
  setHoverState?: any
  isFigma?: boolean
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

export const ColorControls: React.FC<ColorControlsPropsT> = ({ isFigma }) => {
  const [color1, setColor1] = useQueryState('color1')
  const [color2, setColor2] = useQueryState('color2')
  const [color3, setColor3] = useQueryState('color3')
  const [grain, setGrain] = useQueryState('grain')
  const [lightType, setLightType] = useQueryState('lightType')
  const [envPreset, setEnvPreset] = useQueryState('envPreset')
  const [reflection, setReflection] = useQueryState('reflection')
  const [brightness, setBrightness] = useQueryState('brightness')
  const [bgColor1, setBgColor1] = useQueryState('bgColor1')
  const [bgColor2, setBgColor2] = useQueryState('bgColor2')
  const updateHoverState = useCursorStore(
    (state: any) => state.updateHoverState
  )

  const [customBgColor, setCustomBgColor] = React.useState('off')
  const [isHovered, setIsHovered] = React.useState('')

  React.useEffect(() => {
    if (bgColor1 !== '#000000' || bgColor2 !== '#000000') {
      setCustomBgColor('on')
    } else {
      setCustomBgColor('off')
    }
  }, [bgColor1, bgColor2])

  return (
    <div className='flex flex-col gap-3'>
      <InputPanel
        title='Color 1'
        info={true}
        onMouseEnter={() => updateHoverState(1)}
        onMouseLeave={() => updateHoverState(0)}
      >
        <ColorInput defaultValue={color1} setValue={setColor1} />
      </InputPanel>
      <InputPanel
        title='Color 2'
        info={true}
        onMouseEnter={() => updateHoverState(2)}
        onMouseLeave={() => updateHoverState(0)}
      >
        <ColorInput defaultValue={color2} setValue={setColor2} />
      </InputPanel>
      <InputPanel
        title='Color 3'
        info={true}
        onMouseEnter={() => updateHoverState(3)}
        onMouseLeave={() => updateHoverState(0)}
      >
        <ColorInput defaultValue={color3} setValue={setColor3} />
      </InputPanel>

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
      {isFigma === false && (
        <InputPanel
          title='Custom Background'
          info={true}
          hoverContent='Change the background behind the 3d object. Default to be black'
          isHovered={isHovered}
          onMouseEnter={() => {
            setIsHovered('Custom Background')
          }}
          onMouseLeave={() => {
            setIsHovered('')
          }}
        >
          <Radio
            name='customBg'
            value='on'
            setValue={setCustomBgColor}
            check={customBgColor === 'on'}
            label='On'
          />
          <Radio
            name='customBg'
            value='off'
            setValue={setCustomBgColor}
            check={customBgColor === 'off'}
            label='Off'
          />
        </InputPanel>
      )}
      {customBgColor === 'on' && (
        <>
          <InputPanel title='Bg Color 1'>
            <ColorInput
              defaultValue={bgColor1 === null ? '#000000' : bgColor1}
              setValue={setBgColor1}
            />
          </InputPanel>
          <InputPanel title='Bg Color 2'>
            <ColorInput
              defaultValue={bgColor2 === null ? '#000000' : bgColor2}
              setValue={setBgColor2}
            />
          </InputPanel>
        </>
      )}
    </div>
  )
}
