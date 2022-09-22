import { useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import useStore from '@/helpers/store'

const NextJsCanvas = ({ children }) => {
  const dom = useStore((state) => state.dom)
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
    <Canvas
      // importedFiber={{ ...fiber, ...drei, ...reactSpring }}
      onCreated={(state) => state.events.connect(dom.current)}
      style={{
        position: 'absolute',
        top: 0,
        borderRadius: isMobile === true ? 36 : 0,
      }}
    >
      {children}
    </Canvas>
  )
}
export default NextJsCanvas
