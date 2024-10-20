import { ShaderGradient } from 'shadergradient'
import logo from './logo.svg'
import './App.css'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <ShaderGradient
          type='plane'
          position={{ positionX: 0, positionY: 0, positionZ: 0 }}
          rotation={{ rotationX: 0, rotationY: 0, rotationZ: 0 }}
        />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
