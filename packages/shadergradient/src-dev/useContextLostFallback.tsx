import { useState } from 'react'

export function useContextLostFallback() {
  const [contextLost, setContextLost] = useState(-1)

  const handleContextEvents = (state) => {
    const renderer = state.gl.domElement

    const handleContextLost = (event) => {
      event.preventDefault()
      setContextLost(1)
      console.log('[Context Lost]')
      const canvas = event.srcElement
      console.log('canvas', canvas)

      // const gl = canvas.getContext('webgl')
      // console.log('gl', gl)
      //   const ext = gl.getExtension('WEBGL_lose_context')
      //   console.log('ext', ext)
    }

    const handleContextRestored = (event) => {
      setContextLost(0)
      console.log('[Context Restored]')
      const canvas = event.srcElement
      console.log('canvas (restored)', canvas)
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
