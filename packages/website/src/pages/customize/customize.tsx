import * as React from 'react'
import { GradientMesh, useUIStore } from 'shadergradient'
import styles from '../home/Home.module.scss'
import { Controls } from './comps/Controls'

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
  const activePreset = useUIStore((state: any) => state.activePreset)

  const setActivePreset = useUIStore((state: any) => state.setActivePreset)
  const loadingPercentage = useUIStore((state: any) => state.loadingPercentage)

  const [isMobile, setIsMobile] = React.useState(false)
  const [activeTab, setActiveTab] = React.useState('none')

  //choose the screen size
  const handleResize = () => {
    if (window.innerWidth < 641) {
      setIsMobile(true)
      setActiveTab('shape')
    } else {
      setIsMobile(false)
    }
  }
  const appHeight = () => {
    const doc = document.documentElement
    doc.style.setProperty('--app-height', `${window.innerHeight}px`)
  }

  // create an event listener
  React.useEffect(() => {
    handleResize()
    appHeight()

    window.addEventListener('resize', handleResize)
    window.addEventListener('resize', appHeight)
    setMode('full')
  }, [])

  return (
    <div className={styles.wrap}>
      customize
      <Controls
        isMobile={isMobile}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
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
