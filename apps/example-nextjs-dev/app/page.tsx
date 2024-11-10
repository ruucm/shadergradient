'use client'

import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react'

export default function Home() {
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
          <ShaderGradient type='plane' color1='#0D77E0' grain='off' />
        </ShaderGradientCanvas>
      </div>
    </div>
  )
}
