import { ComponentType, useEffect, useState } from 'react'
import React from 'react'
import * as qs from 'query-string'
import {
  updateGradientState,
  useUIStore,
  PRESETS,
  useURLQueryState,
  useQueryState,
  useSelection,
} from '../store'
import {
  figma,
  postFigmaMessage,
  postFigmaMessageForSnapShot,
  postFigmaMessageForCreateGIF,
} from './FigmaApi'
import { cx } from '@/utils'
import { clock } from '@/Gradient/comps/Mesh/useTimeAnimation'

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

export function insertCanvasAsImage(Component): ComponentType {
  return ({ style, ...props }: any) => {
    const selection = useFigmaSelections() // need to attatch once to listen figma selection changes
    const enabled = selection > 0

    return (
      <Component
        {...props}
        style={{ ...style, cursor: 'pointer', opacity: enabled ? 1 : 0.5 }}
        onTap={() => {
          if (enabled) postFigmaMessageForSnapShot(() => void 0)
          else props?.onTap() // move to the alert variant
        }}
      />
    )
  }
}

export function extractGIF(Component): ComponentType {
  return ({ style, ...props }: any) => {
    const [progress, setProgress] = useState(-1)
    const loading = progress >= 0 && progress < 1

    const [selection] = useSelection()
    const enabled = selection > 0

    const [animate, setAnimate] = useQueryState('animate')
    const [, setUTime] = useQueryState('uTime')
    const [range] = useQueryState('range')
    const [rangeStart] = useQueryState('rangeStart')
    const [rangeEnd] = useQueryState('rangeEnd')

    const valid = animate === 'on' && range === 'enabled'
    const option = { rangeStart, rangeEnd, setAnimate, setUTime }

    return (
      <Component
        {...props}
        key={progress} // need to flush Framer button
        style={{ ...style, cursor: 'pointer', opacity: enabled ? 1 : 0.5 }}
        onTapGIF={() => {
          if (enabled && valid) {
            setProgress(0)
            console.log('startTime', Date.now())
            clock.start() // restart the clock
            postFigmaMessageForCreateGIF(option, setProgress)
          } else props?.onTapGIF() // move to the alert variant
        }}
        progress={progress * 100}
        variant={loading ? 'loading' : 'default'}
      />
    )
  }
}
export function extractGIFDEV(Component): ComponentType {
  return ({ style, ...props }: any) => {
    return (
      <Component
        {...props}
        style={{ ...style, cursor: 'pointer' }}
        onClick={() => alert('This feature is under development.')}
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

export function LoadViewAfterStyleSheet(Component): ComponentType {
  return (props: any) => {
    const [foundStylesheet, setFoundStylesheet] = useState(false)

    useEffect(() => {
      const interval = setInterval(() => {
        const stylesheet = document.getElementById('shadergradient-app-styles')
        if (stylesheet) setFoundStylesheet(true)
      }, 200)

      return () => clearInterval(interval)
    }, [])

    return (
      <Component
        {...props}
        style={{
          ...props.style,
          opacity: foundStylesheet ? 1 : 0,
          zIndex: 2147483640,
        }}
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

function useFigmaSelections() {
  const [selection, setSelection] = useSelection()

  useEffect(() => {
    parent.postMessage({ pluginMessage: { type: 'UI_READY' } }, '*') // init selection
    onmessage = (event) => {
      const msg = event.data.pluginMessage
      if (msg?.type === 'SELECTION')
        setSelection(event.data.pluginMessage.selection.length)
    }
  }, [])
  return selection
}
