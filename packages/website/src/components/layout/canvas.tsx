import { useEffect, useRef } from 'react'
import { OrbitControls, Preload } from '@react-three/drei'
import * as drei from '@react-three/drei'
import * as fiber from '@react-three/fiber'
import { Canvas } from '@react-three/fiber'
import { CameraControl, FiberContextProvider } from 'shadergradient'
import useStore from '@/helpers/store'

const LControl = () => {
  const dom = useStore((state) => state.dom)
  const control = useRef(null)

  useEffect(() => {
    if (control) {
      dom.current.style['touch-action'] = 'none'
    }
  }, [dom, control])
  // @ts-ignore
  return <OrbitControls ref={control} domElement={dom.current} />
}
const LCanvas = ({ children }) => {
  const dom = useStore((state) => state.dom)

  return (
    <Canvas
      style={{
        position: 'absolute',
        top: 0,
      }}
      onCreated={(state) => state.events.connect(dom.current)}
    >
      <Preload all />
      <FiberContextProvider value={{ ...fiber, ...drei }}>
        {/* <LControl /> */}
        <CameraControl />
        {children}
      </FiberContextProvider>
    </Canvas>
  )
}

export default LCanvas
