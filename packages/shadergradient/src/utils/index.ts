export const cx = (...classes) => classes.filter((a) => !!a).join(' ')

// degree to radian
export function dToR(d: number) {
  return (d / 180) * Math.PI
}
export function dToRArr(degrees) {
  return degrees.map((d) => dToR(d))
}

export { FiberContextProvider, useFiber } from './useFiber'
