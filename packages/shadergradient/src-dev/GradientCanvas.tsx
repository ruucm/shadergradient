import { Canvas } from '@react-three/fiber'
import { canvasProps } from './consts'
import useQueryState from './useQueryState'

export function GradientCanvas({
  children,
  pointerEvents = 'none',
  ...rest
}: any) {
  const [pixelDensity] = useQueryState('pixelDensity')
  const [fov] = useQueryState('fov')

  return (
    <>
      {/* Disable drag rotations of gradeint (for Framer & Figma) */}
      {/* <style>{`#gradientCanvas canvas { pointer-events: none; }`}</style> */}
      <Canvas
        id='gradientCanvas'
        key={pixelDensity + fov}
        resize={{ offsetSize: true }}
        {...canvasProps(pixelDensity, fov)}
        style={{ pointerEvents }}
        {...rest}
      >
        {children}
      </Canvas>
    </>
  )
}
