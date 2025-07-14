import { ControlType } from 'framer'
import { useEffect, useState } from 'react'

/**
 * @framerSupportedLayoutWidth any
 * @framerSupportedLayoutHeight any
 */
export function TailwindLoader({ href }: { href: string }) {
  const tailwindLoaded = useTailwind(href)

  return (
    <>
      {tailwindLoaded ? (
        <span className='text-green-500'>loaded (tailwind)</span>
      ) : (
        <span className='text-red-500'>loading..</span>
      )}
    </>
  )
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

TailwindLoader.propertyControls = {
  href: {
    type: ControlType.String,
    defaultValue: 'https://ruucm.github.io/shadergradient/ui@0.0.0/styles.css',
  },
}
