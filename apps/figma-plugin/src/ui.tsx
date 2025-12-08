import * as React from 'react'
import * as ReactDOM from 'react-dom'
import './ui.css'
import { useEffect, useRef } from 'react'

// const figmaPluginSite =
// 'https://violet-reservation-285715.framer.app/figma-plugin' // dev
// const figmaPluginSite =
// 'https://thriving-instance-690163.framer.app/figma-plugin' // staging
// const figmaPluginSite =
//   'https://thriving-instance-690163-108354a58.framer.app/figma-plugin' // 108354a58
// const figmaPluginSite = 'https://shadergradient.co/figma-plugin'
const figmaPluginSite = 'https://shadergradient.co/figma-plugin' // new figma plugin test

const App = () => {
  useShareMessages()

  return (
    <div>
      <iframe
        id='framer-site'
        src={figmaPluginSite} // your framer sites url
        loading='lazy'
        style={{ width: '100%', height: '100%', border: 'none' }}
      ></iframe>
      {/* @ts-ignore */}
      <Corner />
    </div>
  )
}

// https://gist.github.com/sonnylazuardi/e55300f28fbe109db052f6568fee5a04
function resizeWindow(e) {
  const size = {
    w: Math.max(50, Math.floor(e.clientX + 5)),
    h: Math.max(50, Math.floor(e.clientY + 5)),
  }
  parent.postMessage({ pluginMessage: { type: 'resize', size: size } }, '*')
}

function Corner() {
  // get ref of corner
  const ref = useRef(null)

  useEffect(() => {
    const corner = ref.current
    if (corner) {
      corner.onpointerdown = (e) => {
        corner.onpointermove = resizeWindow
        corner.setPointerCapture(e.pointerId)
      }
      corner.onpointerup = (e) => {
        corner.onpointermove = null
        corner.releasePointerCapture(e.pointerId)
      }
    }
  }, [ref.current])

  return (
    <div
      ref={ref}
      style={{
        position: 'absolute',
        right: 1,
        bottom: 2,
        cursor: 'nwse-resize',
        width: 10,
        height: 10,
      }}
    ></div>
  )
}

function useShareMessages() {
  useEffect(() => {
    const iframe: any = document.getElementById('framer-site')

    window.addEventListener(
      'message',
      (event) => {
        parent.postMessage(event.data, '*') // useFramerMessage()

        iframe.contentWindow.postMessage(event.data, '*') // Send message to child iframe
      },
      false
    )
  }, [])
}

// @ts-ignore
ReactDOM.render(<App />, document.getElementById('react-page'))
