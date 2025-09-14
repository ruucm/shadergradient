import * as React from 'react'
import { hexToHsva, hsvaToHex } from '@uiw/color-convert'
import ShadeSlider from '@uiw/react-color-shade-slider'
import Wheel from '@uiw/react-color-wheel'
import './slider.css'
import { useOnClickOutside } from '@/utils'

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
  defaultValue: number
  setValue: any
} & React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

export function ColorInput({
  defaultValue,
  setValue,
}: ColorInputPropsT): JSX.Element {
  const [sharedValue, setSharedValue] = React.useState<any>(defaultValue)
  const [isClicked, setIsClicked] = React.useState<boolean>(false)
  const colorPickerRef = React.useRef<HTMLDivElement>(null)
  const triggerRef = React.useRef<HTMLDivElement>(null)

  // React.useEffect(() => {
  //   setSharedValue(defaultValue) // init once with the passed value (from search params)
  // }, [])

  // React.useEffect(() => {
  //   setValue(sharedValue)
  // }, [sharedValue])

  React.useEffect(() => {
    setSharedValue(defaultValue) // init once with the passed value (from search params)
  }, [])

  React.useEffect(() => {
    setValue(sharedValue)
  }, [sharedValue])

  React.useEffect(() => {
    setSharedValue(defaultValue)
  }, [defaultValue])

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting && isClicked) {
          setIsClicked(false)
        }
      },
      { threshold: 0.5 } // Trigger when any part of the element is not visible
    )

    if (triggerRef.current) {
      observer.observe(triggerRef.current)
    }

    return () => {
      if (triggerRef.current) {
        observer.unobserve(triggerRef.current)
      }
    }
  }, [isClicked])

  const updateColorWheelPosition = React.useCallback(() => {
    if (isClicked && colorPickerRef.current && triggerRef.current) {
      const triggerRect = triggerRef.current.getBoundingClientRect()
      const colorWheelRect = colorPickerRef.current.getBoundingClientRect()

      // Center horizontally relative to trigger
      const left =
        triggerRect.left + triggerRect.width / 2 - colorWheelRect.width / 2
      // Position above trigger with 20px gap
      const top = triggerRect.top - colorWheelRect.height - 5

      colorPickerRef.current.style.left = `${left}px`
      colorPickerRef.current.style.top = `${top}px`
    }
  }, [isClicked])

  useOnClickOutside(colorPickerRef, () => setIsClicked(false))

  React.useEffect(() => {
    updateColorWheelPosition()

    // Add scroll event listener to update position
    const handleScroll = () => {
      updateColorWheelPosition()
    }

    if (isClicked) {
      window.addEventListener('scroll', handleScroll, true) // true for capture phase
    }

    return () => {
      window.removeEventListener('scroll', handleScroll, true)
    }
  }, [isClicked, updateColorWheelPosition])

  return (
    <div className='flex items-center w-full h-full flex-row gap-2'>
      <div className='flex items-center gap-2 w-full relative h-full'>
        <div
          ref={triggerRef}
          className='w-full h-[26px] rounded-md cursor-pointer'
          style={{
            background: getValidColorOrFallback(sharedValue),
            border:
              getValidColorOrFallback(sharedValue) === '#ffffff'
                ? '1px solid #F2F2F2'
                : '0px solid transparent',
          }}
          onClick={() => {
            setIsClicked(!isClicked)
          }}
        ></div>

        {/* color control */}
        <div
          ref={colorPickerRef}
          id='colorwheel'
          style={{
            width: 'fit-content',
            height: 'fit-content',
            position: 'fixed',
            zIndex: 100,
            display: isClicked === true ? 'block' : 'none',
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
              filter: 'drop-shadow(0px 0px 10px rgba(0,0,0,0.10))',
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
              radius={4}
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
      </div>
      <input
        type='text'
        value={sharedValue}
        onChange={(e) => setSharedValue(e.target.value)}
        className='w-[84px] h-[26px] outline-none text-center bg-[#F2F2F2] rounded-md flex items-center justify-center'
      />
    </div>
  )
}
