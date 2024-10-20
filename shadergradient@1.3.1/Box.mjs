import{a as t}from"./chunk-47YO7RYP.mjs";import"./chunk-F3ULA5MU.mjs";import"./chunk-GMCKMPCO.mjs";import{useRef as u}from"react";import{Canvas as m,useFrame as l}from"@react-three/fiber";import{OrbitControls as c}from"@react-three/drei";import{jsx as i,jsxs as n}from"react/jsx-runtime";var a=.9,o=10,r=10;var h=`
varying vec3 fragPos;
uniform float u_time;
uniform float u_amplitude;

void main() {
    // Calculate z-offset based on time and position
    float zOffset = sin(position.x + u_time) * u_amplitude;
    
    // Apply the offset to the vertex position
    vec3 newPosition = vec3(position.x, position.y, position.z + zOffset);
    
    fragPos = newPosition;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
}
`,p=`
varying vec3 fragPos;
uniform float u_width;
uniform float u_height;

void main() {
    // vec4(r, g, b, a)
    vec3 color = fragPos;

    float x = clamp(fragPos.x / u_width, 0.0, 1.0);
    float y = clamp(fragPos.y / u_height, 0.0, 1.0);
    float z = clamp(fragPos.z / u_width, 0.0, 1.0);

    gl_FragColor = vec4(x, y, z, 1.0);
}
`;function d(){let e=u();return l(({clock:s})=>{let f=s.getElapsedTime();e.current&&(e.current.uniforms.u_time.value=f,e.current.uniforms.u_amplitude.value=a)}),n("mesh",{rotation:[t(30),t(45),t(0)],position:[0,0,-o],children:[i("boxGeometry",{args:[o,r,o]}),i("shaderMaterial",{ref:e,attach:"material",vertexShader:h,fragmentShader:p,uniforms:{u_time:{value:.7},u_amplitude:{value:a},u_width:{value:o},u_height:{value:r}}})]})}function w(){return n(m,{resize:{offsetSize:!0},children:[i(d,{}),i(c,{})]})}export{w as Box};
