import * as React from 'react'
import { motion } from 'framer-motion'
import { PRESETS } from '../../presets'
import { useUIStore } from '../../store'
import { TextAnimation } from '../../UI/index'
import styles from './PresetTitle.module.scss'

export function PresetTitle({
  color = '#FF430A',
  title = 'title',
  index = 0,
  fontSize = 120,
  isMobile = false,
  arrowOn = true,
}) {
  const activePreset = useUIStore((state) => state.activePreset)
  const setActivePreset = useUIStore((state) => state.setActivePreset)

  return (
    <div className={styles.presetWrapper}>
      <div
        className={styles.presetTitle}
        style={{
          display: index === activePreset ? 'flex' : 'none',
          gap: 25,
          flexDirection: isMobile === true ? 'column' : 'row',
        }}
      >
        <TextAnimation
          delay={0}
          font='"Lora", serif'
          color={color}
          fontSize={fontSize}
          //default 120, for mobile title 80, for customize 50
          content={isMobile === true ? title.substring(3) : title}
        />
        <div
          className={styles.slideBtns}
          style={{
            color: color,
            fontSize: isMobile === true ? 22 : 30,
            display: arrowOn === false ? 'none' : 'flex',
            // transform: isMobile === true ? 'rotate(90deg)' : null,
          }}
        >
          <motion.div
            className={styles.slideBtn}
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{
              backgroundColor: 'rgba(255,255,255,0.15)',
            }}
            onClick={() => {
              if (activePreset !== 0) {
                setActivePreset(activePreset - 1)
              } else {
                setActivePreset(PRESETS.length - 1)
              }
            }}
            style={{ width: isMobile ? 35 : 40, height: isMobile ? 35 : 40 }}
          >
            ↓
          </motion.div>
          <motion.div
            className={styles.slideBtn}
            whileHover={{
              backgroundColor: 'rgba(255,255,255,0.15)',
            }}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            onClick={() => {
              if (activePreset !== PRESETS.length - 1) {
                setActivePreset(activePreset + 1)
              } else {
                setActivePreset(0)
              }
            }}
            style={{
              width: isMobile === true ? 35 : 40,
              height: isMobile === true ? 35 : 40,
            }}
          >
            ↑
          </motion.div>
        </div>
      </div>
    </div>
  )
}
