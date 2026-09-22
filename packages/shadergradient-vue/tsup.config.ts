import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm'],
  dts: true,
  clean: true,
  external: ['vue', '@tresjs/core', 'three'],
  // Shared shaders/presets are bundled from source; the React package doesn't export them.
  noExternal: [/^@shadergradient\/react\//],
  loader: { '.glsl': 'text' },
})
