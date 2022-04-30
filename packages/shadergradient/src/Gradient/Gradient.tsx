import React, { Suspense, useEffect } from 'react'
import { brightnessDiff, hdrBase } from '../consts'
import { usePostProcessing, useQueryState } from '../hooks/index'
import { usePropertyStore } from '../store'
import { Environment } from './comps/Environment/index'
import { CameraControl, GradientMesh } from './index'

export function Gradient({ zoomOut = false }) {
  useEffect(() => usePropertyStore.setState({ zoomOut }), [zoomOut])

  const [lightType] = useQueryState('lightType')
  const [brightness] = useQueryState('brightness')
  const [envPreset] = useQueryState('envPreset')

  // effects
  const [grain] = useQueryState('grain')
  const [reflection] = useQueryState('reflection')

  usePostProcessing({ on: true, grain: grain === 'on' })

  return (
    <>
      {lightType === 'env' && (
        <Suspense fallback='Load Failed'>
          <Environment
            // preset={envPreset}
            files={`${hdrBase}/hdr/${envPreset}.hdr`} // use instead of preset, cause rawCdn is not stable on many requests.
            background={true}
            // loadingCallback={loadingCallback}
          />
        </Suspense>
      )}
      {lightType === '3d' && (
        <ambientLight intensity={brightness - brightnessDiff || 1} />
      )}
      <CameraControl />
      <GradientMesh />
    </>
  )
}
