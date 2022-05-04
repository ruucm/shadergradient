#pragma glslify: halftone = require('glsl-halftone')

uniform float uC1r;
uniform float uC1g;
uniform float uC1b;
uniform float uC2r;
uniform float uC2g;
uniform float uC2b;
uniform float uC3r;
uniform float uC3g;
uniform float uC3b;

varying vec3 vNormal;
varying float vDistort;
varying vec2 vUv;
varying vec3 vPos;

vec3 cosPalette(float t, vec3 a, vec3 b, vec3 c, vec3 d) {
  return a + b * cos(6.28318 * (c * t + d));
}

void main() {
  vec3 brightness = vec3(0.5, 0.5, 0.5);
  vec3 contrast = vec3(0.5, 0.5, 0.5);
  vec3 oscilation = vec3(1.0, 1.0, 1.0);
  vec3 phase = vec3(0.0, 0.1, 0.2);

  // Pass the distortion as input of cospalette
  vec3 distortionShadow = cosPalette(vDistort, brightness, contrast, oscilation, phase);

  vec3 color1 = vec3(uC1r, uC1g, uC1b);
  vec3 color2 = vec3(uC2r, uC2g, uC2b);
  vec3 color3 = vec3(uC3r, uC3g, uC3b);
  vec3 diffuseColor = vec3(
      mix(mix(color1, color3, smoothstep(-3.0, 3.0, vPos.x)), color2, vPos.z));

  vec2 st = vUv;
  gl_FragColor.rgb = halftone(diffuseColor, st, 700.0) * distortionShadow;
}
