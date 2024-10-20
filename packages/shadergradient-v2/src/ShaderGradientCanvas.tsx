import { useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { canvasProps } from '@/consts'
import * as THREE from 'three'

export function ShaderGradientCanvas({
  children,
  pixelDensity = 1,
  fov = 45,
}: {
  children: React.ReactNode
  pixelDensity?: number
  fov?: number
}): JSX.Element {
  useShaderChunkFix()

  return (
    <Canvas resize={{ offsetSize: true }} {...canvasProps(pixelDensity, fov)}>
      {children}
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
