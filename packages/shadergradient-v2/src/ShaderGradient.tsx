import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Mesh } from './Plane'

const width = 10
const height = 10

export function ShaderGradient() {
  return (
    <Canvas resize={{ offsetSize: true }}>
      <Mesh width={width} height={height} />
      <OrbitControls />
    </Canvas>
  )
}
