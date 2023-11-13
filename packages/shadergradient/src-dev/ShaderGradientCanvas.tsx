import { Canvas } from '@react-three/fiber'
import { canvasProps } from './consts'
import { useContextLostFallback } from './useContextLostFallback'

export function ShaderGradientCanvas({
  children,
  pointerEvents = 'none',
  pixelDensity = 1,
  fov = 45,
  ...rest
}: any) {
  const [contextLost, handleContextEvents] = useContextLostFallback()

  return (
    <>
      {/* Disable drag rotations of gradeint (for Framer & Figma) */}
      {/* <style>{`#gradientCanvas canvas { pointer-events: none; }`}</style> */}
      {contextLost && <div>Restoring graphics...</div>}
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
