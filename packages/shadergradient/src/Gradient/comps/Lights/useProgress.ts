// modified from https://github.com/pmndrs/drei/blob/master/src/core/useProgress.tsx
// use useState instead of zustand cause it is not works on the Framer canvas

import { useState } from 'react'
import { DefaultLoadingManager } from 'three'
// import create from 'zustand'

type Data = {
  errors: string[]
  active: boolean
  progress: number
  item: string
  loaded: number
  total: number
}
let saveLastTotalLoaded = 0

function useProgress() {
  const [s, setS] = useState<any>({})

  // DefaultLoadingManager.onStart = (item, loaded, total) => {
  // const progress =
  //   ((loaded - saveLastTotalLoaded) / (total - saveLastTotalLoaded)) * 100
  // setS((p) => ({
  //   ...p,
  //   active: true,
  //   item,
  //   loaded,
  //   total,
  //   progress,
  // }))
  // }
  // DefaultLoadingManager.onError = (item) =>
  // setS((state) => ({ errors: [...state.errors, item] }))

  DefaultLoadingManager.onLoad = () => {
    setS((p) => ({ ...p, active: false }))
  }
  DefaultLoadingManager.onProgress = (item, loaded, total) => {
    if (loaded === total) {
      saveLastTotalLoaded = total
    }

    const progress =
      ((loaded - saveLastTotalLoaded) / (total - saveLastTotalLoaded)) * 100 ||
      100
    setS((p) => ({
      ...p,
      active: true,
      item,
      loaded,
      total,
      progress,
    }))
  }

  return s
}

export { useProgress }
