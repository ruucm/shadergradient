# Shader Gradient

Customizable 3D, moving gradient package for React. Also available on modern design tools like Figma and Framer.

![Intro](./intro.gif)

# Table of contents

- 📦 [Installation](#installation)
- 💻 [Usage](#usage)
- 📚 [Examples](#examples)
- 📝 [Contributing](#contributing)
- 🚀 [Future Plan](#future-plan)
- ⚖️ [License](#license)

# Installation

## Figma

[Figma Plugin](https://www.figma.com/community/plugin/1203016883447870818)

## Framer

[Framer ESM (Copy this URL and paste it on Framer Canvas)](https://framer.com/m/ShaderGradient-Iog3.js)

## React

Install below dependencies on your React app.

```sh
# with yarn
yarn add three @types/three @react-three/fiber shadergradient framer-motion

# with npm
$ npm i three @types/three @react-three/fiber shadergradient framer-motion

# with pnpm
$ pnpm add three @types/three @react-three/fiber shadergradient framer-motion
```

# Usage

Drop the gradient component on your canvas. Then you can customize it with props.

## Figma

![Figma](./figma.gif)

## Framer

![Framer](./framer.gif)

## React

### Available Gradient Properties (Types)

```ts
type MeshT = {
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

type GradientT = MeshT & {
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

### Configure Gradient Properties

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

or just copy and paste URL of the gradients. (Grab the URL from [shadergradient.co/customize](www.shadergradient.co/customize))

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
      <Gradient
        control='query'
        urlString='https://www.shadergradient.co/customize?animate=on&axesHelper=off&bgColor1=%23000000&bgColor2=%23000000&brightness=1.2&cAzimuthAngle=180&cDistance=3.6&cPolarAngle=90&cameraZoom=1&color1=%2352ff89&color2=%23dbba95&color3=%23d0bce1&embedMode=off&envPreset=city&fov=45&gizmoHelper=hide&grain=on&lightType=3d&pixelDensity=1&positionX=-1.4&positionY=0&positionZ=0&reflection=0.1&rotationX=0&rotationY=10&rotationZ=0&shader=defaults&type=plane&uDensity=1.3&uFrequency=5.5&uSpeed=0.4&uStrength=4&uTime=0&wireframe=false&zoomOut=false'
      />
    </LCanvas>
  )
}
```

# Examples

## Figma

## Framer

[Framer Remix (Login required)](https://framer.com/projects/new?duplicate=sJitbgOn6on6Savojbyk)

## React

- CRA Starter: [CodeSandbox](https://codesandbox.io/p/sandbox/github/ruucm/shadergradient/tree/main/apps/example-cra?file=%2Fsrc%2FApp.tsx)
- Next.js Starter: [CodeSandbox](https://codesandbox.io/p/sandbox/zjxeci?file=%2Fsrc%2Fpages%2Findex.tsx)

# Contributing

## Setup

```
pnpm install
```

## Start development

```
pnpm dev
```

# Future Plan

- [ ] Detatch framer-motion peer depenency (Seperate UI & Store Pacakge)
- [x] Figma GIF Support
- [ ] More Shaders

# License

MIT © [ruucm](https://github.com/ruucm), [stone-skipper](https://github.com/stone-skipper)
