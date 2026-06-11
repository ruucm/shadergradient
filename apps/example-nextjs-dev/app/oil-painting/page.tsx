'use client'

import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react'
import { useState } from 'react'

type GeometryType = 'waterPlane' | 'plane' | 'sphere' | 'torus'

const PALETTES = {
  'Starry Night': { color1: '#0c1a4d', color2: '#2f6bd8', color3: '#f4d35e' },
  Sunflower: { color1: '#6a3310', color2: '#d9822b', color3: '#f7c948' },
  'Rose Garden': { color1: '#4a1631', color2: '#c94f7c', color3: '#ffd9c9' },
  'Jade Sea': { color1: '#0b3b36', color2: '#37a08a', color3: '#e8f3d6' },
} as const

type PaletteName = keyof typeof PALETTES

// per-geometry camera + paint-mass tuning (planes are 10 units wide, the
// sphere/torus are ~1, so displacement strength differs)
const VIEWS: Record<
  GeometryType,
  {
    cAzimuthAngle: number
    cPolarAngle: number
    cDistance: number
    uStrength: number
    uDensity: number
    reflection: number
    cameraZoom: number
  }
> = {
  waterPlane: {
    cAzimuthAngle: 180,
    cPolarAngle: 95,
    cDistance: 6,
    uStrength: 1.5,
    uDensity: 1.6,
    reflection: 0.35,
    cameraZoom: 1,
  },
  plane: {
    cAzimuthAngle: 180,
    cPolarAngle: 90,
    cDistance: 6.5,
    uStrength: 1.8,
    uDensity: 1.6,
    reflection: 0.35,
    cameraZoom: 1,
  },
  sphere: {
    cAzimuthAngle: 200,
    cPolarAngle: 80,
    cDistance: 2.6,
    uStrength: 0.42,
    uDensity: 3.2,
    reflection: 0.25,
    cameraZoom: 5.2,
  },
  torus: {
    cAzimuthAngle: 205,
    cPolarAngle: 65,
    cDistance: 3.4,
    uStrength: 0.32,
    uDensity: 2.4,
    reflection: 0.25,
    cameraZoom: 1,
  },
}

const GEOMETRY_LABELS: Record<GeometryType, string> = {
  waterPlane: 'Canvas',
  plane: 'Flat Canvas',
  sphere: 'Paint Blob',
  torus: 'Paint Ring',
}

export default function OilPaintingPage() {
  const [type, setType] = useState<GeometryType>('waterPlane')
  const [palette, setPalette] = useState<PaletteName>('Starry Night')
  const [bristles, setBristles] = useState(5.5) // uFrequency
  const [relief, setRelief] = useState(1.2) // uAmplitude (bump intensity)
  const [brushScale, setBrushScale] = useState(1) // multiplies uDensity
  const [speed, setSpeed] = useState(0.25)

  const view = VIEWS[type]
  const colors = PALETTES[palette]

  return (
    <main className='relative h-screen w-screen overflow-hidden bg-[#100d0a] text-[#f5efe2]'>
      <ShaderGradientCanvas>
        <ShaderGradient
          type={type}
          shader='oilPaint'
          animate='on'
          grain='off'
          cAzimuthAngle={view.cAzimuthAngle}
          cPolarAngle={view.cPolarAngle}
          cDistance={view.cDistance}
          cameraZoom={view.cameraZoom}
          positionX={0}
          positionY={0}
          positionZ={0}
          rotationX={0}
          rotationY={0}
          rotationZ={0}
          color1={colors.color1}
          color2={colors.color2}
          color3={colors.color3}
          uSpeed={speed}
          uStrength={view.uStrength}
          uDensity={view.uDensity * brushScale}
          uFrequency={bristles}
          uAmplitude={relief}
          reflection={view.reflection}
          lightType='env'
          envPreset='city'
          brightness={1.2}
        />
      </ShaderGradientCanvas>

      {/* title plate, like a gallery label */}
      <div className='pointer-events-none absolute left-8 top-8'>
        <h1 className='font-serif text-4xl italic tracking-wide drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]'>
          Impasto
        </h1>
        <p className='mt-1 max-w-xs text-sm opacity-80 drop-shadow-[0_1px_8px_rgba(0,0,0,0.8)]'>
          Oil paint shader — brush-stroke relief, bristle grooves and canvas
          weave, lit so every ridge of paint catches the light.
        </p>
        <code className='mt-2 inline-block rounded bg-black/40 px-2 py-1 text-xs backdrop-blur'>
          {`<ShaderGradient shader='oilPaint' type='${type}' />`}
        </code>
      </div>

      {/* control palette */}
      <div className='absolute bottom-6 left-1/2 w-[min(880px,94vw)] -translate-x-1/2 rounded-2xl border border-white/10 bg-black/45 p-4 backdrop-blur-md'>
        <div className='flex flex-wrap items-center justify-between gap-3'>
          <div className='flex flex-wrap gap-2'>
            {(Object.keys(VIEWS) as GeometryType[]).map((g) => (
              <button
                key={g}
                onClick={() => setType(g)}
                className={`rounded-full px-4 py-1.5 text-sm transition ${
                  type === g
                    ? 'bg-[#f5efe2] text-[#1a140e]'
                    : 'bg-white/10 hover:bg-white/20'
                }`}
              >
                {GEOMETRY_LABELS[g]}
              </button>
            ))}
          </div>

          <div className='flex flex-wrap gap-2'>
            {(Object.keys(PALETTES) as PaletteName[]).map((name) => {
              const p = PALETTES[name]
              return (
                <button
                  key={name}
                  onClick={() => setPalette(name)}
                  title={name}
                  className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs transition ${
                    palette === name
                      ? 'bg-white/25 ring-1 ring-white/60'
                      : 'bg-white/10 hover:bg-white/20'
                  }`}
                >
                  <span className='flex overflow-hidden rounded-full'>
                    {[p.color1, p.color2, p.color3].map((c) => (
                      <span
                        key={c}
                        className='h-3.5 w-3.5'
                        style={{ backgroundColor: c }}
                      />
                    ))}
                  </span>
                  {name}
                </button>
              )
            })}
          </div>
        </div>

        <div className='mt-4 grid grid-cols-2 gap-x-8 gap-y-3 md:grid-cols-4'>
          <Slider
            label='Brush size'
            min={0.5}
            max={2}
            step={0.05}
            value={brushScale}
            onChange={setBrushScale}
            format={(v) => `${v.toFixed(2)}x`}
          />
          <Slider
            label='Bristles'
            min={2}
            max={12}
            step={0.5}
            value={bristles}
            onChange={setBristles}
          />
          <Slider
            label='Relief'
            min={0}
            max={3}
            step={0.1}
            value={relief}
            onChange={setRelief}
          />
          <Slider
            label='Motion'
            min={0}
            max={1}
            step={0.05}
            value={speed}
            onChange={setSpeed}
          />
        </div>
      </div>
    </main>
  )
}

function Slider({
  label,
  min,
  max,
  step,
  value,
  onChange,
  format = (v: number) => v.toFixed(1),
}: {
  label: string
  min: number
  max: number
  step: number
  value: number
  onChange: (v: number) => void
  format?: (v: number) => string
}) {
  return (
    <label className='block text-xs'>
      <span className='flex justify-between opacity-80'>
        <span>{label}</span>
        <span>{format(value)}</span>
      </span>
      <input
        type='range'
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className='mt-1 w-full accent-[#f5efe2]'
      />
    </label>
  )
}
