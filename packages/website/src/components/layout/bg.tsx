import { useQueryState } from 'shadergradient'

export function Bg() {
  const [bgColor1] = useQueryState('bgColor1')
  const [bgColor2] = useQueryState('bgColor2')

  return (
    <div
      className='absolute top-0 left-0 w-full h-full -z-[1]'
      style={{
        background: `linear-gradient(40deg, ${bgColor1} 0%, ${bgColor2} 100%)`,
      }}
    />
  )
}
