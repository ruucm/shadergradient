import * as React from 'react'
import { FiberCanvas, useFiber } from '../utils/index'
import { Gradient } from './Gradient'

export function GradientWithCanvas() {
  const fiber = useFiber()

  return (
    <FiberCanvas fiber={fiber}>
      <Gradient />
    </FiberCanvas>
  )
}
