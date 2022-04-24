import React, { useEffect } from 'react'
import { usePropertyStore } from '../store'
import { CameraControl, GradientMesh } from './index'

export function Gradient({ toggleZoom = false }) {
  useEffect(() => usePropertyStore.setState({ toggleZoom }), [toggleZoom])

  return (
    <>
      <ambientLight intensity={1} />
      <CameraControl />
      <GradientMesh />
    </>
  )
}
