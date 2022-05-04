import CameraControls from 'camera-controls'
import * as THREE from 'three'
import { useFiber } from '../../../utils/index'
import { useCameraAnimation } from './useCameraAnimation'

export function CameraControl() {
  const { extend, useThree, useFrame } = useFiber()

  CameraControls.install({ THREE })
  extend({ CameraControls })

  const camera = useThree((state) => state.camera)
  const gl = useThree((state) => state.gl)

  // const ref: any = useRef()
  const ref = useCameraAnimation()

  useFrame((state, delta) => ref.current.update(delta)) // sync r3f delta with 'camera-controls'

  // @ts-ignore
  return <cameraControls ref={ref} args={[camera, gl.domElement]} />
}
