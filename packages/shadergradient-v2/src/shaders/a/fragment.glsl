varying vec3 fragPos;
uniform float uWidth;
uniform float uHeight;
uniform float uAmplitude;

uniform float uC1r;
uniform float uC1g;
uniform float uC1b;
uniform float uC2r;
uniform float uC2g;
uniform float uC2b;
uniform float uC3r;
uniform float uC3g;
uniform float uC3b;

varying vec3 color1;
varying vec3 color2;
varying vec3 color3;


void main() {

    vec3 color1 = vec3(uC1r, uC1g, uC1b);
    vec3 color2 = vec3(uC2r, uC2g, uC2b);
    vec3 color3 = vec3(uC3r, uC3g, uC3b);

    vec3 color = fragPos;

    float x = clamp(fragPos.x / uWidth, 0.0, 1.0);
    float y = clamp(fragPos.y / uHeight, 0.0, 1.0);
    float z = clamp(fragPos.z / uAmplitude, 0.0, 1.0);

    // gl_FragColor = vec4(x, y, z, 1.0); // vec4(r, g, b, a)
    gl_FragColor = vec4(color1, 0.5) + vec4(x, y, z, 0.5);
}