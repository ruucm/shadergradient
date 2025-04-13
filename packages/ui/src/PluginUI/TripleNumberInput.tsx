import { useState, useEffect } from 'react'
import { InputTitle } from './InputTitle'
import { NumberInput } from './NumberInput'

type TripleNumberInputPropsT = {
  title: string
  defaultValueX: number
  defaultValueY: number
  defaultValueZ: number
  setValueX: any
  setValueY: any
  setValueZ: any
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

export function TripleNumberInput({
  title,
  defaultValueX,
  defaultValueY,
  defaultValueZ,
  setValueX,
  setValueY,
  setValueZ,
  step,
  min,
  max,
  info,
  infoContent,
  condition,
}: TripleNumberInputPropsT): JSX.Element {
  const [sharedValueX, setSharedValueX] = useState<any>(defaultValueX)
  const [sharedValueY, setSharedValueY] = useState<any>(defaultValueY)
  const [sharedValueZ, setSharedValueZ] = useState<any>(defaultValueZ)

  const [mouseOverOn, setMouseOverOn] = useState<string>('')

  useEffect(() => {
    setSharedValueX(defaultValueX) // init once with the passed value (from search params)
    setSharedValueY(defaultValueY)
    setSharedValueZ(defaultValueZ)
  }, [])

  useEffect(() => {
    setValueX(sharedValueX)
  }, [sharedValueX])

  useEffect(() => {
    setValueY(sharedValueY)
  }, [sharedValueY])

  useEffect(() => {
    setValueZ(sharedValueZ)
  }, [sharedValueZ])

  useEffect(() => {
    setSharedValueX(defaultValueX)
  }, [defaultValueX])
  useEffect(() => {
    setSharedValueY(defaultValueY)
  }, [defaultValueY])
  useEffect(() => {
    setSharedValueZ(defaultValueZ)
  }, [defaultValueZ])

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
          label='x'
          value={sharedValueX}
          setValue={setSharedValueX}
          mouseOverOn={mouseOverOn}
          setMouseOverOn={setMouseOverOn}
          min={min}
          max={max}
          step={step}
        />
        <NumberInput
          label='y'
          value={sharedValueY}
          setValue={setSharedValueY}
          mouseOverOn={mouseOverOn}
          setMouseOverOn={setMouseOverOn}
          min={min}
          max={max}
          step={step}
        />
        <NumberInput
          label='z'
          value={sharedValueZ}
          setValue={setSharedValueZ}
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
