import { useState } from 'react'

export function useContextLostFallback() {
  const [contextLost, setContextLost] = useState(-1)

  const handleContextEvents = (state) => {
    const renderer = state.gl.domElement

    const handleContextLost = (event) => {
      event.preventDefault()
      setContextLost(1)
      console.log('[Context Lost]')
      //   console.log('renderer', renderer)

      //   const gl = renderer.getContext('webgl')

      //   console.log('gl', gl)

      //   const ext = gl.getExtension('WEBGL_lose_context')
      //   console.log('ext', ext)
    }

    const handleContextRestored = () => {
      setContextLost(0)
      console.log('[Context Restored]')
      // Additional reinitialization if needed
    }

    renderer.addEventListener('webglcontextlost', handleContextLost)
    renderer.addEventListener('webglcontextrestored', handleContextRestored)

    return () => {
      renderer.removeEventListener('webglcontextlost', handleContextLost)
      renderer.removeEventListener(
        'webglcontextrestored',
        handleContextRestored
      )
    }
  }

  return [contextLost, handleContextEvents]
}
