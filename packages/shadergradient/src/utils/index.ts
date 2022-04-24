export const cx = (...classes) => classes.filter((a) => !!a).join(' ')

export { FiberCanvas, FiberContextProvider, useFiber } from './useFiber'
