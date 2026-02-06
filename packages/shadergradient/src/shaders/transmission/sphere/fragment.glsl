// Transmission-inspired sphere fragment shader

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

uniform float uTime;
uniform vec3 uColor1;
uniform vec3 uColor2;
uniform vec3 uColor3;
uniform float uTransmission;
uniform float uRefraction;
uniform float uChromaticAberration;
uniform float uFresnelPower;
uniform float uIridescenceStrength;

varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vWorldPosCustom;
varying vec3 vWorldNormalCustom;
varying vec3 vReflDir;
varying vec3 vRefractDir;
varying float vDistortion;
varying float vIridescence;

float fresnelFactor(vec3 viewDirection, vec3 normal, float power) {
  return pow(1.0 - max(dot(viewDirection, normal), 0.0), power);
}

vec3 sampleEnv(vec3 dir) {
#ifdef ENVMAP_TYPE_CUBE
  return textureCube(envMap, dir).rgb * envMapIntensity;
#else
  return vec3(0.5);
#endif
}

vec3 chromaticSample(vec3 dir, float ior, float aberration) {
#ifdef ENVMAP_TYPE_CUBE
  vec3 rDir = refract(dir, vWorldNormalCustom, 1.0 / max(ior - aberration, 1.01));
  vec3 gDir = refract(dir, vWorldNormalCustom, 1.0 / max(ior, 1.01));
  vec3 bDir = refract(dir, vWorldNormalCustom, 1.0 / max(ior + aberration, 1.01));
  return vec3(
    textureCube(envMap, rDir).r,
    textureCube(envMap, gDir).g,
    textureCube(envMap, bDir).b
  ) * envMapIntensity;
#else
  return vec3(0.35);
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
  
  vec3 viewDirection = normalize(vViewPosition);
  vec3 normal = normalize(vWorldNormalCustom);
  
  float fresnelVal = fresnelFactor(viewDirection, normal, uFresnelPower);
  float normalGradient = clamp(normal.y * 0.5 + 0.5, 0.0, 1.0);
  float uvGradient = clamp(vUv.y, 0.0, 1.0);
  float gradientMix = mix(uvGradient, normalGradient, 0.45 + 0.25 * fresnelVal);
  
  vec3 gradientColor = mix(uColor1, uColor2, gradientMix);
  gradientColor = mix(gradientColor, uColor3, clamp(fresnelVal + vDistortion * 0.1, 0.0, 1.0));
  
  vec3 reflectionColor = sampleEnv(vReflDir);
  float aberration = uChromaticAberration * (1.0 + abs(vDistortion));
  vec3 refractionColor = chromaticSample(-viewDirection, uRefraction, aberration);
  
  float iridescence = sin(vIridescence * 6.0 + uTime * 0.6);
  vec3 film = mix(uColor2, uColor3, 0.5 + 0.5 * iridescence) * uIridescenceStrength;
  
  vec3 envColor = mix(refractionColor, reflectionColor, 0.35 + 0.35 * fresnelVal);
  vec3 finalColor = mix(gradientColor, envColor, 0.75) + film;
  finalColor += (0.05 + 0.15 * fresnelVal) * vDistortion;
  
  float alpha = clamp(uTransmission + fresnelVal * 0.45, 0.08, 1.0);
  
  diffuseColor.rgb = finalColor;
  diffuseColor.a = alpha;
  
  vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + 
                       reflectedLight.directSpecular + reflectedLight.indirectSpecular + 
                       totalEmissiveRadiance;
  
  outgoingLight += finalColor;
  
  gl_FragColor = vec4(outgoingLight, diffuseColor.a);
  
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
  #include <fog_fragment>
  #include <premultiplied_alpha_fragment>
  #include <dithering_fragment>
}
