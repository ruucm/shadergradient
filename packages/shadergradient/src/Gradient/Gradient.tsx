import React, { Suspense, useEffect } from 'react'
import { hdrBase } from '../consts'
import { usePostProcessing, useQueryState } from '../hooks/index'
import { usePropertyStore } from '../store'
import { Environment } from './comps/Environment/index'
import { CameraControl, GradientMesh } from './index'

export function Gradient({ zoomOut = false, animate }) {
  useEffect(() => usePropertyStore.setState({ zoomOut }), [zoomOut])
  usePropsToStore({ animate })

  // effects
  const [lightType] = useQueryState('lightType')
  const [brightness] = useQueryState('brightness')
  const [envPreset] = useQueryState('envPreset')
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
      {lightType === '3d' && <ambientLight intensity={brightness || 1} />}
      <CameraControl />
      <GradientMesh />
    </>
  )
}

function usePropsToStore({ animate }) {
  const [, setAnimate] = useQueryState('animate')

  useEffect(() => {
    setAnimate(animate)
  }, [animate])
}
