'use client'

import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react'
import { type ComponentProps, useId, useState } from 'react'

type GradientProps = ComponentProps<typeof ShaderGradient>

function GradientMark({
  size = 100,
  svgPath,
  viewBox = 100,
  gradient,
  borderRadius,
}: {
  size?: number
  svgPath?: string
  viewBox?: number
  gradient: GradientProps
  borderRadius?: string
}) {
  const id = useId()
  const clipId = `clip-${id}`

  const maskStyle: React.CSSProperties = svgPath
    ? { clipPath: `url(#${clipId})` }
    : { borderRadius: borderRadius || '50%' }

  return (
    <div
      style={{
        width: size,
        height: size,
        position: 'relative',
        flexShrink: 0,
      }}
    >
      {svgPath && (
        <svg
          width={0}
          height={0}
          style={{ position: 'absolute' }}
          aria-hidden='true'
        >
          <defs>
            <clipPath id={clipId} clipPathUnits='objectBoundingBox'>
              <path d={svgPath} transform={`scale(${1 / viewBox})`} />
            </clipPath>
          </defs>
        </svg>
      )}
      <div
        style={{
          width: size,
          height: size,
          overflow: 'hidden',
          ...maskStyle,
        }}
      >
        <ShaderGradientCanvas
          style={{ width: size, height: size }}
          pixelDensity={2}
          fov={45}
        >
          <ShaderGradient {...gradient} />
        </ShaderGradientCanvas>
      </div>
    </div>
  )
}

// ─── Organic SVG Paths (100x100) ───
const PATHS = {
  // Soft amoeba / organic blob
  amoeba:
    'M65 3C80 8 95 22 97 40C99 58 92 72 80 83C68 94 48 100 33 94C18 88 8 72 5 55C2 38 6 18 18 8C30 -2 50 -2 65 3Z',
  // Fluid wave / abstract S-curve shape
  wave: 'M0 30C0 30 20 0 50 0C80 0 100 25 100 25L100 70C100 70 80 100 50 100C20 100 0 75 0 75Z',
  // Pebble / smooth stone
  pebble:
    'M55 2C72 5 90 18 95 38C100 58 92 78 76 90C60 102 38 100 22 88C6 76 0 54 4 36C8 18 28 4 45 1C48 0 52 1 55 2Z',
  // Super-ellipse (squircle, but smoother)
  superellipse:
    'M50 0C72 0 88 0 94 6C100 12 100 28 100 50C100 72 100 88 94 94C88 100 72 100 50 100C28 100 12 100 6 94C0 88 0 72 0 50C0 28 0 12 6 6C12 0 28 0 50 0Z',
  // Leaf / teardrop
  leaf: 'M50 0C50 0 100 30 100 60C100 82 78 100 50 100C22 100 0 82 0 60C0 30 50 0 50 0Z',
  // Egg
  egg: 'M50 0C72 0 90 22 90 50C90 78 72 100 50 100C28 100 10 78 10 50C10 22 28 0 50 0Z',
}

// ─── Gradient Presets ───
const GRADIENTS: Record<string, GradientProps> = {
  lava: {
    type: 'waterPlane',
    animate: 'on',
    grain: 'off',
    shader: 'defaults',
    color1: '#ff6a00',
    color2: '#ec3d8a',
    color3: '#8b5cf6',
    uSpeed: 0.5,
    uStrength: 4.0,
    uDensity: 1.0,
    uFrequency: 3.5,
    uAmplitude: 1.5,
    cAzimuthAngle: 180,
    cPolarAngle: 90,
    cDistance: 1.4,
    rotationX: 20,
    rotationY: 0,
    rotationZ: -30,
    lightType: '3d',
    brightness: 1.3,
    envPreset: 'city',
    reflection: 0.1,
  },
  aurora: {
    type: 'waterPlane',
    animate: 'on',
    grain: 'off',
    shader: 'defaults',
    color1: '#00d2ff',
    color2: '#7b2ff7',
    color3: '#ff0080',
    uSpeed: 0.4,
    uStrength: 3.5,
    uDensity: 1.2,
    uFrequency: 4.0,
    uAmplitude: 1.2,
    cAzimuthAngle: 180,
    cPolarAngle: 90,
    cDistance: 1.5,
    rotationX: 25,
    rotationY: 0,
    rotationZ: 10,
    lightType: '3d',
    brightness: 1.3,
    envPreset: 'city',
    reflection: 0.1,
  },
  deepSea: {
    type: 'waterPlane',
    animate: 'on',
    grain: 'off',
    shader: 'defaults',
    color1: '#0ea5e9',
    color2: '#2563eb',
    color3: '#7c3aed',
    uSpeed: 0.4,
    uStrength: 3.5,
    uDensity: 1.4,
    uFrequency: 3.0,
    uAmplitude: 1.4,
    cAzimuthAngle: 180,
    cPolarAngle: 90,
    cDistance: 1.5,
    rotationX: 30,
    rotationY: 0,
    rotationZ: 20,
    lightType: '3d',
    brightness: 1.2,
    envPreset: 'city',
    reflection: 0.2,
  },
  plasma: {
    type: 'waterPlane',
    animate: 'on',
    grain: 'off',
    shader: 'defaults',
    color1: '#f72585',
    color2: '#7209b7',
    color3: '#3a0ca3',
    uSpeed: 0.5,
    uStrength: 4.0,
    uDensity: 1.1,
    uFrequency: 3.5,
    uAmplitude: 1.5,
    cAzimuthAngle: 180,
    cPolarAngle: 90,
    cDistance: 1.4,
    rotationX: 15,
    rotationY: 0,
    rotationZ: -20,
    lightType: '3d',
    brightness: 1.4,
    envPreset: 'city',
    reflection: 0.1,
  },
  forest: {
    type: 'waterPlane',
    animate: 'on',
    grain: 'off',
    shader: 'defaults',
    color1: '#06d6a0',
    color2: '#118ab2',
    color3: '#073b4c',
    uSpeed: 0.35,
    uStrength: 3.8,
    uDensity: 1.3,
    uFrequency: 3.0,
    uAmplitude: 1.3,
    cAzimuthAngle: 180,
    cPolarAngle: 90,
    cDistance: 1.5,
    rotationX: 25,
    rotationY: 0,
    rotationZ: 40,
    lightType: '3d',
    brightness: 1.3,
    envPreset: 'city',
    reflection: 0.15,
  },
  solar: {
    type: 'waterPlane',
    animate: 'on',
    grain: 'off',
    shader: 'defaults',
    color1: '#ff4500',
    color2: '#ff8c00',
    color3: '#ffd700',
    uSpeed: 0.45,
    uStrength: 3.5,
    uDensity: 1.5,
    uFrequency: 3.5,
    uAmplitude: 1.2,
    cAzimuthAngle: 180,
    cPolarAngle: 90,
    cDistance: 1.6,
    rotationX: 35,
    rotationY: 0,
    rotationZ: -15,
    lightType: '3d',
    brightness: 1.4,
    envPreset: 'city',
    reflection: 0.1,
  },
}

type Preset = {
  name: string
  shape: keyof typeof PATHS | 'circle'
  gradient: keyof typeof GRADIENTS
}

const PRESETS: Preset[] = [
  { name: 'Bloom', shape: 'amoeba', gradient: 'lava' },
  { name: 'Flux', shape: 'pebble', gradient: 'aurora' },
  { name: 'Aqua', shape: 'leaf', gradient: 'deepSea' },
  { name: 'Nova', shape: 'superellipse', gradient: 'plasma' },
  { name: 'Fern', shape: 'egg', gradient: 'forest' },
  { name: 'Sol', shape: 'circle', gradient: 'solar' },
]

const font = 'var(--font-geist-sans), system-ui, sans-serif'

export default function LogoPage() {
  const [idx, setIdx] = useState(0)
  const preset = PRESETS[idx]
  const svgPath = preset.shape !== 'circle' ? PATHS[preset.shape] : undefined
  const borderRadius = preset.shape === 'circle' ? '50%' : undefined
  const gradient = GRADIENTS[preset.gradient]

  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#09090b',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {/* ─── Hero ─── */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '80px 40px 40px',
          gap: 32,
        }}
      >
        {/* Big mark */}
        <GradientMark
          size={280}
          svgPath={svgPath}
          borderRadius={borderRadius}
          gradient={gradient}
        />

        {/* Logo + wordmark */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginTop: 24 }}>
          <GradientMark
            size={64}
            svgPath={svgPath}
            borderRadius={borderRadius}
            gradient={gradient}
          />
          <span
            style={{
              fontSize: 56,
              fontWeight: 800,
              color: '#fff',
              letterSpacing: '-0.04em',
              fontFamily: font,
              lineHeight: 1,
            }}
          >
            {preset.name}
          </span>
        </div>
      </div>

      {/* ─── Selector pills ─── */}
      <div
        style={{
          display: 'flex',
          gap: 8,
          padding: '48px 20px 80px',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        {PRESETS.map((p, i) => (
          <button
            key={p.name}
            onClick={() => setIdx(i)}
            style={{
              padding: '10px 24px',
              fontSize: 15,
              fontWeight: 600,
              fontFamily: font,
              color: idx === i ? '#fff' : '#555',
              background: idx === i ? 'rgba(255,255,255,0.1)' : 'transparent',
              border: idx === i ? '1px solid rgba(255,255,255,0.15)' : '1px solid rgba(255,255,255,0.06)',
              borderRadius: 100,
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
          >
            {p.name}
          </button>
        ))}
      </div>
    </div>
  )
}
