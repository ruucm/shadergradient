import React from 'react'
import { canvasProps } from '../consts'
import { useQueryState } from '../hooks/index'
import { FiberContextProvider } from '../utils/index'

export function LCanvas({
  children,
  importedFiber = null, // passed imported fiber & drei from usual React App
  ...rest
}) {
  console.log('importedFiber', importedFiber)
  const { Canvas } = importedFiber
  const [pixelDensity] = useQueryState('pixelDensity')
  const [fov] = useQueryState('fov')

  return (
    <Canvas
      id='gradientCanvas'
      key={fov}
      resize={{ offsetSize: true }}
      {...canvasProps(pixelDensity, fov)}
      {...rest}
    >
      {/* forward the context once more! */}
      <FiberContextProvider value={importedFiber}>
        {children}
      </FiberContextProvider>
    </Canvas>
  )
}
