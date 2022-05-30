import * as React from 'react'
import { motion, useAnimation } from 'framer-motion'
import Link from 'next/link'
import { ChevronDown } from 'react-feather'
import { useUIStore, PRESETS, TextHover } from 'shadergradient'
import { useSwipeable } from '../../../lib/react-swipeable'

export function MobileSwiper() {
  const activePreset = useUIStore((state) => state.activePreset)
  const setActivePreset = useUIStore((state) => state.setActivePreset)
  const [swipeCount, setSwipeCount] = React.useState(0)
  const swipeArrowAnim = useAnimation()

  React.useEffect(() => {
    swipeArrowAnim.start({
      y: 10,
      opacity: 0,
      transition: {
        repeat: Infinity,
        duration: 1,
        repeatType: 'loop',
      },
    })
  }, [swipeArrowAnim])

  const handlers = useSwipeable({
    onSwipedUp: (e) => {
      setSwipeCount(swipeCount + 1)
      if (activePreset !== 0) {
        setActivePreset(activePreset - 1)
      } else {
        setActivePreset(PRESETS.length - 1)
      }
    },
    onSwipedDown: (e) => {
      setSwipeCount(swipeCount + 1)
      if (activePreset !== PRESETS.length - 1) {
        setActivePreset(activePreset + 1)
      } else {
        setActivePreset(0)
      }
    },
  })
  return (
    <div
      {...handlers}
      style={{
        width: '100%',
        height: '100%',
        position: 'fixed',
        bottom: 0,
        zIndex: 1,
      }}
    >
      <motion.div
        style={{
          color: '#ff340A',
          background: 'white',
          width: 'fit-content',
          height: 'fit-content',
          padding: 8,
          paddingRight: 50,
          position: 'absolute',
          bottom: 100,
          zIndex: 5,
          right: -20,
          fontSize: '0.8em',
          textTransform: 'uppercase',
          borderRadius: 4,
          lineHeight: 1.2,
        }}
        initial={{ opacity: 0, rotate: -4, y: 150 }}
        animate={{ opacity: 1, y: 0 }}
      >
        All visuals
        <br />
        created with
        <br />
        ShaderGradient
      </motion.div>
      <motion.div
        style={{
          color: 'white',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          width: '100%',
          height: 'fit-content',
          bottom: '5vh',
        }}
        className='absolute flex justify-center'
      >
        {swipeCount === 0 ? (
          <>
            swipe
            <motion.div initial={{ y: 0, opacity: 1 }} animate={swipeArrowAnim}>
              <ChevronDown color={PRESETS[activePreset].color} size={18} />
            </motion.div>
          </>
        ) : (
          <Link href='/customize'>
            <motion.div
              style={{
                padding: '2px 5px',
                margin: 0,
                width: 'fit-content',
                cursor: 'pointer',
              }}
            >
              <TextHover
                fontSize={15}
                color={PRESETS[activePreset].color}
                content={'Create your own →'}
                delay={0}
                border
              />
            </motion.div>
          </Link>
        )}
      </motion.div>
    </div>
  )
}
MobileSwiper.defaultProps = {}
