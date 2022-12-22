import * as qs from 'query-string'
import create from 'zustand'
import { combine } from 'zustand/middleware'
import { DEFAUlT_PRESET, initialActivePreset } from './presets'

// without embedMode
// it renders without the dom & other gradient controls at first, and add it after the first updateGradientState() excuted.

export const useQueryStore = create((set) => ({
  ...parseState(),
}))

// store for UI updates
export const useCursorStore = create((set) => ({
  hoverState: 0,
  hover: 'default',
  updateHoverState: (payload) => set({ hoverState: payload }),
}))

export const updateGradientState = (querystate: object | string) => {
  const isString = typeof querystate === 'string'

  let state = querystate
  if (isString) state = parseState(querystate)

  useQueryStore.setState(state, isString) // replace true if it's a string
}

// defaultGradient could be replaced by window.location.search
function parseState(search = DEFAUlT_PRESET) {
  return qs.parse(search, {
    parseNumbers: true,
    parseBooleans: true,
    arrayFormat: 'index',
  })
}

export const useDomStore = create(() => {
  return { dom: null }
})

export const useUIStore = create(
  combine(
    { activePreset: initialActivePreset, mode: 'full', loadingPercentage: 0 },
    (set) => ({
      setActivePreset: (by: number) => set((state) => ({ activePreset: by })),
      setMode: (data: any) => set((state) => ({ ...state, mode: data })),
      setLoadingPercentage: (data: any) =>
        set((state) => ({ ...state, loadingPercentage: data })),
    })
  )
)
