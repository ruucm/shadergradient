import { useEffect, createContext, useMemo, useContext } from 'react'
import { Canvas } from '@react-three/fiber'
import { canvasProps, defaultEnvBasePath } from '@/consts'
import * as THREE from 'three'
import { Placeholder } from './Placeholder'
import { useInView } from './hooks/useInView'

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
  lazyLoad = true,
}: {
  children: React.ReactNode
  style?: React.CSSProperties
  pixelDensity?: number
  fov?: number
  pointerEvents?: 'none' | 'auto'
  className?: string
  envBasePath?: string
  lazyLoad?: boolean
}): JSX.Element {
  const { isInView, containerRef } = useInView(lazyLoad)

  const contextValue = useMemo<ShaderGradientCanvasContext>(
    () => ({
      envBasePath: envBasePath || defaultEnvBasePath,
    }),
    [envBasePath]
  )

  useShaderChunkFix()

  return (
    <div ref={containerRef}>
      {!lazyLoad || isInView ? (
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
      ) : (
        <Placeholder
          title='Loading gradient...'
          color1='#ff7e5f'
          color2='#feb47b'
        />
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
