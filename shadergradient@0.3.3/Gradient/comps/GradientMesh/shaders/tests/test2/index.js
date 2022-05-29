// src/Gradient/comps/GradientMesh/shaders/tests/test2/fragment.glsl
var fragment_default = "uniform float uC1r;uniform float uC1g;uniform float uC1b;uniform float uC2r;uniform float uC2g;uniform float uC2b;uniform float uC3r;uniform float uC3g;uniform float uC3b;varying vec3 vNormal;varying vec3 vPos;void main(){vec3 color1=vec3(uC1r,uC1g,uC1b);vec3 color2=vec3(uC2r,uC2g,uC2b);vec3 color3=vec3(uC3r,uC3g,uC3b);float distanceToCenter=distance(vPos,vec3(0,0,0));gl_FragColor.rgb=color1*vPos.x+color2*vPos.y+color3*vPos.z;}";

// src/Gradient/comps/GradientMesh/shaders/tests/test2/vertex.glsl
var vertex_default = "#pragma glslify: cnoise3 = require(glsl-noise/classic/3d)\nuniform float uTime;uniform float uSpeed;uniform float uNoiseDensity;uniform float uNoiseStrength;uniform float uFrequency;uniform float uAmplitude;varying vec3 vNormal;varying vec3 vPos;mat3 rotation3dY(float angle){float s=sin(angle);float c=cos(angle);return mat3(c,0.0,-s,0.0,1.0,0.0,s,0.0,c);}vec3 rotateY(vec3 v,float angle){return rotation3dY(angle)*v;}void main(){float t=uTime*uSpeed;float distortion=cnoise3((normal+t)*uNoiseDensity)*uNoiseStrength;vec3 pos=position+(normal*distortion);float angle=sin(uv.y*uFrequency+t)*uAmplitude;pos=rotateY(pos,angle);vNormal=normal;vPos=pos;gl_Position=projectionMatrix*modelViewMatrix*vec4(pos,1.);}";

// src/Gradient/comps/GradientMesh/shaders/tests/test2/index.ts
var url = "?animate=on&brightness=0.6&cameraZoom=0.8&color1=%23ff0000&color2=%2300ff00&color3=%230700ff&embedMode=off&envPreset=city&grain=off&lightType=3d&pixelDensity=1&positionX=0&positionY=0&positionZ=0&reflection=0.1&rotationX=0&rotationY=0&rotationZ=0&shader=newLight&type=sphere&uDensity=0.1&uSpeed=0.2&uStrength=0.1&uTime=0.2";
export {
  fragment_default as fragment,
  url,
  vertex_default as vertex
};
