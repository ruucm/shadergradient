// Ember Vertex Shader - Cracked Molten Crust
//
// A slowly breathing voronoi tessellation splits the surface into plates. The
// plates ride on a low-frequency fbm swell, and the surface is carved down
// along the cell borders so the cracks are real grooves, not just a texture.
// Like `silk`, the normal is rebuilt from the displaced surface with finite
// differences so the plate edges catch the light.

//-------- Hash / noise ------------

vec3 hash3(vec3 p) {
  p = vec3(
    dot(p, vec3(127.1, 311.7, 74.7)),
    dot(p, vec3(269.5, 183.3, 246.1)),
    dot(p, vec3(113.5, 271.9, 124.6))
  );
  return fract(sin(p) * 43758.5453123);
}

// value noise is plenty for the large swell; keeps the vertex stage cheap
float vnoise(vec3 p) {
  vec3 i = floor(p);
  vec3 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(mix(hash3(i + vec3(0, 0, 0)).x, hash3(i + vec3(1, 0, 0)).x, f.x),
        mix(hash3(i + vec3(0, 1, 0)).x, hash3(i + vec3(1, 1, 0)).x, f.x), f.y),
    mix(mix(hash3(i + vec3(0, 0, 1)).x, hash3(i + vec3(1, 0, 1)).x, f.x),
        mix(hash3(i + vec3(0, 1, 1)).x, hash3(i + vec3(1, 1, 1)).x, f.x), f.y),
    f.z) * 2.0 - 1.0;
}

float fbm(vec3 p) {
  float value = 0.0;
  float amplitude = 0.5;
  for (int i = 0; i < 3; i++) {
    value += amplitude * vnoise(p);
    p = p * 2.1 + vec3(3.1, 7.3, 1.9);
    amplitude *= 0.5;
  }
  return value;
}

//-------- Voronoi with true border distance (Inigo Quilez) ------------

// feature points wobble inside their cell with `phase`, so the plates look like
// they float on something liquid. `phase` is 2π-periodic in loop mode.
vec3 featurePoint(vec3 cell, float phase) {
  vec3 o = hash3(cell);
  return 0.5 + 0.35 * sin(phase + 6.28318530718 * o);
}

// returns the distance to the nearest cell border (in cell units) and the id
// of the cell the point belongs to.
//
// Planes use the 2D version: slicing a 3D voronoi with a plane leaves sliver
// cells that render as random bright slabs. The sphere needs the 3D one.
#ifdef EMBER_SPHERE
float voronoiBorder(vec3 x, float phase, out vec3 cellId) {
  vec3 n = floor(x);
  vec3 f = fract(x);

  vec3 mg = vec3(0.0);
  vec3 mr = vec3(0.0);
  float md = 8.0;

  for (int k = -1; k <= 1; k++)
  for (int j = -1; j <= 1; j++)
  for (int i = -1; i <= 1; i++) {
    vec3 g = vec3(float(i), float(j), float(k));
    vec3 r = g + featurePoint(n + g, phase) - f;
    float d = dot(r, r);
    if (d < md) {
      md = d;
      mr = r;
      mg = g;
    }
  }

  md = 8.0;
  for (int k = -1; k <= 1; k++)
  for (int j = -1; j <= 1; j++)
  for (int i = -1; i <= 1; i++) {
    vec3 g = mg + vec3(float(i), float(j), float(k));
    vec3 r = g + featurePoint(n + g, phase) - f;
    if (dot(mr - r, mr - r) > 0.00001) {
      md = min(md, dot(0.5 * (mr + r), normalize(r - mr)));
    }
  }

  cellId = n + mg;
  return md;
}
#else
float voronoiBorder(vec3 x3, float phase, out vec3 cellId) {
  vec2 x = x3.xy;
  vec2 n = floor(x);
  vec2 f = fract(x);

  vec2 mg = vec2(0.0);
  vec2 mr = vec2(0.0);
  float md = 8.0;

  for (int j = -1; j <= 1; j++)
  for (int i = -1; i <= 1; i++) {
    vec2 g = vec2(float(i), float(j));
    vec2 r = g + featurePoint(vec3(n + g, 0.0), phase).xy - f;
    float d = dot(r, r);
    if (d < md) {
      md = d;
      mr = r;
      mg = g;
    }
  }

  md = 8.0;
  for (int j = -2; j <= 2; j++)
  for (int i = -2; i <= 2; i++) {
    vec2 g = mg + vec2(float(i), float(j));
    vec2 r = g + featurePoint(vec3(n + g, 0.0), phase).xy - f;
    if (dot(mr - r, mr - r) > 0.00001) {
      md = min(md, dot(0.5 * (mr + r), normalize(r - mr)));
    }
  }

  cellId = vec3(n + mg, 0.0);
  return md;
}
#endif

//-------- Height field ------------

// groove ramp in cell units; kept wide (several mesh cells) so the plate edges
// don't stair-step on the 192-segment plane
#define EMBER_GROOVE 0.3

float emberHeight(vec3 p, vec3 flow, float phase) {
  vec3 cellId;
  float border = voronoiBorder(p, phase, cellId);
  // smooth groove along the borders
  float groove = 1.0 - smoothstep(0.0, EMBER_GROOVE, border);
  groove *= groove;
  // each plate sits at a slightly different height, blended out at the border
  float plate = (hash3(cellId).y - 0.5) * 0.12 * (1.0 - groove);
  float swell = fbm(p * 0.35 + flow);
  return swell * 0.7 + plate - groove * 0.3;
}

mat3 rotation3dY(float angle) {
  float s = sin(angle);
  float c = cos(angle);
  return mat3(c, 0.0, -s, 0.0, 1.0, 0.0, s, 0.0, c);
}

varying vec3 vNormal;
varying vec3 vTangentV;
varying vec3 vBitangentV;
varying vec3 vPos;
varying vec3 vBasePos;
varying vec3 vFlow;
varying float vPhase;

uniform float uTime;
uniform float uSpeed;
uniform float uLoop;
uniform float uLoopDuration;
uniform float uLoadingTime;
uniform float uNoiseDensity;
uniform float uNoiseStrength;
uniform float uFrequency;
uniform float uAmplitude;

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
  #ifdef USE_TANGENT
    vTangent = normalize(transformedTangent);
    vBitangent = normalize(cross(vNormal, vTangent) * tangent.w);
  #endif
  #endif
  #include <begin_vertex>

  //-------- Ember displacement ------------
  float t = uTime * uSpeed;

  vec3 flow;
  float phase;
  if (uLoop > 0.5) {
    // one full turn per loop: both the swell (circular path through noise
    // space) and the plate wobble (2π phase) end exactly where they started
    float loopAngle = (uTime / uLoopDuration) * 6.28318530718;
    float radius = uSpeed * uLoopDuration * 0.05;
    flow = vec3(cos(loopAngle), sin(loopAngle), 0.0) * radius;
    phase = loopAngle;
  } else {
    flow = vec3(t * 0.2, t * 0.12, t * 0.15);
    phase = t * 0.6;
  }

  float density = uNoiseDensity * 1.1;
  vec3 p = position * density;

  vec3 helper = abs(normal.y) < 0.99 ? vec3(0.0, 1.0, 0.0) : vec3(1.0, 0.0, 0.0);
  vec3 T = normalize(cross(normal, helper));
  vec3 B = cross(normal, T);

  #ifdef EMBER_FLAT
    // plane geometry: no displacement (see plane/index.ts)
    vec3 pos = position;
    vec3 emberNormal = normal;
  #else
    float h0 = emberHeight(p, flow, phase);

    // just above the mesh spacing (10 / 192 ≈ 0.05): tight enough to keep the
    // grooves sharp, wide enough to stay consistent with the interpolated mesh
    float eps = 0.07;
    float hT = emberHeight((position + T * eps) * density, flow, phase);
    float hB = emberHeight((position + B * eps) * density, flow, phase);

    float amplitude = 0.45 * uNoiseStrength * uLoadingTime;

    vec3 pos = position + normal * h0 * amplitude;
    vec3 dT = T * eps + normal * (hT - h0) * amplitude;
    vec3 dB = B * eps + normal * (hB - h0) * amplitude;
    vec3 emberNormal = normalize(cross(dT, dB));
  #endif

  #ifdef EMBER_SPHERE
    // same twist as the defaults sphere so uFrequency / uAmplitude keep meaning
    float twist = sin(uv.y * uFrequency + t) * uAmplitude;
    mat3 twistMatrix = rotation3dY(twist);
    pos = twistMatrix * pos;
    emberNormal = twistMatrix * emberNormal;
    T = twistMatrix * T;
    B = twistMatrix * B;
  #endif

  vPos = pos;
  vBasePos = position;
  vFlow = flow;
  vPhase = phase;
  vNormal = normalize(normalMatrix * emberNormal);
  vTangentV = normalize(normalMatrix * T);
  vBitangentV = normalize(normalMatrix * B);

  // route the deformed position through <project_vertex> so gl_Position is
  // written exactly once (#157)
  transformed = pos;

  #include <morphtarget_vertex>
  #include <skinning_vertex>
  #include <displacementmap_vertex>
  #include <project_vertex>
  #include <logdepthbuf_vertex>
  #include <clipping_planes_vertex>

  vViewPosition = -mvPosition.xyz;

  #include <worldpos_vertex>
  #include <shadowmap_vertex>
  #include <fog_vertex>
}
