import { Canvas } from '@react-three/fiber'
import { canvasProps } from '@/consts'
import { useContextLostFallback } from './useContextLostFallback'
import { Placeholder } from './Placeholder'
import { CSSProperties, ReactNode } from 'react'

type ShaderGradientCanvasT = {
  children: ReactNode
  pointerEvents?: CSSProperties['pointerEvents']
  pixelDensity?: number
  fov?: number
  [x: string]: any
}

export function ShaderGradientCanvas({
  children,
  pointerEvents = 'none',
  pixelDensity = 1,
  fov = 45,
  ...rest
}: ShaderGradientCanvasT) {
  const [contextLost, handleContextEvents]: any = useContextLostFallback()

  if (contextLost === 1)
    return (
      <Placeholder title='The graphics context has been lost. Please wait while we try to restore it...' />
    )
  return (
    <>
      {/* Disable drag rotations of gradeint (for Framer & Figma) */}
      {/* <style>{`#gradientCanvas canvas { pointer-events: none; }`}</style> */}
      {/* @ts-ignore */}
      <Canvas
        id='gradientCanvas'
        key={pixelDensity + fov}
        resize={{ offsetSize: true }}
        {...canvasProps(pixelDensity, fov)}
        style={{ pointerEvents }}
        onCreated={handleContextEvents}
        {...rest}
      >
        {children}
      </Canvas>
    </>
  )
}
