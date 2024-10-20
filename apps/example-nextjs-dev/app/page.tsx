'use client'

import { ShaderGradient } from 'shadergradient'

export default function Home() {
  return (
    <>
      <div className='w-screen h-[50vh]'>
        <ShaderGradient />
      </div>
      <div className='w-screen h-[50vh]'>
        <ShaderGradient type='plane' color1='#0D77E0' />
      </div>
    </>
  )
}
