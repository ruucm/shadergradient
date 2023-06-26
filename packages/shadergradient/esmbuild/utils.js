require('dotenv').config()

exports.getDevIPs = async () => {
  const res = await fetch(process.env.DEV_IPS_URL)
  const text = await res.text()
  return text.split('\n')
}

exports.toDateTime = (secs) => {
  const t = new Date('1970-01-01T00:30:00Z') // Unix epoch start.
  t.setSeconds(secs)
  return t
}
