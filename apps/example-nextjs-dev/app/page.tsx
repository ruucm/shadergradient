'use client'

import { ShaderGradient } from 'shadergradient'

export default function Home() {
  return (
    <div className='w-screen h-screen'>
      <ShaderGradient
        type='plane'
        position={{ positionX: 0, positionY: 0, positionZ: 0 }}
        rotation={{ rotationX: 0, rotationY: 0, rotationZ: 0 }}
      />
    </div>
  )
}
