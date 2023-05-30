require('dotenv').config()

const fetch = require('node-fetch')

exports.getDevIPs = async () => {
  const res = await fetch(process.env.DEV_IPS_URL)
  const text = await res.text()
  return text.split('\n')
}
