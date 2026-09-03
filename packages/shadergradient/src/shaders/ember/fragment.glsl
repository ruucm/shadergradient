// Ember Fragment Shader - Cracked Molten Crust
//
// The voronoi from the vertex stage is re-evaluated per pixel (on the
// undeformed position, so it lines up with the grooves) to get a crisp border
// distance. From that:
//   - color1 is the cooled crust; every plate gets its own tint and a random
//     tilt so the plates catch the key light differently
//   - the cracks glow color2 -> color3 (hottest in the middle), pulsing with a
//     slow travelling fbm "heat" and a per-plate beat
//   - the glow bleeds onto the neighbouring crust and a fresnel rim keeps the
//     silhouette readable on the sphere

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
varying vec3 vPos;
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

//-------- Hash / noise (same as vertex.glsl) ------------

vec3 hash3(vec3 p) {
  p = vec3(
    dot(p, vec3(127.1, 311.7, 74.7)),
    dot(p, vec3(269.5, 183.3, 246.1)),
    dot(p, vec3(113.5, 271.9, 124.6))
  );
  return fract(sin(p) * 43758.5453123);
}

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
  for (int i = 0; i < 4; i++) {
    value += amplitude * vnoise(p);
    p = p * 2.1 + vec3(3.1, 7.3, 1.9);
    amplitude *= 0.5;
  }
  return value;
}

vec3 featurePoint(vec3 cell, float phase) {
  vec3 o = hash3(cell);
  return 0.5 + 0.35 * sin(phase + 6.28318530718 * o);
}

// 2D on planes / 3D on the sphere, see vertex.glsl
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

// crack half-width in cell units (the vertex groove is much wider than this)
#define EMBER_CRACK 0.028

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

  //-------- Cells ------------
  float density = uNoiseDensity * 1.1;
  vec3 p = vBasePos * density;

  vec3 cellId;
  float border = voronoiBorder(p, vPhase, cellId);
  vec3 cellHash = hash3(cellId);

  // soft edge on the crack so it doesn't shimmer; fwidth keeps it ~1px
  float aa = fwidth(border) * 1.5;
  float crack = 1.0 - smoothstep(EMBER_CRACK - aa, EMBER_CRACK + aa, border);
  // wider, softer glow spilling onto the crust
  float halo = exp(-border * 12.0);

  // finer, cooler hairline cracks inside each plate (static, they don't wobble)
  vec3 fineId;
  float fineBorder = voronoiBorder(p * 3.1 + vec3(4.2, 7.7, 1.3), 0.0, fineId);
  float fineAa = fwidth(fineBorder) * 1.5;
  float fine = 1.0 - smoothstep(0.02 - fineAa, 0.02 + fineAa, fineBorder);
  // only show them where the plate is hot, so they read as cooling fractures
  fine *= smoothstep(0.35, 0.9, halo * 0.5 + hash3(fineId).x * 0.6);

  //-------- Heat ------------
  // slow travelling heat plus a per-plate beat, both loop-safe (vFlow / vPhase)
  float heatField = fbm(p * 0.45 + vFlow * 2.0 + vec3(11.0, 3.0, 7.0));
  heatField = smoothstep(-0.35, 0.4, heatField);
  float beat = 0.5 + 0.5 * sin(vPhase * 2.0 + cellHash.z * 6.28318530718);
  // strong contrast: some cracks are almost cooled, others blaze
  float heat = clamp(heatField * 0.8 + beat * 0.3 - 0.1, 0.0, 1.0);
  heat *= heat;

  //-------- Crust ------------
  vec3 sN = normalize(vNormal) * (gl_FrontFacing ? 1.0 : -1.0);
  // each plate is tilted a bit so they read as separate slabs
  vec2 tilt = (cellHash.xy - 0.5) * 0.5 * (1.0 - crack);
  sN = normalize(sN + vTangentV * tilt.x + vBitangentV * tilt.y);
  #ifdef EMBER_FLAT
    // no geometry groove on the plane: bend the normal down toward the crack
    // using the screen-space gradient of the same profile the vertex stage
    // carves on the other geometries
    float groove = 1.0 - smoothstep(0.0, 0.3, border);
    float h = -groove * groove * 0.3 * uNoiseStrength;
    vec2 dh = vec2(dFdx(h), dFdy(h)) / max(fwidth(border), 1e-4);
    sN = normalize(sN + vec3(-dh.x, dh.y, 0.0) * 0.6);
  #endif
  vec3 sV = normalize(vViewPosition);

  vec3 L1 = normalize(vec3(0.4, 0.8, 0.9));
  float diff = max(dot(sN, L1), 0.0);
  float gloss = clamp(1.0 - roughness, 0.0, 1.0);
  float spec = pow(max(dot(sN, normalize(L1 + sV)), 0.0), mix(8.0, 64.0, gloss)) * gloss;
  float NdotV = max(dot(sN, sV), 0.0);
  float fresnel = pow(1.0 - NdotV, 4.0);

  // grain on the crust so big plates aren't flat
  float grain = fbm(p * 5.0 + cellHash * 10.0) * 0.5 + 0.5;
  vec3 crust = color1 * (0.7 + 0.5 * grain) * (0.85 + 0.3 * cellHash.x);
  crust *= 0.55 + 0.6 * diff;
  #ifdef EMBER_FLAT
    // occlusion inside the fake groove
    crust *= mix(0.5, 1.0, smoothstep(0.0, 0.2, border));
  #endif
  // the glow lights the crust next to the cracks
  vec3 glowColor = mix(color2, color3, heat * 0.5);
  crust += glowColor * halo * (0.06 + 0.45 * heat);
  // hot plates get a faint red-hot tint all over
  crust += color2 * heat * 0.08;
  crust += spec * 0.25 * mix(vec3(1.0), glowColor, 0.5);
  crust += fresnel * 0.15 * color2;

  //-------- Glow ------------
  // hottest right in the middle of the crack; color3 only shows up where the
  // heat is high so the palette reads orange with yellow-white pulses.
  // cooled cracks fade to a dim ember instead of disappearing.
  float core = crack * crack;
  vec3 crackColor = mix(color2 * 0.5, mix(color2, color3, core * 0.9), heat);
  vec3 glow = crackColor * crack * (0.25 + 1.3 * heat)
            + glowColor * halo * halo * 0.35 * heat
            + color2 * fine * (0.08 + 0.35 * heat);

  vec4 diffuseColor = vec4(mix(crust, vec3(0.0), max(crack, fine * 0.6)), 1.0);

  //-------- materiality ------------
  ReflectedLight reflectedLight = ReflectedLight(vec3(0.0), vec3(0.0), vec3(0.0), vec3(0.0));
  vec3 totalEmissiveRadiance = emissive + glow;

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
