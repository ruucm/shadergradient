// Impasto WaterPlane Fragment Shader - oil paint dragged by a coarse brush:
// directional stroke ribs, bristle hairlines, posterized pigment daubs,
// bump-lit paint relief and canvas weave showing through the thin passages

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
varying float displacement;
varying vec3 vPos;
varying float vDistort;
varying float vSheen;
varying vec2 vUv;

uniform float uTime;
uniform float uSpeed;
uniform float uLoop;
uniform float uLoopDuration;

uniform float uC1r;
uniform float uC1g;
uniform float uC1b;
uniform float uC2r;
uniform float uC2g;
uniform float uC2b;
uniform float uC3r;
uniform float uC3g;
uniform float uC3b;

//-------- oil paint helpers ------------
float paintHash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

float paintNoise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);

    return mix(mix(paintHash(i + vec2(0.0, 0.0)),
                   paintHash(i + vec2(1.0, 0.0)), u.x),
               mix(paintHash(i + vec2(0.0, 1.0)),
                   paintHash(i + vec2(1.0, 1.0)), u.x), u.y);
}

// 4-octave fractal noise, rotated each octave to avoid axis-aligned artifacts
float paintFbm(vec2 p) {
    float v = 0.0;
    float a = 0.5;
    mat2 rot = mat2(0.8, 0.6, -0.6, 0.8);
    for (int i = 0; i < 4; i++) {
        v += a * paintNoise(p);
        p = rot * p * 2.07;
        a *= 0.5;
    }
    return v;
}

// anisotropic fbm: octaves are NOT rotated, so the streak direction survives
// every octave — this is what keeps brush marks directional
float strokeFbm(vec2 p) {
    float v = 0.0;
    float a = 0.5;
    for (int i = 0; i < 4; i++) {
        v += a * paintNoise(p);
        p = p * vec2(1.9, 2.3) + vec2(7.3, 3.1);
        a *= 0.55;
    }
    return v;
}

// for npm package, need to add this manually
float linearToRelativeLuminance2( const in vec3 color ) {
    vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
    return dot( weights, color.rgb );
}

void main() {

  //-------- Oil Paint Impasto ------------
  vec3 color1 = vec3(uC1r, uC1g, uC1b);
  vec3 color2 = vec3(uC2r, uC2g, uC2b);
  vec3 color3 = vec3(uC3r, uC3g, uC3b);

  float clearcoat = 1.0;
  float clearcoatRoughness = 0.4;

  #include <clipping_planes_fragment>

  float t = uTime * uSpeed;

  // The brush drifts slowly through the canvas; circular path when looping (seamless)
  vec2 flow;
  if (uLoop > 0.5) {
    float loopAngle = (uTime / uLoopDuration) * 6.28318530718;
    flow = vec2(cos(loopAngle), sin(loopAngle)) * (0.9 * uSpeed);
  } else {
    flow = vec2(0.06 * t, -0.045 * t);
  }

  vec2 p = vPos.xy * 0.45;

  //-------- brush stroke field ------------
  // slowly swirling direction field: strokes follow the wet paint flow
  float ang = paintFbm(p * 0.35 + flow * 0.25) * 6.28318530718;
  vec2 dir = vec2(cos(ang), sin(ang));
  // stroke-aligned coordinates: x runs along the bristles, y across them
  vec2 sp = vec2(dot(p, dir), dot(p, vec2(-dir.y, dir.x)));

  // elongated ribs of thick paint left by the brush (ridged fbm = sharp crests)
  float sn = strokeFbm(vec2(sp.x * 1.4, sp.y * 7.0) + flow);
  float strokes = pow(1.0 - abs(sn * 2.0 - 1.0), 1.4);
  // neighbouring strokes carry different amounts of paint
  float strokeVar = strokeFbm(vec2(sp.x * 0.9, sp.y * 3.2) - 0.5 * flow);
  // fine bristle hairlines inside each stroke
  float bristle = 0.6 * paintNoise(vec2(sp.x * 4.0, sp.y * 48.0)) +
                  0.4 * paintNoise(vec2(sp.x * 2.5, sp.y * 86.0));

  //-------- pigment daubs (posterized color field) ------------
  vec2 q = vec2(paintFbm(p + flow),
                paintFbm(p + vec2(3.7, 8.1) - 0.6 * flow));
  float f = paintFbm(p + 1.6 * q);
  // widen the dynamic range so the full palette shows up as daubs
  f = clamp((f - 0.47) * 2.0 + 0.5, 0.0, 1.0);

  // quantize the gradient into discrete daubs; stroke texture tears the edges
  // so every color boundary reads as a dragged brush mark, not a smooth blend
  float fs = f * 4.0;
  float band = floor(fs);
  float ragged = (strokes - 0.5) * 0.7 + (bristle - 0.5) * 0.2;
  float edge = smoothstep(0.32, 0.68, clamp(fract(fs) + ragged, 0.0, 1.0));
  float fq = (band + edge) / 4.0;

  //-------- paint relief (impasto height) ------------
  float boundary = edge * (1.0 - edge) * 4.0; // paint piles up where daubs meet
  float paintH = strokes * 0.5 + strokeVar * 0.18 + bristle * 0.16 + boundary * 0.32;

  // canvas weave shows through where the paint is thin
  vec2 wp = p * 120.0 + (q - 0.5) * 3.0;
  float weave = sin(wp.x) * sin(wp.y) * 0.5 + 0.5;
  float thin = 1.0 - smoothstep(0.28, 0.62, paintH);
  paintH += weave * 0.08 * thin;

  //-------- pigment color ------------
  vec3 paint = mix(color1, color2, smoothstep(0.04, 0.62, fq));
  paint = mix(paint, color3, smoothstep(0.56, 0.96, fq));

  // every daub is its own batch of paint — slightly different mix each time
  float bandHash = paintHash(vec2(band, band * 1.7));
  paint *= 0.94 + 0.12 * bandHash;

  // uneven pigment density — no daub is mixed perfectly
  float mottle = paintFbm(p * 2.2 - q * 1.3);
  paint *= 0.92 + 0.18 * mottle;
  paint = mix(paint, mix(color2, color3, strokes),
              0.1 * smoothstep(0.45, 0.9, mottle));

  // adjacent strokes catch the light differently (Van Gogh value jitter)
  paint *= 0.9 + 0.22 * (strokeVar * 2.0 - 1.0);

  // crevices between strokes hold shadow; ridge tops carry lighter paint
  paint *= 0.84 + 0.34 * smoothstep(0.12, 0.85, paintH);
  // raw canvas dims the thin passages
  paint *= 1.0 - 0.1 * thin * (0.35 + 0.65 * weave);
  // light catches the very top of the ridges even on dark pigment,
  // so texture survives inside the darkest daubs
  paint += vec3(0.075, 0.07, 0.06) * smoothstep(0.55, 0.95, paintH);
  // crests of the surface folds catch a warm sheen (vSheen from vertex)
  paint += vec3(1.0, 0.96, 0.88) * 0.08 * vSheen * vSheen;

  vec4 diffuseColor = vec4(paint, 1.0);

  //-------- materiality ------------
  ReflectedLight reflectedLight =
      ReflectedLight(vec3(0.0), vec3(0.0), vec3(0.0), vec3(0.0));
  vec3 totalEmissiveRadiance = emissive + paint * 0.18; // keep pigments rich under 3d light

  #ifdef TRANSMISSION
    float totalTransmission = transmission;
  #endif
  #include <logdepthbuf_fragment>
  #include <map_fragment>
  #include <color_fragment>
  #include <alphamap_fragment>
  #include <alphatest_fragment>
  #include <roughnessmap_fragment>

  // wet glossy paint on the ridge tops, dry matte paint in the crevices
  roughnessFactor = clamp(roughnessFactor - 0.4 * smoothstep(0.5, 0.95, paintH), 0.06, 1.0);

  #include <metalnessmap_fragment>
  #include <normal_fragment_begin>
  #include <normal_fragment_maps>

  // impasto relief: bend the shading normal with the screen-space slope of the
  // paint height so light truly rakes across every stroke (three.js bumpmap math)
  {
    vec2 dHdxy = vec2(dFdx(paintH), dFdy(paintH)) * 13.0;
    vec3 vSigmaX = normalize(dFdx(-vViewPosition));
    vec3 vSigmaY = normalize(dFdy(-vViewPosition));
    vec3 vN = normal;
    vec3 R1 = cross(vSigmaY, vN);
    vec3 R2 = cross(vN, vSigmaX);
    float fDet = dot(vSigmaX, R1) * (float(gl_FrontFacing) * 2.0 - 1.0);
    vec3 vGrad = sign(fDet) * (dHdxy.x * R1 + dHdxy.y * R2);
    normal = normalize(abs(fDet) * vN - vGrad);
  }

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
