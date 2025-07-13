import ReactSlider from 'react-slider'
import * as React from 'react'
import './slider.css'

type PluginSliderPropsT = {
  defaultValue: number
  setValue: any
  step: number
  min: number
  max: number
} & React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

export function Test({
  defaultValue,
  setValue,
  step,
  min,
  max,
}: PluginSliderPropsT): JSX.Element {
  const [sharedValue, setSharedValue] = React.useState<any>(defaultValue)
  const [isMouseOver, setIsMouseOver] = React.useState<boolean>(false)

  React.useEffect(() => {
    setSharedValue(defaultValue) // init once with the passed value (from search params)
  }, [])
  React.useEffect(() => {
    setValue(sharedValue)
  }, [sharedValue])

  return (
    <div
      className='flex items-center w-full h-fit flex-row gap-3'
      onMouseOver={() => setIsMouseOver(true)}
      onMouseLeave={() => setIsMouseOver(false)}
    >
      <ReactSlider
        value={Number(sharedValue)}
        step={step}
        min={min}
        max={max}
        onChange={(value, index) => setSharedValue(value)}
        //styles
        className={
          'w-full rounded-md bg-[#F2F2F2] cursor-ew-resize overflow-hidden transition-height duration-300 ' +
          (isMouseOver === true ? 'h-[26px]' : 'h-[5px]')
        }
        thumbClassName='hidden display-none'
        thumbActiveClassName='hidden display-none'
        trackClassName={
          'h-full duration-300 ' +
          (isMouseOver === true ? 'bg-[#ff340a]' : 'bg-[#ABABAB]')
        }
        renderTrack={(props, state) => (
          <div
            {...props}
            style={{
              ...props.style,
              opacity: state.index === 1 ? 0 : 1,
            }}
          ></div>
        )}
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
      />
      <input
        type='text'
        value={sharedValue}
        onChange={(e) => setSharedValue(e.target.value)}
        className='w-[42px] h-[26px] outline-none text-center bg-[#F2F2F2] rounded-md flex items-center justify-center'
      />
    </div>
  )
}
