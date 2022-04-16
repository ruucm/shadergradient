  uniform float time;
  uniform vec3 color;
  varying vec2 vUv;
  #pragma glslify: random = require(glsl-random)

  void main() {
    gl_FragColor.rgba = vec4(0.5 + 0.3 * sin(vUv.yxx + time) + color, 1.0);
    // gl_FragColor.rgba = vec4(vec3(0.), 1.);
  }
