import type { ComponentType } from 'react'
import React from 'react'
import { useURLQueryState } from '../hooks/index'
import { PRESETS } from '../presets'
import { updateGradientState, usePropertyStore, useUIStore } from '../store'
import { cx } from '../utils/index'
import {
  figma,
  postFigmaMessage,
  postFigmaMessageForSnapShot,
} from './FigmaApi'

// example from https://github.com/sonnylazuardi/framer-sites-figma-plugin/
export function createRectangle(Component): ComponentType {
  return (props) => {
    return (
      <Component
        {...props}
        onClick={async () => {
          postFigmaMessage(() => {
            const ellipse = figma.createRectangle()
            ellipse.resize(300, 300)
          })
        }}
      />
    )
  }
}

export function extractGIF(Component): ComponentType {
  return ({ style, ...props }: any) => {
    return (
      <Component
        {...props}
        style={{ ...style, cursor: 'pointer' }}
        onClick={() => alert('Under development 🙏')}
      />
    )
  }
}

export function insertCanvasAsImage(Component): ComponentType {
  return ({ style, ...props }: any) => {
    return (
      <Component
        {...props}
        style={{ ...style, cursor: 'pointer' }}
        onClick={() => postFigmaMessageForSnapShot(() => void 0)}
      />
    )
  }
}

export function ArrowLeft(Component): ComponentType {
  return ({ style, ...props }: any) => {
    const activePreset = useUIStore((state) => state.activePreset)
    const setActivePreset = useUIStore((state) => state.setActivePreset)

    return (
      <Component
        {...props}
        style={{ ...style, cursor: 'pointer' }}
        onClick={() => {
          if (activePreset !== 0) {
            setActivePreset(activePreset - 1)
          } else {
            setActivePreset(PRESETS.length - 1)
          }
        }}
      />
    )
  }
}
export function ArrowRight(Component): ComponentType {
  return ({ style, ...props }: any) => {
    const activePreset = useUIStore((state) => state.activePreset)
    const setActivePreset = useUIStore((state) => state.setActivePreset)

    return (
      <Component
        {...props}
        style={{ ...style, cursor: 'pointer' }}
        onClick={() => {
          if (activePreset !== PRESETS.length - 1) {
            setActivePreset(activePreset + 1)
          } else {
            setActivePreset(0)
          }
        }}
      />
    )
  }
}

export function ActiveTitle(Component): ComponentType {
  return (props) => {
    const activePreset = useUIStore((state) => state.activePreset)

    return <Component {...props} text={PRESETS[activePreset].title} />
  }
}

// ToolsBox
export function Tool3dAxis(Component): ComponentType {
  return ({ style, ...props }: any) => {
    const toggleAxis = usePropertyStore((state: any) => state.toggleAxis)

    return (
      <Component
        {...props}
        style={{ ...style, cursor: 'pointer' }}
        onClick={() => usePropertyStore.setState({ toggleAxis: !toggleAxis })}
      />
    )
  }
}
export function ToolZoomOut(Component): ComponentType {
  return ({ style, ...props }: any) => {
    const zoomOut = usePropertyStore((state: any) => state.zoomOut)

    return (
      <Component
        {...props}
        style={{ ...style, cursor: 'pointer' }}
        onClick={() => usePropertyStore.setState({ zoomOut: !zoomOut })}
      />
    )
  }
}
export function ToolCopy(Component): ComponentType {
  return ({ style, ...props }: any) => {
    const [copyUrlText, setCopyUrl] = React.useState('copy url')

    return (
      <Component
        {...props}
        style={{ ...style, cursor: 'pointer' }}
        onClick={async () => {
          window.navigator.clipboard.writeText(window.location.href)
          setCopyUrl('copied!')
          await setTimeout(() => {
            setCopyUrl('copy url')
          }, 1000)
        }}
      />
    )
  }
}
export function ToolUndo(Component): ComponentType {
  return ({ style, ...props }: any) => {
    return (
      <Component
        {...props}
        style={{ ...style, cursor: 'pointer' }}
        onClick={() => {
          const prevUrls = window.history.state.prevUrls || []

          if (prevUrls.length > 1) {
            prevUrls.pop() // remove current url

            const lastURL = new URL(prevUrls[prevUrls.length - 1]).search
            updateGradientState(lastURL)

            prevUrls.pop() // remove the updated url(lastURL)
            window.history.pushState({ prevUrls }, document.title, '') // sync the prevUrls
          } else alert('no history')
        }}
      />
    )
  }
}

export function UrlInput(Component): ComponentType {
  return (props) => {
    const setQueryValue = useURLQueryState()
    // TODO: add validation
    return <Component {...props} onChange={(value) => setQueryValue(value)} />
  }
}

// styles
export function HideScrollBar(Component): ComponentType {
  return ({ className, ...props }: any) => (
    <Component {...props} className={cx('hide-scrollbar', className)} />
  )
}
