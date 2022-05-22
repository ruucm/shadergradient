import * as React from 'react'
import useFramerMessage from 'framer-sites-figma-plugin'
import * as ReactDOM from 'react-dom'
import './ui.css'

const App = () => {
  useFramerMessage()
  return (
    <iframe
      src='https://www.shadergradient.com/figma-plugin' // your framer sites url
      loading='lazy'
      style={{ width: '100%', height: '100%', border: 'none' }}
    ></iframe>
  )
}

ReactDOM.render(<App />, document.getElementById('react-page'))
