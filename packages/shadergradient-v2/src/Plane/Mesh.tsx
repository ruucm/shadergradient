import React, { useRef } from 'react'
import { vertexShader, fragmentShader } from './shader'

const amplitude = 0.9

export function Mesh({ width, height }) {
  const materialRef = useRef()

  return (
    <mesh>
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
