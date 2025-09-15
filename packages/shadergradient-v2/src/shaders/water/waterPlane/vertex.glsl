// Water Vertex Shader for WaterPlane geometry (specialized for water surfaces)

// Simplex noise functions
vec3 mod289(vec3 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 mod289(vec4 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute(vec4 x) {
  return mod289(((x*34.0)+1.0)*x);
}

vec4 taylorInvSqrt(vec4 r) {
  return 1.79284291400159 - 0.85373472095314 * r;
}

float snoise(vec3 v) { 
  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

  vec3 i  = floor(v + dot(v, C.yyy) );
  vec3 x0 =   v - i + dot(i, C.xxx) ;

  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min( g.xyz, l.zxy );
  vec3 i2 = max( g.xyz, l.zxy );

  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy;
  vec3 x3 = x0 - D.yyy;

  i = mod289(i); 
  vec4 p = permute( permute( permute( 
             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
           + i.y + vec4(0.0, i1.y, i2.y, 1.0 )) 
           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

  float n_ = 0.142857142857;
  vec3  ns = n_ * D.wyz - D.xzx;

  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);

  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_ );

  vec4 x = x_ *ns.x + ns.yyyy;
  vec4 y = y_ *ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);

  vec4 b0 = vec4( x.xy, y.xy );
  vec4 b1 = vec4( x.zw, y.zw );

  vec4 s0 = floor(b0)*2.0 + 1.0;
  vec4 s1 = floor(b1)*2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));

  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

  vec3 p0 = vec3(a0.xy,h.x);
  vec3 p1 = vec3(a0.zw,h.y);
  vec3 p2 = vec3(a1.xy,h.z);
  vec3 p3 = vec3(a1.zw,h.w);

  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;

  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
  m = m * m;
  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), 
                                dot(p2,x2), dot(p3,x3) ) );
}

// Varyings
varying vec2 vUv;
varying vec3 vPosition;
varying vec3 vNormal;
varying float vWaveHeight;
varying vec3 vWorldPosition;
varying vec2 vFlowCoords;

// Uniforms
uniform float uTime;
uniform float uSpeed;
uniform float uWaves;
uniform float uEffectScale;
uniform float uLoadingTime;
uniform float uNoiseDensity;
uniform float uNoiseStrength;

#define STANDARD
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
#ifdef USE_TANGENT
varying vec3 vTangent;
varying vec3 vBitangent;
#endif
#endif
#include <clipping_planes_pars_vertex>
#include <color_pars_vertex>
#include <common>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <morphtarget_pars_vertex>
#include <shadowmap_pars_vertex>
#include <skinning_pars_vertex>
#include <uv2_pars_vertex>
#include <uv_pars_vertex>

// Gerstner wave function for realistic water waves
vec3 gerstnerWave(vec2 coord, vec2 direction, float steepness, float wavelength, float time) {
  float k = 2.0 * 3.14159 / wavelength;
  float c = sqrt(9.8 / k);
  vec2 d = normalize(direction);
  float f = k * (dot(d, coord) - c * time);
  float a = steepness / k;
  
  return vec3(
    d.x * (a * cos(f)),
    a * sin(f),
    d.y * (a * cos(f))
  );
}

void main() {
  #include <beginnormal_vertex>
  #include <color_vertex>
  #include <defaultnormal_vertex>
  #include <morphnormal_vertex>
  #include <skinbase_vertex>
  #include <skinnormal_vertex>
  #include <uv2_vertex>
  #include <uv_vertex>
  
  vUv = uv;
  
  // Create more realistic water wave displacement
  float speed = uSpeed > 0.0 ? uSpeed : 1.0;
  float waves = uWaves > 0.0 ? uWaves : 0.3;
  float effectScale = uEffectScale > 0.0 ? uEffectScale : 1.0;
  float loadingTime = uLoadingTime > 0.0 ? uLoadingTime : 1.0;
  
  float time = uTime * speed * 0.5;
  vec3 pos = position;
  
  float waveScale = 1.0 / effectScale;
  
  // Combine multiple Gerstner waves for realistic ocean surface
  vec3 wave1 = gerstnerWave(pos.xy * waveScale, vec2(1.0, 0.0), 0.05, 2.0, time);
  vec3 wave2 = gerstnerWave(pos.xy * waveScale, vec2(0.0, 1.0), 0.04, 1.5, time * 0.9);
  vec3 wave3 = gerstnerWave(pos.xy * waveScale, vec2(0.7, 0.7), 0.03, 1.0, time * 1.1);
  vec3 wave4 = gerstnerWave(pos.xy * waveScale, vec2(-0.7, 0.7), 0.02, 0.8, time * 1.3);
  
  // Add noise-based waves for smaller details
  float noiseWave1 = snoise(vec3(pos.x * waveScale * 4.0, pos.y * waveScale * 4.0, time)) * 0.1;
  float noiseWave2 = snoise(vec3(pos.x * waveScale * 8.0, pos.y * waveScale * 8.0, time * 1.5)) * 0.05;
  float noiseWave3 = snoise(vec3(pos.x * waveScale * 16.0, pos.y * waveScale * 16.0, time * 2.0)) * 0.025;
  
  // Combine all waves
  vec3 totalWave = (wave1 + wave2 + wave3 + wave4) * waves;
  totalWave.y += (noiseWave1 + noiseWave2 + noiseWave3) * waves;
  
  pos += totalWave * loadingTime;
  
  // Pass wave height and flow coordinates to fragment shader
  vWaveHeight = totalWave.y;
  vFlowCoords = pos.xy * waveScale;
  vPosition = pos;
  
  // Calculate proper normals for water surface
  vec2 epsilon = vec2(0.1, 0.0);
  vec3 tangent = normalize(vec3(epsilon.x, gerstnerWave(pos.xy + epsilon.xy, vec2(1.0, 0.0), 0.05, 2.0, time).y - pos.y, 0.0));
  vec3 bitangent = normalize(vec3(0.0, gerstnerWave(pos.xy + epsilon.yx, vec2(0.0, 1.0), 0.04, 1.5, time * 0.9).y - pos.y, epsilon.x));
  vec3 normal = normalize(cross(tangent, bitangent));
  
  #ifndef FLAT_SHADED
    vNormal = normalize(normalMatrix * normal);
  #ifdef USE_TANGENT
    vTangent = normalize(transformedTangent);
    vBitangent = normalize(cross(vNormal, vTangent) * tangent.w);
  #endif
  #endif
  
  #include <begin_vertex>
  transformed = pos;
  
  #include <clipping_planes_vertex>
  #include <displacementmap_vertex>
  #include <logdepthbuf_vertex>
  #include <morphtarget_vertex>
  #include <project_vertex>
  #include <skinning_vertex>
  
  vViewPosition = -mvPosition.xyz;
  vWorldPosition = (modelMatrix * vec4(pos, 1.0)).xyz;
  
  #include <fog_vertex>
  #include <shadowmap_vertex>
  #include <worldpos_vertex>
}
