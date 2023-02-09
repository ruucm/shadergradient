import * as React from 'react'
import { useEffect, useState, useRef } from 'react'
import { hexToHsva, hsvaToHex } from '@uiw/color-convert'
import ShadeSlider from '@uiw/react-color-shade-slider'
import Wheel from '@uiw/react-color-wheel'
import { useOnClickOutside } from '@/UI/hooks/useOnClickOutside'
import { Spacing } from '@/UI/Spacing'

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
      setSharedValue(defaultValue) // init once with the passed value (from search params)
    }, [])
    useEffect(() => {
      setValue(sharedValue)
    }, [sharedValue])

    const tabRef = useRef(null)
    useOnClickOutside(tabRef, () => setToggle(false))

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
        <div className='flex items-center gap-2 w-full relative'>
          <div
            className='w-full h-input rounded relative'
            style={{ background: sharedValue }}
            onClick={() => {
              setToggle(!toggle)
            }}
          >
            <div
              ref={tabRef}
              style={{
                width: 'fit-content',
                height: 290,
                position: 'absolute',
                bottom: 0,
                left: -10,
                zIndex: 100,
                display: toggle === true ? 'block' : 'none',
              }}
            >
              <div
                style={{
                  position: 'relative',
                  display: 'flex',
                  width: 'fit-content',
                  height: 'fit-content',
                  background: 'white',
                  padding: 16,
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 16,
                  borderRadius: 5,
                  filter: 'drop-shadow(0px 0px 10px rgba(0,0,0,0.37))',
                }}
              >
                <Wheel
                  color={sharedValue}
                  onChange={(color) => {
                    setSharedValue(color.hex)
                  }}
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
                <div
                  style={{
                    width: 16,
                    height: 16,
                    background: 'white',
                    position: 'absolute',
                    borderRadius: 3,
                    bottom: -5,
                    transform: 'rotate(45deg)',
                  }}
                ></div>
              </div>
            </div>
          </div>

          {/* color control */}

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
