varying vec3 fragPos;
uniform float uTime;
uniform float uAmplitude;

void main() {
    // Calculate z-offset based on time and position
    float zOffset = sin(position.x + uTime) * uAmplitude + cos(position.y + uTime) * uAmplitude;
    
    // Apply the offset to the vertex position
    vec3 newPosition = vec3(position.x, position.y, position.z + zOffset);
    
    fragPos = newPosition;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
}