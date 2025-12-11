import type { ComponentType } from 'react'
import { useUIStore } from '@/store'
import { parseUrlForControls, isValidUrl } from './utils'
import { useEffect, useState, forwardRef } from 'react'
import {
  PRESETS,
  useURLQueryState,
} from '@/components/Shared/ShaderGradientStateless'

export function HideBanner(Component): ComponentType {
  return (props) => {
    // Remove Framer badge
    useEffect(() => {
      const badge = document.getElementById('__framer-badge-container')
      if (badge) badge.remove()
    }, [])

    return <Component {...props} />
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
  return forwardRef((props, ref) => {
    // State to track if the CSS has finished loading
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
      // 1. Prevent duplicates: Check if the link tag already exists in the head
      let link = document.querySelector(
        `link[href="${href}"]`
      ) as HTMLLinkElement

      if (!link) {
        link = document.createElement('link')
        link.rel = 'stylesheet'
        link.href = href
        document.head.appendChild(link)
      }

      // 2. Define the event handler for successful loading
      const handleLoad = () => setIsLoaded(true)

      // 3. Check if the stylesheet is already loaded (e.g., from cache or another component)
      // If 'sheet' exists, the browser has already parsed the CSS.
      if (link.sheet) {
        setIsLoaded(true)
      } else {
        // Otherwise, wait for the load event
        link.addEventListener('load', handleLoad)
        link.addEventListener('error', () => {
          console.error(`Failed to load CSS: ${href}`)
          // Optionally set loaded to true to show unstyled content as a fallback
          setIsLoaded(true)
        })
      }

      // Cleanup: Remove event listeners on unmount
      // We do NOT remove the <link> tag itself to keep styles available for other components
      return () => {
        link.removeEventListener('load', handleLoad)
      }
    }, [])

    // 4. Block rendering until the CSS is fully loaded
    // This prevents the "Flash of Unstyled Content" (FOUC)
    if (!isLoaded) return null

    return <Component ref={ref} {...props} />
  })
}
