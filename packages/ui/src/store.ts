import { create } from 'zustand'
import { combine, persist, createJSONStorage } from 'zustand/middleware'
import { createClient, SupabaseClient } from '@supabase/supabase-js'

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
      easyView: false,
    },
    (set) => ({
      setActivePreset: (by: number) => set((state) => ({ activePreset: by })),
      setInputMode: (data: any) => {
        console.log('[useUIStore] setInputMode', data)
        return set((state) => ({ ...state, inputMode: data }))
      },
      setMode: (data: any) => set((state) => ({ ...state, mode: data })),
      setUrlInput: (data: any) =>
        set((state) => ({ ...state, urlInput: data })),
      setError: (data: any) => set((state) => ({ ...state, error: data })),
      setFigmaPage: (data: any) =>
        set((state) => ({ ...state, figmaPage: data })),
      setLoadingPercentage: (data: any) =>
        set((state) => ({ ...state, loadingPercentage: data })),
      setEasyView: (data: any) =>
        set((state) => ({ ...state, easyView: data })),
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

// Scroll store for Web/Scroll.tsx
interface ScrollStore {
  highlightWord: number
  currentSection: number
  setHighlightWord: (word: number) => void
  setCurrentSection: (section: number) => void
}

export const useScrollStore = create<ScrollStore>()((set) => ({
  highlightWord: 0,
  currentSection: 0,
  setHighlightWord: (word: number) => set({ highlightWord: word }),
  setCurrentSection: (section: number) => set({ currentSection: section }),
}))

// UI store for Web/UI.tsx
interface UIOverrideStore {
  randomColor: number[][]
  slider: number
  toggle: boolean
  setRandomColor: (color: number[][]) => void
  setSlider: (slider: number) => void
  setToggle: (toggle: boolean) => void
}

export const useUIOverrideStore = create<UIOverrideStore>()((set) => ({
  randomColor: [
    [100, 180, 255],
    [92, 92, 124],
    [200, 200, 200],
  ],
  slider: 0,
  toggle: false,
  easyView: false,
  setRandomColor: (color: number[][]) => set({ randomColor: color }),
  setSlider: (slider: number) => set({ slider }),
  setToggle: (toggle: boolean) => set({ toggle }),
}))

// FigmaPlugin store for FigmaPlugin/UI.tsx
interface FigmaPluginStore {
  currentTab: number
  scrollingTo: number | null
  share: string
  easyView: boolean
  setCurrentTab: (tab: number) => void
  setScrollingTo: (to: number | null) => void
  setShare: (share: string) => void
  setEasyView: (easyView: boolean) => void
}

export const useFigmaPluginStore = create<FigmaPluginStore>()((set) => ({
  currentTab: 0,
  scrollingTo: null,
  share: 'url',
  easyView: false,
  setCurrentTab: (tab: number) => set({ currentTab: tab }),
  setScrollingTo: (to: number | null) => set({ scrollingTo: to }),
  setShare: (share: string) => set({ share }),
  setEasyView: (easyView: boolean) => set({ easyView }),
}))

// Supabase Store
interface SupabaseStore {
  supabase: SupabaseClient | null
  initSupabase: (url: string, key: string) => void
}

export const useSupabaseStore = create<SupabaseStore>((set) => ({
  supabase: null,
  initSupabase: (url: string, key: string) => {
    console.log('[useSupabaseStore] initSupabase called')
    if (!url || !key) {
      console.warn('[useSupabaseStore] Missing URL or key, skipping initialization')
      return
    }
    console.log('[useSupabaseStore] Creating Supabase client with URL:', url)
    const client = createClient(url, key)
    console.log('[useSupabaseStore] Supabase client created successfully')
    set({ supabase: client })
  },
}))
