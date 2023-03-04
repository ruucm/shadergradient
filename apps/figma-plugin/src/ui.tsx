import * as React from 'react'
import useFramerMessage from 'framer-sites-figma-plugin'
import * as ReactDOM from 'react-dom'
import './ui.css'
import { useEffect, useRef } from 'react'

// const figmaPluginSite = 'https://shadergradient.framer.website/figma-plugin'
// const figmaPluginSite =
//   'https://shadergradient-staging.framer.website/figma-plugin'
const figmaPluginSite = 'https://shadergradient.co/figma-plugin'

const App = () => {
  useFramerMessage()
  return (
    <div>
      <iframe
        src={figmaPluginSite} // your framer sites url
        loading='lazy'
        style={{ width: '100%', height: '100%', border: 'none' }}
      ></iframe>
      <Corner />
    </div>
  )
}

// 소니 형이었군 https://gist.github.com/sonnylazuardi/e55300f28fbe109db052f6568fee5a04
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

ReactDOM.render(<App />, document.getElementById('react-page'))
