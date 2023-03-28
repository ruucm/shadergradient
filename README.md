# Shader Gradient

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

[CodeSandbox](https://codesandbox.io/s/github/ruucm/shadergradient/tree/main/apps/example-cra)

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

[CodeSandbox](https://codesandbox.io/p/sandbox/zjxeci?file=%2Fsrc%2Fpages%2Findex.jsx)

# Development

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
