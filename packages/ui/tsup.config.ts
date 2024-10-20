import { defineConfig } from 'tsup'
import http from 'http'
import fs from 'fs'
import path from 'path'

export default defineConfig((options): any => {
  const isDev = options.watch

  return {
    entry: ['src/index.ts'],
    format: ['esm', 'cjs'],
    dts: true,
    minify: !isDev,
    external: ['react', 'framer-motion'],
    async onSuccess() {
      if (!isDev) return

      // Create the HTTP server
      const server = http.createServer((req, res) => {
        // Construct the file path
        let filePath = path.join(
          __dirname,
          'dist',
          req.url === '/' ? 'index.html' : req.url
        )
        let extname = String(path.extname(filePath)).toLowerCase()

        // Map file extensions to Content-Type
        const mimeTypes = {
          '.js': 'text/javascript',
          '.mjs': 'application/javascript',
          '.css': 'text/css',
          '.html': 'text/html',
        }

        let contentType = mimeTypes[extname] || 'application/octet-stream'

        console.log('contentType', contentType)

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
      server.listen(9000)
      return () => {
        server.close()
      }
    },
  }
})
