import { useEffect, useRef } from 'react'
import { useQueryState } from '../../../hooks/index'
import { usePropertyStore } from '../../../store'
import { useFiber } from '../../../utils/index'

const defaultDistance = 10
const defaultZoom = 1

export function useCameraAnimation() {
  const { useFrame } = useFiber()
  const ref: any = useRef()

  useFrame((state, delta) => ref.current.update(delta)) // sync r3f delta with 'camera-controls'

  // ----------------------------- Params to Camera Animation ---------------------------------
  const [cAzimuthAngle] = useQueryState('cAzimuthAngle')
  const [cPolarAngle] = useQueryState('cPolarAngle')
  const [cDistance] = useQueryState('cDistance')
  const [cameraZoom] = useQueryState('cameraZoom')

  const hoverState = usePropertyStore((state: any) => state.hoverState)
  const toggleZoom = usePropertyStore((state: any) => state.toggleZoom)

  const [type] = useQueryState('type')

  // init the camera
  useEffect(() => {
    const control = ref.current
    control && control.dollyTo(cDistance, true)
  }, [ref])

  // zoom-out tool
  useEffect(() => {
    const control = ref.current

    if (toggleZoom) {
      control.dollyTo(defaultDistance, true)
      control.zoomTo(defaultZoom, true)
    } else {
      if (type === 'sphere') {
        control.zoomTo(cameraZoom, true)
        control.dollyTo(defaultDistance, true)
      } else {
        control.dollyTo(cDistance, true)
        control.zoomTo(defaultZoom, true)
      }
    }
  }, [ref, toggleZoom, type])

  return ref
}
