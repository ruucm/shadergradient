// https://github.com/gregberge/react-merge-refs/blob/main/src/mergeRefsReact16.ts

import { Ref, RefCallback } from 'react'

function assignRef<T>(
  ref: Ref<T> | undefined | null,
  value: T | null
): ReturnType<RefCallback<T>> {
  if (typeof ref === 'function') {
    return ref(value)
  } else if (ref) {
    // @ts-ignore
    ref.current = value
  }
}

export function mergeRefs<T>(refs: (Ref<T> | undefined)[]): Ref<T> {
  return (value: T | null) => {
    for (const ref of refs) assignRef(ref, value)
  }
}
