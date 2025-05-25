import { create } from 'zustand'
import { combine } from 'zustand/middleware'

export const useUIStore = create(
  combine({ activePreset: 0, mode: 'full', loadingPercentage: 0 }, (set) => ({
    setActivePreset: (by: number) => set((state) => ({ activePreset: by })),
    setMode: (data: any) => set((state) => ({ ...state, mode: data })),
    setLoadingPercentage: (data: any) =>
      set((state) => ({ ...state, loadingPercentage: data })),
  }))
)


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