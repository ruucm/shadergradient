import * as React from 'react'
import { ColorInput } from '../ColorInput/index'
import { useQueryState } from '../hooks/index'
import { InputPanel } from '../InputPanel'

type BackgroundControlsPropsT = {
  hoverState?: number
  setHoverState?: any
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

export const BackgroundControls: React.FC<BackgroundControlsPropsT> = () => {
  const [bgColor1, setBgColor1] = useQueryState('bgColor1')
  const [bgColor2, setBgColor2] = useQueryState('bgColor2')

  return (
    <div className='flex flex-col gap-3'>
      <InputPanel title='Bg Color 1' info={true}>
        <ColorInput defaultValue={bgColor1} setValue={setBgColor1} />
      </InputPanel>
      <InputPanel title='Bg Color 2' info={true}>
        <ColorInput defaultValue={bgColor2} setValue={setBgColor2} />
      </InputPanel>
    </div>
  )
}
