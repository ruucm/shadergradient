import React from 'react'
import { Spacing } from '../../Spacing'

type NumberInputPropsT = {
  label?: string
  setValue?: any
  arrow?: boolean
  value?: number
  step?: number
} & React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

export const NumberInput = React.forwardRef<
  HTMLInputElement,
  NumberInputPropsT
>(
  (
    {
      label = null,
      value,
      setValue = () => void 0,
      arrow = false,
      step = 0,
      ...inputProps
    }: NumberInputPropsT,
    ref
  ) => {
    return (
      <div className='flex items-center'>
        {label && (
          <>
            <label className='font-semibold text-primary text-base'>
              {label}
            </label>
            <Spacing className='w-2' />
          </>
        )}
        <div className='bg-primary bg-opacity-10 flex flex-row w-fit h-fit rounded items-center'>
          <input
            type='number'
            className='font-medium text-primary bg-transparent h-input w-control-number-input text-center outline-none text-base'
            ref={ref}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            step={step}
            // {...inputProps} // step.. etc
          />
          {arrow === true && (
            <div
              className='h-input flex flex-col text-primary justify-start items-center w-1'
              style={{ marginRight: 8, marginLeft: -5 }}
            >
              <div
                className='h-[50%] w-fit cursor-pointer flex items-center'
                onClick={() => {
                  setValue(value + step)
                }}
              >
                ▴
              </div>
              <div
                className='h-[50%] w-fit cursor-pointer flex items-center'
                onClick={() => {
                  setValue(value - step)
                }}
              >
                ▾
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }
)
