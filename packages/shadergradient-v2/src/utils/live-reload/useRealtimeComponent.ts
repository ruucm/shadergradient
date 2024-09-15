import * as React from 'react'
import { initLiveReload } from './bootstrap'
import { RenderTarget } from 'framer'

export const isDev = [RenderTarget.canvas, RenderTarget.preview].includes(
  RenderTarget.current()
)

export function useRealtimeComponent(
  originalComponent: React.ComponentType,
  componentName: string
) {
  if (!isDev) return originalComponent

  const [, setForceRerender] = React.useState(0)
  const updateCount = React.useRef(0)
  const updatedInstance = React.useRef(null)

  React.useLayoutEffect(() => {
    const onRebuild = async (event: any) => {
      console.log(
        `[framer-live-esm] Build complete, refreshing ${componentName}`
      )

      const response = await import(
        `http://127.0.0.1:8000/${componentName}.mjs?${updateCount.current}`
      )
      updateCount.current++
      updatedInstance.current = response[componentName.split('/').pop()] // the last element is the component name (e.g /auth/Init -> Init)
      setForceRerender(updateCount.current)
    }

    const setupHandler = (retryCount = 0) => {
      // @ts-ignore
      if (!window.framerRealtimeSocket) {
        setTimeout(() => setupHandler(retryCount + 1), retryCount + 1 * 500)
        return
      }

      // @ts-ignore
      window.framerRealtimeSocket.on('build', onRebuild)
    }

    setupHandler()

    return () => {
      // @ts-ignore
      if (window.framerRealtimeSocket) {
        // @ts-ignore
        window.framerRealtimeSocket.off('build', onRebuild)
      }
    }
  }, [componentName])

  React.useEffect(() => {
    initLiveReload()
  }, [])

  return updatedInstance.current || originalComponent
}
