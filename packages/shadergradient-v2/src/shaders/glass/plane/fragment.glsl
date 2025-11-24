
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
// #include <transmissionmap_pars_fragment>
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
// include를 통해 가져온 값은 대부분 환경, 빛 등을 계산하기 위해서 기본 fragment
// shader의 값들을 받아왔습니다. 일단은 무시하셔도 됩니다.

varying vec3 vNormal;
varying float displacement;
varying vec3 vPos;
varying float vDistort;

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
float linearToRelativeLuminance2( const in vec3 color ) {
    vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
    return dot( weights, color.rgb );
}

void main() {

  // Glass Effect V2 (Crystalline/Faceted)
  
  vec3 color1 = vec3(uC1r, uC1g, uC1b);
  vec3 color2 = vec3(uC2r, uC2g, uC2b);
  vec3 color3 = vec3(uC3r, uC3g, uC3b);

  // 1. Create Facets using noise derivatives
  // We use the position to create sharp transitions
  vec3 facetPos = vPos * 2.0;
  float facetNoise = smoothstep(0.4, 0.6, sin(facetPos.x) * sin(facetPos.z));
  
  // 2. Calculate Refraction Vector with Dispersion
  vec3 viewDir = normalize(vViewPosition);
  vec3 viewNormal = normalize(vNormal);
  
  // Perturb normal based on facets
  vec3 facetNormal = normalize(viewNormal + vec3(facetNoise * 0.2));
  
  // 3. Dispersion (Prismatic Effect)
  float dispersion = 0.05;
  
  // Sample gradient with dispersed coordinates
  vec3 posR = vPos + refract(viewDir, facetNormal, 0.9) * dispersion;
  vec3 posG = vPos + refract(viewDir, facetNormal, 0.92) * dispersion;
  vec3 posB = vPos + refract(viewDir, facetNormal, 0.94) * dispersion;

  // Calculate gradient for each channel
  // R channel
  vec3 c1R = mix(mix(color1, color2, smoothstep(-3.0, 3.0, posR.x)), color3, posR.z);
  // G channel
  vec3 c1G = mix(mix(color1, color2, smoothstep(-3.0, 3.0, posG.x)), color3, posG.z);
  // B channel
  vec3 c1B = mix(mix(color1, color2, smoothstep(-3.0, 3.0, posB.x)), color3, posB.z);

  // Combine
  vec3 glassColor = vec3(c1R.r, c1G.g, c1B.b);
  
  // 4. Add Internal Reflections / Sparkle
  float sparkle = pow(max(0.0, dot(reflect(-viewDir, facetNormal), vec3(1.0))), 20.0);
  glassColor += vec3(sparkle) * 0.8;
  
  // 5. Frost/Texture
  // Add subtle noise texture
  float frost = fract(sin(dot(vPos.xy ,vec2(12.9898,78.233))) * 43758.5453);
  glassColor = mix(glassColor, vec3(0.9), frost * 0.05);

  vec4 diffuseColor = vec4(glassColor, 1.0);

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
  // #include <transmissionmap_fragment>
  #include <lights_physical_fragment>
  #include <lights_fragment_begin>
  #include <lights_fragment_maps>
  #include <lights_fragment_end>
  #include <aomap_fragment>
    vec3 outgoingLight =
        reflectedLight.directDiffuse + reflectedLight.indirectDiffuse +
        reflectedLight.directSpecular + reflectedLight.indirectSpecular;
    //위에서 정의한 diffuseColor에 환경이나 반사값들을 반영한 값.
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
  // gl_FragColor가 fragment shader를 통해 나타나는 최종값으로, diffuseColor에서
  // 정의한 그라디언트 색상 위에 반사나 빛을 계산한 값을 최종값으로 정의.
  // gl_FragColor = vec4(mix(mix(color1, color3, smoothstep(-3.0, 3.0,vPos.x)),
  // color2, vNormal.z), 1.0); 위처럼 최종값을 그라디언트 값 자체를 넣으면 환경
  // 영향없는 그라디언트만 표현됨.
}
