import { useState } from 'react'

export function useContextLostFallback() {
  const [contextLost, setContextLost] = useState(-1)

  const handleContextEvents = (state) => {
    const renderer = state.gl.domElement

    const handleContextLost = (event) => {
      event.preventDefault()
      setContextLost(1)
      console.log('[Context Lost]')
    }

    const handleContextRestored = (event) => {
      setContextLost(0)
      console.log('[Context Restored]')
      // Additional reinitialization if needed
    }

    const handleContextError = (event) => {
      setContextLost(2)
      console.log('[Context Error]')
    }

    renderer.addEventListener('webglcontextlost', handleContextLost)
    renderer.addEventListener('webglcontextrestored', handleContextRestored)
    renderer.addEventListener('webglcontextcreationerror', handleContextError)

    return () => {
      renderer.removeEventListener('webglcontextlost', handleContextLost)
      renderer.removeEventListener(
        'webglcontextrestored',
        handleContextRestored
      )
      renderer.removeEventListener(
        'webglcontextcreationerror',
        handleContextError
      )
    }
  }

  return [contextLost, handleContextEvents]
}
