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
  const [contextLost, handleContextEvents]: any = useContextLostFallback()

  if (contextLost === 1) return <Placeholder />
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
        onCreated={handleContextEvents}
        {...rest}
      >
        {children}
      </Canvas>
    </>
  )
}

export function Placeholder({
  title = 'The graphics context has been lost. Please wait while we try to restore it...',
}) {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(to right, #ff7e5f, #feb47b)',
        color: 'white',
        fontSize: '20px',
        textAlign: 'center',
        padding: '20px',
        fontFamily: 'Inter',
        fontWeight: '500',
      }}
    >
      <p>{title}</p>
    </div>
  )
}
