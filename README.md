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

⚠️ **New Version (from v2.0.0)**

```
# with yarn
yarn add three @react-three/fiber @react-spring/three @shadergradient/react
yarn add -D @types/three

# with npm
npm i three @react-three/fiber @react-spring/three @shadergradient/react
npm i -D @types/three

# with pnpm
pnpm add three @react-three/fiber @react-spring/three @shadergradient/react
pnpm add -D @types/three
```

⚠️ **Old Version (v1.x.x)**

```sh
# with yarn
yarn add three @react-three/fiber @react-spring/three shadergradient
yarn add -D @types/three

# with npm
npm i three @react-three/fiber @react-spring/three shadergradient
npm i -D @types/three

# with pnpm
pnpm add three @react-three/fiber @react-spring/three shadergradient
pnpm add -D @types/three
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
  // for both plane and waterPlane type
  cDistance?: number
  // only for sphere type
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
import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react'
import * as reactSpring from '@react-spring/three'

function App() {
  return (
    <ShaderGradientCanvas
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
import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react'
import * as reactSpring from '@react-spring/three'

function App() {
  return (
    <ShaderGradientCanvas
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

### Package Versions

- **without-store.mjs (v2)**:
  - Current version
  - Stateless React components
  - More flexible and easier to integrate into various state management systems
  - Will continue to be developed and improved
- **with-store.mjs (v1)**:
  - Legacy version
  - Includes built-in state management (using Zustand)
  - Useful for quick setup but less flexible
  - Will be maintained but not actively developed

### npm Usage

1. For general React environments (current version, stateless):

   ```
   import { ShaderGradient } from '@shadergradient/react'
   ```

   This imports from `/dist/without-store.mjs`

2. For React with legacy Storized Control UI:

   ```
   import { ShaderGradient } from 'shadergradient/with-store'
   ```

   This imports from `/dist/with-store.mjs`

   Example: [shadergradient-web.vercel.app/customize](https://shadergradient-web.vercel.app/customize) (Next.js)

### ESM Usage

1.  For ESM-supported React applications (current version, stateless):
    `https://esm-shadergradient.onrender.com/without-store.mjs`
2.  For use in the Framer canvas (legacy Storized Control UI):
    `https://esm-shadergradient.onrender.com/with-store.mjs`
    Example: [shadergradient.co/customize](https://www.shadergradient.co/customize) (Framer Sites)
3.  For use in Figma plugins:
    `https://esm-shadergradient.onrender.com/with-store.mjs`
    This version is mixed with DB code and uses the same store as StoreGradient.

Note: All ESM modules are dynamically served based on client IPs. We refer to this system as "ESM Editor" and use it for development purposes.

### Source Code Structure and Version Management

```
shadergradient/
├─ src/
│  ├─ (current version code)
├─ src-dev/
   ├─ (previously used for staging new features)

```

The `src` and `src-dev` folders exist only within the shadergradient package directory. Previously, `src-dev` was used as a staging area for new versions due to version management limitations in Framer.

However, we are phasing out this approach:

1. The `src-dev` folder is no longer actively used for development.
2. We will no longer maintain separate `src` and `src-dev` directories for version management.
3. Future version management and development will be handled directly within the Framer project.

This change will simplify our development process and align it more closely with standard practices. All new features and updates will be developed and tested within the Framer project environment, ensuring better integration and easier maintenance.

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

```sh
# Release to npm
pnpm release

# Release it as ES Module (Hosted by GitHub Pages)
git push origin main
```

# Future Plan

- [x] Detatch framer-motion peer depenency (Seperate UI & Store Package)
- [x] Figma GIF Support
- [ ] More Shaders (Metalic, Glass, etc.)
- [x] Three.js version upgrade
- [x] Separate framer component bundles & shader gradient bundles
- [ ] Separate shader codes as a separate package, and make it reusable for JS, Vue, etc.
- [ ] Framer Plugin

# License

MIT © [ruucm](https://github.com/ruucm), [stone-skipper](https://github.com/stone-skipper)
