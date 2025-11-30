import React from 'react'
import { motion } from 'framer-motion'
import { Spacing } from '../../Spacing'

type CustomizeNumberInputPropsT = {
  label?: string
  setValue?: any
  arrow?: boolean
  value?: number
  step?: number
} & React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

export const CustomizeNumberInput = React.forwardRef<
  HTMLInputElement,
  CustomizeNumberInputPropsT
>(
  (
    {
      label = null,
      value,
      setValue = () => void 0,
      arrow = false,
      step = 0,
      ...inputProps
    }: CustomizeNumberInputPropsT,
    ref
  ) => {
    return (
      <div className='flex items-center'>
        {label && (
          <>
            <label className='font-semibold text-[#FF430A] text-base'>
              {label}
            </label>
            <Spacing className='w-2' />
          </>
        )}
        <div className='bg-[#FF430A] bg-opacity-10 flex flex-row w-fit h-fit rounded items-center'>
          <input
            type='number'
            className='font-medium text-[#FF430A] bg-transparent h-input w-[53px] text-center outline-none text-base'
            ref={ref}
            value={value}
            onChange={(e) => setValue(e.target.valueAsNumber)}
            step={step}
            {...inputProps} // step.. etc
          />
          {arrow === true && (
            <div
              className='h-input flex flex-col text-[#FF430A] justify-start items-center w-1 max-md:hidden'
              style={{ marginRight: 8, marginLeft: -5 }}
            >
              <motion.div
                className='h-[50%] w-fit cursor-pointer flex items-center'
                onClick={() => {
                  setValue(value + step)
                }}
                initial={{ opacity: 0.5 }}
                whileHover={{ opacity: 1 }}
              >
                {/* arrow-up */}
                <svg xmlns='http://www.w3.org/2000/svg' width='8' height='8'>
                  <path
                    d='M 4.468 2.048 C 4.306 1.616 3.694 1.616 3.532 2.048 L 1.853 6.524 C 1.731 6.851 1.972 7.2 2.322 7.2 L 4 7.2 L 4 7.2 L 5.678 7.2 C 6.028 7.2 6.269 6.851 6.147 6.524 Z'
                    fill='rgb(255, 67, 10)'
                  ></path>
                </svg>
              </motion.div>
              <motion.div
                className='h-[50%] w-fit cursor-pointer flex items-center'
                onClick={() => {
                  setValue(value - step)
                }}
                initial={{ opacity: 0.5 }}
                whileHover={{ opacity: 1 }}
              >
                {/* arrow-down */}
                <svg xmlns='http://www.w3.org/2000/svg' width='8' height='8'>
                  <path
                    d='M 2.868 1.248 C 2.706 0.816 2.094 0.816 1.932 1.248 L 0.253 5.724 C 0.131 6.051 0.372 6.4 0.722 6.4 L 4.078 6.4 C 4.428 6.4 4.669 6.051 4.547 5.724 Z'
                    transform='translate(1.6 0.8) rotate(180 2.4 3.2)'
                    fill='rgb(255, 67, 10)'
                  ></path>
                </svg>
              </motion.div>
            </div>
          )}
        </div>
      </div>
    )
  }
)
