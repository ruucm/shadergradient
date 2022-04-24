import * as React from 'react'
import { CameraControl, GradientMesh } from './index'

export function Gradient() {
  return (
    <>
      <ambientLight intensity={1} />
      <CameraControl />
      <GradientMesh />
    </>
  )
}
