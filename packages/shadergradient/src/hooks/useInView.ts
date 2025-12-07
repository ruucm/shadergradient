import { useEffect, useState, useRef } from 'react'

export function useInView(
  enabled: boolean = true,
  threshold: number = 0.1,
  rootMargin: string = '0px'
) {
  const [isInView, setIsInView] = useState(!enabled)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!enabled) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting)
      },
      {
        threshold,
        rootMargin,
      }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [enabled, threshold, rootMargin])

  return { isInView, containerRef }
}
