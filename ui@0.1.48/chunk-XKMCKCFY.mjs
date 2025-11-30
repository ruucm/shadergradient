// src/overrides/FigmaPlugin/lib/rgb-packing.js
function uint32_to_rgba(color) {
  var a = color >> 24 & 255;
  var b = color >> 16 & 255;
  var g = color >> 8 & 255;
  var r = color & 255;
  return [r, g, b, a];
}
function rgba_to_uint32(r, g, b, a) {
  return a << 24 | b << 16 | g << 8 | r;
}
function rgb888_to_rgb565(r, g, b) {
  return r << 8 & 63488 | g << 2 & 992 | b >> 3;
}
function rgba8888_to_rgba4444(r, g, b, a) {
  return r >> 4 | g & 240 | (b & 240) << 4 | (a & 240) << 8;
}
function rgb888_to_rgb444(r, g, b) {
  return r >> 4 << 8 | g & 240 | b >> 4;
}

export {
  uint32_to_rgba,
  rgba_to_uint32,
  rgb888_to_rgb565,
  rgba8888_to_rgba4444,
  rgb888_to_rgb444
};
