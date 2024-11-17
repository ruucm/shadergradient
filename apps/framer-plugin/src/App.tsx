import { framer } from 'framer-plugin'
import { useEffect } from 'react'
import './App.css'

framer.showUI({
  position: 'top right',
  width: 330,
  height: 446,
})

const framerPluginURLOrigin = 'https://amicable-interface-702205.framer.app' // shadergradient.co origin

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

function handleMessage(event: { origin: string; data: { message: string } }) {
  if (event.origin === framerPluginURLOrigin) {
    console.log(event)

    if (event.data.message === 'ADD_TO_CANVAS') {
      handleAddShaderGradient(event.data)
    }
  }
}
export function App() {
  useEffect(() => {
    window.addEventListener('message', handleMessage, false)
  }, [])

  return (
    <main>
      <iframe
        id='framer-plugin-site'
        src={framerPluginURLOrigin + '/framer-plugin'}
        style={{
          outline: 'none',
          border: 'none',
          width: 300,
          height: 446,
          overflow: 'hidden',
        }}
      />
    </main>
  )
}
