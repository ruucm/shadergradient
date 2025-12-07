'use client'

import { useState } from 'react'
import { ShaderGradient, ShaderGradientCanvas } from '@shadergradient/react'

const palettes = [
  {
    name: 'Neon Pulse',
    colors: ['#ff0080', '#0aefff', '#ffffff'],
    density: 0.85,
  },
  {
    name: 'Solar Bloom',
    colors: ['#f97316', '#fde68a', '#22d3ee'],
    density: 1.15,
  },
  {
    name: 'Verdant Drift',
    colors: ['#22c55e', '#a3e635', '#fef9c3'],
    density: 1,
  },
]

export default function LaminaExamplePage() {
  const [speed, setSpeed] = useState(0.65)
  const [strength, setStrength] = useState(1.2)
  const [paletteIndex, setPaletteIndex] = useState(0)

  const palette = palettes[paletteIndex]

  return (
    <main className='min-h-screen bg-slate-950 text-slate-100'>
      <div className='mx-auto flex max-w-6xl flex-col gap-8 px-6 py-10'>
        <header className='flex flex-col gap-3 md:flex-row md:items-center md:justify-between'>
          <div>
            <p className='text-xs uppercase tracking-[0.25em] text-indigo-200/80'>
              Lamina material
            </p>
            <h1 className='text-3xl font-semibold md:text-4xl'>
              Layered gradients inside ShaderGradient
            </h1>
            <p className='mt-2 max-w-2xl text-sm text-slate-400'>
              The new <span className='font-mono text-indigo-100'>shader=&quot;lamina&quot;</span>{' '}
              option uses lamina&apos;s layered materials so you can mix depth and fresnel
              effects without writing GLSL.
            </p>
          </div>
          <div className='flex gap-3'>
            {palettes.map((item, idx) => (
              <button
                key={item.name}
                onClick={() => setPaletteIndex(idx)}
                className={`flex items-center gap-2 rounded-full border px-3 py-2 text-sm transition ${
                  paletteIndex === idx
                    ? 'border-indigo-300/80 bg-indigo-300/10 text-white'
                    : 'border-white/10 bg-white/5 text-slate-300 hover:border-indigo-200/40 hover:text-white'
                }`}
              >
                <span
                  className='h-2 w-8 rounded-full'
                  style={{
                    background: `linear-gradient(90deg, ${item.colors[0]}, ${item.colors[1]}, ${item.colors[2]})`,
                  }}
                />
                {item.name}
              </button>
            ))}
          </div>
        </header>

        <section className='grid gap-6 md:grid-cols-2'>
          <div className='aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 shadow-2xl shadow-indigo-900/30'>
            <ShaderGradientCanvas>
              <ShaderGradient
                shader='lamina'
                type='sphere'
                animate='on'
                color1={palette.colors[0]}
                color2={palette.colors[1]}
                color3={palette.colors[2]}
                uSpeed={speed}
                uStrength={strength}
                uDensity={palette.density}
                reflection={0.45}
                cAzimuthAngle={180}
                cPolarAngle={70}
                cDistance={3.2}
                rotationX={0}
                rotationY={0}
                rotationZ={30}
                grain='off'
              />
            </ShaderGradientCanvas>
          </div>

          <div className='aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 shadow-2xl shadow-indigo-900/30'>
            <ShaderGradientCanvas>
              <ShaderGradient
                shader='lamina'
                type='plane'
                animate='on'
                color1={palette.colors[1]}
                color2={palette.colors[2]}
                color3={palette.colors[0]}
                uSpeed={speed * 0.6}
                uStrength={strength * 0.75}
                uDensity={palette.density * 1.1}
                reflection={0.25}
                cAzimuthAngle={120}
                cPolarAngle={80}
                cDistance={3.8}
                positionX={-0.4}
                positionY={0.1}
                rotationX={-10}
                rotationY={20}
                rotationZ={-20}
                grain='off'
              />
            </ShaderGradientCanvas>
          </div>
        </section>

        <section className='rounded-2xl border border-white/10 bg-white/5 p-5 shadow-inner shadow-black/40'>
          <div className='grid gap-4 md:grid-cols-2'>
            <label className='space-y-2'>
              <div className='flex items-center justify-between text-sm text-slate-300'>
                <span>Motion speed</span>
                <span className='font-semibold text-white'>{speed.toFixed(2)}</span>
              </div>
              <input
                type='range'
                min='0'
                max='1.5'
                step='0.05'
                value={speed}
                onChange={(e) => setSpeed(Number(e.target.value))}
                className='w-full accent-indigo-300'
              />
            </label>
            <label className='space-y-2'>
              <div className='flex items-center justify-between text-sm text-slate-300'>
                <span>Layer strength</span>
                <span className='font-semibold text-white'>
                  {strength.toFixed(2)}
                </span>
              </div>
              <input
                type='range'
                min='0.2'
                max='2'
                step='0.05'
                value={strength}
                onChange={(e) => setStrength(Number(e.target.value))}
                className='w-full accent-indigo-300'
              />
            </label>
          </div>
          <p className='mt-4 text-sm text-slate-400'>
            Both canvases are powered by{' '}
            <span className='font-mono text-indigo-100'>shader=&quot;lamina&quot;</span> so you
            can reuse your existing ShaderGradient props with lamina&apos;s layered materials.
          </p>
        </section>
      </div>
    </main>
  )
}
