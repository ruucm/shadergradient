import { create } from 'zustand'
import { combine, persist, createJSONStorage } from 'zustand/middleware'

export const useUIStore = create(
  combine(
    {
      activePreset: 0,
      mode: 'full',
      loadingPercentage: 0,
      inputMode: 'preset',
      urlInput: '', //preset or url
      error: '',
      figmaPage: '',
    },
    (set) => ({
      setActivePreset: (by: number) => set((state) => ({ activePreset: by })),
      setInputMode: (data: any) => set((state) => ({ ...state, input: data })),
      setMode: (data: any) => set((state) => ({ ...state, mode: data })),
      setUrlInput: (data: any) =>
        set((state) => ({ ...state, urlInput: data })),
      setError: (data: any) => set((state) => ({ ...state, error: data })),
      setFigmaPage: (data: any) =>
        set((state) => ({ ...state, figmaPage: data })),
      setLoadingPercentage: (data: any) =>
        set((state) => ({ ...state, loadingPercentage: data })),
    })
  )
)

interface ScrollableBoxState {
  activeIndex: number
  setActiveIndex: (index: number) => void
}

export const useScrollableBoxStore = create<ScrollableBoxState>()(
  persist(
    (set) => ({
      activeIndex: 0,
      setActiveIndex: (index: number) => set({ activeIndex: index }),
    }),
    {
      name: 'scrollable-box-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
)

export const useFigmaStore = create((set) => ({
  figma: { selection: 0, user: null, error: '', page: '' },
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
