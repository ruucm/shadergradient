import * as React from 'react'
import cx from 'classnames'
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
    <div
      className={cx(
        'w-full h-[fit-content] overflow-y-scroll bg-controls-panel-mobile text-primary mx-auto p-3.5 md:h-full md:p-3.5 relative hide-scrollbar'
      )}
      style={{ display: activeTab === 'none' ? 'none' : 'block' }}
    >
      {activeTab === 'shape' && <ShapeControls />}
      {activeTab === 'colors' && <ColorControls />}
      {activeTab === 'effects' && <EffectControls />}
      {activeTab === 'view' && <ViewControls />}
    </div>
  )
}
