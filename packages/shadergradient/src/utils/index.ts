export const cx = (...classes) => classes.filter((a) => !!a).join(' ')

export {
  FramerCanvas,
  fiberContext,
  FiberContextProvider,
  useFiber,
} from './useFiber'
