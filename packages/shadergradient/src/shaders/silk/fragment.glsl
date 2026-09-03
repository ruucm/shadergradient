// Silk Fragment Shader - Liquid Iridescent Silk
//
// Colour is driven by the domain-warp vectors computed in the vertex shader
// plus a per-pixel detail fbm, so the three palette colours bleed into each
// other along the folds instead of a fixed axis. On top of that:
//   - fine anisotropic striations ("threads") that follow the warp
//   - a fresnel thin-film iridescence on grazing angles
//   - a soft analytic highlight whose sharpness follows `reflection`
//     (roughness = 1 - reflection is set by Materials.tsx)

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
varying vec3 vPos;
varying vec2 vSilkUv;
varying vec2 vWarpQ;
varying vec2 vWarpR;
varying float vHeight;
varying vec3 vFlow;

uniform float uNoiseDensity;

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

// 3 octaves is enough for per-pixel detail on top of the vertex warp
float fbmDetail(vec3 p) {
  float value = 0.0;
  float amplitude = 0.5;
  for (int i = 0; i < 3; i++) {
    value += amplitude * snoise(p);
    p = p * 2.02 + vec3(1.7, 9.2, 3.1);
    amplitude *= 0.5;
  }
  return value;
}

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

  //-------- Silk colour field ------------
  float density = uNoiseDensity * 0.22;
  vec3 p = vPos * density;

  // per-pixel detail that rides on the vertex-level warp
  float detail = fbmDetail(p * 2.5 + 0.9 * vWarpR.xyx + vFlow * 0.5);

  // 0..1 mix value: mostly the warped height (stretched so the palette
  // extremes actually show up), plus a gentle spatial drift so the result
  // still reads as a gradient and not as pure noise
  float field = vHeight * 0.95 + 0.5 + detail * 0.12;
  float drift = smoothstep(-5.0, 5.0, vPos.x + vWarpQ.x * 2.5);
  float m = clamp(field * 0.75 + drift * 0.25, 0.0, 1.0);

  vec3 baseColor = mix(
    mix(color1, color2, smoothstep(0.0, 0.55, m)),
    color3,
    smoothstep(0.45, 1.0, m)
  );

  // fine threads following the warp direction; kept low-frequency enough to
  // not alias on a 10x10 plane
  float threadPhase = (vWarpR.x * 3.0 + vWarpQ.y * 1.5 + detail * 0.4 + vPos.y * density * 0.6) * 10.0;
  float thread = 0.5 + 0.5 * sin(threadPhase);
  thread = thread * thread;

  //-------- View-dependent terms ------------
  vec3 sN = normalize(vNormal) * (gl_FrontFacing ? 1.0 : -1.0);
  vec3 sV = normalize(vViewPosition);
  float NdotV = max(dot(sN, sV), 0.0);
  float fresnel = pow(1.0 - NdotV, 3.0);

  // thin-film iridescence: hue drifts slowly with the viewing angle and the fold
  vec3 filmColor = 0.5 + 0.5 * cos(6.28318530718 * (fresnel * 0.5 + m * 0.35 + vec3(0.0, 0.33, 0.67)));

  // key light from top-right-front and a cool rim from the left (view space)
  vec3 L1 = normalize(vec3(0.45, 0.7, 1.0));
  vec3 L2 = normalize(vec3(-0.8, 0.2, 0.5));
  float gloss = clamp(1.0 - roughness, 0.0, 1.0);
  float shininess = mix(6.0, 90.0, gloss * gloss);

  vec3 H1 = normalize(L1 + sV);
  vec3 H2 = normalize(L2 + sV);
  float spec1 = pow(max(dot(sN, H1), 0.0), shininess);
  float spec2 = pow(max(dot(sN, H2), 0.0), shininess * 0.5) * 0.35;
  // anisotropic feel: the highlight is brighter on the thread ridges
  float highlight = (spec1 + spec2) * (0.7 + 0.3 * thread) * (0.2 + 0.8 * gloss);

  //-------- Compose ------------
  vec3 silkColor = baseColor;
  // sheen: lift the ridges a touch, darken the valleys a touch
  silkColor *= 0.95 + 0.1 * thread;
  // iridescence on grazing angles, tinted toward the palette so it never clashes
  vec3 iridTint = mix(filmColor, filmColor * mix(color2, color3, 0.5) * 1.6, 0.6);
  silkColor = mix(silkColor, iridTint, fresnel * 0.3);
  // soft rim glow
  silkColor += fresnel * 0.1 * mix(color2, color3, 0.5);

  vec4 diffuseColor = vec4(silkColor, 1.0);

  //-------- materiality ------------
  ReflectedLight reflectedLight = ReflectedLight(vec3(0.0), vec3(0.0), vec3(0.0), vec3(0.0));
  vec3 specularTint = mix(vec3(1.0), filmColor, 0.4);
  vec3 totalEmissiveRadiance = emissive + specularTint * highlight * 0.9;

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
