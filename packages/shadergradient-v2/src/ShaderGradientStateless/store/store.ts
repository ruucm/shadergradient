import * as qs from 'query-string'
import { create } from 'zustand'
import { combine } from 'zustand/middleware'
import { DEFAUlT_PRESET, initialActivePreset } from './presetURLs'

// without embedMode
// it renders without the dom & other gradient controls at first, and add it after the first updateGradientState() excuted.

const defaultState = { ...parseState() }
export const useQueryStore = create((set) => defaultState)

export const updateGradientState = (querystate: object | string) => {
  const isString = typeof querystate === 'string'

  let state = querystate
  if (isString) state = parseState(querystate)

  // @ts-ignore
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

// store for UI updates
export const useCursorStore = create((set) => ({
  hoverState: 0,
  hover: 'default',
  updateHoverState: (payload) => set({ hoverState: payload }),
}))
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

// store for Figma Plugin
const useFigmaStore = create((set) => ({
  figma: { selection: 0, user: null },
  setFigma: (payload) =>
    set((prev) => ({ figma: { ...prev.figma, ...payload } })),
}))
export function useFigma() {
  const figma = useFigmaStore((state: any) => state.figma)
  const setFigma = useFigmaStore((state: any) => state.setFigma)
  return [figma, setFigma]
}

export const useBillingIntervalStore = create((set) => ({
  billingInterval: 'year',
  setBillingInterval: (payload) =>
    set((state) => ({ billingInterval: payload })),
}))
export function useBillingInterval() {
  const billingInterval = useBillingIntervalStore(
    (state: any) => state.billingInterval
  )
  const setBillingInterval = useBillingIntervalStore(
    (state: any) => state.setBillingInterval
  )
  return [billingInterval, setBillingInterval]
}
