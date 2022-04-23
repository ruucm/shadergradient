import React, { useEffect, useState } from 'react'
import {
  GradientMesh,
  Button,
  TestControl,
  NumberInput,
  ToolsBox,
  PRESETS,
  useUIStore,
} from 'shadergradient'

import styles from './Home.module.scss'
import { PresetTitle } from '@/components/dom/PresetTitle'
import { PreviewBtn } from '@/components/dom/PreviewBtn'

// Dynamic import is used to prevent a payload when the website start that will include threejs r3f etc..
// WARNING ! errors might get obfuscated by using dynamic import.
// If something goes wrong go back to a static import to show the error.
// https://github.com/pmndrs/react-three-next/issues/49
// const Shader = dynamic(() => import('@/components/canvas/Shader/Shader'), {
//   ssr: false,
// })

// dom components goes here
const DOM = () => {
  const [activeTab, setActiveTab] = React.useState('shape')
  const [isMobile, setIsMobile] = useState(false)
  const setMode = useUIStore((state: any) => state.setMode)

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

  return (
    <div className={styles.wrap}>
      next.js (website)
      <Button />
      <TestControl />
      <NumberInput />
      <ToolsBox />
      <PreviewBtn />
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
      {/* <PropertyControls activeTab={activeTab} setActiveTab={setActiveTab} /> */}
    </div>
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
