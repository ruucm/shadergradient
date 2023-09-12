import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ToolsBox, ControlTypeTitles } from '../Tools/index'
import styles from './AllControls.module.scss'
import { HorizontalControl } from './HorizontalControl'
import { PropertyControls } from './PropertyControls'
import { useUIStore, useCursorStore } from '@/store'
import { cx } from '@/utils'

type Props = {
  // All other props
  [x: string]: any
}
export const AllControls: React.FC<Props> = ({
  isMobile,
  isFigma = false,
  isGIF = false,
}) => {
  const isWeb = !isMobile && !isFigma
  const [activeTab, setActiveTab] = useState(isWeb ? 'none' : 'shape')

  const mode = useUIStore((state: any) => state.mode)
  const setMode = useUIStore((state: any) => state.setMode)

  const children = (
    <div
      style={{
        display: 'flex',
        flexDirection: isFigma === true ? 'column-reverse' : 'column',
        justifyContent: 'flex-end',
      }}
      onMouseMove={() => {
        useCursorStore.setState({ hover: 'control' })
      }}
      onMouseLeave={() => {
        useCursorStore.setState({ hover: 'default' })
      }}
    >
      <PropertyControls
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isFigma={isFigma}
        isMobile={isMobile}
        isGIF={isGIF}
      />
      <div
        style={{
          width: '100%',
          display: isGIF === true ? 'none' : 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          cursor: 'pointer',
          height: 58,
        }}
        className={cx(
          isFigma && 'sticky top-0',
          isMobile && 'absolute z-allControl'
        )}
        // onClick={() => setActiveTab('shape')}
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
    <div>
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
