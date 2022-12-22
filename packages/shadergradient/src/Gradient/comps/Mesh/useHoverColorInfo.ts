import { updateGradientState, useCursorStore } from '@/store'
import { useEffect } from 'react'

export function useHoverColorInfo({ color1, color2, color3 }) {
  // when color is hovered
  const hoverState = useCursorStore((state: any) => state.hoverState)

  useEffect(() => {
    if (hoverState !== 0) updateGradientState({ zoomOut: true })
    else updateGradientState({ zoomOut: false })
  }, [hoverState])

  return [hoverState, getHoverColor(hoverState, { color1, color2, color3 })]
}
function getHoverColor(hoverState: number, { color1, color2, color3 }: any) {
  if (hoverState === 1) return { color1, color2: '#000000', color3: '#000000' }
  else if (hoverState === 2)
    return { color1: '#000000', color2, color3: '#000000' }
  else if (hoverState === 3)
    return { color1: '#000000', color2: '#000000', color3 }
  else return { color1, color2, color3 }
}
