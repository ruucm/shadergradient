import { useState, useCallback, useEffect } from 'react'

export const NumberInput = ({
  label,
  value,
  setValue,
  mouseOverOn,
  setMouseOverOn,
  min,
  max,
  step,
}) => {
  const [snapshot, setSnapshot] = useState(value)
  const [startVal, setStartVal] = useState(0)

  const onStart = useCallback(
    (event) => {
      setStartVal(event.clientX)
      setSnapshot(value)
    },
    [value]
  )

  useEffect(() => {
    const onUpdate = (event) => {
      if (startVal) {
        const diff = event.clientX - startVal
        const sensitivity = 0.5 // Adjust this value to control sensitivity (lower = less sensitive)
        const rawValue = snapshot + diff * sensitivity
        const newValue = step ? Math.round(rawValue / step) * step : rawValue
        if (min !== undefined && newValue < min) return
        if (max !== undefined && newValue > max) return
        // Get the number of decimal places from step
        const decimalPlaces = step
          ? step.toString().split('.')[1]?.length || 0
          : 0
        setValue(parseFloat(newValue.toFixed(decimalPlaces)))
      }
    }

    const onEnd = () => {
      setStartVal(0)
    }

    document.addEventListener('mousemove', onUpdate)
    document.addEventListener('mouseup', onEnd)
    return () => {
      document.removeEventListener('mousemove', onUpdate)
      document.removeEventListener('mouseup', onEnd)
    }
  }, [startVal, setValue, snapshot, min, max, step])

  return (
    <div
      className='w-full bg-[#F2F2F2] rounded-md flex flex-row gap-0 justify-center items-center h-full relative cursor-ew-resize font-["Inter"]'
      onMouseOver={() => setMouseOverOn(label)}
      onMouseLeave={() => setMouseOverOn('')}
      onMouseDown={onStart}
    >
      <div className='h-full w-fit flex justify-center items-center text-[9px] text-black opacity-70 capitalize ml-2 select-none'>
        {label}
      </div>
      <div className='w-full flex justify-center items-center'>
        <input
          type='number'
          value={value}
          onChange={(e) => {
            const parsed = parseFloat(e.target.value)
            if (!isNaN(parsed)) {
              setValue(parsed)
            }
          }}
          className={
            'font-medium w-[24px] h-[26px] outline-none text-center bg-[#F2F2F2] rounded-md [&::-webkit-inner-spin-button]:appearance-none overflow-visible select-none ' +
            (mouseOverOn === label ? 'text-[#ff340a]' : 'text-[#000000]')
          }
          min={min}
          max={max}
          step={step}
        />
      </div>
    </div>
  )
}
