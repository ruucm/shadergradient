import React, { useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useCursorStore } from '../../../helpers/cursorStore'

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
      cursorX.set(e.clientX - cursorSize / 2)
      cursorY.set(e.clientY - cursorSize / 2)
      motionCursorSize.set(14)

      clearTimeout(timer)
      timer = setTimeout(mouseStopped, 100)
    }
    const mouseStopped = () => {
      motionCursorSize.set(28)
    }
    window.addEventListener('mousemove', moveCursor)
    return () => {
      window.removeEventListener('mousemove', moveCursor)
    }
  }, [])

  useEffect(() => {
    console.log(hover)

    // if (hover === 'default') {
    //   motionCursorSize.set(28)
    // } else if (hover === 'button') {
    //   motionCursorSize.set(100)
    // }
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
        // translateX: cursorXY.x,
        // translateY: cursorXY.y,
      }}
    ></motion.div>
  )
}

Cursor.defaultProps = {}
