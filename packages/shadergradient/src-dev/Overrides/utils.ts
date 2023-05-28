export function sleep(sec) {
  return new Promise((resolve) => setTimeout(resolve, sec * 1000))
}
