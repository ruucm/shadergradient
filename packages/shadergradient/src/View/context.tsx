import { createContext, useContext } from 'react'

export const SceneContext = createContext(null)

export const SceneContextProvider = ({ value, ...props }) => {
  return <SceneContext.Provider value={value} {...props} />
}

export function useSceneContext() {
  const ctx = useContext(SceneContext)
  return ctx
}
