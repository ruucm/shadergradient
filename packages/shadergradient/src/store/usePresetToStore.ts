import { useEffect } from 'react'
import { PRESETS } from './presets'
import { useUIStore, updateGradientState } from './store'

let pageLoaded = false
let loadedPreset

let gradientURL

export function usePresetToStore() {
  // ----------------------------- Preset to Custom Material ---------------------------------
  const activePreset = useUIStore((state: any) => state.activePreset)
  useEffect(() => {
    console.log('usePresetToStore (useEffect)')
    console.log('activePreset', activePreset)

    const hasSearchParam = window.location.search?.includes('pixelDensity') // checking just window.location.search existing is not valid for the Framer Preview search (?target=preview-web)

    // CASE 1. use search params at the first load.
    if (hasSearchParam && !pageLoaded) {
      console.log(
        '[CASE 1] usePresetToStore (use search params at the first load.)'
      )
      console.log('gradientURL (1)', gradientURL)
      gradientURL = window.location.search
    }
    // CASE 2. When activePreset changes by UI buttons
    else if (
      (activePreset === 0 && !gradientURL) || // initial case (when there is no search param)
      (loadedPreset && loadedPreset !== activePreset) // when activePreset changes by UI buttons after the first load (if there is search param, it will be ignored at first then after loadedPreset set it will be used)
    ) {
      console.log(
        '[CASE 2] usePresetToStore (When activePreset changes by UI buttons)'
      )
      console.log('gradientURL (2)', gradientURL)
      gradientURL = PRESETS[activePreset].url
      loadedPreset = activePreset
    }

    updateGradientState(gradientURL)
    pageLoaded = true
  }, [activePreset])
}
