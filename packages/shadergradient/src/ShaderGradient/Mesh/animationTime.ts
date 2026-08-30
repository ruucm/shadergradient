type AnimationTimeConfig = {
  range?: string
  rangeStart?: number
  rangeEnd?: number
  loop?: 'on' | 'off'
  loopDuration?: number
}

type AnimationTimeFrame = {
  elapsedTime: number
  uTime: number
  uLoop: 0 | 1
  uLoopDuration?: number
}

export function advanceAnimationTime(
  elapsedTime: number,
  delta: number,
  { range, rangeStart, rangeEnd, loop, loopDuration }: AnimationTimeConfig
): AnimationTimeFrame {
  const nextElapsedTime = elapsedTime + delta
  const hasValidLoop =
    loop === 'on' &&
    typeof loopDuration === 'number' &&
    Number.isFinite(loopDuration) &&
    loopDuration > 0

  if (hasValidLoop) {
    return {
      elapsedTime: nextElapsedTime,
      uTime: nextElapsedTime % loopDuration,
      uLoop: 1,
      uLoopDuration: loopDuration,
    }
  }

  const hasValidRange =
    range === 'enabled' &&
    typeof rangeStart === 'number' &&
    Number.isFinite(rangeStart) &&
    typeof rangeEnd === 'number' &&
    Number.isFinite(rangeEnd) &&
    rangeEnd > rangeStart

  if (hasValidRange) {
    const rangedTime = rangeStart + nextElapsedTime

    if (rangedTime >= rangeEnd) {
      return {
        elapsedTime: 0,
        uTime: rangeStart,
        uLoop: 0,
      }
    }

    return {
      elapsedTime: nextElapsedTime,
      uTime: rangedTime,
      uLoop: 0,
    }
  }

  return {
    elapsedTime: nextElapsedTime,
    uTime: nextElapsedTime,
    uLoop: 0,
  }
}
