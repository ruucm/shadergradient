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