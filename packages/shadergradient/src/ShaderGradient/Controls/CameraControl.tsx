import CameraControls from 'camera-controls'
import * as THREE from 'three'
import { useCameraAnimation } from './useCameraAnimation'
import { extend, useThree } from '@react-three/fiber'
import { useEffect, useState } from 'react'

export function CameraControl({
  smoothTime = 0.05, // default smoothTime of "camera-conrols"
  ...props
}: any): JSX.Element {
  CameraControls.install({ THREE })
  extend({ CameraControls })

  const camera = useThree((state) => state.camera)
  const gl = useThree((state) => state.gl)

  const ref = useCameraAnimation(props)
  const [isUserControlling, setIsUserControlling] = useState(false)

  // Track user interaction and emit camera updates on 'rest' event
  // smoothTime=0 during interaction for immediate 'rest', restored after for smooth programmatic animations
  useEffect(() => {
    const control: any = ref.current
    if (!control) return

    const { type, onCameraUpdate } = props || {}
    if (!onCameraUpdate) return

    const toDegrees = (radians: number) => Math.round((radians * 180) / Math.PI)

    const getAngles = () => ({
      cAzimuthAngle: toDegrees(control.azimuthAngle),
      cPolarAngle: toDegrees(control.polarAngle),
    })

    const getZoomDistance = () => {
      const result: any = {}
      if (type === 'sphere') {
        const ctrlZoom = control?.zoom
        if (Number.isFinite(ctrlZoom)) {
          result.cameraZoom = Number(ctrlZoom.toFixed(2))
        } else {
          const camZoom = control?.camera?.zoom
          if (Number.isFinite(camZoom)) {
            result.cameraZoom = Number(camZoom.toFixed(2))
          }
        }
      } else {
        if (Number.isFinite(control.distance)) {
          result.cDistance = Number(control.distance.toFixed(2))
        }
      }
      return result
    }

    const handleControlStart = () => {
      setIsUserControlling(true)
    }

    const handleRest = () => {
      setIsUserControlling(false)
      onCameraUpdate({ ...getAngles(), ...getZoomDistance() })
    }

    control.addEventListener('controlstart', handleControlStart)
    control.addEventListener('rest', handleRest)

    return () => {
      control.removeEventListener('controlstart', handleControlStart)
      control.removeEventListener('rest', handleRest)
    }
  }, [ref, props])

  return (
    // @ts-ignore
    <cameraControls
      ref={ref}
      args={[camera, gl.domElement]}
      smoothTime={isUserControlling ? 0 : smoothTime}
      zoomSpeed={10}
      dollySpeed={5}
      maxDistance={1000}
      restThreshold={0.01}
      mouseButtons={{
        left: (CameraControls as any).ACTION.ROTATE,
        middle:
          props.type === 'sphere'
            ? (CameraControls as any).ACTION.ZOOM
            : (CameraControls as any).ACTION.DOLLY,
        right: (CameraControls as any).ACTION.NONE, // disabling pan for now, as we don't support camera position value in props
        wheel:
          props.type === 'sphere'
            ? (CameraControls as any).ACTION.ZOOM
            : (CameraControls as any).ACTION.DOLLY,
      }}
      touches={{
        one: (CameraControls as any).ACTION.ROTATE,
        two: (CameraControls as any).ACTION.NONE, // disable touch pan (TRUCK)
        three: (CameraControls as any).ACTION.NONE,
      }}
    />
  )
}
