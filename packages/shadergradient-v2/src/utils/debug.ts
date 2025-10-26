type DebugCategory = 'performance' | 'render'

const debugState: { [key in DebugCategory]: boolean } = {
  performance: false,
  render: true,
}

export const debug = {
  enable: (category: DebugCategory) => {
    debugState[category] = true
  },
  disable: (category: DebugCategory) => {
    debugState[category] = false
  },
  enableAll: () => {
    Object.keys(debugState).forEach((key) => {
      debugState[key as DebugCategory] = true
    })
  },
  disableAll: () => {
    Object.keys(debugState).forEach((key) => {
      debugState[key as DebugCategory] = false
    })
  },
  performance: (...args: any[]) => {
    if (debugState.performance) {
      console.log('[Performance]', ...args)
    }
  },
  render: (...args: any[]) => {
    if (debugState.render) {
      console.log('[Render]', ...args)
    }
  },
}

// Expose the 'debug' function to the global 'window' object for accessibility across the application
declare global {
  interface Window {
    debug: typeof debug
  }
}

if (typeof window !== 'undefined') {
  window.debug = debug
}
