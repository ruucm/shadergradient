// OilPaint Fragment Shader - thick impasto oil paint on canvas
// A procedural height field of brush strokes (posterized paint daubs, bristle
// grooves across each stroke, canvas weave in the thin spots) is bump-mapped
// into the lighting normal so ridges of paint actually catch the light.
// A virtual key light + specular glints are baked into the paint color so the
// relief stays visible even under plain ambient lighting.

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
varying float vDistort;

uniform float uTime;
uniform float uSpeed;
uniform float uLoop;
uniform float uLoopDuration;
uniform float uNoiseDensity;
uniform float uNoiseStrength;
uniform float uFrequency;
uniform float uAmplitude;

uniform float uC1r;
uniform float uC1g;
uniform float uC1b;
uniform float uC2r;
uniform float uC2g;
uniform float uC2b;
uniform float uC3r;
uniform float uC3g;
uniform float uC3b;

// ---------- compact value noise ----------
float oilHash(vec3 p) {
    p = fract(p * 0.3183099 + vec3(0.71, 0.113, 0.419));
    p *= 17.0;
    return fract(p.x * p.y * p.z * (p.x + p.y + p.z));
}

float oilNoise(vec3 p) {
    vec3 i = floor(p);
    vec3 f = fract(p);
    vec3 u = f * f * (3.0 - 2.0 * f);

    float n000 = oilHash(i + vec3(0.0, 0.0, 0.0));
    float n100 = oilHash(i + vec3(1.0, 0.0, 0.0));
    float n010 = oilHash(i + vec3(0.0, 1.0, 0.0));
    float n110 = oilHash(i + vec3(1.0, 1.0, 0.0));
    float n001 = oilHash(i + vec3(0.0, 0.0, 1.0));
    float n101 = oilHash(i + vec3(1.0, 0.0, 1.0));
    float n011 = oilHash(i + vec3(0.0, 1.0, 1.0));
    float n111 = oilHash(i + vec3(1.0, 1.0, 1.0));

    return mix(mix(mix(n000, n100, u.x), mix(n010, n110, u.x), u.y),
               mix(mix(n001, n101, u.x), mix(n011, n111, u.x), u.y), u.z);
}

float oilFbm(vec3 p) {
    float value = 0.0;
    float amplitude = 0.5;
    for (int i = 0; i < 4; i++) {
        value += amplitude * oilNoise(p);
        p = p * 2.03 + vec3(13.7);
        amplitude *= 0.5;
    }
    return value * 1.066; // re-normalize to ~0..1
}

// three.js-style screen-space bump (dHdxy comes from dFdx/dFdy of the
// procedural height field, like bumpmap taps at one-pixel offsets)
vec3 paintNormal(vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDir) {
    vec3 vSigmaX = normalize(dFdx(surf_pos.xyz));
    vec3 vSigmaY = normalize(dFdy(surf_pos.xyz));
    vec3 vN = surf_norm;
    vec3 R1 = cross(vSigmaY, vN);
    vec3 R2 = cross(vN, vSigmaX);
    float fDet = dot(vSigmaX, R1) * faceDir;
    vec3 vGrad = sign(fDet) * (dHdxy.x * R1 + dHdxy.y * R2);
    return normalize(abs(fDet) * surf_norm - vGrad);
}

// 3-stop palette: color1 -> color2 -> color3
vec3 paintPalette(float x, vec3 c1, vec3 c2, vec3 c3) {
    vec3 a = mix(c1, c2, smoothstep(0.0, 0.55, x));
    return mix(a, c3, smoothstep(0.55, 1.0, x));
}

// for npm package, need to add this manually
float linearToRelativeLuminance2( const in vec3 color ) {
    vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
    return dot( weights, color.rgb );
}

void main() {

  //-------- oil paint ------------
  vec3 color1 = vec3(uC1r, uC1g, uC1b);
  vec3 color2 = vec3(uC2r, uC2g, uC2b);
  vec3 color3 = vec3(uC3r, uC3g, uC3b);

  // varnish layer over the paint
  float clearcoat = 0.55;
  float clearcoatRoughness = 0.35;

  #include <clipping_planes_fragment>

  // The animated noise domain travels on a circle when looping so a full
  // cycle lands exactly back on the starting painting
  vec3 flowOff;
  if (uLoop > 0.5) {
    float loopAngle = (uTime / uLoopDuration) * 6.28318530718;
    float loopRadius = 1.6 * uSpeed;
    flowOff = vec3(cos(loopAngle) * loopRadius, sin(loopAngle) * loopRadius, 0.0);
  } else {
    float t = uTime * uSpeed;
    flowOff = vec3(t * 0.50, t * 0.31, t * 0.17);
  }

  vec3 P = vPos * (uNoiseDensity * 1.1);
  vec3 q = P + flowOff;

  // --- stroke direction field: patches of consistent brush direction
  float dirN = oilFbm(q * 0.42 + vec3(7.7, 2.3, 4.1));
  float strokeAngle = dirN * 7.5398; // up to 1.2 turns across the canvas
  vec3 strokeDir = normalize(vec3(cos(strokeAngle), sin(strokeAngle), 0.28 * sin(strokeAngle * 0.7)));
  // bristles are grooves perpendicular to the stroke motion
  vec3 acrossDir = normalize(cross(strokeDir, vec3(0.0, 0.0, 1.0)) + vec3(0.0, 0.0, 0.3));
  vec3 liftDir = normalize(cross(strokeDir, acrossDir));

  // stroke space: stretched along the brush motion, tight across it, so the
  // paint daubs become long pulled strokes instead of round blobs
  vec3 S = vec3(dot(P, strokeDir) * 0.24, dot(P, acrossDir) * 1.75, dot(P, liftDir) * 0.9);

  float acrossPhase = dot(P, acrossDir) * (uFrequency * 3.4);
  // wobble sampled in stroke space, so the bristle hairlines bend along the
  // curve of each stroke instead of cutting straight across it
  float alongWobble = oilFbm(S * 1.4 + vec3(3.0)) * 6.0;

  // --- bristle grooves (fade out when they get thinner than a pixel)
  float bristleAA = clamp(1.0 - fwidth(acrossPhase) * 0.25, 0.0, 1.0);
  float bristle = sin(acrossPhase + alongWobble) * 0.5 + 0.5;
  bristle = mix(0.5, bristle, bristleAA);
  // some strokes are loaded with paint, some are dry-brushed
  float dryness = 0.45 + 0.55 * oilNoise(q * 1.3 + vec3(9.0));

  // --- paint daubs: posterized layers of paint with crevices between them
  float underN = oilFbm(S * 0.9 + flowOff * 0.6 + vec3(17.0)); // underpainting
  float daubN = oilFbm(S * 1.9 + flowOff + vec3(0.0, 0.0, 5.5));
  float LEVELS = 4.0;
  float band = clamp(daubN, 0.0, 0.999) * LEVELS;
  float lev = floor(band);
  float fr = fract(band);
  float daubAA = clamp(1.0 - fwidth(band) * 0.45, 0.0, 1.0);
  float body = smoothstep(0.0, 0.16, fr); // each layer rises quickly
  float inDaub = body * (1.0 - smoothstep(0.86, 1.0, fr)); // 0 at crevices
  inDaub = mix(0.75, inDaub, daubAA);

  // --- canvas weave, visible where the paint is thin
  float weave = (sin(vPos.x * 34.0) * sin(vPos.y * 34.0)) * 0.5 + 0.5;
  weave *= 0.65 + 0.35 * oilNoise(vPos * 21.0);

  // --- height field of the paint surface
  float thick = (lev + body) / LEVELS;
  float H = underN * 0.30
          + thick * 0.34
          + bristle * inDaub * dryness * 0.52
          + weave * (1.0 - thick) * 0.08;

  //-------- paint color ------------
  // strokes carry the color: palette follows the daub layers and the
  // underpainting, with a spatial sweep so the 3 colors still read as a
  // gradient across the canvas
  float gq = clamp((lev + 0.5) / LEVELS * 0.8 + underN * 0.45
                 + vPos.x * 0.10 + vPos.y * 0.07 - 0.21, 0.0, 1.0);
  vec3 paint = paintPalette(gq, color1, color2, color3);

  // per-daub pigment jitter — paint never mixes perfectly
  float jitter = oilNoise(q * 2.1 + vec3(lev * 19.0)) - 0.5;
  paint *= 1.0 + jitter * 0.18;
  // streaks of unmixed warm/cool pigment dragged through the stroke
  float tintN = oilNoise(S * 4.2 + vec3(31.0)) - 0.5;
  paint += tintN * vec3(0.10, 0.045, -0.075);

  // groove shading, crevice darkening, crest catchlights
  paint *= 0.80 + 0.28 * (bristle * dryness * inDaub + 0.4 * weave * (1.0 - thick));
  paint *= 1.0 - (1.0 - inDaub) * 0.26;
  paint += vec3(0.07) * pow(bristle, 5.0) * inDaub * thick;

  // slightly richer saturation, like wet oil paint
  float lum = dot(paint, vec3(0.299, 0.587, 0.114));
  paint = clamp(mix(vec3(lum), paint, 1.12), 0.0, 1.0);

  vec4 diffuseColor = vec4(paint, 1.0);

  //-------- materiality ------------
  ReflectedLight reflectedLight =
      ReflectedLight(vec3(0.0), vec3(0.0), vec3(0.0), vec3(0.0));
  vec3 totalEmissiveRadiance = emissive;

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

  // bump the lighting normal with the paint height field
  vec2 dHdxy = vec2(dFdx(H), dFdy(H)) * (2.4 * uAmplitude) * (0.25 + 0.75 * daubAA);
  dHdxy = clamp(dHdxy, vec2(-1.4), vec2(1.4));
  normal = paintNormal(-vViewPosition, normal, dHdxy, faceDirection);

  // baked studio key light + glints so the relief reads under any lighting
  vec3 keyDir = normalize(vec3(-0.35, 0.55, 0.76)); // view space, upper-left
  float keyDiffuse = clamp(dot(normal, keyDir), 0.0, 1.0);
  diffuseColor.rgb *= 0.84 + 0.38 * keyDiffuse;

  vec3 viewDirP = normalize(vViewPosition);
  vec3 halfDir = normalize(keyDir + viewDirP);
  float glint = pow(clamp(dot(normal, halfDir), 0.0, 1.0), 36.0);
  totalEmissiveRadiance += glint * (0.18 + 0.5 * thick) * vec3(1.0, 0.98, 0.92);

  #include <clearcoat_normal_fragment_begin>
  #include <clearcoat_normal_fragment_maps>
  #include <emissivemap_fragment>
  #include <lights_physical_fragment>
  #include <lights_fragment_begin>
  #include <lights_fragment_maps>
  #include <lights_fragment_end>
  #include <aomap_fragment>
    vec3 outgoingLight =
        reflectedLight.directDiffuse + reflectedLight.indirectDiffuse +
        reflectedLight.directSpecular + reflectedLight.indirectSpecular +
        totalEmissiveRadiance;
  #ifdef TRANSMISSION
    diffuseColor.a *=
        mix(saturate(1. - totalTransmission +
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
