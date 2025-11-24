'use client'

import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react'
import { useState } from 'react'

export default function HolographicPage() {
  const [color1, setColor1] = useState('#2c003e')
  const [color2, setColor2] = useState('#3a005c')
  const [color3, setColor3] = useState('#000000')
  const [reflection, setReflection] = useState(0.5)
  const [showControls, setShowControls] = useState(false)

  return (
    <div className='relative w-full h-screen bg-black text-white overflow-hidden font-mono selection:bg-purple-500 selection:text-white'>
      {/* Background Elements */}
      <div className='absolute inset-0 flex items-center justify-center pointer-events-none z-0'>
        <div className='relative w-full h-full flex flex-col items-center justify-center'>
           <h1 className='text-[15vw] font-bold leading-none tracking-tighter opacity-30 text-transparent bg-clip-text bg-gradient-to-b from-purple-500 to-cyan-500 blur-sm animate-pulse duration-[2000ms]'>
             HOLOGRAPHIC
           </h1>
           {/* Grid Lines */}
           <div className='absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_70%)]' />
        </div>
      </div>

      {/* Header */}
      <header className='absolute top-0 left-0 w-full p-8 z-20 flex justify-between items-start'>
        <div className='flex items-center gap-4'>
          <div className='w-3 h-3 bg-purple-500 rounded-full animate-ping' />
          <div>
            <h2 className='text-xs font-bold tracking-widest uppercase text-purple-400'>SYSTEM.V2</h2>
            <p className='text-[10px] text-white/40'>SPECTRAL_RENDERER_INIT</p>
          </div>
        </div>
        <div className='text-right hidden md:block'>
          <p className='text-[10px] text-white/40'>
            FPS: 60<br />
            GPU: ACTIVE
          </p>
        </div>
      </header>

      {/* Main Canvas */}
      <div className='absolute inset-0 z-10'>
        <ShaderGradientCanvas
          pixelDensity={1.2}
          fov={45}
        >
          <ShaderGradient
            control='props'
            shader='holographic'
            type='plane'
            animate='on'
            uSpeed={0.4}
            uStrength={2.5}
            uDensity={1.0}
            color1={color1}
            color2={color2}
            color3={color3}
            reflection={reflection}
            lightType='env'
            envPreset='city'
            brightness={1.5}
            grain='off'
            cAzimuthAngle={180}
            cPolarAngle={90}
            cDistance={3}
            enableTransition={true}
          />
        </ShaderGradientCanvas>
      </div>

      {/* Footer / Controls */}
      <footer className='absolute bottom-0 left-0 w-full p-8 z-20 flex flex-col md:flex-row justify-between items-end pointer-events-none'>
        <div className='max-w-md pointer-events-auto'>
          <div className='border-l-2 border-purple-500 pl-6 mb-8'>
            <h3 className='text-4xl md:text-6xl font-bold leading-none mb-2 tracking-tighter'>
              PRISM<br /><span className='text-purple-500'>OS</span>
            </h3>
            <p className='text-xs text-white/50 max-w-xs uppercase tracking-widest'>
              Advanced light spectrum simulation // Iridescence field active
            </p>
          </div>
          
          <button 
            onClick={() => setShowControls(!showControls)}
            className='group flex items-center gap-3 text-xs font-bold tracking-widest hover:text-purple-400 transition-colors uppercase border border-white/20 px-6 py-3 rounded hover:border-purple-500/50 hover:bg-purple-500/10'
          >
            [{showControls ? 'TERMINATE_CONFIG' : 'INITIALIZE_CONFIG'}]
          </button>
        </div>

        {/* Controls Panel */}
        <div className={`
          pointer-events-auto transition-all duration-300 ease-out overflow-hidden
          ${showControls ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}
          bg-black/80 backdrop-blur-md border border-purple-500/30 p-6 w-full md:w-80 mt-4 md:mt-0
        `}>
          <div className='space-y-6'>
            <div className='space-y-2'>
              <div className='flex justify-between text-[10px] uppercase tracking-widest text-purple-400'>
                <label>Reflection_Index</label>
                <span>{reflection}</span>
              </div>
              <input 
                type='range' 
                min='0' 
                max='1' 
                step='0.01' 
                value={reflection} 
                onChange={(e) => setReflection(parseFloat(e.target.value))}
                className='w-full accent-purple-500 h-1 bg-white/10 rounded-none appearance-none cursor-pointer'
              />
            </div>

            <div className='grid grid-cols-3 gap-2'>
              <div className='space-y-1'>
                <label className='text-[10px] uppercase tracking-widest text-white/40'>CH_01</label>
                <input 
                  type='color' 
                  value={color1} 
                  onChange={(e) => setColor1(e.target.value)}
                  className='w-full h-6 rounded-none cursor-pointer bg-transparent border border-white/10'
                />
              </div>
              <div className='space-y-1'>
                <label className='text-[10px] uppercase tracking-widest text-white/40'>CH_02</label>
                <input 
                  type='color' 
                  value={color2} 
                  onChange={(e) => setColor2(e.target.value)}
                  className='w-full h-6 rounded-none cursor-pointer bg-transparent border border-white/10'
                />
              </div>
              <div className='space-y-1'>
                <label className='text-[10px] uppercase tracking-widest text-white/40'>CH_03</label>
                <input 
                  type='color' 
                  value={color3} 
                  onChange={(e) => setColor3(e.target.value)}
                  className='w-full h-6 rounded-none cursor-pointer bg-transparent border border-white/10'
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
