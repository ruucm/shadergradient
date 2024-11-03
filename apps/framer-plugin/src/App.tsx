import { framer, CanvasNode } from 'framer-plugin'
import { useState, useEffect } from 'react'
import './App.css'
import { ShaderGradient, ShaderGradientCanvas } from '@shadergradient/react'

framer.showUI({
  position: 'top right',
  width: 330,
  height: 510,
  // resizable: true,
})

const framerPluginURLOrigin = 'https://delicious-statuses-566068.framer.app'

function useSelection() {
  const [selection, setSelection] = useState<CanvasNode[]>([])

  useEffect(() => {
    return framer.subscribeToSelection(setSelection)
  }, [])

  return selection
}

const handleAddShaderGradient = async (controls) => {
  await framer.addComponentInstance({
    url: 'https://framer.com/m/ShaderGradientStaging-8Yhr.js',
    attributes: {
      controls: controls,
    },
  })
}

function handleMessage(event) {
  if (event.origin === framerPluginURLOrigin) {
    console.log(event)

    if (event.data.message === 'ADD_TO_CANVAS') {
      handleAddShaderGradient(event.data)
    }
  }
}
export function App() {
  const selection = useSelection()

  useEffect(() => {
    window.addEventListener('message', handleMessage, false)
  }, [])

  return (
    <main style={{ position: 'absolute', overflow: 'hidden' }}>
      <div>
        <iframe
          id='framer-plugin-site'
          src={framerPluginURLOrigin + '/framer-plugin'}
          style={{
            outline: 'none',
            border: 'none',
            width: 300,
            height: 600,
            overflow: 'hidden',
          }}
        />
      </div>
    </main>
  )
}
