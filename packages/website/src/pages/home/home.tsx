import React, { useEffect, useState } from 'react'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  Gradient,
  mainLoading,
  PRESETS,
  PresetTitles,
  PreviewBtn,
  PreviewWrapper,
  TextHover,
  useUIStore,
  useCursorStore,
  dToRArr,
  sleep,
} from 'shadergradient'

import styles from './Home.module.scss'
import { MobileSwiper } from '@/components/dom/MobileUI'
import { ScrollWrapper } from '@/components/dom/scrollWrapper'
import useStore from '@/helpers/store'
import { useTimer } from '@/hooks/useTimer'

// Dynamic import is ussed to prevent a payload when the website start that will include threejs r3f etc..
// WARNING ! errors might get obfuscated by using dynamic import.
// If something goes wrong go back to a static import to show the error.
// https://github.com/pmndrs/react-three-next/issues/49
// const Shader = dynamic(() => import('@/components/canvas/Shader/Shader'), {
//   ssr: false,
// })

// dom components goes here
const DOM = () => {
  const mode = useUIStore((state: any) => state.mode)
  const setMode = useUIStore((state: any) => state.setMode)
  const activePreset = useUIStore((state) => state.activePreset)
  const [isMobile, setIsMobile] = useState(null)
  const scroll = useStore((state) => state.scroll)
  const scrollStart = 30
  const time = useTimer(true)

  // //choose the screen size
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
    setMode('full')
  }, [])

  const textAnimationBase = 0.3
  const textAnimationGap = 0.15
  const textDuration = 0.35
  const textEase = 'easeInOut'

  if (time <= mainLoading.text) return <></>

  return (
    <>
      <div
        style={{
          width: '100vw',
          height: 'fit-content',
          position: 'absolute',
        }}
      >
        <div style={{ position: 'fixed', color: 'white', zIndex: 100 }}>
          {scroll}
        </div>
        {isMobile && <MobileSwiper />}
        <ScrollWrapper />
        <PreviewWrapper />

        <motion.div
          className={styles.contentWrapper}
          style={{
            display: mode === 'full' ? 'flex' : 'none',
            position: 'absolute',
          }}
          animate={{
            opacity: scroll > scrollStart ? 0 : 1,
          }}
        >
          <div
            className={styles.content}
            style={{
              writingMode: isMobile === true ? 'vertical-rl' : null,
            }}
          >
            <div className={styles.presetTitleWrapper}>
              <PresetTitles
                isMobile={isMobile}
                fontSize={isMobile === true ? 70 : 120}
                arrowOn={isMobile === true ? false : true}
              />
            </div>

            <motion.div
              className={styles.paragraph}
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: textAnimationBase,
                duration: textDuration,
                ease: textEase,
              }}
              style={{
                color: PRESETS[activePreset].color,
                display: isMobile === false ? 'block' : 'none',
              }}
            >
              All visuals are created with ShaderGradient,
              <br /> a new way of creating beautiful, moving gradients. <br />
              {`It's made with lines of codes, so you can create your own with just
            a few clicks.`}
            </motion.div>
            <motion.div
              className={styles.customizeBtnWrapper}
              initial={{
                display: 'none',
                opacity: 0,
                y: 20,
              }}
              animate={{
                display: isMobile === false ? 'flex' : 'none',
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: textAnimationBase + textAnimationGap,
                duration: textDuration,
                ease: textEase,
              }}
            >
              <Link href='/customize'>
                <motion.div
                  className={styles.customizeBtn}
                  onMouseMove={() => {
                    useCursorStore.setState({ hover: 'button' })
                  }}
                  onMouseLeave={() => {
                    useCursorStore.setState({ hover: 'default' })
                  }}
                >
                  <TextHover
                    fontSize={isMobile === true ? 15 : 18}
                    color={PRESETS[activePreset].color}
                    content={'Create yours →'}
                    delay={0}
                    border
                  />
                </motion.div>
              </Link>
            </motion.div>
            <motion.div
              style={{
                width: '100%',
                textAlign: 'center',
                position: 'absolute',
                bottom: 0,
                height: 200,
                left: 0,
                color: 'white',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
              }}
            >
              <div>learn more</div>
              <motion.div
                onClick={() => {}}
                style={{ fontSize: 20 }}
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: 30 }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'loop',
                }}
              >
                ↓
              </motion.div>
            </motion.div>
            {/* <motion.div
            style={{ position: 'absolute', bottom: 0 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: textAnimationBase + textAnimationGap * 2,
              duration: textDuration,
              ease: textEase,
            }}
          >
            {isMobile === false && <Links />}
          </motion.div> */}
          </div>
        </motion.div>
        {isMobile === false && (
          <div className={styles.footer}>
            <PreviewBtn
              color={mode !== 'full' ? '#FF430A' : PRESETS[activePreset].color}
            />
          </div>
        )}
      </div>
      <div
        style={{
          width: '100vw',
          height: 3350,
          margin: 150,
          display: isMobile === true ? 'none' : 'block',
        }}
      >
        <motion.iframe
          style={{
            width: '60vw',
            height: 3350,
            position: 'absolute',
            marginTop: 300,
            display: scroll > scrollStart ? 'block' : 'none',
            right: 30,
            overflow: 'hidden',
            background: '#1A1A1A',
          }}
          animate={
            {
              // opacity: scroll > scrollStart ? 1 : 0,
            }
          }
          src='https://shader-gradient.framer.website/framercomp'
          title='shadergradient content'
        ></motion.iframe>
      </div>
      {/* <motion.div
        style={{
          background:
            'linear-gradient(rgba(26, 26, 26,1), rgba(26, 26, 26, 1), rgba(26, 26, 26, 1), rgba(26, 26, 26,0.6), rgba(26, 26, 26,0))',
          width: '62.5vw',
          height: 75,
          position: 'fixed',
          right: 0,
          top: 0,
          opacity: scroll > 150 ? 1 : 0,
        }}
      ></motion.div> */}
    </>
  )
}

// canvas components goes here
const R3F = () => {
  const afterStart = useTimer(
    true,
    (mainLoading.meshDur + mainLoading.meshDelay + 0.7) * 1000
  )
  const c1 = 1.70158
  const c2 = c1 * 1.525
  const c3 = c1 + 1
  const c4 = (2 * Math.PI) / 3
  const c5 = (2 * Math.PI) / 4.5

  if (!afterStart)
    return (
      <Gradient
        cAzimuthAngle={180}
        cPolarAngle={90}
        dampingFactor={1} // default value 0.05, max 1
        rotSpringOption={({ rotation }) => ({
          to: async (next, cancel) => {
            await sleep(mainLoading.rotDelay)
            await next({ animatedRotation: dToRArr([30, 10, 40]) })
            await next({ animatedRotation: rotation })
          },
          from: { animatedRotation: dToRArr([0, 0, 0]) },
          config: {
            duration: mainLoading.rotDur * 1000,
            // https://github.com/pmndrs/react-spring/blob/master/packages/core/src/constants.ts
            easing: (x) =>
              x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2, //cubic in out
          },
        })}
        posSpringOption={({ position }) => ({
          to: async (next, cancel) => {
            await sleep(mainLoading.posDelay)
            await next({ animatedPosition: position })
          },
          from: { animatedPosition: [0, 0, 15] },
          config: {
            duration: mainLoading.posDur * 1000,
            // https://github.com/pmndrs/react-spring/blob/master/packages/core/src/constants.ts
            easing: (x) =>
              x === 0
                ? 0
                : x === 1
                ? 1
                : x < 0.5
                ? Math.pow(2, 20 * x - 10) / 2
                : (2 - Math.pow(2, -20 * x + 10)) / 2, //expoInOut
          },
        })}
      />
    )
  return <Gradient control='query' dampingFactor={0.03} />
}

const Page = () => {
  return (
    <>
      <DOM />
      {/* @ts-ignore */}
      <R3F r3f />
    </>
  )
}

export default Page

export async function getStaticProps() {
  return {
    props: {
      title: 'Index',
    },
  }
}
