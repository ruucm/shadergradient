import { useCursorStore } from '@/store'
import { GradientT } from '@/types'
import useQueryState from '@/useQueryState'
import { formatUrlString } from '@/utils'
import * as qs from 'query-string'

export function useControlValues(
  control,
  { urlString, ...props }: any
): GradientT {
  // shape
  const [type] = useQueryState('type')
  const [animate] = useQueryState('animate')
  const [range] = useQueryState('range')
  const [rangeStart] = useQueryState('rangeStart')
  const [rangeEnd] = useQueryState('rangeEnd')
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
  const hoverState = useCursorStore((state: any) => state.hoverState)

  // figma
  const [frameRate] = useQueryState('frameRate')
  const [destination] = useQueryState('destination')
  const [format] = useQueryState('format')
  const queryProps = {
    type,
    animate,
    range,
    rangeStart,
    rangeEnd,
    frameRate,
    destination,
    format,
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

    hoverState, // include hoverState to flush the shader when it is hovered
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
