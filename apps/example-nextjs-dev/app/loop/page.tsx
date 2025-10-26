'use client'

import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react'
import { useState, useEffect, useRef } from 'react'

export default function LoopDemo() {
  // Parse URL parameters from shadergradient.co
  const [type, setType] = useState<'plane' | 'sphere' | 'waterPlane'>('plane')
  const [loop, setLoop] = useState<'on' | 'off'>('on')
  const [loopDuration, setLoopDuration] = useState(5)
  const [uSpeed, setUSpeed] = useState(0.4)
  const [uStrength, setUStrength] = useState(4)
  const [uDensity, setUDensity] = useState(1.3)
  const [uFrequency, setUFrequency] = useState(5.5)
  const [uAmplitude, setUAmplitude] = useState(0)
  const [shader, setShader] = useState<'defaults' | 'glass' | 'cosmic'>(
    'defaults'
  )
  const [range, setRange] = useState<'enabled' | 'disabled'>('disabled')
  const [rangeStart, setRangeStart] = useState(0)
  const [rangeEnd, setRangeEnd] = useState(10)
  const [currentTime, setCurrentTime] = useState(0)
  const [progress, setProgress] = useState(0)
  const startTimeRef = useRef<number>(Date.now())

  // Track loop progress
  useEffect(() => {
    if (loop === 'off') {
      setProgress(0)
      setCurrentTime(0)
      return
    }

    startTimeRef.current = Date.now()

    const interval = setInterval(() => {
      const elapsed = (Date.now() - startTimeRef.current) / 1000
      const time = elapsed % loopDuration
      const prog = (time / loopDuration) * 100

      setCurrentTime(time)
      setProgress(prog)
    }, 16) // ~60fps

    return () => clearInterval(interval)
  }, [loop, loopDuration])

  return (
    <div className='flex flex-col min-h-screen'>
      <div className='text-center p-6 bg-gray-100 border-b'>
        <h1 className='text-3xl font-bold mb-4'>Loop Functionality Demo</h1>
        <p className='text-gray-600 mb-6'>
          Test the new loop feature that creates seamless animation cycles with
          identical start/end shapes. Compare with range controls for different
          animation behaviors.
        </p>

        {/* Type Controls */}
        <div className='flex gap-2 justify-center mb-4'>
          <button
            onClick={() => setType('plane')}
            className={`px-4 py-2 rounded ${
              type === 'plane' ? 'bg-blue-500 text-white' : 'bg-gray-300'
            }`}
          >
            Plane
          </button>
          <button
            onClick={() => setType('sphere')}
            className={`px-4 py-2 rounded ${
              type === 'sphere' ? 'bg-blue-500 text-white' : 'bg-gray-300'
            }`}
          >
            Sphere
          </button>
          <button
            onClick={() => setType('waterPlane')}
            className={`px-4 py-2 rounded ${
              type === 'waterPlane' ? 'bg-blue-500 text-white' : 'bg-gray-300'
            }`}
          >
            Water Plane
          </button>
        </div>

        {/* Shader Controls */}
        <div className='flex gap-2 justify-center mb-6'>
          <button
            onClick={() => setShader('defaults')}
            className={`px-4 py-2 rounded ${
              shader === 'defaults' ? 'bg-purple-500 text-white' : 'bg-gray-300'
            }`}
          >
            Default
          </button>
          <button
            onClick={() => setShader('glass')}
            className={`px-4 py-2 rounded ${
              shader === 'glass' ? 'bg-purple-500 text-white' : 'bg-gray-300'
            }`}
          >
            Glass
          </button>
          <button
            onClick={() => setShader('cosmic')}
            className={`px-4 py-2 rounded ${
              shader === 'cosmic' ? 'bg-purple-500 text-white' : 'bg-gray-300'
            }`}
          >
            Cosmic
          </button>
        </div>

        {/* Animation Controls */}
        <div className='space-y-4'>
          {/* Loop Controls */}
          <div className='flex gap-6 justify-center items-center bg-white p-4 rounded-lg shadow-sm'>
            <div className='flex gap-3 items-center'>
              <label className='font-semibold text-lg'>Loop:</label>
              <button
                onClick={() => setLoop(loop === 'on' ? 'off' : 'on')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  loop === 'on'
                    ? 'bg-green-500 text-white shadow-md'
                    : 'bg-gray-300 text-gray-700 hover:bg-gray-400'
                }`}
              >
                {loop === 'on' ? 'ON' : 'OFF'}
              </button>
            </div>

            <div className='flex gap-3 items-center'>
              <label className='font-semibold text-lg'>Duration:</label>
              <input
                type='range'
                min='1'
                max='20'
                step='0.5'
                value={loopDuration}
                onChange={(e) => setLoopDuration(Number(e.target.value))}
                className='w-32 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer'
                disabled={loop === 'off'}
              />
              <span className='font-mono text-lg w-12 text-center bg-gray-100 px-2 py-1 rounded'>
                {loopDuration}s
              </span>
            </div>

            <div className='flex gap-3 items-center'>
              <label className='font-semibold text-lg'>Speed:</label>
              <input
                type='range'
                min='0.1'
                max='2'
                step='0.1'
                value={uSpeed}
                onChange={(e) => setUSpeed(Number(e.target.value))}
                className='w-32 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer'
              />
              <span className='font-mono text-lg w-12 text-center bg-gray-100 px-2 py-1 rounded'>
                {uSpeed.toFixed(1)}
              </span>
            </div>
          </div>

          {/* Loop Progress Indicator */}
          {loop === 'on' && (
            <div className='p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border-2 border-blue-200'>
              <div className='mb-3'>
                <div className='flex justify-between items-center mb-2'>
                  <span className='text-sm font-semibold text-gray-700'>
                    Loop Progress
                  </span>
                  <span className='text-lg font-mono font-bold text-blue-600'>
                    {currentTime.toFixed(2)}s / {loopDuration.toFixed(2)}s
                  </span>
                </div>

                {/* Progress Bar */}
                <div className='relative h-8 bg-gray-200 rounded-full overflow-hidden shadow-inner'>
                  <div
                    className='absolute h-full bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 transition-all duration-100 ease-linear'
                    style={{ width: `${progress}%` }}
                  />

                  {/* Start/End Markers */}
                  <div className='absolute inset-0 flex justify-between items-center px-2'>
                    <span className='text-xs font-bold text-white drop-shadow-md z-10'>
                      START
                    </span>
                    <span className='text-xs font-bold text-white drop-shadow-md z-10'>
                      END
                    </span>
                  </div>

                  {/* Current Position Indicator */}
                  <div
                    className='absolute top-0 bottom-0 w-1 bg-white shadow-lg transition-all duration-100 ease-linear'
                    style={{ left: `${progress}%` }}
                  >
                    <div className='absolute -top-1 left-1/2 -translate-x-1/2 w-3 h-3 bg-white rounded-full border-2 border-blue-600 shadow-lg' />
                  </div>
                </div>

                {/* Percentage Display */}
                <div className='mt-2 text-center'>
                  <span className='text-sm text-gray-600'>
                    {progress.toFixed(1)}% complete
                  </span>
                </div>
              </div>

              <div className='text-xs text-gray-600 text-center'>
                Watch the progress bar to see when the loop restarts with
                identical shape
              </div>
            </div>
          )}

          {/* Noise Parameter Controls */}
          <div className='bg-white p-4 rounded-lg shadow-sm'>
            <h3 className='text-center font-semibold text-gray-700 mb-3'>
              Noise Parameters
            </h3>
            <div className='grid grid-cols-2 gap-4'>
              <div className='flex flex-col gap-2'>
                <div className='flex justify-between items-center'>
                  <label className='font-medium text-sm'>Strength:</label>
                  <span className='font-mono text-sm bg-gray-100 px-2 py-1 rounded'>
                    {uStrength.toFixed(1)}
                  </span>
                </div>
                <input
                  type='range'
                  min='0.1'
                  max='10'
                  step='0.1'
                  value={uStrength}
                  onChange={(e) => setUStrength(Number(e.target.value))}
                  className='w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer'
                />
              </div>

              <div className='flex flex-col gap-2'>
                <div className='flex justify-between items-center'>
                  <label className='font-medium text-sm'>Density:</label>
                  <span className='font-mono text-sm bg-gray-100 px-2 py-1 rounded'>
                    {uDensity.toFixed(1)}
                  </span>
                </div>
                <input
                  type='range'
                  min='0.1'
                  max='5'
                  step='0.1'
                  value={uDensity}
                  onChange={(e) => setUDensity(Number(e.target.value))}
                  className='w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer'
                />
              </div>

              <div className='flex flex-col gap-2'>
                <div className='flex justify-between items-center'>
                  <label className='font-medium text-sm'>
                    Amplitude {type !== 'sphere' && '(sphere only)'}:
                  </label>
                  <span className='font-mono text-sm bg-gray-100 px-2 py-1 rounded'>
                    {uAmplitude.toFixed(1)}
                  </span>
                </div>
                <input
                  type='range'
                  min='0'
                  max='5'
                  step='0.1'
                  value={uAmplitude}
                  onChange={(e) => setUAmplitude(Number(e.target.value))}
                  className='w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer'
                  disabled={type !== 'sphere'}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Shader Display */}
      <div className='bg-gradient-to-br from-gray-900 to-black w-full h-[50vh] pointer-events-none'>
        <ShaderGradientCanvas style={{ width: '100%', height: '100%' }}>
          <ShaderGradient
            type={type}
            cAzimuthAngle={180}
            cPolarAngle={90}
            cDistance={type === 'sphere' ? 4 : 15}
            cameraZoom={type === 'sphere' ? 1 : 1}
            positionX={-1.4}
            positionY={0}
            positionZ={0}
            rotationX={0}
            rotationY={10}
            rotationZ={50}
            animate='on'
            loop={loop}
            loopDuration={loopDuration}
            range={range}
            rangeStart={rangeStart}
            rangeEnd={rangeEnd}
            grain='on'
            shader={shader}
            color1='#ff5005'
            color2='#dbba95'
            color3='#d0bce1'
            uSpeed={uSpeed}
            uStrength={uStrength}
            uDensity={uDensity}
            uFrequency={uFrequency}
            uAmplitude={uAmplitude}
            uTime={0}
            reflection={0.1}
            lightType='3d'
            brightness={1.2}
            envPreset='city'
          />
        </ShaderGradientCanvas>
      </div>

      {/* Technical Explanation */}
      <div className='p-6 bg-gradient-to-br from-gray-50 to-blue-50 border-t'>
        <div className='max-w-5xl mx-auto'>
          <h3 className='font-bold text-lg mb-4 text-gray-800'>
            🔄 How Loop Works - Technical Overview
          </h3>

          <div className='space-y-4 text-sm text-gray-700'>
            {/* Core Concept */}
            <div className='bg-white p-4 rounded-lg shadow-sm'>
              <h4 className='font-semibold text-blue-600 mb-2'>Core Concept</h4>
              <p>
                The loop feature creates seamless animations where the start and
                end shapes are identical. Instead of linear time progression
                that creates visible jumps when looping, we sample Perlin noise
                along a circular path in 4D space.
              </p>
            </div>

            {/* Implementation */}
            <div className='bg-white p-4 rounded-lg shadow-sm'>
              <h4 className='font-semibold text-blue-600 mb-2'>
                Implementation Details
              </h4>
              <div className='space-y-2'>
                <p>
                  <strong>1. GLSL Shader Updates:</strong> Modified vertex
                  shaders for all three shapes (plane, sphere, waterPlane) in{' '}
                  <code className='bg-gray-100 px-1 rounded text-xs'>
                    src/shaders/defaults/
                  </code>
                </p>
                <p>
                  <strong>2. New Uniforms:</strong> Added{' '}
                  <code className='bg-gray-100 px-1 rounded text-xs'>
                    uLoop
                  </code>{' '}
                  (on/off flag) and{' '}
                  <code className='bg-gray-100 px-1 rounded text-xs'>
                    uLoopDuration
                  </code>{' '}
                  (cycle length in seconds) to control loop behavior
                </p>
                <p>
                  <strong>3. 4-Point Sampling:</strong> When loop is enabled, we
                  sample noise at 4 cardinal points (0°, 90°, 180°, 270°) around
                  a circle. Each sample uses different frequency scales (1.0x,
                  1.3x, 0.8x, 1.1x) to create truly dynamic variation instead of
                  just rotating the same pattern.
                </p>
                <p>
                  <strong>4. Smooth Blending:</strong> Cosine-based
                  interpolation weights smoothly fade between all 4 samples,
                  ensuring continuous evolution: A → B → C → D → A (seamless!)
                </p>
              </div>
            </div>

            {/* Algorithm */}
            <div className='bg-white p-4 rounded-lg shadow-sm'>
              <h4 className='font-semibold text-blue-600 mb-2'>
                The Algorithm
              </h4>
              <div className='bg-gray-50 p-3 rounded font-mono text-xs overflow-x-auto'>
                <div>angle = (time / duration) × 2π</div>
                <div>radius = 3.0 × speed</div>
                <div className='mt-2'>// Sample 4 points on circle</div>
                <div>offset0 = (cos(angle) × radius, sin(angle) × radius)</div>
                <div>
                  offset1 = (cos(angle+90°) × radius, sin(angle+90°) × radius)
                </div>
                <div>
                  offset2 = (cos(angle+180°) × radius, sin(angle+180°) × radius)
                </div>
                <div>
                  offset3 = (cos(angle+270°) × radius, sin(angle+270°) × radius)
                </div>
                <div className='mt-2'>
                  // Get noise at different frequencies
                </div>
                <div>n0 = noise(position + offset0 × 1.0)</div>
                <div>n1 = noise(position + offset1 × 1.3)</div>
                <div>n2 = noise(position + offset2 × 0.8)</div>
                <div>n3 = noise(position + offset3 × 1.1)</div>
                <div className='mt-2'>// Blend with normalized weights</div>
                <div>result = n0×w0 + n1×w1 + n2×w2 + n3×w3</div>
              </div>
            </div>

            {/* Why It Works */}
            <div className='bg-white p-4 rounded-lg shadow-sm'>
              <h4 className='font-semibold text-blue-600 mb-2'>
                Why This Creates Seamless Loops
              </h4>
              <ul className='space-y-1 list-disc list-inside'>
                <li>At time 0s: angle = 0° → samples at specific positions</li>
                <li>
                  At time {loopDuration}s: angle = 360° →{' '}
                  <strong>same positions!</strong>
                </li>
                <li>
                  Different frequency scales prevent obvious rotation patterns
                </li>
                <li>Smooth weight transitions avoid sudden changes</li>
                <li>
                  All 4 samples always contribute (with varying weights) for
                  continuous evolution
                </li>
              </ul>
            </div>

            {/* Files Modified */}
            <div className='bg-white p-4 rounded-lg shadow-sm'>
              <h4 className='font-semibold text-blue-600 mb-2'>
                Files Modified
              </h4>
              <ul className='space-y-1 text-xs font-mono'>
                <li>
                  📝 <span className='text-green-600'>types.ts</span> - Added
                  loop & loopDuration properties
                </li>
                <li>
                  📝 <span className='text-green-600'>Mesh.tsx</span> - Pass
                  loop uniforms to shader
                </li>
                <li>
                  📝 <span className='text-green-600'>Materials.tsx</span> -
                  Handle loop time cycling with modulo
                </li>
                <li>
                  📝{' '}
                  <span className='text-green-600'>
                    shaders/defaults/plane/vertex.glsl
                  </span>{' '}
                  - 4-point sampling algorithm
                </li>
                <li>
                  📝{' '}
                  <span className='text-green-600'>
                    shaders/defaults/sphere/vertex.glsl
                  </span>{' '}
                  - 4-point sampling algorithm
                </li>
                <li>
                  📝{' '}
                  <span className='text-green-600'>
                    shaders/defaults/waterPlane/vertex.glsl
                  </span>{' '}
                  - 4-point sampling algorithm
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
