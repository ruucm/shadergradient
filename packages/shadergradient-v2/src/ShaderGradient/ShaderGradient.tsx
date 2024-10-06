import React from 'react'
import { Canvas } from '@react-three/fiber'
import { ShaderGradientProps } from '../types'
import { presets } from '../presets'
import { Mesh } from './Mesh'
import { Lights } from './Lights'
import { PostProcessing } from './PostProcessing'
import { Controls } from './Controls'

export function ShaderGradient(passedProps: ShaderGradientProps): JSX.Element {
  const props = { ...presets.base.props, ...passedProps }

  return (
    <Canvas resize={{ offsetSize: true }}>
      <Mesh {...props} />
      <Lights />
      <PostProcessing />

      <Controls />
    </Canvas>
  )
}
