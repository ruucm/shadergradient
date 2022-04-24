import { useState, useEffect } from 'react'
import { motion, useAnimation, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const letterContainerVariants = {
  before: { transition: { staggerChildren: 0.015 } },
  after: { transition: { staggerChildren: 0.03 } },
}

const letterVariants = {
  before: {
    opacity: 0,
    y: 20,
    rotate: -10,
    transition: {
      type: 'spring',
      damping: 12,
      stiffness: 200,
    },
  },
  after: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: {
      type: 'spring',
      damping: 12,
      stiffness: 200,
    },
  },
}

export function TextAnimation({
  fontSize,
  color,
  referer = '',
  content,
  delay,
  width = null,
  font = null,
}) {
  //   const splitted = referer?.split('/') || []
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
            initial={'before'}
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
                      transition={{ duration: 0.5 }}
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
