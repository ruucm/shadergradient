import { useEffect, useRef, useState } from 'react'

/**
 * useFPS - Custom hook for measuring frames per second
 * @param detailed - If true, tracks additional metrics (avg, min, max)
 * @returns FPS metrics object
 */
export function useFPS(detailed: boolean = false) {
  const [fps, setFps] = useState(0)
  const [avgFps, setAvgFps] = useState(0)
  const [minFps, setMinFps] = useState(Infinity)
  const [maxFps, setMaxFps] = useState(0)
  const frameCountRef = useRef(0)
  const lastTimeRef = useRef(performance.now())
  const fpsHistoryRef = useRef<number[]>([])
  const rafIdRef = useRef<number | null>(null)

  useEffect(() => {
    const measureFPS = () => {
      frameCountRef.current++
      const currentTime = performance.now()
      const deltaTime = currentTime - lastTimeRef.current

      // Update FPS every second
      if (deltaTime >= 1000) {
        const currentFps = Math.round(
          (frameCountRef.current * 1000) / deltaTime
        )
        setFps(currentFps)

        if (detailed) {
          // Track FPS history for average calculation
          fpsHistoryRef.current.push(currentFps)
          if (fpsHistoryRef.current.length > 60) {
            // Keep last 60 seconds
            fpsHistoryRef.current.shift()
          }

          // Calculate statistics
          const avg =
            fpsHistoryRef.current.reduce((sum, f) => sum + f, 0) /
            fpsHistoryRef.current.length
          setAvgFps(Math.round(avg))

          const min = Math.min(...fpsHistoryRef.current)
          const max = Math.max(...fpsHistoryRef.current)
          setMinFps(min)
          setMaxFps(max)
        }

        frameCountRef.current = 0
        lastTimeRef.current = currentTime
      }

      rafIdRef.current = requestAnimationFrame(measureFPS)
    }

    rafIdRef.current = requestAnimationFrame(measureFPS)

    return () => {
      if (rafIdRef.current !== null) {
        cancelAnimationFrame(rafIdRef.current)
      }
    }
  }, [detailed])

  return { fps, avgFps, minFps, maxFps }
}
