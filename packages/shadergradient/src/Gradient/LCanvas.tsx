import React from 'react'
import { canvasProps } from '../consts'
import { useQueryState } from '../hooks/index'
import { FiberContextProvider } from '../utils/index'

export function LCanvas({
  children,
  importedFiber = null, // passed imported fiber & drei from usual React App
  ...rest
}) {
  const { Canvas } = importedFiber
  const [pixelDensity] = useQueryState('pixelDensity')

  return (
    <Canvas
      resize={{ offsetSize: true }}
      {...canvasProps(pixelDensity)}
      {...rest}
    >
      {/* forward the context once more! */}
      <FiberContextProvider value={importedFiber}>
        {children}
      </FiberContextProvider>
    </Canvas>
  )
}
