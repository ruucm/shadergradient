varying vec3 fragPos;
uniform float u_width;
uniform float u_height;
uniform float u_amplitude;

void main() {
    vec3 color = fragPos;

    float x = clamp(fragPos.x / u_width, 0.0, 1.0);
    float y = clamp(fragPos.y / u_height, 0.0, 1.0);
    float z = clamp(fragPos.z / u_amplitude, 0.0, 1.0);

    gl_FragColor = vec4(x, y, 0.0, 1.0); // vec4(r, g, b, a)
}