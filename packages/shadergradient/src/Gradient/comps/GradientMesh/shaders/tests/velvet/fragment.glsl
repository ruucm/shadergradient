uniform float uC1r;
uniform float uC1g;
uniform float uC1b;

varying vec3 vNormal;
varying float vDistort;

vec3 cosPalette(float t, vec3 a, vec3 b, vec3 c, vec3 d) {
  return a + b * cos(6.28318 * (c * t + d));
}

void main() {
  vec3 brightness = vec3(0.5, 0.5, 0.5);
  vec3 contrast = vec3(0.5, 0.5, 0.5);
  vec3 oscilation = vec3(1.0, 1.0, 1.0);
  vec3 phase = vec3(0.0, 0.1, 0.2);

  // Pass the distortion as input of cospalette
  vec3 color = cosPalette(vDistort, brightness, contrast, oscilation, phase);

  gl_FragColor.rgb = vec3(uC1r, uC1g, uC1b) * color;
  gl_FragColor.a = 1.;
}
