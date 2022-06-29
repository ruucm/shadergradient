import CameraControls from 'camera-controls'
import * as THREE from 'three'
import { useFiber } from '../../../utils/index'
import { useCameraAnimation } from './useCameraAnimation'

export function CameraControl(props) {
  const { extend, useThree, useFrame } = useFiber()

  CameraControls.install({ THREE })
  // CameraControls.dampingFactor = 1
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
      dampingFactor={0.03}
    />
  )
}
