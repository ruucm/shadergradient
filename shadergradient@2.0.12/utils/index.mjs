// src/utils/color.ts
function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}
function rgbStringToRgb(rgbString) {
  const result = rgbString.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
  return result ? {
    r: parseInt(result[1]),
    g: parseInt(result[2]),
    b: parseInt(result[3])
  } : null;
}
function colorToRgb(color) {
  if (color.startsWith("#")) {
    return hexToRgb(color);
  } else if (color.startsWith("rgb")) {
    return rgbStringToRgb(color);
  } else {
    throw new Error("Invalid color format");
  }
}
function formatColor(color = 0) {
  return color / 255;
}

// src/utils/index.ts
function degToRad(deg) {
  return deg * (Math.PI / 180);
}
function dToR(d) {
  return d / 180 * Math.PI;
}
function dToRArr(degrees) {
  return degrees.map((d) => dToR(d));
}
function formatUrlString(urlString) {
  return urlString.replace("http://localhost:3001/customize", "").replace("https://shadergradient.co/customize", "").replace("https://www.shadergradient.co/customize", "");
}
export {
  colorToRgb,
  dToR,
  dToRArr,
  degToRad,
  formatColor,
  formatUrlString
};
