import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { mainLoading } from '../../../src/consts'
import { PRESETS } from '../../presets'
import { useUIStore } from '../../store'
import { AboutBtn } from './AboutBtn'
import styles from './Header.module.scss'
import { TextLogo } from './TextLogo'

export function Header({
  mode = 'full',
  isMobile = false,
  inAbout = false,
  aboutBtn = false,
  loadingMotion = false,
  onLogoClick = () => void 0,
  onAboutClick = () => void 0,
  onBackClick = () => void 0,
}) {
  const activePreset = useUIStore((state: any) => state.activePreset)
  const color = mode !== 'full' ? '#FF430A' : PRESETS[activePreset].color
  const [loadingReady, setLoadingReady] = useState(false)

  useEffect(() => {
    if (loadingMotion === true) {
      setTimeout(() => {
        setLoadingReady(true)
      }, (mainLoading.end + 1) * 1000)
    }
  }, [])
  return (
    <motion.div
      className={styles.header}
      initial={{ top: loadingMotion === true ? '46%' : 0 }}
      animate={{
        top: 0,
      }}
      transition={{
        delay: mainLoading.end,
        duration: 0.4,
        type: 'spring',
        mass: 0.5,
      }}
    >
      {(inAbout !== true || isMobile === true) && (
        <TextLogo
          color={color}
          size={isMobile === true ? 15 : 18}
          onClick={onLogoClick}
          delay={loadingMotion === true ? 1.5 : 0}
        />
      )}

      {aboutBtn && loadingReady === true && (
        <AboutBtn
          inAbout={inAbout}
          color={color}
          onAboutClick={onAboutClick}
          onBackClick={onBackClick}
          isMobile={isMobile}
        />
      )}
    </motion.div>
  )
}
