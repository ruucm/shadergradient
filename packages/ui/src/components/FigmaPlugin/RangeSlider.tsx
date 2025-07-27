import ReactSlider from 'react-slider'
import { useState, useEffect } from 'react'
// import './slider.css'
import { InputTitle } from './InputTitle'

type RangeSliderPropsT = {
  title: string
  defaultValue: [number, number]
  value: [number, number]
  setValue: (value: [number, number]) => void
  step: number
  min: number
  max: number
  info: boolean
  infoContent: string
  condition: boolean
}

export function RangeSlider({
  title,
  defaultValue,
  setValue,
  step,
  min,
  max,
  info,
  infoContent,
  condition,
}: RangeSliderPropsT): JSX.Element {
  const [rangeValue, setRangeValue] = useState<[number, number]>(defaultValue)
  const [isMouseOver, setIsMouseOver] = useState(false)

  // Initialize once with the passed defaultValue (similar to Slider component)
  useEffect(() => {
    setRangeValue(defaultValue)
  }, [])

  useEffect(() => {
    setRangeValue(defaultValue)
  }, [defaultValue])

  useEffect(() => {
    setValue(rangeValue)
  }, [rangeValue])

  return (
    <div
      className='flex items-center w-full h-[26px] flex-row gap-2 font-["Inter"]'
    >
      <InputTitle
        title={title}
        info={info}
        infoContent={infoContent}
        condition={condition}
      />
      <div
        className='flex items-center w-full h-fit flex-row gap-2'
        onMouseOver={() => setIsMouseOver(true)}
        onMouseLeave={() => setIsMouseOver(false)}
      >
        <input
          type='number'
          value={rangeValue[0]}
          onChange={(e) => {
            setRangeValue([Number(e.target.value), rangeValue[1]])
          }}
          min={0}
          className={
            'font-medium w-[42px] h-[26px] outline-none text-center bg-[#F2F2F2] rounded-md flex items-center justify-center [&::-webkit-inner-spin-button]:appearance-none ' +
            (isMouseOver === true ? 'text-[#ff340a]' : 'text-[#000000]')
          }
          step={step}
        />
        <ReactSlider
          value={rangeValue}
          step={step}
          min={min}
          max={max}
          onChange={(values) => {
            setRangeValue(values as [number, number])
          }}
          className={
            'w-full rounded-md bg-[#F2F2F2] cursor-ew-resize overflow-hidden transition-height duration-300 ' +
            (isMouseOver === true ? 'h-[26px]' : 'h-[5px]')
          }
          trackClassName={
            'h-full duration-300 ' +
            (isMouseOver === true ? 'bg-[#ff340a]' : 'bg-[#ABABAB]')
          }
          renderTrack={(props, state) => (
            <div
              {...props}
              className={
                'h-full flex relative ' +
                (isMouseOver === true ? 'bg-[#ff340a]' : 'bg-[#ABABAB]')
              }
              style={{
                ...props.style,
                opacity: state.index === 1 ? 1 : 0,
              }}
            />
          )}
          renderThumb={(props, state) => (
            <div
              {...props}
              className='w-[8px] h-full justify-center items-center flex'
            >
              <div
                className={
                  'absolute w-[2px] bg-[#ffffff] rounded-full pointer-events-none duration-200 h-[30%] ' +
                  (isMouseOver === true ? 'opacity-100' : 'opacity-0')
                }
              />
            </div>
          )}
        />
        <input
          type='number'
          value={rangeValue[1]}
          onChange={(e) => {
            setRangeValue([rangeValue[0], Number(e.target.value)])
          }}
          className={
            'font-medium w-[42px] h-[26px] outline-none text-center bg-[#F2F2F2] rounded-md flex items-center justify-center [&::-webkit-inner-spin-button]:appearance-none ' +
            (isMouseOver === true ? 'text-[#ff340a]' : 'text-[#000000]')
          }
          step={step}
          max={max}
        />
      </div>
    </div>
  )
}
