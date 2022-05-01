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
        // `http://127.0.0.1:8001/${componentName}.js?${updateCount.current}`
        // `http://localhost:8001/UI/Controls/ShapeControls.js?${updateCount.current}` // should be direct path of the component (or it cached by Framer, so it won't be updated)
        `http://localhost:8001/UI/Inputs/Radio.js?${updateCount.current}` // should be direct path of the component (or it cached by Framer, so it won't be updated)
      )
      updateCount.current++
      const comp = response[componentName]
      console.log('comp', comp)
      updatedInstance.current = comp
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
