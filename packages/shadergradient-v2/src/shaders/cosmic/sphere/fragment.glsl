// Cosmic Sphere Fragment Shader - Nebula Particle Effect

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
varying float vNebulaIntensity;
varying float vParticleDensity;
varying vec3 vCosmicSwirl;

uniform float uTime;
uniform float uSpeed;

uniform float uC1r;
uniform float uC1g;
uniform float uC1b;
uniform float uC2r;
uniform float uC2g;
uniform float uC2b;
uniform float uC3r;
uniform float uC3g;
uniform float uC3b;

// Nebula helper functions
float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

float noise2D(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    
    return mix(mix(hash(i + vec2(0.0, 0.0)), 
                   hash(i + vec2(1.0, 0.0)), u.x),
               mix(hash(i + vec2(0.0, 1.0)), 
                   hash(i + vec2(1.0, 1.0)), u.x), u.y);
}

// Fractal Brownian Motion for complex nebula patterns
float fbm(vec2 p) {
    float value = 0.0;
    float amplitude = 0.5;
    float frequency = 1.0;
    
    for(int i = 0; i < 5; i++) {
        value += amplitude * noise2D(p * frequency);
        amplitude *= 0.5;
        frequency *= 2.0;
    }
    return value;
}

// Star field generation
float stars(vec2 p, float density) {
    vec2 n = floor(p * density);
    vec2 f = fract(p * density);
    
    float d = 1.0;
    for(int i = -1; i <= 1; i++) {
        for(int j = -1; j <= 1; j++) {
            vec2 g = vec2(float(i), float(j));
            vec2 o = hash(n + g) * vec2(1.0);
            vec2 r = g + o - f;
            d = min(d, dot(r, r));
        }
    }
    
    return 1.0 - smoothstep(0.0, 0.02, sqrt(d));
}

// for npm package, need to add this manually
float linearToRelativeLuminance2( const in vec3 color ) {
    vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
    return dot( weights, color.rgb );
}

void main() {

  //-------- Cosmic Nebula Gradient ------------
  vec3 color1 = vec3(uC1r, uC1g, uC1b);
  vec3 color2 = vec3(uC2r, uC2g, uC2b);
  vec3 color3 = vec3(uC3r, uC3g, uC3b);
  
  float clearcoat = 1.0;
  float clearcoatRoughness = 0.1; // Very reflective for cosmic shine

  #include <clipping_planes_fragment>

  float t = uTime * uSpeed;
  
  // Calculate distance from center for radial effects
  float distanceFromCenter = length(vPos);
  float angle = atan(vPos.y, vPos.x);
  
  // Create complex nebula patterns using FBM
  vec2 nebulaCoords = vPos.xy * 3.0 + vCosmicSwirl.xy;
  float nebulaPattern1 = fbm(nebulaCoords + t * 0.1);
  float nebulaPattern2 = fbm(nebulaCoords * 2.0 + t * 0.15);
  float nebulaPattern3 = fbm(nebulaCoords * 4.0 + t * 0.2);
  
  // Combine nebula patterns
  float combinedNebula = (nebulaPattern1 + nebulaPattern2 * 0.5 + nebulaPattern3 * 0.25) / 1.75;
  
  // Create particle-like bright spots
  float particleField = stars(vPos.xy * 20.0 + t * 0.5, 50.0);
  float microParticles = stars(vPos.xy * 80.0 + t * 1.0, 200.0) * 0.5;
  
  // Create cosmic dust clouds
  float dustClouds = fbm(vPos.xy * 8.0 + t * 0.05) * 0.3;
  
  // Energy streams
  float energyStream1 = sin(vPos.x * 15.0 + t * 3.0 + angle * 2.0) * 0.1;
  float energyStream2 = cos(vPos.y * 20.0 + t * 2.5 + distanceFromCenter * 5.0) * 0.1;
  
  // Cosmic gradient mixing with nebula influence
  float gradientX = smoothstep(-3.0, 3.0, vPos.x + combinedNebula * 2.0 + vCosmicSwirl.x * 3.0);
  float gradientY = smoothstep(-3.0, 3.0, vPos.y + vNebulaIntensity * 1.5 + vCosmicSwirl.y * 2.0);
  float gradientZ = smoothstep(-2.0, 2.0, vPos.z + dustClouds * 2.0);
  
  // Multi-layer color mixing
  vec3 baseGradient = mix(
    mix(color1, color2, gradientX), 
    color3, 
    gradientY * 0.6 + gradientZ * 0.4
  );
  
  // Add nebula color variations
  vec3 nebulaColor = baseGradient;
  nebulaColor.r += combinedNebula * 0.3 + energyStream1;
  nebulaColor.g += vNebulaIntensity * 0.2 + energyStream2;
  nebulaColor.b += dustClouds * 0.4 + abs(vCosmicSwirl.z) * 0.5;
  
  // Add particle brightness
  vec3 particleGlow = vec3(
    particleField * 0.8 + microParticles * 0.4,
    particleField * 0.6 + microParticles * 0.3,
    particleField * 0.9 + microParticles * 0.5
  );
  
  // Create pulsing cosmic energy
  float cosmicPulse = sin(t * 1.5 + distanceFromCenter * 3.0) * 0.1 + 1.0;
  
  // Combine all effects
  vec3 finalColor = (nebulaColor + particleGlow * 2.0) * cosmicPulse;
  
  // Add cosmic rim lighting effect
  float rimLight = pow(1.0 - abs(dot(normalize(vNormal), normalize(vViewPosition))), 2.0);
  finalColor += rimLight * 0.3 * (color1 + color2 + color3) / 3.0;
  
  // Enhance particle density areas
  finalColor = mix(finalColor, finalColor * 1.5, vParticleDensity * 0.5);
  
  // Add subtle color temperature variation
  float temperature = sin(angle * 3.0 + t * 0.8) * 0.1;
  finalColor.r += temperature * 0.1;
  finalColor.b -= temperature * 0.1;

  vec4 diffuseColor = vec4(finalColor, 1.0);

  //-------- Enhanced Materiality for Cosmic Effect ------------
  ReflectedLight reflectedLight = ReflectedLight(vec3(0.0), vec3(0.0), vec3(0.0), vec3(0.0));
  vec3 totalEmissiveRadiance = emissive + finalColor * 0.2; // Strong emission for nebula glow

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
