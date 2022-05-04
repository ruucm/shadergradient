import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
<<<<<<< Updated upstream
import Link from 'next/link'
import { PRESETS, useUIStore, GradientMesh } from 'shadergradient'
import styles from '../home/Home.module.scss'
import { AboutBtn } from '@/components/dom/AboutBtn'
import { TextLogo } from '@/components/dom/TextLogo'
=======
import {
  useUIStore,
  Gradient,
  TextAnimation,
  TextHoverBox,
} from 'shadergradient'
>>>>>>> Stashed changes

const DOM = () => {
  const mode = useUIStore((state: any) => state.mode)
  const setMode = useUIStore((state: any) => state.setMode)
  const [isMobile, setIsMobile] = useState(false)
  const activePreset = useUIStore((state) => state.activePreset)

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

    setMode('about')
  }, [])

  return (
    <>
<<<<<<< Updated upstream
      <div className={styles.contentWrapper}>
        <div className={styles.header}>
          <TextLogo color='#FF430A' size={15} />
          <AboutBtn
            inAbout={true}
            color={mode !== 'full' ? '#FF430A' : PRESETS[activePreset].color}
          />
        </div>
      </div>
      <div className={styles.modalWrapper}>
        <motion.div className={styles.aboutModal}>
          <div className={styles.title}>
            <motion.h1
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              initial={{ opacity: 0 }}
            >
              A shader is a set of instructions that calculates and draws every
              single pixel on the screen. The gradients are the part of the 3d
              object drawn by our custom shaders. The shaders create a natural
              movement and expression of the gradient that can make your digital
              products vibrant and lively. <br />
            </motion.h1>

            <motion.h1
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              initial={{ opacity: 0 }}
            >
              You can control properties related to shape, color, effects, and
              camera. The three colors you pick are connected to the very top
              left, very top right, and the very bottom of the fluctuating
              plane. Explore more about properties by experimenting with them at{' '}
              <Link href='/customize'>→ customize</Link> page.
            </motion.h1>
            <motion.h1
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              initial={{ opacity: 0 }}
            >
              Made by two creatives,
              <br /> <a href=''>→ Ruucm</a>{' '}
              <a href='https://seungmee-lee.com'>→ stone.skipper</a> with 17
              Sunday afternoons.
            </motion.h1>
          </div>
=======
      <div
        style={{
          width: '100%',
          height: 'fit-content',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          top: '28%',
        }}
      >
        <TextAnimation
          fontSize={80}
          color='#ff340A'
          delay={0}
          content='ShaderGradient'
        />
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className='m-4 text-lg text-center text-primary'
        >
          This project has started while we were exploring the realm of creative
          coding,
          <br /> and thinking if there’s another way of creating a gradient.
          <br /> We envisioned something that resembles the sky that shines, and
          water that flows.
          <br /> <br />
          What you’re seeing as a gradient is a part of moving 3d object. <br />
          It’s drawn from lines of codes called ‘shader’, so every pixels are
          calulcated and visualized <br />
          based on the value of{' '}
          <TextHoverBox
            content='shape, speed, noise strength, noise density, colors, environment, lighting, reflections, camera angle and positions ... and more to come!'
            text='all the properties'
            link='https://seungmee-lee.com'
            tag='Or got any idea? Let us know'
          />{' '}
          that you’re changing.
>>>>>>> Stashed changes
        </motion.div>
      </div>
      <div
        className='text-sm text-primary'
        style={{
          width: '95%',
          borderTop: '1.5px solid #ff340A',
          position: 'absolute',
          bottom: 0,
          margin: 40,
          paddingTop: 10,
          height: 'fit-content',
          display: 'grid',
          gridTemplateColumns: '50% 50%',
        }}
      >
        <div className='flex gap-6'>
          <p>made by</p>
          <div style={{ display: 'inline' }}>
            <TextHoverBox
              content='developer'
              text='ruucm'
              link=''
              tag='say hi 👋'
            />{' '}
            &{' '}
            <TextHoverBox
              content='designer'
              text='seungmee'
              link='https://seungmee-lee.com'
              tag='say hi 👋'
            />
            <br /> as a toy project
          </div>
        </div>
        <div className='flex gap-6'>
          <p>available from</p>
          <div style={{ display: 'inline' }}>
            For designers,{' '}
            <TextHoverBox
              content='Enjoy the maximum potential of ShaderGradient!'
              text='Framer Package'
              link=''
            />{' '}
            &{' '}
            <TextHoverBox
              content='For now, it only supports static gradient. GIF export on the way!'
              text='Figma Plugin (beta)'
              link='https://seungmee-lee.com'
            />
            <br /> For developers,{' '}
            <TextHoverBox
              content='import from NPM. Create yours from the website, and use "Copy as Code" feature'
              text='React Component'
              link=''
            />
          </div>
        </div>
      </div>
    </>
  )
}
const R3F = () => {
<<<<<<< Updated upstream
  return (
    <>
      {/* <Shader /> */}
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <GradientMesh />
    </>
  )
=======
  return <Gradient zoomOut animate={true} inAbout={true} />
>>>>>>> Stashed changes
}
const Page = () => {
  return (
    <>
      <DOM />
      {/* <R3F r3f /> */}
    </>
  )
}

export default Page

export async function getStaticProps() {
  return {
    props: {
      title: 'Shader Gradient ─ About',
    },
  }
}
