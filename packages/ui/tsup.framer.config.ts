import { defineConfig } from 'tsup'
import http from 'http'
import fs from 'fs'
import path from 'path'
import { Server as SocketIO } from 'socket.io'
import { globby } from 'globby'
import commonjsPlugin from '@chialab/esbuild-plugin-commonjs'

// Add this GLSL loader plugin
const glslLoader = {
  name: 'glsl-loader',
  setup(build) {
    build.onLoad({ filter: /\.(glsl|vs|fs|vert|frag)$/ }, async (args) => {
      const contents = await fs.promises.readFile(args.path, 'utf8')
      return {
        contents: `export default ${JSON.stringify(contents)};`,
        loader: 'js',
      }
    })
  },
}

export default defineConfig(async (options) => {
  const isDev = options.watch
  let io: SocketIO | null = null

  if (isDev) {
    // Create socket server
    const socketServer = http.createServer()
    io = new SocketIO(socketServer, {
      cors: {
        origin: '*',
        credentials: true,
        methods: ['GET', 'POST', 'OPTIONS', 'PUT', 'PATCH', 'DELETE', 'HEAD'],
      },
    })
    socketServer.listen(8001, '0.0.0.0')
  }

  const basePath = path.join(process.cwd(), 'src')

  return {
    entry: await globby([`${basePath}/**/*.(t|j)s*`, `!${basePath}/**/*.d.ts`]),
    platform: 'browser',
    format: ['esm'],
    dts: {
      entry: 'src/index.ts',
    },
    minify: false, // disable minify for framer (minified build has react-reconciler error)
    clean: true,

    // internal bundles
    // ['@react-spring/three', '@react-three/fiber', '@react-three/drei', 'three']

    external: ['react', 'framer', 'react-reconciler'], // react-reconciler need to be external, cause esbuild can't resolve it (Error "Dynamic require of "react" is not supported")
    noExternal: ['@supabase/supabase-js'],
    esbuildPlugins: [
      glslLoader,
      commonjsPlugin(), // this is for zustand
    ],
    async onSuccess() {
      if (!isDev) return

      io?.emit('build')

      // Create the HTTP server
      const server = http.createServer((req, res) => {
        // Construct the file path
        let filePath = path.join(
          __dirname,
          'dist',
          req.url === '/' || !req.url ? 'index.html' : req.url
        )
        let extname = String(path.extname(filePath)).toLowerCase()
        // need to remove query from extname
        extname = extname.split('?')[0]
        filePath = filePath.split('?')[0]

        console.log('extname', extname)
        console.log('filePath', filePath)

        // Map file extensions to Content-Type
        const mimeTypes = {
          '.js': 'text/javascript',
          '.mjs': 'application/javascript',
          '.css': 'text/css',
          '.html': 'text/html',
        }

        let contentType = mimeTypes[extname] || 'application/octet-stream'

        // Set CORS headers
        res.setHeader('Access-Control-Allow-Origin', '*') // Adjust as necessary for security

        // Check if the file exists and serve it, otherwise serve a 404 page
        fs.readFile(filePath, (error, content) => {
          if (error) {
            if (error.code === 'ENOENT') {
              // File not found
              res.writeHead(404, { 'Content-Type': 'text/html' })
              res.end('<h1>404 Not Found</h1>', 'utf-8')
            } else {
              // Some server error
              res.writeHead(500)
              res.end(`Server error: ${error.code}`, 'utf-8')
            }
          } else {
            // If no error, serve the file
            res.writeHead(200, { 'Content-Type': contentType })
            res.end(content, 'utf-8')
          }
        })
      })
      server.listen(8000)
      return () => {
        server.close()
      }
    },
  }
})
