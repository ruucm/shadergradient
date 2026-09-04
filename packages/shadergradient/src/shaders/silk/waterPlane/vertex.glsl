// Silk WaterPlane Vertex Shader - Apple-style flowing silk
// Domain-warped noise displaces the surface into soft folds, and the normal is
// rebuilt from the displaced surface so light flows along the folds.

// #pragma glslify: cnoise3 = require(glsl-noise/classic/3d) 
vec3 mod289(vec3 x)
{
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 mod289(vec4 x)
{
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute(vec4 x)
{
  return mod289(((x*34.0)+1.0)*x);
}

vec4 taylorInvSqrt(vec4 r)
{
  return 1.79284291400159 - 0.85373472095314 * r;
}

vec3 fade(vec3 t) {
  return t*t*t*(t*(t*6.0-15.0)+10.0);
}

float cnoise(vec3 P)
{
  vec3 Pi0 = floor(P); // Integer part for indexing
  vec3 Pi1 = Pi0 + vec3(1.0); // Integer part + 1
  Pi0 = mod289(Pi0);
  Pi1 = mod289(Pi1);
  vec3 Pf0 = fract(P); // Fractional part for interpolation
  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
  vec4 iy = vec4(Pi0.yy, Pi1.yy);
  vec4 iz0 = Pi0.zzzz;
  vec4 iz1 = Pi1.zzzz;

  vec4 ixy = permute(permute(ix) + iy);
  vec4 ixy0 = permute(ixy + iz0);
  vec4 ixy1 = permute(ixy + iz1);

  vec4 gx0 = ixy0 * (1.0 / 7.0);
  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
  gx0 = fract(gx0);
  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
  vec4 sz0 = step(gz0, vec4(0.0));
  gx0 -= sz0 * (step(0.0, gx0) - 0.5);
  gy0 -= sz0 * (step(0.0, gy0) - 0.5);

  vec4 gx1 = ixy1 * (1.0 / 7.0);
  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
  gx1 = fract(gx1);
  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
  vec4 sz1 = step(gz1, vec4(0.0));
  gx1 -= sz1 * (step(0.0, gx1) - 0.5);
  gy1 -= sz1 * (step(0.0, gy1) - 0.5);

  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
  g000 *= norm0.x;
  g010 *= norm0.y;
  g100 *= norm0.z;
  g110 *= norm0.w;
  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
  g001 *= norm1.x;
  g011 *= norm1.y;
  g101 *= norm1.z;
  g111 *= norm1.w;

  float n000 = dot(g000, Pf0);
  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
  float n111 = dot(g111, Pf1);

  vec3 fade_xyz = fade(Pf0);
  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); 
  return 2.2 * n_xyz;
}

//-------- start here ------------

varying vec3 vNormal;
varying float displacement;
varying vec3 vPos;
varying float vDistort;
varying vec2 vUv;
varying float vSilk; // large-scale warp field, drives the color flow
varying float vFold; // fine folds, drives the thread-like sheen

uniform float uTime;
uniform float uSpeed;
uniform float uLoop;
uniform float uLoopDuration;
uniform float uLoadingTime;
uniform float uNoiseDensity;
uniform float uNoiseStrength;

// Time-animated noise that stays seamless when uLoop is on: the time axis is
// replaced by a circle in noise space (same trick as the defaults shader).
float silkNoise(vec3 p, float t) {
  if (uLoop > 0.5) {
    float angle = (uTime / uLoopDuration) * 6.28318530718;
    float radius = 5.0 * uSpeed;

    vec3 offset0 = vec3(cos(angle) * radius, sin(angle) * radius, 0.0);
    vec3 offset1 = vec3(cos(angle + 1.57079632679) * radius, sin(angle + 1.57079632679) * radius, 0.0);
    vec3 offset2 = vec3(cos(angle + 3.14159265359) * radius, sin(angle + 3.14159265359) * radius, 0.0);
    vec3 offset3 = vec3(cos(angle + 4.71238898038) * radius, sin(angle + 4.71238898038) * radius, 0.0);

    float w0 = (cos(angle) + 1.0) * 0.5;
    float w1 = (cos(angle + 1.57079632679) + 1.0) * 0.5;
    float w2 = (cos(angle + 3.14159265359) + 1.0) * 0.5;
    float w3 = (cos(angle + 4.71238898038) + 1.0) * 0.5;
    float totalWeight = w0 + w1 + w2 + w3;

    float blended = (cnoise(p + offset0) * w0 + cnoise(p + offset1) * w1 +
                     cnoise(p + offset2) * w2 + cnoise(p + offset3) * w3) / totalWeight;
    return blended * 1.5;
  }
  return cnoise(p + t);
}

// Domain-warped height field: q warps r, r warps the folds.
// Returns (height, silk, fold)
vec3 silkField(vec3 p, float t) {
  // squash the domain so the folds stretch into long ribbons instead of blobs
  vec3 q = p * uNoiseDensity * vec3(0.2, 0.46, 0.32);
  float warp = silkNoise(q, t);
  float silk = silkNoise(q * 1.15 + warp * 0.9 + vec3(1.7, 9.2, 3.1), t * 0.85);
  float fold = silkNoise(q * 2.6 + silk * 1.4 + vec3(8.3, 2.8, 5.6), t * 0.7);
  float height = warp * 0.55 + silk * 0.45 + fold * 0.18;
  return vec3(height, silk, fold);
}

vec3 silkDisplace(vec3 p, vec3 n, float t, out vec3 field) {
  field = silkField(p, t);
  return p + n * field.x * 0.75 * uNoiseStrength * uLoadingTime;
}

#define STANDARD
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
#ifdef USE_TANGENT
varying vec3 vTangent;
varying vec3 vBitangent;
#endif
#endif
#include <clipping_planes_pars_vertex>
#include <color_pars_vertex>
#include <common>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <morphtarget_pars_vertex>
#include <shadowmap_pars_vertex>
#include <skinning_pars_vertex>
#include <uv2_pars_vertex>
#include <uv_pars_vertex>

void main() {

  #include <beginnormal_vertex>
  #include <color_vertex>
  #include <defaultnormal_vertex>
  #include <morphnormal_vertex>
  #include <skinbase_vertex>
  #include <skinnormal_vertex>
  #include <uv2_vertex>
  #include <uv_vertex>
  #ifndef FLAT_SHADED
    vNormal = normalize(transformedNormal);
  #ifdef USE_TANGENT
    vTangent = normalize(transformedTangent);
    vBitangent = normalize(cross(vNormal, vTangent) * tangent.w);
  #endif
  #endif
  #include <begin_vertex>

  //-------- start vertex ------------
  vUv = uv;
  float t = uTime * uSpeed;

  // displace the vertex and two neighbours along the surface, then rebuild the
  // normal from the displaced triangle so the folds catch the light
  vec3 silkT = vec3(1.0, 0.0, 0.0);
  vec3 silkB = vec3(0.0, 1.0, 0.0);
  float eps = 0.06;

  vec3 field;
  vec3 fieldT;
  vec3 fieldB;
  vec3 pos = silkDisplace(position, normal, t, field);
  vec3 posT = silkDisplace(position + silkT * eps, normal, t, fieldT);
  vec3 posB = silkDisplace(position + silkB * eps, normal, t, fieldB);

  vec3 silkNormal = normalize(cross(posT - pos, posB - pos));

  vPos = pos;
  vDistort = field.x;
  vSilk = field.y;
  vFold = field.z;
  vNormal = normalize(normalMatrix * silkNormal);

  // route the deformed position through <project_vertex> so gl_Position is
  // written exactly once; a second gl_Position write after the chunks breaks
  // on some OpenGL drivers (#157)
  transformed = pos;

  #include <morphtarget_vertex>
  #include <skinning_vertex>
  #include <displacementmap_vertex>
  #include <project_vertex>
  #include <logdepthbuf_vertex>
  #include <clipping_planes_vertex>

  // keep vViewPosition based on the undeformed position so lighting and
  // reflections look exactly as before
  vViewPosition = -(modelViewMatrix * vec4(position, 1.0)).xyz;

  #include <worldpos_vertex>
  #include <shadowmap_vertex>
  #include <fog_vertex>
}
