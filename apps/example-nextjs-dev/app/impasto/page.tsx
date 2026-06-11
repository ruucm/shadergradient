'use client'

import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react'
import { useState } from 'react'

type TypeT = 'plane' | 'sphere' | 'waterPlane'

// Oil-paint palettes: dark ground, dominant pigment, accent highlight
const THEMES = {
  starryNight: {
    label: 'Starry Night',
    color1: '#1d3473',
    color2: '#4585c8',
    color3: '#ffd84a',
  },
  sunflowers: {
    label: 'Sunflowers',
    color1: '#54350f',
    color2: '#eaa92e',
    color3: '#f9eec0',
  },
  poppyField: {
    label: 'Poppy Field',
    color1: '#5c1a24',
    color2: '#d63a2a',
    color3: '#ffc46b',
  },
  irises: {
    label: 'Irises',
    color1: '#28473a',
    color2: '#7561d4',
    color3: '#dce9a8',
  },
} as const

type ThemeKey = keyof typeof THEMES

// Per-geometry camera & noise settings tuned for the impasto shader
const TYPE_PROPS: Record<TypeT, any> = {
  waterPlane: {
    type: 'waterPlane',
    cAzimuthAngle: 178,
    cPolarAngle: 67,
    cDistance: 3.6,
    cameraZoom: 1,
    positionX: 0,
    positionY: 0.7,
    positionZ: -0.3,
    rotationX: 45,
    rotationY: 0,
    rotationZ: 0,
    uStrength: 1.6,
    uDensity: 0.95,
    uFrequency: 5.5,
    uAmplitude: 0,
  },
  // Face-on, like a canvas hung on a gallery wall — all relief comes from the paint
  plane: {
    type: 'plane',
    cAzimuthAngle: 180,
    cPolarAngle: 90,
    cDistance: 3.2,
    cameraZoom: 1,
    positionX: 0,
    positionY: 0,
    positionZ: 0,
    rotationX: 0,
    rotationY: 0,
    rotationZ: 0,
    uStrength: 0.8,
    uDensity: 1.1,
    uFrequency: 5.5,
    uAmplitude: 0,
  },
  sphere: {
    type: 'sphere',
    cAzimuthAngle: 180,
    cPolarAngle: 90,
    cDistance: 2.4,
    cameraZoom: 6.5,
    positionX: 0,
    positionY: 0,
    positionZ: 0,
    rotationX: 0,
    rotationY: 0,
    rotationZ: 30,
    uStrength: 0.35,
    uDensity: 1.1,
    uFrequency: 5.5,
    uAmplitude: 1.2,
    brightness: 1.5,
  },
}

export default function ImpastoDemo() {
  const [themeKey, setThemeKey] = useState<ThemeKey>('starryNight')
  const [type, setType] = useState<TypeT>('waterPlane')

  const theme = THEMES[themeKey]
  const typeProps = TYPE_PROPS[type]

  return (
    <main className='relative h-screen w-screen overflow-hidden bg-[#171310]'>
      <ShaderGradientCanvas
        style={{ position: 'absolute', inset: 0 }}
        pixelDensity={1.5}
        fov={45}
      >
        <ShaderGradient
          animate='on'
          shader='impasto'
          grain='on'
          lightType='3d'
          brightness={1.35}
          envPreset='city'
          reflection={0.25}
          uSpeed={0.25}
          uTime={0}
          color1={theme.color1}
          color2={theme.color2}
          color3={theme.color3}
          {...typeProps}
        />
      </ShaderGradientCanvas>

      {/* Museum placard */}
      <header className='pointer-events-none absolute left-0 top-0 rounded-br-3xl bg-gradient-to-br from-[#171310]/75 via-[#171310]/40 to-transparent p-8 pb-16 pr-16 text-[#f3ead9]'>
        <p className='mb-2 text-[11px] uppercase tracking-[0.35em] text-[#f3ead9]/55'>
          ShaderGradient — Hall IV
        </p>
        <h1 className='font-serif text-5xl italic tracking-tight'>Impasto</h1>
        <p className='mt-1 font-serif text-sm italic text-[#f3ead9]/60'>
          Oil on procedural canvas, 2026
        </p>
        <p className='mt-4 max-w-xs text-sm leading-relaxed text-[#f3ead9]/70'>
          Thick paint dragged by a coarse brush — every color boundary is a
          stroke, light rakes across the ridges, and the canvas weave shows
          through the thin passages.
        </p>
      </header>

      {/* Controls */}
      <footer className='absolute bottom-0 left-0 right-0 flex flex-col items-center gap-3 p-8'>
        <div className='flex gap-2 rounded-full border border-[#f3ead9]/15 bg-[#171310]/40 p-1.5 backdrop-blur-md'>
          {(Object.keys(THEMES) as ThemeKey[]).map((key) => (
            <button
              key={key}
              onClick={() => setThemeKey(key)}
              className={`flex items-center gap-2 rounded-full px-4 py-2 font-serif text-sm transition-colors ${
                themeKey === key
                  ? 'bg-[#f3ead9] text-[#171310]'
                  : 'text-[#f3ead9]/80 hover:bg-[#f3ead9]/10'
              }`}
            >
              <span className='flex -space-x-1'>
                {[THEMES[key].color1, THEMES[key].color2, THEMES[key].color3].map(
                  (c) => (
                    <span
                      key={c}
                      className='h-3 w-3 rounded-full border border-black/30'
                      style={{ backgroundColor: c }}
                    />
                  )
                )}
              </span>
              {THEMES[key].label}
            </button>
          ))}
        </div>

        <div className='flex gap-2 rounded-full border border-[#f3ead9]/15 bg-[#171310]/40 p-1.5 backdrop-blur-md'>
          {(['waterPlane', 'plane', 'sphere'] as TypeT[]).map((t) => (
            <button
              key={t}
              onClick={() => setType(t)}
              className={`rounded-full px-4 py-2 font-serif text-sm capitalize transition-colors ${
                type === t
                  ? 'bg-[#f3ead9] text-[#171310]'
                  : 'text-[#f3ead9]/80 hover:bg-[#f3ead9]/10'
              }`}
            >
              {t === 'waterPlane' ? 'Water Plane' : t}
            </button>
          ))}
        </div>

        <p className='text-xs text-[#f3ead9]/40'>
          shader=&quot;impasto&quot; · drag to orbit
        </p>
      </footer>
    </main>
  )
}
