import * as React from 'react'
import { motion, useAnimation } from 'framer-motion'
import { Footer } from '../Footer'
import { IconScroll } from './iconScroll'
import { LinkTo } from './linkTo'
import useStore from '@/helpers/store'

export function ScrollWrapper() {
  const scrollAnim = useAnimation()
  const [wWidth, setwWidth] = React.useState(0)
  const [wHeight, setwHeight] = React.useState(0)
  const scroll = useStore((state) => state.scroll)
  const [scrollSwitch, setScrollSwitch] = React.useState('')
  const framerSection = 150
  const figmaSection = 1000
  const developerSection = 2000
  //   const mode = useUIStore((state: any) => state.mode)

  const handleResize = () => {
    setwWidth(window.innerWidth)
    setwHeight(window.innerHeight)
  }

  React.useEffect(() => {
    if (scroll > framerSection && scroll < figmaSection) {
      setScrollSwitch('framer')
    } else if (scroll > figmaSection && scroll < developerSection) {
      setScrollSwitch('figma')
    } else if (scroll > developerSection) {
      setScrollSwitch('developer')
    } else {
      setScrollSwitch('')
    }
  }, [scroll])

  //   const y = useTransform(scroll, [0, 1], [0, 2])

  React.useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
  }, [handleResize])

  React.useEffect(() => {
    if (scrollSwitch !== '') {
      scrollAnim.start({
        width: wWidth * 0.35,
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
        width: wWidth,
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
        duration: 0.2,
      }}
    >
      <motion.div
        style={{
          width: '100%',
          height: '100%',
          opacity: scrollSwitch !== '' ? 1 : 0,
          color: 'white',
          padding: 30,
          paddingTop: 50,
          display: 'flex',
          flexDirection: 'column',
          gap: 20,
        }}
      >
        <LinkTo
          scroll={scroll}
          figmaSection={figmaSection}
          framerSection={framerSection}
          developerSection={developerSection}
        />
        <IconScroll
          scroll={scroll}
          figmaSection={figmaSection}
          framerSection={framerSection}
          developerSection={developerSection}
        />
        <div
          style={{
            fontSize: '2.8em',
            fontWeight: 500,
            gap: 0,
            lineHeight: 1.2,
            flexDirection: 'column',
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
          }}
        >
          <div>Shadergradient</div>
          <motion.div
            animate={{
              opacity: scrollSwitch === 'framer' ? 1 : 0.4,
            }}
          >
            {scrollSwitch === 'framer' && <span>—</span>}for Framer{' '}
          </motion.div>
          <motion.div
            animate={{
              opacity: scrollSwitch === 'figma' ? 1 : 0.4,
            }}
          >
            {scrollSwitch === 'figma' && <span>—</span>}
            for Figma
          </motion.div>{' '}
          <motion.div
            animate={{ opacity: scrollSwitch === 'developer' ? 1 : 0.4 }}
          >
            {scrollSwitch === 'developer' && <span>—</span>} for developers
          </motion.div>
        </div>
        <div style={{ width: 220, paddingTop: 30 }}>
          {scrollSwitch === 'framer'
            ? 'The best tool to enjoy the full potential of ShaderGradient.'
            : scrollSwitch === 'figma'
            ? 'New way to create a gradient on your favorite design tool. GIF support on the way'
            : scrollSwitch === 'developer'
            ? 'Deploy eye-catching website with ShaderGradient component'
            : ''}
        </div>
        <Footer />
      </motion.div>
    </motion.div>
  )
}

ScrollWrapper.defaultProps = {}
