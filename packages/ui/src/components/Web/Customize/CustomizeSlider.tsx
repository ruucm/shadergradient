import * as React from 'react'
import { useEffect, useState } from 'react'
import ReactSlider from 'react-slider'
import { NumberInput } from './NumberInput'
import { Spacing } from '../Spacing'

type SliderPropsT = {
  defaultValue: number
  setValue: any
  step: number
  min: number
  max: number
} & React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

export const CustomizeSlider = React.forwardRef<HTMLInputElement, SliderPropsT>(
  ({ defaultValue, setValue, step, min, max }: SliderPropsT, ref) => {
    const [sharedValue, setSharedValue] = useState<any>(defaultValue)

    useEffect(() => {
      setSharedValue(defaultValue) // init once with the passed value (from search params)
    }, [])
    useEffect(() => {
      setValue(sharedValue)
    }, [sharedValue])

    return (
      <div className='flex items-center w-full'>
        <NumberInput
          value={sharedValue}
          setValue={setSharedValue}
          step={step}
        />

        <Spacing className='w-4' />

        <ReactSlider
          value={Number(sharedValue)}
          step={step}
          min={min}
          max={max}
          onChange={(value, index) => setSharedValue(value)}
          // styles
          className='bg-[#FF430A] h-[2px] w-full'
          marks={[(min + max) / 2]}
          markClassName='w-[2px] h-[2px] bg-[#FF430A] top-1/2 transform -translate-y-1/2'
          thumbClassName='bg-[#FF430A] w-[16px] h-[16px] rounded-full top-1/2 transform -translate-y-1/2 outline-none cursor-pointer'
          thumbActiveClassName='bg-opacity-80'
        />
      </div>
    )
  }
)
