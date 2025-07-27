function rgb2y(r, g, b) {
  return r * 0.29889531 + g * 0.58662247 + b * 0.11448223;
}
function rgb2i(r, g, b) {
  return r * 0.59597799 - g * 0.2741761 - b * 0.32180189;
}
function rgb2q(r, g, b) {
  return r * 0.21147017 - g * 0.52261711 + b * 0.31114694;
}

export function colorDifferenceYIQSquared(yiqA, yiqB) {
  const y = yiqA[0] - yiqB[0];
  const i = yiqA[1] - yiqB[1];
  const q = yiqA[2] - yiqB[2];
  const a = alpha(yiqA) - alpha(yiqB);
  return y * y * 0.5053 + i * i * 0.299 + q * q * 0.1957 + a * a;
}

function alpha(array) {
  return array[3] != null ? array[3] : 0xff;
}

export function colorDifferenceYIQ(yiqA, yiqB) {
  return Math.sqrt(colorDifferenceYIQSquared(yiqA, yiqB));
}

export function colorDifferenceRGBToYIQSquared(rgb1, rgb2) {
  const [r1, g1, b1] = rgb1;
  const [r2, g2, b2] = rgb2;
  const y = rgb2y(r1, g1, b1) - rgb2y(r2, g2, b2),
    i = rgb2i(r1, g1, b1) - rgb2i(r2, g2, b2),
    q = rgb2q(r1, g1, b1) - rgb2q(r2, g2, b2);
  const a = alpha(rgb1) - alpha(rgb2);
  return y * y * 0.5053 + i * i * 0.299 + q * q * 0.1957 + a * a;
}

export function colorDifferenceRGBToYIQ(rgb1, rgb2) {
  return Math.sqrt(colorDifferenceRGBToYIQSquared(rgb1, rgb2));
}

export function euclideanDistanceSquared(a, b) {
  var sum = 0;
  var n;
  for (n = 0; n < a.length; n++) {
    const dx = a[n] - b[n];
    sum += dx * dx;
  }
  return sum;
}

export function euclideanDistance(a, b) {
  return Math.sqrt(euclideanDistanceSquared(a, b));
}
