const http = require('http')
const requestIp = require('request-ip')
const { getDevIPs } = require('./utils')
const { resolve, extname } = require('path')
const fs = require('fs')

const port = Number(process.env.PORT || 10000)

function main() {
  // start server
  const server = http.createServer((req, res) => {
    requestIp.mw()(req, res, async () => {
      const clientIp = req.clientIp
      console.log('clientIp', clientIp)
      const devIPs = await getDevIPs()
      console.log('devIPs', devIPs)

      const isDev = devIPs.includes(clientIp)
      console.log('isDev', isDev)

      const { url } = req
      console.log('url ', url)

      if (url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' })
        res.end(`home!
Your IP address is: ${clientIp}${isDev ? ` (You're in DEV mode.)` : ''}`)
      } else {
        // Resolve the file path based on the requested URL
        const fileName = url.substring(1)
        const extension = extname(fileName)
        console.log({ fileName, extension })

        let contentType = 'text/plain'
        if (extension === '.mjs') contentType = 'application/javascript'
        else if (extension === '.css') contentType = 'text/css'

        let directory = '../dist'
        if (extension === '.mjs')
          directory = isDev ? '../dist/dev' : '../dist/prod'

        const filePath = resolve(__dirname, directory, url.slice(1))
        console.log('filePath', filePath)

        // Serve the file if it exists; otherwise, respond with a 404 error
        try {
          if (fs.existsSync(filePath)) {
            const fileContent = fs.readFileSync(filePath)

            res.setHeader('Content-Type', contentType)
            // Set the appropriate headers to allow cross-origin requests
            res.setHeader('Cache-Control', 'public, max-age=86400')
            res.setHeader('Access-Control-Allow-Origin', '*') // Allow requests from any origin
            res.setHeader('Access-Control-Allow-Methods', 'GET') // Allow only GET requests
            res.end(fileContent)
          } else {
            res.writeHead(404, { 'Content-Type': 'text/plain' })
            res.end('File not found.')
          }
        } catch (error) {
          console.log('error', error)
          res.writeHead(500, { 'Content-Type': 'text/plain' })
          res.end('Internal server error')
        }
      }
    })
  })

  server.listen(port, () => {
    console.log(`Server listening on port ${port}`)
  })
}

main()
