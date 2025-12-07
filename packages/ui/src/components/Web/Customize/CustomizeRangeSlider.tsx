import * as React from 'react'
import { useEffect, useState } from 'react'
import ReactSlider from 'react-slider'
import { CustomizeNumberInput } from './CustomizeNumberInput'
import { Spacing } from '../Spacing'

type SliderPropsT = {
  setValue: any
  step: number
  min: number
  max: number
} & React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

export const CustomizeRangeSlider: React.FC<SliderPropsT> = ({
  defaultValue,
  setValue,
  step,
  min,
  max,
}) => {
  const defaultStart = defaultValue?.[0] || min
  const defaultEnd = defaultValue?.[1] || max
  const [rangeStart, setRangeStart] = useState<any>(defaultStart)
  const [rangeEnd, setRangeEnd] = useState<any>(defaultEnd)

  useEffect(() => {
    const nextStart = Array.isArray(defaultValue)
      ? defaultValue?.[0] ?? min
      : min
    const nextEnd = Array.isArray(defaultValue) ? defaultValue?.[1] ?? max : max

    setRangeStart(nextStart)
    setRangeEnd(nextEnd)
  }, [defaultValue, min, max])

  useEffect(() => {
    setValue([rangeStart, rangeEnd])
  }, [rangeStart, rangeEnd])

  return (
    <div className='flex items-center w-full'>
      <CustomizeNumberInput
        value={rangeStart}
        setValue={setRangeStart}
        step={step}
      />

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
        markClassName='w-mark h-mark bg-primary top-1/2 transform translate-x-1 -translate-y-1/2 slider-mark-center-x'
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

      <CustomizeNumberInput
        value={rangeEnd}
        setValue={setRangeEnd}
        step={step}
      />
    </div>
  )
}
