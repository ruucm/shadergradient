const fetch = require('node-fetch')

exports.getDevIPs = async () => {
  const res = await fetch(
    'https://esm-editor-ips.s3.us-west-1.amazonaws.com/dev-ips'
  )
  const text = await res.text()
  return text.split('\n')
}
