import React, { useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useCursorStore } from '../../store'

export function Cursor() {
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const cursorSize = 28
  const motionCursorSize = useMotionValue(28)

  const springConfig = { damping: 30, stiffness: 150, mass: 0.6 }

  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)
  const cursorSizeSpring = useSpring(motionCursorSize, springConfig)

  const hover = useCursorStore((state) => state.hover)

  let timer
  useEffect(() => {
    const moveCursor = (e) => {
      // @ts-ignore
      cursorX.set(e.clientX - motionCursorSize.current / 2)
      // @ts-ignore
      cursorY.set(e.clientY - motionCursorSize.current / 2)

      if (hover === 'default') {
        motionCursorSize.set(14)
      } else if (hover === 'button') {
        motionCursorSize.set(100)
      } else if (hover === 'arrowUp') {
        motionCursorSize.set(0)
      } else if (hover === 'arrowDown') {
        motionCursorSize.set(0)
      }

      clearTimeout(timer)
      timer = setTimeout(mouseStopped, 100)
    }

    const mouseStopped = () => {
      if (hover === 'default') {
        motionCursorSize.set(28)
      } else if (hover === 'button') {
        motionCursorSize.set(100)
      }
    }
    window.addEventListener('mousemove', moveCursor)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
    }
  }, [hover])

  return (
    <motion.div
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
        zIndex: 20,
        width: cursorSizeSpring,
        height: cursorSizeSpring,
        borderRadius: 100,
        mixBlendMode: 'difference',
        background: 'white',
        translateX: cursorXSpring,
        translateY: cursorYSpring,
        pointerEvents: 'none',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <motion.div
        style={{
          display: hover === 'arrowUp' ? 'flex' : 'none',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 60,
          textAlign: 'center',
          color: 'white',
        }}
        animate={{ scale: hover === 'arrowUp' ? 1 : 0 }}
        transition={{
          springConfig,
        }}
      >
        ☝
      </motion.div>
      <motion.div
        style={{
          display: hover === 'arrowDown' ? 'flex' : 'none',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 60,
          textAlign: 'center',
          color: 'white',
        }}
        animate={{ scale: hover === 'arrowDown' ? 1 : 0 }}
        transition={{
          springConfig,
        }}
      >
        ↓
      </motion.div>
    </motion.div>
  )
}

Cursor.defaultProps = {}
