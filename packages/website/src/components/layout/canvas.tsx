import { useEffect, useRef } from 'react'
import { OrbitControls } from '@react-three/drei'
import * as drei from '@react-three/drei'
import * as fiber from '@react-three/fiber'
import { LCanvas } from 'shadergradient'
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

// export default LCanvas
const NextJsCanvas = ({ children }) => {
  const dom = useStore((state) => state.dom)

  return (
    <LCanvas
      importedFiber={{ ...fiber, ...drei }}
      onCreated={(state) => state.events.connect(dom.current)}
      style={{
        position: 'absolute',
        top: 0,
        borderRadius: 36,
      }}
    >
      {children}
    </LCanvas>
  )
}
export default NextJsCanvas
