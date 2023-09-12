// https://dirask.com/posts/React-change-state-from-props-functional-component-prKRbj

import { useState } from 'react'

export const usePropState = (prop) => {
  const [current, setCurrent] = useState(() => ({ prop, state: prop }))
  if (current.prop != prop) {
    current.prop = prop
    current.state = prop
  }
  return [
    current.state,
    (state) => {
      setCurrent({ prop, state })
    },
  ]
}
