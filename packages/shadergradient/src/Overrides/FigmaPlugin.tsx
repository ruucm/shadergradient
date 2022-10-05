import type { ComponentType } from 'react'
import React from 'react'
import _ from 'lodash'
import * as qs from 'query-string'
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

const useStore = createStore({ gradientProps: {} })

export function UrlToProps(Component): ComponentType {
  return (props) => {
    const [store] = useStore()
    const gradientProps: any = store.gradientProps
    if (!_.isEmpty(gradientProps)) gradientProps.control = 'props'

    return <Component {...props} {...gradientProps} />
  }
}
export function UrlInput(Component): ComponentType {
  return (props) => {
    const [, setStore] = useStore()

    return (
      <Component
        {...props}
        onChange={(value) =>
          setStore({
            gradientProps: qs.parse(value, {
              parseNumbers: true,
              parseBooleans: true,
              arrayFormat: 'index',
            }),
          })
        }
      />
    )
  }
}

// styles
export function HideScrollBar(Component): ComponentType {
  return ({ className, ...props }: any) => (
    <Component {...props} className={cx('hide-scrollbar', className)} />
  )
}

// cannot use framer's createStore with unknown reasons
// https://gist.github.com/koenbok/ae7b94f9fefccc16a34589af344db789
function createStore<T>(state: T) {
  // Store the initial state, copy the object if it's an object
  let storeState: T = typeof state === 'object' ? { ...state } : state

  // Keep a list of all the listener, in the form of React hook setters
  const storeSetters = new Set<any>()

  // Create a set function that updates all the listeners / setters
  const setStoreState = (state: Partial<T>) => {
    // If the state is an object, make sure we copy it
    storeState = typeof state === 'object' ? { ...storeState, ...state } : state
    // Update all the listeners / setters with the new value
    storeSetters.forEach((setter) => setter(storeState))
  }

  // Create the actual hook based on everything above
  function useStore(): [T, typeof setStoreState] {
    // Create the hook we are going to use as a listener
    const [state, setState] = React.useState(storeState)
    // If we unmount the component using this hook, we need to remove the listener
    // @ts-ignore
    React.useEffect(() => () => storeSetters.delete(setState), [])
    // But right now, we need to add the listener
    storeSetters.add(setState)
    // Return the state and a function to update the central store
    return [state, setStoreState]
  }

  return useStore
}
