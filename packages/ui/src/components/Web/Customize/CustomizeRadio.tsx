import { cx } from '@/utils'
import * as React from 'react'

type RadioPropsT = {
  value: string
  label?: string
  check?: boolean
  setValue?: any
} & React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

export const CustomizeRadio = React.forwardRef<HTMLInputElement, RadioPropsT>(
  ({ label, check, setValue, value, name }: RadioPropsT, ref) => {
    return (
      <label
        className={cx(
          'flex justify-center items-center w-full h-input text-primary rounded cursor-pointer bg-primary hover:bg-opacity-10 select-none',
          check ? 'bg-opacity-10' : 'bg-opacity-0'
        )}
        htmlFor={value}
      >
        <input
          name={name}
          value={value}
          type='radio'
          id={value} // for htmlFor focusing
          className='absolute inline-block opacity-0 cursor-pointer'
          onChange={(e) => setValue(e.target.value)}
        />
        <span className='text-base font-medium'>{label || value}</span>
      </label>
    )
  }
)
