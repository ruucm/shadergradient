import { useEffect, useRef } from 'react'
import {
  zoomOutPlanes,
  zoomOutSphere,
  defaultPlanesZoom,
  defaultSphereDistance,
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

  const zoomOut = usePropertyStore((state: any) => state.zoomOut)

  // rorate the camera
  useEffect(() => {
    control?.rotateTo(dToR(cAzimuthAngle), dToR(cPolarAngle), true)
  }, [control, cAzimuthAngle, cPolarAngle])

  // zoom-out tool
  useEffect(() => {
    if (zoomOut) {
      // fixed distance & zoom
      if (type === 'sphere') {
        control?.dollyTo(zoomOutSphere.distance, true)
        control?.zoomTo(zoomOutSphere.zoom, true)
      } else {
        control?.dollyTo(zoomOutPlanes.distance, true)
        control?.zoomTo(zoomOutPlanes.zoom, true)
      }
    } else {
      // control distance for planes & zoom for sphere
      if (type === 'sphere') {
        control?.zoomTo(cameraZoom, true)
        control?.dollyTo(defaultSphereDistance, true)
      } else {
        control?.dollyTo(cDistance, true)
        control?.zoomTo(defaultPlanesZoom, true)
      }
    }
  }, [control, zoomOut, type, cameraZoom, cDistance])

  return ref
}
