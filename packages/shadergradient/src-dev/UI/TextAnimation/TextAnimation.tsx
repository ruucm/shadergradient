import React, { useState, useEffect } from 'react'
import { motion, useAnimation, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export function TextAnimation({
  fontSize,
  color,
  referer = '',
  content,
  delay,
  width = null,
  font = null,
  textCenter = false,
  yBefore = 20,
  isFramerCanvas = false,
}) {
  //   const splitted = referer?.split('/') || []

  const letterContainerVariants = {
    before: { transition: { staggerChildren: 0.015 } },
    after: { transition: { staggerChildren: 0.015 } },
  }

  const letterVariants = {
    before: {
      opacity: 0,
      y: yBefore,
      rotate: -15,
      scale: 0.4,
      transition: {
        type: 'spring',
        duration: 0.4,
        damping: 10,
        // stiffness: 200,
      },
    },
    after: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotate: 0,
      transition: {
        type: 'spring',
        duration: 0.4,
        damping: 10,
        // stiffness: 80,
      },
    },
  }

  const [ref, inView] = useInView()
  const controls = useAnimation()
  const [activePresetInView, setActivePresetInView] = useState(false)
  useEffect(() => {
    if (inView) {
      controls.start('after')
    } else {
      controls.start('before')
    }
  }, [controls, inView])

  setTimeout(() => {
    setActivePresetInView(true)
  }, delay)
  return (
    <AnimatePresence>
      {activePresetInView && (
        <motion.div
          style={{
            position: 'relative',
            wordBreak: 'break-word',
            width: width,
          }}
        >
          <motion.h1
            variants={letterContainerVariants}
            ref={ref}
            initial={isFramerCanvas ? 'after' : 'before'}
            animate={controls}
          >
            <div
              style={{ textAlign: 'left', fontSize: fontSize, color: color }}
            >
              {content.split(' ').map((word: string, wordI: number) => (
                <div
                  key={`word-${word}-${wordI}`}
                  style={{
                    display: 'inline-block',
                  }}
                >
                  {Array.from(word).map((letter, index) => (
                    <motion.span
                      key={`${index}-${letter}`}
                      style={{
                        position: 'relative',
                        display: 'inline-block',
                        width: 'auto',
                      }} // Position elements
                      variants={letterVariants}
                      // transition={{ duration: 0.5, ease: 'backInOut' }}
                    >
                      {letter === ' ' ? '\u00A0' : letter}
                    </motion.span>
                  ))}
                  {/* remove the last spacing */}
                  {wordI !== content.split(' ').length - 1 ? '\u00A0' : null}
                </div>
              ))}
            </div>
          </motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
