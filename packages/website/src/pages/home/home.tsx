import React, { useEffect, useState } from 'react'

import { motion } from 'framer-motion'
import Link from 'next/link'
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
    setMode('full')
  }, [])

  console.log('loadingPercentage', loadingPercentage)
  return (
    <>
      <PreviewWrapper />

      <div className={styles.contentWrapper}>
        <div
          className={styles.content}
          style={{ display: mode === 'full' ? 'block' : 'none' }}
        >
          <div className={styles.presetTitleWrapper}>
            <PresetTitles isMobile={isMobile} />
          </div>

          <div
            className={styles.paragraph}
            style={{ color: PRESETS[activePreset].color }}
          >
            All visuals are created with ShaderGradient,
            <br /> a new way of creating beautiful, moving gradients. <br />
            {`It's made with lines of codes, so you can create your own with just
            a few clicks.`}
          </div>
        </div>
        <div
          className={styles.customizeBtnWrapper}
          style={{ display: mode === 'full' ? 'flex' : 'none' }}
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
