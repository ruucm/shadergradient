/* eslint-disable @next/next/link-passhref */
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { GradientMesh, PRESETS, useUIStore } from 'shadergradient'

import styles from './Home.module.scss'
import { AboutBtn } from '@/components/dom/AboutBtn'
import { Links } from '@/components/dom/Links'
import { PresetTitle } from '@/components/dom/PresetTitle'
import { PreviewBtn, PreviewWrapper } from '@/components/dom/PreviewBtn'
import { TextHover } from '@/components/dom/TextAnimation'
import { TextLogo } from '@/components/dom/TextLogo'

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
      <PreviewWrapper mode={mode} setMode={setMode} />

      <div className={styles.contentWrapper}>
        <div className={styles.header}>
          <TextLogo
            color={mode !== 'full' ? '#FF430A' : PRESETS[activePreset].color}
            size={isMobile === true ? 15 : 18}
          />
          <AboutBtn
            color={mode !== 'full' ? '#FF430A' : PRESETS[activePreset].color}
          />
        </div>
        <div
          className={styles.content}
          style={{ display: mode === 'full' ? 'block' : 'none' }}
        >
          <div className={styles.presetTitleWrapper}>
            {PRESETS.map((item, index) => {
              return (
                <PresetTitle
                  index={index}
                  color={item.color}
                  key={index}
                  title={
                    index < 10
                      ? '0' + index.toString() + ' ' + item.title
                      : index.toString() + ' ' + item.title
                  }
                  description={''}
                  isMobile={isMobile}
                  fontSize={isMobile ? 90 : 120}
                ></PresetTitle>
              )
            })}
          </div>

          <div
            className={styles.paragraph}
            style={{ color: PRESETS[activePreset].color }}
          >
            All visuals are created with ShaderGradient,
            <br /> a new way of creating beautiful, moving gradients. <br />
            It's made with lines of codes, so you can create your own with just
            a few clicks.
          </div>
        </div>
        <div
          className={styles.customizeBtnWrapper}
          style={{ display: mode === 'full' ? 'flex' : 'none' }}
        >
          <Link href='/customize'>
            <motion.div
              className={styles.customizeBtn}
              style={{
                color: PRESETS[activePreset].color,
                borderBottom: '2px solid ' + PRESETS[activePreset].color,
              }}
            >
              <TextHover
                fontSize={isMobile === true ? 15 : 18}
                color={PRESETS[activePreset].color}
                content={'Try it by yourself →'}
                delay={0}
              />
            </motion.div>
          </Link>
        </div>
        {isMobile === true ? null : (
          <Links color={PRESETS[activePreset].color} />
        )}
        {isMobile === true ? null : (
          <div className={styles.footer}>
            <PreviewBtn
              mode={mode}
              setMode={setMode}
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
  return (
    <>
      {/* <Shader /> */}
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <GradientMesh />
    </>
  )
}

const Page = () => {
  return (
    <>
      <DOM />
      {/* @ts-ignore */}
      {/* <R3F r3f /> */}
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
