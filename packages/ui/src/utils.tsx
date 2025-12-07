import { RenderTarget } from 'framer'
import React, { useEffect } from 'react'

export const cx = (...classes: Array<string | false | null | undefined>) =>
  classes.filter(Boolean).join(' ')

export function useOnClickOutside<T extends HTMLElement>(
  ref: React.RefObject<T>,
  handler: (event: MouseEvent | TouchEvent) => void
) {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      // Do nothing if clicking ref's element or descendent elements
      if (!ref.current || ref.current.contains(event.target as Node)) {
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

export const isCanvas = (() => {
  try {
    return RenderTarget.current() !== RenderTarget.preview
  } catch {
    return false
  }
})()

// export const isDebug = true
export const isDebug = false

export const canvasProps = (pixelDensity: number, fov: number) => ({
  dpr: pixelDensity, //device pixel ratio - 1 default and fast, 2 detailed and slow
  // mode: 'concurrent' as 'legacy' | 'blocking' | 'concurrent',
  camera: { fov }, // could be replaced with zoom or distance?
  linear: true, //sRGBEncoding
  flat: true, //ACESFilmicToneMapping
  gl: { preserveDrawingBuffer: true }, // to capture the canvas (Figma Plugin)
})
