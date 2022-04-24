export const cx = (...classes) => classes.filter((a) => !!a).join(' ')

export { FramerCanvas, FiberContextProvider, useFiber } from './useFiber'
