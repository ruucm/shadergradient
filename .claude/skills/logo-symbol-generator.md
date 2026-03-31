# ShaderGradient Logo & Symbol Generator

Generate animated logo marks and symbols using the ShaderGradient library with SVG clip-path masking.

## When to use
- User asks to create a logo, symbol, icon, or mark using ShaderGradient
- User wants animated gradient shapes for branding

## Setup

Install the package first:
```bash
npm install @shadergradient/react three @react-three/fiber
# or
pnpm add @shadergradient/react three @react-three/fiber
```

## Core Pattern

The technique uses `ShaderGradientCanvas` + `ShaderGradient` rendered inside a div with SVG `clipPath` masking:

```tsx
'use client'
import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react'
import { useId } from 'react'

function GradientMark({ size, svgPath, viewBox = 100, gradient, borderRadius }) {
  const id = useId()
  const clipId = `clip-${id}`
  const maskStyle = svgPath
    ? { clipPath: `url(#${clipId})` }
    : { borderRadius: borderRadius || '50%' }

  return (
    <div style={{ width: size, height: size, position: 'relative', flexShrink: 0 }}>
      {svgPath && (
        <svg width={0} height={0} style={{ position: 'absolute' }} aria-hidden='true'>
          <defs>
            <clipPath id={clipId} clipPathUnits='objectBoundingBox'>
              <path d={svgPath} transform={`scale(${1 / viewBox})`} />
            </clipPath>
          </defs>
        </svg>
      )}
      <div style={{ width: size, height: size, overflow: 'hidden', ...maskStyle }}>
        <ShaderGradientCanvas style={{ width: size, height: size }} pixelDensity={2} fov={45}>
          <ShaderGradient {...gradient} />
        </ShaderGradientCanvas>
      </div>
    </div>
  )
}
```

## Key Technical Notes

### SVG Clip-Path Scaling
- All SVG paths should be designed for a **100x100 viewBox**
- Use `clipPathUnits='objectBoundingBox'` with `transform={scale(1/viewBox)}` to make paths scale to any size
- Use `useId()` for unique clip IDs to avoid conflicts with multiple instances

### WebGL Context Limit
- Browsers limit simultaneous WebGL contexts (~8-16)
- **Keep total canvas count under 8** on a single page
- Use interactive switching (tabs/buttons) to show one at a time instead of a grid of many
- If too many canvases: "Too many active WebGL contexts" / "Context Lost" errors

### Animation Visibility
- Use `type: 'waterPlane'` for the most visible fluid animation in logo marks
- **uSpeed**: 0.3-0.5 for clearly visible motion (0.04-0.1 appears nearly static)
- **uStrength**: 3.0-4.0 for dramatic color shifts
- **uAmplitude**: 1.0-1.5 for visible wave movement
- `plane` type works for static/subtle gradients, `waterPlane` for animated logos

### Gradient fills the shape well when:
- `cDistance`: 1.4-1.8 (close camera)
- `rotationX`: 15-40 (angled view shows more color variation)
- `lightType: '3d'` with `brightness: 1.2-1.5`

## Shape Library (100x100 viewBox SVG paths)

```ts
const PATHS = {
  // Organic blob / amoeba
  amoeba: 'M65 3C80 8 95 22 97 40C99 58 92 72 80 83C68 94 48 100 33 94C18 88 8 72 5 55C2 38 6 18 18 8C30 -2 50 -2 65 3Z',
  // Smooth pebble / stone
  pebble: 'M55 2C72 5 90 18 95 38C100 58 92 78 76 90C60 102 38 100 22 88C6 76 0 54 4 36C8 18 28 4 45 1C48 0 52 1 55 2Z',
  // Super-ellipse / squircle
  superellipse: 'M50 0C72 0 88 0 94 6C100 12 100 28 100 50C100 72 100 88 94 94C88 100 72 100 50 100C28 100 12 100 6 94C0 88 0 72 0 50C0 28 0 12 6 6C12 0 28 0 50 0Z',
  // Leaf / teardrop
  leaf: 'M50 0C50 0 100 30 100 60C100 82 78 100 50 100C22 100 0 82 0 60C0 30 50 0 50 0Z',
  // Egg
  egg: 'M50 0C72 0 90 22 90 50C90 78 72 100 50 100C28 100 10 78 10 50C10 22 28 0 50 0Z',
  // Shield / crest
  shield: 'M50 2L95 20C95 20 95 55 95 65C95 80 75 95 50 98C25 95 5 80 5 65C5 55 5 20 5 20L50 2Z',
  // Diamond
  diamond: 'M50 0L100 50L50 100L0 50Z',
  // Hexagon
  hexagon: 'M50 0L93 25L93 75L50 100L7 75L7 25Z',
  // Drop
  drop: 'M50 2C50 2 90 45 90 65C90 87 72 98 50 98C28 98 10 87 10 65C10 45 50 2 50 2Z',
}
```

For circle: use `borderRadius: '50%'` instead of svgPath.

## Gradient Color Presets

```ts
// Lava: orange -> pink -> purple
{ color1: '#ff6a00', color2: '#ec3d8a', color3: '#8b5cf6' }

// Aurora: cyan -> purple -> magenta
{ color1: '#00d2ff', color2: '#7b2ff7', color3: '#ff0080' }

// Deep Sea: sky blue -> blue -> violet
{ color1: '#0ea5e9', color2: '#2563eb', color3: '#7c3aed' }

// Plasma: magenta -> purple -> deep indigo
{ color1: '#f72585', color2: '#7209b7', color3: '#3a0ca3' }

// Forest: emerald -> teal -> dark teal
{ color1: '#06d6a0', color2: '#118ab2', color3: '#073b4c' }

// Solar: red-orange -> orange -> gold
{ color1: '#ff4500', color2: '#ff8c00', color3: '#ffd700' }
```

## Reference Implementation
See `apps/example-nextjs-dev/app/logo/page.tsx` for a complete working example with interactive preset switching.
