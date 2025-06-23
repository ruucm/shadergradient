import type { ComponentType } from 'react'

export function HideBanner(Component): ComponentType {
  return (props) => {
    return <Component {...props} style={{ zIndex: 10000000000 }} />
  }
}
