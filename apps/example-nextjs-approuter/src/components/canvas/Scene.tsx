'use client'

import { ShaderGradientCanvas } from 'shadergradient'
import { Canvas } from '@react-three/fiber'
import { Preload } from '@react-three/drei'
import { r3f } from '@/helpers/global'

export default function Scene({ ...props }) {
  // Everything defined in here will persist between route changes, only children are swapped

  return (
    <ShaderGradientCanvas {...props}>
      {/* @ts-ignore */}
      <r3f.Out />
      <Preload all />
    </ShaderGradientCanvas>
  )

  return (
    <Canvas {...props}>
      {/* @ts-ignore */}
      <r3f.Out />
      <Preload all />
    </Canvas>
  )
}
