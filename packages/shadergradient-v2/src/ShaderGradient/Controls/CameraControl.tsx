import CameraControls from 'camera-controls'
import * as THREE from 'three'
import { extend, useThree, useFrame } from '@react-three/fiber'
import { useCameraAnimation } from './useCameraAnimation'
import { useEffect } from 'react'

interface CameraUpdateData {
  azimuthAngle: number
  polarAngle: number
  distance?: number
  zoom?: number
}

function useCameraStateSync(
  ref: any,
  type: string,
  onCameraUpdate?: (data: CameraUpdateData) => void
) {
  useEffect(() => {
    const control = ref.current
    if (!control || !onCameraUpdate) return

    const getCameraValues = () => {
      const azimuth = Math.round((control.azimuthAngle * 180) / Math.PI)
      const polar = Math.round((control.polarAngle * 180) / Math.PI)
      const zoom =
        type === 'sphere' ? Number(control.zoom.toFixed(2)) : undefined
      const distance =
        type !== 'sphere' ? Number(control.distance.toFixed(2)) : undefined

      // Get camera position for testing - this is not used in our query at the moment.
      const position = {
        x: Number(control.camera.position.x.toFixed(2)),
        y: Number(control.camera.position.y.toFixed(2)),
        z: Number(control.camera.position.z.toFixed(2)),
      }

      console.log(azimuth, polar, zoom, distance, position)

      return { azimuth, polar, zoom, distance }
    }

    let isControlling = false

    const handleControlStart = () => {
      isControlling = true
    }

    const handleControlEnd = () => {
      isControlling = false
      const { azimuth, polar } = getCameraValues()
      onCameraUpdate({
        azimuthAngle: azimuth,
        polarAngle: polar,
      })
    }

    const handleUpdate = () => {
      // Only update zoom/distance while not dragging
      if (!isControlling) {
        const { zoom, distance } = getCameraValues()
        if (type === 'sphere' && zoom !== undefined) {
          onCameraUpdate({
            azimuthAngle: Math.round((control.azimuthAngle * 180) / Math.PI),
            polarAngle: Math.round((control.polarAngle * 180) / Math.PI),
            zoom,
          })
        } else if (distance !== undefined) {
          onCameraUpdate({
            azimuthAngle: Math.round((control.azimuthAngle * 180) / Math.PI),
            polarAngle: Math.round((control.polarAngle * 180) / Math.PI),
            distance,
          })
        }
      }
    }

    // Add event listeners
    control.addEventListener('controlstart', handleControlStart)
    control.addEventListener('controlend', handleControlEnd)
    control.addEventListener('update', handleUpdate)

    return () => {
      control.removeEventListener('controlstart', handleControlStart)
      control.removeEventListener('controlend', handleControlEnd)
      control.removeEventListener('update', handleUpdate)
    }
  }, [ref, type, onCameraUpdate])
}

interface CameraControlProps {
  smoothTime?: number
  type: string
  onCameraUpdate?: (data: CameraUpdateData) => void
  [key: string]: any
}

export function CameraControl({
  smoothTime = 0.05,
  type,
  onCameraUpdate,
  ...props
}: CameraControlProps): JSX.Element {
  // @ts-ignore Type mismatch is expected between different Three.js versions
  CameraControls.install({ THREE })
  extend({ CameraControls })

  const camera = useThree((state) => state.camera)
  const gl = useThree((state) => state.gl)

  const ref = useCameraAnimation(props)

  // Sync camera state with parent through callback
  useCameraStateSync(ref, type, onCameraUpdate)

  return (
    // @ts-ignore
    <cameraControls
      ref={ref}
      args={[camera, gl.domElement]}
      enableDamping={true}
      smoothTime={smoothTime}
      zoomSpeed={10}
      dollySpeed={10}
      restThreshold={0}
    />
  )
}
