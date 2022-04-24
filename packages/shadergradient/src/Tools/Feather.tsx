import * as React from 'react'
import * as icons from 'react-feather'

type IconName = keyof typeof icons

type IconProps = {
  name: IconName
}

export function Feather({ name, ...rest }: IconProps) {
  const IconComponent = icons[name]
  return <IconComponent {...rest} />
}
