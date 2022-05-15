import React from 'react'
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
  onLogoClick = () => void 0,
  onAboutClick = () => void 0,
}) {
  const activePreset = useUIStore((state: any) => state.activePreset)
  const color = mode !== 'full' ? '#FF430A' : PRESETS[activePreset].color

  return (
    <div className={styles.header}>
      {inAbout !== true && (
        <TextLogo
          color={color}
          size={isMobile === true ? 15 : 18}
          onClick={onLogoClick}
        />
      )}

      {aboutBtn && (
        <AboutBtn
          inAbout={inAbout}
          color={color}
          onClick={onAboutClick}
          isMobile={isMobile}
        />
      )}
    </div>
  )
}
