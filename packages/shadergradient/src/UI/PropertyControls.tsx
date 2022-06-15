import * as React from 'react'
import cx from 'classnames'
import { motion } from 'framer-motion'
import {
  ShapeControls,
  ColorControls,
  EffectControls,
  ViewControls,
} from '../UI/index'

type Props = {
  // All other props
  [x: string]: any
}

export const PropertyControls: React.FC<Props> = ({
  // isMobile,
  activeTab,
  setActiveTab,
}) => {
  return (
    <motion.div
      className={cx(
        'w-full h-[fit-content] overflow-y-scroll bg-controls-panel-mobile text-primary mx-auto md:h-full relative'
      )}
      style={{
        // display: activeTab === 'none' ? 'none' : 'block',
        originY: 1,
      }}
      animate={{
        height: activeTab === 'none' ? 0 : 'fit-content',
        padding: activeTab === 'none' ? 0 : 20,
      }}
    >
      {activeTab === 'shape' && <ShapeControls />}
      {activeTab === 'colors' && <ColorControls />}
      {activeTab === 'effects' && <EffectControls />}
      {activeTab === 'view' && <ViewControls />}
    </motion.div>
  )
}
