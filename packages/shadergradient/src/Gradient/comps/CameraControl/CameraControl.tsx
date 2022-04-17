import { useRef, useEffect } from 'react'
import CameraControls from 'camera-controls'
import * as THREE from 'three'
import { useFiber } from '../../../useFiber'

export function CameraControl() {
  const { extend, useThree, useFrame } = useFiber()

  CameraControls.install({ THREE })
  extend({ CameraControls })

  const camera = useThree((state) => state.camera)
  const gl = useThree((state) => state.gl)

  const ref: any = useRef()

  useFrame((state, delta) => ref.current.update(delta)) // sync r3f delta with 'camera-controls'

  useEffect(() => {
    const control = ref.current
    if (control) {
      control.dollyTo(10, true)
      control.rotateTo(0, Math.PI / 2, 0, true)
    }
  }, [ref])

  // @ts-ignore
  return <cameraControls ref={ref} args={[camera, gl.domElement]} />
}
