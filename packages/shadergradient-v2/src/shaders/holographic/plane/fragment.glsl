
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

// Helper function for spectral color shift
vec3 spectral_shift(float t) {
    return vec3(
        0.5 + 0.5 * cos(6.28318 * (t + 0.0)),
        0.5 + 0.5 * cos(6.28318 * (t + 0.33)),
        0.5 + 0.5 * cos(6.28318 * (t + 0.67))
    );
}

void main() {
  vec3 color1 = vec3(uC1r, uC1g, uC1b);
  vec3 color2 = vec3(uC2r, uC2g, uC2b);
  vec3 color3 = vec3(uC3r, uC3g, uC3b);

  #include <clipping_planes_fragment>

  // Calculate Fresnel effect based on view direction and normal
  vec3 viewDir = normalize(vViewPosition);
  vec3 viewNormal = normalize(vNormal);
  float fresnel = 1.0 - abs(dot(viewDir, viewNormal));
  fresnel = pow(fresnel, 2.0); // Sharpen the effect

  // Base gradient
  vec3 gradientColor = mix(mix(color1, color2, smoothstep(-3.0, 3.0, vPos.x)), color3, vPos.z);
  
  // Holographic/Iridescent effect V2 (Digital/Tech)
  
  // 1. Scanlines
  float scanline = sin(vPos.y * 50.0 - uTime * 5.0) * 0.5 + 0.5;
  scanline = pow(scanline, 3.0); // Sharpen scanlines

  // 2. Digital Glitch / Tech Pattern
  // Simple grid pattern
  float gridX = step(0.98, fract(vPos.x * 10.0));
  float gridY = step(0.98, fract(vPos.y * 10.0));
  float grid = max(gridX, gridY);

  // 3. Aggressive Spectral Shift
  // Use a more quantized, digital look for the iridescence
  float techFresnel = pow(fresnel, 0.5);
  vec3 iridescence = spectral_shift(techFresnel * 3.0 + vPos.y * 0.5 + uTime * 0.2);
  
  // 4. Combine
  // Base is dark, overlay is bright
  vec3 finalBaseColor = mix(gradientColor * 0.2, iridescence, techFresnel);
  
  // Add scanlines (darken)
  finalBaseColor *= (0.8 + 0.2 * scanline);
  
  // Add grid (brighten)
  finalBaseColor += vec3(0.5, 0.8, 1.0) * grid * 0.5 * techFresnel;
  
  // Add a strong rim glow
  finalBaseColor += vec3(0.2, 0.5, 1.0) * pow(fresnel, 4.0) * 2.0;

  vec4 diffuseColor = vec4(finalBaseColor, 1.0);

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
