'use client'

import { ShaderGradient, ShaderGradientCanvas } from '@shadergradient/react'
import Link from 'next/link'
import { useMemo, useState } from 'react'

const palettes = [
  {
    label: 'Arctic Glass',
    colors: ['#7bdff2', '#b2f7ef', '#eff7f6'],
    accent: 'from-sky-300/40 via-cyan-200/20 to-slate-900',
  },
  {
    label: 'Rose Quartz',
    colors: ['#ffc8dd', '#ffafcc', '#cdb4db'],
    accent: 'from-rose-200/50 via-fuchsia-200/20 to-slate-900',
  },
  {
    label: 'Lumen Drift',
    colors: ['#7afdd6', '#61e8de', '#2e2f6c'],
    accent: 'from-emerald-200/40 via-cyan-200/20 to-slate-900',
  },
]

export default function TransmissionDemo() {
  const [paletteIndex, setPaletteIndex] = useState(0)
  const [meshType, setMeshType] = useState<'sphere' | 'plane'>('sphere')
  const [distortion, setDistortion] = useState(0.16)
  const [aberration, setAberration] = useState(0.2)
  const [iridescence, setIridescence] = useState(0.4)
  const [transmission, setTransmission] = useState(0.42)
  const [speed, setSpeed] = useState(0.35)
  const [noiseScale, setNoiseScale] = useState(1.4)

  const palette = useMemo(() => palettes[paletteIndex], [paletteIndex])

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-[#0f172a] text-slate-100'>
      <div className='mx-auto flex max-w-6xl flex-col gap-8 px-6 py-10 lg:flex-row'>
        <div className='lg:w-1/2'>
          <div className='mb-6 flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-slate-400'>
            <span className='h-[1px] w-8 bg-slate-500' />
            Transmission Shader Lab
          </div>
          <h1 className='text-4xl font-semibold leading-tight text-white sm:text-5xl'>
            MeshTransmission-inspired gradient glass
          </h1>
          <p className='mt-4 max-w-xl text-base text-slate-300'>
            A custom vertex/fragment pair that mimics the buttery refraction of
            <span className='font-semibold text-sky-200'> MeshTransmissionMaterial</span>
            — with iridescent film, chromatic refraction, and animated surface
            warping you can dial in live.
          </p>

          <div className='mt-6 flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-300'>
            <span className='rounded-full bg-slate-800/70 px-3 py-2 text-sky-200'>
              dispersion
            </span>
            <span className='rounded-full bg-slate-800/70 px-3 py-2 text-amber-100/80'>
              iridescence
            </span>
            <span className='rounded-full bg-slate-800/70 px-3 py-2 text-emerald-200'>
              refraction
            </span>
          </div>

          <div className='mt-10 grid grid-cols-1 gap-4 rounded-2xl bg-slate-900/60 p-5 shadow-[0_25px_80px_-35px_rgba(0,0,0,0.7)] backdrop-blur lg:grid-cols-2'>
            <div className='space-y-2'>
              <p className='text-xs uppercase tracking-[0.2em] text-slate-400'>
                Palette
              </p>
              <div className='flex gap-2'>
                {palettes.map((set, idx) => (
                  <button
                    key={set.label}
                    onClick={() => setPaletteIndex(idx)}
                    className={`flex-1 rounded-xl border border-slate-800/70 bg-gradient-to-br px-3 py-2 text-left text-sm transition hover:-translate-y-0.5 hover:border-slate-700 ${
                      paletteIndex === idx
                        ? 'ring-2 ring-sky-300/70 ring-offset-2 ring-offset-slate-900'
                        : ''
                    } ${set.accent}`}
                  >
                    <div className='font-semibold text-white'>{set.label}</div>
                    <div className='mt-2 flex gap-1'>
                      {set.colors.map((c) => (
                        <span
                          key={c}
                          className='h-2 flex-1 rounded-full'
                          style={{ background: c }}
                        />
                      ))}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className='space-y-3'>
              <p className='text-xs uppercase tracking-[0.2em] text-slate-400'>
                Mesh & optics
              </p>
              <div className='flex gap-2'>
                {(['sphere', 'plane'] as const).map((type) => (
                  <button
                    key={type}
                    onClick={() => setMeshType(type)}
                    className={`flex-1 rounded-lg border border-slate-800/70 px-3 py-2 text-sm capitalize transition hover:border-slate-700 ${
                      meshType === type
                        ? 'bg-slate-800/80 text-white shadow-inner shadow-slate-900'
                        : 'text-slate-300'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
              <div className='grid grid-cols-2 gap-3 text-xs text-slate-300'>
                <label className='space-y-1'>
                  <div className='flex items-center justify-between'>
                    <span>Distortion</span>
                    <span className='font-mono text-slate-200'>
                      {distortion.toFixed(2)}
                    </span>
                  </div>
                  <input
                    type='range'
                    min='0'
                    max='0.5'
                    step='0.02'
                    value={distortion}
                    onChange={(e) => setDistortion(Number(e.target.value))}
                    className='w-full accent-sky-300'
                  />
                </label>
                <label className='space-y-1'>
                  <div className='flex items-center justify-between'>
                    <span>Chromatic</span>
                    <span className='font-mono text-slate-200'>
                      {aberration.toFixed(2)}
                    </span>
                  </div>
                  <input
                    type='range'
                    min='0'
                    max='0.5'
                    step='0.02'
                    value={aberration}
                    onChange={(e) => setAberration(Number(e.target.value))}
                    className='w-full accent-sky-300'
                  />
                </label>
                <label className='space-y-1'>
                  <div className='flex items-center justify-between'>
                    <span>Iridescence</span>
                    <span className='font-mono text-slate-200'>
                      {iridescence.toFixed(2)}
                    </span>
                  </div>
                  <input
                    type='range'
                    min='0'
                    max='1'
                    step='0.05'
                    value={iridescence}
                    onChange={(e) => setIridescence(Number(e.target.value))}
                    className='w-full accent-sky-300'
                  />
                </label>
                <label className='space-y-1'>
                  <div className='flex items-center justify-between'>
                    <span>Transmission</span>
                    <span className='font-mono text-slate-200'>
                      {transmission.toFixed(2)}
                    </span>
                  </div>
                  <input
                    type='range'
                    min='0.2'
                    max='0.85'
                    step='0.02'
                    value={transmission}
                    onChange={(e) => setTransmission(Number(e.target.value))}
                    className='w-full accent-sky-300'
                  />
                </label>
                <label className='space-y-1'>
                  <div className='flex items-center justify-between'>
                    <span>Noise scale</span>
                    <span className='font-mono text-slate-200'>
                      {noiseScale.toFixed(2)}
                    </span>
                  </div>
                  <input
                    type='range'
                    min='0.6'
                    max='2.4'
                    step='0.1'
                    value={noiseScale}
                    onChange={(e) => setNoiseScale(Number(e.target.value))}
                    className='w-full accent-sky-300'
                  />
                </label>
                <label className='space-y-1'>
                  <div className='flex items-center justify-between'>
                    <span>Drift speed</span>
                    <span className='font-mono text-slate-200'>
                      {speed.toFixed(2)}
                    </span>
                  </div>
                  <input
                    type='range'
                    min='0.05'
                    max='0.9'
                    step='0.05'
                    value={speed}
                    onChange={(e) => setSpeed(Number(e.target.value))}
                    className='w-full accent-sky-300'
                  />
                </label>
              </div>
            </div>
          </div>

          <div className='mt-6 flex items-center gap-4 text-sm text-slate-400'>
            <Link
              href='/'
              className='rounded-full border border-slate-800/60 px-4 py-2 transition hover:border-slate-600 hover:text-white'
            >
              Back to main demo
            </Link>
            <span className='text-xs uppercase tracking-[0.25em] text-slate-500'>
              new shader: transmission
            </span>
          </div>
        </div>

        <div className='relative w-full overflow-hidden rounded-3xl border border-slate-800/70 bg-slate-900/50 shadow-[0_50px_120px_-60px_rgba(0,0,0,0.75)] lg:w-1/2'>
          <div className='absolute inset-0 bg-gradient-to-br from-white/5 via-sky-500/5 to-emerald-500/5 blur-3xl' />
          <div className='relative h-[560px]'>
            <ShaderGradientCanvas
              pixelDensity={1.2}
              fov={50}
              className='[&>canvas]:rounded-3xl'
            >
              <ShaderGradient
                shader='transmission'
                type={meshType}
                color1={palette.colors[0]}
                color2={palette.colors[1]}
                color3={palette.colors[2]}
                animate='on'
                grain='off'
                lightType='env'
                envPreset='dawn'
                brightness={1.1}
                reflection={0.45}
                cDistance={meshType === 'sphere' ? 3.7 : 3.2}
                cAzimuthAngle={meshType === 'sphere' ? 120 : 160}
                cPolarAngle={meshType === 'sphere' ? 70 : 80}
                uSpeed={speed}
                uDistortion={distortion}
                uNoiseScale={noiseScale}
                uChromaticAberration={aberration}
                uTransmission={transmission}
                uIridescenceStrength={iridescence}
                uRefraction={1.25}
              />
            </ShaderGradientCanvas>
          </div>
        </div>
      </div>
    </div>
  )
}
