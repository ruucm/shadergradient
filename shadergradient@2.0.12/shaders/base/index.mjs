// src/shaders/base/vertex.glsl
var vertex_default = "varying vec3 fragPos;\nuniform float uTime;\nuniform float uAmplitude;\n\nvoid main() {\n    // Calculate z-offset based on time and position\n    float zOffset = sin(position.x + uTime) * uAmplitude + cos(position.y + uTime) * uAmplitude;\n    \n    // Apply the offset to the vertex position\n    vec3 newPosition = vec3(position.x, position.y, position.z + zOffset);\n    \n    fragPos = newPosition;\n    gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);\n}";

// src/shaders/base/fragment.glsl
var fragment_default = "varying vec3 fragPos;\nuniform float uWidth;\nuniform float uHeight;\nuniform float uAmplitude;\n\nuniform float uC1r;\nuniform float uC1g;\nuniform float uC1b;\nuniform float uC2r;\nuniform float uC2g;\nuniform float uC2b;\nuniform float uC3r;\nuniform float uC3g;\nuniform float uC3b;\n\nvarying vec3 color1;\nvarying vec3 color2;\nvarying vec3 color3;\n\n\nvoid main() {\n\n    vec3 color1 = vec3(uC1r, uC1g, uC1b);\n    vec3 color2 = vec3(uC2r, uC2g, uC2b);\n    vec3 color3 = vec3(uC3r, uC3g, uC3b);\n\n    vec3 color = fragPos;\n\n    float x = clamp(fragPos.x / uWidth, 0.0, 1.0);\n    float y = clamp(fragPos.y / uHeight, 0.0, 1.0);\n    float z = clamp(fragPos.z / uAmplitude, 0.0, 1.0);\n\n    // gl_FragColor = vec4(x, y, z, 1.0); // vec4(r, g, b, a)\n    gl_FragColor = vec4(color1, 0.5) + vec4(x, y, z, 0.5);\n}";
export {
  fragment_default as fragmentShader,
  vertex_default as vertexShader
};
