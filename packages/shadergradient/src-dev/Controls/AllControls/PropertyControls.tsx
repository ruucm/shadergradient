import * as React from 'react'
import { motion } from 'framer-motion'

import { useQueryState } from '@/store'
import { cx } from '@/utils'
import {
  ColorControls,
  MotionControls,
  ShapeControls,
  ViewControls,
  GIFControls,
} from '../index'

type Props = {
  // All other props
  [x: string]: any
}

export const PropertyControls: React.FC<Props> = ({
  // isMobile,
  activeTab,
  setActiveTab,
  isFigma,
  isMobile,
  isGIF,
}) => {
  const [type] = useQueryState('type')
  // even if there is activeTab, queryState should be have value before return below controls
  if (!type) return null

  return (
    <motion.div
      className={cx(
        'w-full bg-controls-panel-mobile text-primary mx-auto relative hide-scrollbar h-fit'
      )}
      style={{
        originY: 1,
      }}
      animate={{
        padding: activeTab === 'none' ? 0 : 20,
        overflow: activeTab === 'none' ? 'hidden' : 'visible',
        borderRadius: isMobile === true ? 0 : '4px 4px 0 0',
        marginBottom: isMobile === true && isFigma === false ? 56 : 0, // make space for the overlapping horizontal control bar
      }}
      transition={{
        duration: 0.72,
        padding: { duration: 0 },
        overflow: { delay: activeTab !== 'none' ? 0.72 : 0 },
      }}
    >
      {activeTab === 'shape' && isGIF === false && <ShapeControls />}
      {activeTab === 'colors' && isGIF === false && (
        <ColorControls isFigma={isFigma} />
      )}
      {activeTab === 'motion' && isGIF === false && <MotionControls />}
      {activeTab === 'view' && isGIF === false && <ViewControls />}
      {isGIF === true && <GIFControls />}
    </motion.div>
  )
}
