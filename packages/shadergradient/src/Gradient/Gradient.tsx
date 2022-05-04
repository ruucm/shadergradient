// @ts-nocheck
import * as React from 'react'
import { FiberCanvas, useFiber } from '../useFiber'
import { CameraControl, GradientMesh } from './index'

<<<<<<< Updated upstream
export function Gradient() {
  const fiber = useFiber()
=======
export function Gradient({ zoomOut = false, animate, inAbout = false }) {
  useEffect(() => usePropertyStore.setState({ zoomOut }), [zoomOut])
  useEffect(() => usePropertyStore.setState({ inAbout }), [inAbout])
  usePropsToStore({ animate })

  // effects
  const [lightType] = useQueryState('lightType')
  const [brightness] = useQueryState('brightness')
  const [envPreset] = useQueryState('envPreset')
  const [grain] = useQueryState('grain')
  const [reflection] = useQueryState('reflection')

  usePostProcessing({ on: true, grain: grain === 'on' })
>>>>>>> Stashed changes

  return (
    <FiberCanvas fiber={fiber}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      {/* <fiber.OrbitControls /> */}
      <CameraControl />
      <GradientMesh />
    </FiberCanvas>
  )
}
