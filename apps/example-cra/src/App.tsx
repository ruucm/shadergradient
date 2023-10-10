import { ShaderGradientCanvas, ShaderGradient } from 'shadergradient'
import logo from './logo.svg'
import './App.css'

function App() {
  return (
    <div className='App'>
      <ShaderGradientCanvas style={{ position: 'absolute' }}>
        <ShaderGradient
          cDistance={32}
          cPolarAngle={125}
          color1='#ff5005'
          color2='#dbba95'
          color3='#d0bce1'
        />
      </ShaderGradientCanvas>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
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
