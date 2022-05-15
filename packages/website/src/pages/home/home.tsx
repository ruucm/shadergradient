import React, { useEffect, useState } from 'react'

import { motion, useAnimation } from 'framer-motion'
import Link from 'next/link'
import { ChevronDown } from 'react-feather'
import {
  Gradient,
  Links,
  PRESETS,
  PresetTitles,
  PreviewBtn,
  PreviewWrapper,
  TextHover,
  useUIStore,
} from 'shadergradient'

import styles from './Home.module.scss'
import { MobileSwiper } from '@/components/dom/MobileUI'

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
  const loadingPercentage = useUIStore((state: any) => state.loadingPercentage)
  const activePreset = useUIStore((state) => state.activePreset)
  const [isMobile, setIsMobile] = useState(false)
  const swipeArrowAnim = useAnimation()

  //choose the screen size
  const handleResize = () => {
    if (window.innerWidth < 641) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }

  // for safari
  const appHeight = () => {
    const doc = document.documentElement
    doc.style.setProperty('--app-height', `${window.innerHeight}px`)
  }

  // create an event listener
  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
    // window.addEventListener('appHeight', appHeight)
    // appHeight()
    setMode('full')
    swipeArrowAnim.start({
      y: 10,
      opacity: 0,
      transition: {
        repeat: Infinity,
        duration: 1,
        repeatType: 'loop',
      },
    })
  }, [])

  console.log('loadingPercentage', loadingPercentage)
  return (
    <>
      {isMobile && <MobileSwiper />}
      {isMobile && (
        <motion.div
          className={styles.swipe}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          swipe
          <motion.div initial={{ y: 0, opacity: 1 }} animate={swipeArrowAnim}>
            <ChevronDown color={PRESETS[activePreset].color} size={18} />
          </motion.div>
        </motion.div>
      )}
      <PreviewWrapper />

      <div className={styles.contentWrapper}>
        <div
          className={styles.content}
          style={{ display: mode === 'full' ? 'block' : 'none' }}
        >
          <div className={styles.presetTitleWrapper}>
            <PresetTitles
              isMobile={isMobile}
              fontSize={isMobile === true ? 70 : 120}
            />
          </div>

          <div
            className={styles.paragraph}
            style={{
              color: PRESETS[activePreset].color,
              display: isMobile === true ? 'none' : 'block',
            }}
          >
            All visuals are created with ShaderGradient,
            <br /> a new way of creating beautiful, moving gradients. <br />
            {`It's made with lines of codes, so you can create your own with just
            a few clicks.`}
          </div>
        </div>
        <div
          className={styles.customizeBtnWrapper}
          style={{
            display: mode === 'full' && isMobile !== true ? 'flex' : 'none',
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
        {isMobile === true ? null : <Links />}
        {isMobile === true ? null : (
          <div className={styles.footer}>
            <PreviewBtn
              color={mode !== 'full' ? '#FF430A' : PRESETS[activePreset].color}
            />
          </div>
        )}
      </div>
    </>
  )
}

// canvas components goes here
const R3F = () => {
  return <Gradient />
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
