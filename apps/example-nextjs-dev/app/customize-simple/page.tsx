'use client'

import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react'
import { useState } from 'react'

export default function Page() {
  const [rangeEnabled, setRangeEnabled] = useState(true)
  const [rangeStart, setRangeStart] = useState(2)
  const [rangeEnd, setRangeEnd] = useState(5)

  const [pixelDensity, setPixelDensity] = useState(1)
  const [fov, setFov] = useState(45)
  const [reflection, setReflection] = useState(0.1)
  const [lastChanged, setLastChanged] = useState<'pixelDensity' | 'other'>(
    'other'
  )

  return (
    <div className='flex gap-6 p-6'>
      <div className='w-80 shrink-0 space-y-6'>
        <div>
          <label className='flex items-center gap-2'>
            <input
              type='checkbox'
              checked={rangeEnabled}
              onChange={(e) => {
                setRangeEnabled(e.target.checked)
                setLastChanged('other')
              }}
            />
            <span className='font-medium'>Range Enabled</span>
          </label>
          <div className='mt-3 space-y-3'>
            <div className='flex items-center gap-3'>
              <label className='w-24 text-sm opacity-70'>Start</label>
              <input
                type='number'
                step='0.1'
                className='w-full border px-2 py-1 rounded'
                value={rangeStart}
                onChange={(e) => {
                  setRangeStart(Number(e.target.value))
                  setLastChanged('other')
                }}
                disabled={!rangeEnabled}
              />
            </div>
            <div className='flex items-center gap-3'>
              <label className='w-24 text-sm opacity-70'>End</label>
              <input
                type='number'
                step='0.1'
                className='w-full border px-2 py-1 rounded'
                value={rangeEnd}
                onChange={(e) => {
                  setRangeEnd(Number(e.target.value))
                  setLastChanged('other')
                }}
                disabled={!rangeEnabled}
              />
            </div>
          </div>
        </div>

        <div>
          <label className='flex items-center justify-between'>
            <span className='font-medium'>Pixel Density</span>
            <span className='text-sm opacity-70'>
              {pixelDensity.toFixed(1)}
            </span>
          </label>
          <input
            type='range'
            min='0.5'
            max='3'
            step='0.5'
            value={pixelDensity}
            onChange={(e) => {
              setPixelDensity(Number(e.target.value))
              setLastChanged('pixelDensity')
            }}
            className='w-full'
          />
        </div>

        <div>
          <label className='flex items-center justify-between'>
            <span className='font-medium'>FOV</span>
            <span className='text-sm opacity-70'>{fov}</span>
          </label>
          <input
            type='range'
            min='20'
            max='120'
            step='1'
            value={fov}
            onChange={(e) => {
              setFov(Number(e.target.value))
              setLastChanged('other')
            }}
            className='w-full'
          />
        </div>

        <div>
          <label className='flex items-center justify-between'>
            <span className='font-medium'>Reflection</span>
            <span className='text-sm opacity-70'>{reflection.toFixed(2)}</span>
          </label>
          <input
            type='range'
            min='0'
            max='1'
            step='0.05'
            value={reflection}
            onChange={(e) => {
              setReflection(Number(e.target.value))
              setLastChanged('other')
            }}
            className='w-full'
          />
        </div>
      </div>

      <div className='flex-1 h-[80vh] rounded overflow-hidden border'>
        <ShaderGradientCanvas pixelDensity={pixelDensity} fov={fov}>
          <ShaderGradient
            animate='on'
            range={rangeEnabled ? 'enabled' : 'disabled'}
            rangeStart={rangeStart}
            rangeEnd={rangeEnd}
            reflection={reflection}
            grain={lastChanged === 'pixelDensity' ? 'on' : 'off'}
            lightType={lastChanged === 'pixelDensity' ? '3d' : 'env'}
          />
        </ShaderGradientCanvas>
      </div>
    </div>
  )
}
