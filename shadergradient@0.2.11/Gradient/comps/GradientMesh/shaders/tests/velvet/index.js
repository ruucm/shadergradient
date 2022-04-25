// src/Gradient/comps/GradientMesh/shaders/tests/velvet/fragment.glsl
var fragment_default = "uniform float uC1r;uniform float uC1g;uniform float uC1b;varying vec3 vNormal;varying float vDistort;vec3 cosPalette(float t,vec3 a,vec3 b,vec3 c,vec3 d){return a+b*cos(6.28318*(c*t+d));}void main(){vec3 brightness=vec3(0.5,0.5,0.5);vec3 contrast=vec3(0.5,0.5,0.5);vec3 oscilation=vec3(1.0,1.0,1.0);vec3 phase=vec3(0.0,0.1,0.2);vec3 color=cosPalette(vDistort,brightness,contrast,oscilation,phase);gl_FragColor.rgb=vec3(uC1r,uC1g,uC1b)*color;gl_FragColor.a=1.;}";

// src/Gradient/comps/GradientMesh/shaders/tests/velvet/vertex.glsl
var vertex_default = "#pragma glslify: cnoise3 = require(glsl-noise/classic/3d)\nuniform float uTime;uniform float uSpeed;uniform float uNoiseDensity;uniform float uNoiseStrength;uniform float uFrequency;uniform float uAmplitude;varying vec3 vNormal;varying float vDistort;mat3 rotation3dY(float angle){float s=sin(angle);float c=cos(angle);return mat3(c,0.0,-s,0.0,1.0,0.0,s,0.0,c);}vec3 rotateY(vec3 v,float angle){return rotation3dY(angle)*v;}void main(){float t=uTime*uSpeed;float distortion=cnoise3((normal+t)*uNoiseDensity)*uNoiseStrength;vec3 pos=position+(normal*distortion);float angle=sin(uv.y*uFrequency+t)*uAmplitude;pos=rotateY(pos,angle);vNormal=normal;vDistort=distortion;gl_Position=projectionMatrix*modelViewMatrix*vec4(pos,1.);}";

// src/Gradient/comps/GradientMesh/shaders/tests/velvet/index.ts
var url = "?animate=on&brightness=0.5&cameraPositionX=-0.5&cameraPositionY=3.4&cameraPositionZ=-5&cameraZoom=2.4&color1=%23f490d9&color2=%23a177ca&color3=%23d9a83f&embedMode=off&envPreset=dawn&grain=off&lightType=3d&pixelDensity=1&positionX=0&positionY=0.9&positionZ=-0.9&reflection=0.5&rotationX=90&rotationY=0&rotationZ=230&type=sphere&uDensity=0.8&uSpeed=0.2&uStrength=0.2&uTime=0.2";
export {
  fragment_default as fragment,
  url,
  vertex_default as vertex
};
