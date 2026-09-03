// Liquid Fragment Shader - Liquid Glass
//
// The background is an analytic colour gradient, so the glass can *refract*
// it for real: inside a blob the gradient is re-evaluated at a position
// shifted by the surface slope (strong at the rounded edge, none on the flat
// top), once per channel for a touch of chromatic aberration, and with fewer
// noise octaves so it reads as frosted. On top of that:
//   - key-light highlight and a softer counter-light on the far edge
//   - fresnel rim + a hairline bright edge
//   - inner shadow on the side facing away from the light
//   - a soft drop shadow on the background under each blob

#define STANDARD
#ifdef PHYSICAL
#define REFLECTIVITY
#define CLEARCOAT
#define TRANSMISSION
#endif

uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;

#ifdef TRANSMISSION
uniform float transmission;
#endif
#ifdef REFLECTIVITY
uniform float reflectivity;
#endif
#ifdef CLEARCOAT
uniform float clearcoat;
uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
uniform vec3 sheen;
#endif
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
#ifdef USE_TANGENT
varying vec3 vTangent;
varying vec3 vBitangent;
#endif
#endif
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <color_pars_fragment>
#include <common>
#include <dithering_pars_fragment>
#include <emissivemap_pars_fragment>
#include <lightmap_pars_fragment>
#include <map_pars_fragment>
#include <packing>
#include <uv2_pars_fragment>
#include <uv_pars_fragment>
#include <bsdfs>
#include <bumpmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <clipping_planes_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <lights_physical_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <shadowmap_pars_fragment>

varying vec3 vNormal;
varying vec3 vTangentV;
varying vec3 vBitangentV;
varying vec3 vT;
varying vec3 vB;
varying vec3 vBasePos;
varying vec3 vFlow;
varying float vPhase;

uniform float uNoiseDensity;
uniform float uNoiseStrength;

uniform float uC1r;
uniform float uC1g;
uniform float uC1b;
uniform float uC2r;
uniform float uC2g;
uniform float uC2b;
uniform float uC3r;
uniform float uC3g;
uniform float uC3b;

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

// octave count doubles as a blur control: fewer octaves = softer gradient
float fbm(vec3 p, int octaves) {
  float value = 0.0;
  float amplitude = 0.5;
  for (int i = 0; i < 3; i++) {
    if (i >= octaves) break;
    value += amplitude * snoise(p);
    p = p * 2.0 + vec3(1.7, 9.2, 3.1);
    amplitude *= 0.5;
  }
  return value;
}

//-------- Background gradient ------------

// `p` in blob units. This is the "content" the glass sits on.
vec3 background(vec3 p, vec3 flow, int octaves) {
  vec3 color1 = vec3(uC1r, uC1g, uC1b);
  vec3 color2 = vec3(uC2r, uC2g, uC2b);
  vec3 color3 = vec3(uC3r, uC3g, uC3b);

  vec3 q = p * 0.11;
  float n1 = fbm(q + flow, octaves);
  float n2 = fbm(q * 1.35 + vec3(4.1, 2.2, 7.3) - flow * 0.6, octaves);
  float m1 = smoothstep(-0.55, 0.55, n1 + q.x * 0.35);
  float m2 = smoothstep(-0.3, 0.6, n2 - q.y * 0.3);
  return mix(mix(color1, color2, m1), color3, m2);
}

//-------- Blob field (same as vertex.glsl) ------------

#define LIQUID_EDGE 0.34

#ifdef LIQUID_SPHERE
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

// thickness profile and its slope w.r.t. the distance field
float liquidHeight(float d) {
  float t = clamp(-d / LIQUID_EDGE, 0.0, 1.0);
  float tc = 0.06 + 0.94 * t;
  return sqrt(1.0 - (1.0 - tc) * (1.0 - tc));
}

float liquidSlope(float d) {
  float t = clamp(-d / LIQUID_EDGE, 0.0, 1.0);
  float tc = 0.06 + 0.94 * t;
  float u = 1.0 - tc;
  // dh/dt * dt/dd, positive = surface rises when moving inward
  return (u / sqrt(1.0 - u * u)) * 0.94 / LIQUID_EDGE * step(t, 0.999);
}

float lum(vec3 c) { return dot(c, vec3(0.2126, 0.7152, 0.0722)); }

// for npm package, need to add this manually
float linearToRelativeLuminance2( const in vec3 color ) {
    vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
    return dot( weights, color.rgb );
}

void main() {

  vec3 color1 = vec3(uC1r, uC1g, uC1b);
  vec3 color2 = vec3(uC2r, uC2g, uC2b);
  vec3 color3 = vec3(uC3r, uC3g, uC3b);
  float clearcoat = 1.0;
  float clearcoatRoughness = 0.3;

  #include <clipping_planes_fragment>

  float scale = uNoiseDensity * 2.0;
  vec3 p = vBasePos * scale;

  //-------- Blob field and its gradient on the surface ------------
  float d = liquidSdf(p, vPhase, scale);
  float e = 0.02;
  float dT = (liquidSdf(p + vT * e, vPhase, scale) - d) / e;
  float dB = (liquidSdf(p + vB * e, vPhase, scale) - d) / e;
  vec2 grad = vec2(dT, dB); // ~unit length, points outward

  float aa = fwidth(d) * 1.2;
  float mask = 1.0 - smoothstep(-aa, aa, d);
  float edgeT = clamp(-d / LIQUID_EDGE, 0.0, 1.0); // 0 at the rim, 1 on the flat top
  float slope = liquidSlope(d) * mask;

  //-------- Normal ------------
  float relief = 0.55 * uNoiseStrength;
  vec3 N = normalize(vNormal) * (gl_FrontFacing ? 1.0 : -1.0);
  // the surface rises inward, so the normal tips outward along +grad
  vec3 sN = normalize(N + (vTangentV * grad.x + vBitangentV * grad.y) * slope * relief * 0.35);
  vec3 sV = normalize(vViewPosition);
  float NdotV = max(dot(sN, sV), 0.0);

  //-------- Background (outside the glass) ------------
  vec3 bg = background(p, vFlow, 3);
  // soft drop shadow: the field sampled a bit up-left so the shadow falls
  // down-right, only outside the blobs
  float dShadow = liquidSdf(p - (vT * -0.14 + vB * 0.2), vPhase, scale);
  float shadow = (1.0 - smoothstep(0.0, 0.55, dShadow)) * (1.0 - mask);
  bg *= 1.0 - 0.16 * shadow;

  //-------- Glass (inside) ------------
  // refraction: sample the gradient shifted along the surface slope, once
  // per channel for chromatic aberration
  vec3 shift = (vT * grad.x + vB * grad.y) * slope * relief * 0.22;
  vec3 glass;
  glass.r = background(p - shift * 0.90, vFlow, 2).r;
  glass.g = background(p - shift * 1.00, vFlow, 2).g;
  glass.b = background(p - shift * 1.12, vFlow, 2).b;
  // frosted: lift and slightly desaturate
  glass = mix(glass, vec3(lum(glass)), 0.18);
  glass = glass * 0.9 + 0.09;

  // inner shadow on the far side from the key light (surface coords)
  vec2 lightDir2 = normalize(vec2(-0.6, 0.8));
  float facing = dot(normalize(grad + 1e-5), lightDir2); // +1 on the lit rim
  float rimBand = (1.0 - edgeT) * (1.0 - edgeT);
  glass *= 1.0 - rimBand * max(-facing, 0.0) * 0.16;
  // faint light bleed on the lit rim
  glass += rimBand * max(facing, 0.0) * 0.06;

  //-------- Highlights ------------
  float gloss = clamp(1.0 - roughness, 0.0, 1.0);
  float shininess = mix(18.0, 160.0, gloss);
  vec3 L1 = normalize(vec3(-0.55, 0.8, 0.7));  // key, top-left
  vec3 L2 = normalize(vec3(0.7, -0.6, 0.45));  // counter light, bottom-right
  float spec1 = pow(max(dot(sN, normalize(L1 + sV)), 0.0), shininess);
  float spec2 = pow(max(dot(sN, normalize(L2 + sV)), 0.0), shininess * 0.6) * 0.35;
  float fresnel = pow(1.0 - NdotV, 4.0);
  // hairline bright edge right at the boundary
  float hairline = 1.0 - smoothstep(0.0, aa * 3.0, abs(d + aa));

  vec3 highlight = vec3(1.0) * (spec1 * (0.6 + 0.4 * gloss) + spec2)
                 + vec3(1.0) * fresnel * 0.28 * mask
                 + vec3(1.0) * hairline * 0.22;
  highlight *= mask;

  //-------- Compose ------------
  vec3 color = mix(bg, glass, mask);

  vec4 diffuseColor = vec4(color, 1.0);

  //-------- materiality ------------
  ReflectedLight reflectedLight = ReflectedLight(vec3(0.0), vec3(0.0), vec3(0.0), vec3(0.0));
  vec3 totalEmissiveRadiance = emissive + highlight;

  #ifdef TRANSMISSION
    float totalTransmission = transmission;
  #endif
  #include <logdepthbuf_fragment>
  #include <map_fragment>
  #include <color_fragment>
  #include <alphamap_fragment>
  #include <alphatest_fragment>
  #include <roughnessmap_fragment>
  #include <metalnessmap_fragment>
  #include <normal_fragment_begin>
  #include <normal_fragment_maps>
  #include <clearcoat_normal_fragment_begin>
  #include <clearcoat_normal_fragment_maps>
  #include <emissivemap_fragment>
  #include <lights_physical_fragment>
  #include <lights_fragment_begin>
  #include <lights_fragment_maps>
  #include <lights_fragment_end>
  #include <aomap_fragment>

  vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse +
                       reflectedLight.directSpecular + reflectedLight.indirectSpecular +
                       totalEmissiveRadiance;

  #ifdef TRANSMISSION
    diffuseColor.a *= mix(saturate(1. - totalTransmission +
                        linearToRelativeLuminance2(reflectedLight.directSpecular +
                                                  reflectedLight.indirectSpecular)),
                1.0, metalness);
  #endif

  #include <tonemapping_fragment>
  #include <encodings_fragment>
  #include <fog_fragment>
  #include <premultiplied_alpha_fragment>
  #include <dithering_fragment>

  gl_FragColor = vec4(outgoingLight, diffuseColor.a);
}
