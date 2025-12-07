export function isIOS() {
  if (typeof navigator === 'undefined') return false

  const ua = navigator.userAgent || ''
  const isTouchMac =
    ua.includes('Mac') && typeof navigator.maxTouchPoints === 'number'
      ? navigator.maxTouchPoints > 1
      : false

  return /iPad|iPhone|iPod/.test(ua) || isTouchMac
}

export function isMobileSafari() {
  if (typeof navigator === 'undefined') return false

  const ua = navigator.userAgent || ''
  const ios = isIOS()
  const isSafari = /Safari/.test(ua) && !/CriOS|FxiOS|EdgiOS/.test(ua)

  return ios && isSafari
}
