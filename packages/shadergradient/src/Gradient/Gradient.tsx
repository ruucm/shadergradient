// @ts-nocheck
import * as React from 'react'
import { FiberCanvas, useFiber } from '../useFiber'
import { GradientMesh } from './comps/GradientMesh/index'

export function Gradient() {
  const fiber = useFiber()

  return (
    <FiberCanvas fiber={fiber}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <GradientMesh />
    </FiberCanvas>
  )
}
