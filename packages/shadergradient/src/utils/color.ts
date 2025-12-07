function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null
}

function rgbStringToRgb(rgbString) {
  const result = rgbString.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/)
  return result
    ? {
        r: parseInt(result[1]),
        g: parseInt(result[2]),
        b: parseInt(result[3]),
      }
    : null
}

export function colorToRgb(color) {
  if (color.startsWith('#')) {
    return hexToRgb(color)
  } else if (color.startsWith('rgb')) {
    return rgbStringToRgb(color)
  } else {
    throw new Error('Invalid color format')
  }
}

export function formatColor(color = 0) {
  return color / 255
}
