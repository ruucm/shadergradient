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

  React.useEffect(() => {
    setSwipeCount(swipeCount + 1)
  }, [activePreset])

  const handlers = useSwipeable({
    onSwipedUp: (e) => {
      if (activePreset !== 0) {
        setActivePreset(activePreset - 1)
      } else {
        setActivePreset(PRESETS.length - 1)
      }
    },
    onSwipedDown: (e) => {
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
      {swipeCount === 0 ? (
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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          swipe
          <motion.div initial={{ y: 0, opacity: 1 }} animate={swipeArrowAnim}>
            <ChevronDown color={PRESETS[activePreset].color} size={18} />
          </motion.div>
        </motion.div>
      ) : (
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
        >
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
                content={'Try it by yourself →'}
                delay={0}
                border
              />
            </motion.div>
          </Link>
        </motion.div>
      )}
    </div>
  )
}
MobileSwiper.defaultProps = {}
