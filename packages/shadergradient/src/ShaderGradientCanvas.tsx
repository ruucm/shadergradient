import { useEffect, createContext, useMemo, useContext } from 'react'
import { Canvas } from '@react-three/fiber'
import { canvasProps } from '@/consts'
import * as THREE from 'three'
import { useInView } from './hooks/useInView'

type ShaderGradientCanvasContext = {
  envBasePath?: string
}

type ShaderGradientCanvasProps = {
  children: React.ReactNode
  style?: React.CSSProperties
  pixelDensity?: number
  fov?: number
  pointerEvents?: 'none' | 'auto'
  className?: string
  envBasePath?: string
  lazyLoad?: boolean
  threshold?: number
  rootMargin?: string
  preserveDrawingBuffer?: boolean
  powerPreference?: WebGLPowerPreference
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
  lazyLoad = true,
  threshold = 0.1,
  rootMargin = '0px',
  preserveDrawingBuffer,
  powerPreference,
}: ShaderGradientCanvasProps) {
  const { isInView, containerRef } = useInView(lazyLoad, threshold, rootMargin)

  const contextValue = useMemo<ShaderGradientCanvasContext>(
    () => ({ envBasePath }),
    [envBasePath]
  )

  useShaderChunkFix()

  return (
    <div ref={containerRef} style={{ width: '100%', height: '100%', ...style }}>
      {(!lazyLoad || isInView) && (
        <Context.Provider value={contextValue}>
          <Canvas
            id='gradientCanvas' // need id to get an image to Figma export
            key={pixelDensity + fov} // need to refresh the canvas when pixelDensity or fov changes
            style={{ pointerEvents }}
            resize={{ offsetSize: true }}
            className={className}
            {...canvasProps(pixelDensity, fov, {
              preserveDrawingBuffer,
              powerPreference,
            })}
          >
            {children}
          </Canvas>
        </Context.Provider>
      )}
    </div>
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
