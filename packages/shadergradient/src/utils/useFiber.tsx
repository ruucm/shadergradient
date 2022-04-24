// source from https://github.com/pmndrs/react-three-fiber/issues/262#issuecomment-568274573

import React, { useContext, createContext } from 'react'

const fiberContext = createContext(null)

// For sharing different '@react-three/fiber' modules from Framer & Next.js
export const FiberContextProvider = ({ value, ...props }) => {
  return <fiberContext.Provider value={value} {...props} />
}

export const useFiber = () => {
  const ctx = useContext(fiberContext)
  if (ctx === undefined) {
    throw new Error(`useFiber must be used within a FiberContextProvider.`)
  }
  return ctx
}
