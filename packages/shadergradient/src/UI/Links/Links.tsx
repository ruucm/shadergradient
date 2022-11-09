import React from 'react'
import { motion, useAnimation } from 'framer-motion'
import { Framer, Figma } from 'react-feather'
import { links } from '../../consts'
import { PRESETS } from '../../presets'
import { useUIStore, useCursorStore } from '../../store'
import styles from './Links.module.scss'

export function Links({ isMobile = false }) {
  const activePreset = useUIStore((state) => state.activePreset)
  const color = PRESETS[activePreset].color

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

  return (
    <div className={styles.linksWrapper} style={{ color: color }}>
      <p style={{ textAlign: 'center' }}>Also available from</p>
      <div className={styles.iconWrapper}>
        <IconWrapper link={links[2].link} title='Framer'>
          <Framer color={color} size={iconSize} strokeWidth={iconStrokeWidth} />
        </IconWrapper>
        <IconWrapper link={links[0].link} title='Figma'>
          <Figma color={color} size={iconSize} strokeWidth={iconStrokeWidth} />
        </IconWrapper>
        <IconWrapper link={links[1].link} title='React'>
          <svg xmlns='http://www.w3.org/2000/svg' width='30' height='30'>
            <path
              d='M 6.072 8.844 L 1 15.844 L 6.072 22.844'
              fill='transparent'
              stroke-width={2}
              stroke={color}
              stroke-linecap='round'
              stroke-linejoin='round'
            ></path>
            <path
              d='M 5.072 0 L 0 7 L 5.072 14'
              transform='translate(23.928 8.504) rotate(180 2.536 7)'
              fill='transparent'
              stroke-width={2}
              stroke={color}
              stroke-linecap='round'
              stroke-linejoin='round'
            ></path>
            <path
              d='M 18.043 6.5 L 11.957 24.5'
              fill='transparent'
              stroke-width={2}
              stroke={color}
              stroke-linecap='round'
              stroke-linejoin='round'
            ></path>
          </svg>
          {/* <GitHub
                color={color}
                size={iconSize}
                strokeWidth={iconStrokeWidth}
              /> */}
        </IconWrapper>
      </div>
    </div>
  )
}
