# ShaderGradient for Vue 3

Vue components backed by TresJS and Three.js. The package bundles the existing
ShaderGradient shaders and presets without importing React or React Three Fiber.

## Installation

Requires Vue 3.5, TresJS 4.3, and Three.js 0.169.

```sh
pnpm add @shadergradient/vue vue@^3.5 @tresjs/core@^4.3 three@~0.169.0
pnpm add -D @types/three@~0.169.0
```

## Vue

Use these components in a Vue 3 single-file component. No Nuxt runtime is needed.

```vue
<script setup lang="ts">
import { ShaderGradient, ShaderGradientCanvas } from '@shadergradient/vue'
</script>

<template>
  <ShaderGradientCanvas style="height: 400px" :pixel-density="1.5">
    <ShaderGradient color1="#ff5005" color2="#dbba95" color3="#d0bce1" />
  </ShaderGradientCanvas>
</template>
```

No Tres plugin or Vue compiler custom-element configuration is needed for these
two components. Always give the canvas wrapper a nonzero height.

Import `presets` and pass `v-bind="presets.mint.props"` to `ShaderGradient` to use
an existing preset. Canvas settings such as pixel density and field of view belong
on `ShaderGradientCanvas`, not on `ShaderGradient`.

Query URLs copied from the customizer are supported:

```vue
<ShaderGradient
  control="query"
  url-string="https://www.shadergradient.co/customize?type=waterPlane&color1=%2394ffd1&uSpeed=0.2"
/>
```

Missing query values retain prop defaults. Unknown keys, invalid enumerated values,
and non-finite numbers are ignored.

## Nuxt

No ShaderGradient Nuxt module is required. The canvas wrapper is SSR-safe: it
renders its container and optional `fallback` slot on the server, then creates the
Tres canvas after mounting in the browser. Its gradient slot is never evaluated
on the server.

In a Nuxt page (for example, `app/pages/index.vue` in Nuxt 4):

```vue
<script setup lang="ts">
import { ShaderGradient, ShaderGradientCanvas, presets } from '@shadergradient/vue'
</script>

<template>
  <ShaderGradientCanvas style="height: 400px">
    <ShaderGradient v-bind="presets.mint.props" animate="off" />
    <template #fallback>
      <div style="height: 100%; background: #94ffd1" />
    </template>
  </ShaderGradientCanvas>
</template>
```

This example is static. To animate, bind `animate` to `'on'` or `'off'` and
provide a pause control. The user's reduced-motion preference is respected.
Install the same Vue/Tres/Three dependencies as above; no ShaderGradient Nuxt
module, Tres module, or `ssr: false` setting is required.

For an optional explicit Nuxt client boundary, put the Vue example above in
`components/GradientBackground.client.vue` (under `app/` in Nuxt 4). Use Nuxt's
auto-imported `<GradientBackground />` inside a height-constrained wrapper. Keep
the surrounding page server-rendered; do not disable SSR for the whole site.

## API

`ShaderGradient` accepts reactive props for:

- Geometry: `type` (`plane`, `sphere`, `waterPlane`), position and rotation axes,
  and `wireframe`. Rotations and camera angles are degrees.
- Material: `shader` (`defaults`, `positionMix`, `cosmic`, `glass`), `color1`,
  `color2`, `color3`, `reflection`, and the existing `uTime`, `uSpeed`, `uStrength`,
  `uDensity`, `uFrequency`, and `uAmplitude` uniforms.
- Animation: `animate`, `range`, `rangeStart`, `rangeEnd`, `loop`, `loopDuration`.
  `animate="off"` pauses time; changing `uTime` seeks. Valid loops take precedence
  over ranges. Reduced-motion preferences freeze animation and disable camera
  transitions automatically.
- Camera: `cAzimuthAngle`, `cPolarAngle`, `cDistance`, `cameraZoom`, `zoomOut`,
  `smoothTime`, `enableTransition`. As in React, spheres use a fixed distance of 14
  and `cameraZoom`; planes use `cDistance` and a zoom of 1.
- Lighting: `lightType` (`3d`, `env`), `brightness`, and `envPreset`
  (`city`, `dawn`, `lobby`). Brightness controls ambient lighting in `3d` mode.
- Effects: `grain`, `grainBlending`, `toggleAxis`.
- Configuration: `control` (`props`, `query`), `urlString`.

`@camera-update` emits the camera angles and distance or zoom after camera motion
settles. `@error` emits HDR loading failures. Only the selected HDR is requested;
changing presets or unmounting disposes the texture, including late load results.

`ShaderGradientCanvas` accepts `pixelDensity`, `fov`, `pointerEvents`, `envBasePath`,
`lazyLoad`, `threshold`, `rootMargin`, `preserveDrawingBuffer`, and `powerPreference`.
Standard Vue `class`, `style`, and HTML attributes apply to the outer container.
`envBasePath` can point to a self-hosted directory containing `city.hdr`, `dawn.hdr`,
and `lobby.hdr`; otherwise it uses the same hosted assets as React.

Lazy loading defaults to enabled and unmounts the scene offscreen, releasing GPU
resources. Returning to view creates a fresh scene. Material uniform changes do
not allocate a new material; changing the shader or geometry type does.

The canvas is decorative (`aria-hidden="true"`) and ignores pointer events by
default. Set `pointer-events="auto"` to enable camera gestures. Provide equivalent
keyboard-operable controls for interactive uses. For meaningful images, override
`aria-hidden`, add `role="img"`, and supply an accessible label. Provide a pause
control for continuously animated backgrounds alongside other content.

One `ShaderGradient` owns the camera, environment, and post-processing for one
canvas. Use separate canvases for independent gradients. Framer/Figma tooling and
React UI/store components are not part of the Vue package.
