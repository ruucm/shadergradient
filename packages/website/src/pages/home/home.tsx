import React, { useEffect, useState } from 'react'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  Gradient,
  Links,
  mainLoading,
  PRESETS,
  PresetTitles,
  PreviewBtn,
  PreviewWrapper,
  TextHover,
  useUIStore,
} from 'shadergradient'

import styles from './Home.module.scss'
import { MobileSwiper } from '@/components/dom/MobileUI'
import { useInterval } from '@/hooks'

// Dynamic import is ussed to prevent a payload when the website start that will include threejs r3f etc..
// WARNING ! errors might get obfuscated by using dynamic import.
// If something goes wrong go back to a static import to show the error.
// https://github.com/pmndrs/react-three-next/issues/49
// const Shader = dynamic(() => import('@/components/canvas/Shader/Shader'), {
//   ssr: false,
// })

// dom components goes here
const DOM = ({ time }) => {
  const mode = useUIStore((state: any) => state.mode)
  const setMode = useUIStore((state: any) => state.setMode)
  const activePreset = useUIStore((state) => state.activePreset)
  const [isMobile, setIsMobile] = useState(null)

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

  if (time <= mainLoading.start) return <></>

  return (
    <>
      {isMobile && <MobileSwiper />}

      <PreviewWrapper />

      <div
        className={styles.contentWrapper}
        style={{ display: mode === 'full' ? 'flex' : 'none' }}
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{
              color: PRESETS[activePreset].color,
              display: isMobile === true ? 'none' : 'block',
            }}
          >
            All visuals are created with ShaderGradient,
            <br /> a new way of creating beautiful, moving gradients. <br />
            {`It's made with lines of codes, so you can create your own with just
            a few clicks.`}
          </motion.div>
          <div
            className={styles.customizeBtnWrapper}
            style={{
              display: isMobile === false ? 'flex' : 'none',
            }}
          >
            <Link href='/customize'>
              <motion.div className={styles.customizeBtn}>
                <TextHover
                  fontSize={isMobile === true ? 15 : 18}
                  color={PRESETS[activePreset].color}
                  content={'Try it by yourself →'}
                  delay={0}
                  border
                />
              </motion.div>
            </Link>
          </div>
          {isMobile === false && <Links />}
        </div>
      </div>
      {isMobile === false && (
        <div className={styles.footer}>
          <PreviewBtn
            color={mode !== 'full' ? '#FF430A' : PRESETS[activePreset].color}
          />
        </div>
      )}
    </>
  )
}

// canvas components goes here
const R3F = ({ time }) => {
  const loadingPercentage = useUIStore((state: any) => state.loadingPercentage)
  console.log('loadingPercentage', loadingPercentage)

  if (time <= mainLoading.ready) return null
  else if (time > mainLoading.ready && time <= mainLoading.start)
    return (
      <Gradient
        cDistance={28}
        rotationX={0}
        rotationY={0}
        rotationZ={0}
        uStrength={0}
        uDensity={0}
      />
    )
  else if (time > mainLoading.start) return <Gradient control='query' />
}

const Page = () => {
  const [time, setTime] = useState(0)
  useInterval(() => {
    setTime(time + 1)
  }, 1000)

  return (
    <>
      <DOM time={time} />
      {/* @ts-ignore */}
      <R3F r3f time={time} />
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
