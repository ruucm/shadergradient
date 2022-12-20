import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload } from '@react-three/drei'
import { canvasProps } from './consts'
import useQueryState from './useQueryState'

export function GradientCanvas({ children, ...rest }) {
  const [pixelDensity] = useQueryState('pixelDensity')
  const [fov] = useQueryState('fov')

  return (
    <>
      {/* Disable drag rotations of gradeint (for Framer & Figma) */}
      {/* <style>{`#gradientCanvas canvas { pointer-events: none; }`}</style> */}
      <Canvas
        id='gradientCanvas'
        key={fov}
        resize={{ offsetSize: true }}
        {...canvasProps(pixelDensity, fov)}
        {...rest}
      >
        <Preload all />
        <OrbitControls />
        {children}
      </Canvas>
    </>
  )
}
