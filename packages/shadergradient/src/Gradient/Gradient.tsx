import React, { Suspense, useEffect } from 'react'
import { hdrBase, initialActivePreset } from '../consts'
import { usePostProcessing, useQueryState } from '../hooks/index'
import { PRESETS } from '../presets'
import {
  updateGradientState,
  usePropertyStore,
  useQueryStore,
  useUIStore,
} from '../store'
import { Environment } from './comps/Environment/index'
import { CameraControl, GradientMesh } from './index'

export function Gradient(props) {
  usePropsToStore(props)
  usePresetToStore()

  // effects
  const [lightType] = useQueryState('lightType')
  const [brightness] = useQueryState('brightness')
  const [envPreset] = useQueryState('envPreset')
  const [grain] = useQueryState('grain')
  const [reflection] = useQueryState('reflection')

  usePostProcessing(grain === 'off')

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

function usePropsToStore({ zoomOut = false, ...queryProps }) {
  useEffect(() => usePropertyStore.setState({ zoomOut }), [zoomOut])
  useEffect(() => useQueryStore.setState(queryProps), [queryProps])
}

function usePresetToStore() {
  // ----------------------------- Preset to Custom Material ---------------------------------
  const activePreset = useUIStore((state: any) => state.activePreset)
  useEffect(() => {
    let gradientURL = PRESETS[activePreset].url
    if (
      activePreset === initialActivePreset &&
      window.location.search?.includes('pixelDensity') // checking just window.location.search existing is not valid for the Framer Preview search (?target=preview-web)
    )
      gradientURL = window.location.search // use search params at the first load.

    updateGradientState(gradientURL)
  }, [activePreset])
}
