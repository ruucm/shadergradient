import * as React from 'react'
import { motion, useAnimation } from 'framer-motion'

export function PreviewWrapper({ mode = 'mobile', setMode = void 0 }) {
  const previewAnim = useAnimation()
  const [wWidth, setwWidth] = React.useState(0)
  const [wHeight, setwHeight] = React.useState(0)

  const handleResize = () => {
    setwWidth(window.innerWidth)
    setwHeight(window.innerHeight)
  }
  React.useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
  }, [handleResize])

  React.useEffect(() => {
    if (mode === 'mobile') {
      previewAnim.start({
        width: wHeight * 0.65 * 0.55,
        height: wHeight * 0.65,
        background: 'none',
        boxShadow: '0 0 0 1000px white',
        borderRadius: 15,
        top: '5vh',
        left: (wWidth - wHeight * 0.65 * 0.55) / 2,
      })
    } else if (mode === 'web') {
      previewAnim.start({
        width: wHeight * 0.65 * 1.5,
        height: wHeight * 0.65,
        background: 'none',
        boxShadow: '0 0 0 1000px white',
        borderRadius: 15,
        top: '5vh',
        left: (wWidth - wHeight * 0.65 * 1.5) / 2,
      })
    } else if (mode === 'full') {
      previewAnim.start({
        width: '100vw',
        height: '100vh',
        boxShadow: '0 0 0 0 white',
        borderRadius: 0,
        position: 'absolute',
        top: 0,
        left: 0,
        background: 'none',
        zIndex: 0,
      })
    } else if (mode === 'about') {
      // setZoom()
    }
  }, [mode, wWidth, wHeight])

  return (
    <motion.div
      initial={{
        width: '100vw',
        height: '100vh',
        boxShadow: '0 0 0 0 white',
        borderRadius: 0,
        position: 'absolute',
        top: 0,
        left: 0,
        background: 'transparent',
        zIndex: 0,
      }}
      animate={previewAnim}
      transition={{
        duration: 0.5,
      }}
    ></motion.div>
  )
}

PreviewWrapper.defaultProps = {}
