import { defineConfig } from 'tsup'
import { glsl } from 'esbuild-plugin-glsl'

const plugin = glsl({ minify: true })

export default defineConfig((options): any => {
  return {
    entry: ['src/index.ts'],
    format: ['esm', 'cjs'],
    dts: true,
    minify: !options.watch,
    external: [
      'react',
      '@react-spring/three',
      '@react-three/drei',
      '@react-three/fiber',
      'three',
      'three-stdlib',
    ],
    esbuildPlugins: [plugin],
  }
})
