'use client'

import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react'
import { useState } from 'react'

export default function Home() {
  const [color1, setColor1] = useState('#0D77E0')

  return (
    <div className='flex'>
      <div className='flex-1 h-screen'>
        <ShaderGradientCanvas>
          <ShaderGradient
            cAzimuthAngle={0}
            cPolarAngle={0}
            rotationX={0}
            rotationY={0}
            rotationZ={0}
          />
        </ShaderGradientCanvas>
      </div>
      <div className='flex-1 h-screen'>
        <ShaderGradientCanvas>
          <ShaderGradient type='plane' color1={color1} grain='off' />
        </ShaderGradientCanvas>
        <button
          onClick={() => setColor1('#FF5005')}
          className='fixed bottom-5 right-5 z-20'
        >
          Change Color
        </button>
      </div>
    </div>
  )
}
