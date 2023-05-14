import * as React from 'react'
import { useQueryState } from '@/store'
import { Radio, RangeSlider, Slider } from '@/ui'
import { InputPanel } from './InputPanel'

type MotionControlsPropsT = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

export const MotionControls: React.FC<MotionControlsPropsT> = () => {
  const [animate, setAnimate] = useQueryState('animate')
  const [uTime, setUTime] = useQueryState('uTime')
  const [uSpeed, setUSpeed] = useQueryState('uSpeed')
  const [loop, setLoop] = useQueryState('loop')
  const [loopStart, setLoopStart] = useQueryState('loopStart')
  const [loopEnd, setLoopEnd] = useQueryState('loopEnd')
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
          <InputPanel
            title='Range'
            info={true}
            hoverContent='Make the motion repeated by setting a beginning and end. Off to make it infinite. '
            isHovered={isHovered}
            onMouseEnter={() => {
              setIsHovered('Range')
            }}
            onMouseLeave={() => {
              setIsHovered('')
            }}
          >
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
              title='Range Start/End'
              info={true}
              hoverContent='Set a start and end of the repeated range.'
              isHovered={isHovered}
              onMouseEnter={() => {
                setIsHovered('Range Start/End')
              }}
              onMouseLeave={() => {
                setIsHovered('')
              }}
            >
              <RangeSlider
                defaultValue={[loopStart, loopEnd]}
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
    </div>
  )
}
