import { cx } from '@/utils'
import * as React from 'react'

type ControlTypeTitlePropsT = {
  title?: string
  active?: boolean
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

export const ControlTypeTitle: React.FC<ControlTypeTitlePropsT> = ({
  title,
  active,
  onClick,
  ...rest
}) => {
  return (
    <div
      className={cx(
        'text-xl font-medium text-primary text-opacity-20 cursor-pointer p-3 w-[25%] text-center select-none',
        active && 'text-opacity-100'
      )}
      onClick={onClick}
    >
      {title}
    </div>
  )
}
