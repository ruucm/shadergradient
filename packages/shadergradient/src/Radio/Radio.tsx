import * as React from 'react'
import cx from 'classnames'

type RadioPropsT = {
  value: string
  label?: string
  check?: boolean
  setValue?: any
} & React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

export const Radio = React.forwardRef<HTMLInputElement, RadioPropsT>(
  ({ label, check, setValue, ...inputProps }: RadioPropsT, ref) => {
    return (
      <label
        className={cx(
          'flex justify-center items-center w-full h-input text-primary rounded cursor-pointer bg-primary hover:bg-opacity-10',
          check ? 'bg-opacity-10' : 'bg-opacity-0'
        )}
        htmlFor={inputProps.value}
      >
        <input
          type='radio'
          id={inputProps.value} // for htmlFor focusing
          className='absolute inline-block opacity-0 cursor-pointer'
          onChange={(e) => setValue(e.target.value)}
          {...inputProps} // value, name
        />
        <span className='text-base font-medium'>
          {label || inputProps.value}
        </span>
      </label>
    )
  }
)
