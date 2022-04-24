import * as React from 'react'
import cx from 'classnames'

type ButtonPropsT = {
  kind?: 'primary' | 'secondary'
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

const ButtonKind = {
  primary: 'bg-primary text-white',
  secondary: 'ring-1 ring-primary text-primary',
}

export const Button: React.FC<ButtonPropsT> = ({
  kind = 'primary',
  children,
  ...rest
}) => {
  return (
    <button
      className={cx('h-button font-medium rounded w-full', ButtonKind[kind])}
      {...rest}
    >
      {children}
    </button>
  )
}
