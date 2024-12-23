import ReactSlider from 'react-slider'

export function Slider(): JSX.Element {
  return (
    <ReactSlider
      className='bg-red-500 h-slider w-full h-full'
      markClassName='w-mark h-mark bg-primary top-1/2 transform -translate-y-1/2 slider-mark-center-x'
      thumbClassName='bg-primary w-thumb h-thumb rounded-full top-1/2 transform -translate-y-1/2 outline-none cursor-pointer'
      thumbActiveClassName='bg-opacity-80'
      renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
    />
  )
}
