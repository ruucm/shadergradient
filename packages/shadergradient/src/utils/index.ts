export const cx = (...classes) => classes.filter((a) => !!a).join(' ')

// degree to radian
export function dToR(d: number) {
  return (d / 180) * Math.PI
}
export function dToRArr(degrees) {
  return degrees.map((d) => dToR(d))
}

export { FiberContextProvider, useFiber } from './useFiber'
// export { useRealtimeComponent } from './useRealtimeComponent/index' // this export make website(next.js) error

export const sleep = (sec) => {
  return new Promise((resolve) => setTimeout(resolve, sec * 1000))
}
