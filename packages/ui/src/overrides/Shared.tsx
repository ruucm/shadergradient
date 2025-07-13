import type { ComponentType } from 'react'
import { useUIStore } from '@/store'
import { parseUrlForControls, isValidUrl } from './utils'
import { useState, useEffect } from 'react'
import {
  PRESETS,
  useURLQueryState,
} from '@/components/Shared/ShaderGradientStateless'
// import { ui } from "https://framer.com/m/ui-gy7Z.js"
// const { PRESETS, useURLQueryState } = ui

export function HideBanner(Component): ComponentType {
    return (props) => {
      return <Component {...props} style={{ zIndex: 10000000000 }} />
    }
  }
  
  export function CurrentPreset(Component): ComponentType {
    return (props) => {
      const activePreset = useUIStore((state) => state.activePreset)
      const presetTitle =  PRESETS[activePreset].title
  
      return <Component {...props} text={presetTitle}/>
    }
  }
  
  export function togglePreset(Component): ComponentType {
    return (props) => {
        // const [store, setStore] = useStore()
  
        // const inputMode = ui.useUIStore((state) => state.inputMode)
        const setInputMode = useUIStore((state) => state.setInputMode)
  
        return (
            <Component
                {...props}
                onClick={() => {
                    // setStore({ mode: "preset" })
                    setInputMode("preset")
                    console.log("preset")
                }}
            />
        )
    }
  }
  
  export function toggleUrl(Component): ComponentType {
    return (props) => {
        // const [store, setStore] = useStore()
        const setInputMode = useUIStore((state) => state.setInputMode)
  
        return (
            <Component
                {...props}
                onClick={() => {
                    // setStore({ mode: "url" })
                    setInputMode("url")
                    console.log("url")

                }}
            />
        )
    }
  }
  
  
  export function UrlInput(Component): ComponentType {
    return (props: any) => {
        const setQueryValue = useURLQueryState()
        const setUrlInput = useUIStore((state) => state.setUrlInput)
  
        const [value, setValue] = useState("")
        const [valid, setValid] = useState(true)
  
        let variant = "default"
        if (value) {
            if (valid) variant = "valid"
            else variant = "invalid"
        }
  
        return (
            <Component
                {...props}
                onChange={(e) => {
                    const value = e.target.value
                    setValue(value)
  console.log(isValidUrl(value))
                    if (isValidUrl(value)) {
                        setValid(true)
                        setQueryValue(value)
                      
                        setUrlInput(value)
                        console.log(parseUrlForControls(value))
                    } else {
                        setValid(false)
                    }
                }}
            />
        )
    }
  }
  