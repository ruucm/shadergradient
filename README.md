# Shader Gradient v2

Customizable 3D, moving gradient for React. The v2 package is lean: it only ships the `ShaderGradient` renderer (and its canvas helper), while the stateless UI pieces now live in the separate `@shadergradient/ui` package.

![Intro](./assets/intro.gif)

# Table of contents

- 📦 [Installation](#installation)
- 📦 [Packages](#packages)
- 💻 [Usage](#usage)
- 📚 [Examples](#examples)
- 🎤 [Conference Talks](#conference-talks)
- 📝 [Contributing](#contributing)
- 🚀 [Future Plan](#future-plan)
- ⚖️ [License](#license)

# Installation

## Figma

[Figma Plugin](https://www.figma.com/community/plugin/1203016883447870818)

## Framer

[Framer Component (Copy this URL and paste it on Framer Canvas)](https://framer.com/m/ShaderGradient-oWuS.js)

## React

Install the core renderer and its peer deps.

```
# with yarn
yarn add @shadergradient/react @react-three/fiber three three-stdlib camera-controls
yarn add -D @types/three

# with npm
npm i @shadergradient/react @react-three/fiber three three-stdlib camera-controls
npm i -D @types/three

# with pnpm
pnpm add @shadergradient/react @react-three/fiber three three-stdlib camera-controls
pnpm add -D @types/three
```

Need the stateless control surfaces? Pull them from the `@shadergradient/ui` package (ESM build used by Framer/Figma), not from `@shadergradient/react`.

### Compatibility matrix

`@shadergradient/react` itself works on React 18 or 19, but the right `@react-three/fiber` version depends on your environment. **For Next.js 15 App Router specifically**, you must use R3F v9 + React 19 — R3F v8 is structurally incompatible with the App Router's vendored React 19 canary (see [#138](https://github.com/ruucm/shadergradient/issues/138) for the full trace).

| Environment                           | React          | @react-three/fiber   | three       |
| ------------------------------------- | -------------- | -------------------- | ----------- |
| **Next 15 — App Router**              | `^19.0.0`      | `^9.0.0`             | `>=0.158.0` |
| Next 14 / Next 15 Pages / Vite / etc. | `^18` or `^19` | matching `8.x`/`9.x` | `>=0.158.0` |

No `next.config` aliases or `transpilePackages` entries are required when you stay on these combinations.

## Vue 3 and Nuxt

Use `ShaderGradient` inside `ShaderGradientCanvas` from `@shadergradient/vue`.
See [installation and Vue/Nuxt usage](./packages/shadergradient-vue/README.md)
for installation commands, component examples, SSR fallbacks, and supported
dependency versions.

# Packages

- `@shadergradient/react`
  - Ships only the renderer: `ShaderGradient` and `ShaderGradientCanvas`.
  - No built-in store or controls. Use your own state or pair with `@shadergradient/ui`.
- `@shadergradient/ui`
  - Stateless UI/control components extracted from the core package for Framer/Figma usage.
  - Not published to npm; consumed as an ESM bundle (see `packages/ui`).
- `@shadergradient/vue`
  - Vue 3 renderer using TresJS, with an SSR-safe canvas for Nuxt usage.
  - See [Vue setup and Nuxt usage](./packages/shadergradient-vue/README.md).
- `shadergradient-old`
  - Legacy v1 package that bundled store + UI. Keep using this only if you rely on the old with-store build.

# Usage

Drop `ShaderGradient` inside `ShaderGradientCanvas` and drive it with props or a query string.

```tsx
import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react'

function App() {
  return (
    <ShaderGradientCanvas
      style={{ position: 'absolute', inset: 0 }}
      pixelDensity={1.5}
      fov={45}
    >
      <ShaderGradient cDistance={32} cPolarAngle={125} />
    </ShaderGradientCanvas>
  )
}
```

Load settings from a URL (for example, one copied from [shadergradient.co/customize](https://www.shadergradient.co/customize)):

```tsx
<ShaderGradientCanvas>
  <ShaderGradient
    control='query'
    urlString='https://www.shadergradient.co/customize?animate=on&cDistance=3.6&cPolarAngle=90&color1=%2352ff89&color2=%23dbba95&color3=%23d0bce1&lightType=3d&shader=defaults&type=plane&uFrequency=5.5&uSpeed=0.4&uStrength=4'
  />
</ShaderGradientCanvas>
```

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
  range?: 'enabled' | 'disabled' | string
  rangeStart?: number
  rangeEnd?: number
  loop?: 'on' | 'off'
  loopDuration?: number
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
  smoothTime?: number
  cAzimuthAngle?: number
  cPolarAngle?: number
  cDistance?: number
  cameraZoom?: number
  lightType?: '3d' | 'env'
  brightness?: number
  envPreset?: 'city' | 'dawn' | 'lobby'
  grain?: 'on' | 'off'
  grainBlending?: number
  zoomOut?: boolean
  toggleAxis?: boolean
  hoverState?: string
  enableTransition?: boolean
  enableCameraUpdate?: boolean
  urlString?: string
  onCameraUpdate?: (updates: Partial<GradientT>) => void
}
```

`ShaderGradientCanvas` also accepts `pixelDensity`, `fov`, `envBasePath`, GL overrides (`preserveDrawingBuffer`, `powerPreference`), and lazy-load controls (`lazyLoad`, `threshold`, `rootMargin`).

# Examples

- [Development apps versus standalone starters](./apps/examples/README.md)
- CRA Starter: [CodeSandbox](https://codesandbox.io/p/sandbox/github/ruucm/shadergradient/tree/main/apps/example-cra?file=%2Fsrc%2FApp.tsx)
- Next.js Starter (App Router): [CodeSandbox](https://codesandbox.io/p/sandbox/github/ruucm/shadergradient/tree/main/apps/example-nextjs-approuter)
- Next.js Starter: [CodeSandbox](https://codesandbox.io/p/sandbox/github/ruucm/shadergradient/tree/main/apps/example-nextjs)
- Vite + React 19 Starter: [CodeSandbox](https://codesandbox.io/p/sandbox/github/ruucm/shadergradient/tree/main/apps/examples/example-vite-react)
- [Vue + Vite Starter](./apps/examples/example-vite-vue/README.md)
- [Nuxt Starter](./apps/examples/example-nuxtjs/README.md)

Figma and Framer demos still use the UI package internally:

- [Figma GIF Example](https://framer.com/projects/shadergradient-co-package-origin--zugKWPH3hb4TzPLbtN8y-aV7Di?node=v1ySO756L)
- [Framer Remix (Login required)](https://framer.com/projects/new?duplicate=sJitbgOn6on6Savojbyk)

# Conference Talks

[![FEConf 2024 ShaderGradient](./assets/feconf.png)](https://www.youtube.com/watch?v=CSChpoiRTIY)

# Contributing

For Vue/Nuxt development, testing, and release notes, see the
[Vue contributor guide](./CONTRIBUTING-VUE.md).

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
pnpm version-packages
```

then commit changes (message like v1.x.x)

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
- [x] Framer Plugin
- [ ] Webflow Support
- [ ] Wix Support

# License

MIT © [ruucm](https://github.com/ruucm), [stone-skipper](https://github.com/stone-skipper)
