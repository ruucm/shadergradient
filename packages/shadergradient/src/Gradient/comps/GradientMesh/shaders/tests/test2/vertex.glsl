#pragma glslify: cnoise3 = require(glsl-noise/classic/3d)

uniform float uTime;
uniform float uSpeed;
uniform float uNoiseDensity;
uniform float uNoiseStrength;

uniform float uFrequency;
uniform float uAmplitude;

varying vec3 vNormal;
varying vec3 vPos;

mat3 rotation3dY(float angle) {
  float s = sin(angle);
  float c = cos(angle);
  return mat3(c, 0.0, -s, 0.0, 1.0, 0.0, s, 0.0, c);
}
vec3 rotateY(vec3 v, float angle) { return rotation3dY(angle) * v; }

void main() {
  float t = uTime * uSpeed;
  float distortion = cnoise3((normal + t) * uNoiseDensity) * uNoiseStrength;

  vec3 pos = position + (normal * distortion);
  float angle = sin(uv.y * uFrequency + t) * uAmplitude;
  pos = rotateY(pos, angle);

  vNormal = normal;
  vPos = pos;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.);
}
