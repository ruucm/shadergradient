import * as React from 'react'
import { useQueryState } from '@/store'
import { Radio, RangeSlider, Slider } from '@/ui'
import { InputPanel } from './InputPanel'

type GIFControlsPropsT = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

export const GIFControls: React.FC<GIFControlsPropsT> = () => {
  const [uTime, setUTime] = useQueryState('uTime')
  const [rangeStart, setRangeStart] = useQueryState('rangeStart')
  const [rangeEnd, setRangeEnd] = useQueryState('rangeEnd')
  const [isHovered, setIsHovered] = React.useState('')
  const [pixelDensity, setPixelDensity] = useQueryState('pixelDensity')
  const [frameRate, setFrameRate] = useQueryState('frameRate')
  const [destination, setDestination] = useQueryState('destination')
  const [format, setFormat] = useQueryState('format')

  React.useEffect(() => {
    setFrameRate(10)
  }, [])

  return (
    <div className='flex flex-col gap-3'>
      <InputPanel
        title='Start/End'
        info={true}
        hoverContent='Set a start and end of the repeated range.'
        isHovered={isHovered}
        onMouseEnter={() => {
          setIsHovered('Start/End')
        }}
        onMouseLeave={() => {
          setIsHovered('')
        }}
      >
        <RangeSlider
          defaultValue={[rangeStart, rangeEnd]}
          setValue={(value) => {
            const [start, end] = value
            if (rangeStart !== start) {
              setUTime(start)
              setRangeStart(start)
            }
            if (rangeEnd !== end) setRangeEnd(end)
          }}
          step={0.1}
          min={0}
          max={40}
        />
      </InputPanel>
      <InputPanel
        title='Frame Rate'
        info={true}
        hoverContent='Frames per second. The higher the value is, the animation is smoother, but file gets larger.'
        isHovered={isHovered}
        onMouseEnter={() => {
          setIsHovered('Frame Rate')
        }}
        onMouseLeave={() => {
          setIsHovered('')
        }}
      >
        <Slider
          defaultValue={frameRate}
          setValue={setFrameRate}
          step={1}
          min={1}
          max={30}
        />
      </InputPanel>
      <InputPanel
        title='Pixel Density'
        info={true}
        hoverContent='The higher the pixel density, the more detailed the image is. If you want to extract a large GIF, set the value higher.'
        isHovered={isHovered}
        onMouseEnter={() => {
          setIsHovered('Pixel Density')
        }}
        onMouseLeave={() => {
          setIsHovered('')
        }}
      >
        <Slider
          defaultValue={pixelDensity}
          setValue={setPixelDensity}
          step={1}
          min={1}
          max={9}
        />
      </InputPanel>

      <InputPanel
        title='Destination'
        info={true}
        hoverContent='Add the extracted file into the Figma canvas, or download in your device'
        isHovered={isHovered}
        onMouseEnter={() => {
          setIsHovered('Destination')
        }}
        onMouseLeave={() => {
          setIsHovered('')
        }}
      >
        <Radio
          name='destination'
          value='onCanvas'
          setValue={setDestination}
          check={destination === 'onCanvas'}
          label='On canvas'
        />
        <Radio
          name='destination'
          value='localFile'
          setValue={setDestination}
          check={destination === 'localFile'}
          label='Local file'
        />
      </InputPanel>
      {destination === 'localFile' && (
        <InputPanel title='Format' autoScroll>
          <Radio
            name='format'
            value='webm'
            setValue={setFormat}
            check={format === 'webm'}
            label='.webm'
          />
          <Radio
            name='format'
            value='gif'
            setValue={setFormat}
            check={format === 'gif'}
            label='.gif'
          />
        </InputPanel>
      )}
    </div>
  )
}
