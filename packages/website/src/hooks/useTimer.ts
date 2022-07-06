import { useInterval } from './useInterval'
import { useTimeStore } from '@/helpers/store'

export function useTimer(tick = false, interval: any = 1000) {
  const time = useTimeStore((state) => state.time)
  const increaseTime = useTimeStore((state) => state.increaseTime)

  useInterval(() => {
    if (tick) increaseTime()
  }, interval)

  return time
}
