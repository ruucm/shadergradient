'use client'

import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react'
import { useState } from 'react'

export default function LiquidPage() {
  const [color1, setColor1] = useState('#2a2a2a')
  const [color2, setColor2] = useState('#111111')
  const [color3, setColor3] = useState('#000000')
  const [reflection, setReflection] = useState(0.95)
  const [showControls, setShowControls] = useState(false)

  return (
    <div className='relative w-full h-screen bg-[#050505] text-white overflow-hidden font-sans selection:bg-white selection:text-black'>
      {/* Background Elements */}
      <div className='absolute inset-0 flex items-center justify-center pointer-events-none z-0'>
        <div className='relative w-full h-full flex flex-col items-center justify-center'>
           <div className='absolute w-[60vw] h-[60vw] bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-full blur-[120px] animate-pulse duration-[5000ms]' />
           <h1 className='relative text-[20vw] font-bold leading-none tracking-tighter text-white mix-blend-overlay opacity-50 select-none'>
             LIQUID
           </h1>
        </div>
      </div>

      {/* Header */}
      <header className='absolute top-0 left-0 w-full p-8 z-20 flex justify-between items-start mix-blend-difference'>
        <div>
          <h2 className='text-sm font-bold tracking-widest uppercase mb-1'>ShaderGradient</h2>
          <p className='text-xs text-white/60'>iOS 26 PREVIEW</p>
        </div>
      </header>

      {/* Main Canvas */}
      <div className='absolute inset-0 z-10'>
        <ShaderGradientCanvas
          pixelDensity={1.5}
          fov={35}
        >
          <ShaderGradient
            control='props'
            shader='liquid'
            type='plane'
            animate='on'
            uSpeed={0.15}
            uStrength={4.0}
            uDensity={0.8}
            color1={color1}
            color2={color2}
            color3={color3}
            reflection={reflection}
            lightType='env'
            envPreset='city'
            brightness={1.8}
            grain='off'
            cAzimuthAngle={180}
            cPolarAngle={90}
            cDistance={3.5}
            enableTransition={true}
          />
        </ShaderGradientCanvas>
      </div>

      {/* Footer / Controls */}
      <footer className='absolute bottom-0 left-0 w-full p-8 z-20 flex flex-col md:flex-row justify-between items-end pointer-events-none'>
        <div className='max-w-md pointer-events-auto'>
          <h3 className='text-4xl md:text-6xl font-light leading-tight mb-6 mix-blend-difference'>
            Liquid<br />Metal
          </h3>
          <p className='text-sm text-white/70 max-w-xs mb-8 mix-blend-difference'>
            Next-generation fluid interface. High viscosity, chromatic aberration, and hyper-realistic reflection.
          </p>
          
          <button 
            onClick={() => setShowControls(!showControls)}
            className='group flex items-center gap-3 text-sm font-medium tracking-wide hover:text-white/80 transition-colors'
          >
            <span className='w-2 h-2 bg-white rounded-full group-hover:scale-150 transition-transform' />
            {showControls ? 'HIDE CONTROLS' : 'CUSTOMIZE'}
          </button>
        </div>

        {/* Controls Panel */}
        <div className={`
          pointer-events-auto transition-all duration-500 ease-out overflow-hidden
          ${showControls ? 'opacity-100 translate-y-0 max-h-96' : 'opacity-0 translate-y-10 max-h-0'}
          bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 w-full md:w-80 mt-4 md:mt-0 shadow-2xl
        `}>
          <div className='space-y-6'>
            <div className='space-y-2'>
              <label className='text-xs font-bold tracking-wider opacity-50 uppercase'>Viscosity (Reflection)</label>
              <input 
                type='range' 
                min='0' 
                max='1' 
                step='0.01' 
                value={reflection} 
                onChange={(e) => setReflection(parseFloat(e.target.value))}
                className='w-full accent-white h-1 bg-white/20 rounded-lg appearance-none cursor-pointer'
              />
            </div>

            <div className='grid grid-cols-3 gap-4'>
              <div className='space-y-2'>
                <label className='text-xs font-bold tracking-wider opacity-50 uppercase'>C1</label>
                <input 
                  type='color' 
                  value={color1} 
                  onChange={(e) => setColor1(e.target.value)}
                  className='w-full h-8 rounded-lg cursor-pointer bg-transparent border border-white/20'
                />
              </div>
              <div className='space-y-2'>
                <label className='text-xs font-bold tracking-wider opacity-50 uppercase'>C2</label>
                <input 
                  type='color' 
                  value={color2} 
                  onChange={(e) => setColor2(e.target.value)}
                  className='w-full h-8 rounded-lg cursor-pointer bg-transparent border border-white/20'
                />
              </div>
              <div className='space-y-2'>
                <label className='text-xs font-bold tracking-wider opacity-50 uppercase'>C3</label>
                <input 
                  type='color' 
                  value={color3} 
                  onChange={(e) => setColor3(e.target.value)}
                  className='w-full h-8 rounded-lg cursor-pointer bg-transparent border border-white/20'
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
