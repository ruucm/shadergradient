import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { degToRad } from './utils'

const amplitude = 0.9
const width = 10
const height = 10

const vertexShader = `
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
`

const fragmentShader = `
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
`

function Mesh() {
  const materialRef = useRef()

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime()
    if (materialRef.current) {
      materialRef.current.uniforms.u_time.value = elapsedTime
      materialRef.current.uniforms.u_amplitude.value = amplitude
    }
  })

  return (
    <mesh
      rotation={[degToRad(0), degToRad(0), degToRad(0)]}
      position={[0, 0, 2]}
    >
      <planeGeometry args={[width, height, 1, 1]} />
      <shaderMaterial
        ref={materialRef}
        attach='material'
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={{
          u_time: { value: 0.7 },
          u_amplitude: { value: amplitude },
          u_width: { value: width },
          u_height: { value: height },
        }}
      />
    </mesh>
  )
}

export function Plane() {
  return (
    <Canvas resize={{ offsetSize: true }}>
      <Mesh />
      <OrbitControls />
    </Canvas>
  )
}
