#pragma glslify: cookTorranceSpec = require(glsl-specular-cook-torrance) 

uniform float uC1r;
uniform float uC1g;
uniform float uC1b;
uniform float uC2r;
uniform float uC2g;
uniform float uC2b;
uniform float uC3r;
uniform float uC3g;
uniform float uC3b;

varying vec3 vNormal;
varying vec3 vPos;

void main() {
  // vec3 color1 = vec3(uC1r, uC1g, uC1b);
  // vec3 color2 = vec3(uC2r, uC2g, uC2b);
  // vec3 color3 = vec3(uC3r, uC3g, uC3b);

  // gl_FragColor.rgb =
  //     color1 * vNormal.x + color2 * vNormal.y + color3 * vNormal.z;


  //Light and view geometry 
  vec3 viewDirection = normalize(vec3(3.0, 2.0, 2.0) - vPos);
  vec3 lightDirection = normalize(vec3(1.3, 1.3, 1.3) - vPos);
 
  //Surface properties 
  vec3 normal = normalize(vNormal);
 
  //Compute specular power 
  float power = cookTorranceSpec(
    vec3(0.5, 0.2, 0.3), 
    vec3(0.5, 0.1, 0.9), 
    normal, 
    0.5,
    0.5);
 
  gl_FragColor = vec4(power,power,power,1.0);
}
