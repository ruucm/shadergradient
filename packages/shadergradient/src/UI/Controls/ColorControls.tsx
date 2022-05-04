import * as React from 'react'
import { useQueryState } from '../../hooks/index'
import { usePropertyStore } from '../../store'
import { ColorInput } from '../../UI/index'
import { InputPanel } from './InputPanel'

type ColorControlsPropsT = {
  hoverState?: number
  setHoverState?: any
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

export const ColorControls: React.FC<ColorControlsPropsT> = () => {
  const [color1, setColor1] = useQueryState('color1')
  const [color2, setColor2] = useQueryState('color2')
  const [color3, setColor3] = useQueryState('color3')
  const [bgColor1, setBgColor1] = useQueryState('bgColor1')
  const [bgColor2, setBgColor2] = useQueryState('bgColor2')
  const hoverState = usePropertyStore((state: any) => state.hoverState)

  return (
    <div className='flex flex-col gap-3'>
      <InputPanel
        title='Color 1'
        info={true}
        onMouseEnter={() => {
          usePropertyStore.setState({ hoverState: 1 })
        }}
        onMouseLeave={() => {
          usePropertyStore.setState({ hoverState: 0 })
        }}
      >
        <ColorInput defaultValue={color1} setValue={setColor1} />
      </InputPanel>
      <InputPanel
        title='Color 2'
        info={true}
        onMouseEnter={() => {
          usePropertyStore.setState({ hoverState: 2 })
        }}
        onMouseLeave={() => {
          usePropertyStore.setState({ hoverState: 0 })
        }}
      >
        <ColorInput defaultValue={color2} setValue={setColor2} />
      </InputPanel>
      <InputPanel
        title='Color 3'
        info={true}
        onMouseEnter={() => {
          usePropertyStore.setState({ hoverState: 3 })
        }}
        onMouseLeave={() => {
          usePropertyStore.setState({ hoverState: 0 })
        }}
      >
        <ColorInput defaultValue={color3} setValue={setColor3} />
      </InputPanel>
      <InputPanel title='Bg Color 1' info={true}>
        <ColorInput
          defaultValue={bgColor1 === null ? '#000000' : bgColor1}
          setValue={setBgColor1}
        />
      </InputPanel>
      <InputPanel title='Bg Color 2' info={true}>
        <ColorInput
          defaultValue={bgColor2 === null ? '#000000' : bgColor2}
          setValue={setBgColor2}
        />
      </InputPanel>
    </div>
  )
}
