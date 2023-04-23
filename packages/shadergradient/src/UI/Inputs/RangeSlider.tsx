import * as React from 'react'
import { useEffect, useState } from 'react'
import ReactSlider from 'react-slider'
import { NumberInput, Spacing } from '../../UI/index'

type SliderPropsT = {
  // defaultValue: number
  setValue: any
  step: number
  min: number
  max: number
} & React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

export const RangeSlider = React.forwardRef<HTMLInputElement, SliderPropsT>(
  ({ setValue, step, min, max }: SliderPropsT, ref) => {
    // const [sharedValue, setSharedValue] = useState<any>(defaultValue)
    const [rangeStart, setRangeStart] = useState<any>(min)
    const [rangeEnd, setRangeEnd] = useState<any>(max)

    useEffect(() => {
      // setSharedValue(defaultValue) // init once with the passed value (from search params)
      setRangeStart(min)
      setRangeEnd(max)
    }, [])

    useEffect(() => {
      setValue([rangeStart, rangeEnd])
    }, [rangeStart, rangeEnd])

    return (
      <div className='flex items-center w-full'>
        <NumberInput value={rangeStart} setValue={setRangeStart} step={step} />

        <Spacing className='w-4' />

        <ReactSlider
          value={[Number(rangeStart), Number(rangeEnd)]}
          step={step}
          min={min}
          max={max}
          onChange={(value, index) => {
            setRangeStart(value[0])
            setRangeEnd(value[1])
          }}
          defaultValue={[min, max]}
          pearling // maintain the minDistance between two knobs
          minDistance={0.5}
          withTracks={true}
          // styles
          className='bg-primary h-[8px] w-full bg-opacity-20 rounded-full'
          marks={[(min + max) / 2]}
          markClassName='w-mark h-mark bg-primary top-1/2 transform -translate-y-1/2 slider-mark-center-x'
          thumbClassName='bg-primary w-thumb h-thumb rounded-full top-1/2 transform -translate-y-1/2 outline-none cursor-pointer'
          trackClassName='bg-primary h-[8px] rounded-full relative'
          renderTrack={(props, state) => (
            <div
              {...props}
              style={{
                ...props.style,
                opacity: state.index === 1 ? 0.7 : 0,
              }}
            ></div>
          )}
        />
        <Spacing className='w-4' />
        <NumberInput value={rangeEnd} setValue={setRangeEnd} step={step} />
      </div>
    )
  }
)
