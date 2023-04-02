# Shader Gradient

![Intro](./intro.gif)

Curated and customizable 3d gradient package, in modern design tools (Framer, Figma) and React.

# Installation

Install below dependencies on your React app.

```
yarn add three @types/three @react-three/fiber shadergradient framer-motion
```

# Available Platforms

## Figma

[Figma Plugin](https://www.figma.com/community/plugin/1203016883447870818)

## Framer

[Framer Remix (Login required)](https://framer.com/projects/new?duplicate=sJitbgOn6on6Savojbyk)

[Framer ESM (Copy it on Framer Canvas)](https://framer.com/m/Gradient-YIzl.js)

## React

[CodeSandbox](https://codesandbox.io/p/sandbox/github/ruucm/shadergradient/tree/main/apps/example-cra?file=%2Fsrc%2FApp.tsx)

```tsx
import React from 'react'
import { LCanvas, Gradient } from 'shadergradient'
import * as reactSpring from '@react-spring/three'
import * as drei from '@react-three/drei'
import * as fiber from '@react-three/fiber'

function App() {
  return (
    <LCanvas
      importedFiber={{ ...fiber, ...drei, ...reactSpring }}
      style={{
        position: 'absolute',
        top: 0,
      }}
    >
      <Gradient cDistance={32} cPolarAngle={125} />
    </LCanvas>
  )
}
```

## Next.js

[CodeSandbox](https://codesandbox.io/p/sandbox/zjxeci?file=%2Fsrc%2Fpages%2Findex.tsx)

# Usage

Drop the gradient component on your canvas. Then you can customize it with props.

## Figma

![Figma](./figma.gif)

## Framer

![Framer](./framer.gif)

## React

```ts
export type MeshT = {
  type?: 'plane' | 'sphere' | 'waterPlane'
  animate?: 'on' | 'off'
  uTime?: number
  uSpeed?: number
  uStrength?: number
  uDensity?: number
  uFrequency?: number
  uAmplitude?: number
  positionX?: number
  positionY?: number
  positionZ?: number
  rotationX?: number
  rotationY?: number
  rotationZ?: number
  color1?: string
  color2?: string
  color3?: string
  reflection?: number
  wireframe?: boolean
  shader?: string
  rotSpringOption?: any
  posSpringOption?: any
}

export type GradientT = MeshT & {
  control?: 'query' | 'props'
  isFigmaPlugin?: boolean
  dampingFactor?: number

  // View (camera) props
  cAzimuthAngle?: number
  cPolarAngle?: number
  cDistance?: number
  cameraZoom?: number

  // Effect props
  lightType?: '3d' | 'env'
  brightness?: number
  envPreset?: 'city' | 'dawn' | 'lobby'
  grain?: 'on' | 'off'

  // Tool props
  zoomOut?: boolean
  toggleAxis?: boolean
  hoverState?: string
}
```

# Contributes

## Setup

```
pnpm install
```

## Start development

```
yarn dev
```

# Future Plan

- [ ] Detatch framer-motion peer depenency (Seperate UI & Store Pacakge)
- [ ] Figma GIF Support
- [ ] More Shaders
