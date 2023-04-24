const { join, resolve } = require('path')
const esbuild = require('esbuild')
const { glsl } = require('esbuild-plugin-glsl')
const { cssPlugin } = require('./plugin.css')
const { dtsPlugin } = require('./plugin.dts')

const http = require('http')
const requestIp = require('request-ip')

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
    plugins: [cssPlugin({ inject: true }), glsl({ minify: true }), dtsPlugin()],
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

const devPath = join(process.cwd(), 'src-dev')
const prodPath = join(process.cwd(), 'src')
const devPort = 8000
const prodPort = 8001
const proxyPort = 10000

const devIPs = [
  '192.168.1.100',
  '192.168.1.101',
  '127.0.0.1',
  '1.224.28.250', // liverhill
  '118.235.7.164', // iPhone 14 Pro
]

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

  // await esbuild.serve(
  //   { port, onRequest, servedir: defaultOutdir },
  //   await getBuildOptions(path)
  // )

  await esbuild.serve(
    { port: devPort, onRequest },
    await getBuildOptions(devPath)
  )
  await esbuild.serve(
    { port: prodPort, onRequest },
    await getBuildOptions(prodPath)
  )

  // Then start a proxy server on port proxyPort
  http
    .createServer((req, res) => {
      requestIp.mw()(req, res, () => {
        const clientIp = req.clientIp
        console.log('clientIp', clientIp)
        const isDev = devIPs.includes(clientIp)
        console.log('isDev', isDev)
        const options = {
          hostname: '0.0.0.0',
          port: isDev ? 8000 : 8001,
          path: req.url,
          method: req.method,
          headers: req.headers,
        }

        // Forward each incoming request to esbuild
        const proxyReq = http.request(options, (proxyRes) => {
          // If esbuild returns "not found", send a custom 404 page
          if (proxyRes.statusCode === 404) {
            res.writeHead(404, { 'Content-Type': 'text/html' })
            res.end('<h1>A custom 404 page</h1>')
            return
          }

          // Otherwise, forward the response from esbuild to the client
          res.writeHead(proxyRes.statusCode, proxyRes.headers)
          proxyRes.pipe(res, { end: true })
        })

        // Forward the body of the request to esbuild
        req.pipe(proxyReq, { end: true })
      })
    })
    .listen(proxyPort)

  console.log(`Server listening at http://127.0.0.1:${proxyPort}`)
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
