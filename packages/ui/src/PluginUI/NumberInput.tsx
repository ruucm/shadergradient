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
  return (
    <div
      className='w-full bg-[#F2F2F2] rounded-md flex flex-row gap-0 justify-center items-center h-full'
      onMouseOver={() => setMouseOverOn(label)}
      onMouseLeave={() => setMouseOverOn('')}
    >
      <div className='h-full w-fit flex justify-center items-center text-[9px] text-black opacity-70 capitalize ml-2 select-none'>
        {label}
      </div>
      <input
        type='number'
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={
          'font-medium w-full h-[26px] outline-none text-center bg-[#F2F2F2] rounded-md flex items-center justify-center [&::-webkit-inner-spin-button]:appearance-none ' +
          (mouseOverOn === label ? 'text-[#ff340a]' : 'text-[#000000]')
        }
        min={min}
        max={max}
        step={step}
      />
    </div>
  )
}
