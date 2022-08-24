import CameraControls from 'camera-controls'
import * as THREE from 'three'
import { useFiber } from '../../../utils/index'
import { useCameraAnimation } from './useCameraAnimation'

export function CameraControl({
  dampingFactor = 0.05, // default dampingFactor of "camera-conrols"
  ...props
}: any) {
  const { extend, useThree, useFrame } = useFiber()
  CameraControls.install({ THREE })
  extend({ CameraControls })

  const camera = useThree((state) => state.camera)
  const gl = useThree((state) => state.gl)

  // const ref: any = useRef()
  const ref = useCameraAnimation(props)

  useFrame((state, delta) => ref.current.update(delta)) // sync r3f delta with 'camera-controls'

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
