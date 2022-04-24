import * as React from 'react'
import cx from 'classnames'

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
        'text-xl font-medium text-primary text-opacity-20 cursor-pointer',
        active && 'text-opacity-100'
      )}
      onClick={onClick}
    >
      {title}
    </div>
  )
}
