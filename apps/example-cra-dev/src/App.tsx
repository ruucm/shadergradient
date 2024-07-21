import {
  ShaderGradientCanvas,
  ShaderGradient,
  useThree,
  useFrame,
} from 'shadergradient'
import logo from './logo.svg'
import './App.css'
import { Button, TextAnimation } from 'ui'
import 'ui/styles.css'

function App() {
  return (
    <div className='App'>
      <ShaderGradientCanvas style={{ position: 'absolute' }}>
        <Gradient />
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
        <Button>Button Test</Button>

        <TextAnimation
          delay={0}
          color='#FF430A'
          fontSize={32}
          yBefore={50}
          content='Text Animation'
        />
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
