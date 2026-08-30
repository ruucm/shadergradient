import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['test/animationTime.test.ts'],
  clean: true,
  dts: false,
  format: ['cjs'],
  outDir: '.test-dist',
  platform: 'node',
  target: 'node14',
})
