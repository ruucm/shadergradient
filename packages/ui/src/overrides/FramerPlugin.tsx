import type { ComponentType } from 'react'
import { useUIStore } from '@/store'
import { parseUrlForControls } from './utils'
import { useState, useEffect } from 'react'
import {
  PRESETS,
  useURLQueryState,
} from '@/components/Shared/ShaderGradientStateless'
// import { ui } from "https://framer.com/m/ui-gy7Z.js"
// const { PRESETS, useURLQueryState } = ui


export function updateTheme(Component): ComponentType {
  return (props) => {
      const [theme, setTheme] = useState("")
      useEffect(() => {
          setTheme(document.body.dataset.framerTheme)
          console.log(props)
      }, [])
      const lightgrey = "#F2F2F2"
      const darkgrey = "#292929"

      return (
          <Component
              {...props}
              // gradientPlaceholder={theme === "light" ? lightgrey : darkgrey}
              // textColor={theme === "light" ? "black" : "white"}
              // arrowButtonBG={theme === "light" ? "white" : "#424242"}
              variant={theme === "light" ? "preset" : "dark"}

          />
      )
  }
}


export function AddToCanvas(Component): ComponentType {
  return (props) => {

    const activePreset = useUIStore((state) => state.activePreset)
    const inputMode = useUIStore((state) => state.inputMode)
    const urlInput = useUIStore((state) => state.urlInput)

      return (
          <Component
              {...props}
              variant={
                  inputMode === "preset" ||
                  (inputMode === "url" && urlInput !== "")
                      ? "Active"
                      : "Inactive"
              }
              onClick={async () => {
                  if (inputMode === "url" && urlInput !== "") {
                      console.log(parseUrlForControls(urlInput))

                      window.parent.postMessage(
                          {
                              message: "ADD_TO_CANVAS",
                              ...parseUrlForControls(urlInput),
                          },
                          "*"
                      )
                  } else if (inputMode === "preset") {
                      const activePresetUrl =
                          "https://shadergradient.co/customize" +
                          PRESETS[activePreset].url
                      console.log(parseUrlForControls(activePresetUrl))
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