import * as React from 'react'
import { useCursorStore, useQueryState } from '@/store'
import { ColorInput, Radio } from '@/ui'
import { InputPanel } from './InputPanel'

type ColorControlsPropsT = {
  hoverState?: number
  setHoverState?: any
  isFigma?: boolean
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

export const ColorControls: React.FC<ColorControlsPropsT> = ({ isFigma }) => {
  const [color1, setColor1] = useQueryState('color1')
  const [color2, setColor2] = useQueryState('color2')
  const [color3, setColor3] = useQueryState('color3')
  const [bgColor1, setBgColor1] = useQueryState('bgColor1')
  const [bgColor2, setBgColor2] = useQueryState('bgColor2')
  const updateHoverState = useCursorStore(
    (state: any) => state.updateHoverState
  )

  const [customBgColor, setCustomBgColor] = React.useState('off')
  const [isHovered, setIsHovered] = React.useState('')

  React.useEffect(() => {
    if (bgColor1 !== '#000000' || bgColor2 !== '#000000') {
      setCustomBgColor('on')
    } else {
      setCustomBgColor('off')
    }
  }, [bgColor1, bgColor2])

  return (
    <div className='flex flex-col gap-3'>
      <InputPanel
        title='Color 1'
        info={true}
        onMouseEnter={() => updateHoverState(1)}
        onMouseLeave={() => updateHoverState(0)}
      >
        <ColorInput defaultValue={color1} setValue={setColor1} />
      </InputPanel>
      <InputPanel
        title='Color 2'
        info={true}
        onMouseEnter={() => updateHoverState(2)}
        onMouseLeave={() => updateHoverState(0)}
      >
        <ColorInput defaultValue={color2} setValue={setColor2} />
      </InputPanel>
      <InputPanel
        title='Color 3'
        info={true}
        onMouseEnter={() => updateHoverState(3)}
        onMouseLeave={() => updateHoverState(0)}
      >
        <ColorInput defaultValue={color3} setValue={setColor3} />
      </InputPanel>
      {isFigma === false && (
        <InputPanel
          title='Custom Background'
          info={true}
          hoverContent='Change the background behind the 3d object. Default to be black'
          isHovered={isHovered}
          onMouseEnter={() => {
            setIsHovered('Custom Background')
          }}
          onMouseLeave={() => {
            setIsHovered('')
          }}
        >
          <Radio
            name='customBg'
            value='on'
            setValue={setCustomBgColor}
            check={customBgColor === 'on'}
            label='On'
          />
          <Radio
            name='customBg'
            value='off'
            setValue={setCustomBgColor}
            check={customBgColor === 'off'}
            label='Off'
          />
        </InputPanel>
      )}

      {customBgColor === 'on' && (
        <>
          <InputPanel title='Bg Color 1'>
            <ColorInput
              defaultValue={bgColor1 === null ? '#000000' : bgColor1}
              setValue={setBgColor1}
            />
          </InputPanel>
          <InputPanel title='Bg Color 2'>
            <ColorInput
              defaultValue={bgColor2 === null ? '#000000' : bgColor2}
              setValue={setBgColor2}
            />
          </InputPanel>
        </>
      )}
    </div>
  )
}
