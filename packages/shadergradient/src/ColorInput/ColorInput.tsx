import * as React from 'react'
import { useEffect, useState } from 'react'
import { Spacing } from '../Spacing'

type ColorInputPropsT = {
  label?: string
  setValue: any
  defaultValue: number
} & React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

export const ColorInput = React.forwardRef<HTMLInputElement, ColorInputPropsT>(
  ({ label = '', defaultValue, setValue }: ColorInputPropsT, ref) => {
    const [sharedValue, setSharedValue] = useState<any>(defaultValue)

    useEffect(() => {
      setSharedValue(defaultValue)
    }, [defaultValue])
    useEffect(() => {
      setValue(sharedValue)
    }, [sharedValue])

    return (
      <div className='flex items-center'>
        {label && (
          <>
            <label className='font-semibold text-primary'>{label}</label>
            <Spacing className='w-2' />
          </>
        )}
        <div className='flex items-center gap-2 w-full'>
          <div
            className='w-full h-input rounded'
            style={{ background: sharedValue }}
          >
            <input
              type='color'
              value={sharedValue}
              onChange={(e) => setSharedValue(e.target.value)}
              className='w-full h-full opacity-0 cursor-pointer'
              ref={ref}
            />
          </div>

          <input
            type='text'
            value={sharedValue}
            onChange={(e) => setSharedValue(e.target.value)}
            className='font-medium text-primary bg-primary bg-opacity-10 rounded h-input w-[90px] text-center outline-none'
          />
        </div>
      </div>
    )
  }
)
