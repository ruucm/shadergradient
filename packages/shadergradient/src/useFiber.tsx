// source from https://github.com/pmndrs/react-three-fiber/issues/262#issuecomment-568274573

import React, { useContext, createContext } from 'react'

export function FiberCanvas({ fiber, children }) {
  const { Canvas } = fiber
  const value = useContext(context)

  return (
    <Canvas>
      {/* forward the context once more! */}w
      <context.Provider value={value}>{children}</context.Provider>
    </Canvas>
  )
}

const context = createContext(null)

// For sharing different '@react-three/fiber' modules from Framer & Next.js
export const FiberContextProvider = ({ value, ...props }) => {
  return <context.Provider value={value} {...props} />
}

export const useFiber = () => {
  const ctx = useContext(context)
  if (ctx === undefined) {
    throw new Error(`useFiber must be used within a FiberContextProvider.`)
  }
  return ctx
}
