const http = require('http')
const requestIp = require('request-ip')
const { getDevIPs } = require('./utils')
const { resolve, extname, join, relative } = require('path')
const fs = require('fs')

const debugESM = false
const port = Number(process.env.PORT || 10000)

function main() {
  // start server
  const server = http.createServer((req, res) => {
    requestIp.mw()(req, res, async () => {
      const clientIp = req.clientIp
      const devIPs = await getDevIPs()
      const isDev = devIPs.includes(clientIp)

      const { url } = req

      if (debugESM) {
        console.log('clientIp', clientIp)
        console.log('devIPs', devIPs)
        console.log('isDev', isDev)
        console.log('url ', url)
      }

      if (url === '/') {
        // Get the current directory
        const directoryPath = resolve(__dirname, '../dist')

        // Read the files in the directory
        const fileLinks = getFileLinks(directoryPath)

        res.setHeader('Content-Type', 'text/html')
        res.setHeader('Cache-Control', 'public, max-age=86400')

        res.end(
          `home!<br/><br/>Your IP address is: ${clientIp}${
            isDev ? ` (You're in DEV mode.)` : ''
          }<br/><br/><br/><br/>` + fileLinks.join('<br>')
        )
      } else {
        // Resolve the file path based on the requested URL
        const fileName = url.substring(1)
        const extension = extname(fileName)

        let contentType = 'text/plain'
        if (extension === '.mjs') contentType = 'application/javascript'
        else if (extension === '.css') contentType = 'text/css'

        let directory = '../dist'
        if (extension === '.mjs')
          directory = isDev ? '../dist/dev' : '../dist/prod'

        const filePath = resolve(__dirname, directory, url.slice(1))

        if (debugESM) {
          console.log({ fileName, extension })
          console.log('filePath', filePath)
        }

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

function getFileLinks(directoryPath, currentPath = '') {
  let fileLinks = []

  const files = fs.readdirSync(directoryPath)

  files.forEach((file) => {
    const filePath = join(directoryPath, file)
    const stat = fs.statSync(filePath)

    const relativeFilePath = join(currentPath, file)

    if (stat.isDirectory()) {
      const nestedFileLinks = getFileLinks(filePath, relativeFilePath)
      fileLinks = fileLinks.concat(nestedFileLinks)
    } else {
      const fileUrl = `/${relative(__dirname, filePath)}`
      const fileLink = `<a href="${fileUrl}">${relativeFilePath}</a>`
      fileLinks.push(fileLink)
    }
  })

  return fileLinks
}

main()
