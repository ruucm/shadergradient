import create from 'zustand'

const useStore = create(() => {
  return {
    router: null,
    dom: null,
  }
})

export default useStore
