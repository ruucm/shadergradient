import * as React from 'react'
import { Radio } from '../Controls/index'
import { useQueryState } from '../hooks/index'
import { InputPanel } from '../InputPanel'
import { Slider } from '../Slider/index'

type ShapeControlsPropsT = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

export const ShapeControls: React.FC<ShapeControlsPropsT> = () => {
  const [type, setType] = useQueryState('type')
  const [shader, setShader] = useQueryState('shader')
  const [animate, setAnimate] = useQueryState('animate')
  const [uTime, setUTime] = useQueryState('uTime')
  const [uSpeed, setUSpeed] = useQueryState('uSpeed')
  const [uStrength, setUStrength] = useQueryState('uStrength')
  const [uDensity, setUDensity] = useQueryState('uDensity')
  const [uFrequency, setUFrequency] = useQueryState('uFrequency')
  const [uAmplitude, setUAmplitude] = useQueryState('uAmplitude')
  const [isHovered, setIsHovered] = React.useState('')

  return (
    <div className='flex flex-col gap-3'>
      <InputPanel title='Type'>
        <Radio
          name='type'
          value='plane'
          setValue={setType}
          check={type === 'plane'}
          label='Plane'
        />
        <Radio
          name='type'
          value='sphere'
          setValue={setType}
          check={type === 'sphere'}
          label='Sphere'
        />
        <Radio
          name='type'
          value='waterPlane'
          setValue={setType}
          check={type === 'waterPlane'}
          label='Water'
        />
      </InputPanel>

      <InputPanel title='Shader'>
        <Radio
          name='shader'
          value='defaults'
          setValue={setShader}
          check={shader === 'defaults'}
          label='Defaults'
        />
        <Radio
          name='shader'
          value='snakeHalftone'
          setValue={setShader}
          check={shader === 'snakeHalftone'}
          label='SnakeHalftone'
        />
        <Radio
          name='shader'
          value='noise'
          setValue={setShader}
          check={shader === 'noise'}
          label='noise'
        />
      </InputPanel>

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
        <InputPanel title='Speed'>
          <Slider
            defaultValue={uSpeed}
            setValue={setUSpeed}
            step={0.1}
            min={0}
            max={2}
          />
        </InputPanel>
      )}

      <InputPanel
        title='Noise Strength'
        info={true}
        hoverContent='Control the height of the bumps'
        isHovered={isHovered}
        onMouseEnter={() => {
          setIsHovered('Noise Strength')
        }}
        onMouseLeave={() => {
          setIsHovered('')
        }}
      >
        <Slider
          defaultValue={uStrength}
          setValue={setUStrength}
          step={0.1}
          min={0}
          max={10}
        />
      </InputPanel>

      <InputPanel
        title='Noise Density'
        info={true}
        hoverContent='Control the frequency of the bumps'
        isHovered={isHovered}
        onMouseEnter={() => {
          setIsHovered('Noise Density')
        }}
        onMouseLeave={() => {
          setIsHovered('')
        }}
      >
        <Slider
          defaultValue={uDensity}
          setValue={setUDensity}
          step={0.1}
          min={0}
          max={7}
        />
      </InputPanel>

      {type === 'sphere' && (
        <InputPanel title='Spiral'>
          <Slider
            defaultValue={uAmplitude || 0}
            setValue={setUAmplitude}
            step={0.1}
            min={0}
            max={7}
          />
        </InputPanel>
      )}
    </div>
  )
}
