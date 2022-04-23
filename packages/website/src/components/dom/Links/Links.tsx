import * as React from 'react'
import { motion, useAnimation } from 'framer-motion'
import { Framer, GitHub, Figma } from 'react-feather'
import styles from './Links.module.scss'
import { links } from '@/consts'

export function Links({ color }) {
  const iconSize = 30
  const iconStrokeWidth = 1.5

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
        whileHover={{
          backgroundColor: 'rgba(255,255,255,0.2)',
        }}
        onClick={() => {
          window.open(link)
        }}
        onMouseEnter={() => {
          hoverTitle.start({
            opacity: 1,
            y: 0,
          })
        }}
        onMouseLeave={() => {
          hoverTitle.start({ opacity: 0, y: -6 })
        }}
      >
        {children}
        <motion.div
          style={{
            position: 'absolute',
            textAlign: 'center',
            marginTop: 80,
            fontSize: 12,
            color: 'white',
            padding: 8,
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
  return (
    <div className={styles.LinksWrapper} style={{ color: color }}>
      <p>Also available from</p>
      <div className={styles.iconWrapper}>
        <IconWrapper link={links[2].link} title='Framer'>
          <Framer color={color} size={iconSize} strokeWidth={iconStrokeWidth} />
        </IconWrapper>
        <IconWrapper link={links[2].link} title='Github'>
          <GitHub color={color} size={iconSize} strokeWidth={iconStrokeWidth} />
        </IconWrapper>
        <IconWrapper link={links[0].link} title='Figma'>
          <Figma color={color} size={iconSize} strokeWidth={iconStrokeWidth} />
        </IconWrapper>
      </div>
    </div>
  )
}
