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
