import { useEffect, useRef } from 'react'
import {
  zoomOutPlanes,
  zoomOutSphere,
  defaultPlanesZoom,
  defaultSphereDistance,
} from '@/consts'
import { dToR } from '@/utils'
import { useFrame } from '@react-three/fiber'

export function useCameraAnimation({
  type,
  cAzimuthAngle,
  cPolarAngle,
  cDistance,
  cameraZoom,
  zoomOut,
  enableTransition,
}) {
  const ref: any = useRef()
  const control = ref.current

  useFrame((state, delta) => ref.current.update(delta)) // sync r3f delta with 'camera-controls'

  // rorate the camera
  useEffect(() => {
    control?.rotateTo(dToR(cAzimuthAngle), dToR(cPolarAngle), enableTransition)
  }, [control, cAzimuthAngle, cPolarAngle])

  // zoom-out tool
  useEffect(() => {
    if (zoomOut) {
      // fixed distance & zoom
      if (type === 'sphere') {
        control?.dollyTo(zoomOutSphere.distance, enableTransition)
        control?.zoomTo(zoomOutSphere.zoom, enableTransition)
      } else {
        control?.dollyTo(zoomOutPlanes.distance, enableTransition)
        control?.zoomTo(zoomOutPlanes.zoom, enableTransition)
      }
    } else {
      // control distance for planes & zoom for sphere
      if (type === 'sphere') {
        control?.zoomTo(cameraZoom, enableTransition)
        control?.dollyTo(defaultSphereDistance, enableTransition)
      } else {
        control?.dollyTo(cDistance, enableTransition)
        control?.zoomTo(defaultPlanesZoom, enableTransition)
      }
    }
  }, [control, zoomOut, type, cameraZoom, cDistance])

  return ref
}
