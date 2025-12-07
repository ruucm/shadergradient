import { useEffect, useState } from 'react'

type MemoryStats = {
  supported: boolean
  usedMB?: number
  totalMB?: number
  limitMB?: number
  deviceMemoryGB?: number
  message?: string
}

const toMB = (bytes?: number) =>
  typeof bytes === 'number' ? Math.round(bytes / 1024 / 1024) : undefined

export function useMemoryStats(pollInterval = 1500) {
  const [stats, setStats] = useState<MemoryStats>({ supported: false })

  useEffect(() => {
    // perf APIs are not available during SSR or on some browsers (iOS Safari)
    if (typeof performance === 'undefined') return

    let isMounted = true
    const perfWithMemory = performance as Performance & {
      memory?: {
        usedJSHeapSize: number
        totalJSHeapSize: number
        jsHeapSizeLimit: number
      }
    }

    const deviceMemoryGB =
      typeof navigator !== 'undefined' && 'deviceMemory' in navigator
        ? Number((navigator as any).deviceMemory)
        : undefined

    if (!perfWithMemory.memory) {
      setStats({
        supported: false,
        deviceMemoryGB,
        message: 'performance.memory not exposed',
      })
      return
    }

    const update = () => {
      const { usedJSHeapSize, totalJSHeapSize, jsHeapSizeLimit } =
        perfWithMemory.memory as Required<typeof perfWithMemory.memory>

      if (!isMounted) return

      setStats({
        supported: true,
        usedMB: toMB(usedJSHeapSize),
        totalMB: toMB(totalJSHeapSize),
        limitMB: toMB(jsHeapSizeLimit),
        deviceMemoryGB,
      })
    }

    update()
    const intervalId = window.setInterval(update, pollInterval)

    return () => {
      isMounted = false
      window.clearInterval(intervalId)
    }
  }, [pollInterval])

  return stats
}
