// Liquid Vertex Shader - Liquid Glass
//
// Gooey glass blobs (an SDF metaball field of discs and pills) float over a
// flowing colour gradient. Everything optical happens per pixel in the
// fragment shader; here the surface is only pushed up by the blob thickness so
// waterPlane / sphere get a real silhouette. LIQUID_FLAT (plane geometry, one
// segment across x) skips the displacement.

//-------- Blob field (kept in sync with fragment.glsl) ------------

// distance field in "blob units" (world * uNoiseDensity * 2.0)
#define LIQUID_EDGE 0.34

// 2D blob coordinates in [-1, 1] mapped onto the geometry
#ifdef LIQUID_SPHERE
  // the sphere has radius 1, in blob units that is `scale`
  vec3 toSurface(vec2 c, float scale) {
    float lon = c.x * 3.14159265;
    float lat = c.y * 1.1;
    return vec3(cos(lat) * cos(lon), sin(lat), cos(lat) * sin(lon)) * scale;
  }
  #define LIQUID_RADIUS(r, scale) ((r) * 0.36 * (scale))
#else
  vec3 toSurface(vec2 c, float scale) { return vec3(c * 4.2, 0.0); }
  #define LIQUID_RADIUS(r, scale) (r)
#endif

float smin(float a, float b, float k) {
  float h = clamp(0.5 + 0.5 * (b - a) / k, 0.0, 1.0);
  return mix(b, a, h) - k * h * (1.0 - h);
}

float sdDisc(vec3 p, vec2 c, float r, float scale) {
  return length(p - toSurface(c, scale)) - LIQUID_RADIUS(r, scale);
}

float sdPill(vec3 p, vec2 c, float ang, float len, float r, float scale) {
  vec3 a = toSurface(c, scale);
  vec3 b = toSurface(c + len * vec2(cos(ang), sin(ang)), scale);
  vec3 pa = p - a;
  vec3 ba = b - a;
  float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);
  return length(pa - ba * h) - LIQUID_RADIUS(r, scale);
}

// Blobs drift on Lissajous paths with integer frequencies, so the whole field
// is 2π-periodic in `phase` (loop mode maps one loop onto exactly 2π).
float liquidSdf(vec3 p, float phase, float scale) {
  float k = 0.45;
  vec2 c;
  float d;

  // layout is in [-1, 1] x [-0.7, 0.7] (a 16:10 frame at the preset camera)
  c = vec2(-0.55, 0.22) + vec2(sin(phase + 0.3), cos(phase * 2.0 + 1.1)) * vec2(0.12, 0.08);
  d = sdDisc(p, c, 1.0, scale);

  c = vec2(0.55, -0.30) + vec2(sin(phase * 2.0 + 2.4), cos(phase + 0.7)) * vec2(0.10, 0.10);
  d = smin(d, sdDisc(p, c, 0.75, scale), k);

  c = vec2(0.70, 0.40) + vec2(sin(phase * 3.0 + 4.0), cos(phase * 2.0 + 2.2)) * vec2(0.08, 0.10);
  d = smin(d, sdDisc(p, c, 0.5, scale), k);

  c = vec2(-0.65, -0.45) + vec2(sin(phase * 2.0 + 5.1), cos(phase * 3.0 + 3.3)) * vec2(0.10, 0.06);
  d = smin(d, sdDisc(p, c, 0.55, scale), k);

  c = vec2(0.05, 0.05) + vec2(sin(phase + 1.9), cos(phase * 2.0 + 4.6)) * vec2(0.14, 0.10);
  d = smin(d, sdPill(p, c, 0.4 + 0.35 * sin(phase + 0.5), 0.35, 0.42, scale), k);

  c = vec2(-0.10, 0.55) + vec2(sin(phase * 2.0 + 0.9), cos(phase + 2.8)) * vec2(0.12, 0.05);
  d = smin(d, sdPill(p, c, -0.6 + 0.4 * cos(phase * 2.0), 0.3, 0.34, scale), k);

  c = vec2(0.25, -0.55) + vec2(sin(phase * 3.0 + 1.4), cos(phase + 5.5)) * vec2(0.06, 0.12);
  d = smin(d, sdDisc(p, c, 0.38, scale), k);

  c = vec2(0.90, -0.05) + vec2(sin(phase * 2.0 + 3.7), cos(phase * 3.0 + 0.4)) * vec2(0.05, 0.15);
  d = smin(d, sdDisc(p, c, 0.28, scale), k);

  return d;
}

// thickness profile for the mesh. The fragment shader uses a steep lens
// profile for shading; the geometry gets a softer ramp (over twice the edge
// band) so the silhouette does not step across mesh cells.
float liquidHeight(float d) {
  float t = clamp(-d / (LIQUID_EDGE * 2.0), 0.0, 1.0);
  return t * t * (3.0 - 2.0 * t);
}

mat3 rotation3dY(float angle) {
  float s = sin(angle);
  float c = cos(angle);
  return mat3(c, 0.0, -s, 0.0, 1.0, 0.0, s, 0.0, c);
}

varying vec3 vNormal;
varying vec3 vTangentV;
varying vec3 vBitangentV;
varying vec3 vT;
varying vec3 vB;
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

  //-------- Liquid displacement ------------
  float t = uTime * uSpeed;

  vec3 flow;
  float phase;
  if (uLoop > 0.5) {
    float loopAngle = (uTime / uLoopDuration) * 6.28318530718;
    float radius = uSpeed * uLoopDuration * 0.04;
    flow = vec3(cos(loopAngle), sin(loopAngle), 0.0) * radius;
    phase = loopAngle;
  } else {
    flow = vec3(t * 0.12, t * 0.08, t * 0.1);
    phase = t * 0.45;
  }

  float scale = uNoiseDensity * 2.0;

  vec3 helper = abs(normal.y) < 0.99 ? vec3(0.0, 1.0, 0.0) : vec3(1.0, 0.0, 0.0);
  vec3 T = normalize(cross(normal, helper));
  vec3 B = cross(normal, T);

  #ifdef LIQUID_FLAT
    vec3 pos = position;
  #else
    // real thickness for the blobs; the normal is bent per pixel from the same
    // profile in the fragment shader, so no finite differences needed here
    float d = liquidSdf(position * scale, phase, scale);
    float thickness = 0.08 * uNoiseStrength * uLoadingTime;
    vec3 pos = position + normal * liquidHeight(d) * thickness;
  #endif

  vec3 liquidNormal = normal;

  #ifdef LIQUID_SPHERE
    // same twist as the defaults sphere so uFrequency / uAmplitude keep meaning
    float twist = sin(uv.y * uFrequency + t) * uAmplitude;
    mat3 twistMatrix = rotation3dY(twist);
    pos = twistMatrix * pos;
    liquidNormal = twistMatrix * liquidNormal;
    T = twistMatrix * T;
    B = twistMatrix * B;
  #endif

  vBasePos = position;
  vFlow = flow;
  vPhase = phase;
  vT = T;
  vB = B;
  vNormal = normalize(normalMatrix * liquidNormal);
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
