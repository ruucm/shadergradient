import create from 'zustand'

const useStore = create(() => {
  return {
    router: null,
    dom: null,
    scroll: 0,
  }
})
export default useStore
