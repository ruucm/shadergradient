import { useState } from 'react'

export function useContextLostFallback() {
  const [contextLost, setContextLost] = useState(false)

  const handleContextEvents = (state) => {
    const renderer = state.gl.domElement

    const handleContextLost = (event) => {
      event.preventDefault()
      setContextLost(true)
      console.log('[Context Lost.]')
      //   console.log('renderer', renderer)

      //   const gl = renderer.getContext('webgl')

      //   console.log('gl', gl)

      //   const ext = gl.getExtension('WEBGL_lose_context')
      //   console.log('ext', ext)
    }

    const handleContextRestored = () => {
      setContextLost(false)
      console.log('[Context Restored.]')
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
