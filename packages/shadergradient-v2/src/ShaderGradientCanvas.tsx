import { useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { canvasProps } from '@/consts'
import * as THREE from 'three'

export function ShaderGradientCanvas({
  children,
  style = {},
  pixelDensity = 1,
  fov = 45,
  pointerEvents,
  className,
}: {
  children: React.ReactNode
  style?: React.CSSProperties
  pixelDensity?: number
  fov?: number
  pointerEvents?: 'none' | 'auto'
  className?: string
}): JSX.Element {
  useShaderChunkFix()

  return (
    <Canvas
      style={{ ...style, pointerEvents }}
      resize={{ offsetSize: true }}
      className={className}
      {...canvasProps(pixelDensity, fov)}
    >
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
