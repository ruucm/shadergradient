import * as React from 'react'
import { useUIStore, PRESETS } from 'shadergradient'
import { useSwipeable } from '../../../lib/react-swipeable'

export function MobileSwiper() {
  const activePreset = useUIStore((state) => state.activePreset)
  const setActivePreset = useUIStore((state) => state.setActivePreset)

  const handlers = useSwipeable({
    onSwipedUp: (e) => {
      if (activePreset !== 0) {
        setActivePreset(activePreset - 1)
      } else {
        setActivePreset(PRESETS.length - 1)
      }
    },
    onSwipedDown: (e) => {
      if (activePreset !== PRESETS.length - 1) {
        setActivePreset(activePreset + 1)
      } else {
        setActivePreset(0)
      }
    },
  })
  return (
    <div
      {...handlers}
      style={{
        width: '100%',
        height: '100%',
        position: 'fixed',
        bottom: 0,
        zIndex: 1,
      }}
    ></div>
  )
}
MobileSwiper.defaultProps = {}
