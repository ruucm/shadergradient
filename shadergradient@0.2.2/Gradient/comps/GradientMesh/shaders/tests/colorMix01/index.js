// src/Gradient/comps/GradientMesh/shaders/tests/colorMix01/fragment.glsl
var fragment_default = "#pragma glslify: halftone = require('glsl-halftone')\nuniform float uC1r;uniform float uC1g;uniform float uC1b;uniform float uC2r;uniform float uC2g;uniform float uC2b;uniform float uC3r;uniform float uC3g;uniform float uC3b;varying vec3 vNormal;varying float vDistort;varying vec3 vPos;vec3 cosPalette(float t,vec3 a,vec3 b,vec3 c,vec3 d){return a+b*cos(6.28318*(c*t+d));}void main(){vec3 brightness=vec3(0.5,0.5,0.5);vec3 contrast=vec3(0.5,0.5,0.5);vec3 oscilation=vec3(1.0,1.0,1.0);vec3 phase=vec3(0.0,0.1,0.2);vec3 distortionShadow=cosPalette(vDistort,brightness,contrast,oscilation,phase);vec3 color1=vec3(uC1r,uC1g,uC1b);vec3 color2=vec3(uC2r,uC2g,uC2b);vec3 color3=vec3(uC3r,uC3g,uC3b);vec3 colorMix1=vec3(mix(color1,color2,vPos.x));vec3 colorMix2=vec3(mix(colorMix1,color3,vPos.z));vec3 colorMix3=vec3(mix(colorMix2,color3,vPos.y));gl_FragColor.rgb=colorMix3*distortionShadow;}";

// src/Gradient/comps/GradientMesh/shaders/tests/colorMix01/vertex.glsl
var vertex_default = "#pragma glslify: cnoise3 = require(glsl-noise/classic/3d)\nuniform float uTime;uniform float uSpeed;uniform float uNoiseDensity;uniform float uNoiseStrength;uniform float uFrequency;uniform float uAmplitude;varying vec3 vNormal;varying float vDistort;varying vec3 vPos;mat3 rotation3dY(float angle){float s=sin(angle);float c=cos(angle);return mat3(c,0.0,-s,0.0,1.0,0.0,s,0.0,c);}vec3 rotateY(vec3 v,float angle){return rotation3dY(angle)*v;}void main(){float t=uTime*uSpeed;float distortion=cnoise3((normal+t)*uNoiseDensity)*uNoiseStrength;vec3 pos=position+(normal*distortion);float angle=sin(uv.y*uFrequency+t)*uAmplitude;pos=rotateY(pos,angle);vNormal=normal;vDistort=distortion;vPos=pos;gl_Position=projectionMatrix*modelViewMatrix*vec4(pos,1.);}";

// src/Gradient/comps/GradientMesh/shaders/tests/colorMix01/index.ts
var url = "?animate=on&brightness=0.8&cameraPositionX=0&cameraPositionY=0&cameraPositionZ=4.1&cameraZoom=0.8&color1=%23ff0000&color2=%2300ff00&color3=%230000ff&embedMode=off&envPreset=dawn&grain=off&lightType=3d&pixelDensity=1&positionX=0&positionY=0&positionZ=0&reflection=0.5&rotationX=90&rotationY=380&rotationZ=40&type=sphere&uDensity=0.1&uSpeed=0.2&uStrength=0.2&uTime=0.2";
export {
  fragment_default as fragment,
  url,
  vertex_default as vertex
};
