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
