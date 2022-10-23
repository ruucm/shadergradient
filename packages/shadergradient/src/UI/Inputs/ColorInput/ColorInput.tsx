import * as React from 'react'
import { useEffect, useState } from 'react'
import { hexToHsva, hsvaToHex } from '@uiw/color-convert'
import ShadeSlider from '@uiw/react-color-shade-slider'
import Wheel from '@uiw/react-color-wheel'
import { motion } from 'framer-motion'

import { Spacing } from '../../../UI/index'
import './slider.css'

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
    const [toggle, setToggle] = useState(false)
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
            <label className='font-semibold text-primary text-base'>
              {label}
            </label>
            <Spacing className='w-2' />
          </>
        )}
        <div className='flex items-center gap-2 w-full'>
          <div
            className='w-full h-input rounded relative'
            style={{ background: sharedValue }}
            onClick={() => {
              setToggle(!toggle)
            }}
          >
            {toggle === true && (
              <motion.div
                style={{
                  width: 'fit-content',
                  height: 290,
                  position: 'absolute',
                  bottom: 0,
                  left: 80,
                  zIndex: 100,
                  background: 'blue',
                }}
              >
                <div
                  style={{
                    position: 'fixed',
                    display: 'flex',
                    width: 'fit-content',
                    height: 'fit-content',
                    background: 'white',
                    padding: 24,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 16,
                    borderRadius: 5,
                    boxShadow: 'rgb(0 0 0 / 37%) 0px 1px 4px 0px',
                  }}
                >
                  <Wheel
                    color={sharedValue}
                    onChange={(color) => {
                      console.log(hexToHsva(sharedValue))
                      setSharedValue(color.hex)
                    }}
                    // ref={ref}
                    width={200}
                    height={200}
                  ></Wheel>
                  <ShadeSlider
                    width={200}
                    style={{ display: 'flex', alignItems: 'center' }}
                    hsva={hexToHsva(sharedValue)}
                    onChange={(color) => {
                      setSharedValue(
                        hsvaToHex({
                          h: hexToHsva(sharedValue).h,
                          s: color.s,
                          v: color.v,
                          a: 1,
                        })
                      )
                    }}
                  />
                </div>
              </motion.div>
            )}
          </div>

          <input
            type='text'
            value={sharedValue}
            onChange={(e) => setSharedValue(e.target.value)}
            className='font-medium text-primary bg-primary bg-opacity-10 rounded h-input w-[90px] text-center outline-none text-base'
          />
        </div>
      </div>
    )
  }
)
