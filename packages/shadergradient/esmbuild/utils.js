require('dotenv').config()

exports.getDevIPs = async () => {
  const res = await fetch(process.env.DEV_IPS_URL)
  const text = await res.text()
  return text.split('\n')
}
