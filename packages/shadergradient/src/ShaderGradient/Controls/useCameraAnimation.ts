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
  enableTransition = true,
}: any) {
  const ref: any = useRef()

  useFrame((state, delta) => ref.current.update(delta)) // sync r3f delta with 'camera-controls'

  // rorate the camera
  useEffect(() => {
    const control = ref.current

    control?.rotateTo(dToR(cAzimuthAngle), dToR(cPolarAngle), enableTransition)
  }, [ref, cAzimuthAngle, cPolarAngle, enableTransition])

  // zoom-out tool
  useEffect(() => {
    const control = ref.current

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
  }, [ref, zoomOut, type, cameraZoom, cDistance, enableTransition])

  return ref
}
