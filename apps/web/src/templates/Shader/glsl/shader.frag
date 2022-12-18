uniform float time;
uniform vec3 color;
varying vec2 vUv;
#pragma glslify: random = require(glsl-random)

void main() {
  gl_FragColor.rgba = vec4(color + sin(time) * 0.2, 1.0);
}
