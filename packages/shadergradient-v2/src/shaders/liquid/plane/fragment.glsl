
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

uniform float uTime;

varying vec3 color1;
varying vec3 color2;
varying vec3 color3;

void main() {
  vec3 color1 = vec3(uC1r, uC1g, uC1b);
  vec3 color2 = vec3(uC2r, uC2g, uC2b);
  vec3 color3 = vec3(uC3r, uC3g, uC3b);

  #include <clipping_planes_fragment>

  // Liquid Glass Effect V2 (Domain Warping)
  
  // 1. Calculate view-dependent variables
  vec3 viewDir = normalize(vViewPosition);
  vec3 viewNormal = normalize(vNormal);
  float fresnel = 1.0 - abs(dot(viewDir, viewNormal));
  fresnel = pow(fresnel, 3.0);

  // 2. Domain Warping for Fluid Mixing
  // We warp the position used for sampling the gradient
  vec3 warpPos = vPos * 0.5;
  
  // First layer of warp
  vec3 q = vec3(
      sin(warpPos.x * 2.0 + uTime * 0.5),
      sin(warpPos.y * 2.0 + uTime * 0.6),
      sin(warpPos.z * 2.0 + uTime * 0.4)
  );
  
  // Second layer of warp
  vec3 r = vec3(
      cos(warpPos.x * 3.0 + q.z + uTime * 0.2),
      cos(warpPos.y * 3.0 + q.x + uTime * 0.3),
      cos(warpPos.z * 3.0 + q.y + uTime * 0.1)
  );
  
  // Final sampling position
  vec3 fluidPos = vPos + r * 2.0;

  // 3. Chromatic Aberration with Fluid Distortion
  float aberrationStrength = 0.05;
  vec3 aberrationOffset = viewNormal * aberrationStrength;
  
  vec3 posR = fluidPos + aberrationOffset;
  vec3 posG = fluidPos;
  vec3 posB = fluidPos - aberrationOffset;

  // Mix colors using the warped coordinates
  // R channel
  vec3 c1R = mix(mix(color1, color2, smoothstep(-3.0, 3.0, posR.x)), color3, sin(posR.z * 0.5));
  // G channel
  vec3 c1G = mix(mix(color1, color2, smoothstep(-3.0, 3.0, posG.x)), color3, sin(posG.z * 0.5));
  // B channel
  vec3 c1B = mix(mix(color1, color2, smoothstep(-3.0, 3.0, posB.x)), color3, sin(posB.z * 0.5));

  vec3 liquidColor = vec3(c1R.r, c1G.g, c1B.b);

  // 4. Wet Highlights
  // Dual specular for extra wetness
  float specular1 = pow(max(0.0, dot(reflect(-viewDir, viewNormal), vec3(0.0, 1.0, 0.0))), 32.0);
  float specular2 = pow(max(0.0, dot(reflect(-viewDir, viewNormal), vec3(1.0, 1.0, 1.0))), 16.0);
  
  liquidColor += vec3(specular1) * 0.8;
  liquidColor += vec3(specular2) * 0.4;

  // 5. Deep Fresnel
  liquidColor = mix(liquidColor, vec3(0.8, 0.9, 1.0), fresnel * 0.6);

  vec4 diffuseColor = vec4(liquidColor, 1.0);

  ReflectedLight reflectedLight = ReflectedLight(vec3(0.0), vec3(0.0), vec3(0.0), vec3(0.0));
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
  #include <lights_physical_fragment>
  #include <lights_fragment_begin>
  #include <lights_fragment_maps>
  #include <lights_fragment_end>
  #include <aomap_fragment>

  vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse +
                       reflectedLight.directSpecular + reflectedLight.indirectSpecular;

  #ifdef TRANSMISSION
    diffuseColor.a *= mix(saturate(1. - totalTransmission + dot(vec3(0.2126, 0.7152, 0.0722), reflectedLight.directSpecular + reflectedLight.indirectSpecular)), 1.0, metalness);
  #endif

  #include <tonemapping_fragment>
  #include <encodings_fragment>
  #include <fog_fragment>
  #include <premultiplied_alpha_fragment>
  #include <dithering_fragment>

  gl_FragColor = vec4(outgoingLight, diffuseColor.a);
}
