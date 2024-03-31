import { defineConfig } from 'tsup'
import { glsl } from 'esbuild-plugin-glsl'

const plugin = glsl({ minify: true })

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  watch: true,
  dts: true,
  external: ['react'],

  // @ts-ignore
  esbuildPlugins: [plugin],
})
