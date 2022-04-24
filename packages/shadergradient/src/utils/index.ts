export const cx = (...classes) => classes.filter((a) => !!a).join(' ')

export { FiberContextProvider, useFiber } from './useFiber'
