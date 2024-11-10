export function degToRad(deg: number) {
  return deg * (Math.PI / 180)
}

export * from './color'

// degree to radian
export function dToR(d: number) {
  return (d / 180) * Math.PI
}
export function dToRArr(degrees) {
  return degrees.map((d) => dToR(d))
}

export function formatUrlString(urlString) {
  // remove domains (only search params should be left)
  return urlString
    .replace('http://localhost:3001/customize', '')
    .replace('https://shadergradient.co/customize', '')
    .replace('https://www.shadergradient.co/customize', '')
}
