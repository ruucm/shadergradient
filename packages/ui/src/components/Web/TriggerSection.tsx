import { isDebug } from '@/utils'
import { ControlType } from 'framer'
import { useState, useEffect } from 'react'

/**
 * @framerSupportedLayoutWidth any
 * @framerSupportedLayoutHeight any
 */
export function TriggerSection({ width, height, title }) {
  const [isVisible, setIsVisible] = useState(isDebug)

  useEffect(() => {
    const handleKeyDown = (event) => {
      // Check for Command+Shift+D (Mac)
      if (event.metaKey && event.shiftKey && event.key === 'd') {
        setIsVisible((prevState) => !prevState)
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <div
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        opacity: isVisible ? 1 : 0,
        background: 'rgba(255, 168, 168, .8)',
        color: 'red',
        boxShadow: 'inset 0px 0px 0px 2px red',
        fontSize: 8,
        fontFamily: 'Inter',
      }}
    >
      {title}
    </div>
  )
}

TriggerSection.propertyControls = {
  title: {
    type: ControlType.String,
    defaultValue: 'title',
  },
}
