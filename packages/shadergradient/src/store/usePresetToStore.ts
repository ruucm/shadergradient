import { useEffect } from 'react'
import { PRESETS } from './presets'
import { useUIStore, updateGradientState } from './store'

let pageLoaded = false
export function usePresetToStore() {
  // ----------------------------- Preset to Custom Material ---------------------------------
  const activePreset = useUIStore((state: any) => state.activePreset)
  console.log('activePreset', activePreset)
  useEffect(() => {
    let gradientURL

    // CASE 1. use search params at the first load.
    if (
      !pageLoaded &&
      window.location.search?.includes('pixelDensity') // checking just window.location.search existing is not valid for the Framer Preview search (?target=preview-web)
    ) {
      console.log('[CASE 1] usePresetToStore (Site first loaded with params)')
      gradientURL = window.location.search
    }

    // CASE 2. When activePreset changes by UI buttons
    else if (activePreset !== -1) {
      console.log('[CASE 2] usePresetToStore (navigate)')
      gradientURL = PRESETS[activePreset].url
    }

    updateGradientState(gradientURL)

    pageLoaded = true
  }, [activePreset])
}
