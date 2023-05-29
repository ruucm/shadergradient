const { join, resolve } = require('path')
const esbuild = require('esbuild')
const { glsl } = require('esbuild-plugin-glsl')
const { cssPlugin } = require('./plugin.css')
const { dtsPlugin } = require('./plugin.dts')

const http = require('http')
const requestIp = require('request-ip')
const { getDevIPs } = require('./utils')

const color = (n, v) => `\x1b[${n}m${v}\x1b[0m`
// const defaultPath = join(process.cwd(), 'src')
const defaultOutdir = join(process.cwd(), 'dist')

const devPath = join(process.cwd(), 'src-dev')
const prodPath = join(process.cwd(), 'src')

async function build(outdir = defaultOutdir) {
  outdir = resolve(outdir)
  await esbuild.build({
    outdir,
    ...(await getBuildOptions(prodPath)),
  })
  console.log(`Build done at ${outdir}`)
}

console.log('process.env.PORT.', process.env.PORT)
const targetPort = Number(process.env.PORT || 10000)
console.log('targetPort', targetPort)
const devPort = targetPort + 1
const prodPort = targetPort + 2
console.log({ devPort, prodPort })

async function serve(mode) {
  console.log('mode - serve', mode)
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

  const devServeOpt = { port: devPort, onRequest, servedir: defaultOutdir }
  console.log('devServeOpt', devServeOpt)
  await esbuild.serve(devServeOpt, await getBuildOptions(devPath))
  await esbuild.serve(
    { port: prodPort, onRequest, servedir: defaultOutdir },
    await getBuildOptions(prodPath)
  )

  // Then start a conditional server on port targetPort
  http
    .createServer((req, res) => {
      requestIp.mw()(req, res, async () => {
        const clientIp = req.clientIp
        console.log('clientIp', clientIp)
        const devIPs = await getDevIPs()
        console.log('devIPs', devIPs)

        const isDev = mode === 'devMode' || devIPs.includes(clientIp)
        console.log('isDev', isDev)

        // Forward each incoming request to esbuild
        const debugInfo = {
          mode,
          clientIp,
          devIPs,
          isDev,
        }
        if (req.url === '/debug') {
          // Print debug information
          res.writeHead(200, { 'Content-Type': 'text/html' })
          res.end(`<pre>${JSON.stringify(debugInfo, null, 4)}</pre>`)
          return
        } else {
          // conditional server
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
    .listen(targetPort)

  console.log(`Server listening at http://127.0.0.1:${targetPort}`)
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
  build(mode)
} else {
  console.log(`Usage:\n  $ esbuild serve src 8000\n  $ esbuild build src dist`)
}
