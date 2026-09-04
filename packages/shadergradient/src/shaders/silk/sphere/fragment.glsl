// Silk Fragment Shader - Apple-style flowing silk
// Three-stop gradient driven by the warp field, thread-like sheen along the
// folds, a soft virtual key light and an iridescent Fresnel rim.

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
varying vec2 vUv;
varying float vSilk;
varying float vFold;

uniform float uTime;
uniform float uSpeed;
uniform float uIntensity;

uniform float uC1r;
uniform float uC1g;
uniform float uC1b;
uniform float uC2r;
uniform float uC2g;
uniform float uC2b;
uniform float uC3r;
uniform float uC3g;
uniform float uC3b;

// for npm package, need to add this manually
// 'linearToRelativeLuminance' : function already has a body
float linearToRelativeLuminance2( const in vec3 color ) {
    vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
    return dot( weights, color.rgb );
}

void main() {

  //-------- silk gradient ------------
  vec3 color1 = vec3(uC1r, uC1g, uC1b);
  vec3 color2 = vec3(uC2r, uC2g, uC2b);
  vec3 color3 = vec3(uC3r, uC3g, uC3b);
  float clearcoat = 1.0;
  float clearcoatRoughness = 0.25;

  #include <clipping_planes_fragment>

  float t = uTime * uSpeed;

  // flow: where on the color1 -> color2 -> color3 ramp this pixel sits.
  // Mostly the warp field, with a gentle diagonal so the colors keep their
  // place while the folds drift through them. Uses the (unit) position rather
  // than uv so there is no seam on the sphere.
  float flow = 0.56 + 0.42 * vSilk
             + 0.35 * vPos.x
             + 0.25 * vPos.y
             + 0.06 * vFold;
  flow = clamp(flow, 0.0, 1.0);

  vec3 col = mix(color1, color2, smoothstep(0.12, 0.62, flow));
  col = mix(col, color3, smoothstep(0.56, 1.0, flow));

  // thread-like shading: ridges brighten, valleys deepen
  col *= 1.0 + 0.16 * vFold - 0.22 * max(-vSilk, 0.0);

  vec4 diffuseColor = vec4(col, 1.0);

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
  #include <clearcoat_normal_fragment_begin>
  #include <clearcoat_normal_fragment_maps>
  #include <emissivemap_fragment>

  //-------- silk sheen (view space, uses the rebuilt normal) ------------
  {
    vec3 N = normal;
    vec3 V = normalize(vViewPosition);
    float NdV = clamp(dot(N, V), 0.0, 1.0);

    // virtual key light, upper-left of the camera
    vec3 L = normalize(vec3(-0.35, 0.65, 0.7));
    vec3 H = normalize(L + V);
    float NdH = max(dot(N, H), 0.0);
    float specSharp = pow(NdH, 110.0);
    float specSoft = pow(NdH, 9.0);

    // highlight tinted by the surface so it never washes out to flat white
    vec3 sheenColor = mix(col, vec3(1.0), 0.72);

    // iridescent Fresnel rim, slowly cycling hue along the rim
    float fresnel = pow(1.0 - NdV, 3.2);
    vec3 irid = 0.5 + 0.5 * cos(6.28318530718 * (fresnel * 0.85 + vSilk * 0.12 + t * 0.03 + vec3(0.0, 0.33, 0.67)));
    vec3 rim = mix(vec3(1.0), irid, 0.65) * fresnel;

    float amount = uIntensity * 2.0;
    totalEmissiveRadiance += sheenColor * (specSharp * 0.26 + specSoft * 0.12) * amount;
    totalEmissiveRadiance += rim * mix(color3, vec3(1.0), 0.5) * 0.28 * amount;
  }

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
