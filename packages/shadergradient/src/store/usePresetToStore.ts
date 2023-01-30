import { useEffect } from 'react'
import { PRESETS } from './presets'
import { useUIStore, updateGradientState } from './store'

let pageLoaded = false
let loadedPreset

export function usePresetToStore() {
  // ----------------------------- Preset to Custom Material ---------------------------------
  const activePreset = useUIStore((state: any) => state.activePreset)
  useEffect(() => {
    let gradientURL

    const hasSearchParam = window.location.search?.includes('pixelDensity')
    // CASE 1. use search params at the first load.
    if (
      !pageLoaded &&
      hasSearchParam // checking just window.location.search existing is not valid for the Framer Preview search (?target=preview-web)
    ) {
      console.log('[CASE 1] usePresetToStore')
      gradientURL = window.location.search
    }
    // CASE 2. When activePreset changes by UI buttons
    else if (loadedPreset !== activePreset) {
      console.log('[CASE 2] usePresetToStore')
      gradientURL = PRESETS[activePreset].url
      loadedPreset = activePreset
    }

    updateGradientState(gradientURL)

    pageLoaded = true
  }, [activePreset])
}
