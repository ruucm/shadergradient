import React, { useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { GradientT } from '../types'
import { presets } from '../presets'
import { Mesh } from './Mesh'
import { Lights } from './Lights'
import { PostProcessing } from './PostProcessing'
import { Controls } from './Controls'
import * as THREE from 'three'
import { canvasProps } from '@/consts'

export function ShaderGradient(passedProps: GradientT): JSX.Element {
  const props = { ...presets.halo.props, ...passedProps }

  useShaderChunkFix()

  return (
    <Canvas resize={{ offsetSize: true }} {...canvasProps(1, 45)}>
      <Mesh {...props} />
      <Lights />
      <PostProcessing />

      <Controls {...props} />
    </Canvas>
  )
}

function useShaderChunkFix() {
  useEffect(() => {
    // Fix Error: Can not resolve #include <uv2_pars_vertex>, <... (it is needed from three.js version 0.151.3)
    THREE.ShaderChunk['uv2_pars_vertex'] = ``
    THREE.ShaderChunk['uv2_vertex'] = ``
    THREE.ShaderChunk['uv2_pars_fragment'] = ``
    THREE.ShaderChunk['encodings_fragment'] = ``
  }, [])
}
