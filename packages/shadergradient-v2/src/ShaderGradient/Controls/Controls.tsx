import { OrbitControls } from '@react-three/drei'
import { CameraControl } from './CameraControl'

export function Controls(props): JSX.Element {
  return (
    <>
      {/* <OrbitControls /> */}
      <CameraControl {...props} />
    </>
  )
}
