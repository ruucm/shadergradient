import { useEffect } from 'react'
import { PRESETS } from './presetURLs'
import { useUIStore, updateGradientState } from './store'

let pageLoaded = false
export function usePresetToStore() {
  // ----------------------------- Preset to Custom Material ---------------------------------
  const activePreset = useUIStore((state: any) => state.activePreset)
  useEffect(() => {
    let gradientURL

    // CASE 1. use search params at the first load.
    if (
      !pageLoaded &&
      window.location.search?.includes('pixelDensity') // checking just window.location.search existing is not valid for the Framer Preview search (?target=preview-web)
    )
      gradientURL = window.location.search
    // CASE 2. When activePreset changes by UI buttons
    else gradientURL = PRESETS[activePreset].url

    updateGradientState(gradientURL)

    pageLoaded = true
  }, [activePreset])
}
