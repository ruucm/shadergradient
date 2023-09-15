import { IconHoverBox } from '@/ui'
import { cx } from '@/utils'
import * as React from 'react'

type ControlTypeTitlePropsT = {
  icon?: string
  content?: string
  active?: boolean
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

export const AxisButton: React.FC<ControlTypeTitlePropsT> = ({
  content,
  active,
  onClick,
  ...rest
}) => {
  const [isHovered, setIsHovered] = React.useState(false)
  const backgroundOpacity = (active: any, isHovered: boolean) => {
    if (active === true) {
      return 1
    } else if (isHovered === true && active !== true) {
      return 0.1
    } else return 0
  }
  return (
    <div
      className={cx(
        'text-sm font-medium cursor-pointer flex justify-center items-center',
        active && 'bg-primary'
      )}
      style={{
        borderRadius: 15,
        width: 30,
        height: 30,
        transitionDuration: '0.3s',
        background:
          'rgba(255,67,10,' + backgroundOpacity(active, isHovered) + ')',
      }}
      onMouseEnter={() => {
        setIsHovered(true)
      }}
      onMouseLeave={() => {
        setIsHovered(false)
      }}
      onClick={onClick}
    >
      <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24'>
        <path
          d='M 0 0 L 0 8.5'
          transform='translate(8 12) rotate(60 0.5 4.25)'
          fill='transparent'
          strokeWidth='1.8'
          stroke={active ? 'white' : 'rgb(255,67,10)'}
          strokeLinecap='round'
        ></path>
        <path
          d='M 0 0 L 0 8.5'
          transform='translate(15 12) rotate(120 0.5 4.25)'
          fill='transparent'
          strokeWidth='1.8'
          stroke={active ? 'white' : 'rgb(255,67,10)'}
          strokeLinecap='round'
        ></path>
        <path
          d='M 12 5 L 12 13.5'
          fill='transparent'
          strokeWidth='1.8'
          stroke={active ? 'white' : 'rgb(255,67,10)'}
          strokeLinecap='round'
        ></path>
      </svg>
      <IconHoverBox content={content} isHovered={isHovered} />
    </div>
  )
}
