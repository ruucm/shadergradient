import * as React from 'react'
import { initLiveReload } from './bootstrap'

export function useRealtimeComponent(
  originalComponent: React.ComponentType,
  componentName: string
) {
  const [, setForceRerender] = React.useState(0)
  const updateCount = React.useRef(0)
  const updatedInstance = React.useRef(null)

  React.useLayoutEffect(() => {
    const onRebuild = async (event: any) => {
      console.log(
        `[framer-live-esm] Build complete, refreshing ${componentName}`
      )

      const response = await import(
        `http://127.0.0.1:8001/${componentName}.js?${updateCount.current}`
      )
      updateCount.current++
      updatedInstance.current = response[componentName]
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
