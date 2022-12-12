import { useEffect, useRef, useState } from 'react'
import * as reactSpring from '@react-spring/three'
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
  const scroll = useStore((state) => state.scroll)
  const [isMobile, setIsMobile] = useState(null)

  //choose the screen size
  const handleResize = () => {
    if (window.innerWidth < 641) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }

  // create an event listener
  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
  }, [])
  return (
    <LCanvas
      importedFiber={{ ...fiber, ...drei, ...reactSpring }}
      onCreated={(state) => state.events.connect(dom.current)}
      style={{
        position: 'fixed',
        top: 0,
        borderRadius: isMobile === true ? 36 : 0,
      }}
    >
      {children}
    </LCanvas>
  )
}
export default NextJsCanvas
