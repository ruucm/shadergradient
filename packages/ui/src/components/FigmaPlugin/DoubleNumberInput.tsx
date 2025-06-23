import { useState, useEffect } from 'react'
import { InputTitle } from './InputTitle'
import { NumberInput } from './NumberInput'

type DoubleNumberInputPropsT = {
  title: string
  labelX: string
  labelY: string
  defaultValueX: number
  defaultValueY: number
  setValueX: any
  setValueY: any
  step: number
  min: number
  max: number
  info: boolean
  infoContent: string
  condition: boolean
} & React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

export function DoubleNumberInput({
  title,
  defaultValueX,
  defaultValueY,
  labelX,
  labelY,
  setValueX,
  setValueY,
  step,
  min,
  max,
  info,
  infoContent,
  condition,
}: DoubleNumberInputPropsT): JSX.Element {
  const [sharedValueX, setSharedValueX] = useState<any>(defaultValueX)
  const [sharedValueY, setSharedValueY] = useState<any>(defaultValueY)

  const [mouseOverOn, setMouseOverOn] = useState<string>('')

  useEffect(() => {
    setSharedValueX(defaultValueX) // init once with the passed value (from search params)
    setSharedValueY(defaultValueY)
  }, [])

  useEffect(() => {
    setValueX(sharedValueX)
  }, [sharedValueX])

  useEffect(() => {
    setValueY(sharedValueY)
  }, [sharedValueY])

  useEffect(() => {
    setSharedValueX(defaultValueX)
  }, [defaultValueX])
  useEffect(() => {
    setSharedValueY(defaultValueY)
  }, [defaultValueY])

  //   const NumberInput = ({
  //     label,
  //     value,
  //     setValue,
  //     mouseOverOn,
  //     setMouseOverOn,
  //   }) => {
  //     return (
  //       <div
  //         className='w-full bg-[#F2F2F2] rounded-md flex flex-row gap-0'
  //         onMouseOver={() => setMouseOverOn(label)}
  //         onMouseLeave={() => setMouseOverOn('')}
  //       >
  //         <div className='h-full w-fit flex justify-center items-center text-[8px] text-black opacity-70 capitalize'>
  //           {label}
  //         </div>
  //         <input
  //           type='number'
  //           value={value}
  //           onChange={(e) => setValue(e.target.value)}
  //           className={
  //             'font-medium w-full h-[26px] outline-none text-center bg-[#F2F2F2] rounded-md flex items-center justify-center [&::-webkit-inner-spin-button]:appearance-none ' +
  //             (mouseOverOn === label ? 'text-[#ff340a]' : 'text-[#000000]')
  //           }
  //           min={min}
  //           max={max}
  //           step={step}
  //         />
  //       </div>
  //     )
  //   }

  return (
    <div
      className='flex items-center w-full h-[26px] flex-row gap-2'
      style={{ fontFamily: 'Inter Medium' }}
    >
      <InputTitle
        title={title}
        info={info}
        infoContent={infoContent}
        condition={condition}
      />
      <div className='flex items-center w-full h-fit flex-row gap-2'>
        <NumberInput
          label={labelX}
          value={sharedValueX}
          setValue={setSharedValueX}
          mouseOverOn={mouseOverOn}
          setMouseOverOn={setMouseOverOn}
          min={min}
          max={max}
          step={step}
        />
        <NumberInput
          label={labelY}
          value={sharedValueY}
          setValue={setSharedValueY}
          mouseOverOn={mouseOverOn}
          setMouseOverOn={setMouseOverOn}
          min={min}
          max={max}
          step={step}
        />
      </div>
    </div>
  )
}
