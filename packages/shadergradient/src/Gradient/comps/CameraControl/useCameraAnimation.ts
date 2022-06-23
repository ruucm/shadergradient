import { useEffect, useRef } from 'react'
import {
  aboutAngles,
  defaultDistance,
  defaultZoom,
  sphereZoomOut,
} from '../../../consts'
import { usePropertyStore } from '../../../store'
import { dToR, useFiber } from '../../../utils/index'

export function useCameraAnimation({
  type,
  cAzimuthAngle,
  cPolarAngle,
  cDistance,
  cameraZoom,
}) {
  const { useFrame } = useFiber()
  const ref: any = useRef()
  const control = ref.current

  useFrame((state, delta) => ref.current.update(delta)) // sync r3f delta with 'camera-controls'

  const hoverState = usePropertyStore((state: any) => state.hoverState)
  const zoomOut = usePropertyStore((state: any) => state.zoomOut)
  const inAbout = usePropertyStore((state: any) => state.inAbout)

  // rorate the camera
  useEffect(() => {
    control?.rotateTo(dToR(cAzimuthAngle), dToR(cPolarAngle), true)
    if (inAbout === true) {
      control?.rotateTo(dToR(aboutAngles[0]), dToR(aboutAngles[1]), true)
    }
  }, [control, cAzimuthAngle, cPolarAngle, inAbout])

  // zoom-out tool
  useEffect(() => {
    if (zoomOut) {
      // fixed distance & zoom
      if (type === 'sphere') {
        control?.dollyTo(defaultDistance, true)
        control?.zoomTo(sphereZoomOut, true)
      } else {
        control?.dollyTo(defaultDistance, true)
        control?.zoomTo(defaultZoom, true)
      }
    } else {
      // control distance & zoom
      if (type === 'sphere') {
        control?.zoomTo(cameraZoom, true)
        control?.dollyTo(defaultDistance, true)
      } else {
        control?.dollyTo(cDistance, true)
        control?.zoomTo(defaultZoom, true)
      }
    }
  }, [control, zoomOut, type, cameraZoom, cDistance])

  return ref
}
