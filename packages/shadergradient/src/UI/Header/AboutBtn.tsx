import React from 'react'
import { motion } from 'framer-motion'
// import Link from 'next/link'
// import router from 'next/router'
import { Info, ArrowDownLeft } from 'react-feather'
import { useUIStore } from '../../store'
import { TextHover } from '../TextAnimation/index'

export function AboutBtn({
  inAbout = false,
  color = 'white',
  onAboutClick,
  onBackClick,
  isMobile,
}) {
  const mode = useUIStore((state: any) => state.mode)

  return (
    <motion.div
      style={{
        cursor: 'pointer',
        color: mode !== 'full' ? '#ff430a' : color,
        position: 'absolute',
        right: 0,
        marginRight: isMobile === true ? '4vw' : '2vw',
        borderBottom: '1.5px solid transparent',
      }}
      // whileHover={{
      //   borderBottom:
      //     mode !== 'full' ? '1.5px solid #ff430A' : '1.5px solid ' + color,
      // }}
    >
      {inAbout === true ? (
        <div style={{ display: 'flex' }} onClick={onBackClick}>
          {isMobile === true ? (
            <ArrowDownLeft color='#ff430A' />
          ) : (
            <>
              <p style={{ transform: 'rotate(-135deg)' }}>↑</p>
              <p> back</p>
            </>
          )}
        </div>
      ) : (
        <div style={{ display: 'flex' }} onClick={onAboutClick}>
          {isMobile === true ? (
            <Info color={color} />
          ) : (
            <>
              <TextHover
                content={'about'}
                fontSize={14}
                border={false}
                color={color}
              ></TextHover>
              {/* <p>about </p>
              <p style={{ transform: 'rotate(45deg)', marginLeft: 3 }}>↑</p> */}
            </>
          )}
        </div>
      )}
    </motion.div>
  )
}
