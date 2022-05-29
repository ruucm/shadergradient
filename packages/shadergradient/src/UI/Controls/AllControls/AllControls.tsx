import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useOnClickOutside } from '../../../hooks/index'
import { useUIStore } from '../../../store'
import { PropertyControls } from '../../PropertyControls'
import { ToolsBox, ControlTypeTitles } from '../Tools/index'
import styles from './AllControls.module.scss'
import { HorizontalControl } from './HorizontalControl'

type Props = {
  // All other props
  [x: string]: any
}
export const AllControls: React.FC<Props> = ({ isMobile, isFigma = false }) => {
  const isWeb = !isMobile && !isFigma
  const [activeTab, setActiveTab] = useState(isWeb ? 'none' : 'shape')

  const mode = useUIStore((state: any) => state.mode)
  const setMode = useUIStore((state: any) => state.setMode)

  const ref = useRef(null)
  useOnClickOutside(ref, () => isWeb && setActiveTab('none'))

  const children = (
    <div
      style={{
        display: 'flex',
        flexDirection: isFigma === true ? 'column-reverse' : 'column',
      }}
    >
      <PropertyControls activeTab={activeTab} setActiveTab={setActiveTab} />
      <div
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          cursor: 'pointer',
        }}
        onClick={() => setActiveTab('shape')}
      >
        <ControlTypeTitles
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          isMobile={isMobile}
        />
        {isMobile === false && <ToolsBox darkMode={false} />}
      </div>
    </div>
  )

  return (
    <div ref={ref}>
      {isMobile === true ? (
        <div className={styles.controlMobile}>
          {!isFigma && (
            <motion.div className={styles.floating}>
              <motion.div
                className={styles.hideBtn}
                onClick={() => {
                  setActiveTab('none')
                }}
                animate={{
                  opacity: activeTab === 'none' ? 0 : 1,
                  marginTop: activeTab === 'none' ? '5px' : '-35px',
                  transition: { duration: 0.5 },
                }}
              >
                <div>
                  <p>✕</p>
                </div>
              </motion.div>
            </motion.div>
          )}
          {children}
        </div>
      ) : (
        <HorizontalControl
          mode={mode}
          setMode={setMode}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        >
          {children}
        </HorizontalControl>
      )}
    </div>
  )
}
