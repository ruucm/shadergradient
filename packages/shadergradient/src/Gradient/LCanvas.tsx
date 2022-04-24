import React, { useContext } from 'react'
import { canvasProps } from '../consts'
import { useQueryState } from '../hooks/index'
import { FiberContextProvider, fiberContext } from '../utils/index'

export function LCanvas({
  children,
  importedFiber = null, // passed imported fiber & drei from usual React App
  ...rest
}) {
  const framerFiber = useContext(fiberContext) // passed fiber & drei from Framer the App
  const fiber = importedFiber || framerFiber
  const { Canvas } = fiber

  const [pixelDensity] = useQueryState('pixelDensity')

  return (
    <Canvas
      resize={{ offsetSize: true }}
      {...canvasProps(pixelDensity)}
      {...rest}
    >
      {/* forward the context once more! */}
      <FiberContextProvider value={fiber}>{children}</FiberContextProvider>
    </Canvas>
  )
}
