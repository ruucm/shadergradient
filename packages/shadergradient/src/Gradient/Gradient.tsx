import React, { Suspense, useEffect } from 'react'
import * as qs from 'query-string'
import { envBasePath } from '../consts'
import { usePostProcessing, useQueryState } from '../hooks/index'
import { PRESETS } from '../presets'
import { updateGradientState, useUIStore } from '../store'
import { formatUrlString } from '../utils/index'
import { Axis } from './Axis'
import { EnvironmentMap } from './comps/Environment/EnvironmentMap'
import { useRGBELoader } from './useRGBELoader'
import { CameraControl, GradientMesh } from './index'

type Props = {
  control?: 'query' | 'props'
  isFigmaPlugin?: boolean
  [x: string]: any
}

function GradientComp({
  control = 'props',
  dampingFactor,
  rotSpringOption,
  posSpringOption,
  isFigmaPlugin = false,
  ...props
}: Props) {
  const setLoadingPercentage = useUIStore(
    (state: any) => state.setLoadingPercentage
  )

  usePresetToStore()

  const { lightType, envPreset, brightness, grain, toggleAxis, ...others } =
    useControlValues(control, props)

  usePostProcessing(grain === 'off')

  const city = useRGBELoader('city.hdr', { path: envBasePath })
  const dawn = useRGBELoader('dawn.hdr', { path: envBasePath })
  const lobby = useRGBELoader('lobby.hdr', { path: envBasePath })
  const textures = { city, dawn, lobby }

  return (
    <>
      {lightType === 'env' && (
        <EnvironmentMap
          background={true}
          map={textures[envPreset]}
          loadingCallback={setLoadingPercentage}
        />
      )}
      {lightType === '3d' && <ambientLight intensity={brightness || 1} />}
      {toggleAxis && <Axis isFigmaPlugin={isFigmaPlugin} />}

      <CameraControl dampingFactor={dampingFactor} {...others} />
      <GradientMesh
        {...others}
        rotSpringOption={rotSpringOption}
        posSpringOption={posSpringOption}
      />
    </>
  )
}

export const Gradient = (props) => (
  <Suspense fallback='Load Failed'>
    <GradientComp {...props} />
  </Suspense>
)

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

function useControlValues(control, { urlString, ...props }: any) {
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

  // tools
  const [zoomOut] = useQueryState('zoomOut')
  const [toggleAxis] = useQueryState('toggleAxis')

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
    zoomOut,
    toggleAxis,
  }

  if (control === 'props') return { ...queryProps, ...props }
  else if (control === 'query')
    return urlString
      ? qs.parse(formatUrlString(urlString), {
          parseNumbers: true,
          parseBooleans: true,
          arrayFormat: 'index',
        })
      : queryProps
}
