// src/Gradient/comps/GradientMesh/shaders/tests/rgbBall/fragment.glsl
var fragment_default = "varying vec3 vNormal;void main(void){gl_FragColor=vec4(vNormal,1.);}";

// src/Gradient/comps/GradientMesh/shaders/tests/rgbBall/vertex.glsl
var vertex_default = "#pragma glslify: cnoise3 = require(glsl-noise/classic/3d)\nuniform float uTime;uniform float uSpeed;uniform float uNoiseDensity;uniform float uNoiseStrength;varying vec3 vNormal;void main(){float t=uTime*uSpeed;float distortion=cnoise3((normal+t)*uNoiseDensity)*uNoiseStrength;vec3 pos=position+(normal*distortion);vNormal=normal;gl_Position=projectionMatrix*modelViewMatrix*vec4(pos,1.);}";

// src/Gradient/comps/GradientMesh/shaders/tests/rgbBall/index.ts
var url = "?animate=on&brightness=0.8&cameraPositionX=-0.5&cameraPositionY=3.4&cameraPositionZ=-5&cameraZoom=1.9&color1=%23bc55ec&color2=%2377ca9f&color3=%23a3d93f&embedMode=off&envPreset=dawn&grain=off&lightType=3d&pixelDensity=1&positionX=0&positionY=0.9&positionZ=-0.9&reflection=0.5&rotationX=90&rotationY=450&rotationZ=230&type=sphere&uDensity=1&uSpeed=0.2&uStrength=0.2&uTime=0.2";
export {
  fragment_default as fragment,
  url,
  vertex_default as vertex
};
