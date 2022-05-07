// src/Gradient/comps/GradientMesh/shaders/tests/cookTorrance/fragment.glsl
var fragment_default = "#pragma glslify: cookTorranceSpec = require(glsl-specular-cook-torrance)\nuniform float uC1r;uniform float uC1g;uniform float uC1b;uniform float uC2r;uniform float uC2g;uniform float uC2b;uniform float uC3r;uniform float uC3g;uniform float uC3b;varying vec3 vNormal;varying vec3 vPos;void main(){vec3 viewDirection=normalize(vec3(3.0,2.0,2.0)-vPos);vec3 lightDirection=normalize(vec3(1.3,1.3,1.3)-vPos);vec3 normal=normalize(vNormal);float power=cookTorranceSpec(vec3(0.5,0.2,0.3),vec3(0.5,0.1,0.9),normal,0.5,0.5);gl_FragColor=vec4(power,power,power,1.0);}";

// src/Gradient/comps/GradientMesh/shaders/tests/cookTorrance/vertex.glsl
var vertex_default = "#pragma glslify: cnoise3 = require(glsl-noise/classic/3d)\nuniform float uTime;uniform float uSpeed;uniform float uNoiseDensity;uniform float uNoiseStrength;varying vec3 vNormal;varying vec3 vPos;void main(){float t=uTime*uSpeed;float distortion=cnoise3((normal+t)*uNoiseDensity)*uNoiseStrength;vec3 pos=position+(normal*distortion);vNormal=normal;vPos=pos;gl_Position=projectionMatrix*modelViewMatrix*vec4(pos,1.);}";

// src/Gradient/comps/GradientMesh/shaders/tests/cookTorrance/index.ts
var url = "?animate=on&brightness=1&cameraZoom=0.7&color1=%230000ff&color2=%23ff0000&color3=%2300ff00&embedMode=off&envPreset=dawn&grain=off&lightType=3d&pixelDensity=1&positionX=0&positionY=0&positionZ=0&reflection=0.5&rotationX=0&rotationY=0&rotationZ=0&type=sphere&uDensity=0.3&uSpeed=0.2&uStrength=0.2&uTime=0.2";
export {
  fragment_default as fragment,
  url,
  vertex_default as vertex
};
