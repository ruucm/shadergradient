import { Canvas } from '@react-three/fiber'
import { useEffect } from 'react'
import { canvasProps } from './consts'
import { useUIStore, updateGradientState, PRESETS } from '@/store'
import useQueryState from './useQueryState'

export function GradientCanvas({
  children,
  pointerEvents = 'none',
  ...rest
}: any) {
  usePresetToStore() // init gradient state with preset

  const [pixelDensity] = useQueryState('pixelDensity')
  const [fov] = useQueryState('fov')

  return (
    <>
      {/* Disable drag rotations of gradeint (for Framer & Figma) */}
      {/* <style>{`#gradientCanvas canvas { pointer-events: none; }`}</style> */}
      <Canvas
        id='gradientCanvas'
        key={fov}
        resize={{ offsetSize: true }}
        {...canvasProps(pixelDensity, fov)}
        style={{ pointerEvents }}
        {...rest}
      >
        {children}
      </Canvas>
    </>
  )
}

let pageLoaded = false
function usePresetToStore() {
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
