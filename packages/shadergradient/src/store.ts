import * as qs from 'query-string'
import create from 'zustand'
import { combine } from 'zustand/middleware'
import { initialActivePreset } from './consts'
import { DEFAUlT_PRESET } from './presets'

// without embedMode
// it renders without the dom & other gradient controls at first, and add it after the first updateGradientState() excuted.

export const useQueryStore = create((set) => ({
  ...parseState(),
}))

export const usePropertyStore = create((set) => ({
  hoverState: 0,
  zoomOut: false,
  toggleAxis: false,
  inAbout: false,
}))

// querystate should be a search string
export const updateGradientState = (querystate: any) => {
  const state = parseState(querystate)
  useQueryStore.setState(state, true)
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
