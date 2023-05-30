const { join } = require('path')
const esbuild = require('esbuild')
const { glsl } = require('esbuild-plugin-glsl')
const { cssPlugin } = require('./plugin.css')

// consts
const devOutdir = join(process.cwd(), 'dist/dev')
const prodOutdir = join(process.cwd(), 'dist/prod')
const devPath = join(process.cwd(), 'src-dev')
const prodPath = join(process.cwd(), 'src')

async function main() {
  await esbuild.build({
    outdir: devOutdir,
    ...(await getBuildOptions(devPath)),
  })
  await esbuild.build({
    outdir: prodOutdir,
    ...(await getBuildOptions(prodPath)),
  })
  console.log(`Build done`)
}

async function getBuildOptions(path) {
  const isDev = path === devPath

  return {
    entryPoints: [
      `${path}/index.ts`,
      `${path}/client.ts`,
      `${path}/ui.ts`,
      isDev && `${path}/isDev.ts`,
    ].filter(Boolean),
    minify: true,
    format: 'esm',
    outExtension: { '.js': '.mjs' }, // need to use .mjs for esm (if it is .js, next.js will try to parse it as commonjs)
    bundle: true,
    external: [
      'react',
      'react/jsx-runtime',
      'react-dom',
      '@react-three/drei',
      '@react-three/drei',
      '@react-three/fiber',
      'three',
      'framer',
      'framer-motion',
      'zustand',
    ],
    plugins: [cssPlugin({ inject: true }), glsl({ minify: true })],
  }
}

main()
