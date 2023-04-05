import { ComponentType, useState } from 'react'
import React from 'react'
import * as qs from 'query-string'
import {
  updateGradientState,
  useUIStore,
  PRESETS,
  useURLQueryState,
  useQueryState,
} from '../store'
import {
  figma,
  postFigmaMessage,
  postFigmaMessageForSnapShot,
  postFigmaMessageForCreateGIF,
} from './FigmaApi'
import { cx } from '@/utils'

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
    const [progress, setProgress] = useState(0)
    const loading = progress > 0 && progress < 1

    return (
      <Component
        {...props}
        style={{ ...style, cursor: 'pointer' }}
        onClick={() => postFigmaMessageForCreateGIF(setProgress)}
        variant={loading ? 'loading' : 'default'}
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
          let presetNumber
          if (activePreset !== 0) {
            presetNumber = activePreset - 1
          } else {
            presetNumber = PRESETS.length - 1
          }

          setActivePreset(presetNumber)
          updateGradientState(PRESETS[presetNumber].url)
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
          let presetNumber
          if (activePreset !== PRESETS.length - 1) {
            presetNumber = activePreset + 1
          } else {
            presetNumber = 0
          }

          setActivePreset(presetNumber)
          updateGradientState(PRESETS[presetNumber].url)
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
    const [toggleAxis, setToggleAxis] = useQueryState('toggleAxis')

    return (
      <Component
        {...props}
        style={{ ...style, cursor: 'pointer' }}
        onClick={() => setToggleAxis(!toggleAxis)}
      />
    )
  }
}
export function ToolZoomOut(Component): ComponentType {
  return ({ style, ...props }: any) => {
    const [zoomOut, setZoomOut] = useQueryState('zoomOut')

    return (
      <Component
        {...props}
        style={{ ...style, cursor: 'pointer' }}
        onClick={() => setZoomOut(!zoomOut)}
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
  return (props: any) => {
    const setQueryValue = useURLQueryState()

    const [value, setValue] = useState('')
    const [valid, setValid] = useState(true)

    let variant = 'default'
    if (value) {
      if (valid) variant = 'valid'
      else variant = 'invalid'
    }

    return (
      <Component
        {...props}
        onChange={(e) => {
          const value = e.target.value
          setValue(value)

          if (isValidUrl(value)) setValid(true)
          else setValid(false)
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter' && valid) {
            setQueryValue(value)
            props?.onKeyDown() // hide the Input (back to the default variant)
          }
        }}
        onSubmit={() => {
          if (valid) {
            setQueryValue(value)
            props?.onSubmit() // hide the Input (back to the default variant)
          }
        }}
        variant={variant}
      />
    )
  }
}

const isValidUrl = (urlString) => {
  const state = qs.parse(urlString, {
    parseNumbers: true,
    parseBooleans: true,
    arrayFormat: 'index',
  })

  // TODO: more accurate validation check
  return state.color1 && state.color2 && state.color3
}

// styles
export function HideScrollBar(Component): ComponentType {
  return ({ className, ...props }: any) => (
    <Component {...props} className={cx('hide-scrollbar', className)} />
  )
}
