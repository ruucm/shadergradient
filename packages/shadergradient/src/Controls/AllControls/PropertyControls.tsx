import * as React from 'react'
import { motion } from 'framer-motion'

import { useQueryState } from '@/store'
import { cx } from '@/utils'
import {
  ColorControls,
  EffectControls,
  ShapeControls,
  ViewControls,
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
}) => {
  const [type] = useQueryState('type')
  // even if there is activeTab, queryState should be have value before return below controls
  if (!type) return null

  return (
    <motion.div
      className={cx(
        'bg-controls-panel-mobile text-primary hide-scrollbar relative mx-auto w-full overflow-y-scroll md:h-full'
      )}
      style={{
        originY: 1,
      }}
      animate={{
        height: 'fit-content',
        maxHeight: activeTab === 'none' ? 0 : 600,
        padding: activeTab === 'none' ? 0 : 20,
      }}
      transition={{ duration: 0.72 }}
    >
      {activeTab === 'shape' && <ShapeControls />}
      {activeTab === 'colors' && <ColorControls isFigma={isFigma} />}
      {activeTab === 'effects' && <EffectControls />}
      {activeTab === 'view' && <ViewControls />}
      {/* adding space to fix overlapping propertycontrol under bottom controltab */}
      {isMobile && <div style={{ height: 58 }} />}
    </motion.div>
  )
}
