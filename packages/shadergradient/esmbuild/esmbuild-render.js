const { join } = require('path')
const http = require('http')
const requestIp = require('request-ip')
const { getDevIPs } = require('./utils')
const esbuild = require('esbuild')
const { glsl } = require('esbuild-plugin-glsl')
const { cssPlugin } = require('./plugin.css')
const { dtsPlugin } = require('./plugin.dts')
const fs = require('fs')

// consts
const devOutdir = join(process.cwd(), 'dist/dev')
const prodOutdir = join(process.cwd(), 'dist/prod')
const devPath = join(process.cwd(), 'src-dev')
const prodPath = join(process.cwd(), 'src')

const port = Number(process.env.PORT || 10000)
const devPort = port + 1
const prodPort = port + 2

const servedir = join(process.cwd(), 'dist')

async function serve(mode) {
  const isLocalDev = mode === 'localDev'

  // serve built files locally
  const devServeOpt = { port: devPort, onRequest, servedir }
  await esbuild.serve(devServeOpt, await getBuildOptions(devPath))
  await esbuild.serve(
    { port: prodPort, onRequest, servedir },
    await getBuildOptions(prodPath)
  )

  /**
   * watch changes & build
   *
   * onEnd isn't being triggered when serving (https://github.com/evanw/esbuild/issues/1384) so we need to setup a regular build to get a callback whenever a build is completed
   */
  if (isLocalDev) await localBuild()

  // start server
  const server = http.createServer((req, res) => {
    requestIp.mw()(req, res, async () => {
      const clientIp = req.clientIp
      console.log('clientIp', clientIp)
      const devIPs = await getDevIPs()
      console.log('devIPs', devIPs)

      const isDev = isLocalDev || devIPs.includes(clientIp)
      console.log('isDev', isDev)

      if (req.url === '/debug') {
        res.writeHead(200, { 'Content-Type': 'text/plain' })
        res.end(
          `Your IP address is: ${clientIp} / mode: ${mode} / isDev: ${isDev}`
        )
      } else {
        // serve built files publically
        const proxyOptions = {
          hostname: '0.0.0.0',
          port: isDev ? devPort : prodPort,
          path: req.url,
          method: req.method,
          headers: req.headers,
        }
        const proxyReq = http.request(proxyOptions, (proxyRes) => {
          // If esbuild returns "not found", send a custom 404 page
          if (proxyRes.statusCode === 404) {
            res.writeHead(404, { 'Content-Type': 'text/html' })
            res.end(`<h1>A custom 404 page</h1>`)
            return
          }

          // Otherwise, forward the response from esbuild to the client
          res.writeHead(proxyRes.statusCode, proxyRes.headers)
          proxyRes.pipe(res, { end: true })
        })

        // Forward the body of the request to esbuild
        req.pipe(proxyReq, { end: true })
      }
    })
  })

  server.listen(port, () => {
    console.log(`Server listening on port ${port}`)
  })
}

async function localBuild() {
  await esbuild.build({
    outdir: servedir,
    ...(await getBuildOptions(devPath)),
    watch: {
      onRebuild(error, result) {
        // io.emit('build')
      },
    },
  })
}

async function build() {
  const devResult = await esbuild.build({
    outdir: devOutdir,
    metafile: true,
    ...(await getBuildOptions(devPath)),
  })
  const prodResult = await esbuild.build({
    outdir: prodOutdir,
    metafile: true,
    ...(await getBuildOptions(prodPath)),
  })

  fs.writeFileSync(
    './dist/meta-devResult.json',
    JSON.stringify(devResult.metafile)
  )
  fs.writeFileSync(
    './dist/meta-prodResult.json',
    JSON.stringify(prodResult.metafile)
  )

  console.log(`Build done`)
}

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

async function getBuildOptions(path) {
  const isDev = path === devPath
  console.log('path', path)
  console.log('isDev - getBuildOptions', isDev)

  return {
    entryPoints: [
      `${path}/index.ts`,
      `${path}/client.ts`,
      `${path}/ui.ts`,
      `${path}/with-store.ts`,
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
    plugins: [cssPlugin({ inject: true }), glsl({ minify: true }), dtsPlugin()],
  }
}

let [a, b, command, mode] = process.argv

console.log('mode -  process.argv', mode)

if (command === 'serve') {
  serve(mode)
} else if (command === 'build') {
  build()
} else {
  console.log(`Usage:\n  $ esbuild serve src 8000\n  $ esbuild build src dist`)
}
