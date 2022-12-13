import * as React from 'react'
import { motion } from 'framer-motion'

export function LinkTo({
  scroll,
  figmaSection,
  framerSection,
  developerSection,
  shaderSection,
}) {
  const [current, setCurrent] = React.useState('')

  React.useEffect(() => {
    if (scroll > framerSection && scroll < figmaSection) {
      setCurrent('framer')
    } else if (scroll > figmaSection && scroll < developerSection) {
      setCurrent('figma')
    } else if (scroll > developerSection) {
      setCurrent('developer')
    } else {
      setCurrent('')
    }
  }, [scroll])

  return (
    <motion.div
      style={{
        display: 'flex',
        width: 'fit-content',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 50,
        right: 30,
        background: 'white',
        padding: '10px 20px',
        color: '#FF430A',
        cursor: 'pointer',
        fontWeight: 500,
        borderRadius: 10,
        userSelect: 'none',
      }}
      animate={{
        opacity: scroll > framerSection ? 1 : 0,
        y: scroll > framerSection ? 0 : 30,
      }}
      whileHover={{ scale: 1.03 }}
      onClick={() => {}}
    >
      <div>
        {current === 'framer'
          ? 'Copy Component'
          : current === 'figma'
          ? 'Figma Plugin'
          : current === 'developer'
          ? 'Code Sandbox'
          : ''}
      </div>
      <div style={{ transform: 'rotate(-45deg)' }}>→</div>
    </motion.div>
  )
}

LinkTo.defaultProps = {}
