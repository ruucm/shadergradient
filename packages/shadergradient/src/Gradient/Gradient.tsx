import React, { useEffect } from 'react'
import { usePropertyStore } from '../store'
import { CameraControl, GradientMesh } from './index'

export function Gradient({ zoomOut = false }) {
  useEffect(() => usePropertyStore.setState({ zoomOut }), [zoomOut])

  return (
    <>
      <ambientLight intensity={1} />
      <CameraControl />
      <GradientMesh />
    </>
  )
}
