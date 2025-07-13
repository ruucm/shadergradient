import type { ComponentType } from 'react'
import { useUIStore } from '@/store'
import { parseUrlForControls } from './utils'
import { useState, useEffect } from 'react'
import {
  PRESETS,
} from '@/components/Shared/ShaderGradientStateless'
// import { ui } from "https://framer.com/m/ui-gy7Z.js"
// const { PRESETS, useURLQueryState } = ui


export function updateTheme(Component): ComponentType {
  return (props) => {
      // State to track the current theme
      const [theme, setTheme] = useState("")
      
      useEffect(() => {
          // Read theme from the body's data attribute set by Framer
          setTheme(document.body.dataset.framerTheme)
          console.log(props)
      }, [])

      return (
          <Component
              {...props}
              // Apply "preset" variant for light theme, "dark" for dark theme
              variant={theme === "light" ? "preset" : "dark"}
          />
      )
  }
}


export function AddToCanvas(Component): ComponentType {
  return (props) => {
    // Get current state from the UI store
    const activePreset = useUIStore((state) => state.activePreset)
    const inputMode = useUIStore((state) => state.inputMode)
    const urlInput = useUIStore((state) => state.urlInput)

      return (
          <Component
              {...props}
              // Show "Active" variant when there's a preset selected or valid URL input
              variant={
                  inputMode === "preset" ||
                  (inputMode === "url" && urlInput !== "")
                      ? "Active"
                      : "Inactive"
              }
              onClick={async () => {
                  // Handle URL input mode
                  if (inputMode === "url" && urlInput !== "") {
                      console.log(parseUrlForControls(urlInput))

                      // Send parsed URL controls to parent Framer window
                      window.parent.postMessage(
                          {
                              message: "ADD_TO_CANVAS",
                              ...parseUrlForControls(urlInput),
                          },
                          "*"
                      )
                  } 
                  // Handle preset mode
                  else if (inputMode === "preset") {
                      // Construct URL from active preset
                      const activePresetUrl =
                          "https://shadergradient.co/customize" +
                          PRESETS[activePreset].url
                      console.log(parseUrlForControls(activePresetUrl))
                      
                      // Send parsed preset controls to parent Framer window
                      window.parent.postMessage(
                          {
                              message: "ADD_TO_CANVAS",
                              ...parseUrlForControls(activePresetUrl),
                          },
                          "*"
                      )
                  }
              }}
          />
      )
  }
}