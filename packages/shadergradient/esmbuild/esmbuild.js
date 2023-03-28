const { join, resolve } = require('path')
const esbuild = require('esbuild')
const { glsl } = require('esbuild-plugin-glsl')
const { cssPlugin } = require('./plugin.css')

const color = (n, v) => `\x1b[${n}m${v}\x1b[0m`
const defaultPath = join(process.cwd(), 'src')
const defaultOutdir = join(process.cwd(), 'dist')

async function getBuildOptions(path) {
  return {
    entryPoints: [
      `${defaultPath}/index.ts`,
      `${defaultPath}/client.ts`,
      `${defaultPath}/ui.ts`,
    ],
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

async function build(path = defaultPath, outdir = defaultOutdir) {
  outdir = resolve(outdir)
  await esbuild.build({
    outdir,
    ...(await getBuildOptions(path)),
  })
  console.log(`Build done at ${outdir}`)
}

async function serve(path = defaultPath, port = 8000) {
  function onRequest(info) {
    const status = color(
      info.status.toString().startsWith('2') ? 32 : 31,
      info.status
    )
    const line = color(
      37,
      `${info.method} ${status} ${info.path} [${info.timeInMS}ms]`
    )
    console.log(line)
  }

  await esbuild.serve(
    { port, onRequest, servedir: defaultOutdir },
    await getBuildOptions(path)
  )

  /**
   * watch changes & build
   *
   * onEnd isn't being triggered when serving (https://github.com/evanw/esbuild/issues/1384) so we need to setup a regular build to get a callback whenever a build is completed
   */
  await esbuild.build({
    outdir: resolve(defaultOutdir),
    ...(await getBuildOptions(path)),
    watch: {
      onRebuild(error, result) {
        io.emit('build')
      },
    },
  })
  console.log(`Server listening at http://127.0.0.1:${port}`)
}

let [a, b, command, path, option] = process.argv

path = path && resolve(join(process.cwd(), path))

if (command === 'serve') {
  serve(path, option && parseInt(option))
} else if (command === 'build') {
  build(path, option && resolve(join(process.cwd(), option)))
} else {
  console.log(`Usage:\n  $ esbuild serve src 8000\n  $ esbuild build src dist`)
}
