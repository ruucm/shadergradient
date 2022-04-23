import * as React from 'react'
import cx from 'classnames'
import { useAnimation, motion } from 'framer-motion'

export function MenuWrapper({
  mode = 'mobile',
  setMode = void 0,
  children,
  activeTab = 'none',
  setActiveTab = void 0,
  className = '',
}) {
  const menuAnim = useAnimation()

  React.useEffect(() => {
    if (activeTab === 'none') {
      menuAnim.start({
        top: '34px',
        right: '-470px',
        transition: { duration: 0.3 },
      })
    } else {
      menuAnim.start({
        right: '34px',
        transition: { duration: 0.3 },
      })
    }
  }, [activeTab])

  React.useEffect(() => {
    if (mode === 'about') {
      menuAnim.start({
        background: '#141414',
        transition: { duration: 0 },
      })
    } else {
      menuAnim.start({
        background: '#ffffff',
        transition: { duration: 0 },
      })
    }
  }, [mode])

  return (
    <motion.div
      className={cx('absolute z-10 overflow-hidden rounded-md grid', className)}
      style={{
        width: '600px',
        height: 'fit-content',
        gridTemplateColumns: '130px 370px',
        top: '34px',
        right: '-470px',

        boxShadow:
          mode === 'mobile' || mode === 'web'
            ? '-4px 4px 62px 0px rgba(0, 0, 0, 0.05)'
            : 'none',
        background: mode === 'about' ? '#141414' : 'white',
      }}
      initial={{ right: '-600px' }}
      transition={{ type: 'spring', damping: 12, stiffness: 200, delay: 2 }}
      animate={menuAnim}
    >
      {children}
    </motion.div>
  )
}

MenuWrapper.defaultProps = {}
