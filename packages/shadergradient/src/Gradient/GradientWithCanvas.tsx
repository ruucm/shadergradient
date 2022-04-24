import * as React from 'react'
import { FramerCanvas, useFiber } from '../utils/index'
import { Gradient } from './Gradient'

export function GradientWithCanvas() {
  const fiber = useFiber()

  return (
    <FramerCanvas fiber={fiber}>
      <Gradient />
    </FramerCanvas>
  )
}
