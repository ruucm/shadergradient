// src/Gradient/comps/GradientMesh/shaders/tests/test/fragment.glsl
var fragment_default = "#pragma glslify: halftone = require('glsl-halftone')\nuniform float uC1r;uniform float uC1g;uniform float uC1b;uniform float uC2r;uniform float uC2g;uniform float uC2b;uniform float uC3r;uniform float uC3g;uniform float uC3b;varying vec3 vNormal;varying vec2 vUv;void main(){vec3 color1=vec3(uC1r,uC1g,uC1b);vec3 color2=vec3(uC2r,uC2g,uC2b);vec3 color3=vec3(uC3r,uC3g,uC3b);vec2 st=vUv;gl_FragColor.rgb=halftone(color1*vNormal.x+color2*vNormal.y+color3*vNormal.z,st,900.0);}";

// src/Gradient/comps/GradientMesh/shaders/tests/test/vertex.glsl
var vertex_default = "#pragma glslify: cnoise3 = require(glsl-noise/classic/3d)\nuniform float uTime;uniform float uSpeed;uniform float uNoiseDensity;uniform float uNoiseStrength;varying vec3 vNormal;varying vec2 vUv;void main(){float t=uTime*uSpeed;float distortion=cnoise3((normal+t)*uNoiseDensity)*uNoiseStrength;vec3 pos=position+(normal*distortion);vNormal=normal;vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(pos,1.);}";

// src/Gradient/comps/GradientMesh/shaders/tests/test/index.ts
var url = "?animate=on&brightness=1&cameraZoom=1.2&color1=%230000ff&color2=%23ff0000&color3=%2300ff00&embedMode=off&envPreset=dawn&grain=off&lightType=3d&pixelDensity=1&positionX=0&positionY=0&positionZ=0&reflection=0.5&rotationX=45&rotationY=-45&rotationZ=0&type=sphere&uDensity=1.5&uSpeed=0.2&uStrength=0.2&uTime=0.2";
export {
  fragment_default as fragment,
  url,
  vertex_default as vertex
};
