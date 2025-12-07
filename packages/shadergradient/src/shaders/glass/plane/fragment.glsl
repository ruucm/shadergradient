// Glass Plane Fragment Shader - Transparency & Refraction

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

// transmission is already defined by Three.js when TRANSMISSION is enabled
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <lights_physical_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <shadowmap_pars_fragment>
#include <transmission_pars_fragment>

// Custom uniforms for glass effect
uniform float uTime;
uniform vec3 uColor1;
uniform vec3 uColor2;
uniform vec3 uColor3;
uniform float uTransparency;
uniform float uRefraction;
uniform float uChromaticAberration;
uniform float uFresnelPower;
uniform float uReflectivity;
// envMap and envMapIntensity are provided by Three.js

varying vec2 vUv;
varying vec3 vPosition;
varying vec3 vNormal;
varying vec3 vGlassWorldPos;
varying vec3 vReflect;
varying vec3 vRefract;

// Fresnel calculation
float fresnel(vec3 viewDirection, vec3 normal, float power) {
  return pow(1.0 - dot(viewDirection, normal), power);
}

// Chromatic aberration for refraction
vec3 chromaticRefraction(vec3 viewDirection, vec3 normal, float ior, float chromaticStrength) {
  vec3 refractedR = refract(viewDirection, normal, 1.0 / (ior - chromaticStrength));
  vec3 refractedG = refract(viewDirection, normal, 1.0 / ior);
  vec3 refractedB = refract(viewDirection, normal, 1.0 / (ior + chromaticStrength));
  
  #ifdef ENVMAP_TYPE_CUBE
  return vec3(
    textureCube(envMap, refractedR).r,
    textureCube(envMap, refractedG).g,
    textureCube(envMap, refractedB).b
  );
  #else
  return vec3(0.5);
  #endif
}

void main() {
  #include <clipping_planes_fragment>
  
  vec4 diffuseColor = vec4(diffuse, opacity);
  ReflectedLight reflectedLight = ReflectedLight(vec3(0.0), vec3(0.0), vec3(0.0), vec3(0.0));
  vec3 totalEmissiveRadiance = emissive;
  
  #include <logdepthbuf_fragment>
  #include <map_fragment>
  #include <color_fragment>
  #include <alphamap_fragment>
  #include <alphatest_fragment>
  #include <specularmap_fragment>
  #include <roughnessmap_fragment>
  #include <metalnessmap_fragment>
  #include <normal_fragment_begin>
  #include <normal_fragment_maps>
  #include <clearcoat_normal_fragment_begin>
  #include <clearcoat_normal_fragment_maps>
  #include <emissivemap_fragment>
  
  // Glass-specific calculations
  vec3 viewDirection = normalize(vViewPosition);
  vec3 worldNormal = normalize(vNormal);
  
  // Calculate Fresnel effect
  float fresnelFactor = fresnel(viewDirection, worldNormal, uFresnelPower);
  
  // Base glass color gradient
  vec3 gradientColor = mix(uColor1, uColor2, vUv.y);
  gradientColor = mix(gradientColor, uColor3, fresnelFactor);
  
  // Reflection
  #ifdef ENVMAP_TYPE_CUBE
  vec3 reflectionColor = textureCube(envMap, vReflect).rgb * envMapIntensity;
  #else
  vec3 reflectionColor = vec3(0.5);
  #endif
  
  // Refraction with chromatic aberration
  vec3 refractionColor;
  #ifdef ENVMAP_TYPE_CUBE
  if (uChromaticAberration > 0.0) {
    refractionColor = chromaticRefraction(-viewDirection, worldNormal, uRefraction, uChromaticAberration);
  } else {
    refractionColor = textureCube(envMap, vRefract).rgb;
  }
  refractionColor *= envMapIntensity;
  #else
  refractionColor = vec3(0.3);
  #endif
  
  // Mix reflection and refraction based on Fresnel
  vec3 envColor = mix(refractionColor, reflectionColor, fresnelFactor * uReflectivity);
  
  // Combine with gradient color
  vec3 finalColor = mix(gradientColor, envColor, 0.7);
  
  // Apply transparency
  float finalAlpha = mix(uTransparency, 1.0, fresnelFactor * 0.5);
  
  // Set diffuse color for standard lighting
  diffuseColor.rgb = finalColor;
  diffuseColor.a = finalAlpha;
  
  // Skip transmission_fragment to avoid conflicts
  
  vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + 
                       reflectedLight.directSpecular + reflectedLight.indirectSpecular + 
                       totalEmissiveRadiance;
  
  // Add our glass color contribution
  outgoingLight += finalColor * 0.8;
  
  gl_FragColor = vec4(outgoingLight, diffuseColor.a);
  
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
  #include <fog_fragment>
  #include <premultiplied_alpha_fragment>
  #include <dithering_fragment>
}
