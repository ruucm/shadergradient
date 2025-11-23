import type { ComponentType } from 'react'
import { useUIStore } from '@/store'
import { parseUrlForControls, isValidUrl } from './utils'
import { useEffect, useState } from 'react'
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
    const presetTitle = PRESETS[activePreset].title

    return <Component {...props} text={presetTitle} />
  }
}

export function togglePreset(Component): ComponentType {
  return (props) => {
    const setInputMode = useUIStore((state) => state.setInputMode)

    return (
      <Component
        {...props}
        onClick={() => {
          setInputMode('preset')
          console.log('preset')
        }}
      />
    )
  }
}

export function toggleUrl(Component): ComponentType {
  return (props) => {
    const setInputMode = useUIStore((state) => state.setInputMode)

    return (
      <Component
        {...props}
        onClick={() => {
          setInputMode('url')
          console.log('url')
        }}
      />
    )
  }
}

export function UrlInput(Component): ComponentType {
  return (props: any) => {
    const setQueryValue = useURLQueryState()
    const setUrlInput = useUIStore((state) => state.setUrlInput)

    const [value, setValue] = useState('')
    const [valid, setValid] = useState(true)

    let variant = 'default'
    if (value) {
      if (valid) variant = 'valid'
      else variant = 'invalid'
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

const href = 'https://ruucm.github.io/shadergradient/ui@latest/styles.css'

export function TailwindWrapper(Component): ComponentType {
  return (props: any) => {
    const tailwindLoaded = useTailwind(href)

    // Remove Framer badge
    useEffect(() => {
      const badge = document.getElementById('__framer-badge-container')
      if (badge) badge.remove()
    }, [])

    return (
      <Component
        {...props}
        style={{
          ...props.style,
          opacity: tailwindLoaded ? 1 : 0,
        }}
      />
    )
  }
}

function useTailwind(href: string) {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    // Prevent duplicate loading
    const existingLink = Array.from(
      document.head.querySelectorAll('link')
    ).find((link) => link.href === href)

    if (!existingLink) {
      const link = document.createElement('link')
      link.rel = 'stylesheet'
      link.href = href
      document.head.appendChild(link)

      setLoaded(true)

      return () => {
        document.head.removeChild(link)
      }
    } else {
      // Already loaded
      setLoaded(true)
    }
  }, [])

  return loaded
}
