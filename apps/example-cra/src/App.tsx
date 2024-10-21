import { ShaderGradientCanvas, ShaderGradient } from 'shadergradient'
import { useThree, useFrame } from '@react-three/fiber'
import logo from './logo.svg'
import './App.css'

function App() {
  return (
    <div className='App'>
      <ShaderGradientCanvas style={{ width: '100vw', height: '50vh' }}>
        <Gradient />
      </ShaderGradientCanvas>
      <div style={{ width: '100vw', height: '50vh' }}>
        <ShaderGradientCanvas>
          <ShaderGradient type='plane' />
        </ShaderGradientCanvas>
      </div>
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

function Gradient() {
  const { scene } = useThree()

  useFrame(() => {
    const mesh: any = scene.getObjectByName('shadergradient-mesh')

    if (mesh.material.userData.uNoiseStrength) {
      mesh.material.userData.uNoiseStrength.value = 10
    }
  })

  return (
    <ShaderGradient
      cDistance={32}
      cPolarAngle={125}
      color1='#ff5005'
      color2='#dbba95'
      color3='#d0bce1'
    />
  )
}

export default App
