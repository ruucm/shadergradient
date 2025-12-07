'use client'

import { useMemo, useState } from 'react'
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
  const [density, setDensity] = useState(0.9)
  const [reflection, setReflection] = useState(0.45)
  const [wireframe, setWireframe] = useState(false)
  const [animate, setAnimate] = useState<'on' | 'off'>('on')
  const [time, setTime] = useState(0)
  const [shader, setShader] = useState<'defaults' | 'positionMix' | 'cosmic' | 'glass' | 'lamina'>('lamina')
  const [type, setType] = useState<'sphere' | 'plane' | 'waterPlane'>('sphere')
  const [paletteIndex, setPaletteIndex] = useState(0)
  const [colors, setColors] = useState(palettes[0].colors)
  const [cAzimuthAngle, setCAzimuthAngle] = useState(180)
  const [cPolarAngle, setCPolarAngle] = useState(70)
  const [cDistance, setCDistance] = useState(3.2)
  const [rotationZ, setRotationZ] = useState(30)
  const [lightType, setLightType] = useState<'3d' | 'env'>('3d')
  const [envPreset, setEnvPreset] = useState<'city' | 'dawn' | 'lobby'>('city')
  const [brightness, setBrightness] = useState(1.15)

  const palette = palettes[paletteIndex]
  const colorProps = useMemo(
    () => ({
      color1: colors[0],
      color2: colors[1],
      color3: colors[2],
    }),
    [colors]
  )

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
                onClick={() => {
                  setPaletteIndex(idx)
                  setColors(item.colors)
                  setDensity(item.density)
                }}
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
                shader={shader}
                type={type}
                animate={animate}
                {...colorProps}
                uSpeed={speed}
                uStrength={strength}
                uDensity={density}
                reflection={reflection}
                wireframe={wireframe}
                cAzimuthAngle={cAzimuthAngle}
                cPolarAngle={cPolarAngle}
                cDistance={cDistance}
                rotationX={0}
                rotationY={0}
                rotationZ={rotationZ}
                grain='off'
                lightType={lightType}
                envPreset={envPreset}
                brightness={brightness}
                uTime={time}
              />
            </ShaderGradientCanvas>
          </div>

          <div className='aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 shadow-2xl shadow-indigo-900/30'>
            <ShaderGradientCanvas>
              <ShaderGradient
                shader={shader}
                type='plane'
                animate={animate}
                color1={colorProps.color2}
                color2={colorProps.color3}
                color3={colorProps.color1}
                uSpeed={speed * 0.6}
                uStrength={strength * 0.75}
                uDensity={density * 1.1}
                reflection={Math.max(0, reflection - 0.2)}
                cAzimuthAngle={120}
                cPolarAngle={80}
                cDistance={3.8}
                positionX={-0.4}
                positionY={0.1}
                rotationX={-10}
                rotationY={20}
                rotationZ={-20}
                grain='off'
                lightType={lightType}
                envPreset={envPreset}
                brightness={brightness}
                uTime={time}
              />
            </ShaderGradientCanvas>
          </div>
        </section>

        <section className='rounded-2xl border border-white/10 bg-white/5 p-5 shadow-inner shadow-black/40'>
          <div className='grid gap-6 lg:grid-cols-3'>
            <div className='space-y-3'>
              <h3 className='text-sm font-semibold text-white'>Shape</h3>
              <div className='grid grid-cols-3 gap-2 text-sm'>
                {['sphere', 'plane', 'waterPlane'].map((t) => (
                  <button
                    key={t}
                    onClick={() => setType(t as any)}
                    className={`rounded border px-2 py-1 capitalize transition ${
                      type === t
                        ? 'border-indigo-300 bg-indigo-300/20 text-white'
                        : 'border-white/10 bg-white/5 text-slate-300 hover:border-indigo-200/40'
                    }`}
                  >
                    {t === 'waterPlane' ? 'Water' : t}
                  </button>
                ))}
              </div>
              <label className='space-y-2 text-sm'>
                <div className='flex items-center justify-between text-slate-300'>
                  <span>Shader</span>
                  <span className='font-mono text-indigo-100'>{shader}</span>
                </div>
                <select
                  value={shader}
                  onChange={(e) => setShader(e.target.value as any)}
                  className='w-full rounded border border-white/10 bg-slate-900/80 px-3 py-2 text-sm text-white outline-none ring-1 ring-transparent focus:border-indigo-300/60 focus:ring-indigo-300/40'
                >
                  <option value='lamina'>lamina</option>
                  <option value='defaults'>defaults</option>
                  <option value='positionMix'>positionMix</option>
                  <option value='cosmic'>cosmic</option>
                  <option value='glass'>glass</option>
                </select>
              </label>
              <label className='space-y-2 text-sm'>
                <div className='flex items-center justify-between text-slate-300'>
                  <span>Wireframe</span>
                  <span className='font-semibold text-white'>
                    {wireframe ? 'On' : 'Off'}
                  </span>
                </div>
                <button
                  onClick={() => setWireframe((v) => !v)}
                  className={`w-full rounded px-3 py-2 text-sm transition ${
                    wireframe
                      ? 'border border-indigo-300 bg-indigo-300/20 text-white'
                      : 'border border-white/10 bg-white/5 text-slate-300 hover:border-indigo-200/40'
                  }`}
                >
                  Toggle
                </button>
              </label>
            </div>

            <div className='space-y-3'>
              <h3 className='text-sm font-semibold text-white'>Colors & Motion</h3>
              <div className='grid grid-cols-3 gap-2 text-xs'>
                {colors.map((value, idx) => (
                  <label
                    key={`color-${idx}`}
                    className='flex flex-col gap-1 rounded border border-white/10 bg-white/5 p-2'
                  >
                    <span className='text-slate-300'>Color {idx + 1}</span>
                    <input
                      type='color'
                      value={value}
                      onChange={(e) => {
                        const next = [...colors]
                        next[idx] = e.target.value
                        setColors(next)
                      }}
                      className='h-10 w-full rounded bg-slate-900'
                    />
                  </label>
                ))}
              </div>
              <label className='space-y-2 text-sm'>
                <div className='flex items-center justify-between text-slate-300'>
                  <span>Animate</span>
                  <span className='font-semibold text-white'>{animate}</span>
                </div>
                <div className='grid grid-cols-2 gap-2'>
                  {['on', 'off'].map((v) => (
                    <button
                      key={v}
                      onClick={() => setAnimate(v as any)}
                      className={`rounded border px-3 py-2 text-sm transition ${
                        animate === v
                          ? 'border-indigo-300 bg-indigo-300/20 text-white'
                          : 'border-white/10 bg-white/5 text-slate-300 hover:border-indigo-200/40'
                      }`}
                    >
                      {v.toUpperCase()}
                    </button>
                  ))}
                </div>
              </label>
              <label className='space-y-2'>
                <div className='flex items-center justify-between text-sm text-slate-300'>
                  <span>{animate === 'on' ? 'Speed (uSpeed)' : 'Time (uTime)'}</span>
                  <span className='font-semibold text-white'>
                    {(animate === 'on' ? speed : time).toFixed(2)}
                  </span>
                </div>
                <input
                  type='range'
                  min={animate === 'on' ? 0 : 0}
                  max={animate === 'on' ? 1.5 : 10}
                  step='0.05'
                  value={animate === 'on' ? speed : time}
                  onChange={(e) =>
                    animate === 'on'
                      ? setSpeed(Number(e.target.value))
                      : setTime(Number(e.target.value))
                  }
                  className='w-full accent-indigo-300'
                />
              </label>
              <label className='space-y-2'>
                <div className='flex items-center justify-between text-sm text-slate-300'>
                  <span>Layer strength (uStrength)</span>
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
              <label className='space-y-2'>
                <div className='flex items-center justify-between text-sm text-slate-300'>
                  <span>Density (uDensity)</span>
                  <span className='font-semibold text-white'>
                    {density.toFixed(2)}
                  </span>
                </div>
                <input
                  type='range'
                  min='0.4'
                  max='2'
                  step='0.05'
                  value={density}
                  onChange={(e) => setDensity(Number(e.target.value))}
                  className='w-full accent-indigo-300'
                />
              </label>
            </div>

            <div className='space-y-3'>
              <h3 className='text-sm font-semibold text-white'>Effects & Camera</h3>
              <label className='space-y-2 text-sm'>
                <div className='flex items-center justify-between text-slate-300'>
                  <span>Reflection</span>
                  <span className='font-semibold text-white'>
                    {reflection.toFixed(2)}
                  </span>
                </div>
                <input
                  type='range'
                  min='0'
                  max='1'
                  step='0.05'
                  value={reflection}
                  onChange={(e) => setReflection(Number(e.target.value))}
                  className='w-full accent-indigo-300'
                />
              </label>
              <label className='space-y-2 text-sm'>
                <div className='flex items-center justify-between text-slate-300'>
                  <span>Brightness</span>
                  <span className='font-semibold text-white'>
                    {brightness.toFixed(2)}
                  </span>
                </div>
                <input
                  type='range'
                  min='0.5'
                  max='2'
                  step='0.05'
                  value={brightness}
                  onChange={(e) => setBrightness(Number(e.target.value))}
                  className='w-full accent-indigo-300'
                />
              </label>
              <label className='space-y-2 text-sm'>
                <div className='flex items-center justify-between text-slate-300'>
                  <span>Light</span>
                  <span className='font-semibold text-white'>{lightType}</span>
                </div>
                <div className='grid grid-cols-2 gap-2'>
                  {['3d', 'env'].map((v) => (
                    <button
                      key={v}
                      onClick={() => setLightType(v as any)}
                      className={`rounded border px-3 py-2 text-sm transition ${
                        lightType === v
                          ? 'border-indigo-300 bg-indigo-300/20 text-white'
                          : 'border-white/10 bg-white/5 text-slate-300 hover:border-indigo-200/40'
                      }`}
                    >
                      {v.toUpperCase()}
                    </button>
                  ))}
                </div>
              </label>
              <label className='space-y-2 text-sm'>
                <div className='flex items-center justify-between text-slate-300'>
                  <span>Env preset</span>
                  <span className='font-semibold text-white'>{envPreset}</span>
                </div>
                <div className='grid grid-cols-3 gap-2 text-xs'>
                  {['city', 'dawn', 'lobby'].map((v) => (
                    <button
                      key={v}
                      onClick={() => setEnvPreset(v as any)}
                      className={`rounded border px-2 py-2 capitalize transition ${
                        envPreset === v
                          ? 'border-indigo-300 bg-indigo-300/20 text-white'
                          : 'border-white/10 bg-white/5 text-slate-300 hover:border-indigo-200/40'
                      }`}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </label>
              <label className='space-y-2 text-sm'>
                <div className='flex items-center justify-between text-slate-300'>
                  <span>Azimuth</span>
                  <span className='font-semibold text-white'>{cAzimuthAngle}°</span>
                </div>
                <input
                  type='range'
                  min='0'
                  max='360'
                  step='5'
                  value={cAzimuthAngle}
                  onChange={(e) => setCAzimuthAngle(Number(e.target.value))}
                  className='w-full accent-indigo-300'
                />
              </label>
              <label className='space-y-2 text-sm'>
                <div className='flex items-center justify-between text-slate-300'>
                  <span>Polar</span>
                  <span className='font-semibold text-white'>{cPolarAngle}°</span>
                </div>
                <input
                  type='range'
                  min='0'
                  max='180'
                  step='5'
                  value={cPolarAngle}
                  onChange={(e) => setCPolarAngle(Number(e.target.value))}
                  className='w-full accent-indigo-300'
                />
              </label>
              <label className='space-y-2 text-sm'>
                <div className='flex items-center justify-between text-slate-300'>
                  <span>Distance</span>
                  <span className='font-semibold text-white'>
                    {cDistance.toFixed(1)}
                  </span>
                </div>
                <input
                  type='range'
                  min='1'
                  max='6'
                  step='0.1'
                  value={cDistance}
                  onChange={(e) => setCDistance(Number(e.target.value))}
                  className='w-full accent-indigo-300'
                />
              </label>
              <label className='space-y-2 text-sm'>
                <div className='flex items-center justify-between text-slate-300'>
                  <span>Spin Z</span>
                  <span className='font-semibold text-white'>
                    {rotationZ.toFixed(0)}°
                  </span>
                </div>
                <input
                  type='range'
                  min='-180'
                  max='180'
                  step='1'
                  value={rotationZ}
                  onChange={(e) => setRotationZ(Number(e.target.value))}
                  className='w-full accent-indigo-300'
                />
              </label>
            </div>
          </div>
          <p className='mt-4 text-sm text-slate-400'>
            These controls mirror the key ShaderGradient propertyControls (shape, colors,
            shader, motion, and view). Toggle lamina or any built-in shader and see both
            canvases update live.
          </p>
        </section>
      </div>
    </main>
  )
}
