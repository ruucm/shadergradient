import { useEffect, useRef } from 'react'
import { useQueryState } from '../../../hooks/index'
import { usePropertyStore } from '../../../store'
import { dToR, useFiber } from '../../../utils/index'

const defaultDistance = 10
const defaultZoom = 1

export function useCameraAnimation() {
  const { useFrame } = useFiber()
  const ref: any = useRef()
  const control = ref.current

  useFrame((state, delta) => ref.current.update(delta)) // sync r3f delta with 'camera-controls'

  // ----------------------------- Params to Camera Animation ---------------------------------
  const [cAzimuthAngle] = useQueryState('cAzimuthAngle')
  const [cPolarAngle] = useQueryState('cPolarAngle')
  const [cDistance] = useQueryState('cDistance')
  const [cameraZoom] = useQueryState('cameraZoom')

  const hoverState = usePropertyStore((state: any) => state.hoverState)
  const zoomOut = usePropertyStore((state: any) => state.zoomOut)

  const [type] = useQueryState('type')

  // rorate the camera
  useEffect(() => {
    control?.rotateTo(dToR(cAzimuthAngle), dToR(cPolarAngle), true)
  }, [control, cAzimuthAngle, cPolarAngle])

  // zoom-out tool
  useEffect(() => {
    if (zoomOut) {
      control?.dollyTo(defaultDistance, true)
      control?.zoomTo(defaultZoom, true)
    } else {
      if (type === 'sphere') {
        control?.zoomTo(cameraZoom, true)
        control?.dollyTo(defaultDistance, true)
      } else {
        control?.dollyTo(cDistance, true)
        control?.zoomTo(defaultZoom, true)
      }
    }
  }, [control, zoomOut, type])

  return ref
}
