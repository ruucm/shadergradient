import * as React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/router'

export function AboutBtn({ inAbout = false, color = 'white' }) {
  const router = useRouter()

  return (
    <motion.div
      style={{
        cursor: 'pointer',
        color: color,
        position: 'absolute',
        right: 0,
        marginRight: '2vw',
        borderBottom: '1.5px solid transparent',
      }}
      whileHover={{
        borderBottom: '1.5px solid ' + color,
      }}
    >
      {inAbout === true ? (
        <div
          style={{ display: 'flex' }}
          onClick={() => {
            router.back()
          }}
        >
          <p style={{ transform: 'rotate(-135deg)' }}>↑</p>
          <p> back</p>
        </div>
      ) : (
        <Link href='/about'>
          <div style={{ display: 'flex' }}>
            <p>about </p>
            <p style={{ transform: 'rotate(45deg)' }}>↑</p>
          </div>
        </Link>
      )}
    </motion.div>
  )
}
