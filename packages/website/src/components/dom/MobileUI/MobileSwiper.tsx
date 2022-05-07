import * as React from 'react'
import { useSwipeable } from 'react-swipeable'
import { useUIStore } from 'shadergradient'

export function MobileSwiper() {
  const activePreset = useUIStore((state) => state.activePreset)
  const setActivePreset = useUIStore((state) => state.setActivePreset)

  const handlers = useSwipeable({
    // eslint-disable-next-line no-console
    onSwiped: (eventData) => console.log('User Swiped!', eventData),
    onSwipedUp: (e) => {
      setActivePreset(activePreset - 1)
    },
    onSwipedDown: (e) => {
      setActivePreset(activePreset + 1)
    },
  })
  return (
    <div
      {...handlers}
      style={{
        width: '100%',
        height: '100%',
        position: 'fixed',
        zIndex: 1,
      }}
    ></div>
  )
}
MobileSwiper.defaultProps = {}
