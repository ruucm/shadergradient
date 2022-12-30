import Link from 'next/link'
import { useState, useEffect } from 'react'
import {
  Gradient,
  PresetTitles,
  useUIStore,
  mainLoading,
  PRESETS,
  useCursorStore,
} from 'shadergradient'
import { TextHover, LoaderRoot } from 'shadergradient/ui'
import styles from './Home.module.scss'
import { motion } from 'framer-motion'
import { useTimer } from '@/hooks/useTimer'

// Dom components go here
export default function Page(props) {
  const mode = useUIStore((state: any) => state.mode)
  const setMode = useUIStore((state: any) => state.setMode)
  const activePreset = useUIStore((state) => state.activePreset)
  const [isMobile, setIsMobile] = useState(null)

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
      {/* {isMobile && <MobileSwiper />} */}

      {/* <PreviewWrapper /> */}

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

            <LoaderRoot />
            <br />
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
                  font={'inter'}
                  content={'Create yours →'}
                  delay={0}
                  border
                />
              </motion.div>
            </Link>
          </motion.div>
          <motion.div
            style={{ position: 'absolute', bottom: 0 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: textAnimationBase + textAnimationGap * 2,
              duration: textDuration,
              ease: textEase,
            }}
          >
            {/* {isMobile === false && <Links />} */}
          </motion.div>
        </div>
      </div>
      {/* {isMobile === false && (
        <div className={styles.footer}>
          <PreviewBtn
            color={mode !== 'full' ? '#FF430A' : PRESETS[activePreset].color}
          />
        </div>
      )} */}
    </>
  )
}

// Canvas components go here
// It will receive same props as the Page component (from getStaticProps, etc.)
Page.canvas = (props) => (
  <>
    <Gradient />
  </>
)

export async function getStaticProps() {
  return { props: { title: 'Home' } }
}
