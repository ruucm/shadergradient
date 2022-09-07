import React from 'react'
import { motion, useAnimation } from 'framer-motion'
import { Framer, GitHub, Figma } from 'react-feather'
import { links } from '../../consts'
import { PRESETS } from '../../presets'
import { useUIStore, useCursorStore } from '../../store'
import styles from './Links.module.scss'

export function Links({ isMobile = false }) {
  const activePreset = useUIStore((state) => state.activePreset)
  const color = PRESETS[activePreset].color

  const iconSize = 30
  const mobileIconSize = 24
  const iconStrokeWidth = 1.5
  const keycolor = '#ff430A'

  const IconWrapper = ({ children, link, title }) => {
    const hoverTitle = useAnimation()
    return (
      <motion.div
        style={{
          backgroundColor: 'rgba(255,255,255,0)',
          width: 50,
          height: 50,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 25,
          cursor: 'pointer',
        }}
        onClick={() => {
          window.open(link)
        }}
        onMouseOver={() => {
          hoverTitle.start({
            opacity: 1,
          })
        }}
        onMouseLeave={() => {
          hoverTitle.start({ opacity: 0 })
          useCursorStore.setState({ hover: 'default' })
        }}
        onMouseMove={() => {
          useCursorStore.setState({ hover: 'button' })
        }}
      >
        {children}
        <motion.div
          style={{
            position: 'absolute',
            textAlign: 'center',
            marginTop: 65,
            fontSize: 12,
            color: 'white',
            borderRadius: 4,
          }}
          initial={{
            opacity: 0,
          }}
          animate={hoverTitle}
        >
          {title}
        </motion.div>
      </motion.div>
    )
  }

  const MobileIconWrapper = ({ children, link }) => {
    return (
      <motion.div
        onClick={() => {
          window.open(link)
        }}
        style={{
          cursor: 'pointer',
        }}
      >
        {children}
      </motion.div>
    )
  }
  return (
    <>
      {isMobile ? (
        <div className={styles.mobileIconWrapper}>
          <MobileIconWrapper link={links[2].link}>
            <Framer
              color={keycolor}
              size={mobileIconSize}
              strokeWidth={iconStrokeWidth}
            />
          </MobileIconWrapper>
          <MobileIconWrapper link={links[1].link}>
            <GitHub
              color={keycolor}
              size={mobileIconSize}
              strokeWidth={iconStrokeWidth}
            />
          </MobileIconWrapper>
          <MobileIconWrapper link={links[0].link}>
            <Figma
              color={keycolor}
              size={mobileIconSize}
              strokeWidth={iconStrokeWidth}
            />
          </MobileIconWrapper>
        </div>
      ) : (
        <div className={styles.LinksWrapper} style={{ color: color }}>
          <p style={{ textAlign: 'center' }}>Also available from</p>
          <div className={styles.iconWrapper}>
            <IconWrapper link={links[2].link} title='Framer'>
              <Framer
                color={color}
                size={iconSize}
                strokeWidth={iconStrokeWidth}
              />
            </IconWrapper>
            <IconWrapper link={links[1].link} title='Github'>
              <GitHub
                color={color}
                size={iconSize}
                strokeWidth={iconStrokeWidth}
              />
            </IconWrapper>
            <IconWrapper link={links[0].link} title='Figma'>
              <Figma
                color={color}
                size={iconSize}
                strokeWidth={iconStrokeWidth}
              />
            </IconWrapper>
          </div>
        </div>
      )}
    </>
  )
}
