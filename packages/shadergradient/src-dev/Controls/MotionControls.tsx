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
  const [range, setRange] = useQueryState('range')
  const [rangeStart, setRangeStart] = useQueryState('rangeStart')
  const [rangeEnd, setRangeEnd] = useQueryState('rangeEnd')
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
              name='range'
              value='enabled'
              setValue={setRange}
              check={range === 'enabled'}
              label='On'
            />
            <Radio
              name='range'
              value='disabled'
              setValue={setRange}
              check={range === 'disabled'}
              label='Off'
            />
          </InputPanel>
          {range === 'enabled' && (
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
                defaultValue={[rangeStart, rangeEnd]}
                setValue={(value) => {
                  const [start, end] = value
                  if (rangeStart !== start) {
                    setUTime(start)
                    setRangeStart(start)
                  }
                  if (rangeEnd !== end) setRangeEnd(end)
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
