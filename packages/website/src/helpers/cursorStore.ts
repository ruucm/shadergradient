import create from 'zustand'

export const useCursorStore = create(() => {
  return {
    hover: 'default',
  }
})
