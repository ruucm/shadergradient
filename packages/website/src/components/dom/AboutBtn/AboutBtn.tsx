import * as React from 'react'
import { motion } from 'framer-motion'
<<<<<<< Updated upstream:packages/website/src/components/dom/AboutBtn/AboutBtn.tsx
import Link from 'next/link'
import { useRouter } from 'next/router'

export function AboutBtn({ inAbout = false, color = 'white' }) {
  const router = useRouter()
=======
import { useUIStore } from '../../store'

export function AboutBtn({ inAbout = false, color = 'white', onClick }) {
  // const router = useRouter()
  const mode = useUIStore((state: any) => state.mode)
>>>>>>> Stashed changes:packages/shadergradient/src/UI/Header/AboutBtn.tsx

  return (
    <motion.div
      style={{
        cursor: 'pointer',
        color: mode !== 'full' ? '#ff430a' : color,
        position: 'absolute',
        right: 0,
        marginRight: '2vw',
        borderBottom: '1.5px solid transparent',
      }}
      whileHover={{
        borderBottom:
          mode !== 'full' ? '1.5px solid #ff430A' : '1.5px solid ' + color,
      }}
    >
      {inAbout === true ? (
        <div
          style={{ display: 'flex' }}
<<<<<<< Updated upstream:packages/website/src/components/dom/AboutBtn/AboutBtn.tsx
          onClick={() => {
            router.back()
          }}
=======
          // onClick={() => {
          //   router.back()
          // }}
>>>>>>> Stashed changes:packages/shadergradient/src/UI/Header/AboutBtn.tsx
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
