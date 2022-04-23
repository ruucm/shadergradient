import * as React from 'react'
import cx from 'classnames'
import { IconHoverBox } from '../HoverBox'
import { Feather } from './Feather'

type ControlTypeTitlePropsT = {
  icon?: string
  content?: string
  active?: boolean
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

export const IconButtons: React.FC<ControlTypeTitlePropsT> = ({
  icon,
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
      <Feather
        /* @ts-ignore */
        name={icon}
        size={20}
        color={active ? 'white' : 'rgb(255,67,10)'}
      />
      <IconHoverBox content={content} isHovered={isHovered} />
    </div>
  )
}
