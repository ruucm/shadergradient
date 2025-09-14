'use client'

import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react'
import { useState } from 'react'

export default function Home() {
  const [color1, setColor1] = useState('#0D77E0')
  const [type, setType] = useState<any>('sphere')

  return (
    <div className='flex flex-col'>
      <div className='text-center p-4 bg-gray-100'>
        <h1 className='text-2xl font-bold mb-2'>Glass Shader Demo</h1>
        <div className='flex gap-2 justify-center'>
          <button
            onClick={() => setType('sphere')}
            className={`px-4 py-2 rounded ${
              type === 'sphere' ? 'bg-blue-500 text-white' : 'bg-gray-300'
            }`}
          >
            Sphere
          </button>
          <button
            onClick={() => setType('plane')}
            className={`px-4 py-2 rounded ${
              type === 'plane' ? 'bg-blue-500 text-white' : 'bg-gray-300'
            }`}
          >
            Plane
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
      </div>
      <div className='flex flex-1'>
        <div className='flex-1 h-[calc(100vh-120px)] bg-gradient-to-br from-purple-100 to-indigo-100'>
          <ShaderGradientCanvas>
            <ShaderGradient
              type={type}
              cAzimuthAngle={180}
              cPolarAngle={80}
              cDistance={3.5}
              positionX={0}
              positionY={0}
              positionZ={0}
              rotationX={0}
              rotationY={0}
              rotationZ={0}
              animate='on'
              grain='off'
              shader='glass'
              color1='#88ddff'
              color2='#0099ff'
              color3='#0066cc'
              uSpeed={0.3}
              uStrength={0.3}
              uDensity={1.5}
              uFrequency={5.5}
              uAmplitude={0.5}
              reflection={0.5}
              lightType='3d'
              brightness={1.2}
              envPreset='city'
            />
          </ShaderGradientCanvas>
        </div>
        <div className='flex-1 h-[calc(100vh-120px)] bg-gradient-to-br from-purple-100 to-pink-100'>
          <ShaderGradientCanvas>
            <ShaderGradient
              type='sphere'
              cAzimuthAngle={90}
              cPolarAngle={45}
              cDistance={4}
              animate='on'
              grain='off'
              shader='glass'
              color1='#ffaaff'
              color2='#ff66ff'
              color3='#ff00ff'
              uSpeed={0.2}
              uStrength={0.5}
              uDensity={2}
              uFrequency={3}
              uAmplitude={0.8}
              reflection={0.8}
              // lightType='env'
              // envPreset='dawn'
              brightness={1.5}
            />
          </ShaderGradientCanvas>
        </div>
      </div>
    </div>
  )
}
