import { IconHoverBox } from '@/ui'
import * as React from 'react'

type CopyBtnPropsT = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

export const CopyButton: React.FC<CopyBtnPropsT> = () => {
  const [copyUrlText, setCopyUrl] = React.useState('Copy URL')
  const [isHovered, setIsHovered] = React.useState(false)
  const initial = async () => {
    await setTimeout(() => {
      setIsHovered(false)
    }, 3000)
  }
  React.useEffect(() => {
    setIsHovered(true)
    initial()
  }, [])
  return (
    <div
      className='flex flex-col items-center justify-center'
      style={{ marginLeft: 5 }}
    >
      <div
        className='bg-primary flex w-[90px] cursor-pointer items-center justify-center rounded-sm p-1.5 text-sm font-medium text-white'
        onClick={async () => {
          window.navigator.clipboard.writeText(window.location.href)
          setCopyUrl('Copied!')
          await setTimeout(() => {
            setCopyUrl('Copy URL')
          }, 2000)
        }}
        onMouseOver={() => {
          setIsHovered(true)
        }}
        onMouseLeave={() => {
          setIsHovered(false)
        }}
      >
        {copyUrlText}
      </div>
      <IconHoverBox
        content={'Share it, or use it in Figma/Framer'}
        isHovered={isHovered}
        bottom={90}
      />
    </div>
  )
}
