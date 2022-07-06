import create from 'zustand'

const useStore = create(() => {
  return {
    router: null,
    dom: null,
  }
})
export default useStore

export const useTimeStore = create((set: any) => ({
  time: 0,
  increaseTime: () => set((state) => ({ time: state.time + 1 })),
}))
