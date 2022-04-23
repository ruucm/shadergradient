import React from 'react'
import { Spacing } from '../../Spacing'

type NumberInputPropsT = {
  label?: string
  setValue?: any
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
      label = 'label',
      value,
      setValue = () => void 0,
      ...inputProps
    }: NumberInputPropsT,
    ref
  ) => {
    return (
      <div className='flex items-center'>
        {label && (
          <>
            <label className='font-semibold text-primary'>{label}</label>
            <Spacing className='w-2' />
          </>
        )}
        <input
          type='number'
          className='font-medium text-primary bg-primary bg-opacity-10 rounded h-input w-control-number-input text-center outline-none'
          ref={ref}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          // {...inputProps} // step.. etc
        />
      </div>
    )
  }
)
