import * as React from 'react'
import { motion, useAnimation } from 'framer-motion'
import useStore from '@/helpers/store'

export function ScrollWrapper() {
  const scrollAnim = useAnimation()
  const [wWidth, setwWidth] = React.useState(0)
  const [wHeight, setwHeight] = React.useState(0)
  const scroll = useStore((state) => state.scroll)
  const [scrollSwitch, setScrollSwitch] = React.useState(false)
  //   const mode = useUIStore((state: any) => state.mode)

  const handleResize = () => {
    setwWidth(window.innerWidth)
    setwHeight(window.innerHeight)
  }

  React.useEffect(() => {
    if (scroll > 150) {
      setScrollSwitch(true)
    } else {
      setScrollSwitch(false)
    }
  }, [scroll])

  //   const y = useTransform(scroll, [0, 1], [0, 2])

  React.useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
    console.log(wHeight)
  }, [handleResize])

  React.useEffect(() => {
    if (scrollSwitch === true) {
      scrollAnim.start({
        width: 500,
        height: wHeight * 0.88,
        background: 'none',
        boxShadow: '0 0 0 1000px #1A1A1A',
        borderRadius: 20,
        bottom: 30,
        left: 30,
        top: 'initial',
      })
    } else {
      scrollAnim.start({
        width: '100vw',
        height: '100vh',
        boxShadow: '0 0 0 0 #1A1A1A',
        borderRadius: 0,
        position: 'fixed',
        bottom: 0,
        background: 'none',
        zIndex: 0,
        left: 0,
        top: 'initial',
      })
    }
  }, [scrollSwitch])

  return (
    <motion.div
      initial={{
        width: '100vw',
        height: '100vh',
        boxShadow: '0 0 0 0 #1A1A1A',
        borderRadius: 0,
        position: 'absolute',
        bottom: 0,
        left: 0,
        background: 'transparent',
        zIndex: 0,
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      animate={scrollAnim}
      transition={{
        duration: 0.5,
        ease: 'easeInOut',
      }}
    >
      <motion.div
        style={{
          width: '100%',
          height: '100%',
          opacity: scroll > 150 ? 1 : 0,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
          color: 'white',
          flexDirection: 'column',
          padding: 30,
        }}
      >
        <div>Shadergradient</div>
        <motion.div style={{ display: scroll < 1000 ? 'block' : 'none' }}>
          for framer
        </motion.div>
        <motion.div
          style={{ display: scroll > 1000 && scroll < 1500 ? 'block' : 'none' }}
        >
          for figma
        </motion.div>{' '}
        <motion.div style={{ display: scroll > 1500 ? 'block' : 'none' }}>
          for developers
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

ScrollWrapper.defaultProps = {}
