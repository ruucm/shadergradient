// src/Gradient/comps/GradientMesh/shaders/tests/snakeHalftone/fragment.glsl
var fragment_default = "#pragma glslify: halftone = require('glsl-halftone')\nuniform float uC1r;uniform float uC1g;uniform float uC1b;uniform float uC2r;uniform float uC2g;uniform float uC2b;uniform float uC3r;uniform float uC3g;uniform float uC3b;varying vec3 vNormal;varying float vDistort;varying vec2 vUv;varying vec3 vPos;vec3 cosPalette(float t,vec3 a,vec3 b,vec3 c,vec3 d){return a+b*cos(6.28318*(c*t+d));}void main(){vec3 brightness=vec3(0.5,0.5,0.5);vec3 contrast=vec3(0.5,0.5,0.5);vec3 oscilation=vec3(1.0,1.0,1.0);vec3 phase=vec3(0.0,0.1,0.2);vec3 distortionShadow=cosPalette(vDistort,brightness,contrast,oscilation,phase);vec3 color1=vec3(uC1r,uC1g,uC1b);vec3 color2=vec3(uC2r,uC2g,uC2b);vec3 color3=vec3(uC3r,uC3g,uC3b);vec3 diffuseColor=vec3(mix(mix(color1,color3,smoothstep(-3.0,3.0,vPos.x)),color2,vPos.z));vec2 st=vUv;gl_FragColor.rgb=halftone(diffuseColor,st,700.0)*distortionShadow;}";

// src/Gradient/comps/GradientMesh/shaders/tests/snakeHalftone/vertex.glsl
var vertex_default = "#pragma glslify: cnoise3 = require(glsl-noise/classic/3d)\nuniform float uTime;uniform float uSpeed;uniform float uNoiseDensity;uniform float uNoiseStrength;uniform float uFrequency;uniform float uAmplitude;varying vec3 vNormal;varying float vDistort;varying vec2 vUv;varying vec3 vPos;mat3 rotation3dY(float angle){float s=sin(angle);float c=cos(angle);return mat3(c,0.0,-s,0.0,1.0,0.0,s,0.0,c);}vec3 rotateY(vec3 v,float angle){return rotation3dY(angle)*v;}void main(){float t=uTime*uSpeed;float distortion=cnoise3((normal+t)*uNoiseDensity)*uNoiseStrength;vec3 pos=position+(normal*distortion);float angle=sin(uv.y*uFrequency+t)*uAmplitude;pos=rotateY(pos,angle);vNormal=normal;vDistort=distortion;vUv=uv;vPos=pos;gl_Position=projectionMatrix*modelViewMatrix*vec4(pos,1.);}";

// src/Gradient/comps/GradientMesh/shaders/tests/snakeHalftone/index.ts
var url = "?animate=on&brightness=0.8&cameraPositionX=-0.5&cameraPositionY=3.4&cameraPositionZ=-5&cameraZoom=3.1&color1=%23bc55ec&color2=%2377ca9f&color3=%23a3d93f&embedMode=off&envPreset=dawn&grain=off&lightType=3d&pixelDensity=1&positionX=0&positionY=0.9&positionZ=-0.9&reflection=0.5&rotationX=90&rotationY=0&rotationZ=230&type=sphere&uDensity=0.8&uSpeed=0.1&uStrength=0.2&uTime=0.2";
export {
  fragment_default as fragment,
  url,
  vertex_default as vertex
};
