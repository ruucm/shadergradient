import React from 'react'
import { PRESETS } from '../../presets'
import { AboutBtn } from './AboutBtn'
import styles from './Header.module.scss'
import { TextLogo } from './TextLogo'

export function Header({
  mode,
  activePreset,
  isMobile = false,
  inAbout = false,
  aboutBtn = false,
  onLogoClick = () => void 0,
  onAboutClick = () => void 0,
}) {
  const color = mode !== 'full' ? '#FF430A' : PRESETS[activePreset].color

  return (
    <div className={styles.header}>
      <TextLogo
        color={color}
        size={isMobile === true ? 15 : 18}
        onClick={onLogoClick}
      />
      {aboutBtn && (
        <AboutBtn inAbout={inAbout} color={color} onClick={onAboutClick} />
      )}
    </div>
  )
}
