import { useEffect, createContext, useMemo, useContext } from 'react'
import { Canvas } from '@react-three/fiber'
import { canvasProps, defaultEnvBasePath } from '@/consts'
import * as THREE from 'three'

type ShaderGradientCanvasContext = {
  envBasePath: string
}

const Context = createContext<ShaderGradientCanvasContext>(
  {} as ShaderGradientCanvasContext
)

export const useShaderGradientCanvasContext = () => {
  return useContext<ShaderGradientCanvasContext>(Context)
}

export function ShaderGradientCanvas({
  children,
  style = {},
  pixelDensity = 1,
  fov = 45,
  pointerEvents,
  className,
  envBasePath,
}: {
  children: React.ReactNode
  style?: React.CSSProperties
  pixelDensity?: number
  fov?: number
  pointerEvents?: 'none' | 'auto'
  className?: string
  envBasePath?: string
}): JSX.Element {
  const contextValue = useMemo<ShaderGradientCanvasContext>(
    () => ({
      envBasePath: envBasePath || defaultEnvBasePath,
    }),
    [envBasePath]
  )

  useShaderChunkFix()

  return (
    <Context.Provider value={contextValue}>
      <Canvas
        style={{ ...style, pointerEvents }}
        resize={{ offsetSize: true }}
        className={className}
        {...canvasProps(pixelDensity, fov)}
      >
        {children}
      </Canvas>
    </Context.Provider>
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
