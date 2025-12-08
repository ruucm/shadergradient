import { ControlType, RenderTarget } from 'framer'

import { useState, useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'

const currentTarget = RenderTarget.current()
const isOnCanvas = currentTarget === RenderTarget.canvas

export function TextAnimation({
  fontSize,
  color,
  content,
  delay = 100,
  width = null,
  yBefore = 20,
  fontFamily = '"Lora", serif',
  hiddenOpacity = 0,
}) {
  const textStyles = {
    textAlign: 'left' as const,
    fontSize: fontSize,
    color: color,
    fontWeight: 500,
    fontFamily: fontFamily,
    lineHeight: 1.2,
  }

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

  const ref = useRef(null)
  const inView = useInView(ref)
  const controls = useAnimation()
  const [activePresetInView, setActivePresetInView] = useState(false)

  useEffect(() => {
    if (inView) {
      controls.start('after')
    } else {
      controls.start('before')
    }
  }, [controls, inView])

  useEffect(() => {
    const timer = setTimeout(() => {
      setActivePresetInView(true)
    }, delay)

    return () => clearTimeout(timer)
  }, [delay])
  return (
    <motion.div
      style={{
        position: 'relative',
        wordBreak: 'break-word',
        width: width === 0 ? 'fit-content' : width,
      }}
    >
      <div
        style={{
          ...textStyles,
          opacity: hiddenOpacity,
          pointerEvents: 'none',
          userSelect: 'none',
          whiteSpace: 'nowrap',
          margin: 0,
        }}
      >
        {content}
      </div>
      <motion.h1
        variants={letterContainerVariants}
        ref={ref}
        initial={isOnCanvas ? 'after' : 'before'}
        animate={isOnCanvas ? 'after' : controls}
        aria-hidden
        style={{
          ...textStyles,
          position: 'absolute',
          inset: 0,
          margin: 0,
          width: '100%',
          pointerEvents: 'none',
          display: 'flex',
          alignItems: 'flex-start',
        }}
      >
        <div style={{ width: '100%' }}>
          {content.split(' ').map((word: string, wordI: number) => (
            <div
              key={`word-${word}-${wordI}`}
              style={{
                display: 'inline-flex',
              }}
            >
              {Array.from(word).map((letter, index) => (
                <motion.span
                  key={`${index}-${letter}`}
                  style={{
                    position: 'relative',
                    display: 'inline-block',
                    width: 'auto',
                    verticalAlign: 'top',
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
  )
}

TextAnimation.propertyControls = {
  width: { type: ControlType.Number, defaultValue: 300 },
  content: { type: ControlType.String, defaultValue: 'Hello World' },
  color: { type: ControlType.Color, defaultValue: '#ffffff' },
  fontSize: { type: ControlType.Number, defaultValue: 20 },
  fontFamily: { type: ControlType.String, defaultValue: 'Lora' },
  hiddenOpacity: { type: ControlType.Number, defaultValue: 0, min: 0, max: 1 },
}
