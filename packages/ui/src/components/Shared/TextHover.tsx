import { motion } from 'framer-motion'

const letterContainerVariants = {
  initial: { transition: { staggerChildren: 0.015 } },
  default: { transition: { staggerChildren: 0.015 } },
  hover: { transition: { staggerChildren: 0.03 } },
}

const letterVariants = {
  initial: {
    opacity: 0,
    y: 60,
    rotate: 0,
    transition: {
      type: 'spring',
      damping: 12,
      stiffness: 200,
    },
  },
  default: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: {
      type: 'spring',
      damping: 20,
      stiffness: 200,
    },
  },
  hover: {
    opacity: 1,
    y: -4,
    rotate: 0,
    transition: {
      type: 'spring',
      damping: 12,
      stiffness: 200,
    },
  },
}

export function TextHover({
  fontSize,
  color,
  content,
  delay = 0,
  width = null,
  font = null,
  border = false,
  fontWeight = 400,
  isFramerCanvas = false,
}) {
  return (
    <motion.div
      style={{
        position: 'relative',
        wordBreak: 'break-word',
        maxWidth: width === 0 ? 'fit-content' : width,
        width: 'fit-content',
        height: 'fit-content',
        fontFamily: '"' + font + '", san-serif',
        display: 'flex',
        flexDirection: 'column',
        color: color,
        whiteSpace: 'nowrap',
        userSelect: 'none',
      }}
    >
      <motion.h1
        variants={letterContainerVariants}
        initial={isFramerCanvas ? 'default' : 'initial'}
        whileInView={'default'}
        whileHover={'hover'}
        style={{
          fontWeight: fontWeight,
          margin: 0,
          width: 'fit-content',
          userSelect: 'none',
        }}
        transition={{ delay: delay }}
      >
        <div
          style={{
            textAlign: 'left',
            fontSize: fontSize,
            color: color,
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            height: 'fit-content',
          }}
        >
          {content.split(' ').map((word, wordI) => (
            <div
              key={`word-${word}-${wordI}`}
              style={{
                height: 'fit-content',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              {Array.from(word).map((letter, index) => (
                <motion.div
                  key={`${index}-${letter}`}
                  style={{
                    width: 'fit-content',
                    height: 'fit-content',
                    overflow: 'hidden',
                    position: 'relative',
                    display: 'inline-block',
                  }}
                >
                  <motion.span
                    variants={letterVariants}
                    transition={{ duration: 0.5 }}
                    style={{
                      position: 'relative',
                      display: 'inline-block',
                    }} // Position elements
                  >
                    {/* @ts-ignore */}
                    {letter === ' ' ? '\u00A0' : letter}
                  </motion.span>
                </motion.div>
              ))}
              {/* remove the last spacing */}
              {wordI !== content.split(' ').length - 1 ? '\u00A0' : null}
            </div>
          ))}
        </div>
        {/* border */}
        {border && (
          <motion.div
            style={{ background: color, height: 2, marginTop: 3 }}
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ delay: delay + 0.5 }}
          />
        )}
      </motion.h1>
    </motion.div>
  )
}
