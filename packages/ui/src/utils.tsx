import { RenderTarget, addPropertyControls, ControlType } from 'framer'
import React, { useState, useEffect } from 'react'

export const cx = (...classes) => classes.filter((a) => !!a).join(' ')

export function useOnClickOutside(ref: any, handler: any) {
  useEffect(() => {
    const listener = (event: any) => {
      // Do nothing if clicking ref's element or descendent elements
      if (!ref.current || ref.current.contains(event.target)) {
        return
      }

      handler(event)
    }

    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener)

    return () => {
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchstart', listener)
    }
  }, [ref, handler])
}

export const isCanvas = RenderTarget.current() !== RenderTarget.preview

// export const isDebug = true
export const isDebug = false

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

addPropertyControls(TriggerSection, {
  title: {
    type: ControlType.String,
    defaultValue: 'title',
  },
})
