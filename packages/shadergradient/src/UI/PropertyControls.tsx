import * as React from 'react'
import cx from 'classnames'
import {
  ShapeControls,
  ColorControls,
  EffectControls,
  ViewControls,
  BackgroundControls,
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
    <div
      className={cx(
        'w-full h-[fit-content] overflow-y-scroll bg-controls-panel-mobile text-primary mx-auto p-3.5 md:bg-controls-panel md:h-full md:p-3.5 relative'
      )}
    >
      {activeTab === 'shape' && <ShapeControls />}
      {activeTab === 'colors' && <ColorControls />}
      {activeTab === 'effects' && <EffectControls />}
      {activeTab === 'view' && <ViewControls />}
      {activeTab === 'background' && <BackgroundControls />}
    </div>
  )
}
