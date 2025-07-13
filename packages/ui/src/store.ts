import { create } from 'zustand'
import { combine } from 'zustand/middleware'

export const useUIStore = create(
  combine({ activePreset: 0, mode: 'full', loadingPercentage: 0, inputMode: 'preset', urlInput: '' //preset or url
  }, (set) => ({
    setActivePreset: (by: number) => set((state) => ({ activePreset: by })),
    setInputMode: (data: any) => set((state) => ({ ...state, input: data })),
    setMode: (data: any) => set((state) => ({ ...state, mode: data })),
    setUrlInput: (data: any) => set((state) => ({ ...state, urlInput: data })),
    setLoadingPercentage: (data: any) =>
      set((state) => ({ ...state, loadingPercentage: data })),
  }))
)

const useFigmaStore = create((set) => ({
  figma: { selection: 0, user: null , error:'' },
  setFigma: (payload) =>
    set((prev) => ({ figma: { ...prev.figma, ...payload } })),
  setError: (data: any) => set((state) => ({ ...state, error: data })),
}))
export function useFigma() {
  const figma = useFigmaStore((state: any) => state.figma)
  const setFigma = useFigmaStore((state: any) => state.setFigma)
  const error = useFigmaStore((state: any) => state.error)
  const setError = useFigmaStore((state: any) => state.setError)
  return [figma, setFigma, error, setError]
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