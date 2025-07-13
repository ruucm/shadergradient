export function sleep(sec) {
    return new Promise((resolve) => setTimeout(resolve, sec * 1000))
  }
  
  export async function loadImage(src) {
    const image = new Image()
    image.src = src
    await new Promise((resolve, reject) => {
      image.onload = resolve
      image.onerror = reject
    })
    return image
  }
  