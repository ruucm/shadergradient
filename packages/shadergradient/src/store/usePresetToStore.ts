import { useEffect } from 'react'
import { PRESETS } from './presets'
import { useUIStore, updateGradientState } from './store'

let pageLoaded = false
let loadedPreset

export function usePresetToStore() {
  // ----------------------------- Preset to Custom Material ---------------------------------
  const activePreset = useUIStore((state: any) => state.activePreset)
  useEffect(() => {
    console.log('usePresetToStore (useEffect)')
    console.log('activePreset', activePreset)

    let gradientURL
    const hasSearchParam = window.location.search?.includes('pixelDensity') // checking just window.location.search existing is not valid for the Framer Preview search (?target=preview-web)

    // CASE 1. use search params at the first load.
    if (hasSearchParam && !pageLoaded) {
      console.log(
        '[CASE 1] usePresetToStore (use search params at the first load.)'
      )
      gradientURL = window.location.search
    }
    // CASE 2. When activePreset changes by UI buttons
    else if (
      (activePreset === 0 && !gradientURL) || // initial case
      loadedPreset !== activePreset
    ) {
      console.log(
        '[CASE 2] usePresetToStore (When activePreset changes by UI buttons)'
      )
      gradientURL = PRESETS[activePreset].url
      loadedPreset = activePreset
    }

    updateGradientState(gradientURL)
    pageLoaded = true
  }, [activePreset])
}
