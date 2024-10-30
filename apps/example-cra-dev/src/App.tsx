import { ShaderGradient, ShaderGradientCanvas } from '@shadergradient/react'

function App() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ShaderGradientCanvas>
        <ShaderGradient
          cDistance={24}
          color1='#ff5005'
          color2='#dbba95'
          color3='#d0bce1'
        />
      </ShaderGradientCanvas>
    </div>
  )
}

export default App
