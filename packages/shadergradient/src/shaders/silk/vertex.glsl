// Silk Vertex Shader - Liquid Iridescent Silk
//
// The surface is displaced by a three-level domain-warped fbm (fbm of fbm of
// fbm, after Inigo Quilez). Unlike the other shader families, the normal is
// rebuilt from the displaced surface with finite differences in the tangent
// frame, so specular highlights and iridescence in the fragment shader follow
// the folds of the fabric instead of the flat base geometry.

//-------- Simplex noise (Ashima Arts / Stefan Gustavson, MIT) ------------

vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 permute(vec4 x) { return mod289(((x * 34.0) + 1.0) * x); }
vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

float snoise(vec3 v) {
  const vec2 C = vec2(1.0 / 6.0, 1.0 / 3.0);
  const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);

  vec3 i = floor(v + dot(v, C.yyy));
  vec3 x0 = v - i + dot(i, C.xxx);

  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min(g.xyz, l.zxy);
  vec3 i2 = max(g.xyz, l.zxy);

  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy;
  vec3 x3 = x0 - D.yyy;

  i = mod289(i);
  vec4 p = permute(permute(permute(
              i.z + vec4(0.0, i1.z, i2.z, 1.0))
            + i.y + vec4(0.0, i1.y, i2.y, 1.0))
            + i.x + vec4(0.0, i1.x, i2.x, 1.0));

  float n_ = 0.142857142857;
  vec3 ns = n_ * D.wyz - D.xzx;

  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);

  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_);

  vec4 x = x_ * ns.x + ns.yyyy;
  vec4 y = y_ * ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);

  vec4 b0 = vec4(x.xy, y.xy);
  vec4 b1 = vec4(x.zw, y.zw);

  vec4 s0 = floor(b0) * 2.0 + 1.0;
  vec4 s1 = floor(b1) * 2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));

  vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
  vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;

  vec3 p0 = vec3(a0.xy, h.x);
  vec3 p1 = vec3(a0.zw, h.y);
  vec3 p2 = vec3(a1.xy, h.z);
  vec3 p3 = vec3(a1.zw, h.w);

  vec4 norm = taylorInvSqrt(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;

  vec4 m = max(0.6 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)), 0.0);
  m = m * m;
  return 42.0 * dot(m * m, vec4(dot(p0, x0), dot(p1, x1), dot(p2, x2), dot(p3, x3)));
}

// Only 3 octaves: the surface should read as large soft folds, the fine
// detail is added per-pixel in the fragment shader.
float fbm(vec3 p) {
  float value = 0.0;
  float amplitude = 0.5;
  for (int i = 0; i < 3; i++) {
    value += amplitude * snoise(p);
    p = p * 1.9 + vec3(1.7, 9.2, 3.1);
    amplitude *= 0.42;
  }
  return value; // ~[-0.8, 0.8]
}

//-------- Domain-warped silk field ------------

// `flow` is the animated offset fed into every noise lookup. It is either a
// straight line (normal playback) or a circle (loop mode), so in loop mode the
// whole field is exactly periodic without any sample blending.
#define SILK_WARP 0.6

float silkField(vec3 p, vec3 flow, out vec2 q, out vec2 r) {
  q = vec2(
    fbm(p + flow),
    fbm(p + vec3(5.2, 1.3, 2.8) - flow * 0.7)
  );
  r = vec2(
    fbm(p + SILK_WARP * q.xyx + vec3(1.7, 9.2, 4.1) + flow * 0.4),
    fbm(p + SILK_WARP * q.yxy + vec3(8.3, 2.8, 6.4) - flow * 0.3)
  );
  return fbm(p + SILK_WARP * r.xyx);
}

float silkHeight(vec3 p, vec3 flow) {
  vec2 q;
  vec2 r;
  return silkField(p, flow, q, r);
}

mat3 rotation3dY(float angle) {
  float s = sin(angle);
  float c = cos(angle);
  return mat3(c, 0.0, -s, 0.0, 1.0, 0.0, s, 0.0, c);
}

varying vec3 vNormal;
varying vec3 vPos;
varying vec2 vSilkUv;
varying vec2 vWarpQ;
varying vec2 vWarpR;
varying float vHeight;
varying vec3 vFlow;

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

  //-------- Silk displacement ------------
  float t = uTime * uSpeed;

  vec3 flow;
  if (uLoop > 0.5) {
    // Circular path through noise space: one full turn per loop, so the first
    // and last frame are identical. Radius keeps the travelled distance
    // comparable to the linear path below.
    float loopAngle = (uTime / uLoopDuration) * 6.28318530718;
    float radius = uSpeed * uLoopDuration * 0.075;
    flow = vec3(cos(loopAngle), sin(loopAngle), 0.0) * radius;
  } else {
    flow = vec3(t * 0.35, t * 0.2, t * 0.25);
  }

  float density = uNoiseDensity * 0.22;
  vec3 p = position * density;

  vec2 q;
  vec2 r;
  float h0 = silkField(p, flow, q, r);

  // Tangent frame around the base normal, used both for the finite-difference
  // normal and to keep the offsets on the surface.
  vec3 helper = abs(normal.y) < 0.99 ? vec3(0.0, 1.0, 0.0) : vec3(1.0, 0.0, 0.0);
  vec3 T = normalize(cross(normal, helper));
  vec3 B = cross(normal, T);

  // wider than the mesh spacing (10 / 192 ≈ 0.05) on purpose: it low-passes
  // the normal so it stays consistent with the linearly interpolated surface
  float eps = 0.16;
  float hT = silkHeight((position + T * eps) * density, flow);
  float hB = silkHeight((position + B * eps) * density, flow);

  // matches the displacement range of the defaults shader so presets tuned
  // there keep a similar silhouette
  float amplitude = 0.5 * uNoiseStrength * uLoadingTime;

  vec3 pos = position + normal * h0 * amplitude;
  vec3 dT = T * eps + normal * (hT - h0) * amplitude;
  vec3 dB = B * eps + normal * (hB - h0) * amplitude;
  vec3 silkNormal = normalize(cross(dT, dB));

  #ifdef SILK_SPHERE
    // same twist as the defaults sphere so uFrequency / uAmplitude keep meaning
    float twist = sin(uv.y * uFrequency + t) * uAmplitude;
    mat3 twistMatrix = rotation3dY(twist);
    pos = twistMatrix * pos;
    silkNormal = twistMatrix * silkNormal;
  #endif

  vPos = pos;
  vSilkUv = uv;
  vWarpQ = q;
  vWarpR = r;
  vHeight = h0;
  vFlow = flow;
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

  // view vector from the *deformed* position so fresnel / highlights line up
  // with the folds
  vViewPosition = -mvPosition.xyz;

  #include <worldpos_vertex>
  #include <shadowmap_vertex>
  #include <fog_vertex>
}
