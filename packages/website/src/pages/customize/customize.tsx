import React, { useState, useEffect } from 'react'
import {
  GradientMesh,
  useUIStore,
  PRESETS,
  PreviewBtn,
  PreviewWrapper,
  PresetTitles,
} from 'shadergradient'
import styles from '../home/Home.module.scss'
import { Controls } from './comps/Controls'
import { AboutBtn } from '@/components/dom/AboutBtn'
import { TextLogo } from '@/components/dom/TextLogo'

// Dynamic import is used to prevent a payload when the website start that will include threejs r3f etc..
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
  const [activeTab, setActiveTab] = useState('none')

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
  // const [embedMode] = useQueryState('embedMode')

  console.log('loadingPercentage', loadingPercentage)

  return (
    <>
      <PreviewWrapper mode={mode} setMode={setMode} />

      <div className={styles.contentWrapper}>
        <div className={styles.header}>
          <TextLogo
            color={mode !== 'full' ? '#FF430A' : PRESETS[activePreset].color}
            size={15}
          />
          <AboutBtn
            color={mode !== 'full' ? '#FF430A' : PRESETS[activePreset].color}
          />
        </div>
        <div className={styles.content}>
          <div
            className={styles.presetTitleWrapper}
            style={{ display: mode === 'full' ? 'block' : 'none' }}
          >
            <PresetTitles isMobile={isMobile} fontSize={50} />
          </div>
          <Controls
            isMobile={isMobile}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </div>

        <div className={styles.footer}>
          <PreviewBtn
            mode={mode}
            setMode={setMode}
            color={mode !== 'full' ? '#FF430A' : PRESETS[activePreset].color}
          />
        </div>
      </div>
    </>
  )
}

// canvas components goes here
const R3F = () => {
  return (
    <>
      {/* <Shader /> */}
      <ambientLight intensity={1} />
      {/* <pointLight position={[10, 10, 10]} /> */}
      <GradientMesh />
    </>
  )
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
