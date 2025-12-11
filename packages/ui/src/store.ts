import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { createClient, SupabaseClient } from '@supabase/supabase-js'

type Mode = 'full' | string
type InputMode = 'preset' | string

type UIState = {
  activePreset: number
  mode: Mode
  loadingPercentage: number
  inputMode: InputMode
  urlInput: string
  error: string
  figmaPage: string
  easyView: boolean
  isExporting: boolean
  setActivePreset: (by: number) => void
  setInputMode: (mode: InputMode) => void
  setMode: (mode: Mode) => void
  setUrlInput: (value: string) => void
  setError: (message: string) => void
  setFigmaPage: (page: string) => void
  setLoadingPercentage: (percentage: number) => void
  setEasyView: (easyView: boolean) => void
  setIsExporting: (isExporting: boolean) => void
}

export const useUIStore = create<UIState>()((set) => ({
  activePreset: 0,
  mode: 'full',
  loadingPercentage: 0,
  inputMode: 'preset',
  urlInput: '',
  error: '',
  figmaPage: '',
  easyView: false,
  isExporting: false,
  setActivePreset: (by) => set({ activePreset: by }),
  setInputMode: (mode) => set({ inputMode: mode }),
  setMode: (mode) => set({ mode }),
  setUrlInput: (value) => set({ urlInput: value }),
  setError: (message) => set({ error: message }),
  setFigmaPage: (page) => set({ figmaPage: page }),
  setLoadingPercentage: (percentage) => set({ loadingPercentage: percentage }),
  setEasyView: (easyView) => set({ easyView }),
  setIsExporting: (isExporting) => set({ isExporting }),
}))

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
      storage: createJSONStorage<ScrollableBoxState>(() => localStorage),
    }
  )
)

type FigmaUser = { id?: string } | null
type EditorType = 'figma' | 'slides' | 'buzz' | null
type FigmaState = {
  selection: number
  user: FigmaUser
  error: string
  page: string
  editorType: EditorType
  nodeWidth: number
  nodeHeight: number
}
type FigmaStore = {
  figma: FigmaState
  setFigma: (payload: Partial<FigmaState>) => void
}

export const useFigmaStore = create<FigmaStore>((set) => ({
  figma: {
    selection: 0,
    user: null,
    error: '',
    page: '',
    editorType: null,
    nodeWidth: 0,
    nodeHeight: 0,
  },
  setFigma: (payload) =>
    set((prev) => ({ figma: { ...prev.figma, ...payload } })),
}))

export function useFigma(): [FigmaState, FigmaStore['setFigma']] {
  const figma = useFigmaStore((state) => state.figma)
  const setFigma = useFigmaStore((state) => state.setFigma)

  return [figma, setFigma]
}

type BillingIntervalState = {
  billingInterval: 'year' | 'month' | string
  setBillingInterval: (payload: BillingIntervalState['billingInterval']) => void
}

export const useBillingIntervalStore = create<BillingIntervalState>((set) => ({
  billingInterval: 'year',
  setBillingInterval: (payload) => set({ billingInterval: payload }),
}))
export function useBillingInterval(): [
  BillingIntervalState['billingInterval'],
  BillingIntervalState['setBillingInterval']
] {
  const billingInterval = useBillingIntervalStore(
    (state) => state.billingInterval
  )
  const setBillingInterval = useBillingIntervalStore(
    (state) => state.setBillingInterval
  )
  return [billingInterval, setBillingInterval]
}

// Scroll store for Web/Scroll.tsx
interface ScrollStore {
  highlightWord: number
  currentSection: string
  setHighlightWord: (word: number) => void
  setCurrentSection: (section: string) => void
}

export const useScrollStore = create<ScrollStore>()((set) => ({
  highlightWord: 0,
  currentSection: 'intro-start',
  setHighlightWord: (word: number) => set({ highlightWord: word }),
  setCurrentSection: (section: string) => set({ currentSection: section }),
}))

// UI store for Web/UI.tsx
interface UIOverrideStore {
  randomColor: number[][]
  slider: number
  toggle: boolean
  easyView: boolean
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

export const useSupabaseStore = create<SupabaseStore>((set, get) => ({
  supabase: null,
  initSupabase: (url: string, key: string) => {
    console.log('[useSupabaseStore] initSupabase called')
    if (!url || !key) {
      console.warn(
        '[useSupabaseStore] Missing URL or key, skipping initialization'
      )
      return
    }

    if (get().supabase) return

    console.log('[useSupabaseStore] Creating Supabase client with URL:', url)
    const client = createClient(url, key)
    console.log('[useSupabaseStore] Supabase client created successfully')

    set({ supabase: client })
  },
}))
