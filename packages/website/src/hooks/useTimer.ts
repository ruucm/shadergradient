import { useState } from 'react'
import { useInterval } from './useInterval'

export function useTimer(tick = false, interval: any = 1000) {
  const [time, setTime] = useState(0)

  useInterval(() => {
    if (tick) setTime((p) => p + 1)
  }, interval)

  return time
}
