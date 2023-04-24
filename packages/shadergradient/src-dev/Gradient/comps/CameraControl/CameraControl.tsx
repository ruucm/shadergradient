import CameraControls from 'camera-controls'
import * as THREE from 'three'
import { useCameraAnimation } from './useCameraAnimation'
import { extend, useThree, useFrame } from '@react-three/fiber'

export function CameraControl({
  dampingFactor = 0.05, // default dampingFactor of "camera-conrols"
  ...props
}: any) {
  CameraControls.install({ THREE })
  extend({ CameraControls })

  const camera = useThree((state) => state.camera)
  const gl = useThree((state) => state.gl)

  const ref = useCameraAnimation(props)

  return (
    // @ts-ignore
    <cameraControls
      ref={ref}
      args={[camera, gl.domElement]}
      enableDamping={true}
      dampingFactor={dampingFactor}
      zoomSpeed={10}
      dollySpeed={10}
      // zoomSpeed={5}
      restThreshold={0}
    />
  )
}
