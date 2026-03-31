# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

ShaderGradient is a customizable 3D animated gradient library for React, built on Three.js and React Three Fiber. It ships as a pnpm monorepo with two npm packages plus several apps (Figma plugin, Framer plugin, example apps).

## Common Commands

```bash
pnpm install              # Install all workspace dependencies
pnpm dev                  # Run all dev servers (Turbo orchestrated)
pnpm build                # Build all packages
pnpm lint                 # Lint all packages
pnpm format               # Prettier format all TS/TSX/MD files
pnpm clean                # Clean all build outputs

# Release workflow
pnpm changeset            # Create a changeset for version bump
pnpm version-packages     # Apply changeset versions
pnpm release              # Build and publish to npm
```

Individual package dev:
```bash
pnpm --filter=@shadergradient/react dev     # Dev the core renderer
pnpm --filter=ui dev                         # Dev the UI package
pnpm --filter=@shadergradient/react build   # Build just the core package
```

## Monorepo Structure

- **`packages/shadergradient`** — `@shadergradient/react` (v2.x): Core renderer. ESM-only. Exports `ShaderGradient`, `ShaderGradientCanvas`, types, presets, and utils. Built with tsup. No built-in store or UI controls.
- **`packages/ui`** — `@shadergradient/ui` (not published to npm): Stateless UI/control components for Framer/Figma. ESM+CJS. Uses Zustand for state, Tailwind for styling. Built with tsup + tailwindcss CLI.
- **`packages/tsconfig`**, **`packages/eslint-config-custom`**, **`packages/tailwind-config`** — Shared configs.
- **`apps/figma-plugin`** — Figma plugin (Webpack).
- **`apps/framer-plugin`** — Framer plugin (Vite).
- **`apps/example-nextjs-dev`** — Next.js dev playground (port 3004).
- **`apps/examples/`** — CRA, Next.js, Vite example starters.

## Core Architecture

### Renderer (`packages/shadergradient/src/`)

The `ShaderGradient` component is composed of sub-modules in `src/ShaderGradient/`:
- **Mesh/** — Three.js geometry and custom shader materials. Supports 3 mesh types: `plane`, `sphere`, `waterPlane`.
- **Controls/** — Camera controls via `camera-controls` library, spring-based animation with `@react-spring/three`.
- **Lights/** — Two light modes: `3d` (directional lights) or `env` (environment map presets: city/dawn/lobby).
- **PostProcessing/** — Effects: halftone pass, grain.
- **Axis/** — Debug gizmo viewport.

### Shader System (`src/shaders/`)

GLSL shaders (`.vert`/`.frag` files) are loaded at build time via a custom esbuild plugin in `tsup.config.ts`. Each shader variant has vertex and fragment files.

### Configuration Model

Gradients can be configured via props or URL query strings (`control='query'` with `urlString` prop). The `GradientT` type in `src/types.ts` defines all parameters (mesh, camera, lighting, animation, colors).

### Dev Hot Reload

In dev mode, `tsup.config.ts` starts a Socket.io server (port 8001) and HTTP file server (port 8000) to enable live reload of the built output in consuming apps.

## Code Style

- Prettier: single quotes, no semicolons, JSX single quotes, 2-space indent, 80 char width
- TypeScript strict mode
- React 18/19 compatible (peer dependency range)

## Deployment

GitHub Actions (`.github/workflows/deploy.yml`) builds Framer and UI bundles on push/PR to `main`, then publishes to the `pages` branch for GitHub Pages hosting (ESM distribution for Framer/Figma).

## Key Dependencies

- `three` + `@react-three/fiber` — 3D rendering
- `camera-controls` — Camera manipulation
- `@react-spring/three` — Animation
- `zustand` — State management (must be external in core package builds since R3F depends on it)
- `query-string` — URL-based gradient configuration
- `tsup` — TypeScript bundling with custom GLSL esbuild plugin
