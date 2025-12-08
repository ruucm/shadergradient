import { framer } from 'framer-plugin'
import { useEffect } from 'react'
import './App.css'

framer.showUI({
  position: 'top right',
  width: 330,
  height: 446,
})

const framerPluginURLOrigin = 'https://shadergradient.co' // shadergradient.co origin

const handleAddShaderGradient = async (controls: { message: string }) => {
  await framer.addComponentInstance({
    // url: 'https://framer.com/m/ShaderGradientStaging-8Yhr.js', //staging
    url: 'https://framer.com/m/ShaderGradient-oWuS.js', // upgraded shadergradient
    attributes: {
      width: '900px',
      height: '600px',
      controls: {
        ...controls,
        zoomOut: false,
        toggleAxis: false,
        range: 'disabled',
      },
    },
  })
}

export function App() {
  function handleMessage(event: { origin: string; data: { message: string } }) {
    if (event.origin === framerPluginURLOrigin) {
      console.log(event)

      if (event.data.message === 'ADD_TO_CANVAS') {
        handleAddShaderGradient(event.data)
      }
    }
  }

  useEffect(() => {
    window.addEventListener('message', handleMessage, false)
  }, [])

  return (
    <main>
      <iframe
        id='light-iframe'
        src={framerPluginURLOrigin + '/framer-plugin'}
        style={{
          outline: 'none',
          border: 'none',
          width: 300,
          height: 446,
          overflow: 'hidden',
          position: 'absolute',
        }}
      />
      <iframe
        id='dark-iframe'
        src={framerPluginURLOrigin + '/framer-plugin-dark'}
        style={{
          outline: 'none',
          border: 'none',
          width: 300,
          height: 446,
          overflow: 'hidden',
          position: 'absolute',
        }}
      />
    </main>
  )
}
