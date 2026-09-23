import { shallowRef, type ShallowRef } from 'vue'

/**
 * Views copy from a source canvas instead of owning a WebGL context, because browsers
 * only keep a small number of contexts alive and evict the oldest ones.
 */
const sources = new Map<string, ShallowRef<HTMLCanvasElement | undefined>>()
const views = new Set<() => void>()
let frame = 0

export function gradientSource(id: string) {
  let source = sources.get(id)
  if (!source) {
    source = shallowRef<HTMLCanvasElement>()
    sources.set(id, source)
  }
  return source
}

function tick() {
  frame = requestAnimationFrame(tick)
  for (const draw of views) draw()
}

export function registerView(draw: () => void) {
  views.add(draw)
  if (!frame) frame = requestAnimationFrame(tick)
  return () => {
    views.delete(draw)
    if (views.size === 0) {
      cancelAnimationFrame(frame)
      frame = 0
    }
  }
}
