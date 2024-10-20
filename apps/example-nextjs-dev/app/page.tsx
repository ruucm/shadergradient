'use client'

import { ShaderGradientCanvas, ShaderGradient } from 'shadergradient'

export default function Home() {
  return (
    <>
      <div className='w-screen h-[50vh]'>
        <ShaderGradientCanvas>
          <ShaderGradient />
        </ShaderGradientCanvas>
      </div>
      <div className='w-screen h-[50vh]'>
        <ShaderGradientCanvas>
          <ShaderGradient type='plane' color1='#0D77E0' />
        </ShaderGradientCanvas>
      </div>
    </>
  )
}
