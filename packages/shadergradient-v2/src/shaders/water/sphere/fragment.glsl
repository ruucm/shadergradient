// Water Fragment Shader for Sphere geometry

// Varyings
varying vec2 vUv;
varying vec3 vPosition;
varying vec3 vNormal;
varying float vWaveHeight;
varying vec3 vWorldPosition;
varying vec3 vSphereNormal;

// Uniforms
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
uniform float uSpeed;
uniform float uHighlights;
uniform float uLayering;
uniform float uEdges;
uniform float uCaustic;
uniform float uEffectScale;

// Noise functions
vec3 mod289(vec3 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec2 mod289(vec2 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec3 permute(vec3 x) {
  return mod289(((x*34.0)+1.0)*x);
}

float snoise(vec2 v) {
  const vec4 C = vec4(0.211324865405187,
                      0.366025403784439,
                      -0.577350269189626,
                      0.024390243902439);
  vec2 i  = floor(v + dot(v, C.yy) );
  vec2 x0 = v -   i + dot(i, C.xx);
  vec2 i1;
  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod289(i);
  vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
    + i.x + vec3(0.0, i1.x, 1.0 ));

  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
  m = m*m ;
  m = m*m ;

  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;

  m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );

  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

// Caustic pattern function for spherical surface
float causticPattern(vec3 position, float time) {
  float scale = 1.0 / (uEffectScale > 0.0 ? uEffectScale : 1.0);
  
  // Use spherical coordinates for better distribution
  float theta = atan(position.y, position.x);
  float phi = acos(position.z / length(position));
  vec2 sphereUV = vec2(theta / 3.14159, phi / 3.14159);
  
  vec2 p = sphereUV * scale * 4.0;
  float n1 = snoise(p + vec2(time * 0.3, time * 0.2));
  float n2 = snoise(p * 2.0 - vec2(time * 0.2, time * 0.3));
  float n3 = snoise(p * 4.0 + vec2(time * 0.1, time * 0.15));
  
  float caustic = n1 * 0.5 + n2 * 0.3 + n3 * 0.2;
  caustic = caustic * 0.5 + 0.5; // Normalize to 0-1
  
  // Create sharp caustic lines
  caustic = pow(caustic, 2.0);
  caustic = smoothstep(0.4, 0.6, caustic);
  
  return caustic;
}

// Edge detection for water surface
float edgeGlow(vec3 normal, vec3 viewDir) {
  float edge = 1.0 - abs(dot(normal, viewDir));
  return pow(edge, 2.0);
}

// Fresnel effect
float fresnel(vec3 normal, vec3 viewDir, float power) {
  return pow(1.0 - dot(normal, viewDir), power);
}

void main() {
  // Set default values for water effect parameters
  float highlights = uHighlights > 0.0 ? uHighlights : 0.07;
  float layering = uLayering > 0.0 ? uLayering : 0.5;
  float edges = uEdges > 0.0 ? uEdges : 0.8;
  float caustic = uCaustic > 0.0 ? uCaustic : 0.1;
  float effectScale = uEffectScale > 0.0 ? uEffectScale : 1.0;
  float speed = uSpeed > 0.0 ? uSpeed : 1.0;
  
  float time = uTime * speed * 0.5;
  
  // Calculate view direction
  vec3 viewDir = normalize(cameraPosition - vWorldPosition);
  
  // Create water color base
  vec3 color1 = vec3(uC1r, uC1g, uC1b);
  vec3 color2 = vec3(uC2r, uC2g, uC2b);
  vec3 color3 = vec3(uC3r, uC3g, uC3b);
  vec3 color = color1;
  
  // Add layering effect based on wave height
  if (layering > 0.0) {
    float layer = smoothstep(-0.1, 0.1, vWaveHeight);
    color = mix(color, color3, layer * layering);
  }
  
  // Add caustic patterns
  if (caustic > 0.0) {
    float causticVal = causticPattern(vPosition, time);
    color = mix(color, color3, causticVal * caustic);
  }
  
  // Add edge glow with fresnel effect
  if (edges > 0.0) {
    float edge = fresnel(vNormal, viewDir, 2.0);
    color = mix(color, color3, edge * edges);
  }
  
  // Add highlights based on wave peaks
  if (highlights > 0.0) {
    float highlight = smoothstep(0.0, 0.3, vWaveHeight);
    highlight = pow(highlight, 2.0);
    
    // Add specular-like highlights
    vec3 lightDir = normalize(vec3(0.5, 1.0, 0.5));
    vec3 reflectDir = reflect(-lightDir, vNormal);
    float spec = pow(max(dot(viewDir, reflectDir), 0.0), 32.0);
    
    color = mix(color, color3, (highlight + spec * 0.5) * highlights);
  }
  
  // Apply some basic lighting
  vec3 lightDir = normalize(vec3(0.5, 1.0, 0.5));
  float diffuse = max(dot(vNormal, lightDir), 0.0);
  color *= 0.7 + 0.3 * diffuse;
  
  // Add subtle rim lighting
  float rim = 1.0 - dot(vNormal, viewDir);
  rim = pow(rim, 3.0);
  color += color3 * rim * 0.2;
  
  gl_FragColor = vec4(color, 1.0);
}
