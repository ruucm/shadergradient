import React, { Suspense, useEffect } from 'react'
import { hdrBase } from '../consts'
import { usePostProcessing, useQueryState } from '../hooks/index'
import { PRESETS } from '../presets'
import { updateGradientState, usePropertyStore, useUIStore } from '../store'
import { Environment } from './comps/Environment/index'
import { CameraControl, GradientMesh } from './index'

type Props = {
  zoomOut?: boolean
  control?: 'query' | 'props'
  [x: string]: any
}

export function Gradient({
  zoomOut = false,
  control = 'props',
  ...props
}: Props) {
  usePresetToStore()

  const { lightType, envPreset, brightness, grain, ...others } =
    useControlValues(control, props)

  usePostProcessing(grain === 'off')

  useEffect(() => usePropertyStore.setState({ zoomOut }), [zoomOut])

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
      <CameraControl {...others} />
      <GradientMesh {...others} />
    </>
  )
}

let pageLoaded = false

function usePresetToStore() {
  // ----------------------------- Preset to Custom Material ---------------------------------
  const activePreset = useUIStore((state: any) => state.activePreset)
  useEffect(() => {
    let gradientURL

    // CASE 1. use search params at the first load.
    if (
      !pageLoaded &&
      window.location.search?.includes('pixelDensity') // checking just window.location.search existing is not valid for the Framer Preview search (?target=preview-web)
    )
      gradientURL = window.location.search
    // CASE 2. When activePreset changes by UI buttons
    else gradientURL = PRESETS[activePreset].url

    updateGradientState(gradientURL)

    pageLoaded = true
  }, [activePreset])
}

function useControlValues(control, props) {
  // shape
  const [type] = useQueryState('type')
  const [animate] = useQueryState('animate')
  const [uTime] = useQueryState('uTime')
  const [uSpeed] = useQueryState('uSpeed')
  const [uStrength] = useQueryState('uStrength')
  const [uDensity] = useQueryState('uDensity')
  const [uFrequency] = useQueryState('uFrequency')
  const [uAmplitude] = useQueryState('uAmplitude')
  const [positionX] = useQueryState('positionX')
  const [positionY] = useQueryState('positionY')
  const [positionZ] = useQueryState('positionZ')
  const [rotationX] = useQueryState('rotationX')
  const [rotationY] = useQueryState('rotationY')
  const [rotationZ] = useQueryState('rotationZ')

  // colors
  const [color1] = useQueryState('color1')
  const [color2] = useQueryState('color2')
  const [color3] = useQueryState('color3')
  // const hoverStateColor = getHoverColor(hoverState, [color1, color2, color3])

  // camera
  const [cAzimuthAngle] = useQueryState('cAzimuthAngle')
  const [cPolarAngle] = useQueryState('cPolarAngle')
  const [cDistance] = useQueryState('cDistance')
  const [cameraZoom] = useQueryState('cameraZoom')

  const [wireframe] = useQueryState('wireframe')

  // shader
  const [shader] = useQueryState('shader')

  // effects
  const [lightType] = useQueryState('lightType')
  const [brightness] = useQueryState('brightness')
  const [envPreset] = useQueryState('envPreset')
  const [grain] = useQueryState('grain')
  const [reflection] = useQueryState('reflection')

  const queryProps = {
    type,
    animate,
    uTime,
    uSpeed,
    uStrength,
    uDensity,
    uFrequency,
    uAmplitude,
    positionX,
    positionY,
    positionZ,
    rotationX,
    rotationY,
    rotationZ,
    color1,
    color2,
    color3,
    cAzimuthAngle,
    cPolarAngle,
    cDistance,
    cameraZoom,
    wireframe,
    shader,
    lightType,
    brightness,
    envPreset,
    grain,
    reflection,
  }

  if (control === 'props') return { ...queryProps, ...props }
  else if (control === 'query') {
    return queryProps
  }
}
