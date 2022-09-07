import * as React from 'react'
import cx from 'classnames'
import { motion } from 'framer-motion'
import { useQueryState } from '../hooks/index'
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
  const [type] = useQueryState('type')
  // even if there is activeTab, queryState should be have value before return below controls
  if (!type) return null

  return (
    <motion.div
      className={cx(
        'w-full overflow-y-scroll bg-controls-panel-mobile text-primary mx-auto md:h-full relative hide-scrollbar'
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
      {activeTab === 'colors' && <ColorControls />}
      {activeTab === 'effects' && <EffectControls />}
      {activeTab === 'view' && <ViewControls />}
    </motion.div>
  )
}
