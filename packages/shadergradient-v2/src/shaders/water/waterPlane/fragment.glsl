// Water Fragment Shader for WaterPlane geometry (specialized for water surfaces)

// Varyings
varying vec2 vUv;
varying vec3 vPosition;
varying vec3 vNormal;
varying float vWaveHeight;
varying vec3 vWorldPosition;
varying vec2 vFlowCoords;

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

// Voronoi noise for foam patterns
vec3 voronoi(vec2 x) {
  vec2 n = floor(x);
  vec2 f = fract(x);
  
  vec2 mg, mr;
  float md = 8.0;
  
  for(int j = -1; j <= 1; j++) {
    for(int i = -1; i <= 1; i++) {
      vec2 g = vec2(float(i), float(j));
      vec2 o = vec2(
        snoise(n + g) * 0.5 + 0.5,
        snoise(n + g + vec2(17.0, 42.0)) * 0.5 + 0.5
      );
      vec2 r = g + o - f;
      float d = dot(r, r);
      
      if(d < md) {
        md = d;
        mr = r;
        mg = g;
      }
    }
  }
  
  return vec3(md, mr);
}

// Enhanced caustic pattern for underwater lighting
float causticPattern(vec2 uv, float time) {
  float scale = 1.0 / (uEffectScale > 0.0 ? uEffectScale : 1.0);
  vec2 p = uv * scale * 3.0;
  
  // Multiple layers of caustics
  float caustic1 = snoise(p + vec2(time * 0.1, time * 0.15));
  float caustic2 = snoise(p * 1.5 - vec2(time * 0.15, time * 0.1));
  float caustic3 = snoise(p * 2.5 + vec2(time * 0.2, time * 0.25));
  
  // Combine and shape caustics
  float caustic = caustic1 * 0.5 + caustic2 * 0.3 + caustic3 * 0.2;
  caustic = caustic * 0.5 + 0.5;
  
  // Create sharp, bright caustic patterns
  caustic = pow(caustic, 3.0);
  caustic = smoothstep(0.5, 0.7, caustic);
  
  // Add some variation
  caustic += smoothstep(0.8, 0.9, snoise(p * 4.0 + time * 0.3)) * 0.3;
  
  return caustic;
}

// Foam generation based on wave height and motion
float generateFoam(vec2 coords, float waveHeight, float time) {
  float foam = 0.0;
  
  // Foam appears on wave crests
  float crestFoam = smoothstep(0.1, 0.3, waveHeight);
  
  // Foam patterns using voronoi
  vec3 vor = voronoi(coords * 5.0 + vec2(time * 0.1, time * 0.05));
  float foamPattern = 1.0 - smoothstep(0.0, 0.1, vor.x);
  
  foam = crestFoam * foamPattern;
  
  // Add some noise for variation
  foam *= snoise(coords * 10.0 + time) * 0.5 + 0.5;
  
  return foam;
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
  
  // Create base water color with depth gradient
  vec3 deepColor = color1 * 0.7;
  vec3 shallowColor = color1;
  float depthFactor = smoothstep(-0.2, 0.2, vWaveHeight);
  vec3 color = mix(deepColor, shallowColor, depthFactor);
  
  // Add multi-layered coloring
  if (layering > 0.0) {
    // Create color layers based on wave height
    float layer1 = smoothstep(-0.1, 0.0, vWaveHeight);
    float layer2 = smoothstep(0.0, 0.1, vWaveHeight);
    float layer3 = smoothstep(0.1, 0.2, vWaveHeight);
    
    vec3 layerColor = mix(deepColor, shallowColor, layer1 * 0.3);
    layerColor = mix(layerColor, color3, layer2 * 0.5);
    layerColor = mix(layerColor, vec3(1.0), layer3 * 0.2); // Foam color
    
    color = mix(color, layerColor, layering);
  }
  
  // Add realistic caustic patterns
  if (caustic > 0.0) {
    float causticVal = causticPattern(vFlowCoords, time);
    // Caustics are brighter in shallower areas
    caustic *= smoothstep(-0.3, 0.1, vWaveHeight);
    color = mix(color, color3 * 1.5, causticVal * caustic);
  }
  
  // Fresnel effect for water surface
  float fresnel = pow(1.0 - dot(vNormal, viewDir), 2.0);
  
  // Edge highlighting with fresnel
  if (edges > 0.0) {
    color = mix(color, color3, fresnel * edges * 0.7);
  }
  
  // Add foam and highlights
  if (highlights > 0.0) {
    // Generate foam
    float foam = generateFoam(vFlowCoords, vWaveHeight, time);
    
    // Specular highlights
    vec3 lightDir = normalize(vec3(0.5, 1.0, 0.3));
    vec3 halfDir = normalize(lightDir + viewDir);
    float spec = pow(max(dot(vNormal, halfDir), 0.0), 64.0);
    
    // Combine foam and specular
    float highlight = max(foam, spec);
    color = mix(color, vec3(1.0), highlight * highlights);
  }
  
  // Environmental lighting
  vec3 lightDir1 = normalize(vec3(0.5, 1.0, 0.3));
  vec3 lightDir2 = normalize(vec3(-0.3, 0.5, -0.5));
  
  float diffuse1 = max(dot(vNormal, lightDir1), 0.0);
  float diffuse2 = max(dot(vNormal, lightDir2), 0.0) * 0.3;
  
  color *= 0.6 + 0.4 * diffuse1 + 0.2 * diffuse2;
  
  // Add subtle subsurface scattering effect
  float scatter = max(dot(viewDir, -lightDir1), 0.0);
  scatter = pow(scatter, 3.0);
  color += color3 * scatter * 0.1;
  
  // Final color with transparency hint at edges
  float alpha = 1.0;
  gl_FragColor = vec4(color, alpha);
}
