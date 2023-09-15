import { loadImage } from './utils'

export async function exportImage() {
  return new Promise(async (resolve, reject) => {
    const r3fCanvas = document.getElementById('gradientCanvas')
      .children[0] as HTMLCanvasElement

    const dataURL = r3fCanvas.toDataURL('image/png', 1.0) // full quality

    const image = await loadImage(dataURL)
    console.log('Image has loaded')
    const view: any = await imageToUint8Array(image)
    console.log(`${view.length} bytes!.`)
    resolve(view)
  })
}

async function imageToUint8Array(image) {
  return new Promise((resolve, reject) => {
    // create a canvas for converto image to uint8array
    const canvas = document.createElement('canvas')
    const context = canvas.getContext('2d')

    context.canvas.width = image.width
    context.canvas.height = image.height
    context.drawImage(image, 0, 0)

    context.canvas.toBlob((blob) =>
      blob
        .arrayBuffer()
        .then((buffer) => resolve(new Uint8Array(buffer)))
        .catch(reject)
    )
  })
}
