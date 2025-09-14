import * as React from 'react'
import { useEffect, useState, useRef } from 'react'
import { hexToHsva, hsvaToHex } from '@uiw/color-convert'
import ShadeSlider from '@uiw/react-color-shade-slider'
import Wheel from '@uiw/react-color-wheel'
import { useOnClickOutside } from '@/hooks/useOnClickOutside'
import { Spacing } from '@/components/Shared/Spacing'
import { usePropState } from '@/hooks/usePropState'

// Helper function to validate hex color and provide fallback
const isValidHex = (color: string): boolean => {
  if (!color || typeof color !== 'string') return false
  return /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(color)
}

const getValidColorOrFallback = (
  color: string,
  fallback: string = '#000000'
): string => {
  return isValidHex(color) ? color : fallback
}

type ColorInputPropsT = {
  label?: string
  setValue: any
  defaultValue: number
} & React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

export const CustomizeColorInput = React.forwardRef<
  HTMLInputElement,
  ColorInputPropsT
>(({ label = '', defaultValue, setValue }: ColorInputPropsT, ref) => {
  const [sharedValue, setSharedValue] = usePropState(defaultValue)
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
          className='w-full h-input rounded'
          style={{ background: getValidColorOrFallback(sharedValue) }}
          onClick={() => {
            setToggle(!toggle)
          }}
        ></div>

        {/* color control */}
        <div
          ref={tabRef}
          style={{
            width: 'fit-content',
            height: 'fit-content',
            position: 'absolute',
            bottom: 25,
            left: -10,
            zIndex: 100,
            display: toggle === true ? 'block' : 'none',
          }}
        >
          <div
            style={{
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
              color={getValidColorOrFallback(sharedValue)}
              onChange={(color) => {
                setSharedValue(color.hex)
              }}
              width={200}
              height={200}
            ></Wheel>
            <ShadeSlider
              width={200}
              style={{ display: 'flex', alignItems: 'center' }}
              hsva={hexToHsva(getValidColorOrFallback(sharedValue))}
              onChange={(color) => {
                const validColor = getValidColorOrFallback(sharedValue)
                setSharedValue(
                  hsvaToHex({
                    h: hexToHsva(validColor).h,
                    // @ts-ignore
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
        <input
          type='text'
          value={sharedValue}
          onChange={(e) => setSharedValue(e.target.value)}
          className='font-medium text-primary bg-primary bg-opacity-10 rounded h-input w-[90px] text-center outline-none text-base'
        />
      </div>
    </div>
  )
})
