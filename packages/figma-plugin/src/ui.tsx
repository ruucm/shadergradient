import * as React from 'react'
import { createRoot } from 'react-dom/client'
// import {
//   UI,
//   PRESETS,
//   LCanvas,
//   useUIStore,
//   GradientWithQueries,
// } from '../../dist'
// import '../../ui-styles-compiled.css'
// import { Controls } from './components/Controls'

// import { PRESETS } from 'shadergradient'
import { Test } from 'shadergradient/src/Test'
import 'shadergradient/src/tailwind-compiled.css'
import './global.css'

function Arrow(props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      focusable='false'
      viewBox='0 0 24 24'
      fill='currentColor'
      className='block cursor-pointer h-[16px]'
      {...props}
    >
      <path d='M11.67 3.87L9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z'></path>
    </svg>
  )
}

function App() {
  // const activePreset = useUIStore((state) => state.activePreset)
  // const setActivePreset = useUIStore((state) => state.setActivePreset)

  // console.log('PRESETS', PRESETS)

  console.log('Test', Test)

  return (
    <div className='bg-red-300 h-full'>
      hello figma~!
      <Test />
      {/* <LCanvas
        style={{ height: 304 }} // custom height (for figma screen)
        gl={{ preserveDrawingBuffer: true }} // to capture the canvas
        onCreated={() => void 0} // remove default onCreated method
      >
        <GradientWithQueries />
      </LCanvas>
      <div className='bg-controls-sub-panel text-white font-semibold text-sm flex justify-between items-center p-1'>
        <div className='flex justify-start gap-3 items-center'>
          <p style={{ marginLeft: 16 }}>Theme</p>
          <div className='bg-controls-sub-panel-button w-[150px] flex justify-between items-center p-1 rounded mx-2'>
            <Arrow
              onClick={() => {
                if (activePreset === 0) setActivePreset(PRESETS.length - 1)
                else setActivePreset(activePreset - 1)
              }}
            />
            {PRESETS[activePreset].title}
            <div className='rotate-180'>
              <Arrow
                onClick={() => {
                  if (activePreset === PRESETS.length - 1) setActivePreset(0)
                  else setActivePreset(activePreset + 1)
                }}
              />
            </div>
          </div>
        </div>
        <UI.ToolsBox darkMode={true} />
      </div>
      <Controls />
      <div className='flex gap-0.5 p-3 absolute w-full bottom-0 bg-white'>
        <UI.Button>Extract GIF</UI.Button>
        <UI.Button kind='secondary' onClick={insertCanvasAsImage}>
          Snapshot
        </UI.Button>
      </div> */}
    </div>
  )
}

const container = document.getElementById('react-page')
const root = createRoot(container)
root.render(<App />)

async function insertCanvasAsImage() {
  const bytes = await captureCanvas()
  parent.postMessage({ pluginMessage: { type: 'CANVAS_TO_IMAGE', bytes } }, '*')
}

async function captureCanvas() {
  return new Promise((resolve, reject) => {
    const image = new Image()

    const r3fCanvas = document.getElementById('gradientCanvas')
      .children[0] as HTMLCanvasElement

    const dataURL = r3fCanvas.toDataURL('image/png', 1.0) // full quality
    image.src = dataURL

    image.onload = async () => {
      const view: any = await imageToUint8Array(image)
      console.log(`${view.length} bytes`)
      resolve(view)
    }
  })
}

async function imageToUint8Array(image) {
  return new Promise((resolve, reject) => {
    // create a canvas for converto image to uint8array
    const canvas = document.createElement('canvas')
    const context = canvas.getContext('2d')

    context.canvas.width = image.width
    context.canvas.height = image.height
    context.drawImage(image, 0, 0)

    context.canvas.toBlob((blob) =>
      blob
        .arrayBuffer()
        .then((buffer) => resolve(new Uint8Array(buffer)))
        .catch(reject)
    )
  })
}
