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
  grainBlending?: number

  // Tool props
  zoomOut?: boolean
  toggleAxis?: boolean
  hoverState?: string

  enableTransition?: boolean
}
```

### Configure Gradient Properties

```tsx
import React from 'react'
import { ShaderGradientCanvas, ShaderGradient } from 'shadergradient'
import * as reactSpring from '@react-spring/three'
import * as drei from '@react-three/drei'
import * as fiber from '@react-three/fiber'

function App() {
  return (
    <ShaderGradientCanvas
      importedFiber={{ ...fiber, ...drei, ...reactSpring }}
      style={{
        position: 'absolute',
        top: 0,
      }}
    >
      <ShaderGradient cDistance={32} cPolarAngle={125} />
    </ShaderGradientCanvas>
  )
}
```

or just copy and paste URL of the gradients. (Grab the URL from [shadergradient.co/customize](https://www.shadergradient.co/customize))

```tsx
import React from 'react'
import { ShaderGradientCanvas, ShaderGradient } from 'shadergradient'
import * as reactSpring from '@react-spring/three'
import * as drei from '@react-three/drei'
import * as fiber from '@react-three/fiber'

function App() {
  return (
    <ShaderGradientCanvas
      importedFiber={{ ...fiber, ...drei, ...reactSpring }}
      style={{
        position: 'absolute',
        top: 0,
      }}
    >
      <ShaderGradient
        control='query'
        urlString='https://www.shadergradient.co/customize?animate=on&axesHelper=off&bgColor1=%23000000&bgColor2=%23000000&brightness=1.2&cAzimuthAngle=180&cDistance=3.6&cPolarAngle=90&cameraZoom=1&color1=%2352ff89&color2=%23dbba95&color3=%23d0bce1&embedMode=off&envPreset=city&fov=45&gizmoHelper=hide&grain=on&lightType=3d&pixelDensity=1&positionX=-1.4&positionY=0&positionZ=0&reflection=0.1&rotationX=0&rotationY=10&rotationZ=0&shader=defaults&type=plane&uDensity=1.3&uFrequency=5.5&uSpeed=0.4&uStrength=4&uTime=0&wireframe=false&zoomOut=false'
      />
    </ShaderGradientCanvas>
  )
}
```

## More Package Details

### [npm]

1. For general React environments (with separated store code):
   `'shadergradient' → '/dist/without-store.mjs'`

2. For React (Storized Control UI\*):
   `'shadergradient/with-store' → '/dist/with-store.mjs'`

   e.g) [shadergradient-web.vercel.app/customize](https://shadergradient-web.vercel.app/customize) (Next.js)

### [esm]

1. For ESM-supported React applications: https://esm-shadergradient.onrender.com/without-store.mjs

   For use in the Framer canvas (Storized Control UI\*) : https://esm-shadergradient.onrender.com/with-store.mjs

   e.g) [shadergradient.co/customize](https://www.shadergradient.co/customize) (Framer Sites)

2. For use in Figma plugins (mixed with DB code / Use the same store of the StoreGradient): https://esm-shadergradient.onrender.com/with-store.mjs

   (All ESM modules are dynamically served based on client ips. We call it as "ESM Editor" and used it for dev purposes.)

\* Storized Control UI: `with-store.mjs` includes store codes (zustand) that is also used on the control UIs. So can sync states of gradient & controls without adding any codes.

# Examples

## Figma

[Figma GIF Example](https://framer.com/projects/shadergradient-co-package-origin--zugKWPH3hb4TzPLbtN8y-aV7Di?node=v1ySO756L)

## Framer

[Framer Remix (Login required)](https://framer.com/projects/new?duplicate=sJitbgOn6on6Savojbyk)

## React

- CRA Starter: [CodeSandbox](https://codesandbox.io/p/sandbox/github/ruucm/shadergradient/tree/main/apps/example-cra?file=%2Fsrc%2FApp.tsx)
- Next.js Starter (App Router): [CodeSandbox](https://codesandbox.io/p/sandbox/github/ruucm/shadergradient/tree/main/apps/example-nextjs-approuter)
- Next.js Starter: [CodeSandbox](https://codesandbox.io/p/sandbox/github/ruucm/shadergradient/tree/main/apps/example-nextjs)

# Contributing

## Setup

```
pnpm install
```

## Start development

```
pnpm dev
```

## Release

```
pnpm changeset
```

```
pnpm version-packages
```

then commit changes (message with like v1.x.x)

```
pnpm release
```

# Future Plan

- [ ] Detatch framer-motion peer depenency (Seperate UI & Store Package)
- [x] Figma GIF Support
- [ ] More Shaders

# License

MIT © [ruucm](https://github.com/ruucm), [stone-skipper](https://github.com/stone-skipper)
