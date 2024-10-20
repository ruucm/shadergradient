import"./chunk-GMCKMPCO.mjs";import{useRef as s}from"react";import{Canvas as u,useFrame as f}from"@react-three/fiber";import{OrbitControls as m}from"@react-three/drei";import{jsx as t,jsxs as a}from"react/jsx-runtime";var i=.9,l=10,c=10,h=`
varying vec3 fragPos;
uniform float u_time;
uniform float u_amplitude;

void main() {
    // fragPos = position;
    // gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);

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
    float z = clamp(fragPos.z, 0.0, 1.0);

    gl_FragColor = vec4(x, y, z, 1.0);
}
`;function d(){let e=s();return f(({clock:r})=>{let n=r.getElapsedTime();e.current&&(e.current.uniforms.u_time.value=n,e.current.uniforms.u_amplitude.value=i)}),a("mesh",{rotation:[o(45),o(45),o(45)],position:[0,0,-20],children:[t("icosahedronGeometry",{args:[10,1]}),t("shaderMaterial",{ref:e,attach:"material",vertexShader:h,fragmentShader:p,uniforms:{u_time:{value:.7},u_amplitude:{value:i},u_width:{value:l},u_height:{value:c}}})]})}function x(){return a(u,{resize:{offsetSize:!0},children:[t(d,{}),t(m,{}),t("ambientLight",{intensity:.1})]})}function o(e){return e*(Math.PI/180)}export{x as Scene};
