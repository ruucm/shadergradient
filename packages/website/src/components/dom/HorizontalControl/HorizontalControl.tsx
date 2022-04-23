import * as React from 'react'
import cx from 'classnames'
import { useAnimation, motion } from 'framer-motion'

export function HorizontalControl({
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
        height: 58,
        transition: { duration: 0.3 },
      })
    } else {
      menuAnim.start({
        height: 'fit-content',
        transition: { duration: 0.3 },
      })
    }
  }, [activeTab])

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      style={{
        width: '100vw',
        height: 'fit-content',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        zIndex: 2,
        bottom: 30,
      }}
    >
      <motion.div
        className={cx('z-10 overflow-hidden rounded-sm', className)}
        style={{
          width: '580px',
          display: 'flex',
          flexDirection: 'column',
          boxShadow:
            mode === 'mobile' || mode === 'web'
              ? '0px 0px 20px 0px rgba(0, 0, 0, 0.1)'
              : 'none',
          background: mode === 'about' ? '#141414' : 'white',
        }}
        transition={{ type: 'spring', damping: 12, stiffness: 200, delay: 2 }}
        animate={menuAnim}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}

HorizontalControl.defaultProps = {}
