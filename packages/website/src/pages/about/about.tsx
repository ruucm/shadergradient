import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useUIStore, Gradient } from 'shadergradient'
import styles from '../home/Home.module.scss'

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
      <div className={styles.contentWrapper}></div>
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
        </motion.div>
      </div>
    </>
  )
}
const R3F = () => {
  return <Gradient toggleZoom />
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
      title: 'Shader Gradient ─ About',
    },
  }
}
